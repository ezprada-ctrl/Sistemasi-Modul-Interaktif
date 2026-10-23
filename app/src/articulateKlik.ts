// Menghitung objek yang BISA DIKLIK di sebuah paket Articulate Storyline -
// penyebut "x/y klik objek" di kolom Articulate Command Center.
//
// Sumbernya file data hasil publish Storyline (html5/data/js/<idSlide>.js),
// dibaca waktu paket SCORM dirakit (scormZip.ts). Tiap file berisi
// `window.globalProvideData('slide', '<json>')`; objek dengan pemicu klik
// (onrelease/onpress/...) itulah yang dihitung, termasuk yang ada di layer.
// id objeknya SAMA PERSIS dengan atribut data-model-id di layar - dicek pakai
// paket ADP KB 1 - jadi modul bisa memastikan klik peserta memang mengenai
// objek yang terdaftar, bukan area kosong.
//
// Yang sengaja TIDAK dihitung: Next/Back. Tombol pemutar ada di frame.js (gak
// dibaca sama sekali); tombol buatan di dalam slide dikenali dari aksinya -
// history_prev/next, atau lompat (gotoplay) ke slide persis sebelum/sesudahnya.
// Lompat ke slide yang jauh (menu, "Pre-test") tetap dihitung: itu pilihan isi.
//
// Paket Rise gak punya file ini -> null, dan Command Center tampil tanpa "/y".

export interface ArtKlik {
  /** jumlah objek bisa-diklik, null = paket gak bisa dibaca (Rise / format lain) */
  total: number | null;
  /** id objeknya (= data-model-id di layar) */
  ids: string[];
}

const PEMICU_KLIK = new Set(['onrelease', 'onpress', 'onclick', 'ondoubleclick']);
const AKSI_NAV = new Set(['history_prev', 'history_next', 'nextslide', 'prevslide', 'next_slide', 'prev_slide',
  'trigger_next_slide', 'trigger_prev_slide']);
const FILE_BUKAN_SLIDE = new Set(['data.js', 'frame.js', 'paths.js']);

/** Buka escape string JavaScript berkutip tunggal (\' \" \\ \n \uXXXX ...).
 *  Isinya JSON yang DIBUNGKUS jadi string JS, jadi harus dibuka dulu baru
 *  JSON.parse - `\'` dan `\\\\` di dalamnya bukan escape JSON yang sah. */
const ESC: Record<string, string> = { n: '\n', r: '\r', t: '\t', b: '\b', f: '\f', v: '\v', '0': '\0' };
function bukaStringJs(s: string): string {
  return s.replace(/\\(u[0-9a-fA-F]{4}|x[0-9a-fA-F]{2}|[\s\S])/g, (_, c: string) => {
    if (c.length > 1) return String.fromCharCode(parseInt(c.slice(1), 16));
    return ESC[c] ?? c;
  });
}

/** Isi `globalProvideData('jenis', '<json>')` -> objek, atau null. */
function bacaData(teks: string): any {
  const m = teks.match(/globalProvideData\('[a-z]+',\s*'([\s\S]*)'\);?\s*$/);
  if (!m) return null;
  try { return JSON.parse(bukaStringJs(m[1])); } catch { /* lanjut */ }
  try { return JSON.parse(m[1]); } catch { return null; }
}

/** Semua aksi di dalam satu pemicu, termasuk yang bersarang di if/else DAN
 *  yang disimpan di grup aksi (exe_actiongroup -> actionGroups[id]). Tombol
 *  Next Storyline justru begitu: pemicunya cuma `exe_actiongroup
 *  ActGrpOnNextButtonClick`, lompatannya ada di dalam grup itu - tanpa membuka
 *  grup, tombol Next ADP KB 1 lolos terhitung sebagai objek isi. */
function kumpulkanAksi(o: any, out: any[], grup: Record<string, any>, sudah = new Set<string>()) {
  if (Array.isArray(o)) { o.forEach(x => kumpulkanAksi(x, out, grup, sudah)); return; }
  if (!o || typeof o !== 'object') return;
  if (typeof o.kind === 'string') out.push(o);
  if (o.kind === 'exe_actiongroup' && typeof o.id === 'string') {
    const id = o.id.split('.').pop() as string;   // "_this.ActGrp..." / "_player.ActGrp..."
    if (!sudah.has(id)) {
      sudah.add(id);
      if (grup[id]) kumpulkanAksi(grup[id], out, grup, sudah);
      // Grup bawaan pemutar yang gak ikut tertulis di file slide: namanya
      // sendiri sudah cukup jelas (ActGrpOnNextButtonClick / ...Prev...).
      else if (/On(Next|Prev|Previous|Back)ButtonClick$/i.test(id)) out.push({ kind: 'nextslide' });
    }
  }
  for (const v of Object.values(o)) if (v && typeof v === 'object') kumpulkanAksi(v, out, grup, sudah);
}

/**
 * files: path relatif di dalam paket -> isi teks, CUKUP file html5/data/js/*.js.
 * Hasil null kalau paket ini bukan Storyline (gak ada data.js).
 */
export function hitungObjekKlik(files: Map<string, string>): ArtKlik | null {
  const ambil = (nama: string) => {
    for (const [p, t] of files) if (p.toLowerCase().endsWith('html5/data/js/' + nama)) return t;
    return null;
  };
  const dataTeks = ambil('data.js');
  if (!dataTeks) return null;
  const data = bacaData(dataTeks);
  if (!data || !Array.isArray(data.scenes)) return { total: null, ids: [] };

  // Urutan slide buat mengenali "lompat ke slide sebelah" = Next/Back buatan.
  const urutan: string[] = [];
  for (const sc of data.scenes) {
    if (sc?.id === 'PromptScene') continue;   // slide sistem (tanya resume / galat)
    for (const sl of sc?.slides || []) if (sl?.id) urutan.push(sl.id);
  }

  const ids = new Set<string>();
  let gagal = false;
  for (const [p, teks] of files) {
    const nama = p.split('/').pop() || '';
    if (!/html5\/data\/js\/[^/]+\.js$/i.test(p) || FILE_BUKAN_SLIDE.has(nama.toLowerCase())) continue;
    const slide = bacaData(teks);
    if (!slide) { gagal = true; continue; }
    const posisi = urutan.indexOf(slide.id);
    // Grup aksi milik slide ini + grup global pemutar (data.js).
    const grup: Record<string, any> = { ...(data.actionGroups || {}), ...(slide.actionGroups || {}) };
    const jalan = (o: any) => {
      if (Array.isArray(o)) { o.forEach(jalan); return; }
      if (!o || typeof o !== 'object') return;
      if (Array.isArray(o.events) && o.id) {
        const klik = o.events.filter((e: any) => PEMICU_KLIK.has(e?.kind));
        if (klik.length) {
          const aksi: any[] = [];
          klik.forEach((e: any) => kumpulkanAksi(e.actions, aksi, grup));
          const nav = aksi.some(a => {
            if (AKSI_NAV.has(a.kind)) return true;
            if (a.kind !== 'gotoplay') return false;
            const tujuan = String(a.objRef?.value || '');
            if (/#?(next|prev)/i.test(tujuan.split('.').pop() || '')) return true;
            const i = urutan.indexOf(tujuan.split('.').pop() || '');
            return posisi >= 0 && i >= 0 && Math.abs(i - posisi) === 1;
          });
          if (!nav) ids.add(String(o.id));
        }
      }
      for (const v of Object.values(o)) if (v && typeof v === 'object') jalan(v);
    };
    jalan(slide);
  }
  // Satu file slide gagal dibaca = penyebutnya pasti kurang. Lebih jujur gak
  // punya penyebut sama sekali daripada x/y yang y-nya kekecilan.
  return gagal ? { total: null, ids: [] } : { total: ids.size, ids: Array.from(ids) };
}

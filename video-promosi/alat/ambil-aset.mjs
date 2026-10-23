/* Pemotret layar aplikasi TEMPA untuk video promosi (bukan bagian aplikasi).
 *   1. Jalankan Edge tanpa kepala:  msedge --headless=new --remote-debugging-port=9333 --user-data-dir=<profil> about:blank
 *   2. node video-promosi/alat/ambil-aset.mjs [--hanya=nama1,nama2]
 * Jendela 1366 × 768, skala 1,5 (gambar 2049 × 1152) -> video-promosi/aset/<nama>.jpg + aset/posisi.json (css px pada foto).
 *
 * Proyek yang dibuka: modul "Gambaran Umum dan Tahapan Pemeriksaan" (draft penyusun di server).
 * SEMUA penyimpanan draft & kiriman aktivitas DIBLOKIR di jaringan, jadi apa pun yang diubah di
 * layar selama memotret (tema, centang rekam, dll.) tidak pernah sampai ke server.
 * Command Center memakai Mode Contoh (data karangan bawaan aplikasi). */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const DIR = path.dirname(url.fileURLToPath(import.meta.url));
const TUJUAN = path.join(DIR, '..', 'aset');
const APP = 'https://template-modul-html-frontend.vercel.app/';
const SLUG = 'salma_materi-1-salma-mt10fhuz-3';
const PPTX = path.resolve(DIR, '../../../Pelatihan Pajak Daerah/Bahan/1.0 APKD - Pemeriksaan Pajak Daerah.pptx');
const HANYA = (process.argv.find((a) => a.startsWith('--hanya=')) || '').slice(8).split(',').filter(Boolean);
const tunda = (ms) => new Promise((r) => setTimeout(r, ms));

const l = await (await fetch('http://127.0.0.1:9333/json')).json();
const pg = l.find((x) => x.type === 'page' && !x.url.includes('extension'));
const ws = new WebSocket(pg.webSocketDebuggerUrl); await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const tg = new Map();
const kirim = (method, params = {}) => new Promise((r) => { const i = ++id; tg.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const H = [{ name: 'Access-Control-Allow-Origin', value: '*' }, { name: 'Access-Control-Allow-Methods', value: 'GET,POST,DELETE,OPTIONS' }, { name: 'Access-Control-Allow-Headers', value: '*' }, { name: 'Content-Type', value: 'application/json' }];
ws.addEventListener('message', (m) => {
  const d = JSON.parse(m.data);
  if (d.id && tg.has(d.id)) { tg.get(d.id)(d); tg.delete(d.id); return; }
  if (d.method === 'Fetch.requestPaused') {
    const q = d.params.request;
    const blok = (q.method !== 'GET' && /\/api\/drafts/.test(q.url)) || /supabase\.co\/rest/.test(q.url);
    if (blok) kirim('Fetch.fulfillRequest', { requestId: d.params.requestId, responseCode: q.method === 'OPTIONS' ? 204 : 200, responseHeaders: H, body: q.method === 'OPTIONS' ? '' : Buffer.from('{"ok":true}').toString('base64') });
    else kirim('Fetch.continueRequest', { requestId: d.params.requestId });
  }
});
await kirim('Page.enable'); await kirim('DOM.enable');
await kirim('Fetch.enable', { patterns: [{ urlPattern: '*', requestStage: 'Request' }] });
await kirim('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1.5, mobile: false });

/* fungsi bantu di halaman, dipasang ulang tiap langkah (halaman bisa dimuat ulang) */
const BANTU = `
const w=ms=>new Promise(r=>setTimeout(r,ms));
const T=(t,s)=>[...document.querySelectorAll(s||'button,a,span,label,h2,h3,h4,th,td,p,b,div,code')].find(e=>e.textContent.trim()===t);
const TM=(t,s)=>[...document.querySelectorAll(s||'*')].filter(e=>e.textContent.includes(t)&&e.offsetParent!==null).sort((a,b)=>a.textContent.length-b.textContent.length)[0];
const R=e=>{if(!e)return null;const b=e.getBoundingClientRect();return {x:+b.left.toFixed(1),y:+b.top.toFixed(1),w:+b.width.toFixed(1),h:+b.height.toFixed(1)}};
const tab=i=>document.querySelector('[data-demo=tab-'+i+']');
const naik=(e,minW)=>{while(e&&e.getBoundingClientRect().width<minW)e=e.parentElement;return e};
const geserKe=async(e,y)=>{if(!e)return;window.scrollBy(0,e.getBoundingClientRect().top-y);await w(700)};
const rapikan=()=>{ /* nama penyusun di alamat draft tidak ikut terpotret */
  document.querySelectorAll('span,code,div').forEach(e=>{ if(e.children.length===0&&e.textContent.includes('${SLUG}')){ e.textContent=e.textContent.replace('${SLUG}','modul-pemeriksaan-pajak'); }});
};
`;
async function ev(js) {
  const r = await kirim('Runtime.evaluate', { expression: `(async()=>{${BANTU}\n${js}})()`, awaitPromise: true, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'galat');
  return r.result?.result?.value;
}
const posisi = fs.existsSync(path.join(TUJUAN, 'posisi.json')) ? JSON.parse(fs.readFileSync(path.join(TUJUAN, 'posisi.json'), 'utf8')) : {};
async function foto(nama, catat) {
  if (HANYA.length && !HANYA.includes(nama)) return;
  await ev('rapikan(); return 1');
  if (catat) posisi[nama] = await ev(catat);
  const s = await kirim('Page.captureScreenshot', { format: 'jpeg', quality: 90 });
  fs.writeFileSync(path.join(TUJUAN, nama + '.jpg'), Buffer.from(s.result.data, 'base64'));
  fs.writeFileSync(path.join(TUJUAN, 'posisi.json'), JSON.stringify(posisi, null, 1));
  console.log('✓', nama);
}
const perlu = (...n) => !HANYA.length || n.some((x) => HANYA.includes(x));

/* ---- persiapan: buka proyek, tema terang, matikan rekam (supaya pratinjau tidak tertutup formulir identitas) ---- */
await kirim('Page.navigate', { url: APP }); await tunda(4000);
await ev(`localStorage.setItem('modul-builder-last-slug','${SLUG}');localStorage.setItem('modul-builder-theme','light');localStorage.setItem('modul-builder-last-tab','bank');location.reload();return 1`);
await tunda(9000);
const setRekam = (nyala) => ev(`tab('cover').click();await w(1200);const c=TM('Rekam aktivitas peserta','label').querySelector('input');if(c.checked!==${nyala})c.click();await w(600);return c.checked`);
await setRekam(false);

/* ---- beranda ---- */
await ev(`tab('bank').click();window.scrollTo(0,0);await w(1500);return 1`);
await foto('beranda', `return {logo:R(T('TEMPA','span')), judul:R(naik(T('TEMPA','span'),150)), tabs:['bank','canvas','cover','quiz','preview','command'].map(i=>R(tab(i))), status:R(TM('Tersimpan otomatis','span,div')), tema:R(T('🌙','button')), baru:R(TM('Mulai Project Baru','button')), unggah:R(document.querySelector('input[type=file]'))}`);

/* ---- import PPTX ---- */
if (perlu('import-hasil')) {
  const doc = await kirim('DOM.getDocument', { depth: -1 });
  const q = await kirim('DOM.querySelector', { nodeId: doc.result.root.nodeId, selector: 'input[type=file][accept=".pptx"]' });
  await kirim('DOM.setFileInputFiles', { nodeId: q.result.nodeId, files: [PPTX] });
  for (let i = 0; i < 60; i++) { await tunda(2000); if (await ev(`return !!T('+ Tambah ke Canvas','button')`)) break; }
  await tunda(1500);
  await foto('import-hasil', `const k=[...document.querySelectorAll('.panel')].filter(e=>e.textContent.includes('Slide asli #')).slice(0,4).map(R);return {kartu:k, nomor:R(TM('Slide asli #1','b')), tambah:R(T('+ Tambah ke Canvas','button'))}`);
}

/* ---- susun modul ---- */
await ev(`tab('canvas').click();await w(900);const lj=T('Lanjut','button');if(lj){lj.click();await w(900);}const tp=T('Tutup','button');if(tp){tp.click();await w(900);}await w(600);window.scrollTo(0,0);await w(400);await geserKe(TM('Gambaran Umum Pemeriksaan Pajak','input')||[...document.querySelectorAll('input')].find(i=>i.value==='Gambaran Umum Pemeriksaan Pajak'),200);return 1`);
await foto('susun-kanvas', `const b=[...document.querySelectorAll('button')].filter(x=>x.textContent.trim()==='Edit blok');const baris=b.map(x=>naik(x,1100)).filter(e=>{const r=e.getBoundingClientRect();return r.top>150&&r.bottom<760});return {baris:baris.map(R), tarik:baris.map(e=>R(e.querySelector('span,svg,div')))}`);
await ev(`const t=[...document.querySelectorAll('button')].filter(x=>x.textContent.trim()==='Edit blok').find(x=>naik(x,1100).textContent.includes('Uji Etika'));t.click();await w(1500);await geserKe(T('Tutup','button'),190);await w(6000);return 1`);
await foto('susun-edit', `const j=[...document.querySelectorAll('input')].find(i=>i.value==='Uji Etika');const pv=naik(TM('PREVIEW LANGSUNG — SLIDE'),500);return {judul:R(j), pratinjau:R(pv), frame:R(pv&&pv.querySelector('iframe')), tutup:R(T('Tutup','button'))}`);
await ev(`T('Tutup','button').click();await w(800);return 1`);

/* ---- tema ---- */
const temaCatat = `const n=['Emas Klasik','Biru Kemenkeu','Hijau Zamrud','Merah Marun','Ungu Elegan','Teal Modern'];const pv=naik(TM('PREVIEW LANGSUNG — SAMPUL'),500);return {tema:n.map(x=>R(naik(T(x),70))), pratinjau:R(pv), frame:R(pv&&pv.querySelector('iframe')), gaya:R(TM('Tanpa Gaya Grafis','button,select,div'))}`;
await ev(`tab('cover').click();window.scrollTo(0,0);await w(7000);return 1`);
await foto('tema-emas', temaCatat);
await ev(`naik(T('Biru Kemenkeu'),70).click();await w(6000);return 1`);
await foto('tema-biru', temaCatat);
await ev(`naik(T('Emas Klasik'),70).click();await w(2000);return 1`);
if (perlu('tema-rekam')) {
  await setRekam(true);
  await ev(`await geserKe(TM('Rekam aktivitas peserta','label'),330);await w(5000);return 1`);
  await foto('tema-rekam', `return {opsi:R(TM('Rekam aktivitas peserta','label')), centang:R(TM('Rekam aktivitas peserta','label').querySelector('input')), siap:R(TM('Backend siap merekam','p'))}`);
  await setRekam(false);
}

/* ---- kuis ---- */
await ev(`tab('quiz').click();window.scrollTo(0,0);await w(1200);T('Gambaran Umum Pemeriksaan Pajak','button').click();await w(1500);const r=document.querySelector('input[type=radio]');await geserKe(naik(r,900),190);return 1`);
await foto('kuis', `const r=[...document.querySelectorAll('input[type=radio]')];const kartu=naik(r[0],900);const op=r.filter(x=>kartu.contains(x)).map(x=>R(naik(x,300)));return {soal:R(kartu), opsi:op, radio:r.filter(x=>kartu.contains(x)).map(R)}`);

/* ---- preview & export ---- */
await ev(`tab('preview').click();window.scrollTo(0,0);await w(1500);T('Live Preview','button').click();await w(9000);return 1`);
await foto('preview', `return {tabs:['bank','canvas','cover','quiz','preview','command'].map(i=>R(tab(i))), live:R(T('Live Preview','button')), html:R(T('Export HTML','button')), scorm:R(T('Export SCORM (.zip)','button')), paket:R(T('Export Paket Modul','button')), frame:R(document.querySelector('iframe'))}`);

/* ---- command center (mode contoh) ---- */
await ev(`tab('command').click();window.scrollTo(0,0);await w(1500);return 1`);
await foto('cc-kunci', `return {tabCC:R(tab('command')), sandi:R(document.querySelector('input[type=password]')), buka:R(T('Buka','button')), contoh:R(TM('Lihat contoh tampilan','button'))}`);
await ev(`TM('Lihat contoh tampilan','button').click();await w(2500);return 1`);
await foto('cc-contoh-atas', `const k=['MODUL TEREKAM','AKTIF 7 HARI TERAKHIR','TOTAL SESI','SLUG BENTROK'].map(x=>R(naik(TM(x),200)));return {banner:R(naik(TM('Mode Contoh —'),1000)), karangan:R(T('karangan','b')), per:['Per Modul','Per Peserta','Co-creation'].map(x=>R(T(x,'button'))), kartu:k, caraBaca:R(TM('Cara baca tabel','button'))}`);
await ev(`TM('Modul Contoh (Data Demo)','button').click();await w(2500);await geserKe(T('Aktivitas per sesi','button'),330);return 1`);
await foto('cc-modul-ringkasan', `const k=['PESERTA','MATERI TUNTAS','PERLU DITINDAKLANJUTI','RATA-RATA TATAP LAYAR'].map(x=>R(naik(T(x),200)));return {kartu:k, refleksi:R(T('Refleksi','button')), cocMod:R(T('Catatan Co-creation','button')), csv:[R(TM('CSV ringkasan per sesi','button')),R(TM('CSV mentah','button'))]}`);
const tabelCatat = `const th=[...document.querySelectorAll('th')];const kol={};th.forEach(e=>kol[e.textContent.trim()]=R(e));const tr=[...document.querySelectorAll('tbody tr')];const baris=n=>{const t=tr.find(x=>x.cells.length>5&&x.textContent.includes(n));return t?{baris:R(t),sel:[...t.cells].map(R)}:null};return {kol, budi:baris('Budi'), dewi:baris('Dewi'), rahmat:baris('Rahmat'), yulianti:baris('Yulianti'), tabel:R(document.querySelector('table'))}`;
await ev(`await geserKe(document.querySelector('thead'),160);return 1`);
await foto('cc-tabel', tabelCatat);
await ev(`const t=[...document.querySelectorAll('tbody tr')].find(x=>x.cells.length>5&&x.textContent.includes('Budi'));[...t.querySelectorAll('button')].find(b=>/×\\s*▸/.test(b.textContent)).click();await w(1200);return 1`);
await foto('cc-peringatan', tabelCatat.replace('return {', `const t=[...document.querySelectorAll('tbody tr')].find(x=>x.cells.length>5&&x.textContent.includes('Budi'));const rin=t.nextElementSibling;return {rincian:R(rin),tombol:R([...t.querySelectorAll('button')].find(b=>/×\\s*▸/.test(b.textContent))),`));
await ev(`const t=[...document.querySelectorAll('tbody tr')].find(x=>x.cells.length>5&&x.textContent.includes('Budi'));[...t.querySelectorAll('button')].find(b=>/×\\s*▾|×\\s*▸/.test(b.textContent)).click();await w(600);[...t.querySelectorAll('button')].find(b=>b.textContent.includes('diklik')).click();await w(1200);return 1`);
/* wadah tabel dibatasi tingginya (gulir sendiri); rincian video 4 baris di bawah baris Budi terpotong
   olehnya sejak baris kolom Articulate jadi 3 tingkat -> dilepas sementara khusus foto ini */
await ev(`document.querySelector('table').parentElement.style.maxHeight='none';await w(400);return 1`);
await foto('cc-video', tabelCatat.replace('return {', `const t=[...document.querySelectorAll('tbody tr')].find(x=>x.cells.length>5&&x.textContent.includes('Budi'));const rin=t.nextElementSibling;return {rincian:R(rin),tombol:R([...t.querySelectorAll('button')].find(b=>b.textContent.includes('diklik'))),`));
await ev(`const t=[...document.querySelectorAll('tbody tr')].find(x=>x.cells.length>5&&x.textContent.includes('Budi'));[...t.querySelectorAll('button')].find(b=>b.textContent.includes('diklik')).click();await w(600);return 1`);
await ev(`document.querySelector('table').parentElement.style.maxHeight='';await w(300);return 1`);
await ev(`window.scrollTo(0,0);await w(500);T('Per Peserta','button').click();await w(3000);await geserKe(T('PESERTA'),330);return 1`);
await foto('cc-peserta', tabelCatat.replace('return {', `const k=['PESERTA','MATERI TUNTAS','PERLU DITINDAKLANJUTI','RATA-RATA TATAP LAYAR'].map(x=>R(naik(T(x),200)));return {kartu:k, csv:['CSV rekap per peserta','CSV rincian per slide','CSV rincian per video'].map(x=>R(TM(x,'button'))),`));
await ev(`await geserKe(document.querySelector('thead'),160);return 1`);
await foto('cc-peserta-tabel', tabelCatat);
await ev(`window.scrollTo(0,0);await w(500);T('Co-creation','button').click();await w(3000);await geserKe(TM('Paling banyak dicatat')||T('Co-creation','button'),300);return 1`);
await foto('cc-cocreation', `return {terramai:R(TM('Paling banyak dicatat')), per:['Per Modul','Per Peserta','Co-creation'].map(x=>R(T(x,'button')))}`);
await ev(`window.scrollTo(0,0);await w(500);TM('Cara baca tabel','button').click();await w(2000);return 1`);
await foto('cc-cara-baca', `const a=document.querySelector('aside[role=dialog]');return {panel:R(a), kenapa:R([...a.querySelectorAll('b')].find(b=>b.textContent.includes('Kenapa begini'))), curiga:R([...a.querySelectorAll('b')].find(b=>b.textContent.includes('Kapan curiga')))}`);
await ev(`document.dispatchEvent(new KeyboardEvent('keydown',{key:'Escape',bubbles:true}));await w(800);return 1`);

/* ---- tema gelap ---- */
await ev(`tab('canvas').click();window.scrollTo(0,0);await w(800);T('🌙','button').click();await w(2000);return 1`);
await foto('beranda-gelap', `return {tema:R(document.querySelector('button[title*=ema],button[aria-label*=ema]')||T('☀️','button')||T('☀','button'))}`);
await ev(`const b=[...document.querySelectorAll('button')].find(x=>/☀/.test(x.textContent));if(b)b.click();await w(800);return 1`);

console.log('selesai');
ws.close();

/* Gambar contoh buat Demo Booth Penyusun.
 *
 * ADA supaya langkah "pasang gambar sampul" benar-benar MENGUBAH sesuatu di
 * layar. Tanpa ini yang bisa dipamerkan cuma kursor menunjuk tombol unggah -
 * dan pengunjung booth tidak pernah melihat sampulnya jadi seperti apa.
 *
 * SVG, bukan JPG/PNG, dengan tiga alasan yang semuanya nyata di sini:
 *   - ukurannya beberapa kilobyte (PNG 1600x900 gelap bergradasi jauh lebih
 *     berat), dan ini ikut masuk bundel aplikasi;
 *   - tajam di proyektor booth berapa pun resolusinya;
 *   - warnanya bisa diambil langsung dari palet aplikasi, jadi kalau tema
 *     bawaannya suatu hari diganti, yang perlu disunting cuma dua konstanta
 *     di bawah - bukan mencari ulang berkas gambar.
 *
 * Sengaja TANPA TEKS: judul modul ditimpakan di atasnya oleh shell, dan
 * gambar yang sudah membawa tulisan sendiri akan bertabrakan dengannya.
 *
 * Palet = preset "Emas Klasik" (lihat themes.ts), tema bawaan aplikasi.
 */

const EMAS = '#c99a3d';
const NAVY_TUA = '#0e1626';
const NAVY = '#1b2a4a';

/* Sampul: rembesan cahaya dari kanan atas + busur konsentris emas di kanan
   bawah. Sisi KIRI sengaja dibiarkan paling gelap dan paling kosong - di
   situlah judul modul berdiri, dan latar yang ramai di belakang teks putih
   adalah cara paling cepat membuat sampul terlihat murah. */
const svgSampul = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${NAVY_TUA}"/>
      <stop offset="0.55" stop-color="${NAVY}"/>
      <stop offset="1" stop-color="${NAVY_TUA}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.78" cy="0.18" r="0.62">
      <stop offset="0" stop-color="${EMAS}" stop-opacity="0.22"/>
      <stop offset="1" stop-color="${EMAS}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="kaki" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${NAVY_TUA}" stop-opacity="0"/>
      <stop offset="1" stop-color="${NAVY_TUA}" stop-opacity="0.62"/>
    </linearGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg)"/>
  <rect width="1600" height="900" fill="url(#glow)"/>
  <g fill="none" stroke="${EMAS}" stroke-linecap="round">
    <circle cx="1290" cy="760" r="210" stroke-opacity="0.30" stroke-width="1.5"/>
    <circle cx="1290" cy="760" r="330" stroke-opacity="0.20" stroke-width="1.5"/>
    <circle cx="1290" cy="760" r="460" stroke-opacity="0.12" stroke-width="1.5"/>
    <circle cx="1290" cy="760" r="600" stroke-opacity="0.07" stroke-width="1.5"/>
  </g>
  <g stroke="${EMAS}" stroke-opacity="0.16" stroke-width="1.5">
    <path d="M120 0 L420 900"/>
    <path d="M220 0 L520 900"/>
    <path d="M300 0 L600 900"/>
  </g>
  <g fill="${EMAS}">
    <circle cx="1290" cy="760" r="7" fill-opacity="0.85"/>
    <circle cx="1080" cy="760" r="4" fill-opacity="0.5"/>
    <circle cx="960" cy="760" r="3" fill-opacity="0.3"/>
  </g>
  <!-- Peredup kaki gambar: GRADASI, bukan kotak rata. Kotak rata meninggalkan
       garis tegas melintang di tengah sampul - kelihatan jelas begitu
       gambarnya ditonton besar di proyektor, dan langsung terbaca sebagai
       gambar yang dirakit asal-asalan. -->
  <rect y="520" width="1600" height="380" fill="url(#kaki)"/>
</svg>`;

/* Penutup: keluarga yang sama, komposisi dibalik - busurnya pindah ke kiri
   bawah dan cahayanya turun. Dibedakan supaya layar terakhir tidak terasa
   seperti mengulang sampul, tapi tetap satu bahasa visual. */
const svgPenutup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="bg2" x1="1" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="${NAVY}"/>
      <stop offset="0.6" stop-color="${NAVY_TUA}"/>
      <stop offset="1" stop-color="#080d16"/>
    </linearGradient>
    <radialGradient id="glow2" cx="0.2" cy="0.85" r="0.7">
      <stop offset="0" stop-color="${EMAS}" stop-opacity="0.20"/>
      <stop offset="1" stop-color="${EMAS}" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="1600" height="900" fill="url(#bg2)"/>
  <rect width="1600" height="900" fill="url(#glow2)"/>
  <g fill="none" stroke="${EMAS}" stroke-linecap="round">
    <circle cx="250" cy="820" r="180" stroke-opacity="0.28" stroke-width="1.5"/>
    <circle cx="250" cy="820" r="300" stroke-opacity="0.18" stroke-width="1.5"/>
    <circle cx="250" cy="820" r="430" stroke-opacity="0.10" stroke-width="1.5"/>
  </g>
  <path d="M0 620 C 420 560, 900 700, 1600 520" fill="none" stroke="${EMAS}" stroke-opacity="0.35" stroke-width="2"/>
  <g fill="${EMAS}" fill-opacity="0.55">
    <circle cx="1180" cy="596" r="5"/>
    <circle cx="1380" cy="556" r="4"/>
    <circle cx="960" cy="628" r="3"/>
  </g>
</svg>`;

/* encodeURIComponent, bukan base64: hasilnya masih terbaca manusia waktu
   di-inspect, dan tidak membengkak ~33% seperti base64. */
const uri = (svg: string) => 'data:image/svg+xml,' + encodeURIComponent(svg.replace(/\s+/g, ' ').trim());

export const GAMBAR_SAMPUL_CONTOH = uri(svgSampul);
export const GAMBAR_PENUTUP_CONTOH = uri(svgPenutup);

/* Latar blok Refleksi buat demo. TIGA pemandangan dengan palet berbeda dengan
 * sengaja: blok Refleksi menyambung gambar tiap poin jadi satu latar panjang
 * yang bergerak parallax, dan sambungan itu baru terbaca sebagai fitur kalau
 * gambar-gambarnya memang berlainan - tiga gambar mirip justru terlihat
 * seperti satu gambar yang dobel. Tanpa teks, seperti gambar sampul di atas:
 * kartu pertanyaan yang menimpanya. width/height ditulis supaya ukuran
 * aslinya terbaca - tata letak latarnya dihitung dari rasio itu. */
function pemandangan(langit: [string, string], gunung: string, bukit: string, tanah: string, matahari: string) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="900" viewBox="0 0 1600 900">
  <defs><linearGradient id="l" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="${langit[0]}"/><stop offset="1" stop-color="${langit[1]}"/></linearGradient></defs>
  <rect width="1600" height="900" fill="url(#l)"/>
  <circle cx="1180" cy="230" r="92" fill="${matahari}" fill-opacity="0.9"/>
  <path d="M0 560 L260 330 L470 500 L720 280 L980 470 L1230 300 L1600 520 L1600 900 L0 900Z" fill="${gunung}"/>
  <path d="M0 680 C300 600 520 640 800 690 S1300 620 1600 670 L1600 900 L0 900Z" fill="${bukit}"/>
  <path d="M0 790 C380 750 760 800 1100 780 S1450 760 1600 790 L1600 900 L0 900Z" fill="${tanah}"/>
</svg>`;
}

export const LATAR_REFLEKSI_CONTOH = [
  uri(pemandangan(['#f6c27a', '#e9897e'], '#8d5a7a', '#6b4a6e', '#3d2f4f', '#fff3d1')),   // senja
  uri(pemandangan(['#9fd3f0', '#d9f0e6'], '#5f8f7a', '#3f7a5c', '#2a5a43', '#ffffff')),   // pagi hijau
  uri(pemandangan(['#1d2d55', '#4b5d93'], '#2c3c66', '#22305a', '#151f3d', '#f2e6b8')),   // malam
];

/* Poster pembuka refleksi - tampil "melayang" di atas latar poin pertama.
   Yang ini BOLEH bertulisan: sampul refleksi memang biasanya membawa
   kalimat pengantarnya sendiri. */
export const POSTER_REFLEKSI_CONTOH = uri(`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="700" viewBox="0 0 1600 700">
  <defs><linearGradient id="p" x1="0" y1="0" x2="1" y2="1">
    <stop offset="0" stop-color="${NAVY}"/><stop offset="1" stop-color="${NAVY_TUA}"/></linearGradient></defs>
  <rect width="1600" height="700" fill="url(#p)"/>
  <g fill="none" stroke="${EMAS}" stroke-opacity="0.35" stroke-width="2">
    <circle cx="1350" cy="560" r="180"/><circle cx="1350" cy="560" r="290"/></g>
  <text x="120" y="300" fill="${EMAS}" font-family="Segoe UI, Arial, sans-serif" font-size="44" font-weight="700" letter-spacing="8">REFLECTION GATE</text>
  <text x="120" y="400" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800">Sekarang, bagaimana</text>
  <text x="120" y="500" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="84" font-weight="800">dengan unit Anda?</text>
</svg>`);

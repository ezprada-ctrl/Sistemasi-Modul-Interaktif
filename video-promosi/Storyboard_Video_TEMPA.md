# Storyboard Video Promosi — TEMPA (versi panjang)

**Durasi:** ±4:21 (261 detik) · **Format:** 16:9, 1920 × 1080 · **Tanpa narator, tanpa musik** — efek suara saja.
**Penonton:** PTP (Pengembang Teknologi Pembelajaran) · **Sapaan:** "kamu", santai semi-formal.
**Bentuk jadi:** halaman animasi `video-promosi/panjang.html` (mesin disalin dari video Simulator Pajak Minimum Global), direkam pemilik dengan Win + Alt + R.
**Status:** DISETUJUI & DIBANGUN (`panjang.html`) — revisi 2 — tiap blok yang dipamerkan kini memakai **karya penyusun sungguhan yang terbaik** (lihat bagian H). Menunggu persetujuan pemilik sebelum foto layar dan pembangunan video.

Penulisan teks narasi mengikuti mesin `kalimat()`: `[[...]]` = kata kunci menyala biru, `{{...}}` = kata negatif oranye, ` | ` = pindah baris.

---

## A. Masalah yang diangkat di pembuka (Langkah 1)

| # | Masalah | Kutipan / bukti | Lokasi sumber | Status |
|---|---|---|---|---|
| M1 | Materi sudah ada di PowerPoint, tapi untuk jadi modul web interaktif harus diketik ulang dan butuh orang yang bisa menulis kode. | "mengubah file PowerPoint biasa jadi modul e-learning … tanpa siapa pun di tim perlu menulis kode"; "Tidak perlu menata ulang atau menyalin-ulang materi"; "Bahan tidak diketik ulang" | `Panduan-Fitur-Template-Modul-Ikram.html` (pembuka & tahap 1); `app/src/builderDemo/steps.ts:146` | **Disimpulkan** dari keadaan "sesudah". Kondisi "sebelum" tidak tertulis eksplisit → **mohon dikonfirmasi** |
| M2 | Angka durasi menipu: peserta yang membiarkan modul terbuka sambil ditinggal tampak paling rajin. | "peserta yang tab-nya dibiarkan kebuka sambil ditinggal lama (makan siang, dsb) keliatan 'paling rajin' karena angkanya paling besar, padahal dia yang paling gak natap." | git `1aa85ca` | Eksplisit |
| M3 | Rekap satu orang lintas beberapa modul harus digabung sendiri di Excel. | "Sebelumnya cuma ada per-modul, jadi 'si A udah nyelesain modul apa aja' harus dijoin manual di Excel." | git `d1d60b7`; Panduan tahap 7 ("tidak perlu buka satu-satu lalu menggabungkan sendiri di Excel") | Eksplisit |
| M4 | Pelatihan biasanya hanya sekali jalan; data yang hilang atau modul yang "bisu" baru ketahuan setelah pelatihan bubar. | "Satu pelatihan cuma sekali jalan. Peserta yang udah kelar gak akan buka modulnya lagi"; "Modul yang lupa dicentang keliatan normal 100% … tapi bisu total — dan itu baru ketahuan setelah pelatihan bubar." | git `72b16ed`; Panduan tahap 7 | Eksplisit (cadangan, tidak dipakai di pembuka) |
| M5 | Satu digit NIP salah ketik memecah satu orang jadi dua "orang" di rekap. | "satu digit keliru bikin rekaman orang pecah jadi dua 'orang' tanpa ada yang sadar." | git `d1d60b7`; Panduan tahap 6 | Eksplisit (dipakai di adegan Command Center) |

**Dipakai di pembuka:** M1, M2, M3. Tidak ada angka statistik yang dipakai di pembuka, karena sumbernya tidak memuat angka keluhan. Angka yang muncul di video hanyalah angka fitur, dan semuanya bersumber:

| Angka di layar | Sumber |
|---|---|
| 6 tab | `app/src/App.tsx:18-25` |
| 19 jenis blok | `app/src/types.ts:3-6` (Panduan masih menulis 18 karena dibuat sebelum blok Refleksi ditambahkan) |
| 6 tema warna, 10 gaya grafis | `app/src/themes.ts:17-22`, `app/src/graphicStyles.ts:13-22` |
| Diam 4 menit = berhenti dihitung | Panduan tahap 8 ("Ambang Ditinggal — 4 menit") |
| ⚠ ditinggal di atas 10 menit | Panduan tahap 7, kolom Ditinggal |
| Video di bawah 20% ditandai | `app/src/components/CommandCenter.tsx:1183` |

---

## B. Peta menu → Command Center (Langkah 2)

Alur klik pengguna sungguhan: **halaman awal (header TEMPA + 6 tab) → Import PPTX → Susun Modul → Tema → Kuis → Preview & Export → Command Center → layar kunci → "Lihat contoh tampilan" → dasbor Mode Contoh.**

Catatan: panel browser di sesi ini gagal memuat aplikasi online (berkas utamanya terblokir), jadi peta ini disusun dari kode dan tur "Demo ekosistem" (`builderDemo/steps.ts`), yang menjalankan urutan klik yang sama. Peta ini dicocokkan lagi saat memotret di Langkah 4.

| Menu | Layar | Fitur | Keunggulan untuk PTP | Bukti |
|---|---|---|---|---|
| Beranda | Header "TEMPA · Ekosistem Modul Interaktif", 6 tab | Alur kerja berurutan | Tahu sedang di tahap mana | `App.tsx:18-25, 453` |
| 1 Import PPTX | Area unggah → deretan slide | Ekstrak teks, gambar, tabel | Bahan tidak diketik ulang; nomor slide asli tetap | Panduan tahap 1; `steps.ts:145` |
| 2 Susun Modul | Daftar slide kiri, pratinjau kanan | Seret-lepas, 19 jenis blok, pratinjau langsung, intip contoh blok | Tanpa HTML, hasil langsung terlihat | `steps.ts:155-199`; `types.ts:3-6` |
| 3 Tema | Form sampul + pratinjau | 6 tema, 10 gaya grafis, layar penutup, **centang Rekam aktivitas peserta** + cek kesiapan hijau/merah | Satu klik ganti tampilan; pintu masuk data ke Command Center | `steps.ts:340-407`; `CoverForm.tsx:174` |
| 4 Kuis | Soal per bagian | Kunci ditandai di tempat, posisi jawaban benar diacak | Kuis sebagai gerbang per bagian | `steps.ts:421`; Panduan tahap 4 |
| 5 Preview & Export | Pratinjau utuh, tombol ekspor | HTML mandiri, paket SCORM (.zip), paket banyak modul + 10 tampilan dashboard | Siap unggah ke LMS, tanpa server sendiri | `steps.ts:463-550`; `PreviewExport.tsx:382` |
| (Sisi peserta) | Modul hasil ekspor | Peringatan "Kami lihat beberapa halaman terbuka cukup cepat…" sebelum kuis | Mencegah klik-lewat | `server/api/shell-template.html:1984` |
| 6 Command Center | **Layar kunci** | Password dicek di server; tombol "👁 Lihat contoh tampilan" | Data pribadi aman; bisa dipelajari tanpa data asli | `CommandCenter.tsx:672-698`; git `626727d`, `fec1978` |
| 6 Command Center | Banner Mode Contoh | "semua nama, NIP, dan angka di bawah ini **karangan**" | Jujur soal data contoh | `CommandCenter.tsx:720-727` |
| 6 Command Center | Tiga tombol tampilan | Per Modul · Per Peserta · Co-creation | Satu data, tiga cara baca | `CommandCenter.tsx:749-769` |
| 6 Command Center | Daftar modul | Cari, urutkan (terbaru/paling ramai/A–Z), ringkasan modul terekam/aktif 7 hari/total sesi | Cepat menemukan modul | `CommandCenter.tsx:858-912` |
| 6 Command Center | Empat angka ringkasan | Peserta · Materi tuntas · **Perlu ditindaklanjuti** · Rata-rata tatap layar | Tempat mendarat sebelum tabel | `CommandCenter.tsx:973-978, 1300-1304` |
| 6 Command Center | Tabel sesi | Kolom Tatap Layar vs Ditinggal (⚠), Slide, Interaksi, Kuis (berapa kali gagal), Knowledge Check, Video, Articulate, Catatan, Peringatan | Angka yang jujur, bukan durasi mentah | `CommandCenter.tsx:1380-1540`; git `1aa85ca`, `6787dee` |
| 6 Command Center | Rincian yang bisa dibuka | Klik Video → persen tiap video; klik Peringatan → slide yang dilewati cepat | Tahu persis di mana masalahnya | `CommandCenter.tsx:1180, 1216, 1576-1583` |
| 6 Command Center | Tabel lebar | Kepala dan kolom nama tetap menempel saat digeser | Tidak kehilangan baris | `ccTabel.tsx:95-104`; Panduan tahap 7 |
| 6 Command Center | Per Peserta | Satu orang lintas modul, Nilai per Modul (LULUS/BELUM), digabung lewat NIP; nama berbeda ditandai ⚠ | Tanpa gabung manual di Excel | `CommandCenter.tsx:1008-1104, 1027`; git `d1d60b7` |
| 6 Command Center | Tombol unduh | CSV ringkasan per sesi, mentah, rekap per peserta, rincian per slide, rincian per video | Lanjut analisis di Excel | `CommandCenter.tsx:982-996, 1306-1318` |
| 6 Command Center | Co-creation | Catatan peserta urut alur materi atau per peserta, "Paling banyak dicatat: …", unduh CSV | Tahu slide yang paling memancing pertanyaan | `CommandCenter.tsx:1600-1660` |
| 6 Command Center | Refleksi | Jawaban per nama & NIP, unduh Excel | Bahan evaluasi kelas | `CommandCenter.tsx:1278-1286`; **di Mode Contoh tidak tersedia** (`RefleksiPanel.tsx:121`) |
| 6 Command Center | 📖 Cara baca tabel | Penjelasan per kolom: "Kenapa begini" & "Kapan curiga" | Tabel bisa dibaca siapa saja | `PanduanBaca.tsx:181-261` |
| 6 Command Center | Data uji & deteksi janggal | Tandai sesi uji (bisa dibatalkan), slug bentrok, data terpotong | Rekap bersih dan jujur | `CommandCenter.tsx:733-740, 954-960, 1320-1360, 1569`; **tidak tampil di Mode Contoh** |

---

## C. Panduan gaya — "Bara TEMPA" (revisi 4, menggantikan gaya biru-malam yang sama dengan ORBIT)

Dipilih pemilik lewat pertanyaan penajaman: arah **Bara TEMPA**, transisi **sapuan panel**, teks **kolom samping**, penanda **coretan tangan**.

- **Latar:** arang hangat (`#15100D`→`#1A120E`) bertekstur butir halus, cahaya bara oranye-merah bernapas pelan dari bawah, percikan bara kecil naik perlahan. Tanpa aurora, tanpa kisi titik, tanpa biru.
- **Huruf:** Bricolage Grotesque (teks & judul), IBM Plex Mono (label & rujukan), Caveat (tulisan tangan di nomor dan catatan).
- **Layar aplikasi:** di kanan (skala 0,85), bingkai tegas cokelat tua, **bayangan blok bara** 18 px; tanpa kaca/blur.
- **Teks narasi:** kolom kiri selebar 540 px, rata kiri, garis bara di sisi kiri, dipusatkan tegak; kata muncul bergeser dari kiri (bukan efek ketik, tanpa kabur). Kata kunci → oranye bara, kata negatif → merah bata.
- **Pergantian adegan:** panel bara bergaris diagonal menyapu layar aplikasi dari kiri (0,22 dtk), menahan, lalu membuka ke kanan; kartu ditukar di balik panel.
- **Penanda:** sorotan = coretan spidol oranye yang tergambar mengelilingi elemen (hijau/kuning untuk benar/peringatan); nomor = lingkaran gores bertulisan tangan; balon = catatan kertas tempel miring; stabilo = sapuan oranye tidak rata.
- **Label menu:** kode bara + teks mono kapital di kiri atas kolom teks. **Nama blok** (karya tim) = pita oranye miring di pojok kiri atas layar. **Rujukan** = kotak mono di kiri bawah kolom teks.
- **Logo:** tiga ubin gelap berbingkai bara; kecil di kanan bawah, besar di penutup. Penutup: kartu mengecil ke tengah atas → ubin logo → "TEMPA" → "Pusat Pendidikan dan Pelatihan Pajak" → baris mono.
- **Suara:** tetap efek suara saja, tanpa musik; sapuan panel memakai bunyi `sapu`; penanda beruntun bunyi `tik` yang sama.

---

## D. Naskah teks layar

| # | Teks (format `kalimat()`) | Masuk – keluar (dtk) | Label |
|---|---|---|---|
| 1 | Materinya sudah ada di [[PowerPoint.]] | 0,9 – 4,6 | — |
| 2 | Tapi menjadikannya modul web interaktif \| biasanya berarti {{mengetik ulang dan menulis kode.}} | 4,9 – 10,0 | — |
| 3 | Setelah diunggah, laporan durasi bisa menipu: \| yang modulnya {{ditinggal makan siang}} tampak paling rajin. | 10,3 – 15,4 | — |
| 4 | Rekap peserta lintas modul? \| {{Digabung sendiri di Excel.}} | 15,7 – 20,2 | — |
| 5 | Kenalkan: [[TEMPA,]] ekosistem modul interaktif. | 20,8 – 24,8 | Beranda |
| 6 | Dari file PowerPoint sampai [[laporan aktivitas peserta,]] \| tanpa menulis satu baris kode pun. | 25,1 – 30,0 | Beranda |
| 7 | [[Enam tab,]] berurutan seperti alur kerjamu. | 30,3 – 33,8 | Beranda |
| 8 | File presentasi yang biasa dipakai mengajar langsung jadi sumber. \| Teks, gambar, dan tabel [[diambil otomatis.]] | 34,2 – 39,4 | 1 Import PPTX |
| 9 | Susun urutan slide tinggal [[drag & drop]] aja! | 40,0 – 45,0 | 2 Susun Modul |
| 10 | Ketik di kiri, [[hasilnya langsung tampil]] di kanan. \| Tidak perlu ekspor dulu. | 45,3 – 50,2 | 2 Susun Modul |
| 11 | [[19 jenis blok]] siap pakai. \| Begini wujudnya di modul buatan tim: | 50,6 – 55,4 | 2 Susun Modul · karya tim |
| 12 | Akordeon, tab, diagram alur, popup: \| materi dipecah supaya [[tidak membebani sekaligus.]] | 55,7 – 60,8 | 2 Susun Modul · karya tim |
| 13 | Lama tonton video [[ikut terekam,]] \| dan cek paham muncul sebelum pindah slide. | 61,1 – 66,0 | 2 Susun Modul · karya tim |
| 14 | Paket [[Articulate]] yang pernah dibuat tim, juga HTML sendiri, \| berjalan apa adanya di dalam slide. | 66,3 – 71,2 | 2 Susun Modul · karya tim |
| 15 | Lalu [[Refleksi:]] peserta memilih, \| lalu menuliskan renungannya sendiri. | 71,5 – 76,8 | 2 Susun Modul · karya tim |
| 16 | [[Enam tema warna,]] sepuluh gaya grafis. \| Satu klik, seluruh modul ikut berubah. | 77,4 – 82,2 | 3 Tema |
| 17 | Satu centang menghidupkan [[rekam aktivitas peserta,]] \| dan kesiapan sistemnya langsung dicek. | 82,5 – 87,2 | 3 Tema |
| 18 | Kuis [[per bagian]] jadi gerbang: lulus dulu, baru lanjut. \| Posisi jawaban benar diacak otomatis. | 87,6 – 92,4 | 4 Kuis |
| 19 | Jalankan modulnya utuh, \| [[persis seperti yang dilihat peserta.]] | 92,8 – 97,6 | 5 Preview & Export |
| 20 | Hasilnya satu [[berkas HTML mandiri]] tanpa server, \| atau [[paket SCORM]] siap unggah ke LMS. | 97,9 – 103,0 | 5 Preview & Export |
| 21 | Slide yang dibuka jauh di bawah [[waktu baca wajar]] \| memicu peringatan sebelum kuis. | 103,4 – 108,8 | Sisi peserta |
| 21a | Rekap aktivitas peserta lintas modul \| {{terpantau sepenuhnya.}} | sisipan +5,2 dtk (waktu sebenarnya 2:14,6 – 2:18,9) | — (jembatan) |
| 22 | Semua jejak belajar itu bermuara ke sini: \| [[Command Center.]] | 109,2 – 113,8 | 6 Command Center |
| 23 | Isinya data pribadi, jadi [[dikunci password]] \| yang diperiksa di server. | 114,1 – 119,0 | 6 Command Center |
| 24 | Mau belajar membacanya dulu? \| Ada [[mode contoh]] berisi data karangan. | 119,3 – 124,2 | 6 Command Center |
| 25 | Satu data, [[tiga cara baca:]] \| per modul, per peserta, dan catatan peserta. | 124,5 – 129,2 | 6 Command Center |
| 26 | Sekilas langsung terbaca: jumlah peserta, yang tuntas, \| yang {{perlu ditindaklanjuti,}} dan [[rata-rata tatap layar.]] | 129,5 – 134,6 | 6 Command Center |
| 27 | Pindah tab atau diam lebih dari [[4 menit?]] \| Jam tatap layar berhenti, waktunya masuk {{ditinggal.}} (catatan: "⚠ total ditinggal sesi ini > 10 menit") | 134,9 – 140,6 | 6 Command Center |
| 28 | Kolom slide langsung menjawab: \| [[ada materi yang terlewat atau tidak.]] | 140,9 – 146,0 | 6 Command Center |
| 29 | Klik peringatan: kelihatan [[slide mana]] \| yang dibuka kurang dari separuh waktu bacanya. | 146,3 – 151,6 | 6 Command Center |
| 30 | Video juga: [[berapa persen ditonton,]] \| yang di bawah 20% ditandai. | 151,9 – 157,0 | 6 Command Center |
| 31 | Kuis dihitung dari [[berapa kali gagal]] — \| yang gagal lalu berhenti pun tetap tercatat. → (ketukan 2, +2,5 dtk) Angka [[0]] berarti belum pernah gagal: \| lulus sekali coba, atau belum sampai kuisnya. | 157,3 – 162,4 | 6 Command Center |
| 32 | Cek paham dicatat terpisah dari kuis: \| [[mengukur pemahaman,]] bukan kelulusan. | 162,7 – 167,2 | 6 Command Center |
| 33 | Tampilan per peserta merangkum [[satu orang lintas modul,]] \| lengkap dengan nilai tiap modulnya. | 167,5 – 172,8 | 6 Command Center |
| 34 | Satu NIP dengan nama berbeda? \| [[Ditandai,]] bukan disembunyikan. | 173,1 – 177,8 | 6 Command Center |
| 35 | Semua bisa [[diunduh ke Excel:]] \| per sesi, per peserta, per slide, per video. | 178,1 – 183,2 | 6 Command Center |
| 36 | Catatan peserta terkumpul [[mengikuti alur materi:]] \| bagian mana yang paling dipertanyakan, dan oleh siapa. | 183,5 – 188,8 | 6 Command Center |
| 37 | Jawaban [[Refleksi]] per nama dan NIP \| ikut terkumpul, siap diunduh. ⚠ *lihat keputusan F2* | 189,1 – 193,8 | 6 Command Center |
| 38 | Bingung arti kolomnya? [[Cara baca tabel]] menjelaskan \| kenapa begini, dan kapan perlu curiga. | 194,1 – 199,6 | 6 Command Center |
| 39 | Dari sini terbaca bagian modul yang [[paling menarik perhatian,]] \| dan yang perlu diperbaiki di modul berikutnya. | 199,9 – 205,0 | 6 Command Center |
| 40 | Pekerjaan [[tersimpan sendiri,]] salah langkah bisa dibatalkan, \| beberapa project jalan bersamaan. | 205,6 – 210,6 | — |
| 41 | Modul tanpa centang rekam [[tidak mengirim data apa pun.]] \| Paket SCORM-nya sudah diuji unggah ke KLC. | 211,0 – 216,2 | — |
| 42 | Bahannya sudah ada di PowerPoint-mu. \| Sisanya [[cukup disusun.]] | 216,5 – 221,2 | — |

Kalimat "mode gelap" dari draf pertama dibuang untuk memberi ruang adegan karya tim. Sumber klaim adegan pendukung: #40 Panduan tahap 2 & 5 (simpan otomatis, banyak project) dan `steps.ts:326` (undo); #41 git `8cafa29` ("Modul tanpa centang itu bisu total — terverifikasi NOL panggilan jaringan keluar") dan git `8a14b79` (uji unggah langsung ke KLC lolos).

---

## E. Storyboard per adegan

### Adegan 1 — Masalahnya (0:00 – 0:20,4)

| Detik | Yang tampil | Efek (masuk / selama / keluar) | Teks | Suara |
|---|---|---|---|---|
| 0:00 – 0:00,8 | Hitam → latar biru malam, aurora pelan | Hitam memudar 0,8 dtk | — | — |
| 0:01,5 – 0:04,6 | Lima "slide PowerPoint" generik (kotak 16:9 putih: bilah judul + baris abu, **digambar**, bukan foto aplikasi) jatuh menumpuk dan miring | Jatuh `back.out`, memantul 2 px, selang 0,4 dtk | #1 | `kertas` ×5 |
| 0:04,9 – 0:10,0 | Tumpukan memudar dan kehilangan warna; muncul ikon `</>` dan kursor ketik oranye yang berkedip di atasnya | Saturasi turun; ikon masuk dengan skala 1,4 → 1 | #2 (oranye: "mengetik ulang dan menulis kode") | `stempel` saat ikon mendarat |
| 0:10,3 – 0:15,4 | Tumpukan tergeser ke kiri. Di kanan muncul **dua batang tanpa angka**: batang tinggi berlabel mono "modul terbuka" dan batang pendek "benar-benar ditatap". Ikon piring/jam kecil di atas batang tinggi | Batang tumbuh dari bawah (0,6 dtk); batang tinggi diberi stabilo oranye | #3 | `tik` ×2 (sama) |
| 0:15,7 – 0:20,2 | Tiga panel data terpisah "Modul 1/2/3" (gaya baris kartu yang sama dengan jembatan 8b, **bukan** lembar Excel): nama & urutan peserta tidak sejajar antarmodul ("Andi S.", "A. Saputra", "Andi") | Panel pop-in miring beruntun 0,25 dtk, bilah terisi; 17,4 orang yang sama disorot merah di tiap panel; 18,3 label "orang yang sama?"; 18,8 getar; 19,85 tersapu ke kiri dengan kabur gerak | #4 | `kertas` ×3, `tik` ×3, `whoosh` 19,8 |

### Adegan 2 — Perkenalan TEMPA (0:20,4 – 0:33,8) · label `TEMPA · Beranda`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 0:20,4 | Foto **beranda** (header TEMPA + ikon nyala + "Ekosistem Modul Interaktif" + 6 tab), tema terang | Kartu masuk dari 1,06; ubin logo kecil muncul di kanan bawah (21,0) | #5 | `denting` 20,6 |
| 0:21,2 – 0:24,6 | Sama | Kamera zoom 1,25 ke header TEMPA, lalu kembali | #5 | — |
| 0:25,1 – 0:30,0 | Sama | Kamera lebar 1,0; cahaya "mekar" pelan di belakang kartu | #6 | — |
| 0:30,3 – 0:33,8 | Sama | Kamera 1,35 ke baris tab (**keenam tab utuh di bingkai**). Nomor 1–6 muncul di atas tiap tab (30,9 + i×0,2). Sorot redup menyapu dari tab 1 ke tab 6 (31,8–33,0) | #7 | `tik` ×6 (sama), `sapu` 31,8 |
| 0:33,8 | — | Kartu keluar (menyusut, memudar, mengabur) | — | — |

### Adegan 3 — Import PPTX (0:34,0 – 0:39,6) · label `1 · Import PPTX`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 0:34,0 | Foto **import-kosong** (area unggah) | Kartu masuk; kursor masuk dari kanan bawah | #8 | — |
| 0:35,4 | Sama | Kursor klik area unggah | #8 | `klik` |
| 0:36,4 | Foto **import-hasil** (deretan slide hasil ekstrak, data contoh) | Silang 0,45 dtk; thumbnail diberi sorot beruntun cepat (3 thumbnail, selang 0,2 dtk) | #8 | `tik` ×3 (sama) |
| 0:38,0 – 0:39,4 | Sama | Balon kecil di satu thumbnail: "nomor slide asli tetap" | #8 | — |

### Adegan 4 — Susun Modul (0:39,8 – 0:50,4) · label `2 · Susun Modul`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 0:39,8 | Foto **susun-kanvas** (daftar slide kiri, pratinjau kanan) | Kartu masuk | #9 | — |
| 0:41,0 – 0:44,0 | Sama | Kursor menekan satu baris slide dan menyeretnya dua baris ke bawah; jejak `aliran()` putus-putus; sorot di posisi baru | #9 | `klik`, `sapu` |
| 0:45,3 – 0:50,2 | Foto **susun-edit** (kolom "Judul slide" terisi, pratinjau menampilkan judul yang sama) | Silang; sorot kolom judul (kiri) → panah aliran ke pratinjau (kanan) → sorot judul di pratinjau | #10 | `tik` ×2 |

### Adegan 4a — Contoh blok bergerak saat kursor singgah (0:50,4 – 0:56,4, sisipan revisi 6)

Semua adegan sesudahnya bergeser **+6 dtk** dari jam yang tertulis di storyboard ini (di kode lewat `GESER`).

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 0:50,4 | Menu "+ Tambah blok" terbuka di editor slide (foto asli aplikasi, `hover-menu`) | Zoom 1,5 ke menu; kursor masuk | "Arahkan kursor ke satu jenis blok: \| [[contohnya langsung bergerak]] sebelum dipasang." | — |
| 0:50,9 | Kursor singgah di **Akordeon** → contoh di samping menu, butirnya terbuka (4 bingkai asli) | Pita "Akordeon · contoh bergerak" | (lanjut) | `tik` |
| 0:52,4 | **Tab** → contoh berpindah "Tab Satu" ke "Tab Dua" | Pita "Tab · contoh bergerak" | | `tik` |
| 0:53,9 | **Diagram Alur** → langkah contoh berpindah | Pita "Diagram Alur · contoh bergerak" | | `tik` |
| 0:55,0 | **Popup** → jendela contoh terbuka | Pita "Popup · contoh bergerak" | | `tik` |

Sumber kalimat: tur demo aplikasi (`builderDemo/steps.ts`, langkah "Intip contoh tiap tipe blok"). Bingkai dipotret dengan kursor sungguhan (`alat/ambil-hover.mjs`), penyimpanan draft diblokir.

### Adegan 4b — Karya tim: tiap blok dimainkan dari modul terbaik (0:50,4 – 1:17,0) · label `2 · Susun Modul · karya tim`

Setiap blok tampil sebagai kartu foto **hasil jadi modul sungguhan** (bukan contoh bawaan), dipilih dari 76 kerjaan di server (lihat bagian H). Tiap kartu membawa pil kecil di kanan atas berisi **nama blok saja** (G7: nama pembuat tidak ditampilkan; nama di tabel ini hanya catatan sumber untuk pembuat video). Pergantian antarkartu cepat: geser ke kiri + kabur 0,25 dtk. Setiap kartu menyiapkan foto "sebelum" dan "sesudah" diklik supaya interaksinya tampak hidup.

| Detik | Blok · karya | Yang tampil & efek | Teks | Suara |
|---|---|---|---|---|
| 0:50,4 – 0:53,0 | **Akordeon** · Deswita, *Aspek Hukum Pemeriksaan* — "Bagaimana Dasar Hukum Pidana?" | Enam butir bernomor; kursor klik butir 1 → silang ke foto butir terbuka; lencana "19 blok" menempel di pojok kartu | #11 | `stempel` (lencana), `klik` |
| 0:53,0 – 0:55,6 | **Tab** · Luthfi, *Review Aspek Pajak Internasional* — "Penentuan Sumber Penghasilan Luar Negeri" | Delapan tab (saham, bunga, sewa, imbalan, BUT, …); kursor klik "bunga" lalu "sewa", isi berganti lewat silang | #11 | `klik` ×2 |
| 0:55,6 – 0:58,2 | **Diagram Alur** · Salma, *Gambaran Umum dan Tahapan Pemeriksaan* — "Uji Etika" | Lima pertanyaan berjenjang; kursor klik langkah 1 → 2, sorot berpindah | #12 | `klik`, `tik` |
| 0:58,2 – 1:00,8 | **Popup** · Ikram, *Pajak Daerah Kab/Kota* — "Rincian saat terutangnya BPHTB" | Kursor klik pemicu popup → `jendela()` membuka popup dari tombolnya | #12 | `klik`, `buka` |
| 1:00,8 – 1:03,4 | **Video** · Endy, *Shadow & Economy Digital* — "Perpajakan Ekonomi Digital" | Kursor klik ▶; silang ke bingkai video berjalan | #13 | `klik` |
| 1:03,4 – 1:06,0 | **Cek paham** · Deswita, *Aspek Hukum Pemeriksaan* — studi kasus "PT Maju Jaya menunjuk Andi…" | Jendela "Sebelum lanjut" muncul saat kursor menekan "Selanjutnya"; kursor memilih jawaban, sorot hijau | #13 | `buka`, `klik` |
| 1:06,0 – 1:08,6 | **Articulate** · Endy, *PJJ Transfer Pricing I* KB 2 (PKKU) | Adegan animasi "Kopi Pelabuhan": kapal kontainer melintas masuk, dua pengusaha berjabat tangan dengan balon percakapan. Diambil dari paket SCORM yang dijalankan, tampil di dalam slide modul | #14 | `buka` |
| 1:08,6 – 1:11,2 | **HTML Bebas** · *Peta Materi Pemeriksaan Pajak* | Halaman peta materi interaktif di dalam slide; kursor menekan "Lanjut", pemberhentian berikutnya menyala | #14 | `sapu` |
| 1:11,2 – 1:17,0 | **Refleksi** · Riko Febrialdo, *Reflection Gate* | Kartu lebih lama: digulir pelan dengan latar pemandangan parallax; kursor mencentang dua pilihan ("realisasi stagnan", "piutang meningkat") lalu baris isian terketik per kata | #15 | `sapu`, `klik` ×2 |
| 1:17,0 | — | Kartu keluar | — | — |

### Adegan 5 — Tema (1:17,2 – 1:27,2) · label `3 · Tema`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 1:17,2 | Foto **tema-emas** (galeri tema + pratinjau sampul emas) | Kartu masuk | #16 | — |
| 1:18,6 | Sama | Nomor 1–6 di atas keenam kartu tema (selang 0,2 dtk) | #16 | `tik` ×6 (sama) |
| 1:20,2 | Foto **tema-biru** (pratinjau berganti warna) | Kursor klik tema lain → silang 0,45 dtk | #16 | `klik` |
| 1:22,5 – 1:27,2 | Foto **tema-rekam** (centang "Rekam aktivitas peserta" + indikator siap hijau) | Kamera zoom ke centang; stabilo di labelnya; balon "hijau = siap merekam" | #17 | `kunci` saat centang tersorot |

### Adegan 5a — 10 gaya grafis (sisipan revisi 8, ±6 dtk setelah ganti warna tema)

Menu "Gaya Grafis" (tab Tema) dibuka; kursor singgah berurutan di 10 gaya (Blob Abstrak, Lingkaran Gradasi, Grid Titik, Bingkai Sudut, Blok Diagonal, Cincin Garis, Segitiga Berlapis, Konfeti Titik, Lengkung Bertumpuk, Balok Lapis), tiap gaya ±0,47 dtk dengan pratinjau Sampul / Slide Konten / Slide Penutup dan nama gaya di pita. Teks: "Tiap [[gaya grafis]] cukup disorot kursor: \| sampul, slide, dan penutupnya langsung terlihat." (sumber: tur demo `steps.ts`, langkah "Gaya grafis"). Foto: `alat/ambil-gaya.mjs`.

**Refleksi (adegan 4b) kini benar-benar digulir:** 19 bingkai asli sampul → poin 3 (latar parallax bergerak), centang dua pilihan, 8 bingkai poin 3 → poin 4, lalu jawaban diketik (`alat/ambil-gulir.mjs`; giliran Refleksi +2,5 dtk).

### Adegan 6 — Kuis (1:27,4 – 1:32,4) · label `4 · Kuis`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 1:27,4 | Foto **kuis** (satu soal, opsi A–D) | Kartu masuk | #18 | — |
| 1:28,8 | Sama | Kursor klik penanda kunci di opsi → sorot hijau | #18 | `klik` |
| 1:30,4 – 1:32,2 | Sama | Huruf A/B/C/D diberi nomor kecil yang berpindah acak sekali (animasi "kocok") | #18 | `tik` ×4 (sama) |

### Adegan 7 — Preview & Export (1:32,6 – 1:43,0) · label `5 · Preview & Export`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 1:32,6 | Foto **preview** (modul contoh tampil utuh: sampul/slide + menu samping) | Kartu masuk; kamera mendorong pelan 1,0 → 1,1 | #19 | — |
| 1:37,9 | Foto **export** (tombol ekspor HTML & "Export SCORM (.zip)") | Silang; sorot dua tombol bergantian | #20 | `tik` ×2 |
| 1:40,0 | Sama | Kursor klik "Export SCORM (.zip)"; ikon berkas `.zip` terbang keluar dari tombol ke pojok kartu | #20 | `klik`, `whoosh` |

### Adegan 7b — Paket Modul: banyak modul jadi satu berkas (1:43,0 – 1:52,0, sisipan revisi 5)

Semua adegan sesudahnya bergeser **+9 dtk** dari jam yang tertulis di storyboard ini (di kode lewat `GESER`).

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 1:43,0 | Foto **paket-isi**: dialog Export Paket Modul berisi tiga modul seri Pemeriksaan (Salma Modul 1, Deswita Modul 2, Cindi Modul 3), nama pelatihan terisi | Coretan di tiga nama modul (beruntun 0,2 dtk); catatan "seri Pemeriksaan: modul Salma, Deswita, Cindi" | "Beberapa modul bisa dirakit jadi [[satu paket:]] \| dashboard di depan, modulnya tertanam di dalam." | `tik` ×3 |
| 1:45,8 | Foto **paket-kisi**: kisi 10 gaya | Nomor 1–10 (selang 0,12 dtk) | — | `tik` ×10 (sama) |
| 1:47,9 – 1:51,8 | **paket-gaya-0…9** (Panel, Indeks, Orbit, Terminal, Kartu, Linimasa, Metro, Majalah, Rak, Fokus) dalam mode "Coba ukuran penuh" | Berganti tiap 0,38 dtk, nama gaya di pita oranye | "[[Sepuluh tampilan dashboard,]] \| semuanya bisa diintip dulu sebelum dipilih." | `tik` tiap ganti |

Daftar draft (memuat nama penyusun) tidak ikut terpotret; alamat draft di daftar urutan disamarkan menjadi "draft penyusun". Sumber kalimat: tur demo aplikasi (`builderDemo/steps.ts`, langkah "Banyak modul jadi satu").

**Blok Video (adegan 4b):** video asli karya Endy kini benar-benar diputar ±3 dtk (giliran blok Video diperpanjang 1,6 dtk) (dari detik ke-8 video, tanpa suara) di atas fotonya, diambil langsung dari penyimpanan modul — butuh internet saat merekam.

### Adegan 8 — Sisi peserta (1:43,2 – 1:48,8) · label `Sisi peserta`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 1:43,2 | Foto **peserta-slide** (modul hasil ekspor di pratinjau, data contoh) | Kartu masuk | #21 | — |
| 1:44,8 | Foto **peserta-peringatan** muncul sebagai jendela dari tengah kartu: "Kami lihat beberapa halaman terbuka cukup cepat…" dengan tombol Yakin / Kembali | `jendela()`; stabilo pada kalimat peringatan | #21 | `buka` |

### Adegan 8b — Jembatan: rekap lintas modul terpantau (sisipan +5,2 dtk, waktu sebenarnya 2:14,0 – 2:19,3)

Ditempatkan di sini karena sesudah sisi peserta (jejak per orang) kalimat ini merangkum semuanya, lalu langsung disambung "Semua jejak belajar itu bermuara ke sini: Command Center". Sekaligus menjawab masalah #4 di pembuka (panel terpisah → satu rekap). Bukan pengulangan #33: #33 foto asli tampilan per peserta untuk **satu orang**; 8b grafis gambaran besar **semua peserta**. Semua adegan sesudahnya bergeser +5,2 dtk (di kode lewat `GESER`).

| Detik (sebenarnya) | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 2:14,6 – 2:19,3 | Panel "Rekap lintas modul · 6 peserta" (lampu hijau "terpantau"): enam baris kartu peserta karangan (inisial, nama, NIP disamarkan, bilah Modul 1–3, jam tatap layar). **Digambar**, bukan foto aplikasi | Baris pop-in beruntun 0,11 dtk (skala 0,84 + kabur → tajam); bilah & persen naik, jam tatap berjalan; pemindai menyapu → centang hijau per baris; data naik lagi lalu baris bertukar urutan; label mungil (kuis ✓, +3 slide, video 84%, cek paham ✓, refleksi ✓) muncul-melayang; pop-out halus sebelum sapuan masuk Command Center | #21a | `tik` ×6, `sapu` |

### Adegan 9 — KLIMAKS: Command Center (1:49,0 – 3:25,2) · label `6 · Command Center`

Adegan terpanjang (±96 detik). Semua foto dari **Mode Contoh**, berisi data karangan dari aplikasi.

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 1:49,0 | Foto **beranda-tab** (baris tab, Preview aktif) | Kartu masuk; kamera 1,35 ke baris tab (**seluruh tab utuh**) | #22 | — |
| 1:49,8 | Sama | Kursor bergerak dari tab "Preview & Export" ke "Command Center", lalu klik | #22 | `klik` |
| 1:50,8 | Foto **cc-kunci** (judul Command Center, "Berisi data pribadi peserta; masukkan password.", kolom password, tombol Buka, tombol "👁 Lihat contoh tampilan") | Silang; kamera kembali 1,0 lalu zoom 1,4 ke kotak kunci | #22 | `denting` |
| 1:54,1 – 1:59,0 | Sama | Sorot kolom password; ikon gembok kecil menutup; balon "dicek di server, bukan di layar" | #23 | `kunci` |
| 1:59,3 – 2:01,0 | Sama | Kursor ke tombol "👁 Lihat contoh tampilan", lalu klik | #24 | `klik` |
| 2:01,2 – 2:04,2 | Foto **cc-contoh-atas** (banner Mode Contoh, tombol Per Modul/Per Peserta/Co-creation, ringkasan) | Silang; stabilo pada kata "**karangan**" di banner | #24 | `buka` |
| 2:04,5 – 2:09,2 | Sama | Nomor **1-2-3** di atas Per Modul / Per Peserta / Co-creation (selang 0,2 dtk); kamera 1,5 menjaga ketiganya utuh | #25 | `tik` ×3 (sama) |
| 2:09,5 – 2:14,6 | Foto **cc-modul-ringkasan** (modul contoh terpilih, empat kartu angka di atas tabel) | Silang; nomor 1–4 di atas kartu angka; 2:12,2 stabilo **oranye** pada kartu "Perlu ditindaklanjuti" | #26 | `tik` ×4 (sama), `stempel` 2:12,2 |
| 2:14,9 – 2:20,6 | Foto **cc-tabel** (tabel sesi) | Kamera ke kolom Tatap Layar & Ditinggal; sorot dua kolom; balon di sel ⚠: "ditinggal > 10 menit"; ikon jam berhenti saat "Diam 4 menit" muncul | #27 | `tik`, `stempel` |
| 2:20,9 – 2:26,0 | Sama | Kamera geser ke kolom Slide; zoom ke satu sel "94/95"-gaya; balon: "dibuka / total slide modul" | #28 | `tik` |
| 2:26,3 – 2:31,6 | Foto **cc-peringatan** (baris Budi, rincian peringatan terbuka) | Kursor klik angka Peringatan → rincian muncul lewat `jendela()` dari sel itu; stabilo nama slide pertama | #29 | `klik`, `buka` |
| 2:31,9 – 2:37,0 | Foto **cc-video** (rincian video terbuka) | Kursor klik sel Video → `jendela()`; sorot oranye pada video < 20% | #30 | `klik`, `buka` |
| 2:37,3 – 2:42,4 | Foto **cc-tabel** | Sorot kolom Kuis; balon "jumlah submit gagal, termasuk yang menyerah" | #31 | `tik` |
| 2:42,7 – 2:47,2 | Foto **cc-tabel** | Sorot kolom Knowledge Check lalu Articulate ("7/12 benar", "1/1 selesai"); tabel ternyata muat selebar layar sehingga momen "kolom nama menempel" diganti | #32 | `tik` ×2 |
| 2:47,5 – 2:52,8 | Foto **cc-peserta** (tampilan Per Peserta, kolom "Nilai per Modul") | Kursor klik "Per Peserta" (di foto sebelumnya) → silang; sorot kolom Nilai per Modul (LULUS/BELUM) | #33 | `klik` |
| 2:53,1 – 2:57,8 | Sama | Zoom ke baris **Dewi** (nama bervariasi ⚠); balon menunjukkan dua varian nama dengan satu NIP (data karangan) | #34 | `stempel` |
| 2:58,1 – 3:03,2 | Foto **cc-unduh** (deretan tombol ⬇ CSV) | Nomor 1–4 di tombol CSV (selang 0,2 dtk); ikon lembar Excel kecil terbang dari tombol pertama | #35 | `tik` ×4 (sama), `whoosh` |
| 3:03,5 – 3:08,8 | Foto **cc-cocreation** (tampilan Co-creation, catatan per slide) | Silang; stabilo pada "Paling banyak dicatat: …"; sorot satu kelompok slide | #36 | `buka` |
| 3:09,1 – 3:13,8 | ⚠ **Keputusan F2**: foto **cc-refleksi** atau versi teks saja | Bila ada foto: sorot tombol "Refleksi" lalu tabel jawaban; bila tidak: hanya tombol Refleksi disorot + balon "unduh sebagai Excel" | #37 | `tik` |
| 3:14,1 – 3:19,6 | Foto **cc-cara-baca** (panel "📖 Cara baca tabel" terbuka) | Kursor klik "📖 Cara baca tabel" → panel muncul lewat `jendela()`; stabilo "Kenapa begini" lalu "Kapan curiga" | #38 | `klik`, `buka` |
| 3:19,9 – 3:25,0 | Foto **cc-tabel** penuh | Kamera mundur ke 0,92; seluruh tabel terlihat; cahaya mekar pelan | #39 | `denting` |
| 3:25,2 | — | Kartu keluar | — | — |

### Adegan 10 — Fitur pendukung (3:25,4 – 3:30,6) · label `TEMPA`

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 3:25,4 | Foto **bar-project** (status "tersimpan", tombol undo/redo, "+ Mulai Project Baru") | Kartu masuk; sorot status tersimpan → undo/redo → Mulai Project Baru (selang 0,2 dtk) | #40 | `tik` ×3 (sama) |

### Adegan 11 — Aman & siap dipakai (3:30,8 – 3:36,2)

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 3:30,8 | Tanpa kartu. Tiga ubin ikon: **Berkas HTML mandiri** · **Paket SCORM · LMS** · **Command Center** | Ubin naik + tajam, selang 0,18 dtk; garis biru menyambung ketiganya | #41 | `tik` ×3 (sama) |
| 3:33,2 | Sama | Ubin tengah bercahaya biru | #41 | `kunci` |

### Adegan 12 — Penutup (3:36,4 – 3:48,2)

| Detik | Yang tampil | Efek | Teks | Suara |
|---|---|---|---|---|
| 3:36,4 | Foto **beranda-gelap** | Kartu masuk; cahaya mekar | #42 | — |
| 3:41,4 | — | Logo kecil hilang; kartu mengecil ke 0,5 dan naik ke atas | — | `whoosh` |
| 3:41,9 | Tiga ubin logo besar | Muncul dari kabur | — | — |
| 3:42,2 | Judul besar **"TEMPA"** | Per huruf/kata, naik + kabur → tajam | — | `akor` |
| 3:43,2 | "Pusat Pendidikan dan Pelatihan Pajak" | Sama | — | — |
| 3:44,4 | Baris mono kecil: **"Ekosistem Modul Interaktif · Data demo"** | Fade 0,5 dtk | — | — |
| 3:46,2 – 3:48,2 | Hitam | Memudar ke hitam 0,8 dtk | — | — |

---

## F. Daftar foto layar yang diperlukan (Langkah 4)

Jendela 1366×768, skala 1,5, diambil dari aplikasi online. Posisi elemen penting dicatat ke `aset/posisi.json`.

| Nama | Keadaan yang disiapkan |
|---|---|
| beranda, beranda-tab, beranda-gelap | Proyek contoh "Demo ekosistem" (`?demo=1`) atau proyek contoh baru; tema terang/gelap |
| import-kosong, import-hasil | Tab Import PPTX sebelum dan sesudah unggah PPTX contoh |
| susun-kanvas, susun-edit | Tab Susun Modul dengan modul Salma (*Gambaran Umum dan Tahapan Pemeriksaan*) dibuka. **Penyimpanan ke server diblokir selama memotret** supaya draft Salma tidak tertimpa ketikan demo |
| tema-emas, tema-biru, tema-rekam | Tab Tema; dua tema berbeda; centang Rekam aktivitas + indikator |
| kuis | Tab Kuis, satu soal contoh |
| preview, export | Tab Preview & Export, modul Salma |
| peserta-slide, peserta-peringatan | Pratinjau modul Salma; peringatan kecepatan baca dipancing dengan klik-lewat cepat |
| cc-kunci | Tab Command Center, belum dibuka |
| cc-contoh-atas, cc-modul-ringkasan, cc-tabel, cc-peserta-tabel | Mode Contoh, Per Modul, modul "Modul Contoh (Data Demo)" |
| cc-peringatan, cc-video | Rincian Peringatan / Video baris Budi dibuka |
| cc-peserta | Mode Contoh, Per Peserta |
| cc-unduh | Deretan tombol CSV |
| cc-cocreation | Mode Contoh, Co-creation |
| cc-cara-baca | Panel "📖 Cara baca tabel" terbuka |
| bar-project | Baris project dengan status tersimpan |
| karya-* (adegan 4b) | Hasil jadi tiap karya terpilih (bagian H), dirender lewat mesin aplikasi sendiri, bukan lewat editor: tiap blok difoto "sebelum" dan "sesudah" diklik. Penanda "Dev Mode" di menu samping disembunyikan |

Semua nama dan NIP di Command Center berasal dari data karangan bawaan aplikasi (Siti Amara, Rahmat Wijaya, Dewi Anggraini, Fajar Nugroho, Yulianti Putri, Budi Santoso), dan aplikasi sendiri memberi label "karangan". Daftar draft asli (yang memuat nama rekan tim) **tidak boleh** ikut terpotret.

---

## G. Yang perlu keputusan pemilik sebelum dibangun

Keputusan F1–F6 dari draf pertama sempat kamu setujui dengan pilihan default sebelum storyboard terbaca. Default itu saya pakai sementara; ubah bila perlu.

1. **F1 — Masalah M1 (kalimat #2):** default *benar* — keadaan sebelum TEMPA adalah mengetik ulang & menulis kode.
2. **F2 — Refleksi di Command Center (kalimat #37):** default *(a)* — sorot tombol Refleksi + balon, tanpa foto data (Mode Contoh tidak punya data Refleksi). Wujud blok Refleksi sendiri kini sudah dipamerkan penuh di adegan 4b lewat karya Riko.
3. **F3 — Data uji & deteksi janggal:** default *tidak dimasukkan*.
4. **F4 — Nama di header aplikasi:** default *dibiarkan*.
5. **F5 — "sudah diuji unggah ke KLC" (kalimat #41):** default *boleh*.
6. **F6 — Kalimat penutup (#42):** default *kalimat utama* "Bahannya sudah ada di PowerPoint-mu. Sisanya cukup disusun."
7. **G7 — Nama pembuat:** *diputuskan* — tidak ditampilkan. Karya terbaik dipakai hanya agar video memuat hasil asli yang paling bagus.
8. **G8 — HTML Bebas:** *diputuskan* — (b) halaman *Peta Materi Pemeriksaan Pajak* (sama dengan demo ekosistem), tampil di dalam slide modul.
9. **G9 — Articulate:** *diputuskan* — paket boleh diunduh untuk dinilai.
10. **G10 — Durasi:** *diputuskan* — ±3:48 diterima; hasil akhir berupa halaman HTML beranimasi (bukan MP4) yang akan disunting pemilik sebelum dikonversi.

---

## H. Karya terpilih per blok (cara memilih dan alasannya)

**Cara memilih.** 76 kerjaan di server diunduh dan dihitung isinya per jenis blok. Untuk tiap blok, 4 kerjaan dengan isi terkaya dirender lewat mesin aplikasi sendiri, lalu slide yang memuat blok itu difoto dan dibandingkan berdampingan. Kriteria: isinya materi sungguhan (bukan teks percobaan), tampilannya rapi dan utuh di layar, interaksinya kelihatan, dan tidak memuat data pribadi peserta.

| Blok | Terpilih | Kandidat lain yang dibandingkan | Alasan |
|---|---|---|---|
| Refleksi | **Riko Febrialdo** — *Reflection Gate* (5 poin, latar ilustrasi petugas pajak) | Cindi (Modul 3), Uji Simulasi Refleksi | Satu-satunya yang bergambar dan berisi renungan sungguhan; kandidat lain berisi teks percobaan ("blablabla") atau tanpa gambar |
| Akordeon | **Deswita** — *Aspek Hukum Pemeriksaan*, "Bagaimana Dasar Hukum Pidana?" | Endy (Shadow Economy), Ikram (Pajak Daerah), Salma | Enam butir bernomor, judul jelas, isi terdalam (paling panjang) |
| Tab | **Luthfi** — *Review Aspek Pajak Internasional*, "Penentuan Sumber Penghasilan Luar Negeri" | Cindi, Salma, paket uji | Delapan tab sekaligus, paling memperlihatkan gunanya tab |
| Diagram Alur | **Salma** — "Uji Etika" (5 pertanyaan berjenjang) | Deswita, Cindi, Dika | Alurnya bercerita dan diawali kotak petunjuk "klik tiap langkah"; kandidat lain sama rapinya tapi lebih datar |
| Popup | **Ikram** — *Pajak Daerah Kab/Kota*, "Rincian saat terutangnya BPHTB" | Wendi (RPM/CPM), Luthfi, Salma | Butir rapi dengan penebalan; popup RPM Wendi menarik tapi rumusnya tampil rusak ("$25\% 	imes") |
| Video | **Endy** — *Shadow & Economy Digital*, "Perpajakan Ekonomi Digital" | paket uji (video IBM), Luthfi (video Alex Hormozi), Ninggar | Video produksi sendiri berlogo Pusdiklat; kandidat lain video pihak luar atau memuat wajah orang |
| Cek paham | **Deswita** — studi kasus "PT Maju Jaya menunjuk Andi…" | Cindi (kasus Rp900 juta), Dika, Salma | Berbentuk kasus singkat dengan 4 pilihan, paling hidup |
| Tabel Data | Ikram — "Dasar Pengenaan PBB-P2" *(cadangan, tidak masuk adegan 4b)* | Deswita | Paling rapi dan terbaca |
| Gambar | Wendi Nurhayat — infografis "Proses Bisnis Tradisional → MNE" *(cadangan)* | Salma, Cindi, Riko | Jelas dan mencolok |
| Grid | Salma — Standar Umum / Pelaksanaan / Pelaporan *(cadangan)* | Cindi, Wendi, paket uji | Tiga kolom seimbang berisi materi sungguhan |
| Garis Waktu | Salma — Surat Pemberitahuan Pemeriksaan *(cadangan)* | modul uji | Kandidat lain berisi teks bercanda |
| Articulate | **Endy — *PJJ Transfer Pricing I* KB 2 (PKKU)**, adegan "Kopi Pelabuhan" | Endy KB 1 (kantor PT Kayu Nusantara), KB 3 (layar judul), KB 4 (layar judul + 3 menu), paket uji "Hook Learning Journey" (tidak tampil apa-apa) | Paling banyak gerak dalam 2–3 detik pertama: kapal datang, tokoh berjabat tangan, balon percakapan. Paket diunduh dan dijalankan untuk dinilai (G9) |
| HTML Bebas | **Peta Materi Pemeriksaan Pajak** (pilihan pemilik, G8) | Endy (rangkuman KB1–KB4, Shadow Economy ×2) | Karya Endy mengubah seluruh tampilan modul jadi krem |

Modul utama untuk layar editor, pratinjau, dan sisi peserta (adegan 4, 5, 6, 7, 8): **Salma — *Gambaran Umum dan Tahapan Pemeriksaan*** (24 slide, 15 jenis blok, bergambar sampul). Modul ini paling beragam isinya dan tiga bloknya juga terpilih di atas.

---

## I. Sumber teks layar & label rujukan (revisi 3, atas arahan pemilik)

Teks penjelasan di layar kini dirujuk ke tiga sumber:
1. **Panduan Fitur** (`Panduan-Fitur-Template-Modul-Ikram.html`): kalimat resmi tiap fitur, mis. "tanpa perlu menulis satu baris kode pun", "file presentasi yang sudah dipakai untuk mengajar langsung bisa dipakai sebagai sumber", "bagian mana yang paling dipertanyakan, dan oleh siapa", "mana yang perlu diperbaiki di modul berikutnya".
2. **Panduan cara baca Command Center** (tersimpan di server, `/api/panduan-cc`): alasan per kolom, mis. "Pecahan langsung menjawab 'ada yang kelewat atau tidak'", Knowledge Check "mengukur pemahaman, bukan kelulusan", status Articulate "diambil dari laporan paket itu".
3. **Catatan dasar riset** di memori proyek lama (`~/.claude/projects/...-pilar-kolaborasi-pajak/memory/`): `project_idle_threshold_riset.md`, `project_reading_speed_brysbaert.md`, `project_rekap_peserta_popup.md` (bagian "TEORI PEMBELAJARAN").

Label kecil **RUJUKAN** muncul di kiri bawah hanya pada momen yang berdasar riset:

| Momen | Label | Kaitan fitur–riset |
|---|---|---|
| Karya tim: akordeon/tab/alur/popup (0:56–1:00,6) | Beban kognitif · Sweller (1988); Mayer & Moreno (2003) | **Disimpulkan** — teori ada di daftar "teori pembelajaran untuk paparan", pemetaannya ke blok buka-tutup belum tertulis eksplisit |
| Karya tim: video (1:01,3–1:03,2) | Keterlibatan video · Guo, Kim & Rubin (2014) | **Disimpulkan** (idem) |
| Karya tim: cek paham (1:03,6–1:05,8) | *Testing effect* · Roediger & Karpicke (2006) | **Disimpulkan** (idem) |
| Kuis per bagian (1:27,9–1:32,2) | *Mastery learning* · Bloom (1968) | Eksplisit: catatan menyebut gerbang kuis = Mastery Learning |
| Peringatan baca cepat (1:43,7–1:48,6) | 238 kata/menit · Brysbaert (2019), meta-analisis 190 studi | Eksplisit |
| Tatap layar vs ditinggal (2:15,2–2:20,4) | Ambang diam 3–5 menit · Hubstaff; Huang, White & Buscher (2012) | Eksplisit (keputusan ambang 4 menit) |
| Rincian peringatan (2:26,6–2:31,4) | Waktu baca minimum = kata ÷ 238 × 60 detik · Brysbaert (2019) | Eksplisit |

Teori lain di catatan yang belum dipakai di layar: Kulhavy (1977) dan Hattie & Timperley (2007) untuk umpan balik, Black & Wiliam (1998) untuk asesmen formatif, Mayer & Moreno (2002) untuk modalitas, Knowles (1975, 1980) untuk navigasi bebas setelah kuis terbuka, dan Deci & Ryan (1985/2000) untuk nada "Ringkasan Belajarmu".

# Graph Report - Template Modul Ikram  (2026-10-18)

## Corpus Check
- 75 files · ~577,622 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1228 nodes · 2158 edges · 86 communities (69 shown, 17 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 184 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `ff9a4bfe`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Render the current NAV item into the viewport
- BlockEditor
- generator.py
- Buffer an activity tracking event
- devDependencies
- buka
- activity_store.py
- steps.ts
- PaketExportDialog.tsx
- BlockEditor.tsx
- App.tsx
- BlockPreview.tsx
- api.ts
- RefleksiPanel.tsx
- compilerOptions
- PanduanTabel.tsx
- Bedah: SCORM "Penyusunan Sasaran Kinerja Pegawai" (KLC2)
- ModuleData
- compilerOptions
- CommandCenter.tsx
- hkpd_to_moduledata.mjs
- BlockAddMenu.tsx
- E. Storyboard per adegan
- cek-demo.mjs
- Canvas
- Navigate to a NAV index, enforcing all gating rules
- draft_store.py
- changeBlockType
- DtableFields
- plugins
- r2.py
- CommandCenter
- GraphicStyleSelect.tsx
- types.ts
- Ambang "Ditinggal" — 4 Menit
- scormZip.ts
- PreviewExport
- icons.svg (SVG sprite sheet)
- react
- build_source_printout.py
- ambil-aset.mjs
- ccPost
- api/index.py
- QuizBuilder
- index.py
- supabase_setup.sql
- vite-env.d.ts
- tsconfig.json
- Aktifkan Rekam Aktivitas Peserta (toggle)
- make_template.py
- app/index.html — Vite React Entry HTML
- supabase_activity_setup.sql
- App Favicon Icon (Purple-Blue Gradient Mark)
- Hero Illustration (Floating Rounded Square)
- React Logo (Vite Scaffold Asset)
- Vite Logo (Stock Asset)
- Pola kartu -> modal detail
- Panduan Fitur — Template Modul Ikram
- Close modal block
- SVG donut chart renderer
- Open the mobile sidebar drawer
- CoverForm.tsx
- SlideBank.tsx
- extractBlockText
- SlidePreview
- ambil-karya.mjs
- PreviewExport.tsx
- Identity Resolution & NIP Capture
- Learning Recap Popup ('Ringkasan Belajarmu')
- api_activity_my_recap
- get
- post
- pptx_extract.py
- Knowledge Check Gate
- Video Progress Tracking
- pratinjau.js
- PanduanBaca.tsx
- Canvas.tsx
- Dev Mode Panel
- Alat "Cek Rekam Aktivitas"
- api_r2_download_url

## God Nodes (most connected - your core abstractions)
1. `App()` - 34 edges
2. `CommandCenter()` - 27 edges
3. `ModuleData` - 23 edges
4. `esc()` - 22 edges
5. `react` - 21 edges
6. `generate_html()` - 20 edges
7. `PreviewExport()` - 20 edges
8. `Navigate to a NAV index, enforcing all gating rules` - 20 edges
9. `Canvas()` - 18 edges
10. `compilerOptions` - 18 edges

## Surprising Connections (you probably didn't know these)
- `Preview & Export (Tahap 5)` --references--> `generate_html()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/generator.py
- `14 Jenis Blok Konten` --references--> `render_block()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/generator.py
- `Import PPTX (Tahap 1)` --references--> `extract()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/pptx_extract.py
- `Token warna blok colorClasses(name)` --semantically_similar_to--> `Token warna ditukar utuh per konsep`  [INFERRED] [semantically similar]
  docs/bedah-scorm-klc2-skp.md → app/src/paket/paket-shell.html
- `Verifikasi frontend lewat string di bundle` --semantically_similar_to--> `Cara memverifikasi ulang temuan bedah`  [INFERRED] [semantically similar]
  CLAUDE.md → docs/bedah-scorm-klc2-skp.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Activity buffer -> outbox -> Supabase send pipeline** — server_api_shell_template_actevent, server_api_shell_template_actflush, server_api_shell_template_actsend [EXTRACTED 1.00]
- **goTo() navigation gate checks** — server_api_shell_template_goto, server_api_shell_template_kcallansweredforslide, server_api_shell_template_artpendingonslide [EXTRACTED 1.00]
- **Alur membuka modul: render daftar -> buka() -> tab mewarisi origin -> ISI ditulis** — app_src_paket_paket_shell_renderpanel, app_src_paket_paket_shell_renderindeks, app_src_paket_paket_shell_buildorbit, app_src_paket_paket_shell_buka, app_src_paket_paket_shell_isi, app_src_paket_paket_shell_document_write_bukan_blob [EXTRACTED 1.00]
- **Lima pola prioritas tinggi hasil bedah KLC2 yang diusulkan masuk builder** — docs_bedah_scorm_klc2_skp_fluid_clamp_sizing, docs_bedah_scorm_klc2_skp_searchtext_per_slide, docs_bedah_scorm_klc2_skp_resume_localstorage_stempel_build, docs_bedah_scorm_klc2_skp_preloader_import_meta_glob, docs_bedah_scorm_klc2_skp_token_warna_blok [EXTRACTED 1.00]
- **Tiga konsep tata letak dashboard (Panel, Indeks, Orbit) dipilih satu lewat KONSEP** — mockups_landing_konsol_modul_panel_concept, mockups_landing_konsol_modul_indeks_concept, mockups_landing_konsol_modul_orbit_concept, app_src_paket_paket_shell_konsep, app_src_paket_paket_shell_token_warna_per_konsep [EXTRACTED 1.00]
- **Filled black brand-logo icon group (Bluesky, Discord, GitHub, X)** — app_public_icons_bluesky_icon, app_public_icons_discord_icon, app_public_icons_github_icon, app_public_icons_x_icon [INFERRED 0.85]
- **Articulate SCORM-in-SCORM containment** — server_api_shell_template_artmakeshim, server_api_shell_template_scormfindapi, server_api_shell_template_concept_articulate_runtime [INFERRED 0.85]
- **Research Basis for Idle/Reading-speed Thresholds** — panduan_fitur_template_modul_ikram_ambang_ditinggal_4_menit, panduan_fitur_template_modul_ikram_ambang_dibaca_238wpm, server_api_shell_template_actidlethresholdms, server_api_generator [INFERRED 0.85]

## Communities (86 total, 17 thin omitted)

### Community 0 - "Render the current NAV item into the viewport"
Cohesion: 0.16
Nodes (23): Get or create the shared Web Audio context, Schedule a single oscillator tone, Record a quiz option selection, Inject/play per-slide voiceover audio, Section Quiz Checkpoint, Check whether a section's quiz is unlocked, Check whether a section's quiz has been passed, Play the correct-answer chime (+15 more)

### Community 1 - "BlockEditor"
Cohesion: 0.20
Nodes (8): ambilDaftar(), BlockEditor(), add(), toggleCollapse(), langgananBlokAktif(), sarangRapiNyala(), setSarangRapi(), tulisDaftar()

### Community 2 - "generator.py"
Cohesion: 0.06
Nodes (64): Preview & Export (Tahap 5), art_entry(), _blok_heading(), build_nav(), _caption_html(), clamp_brightness(), count_articulate(), count_interaktif() (+56 more)

### Community 3 - "Buffer an activity tracking event"
Cohesion: 0.13
Nodes (28): Accordion block renderer, Bind global activity listeners for idle detection, Boot activity tracking: resume outbox, resolve identity, start/gate, Check elapsed time against idle threshold, pause segment, Close out timing for the previous slide and emit slide_view, End the activity session and flush final events, Buffer an activity tracking event, Flush buffered + outboxed activity events to the server (+20 more)

### Community 4 - "devDependencies"
Cohesion: 0.05
Nodes (39): dependencies, @dnd-kit/core, @dnd-kit/sortable, @dnd-kit/utilities, react, react-dom, @zip.js/zip.js, devDependencies (+31 more)

### Community 5 - "buka"
Cohesion: 0.05
Nodes (44): buildOrbit(), buka(), Cangkang Paket Modul (paket-shell), cocok() - penyaring pencarian modul, document.write ke tab baru, bukan blob: URL, fokusOrbit(), ISI (HTML utuh tiap modul), Konstanta KONSEP (dipatok saat export) (+36 more)

### Community 6 - "activity_store.py"
Cohesion: 0.07
Nodes (50): batalkan_tanda(), cocreation_notes_for_learner(), cocreation_tree(), fetch_rows(), _gabung_catatan(), _headers(), _interaksi_key(), iter_rows() (+42 more)

### Community 7 - "steps.ts"
Cohesion: 0.08
Nodes (28): EntriBlok, REFLEKSI_RIKO, TUR_BLOK, VIDEO_CONTOH, bersihkanChrome(), BuilderDemo, cariDiFrame(), DEMO_ABORT (+20 more)

### Community 8 - "PaketExportDialog.tsx"
Cohesion: 0.12
Nodes (27): DraftRingkas, listDraftsRingkas(), bacaLogoPng(), inp, KONSEP_INFO, LogoBaca, PaketExportDialog(), jalankan() (+19 more)

### Community 9 - "BlockEditor.tsx"
Cohesion: 0.08
Nodes (24): uploadMediaToStorage(), BlockFields(), detectPngTransparency(), FieldStyle, ImageUploadField(), IZIN_SARANG, KnowledgeFields(), lanjutkanDaftar() (+16 more)

### Community 10 - "App.tsx"
Cohesion: 0.11
Nodes (20): draftExists(), App(), handleCreateProject(), handleImportJson(), hentikanDemo(), mulaiDemo(), onKey(), AutosaveIndicator() (+12 more)

### Community 11 - "BlockPreview.tsx"
Cohesion: 0.21
Nodes (7): AccordionDemo(), FlowDemo(), LOREM, ModalDemo(), TabsDemo(), useBlinkWithClick(), useCycleWithClick()

### Community 12 - "api.ts"
Cohesion: 0.12
Nodes (23): ArticulateInfo, CocreationSection, CocreationSlide, deleteArticulate(), extractPptx(), payloadFor(), r2MediaTersedia(), r2Tersedia() (+15 more)

### Community 13 - "RefleksiPanel.tsx"
Cohesion: 0.20
Nodes (16): RefleksiJawaban, RefleksiKiriman, jawabanTeks(), Kolom, kolomPoin(), RefleksiPanel(), unduh(), SEL (+8 more)

### Community 14 - "compilerOptions"
Cohesion: 0.08
Nodes (23): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+15 more)

### Community 15 - "PanduanTabel.tsx"
Cohesion: 0.10
Nodes (23): PeringatanDetail, VideoDetail, NamaPeserta(), PeringatanRincian(), perluTindakLanjut(), RingkasanBar(), SEL_NAMA, TH_ATAS (+15 more)

### Community 16 - "Bedah: SCORM "Penyusunan Sasaran Kinerja Pegawai" (KLC2)"
Cohesion: 0.09
Nodes (21): 10. Cara memverifikasi ulang temuan ini, 1. Ringkas teknologi, 2.1 Mesin layar (state machine di root), 2.2 Resume otomatis via localStorage ber-stempel build, 2.3 Struktur konten: slide = komponen React, bukan data, 2.4 Preloader yang mengukur progres nyata, 2. Arsitektur aplikasi, 3. Layar-layar (+13 more)

### Community 17 - "ModuleData"
Cohesion: 0.26
Nodes (9): History, DemoCaptionEditor(), Props, Props, collectTypes(), DEMO_STEPS, DemoStep, moduleFacts (+1 more)

### Community 18 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 19 - "CommandCenter.tsx"
Cohesion: 0.21
Nodes (13): ActivityLearner, ActivityModule, ActivitySession, CocreationModule, CocreationNote, CatatanSlidePeserta, CocreationPesertaView(), perPeserta() (+5 more)

### Community 20 - "hkpd_to_moduledata.mjs"
Cohesion: 0.16
Nodes (17): blockTypes, CALLOUT_VARIANT, decodeEntities(), htmlField(), [inFile, outFile], mapBlock(), mapKnowledgeCheck(), moduleData (+9 more)

### Community 21 - "BlockAddMenu.tsx"
Cohesion: 0.17
Nodes (7): BLOCK_LABELS, BLOCK_TYPES, BlockAddMenu(), Props, BLOCK_PREVIEW_STYLES, BlockPreviewCard(), BlockType

### Community 22 - "E. Storyboard per adegan"
Cohesion: 0.08
Nodes (23): A. Masalah yang diangkat di pembuka (Langkah 1), Adegan 10 — Fitur pendukung (3:25,4 – 3:30,6) · label `TEMPA`, Adegan 11 — Aman & siap dipakai (3:30,8 – 3:36,2), Adegan 12 — Penutup (3:36,4 – 3:48,2), Adegan 1 — Masalahnya (0:00 – 0:20,4), Adegan 2 — Perkenalan TEMPA (0:20,4 – 0:33,8) · label `TEMPA · Beranda`, Adegan 3 — Import PPTX (0:34,0 – 0:39,6) · label `1 · Import PPTX`, Adegan 4 — Susun Modul (0:39,8 – 0:50,4) · label `2 · Susun Modul` (+15 more)

### Community 23 - "cek-demo.mjs"
Cohesion: 0.27
Nodes (15): AKAR, ambangIdleSamaDiDuaMesin(), baca(), captionTidakDitulisDuaKali(), F, gagal(), kaitDataDemoTerpasang(), kaitTemaTerpasang() (+7 more)

### Community 24 - "Canvas"
Cohesion: 0.19
Nodes (17): Canvas(), addBlankSlide(), addBundle(), addSection(), bukaSlideNomor(), bundlesFor(), gulirKeBaris(), onDragEnd() (+9 more)

### Community 25 - "Navigate to a NAV index, enforcing all gating rules"
Cohesion: 0.17
Nodes (21): Group a section's NAV items into singles/bundles/quiz, Handle 'go back and reread' from reading warning, Handle 'proceed anyway' from reading warning, Close the mobile sidebar drawer, Reading-Speed & Idle Detection, Sidebar & Slide Navigation, Navigate to the next NAV item, Navigate to the previous NAV item (+13 more)

### Community 26 - "draft_store.py"
Cohesion: 0.21
Nodes (17): delete_draft(), _headers(), is_internal(), _judul_berkas(), list_drafts(), list_drafts_with_title(), load_draft(), ping() (+9 more)

### Community 27 - "changeBlockType"
Cohesion: 0.31
Nodes (9): changeType(), ReflectionFields(), geser(), patch(), setItems(), applyBlockText(), changeBlockType(), newBlock() (+1 more)

### Community 29 - "plugins"
Cohesion: 0.22
Nodes (8): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, typescript, warn

### Community 30 - "r2.py"
Cohesion: 0.20
Nodes (13): _creds(), is_configured(), media_is_configured(), media_public_url(), presign(), _quote(), Cloudflare R2 — penanda tangan URL (presigned URL) buat paket Articulate.…, Apakah kredensial R2 lengkap terpasang di environment backend? Dipakai frontend… (+5 more)

### Community 31 - "CommandCenter"
Cohesion: 0.17
Nodes (17): ccRawRows(), ccRincian(), barisCatatan(), CommandCenter(), ambilRincian(), CocSakelar(), download(), toCsv() (+9 more)

### Community 32 - "GraphicStyleSelect.tsx"
Cohesion: 0.15
Nodes (10): GraphicStyleSelect(), hexToRgba(), KIND_LABEL, KINDS, PANEL_STYLE, Props, GRAPHIC_STYLE_PREVIEWS, GraphicStylePreviewSet (+2 more)

### Community 33 - "types.ts"
Cohesion: 0.19
Nodes (15): Props, kebijakanKuisSection(), kebijakanMentah(), modeKuisSection(), BlockColor, DEFAULT_QUIZ_POLICY, KcQuestion, KEBIJAKAN_GERBANG (+7 more)

### Community 34 - "Ambang "Ditinggal" — 4 Menit"
Cohesion: 0.22
Nodes (9): Ambang "Dibaca" — 238 kata/menit, gagal di bawah 50%, Ambang "Ditinggal" — 4 Menit, Brysbaert (2019) — Reading Research Quarterly Meta-analysis (238 wpm), Chartbeat — User Engagement Tracking Methodology, Dasar Riset (Tahap 8), Flowace (2026) — Keystroke & Mouse Activity Tracking, Google Research (2013) — Eye-mouse Behavior, Huang, White & Buscher — Gaze/Cursor Study (CHI 2012) (+1 more)

### Community 35 - "scormZip.ts"
Cohesion: 0.21
Nodes (15): fetchArticulateZip(), generateHtmlForZip(), blobKeDataUri(), HasilSemat, namaAset(), sematkanGambarDataUri(), urlGambar(), articulateBlocks() (+7 more)

### Community 36 - "PreviewExport"
Cohesion: 0.21
Nodes (15): generateHtml(), PreviewExport(), catatJudulExport(), doCopy(), doDelete(), doExport(), doExportScorm(), doPreview() (+7 more)

### Community 37 - "icons.svg (SVG sprite sheet)"
Cohesion: 0.62
Nodes (7): bluesky-icon symbol, discord-icon symbol, documentation-icon symbol, github-icon symbol, social-icon symbol (generic profile/star icon), icons.svg (SVG sprite sheet), x-icon symbol (X/Twitter logo)

### Community 38 - "react"
Cohesion: 0.29
Nodes (4): EmojiPicker(), Props, EMOJI_CATEGORIES, react

### Community 39 - "build_source_printout.py"
Cohesion: 0.38
Nodes (6): ambil_desain(), id_berkas(), main(), Bangun ulang Template-Modul-Ikram-Source-Code.html dari isi repo saat ini.…, Id jangkar yang stabil - dipakai href sidebar dan id <section>., Kembalikan (kepala, ekor): semuanya sebelum <div class="wrap"> dan blok…

### Community 40 - "ambil-aset.mjs"
Cohesion: 0.16
Nodes (13): DIR, ev(), foto(), H, HANYA, kirim(), l, pg (+5 more)

### Community 41 - "ccPost"
Cohesion: 0.15
Nodes (17): ccBatalkanTanda(), ccCocreation(), ccDitandai(), ccListLearners(), ccListModules(), ccListSessions(), ccPost(), ccRefleksi() (+9 more)

### Community 42 - "api/index.py"
Cohesion: 0.33
Nodes (5): includeFiles, maxDuration, crons, functions, api/index.py

### Community 43 - "QuizBuilder"
Cohesion: 0.36
Nodes (7): QuizBuilder(), addQuestion(), autoDistribute(), move(), removeQuestion(), setQuestions(), updateQuestion()

### Community 44 - "index.py"
Cohesion: 0.15
Nodes (18): delete, api_cocreation_my_notes(), api_delete_draft(), api_extract_pptx(), api_panduan_save(), api_panduan_verify(), api_r2_delete_url(), api_r2_media_upload_url() (+10 more)

### Community 45 - "supabase_setup.sql"
Cohesion: 0.40
Nodes (3): public.modul_drafts_touch, modul_drafts_touch_trigger, public.modul_drafts

### Community 48 - "Aktifkan Rekam Aktivitas Peserta (toggle)"
Cohesion: 0.67
Nodes (3): Cek Kesiapan Sistem Rekam, Aktifkan Rekam Aktivitas Peserta (toggle), Sampul (Tahap 3)

### Community 66 - "CoverForm.tsx"
Cohesion: 0.24
Nodes (11): checkTrackingConfig(), uploadImageToStorage(), BackgroundImageField(), handleUpload(), CoverForm(), Props, DEFAULT_THEME, findThemePresetId() (+3 more)

### Community 67 - "SlideBank.tsx"
Cohesion: 0.29
Nodes (5): Props, SlideBank(), addToCanvas(), DraftSlide, Slide

### Community 68 - "extractBlockText"
Cohesion: 0.29
Nodes (6): demoBoothJalan(), remove(), blockSummary(), GridCellPreview(), extractBlockText(), isBlockEmpty()

### Community 69 - "SlidePreview"
Cohesion: 0.53
Nodes (5): SlidePreview(), bawaPopupKeLayar(), gulirKeBlokAktif(), jumpToSlide(), sorotBlokAktif()

### Community 70 - "ambil-karya.mjs"
Cohesion: 0.17
Nodes (14): buka(), DIR, ev(), foto(), HANYA, K, kirim(), l (+6 more)

### Community 71 - "PreviewExport.tsx"
Cohesion: 0.16
Nodes (19): copyDraft(), deleteDraft(), listDrafts(), loadDraft(), renameDraft(), saveDraft(), handleOpenExistingDraft(), NewProjectModal() (+11 more)

### Community 72 - "Identity Resolution & NIP Capture"
Cohesion: 0.07
Nodes (46): checkNetwork(), checkScorm(), findAPI(), rows(), setVerdict(), lms-probe/README.md — Uji Koneksi LMS Guide, Identitas Peserta Lintas Modul, Keandalan Pencatatan Data (Outbox Offline) (+38 more)

### Community 73 - "Learning Recap Popup ('Ringkasan Belajarmu')"
Cohesion: 0.25
Nodes (14): SVG bar chart renderer, Learning Recap Popup ('Ringkasan Belajarmu'), Render the recap bar chart of engagement signals, Close the learner recap popup, HTML-escape a value for the recap popup, Join a list of strings with Indonesian 'dan' conjunction, Build the per-signal narration text builders for recap, Open the learner recap popup, fetching data if needed (+6 more)

### Community 75 - "get"
Cohesion: 0.18
Nodes (11): get, api_health(), api_keepalive(), api_list_drafts(), api_load_draft(), api_panduan_get(), api_r2_configured(), api_tracking_config() (+3 more)

### Community 76 - "post"
Cohesion: 0.12
Nodes (24): post, api_activity_batalkan_tanda(), api_activity_cocreation(), api_activity_ditandai(), api_activity_learners(), api_activity_modules(), api_activity_refleksi(), api_activity_rincian() (+16 more)

### Community 77 - "pptx_extract.py"
Cohesion: 0.43
Nodes (6): Import PPTX (Tahap 1), extract(), PPTX -> draft slide JSON. Mirrors the manual extraction process already proven…, _shape_image(), _shape_table(), _shape_text()

### Community 78 - "Knowledge Check Gate"
Cohesion: 0.45
Nodes (11): Knowledge Check Gate, Check whether all Knowledge Check items on a slide are answered, Record a Knowledge Check answer, handle retry-until-correct, Apply the final locked result state for a KC question, Find a Knowledge Check question by block/index, Mark one KC option button as tried-and-wrong, Open the Knowledge Check popup for a slide, Restore prior wrong KC attempts on popup reopen (+3 more)

### Community 79 - "Video Progress Tracking"
Cohesion: 0.42
Nodes (10): Video Progress Tracking, Global callback: flush queued YouTube player requests, Replace a YouTube facade with a real tracked IFrame player, Instantiate a YT.Player with tracked state events, Fall back to a plain untracked YouTube iframe, Flush all in-progress video checkpoints and YT samplers, Mark a video block as started, capture its slide, Handle YouTube player state changes for tracking (+2 more)

### Community 80 - "pratinjau.js"
Cohesion: 0.25
Nodes (6): cp, exe, fs, os, path, url

### Community 81 - "PanduanBaca.tsx"
Cohesion: 0.16
Nodes (17): PanduanCC, PanduanKeputusan, PanduanKolom, panduanLoad(), panduanPost(), panduanSave(), panduanVerify(), BAWAAN (+9 more)

### Community 82 - "Canvas.tsx"
Cohesion: 0.29
Nodes (3): Props, SlideRow(), Section

### Community 83 - "Dev Mode Panel"
Cohesion: 0.33
Nodes (7): Show/hide the progress block per HIDE_PROGRESS, Hide the dev-mode password modal, Dev Mode Panel, Show the dev-mode password modal, Validate dev-mode password and enable dev mode, Toggle developer mode on/off, Dev-mode preview toggle for hidden progress

### Community 85 - "Alat "Cek Rekam Aktivitas""
Cohesion: 0.67
Nodes (3): Alat "Cek Rekam Aktivitas", Command Center — Rekam Aktivitas & Analitik (Tahap 7), Deteksi Otomatis Data Janggal

## Ambiguous Edges - Review These
- `Deploy (dua project Vercel)` → `Aturan graphify untuk proyek ini`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **262 isolated node(s):** `A. Masalah yang diangkat di pembuka (Langkah 1)`, `B. Peta menu → Command Center (Langkah 2)`, `C. Panduan gaya — "Bara TEMPA" (revisi 4, menggantikan gaya biru-malam yang sama dengan ORBIT)`, `D. Naskah teks layar`, `Adegan 1 — Masalahnya (0:00 – 0:20,4)` (+257 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **17 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Deploy (dua project Vercel)` and `Aturan graphify untuk proyek ini`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Template Modul Ikram — Source Code (Full Repo Printout)` connect `App.tsx` to `draft_store.py`, `generator.py`?**
  _High betweenness centrality (0.165) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `GraphicStyleSelect.tsx`, `types.ts`, `CoverForm.tsx`, `SlideBank.tsx`, `PreviewExport.tsx`, `PaketExportDialog.tsx`, `BlockEditor.tsx`, `App.tsx`, `BlockPreview.tsx`, `RefleksiPanel.tsx`, `PanduanTabel.tsx`, `ModuleData`, `Canvas.tsx`, `CommandCenter.tsx`, `PanduanBaca.tsx`, `BlockAddMenu.tsx`, `plugins`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `CommandCenter()` connect `CommandCenter` to `ccPost`, `App.tsx`, `CommandCenter.tsx`, `PanduanTabel.tsx`?**
  _High betweenness centrality (0.026) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `App()` (e.g. with `onKey()` and `demoDariUrl()`) actually correct?**
  _`App()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `A. Masalah yang diangkat di pembuka (Langkah 1)`, `B. Peta menu → Command Center (Langkah 2)`, `C. Panduan gaya — "Bara TEMPA" (revisi 4, menggantikan gaya biru-malam yang sama dengan ORBIT)` to the rest of the system?**
  _262 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `generator.py` be split into smaller, more focused modules?**
  _Cohesion score 0.05698778833107191 - nodes in this community are weakly interconnected._
# Graph Report - Template Modul Ikram  (2026-10-12)

## Corpus Check
- 69 files · ~297,552 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1162 nodes · 2059 edges · 89 communities (70 shown, 19 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 184 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `1ce8641e`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Navigate to a NAV index, enforcing all gating rules
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
- api_activity_my_recap
- compilerOptions
- CommandCenter.tsx
- hkpd_to_moduledata.mjs
- Knowledge Check Gate
- Render the current NAV item into the viewport
- cek-demo.mjs
- Canvas
- Record a content-interaction event (accordion/tabs/modal/flow)
- draft_store.py
- changeBlockType
- DtableFields
- plugins
- r2.py
- CommandCenter
- GraphicStyleSelect.tsx
- types.ts
- Ambang "Ditinggal" — 4 Menit
- Learning Recap Popup ('Ringkasan Belajarmu')
- scormZip.ts
- icons.svg (SVG sprite sheet)
- EmojiPicker.tsx
- build_source_printout.py
- Video Progress Tracking
- ccPost
- api/index.py
- QuizBuilder
- post
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
- index.py
- PreviewExport
- Show the reading-speed warning overlay
- api_extract_pptx
- PreviewExport.tsx
- normalizeModule
- Identity Resolution & NIP Capture
- Canvas.tsx
- CoverForm.tsx
- Dev Mode Panel
- demoSteps.ts
- Alat "Cek Rekam Aktivitas"
- PanduanTabel
- api_r2_media_upload_url
- api_r2_upload_url
- react
- extractBlockText
- SlidePreview
- pembungkusTag
- SlideBank
- deleteArticulate
- KnowledgeFields
- 14 Jenis Blok Konten

## God Nodes (most connected - your core abstractions)
1. `App()` - 31 edges
2. `CommandCenter()` - 26 edges
3. `esc()` - 22 edges
4. `ModuleData` - 21 edges
5. `react` - 21 edges
6. `generate_html()` - 20 edges
7. `Navigate to a NAV index, enforcing all gating rules` - 20 edges
8. `PreviewExport()` - 19 edges
9. `compilerOptions` - 18 edges
10. `Render the current NAV item into the viewport` - 18 edges

## Surprising Connections (you probably didn't know these)
- `14 Jenis Blok Konten` --references--> `render_block()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/generator.py
- `Preview & Export (Tahap 5)` --references--> `generate_html()`  [INFERRED]
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

## Communities (89 total, 19 thin omitted)

### Community 0 - "Navigate to a NAV index, enforcing all gating rules"
Cohesion: 0.16
Nodes (22): Group a section's NAV items into singles/bundles/quiz, Handle 'go back and reread' from reading warning, Handle 'proceed anyway' from reading warning, Close the mobile sidebar drawer, Reading-Speed & Idle Detection, Sidebar & Slide Navigation, Navigate to the next NAV item, Navigate to the previous NAV item (+14 more)

### Community 1 - "BlockEditor"
Cohesion: 0.20
Nodes (8): ambilDaftar(), BlockEditor(), add(), toggleCollapse(), langgananBlokAktif(), sarangRapiNyala(), setSarangRapi(), tulisDaftar()

### Community 2 - "generator.py"
Cohesion: 0.06
Nodes (65): Preview & Export (Tahap 5), art_entry(), _blok_heading(), build_nav(), _caption_html(), clamp_brightness(), count_articulate(), count_interaktif() (+57 more)

### Community 3 - "Buffer an activity tracking event"
Cohesion: 0.22
Nodes (20): Bind global activity listeners for idle detection, Boot activity tracking: resume outbox, resolve identity, start/gate, Check elapsed time against idle threshold, pause segment, Close out timing for the previous slide and emit slide_view, End the activity session and flush final events, Buffer an activity tracking event, Flush buffered + outboxed activity events to the server, Compute idle threshold for the current slide mark (+12 more)

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
Nodes (26): EntriBlok, TUR_BLOK, VIDEO_CONTOH, bersihkanChrome(), BuilderDemo, DEMO_ABORT, DEMO_IDLE_RESUME_MS, DemoCtx (+18 more)

### Community 8 - "PaketExportDialog.tsx"
Cohesion: 0.12
Nodes (27): DraftRingkas, listDraftsRingkas(), bacaLogoPng(), inp, KONSEP_INFO, LogoBaca, PaketExportDialog(), jalankan() (+19 more)

### Community 9 - "BlockEditor.tsx"
Cohesion: 0.09
Nodes (19): uploadMediaToStorage(), BlockFields(), detectPngTransparency(), FieldStyle, ImageUploadField(), IZIN_SARANG, ModalFields(), pendengarBlokAktif (+11 more)

### Community 10 - "App.tsx"
Cohesion: 0.10
Nodes (20): draftExists(), App(), handleCreateProject(), handleImportJson(), hentikanDemo(), mulaiDemo(), onKey(), AutosaveIndicator() (+12 more)

### Community 11 - "BlockPreview.tsx"
Cohesion: 0.10
Nodes (14): BLOCK_LABELS, BLOCK_TYPES, BlockAddMenu(), Props, AccordionDemo(), BLOCK_PREVIEW_STYLES, BlockPreviewCard(), FlowDemo() (+6 more)

### Community 12 - "api.ts"
Cohesion: 0.13
Nodes (20): ArticulateInfo, CocreationNote, CocreationSection, CocreationSlide, extractPptx(), payloadFor(), r2MediaTersedia(), r2Tersedia() (+12 more)

### Community 13 - "RefleksiPanel.tsx"
Cohesion: 0.20
Nodes (16): RefleksiJawaban, RefleksiKiriman, jawabanTeks(), Kolom, kolomPoin(), RefleksiPanel(), unduh(), SEL (+8 more)

### Community 14 - "compilerOptions"
Cohesion: 0.08
Nodes (23): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+15 more)

### Community 15 - "PanduanTabel.tsx"
Cohesion: 0.13
Nodes (19): PeringatanDetail, VideoDetail, NamaPeserta(), PeringatanRincian(), RingkasanBar(), SEL_NAMA, TH_ATAS, TH_NAMA (+11 more)

### Community 16 - "Bedah: SCORM "Penyusunan Sasaran Kinerja Pegawai" (KLC2)"
Cohesion: 0.09
Nodes (21): 10. Cara memverifikasi ulang temuan ini, 1. Ringkas teknologi, 2.1 Mesin layar (state machine di root), 2.2 Resume otomatis via localStorage ber-stempel build, 2.3 Struktur konten: slide = komponen React, bukan data, 2.4 Preloader yang mengukur progres nyata, 2. Arsitektur aplikasi, 3. Layar-layar (+13 more)

### Community 17 - "api_activity_my_recap"
Cohesion: 0.33
Nodes (4): api_activity_my_recap(), api_r2_delete_url(), URL sementara buat menghapus paket yang bloknya dibuang/diganti. Tanpa ini,…, Rekap belajar SATU peserta, dipanggil dari dalam modul yang lagi dia buka.…

### Community 18 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 19 - "CommandCenter.tsx"
Cohesion: 0.22
Nodes (12): ActivityLearner, ActivityModule, ActivitySession, CocreationModule, CatatanSlidePeserta, CocreationPesertaView(), perPeserta(), PesertaCatatan (+4 more)

### Community 20 - "hkpd_to_moduledata.mjs"
Cohesion: 0.16
Nodes (17): blockTypes, CALLOUT_VARIANT, decodeEntities(), htmlField(), [inFile, outFile], mapBlock(), mapKnowledgeCheck(), moduleData (+9 more)

### Community 21 - "Knowledge Check Gate"
Cohesion: 0.45
Nodes (11): Knowledge Check Gate, Check whether all Knowledge Check items on a slide are answered, Record a Knowledge Check answer, handle retry-until-correct, Apply the final locked result state for a KC question, Find a Knowledge Check question by block/index, Mark one KC option button as tried-and-wrong, Open the Knowledge Check popup for a slide, Restore prior wrong KC attempts on popup reopen (+3 more)

### Community 22 - "Render the current NAV item into the viewport"
Cohesion: 0.18
Nodes (21): Get or create the shared Web Audio context, Schedule a single oscillator tone, Record a quiz option selection, Inject/play per-slide voiceover audio, Section Quiz Checkpoint, Check whether a section's quiz has been passed, Play the correct-answer chime, Play the quiz-failed tone (+13 more)

### Community 23 - "cek-demo.mjs"
Cohesion: 0.27
Nodes (15): AKAR, ambangIdleSamaDiDuaMesin(), baca(), captionTidakDitulisDuaKali(), F, gagal(), kaitDataDemoTerpasang(), kaitTemaTerpasang() (+7 more)

### Community 24 - "Canvas"
Cohesion: 0.19
Nodes (17): Canvas(), addBlankSlide(), addBundle(), addSection(), bukaSlideNomor(), bundlesFor(), gulirKeBaris(), onDragEnd() (+9 more)

### Community 25 - "Record a content-interaction event (accordion/tabs/modal/flow)"
Cohesion: 0.25
Nodes (8): Accordion block renderer, Record a content-interaction event (accordion/tabs/modal/flow), Flow diagram block renderer, Open modal block, Tabs block switch handler, Tabs block renderer, Accordion item toggle, Flow diagram step toggle

### Community 26 - "draft_store.py"
Cohesion: 0.19
Nodes (18): delete_draft(), _headers(), is_internal(), _judul_berkas(), list_drafts(), list_drafts_with_title(), load_draft(), ping() (+10 more)

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
Cohesion: 0.14
Nodes (20): ccCocreation(), ccRawRows(), ccRincian(), barisCatatan(), CommandCenter(), ambilRincian(), bukaCocreation(), bukaCocreationSemua() (+12 more)

### Community 32 - "GraphicStyleSelect.tsx"
Cohesion: 0.15
Nodes (10): GraphicStyleSelect(), hexToRgba(), KIND_LABEL, KINDS, PANEL_STYLE, Props, GRAPHIC_STYLE_PREVIEWS, GraphicStylePreviewSet (+2 more)

### Community 33 - "types.ts"
Cohesion: 0.27
Nodes (11): kebijakanKuisSection(), kebijakanMentah(), modeKuisSection(), BlockColor, DEFAULT_QUIZ_POLICY, KEBIJAKAN_GERBANG, QuizMode, QuizPolicy (+3 more)

### Community 34 - "Ambang "Ditinggal" — 4 Menit"
Cohesion: 0.22
Nodes (9): Ambang "Dibaca" — 238 kata/menit, gagal di bawah 50%, Ambang "Ditinggal" — 4 Menit, Brysbaert (2019) — Reading Research Quarterly Meta-analysis (238 wpm), Chartbeat — User Engagement Tracking Methodology, Dasar Riset (Tahap 8), Flowace (2026) — Keystroke & Mouse Activity Tracking, Google Research (2013) — Eye-mouse Behavior, Huang, White & Buscher — Gaze/Cursor Study (CHI 2012) (+1 more)

### Community 35 - "Learning Recap Popup ('Ringkasan Belajarmu')"
Cohesion: 0.25
Nodes (14): SVG bar chart renderer, Learning Recap Popup ('Ringkasan Belajarmu'), Render the recap bar chart of engagement signals, Close the learner recap popup, HTML-escape a value for the recap popup, Join a list of strings with Indonesian 'dan' conjunction, Build the per-signal narration text builders for recap, Open the learner recap popup, fetching data if needed (+6 more)

### Community 36 - "scormZip.ts"
Cohesion: 0.21
Nodes (15): fetchArticulateZip(), generateHtmlForZip(), blobKeDataUri(), HasilSemat, namaAset(), sematkanGambarDataUri(), urlGambar(), articulateBlocks() (+7 more)

### Community 37 - "icons.svg (SVG sprite sheet)"
Cohesion: 0.62
Nodes (7): bluesky-icon symbol, discord-icon symbol, documentation-icon symbol, github-icon symbol, social-icon symbol (generic profile/star icon), icons.svg (SVG sprite sheet), x-icon symbol (X/Twitter logo)

### Community 38 - "EmojiPicker.tsx"
Cohesion: 0.33
Nodes (3): EmojiPicker(), Props, EMOJI_CATEGORIES

### Community 39 - "build_source_printout.py"
Cohesion: 0.38
Nodes (6): ambil_desain(), id_berkas(), main(), Bangun ulang Template-Modul-Ikram-Source-Code.html dari isi repo saat ini.…, Id jangkar yang stabil - dipakai href sidebar dan id <section>., Kembalikan (kepala, ekor): semuanya sebelum <div class="wrap"> dan blok…

### Community 40 - "Video Progress Tracking"
Cohesion: 0.42
Nodes (10): Video Progress Tracking, Global callback: flush queued YouTube player requests, Replace a YouTube facade with a real tracked IFrame player, Instantiate a YT.Player with tracked state events, Fall back to a plain untracked YouTube iframe, Flush all in-progress video checkpoints and YT samplers, Mark a video block as started, capture its slide, Handle YouTube player state changes for tracking (+2 more)

### Community 41 - "ccPost"
Cohesion: 0.19
Nodes (14): ccBatalkanTanda(), ccDitandai(), ccListLearners(), ccListModules(), ccListSessions(), ccPost(), ccRefleksi(), ccTandaiUji() (+6 more)

### Community 42 - "api/index.py"
Cohesion: 0.33
Nodes (5): includeFiles, maxDuration, crons, functions, api/index.py

### Community 43 - "QuizBuilder"
Cohesion: 0.36
Nodes (7): QuizBuilder(), addQuestion(), autoDistribute(), move(), removeQuestion(), setQuestions(), updateQuestion()

### Community 44 - "post"
Cohesion: 0.12
Nodes (23): post, api_activity_batalkan_tanda(), api_activity_cocreation(), api_activity_ditandai(), api_activity_learners(), api_activity_modules(), api_activity_refleksi(), api_activity_rincian() (+15 more)

### Community 45 - "supabase_setup.sql"
Cohesion: 0.40
Nodes (3): public.modul_drafts_touch, modul_drafts_touch_trigger, public.modul_drafts

### Community 48 - "Aktifkan Rekam Aktivitas Peserta (toggle)"
Cohesion: 0.67
Nodes (3): Cek Kesiapan Sistem Rekam, Aktifkan Rekam Aktivitas Peserta (toggle), Sampul (Tahap 3)

### Community 66 - "index.py"
Cohesion: 0.13
Nodes (21): delete, get, api_cocreation_my_notes(), api_delete_draft(), api_health(), api_keepalive(), api_list_drafts(), api_load_draft() (+13 more)

### Community 67 - "PreviewExport"
Cohesion: 0.26
Nodes (11): generateHtml(), PreviewExport(), catatJudulExport(), doDelete(), doExport(), doExportScorm(), doPreview(), lanjutWalauDaurUlang() (+3 more)

### Community 68 - "Show the reading-speed warning overlay"
Cohesion: 0.40
Nodes (5): Identitas Peserta Lintas Modul, Keandalan Pencatatan Data (Outbox Offline), Peringatan Kecepatan Baca, Sisi Peserta — Yang Dialami Peserta (Tahap 6), Show the reading-speed warning overlay

### Community 69 - "api_extract_pptx"
Cohesion: 0.27
Nodes (10): Import PPTX (Tahap 1), api_extract_pptx(), _storage_creds(), _storage_delete(), _storage_download(), extract(), PPTX -> draft slide JSON. Mirrors the manual extraction process already proven…, _shape_image() (+2 more)

### Community 70 - "PreviewExport.tsx"
Cohesion: 0.17
Nodes (14): copyDraft(), deleteDraft(), listDrafts(), renameDraft(), saveDraft(), doCopy(), doImportJson(), doRename() (+6 more)

### Community 71 - "normalizeModule"
Cohesion: 0.28
Nodes (9): loadDraft(), handleOpenExistingDraft(), NewProjectModal(), handleFile(), openExistingMode(), pickDraft(), doLoad(), setMode() (+1 more)

### Community 72 - "Identity Resolution & NIP Capture"
Cohesion: 0.07
Nodes (42): checkNetwork(), checkScorm(), findAPI(), rows(), setVerdict(), lms-probe/README.md — Uji Koneksi LMS Guide, Render completion status text for active Articulate blocks, Bind Articulate blocks active on the current slide (+34 more)

### Community 73 - "Canvas.tsx"
Cohesion: 0.19
Nodes (9): Props, SlideRow(), Props, Props, Props, DraftSlide, ModuleData, Section (+1 more)

### Community 74 - "CoverForm.tsx"
Cohesion: 0.24
Nodes (11): checkTrackingConfig(), uploadImageToStorage(), BackgroundImageField(), handleUpload(), CoverForm(), Props, DEFAULT_THEME, findThemePresetId() (+3 more)

### Community 75 - "Dev Mode Panel"
Cohesion: 0.33
Nodes (7): Show/hide the progress block per HIDE_PROGRESS, Hide the dev-mode password modal, Dev Mode Panel, Show the dev-mode password modal, Validate dev-mode password and enable dev mode, Toggle developer mode on/off, Dev-mode preview toggle for hidden progress

### Community 76 - "demoSteps.ts"
Cohesion: 0.29
Nodes (7): DemoCaptionEditor(), Props, collectTypes(), DEMO_STEPS, DemoStep, moduleFacts, Block

### Community 77 - "Alat "Cek Rekam Aktivitas""
Cohesion: 0.67
Nodes (3): Alat "Cek Rekam Aktivitas", Command Center — Rekam Aktivitas & Analitik (Tahap 7), Deteksi Otomatis Data Janggal

### Community 78 - "PanduanTabel"
Cohesion: 0.33
Nodes (4): perluTindakLanjut(), PanduanTabel(), pilihTitik(), tt()

### Community 81 - "react"
Cohesion: 0.15
Nodes (18): PanduanCC, PanduanKeputusan, PanduanKolom, panduanLoad(), panduanPost(), panduanSave(), panduanVerify(), BAWAAN (+10 more)

### Community 82 - "extractBlockText"
Cohesion: 0.33
Nodes (6): demoBoothJalan(), remove(), blockSummary(), GridCellPreview(), extractBlockText(), isBlockEmpty()

### Community 83 - "SlidePreview"
Cohesion: 0.53
Nodes (5): SlidePreview(), bawaPopupKeLayar(), gulirKeBlokAktif(), jumpToSlide(), sorotBlokAktif()

### Community 84 - "pembungkusTag"
Cohesion: 0.40
Nodes (4): lanjutkanDaftar(), pembungkusTag(), RichInput(), RichTextarea()

### Community 85 - "SlideBank"
Cohesion: 0.40
Nodes (3): SlideBank(), addToCanvas(), onUpload()

### Community 86 - "deleteArticulate"
Cohesion: 0.67
Nodes (3): deleteArticulate(), ArticulateFields(), pilihFile()

## Ambiguous Edges - Review These
- `Deploy (dua project Vercel)` → `Aturan graphify untuk proyek ini`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **221 isolated node(s):** `History`, `Tab`, `ArticulateInfo`, `CocreationSection`, `CocreationSlide` (+216 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **19 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Deploy (dua project Vercel)` and `Aturan graphify untuk proyek ini`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Template Modul Ikram — Source Code (Full Repo Printout)` connect `draft_store.py` to `App.tsx`, `generator.py`?**
  _High betweenness centrality (0.167) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `GraphicStyleSelect.tsx`, `types.ts`, `EmojiPicker.tsx`, `PreviewExport.tsx`, `PaketExportDialog.tsx`, `Canvas.tsx`, `BlockEditor.tsx`, `App.tsx`, `BlockPreview.tsx`, `CoverForm.tsx`, `demoSteps.ts`, `PanduanTabel.tsx`, `RefleksiPanel.tsx`, `CommandCenter.tsx`, `plugins`?**
  _High betweenness centrality (0.065) - this node is a cross-community bridge._
- **Why does `CommandCenter()` connect `CommandCenter` to `ccPost`, `CommandCenter.tsx`, `PanduanTabel`?**
  _High betweenness centrality (0.024) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `App()` (e.g. with `onKey()` and `demoDariUrl()`) actually correct?**
  _`App()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `History`, `Tab`, `ArticulateInfo` to the rest of the system?**
  _221 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `generator.py` be split into smaller, more focused modules?**
  _Cohesion score 0.05575065847234416 - nodes in this community are weakly interconnected._
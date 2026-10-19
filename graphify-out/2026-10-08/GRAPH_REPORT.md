# Graph Report - Template Modul Ikram  (2026-10-08)

## Corpus Check
- 68 files · ~259,566 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 1160 nodes · 2063 edges · 78 communities (63 shown, 15 thin omitted)
- Extraction: 91% EXTRACTED · 9% INFERRED · 0% AMBIGUOUS · INFERRED: 184 edges (avg confidence: 0.84)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `6eb6520f`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- Navigate to a NAV index, enforcing all gating rules
- PreviewExport
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
- CommandCenter.tsx
- Bedah: SCORM "Penyusunan Sasaran Kinerja Pegawai" (KLC2)
- post
- compilerOptions
- BlockAddMenu.tsx
- hkpd_to_moduledata.mjs
- Knowledge Check Gate
- Render the current NAV item into the viewport
- cek-demo.mjs
- Canvas
- GraphicStyleSelect.tsx
- draft_store.py
- uid
- DtableFields
- plugins
- r2.py
- CommandCenter
- SlidePreview.tsx
- types.ts
- Ambang "Ditinggal" — 4 Menit
- Record a quiz option selection
- scormZip.ts
- icons.svg (SVG sprite sheet)
- EmojiPicker.tsx
- build_source_printout.py
- Video Progress Tracking
- ccPost
- api/index.py
- QuizBuilder
- _check_cc_password
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
- CoverForm.tsx
- pptx_extract.py
- PreviewExport.tsx
- Articulate 360 Block Runtime
- ModuleData
- checkNetwork
- Dev Mode Panel
- SCORM API Wrapper
- PanduanTabel
- Canvas.tsx
- react

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
- `Preview & Export (Tahap 5)` --references--> `generate_html()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/generator.py
- `Import PPTX (Tahap 1)` --references--> `extract()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/pptx_extract.py
- `14 Jenis Blok Konten` --references--> `render_block()`  [INFERRED]
  Panduan-Fitur-Template-Modul-Ikram.html → server/api/generator.py
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

## Communities (78 total, 15 thin omitted)

### Community 0 - "Navigate to a NAV index, enforcing all gating rules"
Cohesion: 0.14
Nodes (24): Peringatan Kecepatan Baca, Group a section's NAV items into singles/bundles/quiz, Handle 'go back and reread' from reading warning, Handle 'proceed anyway' from reading warning, Close the mobile sidebar drawer, Reading-Speed & Idle Detection, Sidebar & Slide Navigation, Navigate to the next NAV item (+16 more)

### Community 1 - "PreviewExport"
Cohesion: 0.18
Nodes (17): generateHtml(), payloadFor(), PreviewExport(), catatJudulExport(), doCopy(), doDelete(), doExport(), doExportScorm() (+9 more)

### Community 2 - "generator.py"
Cohesion: 0.05
Nodes (66): 14 Jenis Blok Konten, Preview & Export (Tahap 5), Susun Modul (Tahap 2), art_entry(), _blok_heading(), build_nav(), _caption_html(), clamp_brightness() (+58 more)

### Community 3 - "Buffer an activity tracking event"
Cohesion: 0.06
Nodes (63): Alat "Cek Rekam Aktivitas", Command Center — Rekam Aktivitas & Analitik (Tahap 7), Deteksi Otomatis Data Janggal, Identitas Peserta Lintas Modul, Keandalan Pencatatan Data (Outbox Offline), Sisi Peserta — Yang Dialami Peserta (Tahap 6), Accordion block renderer, Bind global activity listeners for idle detection (+55 more)

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
Cohesion: 0.07
Nodes (30): demoBoothJalan(), ambilDaftar(), BlockEditor(), remove(), BlockFields(), blockSummary(), detectPngTransparency(), FieldStyle (+22 more)

### Community 10 - "App.tsx"
Cohesion: 0.10
Nodes (21): draftExists(), App(), handleCreateProject(), handleImportJson(), hentikanDemo(), mulaiDemo(), onKey(), AutosaveIndicator() (+13 more)

### Community 11 - "BlockPreview.tsx"
Cohesion: 0.21
Nodes (7): AccordionDemo(), FlowDemo(), LOREM, ModalDemo(), TabsDemo(), useBlinkWithClick(), useCycleWithClick()

### Community 12 - "api.ts"
Cohesion: 0.13
Nodes (20): ArticulateInfo, CocreationSection, CocreationSlide, deleteArticulate(), extractPptx(), r2MediaTersedia(), r2Tersedia(), readArticulateEntry() (+12 more)

### Community 13 - "RefleksiPanel.tsx"
Cohesion: 0.22
Nodes (15): ccRefleksi(), RefleksiJawaban, RefleksiKiriman, jawabanTeks(), Kolom, kolomPoin(), RefleksiPanel(), unduh() (+7 more)

### Community 14 - "compilerOptions"
Cohesion: 0.08
Nodes (23): compilerOptions, allowArbitraryExtensions, allowImportingTsExtensions, erasableSyntaxOnly, jsx, lib, module, moduleDetection (+15 more)

### Community 15 - "CommandCenter.tsx"
Cohesion: 0.09
Nodes (32): ActivityLearner, ActivityModule, ActivitySession, CocreationModule, CocreationNote, PeringatanDetail, VideoDetail, NamaPeserta() (+24 more)

### Community 16 - "Bedah: SCORM "Penyusunan Sasaran Kinerja Pegawai" (KLC2)"
Cohesion: 0.09
Nodes (21): 10. Cara memverifikasi ulang temuan ini, 1. Ringkas teknologi, 2.1 Mesin layar (state machine di root), 2.2 Resume otomatis via localStorage ber-stempel build, 2.3 Struktur konten: slide = komponen React, bukan data, 2.4 Preloader yang mengukur progres nyata, 2. Arsitektur aplikasi, 3. Layar-layar (+13 more)

### Community 17 - "post"
Cohesion: 0.11
Nodes (18): post, api_activity_my_recap(), api_activity_tandai_uji(), api_cocreation_my_notes(), api_generate(), api_r2_delete_url(), api_r2_download_url(), api_r2_media_upload_url() (+10 more)

### Community 18 - "compilerOptions"
Cohesion: 0.10
Nodes (19): compilerOptions, allowImportingTsExtensions, erasableSyntaxOnly, lib, module, moduleDetection, noEmit, noFallthroughCasesInSwitch (+11 more)

### Community 19 - "BlockAddMenu.tsx"
Cohesion: 0.17
Nodes (7): BLOCK_LABELS, BLOCK_TYPES, BlockAddMenu(), Props, BLOCK_PREVIEW_STYLES, BlockPreviewCard(), BlockType

### Community 20 - "hkpd_to_moduledata.mjs"
Cohesion: 0.16
Nodes (17): blockTypes, CALLOUT_VARIANT, decodeEntities(), htmlField(), [inFile, outFile], mapBlock(), mapKnowledgeCheck(), moduleData (+9 more)

### Community 21 - "Knowledge Check Gate"
Cohesion: 0.45
Nodes (11): Knowledge Check Gate, Check whether all Knowledge Check items on a slide are answered, Record a Knowledge Check answer, handle retry-until-correct, Apply the final locked result state for a KC question, Find a Knowledge Check question by block/index, Mark one KC option button as tried-and-wrong, Open the Knowledge Check popup for a slide, Restore prior wrong KC attempts on popup reopen (+3 more)

### Community 22 - "Render the current NAV item into the viewport"
Cohesion: 0.24
Nodes (14): Inject/play per-slide voiceover audio, Section Quiz Checkpoint, Check whether a section's quiz has been passed, Compute correct-answer count for a section's quiz, Render the current NAV item into the viewport, Render the top breadcrumb for the current item, Render the cover/hero slide HTML, Render a section quiz checkpoint slide (+6 more)

### Community 23 - "cek-demo.mjs"
Cohesion: 0.27
Nodes (15): AKAR, ambangIdleSamaDiDuaMesin(), baca(), captionTidakDitulisDuaKali(), F, gagal(), kaitDataDemoTerpasang(), kaitTemaTerpasang() (+7 more)

### Community 24 - "Canvas"
Cohesion: 0.15
Nodes (17): Canvas(), addBundle(), bukaSlideNomor(), bundlesFor(), gulirKeBaris(), onDragEnd(), removeBundle(), removeSlide() (+9 more)

### Community 25 - "GraphicStyleSelect.tsx"
Cohesion: 0.15
Nodes (10): GraphicStyleSelect(), hexToRgba(), KIND_LABEL, KINDS, PANEL_STYLE, Props, GRAPHIC_STYLE_PREVIEWS, GraphicStylePreviewSet (+2 more)

### Community 26 - "draft_store.py"
Cohesion: 0.19
Nodes (18): delete_draft(), _headers(), is_internal(), _judul_berkas(), list_drafts(), list_drafts_with_title(), load_draft(), ping() (+10 more)

### Community 27 - "uid"
Cohesion: 0.20
Nodes (14): add(), changeType(), toggleCollapse(), ReflectionFields(), geser(), patch(), setItems(), addBlankSlide() (+6 more)

### Community 29 - "plugins"
Cohesion: 0.22
Nodes (8): plugins, rules, react/only-export-components, react/rules-of-hooks, $schema, oxc, typescript, warn

### Community 30 - "r2.py"
Cohesion: 0.20
Nodes (13): _creds(), is_configured(), media_is_configured(), media_public_url(), presign(), _quote(), Cloudflare R2 — penanda tangan URL (presigned URL) buat paket Articulate.…, Apakah kredensial R2 lengkap terpasang di environment backend? Dipakai frontend… (+5 more)

### Community 31 - "CommandCenter"
Cohesion: 0.14
Nodes (20): ccCocreation(), ccRawRows(), ccRincian(), barisCatatan(), CommandCenter(), ambilRincian(), bukaCocreation(), bukaCocreationSemua() (+12 more)

### Community 32 - "SlidePreview.tsx"
Cohesion: 0.33
Nodes (7): langgananBlokAktif(), Props, SlidePreview(), bawaPopupKeLayar(), gulirKeBlokAktif(), jumpToSlide(), sorotBlokAktif()

### Community 33 - "types.ts"
Cohesion: 0.19
Nodes (15): Props, kebijakanKuisSection(), kebijakanMentah(), modeKuisSection(), BlockColor, DEFAULT_QUIZ_POLICY, KcQuestion, KEBIJAKAN_GERBANG (+7 more)

### Community 34 - "Ambang "Ditinggal" — 4 Menit"
Cohesion: 0.22
Nodes (9): Ambang "Dibaca" — 238 kata/menit, gagal di bawah 50%, Ambang "Ditinggal" — 4 Menit, Brysbaert (2019) — Reading Research Quarterly Meta-analysis (238 wpm), Chartbeat — User Engagement Tracking Methodology, Dasar Riset (Tahap 8), Flowace (2026) — Keystroke & Mouse Activity Tracking, Google Research (2013) — Eye-mouse Behavior, Huang, White & Buscher — Gaze/Cursor Study (CHI 2012) (+1 more)

### Community 35 - "Record a quiz option selection"
Cohesion: 0.52
Nodes (7): Get or create the shared Web Audio context, Schedule a single oscillator tone, Record a quiz option selection, Play the correct-answer chime, Play the quiz-failed tone, Play the quiz-passed fanfare, Play the wrong-answer chime

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
Cohesion: 0.21
Nodes (13): ccBatalkanTanda(), ccDitandai(), ccListLearners(), ccListModules(), ccListSessions(), ccPost(), ccTandaiUji(), batalkanTandaUji() (+5 more)

### Community 42 - "api/index.py"
Cohesion: 0.33
Nodes (5): includeFiles, maxDuration, crons, functions, api/index.py

### Community 43 - "QuizBuilder"
Cohesion: 0.36
Nodes (7): QuizBuilder(), addQuestion(), autoDistribute(), move(), removeQuestion(), setQuestions(), updateQuestion()

### Community 44 - "_check_cc_password"
Cohesion: 0.11
Nodes (18): api_activity_batalkan_tanda(), api_activity_cocreation(), api_activity_ditandai(), api_activity_learners(), api_activity_modules(), api_activity_refleksi(), api_activity_rincian(), api_activity_rows() (+10 more)

### Community 45 - "supabase_setup.sql"
Cohesion: 0.40
Nodes (3): public.modul_drafts_touch, modul_drafts_touch_trigger, public.modul_drafts

### Community 48 - "Aktifkan Rekam Aktivitas Peserta (toggle)"
Cohesion: 0.67
Nodes (3): Cek Kesiapan Sistem Rekam, Aktifkan Rekam Aktivitas Peserta (toggle), Sampul (Tahap 3)

### Community 66 - "index.py"
Cohesion: 0.15
Nodes (21): delete, get, api_delete_draft(), api_extract_pptx(), api_health(), api_keepalive(), api_list_drafts(), api_load_draft() (+13 more)

### Community 68 - "CoverForm.tsx"
Cohesion: 0.24
Nodes (11): checkTrackingConfig(), uploadImageToStorage(), BackgroundImageField(), handleUpload(), CoverForm(), Props, DEFAULT_THEME, findThemePresetId() (+3 more)

### Community 69 - "pptx_extract.py"
Cohesion: 0.43
Nodes (6): Import PPTX (Tahap 1), extract(), PPTX -> draft slide JSON. Mirrors the manual extraction process already proven…, _shape_image(), _shape_table(), _shape_text()

### Community 71 - "PreviewExport.tsx"
Cohesion: 0.15
Nodes (18): copyDraft(), deleteDraft(), listDrafts(), loadDraft(), renameDraft(), saveDraft(), handleOpenExistingDraft(), NewProjectModal() (+10 more)

### Community 72 - "Articulate 360 Block Runtime"
Cohesion: 0.32
Nodes (13): Render completion status text for active Articulate blocks, Bind Articulate blocks active on the current slide, Toggle fullscreen for an Articulate iframe block, Load an Articulate block's stored CMI data, Build a fake SCORM 1.2/2004 API shim for embedded Articulate content, Articulate shim LMSGetValue/GetValue implementation, Articulate shim LMSSetValue/SetValue implementation, Mark an Articulate block as completed (+5 more)

### Community 73 - "ModuleData"
Cohesion: 0.24
Nodes (10): DemoCaptionEditor(), Props, Props, collectTypes(), DEMO_STEPS, DemoStep, moduleFacts, DraftSlide (+2 more)

### Community 74 - "checkNetwork"
Cohesion: 0.29
Nodes (6): checkNetwork(), checkScorm(), findAPI(), rows(), setVerdict(), lms-probe/README.md — Uji Koneksi LMS Guide

### Community 75 - "Dev Mode Panel"
Cohesion: 0.33
Nodes (7): Show/hide the progress block per HIDE_PROGRESS, Hide the dev-mode password modal, Dev Mode Panel, Show the dev-mode password modal, Validate dev-mode password and enable dev mode, Toggle developer mode on/off, Dev-mode preview toggle for hidden progress

### Community 76 - "SCORM API Wrapper"
Cohesion: 0.32
Nodes (8): SCORM API Wrapper, Load learner progress state from SCORM or localStorage, SCORM LMSCommit/Commit wrapper, Walk window/parent chain to find SCORM API, SCORM LMSFinish/Terminate wrapper, Resolve SCORM API via window or opener, Initialize SCORM session, SCORM LMSSetValue/SetValue wrapper

### Community 77 - "PanduanTabel"
Cohesion: 0.33
Nodes (4): perluTindakLanjut(), PanduanTabel(), pilihTitik(), tt()

### Community 78 - "Canvas.tsx"
Cohesion: 0.22
Nodes (6): uploadMediaToStorage(), VideoUploadField(), Props, SlideAudioField(), SlideRow(), Section

### Community 81 - "react"
Cohesion: 0.15
Nodes (18): PanduanCC, PanduanKeputusan, PanduanKolom, panduanLoad(), panduanPost(), panduanSave(), panduanVerify(), BAWAAN (+10 more)

## Ambiguous Edges - Review These
- `Deploy (dua project Vercel)` → `Aturan graphify untuk proyek ini`  [AMBIGUOUS]
  CLAUDE.md · relation: conceptually_related_to

## Knowledge Gaps
- **217 isolated node(s):** `LOREM`, `History`, `Tab`, `ArticulateInfo`, `CocreationSection` (+212 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **15 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What is the exact relationship between `Deploy (dua project Vercel)` and `Aturan graphify untuk proyek ini`?**
  _Edge tagged AMBIGUOUS (relation: conceptually_related_to) - confidence is low._
- **Why does `Template Modul Ikram — Source Code (Full Repo Printout)` connect `draft_store.py` to `App.tsx`, `generator.py`?**
  _High betweenness centrality (0.153) - this node is a cross-community bridge._
- **Why does `react` connect `react` to `SlidePreview.tsx`, `types.ts`, `CoverForm.tsx`, `EmojiPicker.tsx`, `PreviewExport.tsx`, `PaketExportDialog.tsx`, `BlockEditor.tsx`, `App.tsx`, `BlockPreview.tsx`, `ModuleData`, `RefleksiPanel.tsx`, `Canvas.tsx`, `CommandCenter.tsx`, `BlockAddMenu.tsx`, `GraphicStyleSelect.tsx`, `plugins`?**
  _High betweenness centrality (0.047) - this node is a cross-community bridge._
- **Why does `14 Jenis Blok Konten` connect `generator.py` to `BlockEditor.tsx`?**
  _High betweenness centrality (0.027) - this node is a cross-community bridge._
- **Are the 4 inferred relationships involving `App()` (e.g. with `onKey()` and `demoDariUrl()`) actually correct?**
  _`App()` has 4 INFERRED edges - model-reasoned connections that need verification._
- **What connects `LOREM`, `History`, `Tab` to the rest of the system?**
  _217 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Navigate to a NAV index, enforcing all gating rules` be split into smaller, more focused modules?**
  _Cohesion score 0.14130434782608695 - nodes in this community are weakly interconnected._
/* Pemotret hasil jadi karya tim + sisi peserta untuk video promosi (bukan bagian aplikasi).
 *   node video-promosi/alat/ambil-karya.mjs <folder-render> <folder-articulate> [--hanya=karya-tab,...]
 * <folder-render> berisi HTML modul hasil /api/generate (rekam aktivitas dimatikan) + _karya.json
 * (peta: nama -> {file, slide, blok}). Edge tanpa kepala harus sudah jalan di port 9333.
 * Keluaran: video-promosi/aset/<nama>.jpg (2049 × 1152) + entri di aset/posisi.json. */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const DIR = path.dirname(url.fileURLToPath(import.meta.url));
const TUJUAN = path.join(DIR, '..', 'aset');
const [RD, AD] = process.argv.slice(2);
const HANYA = (process.argv.find((a) => a.startsWith('--hanya=')) || '').slice(8).split(',').filter(Boolean);
const K = JSON.parse(fs.readFileSync(path.join(RD, '_karya.json'), 'utf8'));
const tunda = (ms) => new Promise((r) => setTimeout(r, ms));

const l = await (await fetch('http://127.0.0.1:9333/json')).json();
const pg = l.find((x) => x.type === 'page' && !x.url.includes('extension'));
const ws = new WebSocket(pg.webSocketDebuggerUrl); await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const tg = new Map();
const kirim = (method, params = {}) => new Promise((r) => { const i = ++id; tg.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
ws.addEventListener('message', (m) => { const d = JSON.parse(m.data); if (d.id && tg.has(d.id)) { tg.get(d.id)(d); tg.delete(d.id); } });
await kirim('Page.enable');
await kirim('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1.5, mobile: false });

const BANTU = `
const w=ms=>new Promise(r=>setTimeout(r,ms));
const R=e=>{if(!e)return null;const b=e.getBoundingClientRect();return {x:+b.left.toFixed(1),y:+b.top.toFixed(1),w:+b.width.toFixed(1),h:+b.height.toFixed(1)}};
const B=id=>document.querySelector('[data-blok="'+id+'"]');
const keSlide=async n=>{try{devMode=true}catch(e){} const i=NAV.findIndex(x=>x.kind==='slide'&&x.num===n); goTo(i); await w(1800); return i;};
const tengahkan=async(e,y)=>{ if(!e)return; e.scrollIntoView({block:'start'}); await w(300); let s=e.parentElement; while(s&&!(s.scrollHeight>s.clientHeight+20&&/auto|scroll/.test(getComputedStyle(s).overflowY)))s=s.parentElement; if(s){s.scrollTop-= (y==null?150:y); } await w(900); };
const rapikan=()=>{document.querySelectorAll('*').forEach(e=>{if(e.children.length===0&&e.textContent.trim()==='Dev Mode')e.style.visibility='hidden'})};
`;
async function ev(js) {
  const r = await kirim('Runtime.evaluate', { expression: `(async()=>{${BANTU}\n${js}})()`, awaitPromise: true, returnByValue: true });
  if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description || 'galat');
  return r.result?.result?.value;
}
const posisi = fs.existsSync(path.join(TUJUAN, 'posisi.json')) ? JSON.parse(fs.readFileSync(path.join(TUJUAN, 'posisi.json'), 'utf8')) : {};
async function foto(nama, catat) {
  await ev('rapikan();return 1');
  if (catat) posisi[nama] = await ev(catat);
  const s = await kirim('Page.captureScreenshot', { format: 'jpeg', quality: 90 });
  fs.writeFileSync(path.join(TUJUAN, nama + '.jpg'), Buffer.from(s.result.data, 'base64'));
  fs.writeFileSync(path.join(TUJUAN, 'posisi.json'), JSON.stringify(posisi, null, 1));
  console.log('✓', nama);
}
const perlu = (n) => !HANYA.length || HANYA.some((h) => n.startsWith(h));
async function buka(k) { await kirim('Page.navigate', { url: url.pathToFileURL(path.join(RD, k.file)).href }); await tunda(3500); }

if (perlu('karya-akordeon')) {
  const k = K.akordeon; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),170);return 1`);
  const c = `const b=B('${k.blok}');return {blok:R(b), kepala:[...b.querySelectorAll('.acc-head')].map(R)}`;
  await foto('karya-akordeon-1', c);
  await ev(`B('${k.blok}').querySelector('.acc-head').click();await w(1200);return 1`);
  await foto('karya-akordeon-2', c);
}
if (perlu('karya-tab')) {
  const k = K.tab; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),200);return 1`);
  const c = `const b=B('${k.blok}');return {blok:R(b), tab:[...b.querySelectorAll('.tab-btn')].map(R)}`;
  await foto('karya-tab-1', c);
  for (const i of [1, 2]) { await ev(`B('${k.blok}').querySelectorAll('.tab-btn')[${i}].click();await w(900);return 1`); await foto('karya-tab-' + (i + 1), c); }
}
if (perlu('karya-alur')) {
  const k = K.alur; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),230);return 1`);
  const c = `const b=B('${k.blok}');return {blok:R(b), langkah:[...b.querySelectorAll('.flow-step')].map(R), detail:R(b.querySelector('.flow-detail'))}`;
  await foto('karya-alur-1', c);
  await ev(`B('${k.blok}').querySelectorAll('.flow-step')[1].click();await w(1000);return 1`);
  await foto('karya-alur-2', c);
}
if (perlu('karya-popup')) {
  const k = K.popup; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),420);return 1`);
  await foto('karya-popup-1', `const b=B('${k.blok}');return {pemicu:R(b.matches('.modal-trigger')?b:b.querySelector('.modal-trigger')||b)}`);
  await ev(`const b=B('${k.blok}');(b.matches('.modal-trigger')?b:b.querySelector('.modal-trigger')||b).click();await w(1300);return 1`);
  await foto('karya-popup-2', `const m=[...document.querySelectorAll('.modal-box')].find(e=>e.offsetParent!==null);return {kotak:R(m)}`);
}
if (perlu('karya-video')) {
  const k = K.video; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),170);return 1`);
  const c = `const v=B('${k.blok}');return {video:R(v)}`;
  await foto('karya-video-1', c);
  await ev(`const v=B('${k.blok}');const e=v.tagName==='VIDEO'?v:v.querySelector('video');e.muted=true;await e.play();await w(5000);e.pause();await w(300);return e.currentTime`);
  await foto('karya-video-2', c);
}
if (perlu('karya-kc')) {
  const k = K.kc; await buka(k);
  await ev(`const i=await keSlide(${k.slide});devMode=false;goTo(i+1);await w(1500);return 1`);
  const c = `const p=document.querySelector('#kc-popup-overlay .kc-popup-panel');return {panel:R(p), opsi:[...p.querySelectorAll('.kc-opt')].map(R)}`;
  await foto('karya-kc-1', c);
  await ev(`const o=[...document.querySelectorAll('#kc-popup-overlay .kc-opt')];(o.find(x=>x.textContent.includes('memenuhi persyaratan'))||o[2]).click();await w(1500);return 1`);
  await foto('karya-kc-2', c);
}
if (perlu('karya-articulate')) {
  const k = K.articulate; await buka(k);
  const story = url.pathToFileURL(path.join(AD, 'story.html')).href;
  /* Isi Articulate hanya hidup di paket SCORM; bingkainya disusun persis seperti keluaran
     generator untuk paket SCORM (render_articulate), lalu diisi paket asli yang diekstrak. */
  await ev(`await keSlide(${k.slide});const b=B('${k.blok}');b.innerHTML='<div class="art-frame" style="padding-bottom:56.25%;height:0;"><iframe class="art-iframe" src="${story}" title="Konten Articulate" allow="autoplay; fullscreen"></iframe></div><div class="art-bar"><span class="art-status">Belum selesai</span><button type="button" class="art-full">&#9974; Layar penuh</button></div>';await tengahkan(b,120);return 1`);
  await tunda(7000);
  const c = `return {blok:R(B('${k.blok}')), frame:R(B('${k.blok}').querySelector('.art-frame'))}`;
  await foto('karya-articulate-1', c);
  await kirim('Input.dispatchMouseEvent', { type: 'mousePressed', x: 683, y: 420, button: 'left', clickCount: 1 });
  await kirim('Input.dispatchMouseEvent', { type: 'mouseReleased', x: 683, y: 420, button: 'left', clickCount: 1 });
  await tunda(7000);
  await foto('karya-articulate-2', c);
}
if (perlu('karya-html')) {
  const k = K.html; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),150);await w(2500);return 1`);
  const c = `return {blok:R(B('${k.blok}'))}`;
  await foto('karya-html-1', c);
  await ev(`const d=B('${k.blok}').contentDocument||document.querySelector('iframe.peta-materi').contentDocument;d.querySelector('#btnEnter').click();await w(1800);return 1`);
  await foto('karya-html-2', c);
  await ev(`const d=document.querySelector('iframe.peta-materi').contentDocument;d.scrollingElement.scrollBy(0,260);await w(600);d.querySelector('#stop-1 .stop-card').click();await w(1900);return 1`);
  await foto('karya-html-3', c);
}
if (perlu('karya-refleksi')) {
  const k = K.refleksi; await buka(k);
  await ev(`await keSlide(${k.slide});await tengahkan(B('${k.blok}'),0);await w(2000);return 1`);
  await foto('karya-refleksi-1', `return {blok:R(B('${k.blok}'))}`);
  const panel = `[...B('${k.blok}').querySelectorAll('.refl-panel:not(.refl-opening)')]`;
  await ev(`const p=${panel}[2];p.scrollIntoView({block:'center'});await w(2500);return 1`);
  const c = `const p=${panel}[2];return {panel:R(p.querySelector('.refl-card')||p), opsi:[...p.querySelectorAll('.refl-opt')].map(R), isian:R(p.querySelector('textarea'))}`;
  await foto('karya-refleksi-2', c);
  await ev(`const p=${panel}[2];const o=[...p.querySelectorAll('.refl-opt')];for(const t of ['realisasi stagnan','piutang meningkat']){const x=o.find(e=>e.textContent.includes(t));if(x){x.click();await w(500);}}await w(700);return 1`);
  await foto('karya-refleksi-3', c);
  await ev(`const p=${panel}[3]||${panel}[2];p.scrollIntoView({block:'center'});await w(2200);const t=p.querySelector('textarea');if(t){t.focus();t.value='Data antar OPD belum sinkron, jadi target sulit dipantau.';t.dispatchEvent(new Event('input',{bubbles:true}));}await w(800);return 1`);
  await foto('karya-refleksi-4', `const p=${panel}[3]||${panel}[2];return {panel:R(p.querySelector('.refl-card')||p), isian:R(p.querySelector('textarea'))}`);
}
if (perlu('peserta')) {
  await buka(K.salma);
  await ev(`const i=NAV.findIndex(x=>x.kind==='slide'&&/Jangka Waktu Pemeriksaan Pajak Saat Ini/.test(JSON.stringify(x)));try{devMode=true}catch(e){} goTo(i>0?i:5);await w(2500);return i`);
  await foto('peserta-slide', `return {utama:R(document.querySelector('main')||document.body)}`);
  await ev(`openReadingWarning((NAV.find(x=>x.kind==='slide')||{}).section,[]);await w(1200);return 1`);
  await foto('peserta-peringatan', `const p=document.querySelector('#reading-warning-overlay .idn-panel');return {panel:R(p), kalimat:R(p.querySelector('p')), yakin:R(p.querySelectorAll('button')[0]), kembali:R(p.querySelectorAll('button')[1])}`);
}
console.log('selesai');
ws.close();

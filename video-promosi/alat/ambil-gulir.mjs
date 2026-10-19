/* Memotret blok Refleksi (karya Riko Febrialdo) sambil DIGULIR sedikit demi sedikit, supaya
 * latar parallax-nya kelihatan bergerak di video: sampul → poin 3, lalu (setelah dua pilihan dicentang) poin 3 → poin 4.
 *   node video-promosi/alat/ambil-gulir.mjs <folder-render>     (Edge tanpa kepala di port 9333)
 * <folder-render>/_karya.json memuat {refleksi:{file, slide, blok}} — sama dengan ambil-karya.mjs.
 * Keluaran: aset/gulir-a-NN.jpg (sampul → poin 3) dan aset/gulir-b-NN.jpg (poin 3 → poin 4). */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const DIR = path.dirname(url.fileURLToPath(import.meta.url));
const TUJUAN = path.join(DIR, '..', 'aset');
const RD = process.argv[2];
const K = JSON.parse(fs.readFileSync(path.join(RD, '_karya.json'), 'utf8')).refleksi;
const LANGKAH_A = 18, LANGKAH_B = 7;
const tunda = (ms) => new Promise((r) => setTimeout(r, ms));

const l = await (await fetch('http://127.0.0.1:9333/json')).json();
const pg = l.find((x) => x.type === 'page' && !x.url.includes('extension'));
const ws = new WebSocket(pg.webSocketDebuggerUrl); await new Promise((r) => ws.addEventListener('open', r));
let id = 0; const tg = new Map();
ws.addEventListener('message', (m) => { const d = JSON.parse(m.data); if (d.id && tg.has(d.id)) { tg.get(d.id)(d); tg.delete(d.id); } });
const kirim = (method, params = {}) => new Promise((r) => { const i = ++id; tg.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (js) => { const r = await kirim('Runtime.evaluate', { expression: `(async()=>{const w=ms=>new Promise(r=>setTimeout(r,ms));const B=document.querySelector('[data-blok="${K.blok}"]');
  const S=(()=>{let s=B.parentElement;while(s&&!(s.scrollHeight>s.clientHeight+20&&/auto|scroll/.test(getComputedStyle(s).overflowY)))s=s.parentElement;return s})();
  const panel=[...B.querySelectorAll('.refl-panel:not(.refl-opening)')];
  document.querySelectorAll('*').forEach(e=>{if(e.children.length===0&&e.textContent.trim()==='Dev Mode')e.style.visibility='hidden'});
  ${js}})()`, awaitPromise: true, returnByValue: true }); if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description); return r.result?.result?.value; };
const foto = async (n) => { const s = await kirim('Page.captureScreenshot', { format: 'jpeg', quality: 86 }); fs.writeFileSync(path.join(TUJUAN, n + '.jpg'), Buffer.from(s.result.data, 'base64')); };
const halus = (t) => (t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2);   /* gulir dipercepat lalu diperlambat */

await kirim('Page.enable');
await kirim('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1.5, mobile: false });
await kirim('Page.navigate', { url: url.pathToFileURL(path.join(RD, K.file)).href }); await tunda(3500);
await ev(`try{devMode=true}catch(e){} goTo(NAV.findIndex(x=>x.kind==='slide'&&x.num===${K.slide})); await w(1800); return 1`);
/* posisi awal = sama dengan foto karya-refleksi-1; posisi akhir A = poin 3 di tengah (karya-refleksi-2) */
const pos = await ev(`B.scrollIntoView({block:'start'}); await w(300); S.scrollTop-=0; await w(1500); const a=S.scrollTop;
  panel[2].scrollIntoView({block:'center'}); await w(400); const b=S.scrollTop; panel[3].scrollIntoView({block:'center'}); await w(400); const c=S.scrollTop;
  S.scrollTop=a; await w(1500); return [a,b,c]`);
console.log('posisi gulir', pos);
async function gulir(dari, ke, n, awalan) {
  for (let i = 0; i <= n; i++) {
    const y = dari + (ke - dari) * halus(i / n);
    await ev(`S.scrollTop=${y}; S.dispatchEvent(new Event('scroll')); await w(260); return 1`);
    await foto(awalan + String(i).padStart(2, '0'));
  }
  console.log('✓', awalan, n + 1, 'bingkai');
}
await gulir(pos[0], pos[1], LANGKAH_A, 'gulir-a-');
await ev(`const o=[...panel[2].querySelectorAll('.refl-opt')];for(const t of ['realisasi stagnan','piutang meningkat']){const x=o.find(e=>e.textContent.includes(t));if(x){x.click();await w(400);}}await w(600);return 1`);
await gulir(pos[1], pos[2], LANGKAH_B, 'gulir-b-');
ws.close();

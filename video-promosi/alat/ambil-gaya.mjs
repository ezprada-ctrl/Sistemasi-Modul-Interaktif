/* Memotret pemilih "Gaya Grafis" (tab Tema) saat kursor singgah di tiap gaya: pratinjau
 * Sampul / slide / Penutup langsung muncul sebelum gaya dipilih.
 *   node video-promosi/alat/ambil-gaya.mjs     (Edge tanpa kepala di port 9333)
 * Penyimpanan draft diblokir selama memotret, sama seperti ambil-aset.mjs. */
import fs from 'node:fs';
import path from 'node:path';
import url from 'node:url';

const DIR = path.dirname(url.fileURLToPath(import.meta.url));
const TUJUAN = path.join(DIR, '..', 'aset');
const SLUG = 'salma_materi-1-salma-mt10fhuz-3';
const JENIS = ['accordion', 'tabs', 'flow', 'modal'];
const BINGKAI = 4, SELANG = 550;
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
await kirim('Page.enable');
await kirim('Fetch.enable', { patterns: [{ urlPattern: '*', requestStage: 'Request' }] });
await kirim('Emulation.setDeviceMetricsOverride', { width: 1366, height: 768, deviceScaleFactor: 1.5, mobile: false });
const BANTU = `const w=ms=>new Promise(r=>setTimeout(r,ms));const T=(t,s)=>[...document.querySelectorAll(s||'button')].find(e=>e.textContent.trim()===t);
const TM=(t,s)=>[...document.querySelectorAll(s||'*')].filter(e=>e.textContent.includes(t)&&e.offsetParent!==null).sort((a,b)=>a.textContent.length-b.textContent.length)[0];
const R=e=>{if(!e)return null;const b=e.getBoundingClientRect();return {x:+b.left.toFixed(1),y:+b.top.toFixed(1),w:+b.width.toFixed(1),h:+b.height.toFixed(1)}};
const naik=(e,m)=>{while(e&&e.getBoundingClientRect().width<m)e=e.parentElement;return e};
document.querySelectorAll('span,code,div').forEach(e=>{if(e.children.length===0&&e.textContent.includes('${SLUG}'))e.textContent=e.textContent.replace('${SLUG}','modul-pemeriksaan-pajak')});`;
const ev = async (js) => { const r = await kirim('Runtime.evaluate', { expression: `(async()=>{${BANTU}\n${js}})()`, awaitPromise: true, returnByValue: true }); if (r.result?.exceptionDetails) throw new Error(r.result.exceptionDetails.exception?.description); return r.result?.result?.value; };
const foto = async (n) => { const s = await kirim('Page.captureScreenshot', { format: 'jpeg', quality: 90 }); fs.writeFileSync(path.join(TUJUAN, n + '.jpg'), Buffer.from(s.result.data, 'base64')); console.log('✓', n); };
const posisi = JSON.parse(fs.readFileSync(path.join(TUJUAN, 'posisi.json'), 'utf8'));

await kirim('Page.navigate', { url: 'https://template-modul-html-frontend.vercel.app/' }); await tunda(4000);
await ev(`localStorage.setItem('modul-builder-last-slug','${SLUG}');localStorage.setItem('modul-builder-theme','light');localStorage.setItem('modul-builder-last-tab','cover');location.reload();return 1`);
await tunda(9000);
await ev(`document.querySelector('[data-demo=tab-cover]').click();await w(1500);const t=document.querySelector('[data-demo=graphic-style]');window.scrollBy(0,t.getBoundingClientRect().top-200);await w(800);t.click();await w(1200);return 1`);
await foto('gaya-buka');
posisi['gaya-buka'] = await ev(`return {pemicu:R(document.querySelector('[data-demo=graphic-style]')), daftar:R(document.querySelector('[data-demo=graphic-style-list]')), opsi:[...document.querySelectorAll('[data-demo=graphic-style-opt]')].map(e=>({t:e.textContent.trim(),r:R(e)}))}`);
const opsi = posisi['gaya-buka'].opsi.filter((o) => !/Tanpa/.test(o.t));
for (let i = 0; i < opsi.length; i++) {
  const r = opsi[i].r;
  await kirim('Input.dispatchMouseEvent', { type: 'mouseMoved', x: r.x + 50, y: r.y + r.h / 2 });
  await tunda(1400);
  await foto('gaya-' + String(i + 1).padStart(2, '0'));
}
console.log(opsi.map((o) => o.t));
fs.writeFileSync(path.join(TUJUAN, 'posisi.json'), JSON.stringify(posisi, null, 1));
await kirim('Input.dispatchMouseEvent', { type: 'mouseMoved', x: 5, y: 5 });
ws.close();

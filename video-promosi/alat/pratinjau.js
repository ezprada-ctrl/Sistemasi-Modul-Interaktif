/* Memotret bingkai video pada detik tertentu (pemeriksaan): node alat/pratinjau.js 6.8 13 22.9 ... -> pratinjau/t-<detik>.jpg */
'use strict';
const fs = require('node:fs'), os = require('node:os'), path = require('node:path'), cp = require('node:child_process'), url = require('node:url');
const PORT = 9800 + Math.floor(Math.random() * 100), tunda = (ms) => new Promise((r) => setTimeout(r, ms));
const exe = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p));
(async () => {
  const profil = fs.mkdtempSync(path.join(os.tmpdir(), 'vid-'));
  const pr = cp.spawn(exe, ['--headless=new', '--hide-scrollbars', '--autoplay-policy=no-user-gesture-required', '--remote-debugging-port=' + PORT, '--user-data-dir=' + profil, 'about:blank'], { stdio: 'ignore' });
  let wsu; for (let i = 0; i < 60 && !wsu; i++) { try { wsu = (await (await fetch('http://127.0.0.1:' + PORT + '/json')).json()).find((t) => t.type === 'page').webSocketDebuggerUrl; } catch (e) { await tunda(250); } }
  const ws = new WebSocket(wsu); await new Promise((r) => (ws.onopen = r));
  let n = 0; const tunggu = {}; ws.onmessage = (e) => { const m = JSON.parse(e.data); if (m.id && tunggu[m.id]) { tunggu[m.id](m); delete tunggu[m.id]; } };
  const kirim = (method, params) => new Promise((r) => { const id = ++n; tunggu[id] = r; ws.send(JSON.stringify({ id, method, params: params || {} })); });
  await kirim('Emulation.setDeviceMetricsOverride', { width: 1920, height: 1080, deviceScaleFactor: 1, mobile: false });
  await kirim('Page.navigate', { url: url.pathToFileURL(path.join(__dirname, '..', process.env.HALAMAN || 'index.html')).href }); await tunda(3500);
  await kirim('Runtime.evaluate', { expression: "document.getElementById('mulai').hidden=true;document.getElementById('kontrol').style.display='none';document.fonts.ready.then(()=>1)", awaitPromise: true });
  const err = await kirim('Runtime.evaluate', { expression: 'typeof window.__tl', returnByValue: true }); console.log('tl:', err.result.result.value);
  fs.mkdirSync(path.join(__dirname, '..', 'pratinjau'), { recursive: true });
  for (const t of process.argv.slice(2)) {
    await kirim('Runtime.evaluate', { expression: 'window.__tl.seek(' + t + ', true); window.__vidSeek && window.__vidSeek(); 1' }); await tunda(1500);
    const g = await kirim('Page.captureScreenshot', { format: 'jpeg', quality: 80 });
    fs.writeFileSync(path.join(__dirname, '..', 'pratinjau', 't-' + t + '.jpg'), Buffer.from(g.result.data, 'base64'));
  }
  ws.close(); pr.kill(); await tunda(400); try { fs.rmSync(profil, { recursive: true, force: true }); } catch (e) {}
})();

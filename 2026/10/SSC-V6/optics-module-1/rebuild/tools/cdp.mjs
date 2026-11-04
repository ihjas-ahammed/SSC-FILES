// usage: node cdp.mjs <url> <width> <height> <actions.json>
// actions: [{eval:"js"}, {wait:ms}, {shot:"file.png"}, {log:"js expr"}]
import { spawn } from 'node:child_process';
import fs from 'node:fs';
const [url, W, H, actFile] = process.argv.slice(2);
const acts = JSON.parse(fs.readFileSync(actFile, 'utf8'));
const port = 9300 + Math.floor(Math.random() * 500);
const dir = fs.mkdtempSync('/tmp/claude-1000/-home-ihjas-Documents-GitHub-SSC-FILES-SSC-V6/7cad0d5c-6397-4674-8ee1-0c66630397fe/scratchpad/chr-');
const chrome = spawn('google-chrome-stable', ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=' + port, '--user-data-dir=' + dir, '--hide-scrollbars', 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws, id = 0; const pend = {}; const logs = [];
async function connect() {
  for (let i = 0; i < 80; i++) {
    try {
      const r = await fetch('http://127.0.0.1:' + port + '/json'); const t = await r.json();
      const pg = t.find((x) => x.type === 'page'); if (pg) return pg.webSocketDebuggerUrl;
    } catch (e) {}
    await sleep(150);
  }
  throw new Error('no chrome');
}
function send(method, params = {}) {
  return new Promise((res, rej) => { const i = ++id; pend[i] = { res, rej }; ws.send(JSON.stringify({ id: i, method, params })); });
}
try {
  ws = new WebSocket(await connect());
  await new Promise((r) => (ws.onopen = r));
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) { d.error ? pend[d.id].rej(new Error(JSON.stringify(d.error))) : pend[d.id].res(d.result); delete pend[d.id]; }
    else if (d.method === 'Runtime.consoleAPICalled') logs.push('console.' + d.params.type + ': ' + d.params.args.map((a) => a.value ?? a.description).join(' '));
    else if (d.method === 'Runtime.exceptionThrown') logs.push('EXCEPTION: ' + JSON.stringify(d.params.exceptionDetails.exception?.description || d.params.exceptionDetails.text));
  };
  await send('Runtime.enable'); await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: +W, height: +H, deviceScaleFactor: 2, mobile: +W < 900 });
  if (+W < 900) await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await send('Page.navigate', { url });
  await sleep(2500);
  for (const a of acts) {
    if (a.wait) await sleep(a.wait);
    if (a.eval) { const r = await send('Runtime.evaluate', { expression: a.eval, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) logs.push('eval error: ' + JSON.stringify(r.exceptionDetails.exception?.description)); else if (r.result && r.result.value !== undefined) console.log(typeof r.result.value === 'string' ? r.result.value : JSON.stringify(r.result.value)); }
    if (a.shot) {
      let params = { format: 'png' };
      if (a.clip) { const r0 = await send('Runtime.evaluate', { expression: 'JSON.stringify(document.querySelector(' + JSON.stringify(a.clip) + ').getBoundingClientRect())', returnByValue: true }); const b = JSON.parse(r0.result.value); params.clip = { x: b.x, y: b.y, width: b.width, height: b.height, scale: 1 }; }
      const r = await send('Page.captureScreenshot', params); fs.writeFileSync(a.shot, Buffer.from(r.data, 'base64')); console.log('shot ' + a.shot); }
  }
} catch (e) { console.error(e); }
logs.forEach((l) => console.log(l));
try { ws.close(); } catch (e) {}
chrome.kill('SIGKILL');
await sleep(300);
fs.rmSync(dir, { recursive: true, force: true });
process.exit(0);

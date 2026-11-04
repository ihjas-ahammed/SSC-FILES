// usage: node rec.mjs <url> <out.mp4> [width height]
// Opens the one-card preview, records the card while its presentation mode plays, encodes H.264 MP4.
import { spawn, spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
const [url, out, W = '412', H = '870'] = process.argv.slice(2);
const SP = '/tmp/claude-1000/-home-ihjas-Documents-GitHub-SSC-FILES-SSC-V6/7cad0d5c-6397-4674-8ee1-0c66630397fe/scratchpad';
const port = 9800 + Math.floor(Math.random() * 150);
const dir = fs.mkdtempSync(SP + '/chr-');
const frames = fs.mkdtempSync(SP + '/frames-');
const chrome = spawn('google-chrome-stable', ['--headless=new', '--no-first-run', '--no-default-browser-check', '--hide-scrollbars',
  '--remote-debugging-port=' + port, '--user-data-dir=' + dir, 'about:blank'], { stdio: 'ignore' });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let ws, id = 0; const pend = {}; const list = []; let recordingOn = false; const logs = [];
async function connect() {
  for (let i = 0; i < 80; i++) {
    try { const t = await (await fetch('http://127.0.0.1:' + port + '/json')).json(); const pg = t.find((x) => x.type === 'page'); if (pg) return pg.webSocketDebuggerUrl; } catch (e) {}
    await sleep(150);
  }
  throw new Error('no chrome');
}
const send = (method, params = {}) => new Promise((res, rej) => { const i = ++id; pend[i] = { res, rej }; ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => { const r = await send('Runtime.evaluate', { expression: expr, awaitPromise: true, returnByValue: true }); if (r.exceptionDetails) throw new Error(JSON.stringify(r.exceptionDetails)); return r.result.value; };
try {
  ws = new WebSocket(await connect());
  await new Promise((r) => (ws.onopen = r));
  ws.onmessage = (m) => {
    const d = JSON.parse(m.data);
    if (d.id && pend[d.id]) { d.error ? pend[d.id].rej(new Error(JSON.stringify(d.error))) : pend[d.id].res(d.result); delete pend[d.id]; return; }
    if (d.method === 'Page.screencastFrame') {
      send('Page.screencastFrameAck', { sessionId: d.params.sessionId });
      if (!recordingOn) return;
      const f = path.join(frames, String(list.length).padStart(6, '0') + '.jpg');
      fs.writeFileSync(f, Buffer.from(d.params.data, 'base64'));
      list.push({ f, t: d.params.metadata.timestamp });
    }
    if (d.method === 'Runtime.exceptionThrown') logs.push('EXCEPTION ' + JSON.stringify(d.params.exceptionDetails.exception?.description));
  };
  await send('Runtime.enable'); await send('Page.enable'); await send('Animation.enable');
  await send('Page.addScriptToEvaluateOnNewDocument', { source: "(function(){var rn=performance.now.bind(performance),base=rn(),vb=base,rate=1;function v(){return vb+(rn()-base)*rate}window.__setRate=function(r){vb=v();base=rn();rate=r};performance.now=v;var rd=Date.now,d0=rd(),p0=rn();Date.now=function(){return d0+(v()-p0)};var st=window.setTimeout.bind(window),si=window.setInterval.bind(window);window.setTimeout=function(f,ms){var a=[].slice.call(arguments,2);return st(function(){typeof f==='function'?f.apply(null,a):eval(f)},(ms||0)/rate)};window.setInterval=function(f,ms){var a=[].slice.call(arguments,2);return si(function(){f.apply(null,a)},(ms||0)/rate)};var ra=window.requestAnimationFrame.bind(window);window.requestAnimationFrame=function(cb){return ra(function(){cb(v())})};})();" });
  await send('Emulation.setDeviceMetricsOverride', { width: +W, height: +H, deviceScaleFactor: 2, mobile: true });
  await send('Emulation.setTouchEmulationEnabled', { enabled: true });
  await send('Page.navigate', { url });
  for (let i = 0; i < 120 && !(await ev("!!(document.querySelector('.group') && window.MathJax && MathJax.startup && MathJax.startup.document)")); i++) await sleep(250);
  await sleep(1500);
  await ev("document.querySelector('.group').click()"); await sleep(900);
  await ev("document.querySelector('.sheet .cover').click()"); await sleep(2200);
  const rect = JSON.parse(await ev("JSON.stringify(document.querySelector('.mf-card').getBoundingClientRect())"));
  // slow motion: page clock and CSS / Web animations at SLOW speed, screenshots as fast as they come,
  // frame times divided back to real speed, so the video plays smoothly at the true pace
  const SLOW = +(process.env.SLOW || 8);
  await ev('window.__setRate(' + 1 / SLOW + ')');
  await send('Animation.setPlaybackRate', { playbackRate: 1 / SLOW });
  let done = false, ok = null;
  const t0 = Date.now();
  const shoot = async () => {
    const a = Date.now();
    const r = await send('Page.captureScreenshot', { format: 'jpeg', quality: 92, clip: { x: rect.x - 8, y: rect.y - 8, width: rect.width + 16, height: rect.height + 16, scale: 1 } });
    const b = Date.now();
    const f = path.join(frames, String(list.length).padStart(6, '0') + '.jpg');
    fs.writeFileSync(f, Buffer.from(r.data, 'base64'));
    list.push({ f, t: ((a + b) / 2 - t0) / 1000 / SLOW });
  };
  const loop = (async () => { while (!done) await shoot(); })();
  await sleep(1200 * SLOW);   // a moment on the front of the card
  ev("document.querySelector('.mf-card')._c.player.present()").then((v) => { ok = v; });
  while (ok === null) await sleep(200);
  await sleep(700 * SLOW);
  done = true; await loop;
  console.log('presented', ok, 'frames', list.length, 'seconds', list[list.length - 1].t.toFixed(1), 'fps', (list.length / list[list.length - 1].t).toFixed(1));
  // variable frame timing -> concat list with real durations, then a constant 30 fps stream cropped to the card
  let txt = '';
  for (let i = 0; i < list.length; i++) {
    const dur = i < list.length - 1 ? list[i + 1].t - list[i].t : 0.6;
    txt += "file '" + list[i].f + "'\nduration " + Math.max(0.001, dur).toFixed(4) + '\n';
  }
  txt += "file '" + list[list.length - 1].f + "'\n";
  const lf = path.join(frames, 'list.txt'); fs.writeFileSync(lf, txt);
  const pad = 8, ev2 = (v) => Math.round(v / 2) * 2;
  const cx = ev2(Math.max(0, (rect.x - pad) * 2)), cy = ev2(Math.max(0, (rect.y - pad) * 2));
  const cw = ev2(Math.min(+W * 2 - cx, (rect.width + 2 * pad) * 2)), ch = ev2(Math.min(+H * 2 - cy, (rect.height + 2 * pad) * 2));
  const r = spawnSync('ffmpeg', ['-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', lf,
    '-vf', 'scale=trunc(iw/2)*2:trunc(ih/2)*2,fps=30,format=yuv420p', '-c:v', 'libx264', '-preset', 'slow', '-crf', '20',
    '-movflags', '+faststart', out], { stdio: 'inherit' });
  console.log('ffmpeg exit', r.status);
} catch (e) { console.error(e); }
logs.forEach((l) => console.log(l));
try { ws.close(); } catch (e) {}
chrome.kill('SIGKILL');
await sleep(300);
fs.rmSync(dir, { recursive: true, force: true });
if (!process.env.KEEP) fs.rmSync(frames, { recursive: true, force: true });
process.exit(0);

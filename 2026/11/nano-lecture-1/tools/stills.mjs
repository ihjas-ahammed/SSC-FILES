// Deterministic exporter: drives renderAt(t) frame by frame in headless Chrome and pipes to ffmpeg.
//   node tools/stills.mjs --v <video> --stills 1,4.2,30   PNG stills → out/stills/<video>/   (QA)
//   (optional, not part of the HTML workflow) node tools/stills.mjs --v <video>  → out/<video>.mp4
import puppeteer from 'puppeteer-core';
import { spawn } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { serve } from './serve.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = Object.fromEntries(process.argv.slice(2).join(' ').split('--').filter(Boolean).map(s => { const [k, ...v] = s.trim().split(/\s+/); return [k, v.join(' ') || true]; }));
const name = args.v;
if (!name) { console.log('usage: node tools/stills.mjs --v <video> --stills 1,4.2,30'); process.exit(1); }
const CHROME = process.env.CHROME || ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium'].find(p => fs.existsSync(p));
const port = 5600 + Math.floor(Math.random() * 300);

const server = await serve(port);
const browser = await puppeteer.launch({
  executablePath: CHROME, headless: 'new',
  args: ['--no-sandbox', '--enable-webgl', '--ignore-gpu-blocklist', '--enable-gpu-rasterization', `--use-angle=${process.env.ANGLE || 'default'}`, '--hide-scrollbars', '--force-color-profile=srgb'],
});
const page = await browser.newPage();
let ready = false;
page.on('pageerror', e => { console.error('page error:', e.message); if (!ready) { browser.close(); server.close(); process.exit(1); } });
page.on('console', m => console.error('console:', m.type(), m.text()));
await page.setViewport({ width: 720, height: 1280, deviceScaleFactor: 1 });
await page.goto(`http://localhost:${port}/?v=${name}&render`, { waitUntil: 'domcontentloaded' });
await page.waitForFunction('window.__ready === true', { timeout: 120000 });
ready = true;
const info = await page.evaluate(() => ({ duration: __video.duration, fps: __video.fps, audio: __video.audio, w: __video.width, h: __video.height }));
const renderer = await page.evaluate(() => { const gl = __video.stage.renderer.getContext(); const d = gl.getExtension('WEBGL_debug_renderer_info'); return d ? gl.getParameter(d.UNMASKED_RENDERER_WEBGL) : '?'; });
console.log(`${name}: ${info.duration.toFixed(2)}s @ ${info.fps}fps — GL: ${renderer}`);

const clip = { x: 0, y: 0, width: info.w, height: info.h };
const shot = async (t, type = 'jpeg') => {
  await page.evaluate(t => __video.renderAt(t), t);
  return page.screenshot({ type, quality: type === 'jpeg' ? 94 : undefined, clip, optimizeForSpeed: true });
};

fs.mkdirSync(path.join(ROOT, 'out'), { recursive: true });
if (args.stills) {
  const dir = path.join(ROOT, 'out', 'stills', name);
  fs.mkdirSync(dir, { recursive: true });
  for (const t of String(args.stills).split(',').map(Number)) {
    fs.writeFileSync(path.join(dir, `t${t.toFixed(2)}.png`), await shot(t, 'png'));
  }
  console.log('stills →', dir);
} else {
  const from = +(args.from || 0), to = Math.min(+(args.to || info.duration), info.duration);
  const fps = +(args.fps || info.fps);
  const out = path.resolve(ROOT, args.out || `out/${name}${args.from || args.to ? `_${from}-${to}` : ''}.mp4`);
  const audioFile = info.audio && !args.mute ? path.join(ROOT, info.audio) : null;
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(fps), '-c:v', 'mjpeg', '-i', '-',
    ...(audioFile ? ['-ss', String(from), '-t', String(to - from), '-i', audioFile, '-map', '0:v', '-map', '1:a', '-c:a', 'aac', '-b:a', '192k', '-shortest'] : []),
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '17', '-pix_fmt', 'yuv420p', '-movflags', '+faststart', out], { stdio: ['pipe', 'inherit', 'inherit'] });
  const N = Math.round((to - from) * fps), started = Date.now();
  for (let i = 0; i < N; i++) {
    const buf = await shot(from + i / fps);
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
    if (i % 30 === 0) process.stdout.write(`\r  frame ${i}/${N}  ${((Date.now() - started) / 1000).toFixed(0)}s`);
  }
  ff.stdin.end();
  await new Promise(r => ff.on('close', r));
  console.log(`\n→ ${path.relative(ROOT, out)}  (${((Date.now() - started) / 1000).toFixed(0)}s)`);
}
await browser.close();
server.close();

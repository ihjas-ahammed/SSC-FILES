// Standalone build: one self-contained .html per video (engine + three.js + fonts + voice + models inlined).
// Opens with a double-click — no server, no internet.
//   node tools/build.mjs <name>      → dist/<name>.html
//   node tools/build.mjs             → every video in videos/
import * as esbuild from 'esbuild';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const names = process.argv.slice(2).filter(a => !a.startsWith('-'));
const all = fs.readdirSync(path.join(ROOT, 'videos')).filter(f => /^[a-z0-9][a-z0-9-]*\.js$/.test(f)).map(f => f.replace('.js', '')).filter(n => n !== 'list');
const targets = names.length ? names : all;
const MIME = { '.woff2': 'font/woff2', '.m4a': 'audio/mp4', '.mp3': 'audio/mpeg', '.wav': 'audio/wav', '.png': 'image/png', '.jpg': 'image/jpeg', '.glb': 'model/gltf-binary', '.gltf': 'model/gltf+json' };
const dataUri = f => `data:${MIME[path.extname(f).toLowerCase()] || 'application/octet-stream'};base64,${fs.readFileSync(f).toString('base64')}`;

const fontDir = path.join(ROOT, 'assets/fonts');
const fontsCss = fs.readFileSync(path.join(fontDir, 'fonts.css'), 'utf8').replace(/url\('([^']+)'\)/g, (_, f) => `url('${dataUri(path.join(fontDir, f))}')`);

fs.mkdirSync(path.join(ROOT, 'dist'), { recursive: true });
for (const name of targets) {
  const file = path.join(ROOT, 'videos', `${name}.js`);
  if (!fs.existsSync(file)) { console.error(`no such video: videos/${name}.js`); process.exitCode = 1; continue; }
  const entry = `
    import def from './videos/${name}.js';
    import { mountPlayer } from './engine/player.js';
    if (def.audio && window.__AUDIO__) def.audio = window.__AUDIO__;
    delete def.reference;
    mountPlayer(def);
  `;
  const res = await esbuild.build({
    stdin: { contents: entry, resolveDir: ROOT, loader: 'js' },
    bundle: true, minify: true, format: 'iife', target: 'es2022', write: false, legalComments: 'none', logLevel: 'error',
  });
  const js = res.outputFiles[0].text.replace(/<\/script/gi, '<\\/script');
  const def = (await import(pathToFileURL(file).href + `?t=${Date.now()}`)).default;
  const audio = def.audio && fs.existsSync(path.join(ROOT, def.audio)) ? dataUri(path.join(ROOT, def.audio)) : '';
  const models = Object.fromEntries(Object.entries(def.models || {}).map(([k, f]) => [k, fs.existsSync(path.join(ROOT, f)) ? dataUri(path.join(ROOT, f)) : f]));
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><link rel="icon" href="data:,">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<meta name="theme-color" content="#141110">
<title>${(def.title || name).replace(/</g, '&lt;')}</title>
<style>${fontsCss}</style>
</head><body>
<script>window.__AUDIO__=${JSON.stringify(audio)};window.__MODELS__=${JSON.stringify(models)};</script>
<script>${js}</script>
</body></html>`;
  fs.writeFileSync(path.join(ROOT, 'dist', `${name}.html`), html);
  console.log(`dist/${name}.html  ${(html.length / 1e6).toFixed(2)} MB${audio ? '  (voice inlined)' : '  (no voice yet)'}`);
}

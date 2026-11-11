// Optional MP4 export (only when the user asks for a video file; the normal deliverable is HTML).
//   node tools/render.mjs <video> [--crf 26] [--keep-hq]
// 1. renders every frame deterministically (tools/stills.mjs) with the synced voice → out/<video>-hq.mp4
// 2. re-encodes to a small "reel quality" file → <video>.mp4 in the project root
//    (720×1280, 30 fps, H.264 CRF 26 preset slow, AAC 96k, faststart): about 3–4 MB per 70 s.
// The project root is what tools/serve.mjs serves, so the file downloads at http://<host>:<port>/<video>.mp4
// Takes ~4 min per minute of video; run it in the background. If it fails right away while another
// render is running (Chrome/GPU contention), just run it again.
import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { ROOT } from './serve.mjs';

const name = process.argv[2];
const opt = (k, d) => { const i = process.argv.indexOf('--' + k); return i > 0 ? process.argv[i + 1] : d; };
if (!name) { console.log('usage: node tools/render.mjs <video> [--crf 26] [--keep-hq]'); process.exit(1); }
const hq = path.join(ROOT, 'out', `${name}-hq.mp4`), small = path.join(ROOT, `${name}.mp4`);

const r = spawnSync('node', [path.join(ROOT, 'tools', 'stills.mjs'), '--v', name, '--out', `out/${name}-hq.mp4`], { stdio: 'inherit', cwd: ROOT });
if (r.status || !fs.existsSync(hq)) { console.error('frame render failed (try again; close other renders first)'); process.exit(1); }

const ff = spawnSync('ffmpeg', ['-v', 'error', '-y', '-i', hq, '-c:v', 'libx264', '-preset', 'slow', '-crf', String(opt('crf', 26)),
  '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '96k', '-movflags', '+faststart', small], { stdio: 'inherit' });
if (ff.status) { console.error('ffmpeg re-encode failed'); process.exit(1); }
if (!process.argv.includes('--keep-hq')) fs.rmSync(hq, { force: true });
const mb = (fs.statSync(small).size / 1e6).toFixed(1);
console.log(`→ ${name}.mp4  (${mb} MB)  download: http://<host>:<port>/${name}.mp4 while tools/serve.mjs runs`);

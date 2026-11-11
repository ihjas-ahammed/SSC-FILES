// Validate a video and render a contact sheet.
//   node tools/check.mjs <video> [--no-sheet]
// Prints "OK: ..." or a numbered list of problems (each says what to do).
// Contact sheet: out/check/<video>.png (one frame from the middle of every scene, labelled).
import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { ROOT } from './serve.mjs';
import { openVideo } from './browser.mjs';

const name = process.argv[2];
if (!name) { console.log('usage: node tools/check.mjs <video> [--no-sheet]'); process.exit(1); }
if (!fs.existsSync(path.join(ROOT, 'videos', `${name}.js`))) { console.error(`no such video: videos/${name}.js`); process.exit(1); }

const problems = [], notes = [];
const { page, errors, ok, close } = await openVideo(name);
if (!ok) {
  console.log(`1. The page did not load. JavaScript error(s):\n   ${errors.join('\n   ') || '(none captured: open the page in a browser and look at the console)'}`);
  await close(); process.exit(1);
}
const info = await page.evaluate(() => ({
  duration: __video.duration, design: __video.designDuration, audio: !!__video.audio,
  scenes: __video.scenes.map(s => ({ id: s.id, start: s.start, end: s.end, a: __video.toAudio(s.start), b: __video.toAudio(s.end) })),
  chunks: __video.chunks,
}));

// scenes: contiguous, cover the timeline
const sc = info.scenes;
if (Math.abs(sc[0].start) > 1e-6) problems.push(`First scene "${sc[0].id}" must start at 0 (it starts at ${sc[0].start}).`);
for (let i = 0; i < sc.length - 1; i++) {
  if (Math.abs(sc[i].end - sc[i + 1].start) > 1e-3) problems.push(`Scene "${sc[i].id}" ends at ${sc[i].end} but the next scene "${sc[i + 1].id}" starts at ${sc[i + 1].start}. Make end = next start.`);
  if (sc[i].end - sc[i].start < 0.5) problems.push(`Scene "${sc[i].id}" is only ${(sc[i].end - sc[i].start).toFixed(2)} s long. Merge it or make it at least 0.5 s.`);
}
if (sc.at(-1).end < info.design - 0.01) problems.push(`Last scene "${sc.at(-1).id}" ends at ${sc.at(-1).end} but the video lasts ${info.design}. Make its end = duration.`);
const ids = new Set(); for (const s of sc) { if (ids.has(s.id)) problems.push(`Two scenes are called "${s.id}". Give every scene a unique id.`); ids.add(s.id); }

// captions: fit on one line, readable duration
for (const [i, c] of info.chunks.entries()) {
  const end = Math.min(c.end, info.duration) - 0.03;
  const t = Math.max(c.at + 0.05, Math.min(end, c.at + 2.5));
  const m = await page.evaluate(t => { __video.renderAt(t); const l = document.querySelector('.cap-line'); const box = document.querySelector('.captions'); return l ? { w: l.scrollWidth, max: box.clientWidth } : null; }, Math.max(t, end));
  if (m && m.w > m.max + 2) problems.push(`Caption line ${i + 1} "${c.text}" is too wide (${m.w}px > ${m.max}px). Split it into two caption lines.`);
  if (c.end - c.at < 0.35 && c.end !== null) notes.push(`caption line ${i + 1} "${c.text}" is on screen only ${(c.end - c.at).toFixed(2)} s`);
  if (info.audio && c.matched === false) notes.push(`caption line ${i + 1} "${c.text}" is not locked to the voice (spoken differently?)`);
}

// caption lint: things that make `voice align` lose sync. The matcher reads the caption TEXT (not `say`),
// prefix-matches each word against the next ~8 spoken words, and whisper writes most numbers as digits.
const norm = s => s.toLowerCase().replace(/[^a-z0-9]/g, '');
const words = c => c.text.replace(/[[\]{}]/g, '').split(/\s+/).filter(Boolean);
for (const [i, c] of info.chunks.entries()) {
  const w = words(c), tag = `caption line ${i + 1} "${c.text}"`;
  if (w.length && !norm(w[0])) notes.push(`${tag}: starts with a symbol ("${w[0]}"). Start with a spoken word or align can't lock the line (e.g. "equals …" not "= …").`);
  if (/\bStep \d/.test(c.text)) notes.push(`${tag}: write "Step one/two/…" in words. A bare digit like "1" prefix-matches "100", "15"… later in the voice.`);
  if (/\d\s+°/.test(c.text)) notes.push(`${tag}: glue number and unit ("100°C", not "100 °C") so the unit token can't match a later word.`);
  const later = info.chunks.slice(i + 1, i + 3).flatMap(words).map(norm).filter(Boolean);
  for (const t of w.map(norm).filter(x => /^\d/.test(x))) {
    if (later.some(n => n !== t && /^\d/.test(n) && (n.startsWith(t) || t.startsWith(n)))) { notes.push(`${tag}: number "${t}" also prefixes a number in the next lines. Spell it ("five-degree") to stop align matching the wrong one.`); break; }
  }
}
if (errors.length) problems.push(`JavaScript errors while playing:\n   ${[...new Set(errors)].slice(0, 5).join('\n   ')}`);

// contact sheet
if (!process.argv.includes('--no-sheet')) {
  const dir = path.join(ROOT, 'out', 'check', name);
  fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const shots = sc.map(s => ({ id: s.id, t: (s.a + s.b) / 2 }));
  for (const [i, s] of shots.entries()) {
    await page.evaluate(t => __video.renderAt(t), s.t);
    await page.screenshot({ path: path.join(dir, `${String(i).padStart(2, '0')}.png`), clip: { x: 0, y: 0, width: 720, height: 1280 } });
  }
  const cols = Math.min(6, shots.length), rows = Math.ceil(shots.length / cols);
  const inputs = shots.flatMap((_, i) => ['-i', path.join(dir, `${String(i).padStart(2, '0')}.png`)]);
  const lab = shots.map((s, i) => `[${i}]scale=240:-1,drawtext=text='${i + 1} ${s.id.replace(/[':]/g, '')} ${s.t.toFixed(1)}s':x=6:y=6:fontsize=15:fontcolor=white:box=1:boxcolor=black@0.6[s${i}]`).join(';');
  const layout = shots.map((_, i) => `${(i % cols) * 244}_${Math.floor(i / cols) * 431}`).join('|');
  const pad = shots.length === 1 ? `${lab};[s0]null` : `${lab};${shots.map((_, i) => `[s${i}]`).join('')}xstack=inputs=${shots.length}:layout=${layout}:fill=black`;
  const sheet = path.join(ROOT, 'out', 'check', `${name}.png`);
  const r = spawnSync('ffmpeg', ['-v', 'error', '-y', ...inputs, '-filter_complex', pad, '-frames:v', '1', sheet], { encoding: 'utf8' });
  if (r.status) notes.push('contact sheet failed (ffmpeg): ' + r.stderr.slice(0, 300)); else notes.push(`contact sheet: out/check/${name}.png (${shots.length} scenes) — Read it and look at every frame`);
}
await close();

for (const n of notes) console.log('note: ' + n);
if (problems.length) { console.log(`\n${problems.length} problem(s):`); problems.forEach((p, i) => console.log(`${i + 1}. ${p}`)); process.exit(1); }
console.log(`OK: ${name} passed all checks (${sc.length} scenes, ${info.chunks.length} caption lines, ${info.duration.toFixed(1)} s${info.audio ? ', voice synced' : ', no voice yet'}).`);

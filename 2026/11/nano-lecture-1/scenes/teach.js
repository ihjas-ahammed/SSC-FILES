// Teaching kit: helpers for slow, connected "lab experiment" videos (formula + table + steps + summary).
// See RECIPES.md §10 and videos/example-lab-metal-coil.js for a complete video built with these.
import * as THREE from 'three';
import { card, pill, rbox, cyl, clay, glow, torus, C, FONT } from '../engine/geo.js';
import { ease, lerp } from '../engine/anim.js';
import { mathText } from '../props/lab.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);

// ── script + timing ────────────────────────────────────────────────────────────
// LINES = [[sceneId | 0, text, say?], …]. A non-zero id starts a new scene at that line.
// Slow teaching pace by default (0.42 s/word + 0.75 s per line; the reel default is 0.32 + 0.4).
// Returns captions (with design `at`s), DURATION, span(id) → { start, end }, at(id, k) → local
// time of line k inside scene id (use it for pops: popIn(card, lt, at('lab', 2))).
export function buildScript(LINES, { perWord = 0.42, gap = 0.75, tail = 3.0 } = {}) {
  const r1 = x => Math.round(x * 10) / 10;
  const captions = [], SC = {};
  let t = 0, cur;
  for (const [id, text, say] of LINES) {
    if (id) { cur = id; SC[id] = { start: r1(t), lines: [] }; }
    SC[cur].lines.push(r1(t));
    captions.push({ at: r1(t), text, ...(say ? { say } : {}) });
    const words = (say || text).replace(/[[\]{}]/g, '').split(/\s+/).filter(Boolean).length;
    t += perWord * words + gap;
  }
  const DURATION = r1(captions.at(-1).at + tail);
  const ORDER = Object.keys(SC);
  const span = id => { const n = ORDER[ORDER.indexOf(id) + 1]; return { start: SC[id].start, end: n ? SC[n].start : DURATION }; };
  const at = (id, k) => r1(SC[id].lines[k] - SC[id].start);
  return { captions, DURATION, SC, span, at };
}

// ── small helpers ──────────────────────────────────────────────────────────────
// how many of `times` have passed (stage counter): card.stage(steps(lt, [1.2, 2.6, 4.0]))
export const steps = (lt, times) => times.filter(t => lt >= t).length;
// eased keyframes for arrays (camera paths): smooth(lt, [[0, [x,y,z]], [3, [x,y,z]], …])
export function smooth(lt, keys) {
  let i = 0; while (i < keys.length - 1 && lt > keys[i + 1][0]) i++;
  if (i === keys.length - 1) return keys[i][1];
  const [ta, a] = keys[i], [tb, b] = keys[i + 1], k = ease.inOut(Math.min(1, Math.max(0, (lt - ta) / (tb - ta))));
  return a.map((v, j) => lerp(v, b[j], k));
}

// A card whose face is redrawn only when its stage changes: draw(ctx, W, H, stage). card.stage(n).
// Integer stages are cheap; use them for "row 3 appears", "curve 40 % drawn" (st = 10 + 40), etc.
export function stagedCard(opts, draw) {
  let st = 0, last = -1;
  const c = card({ px: 300, ...opts, draw: (ctx, W, H) => draw(ctx, W, H, st) });
  c.stage = n => { if (n !== last) { last = n; st = n; c.userData.redraw(); } };
  return c;
}

// Two cards back to back (front = table, back = graph). g.setFlip(0..1) turns it over.
export function flipCard(front, back) {
  const g = new THREE.Group();
  g.add(front); back.rotation.y = Math.PI; back.position.z = -0.06; g.add(back);
  g.setFlip = k => (g.rotation.y = k * Math.PI);
  return g;
}

// Step chip that switches gray → orange: chip('2 heat', x, y, z); chip.set(true). Keep y ≥ 0.22 (pill half-height).
export function chip(text, x, y, z) {
  const off = pill(text, { bg: '#3a312b', fg: '#8a8178', h: 0.42, size: 0.44 });
  const on = pill(text, { bg: C.orange, fg: '#2a1408', h: 0.42, size: 0.44 });
  const g = new THREE.Group(); g.add(off, on); P(g, x, y, z);
  g.set = k => { on.visible = !!k; off.visible = !k; };
  g.set(false);
  return g;
}

// Pill that switches text (e.g. solid → melting → liquid): tagSet(texts, [[bg, fg], …]); tag.show(i)
export function tagSet(texts, colors) {
  const g = new THREE.Group();
  const ps = texts.map((t, i) => { const p = pill(t, { bg: colors[i][0], fg: colors[i][1], h: 0.42, size: 0.44 }); g.add(p); return p; });
  g.show = i => ps.forEach((p, j) => (p.visible = j === i));
  g.show(0);
  return g;
}

// A yellow sticky note that carries a result into later steps ("lead: 0.08 Ω", "fixed: 2.0 V").
export const stickyNote = text => { const n = pill(text, { bg: '#fff3b0', fg: '#3a312b', h: 0.36, size: 0.44 }); n.rotation.z = 0.05; return n; };

// Hot plate with a glowing coil ring: plate.setOn(0..1)
export function hotPlate() {
  const g = new THREE.Group();
  g.add(P(rbox(1.9, 0.38, 1.5, 0.1, clay('#3a322c')), 0, 0.19, 0));
  g.add(P(cyl(0.8, 0.8, 0.04, clay('#1f1a17', { rough: 0.5 })), 0, 0.4, 0));
  const coil = torus(0.5, 0.035, glow('#ff5a2a', 0)); coil.rotation.x = Math.PI / 2; coil.position.y = 0.43; g.add(coil);
  const knob = cyl(0.1, 0.1, 0.08, clay(C.orange)); knob.rotation.x = Math.PI / 2; knob.position.set(0.6, 0.19, 0.77); g.add(knob);
  g.setOn = k => (coil.material.emissiveIntensity = 7 * k);
  return g;
}

// ── cards ────────────────────────────────────────────────────────────────────────
// Step-summary card: items = [[label, value], …] (≤ 6). card.stage(n) ticks the first n.
// Tick them on the recap lines: s.stage(summaryTicks(lt, at('recap', 1), at('recap', 2)))
export function summaryCard({ title = 'STEP SUMMARY', tag = '', items, w = 3.5, h = 3.0 }) {
  return stagedCard({ w, h, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
    ctx.fillStyle = '#3a312b'; ctx.fillRect(0, 0, W, H * 0.12);
    ctx.font = `700 ${H * 0.055}px ${FONT.mono}`; ctx.textBaseline = 'middle'; ctx.fillStyle = '#f4a576'; ctx.fillText(title, W * 0.05, H * 0.06);
    ctx.fillStyle = '#d6cdc4'; ctx.textAlign = 'right'; ctx.fillText(tag, W * 0.95, H * 0.06); ctx.textAlign = 'left';
    const gap = Math.min(0.135, 0.78 / items.length);
    items.forEach(([a, b], i) => {
      const y = H * (0.21 + i * gap), done = i < st;
      ctx.textBaseline = 'middle';
      ctx.fillStyle = done ? C.orange : '#e4ddd5'; ctx.beginPath(); ctx.arc(W * 0.09, y, H * 0.04, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = done ? '#2a1408' : '#a39a91'; ctx.font = `700 ${H * 0.045}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText(done ? '✓' : String(i + 1), W * 0.09, y + H * 0.004);
      ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
      mathText(ctx, a, W * 0.16, y + H * 0.02, H * 0.055, { family: FONT.sans, weight: 600, color: done ? '#2b241f' : '#b3aaa1' });
      ctx.textBaseline = 'middle'; ctx.textAlign = 'right'; ctx.fillStyle = done ? '#e2652a' : '#d9d1c5'; ctx.font = `700 ${H * 0.05}px ${FONT.mono}`; ctx.fillText(b, W * 0.95, y); ctx.textAlign = 'left';
    });
    ctx.textBaseline = 'alphabetic';
  });
}
// 6 ticks spread over two caption lines: 3 during line a, 3 starting at line b
export function summaryTicks(lt, a, b, n = 6) {
  const half = Math.ceil(n / 2), g1 = (b - a) / half;
  const times = [...Array(half)].map((_, i) => a + i * g1).concat([...Array(n - half)].map((_, i) => b + i * 0.55));
  return steps(lt, times);
}

// Code editor card. lines = source lines; highlights[stage] = line indexes to highlight. card.stage(i)
export function codeCard({ file = 'main.py', lines, highlights, w = 3.7, h = 1.6 }) {
  return stagedCard({ w, h, d: 0.08, r: 0.06, color: '#24201d' }, (ctx, W, H, st) => {
    ctx.fillStyle = '#3a332e'; ctx.fillRect(0, 0, W, H * 0.13);
    ['#e5484d', '#f0b23a', '#3c8f5a'].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(W * (0.04 + i * 0.03), H * 0.065, H * 0.025, 0, Math.PI * 2); ctx.fill(); });
    ctx.fillStyle = '#a39a91'; ctx.font = `600 ${H * 0.06}px ${FONT.mono}`; ctx.fillText(file, W * 0.15, H * 0.085);
    const step = Math.min(0.097, 0.82 / lines.length);
    lines.forEach((s, i) => {
      const y = H * (0.24 + i * step), on = (highlights[st] || []).includes(i);
      if (on) { ctx.fillStyle = 'rgba(240,122,58,0.22)'; ctx.fillRect(W * 0.02, y - H * 0.06, W * 0.96, H * 0.09); }
      ctx.fillStyle = '#6b625a'; ctx.font = `500 ${H * 0.052}px ${FONT.mono}`; ctx.fillText(String(i + 1), W * 0.03, y);
      ctx.fillStyle = on ? '#f4a576' : '#a39a91'; ctx.font = `${on ? 700 : 500} ${H * 0.058}px ${FONT.mono}`; ctx.fillText(s, W * 0.08, y);
    });
  });
}

// Plot axes on a canvas card; returns { X, Y } data→pixel mappers for drawing points/lines yourself.
// xt / yt = [[value, label], …]. Labels use mathText (so 'ln I_r' gets a subscript).
export function plotAxes(ctx, W, H, { title = '', x0, x1, y0, y1, xt = [], yt = [], xl = '', yl = '' }) {
  const Lx = W * 0.17, Rx = W * 0.95, Ty = H * 0.14, By = H * 0.8;
  const X = x => Lx + (x - x0) / (x1 - x0) * (Rx - Lx), Y = y => By - (y - y0) / (y1 - y0) * (By - Ty);
  const ser = { family: FONT.serif, weight: 400, italic: true, color: '#2b241f' };
  ctx.fillStyle = '#5d554e'; ctx.font = `600 ${H * 0.062}px ${FONT.mono}`; ctx.textAlign = 'left'; ctx.fillText(title, W * 0.05, H * 0.09);
  ctx.strokeStyle = '#e4ddd5'; ctx.lineWidth = 2; yt.forEach(([v]) => { ctx.beginPath(); ctx.moveTo(Lx, Y(v)); ctx.lineTo(Rx, Y(v)); ctx.stroke(); });
  ctx.strokeStyle = '#2b241f'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(Lx, Ty - H * 0.02); ctx.lineTo(Lx, By); ctx.lineTo(Rx, By); ctx.stroke();
  ctx.fillStyle = '#3a322c'; ctx.font = `600 ${H * 0.055}px ${FONT.mono}`; ctx.textAlign = 'center'; xt.forEach(([v, s]) => ctx.fillText(s, X(v), By + H * 0.065));
  ctx.textAlign = 'right'; yt.forEach(([v, s]) => ctx.fillText(s, Lx - W * 0.02, Y(v) + H * 0.02));
  mathText(ctx, xl, (Lx + Rx) / 2, H * 0.965, H * 0.07, { ...ser, align: 'center' });
  ctx.save(); ctx.translate(W * 0.05, (Ty + By) / 2); ctx.rotate(-Math.PI / 2); mathText(ctx, yl, 0, 0, H * 0.07, { ...ser, align: 'center' }); ctx.restore();
  ctx.textAlign = 'left';
  return { X, Y };
}
// dot helper for plots
export function dot(ctx, x, y, r, color = '#2b241f') { ctx.fillStyle = color; ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill(); }

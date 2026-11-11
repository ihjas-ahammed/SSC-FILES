// Nanoscience lecture 1 · video 2: shrink a pendulum (first pre-quantum size effect).
// Source: Chattopadhyay & Banerjee Ch. 5 §5.2 (1) "Response time increases for miniaturized simple pendulum", p. 73, Eq. 5.1.
// Numbers from Eq. 5.1 with g = 9.8 m/s²: 1 m → 0.498 Hz (T 2.01 s); 1 µm → 498 Hz (T 2.01 ms).
// (The book rounds the 1 µm case to "1000 Hz, period 1 ms": same order of magnitude; shown as a footnote.)
import * as THREE from 'three';
import voice from './nano-02-pendulum.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { readout, mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { pow, radical, pendulum, stand } from '../props/custom/nano.js';
import { pill, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };
const G = 9.8, nu = l => Math.sqrt(G / l) / (2 * Math.PI);

const LINES = [
  ['hook', 'Shrink a [pendulum.]'],
  [0, 'What happens to its [swing?]'],
  ['law', 'Frequency goes as the'],
  [0, '[root of g over l.]'],
  [0, 'Period is its [inverse.]'],
  [0, 'Shorter string,'],
  [0, '[faster] swing.'],
  ['big', 'Take a [one-metre] string.'],
  [0, 'It swings about'],
  [0, '[half a hertz:]'],
  [0, 'one swing in [two seconds.]'],
  ['small', 'Now shrink it to'],
  [0, '[one micron.]'],
  [0, 'Length falls a [millionfold.]'],
  [0, 'Frequency rises by its'],
  [0, '[square root:] a thousand.'],
  [0, 'About [500 hertz,]', 'About five hundred hertz,'],
  [0, 'a period of [2 milliseconds.]', 'a period of two milliseconds.'],
  ['why', 'So the tiny pendulum'],
  [0, 'responds a [thousand times]'],
  [0, 'faster.'],
  [0, 'Small systems react [fast:]'],
  [0, 'a [size effect]'],
  [0, 'even before quantum.'],
  ['recap', 'Quick [recap:]'],
  [0, 'law, metre, period,'],
  [0, 'micron, hertz, [thousand.]'],
  ['outro', 'Smaller [pendulum,]'],
  [0, '[faster] response.'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

// ν = (1/2π) √(g/l) and T = 2π √(l/g), laid out by measured widths; y = fraction bar
function rootFrac(ctx, x, y, px, num, den, o) {
  const fw = Math.max(px * 0.9, ctx.measureText ? px * 0.9 : 0);
  const x0 = radical(ctx, x, y - px * 1.2, y + px * 1.25, fw + px * 0.2, o.color);
  mathFrac(ctx, num, den, x0 + px * 0.1 + fw / 2, y, px, o);
  return x0 + fw + px * 0.3 - x;
}
function nuFormula(ctx, x, y, px, color = INK) {
  const o = { ...serif, color };
  let cx = x + mathText(ctx, 'ν = ', x, y + px * 0.35, px, o);
  const w = mathFrac(ctx, '1', '2π', cx + px * 0.75, y, px, o); cx += w + px * 0.35;
  rootFrac(ctx, cx, y, px, 'g', 'l', o);
}
function tFormula(ctx, x, y, px, color = INK) {
  const o = { ...serif, color };
  const cx = x + mathText(ctx, 'T = 2π ', x, y + px * 0.35, px, o);
  rootFrac(ctx, cx, y, px, 'l', 'g', o);
}

const scenes = [
  // 1 ── HOOK (cream): robot watches a pendulum swing ──────────────────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.15, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.4 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.85 }), -1.2, 0.22, 0.3); group.add(bot);
      const st = P(stand({ h: 3.0, reach: 0.9 }), 1.0, 0.22, 0); group.add(st);
      const pd = P(pendulum({ len: 2.0, bob: 0.24 }), 1.0, 3.22, 0); group.add(pd);
      const q = P(pill('shrink it?', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), -0.9, 3.0, 1.0); group.add(q);
      return { bot, st, pd, q };
    },
    update({ bot, pd, q }, lt) {
      pd.setAngle(0.28 * Math.sin(lt * Math.PI));
      popIn(q, lt, B_('hook', 1) + 0.1, 0.45);
      bot.set(lt, { mood: lt < B_('hook', 1) ? 'smile' : 'think', turn: 0.35, look: [Math.sin(lt * Math.PI) * 0.5, 0] });
    },
  },

  // 2 ── LAW (dark): ν = (1/2π)√(g/l), T = 2π√(l/g), l ↓ ⇒ ν ↑ ───────────────────
  {
    id: 'law', ...T_('law'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.6 - lt * 0.1], look: [0.3, 1.95, 0], fov: 33 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.6, h: 2.8, d: 0.12, r: 0.1, color: '#f2eee8' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.fillText('SIMPLE PENDULUM · EQ. 5.1', W * 0.05, H * 0.1);
        const px = H * 0.11;
        nuFormula(ctx, W * 0.2, H * 0.3, px, st >= 1 ? ORANGE : INK);
        if (st >= 2) tFormula(ctx, W * 0.2, H * 0.6, px);
        if (st >= 3) {
          ctx.fillStyle = '#e4ddd5'; ctx.fillRect(W * 0.05, H * 0.76, W * 0.9, 3);
          mathText(ctx, 'l ↓', W * 0.22, H * 0.9, px, { ...serif, color: BLUE, align: 'center' });
        }
        if (st >= 4) {
          mathText(ctx, '⇒', W * 0.45, H * 0.9, px, { family: FONT.sans, weight: 600, color: INK, align: 'center' });
          mathText(ctx, 'ν ↑   T ↓', W * 0.72, H * 0.9, px, { ...serif, color: ORANGE, align: 'center' });
        }
      }), 0.3, 2.2, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('law', k);
      popIn(f, lt, 0.2, 0.5);
      f.stage(steps(lt, [L(1), L(2), L(3), L(4)]));
      f.position.y = 2.2 + wobble(lt, 0.4, 0.02);
    },
  },

  // 3 ── BIG (cream): a 1 m pendulum swinging in real time, ν and T readouts ───
  {
    id: 'big', ...T_('big'), env: 'cream', zoom: 1.15, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 2.9, 13.2 - lt * 0.1], look: [0.2, 1.8, 0], fov: 32 }),
    build({ group }) {
      const st = P(stand({ h: 3.2, reach: 1.0 }), -0.4, 0, 0); group.add(st);
      const pd = P(pendulum({ len: 2.5, bob: 0.3 }), -0.4, 3.2, 0); group.add(pd);
      const len = P(pill('l = 1 m', { bg: '#efe9e2', fg: '#2b241f', h: 0.44, size: 0.44 }), -1.25, 3.55, 0.6); group.add(len);
      const rn = P(readout({ label: 'ν', unit: 'Hz', w: 1.8, digits: 2 }), 1.3, 2.4, 0.6); group.add(rn);
      const rt = P(readout({ label: 'T', unit: 's', w: 1.8, digits: 2 }), 1.3, 1.6, 0.6); group.add(rt);
      return { pd, len, rn, rt };
    },
    update({ pd, len, rn, rt }, lt) {
      const L = k => B_('big', k);
      pd.setAngle(0.32 * Math.sin(lt * 2 * Math.PI * 0.498));         // the true 2.0 s period
      popIn(len, lt, 0.4, 0.45);
      popIn(rn, lt, L(1), 0.45); rn.show(nu(1));
      popIn(rt, lt, L(3), 0.45); rt.show(1 / nu(1));
    },
  },

  // 4 ── SMALL (dark): the pendulum shrinks to 1 µm; ν climbs to ~500 Hz ────────
  {
    id: 'small', ...T_('small'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 2.9, 12.6 - lt * 0.08], look: [0.2, 1.8, 0], fov: 32 }),
    build({ group }) {
      const rig = P(new THREE.Group(), -0.4, 0, 0); group.add(rig);
      const st = stand({ h: 3.2, reach: 1.0 }); rig.add(st);
      const pd = P(pendulum({ len: 2.5, bob: 0.3 }), 0, 3.2, 0); rig.add(pd);
      const ghosts = [-1, 1].map(s => { const g = P(glowSprite('#ffb46a', 0.6, 0), 0, 0, 0.3); group.add(g); g.userData.s = s; return g; });
      const len = P(pill('l = 1 m', { bg: '#3a312b', fg: '#d6cdc4', h: 0.44, size: 0.44 }), -1.3, 3.35, 0.6); group.add(len);
      const lenS = P(pill('l = 1 µm', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.46 }), -1.3, 3.35, 0.6); group.add(lenS);
      const rn = P(readout({ label: 'ν', unit: 'Hz', w: 1.9, digits: 0 }), 1.3, 2.4, 0.6); group.add(rn);
      const rt = P(readout({ label: 'T', unit: 'ms', w: 1.9, digits: 1 }), 1.3, 1.6, 0.6); group.add(rt);
      const root = P(pill('√(10⁶) = 1000', { bg: '#f2eee8', fg: '#2b241f', h: 0.46, size: 0.44 }), 0.6, 0.35, 1.3); group.add(root);
      return { rig, pd, ghosts, len, lenS, rn, rt, root };
    },
    update({ rig, pd, ghosts, len, lenS, rn, rt, root }, lt) {
      const L = k => B_('small', k);
      // shrink: scale the rig from 1 to a small token (on screen we can only hint at a micron)
      const k = prog(lt, L(1) - 0.3, 1.4, ease.inOut);
      const s = lerp(1, 0.22, k);
      rig.scale.setScalar(s); rig.position.set(-0.4, 0, 0);
      // log length from 1 m to 1 µm drives ν and T
      const l = Math.pow(10, -6 * k);
      const f = nu(l);
      // visual swing rate: 0.5 Hz at full size → a fast 7 Hz shimmer when tiny (true 500 Hz would alias)
      const vis = lerp(0.5, 7, k);
      pd.setAngle(0.32 * Math.sin(lt * 2 * Math.PI * vis));
      const tipY = 3.2 * s - 2.5 * s, tipX = -0.4;
      ghosts.forEach(g => { g.position.set(tipX + g.userData.s * Math.sin(0.32) * 2.5 * s, tipY + 0.06, 0.3); g.material.opacity = 0.7 * k; });
      len.visible = k < 0.5; lenS.visible = k >= 0.5; popIn(len, lt, 0.2, 0.4); popIn(lenS, lt, L(1) + 0.4, 0.45);
      popIn(rn, lt, 0.3, 0.45); rn.show(f);
      popIn(rt, lt, 0.5, 0.45); rt.show(1000 / f);
      popIn(root, lt, L(4) + 0.2, 0.45);
    },
  },

  // 5 ── WHY (cream): 1 m vs 1 µm side by side → ×1000 faster ───────────────────
  {
    id: 'why', ...T_('why'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 2.8, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.fillText('RESPONSE TIME', W * 0.05, H * 0.1);
        ctx.font = `700 ${H * 0.06}px ${FONT.serif}`; ctx.fillStyle = INK; ctx.textAlign = 'right';
        ctx.fillText('ν', W * 0.62, H * 0.22); ctx.fillText('T', W * 0.92, H * 0.22); ctx.textAlign = 'left';
        const row = (y, a, b, c, col) => {
          ctx.fillStyle = col; ctx.font = `700 ${H * 0.07}px ${FONT.mono}`; ctx.fillText(a, W * 0.06, y);
          ctx.textAlign = 'right'; ctx.fillText(b, W * 0.62, y); ctx.fillText(c, W * 0.92, y); ctx.textAlign = 'left';
        };
        row(H * 0.34, '1 m', '0.5 Hz', '2 s', INK);
        if (st >= 1) row(H * 0.48, '1 µm', '500 Hz', '2 ms', ORANGE);
        if (st >= 2) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.56, W * 0.76, H * 0.15, H * 0.04); ctx.stroke();
          mathText(ctx, '× 1000 faster', W / 2, H * 0.67, H * 0.085, { family: FONT.mono, weight: 700, color: ORANGE, align: 'center' });
        }
        if (st >= 3) {
          mathText(ctx, 'smaller system →', W * 0.06, H * 0.82, H * 0.065, { family: FONT.sans, weight: 600, color: INK });
          mathText(ctx, 'shorter response time', W * 0.06, H * 0.9, H * 0.065, { family: FONT.sans, weight: 600, color: INK });
        }
        ctx.fillStyle = '#a39a91'; ctx.font = `500 ${H * 0.036}px ${FONT.mono}`; ctx.fillText('book rounds 1 µm to ~1 kHz, 1 ms', W * 0.06, H * 0.97);
      }), 0.3, 2.15, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('why', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [0.6, L(1), L(3)]));
      f.position.y = 2.15 + wobble(lt, 0.4, 0.02);
    },
  },

  // 6 ── RECAP (cream) ──────────────────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1 · 2', items: [['ν = (1/2π)√(g/l)', 'Eq. 5.1'], ['1 m pendulum', '0.5 Hz'], ['its period', '2 s'], ['1 µm pendulum', '500 Hz'], ['its period', '2 ms'], ['response', '× 1000']] }), 0.3, 2.05, 0); group.add(s);
      return { s };
    },
    update({ s }, lt) {
      popIn(s, lt, 0.15, 0.5);
      s.stage(summaryTicks(lt, B_('recap', 1), B_('recap', 2)));
      s.position.y = 2.05 + wobble(lt, 0.4, 0.02);
    },
  },

  // 7 ── TAKEAWAY (cream, fade) ─────────────────────────────────────────────────
  {
    id: 'outro', ...T_('outro'), env: 'cream', zoom: 1.2, enter: { type: 'fade', dur: 0.4 },
    camera: lt => ({ pos: [0, 3.5, 13.2 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot(), 0.6, 0.22, 0.3); group.add(bot);
      const pd = P(pendulum({ len: 1.0, bob: 0.16 }), -1.3, 2.2, 0.6); group.add(pd);
      const p1 = P(pill('smaller', { bg: '#efe9e2', fg: '#5d554e', h: 0.5, size: 0.45 }), -0.85, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('faster', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 1.0, 3.3, 0.9); group.add(p2);
      return { bot, pd, p1, p2 };
    },
    update({ bot, pd, p1, p2 }, lt) {
      pd.setAngle(0.3 * Math.sin(lt * 2 * Math.PI * 2.5));
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy', turn: -0.3 });
    },
  },
];

export default {
  title: 'Shrink a Pendulum',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the formulas on screen.
Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 2]] },
  captions,
  scenes,
};

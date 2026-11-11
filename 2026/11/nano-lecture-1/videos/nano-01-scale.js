// Nanoscience lecture 1 · video 1: micro to nano (10⁻⁶ vs 10⁻⁹), the size ladder, smartphones, the 1–100 nm definition.
// Sources: Chattopadhyay & Banerjee Ch. 5 §5.1 p. 72 and Fig. 5.1 p. 73; Ch. 1 §1.2 p. 2;
//          Kulkarni preface (1–100 nm, Box 2 prefixes, Box 4 CdS colour vs size).
import voice from './nano-01-scale.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { chip as chipProp } from '../props/electronics.js';
import { mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { pill, rbox, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };
// mathText does subscripts only: draw "pre 10^exp post" with a raised exponent. Returns the width.
function pow(ctx, pre, exp, post, x, y, px, o = {}) {
  const f = (k) => `${o.italic ? 'italic ' : ''}${o.weight || 500} ${k}px ${o.family || FONT.mono}`;
  ctx.font = f(px); const a = ctx.measureText(pre).width, c = ctx.measureText(post).width;
  ctx.font = f(px * 0.62); const b = ctx.measureText(exp).width;
  const w = a + b + c; let cx = o.align === 'right' ? x - w : o.align === 'center' ? x - w / 2 : x;
  ctx.textAlign = 'left'; ctx.fillStyle = o.color || INK;
  ctx.font = f(px); ctx.fillText(pre, cx, y); cx += a;
  ctx.font = f(px * 0.62); ctx.fillText(exp, cx, y - px * 0.42); cx += b;
  ctx.font = f(px); ctx.fillText(post, cx, y);
  return w;
}

const LINES = [
  ['hook', 'Your phone packs in'],
  [0, '[billions] of transistors.'],
  [0, 'How did it get [so small?]'],
  ['ratio', 'Start with two [prefixes.]'],
  [0, 'Micro is a [millionth]'],
  [0, 'of a metre.'],
  [0, 'Nano is a [billionth.]'],
  [0, 'Divide one by the other:'],
  [0, 'nano is [a thousand times]'],
  [0, 'smaller than micro.'],
  ['ladder', 'Now walk down the [ladder.]'],
  [0, 'A hair: [50 microns.]', 'A hair: fifty microns.'],
  [0, 'A blood cell: [five microns.]'],
  [0, 'Below one micron,'],
  [0, 'the [nano world] begins.'],
  [0, 'A virus: [20 nanometers.]', 'A virus: twenty nanometers.'],
  [0, 'DNA: about [two nanometers.]'],
  ['phone', 'Best example: [your phone.]'],
  [0, 'Computers once filled'],
  [0, 'whole [buildings.]'],
  [0, 'Now they fit a [pocket,]'],
  [0, 'because chip parts shrank'],
  [0, 'from micro to [nano] size.'],
  ['define', 'So what counts as [nano?]'],
  [0, 'At least [one dimension]'],
  [0, 'of [1 to 100 nanometers,]', 'of one to a hundred nanometers,'],
  [0, 'and properties that'],
  [0, '[change with size.]'],
  [0, 'Shrink a CdS crystal:', 'Shrink a C D S crystal:'],
  [0, 'red, orange, then [yellow.]'],
  ['recap', 'Quick [recap:]'],
  [0, 'micro, nano, ladder,'],
  [0, 'phone, range, [colour.]'],
  ['outro', 'Smaller [size,]'],
  [0, '[new physics.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

// size ladder: [label, size text, log10(metres)] (Fig. 5.1)
const RUNGS = [
  ['pin head', '1 mm', -3], ['human hair', '50 µm', -4.3], ['red blood cell', '5 µm', -5.3],
  ['virus', '20 nm', -7.7], ['nanotube', '2–5 nm', -8.5], ['DNA width', '2 nm', -8.7],
];

// a smartphone made of clay: body + dark screen + a chip glowing on it
function phone() {
  const g = rbox(1.15, 2.1, 0.14, 0.16, clay('#6b625b', { rough: 0.4 }));
  const scr = P(rbox(1.0, 1.85, 0.03, 0.1, clay('#14110f', { emissive: '#1d3a52', emissiveIntensity: 0.35 })), 0, 0, 0.075); g.add(scr);
  const c = chipProp(); c.scale.setScalar(0.2); c.rotation.x = Math.PI / 2; P(c, 0, 0.05, 0.12); g.add(c);
  const halo = P(glowSprite('#7fd3ff', 1.6, 0), 0, 0.05, 0.2); g.add(halo);
  g.setGlow = k => (halo.material.opacity = k);
  return g;
}

const scenes = [
  // 1 ── HOOK (cream): robot and a phone, "billions" pill ────────────────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.15, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.4 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.9 }), -0.85, 0.22, 0.2); group.add(bot);
      const ph = P(phone(), 1.05, 1.55, 0.6); group.add(ph);
      const b1 = P(pill('billions of switches', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 0.4, 3.35, 0.9); group.add(b1);
      const b2 = P(pill('how so small?', { bg: '#efe9e2', fg: '#5d554e', h: 0.44, size: 0.44 }), 0.6, 0.45, 1.3); group.add(b2);
      return { bot, ph, b1, b2 };
    },
    update({ bot, ph, b1, b2 }, lt) {
      const L = k => B_('hook', k);
      popIn(ph, lt, 0.3, 0.5); ph.setGlow(0.5 * prog(lt, L(1), 0.6));
      ph.position.y = 1.55 + wobble(lt, 0.5, 0.05); ph.rotation.y = -0.25 + Math.sin(lt * 0.8) * 0.12;
      popIn(b1, lt, L(1) + 0.2, 0.45); popIn(b2, lt, L(2) + 0.2, 0.45);
      bot.set(lt, { mood: lt < L(1) ? 'smile' : lt < L(2) ? 'surprised' : 'think', turn: 0.35, talk: lt < 0.9 });
    },
  },

  // 2 ── RATIO (dark): micro = 10⁻⁶ m, nano = 10⁻⁹ m, ratio = 10³ ───────────────
  {
    id: 'ratio', ...T_('ratio'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.6 - lt * 0.1], look: [0.3, 1.95, 0], fov: 33 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.6, h: 2.7, d: 0.12, r: 0.1, color: '#f2eee8' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.fillText('TWO PREFIXES', W * 0.05, H * 0.1);
        const px = H * 0.1;
        if (st >= 1) {
          mathText(ctx, 'micro  µ', W * 0.06, H * 0.27, px, { family: FONT.mono, weight: 700, color: BLUE });
          pow(ctx, '= 10', '−6', ' m', W * 0.94, H * 0.27, px, { ...serif, color: INK, align: 'right' });
        }
        if (st >= 2) {
          mathText(ctx, 'nano  n', W * 0.06, H * 0.45, px, { family: FONT.mono, weight: 700, color: ORANGE });
          pow(ctx, '= 10', '−9', ' m', W * 0.94, H * 0.45, px, { ...serif, color: INK, align: 'right' });
        }
        if (st >= 3) {
          ctx.fillStyle = '#e4ddd5'; ctx.fillRect(W * 0.05, H * 0.53, W * 0.9, 3);
          pow(ctx, '10', '−6', '', W * 0.27, H * 0.66, px * 0.95, { ...serif, align: 'center' });
          ctx.fillStyle = INK; ctx.fillRect(W * 0.15, H * 0.69, W * 0.24, 4);
          pow(ctx, '10', '−9', '', W * 0.27, H * 0.79, px * 0.95, { ...serif, align: 'center' });
          pow(ctx, '=  10', '3', '  = 1000', W * 0.45, H * 0.74, px * 1.05, { ...serif });
        }
        if (st >= 4) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.014; ctx.beginPath(); ctx.roundRect(W * 0.1, H * 0.83, W * 0.8, H * 0.14, H * 0.04); ctx.stroke();
          mathText(ctx, '1 µm = 1000 nm', W / 2, H * 0.93, px * 0.9, { family: FONT.mono, weight: 700, color: ORANGE, align: 'center' });
        }
      }), 0.3, 2.2, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('ratio', k);
      popIn(f, lt, 0.2, 0.5);
      f.stage(steps(lt, [L(1), L(3), L(4), L(5)]));
      f.position.y = 2.2 + wobble(lt, 0.4, 0.02);
    },
  },

  // 3 ── LADDER (cream): log size ladder from 1 mm to 1 nm, micro and nano bands ─
  {
    id: 'ladder', ...T_('ladder'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.9 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.4, h: 3.0, d: 0.1, r: 0.08, color: '#f7f4ef' }, (ctx, W, H, st) => {
        const top = H * 0.13, bot = H * 0.94, X = W * 0.3;
        const Y = lg => top + (-3 - lg) / 6 * (bot - top);          // 10⁻³ m at the top, 10⁻⁹ m at the bottom
        ctx.fillStyle = '#5d554e'; ctx.font = `700 ${H * 0.055}px ${FONT.mono}`; ctx.fillText('SIZE LADDER', W * 0.05, H * 0.07);
        ctx.fillStyle = 'rgba(47,123,176,0.14)'; ctx.fillRect(X - W * 0.05, Y(-4), W * 0.1, Y(-6) - Y(-4));
        if (st >= 4) { ctx.fillStyle = 'rgba(226,101,42,0.24)'; ctx.fillRect(X - W * 0.05, Y(-7), W * 0.1, Y(-9) - Y(-7)); }
        ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(X, top); ctx.lineTo(X, bot); ctx.stroke();
        for (let e = -3; e >= -9; e--) {
          const col = e === -6 || e === -9 ? INK : '#6f665e';
          ctx.fillStyle = col; ctx.fillRect(X - W * 0.03, Y(e) - 1.5, W * 0.06, 3);
          pow(ctx, '10', `−${-e}`, '', X - W * 0.06, Y(e) + H * 0.018, H * 0.052, { family: FONT.mono, weight: 700, color: col, align: 'right' });
        }
        ctx.save(); ctx.translate(W * 0.05, (Y(-4) + Y(-6)) / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.fillStyle = BLUE; ctx.font = `700 ${H * 0.045}px ${FONT.mono}`; ctx.fillText('MICRO', 0, 0); ctx.restore();
        if (st >= 4) { ctx.save(); ctx.translate(W * 0.05, (Y(-7) + Y(-9)) / 2); ctx.rotate(-Math.PI / 2); ctx.textAlign = 'center'; ctx.fillStyle = ORANGE; ctx.font = `700 ${H * 0.045}px ${FONT.mono}`; ctx.fillText('NANO', 0, 0); ctx.restore(); }
        const shown = [1, 2, 3, 3, 3, 5, 6][Math.max(0, Math.min(6, st))];
        ctx.textAlign = 'left';
        RUNGS.slice(0, shown).forEach(([name, size, lg]) => {
          const y = Y(lg), nano = lg < -6;
          ctx.fillStyle = nano ? ORANGE : INK; ctx.beginPath(); ctx.arc(X, y, H * 0.018, 0, Math.PI * 2); ctx.fill();
          ctx.font = `700 ${H * 0.056}px ${FONT.mono}`; ctx.fillText(size, X + W * 0.06, y + H * 0.018);
          ctx.fillStyle = '#4a423b'; ctx.font = `600 ${H * 0.05}px ${FONT.sans}`; ctx.fillText(name, X + W * 0.36, y + H * 0.017);
        });
      }), 0.3, 2.1, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('ladder', k);
      popIn(f, lt, 0.15, 0.5);
      // stage 0 pin head · 1 hair · 2 blood cell · 3 below a micron · 4 nano band · 5 virus + nanotube · 6 DNA
      f.stage(steps(lt, [L(1), L(2), L(3), L(4), L(5), L(6)]));
      f.position.y = 2.1 + wobble(lt, 0.4, 0.02);
    },
  },

  // 4 ── PHONE (dark): a building-sized computer shrinks into a phone ───────────
  {
    id: 'phone', ...T_('phone'), env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.2, 12.5 - lt * 0.12], look: [0.3, 1.7, 0], fov: 32 }),
    build({ group }) {
      const room = P(rbox(3.6, 2.4, 1.4, 0.12, clay('#8c8279')), 0.3, 1.25, -0.4); group.add(room);
      const lights = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 6; c++) { const s = P(glowSprite(r % 2 ? '#ffb46a' : '#7fd3ff', 0.22, 0.8), -1.4 + c * 0.55, -0.75 + r * 0.5, 0.72); room.add(s); lights.push(s); }
      const ph = P(phone(), 0.3, 1.45, 0.4); group.add(ph);
      const tag1 = P(pill('a building', { bg: '#3a312b', fg: '#d6cdc4', h: 0.44, size: 0.44 }), -0.8, 3.35, 0.9); group.add(tag1);
      const tag2 = P(pill('a pocket', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 1.4, 3.35, 0.9); group.add(tag2);
      const tag3 = P(pill('µm → nm parts', { bg: '#f2eee8', fg: '#2b241f', h: 0.46, size: 0.44 }), 0.3, 0.35, 1.4); group.add(tag3);
      return { room, lights, ph, tag1, tag2, tag3 };
    },
    update({ room, lights, ph, tag1, tag2, tag3 }, lt) {
      const L = k => B_('phone', k);
      const shrink = prog(lt, L(3) - 0.5, 1.2, ease.inOut);
      room.scale.setScalar(Math.max(0.001, pop(lt, L(1) - 0.2, 0.5) * (1 - shrink)));
      room.visible = shrink < 0.99;
      lights.forEach((s, i) => (s.material.opacity = 0.5 + 0.4 * Math.sin(lt * 6 + i * 1.7)));
      // the phone is shown first (hook callback), hides while the building is on screen, then returns small
      const first = lt < L(1) - 0.2 ? pop(lt, 0.15, 0.45) : 0;
      const back = prog(lt, L(3) + 0.3, 0.6, ease.back);
      ph.scale.setScalar(Math.max(0.001, Math.max(first, back)));
      ph.setGlow(0.55 * prog(lt, L(4), 0.6));
      ph.rotation.y = Math.sin(lt * 0.7) * 0.2;
      popIn(tag1, lt, L(2), 0.45); tag1.visible = shrink < 0.6;
      popIn(tag2, lt, L(3) + 0.5, 0.45);
      popIn(tag3, lt, L(5), 0.45);
    },
  },

  // 5 ── DEFINE (cream): the definition card + CdS colour dots ──────────────────
  {
    id: 'define', ...T_('define'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 2.8, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.fillText('NANOSCIENCE', W * 0.05, H * 0.1);
        const px = H * 0.072, sans = { family: FONT.sans, weight: 600, color: INK };
        if (st >= 1) mathText(ctx, '1. at least one dimension', W * 0.06, H * 0.24, px, sans);
        if (st >= 2) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.29, W * 0.76, H * 0.15, H * 0.04); ctx.stroke();
          mathText(ctx, '1 – 100 nm', W / 2, H * 0.4, px * 1.3, { family: FONT.mono, weight: 700, color: ORANGE, align: 'center' });
        }
        if (st >= 3) mathText(ctx, '2. its properties', W * 0.06, H * 0.55, px, sans);
        if (st >= 4) mathText(ctx, '    change with size', W * 0.06, H * 0.64, px, sans);
        if (st >= 5) {
          const dots = [['#c0392b', '6 nm', 0.1], ['#e67e22', '4 nm', 0.085], ['#f1c40f', '3 nm', 0.07], ['#f4f1e8', '2 nm', 0.055]];
          dots.slice(0, st >= 6 ? 4 : 1).forEach(([col, s, r], i) => {
            const x = W * (0.17 + i * 0.22), y = H * 0.79;
            ctx.fillStyle = col; ctx.strokeStyle = '#b9b0a6'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(x, y, H * r, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
            ctx.fillStyle = INK; ctx.font = `600 ${H * 0.045}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText(s, x, H * 0.95); ctx.textAlign = 'left';
          });
        }
      }), 0.3, 2.15, 0); group.add(f);
      const tag = P(pill('CdS: colour vs size', { bg: C.orange, fg: '#2a1408', h: 0.44, size: 0.42 }), 0.3, 0.3, 1.3); group.add(tag);
      return { f, tag };
    },
    update({ f, tag }, lt) {
      const L = k => B_('define', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(2), L(3), L(4), L(5), L(6)]));
      popIn(tag, lt, L(5) + 0.3, 0.45);
      f.position.y = 2.15 + wobble(lt, 0.4, 0.02);
    },
  },

  // 6 ── RECAP (cream): six ticks ──────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1', items: [['micro', '10⁻⁶ m'], ['nano', '10⁻⁹ m'], ['virus · DNA', '20 · 2 nm'], ['phone chips', 'µm → nm'], ['nano range', '1–100 nm'], ['CdS colour', 'red → yellow']] }), 0.3, 2.05, 0); group.add(s);
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
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const p1 = P(pill('smaller size', { bg: '#efe9e2', fg: '#5d554e', h: 0.5, size: 0.45 }), -0.95, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('new physics', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 1.0, 3.3, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Micro to Nano',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher introducing nanoscience to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the cards on screen.
Say "C D S" letter by letter. Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 1]] },
  captions,
  scenes,
};

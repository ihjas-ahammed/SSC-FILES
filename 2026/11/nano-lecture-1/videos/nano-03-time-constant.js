// Nanoscience lecture 1 · video 3: the thermal time constant shrinks as l², and the heated AFM tip that writes data.
// Source: Chattopadhyay & Banerjee Ch. 5 §5.2 (2) "Thermal time constant decreases in smaller systems",
//         pp. 73–74, Eqs. 5.2–5.6, Fig. 5.2(a); AFM data storage p. 74 and Fig. 5.2(b) p. 75.
import * as THREE from 'three';
import voice from './nano-03-time-constant.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { wire } from '../props/electronics.js';
import { readout, mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks, chip } from '../scenes/teach.js';
import { pow, afm } from '../props/custom/nano.js';
import { pill, sphere, cyl, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };

const LINES = [
  ['hook', 'A hot cup cools in [minutes.]'],
  [0, 'A hot [nanoparticle?]'],
  [0, 'In a [flash.] Why?'],
  ['setup', 'Picture a [hot body]'],
  [0, 'joined to a [cold one]'],
  [0, 'by a thin [channel.]'],
  [0, 'Heat flows down it,'],
  [0, 'and the hot body [cools.]'],
  ['law', 'Heat flow per second:'],
  [0, '[k a T over l.]'],
  [0, 'That heat is lost'],
  [0, 'by the body’s [C V.]'],
  [0, 'Equate and [integrate:]'],
  [0, 'T falls [exponentially.]'],
  ['tau', 'The time constant,'],
  [0, 'tau, is [LCV over KA.]', 'tau, is l C V over k a.'],
  [0, 'Volume goes as [l cubed,]'],
  [0, 'area as [l squared.]'],
  [0, 'So tau goes as [l squared.]'],
  [0, '[1,000] times smaller,', 'A thousand times smaller,'],
  [0, '[a million times] faster.'],
  ['afm', 'That’s why a hot [AFM tip]'],
  [0, 'can [write data.]'],
  [0, 'A current [heats the tip,]'],
  [0, 'and it writes a [bit.]'],
  [0, 'The tip is tiny,'],
  [0, 'so it heats and cools [fast,]'],
  [0, 'on [very little power.]'],
  [0, 'A PZT sensor [reads] bits.', 'A P Z T sensor reads bits.'],
  ['recap', 'Quick [recap:]'],
  [0, 'channel, flow, decay,'],
  [0, 'tau, l squared, [tip.]'],
  ['outro', 'Smaller [body,]'],
  [0, '[faster cooling.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

const HOT = new THREE.Color('#ff7a2e'), COLD = new THREE.Color('#9fb6c6');

const scenes = [
  // 1 ── HOOK (cream): a cup vs a nanoparticle ──────────────────────────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.15, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.4 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.8 }), 0, 0.22, -0.4); group.add(bot);
      const cup = P(cyl(0.45, 0.36, 0.85, clay('#efe9e2')), -1.15, 0.65, 0.7); group.add(cup);
      const tea = P(cyl(0.4, 0.4, 0.04, clay('#8a5a3a')), -1.15, 1.06, 0.7); group.add(tea);
      const steam = [0, 1, 2].map(i => { const s = P(glowSprite('#ffffff', 0.5, 0.5), -1.15 + (i - 1) * 0.2, 1.4, 0.7); group.add(s); return s; });
      const np = P(sphere(0.22, clay('#ff7a2e', { emissive: '#ff5a1a', emissiveIntensity: 0.6 })), 1.2, 1.2, 0.8); group.add(np);
      const p1 = P(pill('minutes', { bg: '#efe9e2', fg: '#5d554e', h: 0.44, size: 0.44 }), -1.1, 2.75, 1.0); group.add(p1);
      const p2 = P(pill('a flash', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 1.1, 2.75, 1.0); group.add(p2);
      return { bot, cup, tea, steam, np, p1, p2 };
    },
    update({ bot, cup, tea, steam, np, p1, p2 }, lt) {
      const L = k => B_('hook', k);
      popIn(cup, lt, 0.2, 0.45); popIn(tea, lt, 0.2, 0.45); popIn(p1, lt, 0.9, 0.4);
      steam.forEach((s, i) => { const u = (lt * 0.4 + i / 3) % 1; s.position.y = 1.3 + u * 1.0; s.material.opacity = 0.5 * (1 - u) * prog(lt, 0.3, 0.5); });
      popIn(np, lt, L(1), 0.45);
      const cool = prog(lt, L(2) + 0.2, 0.25, ease.linear);
      np.material.color.lerpColors(HOT, COLD, cool); np.material.emissiveIntensity = 0.6 * (1 - cool);
      popIn(p2, lt, L(2) + 0.3, 0.45);
      bot.set(lt, { mood: lt < L(1) ? 'smile' : lt < L(2) ? 'think' : 'surprised', look: [lt < L(1) ? -0.6 : 0.6, -0.2] });
    },
  },

  // 2 ── SETUP (dark): hot body → channel → cold body (Fig. 5.2a), T readout decays
  {
    id: 'setup', ...T_('setup'), env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 3.2, 12.5 - lt * 0.1], look: [0.2, 1.7, 0], fov: 32 }),
    build({ group }) {
      const hot = P(sphere(0.75, clay('#ff7a2e', { emissive: '#ff5a1a', emissiveIntensity: 0.5, rough: 0.5 })), -1.4, 2.4, 0); group.add(hot);
      const cold = P(sphere(0.75, clay('#6f8ea3', { rough: 0.5 })), 1.7, 0.9, 0); group.add(cold);
      const ch = wire([[-0.85, 2.0, 0], [0.4, 1.45, 0], [1.15, 1.15, 0]], { radius: 0.14, color: '#8c8279', electrons: 8, eColor: '#ffb46a' }); group.add(ch);
      const tH = P(pill('T > 0 K', { bg: C.orange, fg: '#2a1408', h: 0.42, size: 0.42 }), -1.4, 3.5, 0.8); group.add(tH);
      const tC = P(pill('T = 0 K', { bg: '#cfe0ea', fg: '#1d3a52', h: 0.42, size: 0.42 }), 1.7, 2.05, 0.8); group.add(tC);
      const lab = P(pill('length l · area a', { bg: '#3a312b', fg: '#d6cdc4', h: 0.4, size: 0.4 }), 0.0, 0.45, 1.2); group.add(lab);
      const rd = P(readout({ label: 'T', unit: 'K', w: 1.7, digits: 0 }), 1.3, 3.45, 0.6); group.add(rd);
      return { hot, cold, ch, tH, tC, lab, rd };
    },
    update({ hot, cold, ch, tH, tC, lab, rd }, lt) {
      const L = k => B_('setup', k);
      popIn(hot, lt, 0.1, 0.5); popIn(tH, lt, 0.5, 0.4);
      popIn(cold, lt, L(1), 0.5); popIn(tC, lt, L(1) + 0.4, 0.4);
      popIn(ch, lt, L(2), 0.5); popIn(lab, lt, L(2) + 0.4, 0.4);
      ch.setFlow(lt, 0.25, prog(lt, L(3), 0.5));
      const decay = lt < L(3) ? 1 : Math.exp(-(lt - L(3)) / 1.6);
      hot.material.color.lerpColors(COLD, HOT, decay); hot.material.emissiveIntensity = 0.5 * decay;
      popIn(rd, lt, L(3) + 0.2, 0.4); rd.show(300 * decay);
    },
  },

  // 3 ── LAW (cream): Eqs. 5.2–5.6 build up to T = T₀ e^(−t/τ) ─────────────────
  {
    id: 'law', ...T_('law'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.9 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 3.0, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.054}px ${FONT.mono}`; ctx.fillText('EQS. 5.2 – 5.6', W * 0.05, H * 0.09);
        const px = H * 0.095, o = { ...serif, color: INK }, oo = { ...serif, color: ORANGE };
        // 5.2 heat flow  dΘ/dt = k a T / l
        mathFrac(ctx, 'dΘ', 'dt', W * 0.2, H * 0.2, px, o);
        mathText(ctx, '=', W * 0.34, H * 0.235, px, o);
        mathFrac(ctx, 'k_{Th} a T', 'l', W * 0.6, H * 0.2, px, st >= 1 ? oo : o);
        if (st >= 2) { // 5.3 loss  = −C V dT/dt
          mathText(ctx, '= − C V', W * 0.2, H * 0.445, px, st >= 3 ? oo : o);
          mathFrac(ctx, 'dT', 'dt', W * 0.62, H * 0.41, px, o);
        }
        if (st >= 4) { // 5.5
          ctx.fillStyle = '#e4ddd5'; ctx.fillRect(W * 0.05, H * 0.52, W * 0.9, 3);
          mathFrac(ctx, 'dT', 'T', W * 0.18, H * 0.63, px, o);
          mathText(ctx, '= −', W * 0.3, H * 0.665, px, o);
          mathFrac(ctx, 'k_{Th} a', 'l C V', W * 0.58, H * 0.63, px, o);
          mathText(ctx, 'dt', W * 0.78, H * 0.665, px, o);
        }
        if (st >= 5) { // 5.6
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.78, W * 0.76, H * 0.17, H * 0.04); ctx.stroke();
          pow(ctx, 'T = T₀ e', '−t/τ', '', W / 2, H * 0.9, px * 1.25, { ...serif, color: ORANGE, align: 'center' });
        }
      }), 0.3, 2.05, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('law', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(2), L(3), L(4), L(5)]));
      f.position.y = 2.05 + wobble(lt, 0.4, 0.02);
    },
  },

  // 4 ── TAU (dark): τ = lCV/(k a), V ∝ l³, a ∝ l² → τ ∝ l² ─────────────────────
  {
    id: 'tau', ...T_('tau'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.6 - lt * 0.08], look: [0.3, 1.95, 0], fov: 33 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.6, h: 2.9, d: 0.12, r: 0.1, color: '#f2eee8' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.056}px ${FONT.mono}`; ctx.fillText('THERMAL TIME CONSTANT', W * 0.05, H * 0.09);
        const px = H * 0.12, o = { ...serif, color: INK };
        mathText(ctx, 'τ_{th} =', W * 0.1, H * 0.3, px * 1.1, { ...serif, color: ORANGE });
        mathFrac(ctx, 'l C V', 'k_{Th} a', W * 0.6, H * 0.25, px, o);
        if (st >= 1) pow(ctx, 'V ∝ l', '3', '', W * 0.08, H * 0.52, px * 0.9, o);
        if (st >= 2) pow(ctx, 'a ∝ l', '2', '', W * 0.55, H * 0.52, px * 0.9, o);
        if (st >= 3) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.57, W * 0.76, H * 0.16, H * 0.04); ctx.stroke();
          pow(ctx, 'τ ∝ l · l', '3', ' / l² = l²', W / 2, H * 0.69, px * 0.8, { ...serif, color: ORANGE, align: 'center' });
        }
        if (st >= 4) mathText(ctx, 'l ÷ 1000', W * 0.08, H * 0.88, px * 0.85, { family: FONT.mono, weight: 700, color: BLUE });
        if (st >= 5) {
          mathText(ctx, '→', W * 0.47, H * 0.88, px * 0.85, { family: FONT.sans, weight: 600, color: INK });
          pow(ctx, 'τ ÷ 10', '6', '', W * 0.92, H * 0.88, px * 0.85, { family: FONT.mono, weight: 700, color: ORANGE, align: 'right' });
        }
      }), 0.3, 2.15, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('tau', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(2), L(3), L(4), L(5), L(6)]));
      f.position.y = 2.15 + wobble(lt, 0.4, 0.02);
    },
  },

  // 5 ── AFM (cream): heated tip writes bits, laser + detector, PZT reads ────────
  {
    id: 'afm', ...T_('afm'), env: 'cream', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.6, 3.6 - lt * 0.03, 11.5 - lt * 0.05], look: [0.2, 1.5, 0], fov: 32 }),
    build({ group }) {
      const a = P(afm(), 0, 0, 0); group.add(a);
      a.tip.material.emissive.set('#ff6a1a');
      const bits = Array.from({ length: 7 }, () => { const b = P(cyl(0.08, 0.08, 0.03, clay('#2b241f')), 0.45, 0.35, 0); b.visible = false; group.add(b); return b; });
      const chips = [chip('heat', -1.15, 0.24, 1.7), chip('write', 0.1, 0.24, 1.7), chip('read', 1.35, 0.24, 1.7)];
      chips.forEach(c => group.add(c));
      const note = P(pill('tiny tip = fast, low power', { bg: C.orange, fg: '#2a1408', h: 0.44, size: 0.4 }), 0.25, 3.75, 0.8); group.add(note);
      return { a, bits, chips, note };
    },
    update({ a, bits, chips, note }, lt) {
      const L = k => B_('afm', k);
      popIn(a, lt, 0.1, 0.5);
      // the sample scans under a fixed tip: the bit row slides left, a new bit appears under the tip each pulse
      const writing = lt >= L(2) && lt < L(5);
      const k = prog(lt, L(2), L(5) - L(2), ease.linear);
      const pulse = writing ? 0.5 + 0.5 * Math.max(0, Math.sin(k * Math.PI * 12)) : lt < L(2) ? prog(lt, L(2) - 0.6, 0.5) * 0.6 : 0;
      a.setHeat(pulse);
      bits.forEach((b, i) => { b.position.x = 0.45 + i * 0.22 - k * 1.32; b.visible = lt >= L(2) && k * 1.32 >= i * 0.22 - 0.01; });
      a.setBeam(prog(lt, L(7), 0.5));
      chips[0].set(lt >= L(2)); chips[1].set(lt >= L(3)); chips[2].set(lt >= L(7));
      chips.forEach((c, i) => popIn(c, lt, 0.2 + i * 0.1, 0.35));
      popIn(note, lt, L(5) + 0.3, 0.45);
    },
  },

  // 6 ── RECAP (cream) ──────────────────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1 · 3', items: [['hot → cold channel', 'Fig. 5.2a'], ['heat flow', 'k a T / l'], ['T decays', 'T₀ e^(−t/τ)'], ['τ = lCV / k a', 'Eq. 5.6'], ['τ scales as', 'l²'], ['heated AFM tip', 'writes bits']] }), 0.3, 2.05, 0); group.add(s);
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
      const p1 = P(pill('smaller', { bg: '#efe9e2', fg: '#5d554e', h: 0.5, size: 0.45 }), -1.0, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('cools faster', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 1.05, 3.3, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Thermal Time Constant',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the equations on screen.
Say "k a T over l" and "l C V over k a" letter by letter. Say "P Z T" letter by letter. Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 3]] },
  captions,
  scenes,
};

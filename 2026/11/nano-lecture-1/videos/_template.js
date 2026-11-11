// TEMPLATE — copied to videos/NAME.js by scripts/init.sh. Replace every FILL comment.
// A working 6-scene video: plinth hook → dark "problem" pedestal → robot explains with a card →
// numbered steps (plugs) → flow (wire with electrons) → two-word outro. No branding, no sign-off.
//
// TIMING RULES (design time, before the voice exists):
//   caption `at`: next line at = previous at + 0.32 s × (words in previous line) + 0.4 s
//   scene start = `at` of its first caption line (first scene starts at 0); scene end = next scene start
//   duration = last caption `at` + 2.5 s; the last scene ends at duration
//   inside update(), lt = seconds since the scene started (design time). Animate on caption beats:
//   if a line starts 1.2 s into the scene, pop its prop at lt ≈ 1.2.
import voice from './NAME.voice.js'; // written by: node tools/voice.mjs align NAME <audio>
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { bubble, tableCard } from '../props/ui.js';
import { bulb, battery, wire } from '../props/electronics.js';
import { pedestalScene, plugScene } from '../scenes/templates.js';
import { pill, card, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, inv } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const STEPS = ['step one', 'step two', 'step three']; // FILL: labels printed on the power strip

const scenes = [
  // 1 ── HOOK (cream): robot on a plinth, two speech bubbles ─────────────────────
  {
    id: 'hook', start: 0, end: 3.6, env: 'cream', zoom: 1.1, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.6, 13.5 - lt * 0.3], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const b1 = P(bubble('FILL short'), -0.75, 2.85, 1.0); // bubble text ≤ 16 characters group.add(b1);
      const b2 = P(bubble('FILL short'), 0.75, 3.35, 0.8); group.add(b2);
      return { bot, b1, b2 };
    },
    update({ bot, b1, b2 }, lt) {
      popIn(b1, lt, 0.5); popIn(b2, lt, 1.2);
      bot.set(lt, { mood: lt < 2.0 ? 'neutral' : 'think', talk: lt > 2.4 && lt < 3.0 });
    },
  },

  // 2 ── PROBLEM (dark): one pedestal turns pink + "blocked" badge ───────────────
  { id: 'problem', start: 3.6, end: 6.0, ...pedestalScene('FILL label', 'database', { alertAt: 0.6 }), enter: WHIP, exit: WHIP_OUT },

  // 3 ── EXPLAIN (cream): robot left, a floating card right ──────────────────────
  {
    id: 'explain', start: 6.0, end: 10.4, env: 'cream', enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.4, 2.9, 13.2 - lt * 0.2], look: [0.4, 1.95, 0], fov: 33 }),
    build({ group }) {
      const bot = P(robot(), -1.35, 0, 0.6); group.add(bot);
      const info = P(card({ w: 2.3, h: 1.5, d: 0.1, r: 0.08, color: '#f2eee8', draw: (ctx, W, H) => {
        ctx.fillStyle = '#2b241f'; ctx.font = `600 ${H * 0.13}px ${FONT.sans}`; ctx.fillText('FILL: card title', W * 0.07, H * 0.22);
        ctx.fillStyle = '#7d746c'; ctx.font = `500 ${H * 0.08}px ${FONT.mono}`;
        ['FILL: fact one', 'FILL: fact two', 'FILL: fact three'].forEach((s, i) => ctx.fillText('• ' + s, W * 0.07, H * (0.45 + i * 0.17)));
      } }), 0.95, 2.5, 0.2); group.add(info);
      const tag = P(pill('FILL: key idea', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 1.1, 1.2, 0.8); group.add(tag);
      return { bot, info, tag };
    },
    update({ bot, info, tag }, lt) {
      popIn(info, lt, 0.4); popIn(tag, lt, 2.2, 0.4);
      info.position.y = 2.5 + wobble(lt, 0.4, 0.04);
      bot.set(lt, { mood: lt < 1.0 ? 'surprised' : lt < 2.2 ? 'think' : 'smile', turn: 0.35, talk: lt > 0.2 && lt < 0.9 });
    },
  },

  // 4 ── STEPS (dark): numbered plug N plugs into its labelled socket ────────────
  { id: 'step-1', start: 10.4, end: 12.6, ...plugScene(1, 'FILL Name', { labels: STEPS, nameAt: 0.6, plugAt: 0.9 }), enter: WHIP, exit: WHIP_OUT },
  { id: 'step-2', start: 12.6, end: 14.8, ...plugScene(2, 'FILL Name', { labels: STEPS, nameAt: 0.6, plugAt: 0.9 }), enter: WHIP, exit: WHIP_OUT },

  // 5 ── FLOW (dark): battery → wire with flowing dots → bulb lights up ──────────
  {
    id: 'flow', start: 14.8, end: 18.6, env: 'dark', zoom: 1.3, enter: WHIP, exit: { type: 'fade', dur: 0.3 },
    camera: lt => ({ pos: [0.3, 3.2, 12.5 - lt * 0.3], look: [0.3, 1.6, 0], fov: 32 }),
    build({ group }) {
      const src = P(battery(), -1.7, 0, 0); group.add(src);
      const bl = P(bulb(), 1.7, 0, 0); bl.scale.setScalar(1.3); group.add(bl);
      const w = wire([[-1.7, 1.86, 0], [-1.7, 2.9, 0], [-0.6, 3.3, 0], [1.0, 3.25, 0], [2.6, 2.6, 0], [2.75, 0.8, 0.1], [2.2, 0.06, 0.5], [0.6, 0.06, 0.8], [-1.2, 0.06, 0.8], [-1.7, 0.06, 0.55]], { electrons: 22 });
      group.add(w);
      return { bl, w };
    },
    update({ bl, w }, lt) {
      w.setFlow(lt, 0.09, prog(lt, 0.4, 0.8, ease.linear));
      bl.setOn(prog(lt, 0.9, 0.5));
    },
  },

  // 6 ── OUTRO (cream): two pills with the two-word takeaway. Ends on the idea, no sign-off.
  {
    id: 'outro', start: 18.6, end: 22.5, env: 'cream', zoom: 1.12, enter: { type: 'fade', dur: 0.4 },
    camera: lt => ({ pos: [0, 3.5, 13.2 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const p1 = P(pill('FILL one', { bg: '#efe9e2', fg: '#9b9289', h: 0.5, size: 0.45 }), -0.95, 3.3, 0.9); // pill text ≤ 10 characters group.add(p1);
      const p2 = P(pill('FILL two', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 0.95, 3.3, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, 1.6, 0.4);
      bot.set(lt, { mood: lt < 1.6 ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'FILL: video title',
  width: 720, height: 1280, fps: 30, duration: 22.5,
  ...(voice || {}), retime: true,
  // voiceStyle: 'optional: describe the voice for the generator prompt',
  hud: { left: '// FILL topic', counterLabel: 'STEP', total: 2, counter: [[0, 0], [11.4, 1], [13.6, 2]] }, // or hud: false
  captions: [
    // [word] = orange box · {word} = red box · say: '…' = how the line is spoken (numbers, symbols)
    { at: 0.0, text: 'FILL: everyone thinks' }, { at: 1.4, text: '[FILL topic] is hard.' },
    { at: 3.7, text: 'FILL: but here is' }, { at: 4.9, text: 'the {real problem.}' },
    { at: 6.1, text: 'FILL: it is really' }, { at: 7.4, text: 'just [one idea.]' }, { at: 8.9, text: 'FILL: explained simply.' },
    { at: 10.5, text: 'Step one: [FILL.]' },
    { at: 12.7, text: 'Step two: [FILL.]' },
    { at: 14.9, text: 'FILL: and then' }, { at: 16.2, text: 'it all [lights up.]' },
    { at: 18.7, text: '[FILL one] is this.' }, { at: 20.0, text: '[FILL two] is that.' },
  ],
  scenes,
};

// "Electricity vs Electronics — the transistor is the difference."
// EXAMPLE (voiced). Caption `at`s are design times; `retime` maps them onto the voiceover.
import * as THREE from 'three';
import voice from './example-transistors.voice.js'; // written by: node tools/voice.mjs align example-transistors <audio>
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { nameplate } from '../props/connectors.js';
import { bubble } from '../props/ui.js';
import { pedestal } from '../props/pedestal.js';
import { battery, bulb, wire, transistor, chip, fan, heater, dial, bitTile } from '../props/electronics.js';
import { pill, rbox, clay, glowSprite, C } from '../engine/geo.js';
import { prog, pop, ease, wobble, inv, lerp, fadeWin, rng } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const scenes = [
  // ── A. "Everyone says electricity and electronics like they're the same." ──
  {
    id: 'same-thing', start: 0, end: 4.4, env: 'cream', zoom: 1.12, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.6 - lt * 0.1, 13.5 - lt * 0.35], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bat = P(battery(), -1.45, 0.22, 0.2); group.add(bat);
      const ch = P(chip(), 1.5, 0.22, 0.2); ch.scale.setScalar(0.45); group.add(ch);
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const b1 = P(bubble('electricity'), -1.0, 2.85, 1.0); group.add(b1);
      const b2 = P(bubble('electronics'), 1.0, 3.35, 0.8); group.add(b2);
      const eq = P(pill('=', { bg: C.orange, fg: '#2a1408', h: 0.42, size: 0.7, font: "'Manrope'", weight: 800 }), 0, 3.55, 1.3); group.add(eq);
      return { bat, ch, bot, b1, b2, eq };
    },
    update({ bot, b1, b2, eq, ch }, lt) {
      popIn(b1, lt, 0.7); popIn(b2, lt, 1.45); popIn(eq, lt, 2.3, 0.4);
      const no = inv(3.4, 3.7, lt);
      if (no > 0) { eq.scale.multiplyScalar(1 - no + 0.001); }
      b1.position.y = 2.85 + wobble(lt, 0.5, 0.05); b2.position.y = 3.35 + wobble(lt, 0.5, 0.05, 2);
      ch.rotation.y = lt * 0.3;
      const shake = lt > 3.4 && lt < 4.1 ? Math.sin((lt - 3.4) * 22) * 0.25 * (1 - inv(3.4, 4.1, lt)) : 0;
      bot.set(lt, { mood: lt < 2.3 ? 'neutral' : lt < 3.4 ? 'think' : 'squint', turn: shake, talk: lt > 3.4 && lt < 3.9 });
    },
  },

  // ── B. Electricity = energy moving: battery → wire → bulb ───────────────────
  {
    id: 'electricity', start: 4.4, end: 9.2, env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3 - lt * 0.1, 3.2, 12.5 - lt * 0.3], look: [0.3, 1.6, 0], fov: 32 }),
    build({ group }) {
      const bat = P(battery(), -1.7, 0, 0); group.add(bat);
      const bl = P(bulb(), 1.7, 0, 0); bl.scale.setScalar(1.3); group.add(bl);
      const w = wire([[-1.7, 1.86, 0], [-1.7, 2.9, 0], [-0.6, 3.3, 0], [1.0, 3.25, 0], [2.6, 2.6, 0], [2.75, 0.8, 0.1], [2.2, 0.06, 0.5], [0.6, 0.06, 0.8], [-1.2, 0.06, 0.8], [-1.7, 0.06, 0.55]], { electrons: 22 });
      group.add(w);
      return { bl, w };
    },
    update({ bl, w }, lt) {
      const on = prog(lt, 0.9, 0.5);
      w.setFlow(lt, 0.09, prog(lt, 0.6, 0.8, ease.linear));
      bl.setOn(on * (0.9 + 0.1 * Math.sin(lt * 20)));
    },
  },

  // ── C. A bulb, a heater, a fan: they just USE it ─────────────────────────────
  {
    id: 'just-use-it', start: 9.2, end: 13.2, env: 'cream', zoom: 1.05, enter: WHIP, exit: WHIP_OUT,
    camera: lt => { const x = lerp(-0.8, 0.8, prog(lt, 0.0, 2.2, ease.inOut)); return { pos: [x, 3.0, 13.5], look: [x, 1.8, 0], fov: 32 }; },
    build({ group }) {
      const items = [P(bulb(), -2.0, 0, 0), P(heater(), 0, 0, 0), P(fan(), 2.1, 0, 0)];
      items[0].scale.setScalar(1.25);
      items.forEach(i => group.add(i));
      const blast = P(pill('100% · always', { bg: '#efe9e2', fg: '#9b9289', h: 0.5, size: 0.4 }), 0, 0.45, 1.4); group.add(blast);
      const bad = P(pill('no brain', { bg: '#ec6f69', fg: '#ffe7e3', h: 0.5, size: 0.48 }), 1.2, 3.3, 0.8); group.add(bad);
      return { items, blast, bad };
    },
    update({ items, blast, bad }, lt) {
      [0.1, 0.7, 1.3].forEach((t0, i) => { const k = items[i]; const s = pop(lt, t0, 0.45); k.scale.setScalar(Math.max(0.001, s * (i === 0 ? 1.25 : 1))); });
      items[0].setOn(prog(lt, 0.3, 0.3));
      items[1].setOn(prog(lt, 0.9, 0.4));
      items[2].spin(Math.max(0, lt - 1.4) * 22);
      popIn(blast, lt, 2.0, 0.4); popIn(bad, lt, 3.0, 0.4);
    },
  },

  // ── D. Electronics CONTROLS it: when, where, how much ───────────────────────
  {
    id: 'control', start: 13.2, end: 17.6, env: 'dark', zoom: 1.35, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 3.6, 12.2 - lt * 0.3], look: [0.3, 1.7, 0], fov: 32 }),
    build({ group }) {
      const bot = P(robot(), -1.5, 0, 0.8); group.add(bot);
      const d = P(dial(), 0.15, 0, 1.6); d.scale.setScalar(0.9); group.add(d);
      const bl = P(bulb(), 1.75, 0, -0.3); bl.scale.setScalar(1.35); group.add(bl);
      const tags = ['when', 'where', 'how much'].map((t, i) => { const p = P(pill(t, { bg: '#2b2521', fg: '#f4a576', h: 0.46, size: 0.45 }), 1.2, 3.9 - i * 0.62, 0.6); group.add(p); return p; });
      return { bot, d, bl, tags };
    },
    update({ bot, d, bl, tags }, lt) {
      // dial sweeps through levels; bulb follows the dial
      const v = lt < 0.8 ? 0 : 0.5 + 0.5 * Math.sin((lt - 0.8) * 1.9 - Math.PI / 2);
      d.set(v); bl.setOn(v);
      [1.6, 2.2, 2.7].forEach((t0, i) => popIn(tags[i], lt, t0, 0.4));
      bot.set(lt, { mood: lt < 0.8 ? 'neutral' : lt < 2.6 ? 'think' : 'smile', glasses: true, turn: 0.35, look: [0.6, -0.4] });
    },
  },

  // ── E. The trick: one tiny switch — the transistor (C, B, E) ────────────────
  {
    id: 'transistor', start: 17.6, end: 22.6, env: 'dark', zoom: 1.55, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.6 - lt * 0.12, 3.0, 10.5 - lt * 0.3], look: [0.2, 2.0, 0], fov: 32 }),
    build({ group }) {
      const ped = P(pedestal(''), 0, 0, 0); ped.scale.set(0.8, 0.4, 0.8); group.add(ped);
      const tr = P(transistor(), 0, 0.76, 0.1); group.add(tr);
      const plate = P(nameplate('?', 'Transistor', 'the switch inside every chip'), 0.3, 3.35, 1.4); plate.scale.setScalar(0.8); plate.rotation.set(-0.05, -0.15, 0.02); group.add(plate);
      const spot = glowSprite('#ffae6b', 4.5, 0); spot.position.set(0, 2.2, -0.6); group.add(spot);
      return { tr, plate, spot };
    },
    update({ tr, plate, spot }, lt) {
      const rise = prog(lt, 0.9, 0.7, ease.back);
      tr.position.y = lerp(-2.6, 0.76, rise);
      tr.rotation.y = lerp(-1.2, 0, prog(lt, 0.9, 1.2, ease.out)) + wobble(lt, 0.3, 0.05);
      spot.material.opacity = 0.7 * prog(lt, 1.0, 0.6);
      popIn(plate, lt, 1.85, 0.5, 0.8);
      plate.setReveal(prog(lt, 2.0, 0.4, ease.linear));
      plate.position.y = 3.35 + wobble(lt, 0.4, 0.04);
      tr.tags.forEach((t, i) => t.scale.setScalar(Math.max(0.001, pop(lt, 3.1 + i * 0.22, 0.4))));
    },
  },

  // ── F. A tiny current here controls a big one there ─────────────────────────
  {
    id: 'amplify', start: 22.6, end: 28.4, env: 'dark', zoom: 1.6, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 7.5 - lt * 0.15, 11.5 - lt * 0.2], look: [0, 0.6, -0.4], fov: 34 }),
    build({ group }) {
      const tr = P(transistor({ labels: false }), 0, 0, 0); group.add(tr);
      const small = P(battery(), -3.0, 0, 1.6); small.scale.setScalar(0.5); group.add(small);
      const big = P(battery(), 2.9, 0, -1.6); big.scale.setScalar(1.05); group.add(big);
      const bl = P(bulb(), 0.2, 0, -2.4); bl.scale.setScalar(1.25); group.add(bl);
      const base = wire([[-3.0, 0.95, 1.6], [-2.2, 0.5, 1.6], [-0.8, 0.08, 1.2], [0, 0.08, 0.4], [0, 0.05, -0.2]], { radius: 0.03, electrons: 5, eColor: '#7fd3ff' });
      const main = wire([[2.9, 1.95, -1.6], [2.4, 2.4, -2.2], [1.2, 0.4, -2.6], [0.6, 0.08, -2.2], [-0.4, 0.08, -1.2], [-0.4, 0.05, -0.2], [0.4, 0.05, -0.2], [1.4, 0.08, 0.6], [2.9, 0.08, 0.2], [2.9, 0.08, -1.2]], { radius: 0.09, electrons: 26, eColor: '#ffb46a' });
      group.add(base, main);
      const tagS = P(pill('tiny in', { bg: '#2b2521', fg: '#7fd3ff', h: 0.46, size: 0.45 }), -2.3, 1.6, 1.8); group.add(tagS);
      const tagB = P(pill('BIG out', { bg: C.orange, fg: '#2a1408', h: 0.56, size: 0.5 }), 2.0, 3.6, -1.6); group.add(tagB);
      return { base, main, bl, tagS, tagB };
    },
    update({ base, main, bl, tagS, tagB }, lt) {
      const sig = prog(lt, 0.4, 0.6, ease.linear);
      base.setFlow(lt, 0.25, sig);
      const amp = prog(lt, 1.6, 0.6, ease.out);
      main.setFlow(lt, 0.14, amp);
      bl.setOn(amp);
      popIn(tagS, lt, 0.5, 0.4); popIn(tagB, lt, 2.0, 0.45);
    },
  },

  // ── G. Flip it fast enough and you get 1s and 0s ────────────────────────────
  {
    id: 'bits', start: 28.4, end: 32.4, env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 2.6, 11.5 - lt * 0.4], look: [0, 2.1, 0], fov: 32 }),
    build({ group }) {
      const tiles = [];
      for (let r = 0; r < 4; r++) for (let c = 0; c < 4; c++) { const b = P(bitTile(0), -1.35 + c * 0.9, 3.4 - r * 0.9, 0); group.add(b); tiles.push(b); }
      const tr = P(transistor({ labels: false }), 2.3, 0, 1.0); tr.scale.setScalar(0.4); group.add(tr);
      return { tiles, tr };
    },
    update({ tiles, tr }, lt) {
      const step = Math.floor(lt / Math.max(0.05, 0.4 - lt * 0.1));
      const R = rng(step + 1);
      tiles.forEach((b, i) => { b.setBit(lt < 0.3 ? 0 : R() > 0.5 ? 1 : 0); b.scale.setScalar(Math.max(0.001, pop(lt, 0.05 + i * 0.03, 0.4))); });
      tr.rotation.y = lt * 0.8;
    },
  },

  // ── H. Your phone has billions of them ───────────────────────────────────────
  {
    id: 'billions', start: 32.4, end: 36.3, env: 'dark', zoom: 1, enter: WHIP, exit: { type: 'fade', dur: 0.25 },
    camera: lt => { const k = prog(lt, 0, 3.6, ease.inOut); return { pos: [0, lerp(2.2, 9.5, k), lerp(1.6, 7.5, k)], look: [0, 0.3, 0], fov: 32 }; },
    build({ group }) {
      const ch = P(chip(), 0, 0, 0); group.add(ch);
      const tag = P(pill('10,000,000,000+ switches', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.42 }), 0, 1.2, 1.9); group.add(tag);
      return { ch, tag };
    },
    update({ ch, tag }, lt) {
      ch.top.material.emissiveIntensity = 0.5 + 0.3 * Math.sin(lt * 14);
      popIn(tag, lt, 2.2, 0.45, 0.85);
    },
  },

  // ── I. Electricity is power. Electronics is control. ───────────────────────
  {
    id: 'outro', start: 36.3, end: 41, env: 'cream', zoom: 1.12, enter: { type: 'fade', dur: 0.4 },
    camera: lt => ({ pos: [0, 3.5, 13.2 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bl = P(bulb(), -1.8, 0.22, 0.2); group.add(bl);
      const tr = P(transistor({ labels: false }), 1.8, 0.22, 0.2); tr.scale.setScalar(0.55); group.add(tr);
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const p1 = P(pill('power', { bg: '#efe9e2', fg: '#9b9289', h: 0.5, size: 0.45 }), -1.25, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('control', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 1.25, 3.3, 0.9); group.add(p2);
      return { bl, tr, bot, p1, p2 };
    },
    update({ bl, tr, bot, p1, p2 }, lt) {
      bl.setOn(prog(lt, 0.3, 0.4));
      tr.rotation.y = -0.4 + lt * 0.25;
      popIn(p1, lt, 0.5, 0.4); popIn(p2, lt, 2.0, 0.4);
      bot.set(lt, { mood: lt < 1.8 ? 'smile' : lt < 3.2 ? 'happy' : 'wink', talk: false });
    },
  },
];

export default {
  title: 'Electricity vs Electronics · daily tip',
  width: 720, height: 1280, fps: 30, duration: 41,
  // voiceover: captions follow the spoken words; scenes are re-paced from design time (the `at`s below)
  ...(voice || {}), retime: true,
  hud: { left: '// electronics', counterLabel: 'CONCEPT', total: 3, counter: [[0, 0], [5.5, 1], [14.0, 2], [19.8, 3]] },
  captions: [
    { at: 0.0, text: 'Everyone says' }, { at: 0.7, text: '[electricity]' }, { at: 1.4, text: 'and [electronics]' }, { at: 2.3, text: 'like they’re the same.' },
    { at: 3.4, text: 'They’re {not.}', end: 4.4 },
    { at: 4.5, text: '[Electricity] is just' }, { at: 5.5, text: '[energy] moving —' }, { at: 6.5, text: 'electrons pushed' }, { at: 7.3, text: 'through a [wire.]', end: 9.2 },
    { at: 9.3, text: 'A [bulb,] a [heater,] a [fan]', times: [9.3, 9.45, 9.9, 10.05, 10.5, 10.65] }, { at: 11.2, text: 'just [use] it.' }, { at: 12.0, text: 'Full blast. {No brain.}', times: [12.0, 12.25, 12.9, 13.0], end: 13.2 },
    { at: 13.3, text: '[Electronics]' }, { at: 14.0, text: '[controls] it.' }, { at: 14.8, text: '[When.] [Where.]', times: [14.8, 15.3] }, { at: 15.9, text: '[How much.]', end: 17.6 },
    { at: 17.7, text: 'The trick?' }, { at: 18.6, text: 'One tiny switch:' }, { at: 19.6, text: 'the [transistor.]' }, { at: 20.6, text: 'Three legs.', end: 22.6 },
    { at: 22.7, text: 'A [tiny] current here' }, { at: 24.1, text: 'controls a [big] one there.' }, { at: 25.8, text: 'Small signal in,' }, { at: 26.8, text: '[big power] out.', end: 28.4 },
    { at: 28.5, text: 'Flip it on and off' }, { at: 29.6, text: 'fast enough' }, { at: 30.5, text: 'and you get [1s and 0s.]', say: 'and you get ones and zeros.', end: 32.4 },
    { at: 32.5, text: 'Your phone has' }, { at: 33.3, text: '[billions] of them.' }, { at: 34.6, text: 'That’s a {computer.}', end: 36.3 },
    { at: 36.5, text: '[Electricity] is power.' }, { at: 38.0, text: '[Electronics] is control.', end: 41 },
  ],
  scenes,
};

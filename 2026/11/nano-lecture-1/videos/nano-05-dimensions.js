// Nanoscience lecture 1 · video 5: 0D / 1D / 2D / 3D nanomaterials, which dimensions are confined.
// Sources: Chattopadhyay & Banerjee Ch. 5: particle in a 3-D box = nanodot pp. 95–96 (Eqs. 5.74–5.76, Fig. 5.22–5.23),
//          electron trapped in a 2-D plane = nanosheet p. 97, 1-D nanowire/rod/belt pp. 98–99 (Eqs. 5.79–5.80, Fig. 5.25–5.26).
//          Kulkarni §1.5 (0-D, 1-D, 2-D density of states); Module II: Kulkarni 3rd ed. §11.2 (0- to 3-D nanostructures).
import * as THREE from 'three';
import voice from './nano-05-dimensions.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { mathText } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { arrow2, pow } from '../props/custom/nano.js';
import { pill, sphere, rbox, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp, rng } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };
const glass = color => clay(color, { rough: 0.35 });

const LINES = [
  ['hook', 'A nanomaterial needs only'],
  [0, '[one] tiny dimension.'],
  [0, 'So which ones are [tiny?]'],
  ['rule', 'Count the directions'],
  [0, 'an electron can [move freely.]'],
  [0, 'Squeeze a side below'],
  [0, '[100 nanometers:]', 'a hundred nanometers:'],
  [0, 'that side is [confined.]'],
  ['d0', 'Squeeze [all three:]'],
  [0, 'a [nanodot.]'],
  [0, 'No free direction:'],
  [0, '[zero-dimensional.]'],
  [0, 'Its energy levels turn'],
  [0, '[discrete,] like in atoms.'],
  ['d1', 'Squeeze [two] sides:'],
  [0, 'a [nanowire] or nanotube.'],
  [0, 'Free along its length:'],
  [0, '[one-dimensional.]'],
  ['d2', 'Squeeze only the [thickness:]'],
  [0, 'a [nanosheet,] like graphene.'],
  [0, 'How thin is [thin?]'],
  [0, 'Nanometers thick,'],
  [0, 'free across the plane:'],
  [0, '[two-dimensional.]'],
  ['d3', 'Pack nanoparticles [together]'],
  [0, 'into a bulk [solid:]'],
  [0, 'a [3D] nanomaterial.', 'a three D nanomaterial.'],
  [0, 'Even a heap of [powder]'],
  [0, 'keeps [nano properties,]'],
  [0, 'because each grain'],
  [0, 'is still [confined.]'],
  ['recap', 'Quick [recap:]'],
  [0, 'dot, wire, sheet,'],
  [0, 'solid, thickness, [powder.]'],
  ['outro', 'Fewer free [directions,]'],
  [0, '[more quantum.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

// an electron: glowing dot
const electron = () => glowSprite('#7fd3ff', 0.45, 0.95);

// shared look for the d0–d2 scenes
const dimCam = lt => ({ pos: [0.9, 3.6, 11.6 - lt * 0.08], look: [0.2, 1.7, 0], fov: 32 });

const scenes = [
  // 1 ── HOOK (cream): four shapes on the plinth: dot, wire, sheet, block ───────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.2, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.6, 13.4 - lt * 0.25], look: [0, 1.7, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.7 }), 0, 0.22, -1.2); group.add(bot);
      const dot = P(sphere(0.22, glass(C.orange)), -1.6, 0.7, 0.9); group.add(dot);
      const wire = P(rbox(1.3, 0.14, 0.14, 0.05, glass('#c8733f')), -0.55, 0.6, 1.1); wire.rotation.y = 0.3; group.add(wire);
      const sheet = P(rbox(1.0, 0.05, 0.8, 0.02, glass('#8fa8b8')), 0.75, 0.5, 1.0); group.add(sheet);
      const block = P(rbox(0.7, 0.7, 0.7, 0.08, glass('#d6cdc4')), 1.75, 0.6, 0.6); group.add(block);
      const q = P(pill('which side is tiny?', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.42 }), 0, 3.1, 1.0); group.add(q);
      return { bot, shapes: [dot, wire, sheet, block], q };
    },
    update({ bot, shapes, q }, lt) {
      shapes.forEach((s, i) => { popIn(s, lt, 0.3 + i * 0.25, 0.45); s.position.y = [0.7, 0.6, 0.5, 0.6][i] + wobble(lt, 0.5, 0.04, i); });
      popIn(q, lt, B_('hook', 2), 0.45);
      bot.set(lt, { mood: lt < B_('hook', 2) ? 'smile' : 'think', look: [Math.sin(lt * 0.8) * 0.7, -0.3] });
    },
  },

  // 2 ── RULE (dark): a box; an electron roams; one side squeezes, motion freezes on it
  {
    id: 'rule', ...T_('rule'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: dimCam,
    build({ group }) {
      const box = P(rbox(2.4, 1.6, 1.6, 0.1, new THREE.MeshStandardMaterial({ color: '#cfe0ea', transparent: true, opacity: 0.22, roughness: 0.3, depthWrite: false })), 0.2, 1.6, 0); group.add(box);
      const e = P(electron(), 0.2, 1.6, 0); group.add(e);
      const ax = [P(arrow2(2.6), 0.2, 0.55, 1.0), P(arrow2(1.8), 1.65, 1.6, 0), P(arrow2(1.8), 0.2, 1.6, 1.0)];
      ax[1].rotation.z = Math.PI / 2; ax[2].rotation.y = Math.PI / 2; ax.forEach(a => group.add(a));
      const p1 = P(pill('free: x, y, z', { bg: '#3a312b', fg: '#d6cdc4', h: 0.42, size: 0.42 }), -0.6, 3.4, 0.8); group.add(p1);
      const p2 = P(pill('< 100 nm = confined', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.42 }), 0.3, 3.4, 0.8); group.add(p2);
      return { box, e, ax, p1, p2 };
    },
    update({ box, e, ax, p1, p2 }, lt) {
      const L = k => B_('rule', k);
      popIn(box, lt, 0.1, 0.5);
      const sq = prog(lt, L(2), 1.2, ease.inOut);          // squeeze the y side
      box.scale.set(1, lerp(1, 0.12, sq), 1);
      e.position.set(0.2 + Math.sin(lt * 2.3) * 0.95, 1.6 + Math.sin(lt * 3.1 + 1) * 0.6 * (1 - sq), Math.sin(lt * 1.7 + 2) * 0.6);
      ax.forEach((a, i) => popIn(a, lt, L(1) + i * 0.15, 0.4, i === 1 ? 1 - sq * 0.999 : 1));
      popIn(p1, lt, L(1) + 0.3, 0.4); p1.visible = lt < L(3);
      popIn(p2, lt, L(3) + 0.2, 0.45);
    },
  },

  // 3 ── 0D (cream): nanodot, electron trapped, discrete levels card ───────────
  {
    id: 'd0', ...T_('d0'), env: 'cream', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.6, 3.2, 12.4 - lt * 0.08], look: [0.3, 1.8, 0], fov: 32 }),
    build({ group }) {
      const dot = P(rbox(1.1, 1.1, 1.1, 0.12, new THREE.MeshStandardMaterial({ color: C.orange, transparent: true, opacity: 0.6, roughness: 0.3, depthWrite: false })), -0.55, 1.6, 0); group.add(dot);
      const e = P(electron(), -0.55, 1.6, 0); group.add(e);
      const tag = P(pill('0D · nanodot', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), -0.5, 0.4, 1.0); group.add(tag);
      const lv = P(stagedCard({ w: 1.7, h: 2.3, d: 0.1, r: 0.08, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.06}px ${FONT.mono}`; ctx.fillText('ENERGY', W * 0.08, H * 0.09);
        const lv = [1, 4, 9, 16].map(n => H * (0.93 - n * 0.04));
        if (st >= 1) lv.forEach((y, i) => { ctx.fillStyle = i === 0 ? ORANGE : INK; ctx.fillRect(W * 0.12, y, W * 0.5, H * 0.012); ctx.font = `600 ${H * 0.05}px ${FONT.mono}`; ctx.fillText(`n=${i + 1}`, W * 0.68, y + H * 0.018); });
        if (st >= 2) mathText(ctx, 'E ∝ n²/L²', W / 2, H * 0.2, H * 0.085, { ...serif, color: ORANGE, align: 'center' });
      }), 1.2, 1.9, 0.2); group.add(lv);
      return { dot, e, tag, lv };
    },
    update({ dot, e, tag, lv }, lt) {
      const L = k => B_('d0', k);
      popIn(dot, lt, 0.1, 0.5);
      e.position.set(-0.55 + Math.sin(lt * 7.1) * 0.25, 1.6 + Math.sin(lt * 8.3 + 1) * 0.25, Math.sin(lt * 6.7 + 2) * 0.25);
      popIn(tag, lt, L(1) + 0.2, 0.45);
      popIn(lv, lt, L(4) - 0.3, 0.5); lv.stage(steps(lt, [L(4), L(5)]));
      dot.rotation.y = lt * 0.3;
    },
  },

  // 4 ── 1D (dark): nanowire, electron runs along it ───────────────────────────
  {
    id: 'd1', ...T_('d1'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: dimCam,
    build({ group }) {
      const w = P(rbox(4.0, 0.32, 0.32, 0.1, new THREE.MeshStandardMaterial({ color: '#c8733f', transparent: true, opacity: 0.5, roughness: 0.3, depthWrite: false })), 0.2, 1.7, 0); group.add(w);
      const es = [0, 1, 2].map(() => { const e = electron(); group.add(e); return e; });
      const ar = P(arrow2(3.6), 0.2, 2.35, 0); group.add(ar);
      const tag = P(pill('1D · nanowire', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 0.2, 0.55, 1.0); group.add(tag);
      return { w, es, ar, tag };
    },
    update({ w, es, ar, tag }, lt) {
      const L = k => B_('d1', k);
      popIn(w, lt, 0.1, 0.5);
      es.forEach((e, i) => { const u = ((lt * 0.35 + i / 3) % 1); e.position.set(-1.7 + u * 3.8, 1.7 + Math.sin(lt * 9 + i) * 0.06, Math.cos(lt * 8 + i) * 0.06); e.visible = lt > L(1); });
      popIn(ar, lt, L(2) + 0.2, 0.45); popIn(tag, lt, L(3), 0.45);
    },
  },

  // 5 ── 2D (cream): nanosheet, electrons glide in the plane, thickness callout ─
  {
    id: 'd2', ...T_('d2'), env: 'cream', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.6, 4.4, 11.6 - lt * 0.08], look: [0.2, 1.4, 0], fov: 32 }),
    build({ group }) {
      const sh = P(rbox(3.6, 0.1, 2.4, 0.03, new THREE.MeshStandardMaterial({ color: '#2f7bb0', transparent: true, opacity: 0.75, roughness: 0.3, depthWrite: false })), 0.2, 1.4, 0); group.add(sh);
      const es = [0, 1, 2, 3].map(() => { const e = electron(); group.add(e); return e; });
      const a1 = P(arrow2(3.0), 0.2, 1.55, 1.35); group.add(a1);
      const a2 = P(arrow2(2.0), 2.15, 1.55, 0); a2.rotation.y = Math.PI / 2; group.add(a2);
      const th = P(pill('thickness: few nm', { bg: '#efe9e2', fg: '#2b241f', h: 0.42, size: 0.42 }), -0.3, 2.55, 0.8); group.add(th);
      const tag = P(pill('2D · nanosheet', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 0.6, 3.3, 0.8); group.add(tag);
      return { sh, es, a1, a2, th, tag };
    },
    update({ sh, es, a1, a2, th, tag }, lt) {
      const L = k => B_('d2', k);
      popIn(sh, lt, 0.1, 0.5);
      es.forEach((e, i) => { e.position.set(0.2 + Math.sin(lt * (0.9 + i * 0.2) + i * 2) * 1.5, 1.47, Math.cos(lt * (0.7 + i * 0.25) + i) * 1.0); e.visible = lt > L(1); });
      popIn(th, lt, L(3), 0.45);
      popIn(a1, lt, L(4), 0.4); popIn(a2, lt, L(4) + 0.15, 0.4);
      popIn(tag, lt, L(5), 0.45);
    },
  },

  // 6 ── 3D (dark): nanoparticles pack into a solid, then a powder heap ─────────
  {
    id: 'd3', ...T_('d3'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.8, 3.6, 11.8 - lt * 0.06], look: [0.2, 1.5, 0], fov: 32 }),
    build({ group }) {
      const R = rng(5), balls = [];
      for (let x = 0; x < 5; x++) for (let y = 0; y < 3; y++) for (let z = 0; z < 3; z++) {
        const b = sphere(0.22, clay(['#e2652a', '#c8733f', '#d98b4e'][(x + y + z) % 3], { rough: 0.4 }));
        b.userData.home = [-0.7 + x * 0.42, 0.9 + y * 0.42, -0.4 + z * 0.42];
        b.userData.from = [(R() - 0.5) * 6, 4 + R() * 2, (R() - 0.5) * 3];
        b.userData.heap = (() => { const a = R() * Math.PI * 2, r = Math.sqrt(R()) * 1.3, h = (1 - r / 1.3) * 0.9 * R(); return [0.2 + Math.cos(a) * r, 0.2 + h, Math.sin(a) * r * 0.6]; })();
        group.add(b); balls.push(b);
      }
      const halos = balls.slice(0, 12).map(b => { const s = glowSprite('#ffd27a', 0.5, 0); group.add(s); s.userData.b = b; return s; });
      const tag = P(pill('3D · nanocrystalline solid', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.4 }), 0.2, 3.35, 0.8); group.add(tag);
      const tag2 = P(pill('each grain still confined', { bg: '#f2eee8', fg: '#2b241f', h: 0.44, size: 0.4 }), 0.2, 3.35, 0.8); group.add(tag2);
      return { balls, halos, tag, tag2 };
    },
    update({ balls, halos, tag, tag2 }, lt) {
      const L = k => B_('d3', k);
      const pack = prog(lt, 0.2, 1.6, ease.out), heap = prog(lt, L(3), 1.4, ease.inOut);
      balls.forEach((b, i) => {
        const [hx, hy, hz] = b.userData.home, [fx, fy, fz] = b.userData.from, [px, py, pz] = b.userData.heap;
        const x = lerp(fx, hx, pack), y = lerp(fy, hy, pack), z = lerp(fz, hz, pack);
        b.position.set(lerp(x, px, heap), lerp(y, py, heap), lerp(z, pz, heap));
      });
      halos.forEach(s => { s.position.copy(s.userData.b.position); s.position.z += 0.25; s.material.opacity = 0.7 * prog(lt, L(5), 0.6); });
      popIn(tag, lt, L(2), 0.45); tag.visible = lt < L(3) + 0.3;
      popIn(tag2, lt, L(5) + 0.2, 0.45);
    },
  },

  // 7 ── RECAP (cream): the confinement table ───────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'confined · free', items: [['0D nanodot', '3 · 0'], ['1D nanowire', '2 · 1'], ['2D nanosheet', '1 · 2'], ['3D nano solid', 'grains'], ['sheet thickness', '~ nm'], ['nano powder', 'still nano']] }), 0.3, 2.05, 0); group.add(s);
      return { s };
    },
    update({ s }, lt) {
      popIn(s, lt, 0.15, 0.5);
      s.stage(summaryTicks(lt, B_('recap', 1), B_('recap', 2)));
      s.position.y = 2.05 + wobble(lt, 0.4, 0.02);
    },
  },

  // 8 ── TAKEAWAY (cream, fade) ─────────────────────────────────────────────────
  {
    id: 'outro', ...T_('outro'), env: 'cream', zoom: 1.2, enter: { type: 'fade', dur: 0.4 },
    camera: lt => ({ pos: [0, 3.5, 13.2 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const p1 = P(pill('less freedom', { bg: '#efe9e2', fg: '#5d554e', h: 0.46, size: 0.4 }), -1.1, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('more quantum', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.4 }), 1.1, 2.7, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: '0D, 1D, 2D, 3D',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can follow the shapes on screen.
Say "three D" for 3D. Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 5]] },
  captions,
  scenes,
};

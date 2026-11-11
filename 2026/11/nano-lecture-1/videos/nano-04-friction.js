// Nanoscience lecture 1 · video 4: friction disappears in nested carbon nanotubes; the flagella motor; the nanocar.
// Sources: Chattopadhyay & Banerjee Ch. 5 §5.2 (3) "Disappearance of friction in highly symmetric molecular systems",
//          p. 75 (Fig. 5.3 nested CNTs), p. 76 (Fig. 5.4 E. coli flagella rotary motor).
//          Nanocar → targeted drug delivery is the lecturer's example (cf. Ch. 1 §1.3 p. 3, nanomedicine).
import * as THREE from 'three';
import voice from './nano-04-friction.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { nanotube, grapheneSheet } from '../props/custom/nano.js';
import { pill, sphere, cyl, rbox, torus, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp, rng } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a';

const LINES = [
  ['hook', 'Big machines lose energy'],
  [0, 'to [friction.]'],
  [0, 'At the nanoscale,'],
  [0, 'friction can [vanish.]'],
  ['tube', 'Roll a [graphene sheet]'],
  [0, 'into a [tube.]'],
  [0, 'Slide one tube'],
  [0, '[inside another.]'],
  [0, 'The inner tube glides'],
  [0, 'almost [frictionless.]'],
  ['why', 'Why? The walls have'],
  [0, '[no dangling bonds.]'],
  [0, 'Atoms line up [perfectly,]'],
  [0, 'so no fluid fits between:'],
  [0, 'the gap is [vacuum.]'],
  [0, 'No fluid, [no drag.]'],
  ['motor', 'Nature does it too.'],
  [0, 'A bacterium’s [flagella motor]'],
  [0, 'spins on a molecular'],
  [0, '[bearing,] all its life.'],
  ['car', 'Now build a [nanocar.]'],
  [0, 'Load it with a [drug,]'],
  [0, 'steer it to a [tumour,]'],
  [0, 'and release it [there.]'],
  [0, 'Healthy cells are [spared:]'],
  [0, 'a gentler path than [chemo.]'],
  ['recap', 'Quick [recap:]'],
  [0, 'sheet, tube, nested,'],
  [0, 'vacuum, motor, [nanocar.]'],
  ['outro', 'No [friction,]'],
  [0, '[new machines.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

// a gear wheel: disc + teeth, axis along y
function gear(r = 0.6, teeth = 12, color = '#8c8279') {
  const g = new THREE.Group();
  const disc = cyl(r, r, 0.22, clay(color)); g.add(disc);
  for (let i = 0; i < teeth; i++) { const a = i / teeth * Math.PI * 2; const t = rbox(0.18, 0.2, 0.18, 0.03, clay(color)); t.position.set(Math.cos(a) * (r + 0.07), 0, Math.sin(a) * (r + 0.07)); t.rotation.y = -a; g.add(t); }
  return g;
}

// a fullerene-like wheel: sphere with dots
function bucky(r = 0.22) {
  const g = new THREE.Group(); g.add(sphere(r, clay('#3a322c', { rough: 0.5 })));
  for (let i = 0; i < 20; i++) { const u = (i + 0.5) / 20, th = Math.acos(1 - 2 * u), ph = i * 2.4; const d = sphere(r * 0.18, clay('#d6cdc4')); d.position.set(r * Math.sin(th) * Math.cos(ph), r * Math.cos(th), r * Math.sin(th) * Math.sin(ph)); g.add(d); }
  return g;
}

const scenes = [
  // 1 ── HOOK (cream): grinding gears vs a smooth tube ───────────────────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.15, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.4 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.75 }), 0.5, 0.22, -0.7); group.add(bot);
      const g1 = P(gear(0.34, 10), -1.3, 1.3, 0.8); g1.rotation.x = Math.PI / 2; group.add(g1);
      const g2 = P(gear(0.34, 10), -0.55, 1.3, 0.8); g2.rotation.x = Math.PI / 2; group.add(g2);
      const sparks = [0, 1, 2, 3].map(() => { const s = P(glowSprite('#ffb46a', 0.35, 0), -0.92, 1.3, 1.0); group.add(s); return s; });
      const tb = P(nanotube({ r: 0.3, len: 1.3 }), 1.45, 1.3, 0.8); group.add(tb);
      const p1 = P(pill('friction', { bg: '#efe9e2', fg: '#5d554e', h: 0.44, size: 0.44 }), -1.15, 2.4, 1.0); group.add(p1);
      const p2 = P(pill('vanishes', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 1.3, 2.4, 1.0); group.add(p2);
      return { bot, g1, g2, sparks, tb, p1, p2 };
    },
    update({ bot, g1, g2, sparks, tb, p1, p2 }, lt) {
      const L = k => B_('hook', k);
      popIn(g1, lt, 0.2, 0.45); popIn(g2, lt, 0.3, 0.45);
      g1.rotation.y = lt * 1.2; g2.rotation.y = -lt * 1.2 + 0.26;
      sparks.forEach((s, i) => { const u = (lt * 1.5 + i / 4) % 1; s.position.set(-0.92 + (i - 1.5) * 0.12 * u, 1.3 + u * 0.6, 1.05); s.material.opacity = lt > L(1) ? 0.8 * (1 - u) : 0; });
      popIn(p1, lt, L(1), 0.4);
      popIn(tb, lt, L(2), 0.45); tb.tube.rotation.y = lt * 0.8;
      popIn(p2, lt, L(3) + 0.1, 0.45);
      bot.set(lt, { mood: lt < L(1) ? 'neutral' : lt < L(3) ? 'worried' : 'surprised', look: [lt < L(2) ? -0.6 : 0.6, 0] });
    },
  },

  // 2 ── TUBE (dark): graphene sheet → tube → nested tube slides in ─────────────
  {
    id: 'tube', ...T_('tube'), env: 'dark', zoom: 1.05, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.6, 3.4, 11.8 - lt * 0.1], look: [0.2, 1.8, 0], fov: 32 }),
    build({ group }) {
      const sheet = P(grapheneSheet({ w: 3.2, h: 2.0 }), 0.2, 2.0, 0); group.add(sheet);
      const outer = P(nanotube({ r: 0.72, len: 3.0, color: '#efe9e2', tint: '#ffffff', opacity: 0.9 }), 0.3, 1.9, 0); group.add(outer);
      const inner = P(nanotube({ r: 0.45, len: 3.4, color: '#e2652a', tint: '#ffd2b5', opacity: 0.9 }), 0.3, 1.9, 0); group.add(inner);
      const t1 = P(pill('graphene', { bg: '#3a312b', fg: '#d6cdc4', h: 0.42, size: 0.42 }), -1.2, 3.45, 0.6); group.add(t1);
      const t2 = P(pill('nested tubes', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.44 }), 0.3, 0.4, 1.2); group.add(t2);
      return { sheet, outer, inner, t1, t2 };
    },
    update({ sheet, outer, inner, t1, t2 }, lt) {
      const L = k => B_('tube', k);
      // the sheet curls (squash in y, fade) as the tube appears
      popIn(sheet, lt, 0.1, 0.5); popIn(t1, lt, 0.5, 0.4);
      const roll = prog(lt, L(1) - 0.2, 0.9, ease.inOut);
      sheet.scale.set(Math.max(0.001, pop(lt, 0.1, 0.5)), Math.max(0.001, 1 - roll), 1);
      sheet.visible = roll < 0.98;
      outer.scale.setScalar(Math.max(0.001, roll)); t1.visible = roll < 0.5;
      // inner tube slides in from the right, then glides back and forth
      const enter = prog(lt, L(2), 1.2, ease.inOut);
      inner.visible = lt >= L(2);
      const glide = lt > L(4) ? Math.sin((lt - L(4)) * 1.6) * 0.45 : 0;
      inner.position.x = lerp(4.0, 0.3, enter) + glide;
      inner.tube.rotation.y = lt * 0.6;
      popIn(t2, lt, L(3) + 0.2, 0.45);
    },
  },

  // 3 ── WHY (cream): cross-section card, bonds satisfied, vacuum gap ───────────
  {
    id: 'why', ...T_('why'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 3.0, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.054}px ${FONT.mono}`; ctx.fillText('CROSS-SECTION', W * 0.05, H * 0.09);
        const cx = W * 0.5, cy = H * 0.5, R1 = H * 0.3, R2 = H * 0.2;
        if (st >= 3) { ctx.fillStyle = 'rgba(47,123,176,0.15)'; ctx.beginPath(); ctx.arc(cx, cy, R1 - H * 0.02, 0, Math.PI * 2); ctx.arc(cx, cy, R2 + H * 0.02, 0, Math.PI * 2, true); ctx.fill(); }
        const ring = (R, n, col) => { for (let i = 0; i < n; i++) { const a = i / n * Math.PI * 2; ctx.fillStyle = col; ctx.beginPath(); ctx.arc(cx + R * Math.cos(a), cy + R * Math.sin(a), H * 0.018, 0, Math.PI * 2); ctx.fill(); }
          ctx.strokeStyle = col; ctx.lineWidth = 3; ctx.beginPath(); ctx.arc(cx, cy, R, 0, Math.PI * 2); ctx.stroke(); };
        ring(R1, 30, INK); ring(R2, 20, ORANGE);
        if (st === 0) { // dangling bonds sticking out (crossed out once the caption says "no")
          for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; ctx.strokeStyle = '#c0392b'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(cx + R1 * Math.cos(a), cy + R1 * Math.sin(a)); ctx.lineTo(cx + (R1 - H * 0.07) * Math.cos(a), cy + (R1 - H * 0.07) * Math.sin(a)); ctx.stroke(); }
        }
        if (st >= 1) { ctx.fillStyle = INK; ctx.font = `700 ${H * 0.05}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText('no dangling bonds', W / 2, H * 0.92); }
        if (st >= 3) { ctx.fillStyle = '#2f7bb0'; ctx.font = `700 ${H * 0.05}px ${FONT.mono}`; ctx.fillText('vacuum', cx, cy - R2 - H * 0.025); }
        if (st >= 4) { ctx.fillStyle = ORANGE; ctx.font = `700 ${H * 0.06}px ${FONT.mono}`; ctx.fillText('no drag', cx, cy + H * 0.02); }
        ctx.textAlign = 'left';
      }), 0.3, 2.05, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('why', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(2), L(4), L(5)]));
      f.position.y = 2.05 + wobble(lt, 0.4, 0.02);
    },
  },

  // 4 ── MOTOR (dark): flagella rotary motor (Fig. 5.4) spinning ────────────────
  {
    id: 'motor', ...T_('motor'), env: 'dark', zoom: 1.45, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [1.2, 3.2, 11.8 - lt * 0.1], look: [0.3, 1.8, 0], fov: 32 }),
    build({ group }) {
      const mem1 = P(rbox(3.6, 0.18, 1.6, 0.05, clay('#6f8ea3', { rough: 0.6 })), -0.2, 0.6, -0.3); group.add(mem1);
      const mem2 = P(rbox(3.6, 0.18, 1.6, 0.05, clay('#8fa8b8', { rough: 0.6 })), -0.2, 1.5, -0.3); group.add(mem2);
      const rot = new THREE.Group(); P(rot, -0.4, 0, 0); group.add(rot);
      const stator = [0.2, 1.1].map(y => P(torus(0.62, 0.12, clay('#3a322c')), -0.4, y, 0)); stator.forEach(t => { t.rotation.x = Math.PI / 2; group.add(t); });
      const rotor = P(gear(0.45, 14, '#e2652a'), 0, 0.3, 0); rot.add(rotor);
      const shaft = P(cyl(0.12, 0.12, 2.2, clay('#d6cdc4')), 0, 1.3, 0); rot.add(shaft);
      const rings = [0.65, 1.05, 1.55].map(y => P(cyl(0.3, 0.3, 0.12, clay('#cfc5b9')), 0, y, 0)); rings.forEach(r => rot.add(r));
      const path = new THREE.CatmullRomCurve3(Array.from({ length: 40 }, (_, i) => new THREE.Vector3(0.15 * Math.cos(i * 0.6) + i * 0.07, 2.4 + 0.15 * Math.sin(i * 0.6) + i * 0.02, 0.15 * Math.sin(i * 0.6))));
      const fil = new THREE.Mesh(new THREE.TubeGeometry(path, 160, 0.07, 10), clay('#efe9e2')); rot.add(fil);
      const t1 = P(pill('flagella motor', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.44 }), 1.0, 0.25, 1.4); group.add(t1);
      const t2 = P(pill('molecular bearing', { bg: '#f2eee8', fg: '#2b241f', h: 0.42, size: 0.42 }), -1.0, 3.5, 0.8); group.add(t2);
      return { rot, t1, t2 };
    },
    update({ rot, t1, t2 }, lt) {
      const L = k => B_('motor', k);
      popIn(rot, lt, 0.2, 0.5);
      rot.rotation.y = lt * lerp(1, 8, prog(lt, L(1), 1.5));
      popIn(t1, lt, L(1) + 0.3, 0.45); popIn(t2, lt, L(3), 0.45);
    },
  },

  // 5 ── NANOCAR (cream): drives to a tumour cell, releases the drug ────────────
  {
    id: 'car', ...T_('car'), env: 'cream', zoom: 1.2, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 3.6, 12.6 - lt * 0.06], look: [0.2, 1.4, 0], fov: 32 }),
    build({ group }) {
      const car = new THREE.Group(); group.add(car);
      const chassis = P(rbox(1.2, 0.12, 0.5, 0.05, clay('#5d554e')), 0, 0.45, 0); car.add(chassis);
      const wheels = [[-0.5, -0.32], [0.5, -0.32], [-0.5, 0.32], [0.5, 0.32]].map(([x, z]) => { const w = P(bucky(0.22), x, 0.24, z); car.add(w); return w; });
      const pod = P(sphere(0.26, clay('#4caf6a', { emissive: '#2f8a4a', emissiveIntensity: 0.5 })), 0, 0.78, 0); car.add(pod);
      const R = rng(7);
      const healthy = [[-1.25, 2.3], [-0.3, 3.0], [1.3, 3.1]].map(([x, y]) => { const c = P(sphere(0.38, clay('#9fc3d8', { rough: 0.6 })), x, y, -0.6); group.add(c); return c; });
      const tumour = new THREE.Group(); P(tumour, 1.35, 0.75, 0); group.add(tumour);
      tumour.add(sphere(0.6, clay('#c0392b', { rough: 0.7 })));
      for (let i = 0; i < 14; i++) { const b = sphere(0.16 + R() * 0.1, clay('#a93226')); const th = R() * Math.PI, ph = R() * Math.PI * 2; b.position.set(0.55 * Math.sin(th) * Math.cos(ph), 0.55 * Math.cos(th), 0.55 * Math.sin(th) * Math.sin(ph)); tumour.add(b); }
      const dots = Array.from({ length: 14 }, () => { const d = P(glowSprite('#6ee08f', 0.28, 0), 0, 0, 0.4); group.add(d); return d; });
      const t1 = P(pill('drug', { bg: '#dff3e5', fg: '#1f5a33', h: 0.4, size: 0.42 }), -1.6, 1.6, 0.8); group.add(t1);
      const t2 = P(pill('tumour', { bg: '#f6d5d0', fg: '#7a1c12', h: 0.4, size: 0.42 }), 1.35, 1.9, 0.9); group.add(t2);
      const t3 = P(pill('targeted delivery', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.44 }), 0.2, 3.75, 0.8); group.add(t3);
      return { car, wheels, pod, healthy, tumour, dots, t1, t2, t3 };
    },
    update({ car, wheels, pod, healthy, tumour, dots, t1, t2, t3 }, lt) {
      const L = k => B_('car', k);
      popIn(car, lt, 0.15, 0.5);
      popIn(pod, lt, L(1), 0.45); popIn(t1, lt, L(1) + 0.2, 0.4); t1.visible = lt < L(2) + 0.6;
      const drive = prog(lt, L(2), 1.8, ease.inOut);
      car.position.set(lerp(-1.6, 0.15, drive), 0, 0.3);
      wheels.forEach(w => (w.rotation.z = -car.position.x / 0.22));
      popIn(tumour, lt, L(2) - 0.2, 0.5); popIn(t2, lt, L(2) + 0.3, 0.4);
      tumour.rotation.y = lt * 0.2;
      const rel = prog(lt, L(3), 1.4, ease.out);
      pod.material.emissiveIntensity = 0.5 * (1 - rel);
      dots.forEach((d, i) => { const a = i / dots.length * Math.PI * 2; const u = rel; d.position.set(lerp(0.15, 1.35 + 0.75 * Math.cos(a), u), lerp(0.78, 0.75 + 0.75 * Math.sin(a), u), 0.5); d.material.opacity = lt >= L(3) ? 0.9 * (1 - prog(lt, L(4) + 1.2, 0.8)) : 0; });
      tumour.scale.setScalar(Math.max(0.001, pop(lt, L(2) - 0.2, 0.5) * lerp(1, 0.6, prog(lt, L(4), 1.5))));
      healthy.forEach((c, i) => popIn(c, lt, 0.3 + i * 0.15, 0.45));
      popIn(t3, lt, L(5), 0.45);
    },
  },

  // 6 ── RECAP (cream) ──────────────────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1 · 4', items: [['graphene sheet', 'rolled'], ['carbon nanotube', 'Fig. 5.3'], ['nested tubes', 'slide'], ['gap is vacuum', 'no drag'], ['flagella motor', 'Fig. 5.4'], ['nanocar', 'drug delivery']] }), 0.3, 2.05, 0); group.add(s);
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
      const p1 = P(pill('no friction', { bg: '#efe9e2', fg: '#5d554e', h: 0.46, size: 0.4 }), -1.15, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('new machines', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.4 }), 1.15, 2.7, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Frictionless Nanomachines',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can follow the animation.
Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 4]] },
  captions,
  scenes,
};

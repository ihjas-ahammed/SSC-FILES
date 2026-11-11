// Nanoscience lecture 1 · video 7: the photoelectric effect: hν = φ + KE_max, threshold ν₀, the three graphs.
// Sources: Chattopadhyay & Banerjee Ch. 5 p. 80 (Eq. 5.16, E = nhν) and Fig. 5.8 p. 81 (potassium, φ = 2.0 eV:
//          700 nm 1.77 eV no electrons; 550 nm 2.25 eV v_max 2.96×10⁵ m/s; 400 nm 3.1 eV v_max 6.22×10⁵ m/s).
//          Kulkarni Ch. 1 Box 1.5, Figs. 1.2–1.4, Eqs. 1.8–1.9 (I ∝ intensity, stopping potential V₀, KE_max vs ν).
import * as THREE from 'three';
import voice from './nano-07-photoelectric.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { readout, mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { pill, rbox, cyl, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };

const LINES = [
  ['hook', 'Shine [red light] on a metal:'],
  [0, 'nothing.'],
  [0, 'Shine [violet:]'],
  [0, 'electrons [fly out.]'],
  [0, 'Why does [colour] matter?'],
  ['photon', 'Light comes in [packets:]'],
  [0, '[photons,] each h nu.'],
  [0, 'One photon frees'],
  [0, '[one electron.]'],
  ['budget', 'The energy budget:'],
  [0, 'h nu equals [phi plus KE.]', 'h nu equals phi plus K E.'],
  [0, 'Phi is the [work function,]'],
  [0, 'the toll to escape.'],
  [0, 'Write phi as [h nu nought;]'],
  [0, 'nu nought is the [threshold.]'],
  ['metal', 'Potassium needs [two eV.]', 'Potassium needs two electron volts.'],
  [0, 'Red light gives [1.77:]', 'Red light gives one point seven seven:'],
  [0, 'too small. [No electrons.]'],
  [0, 'Green gives [2.25,]', 'Green gives two point two five,'],
  [0, 'and violet [3.1:]', 'and violet three point one:'],
  [0, 'the extra becomes [speed.]'],
  ['graphs', 'Now the [three graphs.]'],
  [0, 'Current rises with [intensity:]'],
  [0, 'more photons,'],
  [0, 'more [electrons.]'],
  [0, 'Current against voltage'],
  [0, 'stops at [minus V nought,]'],
  [0, 'whatever the intensity.'],
  [0, 'Energy against [frequency:]'],
  [0, 'a line from [nu nought,]'],
  [0, 'with slope [h.]'],
  ['why', 'Intensity sets [how many.]'],
  [0, 'Frequency sets [how fast.]'],
  [0, 'Light acts as a [particle.]'],
  ['recap', 'Quick [recap:]'],
  [0, 'photon, budget, threshold,'],
  [0, 'intensity, stopping, [slope.]'],
  ['outro', 'Light comes in [packets,]'],
  [0, 'each worth [h nu.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

// metal plate + lamp + beam. setBeam(color, k), electrons via e-sprites driven by the caller
function rig() {
  const g = new THREE.Group();
  const plate = rbox(2.4, 0.22, 1.4, 0.05, clay('#b9b0a6', { metal: 0.6, rough: 0.35 })); plate.position.set(0, 0.11, 0); g.add(plate);
  const lamp = cyl(0.22, 0.32, 0.6, clay('#3a322c')); lamp.position.set(-1.9, 3.0, 0); lamp.rotation.z = -0.9; g.add(lamp);
  const beamMat = new THREE.MeshBasicMaterial({ color: '#ff3b30', transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending });
  const a = new THREE.Vector3(-1.65, 2.8, 0), b = new THREE.Vector3(0.1, 0.25, 0), d = new THREE.Vector3().subVectors(b, a);
  const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.42, d.length(), 24, 1, true), beamMat);
  beam.position.copy(a).add(b).multiplyScalar(0.5); beam.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()); g.add(beam);
  g.setBeam = (color, k) => { beamMat.color.set(color); beamMat.opacity = 0.45 * k; };
  return g;
}
// electrons leaving the plate: n sprites, speed s (units/s), shown if on
function electrons(group, n = 6) {
  const es = Array.from({ length: n }, (_, i) => { const s = glowSprite('#7fd3ff', 0.32, 0); s.userData.i = i; group.add(s); return s; });
  es.set = (lt, on, speed) => es.forEach(s => {
    const i = s.userData.i, u = ((lt * speed * 0.35 + i / n) % 1);
    const a = -0.6 + (i / n) * 1.6;
    s.position.set(0.2 + Math.sin(a) * u * 2.4, 0.3 + Math.cos(a) * u * 2.6, 0.3);
    s.material.opacity = on ? 0.95 * (1 - u * 0.6) : 0;
  });
  return es;
}

const scenes = [
  // 1 ── HOOK (cream): red beam → nothing; violet beam → electrons ──────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.75, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.4, 13.0 - lt * 0.05], look: [0.2, 1.6, 0], fov: 30 }),
    build({ group }) {
      const r = P(rig(), 0.1, 0, 0); group.add(r);
      const es = electrons(r);
      const bot = P(robot({ scale: 0.65 }), 1.9, 0, 0.9); group.add(bot);
      const q = P(pill('colour matters?', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.42 }), 0.3, 3.4, 0.8); group.add(q);
      return { r, es, bot, q };
    },
    update({ r, es, bot, q }, lt) {
      const L = k => B_('hook', k);
      popIn(r, lt, 0.1, 0.5);
      const violet = lt >= L(2);
      r.setBeam(violet ? '#8a3bff' : '#ff3b30', prog(lt, violet ? L(2) : 0.4, 0.4));
      es.set(lt, lt >= L(2) + 0.4, 1.4);
      popIn(q, lt, L(4), 0.45);
      bot.set(lt, { mood: lt < L(1) + 0.5 ? 'neutral' : lt < L(3) ? 'sad' : lt < L(4) ? 'surprised' : 'think', turn: -0.4 });
    },
  },

  // 2 ── PHOTON (dark): packets of light hit the plate, one electron each ───────
  {
    id: 'photon', ...T_('photon'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.2, 12.4 - lt * 0.1], look: [0.2, 1.6, 0], fov: 32 }),
    build({ group }) {
      const plate = P(rbox(3.0, 0.22, 1.4, 0.05, clay('#b9b0a6', { metal: 0.6, rough: 0.35 })), 0.2, 0.11, 0); group.add(plate);
      const ph = [0, 1, 2].map(i => { const s = glowSprite('#b48cff', 0.6, 0); group.add(s); return s; });
      const el = [0, 1, 2].map(i => { const s = glowSprite('#7fd3ff', 0.4, 0); group.add(s); return s; });
      const tag = P(pill('E = h ν', { bg: '#f2eee8', fg: '#2b241f', h: 0.5, size: 0.5 }), -1.1, 3.4, 0.8); group.add(tag);
      const tag2 = P(pill('1 photon → 1 electron', { bg: C.orange, fg: '#2a1408', h: 0.44, size: 0.42 }), 0.6, 2.75, 0.8); group.add(tag2);
      return { plate, ph, el, tag, tag2 };
    },
    update({ plate, ph, el, tag, tag2 }, lt) {
      const L = k => B_('photon', k);
      popIn(plate, lt, 0.1, 0.45);
      ph.forEach((s, i) => {
        const t0 = 0.4 + i * 0.9, u = ((lt - t0) % 2.7) / 1.0;
        const x = -1.0 + i * 0.9;
        if (lt < t0 || u > 1) { s.material.opacity = 0; } else { s.position.set(x - 1.4 * (1 - u), 0.3 + 3.2 * (1 - u) + Math.sin(u * 30) * 0.12, 0.3); s.material.opacity = 0.95; }
        const e = el[i], v = ((lt - t0) % 2.7 - 1.0) / 1.2;
        if (lt < t0 + 1 || v < 0 || v > 1 || lt < L(2)) e.material.opacity = 0; else { e.position.set(x + v * 0.8, 0.3 + v * 2.4, 0.3); e.material.opacity = 0.95 * (1 - v * 0.5); }
      });
      popIn(tag, lt, L(1), 0.45); popIn(tag2, lt, L(3), 0.45);
    },
  },

  // 3 ── BUDGET (cream): hν = φ + KE_max as a split energy bar + equations ──────
  {
    id: 'budget', ...T_('budget'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 2.9, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.055}px ${FONT.mono}`; ctx.fillText('ENERGY BUDGET', W * 0.05, H * 0.09);
        const px = H * 0.1;
        mathText(ctx, 'h ν = φ + KE_{max}', W / 2, H * 0.27, px, { ...serif, color: st >= 1 ? ORANGE : INK, align: 'center' });
        // bar: hν split into φ and KE
        const x0 = W * 0.08, w = W * 0.84, y = H * 0.36, h = H * 0.13, phiW = w * 0.62;
        if (st >= 1) {
          ctx.fillStyle = '#d6cdc4'; ctx.fillRect(x0, y, phiW, h); ctx.fillStyle = C.orange; ctx.fillRect(x0 + phiW, y, w - phiW, h);
          ctx.fillStyle = INK; ctx.font = `700 ${H * 0.055}px ${FONT.mono}`; ctx.textAlign = 'center';
          ctx.fillText('φ', x0 + phiW / 2, y + h * 0.68); ctx.fillText('KE', x0 + phiW + (w - phiW) / 2, y + h * 0.68); ctx.textAlign = 'left';
        }
        if (st >= 2) mathText(ctx, 'φ = work function', W * 0.08, H * 0.6, px * 0.6, { family: FONT.mono, weight: 600, color: INK });
        if (st >= 3) mathText(ctx, '(energy to escape the metal)', W * 0.08, H * 0.68, px * 0.5, { family: FONT.mono, weight: 500, color: MUTED });
        if (st >= 4) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.roundRect(W * 0.06, H * 0.74, W * 0.88, H * 0.2, H * 0.04); ctx.stroke();
          mathText(ctx, 'h ν = h ν_0 + ½ m v²', W / 2, H * 0.86, px * 0.9, { ...serif, color: ORANGE, align: 'center' });
        }
        if (st >= 5) { ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.04}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText('ν₀ = threshold frequency', W / 2, H * 0.975); ctx.textAlign = 'left'; }
      }), 0.3, 2.1, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('budget', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(2), L(3), L(4), L(5)]));
      f.position.y = 2.1 + wobble(lt, 0.4, 0.02);
    },
  },

  // 4 ── METAL (dark): potassium, φ = 2.0 eV; red / green / violet (Fig. 5.8) ───
  {
    id: 'metal', ...T_('metal'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.3, 12.4 - lt * 0.06], look: [0.2, 1.7, 0], fov: 32 }),
    build({ group }) {
      const r = P(rig(), 0.2, 0, 0); group.add(r);
      const es = electrons(r, 6);
      const tag = P(pill('potassium · φ = 2.0 eV', { bg: '#f2eee8', fg: '#2b241f', h: 0.42, size: 0.4 }), 0.2, -0.3, 1.4); group.add(tag);
      const rE = P(readout({ label: 'hν', unit: 'eV', w: 1.8, digits: 2 }), 1.3, 3.45, 0.6); group.add(rE);
      const rV = P(readout({ label: 'v', unit: 'km/s', w: 1.9, digits: 0, accent: '#7fd3ff' }), 1.3, 2.7, 0.6); group.add(rV);
      const no = P(pill('no electrons', { bg: '#c0392b', fg: '#fff', h: 0.42, size: 0.42 }), 1.3, 1.95, 0.6); group.add(no);
      return { r, es, tag, rE, rV, no };
    },
    update({ r, es, tag, rE, rV, no }, lt) {
      const L = k => B_('metal', k);
      popIn(r, lt, 0.1, 0.5); popIn(tag, lt, 0.3, 0.4);
      const phase = lt < L(1) ? -1 : lt < L(3) ? 0 : lt < L(4) ? 1 : 2;       // −1 none · 0 red · 1 green · 2 violet
      const COL = ['#ff3b30', '#33d17a', '#8a3bff'], E = [1.77, 2.25, 3.1], V = [0, 296, 622];
      r.setBeam(phase < 0 ? '#ffffff' : COL[phase], phase < 0 ? 0 : 1);
      es.set(lt, phase >= 1, phase === 2 ? 2.2 : 1.0);
      popIn(rE, lt, L(1), 0.45); popIn(rV, lt, L(3), 0.45);
      rE.show(phase < 0 ? 0 : E[phase]); rV.show(phase < 0 ? 0 : V[phase]);
      no.visible = phase === 0 && lt > L(2) - 0.2; popIn(no, lt, L(2), 0.4);
    },
  },

  // 5 ── GRAPHS (cream): I–intensity, I–V with −V₀, KE–ν from ν₀ ───────────────
  {
    id: 'graphs', ...T_('graphs'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.9 - lt * 0.06], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.4, h: 3.1, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        const panel = (k, title, draw) => {
          const y0 = H * (0.03 + k * 0.325), ph = H * 0.29, x0 = W * 0.14, pw = W * 0.8;
          ctx.fillStyle = MUTED; ctx.font = `700 ${H * 0.036}px ${FONT.mono}`; ctx.fillText(title, W * 0.05, y0 + H * 0.035);
          const ax = x0, ay = y0 + ph;
          ctx.strokeStyle = INK; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(ax, y0 + H * 0.05); ctx.lineTo(ax, ay); ctx.lineTo(x0 + pw, ay); ctx.stroke();
          draw(ax, ay, pw, ph - H * 0.06);
        };
        if (st >= 1) panel(0, 'I vs INTENSITY', (ax, ay, pw, ph) => {
          ctx.strokeStyle = ORANGE; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(ax, ay); ctx.lineTo(ax + pw * 0.9, ay - ph * 0.85); ctx.stroke();
        });
        if (st >= 2) panel(1, 'I vs V', (ax, ay, pw, ph) => {
          const zx = ax + pw * 0.35;                                         // V = 0
          ctx.strokeStyle = '#d6cdc4'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(zx, ay); ctx.lineTo(zx, ay - ph); ctx.stroke();
          [[0.85, ORANGE], [0.5, BLUE]].forEach(([sat, col]) => {
            ctx.strokeStyle = col; ctx.lineWidth = 5; ctx.beginPath();
            for (let i = 0; i <= 40; i++) { const u = i / 40, x = ax + pw * 0.12 + u * pw * 0.86, I = sat * ph * (1 - Math.exp(-u * 6)); ctx.lineTo(x, ay - I); }
            ctx.stroke();
          });
          if (st >= 3) { ctx.fillStyle = ORANGE; ctx.beginPath(); ctx.arc(ax + pw * 0.12, ay, H * 0.014, 0, 7); ctx.fill(); mathText(ctx, '−V_0', ax + pw * 0.12, ay + H * 0.04, H * 0.045, { ...serif, color: ORANGE, align: 'center' }); }
        });
        if (st >= 4) panel(2, 'KE vs ν', (ax, ay, pw, ph) => {
          const nx = ax + pw * 0.35;
          ctx.strokeStyle = ORANGE; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(nx, ay); ctx.lineTo(ax + pw * 0.95, ay - ph * 0.9); ctx.stroke();
          ctx.setLineDash([8, 6]); ctx.strokeStyle = '#b9b0a6'; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(nx, ay); ctx.lineTo(ax + pw * 0.05, ay + ph * 0.45); ctx.stroke(); ctx.setLineDash([]);
          if (st >= 5) mathText(ctx, 'ν_0', nx, ay + H * 0.045, H * 0.045, { ...serif, color: ORANGE, align: 'center' });
          if (st >= 6) mathText(ctx, 'slope = h', ax + pw * 0.7, ay - ph * 0.3, H * 0.045, { family: FONT.mono, weight: 700, color: BLUE, align: 'center' });
        });
      }), 0.3, 2.0, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('graphs', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(4), L(5), L(7), L(8), L(9)]));
      f.position.y = 2.0 + wobble(lt, 0.4, 0.02);
    },
  },

  // 6 ── WHY (dark): how many vs how fast ──────────────────────────────────────
  {
    id: 'why', ...T_('why'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.3, 12.4 - lt * 0.1], look: [0.2, 1.7, 0], fov: 32 }),
    build({ group }) {
      const r = P(rig(), 0.2, 0, 0); group.add(r);
      const es = electrons(r, 10);
      const p1 = P(pill('intensity → how many', { bg: '#f2eee8', fg: '#2b241f', h: 0.44, size: 0.42 }), 0.3, 3.55, 0.8); group.add(p1);
      const p2 = P(pill('frequency → how fast', { bg: C.orange, fg: '#2a1408', h: 0.44, size: 0.42 }), 0.3, 2.95, 0.8); group.add(p2);
      return { r, es, p1, p2 };
    },
    update({ r, es, p1, p2 }, lt) {
      const L = k => B_('why', k);
      popIn(r, lt, 0.1, 0.45);
      r.setBeam('#8a3bff', lt < L(1) ? 0.4 + 0.6 * prog(lt, 0.3, 0.8) : 0.7);
      es.set(lt, true, lt < L(1) ? 0.9 : 2.4);
      es.forEach((s, i) => { if (lt < L(1) && i >= 4 + Math.floor(6 * prog(lt, 0.3, 0.8))) s.material.opacity = 0; });
      popIn(p1, lt, 0.4, 0.45); popIn(p2, lt, L(1) + 0.2, 0.45);
    },
  },

  // 7 ── RECAP (cream) ──────────────────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1 · 7', items: [['photon energy', 'h ν'], ['h ν = φ + KE', 'budget'], ['threshold', 'ν₀ = φ / h'], ['I ∝ intensity', 'how many'], ['stopping potential', '−V₀'], ['KE vs ν slope', 'h']] }), 0.3, 2.05, 0); group.add(s);
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
      const p1 = P(pill('packets', { bg: '#efe9e2', fg: '#5d554e', h: 0.46, size: 0.42 }), -1.0, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('each h ν', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.42 }), 1.0, 2.8, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Photoelectric Effect',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the graphs on screen.
Say "h nu" for hν, "phi" for φ, "K E" letter by letter, "e V" as "electron volts". Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 7]] },
  captions,
  scenes,
};

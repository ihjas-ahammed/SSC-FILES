// Nanoscience lecture 1 · video 6: Bohr's model: collapse problem, L = nh/2π, r_n = n²a₀/Z, E_n = E₁Z²/n², line spectra, QDs.
// Source: Chattopadhyay & Banerjee Ch. 5 §5.3.1 pp. 76–79, Eqs. 5.7–5.14; Fig. 5.5 p. 78 (hydrogen series);
//         p. 79 excitons and quantum dots, Fig. 5.6 (CdSe/ZnS QDs: 1.9 nm → 490 nm … 5.2 nm → 620 nm).
import * as THREE from 'three';
import voice from './nano-06-bohr.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { pow } from '../props/custom/nano.js';
import { pill, sphere, torus, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };

const LINES = [
  ['hook', 'Why don’t atoms [collapse?]'],
  [0, 'Classically, they [should.]'],
  ['classic', 'An electron circles'],
  [0, 'a nucleus of charge [Ze.]'],
  [0, 'Coulomb pull supplies the'],
  [0, '[centripetal] force.'],
  [0, 'But a circling charge'],
  [0, '[radiates] energy,'],
  [0, 'and spirals [inward.]'],
  ['bohr', 'Bohr’s fix: [quantize]'],
  [0, 'the angular momentum.'],
  [0, 'm v r comes in steps', 'm v r comes in steps'],
  [0, 'of [h over 2 pi.]'],
  [0, 'Only [certain orbits]'],
  [0, 'are allowed.'],
  [0, 'Radius grows as [n squared;]'],
  [0, 'the first is [0.053 nanometers.]', 'the first is zero point zero five three nanometers.'],
  ['levels', 'Energy goes as'],
  [0, '[Z squared over n squared;]'],
  [0, 'hydrogen’s ground state:'],
  [0, '[minus 13.6] electron volts.', 'minus thirteen point six electron volts.'],
  [0, 'Jump down a level,'],
  [0, 'and light carries the'],
  [0, '[energy gap:] h c over lambda.'],
  ['spectrum', 'Falling to level one:'],
  [0, 'Lyman, [ultraviolet.]'],
  [0, 'To level two:'],
  [0, 'Balmer, [visible.]'],
  [0, 'To level three: Paschen,'],
  [0, '[infrared.]'],
  ['dots', 'The same maths describes'],
  [0, '[excitons] in quantum dots.'],
  [0, 'Smaller dot,'],
  [0, '[bluer] light.'],
  ['recap', 'Quick [recap:]'],
  [0, 'collapse, quantize, radius,'],
  [0, 'energy, series, [dots.]'],
  ['outro', 'Fixed [orbits,]'],
  [0, '[sharp colours.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

const ring = (r, color = '#d6cdc4') => { const t = torus(r, 0.018, new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.8 })); t.rotation.x = Math.PI / 2 - 0.35; return t; };
const onRing = (r, a) => [Math.cos(a) * r, Math.sin(a) * r * Math.sin(0.35), Math.sin(a) * r * Math.cos(0.35)]; // a point on a ring tilted like ring()

const scenes = [
  // 1 ── HOOK (cream): a tiny atom on the plinth, electron orbit ────────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.15, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.4 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.8 }), -1.1, 0.22, 0.2); group.add(bot);
      const atom = new THREE.Group(); P(atom, 1.0, 2.0, 0.6); group.add(atom);
      atom.add(sphere(0.2, clay('#c0392b', { emissive: '#7a1c12', emissiveIntensity: 0.4 })));
      atom.add(ring(0.9, '#8a8178'));
      const e = glowSprite('#2f7bb0', 0.4, 0.95); atom.add(e);
      const q = P(pill('collapse?', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 1.0, 3.45, 0.9); group.add(q);
      return { bot, atom, e, q };
    },
    update({ bot, atom, e, q }, lt) {
      popIn(atom, lt, 0.2, 0.5);
      const r = lt < B_('hook', 1) ? 0.9 : lerp(0.9, 0.25, prog(lt, B_('hook', 1) + 0.3, 1.2));
      e.position.set(...onRing(r, lt * 3.5));
      popIn(q, lt, 0.8, 0.45);
      bot.set(lt, { mood: lt < B_('hook', 1) ? 'think' : 'worried', turn: 0.35 });
    },
  },

  // 2 ── CLASSIC (dark): Coulomb + centripetal, then a radiating death spiral ───
  {
    id: 'classic', ...T_('classic'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 3.0, 12.4 - lt * 0.1], look: [0.2, 1.9, 0], fov: 32 }),
    build({ group }) {
      const atom = new THREE.Group(); P(atom, 0.2, 1.35, 0); group.add(atom);
      atom.add(sphere(0.3, clay('#c0392b', { emissive: '#7a1c12', emissiveIntensity: 0.5 })));
      const orbit = ring(1.6, '#5d554e'); atom.add(orbit);
      const e = glowSprite('#7fd3ff', 0.55, 0.95); atom.add(e);
      const trail = Array.from({ length: 24 }, () => { const s = glowSprite('#7fd3ff', 0.18, 0); atom.add(s); return s; });
      const waves = Array.from({ length: 6 }, () => { const s = glowSprite('#ffd27a', 0.5, 0); atom.add(s); return s; });
      const card = P(stagedCard({ w: 3.3, h: 0.95, d: 0.1, r: 0.08, color: '#f2eee8' }, (ctx, W, H, st) => {
        mathText(ctx, 'F =', W * 0.06, H * 0.62, H * 0.32, { ...serif, color: INK });
        mathFrac(ctx, '1', '4πε_0', W * 0.33, H * 0.48, H * 0.26, { ...serif, color: INK });
        mathFrac(ctx, 'Ze²', 'r²', W * 0.53, H * 0.48, H * 0.26, { ...serif, color: INK });
        if (st >= 1) { mathText(ctx, '=', W * 0.64, H * 0.62, H * 0.32, { ...serif, color: ORANGE }); mathFrac(ctx, 'm v²', 'r', W * 0.82, H * 0.48, H * 0.26, { ...serif, color: ORANGE }); }
      }), 0.2, 3.0, 0.3); group.add(card);
      const p = P(pill('radiates → spirals in', { bg: C.orange, fg: '#2a1408', h: 0.44, size: 0.42 }), 0.2, 0.3, 1.3); group.add(p);
      return { atom, e, trail, waves, card, p };
    },
    update({ atom, e, trail, waves, card, p }, lt) {
      const L = k => B_('classic', k);
      popIn(atom, lt, 0.1, 0.5);
      const fall = prog(lt, L(5), 2.6, ease.in);
      const rAt = t => lerp(1.6, 0.25, prog(t, L(5), 2.6, ease.in));
      const ang = t => t * 2.4 + Math.max(0, t - L(5)) ** 2 * 1.2;
      e.position.set(...onRing(rAt(lt), ang(lt)));
      trail.forEach((s, i) => { const t = lt - (i + 1) * 0.06; s.position.set(...onRing(rAt(t), ang(t))); s.material.opacity = lt > L(5) ? 0.5 * (1 - i / 24) : 0; });
      waves.forEach((s, i) => { const u = (lt * 0.8 + i / 6) % 1; const a = i * 1.05; s.position.set(Math.cos(a) * (0.6 + u * 2), Math.sin(a) * (0.6 + u * 2) * 0.5, 0.2); s.material.opacity = lt > L(5) ? 0.6 * (1 - u) * (1 - fall * 0.5) : 0; });
      popIn(card, lt, L(1), 0.45); card.stage(steps(lt, [L(2) + 0.6]));
      popIn(p, lt, L(6), 0.45);
    },
  },

  // 3 ── BOHR (cream): quantized orbits n = 1, 2, 3 + formula card ──────────────
  {
    id: 'bohr', ...T_('bohr'), env: 'cream', zoom: 1.15, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.0, 12.8 - lt * 0.08], look: [0.3, 1.8, 0], fov: 32 }),
    build({ group }) {
      const atom = new THREE.Group(); P(atom, 0.3, 1.15, 0); group.add(atom);
      atom.add(sphere(0.18, clay('#c0392b')));
      const rings = [0.45, 1.1, 2.0].map(r => { const t = ring(r, '#8a8178'); atom.add(t); return t; });
      const e = glowSprite('#2f7bb0', 0.42, 0.95); atom.add(e);
      const f = P(stagedCard({ w: 3.4, h: 1.55, d: 0.1, r: 0.08, color: '#f7f4ef' }, (ctx, W, H, st) => {
        const px = H * 0.2;
        mathText(ctx, 'L = m v r =', W * 0.06, H * 0.36, px, { ...serif, color: INK });
        mathFrac(ctx, 'n h', '2π', W * 0.66, H * 0.27, px, { ...serif, color: st >= 1 ? ORANGE : INK });
        mathText(ctx, '(5.9)', W * 0.95, H * 0.36, px * 0.6, { family: FONT.mono, color: MUTED, align: 'right' });
        if (st >= 2) { pow(ctx, 'r_n = n', '2', ' a₀ / Z', W * 0.06, H * 0.78, px, { ...serif, color: INK }); }
        if (st >= 3) mathText(ctx, 'a₀ = 0.053 nm', W * 0.95, H * 0.78, px * 0.75, { family: FONT.mono, weight: 700, color: ORANGE, align: 'right' });
      }), 0.3, 3.05, 0.4); group.add(f);
      const labels = [1, 2, 3].map((n, i) => { const p = pill(`n = ${n}`, { bg: '#efe9e2', fg: '#2b241f', h: 0.32, size: 0.36 }); P(p, 0.3 + [0.45, 1.1, 2.0][i] + 0.05, 1.15, 0.4); group.add(p); return p; });
      return { atom, rings, e, f, labels };
    },
    update({ atom, rings, e, f, labels }, lt) {
      const L = k => B_('bohr', k);
      popIn(atom, lt, 0.1, 0.5);
      rings.forEach((r, i) => popIn(r, lt, L(4) + i * 0.25, 0.45));
      labels.forEach((p, i) => popIn(p, lt, L(4) + 0.3 + i * 0.25, 0.4));
      const n = lt < L(4) ? 1 : 1 + Math.min(2, Math.floor((lt - L(4)) / 1.2) % 3);
      const r = [0.45, 1.1, 2.0][n - 1];
      e.position.set(...onRing(r, lt * (3.2 / n)));
      popIn(f, lt, 0.4, 0.5); f.stage(steps(lt, [L(3), L(6), L(7)]));
    },
  },

  // 4 ── LEVELS (dark): E_n = E₁Z²/n², a downward jump emits a photon ──────────
  {
    id: 'levels', ...T_('levels'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.6 - lt * 0.08], look: [0.3, 1.95, 0], fov: 33 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.6, h: 3.0, d: 0.12, r: 0.1, color: '#f2eee8' }, (ctx, W, H, st) => {
        const px = H * 0.1;
        mathText(ctx, 'E_n = E_1', W * 0.06, H * 0.15, px, { ...serif, color: INK });
        mathFrac(ctx, 'Z²', 'n²', W * 0.47, H * 0.115, px, { ...serif, color: st >= 1 ? ORANGE : INK });
        if (st >= 2) mathText(ctx, 'E₁ = −13.6 eV', W * 0.4, H * 0.78, px * 0.7, { family: FONT.mono, weight: 700, color: ORANGE, align: 'center' });
        // levels −13.6/n²: map energy −14…0 to y
        const Y = E => H * 0.92 - (E + 13.6) / 13.6 * H * 0.5;
        [1, 2, 3, 4, 5].forEach(n => { const y = Y(-13.6 / n / n); ctx.fillStyle = INK; ctx.fillRect(W * 0.12, y, W * 0.56, 3); if (n <= 3) { ctx.font = `700 ${H * 0.055}px ${FONT.mono}`; ctx.fillStyle = n === 1 ? ORANGE : INK; ctx.fillText(`n=${n}`, W * 0.72, y + H * 0.018); } });
        if (st >= 4) {
          const x = W * 0.4, y1 = Y(-13.6 / 9), y2 = Y(-13.6 / 4);
          ctx.strokeStyle = ORANGE; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(x, y1); ctx.lineTo(x, y2 - H * 0.02); ctx.stroke();
          ctx.fillStyle = ORANGE; ctx.beginPath(); ctx.moveTo(x - W * 0.02, y2 - H * 0.03); ctx.lineTo(x + W * 0.02, y2 - H * 0.03); ctx.lineTo(x, y2); ctx.fill();
        }
        if (st >= 5) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.01; ctx.beginPath(); ctx.roundRect(W * 0.05, H * 0.24, W * 0.9, H * 0.13, H * 0.03); ctx.stroke();
          mathText(ctx, 'ΔE = E_f − E_i = hc/λ', W / 2, H * 0.335, px * 0.8, { ...serif, color: ORANGE, align: 'center' });
        }
      }), 0.3, 2.15, 0); group.add(f);
      const ph = P(glowSprite('#ff5a4a', 0.7, 0), 0, 0, 0.4); group.add(ph);
      return { f, ph };
    },
    update({ f, ph }, lt) {
      const L = k => B_('levels', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(3), 999, L(4), L(6)]) + (lt >= L(4) ? 1 : 0));
      const u = prog(lt, L(5), 1.4, ease.out);
      ph.position.set(lerp(0.0, 2.6, u), lerp(1.9, 2.6, u) + Math.sin(u * 30) * 0.08, 0.4);
      ph.material.opacity = lt >= L(5) ? 0.9 * (1 - u * 0.6) : 0;
      f.position.y = 2.15 + wobble(lt, 0.4, 0.02);
    },
  },

  // 5 ── SPECTRUM (cream): Lyman UV / Balmer visible / Paschen IR (Fig. 5.5) ────
  {
    id: 'spectrum', ...T_('spectrum'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 2.8, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.055}px ${FONT.mono}`; ctx.fillText('HYDROGEN SERIES · FIG. 5.5', W * 0.05, H * 0.09);
        const rows = [
          ['Lyman', '→ n=1', 'UV', '#7b5ea7', ['122', '103', '97']],
          ['Balmer', '→ n=2', 'visible', '#e2652a', ['656', '486', '434', '410']],
          ['Paschen', '→ n=3', 'infrared', '#8c3b2b', ['1875', '1282', '1094']],
        ];
        rows.slice(0, st).forEach(([name, to, band, col, nm], i) => {
          const y = H * (0.26 + i * 0.25);
          ctx.fillStyle = INK; ctx.font = `700 ${H * 0.065}px ${FONT.sans}`; ctx.fillText(name, W * 0.06, y);
          ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.05}px ${FONT.mono}`; ctx.fillText(to, W * 0.38, y);
          ctx.fillStyle = col; ctx.font = `700 ${H * 0.055}px ${FONT.mono}`; ctx.textAlign = 'right'; ctx.fillText(band, W * 0.94, y); ctx.textAlign = 'left';
          // a little spectrum strip with lines
          const sx = W * 0.06, sw = W * 0.88, sy = y + H * 0.04, sh = H * 0.08;
          ctx.fillStyle = '#1e1a17'; ctx.fillRect(sx, sy, sw, sh);
          nm.forEach((v, j) => {
            const c = i === 1 ? ['#ff3b30', '#33c3f0', '#4a5cff', '#8a3bff'][j] : col;
            const x = sx + sw * (0.15 + j * 0.22);
            ctx.fillStyle = c; ctx.fillRect(x, sy + 2, W * 0.012, sh - 4);
            ctx.fillStyle = i === 1 ? '#f2eee8' : '#d6cdc4'; ctx.font = `600 ${H * 0.036}px ${FONT.mono}`; ctx.fillText(v, x + W * 0.02, sy + sh * 0.7);
          });
        });
        if (st >= 3) { ctx.fillStyle = MUTED; ctx.font = `500 ${H * 0.04}px ${FONT.mono}`; ctx.fillText('wavelengths in nm', W * 0.06, H * 0.96); }
      }), 0.3, 2.1, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('spectrum', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(3), L(5)]));
      f.position.y = 2.1 + wobble(lt, 0.4, 0.02);
    },
  },

  // 6 ── DOTS (dark): CdSe quantum dots, size → colour (Fig. 5.6) ───────────────
  {
    id: 'dots', ...T_('dots'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 3.0, 12.4 - lt * 0.08], look: [0.2, 1.6, 0], fov: 32 }),
    build({ group }) {
      const QD = [[1.9, '#2f8cff', '490'], [2.4, '#2fd07a', '540'], [3.2, '#e8d23a', '580'], [4.2, '#ff9a2f', '600'], [5.2, '#ff5a2f', '620']];
      const dots = QD.map(([d, col, nm], i) => {
        const g = new THREE.Group(); P(g, -1.7 + i * 0.95, 1.4, 0); group.add(g);
        const s = sphere(0.12 + d * 0.06, clay(col, { emissive: col, emissiveIntensity: 0.9 })); g.add(s);
        const h = glowSprite(col, 1.2 + d * 0.15, 0.7); g.add(h);
        const lab = pill(`${d} nm`, { bg: '#3a312b', fg: '#d6cdc4', h: 0.32, size: 0.36 }); P(lab, 0, -0.75, 0.3); g.add(lab);
        const lab2 = pill(`${nm} nm`, { bg: '#f2eee8', fg: '#2b241f', h: 0.3, size: 0.34 }); P(lab2, 0, 0.75, 0.3); g.add(lab2);
        return g;
      });
      const t1 = P(pill('size ↓  colour → blue', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.42 }), 0.2, 3.3, 0.8); group.add(t1);
      const t2 = P(pill('exciton ≈ tiny Bohr atom', { bg: '#f2eee8', fg: '#2b241f', h: 0.42, size: 0.4 }), 0.2, 0.3, 1.2); group.add(t2);
      return { dots, t1, t2 };
    },
    update({ dots, t1, t2 }, lt) {
      const L = k => B_('dots', k);
      dots.forEach((d, i) => { popIn(d, lt, 0.2 + (4 - i) * 0.2, 0.45); d.position.y = 1.4 + wobble(lt, 0.5, 0.05, i); });
      popIn(t2, lt, L(1) + 0.2, 0.45);
      popIn(t1, lt, L(2) + 0.3, 0.45);
    },
  },

  // 7 ── RECAP (cream) ──────────────────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1 · 6', items: [['classical atom', 'collapses'], ['L = m v r', 'n h / 2π'], ['r_n = n² a₀ / Z', '0.053 nm'], ['E_n = E_1 Z² / n²', '−13.6 eV'], ['Lyman · Balmer · Paschen', 'UV · vis · IR'], ['quantum dots', 'size → colour']] }), 0.3, 2.05, 0); group.add(s);
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
      const p1 = P(pill('fixed orbits', { bg: '#efe9e2', fg: '#5d554e', h: 0.46, size: 0.4 }), -1.1, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('sharp colours', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.4 }), 1.1, 2.7, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Bohr’s Atom',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the equations on screen.
Say "m v r" letter by letter, "Z e" as "zed e" or "Z e". Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 6]] },
  captions,
  scenes,
};

// Nanoscience lecture 1 · video 8: wave-particle duality → de Broglie → nλ = 2πr_n (semiclassical Bohr) → Davisson–Germer → why it matters for nano.
// Sources: Chattopadhyay & Banerjee Ch. 5 §5.3.2 pp. 79–82: Eq. 5.15 nλ = d sin θ (Fig. 5.7), Eq. 5.16, Eq. 5.17 λ = h/p,
//          Fig. 5.9 (Bohr–de Broglie standing waves), Fig. 5.10 (Davisson–Germer: 54 V, Ni, d = 2.15 Å, 50°, 1.65 Å vs 1.67 Å).
//          Kulkarni Ch. 1 §1.2 Matter Waves (Eq. 1.12), Box 1.1 (Bohr's stationary states explained by de Broglie), Box 1.9.
// Derivation shown (lecture note): mv²/r = e²/4πε₀r² → v = e/√(4πε₀ m r); λ = h/mv = (h/e)√(4πε₀ r/m);
//          nλ = 2πr → (nh/e)√(4πε₀ r_n/m) = 2πr_n → r_n = n²h²ε₀/(π m e²) = n² a₀.
import * as THREE from 'three';
import voice from './nano-08-duality.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, summaryCard, summaryTicks } from '../scenes/teach.js';
import { pow, radical } from '../props/custom/nano.js';
import { pill, sphere, rbox, cyl, torus, clay, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };

const LINES = [
  ['hook', 'Is light a [wave]'],
  [0, 'or a [particle?]'],
  [0, 'The answer is [both.]'],
  ['young', 'Two slits make'],
  [0, '[bright and dark] fringes:'],
  [0, 'a wave pattern.'],
  [0, 'Bright where n lambda'],
  [0, 'equals [d sine theta.]'],
  ['pair', 'Photoelectric effect:'],
  [0, 'light as [particles.]'],
  [0, 'Interference:'],
  [0, 'light as [waves.]'],
  [0, 'That is [duality.]'],
  ['broglie', 'De Broglie flipped it:'],
  [0, 'matter has a [wavelength,]'],
  [0, 'too.'],
  [0, 'Lambda equals [h over p,]'],
  [0, 'or h over m v.'],
  ['orbit', 'Fit that wave on an orbit.'],
  [0, 'It must [close on itself:]'],
  [0, 'n lambda equals [2 pi r.]'],
  [0, 'Put in the electron’s speed'],
  [0, 'and solve for r:'],
  [0, 'radius goes as [n squared.]'],
  [0, '[Bohr’s orbits] fall out.'],
  ['dg', 'Davisson and Germer'],
  [0, 'fired [54-volt] electrons', 'fired fifty-four volt electrons'],
  [0, 'at a [nickel] crystal.'],
  [0, 'Measured: [1.65 angstrom.]', 'Measured: one point six five angstrom.'],
  [0, 'Predicted: [1.67.]', 'Predicted: one point six seven.'],
  [0, 'Electrons [diffract.]'],
  ['why', 'Why does it matter?'],
  [0, 'In a nanostructure,'],
  [0, 'the box is as small as'],
  [0, 'the [electron’s wave.]'],
  [0, 'The wave gets [confined,]'],
  [0, 'and quantum effects'],
  [0, '[appear.]'],
  ['recap', 'Quick [recap:]'],
  [0, 'slits, duality, lambda,'],
  [0, 'orbit, nickel, [confinement.]'],
  ['outro', 'Wave and [particle,]'],
  [0, '[one electron.]'],
];
const { captions, DURATION, span: T_, at: B_ } = buildScript(LINES);

// closed standing wave around a circle of radius R with n wavelengths, amplitude A, phase ph (in the xy-plane)
function standingLoop(R, n, A, ph = 0, color = ORANGE) {
  const pts = Array.from({ length: 240 }, (_, i) => { const a = i / 240 * Math.PI * 2; const r = R + A * Math.sin(n * a) * Math.cos(ph); return new THREE.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0); });
  return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts, true), 240, 0.035, 8, true), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.5 }));
}
// a sine wave tube along x from −L/2 to L/2
function sineTube(L, k, A, color = '#7fd3ff', r = 0.03) {
  const pts = Array.from({ length: 120 }, (_, i) => { const x = -L / 2 + i / 119 * L; return new THREE.Vector3(x, A * Math.sin(k * x), 0); });
  return new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 160, r, 8), new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6 }));
}

const scenes = [
  // 1 ── HOOK (cream): a photon that is both a dot and a wave ───────────────────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.2, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.4 - lt * 0.15], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.8 }), 0, 0.22, -0.4); group.add(bot);
      const wave = P(sineTube(2.4, 5, 0.25, '#2f7bb0', 0.04), -1.3, 2.7, 0.6); group.add(wave);
      const dot = P(sphere(0.22, clay(C.orange, { emissive: '#e2652a', emissiveIntensity: 0.5 })), 1.4, 2.7, 0.6); group.add(dot);
      const p1 = P(pill('wave', { bg: '#dbe8f1', fg: '#1d3a52', h: 0.42, size: 0.42 }), -1.3, 3.5, 0.8); group.add(p1);
      const p2 = P(pill('particle', { bg: C.orange, fg: '#2a1408', h: 0.42, size: 0.42 }), 1.4, 3.5, 0.8); group.add(p2);
      return { bot, wave, dot, p1, p2 };
    },
    update({ bot, wave, dot, p1, p2 }, lt) {
      const L = k => B_('hook', k);
      popIn(wave, lt, 0.2, 0.45); popIn(p1, lt, 0.4, 0.4); wave.position.x = -1.3 + Math.sin(lt * 2) * 0.05;
      popIn(dot, lt, L(1), 0.45); popIn(p2, lt, L(1) + 0.2, 0.4); dot.position.y = 2.7 + wobble(lt, 0.8, 0.08);
      bot.set(lt, { mood: lt < L(2) ? 'think' : 'happy', look: [lt < L(1) ? -0.6 : lt < L(2) ? 0.6 : 0, 0.2] });
    },
  },

  // 2 ── YOUNG (dark): two slits, ripples, fringes; nλ = d sin θ ───────────────
  {
    id: 'young', ...T_('young'), env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 4.6, 10.0 - lt * 0.05], look: [0.2, 0.9, 0], fov: 33 }),
    build({ group }) {
      const wall = new THREE.Group(); P(wall, -1.5, 0.5, 0); group.add(wall);
      [[-1.3, 1.6], [0, 0.9], [1.3, 1.6]].forEach(([z, len]) => { const b = P(rbox(0.12, 0.8, len, 0.03, clay('#8c8279')), 0, 0, z); wall.add(b); });
      const ripples = [];
      [-0.5, 0.5].forEach(z => { for (let i = 0; i < 5; i++) { const t = torus(1, 0.02, new THREE.MeshBasicMaterial({ color: '#7fd3ff', transparent: true, opacity: 0.6 })); t.rotation.x = Math.PI / 2; t.position.set(-1.5, 0.5, z); t.userData = { i, z }; group.add(t); ripples.push(t); } });
      const screen = P(stagedCard({ w: 0.15, h: 1.0, d: 0.06, r: 0.02, color: '#1e1a17', px: 300 }, () => {}), 1.7, 0.6, 0); screen.rotation.y = Math.PI / 2; group.add(screen);
      const fr = [];
      for (let k = -3; k <= 3; k++) { const s = P(glowSprite(k === 0 ? '#ffffff' : '#ffd27a', 0.5, 0), 1.6, 0.65, k * 0.42); group.add(s); s.userData.k = k; fr.push(s); }
      const f = P(stagedCard({ w: 2.6, h: 0.75, d: 0.08, r: 0.06, color: '#f2eee8' }, (ctx, W, H) => {
        mathText(ctx, 'n λ = d sin θ', W / 2, H * 0.64, H * 0.42, { ...serif, color: ORANGE, align: 'center' });
      }), 0.2, 2.75, 0.8); group.add(f);
      return { ripples, fr, f };
    },
    update({ ripples, fr, f }, lt) {
      const L = k => B_('young', k);
      ripples.forEach(t => { const u = ((lt * 0.5 + t.userData.i / 5) % 1); t.scale.setScalar(Math.max(0.01, u * 3.6)); t.material.opacity = 0.55 * (1 - u); t.visible = true; });
      fr.forEach(s => (s.material.opacity = 0.9 * prog(lt, L(1), 0.6) * (1 - Math.abs(s.userData.k) * 0.18)));
      popIn(f, lt, L(3) + 0.2, 0.45);
    },
  },

  // 3 ── PAIR (cream): photoelectric → particle, interference → wave ───────────
  {
    id: 'pair', ...T_('pair'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.08], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 2.6, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.06}px ${FONT.mono}`; ctx.fillText('LIGHT IS…', W * 0.05, H * 0.1);
        const col = (x, title, sub, colr, draw) => {
          ctx.fillStyle = INK; ctx.font = `700 ${H * 0.065}px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText(title, x, H * 0.26);
          ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.05}px ${FONT.mono}`; ctx.fillText(sub, x, H * 0.36); draw(x); ctx.fillStyle = colr; ctx.textAlign = 'left';
        };
        if (st >= 1) col(W * 0.27, 'particle', 'photoelectric', ORANGE, x => { for (let i = 0; i < 9; i++) { ctx.fillStyle = ORANGE; ctx.beginPath(); ctx.arc(x - W * 0.12 + (i % 3) * W * 0.12, H * 0.5 + Math.floor(i / 3) * H * 0.1, H * 0.03, 0, 7); ctx.fill(); } });
        if (st >= 2) col(W * 0.73, 'wave', 'interference', BLUE, x => { for (let i = 0; i < 7; i++) { ctx.fillStyle = `rgba(47,123,176,${1 - Math.abs(i - 3) * 0.25})`; ctx.fillRect(x - W * 0.17 + i * W * 0.05, H * 0.45, W * 0.025, H * 0.3); } });
        if (st >= 3) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.012; ctx.beginPath(); ctx.roundRect(W * 0.2, H * 0.8, W * 0.6, H * 0.14, H * 0.04); ctx.stroke();
          ctx.fillStyle = ORANGE; ctx.font = `700 ${H * 0.07}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText('duality', W / 2, H * 0.9); ctx.textAlign = 'left';
        }
      }), 0.3, 2.1, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      const L = k => B_('pair', k);
      popIn(f, lt, 0.15, 0.5);
      f.stage(steps(lt, [L(1), L(3), L(4)]));
      f.position.y = 2.1 + wobble(lt, 0.4, 0.02);
    },
  },

  // 4 ── DE BROGLIE (dark): an electron carrying its wave; λ = h/p = h/mv ───────
  {
    id: 'broglie', ...T_('broglie'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.4 - lt * 0.08], look: [0.3, 1.8, 0], fov: 32 }),
    build({ group }) {
      const e = P(glowSprite('#7fd3ff', 0.7, 0.95), 0, 1.3, 0.3); group.add(e);
      const w = P(sineTube(2.2, 7, 0.22), 0, 1.3, 0); group.add(w);
      const f = P(stagedCard({ w: 3.2, h: 1.3, d: 0.1, r: 0.08, color: '#f2eee8' }, (ctx, W, H, st) => {
        const px = H * 0.3;
        mathText(ctx, 'λ =', W * 0.08, H * 0.58, px, { ...serif, color: ORANGE });
        mathFrac(ctx, 'h', 'p', W * 0.36, H * 0.48, px, { ...serif, color: INK });
        if (st >= 1) { mathText(ctx, '=', W * 0.5, H * 0.58, px, { ...serif, color: INK }); mathFrac(ctx, 'h', 'm v', W * 0.68, H * 0.48, px, { ...serif, color: INK });  }
      }), 0.3, 3.0, 0.3); group.add(f);
      const tag = P(pill('matter waves', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.44 }), 0.3, 0.3, 1.2); group.add(tag);
      return { e, w, f, tag };
    },
    update({ e, w, f, tag }, lt) {
      const L = k => B_('broglie', k);
      const x = -1.4 + ((lt * 0.5) % 3.2);
      e.position.x = x; w.position.x = x; w.visible = lt > L(1); popIn(w, lt, L(1), 0.45);
      popIn(tag, lt, L(1) + 0.4, 0.45);
      popIn(f, lt, L(3) - 0.1, 0.5); f.stage(steps(lt, [L(4)]));
    },
  },

  // 5 ── ORBIT (cream): standing wave on an orbit, nλ = 2πr → r_n = n²a₀ ───────
  {
    id: 'orbit', ...T_('orbit'), env: 'cream', zoom: 1.1, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.8 - lt * 0.05], look: [0.3, 1.9, 0], fov: 32 }),
    build({ group }) {
      const loops = [3, 4, 5].map(n => { const m = standingLoop(0.45 + n * 0.08, n, 0.12); P(m, 0.3, 0.85, 0.3); group.add(m); m.userData.n = n; return m; });
      const nucleus = P(sphere(0.1, clay('#c0392b')), 0.3, 0.85, 0.3); group.add(nucleus);
      const nTag = [3, 4, 5].map(n => { const p = pill(`n = ${n}`, { bg: '#efe9e2', fg: '#2b241f', h: 0.32, size: 0.36 }); P(p, 1.5, 0.85, 0.5); group.add(p); return p; });
      const f = P(stagedCard({ w: 3.6, h: 2.3, d: 0.1, r: 0.08, color: '#f7f4ef' }, (ctx, W, H, st) => {
        const px = H * 0.13, o = { ...serif, color: INK };
        mathText(ctx, 'n λ = 2π r_n', W * 0.06, H * 0.22, px * 1.1, { ...serif, color: st >= 1 ? ORANGE : INK });
        if (st >= 2) {
          mathText(ctx, 'v =', W * 0.06, H * 0.5, px, o);
          mathFrac(ctx, 'e', '', W * 0.24, H * 0.43, px, o);
          const x0 = radical(ctx, W * 0.17, H * 0.47, H * 0.62, W * 0.2, INK);
          mathText(ctx, '4πε_0 m r', x0 + W * 0.005, H * 0.6, px * 0.85, o);
          mathText(ctx, 'Coulomb = centripetal', W * 0.95, H * 0.5, px * 0.45, { family: FONT.mono, color: MUTED, align: 'right' });
        }
        if (st >= 3) {
          mathText(ctx, 'n', W * 0.06, H * 0.84, px, o);
          mathFrac(ctx, 'h', 'e', W * 0.14, H * 0.78, px * 0.9, o);
          const x0 = radical(ctx, W * 0.2, H * 0.69, H * 0.93, W * 0.17, INK);
          mathFrac(ctx, '4πε_0 r_n', 'm', x0 + W * 0.085, H * 0.78, px * 0.7, o);
          mathText(ctx, '= 2π r_n', W * 0.47, H * 0.84, px, o);
        }
        if (st >= 4) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.016; ctx.beginPath(); ctx.roundRect(W * 0.6, H * 0.06, W * 0.36, H * 0.22, H * 0.05); ctx.stroke();
          pow(ctx, 'rₙ ∝ n', '2', '', W * 0.78, H * 0.22, px * 0.95, { ...serif, color: ORANGE, align: 'center' });
        }
      }), 0.3, 2.75, 0.2); group.add(f);
      const tag = P(pill('= Bohr: m v r = n h / 2π', { bg: C.orange, fg: '#2a1408', h: 0.42, size: 0.38 }), 0.3, 0.25, 1.4); group.add(tag);
      return { loops, nTag, f, tag };
    },
    update({ loops, nTag, f, tag }, lt) {
      const L = k => B_('orbit', k);
      const which = lt < L(1) ? 0 : Math.floor((lt - L(1)) / 2.2) % 3;
      loops.forEach((m, i) => { m.visible = i === which; m.rotation.z = lt * 0.3; m.scale.set(1, 1, 1); });
      nTag.forEach((p, i) => { p.visible = i === which; popIn(p, lt, 0.3, 0.4); });
      // the wave breathes like a standing wave
      loops.forEach(m => (m.scale.setScalar(1 + 0.02 * Math.sin(lt * 6))));
      popIn(f, lt, 0.2, 0.5); f.stage(steps(lt, [L(1), L(3), L(4), L(5)]));
      popIn(tag, lt, L(6), 0.45);
    },
  },

  // 6 ── DAVISSON–GERMER (dark): 54 V electrons on Ni, 1.65 Å vs 1.67 Å ────────
  {
    id: 'dg', ...T_('dg'), env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.4, 3.4, 12.2 - lt * 0.06], look: [0.3, 1.5, 0], fov: 32 }),
    build({ group }) {
      const gun = P(cyl(0.22, 0.22, 1.2, clay('#5d554e')), -0.6, 2.4, 0); group.add(gun);
      const xtal = new THREE.Group(); P(xtal, -0.6, 0.55, 0); group.add(xtal);
      for (let x = 0; x < 4; x++) for (let z = 0; z < 3; z++) for (let y = 0; y < 2; y++) { const a = sphere(0.13, clay('#b9b0a6', { metal: 0.6, rough: 0.35 })); a.position.set(-0.45 + x * 0.3, y * 0.3, -0.3 + z * 0.3); xtal.add(a); }
      const det = P(rbox(0.5, 0.4, 0.4, 0.05, clay('#2f7bb0')), 1.1, 2.0, 0); det.rotation.z = 0.7; group.add(det);
      const es = Array.from({ length: 8 }, () => { const s = glowSprite('#7fd3ff', 0.3, 0); group.add(s); return s; });
      const f = P(stagedCard({ w: 2.4, h: 1.35, d: 0.1, r: 0.08, color: '#f2eee8' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.1}px ${FONT.mono}`; ctx.fillText('Ni, d = 2.15 Å, 50°', W * 0.06, H * 0.18);
        if (st >= 1) { mathText(ctx, 'measured', W * 0.06, H * 0.47, H * 0.13, { family: FONT.mono, weight: 600, color: INK }); mathText(ctx, '1.65 Å', W * 0.94, H * 0.47, H * 0.15, { family: FONT.mono, weight: 700, color: BLUE, align: 'right' }); }
        if (st >= 2) { mathText(ctx, 'h / m v', W * 0.06, H * 0.78, H * 0.13, { ...serif, color: INK }); mathText(ctx, '1.67 Å', W * 0.94, H * 0.78, H * 0.15, { family: FONT.mono, weight: 700, color: ORANGE, align: 'right' }); }
      }), 1.0, 2.9, 0.4); group.add(f);
      const v = P(pill('54 V', { bg: C.orange, fg: '#2a1408', h: 0.42, size: 0.42 }), -1.35, 2.4, 0.5); group.add(v);
      const tag = P(pill('electrons diffract', { bg: '#f2eee8', fg: '#2b241f', h: 0.44, size: 0.42 }), 0.3, -0.2, 1.4); group.add(tag);
      return { gun, xtal, det, es, f, v, tag };
    },
    update({ gun, xtal, det, es, f, v, tag }, lt) {
      const L = k => B_('dg', k);
      popIn(gun, lt, 0.1, 0.45); popIn(xtal, lt, L(2) - 0.2, 0.5); popIn(det, lt, L(2), 0.45); popIn(v, lt, L(1) + 0.2, 0.4);
      es.forEach((s, i) => {
        const u = ((lt * 0.7 + i / 8) % 1); const on = lt > L(1);
        // down from the gun to the crystal, then up toward the detector at 50°
        if (u < 0.5) s.position.set(-0.6, lerp(1.8, 0.9, u * 2), 0.2); else s.position.set(lerp(-0.6, 0.95, (u - 0.5) * 2), lerp(0.9, 1.9, (u - 0.5) * 2), 0.2);
        s.material.opacity = on ? 0.9 : 0;
      });
      popIn(f, lt, L(3) - 0.2, 0.45); f.stage(steps(lt, [L(3), L(4)]));
      popIn(tag, lt, L(5), 0.45);
    },
  },

  // 7 ── WHY (cream): a nanodot as small as the electron wave ──────────────────
  {
    id: 'why', ...T_('why'), env: 'cream', zoom: 1.15, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 3.0, 12.6 - lt * 0.1], look: [0.3, 1.8, 0], fov: 32 }),
    build({ group }) {
      const box = P(rbox(2.6, 1.4, 1.0, 0.1, new THREE.MeshStandardMaterial({ color: C.orange, transparent: true, opacity: 0.25, roughness: 0.3, depthWrite: false })), 0.3, 1.5, 0); group.add(box);
      const waves = [1, 2, 3].map(n => { const pts = Array.from({ length: 80 }, (_, i) => { const x = -1.2 + i / 79 * 2.4; return new THREE.Vector3(x, 0.45 * Math.sin(n * Math.PI * (x + 1.2) / 2.4), 0); }); const m = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 120, 0.035, 8), new THREE.MeshStandardMaterial({ color: '#2f7bb0', emissive: '#2f7bb0', emissiveIntensity: 0.4 })); P(m, 0.3, 1.5, 0); group.add(m); return m; });
      const t1 = P(pill('size ≈ wavelength', { bg: '#efe9e2', fg: '#2b241f', h: 0.44, size: 0.42 }), 0.3, 3.2, 0.8); group.add(t1);
      const t2 = P(pill('quantum effects', { bg: C.orange, fg: '#2a1408', h: 0.48, size: 0.44 }), 0.3, 0.3, 1.2); group.add(t2);
      return { box, waves, t1, t2 };
    },
    update({ box, waves, t1, t2 }, lt) {
      const L = k => B_('why', k);
      popIn(box, lt, L(1) - 0.2, 0.5);
      const which = lt < L(4) ? 0 : Math.floor((lt - L(4)) / 1.0) % 3;
      waves.forEach((m, i) => { m.visible = lt > L(3) && i === which; m.scale.y = Math.cos(lt * 5); });
      popIn(t1, lt, L(3) + 0.2, 0.45); popIn(t2, lt, L(5), 0.45);
    },
  },

  // 8 ── RECAP (cream) ──────────────────────────────────────────────────────────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'lecture 1 · 8', items: [['double slit', 'n λ = d sin θ'], ['particle + wave', 'duality'], ['de Broglie', 'λ = h / p'], ['closed orbit', 'n λ = 2π r'], ['Davisson–Germer', '1.65 ≈ 1.67 Å'], ['nanostructures', 'confined waves']] }), 0.3, 2.05, 0); group.add(s);
      return { s };
    },
    update({ s }, lt) {
      popIn(s, lt, 0.15, 0.5);
      s.stage(summaryTicks(lt, B_('recap', 1), B_('recap', 2)));
      s.position.y = 2.05 + wobble(lt, 0.4, 0.02);
    },
  },

  // 9 ── TAKEAWAY (cream, fade) ─────────────────────────────────────────────────
  {
    id: 'outro', ...T_('outro'), env: 'cream', zoom: 1.2, enter: { type: 'fade', dur: 0.4 },
    camera: lt => ({ pos: [0, 3.5, 13.2 - lt * 0.25], look: [0, 1.9, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot(), 0, 0.22, 0.3); group.add(bot);
      const p1 = P(pill('wave', { bg: '#dbe8f1', fg: '#1d3a52', h: 0.46, size: 0.42 }), -1.0, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('particle', { bg: C.orange, fg: '#2a1408', h: 0.46, size: 0.42 }), 1.0, 2.8, 0.9); group.add(p2);
      return { bot, p1, p2 };
    },
    update({ bot, p1, p2 }, lt) {
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, 0.7, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Wave–Particle Duality',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a nanoscience idea to undergraduate students.
SLOW, unhurried teaching pace, noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the equations on screen.
Say "De Broglie" as "de Broy". Say "m v" letter by letter. Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// nano · lecture 1', counterLabel: 'VIDEO', total: 8, counter: [[0, 8]] },
  captions,
  scenes,
};

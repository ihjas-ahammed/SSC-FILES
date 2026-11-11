// EXAMPLE (voiced, slow "teaching" mode): Temperature coefficient of resistance of a copper coil.
// Shows the connected-steps pattern: callback hook → why → law card → ONE continuous lab scene for the
// procedure (step chips + a sticky note that carries step 1's result) → table card that flips into the
// graph → result card → step-summary card → takeaway. Built with scenes/teach.js + props/lab.js.
// Caption `at`s and scene start/end come from buildScript(LINES); at(id, k) = local time of line k.
import * as THREE from 'three';
import voice from './example-lab-metal-coil.voice.js';
import { robot } from '../props/robot.js';
import { plinth } from '../props/box.js';
import { wire } from '../props/electronics.js';
import { beaker, thermometer, readout, thermistorBead, multimeter, coilProbe, mathText, mathFrac } from '../props/lab.js';
import { buildScript, stagedCard, steps, smooth, chip, stickyNote, hotPlate, summaryCard, summaryTicks } from '../scenes/teach.js';
import { pill, card, rbox, cyl, clay, glow, torus, sphere, glowSprite, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, wobble, inv, lerp } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const INK = '#2b241f', MUTED = '#8a8178', ORANGE = '#e2652a', BLUE = '#2f7bb0';
const serif = { family: FONT.serif, weight: 400, italic: true };
const mono = { family: FONT.mono, weight: 500 };

// copper coil data (manual's data sheet; lead offset 0.08 Ω)
const LEAD = 0.08, M = 0.0392, R25 = 10.0, RZ = 9.02;
const Rmeas = t => R25 + LEAD + M * (t - 25);
const DATA = [100, 85, 70, 55, 40, 25].map((t, i) => ({ t, meas: [13.02, 12.43, 11.84, 11.25, 10.66, 10.08][i] })).map(d => ({ ...d, cor: +(d.meas - LEAD).toFixed(2) }));

// ── script: [scene id | 0, text, say?] ─────────────────────────────────────────
const LINES = [
  ['hook', 'Last time, heat made R [fall.]'],
  [0, 'In a [copper coil,]'],
  [0, 'heat makes R [rise.]'],
  ['why', 'Why? Hot ions [vibrate…]', 'Why? Hot ions vibrate,'],
  [0, 'and [scatter] the electrons.'],
  ['law', 'So R grows in a [line:]'],
  [0, 'slope over the [intercept]'],
  [0, 'gives [alpha.]'],
  ['lab', 'Step one: [zero the leads.]'],
  [0, 'Touch them: [0.08 Ω.]', 'Touch them: 0.08 ohms.'],
  [0, 'We’ll [subtract] that later.'],
  [0, 'Step two: [coil in water,]'],
  [0, 'heat it to [100°C.]', 'heat it to 100 degrees.'],
  [0, 'Step three: as it [cools,]'],
  [0, 'read R every [5°C.]', 'read R every 5 degrees.'],
  ['board', 'Each reading, minus [0.08,]', 'Each reading, minus 0.08,'],
  [0, 'goes in the [table.]'],
  [0, 'Plot them: a [straight line.]'],
  [0, 'Extend it back to [0°C:]', 'Extend it back to 0 degrees:'],
  [0, 'that’s [R₀ ≈ 9.02 Ω.]', 'that’s R nought, about 9.02 ohms.'],
  [0, 'Its slope: [0.0392 Ω/°C.]', 'Its slope: 0.0392 ohms per degree.'],
  ['alpha', 'Divide slope by [R₀:]', 'Divide slope by R nought:'],
  [0, 'alpha ≈ [0.00435 /K.]', 'alpha is about 0.00435 per kelvin.'],
  [0, 'At [25°C,] it’s [0.00392:]', 'At 25 degrees, it’s 0.00392:'],
  [0, 'just [0.25 %] off copper’s.', 'just 0.25 percent off copper’s.'],
  ['recap', 'Quick [recap:]'],
  [0, 'zero, heat, read,'],
  [0, 'correct, plot, [divide.]'],
  ['outro', 'Hotter [metal,]'],
  [0, '[more resistance.]'],
];
const { captions, DURATION, SC, span: T_, at: B_ } = buildScript(LINES);

const scenes = [
  // 1 ── HOOK (cream): callback to the thermistor (R↓) vs a copper coil (R↑) ─────
  {
    id: 'hook', ...T_('hook'), env: 'cream', zoom: 1.3, exit: WHIP_OUT,
    camera: lt => ({ pos: [0, 3.5, 13.5 - lt * 0.2], look: [0, 1.85, 0], fov: 30 }),
    build({ group }) {
      group.add(plinth({ r: 2.9 }));
      const bot = P(robot({ scale: 0.85 }), 0, 0.22, -0.2); group.add(bot);
      const bead = P(thermistorBead({ s: 0.24, lead: 0.6 }), -1.45, 0.22, 0.8); group.add(bead);
      const coil = P(coilProbe({ h: 0.8, r: 0.34, lead: 0.4 }), 1.45, 0.22, 0.8); group.add(coil);
      const p1 = P(pill('thermistor: R ↓', { bg: '#efe9e2', fg: '#5d554e', h: 0.44, size: 0.44 }), -1.15, 2.6, 1.1); group.add(p1);
      const p2 = P(pill('copper: R ↑', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.47 }), 1.15, 2.6, 1.1); group.add(p2);
      return { bot, bead, coil, p1, p2 };
    },
    update({ bot, bead, coil, p1, p2 }, lt) {
      const b1 = B_('hook', 1), b2 = B_('hook', 2);
      popIn(bead, lt, 0.3); popIn(p1, lt, 1.2, 0.4); bead.setHot(0.5);
      popIn(coil, lt, b1, 0.45); coil.setHot(prog(lt, b2, 0.8));
      popIn(p2, lt, b2 + 0.5, 0.45);
      bot.set(lt, { mood: lt < b1 ? 'smile' : lt < b2 ? 'think' : 'surprised', turn: lt < b1 ? -0.35 : 0.35, talk: lt > b2 && lt < b2 + 0.8 });
    },
  },

  // 2 ── WHY (dark): a lattice of ions shakes harder; electrons get scattered ────
  {
    id: 'why', ...T_('why'), env: 'dark', zoom: 1.3, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.2, 3.2, 12.4 - lt * 0.15], look: [0.2, 1.8, 0], fov: 32 }),
    build({ group }) {
      const ions = [];
      for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) { const s = P(sphere(0.22, clay('#c8733f', { rough: 0.35, metal: 0.4 })), -1.8 + c * 0.9, 0.9 + r * 0.85, 0); s.userData.home = [s.position.x, s.position.y]; group.add(s); ions.push(s); }
      const el = Array.from({ length: 10 }, (_, i) => { const e = P(glowSprite('#7fd3ff', 0.35, 0.9), 0, 0, 0.5); e.userData.i = i; group.add(e); return e; });
      const tag = P(pill('more vibration → more R', { bg: C.orange, fg: '#2a1408', h: 0.44, size: 0.43 }), 0.2, 3.55, 0.9); group.add(tag);
      return { ions, el, tag };
    },
    update({ ions, el, tag }, lt) {
      const b1 = B_('why', 1);
      const heat = prog(lt, 0.6, 1.6);
      ions.forEach((s, i) => { const [x, y] = s.userData.home; const a = 0.03 + heat * 0.16; s.position.set(x + Math.sin(lt * 17 + i * 1.3) * a, y + Math.cos(lt * 15 + i * 2.1) * a, Math.sin(lt * 13 + i) * a); });
      el.forEach(e => { const i = e.userData.i; const u = ((lt * 0.35 + i / 10) % 1); const lane = 1.3 + (i % 2) * 0.85; const zig = lt > b1 ? Math.sin(u * 40 + i) * 0.25 * prog(lt, b1, 0.6) : 0; e.position.set(-2.4 + u * 4.8, lane + zig, 0.5); });
      popIn(tag, lt, b1 + 0.8, 0.45);
    },
  },

  // 3 ── THE LAW (cream): R_t = R_0(1 + α t) → straight line; α = slope / intercept
  {
    id: 'law', ...T_('law'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 13.0 - lt * 0.15], look: [0.3, 1.95, 0], fov: 33 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.5, h: 2.6, d: 0.12, r: 0.1, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.fillText('LINEAR LAW', W * 0.05, H * 0.1);
        const px = H * 0.115;
        mathText(ctx, 'R_t = R_0 (1 + α_0 t)', W / 2, H * 0.3, px, { ...serif, color: INK, align: 'center' });
        mathText(ctx, 'R_t = R_0 + (R_0 α_0) t', W / 2, H * 0.5, px, { ...serif, color: INK, align: 'center' });
        if (st >= 1) {
          const o = { family: FONT.mono, weight: 700, color: BLUE, align: 'center' }, y = H * 0.62, s = H * 0.055;
          mathText(ctx, 'y', W * 0.22, y, s, o); mathText(ctx, 'c  intercept', W * 0.4, y, s, o); mathText(ctx, 'm  slope', W * 0.68, y, s, o);
        }
        if (st >= 2) {
          ctx.strokeStyle = C.orange; ctx.lineWidth = H * 0.014; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.7, W * 0.76, H * 0.24, H * 0.04); ctx.stroke();
          mathText(ctx, 'α_0 =', W * 0.3, H * 0.86, px, { ...serif, color: ORANGE, align: 'center' });
          mathFrac(ctx, 'slope', 'intercept', W * 0.6, H * 0.81, px * 0.75, { family: FONT.mono, weight: 600, color: INK });
        }
      }), 0.3, 2.3, 0); group.add(f);
      return { f };
    },
    update({ f }, lt) {
      popIn(f, lt, 0.2, 0.5);
      f.stage(steps(lt, [B_('law', 1), B_('law', 2)]));
      f.position.y = 2.3 + wobble(lt, 0.4, 0.025);
    },
  },

  // 4 ── LAB (dark, one continuous scene for steps 1 → 2 → 3) ────────────────────
  {
    id: 'lab', ...T_('lab'), env: 'dark', zoom: 1.4, enter: WHIP, exit: WHIP_OUT,
    camera: lt => {
      const k = [[0, [0.9, 2.9, 10.8]], [B_('lab', 3) - 0.4, [0.9, 2.9, 10.8]], [B_('lab', 3) + 0.8, [-0.2, 3.2, 12.4]], [B_('lab', 6) + 2, [0.3, 3.3, 12.8]]];
      const l = [[0, [0.6, 1.4, 0]], [B_('lab', 3) - 0.4, [0.6, 1.4, 0]], [B_('lab', 3) + 0.8, [0.1, 1.6, 0]], [B_('lab', 6) + 2, [0.3, 1.6, 0]]];
      return { pos: smooth(lt, k), look: smooth(lt, l), fov: 32 };
    },
    build({ group }) {
      const plate = P(hotPlate(), -0.7, 0, 0); group.add(plate);
      const bk = P(beaker({ r: 0.75, h: 1.6 }), -0.7, 0.42, 0); group.add(bk);
      const coil = P(coilProbe(), -0.75, 3.2, 0); group.add(coil);
      const tm = P(thermometer({ len: 2.3 }), -0.25, 0.6, 0.1); tm.rotation.z = -0.1; group.add(tm);
      const dmm = P(multimeter(), 1.5, 0, 0.2); group.add(dmm);
      const penR = P(cyl(0.04, 0.02, 0.9, clay('#e5484d')), 1.2, 2.6, 0.9); const penB = P(cyl(0.04, 0.02, 0.9, clay('#2a2420')), 1.8, 2.6, 0.9); group.add(penR, penB);
      const spark = P(glowSprite('#ffd27a', 0.6, 0), 1.5, 2.2, 0.95); group.add(spark);
      const offset = P(stickyNote('lead: 0.08 Ω'), 1.5, 2.25, 0.5); group.add(offset);
      const lead = wire([[-0.87, 0, 0.05], [-0.6, 0.4, 0.2], [0.4, 0.5, 0.4], [1.0, -0.6, 0.5]], { radius: 0.03, electrons: 6, eColor: '#ffb46a' });
      group.add(lead);
      const t = P(readout({ label: 't', unit: '°C', w: 2.0 }), -1.0, 3.35, 0.9); group.add(t);
      const chips = [chip('1 zero', -1.2, 0.24, 1.1), chip('2 heat', 0.2, 0.24, 1.1), chip('3 read', 1.6, 0.24, 1.1)];
      chips.forEach(c => group.add(c));
      return { plate, bk, coil, tm, dmm, penR, penB, spark, offset, lead, t, chips };
    },
    update({ plate, bk, coil, tm, dmm, penR, penB, spark, offset, lead, t, chips }, lt) {
      const L = k => B_('lab', k);
      // step 1: probe tips touch → 0.08 Ω, sticky note stays on the meter
      const touch = prog(lt, L(1) - 0.6, 0.7, ease.inOut);
      penR.position.set(lerp(0.9, 1.43, touch), 2.6, 0.9); penR.rotation.z = lerp(0.5, 0.35, touch);
      penB.position.set(lerp(2.1, 1.57, touch), 2.6, 0.9); penB.rotation.z = lerp(-0.5, -0.35, touch);
      const pens = lt < L(2) + 0.2;
      penR.visible = penB.visible = pens;
      spark.material.opacity = touch >= 1 && pens ? 0.8 * (0.7 + 0.3 * Math.sin(lt * 20)) * (1 - prog(lt, L(2), 0.5)) : 0;
      popIn(offset, lt, L(2) + 0.4, 0.45);
      offset.position.set(1.5, lerp(2.25, 2.12, prog(lt, L(3), 0.5)), 0.5);
      // step 2: coil lowers into the bath, plate heats to 100 °C
      const dip = prog(lt, L(3) + 0.3, 1.0, ease.inOut);
      coil.position.y = lerp(3.2, 0.55, dip);
      popIn(coil, lt, L(3) - 0.2, 0.4);
      lead.visible = dip >= 1; lead.position.set(0, coil.position.y + coil.top, 0); lead.setFlow(lt, 0.2, 0);
      const on = lt < L(5) ? prog(lt, L(4), 0.5) : 1 - prog(lt, L(5), 0.6);
      plate.setOn(on);
      const up = prog(lt, L(4), L(5) - L(4) - 0.2, ease.inOut);
      const cool = Math.max(0, Math.floor((lt - L(6)) / 0.45));
      const temp = lt < L(6) ? lerp(25, 100, up) : Math.max(25, 100 - 5 * cool);
      bk.bubbles(lt, prog(lt, L(5) - 1.0, 0.4) * (1 - prog(lt, L(5) + 0.3, 0.5)));
      coil.setHot(inv(25, 100, temp) * 0.8 * dip);
      tm.setLevel(0.1 + inv(0, 110, temp) * 0.85);
      popIn(t, lt, L(3) + 0.6, 0.45); t.show(temp);
      dmm.show(lt < L(3) + 1.3 ? (touch >= 1 ? '0.08 Ω' : 'OL') : `${Rmeas(temp).toFixed(2)} Ω`);
      // step chips
      chips[0].set(lt >= 0.1); chips[1].set(lt >= L(3)); chips[2].set(lt >= L(5));
      chips.forEach((c, i) => popIn(c, lt, 0.1 + i * 0.12, 0.35));
    },
  },

  // 5 ── BOARD (cream): table (−0.08) → flips into the graph → extend to R₀ → slope
  {
    id: 'board', ...T_('board'), env: 'cream', zoom: 1.0, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.06], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const flip = new THREE.Group(); P(flip, 0.3, 2.15, 0); group.add(flip);
      const front = stagedCard({ w: 3.5, h: 2.7, d: 0.1, r: 0.06, color: '#f7f4ef' }, (ctx, W, H, st) => {
        ctx.fillStyle = '#3a312b'; ctx.fillRect(0, 0, W, H * 0.13);
        ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.textBaseline = 'middle'; ctx.fillStyle = '#f4a576'; ctx.fillText('OBSERVATIONS', W * 0.05, H * 0.065);
        ctx.fillStyle = '#d6cdc4'; ctx.textAlign = 'right'; ctx.fillText('copper coil', W * 0.95, H * 0.065);
        ctx.font = `600 ${H * 0.05}px ${FONT.mono}`;
        ctx.textAlign = 'left'; ctx.fillStyle = MUTED; ctx.fillText('t (°C)', W * 0.06, H * 0.2);
        ctx.textAlign = 'right'; ctx.fillText('R meas (Ω)', W * 0.58, H * 0.2);
        ctx.fillStyle = st >= 1 ? ORANGE : '#d9d1c5'; ctx.fillText('R − 0.08', W * 0.94, H * 0.2);
        ctx.textBaseline = 'alphabetic';
        DATA.forEach((d, j) => {
          const y = H * (0.34 + j * 0.105);
          ctx.fillStyle = INK; ctx.font = `700 ${H * 0.06}px ${FONT.mono}`; ctx.textAlign = 'left'; ctx.fillText(String(d.t), W * 0.06, y);
          ctx.font = `500 ${H * 0.06}px ${FONT.mono}`; ctx.textAlign = 'right'; ctx.fillText(d.meas.toFixed(2), W * 0.58, y);
          if (st >= 1 && j < st * 2) { ctx.fillStyle = ORANGE; ctx.font = `700 ${H * 0.06}px ${FONT.mono}`; ctx.fillText(d.cor.toFixed(2), W * 0.94, y); }
          ctx.fillStyle = '#e4ddd5'; ctx.fillRect(W * 0.04, y + H * 0.03, W * 0.92, 2);
        });
        ctx.textAlign = 'left';
      });
      flip.add(front);
      const back = stagedCard({ w: 3.5, h: 2.7, d: 0.1, r: 0.06, color: '#f7f4ef' }, (ctx, W, H, st) => {
        const Lx = W * 0.17, Rx = W * 0.95, Ty = H * 0.14, By = H * 0.8;
        const X = t => Lx + (t + 5) / 110 * (Rx - Lx), Y = r => By - (r - 8.0) / (13.4 - 8.0) * (By - Ty);
        ctx.fillStyle = '#5d554e'; ctx.font = `600 ${H * 0.062}px ${FONT.mono}`; ctx.fillText('R vs t', W * 0.05, H * 0.09);
        ctx.strokeStyle = '#e4ddd5'; ctx.lineWidth = 2; [9, 10, 11, 12, 13].forEach(v => { ctx.beginPath(); ctx.moveTo(Lx, Y(v)); ctx.lineTo(Rx, Y(v)); ctx.stroke(); });
        ctx.strokeStyle = INK; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(X(0), Ty - H * 0.02); ctx.lineTo(X(0), By); ctx.lineTo(Rx, By); ctx.stroke();
        ctx.fillStyle = '#3a322c'; ctx.font = `600 ${H * 0.055}px ${FONT.mono}`; ctx.textAlign = 'center';
        [0, 25, 50, 75, 100].forEach(v => ctx.fillText(String(v), X(v), By + H * 0.065));
        ctx.textAlign = 'right'; [9, 11, 13].forEach(v => ctx.fillText(String(v), X(0) - W * 0.02, Y(v) + H * 0.02));
        mathText(ctx, 't (°C)', (Lx + Rx) / 2, H * 0.965, H * 0.07, { ...serif, color: INK, align: 'center' });
        ctx.save(); ctx.translate(W * 0.05, (Ty + By) / 2); ctx.rotate(-Math.PI / 2); mathText(ctx, 'R (Ω)', 0, 0, H * 0.075, { ...serif, color: INK, align: 'center' }); ctx.restore();
        const n = Math.min(6, st);
        if (st >= 7) { ctx.strokeStyle = C.orange; ctx.lineWidth = 6; ctx.beginPath(); ctx.moveTo(X(25), Y(R25)); ctx.lineTo(X(100), Y(R25 + M * 75)); ctx.stroke(); }
        if (st >= 8) { ctx.setLineDash([14, 10]); ctx.strokeStyle = C.orange; ctx.lineWidth = 5; ctx.beginPath(); ctx.moveTo(X(25), Y(R25)); ctx.lineTo(X(0), Y(RZ)); ctx.stroke(); ctx.setLineDash([]); }
        if (st >= 9) {
          ctx.fillStyle = ORANGE; ctx.beginPath(); ctx.arc(X(0), Y(RZ), H * 0.03, 0, Math.PI * 2); ctx.fill();
          mathText(ctx, 'R_0 = 9.02 Ω', X(0) + W * 0.04, Y(RZ) + H * 0.085, H * 0.07, { family: FONT.mono, weight: 700, color: ORANGE });
        }
        if (st >= 10) {
          ctx.setLineDash([10, 8]); ctx.strokeStyle = BLUE; ctx.lineWidth = 4; ctx.beginPath();
          ctx.moveTo(X(25), Y(R25)); ctx.lineTo(X(100), Y(R25)); ctx.lineTo(X(100), Y(R25 + M * 75)); ctx.stroke(); ctx.setLineDash([]);
          ctx.fillStyle = BLUE; ctx.font = `700 ${H * 0.055}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.fillText('Δt = 75', X(62), Y(R25) + H * 0.065);
          ctx.textAlign = 'right'; ctx.fillText('ΔR = 2.94', X(100) - W * 0.02, Y(10.9));
          ctx.textAlign = 'left';
        }
        for (let i = 0; i < n; i++) { const d = DATA[i]; ctx.fillStyle = INK; ctx.beginPath(); ctx.arc(X(d.t), Y(d.cor), H * 0.022, 0, Math.PI * 2); ctx.fill(); }
      });
      back.rotation.y = Math.PI; back.position.z = -0.06; flip.add(back);
      const res = P(pill('slope m = 0.0392 Ω/°C', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.44 }), 0.3, 0.45, 1.2); group.add(res);
      return { flip, front, back, res };
    },
    update({ flip, front, back, res }, lt) {
      const L = k => B_('board', k);
      popIn(flip, lt, 0.15, 0.5);
      front.stage(lt < 0.6 ? 0 : 1 + Math.min(2, Math.floor((lt - 0.6) / 0.6)));
      const turn = prog(lt, L(2) - 0.1, 0.8, ease.inOut);
      flip.rotation.y = turn * Math.PI;
      const pts = Math.min(6, Math.floor(prog(lt, L(2) + 0.6, 1.4, ease.linear) * 6.999));
      back.stage(pts + (lt >= L(2) + 2.1 ? 1 : 0) + (lt >= L(3) + 0.4 ? 1 : 0) + (lt >= L(4) ? 1 : 0) + (lt >= L(5) ? 1 : 0));
      flip.position.y = 2.15 + wobble(lt, 0.4, 0.02);
      popIn(res, lt, L(5) + 1.0, 0.45);
    },
  },

  // 6 ── ALPHA (dark): α₀ = m / R₀, α₂₅ = m / R₂₅, compare with copper ───────────
  {
    id: 'alpha', ...T_('alpha'), env: 'dark', zoom: 1.25, enter: WHIP, exit: WHIP_OUT,
    camera: lt => ({ pos: [0.3, 2.9, 12.6 - lt * 0.12], look: [0.3, 1.95, 0], fov: 33 }),
    build({ group }) {
      const f = P(stagedCard({ w: 3.6, h: 2.6, d: 0.12, r: 0.1, color: '#f2eee8' }, (ctx, W, H, st) => {
        ctx.fillStyle = MUTED; ctx.font = `600 ${H * 0.058}px ${FONT.mono}`; ctx.fillText('TEMPERATURE COEFFICIENT', W * 0.05, H * 0.1);
        const px = H * 0.09, v = { ...mono, color: INK }, r = { family: FONT.mono, weight: 700, color: ORANGE, align: 'right' };
        mathText(ctx, 'α_0 =', W * 0.06, H * 0.29, px * 1.2, { ...serif, color: ORANGE });
        mathFrac(ctx, 'm', 'R_0', W * 0.33, H * 0.25, px * 1.1, { ...serif, color: INK });
        if (st >= 1) { mathText(ctx, '= 0.0392 / 9.02', W * 0.44, H * 0.29, px * 0.75, v); mathText(ctx, '≈ 0.00435 K⁻¹', W * 0.95, H * 0.41, px * 0.85, r); }
        if (st >= 2) {
          mathText(ctx, 'α_{25} =', W * 0.06, H * 0.6, px * 1.2, { ...serif, color: ORANGE });
          mathFrac(ctx, 'm', 'R_{25}', W * 0.33, H * 0.56, px * 1.1, { ...serif, color: INK });
          mathText(ctx, '= 0.0392 / 10.00', W * 0.44, H * 0.6, px * 0.75, v); mathText(ctx, '= 0.00392 K⁻¹', W * 0.95, H * 0.72, px * 0.85, r);
        }
        if (st >= 3) {
          ctx.fillStyle = '#e4ddd5'; ctx.fillRect(W * 0.05, H * 0.79, W * 0.9, 3);
          mathText(ctx, 'copper: 0.00393 K⁻¹', W * 0.06, H * 0.91, px * 0.7, { ...mono, color: MUTED });
          mathText(ctx, '−0.25 %', W * 0.95, H * 0.91, px * 0.85, r);
        }
      }), 0.3, 2.2, 0); group.add(f);
      const res = P(pill('α ≈ 0.0043 per K', { bg: C.orange, fg: '#2a1408', h: 0.54, size: 0.46 }), 0.3, 0.45, 1.2); group.add(res);
      return { f, res };
    },
    update({ f, res }, lt) {
      const L = k => B_('alpha', k);
      popIn(f, lt, 0.2, 0.5);
      f.stage(steps(lt, [L(1), L(2), L(3)]));
      popIn(res, lt, L(1) + 1.2, 0.45);
      f.position.y = 2.2 + wobble(lt, 0.4, 0.02);
    },
  },

  // 7 ── STEP SUMMARY (cream): six steps tick off, each with its key number ─────
  {
    id: 'recap', ...T_('recap'), env: 'cream', zoom: 1.0, enter: WHIP, exit: { type: 'fade', dur: 0.35 },
    camera: lt => ({ pos: [0.3, 2.85, 12.8 - lt * 0.1], look: [0.3, 1.95, 0], fov: 32 }),
    build({ group }) {
      const s = P(summaryCard({ tag: 'exp 4', items: [['Zero the leads', '0.08 Ω'], ['Heat coil to', '100 °C'], ['Cool, read R every', '5 °C'], ['Correct: R − 0.08', '10–12.9 Ω'], ['Plot R vs t', 'slope 0.0392'], ['α = slope ÷ R_0', '0.00435 /K']] }), 0.3, 2.05, 0); group.add(s);
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
      const bot = P(robot(), 0.6, 0.22, 0.3); group.add(bot);
      const coil = P(coilProbe({ h: 0.8, r: 0.34, lead: 0.4 }), -1.3, 0.22, 0.8); group.add(coil);
      const p1 = P(pill('hotter metal', { bg: '#efe9e2', fg: '#5d554e', h: 0.5, size: 0.45 }), -0.95, 3.3, 0.9); group.add(p1);
      const p2 = P(pill('more R', { bg: C.orange, fg: '#2a1408', h: 0.5, size: 0.45 }), 1.05, 3.3, 0.9); group.add(p2);
      return { bot, coil, p1, p2 };
    },
    update({ bot, coil, p1, p2 }, lt) {
      coil.setHot(0.5 + 0.3 * Math.sin(lt * 2) ** 2);
      popIn(p1, lt, 0.3, 0.4); popIn(p2, lt, B_('outro', 1) + 0.2, 0.4);
      bot.set(lt, { mood: lt < B_('outro', 1) ? 'smile' : 'happy' });
    },
  },
];

export default {
  title: 'Temperature Coefficient of a Metal',
  width: 720, height: 1280, fps: 30, duration: DURATION,
  ...(voice || {}), retime: true,
  voiceStyle: `Calm, friendly physics teacher explaining a lab experiment to first-year students.
SLOW, unhurried teaching pace — noticeably slower than a social-media reel. Clear diction, natural, not robotic.
Pause about half a second at each line break and a full second at blank lines, so students can read the table, graph and formulas on screen.
Say "R nought" for R₀ and read decimals digit by digit ("zero point zero three nine two"). Light emphasis on key words, never shouting.
No music, no sound effects, dry studio recording.`,
  hud: { left: '// exp 4 · metal coil α', counterLabel: 'STEP', total: 3, counter: [[0, 0], [SC.lab.start + 0.3, 1], [SC.lab.lines[3] + 0.3, 2], [SC.lab.lines[5] + 0.3, 3]] },
  captions,
  scenes,
};

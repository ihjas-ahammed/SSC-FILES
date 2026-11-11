// EXAMPLE: "5 connectors" — a 49 s voiced reel with 18 scenes (the most complete reference).
// A video = { captions, hud, scenes }. Each scene: start/end (s), env, camera(lt), build(ctx), update(state, lt).
import * as THREE from 'three';
import words from './example-connectors.words.js';
import { robot } from '../props/robot.js';
import { cardboardBox, plinth } from '../props/box.js';
import { bubble, tableCard, readOnlyBadge, receiptDevice, questionScreen, approvalCard, browserCard, buildLog, errorNote, codePanel, clock, commentCard } from '../props/ui.js';
import { cabinet, desk, signStand, trashBin, bigX, moon, tier, corkboard, deleteButton } from '../props/office.js';
import { pawn } from '../props/pedestal.js';
import { plugScene, pedestalScene, STRIP } from '../scenes/templates.js';
import { plug, powerStrip } from '../props/connectors.js';
import { pill, card, sphere, clay, glowSprite, decal, setOpacity, C, FONT } from '../engine/geo.js';
import { prog, pop, ease, kf, wobble, tween, inv, lerp, fadeWin, rng } from '../engine/anim.js';

const P = (o, x, y, z) => (o.position.set(x, y, z), o);
const popIn = (o, t, t0, d = 0.45, base = 1) => o.scale.setScalar(Math.max(0.001, pop(t, t0, d) * base));
const WHIP = { type: 'whip', dir: 1, dur: 0.32 };
const WHIP_OUT = { type: 'whip', dir: -1, dur: 0.2 };

const scenes = [
  // ── 1. Box on plinth → robot pops out → world goes dark, "?" orbs ─────────────
  {
    id: 'intro', start: 0, end: 4.5, zoom: 1, lift: 0,
    env: lt => ['cream', 'dark', prog(lt, 2.25, 0.7, ease.inOut)],
    camera: lt => camIntro(lt),
    build({ group }) {
      const pl = plinth(); group.add(pl);
      const box = cardboardBox(); P(box, 0, 0.22, 0); group.add(box);
      const bot = robot(); P(bot, 0, -1.6, 0); group.add(bot);
      const b1 = bubble('it built my app'); b1.userData.s = 0.78; P(b1, -0.75, 2.5, 0.9); group.add(b1);
      const b2 = bubble('it knows my app'); b2.userData.s = 0.78; P(b2, 0.7, 3.05, 0.6); group.add(b2);
      const orbs = [];
      const R = rng(3);
      for (let i = 0; i < 6; i++) {
        const o = new THREE.Group();
        o.add(sphere(0.24, clay('#151210', { rough: 0.25 })));
        const q = decal(0.34, 0.34, (ctx, W, H) => { ctx.fillStyle = '#6d6560'; ctx.font = `700 ${H * 0.7}px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('?', W / 2, H / 2 + 3); }, { px: 160 });
        q.position.z = 0.25; o.add(q);
        o.userData = { a: (i / 6) * Math.PI * 2 + R(), r: 2.7 + R() * 0.5, y: 1.6 + R() * 2.2, s: 0.25 + R() * 0.2 };
        group.add(o); orbs.push(o);
      }
      return { box, bot, b1, b2, orbs, pl };
    },
    update({ box, bot, b1, b2, orbs }, lt) {
      const open = prog(lt, 1.08, 0.3, ease.out);
      box.setOpen(open);
      const up = prog(lt, 1.15, 0.45, ease.back);
      bot.position.y = -1.6 + up * 2.85;
      bot.visible = lt > 1.12;
      const mood = lt < 1.75 ? 'happy' : lt < 2.3 ? 'smile' : lt < 3.0 ? 'surprised' : 'worried';
      bot.set(lt, { mood, talk: false, bulb: 1 + inv(2.4, 3.2, lt) * 0.6, haloScale: 1 + inv(2.4, 3.2, lt) });
      popIn(b1, lt, 0.32, 0.45, 0.78); popIn(b2, lt, 0.72, 0.45, 0.78);
      const bf = 1 - inv(1.3, 1.5, lt);
      if (bf < 1) { b1.scale.multiplyScalar(Math.max(0.001, bf)); b2.scale.multiplyScalar(Math.max(0.001, bf)); }
      b1.position.y = 2.5 + wobble(lt, 0.5, 0.05); b2.position.y = 3.05 + wobble(lt, 0.5, 0.05, 2);
      orbs.forEach((o, i) => {
        const u = o.userData, a = u.a + lt * u.s;
        o.position.set(Math.cos(a) * u.r, u.y + Math.sin(lt * 1.3 + i) * 0.15, Math.sin(a) * u.r * 0.6);
        o.scale.setScalar(Math.max(0.001, pop(lt, 2.75 + i * 0.06, 0.5)));
      });
    },
  },

  // ── 2. "your database / payments / live site / crashes / users" ─────────────
  { id: 'database', start: 4.5, end: 5.25, ...pedestalScene('database', 'database', { alertAt: 0.05 }), enter: WHIP },
  { id: 'payments', start: 5.25, end: 5.95, ...pedestalScene('payments', 'payments', { alertAt: 0.18 }), enter: WHIP },
  { id: 'live-site', start: 5.95, end: 6.7, ...pedestalScene('live site', 'site', { alertAt: 0.15 }), enter: WHIP },
  { id: 'crashes', start: 6.7, end: 7.5, ...pedestalScene('crashes', 'crashes', { alertAt: 0.2 }), enter: WHIP },
  { id: 'users', start: 7.5, end: 8.55, ...pedestalScene('users', 'users', { alertAt: 0.35 }), enter: WHIP, exit: { type: 'whip', dir: 1, axis: 'y', dur: 0.2 } },

  // ── 3. Five plugs hang over a blindfolded robot ─────────────────────────────
  {
    id: 'five-plugs', start: 8.55, end: 10.3, env: 'cream', zoom: 1.2, lift: 0, enter: { type: 'whip', axis: 'y', dir: -1, dur: 0.35 }, exit: WHIP_OUT,
    camera: lt => ({ pos: [2.9 + lt * 0.15, 12.5 - lt * 0.3, 10.5], look: [2.6, 1.2, 0.6], fov: 34, roll: -0.16 }),
    build({ group }) {
      const strip = powerStrip(STRIP, { spacing: 1.3 }); group.add(strip);
      const plugs = STRIP.map((_, i) => { const p = plug(i + 1); group.add(p); return p; });
      const bot = P(robot({ scale: 0.75 }), 2.6, 0, 1.9); bot.rotation.y = -0.2; group.add(bot);
      return { plugs, bot };
    },
    update({ plugs, bot }, lt) {
      plugs.forEach((p, i) => {
        const d = prog(lt, 0.05 + i * 0.07, 0.6, ease.back);
        p.position.set(i * 1.3, lerp(10, 3.2 + (i % 2) * 0.3, d) + wobble(lt, 0.5, 0.12, i * 2), 0.1);
        p.rotation.z = wobble(lt, 0.45, 0.1, i);
      });
      bot.set(lt, { mood: 'neutral', blindfold: true, turn: -0.2 });
    },
  },

  // ── 4. One: Supabase ─────────────────────────────────────────────────────────
  { id: 'supabase', start: 10.3, end: 12.1, ...plugScene(1, 'Supabase', { sub: 'official MCP · Supabase', nameAt: 0.95, plugAt: 0.95 }), enter: WHIP, exit: WHIP_OUT },

  // ── 5. Real tables, not a guess ──────────────────────────────────────────────
  {
    id: 'tables', start: 12.1, end: 14.4, env: 'cream', enter: WHIP,
    camera: lt => ({ pos: [0.4 - lt * 0.1, 2.9, 13.5 - lt * 0.2], look: [0.4, 1.95, 0], fov: 33 }),
    build({ group }) {
      const bot = P(robot(), -1.55, 0, 0.6); group.add(bot);
      const cab = P(cabinet(), 1.2, 0, -0.4); cab.scale.setScalar(0.85); group.add(cab);
      const tbl = P(tableCard({ rows: [['maya@…', 'pro', 'oct 2'], ['leo@…', 'free', 'oct 9'], ['sam@…', 'pro', 'oct 14'], ['ivy@…', 'free', 'nov 1']] }), 1.2, 3.65, -0.2); group.add(tbl);
      const guess = P(pill('i my guess', { bg: '#efe9e2', fg: '#b2a99f', h: 0.4, size: 0.42 }), -0.4, 3.75, -0.3); group.add(guess);
      const x = P(redX(0.42), 0.15, 3.72, -0.15); group.add(x);
      return { bot, tbl, guess, x };
    },
    update({ bot, tbl, guess, x }, lt) {
      popIn(tbl, lt, 0.45);
      tbl.position.y = 3.65 + wobble(lt, 0.4, 0.04);
      popIn(guess, lt, 1.3, 0.35); popIn(x, lt, 1.42, 0.4);
      const gone = inv(1.9, 2.1, lt); if (gone > 0) { guess.scale.multiplyScalar(1 - gone + 0.001); x.scale.multiplyScalar(1 - gone + 0.001); }
      bot.set(lt, { mood: lt < 0.5 ? 'squint' : lt < 1.3 ? 'smile' : lt < 1.9 ? 'think' : 'neutral', turn: 0.35, talk: lt < 0.5 });
    },
  },

  // ── 6. Add read only — it can look, but it can't delete ─────────────────────
  {
    id: 'read-only', start: 14.4, end: 17.1, env: 'cream', zoom: 1, exit: WHIP_OUT,
    camera: lt => {
      const k = prog(lt, 0.85, 0.5, ease.inOut);
      return { pos: [lerp(1.3, 0.4, k), lerp(2.7, 2.8, k), lerp(11.5, 14.8, k)], look: [lerp(1.1, 0.45, k), lerp(2.0, 1.75, k), 0], fov: 33 };
    },
    build({ group }) {
      const bot = P(robot(), -1.55, 0, 0.6); group.add(bot);
      const cab = P(cabinet(), 1.2, 0, -0.4); cab.scale.setScalar(0.85); group.add(cab);
      const badge = P(readOnlyBadge(), 1.25, 2.12, 0.55); badge.rotation.z = 0.05; group.add(badge);
      const chip = P(pill('read_only=true · read-only database user', { bg: '#efe9e2', fg: '#8f877e', h: 0.42, size: 0.36 }), 1.35, 0.65, 1.0); group.add(chip);
      const btn = P(deleteButton(), 0.1, 0, 1.4); group.add(btn);
      const blocked = P(pill('× blocked', { bg: '#ec6f69', fg: '#ffe7e3', h: 0.42, size: 0.5 }), 1.55, 1.1, 0.9); group.add(blocked);
      return { bot, badge, chip, btn, blocked };
    },
    update({ bot, badge, chip, btn, blocked }, lt) {
      const s = pop(lt, 0.18, 0.4);
      badge.scale.setScalar(Math.max(0.001, s * (1 + 0.6 * (1 - s))));
      badge.rotation.z = lerp(-0.35, 0.05, s);
      popIn(chip, lt, 0.45, 0.4);
      chip.visible = lt < 1.0;
      popIn(blocked, lt, 2.1, 0.4);
      btn.btn.position.y = 0.26 - 0.08 * fadeWin(lt, 1.9, 2.3, 0.08);
      bot.set(lt, { mood: lt < 1.6 ? 'neutral' : lt < 2.1 ? 'think' : 'surprised', glasses: lt > 0.9, turn: 0.35 });
    },
  },

  // ── 7. Two: Stripe ───────────────────────────────────────────────────────────
  { id: 'stripe', start: 17.1, end: 18.75, ...plugScene(2, 'Stripe', { sub: 'official MCP · Stripe', nameAt: 0.9, plugAt: 0.95 }), enter: WHIP, exit: WHIP_OUT },

  // ── 8. Ask, “who paid this week?” → receipts → refunds wait for approval ───
  {
    id: 'stripe-desk', start: 18.75, end: 23.4, env: 'cream', enter: WHIP, exit: WHIP_OUT,
    camera: lt => {
      const k1 = prog(lt, 1.25, 0.5, ease.inOut), k2 = prog(lt, 2.7, 0.5, ease.inOut);
      const x = lerp(lerp(0.2, 1.25, k1), 0.3, k2), z = lerp(lerp(13, 9.5, k1), 13, k2);
      return { pos: [x, 2.7, z], look: [x, lerp(1.7, 2.0, k1 * (1 - k2)), 0], fov: 33 };
    },
    build({ group }) {
      const bot = P(robot(), -1.5, 0, 0.6); group.add(bot);
      const dk = P(desk(), 1.25, 0, 0); group.add(dk);
      const q = P(questionScreen(), 1.25, 1.85, 0); group.add(q);
      const dev = P(receiptDevice(), 1.25, 1.3, 0); group.add(dev);
      const ask = P(bubble('who paid this week?', { h: 0.5, size: 0.4 }), -0.1, 3.75, 0.2); group.add(ask);
      const live = P(pill('live or sandbox · you pick', { bg: '#efebe5', fg: '#9b9289', h: 0.55, size: 0.38 }), 1.25, 1.05, 1.1); group.add(live);
      const refund = P(pill('↩ REFUND', { bg: '#ec7a6c', fg: '#fff0ec', h: 0.42, size: 0.42 }), 1.85, 3.95, 0.2); group.add(refund);
      const appr = P(approvalCard(), 1.05, 3.2, 0.5); group.add(appr);
      return { bot, q, dev, ask, live, refund, appr };
    },
    update({ bot, q, dev, ask, live, refund, appr }, lt) {
      popIn(ask, lt, 0.2); ask.visible = lt < 1.3;
      q.visible = lt < 1.3; dev.visible = lt >= 1.3;
      dev.setPrint(prog(lt, 1.45, 0.7, ease.out) * (1 - prog(lt, 2.7, 0.3)) + (lt > 2.7 ? 0.6 : 0));
      popIn(live, lt, 1.75, 0.4); live.visible = lt < 2.7;
      popIn(refund, lt, 2.85, 0.4);
      refund.position.y = 3.95 + wobble(lt, 0.5, 0.04);
      popIn(appr, lt, 3.5, 0.45);
      const mood = lt < 1.3 ? (lt < 0.8 ? 'surprised' : 'squint') : lt < 3.0 ? 'think' : lt < 3.8 ? 'worried' : lt < 4.2 ? 'closed' : 'happy';
      bot.set(lt, { mood, turn: 0.3, talk: lt < 0.7 });
    },
  },

  // ── 9. Three: Vercel ─────────────────────────────────────────────────────────
  { id: 'vercel', start: 23.4, end: 25.1, ...plugScene(3, 'Vercel', { sub: 'official MCP · Vercel', nameAt: 0.85, plugAt: 0.95 }), enter: WHIP, exit: WHIP_OUT },

  // ── 10. Deploy failed → reads build logs → pasted errors into the bin ───────
  {
    id: 'deploy', start: 25.1, end: 29.5, env: 'cream', enter: WHIP, exit: WHIP_OUT,
    camera: lt => {
      const k = prog(lt, 0.0, 0.9, ease.out);
      return { pos: [lerp(-0.4, 0.55, k), 2.9, lerp(15, 11.5, k)], look: [lerp(0.3, 0.55, k), 2.25, 0], fov: 33 };
    },
    build({ group }) {
      const bot = P(robot(), -1.9, 0, 0.9); group.add(bot);
      const board = new THREE.Group(); P(board, 0.95, 0, -0.3); group.add(board);
      for (const s of [-1, 1]) { const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.6, 12), clay('#3b332e')); pole.position.set(s * 1.15, 1.3, -0.05); pole.castShadow = true; board.add(pole); }
      const br = P(browserCard(), 0, 3.15, 0); board.add(br);
      const log = P(buildLog(), 0, 1.6, 0.12); board.add(log);
      const bin = P(trashBin(), 1.0, 0, 1.0); group.add(bin);
      const notes = [0, 1, 2].map(i => { const n = P(errorNote(), 0.55 + i * 0.05, 2.35 - i * 0.62, 0.35); group.add(n); return n; });
      const x = P(bigX(), 1.45, 3.35, 0.4); group.add(x);
      return { bot, log, bin, notes, x, br };
    },
    update({ bot, log, bin, notes, x, br }, lt) {
      popIn(br, lt, 0.1, 0.4);
      const unroll = prog(lt, 1.45, 0.6, ease.out) * (1 - prog(lt, 2.75, 0.2));
      log.scale.set(1, Math.max(0.001, unroll), 1); log.position.y = 2.7 - 1.1 * unroll;
      bin.visible = lt > 2.7; popIn(bin, lt, 2.7, 0.4);
      notes.forEach((n, i) => {
        const inT = 2.8 + i * 0.12;
        n.visible = lt > inT;
        const fall = prog(lt, 3.6 + i * 0.12, 0.45, ease.in);
        n.position.set(lerp(0.55 + i * 0.05, 1.0, fall), lerp(2.35 - i * 0.62, 1.1, fall), lerp(0.35, 1.0, fall));
        n.rotation.z = (i - 1) * 0.08 + fall * 1.2;
        n.scale.setScalar(Math.max(0.001, pop(lt, inT, 0.35) * (1 - fall * 0.7)));
      });
      popIn(x, lt, 2.85, 0.4); x.visible = lt < 3.55;
      bot.set(lt, { mood: lt < 0.8 ? 'surprised' : lt < 2.6 ? 'think' : lt < 3.3 ? 'surprised' : 'neutral', glasses: lt > 0.75, turn: 0.35, talk: lt > 3.2 });
    },
  },

  // ── 11. Four: Sentry ─────────────────────────────────────────────────────────
  { id: 'sentry', start: 29.5, end: 31.2, ...plugScene(4, 'Sentry', { sub: 'official MCP · Sentry', nameAt: 0.82, plugAt: 0.95 }), enter: WHIP, exit: WHIP_OUT },

  // ── 12. 2 AM crash → exact error, down to the line ───────────────────────────
  {
    id: 'night', start: 31.2, end: 35.6, env: 'night', zoom: 1.15, lift: 0.3, enter: WHIP,
    camera: lt => {
      const k = prog(lt, 2.2, 0.6, ease.inOut), k2 = prog(lt, 3.0, 0.5, ease.inOut);
      return { pos: [lerp(0.2, 0.5, k), lerp(2.6, 3.0, k2), lerp(12, 11, k) - 1.5 * k2], look: [lerp(0.4, 0.6, k), lerp(1.95, 2.6, k2), 0], fov: 33 };
    },
    build({ group }) {
      const m = P(moon(), -1.4, 5.0, -4); group.add(m);
      const sign = P(signStand(), 0.9, 0, 0); group.add(sign);
      const bot = P(robot(), -1.55, 0, 1.0); group.add(bot);
      const clk = P(clock(), -0.6, 3.5, 0.6); group.add(clk);
      const code = P(codePanel(0), 0.75, 3.35, 0.5); group.add(code);
      const code2 = P(codePanel(1), 0.75, 3.35, 0.5); group.add(code2);
      return { m, sign, bot, clk, code, code2 };
    },
    update({ m, sign, bot, clk, code, code2 }, lt) {
      const fall = prog(lt, 0.0, 0.35, ease.out);
      sign.rotation.z = lerp(-0.5, 0, fall);
      popIn(clk, lt, 0.68, 0.4); clk.visible = lt < 1.75 || (lt > 1.75 && lt < 2.25);
      clk.position.set(lt < 1.75 ? -0.6 : -0.15, lt < 1.75 ? 3.5 : 3.25, 0.6);
      clk.scale.multiplyScalar(lt < 1.75 ? 1 : 0.6);
      const cs = pop(lt, 2.3, 0.45);
      code.scale.setScalar(Math.max(0.001, cs)); code.visible = lt < 3.4;
      code2.scale.setScalar(1); code2.visible = lt >= 3.4;
      m.position.x = -1.4 + lt * 0.05; m.visible = lt > 1.7;
      bot.set(lt, { mood: lt < 0.6 ? 'sleepy' : lt < 1.3 ? 'surprised' : lt < 2.0 ? 'worried' : lt < 2.7 ? 'think' : lt < 3.2 ? 'smile' : 'neutral', nightcap: true, turn: 0.4 });
    },
  },

  // ── 13. Five, and the biggest: PostHog ───────────────────────────────────────
  {
    id: 'posthog', start: 35.6, end: 38.15, ...plugScene(5, 'PostHog', { sub: 'official MCP · PostHog', nameAt: 1.6, plugAt: 1.75, extra: {
      build(group, x) {
        const sp = []; for (let i = 0; i < 3; i++) { const s = glowSprite('#ffc06b', 0.5, 0.9); s.position.set(x + 0.9 + i * 0.35, 3.6 + (i % 2) * 0.3, 1.2); group.add(s); sp.push(s); }
        return { sparks: sp };
      },
      update(st, lt) { st.sparks.forEach((s, i) => { s.material.opacity = fadeWin(lt, 0.75, 2.6, 0.2) * (0.6 + 0.4 * Math.sin(lt * 9 + i)); }); },
    } }), enter: WHIP, exit: { type: 'whip', dir: 1, dur: 0.25 },
  },

  // ── 14. Claude finally sees: blindfold comes off ─────────────────────────────
  {
    id: 'reveal', start: 38.15, end: 38.95, env: 'dark', zoom: 1.15, lift: 0.35,
    camera: lt => ({ pos: [0, 2.2, 6.4 - lt * 0.4], look: [0, 1.5, 0], fov: 32 }),
    build({ group }) { const bot = robot(); group.add(bot); return { bot }; },
    update({ bot }, lt) { bot.set(lt, { mood: 'surprised', blindfold: lt < 0.45, noBlink: true, bulb: 1.5, haloScale: 1.8 }); },
  },

  // ── 15. Funnel: visit → sign up → paid; drop-off; real clicks, not vibes ────
  {
    id: 'funnel', start: 38.95, end: 43.9, env: 'cream', zoom: 1.15, enter: { type: 'fade', dur: 0.15 },
    camera: lt => {
      const k = prog(lt, 2.45, 0.6, ease.inOut);
      return { pos: [lerp(0.4, 0.6, k), lerp(3.3, 3.0, k), lerp(10.5, 13.5, k)], look: [lerp(0.5, 0.5, k), lerp(2.6, 2.2, k), -0.5], fov: 33 };
    },
    build({ group }) {
      const bot = P(robot(), -1.35, 0, 1.0); group.add(bot);
      const t1 = P(tier('visit', 3.4), 1.3, 0, 0.4); group.add(t1);
      const t2 = P(tier('sign up', 3.0), 1.5, 1.4, -1.0); group.add(t2);
      const t3 = P(tier('paid', 2.4), 1.8, 2.8, -2.4); group.add(t3);
      const R = rng(11);
      const crowd = (n, tierObj, w, color, y) => { for (let i = 0; i < n; i++) { const p = pawn(color, 0.9); p.position.set(tierObj.position.x - w / 2 + 0.3 + R() * (w - 0.6), y + 0.3, tierObj.position.z - 0.4 + R() * 0.8); group.add(p); } };
      crowd(11, t1, 3.4, '#ebe5dc', 0); crowd(4, t2, 3.0, '#ebe5dc', 1.4);
      const paid = [P(pawn('#ef8a56', 1.1), 1.35, 3.1, -2.4), P(pawn('#ef8a56', 1.1), 2.35, 3.1, -2.4)]; paid.forEach(p => group.add(p));
      const drop = P(pill('↓ drop-off', { bg: '#ec7a6c', fg: '#fff0ec', h: 0.5, size: 0.5 }), 2.2, 0.85, 1.3); group.add(drop);
      const disc = new THREE.Mesh(new THREE.CircleGeometry(0.75, 48), new THREE.MeshBasicMaterial({ color: '#f5a59b', transparent: true, opacity: 0.6 })); disc.rotation.x = -Math.PI / 2; P(disc, 2.4, 0.02, 1.6); group.add(disc);
      const clicks = P(pill('✓ real clicks', { bg: '#ee8b59', fg: '#3a1c0b', h: 0.5, size: 0.48 }), -0.2, 3.25, 0.6); group.add(clicks);
      const vibes = P(card({ w: 1.25, h: 0.62, d: 0.15, r: 0.31, color: '#f1ece6', draw: (ctx, W, H) => {
        ctx.fillStyle = '#c9a39b'; ctx.font = `italic 400 ${H * 0.55}px ${FONT.serif}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('vibes', W / 2, H / 2);
        ctx.strokeStyle = '#e8584f'; ctx.lineWidth = H * 0.06; ctx.beginPath(); ctx.moveTo(W * 0.22, H * 0.68); ctx.lineTo(W * 0.78, H * 0.3); ctx.stroke();
      } }), 1.7, 3.95, -0.4); group.add(vibes);
      return { bot, drop, disc, clicks, vibes, paid };
    },
    update({ bot, drop, disc, clicks, vibes, paid }, lt) {
      paid.forEach((p, i) => { p.position.y = 3.1 + Math.abs(Math.sin(lt * 3 + i)) * 0.08; p.visible = lt > 0.05 + i * 0.25; });
      popIn(drop, lt, 1.7, 0.4); disc.material.opacity = 0.6 * prog(lt, 1.7, 0.4);
      popIn(clicks, lt, 3.2, 0.4); popIn(vibes, lt, 4.15, 0.4);
      bot.set(lt, { mood: lt < 0.6 ? 'surprised' : lt < 1.6 ? 'think' : lt < 2.5 ? 'worried' : lt < 3.0 ? 'neutral' : lt < 3.6 ? 'squint' : lt < 4.2 ? 'happy' : 'wink', turn: 0.3, talk: lt > 2.5 && lt < 3.1 });
    },
  },

  // ── 16. Pinned comment on the corkboard ──────────────────────────────────────
  {
    id: 'pinned', start: 43.9, end: 46.15, env: 'cork', zoom: 1.3, lift: 0.2, enter: WHIP,
    camera: lt => ({ pos: [0, 2.6, 11.5 - lt * 0.35], look: [0, 2.35, 0], fov: 33 }),
    build({ group }) {
      const board = P(corkboard({ w: 9, h: 9 }), 0, 3.5, -1.6); group.add(board);
      const cc = P(commentCard({ handle: '@you' }), -0.15, 2.55, -1.3); group.add(cc);
      const pin = P(sphere(0.2, clay('#e5733f', { rough: 0.35 })), 1.95, 3.65, -1.1); group.add(pin);
      const bot = P(robot({ scale: 0.6 }), 1.6, 0, 0.6); group.add(bot);
      const handle = P(decal(2.2, 0.3, (ctx, W, H) => { ctx.fillStyle = '#f1e7da'; ctx.font = `500 ${H * 0.6}px ${FONT.mono}`; ctx.textBaseline = 'middle'; ctx.fillText('@you', 4, H / 2); }, { px: 220 }), -1.5, 0.75, -1.25); group.add(handle);
      return { cc, pin, bot };
    },
    update({ cc, pin, bot }, lt) {
      cc.scale.setScalar(Math.max(0.001, pop(lt, 0.0, 0.4) * 0.98));
      pin.scale.setScalar(Math.max(0.001, pop(lt, 0.9, 0.4)));
      bot.set(lt, { mood: lt < 0.9 ? 'neutral' : lt < 1.4 ? 'closed' : 'happy', turn: -0.2 });
    },
  },

  // ── 17. Send this to the friend still pasting error logs ─────────────────────
  {
    id: 'friend', start: 46.15, end: 48.35, env: 'cream', zoom: 1.2, exit: { type: 'fade', dur: 0.3 },
    camera: lt => ({ pos: [0.2, 2.5, 12.5 - lt * 0.2], look: [0.3, 1.6, 0], fov: 33 }),
    build({ group }) {
      const bot = P(robot(), -1.3, 0, 0.6); group.add(bot);
      const fr = P(robot({ scale: 0.68 }), 1.25, 0.65, 0); group.add(fr);
      const stand = P(desk({ w: 0.75, h: 0.65, d: 0.7 }), 1.25, 0, 0); group.add(stand);
      const R = rng(5);
      const notes = [];
      for (let i = 0; i < 6; i++) { const n = errorNote(); n.scale.setScalar(0.55); P(n, 0.8 + R() * 1.0, 1.6 + R() * 1.0, 0.4 + R() * 0.2); n.rotation.z = (R() - 0.5) * 0.6; group.add(n); notes.push(n); }
      const plane = new THREE.Mesh(new THREE.ConeGeometry(0.22, 0.6, 3), clay(C.orange)); plane.rotation.z = -Math.PI / 2; plane.castShadow = true; group.add(plane);
      return { bot, fr, notes, plane };
    },
    update({ bot, fr, notes, plane }, lt) {
      const f = prog(lt, 0.2, 0.75, ease.inOut);
      plane.visible = lt > 0.2 && lt < 0.95;
      plane.position.set(lerp(-0.6, 0.9, f), 2.4 + Math.sin(f * Math.PI) * 0.6, 0.6);
      notes.forEach((n, i) => { n.position.y += Math.sin(lt * 2 + i) * 0.002; });
      bot.set(lt, { mood: lt < 0.7 ? 'squint' : lt < 1.2 ? 'happy' : 'smile', talk: lt > 1.0 && lt < 1.6, turn: 0.25 });
      fr.set(lt, { mood: 'worried', glasses: true, turn: -0.3, seed: 2 });
    },
  },

  // ── 18. Loop back to the start ───────────────────────────────────────────────
  {
    id: 'outro', start: 48.35, end: 49.2, env: 'cream', zoom: 1, enter: { type: 'fade', dur: 0.5 },
    camera: () => camIntro(0),
    build({ group }) { group.add(plinth()); const box = P(cardboardBox(), 0, 0.22, 0); group.add(box); return { box }; },
    update({ box }) { box.setOpen(0.45); },
  },
];

function camIntro(lt) {
  const k = prog(lt, 2.2, 1.7, ease.inOut);
  return { pos: [0, lerp(3.6, 3.3, k), lerp(11.6 - lt * 0.25, 14.0, k)], look: [0, lerp(1.5, 1.95, k), 0], fov: 30 };
}
scenes[0].camera = camIntro;

function redX(size = 0.4) {
  return decal(size, size, (ctx, W, H) => {
    ctx.fillStyle = '#e9574f'; ctx.beginPath(); ctx.arc(W / 2, H / 2, W * 0.46, 0, 7); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = W * 0.09; ctx.lineCap = 'round'; const s = W * 0.16;
    ctx.beginPath(); ctx.moveTo(W / 2 - s, H / 2 - s); ctx.lineTo(W / 2 + s, H / 2 + s); ctx.moveTo(W / 2 + s, H / 2 - s); ctx.lineTo(W / 2 - s, H / 2 + s); ctx.stroke();
  }, { px: 200 });
}

export default {
  title: '5 connectors · daily tip',
  width: 720, height: 1280, fps: 30, duration: 49.2, zoom: 0.98, lift: 0.55,
  audio: 'assets/example-connectors-voice.m4a',
  words,
  hud: { left: '// daily tip', counterLabel: 'CONNECTED', total: 5, counter: [[0, 0], [11.7, 1], [18.3, 2], [24.8, 3], [30.9, 4], [37.6, 5]] },
  captions: [
    { at: 0, text: 'Everyone thinks' }, { text: '[Claude Code] knows' }, { text: 'your [app.]' },
    { text: 'It only knows' }, { text: 'your [code.]' },
    { text: 'It’s never seen', end: 4.46 },
    { text: 'Your {payments.}', at: 5.28 }, { text: 'Your {live site.}' }, { text: 'Your {crashes.}' }, { text: 'Or your {users.}' },
    { text: '[Five connectors]' }, { text: 'fix that.' },
    { text: 'One: [Supabase.]', at: 10.52, times: [10.52, 11.28] },
    { text: '[real tables,]', at: 12.6 }, { text: 'not a guess.' },
    { text: 'Add [read only.]' }, { text: 'It can [look,]' }, { text: 'but it can’t [delete.]' },
    { text: 'Two: [Stripe.]', at: 17.14, times: [17.14, 18.04] },
    { text: 'Ask,', end: 18.95 }, { text: 'this week?”', at: 19.32 },
    { text: 'It checks' }, { text: '[real account.]' }, { text: 'And [refunds] still' }, { text: 'wait for [your approval.]' },
    { text: 'Three: [Vercel.]', at: 23.48, times: [23.48, 24.26], end: 24.9 },
    { text: 'Claude reads', at: 25.94 }, { text: '[build logs] itself.' }, { text: 'No more [pasting]' }, { text: 'errors into chat.' },
    { text: 'Four: [Sentry.]', at: 29.58, times: [29.58, 30.32], end: 31.05 },
    { text: 'A', at: 31.1, end: 31.25 }, { text: 'at [2 AM.]', at: 31.88, times: [31.88, 32.04, 32.2] },
    { text: 'Claude sees' }, { text: '[exact error,]' }, { text: 'down to the [line.]' },
    { text: 'Five, and the [biggest:]', at: 35.6 }, { text: '[PostHog.]', at: 37.2, times: [37.2] },
    { text: 'Claude', at: 38.0, end: 38.25 }, { text: 'your [users.]', at: 39.02 },
    { text: 'Ask where signups' }, { text: '[drop off.]' },
    { text: 'It answers' }, { text: '[real clicks,] not [vibes.]' },
    { text: 'Every install command' }, { text: 'is in the [pinned comment.]' },
    { text: 'Send this to the friend' }, { text: 'still [pasting error logs.]', end: 48.35 },
  ],
  scenes,
};

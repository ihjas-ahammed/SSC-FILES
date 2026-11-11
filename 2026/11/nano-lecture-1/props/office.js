// Set dressing: filing cabinet, desk, sign stand, bin, moon, funnel tiers, corkboard, delete button.
import * as THREE from 'three';
import { rbox, cyl, sphere, clay, glow, decal, card, glowSprite, C, FONT } from '../engine/geo.js';

export function cabinet(drawers = ['users', 'orders', 'plans']) {
  const g = new THREE.Group();
  const body = rbox(2.2, 2.9, 1.5, 0.12, clay('#ebe5dc', { rough: 0.75 })); body.position.y = 1.45; g.add(body);
  const top = rbox(2.35, 0.1, 1.6, 0.04, clay('#ef9a68')); top.position.y = 2.94; g.add(top);
  g.drawers = drawers.map((name, i) => {
    const d = new THREE.Group();
    const front = card({ w: 1.95, h: 0.82, d: 0.12, r: 0.06, color: '#e7e0d6', px: 240, draw: (ctx, W, H) => {
      ctx.fillStyle = '#8f877e'; ctx.font = `500 ${H * 0.2}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(name, W / 2, H * 0.36);
      ctx.fillStyle = '#4d4540'; ctx.beginPath(); ctx.roundRect(W * 0.4, H * 0.62, W * 0.2, H * 0.07, 6); ctx.fill();
    } });
    d.add(front); d.position.set(0, 2.42 - i * 0.92, 0.78); g.add(d);
    return d;
  });
  return g;
}

export function desk({ w = 1.9, h = 1.3, d = 1.2 } = {}) {
  const g = new THREE.Group();
  const b = rbox(w, h, d, 0.04, clay('#c19066', { rough: 0.8 })); b.position.y = h / 2; g.add(b);
  const t = rbox(w + 0.1, 0.08, d + 0.1, 0.03, clay('#cf9d72')); t.position.y = h; g.add(t);
  return g;
}

export function signStand({ w = 1.25, h = 2.1, draw } = {}) {
  const g = new THREE.Group();
  const base = cyl(0.55, 0.62, 0.08, clay('#2d2622')); base.position.y = 0.04; g.add(base);
  const pole = cyl(0.04, 0.04, 1.6, clay('#2d2622')); pole.position.y = 0.8; g.add(pole);
  const board = card({ w, h, d: 0.1, r: 0.06, color: '#24201d', px: 260, emissive: 0.08, draw: draw || ((ctx, W, H) => {
    ctx.fillStyle = '#f7f3ee'; ctx.beginPath(); ctx.roundRect(W * 0.06, H * 0.035, W * 0.88, H * 0.93, 8); ctx.fill();
    ctx.fillStyle = '#ef6a62'; ctx.beginPath(); ctx.arc(W / 2, H * 0.36, W * 0.1, 0, 7); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = W * 0.022; const s = W * 0.035, cx = W / 2, cy = H * 0.36;
    ctx.beginPath(); ctx.moveTo(cx - s, cy - s); ctx.lineTo(cx + s, cy + s); ctx.moveTo(cx + s, cy - s); ctx.lineTo(cx - s, cy + s); ctx.stroke();
    ctx.fillStyle = '#c88a82'; ctx.font = `600 ${W * 0.06}px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('Something', W / 2, H * 0.5); ctx.fillText('went wrong', W / 2, H * 0.54);
  }) });
  board.position.y = 1.6 + h / 2 - 0.2; g.add(board);
  g.board = board;
  return g;
}

export function trashBin() {
  const g = new THREE.Group();
  const m = clay('#7b746d', { rough: 0.45, metal: 0.3 });
  const b = cyl(0.62, 0.5, 1.2, m); b.position.y = 0.6; g.add(b);
  const rim = cyl(0.66, 0.66, 0.08, clay('#8d867f', { rough: 0.4, metal: 0.3 })); rim.position.y = 1.2; g.add(rim);
  const inside = cyl(0.58, 0.58, 0.02, clay('#2c2724')); inside.position.y = 1.23; g.add(inside);
  return g;
}

export function bigX(color = '#e9574f') {
  const g = new THREE.Group();
  const disc = decal(0.9, 0.9, (ctx, W, H) => {
    ctx.fillStyle = color; ctx.beginPath(); ctx.arc(W / 2, H / 2, W * 0.46, 0, 7); ctx.fill();
    ctx.strokeStyle = '#fff'; ctx.lineWidth = W * 0.09; ctx.lineCap = 'round'; const s = W * 0.17;
    ctx.beginPath(); ctx.moveTo(W / 2 - s, H / 2 - s); ctx.lineTo(W / 2 + s, H / 2 + s); ctx.moveTo(W / 2 + s, H / 2 - s); ctx.lineTo(W / 2 - s, H / 2 + s); ctx.stroke();
  }, { px: 200 });
  g.add(disc);
  return g;
}

export function moon() {
  const g = new THREE.Group();
  g.add(sphere(0.45, glow('#fff0dc', 0.9)));
  const h = glowSprite('#ffe7c4', 1.8, 0.25); g.add(h);
  return g;
}

export function tier(name, w = 3.2) {
  const g = new THREE.Group();
  const slab = rbox(w, 0.3, 1.5, 0.08, clay('#ebe5dc', { rough: 0.8 })); slab.position.y = 0.15; g.add(slab);
  const lab = decal(1.6, 0.3, (ctx, W, H) => { ctx.fillStyle = '#9d958c'; ctx.font = `500 ${H * 0.62}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(name, W / 2, H / 2); }, { px: 240 });
  lab.position.set(0, 0.15, 0.752); g.add(lab);
  return g;
}

export function corkboard({ w = 8, h = 9 } = {}) {
  const g = new THREE.Group();
  const frame = rbox(w + 0.4, h + 0.4, 0.3, 0.08, clay('#4a3324', { rough: 0.7 })); g.add(frame);
  const cork = decal(w, h, (ctx, W, H) => {
    const gr = ctx.createRadialGradient(W / 2, H * 0.4, 10, W / 2, H / 2, W * 0.75);
    gr.addColorStop(0, '#b98c62'); gr.addColorStop(1, '#6d4c33'); ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    for (let i = 0; i < 9000; i++) { ctx.fillStyle = `rgba(${60 + (i * 37) % 60},${40 + (i * 17) % 30},20,0.18)`; ctx.fillRect((i * 7919) % W, (i * 104729) % H, 2, 2); }
  }, { px: 90, transparent: false });
  cork.position.z = 0.16; g.add(cork);
  return g;
}

export function deleteButton() {
  const g = new THREE.Group();
  const base = rbox(1.0, 0.18, 0.7, 0.06, clay('#6b625c')); base.position.y = 0.09; g.add(base);
  const btn = rbox(0.78, 0.2, 0.5, 0.08, clay('#ee7d74', { rough: 0.5 })); btn.position.y = 0.26; g.add(btn);
  g.btn = btn;
  return g;
}

export function dotTrail(n = 1) { return glowSprite('#ff9a55', n, 0.7); }

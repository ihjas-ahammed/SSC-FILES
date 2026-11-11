// Service pedestals ("database", "payments", ...) with floating icons and the red "blocked" badge.
import * as THREE from 'three';
import { rbox, cyl, sphere, capsule, clay, decal, glowSprite, card, C, FONT, tint } from '../engine/geo.js';

export function pedestal(name) {
  const g = new THREE.Group();
  const cube = rbox(2.2, 1.9, 2.2, 0.22, clay('#bdb8b1', { rough: 0.85 }));
  cube.position.y = 0.95; g.add(cube);
  // label: plain text that turns into a red pill
  const lab = decal(1.9, 0.5, () => {}, { px: 260 });
  lab.position.set(0, 0.62, 1.102); g.add(lab);
  let last = -1;
  g.setAlert = (k) => {
    tint(cube, '#bdb8b1', '#e8aaa3', k);
    const q = Math.round(k * 10);
    if (q === last) return; last = q;
    const cv = lab.material.map.image, ctx = cv.getContext('2d'), W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    if (k > 0.05) { ctx.globalAlpha = k; ctx.fillStyle = '#e0565b'; ctx.beginPath(); ctx.roundRect(W * 0.12, H * 0.12, W * 0.76, H * 0.76, H * 0.38); ctx.fill(); ctx.globalAlpha = 1; }
    ctx.fillStyle = k > 0.5 ? '#ffe3df' : '#5f5a54';
    ctx.font = `500 ${H * 0.4}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(name, W / 2, H / 2 + 2);
    lab.material.map.needsUpdate = true;
  };
  g.setAlert(0);
  return g;
}

export function banBadge() {
  const g = new THREE.Group();
  const disc = decal(1.1, 1.1, (ctx, W, H) => {
    const r = W / 2;
    ctx.fillStyle = '#f0605f'; ctx.beginPath(); ctx.arc(r, r, r * 0.9, 0, 7); ctx.fill();
    ctx.strokeStyle = '#ffe7e3'; ctx.lineWidth = W * 0.07;
    ctx.beginPath(); ctx.arc(r, r, r * 0.42, 0, 7); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(r - r * 0.3, r + r * 0.3); ctx.lineTo(r + r * 0.3, r - r * 0.3); ctx.stroke();
  }, { px: 200, emissive: 0.5 });
  g.add(disc);
  const halo = glowSprite('#ff5a4f', 1.9, 0.45); halo.position.z = -0.05; g.add(halo);
  return g;
}

export const icons = {
  database() {
    const g = new THREE.Group();
    const m = clay('#efa9a1', { rough: 0.6 });
    for (let i = 0; i < 3; i++) { const c = cyl(0.62, 0.62, 0.42, m); c.position.y = 0.22 + i * 0.47; g.add(c); }
    return g;
  },
  payments() {
    const g = new THREE.Group();
    const cardM = rbox(1.5, 0.95, 0.08, 0.06, clay('#e9935f', { rough: 0.55 })); cardM.position.set(-0.2, 0.75, 0); cardM.rotation.set(-0.15, 0.25, 0.08); g.add(cardM);
    const chip = rbox(0.22, 0.17, 0.04, 0.02, clay('#7a3c1f')); chip.position.set(-0.6, 0.85, 0.07); chip.rotation.copy(cardM.rotation); g.add(chip);
    for (let i = 0; i < 3; i++) { const c = cyl(0.24, 0.24, 0.07, clay('#d8a24a', { rough: 0.35, metal: 0.4 })); c.position.set(0.75, 0.04 + i * 0.075, 0.25); g.add(c); }
    return g;
  },
  site() {
    return card({ w: 1.6, h: 1.05, d: 0.1, r: 0.08, color: '#f3c2b9', draw: (ctx, W, H) => {
      ctx.fillStyle = '#f7d9d3'; ctx.fillRect(0, 0, W, H * 0.16);
      ['#ef6a5e', '#f2b84e', '#7cc06e'].forEach((c, i) => { ctx.fillStyle = c; ctx.beginPath(); ctx.arc(W * 0.06 + i * W * 0.05, H * 0.08, H * 0.03, 0, 7); ctx.fill(); });
      ctx.fillStyle = '#e88572'; ctx.fillRect(W * 0.1, H * 0.3, W * 0.5, H * 0.08);
      ctx.fillStyle = '#ef8a6d'; ctx.fillRect(W * 0.1, H * 0.48, W * 0.3, H * 0.34);
      ctx.fillStyle = '#f5cfc7'; ctx.fillRect(W * 0.5, H * 0.48, W * 0.4, H * 0.34);
    } });
  },
  crashes() {
    return card({ w: 0.78, h: 1.45, d: 0.12, r: 0.1, color: '#2b2522', draw: (ctx, W, H) => {
      ctx.fillStyle = '#f6e3df'; ctx.beginPath(); ctx.roundRect(W * 0.08, H * 0.05, W * 0.84, H * 0.9, 10); ctx.fill();
      ctx.strokeStyle = '#e0565b'; ctx.lineWidth = W * 0.04; const c = [W / 2, H * 0.4], s = W * 0.08;
      ctx.beginPath(); ctx.moveTo(c[0] - s, c[1] - s); ctx.lineTo(c[0] + s, c[1] + s); ctx.moveTo(c[0] + s, c[1] - s); ctx.lineTo(c[0] - s, c[1] + s); ctx.stroke();
      ctx.fillStyle = '#c99a94'; ctx.font = `500 ${W * 0.06}px ${FONT.sans}`; ctx.textAlign = 'center'; ctx.fillText('something went', W / 2, H * 0.56); ctx.fillText('wrong', W / 2, H * 0.6);
    } });
  },
  users() {
    const g = new THREE.Group();
    const pos = [[-0.55, 0.1, 0.9], [-0.2, 0.25, 1], [0.15, 0.2, 1.05], [0.5, 0.05, 1.1], [-0.35, -0.3, 0.92], [0.05, -0.3, 1], [0.42, -0.35, 0.96]];
    pos.forEach(([x, z, s], i) => g.add(pawn(i === 3 ? C.orange : '#b9b3ab', s)).children.at(-1).position.set(x, 0, z));
    return g;
  },
};

export function pawn(color = '#ece6dd', s = 1) {
  const g = new THREE.Group();
  const m = clay(color, { rough: 0.6 });
  const b = capsule(0.17, 0.32, m); b.position.y = 0.34; g.add(b);
  const h = sphere(0.15, m); h.position.y = 0.82; g.add(h);
  g.scale.setScalar(s);
  return g;
}

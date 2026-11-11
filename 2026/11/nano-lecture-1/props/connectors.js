// Hanging numbered plugs, a power strip with labelled sockets, and the "1 Supabase" nameplate.
import * as THREE from 'three';
import { rbox, cyl, sphere, clay, glow, decal, glowSprite, C, FONT } from '../engine/geo.js';

export function plug(n, { cable = 14 } = {}) {
  const g = new THREE.Group();
  const body = rbox(0.78, 0.82, 0.78, 0.16, clay(C.orange, { rough: 0.55 }));
  body.position.y = 0.41; g.add(body);
  const cap = rbox(0.5, 0.18, 0.5, 0.06, clay('#2a201a')); cap.position.y = 0.88; g.add(cap);
  const num = decal(0.6, 0.6, (ctx, W, H) => {
    ctx.fillStyle = '#2a1a10'; ctx.font = `600 ${H * 0.62}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(n), W / 2, H / 2 + 4);
  }, { px: 200 });
  num.position.set(0, 0.41, 0.395); g.add(num);
  for (const s of [-1, 1]) { const p = cyl(0.035, 0.035, 0.32, clay('#c9c2b8', { metal: 0.6, rough: 0.3 })); p.position.set(s * 0.14, -0.14, 0); g.add(p); }
  const wire = cyl(0.05, 0.05, cable, clay('#1d1714', { rough: 0.5 }), 12); wire.position.y = 0.95 + cable / 2; g.add(wire);
  // glow when plugged
  const gl = glowSprite('#ffae6b', 2.2, 0); gl.position.y = 0.4; g.add(gl);
  const inner = rbox(0.8, 0.84, 0.8, 0.17, glow('#ffb27a', 0)); inner.position.y = 0.41; inner.visible = false; g.add(inner);
  g.setGlow = (k) => {
    gl.material.opacity = 0.8 * k;
    body.material.emissive = new THREE.Color('#ff8a4a'); body.material.emissiveIntensity = 2.6 * k;
  };
  return g;
}

// sockets: ['database','payments',...]; spacing between sockets
export function powerStrip(labels, { spacing = 2.4 } = {}) {
  const g = new THREE.Group();
  const L = spacing * labels.length + 1.2;
  const slab = rbox(L, 0.42, 1.9, 0.14, clay('#ece6de', { rough: 0.8 })); slab.position.set(L / 2 - 0.6 - spacing / 2, 0.21, 0); g.add(slab);
  const stripe = rbox(L, 0.05, 0.05, 0.02, clay(C.orange)); stripe.position.set(slab.position.x, 0.3, 0.96); g.add(stripe);
  g.sockets = labels.map((name, i) => {
    const x = i * spacing;
    const s = cyl(0.5, 0.52, 0.06, clay('#d6cec3', { rough: 0.9 })); s.position.set(x, 0.43, 0); g.add(s);
    const hole = cyl(0.42, 0.42, 0.065, clay('#8a8178')); hole.position.set(x, 0.435, 0); g.add(hole);
    for (const k of [-1, 1]) { const h = cyl(0.05, 0.05, 0.07, clay('#2a221d')); h.position.set(x + k * 0.14, 0.44, 0); g.add(h); }
    const lab = decal(1.8, 0.34, (ctx, W, H) => {
      ctx.fillStyle = '#9b938a'; ctx.font = `500 ${H * 0.62}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(name, W / 2, H / 2);
    }, { px: 220 });
    lab.position.set(x, 0.2, 0.952); g.add(lab);
    const ring = glowSprite('#ff9a55', 1.6, 0); ring.position.set(x, 0.5, 0); g.add(ring);
    return { x, name, ring, lab };
  });
  g.light = (i, k) => { g.sockets[i].ring.material.opacity = 0.9 * k; };
  return g;
}

// "1  Supabase / official MCP · Supabase" floating plate. reveal: 0..1 name typing
export function nameplate(n, name, sub = '') {
  const g = new THREE.Group();
  const plate = rbox(3.6, 1.35, 0.3, 0.16, clay('#ece6dd', { rough: 0.6 })); g.add(plate);
  const sq = rbox(1.15, 1.15, 0.34, 0.12, clay(C.orange, { rough: 0.55 })); sq.position.set(-1.12, 0, 0.04); g.add(sq);
  const num = decal(1, 1, (ctx, W, H) => { ctx.fillStyle = '#1f150e'; ctx.font = `500 ${H * 0.86}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(String(n), W / 2, H / 2 + 6); }, { px: 220 });
  num.position.set(-1.12, 0, 0.215); g.add(num);
  let shown = -1;
  const txt = decal(2.2, 1, () => {}, { px: 260 });
  txt.position.set(0.62, 0, 0.155); g.add(txt);
  g.setReveal = (k) => {
    const c = Math.round(k * name.length);
    if (c === shown) return; shown = c;
    txt.userData.redraw = null;
    const ctx = txt.material.map.image.getContext('2d'), W = txt.material.map.image.width, H = txt.material.map.image.height;
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = '#1f1915'; ctx.font = `600 ${H * 0.27}px ${FONT.sans}`; ctx.textBaseline = 'middle'; ctx.fillText(name.slice(0, c), 8, H * 0.42);
    if (k >= 1) { ctx.fillStyle = '#a49a90'; ctx.font = `500 ${H * 0.085}px ${FONT.mono}`; ctx.fillText(sub, 10, H * 0.66); }
    txt.material.map.needsUpdate = true;
  };
  g.setReveal(0);
  return g;
}

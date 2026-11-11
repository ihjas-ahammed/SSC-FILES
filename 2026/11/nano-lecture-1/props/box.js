// Cardboard box with animated flaps + the round plinth it sits on.
import * as THREE from 'three';
import { rbox, cyl, torus, clay, decal, C, FONT } from '../engine/geo.js';

export function plinth({ r = 2.6, h = 0.22, ring = true } = {}) {
  const g = new THREE.Group();
  const top = cyl(r, r * 1.01, h, clay('#efe9e1', { rough: 0.85 }), 96);
  top.position.y = h / 2; g.add(top);
  if (ring) {
    const t = torus(r + 0.35, 0.035, clay(C.orange, { rough: 0.5 })); t.rotation.x = Math.PI / 2; t.position.y = 0.03; g.add(t);
    const t2 = torus(r + 0.02, 0.025, clay('#f2a477')); t2.rotation.x = Math.PI / 2; t2.position.y = h + 0.005; g.add(t2);
  }
  return g;
}

export function codeLabel(w = 1.2, h = 0.55, text = 'your code') {
  return decal(w, h, (ctx, W, H) => {
    ctx.fillStyle = '#f4f1ec'; ctx.beginPath(); ctx.roundRect(4, 4, W - 8, H - 8, 10); ctx.fill();
    ctx.strokeStyle = '#2b2420'; ctx.lineWidth = 6; ctx.beginPath(); ctx.roundRect(14, 14, W - 28, H - 28, 8); ctx.stroke();
    ctx.fillStyle = '#2b2420'; ctx.font = `500 ${H * 0.2}px ${FONT.mono}`; ctx.textBaseline = 'middle';
    ctx.fillText('</>  ' + text, W * 0.13, H * 0.36);
    let x = W * 0.12;
    for (let i = 0; x < W * 0.88; i++) { const bw = [3, 6, 3, 9, 4, 3, 7][i % 7]; ctx.fillRect(x, H * 0.55, bw, H * 0.24); x += bw + [4, 3, 6, 3, 5][i % 5]; }
  }, { px: 300, transparent: false });
}

// open: 0 closed .. 1 flaps fully open
export function cardboardBox({ w = 1.9, h = 1.55, d = 1.7, label = 'your code' } = {}) {
  const g = new THREE.Group();
  const mat = clay(C.cardboard, { rough: 0.9 });
  const inner = clay('#b08a5f', { rough: 0.95 });
  const t = 0.05;
  const wall = (W, H, D, x, y, z) => { const m = rbox(W, H, D, 0.02, mat, 2); m.position.set(x, y, z); g.add(m); return m; };
  wall(w, h, t, 0, h / 2, d / 2 - t / 2);
  wall(w, h, t, 0, h / 2, -d / 2 + t / 2);
  wall(t, h, d, -w / 2 + t / 2, h / 2, 0);
  wall(t, h, d, w / 2 - t / 2, h / 2, 0);
  const floor = rbox(w - 0.1, 0.05, d - 0.1, 0.01, inner, 1); floor.position.y = 0.05; g.add(floor);
  // a lid seam line
  const lbl = codeLabel(1.25, 0.58, label); lbl.position.set(0, h * 0.36, d / 2 + 0.004); g.add(lbl);
  // flaps: hinged at the top edges
  const flaps = [];
  const mk = (W, D, x, z, axis, sign) => {
    const pivot = new THREE.Group(); pivot.position.set(x, h, z); g.add(pivot);
    const f = rbox(W, 0.04, D, 0.015, mat, 2);
    if (axis === 'x') f.position.z = sign * D / 2; else f.position.x = sign * W / 2;
    pivot.add(f); flaps.push({ pivot, axis, sign });
  };
  mk(w, d / 2, 0, d / 2, 'x', -1);   // front flap (folds back over top)
  mk(w, d / 2, 0, -d / 2, 'x', 1);   // back
  mk(w / 2, d, -w / 2, 0, 'z', 1);   // left
  mk(w / 2, d, w / 2, 0, 'z', -1);   // right
  g.setOpen = (k) => {
    // closed: flaps flat on top. open: rotated outward ~ 120°
    for (const f of flaps) {
      const a = k * 3.75;
      if (f.axis === 'x') f.pivot.rotation.x = -f.sign * a; else f.pivot.rotation.z = f.sign * a;
    }
  };
  g.setOpen(0);
  return g;
}

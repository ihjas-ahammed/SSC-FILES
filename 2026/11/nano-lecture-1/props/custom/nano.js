// Shared helpers for the nanoscience lecture videos.
import * as THREE from 'three';
import { cyl, sphere, clay, rbox, C, FONT } from '../../engine/geo.js';

// mathText does subscripts only: draw "pre" + raised "exp" + "post". Returns the width.
// pow(ctx, '= 10', '−6', ' m', x, y, px, { family, weight, italic, color, align })
export function pow(ctx, pre, exp, post, x, y, px, o = {}) {
  const f = k => `${o.italic ? 'italic ' : ''}${o.weight || 500} ${k}px ${o.family || FONT.mono}`;
  ctx.font = f(px); const a = ctx.measureText(pre).width, c = ctx.measureText(post).width;
  ctx.font = f(px * 0.62); const b = ctx.measureText(exp).width;
  const w = a + b + c;
  let cx = o.align === 'right' ? x - w : o.align === 'center' ? x - w / 2 : x;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = o.color || '#2b241f';
  ctx.font = f(px); ctx.fillText(pre, cx, y); cx += a;
  ctx.font = f(px * 0.62); ctx.fillText(exp, cx, y - px * 0.42); cx += b;
  ctx.font = f(px); ctx.fillText(post, cx, y);
  return w;
}

// square-root sign spanning top..bottom, followed by `width` of content. Returns x where the content starts.
export function radical(ctx, x, top, bottom, width, color = '#2b241f') {
  const h = bottom - top;
  ctx.strokeStyle = color; ctx.lineWidth = Math.max(3, h * 0.05); ctx.lineJoin = 'round'; ctx.lineCap = 'round';
  ctx.beginPath();
  ctx.moveTo(x, top + h * 0.62); ctx.lineTo(x + h * 0.1, top + h * 0.55); ctx.lineTo(x + h * 0.28, bottom);
  ctx.lineTo(x + h * 0.48, top); ctx.lineTo(x + h * 0.56 + width, top);
  ctx.stroke();
  return x + h * 0.56;
}

// Pendulum: pivot block at the top, a string of length `len`, a bob. The group origin is the pivot.
// p.setAngle(rad) swings it.
export function pendulum({ len = 2.2, bob = 0.28, color = C.orange } = {}) {
  const g = new THREE.Group();
  const mount = rbox(0.9, 0.16, 0.5, 0.05, clay('#3a322c')); mount.position.y = 0.08; g.add(mount);
  const arm = new THREE.Group(); g.add(arm);
  const str = cyl(0.018, 0.018, len, clay('#2b241f')); str.position.y = -len / 2; arm.add(str);
  const b = sphere(bob, clay(color, { rough: 0.35 })); b.position.y = -len; arm.add(b);
  g.arm = arm; g.bob = b;
  g.setAngle = a => (arm.rotation.z = a);
  return g;
}

// Stand for a pendulum: base + post + top beam, pivot at (0, h, 0) of the returned group.
export function stand({ h = 3.0, reach = 0.9 } = {}) {
  const g = new THREE.Group();
  const base = rbox(1.4, 0.14, 0.9, 0.05, clay('#cfc5b9')); base.position.set(-reach, 0.07, 0); g.add(base);
  const post = cyl(0.05, 0.05, h, clay('#5d554e')); post.position.set(-reach, h / 2, 0); g.add(post);
  const beam = cyl(0.045, 0.045, reach + 0.2, clay('#5d554e')); beam.rotation.z = Math.PI / 2; beam.position.set(-reach / 2 + 0.1, h, 0); g.add(beam);
  return g;
}

// AFM head (Fig. 5.2b): sample disc, chip + cantilever, a cone tip under its free end,
// laser diode and photodetector above with two beam segments. a.setHeat(0..1) glows the tip,
// a.setBeam(0..1) shows the laser, a.tipWorld = local position of the tip apex.
export function afm() {
  const g = new THREE.Group();
  const sample = cyl(1.6, 1.7, 0.3, clay('#cfc5b9')); sample.position.y = 0.15; g.add(sample);
  const film = cyl(1.45, 1.45, 0.04, clay('#8fa8b8', { rough: 0.5 })); film.position.y = 0.32; g.add(film);
  const chip = rbox(0.7, 0.3, 0.5, 0.05, clay('#3a322c')); chip.position.set(-1.25, 1.2, 0); g.add(chip);
  const lever = rbox(1.5, 0.05, 0.22, 0.02, clay('#d6a95a', { metal: 0.6, rough: 0.35 })); lever.position.set(-0.2, 1.1, 0); g.add(lever);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(0.11, 0.7, 24), clay('#c9b38a', { metal: 0.5, rough: 0.35 }));
  tip.rotation.x = Math.PI; tip.position.set(0.45, 0.72, 0); g.add(tip);
  const halo = glowSpriteLocal('#ff8a3d', 0.9); halo.position.set(0.45, 0.45, 0.05); g.add(halo);
  const laser = cyl(0.13, 0.13, 0.55, clay('#5d554e')); laser.position.set(-0.6, 3.0, 0); laser.rotation.z = 0.55; g.add(laser);
  const det = rbox(0.55, 0.45, 0.2, 0.05, clay('#2f7bb0')); det.position.set(1.6, 2.9, 0); det.rotation.z = -0.5; g.add(det);
  const beamMat = new THREE.MeshBasicMaterial({ color: '#ff3b3b', transparent: true, opacity: 0 });
  const seg = (a, b) => { const d = new THREE.Vector3().subVectors(b, a); const m = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, d.length(), 8), beamMat); m.position.copy(a).add(b).multiplyScalar(0.5); m.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.clone().normalize()); g.add(m); return m; };
  seg(new THREE.Vector3(-0.45, 2.75, 0), new THREE.Vector3(0.45, 1.14, 0));
  seg(new THREE.Vector3(0.45, 1.14, 0), new THREE.Vector3(1.45, 2.75, 0));
  g.setHeat = k => { halo.material.opacity = 0.9 * k; tip.material.emissive?.set?.('#ff6a1a'); if (tip.material.emissiveIntensity !== undefined) tip.material.emissiveIntensity = 1.5 * k; };
  g.setBeam = k => (beamMat.opacity = 0.85 * k);
  g.lever = lever; g.tip = tip;
  g.setHeat(0); g.setBeam(0);
  return g;
}
function glowSpriteLocal(color, size) {
  const c = document.createElement('canvas'); c.width = c.height = 64; const x = c.getContext('2d');
  const gr = x.createRadialGradient(32, 32, 0, 32, 32, 32); gr.addColorStop(0, 'rgba(255,255,255,1)'); gr.addColorStop(0.4, 'rgba(255,255,255,0.5)'); gr.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = gr; x.fillRect(0, 0, 64, 64);
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), color, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size); return s;
}

// Honeycomb (graphene) texture on a transparent canvas. rep = how many cells across.
export function honeyTex({ color = '#2b241f', bg = 'rgba(0,0,0,0)', rep = [6, 3] } = {}) {
  const c = document.createElement('canvas'); c.width = 256; c.height = 148; const x = c.getContext('2d');
  x.fillStyle = bg; x.fillRect(0, 0, c.width, c.height);
  x.strokeStyle = color; x.lineWidth = 6; x.lineJoin = 'round';
  const s = 256 / 6, h = s * Math.sqrt(3) / 2;            // hex side and half-height, 3 columns fit 256 px
  const hex = (cx, cy) => { x.beginPath(); for (let i = 0; i <= 6; i++) { const a = Math.PI / 3 * i; x.lineTo(cx + s * Math.cos(a), cy + s * Math.sin(a)); } x.stroke(); };
  for (let col = -1; col < 5; col++) for (let row = -1; row < 4; row++) hex(col * 1.5 * s, row * 2 * h + (col % 2 ? h : 0));
  const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(rep[0], rep[1]); t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Carbon nanotube: open cylinder with a honeycomb wall, axis along x.
export function nanotube({ r = 0.6, len = 3, color = '#2b241f', tint = '#e9e2d8', opacity = 0.85 } = {}) {
  const tex = honeyTex({ color, rep: [Math.round(len * 2.2), Math.round(r * 7)] });
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, len, 48, 1, true),
    new THREE.MeshStandardMaterial({ color: tint, map: tex, alphaMap: null, transparent: true, opacity, side: THREE.DoubleSide, roughness: 0.6, depthWrite: false }));
  m.rotation.z = Math.PI / 2;
  const g = new THREE.Group(); g.add(m); g.tube = m;
  return g;
}

// Flat graphene sheet (honeycomb card), facing the camera.
export function grapheneSheet({ w = 3, h = 1.8 } = {}) {
  const tex = honeyTex({ color: '#2b241f', rep: [Math.round(w * 2.2), Math.round(h * 2.2)] });
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ color: '#efe9e2', map: tex, transparent: true, opacity: 0.95, side: THREE.DoubleSide, roughness: 0.7 }));
}

// Double-headed arrow along x (length len), glowing colour. Rotate the group to point it.
export function arrow2(len = 2, color = '#ffb46a') {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.6, roughness: 0.4 });
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, len - 0.36, 12), mat); shaft.rotation.z = Math.PI / 2; g.add(shaft);
  for (const s of [-1, 1]) { const c = new THREE.Mesh(new THREE.ConeGeometry(0.1, 0.22, 16), mat); c.rotation.z = -s * Math.PI / 2; c.position.x = s * (len / 2 - 0.11); g.add(c); }
  return g;
}

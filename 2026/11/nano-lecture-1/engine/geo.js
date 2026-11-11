// Geometry + material + texture building blocks for the "clay toy" look.
import * as THREE from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';

export const C = {
  cream: '#e9e3da', creamDark: '#d9d1c5', white: '#f1ece4', orange: '#f07a3a', orangeDeep: '#e2652a',
  ink: '#1c1612', red: '#e5484d', pink: '#e9a29b', cardboard: '#c49563', cardboardDark: '#b48d62',
  gray: '#bdb7ae', dark: '#2a2420', wood: '#b07d55',
};

export const FONT = {
  sans: "'Manrope', system-ui, sans-serif",
  serif: "'Instrument Serif', Georgia, serif",
  mono: "'JetBrains Mono', ui-monospace, monospace",
};

const matCache = new Map();
export function clay(color, { rough = 0.72, metal = 0, emissive, emissiveIntensity = 1, shared = false } = {}) {
  const key = shared && `${color}|${rough}|${metal}|${emissive}|${emissiveIntensity}`;
  if (key && matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal });
  if (emissive) { m.emissive = new THREE.Color(emissive); m.emissiveIntensity = emissiveIntensity; }
  if (key) matCache.set(key, m);
  return m;
}

export const glow = (color = '#ffb070', intensity = 4) => glowMat(color, intensity * 2.2);
const glowMat = (color, intensity) =>
  new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: intensity, roughness: 0.4 });

export function rbox(w, h, d, r = 0.1, mat, seg = 4) {
  const m = new THREE.Mesh(new RoundedBoxGeometry(w, h, d, seg, Math.min(r, w / 2, h / 2, d / 2)), mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
export function sphere(r, mat, seg = 32) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, seg / 2), mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
export function cyl(rt, rb, h, mat, seg = 48) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
export function capsule(r, len, mat) {
  const m = new THREE.Mesh(new THREE.CapsuleGeometry(r, len, 8, 24), mat);
  m.castShadow = m.receiveShadow = true;
  return m;
}
export function torus(R, r, mat) {
  const m = new THREE.Mesh(new THREE.TorusGeometry(R, r, 16, 96), mat);
  m.castShadow = true;
  return m;
}

// ---------- Canvas textures ----------
export function canvasTex(wPx, hPx, draw) {
  const cv = document.createElement('canvas');
  cv.width = wPx; cv.height = hPx;
  const ctx = cv.getContext('2d');
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 8;
  const redraw = (...a) => { ctx.clearRect(0, 0, wPx, hPx); draw(ctx, wPx, hPx, ...a); tex.needsUpdate = true; };
  redraw();
  return { tex, ctx, canvas: cv, redraw };
}

export function rrect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.roundRect(x, y, w, h, r);
}

// A flat textured plane (decal). px = pixels per world unit.
export function decal(w, h, draw, { px = 220, transparent = true, emissive = 0 } = {}) {
  const ct = canvasTex(Math.round(w * px), Math.round(h * px), draw);
  const mat = new THREE.MeshStandardMaterial({ map: ct.tex, transparent, roughness: 0.8, depthWrite: !transparent });
  if (emissive) { mat.emissive = new THREE.Color('#ffffff'); mat.emissiveMap = ct.tex; mat.emissiveIntensity = emissive; }
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.userData.redraw = ct.redraw;
  m.renderOrder = 2;
  return m;
}

// Rounded slab with a drawn front face — the workhorse for UI cards, signs, labels.
export function card({ w = 2, h = 1, d = 0.12, r = 0.1, color = C.white, draw, px = 240, emissive = 0, rough = 0.75 } = {}) {
  const g = new THREE.Group();
  const body = rbox(w, h, d, r, clay(color, { rough }));
  g.add(body);
  if (draw) {
    const face = decal(w, h, draw, { px, emissive });
    face.position.z = d / 2 + 0.002;
    face.castShadow = false;
    g.add(face);
    g.userData.face = face;
    g.userData.redraw = face.userData.redraw;
  }
  g.userData.body = body;
  return g;
}

// Pill (capsule-shaped card) with centered text
export function pill(text, { bg = C.white, fg = '#9a9289', h = 0.42, font = FONT.mono, weight = 500, size = 0.5, w, d = 0.12, icon } = {}) {
  const px = 260;
  const meas = document.createElement('canvas').getContext('2d');
  meas.font = `${weight} ${h * size * px}px ${font}`;
  const tw = meas.measureText((icon ? icon + ' ' : '') + text).width / px;
  const W = w || tw + h * 1.1;
  return card({
    w: W, h, d, r: h / 2, color: bg, px,
    draw: (ctx, cw, ch) => {
      ctx.fillStyle = fg;
      ctx.font = `${weight} ${h * size * px}px ${font}`;
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      ctx.fillText((icon ? icon + ' ' : '') + text, cw / 2, ch / 2 + ch * 0.03);
    },
  });
}

// Text-only decal (labels printed on surfaces)
export function label(text, { size = 0.22, color = '#8c857c', font = FONT.mono, weight = 500, align = 'center', w } = {}) {
  const px = 300;
  const meas = document.createElement('canvas').getContext('2d');
  meas.font = `${weight} ${size * px}px ${font}`;
  const W = w || meas.measureText(text).width / px + size * 0.4;
  const H = size * 1.5;
  const m = decal(W, H, (ctx, cw, ch) => {
    ctx.fillStyle = color; ctx.font = `${weight} ${size * px}px ${font}`;
    ctx.textAlign = align; ctx.textBaseline = 'middle';
    ctx.fillText(text, align === 'center' ? cw / 2 : align === 'left' ? 4 : cw - 4, ch / 2);
  }, { px });
  m.castShadow = false;
  return m;
}

// Soft round sprite texture (dust, glows)
let _dot;
export function dotTexture() {
  if (_dot) return _dot;
  const { tex } = canvasTex(64, 64, (ctx) => {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.35, 'rgba(255,255,255,0.8)'); g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  });
  return (_dot = tex);
}

export function glowSprite(color = '#ffb47a', size = 1, opacity = 0.9) {
  const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: dotTexture(), color, transparent: true, opacity, depthWrite: false, blending: THREE.AdditiveBlending }));
  s.scale.setScalar(size);
  return s;
}

// Recursively set opacity on a group (for fades)
export function setOpacity(obj, a) {
  obj.visible = a > 0.001;
  obj.traverse(o => {
    const mats = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
    for (const m of mats) {
      if (m.userData.baseOpacity === undefined) m.userData.baseOpacity = m.opacity;
      m.transparent = m.transparent || a < 1 || m.userData.baseOpacity < 1;
      m.opacity = m.userData.baseOpacity * a;
    }
  });
}

// Tint every clay material in a group toward a color (e.g. gray cube -> pink)
export function tint(obj, from, to, k) {
  const a = new THREE.Color(from), b = new THREE.Color(to);
  obj.traverse(o => { if (o.material && o.material.color && !o.material.map) o.material.color.copy(a).lerp(b, k); });
}

export const place = (o, x = 0, y = 0, z = 0, s) => { o.position.set(x, y, z); if (s !== undefined) o.scale.setScalar(s); return o; };
export const deg = d => (d * Math.PI) / 180;

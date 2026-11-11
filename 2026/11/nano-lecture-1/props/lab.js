// Lab-experiment props (built for the thermodynamics lab series): beaker, metal block, foam cup,
// thermometer, digital readout, seesaw, water drop, bar, ice cube, NTC thermistor bead, multimeter,
// copper coil probe, glass diode, wax test tube, spherical calorimeter + canvas math text and plotting.
// Math text: `_x` or `_{xy}` = subscript (used on card faces, NOT in pills/captions).
import { THREE, clay, glow, rbox, cyl, sphere, torus, glowSprite, C } from '../engine/kit.js';
import { card, FONT } from '../engine/geo.js';

// ── math text on a canvas ────────────────────────────────────────────────────
function tokens(s) {
  const out = []; let i = 0, buf = '';
  while (i < s.length) {
    if (s[i] === '_') {
      if (buf) { out.push({ t: buf }); buf = ''; }
      if (s[i + 1] === '{') { const j = s.indexOf('}', i); out.push({ t: s.slice(i + 2, j), sub: true }); i = j + 1; }
      else { out.push({ t: s[i + 1], sub: true }); i += 2; }
    } else buf += s[i++];
  }
  if (buf) out.push({ t: buf });
  return out;
}
const fontOf = (px, { weight = 600, italic = false, family = FONT.sans } = {}) => `${italic ? 'italic ' : ''}${weight} ${px}px ${family}`;
export function mathWidth(ctx, s, px, o = {}) {
  let w = 0;
  for (const k of tokens(s)) { ctx.font = fontOf(k.sub ? px * 0.62 : px, o); w += ctx.measureText(k.t).width; }
  return w;
}
// align: 'left' | 'center' | 'right'. y is the text baseline.
export function mathText(ctx, s, x, y, px, { color = '#2b241f', align = 'left', ...o } = {}) {
  const w = mathWidth(ctx, s, px, o);
  let cx = align === 'center' ? x - w / 2 : align === 'right' ? x - w : x;
  ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillStyle = color;
  for (const k of tokens(s)) {
    ctx.font = fontOf(k.sub ? px * 0.62 : px, o);
    ctx.fillText(k.t, cx, k.sub ? y + px * 0.22 : y);
    cx += ctx.measureText(k.t).width;
  }
  return w;
}
// numerator over denominator, centred on x; y = fraction bar
export function mathFrac(ctx, num, den, x, y, px, o = {}) {
  const w = Math.max(mathWidth(ctx, num, px, o), mathWidth(ctx, den, px, o)) + px * 0.4;
  mathText(ctx, num, x, y - px * 0.3, px, { ...o, align: 'center' });
  mathText(ctx, den, x, y + px * 1.0, px, { ...o, align: 'center' });
  ctx.fillStyle = o.color || '#2b241f'; ctx.fillRect(x - w / 2, y - px * 0.06, w, Math.max(3, px * 0.07));
  return w;
}

// ── props ────────────────────────────────────────────────────────────────────
const glass = (color = '#cfe3ec', opacity = 0.38) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.15, metalness: 0, transparent: true, opacity, depthWrite: false, side: THREE.DoubleSide });

// Glass beaker with water. g.setLevel(0..1), g.bubbles(lt, k) for boiling.
export function beaker({ r = 0.75, h = 1.5, water = '#7fb7d6' } = {}) {
  const g = new THREE.Group();
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(r, r * 0.96, h, 48, 1, true), glass()); wall.position.y = h / 2; wall.renderOrder = 3; g.add(wall);
  const base = cyl(r * 0.96, r * 0.96, 0.05, glass('#cfe3ec', 0.5)); base.position.y = 0.025; g.add(base);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(r, 0.035, 12, 64), glass('#e8f2f6', 0.6)); rim.rotation.x = Math.PI / 2; rim.position.y = h; g.add(rim);
  const wat = cyl(r * 0.93, r * 0.91, h * 0.7, new THREE.MeshStandardMaterial({ color: water, roughness: 0.2, transparent: true, opacity: 0.72, depthWrite: false })); wat.position.y = h * 0.35 + 0.05; wat.renderOrder = 2; g.add(wat);
  const bub = [];
  for (let i = 0; i < 12; i++) { const b = sphere(0.035 + (i % 3) * 0.015, clay('#eaf6fb', { rough: 0.2 })); b.userData.p = [Math.sin(i * 2.4) * r * 0.6, Math.cos(i * 1.7) * r * 0.5, i / 12]; g.add(b); bub.push(b); }
  g.bubbles = (lt, k) => bub.forEach(b => {
    const [x, z, ph] = b.userData.p; const u = (lt * 0.9 + ph) % 1;
    b.position.set(x, 0.1 + u * h * 0.62, z); b.visible = k > 0.05; b.scale.setScalar(Math.max(0.001, k * (0.6 + u * 0.6)));
  });
  g.bubbles(0, 0);
  return g;
}

// Metal specimen (aluminium block) with a hook loop on top. g.setHot(0..1) glows orange.
export function metalBlock({ s = 0.62, color = '#c9ced4', string = 0 } = {}) {
  const g = new THREE.Group();
  const mat = clay(color, { rough: 0.32, metal: 0.55 });
  const b = rbox(s, s, s, 0.08, mat); b.position.y = s / 2; g.add(b);
  const loop = new THREE.Mesh(new THREE.TorusGeometry(0.09, 0.025, 10, 32), clay('#8f8a84')); loop.position.y = s + 0.08; g.add(loop);
  if (string) { const st = cyl(0.012, 0.012, string, clay('#efe8dc')); st.position.y = s + 0.16 + string / 2; g.add(st); }
  const halo = glowSprite('#ff8a3d', s * 3.2, 0); halo.position.y = s / 2; g.add(halo);
  const base = new THREE.Color(color), hot = new THREE.Color('#f2a06a');
  g.setHot = k => { mat.color.copy(base).lerp(hot, k * 0.55); mat.emissive = new THREE.Color('#ff6a2a'); mat.emissiveIntensity = k * 0.35; halo.material.opacity = k * 0.55; };
  g.setHot(0);
  return g;
}

// Styrofoam cup (white, tapered) with water inside, optional lid.
export function foamCup({ h = 1.35, water = '#7fb7d6' } = {}) {
  const g = new THREE.Group();
  const prof = [];
  const rb = 0.5, rt = 0.72, t = 0.07;
  prof.push(new THREE.Vector2(0, 0), new THREE.Vector2(rb, 0), new THREE.Vector2(rt, h), new THREE.Vector2(rt + 0.05, h + 0.03), new THREE.Vector2(rt - t, h + 0.03), new THREE.Vector2(rb - t, t), new THREE.Vector2(0, t));
  const cup = new THREE.Mesh(new THREE.LatheGeometry(prof, 48), clay('#f7f3ec', { rough: 0.95 })); cup.castShadow = cup.receiveShadow = true; g.add(cup);
  for (let i = 0; i < 2; i++) { const rib = new THREE.Mesh(new THREE.TorusGeometry(rb + (rt - rb) * (0.3 + i * 0.35) + 0.005, 0.012, 8, 64), clay('#e6e0d6')); rib.rotation.x = Math.PI / 2; rib.position.y = h * (0.3 + i * 0.35); g.add(rib); }
  const wl = h * 0.72, rw = rb + (rt - rb) * 0.72 - t;
  const wat = cyl(rw, rw, 0.04, clay(water, { rough: 0.15 })); wat.position.y = wl; g.add(wat);
  g.waterTop = wl;
  return g;
}

// Thin glass thermometer (bulb at the bottom). g.setLevel(0..1) moves the red column.
export function thermometer({ len = 2.2 } = {}) {
  const g = new THREE.Group();
  const tube = cyl(0.07, 0.07, len, glass('#eef5f8', 0.55)); tube.position.y = len / 2; g.add(tube);
  const bulbM = sphere(0.11, clay('#e5484d', { rough: 0.3 })); bulbM.position.y = 0.02; g.add(bulbM);
  const col = cyl(0.032, 0.032, 1, clay('#e5484d', { rough: 0.3 })); g.add(col);
  const cap = sphere(0.075, clay('#ebe5dc')); cap.position.y = len; g.add(cap);
  g.setLevel = v => { const L = 0.1 + v * (len - 0.3); col.scale.y = L; col.position.y = L / 2 + 0.02; };
  g.setLevel(0.2);
  return g;
}

// Digital readout card: label (math text) + value. g.show(value) redraws only when the text changes.
export function readout({ label = 'T', unit = '°C', w = 1.7, h = 0.62, digits = 1, accent = '#f07a3a' } = {}) {
  let last = null, val = 0;
  const c = card({ w, h, d: 0.14, r: 0.12, color: '#2b2521', px: 300, draw: (ctx, W, H) => {
    mathText(ctx, label, W * 0.08, H * 0.66, H * 0.42, { color: '#d6cdc4', weight: 600, italic: true, family: FONT.serif });
    ctx.font = `700 ${H * 0.4}px ${FONT.mono}`; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillStyle = accent;
    ctx.fillText(`${val.toFixed(digits)} ${unit}`, W * 0.93, H * 0.54);
  } });
  c.show = v => { const s = v.toFixed(digits); if (s !== last) { last = s; val = v; c.userData.redraw(); } };
  return c;
}

// Seesaw: a fulcrum + beam with a pan at each end. g.setTilt(rad) (positive = left side down).
export function seesaw({ span = 3.6 } = {}) {
  const g = new THREE.Group();
  const tri = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.0, 4), clay('#3a322c')); tri.rotation.y = Math.PI / 4; tri.position.y = 0.5; tri.castShadow = true; g.add(tri);
  const beam = new THREE.Group(); beam.position.y = 1.05; g.add(beam);
  const bar = rbox(span, 0.12, 0.32, 0.05, clay(C.orange)); beam.add(bar);
  const pans = [-1, 1].map(s => { const p = new THREE.Group(); p.position.x = s * (span / 2 - 0.35); beam.add(p); const plate = cyl(0.55, 0.45, 0.1, clay('#ebe5dc')); plate.position.y = 0.11; p.add(plate); return p; });
  g.beam = beam; g.pans = pans;
  g.setTilt = a => { beam.rotation.z = a; pans.forEach(p => (p.rotation.z = -a)); };
  return g;
}

// A drop of water (blue teardrop) — for "the water side".
export function waterDrop({ s = 0.5 } = {}) {
  const g = new THREE.Group();
  const m = clay('#6fb0d8', { rough: 0.2 });
  const b = sphere(s * 0.6, m); b.position.y = s * 0.6; g.add(b);
  const tip = new THREE.Mesh(new THREE.ConeGeometry(s * 0.52, s * 0.85, 32), m); tip.position.y = s * 1.38; tip.castShadow = true; g.add(tip);
  return g;
}

// Simple bar for a bar chart (grows with setValue 0..1). Bottom stays at y = 0.
export function bar({ w = 0.8, h = 2.6, color = C.orange } = {}) {
  const g = new THREE.Group();
  const b = rbox(w, 1, w * 0.8, 0.08, clay(color)); g.add(b);
  g.setValue = v => { const k = Math.max(0.001, v); b.scale.y = h * k; b.position.y = (h * k) / 2; };
  g.setValue(0);
  return g;
}

// Translucent ice cube. g.setMelt(0..1) shrinks it and grows a puddle; g.setWet(0..1) shows droplets.
export function iceCube({ s = 0.55 } = {}) {
  const g = new THREE.Group();
  const mat = new THREE.MeshStandardMaterial({ color: '#a9def5', roughness: 0.1, metalness: 0, transparent: true, opacity: 0.85, emissive: new THREE.Color('#7fcdf0'), emissiveIntensity: 0.25 });
  const cube = rbox(s, s, s, s * 0.18, mat); cube.position.y = s / 2; g.add(cube);
  const puddle = cyl(s * 0.9, s * 0.9, 0.02, new THREE.MeshStandardMaterial({ color: '#8cc8e6', roughness: 0.1, transparent: true, opacity: 0.6 })); puddle.position.y = 0.01; g.add(puddle);
  const drops = [0, 1, 2, 3].map(i => { const d = sphere(0.08, clay('#5fb3e6', { rough: 0.1 })); d.position.set((i % 2 ? 1 : -1) * s * 0.52, s * (0.3 + i * 0.15), s * 0.3); g.add(d); return d; });
  g.setMelt = k => { const r = Math.max(0.001, 1 - k * 0.85); cube.scale.set(r, r, r); cube.position.y = (s * r) / 2; puddle.scale.set(0.3 + k * 1.2, 1, 0.3 + k * 1.2); puddle.visible = k > 0.02; };
  g.setWet = k => drops.forEach(d => { d.visible = k > 0.05; d.scale.setScalar(Math.max(0.001, k)); });
  g.setMelt(0); g.setWet(0);
  return g;
}

// NTC thermistor: small epoxy bead on two leads. g.setHot(0..1) glows the bead.
export function thermistorBead({ s = 0.32, lead = 1.4 } = {}) {
  const g = new THREE.Group();
  const mat = clay('#3a2a22', { rough: 0.35 });
  const bead = sphere(s, mat); bead.scale.set(1, 1.15, 0.8); bead.position.y = lead + s * 0.9; g.add(bead);
  [-1, 1].forEach(k => { const l = cyl(0.02, 0.02, lead + 0.2, clay('#c9ced4', { rough: 0.3, metal: 0.6 })); l.position.set(k * s * 0.35, (lead + 0.2) / 2, 0); g.add(l); });
  const halo = glowSprite('#ff7a3a', s * 6, 0); halo.position.y = bead.position.y; g.add(halo);
  const base = new THREE.Color('#3a2a22'), hot = new THREE.Color('#b8562c');
  g.setHot = k => { mat.color.copy(base).lerp(hot, k); halo.material.opacity = 0.55 * k; };
  g.beadY = bead.position.y;
  g.setHot(0);
  return g;
}

// Digital multimeter body with a live screen. g.show(text) redraws when the text changes.
export function multimeter({ w = 1.45, h = 1.9 } = {}) {
  const g = new THREE.Group();
  const body = rbox(w, h, 0.35, 0.14, clay('#f0b23a')); body.position.y = h / 2; g.add(body);
  const inner = rbox(w * 0.84, h * 0.86, 0.1, 0.08, clay('#2b2521')); inner.position.set(0, h / 2, 0.15); g.add(inner);
  let txt = '', last = null;
  const scr = card({ w: w * 0.7, h: h * 0.28, d: 0.04, r: 0.04, color: '#b9c9a8', px: 300, draw: (ctx, W, H) => {
    ctx.fillStyle = '#1f2a1c'; ctx.font = `700 ${H * 0.4}px ${FONT.mono}`; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(txt, W * 0.93, H * 0.55);
  } });
  scr.position.set(0, h * 0.74, 0.22); g.add(scr);
  const knob = cyl(0.26, 0.28, 0.12, clay('#ebe5dc')); knob.rotation.x = Math.PI / 2; knob.position.set(0, h * 0.36, 0.24); g.add(knob);
  const ptr = rbox(0.05, 0.22, 0.04, 0.02, clay(C.orange)); ptr.position.set(0.06, h * 0.42, 0.31); ptr.rotation.z = -0.5; g.add(ptr);
  [-0.3, 0.3].forEach(x => { const j = cyl(0.07, 0.07, 0.08, clay(x < 0 ? '#2a2420' : '#e5484d')); j.rotation.x = Math.PI / 2; j.position.set(x, h * 0.12, 0.22); g.add(j); });
  g.show = s => { if (s !== last) { last = s; txt = s; scr.userData.redraw(); } };
  g.screenTop = h;
  return g;
}

// Graph drawing on a canvas card. pts = [[x, y], …] in data units; box = {x0,x1,y0,y1};
// n = how many points to show (can be fractional for the line); opts: line (straight best-fit), curve.
export function drawPlot(ctx, W, H, { pts, box, n = pts.length, xLabel, yLabel, title, xTicks = [], yTicks = [], fit = false, curve = false, slope = 0 }) {
  const L = W * 0.17, R = W * 0.95, T = H * 0.17, Bt = H * 0.8;
  const X = x => L + (x - box.x0) / (box.x1 - box.x0) * (R - L);
  const Y = y => Bt - (y - box.y0) / (box.y1 - box.y0) * (Bt - T);
  ctx.fillStyle = '#5d554e'; ctx.font = `600 ${H * 0.065}px ${FONT.mono}`; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
  if (title) ctx.fillText(title, W * 0.05, H * 0.1);
  ctx.strokeStyle = '#e4ddd5'; ctx.lineWidth = 2;
  yTicks.forEach(v => { ctx.beginPath(); ctx.moveTo(L, Y(v)); ctx.lineTo(R, Y(v)); ctx.stroke(); });
  ctx.strokeStyle = '#2b241f'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(L, T - H * 0.03); ctx.lineTo(L, Bt); ctx.lineTo(R + W * 0.01, Bt); ctx.stroke();
  ctx.fillStyle = '#3a322c'; ctx.font = `600 ${H * 0.056}px ${FONT.mono}`;
  ctx.textAlign = 'center'; xTicks.forEach(([v, s]) => ctx.fillText(s, X(v), Bt + H * 0.065));
  ctx.textAlign = 'right'; yTicks.forEach(v => ctx.fillText(String(v), L - W * 0.02, Y(v) + H * 0.015));
  if (xLabel) mathText(ctx, xLabel, (L + R) / 2, H * 0.965, H * 0.07, { family: FONT.serif, weight: 400, italic: true, color: '#2b241f', align: 'center' });
  if (yLabel) { ctx.save(); ctx.translate(W * 0.05, (T + Bt) / 2); ctx.rotate(-Math.PI / 2); mathText(ctx, yLabel, 0, 0, H * 0.075, { family: FONT.serif, weight: 400, italic: true, color: '#2b241f', align: 'center' }); ctx.restore(); }
  const k = Math.min(n, pts.length);
  if (curve && k > 1) {
    const x0 = pts[0][0], x1 = x0 + (pts.at(-1)[0] - x0) * Math.min(1, (k - 1) / (pts.length - 1));
    ctx.strokeStyle = '#f07a3a'; ctx.lineWidth = 6; ctx.beginPath();
    for (let i = 0; i <= 60; i++) { const x = x0 + (x1 - x0) * (i / 60); i ? ctx.lineTo(X(x), Y(curve(x))) : ctx.moveTo(X(x), Y(curve(x))); }
    ctx.stroke();
  }
  if (fit && k >= pts.length) {
    const [a, b] = [pts[0], pts.at(-1)]; const e = fit;
    ctx.strokeStyle = '#f07a3a'; ctx.lineWidth = 6; ctx.beginPath();
    ctx.moveTo(X(a[0]), Y(a[1])); ctx.lineTo(X(a[0] + (b[0] - a[0]) * e), Y(a[1] + (b[1] - a[1]) * e)); ctx.stroke();
  }
  if (slope) {
    const [a, b] = [pts[0], pts.at(-1)];
    ctx.setLineDash([12, 10]); ctx.strokeStyle = '#3f8fc0'; ctx.lineWidth = 4; ctx.beginPath();
    ctx.moveTo(X(a[0]), Y(a[1])); ctx.lineTo(X(b[0]), Y(a[1])); ctx.lineTo(X(b[0]), Y(b[1])); ctx.stroke(); ctx.setLineDash([]);
    ctx.fillStyle = '#3f8fc0'; ctx.font = `700 ${H * 0.05}px ${FONT.mono}`; ctx.textAlign = 'center';
    ctx.fillText('Δ(1/T)', (X(a[0]) + X(b[0])) / 2, Y(a[1]) + H * 0.06);
    ctx.textAlign = 'left'; ctx.fillText('Δ ln R', X(b[0]) + W * 0.015 - W * 0.17, (Y(a[1]) + Y(b[1])) / 2);
  }
  for (let i = 0; i < Math.floor(k); i++) { const [x, y] = pts[i]; ctx.fillStyle = '#2b241f'; ctx.beginPath(); ctx.arc(X(x), Y(y), H * 0.02, 0, Math.PI * 2); ctx.fill(); }
}

// Copper coil on a bobbin (resistance probe) with two leads going up. Origin at the bobbin bottom.
export function coilProbe({ h = 0.9, r = 0.32, lead = 1.3 } = {}) {
  const g = new THREE.Group();
  const core = cyl(r * 0.8, r * 0.8, h, clay('#3a322c')); core.position.y = h / 2; g.add(core);
  [0.04, h - 0.04].forEach(y => { const f = cyl(r * 1.25, r * 1.25, 0.06, clay('#3a322c')); f.position.y = y; g.add(f); });
  const cu = clay('#c8733f', { rough: 0.3, metal: 0.55 });
  for (let i = 0; i < 8; i++) { const t = torus(r * 0.92, 0.045, cu); t.rotation.x = Math.PI / 2; t.position.y = 0.12 + i * ((h - 0.24) / 7); g.add(t); }
  [-1, 1].forEach(k => { const l = cyl(0.025, 0.025, lead, clay('#c8733f', { rough: 0.3, metal: 0.55 })); l.position.set(k * 0.12, h + lead / 2, 0); g.add(l); });
  const halo = glowSprite('#ff7a3a', 2.2, 0); halo.position.y = h / 2; g.add(halo);
  g.setHot = k => (halo.material.opacity = 0.45 * k);
  g.top = h + lead;
  return g;
}

// Small glass-bodied germanium diode (OA79 style) on two leads; dark band marks the cathode.
export function glassDiode({ len = 0.7, r = 0.13, lead = 1.2 } = {}) {
  const g = new THREE.Group();
  const body = cyl(r, r, len, new THREE.MeshStandardMaterial({ color: '#e8d9b0', roughness: 0.15, transparent: true, opacity: 0.7 }));
  body.position.y = lead + len / 2; g.add(body);
  const chipM = rbox(r * 0.9, len * 0.35, r * 0.5, 0.02, clay('#5a5a62', { metal: 0.5, rough: 0.3 })); chipM.position.y = lead + len / 2; g.add(chipM);
  const band = cyl(r * 1.04, r * 1.04, len * 0.14, clay('#2a2420')); band.position.y = lead + len * 0.86; g.add(band);
  [0, 1].forEach(i => { const l = cyl(0.02, 0.02, lead, clay('#c9ced4', { rough: 0.3, metal: 0.6 })); l.position.y = i ? lead + len + lead / 2 : lead / 2; g.add(l); });
  const halo = glowSprite('#ff7a3a', 1.6, 0); halo.position.y = lead + len / 2; g.add(halo);
  g.setHot = k => (halo.material.opacity = 0.45 * k);
  g.height = lead * 2 + len;
  return g;
}

// Boiling test tube with wax inside. Origin at the tube bottom.
// g.setFill(0..1) wax height · g.setMelt(0..1) solid → liquid (two-phase in between).
export function waxTube({ r = 0.24, h = 1.7 } = {}) {
  const g = new THREE.Group();
  const gl = new THREE.MeshStandardMaterial({ color: '#e8f2f6', roughness: 0.1, transparent: true, opacity: 0.35, depthWrite: false, side: THREE.DoubleSide });
  const wall = new THREE.Mesh(new THREE.CylinderGeometry(r, r, h, 40, 1, true), gl); wall.position.y = r + h / 2; wall.renderOrder = 3; g.add(wall);
  const bottom = new THREE.Mesh(new THREE.SphereGeometry(r, 32, 16, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), gl); bottom.position.y = r; g.add(bottom);
  const lip = new THREE.Mesh(new THREE.TorusGeometry(r, 0.025, 10, 40), gl); lip.rotation.x = Math.PI / 2; lip.position.y = r + h; g.add(lip);
  const solidM = clay('#e6cf8a', { rough: 0.9 });
  const liquidM = new THREE.MeshStandardMaterial({ color: '#f0a83a', roughness: 0.15, transparent: true, opacity: 0.85, depthWrite: false });
  const maxH = h * 0.5, ri = r * 0.9;
  const solid = cyl(ri, ri, 1, solidM); g.add(solid);
  const sb = sphere(ri, solidM); sb.scale.y = 0.9; sb.position.y = r; g.add(sb);
  const liquid = cyl(ri * 0.99, ri * 0.99, 1, liquidM); liquid.renderOrder = 2; g.add(liquid);
  const lb = sphere(ri * 0.99, liquidM); lb.position.y = r; g.add(lb);
  let fill = 0, melt = 0;
  const apply = () => {
    const H = Math.max(0.001, fill * maxH);
    const sR = Math.max(0.001, 1 - melt);              // solid core shrinks inward while melting
    solid.scale.set(sR, H * (1 - melt * 0.6), sR); solid.position.y = r + (H * (1 - melt * 0.6)) / 2;
    sb.scale.set(sR, 0.9 * sR, sR); sb.visible = fill > 0.02 && melt < 0.98; solid.visible = fill > 0.02 && melt < 0.98;
    liquid.scale.set(1, H, 1); liquid.position.y = r + H / 2; liquid.visible = melt > 0.02; lb.visible = melt > 0.02;
  };
  g.setFill = k => { fill = k; apply(); };
  g.setMelt = k => { melt = k; apply(); };
  g.waxTop = () => r + fill * maxH;
  g.setFill(0);
  return g;
}

// Spherical calorimeter with a short neck. Origin at the sphere centre. g.setBlack(0..1), g.setHot(0..1)
export function sphereCal({ r = 0.6 } = {}) {
  const g = new THREE.Group();
  const m = clay('#c8733f', { rough: 0.25, metal: 0.6 });
  g.add(sphere(r, m));
  const neck = cyl(r * 0.28, r * 0.32, r * 0.45, m); neck.position.y = r * 1.05; g.add(neck);
  const rim = torus(r * 0.29, 0.03, m); rim.rotation.x = Math.PI / 2; rim.position.y = r * 1.27; g.add(rim);
  const halo = glowSprite('#ff7a3a', r * 4, 0); g.add(halo);
  const steam = [0, 1, 2].map(i => { const s = glowSprite('#ffffff', 0.45, 0); s.position.set((i - 1) * 0.12, r * 1.5, 0); g.add(s); return s; });
  const cu = new THREE.Color('#c8733f'), bl = new THREE.Color('#1d1a19');
  g.setBlack = k => { m.color.copy(cu).lerp(bl, k); m.metalness = 0.6 * (1 - k); m.roughness = 0.25 + 0.6 * k; };
  g.setHot = (k, lt = 0) => { halo.material.opacity = 0.35 * k; steam.forEach((s, i) => { const u = (lt * 0.5 + i / 3) % 1; s.position.y = r * 1.4 + u * 0.8; s.material.opacity = 0.4 * k * Math.sin(u * Math.PI); }); };
  g.top = r * 1.3;
  return g;
}

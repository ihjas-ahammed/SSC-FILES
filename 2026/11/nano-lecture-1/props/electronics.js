// Electronics props: battery, bulb, wire with flowing electrons, transistor, chip, fan, heater, dial, bit tiles.
import * as THREE from 'three';
import { rbox, cyl, sphere, torus, clay, glow, decal, card, glowSprite, C, FONT } from '../engine/geo.js';

export function battery() {
  const g = new THREE.Group();
  const body = cyl(0.55, 0.55, 1.7, clay('#2a2420', { rough: 0.4 })); body.position.y = 0.85; g.add(body);
  const band = cyl(0.56, 0.56, 0.6, clay(C.orange, { rough: 0.45 })); band.position.y = 1.4; g.add(band);
  const tip = cyl(0.2, 0.2, 0.16, clay('#c9c2b8', { metal: 0.7, rough: 0.3 })); tip.position.y = 1.78; g.add(tip);
  const lab = decal(0.7, 0.5, (ctx, W, H) => { ctx.fillStyle = '#f2ece4'; ctx.font = `700 ${H * 0.55}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('+ 9V', W / 2, H / 2); }, { px: 200 });
  lab.position.set(0, 0.75, 0.56); g.add(lab);
  return g;
}

export function bulb() {
  const g = new THREE.Group();
  const base = cyl(0.26, 0.22, 0.42, clay('#bfb7ad', { metal: 0.6, rough: 0.35 })); base.position.y = 0.21; g.add(base);
  for (let i = 0; i < 3; i++) { const r = torus(0.255, 0.03, clay('#a9a197', { metal: 0.6, rough: 0.3 })); r.rotation.x = Math.PI / 2; r.position.y = 0.1 + i * 0.12; g.add(r); }
  const glass = new THREE.Mesh(new THREE.SphereGeometry(0.62, 48, 32), new THREE.MeshPhysicalMaterial({ color: '#fff7ee', roughness: 0.05, transmission: 0.6, transparent: true, opacity: 0.55, thickness: 0.3 }));
  glass.position.y = 0.95; g.add(glass);
  const fil = sphere(0.14, glow('#ffb46a', 0)); fil.position.y = 0.95; g.add(fil);
  const halo = glowSprite('#ffb46a', 3.4, 0); halo.position.y = 0.95; g.add(halo);
  const light = new THREE.PointLight('#ffb46a', 0, 6, 1.6); light.position.y = 0.95; g.add(light);
  g.setOn = (k) => {
    fil.material.emissiveIntensity = 10 * k; halo.material.opacity = 0.85 * k; light.intensity = 6 * k;
    glass.material.emissive = new THREE.Color('#ffcf98'); glass.material.emissiveIntensity = 0.9 * k;
  };
  g.setOn(0);
  return g;
}

// A wire following points, with glowing electrons travelling along it. setFlow(t, speed, amount)
export function wire(points, { radius = 0.06, color = '#2a2420', electrons = 14, eColor = '#7fd3ff' } = {}) {
  const g = new THREE.Group();
  const curve = new THREE.CatmullRomCurve3(points.map(p => new THREE.Vector3(...p)), false, 'catmullrom', 0.1);
  const tube = new THREE.Mesh(new THREE.TubeGeometry(curve, 200, radius, 12, false), clay(color, { rough: 0.45 }));
  tube.castShadow = true; g.add(tube);
  const es = [];
  for (let i = 0; i < electrons; i++) {
    const e = new THREE.Group();
    e.add(sphere(radius * 1.25, glow(eColor, 3.5), 12));
    const h = glowSprite(eColor, radius * 9, 0.8); e.add(h);
    g.add(e); es.push(e);
  }
  g.curve = curve;
  g.setFlow = (t, speed = 0.12, amount = 1) => {
    es.forEach((e, i) => {
      const u = (((i / es.length) + t * speed) % 1 + 1) % 1;
      e.position.copy(curve.getPointAt(u));
      e.visible = amount > 0.02 && i / es.length < amount + 0.001;
    });
  };
  g.setFlow(0, 0, 0);
  return g;
}

// TO-92 style transistor: rounded black body, flat face with label, three legs (C B E).
export function transistor({ labels = true } = {}) {
  const g = new THREE.Group();
  const shape = new THREE.Shape();
  shape.moveTo(-0.62, 0); shape.lineTo(0.62, 0); shape.absarc(0, 0, 0.62, 0, Math.PI, true);
  const geo = new THREE.ExtrudeGeometry(shape, { depth: 1.15, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.06, bevelSegments: 4, curveSegments: 40 });
  geo.rotateX(Math.PI / 2); geo.translate(0, 1.15 + 1.6, 0);
  const body = new THREE.Mesh(geo, clay('#1f1a17', { rough: 0.35 })); body.castShadow = true;
  body.rotation.y = Math.PI; g.add(body);
  const face = decal(1.1, 1.0, (ctx, W, H) => {
    ctx.fillStyle = '#d8d0c6'; ctx.font = `700 ${H * 0.22}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText('NPN', W / 2, H * 0.35); ctx.font = `500 ${H * 0.13}px ${FONT.mono}`; ctx.fillStyle = '#9a9086'; ctx.fillText('2N2222', W / 2, H * 0.62);
  }, { px: 220 });
  face.position.set(0, 2.18, 0.07); g.add(face);
  const legMat = clay('#cfc8bf', { metal: 0.75, rough: 0.28 });
  g.legs = [-0.4, 0, 0.4].map(x => { const l = cyl(0.045, 0.045, 1.7, legMat, 12); l.position.set(x, 0.85, -0.2); g.add(l); return l; });
  if (labels) {
    g.tags = ['C', 'B', 'E'].map((n, i) => {
      const d = decal(0.4, 0.4, (ctx, W, H) => { ctx.fillStyle = '#f07a3a'; ctx.beginPath(); ctx.arc(W / 2, H / 2, W * 0.45, 0, 7); ctx.fill(); ctx.fillStyle = '#2a1408'; ctx.font = `700 ${H * 0.5}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(n, W / 2, H / 2 + 2); }, { px: 200 });
      d.position.set((i - 1) * 0.55, -0.15, 0.1); g.add(d); return d;
    });
  }
  return g;
}

export function chip({ n = 8 } = {}) {
  const g = new THREE.Group();
  const body = rbox(3, 0.35, 3, 0.08, clay('#1e1a17', { rough: 0.4 })); body.position.y = 0.32; g.add(body);
  const pinM = clay('#d6a95a', { metal: 0.8, rough: 0.3 });
  for (let i = 0; i < 10; i++) for (const s of [-1, 1]) {
    const a = rbox(0.12, 0.06, 0.4, 0.02, pinM, 1); a.position.set(-1.25 + i * 0.278, 0.2, s * 1.65); g.add(a);
    const b = rbox(0.4, 0.06, 0.12, 0.02, pinM, 1); b.position.set(s * 1.65, 0.2, -1.25 + i * 0.278); g.add(b);
  }
  const top = decal(2.6, 2.6, (ctx, W, H) => {
    ctx.strokeStyle = 'rgba(240,122,58,0.85)'; ctx.lineWidth = 2;
    const c = W / 40;
    for (let i = 0; i < 40; i++) for (let j = 0; j < 40; j++) { ctx.fillStyle = (i * 7 + j * 13) % 5 === 0 ? '#f07a3a' : '#3a322d'; ctx.fillRect(i * c + 2, j * c + 2, c - 4, c - 4); }
  }, { px: 260, emissive: 0.6 });
  top.rotation.x = -Math.PI / 2; top.position.y = 0.505; g.add(top);
  g.top = top;
  return g;
}

export function fan() {
  const g = new THREE.Group();
  const base = cyl(0.5, 0.6, 0.15, clay('#ebe5dc')); base.position.y = 0.075; g.add(base);
  const pole = cyl(0.07, 0.07, 1.3, clay('#ebe5dc')); pole.position.y = 0.75; g.add(pole);
  const head = new THREE.Group(); head.position.set(0, 1.5, 0.1); g.add(head);
  const ring = torus(0.62, 0.04, clay('#ebe5dc')); head.add(ring);
  const hub = sphere(0.14, clay(C.orange)); head.add(hub);
  const blades = new THREE.Group(); head.add(blades);
  for (let i = 0; i < 3; i++) { const b = rbox(0.22, 0.55, 0.04, 0.1, clay('#f2a477')); b.position.y = 0.3; const p = new THREE.Group(); p.rotation.z = (i / 3) * Math.PI * 2; p.add(b); blades.add(p); }
  g.spin = (a) => { blades.rotation.z = a; };
  return g;
}

export function heater() {
  const g = new THREE.Group();
  const frame = rbox(1.4, 1.6, 0.5, 0.12, clay('#ebe5dc')); frame.position.y = 0.8; g.add(frame);
  const coils = [];
  for (let i = 0; i < 4; i++) { const c = cyl(0.05, 0.05, 1.0, glow('#ff6a3a', 0), 12); c.rotation.z = Math.PI / 2; c.position.set(0, 0.4 + i * 0.27, 0.27); g.add(c); coils.push(c); }
  g.setOn = k => coils.forEach(c => (c.material.emissiveIntensity = 6 * k));
  return g;
}

export function dial() {
  const g = new THREE.Group();
  const base = cyl(0.75, 0.8, 0.14, clay('#2a2420', { rough: 0.4 })); g.add(base);
  const marks = decal(1.5, 1.5, (ctx, W, H) => {
    ctx.strokeStyle = '#f07a3a'; ctx.lineWidth = 6; ctx.lineCap = 'round';
    for (let i = 0; i <= 10; i++) { const a = Math.PI * 0.75 + (i / 10) * Math.PI * 1.5; ctx.beginPath(); ctx.moveTo(W / 2 + Math.cos(a) * W * 0.4, H / 2 + Math.sin(a) * H * 0.4); ctx.lineTo(W / 2 + Math.cos(a) * W * 0.46, H / 2 + Math.sin(a) * H * 0.46); ctx.stroke(); }
  }, { px: 200 });
  marks.rotation.x = -Math.PI / 2; marks.position.y = 0.075; g.add(marks);
  const knob = new THREE.Group(); knob.position.y = 0.07; g.add(knob);
  const k = cyl(0.45, 0.5, 0.35, clay('#ebe5dc')); k.position.y = 0.17; knob.add(k);
  const ptr = rbox(0.08, 0.06, 0.38, 0.02, clay(C.orange)); ptr.position.set(0, 0.36, -0.2); knob.add(ptr);
  g.set = (v) => { knob.rotation.y = Math.PI * 0.75 - v * Math.PI * 1.5; };
  g.set(0);
  return g;
}

export function bitTile(on = 1) {
  const draw = (v) => (ctx, W, H) => {
    ctx.fillStyle = v ? '#f07a3a' : '#2a2420'; ctx.beginPath(); ctx.roundRect(0, 0, W, H, 24); ctx.fill();
    ctx.fillStyle = v ? '#2a1408' : '#8f857a'; ctx.font = `700 ${H * 0.62}px ${FONT.mono}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(v ? '1' : '0', W / 2, H / 2 + 6);
  };
  const c = card({ w: 0.8, h: 0.8, d: 0.25, r: 0.14, color: '#2a2420', px: 220, emissive: 0.4, draw: draw(on) });
  let cur = on;
  c.setBit = (v) => { if (v === cur) return; cur = v; const im = c.userData.face.material.map.image; const ctx = im.getContext('2d'); ctx.clearRect(0, 0, im.width, im.height); draw(v)(ctx, im.width, im.height); c.userData.face.material.map.needsUpdate = true; };
  return c;
}

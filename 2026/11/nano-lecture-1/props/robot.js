// The mascot. robot({...}) -> Group with .set(t, opts) for expressions & pose.
//   moods: neutral | happy (^ ^) | smile | worried | surprised | sad | sleepy | wink | closed | squint | think
//   extras: glasses, blindfold, nightcap, talk (mouth flaps), look:[x,y] eye offset
import * as THREE from 'three';
import { rbox, sphere, cyl, clay, glow, canvasTex, glowSprite, torus, C } from '../engine/geo.js';
import { blink as blinkAt, wobble } from '../engine/anim.js';

const HEAD = { w: 1.62, h: 1.22, d: 1.3 };

function drawFace(ctx, W, H, f) {
  ctx.clearRect(0, 0, W, H);
  const cx = W / 2, ey = H * 0.47 + (f.look?.[1] || 0) * -H * 0.05, ex = W * 0.2, lx = (f.look?.[0] || 0) * W * 0.04;
  const ink = '#15100d';
  // blush
  ctx.fillStyle = 'rgba(240,140,130,0.55)';
  for (const s of [-1, 1]) { ctx.beginPath(); ctx.ellipse(cx + s * W * 0.3, H * 0.66, W * 0.065, H * 0.04, 0, 0, 7); ctx.fill(); }
  ctx.lineCap = 'round'; ctx.lineJoin = 'round';
  const eye = (s) => {
    const x = cx + s * ex + lx, mood = f.mood;
    const closed = f.blink || mood === 'closed' || mood === 'sleepy' || (mood === 'wink' && s === 1);
    ctx.strokeStyle = ink; ctx.fillStyle = ink; ctx.lineWidth = W * 0.022;
    if (mood === 'happy') { ctx.beginPath(); ctx.arc(x, ey + H * 0.05, W * 0.055, Math.PI * 1.15, Math.PI * 1.85); ctx.stroke(); return; }
    if (closed) { ctx.beginPath(); ctx.moveTo(x - W * 0.05, ey + H * 0.02); ctx.lineTo(x + W * 0.05, ey + H * 0.02); ctx.stroke(); return; }
    if (mood === 'squint') { ctx.beginPath(); ctx.moveTo(x - W * 0.05, ey); ctx.quadraticCurveTo(x, ey + H * 0.05, x + W * 0.05, ey); ctx.stroke(); return; }
    const rx = W * (mood === 'surprised' ? 0.05 : 0.044), ry = H * (mood === 'surprised' ? 0.105 : 0.095);
    ctx.beginPath(); ctx.ellipse(x, ey, rx, ry, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.ellipse(x + rx * 0.3, ey - ry * 0.4, rx * 0.36, ry * 0.26, 0, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.arc(x - rx * 0.35, ey + ry * 0.4, rx * 0.14, 0, 7); ctx.fill();
  };
  eye(-1); eye(1);
  // brows
  ctx.strokeStyle = ink; ctx.lineWidth = W * 0.016;
  // [inner-end lift, overall raise]
  const bro = { worried: [0.045, 0], sad: [0.04, 0], think: [-0.03, 0], surprised: [0, 0.035], neutral: [0, 0], sleepy: [0, -0.01], smile: [0, 0] }[f.mood];
  if (bro) {
    for (const s of [-1, 1]) {
      const bx = cx + s * ex + lx, by = ey - H * (0.2 + bro[1]);
      ctx.beginPath();
      ctx.moveTo(bx + s * W * 0.045, by + H * bro[0] * 0.4);
      ctx.lineTo(bx - s * W * 0.045, by - H * bro[0]);
      ctx.stroke();
    }
  }
  // mouth
  const my = H * 0.68, mood = f.mood;
  ctx.lineWidth = W * 0.017; ctx.strokeStyle = ink; ctx.fillStyle = ink;
  const open = f.talk ?? 0;
  if (open > 0.15 || mood === 'surprised') {
    const o = mood === 'surprised' ? 1 : open;
    ctx.beginPath(); ctx.ellipse(cx, my, W * 0.03, H * 0.02 + H * 0.035 * o, 0, 0, 7); ctx.fill();
    ctx.fillStyle = '#e0605a'; ctx.beginPath(); ctx.ellipse(cx, my + H * 0.02 * o, W * 0.018, H * 0.012 * o, 0, 0, 7); ctx.fill();
  } else if (mood === 'worried' || mood === 'sad') {
    ctx.beginPath(); ctx.arc(cx, my + H * 0.05, W * 0.04, Math.PI * 1.2, Math.PI * 1.8); ctx.stroke();
  } else if (mood === 'smile' || mood === 'happy' || mood === 'wink') {
    ctx.beginPath(); ctx.arc(cx, my - H * 0.03, W * 0.05, Math.PI * 0.15, Math.PI * 0.85); ctx.stroke();
  } else if (mood === 'think' || mood === 'sleepy') {
    ctx.beginPath(); ctx.moveTo(cx - W * 0.025, my); ctx.lineTo(cx + W * 0.025, my); ctx.stroke();
  } else {
    ctx.beginPath(); ctx.arc(cx, my - H * 0.02, W * 0.03, Math.PI * 0.2, Math.PI * 0.8); ctx.stroke();
  }
}

export function robot({ scale = 1, body = true } = {}) {
  const g = new THREE.Group();
  const white = clay('#e6ddd0', { rough: 0.62 });
  const head = new THREE.Group();
  head.position.y = 1.35;
  g.add(head);
  head.add(rbox(HEAD.w, HEAD.h, HEAD.d, 0.42, white, 6));
  for (const s of [-1, 1]) {
    const ear = cyl(0.26, 0.26, 0.14, clay('#ddd5ca'));
    ear.rotation.z = Math.PI / 2; ear.position.set(s * (HEAD.w / 2 + 0.03), 0.02, 0);
    head.add(ear);
  }
  // antenna
  const stick = cyl(0.025, 0.025, 0.42, clay('#3a2f28'));
  stick.position.y = HEAD.h / 2 + 0.21; head.add(stick);
  const collar = cyl(0.11, 0.13, 0.06, clay('#3a2f28')); collar.position.y = HEAD.h / 2 + 0.02; head.add(collar);
  const bulb = sphere(0.12, glow('#ffb47e', 3.2)); bulb.position.y = HEAD.h / 2 + 0.47; head.add(bulb);
  const halo = glowSprite('#ff9a55', 1.1, 0.55); halo.position.copy(bulb.position); head.add(halo);

  // face
  const face = canvasTex(512, 384, () => {});
  const faceMesh = new THREE.Mesh(new THREE.PlaneGeometry(HEAD.w * 0.9, HEAD.h * 0.86), new THREE.MeshStandardMaterial({ map: face.tex, transparent: true, roughness: 0.5 }));
  faceMesh.position.z = HEAD.d / 2 + 0.004; faceMesh.renderOrder = 3;
  head.add(faceMesh);

  // accessories
  const glasses = new THREE.Group();
  for (const s of [-1, 1]) { const r = torus(0.2, 0.035, clay('#2a221d', { rough: 0.4 })); r.position.set(s * 0.33, -0.02, 0); glasses.add(r); }
  const bridge = cyl(0.02, 0.02, 0.24, clay('#2a221d')); bridge.rotation.z = Math.PI / 2; bridge.position.y = 0.04; glasses.add(bridge);
  glasses.position.set(0, 0.0, HEAD.d / 2 + 0.07); glasses.visible = false; head.add(glasses);
  const lens = new THREE.Mesh(new THREE.CircleGeometry(0.19, 32), new THREE.MeshStandardMaterial({ color: '#fff', transparent: true, opacity: 0.12, roughness: 0.1 }));
  for (const s of [-1, 1]) { const l = lens.clone(); l.position.set(s * 0.33, -0.02, 0); glasses.add(l); }

  const blindfold = rbox(HEAD.w + 0.08, 0.36, HEAD.d + 0.08, 0.14, clay('#1b1714', { rough: 0.5 }));
  blindfold.position.y = 0.02; blindfold.visible = false; head.add(blindfold);

  const cap = new THREE.Group();
  const cone = new THREE.Mesh(new THREE.ConeGeometry(0.55, 1.0, 40), clay(C.orange)); cone.castShadow = true;
  cone.position.y = 0.5; cone.rotation.z = -0.5; cap.add(cone);
  const pom = sphere(0.14, clay('#f6efe6')); pom.position.set(0.48, 0.92, 0); cap.add(pom);
  const brim = torus(0.55, 0.11, clay('#f6efe6')); brim.rotation.x = Math.PI / 2; cap.add(brim);
  cap.position.set(-0.15, HEAD.h / 2 - 0.05, 0); cap.rotation.z = 0.35; cap.visible = false; head.add(cap);

  // body
  const torso = new THREE.Group();
  if (body) {
    const b = rbox(0.95, 0.78, 0.75, 0.22, white, 5); b.position.y = 0.5; torso.add(b);
    const screen = rbox(0.52, 0.34, 0.06, 0.06, clay('#241b16', { rough: 0.35 })); screen.position.set(0, 0.52, 0.37); torso.add(screen);
    const bars = canvasTex(128, 80, (ctx) => {
      ctx.fillStyle = '#ff8a3d';
      [[18, 36, 20], [54, 18, 38], [90, 30, 26]].forEach(([x, y, h]) => { ctx.beginPath(); ctx.roundRect(x, y, 20, h + 20, 4); ctx.fill(); });
    });
    const barMat = new THREE.MeshStandardMaterial({ map: bars.tex, emissive: '#ffffff', emissiveMap: bars.tex, emissiveIntensity: 1.6, transparent: true });
    const barMesh = new THREE.Mesh(new THREE.PlaneGeometry(0.44, 0.27), barMat); barMesh.position.set(0, 0.52, 0.405); torso.add(barMesh);
    const skirt = rbox(1.08, 0.24, 0.86, 0.1, clay('#3b2b22')); skirt.position.y = 0.06; torso.add(skirt);
    for (let i = 0; i < 5; i++) { const d = sphere(0.055, glow('#ff9a50', 2.2), 16); d.position.set(-0.36 + i * 0.18, 0.03, 0.43); torso.add(d); }
    for (const s of [-1, 1]) { const arm = sphere(0.2, white); arm.position.set(s * 0.64, 0.42, 0.05); arm.name = s < 0 ? 'armL' : 'armR'; torso.add(arm); }
    g.add(torso);
  } else head.position.y = 0.61;

  let lastKey = '';
  g.userData = { head, torso, bulb, halo, glasses, blindfold, cap, face };
  g.set = (t, o = {}) => {
    const mood = o.mood || 'neutral';
    const talk = o.talk ? Math.max(0, Math.sin(t * 17) * 0.5 + Math.sin(t * 9.3) * 0.5) : 0;
    const f = { mood, blink: o.noBlink ? 0 : blinkAt(t, 3.1, o.seed || 0), talk: Math.round(talk * 3) / 3, look: o.look };
    const key = JSON.stringify(f);
    if (key !== lastKey) { lastKey = key; drawFace(face.ctx, 512, 384, f); face.tex.needsUpdate = true; }
    glasses.visible = !!o.glasses; blindfold.visible = !!o.blindfold; cap.visible = !!o.nightcap;
    faceMesh.visible = !o.blindfold;
    // idle: gentle bob + head tilt
    const bob = o.still ? 0 : wobble(t, 0.45, 0.03, o.seed || 0);
    head.position.y = (body ? 1.35 : 0.61) + bob + (o.headY || 0);
    head.rotation.set(o.tiltX || 0, (o.turn || 0) + (o.still ? 0 : wobble(t, 0.3, 0.04, 2)), (o.tilt || 0) + (o.still ? 0 : wobble(t, 0.38, 0.03, 5)));
    const bl = o.bulb ?? 1;
    bulb.material.emissiveIntensity = 7 * bl; halo.material.opacity = 0.55 * bl; halo.scale.setScalar(1.1 * (o.haloScale || 1));
    if (o.wave && torso.getObjectByName('armR')) torso.getObjectByName('armR').position.y = 0.42 + Math.abs(Math.sin(t * 8)) * 0.18 * o.wave;
  };
  g.scale.setScalar(scale);
  g.set(0);
  return g;
}

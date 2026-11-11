// EXAMPLE of a custom prop (the format an external AI should return — see MODELS.md).
// Contract: default-export a function (opts) → THREE.Group. Origin at the base centre, +Y up,
// front faces +Z (the camera), about 2 units tall. Optional g.set(lt) animates it (pure function of lt).
import { THREE, clay, glow, rbox, cyl, sphere, glowSprite, C } from '../../engine/kit.js';

export default function rocket({ color = C.orange } = {}) {
  const g = new THREE.Group();
  const body = cyl(0.42, 0.5, 1.5, clay('#ebe5dc')); body.position.y = 0.95; g.add(body);
  const nose = new THREE.Mesh(new THREE.ConeGeometry(0.42, 0.6, 40), clay(color)); nose.position.y = 2.0; nose.castShadow = true; g.add(nose);
  const window_ = sphere(0.16, clay('#2a2420', { rough: 0.3 })); window_.position.set(0, 1.3, 0.4); g.add(window_);
  for (let i = 0; i < 3; i++) {
    const fin = rbox(0.08, 0.5, 0.45, 0.03, clay(color));
    const a = (i / 3) * Math.PI * 2;
    fin.position.set(Math.sin(a) * 0.48, 0.35, Math.cos(a) * 0.48); fin.rotation.y = a; g.add(fin);
  }
  const flame = sphere(0.22, glow('#ffb46a', 3)); flame.position.y = 0.08; g.add(flame);
  const halo = glowSprite('#ff9a55', 1.2, 0.7); halo.position.y = 0.05; g.add(halo);
  g.set = (lt) => { const f = 0.85 + 0.15 * Math.sin(lt * 30); flame.scale.set(1, 1.4 * f, 1); halo.material.opacity = 0.7 * f; };
  return g;
}

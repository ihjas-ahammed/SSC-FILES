// External 3D models.
// 1) GLB/GLTF files (e.g. from a text-to-3D AI): list them in the video as
//      models: { rocket: 'assets/models/rocket.glb' }
//    then in a scene's build:  const r = fitModel(models.rocket, { height: 2.2 }); group.add(r);
// 2) three.js code props written by an external AI: drop the file in props/custom/<name>.js
//    (contract in MODELS.md) and import it like any other prop.
// Standalone builds inline every model file, so dist/<video>.html still works offline.
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export async function loadModels(models = {}) {
  const out = {};
  const entries = Object.entries(models || {});
  if (!entries.length) return out;
  const loader = new GLTFLoader();
  for (const [key, src] of entries) {
    const url = (typeof window !== 'undefined' && window.__MODELS__?.[key]) || src;
    try { out[key] = (await loader.loadAsync(url)).scene; }
    catch (e) { console.error(`model "${key}" failed to load from ${src}: ${e.message}`); out[key] = placeholder(); }
  }
  return out;
}

// Normalise any model: base centred on the origin, given height in world units, shadows on.
//   clay: '#e6ddd0'  → replace all materials with one matte clay colour (matches the house style)
//   clay: true       → keep each mesh's colour but make it matte clay
export function fitModel(src, { height = 2, clay = true, rough = 0.68 } = {}) {
  const obj = src.clone(true);
  obj.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(obj);
  const size = box.getSize(new THREE.Vector3());
  obj.scale.multiplyScalar(height / (size.y || 1));
  obj.updateMatrixWorld(true);
  box.setFromObject(obj);
  const c = box.getCenter(new THREE.Vector3());
  obj.position.x -= c.x; obj.position.z -= c.z; obj.position.y -= box.min.y;
  obj.traverse(o => {
    if (!o.isMesh) return;
    o.castShadow = o.receiveShadow = true;
    if (clay) {
      const old = Array.isArray(o.material) ? o.material[0] : o.material;
      const color = typeof clay === 'string' ? clay : old?.color ? '#' + old.color.getHexString() : '#e6ddd0';
      o.material = new THREE.MeshStandardMaterial({ color, roughness: rough, map: typeof clay === 'string' ? null : old?.map || null });
    }
  });
  const g = new THREE.Group();
  g.add(obj);
  return g;
}

function placeholder() {
  const m = new THREE.Mesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshStandardMaterial({ color: '#e5484d' }));
  const g = new THREE.Group(); g.add(m); return g;
}

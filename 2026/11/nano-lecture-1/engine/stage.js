// The 3D stage: renderer, soft studio lighting, environments (cream / dark / cork), bloom, dust.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { dotTexture, canvasTex } from './geo.js';
import { lerp, rng } from './anim.js';

// Environment presets. Every scene picks one by name (or blends two with `mix`).
export const ENV = {
  cream: { top: '#e2dbd0', bottom: '#d8d0c4', ground: '#cfc6b8', fog: '#d8d0c4', fogNear: 24, fogFar: 62, key: 1.25, amb: 0.42, dust: 0, hud: 'light' },
  dark: { top: '#050404', bottom: '#120d0a', ground: '#4a3527', fog: '#0b0807', fogNear: 9, fogFar: 30, key: 2.2, amb: 0.35, dust: 1, hud: 'dark' },
  night: { top: '#030303', bottom: '#0b0908', ground: '#2c241f', fog: '#060505', fogNear: 9, fogFar: 26, key: 1.3, amb: 0.3, dust: 1, hud: 'dark' },
  cork: { top: '#0d0a08', bottom: '#2a1d14', ground: '#5d4330', fog: '#2a1d14', fogNear: 14, fogFar: 40, key: 1.9, amb: 0.7, dust: 0, hud: 'dark' },
};

export class Stage {
  constructor(canvas, { width = 720, height = 1280, pixelRatio = 1, quality = 'high' } = {}) {
    const low = quality === 'low'; // phones: smaller shadow map, lighter AA + bloom
    this.w = width; this.h = height;
    const r = (this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' }));
    r.setPixelRatio(pixelRatio);
    r.setSize(width, height, false);
    r.toneMapping = THREE.ACESFilmicToneMapping;
    r.toneMappingExposure = 0.95;
    r.outputColorSpace = THREE.SRGBColorSpace;
    r.shadowMap.enabled = true;
    r.shadowMap.type = THREE.PCFSoftShadowMap;

    const scene = (this.scene = new THREE.Scene());
    const pmrem = new THREE.PMREMGenerator(r);
    scene.environment = pmrem.fromScene(new RoomEnvironment(r), 0.04).texture;
    scene.environmentIntensity = 0.55;

    this.camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 200);
    this.camera.position.set(0, 3, 14);

    // lights
    this.hemi = new THREE.HemisphereLight('#fff6ec', '#c9b8a4', 1);
    scene.add(this.hemi);
    const key = (this.key = new THREE.DirectionalLight('#fff3e6', 2.4));
    key.position.set(-5, 11, 8);
    key.castShadow = true;
    key.shadow.mapSize.set(low ? 1024 : 2048, low ? 1024 : 2048);
    key.shadow.camera.left = -9; key.shadow.camera.right = 9; key.shadow.camera.top = 9; key.shadow.camera.bottom = -9;
    key.shadow.camera.near = 1; key.shadow.camera.far = 40;
    key.shadow.bias = -0.0004; key.shadow.normalBias = 0.02; key.shadow.radius = 6;
    scene.add(key, key.target);
    this.rim = new THREE.DirectionalLight('#ffd9b8', 0.8);
    this.rim.position.set(6, 5, -6);
    scene.add(this.rim);

    // background gradient (screen space)
    this.bg = canvasTex(4, 256, () => {});
    scene.background = this.bg.tex;

    // ground
    this.groundMat = new THREE.MeshStandardMaterial({ color: '#e6dfd5', roughness: 0.95 });
    this.ground = new THREE.Mesh(new THREE.PlaneGeometry(400, 400), this.groundMat);
    this.ground.rotation.x = -Math.PI / 2;
    this.ground.receiveShadow = true;
    scene.add(this.ground);
    scene.fog = new THREE.Fog('#e7e0d6', 18, 46);

    // dust motes (deterministic)
    const N = 260, R = rng(7), pos = new Float32Array(N * 3);
    this.dustSeed = [];
    for (let i = 0; i < N; i++) this.dustSeed.push([R() * 16 - 8, R() * 12 - 1, R() * 14 - 9, R() * 0.4 + 0.15, R() * 6.28]);
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    this.dust = new THREE.Points(dg, new THREE.PointsMaterial({ map: dotTexture(), size: 0.11, color: '#d9cfc4', transparent: true, opacity: 0.8, depthWrite: false, sizeAttenuation: true }));
    this.dust.frustumCulled = false;
    scene.add(this.dust);

    // post: bloom for emissive bulbs/screens
    const rt = new THREE.WebGLRenderTarget(width * pixelRatio, height * pixelRatio, { type: THREE.HalfFloatType, samples: low ? 2 : 4 });
    this.composer = new EffectComposer(r, rt);
    this.composer.addPass(new RenderPass(scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(low ? width / 2 : width, low ? height / 2 : height), 0.7, 0.5, 3.2);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());

    this._env = null;
  }

  // Apply environment preset (or blend a->b by k). Cheap: called every frame.
  setEnv(a, b = a, k = 0) {
    const A = ENV[a], B = ENV[b];
    const col = (x, y) => new THREE.Color(x).lerp(new THREE.Color(y), k);
    const top = col(A.top, B.top), bottom = col(A.bottom, B.bottom);
    const sig = top.getHexString() + bottom.getHexString();
    if (sig !== this._env) {
      this._env = sig;
      const { ctx } = this.bg;
      const g = ctx.createLinearGradient(0, 0, 0, 256);
      g.addColorStop(0, '#' + top.getHexString()); g.addColorStop(1, '#' + bottom.getHexString());
      ctx.fillStyle = g; ctx.fillRect(0, 0, 4, 256); this.bg.tex.needsUpdate = true;
    }
    this.groundMat.color.copy(col(A.ground, B.ground));
    this.scene.fog.color.copy(col(A.fog, B.fog));
    this.scene.fog.near = lerp(A.fogNear, B.fogNear, k);
    this.scene.fog.far = lerp(A.fogFar, B.fogFar, k);
    this.key.intensity = lerp(A.key, B.key, k);
    this.hemi.intensity = lerp(A.amb, B.amb, k);
    this.scene.environmentIntensity = lerp(A.amb, B.amb, k) * 0.45;
    this.dustAmount = lerp(A.dust, B.dust, k);
    this.hudTheme = k < 0.5 ? A.hud : B.hud;
  }

  updateDust(t, focus) {
    const p = this.dust.geometry.attributes.position;
    for (let i = 0; i < this.dustSeed.length; i++) {
      const [x, y, z, sp, ph] = this.dustSeed[i];
      const yy = ((y - t * sp * 0.6) % 12 + 12) % 12 - 1;
      p.setXYZ(i, focus.x + x + Math.sin(t * 0.4 + ph) * 0.3, yy, focus.z + z);
    }
    p.needsUpdate = true;
    this.dust.material.opacity = 0.75 * this.dustAmount;
    this.dust.visible = this.dustAmount > 0.01;
  }

  setCamera({ pos, look, fov = 30, roll = 0 }) {
    const c = this.camera;
    c.position.set(...pos);
    c.up.set(Math.sin(roll), Math.cos(roll), 0);
    c.lookAt(...look);
    if (c.fov !== fov) { c.fov = fov; c.updateProjectionMatrix(); }
    // keep the shadow frustum centred on what we're looking at
    this.key.target.position.set(look[0], 0, look[2]);
    this.key.position.set(look[0] - 5, 11, look[2] + 8);
  }

  render() { this.composer.render(); }
}

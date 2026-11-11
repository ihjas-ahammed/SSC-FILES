// Timeline core: turns a video definition (scenes + captions + hud) into a
// deterministic renderAt(t). Used by both the live player and the frame exporter.
import * as THREE from 'three';
import { Stage } from './stage.js';
import { Captions, timeChunks, captionCSS } from './captions.js';
import { Hud, hudCSS } from './hud.js';
import { ease, inv, clamp } from './anim.js';
import { loadModels } from './models.js';

export async function createVideo(root, def, { quality = 'high' } = {}) {
  const W = def.width || 720, H = def.height || 1280;
  root.style.width = W + 'px'; root.style.height = H + 'px';
  root.classList.add('vstage');
  root.innerHTML = `
    <svg width="0" height="0" style="position:absolute"><filter id="mblur" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur id="mblurStd" in="SourceGraphic" stdDeviation="0 0"/></filter></svg>
    <canvas class="gl"></canvas><div class="vignette"></div><div class="grain"></div>
    <div class="hud"></div><div class="captions"></div>`;
  const style = document.createElement('style');
  style.textContent = captionCSS + hudCSS + `
    .vstage{position:relative;overflow:hidden;background:#000}
    .vstage canvas.gl{position:absolute;inset:0;width:100%;height:100%;display:block}
    .vignette{position:absolute;inset:0;pointer-events:none;z-index:3;background:radial-gradient(120% 80% at 50% 45%,transparent 55%,rgba(30,20,10,.16) 100%)}
    .grain{position:absolute;inset:0;pointer-events:none;z-index:4;opacity:.05;mix-blend-mode:overlay;
      background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")}`;
  document.head.appendChild(style);

  await document.fonts.ready;
  await Promise.all(["600 45px Manrope", "italic 54px 'Instrument Serif'", "500 19px 'JetBrains Mono'", "700 19px 'JetBrains Mono'", "700 40px Manrope"].map(f => document.fonts.load(f)));

  const stage = new Stage(root.querySelector('canvas.gl'), { width: W, height: H, pixelRatio: def.pixelRatio || 1, quality });
  const models = await loadModels(def.models); // external GLB models: def.models = { name: 'assets/models/x.glb' }
  // Captions + time warp. With `retime: true` the script is authored in "design time" (caption `at`s),
  // and a real voiceover's word timeline re-paces everything: captions follow the spoken words exactly,
  // scenes/HUD are evaluated at warp(T) so every beat stays on its line.
  let chunks, warp = T => T, toAudio = T => T;
  const designDuration = def.duration || Math.max(...def.scenes.map(s => s.end));
  let duration = designDuration;
  if (def.retime && def.words?.length) {
    const design = timeChunks(def.captions, []);
    chunks = timeChunks(def.captions, def.words, { ignoreAt: true });
    duration = def.audioDuration || def.words.at(-1)[2] + 1.2;
    const A = [[0, 0]];
    chunks.forEach((c, i) => { const d = design[i].at, last = A.at(-1); if (c.matched && d > last[0] + 0.05 && c.at > last[1] + 0.05) A.push([d, c.at]); });
    if (designDuration > A.at(-1)[0] && duration > A.at(-1)[1]) A.push([designDuration, duration]);
    const map = (x, from, to) => {
      for (let i = 1; i < A.length; i++) if (x <= A[i][from]) return A[i - 1][to] + (x - A[i - 1][from]) * (A[i][to] - A[i - 1][to]) / (A[i][from] - A[i - 1][from]);
      return A.at(-1)[to] + (x - A.at(-1)[from]);
    };
    warp = T => map(T, 1, 0);
    toAudio = T => map(T, 0, 1);
    // explicit design-time chunk ends → audio time
    chunks.forEach((c, i) => { if (def.captions[i].end != null) c.end = Math.min(c.end, map(def.captions[i].end, 0, 1)); });
  } else chunks = timeChunks(def.captions || [], def.words || []);
  const captions = new Captions(root.querySelector('.captions'), chunks);
  const hudEl = root.querySelector('.hud');
  const hud = def.hud === false ? null : new Hud(hudEl, def.hud || {});
  if (!hud) hudEl.remove();
  const blurStd = root.querySelector('#mblurStd');
  const canvas = root.querySelector('canvas.gl');

  // Build every scene once up front (deterministic, no lazy state)
  const scenes = def.scenes.map((s, i) => {
    const group = new THREE.Group();
    group.visible = false;
    stage.scene.add(group);
    const ctx = { THREE, stage, group, def, models };
    const state = s.build ? s.build(ctx) || {} : {};
    return { ...s, i, group, ctx, state };
  });



  function sceneAt(t) {
    for (const s of scenes) if (t >= s.start && t < s.end) return s;
    return t < scenes[0].start ? scenes[0] : scenes[scenes.length - 1];
  }

  function renderAt(Ta) {
    Ta = clamp(Ta, 0, duration - 1e-4);
    const T = clamp(warp(Ta), 0, designDuration - 1e-4); // design time
    const s = sceneAt(T);
    for (const o of scenes) o.group.visible = o === s;
    const lt = T - s.start, len = s.end - s.start;

    // environment
    const env = typeof s.env === 'function' ? s.env(lt, len) : s.env || 'cream';
    if (Array.isArray(env)) stage.setEnv(env[0], env[1], env[2]); else stage.setEnv(env);

    // camera (+ whip transitions)
    const cam = typeof s.camera === 'function' ? s.camera(lt, len) : s.camera || { pos: [0, 3, 14], look: [0, 1, 0] };
    let blur = 0;
    // zoom: global (def.zoom) or per-scene multiplier on camera distance
    const z = s.zoom ?? def.zoom ?? 1;
    const lift = s.lift ?? def.lift ?? 0; // raise look target → subjects sit lower in frame
    const look = [cam.look[0], cam.look[1] + lift, cam.look[2]], pos = cam.pos.map((v, i) => look[i] + (v - cam.look[i]) * z);
    const applyWhip = (w, k, sign) => {
      const amt = (w.dist ?? 3.2) * k * sign * (w.dir ?? 1);
      if (w.axis === 'y') { pos[1] += amt; look[1] += amt; } else { pos[0] += amt; look[0] += amt; }
      blur = Math.max(blur, (w.blur ?? 22) * k);
    };
    if (s.enter && s.enter.type === 'whip') {
      const d = s.enter.dur ?? 0.3;
      if (lt < d) applyWhip(s.enter, 1 - ease.outQuint(inv(0, d, lt)), -1);
    }
    if (s.exit && s.exit.type === 'whip') {
      const d = s.exit.dur ?? 0.22;
      if (lt > len - d) applyWhip(s.exit, ease.in(inv(len - d, len, lt)), 1);
    }
    stage.setCamera({ ...cam, pos, look });
    const axisY = (s.enter?.axis === 'y' && lt < 0.5) || (s.exit?.axis === 'y' && lt > len - 0.5);
    blurStd.setAttribute('stdDeviation', axisY ? `0 ${blur.toFixed(2)}` : `${blur.toFixed(2)} ${(blur * 0.08).toFixed(2)}`);
    canvas.style.filter = blur > 0.05 ? 'url(#mblur)' : 'none';

    // fade from/to a color (e.g. end card)
    let fade = 0;
    if (s.enter?.type === 'fade') fade = 1 - inv(0, s.enter.dur ?? 0.3, lt);
    if (s.exit?.type === 'fade') fade = Math.max(fade, inv(len - (s.exit.dur ?? 0.3), len, lt));
    root.style.setProperty('--fade', fade);

    if (s.update) s.update(s.state, lt, { ...s.ctx, T, len, cam: stage.camera });
    stage.updateDust(T, new THREE.Vector3(look[0], 0, look[2]));
    stage.render();

    const theme = s.theme ? (typeof s.theme === 'function' ? s.theme(lt) : s.theme) : stage.hudTheme;
    captions.update(Ta, theme);
    hud?.update(T, designDuration, theme);
  }

  return { stage, scenes, duration, designDuration, fps: def.fps || 30, width: W, height: H, renderAt, audio: def.audio, warp, toAudio,
    chunks: chunks.map(c => ({ at: c.at, end: c.end, text: c.text, matched: c.matched })) };
}

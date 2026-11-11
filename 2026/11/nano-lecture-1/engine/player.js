// Player shell: stage + transport bar (play, scrub, scene jump, compare, clean view, fullscreen).
// Works on phones (tap to play, compact bar, safe areas) and desktop (keyboard shortcuts).
// Used by index.html (dev, ES modules) and by the standalone single-file builds.
import { createVideo } from './core.js';

const CSS = `
:root{--bg:#141110;--panel:#1e1a17;--fg:#efe8df;--mut:#8f857a;--acc:#f07a3a}
*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}
html,body{margin:0;height:100%;background:var(--bg);color:var(--fg);font:14px/1.4 'JetBrains Mono',monospace;overscroll-behavior:none}
body{min-height:100dvh}
body.render{background:#000;overflow:hidden}
.wrap{display:flex;gap:20px;justify-content:center;align-items:flex-start;padding:16px 16px 0}
body.clean .wrap{padding:0;align-items:center;height:100dvh}
.frame{transform-origin:top left;flex:none}
.slot{flex:none;position:relative;border-radius:10px;overflow:hidden}
body.clean .slot,body.render .slot{border-radius:0}
.slot .tag{position:absolute;top:6px;left:8px;font-size:11px;color:var(--mut);z-index:30}
video.ref{display:block;background:#000}
.bigplay{position:absolute;inset:0;margin:auto;width:84px;height:84px;border-radius:50%;border:0;background:var(--acc);color:#1b120c;font-size:34px;z-index:25;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;padding-left:6px}
.bigplay[hidden]{display:none}
.bar{position:fixed;left:0;right:0;bottom:0;background:var(--panel);padding:10px 16px calc(10px + env(safe-area-inset-bottom));display:flex;flex-wrap:wrap;gap:10px;align-items:center;border-top:1px solid #2c2622;z-index:20}
.bar button,.bar select{background:#2b2521;color:var(--fg);border:1px solid #3a322c;border-radius:8px;padding:7px 11px;font:inherit;cursor:pointer;min-height:36px}
.bar button:hover{border-color:var(--acc)}
.bar input[type=range]{flex:1 1 260px;accent-color:var(--acc);min-width:160px;height:28px}
.time{min-width:118px;color:var(--mut);font-variant-numeric:tabular-nums}
.hint{color:var(--mut);font-size:12px}
.exitclean{position:fixed;top:calc(10px + env(safe-area-inset-top));right:10px;z-index:40;background:rgba(20,16,14,.45);color:#fff;border:0;border-radius:18px;padding:6px 12px;font:12px 'JetBrains Mono',monospace;display:none;cursor:pointer}
body.clean .exitclean{display:block}
body.render .bar,body.render .tag,body.render .refslot,body.render .bigplay,body.clean .bar,body.clean .tag{display:none}
body.render .wrap{padding:0}
.vstage::after{content:'';position:absolute;inset:0;z-index:9;pointer-events:none;background:#efe9e0;opacity:var(--fade,0)}
@media (max-width:760px){
  .wrap{padding:0;gap:0}
  .slot{border-radius:0}
  .slot .tag,.hint{display:none}
  .bar{padding:8px 10px calc(8px + env(safe-area-inset-bottom));gap:8px}
  .bar input[type=range]{order:-1;flex:1 1 100%;min-width:0}
  .time{min-width:0;font-size:12px;margin-right:auto}
  .bar select{max-width:40vw;font-size:12px}
  .bar button{padding:7px 10px;font-size:13px}
  #cmp{display:none}
}
`;

export async function mountPlayer(def, { render = false, t: startT = 0, compare: startCompare = false, videos = null, current = null } = {}) {
  const st = document.createElement('style'); st.textContent = CSS; document.head.appendChild(st);
  document.title = def.title || 'video';
  if (render) document.body.classList.add('render');
  document.body.insertAdjacentHTML('beforeend', `
    <div class="wrap">
      <div class="slot" id="mainSlot"><span class="tag">html</span><div class="frame" id="frameBox"><div id="stage"></div></div>
        <button class="bigplay" id="bigplay" aria-label="Play">▶</button></div>
      <div class="slot refslot" id="refSlot" hidden><span class="tag">original</span><video class="ref" id="ref" muted playsinline preload="auto"></video></div>
    </div>
    <button class="exitclean" id="exitclean">show controls</button>
    <div class="bar" id="bar">
      <button id="play">▶ Play</button>
      <input id="scrub" type="range" min="0" max="1000" value="0" step="1" aria-label="Seek">
      <span class="time" id="time">0.00s</span>
      <select id="sceneSel" title="Jump to scene"></select>
      ${videos ? `<select id="vidSel" title="Switch video">${videos.map(n => `<option ${n === current ? 'selected' : ''}>${n}</option>`).join('')}</select>` : ''}
      <button id="cmp" title="Show the original video side by side" ${def.reference ? '' : 'hidden'}>Compare</button>
      <button id="clean" title="Hide controls (H)">Clean</button>
      <button id="fs" title="Fullscreen (F)">Full</button>
      <span class="hint">space play · ←/→ frame · shift+←/→ 1s · H clean · F fullscreen</span>
    </div>
    <audio id="aud" preload="auto" playsinline></audio>`);

  const coarse = typeof matchMedia !== 'undefined' && matchMedia('(pointer: coarse)').matches;
  const qs = new URLSearchParams(location.search);
  const quality = render ? 'high' : qs.get('q') || (coarse ? 'low' : 'high');
  const v = await createVideo(document.getElementById('stage'), def, { quality });
  window.__video = v;
  const $ = id => document.getElementById(id);
  const aud = $('aud');
  if (def.audio && !render) aud.src = def.audio;
  let t = startT, playing = false, t0 = 0, p0 = 0, lastSync = 0;
  v.renderAt(t);
  window.__ready = true;
  if (render) return v; // the stills tool drives renderAt() itself

  const scrub = $('scrub'), timeEl = $('time'), playBtn = $('play'), ref = $('ref'), refSlot = $('refSlot'), frameBox = $('frameBox'), sel = $('sceneSel'), big = $('bigplay'), bar = $('bar');
  v.scenes.forEach(s => sel.add(new Option(`${v.toAudio(s.start).toFixed(1)}s · ${s.id}`, v.toAudio(s.start))));
  sel.onchange = () => seek(+sel.value);
  if ($('vidSel')) $('vidSel').onchange = e => { location.search = `?v=${e.target.value}`; };
  if (def.reference) ref.src = def.reference;
  let compare = startCompare && !!def.reference;

  function fit() {
    const clean = document.body.classList.contains('clean');
    const vw = window.visualViewport?.width || innerWidth, vh = window.visualViewport?.height || innerHeight;
    const mobile = vw <= 760;
    const cols = compare ? 2 : 1;
    const availH = vh - (clean ? 0 : bar.offsetHeight + (mobile ? 0 : 24));
    const availW = vw - (clean || mobile ? 0 : 32) - (cols - 1) * 20;
    const s = Math.min(availH / v.height, availW / (v.width * cols), clean ? 4 : mobile ? 2 : 1);
    frameBox.style.transform = `scale(${s})`;
    for (const el of [frameBox.parentElement]) { el.style.width = v.width * s + 'px'; el.style.height = v.height * s + 'px'; }
    refSlot.hidden = !compare;
    ref.style.width = v.width * s + 'px'; ref.style.height = v.height * s + 'px';
  }
  addEventListener('resize', fit);
  window.visualViewport?.addEventListener('resize', fit);
  $('cmp').onclick = () => { compare = !compare && !!def.reference; fit(); seek(t); };
  const toggleClean = () => { document.body.classList.toggle('clean'); fit(); };
  $('clean').onclick = toggleClean;
  $('exitclean').onclick = toggleClean;
  const toggleFs = () => {
    const el = document.documentElement;
    if (document.fullscreenElement) document.exitFullscreen?.();
    else (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
  };
  $('fs').onclick = toggleFs;
  document.addEventListener('fullscreenchange', () => setTimeout(fit, 50));

  function show() {
    scrub.value = Math.round((t / v.duration) * 1000);
    timeEl.textContent = `${t.toFixed(2)}s / ${v.duration.toFixed(1)}s`;
    v.renderAt(t);
  }
  function seek(x) {
    t = Math.max(0, Math.min(v.duration, x));
    if (def.audio) aud.currentTime = t;
    if (compare) ref.currentTime = t;
    p0 = performance.now(); t0 = t; show();
  }
  function loop() {
    if (!playing) return;
    // wall clock is master; audio is nudged back in sync if it drifts (never freezes on a stalled audio element)
    t = t0 + (performance.now() - p0) / 1000;
    if (def.audio && !aud.paused && Math.abs(aud.currentTime - t) > 0.25 && performance.now() - lastSync > 1000) { aud.currentTime = t; lastSync = performance.now(); }
    if (t >= v.duration) { playing = false; aud.pause(); ref.pause(); playBtn.textContent = '▶ Play'; big.hidden = false; t = v.duration; }
    show(); requestAnimationFrame(loop);
  }
  function toggle() {
    playing = !playing; playBtn.textContent = playing ? '❚❚ Pause' : '▶ Play';
    big.hidden = playing;
    if (playing) {
      if (t >= v.duration - 0.01) seek(0);
      p0 = performance.now(); t0 = t;
      if (def.audio) { aud.currentTime = t; aud.play().catch(() => {}); }
      if (compare) { ref.currentTime = t; ref.play(); }
      loop();
    } else { aud.pause(); ref.pause(); }
  }
  playBtn.onclick = toggle;
  big.onclick = e => { e.stopPropagation(); toggle(); };
  $('stage').onclick = toggle;
  scrub.oninput = () => seek((scrub.value / 1000) * v.duration);
  addEventListener('keydown', e => {
    if (e.target.tagName === 'SELECT') return;
    if (e.code === 'Space') { e.preventDefault(); toggle(); }
    if (e.code === 'ArrowRight') seek(t + (e.shiftKey ? 1 : 1 / v.fps));
    if (e.code === 'ArrowLeft') seek(t - (e.shiftKey ? 1 : 1 / v.fps));
    if (e.code === 'Home') seek(0);
    if (e.code === 'KeyH') toggleClean();
    if (e.code === 'KeyF') toggleFs();
  });
  fit(); show();
  return v;
}

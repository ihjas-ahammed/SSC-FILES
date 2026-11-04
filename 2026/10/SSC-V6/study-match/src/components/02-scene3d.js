/* ==========================================================================
   Scene3D: interactive 3D sheet (card type "scene")
   --------------------------------------------------------------------------
   Data:
     { "type": "scene", "label": "...", "title": "...", "points": ["..."],
       "scene": {
         "camera": { "position": [6, 4, 8], "target": [0, 0, 0] },
         "time":   { "duration": 6, "loop": true, "label": "t" },        t runs 0 → 1
         "params": [ { "name": "theta", "label": "Incidence θ", "min": 0, "max": 80, "value": 30, "unit": "°" } ],
         "axes":   true,
         "objects": [
           { "type": "box", "center": [0,0,0], "size": [4,1,3], "style": "glass" },
           { "type": "sphere", "center": [0,0,0], "r": "1.2*t", "style": "wave", "label": "o-wave" },
           { "type": "ellipsoid", "center": [0,0,0], "radii": ["1.5*t","1.2*t","1.2*t"], "rotate": [0,0,"theta"] },
           { "type": "arrow", "from": [0,0,0], "to": ["cos(2*pi*t)", "sin(2*pi*t)", 0], "style": "ray" },
           { "type": "line", "points": [[0,0,0],[0,3,0]], "style": "axis", "dash": true },
           { "type": "curve", "s": [0, 6.28], "x": "cos(s)", "y": "sin(s)", "z": "0.3*s", "style": "ray" },
           { "type": "plane", "center": [0,0,0], "size": [5,3], "rotate": [90,0,0], "style": "glass" },
           { "type": "point", "at": [0,0,0] },  { "type": "label", "at": [0,2,0], "text": "optic axis" }
         ] } }
   Any number may be an expression string in t (0 → 1), the slider names, s (curves only) and
   sin cos tan asin acos atan atan2 sqrt abs exp log min max pow pi; "deg" is π/180 and
   angles in "rotate" are in degrees. "show": "t > 0.3" hides an object until the condition holds.
   Styles: ray, ink, axis, hl, wave, glass, sage, coral. Drag to turn, pinch or wheel to zoom.
   ========================================================================== */
(function () {
  var SM = window.SM = window.SM || {};
  var THREE_URL = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
  var loading = null, live = [], MAX_LIVE = 4;
  var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);

  function loadThree(cb) {
    if (window.THREE) { cb(true); return; }
    if (loading) { loading.push(cb); return; }
    loading = [cb];
    var s = document.createElement('script');
    s.src = THREE_URL; s.async = true;
    s.onload = function () { var l = loading; loading = null; l.forEach(function (f) { f(!!window.THREE); }); };
    s.onerror = function () { var l = loading; loading = null; l.forEach(function (f) { f(false); }); };
    document.head.appendChild(s);
  }

  /* ---------- tiny safe expression compiler ---------- */
  var FNS = { sin: 1, cos: 1, tan: 1, asin: 1, acos: 1, atan: 1, atan2: 1, sqrt: 1, abs: 1, exp: 1, log: 1, min: 1, max: 1, pow: 1, floor: 1, sign: 1 };
  var cache = {};
  function compile(src, names) {
    if (typeof src === 'number') return function () { return src; };
    if (typeof src === 'boolean') return function () { return src; };
    var key = names.join(',') + '|' + src;
    if (cache[key]) return cache[key];
    var ok = true, out = String(src).replace(/\s+/g, ' ').replace(/[A-Za-z_][A-Za-z0-9_]*|\d*\.?\d+(?:e[+-]?\d+)?|\*\*|<=|>=|==|!=|&&|\|\||[+\-*/^(),?:<>!%]| /g, function (tok) {
      if (/^[A-Za-z_]/.test(tok)) {
        if (tok === 'pi') return 'Math.PI';
        if (tok === 'deg') return '(Math.PI/180)';
        if (FNS[tok]) return 'Math.' + tok;
        if (names.indexOf(tok) >= 0) return 'v.' + tok;
        ok = false; return tok;
      }
      return tok === '^' ? '**' : tok;
    });
    if (out.replace(/Math\.[A-Za-z0-9]+|v\.[A-Za-z_][A-Za-z0-9_]*|\(Math\.PI\/180\)|[\d.e+\-*/(),?:<>=!&|% ]/g, '').length) ok = false;
    var fn;
    try { fn = ok ? new Function('v', '"use strict"; return (' + out + ');') : null; } catch (e) { fn = null; }
    if (!fn) { var bad = function () { return 0; }; bad.bad = true; return (cache[key] = bad); }
    return (cache[key] = fn);
  }
  function num(x, vars, names) { var f = compile(x, names); var r = +f(vars); return isFinite(r) ? r : 0; }
  function vec(a, vars, names) { return [num(a[0], vars, names), num(a[1], vars, names), num(a[2], vars, names)]; }

  function tokens() {
    var cs = getComputedStyle(document.documentElement);
    var g = function (k, f) { return (cs.getPropertyValue(k) || '').trim() || f; };
    return { ink: g('--ink', '#1B2559'), ink2: g('--ink-2', '#4A5480'), violet: g('--violet', '#6A55D8'), hl: g('--hl', '#C98200'),
      amber: g('--amber', '#F6B72B'), lav2: g('--lav-2', '#DED6F6'), sage: g('--sage', '#2F9466'), coral: g('--coral', '#D9533F'),
      card: g('--card', '#FFFFFF'), font: g('--font', 'Plus Jakarta Sans, sans-serif') };
  }
  function styleOf(name, tok) {
    switch (name) {
      case 'ink': return { color: tok.ink, opacity: 1 };
      case 'axis': return { color: tok.ink2, opacity: 0.8 };
      case 'hl': return { color: tok.hl, opacity: 1 };
      case 'wave': return { color: tok.violet, opacity: 0.22 };
      case 'glass': return { color: tok.violet, opacity: 0.12 };
      case 'sage': return { color: tok.sage, opacity: 1 };
      case 'coral': return { color: tok.coral, opacity: 1 };
      default: return { color: tok.violet, opacity: 1 };
    }
  }

  function labelSprite(THREE, text, color, font) {
    var c = document.createElement('canvas'), ctx = c.getContext('2d'), fs = 44;
    ctx.font = 'italic 600 ' + fs + 'px "Times New Roman", serif';
    var w = Math.ceil(ctx.measureText(text).width) + 24;
    c.width = w; c.height = fs + 22;
    ctx.font = 'italic 600 ' + fs + 'px "Times New Roman", serif';
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.lineWidth = 8; ctx.strokeStyle = 'rgba(255,255,255,0.0)';
    ctx.fillStyle = color; ctx.fillText(text, w / 2, c.height / 2 + 2);
    var tex = new THREE.CanvasTexture(c);
    var sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthTest: false }));
    sp.renderOrder = 10;
    sp.scale.set(0.0062 * w, 0.0062 * c.height, 1);
    return sp;
  }

  /* ---------- one scene ---------- */
  function mount(host, spec, ui) {
    var THREE = window.THREE;
    var renderer;
    try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { host.textContent = '3D view not available on this device.'; return null; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    host.innerHTML = '';
    renderer.domElement.className = 'scene3d-canvas';
    host.appendChild(renderer.domElement);
    var scene = new THREE.Scene(), root = new THREE.Group();
    scene.add(root);
    var cam = new THREE.PerspectiveCamera(38, 1, 0.05, 400);
    var target = new THREE.Vector3().fromArray((spec.camera && spec.camera.target) || [0, 0, 0]);
    var p0 = new THREE.Vector3().fromArray((spec.camera && spec.camera.position) || [6, 4, 8]).sub(target);
    var orbit = { r: p0.length(), th: Math.atan2(p0.x, p0.z), ph: Math.acos(Math.max(-1, Math.min(1, p0.y / p0.length()))) };
    function placeCam() {
      orbit.ph = Math.max(0.08, Math.min(Math.PI - 0.08, orbit.ph));
      orbit.r = Math.max(1.5, Math.min(80, orbit.r));
      cam.position.set(target.x + orbit.r * Math.sin(orbit.ph) * Math.sin(orbit.th), target.y + orbit.r * Math.cos(orbit.ph), target.z + orbit.r * Math.sin(orbit.ph) * Math.cos(orbit.th));
      cam.lookAt(target);
    }
    placeCam();

    var params = spec.params || [], names = ['t', 's'].concat(params.map(function (p) { return p.name; }));
    var vars = { t: 0, s: 0 };
    params.forEach(function (p) { vars[p.name] = p.value != null ? p.value : p.min; });
    var tok = tokens();

    function mat(st, solid) {
      var s = styleOf(st, tok);
      if (solid) return new THREE.MeshBasicMaterial({ color: s.color, transparent: true, opacity: s.opacity < 1 ? s.opacity : 0.24, side: THREE.DoubleSide, depthWrite: false });
      return new THREE.LineBasicMaterial({ color: s.color, transparent: s.opacity < 1, opacity: s.opacity });
    }
    function rot(obj, r) {
      if (!r) return;
      var a = vec(r, vars, names);
      obj.rotation.set(a[0] * Math.PI / 180, a[1] * Math.PI / 180, a[2] * Math.PI / 180, 'XYZ');
    }
    function lineFrom(pts, st, dash) {
      var g = new THREE.BufferGeometry().setFromPoints(pts.map(function (p) { return new THREE.Vector3(p[0], p[1], p[2]); }));
      var s = styleOf(st, tok), m;
      if (dash) { m = new THREE.LineDashedMaterial({ color: s.color, dashSize: 0.18, gapSize: 0.12, transparent: true, opacity: s.opacity }); }
      else m = mat(st, false);
      var l = new THREE.Line(g, m);
      if (dash) l.computeLineDistances();
      return l;
    }
    function build() {
      while (root.children.length) {
        var ch = root.children.pop();
        ch.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) { if (o.material.map) o.material.map.dispose(); o.material.dispose(); } });
      }
      (spec.objects || []).forEach(function (o) {
        if (o.show != null && !num(o.show, vars, names)) return;
        var st = o.style || 'ray', g = null, obj = null;
        switch (o.type) {
          case 'line':
            obj = lineFrom((o.points || []).map(function (p) { return vec(p, vars, names); }), st, o.dash); break;
          case 'curve': {
            var s0 = num((o.s || [0, 1])[0], vars, names), s1 = num((o.s || [0, 1])[1], vars, names), n = o.samples || 160, pts = [];
            for (var i = 0; i <= n; i++) { vars.s = s0 + (s1 - s0) * i / n; pts.push([num(o.x, vars, names), num(o.y, vars, names), num(o.z, vars, names)]); }
            obj = lineFrom(pts, st, o.dash); break;
          }
          case 'arrow': {
            var a = vec(o.from || [0, 0, 0], vars, names), b = vec(o.to, vars, names);
            var dir = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]), len = dir.length();
            if (len < 1e-6) return;
            var sc = styleOf(st, tok);
            obj = new THREE.ArrowHelper(dir.clone().normalize(), new THREE.Vector3(a[0], a[1], a[2]), len, sc.color, Math.min(0.35, len * 0.3), Math.min(0.2, len * 0.18));
            break;
          }
          case 'sphere':
          case 'ellipsoid': {
            var r = o.type === 'sphere' ? [num(o.r, vars, names)] : vec(o.radii, vars, names);
            if (!(r[0] > 0)) return;
            g = new THREE.SphereGeometry(1, 40, 24);
            obj = new THREE.Group();
            var mesh = new THREE.Mesh(g, mat(st === 'ray' ? 'wave' : st, true));
            var wire = new THREE.LineSegments(new THREE.WireframeGeometry(new THREE.SphereGeometry(1, 16, 10)), new THREE.LineBasicMaterial({ color: styleOf(st === 'wave' || st === 'ray' ? 'ray' : st, tok).color, transparent: true, opacity: 0.35 }));
            obj.add(mesh); obj.add(wire);
            if (o.type === 'sphere') obj.scale.set(r[0], r[0], r[0]); else obj.scale.set(r[0], r[1], r[2]);
            obj.position.fromArray(vec(o.center || [0, 0, 0], vars, names));
            rot(obj, o.rotate);
            break;
          }
          case 'box': {
            var sz = vec(o.size || [1, 1, 1], vars, names);
            obj = new THREE.Group();
            g = new THREE.BoxGeometry(sz[0], sz[1], sz[2]);
            obj.add(new THREE.Mesh(g, mat(st, true)));
            obj.add(new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color: tok.ink2 })));
            obj.position.fromArray(vec(o.center || [0, 0, 0], vars, names));
            rot(obj, o.rotate);
            break;
          }
          case 'plane': {
            var ps = [num((o.size || [2, 2])[0], vars, names), num((o.size || [2, 2])[1], vars, names)];
            g = new THREE.PlaneGeometry(ps[0], ps[1]);
            obj = new THREE.Group();
            obj.add(new THREE.Mesh(g, mat(st, true)));
            obj.add(new THREE.LineSegments(new THREE.EdgesGeometry(g), new THREE.LineBasicMaterial({ color: tok.ink2, transparent: true, opacity: 0.6 })));
            obj.position.fromArray(vec(o.center || [0, 0, 0], vars, names));
            rot(obj, o.rotate);
            break;
          }
          case 'point': {
            obj = new THREE.Mesh(new THREE.SphereGeometry(o.size || 0.07, 14, 10), new THREE.MeshBasicMaterial({ color: styleOf(st, tok).color }));
            obj.position.fromArray(vec(o.at, vars, names));
            break;
          }
          case 'label': {
            obj = labelSprite(THREE, String(o.text || ''), styleOf(o.style || 'ink', tok).color, tok.font);
            obj.position.fromArray(vec(o.at, vars, names));
            if (o.size) obj.scale.multiplyScalar(o.size);
            break;
          }
        }
        if (!obj) return;
        root.add(obj);
        if (o.label && o.type !== 'label') {
          var at = o.labelAt ? vec(o.labelAt, vars, names) : (o.at ? vec(o.at, vars, names) : o.to ? vec(o.to, vars, names) : vec(o.center || [0, 0, 0], vars, names));
          var lb = labelSprite(THREE, String(o.label), styleOf(st === 'wave' || st === 'glass' ? 'ink' : st, tok).color, tok.font);
          lb.position.set(at[0], at[1] + 0.25, at[2]);
          root.add(lb);
        }
      });
      if (spec.axes) {
        var L = typeof spec.axes === 'number' ? spec.axes : 2.5;
        [[L, 0, 0, 'x'], [0, L, 0, 'y'], [0, 0, L, 'z']].forEach(function (e) {
          root.add(lineFrom([[0, 0, 0], [e[0], e[1], e[2]]], 'axis', false));
          var lb = labelSprite(THREE, e[3], tok.ink2, tok.font); lb.position.set(e[0] * 1.08, e[1] * 1.08, e[2] * 1.08); lb.scale.multiplyScalar(0.8); root.add(lb);
        });
      }
    }
    function size() {
      var w = host.clientWidth || 300, h = host.clientHeight || 220;
      renderer.setSize(w, h, false);
      cam.aspect = w / Math.max(h, 1); cam.updateProjectionMatrix();
    }
    function draw() { renderer.render(scene, cam); }

    /* time and sliders */
    var tm = spec.time || null, playing = !!tm && !REDUCE, last = 0, raf = 0;
    var dur = tm ? Math.max(0.5, tm.duration || 6) : 6;
    function setT(v, fromUser) {
      vars.t = Math.max(0, Math.min(1, v));
      if (ui.range) ui.range.value = String(vars.t);
      build(); draw();
    }
    function frame(now) {
      raf = 0;
      if (!playing || !api.visible) return;
      var dt = last ? (now - last) / 1000 : 0; last = now;
      var nt = vars.t + dt / dur;
      if (nt >= 1) { if (tm.loop === false) { nt = 1; playing = false; syncPlay(); } else nt = nt % 1; }
      setT(nt);
      if (playing) raf = requestAnimationFrame(frame);
    }
    function syncPlay() { if (ui.play) { ui.play.innerHTML = playing ? '&#10073;&#10073;' : '&#9654;'; ui.play.setAttribute('aria-label', playing ? 'Pause' : 'Play'); } }
    function start() { if (!tm) return; playing = true; last = 0; syncPlay(); if (!raf) raf = requestAnimationFrame(frame); }
    function stop() { playing = false; syncPlay(); }
    if (ui.play) ui.play.addEventListener('click', function (e) { e.stopPropagation(); if (playing) stop(); else { if (vars.t >= 1) vars.t = 0; start(); } });
    if (ui.range) ui.range.addEventListener('input', function () { stop(); setT(parseFloat(ui.range.value)); });
    (ui.sliders || []).forEach(function (sl) {
      sl.input.addEventListener('input', function () {
        vars[sl.name] = parseFloat(sl.input.value);
        if (sl.out) sl.out.textContent = sl.input.value + (sl.unit || '');
        build(); draw();
      });
    });

    /* drag to turn, wheel or pinch to zoom; the shelf must not scroll under the finger */
    var el = renderer.domElement, ptrs = {}, pinch0 = 0;
    el.style.touchAction = 'none';
    el.addEventListener('pointerdown', function (e) { e.stopPropagation(); ptrs[e.pointerId] = [e.clientX, e.clientY]; el.setPointerCapture(e.pointerId); });
    el.addEventListener('pointermove', function (e) {
      if (!ptrs[e.pointerId]) return;
      e.stopPropagation(); e.preventDefault();
      var ids = Object.keys(ptrs);
      if (ids.length === 2) {
        var o = ptrs[ids[0] == e.pointerId ? ids[1] : ids[0]], d = Math.hypot(e.clientX - o[0], e.clientY - o[1]);
        if (pinch0) orbit.r *= pinch0 / Math.max(d, 1);
        pinch0 = d;
      } else {
        var p = ptrs[e.pointerId];
        orbit.th -= (e.clientX - p[0]) * 0.008; orbit.ph -= (e.clientY - p[1]) * 0.008;
      }
      ptrs[e.pointerId] = [e.clientX, e.clientY];
      placeCam(); draw();
    });
    function up(e) { delete ptrs[e.pointerId]; pinch0 = 0; }
    el.addEventListener('pointerup', up); el.addEventListener('pointercancel', up);
    el.addEventListener('wheel', function (e) { e.preventDefault(); e.stopPropagation(); orbit.r *= Math.exp(e.deltaY * 0.0012); placeCam(); draw(); }, { passive: false });
    if (ui.reset) ui.reset.addEventListener('click', function (e) { e.stopPropagation(); orbit.r = p0.length(); orbit.th = Math.atan2(p0.x, p0.z); orbit.ph = Math.acos(p0.y / p0.length()); placeCam(); draw(); });

    var api = {
      visible: true, renderer: renderer, host: host,
      resize: function () { size(); draw(); },
      theme: function () { tok = tokens(); build(); draw(); },
      show: function (on) { api.visible = on; if (on && playing && !raf) { last = 0; raf = requestAnimationFrame(frame); } },
      dispose: function () {
        playing = false; if (raf) cancelAnimationFrame(raf);
        root.traverse(function (o) { if (o.geometry) o.geometry.dispose(); if (o.material) o.material.dispose(); });
        renderer.dispose(); if (renderer.forceContextLoss) renderer.forceContextLoss();
        host.innerHTML = ''; host._scene = null;
      }
    };
    size(); setT(tm ? (tm.start != null ? tm.start : (REDUCE ? 1 : 0)) : 1);
    syncPlay(); if (playing) start();
    return api;
  }

  /* ---------- cards: mount when seen, keep at most MAX_LIVE WebGL views ---------- */
  function activate(card) {
    var host = card.querySelector('.scene3d'), c = card._c;
    if (!host || host._scene || !c || !c.scene) return;
    loadThree(function (ok) {
      if (!ok) { host.textContent = '3D view needs an internet connection to load.'; return; }
      if (host._scene) return;
      var ui = { play: card.querySelector('[data-s3="play"]'), range: card.querySelector('[data-s3="t"]'), reset: card.querySelector('[data-s3="reset"]'), sliders: [] };
      Array.prototype.forEach.call(card.querySelectorAll('[data-s3-param]'), function (inp) {
        var p = (c.scene.params || []).filter(function (q) { return q.name === inp.getAttribute('data-s3-param'); })[0] || {};
        ui.sliders.push({ name: p.name, input: inp, unit: p.unit, out: card.querySelector('[data-s3-out="' + p.name + '"]') });
      });
      host._scene = mount(host, c.scene, ui);
      if (!host._scene) return;
      live.push(host._scene);
      while (live.length > MAX_LIVE) { var old = live.shift(); old.dispose(); }
    });
  }
  function init() {
    var cards = document.querySelectorAll('.card.scene-card');
    if (!cards.length) return;
    var io = 'IntersectionObserver' in window ? new IntersectionObserver(function (en) {
      en.forEach(function (x) {
        var host = x.target.querySelector('.scene3d');
        if (x.isIntersecting && x.intersectionRatio > 0.4) activate(x.target);
        if (host && host._scene) host._scene.show(x.isIntersecting);
      });
    }, { threshold: [0, 0.45] }) : null;
    Array.prototype.forEach.call(cards, function (card) { if (io) io.observe(card); else activate(card); });
    if ('ResizeObserver' in window) {
      var ro = new ResizeObserver(function (en) { en.forEach(function (x) { if (x.target._scene) x.target._scene.resize(); }); });
      Array.prototype.forEach.call(document.querySelectorAll('.scene3d'), function (h) { ro.observe(h); });
    }
    new MutationObserver(function () { live.forEach(function (s) { s.theme(); }); }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }

  function cardHTML(c, a, esc) {
    var sc = c.scene || {}, ps = sc.params || [];
    return '<article class="card scene-card"' + a + '><span class="card-index">' + esc(c.label || '3D explorer') + '</span>' +
      '<h2 class="card-title">' + c.title + '</h2>' +
      '<div class="scene3d art" role="img" aria-label="' + esc(c.title) + ' (3D, drag to turn)"></div>' +
      '<div class="scene3d-ctrl">' +
      (sc.time ? '<button type="button" class="chip scene3d-play" data-s3="play" aria-label="Play">&#9654;</button>' +
        '<input type="range" class="scene3d-range" data-s3="t" min="0" max="1" step="0.001" value="0" aria-label="' + esc(sc.time.label || 'Time') + '">' : '<span class="scene3d-hint">Drag to turn · pinch to zoom</span>') +
      '<button type="button" class="chip" data-s3="reset" aria-label="Reset view" title="Reset view">&#8634;</button></div>' +
      ps.map(function (p) {
        var v = p.value != null ? p.value : p.min;
        return '<label class="scene3d-param"><span>' + esc(p.label || p.name) + '</span><input type="range" data-s3-param="' + esc(p.name) + '" min="' + p.min + '" max="' + p.max + '" step="' + (p.step || (p.max - p.min) / 100) + '" value="' + v + '"><b data-s3-out="' + esc(p.name) + '">' + v + esc(p.unit || '') + '</b></label>';
      }).join('') +
      (c.points && c.points.length ? '<ul class="card-points scroll-y">' + c.points.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ul>' : '') +
      '</article>';
  }

  SM.Scene3D = { init: init, cardHTML: cardHTML, compile: compile };
})();

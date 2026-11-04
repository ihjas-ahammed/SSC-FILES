/* ══════════════════════════════════════════════════════════════════
   Fig3: a 3-D derivation figure (SSP), same interface as SM.Figure
     mount(host, spec, steps, opts) -> { layout, intro, introLeft, step(si, instant) }
   spec.kind = '3d'
     points  { name: { at:[x,y,z], label, side, dot } }        z is up
     parts   line (from,to,style,arrow,label) · polygon (points,style)
             angle (at,from,to,r,label) · rmark (at,a,b,s)
     draw    [{ parts, caption }]   drawing order when the derivation starts
     view    { yaw, pitch }         the opening camera (degrees)
   step.figure: { focus, keep, caption, view }
     view: { face: [P,Q,R] }  turn the camera until triangle PQR faces you
           { yaw, pitch }     or a fixed direction;  zoom: true frames the focus
   Drag sideways to turn the view (with a mouse, up and down tilts it too).
   ══════════════════════════════════════════════════════════════════ */
(function () {
  'use strict';
  var SM = window.SM = window.SM || {};
  var NS = 'http://www.w3.org/2000/svg';
  var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var D2R = Math.PI / 180;
  function mk(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { e.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(e);
    return e;
  }
  function sub(a, b) { return [a[0] - b[0], a[1] - b[1], a[2] - b[2]]; }
  function addv(a, b, k) { return [a[0] + k * b[0], a[1] + k * b[1], a[2] + k * b[2]]; }
  function dot(a, b) { return a[0] * b[0] + a[1] * b[1] + a[2] * b[2]; }
  function cross(a, b) { return [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]]; }
  function len(a) { return Math.sqrt(dot(a, a)); }
  function nrm(a) { var l = len(a) || 1; return [a[0] / l, a[1] / l, a[2] / l]; }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function angDiff(a, b) { var d = (b - a) % 360; if (d > 180) d -= 360; if (d < -180) d += 360; return d; }
  function f2(v) { return (Math.round(v * 10) / 10).toString(); }
  var MARK = /([_^])(\{[^}]*\}|[^\s])/g;
  /* labels are MathJax: a nested <svg> centred on the label group's origin */
  function fillLabel(g) {
    if (g._w) return;
    var fs = parseFloat(getComputedStyle(g).fontSize) || 14;
    var L = window.MJT && MJT.svgLabel(g._tex, fs * 1.08);
    if (!L) return;
    while (g.firstChild) g.removeChild(g.firstChild);
    L.el.setAttribute('x', f2(-L.w / 2)); L.el.setAttribute('y', f2(-L.h / 2)); L.el.setAttribute('overflow', 'visible');
    g.appendChild(L.el); g._w = L.w;
  }
  function svgText(el, s) {
    el.textContent = '';
    var last = 0, m, shift = 0;
    s = String(s); MARK.lastIndex = 0;
    function put(t, k) {
      var ts = mk('tspan', null, el), want = k === 'sub' ? 0.32 : k === 'sup' ? -0.42 : 0;
      if (want !== shift) ts.setAttribute('dy', (want - shift) + 'em');
      shift = want;
      if (k) ts.setAttribute('class', 'fg-' + k);
      ts.textContent = t;
    }
    while ((m = MARK.exec(s))) { if (m.index > last) put(s.slice(last, m.index)); put(m[2].replace(/^\{|\}$/g, ''), m[1] === '_' ? 'sub' : 'sup'); last = MARK.lastIndex; }
    if (last < s.length) put(s.slice(last));
  }

  function mount(host, spec, steps, opts) {
    opts = opts || {};
    host.innerHTML = '';
    host.classList.add('fg-host', 'fg3-host');
    var svg = mk('svg', { class: 'fg-svg fg3-svg', 'aria-hidden': 'true' }, host);
    var gFill = mk('g', null, svg), gLine = mk('g', null, svg), gDot = mk('g', null, svg), gText = mk('g', null, svg);
    var cap = document.createElement('div');
    cap.className = 'fg-cap';
    host.appendChild(cap);

    var pts = {};
    Object.keys(spec.points || {}).forEach(function (k) { pts[k] = spec.points[k]; });
    function P(r) { return Array.isArray(r) ? r : (pts[r] ? pts[r].at : [0, 0, 0]); }
    var parts = {}, names = [];
    function add(name, type, def) { parts[name] = { name: name, type: type, def: def, p: 0, mode: 'off', el: {} }; names.push(name); }
    Object.keys(pts).forEach(function (k) { add(k, 'point', pts[k]); });
    Object.keys(spec.parts || {}).forEach(function (k) { add(k, spec.parts[k].type, spec.parts[k]); });
    names.forEach(function (n) {
      var pr = parts[n], d = pr.def, cls = 'fg-part fg-' + (pr.type === 'rmark' ? 'polygon' : pr.type) + (d.style ? ' fg-' + d.style : '') + ' is-off';
      var w = function (layer) { if (!pr.el['w' + layer.id]) { pr.el['w' + layer.id] = 1; } return layer; };
      pr.g = { line: mk('g', { class: cls }, gLine), fill: mk('g', { class: cls }, gFill), dot: mk('g', { class: cls }, gDot), text: mk('g', { class: cls }, gText) };
      if (pr.type === 'point') { if (d.dot !== false) pr.el.dot = mk('circle', { class: 'fg-dot', r: 3.2 }, pr.g.dot); }
      else if (pr.type === 'line') { pr.el.path = mk('path', { class: 'fg-stroke', pathLength: 1 }, pr.g.line); if (d.arrow) pr.el.head = mk('path', { class: 'fg-head' }, pr.g.line); }
      else if (pr.type === 'polygon' || pr.type === 'rmark') { pr.el.fill = mk('path', { class: 'fg-fill' }, pr.g.fill); pr.el.path = mk('path', { class: 'fg-stroke', pathLength: 1 }, pr.g.line); }
      else if (pr.type === 'angle') { pr.el.fill = mk('path', { class: 'fg-fill' }, pr.g.fill); pr.el.path = mk('path', { class: 'fg-stroke', pathLength: 1 }, pr.g.line); }
      var text = pr.type === 'point' ? (d.label === false ? '' : (d.label || n)) : (d.label || '');
      if (text) { pr.el.label = mk('g', { class: 'fg-label' }, pr.g.text); pr.el.label._tex = MJT.labelTex(text); fillLabel(pr.el.label); }
    });

    /* base figure and step states (same rules as SM.Figure) */
    var base = {};
    (spec.draw || []).forEach(function (st) { (st.parts || []).forEach(function (n) { if (parts[n]) base[n] = 1; }); });
    function refs(pr) {
      var d = pr.def, out = [];
      ['from', 'to', 'at', 'a', 'b'].forEach(function (k) { if (typeof d[k] === 'string') out.push(d[k]); });
      (d.points || []).forEach(function (r) { if (typeof r === 'string') out.push(r); });
      return out;
    }
    function stateFor(si) {
      var f = (si != null && steps[si] && steps[si].figure) || null;
      var focus = (f && f.focus) || [], keep = ((f && f.keep) || []).slice();
      focus.forEach(function (n) { if (parts[n]) refs(parts[n]).forEach(function (r) { if (keep.indexOf(r) < 0) keep.push(r); }); });
      var dimOthers = focus.length > 0 || keep.length > 0, mode = {};
      names.forEach(function (n) { mode[n] = focus.indexOf(n) >= 0 ? 'focus' : keep.indexOf(n) >= 0 ? 'on' : base[n] ? (dimOthers ? 'dim' : 'on') : 'off'; });
      return { mode: mode, caption: (f && f.caption) || '', view: f && f.view, focus: focus };
    }

    /* ---------- camera ---------- */
    var all = Object.keys(pts).map(function (k) { return pts[k].at; });
    var lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
    all.forEach(function (p) { for (var i = 0; i < 3; i++) { lo[i] = Math.min(lo[i], p[i]); hi[i] = Math.max(hi[i], p[i]); } });
    var C0 = [(lo[0] + hi[0]) / 2, (lo[1] + hi[1]) / 2, (lo[2] + hi[2]) / 2], R0 = 1;
    all.forEach(function (p) { R0 = Math.max(R0, len(sub(p, C0))); });
    var v0 = spec.view || { yaw: -40, pitch: 18 };
    var cam = { yaw: v0.yaw, pitch: v0.pitch, c: C0.slice(), r: R0 };
    var tw = null, W = 0, H = 0, S = 1;

    function proj(p) {
      var q = sub(p, cam.c), ys = cam.yaw * D2R, ps = cam.pitch * D2R;
      var x1 = q[0] * Math.cos(ys) - q[1] * Math.sin(ys), y1 = q[0] * Math.sin(ys) + q[1] * Math.cos(ys), z1 = q[2];
      var y2 = y1 * Math.cos(ps) - z1 * Math.sin(ps), z2 = y1 * Math.sin(ps) + z1 * Math.cos(ps);
      return [W / 2 + S * x1, padTop / 2 + H / 2 - S * z2, y2];
    }
    var padTop = 0;
    function viewFor(st) {
      var v = st.view, out = { yaw: cam.yaw, pitch: cam.pitch, c: C0, r: R0 };
      if (!v) { return st.focus.length ? out : out; }
      if (v.face) {
        var A = P(v.face[0]), B = P(v.face[1]), Cc = P(v.face[2]);
        var n = nrm(cross(sub(B, A), sub(Cc, A)));
        var best = null;
        [n, [-n[0], -n[1], -n[2]]].forEach(function (m) {
          var h = Math.sqrt(m[0] * m[0] + m[1] * m[1]);
          var yaw = Math.atan2(m[0], m[1]) / D2R, pitch = Math.atan2(-m[2], h) / D2R;
          var cost = Math.abs(angDiff(cam.yaw, yaw)) + Math.abs(pitch - cam.pitch);
          if (!best || cost < best.cost) best = { yaw: yaw, pitch: pitch, cost: cost };
        });
        out.yaw = cam.yaw + angDiff(cam.yaw, best.yaw); out.pitch = best.pitch;
        if (v.zoom !== false) {
          var cc = [(A[0] + B[0] + Cc[0]) / 3, (A[1] + B[1] + Cc[1]) / 3, (A[2] + B[2] + Cc[2]) / 3], rr = 1;
          [A, B, Cc].forEach(function (p) { rr = Math.max(rr, len(sub(p, cc))); });
          out.c = [C0[0] + (cc[0] - C0[0]) * 0.75, C0[1] + (cc[1] - C0[1]) * 0.75, C0[2] + (cc[2] - C0[2]) * 0.75];
          out.r = Math.max(R0 * 0.55, Math.min(R0, rr * 1.45));
        }
      } else {
        if (v.yaw != null) out.yaw = cam.yaw + angDiff(cam.yaw, v.yaw);
        if (v.pitch != null) out.pitch = v.pitch;
      }
      return out;
    }
    function goCam(target, ms) {
      if (REDUCE || !ms) { cam.yaw = target.yaw; cam.pitch = target.pitch; cam.c = target.c.slice(); cam.r = target.r; tw = null; render(); return; }
      tw = { from: { yaw: cam.yaw, pitch: cam.pitch, c: cam.c.slice(), r: cam.r }, to: target, t0: performance.now(), ms: ms };
      kick();
    }

    /* ---------- drawing ---------- */
    function arrowHead(a, b) {
      var dx = b[0] - a[0], dy = b[1] - a[1], l = Math.sqrt(dx * dx + dy * dy) || 1, ux = dx / l, uy = dy / l, s = 7;
      return 'M' + f2(b[0]) + ' ' + f2(b[1]) + 'L' + f2(b[0] - ux * s - uy * s * 0.5) + ' ' + f2(b[1] - uy * s + ux * s * 0.5) + 'L' + f2(b[0] - ux * s + uy * s * 0.5) + ' ' + f2(b[1] - uy * s - ux * s * 0.5) + 'Z';
    }
    function polyD(list, close) { return list.map(function (q, i) { return (i ? 'L' : 'M') + f2(q[0]) + ' ' + f2(q[1]); }).join('') + (close ? 'Z' : ''); }
    function arc3(V, A, B, r) {
      var u = nrm(sub(A, V)), w = nrm(sub(B, V)), om = Math.acos(Math.max(-1, Math.min(1, dot(u, w)))), out = [];
      var so = Math.sin(om) || 1;
      for (var i = 0; i <= 18; i++) {
        var t = i / 18, a = Math.sin((1 - t) * om) / so, b = Math.sin(t * om) / so;
        out.push(addv(V, [a * u[0] + b * w[0], a * u[1] + b * w[1], a * u[2] + b * w[2]], r));
      }
      return out;
    }
    var center2 = [0, 0];
    function render() {
      if (!W) return;
      center2 = proj(cam.c);
      names.forEach(function (n) {
        var pr = parts[n], d = pr.def, e = pr.el, p = pr.p, lab = null;
        if (pr.type === 'point') {
          var q = proj(d.at);
          if (e.dot) { e.dot.setAttribute('cx', f2(q[0])); e.dot.setAttribute('cy', f2(q[1])); e.dot.setAttribute('r', (3.2 * Math.min(1, p * 1.5)).toFixed(2)); }
          lab = { q: q, out: 13 };
        } else if (pr.type === 'line') {
          var a = proj(P(d.from)), b = proj(P(d.to));
          e.path.setAttribute('d', polyD([a, b]));
          e.path.style.strokeDasharray = p + ' 1';
          if (e.head) e.head.setAttribute('d', p > 0.9 ? arrowHead(a, b) : '');
          var mx = (a[0] + b[0]) / 2, my = (a[1] + b[1]) / 2, dx = b[0] - a[0], dy = b[1] - a[1], l = Math.sqrt(dx * dx + dy * dy) || 1;
          var nx = -dy / l, ny = dx / l;
          if ((mx - center2[0]) * nx + (my - center2[1]) * ny < 0) { nx = -nx; ny = -ny; }
          lab = { q: [mx + nx * 12, my + ny * 12], out: 0 };
        } else if (pr.type === 'polygon') {
          var L = d.points.map(function (r) { return proj(P(r)); });
          e.path.setAttribute('d', polyD(L, true)); e.path.style.strokeDasharray = p + ' 1';
          e.fill.setAttribute('d', polyD(L, true)); e.fill.style.opacity = Math.max(0, (p - 0.5) / 0.5);
        } else if (pr.type === 'rmark') {
          var V = P(d.at), u = nrm(sub(P(d.a), V)), w = nrm(sub(P(d.b), V)), s = d.s || R0 * 0.07;
          var Q = [V, addv(V, u, s), addv(addv(V, u, s), w, s), addv(V, w, s)].map(proj);
          e.path.setAttribute('d', polyD(Q.slice(1))); e.path.style.strokeDasharray = p + ' 1';
          e.fill.setAttribute('d', polyD(Q, true)); e.fill.style.opacity = p;
        } else if (pr.type === 'angle') {
          var Vv = P(d.at), list = arc3(Vv, P(d.from), P(d.to), d.r || R0 * 0.16).map(proj), v2 = proj(Vv);
          e.path.setAttribute('d', polyD(list)); e.path.style.strokeDasharray = p + ' 1';
          e.fill.setAttribute('d', polyD([v2].concat(list), true)); e.fill.style.opacity = p;
          var mid = list[9], ddx = mid[0] - v2[0], ddy = mid[1] - v2[1], dl = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
          lab = { q: [v2[0] + ddx / dl * (dl + 11), v2[1] + ddy / dl * (dl + 11)], out: 0 };
        }
        if (e.label && lab) {
          var x = lab.q[0], y = lab.q[1];
          if (lab.out) {
            var side = d.side, ox = x - center2[0], oy = y - center2[1], ol = Math.sqrt(ox * ox + oy * oy) || 1;
            x += ox / ol * lab.out; y += oy / ol * lab.out;
          }
          if (!e.label._w) fillLabel(e.label);
          e.label.setAttribute('transform', 'translate(' + f2(x) + ',' + f2(y) + ')');
          e.label.style.opacity = Math.max(0, Math.min(1, (p - 0.6) / 0.4));
        }
      });
    }
    function setMode(pr, m) {
      pr.mode = m;
      ['line', 'fill', 'dot', 'text'].forEach(function (k) {
        var g = pr.g[k];
        g.classList.toggle('is-off', m === 'off'); g.classList.toggle('is-dim', m === 'dim'); g.classList.toggle('is-focus', m === 'focus');
      });
    }
    var drawT = [];
    function drawIn(pr, ms, delay) {
      if (REDUCE) { pr.p = 1; return; }
      pr.p = 0;
      drawT.push({ pr: pr, t0: performance.now() + (delay || 0), ms: ms });
      kick();
    }

    /* ---------- animation loop ---------- */
    var raf = 0;
    function kick() { if (!raf) raf = requestAnimationFrame(frame); }
    function frame(now) {
      raf = 0;
      var busy = false;
      if (tw) {
        var t = Math.min(1, (now - tw.t0) / tw.ms), k = ease(t), a = tw.from, b = tw.to;
        cam.yaw = a.yaw + (b.yaw - a.yaw) * k; cam.pitch = a.pitch + (b.pitch - a.pitch) * k;
        cam.c = [a.c[0] + (b.c[0] - a.c[0]) * k, a.c[1] + (b.c[1] - a.c[1]) * k, a.c[2] + (b.c[2] - a.c[2]) * k];
        cam.r = a.r + (b.r - a.r) * k;
        fit();
        if (t >= 1) tw = null; else busy = true;
      }
      if (spin) { cam.yaw += spin.rate * (now - spin.last) / 1000; spin.last = now; if (now > spin.end) spin = null; else busy = true; }
      drawT = drawT.filter(function (x) {
        var t = (now - x.t0) / x.ms;
        if (t < 0) { busy = true; return true; }
        x.pr.p = Math.min(1, ease(Math.min(1, t)));
        if (t >= 1) return false;
        busy = true; return true;
      });
      render();
      if (busy) kick();
    }
    var spin = null;

    function fit() { S = Math.min(W, H - padTop) / (2.25 * cam.r); }
    function layout() {
      W = host.clientWidth; H = host.clientHeight;
      if (W < 40 || H < 40) return false;
      svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      padTop = parseFloat(getComputedStyle(host).getPropertyValue('--fg-pad-top')) || 30;
      fit(); render();
      return true;
    }

    if (window.MJT) MJT.onRedraw(function () { if (host.isConnected) { try { render(); } catch (e) {} } });   // labels appear once MathJax is ready
    var cur = null, introOn = false, introEnd = 0, introTimers = [];
    function setCaption(t) {
      cap.textContent = '';
      if (!t) { cap.classList.remove('is-on'); return; }
      cap.innerHTML = SM.esc(t);          // $…$ typeset by MathJax
      if (window.__mjReady && window.MathJax && MathJax.typesetPromise) MathJax.typesetPromise([cap]).catch(function () {});
      else (window.__mjQueue = window.__mjQueue || []).push(function () { MathJax.typesetPromise([cap]).catch(function () {}); });
      cap.classList.add('is-on');
    }
    function apply(si, animate) {
      var st = stateFor(si);
      names.forEach(function (n) {
        var pr = parts[n], m = st.mode[n], was = pr.mode;
        setMode(pr, m);
        if (m === 'off') pr.p = 0;
        else if (was === 'off' || pr.p === 0) { if (animate) drawIn(pr, pr.type === 'point' ? 300 : 700, 0); else pr.p = 1; }
      });
      setCaption(st.caption);
      goCam(viewFor(st), animate ? 1700 : 0);
      render();
    }
    function clearIntro() { introTimers.forEach(clearTimeout); introTimers = []; }
    function intro() {
      if (!W && !layout()) return;
      clearIntro(); introOn = true;
      names.forEach(function (n) { setMode(parts[n], 'off'); parts[n].p = 0; });
      setCaption('');
      goCam({ yaw: v0.yaw - 35, pitch: v0.pitch, c: C0, r: R0 }, 0);
      if (!REDUCE) spin = { rate: 35 / ((spec.draw || []).length * 0.9 + 0.6), last: performance.now(), end: performance.now() + ((spec.draw || []).length * 900 + 600) };
      var t = 150;
      (spec.draw || []).forEach(function (stg) {
        introTimers.push(setTimeout(function () {
          (stg.parts || []).forEach(function (n, j) { var pr = parts[n]; if (!pr) return; setMode(pr, 'on'); drawIn(pr, pr.type === 'point' ? 280 : 650, j * (stg.stagger != null ? stg.stagger : 110)); });
          setCaption(stg.caption);
        }, t));
        t += 900 + (stg.parts || []).length * 40;
      });
      introEnd = performance.now() + t + 300;
      introTimers.push(setTimeout(function () { introOn = false; if (cur != null) apply(cur, true); }, t + 300));
      kick();
    }
    function step(si, instant) {
      cur = si;
      if (!W && !layout()) return;
      if (introOn && !instant) return;            // the intro ends on the current step
      if (instant) { clearIntro(); introOn = false; spin = null; }
      apply(si, !instant);
    }

    /* ---------- turning by hand ---------- */
    var drag = null;
    host.addEventListener('pointerdown', function (e) {
      drag = { x: e.clientX, y: e.clientY, yaw: cam.yaw, pitch: cam.pitch, touch: e.pointerType === 'touch' };
      tw = null; spin = null;
      try { host.setPointerCapture(e.pointerId); } catch (er) {}
    });
    host.addEventListener('pointermove', function (e) {
      if (!drag) return;
      cam.yaw = drag.yaw + (e.clientX - drag.x) * 0.55;
      if (!drag.touch) cam.pitch = Math.max(-85, Math.min(85, drag.pitch + (e.clientY - drag.y) * 0.45));
      render();
    });
    ['pointerup', 'pointercancel'].forEach(function (k) { host.addEventListener(k, function () { drag = null; }); });

    layout();
    if (cur == null) apply(0, false);
    return { layout: function () { layout(); }, intro: intro, introLeft: function () { return introOn ? Math.max(0, introEnd - performance.now()) : 0; }, step: step, isFigure: true };
  }
  SM.Fig3 = { mount: mount };
})();

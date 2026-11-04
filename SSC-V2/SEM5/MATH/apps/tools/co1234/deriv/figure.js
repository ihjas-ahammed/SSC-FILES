/* ==========================================================================
   Figure: animated SVG diagram for derivation cards (setup.figure)
   (copied from SSC-V6 study-match; SSP edit: optional draw-stage "stagger")
   --------------------------------------------------------------------------
   A derivation card opts in by giving its setup a "figure". The JSXGraph
   "steps" stay in the data as the fallback; they are not drawn when a figure exists.

     "setup": { ..., "figure": {
       "box":    [left, bottom, right, top],             figure units, y up
       "points": { "O": { "at": [-230, 0], "label": "O", "side": "s" }, ... },
       "parts":  { "OS": { "type": "line", "from": "O", "to": "S", "style": "ray", "arrow": true }, ... },
       "draw":   [ { "parts": ["axis"], "caption": "Principal axis" }, ... ]
     } }

   and on any derivation step:

     "figure": { "focus": ["triOSC", "alpha1"], "keep": ["OS"], "caption": "..." }

   draw     the order in which the figure is drawn when the card starts. Its parts are the base figure.
   focus    parts drawn in the accent colour for that step. Parts outside the base draw in.
   keep     base parts left at full strength. While a step has focus or keep, the other base parts dim.
            The points a focused part is built on are kept automatically.
   caption  one line shown in the corner of the figure ("α_1" gives a subscript).

   Part types: line (from, to, style, arrow), arc (center, r, from, to in degrees, hatch),
   polygon (points), angle (at, from, to, r in px), dim (from, to, offset in px, arrow), text (at).
   Styles: axis, mirror, ray, normal, guide.

   Labels are placed once per layout, in screen pixels, at a fixed font size. Two labels that can be on
   screen at the same time never overlap, labels keep clear of lines and points, and a label keeps its
   place from step to step.
   ========================================================================== */
(function () {
  var SM = window.SM = window.SM || {};
  var NS = 'http://www.w3.org/2000/svg';
  var REDUCE = !!(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches);
  var DIRS = { e: [1, 0], ne: [1, -1], n: [0, -1], nw: [-1, -1], w: [-1, 0], sw: [-1, 1], s: [0, 1], se: [1, 1] };
  var RING = ['e', 'ne', 'n', 'nw', 'w', 'sw', 's', 'se'];
  var DRAW_MS = { line: 620, arc: 820, polygon: 900, angle: 560, dim: 620, point: 280, text: 300 };
  var RANK = { point: 0, angle: 1, line: 2, dim: 3, arc: 4, polygon: 5, text: 6 };

  function mk(tag, attrs, parent) {
    var e = document.createElementNS(NS, tag);
    if (attrs) Object.keys(attrs).forEach(function (k) { if (attrs[k] != null) e.setAttribute(k, attrs[k]); });
    if (parent) parent.appendChild(e);
    return e;
  }
  function ease(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function clamp01(t) { return t < 0 ? 0 : t > 1 ? 1 : t; }
  function f2(v) { return (Math.round(v * 100) / 100).toString(); }
  function xy(p) { return f2(p[0]) + ' ' + f2(p[1]); }
  function lerp(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]; }
  function unit(a, b) { var dx = b[0] - a[0], dy = b[1] - a[1], l = Math.sqrt(dx * dx + dy * dy) || 1; return [dx / l, dy / l]; }

  /* "α_1" -> α with a subscript 1, "x^2" -> superscript; "_{ab}" takes several characters */
  var MARK = /([_^])(\{[^}]*\}|[^\s])/g;
  function pieces(s) {
    var out = [], last = 0, m;
    s = String(s);
    MARK.lastIndex = 0;
    while ((m = MARK.exec(s))) {
      if (m.index > last) out.push({ t: s.slice(last, m.index) });
      out.push({ t: m[2].replace(/^\{|\}$/g, ''), k: m[1] === '_' ? 'sub' : 'sup' });
      last = MARK.lastIndex;
    }
    if (last < s.length) out.push({ t: s.slice(last) });
    return out;
  }
  function svgText(el, s) {
    el.textContent = '';
    var shift = 0;
    pieces(s).forEach(function (p) {
      var ts = mk('tspan', null, el);
      var want = p.k === 'sub' ? 0.32 : p.k === 'sup' ? -0.42 : 0;
      if (want !== shift) ts.setAttribute('dy', (want - shift) + 'em');
      shift = want;
      if (p.k) ts.setAttribute('class', 'fg-' + p.k);
      ts.textContent = p.t;
    });
  }
  /* captions: $…$ parts are typeset by MathJax, like every other piece of maths on the page */
  function htmlText(s) { return SM.esc ? SM.esc(String(s)) : String(s); }
  function typesetEl(el) {
    if (window.__mjReady && window.MathJax && MathJax.typesetPromise) { MathJax.typesetPromise([el]).catch(function () {}); return; }
    (window.__mjQueue = window.__mjQueue || []).push(function () { MathJax.typesetPromise([el]).catch(function () {}); });
  }
  /* labels: a MathJax <svg> nested in the label group, centred on the group's origin */
  function fillLabel(g, fs) {
    if (g._fs === fs && g._w) return;
    var L = window.MJT && MJT.svgLabel(g._tex, fs * 1.08);
    if (!L) return;
    while (g.firstChild) g.removeChild(g.firstChild);
    L.el.setAttribute('x', f2(-L.w / 2)); L.el.setAttribute('y', f2(-L.h / 2));
    L.el.setAttribute('overflow', 'visible');
    g.appendChild(L.el); g._fs = fs; g._w = L.w; g._h = L.h;
  }

  /* ---------- box and segment tests for label placement ---------- */
  function overlap(a, b) {
    var w = Math.min(a.x1, b.x1) - Math.max(a.x0, b.x0), h = Math.min(a.y1, b.y1) - Math.max(a.y0, b.y0);
    return w > 0 && h > 0 ? w * h : 0;
  }
  function segHitsBox(a, b, r) {
    // Liang-Barsky clip of segment ab against box r
    var x0 = a[0], y0 = a[1], dx = b[0] - x0, dy = b[1] - y0, t0 = 0, t1 = 1;
    var p = [-dx, dx, -dy, dy], q = [x0 - r.x0, r.x1 - x0, y0 - r.y0, r.y1 - y0];
    for (var i = 0; i < 4; i++) {
      if (p[i] === 0) { if (q[i] < 0) return false; continue; }
      var t = q[i] / p[i];
      if (p[i] < 0) { if (t > t1) return false; if (t > t0) t0 = t; }
      else { if (t < t0) return false; if (t < t1) t1 = t; }
    }
    return t0 <= t1;
  }
  function dotHitsBox(c, rad, r) {
    var nx = Math.max(r.x0, Math.min(c[0], r.x1)), ny = Math.max(r.y0, Math.min(c[1], r.y1));
    return (nx - c[0]) * (nx - c[0]) + (ny - c[1]) * (ny - c[1]) < rad * rad;
  }

  /* ======================================================================== */
  function mount(host, spec, steps, opts) {
    opts = opts || {};
    host.innerHTML = '';
    host.classList.add('fg-host');
    if (opts.player) host.classList.add('fg-player');
    var svg = mk('svg', { class: 'fg-svg', 'aria-hidden': 'true', focusable: 'false' }, host);
    var layers = {
      fill: mk('g', { class: 'fg-l-fill' }, svg), line: mk('g', { class: 'fg-l-line' }, svg),
      dot: mk('g', { class: 'fg-l-dot' }, svg), text: mk('g', { class: 'fg-l-text' }, svg)
    };
    var cap = document.createElement('div');
    cap.className = 'fg-cap';
    cap.setAttribute('aria-live', 'polite');
    cap.setAttribute('data-no-glossary', '');   // the glossary must not turn caption words into links
    host.appendChild(cap);

    var pts = {};
    Object.keys(spec.points || {}).forEach(function (k) {
      var p = spec.points[k];
      pts[k] = Array.isArray(p) ? { at: p } : p;
    });
    function P(ref) { return Array.isArray(ref) ? ref : (pts[ref] ? pts[ref].at : [0, 0]); }

    /* parts: one per point, then the named shapes */
    var parts = {}, names = [];
    function addPart(name, type, def) { parts[name] = { name: name, type: type, def: def, p: 0, mode: 'off', w: {} }; names.push(name); }
    Object.keys(pts).forEach(function (k) { addPart(k, 'point', pts[k]); });
    Object.keys(spec.parts || {}).forEach(function (k) { if (!parts[k]) addPart(k, spec.parts[k].type, spec.parts[k]); });

    function wrap(pr, layer) {
      if (!pr.w[layer]) pr.w[layer] = mk('g', { class: 'fg-part fg-' + pr.type + (pr.def.style ? ' fg-' + pr.def.style : '') + ' is-off' }, layers[layer]);
      return pr.w[layer];
    }
    names.forEach(function (n) {
      var pr = parts[n], d = pr.def, e = pr.el = {};
      switch (pr.type) {
        case 'point':
          if (d.dot !== false) e.dot = mk('circle', { class: 'fg-dot', r: 0 }, wrap(pr, 'dot'));
          break;
        case 'line':
          e.path = mk('path', { class: 'fg-stroke' }, wrap(pr, 'line'));
          if (d.arrow) e.arrow = mk('path', { class: 'fg-head' }, wrap(pr, 'line'));
          if (d.style === 'ray') e.glow = mk('circle', { class: 'fg-glow', r: 4.5 }, wrap(pr, 'line'));   // light: a bright tip travels along the ray as it draws
          break;
        case 'arc':
          e.path = mk('path', { class: 'fg-stroke' }, wrap(pr, 'line'));
          if (d.hatch) e.hatch = mk('path', { class: 'fg-hatch' }, wrap(pr, 'line'));
          break;
        case 'polygon':
          e.fill = mk('path', { class: 'fg-fill' }, wrap(pr, 'fill'));
          e.path = mk('path', { class: 'fg-stroke' }, wrap(pr, 'line'));
          break;
        case 'angle':
          e.fill = mk('path', { class: 'fg-fill' }, wrap(pr, 'fill'));
          e.path = mk('path', { class: 'fg-stroke' }, wrap(pr, 'line'));
          break;
        case 'dim':
          e.ext = mk('path', { class: 'fg-ext' }, wrap(pr, 'line'));
          e.path = mk('path', { class: 'fg-stroke' }, wrap(pr, 'line'));
          e.arrow = mk('path', { class: 'fg-head' }, wrap(pr, 'line'));
          break;
      }
      var text = pr.type === 'point' ? (d.label === false ? '' : (d.label || n)) : (d.label || d.text || '');
      if (text) {
        // a length's label sits on its line: a plate behind it hides the line in the gaps between words
        if (pr.type === 'dim') e.plate = mk('rect', { class: 'fg-plate', rx: 4 }, wrap(pr, 'text'));
        e.label = mk('g', { class: 'fg-label' + (d.labelClass ? ' ' + d.labelClass : '') }, wrap(pr, 'text'));
        e.label._tex = MJT.labelTex(text);
      }
    });

    /* base figure = everything the draw list draws; one state per step */
    var base = {};
    (spec.draw || []).forEach(function (st) { (st.parts || []).forEach(function (n) { if (parts[n]) base[n] = 1; }); });
    function refsOf(pr) {
      var d = pr.def, out = [];
      ['from', 'to', 'at', 'center'].forEach(function (k) { if (typeof d[k] === 'string') out.push(d[k]); });
      (d.points || []).forEach(function (r) { if (typeof r === 'string') out.push(r); });
      return out;
    }
    function stateFor(si) {
      var f = (si != null && steps[si] && steps[si].figure) || null;
      var focus = (f && f.focus) || [], keep = ((f && f.keep) || []).slice();
      focus.forEach(function (n) { if (parts[n]) refsOf(parts[n]).forEach(function (r) { if (base[r] && keep.indexOf(r) < 0) keep.push(r); }); });
      var dimOthers = focus.length > 0 || keep.length > 0, mode = {};
      names.forEach(function (n) {
        mode[n] = focus.indexOf(n) >= 0 ? 'focus' : keep.indexOf(n) >= 0 ? 'on' : base[n] ? (dimOthers ? 'dim' : 'on') : 'off';
      });
      return { mode: mode, order: focus, caption: (f && f.caption) || '' };
    }
    // which parts can be on screen together: labels only have to avoid what they can be seen with
    var states = [stateFor(null)];
    steps.forEach(function (st, i) { if (st && st.figure) states.push(stateFor(i)); });
    names.forEach(function (n) { parts[n].seen = states.map(function (s) { return s.mode[n] !== 'off'; }); });
    function together(a, b) {
      for (var i = 0; i < a.seen.length; i++) if (a.seen[i] && b.seen[i]) return true;
      return false;
    }

    /* ---------- layout: figure units -> screen pixels ---------- */
    var T = null, W = 0, H = 0;
    // captions sit in the top-left corner: the figure keeps clear of that strip
    var hasCaptions = (spec.draw || []).some(function (s) { return s.caption; }) ||
      steps.some(function (s) { return s && s.figure && s.figure.caption; });
    function geometry(pr) {
      var d = pr.def, g = pr.g = {}, segs = pr.segs = [];
      switch (pr.type) {
        case 'point': g.c = T(P(n0(pr))); break;
        case 'text': g.c = T(P(d.at)); break;
        case 'line': g.a = T(P(d.from)); g.b = T(P(d.to)); segs.push([g.a, g.b]); break;
        case 'arc': {
          var c = T(P(d.center)), R = d.r * T.s, a0 = d.from * Math.PI / 180, a1 = d.to * Math.PI / 180, list = [];
          for (var i = 0; i <= 48; i++) { var t = a0 + (a1 - a0) * i / 48; list.push([c[0] + R * Math.cos(t), c[1] - R * Math.sin(t)]); }
          g.list = list; g.c = c; g.R = R;
          for (var j = 0; j < list.length - 1; j++) segs.push([list[j], list[j + 1]]);
          if (d.hatch) {   // the hatching behind the mirror is in the way of labels as well
            var hs = d.hatch === 'in' ? -1 : 1, outer = list.map(function (q) { var u = unit(c, q); return [q[0] + hs * u[0] * 8, q[1] + hs * u[1] * 8]; });
            for (var j2 = 0; j2 < outer.length - 1; j2 += 2) segs.push([outer[j2], outer[Math.min(j2 + 2, outer.length - 1)]]);
          }
          break;
        }
        case 'polygon': {
          g.list = (d.points || []).map(function (r) { return T(P(r)); });
          var cx = 0, cy = 0;
          g.list.forEach(function (q) { cx += q[0]; cy += q[1]; });
          g.c = [cx / g.list.length, cy / g.list.length];
          for (var k = 0; k < g.list.length; k++) segs.push([g.list[k], g.list[(k + 1) % g.list.length]]);
          break;
        }
        case 'angle': {
          var v = T(P(d.at)), ua = unit(v, T(P(d.from))), ub = unit(v, T(P(d.to)));
          var ta = Math.atan2(ua[1], ua[0]), span = Math.atan2(ub[1], ub[0]) - ta;
          while (span > Math.PI) span -= 2 * Math.PI;
          while (span <= -Math.PI) span += 2 * Math.PI;
          g.v = v; g.ta = ta; g.span = span; g.r = d.r || 22;
          var steps2 = 16, prev = null;
          for (var s2 = 0; s2 <= steps2; s2++) {
            var tt = ta + span * s2 / steps2, q2 = [v[0] + g.r * Math.cos(tt), v[1] + g.r * Math.sin(tt)];
            if (prev) segs.push([prev, q2]);
            prev = q2;
          }
          break;
        }
        case 'dim': {
          var off = Array.isArray(d.offset) ? d.offset : [0, d.offset || 0];
          g.a0 = T(P(d.from)); g.b0 = T(P(d.to));
          g.a = [g.a0[0] + off[0], g.a0[1] + off[1]]; g.b = [g.b0[0] + off[0], g.b0[1] + off[1]];
          segs.push([g.a, g.b]);
          break;
        }
      }
    }
    function n0(pr) { return pr.name; }

    function measure(el, fs) {
      if (el._tex != null) {             // MathJax label: its size comes from the typeset box
        fillLabel(el, fs);
        return { w: (el._w || el._tex.length * fs * 0.55) + 3, h: Math.max(el._h || 0, fs) + 1 };
      }
      var bb = null;
      try { bb = el.getBBox(); } catch (e) { bb = null; }
      var txt = el.textContent || '';
      if (!bb || bb.width < 0.5) bb = { width: txt.length * fs * 0.62, height: fs * 1.15 };
      return { w: bb.width + 3, h: Math.max(bb.height, fs) + 1 };
    }

    function candidates(pr, w, h) {
      var d = pr.def, g = pr.g, out = [];
      function push(c) { out.push(c); }
      if (pr.type === 'point') {
        var first = RING.indexOf(d.side || 's'), gap = 6;
        if (first < 0) first = 6;
        [0, 1, 2].forEach(function (lvl) {
          var order = [first];
          for (var k = 1; k <= 4; k++) { order.push((first + k) % 8); order.push((first - k + 8) % 8); }
          order.forEach(function (ix) {
            var dv = DIRS[RING[ix]], gg = gap + lvl * 5;
            push([g.c[0] + dv[0] * (w / 2 + gg), g.c[1] + dv[1] * (h / 2 + gg)]);
          });
        });
      } else if (pr.type === 'angle') {
        var mid = g.ta + g.span / 2, ux = Math.cos(mid), uy = Math.sin(mid), ext = Math.abs(ux) * w / 2 + Math.abs(uy) * h / 2;
        // along the bisector, just outside the arc first; every step further out costs more (see placeLabels)
        [0, -0.2, 0.2].forEach(function (tilt) {
          for (var k2 = 0; k2 < 9; k2++) {
            var m2 = mid + tilt * g.span, dd = g.r + 3 + ext + k2 * 4;
            out.push({ c: [g.v[0] + Math.cos(m2) * dd, g.v[1] + Math.sin(m2) * dd], pen: k2 * k2 * 7 + (tilt ? 40 : 0) });
          }
        });
      } else if (pr.type === 'line' || pr.type === 'dim') {
        var u = unit(g.a, g.b), nx = -u[1], ny = u[0], e2 = Math.abs(nx) * w / 2 + Math.abs(ny) * h / 2 + 4;
        var side = d.labelSide === 'left' ? -1 : 1;
        [0.5, 0.4, 0.6, 0.3, 0.7, 0.2, 0.8].forEach(function (t) {
          var q = lerp(g.a, g.b, t);
          if (pr.type === 'dim') push(q);
          push([q[0] + side * nx * e2, q[1] + side * ny * e2]);
          push([q[0] - side * nx * e2, q[1] - side * ny * e2]);
        });
      } else if (pr.type === 'polygon' || pr.type === 'text' || pr.type === 'arc') {
        var c = pr.type === 'arc' ? g.list[0] : (g.c || [0, 0]);
        if (d.labelAt) c = T(d.labelAt);
        push(c);
        [6, 12, 18].forEach(function (r) { RING.forEach(function (k) { var dv = DIRS[k]; push([c[0] + dv[0] * r, c[1] + dv[1] * r]); }); });
      }
      return out;
    }

    function placeLabels() {
      var fs = parseFloat(getComputedStyle(svg).fontSize) || 14;
      var list = names.map(function (n) { return parts[n]; }).filter(function (pr) { return pr.el.label; });
      list.forEach(function (pr) { var m = measure(pr.el.label, fs); pr.lw = m.w; pr.lh = m.h; });
      list.sort(function (a, b) { return (RANK[a.type] - RANK[b.type]) || (names.indexOf(a.name) - names.indexOf(b.name)); });
      var placed = [];
      list.forEach(function (pr) {
        var w = pr.lw, h = pr.lh, best = null, bc = Infinity;
        if (pr.def.labelOffset) {
          var anc = pr.g.c || pr.g.v || lerp(pr.g.a, pr.g.b, 0.5);
          best = [anc[0] + pr.def.labelOffset[0], anc[1] + pr.def.labelOffset[1]];
        } else candidates(pr, w, h).forEach(function (c, i) {
          var pen = i * 4;
          if (!Array.isArray(c)) { pen = c.pen; c = c.c; }
          var box = { x0: c[0] - w / 2, y0: c[1] - h / 2, x1: c[0] + w / 2, y1: c[1] + h / 2 };
          var cost = pen;
          if (box.x0 < 2 || box.y0 < 2 || box.x1 > W - 2 || box.y1 > H - 2) cost += 6000;
          if (opts.avoidTop && box.y0 < opts.avoidTop - 2) cost += 3000;   // the caption strip
          placed.forEach(function (q) {
            if (!together(pr, q)) return;
            var ov = overlap(box, q.box);
            if (ov > 0) cost += 4000 + ov * 30;
          });
          names.forEach(function (qn) {
            var q = parts[qn];
            if (!together(pr, q)) return;
            if (q.type === 'point') {
              if (q.el.dot && dotHitsBox(q.g.c, (q.def.size || 3.6) + 1.5, box)) cost += 2500;
              return;
            }
            if (q === pr && pr.type === 'dim') return;   // a length's label sits on its own line, which breaks round it
            var hits = 0, grown = { x0: box.x0 - 1.5, y0: box.y0 - 1.5, x1: box.x1 + 1.5, y1: box.y1 + 1.5 };
            (q.segs || []).forEach(function (sg) { if (segHitsBox(sg[0], sg[1], grown)) hits++; });
            if (hits) cost += (q.type === 'polygon' ? 150 : 500) + hits * 20;
          });
          if (cost < bc) { bc = cost; best = c; }
        });
        pr.box = { x0: best[0] - w / 2, y0: best[1] - h / 2, x1: best[0] + w / 2, y1: best[1] + h / 2 };
        pr.el.label.setAttribute('transform', 'translate(' + f2(best[0]) + ',' + f2(best[1]) + ')');
        if (pr.el.plate) {
          pr.el.plate.setAttribute('x', f2(pr.box.x0 - 2)); pr.el.plate.setAttribute('y', f2(pr.box.y0));
          pr.el.plate.setAttribute('width', f2(w + 4)); pr.el.plate.setAttribute('height', f2(h));
        }
        placed.push(pr);
      });
    }

    if (window.MJT) MJT.onRedraw(function () { if (T && host.isConnected && W >= 40) placeLabels(); });
    function layout() {
      W = host.clientWidth; H = host.clientHeight;
      if (W < 40 || H < 40) return false;
      svg.setAttribute('width', W); svg.setAttribute('height', H); svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      var cs = getComputedStyle(host), pad = parseFloat(cs.getPropertyValue('--fg-pad')) || 10;
      var padTop = hasCaptions ? (parseFloat(cs.getPropertyValue('--fg-pad-top')) || pad) : pad;
      var b = spec.box || [0, 0, 100, 100], bw = b[2] - b[0], bh = b[3] - b[1];
      var s = Math.min((W - 2 * pad) / bw, (H - pad - padTop) / bh);
      var ox = (W - s * bw) / 2 - s * b[0], oy = padTop + ((H - pad - padTop) - s * bh) / 2 + s * b[3];
      T = function (p) { return [ox + s * p[0], oy - s * p[1]]; };
      T.s = s;
      opts.avoidTop = hasCaptions ? padTop : 0;
      names.forEach(function (n) { geometry(parts[n]); });
      placeLabels();
      names.forEach(function (n) { render(parts[n]); });
      return true;
    }

    /* ---------- draw one part at progress p (0 = not drawn, 1 = complete) ---------- */
    function head(tip, u, size) {
      var nx = -u[1], ny = u[0], bx = tip[0] - u[0] * size, by = tip[1] - u[1] * size;
      return 'M' + xy(tip) + 'L' + xy([bx + nx * size * 0.5, by + ny * size * 0.5]) + 'L' + xy([bx - nx * size * 0.5, by - ny * size * 0.5]) + 'Z';
    }
    function polyD(list, p, closed) {
      if (!list.length || p <= 0) return '';
      var seg = [], total = 0, i;
      var L = closed ? list.concat([list[0]]) : list;
      for (i = 0; i < L.length - 1; i++) { var l = Math.hypot(L[i + 1][0] - L[i][0], L[i + 1][1] - L[i][1]); seg.push(l); total += l; }
      var left = total * p, d = 'M' + xy(L[0]);
      for (i = 0; i < seg.length; i++) {
        if (left >= seg[i]) { d += 'L' + xy(L[i + 1]); left -= seg[i]; }
        else { d += 'L' + xy(lerp(L[i], L[i + 1], seg[i] ? left / seg[i] : 0)); break; }
      }
      if (closed && p >= 1) d += 'Z';
      return d;
    }
    function render(pr) {
      if (!pr.g) return;
      var e = pr.el, g = pr.g, d = pr.def, p = pr.p, labelIn = clamp01((p - 0.62) / 0.38);
      switch (pr.type) {
        case 'point':
          if (e.dot) { e.dot.setAttribute('cx', f2(g.c[0])); e.dot.setAttribute('cy', f2(g.c[1])); var k = clamp01(p * 1.4); e.dot.setAttribute('r', f2((d.size || 3.6) * (k < 1 ? k * (1.25 - 0.25 * k) : 1))); }
          labelIn = clamp01((p - 0.3) / 0.7);
          break;
        case 'line': {
          var end = lerp(g.a, g.b, p);
          e.path.setAttribute('d', p > 0 ? 'M' + xy(g.a) + 'L' + xy(end) : '');
          if (e.glow) {
            e.glow.setAttribute('cx', f2(end[0])); e.glow.setAttribute('cy', f2(end[1]));
            e.glow.style.opacity = p > 0 && p < 1 ? Math.min(1, p / 0.05, (1 - p) / 0.06) : 0;
          }
          if (e.arrow) {
            var at = typeof d.arrow === 'number' ? d.arrow : 0.56;
            e.arrow.setAttribute('d', head(lerp(g.a, g.b, at), unit(g.a, g.b), 8));
            e.arrow.style.opacity = clamp01((p - at) / 0.08 + 1);   // shows once the line has reached it
          }
          break;
        }
        case 'arc':
          e.path.setAttribute('d', polyD(g.list, p, false));
          if (e.hatch) {
            var hd = '', n = 13, dir = d.hatch === 'in' ? -1 : 1;
            for (var i = 1; i < n; i++) {
              var q = g.list[Math.round(i * (g.list.length - 1) / n)], u = unit(g.c, q);
              var tip = [q[0] + dir * u[0] * 7, q[1] + dir * u[1] * 7];
              hd += 'M' + xy(q) + 'L' + xy([tip[0] + u[1] * 3, tip[1] - u[0] * 3]);
            }
            e.hatch.setAttribute('d', hd);
            e.hatch.style.opacity = clamp01((p - 0.5) / 0.5);
          }
          break;
        case 'polygon':
          e.path.setAttribute('d', polyD(g.list, clamp01(p / 0.78), true));
          e.fill.setAttribute('d', 'M' + g.list.map(xy).join('L') + 'Z');
          e.fill.style.opacity = clamp01((p - 0.55) / 0.45);
          labelIn = clamp01((p - 0.7) / 0.3);
          break;
        case 'angle': {
          var sw = g.span * p, a0 = [g.v[0] + g.r * Math.cos(g.ta), g.v[1] + g.r * Math.sin(g.ta)];
          var a1 = [g.v[0] + g.r * Math.cos(g.ta + sw), g.v[1] + g.r * Math.sin(g.ta + sw)];
          var flag = Math.abs(sw) > Math.PI ? 1 : 0, sweep = sw > 0 ? 1 : 0;
          var arcD = 'M' + xy(a0) + 'A' + f2(g.r) + ' ' + f2(g.r) + ' 0 ' + flag + ' ' + sweep + ' ' + xy(a1);
          e.path.setAttribute('d', p > 0 ? arcD : '');
          e.fill.setAttribute('d', p > 0 ? 'M' + xy(g.v) + 'L' + xy(a0) + arcD.replace(/^M[^A]*/, '') + 'Z' : '');
          break;
        }
        case 'dim': {
          var tipD = lerp(g.a, g.b, p);
          e.path.setAttribute('d', p > 0 ? 'M' + xy(g.a) + 'L' + xy(tipD) : '');
          // short end ticks across the length line (long extension lines would cut through the point labels)
          var ud = unit(g.a, g.b), tx = -ud[1] * 5, ty = ud[0] * 5, extD = '';
          [g.a, g.b].forEach(function (q, idx) {
            if (idx === 1 && p < 0.98) return;
            extD += 'M' + xy([q[0] - tx, q[1] - ty]) + 'L' + xy([q[0] + tx, q[1] + ty]);
          });
          e.ext.setAttribute('d', p > 0 ? extD : '');
          e.arrow.setAttribute('d', p > 0.05 ? head(tipD, unit(g.a, g.b), 7) : '');
          if (d.arrow === 'both' && p >= 1) e.arrow.setAttribute('d', head(g.b, unit(g.a, g.b), 7) + head(g.a, unit(g.b, g.a), 7));
          break;
        }
      }
      if (e.label) e.label.style.opacity = labelIn;
      if (e.plate) e.plate.style.opacity = labelIn;
    }

    /* ---------- smooth progress tweens ---------- */
    var tw = [], raf = 0;
    function frame(now) {
      raf = 0;
      tw = tw.filter(function (t) {
        if (now < t.t0) return true;
        var k = clamp01((now - t.t0) / t.dur);
        t.pr.p = t.from + (t.to - t.from) * ease(k);
        render(t.pr);
        return k < 1;
      });
      if (tw.length) raf = requestAnimationFrame(frame);
    }
    function tween(pr, to, dur, delay) {
      tw = tw.filter(function (t) { return t.pr !== pr; });
      if (REDUCE || !dur) { pr.p = to; render(pr); return; }
      tw.push({ pr: pr, from: pr.p, to: to, t0: performance.now() + (delay || 0), dur: dur });
      if (!raf) raf = requestAnimationFrame(frame);
    }
    function stopTweens(finish) {
      tw.forEach(function (t) { if (finish) { t.pr.p = t.to; render(t.pr); } });
      tw = [];
      if (raf) { cancelAnimationFrame(raf); raf = 0; }
    }

    function setMode(pr, m) {
      pr.mode = m;
      Object.keys(pr.w).forEach(function (k) {
        var c = pr.w[k].classList;
        c.toggle('is-off', m === 'off'); c.toggle('is-on', m === 'on'); c.toggle('is-dim', m === 'dim'); c.toggle('is-focus', m === 'focus');
      });
    }
    function instantly(fn) {
      host.classList.add('fg-instant');
      fn();
      void host.offsetWidth;
      host.classList.remove('fg-instant');
    }
    var capT = null;
    function setCaption(text, instant) {
      clearTimeout(capT);
      if (!text) { cap.classList.remove('is-on'); return; }
      var html = htmlText(text);
      if (cap.classList.contains('is-on') && cap._html === html) return;
      cap._html = html;
      if (instant || REDUCE || !cap.classList.contains('is-on')) { cap.innerHTML = html; typesetEl(cap); cap.classList.add('is-on'); return; }
      cap.classList.add('is-swap');
      capT = setTimeout(function () { cap.innerHTML = html; typesetEl(cap); cap.classList.remove('is-swap'); }, 180);
    }

    /* ---------- apply a step: highlight, draw in what is new, dim the rest ---------- */
    var cur = null, introOn = false, introTimers = [], pending = null, introEnd = 0;
    function apply(si, animate) {
      var st = stateFor(si);
      cur = si;
      var n = 0;
      var run = function () {
        names.forEach(function (name) {
          var pr = parts[name], m = st.mode[name], was = pr.mode;
          if (m === was) return;
          if (was === 'off') {
            var k = st.order.indexOf(name);
            if (animate) { pr.p = 0; render(pr); tween(pr, 1, DRAW_MS[pr.type], 120 + (k >= 0 ? k : n++) * 240); }
            else { stopTweensFor(pr); pr.p = 1; render(pr); }
          }
          setMode(pr, m);
        });
      };
      if (animate) run(); else instantly(run);
      setCaption(st.caption, !animate);
    }
    function stopTweensFor(pr) { tw = tw.filter(function (t) { return t.pr !== pr; }); }

    function clearIntro() { introTimers.forEach(clearTimeout); introTimers = []; }
    function intro() {
      if (!T && !layout()) { pending = cur; return; }
      clearIntro(); stopTweens(false);
      introOn = true; pending = null;
      instantly(function () { names.forEach(function (n) { setMode(parts[n], 'off'); parts[n].p = 0; render(parts[n]); }); });
      setCaption('', true);
      if (REDUCE) { finishIntro(); return; }
      var t = 200;
      (spec.draw || []).forEach(function (stage) {
        var list = (stage.parts || []).filter(function (n) { return parts[n]; }), longest = 0;
        var gap = stage.stagger != null ? stage.stagger : 140;   // SSP edit: a draw stage may set its own stagger (lattice dots)
        introTimers.push(setTimeout(function () {
          list.forEach(function (n, j) {
            var pr = parts[n];
            setMode(pr, 'on'); pr.p = 0; render(pr);
            tween(pr, 1, DRAW_MS[pr.type], j * gap);
          });
          if (stage.caption) setCaption(stage.caption);
        }, t));
        list.forEach(function (n, j) { longest = Math.max(longest, DRAW_MS[parts[n].type] + j * gap); });
        t += Math.max(560, longest * 0.8) + (stage.caption ? 240 : 0);
      });
      introTimers.push(setTimeout(function () { finishIntro(); }, t + 380));
      introEnd = performance.now() + t + 380;
    }
    function finishIntro(fast) {
      clearIntro();
      var was = introOn;
      introOn = false;
      names.forEach(function (n) {
        var pr = parts[n];
        if (!base[n]) return;
        if (pr.mode === 'off') setMode(pr, 'on');
        if (pr.p < 1) tween(pr, 1, fast ? 220 : DRAW_MS[pr.type]);
      });
      if (!was) return;
      if (pending != null) { var s = pending; pending = null; apply(s, true); }
      else if (opts.player) apply(cur, true);
      else setCaption('');
    }

    /* the derivation moves to step si. The first call after the intro waits for the intro to end;
       a later call (Next pressed during the intro) finishes the intro at once. */
    var firstWait = false;
    function step(si, instant) {
      if (!T && !layout()) { cur = si; pending = si; return; }
      if (instant) { clearIntro(); introOn = false; stopTweens(true); apply(si, false); return; }
      if (introOn) {
        if (!firstWait || pending === si) { firstWait = true; pending = si; return; }
        pending = si;
        finishIntro(true);
        return;
      }
      if (si === cur) return;
      apply(si, true);
    }

    var api = {
      layout: function () {
        var was = !!T;
        if (!layout()) return;
        if (!was) {
          if (pending != null) { var s = pending; pending = null; apply(s, false); }
          else if (!opts.player) { if (opts.autoIntro) watchIntro(); else apply(null, false); }
        }
      },
      intro: function () { firstWait = false; intro(); },
      introLeft: function () { return introOn ? Math.max(0, introEnd - performance.now()) : 0; },   // ms of the drawing intro still to run
      step: step,
      isFigure: true
    };

    /* the front figure draws itself the first time it comes into view */
    var watched = false;
    function watchIntro() {
      if (watched) return;
      watched = true;
      if (!('IntersectionObserver' in window)) { apply(null, false); return; }
      var io = new IntersectionObserver(function (en) {
        en.forEach(function (x) {
          if (!x.isIntersecting || x.intersectionRatio < 0.55) return;
          io.disconnect();
          intro();
        });
      }, { threshold: [0, 0.55, 0.8] });
      io.observe(host);
    }

    api.layout();
    return api;
  }

  SM.Figure = { mount: mount, has: function (diag) { return !!(diag && diag.figure && diag.figure.parts); } };
})();

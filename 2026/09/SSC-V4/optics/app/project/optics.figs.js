/* ══════════════════════════════════════════════════════════════════════════
   Optics — step diagrams.

   Almost every derivation in optics is a picture that has been turned into
   algebra, so each proof step that needs one carries a small diagram. The
   diagrams are SVG drawn from the same numbers the proof uses (Snell's law is
   SOLVED for the crossing point, a ray is refracted with the real formula), so
   a figure cannot disagree with the maths beside it.

   ONE diagram, BUILT UP: a figure has stages 1…n and a proof step asks for
   stage k. Everything that has appeared before is drawn quietly; what this
   step adds is drawn in the accent colour (class `new`). Reading the proof top
   to bottom, the picture accumulates exactly as the argument does.

   Data side: a proof step carries `fig: { k: '<kind>', s: <stage> }`, written
   in authoring/figs.py. This file only REGISTERS (it must not touch DOM, UI or
   Pool at load): the hooks are called at run time by flow-library.

   Registered kinds live in optics.figs.m1.js … m4.js via OFIG.add(kind, spec):
       spec = { n: <stages>, w?, h?, alt: (s) => text, build: (g, s) => void }
   ══════════════════════════════════════════════════════════════════════════ */

const OFIG = (function () {

  const NS = 'http://www.w3.org/2000/svg';
  const RAD = Math.PI / 180;
  const reg = {};

  function node(tag, attrs, text) {
    const n = document.createElementNS(NS, tag);
    if (attrs) for (const k in attrs) if (attrs[k] != null) n.setAttribute(k, attrs[k]);
    if (text != null) n.textContent = text;
    return n;
  }

  /* A drawing surface in USER units: x to the right, y UP, `sc` pixels per unit,
     (0,0) at pixel (ox, oy). Angles are degrees, counter-clockwise from +x, as on paper. */
  function Canvas(o) {
    const w = o.w || 320, h = o.h || 170, sc = o.sc || 1, ox = o.ox || 0, oy = o.oy == null ? h : o.oy;
    const svg = node('svg', { viewBox: '0 0 ' + w + ' ' + h, class: 'ofig-svg', role: 'img',
      'aria-label': o.alt || 'diagram', preserveAspectRatio: 'xMidYMid meet' });
    const X = x => ox + x * sc, Y = y => oy - y * sc;
    const add = n => svg.appendChild(n);
    const g = { svg: svg, X: X, Y: Y, w: w, h: h, sc: sc };

    g.line = (x1, y1, x2, y2, c) => add(node('line', { x1: X(x1), y1: Y(y1), x2: X(x2), y2: Y(y2), class: c || 'k' }));

    /* a ray/arrow; `at` is where the head sits along it (1 = at the end, .5 = mid-ray) */
    g.arrow = function (x1, y1, x2, y2, c, at) {
      const f = at == null ? 1 : at, cls = c || 'r';
      add(node('line', { x1: X(x1), y1: Y(y1), x2: X(x2), y2: Y(y2), class: cls }));
      const hx = x1 + (x2 - x1) * f, hy = y1 + (y2 - y1) * f;
      const a = Math.atan2(Y(y2) - Y(y1), X(x2) - X(x1)), L = 7, W = 3.2;
      const px = X(hx), py = Y(hy);
      const pts = [[px, py], [px - L * Math.cos(a) + W * Math.sin(a), py - L * Math.sin(a) - W * Math.cos(a)],
        [px - L * Math.cos(a) - W * Math.sin(a), py - L * Math.sin(a) + W * Math.cos(a)]];
      add(node('polygon', { points: pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' '),
        class: cls + ' head' }));
    };

    g.text = (x, y, str, c, anchor, dx, dy) => add(node('text', { x: X(x) + (dx || 0), y: Y(y) + (dy == null ? 3 : dy),
      class: c || 't', 'text-anchor': anchor || 'middle' }, str));
    g.dot = (x, y, c, r) => add(node('circle', { cx: X(x), cy: Y(y), r: r || 3, class: c || 'pt' }));
    g.circle = (x, y, r, c) => add(node('circle', { cx: X(x), cy: Y(y), r: r * sc, class: c || 'k nofill' }));
    g.rect = (x1, y1, x2, y2, c) => add(node('rect', { x: X(Math.min(x1, x2)), y: Y(Math.max(y1, y2)),
      width: Math.abs(x2 - x1) * sc, height: Math.abs(y2 - y1) * sc, class: c || 'fillk' }));
    g.poly = (pts, c) => add(node('polygon', { points: pts.map(p => X(p[0]).toFixed(1) + ',' + Y(p[1]).toFixed(1)).join(' '),
      class: c || 'fillk' }));
    g.path = (d, c) => add(node('path', { d: d, class: c || 'k' }));

    /* a polyline through user points */
    g.poline = function (pts, c) {
      g.path(pts.map((p, i) => (i ? 'L' : 'M') + X(p[0]).toFixed(1) + ' ' + Y(p[1]).toFixed(1)).join(' '), c || 'k nofill');
    };

    /* an arc of radius r (user units) about (cx,cy) from angle a0 to a1 (degrees, CCW) */
    g.arc = function (cx, cy, r, a0, a1, c) {
      const p = a => [X(cx + r * Math.cos(a * RAD)), Y(cy + r * Math.sin(a * RAD))];
      const s = p(a0), e = p(a1);
      g.path('M' + s[0].toFixed(1) + ' ' + s[1].toFixed(1) + ' A' + (r * sc).toFixed(1) + ' ' + (r * sc).toFixed(1) +
        ' 0 ' + (Math.abs(a1 - a0) > 180 ? 1 : 0) + ' ' + (a1 > a0 ? 0 : 1) + ' ' + e[0].toFixed(1) + ' ' + e[1].toFixed(1),
        (c || 'ang') + ' nofill');
    };

    /* an angle mark between two directions at a vertex, with a label just outside it */
    g.angle = function (cx, cy, r, a0, a1, label, c) {
      g.arc(cx, cy, r, a0, a1, c || 'ang');
      if (label) {
        const m = (a0 + a1) / 2 * RAD, rr = r + 8 / sc;
        g.text(cx + rr * Math.cos(m), cy + rr * Math.sin(m), label, (c || 'ang') === 'ang' ? 't sym' : 't sym new', 'middle', 0, 3);
      }
    };

    /* a dimension line with arrowheads both ends, offset perpendicular by `off` px */
    g.dim = function (x1, y1, x2, y2, label, off, c) {
      const dx = X(x2) - X(x1), dy = Y(y2) - Y(y1), len = Math.hypot(dx, dy) || 1;
      const nx = -dy / len * (off || 0), ny = dx / len * (off || 0);
      const p1 = [X(x1) + nx, Y(y1) + ny], p2 = [X(x2) + nx, Y(y2) + ny];
      const cls = c || 'dim';
      add(node('line', { x1: X(x1), y1: Y(y1), x2: p1[0], y2: p1[1], class: 'ext' }));
      add(node('line', { x1: X(x2), y1: Y(y2), x2: p2[0], y2: p2[1], class: 'ext' }));
      add(node('line', { x1: p1[0], y1: p1[1], x2: p2[0], y2: p2[1], class: cls }));
      const a = Math.atan2(p2[1] - p1[1], p2[0] - p1[0]);
      [[p1, 1], [p2, -1]].forEach(function (e) {
        const q = e[0], sg = e[1], L = 5, W = 2.2;
        const tip = [q[0], q[1]], b = [q[0] + sg * L * Math.cos(a), q[1] + sg * L * Math.sin(a)];
        add(node('polygon', { points: [tip, [b[0] + W * Math.sin(a), b[1] - W * Math.cos(a)],
          [b[0] - W * Math.sin(a), b[1] + W * Math.cos(a)]].map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' '), class: cls + ' head' }));
      });
      if (label) {
        const w = Math.max(10, String(label).length * 5.4 + 6);
        add(node('rect', { x: (p1[0] + p2[0]) / 2 - w / 2, y: (p1[1] + p2[1]) / 2 - 7, width: w, height: 14, class: 'dimbg' }));
      }
      if (label) add(node('text', { x: (p1[0] + p2[0]) / 2, y: (p1[1] + p2[1]) / 2 + 3.5,
        class: (c || 'dim') === 'dim' ? 't sym' : 't sym new', 'text-anchor': 'middle' }, label));
    };

    /* thin biconvex lens outline centred on x, spanning y0..y1 */
    g.lens = function (x, y0, y1, c, bulge) {
      const b = (bulge == null ? 7 : bulge) / sc, ym = (y0 + y1) / 2;
      g.path('M' + X(x) + ' ' + Y(y1) + ' Q' + X(x + b * 1.9) + ' ' + Y(ym) + ' ' + X(x) + ' ' + Y(y0) +
        ' Q' + X(x - b * 1.9) + ' ' + Y(ym) + ' ' + X(x) + ' ' + Y(y1) + 'Z', c || 'lens');
    };
    g.hatch = function (x1, x2, y, depth) {           /* mirror hatching below a horizontal line */
      for (let x = x1; x <= x2; x += 9 / sc) g.line(x, y, x - 6 / sc, y - (depth || 8) / sc, 'hatch');
    };
    return g;
  }

  /* ── registry, frames, hooks ─────────────────────────────────────────── */
  function add(kind, spec) { reg[kind] = spec; }

  function make(kind, s, opts) {
    const spec = reg[kind];
    if (!spec) return null;
    const st = Math.max(1, Math.min(spec.n || 1, s || 1));
    const g = Canvas({ w: spec.w, h: spec.h, sc: spec.sc, ox: spec.ox, oy: spec.oy,
      alt: spec.alt ? spec.alt(st) : kind });
    spec.build(g, st, opts || {});
    return g.svg;
  }

  /* the figure a proof step asks for */
  function forRung(rung, concept, i) {
    const f = rung && rung.fig;
    if (!f || !reg[f.k]) return null;
    const svg = make(f.k, f.s);
    return DOM.el('figure', { class: 'ofig', 'data-kind': f.k, 'data-stage': f.s }, [
      svg,
      f.cap ? DOM.el('figcaption', { class: 'ofig-cap', html: f.cap }) : null
    ]);
  }

  /* labels that fall outside the drawing's own frame (attached off-screen: getBBox needs layout) */
  function textOutside(svg, tag) {
    const host = document.createElement('div');
    host.style.cssText = 'position:absolute;left:-9999px;top:0;width:640px';
    host.appendChild(svg); document.body.appendChild(host);
    const vb = svg.viewBox.baseVal, out = [];
    Array.prototype.forEach.call(svg.querySelectorAll(tag || 'text'), function (n) {
      let b; try { b = n.getBBox(); } catch (e) { return; }
      if (b.width + b.height === 0) return;
      if (b.x < -6 || b.y < -6 || b.x + b.width > vb.width + 6 || b.y + b.height > vb.height + 6) out.push('"' + (n.textContent || '').slice(0, 26) + '" at (' + Math.round(b.x) + ',' + Math.round(b.y) + ',w' + Math.round(b.width) + ')');
    });
    document.body.removeChild(host);
    return out;
  }

  /* what the audit and the gallery walk over */
  const kinds = () => Object.keys(reg);
  const stages = k => (reg[k] && reg[k].n) || 1;

  /* Render every kind at every stage; report anything that is empty, has a NaN
     coordinate, or draws outside its own viewBox. Attached off-screen because
     getBBox needs layout. */
  function audit() {
    const host = document.createElement('div');
    host.style.cssText = 'position:absolute;left:-9999px;top:0;width:640px';
    document.body.appendChild(host);
    const problems = [];
    let count = 0;
    kinds().forEach(function (k) {
      for (let s = 1; s <= stages(k); s += 1) {
        count += 1;
        let svg;
        try { svg = make(k, s); } catch (e) { problems.push(k + '#' + s + ' threw ' + e.message); continue; }
        host.appendChild(svg);
        if (svg.childNodes.length < 4) problems.push(k + '#' + s + ' is nearly empty');
        const bad = Array.prototype.some.call(svg.querySelectorAll('*'), function (n) {
          return Array.prototype.some.call(n.attributes, a => /NaN|undefined|Infinity/.test(a.value));
        });
        if (bad) problems.push(k + '#' + s + ' has a NaN coordinate');
        const vb = svg.viewBox.baseVal;
        Array.prototype.forEach.call(svg.querySelectorAll('line,path,polygon,circle,rect,text'), function (n) {
          let b; try { b = n.getBBox(); } catch (e) { return; }
          if (b.width + b.height === 0) return;
          if (b.x < -14 || b.y < -14 || b.x + b.width > vb.width + 14 || b.y + b.height > vb.height + 14) {
            problems.push(k + '#' + s + ' <' + n.tagName + '> outside the frame (' + Math.round(b.x) + ',' + Math.round(b.y) + ',w' + Math.round(b.width) + ')' + (n.tagName === 'text' ? ' "' + n.textContent.slice(0, 30) + '"' : ''));
          }
        });
      }
    });
    document.body.removeChild(host);
    return { kinds: kinds().length, renders: count, problems: Array.from(new Set(problems)) };
  }

  /* every figure at every stage, for review (a page for a screenshot) */
  function gallery(hostEl, only) {
    kinds().filter(k => !only || only.split(',').indexOf(k) >= 0 || k.indexOf(only) === 0).forEach(function (k) {
      const row = document.createElement('div');
      row.className = 'ofig-row';
      const h = document.createElement('div');
      h.className = 'ofig-rowh';
      h.textContent = k;
      row.appendChild(h);
      for (let s = 1; s <= stages(k); s += 1) {
        const f = document.createElement('figure');
        f.className = 'ofig';
        f.appendChild(make(k, s));
        const c = document.createElement('figcaption');
        c.className = 'ofig-cap';
        c.textContent = k + ' · stage ' + s;
        f.appendChild(c);
        row.appendChild(f);
      }
      hostEl.appendChild(row);
    });
  }

  return { add: add, make: make, forRung: forRung, kinds: kinds, stages: stages, audit: audit, gallery: gallery,
    Canvas: Canvas, has: k => !!reg[k], RAD: RAD, textOutside: textOutside };
})();

/* the hook flow-library calls for each proof step */
PROJECT.hooks.rungFig = function (rung, concept, i) { return OFIG.forRung(rung, concept, i); };

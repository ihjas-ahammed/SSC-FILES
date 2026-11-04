/* ══════════════════════════════════════════════════════════════════════════
   Figure engine.

   Two kinds of figure now, and they are complementary rather than rivals:

     drawn      hand-built inline SVG (fig.library.js). Inherits the theme,
                scales to any width, animates, and a few take a control so the
                learner can move the parameter that matters (ε, or the window).
     rendered   the light/dark PNG pairs in `diagrams/`, indexed by concept in
                fig.diagrams.js. There are dozens of them and the app used to
                show none — a result with a picture sitting in the repository
                and nothing on screen is the worst of both.

   A concept shows its drawn figures first, then its rendered ones. Nothing is
   duplicated: where a drawn figure already exists for a result, the rendered
   one is still offered below it, because they show different things (the drawn
   figure is interactive, the rendered one is the finished diagram).

   This file is the plumbing — coordinate mapping, the frame, the controls, and
   the theme swap on a rendered diagram.
   ══════════════════════════════════════════════════════════════════════════ */

const Fig = (function () {

  const el = DOM.el;
  const s = DOM.svg;

  /* A plot area inside a viewBox: maths coordinates in, pixels out. */
  function plot(opts) {
    const o = Object.assign({ w: 330, h: 190, pad: 20, xr: [0, 1], yr: [0, 1] }, opts);
    const l = o.padL == null ? o.pad : o.padL;
    const b = o.padB == null ? o.pad : o.padB;
    const t = o.padT == null ? o.pad : o.padT;
    const r = o.padR == null ? o.pad : o.padR;
    const X = x => l + (x - o.xr[0]) / (o.xr[1] - o.xr[0]) * (o.w - l - r);
    const Y = y => (o.h - b) - (y - o.yr[0]) / (o.yr[1] - o.yr[0]) * (o.h - t - b);

    /* sampled path of a function, clipped to the y range */
    function curve(fn, from, to, steps) {
      const n = steps || 90;
      const a = from == null ? o.xr[0] : from;
      const z = to == null ? o.xr[1] : to;
      let d = '', pen = false;
      for (let i = 0; i <= n; i++) {
        const x = a + (z - a) * i / n;
        const y = fn(x);
        if (!isFinite(y) || y < o.yr[0] - 1e-9 || y > o.yr[1] + 1e-9) { pen = false; continue; }
        d += (pen ? 'L' : 'M') + X(x).toFixed(1) + ' ' + Y(y).toFixed(1) + ' ';
        pen = true;
      }
      return d.trim();
    }

    const svg = s('svg', {
      viewBox: '0 0 ' + o.w + ' ' + o.h, role: 'img',
      preserveAspectRatio: 'xMidYMid meet'
    });

    return {
      svg: svg, X: X, Y: Y, curve: curve, box: o,
      add(...kids) { kids.forEach(k => k && svg.appendChild(k)); return this; },
      /* axes with optional tick labels */
      axes(opts2) {
        const a = opts2 || {};
        const y0 = a.y0 == null ? o.yr[0] : a.y0;
        this.add(s('line', { class: 'axis', x1: X(o.xr[0]), y1: Y(y0), x2: X(o.xr[1]), y2: Y(y0) }));
        if (a.yAxis !== false) {
          this.add(s('line', { class: 'axis', x1: X(a.x0 == null ? o.xr[0] : a.x0), y1: Y(o.yr[0]),
            x2: X(a.x0 == null ? o.xr[0] : a.x0), y2: Y(o.yr[1]) }));
        }
        (a.ticks || []).forEach(function (tk) {
          svg.appendChild(s('line', { class: 'axis', x1: X(tk.x), y1: Y(y0) - 3, x2: X(tk.x), y2: Y(y0) + 3 }));
          svg.appendChild(s('text', { x: X(tk.x), y: Y(y0) + 15, 'text-anchor': 'middle', text: tk.t }));
        });
        return this;
      },
      label(x, y, text, cls, anchor) {
        this.add(s('text', { x: X(x), y: Y(y), class: cls || '', text: text,
          'text-anchor': anchor || 'middle' }));
        return this;
      },
      dot(x, y, cls, r2) {
        const c = s('circle', { cx: X(x), cy: Y(y), r: r2 || 3.6, class: 'pt ' + (cls || '') });
        this.add(c);
        return c;
      },
      line(x1, y1, x2, y2, cls) {
        const n = s('line', { x1: X(x1), y1: Y(y1), x2: X(x2), y2: Y(y2), class: cls || 'guide' });
        this.add(n);
        return n;
      },
      rect(x1, y1, x2, y2, cls) {
        const n = s('rect', { x: Math.min(X(x1), X(x2)), y: Math.min(Y(y1), Y(y2)),
          width: Math.abs(X(x2) - X(x1)), height: Math.abs(Y(y2) - Y(y1)), class: cls || 'band' });
        this.add(n);
        return n;
      },
      path(d, cls) {
        const n = s('path', { d: d, class: cls || 'curve' });
        this.add(n);
        return n;
      },
      /* stroke-draw entrance for a path */
      draw(node) {
        if (DOM.reduced() || !node.getTotalLength) return node;
        try {
          const len = Math.ceil(node.getTotalLength());
          node.style.setProperty('--len', len);
          node.classList.add('draw');
        } catch (e) { /* not yet in the document — skip the flourish */ }
        return node;
      }
    };
  }

  /* The frame: title, the drawing, an optional control, a caption. */
  function frame(def, opts) {
    const host = el('figure', { class: 'fig', style: { margin: 0 } });
    const body = el('div', {});
    const ctl = el('div', {});

    host.appendChild(el('div', { class: 'fig-h' }, [
      el('span', { class: 'kicker', text: def.title }),
      def.interactive ? el('span', { class: 'badge accent', text: 'drag it' }) : null
    ]));
    host.appendChild(body);
    host.appendChild(ctl);
    if (def.caption) {
      host.appendChild(el('figcaption', { class: 'fig-cap', html: def.caption }));
    }

    const api = {
      body: body,
      /* a labelled range control; onInput gets the numeric value */
      control(spec) {
        const input = el('input', {
          type: 'range', min: spec.min, max: spec.max, step: spec.step,
          value: spec.value, 'aria-label': spec.label
        });
        const out = el('label', { text: spec.format(Number(spec.value)) });
        input.addEventListener('input', function () {
          const v = Number(input.value);
          out.textContent = spec.format(v);
          spec.onInput(v);
        });
        DOM.clear(ctl);
        ctl.appendChild(el('div', { class: 'fig-ctl' }, [input, out]));
        return input;
      }
    };

    def.build(api, opts || {});
    return host;
  }

  /* ── rendered diagrams ────────────────────────────────────────────────── */
  const base = () => (typeof DIAGRAM_BASE !== 'undefined' ? DIAGRAM_BASE : 'diagrams/');

  const prettyTitle = b => b
    .replace(/^c\.[0-9.]+[a-z]?_/, '')
    .replace(/_/g, ' ')
    .replace(/^./, ch => ch.toUpperCase());

  function renderedFrame(basename, caption) {
    const light = base() + 'light/' + basename + '.png';
    const dark = base() + 'dark/' + basename + '.png';

    const img = el('img', {
      src: light, alt: caption || prettyTitle(basename),
      loading: 'lazy', decoding: 'async', class: 'fig-img'
    });

    /* One <img> whose src follows the theme. A <picture> with a
       prefers-color-scheme <source> was the obvious answer and is the wrong
       one: it can only see the OS setting, and this app has three theme
       settings of its own. So the swap watches the same `data-theme` attribute
       every other themed thing here reads. */
    function paint() {
      const wantDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = wantDark ? dark : light;
      if (img.getAttribute('src') !== next) img.setAttribute('src', next);
    }
    paint();
    if (window.MutationObserver) {
      const mo = new MutationObserver(paint);
      mo.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    }

    return el('figure', { class: 'fig fig-rendered', style: { margin: 0 } }, [
      el('div', { class: 'fig-h' }, [
        el('span', { class: 'kicker', text: prettyTitle(basename) }),
        el('span', { class: 'badge', text: 'diagram' })
      ]),
      el('div', { class: 'fig-imgwrap' }, [img])
    ]);
  }

  /* Which rendered diagrams belong to this concept. A concept may name them
     itself with `img: [...]`; otherwise the generated index answers by id. */
  function imagesFor(concept) {
    if (!concept) return [];
    if (concept.img && concept.img.length) {
      return Array.isArray(concept.img) ? concept.img : [concept.img];
    }
    return (typeof DIAGRAM_MAP !== 'undefined' && DIAGRAM_MAP[concept.id]) || [];
  }

  /* Mount every figure attached to a concept. Data may carry `figs: [id]`;
     the app's own map is the fallback while the pool is mock. */
  function forConcept(concept) {
    if (!concept) return [];
    const ids = (concept.figs && concept.figs.length)
      ? concept.figs
      : (FIGMAP[concept.id] || []);
    return ids.map(id => FIGLIB[id] ? { id: id, def: FIGLIB[id] } : null).filter(Boolean);
  }

  function mount(concept) {
    const figs = forConcept(concept);
    const imgs = imagesFor(concept);
    if (!figs.length && !imgs.length) return null;
    return el('div', { class: 'stack', style: { gap: '12px' } },
      figs.map(f => frame(f.def)).concat(imgs.map(b => renderedFrame(b))));
  }

  return { plot: plot, frame: frame, mount: mount, forConcept: forConcept,
    imagesFor: imagesFor, renderedFrame: renderedFrame, svg: s };
})();

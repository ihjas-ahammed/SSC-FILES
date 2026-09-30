/* ══════════════════════════════════════════════════════════════════════════
   Optics — behaviour only this app has.

   Loaded before flow-library, so it only REGISTERS hooks on PROJECT; nothing
   here may touch DOM, UI or Pool until a hook is called at run time.

   home  a live prism: a white ray enters an equilateral prism (apex A = 60°)
         and leaves dispersed into seven colours. The incidence angle sweeps
         slowly through the angle of minimum deviation, so the fan visibly
         narrows and widens — it is the real geometry, not a picture:

             r1 = asin(sin i / n),  r2 = A − r1,  e = asin(n sin r2),
             D  = i + e − A,        n(λ) = 1.50 + 0.020 / λ²  (λ in µm)

         Your progress sits under it as three rays: read, proofs, sections.
         It idles when off-screen or hidden and is still under
         prefers-reduced-motion.
   ══════════════════════════════════════════════════════════════════════════ */

PROJECT.hooks.home = function (ctx) {
  const el = DOM.el;
  const NS = 'http://www.w3.org/2000/svg';
  const W = 600, H = 190;
  const svgEl = (tag, attrs) => {
    const n = document.createElementNS(NS, tag);
    Object.keys(attrs || {}).forEach(k => n.setAttribute(k, attrs[k]));
    return n;
  };
  const A = 60 * Math.PI / 180, RAD = Math.PI / 180;
  const BANDS = [
    { l: 0.405, c: 'var(--sp-1)' }, { l: 0.45, c: 'var(--sp-2)' }, { l: 0.49, c: 'var(--sp-3)' },
    { l: 0.55, c: 'var(--sp-4)' }, { l: 0.59, c: 'var(--sp-5)' }, { l: 0.65, c: 'var(--sp-6)' },
    { l: 0.70, c: 'var(--sp-6)' }
  ];
  const nOf = l => 1.50 + 0.020 / (l * l);

  /* Everything is worked out in the prism's own frame (apex up, entry point
     P1), then rotated about P1 so the incoming beam is always horizontal —
     which is what physically turning the prism looks like. */
  const S = 78, HT = S * Math.sqrt(3) / 2;
  const P1 = [170, 62];                                     /* fixed entry point on the left face */
  const apex0 = [P1[0] + S / 4, P1[1] - HT / 2], bl0 = [P1[0] - S / 4, P1[1] + HT / 2],
        br0 = [P1[0] + 3 * S / 4, P1[1] + HT / 2];         /* P1 is the midpoint of apex–bl */

  const svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, role: 'img',
    'aria-label': 'A white ray entering a glass prism and splitting into the colours of the spectrum' });
  const prism = svgEl('polygon', { class: 'prism' });
  const beam = svgEl('line', { class: 'beam-in' });
  const inner = svgEl('line', { class: 'inner' });
  svg.appendChild(prism);
  svg.appendChild(inner);
  svg.appendChild(beam);
  const rays = BANDS.map(b => {
    const r = svgEl('line', { class: 'ray', stroke: b.c });
    svg.appendChild(r);
    return r;
  });

  /* screen coordinates (y down): rotate p about P1 by `th` radians, counter-clockwise on screen */
  const rot = (p, th) => {
    const dx = p[0] - P1[0], dy = -(p[1] - P1[1]);
    return [P1[0] + dx * Math.cos(th) - dy * Math.sin(th), P1[1] - (dx * Math.sin(th) + dy * Math.cos(th))];
  };
  const set = (node, a, b) => {
    node.setAttribute('x1', a[0].toFixed(1)); node.setAttribute('y1', a[1].toFixed(1));
    node.setAttribute('x2', b[0].toFixed(1)); node.setAttribute('y2', b[1].toFixed(1));
  };

  /* Prism frame: left face inward normal at −30°, right face outward normal at +30°. */
  function frame(t) {
    const i = (50 + 8 * Math.sin(t * 0.00055)) * RAD;      /* incidence on face 1 */
    const th = 30 * RAD - i;                                 /* rotation that makes the beam horizontal */
    const nMid = nOf(0.55);
    const dIn = -30 * RAD + Math.asin(Math.sin(i) / nMid);   /* mean internal direction */
    /* solve P1 + s·(cos dIn, −sin dIn) = apex0 + u·(br0 − apex0) */
    const dx = Math.cos(dIn), dy = -Math.sin(dIn);
    const fx = br0[0] - apex0[0], fy = br0[1] - apex0[1];
    const det = dx * (-fy) - dy * (-fx);
    const s = ((apex0[0] - P1[0]) * (-fy) - (apex0[1] - P1[1]) * (-fx)) / det;
    const P2 = [P1[0] + s * dx, P1[1] + s * dy];

    prism.setAttribute('points', [apex0, bl0, br0].map(p => rot(p, th).map(v => v.toFixed(1)).join(',')).join(' '));
    set(beam, [0, P1[1]], P1);
    const P2r = rot(P2, th);
    set(inner, P1, P2r);

    BANDS.forEach(function (b, k) {
      const n = nOf(b.l);
      const r1 = Math.asin(Math.sin(i) / n);
      const sinE = n * Math.sin(A - r1);
      const ray = rays[k];
      if (sinE > 1) { ray.setAttribute('opacity', 0); return; }     /* total internal reflection */
      ray.setAttribute('opacity', 0.92);
      const dOut = 30 * RAD - Math.asin(sinE) + th;                   /* in the rotated (screen) frame */
      set(ray, P2r, [P2r[0] + 330 * Math.cos(dOut), P2r[1] - 330 * Math.sin(dOut)]);
    });
  }

  const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  frame(1400);
  if (!still) {
    const start = performance.now();
    const tick = function (now) {
      if (!svg.isConnected && now - start > 1000) return;    /* the view was replaced */
      if (!document.hidden) frame(now - start + 1400);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const o = (ctx && ctx.overall) || { total: 0, l1: 0, l2: 0, l3: 0 };
  const band = (label, n, color) => el('div', {}, [
    el('b', { text: o.total ? DOM.pct(n, o.total) + '%' : '—' }),
    el('span', { text: label }),
    el('i', { style: { background: color, width: (o.total ? DOM.pct(n, o.total) : 0) + '%' } })
  ]);

  /* how far the student has got with the simulations, and the next one to try */
  const und = (function () {
    if (typeof OSIM === 'undefined') return null;
    const sm = OSIM.summary(), next = OSIM.ids().filter(id => !OSIM.rec(id).e)[0];
    let link = null;
    if (next) {
      const host = Pool.concepts(null, { includeExt: true }).filter(c => c.sim === next)[0];
      if (host) link = el('a', { href: Router.href('note/' + host.id), text: 'Next: ' + OSIM.get(next).title + ' ›' });
    }
    return el('div', { class: 'op-und' }, [
      el('div', {}, [el('b', { text: 'Understanding · ' }), 'simulations explored ', el('b', { text: sm.explored + '/' + sm.sims }),
        ' · predictions right first try ', el('b', { text: sm.right + '/' + sm.tasks }), ' (', sm.tried + ' tried', ')']),
      link
    ]);
  })();

  return el('section', { class: 'hero op-hero', 'aria-label': 'Optics' }, [
    el('div', { class: 'op-head' }, [
      el('div', { class: 'kicker', text: 'white light, split' }),
      el('span', { class: 'op-units', text: 'prism · A = 60°' })
    ]),
    svg,
    el('div', { class: 'op-exp' }, [
      band('read', o.l1, 'var(--sp-6)'),
      band('proofs', o.l2, 'var(--sp-5)'),
      band('sections', o.l3, 'var(--sp-4)')
    ]),
    und
  ]);
};

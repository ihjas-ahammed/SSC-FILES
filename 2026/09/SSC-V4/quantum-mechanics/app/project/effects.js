/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics — behaviour only this app has.

   Loaded before flow-library, so it only REGISTERS hooks on PROJECT; nothing
   here may touch DOM, UI or Pool until a hook is called at run time.

   home  a live Gaussian wave packet over the dashboard: Re ψ(x,t) as the
         carrier, |ψ|² as the filled envelope, drifting and breathing. Your
         progress is shown as three expectation values ⟨read⟩ ⟨proofs⟩
         ⟨sections⟩. The animation stops when the hero leaves the page, is
         skipped entirely under prefers-reduced-motion, and idles while the
         tab is hidden.
   ══════════════════════════════════════════════════════════════════════════ */

PROJECT.hooks.home = function (ctx) {
  const el = DOM.el;
  const NS = 'http://www.w3.org/2000/svg';
  const W = 600, H = 112, MID = 70, N = 150;
  const svgEl = (tag, attrs) => {
    const n = document.createElementNS(NS, tag);
    Object.keys(attrs).forEach(k => n.setAttribute(k, attrs[k]));
    return n;
  };

  const svg = svgEl('svg', { viewBox: '0 0 ' + W + ' ' + H, preserveAspectRatio: 'none',
    role: 'img', 'aria-label': 'An animated wave packet: the real part of psi and its probability density' });
  svg.appendChild(svgEl('line', { class: 'axis', x1: 0, y1: MID, x2: W, y2: MID }));
  const dens = svgEl('path', { class: 'dens' });
  const wave = svgEl('path', { class: 'wave' });
  svg.appendChild(dens);
  svg.appendChild(wave);

  /* ψ(x,t) = A·exp(-(x-x0)²/2σ²)·cos(kx - ωt); σ breathes a little so the
     packet visibly spreads and refocuses, x0 drifts across and back. */
  function frame(t) {
    const x0 = W * (0.5 + 0.28 * Math.sin(t * 0.00023));
    const sigma = 58 + 14 * Math.sin(t * 0.00041);
    const k = 0.115, w = 0.0042;
    let re = '', d = 'M0 ' + MID;
    for (let i = 0; i <= N; i++) {
      const x = (i / N) * W;
      const env = Math.exp(-((x - x0) * (x - x0)) / (2 * sigma * sigma));
      const y = MID - 46 * env * Math.cos(k * x - w * t);
      re += (i ? 'L' : 'M') + x.toFixed(1) + ' ' + y.toFixed(1);
      d += 'L' + x.toFixed(1) + ' ' + (MID - 58 * env * env).toFixed(1);
    }
    wave.setAttribute('d', re);
    dens.setAttribute('d', d + 'L' + W + ' ' + MID + 'Z');
  }

  const still = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  frame(0);
  if (!still) {
    const start = performance.now();
    const tick = function (now) {
      if (!svg.isConnected && now - start > 1000) return;   /* the view was replaced */
      if (!document.hidden) frame(now - start);
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  const o = (ctx && ctx.overall) || { total: 0, l1: 0, l2: 0, l3: 0 };
  const exp = (label, n) => el('div', {}, [
    el('b', { text: o.total ? DOM.pct(n, o.total) + '%' : '—' }),
    el('span', { text: '⟨' + label + '⟩' })
  ]);

  return el('section', { class: 'hero qm-hero', 'aria-label': 'Quantum Mechanics' }, [
    el('div', { class: 'qm-head' }, [
      el('div', { class: 'kicker', text: 'state of the system' }),
      el('span', { class: 'qm-units', text: 'ħ = 1 · m = 1' })
    ]),
    svg,
    el('div', { class: 'qm-legend' }, [
      el('span', {}, [el('i', { style: { background: 'var(--qm-wave)' } }), 'Re ψ(x,t)']),
      el('span', {}, [el('i', { style: { background: 'var(--qm-dens)' } }), '|ψ|²'])
    ]),
    el('div', { class: 'qm-exp' }, [
      exp('read', o.l1),
      exp('proofs', o.l2),
      exp('sections', o.l3)
    ])
  ]);
};

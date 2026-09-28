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

/* Keep diagram viewing local to QM; the shared figure renderer stays reusable. */
PROJECT.hooks.ready = function () {
  if (document.querySelector('.qm-diagram-viewer')) return;
  const el = DOM.el;
  let source = null, scale = 1, fitWidth = 1, previousOverflow = '';
  const picture = el('img', { alt: '', draggable: 'false' });
  const viewport = el('div', { class: 'qm-diagram-viewport', tabindex: '0',
    'aria-label': 'Diagram; scroll to explore when zoomed' }, [picture]);
  const status = el('output', { 'aria-live': 'polite', text: '100%' });
  const button = (text, label, action) => {
    const b = el('button', { type: 'button', text: text, 'aria-label': label });
    b.addEventListener('click', action);
    return b;
  };
  const zoomOut = button('−', 'Zoom out', () => zoom(scale - 0.25));
  const zoomIn = button('+', 'Zoom in', () => zoom(scale + 0.25));
  const dialog = el('dialog', { class: 'qm-diagram-viewer', 'aria-label': 'Diagram viewer' }, [
    el('div', { class: 'qm-diagram-controls' }, [zoomOut, status, zoomIn,
      button('Reset', 'Reset zoom to fit', () => { zoom(1); viewport.scrollTo(0, 0); }),
      button('Close', 'Close diagram viewer', () => dialog.close())]), viewport
  ]);
  document.body.appendChild(dialog);
  function zoom(next) {
    scale = Math.min(4, Math.max(1, next));
    picture.style.width = (fitWidth * scale) + 'px';
    status.textContent = Math.round(scale * 100) + '%';
    zoomOut.disabled = scale <= 1;
    zoomIn.disabled = scale >= 4;
  }
  function fit() {
    if (!dialog.open || !picture.naturalWidth) return;
    fitWidth = Math.min(picture.naturalWidth, viewport.clientWidth,
      viewport.clientHeight * picture.naturalWidth / picture.naturalHeight);
    zoom(scale);
  }
  picture.addEventListener('load', fit);
  window.addEventListener('resize', fit);
  function open(img) {
    source = img;
    scale = 1;
    picture.alt = img.alt;
    picture.src = img.src;
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    fit();
    viewport.scrollTo(0, 0);
  }
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    if (source && source.isConnected) source.focus({ preventScroll: true });
    source = null;
  });
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  function enhance(root) {
    const imgs = root.matches && root.matches('.fig-img') ? [root] :
      root.querySelectorAll ? root.querySelectorAll('.fig-img') : [];
    imgs.forEach(img => {
      img.tabIndex = 0;
      img.setAttribute('role', 'button');
      img.setAttribute('aria-haspopup', 'dialog');
      img.setAttribute('aria-label', 'Enlarge diagram: ' + img.alt);
      img.title = 'Click to enlarge';
    });
  }
  enhance(document.body);
  new MutationObserver(records => records.forEach(record =>
    record.addedNodes.forEach(enhance))).observe(document.body, { childList: true, subtree: true });
  document.addEventListener('click', event => {
    if (event.target.matches('.fig-img')) open(event.target);
  });
  document.addEventListener('keydown', event => {
    if (event.target.matches('.fig-img') && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      open(event.target);
    }
  });
  new MutationObserver(() => {
    if (source) picture.src = source.src.replace(/\/(light|dark)\//,
      document.documentElement.dataset.theme === 'dark' ? '/dark/' : '/light/');
  }).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
};

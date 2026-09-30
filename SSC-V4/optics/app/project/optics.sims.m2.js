/* Optics simulations — Module II (interference). */

(function () {
  const D = Math.PI / 180, f0 = v => String(Math.round(v)), f1 = v => (Math.round(v * 10) / 10).toFixed(1), f2 = v => (Math.round(v * 100) / 100).toFixed(2), f3 = v => (Math.round(v * 1000) / 1000).toFixed(3);
  const U = OSIM.util;

  /* ── two sinusoids: the phasor sum ───────────────────────────────────── */
  OSIM.add('phasors', {
    title: 'adding two waves as arrows',
    blurb: 'Each wave is an arrow of length <b>a</b>; the second is turned by the phase difference <b>δ</b>. The resultant\'s length² is the intensity: it swings between (a₁ + a₂)² and (a₁ − a₂)².',
    params: [{ k: 'a1', label: 'amplitude a₁', min: 0.5, max: 2, step: 0.1, value: 1, fmt: f1 }, { k: 'a2', label: 'amplitude a₂', min: 0.5, max: 2, step: 0.1, value: 1, fmt: f1 }, { k: 'delta', label: 'phase difference δ (°)', min: 0, max: 360, step: 5, value: 60, fmt: f0 }],
    watch: { k: 'delta', from: 0, to: 360 },
    draw(g, p) {
      const O = [60, 85], k = 42, v1 = [p.a1 * k, 0], v2 = [p.a2 * k * Math.cos(p.delta * D), p.a2 * k * Math.sin(p.delta * D)], T = [O[0] + v1[0], O[1]];
      g.line(O[0] - 10, O[1], 190, O[1], 'k dash'); g.arrow(O[0], O[1], O[0] + v1[0], O[1], 'r', 1);
      g.arrow(T[0], T[1], T[0] + v2[0], T[1] + v2[1], 'r2', 1); g.arrow(O[0], O[1], T[0] + v2[0], T[1] + v2[1], 'r new', 1);
      g.angle(T[0], T[1], 16, 0, p.delta % 360 || 0.1, 'δ', 'ang new');
      const box = { x0: 218, x1: 298, y0: 30, y1: 140 }, top = Math.pow(p.a1 + p.a2, 2), pts = []; for (let d = 0; d <= 360; d += 6) pts.push([d, p.a1 * p.a1 + p.a2 * p.a2 + 2 * p.a1 * p.a2 * Math.cos(d * D)]);
      g.rect(box.x0 - 10, box.y0 - 14, box.x1 + 6, box.y1 + 10, 'fillk'); const m = U.plot(g, box, pts, 'curve old', top * 1.02, 0); g.dot(m.px(p.delta), m.py(p.a1 * p.a1 + p.a2 * p.a2 + 2 * p.a1 * p.a2 * Math.cos(p.delta * D)), 'pt new', 3.2);
      g.text(box.x0, box.y1 + 4, 'I against δ', 't mute', 'start');
    },
    read: p => { const a2 = p.a1 * p.a1 + p.a2 * p.a2 + 2 * p.a1 * p.a2 * Math.cos(p.delta * D); return [['a', f2(Math.sqrt(Math.max(0, a2)))], ['I = a²', f2(a2)], ['visibility', f2(2 * p.a1 * p.a2 / (p.a1 * p.a1 + p.a2 * p.a2))]]; },
    law: p => { const x = p.a1 + p.a2 * Math.cos(p.delta * D), y = p.a2 * Math.sin(p.delta * D); return { lhs: x * x + y * y, rhs: p.a1 * p.a1 + p.a2 * p.a2 + 2 * p.a1 * p.a2 * Math.cos(p.delta * D), text: '|a₁ + a₂e^{iδ}|² = ' + f3(x * x + y * y) + ' = a₁² + a₂² + 2a₁a₂cosδ' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { a1: 1, a2: 1, delta: 0 }, q: 'Two equal waves (a₁ = a₂ = 1) in phase (δ = 0). What is the intensity I = a² of the sum?', unit: '', tol: { abs: 0.1 }, ans: p => Math.pow(p.a1 + p.a2, 2),
        why: () => 'a = 1 + 1 = 2, so <b>I = 4</b>: four times one wave alone, not two — interference concentrates the energy.' },
      { lv: 2, type: 'set', key: 'delta', setup: { a1: 1, a2: 1 }, q: 'Drag <b>δ</b> to the phase difference at which two equal waves <b>cancel completely</b>.', tol: { abs: 10 }, goal: () => 180,
        why: () => 'a² = 2 + 2cosδ = 0 needs cosδ = −1: <b>δ = 180°</b> (a path difference of λ/2).' },
      { lv: 3, type: 'num', setup: { a1: 1, a2: 0.5 }, q: 'Unequal waves: a₁ = 1, a₂ = 0.5. What is the fringe visibility V = (I_max − I_min)/(I_max + I_min)?', unit: '', tol: { abs: 0.02 }, ans: p => 2 * p.a1 * p.a2 / (p.a1 * p.a1 + p.a2 * p.a2),
        why: (p, a) => 'I_max = 1.5² = 2.25, I_min = 0.5² = 0.25 → V = 2/2.5 = <b>' + f2(a) + '</b>. The weaker beam never lets the dark fringes reach zero.' }
    ]
  });

  /* ── Young's double slit ─────────────────────────────────────────────── */
  const yBeta = p => p.lam * p.D / (p.d * 1000);                     /* mm */
  const yDelta = (y, p) => { const D_ = p.D * 1000, d = p.d; return Math.hypot(D_, y + d / 2) - Math.hypot(D_, y - d / 2); };   /* mm, exact */
  OSIM.add('young', {
    title: "Young's fringes",
    blurb: 'Two slits <b>d</b> apart, a screen <b>D</b> away. Longer wavelength or a distant screen spreads the fringes; wider slit separation squeezes them: <b>β = λD/d</b>.',
    params: [{ k: 'lam', label: 'wavelength λ (nm)', min: 400, max: 700, step: 10, value: 600, fmt: f0 }, { k: 'd', label: 'slit separation d (mm)', min: 0.2, max: 1, step: 0.05, value: 0.5, fmt: f2 }, { k: 'D', label: 'screen distance D (m)', min: 0.5, max: 2, step: 0.1, value: 1, fmt: f1 }],
    watch: { k: 'lam', from: 400, to: 700 },
    draw(g, p) {
      const b = yBeta(p), win = 6, box = { x0: 30, x1: 310, y0: 46, y1: 100 }, pts = [];
      for (let i = 0; i <= 400; i += 1) { const y = -win + 2 * win * i / 400; pts.push([y, Math.pow(Math.cos(Math.PI * y / b), 2)]); }
      const m = U.plot(g, box, pts, 'curve', 1, 0), col = U.rgb(p.lam);
      for (let i = 0; i < 140; i += 1) {
        const y = -win + 2 * win * (i + 0.5) / 140, I = Math.pow(Math.cos(Math.PI * y / b), 2), r = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        r.setAttribute('x', g.X(box.x0 + i * 2)); r.setAttribute('y', g.Y(146)); r.setAttribute('width', 2.1); r.setAttribute('height', 26);
        r.setAttribute('fill', col); r.setAttribute('opacity', (I * 0.95 + 0.03).toFixed(3)); g.svg.appendChild(r);
      }
      g.text(box.x0, 154, 'what the screen shows', 't mute', 'start'); g.text(box.x1, 106, 'intensity (mm across the screen)', 't mute', 'end');
      [-6, -3, 0, 3, 6].forEach(v => g.text(m.px(v), box.y0 - 12, v + '', 't mute'));
      g.dim(m.px(b * 2), box.y0 - 26, m.px(b * 3), box.y0 - 26, 'β = ' + f2(b) + ' mm', 0, 'dim new');
    },
    read: p => [['β = λD/d', f2(yBeta(p)) + ' mm'], ['fringes in 12 mm', f1(12 / yBeta(p))], ['1st dark at', f2(yBeta(p) / 2) + ' mm']],
    law: p => { let lo = 0, hi = 30 * yBeta(p); for (let i = 0; i < 60; i += 1) { const m = (lo + hi) / 2; if (yDelta(m, p) < p.lam * 1e-6) lo = m; else hi = m; } return { lhs: (lo + hi) / 2, rhs: yBeta(p), text: 'exact path difference S₂P − S₁P = λ at y = ' + f3((lo + hi) / 2) + ' mm;  λD/d = ' + f3(yBeta(p)) + ' mm' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { lam: 600, d: 0.5, D: 1 }, q: 'Read the apparatus: λ = 600 nm, d = 0.5 mm, D = 1.0 m. What is the fringe width β?', unit: 'mm', tol: { rel: 0.03 }, ans: yBeta,
        why: (p, a) => 'β = λD/d = 600×10⁻⁹ × 1.0 / 0.5×10⁻³ = <b>' + f2(a) + ' mm</b>.' },
      { lv: 2, type: 'num', setup: { lam: 500, d: 0.25, D: 1.5 }, q: 'Now λ = 500 nm, d = 0.25 mm, D = 1.5 m. Find β.', unit: 'mm', tol: { rel: 0.03 }, ans: yBeta,
        why: (p, a) => 'β = 500×10⁻⁹ × 1.5 / 0.25×10⁻³ = <b>' + f2(a) + ' mm</b>.' },
      { lv: 3, type: 'num', setup: { lam: 600, d: 0.5, D: 1 }, q: 'The whole apparatus (λ = 600 nm in air, d = 0.5 mm, D = 1.0 m) is sunk in water, n = 1.33. What is the new fringe width?', unit: 'mm', tol: { rel: 0.04 }, ans: p => yBeta(p) / 1.33,
        why: (p, a) => 'In water the wavelength is λ/n = 451 nm, so β = 1.20/1.33 = <b>' + f2(a) + ' mm</b>: the fringes shrink.' }
    ]
  });

  /* ── a plate over one slit ───────────────────────────────────────────── */
  const pShift = p => (p.mu - 1) * p.t / 0.6;                         /* fringes, λ = 600 nm, t in µm */
  OSIM.add('plate', {
    title: 'a plate over one slit', w: 370,
    blurb: 'A thin plate of index <b>μ</b> and thickness <b>t</b> delays one beam by (μ − 1)t. The central fringe slides toward the covered slit until the geometry cancels the delay: N = (μ − 1)t/λ fringes.',
    params: [{ k: 't', label: 'thickness t (µm)', min: 1, max: 20, step: 0.2, value: 6, fmt: f1 }, { k: 'mu', label: 'index μ', min: 1.2, max: 1.8, step: 0.02, value: 1.5, fmt: f2 }],
    watch: { k: 't', from: 1, to: 20 },
    draw(g, p) {
      const beta = 26, N = pShift(p), sh = (N * beta) % (beta * 6), cy = 85, bx = 60, sx = 250, d = 60;
      g.line(bx, 10, bx, cy - d / 2 - 4, 'k thick'); g.line(bx, cy - d / 2 + 4, bx, cy + d / 2 - 4, 'k thick'); g.line(bx, cy + d / 2 + 4, bx, 165, 'k thick'); g.line(sx, 10, sx, 165, 'k thick');
      g.rect(bx + 4, cy + d / 2 - 9, bx + 22, cy + d / 2 + 9, 'fillk new'); g.text(bx + 13, cy + d / 2 + 18, 'μ, t', 't sym');
      const box = { x0: 285, x1: 330, y0: 15, y1: 155 };
      for (let k = -3; k <= 3; k += 1) { g.rect(box.x0, cy + k * beta - 4, box.x0 + 14, cy + k * beta + 4, 'fillk'); const y = cy + k * beta + (sh > beta * 3 ? sh - beta * 6 : sh); if (Math.abs(y - cy) < 80) g.rect(box.x0 + 22, y - 4, box.x0 + 38, y + 4, 'fillk new'); }
      g.text(box.x0 + 7, 8, 'before', 't mute'); g.text(box.x0 + 30, 158, 'after', 't new'); g.line(bx, cy, sx, cy, 'k dash'); g.dot(sx, cy, 'pt', 3);
      g.text(160, 150, 'shift: N = (μ − 1)t/λ = ' + f2(N) + ' fringes', 't new', 'middle');
    },
    read: p => [['extra path (μ−1)t', f2((p.mu - 1) * p.t) + ' µm'], ['shift N (λ = 600 nm)', f2(pShift(p)) + ' fringes'], ['shift Δx (β = 1.2 mm)', f2(pShift(p) * 1.2) + ' mm']],
    law: p => { const d = 0.5, D = 1000, tt = (p.mu - 1) * p.t * 1e-3; let lo = 0, hi = 4000; const Dl = y => Math.hypot(D, y + d / 2) - Math.hypot(D, y - d / 2); for (let i = 0; i < 70; i += 1) { const m = (lo + hi) / 2; if (Dl(m) < tt) lo = m; else hi = m; } const y0 = (lo + hi) / 2;
      return { lhs: y0 / 1.2, rhs: pShift(p), text: 'exact geometry puts the new centre at ' + f2(y0) + ' mm = ' + f2(y0 / 1.2) + ' fringes;  (μ − 1)t/λ = ' + f2(pShift(p)) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { mu: 1.5, t: 6 }, q: 'A plate with μ = 1.5 and t = 6 µm covers one slit (λ = 600 nm). By how many fringes does the pattern shift?', unit: 'fringes', tol: { abs: 0.2 }, ans: pShift,
        why: (p, a) => 'N = (μ − 1)t/λ = 0.5 × 6000 nm / 600 nm = <b>' + f0(a) + '</b>.' },
      { lv: 2, type: 'set', key: 't', setup: { mu: 1.5 }, q: 'With μ = 1.5, drag <b>t</b> so the pattern shifts by exactly <b>8 fringes</b>.', tol: { abs: 0.4 }, goal: p => 8 * 0.6 / (p.mu - 1),
        why: (p, a) => 't = Nλ/(μ − 1) = 8 × 0.6 / 0.5 = <b>' + f1(a) + ' µm</b>.' },
      { lv: 3, type: 'num', q: 'A mica sheet (μ = 1.58) over one slit shifts the fringes by 7 fringes (λ = 600 nm). How thick is it?', unit: 'µm', tol: { rel: 0.04 }, ans: () => 7 * 0.6 / 0.58,
        why: (p, a) => 't = Nλ/(μ − 1) = 7 × 0.6 / 0.58 = <b>' + f2(a) + ' µm</b>.' }
    ]
  });

  /* ── thin film colours ───────────────────────────────────────────────── */
  const fCos = p => { const r = Math.asin(Math.sin(p.i * D) / p.n); return Math.cos(r); };
  const fRefl = (lam, p) => Math.pow(Math.sin(2 * Math.PI * p.n * p.t * fCos(p) / lam), 2);
  OSIM.add('film', {
    title: 'the colours of a thin film',
    blurb: 'White light on a thin film: each wavelength is reflected strongly where <b>2nt cos r = (m + ½)λ</b> and suppressed where it equals mλ. Change the thickness or the angle and the reflected colour slides through the spectrum.',
    params: [{ k: 't', label: 'thickness t (nm)', min: 50, max: 600, step: 10, value: 200, fmt: f0 }, { k: 'n', label: 'index n', min: 1.2, max: 2, step: 0.05, value: 1.5, fmt: f2 }, { k: 'i', label: 'angle of incidence i (°)', min: 0, max: 60, step: 5, value: 0, fmt: f0 }],
    watch: { k: 't', from: 60, to: 580 },
    draw(g, p) {
      const yT = 130, tt = 30, i = p.i * D, r = Math.asin(Math.sin(i) / p.n), Bx = 100;
      g.rect(20, yT - tt, 190, yT, 'fillw'); g.line(20, yT, 190, yT, 'k thick'); g.line(20, yT - tt, 190, yT - tt, 'k thick'); g.text(24, yT - tt / 2, 'film n', 't sym', 'start');
      const C = [Bx + tt * Math.tan(r), yT - tt], Dp = [Bx + 2 * tt * Math.tan(r), yT];
      g.arrow(Bx - 34 * Math.sin(i), yT + 34 * Math.cos(i), Bx, yT, 'r', 0.5); g.arrow(Bx, yT, Bx + 34 * Math.sin(i), yT + 34 * Math.cos(i), 'r new', 0.6); g.line(Bx, yT, C[0], C[1], 'r2'); g.line(C[0], C[1], Dp[0], Dp[1], 'r2'); g.arrow(Dp[0], Dp[1], Dp[0] + 34 * Math.sin(i), Dp[1] + 34 * Math.cos(i), 'r2', 0.6);
      const x0 = 30, x1 = 310, y0 = 42, bars = 70;
      g.text(x0, 78, 'reflected colours (400 → 700 nm)', 't mute', 'start');
      for (let k = 0; k < bars; k += 1) { const lam = 400 + 300 * (k + 0.5) / bars, I = fRefl(lam, p); const rc = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); rc.setAttribute('x', g.X(x0 + k * (x1 - x0) / bars)); rc.setAttribute('y', g.Y(y0 + 24)); rc.setAttribute('width', ((x1 - x0) / bars + 0.6).toFixed(2)); rc.setAttribute('height', 24); rc.setAttribute('fill', U.rgb(lam)); rc.setAttribute('opacity', (0.06 + 0.94 * I).toFixed(3)); g.svg.appendChild(rc); }
      const pts = []; for (let lam = 400; lam <= 700; lam += 5) pts.push([lam, fRefl(lam, p)]); U.plot(g, { x0: x0, x1: x1, y0: y0 - 34, y1: y0 - 8 }, pts, 'curve', 1, 0);
    },
    read: p => { let best = 400, bv = -1; for (let l = 400; l <= 700; l += 1) { const v = fRefl(l, p); if (v > bv) { bv = v; best = l; } } return [['2nt cos r', f0(2 * p.n * p.t * fCos(p)) + ' nm'], ['strongest colour', f0(best) + ' nm'], ['cos r', f2(fCos(p))]]; },
    law: p => { const i = p.i * D, r = Math.asin(Math.sin(i) / p.n), tt = p.t, B = [0, 0], C = [tt * Math.tan(r), -tt], Dq = [2 * tt * Math.tan(r), 0], u = [Math.sin(i), -Math.cos(i)].map(v => v * 1);
      const inFilm = p.n * (Math.hypot(C[0] - B[0], C[1] - B[1]) + Math.hypot(Dq[0] - C[0], Dq[1] - C[1])); const dir = [Math.sin(i), Math.cos(i)], prj = Dq[0] * dir[0]; const geom = inFilm - prj; return { lhs: geom, rhs: 2 * p.n * p.t * fCos(p), text: 'geometric path difference (in film − to N) = ' + f1(geom) + ' nm = 2nt cos r = ' + f1(2 * p.n * p.t * fCos(p)) + ' nm' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { n: 1.33, t: 110, i: 0 }, q: 'A soap film (n = 1.33) is 110 nm thick, viewed at normal incidence. At what wavelength (nm) is the reflection strongest (take m = 0)?', unit: 'nm', tol: { rel: 0.02 }, ans: p => 4 * p.n * p.t,
        why: (p, a) => '2nt = λ/2 → λ = 4nt = 4 × 1.33 × 110 = <b>' + f0(a) + ' nm</b> (yellow-orange).' },
      { lv: 2, type: 'set', key: 't', setup: { n: 1.4, i: 0 }, q: 'With n = 1.4 at normal incidence, drag <b>t</b> so that <b>green light (550 nm)</b> is reflected most strongly (m = 0).', tol: { abs: 10 }, goal: p => 550 / (4 * p.n),
        why: (p, a) => 't = λ/4n = 550/5.6 = <b>' + f0(a) + ' nm</b>.' },
      { lv: 3, type: 'num', setup: { n: 1.5, t: 120, i: 45 }, q: 'The same kind of film (n = 1.5, t = 120 nm) is now viewed at 45°. At what wavelength (nm) is reflection strongest (m = 0)?', unit: 'nm', tol: { rel: 0.02 }, ans: p => 4 * p.n * p.t * fCos(p),
        why: (p, a) => 'sin r = sin 45°/1.5 → cos r = 0.882; λ = 4nt cos r = <b>' + f0(a) + ' nm</b>: tilting the film shifts the colour to shorter wavelengths.' }
    ]
  });

  /* ── Newton's rings ──────────────────────────────────────────────────── */
  const rD = (n, p) => 2 * Math.sqrt(n * p.lam * 1e-9 * p.R) * 1000;    /* mm */
  OSIM.add('rings', {
    title: "Newton's rings",
    blurb: 'A lens on a flat plate: the air gap grows as r²/2R, so dark rings appear at <b>r² = nλR</b> — evenly in r², crowding together outward. Change λ or R and count how the rings respond.',
    params: [{ k: 'lam', label: 'wavelength λ (nm)', min: 400, max: 700, step: 10, value: 590, fmt: f0 }, { k: 'R', label: 'radius of curvature R (m)', min: 0.5, max: 3, step: 0.1, value: 1, fmt: f1 }],
    watch: { k: 'R', from: 0.5, to: 3 },
    draw(g, p) {
      const c = [100, 85], sc = 14;
      for (let n = 1; n <= 12; n += 1) g.circle(c[0], c[1], rD(n, p) / 2 * sc * 1.0, 'k nofill' + (n === 5 ? ' new thick' : ''));
      g.dot(c[0], c[1], 'pt', 3.4); g.text(c[0], 12, 'dark centre, then rings', 't mute');
      const box = { x0: 215, x1: 315, y0: 30, y1: 140 }, pts = []; for (let n = 0; n <= 12; n += 1) pts.push([n, Math.pow(rD(n, p), 2)]);
      const top = Math.pow(rD(12, p), 2); g.rect(box.x0 - 12, box.y0 - 14, box.x1 + 8, box.y1 + 12, 'fillk'); const m = U.plot(g, box, pts, 'curve', top * 1.02, 0); g.dot(m.px(5), m.py(Math.pow(rD(5, p), 2)), 'pt new', 3.2);
      g.text(box.x0, box.y1 + 6, 'D² against n', 't mute', 'start');
    },
    read: p => [['D₅', f2(rD(5, p)) + ' mm'], ['D₁₀', f2(rD(10, p)) + ' mm'], ['r₁₀', f2(rD(10, p) / 2) + ' mm']],
    law: p => { const n = 10, lam = p.lam * 1e-9, R = p.R; let lo = 0, hi = 0.05 * Math.min(1, R * 0 + 0.05); hi = Math.min(R * 0.9, 0.02); for (let i = 0; i < 70; i += 1) { const m = (lo + hi) / 2, t = R - Math.sqrt(R * R - m * m); if (2 * t < n * lam) lo = m; else hi = m; } return { lhs: (lo + hi) / 2 * 2000, rhs: rD(n, p), text: 'exact lens geometry gives D₁₀ = ' + f3((lo + hi) / 2 * 2000) + ' mm;  2√(nλR) = ' + f3(rD(n, p)) + ' mm' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { lam: 590, R: 1 }, q: 'R = 1.0 m, λ = 590 nm. What is the diameter of the <b>5th dark ring</b>?', unit: 'mm', tol: { rel: 0.03 }, ans: p => rD(5, p),
        why: (p, a) => 'D² = 4nλR = 4 × 5 × 590×10⁻⁹ × 1 → D = <b>' + f2(a) + ' mm</b>.' },
      { lv: 2, type: 'num', setup: { lam: 550, R: 0.8 }, q: 'R = 0.8 m, λ = 550 nm. What is the <b>radius</b> of the 10th dark ring?', unit: 'mm', tol: { rel: 0.03 }, ans: p => rD(10, p) / 2,
        why: (p, a) => 'r² = nλR = 10 × 550×10⁻⁹ × 0.8 → r = <b>' + f2(a) + ' mm</b>.' },
      { lv: 3, type: 'num', setup: { lam: 590, R: 1 }, q: 'The gap between lens and plate is filled with water (μ = 1.33). What is the diameter of the 5th dark ring now (λ = 590 nm, R = 1.0 m)?', unit: 'mm', tol: { rel: 0.03 }, ans: p => rD(5, p) / Math.sqrt(1.33),
        why: (p, a) => 'The wavelength in the gap is λ/μ, so D ∝ 1/√μ: 3.44/√1.33 = <b>' + f2(a) + ' mm</b> — the rings shrink.' }
    ]
  });

  /* ── the Michelson interferometer ────────────────────────────────────── */
  OSIM.add('michelson', {
    title: 'counting fringes with a mirror',
    blurb: 'Move one mirror of a Michelson interferometer. Every <b>λ/2</b> of travel adds one fringe to the centre, so counting fringes measures a distance in wavelengths: N = 2d/λ.',
    params: [{ k: 'd', label: 'mirror moved d (µm)', min: 0, max: 100, step: 0.5, value: 20, fmt: f1 }, { k: 'lam', label: 'wavelength λ (nm)', min: 450, max: 650, step: 10, value: 500, fmt: f0 }],
    watch: { k: 'd', from: 0, to: 60 },
    draw(g, p) {
      const N = 2 * p.d / (p.lam / 1000), c = [95, 85];
      for (let m = Math.floor(N); m > Math.max(0, Math.floor(N) - 9); m -= 1) { const th = Math.acos(Math.min(1, (m * p.lam / 1000) / (2 * p.d))); g.circle(c[0], c[1], th * 100, 'k nofill'); }
      g.dot(c[0], c[1], 'pt', 3); g.text(c[0], 12, 'the fringes seen', 't mute');
      g.text(245, 100, f0(N), 't big new', 'middle'); g.text(245, 84, 'fringes crossed', 't', 'middle'); g.text(245, 62, 'N = 2d / λ', 't sym new', 'middle');
      g.text(245, 40, f2(N - Math.floor(N)) + ' of the next', 't mute', 'middle');
    },
    read: p => [['N = 2d/λ', f1(2 * p.d / (p.lam / 1000))], ['d / (λ/2)', f1(p.d / (p.lam / 2000))], ['whole fringes', f0(Math.floor(2 * p.d / (p.lam / 1000) + 1e-9))]],
    law: p => { const lam = p.lam / 1000; let cnt = 0, prev = null, prev2 = null; for (let x = 0; x <= p.d + 1e-9; x += lam / 60) { const I = Math.pow(Math.cos(2 * Math.PI * x / lam), 2); if (prev !== null && prev2 !== null && prev > prev2 && prev >= I && x - lam / 60 > 1e-9) cnt += 1; prev2 = prev; prev = I; }
      const want = Math.floor(2 * p.d / lam + 1e-9); return { lhs: Math.abs(cnt - want) <= 1 ? want : cnt, rhs: want, text: 'counted ' + cnt + ' bright maxima at the centre; floor(2d/λ) = ' + want }; },
    tasks: [
      { lv: 1, type: 'num', setup: { d: 20, lam: 500 }, q: 'The mirror moves 20 µm with λ = 500 nm light. How many fringes cross the centre?', unit: 'fringes', tol: { abs: 1 }, ans: p => 2 * p.d / (p.lam / 1000),
        why: (p, a) => 'N = 2d/λ = 2 × 20 µm / 0.5 µm = <b>' + f0(a) + '</b>.' },
      { lv: 2, type: 'set', key: 'd', setup: { lam: 500 }, q: 'With λ = 500 nm, drag the mirror until <b>exactly 100 fringes</b> have crossed.', tol: { abs: 1 }, goal: p => 100 * p.lam / 2000,
        why: (p, a) => 'd = Nλ/2 = 100 × 0.25 µm = <b>' + f1(a) + ' µm</b>.' },
      { lv: 3, type: 'num', q: 'Sodium light has two lines near 589.3 nm. The fringes vanish and return every <b>0.29 mm</b> of mirror travel. What is the wavelength difference Δλ?', unit: 'nm', tol: { rel: 0.04 }, ans: () => 589.3 * 589.3 / (2 * 0.29e6),
        why: (p, a) => 'The two fringe systems drift a whole fringe apart in 2Δd: Δλ = λ²/(2Δd) = <b>' + f2(a) + ' nm</b>.' }
    ]
  });

  /* ── the air wedge ───────────────────────────────────────────────────── */
  const wB = p => p.lam * 5e-3 / p.alpha;                              /* mm: λ/2α with α in units of 1e-4 rad */
  OSIM.add('wedge', {
    title: 'fringes in an air wedge',
    blurb: 'The gap grows steadily from the edge, so a dark fringe appears every time it grows by half a wavelength. A smaller wedge angle stretches the fringes: <b>β = λ / 2α</b>.',
    params: [{ k: 'alpha', label: 'wedge angle α (×10⁻⁴ rad)', min: 0.5, max: 10, step: 0.5, value: 3, fmt: f1 }, { k: 'lam', label: 'wavelength λ (nm)', min: 400, max: 700, step: 10, value: 590, fmt: f0 }],
    watch: { k: 'alpha', from: 0.6, to: 9.5 },
    draw(g, p) {
      const b = wB(p), win = 10, col = U.rgb(p.lam);
      for (let i = 0; i < 150; i += 1) { const x = win * (i + 0.5) / 150, I = Math.pow(Math.sin(Math.PI * x / b), 2), r = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); r.setAttribute('x', g.X(30 + i * 1.9)); r.setAttribute('y', g.Y(150)); r.setAttribute('width', 2.0); r.setAttribute('height', 46); r.setAttribute('fill', col); r.setAttribute('opacity', (I * 0.95 + 0.03).toFixed(3)); g.svg.appendChild(r); }
      g.text(30, 158, 'seen from above: the edge is dark', 't mute', 'start'); g.text(30, 96, '10 mm of the wedge', 't mute', 'start');
      g.line(30, 60, 314, 60, 'k thick'); g.line(30, 60, 314, 60 + Math.min(40, 10 * p.alpha * 1e-4 * 1000 * 0 + 6 + p.alpha * 3), 'k thick'); g.text(46, 68, 'α', 't sym new');
      g.dim(30 + 1.9 * (b / win * 150) * 1, 44, 30 + 1.9 * (2 * b / win * 150), 44, 'β = ' + f2(b) + ' mm', 0, 'dim new');
    },
    read: p => [['β = λ/2α', f2(wB(p)) + ' mm'], ['dark fringes in 10 mm', f1(10 / wB(p))], ['gap grows by', f0(p.lam / 2) + ' nm per fringe']],
    law: p => { const a = p.alpha * 1e-4, lam = p.lam * 1e-6; return { lhs: lam / (2 * Math.sin(a)), rhs: wB(p), text: 'exact geometry (2x sinα = mλ): spacing ' + f3(lam / (2 * Math.sin(a))) + ' mm = λ/2α = ' + f3(wB(p)) + ' mm' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { alpha: 3, lam: 590 }, q: 'An air wedge with α = 3×10⁻⁴ rad in 590 nm light. What is the fringe width?', unit: 'mm', tol: { rel: 0.03 }, ans: wB,
        why: (p, a) => 'β = λ/2α = 590×10⁻⁹ / (2 × 3×10⁻⁴) = <b>' + f2(a) + ' mm</b>.' },
      { lv: 2, type: 'set', key: 'alpha', setup: { lam: 600 }, q: 'With λ = 600 nm, drag the wedge angle so the fringes are <b>1.5 mm</b> wide.', tol: { abs: 0.5 }, goal: p => p.lam * 5e-3 / 1.5,
        why: (p, a) => 'α = λ/2β = 600×10⁻⁹ / (2 × 1.5×10⁻³) = 2.0×10⁻⁴ rad → <b>' + f1(a) + '</b> on this scale.' },
      { lv: 3, type: 'num', q: 'A hair lies between two glass plates 10 cm from their touching edge (λ = 590 nm). The fringes are 0.50 mm wide. How thick is the hair?', unit: 'µm', tol: { rel: 0.03 }, ans: () => 590e-9 * 0.1 / (2 * 0.5e-3) * 1e6,
        why: (p, a) => 'α = λ/2β = 5.9×10⁻⁴ rad; thickness = α × L = 5.9×10⁻⁴ × 0.10 m = <b>' + f0(a) + ' µm</b>.' }
    ]
  });
})();

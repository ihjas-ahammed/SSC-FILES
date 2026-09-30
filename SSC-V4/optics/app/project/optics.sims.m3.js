/* Optics simulations — Module III (diffraction). */

(function () {
  const D = Math.PI / 180, f0 = v => String(Math.round(v)), f1 = v => (Math.round(v * 10) / 10).toFixed(1), f2 = v => (Math.round(v * 100) / 100).toFixed(2), f3 = v => (Math.round(v * 1000) / 1000).toFixed(3), f4 = v => (Math.round(v * 10000) / 10000).toFixed(4);
  const U = OSIM.util, sinc2 = b => (Math.abs(b) < 1e-9 ? 1 : Math.pow(Math.sin(b) / b, 2));

  /* ── a single slit ───────────────────────────────────────────────────── */
  const sY = p => p.lam * 1e-3 / p.a;                                   /* first minimum, mm (λ nm, a mm, D = 1 m) */
  OSIM.add('slit', {
    title: 'diffraction by a single slit',
    blurb: 'Narrow the slit and the pattern <b>spreads</b>; use longer light and it spreads too. The central bright band is bounded by the first dark spots at <b>a sinθ = λ</b>, so its width is 2λD/a.',
    params: [{ k: 'a', label: 'slit width a (mm)', min: 0.05, max: 0.5, step: 0.01, value: 0.2, fmt: f2 }, { k: 'lam', label: 'wavelength λ (nm)', min: 400, max: 700, step: 10, value: 600, fmt: f0 }],
    watch: { k: 'a', from: 0.06, to: 0.45 },
    draw(g, p) {
      const win = 10, box = { x0: 30, x1: 310, y0: 46, y1: 100 }, pts = [], col = U.rgb(p.lam);
      for (let i = 0; i <= 400; i += 1) { const y = -win + 2 * win * i / 400; pts.push([y, sinc2(Math.PI * p.a * y / (p.lam * 1e-6 * 1000))]); }
      const m = U.plot(g, box, pts, 'curve', 1, 0);
      for (let i = 0; i < 140; i += 1) { const y = -win + 2 * win * (i + 0.5) / 140, I = sinc2(Math.PI * p.a * y / (p.lam * 1e-6 * 1000)), r = document.createElementNS('http://www.w3.org/2000/svg', 'rect'); r.setAttribute('x', g.X(box.x0 + i * 2)); r.setAttribute('y', g.Y(146)); r.setAttribute('width', 2.1); r.setAttribute('height', 26); r.setAttribute('fill', col); r.setAttribute('opacity', Math.min(1, Math.pow(I, 0.55) * 0.97 + 0.02).toFixed(3)); g.svg.appendChild(r); }
      const y1 = sY(p); if (y1 < win) g.dim(m.px(-y1), box.y0 - 26, m.px(y1), box.y0 - 26, 'central maximum ' + f1(2 * y1) + ' mm', 0, 'dim new');
      [-10, -5, 0, 5, 10].forEach(v => g.text(m.px(v), box.y0 - 12, v + '', 't mute')); g.text(box.x0, 154, 'screen, 1 m away: what you would see', 't mute', 'start'); g.text(box.x1, 106, 'intensity (mm from centre)', 't mute', 'end');
    },
    read: p => [['first minimum', f2(sY(p)) + ' mm'], ['central width 2λD/a', f2(2 * sY(p)) + ' mm'], ['angle to 1st min', f2(Math.asin(p.lam * 1e-6 / p.a) / D) + '°']],
    law: p => { const lam = p.lam * 1e-6; let lo = 0, hi = 5000; for (let i = 0; i < 70; i += 1) { const m = (lo + hi) / 2; if (p.a * m / Math.hypot(1000, m) < lam) lo = m; else hi = m; } return { lhs: (lo + hi) / 2, rhs: sY(p), text: 'the exact first zero (a sinθ = λ) is at ' + f3((lo + hi) / 2) + ' mm;  λD/a = ' + f3(sY(p)) + ' mm' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { a: 0.2, lam: 600 }, q: 'λ = 600 nm, slit a = 0.20 mm, screen 1.0 m away. How wide is the <b>central maximum</b>?', unit: 'mm', tol: { rel: 0.03 }, ans: p => 2 * sY(p),
        why: (p, a) => 'First minima at ±λD/a = ±3.0 mm, so the central band is <b>' + f1(a) + ' mm</b> wide (twice the other bands).' },
      { lv: 2, type: 'set', key: 'a', setup: { lam: 600 }, q: 'Drag <b>a</b> so that the central maximum is <b>12 mm</b> wide (λ = 600 nm, D = 1 m).', tol: { abs: 0.02 }, goal: p => 2 * p.lam * 1e-3 / 12,
        why: (p, a) => 'a = 2λD/width = 2 × 600×10⁻⁹ × 1 / 0.012 = <b>' + f2(a) + ' mm</b>: half the width doubles the spread.' },
      { lv: 3, type: 'num', q: 'A slit of width 0.10 mm has its first minimum 5.9 mm from the centre on a screen 1.0 m away. What is the wavelength?', unit: 'nm', tol: { rel: 0.02 }, ans: () => 0.1 * 5.9 / 1000 * 1e6,
        why: (p, a) => 'a sinθ = λ with sinθ ≈ y/D: λ = 0.10×10⁻³ × 5.9×10⁻³ / 1.0 = <b>' + f0(a) + ' nm</b>.' }
    ]
  });

  /* ── two slits under the single-slit envelope ────────────────────────── */
  const dI = (s, r) => 4 * sinc2(Math.PI * s) * Math.pow(Math.cos(Math.PI * r * s), 2);        /* s = a sinθ/λ, r = d/a */
  OSIM.add('dslit', {
    title: 'two slits: fringes under an envelope',
    blurb: 'The slit width <b>a</b> draws the broad envelope; the separation <b>d</b> draws the fine fringes inside it. When a fringe order lands on a dark spot of the envelope, that order is <b>missing</b>.',
    params: [{ k: 'r', label: 'ratio d / a', min: 1, max: 6, step: 0.5, value: 3, fmt: f1 }],
    watch: { k: 'r', from: 1, to: 6 },
    draw(g, p) {
      const box = { x0: 30, x1: 310, y0: 40, y1: 140 }, pts = [], env = []; for (let i = 0; i <= 600; i += 1) { const s = -4 + 8 * i / 600; pts.push([s, dI(s, p.r)]); env.push([s, 4 * sinc2(Math.PI * s)]); }
      const m = U.plot(g, box, env, 'curve2', 4.1, 0); g.poline(pts.map(q => [m.px(q[0]), m.py(q[1])]), 'curve');
      for (let k = 1; k <= 4; k += 1) { const x = k, ok = Math.abs(p.r * x - Math.round(p.r * x)) < 1e-9; if (ok) g.dot(m.px(x), box.y0, 'pt new', 3.4), g.dot(m.px(-x), box.y0, 'pt new', 3.4); }
      g.text(box.x0, box.y1 + 12, 'a sinθ / λ', 't mute', 'start');
      const missing = []; for (let m2 = 1; m2 <= 12; m2 += 1) { const pth = m2 / p.r; if (Math.abs(pth - Math.round(pth)) < 1e-9 && Math.round(pth) >= 1) missing.push(m2); }
      g.text(170, 24, missing.length ? 'missing orders: ' + missing.slice(0, 4).join(', ') + (missing.length > 4 ? ' …' : '') : 'no order is missing (d/a is not a whole number)', 't new', 'middle');
    },
    read: p => [['d / a', f1(p.r)], ['fringes in the central band', f0(2 * Math.ceil(p.r) - 1)], ['first missing order', Math.abs(p.r - Math.round(p.r)) < 1e-9 ? f0(p.r) : (Math.abs(2 * p.r - Math.round(2 * p.r)) < 1e-9 ? f0(2 * p.r) : 'none nearby')]],
    law: p => { const s = 0.37, K = 300; let re = 0, im = 0; for (const c of [-p.r / 2, p.r / 2]) for (let k = 0; k < K; k += 1) { const x = c + (-0.5 + (k + 0.5) / K); const ph = 2 * Math.PI * x * s; re += Math.cos(ph); im += Math.sin(ph); } return { lhs: (re * re + im * im) / (K * K), rhs: dI(s, p.r), text: 'summing 600 strips: I = ' + f4((re * re + im * im) / (K * K)) + ' = 4 sinc² cos² = ' + f4(dI(s, p.r)) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { r: 4 }, q: 'Slit separation d = 4a. Which fringe order is the <b>first missing</b>?', unit: 'order', tol: { abs: 0.01 }, ans: p => p.r,
        why: (p, a) => 'Order m is missing when m = (d/a)·p for a whole number p: the first is p = 1, m = <b>' + f0(a) + '</b>.' },
      { lv: 2, type: 'num', setup: { r: 5 }, q: 'With d = 5a, how many bright fringes lie inside the <b>central</b> diffraction maximum?', unit: 'fringes', tol: { abs: 0.01 }, ans: p => 2 * p.r - 1,
        why: (p, a) => 'Orders ±5 fall on the envelope\'s first zeros, so the band holds m = 0, ±1 … ±4: 2d/a − 1 = <b>' + f0(a) + '</b>.' },
      { lv: 3, type: 'set', key: 'r', q: 'Drag <b>d/a</b> so that the <b>3rd order</b> is the first missing one.', tol: { abs: 0.5 }, goal: () => 3,
        why: () => 'm = (d/a)p with m = 3 at p = 1 needs <b>d/a = 3</b> — the third fringe then lies exactly on the first envelope zero.' }
    ]
  });

  /* ── the diffraction grating ─────────────────────────────────────────── */
  const gD = p => 1e6 / p.lines;                                        /* nm */
  const gOrders = p => Math.floor(gD(p) / p.lam - 1e-9);
  OSIM.add('grating', {
    title: 'the diffraction grating',
    blurb: 'Each order m leaves at <b>sinθ = mλ/d</b>. Finer rulings and longer wavelengths spread the orders wider; beyond the last order (mλ &gt; d) no beam exists.',
    params: [{ k: 'lines', label: 'lines per mm', min: 100, max: 1000, step: 50, value: 600, fmt: f0 }, { k: 'lam', label: 'wavelength λ (nm)', min: 400, max: 700, step: 10, value: 590, fmt: f0 }, { k: 'm', label: 'order m', min: 1, max: 3, step: 1, value: 1, fmt: f0 }],
    watch: { k: 'lam', from: 400, to: 700 },
    draw(g, p) {
      const bx = 60, cy = 0, col = OSIM.util.rgb(p.lam);
      g.line(bx, -70, bx, 70, 'k'); for (let k = -3; k <= 3; k += 1) g.rect(bx - 2, k * 16 - 3, bx + 2, k * 16 + 3, 'fillk');
      g.arrow(15, cy, bx - 4, cy, 'r2', 0.6);
      for (let m = -3; m <= 3; m += 1) { const s = m * p.lam / gD(p); if (Math.abs(s) > 1) continue; const th = Math.asin(s); const L = Math.min(200, 70 / Math.max(0.05, Math.abs(Math.sin(th)))); g.arrow(bx, cy, bx + L * Math.cos(th), cy + L * Math.sin(th), 'r' + (Math.abs(m) === p.m ? ' new' : ''), 0.7); g.text(bx + (L + 5) * Math.cos(th), cy + (L + 5) * Math.sin(th), 'm = ' + m, 't mute', 'start'); }
      g.text(190, -78, 'orders that exist: |m| ≤ ' + gOrders(p), 't', 'middle');
    },
    oy: 90,
    read: p => { const s = p.m * p.lam / gD(p); return [['d = 1/lines', f2(gD(p) / 1000) + ' µm'], ['θ for this order', Math.abs(s) <= 1 ? f1(Math.asin(s) / D) + '°' : 'no such order'], ['highest order', f0(gOrders(p))]]; },
    law: p => { const s = p.m * p.lam / gD(p); if (Math.abs(s) > 1) return { lhs: 0, rhs: 0, text: 'this order does not exist' }; const th = Math.asin(s), dir = [Math.cos(th), Math.sin(th)], slit = [0, gD(p)]; const pd = slit[0] * dir[0] + slit[1] * dir[1]; return { lhs: pd, rhs: p.m * p.lam, text: 'path difference between neighbours (from the geometry) = ' + f1(pd) + ' nm = mλ = ' + f1(p.m * p.lam) + ' nm' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { lines: 600, lam: 590, m: 1 }, q: 'A grating with 600 lines/mm and light of 590 nm. At what angle is the <b>first order</b>?', unit: '°', tol: { abs: 0.6 }, ans: p => Math.asin(p.lam / gD(p)) / D,
        why: (p, a) => 'd = 1/600 mm = 1.667 µm; sinθ = λ/d = 0.354 → θ = <b>' + f1(a) + '°</b>.' },
      { lv: 2, type: 'num', setup: { lines: 500, lam: 600, m: 1 }, q: '500 lines/mm and 600 nm light. What is the <b>highest order</b> that can be seen?', unit: 'order', tol: { abs: 0.01 }, ans: p => gOrders(p),
        why: (p, a) => 'd = 2000 nm; the order must satisfy mλ ≤ d → m ≤ 3.33, so the highest is <b>' + f0(a) + '</b>.' },
      { lv: 3, type: 'num', q: 'A grating has 5000 lines in use. In the second order, what is the smallest wavelength difference it can resolve near 589 nm?', unit: 'nm', tol: { rel: 0.03 }, ans: () => 589 / (2 * 5000),
        why: (p, a) => 'Resolving power R = mN = 2 × 5000 = 10 000, so Δλ = λ/R = <b>' + f3(a) + ' nm</b>.' }
    ]
  });

  /* ── Fresnel zones and a circular hole ───────────────────────────────── */
  const zN = p => 2 * p.R * p.R / p.b;                                    /* zones exposed, λ = 500 nm, R mm, b m */
  OSIM.add('zones', {
    title: 'half-period zones and a circular hole',
    blurb: 'A round hole lets through <b>n = R²/bλ</b> half-period zones. An odd number of open zones puts you on a bright spot (four times the unobstructed light); an even number puts you on a dark one.',
    params: [{ k: 'R', label: 'hole radius R (mm)', min: 0.2, max: 2, step: 0.05, value: 1, fmt: f2 }, { k: 'b', label: 'screen distance b (m)', min: 0.2, max: 3, step: 0.05, value: 2, fmt: f2 }],
    watch: { k: 'b', from: 0.3, to: 3 },
    draw(g, p) {
      const n = zN(p), c = [90, 85], sc = 60 / 2.0;
      const nz = Math.min(12, Math.ceil(n));
      for (let k = nz; k >= 1; k -= 1) { const r = Math.min(Math.sqrt(k / n) * p.R, p.R) * sc * 1.0; g.circle(c[0], c[1], r, 'k nofill' + (k <= n ? '' : ' dash')); }
      g.circle(c[0], c[1], p.R * sc, 'k thick nofill'); g.dot(c[0], c[1], 'pt', 2.6); g.text(c[0], c[1] - 70, 'the hole and its zones', 't mute');
      const I = 4 * Math.pow(Math.sin(Math.PI * n / 2), 2), box = { x0: 200, x1: 300, y0: 30, y1: 140 };
      g.rect(box.x0 - 4, box.y0, box.x0 + 22, box.y0 + I / 4 * (box.y1 - box.y0), 'fillk new'); g.text(box.x0 + 9, box.y1 + 12, 'I / I₀', 't sym'); g.text(box.x0 + 40, box.y0 + I / 4 * (box.y1 - box.y0) - 4, f2(I), 't big new', 'start');
      g.text(box.x0 + 40, box.y0 + 20, n % 2 < 1e-6 || Math.abs(n - Math.round(n)) > 0.05 ? '' : (Math.round(n) % 2 ? 'odd: bright' : 'even: dark'), 't', 'start');
    },
    read: p => [['zones open n = R²/bλ', f2(zN(p))], ['I / I₀', f2(4 * Math.pow(Math.sin(Math.PI * zN(p) / 2), 2))], ['first zone radius', f2(Math.sqrt(p.b * 5e-7) * 1000) + ' mm']],
    law: p => { const n = zN(p), K = 6000; let re = 0, im = 0; for (let k = 0; k < K; k += 1) { const v = n * (k + 0.5) / K; re += Math.cos(Math.PI * v) * n / K; im -= Math.sin(Math.PI * v) * n / K; } const I = Math.PI * Math.PI * (re * re + im * im); return { lhs: I, rhs: 4 * Math.pow(Math.sin(Math.PI * n / 2), 2), text: 'summing the wavelets over the hole: I/I₀ = ' + f3(I) + ' = 4 sin²(πn/2) = ' + f3(4 * Math.pow(Math.sin(Math.PI * n / 2), 2)) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { R: 1, b: 2 }, q: 'R = 1 mm, b = 2 m, λ = 500 nm: exactly one zone is open. What is the on-axis intensity relative to the unobstructed light I₀?', unit: '× I₀', tol: { abs: 0.1 }, ans: p => 4 * Math.pow(Math.sin(Math.PI * zN(p) / 2), 2),
        why: (p, a) => 'n = R²/bλ = 1; the unobstructed wave has half the first zone\'s amplitude, so one zone alone is twice as strong: I = 4I₀ → <b>' + f0(a) + '</b>.' },
      { lv: 2, type: 'set', key: 'b', setup: { R: 1 }, q: 'With R = 1 mm, drag the screen to the distance where <b>exactly two zones</b> are open (a dark centre).', tol: { abs: 0.05 }, goal: p => p.R * p.R * 1e-6 / (2 * 5e-7),
        why: (p, a) => 'n = 2 → b = R²/(2λ) = <b>' + f2(a) + ' m</b>. The two zones cancel each other.' },
      { lv: 3, type: 'num', q: 'Now block the light with an <b>opaque disc</b> of radius 1 mm at b = 2 m (λ = 500 nm) instead. What is the on-axis intensity relative to I₀?', unit: '× I₀', tol: { abs: 0.05 }, ans: () => 1,
        why: () => 'The disc hides the first zone; the rest still add to about half of the next zone\'s amplitude ≈ half of A₁: the shadow\'s centre is as bright as if nothing were there, <b>≈ 1</b> — the Poisson spot.' }
    ]
  });

  /* ── N equal slits ───────────────────────────────────────────────────── */
  const nI = (g, N) => { const sn = Math.sin(g); return Math.abs(sn) < 1e-9 ? 1 : Math.pow(Math.sin(N * g) / (N * sn), 2); };
  OSIM.add('nslit', {
    title: 'more slits, sharper peaks',
    blurb: 'Add slits and the bright peaks stay where they are but become <b>sharper and much brighter</b>; between them the light cancels, leaving N − 1 dark spots and N − 2 weak bumps.',
    params: [{ k: 'N', label: 'number of slits N', min: 2, max: 12, step: 1, value: 4, fmt: f0 }],
    watch: { k: 'N', from: 2, to: 12 },
    draw(g, p) {
      const box = { x0: 30, x1: 310, y0: 40, y1: 138 }, pts = []; for (let i = 0; i <= 700; i += 1) { const t = -1.3 + 2.6 * i / 700; pts.push([t, nI(Math.PI * t, p.N)]); }
      const m = U.plot(g, box, pts, 'curve', 1.05, 0); [-1, 0, 1].forEach(k => g.text(m.px(k), box.y1 - 98, k === 0 ? '0' : k + 'π', 't mute'));
      g.text(box.x0, 24, 'N = ' + p.N + ':  intensity against γ', 't', 'start');
      g.dim(m.px(0) - 0, box.y1 + 6 - 4, m.px(1 / p.N), box.y1 + 6 - 4, '', 0, 'dim new'); g.text(box.x1, box.y1 + 12, 'half-width of a peak = π/N', 't new', 'end');
    },
    read: p => [['zeros between peaks', f0(p.N - 1)], ['weak maxima between', f0(p.N - 2)], ['peak / one slit', f0(p.N * p.N)]],
    law: p => { const gm = 1.234; let re = 0, im = 0; for (let k = 0; k < p.N; k += 1) { re += Math.cos(2 * k * gm); im += Math.sin(2 * k * gm); } return { lhs: (re * re + im * im) / (p.N * p.N), rhs: nI(gm, p.N), text: 'adding N unit phasors: |Σ|²/N² = ' + f4((re * re + im * im) / (p.N * p.N)) + ' = (sin Nγ / N sinγ)² = ' + f4(nI(gm, p.N)) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { N: 4 }, q: 'With N = 4 slits, how many dark spots lie between two neighbouring main peaks?', unit: '', tol: { abs: 0.01 }, ans: p => p.N - 1,
        why: (p, a) => 'Zeros occur where Nγ is a whole multiple of π but γ is not: N − 1 = <b>' + f0(a) + '</b> between neighbouring peaks.' },
      { lv: 2, type: 'num', setup: { N: 8 }, q: 'With N = 8, how many weak secondary maxima fit between two main peaks?', unit: '', tol: { abs: 0.01 }, ans: p => p.N - 2,
        why: (p, a) => 'N − 1 zeros enclose N − 2 humps: <b>' + f0(a) + '</b>.' },
      { lv: 3, type: 'num', setup: { N: 6 }, q: 'How many times brighter than a <b>single</b> slit\'s central intensity is one main peak of N = 6 slits?', unit: '×', tol: { abs: 0.5 }, ans: p => p.N * p.N,
        why: (p, a) => 'The amplitudes add to N times one slit, so the intensity is N² = <b>' + f0(a) + '</b> times — energy gathered into narrow peaks.' }
    ]
  });

  /* ── straight-edge diffraction ───────────────────────────────────────── */
  function fresnelCS(v) { const n = 3000, sg = v < 0 ? -1 : 1, V = Math.abs(v); let C = 0, S = 0; for (let i = 0; i < n; i += 1) { const s = V * (i + 0.5) / n; C += Math.cos(Math.PI * s * s / 2) * V / n; S += Math.sin(Math.PI * s * s / 2) * V / n; } return [sg * C, sg * S]; }
  const eI = v => { const c = fresnelCS(v); return 0.5 * (Math.pow(c[0] + 0.5, 2) + Math.pow(c[1] + 0.5, 2)); };
  OSIM.add('edge', {
    title: 'the Cornu spiral and the edge of a shadow',
    blurb: 'The arrow from the spiral\'s lower end to the point <b>v</b> is the light\'s amplitude. At v = 0 (the shadow edge) it is half; it overshoots on the lit side, then settles; deep in the shadow it shrinks to nothing.',
    params: [{ k: 'v', label: 'position v (negative = shadow)', min: -3, max: 4, step: 0.1, value: 1.2, fmt: f1 }],
    watch: { k: 'v', from: -2.5, to: 3.8 },
    draw(g, p) {
      const org = [95, 85], sc = 74, N = 400, pts = [], neg = [];
      for (let i = 0; i <= N; i += 1) { const c = fresnelCS(3.4 * i / N); pts.push([org[0] + c[0] * sc, org[1] + c[1] * sc]); neg.push([org[0] - c[0] * sc, org[1] - c[1] * sc]); }
      g.poline(pts, 'curve old nofill'); g.poline(neg, 'curve old nofill'); g.line(org[0] - 70, org[1], org[0] + 70, org[1], 'k dash'); g.line(org[0], org[1] - 60, org[0], org[1] + 60, 'k dash');
      const c = fresnelCS(p.v), P = [org[0] + c[0] * sc, org[1] + c[1] * sc], lo = [org[0] - 0.5 * sc, org[1] - 0.5 * sc]; g.dot(lo[0], lo[1], 'pt', 3); g.arrow(lo[0], lo[1], P[0], P[1], 'r new', 1); g.dot(P[0], P[1], 'pt new', 4);
      const box = { x0: 190, x1: 315, y0: 40, y1: 130 }, cur = []; for (let v = -3; v <= 4.001; v += 0.1) cur.push([v, eI(v)]); const m = U.plot(g, box, cur, 'curve old', 1.5, 0); g.dot(m.px(p.v), m.py(eI(p.v)), 'pt new', 3.4);
      g.line(m.px(0), box.y0, m.px(0), box.y1, 'k dash'); g.text(m.px(0), box.y1 + 10, 'shadow edge', 't mute'); g.text(box.x0, box.y1 + 24 - 60 + 60, 'I / I₀ against v', 't mute', 'start');
    },
    read: p => [['I / I₀', f3(eI(p.v))], ['at the shadow edge', '0.250'], ['first maximum', 'v ≈ 1.22, 1.37']],
    tasks: [
      { lv: 1, type: 'num', setup: { v: 0 }, q: 'Exactly at the edge of the geometrical shadow (v = 0), what is the intensity relative to the unobstructed light I₀?', unit: '× I₀', tol: { abs: 0.03 }, ans: () => 0.25,
        why: () => 'Half the amplitude → a quarter of the intensity: <b>0.25</b>. The edge of the shadow is neither fully bright nor fully dark.' },
      { lv: 2, type: 'set', key: 'v', q: 'Drag <b>v</b> to the position of the <b>first bright maximum</b> on the lit side.', tol: { abs: 0.2 }, goal: () => 1.22,
        why: () => 'The spiral overshoots most at <b>v ≈ 1.22</b>, where I ≈ 1.37 I₀ — brighter than the unobstructed light.' },
      { lv: 3, type: 'num', setup: { v: -3 }, q: 'Deep inside the shadow at v = −3, is the intensity closer to 0, 0.25 or 1 of I₀? Give the value.', unit: '× I₀', tol: { abs: 0.01 }, ans: () => eI(-3),
        why: (p, a) => 'The arrow has almost shrunk to nothing: I ≈ <b>' + f3(a) + '</b> I₀, with no fringes — light bends into the shadow but fades smoothly.' }
    ]
  });
})();

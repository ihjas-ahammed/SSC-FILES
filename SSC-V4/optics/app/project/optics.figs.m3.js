/* Optics step diagrams — Module III (diffraction). */

(function () {
  const N = (s, k) => (s === k ? ' new' : '');
  const D = Math.PI / 180;
  const sinc2 = b => (Math.abs(b) < 1e-9 ? 1 : Math.pow(Math.sin(b) / b, 2));

  /* small axes + a function plotted over [a,b], returns mapping helpers */
  function plot(g, box, f, a, b, ymax, cls, opts) {
    const o = opts || {}, px = x => box.x0 + (x - a) / (b - a) * (box.x1 - box.x0), py = y => box.y0 + y / ymax * (box.y1 - box.y0);
    if (!o.noaxes) { g.line(box.x0, box.y0, box.x1, box.y0, 'k'); g.line(box.x0, box.y0, box.x0, box.y1 + 6, 'k'); }
    const pts = []; for (let i = 0; i <= 260; i += 1) { const x = a + (b - a) * i / 260, y = f(x); if (isFinite(y) && Math.abs(y) <= ymax * 1.02) pts.push([px(x), py(Math.max(0, y))]); }
    g.poline(pts, cls || 'curve');
    return { px: px, py: py };
  }

  /* ── 3.1  single slit ─────────────────────────────────────────────────── */
  OFIG.add('slit', {
    w: 340, n: 4, alt: s => ['A slit of width b cut into strips; each strip sends a wavelet at angle θ', 'The strips add as an integral with phase kx sinθ',
      'The result: I = I₀ (sin β / β)²', 'Zeros where the phasor arc closes into a full circle'][s - 1],
    build(g, s) {
      if (s === 3) {
        const box = { x0: 40, x1: 300, y0: 30, y1: 140 }, m = plot(g, box, b => sinc2(b), -4 * Math.PI, 4 * Math.PI, 1.0);
        [-3, -2, -1, 1, 2, 3].forEach(k => { g.dot(m.px(k * Math.PI), box.y0, 'pt new', 2.6); g.text(m.px(k * Math.PI), box.y0 - 11, k + 'π', 't mute'); });
        g.text(m.px(0), box.y0 - 11, '0', 't mute'); g.text(170, 158, 'I = I₀ (sin β / β)²,  β = πa sinθ / λ', 't big new', 'middle');
        g.text(300, 150, '', 't'); g.text(m.px(0) + 6, box.y1 + 2, 'I₀', 't sym', 'start');
        return;
      }
      if (s === 4) {
        [[0.5, 'β = π/2'], [1, 'β = π  (closed)'], [1.5, 'β = 3π/2']].forEach(function (c, k) {
          const bet = c[0] * Math.PI, R = 95 / (2 * bet), x0 = 50 + k * 105, y0 = 50, pts = [];
          for (let i = 0; i <= 80; i += 1) { const ph = 2 * bet * i / 80; pts.push([x0 + R * Math.sin(ph), y0 + R * (1 - Math.cos(ph))]); }
          g.poline(pts, 'r' + (k === 1 ? ' new' : '') + ' nofill');
          const e = pts[pts.length - 1]; g.arrow(x0, y0, e[0], e[1], 'r2' + (k === 1 ? ' new' : ''), 1);
          g.text(x0 + 10, 14, c[1], 't' + (k === 1 ? ' new' : ''), 'middle');
        });
        g.text(170, 148, 'closed circle: resultant 0  ⇒  β = mπ  ⇒  a sinθ = mλ', 't new', 'middle');
        return;
      }
      const bx = 100, cy = 85, a = 64, top = cy + a / 2, bot = cy - a / 2, th = 18 * D;
      g.line(bx, 15, bx, bot - 2, 'k thick'); g.line(bx, top + 2, bx, 155, 'k thick');
      for (let k = 0; k < 6; k += 1) g.line(20, cy - a / 2 + 6 + k * (a - 12) / 5, bx, cy - a / 2 + 6 + k * (a - 12) / 5, 'r2');
      g.dim(bx - 14, bot, bx - 14, top, 'a', 0, 'dim' + N(s, 1)); g.text(26, 160, 'plane wave', 't mute', 'start');
      for (let k = 0; k < 6; k += 1) { const y = cy - a / 2 + 6 + k * (a - 12) / 5; g.arrow(bx, y, bx + 170 * Math.cos(th), y + 170 * Math.sin(th), 'r' + (k === 0 || k === 5 ? N(s, 1) : ''), 0.85); }
      const yt = cy + a / 2 - 6, yc = cy;
      /* extra path of the top strip over the centre strip: perpendicular from the centre strip's start onto the top strip's ray */
      const u = [Math.cos(th), Math.sin(th)], w = [0, yc - yt], pr = w[0] * u[0] + w[1] * u[1], F = [bx + pr * u[0], yt + pr * u[1]];
      g.line(bx, yc, F[0], F[1], 'k dash'); g.line(bx, yt, F[0], F[1], 'r new'); g.text(F[0] + 6, F[1] - 2, 'x sinθ', 't sym new', 'start');
      g.angle(bx, yt, 44, -deg(th), 0, 'θ', 'ang new');
      g.dim(bx + 52, yc, bx + 52, yt, 'x', 0, 'dim new');
      g.text(215, 30, s === 1 ? 'strip at x: phase kx sinθ' : 'E ∝ ∫ e^{ikx sinθ}dx = a sinβ/β', 't new', 'middle');
      function deg(r) { return r / D; }
    }
  });

  OFIG.add('sinc', {
    n: 3, alt: s => ['The intensity curve and where its slope is zero', 'Secondary maxima: the crossings of y = tanβ and y = β', 'The first secondary maximum is about 4.7% of the peak'][s - 1],
    build(g, s) {
      const box = { x0: 40, x1: 300, y0: 28, y1: 140 };
      if (s === 2) {
        const a = 0, b = 3.2 * Math.PI, ym = 12, px = x => box.x0 + (x - a) / (b - a) * (box.x1 - box.x0), py = y => box.y0 + (y + 4) / (ym + 4) * (box.y1 - box.y0);
        g.line(box.x0, py(0), box.x1, py(0), 'k'); g.line(box.x0, box.y0, box.x0, box.y1, 'k');
        g.poline([[px(0), py(0)], [px(b), py(b)]], 'k dash nofill'); g.text(px(b) - 14, py(b) - 8, 'y = β', 't sym mute', 'end');
        for (let k = 0; k < 3; k += 1) {
          const lo = k * Math.PI + 0.02 * 0 + (k === 0 ? 0.02 : 0.02), hi = (k + 0.5) * Math.PI - 0.04, pts = [];
          for (let i = 0; i <= 80; i += 1) { const x = lo + (hi - lo) * i / 80, y = Math.tan(x); if (y < ym) pts.push([px(x), py(y)]); }
          g.poline(pts, 'curve nofill');
        }
        [4.493, 7.725, 10.904].forEach(x => { g.dot(px(x), py(x), 'pt new', 3.2); g.text(px(x) + (x > 9 ? -6 : 4), py(x) + 12, (x / Math.PI).toFixed(2) + 'π', 't new', x > 9 ? 'end' : 'start'); });
        g.text(170, 158, 'tanβ = β  ⇒  β = 1.43π, 2.46π, 3.47π …', 't big new', 'middle');
        return;
      }
      const m = plot(g, box, b => sinc2(b), 0, 4 * Math.PI, 1.0);
      const sec = [4.493, 7.725, 10.904];
      sec.forEach(x => { g.dot(m.px(x), m.py(sinc2(x)), 'pt new', 3.2); });
      if (s === 1) { g.dot(m.px(0), m.py(1), 'pt', 3.2); g.text(170, 158, 'dI/dβ = 0:  sinβ = 0  (minima)  or  tanβ = β', 't new', 'middle'); }
      if (s === 3) { g.dim(m.px(4.493) + 10, box.y0, m.px(4.493) + 10, m.py(sinc2(4.493)), '', 0, 'dim new'); g.text(m.px(4.493) + 16, m.py(sinc2(4.493)) + 26, '4.7 %', 't big new', 'start'); g.text(170, 158, 'I₁/I₀ = (sin 4.493 / 4.493)² ≈ 0.047', 't big new', 'middle'); }
    }
  });

  /* ── 3.2  two slits ───────────────────────────────────────────────────── */
  OFIG.add('dslit', {
    w: 340, n: 3, alt: s => ['Two slits: each gives the single-slit field, shifted in phase by ∓γ', 'Envelope times fringes: I = 4I₀(sinβ/β)² cos²γ', 'A fringe order that falls on an envelope zero is missing'][s - 1],
    build(g, s) {
      if (s >= 2) {
        const box = { x0: 30, x1: 310, y0: 30, y1: 135 }, R = 4 * Math.PI, d = 3;
        const env = b => sinc2(b), full = b => sinc2(b) * Math.pow(Math.cos(d * b), 2);
        const m = plot(g, box, env, -R, R, 1.0, 'curve2 nofill');
        plot(g, box, full, -R, R, 1.0, 'curve', { noaxes: true });
        if (s === 2) g.text(170, 158, 'I = 4I₀ (sinβ/β)² cos²γ,  γ = πd sinθ/λ', 't big new', 'middle');
        if (s === 3) { [-Math.PI, Math.PI].forEach(x => { g.dot(m.px(x), box.y0, 'pt new', 4); g.text(m.px(x), box.y0 - 12, 'missing', 't new'); }); g.text(170, 158, 'd = 3a: orders m = ±3, ±6 … are missing', 't big new', 'middle'); }
        g.text(box.x1, box.y1 + 6, 'envelope (single slit)', 't mute', 'end');
        return;
      }
      const bx = 110, cy = 85, a = 26, d = 62, th = 18 * D;
      [cy + d / 2, cy - d / 2].forEach(function (c, k) {
        g.line(bx, c - a / 2, bx, c + a / 2, 'k'); g.rect(bx - 3, c - a / 2, bx + 3, c + a / 2, 'fillk');
        for (let j = 0; j < 3; j += 1) g.arrow(bx, c - a / 2 + 4 + j * (a - 8) / 2, bx + 150 * Math.cos(th), c - a / 2 + 4 + j * (a - 8) / 2 + 150 * Math.sin(th), k ? 'r2' : 'r', 0.9);
      });
      g.line(bx, 15, bx, cy - d / 2 - a / 2, 'k thick'); g.line(bx, cy - d / 2 + a / 2, bx, cy + d / 2 - a / 2, 'k thick'); g.line(bx, cy + d / 2 + a / 2, bx, 158, 'k thick');
      g.dim(bx - 16, cy - d / 2, bx - 16, cy + d / 2, 'd', 0, 'dim new'); g.dim(bx + 16, cy + d / 2 - a / 2, bx + 16, cy + d / 2 + a / 2, 'a', 0, 'dim');
      g.text(24, 156, 'slit 1: × e^{−iγ}', 't', 'start', 0, 0); g.text(24, 143, 'slit 2: × e^{+iγ}', 't', 'start', 0, 0);
      g.text(240, 24, 'E = 2E₀(sinβ/β) cosγ', 't big new', 'middle');
    }
  });

  /* ── 3.3  N slits, grating ────────────────────────────────────────────── */
  OFIG.add('nslit', {
    w: 340, n: 3, alt: s => ['N slits: neighbours differ by the phase step 2γ', 'The sum is a geometric series: sin Nγ / sin γ', 'N = 4: sharp principal maxima with N − 2 weak ones between'][s - 1],
    build(g, s) {
      if (s === 3) {
        const box = { x0: 30, x1: 310, y0: 30, y1: 138 }, N0 = 4;
        const f = t => { const sn = Math.sin(t); return Math.abs(sn) < 1e-9 ? 1 : Math.pow(Math.sin(N0 * t) / (N0 * sn), 2); };
        const m = plot(g, box, f, -1.2 * Math.PI, 1.2 * Math.PI, 1.05);
        [-1, 0, 1].forEach(k => g.text(m.px(k * Math.PI), box.y0 - 11, k === 0 ? '0' : k + 'π', 't mute'));
        g.text(170, 160, '3 zeros and 2 weak maxima between peaks', 't new', 'middle', 0, 0);
        return;
      }
      const bx = 90, cy = 85, d = 24, th = 16 * D;
      for (let k = -2; k <= 2; k += 1) { const y = cy + k * d; g.arrow(bx, y, bx + 150 * Math.cos(th), y + 150 * Math.sin(th), k === 0 ? 'r' : 'r2', 0.85); g.dot(bx, y, 'pt', 2.4); }
      g.line(bx, 15, bx, 158, 'k'); g.dim(bx - 14, cy, bx - 14, cy + d, 'd', 0, 'dim new');
      if (s === 1) { const y = cy + d, F = [bx + Math.sin(th) * d * 0, y]; g.text(240, 30, 'path step d sinθ', 't new', 'middle'); g.text(240, 14, 'phase step 2γ = kd sinθ', 't big new', 'middle'); }
      if (s === 2) { g.text(240, 30, 'Σ e^{2ikγ}  →  sin Nγ / sin γ', 't new', 'middle'); g.text(240, 14, 'I = I₀(sinβ/β)²(sin Nγ/sin γ)²', 't new', 'middle'); }
    }
  });

  OFIG.add('grating', {
    w: 340, n: 3, alt: s => ['Adjacent slits: path difference d sinθ must be mλ', 'Differentiate at fixed order: d cosθ dθ = m dλ', 'Longer wavelengths are deviated more: dθ/dλ = m / d cosθ'][s - 1],
    build(g, s) {
      const bx = 90, cy = 85, d = 20;
      for (let k = -3; k <= 3; k += 1) g.rect(bx - 2, cy + k * d - 3, bx + 2, cy + k * d + 3, 'fillk');
      g.line(bx, 12, bx, 160, 'k');
      g.dim(bx - 16, cy, bx - 16, cy + d, 'd', 0, 'dim' + N(s, 1)); g.arrow(15, cy, bx - 4, cy, 'r2', 0.6);
      if (s === 1) {
        const th = 26 * D, L = 150;
        [0, 1].forEach(k => g.arrow(bx, cy + k * d, bx + L * Math.cos(th), cy + k * d + L * Math.sin(th), k ? 'r new' : 'r', 0.85));
        const u = [Math.cos(th), Math.sin(th)], w = [0, -d], pr = w[0] * u[0] + w[1] * u[1], F = [bx + pr * u[0], cy + d + pr * u[1]];
        g.line(bx, cy, F[0], F[1], 'k dash'); g.line(bx, cy + d, F[0], F[1], 'r new'); g.angle(bx, cy + d, 36, -26, 0, 'θ', 'ang new');
        g.text(250, 30, 'Δ = d sinθ = mλ', 't big new', 'middle');
        return;
      }
      const cols = ['r3', 'r', 'r2'], ths = [21, 26, 33];
      ths.forEach((t, k) => { g.arrow(bx, cy, bx + 150 * Math.cos(t * D), cy + 150 * Math.sin(t * D), cols[k], 0.8); });
      g.angle(bx, cy, 60, 21 - 0, 33, 'Δθ', 'ang new'); g.text(245, 30, s === 2 ? 'd cosθ dθ = m dλ' : 'dθ/dλ = m/(d cosθ)', 't big new', 'middle');
      g.text(bx + 150 * Math.cos(33 * D) + 4, cy + 150 * Math.sin(33 * D), 'red', 't mute', 'start'); g.text(bx + 150 * Math.cos(21 * D) + 4, cy + 150 * Math.sin(21 * D), 'violet', 't mute', 'start');
      function _() { return 0; }
    }
  });

  OFIG.add('resolve', {
    w: 340, n: 3, alt: s => ['The first zero beside a principal maximum', 'Rayleigh: the second line sits on that zero', 'R = λ/Δλ = mN'][s - 1],
    build(g, s) {
      const box = { x0: 30, x1: 310, y0: 30, y1: 132 }, N0 = 10;
      const f = (t, c) => { const u = t - c, sn = Math.sin(u); return Math.abs(sn) < 1e-9 ? 1 : Math.pow(Math.sin(N0 * u) / (N0 * sn), 2); };
      const a = -0.5, b = 1.7, w = Math.PI / N0;
      const m = plot(g, box, t => f(t * Math.PI, 0), a, b, 1.1, 'curve' + (s === 1 ? '' : ' old'));
      if (s === 1) { g.dim(m.px(0), box.y0 - 2, m.px(1 / N0), box.y0 - 2, '', 0, 'dim new'); g.text(m.px(1 / N0) + 6, box.y0 - 12, 'first zero', 't new', 'start'); g.text(170, 158, 'half-width Δγ = π/N', 't big new', 'middle'); }
      if (s >= 2) {
        plot(g, box, t => f(t * Math.PI, 1 / N0 * Math.PI), a, b, 1.1, 'curve2 nofill', { noaxes: true });
        g.line(m.px(1 / N0), box.y0, m.px(1 / N0), box.y1, 'k dash'); g.text(m.px(1 / N0), box.y1 + 12, 'just resolved', 't new');
      }
      if (s === 3) g.text(170, 158, 'm(λ + Δλ) = (m + 1/N)λ  ⇒  R = mN', 't big new', 'middle');
    }
  });

  /* ── 3.4  Fresnel zones ───────────────────────────────────────────────── */
  OFIG.add('zones', {
    w: 340, n: 3, alt: s => ['Circles on the wavefront where the distance to P grows by λ/2', 'The right triangle d, r, d + mλ/2 gives r² ≈ mλd', 'Every zone has the same area πλd'][s - 1],
    build(g, s) {
      if (s === 3) {
        const c = [95, 85]; [1, 2, 3, 4, 5].forEach(k => g.circle(c[0], c[1], 22 * Math.sqrt(k), 'k nofill'));
        [[1, 2], [3, 4], [5, 5]].forEach(() => 0); g.dot(c[0], c[1], 'pt', 2.6);
        [1, 3, 5].forEach(k => g.text(c[0] + 22 * Math.sqrt(k - 0.5) - 2, c[1] + 4, String(k), 't mute')); [2, 4].forEach(k => g.text(c[0] + 22 * Math.sqrt(k - 0.5) - 2, c[1] + 4, String(k), 't mute'));
        g.text(250, 118, 'rₘ = √(mλd)', 't big new', 'middle'); g.text(250, 98, 'area of each zone', 't', 'middle'); g.text(250, 80, 'π(rₘ₊₁² − rₘ²) = πλd', 't big new', 'middle');
        return;
      }
      const wx = 70, b = 190, cy = 85;
      g.line(wx, 10, wx, 160, 'k thick'); g.text(wx, 166, 'plane wavefront', 't mute'); g.dot(wx + b, cy, 'pt new', 3.6); g.text(wx + b + 8, cy + 12, 'P', 't sym new');
      g.line(wx, cy, wx + b, cy, 'k dash'); g.dim(wx, cy - 8, wx + b, cy - 8, 'd', 0, 'dim new');
      [1, 2, 3].forEach(function (n) {
        const rr = 30 * Math.sqrt(n); g.dot(wx, cy + rr, 'pt', 2.6); g.line(wx, cy + rr, wx + b, cy, 'r' + (n === 3 ? ' new' : '')); g.text(wx - 8, cy + rr, 'r' + ['₁', '₂', '₃'][n - 1], 't sym', 'end');
      });
      if (s === 1) g.text(230, 148, 'd + mλ/2 to the mth circle', 't new', 'middle');
      if (s === 2) { g.line(wx, cy, wx, cy + 70, 'r2 new'); g.text(230, 148, 'r² = (d + mλ/2)² − d² ≈ mλd', 't new', 'middle'); }
    }
  });

  OFIG.add('zonespiral', {
    n: 3, alt: s => ['Zone amplitudes alternate in sign and shrink slowly', 'Group them in pairs of neighbours: each bracket is nearly zero', 'The sum spirals in to A₁/2'][s - 1],
    build(g, s) {
      if (s === 3) {
        let z = [0, 0]; const raw = [[0, 0]];
        for (let k = 0; k < 400; k += 1) { const th = k * Math.PI / 25, amp = 1 - k / 420; z = [z[0] + amp * Math.cos(th), z[1] + amp * Math.sin(th)]; raw.push([z[0], z[1]]); }
        const xs = raw.map(p => p[0]), ys = raw.map(p => p[1]), k = 66 / Math.max(Math.max.apply(null, xs) - Math.min.apply(null, xs), Math.max.apply(null, ys) - Math.min.apply(null, ys)) * 2;
        const cx = (Math.max.apply(null, xs) + Math.min.apply(null, xs)) / 2, cy2 = (Math.max.apply(null, ys) + Math.min.apply(null, ys)) / 2;
        const pts = raw.map(p => [150 + (p[0] - cx) * k, 85 + (p[1] - cy2) * k]);
        g.poline(pts, 'r nofill'); const st = pts[0], e = pts[pts.length - 1]; g.arrow(st[0], st[1], e[0], e[1], 'r new', 1);
        g.dot(st[0], st[1], 'pt', 3); g.text(st[0] - 8, st[1] - 4, 'start', 't mute', 'end'); g.text(e[0] + 12, e[1] + 14, 'A ≈ A₁/2', 't big new', 'start');
        g.text(170, 12, 'each zone turns it by π, a bit shorter', 't mute', 'middle', 0, 0);
        return;
      }
      const base = 70, amps = [60, 56, 52, 48, 44, 40, 36]; let x = 34;
      amps.forEach(function (a, k) {
        const sg = k % 2 ? -1 : 1; g.rect(x, base, x + 24, base + sg * a * 0.9, sg > 0 ? 'fillw' + (s === 1 ? ' new' : '') : 'fillg' + (s === 1 ? ' new' : ''));
        g.text(x + 12, base + (sg > 0 ? -12 : 12) + (sg > 0 ? 0 : 0) + sg * a * 0.9 * 0 + (sg > 0 ? -a * 0.9 + 0 : 0) * 0, '', 't'); x += 38;
      });
      g.line(20, base, 300, base, 'k'); ['+A₁', '−A₂', '+A₃', '−A₄', '+A₅', '−A₆', '+A₇'].forEach((t, k) => g.text(46 + 38 * k, base + (k % 2 ? 1 : -1) * (amps[k] * 0.9 + 12), t, 't sym'));
      if (s === 1) g.text(170, 152, 'A = A₁ − A₂ + A₃ − A₄ + …', 't big new', 'middle');
      if (s === 2) g.text(170, 152, 'A₁/2 + (A₁/2 − A₂ + A₃/2) + …  ≈  A₁/2', 't big new', 'middle');
    }
  });

  OFIG.add('zoneplate', {
    w: 340, n: 3, alt: s => ['Alternate zones blocked', 'Open zones reach the focus in phase', 'Higher foci at f₁/3, f₁/5 …'][s - 1],
    build(g, s) {
      const px = 90, cy = 85, f1 = 130;
      g.line(px, 12, px, 158, 'k thick'); [1, 2, 3, 4, 5, 6].forEach(k => { const r = 24 * Math.sqrt(k); if (k % 2) g.rect(px - 3, cy + Math.min(72, r) - (k > 1 ? Math.min(72, 24 * Math.sqrt(k - 1)) - 0 : 0) * 0 - 0, px + 3, cy + Math.min(72, r), 'fillk'); });
      g.line(20, cy, 320, cy, 'k dash'); [-60, -36, -12, 12, 36, 60].forEach(y => g.arrow(20, cy + y, px, cy + y, 'r2', 0.5));
      if (s <= 2) { const F = [px + f1, cy]; g.dot(F[0], F[1], 'pt new', 3.6); g.text(F[0], cy - 13, 'F', 't sym new'); [-60, -36, 36, 60].forEach(y => g.arrow(px, cy + y, F[0], F[1], 'r' + N(s, 2), 0.6)); g.dim(px, cy - 62, F[0], cy - 62, 'f₁ = r₁²/λ', 0, 'dim new'); }
      if (s === 1) g.text(215, 22, 'alternate zones blocked', 't new', 'middle');
      if (s === 2) g.text(215, 22, 'open zones arrive in phase', 't new', 'middle');
      if (s === 3) {
        [[f1, 'f₁', 'r'], [f1 / 3, 'f₁/3', 'r3']].forEach(function (p, k) { const F = [px + p[0], cy]; g.dot(F[0], F[1], 'pt' + (k ? ' new' : ''), 3.4); g.text(F[0], cy - 13, p[1], 't sym' + (k ? ' new' : ''));
          [-60, -12, 36].forEach(y => g.arrow(px, cy + y, F[0], F[1], p[2], 0.6)); });
        g.text(215, 22, 'at f₁/3: 3 half-zones per open zone', 't new', 'middle');
      }
    }
  });

  /* ── 3.5  straight edge ───────────────────────────────────────────────── */
  function spiral(g, org, sc, vmax, cls, marks) {
    const pts = [], n = 500; let C = 0, S = 0; const ds = vmax / n, mk = {};
    pts.push([org[0], org[1]]);
    for (let i = 1; i <= n; i += 1) { const s0 = (i - 0.5) * ds; C += Math.cos(Math.PI * s0 * s0 / 2) * ds; S += Math.sin(Math.PI * s0 * s0 / 2) * ds; pts.push([org[0] + C * sc, org[1] + S * sc]); mk[i] = [C, S]; }
    const neg = pts.map(p => [2 * org[0] - p[0], 2 * org[1] - p[1]]);
    g.poline(pts, cls || 'curve nofill'); g.poline(neg, cls || 'curve nofill');
    return { at: v => { const i = Math.max(1, Math.min(n, Math.round(v / ds))); return [org[0] + mk[i][0] * sc, org[1] + mk[i][1] * sc]; }, lim: [org[0] + 0.5 * sc, org[1] + 0.5 * sc] };
  }
  OFIG.add('cornu', {
    w: 340, n: 3, alt: s => ['Near the edge the extra path grows as x²: the phase is πv²/2', 'Adding wavelets traces the Cornu spiral (C, S)', 'The field is the distance from the lower limit point'][s - 1],
    build(g, s) {
      if (s === 1) {
        const yE = 90, px = 70, Pp = [285, yE - 30];
        g.line(px, 15, px, yE, 'k thick'); g.line(px, yE, px, 158, 'k'); g.text(px - 8, 52, 'shadow', 't mute', 'end'); g.text(px - 8, 128, 'lit', 't mute', 'end');
        g.dot(Pp[0], Pp[1], 'pt new', 3.6); g.text(Pp[0] + 8, Pp[1] - 2, 'P', 't sym new', 'start'); g.line(px, Pp[1], Pp[0], Pp[1], 'k dash');
        [yE - 8, yE + 30, yE + 60, yE + 90].forEach(function (y, k) { g.line(px, y, Pp[0], Pp[1], 'r' + (k === 1 ? ' new' : '')); g.dot(px, y, 'pt', 2.4); });
        g.dim(px + 20, Pp[1], px + 20, yE + 30, 'x', 0, 'dim new');
        g.text(170, 12, 'extra path ≈ x²/2d: phase πv²/2', 't new', 'middle', 0, 0);
        return;
      }
      const org = [170, 85], sc = 88, sp = spiral(g, org, sc, 3.2, 'curve' + (s === 2 ? '' : ' old') + ' nofill');
      g.line(org[0] - 100, org[1], org[0] + 100, org[1], 'k dash'); g.line(org[0], org[1] - 62, org[0], org[1] + 62, 'k dash');
      g.text(org[0] + 104, org[1] - 3, 'C', 't sym mute', 'start'); g.text(org[0] + 4, org[1] + 68, 'S', 't sym mute', 'start');
      g.dot(sp.lim[0], sp.lim[1], 'pt new', 3); g.dot(2 * org[0] - sp.lim[0], 2 * org[1] - sp.lim[1], 'pt new', 3);
      g.text(sp.lim[0] + 8, sp.lim[1] + 12, '(½, ½)', 't sym', 'start'); g.text(2 * org[0] - sp.lim[0] - 8, 2 * org[1] - sp.lim[1] - 8, '(−½, −½)', 't sym', 'end');
      if (s === 2) g.text(170, 158, 'C, S = ∫ cos, sin (πs²/2) ds', 't new', 'middle');
      if (s === 3) {
        const P = sp.at(0.8), lo = [2 * org[0] - sp.lim[0], 2 * org[1] - sp.lim[1]]; g.dot(P[0], P[1], 'pt new', 4); g.arrow(lo[0], lo[1], P[0], P[1], 'r new', 1); g.text(P[0] + 8, P[1] + 8, 'v', 't sym new', 'start');
        g.text(170, 158, 'I/I₀ = ½[(C + ½)² + (S + ½)²]', 't big new', 'middle');
      }
    }
  });

  OFIG.add('edge', {
    w: 340, n: 3, alt: s => ['At the edge of the shadow, v = 0', 'The first maximum lies on the illuminated side', 'Deep in the shadow the field dies away'][s - 1],
    build(g, s) {
      const org = [170, 85], sc = 88, sp = spiral(g, org, sc, 3.2, 'curve old nofill'), lo = [2 * org[0] - sp.lim[0], 2 * org[1] - sp.lim[1]];
      g.dot(lo[0], lo[1], 'pt', 3); g.line(org[0] - 100, org[1], org[0] + 100, org[1], 'k dash'); g.line(org[0], org[1] - 62, org[0], org[1] + 62, 'k dash');
      const v = s === 1 ? 0 : s === 2 ? 1.22 : 0.001, P = s === 3 ? (function () { const q = sp.at(1.6); return [2 * org[0] - q[0], 2 * org[1] - q[1]]; })() : sp.at(Math.max(v, 0.002));
      const P0 = s === 1 ? [org[0], org[1]] : P;
      g.arrow(lo[0], lo[1], P0[0], P0[1], 'r new', 1); g.dot(P0[0], P0[1], 'pt new', 4);
      g.text(170, 158, ['v = 0:  I = I₀/4  (distance² = ¼ of the full)', 'v ≈ 1.22:  I ≈ 1.37 I₀  (overshoot)', 'v → −∞:  arrow shrinks to zero, no fringes'][s - 1], 't big new', 'middle');
    }
  });

  /* ── 3.4  Schuster's summation for Fresnel half-period zones ─────────── */
  OFIG.add('schuster', {
    w: 360, n: 4, alt: s => ['Alternating zone amplitudes u₁ − u₂ + u₃ − u₄ + … with monotonic decrease',
      'Schuster regrouping: u₁/2 + (u₁/2 − u₂ + u₃/2) + (u₃/2 − u₄ + u₅/2) + …',
      'Smooth obliquity factor ensures uₙ ≈ (uₙ₋₁ + uₙ₊₁)/2, cancelling each bracket',
      'Resultant amplitude u = u₁/2 and intensity I = I₁/4 of the first zone'][s - 1],
    build(g, s) {
      if (s === 4) {
        g.text(180, 156, 'Resultant: amplitude u = u₁/2   and   intensity I = I₁/4', 't big new', 'middle');

        /* Panel 1: First zone alone */
        const p1x = 90;
        g.text(p1x, 134, 'First Zone Alone', 't mute', 'middle');
        g.rect(50, 35, 70, 115, 'fillk');
        g.text(60, 122, 'u₁', 't sym', 'middle');
        g.dim(40, 35, 40, 115, 'u₁', 0, 'dim');
        g.rect(90, 45, 140, 95, 'fillw');
        g.text(115, 70, 'I₁ = u₁²', 't sym', 'middle');

        /* Panel 2: Entire wavefront */
        const p2x = 250;
        g.text(p2x, 134, 'Entire Wavefront', 't new', 'middle');
        g.rect(210, 35, 230, 75, 'fillk new');
        g.text(220, 82, 'u₁/2', 't sym new', 'middle');
        g.dim(200, 35, 200, 75, 'u₁/2', 0, 'dim new');
        g.rect(245, 45, 270, 70, 'fillg new');
        g.text(296, 58, 'I = I₁/4', 't big new', 'start');

        g.text(180, 16, 'entire wavefront yields u = u₁/2 and I = I₁/4', 't big new', 'middle');
        return;
      }

      if (s === 3) {
        g.text(180, 156, 'uₙ ≈ arithmetic mean of its neighbours', 't big new', 'middle');

        /* Geometry plot on the left showing chord midpoint vs curve */
        const bx0 = 35, bx1 = 175, by0 = 35, by1 = 125;
        g.line(bx0, by0, bx1, by0, 'k'); g.line(bx0, by0, bx0, by1 + 5, 'k');
        g.text(bx1, by0 - 11, 'n', 't sym mute', 'end'); g.text(bx0 - 5, by1 + 5, 'uₙ', 't sym mute', 'end');

        const pts = [];
        for (let x = 0; x <= 130; x += 3) {
          const n = 1 + x / 35;
          const y = by0 + 85 - 18 * (n - 1) + 1.2 * (n - 1) * (n - 1);
          pts.push([bx0 + x, y]);
        }
        g.poline(pts, 'curve old nofill');

        /* 3 consecutive points: n=2, n=3, n=4 */
        const pA = [bx0 + 35, by0 + 85 - 18 + 1.2], pB = [bx0 + 70, by0 + 85 - 36 + 4.8], pC = [bx0 + 105, by0 + 85 - 54 + 10.8];
        g.line(pA[0], pA[1], pC[0], pC[1], 'k dash');
        const chordMidY = (pA[1] + pC[1]) / 2;
        g.dot(pA[0], pA[1], 'pt', 2.8); g.dot(pC[0], pC[1], 'pt', 2.8);
        g.dot(pB[0], pB[1], 'pt new', 3.6); g.dot(pB[0], chordMidY, 'pt hollow', 3.2);

        g.text(pA[0], by0 - 10, 'n−1', 't mute'); g.text(pB[0], by0 - 10, 'n', 't new'); g.text(pC[0], by0 - 10, 'n+1', 't mute');
        g.text(pB[0] + 6, pB[1] + 10, 'uₙ ≈ ½(uₙ₋₁ + uₙ₊₁)', 't sym new', 'start');

        /* Right panel with formulas */
        const rx = 265;
        g.text(rx, 122, 'Smooth obliquity factor:', 't mute', 'middle');
        g.text(rx, 102, 'uₙ ≈ ½(uₙ₋₁ + uₙ₊₁)', 't big new', 'middle');
        g.text(rx, 78, '⇒ ½uₙ₋₁ − uₙ + ½uₙ₊₁ ≈ 0', 't big new', 'middle');
        g.text(rx, 54, 'every bracket cancels!', 't new', 'middle');

        g.text(180, 16, 'Each group is approximately zero.', 't mute', 'middle');
        return;
      }

      /* Stages 1 and 2: bar representations */
      const base = 75, amps = [58, 52, 46, 40, 35, 30, 25];
      g.line(20, base, 340, base, 'k');

      if (s === 1) {
        amps.forEach(function (a, k) {
          const sg = k % 2 ? -1 : 1, x = 32 + k * 44;
          g.rect(x, base, x + 26, base + sg * a, sg > 0 ? 'fillw new' : 'fillg new');
          g.text(x + 13, base + (sg > 0 ? a + 11 : -a + 6), (sg > 0 ? '+u' : '−u') + (k + 1), 't sym new');
        });
        g.text(180, 156, 'u(P) = u₁ − u₂ + u₃ − u₄ + u₅ − …', 't big new', 'middle');
        g.text(180, 16, 'Adjacent zones contribute opposite phases.', 't mute', 'middle');
      }

      if (s === 2) {
        /* First zone split into u1/2 */
        g.rect(32, base, 32 + 24, base + amps[0] / 2, 'fillk new');
        g.text(32 + 12, base + amps[0] / 2 + 11, 'u₁/2', 't sym new', 'middle');

        /* Group 1: (u1/2 - u2 + u3/2) */
        g.rect(72, base - 56, 178, base + 34, 'fillk');
        g.rect(78, base, 78 + 20, base + amps[0] / 2, 'fillw');
        g.rect(106, base - amps[1], 106 + 22, base, 'fillg');
        g.rect(136, base, 136 + 20, base + amps[2] / 2, 'fillw');
        g.text(125, base + 42, '(u₁/2 − u₂ + u₃/2)', 't sym new', 'middle');

        /* Group 2: (u3/2 - u4 + u5/2) */
        g.rect(194, base - 46, 300, base + 28, 'fillk');
        g.rect(200, base, 200 + 20, base + amps[2] / 2, 'fillw');
        g.rect(228, base - amps[3], 228 + 22, base, 'fillg');
        g.rect(258, base, 258 + 20, base + amps[4] / 2, 'fillw');
        g.text(247, base + 36, '(u₃/2 − u₄ + u₅/2)', 't sym new', 'middle');

        g.text(324, base + 14, '+ …', 't sym mute');

        g.text(180, 156, 'u = u₁/2 + (u₁/2 − u₂ + u₃/2) + (u₃/2 − u₄ + u₅/2) + …', 't big new', 'middle');
        g.text(180, 16, 'Split odd zones; regroup the series.', 't new', 'middle');
      }
    }
  });
})();

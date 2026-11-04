/* Optics step diagrams — Module I (Fermat's principle, surfaces, thin lens, Newton).
   Registers into OFIG (optics.figs.js). Nothing here touches DOM at load. */

(function () {
  const N = (s, k) => (s === k ? ' new' : '');
  const D = Math.PI / 180;
  const deg = r => r / D;

  /* solve n1 sinθ1 = n2 sinθ2 for the crossing abscissa (bisection) — the figure uses the real law */
  function snellX(ax, a, bx, b, n1, n2) {
    let lo = ax, hi = bx;
    const f = x => n1 * (x - ax) / Math.hypot(a, x - ax) - n2 * (bx - x) / Math.hypot(b, bx - x);
    for (let i = 0; i < 60; i += 1) { const m = (lo + hi) / 2; if (f(m) > 0) hi = m; else lo = m; }
    return (lo + hi) / 2;
  }

  /* ── 1.1  reflection ─────────────────────────────────────────────────── */
  OFIG.add('reflect', {
    n: 4, alt: s => ['A mirror, two points and a reflection point P', 'Other possible reflection points make longer paths',
      'The normal at P with equal angles i and r', 'Top view: moving P sideways out of the plane of incidence lengthens the path'][s - 1],
    build(g, s) {
      if (s === 4) {                                   /* top view of the mirror plane */
        g.rect(25, 20, 295, 150, 'fillk');
        g.text(160, 10, 'mirror plane seen from above', 't mute');
        const A = [70, 105], B = [250, 65];
        g.line(A[0], A[1], B[0], B[1], 'k dash');
        g.text(135, 62, 'plane of incidence (edge-on)', 't mute', 'middle', 0, 0);
        const P = [A[0] + (B[0] - A[0]) * 0.55, A[1] + (B[1] - A[1]) * 0.55];
        const Q = [P[0] + 12, P[1] + 38];
        g.dot(A[0], A[1], 'pt'); g.dot(B[0], B[1], 'pt'); g.dot(P[0], P[1], 'pt new', 3.6); g.dot(Q[0], Q[1], 'pt hollow', 3.4);
        g.text(A[0] - 6, A[1] + 12, 'A′', 't sym', 'middle'); g.text(B[0] + 4, B[1] + 12, 'B′', 't sym', 'middle');
        g.text(P[0] - 8, P[1] - 10, 'P', 't sym new', 'middle'); g.text(Q[0] + 14, Q[1], 'P′', 't sym', 'middle');
        g.line(A[0], A[1], Q[0], Q[1], 'r2 dash'); g.line(Q[0], Q[1], B[0], B[1], 'r2 dash');
        g.text(160, 40, 'AP′ + P′B is longer;', 't', 'middle', 0, 0); g.text(160, 28, 'only P, in the plane, is stationary', 't new', 'middle', 0, 0);
        return;
      }
      const my = 30, A = [60, 120], B = [250, 95];
      const Ai = [A[0], 2 * my - A[1]], t = (my - Ai[1]) / (B[1] - Ai[1]), P = [Ai[0] + (B[0] - Ai[0]) * t, my];
      g.line(20, my, 300, my, 'k thick'); g.hatch(24, 296, my, 8);
      if (s === 2) {                                   /* trial reflection points */
        [105, 135, 215, 240].forEach(function (x) {
          g.line(A[0], A[1], x, my, 'k dash'); g.line(x, my, B[0], B[1], 'k dash'); g.dot(x, my, 'pt hollow', 2.6);
        });
        g.text(160, 8, 'other points: every path is longer', 't mute', 'middle', 0, 0);
      }
      g.arrow(A[0], A[1], P[0], P[1], 'r' + (s > 1 ? '' : ' new'), 0.55); g.arrow(P[0], P[1], B[0], B[1], 'r' + (s > 1 ? '' : ' new'), 0.6);
      g.dot(A[0], A[1]); g.dot(B[0], B[1]); g.dot(P[0], P[1], 'pt' + N(s, 1) + N(s, 2), 3.6);
      g.text(A[0] - 10, A[1] + 4, 'A', 't sym'); g.text(B[0] + 10, B[1] + 4, 'B', 't sym'); g.text(P[0], my - 12, 'P', 't sym' + N(s, 1), 'middle', 0, 0);
      if (s === 1) {
        g.dim(A[0] - 14, A[1], A[0] - 14, my, 'a', 0, 'dim new');
        g.dim(B[0] + 14, B[1], B[0] + 14, my, 'b', 0, 'dim new');
        g.dim(A[0], my, P[0], my, 'x', 22, 'dim new'); g.dim(P[0], my, B[0], my, 'd − x', 22, 'dim new');
        g.text(160, 158, 'L(x) = AP + PB', 't big new');
      }
      if (s === 3) {
        g.line(P[0], my, P[0], 148, 'k dash');
        const ia = deg(Math.atan2(A[1] - my, A[0] - P[0])), ib = deg(Math.atan2(B[1] - my, B[0] - P[0]));
        g.angle(P[0], my, 26, 90, ia, 'i', 'ang new'); g.angle(P[0], my, 26, ib, 90, 'r', 'ang new');
        g.text(160, 158, 'dL/dx = sin i − sin r = 0', 't big new');
      }
    }
  });

  /* ── 1.1  Snell's law ─────────────────────────────────────────────────── */
  OFIG.add('snell', {
    n: 4, alt: s => ['Ray from A in medium 1 to B in medium 2 crossing at R', 'The optical path L(x) has a minimum at R',
      'The angles θ₁ and θ₂ from the normal are the sines in the derivative', 'n₁ sin θ₁ = n₂ sin θ₂'][s - 1],
    build(g, s) {
      const yI = 85, A = [55, 150], B = [250, 20], n1 = 1, n2 = 1.5;
      const rx = snellX(A[0], A[1] - yI, B[0], yI - B[1], n1, n2), R = [rx, yI];
      g.rect(15, yI, 305, 165, 'fillw'); g.rect(15, 5, 305, yI, 'fillg');
      g.line(15, yI, 305, yI, 'k thick');
      g.text(28, 155, 'n₁', 't sym big'); g.text(28, 12, 'n₂ > n₁', 't sym big');
      g.arrow(A[0], A[1], R[0], R[1], 'r' + N(s, 1), 0.5); g.arrow(R[0], R[1], B[0], B[1], 'r' + N(s, 1), 0.55);
      g.dot(A[0], A[1]); g.dot(B[0], B[1]); g.dot(R[0], R[1], 'pt new', 3.6);
      g.text(A[0] - 10, A[1] + 3, 'A', 't sym'); g.text(B[0] + 10, B[1], 'B', 't sym'); g.text(R[0] + 8, yI + 12, 'R', 't sym new');
      if (s === 1) {
        g.dim(A[0] - 12, A[1], A[0] - 12, yI, 'a', 0, 'dim new'); g.dim(B[0] + 12, yI, B[0] + 12, B[1], 'b', 0, 'dim new');
        g.dim(A[0], yI, R[0], yI, 'x', -14, 'dim new'); g.dim(R[0], yI, B[0], yI, 'd − x', -14, 'dim new');
        g.text(210, 128, 'L(x) = n₁·AR + n₂·RB', 't big new');
      }
      if (s >= 2) {                                    /* inset plot of L(x) */
        const bx0 = 232, bx1 = 302, by0 = 118, by1 = 152;
        g.rect(bx0 - 8, by0 - 8, bx1 + 8, by1 + 22, 'fillk');
        const L = x => n1 * Math.hypot(A[1] - yI, x - A[0]) + n2 * Math.hypot(yI - B[1], B[0] - x);
        const xs = []; for (let i = 0; i <= 40; i += 1) xs.push(A[0] + (B[0] - A[0]) * i / 40);
        const lv = xs.map(L), lmin = Math.min.apply(null, lv), lmax = Math.max.apply(null, lv);
        const px = x => bx0 + (x - A[0]) / (B[0] - A[0]) * (bx1 - bx0), py = v => by0 + (v - lmin) / (lmax - lmin) * (by1 - by0);
        g.poline(xs.map((x, i) => [px(x), by1 + by0 - py(lv[i])]), 'curve' + (s === 2 ? '' : ' old'));
        g.dot(px(rx), by1 + by0 - py(L(rx)), 'pt new', 3);
        g.line(px(rx), by1 + by0 - py(L(rx)), px(rx), by0 - 2, 'k dash');
        g.text(bx0 + 2, by1 + 12, 'L(x) against x', 't mute', 'start');
        if (s === 2) g.text(246, by0 - 16, 'min at R: dL/dx = 0', 't new', 'middle');
      }
      if (s >= 3) {
        g.line(R[0], yI - 55, R[0], yI + 60, 'k dash');
        g.line(A[0], A[1], A[0], yI, 'k dash'); g.line(B[0], B[1], B[0], yI, 'k dash');
        const t1 = deg(Math.atan2(A[1] - yI, A[0] - R[0])), t2 = deg(Math.atan2(B[1] - yI, B[0] - R[0]));
        g.angle(R[0], yI, 24, 90, t1, 'θ₁', 'ang new'); g.angle(R[0], yI, 24, 270, 360 + t2, 'θ₂', 'ang new');
      }
      if (s === 4) g.text(160, 6, 'n₁ sin θ₁ = n₂ sin θ₂', 't big new');
    }
  });

  /* ── 1.1  the parabola images a point at infinity perfectly ──────────── */
  OFIG.add('parabola', {
    n: 3, alt: s => ['A parabola: every point is as far from the focus as from the directrix',
      'A ray parallel to the axis reflects through the focus', 'All parallel rays have the same optical path to the focus'][s - 1],
    build(g, s) {
      const cy = 85, vx = 78, p = 42, S = [vx + p, cy], dirx = vx - p;
      const par = y => vx + (y - cy) * (y - cy) / (4 * p);
      const pts = []; for (let y = 8; y <= 162; y += 4) pts.push([par(y), y]);
      g.poline(pts, 'surf');
      g.line(dirx, 5, dirx, 165, 'k dash'); g.text(dirx, 160, 'directrix', 't mute', 'middle', 0, 0);
      g.line(vx - 12, cy, 300, cy, 'k dash'); g.dot(S[0], S[1], 'pt', 3.4); g.text(S[0] + 3, cy - 12, 'S', 't sym');
      g.text(vx - 8, cy - 12, 'C', 't sym');
      const yq = 135, Q = [par(yq), yq], Lp = [dirx, yq];
      if (s === 1) {
        g.line(Q[0], Q[1], S[0], S[1], 'r new'); g.line(Q[0], Q[1], Lp[0], Lp[1], 'r2 new');
        g.dot(Q[0], Q[1], 'pt new'); g.dot(Lp[0], Lp[1], 'pt');
        g.text(Q[0] + 6, Q[1] + 9, 'Q', 't sym'); g.text(Lp[0] - 8, Lp[1] + 9, 'L′', 't sym');
        g.text(Q[0] + 22, 108, 'QS', 't sym new'); g.text((Q[0] + Lp[0]) / 2, yq + 8, 'QL′', 't sym new');
        g.text(200, 30, 'QS = QL′  (definition of the parabola)', 't new');
      } else {
        [135, 45].forEach(function (yy, k) {
          const q = [par(yy), yy];
          g.arrow(290, yy, q[0], yy, 'r2', 0.5); g.arrow(q[0], yy, S[0], S[1], 'r' + (s === 2 && k === 0 ? ' new' : ''), 0.55);
          g.dot(q[0], q[1], 'pt' + (k === 0 ? ' new' : ''));
        });
        g.text(Q[0] + 6, Q[1] + 10, 'Q', 't sym');
        if (s === 2) { g.text(246, yq + 10, 'P', 't sym'); g.dot(246, yq, 'pt'); }
      }
      if (s === 3) {
        g.line(258, 20, 258, 155, 'k'); g.text(258, 160, 'plane wavefront', 't mute', 'middle', 0, 0);
        g.dim(dirx, yq + 18, 258, yq + 18, 'PL′ = PQ + QS', 0, 'dim new');
        g.dim(dirx, 45 - 18, 258, 45 - 18, 'same length', 0, 'dim new');
      }
    }
  });

  /* ── 1.2  refraction at a single spherical surface ───────────────────── */
  OFIG.add('sphref', {
    w: 380, n: 4, sc: 1.25, ox: 22, oy: 104, alt: s => ['The exterior-angle relations θ₁ = α + γ in triangle Ob P C',
      'Snell in the small-angle form n₁θ₁ = n₂θ₂ with θ₂ = γ − β', 'Angles written as height over distance: α ≈ −h/u, β ≈ h/v, γ ≈ h/R',
      'n₂/v − n₁/u = (n₂ − n₁)/R'][s - 1],
    build(g, s) {
      const n1 = 1, n2 = 2, Ov = [90, 0], R = 40, C = [130, 0], u = -90, Ob = [0, 0];
      const h = 17, P = [C[0] - Math.sqrt(R * R - h * h), h];
      /* the refracted ray from Snell's law at P — exact, not drawn to a formula's answer */
      const al = deg(Math.atan2(h, P[0] - Ob[0])), ga = deg(Math.asin(h / R)), t1 = al + ga;
      const t2 = deg(Math.asin(Math.sin(t1 * D) * n1 / n2)), be = ga - t2, I = [P[0] + h / Math.tan(be * D), 0];
      g.rect(-10, -62, Ov[0], 62, 'fillw'); g.rect(-10, 0, Ov[0], 62, 'fillw'); g.rect(Ov[0], -62, 250, 62, 'fillg'); g.rect(Ov[0], 0, 250, 62, 'fillg');
      g.line(-12, 0, 252, 0, 'k dash');
      g.arc(C[0], C[1], R, 180 - 60, 180 + 60, 'surf');
      g.text(0, 52, 'n₁', 't sym big'); g.text(228, 52, 'n₂ > n₁', 't sym big');
      g.dot(Ob[0], 0); g.text(Ob[0], -12, 'Ob', 't sym'); g.dot(Ov[0], 0); g.text(Ov[0] - 4, -12, 'O', 't sym');
      g.dot(C[0], 0); g.text(C[0], -12, 'C', 't sym'); g.dot(P[0], P[1], 'pt new'); g.text(P[0] - 6, P[1] + 9, 'P', 't sym');
      g.arrow(Ob[0], 0, P[0], P[1], 'r' + N(s, 1), 0.5);
      g.line(C[0], 0, P[0] + 0.5 * (P[0] - C[0]), P[1] + 0.5 * P[1], 'k dash');                          /* the radius CP, extended */
      if (s === 1) g.poly([Ob, P, C], 'fillk new');
      g.angle(Ob[0], 0, 26, 0, al, 'α', 'ang new'); g.angle(C[0], 0, 17, 180 - ga, 180, 'γ', 'ang new');
      g.angle(P[0], P[1], 15, 180 - ga, 180 + al, 'θ₁', 'ang new');
      if (s === 1) g.text(125, -48, 'exterior angle:  θ₁ = α + γ', 't new', 'middle');
      if (s >= 2) {
        g.arrow(P[0], P[1], I[0], 0, 'r' + N(s, 2), 0.55); g.dot(I[0], 0, 'pt new', 3.6); g.text(I[0], -12, 'I', 't sym');
        g.angle(I[0], 0, 24, 180 - be, 180, 'β', 'ang new'); g.angle(P[0], P[1], 22, -ga, -be, 'θ₂', 'ang new');
        if (s === 2) g.text(125, -48, 'θ₂ = γ − β,    n₁θ₁ = n₂θ₂', 't new', 'middle');
      }
      if (s >= 3) {
        g.line(P[0], P[1], P[0], 0, 'k dash');
        g.dim(P[0] + 9, 0, P[0] + 9, P[1], 'h', 0, 'dim new');
        g.dim(Ob[0], 0, Ov[0], 0, 'u', -26, 'dim new'); g.dim(Ov[0], 0, I[0], 0, 'v', -26, 'dim new'); g.dim(Ov[0], 0, C[0], 0, 'R', -12, 'dim new');
        if (s === 3) g.text(125, 52, 'α ≈ −h/u,   β ≈ h/v,   γ ≈ h/R', 't new', 'middle');
      }
      if (s === 4) g.text(125, 52, 'n₂/v − n₁/u = (n₂ − n₁)/R', 't big new', 'middle');
    }
  });

  /* ── 1.2  the mirror formula from the refraction formula ─────────────── */
  OFIG.add('mirrorfold', {
    n: 3, alt: s => ['Refraction: the ray carries on through the surface', 'Reflection: the ray turns back — bookkeeping n₂ = −n₁',
      'Parallel rays meet at F = R/2'][s - 1],
    build(g, s) {
      const cy = 85;
      if (s <= 2) {
        const Ov = [175, cy], R = 60, C = [Ov[0] + (s === 1 ? R : -R), cy];
        g.line(20, cy, 300, cy, 'k dash');
        g.arc(C[0], C[1], R, s === 1 ? 180 - 55 : -55, s === 1 ? 180 + 55 : 55, 'surf');
        g.dot(C[0], C[1]); g.text(C[0], cy - 13, 'C', 't sym'); g.dot(Ov[0], Ov[1]); g.text(Ov[0] + (s === 1 ? -4 : 5), cy - 13, 'O', 't sym');
        const P = [C[0] + (s === 1 ? -1 : 1) * Math.sqrt(R * R - 24 * 24), cy + 24];
        g.arrow(45, cy, P[0], P[1], 'r', 0.55);
        if (s === 1) {
          g.arrow(P[0], P[1], 290, 60, 'r new', 0.55);
          g.text(95, 150, 'n₁ →', 't sym big'); g.text(255, 150, 'n₂', 't sym big'); g.text(160, 12, 'refracted ray continues to the right', 't mute');
        } else {
          g.arrow(P[0], P[1], 45 + 40, 4 + 50, 'r new', 0.6);
          g.text(95, 150, 'n₁', 't sym big'); g.text(255, 150, 'n₂ = −n₁', 't sym big new'); g.text(160, 12, 'the reflected ray runs back: negative index', 't new');
        }
        return;
      }
      const Ov = [262, cy], R = 130, C = [Ov[0] - R, cy], F = [Ov[0] - R / 2, cy];
      g.line(20, cy, 305, cy, 'k dash');
      g.arc(C[0], C[1], R, -38, 38, 'surf'); g.dot(C[0], C[1]); g.dot(F[0], F[1], 'pt new', 3.6); g.dot(Ov[0], Ov[1]);
      g.text(C[0], cy - 13, 'C', 't sym'); g.text(F[0], cy - 13, 'F', 't sym new'); g.text(Ov[0] + 6, cy - 13, 'O', 't sym');
      [30, 14, -20, -38].forEach(function (yy, k) {
        const px = C[0] + Math.sqrt(R * R - yy * yy);
        g.arrow(20, cy + yy, px, cy + yy, 'r2', 0.5); g.arrow(px, cy + yy, F[0], F[1], 'r new', 0.5);
      });
      g.dim(Ov[0], cy - 26, F[0], cy - 26, 'f = R/2', 0, 'dim new');
    }
  });

  /* ── 1.2  lateral magnification at a surface ─────────────────────────── */
  OFIG.add('surfmag', {
    w: 340, n: 3, alt: s => ['The ray from the top of the object to the vertex O', 'It refracts at the vertex by n₁θ₁ = n₂θ₂',
      'The image is inverted; m = n₁v / n₂u'][s - 1],
    build(g, s) {
      const cy = 85, n1 = 1, n2 = 2, R = 40, Ov = [165, cy], C = [Ov[0] + R, cy], u = -125, ho = 42;
      const v = n2 / (n1 / u + (n2 - n1) / R), t1 = Math.atan2(ho, -u), t2 = Math.asin(Math.sin(t1) * n1 / n2);
      const hi = -Math.tan(t2) * v;
      g.line(10, cy, 335, cy, 'k dash');
      g.rect(10, 15, Ov[0], 155, 'fillw'); g.rect(Ov[0], 15, 335, 155, 'fillg'); g.arc(C[0], C[1], R, 180 - 58, 180 + 58, 'surf');
      g.text(40, 150, 'n₁', 't sym big'); g.text(300, 150, 'n₂', 't sym big'); g.dot(Ov[0], Ov[1]); g.text(Ov[0] - 2, cy - 12, 'O', 't sym');
      g.arrow(Ov[0] + u, cy, Ov[0] + u, cy + ho, 'obj', 1); g.line(Ov[0] + u, cy, Ov[0] + u, cy + ho, 'k thick');
      g.text(Ov[0] + u - 12, cy + ho / 2, 'hₒ', 't sym');
      g.arrow(Ov[0] + u, cy + ho, Ov[0], cy, 'r' + N(s, 1), 0.55);
      g.angle(Ov[0], cy, 30, 180, 180 - deg(t1), 'θ₁', 'ang new');
      if (s >= 2) {
        g.arrow(Ov[0], cy, Ov[0] + v, cy + hi, 'r' + N(s, 2), 0.6);
        g.angle(Ov[0], cy, 42, 0, -deg(t2), 'θ₂', 'ang new');
        if (s === 2) g.text(250, 12, 'n₁θ₁ = n₂θ₂', 't new');
      }
      if (s >= 3) {
        g.line(Ov[0] + v, cy, Ov[0] + v, cy + hi, 'k thick'); g.dot(Ov[0] + v, cy + hi, 'pt new');
        g.text(Ov[0] + v + 12, cy + hi / 2, 'hᵢ', 't sym new');
        g.dim(Ov[0] + u, cy, Ov[0], cy, 'u', -26, 'dim new'); g.dim(Ov[0], cy, Ov[0] + v, cy, 'v', -26, 'dim new');
        g.text(250, 12, 'hᵢ/hₒ = n₁v / n₂u', 't big new');
      }
    }
  });

  /* ── 1.3  the thin lens as two surfaces ──────────────────────────────── */
  OFIG.add('thinlens', {
    w: 340, n: 4, alt: s => ['The first surface forms an intermediate image I₁', 'The second surface takes I₁ as its object',
      'Adding the two: the intermediate image drops out', 'An object at infinity is focused at f'][s - 1],
    build(g, s) {
      const cy = 85, Lx = 150, top = 28, bot = 142, hp = 32;
      const I1 = [232, cy], I = [305, cy], Ob = [30, cy];
      g.line(10, cy, 335, cy, 'k dash');
      g.lens(Lx, top, bot, 'lens', 9);
      const front = 'M' + g.X(Lx) + ' ' + g.Y(bot) + ' Q' + g.X(Lx - 17) + ' ' + g.Y(cy) + ' ' + g.X(Lx) + ' ' + g.Y(top);
      const back = 'M' + g.X(Lx) + ' ' + g.Y(bot) + ' Q' + g.X(Lx + 17) + ' ' + g.Y(cy) + ' ' + g.X(Lx) + ' ' + g.Y(top);
      if (s === 1) g.path(front, 'surf new nofill'); if (s === 2) g.path(back, 'surf new nofill');
      if (s === 4) {
        const F = [Lx + 105, cy];
        [34, 14, -14, -34].forEach(function (yy) { g.arrow(15, cy + yy, Lx, cy + yy, 'r2', 0.5); g.arrow(Lx, cy + yy, F[0], F[1], 'r' + N(s, 4), 0.55); });
        g.dot(F[0], F[1], 'pt new', 3.6); g.text(F[0], cy - 13, 'F', 't sym new'); g.dim(Lx, cy - 40, F[0], cy - 40, 'f', 0, 'dim new');
        g.text(170, 158, '1/v − 1/u = 1/f,   1/f = (n − 1)(1/R₁ − 1/R₂)', 't new');
        return;
      }
      g.dot(Ob[0], Ob[1]); g.text(Ob[0], cy - 13, 'Ob', 't sym');
      const P1 = [Lx - 1, cy + hp], P2 = [Lx + 2, cy + hp - 2.4];
      g.arrow(Ob[0], Ob[1], P1[0], P1[1], 'r' + (s > 1 ? '' : ' new'), 0.55);
      if (s === 1) {
        g.line(P1[0], P1[1], I1[0], I1[1], 'r new dash'); g.dot(I1[0], I1[1], 'pt hollow', 3.6);
        g.text(I1[0], cy - 13, 'I₁', 't sym new'); g.dim(Lx, cy - 34, I1[0], cy - 34, 'v₁', 0, 'dim new');
        g.text(170, 158, 'surface 1:  n/v₁ − 1/u = (n − 1)/R₁', 't new');
      } else if (s === 2) {
        g.line(P1[0], P1[1], P2[0], P2[1], 'r'); g.line(P2[0], P2[1], I1[0], I1[1], 'r dash');
        g.dot(I1[0], I1[1], 'pt hollow', 3.6); g.text(I1[0], cy - 13, 'I₁', 't sym'); g.dim(Lx, cy - 34, I1[0], cy - 34, 'v₁', 0, 'dim');
        g.arrow(P2[0], P2[1], I[0], I[1], 'r new', 0.6); g.dot(I[0], I[1], 'pt new', 3.6); g.text(I[0], cy - 13, 'I', 't sym new');
        g.text(170, 158, 'surface 2:  1/v − n/v₁ = (1 − n)/R₂  (thin: same plane)', 't new');
      } else {
        g.line(P1[0], P1[1], P2[0], P2[1], 'r new'); g.arrow(P2[0], P2[1], I[0], I[1], 'r new', 0.6);
        g.dot(I[0], I[1], 'pt new', 3.6); g.text(I[0], cy - 13, 'I', 't sym new');
        g.dim(Ob[0], cy - 34, Lx, cy - 34, 'u', 0, 'dim new'); g.dim(Lx, cy - 34, I[0], cy - 34, 'v', 0, 'dim new');
        g.text(170, 158, 'add: the n/v₁ terms cancel', 't new');
      }
    }
  });

  /* ── 1.3  two thin lenses ─────────────────────────────────────────────── */
  OFIG.add('twolens', {
    w: 340, n: 4, alt: s => ['A parallel ray at height h₁ is bent by lens 1 toward its focus', 'It travels d and reaches lens 2 at height h₂',
      'Lens 2 bends it again: slope α₂', 'The equivalent lens: focal length F from the principal plane'][s - 1],
    build(g, s) {
      const cy = 85, x1 = 85, x2 = 185, h1 = 40, f1 = 165, f2 = 55;
      const a1 = -h1 / f1, h2 = h1 + a1 * (x2 - x1), a2 = a1 - h2 / f2, Fx = x2 + h2 / -a2, Feff = h1 / -a2, Hx = Fx - Feff;
      g.line(10, cy, 335, cy, 'k dash');
      g.lens(x1, cy - 52, cy + 52, 'lens', 8); g.lens(x2, cy - 40, cy + 40, 'lens', 8);
      g.text(x1, cy + 64, 'L₁', 't sym'); g.text(x2, cy + 54, 'L₂', 't sym');
      g.arrow(15, cy + h1, x1, cy + h1, 'r2', 0.5); g.dim(x1 - 15, cy, x1 - 15, cy + h1, 'h₁', 0, s === 1 ? 'dim new' : 'dim');
      g.arrow(x1, cy + h1, x2, cy + h1 + a1 * (x2 - x1), 'r' + N(s, 1), 0.5);
      if (s === 1) { g.dot(x1 + f1, cy, 'pt hollow', 3); g.text(x1 + f1, cy - 13, 'F₁′', 't sym'); g.text(250, 145, 'slope after L₁:  α₁ = −h₁/f₁', 't new'); }
      if (s >= 2) {
        g.dim(x2 + 14, cy, x2 + 14, cy + h2, 'h₂', 0, s === 2 ? 'dim new' : 'dim'); g.dim(x1, cy - 62, x2, cy - 62, 'd', 0, s === 2 ? 'dim new' : 'dim');
        if (s === 2) g.text(250, 145, 'h₂ = h₁ + α₁d', 't new');
      }
      if (s >= 3) {
        g.arrow(x2, cy + h2, Fx, cy, 'r' + N(s, 3), 0.55); g.dot(Fx, cy, 'pt new', 3.6); g.text(Fx, cy - 13, 'F', 't sym new');
        if (s === 3) g.text(250, 145, 'α₂ = α₁ − h₂/f₂', 't new');
      }
      if (s === 4) {
        g.line(x1, cy + h1, Hx, cy + h1, 'r2 dash'); g.line(Hx, cy + h1, Fx, cy, 'r new dash'); g.line(Hx, cy - 20, Hx, cy + 60, 'k dash');
        g.text(Hx, cy + 68, 'principal plane', 't mute'); g.dim(Hx, cy - 22, Fx, cy - 22, 'F', 0, 'dim new');
        g.text(250, 145, 'α₂ = −h₁/F', 't new');
      }
    }
  });

  /* ── 1.4  Newton's formula ────────────────────────────────────────────── */
  OFIG.add('newton', {
    w: 340, n: 4, alt: s => ['Distances measured from the foci: x from F₁, x′ from F₂', 'The same points measured from the lens: u and v',
      'u = x − f and v = x′ + f', 'x·x′ = −f²'][s - 1],
    build(g, s) {
      const cy = 85, Lx = 165, f = 55, ho = 36, u = Lx - 30, v = 1 / (1 / f - 1 / u), hi = -ho * v / u, xo = u - f, xi = v - f;
      g.line(10, cy, 335, cy, 'k dash'); g.lens(Lx, cy - 55, cy + 55, 'lens', 8);
      g.dot(Lx - f, cy, 'pt hollow', 3.2); g.dot(Lx + f, cy, 'pt hollow', 3.2); g.text(Lx - f, cy - 13, 'F₁', 't sym'); g.text(Lx + f, cy - 13, 'F₂', 't sym');
      g.line(30, cy, 30, cy + ho, 'k thick'); g.dot(30, cy + ho, 'pt'); g.line(Lx + v, cy, Lx + v, cy + hi, 'k thick'); g.dot(Lx + v, cy + hi, 'pt');
      g.arrow(30, cy + ho, Lx, cy + ho, 'r2', 0.5); g.arrow(Lx, cy + ho, Lx + v, cy + hi, 'r2', 0.6);
      g.arrow(30, cy + ho, Lx - f, cy, 'r', 0.4); g.line(Lx - f, cy, Lx, cy - (ho * f / xo), 'r'); g.arrow(Lx, cy - ho * f / xo, Lx + v, cy - ho * f / xo, 'r', 0.55);
      if (s === 1 || s === 3 || s === 4) {
        g.dim(30, cy, Lx - f, cy, 'x', -26, 'dim new'); g.dim(Lx + f, cy, Lx + v, cy, 'x′', -26, 'dim new');
      }
      if (s >= 2) {
        g.dim(30, cy, Lx, cy, 'u', 22, s === 2 ? 'dim new' : 'dim'); g.dim(Lx, cy, Lx + v, cy, 'v', 22, s === 2 ? 'dim new' : 'dim');
      }
      if (s >= 3) { g.dim(Lx - f, cy, Lx, cy, 'f', -8 + 0, 'dim'); g.dim(Lx, cy, Lx + f, cy, 'f', -8, 'dim'); }
      g.text(170, 158, ['x = u + f,   x′ = v − f', 'the thin-lens formula in u and v', 'u = x − f,   v = x′ + f', 'x x′ = −f²'][s - 1],
        't big new');
    }
  });

  /* ── 1.4  lateral magnification of a thin lens ───────────────────────── */
  OFIG.add('lensmag', {
    w: 340, n: 3, alt: s => ['The ray through the lens centre goes straight: similar triangles', 'The same distances measured from the foci',
      'm = f/x = −x′/f'][s - 1],
    build(g, s) {
      const cy = 85, Lx = 165, f = 55, ho = 36, u = Lx - 30, v = 1 / (1 / f - 1 / u), hi = -ho * v / u;
      g.line(10, cy, 335, cy, 'k dash'); g.lens(Lx, cy - 55, cy + 55, 'lens', 8);
      g.line(30, cy, 30, cy + ho, 'k thick'); g.dot(30, cy + ho, 'pt'); g.line(Lx + v, cy, Lx + v, cy + hi, 'k thick'); g.dot(Lx + v, cy + hi, 'pt');
      g.text(16, cy + ho / 2, 'h', 't sym'); g.text(Lx + v + 10, cy + hi / 2, 'h′', 't sym');
      g.arrow(30, cy + ho, Lx + v, cy + hi, 'r' + N(s, 1), 0.3);
      if (s === 1) { g.poly([[30, cy], [30, cy + ho], [Lx, cy]], 'fillk new'); g.poly([[Lx + v, cy], [Lx + v, cy + hi], [Lx, cy]], 'fillk new'); }
      g.dim(30, cy, Lx, cy, 'u', 22, s === 1 ? 'dim new' : 'dim'); g.dim(Lx, cy, Lx + v, cy, 'v', 22, s === 1 ? 'dim new' : 'dim');
      if (s >= 2) {
        g.dot(Lx - f, cy, 'pt hollow', 3.2); g.dot(Lx + f, cy, 'pt hollow', 3.2); g.text(Lx - f, cy - 13, 'F₁', 't sym'); g.text(Lx + f, cy - 13, 'F₂', 't sym');
        g.dim(30, cy, Lx - f, cy, 'x', -26, 'dim new'); g.dim(Lx + f, cy, Lx + v, cy, 'x′', -26, 'dim new');
      }
      g.text(170, 158, ['h′/h = v/u', 'u = x − f,  v = x′ + f,  xx′ = −f²', 'm = f/x = −x′/f'][s - 1], 't big new');
    }
  });

  /* ── 1.4  longitudinal magnification ─────────────────────────────────── */
  OFIG.add('longmag', {
    w: 340, n: 2, alt: s => ['A short object of length δu on the axis has an image of length δv', 'dv/du = v²/u² = m²'][s - 1],
    build(g, s) {
      const cy = 85, Lx = 165, f = 55, u1 = 135, du = 16, v1 = 1 / (1 / f - 1 / u1), v2 = 1 / (1 / f - 1 / (u1 - du));
      g.line(10, cy, 335, cy, 'k dash'); g.lens(Lx, cy - 55, cy + 55, 'lens', 8);
      g.line(Lx - u1, cy, Lx - u1 + du, cy, 'k thick'); g.dot(Lx - u1, cy, 'pt'); g.dot(Lx - u1 + du, cy, 'pt');
      g.line(Lx + v1, cy, Lx + v2, cy, 'r new'); g.dot(Lx + v1, cy, 'pt new'); g.dot(Lx + v2, cy, 'pt new');
      g.dim(Lx - u1, cy, Lx - u1 + du, cy, 'δu', -22, 'dim new'); g.dim(Lx + v1, cy, Lx + v2, cy, 'δv', -22, 'dim new');
      [[Lx - u1, Lx + v1], [Lx - u1 + du, Lx + v2]].forEach(function (p) { g.arrow(p[0], cy, Lx, cy + 30, 'r2', 0.5); g.arrow(Lx, cy + 30, p[1], cy, 'r2', 0.5); });
      g.text(170, 158, s === 1 ? 'δv / δu = ?' : 'δv/δu = v²/u² = m²  (always positive)', 't big new');
    }
  });

  /* ── 1.1  Fermat stationarity and 2nd derivative ─────────────────────── */
  OFIG.add('fermat_stationary', {
    w: 360, n: 4, alt: s => ['Spherical refracting surface with ray OSQ at deflection angle θ from center C',
      'Vanishing first derivative dL/dθ = 0 for stationary ray path obeying Snell\'s law',
      'Paraxial image point y₀ and second derivative curvature d²L/dθ² = r²n₂(1/y − 1/y₀)',
      'Curvature classification: minimum for y < y₀, stationary at y = y₀, maximum for y > y₀'][s - 1],
    build(g, s) {
      if (s === 4) {
        g.text(180, 156, 'Curvature d²L/dθ² = r²n₂(1/y − 1/y₀)', 't big new', 'middle');
        /* Panel 1: y < y0 (minimum) */
        const p1x = 75;
        g.text(p1x, 134, 'y < y₀', 't new', 'middle');
        g.text(p1x, 120, 'd²L/dθ² > 0: min', 't new', 'middle');
        g.line(30, 55, 120, 55, 'k dash'); g.line(p1x, 40, p1x, 105, 'k dash');
        const pts1 = [];
        for (let i = -22; i <= 22; i += 2) pts1.push([p1x + i * 1.5, 55 + (i * i / 484) * 34]);
        g.poline(pts1, 'curve nofill');
        g.dot(p1x, 55, 'pt new', 3.4);
        g.text(p1x, 42, 'min at θ = 0', 't mute', 'middle');

        /* Panel 2: y = y0 (stationary) */
        const p2x = 180;
        g.text(p2x, 134, 'y = y₀ (image)', 't new', 'middle');
        g.text(p2x, 120, 'd²L/dθ² = 0: stat', 't new', 'middle');
        g.line(135, 75, 225, 75, 'k dash'); g.line(p2x, 40, p2x, 105, 'k dash');
        g.line(142, 75, 218, 75, 'curve new');
        g.dot(p2x, 75, 'pt new', 3.4);
        g.text(p2x, 58, 'flat (equal time)', 't new', 'middle');

        /* Panel 3: y > y0 (maximum) */
        const p3x = 285;
        g.text(p3x, 134, 'y > y₀', 't new', 'middle');
        g.text(p3x, 120, 'd²L/dθ² < 0: max', 't new', 'middle');
        g.line(240, 55, 330, 55, 'k dash'); g.line(p3x, 40, p3x, 105, 'k dash');
        const pts3 = [];
        for (let i = -22; i <= 22; i += 2) pts3.push([p3x + i * 1.5, 89 - (i * i / 484) * 34]);
        g.poline(pts3, 'curve nofill');
        g.dot(p3x, 89, 'pt new', 3.4);
        g.text(p3x, 42, 'max at θ = 0', 't mute', 'middle');
        return;
      }

      const cy = 76, r = 50, C = [165, cy], V = [115, cy], O = [35, cy];
      g.rect(15, 12, 115, 155, 'fillw'); g.rect(115, 12, 345, 155, 'fillg');
      g.line(15, cy, 345, cy, 'k dash');
      g.arc(C[0], cy, r, 125, 235, 'surf');
      g.text(32, 146, 'n₁', 't sym big'); g.text(190, 146, 'n₂ = 3n₁', 't sym big');

      g.dot(O[0], cy, 'pt'); g.text(O[0], cy - 13, 'O', 't sym');
      g.dot(V[0], cy, 'pt'); g.text(V[0] - 8, cy - 13, 'V', 't sym');
      g.dot(C[0], cy, 'pt'); g.text(C[0], cy - 13, 'C', 't sym');

      const thDeg = 14, thRad = thDeg * D;
      const xS = C[0] - r * Math.cos(thRad), yS = cy + r * Math.sin(thRad);
      g.dot(xS, yS, 'pt' + (s <= 2 ? ' new' : ''), 3.4);
      g.text(xS - 2, yS + 11, 'S', 't sym' + (s <= 2 ? ' new' : ''));

      /* normal from C through S */
      g.line(C[0], cy, C[0] + 1.4 * (xS - C[0]), cy + 1.4 * (yS - cy), 'k dash');
      g.angle(C[0], cy, 26, 180 - thDeg, 180, 'θ', 'ang' + N(s, 1));

      g.arrow(O[0], cy, xS, yS, 'r' + (s === 1 ? ' new' : ''), 0.55);

      const incoming = Math.atan2(yS - cy, xS - O[0]);
      const normal = -thRad, refracted = normal + Math.asin(Math.sin(incoming - normal) / 3);
      const xImage = xS - (yS - cy) / Math.tan(refracted);
      if (s === 1 || s === 2) {
        const xQ = s === 1 ? 260 : xImage;
        g.dot(xQ, cy, 'pt' + (s === 1 ? ' new' : ''), 3.4);
        g.text(xQ, cy - 13, 'Q', 't sym' + (s === 1 ? ' new' : ''));
        g.arrow(xS, yS, xQ, cy, 'r' + (s === 1 ? ' new' : ''), 0.55);
      }

      if (s === 1) {
        g.dim(O[0], cy - 24, V[0], cy - 24, 'x', 0, 'dim new');
        g.dim(V[0], cy - 24, C[0], cy - 24, 'r', 0, 'dim new');
        g.dim(V[0], cy - 38, 260, cy - 38, 'y', 0, 'dim new');
        g.text(180, 156, 'L(θ) = n₁·OS + n₂·SQ', 't big new', 'middle');
      }

      if (s === 2) {
        g.angle(xS, yS, 18, 180 - thDeg, 180 + deg(incoming), 'i', 'ang new');
        g.angle(xS, yS, 20, -thDeg, deg(refracted), 'r′', 'ang new');
        g.text(180, 156, 'dL/dθ = r²(n₁/x + n₂/y − (n₂ − n₁)/r) θ = 0', 't big new', 'middle');
        g.text(180, 16, 'stationary ray path satisfies Snell\'s law', 't new', 'middle');
      }

      if (s === 3) {
        const xI = V[0] + 3 / (2 / r - 1 / (V[0] - O[0]));
        g.dot(xI, cy, 'pt new', 3.6); g.text(xI, cy - 13, 'I (y₀)', 't sym new');
        g.arrow(xS, yS, xI, cy, 'r new', 0.55);
        g.dot(190, cy, 'pt hollow', 2.8); g.text(190, cy - 13, 'y < y₀', 't mute');
        g.dot(280, cy, 'pt hollow', 2.8); g.text(280, cy - 13, 'y > y₀', 't mute');
        g.dim(V[0], cy - 34, xI, cy - 34, 'y₀', 0, 'dim new');
        g.text(180, 156, 'd²L/dθ² = r²n₂(1/y − 1/y₀)', 't big new', 'middle');
        g.text(180, 16, 'd²L/dθ² = 0 at paraxial image y₀', 't mute', 'middle');
      }
    }
  });
})();

/* Optics step diagrams — Module II (superposition, coherence, Young, mirrors, films, rings, Michelson). */

(function () {
  const N = (s, k) => (s === k ? ' new' : '');
  const D = Math.PI / 180;
  const deg = r => r / D;

  /* a sinusoid drawn as a polyline: y = y0 + amp·sin(2π(x−x0)/wl + ph) */
  function wave(g, x0, x1, y0, amp, wl, ph, c) {
    const pts = [];
    for (let x = x0; x <= x1; x += 1.5) pts.push([x, y0 + amp * Math.sin(2 * Math.PI * (x - x0) / wl + ph)]);
    g.poline(pts, c || 'curve');
  }

  /* ── 2.1  two sinusoids → one ─────────────────────────────────────────── */
  OFIG.add('phasor2', {
    n: 4, alt: s => ['Two rotating arrows (phasors) a₁ and a₂', 'Their sum a, with components a cos φ and a sin φ',
      'Head to tail: the cosine rule gives a²', 'Maximum at δ = 0, minimum at δ = π'][s - 1],
    build(g, s) {
      const O = [70, 30], a1 = 92, a2 = 66, t1 = 18 * D, t2 = 78 * D;
      const v1 = [a1 * Math.cos(t1), a1 * Math.sin(t1)], v2 = [a2 * Math.cos(t2), a2 * Math.sin(t2)];
      const tot = [v1[0] + v2[0], v1[1] + v2[1]], A = Math.hypot(tot[0], tot[1]), phi = deg(Math.atan2(tot[1], tot[0]));
      if (s === 4) {
        g.text(80, 138, 'δ = 0', 't sym new'); g.arrow(30, 100, 30 + 60, 100, 'r', 1); g.arrow(90, 100, 90 + 45, 100, 'r2', 1);
        g.arrow(30, 80, 30 + 105, 80, 'r new', 1); g.text(80, 62, 'I = (√I₁ + √I₂)²', 't new');
        g.text(240, 138, 'δ = π', 't sym new'); g.arrow(200, 100, 260, 100, 'r', 1); g.arrow(260, 100, 215, 100, 'r2', 1);
        g.arrow(200, 80, 245, 80, 'r new', 1); g.text(240, 62, 'I = (√I₁ − √I₂)²', 't new');
        g.text(160, 20, 'the sum swings between these extremes', 't mute');
        return;
      }
      g.line(O[0] - 10, O[1], 300, O[1], 'k'); g.line(O[0], O[1] - 10, O[0], 165, 'k');
      g.arrow(O[0], O[1], O[0] + v1[0], O[1] + v1[1], 'r' + N(s, 1), 1); g.arrow(O[0], O[1], O[0] + v2[0], O[1] + v2[1], 'r2' + N(s, 1), 1);
      g.text(O[0] + v1[0] * 0.6, O[1] + v1[1] * 0.6 - 9, 'a₁', 't sym'); g.text(O[0] + v2[0] * 0.5 - 10, O[1] + v2[1] * 0.5, 'a₂', 't sym');
      g.angle(O[0], O[1], 30, 0, 18, 'φ₁', 'ang' + (s === 1 ? ' new' : '')); g.angle(O[0], O[1], 42, 0, 78, 'φ₂', 'ang' + (s === 1 ? ' new' : ''));
      if (s === 1) g.text(190, 150, 'x = a₁cos(ωt − φ₁) + a₂cos(ωt − φ₂)', 't new', 'middle');
      if (s === 2) {
        g.arrow(O[0], O[1], O[0] + tot[0], O[1] + tot[1], 'r new', 1); g.text(O[0] + tot[0] / 2 + 12, O[1] + tot[1] / 2 + 8, 'a', 't sym new');
        g.line(O[0] + tot[0], O[1] + tot[1], O[0] + tot[0], O[1], 'k dash'); g.line(O[0] + tot[0], O[1] + tot[1], O[0], O[1] + tot[1], 'k dash');
        g.dim(O[0], O[1] - 14, O[0] + v1[0], O[1] - 14, 'a₁cosφ₁', 0, 'dim'); g.dim(O[0] + v1[0], O[1] - 14, O[0] + tot[0], O[1] - 14, 'a₂cosφ₂', 0, 'dim');
        g.angle(O[0], O[1], 54, 0, phi, 'φ', 'ang new');
        g.text(210, 154, 'a cosφ = a₁cosφ₁ + a₂cosφ₂', 't new', 'middle'); g.text(210, 142, 'a sinφ = a₁sinφ₁ + a₂sinφ₂', 't new', 'middle');
      }
      if (s === 3) {
        const T = [O[0] + v1[0], O[1] + v1[1]];
        g.arrow(T[0], T[1], T[0] + v2[0], T[1] + v2[1], 'r2 dash new', 1); g.arrow(O[0], O[1], T[0] + v2[0], T[1] + v2[1], 'r new', 1);
        g.text(O[0] + tot[0] / 2 + 12, O[1] + tot[1] / 2 - 6, 'a', 't sym new');
        g.angle(T[0], T[1], 24, 18, 78, 'δ', 'ang new'); g.text(240, 152, 'a² = a₁² + a₂² + 2a₁a₂ cos δ', 't big new', 'middle');
        g.text(240, 138, 'δ = φ₁ − φ₂', 't sym');
      }
    }
  });

  OFIG.add('phasorN', {
    n: 3, alt: s => ['N equal arrows, each turned by δ from the last', 'They lie on a circle of radius ρ', 'The resultant is a chord: a = 2ρ sin(Nδ/2)'][s - 1],
    build(g, s) {
      const N0 = 6, dl = 34 * D, a0 = 34, rho = a0 / (2 * Math.sin(dl / 2)), org = [110, 40];
      const v = [[0, 0]]; for (let k = 0; k < N0; k += 1) v.push([v[k][0] + a0 * Math.cos(k * dl), v[k][1] + a0 * Math.sin(k * dl)]);
      const V = v.map(p => [org[0] + p[0], org[1] + p[1]]), cen = [org[0] + a0 / 2, org[1] + rho * Math.cos(dl / 2)];
      if (s >= 2) g.circle(cen[0], cen[1], rho, 'k dash');
      for (let k = 0; k < N0; k += 1) g.arrow(V[k][0], V[k][1], V[k + 1][0], V[k + 1][1], 'r2' + (s === 1 ? ' new' : ''), 1);
      g.angle(V[1][0], V[1][1], 16, 0, 34, 'δ', 'ang' + N(s, 1)); g.text(V[0][0] - 8, V[0][1] - 10, 'a₀', 't sym');
      g.arrow(V[0][0], V[0][1], V[N0][0], V[N0][1], 'r new', 1); g.text((V[0][0] + V[N0][0]) / 2 + 10, (V[0][1] + V[N0][1]) / 2 - 6, 'a', 't sym new');
      if (s === 1) g.text(245, 140, 'each step turns by δ', 't new', 'middle');
      if (s >= 2) { g.dot(cen[0], cen[1], 'pt', 2.6); g.text(cen[0] + 8, cen[1] + 6, 'centre', 't mute'); g.line(cen[0], cen[1], V[0][0], V[0][1], 'k'); g.line(cen[0], cen[1], V[N0][0], V[N0][1], 'k'); }
      if (s === 2) g.text(255, 140, 'a₀ = 2ρ sin(δ/2)', 't new', 'middle');
      if (s === 3) {
        g.angle(cen[0], cen[1], 22, deg(Math.atan2(V[0][1] - cen[1], V[0][0] - cen[0])), deg(Math.atan2(V[N0][1] - cen[1], V[N0][0] - cen[0])) + 0, 'Nδ', 'ang new');
        g.text(245, 140, 'a = 2ρ sin(Nδ/2)', 't new', 'middle'); g.text(245, 124, 'a/a₀ = sin(Nδ/2)/sin(δ/2)', 't new', 'middle');
      }
    }
  });

  /* ── 2.3  Young ───────────────────────────────────────────────────────── */
  OFIG.add('young', {
    w: 390, n: 4, alt: s => ['Two slits d apart and a screen at D; P a height x above the axis', 'The two path lengths S₁P and S₂P', 'Far-field: the path difference is d sinθ ≈ dx/D',
      'Bright fringes at x = mλD/d, spaced β = λD/d'][s - 1],
    build(g, s) {
      const cy = 85, bx = 60, sx = 285, d = 50, S1 = [bx, cy + d / 2], S2 = [bx, cy - d / 2], xP = 58, P = [sx, cy + xP];
      g.line(bx, 10, bx, cy - d / 2 - 4, 'k thick'); g.line(bx, cy - d / 2 + 4, bx, cy + d / 2 - 4, 'k thick'); g.line(bx, cy + d / 2 + 4, bx, 165, 'k thick');
      g.line(sx, 10, sx, 165, 'k thick'); g.line(bx, cy, sx, cy, 'k dash');
      g.dot(S1[0], S1[1], 'pt'); g.dot(S2[0], S2[1], 'pt'); g.text(S1[0] - 12, S1[1], 'S₁', 't sym'); g.text(S2[0] - 12, S2[1], 'S₂', 't sym');
      g.dot(P[0], P[1], 'pt new', 3.6); g.text(P[0] + 10, P[1], 'P', 't sym new'); g.dot(sx, cy, 'pt'); g.text(sx + 10, cy, 'O', 't sym');
      g.arrow(S1[0], S1[1], P[0], P[1], 'r' + N(s, 1) + N(s, 2), 0.5); g.arrow(S2[0], S2[1], P[0], P[1], 'r2' + N(s, 1) + N(s, 2), 0.5);
      g.dim(bx - 20, cy - d / 2, bx - 20, cy + d / 2, 'd', 0, s === 1 ? 'dim new' : 'dim');
      g.dim(bx, 24, sx, 24, 'D', 0, s === 1 ? 'dim new' : 'dim'); g.dim(sx + 16, cy, sx + 16, P[1], 'x', 0, s === 1 ? 'dim new' : 'dim');
      if (s === 2) { g.text(170, cy + 46, 'S₁P', 't sym new'); g.text(170, cy - 10, 'S₂P', 't sym new'); g.text(170, 150, 'S₂P² − S₁P² = 2xd', 't new', 'middle'); }
      if (s === 3) {
        const u = [P[0] - S2[0], P[1] - S2[1]], ul = Math.hypot(u[0], u[1]), uu = [u[0] / ul, u[1] / ul];
        const w = [S1[0] - S2[0], S1[1] - S2[1]], pr = w[0] * uu[0] + w[1] * uu[1], F = [S2[0] + pr * uu[0], S2[1] + pr * uu[1]];
        g.line(S1[0], S1[1], F[0], F[1], 'k dash'); g.line(S2[0], S2[1], F[0], F[1], 'r new'); g.text((S2[0] + F[0]) / 2 + 6, (S2[1] + F[1]) / 2 - 10, 'Δ', 't sym big new');
        g.angle(bx, cy, 60, 0, deg(Math.atan2(xP, sx - bx)), 'θ', 'ang new'); g.text(200, 150, 'Δ = d sinθ ≈ d·x/D', 't big new', 'middle');
      }
      if (s === 4) {
        const beta = 30;
        for (let k = -2; k <= 2; k += 1) {
          const y = cy + k * beta; g.rect(sx + 6, y - 5, sx + 20, y + 5, 'fillk new'); g.text(sx + 30, y, k === 0 ? 'm = 0' : 'm = ' + k, 't mute', 'start');
        }
        g.dim(sx + 44, cy, sx + 44, cy + beta, 'β', 0, 'dim new'); g.text(120, 150, 'x = mλD/d,   β = λD/d', 't big new', 'middle');
      }
    }
  });

  OFIG.add('youngI', {
    n: 3, alt: s => ['Two waves with a phase difference δ', 'I = 2I₀(1 + cos δ) plotted against δ', 'The same curve against position: cos²(πx/β)'][s - 1],
    build(g, s) {
      if (s === 1) {
        wave(g, 30, 290, 115, 18, 80, 0, 'curve2'); wave(g, 30, 290, 115, 18, 80, 1.1, 'curve');
        g.line(30, 115, 290, 115, 'k dash'); g.text(160, 150, 'two waves, phase difference δ = 2πΔ/λ', 't new', 'middle');
        g.dim(30 + 80 * (0.25 - 0), 145 - 20, 30 + 80 * 0.25 + 80 * 1.1 / (2 * Math.PI), 145 - 20, 'δ', 0, 'dim new');
        g.text(160, 48, 'I = I₁ + I₂ + 2√(I₁I₂) cosδ', 't big new', 'middle'); g.text(160, 32, 'equal beams: I = 2I₀(1 + cosδ) = 4I₀cos²(δ/2)', 't', 'middle');
        return;
      }
      const x0 = 30, x1 = 300, y0 = 25, y1 = 140;
      g.line(x0, y0, x1, y0, 'k'); g.line(x0, y0, x0, y1 + 8, 'k');
      const per = s === 2 ? 4 * Math.PI : 6;         /* span in δ, or in fringe widths */
      const f = s === 2 ? (t => 1 + Math.cos(t)) : (t => Math.cos(Math.PI * t) * Math.cos(Math.PI * t) * 2);
      const pts = []; for (let i = 0; i <= 200; i += 1) { const t = (s === 2 ? -2 * Math.PI : -3) + per * i / 200; pts.push([x0 + (x1 - x0) * i / 200, y0 + 8 + f(t) * (y1 - y0 - 20) / 2]); }
      g.poline(pts, 'curve');
      g.line(x0, y0 + 8 + (y1 - y0 - 20) / 2, x1, y0 + 8 + (y1 - y0 - 20) / 2, 'k dash'); g.text(x1 - 4, y0 + 8 + (y1 - y0 - 20) / 2 + 10, 'average 2I₀', 't mute', 'end');
      g.text(x0 - 4, y1 - 8, '4I₀', 't sym', 'end'); g.text(x0 - 4, y0 + 8, '0', 't sym', 'end');
      if (s === 2) { ['−2π', '−π', '0', 'π', '2π'].forEach((t, i) => g.text(x0 + (x1 - x0) * i / 4, y0 - 10, t, 't mute')); g.text(160, 158, 'maxima at δ = 2mπ, exact zeros at δ = (2m+1)π', 't new', 'middle'); }
      if (s === 3) {
        const bw = (x1 - x0) / 6; g.dim(x0 + bw * 3, y0 + 8 + (y1 - y0 - 20) - 2, x0 + bw * 4, y0 + 8 + (y1 - y0 - 20) - 2, 'β', 0, 'dim new');
        g.text(160, 158, 'I(x) = 4I₀cos²(πdx/λD), fringe width β = λD/d', 't new', 'middle');
      }
    }
  });

  OFIG.add('plateshift', {
    w: 390, n: 3, alt: s => ['A plate of thickness t and index n over one slit adds optical path (n−1)t', 'The central fringe moves to where d·x/D cancels it',
      'The whole pattern shifts by Δx toward the covered slit'][s - 1],
    build(g, s) {
      const cy = 85, bx = 60, sx = 270, d = 50, S1 = [bx, cy + d / 2], S2 = [bx, cy - d / 2], sh = 34;
      g.line(bx, 10, bx, cy - d / 2 - 4, 'k thick'); g.line(bx, cy - d / 2 + 4, bx, cy + d / 2 - 4, 'k thick'); g.line(bx, cy + d / 2 + 4, bx, 165, 'k thick');
      g.line(sx, 10, sx, 165, 'k thick'); g.line(bx, cy, sx, cy, 'k dash');
      g.rect(bx + 4, S1[1] - 9, bx + 26, S1[1] + 9, 'fillk' + (s === 1 ? ' new' : '')); g.text(bx + 15, S1[1] + 16, 'n', 't sym', 'middle');
      g.dim(bx + 4, S1[1] + 30, bx + 26, S1[1] + 30, 't', 0, s === 1 ? 'dim new' : 'dim');
      g.dot(S1[0], S1[1], 'pt'); g.dot(S2[0], S2[1], 'pt'); g.text(S1[0] - 12, S1[1], 'S₁', 't sym'); g.text(S2[0] - 12, S2[1], 'S₂', 't sym');
      if (s === 1) { g.text(200, 140, 'optical path through the plate: nt', 't new', 'middle'); g.text(200, 126, 'through the same t of air: t', 't', 'middle'); g.text(200, 112, 'extra: (n − 1)t', 't big new', 'middle'); }
      const P = [sx, cy + sh];
      if (s >= 2) {
        g.arrow(S1[0], S1[1], P[0], P[1], 'r' + N(s, 2), 0.6); g.arrow(S2[0], S2[1], P[0], P[1], 'r2' + N(s, 2), 0.6);
        g.dot(P[0], P[1], 'pt new', 3.6); g.text(P[0] + 10, P[1], 'P′', 't sym new');
        g.text(200, 152, s === 2 ? 'new centre: d·x/D = (n − 1)t' : 'Δx = (n − 1)tD / d', 't big new', 'middle');
        g.dim(sx + 16, cy, sx + 16, P[1], 'Δx', 0, 'dim new'); g.dot(sx, cy, 'pt'); g.text(sx + 10, cy - 8, 'O', 't sym');
      }
      if (s === 3) {
        const beta = 26;
        for (let k = -2; k <= 2; k += 1) { g.rect(sx + 30, cy + k * beta - 4, sx + 40, cy + k * beta + 4, 'fillk'); g.rect(sx + 44, cy + sh + k * beta - 4, sx + 54, cy + sh + k * beta + 4, 'fillk new'); }
        g.text(sx + 36, 158, 'before', 't mute'); g.text(sx + 50, 148, 'after', 't new');
      }
    }
  });

  /* ── 2.4  Fresnel mirrors and biprism ─────────────────────────────────── */
  OFIG.add('fmirrors', {
    w: 400, h: 190, n: 3, alt: s => ['Two images S₁ and S₂ of the slit lie on a circle of radius a about O', 'Their separation is the chord d = 2aα',
      'A screen at distance a + b sees Young fringes from S₁ and S₂'][s - 1],
    build(g, s) {
      const O = [150, 108], a = 84, al = 5 * D, sa = 128 * D, S = [O[0] + a * Math.cos(sa), O[1] + a * Math.sin(sa)];
      const i1 = 2 * al - sa, i2 = -2 * al - sa, S1 = [O[0] + a * Math.cos(i1), O[1] + a * Math.sin(i1)], S2 = [O[0] + a * Math.cos(i2), O[1] + a * Math.sin(i2)];
      const E1 = [O[0] + 120 * Math.cos(al), O[1] + 120 * Math.sin(al)], E2 = [O[0] + 120 * Math.cos(-al), O[1] + 120 * Math.sin(-al)];
      g.line(O[0], O[1], E1[0], E1[1], 'k thick'); g.line(O[0], O[1], E2[0], E2[1], 'k thick');
      g.text(E1[0] + 8, E1[1] + 8, 'M₁', 't sym'); g.text(E2[0] + 8, E2[1] - 12, 'M₂', 't sym'); g.dot(O[0], O[1], 'pt'); g.text(O[0] - 8, O[1] + 12, 'O', 't sym');
      g.arc(O[0], O[1], a, 190, 255, 'k dash'); g.arc(O[0], O[1], a, 105, 135, 'k dash');
      g.dot(S[0], S[1], 'pt'); g.text(S[0] - 8, S[1] + 6, 'S', 't sym'); g.dot(S1[0], S1[1], 'pt new'); g.dot(S2[0], S2[1], 'pt new');
      g.text(S1[0] - 12, S1[1] - 4, 'S₁', 't sym new'); g.text(S2[0] - 12, S2[1] + 4, 'S₂', 't sym new');
      g.line(O[0], O[1], S[0], S[1], 'k dash'); g.line(O[0], O[1], S1[0], S1[1], 'k dash'); g.line(O[0], O[1], S2[0], S2[1], 'k dash');
      g.text((O[0] + S[0]) / 2 - 8, (O[1] + S[1]) / 2, 'a', 't sym'); g.text((O[0] + S1[0]) / 2 + 10, (O[1] + S1[1]) / 2 - 2, 'a', 't sym');
      g.angle(O[0], O[1], 34, -5, 5, 'α', 'ang' + N(s, 1));
      if (s >= 2) { g.line(S1[0], S1[1], S2[0], S2[1], 'r new'); g.dim(S1[0], S1[1], S2[0], S2[1], 'd', -18, s === 2 ? 'dim new' : 'dim'); if (s === 2) g.text(300, 182, 'd = S₁S₂ ≈ 2aα', 't big new', 'middle'); }
      if (s === 3) {
        const sx = 370; g.line(sx, 15, sx, 175, 'k thick'); g.dim(O[0], 14, sx, 14, 'b', 0, 'dim new');
        [[S1, E1], [S2, E2]].forEach(function (p, k) {
          const dir = [p[1][0] - p[0][0], p[1][1] - p[0][1]], t = (sx - p[1][0]) / dir[0];
          g.line(p[1][0], p[1][1], sx, p[1][1] + dir[1] * t, k ? 'r2' : 'r'); g.line(p[0][0], p[0][1], p[1][0], p[1][1], 'r dash');
        });
        g.text(250, 182, 'D = a + b,  β = λ(a + b)/2aα', 't new', 'middle');
      }
    }
  });

  OFIG.add('biprism', {
    w: 340, n: 4, alt: s => ['A thin prism deviates a ray by (n−1)α', 'Each half makes a virtual source displaced sideways by a(n−1)α',
      'The two virtual sources are d = 2a(n−1)α apart', 'Screen at D = a + b: Young fringes from S₁ and S₂'][s - 1],
    build(g, s) {
      const cy = 85, Sx = 48, px = 150, a = px - Sx, dl = 7 * D, sx = 320;
      const S = [Sx, cy], S1 = [Sx, cy + a * Math.tan(dl)], S2 = [Sx, cy - a * Math.tan(dl)];
      g.poly([[px - 3, cy - 45], [px + 3, cy], [px - 3, cy + 45], [px - 9, cy]], 'fillk' + (s === 1 ? ' new' : ''));
      g.text(px, cy - 56, 'biprism', 't mute'); g.dot(S[0], S[1], 'pt'); g.text(S[0] - 4, S[1] - 12, 'S', 't sym');
      const y1 = cy + 30, y2 = cy - 30, th = Math.atan2(30, a);
      [[y1, 1], [y2, -1]].forEach(function (p, k) {
        const outAng = -p[1] * (dl - th) * (-1) - 0, ang = -p[1] * (dl - th) * 1;  /* leaves at (θ_in − δ), toward the axis */
        const dirOut = p[1] * th - p[1] * dl;                                        /* signed angle above +x */
        g.arrow(S[0], S[1], px, p[0], 'r2', 0.6);
        const L = sx - px, ye = p[0] + Math.tan(dirOut) * L;
        g.arrow(px, p[0], sx, ye, 'r' + (s === 4 ? '' : ''), 0.55);
        const src = p[1] > 0 ? S1 : S2;
        if (s >= 2) g.line(src[0], src[1], px, p[0], 'r dash' + (s === 2 ? ' new' : ''));
        if (s === 1 && k === 0) g.angle(px, p[0], 26, deg(th) + 0, deg(dirOut) + 0 + 0, 'δ', 'ang new');
      });
      if (s === 1) g.text(230, 152, 'δ = (n − 1)α', 't big new', 'middle');
      if (s >= 2) { g.dot(S1[0], S1[1], 'pt new'); g.dot(S2[0], S2[1], 'pt new'); g.text(S1[0] + 8, S1[1] + 9, 'S₁', 't sym new', 'start'); g.text(S2[0] + 8, S2[1] - 9, 'S₂', 't sym new', 'start'); }
      if (s === 2) { g.dim(Sx + 22, cy, Sx + 22, S1[1], 'aδ', 0, 'dim new'); g.text(230, 152, 'each source is displaced by a·δ', 't new', 'middle'); }
      if (s >= 3) { g.dim(Sx - 26, S2[1], Sx - 26, S1[1], 'd', 0, s === 3 ? 'dim new' : 'dim'); if (s === 3) g.text(230, 152, 'd = 2aδ = 2a(n − 1)α', 't big new', 'middle'); }
      g.dim(Sx, 12, px, 12, 'a', 0, 'dim');
      if (s === 4) {
        g.line(sx, 15, sx, 165, 'k thick'); g.dim(px, 12, sx, 12, 'b', 0, 'dim new'); g.text(230, 152, 'β = λ(a + b) / 2a(n − 1)α', 't big new', 'middle');
        g.poly([[px, cy + 6], [sx, cy - 42], [sx, cy + 42], [px, cy - 6]], 'fillw');
      }
    }
  });

  /* ── 2.5  Stokes' relations by reversibility ─────────────────────────── */
  OFIG.add('stokes', {
    w: 340, h: 190, n: 4, alt: s => ['A unit wave splits into a reflected part r and a transmitted part t', 'Reverse both rays: each splits again',
      'Reversibility says the outputs must be the original wave alone', "r′ = −r and tt′ = 1 − r²"][s - 1],
    build(g, s) {
      const yI = 112;
      g.rect(10, yI, 330, 185, 'fillg'); g.rect(10, 28, 330, yI, 'fillw'); g.line(10, yI, 330, yI, 'k thick');
      g.text(26, 172, 'n₁', 't sym big'); g.text(26, 40, 'n₂', 't sym big');
      const O1 = [85, yI], up = 62, dn = 62;
      g.arrow(25, yI + up, O1[0], yI, 'r', 0.5); g.text(28, yI + up + 8, '1', 't sym'); g.arrow(O1[0], yI, 145, yI + up, 'r' + N(s, 1), 0.6); g.text(150, yI + up + 6, 'r', 't sym new');
      g.arrow(O1[0], yI, 122, yI - dn, 'r' + N(s, 1), 0.6); g.text(128, yI - dn - 4, 't', 't sym new');
      g.text(85, 184, 'unit wave in', 't mute', 'middle', 0, 0);
      if (s >= 2) {
        const O2 = [250, yI]; g.line(165, 30, 165, 183, 'k dash'); g.text(250, 184, 'reversed rays', 't mute', 'middle', 0, 0);
        g.arrow(315, yI + up, O2[0], yI, 'r2' + N(s, 2), 0.5); g.text(320, yI + up + 6, 'r', 't sym'); g.arrow(283, yI - dn, O2[0], yI, 'r2' + N(s, 2), 0.5); g.text(288, yI - dn - 4, 't', 't sym');
        g.arrow(O2[0], yI, 190, yI + up, 'r3', 0.6); g.text(186, yI + up + 6, 'r·r', 't sym', 'end'); g.arrow(O2[0], yI, 218, yI - dn, 'r3', 0.6); g.text(214, yI - dn - 4, 'r·t', 't sym');
        g.arrow(O2[0], yI, 268, yI + up, 'r3', 0.6); g.text(270, yI + up + 6, 'tt′', 't sym', 'start'); g.arrow(O2[0], yI, 250, yI - dn, 'r3', 0.6); g.text(254, yI - dn - 4, 'tr′', 't sym', 'start');
      }
      if (s === 3) g.text(170, 10, 'above: r² + tt′ = 1        below: rt + tr′ = 0', 't new', 'middle', 0, 0);
      if (s === 4) g.text(170, 10, 'r′ = −r        tt′ = 1 − r²', 't big new', 'middle', 0, 0);
    }
  });

  /* ── 2.6  thin film ───────────────────────────────────────────────────── */
  OFIG.add('film', {
    w: 340, n: 4, alt: s => ['Two reflected rays: one from the top surface, one from the bottom', 'The perpendicular DN: equal phase on the way out',
      'Snell: sin i = n sin r, and BC = CD = d / cos r', 'The top reflection adds π: bright when 2nd cos r = (m + ½)λ'][s - 1],
    build(g, s) {
      const yT = 108, d = 52, yB = yT - d, n = 1.5, i = 42 * D, r = Math.asin(Math.sin(i) / n), Bx = 120;
      const C = [Bx + d * Math.tan(r), yB], Dp = [Bx + 2 * d * Math.tan(r), yT];
      g.rect(20, yB, 320, yT, 'fillw'); g.line(20, yT, 320, yT, 'k thick'); g.line(20, yB, 320, yB, 'k thick');
      g.text(34, yT + 12, 'air', 't mute', 'start'); g.text(34, (yT + yB) / 2, 'film n', 't sym', 'start'); g.text(34, yB - 12, 'air', 't mute', 'start');
      g.arrow(Bx - 70 * Math.sin(i), yT + 70 * Math.cos(i), Bx, yT, 'r', 0.5);
      g.arrow(Bx, yT, Bx + 70 * Math.sin(i), yT + 70 * Math.cos(i), 'r' + N(s, 1), 0.6);
      g.line(Bx, yT, C[0], C[1], 'r2' + N(s, 1)); g.line(C[0], C[1], Dp[0], Dp[1], 'r2' + N(s, 1));
      g.arrow(Dp[0], Dp[1], Dp[0] + 70 * Math.sin(i), Dp[1] + 70 * Math.cos(i), 'r2' + N(s, 1), 0.6);
      g.dot(Bx, yT, 'pt'); g.dot(C[0], C[1], 'pt'); g.dot(Dp[0], Dp[1], 'pt'); g.text(Bx - 8, yT - 10, 'B', 't sym'); g.text(C[0], yB + 12, 'C', 't sym'); g.text(Dp[0] + 8, yT - 10, 'D', 't sym');
      g.text(Bx + 80, yT + 42, '1', 't sym'); g.text(Dp[0] + 68, yT + 42, '2', 't sym');
      g.dim(Bx - 34, yB, Bx - 34, yT, 'd', 0, 'dim');
      if (s >= 2) {                                       /* foot of the perpendicular from D onto ray 1 */
        const u = [Math.sin(i), Math.cos(i)], w = [Dp[0] - Bx, 0], pr = w[0] * u[0] + w[1] * u[1], Nn = [Bx + pr * u[0], yT + pr * u[1]];
        g.line(Dp[0], Dp[1], Nn[0], Nn[1], 'k dash'); g.dot(Nn[0], Nn[1], 'pt new'); g.text(Nn[0] + 8, Nn[1] + 8, 'N', 't sym new');
        g.dim(Bx, yT, Dp[0], yT, 'BD', -14, 'dim new'); if (s === 2) g.text(200, 24, 'N and D are on one wavefront', 't new', 'middle');
      }
      if (s >= 3) {
        g.line(Bx, yT - 24, Bx, yB - 6, 'k dash'); g.angle(Bx, yT, 26, 90, 90 + deg(i), 'i', 'ang new'); g.angle(Bx, yT, 20, 270 - deg(r), 270, 'r', 'ang new');
        if (s === 3) g.text(200, 24, 'sin i = n sin r;   BC = CD = d / cos r', 't new', 'middle');
      }
      if (s === 4) { g.dot(Bx, yT, 'pt new', 4.5); g.text(Bx - 30, yT + 22, '+π', 't big new'); g.text(200, 24, 'Δ = 2nd cos r  (+ λ/2)', 't big new', 'middle'); }
    }
  });

  OFIG.add('arcoat', {
    w: 320, n: 3, alt: s => ['Both reflections are rarer to denser: each flips by π', 'The round trip must be half a wavelength: t = λ/4n_f',
      'Equal amplitudes need n_f² = n_g'][s - 1],
    build(g, s) {
      const y1 = 112, y2 = 70; g.rect(20, y2, 300, y1, 'fillw'); g.rect(20, 10, 300, y2, 'fillg'); g.line(20, y1, 300, y1, 'k thick'); g.line(20, y2, 300, y2, 'k thick');
      g.text(30, y1 + 18, 'air (1)', 't mute', 'start'); g.text(30, (y1 + y2) / 2, 'film n_f', 't sym', 'start'); g.text(30, y2 - 16, 'glass n_g', 't sym', 'start');
      g.dim(285, y2, 285, y1, 't', 0, s === 2 ? 'dim new' : 'dim');
      g.arrow(140, 158, 158, y1, 'r', 0.5); g.arrow(158, y1, 176, 158, 'r' + N(s, 1), 0.6);
      g.arrow(158, y1, 172, y2, 'r2', 0.6); g.arrow(172, y2, 186, y1, 'r2', 0.5); g.arrow(186, y1, 204, 158, 'r2' + N(s, 1), 0.6);
      g.arrow(172, y2, 186, 18, 'r3', 0.6);
      g.text(158, y1 + 14, 'π', 't sym big' + (s === 1 ? ' new' : ''), 'middle'); g.text(172, y2 - 14, 'π', 't sym big' + (s === 1 ? ' new' : ''), 'middle');
      if (s === 1) g.text(160, 20, 'both flip: their phase changes cancel', 't new', 'middle');
      if (s === 2) g.text(160, 20, '2 n_f t = λ/2   ⇒   t = λ / 4n_f', 't big new', 'middle');
      if (s === 3) { g.text(160, 28, 'equal amplitudes:  r₁ = r₂', 't new', 'middle'); g.text(160, 14, '(n_f−1)/(n_f+1) = (n_g−n_f)/(n_g+n_f)', 't mute', 'middle'); }
    }
  });

  OFIG.add('filmmulti', {
    w: 340, n: 3, alt: s => ['The beams leaving the top after 0, 1, 2… internal round trips', 'Their amplitudes form a geometric series', 'R oscillates between the two limits as δ varies'][s - 1],
    build(g, s) {
      if (s === 3) {
        const x0 = 30, x1 = 305, y0 = 24, y1 = 138, r1 = 0.4, r2 = 0.5;
        g.line(x0, y0, x1, y0, 'k'); g.line(x0, y0, x0, y1 + 6, 'k');
        const R = d => (r1 * r1 + r2 * r2 + 2 * r1 * r2 * Math.cos(d)) / (1 + r1 * r1 * r2 * r2 + 2 * r1 * r2 * Math.cos(d));
        const pts = []; for (let i = 0; i <= 240; i += 1) { const d = 4 * Math.PI * i / 240; pts.push([x0 + (x1 - x0) * i / 240, y0 + 8 + R(d) / 0.55 * (y1 - y0 - 12)]); }
        g.poline(pts, 'curve'); g.text(x0 - 4, y1 - 6, 'R', 't sym', 'end'); g.text(x1, y0 - 10, 'δ →', 't sym', 'end');
        g.text(170, 160, 'R = (r₁² + r₂² + 2r₁r₂cosδ)/(1 + r₁²r₂² + 2r₁r₂cosδ)', 't new', 'middle', 0, 0);
        g.text(x0 + 120, y0 - 10, 'minimum', 't mute'); g.text(x0 + 200, y1 + 12, 'maximum', 't mute');
        return;
      }
      const yT = 110, yB = 60; g.rect(20, yB, 320, yT, 'fillw'); g.line(20, yT, 320, yT, 'k thick'); g.line(20, yB, 320, yB, 'k thick');
      g.text(30, (yT + yB) / 2, 'film', 't sym', 'start');
      g.arrow(60, 160, 80, yT, 'r', 0.5);
      const xs = [80, 100, 120, 140, 160]; let hx = 80;
      g.arrow(80, yT, 100, 160, 'r new', 0.6); g.text(108, 152, 'r₁', 't sym new');
      for (let k = 0; k < 3; k += 1) {
        const a = 80 + 20 * (2 * k) + 10, b = a + 10;
        g.line(80 + 40 * k, yT, 90 + 40 * k, yB, 'r2' + N(s, 1)); g.line(90 + 40 * k, yB, 100 + 40 * k, yT, 'r2' + N(s, 1));
        g.arrow(100 + 40 * k, yT, 120 + 40 * k, 160, 'r2' + N(s, 1), 0.6);
        g.text(112 + 40 * k, 150 - (k % 2) * 12, ['tt′r₂', 'tt′r₂r₁′r₂', '…'][k], 't sym' + (s === 1 ? ' new' : ''), 'middle', 0, 0);
      }
      if (s === 2) g.text(200, 30, 'ρ = (r₁ + r₂e⁻ʲᵟ)/(1 + r₁r₂e⁻ʲᵟ)', 't new', 'middle');
      if (s === 1) g.text(200, 30, 'each round trip: × r₁′r₂e⁻ʲᵟ', 't new', 'middle');
    }
  });

  /* ── 2.7  wedge, rings, Michelson ─────────────────────────────────────── */
  OFIG.add('wedge', {
    w: 340, n: 3, alt: s => ['Dark where the film thickness satisfies 2nd = mλ', 'Thickness grows linearly: d = xθ', 'Equal dark fringes of width β = λ/2nθ'][s - 1],
    build(g, s) {
      const yb = 52, x0 = 30, x1 = 300, tw = 26, al = Math.atan2(tw, x1 - x0);
      g.line(x0, yb, x1 + 8, yb, 'k thick'); g.line(x0, yb, x1, yb + tw, 'k thick'); g.text(x0, yb - 10, 'edge', 't mute', 'start');
      g.rect(x0, yb - 6, x1 + 8, yb, 'fillk');
      [70, 130, 190, 250].forEach(function (x) { g.arrow(x, 118, x, yb + tw * (x - x0) / (x1 - x0) + 3, 'r', 0.5); });
      const fx = k => x0 + 20 + k * 46;                        /* fringes seen from above */
      for (let k = 0; k < 6; k += 1) g.rect(fx(k), 132, fx(k) + 24, 160, k % 2 ? 'fillw' : 'fillk' + (s === 1 ? ' new' : ''));
      g.text(x0 + 6, 146, 'plan', 't mute', 'start', 0, 0);
      if (s >= 2) { g.angle(x0, yb, 52, 0, deg(al), 'θ', 'ang new'); g.dim(x0, yb - 16, 200, yb - 16, 'x', 0, 'dim new'); g.dim(200 + 8, yb, 200 + 8, yb + tw * (200 - x0) / (x1 - x0), 'd', 0, 'dim new'); }
      if (s === 1) g.text(170, 12, '2nd = mλ  (m = 0 at the edge: dark)', 't new', 'middle', 0, 0);
      if (s === 2) g.text(170, 12, 'd = x·θ   (θ small)', 't big new', 'middle', 0, 0);
      if (s === 3) { g.dim(fx(1), 130, fx(2), 130, 'β', 0, 'dim new'); g.text(170, 12, 'β = λ/2nθ;   wire: d = λL/2β', 't big new', 'middle', 0, 0); g.dim(x0, yb - 26, x1, yb - 26, 'L', 0, 'dim new'); }
    }
  });

  OFIG.add('rings', {
    w: 340, n: 4, alt: s => ['The air gap at radius r: d = r²/2R', 'Dark ring when 2d = mλ', 'Ring diameters D² = 4mλR/n', 'Two rings remove the unknown offset'][s - 1],
    build(g, s) {
      if (s >= 3) {
        const c = [90, 85]; for (let k = 1; k <= 6; k += 1) g.circle(c[0], c[1], 8 * Math.sqrt(k) * 1.55, 'k' + (k === 3 || (s === 4 && k === 5) ? ' new thick' : '') + ' nofill');
        g.dot(c[0], c[1], 'pt', 3.4); g.text(c[0], c[1] - 12, 'dark', 't mute');
        const rr = 8 * Math.sqrt(3) * 1.55; g.dim(c[0] - rr, c[1] - 18, c[0] + rr, c[1] - 18, 'Dₘ', 0, 'dim new');
        if (s === 3) { g.text(245, 104, 'rₘ² = mλR/n', 't big new', 'middle'); g.text(245, 86, 'Dₘ² = 4mλR/n', 't big new', 'middle'); g.text(245, 66, 'r ∝ √m: rings crowd outward', 't mute', 'middle'); }
        if (s === 4) { g.text(245, 108, 'Dₘ² − Dₚ² = 4(m − p)λR/n', 't new', 'middle'); g.text(245, 90, 'λ = n(Dₘ² − Dₚ²)/4(m − p)R', 't new', 'middle'); g.text(245, 68, 'the contact offset cancels', 't mute', 'middle'); }
        return;
      }
      const R = 110, cx = 165, yb = 40, top = yb + 1;
      g.rect(30, yb - 12, 310, yb, 'fillk'); g.text(315, yb - 8, 'plate', 't mute', 'end');
      g.arc(cx, yb + R, R, 240, 300, 'surf'); g.dot(cx, yb + R, 'pt', 2.6); g.text(cx + 8, yb + R, 'centre', 't mute', 'start'); g.line(cx, yb, cx, yb + R, 'k dash');
      g.dim(cx, yb + R - 14, cx + 0.001, yb + R - 14, '', 0);
      const r = 46, d = R - Math.sqrt(R * R - r * r);
      g.line(cx, yb, cx + r, yb, 'k dash'); g.dim(cx, yb - 14, cx + r, yb - 14, 'r', 0, 'dim new'); g.dim(cx + r + 6, yb, cx + r + 6, yb + d, 'd', 0, 'dim new');
      g.dot(cx + r, yb + d, 'pt new'); g.line(cx + r, yb + d, cx + r, yb, 'r new');
      g.text(cx - 6, yb + R / 2, 'R', 't sym', 'end');
      if (s === 1) { g.line(cx, yb + R, cx + r, yb + d, 'k dash'); g.text(235, 130, 'r² = R² − (R − d)² ≈ 2Rd', 't new', 'middle'); g.text(235, 114, 'd = r²/2R', 't big new', 'middle'); }
      if (s === 2) { g.text(235, 130, 'reflected, one π flip:', 't', 'middle'); g.text(235, 114, '2d = mλ  ⇒  r² = mλR', 't new', 'middle'); }
    }
  });

  OFIG.add('michelson', {
    w: 340, n: 4, alt: s => ['The image M₂′ of M₂ makes an air film with M₁', 'A ray at angle θ: path difference 2d cosθ', 'Circular fringes; moving a mirror by λ/2 moves one fringe',
      'Two lines: their fringe systems drift in and out of step'][s - 1],
    build(g, s) {
      if (s === 4) {
        const x0 = 30, x1 = 305, y0 = 30, y1 = 128; g.line(x0, y0, x1, y0, 'k'); g.line(x0, y0, x0, y1 + 8, 'k');
        const pts = []; for (let i = 0; i <= 300; i += 1) pts.push([x0 + (x1 - x0) * i / 300, y0 + 6 + Math.abs(Math.cos(Math.PI * 4 * i / 300)) * (y1 - y0 - 10)]);
        g.poline(pts, 'curve'); g.text(x0 - 4, y1 - 4, 'V', 't sym', 'end'); g.text(x1, y0 - 10, 'mirror position →', 't mute', 'end');
        g.dim(x0 + (x1 - x0) / 4 * 0.5 + 2, y0 + 3, x0 + (x1 - x0) / 4 * 1.5 + 2, y0 + 3, 'Δd', 0, 'dim new'); g.text(170, 158, 'fringes vanish every Δd = λ² / 2Δλ', 't big new', 'middle');
        return;
      }
      if (s === 3) {
        const c = [95, 85]; for (let k = 1; k <= 6; k += 1) g.circle(c[0], c[1], 9 + k * 11, 'k' + (k === 3 ? ' new thick' : '') + ' nofill');
        g.dot(c[0], c[1], 'pt', 3); g.text(230, 120, '2d cosθ = mλ', 't big new', 'middle'); g.text(230, 100, 'move M₂ by λ/2:', 't', 'middle'); g.text(230, 86, 'one fringe crosses the centre', 't', 'middle');
        g.text(230, 62, 'N = 2Δd/λ    λ = 2Δd/N', 't big new', 'middle');
        return;
      }
      const y1 = 58, y2 = 118, x0 = 60, x1 = 260;
      g.rect(x0, y1 - 4, x1, y1, 'fillk'); g.rect(x0, y2, x1, y2 + 4, 'fillk new'); g.text(x1 + 8, y1 - 2, 'M₁', 't sym', 'start'); g.text(x1 + 8, y2 + 4, 'M₂′', 't sym' + N(s, 1), 'start');
      g.dim(x0 - 16, y1, x0 - 16, y2, 'd', 0, 'dim new');
      if (s === 1) { g.text(170, 152, 'the interferometer = an air film of thickness d', 't big new', 'middle'); g.text(170, 14, 'source images S and S′ face M₁ and M₂′', 't mute', 'middle'); }
      if (s === 2) {
        const th = 26 * D, xb = 130; g.arrow(xb - 70 * Math.sin(th), y2 + 60 * Math.cos(th) + 0 * 1, xb, y1, 'r', 0.5);
        g.arrow(xb, y1, xb + 60 * Math.sin(th), y1 + 60 * Math.cos(th), 'r new', 0.6);
        g.line(xb, y1, xb + (y1 - y2) * Math.tan(th) * -1 * 1, y2, 'r2'); g.text(170, 152, 'Δ = 2d cosθ', 't big new', 'middle'); g.angle(xb, y1, 24, 270 - 26, 270, 'θ', 'ang new');
      }
    }
  });

  /* ── 2.2  spatial coherence and slit width criterion ─────────────────── */
  OFIG.add('spatial_coherence', {
    w: 380, n: 4, alt: s => ['Extended source slit of width w at distance Ds illuminating double slit d',
      'Off-axis source point s shifts central fringe to x₀ = (D/Ds)s',
      'Edge source points ±w/2 produce fringe patterns shifted by Δx = (D/Ds)w',
      'Spatial coherence threshold: Δx < β/2 gives wd/Ds < λ/2'][s - 1],
    build(g, s) {
      const cy = 82, xS = 35, xD = 150, xScr = 280, d = 40;
      g.line(15, cy, 365, cy, 'k dash');

      /* Source plane */
      const w = 30;
      g.line(xS, 15, xS, cy - w / 2 - 2, 'k thick'); g.line(xS, cy + w / 2 + 2, xS, 155, 'k thick');
      g.dim(xS - 14, cy - w / 2, xS - 14, cy + w / 2, 'w', 0, 'dim' + N(s, 1));
      g.text(xS, cy + w / 2 + 12, 'source', 't mute', 'middle');

      /* Double-slit plane */
      const S1 = [xD, cy + d / 2], S2 = [xD, cy - d / 2];
      g.line(xD, 15, xD, cy - d / 2 - 3, 'k thick');
      g.line(xD, cy - d / 2 + 3, xD, cy + d / 2 - 3, 'k thick');
      g.line(xD, cy + d / 2 + 3, xD, 155, 'k thick');
      g.dot(S1[0], S1[1], 'pt'); g.dot(S2[0], S2[1], 'pt');
      g.text(S1[0] - 12, S1[1], 'S₁', 't sym'); g.text(S2[0] - 12, S2[1], 'S₂', 't sym');
      g.dim(xD + 14, S2[1], xD + 14, S1[1], 'd', 0, 'dim' + N(s, 1));

      /* Screen plane */
      g.line(xScr, 15, xScr, 155, 'k thick');
      g.dot(xScr, cy, 'pt'); g.text(xScr - 8, cy - 10, 'O', 't sym');

      /* Dimensions Ds and D */
      g.dim(xS, 32, xD, 32, 'Dₛ', 0, 'dim');
      g.dim(xD, 32, xScr, 32, 'D', 0, 'dim');

      if (s === 1 || s === 2) {
        const sY = 12, ptS = [xS, cy + sY];
        g.dot(ptS[0], ptS[1], 'pt new', 3.4); g.text(ptS[0] - 10, ptS[1], 's', 't sym new');
        g.arrow(ptS[0], ptS[1], S1[0], S1[1], 'r' + (s === 1 ? ' new' : ''), 0.55);
        g.arrow(ptS[0], ptS[1], S2[0], S2[1], 'r2' + (s === 1 ? ' new' : ''), 0.55);
      }

      if (s === 1) {
        /* path difference at slits */
        g.line(S1[0], S1[1], S1[0] - 6, S2[1] + 6, 'k dash');
        g.text(S1[0] - 18, cy - 2, 'Δr', 't sym new');
        g.text(180, 156, 'Path difference: Δr = SS₂ − SS₁ ≈ s·d / Dₛ', 't big new', 'middle');
        g.text(180, 16, 'Source points emit independently.', 't mute', 'middle');
      }

      if (s === 2) {
        const x0 = 15, P = [xScr, cy - x0];
        g.arrow(S1[0], S1[1], P[0], P[1], 'r new', 0.55);
        g.arrow(S2[0], S2[1], P[0], P[1], 'r2 new', 0.55);
        g.dot(P[0], P[1], 'pt new', 3.6); g.text(P[0] + 12, P[1], 'P (x₀)', 't sym new');
        g.dim(xScr + 22, cy, xScr + 22, P[1], 'x₀', 0, 'dim new');
        g.text(180, 156, 'x₀ = (D / Dₛ) s  (screen axis downward)', 't big new', 'middle');
        g.text(180, 16, 'Same fringes, shifted by each source point.', 't mute', 'middle');
      }

      if (s >= 3) {
        /* Edges at +w/2 and -w/2 */
        const e1 = [xS, cy + w / 2], e2 = [xS, cy - w / 2];
        g.dot(e1[0], e1[1], 'pt', 2.8); g.dot(e2[0], e2[1], 'pt', 2.8);
        g.text(e1[0] - 10, e1[1], '+w/2', 't sym mute'); g.text(e2[0] - 10, e2[1], '−w/2', 't sym mute');
        g.arrow(e1[0], e1[1], S1[0], S1[1], 'r', 0.5); g.arrow(e2[0], e2[1], S2[0], S2[1], 'r2', 0.5);

        const shift = s === 4 ? 7.5 : 5, beta = 30;
        /* fringe pattern 1 from +w/2 */
        const pts1 = [];
        for (let y = cy - 45; y <= cy + 45; y += 2) {
          const val = 18 * Math.pow(Math.cos(Math.PI * (y - (cy - shift)) / beta), 2);
          pts1.push([xScr + 4 + val, y]);
        }
        g.poline(pts1, 'curve' + (s === 3 ? ' new' : ' old') + ' nofill');

        /* fringe pattern 2 from -w/2 */
        const pts2 = [];
        for (let y = cy - 45; y <= cy + 45; y += 2) {
          const val = 18 * Math.pow(Math.cos(Math.PI * (y - (cy + shift)) / beta), 2);
          pts2.push([xScr + 4 + val, y]);
        }
        g.poline(pts2, 'curve2' + (s === 3 ? ' new' : ' old') + ' nofill');
        if (s === 4) {
          // The two edge patterns differ by half a fringe: their intensity sum is flat.
          g.line(xScr + 22, cy - 45, xScr + 22, cy + 45, 'curve new');
        }

        g.dim(xScr + 28, cy - shift, xScr + 28, cy + shift, 'Δx', 0, 'dim new');
        g.text(xScr + 38, cy - shift - 12, '+w/2', 't sym' + N(s, 3), 'start');
        g.text(xScr + 38, cy + shift + 12, '−w/2', 't sym', 'start');
      }

      if (s === 3) {
        g.text(180, 156, 'Total edge shift: Δx = (D / Dₛ) w', 't big new', 'middle');
        g.text(180, 16, 'Add intensities of the shifted patterns.', 't mute', 'middle');
      }

      if (s === 4) {
        g.text(180, 156, 'Coherence condition: Δx < β/2  ⇒  w < λDₛ / (2d)', 't big new', 'middle');
        g.text(180, 138, 'wd / Dₛ < λ/2   (angular: Δθₛ < λ/2d)', 't big new', 'middle');
        g.text(180, 16, 'Edge patterns lose contrast at Δx = β/2.', 't mute', 'middle');
      }
    }
  });
})();

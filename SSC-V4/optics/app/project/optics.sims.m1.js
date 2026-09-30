/* Optics simulations — Module I (Fermat, surfaces, lenses). Registers into OSIM (optics.sims.js). */

(function () {
  const D = Math.PI / 180, f0 = v => String(Math.round(v)), f1 = v => (Math.round(v * 10) / 10).toFixed(1), f2 = v => (Math.round(v * 100) / 100).toFixed(2);
  const N = OSIM.fmt;

  /* ── reflection: where does the ray touch the mirror? ────────────────── */
  const RA = [60, 110], RB = x => [250, 30 + x], MY = 30;
  const rL = (x, hB) => Math.hypot(x - RA[0], RA[1] - MY) + Math.hypot(250 - x, hB);
  OSIM.add('reflect', {
    title: 'the mirror and the shortest path',
    blurb: 'P slides along the mirror. The path length <b>L = AP + PB</b> falls, reaches a minimum and rises again — the ray the mirror actually obeys is the bottom of that curve.',
    params: [{ k: 'x', label: 'reflection point P', min: 40, max: 280, step: 1, value: 110, fmt: f0 }, { k: 'hB', label: 'height of B', min: 20, max: 120, step: 2, value: 60, fmt: f0 }],
    watch: { k: 'x', from: 55, to: 265 },
    draw(g, p) {
      const B = RB(p.hB), P = [p.x, MY];
      g.line(20, MY, 300, MY, 'k thick'); g.hatch(24, 296, MY, 8);
      g.arrow(RA[0], RA[1], P[0], P[1], 'r new', 0.55); g.arrow(P[0], P[1], B[0], B[1], 'r new', 0.6);
      g.dot(RA[0], RA[1]); g.dot(B[0], B[1]); g.dot(P[0], P[1], 'pt new', 3.6);
      g.text(RA[0] - 10, RA[1] + 3, 'A', 't sym'); g.text(B[0] + 10, B[1] + 3, 'B', 't sym'); g.text(P[0], MY - 12, 'P', 't sym new');
      const pts = []; for (let x = 40; x <= 280; x += 4) pts.push([x, rL(x, p.hB)]);
      const ys = pts.map(q => q[1]), lo = Math.min.apply(null, ys), hi = Math.max.apply(null, ys), box = { x0: 200, x1: 300, y0: 122, y1: 162 };
      g.rect(box.x0 - 8, box.y0 - 8, box.x1 + 6, box.y1 + 6, 'fillk');
      const m = OSIM.util.plot(g, box, pts, 'curve old', hi, lo); g.dot(m.px(p.x), m.py(rL(p.x, p.hB)), 'pt new', 3);
      g.text(box.x1, box.y0 - 4, 'path length L against x', 't mute', 'end');
    },
    read: p => { const B = RB(p.hB), ai = (p.x - RA[0]) / Math.hypot(p.x - RA[0], RA[1] - MY), ar = (250 - p.x) / Math.hypot(250 - p.x, B[1] - MY); return [['L = AP + PB', f1(rL(p.x, p.hB))], ['sin i', f2(ai)], ['sin r', f2(ar)]]; },
    law: p => { const h = 1e-4, d = (rL(p.x + h, p.hB) - rL(p.x - h, p.hB)) / (2 * h), B = RB(p.hB), si = (p.x - RA[0]) / Math.hypot(p.x - RA[0], RA[1] - MY), sr = (250 - p.x) / Math.hypot(250 - p.x, B[1] - MY);
      return { lhs: d, rhs: si - sr, text: 'dL/dx = ' + f2(d) + ' = sin i − sin r = ' + f2(si - sr) + '   (zero when i = r)' }; },
    tasks: [
      { lv: 1, type: 'set', key: 'x', q: 'Drag <b>P</b> to where the path <b>AP + PB</b> is <b>shortest</b>.', tol: { abs: 4 }, goal: p => RA[0] + 190 * 80 / (80 + p.hB),
        why: (p, a) => 'The bottom of the L-curve is at x ≈ ' + f0(a) + ': there sin i = sin r, so <b>i = r</b>.' },
      { lv: 2, type: 'num', q: 'A is 80 above the mirror and B is 60 above it; their feet are 190 apart. How far from A\'s foot is P?', setup: { hB: 60 }, unit: 'units', tol: { rel: 0.03 },
        ans: p => 190 * 80 / 140, why: () => 'Similar triangles: the reflected path is straight through the image of A, so x/80 = (190 − x)/60, x = 190·80/140 ≈ <b>108.6</b>.' },
      { lv: 3, type: 'num', setup: { hB: 120 }, q: 'B is now raised to 120 above the mirror (A stays at 80; feet still 190 apart). Where does P move to, measured from A\'s foot?', unit: 'units', tol: { rel: 0.03 },
        ans: p => 190 * 80 / (80 + p.hB), why: (p, a) => 'x = 190·80/(80 + 120) = <b>' + f1(a) + '</b>: P moves toward A\'s foot as B rises — the mirror splits the horizontal distance in the ratio of the heights.' }
    ]
  });

  /* ── Snell's law: where does the ray cross the interface? ─────────────── */
  const SA = [55, 150], SB = [250, 20], SI = 85;
  const sL = (x, n2) => Math.hypot(SA[1] - SI, x - SA[0]) + n2 * Math.hypot(SI - SB[1], SB[0] - x);
  const sX = n2 => { let lo = SA[0], hi = SB[0]; for (let i = 0; i < 60; i += 1) { const m = (lo + hi) / 2, f = (m - SA[0]) / Math.hypot(SA[1] - SI, m - SA[0]) - n2 * (SB[0] - m) / Math.hypot(SI - SB[1], SB[0] - m); if (f > 0) hi = m; else lo = m; } return (lo + hi) / 2; };
  OSIM.add('snell', {
    title: "Snell's law from the shortest optical path",
    blurb: 'The ray crosses the boundary at R. The optical path <b>L = n₁·AR + n₂·RB</b> is smallest exactly where <b>n₁ sinθ₁ = n₂ sinθ₂</b>. Change n₂ and watch the best crossing point move.',
    params: [{ k: 'x', label: 'crossing point R', min: 60, max: 245, step: 1, value: 110, fmt: f0 }, { k: 'n2', label: 'index n₂', min: 1, max: 2, step: 0.05, value: 1.5, fmt: f2 }],
    watch: { k: 'x', from: 70, to: 235 },
    draw(g, p) {
      const R = [p.x, SI];
      g.rect(15, SI, 305, 165, 'fillw'); g.rect(15, 5, 305, SI, 'fillg'); g.line(15, SI, 305, SI, 'k thick');
      g.text(28, 155, 'n₁ = 1', 't sym'); g.text(28, 12, 'n₂', 't sym');
      g.arrow(SA[0], SA[1], R[0], R[1], 'r new', 0.5); g.arrow(R[0], R[1], SB[0], SB[1], 'r new', 0.55);
      g.line(R[0], SI - 50, R[0], SI + 55, 'k dash'); g.dot(SA[0], SA[1]); g.dot(SB[0], SB[1]); g.dot(R[0], R[1], 'pt new', 3.6);
      g.text(SA[0] - 10, SA[1], 'A', 't sym'); g.text(SB[0] + 10, SB[1], 'B', 't sym'); g.text(R[0] + 9, SI + 12, 'R', 't sym new');
      const t1 = Math.atan2(SA[1] - SI, SA[0] - R[0]) / D, t2 = Math.atan2(SB[1] - SI, SB[0] - R[0]) / D;
      g.angle(R[0], SI, 22, 90, t1, 'θ₁', 'ang new'); g.angle(R[0], SI, 22, 270, 360 + t2, 'θ₂', 'ang new');
      const pts = []; for (let x = 60; x <= 245; x += 4) pts.push([x, sL(x, p.n2)]);
      const ys = pts.map(q => q[1]), lo = Math.min.apply(null, ys), hi = Math.max.apply(null, ys), box = { x0: 232, x1: 302, y0: 118, y1: 152 };
      g.rect(box.x0 - 8, box.y0 - 8, box.x1 + 8, box.y1 + 12, 'fillk');
      const m = OSIM.util.plot(g, box, pts.map(q => [q[0], -q[1]]), 'curve old', -lo, -hi); g.dot(m.px(p.x), m.py(-sL(p.x, p.n2)), 'pt new', 3);
      g.text(box.x0 - 2, box.y1 + 6, 'L(x)', 't sym mute', 'start');
    },
    read: p => { const s1 = (p.x - SA[0]) / Math.hypot(SA[1] - SI, p.x - SA[0]), s2 = (SB[0] - p.x) / Math.hypot(SI - SB[1], SB[0] - p.x); return [['L', f1(sL(p.x, p.n2))], ['n₁ sinθ₁', f2(s1)], ['n₂ sinθ₂', f2(p.n2 * s2)]]; },
    law: p => { const h = 1e-4, d = (sL(p.x + h, p.n2) - sL(p.x - h, p.n2)) / (2 * h), s1 = (p.x - SA[0]) / Math.hypot(SA[1] - SI, p.x - SA[0]), s2 = (SB[0] - p.x) / Math.hypot(SI - SB[1], SB[0] - p.x);
      return { lhs: d, rhs: s1 - p.n2 * s2, text: 'dL/dx = ' + f2(d) + ' = n₁sinθ₁ − n₂sinθ₂  (zero at the true ray)' }; },
    tasks: [
      { lv: 1, type: 'set', key: 'x', q: 'With <b>n₂ = 1.5</b>, drag <b>R</b> to the crossing point that makes L smallest.', setup: { n2: 1.5 }, tol: { abs: 3 }, goal: p => sX(p.n2),
        why: (p, a) => 'The minimum of L is at x ≈ ' + f0(a) + ', where n₁ sinθ₁ = n₂ sinθ₂ (the two readouts agree).' },
      { lv: 2, type: 'num', q: 'A ray in air meets glass (n = 1.5) with <b>sin θ₁ = 0.6</b>. What is <b>sin θ₂</b>?', unit: '', tol: { abs: 0.02 }, ans: () => 0.4, why: () => 'n₁ sinθ₁ = n₂ sinθ₂ → sinθ₂ = 0.6/1.5 = <b>0.40</b> (θ₂ ≈ 23.6°): the ray bends toward the normal.' },
      { lv: 3, type: 'num', q: 'Light travels from glass (n = 1.5) into air. At what angle of incidence θ₁ (degrees) does the refracted ray just skim the surface (θ₂ = 90°)?', unit: '°', tol: { abs: 0.6 },
        ans: () => Math.asin(1 / 1.5) / D, why: (p, a) => 'n₁ sinθ₁ = n₂ sin 90° → sinθ₁ = 1/1.5, θ₁ = <b>' + f1(a) + '°</b>. Beyond this no refracted ray exists: total internal reflection.' }
    ]
  });

  /* ── refraction at a spherical surface ───────────────────────────────── */
  function surf(p) {
    const n1 = 1, C = 110 + p.R, Ov = 110, h = 0.2, P = [C - Math.sqrt(p.R * p.R - h * h), h], Ob = [Ov - p.u, 0];
    const al = Math.atan2(h, P[0] - Ob[0]), ga = Math.asin(h / p.R), t1 = al + ga, t2 = Math.asin(Math.sin(t1) * n1 / p.n2), be = ga - t2;
    const vf = p.n2 / (n1 / -p.u + (p.n2 - n1) / p.R);
    const vRay = Math.abs(be) < 1e-12 ? Infinity : (P[0] + h / Math.tan(be)) - Ov;
    return { vf: vf, vRay: vRay, C: C, Ov: Ov, Ob: Ob };
  }
  OSIM.add('surface', {
    title: 'refraction at a spherical surface',
    w: 380, sc: 1.25, ox: 22, oy: 104,
    blurb: 'A point object on the axis and a curved boundary. Change the radius, the index or the distance and see where the rays meet: <b>n₂/v − n₁/u = (n₂ − n₁)/R</b>.',
    params: [{ k: 'u', label: 'object distance |u|', min: 40, max: 120, step: 2, value: 90, fmt: f0 }, { k: 'R', label: 'radius R', min: 20, max: 60, step: 2, value: 40, fmt: f0 }, { k: 'n2', label: 'index n₂', min: 1.3, max: 2.2, step: 0.1, value: 2, fmt: f1 }],
    watch: { k: 'R', from: 24, to: 58 },
    draw(g, p) {
      const s = surf(p), Ov = s.Ov, C = [s.C, 0], Ob = [s.Ob[0], 0], R = p.R, h = 16, P = [C[0] - Math.sqrt(R * R - h * h), h];
      g.rect(-16, -62, Ov, 62, 'fillw'); g.rect(Ov, -62, 250, 62, 'fillg'); g.line(-16, 0, 252, 0, 'k dash');
      g.arc(C[0], 0, R, 180 - 62, 180 + 62, 'surf'); g.dot(Ob[0], 0); g.dot(Ov, 0); g.dot(C[0], 0);
      g.text(Ob[0], -12, 'Ob', 't sym'); g.text(C[0], -12, 'C', 't sym'); g.text(14, 52, 'n₁ = 1', 't sym'); g.text(228, 52, 'n₂', 't sym');
      const al = Math.atan2(h, P[0] - Ob[0]), ga = Math.asin(h / R), t1 = al + ga, t2 = Math.asin(Math.sin(t1) / p.n2), be = ga - t2;
      g.arrow(Ob[0], 0, P[0], P[1], 'r new', 0.5);
      const dx = Math.cos(-be), dy = Math.sin(-be);
      if (be > 1e-4) { const x = P[0] + h / Math.tan(be); const xe = Math.min(x, 245); g.arrow(P[0], P[1], xe, P[1] - (xe - P[0]) * Math.tan(be), 'r new', 0.5); if (x <= 245) { g.dot(x, 0, 'pt new', 3.6); g.text(x, -12, 'I', 't sym new'); } else g.text(150, -46, 'image far to the right', 't mute'); }
      else { g.arrow(P[0], P[1], 245, P[1] - (245 - P[0]) * Math.tan(be), 'r new', 0.5); g.text(150, -46, be < -1e-4 ? 'rays diverge: virtual image' : 'rays leave parallel', 't new'); }
    },
    read: p => { const s = surf(p); return [['v (formula)', isFinite(s.vf) && Math.abs(s.vf) < 1e5 ? f0(s.vf) : '∞'], ['image', s.vf > 0 ? 'real' : 'virtual'], ['power (n₂−n₁)/R', f2((p.n2 - 1) / p.R * 100) + '/100']]; },
    law: p => { const s = surf(p); if (!isFinite(s.vRay)) return { lhs: 0, rhs: 0, text: 'rays leave parallel: v = ∞ and n₂/v − n₁/u = (n₂−n₁)/R holds with 1/v = 0' };
      const lhs = p.n2 / s.vRay - 1 / -p.u, rhs = (p.n2 - 1) / p.R; return { lhs: lhs, rhs: rhs, text: 'ray-traced: n₂/v − n₁/u = ' + (lhs * 1000).toFixed(2) + '×10⁻³ = (n₂−n₁)/R = ' + (rhs * 1000).toFixed(2) + '×10⁻³' }; },
    tasks: [
      { lv: 1, type: 'num', setup: { u: 90, R: 40, n2: 2 }, q: 'Read the scene: object 90 to the left, R = 40, n₂ = 2 (n₁ = 1). How far to the right of the vertex O is the image <b>v</b>?', unit: '', tol: { rel: 0.03 },
        ans: p => surf(p).vf, why: (p, a) => 'n₂/v = n₁/u + (n₂−n₁)/R = −1/90 + 1/40 → v = <b>' + f0(a) + '</b>.' },
      { lv: 2, type: 'num', setup: { u: 80, R: 30, n2: 1.8 }, q: 'Now u = −80, R = +30, n₂ = 1.8. Find <b>v</b>.', unit: '', tol: { rel: 0.03 },
        ans: p => surf(p).vf, why: (p, a) => '1.8/v = −1/80 + 0.8/30 = 0.01417 → v = <b>' + f0(a) + '</b>.' },
      { lv: 3, type: 'num', setup: { R: 30, n2: 1.5 }, q: 'Parallel light (object at infinity) meets a surface with R = 30 into n₂ = 1.5. Where does it focus (distance from the vertex)?', unit: '', tol: { rel: 0.03 },
        ans: p => p.n2 * p.R / (p.n2 - 1), why: (p, a) => 'Put u → ∞: n₂/f₂ = (n₂−n₁)/R → f₂ = n₂R/(n₂−n₁) = <b>' + f0(a) + '</b>.' }
    ]
  });

  /* ── the thin lens ───────────────────────────────────────────────────── */
  function lensModel(p) {
    const h = 30, Lx = 170, ox = Lx - p.u, r1 = [[ox, h], [Lx, 0]];
    /* ray 2: from the object top through the lens centre;  ray 1: parallel, then through F2 — intersect them */
    const a1 = [Lx, h], b1 = [Lx + p.f, 0], a2 = [ox, h], b2 = [Lx, 0];
    const dx1 = b1[0] - a1[0], dy1 = b1[1] - a1[1], dx2 = b2[0] - a2[0], dy2 = b2[1] - a2[1], det = dx1 * dy2 - dy1 * dx2;
    let X = null;
    if (Math.abs(det) > 1e-9) { const t = ((a2[0] - a1[0]) * dy2 - (a2[1] - a1[1]) * dx2) / det; X = [a1[0] + t * dx1, a1[1] + t * dy1]; }
    const vF = 1 / (1 / p.f - 1 / p.u);
    return { h: h, Lx: Lx, ox: ox, X: X, vRay: X ? X[0] - Lx : Infinity, vF: vF, m: vF / -p.u * -1 };
  }
  OSIM.add('lens', {
    title: 'the thin lens: where is the image?', oy: 85,
    blurb: 'Move the object. Two rays are enough: one parallel to the axis (then through F), one through the centre. Where they meet is the image — real when it forms beyond the lens, virtual when the object is inside the focal length.',
    params: [{ k: 'u', label: 'object distance u', min: 20, max: 150, step: 1, value: 100, fmt: f0 }, { k: 'f', label: 'focal length f', min: 20, max: 70, step: 1, value: 40, fmt: f0 }],
    watch: { k: 'u', from: 25, to: 145 },
    draw(g, p) {
      const m = lensModel(p), cy = 0, Lx = m.Lx;
      g.line(10, cy, 335, cy, 'k dash'); g.lens(Lx, -62, 62, 'lens', 8);
      g.dot(Lx - p.f, 0, 'pt hollow', 3); g.dot(Lx + p.f, 0, 'pt hollow', 3); g.text(Lx - p.f, -13, 'F', 't sym mute'); g.text(Lx + p.f, -13, 'F′', 't sym mute');
      g.line(m.ox, 0, m.ox, m.h, 'k thick'); g.dot(m.ox, m.h, 'pt');
      g.arrow(m.ox, m.h, Lx, m.h, 'r2', 0.5); g.arrow(m.ox, m.h, Lx, 0, 'r', 0.5);
      if (m.X && Math.abs(m.X[0] - Lx) < 300) {
        const X = m.X, real = X[0] > Lx;
        if (real) { g.arrow(Lx, m.h, X[0], X[1], 'r2', 0.6); g.arrow(Lx, 0, X[0], X[1], 'r', 0.75); } else { g.line(Lx, m.h, Lx + 150, m.h - 150 * m.h / p.f, 'r2'); g.line(Lx, 0, Lx + 100, -100 * m.h / p.u, 'r'); g.line(Lx, m.h, X[0], X[1], 'r2 dash'); g.line(Lx, 0, X[0], X[1], 'r dash'); }
        g.line(X[0], 0, X[0], X[1], 'k thick'); g.dot(X[0], X[1], 'pt new', 3.4); g.text(X[0], real ? X[1] - 12 : X[1] + 12, real ? 'image' : 'virtual image', 't new');
      } else g.text(230, 60, 'u = f: image at infinity', 't new');
    },
    read: p => { const m = lensModel(p); return [['v', Math.abs(m.vF) > 1e4 ? '∞' : f0(m.vF)], ['m = v/u', Math.abs(m.vF) > 1e4 ? '—' : f2(m.vF / -p.u)], ['image', Math.abs(m.vF) > 1e4 ? '—' : (m.vF > 0 ? 'real, inverted' : 'virtual, upright')]]; },
    law: p => { const m = lensModel(p); if (!m.X) return { lhs: 0, rhs: 0, text: 'object at the focus: parallel rays' }; return { lhs: 1 / m.vRay + 1 / p.u, rhs: 1 / p.f, text: '1/v − 1/u (from the two rays) = ' + (1 / m.vRay + 1 / p.u).toFixed(4) + ' = 1/f = ' + (1 / p.f).toFixed(4) }; },
    tasks: [
      { lv: 1, type: 'set', key: 'u', q: 'Set <b>f = 40</b>, then drag the object until the image is <b>real, inverted and the same size</b> as the object.', setup: { f: 40 }, tol: { abs: 3 }, goal: p => 2 * p.f,
        why: (p, a) => 'Equal size means |m| = v/u = 1, so v = u; then 1/u + 1/u = 1/f gives <b>u = 2f = ' + f0(a) + '</b>.' },
      { lv: 2, type: 'num', setup: { f: 30, u: 45 }, q: 'A lens with f = 30 and an object at u = 45 (cm). Find the image distance <b>v</b>.', unit: 'cm', tol: { rel: 0.03 }, ans: p => 1 / (1 / p.f - 1 / p.u),
        why: (p, a) => '1/v = 1/f − 1/u = 1/30 − 1/45 = 1/90 → <b>v = ' + f0(a) + ' cm</b> (real).' },
      { lv: 3, type: 'num', setup: { f: 30, u: 20 }, q: 'Now the object is <b>inside</b> the focal length: f = 30, u = 20 (cm). Give v with its sign (negative means virtual, on the object side).', unit: 'cm', tol: { rel: 0.05 }, ans: p => 1 / (1 / p.f - 1 / p.u),
        why: (p, a) => '1/v = 1/30 − 1/20 = −1/60 → <b>v = ' + f0(a) + ' cm</b>: virtual, upright, enlarged — a magnifying glass.' }
    ]
  });

  /* ── two thin lenses ─────────────────────────────────────────────────── */
  function two(p) {
    const f1v = 60, h1 = 30, a1 = -h1 / f1v, h2 = h1 + a1 * p.d, a2 = a1 - h2 / p.f2;
    return { f1: f1v, h1: h1, a1: a1, h2: h2, a2: a2, Fray: a2 === 0 ? Infinity : -h1 / a2, Fform: 1 / (1 / f1v + 1 / p.f2 - p.d / (f1v * p.f2)) };
  }
  OSIM.add('twolens', {
    title: 'two thin lenses a distance d apart', oy: 85,
    blurb: 'A ray parallel to the axis is bent by lens 1, travels d, and is bent again. The pair behaves like one lens whose focal length is <b>1/F = 1/f₁ + 1/f₂ − d/f₁f₂</b>. Push d up until the focusing disappears.',
    params: [{ k: 'd', label: 'separation d', min: 0, max: 160, step: 2, value: 40, fmt: f0 }, { k: 'f2', label: 'focal length f₂', min: 20, max: 80, step: 2, value: 40, fmt: f0 }],
    watch: { k: 'd', from: 0, to: 150 },
    draw(g, p) {
      const m = two(p), x1 = 60, x2 = 60 + p.d, cy = 0;
      g.line(10, cy, 335, cy, 'k dash'); g.lens(x1, -50, 50, 'lens', 7); g.lens(x2 + 1, -50, 50, 'lens', 7);
      g.text(x1, -62, 'L₁ (f₁ = 60)', 't sym'); g.text(x2, -74, 'L₂', 't sym');
      g.arrow(15, m.h1, x1, m.h1, 'r2', 0.5); g.arrow(x1, m.h1, x2, m.h2, 'r new', 0.5);
      const end = 330, ye = m.h2 + m.a2 * (end - x2); g.arrow(x2, m.h2, end, ye, 'r new', 0.5);
      if (m.a2 < -1e-6) { const Fx = x2 - m.h2 / m.a2; if (Fx < 330) { g.dot(Fx, 0, 'pt new', 3.6); g.text(Fx, -13, 'F', 't sym new'); } }
      g.dim(x1, 64, x2 + 0.01, 64, 'd', 0, 'dim');
    },
    read: p => { const m = two(p); return [['1/F', f2(1000 / m.Fform * 0.001 * 1000) + '×10⁻³'], ['F', Math.abs(m.Fform) > 1e3 ? '∞ (afocal)' : f0(m.Fform)], ['h₂', f1(m.h2)]]; },
    law: p => { const m = two(p); return { lhs: 1 / m.Fray, rhs: 1 / m.Fform, text: '1/F from the traced ray = ' + (1 / m.Fray).toFixed(4) + ' = f₁f₂ formula ' + (1 / m.Fform).toFixed(4) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { d: 0, f2: 60 }, q: 'Two lenses in contact: f₁ = 60, f₂ = 60. What is the combined focal length F?', unit: '', tol: { rel: 0.03 }, ans: p => 1 / (1 / 60 + 1 / p.f2),
        why: (p, a) => 'In contact the powers add: 1/F = 1/60 + 1/60 → <b>F = ' + f0(a) + '</b>.' },
      { lv: 2, type: 'num', setup: { d: 30, f2: 60 }, q: 'Now separate them by d = 30 (f₁ = f₂ = 60). Find F.', unit: '', tol: { rel: 0.03 }, ans: p => 1 / (1 / 60 + 1 / p.f2 - p.d / (60 * p.f2)),
        why: (p, a) => '1/F = 1/60 + 1/60 − 30/3600 = 0.025 → <b>F = ' + f0(a) + '</b>: separating the lenses lengthens the focal length.' },
      { lv: 3, type: 'set', key: 'd', setup: { f2: 60 }, q: 'With f₂ = 60, drag <b>d</b> to the separation at which the pair has <b>no net focusing</b> (parallel light leaves parallel).', tol: { abs: 4 }, goal: p => 60 + p.f2,
        why: (p, a) => '1/F = 0 needs d = f₁ + f₂ = <b>' + f0(a) + '</b>: lens 2\'s focus coincides with lens 1\'s — a telescope.' }
    ]
  });

  /* ── the concave mirror ──────────────────────────────────────────────── */
  const MX = 290;
  function mirModel(p) {
    const f = p.R / 2, h = 30, ox = MX - p.u, a1 = [MX, h], b1 = [MX - f, 0], a2 = [ox, h], b2 = [MX, -h * 0 - (h / p.u) * 0];
    /* ray 2: from the object top to the vertex reflects to the mirror image line through (ox, −h) */
    const P2 = [MX, 0], Q2 = [ox, -h];
    const dx1 = b1[0] - a1[0], dy1 = b1[1] - a1[1], dx2 = Q2[0] - P2[0], dy2 = Q2[1] - P2[1], det = dx1 * dy2 - dy1 * dx2;
    let X = null; if (Math.abs(det) > 1e-9) { const t = ((P2[0] - a1[0]) * dy2 - (P2[1] - a1[1]) * dx2) / det; X = [a1[0] + t * dx1, a1[1] + t * dy1]; }
    return { f: f, h: h, ox: ox, X: X, vRay: X ? MX - X[0] : Infinity, vF: 1 / (2 / p.R - 1 / p.u) };
  }
  OSIM.add('mirror', {
    title: 'the concave mirror',
    oy: 85,
    blurb: 'A concave mirror focuses at half its radius. Move the object: beyond C the image is smaller and inverted, at C it is the same size, between F and C it is larger; inside F it is virtual (behind the mirror).',
    params: [{ k: 'u', label: 'object distance u', min: 20, max: 150, step: 1, value: 110, fmt: f0 }, { k: 'R', label: 'radius of curvature R', min: 40, max: 120, step: 2, value: 100, fmt: f0 }],
    watch: { k: 'u', from: 25, to: 145 },
    draw(g, p) {
      const m = mirModel(p);
      g.line(10, 0, 320, 0, 'k dash'); g.arc(MX - p.R, 0, p.R, -32, 32, 'surf'); g.dot(MX - p.R, 0, 'pt', 2.6); g.text(MX - p.R, -13, 'C', 't sym'); g.dot(MX - m.f, 0, 'pt hollow', 3); g.text(MX - m.f, -13, 'F', 't sym');
      g.line(m.ox, 0, m.ox, m.h, 'k thick'); g.dot(m.ox, m.h, 'pt'); g.arrow(m.ox, m.h, MX, m.h, 'r2', 0.5); g.arrow(m.ox, m.h, MX, 0, 'r', 0.5);
      if (m.X && Math.abs(m.X[0] - MX) < 400) { const X = m.X, real = X[0] < MX; if (real) { g.arrow(MX, m.h, X[0], X[1], 'r2', 0.6); g.arrow(MX, 0, X[0], X[1], 'r', 0.6); } else { g.line(MX, m.h, MX - 120, m.h - 120 * m.h / -(MX - X[0]) * 0 - (m.h + m.h * 120 / m.f) + 0, 'r2 dash'); g.line(MX, m.h, X[0], X[1], 'r2 dash'); g.line(MX, 0, X[0], X[1], 'r dash'); }
        if (X[0] > 8 && X[0] < 330) { g.line(X[0], 0, X[0], X[1], 'k thick'); g.dot(X[0], X[1], 'pt new', 3.4); g.text(X[0], X[1] + (X[1] > 0 ? 12 : -12), real ? 'image' : 'virtual image', 't new'); } }
      else g.text(170, 60, 'u = f: reflected rays are parallel', 't new');
    },
    read: p => { const m = mirModel(p); return [['v', Math.abs(m.vF) > 1e4 ? '∞' : f0(m.vF)], ['m = −v/u', Math.abs(m.vF) > 1e4 ? '—' : f2(-m.vF / p.u)], ['image', Math.abs(m.vF) > 1e4 ? '—' : (m.vF > 0 ? 'real, inverted' : 'virtual, upright')]]; },
    law: p => { const m = mirModel(p); if (!m.X) return { lhs: 0, rhs: 0, text: 'object at F: parallel rays' }; return { lhs: 1 / p.u + 1 / m.vRay, rhs: 2 / p.R, text: '1/u + 1/v (from the two rays) = ' + (1 / p.u + 1 / m.vRay).toFixed(4) + ' = 2/R = ' + (2 / p.R).toFixed(4) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { R: 100, u: 100 }, q: 'The object stands at the centre of curvature (u = R = 100 cm). Where is the image?', unit: 'cm', tol: { rel: 0.03 }, ans: p => mirModel(p).vF,
        why: (p, a) => '1/v = 2/R − 1/u = 0.02 − 0.01 = 0.01 → <b>v = ' + f0(a) + ' cm</b>: the image is at C too, the same size, inverted.' },
      { lv: 2, type: 'num', setup: { R: 60, u: 45 }, q: 'R = 60 cm (so f = 30 cm) and the object is 45 cm away. Find the image distance.', unit: 'cm', tol: { rel: 0.03 }, ans: p => mirModel(p).vF,
        why: (p, a) => '1/v = 1/30 − 1/45 = 1/90 → <b>v = ' + f0(a) + ' cm</b> (real, magnified ×2).' },
      { lv: 3, type: 'set', key: 'u', setup: { R: 80 }, q: 'With R = 80 cm, drag the object to where the image is <b>real, inverted and exactly the same size</b>.', tol: { abs: 4 }, goal: p => p.R,
        why: (p, a) => 'Equal size needs v = u, so 1/u + 1/u = 2/R and <b>u = R = ' + f0(a) + ' cm</b> (the centre of curvature).' }
    ]
  });
})();

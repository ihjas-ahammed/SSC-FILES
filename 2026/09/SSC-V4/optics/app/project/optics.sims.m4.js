/* Optics simulations — Module IV (polarisation). */

(function () {
  const D = Math.PI / 180, f0 = v => String(Math.round(v)), f1 = v => (Math.round(v * 10) / 10).toFixed(1), f2 = v => (Math.round(v * 100) / 100).toFixed(2), f3 = v => (Math.round(v * 1000) / 1000).toFixed(3);
  const U = OSIM.util;

  /* ── polarisers in a row ─────────────────────────────────────────────── */
  const mI = p => 0.5 * Math.pow(Math.cos(p.a2 * D), 2) * Math.pow(Math.cos((p.a3 - p.a2) * D), 2);
  OSIM.add('malus', {
    title: 'three polarisers in a row',
    blurb: 'Unpolarised light loses half at the first polariser (axis 0°). After that each polariser keeps only the part of the field along its axis — <b>cos²</b> of the angle to the previous one. A middle polariser can let light through crossed ones.',
    params: [{ k: 'a2', label: 'second polariser (°)', min: 0, max: 90, step: 5, value: 45, fmt: f0 }, { k: 'a3', label: 'third polariser (°)', min: 0, max: 90, step: 5, value: 90, fmt: f0 }],
    watch: { k: 'a2', from: 0, to: 90 },
    draw(g, p) {
      const axes = [0, p.a2, p.a3], I = [0.5, 0.5 * Math.pow(Math.cos(p.a2 * D), 2), mI(p)];
      axes.forEach(function (a, k) {
        const cx = 60 + k * 100, cy = 95; g.circle(cx, cy, 30, 'k nofill'); const dx = 26 * Math.sin(a * D), dy = 26 * Math.cos(a * D); g.arrow(cx - dx, cy - dy, cx + dx, cy + dy, 'r' + (k === 0 ? '' : ' new'), 1); g.arrow(cx + dx, cy + dy, cx - dx, cy - dy, 'r' + (k === 0 ? '' : ' new'), 1);
        g.text(cx, cy - 42, k === 0 ? 'polariser 1' : k === 1 ? 'polariser 2' : 'polariser 3', 't mute'); g.text(cx, cy + 42, f0(a) + '°', 't');
        g.rect(cx - 16, 8, cx + 16, 8 + I[k] * 34, 'fillk new'); g.text(cx, 52, 'I = ' + f3(I[k]), 't');
      });
      g.text(160, 150, 'intensity after each polariser', 't mute', 'middle');
    },
    read: p => [['after P2', f3(0.5 * Math.pow(Math.cos(p.a2 * D), 2))], ['after P3', f3(mI(p))], ['fraction of the original', f2(mI(p) * 100) + ' %']],
    law: p => { const e1 = [1, 0], u2 = [Math.cos(p.a2 * D), Math.sin(p.a2 * D)], u3 = [Math.cos(p.a3 * D), Math.sin(p.a3 * D)]; const c2 = e1[0] * u2[0] + e1[1] * u2[1], v2 = [c2 * u2[0], c2 * u2[1]], c3 = v2[0] * u3[0] + v2[1] * u3[1]; return { lhs: 0.5 * c3 * c3, rhs: mI(p), text: 'projecting the field vector twice: I = ' + f3(0.5 * c3 * c3) + ' = ½cos²θ₂ cos²(θ₃−θ₂) = ' + f3(mI(p)) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { a2: 30, a3: 30 }, q: 'Unpolarised light passes two polarisers whose axes are 30° apart (P3 is set the same as P2, so it changes nothing). What fraction of the original intensity emerges?', unit: '', tol: { abs: 0.01 }, ans: mI,
        why: (p, a) => 'I = ½ I₀ cos²30° = ½ × 0.75 = <b>' + f3(a) + '</b>.' },
      { lv: 2, type: 'set', key: 'a2', setup: { a3: 90 }, q: 'The first and last polarisers are crossed (0° and 90°). Drag the middle one to the angle that lets the <b>most</b> light through.', tol: { abs: 5 }, goal: () => 45,
        why: () => 'I ∝ cos²θ · cos²(90° − θ) = ¼ sin²2θ, largest at <b>θ = 45°</b>.' },
      { lv: 3, type: 'num', setup: { a2: 45, a3: 90 }, q: 'Crossed polarisers pass nothing. Put a third at 45° between them. What fraction of the unpolarised intensity now emerges?', unit: '', tol: { abs: 0.01 }, ans: mI,
        why: (p, a) => 'I = ½ × cos²45° × cos²45° = ½ × ½ × ½ = <b>' + f3(a) + '</b>: the middle polariser re-tilts the polarisation so some light gets through.' }
    ]
  });

  /* ── reflection and Brewster's angle ─────────────────────────────────── */
  const bT = p => Math.asin(Math.sin(p.th * D) / p.n);
  const bRp = p => { const t = bT(p), c = Math.cos(p.th * D); return (p.n * c - Math.cos(t)) / (p.n * c + Math.cos(t)); };
  const bRs = p => { const t = bT(p), c = Math.cos(p.th * D); return (c - p.n * Math.cos(t)) / (c + p.n * Math.cos(t)); };
  OSIM.add('brewster', {
    title: "Brewster's angle",
    blurb: 'Light with its field <b>in</b> the plane of incidence (p) and <b>across</b> it (s) reflects differently. At one angle the p-part is not reflected at all, so the reflected light is purely s-polarised: <b>tan θ_B = n</b>.',
    params: [{ k: 'th', label: 'angle of incidence (°)', min: 0, max: 89, step: 1, value: 40, fmt: f0 }, { k: 'n', label: 'index n', min: 1.2, max: 2, step: 0.05, value: 1.5, fmt: f2 }],
    watch: { k: 'th', from: 5, to: 85 },
    draw(g, p) {
      const box = { x0: 30, x1: 200, y0: 30, y1: 140 }, ps = [], ss = [];
      for (let t = 0; t <= 89; t += 1) { const q = { th: t, n: p.n }; ps.push([t, Math.pow(bRp(q), 2)]); ss.push([t, Math.pow(bRs(q), 2)]); }
      const m = U.plot(g, box, ss, 'curve2', 1, 0); g.poline(ps.map(q => [m.px(q[0]), m.py(q[1])]), 'curve');
      g.dot(m.px(p.th), m.py(Math.pow(bRp(p), 2)), 'pt new', 3.2); g.dot(m.px(p.th), m.py(Math.pow(bRs(p), 2)), 'pt', 3);
      const tb = Math.atan(p.n) / D; g.line(m.px(tb), box.y0, m.px(tb), box.y1, 'k dash'); g.text(m.px(tb), box.y1 + 10, 'θB = ' + f1(tb) + '°', 't new');
      g.text(box.x0 + 4, box.y1 - 8 - 90 + 90, 'reflected fraction', 't mute', 'start'); g.text(m.px(75), m.py(0.55), 's', 't sym'); g.text(m.px(70), m.py(0.12), 'p', 't sym new');
      const O = [268, 55], t = p.th * D; g.line(210, O[1], 325, O[1], 'k thick'); g.text(300, 30, 'glass', 't mute');
      g.arrow(O[0] - 44 * Math.sin(t), O[1] + 44 * Math.cos(t), O[0], O[1], 'r', 0.5); g.arrow(O[0], O[1], O[0] + 44 * Math.sin(t), O[1] + 44 * Math.cos(t), 'r' + (Math.pow(bRp(p), 2) < 0.002 ? ' new' : ''), 0.6);
      g.arrow(O[0], O[1], O[0] + 40 * Math.sin(bT(p)), O[1] - 40 * Math.cos(bT(p)), 'r2', 0.6);
    },
    read: p => [['R for p', f3(Math.pow(bRp(p), 2))], ['R for s', f3(Math.pow(bRs(p), 2))], ['θ_B = atan n', f1(Math.atan(p.n) / D) + '°']],
    law: p => { const t = bT(p), tan = Math.tan(p.th * D - t) / Math.tan(p.th * D + t); return { lhs: tan, rhs: bRp(p), text: 'Fresnel p-amplitude two ways: tan(θ−θ′)/tan(θ+θ′) = ' + f3(tan) + ' = (n cosθ − cosθ′)/(n cosθ + cosθ′) = ' + f3(bRp(p)) }; },
    tasks: [
      { lv: 1, type: 'num', setup: { n: 1.5 }, q: 'For glass of index 1.5, at what angle of incidence is the reflected light completely polarised?', unit: '°', tol: { abs: 0.5 }, ans: p => Math.atan(p.n) / D,
        why: (p, a) => 'tan θ_B = n = 1.5 → θ_B = <b>' + f1(a) + '°</b>.' },
      { lv: 2, type: 'set', key: 'th', setup: { n: 1.33 }, q: 'For water (n = 1.33) drag the angle to the point where the <b>p-curve touches zero</b>.', tol: { abs: 1.5 }, goal: p => Math.atan(p.n) / D,
        why: (p, a) => 'At θ_B = atan 1.33 = <b>' + f1(a) + '°</b> the reflected and refracted rays are 90° apart and the p-reflection vanishes.' },
      { lv: 3, type: 'num', setup: { n: 1.33 }, q: 'Sunlight reflects off a calm lake (n = 1.33). At what elevation of the Sun above the horizon is the glare completely polarised?', unit: '°', tol: { abs: 0.7 }, ans: p => 90 - Math.atan(p.n) / D,
        why: (p, a) => 'θ_B = 53.1° from the vertical, so the Sun is 90° − 53.1° = <b>' + f1(a) + '°</b> above the horizon. The glare is horizontally polarised, which is why polarising sunglasses cut it.' }
    ]
  });

  /* ── a wave plate acting on linear light ─────────────────────────────── */
  const wState = p => { const a = Math.cos(p.theta * D), b = Math.sin(p.theta * D), dl = ((p.delta % 360) + 360) % 360; if (b < 1e-9 || a < 1e-9 || dl % 180 === 0) return 'linear'; return (Math.abs(a - b) < 1e-9 && (dl === 90 || dl === 270)) ? 'circular' : 'elliptical'; };
  OSIM.add('waveplate', {
    title: 'a wave plate on linear light',
    blurb: 'Linear light at angle <b>θ</b> to the plate\'s axis splits into two parts; the plate delays one by <b>δ</b>. Watch the tip of the electric field: a line, an ellipse or a circle depending on δ — and a half-wave plate simply turns the line through 2θ.',
    params: [{ k: 'theta', label: 'input angle θ (°)', min: 0, max: 90, step: 5, value: 45, fmt: f0 }, { k: 'delta', label: 'plate delay δ (°)', min: 0, max: 360, step: 15, value: 90, fmt: f0 }],
    watch: { k: 'delta', from: 0, to: 360 },
    draw(g, p) {
      const c = [110, 85], A = 60, a = Math.cos(p.theta * D), b = Math.sin(p.theta * D), dl = p.delta * D, pts = [];
      g.line(c[0] - 78, c[1], c[0] + 78, c[1], 'k dash'); g.line(c[0], c[1] - 72, c[0], c[1] + 72, 'k dash'); g.text(c[0] + 80, c[1] - 6, 'axis', 't mute', 'end');
      g.arrow(c[0], c[1], c[0] + A * a * 1.0, c[1] + A * b, 'r2', 1);
      for (let i = 0; i <= 120; i += 1) { const t = 2 * Math.PI * i / 120; pts.push([c[0] + A * a * Math.cos(t), c[1] + A * b * Math.cos(t - dl)]); }
      g.poline(pts, 'curve nofill new');
      g.text(240, 120, 'leaving the plate:', 't', 'middle'); g.text(240, 100, wState(p), 't big new', 'middle');
      g.text(240, 76, 'δ = 90°: quarter-wave', 't mute', 'middle'); g.text(240, 62, 'δ = 180°: half-wave', 't mute', 'middle');
    },
    read: p => { const dl = ((p.delta % 360) + 360) % 360; return [['state', wState(p)], ['axes of the ellipse', f2(Math.cos(p.theta * D)) + ' : ' + f2(Math.sin(p.theta * D))], ['plane turned (if δ = 180°)', f0(2 * p.theta) + '°']]; },
    law: p => { const a = Math.cos(p.theta * D), b = Math.sin(p.theta * D), dl = p.delta * D; if (a < 1e-6 || b < 1e-6) return { lhs: 0, rhs: 0, text: 'linear along an axis: the ellipse degenerates to a line' }; let worst = 0; for (let i = 0; i < 40; i += 1) { const t = 2 * Math.PI * i / 40, x = a * Math.cos(t), y = b * Math.cos(t - dl); const r = x * x / (a * a) + y * y / (b * b) - 2 * x * y * Math.cos(dl) / (a * b) - Math.pow(Math.sin(dl), 2); worst = Math.max(worst, Math.abs(r)); } return { lhs: worst, rhs: 0, text: 'every sampled point satisfies x²/a² + y²/b² − 2xy cosδ/ab = sin²δ (largest miss ' + worst.toExponential(1) + ')' }; },
    tasks: [
      { lv: 1, type: 'set', key: 'delta', setup: { theta: 45 }, q: 'Linear light at 45° to the axis. Drag <b>δ</b> to the delay of a <b>quarter-wave plate</b> — what turns the line into a circle?', tol: { abs: 15 }, goal: () => 90,
        why: () => 'A quarter of a wavelength of delay is a quarter of a cycle: <b>δ = 90°</b>. With equal parts (45°) the ellipse is a circle.' },
      { lv: 2, type: 'num', setup: { theta: 30, delta: 180 }, q: 'A half-wave plate (δ = 180°) receives linear light at 30° to its axis. Through what angle is the plane of vibration turned?', unit: '°', tol: { abs: 1 }, ans: p => 2 * p.theta,
        why: (p, a) => 'The delay flips one component, reflecting the vibration in the axis: the plane turns through 2θ = <b>' + f0(a) + '°</b>.' },
      { lv: 3, type: 'set', key: 'theta', setup: { delta: 90 }, q: 'A quarter-wave plate is fixed at δ = 90°. Drag the <b>input angle</b> to the value that gives <b>circular</b> light.', tol: { abs: 5 }, goal: () => 45,
        why: () => 'A circle needs the two parts equal: cosθ = sinθ, so <b>θ = 45°</b>. At any other angle the light is elliptical.' }
    ]
  });
})();

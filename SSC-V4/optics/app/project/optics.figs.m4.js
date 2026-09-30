/* Optics step diagrams — Module IV (polarisation). */

(function () {
  const N = (s, k) => (s === k ? ' new' : '');
  const D = Math.PI / 180;
  const deg = r => r / D;
  const pl = (g, box, f, a, b, cls) => {
    const px = x => box.x0 + (x - a) / (b - a) * (box.x1 - box.x0), py = y => box.y0 + (y + 1) / 2 * (box.y1 - box.y0), pts = [];
    for (let i = 0; i <= 240; i += 1) { const x = a + (b - a) * i / 240; pts.push([px(x), py(f(x))]); }
    g.poline(pts, cls || 'curve'); return { px: px, py: py };
  };

  OFIG.add('ellipse', {
    w: 340, n: 4, alt: s => ['Two perpendicular oscillations x and y with phase difference δ', 'Isolate the sin ωt term', 'Square and use sin² + cos² = 1', 'The ellipse; δ picks line, ellipse or circle'][s - 1],
    build(g, s) {
      if (s === 4) {
        [[0, 'δ = 0'], [45, 'δ = π/4'], [90, 'δ = π/2'], [135, 'δ = 3π/4'], [180, 'δ = π']].forEach(function (c, k) {
          const cx = 42 + k * 64, cy = 85, ph = c[0] * D, pts = [];
          for (let i = 0; i <= 90; i += 1) { const t = 2 * Math.PI * i / 90; pts.push([cx + 24 * Math.cos(t), cy + 24 * Math.cos(t + ph)]); }
          g.line(cx - 30, cy, cx + 30, cy, 'k dash'); g.line(cx, cy - 30, cx, cy + 30, 'k dash'); g.poline(pts, 'curve nofill' + (k === 2 ? ' new' : '')); g.text(cx, 36, c[1], 't sym' + (k === 2 ? ' new' : ''));
        });
        g.text(170, 150, 'line · ellipse · circle (a = b) · ellipse · line', 't big new', 'middle'); return;
      }
      const box = { x0: 30, x1: 160, y0: 30, y1: 140 }, box2 = { x0: 190, x1: 320, y0: 30, y1: 140 };
      if (s <= 2) {
        pl(g, box, t => Math.cos(t), 0, 4 * Math.PI, 'curve'); pl(g, box2, t => Math.cos(t + 1.05), 0, 4 * Math.PI, 'curve2');
        g.text(95, 148, 'x = a cos ωt', 't sym' + (s === 1 ? ' new' : ''), 'middle'); g.text(255, 148, 'y = b cos(ωt + δ)', 't sym' + (s === 1 ? ' new' : ''), 'middle');
        g.dim(box2.x0 + 0, 130, box2.x0 + 16, 130, 'δ', 0, 'dim' + N(s, 1));
        if (s === 2) g.text(170, 12, 'y/b − (x/a) cosδ = −sin ωt sinδ', 't big new', 'middle');
        return;
      }
      const cx = 100, cy = 85, pts = [];
      for (let i = 0; i <= 90; i += 1) { const t = 2 * Math.PI * i / 90; pts.push([cx + 44 * Math.cos(t), cy + 44 * Math.cos(t + 1.05)]); }
      g.line(cx - 55, cy, cx + 55, cy, 'k dash'); g.line(cx, cy - 55, cx, cy + 55, 'k dash'); g.poline(pts, 'curve nofill');
      g.text(250, 110, '(y/b − (x/a)cosδ)²', 't', 'middle'); g.text(250, 94, '= (1 − x²/a²) sin²δ', 't', 'middle'); g.text(250, 66, 'x²/a² + y²/b² − 2xy cosδ/ab', 't new', 'middle', 0, 0); g.text(250, 52, '= sin²δ', 't new', 'middle', 0, 0);
    }
  });

  OFIG.add('brewster', {
    w: 340, n: 3, alt: s => ['Reflected and refracted rays at 90°', 'Snell: sinθ_B = n sinθ_r with θ_r = 90° − θ_B', 'tanθ_B = n'][s - 1],
    build(g, s) {
      const yI = 90, O = [170, yI], tb = 56 * D, tr = 90 * D - tb;
      g.rect(15, yI, 325, 165, 'fillw'); g.rect(15, 10, 325, yI, 'fillg'); g.line(15, yI, 325, yI, 'k thick');
      g.text(34, 150, 'air  n = 1', 't mute', 'start'); g.text(34, 22, 'glass  n', 't sym', 'start'); g.line(O[0], 30, O[0], 150, 'k dash');
      g.arrow(O[0] - 100 * Math.sin(tb), yI + 100 * Math.cos(tb), O[0], yI, 'r', 0.5); g.arrow(O[0], yI, O[0] + 100 * Math.sin(tb), yI + 100 * Math.cos(tb), 'r' + N(s, 1), 0.6);
      g.arrow(O[0], yI, O[0] + 80 * Math.sin(tr), yI - 80 * Math.cos(tr), 'r2' + N(s, 1), 0.6);
      g.angle(O[0], yI, 30, 90 - deg(tb), 90, 'θB', 'ang new'); g.angle(O[0], yI, 30, 90, 90 + deg(tb), 'θB', 'ang'); g.angle(O[0], yI, 24, 270, 270 + deg(tr), 'θr', 'ang new');
      const a1 = 90 - deg(tb), a2 = -deg(tr) - 90 + 90;
      if (s === 1) { g.text(255, 148, 'reflected ⊥ refracted', 't big new', 'middle'); g.poly([[O[0] + 10 * Math.sin(tb), yI + 10 * Math.cos(tb)], [O[0] + 10 * Math.sin(tb) + 10 * Math.cos(tb), yI + 10 * Math.cos(tb) - 10 * Math.sin(tb)], [O[0] + 10 * Math.cos(tb) , yI - 10 * Math.sin(tb)]], 'fillk new'); }
      if (s === 2) g.text(250, 148, 'sinθB = n cosθB', 't big new', 'middle');
      if (s === 3) g.text(255, 148, 'tan θB = n   (glass: 56.3°)', 't big new', 'middle');
    }
  });

  OFIG.add('malus', {
    w: 340, n: 3, alt: s => ['E₀ resolved along and across the analyser axis', 'Intensity goes as E²', 'I = I₀ cos²θ'][s - 1],
    build(g, s) {
      if (s === 3) {
        const box = { x0: 40, x1: 305, y0: 28, y1: 138 }, px = t => box.x0 + t / 360 * (box.x1 - box.x0), py = y => box.y0 + y * (box.y1 - box.y0), pts = [];
        g.line(box.x0, box.y0, box.x1, box.y0, 'k'); g.line(box.x0, box.y0, box.x0, box.y1 + 6, 'k');
        for (let t = 0; t <= 360; t += 3) pts.push([px(t), py(Math.pow(Math.cos(t * D), 2))]); g.poline(pts, 'curve');
        [0, 90, 180, 270, 360].forEach(t => g.text(px(t), box.y0 - 11, t + '°', 't mute')); g.text(box.x0 - 4, box.y1, 'I₀', 't sym', 'end');
        g.text(170, 158, 'I = I₀ cos²θ: two maxima, two extinctions', 't big new', 'middle'); return;
      }
      const O = [120, 80], E = 80, th = 32 * D;
      g.line(O[0] - 90, O[1], O[0] + 90, O[1], 'k dash'); g.text(O[0] + 96, O[1], 'analyser axis', 't mute', 'start');
      g.arrow(O[0], O[1], O[0] + E * Math.cos(th) * 1, O[1] + E * Math.sin(th), 'r2', 1); g.text(O[0] + 48, O[1] + 58, 'E₀', 't sym big');
      g.angle(O[0], O[1], 36, 0, 32, 'θ', 'ang new');
      g.arrow(O[0], O[1], O[0] + E * Math.cos(th), O[1], 'r new', 1); g.text(O[0] + 40 * Math.cos(th), O[1] - 12, 'E₀ cosθ', 't sym new');
      g.line(O[0] + E * Math.cos(th), O[1], O[0] + E * Math.cos(th), O[1] + E * Math.sin(th), 'k dash'); g.text(O[0] + E * Math.cos(th) + 6, O[1] + E * Math.sin(th) / 2, 'E₀ sinθ (blocked)', 't mute', 'start');
      g.text(250, 24, s === 1 ? 'E∥ = E₀ cosθ passes' : 'I ∝ E∥² = E₀² cos²θ', 't big new', 'middle');
    }
  });

  OFIG.add('waveplate', {
    w: 340, n: 3, alt: s => ['The o and e components see different indices', 'Optical path difference (n_o − n_e)t', 'δ = π/2 is a quarter-wave plate, δ = π a half-wave plate'][s - 1],
    build(g, s) {
      const x0 = 120, x1 = 200, cy = 85;
      g.rect(x0, 30, x1, 140, 'fillk' + (s === 1 ? ' new' : '')); g.text(160, 150, 'plate, thickness t', 't mute'); g.dim(x0, 22, x1, 22, 't', 0, 'dim' + N(s, 2));
      g.arrow(20, cy + 12, x0, cy + 12, 'r', 0.5); g.arrow(20, cy - 12, x0, cy - 12, 'r2', 0.5);
      const shift = s >= 2 ? 22 : 0;
      g.line(x0, cy + 12, x1, cy + 12, 'r' + N(s, 1)); g.line(x0, cy - 12, x1, cy - 12, 'r2' + N(s, 1));
      g.arrow(x1, cy + 12, 320 - shift, cy + 12, 'r', 0.6); g.arrow(x1, cy - 12, 320, cy - 12, 'r2', 0.6);
      g.text(70, cy + 24, 'e: n_e', 't sym'); g.text(70, cy - 26, 'o: n_o', 't sym');
      if (s === 1) g.text(230, 158, 'v_e = c/n_e,   v_o = c/n_o', 't big new', 'middle');
      if (s >= 2) { g.dim(320 - shift, cy + 34, 320, cy + 34, 'Δ', 0, 'dim new'); g.text(230, 158, s === 2 ? 'Δ = (n_o − n_e) t' : 'δ = 2πΔ/λ:   λ/4 → π/2,   λ/2 → π', 't big new', 'middle'); }
      if (s === 3) { g.text(250, 44, 'quarter-wave: δ = π/2', 't new', 'middle'); g.text(250, 30, 'half-wave: δ = π', 't new', 'middle'); }
    }
  });

  OFIG.add('qwhwp', {
    w: 340, n: 4, alt: s => ['Linear light at θ to the optic axis splits into E cosθ and E sinθ', 'One component lags by δ after the plate', 'Quarter-wave: an ellipse with axes along and across the optic axis; circle at 45°',
      'Half-wave: the plane of vibration is reflected in the axis'][s - 1],
    build(g, s) {
      const O = [95, 85], E = 62, th = 30 * D;
      if (s <= 2) {
        g.line(O[0] - 75, O[1], O[0] + 75, O[1], 'k dash'); g.text(O[0] + 76, O[1] + 10, 'optic axis', 't mute', 'end');
        g.arrow(O[0], O[1], O[0] + E * Math.cos(th), O[1] + E * Math.sin(th), 'r', 1); g.angle(O[0], O[1], 30, 0, 30, 'θ', 'ang new');
        g.arrow(O[0], O[1], O[0] + E * Math.cos(th), O[1], 'r2 new', 1); g.arrow(O[0], O[1], O[0], O[1] + E * Math.sin(th), 'r3 new', 1);
        g.text(O[0] + 30, O[1] - 10, 'E cosθ (e)', 't sym'); g.text(O[0] - 10, O[1] + 38, 'E sinθ (o)', 't sym', 'end');
        if (s === 2) { g.text(250, 90, 'after the plate:', 't', 'middle'); g.text(250, 74, 'Eₓ = E cosθ cos ωt', 't new', 'middle'); g.text(250, 58, 'E_y = E sinθ cos(ωt − δ)', 't new', 'middle'); }
        if (s === 1) g.text(250, 74, 'both in phase at entry', 't new', 'middle');
        return;
      }
      if (s === 3) {
        const pts = [];
        for (let i = 0; i <= 90; i += 1) { const t = 2 * Math.PI * i / 90; pts.push([O[0] + E * Math.cos(th) * Math.cos(t), O[1] + E * Math.sin(th) * Math.sin(t)]); }
        g.line(O[0] - 75, O[1], O[0] + 75, O[1], 'k dash'); g.line(O[0], O[1] - 60, O[0], O[1] + 60, 'k dash'); g.poline(pts, 'curve nofill');
        const pc = []; for (let i = 0; i <= 90; i += 1) { const t = 2 * Math.PI * i / 90; pc.push([250 + 40 * Math.cos(t), O[1] + 40 * Math.sin(t)]); }
        g.poline(pc, 'curve2 nofill'); g.text(95, 24, 'θ = 30°: ellipse', 't', 'middle'); g.text(250, 24, 'θ = 45°: circle', 't new', 'middle');
        g.text(170, 152, 'δ = π/2:  Eₓ²/(E cosθ)² + E_y²/(E sinθ)² = 1', 't new', 'middle'); return;
      }
      g.line(O[0] - 75, O[1], O[0] + 75, O[1], 'k dash'); g.text(O[0] + 76, O[1] + 10, 'axis', 't mute', 'end');
      g.arrow(O[0], O[1], O[0] + E * Math.cos(th), O[1] + E * Math.sin(th), 'r', 1); g.arrow(O[0], O[1], O[0] + E * Math.cos(th), O[1] - E * Math.sin(th), 'r new', 1);
      g.angle(O[0], O[1], 34, 0, 30, 'θ', 'ang'); g.angle(O[0], O[1], 44, -30, 0, 'θ', 'ang new');
      g.text(245, 102, 'δ = π flips one component:', 't', 'middle'); g.text(245, 86, '(cosθ, sinθ) → (cosθ, −sinθ)', 't new', 'middle'); g.text(245, 64, 'plane turns through 2θ', 't big new', 'middle');
    }
  });
})();

/* ══════════════════════════════════════════════════════════════════════════
   The figures.

   Each one exists because the picture carries something the prose struggles
   with. Two of them take a control, because the whole point of ε–δ and of
   uniform continuity is what happens when you MOVE the parameter.

   Mock note: FIGMAP attaches figures to the placeholder concept ids. Validated
   data can instead declare `figs: ['fig.eps-delta']` on the concept itself and
   this map becomes unnecessary.
   ══════════════════════════════════════════════════════════════════════════ */

const FIGLIB = {

  /* ── §2.3 supremum: the least ceiling, not an element ─────────────────── */
  'fig.sup-inf': {
    title: 'sup sits outside the set',
    caption: 'Dots are $1-1/n$. Every dot is below $1$, and nothing below $1$ bounds them all — ' +
      'so $\\sup S=1$ even though $1$ is never an element. The infimum $0$ <i>is</i> an element.',
    build(api) {
      const p = Fig.plot({ w: 330, h: 120, xr: [-0.12, 1.42], yr: [0, 1], padT: 26, padB: 34 });
      p.add(Fig.svg('line', { class: 'axis', x1: p.X(-0.12), y1: p.Y(0.42),
        x2: p.X(1.42), y2: p.Y(0.42) }));

      for (let n = 1; n <= 9; n++) {
        const x = 1 - 1 / n;
        const d = p.dot(x, 0.42, '', 4);
        d.classList.add('fade-in');
        d.style.animationDelay = (n * 55) + 'ms';
      }
      p.dot(0, 0.42, 'good', 4.6);
      p.label(0, 0.16, 'inf S = 0 ∈ S', 'lbl');

      /* the open circle at the supremum */
      p.add(Fig.svg('circle', { cx: p.X(1), cy: p.Y(0.42), r: 5, class: 'pt open' }));
      p.line(1, 0.42, 1, 0.9, 'guide');
      p.label(1, 1.0, 'sup S = 1 ∉ S', 'lbl');

      /* upper bounds sliding down to the least one */
      const g = Fig.svg('g', { class: 'slide-x' });
      g.style.setProperty('--dx', (p.X(1.35) - p.X(1)) + 'px');
      g.appendChild(Fig.svg('line', { x1: p.X(1), y1: p.Y(0.06), x2: p.X(1), y2: p.Y(0.78),
        class: 'hot' }));
      g.appendChild(Fig.svg('text', { x: p.X(1) + 6, y: p.Y(0.1), text: 'upper bounds →',
        'text-anchor': 'start' }));
      p.add(g);
      api.body.appendChild(p.svg);
      p.svg.setAttribute('aria-label',
        'Number line with the points 1 minus 1 over n approaching 1; 1 is marked as an open circle.');
    }
  },

  /* ── §2.3 completeness: the hole in ℚ ─────────────────────────────────── */
  'fig.gap': {
    title: 'the hole completeness fills',
    caption: 'Rationals close in on $\\sqrt3$ from both sides. In $\\mathbb{Q}$ there is nothing ' +
      'at the meeting point, so the set of rationals below it has no least upper bound there. ' +
      'In $\\mathbb{R}$ the point exists — that is the whole content of the axiom.',
    build(api) {
      const R = Math.sqrt(3);
      const p = Fig.plot({ w: 330, h: 125, xr: [1.6, 1.87], yr: [0, 1], padT: 24, padB: 36 });
      p.axes({ y0: 0.4, yAxis: false, ticks: [{ x: 1.65, t: '1.65' }, { x: 1.8, t: '1.80' }] });

      const left = [1.7, 1.73, 1.731, 1.7320];
      const right = [1.85, 1.79, 1.7325, 1.73206];
      left.forEach(function (x, i) {
        const d = p.dot(x, 0.4, '', 3.6);
        d.classList.add('fade-in'); d.style.animationDelay = (i * 160) + 'ms';
      });
      right.forEach(function (x, i) {
        const d = p.dot(x, 0.4, 'good', 3.6);
        d.classList.add('fade-in'); d.style.animationDelay = (i * 160 + 80) + 'ms';
      });

      p.add(Fig.svg('line', { x1: p.X(R), y1: p.Y(0.12), x2: p.X(R), y2: p.Y(0.82), class: 'hot' }));
      p.add(Fig.svg('circle', { cx: p.X(R), cy: p.Y(0.4), r: 5, class: 'pt open' }));
      p.label(R, 0.95, '√3 ∉ ℚ', 'lbl');
      p.label(1.69, 0.13, 'x² < 3', '', 'middle');
      p.label(1.80, 0.13, 'x² > 3', '', 'middle');
      api.body.appendChild(p.svg);
      p.svg.setAttribute('aria-label',
        'Rationals approaching the square root of three from both sides, with a gap marked at the limit.');
    }
  },

  /* ── §3.4 Bolzano–Weierstrass ─────────────────────────────────────────── */
  'fig.bw': {
    title: 'a convergent subsequence, extracted',
    caption: 'The sequence $x_n=(-1)^n\\left(1-\\frac1n\\right)$ never settles, but the ' +
      'even-indexed terms (green) march to $1$. Boundedness alone guarantees some such ' +
      'subsequence exists — never that the sequence itself converges.',
    build(api) {
      const p = Fig.plot({ w: 330, h: 175, xr: [0, 22], yr: [-1.25, 1.25], padT: 18, padB: 26,
        padL: 26, padR: 14 });
      p.rect(0, -1, 22, 1, 'band');
      p.axes({ y0: 0, yAxis: false });
      p.line(0, 1, 22, 1, 'guide');
      p.label(20.4, 1.12, 'limit 1', 'lbl', 'end');
      p.label(1.6, -1.16, '|xₙ| ≤ 1', '', 'start');

      for (let n = 1; n <= 20; n++) {
        const y = (n % 2 ? -1 : 1) * (1 - 1 / n);
        const even = n % 2 === 0;
        const d = p.dot(n, y, even ? 'good' : '', even ? 4.4 : 3.2);
        d.classList.add('fade-in');
        d.style.animationDelay = (n * 45) + 'ms';
      }
      api.body.appendChild(p.svg);
      p.svg.setAttribute('aria-label',
        'A bounded oscillating sequence with its even-indexed subsequence converging to one.');
    }
  },

  /* ── §5.1 ε–δ, interactive ────────────────────────────────────────────── */
  'fig.eps-delta': {
    title: 'ε is demanded, δ is your answer',
    interactive: true,
    caption: 'Drag ε. The orange band is the tolerance you must land inside; the blue strip is ' +
      'the δ that answers it for $f(x)=x^2$ at $c=1$. Continuity means you can always answer — ' +
      'and δ shrinks as ε does.',
    build(api) {
      const f = x => x * x, c = 1, fc = 1;
      const p = Fig.plot({ w: 330, h: 215, xr: [0, 2], yr: [0, 4], padT: 14, padB: 26,
        padL: 30, padR: 14 });

      const epsBand = p.rect(0, fc - 0.6, 2, fc + 0.6, 'band warm');
      const delBand = p.rect(c - 0.2, 0, c + 0.2, 4, 'band');
      p.axes({ ticks: [{ x: 1, t: 'c = 1' }, { x: 2, t: '2' }] });
      const cur = p.path(p.curve(f), 'curve');
      p.line(0, fc, c, fc, 'guide');
      p.dot(c, fc, '', 4.4);
      const epsLbl = Fig.svg('text', { x: p.X(1.98), y: p.Y(fc) - 6, class: 'lbl',
        'text-anchor': 'end', text: 'ε' });
      const delLbl = Fig.svg('text', { x: p.X(c), y: p.Y(3.75), class: 'lbl',
        'text-anchor': 'middle', text: 'δ' });
      p.add(epsLbl, delLbl);
      api.body.appendChild(p.svg);
      p.draw(cur);

      function deltaFor(eps) {
        const right = Math.sqrt(fc + eps) - c;
        const left = (fc - eps) > 0 ? c - Math.sqrt(fc - eps) : c;
        return Math.min(right, left);
      }
      function update(eps) {
        const d = deltaFor(eps);
        const lo = Math.max(0, fc - eps), hi = Math.min(4, fc + eps);
        epsBand.setAttribute('y', p.Y(hi));
        epsBand.setAttribute('height', Math.abs(p.Y(lo) - p.Y(hi)));
        delBand.setAttribute('x', p.X(c - d));
        delBand.setAttribute('width', p.X(c + d) - p.X(c - d));
        epsLbl.setAttribute('y', p.Y(hi) - 5);
      }
      api.control({
        min: 0.1, max: 1.6, step: 0.05, value: 0.6, label: 'epsilon',
        format: v => 'ε = ' + v.toFixed(2) + '  →  δ = ' + deltaFor(v).toFixed(3),
        onInput: update
      });
      update(0.6);
      p.svg.setAttribute('aria-label',
        'The curve y equals x squared with an epsilon band around f of c and the delta strip that answers it.');
    }
  },

  /* ── §5.1 sequential criterion ────────────────────────────────────────── */
  'fig.seq-crit': {
    title: 'sequences carry continuity',
    caption: 'Any $x_n\\to c$ on the axis is dragged by $f$ to $f(x_n)\\to f(c)$ on the other. ' +
      'Continuity is exactly the promise that <i>every</i> such input sequence behaves; one ' +
      'misbehaving sequence is all it takes to destroy it.',
    build(api) {
      const f = x => 0.6 + 1.1 * Math.sin(1.15 * x);
      const c = 1.6;
      const p = Fig.plot({ w: 330, h: 205, xr: [0, 2.4], yr: [0, 2], padT: 14, padB: 26,
        padL: 34, padR: 14 });
      p.axes({ ticks: [{ x: c, t: 'c' }] });
      const cur = p.path(p.curve(f), 'curve');
      p.line(0, f(c), c, f(c), 'guide');
      p.line(c, 0, c, f(c), 'guide');
      p.dot(c, f(c), '', 4.6);
      p.label(0.22, f(c) + 0.14, 'f(c)', 'lbl', 'start');

      for (let n = 1; n <= 5; n++) {
        const x = c - 0.62 / n;
        const g = Fig.svg('g', { class: 'fade-in' });
        g.style.animationDelay = (250 + n * 200) + 'ms';
        g.appendChild(Fig.svg('circle', { cx: p.X(x), cy: p.Y(0), r: 3.2, class: 'pt' }));
        g.appendChild(Fig.svg('circle', { cx: p.X(0), cy: p.Y(f(x)), r: 3.2, class: 'pt good' }));
        g.appendChild(Fig.svg('line', { x1: p.X(x), y1: p.Y(0), x2: p.X(x), y2: p.Y(f(x)),
          class: 'guide' }));
        g.appendChild(Fig.svg('line', { x1: p.X(x), y1: p.Y(f(x)), x2: p.X(0), y2: p.Y(f(x)),
          class: 'guide' }));
        p.add(g);
      }
      p.label(1.02, 0.12, 'xₙ → c', 'lbl', 'middle');
      api.body.appendChild(p.svg);
      p.draw(cur);
      p.svg.setAttribute('aria-label',
        'Points approaching c on the x-axis with their images approaching f of c on the y-axis.');
    }
  },

  /* ── §5.3 max–min attained ────────────────────────────────────────────── */
  'fig.maxmin': {
    title: 'on [a,b] the extremes are reached',
    caption: 'Closed and bounded, plus continuity: the supremum and infimum of the range are ' +
      'not merely approached, they are <i>values</i> $f(x^*)$ and $f(x_*)$ at actual points of ' +
      'the interval.',
    build(api) {
      const f = x => 1.55 + 0.85 * Math.sin(3.1 * x) + 0.18 * x;
      const a = 0.25, b = 1.95;
      let xh = a, xl = a;
      for (let i = 0; i <= 400; i++) {
        const x = a + (b - a) * i / 400;
        if (f(x) > f(xh)) xh = x;
        if (f(x) < f(xl)) xl = x;
      }
      const p = Fig.plot({ w: 330, h: 200, xr: [0, 2.2], yr: [0, 3], padT: 16, padB: 26,
        padL: 30, padR: 14 });
      p.axes({ ticks: [{ x: a, t: 'a' }, { x: b, t: 'b' }] });
      const cur = p.path(p.curve(f, a, b), 'curve');
      [[xh, 'good'], [xl, 'bad']].forEach(function (pair, i) {
        const x = pair[0];
        p.line(0, f(x), x, f(x), 'guide');
        p.line(x, 0, x, f(x), 'guide');
        const d = p.dot(x, f(x), pair[1], 5);
        d.classList.add('fade-in');
        d.style.animationDelay = (700 + i * 240) + 'ms';
      });
      p.label(0.24, f(xh) + 0.17, 'max f(x*)', 'lbl', 'start');
      p.label(0.24, f(xl) - 0.28, 'min f(x⁎)', 'lbl', 'start');
      p.dot(a, f(a), '', 3.4);
      p.dot(b, f(b), '', 3.4);
      api.body.appendChild(p.svg);
      p.draw(cur);
      p.svg.setAttribute('aria-label',
        'A continuous curve on a closed interval with its maximum and minimum points marked.');
    }
  },

  /* ── §5.3 the same theorem with the hypothesis removed ────────────────── */
  'fig.no-max': {
    title: 'drop “closed” and the maximum goes',
    caption: '$f(x)=1/x$ on $(0,1]$ is continuous, attains its minimum at $x=1$, and has no ' +
      'maximum at all: $f(1/n)=n$. Nothing is contradicted — the theorem simply never applied.',
    build(api) {
      const p = Fig.plot({ w: 330, h: 185, xr: [0, 1.2], yr: [0, 6], padT: 18, padB: 26,
        padL: 30, padR: 14 });
      p.axes({ ticks: [{ x: 1, t: '1' }] });
      const cur = p.path(p.curve(x => (x > 0.14 ? 1 / x : NaN), 0.14, 1.2), 'curve');
      p.dot(1, 1, 'good', 4.6);
      p.label(1.06, 1.2, 'min = 1', 'lbl', 'start');
      p.add(Fig.svg('circle', { cx: p.X(0.167), cy: p.Y(6), r: 4.4, class: 'pt open' }));

      const arrow = Fig.svg('g', { class: 'rise-y' });
      arrow.style.setProperty('--dy', '18px');
      arrow.appendChild(Fig.svg('path', { class: 'hot',
        d: 'M' + p.X(0.09) + ' ' + p.Y(2.2) + ' L' + p.X(0.09) + ' ' + p.Y(5.4) +
           ' M' + (p.X(0.09) - 4) + ' ' + (p.Y(5.4) + 6) + ' L' + p.X(0.09) + ' ' + p.Y(5.4) +
           ' L' + (p.X(0.09) + 4) + ' ' + (p.Y(5.4) + 6) }));
      p.add(arrow);
      p.label(0.33, 5.2, 'no maximum', 'lbl', 'start');
      api.body.appendChild(p.svg);
      p.draw(cur);
      p.svg.setAttribute('aria-label',
        'One over x on the half-open interval, escaping upward near zero with its minimum at x equals one.');
    }
  },

  /* ── §5.3 IVT, on the cubic the questions use ─────────────────────────── */
  'fig.ivt': {
    title: 'a sign change forces a crossing',
    caption: '$p(x)=x^3-3x+1$ has $p(0)=1>0$ and $p(1)=-1<0$, so the level $0$ is crossed ' +
      'somewhere inside. The theorem gives <i>at least one</i> $c$; that it is exactly one here ' +
      'comes from $p\' &lt; 0$ on $(0,1)$, not from the IVT.',
    build(api) {
      const p3 = x => x * x * x - 3 * x + 1;
      const root = 0.34729636;
      const p = Fig.plot({ w: 330, h: 195, xr: [-0.06, 1.12], yr: [-1.35, 1.35], padT: 16,
        padB: 26, padL: 30, padR: 16 });
      p.axes({ y0: 0, ticks: [{ x: 0, t: '0' }, { x: 1, t: '1' }] });
      const cur = p.path(p.curve(p3, -0.06, 1.12), 'curve');
      p.dot(0, 1, 'good', 4.4);
      p.dot(1, -1, 'bad', 4.4);
      p.label(0.08, 1.16, 'p(0) = 1', 'lbl', 'start');
      p.label(0.94, -1.2, 'p(1) = −1', 'lbl', 'end');

      const sweep = Fig.svg('line', { x1: p.X(-0.06), y1: p.Y(0), x2: p.X(1.12), y2: p.Y(0),
        class: 'hot' });
      p.add(sweep);
      const rd = p.dot(root, 0, '', 5.2);
      rd.classList.add('fade-in');
      rd.style.animationDelay = '900ms';
      p.line(root, 0, root, -0.55, 'guide');
      p.label(root, -0.72, 'c ≈ 0.35', 'lbl');
      api.body.appendChild(p.svg);
      p.draw(cur);
      p.draw(sweep);
      p.svg.setAttribute('aria-label',
        'The cubic x cubed minus three x plus one crossing zero between zero and one.');
    }
  },

  /* ── §5.4 uniform continuity, interactive ─────────────────────────────── */
  'fig.unif': {
    title: 'one δ cannot serve the whole set',
    interactive: true,
    caption: 'Slide the δ-window along $f(x)=1/x$ on $(0,1]$. Its width never changes; the ' +
      'height of the image band does — without limit as you approach $0$. That is precisely ' +
      'the failure of uniform continuity.',
    build(api) {
      const f = x => 1 / x, d = 0.05;
      const p = Fig.plot({ w: 330, h: 215, xr: [0, 1.1], yr: [0, 12], padT: 16, padB: 26,
        padL: 32, padR: 14 });
      const imgBand = p.rect(0, 1, 1.1, 2, 'band warm');
      const winBand = p.rect(0.5 - d, 0, 0.5 + d, 12, 'band');
      p.axes({ ticks: [{ x: 1, t: '1' }] });
      const cur = p.path(p.curve(x => (x > 0.083 ? f(x) : NaN), 0.083, 1.1), 'curve');
      const lo = p.dot(0.45, f(0.45), '', 3.8);
      const hi = p.dot(0.55, f(0.55), '', 3.8);
      const gap = Fig.svg('text', { class: 'lbl', 'text-anchor': 'start', text: '' });
      p.add(gap);
      api.body.appendChild(p.svg);
      p.draw(cur);

      function update(u) {
        const a = Math.max(0.085, u - d), b = Math.min(1.1, u + d);
        const ya = f(b), yb = Math.min(12, f(a));
        winBand.setAttribute('x', p.X(a));
        winBand.setAttribute('width', p.X(b) - p.X(a));
        imgBand.setAttribute('y', p.Y(yb));
        imgBand.setAttribute('height', Math.abs(p.Y(ya) - p.Y(yb)));
        lo.setAttribute('cx', p.X(a)); lo.setAttribute('cy', p.Y(Math.min(12, f(a))));
        hi.setAttribute('cx', p.X(b)); hi.setAttribute('cy', p.Y(f(b)));
        gap.setAttribute('x', p.X(0.3));
        gap.setAttribute('y', p.Y(Math.min(11.4, yb)) - 6);
        gap.textContent = 'image height ≈ ' + (Math.min(12, f(a)) - f(b)).toFixed(2);
      }
      api.control({
        min: 0.1, max: 0.95, step: 0.01, value: 0.5, label: 'window position',
        format: v => 'window at x = ' + v.toFixed(2) + ',  width 2δ = ' + (2 * d).toFixed(2),
        onInput: update
      });
      update(0.5);
      p.svg.setAttribute('aria-label',
        'A fixed-width window sliding along one over x; the image band grows without bound near zero.');
    }
  },

  /* ── §5.4 why compactness rescues it ─────────────────────────────────── */
  'fig.heine': {
    title: 'on a closed interval there is a worst case',
    caption: 'Equal δ-windows along $\\sqrt{x}$ on $[0,1]$. The image bands differ, the worst ' +
      'one sits at $0$ — and because the interval is closed and bounded the worst one <i>exists</i>. ' +
      'Take δ for that window and it serves everywhere: continuity becomes uniform.',
    build(api) {
      const f = Math.sqrt;
      const p = Fig.plot({ w: 330, h: 190, xr: [0, 1.06], yr: [0, 1.15], padT: 16, padB: 26,
        padL: 30, padR: 14 });
      p.axes({ ticks: [{ x: 0, t: '0' }, { x: 1, t: '1' }] });
      const w = 1 / 6;
      for (let i = 0; i < 6; i++) {
        const a = i * w, b = a + w;
        const g = Fig.svg('g', { class: 'fade-in' });
        g.style.animationDelay = (200 + i * 130) + 'ms';
        g.appendChild(Fig.svg('rect', {
          x: p.X(a), y: p.Y(f(b)), width: p.X(b) - p.X(a),
          height: Math.abs(p.Y(f(a)) - p.Y(f(b))),
          class: i === 0 ? 'band warm' : 'band good'
        }));
        g.appendChild(Fig.svg('line', { x1: p.X(a), y1: p.Y(0), x2: p.X(a), y2: p.Y(f(b)),
          class: 'guide' }));
        p.add(g);
      }
      const cur = p.path(p.curve(f, 0, 1.02), 'curve');
      p.label(0.2, 0.52, 'worst window', 'lbl', 'start');
      p.line(0.185, 0.5, 0.09, 0.42, 'guide');
      api.body.appendChild(p.svg);
      p.draw(cur);
      p.svg.setAttribute('aria-label',
        'Equal-width windows under the square-root curve, the tallest image band at zero.');
    }
  },

  /* ── §6.2 MVT, on the interval the questions use ─────────────────────── */
  'fig.mvt': {
    title: 'the tangent parallel to the chord',
    caption: 'For $f(x)=x^2$ on $[1,3]$ the chord has slope $\\frac{9-1}{3-1}=4$, and $f\'(c)=2c=4$ ' +
      'puts the parallel tangent at $c=2$. The theorem promises such a $c$ exists; finding it is ' +
      'just solving that equation.',
    build(api) {
      const f = x => x * x, a = 1, b = 3, c = 2;
      const p = Fig.plot({ w: 330, h: 205, xr: [0.6, 3.5], yr: [0, 11], padT: 16, padB: 26,
        padL: 32, padR: 14 });
      p.axes({ ticks: [{ x: 1, t: 'a=1' }, { x: 2, t: 'c=2' }, { x: 3, t: 'b=3' }] });
      const cur = p.path(p.curve(f, 0.6, 3.5), 'curve');

      p.add(Fig.svg('line', { x1: p.X(a), y1: p.Y(f(a)), x2: p.X(b), y2: p.Y(f(b)), class: 'hot' }));
      p.label(1.35, 6.4, 'chord, slope 4', 'lbl', 'start');

      /* tangent y = 4x - 4, slid into place */
      const g = Fig.svg('g', { class: 'slide-x' });
      g.style.setProperty('--dx', (p.X(1.1) - p.X(2)) + 'px');
      g.appendChild(Fig.svg('line', { x1: p.X(0.9), y1: p.Y(4 * 0.9 - 4),
        x2: p.X(3.2), y2: p.Y(4 * 3.2 - 4), class: 'curve', 'stroke-dasharray': '5 4' }));
      p.add(g);
      p.dot(a, f(a), '', 4); p.dot(b, f(b), '', 4);
      const cd = p.dot(c, f(c), 'good', 5.2);
      cd.classList.add('fade-in'); cd.style.animationDelay = '1.2s';
      p.label(2.42, 3.1, "f′(c) = 4", 'lbl', 'start');
      api.body.appendChild(p.svg);
      p.draw(cur);
      p.svg.setAttribute('aria-label',
        'The parabola x squared with the chord from one to three and the parallel tangent at c equals two.');
    }
  }
};

/* Concept → figures, while the pool is mock. Validated concepts should carry
   their own `figs: [...]` and this map can then be deleted. */
const FIGMAP = {
  'm.2.3.2': ['fig.sup-inf'],
  'm.2.3.6': ['fig.gap'],
  'm.3.4.8': ['fig.bw'],
  'm.5.1.1': ['fig.eps-delta'],
  'm.5.1.3': ['fig.seq-crit'],
  'm.5.3.4': ['fig.maxmin', 'fig.no-max'],
  'm.5.3.7': ['fig.ivt'],
  'm.5.4.1': ['fig.unif'],
  'm.5.4.3': ['fig.heine'],
  'm.6.2.4': ['fig.mvt']
};

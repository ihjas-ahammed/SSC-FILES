/* ══════════════════════════════════════════════════════════════════════════
   Pace — sections completed per day, and where that pace is heading.

   A SECTION IS COMPLETE when every note in it has been read (level 1, the red
   tick). It became complete on the day its LAST note was ticked. That is
   derived from the tick timestamps the store already keeps, so the graph needs
   no log of its own, works on progress made before it existed, and merges
   across devices for free. Un-ticking a note takes its section back out.

   THE PREDICTION is ordinary least squares on the cumulative curve. With day
   index t and cumulative sections C over the trailing window, the line
   C = a + b·t minimises Σ(C − a − b·t)², which is the normal-equation system

        [ n    Σt  ] [a]   [ ΣC  ]
        [ Σt   Σt² ] [b] = [ ΣtC ]

   solved here by Gaussian elimination with partial pivoting. `b` is sections
   per day; the finish day is where the line reaches the syllabus total.
   R² says how straight the recent past actually was, so a jumpy fortnight
   reads as a weak forecast instead of a confident one.
   ══════════════════════════════════════════════════════════════════════════ */

const Pace = (function () {

  const el = DOM.el, S = DOM.svg;
  const DAY = 86400e3;
  const LABEL = { 1: 'Reading', 2: 'Proofs', 3: 'Textbook questions', 4: 'PYQ', 5: 'Recall and fix' };

  /* ── dates, in the learner's own day ─────────────────────────────────── */
  const dayIndex = ms => {
    const d = new Date(ms);
    return Math.floor(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY);
  };
  const dayDate = i => new Date(i * DAY + DAY / 2);   /* UTC noon: no DST edge */
  const fmtDay = i => dayDate(i).toLocaleDateString(undefined, { day: 'numeric', month: 'short', timeZone: 'UTC' });

  /* ── linear algebra ──────────────────────────────────────────────────── */
  /* solve A x = b for a small dense system; null when singular */
  function solve(A, b) {
    const n = b.length;
    const M = A.map((row, i) => row.slice().concat([b[i]]));
    for (let c = 0; c < n; c += 1) {
      let piv = c;
      for (let r = c + 1; r < n; r += 1) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
      if (Math.abs(M[piv][c]) < 1e-12) return null;
      const t = M[c]; M[c] = M[piv]; M[piv] = t;
      for (let r = c + 1; r < n; r += 1) {
        const f = M[r][c] / M[c][c];
        for (let k = c; k <= n; k += 1) M[r][k] -= f * M[c][k];
      }
    }
    const x = new Array(n);
    for (let r = n - 1; r >= 0; r -= 1) {
      let s = M[r][n];
      for (let k = r + 1; k < n; k += 1) s -= M[r][k] * x[k];
      x[r] = s / M[r][r];
    }
    return x;
  }

  /* least squares C ≈ a + b·t through the points; returns {a, b, r2} */
  function fitLine(ts, cs) {
    const n = ts.length;
    if (n < 2) return null;
    let st = 0, stt = 0, sc = 0, stc = 0;
    for (let i = 0; i < n; i += 1) {
      st += ts[i]; stt += ts[i] * ts[i]; sc += cs[i]; stc += ts[i] * cs[i];
    }
    const beta = solve([[n, st], [st, stt]], [sc, stc]);
    if (!beta) return null;
    const mean = sc / n;
    let ssRes = 0, ssTot = 0;
    for (let i = 0; i < n; i += 1) {
      const e = cs[i] - (beta[0] + beta[1] * ts[i]);
      ssRes += e * e;
      ssTot += (cs[i] - mean) * (cs[i] - mean);
    }
    return { a: beta[0], b: beta[1], r2: ssTot > 1e-12 ? Math.max(0, 1 - ssRes / ssTot) : 0 };
  }

  /* ── the data: when did each section become complete ─────────────────── */
  function completions(stage) {
    stage = stage || 1;
    const out = [];
    Pool.sections().forEach(function (s) {
      const ids = s.concepts.filter(c => !Pool.isExt(c)).map(c => c.id);
      if (!ids.length) return;
      const at = Progress.stageAt(s.sec, stage);
      if (at > 0) out.push({ sec: s.sec, at: at });
    });
    return out.sort((x, y) => x.at - y.at);
  }

  function totalSections() {
    return Pool.sections().filter(s => !Pool.isExtSec(s.sec)
      && (s.concepts.some(c => !Pool.isExt(c)) || (s.module && s.module.pending))).length;
  }

  /* Everything the chart and the caption need, for the last `span` days. */
  function model(span, stage) {
    stage = stage || 1;
    const done = completions(stage);
    const total = totalSections();
    const today = dayIndex(Date.now());
    const first = done.length ? dayIndex(done[0].at) : today;
    const start = Math.max(today - span + 1, Math.min(first, today));
    const days = [];
    for (let d = start; d <= today; d += 1) days.push({ d: d, n: 0, cum: 0 });
    const before = done.filter(x => dayIndex(x.at) < start).length;
    done.forEach(function (x) {
      const i = dayIndex(x.at) - start;
      if (i >= 0 && i < days.length) days[i].n += 1;
    });
    let run = before;
    days.forEach(function (x) { run += x.n; x.cum = run; });

    /* fit the trailing fortnight (or what exists of it) */
    const win = days.slice(-14);
    const fit = win.length >= 3 ? fitLine(win.map(x => x.d - today), win.map(x => x.cum)) : null;
    const left = total - run;
    let eta = null;
    if (fit && fit.b > 0.02 && left > 0) eta = today + Math.ceil((total - fit.a) / fit.b);
    if (eta != null && eta < today) eta = today;

    return { days: days, total: total, done: run, left: left, fit: fit, today: today, eta: eta,
      stage: stage, count: done.length, avg7: days.slice(-7).reduce((s, x) => s + x.n, 0) / Math.min(7, days.length) };
  }

  /* ── drawing ─────────────────────────────────────────────────────────── */
  const W = 480, H = 230, PL = 26, PR = 30, PT = 12, PB = 28;

  function chart(m) {
    const n = m.days.length;
    const horizon = m.fit && m.fit.b > 0.02 && m.left > 0
      ? Math.max(3, Math.min(14, (m.eta != null ? m.eta - m.today : 7) + 1)) : 0;
    const cols = n + horizon;  /* forecast columns sit after today */
    const iw = W - PL - PR, ih = H - PT - PB;
    const slot = iw / cols;
    const barMax = Math.max(2, Math.max.apply(null, m.days.map(x => x.n)));
    const yb = v => PT + ih - (v / barMax) * ih;
    const yc = v => PT + ih - (Math.min(v, m.total) / Math.max(1, m.total)) * ih;
    const xc = i => PL + (i + 0.5) * slot;

    const svg = S('svg', { viewBox: '0 0 ' + W + ' ' + H, class: 'pace-svg', role: 'img',
      'aria-label': 'Sections completed per day, with a least-squares forecast' });

    /* gridlines: left axis is per-day, right axis is the cumulative share */
    [0, 0.5, 1].forEach(function (f) {
      const y = PT + ih - f * ih;
      svg.appendChild(S('line', { x1: PL, x2: W - PR, y1: y, y2: y, class: 'pace-grid' }));
      svg.appendChild(S('text', { x: PL - 6, y: y + 3, class: 'pace-ax', 'text-anchor': 'end',
        text: String(Math.round(f * barMax * 10) / 10) }));
      svg.appendChild(S('text', { x: W - PR + 6, y: y + 3, class: 'pace-ax pace-ax-c',
        text: String(Math.round(f * m.total)) }));
    });

    /* forecast band first so the real data draws over it */
    if (horizon && m.fit) {
      const pts = [];
      for (let k = 0; k <= horizon; k += 1) {
        const v = Math.max(0, Math.min(m.total, m.fit.a + m.fit.b * k));
        pts.push(xc(n - 1 + k).toFixed(1) + ',' + yc(v).toFixed(1));
      }
      svg.appendChild(S('polyline', { points: pts.join(' '), class: 'pace-pred' }));
      svg.appendChild(S('line', { x1: xc(n - 1) + slot / 2, x2: xc(n - 1) + slot / 2, y1: PT, y2: PT + ih,
        class: 'pace-now' }));
    }

    m.days.forEach(function (x, i) {
      if (!x.n) return;
      svg.appendChild(S('rect', { x: xc(i) - slot * 0.32, width: slot * 0.64, y: yb(x.n),
        height: PT + ih - yb(x.n), rx: 2, class: 'pace-bar' }, [
          S('title', { text: fmtDay(x.d) + ': ' + x.n + ' ' + DOM.plural(x.n, 'section') })]));
    });

    svg.appendChild(S('polyline', {
      points: m.days.map((x, i) => xc(i).toFixed(1) + ',' + yc(x.cum).toFixed(1)).join(' '),
      class: 'pace-cum' }));
    const lastDay = m.days[n - 1];
    svg.appendChild(S('circle', { cx: xc(n - 1), cy: yc(lastDay.cum), r: 3.4, class: 'pace-dot' }));

    /* the trend the fit sees, over the fitted window */
    if (m.fit && n >= 3) {
      const w0 = Math.max(0, n - 14);
      const v = i => Math.max(0, Math.min(m.total, m.fit.a + m.fit.b * (m.days[i].d - m.today)));
      svg.appendChild(S('line', { x1: xc(w0), y1: yc(v(w0)), x2: xc(n - 1), y2: yc(v(n - 1)),
        class: 'pace-fit' }));
    }

    /* x labels: first, middle, last, and the forecast end */
    const ticks = [[0, m.days[0].d], [Math.floor((n - 1) / 2), m.days[Math.floor((n - 1) / 2)].d],
      [n - 1, m.today]];
    if (horizon) ticks.push([n + horizon - 1, m.today + horizon]);
    const seen = {};
    ticks.forEach(function (t, k) {
      if (seen[t[0]]) return;
      seen[t[0]] = true;
      svg.appendChild(S('text', { x: xc(t[0]), y: H - 10, class: 'pace-ax',
        'text-anchor': k === 0 ? 'start' : (t[0] === n + horizon - 1 && horizon ? 'end' : 'middle'),
        text: t[1] === m.today ? 'today' : fmtDay(t[1]) }));
    });
    return svg;
  }

  function caption(m) {
    if (!m.count) {
      return 'Complete a section at ' + LABEL[m.stage] + ' and its day appears here.'
        + (m.stage === 4 ? ' Sections without mapped past papers remain pending.' : '')
        + (m.stage === 5 ? ' Use Recall and correct every missed item to Stated it.' : '');
    }
    if (m.left <= 0) return 'Every section in the syllabus is complete.';
    if (!m.fit) return 'A few more days of work and this can start forecasting.';
    if (m.eta == null) {
      return 'No steady pace in the last fortnight yet, so there is nothing honest to forecast.';
    }
    const gap = m.eta - m.today;
    const when = gap <= 0 ? 'today' : gap === 1 ? 'tomorrow'
      : (fmtDay(m.eta) + ' (in ' + gap + ' days)');
    return 'At ' + (Math.round(m.fit.b * 100) / 100) + ' sections a day, the last of the '
      + m.left + ' still to go lands ' + when + '.';
  }

  function confidence(m) {
    if (!m.fit || m.eta == null) return null;
    const r = m.fit.r2;
    return r >= 0.9 ? 'steady' : r >= 0.7 ? 'fairly steady' : 'uneven';
  }

  /* the card Today drops in */
  function card() {
    let stage = Number(Store.pref('paceLevel', 1));
    if (![1, 2, 3, 4, 5].includes(stage)) stage = 1;
    let span = Store.pref('paceSpan', 14);
    if ([14, 30, 90].indexOf(span) < 0) span = 14;
    const host = el('div', { class: 'card pace' });

    function paint() {
      DOM.clear(host);
      const m = model(span, stage);
      const conf = confidence(m);
      DOM.add(host, [
        el('div', { class: 'spread' }, [
          el('div', {}, [
            el('div', { class: 'kicker', text: 'LR · ' + LABEL[stage] + ' · sections per day' }),
            el('div', { class: 'pace-big' }, [
              el('b', { text: m.done + '/' + m.total }),
              el('span', { text: ' sections complete' })
            ])
          ]),
          el('div', { class: 'seg', role: 'group', 'aria-label': 'Range' },
            [14, 30, 90].map(v => el('button', { type: 'button', class: v === span ? 'on' : '',
              text: v + 'd', on: { click: function () { span = Store.setPref('paceSpan', v); paint(); } } })))
        ]),
        el('div', { class: 'pace-levels seg', role: 'group', 'aria-label': 'Learning level' },
          [1, 2, 3, 4, 5].map(v => el('button', { type: 'button', class: v === stage ? 'on' : '',
            'aria-pressed': String(v === stage), text: 'Lv' + v + ' · ' + LABEL[v],
            on: { click: function () { stage = Store.setPref('paceLevel', v); paint(); } } }))),
        m.days.length ? el('div', { class: 'pace-plot' }, [chart(m)]) : null,
        el('div', { class: 'pace-key small muted' }, [
          el('span', {}, [el('i', { class: 'k-bar' }), ' per day']),
          el('span', {}, [el('i', { class: 'k-cum' }), ' cumulative']),
          el('span', {}, [el('i', { class: 'k-fit' }), ' least-squares fit']),
          m.eta != null ? el('span', {}, [el('i', { class: 'k-pred' }), ' forecast']) : null
        ]),
        el('p', { class: 'pace-cap', text: caption(m) }),
        m.count ? el('p', { class: 'small muted', style: { margin: '4px 0 0' },
          text: 'Last 7 days: ' + (Math.round(m.avg7 * 10) / 10) + ' a day'
            + (conf ? ' · trend is ' + conf + ' (R² ' + (Math.round(m.fit.r2 * 100) / 100) + ')' : '') }) : null
      ]);
    }
    paint();
    return host;
  }

  return { card, model, fitLine, solve, completions };
})();

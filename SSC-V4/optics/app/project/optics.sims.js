/* ══════════════════════════════════════════════════════════════════════════
   Optics — understanding simulations.

   A diagram shows one moment of an argument. A simulation lets the student move
   the quantities and SEE the law hold — and then proves they can use it. Every
   simulation has three levels, each asking more of the student than the last:

     Watch     the parameter sweeps by itself; a sentence says what to notice.
     Explore   the student drags the sliders; a live readout shows the numbers
               and checks the law (lhs = rhs) at that setting.
     Predict   three tasks of rising difficulty. The student commits to an
               answer BEFORE the simulation shows it:
                 level 1  recall    read a value off the scene
                 level 2  apply     use the law in a fresh setting
                 level 3  transfer  a changed situation the note never showed
               A task is either numeric (type a number) or a setting (drag a
               slider to the value that makes the law true).

   What the student has done is recorded per simulation as a preference
   `sim:<id>` = { w: watched, e: explored, t: { '<n>': 1|0 } }. Only the FIRST
   attempt at a task is kept (later attempts are allowed, never recorded), the
   same rule as first-try recall, because the first attempt is the only honest
   measurement. `OSIM.summary()` rolls this up for the Today card.

   A simulation is defined in optics.sims.m*.js with OSIM.add(id, def):

     def = { title, blurb, w?, h?, sc?, ox?, oy?,
             params: [{ k, label, min, max, step, value, fmt(v) }],
             draw(g, p),               the scene, on an OFIG.Canvas
             read(p)  -> [[label, text], …]      the live numbers
             law(p)   -> { lhs, rhs, text }      the identity, checked live
             watch:   { k, from, to },           the parameter Watch sweeps
             tasks: [ { lv, type:'num'|'set', q, setup?, ans(p)|goal(p), key?,
                        tol, unit?, why(p, a) } ] }

   This file only REGISTERS; `OSIM.audit()` (run in a browser by
   tools/audit_optics.js) draws every simulation at its extremes, checks each
   law at random settings, and evaluates every task's answer.
   ══════════════════════════════════════════════════════════════════════════ */

const OSIM = (function () {

  const reg = {};
  const LEVEL = { 1: 'Recall', 2: 'Apply', 3: 'Transfer' };
  const add = (id, def) => { reg[id] = def; def.id = id; };
  const ids = () => Object.keys(reg);
  const get = id => reg[id] || null;

  /* ── what the student has done ───────────────────────────────────────── */
  const rec = id => Store.pref('sim:' + id, null) || { w: 0, e: 0, t: {} };
  function mark(id, patch) {
    const r = JSON.parse(JSON.stringify(rec(id)));
    if (patch.w) r.w = 1;
    if (patch.e) r.e = 1;
    if (patch.t) for (const k in patch.t) if (!(k in r.t)) r.t[k] = patch.t[k];      /* first attempt only */
    Store.setPref('sim:' + id, r);
    return r;
  }

  function summary() {
    const out = { sims: 0, watched: 0, explored: 0, tasks: 0, tried: 0, right: 0, by: { 1: [0, 0, 0], 2: [0, 0, 0], 3: [0, 0, 0] } };
    ids().forEach(function (id) {
      const d = reg[id], r = rec(id);
      out.sims += 1; out.watched += r.w ? 1 : 0; out.explored += r.e ? 1 : 0;
      (d.tasks || []).forEach(function (t, i) {
        const lv = t.lv || 1;
        out.tasks += 1; out.by[lv][0] += 1;
        if (String(i) in r.t) { out.tried += 1; out.by[lv][1] += 1; if (r.t[i]) { out.right += 1; out.by[lv][2] += 1; } }
      });
    });
    return out;
  }

  /* ── numbers ─────────────────────────────────────────────────────────── */
  const fmt = (v, dp) => (Math.abs(v) >= 1e4 || (Math.abs(v) < 1e-2 && v !== 0)) ? v.toExponential(2) : String(Math.round(v * Math.pow(10, dp == null ? 2 : dp)) / Math.pow(10, dp == null ? 2 : dp));
  const defaults = def => { const p = {}; def.params.forEach(q => { p[q.k] = q.value; }); return p; };
  const within = (val, target, tol) => Math.abs(val - target) <= (tol.abs != null ? tol.abs : Math.abs(target) * (tol.rel != null ? tol.rel : 0.03));

  /* ── the panel ───────────────────────────────────────────────────────── */
  function panel(id) {
    const def = reg[id];
    if (!def) return null;
    const el = DOM.el;
    const p = defaults(def);
    let mode = 'watch', task = 0, moves = 0, raf = 0, t0 = 0, playing = true, watchedFor = 0, locked = {};

    const host = el('section', { class: 'card osim', 'data-sim': id });
    const stage = el('div', { class: 'osim-stage ofig' });
    const ctl = el('div', { class: 'osim-ctl' });
    const info = el('div', { class: 'osim-info' });
    const body = el('div', { class: 'osim-body' });
    const tabs = el('div', { class: 'seg osim-tabs', role: 'tablist' });
    const badge = el('span', { class: 'badge', text: '' });

    function redraw() {
      DOM.clear(stage);
      const g = OFIG.Canvas({ w: def.w, h: def.h, sc: def.sc, ox: def.ox, oy: def.oy, alt: def.title });
      def.draw(g, p, { mode: mode, task: mode === 'predict' ? def.tasks[task] : null });
      stage.appendChild(g.svg);
      DOM.clear(info);
      const rd = def.read ? def.read(p) : [];
      const chips = el('div', { class: 'osim-chips' }, rd.map(r => el('div', { class: 'osim-chip' }, [el('span', { text: r[0] }), el('b', { text: r[1] })])));
      info.appendChild(chips);
      if (def.law) {
        const L = def.law(p), ok = Math.abs(L.lhs - L.rhs) <= 1e-6 + 2e-3 * Math.max(Math.abs(L.lhs), Math.abs(L.rhs));
        info.appendChild(el('div', { class: 'osim-law' + (ok ? ' ok' : '') }, [DOM.mi(ok ? 'check_circle' : 'balance', 'xs'), el('span', { text: ' ' + L.text })]));
      }
      Tex.typeset && info.querySelector('.osim-law') && 0;
    }

    function paintSliders(active) {
      DOM.clear(ctl);
      def.params.forEach(function (q) {
        const on = active && !locked[q.k];
        const input = el('input', { type: 'range', min: q.min, max: q.max, step: q.step, value: p[q.k], 'aria-label': q.label, disabled: !on });
        const out = el('output', { text: (q.fmt || fmt)(p[q.k]) });
        input.addEventListener('input', function () {
          p[q.k] = Number(input.value); out.textContent = (q.fmt || fmt)(p[q.k]);
          moves += 1; if (mode === 'explore' && moves === 4) { mark(id, { e: 1 }); paintBadge(); }
          redraw();
        });
        ctl.appendChild(el('label', { class: 'osim-row' + (on ? '' : ' off') }, [el('span', { text: q.label }), input, out]));
      });
    }

    function stopWatch() { if (raf) cancelAnimationFrame(raf); raf = 0; }
    function startWatch() {
      stopWatch(); t0 = performance.now() - watchedFor * 1000;
      const w = def.watch || { k: def.params[0].k, from: def.params[0].min, to: def.params[0].max };
      const q = def.params.filter(x => x.k === w.k)[0];
      const step = function (now) {
        if (!host.isConnected && now - t0 > 1500) { stopWatch(); return; }
        if (mode !== 'watch') return;
        if (playing && !document.hidden) {
          watchedFor = (now - t0) / 1000;
          const ph = 0.5 - 0.5 * Math.cos(watchedFor * 2 * Math.PI / 7);
          p[w.k] = w.from + (w.to - w.from) * ph;
          if (q && q.step) p[w.k] = Math.round(p[w.k] / q.step) * q.step;
          redraw();
          const inputs = ctl.querySelectorAll('input'); def.params.forEach((qq, i) => { if (inputs[i]) { inputs[i].value = p[qq.k]; ctl.querySelectorAll('output')[i].textContent = (qq.fmt || fmt)(p[qq.k]); } });
          if (watchedFor > 6 && !rec(id).w) { mark(id, { w: 1 }); paintBadge(); }
        }
        raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }

    function paintBadge() {
      const r = rec(id), tk = Object.keys(r.t).length, ok = Object.keys(r.t).filter(k => r.t[k]).length;
      badge.textContent = (r.w ? '◉' : '○') + ' watch · ' + (r.e ? '◉' : '○') + ' explore · ' + ok + '/' + def.tasks.length + ' predicted first try';
      badge.className = 'badge' + (ok === def.tasks.length ? ' ok' : '');
    }

    /* ── Predict: one task at a time ───────────────────────────────────── */
    function paintTask() {
      DOM.clear(body);
      const T = def.tasks[task], r = rec(id);
      locked = {}; def.params.forEach(q => { locked[q.k] = !(T.type === 'set' && q.k === T.key); });
      Object.assign(p, defaults(def), T.setup || {});
      const levelRow = el('div', { class: 'osim-lv' }, def.tasks.map(function (t, i) {
        const done = String(i) in r.t;
        return el('button', { type: 'button', class: 'chip' + (i === task ? ' on' : '') + (done ? (r.t[i] ? ' good' : ' miss') : ''),
          text: 'L' + (t.lv || 1) + ' ' + LEVEL[t.lv || 1], on: { click: function () { task = i; paintTask(); } } });
      }));
      const verdict = el('div', { class: 'osim-verdict', 'aria-live': 'polite' });
      const answer = el('input', { type: 'text', inputmode: 'decimal', class: 'osim-in', placeholder: 'your answer', 'aria-label': 'your answer' });
      const check = el('button', { type: 'button', class: 'btn primary', text: 'Check' });
      const showMe = el('button', { type: 'button', class: 'btn', text: 'Show me', hidden: true });
      function truth() { return T.type === 'set' ? T.goal(p) : T.ans(p); }
      check.addEventListener('click', function () {
        let ok;
        if (T.type === 'set') ok = within(p[T.key], truth(), T.tol);
        else { const v = parseFloat(String(answer.value).replace(',', '.')); if (!isFinite(v)) { verdict.textContent = 'Type a number first.'; return; } ok = within(v, truth(), T.tol); }
        const first = !(String(task) in rec(id).t);
        if (first) mark(id, { t: { [task]: ok ? 1 : 0 } });
        const a = truth();
        verdict.className = 'osim-verdict ' + (ok ? 'ok' : 'no');
        DOM.clear(verdict);
        DOM.add(verdict, [el('b', { text: ok ? 'Correct' : 'Not quite' }), el('span', { text: (first ? '' : ' · (a later attempt: not recorded)') }),
          el('div', { class: 'prose tight', html: T.why(p, a) })]);
        Tex.typeset(verdict);
        showMe.hidden = false; paintBadge(); levelRow.replaceWith(rebuildLevels());
      });
      showMe.addEventListener('click', function () { if (T.type === 'set') p[T.key] = truth(); paintSliders(true); redraw(); });
      function rebuildLevels() { const n = el('div', { class: 'osim-lv' }, []); def.tasks.forEach(function (t, i) { const done = String(i) in rec(id).t; n.appendChild(el('button', { type: 'button', class: 'chip' + (i === task ? ' on' : '') + (done ? (rec(id).t[i] ? ' good' : ' miss') : ''), text: 'L' + (t.lv || 1) + ' ' + LEVEL[t.lv || 1], on: { click: function () { task = i; paintTask(); } } })); }); return n; }
      DOM.add(body, [levelRow,
        el('div', { class: 'osim-q' }, [el('div', { class: 'kicker', text: 'Level ' + (T.lv || 1) + ' · ' + LEVEL[T.lv || 1] + ' · commit first, then check' }), el('div', { class: 'prose tight', html: T.q })]),
        el('div', { class: 'osim-answer' }, T.type === 'set'
          ? [el('span', { class: 'small muted', text: 'Drag the highlighted slider, then check.' }), check, showMe]
          : [answer, T.unit ? el('span', { class: 'osim-unit', text: T.unit }) : null, check, showMe]),
        verdict]);
      Tex.typeset(body);
      paintSliders(T.type === 'set');
      redraw();
    }

    function setMode(m) {
      mode = m; stopWatch(); DOM.clear(body);
      Array.prototype.forEach.call(tabs.children, b => b.classList.toggle('on', b.dataset.m === m));
      if (m === 'watch') {
        Object.assign(p, defaults(def)); locked = {}; paintSliders(false);
        DOM.add(body, [el('p', { class: 'osim-blurb', html: def.blurb }),
          el('div', { class: 'btn-row' }, [el('button', { type: 'button', class: 'btn', text: 'Pause / play', on: { click: function () { playing = !playing; if (playing) t0 = performance.now() - watchedFor * 1000; } } })])]);
        Tex.typeset(body); playing = true; watchedFor = 0; startWatch();
      } else if (m === 'explore') {
        Object.assign(p, defaults(def)); locked = {}; paintSliders(true); moves = 0;
        DOM.add(body, [el('p', { class: 'osim-blurb', text: 'Drag the sliders. The law is checked at every setting — see whether it ever fails.' })]); redraw();
      } else { task = Math.min(task, def.tasks.length - 1); paintTask(); }
      if (m !== 'watch') redraw();
    }

    ['watch', 'explore', 'predict'].forEach(function (m) {
      tabs.appendChild(el('button', { type: 'button', 'data-m': m, class: m === 'watch' ? 'on' : '', role: 'tab',
        text: { watch: 'Watch', explore: 'Explore', predict: 'Predict' }[m], on: { click: function () { setMode(m); } } }));
    });

    DOM.add(host, [
      el('div', { class: 'spread' }, [el('div', { class: 'kicker', text: 'Try it · ' + def.title }), tabs]),
      stage, info, ctl, body, el('div', { class: 'osim-foot' }, [badge])
    ]);
    paintBadge(); setMode('watch');
    return host;
  }

  /* ── audit: every simulation, at its extremes and at random settings ─── */
  function audit() {
    const problems = [];
    let laws = 0, tasks = 0, draws = 0, rand = (function (s) { return function () { s = (s * 1664525 + 1013904223) % 4294967296; return s / 4294967296; }; })(12345);
    ids().forEach(function (id) {
      const d = reg[id];
      const grid = [defaults(d)];
      [0, 1].forEach(function (e) { const p = defaults(d); d.params.forEach(q => { p[q.k] = e ? q.max : q.min; }); grid.push(p); });
      for (let i = 0; i < 25; i += 1) { const p = defaults(d); d.params.forEach(q => { p[q.k] = q.min + Math.round(rand() * (q.max - q.min) / q.step) * q.step; }); grid.push(p); }
      grid.forEach(function (p, i) {
        try {
          const g = OFIG.Canvas({ w: d.w, h: d.h, sc: d.sc, ox: d.ox, oy: d.oy }); d.draw(g, p, { mode: 'explore' }); draws += 1;
          const bad = Array.prototype.some.call(g.svg.querySelectorAll('*'), n => Array.prototype.some.call(n.attributes, a => /NaN|undefined|Infinity/.test(a.value)));
          if (bad) problems.push(id + ': NaN in the scene at ' + JSON.stringify(p));
          if (i < 3) OFIG.textOutside(g.svg).forEach(t => problems.push(id + ': label ' + t + ' falls outside the frame' + (i === 0 ? '' : ' (extreme setting)')));
          if (d.read) d.read(p).forEach(r => { if (/NaN|undefined/.test(r[1])) problems.push(id + ': readout "' + r[0] + '" is ' + r[1]); });
          if (d.law && i > 2) { const L = d.law(p); laws += 1; if (!(Math.abs(L.lhs - L.rhs) <= 1e-6 + 2e-3 * Math.max(Math.abs(L.lhs), Math.abs(L.rhs)))) problems.push(id + ': law fails, ' + L.lhs + ' vs ' + L.rhs + ' at ' + JSON.stringify(p)); }
        } catch (e) { problems.push(id + ': draw threw ' + e.message); }
      });
      if (!d.tasks || d.tasks.length < 3) problems.push(id + ': needs three Predict tasks');
      const lv = (d.tasks || []).map(t => t.lv);
      if ([1, 2, 3].some(l => lv.indexOf(l) < 0)) problems.push(id + ': tasks do not cover levels 1, 2 and 3');
      (d.tasks || []).forEach(function (T, i) {
        tasks += 1;
        try {
          const p = Object.assign(defaults(d), T.setup || {});
          if (T.type === 'set') {
            const g = T.goal(p), q = d.params.filter(x => x.k === T.key)[0];
            if (!q) problems.push(id + ' task ' + i + ': unknown key ' + T.key);
            else if (!isFinite(g) || g < q.min - 1e-9 || g > q.max + 1e-9) problems.push(id + ' task ' + i + ': goal ' + g + ' outside slider [' + q.min + ',' + q.max + ']');
            else {
              const tol = T.tol.abs != null ? T.tol.abs : 0; const step = q.step;
              if (tol < step * 0.9) problems.push(id + ' task ' + i + ': tolerance ' + tol + ' finer than the slider step ' + step);
              const p2 = Object.assign({}, p); p2[T.key] = g; if (d.law) { const L = d.law(p2); if (Math.abs(L.lhs - L.rhs) > 5e-3 * Math.max(1e-9, Math.abs(L.lhs), Math.abs(L.rhs)) + 0.02 * (T.tol.abs || 0)) problems.push(id + ' task ' + i + ': the law does not hold at the goal (' + L.lhs + ' vs ' + L.rhs + ')'); }
            }
          } else {
            const a = T.ans(p); if (!isFinite(a)) problems.push(id + ' task ' + i + ': answer is ' + a);
          }
          const why = T.why(p, T.type === 'set' ? T.goal(p) : T.ans(p)); if (/NaN|undefined/.test(why)) problems.push(id + ' task ' + i + ': explanation has NaN/undefined');
        } catch (e) { problems.push(id + ' task ' + i + ' threw ' + e.message); }
      });
    });
    return { sims: ids().length, draws: draws, laws: laws, tasks: tasks, problems: Array.from(new Set(problems)) };
  }

  /* drawing helpers the simulations share */
  const util = {
    /* a polyline through data points mapped into a plot box; returns the mapping */
    plot(g, box, pts, cls, ymax, ymin) {
      const lo = ymin == null ? 0 : ymin, xs = pts.map(q => q[0]), x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
      const px = x => box.x0 + (x - x0) / (x1 - x0) * (box.x1 - box.x0), py = y => box.y0 + (y - lo) / (ymax - lo) * (box.y1 - box.y0);
      g.line(box.x0, box.y0, box.x1, box.y0, 'k'); g.line(box.x0, box.y0, box.x0, box.y1 + 4, 'k');
      g.poline(pts.map(q => [px(q[0]), py(q[1])]), cls || 'curve');
      return { px: px, py: py };
    },
    /* visible wavelength (nm) to a CSS colour */
    rgb(nm) {
      let r = 0, gg = 0, b = 0;
      if (nm < 440) { r = -(nm - 440) / 60; b = 1; } else if (nm < 490) { gg = (nm - 440) / 50; b = 1; } else if (nm < 510) { gg = 1; b = -(nm - 510) / 20; }
      else if (nm < 580) { r = (nm - 510) / 70; gg = 1; } else if (nm < 645) { r = 1; gg = -(nm - 645) / 65; } else r = 1;
      const f = nm < 420 ? 0.3 + 0.7 * (nm - 380) / 40 : nm > 700 ? 0.3 + 0.7 * (780 - nm) / 80 : 1;
      return 'rgb(' + [r, gg, b].map(v => Math.round(255 * Math.pow(Math.max(0, v) * f, 0.8))).join(',') + ')';
    }
  };

  return { add: add, ids: ids, get: get, panel: panel, summary: summary, audit: audit, rec: rec, LEVEL: LEVEL, fmt: fmt, util: util };
})();

/* the hook flow-library calls after a note's figures: a panel when the concept names a simulation */
PROJECT.hooks.noteSim = function (concept) {
  if (!concept || !concept.sim) return null;
  return OSIM.panel(concept.sim);
};

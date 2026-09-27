/* ══════════════════════════════════════════════════════════════════════════
   The study engine — what the learning research says to do today.

   `Progress` knows levels and the spaced queue; `Store` knows what happened.
   This is the layer that turns those into a plan, and every rule in it has a
   source (see LEARNING_SCIENCE.md at the project root):

     retrieval first     Karpicke & Roediger 2008; Brown, Roediger & McDaniel,
                         "Make It Stick". The plan opens with what is due,
                         never with reading.
     spacing             Ebbinghaus; Cepeda et al. 2006; Leitner boxes are in
                         core.progress.js. `due()` counts them.
     interleaving        Rohrer & Taylor 2007; Rohrer, Dedrick & Stershic 2015.
                         The reel and the drill mix chapters by default.
     deliberate practice Ericsson, "Peak". `weakSpots()` ranks concepts by
                         misses so practice is aimed, not spread.
     calibration         Dunlosky et al. 2013; Koriat & Bjork on the illusion
                         of knowing. `calibration()` compares confidence with
                         outcome.
     error analysis      Metcalfe 2017 on learning from errors; the "mistake
                         notebook" every maths teacher recommends. `mistakes()`
                         aggregates the tags.
     habits and streaks  Clear, "Atomic Habits"; Fogg. Small daily goal, never
                         miss twice, one card counts.
     focused blocks      Cirillo's Pomodoro; Oakley, "A Mind for Numbers" on
                         focused and diffuse modes. `Focus` is the timer.
     exam pacing         The SSLC maths paper: 80 marks, 2 h 30 min writing
                         plus 15 min cool-off. `exam()` counts down and
                         `blueprint()` states the paper.
   ══════════════════════════════════════════════════════════════════════════ */

const Study = (function () {

  const DAY = 24 * 3600e3;

  /* ── daily goal ──────────────────────────────────────────────────────── */
  const GOALS = {
    light:  { reviews: 10, reads: 1, exercises: 1, questions: 3 },
    normal: { reviews: 20, reads: 2, exercises: 2, questions: 6 },
    exam:   { reviews: 40, reads: 3, exercises: 4, questions: 12 }
  };
  const goalKey = () => Store.pref('goal', 'normal');
  const goal = () => GOALS[goalKey()] || GOALS.normal;
  function setGoal(k) { if (GOALS[k]) Store.setPref('goal', k); }

  function todayLog() {
    return Store.day() || {};
  }

  function goalState() {
    const g = goal(), d = todayLog();
    const rows = ['reviews', 'reads', 'exercises', 'questions'].map(function (k) {
      return { key: k, done: Math.min(d[k] || 0, g[k]), raw: d[k] || 0, want: g[k] };
    });
    const met = rows.every(r => r.done >= r.want);
    const pct = Math.round(100 * rows.reduce((a, r) => a + r.done / r.want, 0) / rows.length);
    return { rows: rows, met: met, pct: pct, key: goalKey() };
  }

  /* ── streaks ─────────────────────────────────────────────────────────────
     A day counts when anything at all was done on it. The current streak may
     end today or yesterday: a learner who has not opened the app yet this
     morning has not broken anything. */
  function active(row) {
    if (!row) return false;
    return ['reviews', 'reads', 'exercises', 'questions', 'pyq', 'focus'].some(k => (row[k] || 0) > 0);
  }

  function streak() {
    const days = Store.days();
    const keys = Object.keys(days).filter(k => active(days[k])).sort();
    if (!keys.length) return { current: 0, best: 0, today: false };

    const set = {};
    keys.forEach(k => { set[k] = true; });
    const today = Store.dayKey();
    const yesterday = Store.dayKey(new Date(Date.now() - DAY));

    function runEndingAt(key) {
      let n = 0, d = new Date(key + 'T12:00:00');
      while (set[Store.dayKey(d)]) { n += 1; d = new Date(d.getTime() - DAY); }
      return n;
    }
    const current = set[today] ? runEndingAt(today) : (set[yesterday] ? runEndingAt(yesterday) : 0);

    /* the best run: measure forward from every day that starts one */
    let best = 0;
    keys.forEach(function (k) {
      const prev = Store.dayKey(new Date(new Date(k + 'T12:00:00').getTime() - DAY));
      if (set[prev]) return;
      let n = 0, d = new Date(k + 'T12:00:00');
      while (set[Store.dayKey(d)]) { n += 1; d = new Date(d.getTime() + DAY); }
      best = Math.max(best, n);
    });
    return { current: current, best: Math.max(best, current), today: !!set[today] };
  }

  /* ── what is due ─────────────────────────────────────────────────────── */
  function due() {
    const now = Date.now();
    const all = Progress.reel();
    let dueN = 0, fresh = 0;
    all.forEach(function (x) {
      if (x.due <= now) { dueN += 1; if (!(Store.card(x.id) || {}).first) fresh += 1; }
    });
    return { due: dueN, fresh: fresh, later: all.length - dueN, total: all.length };
  }

  /* ── weak spots ──────────────────────────────────────────────────────────
     Misses are counted per concept from three places: a card's first grade,
     a card's current box (0 means it was missed last time), and a question's
     first verdict. Recent misses weigh more than old ones. */
  function weakSpots(limit) {
    const score = {};
    const now = Date.now();
    const bump = (cid, w) => { if (cid) score[cid] = (score[cid] || 0) + w; };
    const recency = at => at ? Math.max(0.4, 1 - (now - at) / (30 * DAY)) : 0.6;

    Pool.deck().forEach(function (card) {
      const rec = Store.card(card.id);
      if (!rec) return;
      if (rec.first === 'missed') bump(card.cid, 1.0 * recency(rec.firstAt));
      else if (rec.first === 'partly') bump(card.cid, 0.5 * recency(rec.firstAt));
      if (rec.last === 'missed' && rec.tries > 1) bump(card.cid, 1.0 * recency(rec.lastAt));
      if ((rec.box || 0) === 0 && rec.tries > 1) bump(card.cid, 0.5);
    });
    Pool.objective().forEach(function (q) {
      const rec = Store.omr(q.id);
      if (!rec || !rec.first) return;
      const cid = (q.tests || [])[0] || q.concept;
      if (rec.first.verdict === 'wrong') bump(cid, 1.2 * recency(rec.first.at));
      else if (rec.first.verdict === 'partial') bump(cid, 0.5 * recency(rec.first.at));
      if (rec.last && rec.last.verdict === 'wrong' && rec.tries > 1) bump(cid, 0.8 * recency(rec.last.at));
    });
    const errs = Store.errs();
    Object.keys(errs).forEach(function (k) {
      const e = errs[k];
      if (e && e.cid) bump(e.cid, 0.3);
    });

    return Object.keys(score)
      .map(cid => ({ c: Pool.concept(cid), cid: cid, score: score[cid] }))
      .filter(x => x.c && x.score >= 0.75)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit || 6)
      .map(function (x) { x.misses = Math.round(x.score * 10) / 10; return x; });
  }

  const weakIds = () => {
    const out = {};
    weakSpots(40).forEach(x => { out[x.cid] = true; });
    return out;
  };

  /* ── calibration ─────────────────────────────────────────────────────── */
  function calibration() {
    const cal = Store.cal();
    const out = { n: 0, sureRight: 0, sureWrong: 0, unsureRight: 0, unsureWrong: 0, verdict: 'few' };
    Object.keys(cal).forEach(function (k) {
      const r = cal[k];
      if (!r) return;
      out.n += 1;
      const sure = r.c >= 3;
      if (sure && r.ok) out.sureRight += 1;
      else if (sure && !r.ok) out.sureWrong += 1;
      else if (!sure && r.ok) out.unsureRight += 1;
      else out.unsureWrong += 1;
    });
    if (out.n >= 5) {
      const over = out.sureWrong / Math.max(1, out.sureRight + out.sureWrong);
      const under = out.unsureRight / Math.max(1, out.unsureRight + out.unsureWrong);
      out.verdict = over > 0.3 ? 'over' : under > 0.6 ? 'under' : 'good';
    }
    return out;
  }

  /* ── the mistake log, aggregated ─────────────────────────────────────── */
  const WHYS = ['careless', 'formula', 'method', 'misread', 'unknown'];
  function mistakes() {
    const errs = Store.errs();
    const by = {}, byC = {};
    let n = 0;
    WHYS.forEach(w => { by[w] = 0; });
    Object.keys(errs).forEach(function (k) {
      const e = errs[k];
      if (!e || !e.why) return;
      n += 1;
      by[e.why] = (by[e.why] || 0) + 1;
      if (e.cid) byC[e.cid] = (byC[e.cid] || 0) + 1;
    });
    const top = WHYS.map(w => ({ why: w, n: by[w] })).sort((a, b) => b.n - a.n);
    return { n: n, by: by, top: top, concepts: byC };
  }

  /* ── the exam ────────────────────────────────────────────────────────── */
  function defaultExamDate() {
    /* The data may name the exam; otherwise the SSLC paper is in March. */
    const tracks = (typeof TRACKS !== 'undefined' && Array.isArray(TRACKS)) ? TRACKS : [];
    const named = tracks.filter(t => t.required && t.isoDate)[0];
    const now = new Date();
    if (named && new Date(named.isoDate) > now) return named.isoDate;
    const year = now.getMonth() >= 2 ? now.getFullYear() + 1 : now.getFullYear();
    return year + '-03-10';
  }

  function exam() {
    const iso = Store.pref('examDate', '') || defaultExamDate();
    const at = new Date(iso + 'T09:30:00');
    const days = Math.ceil((at.getTime() - Date.now()) / DAY);
    /* how much of Class 10 still has to be read once, spread over the days left */
    const ids = Pool.ids.concepts('m10');
    const left = ids.filter(id => Progress.level(id) < 1).length;
    const perDay = days > 0 ? Math.ceil(left / days * 10) / 10 : left;
    return { iso: iso, at: at, days: days, left: left, perDay: perDay, custom: !!Store.pref('examDate', '') };
  }
  function setExamDate(iso) { Store.setPref('examDate', iso || ''); }

  /* The SSLC mathematics paper, as the learner will meet it. */
  const BLUEPRINT = {
    marks: 80, internal: 20, writingMin: 150, coolOffMin: 15,
    sections: [
      { marks: 2, count: 4 }, { marks: 3, count: 6 }, { marks: 4, count: 11 }, { marks: 5, count: 8 }
    ]
  };
  const blueprint = () => BLUEPRINT;

  /* ── the plan for today ──────────────────────────────────────────────────
     Ordered by what the evidence says pays most: retrieval of what is due,
     then aimed practice on what is weak, then one or two NEW notes, then an
     exercise worked in four steps, then a timed mixed drill, then explaining
     today's note back in your own words. */
  function plan() {
    const d = due();
    const weak = weakSpots(6);
    const g = goal(), log = todayLog();
    const steps = [];

    steps.push({
      kind: 'review', n: d.due, ready: d.due > 0,
      done: (log.reviews || 0) >= g.reviews,
      href: 'recall', count: (log.reviews || 0) + '/' + g.reviews
    });
    if (weak.length) {
      steps.push({ kind: 'weak', n: weak.length, ready: true, done: false, href: 'recall?mode=weak', items: weak });
    }

    const next = Pool.concepts('m10').filter(c => Progress.level(c.id) === 0)[0]
      || Pool.concepts().filter(c => Progress.level(c.id) === 0)[0] || null;
    steps.push({
      kind: 'read', concept: next, ready: !!next,
      done: (log.reads || 0) >= g.reads,
      href: next ? 'note/' + next.id : 'study', count: (log.reads || 0) + '/' + g.reads
    });

    /* the next exercise owed on something already read */
    let ex = null, exTarget = null;
    const written = Pool.written();
    for (let i = 0; i < written.length && !ex; i++) {
      const q = written[i];
      if (Progress.taskDone(q)) continue;
      const c = Pool.concept((q.tests || [])[0] || q.concept);
      if (c && Progress.level(c.id) >= 1) { ex = q; exTarget = c; }
    }
    if (!ex) {
      for (let i = 0; i < written.length && !ex; i++) {
        if (!Progress.taskDone(written[i])) { ex = written[i]; exTarget = Pool.concept((ex.tests || [])[0] || ex.concept); }
      }
    }
    steps.push({
      kind: 'exercise', q: ex, concept: exTarget, ready: !!ex,
      done: (log.exercises || 0) >= g.exercises,
      href: exTarget ? 'note/' + exTarget.id : 'study', count: (log.exercises || 0) + '/' + g.exercises
    });

    const readIds = Pool.ids.allConcepts().filter(id => Progress.level(id) >= 1);
    const readSet = {}; readIds.forEach(id => { readSet[id] = true; });
    const poolQ = Pool.objective().filter(q => (q.tests || []).concat(q.concept ? [q.concept] : []).some(id => readSet[id]));
    steps.push({
      kind: 'drill', n: Math.min(10, poolQ.length), ready: poolQ.length >= 5,
      done: (log.questions || 0) >= g.questions,
      href: 'drill', count: (log.questions || 0) + '/' + g.questions
    });

    const readToday = todayReads()[0] || null;
    steps.push({ kind: 'teach', concept: readToday, ready: !!readToday, done: false,
      href: readToday ? 'note/' + readToday.id + '?teach=1' : 'study' });

    return steps;
  }

  /* concepts marked read today, newest first */
  function todayReads() {
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const snap = Store.snapshot();
    return Object.keys(snap.done || {})
      .filter(id => snap.done[id] >= start.getTime() && Pool.concept(id))
      .sort((a, b) => snap.done[b] - snap.done[a])
      .map(id => Pool.concept(id));
  }

  /* ── the focus timer ─────────────────────────────────────────────────────
     Wall-clock based, so a phone that sleeps still ends the block on time.
     The running block is kept in localStorage directly (not in the record):
     it is a property of this device and this hour, and it must never sync. */
  const Focus = (function () {
    const K = 'sslc.focus';
    const PRESETS = { short: [15, 3], normal: [25, 5], long: [45, 10] };
    let tickT = 0;
    const watchers = [];

    function read() {
      try { return JSON.parse(window.localStorage.getItem(K) || 'null'); } catch (e) { return null; }
    }
    function write(v) {
      try { if (v) window.localStorage.setItem(K, JSON.stringify(v)); else window.localStorage.removeItem(K); }
      catch (e) { /* a private window forgets the timer; nothing else breaks */ }
    }
    const preset = () => PRESETS[Store.pref('focusPreset', 'normal')] || PRESETS.normal;
    function setPreset(k) { if (PRESETS[k]) Store.setPref('focusPreset', k); }

    function state() {
      const s = read();
      if (!s) return { phase: 'idle', left: preset()[0] * 60e3, total: preset()[0] * 60e3 };
      const left = s.end - Date.now();
      if (left <= 0) {
        if (s.phase === 'focus' && !s.credited) {
          s.credited = true; write(s);
          Store.bump('focus', s.min);
          Store.bump('blocks', 1);
        }
        return { phase: s.phase, left: 0, total: s.min * 60e3, over: true, min: s.min };
      }
      return { phase: s.phase, left: left, total: s.min * 60e3, min: s.min };
    }

    function start(phase) {
      const p = preset();
      const min = phase === 'break' ? p[1] : p[0];
      write({ phase: phase || 'focus', end: Date.now() + min * 60e3, min: min, credited: false });
      loop();
      emit();
    }
    function stop() { write(null); emit(); }
    function emit() { const s = state(); watchers.forEach(fn => { try { fn(s); } catch (e) { /* never */ } }); }
    function loop() {
      window.clearInterval(tickT);
      tickT = window.setInterval(function () {
        const s = state();
        emit();
        if (s.phase === 'idle') window.clearInterval(tickT);
      }, 1000);
    }
    function watch(fn) { watchers.push(fn); if (read()) loop(); return state(); }
    function unwatch(fn) { const i = watchers.indexOf(fn); if (i >= 0) watchers.splice(i, 1); }
    const today = () => ({ min: (Store.day() || {}).focus || 0, blocks: (Store.day() || {}).blocks || 0 });

    return { state, start, stop, watch, unwatch, preset, setPreset, PRESETS, today };
  })();

  return {
    GOALS, goal, goalKey, setGoal, goalState,
    streak, due, weakSpots, weakIds, calibration, mistakes, WHYS,
    exam, setExamDate, blueprint, plan, todayReads, Focus
  };
})();

/* ══════════════════════════════════════════════════════════════════════════
   Timed drill — a short paper under exam conditions.

   Rohrer's interleaving studies are the reason this exists: a block of ten
   questions from one chapter teaches you to execute a method; ten questions
   from four chapters, shuffled, teach you to CHOOSE the method, and choosing
   is what the paper tests. So the drill draws round-robin across chapters
   and never groups them.

   The clock is the second reason. Knowing something and producing it in 90
   seconds are different skills, and only the second one earns marks. Time per
   question is the question's own budget, summed.

   Everything the drill records goes through QuestionCard, exactly as it
   would inside a note — the first lock is the first attempt, wherever it
   happens. The drill's own state (which questions, the clock, the running
   tally) lives here for the session and is rebuilt on a language switch.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewDrill = (function () {

  const el = DOM.el;
  const t = k => I18N.t(k);

  const SIZES = [5, 10, 20];
  let setup = { n: 10, scope: 'read', course: 'all' };
  let session = null;      /* { qs, i, results, endAt, startedAt, phase } */
  let clockT = 0;

  /* "Class 10 · Chapter 1: Arithmetic Sequences" — three classes share chapter numbers */
  function chapterLabel(mod) {
    const course = Pool.courses().filter(c => (c.modules || []).indexOf(mod) >= 0)[0];
    const cls = course && /\d+/.test(course.code || '') ? (course.code || '').match(/\d+/)[0] : null;
    const isMl = I18N.lang() === 'ml';
    return (cls ? (isMl ? 'ക്ലാസ് ' : 'Class ') + cls + ' · ' : '') + mod.title;
  }

  const chapterOf = q => {
    const mod = Pool.moduleOfSec(q.sec || (Pool.concept((q.tests || [])[0] || q.concept) || {}).sec);
    return mod ? mod : null;
  };

  /* ── drawing the paper ─────────────────────────────────────────────────── */
  function candidates() {
    const readSet = {};
    Pool.ids.allConcepts().forEach(id => { if (Progress.level(id) >= 1) readSet[id] = true; });
    const weak = setup.scope === 'weak' ? Study.weakIds() : null;
    return Pool.objective().filter(function (q) {
      const targets = (q.tests || []).concat(q.concept ? [q.concept] : []);
      const c = Pool.concept(targets[0]);
      if (!c) return false;
      if (setup.course !== 'all') {
        const course = Pool.courseOfSec(c.sec);
        if (!course || course.id !== setup.course) return false;
      }
      if (setup.scope === 'read') return targets.some(id => readSet[id]);
      if (setup.scope === 'weak') return targets.some(id => weak[id]);
      return true;
    });
  }

  function shuffle(list) {
    for (let i = list.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      const x = list[i]; list[i] = list[j]; list[j] = x;
    }
    return list;
  }

  /* round-robin across chapters, unattempted questions first within each */
  function draw(n) {
    const by = {}, order = [];
    shuffle(candidates()).forEach(function (q) {
      const mod = chapterOf(q);
      const k = mod ? mod.id : '?';
      if (!by[k]) { by[k] = []; order.push(k); }
      by[k].push(q);
    });
    order.forEach(k => by[k].sort((a, b) => {
      const fa = (Store.omr(a.id) || {}).first ? 1 : 0, fb = (Store.omr(b.id) || {}).first ? 1 : 0;
      return fa - fb;
    }));
    shuffle(order);
    const out = [];
    let guard = 0;
    while (out.length < n && guard < 1000) {
      let any = false;
      for (let i = 0; i < order.length && out.length < n; i++) {
        const q = by[order[i]].shift();
        if (q) { out.push(q); any = true; }
      }
      if (!any) break;
      guard += 1;
    }
    return out;
  }

  function begin() {
    const qs = draw(setup.n);
    if (!qs.length) return false;
    const secs = qs.reduce((a, q) => a + (q.time || 30), 0);
    session = {
      qs: qs, i: 0, results: [], phase: 'run',
      startedAt: Date.now(), endAt: Date.now() + Math.max(60, secs) * 1000, total: Math.max(60, secs) * 1000
    };
    return true;
  }

  function finish() {
    if (!session) return;
    session.phase = 'done';
    session.finishedAt = Date.now();
    window.clearInterval(clockT);
    Router.reload();
  }

  /* ── setup screen ──────────────────────────────────────────────────────── */
  function setupView() {
    const root = el('div', { class: 'stack' });
    const chip = (label, on, fn) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(on), on: { click: function () { fn(); Router.reload(); } } });
    const avail = candidates().length;
    const canStart = avail >= Math.min(5, setup.n) && avail > 0;
    const bp = Study.blueprint();

    DOM.add(root, [
      el('div', {}, [
        el('div', { class: 'kicker', text: t('drill_kicker') }),
        el('h1', { tabindex: '-1', id: 'pagetitle', text: t('drill') })
      ]),
      el('p', { class: 'lede', text: t('drill_lede') }),
      UI.mockBanner(),
      el('div', { class: 'card' }, [
        el('div', { class: 'kicker', text: t('drill_size') }),
        el('div', { class: 'row', style: { margin: '8px 0 14px' } }, SIZES.map(n =>
          chip(n + ' ' + t('questions_lc'), setup.n === n, () => { setup.n = n; }))),
        el('div', { class: 'kicker', text: t('drill_scope') }),
        el('div', { class: 'row', style: { margin: '8px 0 14px' } }, [
          chip(t('drill_scope_read'), setup.scope === 'read', () => { setup.scope = 'read'; }),
          chip(t('drill_scope_weak'), setup.scope === 'weak', () => { setup.scope = 'weak'; }),
          chip(t('drill_scope_all'), setup.scope === 'all', () => { setup.scope = 'all'; })
        ]),
        el('div', { class: 'kicker', text: t('drill_course') }),
        el('div', { class: 'row', style: { margin: '8px 0 0' } },
          [chip(t('drill_all_courses'), setup.course === 'all', () => { setup.course = 'all'; })]
            .concat(Pool.courses().filter(c => c.id !== 'foundation' && !c.pending).map(c =>
              chip(c.title, setup.course === c.id, () => { setup.course = c.id; }))))
      ]),
      el('div', { class: 'card tint' }, [
        el('div', { class: 'row', style: { gap: '10px' } }, [
          el('span', { class: 'badge accent', text: avail + ' ' + t('questions_lc') }),
          el('span', { class: 'small muted', text: t('exam_paper') })
        ]),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' }, text: t('drill_first_only') })
      ]),
      canStart
        ? el('div', { class: 'btn-row' }, [
            el('button', { class: 'btn primary full', type: 'button',
              on: { click: function () { if (begin()) Router.reload(); } } },
              [DOM.mi('timer', 'sm'), el('span', { text: t('drill_start') })])
          ])
        : UI.empty(t('drill_none'), el('a', { class: 'btn', href: Router.href('study'), text: t('open_syllabus') }))
    ]);
    void bp;
    return root;
  }

  /* ── running ───────────────────────────────────────────────────────────── */
  function runView() {
    const s = session;
    const q = s.qs[s.i];
    const root = el('div', { class: 'stack' });
    const clock = el('span', { class: 'timer drill-clock' });
    const bar = el('div', { class: 'meter' }, [el('i', { style: { width: '0%' } })]);
    const banner = el('div', { hidden: true });

    function paintClock() {
      const left = s.endAt - Date.now();
      clock.textContent = UI.clock(Math.max(0, left)) + ' ' + t('drill_time_left');
      bar.firstChild.style.width = DOM.pct(Math.max(0, s.total - left), s.total) + '%';
      clock.classList.toggle('is-late', left < 60e3);
      if (left <= 0 && s.phase === 'run') {
        s.phase = 'late';
        banner.hidden = false;
        DOM.add(banner, [el('div', { class: 'banner' }, [DOM.mi('alarm'), el('span', { text: t('drill_time_up') })])]);
        DOM.announce(t('drill_time_up'));
      }
    }
    window.clearInterval(clockT);
    clockT = window.setInterval(function () {
      if (!document.body.contains(clock)) { window.clearInterval(clockT); return; }
      paintClock();
    }, 500);
    paintClock();

    let answered = false;
    const nextBtn = el('button', { class: 'btn primary', type: 'button',
      text: s.i + 1 < s.qs.length ? t('next') : t('drill_results'),
      on: { click: function () {
        if (!answered) s.results.push({ q: q, verdict: null, ms: 0 });
        if (s.i + 1 < s.qs.length && s.phase !== 'late') { s.i += 1; Router.reload(); }
        else finish();
      } } });
    const tail = el('div', { class: 'btn-row' }, [nextBtn]);

    const card = QuestionCard.build(q, {
      inNote: true, tail: tail, drill: true,
      onLocked: function (verdict, ms) {
        answered = true;
        s.results.push({ q: q, verdict: verdict, ms: ms || 0 });
      }
    });

    DOM.add(root, [
      el('div', { class: 'spread' }, [
        el('div', {}, [
          el('div', { class: 'kicker', text: t('drill') }),
          el('h1', { tabindex: '-1', id: 'pagetitle', text: t('drill_question') + ' ' + (s.i + 1) + ' / ' + s.qs.length })
        ]),
        clock
      ]),
      bar,
      banner,
      el('div', { class: 'card' }, [card]),
      el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn quiet', type: 'button', text: t('drill_finish'),
          on: { click: function () { if (!answered) s.results.push({ q: q, verdict: null, ms: 0 }); finish(); } } })
      ])
    ]);
    return root;
  }

  /* ── results ───────────────────────────────────────────────────────────── */
  function resultsView() {
    const s = session;
    const n = s.qs.length;
    const res = s.results;
    const correct = res.filter(r => r.verdict === 'correct').length;
    const partial = res.filter(r => r.verdict === 'partial').length;
    const wrong = res.filter(r => r.verdict === 'wrong').length;
    const unanswered = n - res.filter(r => r.verdict).length;
    const used = Math.min(s.total, (s.finishedAt || Date.now()) - s.startedAt);
    const marks = res.reduce((a, r) => a + (r.verdict ? QuestionCard.awarded(r.q, r.verdict) : 0), 0);
    const marksAll = s.qs.reduce((a, q) => a + (q.marks || 1), 0);

    const byCh = {}, order = [];
    s.qs.forEach(function (q) {
      const mod = chapterOf(q);
      const k = mod ? mod.id : '?';
      if (!byCh[k]) { byCh[k] = { mod: mod, total: 0, ok: 0 }; order.push(k); }
      byCh[k].total += 1;
      const r = res.filter(x => x.q === q)[0];
      if (r && r.verdict === 'correct') byCh[k].ok += 1;
    });

    const review = [];
    const seen = {};
    res.filter(r => r.verdict && r.verdict !== 'correct').forEach(function (r) {
      const c = Pool.concept((r.q.tests || [])[0] || r.q.concept);
      if (c && !seen[c.id]) { seen[c.id] = true; review.push(c); }
    });

    const root = el('div', { class: 'stack' });
    DOM.add(root, [
      el('div', {}, [
        el('div', { class: 'kicker', text: t('drill') }),
        el('h1', { tabindex: '-1', id: 'pagetitle', text: t('drill_results') })
      ]),
      DOM.stagger(el('div', { class: 'stats' }, [
        UI.stat(correct + '/' + n, t('drill_score'), (marks > 0 ? '+' : '') + Math.round(marks * 100) / 100 + ' / ' + marksAll + ' ' + t('marks'),
          UI.meter(correct, n, correct === n ? true : undefined)),
        UI.stat(UI.clock(used), t('drill_time'), UI.clock(Math.round(used / Math.max(1, n))) + ' ' + t('drill_per_q')),
        UI.stat(String(wrong + partial), t('not_correct'), unanswered ? unanswered + ' ' + t('drill_unanswered') : '')
      ])),
      el('div', { class: 'card' }, [
        el('div', { class: 'kicker', text: t('drill_by_chapter') }),
        el('div', { class: 'bars', style: { marginTop: '10px' } }, order.map(function (k) {
          const row = byCh[k];
          return el('div', { class: 'bar-row' }, [
            el('span', { class: 'small', text: row.mod ? chapterLabel(row.mod) : k }),
            el('div', { class: 'meter' + (row.ok === row.total ? ' ok' : row.ok ? ' lv2' : ' lv1') },
              [el('i', { style: { width: DOM.pct(row.ok, row.total) + '%' } })]),
            el('span', { class: 'count', text: row.ok + '/' + row.total })
          ]);
        }))
      ]),
      review.length ? el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: t('drill_review') }),
        el('div', { class: 'list', style: { marginTop: '10px' } }, review.map(c =>
          el('a', { class: 'item', href: Router.href('note/' + c.id) }, [
            el('span', { class: 'ix bad' }, [DOM.mi('priority_high', 'xs')]),
            el('span', { class: 'tt' }, [el('b', { text: c.title }), el('span', { text: Pool.sectionTitle(c.sec) })]),
            el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
          ])))
      ]) : null,
      el('div', { class: 'btn-row' }, [
        el('button', { class: 'btn primary', type: 'button', text: t('drill_again'),
          on: { click: function () { session = null; Router.reload(); } } }),
        el('a', { class: 'btn', href: Router.href('recall?mode=weak'), text: t('weak_drill') })
      ])
    ]);
    return root;
  }

  function render() {
    if (!session) return setupView();
    if (session.phase === 'done') return resultsView();
    return runView();
  }

  return { render };
})();

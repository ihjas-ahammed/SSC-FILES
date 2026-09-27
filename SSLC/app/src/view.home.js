/* ══════════════════════════════════════════════════════════════════════════
   Today — the plan for the day, and what the app actually knows about you.

   The order of the page is the order of the evidence: the plan first (what to
   do), then the daily goal and streak (whether you are doing it), then the
   feedback the research says matters most — weak spots, why marks are lost,
   and calibration — then the numbers, the exam, and the courses.

   The tiles keep completion, exercises and recall apart on purpose: reading a
   note is Level 1 and says nothing about recall, so the numbers are never
   merged into one flattering percentage.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewHome = (function () {

  const el = DOM.el;
  const t = k => I18N.t(k);
  const isMl = () => I18N.lang() === 'ml';

  /* ── greeting row ──────────────────────────────────────────────────────── */
  function greeting() {
    const h = new Date().getHours();
    const word = h < 12 ? t('greeting_morning') : h < 17 ? t('greeting_day') : t('greeting_evening');
    const name = (Store.identity().name || '').split(' ')[0];
    const st = Study.streak();
    const ex = Study.exam();

    return el('div', { class: 'today-head' }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: word + (name ? ', ' + name : '') }),
        el('h1', { tabindex: '-1', id: 'pagetitle', text: t('today_title') })
      ]),
      el('div', { class: 'row', style: { gap: '6px' } }, [
        el('span', { class: 'chip stat-chip' + (st.today ? ' on' : ''), title: t('streak_hint') }, [
          DOM.mi(st.current ? 'local_fire_department' : 'mode_heat', 'sm'),
          el('span', { text: st.current ? st.current + ' ' + t('streak') : t('streak_none') })
        ]),
        ex.days >= 0 ? el('a', { class: 'chip stat-chip', href: '#exam-card' }, [
          DOM.mi('event', 'sm'),
          el('span', { text: ex.days === 0 ? t('exam_today') : ex.days + ' ' + t('exam_days_left') })
        ]) : null
      ])
    ]);
  }

  /* ── the plan ──────────────────────────────────────────────────────────── */
  function planStep(i, s) {
    const ml = isMl();
    let label, detail, icon;
    switch (s.kind) {
      case 'review':
        icon = 'replay';
        label = s.n ? t('plan_review') : t('plan_review_none');
        detail = s.n ? s.n + ' ' + t('plan_review_detail') : t('streak_hint');
        break;
      case 'weak':
        icon = 'fitness_center';
        label = t('plan_weak');
        detail = s.items.slice(0, 3).map(x => x.c.title).join(' · ') + (s.items.length > 3 ? ' · +' + (s.items.length - 3) : '');
        break;
      case 'read':
        icon = 'menu_book';
        label = s.concept ? t('plan_read') + ': ' + s.concept.title : t('plan_read_done');
        detail = s.concept ? Pool.sectionTitle(s.concept.sec) + ' · ' + t('plan_read_detail') : '';
        break;
      case 'exercise':
        icon = 'edit_square';
        label = s.q ? t('plan_exercise') + ': ' + (s.q.title || s.q.id) : t('plan_exercise_done');
        detail = s.concept ? Pool.sectionTitle(s.concept.sec) + ' · ' + t('plan_exercise_detail') : '';
        break;
      case 'drill':
        icon = 'timer';
        label = t('plan_drill');
        detail = s.ready ? s.n + ' ' + t('plan_drill_detail') : t('plan_drill_locked');
        break;
      case 'teach':
        icon = 'record_voice_over';
        label = t('plan_teach') + (s.concept ? ': ' + s.concept.title : '');
        detail = t('plan_teach_detail');
        break;
      default:
        icon = 'circle'; label = s.kind; detail = '';
    }
    const cls = 'item plan-step' + (s.done ? ' is-done' : '') + (s.ready ? '' : ' is-idle');
    return el('a', { class: cls, href: Router.href(s.href) }, [
      el('span', { class: 'ix' + (s.done ? ' ok' : '') }, [DOM.mi(s.done ? 'check' : icon, 'xs')]),
      el('span', { class: 'tt' }, [el('b', { text: label }), detail ? el('span', { text: detail }) : null]),
      s.count ? el('span', { class: 'count', text: s.count }) : null,
      el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
    ]);
  }

  function planCard() {
    const steps = Study.plan();
    return el('div', { class: 'card glass' }, [
      el('div', { class: 'kicker', text: t('plan_title') }),
      el('p', { class: 'small muted', style: { margin: '4px 0 12px' }, text: t('plan_desc') }),
      el('div', { class: 'list' }, steps.map((s, i) => planStep(i, s)))
    ]);
  }

  /* ── daily goal and streak ─────────────────────────────────────────────── */
  function goalCard(rerender) {
    const g = Study.goalState();
    const st = Study.streak();
    const chip = (k, label) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(g.key === k), on: { click: function () { Study.setGoal(k); rerender(); } } });

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: t('goal_title') }),
        el('span', { class: 'badge' + (g.met ? ' ok' : ''), text: g.met ? t('goal_met') : g.pct + '%' })
      ]),
      el('div', { class: 'row', style: { margin: '10px 0 12px' } }, [
        chip('light', t('goal_light')), chip('normal', t('goal_normal')), chip('exam', t('goal_exam'))
      ]),
      el('div', { class: 'goal-grid' }, g.rows.map(function (r) {
        return el('div', { class: 'goal-row' }, [
          el('div', { class: 'spread' }, [
            el('span', { class: 'small', text: t('goal_' + r.key) }),
            el('span', { class: 'count', text: r.raw + '/' + r.want })
          ]),
          UI.meter(r.done, r.want, r.done >= r.want ? true : undefined)
        ]);
      })),
      el('div', { class: 'row', style: { marginTop: '12px', gap: '10px' } }, [
        el('span', { class: 'badge' + (st.current ? ' warn' : ''), text: st.current + ' ' + t('streak') }),
        el('span', { class: 'small muted', text: t('streak_best') + ' ' + st.best + ' · ' + t('streak_hint') })
      ]),
      el('p', { class: 'small muted', style: { margin: '10px 0 0' }, text: t('goal_note') })
    ]);
  }

  /* ── focus timer ───────────────────────────────────────────────────────── */
  function focusCard() {
    const F = Study.Focus;
    const host = el('div', { class: 'card tint focus-card' });
    const clock = el('div', { class: 'focus-clock', 'aria-live': 'off' });
    const phase = el('div', { class: 'small muted' });
    const ring = el('div', { class: 'focus-ring' }, [clock]);
    const actions = el('div', { class: 'btn-row', style: { marginTop: '12px' } });
    const presets = el('div', { class: 'row', style: { marginTop: '10px' } });
    const todayLine = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });

    function paintPresets() {
      DOM.clear(presets);
      Object.keys(F.PRESETS).forEach(function (k) {
        const p = F.PRESETS[k];
        presets.appendChild(el('button', { class: 'chip', type: 'button',
          'aria-pressed': String(Store.pref('focusPreset', 'normal') === k),
          text: p[0] + ' + ' + p[1] + ' ' + t('minutes'),
          on: { click: function () { F.setPreset(k); paintPresets(); paint(F.state()); } } }));
      });
    }

    function paint(s) {
      clock.textContent = UI.clock(s.left);
      const pct = s.total ? Math.round(100 * (1 - s.left / s.total)) : 0;
      ring.style.setProperty('--p', String(s.phase === 'idle' ? 0 : pct));
      ring.setAttribute('data-phase', s.phase);
      phase.textContent = s.phase === 'idle' ? t('focus_desc')
        : s.over ? t('focus_done')
        : s.phase === 'break' ? t('focus_on_break') : t('focus_running');
      DOM.clear(actions);
      if (s.phase === 'idle') {
        actions.appendChild(el('button', { class: 'btn primary', type: 'button',
          on: { click: function () { F.start('focus'); } } }, [DOM.mi('play_arrow', 'sm'), el('span', { text: t('focus_start') })]));
      } else if (s.over && s.phase === 'focus') {
        actions.appendChild(el('button', { class: 'btn primary', type: 'button', text: t('focus_break'),
          on: { click: function () { F.start('break'); } } }));
        actions.appendChild(el('button', { class: 'btn', type: 'button', text: t('focus_stop'),
          on: { click: function () { F.stop(); } } }));
      } else if (s.over) {
        actions.appendChild(el('button', { class: 'btn primary', type: 'button', text: t('focus_start'),
          on: { click: function () { F.start('focus'); } } }));
        actions.appendChild(el('button', { class: 'btn', type: 'button', text: t('focus_stop'),
          on: { click: function () { F.stop(); } } }));
      } else {
        actions.appendChild(el('button', { class: 'btn', type: 'button', text: t('focus_stop'),
          on: { click: function () { F.stop(); } } }));
      }
      const td = F.today();
      todayLine.textContent = td.min + ' ' + t('minutes') + ' ' + t('focus_today') + ' · ' + td.blocks + ' ' + t('focus_blocks');
    }

    const watcher = function (s) { if (!document.body.contains(host)) { F.unwatch(watcher); return; } paint(s); };
    paint(F.watch(watcher));
    paintPresets();

    DOM.add(host, [
      el('div', { class: 'kicker', text: t('focus_title') }),
      el('div', { class: 'focus-row' }, [ring, el('div', { class: 'grow' }, [phase, actions])]),
      presets, todayLine
    ]);
    return host;
  }

  /* ── weak spots, mistakes, calibration ─────────────────────────────────── */
  function weakCard() {
    const weak = Study.weakSpots(6);
    if (!weak.length) return null;
    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: t('weak_title') }),
        el('a', { class: 'chip on', href: Router.href('recall?mode=weak'), text: t('weak_drill') })
      ]),
      el('p', { class: 'small muted', style: { margin: '6px 0 10px' }, text: t('weak_desc') }),
      el('div', { class: 'list' }, weak.map(function (w) {
        return el('a', { class: 'item', href: Router.href('note/' + w.cid) }, [
          el('span', { class: 'ix bad' }, [DOM.mi('priority_high', 'xs')]),
          el('span', { class: 'tt' }, [
            el('b', { text: w.c.title }),
            el('span', { text: Pool.sectionTitle(w.c.sec) })
          ]),
          el('span', { class: 'count', text: w.misses + ' ' + t('misses') })
        ]);
      }))
    ]);
  }

  function mistakesCard() {
    const m = Study.mistakes();
    if (!m.n) return null;
    const max = Math.max.apply(null, m.top.map(x => x.n)) || 1;
    return el('div', { class: 'card tint' }, [
      el('div', { class: 'kicker', text: t('mistakes_title') }),
      el('p', { class: 'small muted', style: { margin: '6px 0 10px' }, text: t('mistakes_desc') }),
      el('div', { class: 'bars' }, m.top.filter(x => x.n).map(function (x) {
        return el('div', { class: 'bar-row' }, [
          el('span', { class: 'small', text: t('why_' + x.why) }),
          el('div', { class: 'meter lv1' }, [el('i', { style: { width: DOM.pct(x.n, max) + '%' } })]),
          el('span', { class: 'count', text: String(x.n) })
        ]);
      })),
      m.top[0] && m.top[0].n ? el('p', { class: 'small', style: { margin: '12px 0 0' } }, [
        el('b', { text: t('why_' + m.top[0].why) + ': ' }),
        el('span', { text: t('why_fix_' + m.top[0].why) })
      ]) : null
    ]);
  }

  function calibrationCard() {
    const c = Study.calibration();
    if (!c.n) return null;
    const cell = (n, key, cls) => el('div', { class: 'cal-cell ' + cls }, [
      el('b', { text: String(n) }), el('span', { text: t(key) })
    ]);
    return el('div', { class: 'card' }, [
      el('div', { class: 'kicker', text: t('calib_title') }),
      el('p', { class: 'small muted', style: { margin: '6px 0 10px' }, text: t('calib_desc') }),
      el('div', { class: 'cal-grid' }, [
        cell(c.sureRight, 'calib_sure_right', 'ok'),
        cell(c.sureWrong, 'calib_sure_wrong', 'bad'),
        cell(c.unsureRight, 'calib_unsure_right', 'warn'),
        cell(c.unsureWrong, 'calib_unsure_wrong', '')
      ]),
      el('p', { class: 'small', style: { margin: '10px 0 0' },
        text: c.verdict === 'over' ? t('calib_over') : c.verdict === 'under' ? t('calib_under')
          : c.verdict === 'good' ? t('calib_good') : t('calib_few') })
    ]);
  }

  /* ── the numbers ───────────────────────────────────────────────────────── */
  function statTiles() {
    const all = Pool.ids.concepts();
    const overall = Progress.count(all);
    const s = Store.summary(all, Pool.ids.cards(), Pool.ids.objective(), Pool.ids.proofs());
    const tasks = Pool.ids.written();
    const tasksDone = tasks.filter(id => Store.isProofDone('w:' + id)).length;
    const pyqAll = Pool.pyq();
    const pyqDone = pyqAll.filter(q => Progress.pyqDone(q)).length;
    const lvl = t('level');

    return DOM.stagger(el('div', { class: 'stats' }, [
      UI.stat(overall.l1 + '/' + overall.total, t('stat_read'), lvl + ' 1', UI.levelBar(overall, { key: false })),
      UI.stat(tasksDone + '/' + tasks.length, t('stat_exercises'), lvl + ' 2', UI.meter(tasksDone, tasks.length, 2)),
      UI.stat(pyqDone + '/' + pyqAll.length, t('stat_pyq'), lvl + ' 3', UI.meter(pyqDone, pyqAll.length, 3)),
      UI.stat(s.cards.tried ? DOM.pct(s.cards.got, s.cards.tried) + '%' : '—', t('stat_recall'),
        s.cards.tried + ' ' + t('of') + ' ' + s.cards.total + ' ' + t('tried')),
      UI.stat(s.omr.locked ? DOM.pct(s.omr.correct, s.omr.locked) + '%' : '—', t('stat_correct'),
        s.omr.locked + ' ' + t('of') + ' ' + s.omr.total + ' ' + t('locked'))
    ]));
  }

  /* ── the exam ──────────────────────────────────────────────────────────── */
  function examCard(rerender) {
    const ex = Study.exam();
    const bp = Study.blueprint();
    const input = el('input', { class: 'tin', type: 'date', id: 'exam-date', value: ex.iso,
      'aria-label': t('exam_set') });
    input.addEventListener('change', function () { Study.setExamDate(input.value); rerender(); });
    const paper = bp.sections.map(s => s.count + '×' + s.marks).join(' + ') + ' = ' + bp.marks;

    return el('div', { class: 'card', id: 'exam-card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: t('exam_title') }),
        el('span', { class: 'badge accent', text: ex.days < 0 ? t('exam_past') : ex.days === 0 ? t('exam_today') : ex.days + ' ' + t('exam_days_left') })
      ]),
      el('div', { class: 'row', style: { margin: '10px 0', gap: '10px', alignItems: 'center' } }, [
        el('label', { class: 'small muted', for: 'exam-date', text: t('exam_set') }), input
      ]),
      ex.days > 0 && ex.left > 0 ? el('p', { class: 'small', style: { margin: '0 0 6px' } }, [
        el('b', { text: ex.perDay + ' ' }), el('span', { text: t('exam_per_day') + ' (' + ex.left + ')' })
      ]) : null,
      el('p', { class: 'small muted', style: { margin: 0 }, text: t('exam_paper') + ' · ' + paper }),
      el('p', { class: 'small muted', style: { margin: '4px 0 0' }, text: t('exam_pace') })
    ]);
  }

  /* ── courses ───────────────────────────────────────────────────────────── */
  function courseCard(course) {
    if (course.pending) {
      return el('div', { class: 'card' }, [
        el('div', { class: 'spread' }, [
          el('div', { class: 'kicker', text: course.title }),
          el('span', { class: 'badge warn', text: t('pending') })
        ]),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' }, text: course.pendingNote || t('not_delivered') })
      ]);
    }

    const ids = Pool.ids.concepts(course.id);
    const c = Progress.count(ids);
    const tasks = Pool.ids.written(course.id);
    const tasksDone = tasks.filter(id => Store.isProofDone('w:' + id)).length;
    const pyq = Progress.pyqState(course.id);
    const lv = Progress.courseLevel(course.id);
    const ml = isMl();

    const owed = c.min === 0
      ? (ml ? (c.total - c.l1) + ' എണ്ണം കൂടി വായിക്കാനുണ്ട് (ലെവൽ 1)' : (c.total - c.l1) + ' still to read for a red tick')
      : c.min === 1
        ? (ml ? (tasks.length - tasksDone) + ' പരിശീലനച്ചോദ്യങ്ങൾ കൂടി ചെയ്യാനുണ്ട് (ലെവൽ 2)' : (tasks.length - tasksDone) + ' exercises still owed for an amber tick')
        : c.min === 2 && pyq.total
          ? (ml ? (pyq.total - pyq.done) + ' മുൻവർഷ ചോദ്യങ്ങൾ കൂടി (ലെവൽ 3)' : (pyq.total - pyq.done) + ' past-paper questions still owed for green')
          : (ml ? 'എല്ലാ ഘട്ടങ്ങളും പൂർത്തിയായി' : 'every level earned');

    const summary = ml
      ? c.l1 + ' വായിച്ചു · ' + c.l2 + ' പരിശീലനം · ' + c.l3 + ' പച്ച, ആകെ ' + c.total
      : c.l1 + ' read · ' + c.l2 + ' exercised · ' + c.l3 + ' green, of ' + c.total;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('a', { class: 'kicker', style: { textDecoration: 'none' }, href: Router.href('study/' + course.id), text: course.title }),
        el('span', { class: 'badge' + (lv ? ' lv' + lv : ''),
          text: lv ? (t('level') + ' ' + lv + ' · ' + I18N.levelName(lv)) : I18N.levelName(0) })
      ]),
      el('div', { class: 'row', style: { marginTop: '10px', gap: '12px', alignItems: 'center' } }, [
        UI.levelRing(c, course.title),
        el('span', { class: 'tt' }, [el('b', { text: summary }), el('span', { text: course.blurb })])
      ]),
      el('div', { style: { marginTop: '12px' } }, [UI.levelBar(c)]),
      tasks.length ? el('div', { style: { marginTop: '12px' } }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'count', text: t('exercises_worked') }),
          el('span', { class: 'count', text: tasksDone + '/' + tasks.length })
        ]),
        el('div', { style: { marginTop: '6px' } }, [UI.meter(tasksDone, tasks.length, 2)])
      ]) : null,
      pyq.total ? el('div', { style: { marginTop: '12px' } }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'count', text: t('past_papers_lv') }),
          el('span', { class: 'count', text: pyq.done + '/' + pyq.total })
        ]),
        el('div', { style: { marginTop: '6px' } }, [UI.meter(pyq.done, pyq.total, 3)])
      ]) : null,
      el('p', { class: 'small muted', style: { margin: '10px 0 0' }, text: owed })
    ]);
  }

  /* ── sync ──────────────────────────────────────────────────────────────── */
  function syncCard() {
    const id = Store.identity();
    const ml = isMl();
    const host = el('div', { class: 'card tint' });
    const state = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });
    const dot = el('span', { class: 'badge ok', text: Sync.status().key });

    function paint(last) {
      const s = Sync.status();
      const when = s.last && s.last.at
        ? (ml ? ' · അവസാനം പരിശോധിച്ചത് ' + UI.ago(s.last.at) : ' · last checked ' + UI.ago(s.last.at))
        : '';
      state.textContent = (last && last.msg)
        ? last.msg + when
        : (ml
            ? id.name + ' · ' + id.roll + ' എന്നതിൽ പ്രവേശിച്ചിരിക്കുന്നു. ഈ പേരും റോൾ നമ്പറും നൽകുന്ന എല്ലാ ഉപകരണങ്ങളിലും പുരോഗതി തനിയെ ലയിക്കും' + when + '. ഇത് ഒരു പാസ്‌വേഡല്ല.'
            : 'Signed in as ' + id.name + ' · ' + id.roll + '. Progress merges across every device '
              + 'that signs in with these two, on its own' + when + '. It is a pass key, not a password.');
    }
    Sync.watch(paint);
    paint(Sync.status().last);

    /* The confirmation is inline, not a browser dialog: hosted pages often
       refuse dialogs, and a question that cannot be answered is a dead button. */
    const askHost = el('div', {});
    DOM.add(host, [
      el('div', { class: 'spread' }, [el('div', { class: 'kicker', text: t('sync_title') }), dot]),
      el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
        el('button', { class: 'btn', type: 'button', text: t('sign_out'),
          on: { click: function () {
            DOM.clear(askHost);
            askHost.appendChild(UI.ask({
              title: t('sign_out') + '?',
              body: el('span', { text: ml
                ? 'പുരോഗതി ഈ ഉപകരണത്തിലും ക്ലൗഡിലും സുരക്ഷിതമായിരിക്കും.'
                : 'Progress stays on this device and in the cloud record.' }),
              actions: [
                { label: t('sign_out'), primary: true, onClick: function () { Store.flushNow(); Sync.disconnect(); location.reload(); } },
                { label: t('cancel'), onClick: function () { DOM.clear(askHost); } }
              ]
            }));
          } } })
      ]),
      askHost,
      state
    ]);
    return host;
  }

  /* ── the page ──────────────────────────────────────────────────────────── */
  function render() {
    const root = el('div', { class: 'stack' });
    const rerender = () => Router.reload();
    const lvl = t('level');

    DOM.add(root, [
      greeting(),
      UI.mockBanner(),
      planCard(),
      goalCard(rerender),
      statTiles(),
      weakCard(),
      mistakesCard(),
      calibrationCard(),
      focusCard(),
      examCard(rerender),

      el('div', {}, [
        el('div', { class: 'spread', style: { marginBottom: '10px' } }, [
          el('h2', { text: t('courses') }),
          el('a', { class: 'chip', href: Router.href('study'), text: t('open_syllabus') })
        ]),
        el('p', { class: 'small muted', style: { margin: '0 0 10px' }, text: t('course_bar_desc') }),
        el('div', { class: 'stack', style: { gap: '12px' } }, Pool.courses().map(courseCard))
      ]),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: t('colours_meaning') }),
        el('div', { class: 'stack', style: { gap: '8px', marginTop: '10px' } }, [
          el('div', { class: 'row' }, [el('span', { class: 'badge lv1', text: lvl + ' 1' }), el('span', { class: 'small muted', text: t('lv1_desc') })]),
          el('div', { class: 'row' }, [el('span', { class: 'badge lv2', text: lvl + ' 2' }), el('span', { class: 'small muted', text: t('lv2_desc') })]),
          el('div', { class: 'row' }, [el('span', { class: 'badge lv3', text: lvl + ' 3' }), el('span', { class: 'small muted', text: t('lv3_desc') })])
        ]),
        el('p', { class: 'small muted', style: { margin: '12px 0 0' }, text: t('colours_foot') })
      ]),

      el('a', { class: 'card method-link', href: Router.href('method') }, [
        el('div', { class: 'row', style: { gap: '12px', flexWrap: 'nowrap' } }, [
          DOM.mi('school', 'lg'),
          el('span', { class: 'tt' }, [el('b', { text: t('method_link') }), el('span', { text: t('method_link_sub') })]),
          el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
        ])
      ]),

      syncCard()
    ]);

    return root;
  }

  return { render };
})();

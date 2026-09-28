/* ══════════════════════════════════════════════════════════════════════════
   Progress — mastery evidence, habit tracking, diagnostics & settings.

   Separates coverage from ability: reading a note, assisted exercises,
   unassisted past papers, and spaced recall are different evidence.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewProgress = (function () {

  const el = DOM.el;
  const t = k => (typeof I18N !== 'undefined' ? I18N.t(k) : k);
  const isMl = () => (typeof I18N !== 'undefined' && I18N.lang() === 'ml');

  /* ── header ───────────────────────────────────────────────────────────── */
  function header() {
    const ml = isMl();
    const id = Store.identity();
    const name = Store.displayName() || id.name || (ml ? 'അതിഥി പഠിതാവ്' : 'Guest Learner');
    const courseId = Store.selectedCourse() || 'm10';
    const cMap = { m10: ml ? 'ക്ലാസ് 10' : 'Class 10', m9: ml ? 'ക്ലാസ് 9' : 'Class 9', m8: ml ? 'ക്ലാസ് 8' : 'Class 8', foundation: ml ? 'അടിസ്ഥാനം' : 'Foundation' };

    return el('div', { class: 'spread', style: { alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px' } }, [
      el('div', {}, [
        el('div', { class: 'kicker', text: ml ? 'പഠന പുരോഗതിയും ക്രമീകരണങ്ങളും' : 'LEARNER PROGRESS & SETTINGS' }),
        el('h1', { tabindex: '-1', id: 'pagetitle', text: ml ? 'പുരോഗതി' : 'Progress & Mastery' })
      ]),
      el('div', { class: 'row', style: { gap: '6px' } }, [
        el('span', { class: 'chip on' }, [DOM.mi('person', 'sm'), el('span', { text: name })]),
        el('span', { class: 'chip' }, [DOM.mi('school', 'sm'), el('span', { text: cMap[courseId] || courseId })])
      ])
    ]);
  }

  /* ── overall stat tiles ────────────────────────────────────────────────── */
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

  /* ── daily goal and streak ─────────────────────────────────────────────── */
  function goalCard(rerender) {
    const g = Study.goalState();
    const st = Study.streak();
    const chip = (k, label) => el('button', {
      class: 'chip', type: 'button', text: label,
      'aria-pressed': String(g.key === k),
      on: { click: function () { Study.setGoal(k); rerender(); } }
    });

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

  /* ── courses breakdown ─────────────────────────────────────────────────── */
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
      ]) : null
    ]);
  }

  /* ── weak spots, mistakes & calibration ────────────────────────────────── */
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
        presets.appendChild(el('button', {
          class: 'chip', type: 'button',
          'aria-pressed': String(Store.pref('focusPreset', 'normal') === k),
          text: p[0] + ' + ' + p[1] + ' ' + t('minutes'),
          on: { click: function () { F.setPreset(k); paintPresets(); paint(F.state()); } }
        }));
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
        actions.appendChild(el('button', {
          class: 'btn primary', type: 'button',
          on: { click: function () { F.start('focus'); } }
        }, [DOM.mi('play_arrow', 'sm'), el('span', { text: t('focus_start') })]));
      } else if (s.over && s.phase === 'focus') {
        actions.appendChild(el('button', { class: 'btn primary', type: 'button', text: t('focus_break'),
          on: { click: function () { F.start('break'); } } }));
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

  /* ── exam countdown ────────────────────────────────────────────────────── */
  function examCard(rerender) {
    const ex = Study.exam();
    const input = el('input', { class: 'tin', type: 'date', id: 'exam-date-pref', value: ex.iso,
      'aria-label': t('exam_set') });
    input.addEventListener('change', function () { Study.setExamDate(input.value); rerender(); });

    return el('div', { class: 'card', id: 'exam-card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: t('exam_title') }),
        ex.days === null ? null : el('span', { class: 'badge accent', text: ex.days < 0 ? t('exam_past') : ex.days === 0 ? t('exam_today') : ex.days + ' ' + t('exam_days_left') })
      ]),
      el('div', { class: 'row', style: { margin: '10px 0', gap: '10px', alignItems: 'center' } }, [
        el('label', { class: 'small muted', for: 'exam-date-pref', text: t('exam_set') }), input
      ]),
      ex.days > 0 && ex.left > 0 ? el('p', { class: 'small', style: { margin: '0 0 6px' } }, [
        el('b', { text: ex.perDay + ' ' }), el('span', { text: t('exam_per_day') + ' (' + ex.left + ')' })
      ]) : null,
      el('p', { class: 'small muted', style: { margin: 0 }, text: isMl()
        ? 'ഇത് നിങ്ങൾ തിരഞ്ഞെടുക്കുന്ന പഠനലക്ഷ്യ തീയതിയാണ്.'
        : 'Choose your own target date for planning your study.' })
    ]);
  }

  /* ── settings, profile & sync ─────────────────────────────────────────── */
  function profileSettingsCard(rerender) {
    const ml = isMl();
    const id = Store.identity();
    const isGuest = !Store.syncEnabled();
    const courseId = Store.selectedCourse() || 'm10';

    const classPill = (cId, label) => el('button', {
      class: 'chip' + (courseId === cId ? ' on' : ''), type: 'button', text: label,
      on: { click: () => { Store.setSelectedCourse(cId); rerender(); } }
    });

    const exportBtn = el('button', {
      class: 'btn', type: 'button',
      on: { click: () => {
        const json = Store.exportJSON();
        const blob = new Blob([json], { type: 'application/json' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'sslc_maths_backup_' + Store.profileId() + '.json';
        a.click();
      } }
    }, [DOM.mi('download', 'sm'), el('span', { text: ml ? 'ബാക്കപ്പ് ഡൗൺലോഡ്' : 'Export Backup' })]);

    const resetBtn = el('button', {
      class: 'btn', type: 'button',
      on: { click: () => {
        if (confirm(ml ? 'ഈ ഉപകരണത്തിലെ പുരോഗതി മുഴുവൻ ഒഴിവാക്കണോ?' : 'Reset all progress on this device?')) {
          Store.reset();
          location.reload();
        }
      } }
    }, [DOM.mi('delete', 'sm'), el('span', { text: ml ? 'റെക്കോർഡ് മായ്‌ക്കുക' : 'Reset Record' })]);

    return el('div', { class: 'card tint' }, [
      el('div', { class: 'kicker', text: ml ? 'പ്രൊഫൈലും ക്രമീകരണങ്ങളും' : 'PROFILE & LOCAL SETTINGS' }),
      el('div', { style: { marginTop: '8px' } }, [
        el('label', { class: 'small muted', text: ml ? 'പഠിക്കുന്ന ക്ലാസ് തിരഞ്ഞെടുക്കുക:' : 'Select active class:' }),
        el('div', { class: 'row', style: { gap: '6px', marginTop: '6px' } }, [
          ...Pool.courses().filter(c => !c.pending).map(c => classPill(c.id, c.title))
        ])
      ]),
      el('div', { style: { marginTop: '14px', borderTop: '1px solid var(--rule)', paddingTop: '10px' } }, [
        el('div', { class: 'spread' }, [
          el('b', { text: isGuest ? (ml ? 'ലോക്കൽ പ്രൊഫൈൽ' : 'Local Guest Profile') : (ml ? 'ക്ലൗഡ് സിങ്ക് പ്രൊഫൈൽ' : 'Sync enabled') })
        ]),
        el('p', { class: 'small muted', style: { margin: '4px 0 10px' },
          text: isGuest
            ? (ml ? 'പുരോഗതി ഈ ഉപകരണത്തിൽ സുരക്ഷിതമായി സൂക്ഷിക്കുന്നു.' : 'Progress is safely stored on this device without requiring a remote login.')
            : (ml ? id.name + ' · ' + id.roll + ' എന്നതിൽ സിങ്ക് ചെയ്യുന്നു.' : 'Syncing with remote record for ' + id.name + ' · ' + id.roll)
        }),
        el('div', { class: 'btn-row' }, [
          isGuest ? el('button', {
            class: 'btn primary', type: 'button',
            on: { click: () => { Store.setOnboarded(false); location.reload(); } }
          }, [DOM.mi('sync', 'sm'), el('span', { text: ml ? 'സിങ്ക് ചെയ്യുക / ലോഗിൻ' : 'Enable Sync / Restore' })]) : el('button', {
            class: 'btn', type: 'button',
            on: { click: () => { Sync.disconnect(); rerender(); } }
          }, [DOM.mi('sync_disabled', 'sm'), el('span', { text: ml ? 'സമന്വയം നിർത്തുക' : 'Disable sync' })]),
          exportBtn,
          resetBtn
        ])
      ])
    ]);
  }

  /* ── render page ──────────────────────────────────────────────────────── */
  function render() {
    const root = el('div', { class: 'stack' });
    const rerender = () => Router.reload();

    DOM.add(root, [
      header(),
      statTiles(),
      goalCard(rerender),
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
        el('div', { class: 'stack', style: { gap: '12px' } }, Pool.courses().map(courseCard))
      ]),

      profileSettingsCard(rerender)
    ]);

    return root;
  }

  return { render };
})();

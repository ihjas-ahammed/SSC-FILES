/* ══════════════════════════════════════════════════════════════════════════
   Today — what to do next, and what the app actually knows about you.

   The tiles keep completion, proof work and recall apart on purpose: finishing
   a note is Level 1 "completed" and says nothing about recall, so the numbers
   are never merged into one flattering percentage.

   There is no level switch any more. A course does not get *set* to level 2;
   it arrives there when every note in it has had its proof worked, and at
   level 3 when every section's exercises are done. The card shows the colour
   the course has actually earned — red, amber, green — and what is owed for
   the next one.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewHome = (function () {

  const el = DOM.el;

  function nextUndone() {
    return Pool.concepts().filter(c => Progress.level(c.id) === 0)[0]
      || Pool.concepts(null, { includeExt: true }).filter(c => Progress.level(c.id) === 0)[0]
      || null;
  }
  function nextCard() {
    return Pool.deck().filter(c => !(Store.card(c.id) || {}).first)[0] || null;
  }
  function nextQuestion() {
    return Pool.objective().filter(q => !(Store.omr(q.id) || {}).first)[0] || null;
  }
  /* the next proof owed on something already read — offering proof work on a
     note nobody has opened is offering work out of order */
  function nextProof() {
    return Pool.concepts().filter(c => Progress.level(c.id) === 1)[0]
      || Pool.concepts(null, { includeExt: true }).filter(c => Progress.level(c.id) === 1)[0]
      || null;
  }

  /* the next section exercise owed, for level 3 */
  function nextExercise() {
    const qs = Pool.written();
    for (let i = 0; i < qs.length; i++) {
      if (!Progress.taskDone(qs[i])) return qs[i];
    }
    return null;
  }

  function step(n, label, detail, href, ready) {
    return el('a', { class: 'item', href: Router.href(href) }, [
      ready ? el('span', { class: 'ix', text: String(n) })
            : el('span', { class: 'ix ok' }, [DOM.mi('check', 'xs')]),
      el('span', { class: 'tt' }, [
        el('b', { text: label }),
        el('span', { text: detail })
      ]),
      el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
    ]);
  }

  function levelWord(n) {
    return (typeof I18N !== 'undefined') ? I18N.levelName(n) : ['not started', 'read', 'proofs worked', 'exercises done', 'all complete'][n || 0];
  }

  function courseCard(course) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';

    if (course.pending) {
      return el('div', { class: 'card' }, [
        el('div', { class: 'spread' }, [
          el('div', { class: 'kicker', text: course.title }),
          el('span', { class: 'badge warn', text: isMl ? 'തീരുമാനിച്ചിട്ടില്ല' : 'pending' })
        ]),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' },
          text: course.pendingNote || (isMl ? 'പാഠഭാഗങ്ങൾ തയ്യാറായിട്ടില്ല.' : 'Content has not been delivered yet.') })
      ]);
    }

    const ids = Pool.ids.concepts(course.id);
    const c = Progress.count(ids);
    const tasks = Pool.ids.written(course.id);
    const tasksDone = tasks.filter(id => Store.isProofDone('w:' + id)).length;
    const pyq = Progress.pyqState(course.id);
    const lv = Progress.courseLevel(course.id);

    const owed = isMl
      ? (c.min === 0 ? (c.total - c.l1) + ' എണ്ണം കൂടി വായിക്കാനുണ്ട് (ലെവൽ 1)'
        : c.min === 1 ? (c.total - c.l2) + ' തെളിവുകൾ കൂടി ചെയ്യാനുണ്ട് (ലെവൽ 2)'
        : c.min === 2 ? (c.total - c.l3) + ' ഭാഗങ്ങൾ കൂടി പൂർത്തിയാക്കാനുണ്ട് (ലെവൽ 3)'
        : 'എല്ലാ ഘട്ടങ്ങളും പൂർത്തിയായി')
      : (c.min === 0 ? (c.total - c.l1) + ' still to read for a red tick'
        : c.min === 1 ? (c.total - c.l2) + ' proofs still owed for an amber tick'
        : c.min === 2 ? (c.total - c.l3) + ' notes still short of their section exercises'
        : 'every level earned');

    const progressSummary = isMl
      ? c.l1 + ' വായിച്ചു · ' + c.l2 + ' തെളിവുകൾ · ' + c.l3 + ' പൂർത്തിയായി, ആകെ ' + c.total
      : c.l1 + ' read · ' + c.l2 + ' proofs · ' + c.l3 + ' green, of ' + c.total;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('a', { class: 'kicker', style: { textDecoration: 'none' },
          href: Router.href('study/' + course.id), text: course.title }),
        el('span', { class: 'badge' + (lv ? ' lv' + lv : ''),
          text: lv ? ((typeof I18N !== 'undefined' ? I18N.t('level') : 'level') + ' ' + lv + ' · ' + levelWord(lv)) : levelWord(0) })
      ]),
      el('div', { class: 'row', style: { marginTop: '10px', gap: '12px', alignItems: 'center' } }, [
        UI.levelRing(c, course.title),
        el('span', { class: 'tt' }, [
          el('b', { text: progressSummary }),
          el('span', { text: course.blurb })
        ])
      ]),
      el('div', { style: { marginTop: '12px' } }, [UI.levelBar(c)]),
      tasks.length ? el('div', { style: { marginTop: '12px' } }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'count', text: isMl ? 'പരിശീലന ചോദ്യങ്ങൾ ചെയ്തു' : 'section exercises worked' }),
          el('span', { class: 'count', text: tasksDone + '/' + tasks.length })
        ]),
        el('div', { style: { marginTop: '6px' } }, [UI.meter(tasksDone, tasks.length, 3)])
      ]) : null,
      pyq.total ? el('div', { style: { marginTop: '12px' } }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'count', text: isMl ? 'പരീക്ഷാ പേപ്പറുകൾ · ലെവൽ 4' : 'past papers · level 4' }),
          el('span', { class: 'count', text: pyq.done + '/' + pyq.total })
        ]),
        el('div', { style: { marginTop: '6px' } }, [UI.meter(pyq.done, pyq.total, 4)])
      ]) : null,
      el('p', { class: 'small muted', style: { margin: '10px 0 0' }, text: owed })
    ]);
  }

  /* ── sync ─────────────────────────────────────────────────────────────── */
  function syncCard() {
    const id = Store.identity();
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const host = el('div', { class: 'card tint' });
    const state = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });
    const dot = el('span', { class: 'badge ok', text: Sync.status().key });

    function paint(last) {
      const s = Sync.status();
      const when = s.last && s.last.at
        ? (isMl ? ' · അവസാനം പരിശോധിച്ചത് ' + UI.ago(s.last.at) : ' · last checked ' + UI.ago(s.last.at))
        : '';
      state.textContent = (last && last.msg)
        ? last.msg + when
        : (isMl
            ? id.name + ' · ' + id.roll + ' എന്നതിൽ പ്രവേശിച്ചിരിക്കുന്നു. നിങ്ങളുടെ എല്ലാ ഉപകരണങ്ങളിലും പഠന പുരോഗതി തനിയെ ക്രമീകരിക്കപ്പെടും' + when + '.'
            : 'Signed in as ' + id.name + ' · ' + id.roll + '. Progress merges across every device '
              + 'that signs in with these two, on its own' + when + '. It is a pass key, not a password.');
    }
    Sync.watch(paint);
    paint(Sync.status().last);

    DOM.add(host, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('sync_title') : 'Your record · syncing automatically' }),
        dot
      ]),
      el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
        el('button', { class: 'btn', type: 'button',
          text: (typeof I18N !== 'undefined') ? I18N.t('sign_out') : 'Sign out',
          on: { click: function () {
            const promptMsg = isMl
              ? 'പുറത്തുകടക്കണോ? നിങ്ങളുടെ പുരോഗതി ഈ ഉപകരണത്തിലും ക്ലൗഡിലും സുരക്ഷിതമായിരിക്കും.'
              : 'Sign out? Progress stays on this device and in the cloud record.';
            if (!window.confirm(promptMsg)) return;
            Sync.disconnect();
            location.reload();
          } } })
      ]),
      state
    ]);
    return host;
  }

  function render() {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const all = Pool.ids.concepts();
    const overall = Progress.count(all);
    const s = Store.summary(all, Pool.ids.cards(), Pool.ids.objective(), Pool.ids.proofs());
    const note = nextUndone(), card = nextCard(), q = nextQuestion();
    const pf = nextProof(), ex = nextExercise();
    const exTarget = ex ? (Pool.concept((ex.tests || [])[0]) || null) : null;
    const qTarget = q ? (Pool.concept((q.tests || [])[0]) || null) : null;

    const root = el('div', { class: 'stack' });

    const lvlWord = (typeof I18N !== 'undefined') ? I18N.t('level') : 'level';
    const tiles = [
      UI.stat(overall.l1 + '/' + overall.total, (typeof I18N !== 'undefined') ? I18N.t('stat_read') : 'Read', lvlWord + ' 1',
        UI.levelBar(overall, { key: false })),
      UI.stat(s.cards.tried ? DOM.pct(s.cards.got, s.cards.tried) + '%' : '—',
        (typeof I18N !== 'undefined') ? I18N.t('stat_recall') : 'First-try recall',
        isMl ? (s.cards.tried + ' / ' + s.cards.total + ' ശ്രമിച്ചു') : (s.cards.tried + ' of ' + s.cards.total + ' tried')),
      UI.stat(s.omr.locked ? DOM.pct(s.omr.correct, s.omr.locked) + '%' : '—',
        (typeof I18N !== 'undefined') ? I18N.t('stat_correct') : 'First-try correct',
        isMl ? (s.omr.locked + ' / ' + s.omr.total + ' രേഖപ്പെടുത്തി') : (s.omr.locked + ' of ' + s.omr.total + ' locked')),
      UI.stat(overall.l2 + '/' + overall.total, (typeof I18N !== 'undefined') ? I18N.t('stat_proofs') : 'Proofs worked', lvlWord + ' 2',
        UI.meter(overall.l2, overall.total, 2)),
      UI.stat(overall.l3 + '/' + overall.total, (typeof I18N !== 'undefined') ? I18N.t('stat_exercises') : 'Sections green', lvlWord + ' 3',
        UI.meter(overall.l3, overall.total, 3))
    ];

    const loop = [
      step(1,
        note ? (isMl ? 'വായിക്കുക: ' + note.title : 'Read: ' + note.title)
             : (isMl ? 'എല്ലാ പാഠഭാഗങ്ങളും ഒരു തവണ വായിച്ചു' : 'Every syllabus note has been read once'),
        note ? (Pool.sectionTitle(note.sec) + (Pool.isExt(note) ? (isMl ? ' · പാഠ്യപദ്ധതിക്ക് പുറത്ത്' : ' · outside syllabus') : ''))
             : (isMl ? 'വീണ്ടും വായിക്കാൻ എപ്പോഴും ലഭ്യമാണ്' : 'Re-reading is always available'),
        note ? 'note/' + note.id : 'study', !!note),
      step(2,
        card ? (isMl ? 'ഓർമ്മയിൽ നിന്ന് പറയുക: ' + card.title : 'State it from memory')
             : (isMl ? 'എല്ലാ പ്രസ്താവനകളും ഒരു തവണ ശ്രമിച്ചു' : 'Every statement has had one attempt'),
        card ? card.title : (isMl ? 'വീണ്ടും പരിശീലിക്കാം' : 'Re-attempts are allowed but never recorded'),
        'recall', !!card),
      step(3,
        q ? (isMl ? 'അടുത്ത ചോദ്യത്തിന് ഉത്തരം നൽകുക' : 'Answer the next question')
          : (isMl ? 'എല്ലാ ഒബ്ജക്റ്റീവ് ചോദ്യങ്ങളും ചെയ്തു' : 'Every question has been locked once'),
        q ? ((typeof I18N !== 'undefined' ? I18N.kind(q.type) : q.type) + ' · ' + Pool.sectionTitle(q.sec))
          : (isMl ? 'വിശദമായ ഉത്തരങ്ങൾ പരിശോധിക്കാം' : 'Review the worked answers any time'),
        q ? (qTarget ? 'note/' + qTarget.id : 'omr/' + q.id) : 'study', !!q),
      step(4,
        pf ? (isMl ? 'തെളിവ് ചെയ്യുക: ' + pf.title : 'Work the proof: ' + pf.title)
           : (isMl ? 'വായിച്ച എല്ലാ തെളിവുകളും ചെയ്തു കഴിഞ്ഞു' : 'Every proof you have read is worked through'),
        pf ? (Pool.sectionTitle(pf.sec) + (isMl ? ' · ലെവൽ 2 ലഭിക്കുന്നു' : ' · earns level 2'))
           : (isMl ? 'ലെവൽ 2 പൂർത്തിയായി' : 'Level 2 is clear'),
        pf ? 'note/' + pf.id : 'study', !!pf),
      step(5,
        ex ? (isMl ? 'പരിശീലന ചോദ്യം ചെയ്യുക: ' + (ex.title || ex.id) : 'Work the exercise: ' + (ex.title || ex.id))
           : (isMl ? 'എല്ലാ പരിശീലന ചോദ്യങ്ങളും ചെയ്തു' : 'Every delivered exercise is worked through'),
        ex ? ((exTarget ? Pool.sectionTitle(exTarget.sec) + ' · ' : '') + (isMl ? 'ലെവൽ 3 ലഭിക്കുന്നു' : 'earns level 3'))
           : (isMl ? 'ലെവൽ 3 പൂർത്തിയായി' : 'Level 3 is clear for everything delivered'),
        ex && exTarget ? 'note/' + exTarget.id : 'study', !!ex)
    ];

    DOM.add(root, [
      UI.title((typeof I18N !== 'undefined') ? I18N.t('today_title') : 'Today'),
      UI.mockBanner(),

      DOM.stagger(el('div', { class: 'stats' }, tiles)),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('the_loop') : 'The loop' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 12px' },
          text: (typeof I18N !== 'undefined') ? I18N.t('the_loop_desc') : 'Read it, state it from memory...' }),
        el('div', { class: 'list' }, loop)
      ]),

      el('div', {}, [
        el('div', { class: 'spread', style: { marginBottom: '10px' } }, [
          el('h2', { text: (typeof I18N !== 'undefined') ? I18N.t('courses') : 'Courses' }),
          el('a', { class: 'chip', href: Router.href('study'),
            text: (typeof I18N !== 'undefined') ? I18N.t('open_syllabus') : 'Open the syllabus' })
        ]),
        el('p', { class: 'small muted', style: { margin: '0 0 10px' },
          text: (typeof I18N !== 'undefined') ? I18N.t('course_bar_desc') : 'A course carries the colour of its weakest note...' }),
        el('div', { class: 'stack', style: { gap: '12px' } },
          Pool.courses().map(course => courseCard(course)))
      ]),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('colours_meaning') : 'What the three colours mean' }),
        el('div', { class: 'stack', style: { gap: '8px', marginTop: '10px' } }, [
          el('div', { class: 'row' }, [
            el('span', { class: 'badge lv1', text: lvlWord + ' 1' }),
            el('span', { class: 'small muted', text: (typeof I18N !== 'undefined') ? I18N.t('lv1_desc') : 'you have read it' })
          ]),
          el('div', { class: 'row' }, [
            el('span', { class: 'badge lv2', text: lvlWord + ' 2' }),
            el('span', { class: 'small muted',
              text: (typeof I18N !== 'undefined') ? I18N.t('lv2_desc') : 'you produced its proof yourself' })
          ]),
          el('div', { class: 'row' }, [
            el('span', { class: 'badge lv3', text: lvlWord + ' 3' }),
            el('span', { class: 'small muted',
              text: (typeof I18N !== 'undefined') ? I18N.t('lv3_desc') : 'every exercise in its section is worked through' })
          ])
        ]),
        el('p', { class: 'small muted', style: { margin: '12px 0 0' },
          text: (typeof I18N !== 'undefined') ? I18N.t('colours_foot') : 'A module or a course takes the colour...' })
      ]),

      syncCard()
    ]);

    return root;
  }

  return { render };
})();

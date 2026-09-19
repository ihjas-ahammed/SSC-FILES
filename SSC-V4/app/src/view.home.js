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

  /* One course, and the level it has EARNED. The ring is coloured by the
     weakest note in it, because a course is not at level 2 while something in
     it is still unread — and the bar underneath shows how the three levels are
     spread, which a single percentage cannot. */
  const LEVEL_WORD = ['not started', 'read', 'proofs worked', 'exercises done', 'all complete'];

  function courseCard(course) {
    if (course.pending) {
      return el('div', { class: 'card' }, [
        el('div', { class: 'spread' }, [
          el('div', { class: 'kicker', text: course.title }),
          el('span', { class: 'badge warn', text: 'pending' })
        ]),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' },
          text: course.pendingNote || 'Content has not been delivered yet.' })
      ]);
    }

    const ids = Pool.ids.concepts(course.id);
    const c = Progress.count(ids);
    const tasks = Pool.ids.written(course.id);
    const tasksDone = tasks.filter(id => Store.isProofDone('w:' + id)).length;
    const pyq = Progress.pyqState(course.id);
    const lv = Progress.courseLevel(course.id);

    const owed = c.min === 0 ? (c.total - c.l1) + ' still to read for a red tick'
      : c.min === 1 ? (c.total - c.l2) + ' proofs still owed for an amber tick'
      : c.min === 2 ? (c.total - c.l3) + ' notes still short of their section exercises'
      : lv < 4 ? (pyq.total
          ? (pyq.total - pyq.done) + ' past-paper ' + DOM.plural(pyq.total - pyq.done, 'question')
            + ' between this and level 4'
          : 'level 4 needs the JAM past papers, which are not delivered yet')
      : 'every level earned, past papers included';

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('a', { class: 'kicker', style: { textDecoration: 'none' },
          href: Router.href('study/' + course.id), text: course.title }),
        el('span', { class: 'badge' + (lv ? ' lv' + lv : ''),
          text: lv ? 'level ' + lv + ' · ' + LEVEL_WORD[lv] : 'not started' })
      ]),
      el('div', { class: 'row', style: { marginTop: '10px', gap: '12px', alignItems: 'center' } }, [
        UI.levelRing(c, course.title),
        el('span', { class: 'tt' }, [
          el('b', { text: c.l1 + ' read · ' + c.l2 + ' proofs · ' + c.l3 + ' green, of ' + c.total }),
          el('span', { text: course.blurb })
        ])
      ]),
      el('div', { style: { marginTop: '12px' } }, [UI.levelBar(c)]),
      tasks.length ? el('div', { style: { marginTop: '12px' } }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'count', text: 'section exercises worked' }),
          el('span', { class: 'count', text: tasksDone + '/' + tasks.length })
        ]),
        el('div', { style: { marginTop: '6px' } }, [UI.meter(tasksDone, tasks.length, 3)])
      ]) : null,
      pyq.total ? el('div', { style: { marginTop: '12px' } }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'count', text: 'JAM past papers · level 4' }),
          el('span', { class: 'count', text: pyq.done + '/' + pyq.total })
        ]),
        el('div', { style: { marginTop: '6px' } }, [UI.meter(pyq.done, pyq.total, 4)])
      ]) : null,
      el('p', { class: 'small muted', style: { margin: '10px 0 0' }, text: owed })
    ]);
  }

  /* ── sync ─────────────────────────────────────────────────────────────── */
  /* There is no Sync now button any more, because there was never anything to
     decide: every change pushes itself, coming back to the tab pulls, and a
     timer pulls while you are reading. A button for a thing that already
     happens is a button that makes you wonder whether it happened. What is
     left is the record you are signed into, what the last sync did, and the
     way out. */
  function syncCard() {
    const id = Store.identity();
    const host = el('div', { class: 'card tint' });
    const state = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });
    const dot = el('span', { class: 'badge ok', text: Sync.status().key });

    function paint(last) {
      const s = Sync.status();
      const when = s.last && s.last.at
        ? ' · last checked ' + UI.ago(s.last.at)
        : '';
      state.textContent = (last && last.msg)
        ? last.msg + when
        : 'Signed in as ' + id.name + ' · ' + id.roll + '. Progress merges across every device '
          + 'that signs in with these two, on its own' + when + '. It is a pass key, not a password.';
    }
    Sync.watch(paint);
    paint(Sync.status().last);

    DOM.add(host, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Your record · syncing automatically' }),
        dot
      ]),
      el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
        el('button', { class: 'btn', type: 'button', text: 'Sign out',
          on: { click: function () {
            if (!window.confirm('Sign out? Progress stays on this device and in the cloud record.')) return;
            Sync.disconnect();
            location.reload();
          } } })
      ]),
      state
    ]);
    return host;
  }

  function render() {
    const all = Pool.ids.concepts();
    const overall = Progress.count(all);
    const s = Store.summary(all, Pool.ids.cards(), Pool.ids.objective(), Pool.ids.proofs());
    const note = nextUndone(), card = nextCard(), q = nextQuestion();
    const pf = nextProof(), ex = nextExercise();
    const exTarget = ex ? (Pool.concept((ex.tests || [])[0]) || null) : null;
    const qTarget = q ? (Pool.concept((q.tests || [])[0]) || null) : null;

    const root = el('div', { class: 'stack' });

    const tiles = [
      UI.stat(overall.l1 + '/' + overall.total, 'Read', 'level 1',
        UI.levelBar(overall, { key: false })),
      UI.stat(s.cards.tried ? DOM.pct(s.cards.got, s.cards.tried) + '%' : '—',
        'First-try recall',
        s.cards.tried + ' of ' + s.cards.total + ' tried'),
      UI.stat(s.omr.locked ? DOM.pct(s.omr.correct, s.omr.locked) + '%' : '—',
        'First-try correct',
        s.omr.locked + ' of ' + s.omr.total + ' locked'),
      UI.stat(overall.l2 + '/' + overall.total, 'Proofs worked', 'level 2',
        UI.meter(overall.l2, overall.total, 2)),
      UI.stat(overall.l3 + '/' + overall.total, 'Sections green', 'level 3',
        UI.meter(overall.l3, overall.total, 3))
    ];

    const loop = [
      step(1, note ? 'Read: ' + note.title : 'Every syllabus note has been read once',
        note ? (Pool.sectionTitle(note.sec) + (Pool.isExt(note) ? ' · outside syllabus' : '')) : 'Re-reading is always available',
        note ? 'note/' + note.id : 'study', !!note),
      step(2, card ? 'State it from memory' : 'Every statement has had one attempt',
        card ? card.title : 'Re-attempts are allowed but never recorded',
        'recall', !!card),
      /* Questions live inside the note that teaches them now, so the step goes
         to that note rather than to a page of questions. */
      step(3, q ? 'Answer the next question' : 'Every question has been locked once',
        q ? q.type + ' · ' + Pool.sectionTitle(q.sec) : 'Review the worked answers any time',
        q ? (qTarget ? 'note/' + qTarget.id : 'omr/' + q.id) : 'study', !!q),
      step(4, pf ? 'Work the proof: ' + pf.title : 'Every proof you have read is worked through',
        pf ? (Pool.sectionTitle(pf.sec) + ' · earns level 2') : 'Level 2 is clear',
        pf ? 'note/' + pf.id : 'study', !!pf),
      step(5, ex ? 'Work the exercise: ' + (ex.title || ex.id)
              : 'Every delivered exercise is worked through',
        ex ? ((exTarget ? Pool.sectionTitle(exTarget.sec) + ' · ' : '') + 'earns level 3')
           : 'Level 3 is clear for everything delivered',
        ex && exTarget ? 'note/' + exTarget.id : 'study', !!ex)
    ];

    DOM.add(root, [
      UI.title('Today'),
      UI.mockBanner(),

      DOM.stagger(el('div', { class: 'stats' }, tiles)),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: 'The loop' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 12px' },
          text: 'Read it, state it from memory, answer questions on it, produce the proof '
            + 'yourself, then work the section\'s exercises. Feedback comes after the attempt, '
            + 'never before.' }),
        el('div', { class: 'list' }, loop)
      ]),

      el('div', {}, [
        el('div', { class: 'spread', style: { marginBottom: '10px' } }, [
          el('h2', { text: 'Courses' }),
          el('a', { class: 'chip', href: Router.href('study'), text: 'Open the syllabus' })
        ]),
        el('p', { class: 'small muted', style: { margin: '0 0 10px' },
          text: 'A course carries the colour of its weakest note. Nothing here is switched on '
            + 'or off — the level is whatever the work says it is.' }),
        el('div', { class: 'stack', style: { gap: '12px' } },
          Pool.courses().map(course => courseCard(course)))
      ]),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'What the three colours mean' }),
        el('div', { class: 'stack', style: { gap: '8px', marginTop: '10px' } }, [
          el('div', { class: 'row' }, [
            el('span', { class: 'badge lv1', text: 'level 1' }),
            el('span', { class: 'small muted', text: 'you have read it' })
          ]),
          el('div', { class: 'row' }, [
            el('span', { class: 'badge lv2', text: 'level 2' }),
            el('span', { class: 'small muted',
              text: 'you produced its proof yourself (definitions and examples arrive here with the tick)' })
          ]),
          el('div', { class: 'row' }, [
            el('span', { class: 'badge lv3', text: 'level 3' }),
            el('span', { class: 'small muted',
              text: 'every Bartle exercise in its section is worked through' })
          ])
        ]),
        el('p', { class: 'small muted', style: { margin: '12px 0 0' },
          text: 'A module or a course takes the colour of the weakest thing inside it, so all '
            + 'red before red, all amber before amber, all green before green.' })
      ]),

      syncCard()
    ]);

    return root;
  }

  return { render };
})();

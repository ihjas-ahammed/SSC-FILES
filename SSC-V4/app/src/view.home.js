/* ══════════════════════════════════════════════════════════════════════════
   Today — what to do next, and what the app actually knows about you.

   The tiles keep completion, proof work and recall apart on purpose: finishing
   a note is Level 1 "completed" and says nothing about recall, so the numbers
   are never merged into one flattering percentage.

   This screen also owns the level switch. The app opens at Level 1 for
   everyone and stays there until Level 2 is unlocked — by finishing a whole
   course at Level 1, or deliberately, here in settings. Nothing promotes a
   learner silently.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewHome = (function () {

  const el = DOM.el;

  function nextUndone() {
    return Pool.concepts().filter(c => Progress.state(c.id) === 'none')[0] || null;
  }
  function nextCard() {
    return Pool.deck().filter(c => !(Store.card(c.id) || {}).first)[0] || null;
  }
  function nextQuestion() {
    return Pool.objective().filter(q => !(Store.omr(q.id) || {}).first)[0] || null;
  }
  /* only from courses actually held to Level 2 — offering proof work on a
     course still at Level 1 is offering work the learner has not opted into */
  function nextProof() {
    return Pool.concepts().filter(c =>
      c.proof && Store.level(Progress.courseIdOf(c)) === 2 && !Store.isProofDone(c.id))[0] || null;
  }

  function step(n, label, detail, href, ready) {
    return el('a', { class: 'item', href: Router.href(href) }, [
      el('span', { class: 'ix' + (ready ? '' : ' ok'), text: ready ? String(n) : '✓' }),
      el('span', { class: 'tt' }, [
        el('b', { text: label }),
        el('span', { text: detail })
      ]),
      el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
    ]);
  }

  /* One course, with its OWN level. The ring counts whatever "done" means for
     this course, so a course switched to Level 2 shows its proof work and a
     course still at Level 1 is untouched by that decision. */
  function courseCard(course, repaint) {
    const ids = Pool.ids.concepts(course.id);
    const c = Progress.count(ids);
    const at = Store.level(course.id);
    const pc = DOM.pct(c.done, c.total);

    const ring = el('span', {
      class: 'ring' + (c.total && c.done === c.total ? ' done' : ''),
      role: 'img', 'aria-label': c.done + ' of ' + c.total + ' complete at level ' + at
    }, [el('i', { text: c.total ? c.done + '/' + c.total : '—' })]);
    window.requestAnimationFrame(() => ring.style.setProperty('--p', pc));

    if (course.pending) {
      return el('div', { class: 'card' }, [
        el('div', { class: 'spread' }, [
          el('div', { class: 'kicker', text: course.title }),
          el('span', { class: 'badge warn', text: 'level 3' })
        ]),
        el('p', { class: 'small muted', style: { margin: '8px 0 0' },
          text: course.pendingNote || 'Content arrives at Level 3.' })
      ]);
    }

    const proofIds = Pool.ids.proofs(course.id);
    const proofsDone = proofIds.filter(Store.isProofDone).length;

    return el('div', { class: 'card' }, [
      el('div', { class: 'spread' }, [
        el('a', { class: 'kicker', style: { textDecoration: 'none' },
          href: Router.href('study/' + course.id), text: course.title }),
        UI.levelBadge(course.id)
      ]),
      el('div', { class: 'row', style: { marginTop: '10px', gap: '12px', alignItems: 'center' } }, [
        ring,
        el('span', { class: 'tt' }, [
          el('b', { text: c.done + ' of ' + c.total + (at === 2 ? ' at level 2' : ' ticked') }),
          el('span', { text: at === 2
            ? (c.part ? c.part + ' ticked with the proof still outstanding' : course.blurb)
            : course.blurb })
        ])
      ]),
      at === 2 && proofIds.length
        ? el('div', { style: { marginTop: '10px' } }, [
            el('div', { class: 'spread' }, [
              el('span', { class: 'count', text: 'proofs worked' }),
              el('span', { class: 'count', text: proofsDone + '/' + proofIds.length })
            ]),
            el('div', { style: { marginTop: '6px' } }, [UI.meter(proofsDone, proofIds.length)])
          ])
        : null,
      el('div', { style: { marginTop: '12px' } }, [UI.levelSwitch(course, repaint)]),
      el('p', { class: 'small muted', style: { margin: '8px 0 0' },
        text: at === 2
          ? 'At Level 2 a note counts as done once its proof is worked through.'
          : (Store.unlocked(course.id)
              ? 'Level 2 is unlocked here — switch when you want the proofs to count.'
              : 'Finish this course at Level 1 and Level 2 unlocks by itself.') })
    ]);
  }

  /* ── sync ─────────────────────────────────────────────────────────────── */
  /* Signed in is the only state this screen can be reached in, so this is an
     account card, not a connect form. */
  function syncCard() {
    const id = Store.identity();
    const host = el('div', { class: 'card tint' });
    const state = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });

    function paint(last) {
      const s = Sync.status();
      state.textContent = (last && last.msg) ? last.msg
        : 'Signed in as ' + id.name + ' · ' + id.roll + '. Progress merges across every device '
          + 'that signs in with these two. It is a pass key, not a password.';
    }
    Sync.watch(paint);
    paint(Sync.status().last);

    DOM.add(host, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Your record' }),
        el('span', { class: 'badge ok', text: Sync.status().key })
      ]),
      el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
        el('button', { class: 'btn primary', type: 'button', text: 'Sync now',
          on: { click: function () { Sync.now({}).then(r => paint({ msg: r && r.msg })); } } }),
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

  /* ── device settings ──────────────────────────────────────────────────── */
  function settings() {
    const themeBtn = el('button', { class: 'chip', type: 'button' });
    function paint() { themeBtn.textContent = 'Theme: ' + Store.pref('theme', 'auto'); }
    themeBtn.addEventListener('click', function () {
      const order = ['auto', 'light', 'dark'];
      const next = order[(order.indexOf(Store.pref('theme', 'auto')) + 1) % 3];
      Store.setPref('theme', next);
      Theme.apply();
      paint();
    });
    paint();

    const exportBtn = el('button', { class: 'chip', type: 'button', text: 'Copy progress JSON' });
    exportBtn.addEventListener('click', function () {
      const text = Store.exportJSON();
      const done = () => DOM.announce('Progress JSON copied to the clipboard.');
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(done, () => window.prompt('Copy your progress:', text));
      } else window.prompt('Copy your progress:', text);
    });

    const resetBtn = el('button', { class: 'chip', type: 'button', text: 'Reset progress' });
    resetBtn.addEventListener('click', function () {
      if (window.confirm('Clear all ticks, attempts and drafts on this device?')) {
        Store.reset();
        Router.reload();
        DOM.announce('Progress cleared.');
      }
    });

    return el('div', { class: 'card tint' }, [
      el('div', { class: 'kicker', text: 'This device' }),
      el('div', { class: 'row', style: { marginTop: '10px' } }, [themeBtn, exportBtn, resetBtn]),
      el('p', { class: 'small muted', style: { margin: '10px 0 0' },
        text: Store.isVolatile()
          ? 'Storage is blocked in this browser, so progress lasts only for this session. Connect sync above to keep it.'
          : 'Progress is stored in this browser. Connect sync above to carry it to another device.' })
    ]);
  }

  function render() {
    /* Any course at Level 2 is enough to make the proof surfaces worth
       showing; the numbers themselves are per course, on the cards below. */
    const anyL2 = Pool.courses().some(c => Store.level(c.id) === 2);
    const all = Pool.ids.concepts();
    const overall = Progress.count(all);
    const s = Store.summary(all, Pool.ids.cards(), Pool.ids.objective(), Pool.ids.proofs());
    const note = nextUndone(), card = nextCard(), q = nextQuestion(), pf = nextProof();

    const root = el('div', { class: 'stack' });

    const tiles = [
      UI.stat(overall.done + '/' + overall.total, 'Notes complete',
        anyL2 ? 'each at its own level' : 'ladder level 1',
        UI.meter(overall.done, overall.total)),
      UI.stat(s.cards.tried ? DOM.pct(s.cards.got, s.cards.tried) + '%' : '—',
        'First-try recall',
        s.cards.tried + ' of ' + s.cards.total + ' tried'),
      UI.stat(s.omr.locked ? DOM.pct(s.omr.correct, s.omr.locked) + '%' : '—',
        'First-try correct',
        s.omr.locked + ' of ' + s.omr.total + ' locked')
    ];
    if (anyL2) {
      const l2ids = Pool.courses().filter(c => Store.level(c.id) === 2)
        .reduce((acc, c) => acc.concat(Pool.ids.proofs(c.id)), []);
      const pdone = l2ids.filter(Store.isProofDone).length;
      tiles.push(UI.stat(pdone + '/' + l2ids.length, 'Proofs worked', 'ladder level 2',
        UI.meter(pdone, l2ids.length)));
    }

    const loop = [
      step(1, note ? 'Read: ' + note.title : 'Every note has been read once',
        note ? Pool.sectionTitle(note.sec) : 'Re-reading is always available',
        note ? 'note/' + note.id : 'study', !!note),
      step(2, card ? 'State it from memory' : 'Every statement has had one attempt',
        card ? card.title : 'Re-attempts are allowed but never recorded',
        'recall', !!card),
      step(3, q ? 'Answer the next question' : 'Every question has been locked once',
        q ? q.type + ' · ' + Pool.sectionTitle(q.sec) : 'Review the worked answers any time',
        q ? 'omr/' + q.id : 'omr', !!q)
    ];
    if (anyL2) {
      loop.push(step(4, pf ? 'Work the proof: ' + pf.title : 'Every proof has been worked through',
        pf ? Pool.sectionTitle(pf.sec) : 'Levels 3–5 need delayed evidence, which is not built yet',
        pf ? 'note/' + pf.id : 'study', !!pf));
    }

    DOM.add(root, [
      UI.title('Today'),
      UI.mockBanner(),

      DOM.stagger(el('div', { class: 'stats' }, tiles)),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: 'The loop' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 12px' },
          text: anyL2
            ? 'Read it → state it from memory → answer questions on it → produce the proof yourself. Feedback comes after the attempt, never before.'
            : 'Read it → state it from memory → answer questions on it. Feedback comes after the attempt, never before.' }),
        el('div', { class: 'list' }, loop)
      ]),

      el('div', {}, [
        el('div', { class: 'spread', style: { marginBottom: '10px' } }, [
          el('h2', { text: 'Courses' }),
          el('a', { class: 'chip', href: Router.href('study'), text: 'Open the syllabus' })
        ]),
        el('p', { class: 'small muted', style: { margin: '0 0 10px' },
          text: 'Each course carries its own level. Raising one does not raise the others.' }),
        el('div', { class: 'stack', style: { gap: '12px' } },
          Pool.courses().map(course => courseCard(course, function () { Router.reload(); })))
      ]),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'Mastery ladder' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 10px' },
          text: anyL2
            ? 'A tick earns level 1. Working a proof through earns level 2 on that proof, in the courses you have switched. Levels 3–5 need delayed evidence, which is not built yet.'
            : 'A tick earns level 1 and nothing more. Recall levels need evidence, and that evidence is collected from Level 2 onwards.' }),
        UI.ladder(false, false)
      ]),

      syncCard(),
      settings()
    ]);

    return root;
  }

  return { render };
})();

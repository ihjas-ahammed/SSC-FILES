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
    return Pool.concepts().filter(c => !Store.isDone(c.id))[0] || null;
  }
  function nextCard() {
    return Pool.deck().filter(c => !(Store.card(c.id) || {}).first)[0] || null;
  }
  function nextQuestion() {
    return Pool.objective().filter(q => !(Store.omr(q.id) || {}).first)[0] || null;
  }
  function nextProof() {
    return Pool.concepts().filter(c => c.proof && !Store.isProofDone(c.id))[0] || null;
  }

  /* A course finished at Level 1 is the earned route into Level 2. It has to
     be a real course with real content — a `pending` course, or one with no
     concepts loaded, must never count as "finished". */
  function finishedCourse() {
    return Pool.courses().filter(function (course) {
      if (course.pending) return false;
      const ids = Pool.ids.concepts(course.id);
      return ids.length > 0 && ids.every(Store.isDone);
    })[0] || null;
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

  function courseRow(course) {
    const ids = Pool.ids.concepts(course.id);
    const done = ids.filter(Store.isDone).length;
    const pc = DOM.pct(done, ids.length);
    const ring = el('span', {
      class: 'ring' + (ids.length && done === ids.length ? ' done' : ''),
      role: 'img', 'aria-label': done + ' of ' + ids.length + ' ticked'
    }, [el('i', { text: ids.length ? done + '/' + ids.length : '—' })]);
    window.requestAnimationFrame(() => ring.style.setProperty('--p', pc));

    const proofIds = Pool.ids.proofs(course.id);
    const proofsDone = proofIds.filter(Store.isProofDone).length;

    return el('a', { class: 'item', href: Router.href('study/' + course.id) }, [
      course.pending ? el('span', { class: 'ix', text: '·' }) : ring,
      el('span', { class: 'tt' }, [
        el('b', { text: course.title }),
        el('span', { text: course.pending ? 'content arrives at Level 3'
          : (Store.level() === 2 && proofIds.length)
            ? course.blurb + ' · ' + proofsDone + '/' + proofIds.length + ' proofs worked'
            : course.blurb })
      ]),
      course.pending
        ? el('span', { class: 'badge warn', text: 'level 3' })
        : el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
    ]);
  }

  /* ── the level switch ─────────────────────────────────────────────────── */
  function levelCard() {
    const host = el('div', { class: 'card glass' });
    const body = el('div', {});

    function paint() {
      DOM.clear(body);
      const at = Store.level();
      const open = Store.unlocked();
      const earned = finishedCourse();

      const switcher = el('div', { class: 'row', style: { marginTop: '10px' } },
        [1, 2].map(function (n) {
          const can = n === 1 || open;
          const b = el('button', {
            class: 'chip', type: 'button', 'aria-pressed': String(at === n),
            disabled: !can, text: 'Level ' + n
          });
          b.addEventListener('click', function () {
            Store.setLevel(n);
            DOM.announce('Switched to Level ' + Store.level() + '.');
            Router.reload();
          });
          return b;
        }));

      DOM.add(body, [
        el('p', { class: 'small muted', style: { margin: '4px 0 0' },
          text: at === 2
            ? 'Level 2 adds proof work: mark a proof as worked through and it counts, per proof, towards the second rung.'
            : 'Level 1 tracks what you have encountered and how your first attempts went. Level 2 adds proof work.' }),
        switcher
      ]);

      if (!open) {
        /* boot.js has already granted the unlock if a course is finished, so
           reaching here means it has not been earned — the honest offer is to
           say so and let the learner take it anyway. */
        DOM.add(body, [
          el('p', { class: 'small muted', style: { margin: '10px 0 0' },
            text: 'Level 2 unlocks by itself when a whole course is ticked at Level 1. '
              + 'You can also turn it on now if you would rather not wait.' }),
          el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
            el('button', {
              class: 'btn', type: 'button', text: 'Turn on Level 2 anyway',
              on: { click: function () {
                Store.unlock(true);
                Store.setLevel(2);
                DOM.announce('Level 2 unlocked.');
                Router.reload();
              } }
            })
          ])
        ]);
      } else {
        DOM.add(body, [
          earned && at === 1 ? el('p', { class: 'small muted', style: { margin: '10px 0 0' },
            text: 'You finished ' + earned.title + ' at Level 1, so Level 2 is open. '
              + 'Switching is still yours to make.' }) : null,
          el('div', { class: 'btn-row', style: { marginTop: '10px' } }, [
            el('button', {
              class: 'chip', type: 'button', text: 'Lock Level 2 again',
              on: { click: function () {
                Store.unlock(false);
                DOM.announce('Back to Level 1. Nothing you recorded was removed.');
                Router.reload();
              } }
            })
          ])
        ]);
      }
    }

    DOM.add(host, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Mastery level' }),
        UI.levelBadge()
      ]),
      body
    ]);
    paint();
    return host;
  }

  /* ── sync ─────────────────────────────────────────────────────────────── */
  function syncCard() {
    const id = Sync.identity();
    const host = el('div', { class: 'card tint' });

    const nameIn = el('input', { class: 'tin', type: 'text', id: 'sync-name',
      placeholder: 'Name', autocomplete: 'name', spellcheck: 'false' });
    const rollIn = el('input', { class: 'tin', type: 'text', id: 'sync-roll',
      placeholder: 'Roll number', autocomplete: 'off', spellcheck: 'false' });
    nameIn.value = id.name;
    rollIn.value = id.roll;

    const state = el('p', { class: 'small muted', style: { margin: '10px 0 0' } });
    const btnRow = el('div', { class: 'btn-row', style: { marginTop: '10px' } });

    function paint(last) {
      const on = Sync.on();
      DOM.clear(btnRow);
      DOM.add(btnRow, [
        el('button', {
          class: 'btn primary', type: 'button', text: on ? 'Sync now' : 'Connect',
          on: { click: function () {
            if (on) Sync.now({}).then(r => paint(r && { ok: r.ok, msg: r.msg }));
            else Sync.connect(nameIn.value, rollIn.value).then(function (r) {
              paint(r && { ok: r.ok, msg: r.msg });
              if (r && r.ok) Router.reload();
            });
          } }
        }),
        on ? el('button', {
          class: 'btn', type: 'button', text: 'Disconnect',
          on: { click: function () { Sync.disconnect(); Router.reload(); } }
        }) : null
      ]);

      const s = Sync.status();
      state.textContent = last && last.msg ? last.msg
        : on ? 'Connected as ' + s.key + '. Progress merges across every device using this name and roll number.'
        : 'Enter the same name and roll number on another device and progress follows you. '
          + 'This is a pass key, not a password — anyone who knows both can read this record.';
    }

    Sync.watch(function (last) { paint(last); });
    paint(Sync.status().last);

    DOM.add(host, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'kicker', text: 'Sync across devices' }),
        el('span', { class: 'badge' + (Sync.on() ? ' ok' : ''),
          text: Sync.on() ? 'connected' : 'this device only' })
      ]),
      el('div', { class: 'row', style: { marginTop: '10px', gap: '8px' } }, [nameIn, rollIn]),
      btnRow,
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
    const at = Store.level();
    const s = Store.summary(Pool.ids.concepts(), Pool.ids.cards(),
      Pool.ids.objective(), Pool.ids.proofs());
    const note = nextUndone(), card = nextCard(), q = nextQuestion(), pf = nextProof();

    const root = el('div', { class: 'stack' });

    const tiles = [
      UI.stat(s.notes.done + '/' + s.notes.total, 'Notes ticked', 'ladder level 1',
        UI.meter(s.notes.done, s.notes.total)),
      UI.stat(s.cards.tried ? DOM.pct(s.cards.got, s.cards.tried) + '%' : '—',
        'First-try recall',
        s.cards.tried + ' of ' + s.cards.total + ' tried'),
      UI.stat(s.omr.locked ? DOM.pct(s.omr.correct, s.omr.locked) + '%' : '—',
        'First-try correct',
        s.omr.locked + ' of ' + s.omr.total + ' locked')
    ];
    if (at === 2) {
      tiles.push(UI.stat(s.proofs.done + '/' + s.proofs.total, 'Proofs worked', 'ladder level 2',
        UI.meter(s.proofs.done, s.proofs.total)));
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
    if (at === 2) {
      loop.push(step(4, pf ? 'Work the proof: ' + pf.title : 'Every proof has been worked through',
        pf ? Pool.sectionTitle(pf.sec) : 'Levels 3–5 need delayed evidence, which is not built yet',
        pf ? 'note/' + pf.id : 'study', !!pf));
    }

    DOM.add(root, [
      el('div', { class: 'spread' }, [UI.title('Today'), UI.levelBadge()]),
      UI.mockBanner(),

      DOM.stagger(el('div', { class: 'stats' }, tiles)),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: 'The loop' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 12px' },
          text: at === 2
            ? 'Read it → state it from memory → answer questions on it → produce the proof yourself. Feedback comes after the attempt, never before.'
            : 'Read it → state it from memory → answer questions on it. Feedback comes after the attempt, never before.' }),
        el('div', { class: 'list' }, loop)
      ]),

      el('div', {}, [
        el('div', { class: 'spread', style: { marginBottom: '10px' } }, [
          el('h2', { text: 'Courses' }),
          el('a', { class: 'chip', href: Router.href('study'), text: 'Open the syllabus' })
        ]),
        el('div', { class: 'list' }, Pool.courses().map(courseRow))
      ]),

      levelCard(),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'Mastery ladder' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 10px' },
          text: at === 2
            ? 'A tick earns level 1. Working a proof through earns level 2 on that proof. Levels 3–5 need delayed evidence, which is not built yet.'
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

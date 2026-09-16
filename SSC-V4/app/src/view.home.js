/* ══════════════════════════════════════════════════════════════════════════
   Today — what to do next, and what the app actually knows about you.

   The three tiles keep completion and recall apart on purpose: finishing a
   note is Level 1 "completed" and says nothing about recall, so the numbers
   are never merged into one flattering percentage.
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

    return el('a', { class: 'item', href: Router.href('study/' + course.id) }, [
      course.pending ? el('span', { class: 'ix', text: '·' }) : ring,
      el('span', { class: 'tt' }, [
        el('b', { text: course.title }),
        el('span', { text: course.pending ? 'content arrives at Level 3' : course.blurb })
      ]),
      course.pending
        ? el('span', { class: 'badge warn', text: 'level 3' })
        : el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
    ]);
  }

  function settings() {
    const themeBtn = el('button', { class: 'chip', type: 'button' });
    function paint() {
      const t = Store.pref('theme', 'auto');
      themeBtn.textContent = 'Theme: ' + t;
    }
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
          ? 'Storage is blocked in this browser, so progress lasts only for this session.'
          : 'Progress is stored in this browser only. No account, no sync — that comes later.' })
    ]);
  }

  function render() {
    const s = Store.summary(Pool.ids.concepts(), Pool.ids.cards(), Pool.ids.objective());
    const note = nextUndone(), card = nextCard(), q = nextQuestion();

    const root = el('div', { class: 'stack' });

    DOM.add(root, [
      UI.title('Today'),
      UI.mockBanner(),

      DOM.stagger(el('div', { class: 'stats' }, [
        UI.stat(s.notes.done + '/' + s.notes.total, 'Notes ticked', 'ladder level 1',
          UI.meter(s.notes.done, s.notes.total)),
        UI.stat(s.cards.tried ? DOM.pct(s.cards.got, s.cards.tried) + '%' : '—',
          'First-try recall',
          s.cards.tried + ' of ' + s.cards.total + ' tried'),
        UI.stat(s.omr.locked ? DOM.pct(s.omr.correct, s.omr.locked) + '%' : '—',
          'First-try correct',
          s.omr.locked + ' of ' + s.omr.total + ' locked')
      ])),

      el('div', { class: 'card glass' }, [
        el('div', { class: 'kicker', text: 'The loop' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 12px' },
          text: 'Read it → state it from memory → answer questions on it. Feedback comes after the attempt, never before.' }),
        el('div', { class: 'list' }, [
          step(1, note ? 'Read: ' + note.title : 'Every note has been read once',
            note ? Pool.sectionTitle(note.sec) : 'Re-reading is always available',
            note ? 'note/' + note.id : 'study', !!note),
          step(2, card ? 'State it from memory' : 'Every statement has had one attempt',
            card ? card.title : 'Re-attempts are allowed but never recorded',
            'recall', !!card),
          step(3, q ? 'Answer the next question' : 'Every question has been locked once',
            q ? q.type + ' · ' + Pool.sectionTitle(q.sec) : 'Review the worked answers any time',
            q ? 'omr/' + q.id : 'omr', !!q)
        ])
      ]),

      el('div', {}, [
        el('div', { class: 'spread', style: { marginBottom: '10px' } }, [
          el('h2', { text: 'Courses' }),
          el('a', { class: 'chip', href: Router.href('study'), text: 'Open the syllabus' })
        ]),
        el('div', { class: 'list' }, Pool.courses().map(courseRow))
      ]),

      el('div', { class: 'card tint' }, [
        el('div', { class: 'kicker', text: 'Mastery ladder' }),
        el('p', { class: 'small muted', style: { margin: '4px 0 10px' },
          text: 'A tick earns level 1 and nothing more. Recall levels need evidence, and that evidence is collected from Level 2 onwards.' }),
        UI.ladder(false)
      ]),

      settings()
    ]);

    return root;
  }

  return { render };
})();

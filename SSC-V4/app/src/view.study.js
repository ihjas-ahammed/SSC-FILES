/* ══════════════════════════════════════════════════════════════════════════
   Study — the whole syllabus as one page of dropdowns you tick your way
   through. Nothing is more than one line tall until you open it, so the size
   of the course never lands on you all at once.

   `#/study`             all three courses, collapsed
   `#/study/<courseId>`  one course, for deep links out of a note
   ══════════════════════════════════════════════════════════════════════════ */

const ViewStudy = (function () {

  const el = DOM.el;

  const LEVEL_WORD = ['not started', 'read', 'proofs worked', 'exercises done'];

  function summaryStrip() {
    const ids = Pool.ids.concepts();
    const c = Progress.count(ids);
    return el('div', { class: 'card glass' }, [
      el('div', { class: 'spread' }, [
        el('div', {}, [
          el('div', { class: 'kicker', text: 'Where the syllabus stands' }),
          el('div', { style: { fontSize: '1.3rem', fontWeight: 600, marginTop: '2px' },
            text: c.l1 + ' of ' + c.total + ' read' })
        ]),
        el('span', { class: 'badge' + (c.min ? ' lv' + c.min : ''),
          text: c.min ? 'level ' + c.min + ' · ' + LEVEL_WORD[c.min] : 'not started' })
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.levelBar(c)])
    ]);
  }

  function courseView(course) {
    const root = el('div', { class: 'stack' });
    const host = el('div', {});
    const ids = Pool.ids.concepts(course.id);
    const c = Progress.count(ids);

    DOM.add(root, [
      UI.crumb([{ text: 'Study', href: 'study' }, { text: course.title }]),
      UI.title(course.title, course.code + (course.sem !== '—' ? ' · semester ' + course.sem : '')),
      el('p', { class: 'lede', text: course.blurb }),
      course.pending
        ? el('div', { class: 'banner' }, [
            DOM.mi('hourglass_empty'),
            el('span', {}, [el('b', { text: 'Not built yet. ' }), course.pendingNote])
          ])
        : el('div', { class: 'card tint' }, [
            el('div', { class: 'spread' }, [
              el('span', { class: 'kicker', text: 'Levels reached' }),
              el('span', { class: 'count', text: c.l1 + ' / ' + c.l2 + ' / ' + c.l3 + ' of ' + c.total })
            ]),
            el('div', { style: { marginTop: '8px' } }, [UI.levelBar(c)])
          ]),
      host
    ]);

    Tree.mount(host, course);
    return root;
  }

  function render(args) {
    if (args && args[0]) {
      const course = Pool.course(args[0]);
      if (course) return courseView(course);
    }

    const root = el('div', { class: 'stack' });
    const host = el('div', {});
    Tree.seedOpen(Pool.courses().filter(c => !c.pending)[0]);

    DOM.add(root, [
      UI.title('Syllabus', 'Open a module, advance what is done'),
      UI.mockBanner(),
      summaryStrip(),
      host,
      el('p', { class: 'small muted', style: { margin: 0 },
        text: 'One press advances a row one level: read it (red), then work its proof (amber). '
          + 'Green is not a press — it arrives when every exercise in that section is worked '
          + 'through. A parent row takes the colour of the weakest thing inside it.' })
    ]);

    Tree.mountAll(host, Pool.courses());
    return root;
  }

  return { render };
})();

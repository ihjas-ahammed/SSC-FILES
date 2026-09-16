/* ══════════════════════════════════════════════════════════════════════════
   Study — the whole syllabus as one page of dropdowns you tick your way
   through. Nothing is more than one line tall until you open it, so the size
   of the course never lands on you all at once.

   `#/study`             all three courses, collapsed
   `#/study/<courseId>`  one course, for deep links out of a note
   ══════════════════════════════════════════════════════════════════════════ */

const ViewStudy = (function () {

  const el = DOM.el;

  function summaryStrip() {
    const ids = Pool.ids.concepts();
    const done = ids.filter(Store.isDone).length;
    const left = ids.length - done;
    return el('div', { class: 'card glass' }, [
      el('div', { class: 'spread' }, [
        el('div', {}, [
          el('div', { class: 'kicker', text: 'Ticked off' }),
          el('div', { style: { fontSize: '1.3rem', fontWeight: 600, marginTop: '2px' },
            text: done + ' of ' + ids.length + ' notes' })
        ]),
        el('span', { class: 'count',
          text: left ? left + ' to go' : 'slice complete' })
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.meter(done, ids.length)])
    ]);
  }

  function courseView(course) {
    const root = el('div', { class: 'stack' });
    const host = el('div', {});
    const ids = Pool.ids.concepts(course.id);
    const done = ids.filter(Store.isDone).length;

    DOM.add(root, [
      UI.crumb([{ text: 'Study', href: 'study' }, { text: course.title }]),
      UI.title(course.title, course.code + (course.sem !== '—' ? ' · semester ' + course.sem : '')),
      el('p', { class: 'lede', text: course.blurb }),
      course.pending
        ? el('div', { class: 'banner' }, [
            el('span', { 'aria-hidden': 'true', text: '⚠' }),
            el('span', {}, [el('b', { text: 'Not built yet. ' }), course.pendingNote])
          ])
        : el('div', { class: 'card tint' }, [
            el('div', { class: 'spread' }, [
              el('span', { class: 'kicker', text: 'Notes ticked' }),
              el('span', { class: 'count', text: done + ' / ' + ids.length })
            ]),
            el('div', { style: { marginTop: '8px' } }, [UI.meter(done, ids.length)])
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
      UI.title('Syllabus', 'Open a level, tick what is done'),
      UI.mockBanner(),
      summaryStrip(),
      host,
      el('p', { class: 'small muted', style: { margin: 0 },
        text: 'A tick means "I have been through this" — level 1 of the ladder, nothing more. ' +
          'Ticking a module or a section ticks everything inside it.' })
    ]);

    Tree.mountAll(host, Pool.courses());
    return root;
  }

  return { render };
})();

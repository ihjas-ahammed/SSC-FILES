/* ══════════════════════════════════════════════════════════════════════════
   Study — the whole syllabus as one page of dropdowns you read your way
   through. Nothing is more than one line tall until you open it, so the size
   of the course never lands on you all at once; and since Level 4 the note
   itself opens here rather than on a page of its own, so studying a section
   never costs you your place.

   `#/study`             all three courses, collapsed to the last open path
   `#/study/<courseId>`  one course, for deep links
   ══════════════════════════════════════════════════════════════════════════ */

const ViewStudy = (function () {

  const el = DOM.el;

  const LEVEL_WORD = ['not started', 'read', 'proofs worked', 'exercises done', 'all complete'];

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
    const pyq = Progress.pyqState(course.id);

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
            el('div', { style: { marginTop: '8px' } }, [UI.levelBar(c)]),
            pyq.total ? el('div', { class: 'spread', style: { marginTop: '12px' } }, [
              el('span', { class: 'count', text: 'past papers · level 4' }),
              el('span', { class: 'count', text: pyq.done + '/' + pyq.total })
            ]) : null,
            pyq.total ? el('div', { style: { marginTop: '6px' } },
              [UI.meter(pyq.done, pyq.total, 4)]) : null
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
      UI.title('Syllabus', 'Open a module, read what is inside it'),
      UI.mockBanner(),
      summaryStrip(),
      host,
      el('p', { class: 'small muted', style: { margin: 0 },
        text: 'One press on a row advances it: read it (red), then work its proof (amber). '
          + 'Green arrives when every exercise in that section is worked through — and a row '
          + 'with no proof, or a section with no exercises, is not held back by a stage that '
          + 'does not exist. A parent row takes the colour of the weakest thing inside it; a '
          + 'course reaches level 4 when its past papers are done.' })
    ]);

    Tree.mountAll(host, Pool.courses());
    return root;
  }

  /* `keepScroll` tells the shell not to jump to the top: this view restores
     the position of whatever was left open instead. */
  function afterPaint() { Tree.scrollToOpen(); }

  return { render, afterPaint, keepScroll: true };
})();

/* ══════════════════════════════════════════════════════════════════════════
   Study — the whole syllabus as one page of dropdowns you read your way
   through.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewStudy = (function () {

  const el = DOM.el;

  function levelWord(n) {
    return (typeof I18N !== 'undefined') ? I18N.levelName(n) : ['not started', 'read', 'proofs worked', 'exercises done', 'all complete'][n || 0];
  }

  function summaryStrip() {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const ids = Pool.ids.concepts();
    const c = Progress.count(ids);
    const readText = isMl ? (c.l1 + ' / ' + c.total + ' വായിച്ചു') : (c.l1 + ' of ' + c.total + ' read');
    const lvlText = c.min ? ((typeof I18N !== 'undefined' ? I18N.t('level') : 'level') + ' ' + c.min + ' · ' + levelWord(c.min)) : levelWord(0);

    return el('div', { class: 'card glass' }, [
      el('div', { class: 'spread' }, [
        el('div', {}, [
          el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('where_stands') : 'Where the syllabus stands' }),
          el('div', { style: { fontSize: '1.3rem', fontWeight: 600, marginTop: '2px' },
            text: readText })
        ]),
        el('span', { class: 'badge' + (c.min ? ' lv' + c.min : ''), text: lvlText })
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.levelBar(c)])
    ]);
  }

  function courseView(course) {
    const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
    const root = el('div', { class: 'stack' });
    const host = el('div', {});
    const ids = Pool.ids.concepts(course.id);
    const c = Progress.count(ids);
    const pyq = Progress.pyqState(course.id);

    DOM.add(root, [
      UI.crumb([{ text: (typeof I18N !== 'undefined') ? I18N.t('tab_study') : 'Study', href: 'study' }, { text: course.title }]),
      UI.title(course.title, course.code + (course.sem !== '—' ? (isMl ? ' · ഭാഗം ' + course.sem : ' · semester ' + course.sem) : '')),
      el('p', { class: 'lede', text: course.blurb }),
      course.pending
        ? el('div', { class: 'banner' }, [
            DOM.mi('hourglass_empty'),
            el('span', {}, [el('b', { text: isMl ? 'തയ്യാറായിട്ടില്ല. ' : 'Not built yet. ' }), course.pendingNote])
          ])
        : el('div', { class: 'card tint' }, [
            el('div', { class: 'spread' }, [
              el('span', { class: 'kicker', text: isMl ? 'പുരോഗതി' : 'Levels reached' }),
              el('span', { class: 'count', text: c.l1 + ' / ' + c.l2 + ' / ' + c.l3 + ' of ' + c.total })
            ]),
            el('div', { style: { marginTop: '8px' } }, [UI.levelBar(c)]),
            pyq.total ? el('div', { class: 'spread', style: { marginTop: '12px' } }, [
              el('span', { class: 'count', text: isMl ? 'പരീക്ഷാ പേപ്പറുകൾ · ലെവൽ 4' : 'past papers · level 4' }),
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
      UI.title((typeof I18N !== 'undefined') ? I18N.t('syllabus') : 'Syllabus',
        (typeof I18N !== 'undefined') ? I18N.t('syllabus_sub') : 'Open a module, read what is inside it'),
      UI.mockBanner(),
      summaryStrip(),
      host,
      el('p', { class: 'small muted', style: { margin: 0 },
        text: (typeof I18N !== 'undefined') ? I18N.t('syllabus_foot') : 'One press on a row advances it...' })
    ]);

    Tree.mountAll(host, Pool.courses());
    return root;
  }

  /* `keepScroll` tells the shell not to jump to the top: this view restores
     the position of whatever was left open instead. */
  function afterPaint() { Tree.scrollToOpen(); }

  return { render, afterPaint, keepScroll: true };
})();

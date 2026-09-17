/* ══════════════════════════════════════════════════════════════════════════
   The tick tree.

   The syllabus is only ever one line tall until you open it. Course → module →
   section → concept, each row carrying a tick you can press and a ring showing
   how much of what is underneath is done. Expanding animates, and expanded
   content keeps the full width — the only indentation is a thin rail, so a
   deep tree never squeezes the text.

   Ticking a parent ticks everything under it; untick does the reverse. Parents
   show a mixed state when some of their children are done.
   ══════════════════════════════════════════════════════════════════════════ */

const Tree = (function () {

  const el = DOM.el;
  const OPEN_KEY = 'open';

  const openMap = () => Store.pref(OPEN_KEY, null);
  function setOpen(id, on) {
    const m = openMap() || {};
    if (on) m[id] = 1; else delete m[id];
    Store.setPref(OPEN_KEY, m);
  }
  const isOpen = id => {
    const m = openMap();
    return !!(m && m[id]);
  };

  /* ── pieces ───────────────────────────────────────────────────────────── */

  function ring(done, total) {
    const pc = DOM.pct(done, total);
    const node = el('span', {
      class: 'ring' + (total && done === total ? ' done' : ''),
      role: 'img', 'aria-label': done + ' of ' + total + ' completed'
    }, [el('i', { text: total ? done + '/' + total : '—' })]);
    /* set after mount so the conic gradient animates from 0 */
    window.requestAnimationFrame(() => node.style.setProperty('--p', pc));
    return node;
  }

  function tickButton(state, label, onPress) {
    const btn = el('button', {
      class: 'tick', type: 'button', role: 'checkbox',
      'aria-checked': state, 'aria-label': label
    }, [el('i', { 'aria-hidden': 'true', text: state === 'mixed' ? '–' : '✓' })]);
    btn.addEventListener('click', function (e) { e.preventDefault(); e.stopPropagation(); onPress(); });
    return btn;
  }

  function accordion(id, children) {
    const inner = el('div', { class: 'acc-in' }, [el('div', { class: 'acc-pad' }, children)]);
    const acc = el('div', { class: 'acc' + (isOpen(id) ? ' open' : ''), id: 'acc-' + id }, [inner]);
    return acc;
  }

  function toggler(acc, id, kids) {
    const btn = el('button', {
      class: 'tlabel', type: 'button',
      'aria-expanded': String(isOpen(id)), 'aria-controls': 'acc-' + id
    }, kids);
    btn.addEventListener('click', function () {
      const open = !acc.classList.contains('open');
      acc.classList.toggle('open', open);
      btn.setAttribute('aria-expanded', String(open));
      setOpen(id, open);
    });
    return btn;
  }

  /* ── levels ───────────────────────────────────────────────────────────── */

  /* The same offer the note view makes, in the form a list row can carry:
     ticking a result usually means its groundwork is already behind you, but
     "usually" is not "always", so it is asked rather than assumed. */
  function offerCascade(c) {
    const pending = UI.pendingPrereqs(c.id);
    if (!pending.length) return;
    const names = pending.slice(0, 5).map(x => '· ' + x.title).join('\n') +
      (pending.length > 5 ? '\n· and ' + (pending.length - 5) + ' more' : '');
    const ask = pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') +
      ' of "' + c.title + '" ' + DOM.plural(pending.length, 'is', 'are') +
      ' not ticked yet:\n\n' + names + '\n\nTick them as completed too?';
    if (!window.confirm(ask)) return;
    const hit = Store.setDoneMany(pending.map(x => x.id), true);
    DOM.announce('Ticked ' + hit.length + ' ' + DOM.plural(hit.length, 'prerequisite') + '.');
  }

  function conceptRow(c, repaint) {
    const done = Store.isDone(c.id);
    const row = el('div', { class: 'crow' + (done ? ' done' : '') }, [
      tickButton(String(done), (done ? 'Unmark' : 'Mark') + ' "' + c.title + '" completed',
        function () {
          const on = !Store.isDone(c.id);
          Store.setDone(c.id, on);
          if (on) offerCascade(c);
          repaint();
        }),
      el('a', { href: Router.href('note/' + c.id) }, [
        el('span', { class: 'tt' }, [
          el('b', { text: c.title }),
          el('span', { text: c.kind + ' · ' + c.oneLine })
        ]),
        DOM.icon('chev', 18, 'chev')
      ])
    ]);
    return row;
  }

  function sectionNode(s, repaint) {
    const ids = s.concepts.map(c => c.id);
    const done = ids.filter(Store.isDone).length;
    const state = !ids.length ? 'false' : done === ids.length ? 'true' : done ? 'mixed' : 'false';
    const nid = 'sec-' + s.sec;

    const acc = accordion(nid, s.concepts.length
      ? [el('div', { class: 'stack', style: { gap: '6px' } },
          s.concepts.map(c => conceptRow(c, repaint)))]
      : [el('p', { class: 'small muted', style: { margin: '4px 2px' },
          text: 'No concepts loaded for this section yet.' })]);

    const node = el('div', { class: 'tnode sub sec' }, [
      el('div', { class: 'trow' }, [
        tickButton(state, (done === ids.length ? 'Unmark' : 'Mark') + ' all of §' + s.sec,
          function () {
            const all = done === ids.length;
            Store.setDoneMany(ids, !all);
            DOM.announce(all ? 'Section cleared.' : 'Section ticked — ' + ids.length + ' notes.');
            repaint();
          }),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: '§' + s.sec + '  ' + s.title }),
            el('span', { text: s.concepts.length + ' ' + DOM.plural(s.concepts.length, 'concept') })
          ]),
          ring(done, ids.length),
          DOM.icon('chev', 20, 'chev')
        ])
      ]),
      acc
    ]);
    return node;
  }

  function moduleNode(course, mod, repaint) {
    const secs = Pool.sections(course.id).filter(s => (mod.secs || []).indexOf(s.sec) >= 0);
    const ids = secs.reduce((acc, s) => acc.concat(s.concepts.map(c => c.id)), []);
    const done = ids.filter(Store.isDone).length;
    const state = !ids.length ? 'false' : done === ids.length ? 'true' : done ? 'mixed' : 'false';
    const nid = 'mod-' + mod.id;

    if (mod.pending) return pendingNode(mod);

    const acc = accordion(nid, [el('div', {}, secs.map(s => sectionNode(s, repaint)))]);
    const node = el('div', { class: 'tnode' }, [
      el('div', { class: 'trow' }, [
        tickButton(state, (done === ids.length ? 'Unmark' : 'Mark') + ' all of module ' + mod.n,
          function () {
            const all = done === ids.length;
            Store.setDoneMany(ids, !all);
            DOM.announce(all ? 'Module cleared.' : 'Module ticked — ' + ids.length + ' notes.');
            repaint();
          }),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: 'Module ' + mod.n + ' · ' + mod.title }),
            el('span', { text: (mod.marks ? mod.marks + ' marks · ' : '') +
              secs.length + ' ' + DOM.plural(secs.length, 'section') })
          ]),
          ring(done, ids.length),
          DOM.icon('chev', 20, 'chev')
        ])
      ]),
      acc
    ]);
    return node;
  }

  function pendingNode(mod) {
    const nid = 'pend-' + mod.id;
    const builds = (mod.builds || []).map(function (id) {
      const c = Pool.concept(id);
      return c ? el('a', { class: 'chip', href: Router.href('note/' + id), text: c.title })
        : el('span', { class: 'chip ghost', text: id });
    });
    const acc = accordion(nid, [el('div', { style: { padding: '0 2px' } }, [
      mod.why ? el('p', { class: 'small muted', style: { margin: '2px 0 8px' }, text: mod.why }) : null,
      builds.length ? el('div', {}, [
        el('div', { class: 'kicker', style: { marginBottom: '6px' }, text: 'Will build on' }),
        el('div', { class: 'row' }, builds)
      ]) : null
    ])]);
    const node = el('div', { class: 'tnode sub sec' }, [
      el('div', { class: 'trow' }, [
        el('span', { class: 'tick', 'aria-hidden': 'true' },
          [el('i', { style: { borderStyle: 'dashed', color: 'transparent' }, text: '✓' })]),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: mod.n + ' · ' + mod.title }),
            el('span', { text: 'content arrives at Level 3' })
          ]),
          el('span', { class: 'badge warn', text: 'pending' }),
          DOM.icon('chev', 20, 'chev')
        ])
      ]),
      acc
    ]);
    return node;
  }

  /* A whole course as one collapsed row — the top level of the one-page tree. */
  function courseNode(course, repaint) {
    const ids = Pool.ids.concepts(course.id);
    const done = ids.filter(Store.isDone).length;
    const state = !ids.length ? 'false' : done === ids.length ? 'true' : done ? 'mixed' : 'false';
    const nid = 'course-' + course.id;

    const acc = accordion(nid, [el('div', { class: 'rail' },
      (course.modules || []).map(mod => moduleNode(course, mod, repaint)))]);

    return el('div', { class: 'tnode' }, [
      el('div', { class: 'trow' }, [
        course.pending
          ? el('span', { class: 'tick', 'aria-hidden': 'true' },
              [el('i', { style: { borderStyle: 'dashed', color: 'transparent' }, text: '✓' })])
          : tickButton(state, (done === ids.length ? 'Unmark' : 'Mark') + ' all of ' + course.title,
              function () {
                const all = done === ids.length;
                Store.setDoneMany(ids, !all);
                DOM.announce(all ? 'Course cleared.' : 'Course ticked — ' + ids.length + ' notes.');
                repaint();
              }),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: course.title }),
            el('span', { text: course.pending ? course.blurb : course.code + ' · ' + course.blurb })
          ]),
          course.pending
            ? el('span', { class: 'badge warn', text: 'level 3' })
            : ring(done, ids.length),
          DOM.icon('chev', 20, 'chev')
        ])
      ]),
      acc
    ]);
  }

  /* ── public: the whole syllabus as one page of dropdowns ──────────────── */
  function mountAll(host, courses) {
    function repaint() {
      const scroll = window.scrollY;
      DOM.clear(host);
      host.appendChild(el('div', { class: 'tree' },
        courses.map(course => courseNode(course, repaint))));
      window.scrollTo(0, scroll);
    }
    repaint();
    return host;
  }

  /* ── public: one course's tree, repainting in place ───────────────────── */
  function mount(host, course) {
    function repaint() {
      const scroll = window.scrollY;
      DOM.clear(host);
      host.appendChild(el('div', { class: 'tree' },
        (course.modules || []).map(mod => moduleNode(course, mod, repaint))));
      window.scrollTo(0, scroll);
    }
    repaint();
    return host;
  }

  /* First visit: open the first course, module and section that still have
     work left, so the tree opens somewhere useful rather than flat or sprawled. */
  function seedOpen(course) {
    if (openMap()) return;
    const m = {};
    if (course) {
      m['course-' + course.id] = 1;
      const mod = (course.modules || []).filter(x => !x.pending)[0];
      if (mod) {
        m['mod-' + mod.id] = 1;
        const sec = Pool.sections(course.id)
          .filter(s => (mod.secs || []).indexOf(s.sec) >= 0)
          .filter(s => s.concepts.some(c => !Store.isDone(c.id)))[0];
        if (sec) m['sec-' + sec.sec] = 1;
      }
    }
    Store.setPref(OPEN_KEY, m);
  }

  /* Open the path down to one concept, so arriving from a link lands with the
     surrounding syllabus already unfolded. */
  function revealPath(conceptId) {
    const c = Pool.concept(conceptId);
    if (!c) return;
    const course = Pool.courseOfSec(c.sec), mod = Pool.moduleOfSec(c.sec);
    const m = openMap() || {};
    if (course) m['course-' + course.id] = 1;
    if (mod) m['mod-' + mod.id] = 1;
    m['sec-' + c.sec] = 1;
    Store.setPref(OPEN_KEY, m);
  }

  return { mount, mountAll, seedOpen, revealPath };
})();

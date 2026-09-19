/* ══════════════════════════════════════════════════════════════════════════
   The tick tree.

   The syllabus is only ever one line tall until you open it. Course → module →
   section → concept, each row carrying a tick you can press and a ring showing
   how much of what is underneath is done. Expanding animates, and expanded
   content keeps the full width — the only indentation is a thin rail, so a
   deep tree never squeezes the text.

   Ticking a parent advances everything under it; a parent shows a mixed state
   when only some of its children are there yet.

   Colour is the whole vocabulary now. A row is RED once everything under it
   has been read, AMBER once every proof under it has been worked, GREEN once
   every section exercise under it is done. There is no level switch to press:
   the ring simply reports the level the weakest thing under it has reached.
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

  const ring = (c, label) => UI.levelRing(c, label);

  function tickButton(state, lv, label, onPress) {
    const btn = el('button', {
      class: 'tick', type: 'button', role: 'checkbox',
      'aria-checked': state, 'data-lv': String(lv || 0), 'aria-label': label
    }, [el('i', { 'aria-hidden': 'true' },
      [DOM.mi(state === 'mixed' ? 'remove' : lv >= 3 ? 'workspace_premium' : 'check', 'xs')])]);
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
    const pending = Progress.pendingPrereqs(c.id);
    if (!pending.length) return;
    const target = Progress.prereqTarget(c.id);
    const names = pending.slice(0, 5).map(x => '· ' + x.title).join('\n') +
      (pending.length > 5 ? '\n· and ' + (pending.length - 5) + ' more' : '');
    const ask = pending.length + ' ' + DOM.plural(pending.length, 'prerequisite') +
      ' of "' + c.title + '" ' + DOM.plural(pending.length, 'has', 'have') +
      ' not reached level ' + target + ' yet:\n\n' + names +
      '\n\nBring them up to level ' + target + ' too?';
    if (!window.confirm(ask)) return;
    const n = Progress.raisePrereqs(c.id);
    DOM.announce('Raised ' + n + ' ' + DOM.plural(n, 'prerequisite') + ' to level ' + target + '.');
  }

  /* At Level 2 a ticked note whose proof is not worked is genuinely neither
     done nor untouched, so the tick has three states and one press advances
     one step: tick → work the proof → clear. That way the control always has
     somewhere to go and never silently refuses. */
  function conceptRow(c, repaint) {
    const lv = Progress.level(c.id);
    const hasProof = Progress.hasProof(c.id);
    const isExt = Pool.isExt(c);
    const extNote = isExt ? ' (outside syllabus)' : '';

    const label = lv === 0
      ? 'Mark "' + c.title + '" as read (level 1)' + extNote
      : lv === 1
        ? 'Mark the proof of "' + c.title + '" as worked through (level 2)' + extNote
        : 'Clear "' + c.title + '"';

    const row = el('div', { class: 'crow', 'data-lv': String(lv) }, [
      tickButton(lv >= 1 ? 'true' : 'false', lv, label, function () {
        const was = lv;
        Progress.advance(c.id);
        if (was === 0) offerCascade(c);
        repaint();
      }),
      el('a', { href: Router.href('note/' + c.id) }, [
        el('span', { class: 'tt' }, [
          el('b', { text: c.title }),
          el('span', { text: c.kind + ' · ' + c.oneLine })
        ]),
        isExt ? el('span', { class: 'badge warn', text: 'outside syllabus' }) : null,
        lv === 1 && hasProof ? el('span', { class: 'lvtag', 'data-lv': '1', text: 'proof owed' }) : null,
        lv >= 2 ? el('span', { class: 'lvtag', 'data-lv': String(lv), text: 'L' + lv }) : null,
        DOM.icon('chev', 18, 'chev')
      ])
    ]);
    return row;
  }

  function sectionNode(s, repaint) {
    const ids = s.concepts.map(c => c.id);
    const cnt = Progress.count(ids);
    const state = Progress.tickState(ids);
    const nid = 'sec-' + s.sec;
    const isExt = Pool.isExtSec(s.sec);
    const tasks = Progress.secTaskState(s.sec);

    const acc = accordion(nid, s.concepts.length
      ? [el('div', { class: 'stack', style: { gap: '6px' } },
          s.concepts.map(c => conceptRow(c, repaint)))]
      : [el('p', { class: 'small muted', style: { margin: '4px 2px' },
          text: 'No concepts loaded for this section yet.' })]);

    const node = el('div', { class: 'tnode sub sec' }, [
      el('div', { class: 'trow' }, [
        tickButton(state, cnt.min, 'Advance all of §' + s.sec + (isExt ? ' (outside syllabus)' : ''),
          function () {
            const to = Progress.advanceMany(ids);
            DOM.announce(to ? 'Section at level ' + to + '.' : 'Section cleared.');
            repaint();
          }),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: '§' + s.sec + '  ' + s.title }),
            el('span', { text: s.concepts.length + ' ' + DOM.plural(s.concepts.length, 'concept') +
              (tasks.total ? ' · ' + tasks.done + '/' + tasks.total + ' exercises' : ' · no exercises yet') +
              (isExt ? ' · outside syllabus (not in exam %)' : '') })
          ]),
          isExt ? el('span', { class: 'badge warn', text: 'outside syllabus' }) : null,
          ring(cnt, '§' + s.sec),
          DOM.icon('chev', 20, 'chev')
        ])
      ]),
      acc
    ]);
    return node;
  }

  function moduleNode(course, mod, repaint) {
    const secs = Pool.sections(course.id).filter(s => (mod.secs || []).indexOf(s.sec) >= 0);
    const isExtMod = !!mod.ext;
    const countSecs = isExtMod ? secs : secs.filter(s => !Pool.isExtSec(s.sec));
    const ids = countSecs.reduce((acc, s) => acc.concat(s.concepts.map(c => c.id)), []);
    const cnt = Progress.count(ids);
    const state = Progress.tickState(ids);
    const nid = 'mod-' + mod.id;

    if (mod.pending) return pendingNode(mod);

    const extCount = secs.filter(s => Pool.isExtSec(s.sec)).length;
    const subtitleText = isExtMod
      ? (secs.length + ' ' + DOM.plural(secs.length, 'section') + ' · outside syllabus')
      : ((mod.marks ? mod.marks + ' marks · ' : '') +
         countSecs.length + ' syllabus ' + DOM.plural(countSecs.length, 'section') +
         (extCount ? ' (+' + extCount + ' outside syllabus)' : ''));

    const acc = accordion(nid, [el('div', {}, secs.map(s => sectionNode(s, repaint)))]);
    const node = el('div', { class: 'tnode' }, [
      el('div', { class: 'trow' }, [
        tickButton(state, cnt.min, 'Advance every syllabus note of module ' + mod.n,
          function () {
            const to = Progress.advanceMany(ids);
            DOM.announce(to ? 'Module at level ' + to + '.' : 'Module cleared.');
            repaint();
          }),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: 'Module ' + mod.n + ' · ' + mod.title }),
            el('span', { text: subtitleText })
          ]),
          isExtMod ? el('span', { class: 'badge warn', text: 'outside syllabus' }) : null,
          ring(cnt, 'Module ' + mod.n),
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
          [el('i', { style: { borderStyle: 'dashed' } }, [DOM.mi('hourglass_empty', 'xs')])]),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: mod.n + ' · ' + mod.title }),
            el('span', { text: 'not delivered yet' })
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
    const cnt = Progress.count(ids);
    const state = Progress.tickState(ids);
    const nid = 'course-' + course.id;

    const acc = accordion(nid, [el('div', { class: 'rail' },
      (course.modules || []).map(mod => moduleNode(course, mod, repaint)))]);

    return el('div', { class: 'tnode' }, [
      el('div', { class: 'trow' }, [
        course.pending
          ? el('span', { class: 'tick', 'aria-hidden': 'true' },
              [el('i', { style: { borderStyle: 'dashed' } }, [DOM.mi('hourglass_empty', 'xs')])])
          : tickButton(state, cnt.min, 'Advance every note of ' + course.title,
              function () {
                const to = Progress.advanceMany(ids);
                DOM.announce(to ? course.title + ' at level ' + to + '.' : 'Course cleared.');
                repaint();
              }),
        toggler(acc, nid, [
          el('span', { class: 'tt' }, [
            el('b', { text: course.title }),
            el('span', { text: course.pending ? course.blurb : course.code + ' · ' + course.blurb })
          ]),
          course.pending
            ? el('span', { class: 'badge warn', text: 'pending' })
            : ring(cnt, course.title),
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
          .filter(s => s.concepts.some(c => Progress.level(c.id) < 1))[0];
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

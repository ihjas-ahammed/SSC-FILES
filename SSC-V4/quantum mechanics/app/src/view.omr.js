/* ══════════════════════════════════════════════════════════════════════════
   Objective questions, OMR first.

   The question itself is now a component — see comp.question.js — because a
   question belongs next to the note that teaches it, not behind a tab of its
   own. There is no Questions tab any more: this screen survives only so that
   `#/omr/<id>` links keep resolving, and so there is somewhere to see the
   whole bank at once.
   ══════════════════════════════════════════════════════════════════════════ */

const ViewOmr = (function () {

  const el = DOM.el;

  /* ── list ──────────────────────────────────────────────────────────────── */
  let filter = 'all';

  function list(query) {
    const root = el('div', { class: 'stack' });
    const sec = query && query.sec;
    const chips = el('div', { class: 'row' });
    const host = el('div', {});

    const chip = (label, on, fn) => el('button', { class: 'chip', type: 'button', text: label,
      'aria-pressed': String(on), on: { click: fn } });

    function paint() {
      let qs = Pool.objective();
      if (sec) qs = qs.filter(q => q.sec === sec);
      if (filter === 'new') qs = qs.filter(q => !(Store.omr(q.id) || {}).first);
      else if (filter !== 'all') qs = qs.filter(q => q.type === filter);

      DOM.clear(chips);
      DOM.add(chips, ['all', 'new', 'MCQ', 'MSQ', 'NAT'].map(f => chip(
        f === 'all' ? 'All' : f === 'new' ? 'Not attempted' : f,
        filter === f, function () { filter = f; paint(); })));

      DOM.clear(host);
      if (!qs.length) { host.appendChild(UI.empty('Nothing matches that filter.')); return; }

      host.appendChild(el('div', { class: 'list' }, qs.map(function (q, i) {
        const rec = Store.omr(q.id);
        const v = rec && rec.first && rec.first.verdict;
        return el('a', { class: 'item', href: Router.href('omr/' + q.id) }, [
          el('span', { class: 'ix' + (v === 'correct' ? ' ok' : v ? ' bad' : '') },
            [v ? DOM.mi(v === 'correct' ? 'check' : v === 'wrong' ? 'close' : 'remove', 'xs')
               : el('span', { text: String(i + 1) })]),
          el('span', { class: 'tt' }, [
            el('b', { text: '§' + q.sec + '  ' + Pool.sectionTitle(q.sec) }),
            el('span', { text: q.type + ' · ' + q.marks + ' ' + DOM.plural(q.marks, 'mark') +
              ' · ' + (v ? 'first attempt: ' + v : (q.neg ? (q.negLabel || q.neg) + ' if wrong' : 'no negative')) })
          ]),
          el('span', { class: 'go', 'aria-hidden': 'true', text: '›' })
        ]);
      })));
    }

    const s = Store.summary([], [], Pool.ids.objective());
    DOM.add(root, [
      UI.title('Questions', 'Answer first, then the full solution'),
      UI.mockBanner(),
      el('p', { class: 'small muted', style: { margin: 0 },
        text: 'Every one of these also opens inside the note it examines, in the syllabus.' }),
      el('div', { class: 'card tint' }, [
        el('div', { class: 'spread' }, [
          el('span', { class: 'kicker', text: 'First attempts' }),
          el('span', { class: 'count',
            text: s.omr.locked + ' of ' + s.omr.total + ' locked · ' + s.omr.correct + ' correct' })
        ]),
        el('div', { style: { marginTop: '8px' } }, [UI.meter(s.omr.locked, s.omr.total)])
      ]),
      sec ? el('div', { class: 'row' }, [
        el('span', { class: 'badge accent', text: '§' + sec }),
        el('a', { class: 'chip', href: Router.href('omr'), text: 'clear section filter' })
      ]) : null,
      chips, host
    ]);
    paint();
    return root;
  }

  /* ── one question ──────────────────────────────────────────────────────── */
  function nextLink(q) {
    const all = Pool.objective();
    const i = all.map(x => x.id).indexOf(q.id);
    const unattempted = all.slice(i + 1).concat(all.slice(0, i))
      .filter(x => !(Store.omr(x.id) || {}).first)[0];
    const next = unattempted || all[(i + 1) % all.length];
    return el('a', { class: 'btn primary', href: Router.href('omr/' + next.id),
      text: unattempted ? 'Next unattempted question' : 'Next question' });
  }

  function detail(q) {
    const tail = el('div', { class: 'btn-row' }, [
      nextLink(q), el('a', { class: 'btn', href: Router.href('omr'), text: 'All questions' })
    ]);
    return el('div', { class: 'stack' }, [
      UI.crumb([{ text: 'Questions', href: 'omr' },
        { text: '§' + q.sec + ' ' + Pool.sectionTitle(q.sec) }]),
      el('h1', { tabindex: '-1', id: 'pagetitle', class: 'sr-only',
        text: q.type + ' question on ' + Pool.sectionTitle(q.sec) }),
      QuestionCard.build(q, { tail: tail })
    ]);
  }

  function render(args, query) {
    if (args && args[0]) {
      const q = Pool.objectiveOne(args[0]);
      if (q) return detail(q);
      return el('div', { class: 'stack' }, [
        UI.title('Not found'),
        UI.empty('That question is not in the loaded bank.',
          el('a', { class: 'btn', href: Router.href('omr'), text: 'All questions' }))
      ]);
    }
    return list(query);
  }

  return { render, judge: QuestionCard.judge };
})();

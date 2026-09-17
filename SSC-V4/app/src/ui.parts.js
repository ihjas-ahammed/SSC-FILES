/* ══════════════════════════════════════════════════════════════════════════
   Shared view parts. Small builders every view reuses, so the views stay
   about study logic rather than markup.
   ══════════════════════════════════════════════════════════════════════════ */

const UI = (function () {

  const el = DOM.el;

  /* The page heading is also the focus target after a route change. */
  const title = (text, kicker) => el('div', {}, [
    kicker ? el('div', { class: 'kicker', text: kicker }) : null,
    el('h1', { tabindex: '-1', id: 'pagetitle', text: text })
  ]);

  function crumb(items) {
    const row = el('nav', { class: 'crumb', 'aria-label': 'Breadcrumb' });
    items.forEach(function (it, i) {
      if (i) row.appendChild(el('span', { 'aria-hidden': 'true', text: '›' }));
      row.appendChild(it.href
        ? el('a', { href: Router.href(it.href), text: it.text })
        : el('span', { text: it.text }));
    });
    return row;
  }

  /* authored HTML + TeX. Typeset by the caller via UI.math(node). */
  const prose = (html, cls) => el('div', { class: 'prose' + (cls ? ' ' + cls : ''), html: html || '' });
  const math = node => Tex.typeset(node);

  const kindBadge = c => el('span', { class: 'badge', text: c.kind || 'note' });

  const tierBadge = c => {
    if (typeof Pool !== 'undefined' && Pool.isExt && Pool.isExt(c)) {
      return el('span', { class: 'badge warn', text: 'outside syllabus' });
    }
    if (c.tier && c.tier !== 'core') {
      return el('span', { class: 'badge warn', text: c.tier === 'ext' ? 'outside syllabus' : c.tier });
    }
    return null;
  };

  /* Level-aware: at Level 2 a ticked note with an unworked proof is not
     "completed", it is part-way, and saying otherwise would make the badge and
     the tree disagree. */
  const doneBadge = function (id) {
    const st = Progress.state(id);
    if (st === 'done') return el('span', { class: 'badge ok', text: '✓ completed' });
    if (st === 'part') return el('span', { class: 'badge warn', text: 'proof outstanding' });
    return null;
  };

  const meter = (a, b, ok) => el('div', { class: 'meter' + (ok ? ' ok' : '') }, [
    el('i', { style: { width: DOM.pct(a, b) + '%' } })
  ]);

  function stat(n, label, sub, bar) {
    return el('div', { class: 'stat' }, [
      el('div', { class: 'n', text: n }),
      el('div', { class: 'l', text: label }),
      sub ? el('div', { class: 's', text: sub }) : null,
      bar ? el('div', { style: { marginTop: '8px' } }, [bar]) : null
    ]);
  }

  const empty = (msg, extra) => el('div', { class: 'empty' }, [el('p', { text: msg }), extra || null]);

  /* Mastery ladder. Level 1 is a tick; level 2 is proof work actually done
     (or achieved automatically on notes that have no proof). */
  function ladder(done, proofDone, hasProof, courseId, isExt) {
    const names = ['Completed', 'Recognised', 'Recalled', 'Applied', 'Transferred'];
    const at = (hasProof === false && done) ? 2 : proofDone ? 2 : done ? 1 : 0;
    const caption = at === 2
      ? (hasProof === false ? '2 · completed (no proof needed)' : '2 · proof worked through')
      : at === 1 ? '1 · completed'
      : '1 · not yet completed';
    let right = (hasProof === false)
      ? (done ? 'counts for levels 1 & 2' : 'tick to complete levels 1 & 2')
      : (at === 2 ? 'proof worked through (Level 2)'
        : (Store.level(courseId) === 2 ? 'work the proof to reach level 2' : 'work the proof for level 2'));
    if (isExt) {
      right += ' · outside syllabus (not in exam %)';
    }
    return el('div', {}, [
      el('div', { class: 'ladder' }, names.map((n, i) =>
        el('span', { class: i < at ? 'on' : '', title: n }))),
      el('div', { class: 'ladder-l' }, [
        el('span', { text: caption }),
        el('span', { text: right })
      ])
    ]);
  }

  /* The current level as a badge, and the switch that changes it. Level 2 is
     never entered by accident: it has to be unlocked first (Store.unlocked). */
  const levelBadge = courseId => el('span', {
    class: 'badge' + (Store.level(courseId) === 2 ? ' accent' : ''),
    text: 'Level ' + Store.level(courseId)
  });

  /* The level switch for ONE course. Level 2 has to be unlocked on that course
     before it can be picked, and switching is always a deliberate press. */
  function levelSwitch(course, after) {
    const id = course.id;
    const row = el('div', { class: 'row' }, [1, 2].map(function (n) {
      const can = n === 1 || Store.unlocked(id);
      const b = el('button', {
        class: 'chip', type: 'button', 'aria-pressed': String(Store.level(id) === n),
        disabled: !can, text: 'Level ' + n
      });
      b.addEventListener('click', function () {
        Store.setLevel(id, n);
        DOM.announce(course.title + ' set to Level ' + Store.level(id) + '.');
        if (after) after();
      });
      return b;
    }));
    if (!Store.unlocked(id)) {
      row.appendChild(el('button', {
        class: 'chip', type: 'button', text: 'Unlock Level 2',
        on: { click: function () {
          Store.unlock(id, true);
          Store.setLevel(id, 2);
          DOM.announce('Level 2 unlocked for ' + course.title + '.');
          if (after) after();
        } }
      }));
    }
    return row;
  }

  /* Which of a concept's prerequisites are not ticked yet. One definition,
     because the note view and the syllabus tree both offer the same cascade
     and must never disagree about what it would do. */
  const pendingPrereqs = id =>
    Pool.chain(id).filter(x => x.id !== id && !Store.isDone(x.id));

  /* An inline question with real buttons, used where window.confirm would
     lose the detail that makes the question answerable. */
  function ask(opts) {
    const host = el('div', { class: 'card tint ask', role: 'group',
      'aria-label': opts.title });
    DOM.add(host, [
      el('div', { class: 'kicker', text: opts.title }),
      opts.body ? el('div', { class: 'small', style: { margin: '6px 0 10px' } }, [opts.body]) : null,
      el('div', { class: 'btn-row' }, (opts.actions || []).map(a =>
        el('button', { class: 'btn' + (a.primary ? ' primary' : ''), type: 'button',
          text: a.label, on: { click: a.onClick } })))
    ]);
    return host;
  }

  function mockBanner() {
    if (!Pool.isMock()) return null;
    return el('div', { class: 'banner' }, [
      el('span', { 'aria-hidden': 'true', text: '⚠' }),
      el('span', {}, [
        el('b', { text: 'Mock content. ' }),
        'These ten theorems and sixteen questions are placeholders written to test the study loop — ' +
        'not validated material, and not from any past paper. The real pool arrives through the ' +
        'data handoff.'
      ])
    ]);
  }

  /* Attempt-before-reveal gate. Nothing is revealed until the learner says
     they have tried, or does something that counts as trying. */
  function gate(opts) {
    const host = el('div', { class: 'gate' });
    const body = el('div', { class: 'stack', style: { gap: '12px' } }, [
      el('p', { class: 'small muted', style: { margin: 0 }, text: opts.hint }),
      el('div', { class: 'btn-row' }, (opts.actions || []).map(a =>
        el('button', { class: 'btn' + (a.primary ? ' primary' : ''), type: 'button', text: a.label,
          on: { click: a.onClick } })))
    ]);
    host.appendChild(body);
    return host;
  }

  /* A titled block whose body is only built when it is opened. */
  function reveal(label, buildBody, opts) {
    const o = opts || {};
    const body = el('div', { class: 'b', hidden: true });
    const btn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false',
      text: o.openLabel || 'Show' });
    let built = false;
    btn.addEventListener('click', function () {
      const open = body.hidden;
      if (open && !built) { built = true; DOM.add(body, buildBody()); math(body); }
      body.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? (o.closeLabel || 'Hide') : (o.openLabel || 'Show');
    });
    const box = el('div', { class: 'reveal' }, [
      el('div', { class: 'h' }, [el('span', { text: label }), btn]), body
    ]);
    return box;
  }

  const typeBadge = q => el('span', {
    class: 'badge accent',
    text: q.type
  });

  function metaRow(q) {
    const bits = [q.marks + ' ' + DOM.plural(q.marks, 'mark')];
    bits.push(q.neg ? (q.negLabel || q.neg) + ' if wrong' : 'no negative marking');
    if (q.time) bits.push('about ' + Math.round(q.time / 30) / 2 + ' min');
    const row = el('div', { class: 'row' });
    bits.forEach(function (b, i) {
      if (i) row.appendChild(el('span', { class: 'count dot', 'aria-hidden': 'true', text: '·' }));
      row.appendChild(el('span', { class: 'count', text: b }));
    });
    return row;
  }

  const clock = ms => {
    const s = Math.max(0, Math.round(ms / 1000));
    return String(Math.floor(s / 60)) + ':' + String(s % 60).padStart(2, '0');
  };

  return {
    title, crumb, prose, math, kindBadge, tierBadge, doneBadge, meter, stat, empty,
    ladder, levelBadge, levelSwitch, ask, pendingPrereqs, mockBanner, gate, reveal, typeBadge, metaRow, clock
  };
})();

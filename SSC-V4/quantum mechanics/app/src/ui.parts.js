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

  /* The level a concept has reached, as a badge. One vocabulary everywhere:
     1 read, 2 proof worked, 3 exercises done — and the colour says which. */
  const LEVEL_NAME = ['not started', 'read', 'proof worked', 'exercises done', 'all complete'];
  const levelBadge = function (id) {
    const n = Progress.level(id);
    if (!n) return null;
    return el('span', { class: 'badge lv' + n }, [
      DOM.mi(n >= 3 ? 'workspace_premium' : n >= 2 ? 'function' : 'check', 'xs'),
      el('span', { text: 'level ' + n + ' · ' + LEVEL_NAME[n] })
    ]);
  };

  /* `lv` is a level (1, 2, 3) to colour the fill with, or `true` for the plain
     "finished" green. Left out, the meter is accent-coloured and says nothing
     about levels — which is right for recall and first-attempt numbers. */
  const meter = (a, b, lv) => el('div', {
    class: 'meter' + (lv === true ? ' ok' : lv ? ' lv' + lv : '')
  }, [el('i', { style: { width: DOM.pct(a, b) + '%' } })]);

  /* ── the three-level bar ─────────────────────────────────────────────────
     `c` is a Progress.count(): l1/l2/l3 are cumulative, so the widths nest and
     the bar reads green | amber | red | untouched with no arithmetic. */
  function levelBar(c, opts) {
    const o = opts || {};
    const bar = el('div', { class: 'lvbar', role: 'img',
      'aria-label': c.l1 + ' read, ' + c.l2 + ' with the proof worked, ' + c.l3 +
        ' with the exercises done, of ' + c.total });
    DOM.add(bar, [
      el('i', { class: 'a', style: { width: DOM.pct(c.l1, c.total) + '%' } }),
      el('i', { class: 'b', style: { width: DOM.pct(c.l2, c.total) + '%' } }),
      el('i', { class: 'c', style: { width: DOM.pct(c.l3, c.total) + '%' } })
    ]);
    if (o.key === false) return bar;
    return el('div', {}, [bar, el('div', { class: 'lvkey' }, [
      el('span', { class: 'k1' }, [el('em', {}), el('span', { text: 'read ' + c.l1 + '/' + c.total })]),
      el('span', { class: 'k2' }, [el('em', {}), el('span', { text: 'proofs ' + c.l2 + '/' + c.total })]),
      el('span', { class: 'k3' }, [el('em', {}), el('span', { text: 'exercises ' + c.l3 + '/' + c.total })])
    ])]);
  }

  /* The ring every tree row and course card draws: coloured by the level the
     WHOLE group has reached, filled by how far it has got towards the next. */
  function levelRing(c, label) {
    const at = c.min;
    const reached = at >= 3 ? c.l3 : at >= 2 ? c.l3 : at >= 1 ? c.l2 : c.l1;
    const pc = at >= 3 ? 100 : DOM.pct(reached, c.total);
    const node = el('span', {
      class: 'ring', 'data-lv': String(at), role: 'img',
      'aria-label': (label || '') + ' level ' + at + ', ' + reached + ' of ' + c.total +
        ' at the next level'
    }, [el('i', { text: c.total ? (at >= 3 ? c.total + '/' + c.total : reached + '/' + c.total) : '—' })]);
    window.requestAnimationFrame(() => node.style.setProperty('--p', pc));
    return node;
  }

  function stat(n, label, sub, bar) {
    return el('div', { class: 'stat' }, [
      el('div', { class: 'n', text: n }),
      el('div', { class: 'l', text: label }),
      sub ? el('div', { class: 's', text: sub }) : null,
      bar ? el('div', { style: { marginTop: '8px' } }, [bar]) : null
    ]);
  }

  const empty = (msg, extra) => el('div', { class: 'empty' }, [el('p', { text: msg }), extra || null]);

  /* Mastery ladder, for ONE concept. Nothing here is chosen — each rung is
     earned by a different act, and the caption says which act is still owed. */
  function ladder(id) {
    const at = Progress.level(id);
    const hasProof = Progress.hasProof(id);
    const c = Pool.concept(id);
    const tasks = c ? Progress.secTaskState(c.sec) : { total: 0, done: 0 };

    const caption = at === 3 ? '3 · section exercises done'
      : at === 2 ? '2 · proof worked through'
      : at === 1 ? '1 · read'
      : 'not started';

    /* A stage that does not exist is not a stage you are owed: a note with no
       proof is level 2 the moment it is read, and a section with no exercises
       cannot hold anything back from green. */
    const owed = at === 0 ? 'mark it read once you have been through it'
      : at === 1 ? 'complete the proof to reach level 2'
      : at === 2 ? ('level 3: ' + tasks.done + ' of ' + tasks.total + ' section exercises done')
      : 'nothing owed';

    const seg = n => el('span', {
      class: (n <= at ? 'on l' + n : ''),
      title: n === 1 ? 'Read' : n === 2 ? (hasProof ? 'Proof worked through' : 'No proof to work')
        : 'Section exercises worked'
    });

    return el('div', {}, [
      el('div', { class: 'ladder' }, [seg(1), seg(2), seg(3)]),
      el('div', { class: 'ladder-l' }, [
        el('span', { text: caption }),
        el('span', { text: owed })
      ])
    ]);
  }

  /* Which of a concept's prerequisites have not reached the level this note is
     held to. One definition, because the note view and the syllabus tree both
     offer the same cascade and must never disagree about what it would do. */
  const pendingPrereqs = id => Progress.pendingPrereqs(id);

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
      DOM.mi('science'),
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

  /* "2 minutes ago", for the sync line. Short, because it is a reassurance and
     not a measurement. */
  function ago(at) {
    const s = Math.max(0, Math.round((Date.now() - at) / 1000));
    if (s < 45) return 'just now';
    const m = Math.round(s / 60);
    if (m < 60) return m + ' ' + DOM.plural(m, 'minute') + ' ago';
    const h = Math.round(m / 60);
    if (h < 24) return h + ' ' + DOM.plural(h, 'hour') + ' ago';
    const d = Math.round(h / 24);
    return d + ' ' + DOM.plural(d, 'day') + ' ago';
  }

  const clock = ms => {
    const s = Math.max(0, Math.round(ms / 1000));
    return String(Math.floor(s / 60)) + ':' + String(s % 60).padStart(2, '0');
  };

  return {
    title, crumb, prose, math, kindBadge, tierBadge, meter, stat, empty,
    ladder, levelBadge, levelBar, levelRing, ask, pendingPrereqs, mockBanner, gate, reveal,
    typeBadge, metaRow, clock, ago
  };
})();

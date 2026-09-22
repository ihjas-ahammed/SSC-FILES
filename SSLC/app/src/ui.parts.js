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

  const kindBadge = c => el('span', { class: 'badge', text: (typeof I18N !== 'undefined') ? I18N.kind(c.kind) : (c.kind || 'note') });

  const tierBadge = c => {
    const isOut = (typeof Pool !== 'undefined' && Pool.isExt && Pool.isExt(c)) || (c.tier && c.tier === 'ext');
    if (isOut) {
      return el('span', { class: 'badge warn', text: (typeof I18N !== 'undefined') ? I18N.t('outside_syllabus') : 'outside syllabus' });
    }
    if (c.tier && c.tier !== 'core') {
      return el('span', { class: 'badge warn', text: c.tier });
    }
    return null;
  };

  /* The level a concept has reached, as a badge. One vocabulary everywhere:
     1 read, 2 proof worked, 3 exercises done — and the colour says which. */
  /* The level a concept has reached, as a badge. One vocabulary everywhere:
     1 read, 2 proof worked, 3 exercises done — and the colour says which. */
  const levelBadge = function (id) {
    const n = Progress.level(id);
    if (!n) return null;
    const c = Pool.concept(id);
    const isFnd = c && (typeof Pool.courseOfSec === 'function') && (Pool.courseOfSec(c.sec) || {}).id === 'foundation';
    const isMax = isFnd ? n >= 2 : n >= 3;
    const word = (typeof I18N !== 'undefined') ? I18N.levelName(n) : ['not started', 'read', 'exercises done', 'PYQ complete'][n];
    const lvTxt = (typeof I18N !== 'undefined') ? I18N.t('level') : 'level';
    return el('span', { class: 'badge lv' + (isMax ? '3' : n) }, [
      DOM.mi(isMax ? 'workspace_premium' : n >= 2 ? 'assignment_turned_in' : 'check', 'xs'),
      el('span', { text: lvTxt + ' ' + n + ' · ' + word })
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
    const isFnd = c.isFnd || c.maxLv === 2 || o.isFnd;
    const readTxt = (typeof I18N !== 'undefined') ? I18N.t('read_lc') : 'read';
    const exTxt = (typeof I18N !== 'undefined') ? I18N.t('exercises_lc') : 'exercises';
    const pyqTxt = (typeof I18N !== 'undefined') && I18N.lang() === 'ml' ? 'മുൻവർഷ ചോദ്യങ്ങൾ' : 'PYQ';

    if (isFnd) {
      const bar = el('div', { class: 'lvbar', role: 'img',
        'aria-label': c.l1 + ' ' + readTxt + ', ' + c.l2 + ' ' + exTxt + ' of ' + c.total });
      DOM.add(bar, [
        el('i', { class: 'a', style: { width: DOM.pct(c.l1, c.total) + '%' } }),
        el('i', { class: 'c', style: { width: DOM.pct(c.l2, c.total) + '%' } })
      ]);
      if (o.key === false) return bar;
      return el('div', {}, [bar, el('div', { class: 'lvkey' }, [
        el('span', { class: 'k1' }, [el('em', {}), el('span', { text: readTxt + ' ' + c.l1 + '/' + c.total })]),
        el('span', { class: 'k3' }, [el('em', {}), el('span', { text: exTxt + ' ' + c.l2 + '/' + c.total })])
      ])]);
    }

    const bar = el('div', { class: 'lvbar', role: 'img',
      'aria-label': c.l1 + ' ' + readTxt + ', ' + c.l2 + ' ' + exTxt + ', ' + c.l3 +
        ' ' + pyqTxt + ', of ' + c.total });
    DOM.add(bar, [
      el('i', { class: 'a', style: { width: DOM.pct(c.l1, c.total) + '%' } }),
      el('i', { class: 'b', style: { width: DOM.pct(c.l2, c.total) + '%' } }),
      el('i', { class: 'c', style: { width: DOM.pct(c.l3, c.total) + '%' } })
    ]);
    if (o.key === false) return bar;
    return el('div', {}, [bar, el('div', { class: 'lvkey' }, [
      el('span', { class: 'k1' }, [el('em', {}), el('span', { text: readTxt + ' ' + c.l1 + '/' + c.total })]),
      el('span', { class: 'k2' }, [el('em', {}), el('span', { text: exTxt + ' ' + c.l2 + '/' + c.total })]),
      el('span', { class: 'k3' }, [el('em', {}), el('span', { text: pyqTxt + ' ' + c.l3 + '/' + c.total })])
    ])]);
  }

  /* The ring every tree row and course card draws: coloured by the level the
     WHOLE group has reached, filled by how far it has got towards the next. */
  function levelRing(c, label) {
    const isFnd = c.isFnd || c.maxLv === 2;
    const top = isFnd ? 2 : 3;
    const at = c.min;
    const reached = at >= top ? c.total : at >= 2 ? (isFnd ? c.l2 : c.l3) : at >= 1 ? c.l2 : c.l1;
    const pc = at >= top ? 100 : DOM.pct(reached, c.total);
    const node = el('span', {
      class: 'ring', 'data-lv': String(at >= top ? 3 : at), role: 'img',
      'aria-label': (label || '') + ' level ' + at + ', ' + reached + ' of ' + c.total +
        ' at the next level'
    }, [el('i', { text: c.total ? (at >= top ? c.total + '/' + c.total : reached + '/' + c.total) : '—' })]);
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

  /* Mastery ladder, for ONE concept (3 levels: 1 Read, 2 Exercises, 3 PYQ; 2 levels for foundation). */
  function ladder(id) {
    const at = Progress.level(id);
    const c = Pool.concept(id);
    const isFnd = c && (typeof Pool.courseOfSec === 'function') && (Pool.courseOfSec(c.sec) || {}).id === 'foundation';
    const tasks = c ? Progress.secTaskState(c.sec) : { total: 0, done: 0 };

    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const caption = isFnd
      ? (at >= 2 ? (isMl ? '2 · പരിശീലനം പൂർത്തിയായി' : '2 · exercises done')
        : at === 1 ? (isMl ? '1 · വായിച്ചു' : '1 · read')
        : (typeof I18N !== 'undefined' ? I18N.t('not_started') : 'not started'))
      : (at === 3 ? (isMl ? '3 · മുൻവർഷ ചോദ്യങ്ങൾ (PYQ) പൂർത്തിയായി' : '3 · past exam papers (PYQ) complete')
        : at === 2 ? (isMl ? '2 · പരിശീലനം പൂർത്തിയായി' : '2 · exercises done')
        : at === 1 ? (isMl ? '1 · വായിച്ചു' : '1 · read')
        : (typeof I18N !== 'undefined' ? I18N.t('not_started') : 'not started'));

    const owed = isFnd
      ? (at === 0 ? (isMl ? 'വായിച്ച ശേഷം വായിച്ചു എന്ന് അടയാളപ്പെടുത്തുക' : 'mark it read once you have studied it')
        : at === 1 ? (tasks.total ? (isMl ? ('ലെവൽ 2: ' + tasks.done + '/' + tasks.total + ' പരിശീലന ചോദ്യങ്ങൾ ചെയ്യുക') : ('level 2: ' + tasks.done + ' of ' + tasks.total + ' section exercises done')) : (isMl ? 'ലെവൽ 2 പൂർത്തിയായി' : 'level 2 is clear'))
        : (isMl ? 'പൂർണ്ണമായി' : 'all complete'))
      : (at === 0 ? (isMl ? 'വായിച്ച ശേഷം വായിച്ചു എന്ന് അടയാളപ്പെടുത്തുക' : 'mark it read once you have studied it')
        : at === 1 ? (tasks.total ? (isMl ? ('ലെവൽ 2: ' + tasks.done + '/' + tasks.total + ' പരിശീലന ചോദ്യങ്ങൾ ചെയ്യുക') : ('level 2: ' + tasks.done + ' of ' + tasks.total + ' section exercises done')) : (isMl ? 'ലെവൽ 2 പൂർത്തിയായി' : 'level 2 is clear'))
        : at === 2 ? (isMl ? 'ലെവൽ 3: മുൻവർഷ ചോദ്യങ്ങൾ (PYQ) ചെയ്യുക' : 'level 3: complete past exam papers (PYQ)')
        : (isMl ? 'പൂർണ്ണമായി' : 'all complete'));

    const seg = n => el('span', {
      class: (n <= at ? 'on l' + (isFnd && n === 2 ? '3' : n) : ''),
      title: n === 1 ? (isMl ? 'വായിച്ചു' : 'Read')
        : n === 2 ? (isMl ? 'പരിശീലനം' : 'Exercises')
        : (isMl ? 'മുൻവർഷ ചോദ്യങ്ങൾ (PYQ)' : 'Past exam papers (PYQ)')
    });

    const segments = isFnd ? [seg(1), seg(2)] : [seg(1), seg(2), seg(3)];

    return el('div', {}, [
      el('div', { class: 'ladder' }, segments),
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
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const defaultOpen = isMl ? 'കാണുക' : 'Show';
    const defaultClose = isMl ? 'മറയ്ക്കുക' : 'Hide';
    const body = el('div', { class: 'b', hidden: true });
    const btn = el('button', { class: 'chip', type: 'button', 'aria-expanded': 'false',
      text: o.openLabel || defaultOpen });
    let built = false;
    btn.addEventListener('click', function () {
      const open = body.hidden;
      if (open && !built) { built = true; DOM.add(body, buildBody()); math(body); }
      body.hidden = !open;
      btn.setAttribute('aria-expanded', String(open));
      btn.textContent = open ? (o.closeLabel || defaultClose) : (o.openLabel || defaultOpen);
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
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const marksText = isMl ? (q.marks + ' മാർക്ക്') : (q.marks + ' ' + DOM.plural(q.marks, 'mark'));
    const bits = [marksText];
    if (q.neg) {
      bits.push(q.negLabel ? q.negLabel : (isMl ? (q.neg + ' തെറ്റിയാൽ കുറയും') : (q.neg + ' if wrong')));
    } else {
      bits.push(isMl ? 'നെഗറ്റീവ് മാർക്കില്ല' : 'no negative marking');
    }
    if (q.time) {
      bits.push(isMl ? ('ഏകദേശം ' + Math.round(q.time / 30) / 2 + ' മിനിറ്റ്') : ('about ' + Math.round(q.time / 30) / 2 + ' min'));
    }
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
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const s = Math.max(0, Math.round((Date.now() - at) / 1000));
    if (s < 45) return isMl ? 'ഇപ്പോൾ' : 'just now';
    const m = Math.round(s / 60);
    if (m < 60) return isMl ? (m + ' മിനിറ്റ് മുൻപ്') : (m + ' ' + DOM.plural(m, 'minute') + ' ago');
    const h = Math.round(m / 60);
    if (h < 24) return isMl ? (h + ' മണിക്കൂർ മുൻപ്') : (h + ' ' + DOM.plural(h, 'hour') + ' ago');
    const d = Math.round(h / 24);
    return isMl ? (d + ' ദിവസം മുൻപ്') : (d + ' ' + DOM.plural(d, 'day') + ' ago');
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

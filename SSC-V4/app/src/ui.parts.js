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

  const tierBadge = c => (c.tier && c.tier !== 'core')
    ? el('span', { class: 'badge warn', text: c.tier === 'ext' ? 'extension' : c.tier })
    : null;

  const doneBadge = id => Store.isDone(id)
    ? el('span', { class: 'badge ok', text: '✓ completed' })
    : null;

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

  /* Mastery ladder: Level 1 is all this build can award, and it says so. */
  function ladder(done) {
    const names = ['Completed', 'Recognised', 'Recalled', 'Applied', 'Transferred'];
    return el('div', {}, [
      el('div', { class: 'ladder' }, names.map((n, i) =>
        el('span', { class: i === 0 && done ? 'on' : '', title: n }))),
      el('div', { class: 'ladder-l' }, [
        el('span', { text: done ? '1 · completed' : '1 · not yet completed' }),
        el('span', { text: 'levels 2–5 arrive in Level 2' })
      ])
    ]);
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
    ladder, mockBanner, gate, reveal, typeBadge, metaRow, clock
  };
})();

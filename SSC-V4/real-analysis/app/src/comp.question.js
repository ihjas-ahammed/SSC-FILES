/* ══════════════════════════════════════════════════════════════════════════
   One objective question, as a component.

   This used to live inside the Questions page, which is why answering a
   question meant leaving the note that taught it. The machinery is unchanged —
   OMR sheet first, lock, then verdict + worked answer + what it tests + trap +
   variant — it has simply stopped belonging to a screen, so the note can put a
   question inside itself and the reel can put one on a card.

   MCQ, MSQ and NAT are scored by their own rules, not one shared rule:
     MCQ  one key; a wrong lock costs the negative mark
     MSQ  the exact set is required; a clean subset is reported as partial and
          earns nothing, which is the convention these papers use
     NAT  numeric within the stated tolerance; no negative marking
   Only the first lock is recorded.
   ══════════════════════════════════════════════════════════════════════════ */

const QuestionCard = (function () {

  const el = DOM.el;

  /* ── scoring ───────────────────────────────────────────────────────────── */
  function judge(q, given) {
    if (q.type === 'MCQ') {
      return given === q.answer ? 'correct' : 'wrong';
    }
    if (q.type === 'MSQ') {
      const key = q.answer.slice().sort().join(',');
      const got = given.slice().sort().join(',');
      if (key === got) return 'correct';
      const noWrong = given.every(k => q.answer.indexOf(k) >= 0);
      return (noWrong && given.length) ? 'partial' : 'wrong';
    }
    const n = parseFloat(String(given).replace(/[^0-9eE+\-.]/g, ''));
    if (!isFinite(n)) return 'wrong';
    return Math.abs(n - q.answer.value) <= (q.answer.tol || 0) + 1e-12 ? 'correct' : 'wrong';
  }

  const awarded = (q, verdict) =>
    verdict === 'correct' ? q.marks : (q.type === 'MCQ' ? (q.neg || 0) : 0);

  const keyText = q => q.type === 'NAT'
    ? q.answer.value.toFixed(q.answer.dp || 0) + (q.answer.tol ? ' (± ' + q.answer.tol + ')' : '')
    : (Array.isArray(q.answer) ? q.answer.join(' and ') : q.answer);

  const givenText = (q, given) => q.type === 'NAT'
    ? String(given)
    : (Array.isArray(given) ? (given.slice().sort().join(' and ') || '—') : given);

  /* The figure of the first tested concept that has one — seeing the picture
     right after the attempt is when it lands hardest. */
  function figureFor(q) {
    const withFig = (q.tests || [])
      .map(id => Pool.concept(id))
      .filter(c => c && Fig.forConcept(c).length)[0];
    if (!withFig) return null;
    const def = Fig.forConcept(withFig)[0].def;
    return el('div', { class: 'stack', style: { gap: '8px' } }, [
      el('div', { class: 'kicker', text: 'The picture behind it' }),
      Fig.frame(def)
    ]);
  }

  /* ── the component ───────────────────────────────────────────────────────
     opts.inNote   true when the question is open inside a note: the links back
                   to concepts are then pointless and the chrome is lighter
     opts.tail     extra nodes appended after the worked answer (the "next
                   question" row the Questions page still wants)
     opts.onLocked called with the verdict once the first lock lands */
  function build(q, opts) {
    const o = opts || {};
    const rec = Store.omr(q.id);
    const already = rec && rec.first;

    let given = q.type === 'MSQ' ? [] : (q.type === 'NAT' ? '' : null);
    let locked = false;
    const started = Date.now();

    const sheetHost = el('div', {});
    const actionHost = el('div', {});
    const resultHost = el('div', {});

    const timer = el('span', { class: 'timer', text: '0:00' });
    const tick = window.setInterval(function () {
      /* stop on lock, and stop once this component has been thrown away */
      if (locked || !document.body.contains(timer)) { window.clearInterval(tick); return; }
      timer.textContent = UI.clock(Date.now() - started);
    }, 1000);

    /* — OMR sheet — */
    function paintSheet(focusIdx) {
      DOM.clear(sheetHost);

      if (q.type === 'NAT') {
        const input = el('input', {
          type: 'text', inputmode: 'decimal', autocomplete: 'off',
          'aria-label': 'Your numeric answer', placeholder: '0.00',
          disabled: locked || null
        });
        input.value = typeof given === 'string' ? given : '';
        input.addEventListener('input', function () { given = input.value; paintActions(); });
        sheetHost.appendChild(el('div', { class: 'nat-in' }, [
          input,
          el('span', { class: 'small muted', text: q.answer.dp
            ? 'to ' + q.answer.dp + ' decimal places' : 'integer' })
        ]));
        if (locked) {
          sheetHost.appendChild(el('p', { class: 'small muted', style: { margin: '8px 0 0' },
            text: 'Accepted range: ' + keyText(q) }));
        }
        return;
      }

      const msq = q.type === 'MSQ';
      const group = el('div', {
        class: 'omr', role: msq ? 'group' : 'radiogroup',
        'aria-label': msq ? 'Select all correct options' : 'Select one option'
      });

      (q.options || []).forEach(function (opt) {
        const chosen = msq ? given.indexOf(opt.k) >= 0 : given === opt.k;
        const isKey = locked && (msq ? q.answer.indexOf(opt.k) >= 0 : q.answer === opt.k);
        const badChoice = locked && chosen && !isKey;

        const row = el('button', {
          class: 'omr-opt' + (msq ? ' msq' : '') + (isKey ? ' key' : '') + (badChoice ? ' chosen-bad' : ''),
          type: 'button',
          role: msq ? 'checkbox' : 'radio',
          'aria-checked': String(chosen),
          'aria-disabled': locked ? 'true' : null
        }, [
          el('span', { class: 'bub', 'aria-hidden': 'true', text: opt.k }),
          el('span', { class: 't', html: opt.t }),
          locked && isKey ? el('span', { class: 'omr-mark ok', text: 'key' }) : null,
          badChoice ? el('span', { class: 'omr-mark bad', text: 'yours' }) : null
        ]);

        if (!locked) row.addEventListener('click', function () {
          if (msq) {
            const i = given.indexOf(opt.k);
            if (i >= 0) given.splice(i, 1); else given.push(opt.k);
          } else given = opt.k;
          paintSheet(q.options.indexOf(opt));   /* keep focus on the row just used */
          paintActions();
        });
        group.appendChild(row);
      });

      /* arrow-key movement inside the group, as a radiogroup should behave */
      group.addEventListener('keydown', function (e) {
        if (locked) return;
        const keys = ['ArrowDown', 'ArrowRight', 'ArrowUp', 'ArrowLeft'];
        if (keys.indexOf(e.key) < 0) return;
        e.preventDefault();
        const rows = Array.prototype.slice.call(group.querySelectorAll('.omr-opt'));
        const at = rows.indexOf(document.activeElement);
        const dir = (e.key === 'ArrowDown' || e.key === 'ArrowRight') ? 1 : -1;
        const nextRow = rows[(at + dir + rows.length) % rows.length];
        if (nextRow) nextRow.focus();
      });

      sheetHost.appendChild(group);
      if (focusIdx != null) {
        const rows = group.querySelectorAll('.omr-opt');
        if (rows[focusIdx]) rows[focusIdx].focus({ preventScroll: true });
      }
      UI.math(group);
    }

    /* — lock / clear — */
    function hasAnswer() {
      if (q.type === 'MSQ') return given.length > 0;
      if (q.type === 'NAT') return String(given).trim().length > 0;
      return !!given;
    }

    function paintActions() {
      DOM.clear(actionHost);
      if (locked) return;
      DOM.add(actionHost, [
        el('div', { class: 'btn-row' }, [
          el('button', {
            class: 'btn primary', type: 'button', disabled: hasAnswer() ? null : true,
            text: q.type === 'MSQ' ? 'Lock ' + (given.length || 'no') + ' selected' : 'Lock answer',
            on: { click: lock }
          }),
          hasAnswer() ? el('button', { class: 'btn', type: 'button', text: 'Clear',
            on: { click: function () {
              given = q.type === 'MSQ' ? [] : (q.type === 'NAT' ? '' : null);
              paintSheet(); paintActions();
            } } }) : null
        ]),
        el('p', { class: 'small muted', style: { margin: '10px 0 0' },
          text: already
            ? 'Your first attempt (' + already.verdict + ') is already on record; this pass is not recorded.'
            : 'Locking records your first attempt. The worked answer follows immediately.' })
      ]);
    }

    function lock() {
      if (locked || !hasAnswer()) return;
      locked = true;
      const verdict = judge(q, given);
      const ms = Date.now() - started;
      const saved = Store.lockOmr(q.id, { given: given, verdict: verdict, ms: ms });
      paintSheet();
      DOM.clear(actionHost);
      resultHost.appendChild(feedback(q, given, verdict, ms, saved));
      UI.math(resultHost);
      DOM.announce(verdict === 'correct' ? 'Correct.' : verdict === 'partial'
        ? 'Partially correct — no marks under this paper’s rule.' : 'Incorrect. Worked answer shown.');
      if (o.onLocked) o.onLocked(verdict);
      const h = resultHost.querySelector('.verdict');
      if (h) h.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    /* — after the lock: verdict, worked answer, what it tests, trap, twist — */
    function feedback(q, given, verdict, ms, saved) {
      const wrap = el('div', { class: 'stack' });
      const marks = awarded(q, verdict);
      const cls = verdict === 'correct' ? 'ok' : verdict === 'partial' ? 'warn' : 'bad';
      const glyph = verdict === 'correct' ? 'check_circle' : verdict === 'partial' ? 'remove_circle' : 'cancel';

      DOM.add(wrap, [
        el('div', { class: 'verdict ' + cls }, [
          el('span', { class: 'g', 'aria-hidden': 'true' }, [DOM.mi(glyph)]),
          el('span', {}, [
            el('b', { text: verdict === 'correct' ? 'Correct' : verdict === 'partial'
              ? 'Partially correct — this paper awards nothing for a partial set' : 'Not correct' }),
            el('span', { text: 'You answered ' + givenText(q, given) + ' · key ' + keyText(q) +
              ' · ' + (marks > 0 ? '+' : '') + (Math.round(marks * 100) / 100) + ' ' +
              DOM.plural(Math.abs(marks), 'mark') + ' · ' + UI.clock(ms) })
          ])
        ]),

        saved.tries > 1 ? el('p', { class: 'small muted', style: { margin: 0 },
          text: 'First attempt (' + saved.first.verdict + ') is unchanged — that is the number the stats use.' }) : null,

        el('div', { class: 'card' }, [
          el('div', { class: 'kicker', text: 'Worked answer' }),
          el('div', { style: { marginTop: '10px' } }, [UI.prose(q.solution, 'tight')])
        ]),

        q.tested ? el('div', { class: 'card tint' }, [
          el('div', { class: 'kicker', text: 'What this actually tests' }),
          el('div', { style: { marginTop: '10px' } }, [UI.prose(q.tested, 'tight')]),
          o.inNote ? null : el('div', { class: 'row', style: { marginTop: '12px' } },
            (q.tests || []).map(function (id) {
              const c = Pool.concept(id);
              return c
                ? el('a', { class: 'chip', href: Router.href('note/' + id), text: c.title })
                : el('span', { class: 'chip ghost', text: id });
            }))
        ]) : null,

        /* the picture of the idea being examined, where there is one */
        figureFor(q),

        q.trap ? el('div', { class: 'card' }, [
          el('div', { class: 'kicker', text: 'The trap' }),
          el('div', { style: { marginTop: '10px' } }, [UI.prose(q.trap, 'tight')])
        ]) : null,

        q.twist ? UI.reveal('Changed version', function () {
          return el('div', { class: 'stack', style: { gap: '10px' } }, [
            UI.prose(q.twist.q, 'tight'),
            UI.reveal('Answer', () => UI.prose(q.twist.a, 'tight'),
              { openLabel: 'Show', closeLabel: 'Hide' })
          ]);
        }, { openLabel: 'Try the variant', closeLabel: 'Hide the variant' }) : null,

        o.tail || null
      ]);
      return wrap;
    }

    const node = el('div', { class: o.inNote ? 'stack qcard' : 'card' }, [
      el('div', { class: 'spread' }, [
        el('div', { class: 'row' }, [
          UI.typeBadge(q),
          q.mock ? el('span', { class: 'badge warn', text: 'draft' }) : null
        ]),
        timer
      ]),
      el('div', { style: { marginTop: '10px' } }, [UI.metaRow(q)]),
      el('div', { style: { marginTop: '14px' } }, [UI.prose(q.prompt)]),
      el('div', { style: { marginTop: '16px' } }, [sheetHost]),
      el('div', { style: { marginTop: '16px' } }, [actionHost]),
      resultHost
    ]);

    paintSheet();
    paintActions();
    UI.math(node);
    return node;
  }

  return { build, judge, awarded, keyText, givenText, figureFor };
})();

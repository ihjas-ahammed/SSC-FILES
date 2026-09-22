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
      const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
      DOM.clear(sheetHost);

      if (q.type === 'NAT') {
        const input = el('input', {
          type: 'text', inputmode: 'decimal', autocomplete: 'off',
          'aria-label': isMl ? 'നിങ്ങളുടെ സംഖ്യാ ഉത്തരം' : 'Your numeric answer', placeholder: '0.00',
          disabled: locked || null
        });
        input.value = typeof given === 'string' ? given : '';
        input.addEventListener('input', function () { given = input.value; paintActions(); });
        sheetHost.appendChild(el('div', { class: 'nat-in' }, [
          input,
          el('span', { class: 'small muted', text: q.answer.dp
            ? (isMl ? (q.answer.dp + ' ദശാംശസ്ഥാനം വരെ') : ('to ' + q.answer.dp + ' decimal places'))
            : (isMl ? 'പൂർണ്ണസംഖ്യ' : 'integer') })
        ]));
        if (locked) {
          sheetHost.appendChild(el('p', { class: 'small muted', style: { margin: '8px 0 0' },
            text: (isMl ? 'ശരിയായ പരിധി: ' : 'Accepted range: ') + keyText(q) }));
        }
        return;
      }

      const msq = q.type === 'MSQ';
      const selectAria = msq
        ? ((typeof I18N !== 'undefined') ? I18N.t('select_all_correct') : 'Select all correct options')
        : ((typeof I18N !== 'undefined') ? I18N.t('select_one_option') : 'Select one option');
      const group = el('div', {
        class: 'omr', role: msq ? 'group' : 'radiogroup',
        'aria-label': selectAria
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
          locked && isKey ? el('span', { class: 'omr-mark ok', text: (typeof I18N !== 'undefined') ? I18N.t('key') : 'key' }) : null,
          badChoice ? el('span', { class: 'omr-mark bad', text: (typeof I18N !== 'undefined') ? I18N.t('yours') : 'yours' }) : null
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
      const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
      DOM.clear(actionHost);
      if (locked) return;
      DOM.add(actionHost, [
        el('div', { class: 'btn-row' }, [
          el('button', {
            class: 'btn primary', type: 'button', disabled: hasAnswer() ? null : true,
            text: q.type === 'MSQ'
              ? (isMl ? ('തിരഞ്ഞെടുത്ത ' + (given.length || 0) + ' എണ്ണം സ്ഥിരീകരിക്കുക') : ('Lock ' + (given.length || 'no') + ' selected'))
              : ((typeof I18N !== 'undefined') ? I18N.t('lock_answer') : 'Lock answer'),
            on: { click: lock }
          }),
          hasAnswer() ? el('button', { class: 'btn', type: 'button',
            text: (typeof I18N !== 'undefined') ? I18N.t('clear') : 'Clear',
            on: { click: function () {
              given = q.type === 'MSQ' ? [] : (q.type === 'NAT' ? '' : null);
              paintSheet(); paintActions();
            } } }) : null
        ]),
        el('p', { class: 'small muted', style: { margin: '10px 0 0' },
          text: already
            ? (isMl ? ('നിങ്ങളുടെ ആദ്യ ശ്രമം (' + already.verdict + ') രേഖപ്പെടുത്തിയിട്ടുണ്ട്.') : ('Your first attempt (' + already.verdict + ') is already on record; this pass is not recorded.'))
            : (isMl ? 'ഉത്തരം സ്ഥിരീകരിച്ചാൽ ഉടൻ വിശദമായ പരിഹാരം കാണാം.' : 'Locking records your first attempt. The worked answer follows immediately.') })
      ]);
    }

    function lock() {
      if (locked || !hasAnswer()) return;
      locked = true;
      const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
      const verdict = judge(q, given);
      const ms = Date.now() - started;
      const saved = Store.lockOmr(q.id, { given: given, verdict: verdict, ms: ms });
      paintSheet();
      DOM.clear(actionHost);
      resultHost.appendChild(feedback(q, given, verdict, ms, saved));
      UI.math(resultHost);
      DOM.announce(verdict === 'correct'
        ? (isMl ? 'ശരിയുത്തരം.' : 'Correct.')
        : verdict === 'partial'
          ? (isMl ? 'ഭാഗികമായി ശരി.' : 'Partially correct.')
          : (isMl ? 'തെറ്റായ ഉത്തരം. പരിഹാരം കാണിച്ചിരിക്കുന്നു.' : 'Incorrect. Worked answer shown.'));
      if (o.onLocked) o.onLocked(verdict);
      const h = resultHost.querySelector('.verdict');
      if (h) h.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }

    /* — after the lock: verdict, worked answer, what it tests, trap, twist — */
    function feedback(q, given, verdict, ms, saved) {
      const isMl = (typeof I18N !== 'undefined') && I18N.lang() === 'ml';
      const wrap = el('div', { class: 'stack' });
      const marks = awarded(q, verdict);
      const cls = verdict === 'correct' ? 'ok' : verdict === 'partial' ? 'warn' : 'bad';
      const glyph = verdict === 'correct' ? 'check_circle' : verdict === 'partial' ? 'remove_circle' : 'cancel';

      const verdictTitle = verdict === 'correct'
        ? ((typeof I18N !== 'undefined') ? I18N.t('correct') : 'Correct')
        : verdict === 'partial'
          ? ((typeof I18N !== 'undefined') ? I18N.t('partially_correct') : 'Partially correct')
          : ((typeof I18N !== 'undefined') ? I18N.t('not_correct') : 'Not correct');

      const marksWord = isMl ? 'മാർക്ക്' : DOM.plural(Math.abs(marks), 'mark');

      DOM.add(wrap, [
        el('div', { class: 'verdict ' + cls }, [
          el('span', { class: 'g', 'aria-hidden': 'true' }, [DOM.mi(glyph)]),
          el('span', {}, [
            el('b', { text: verdictTitle }),
            el('span', { text: (isMl ? 'നിങ്ങൾ നൽകിയത് ' : 'You answered ') + givenText(q, given) +
              (isMl ? ' · ശരിയുത്തരം ' : ' · key ') + keyText(q) +
              ' · ' + (marks > 0 ? '+' : '') + (Math.round(marks * 100) / 100) + ' ' +
              marksWord + ' · ' + UI.clock(ms) })
          ])
        ]),

        saved.tries > 1 ? el('p', { class: 'small muted', style: { margin: 0 },
          text: isMl ? ('ആദ്യ ശ്രമം (' + saved.first.verdict + ') മാറ്റിയിട്ടില്ല.') : ('First attempt (' + saved.first.verdict + ') is unchanged — that is the number the stats use.') }) : null,

        el('div', { class: 'card' }, [
          el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('worked_answer') : 'Worked answer' }),
          el('div', { style: { marginTop: '10px' } }, [UI.prose(q.solution, 'tight')])
        ]),

        q.tested ? el('div', { class: 'card tint' }, [
          el('div', { class: 'kicker', text: (typeof I18N !== 'undefined') ? I18N.t('what_tests') : 'What this actually tests' }),
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
          el('div', { class: 'kicker', text: isMl ? 'ശ്രദ്ധിക്കേണ്ട കാര്യം' : 'The trap' }),
          el('div', { style: { marginTop: '8px' } }, [UI.prose(q.trap, 'tight')])
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

/* ══════════════════════════════════════════════════════════════════════════
   The writing workspace — a live markdown editor, one line at a time.

   The old workspace was a textarea with the rendering underneath and a sheet
   of LaTeX keys at the bottom. Two things were wrong with it on a phone: the
   key sheet covered the input it was meant to serve, and the rendering sat so
   far below a growing block of source that you stopped looking at it.

   So the shape is inverted. You write ONE line at a time, and that line's
   rendering sits directly ABOVE the input — where your eyes already are.
   Press Enter and the line settles into the document above; a fresh input
   appears beneath it, with its own output right above it again. The page
   fills downward with rendered mathematics and the caret is always at the
   bottom of it. Tap any settled line to reopen it.

   Commands are offered as completions rather than as a palette (core.latex.js):
   type a backslash and the matches appear in a strip immediately under the
   input, thumb-high. When nothing is being typed the strip shows the commands
   this theorem actually uses, so discovery still works without knowing how to
   spell anything.

   Still deliberately NOT a checker: it verifies that what you wrote renders,
   and says so out loud. Whether the mathematics is right stays your call.
   ══════════════════════════════════════════════════════════════════════════ */

const WriteBox = (function () {

  const el = DOM.el;

  function mount(host, opts) {
    const o = opts || {};
    const concept = o.concept || null;
    const uid = 'w' + Math.random().toString(36).slice(2, 8);

    /* MARKDOWN IS THE DEFAULT, AND SO IS MATHS. Every line is prose until you
       put maths in it, because a workspace you cannot write a sentence in is
       not a workspace — it is a formula box.

       Maths no longer needs fencing: write `I love \\frac{1}{2} in fact` and
       core.md.js finds the expression, typesets it, and leaves the sentence
       alone. Explicit $…$ and $$…$$ still work and still win, and the Σ key
       wraps the whole line for when the line really is nothing but maths.

       `mathFirst: true` is the opt-in exception for boxes that exist only to
       capture one formula; there, a line with no $ is taken as bare LaTeX. */
    const mathFirst = o.mathFirst === true;

    /* What the draft is filed under. Usually the concept, but a proof
       scratchpad and a statement attempt are different pieces of work on the
       same concept, so they need different keys — 'proof:<id>' for the former.
       Both merge across devices like any other draft. */
    const draftKey = o.draftKey || (concept ? concept.id : null);

    let firstInputFired = false;
    let lines = [''];
    let active = 0;

    const stored = (o.value != null ? o.value : (draftKey ? Store.draft(draftKey) : '')) || '';
    if (stored) { lines = stored.split('\n'); active = lines.length - 1; }

    /* ── chrome ────────────────────────────────────────────────────────── */
    const isMl = typeof I18N !== 'undefined' && I18N.lang() === 'ml';
    const doc = el('div', { class: 'wdoc', id: uid + '-doc' });
    const strip = el('div', { class: 'wstrip', role: 'listbox',
      'aria-label': isMl ? 'കമാൻഡ് നിർദ്ദേശങ്ങൾ' : 'LaTeX command completions' });
    const errBox = el('div', { hidden: true });
    const saveNote = el('span', { class: 'small muted', text: '' });

    const hintText = isMl
      ? (mathFirst
        ? 'ഓരോ വരിയായി എഴുതുക. $ ഇല്ലാത്ത വരികൾ സമവാക്യമായി ദൃശ്യമാകും; വാക്കുകൾക്കൊപ്പം ചിഹ്നങ്ങൾ ചേർക്കാൻ $…$ ഉപയോഗിക്കുക. Enter അടുത്ത വരി തുടങ്ങും.'
        : 'സാധാരണ പോലെ എഴുതാം — **bold**, # തലക്കെട്ടുകൾ, - പട്ടിക. ഗണിത രൂപങ്ങൾക്ക് $ ആവശ്യമില്ല. Enter അടുത്ത വരി തുടങ്ങും.')
      : ((mathFirst
        ? 'One line at a time. A line with no $ is typeset as display maths; use $…$ to mix maths into words. '
        : 'Write normally — **bold**, # headings, - lists. Maths needs no dollar signs: '
          + 'type \\frac{1}{2} mid-sentence and it is typeset where it stands. A backslash '
          + 'opens the command list; the Σ key sets the whole line as display maths. ') +
        'Enter starts the next line.');

    const hint = el('p', {
      class: 'small muted', id: uid + '-hint', style: { margin: '6px 0 0' },
      text: hintText
    });

    /* the live input; one line, always the one you are writing */
    const field = el('input', {
      class: 'wfield', type: 'text', id: uid, spellcheck: 'false',
      autocapitalize: 'off', autocomplete: 'off', autocorrect: 'off',
      'aria-describedby': uid + '-hint',
      placeholder: o.placeholder || (isMl
        ? 'ഒരു വരി എഴുതുക — വാക്കുകൾ, അല്ലെങ്കിൽ \\frac{a}{b} പോലുള്ള ഗണിത രൂപങ്ങൾ…'
        : (mathFirst
          ? '\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\ldots'
          : 'Write a line — words, **bold**, or maths like \\varepsilon > 0 …'))
    });

    const newlineBtn = el('button', { class: 'wkey', type: 'button',
      title: isMl ? 'അടുത്ത വരി തുടങ്ങുക (Enter)' : 'Start the next line (Enter)',
      'aria-label': isMl ? 'അടുത്ത വരി തുടങ്ങുക' : 'Start the next line' },
      [DOM.mi('keyboard_return', 'sm')]);

    const mathBtn = el('button', { class: 'wkey', type: 'button',
      title: isMl ? 'ഈ വരി മുഴുവൻ സമവാക്യമാക്കുക' : 'Wrap this line in display maths',
      'aria-label': isMl ? 'ഈ വരി മുഴുവൻ സമവാക്യമാക്കുക' : 'Wrap this line in display maths' },
      [DOM.mi('functions', 'sm')]);

    /* ── rendering one line ────────────────────────────────────────────── */

    /* Returns a promise resolving {ok, error, hint} so the active line can
       report, and settled lines can stay quiet. */
    function paint(target, src) {
      const text = String(src == null ? '' : src);

      if (!text.trim()) {
        DOM.clear(target);
        target.appendChild(el('div', { class: 'ph',
          text: target.dataset.live ? (isMl ? 'നിങ്ങൾ ടൈപ്പ് ചെയ്യുമ്പോൾ ഈ വരി ഇവിടെ ദൃശ്യമാകും.' : 'This line renders here as you type.') : ' ' }));
        return Promise.resolve({ ok: true, empty: true });
      }

      if (mathFirst && !Markdown.hasMath(text)) {
        return Tex.renderFragment(target, text, { display: true });
      }

      DOM.clear(target);
      target.appendChild(el('div', { class: 'prose tight', html: Markdown.line(text) }));
      return Tex.typeset(target).then(function () {
        const bad = target.querySelector('mjx-merror, [data-mjx-error]');
        if (!bad) return { ok: true };
        return { ok: false,
          error: bad.getAttribute('data-mjx-error') || bad.textContent || (isMl ? 'ഈ വരിയിലെ ഗണിത രൂപം കാണിക്കാൻ കഴിഞ്ഞില്ല.' : 'MathJax could not parse the maths on this line.') };
      });
    }

    function showProblem(res) {
      if (!res || res.ok === true && !res.hint) { errBox.hidden = true; DOM.clear(errBox); return; }
      if (res.ok && res.hint) {
        DOM.clear(errBox);
        errBox.appendChild(el('div', { class: 'tex-err' }, [
          DOM.mi('info', 'sm'), el('span', { text: res.hint })
        ]));
        errBox.hidden = false;
        return;
      }
      if (res.ok) { errBox.hidden = true; DOM.clear(errBox); return; }
      DOM.clear(errBox);
      errBox.appendChild(el('div', { class: 'tex-err' }, [
        DOM.mi('report', 'sm'),
        el('span', {}, [
          el('b', { text: isMl ? 'ഈ വരി ഇതുവരെ വ്യക്തമായി രൂപപ്പെടുത്തിയിട്ടില്ല. ' : 'This line does not render yet. ' }),
          el('span', { text: res.error || (isMl ? '{ അല്ലെങ്കിൽ } കൃത്യമാണോ എന്ന് പരിശോധിക്കുക.' : 'Check for an unmatched { or }.') })
        ])
      ]));
      errBox.hidden = false;
    }

    /* ── the document ──────────────────────────────────────────────────── */

    let liveOut = null;          /* the output frame above the active input */

    /* Settled lines are re-rendered on every rebuild, and MathJax is the most
       expensive thing in the app. Their output only depends on their source,
       so keep the markup by source text and reuse it. */
    const cache = {};

    function build() {
      DOM.clear(doc);
      liveOut = null;

      lines.forEach(function (text, i) {
        const out = el('div', { class: 'wout' });
        const row = el('div', { class: 'wline' + (i === active ? ' live' : '') }, [
          el('span', { class: 'wnum', 'aria-hidden': 'true', text: String(i + 1) }),
          out
        ]);

        if (i === active) {
          out.dataset.live = '1';
          liveOut = out;
          doc.appendChild(row);
          doc.appendChild(el('div', { class: 'winput' }, [
            el('span', { class: 'wcaret', 'aria-hidden': 'true', text: '›' }),
            field, mathBtn, newlineBtn
          ]));
          field.value = text;
          paint(out, text).then(showProblem);
        } else {
          /* a settled line reopens on tap — that is the only way back */
          row.setAttribute('tabindex', '0');
          row.setAttribute('role', 'button');
          row.setAttribute('aria-label', (isMl ? 'വരി തിരുത്തുക ' : 'Edit line ') + (i + 1));
          const open = function (e) {
            if (e.type === 'keydown' && e.key !== 'Enter' && e.key !== ' ') return;
            e.preventDefault();
            focusLine(i, 'end');
          };
          row.addEventListener('click', open);
          row.addEventListener('keydown', open);
          doc.appendChild(row);
          if (cache[text] != null) out.innerHTML = cache[text];
          else paint(out, text).then(function () { cache[text] = out.innerHTML; });
        }
      });
    }

    const liveRender = DOM.debounce(function () {
      if (liveOut) paint(liveOut, field.value).then(showProblem);
    }, 200);

    const persist = DOM.debounce(function () {
      if (!draftKey) return;
      Store.saveDraft(draftKey, value());
      saveNote.textContent = value().trim() ? (isMl ? 'സേവ് ചെയ്തു' : 'Draft saved') : '';
    }, 700);

    function commitField() { lines[active] = field.value; }

    function focusLine(i, caret) {
      commitField();
      active = Math.max(0, Math.min(lines.length - 1, i));
      build();
      refreshStrip();
      /* synchronously: a requestAnimationFrame here leaves the user-gesture
         context, and iOS then refuses to bring the keyboard back up */
      field.focus();
      const at = caret === 'end' ? field.value.length : (caret || 0);
      try { field.setSelectionRange(at, at); } catch (e) { /* not focusable yet */ }
      revealInput();
    }

    /* ── completions ───────────────────────────────────────────────────── */
    let matches = [];
    let picked = 0;

    function refreshStrip() {
      const caret = field.selectionStart == null ? field.value.length : field.selectionStart;
      const tok = Latex.tokenAt(field.value, caret);
      matches = tok ? Latex.complete(tok.word, concept, 12) : Latex.suggestions(concept, 14);
      picked = 0;

      DOM.clear(strip);
      strip.appendChild(el('span', { class: 'wstrip-l', 'aria-hidden': 'true',
        text: tok ? (tok.text || '\\') : (isMl ? 'കമാൻഡുകൾ' : 'commands') }));

      matches.forEach(function (k, i) {
        strip.appendChild(el('button', {
          class: 'wsug' + (i === picked && tok ? ' on' : ''),
          type: 'button', role: 'option', 'aria-selected': String(i === picked && !!tok),
          title: '\\' + k.cmd + (k.desc ? ' — ' + k.desc : ''),
          on: { click: function () { take(k); } }
        }, [
          el('span', { class: 's', text: k.show }),
          el('span', { class: 'c', text: '\\' + k.cmd })
        ]));
      });

      if (!matches.length) {
        strip.appendChild(el('span', { class: 'small muted',
          text: isMl ? 'ഈ അക്ഷരങ്ങളുമായി പൊരുത്തപ്പെടുന്ന കമാൻഡുകളില്ല' : 'no command matches that spelling' }));
      }
    }

    /* Insert a command bare. It used to be wrapped in $…$ on the way in; that
       is now auto-math's job, and doing it here as well would fence half a
       sentence the learner is still writing. */
    function take(entry) {
      Latex.accept(field, entry, { wrapInMath: false });
      refreshStrip();
      revealInput();
    }

    /* ── keeping the input above the keyboard ────────────────────────────────
       An on-screen keyboard shrinks the VISUAL viewport but not the layout
       one, so an input near the bottom ends up behind it and the page looks
       like it simply refuses to scroll far enough. Correct it by hand: measure
       how far the input row plus its command strip overflow the visible
       bottom, and scroll the nearest scrolling ancestor by exactly that — the
       reel when we are inside it, the window otherwise. */
    function scroller(node) {
      let n = node.parentElement;
      while (n && n !== document.body) {
        const st = window.getComputedStyle(n);
        if (/(auto|scroll)/.test(st.overflowY) && n.scrollHeight > n.clientHeight + 4) return n;
        n = n.parentElement;
      }
      return null;
    }

    function revealInput() {
      if (document.activeElement !== field) return;
      const vv = window.visualViewport;
      const bottom = vv ? vv.offsetTop + vv.height : window.innerHeight;
      const top = vv ? vv.offsetTop : 0;
      const r = strip.getBoundingClientRect();
      const inputTop = field.getBoundingClientRect().top;

      let by = 0;
      const over = r.bottom + 12 - bottom;
      if (over > 1) by = over;
      else if (inputTop - 12 < top) by = inputTop - top - 12;
      if (!by) return;

      const sc = scroller(field);
      if (sc) sc.scrollTop += by;
      else window.scrollBy(0, by);
    }

    const reveal = DOM.debounce(revealInput, 90);
    field.addEventListener('focus', reveal);
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', reveal);
      window.visualViewport.addEventListener('scroll', reveal);
    }

    /* ── keys ──────────────────────────────────────────────────────────── */
    field.addEventListener('input', function () {
      reveal();
      liveRender();
      commitField();
      persist();
      refreshStrip();
      if (!firstInputFired && field.value.trim()) {
        firstInputFired = true;
        if (o.onFirstInput) o.onFirstInput();
      }
    });

    field.addEventListener('keydown', function (e) {
      const caret = field.selectionStart == null ? 0 : field.selectionStart;
      const len = field.value.length;

      if (e.key === 'Tab' && matches.length) {
        const tok = Latex.tokenAt(field.value, caret);
        if (tok) {
          e.preventDefault();
          take(matches[picked] || matches[0]);
          return;
        }
      }

      if (e.key === 'Enter') {
        e.preventDefault();
        newLine();
        return;
      }

      if (e.key === 'Backspace' && caret === 0 && field.selectionEnd === 0 && active > 0) {
        e.preventDefault();
        commitField();
        const carry = lines[active];
        const prevLen = lines[active - 1].length;
        lines[active - 1] += carry;
        lines.splice(active, 1);
        focusLine(active - 1, prevLen);
        persist();
        return;
      }

      if (e.key === 'ArrowUp' && caret === 0 && active > 0) {
        e.preventDefault();
        focusLine(active - 1, 'end');
        return;
      }

      if (e.key === 'ArrowDown' && caret === len && active < lines.length - 1) {
        e.preventDefault();
        focusLine(active + 1, 'end');
      }
    });

    field.addEventListener('click', refreshStrip);
    field.addEventListener('keyup', function (e) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') refreshStrip();
    });

    function newLine() {
      commitField();
      /* Enter on the last line when it is empty means "done", not "another
         blank line" — otherwise the document grows a tail of empties. */
      if (active === lines.length - 1 && !lines[active].trim() && lines.length > 1) {
        field.blur();
        return;
      }
      lines.splice(active + 1, 0, '');
      focusLine(active + 1, 0);
      persist();
    }

    newlineBtn.addEventListener('click', newLine);

    mathBtn.addEventListener('click', function () {
      const t = field.value.trim();
      const wrapped = /^\$\$[\s\S]*\$\$$/.test(t);
      field.value = wrapped ? t.replace(/^\$\$\s*|\s*\$\$$/g, '') : '$$ ' + t + ' $$';
      commitField();
      field.dispatchEvent(new Event('input', { bubbles: true }));
      field.focus();
    });

    /* ── assemble ──────────────────────────────────────────────────────── */
    const value = () => lines.join('\n');

    const box = el('div', { class: 'stack wbox', style: { gap: '10px' } }, [
      el('div', { class: 'spread' }, [
        el('label', { class: 'kicker', for: uid,
          text: o.label || (isMl ? 'എഴുതുക — ഓരോ വരിയായി' : 'Write it — one line at a time') }),
        saveNote
      ]),
      doc,
      strip,
      errBox,
      hint,
      el('p', {
        class: 'small muted', style: { margin: 0 },
        text: isMl ? 'നിങ്ങൾ എഴുതിയ ഗണിത രൂപം ശരിയായി ദൃശ്യമാകുന്നുണ്ടോ എന്ന് മാത്രമാണ് ഇത് പരിശോധിക്കുന്നത്. ഗണിത യുക്തി സ്വയം വിലയിരുത്തുക.'
                   : 'This checks only that what you wrote renders — not whether the mathematics is correct. That judgement stays yours.'
      })
    ]);
    host.appendChild(box);

    build();
    refreshStrip();

    return {
      value: value,
      focus: () => field.focus(),
      hasContent: () => !!value().trim(),
      node: box
    };
  }

  return { mount };
})();

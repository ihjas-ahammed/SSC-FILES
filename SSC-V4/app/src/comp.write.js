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

    /* A line with no $ in a maths-first box is bare LaTeX, rendered as display
       maths. One rule, stated in the hint, so nothing about it is a surprise. */
    const mathFirst = o.mathFirst !== false;

    let firstInputFired = false;
    let lines = [''];
    let active = 0;

    const stored = (o.value != null ? o.value : (concept ? Store.draft(concept.id) : '')) || '';
    if (stored) { lines = stored.split('\n'); active = lines.length - 1; }

    /* ── chrome ────────────────────────────────────────────────────────── */
    const doc = el('div', { class: 'wdoc', id: uid + '-doc' });
    const strip = el('div', { class: 'wstrip', role: 'listbox',
      'aria-label': 'LaTeX command completions' });
    const errBox = el('div', { hidden: true });
    const saveNote = el('span', { class: 'small muted', text: '' });

    const hint = el('p', {
      class: 'small muted', id: uid + '-hint', style: { margin: '6px 0 0' },
      text: (mathFirst
        ? 'One line at a time. A line with no $ is typeset as display maths; use $…$ to mix maths into words. '
        : 'One line at a time. Markdown, with maths written as $…$ and $$…$$. ') +
        'Enter starts the next line, and a backslash brings up the commands.'
    });

    /* the live input; one line, always the one you are writing */
    const field = el('input', {
      class: 'wfield', type: 'text', id: uid, spellcheck: 'false',
      autocapitalize: 'off', autocomplete: 'off', autocorrect: 'off',
      'aria-describedby': uid + '-hint',
      placeholder: o.placeholder || (mathFirst
        ? '\\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\ldots'
        : 'Write a line — **bold**, a list, or $x^2$…')
    });

    const newlineBtn = el('button', { class: 'wkey', type: 'button',
      title: 'Start the next line (Enter)', 'aria-label': 'Start the next line' },
      [el('span', { text: '↵' })]);

    const mathBtn = el('button', { class: 'wkey', type: 'button',
      title: 'Wrap this line in display maths', 'aria-label': 'Wrap this line in display maths' },
      [el('span', { text: 'Σ' })]);

    /* ── rendering one line ────────────────────────────────────────────── */

    /* Returns a promise resolving {ok, error, hint} so the active line can
       report, and settled lines can stay quiet. */
    function paint(target, src) {
      const text = String(src == null ? '' : src);

      if (!text.trim()) {
        DOM.clear(target);
        target.appendChild(el('div', { class: 'ph',
          text: target.dataset.live ? 'This line renders here as you type.' : ' ' }));
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
          error: bad.getAttribute('data-mjx-error') || bad.textContent || 'MathJax could not parse the maths on this line.' };
      });
    }

    function showProblem(res) {
      if (!res || res.ok === true && !res.hint) { errBox.hidden = true; DOM.clear(errBox); return; }
      if (res.ok && res.hint) {
        DOM.clear(errBox);
        errBox.appendChild(el('div', { class: 'tex-err' }, [
          el('span', { 'aria-hidden': 'true', text: 'ⓘ' }), el('span', { text: res.hint })
        ]));
        errBox.hidden = false;
        return;
      }
      if (res.ok) { errBox.hidden = true; DOM.clear(errBox); return; }
      DOM.clear(errBox);
      errBox.appendChild(el('div', { class: 'tex-err' }, [
        el('span', { 'aria-hidden': 'true', text: '⚠' }),
        el('span', {}, [
          el('b', { text: 'This line does not render yet. ' }),
          el('span', { text: res.error || 'Check for an unmatched { or }.' })
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
          row.setAttribute('aria-label', 'Edit line ' + (i + 1));
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
      if (!concept) return;
      Store.saveDraft(concept.id, value());
      saveNote.textContent = value().trim() ? 'Draft saved' : '';
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
        text: tok ? (tok.text || '\\') : 'commands' }));

      matches.forEach(function (k, i) {
        strip.appendChild(el('button', {
          class: 'wsug' + (i === picked && tok ? ' on' : ''),
          type: 'button', role: 'option', 'aria-selected': String(i === picked && !!tok),
          title: '\\' + k.cmd + (k.desc ? ' — ' + k.desc : ''),
          on: { click: function () { Latex.accept(field, k); refreshStrip(); } }
        }, [
          el('span', { class: 's', text: k.show }),
          el('span', { class: 'c', text: '\\' + k.cmd })
        ]));
      });

      if (!matches.length) {
        strip.appendChild(el('span', { class: 'small muted',
          text: 'no command matches that spelling' }));
      }
    }

    /* ── keys ──────────────────────────────────────────────────────────── */
    field.addEventListener('input', function () {
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
          Latex.accept(field, matches[picked] || matches[0]);
          refreshStrip();
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
          text: o.label || 'Write it — one line at a time' }),
        saveNote
      ]),
      doc,
      strip,
      errBox,
      hint,
      el('p', {
        class: 'small muted', style: { margin: 0 },
        text: 'This checks only that what you wrote renders — not whether the mathematics is correct. That judgement stays yours.'
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

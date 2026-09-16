/* ══════════════════════════════════════════════════════════════════════════
   Theorem-writing workspace (reusable component).

   HOOK_claude.md: a focused input with the MathJax rendering immediately
   below; the learner types only the maths fragment in LaTeX — no HTML, no
   document markup; an information button opens a compact contextual palette
   whose keys insert at the caret; malformed LaTeX is handled safely.

   Deliberately NOT a checker: the tool verifies that the fragment renders, and
   says so out loud. The learner stays the authority on whether the statement
   is mathematically right.
   ══════════════════════════════════════════════════════════════════════════ */

const WriteBox = (function () {

  const el = DOM.el;

  function mount(host, opts) {
    const o = opts || {};
    const concept = o.concept || null;
    const uid = 'w' + Math.random().toString(36).slice(2, 8);
    let lastGood = '';
    let firstInputFired = false;

    /* ── input ─────────────────────────────────────────────────────────── */
    const area = el('textarea', {
      class: 'tex-in', id: uid, rows: o.compact ? 4 : 6, spellcheck: 'false',
      autocapitalize: 'off', autocomplete: 'off',
      'aria-describedby': uid + '-hint',
      placeholder: o.placeholder ||
        'e.g.   \\forall \\varepsilon > 0 \\; \\exists \\delta > 0 \\ldots'
    });
    if (concept) area.value = Store.draft(concept.id);

    const paletteBtn = el('button', {
      class: 'icon-btn', type: 'button', 'aria-expanded': 'false',
      'aria-controls': uid + '-pal',
      title: 'LaTeX commands for this theorem'
    }, [DOM.icon('info', 16), el('span', { text: 'LaTeX help' })]);

    const head = el('div', { class: 'spread' }, [
      el('label', { class: 'kicker', for: uid, text: o.label || 'Write the statement in LaTeX' }),
      paletteBtn
    ]);

    const hint = el('p', {
      class: 'small muted', id: uid + '-hint', style: { margin: '6px 0 0' },
      text: 'LaTeX fragment only — no \\documentclass, no HTML, no $ delimiters. It is typeset as display maths.'
    });

    /* ── contextual palette ────────────────────────────────────────────── */
    const palette = el('div', { class: 'sheet', id: uid + '-pal', hidden: true });
    Latex.paletteFor(concept).forEach(function (group) {
      const keys = el('div', { class: 'keys' }, group.keys.map(function (k) {
        return el('button', {
          class: 'key', type: 'button', title: k.ins.replace(Latex.CARET, ''),
          on: { click: function () { Latex.insert(area, k.ins); } }
        }, [
          el('span', { class: 's', text: k.show }),
          el('span', { class: 'c', text: (k.ins.trim().replace(Latex.CARET, '') || k.cmd).slice(0, 9) })
        ]);
      }));
      palette.appendChild(el('div', { class: 'g' }, [
        el('div', { class: 'gl', text: group.label + (group.note ? ' — ' + group.note : '') }),
        keys
      ]));
    });
    palette.appendChild(el('p', {
      class: 'small muted', style: { margin: '10px 0 0' },
      text: 'A key inserts at the caret and wraps any selected text.'
    }));

    paletteBtn.addEventListener('click', function () {
      const open = palette.hidden;
      palette.hidden = !open;
      paletteBtn.setAttribute('aria-expanded', String(open));
      if (open) { palette.querySelector('.key') && palette.querySelector('.key').focus(); }
      else area.focus();
    });
    palette.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        palette.hidden = true;
        paletteBtn.setAttribute('aria-expanded', 'false');
        area.focus();
      }
    });

    /* ── render + errors ───────────────────────────────────────────────── */
    const out = el('div', { class: 'tex-out', 'aria-live': 'off' });
    const errBox = el('div', { hidden: true });
    const saveNote = el('span', { class: 'small muted', text: '' });

    function showError(msg) {
      DOM.clear(errBox);
      errBox.appendChild(el('div', { class: 'tex-err' }, [
        el('span', { 'aria-hidden': 'true', text: '⚠' }),
        el('span', {}, [
          el('b', { text: 'Not valid LaTeX yet. ' }),
          el('span', { text: msg }),
          lastGood ? el('span', { text: ' The last version that rendered is shown above.' }) : null
        ])
      ]));
      errBox.hidden = false;
    }

    /* it rendered, but something in it is not a real command */
    function showHint(msg) {
      DOM.clear(errBox);
      errBox.appendChild(el('div', { class: 'tex-err' }, [
        el('span', { 'aria-hidden': 'true', text: 'ⓘ' }),
        el('span', { text: msg })
      ]));
      errBox.hidden = false;
    }

    const render = DOM.debounce(function () {
      const tex = area.value;
      Tex.renderFragment(out, tex, { placeholder: 'Start typing — the rendered statement appears here.' })
        .then(function (r) {
          if (!r.ok) { showError(r.error || 'MathJax could not parse the fragment.'); return; }
          lastGood = tex;
          if (r.hint) showHint(r.hint);
          else { errBox.hidden = true; DOM.clear(errBox); }
        });
    }, 260);

    const persist = DOM.debounce(function () {
      if (!concept) return;
      Store.saveDraft(concept.id, area.value);
      saveNote.textContent = area.value.trim() ? 'Draft saved' : '';
    }, 700);

    area.addEventListener('input', function () {
      render();
      persist();
      if (!firstInputFired && area.value.trim()) {
        firstInputFired = true;
        if (o.onFirstInput) o.onFirstInput();
      }
    });

    /* ── assemble ──────────────────────────────────────────────────────── */
    const box = el('div', { class: 'stack', style: { gap: '10px' } }, [
      head, area, hint, palette,
      el('div', { class: 'spread' }, [el('span', { class: 'kicker', text: 'Renders as' }), saveNote]),
      out, errBox,
      el('p', {
        class: 'small muted', style: { margin: 0 },
        text: 'This checks only that your LaTeX renders — not whether the mathematics is correct. That judgement stays yours.'
      })
    ]);
    host.appendChild(box);

    render();

    return {
      value: () => area.value,
      focus: () => area.focus(),
      hasContent: () => !!area.value.trim(),
      node: box
    };
  }

  return { mount };
})();

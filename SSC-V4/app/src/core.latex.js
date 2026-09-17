/* ══════════════════════════════════════════════════════════════════════════
   LaTeX commands, offered the way a code editor offers them.

   The brief asks for "a compact palette of the LaTeX commands needed for the
   current theorem … contextual and small rather than an indiscriminate
   reference manual." A sheet of keys at the bottom of the screen satisfied
   the letter of that and failed the thumb: on a phone it covers the input you
   are typing into, and finding one symbol among sixty is slower than knowing
   how to spell it.

   So the catalogue is now a completion source. Type `\va` and the matches
   appear inline above the keyboard, ranked with the commands this theorem
   actually uses first. Tap one, or press Tab. When nothing is being typed the
   same strip shows the contextual commands, so discovery still works by
   thumb — which is what the palette was really for.
   ══════════════════════════════════════════════════════════════════════════ */

const Latex = (function () {

  const CARET = String.fromCharCode(1);   /* never appears in typed LaTeX */

  /* show = what the learner sees, ins = what gets typed, cmd = the macro name,
     alt = extra words that should also find it. */
  const CATALOG = [
    { g: 'Greek', show: 'ε', cmd: 'varepsilon', ins: '\\varepsilon ', desc: 'epsilon' },
    { g: 'Greek', show: 'δ', cmd: 'delta', ins: '\\delta ', desc: 'delta' },
    { g: 'Greek', show: 'Δ', cmd: 'Delta', ins: '\\Delta ', desc: 'big delta' },
    { g: 'Greek', show: 'η', cmd: 'eta', ins: '\\eta ' },
    { g: 'Greek', show: 'θ', cmd: 'theta', ins: '\\theta ' },
    { g: 'Greek', show: 'λ', cmd: 'lambda', ins: '\\lambda ' },
    { g: 'Greek', show: 'α', cmd: 'alpha', ins: '\\alpha ' },
    { g: 'Greek', show: 'β', cmd: 'beta', ins: '\\beta ' },
    { g: 'Greek', show: 'γ', cmd: 'gamma', ins: '\\gamma ' },
    { g: 'Greek', show: 'μ', cmd: 'mu', ins: '\\mu ' },
    { g: 'Greek', show: 'σ', cmd: 'sigma', ins: '\\sigma ' },
    { g: 'Greek', show: 'φ', cmd: 'varphi', ins: '\\varphi ', desc: 'phi' },
    { g: 'Greek', show: 'π', cmd: 'pi', ins: '\\pi ' },
    { g: 'Greek', show: 'ω', cmd: 'omega', ins: '\\omega ' },

    { g: 'Logic', show: '∀', cmd: 'forall', ins: '\\forall ', desc: 'for all' },
    { g: 'Logic', show: '∃', cmd: 'exists', ins: '\\exists ', desc: 'there exists' },
    { g: 'Logic', show: '∄', cmd: 'nexists', ins: '\\nexists ', desc: 'no such' },
    { g: 'Logic', show: '⟹', cmd: 'implies', ins: '\\implies ', desc: 'implies' },
    { g: 'Logic', show: '⟺', cmd: 'iff', ins: '\\iff ', desc: 'if and only if' },
    { g: 'Logic', show: '⇒', cmd: 'Rightarrow', ins: '\\Rightarrow ' },
    { g: 'Logic', show: '¬', cmd: 'neg', ins: '\\neg ', desc: 'not' },
    { g: 'Logic', show: '∧', cmd: 'wedge', ins: '\\wedge ', desc: 'and' },
    { g: 'Logic', show: '∨', cmd: 'vee', ins: '\\vee ', desc: 'or' },
    { g: 'Logic', show: 'text', cmd: 'text', ins: '\\text{' + CARET + '}', desc: 'words inside maths' },

    { g: 'Sets', show: 'ℝ', cmd: 'mathbb', needle: '\\mathbb{R}', ins: '\\mathbb{R}', desc: 'the reals', alt: 'R reals' },
    { g: 'Sets', show: 'ℕ', cmd: 'mathbb', needle: '\\mathbb{N}', ins: '\\mathbb{N}', desc: 'the naturals', alt: 'N naturals' },
    { g: 'Sets', show: 'ℚ', cmd: 'mathbb', needle: '\\mathbb{Q}', ins: '\\mathbb{Q}', desc: 'the rationals', alt: 'Q rationals' },
    { g: 'Sets', show: 'ℤ', cmd: 'mathbb', needle: '\\mathbb{Z}', ins: '\\mathbb{Z}', desc: 'the integers', alt: 'Z integers' },
    { g: 'Sets', show: '∈', cmd: 'in', ins: '\\in ', desc: 'belongs to' },
    { g: 'Sets', show: '∉', cmd: 'notin', ins: '\\notin ', desc: 'not in' },
    { g: 'Sets', show: '⊆', cmd: 'subseteq', ins: '\\subseteq ' },
    { g: 'Sets', show: '⊂', cmd: 'subset', ins: '\\subset ' },
    { g: 'Sets', show: '∪', cmd: 'cup', ins: '\\cup ', desc: 'union' },
    { g: 'Sets', show: '∩', cmd: 'cap', ins: '\\cap ', desc: 'intersection' },
    { g: 'Sets', show: '⋃', cmd: 'bigcup', ins: '\\bigcup_{' + CARET + '}' },
    { g: 'Sets', show: '⋂', cmd: 'bigcap', ins: '\\bigcap_{' + CARET + '}' },
    { g: 'Sets', show: '∅', cmd: 'emptyset', ins: '\\emptyset ', desc: 'empty set' },
    { g: 'Sets', show: '∖', cmd: 'setminus', ins: '\\setminus ', desc: 'set difference' },
    { g: 'Sets', show: '{ }', cmd: 'lbrace', ins: '\\{' + CARET + '\\}', desc: 'braces', alt: 'set brace' },

    { g: 'Relations', show: '≤', cmd: 'le', ins: '\\le ', desc: 'at most' },
    { g: 'Relations', show: '≥', cmd: 'ge', ins: '\\ge ', desc: 'at least' },
    { g: 'Relations', show: '≠', cmd: 'ne', ins: '\\ne ', desc: 'not equal' },
    { g: 'Relations', show: '≈', cmd: 'approx', ins: '\\approx ' },
    { g: 'Relations', show: '≡', cmd: 'equiv', ins: '\\equiv ' },
    { g: 'Relations', show: '↦', cmd: 'mapsto', ins: '\\mapsto ' },
    { g: 'Relations', show: '≔', cmd: 'coloneqq', ins: ':= ', desc: 'defined as' },

    { g: 'Analysis', show: '→', cmd: 'to', ins: '\\to ', desc: 'tends to' },
    { g: 'Analysis', show: '∞', cmd: 'infty', ins: '\\infty ', desc: 'infinity' },
    { g: 'Analysis', show: 'sup', cmd: 'sup', ins: '\\sup ', desc: 'supremum' },
    { g: 'Analysis', show: 'inf', cmd: 'inf', ins: '\\inf ', desc: 'infimum' },
    { g: 'Analysis', show: 'lim', cmd: 'lim', ins: '\\lim_{' + CARET + '}', desc: 'limit' },
    { g: 'Analysis', show: 'limsup', cmd: 'limsup', ins: '\\limsup_{' + CARET + '}' },
    { g: 'Analysis', show: 'Σ', cmd: 'sum', ins: '\\sum_{' + CARET + '}^{}', desc: 'sum' },
    { g: 'Analysis', show: '∏', cmd: 'prod', ins: '\\prod_{' + CARET + '}^{}', desc: 'product' },
    { g: 'Analysis', show: '∫', cmd: 'int', ins: '\\int_{' + CARET + '}^{}', desc: 'integral' },
    { g: 'Analysis', show: '∂', cmd: 'partial', ins: '\\partial ' },
    { g: 'Analysis', show: '⋯', cmd: 'cdots', ins: '\\cdots ' },
    { g: 'Analysis', show: '…', cmd: 'ldots', ins: '\\ldots ' },
    { g: 'Analysis', show: 'f′', cmd: 'prime', ins: "f'(" + CARET + ')', desc: 'derivative' },

    { g: 'Structure', show: 'a⁄b', cmd: 'frac', ins: '\\frac{' + CARET + '}{}', desc: 'fraction' },
    { g: 'Structure', show: '√', cmd: 'sqrt', ins: '\\sqrt{' + CARET + '}', desc: 'square root' },
    { g: 'Structure', show: 'xⁿ', cmd: 'sup-script', ins: '^{' + CARET + '}', desc: 'superscript', alt: 'power exponent' },
    { g: 'Structure', show: 'xₙ', cmd: 'sub-script', ins: '_{' + CARET + '}', desc: 'subscript', alt: 'index' },
    { g: 'Structure', show: '|x|', cmd: 'abs', ins: '|' + CARET + '|', desc: 'absolute value', alt: 'modulus' },
    { g: 'Structure', show: '‖x‖', cmd: 'norm', ins: '\\|' + CARET + '\\|', desc: 'norm' },
    { g: 'Structure', show: '( )', cmd: 'left', ins: '\\left(' + CARET + '\\right)', desc: 'sized brackets' },
    { g: 'Structure', show: '[ ]', cmd: 'bracket', ins: '[' + CARET + ']' },
    { g: 'Structure', show: 'quad', cmd: 'quad', ins: '\\quad ', desc: 'wide space' },
    { g: 'Structure', show: 'cases', cmd: 'cases', ins: '\\begin{cases}' + CARET + '\\end{cases}', desc: 'case split' }
  ];

  /* what stays offered even when the statement does not use it */
  const CORE = ['varepsilon', 'delta', 'forall', 'exists', 'in', 'le', 'to',
    'frac', 'abs', 'sub-script', 'sup-script', 'mathbb', 'lim', 'text'];

  function macrosIn(tex) {
    const src = String(tex || '');
    const found = {};
    src.replace(/\\([a-zA-Z]+)/g, function (whole, m) { found[m] = true; return whole; });
    if (/_\{|_[a-zA-Z0-9]/.test(src)) found['sub-script'] = true;
    if (/\^\{|\^[a-zA-Z0-9]/.test(src)) found['sup-script'] = true;
    if (/\|/.test(src)) found['abs'] = true;
    return found;
  }

  /* Which catalogue entries this concept's own statement uses. These rank
     first everywhere — it is the whole of "contextual". */
  function usedBy(concept) {
    const src = String((concept && concept.statement) || '');
    const used = macrosIn(src);
    const taken = {};
    return CATALOG.filter(function (k) {
      const hit = k.needle ? src.indexOf(k.needle) >= 0 : !!used[k.cmd];
      if (!hit || taken[k.ins]) return false;
      taken[k.ins] = true;
      return true;
    });
  }

  /* ── completion ───────────────────────────────────────────────────────── */

  /* The token being typed: a backslash and the letters after it, ending at
     the caret. Returns null when the caret is not inside one. */
  function tokenAt(value, caret) {
    const upto = String(value || '').slice(0, caret);
    const m = /\\([a-zA-Z]*)$/.exec(upto);
    if (!m) return null;
    return { text: m[0], word: m[1], from: caret - m[0].length, to: caret };
  }

  const score = (k, word, ctx) => {
    const w = word.toLowerCase();
    const cmd = k.cmd.toLowerCase();
    const hay = (cmd + ' ' + (k.desc || '') + ' ' + (k.alt || '')).toLowerCase();
    let s = -1;
    if (!w) s = 40;
    else if (cmd === w) s = 100;
    else if (cmd.indexOf(w) === 0) s = 80 - cmd.length;
    else if (hay.indexOf(w) >= 0) s = 40 - cmd.length;
    if (s < 0) return s;
    if (ctx[k.ins]) s += 25;                      /* this theorem uses it */
    if (CORE.indexOf(k.cmd) >= 0) s += 6;
    return s;
  };

  /* Ranked completions for a partial command. `word` may be '' — that is the
     bare-backslash case, and it should still offer something useful. */
  function complete(word, concept, limit) {
    const ctx = {};
    usedBy(concept).forEach(k => { ctx[k.ins] = true; });
    const seen = {};
    return CATALOG
      .map(k => ({ k: k, s: score(k, String(word || ''), ctx) }))
      .filter(function (r) {
        if (r.s < 0 || seen[r.k.ins]) return false;
        seen[r.k.ins] = true;
        return true;
      })
      .sort((a, b) => b.s - a.s)
      .slice(0, limit || 12)
      .map(r => r.k);
  }

  /* The idle strip: what to offer when nothing is being typed. Contextual
     first, then the essentials, because a learner who does not know the
     spelling cannot start a completion at all. */
  function suggestions(concept, limit) {
    const ctx = usedBy(concept);
    const taken = {};
    ctx.forEach(k => { taken[k.ins] = true; });
    const core = CATALOG.filter(k => !taken[k.ins] && CORE.indexOf(k.cmd) >= 0);
    return ctx.concat(core).slice(0, limit || 14);
  }

  /* ── insertion ────────────────────────────────────────────────────────── */

  /* Replace [from,to) with `ins`, honouring CARET and any selection. Works on
     an <input> and on a <textarea> alike. */
  function splice(field, from, to, ins) {
    const val = field.value;
    const selected = val.slice(from, to);
    let text = ins, caretAt;
    const mark = text.indexOf(CARET);
    if (mark >= 0) {
      text = text.slice(0, mark) + selected + text.slice(mark + 1);
      caretAt = from + mark + selected.length;
    } else {
      caretAt = from + text.length;
    }
    field.value = val.slice(0, from) + text + val.slice(to);
    field.focus();
    try { field.setSelectionRange(caretAt, caretAt); } catch (e) { /* detached field */ }
    field.dispatchEvent(new Event('input', { bubbles: true }));
  }

  /* Insert at the caret, replacing the selection. */
  function insert(field, ins) {
    const a = field.selectionStart == null ? field.value.length : field.selectionStart;
    const b = field.selectionEnd == null ? a : field.selectionEnd;
    splice(field, a, b, ins);
  }

  /* Accept a completion: the partial command being typed is replaced whole. */
  function accept(field, entry) {
    const a = field.selectionStart == null ? field.value.length : field.selectionStart;
    const tok = tokenAt(field.value, a);
    if (tok) splice(field, tok.from, tok.to, entry.ins);
    else insert(field, entry.ins);
  }

  return { CATALOG, CARET, usedBy, tokenAt, complete, suggestions, insert, splice, accept };
})();

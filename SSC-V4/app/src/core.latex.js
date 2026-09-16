/* ══════════════════════════════════════════════════════════════════════════
   The contextual LaTeX palette.

   HOOK_claude.md asks for "a compact palette of the LaTeX commands needed for
   the current theorem … contextual and small rather than an indiscriminate
   reference manual." So the palette is built per concept: the commands that
   actually occur in that statement come first, then a short fixed set you
   cannot write analysis without. Nothing else is shown by default.

   Clicking a key inserts at the caret. CARET marks where the caret should land
   inside the inserted text, and wraps the selection when there is one.
   ══════════════════════════════════════════════════════════════════════════ */

const Latex = (function () {

  const CARET = String.fromCharCode(1);   /* never appears in typed LaTeX */

  /* show = what the learner sees, ins = what gets typed, cmd = the macro name */
  const CATALOG = [
    { g: 'Greek', show: 'ε', cmd: 'varepsilon', ins: '\\varepsilon ' },
    { g: 'Greek', show: 'δ', cmd: 'delta', ins: '\\delta ' },
    { g: 'Greek', show: 'η', cmd: 'eta', ins: '\\eta ' },
    { g: 'Greek', show: 'θ', cmd: 'theta', ins: '\\theta ' },
    { g: 'Greek', show: 'λ', cmd: 'lambda', ins: '\\lambda ' },
    { g: 'Greek', show: 'α', cmd: 'alpha', ins: '\\alpha ' },
    { g: 'Greek', show: 'β', cmd: 'beta', ins: '\\beta ' },

    { g: 'Logic', show: '∀', cmd: 'forall', ins: '\\forall ' },
    { g: 'Logic', show: '∃', cmd: 'exists', ins: '\\exists ' },
    { g: 'Logic', show: '⟹', cmd: 'implies', ins: '\\implies ' },
    { g: 'Logic', show: '⟺', cmd: 'iff', ins: '\\iff ' },
    { g: 'Logic', show: '⇒', cmd: 'Rightarrow', ins: '\\Rightarrow ' },
    { g: 'Logic', show: 'text', cmd: 'text', ins: '\\text{' + CARET + '}' },

    { g: 'Sets', show: 'ℝ', cmd: 'mathbb', needle: '\\mathbb{R}', ins: '\\mathbb{R}' },
    { g: 'Sets', show: 'ℕ', cmd: 'mathbb', needle: '\\mathbb{N}', ins: '\\mathbb{N}' },
    { g: 'Sets', show: 'ℚ', cmd: 'mathbb', needle: '\\mathbb{Q}', ins: '\\mathbb{Q}' },
    { g: 'Sets', show: '∈', cmd: 'in', ins: '\\in ' },
    { g: 'Sets', show: '∉', cmd: 'notin', ins: '\\notin ' },
    { g: 'Sets', show: '⊆', cmd: 'subseteq', ins: '\\subseteq ' },
    { g: 'Sets', show: '∪', cmd: 'cup', ins: '\\cup ' },
    { g: 'Sets', show: '∩', cmd: 'cap', ins: '\\cap ' },
    { g: 'Sets', show: '∅', cmd: 'emptyset', ins: '\\emptyset ' },
    { g: 'Sets', show: '{ }', cmd: 'lbrace', ins: '\\{' + CARET + '\\}' },

    { g: 'Relations', show: '≤', cmd: 'le', ins: '\\le ' },
    { g: 'Relations', show: '≥', cmd: 'ge', ins: '\\ge ' },
    { g: 'Relations', show: '≠', cmd: 'ne', ins: '\\ne ' },
    { g: 'Relations', show: '≈', cmd: 'approx', ins: '\\approx ' },
    { g: 'Relations', show: '↦', cmd: 'mapsto', ins: '\\mapsto ' },

    { g: 'Analysis', show: '→', cmd: 'to', ins: '\\to ' },
    { g: 'Analysis', show: '∞', cmd: 'infty', ins: '\\infty ' },
    { g: 'Analysis', show: 'sup', cmd: 'sup', ins: '\\sup ' },
    { g: 'Analysis', show: 'inf', cmd: 'inf', ins: '\\inf ' },
    { g: 'Analysis', show: 'lim', cmd: 'lim', ins: '\\lim_{' + CARET + '}' },
    { g: 'Analysis', show: 'Σ', cmd: 'sum', ins: '\\sum_{n=1}^{\\infty}' },
    { g: 'Analysis', show: '⋯', cmd: 'cdots', ins: '\\cdots ' },
    { g: 'Analysis', show: '…', cmd: 'ldots', ins: '\\ldots ' },
    { g: 'Analysis', show: 'f′', cmd: 'prime', ins: "f'(" + CARET + ')' },

    { g: 'Structure', show: 'a⁄b', cmd: 'frac', ins: '\\frac{' + CARET + '}{}' },
    { g: 'Structure', show: '√', cmd: 'sqrt', ins: '\\sqrt{' + CARET + '}' },
    { g: 'Structure', show: 'xⁿ', cmd: 'sup-script', ins: '^{' + CARET + '}' },
    { g: 'Structure', show: 'xₙ', cmd: 'sub-script', ins: '_{' + CARET + '}' },
    { g: 'Structure', show: '|x|', cmd: 'abs', ins: '|' + CARET + '|' },
    { g: 'Structure', show: '( )', cmd: 'left', ins: '\\left(' + CARET + '\\right)' },
    { g: 'Structure', show: '[ ]', cmd: 'bracket', ins: '[' + CARET + ']' },
    { g: 'Structure', show: 'quad', cmd: 'quad', ins: '\\quad ' }
  ];

  /* what stays on the palette even when the statement does not use it */
  const CORE = ['varepsilon', 'delta', 'forall', 'exists', 'in', 'le', 'to',
    'frac', 'abs', 'sub-script', 'mathbb'];

  function macrosIn(tex) {
    const src = String(tex || '');
    const found = {};
    src.replace(/\\([a-zA-Z]+)/g, function (whole, m) { found[m] = true; return whole; });
    if (/_\{|_[a-zA-Z0-9]/.test(src)) found['sub-script'] = true;
    if (/\^\{|\^[a-zA-Z0-9]/.test(src)) found['sup-script'] = true;
    if (/\|/.test(src)) found['abs'] = true;
    return found;
  }

  /* Palette groups for one concept: contextual first, essentials after. */
  function paletteFor(concept) {
    const src = String((concept && concept.statement) || '');
    const used = macrosIn(src);
    const taken = {};
    const contextual = CATALOG.filter(function (k) {
      /* a `needle` pins the match to one spelling (ℝ vs ℕ vs ℚ) */
      const hit = k.needle ? src.indexOf(k.needle) >= 0 : !!used[k.cmd];
      if (!hit || taken[k.ins]) return false;
      taken[k.ins] = true;
      return true;
    });

    const groups = [];
    if (contextual.length) groups.push({
      label: 'In this statement',
      note: 'Exactly the commands this theorem uses.',
      keys: contextual
    });

    /* with context available, keep the rest down to the essentials */
    const remainder = CATALOG.filter(k => !taken[k.ins] &&
      (!contextual.length || CORE.indexOf(k.cmd) >= 0));

    ['Greek', 'Logic', 'Sets', 'Relations', 'Analysis', 'Structure'].forEach(function (name) {
      const keys = remainder.filter(k => k.g === name);
      if (keys.length) {
        groups.push({ label: contextual.length ? name + ' · essentials' : name, keys: keys });
      }
    });
    return groups;
  }

  /* Insert `ins` into a textarea at the caret, honouring CARET and selection. */
  function insert(textarea, ins) {
    const val = textarea.value;
    const a = textarea.selectionStart == null ? val.length : textarea.selectionStart;
    const b = textarea.selectionEnd == null ? a : textarea.selectionEnd;
    const selected = val.slice(a, b);
    let text = ins, caretAt;
    const mark = text.indexOf(CARET);
    if (mark >= 0) {
      text = text.slice(0, mark) + selected + text.slice(mark + 1);
      caretAt = a + mark + selected.length;
    } else {
      caretAt = a + text.length;
    }
    textarea.value = val.slice(0, a) + text + val.slice(b);
    textarea.focus();
    textarea.setSelectionRange(caretAt, caretAt);
    textarea.dispatchEvent(new Event('input', { bubbles: true }));
  }

  return { paletteFor, insert, CARET };
})();

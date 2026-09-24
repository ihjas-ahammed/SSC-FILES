/* ══════════════════════════════════════════════════════════════════════════
   Markdown, line by line, with the maths left alone.

   The writing workspace is a live markdown editor whose maths is written
   inline as $…$ and $$…$$. So the one thing this renderer must never do is
   touch what is between the dollars: `\text{a*b*c}` is not italics, and a
   backslash is not an escape character to markdown here.

   The method is therefore: cut the source into maths and prose segments
   first, run the inline rules over prose only, then reassemble. Every block
   is one line — the editor renders each line into its own frame, so there is
   no multi-line block state to carry.

   AUTO-MATH. Dollar signs are bookkeeping, and bookkeeping is what stops a
   sentence being written at speed. So a LaTeX command met in the middle of
   prose no longer has to be fenced: "I love \\frac{1}{2} in fact" typesets the
   fraction and leaves the words alone. `autoMath` finds each run that is
   unambiguously mathematics — it has to CONTAIN a backslash command, a
   superscript or a subscript, never merely look numeric — grows it over the
   operands and operators around it, and stops at the first real word. The run
   is stashed behind a placeholder before the markdown rules run, so `_` inside
   a subscript is never mistaken for italics and `<` is never escaped.

   Explicit `$…$` still works and still wins: segments() takes those out first,
   so anything already fenced is left exactly as written.
   ══════════════════════════════════════════════════════════════════════════ */

const Markdown = (function () {

  const esc = s => String(s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  /* Split on $$…$$ first, then $…$, so a display block is never mistaken for
     two inline ones. Returns [{math:false,t}|{math:true,t}]. */
  function segments(src) {
    const out = [];
    const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
    let at = 0, m;
    while ((m = re.exec(src)) !== null) {
      if (m.index > at) out.push({ math: false, t: src.slice(at, m.index) });
      out.push({ math: true, t: m[0] });
      at = m.index + m[0].length;
    }
    if (at < src.length) out.push({ math: false, t: src.slice(at) });
    return out;
  }

  /* Inline rules, prose only. Code spans are pulled out first so that what is
     inside them survives verbatim. */
  function inline(text) {
    const code = [];
    let s = String(text).replace(/`([^`]+)`/g, function (_, c) {
      code.push(c);
      return '\x00C' + (code.length - 1) + '\x00';
    });

    s = esc(s)
      .replace(/\*\*\*([^*]+)\*\*\*/g, '<strong><em>$1</em></strong>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/(^|[\s(])\*([^*\n]+)\*/g, '$1<em>$2</em>')
      .replace(/(^|[\s(])_([^_\n]+)_/g, '$1<em>$2</em>')
      .replace(/~~([^~]+)~~/g, '<s>$1</s>')
      .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, '<a href="$2" rel="noreferrer">$1</a>');

    return s.replace(/\x00C(\d+)\x00/g, (_, i) => '<code>' + esc(code[+i]) + '</code>');
  }

  /* ── auto-math ───────────────────────────────────────────────────────────
     Scan a PROSE segment (everything already fenced in $…$ has been taken out)
     and wrap each mathematical run in \\( … \\).

     What starts a run: a backslash command, or a token carrying ^ or _.
     What continues one: single-letter variables, numbers, operators, balanced
     braces and the spaces between them.
     What ends one: a word of two or more letters that is not a command, a
     sentence-ending punctuation mark, or the end of the line.

     The two-letter rule is the whole safety margin. "in fact" ends the run;
     "x + 1" does not. A lone word like "a" or "I" can be swallowed into a run
     that is already open, which is the right call inside `f(a) = b` and a
     harmless one elsewhere — it renders as italic a, which is what someone
     writing mathematics meant anyway. */

  /* `*` is deliberately absent: it is markdown emphasis far more often than it
     is multiplication, and LaTeX writes a product as \\cdot or \\times anyway. */
  const OPS = '+-/=<>()[]|,;:!\'~^_&.';
  const isOp = ch => OPS.indexOf(ch) >= 0;
  const isSpace = ch => ch === ' ' || ch === '\t';
  const isAlnum = ch => /[0-9A-Za-z]/.test(ch);

  /* a balanced {...} starting at i, or -1 */
  function brace(src, i) {
    if (src[i] !== '{') return -1;
    let depth = 0;
    for (let j = i; j < src.length; j++) {
      if (src[j] === '\\') { j += 1; continue; }
      if (src[j] === '{') depth += 1;
      else if (src[j] === '}') { depth -= 1; if (!depth) return j + 1; }
    }
    return -1;
  }

  /* one math token at i: returns the index after it, or -1 */
  function token(src, i) {
    const ch = src[i];
    if (ch === '\\') {
      const m = /^\\([a-zA-Z]+|[{}$%&#_|,;: ])/.exec(src.slice(i));
      return m ? i + m[0].length : -1;
    }
    if (ch === '{') return brace(src, i);
    if (ch === '^' || ch === '_') {
      const after = i + 1;
      const b = brace(src, after);
      if (b > 0) return b;
      if (after < src.length && isAlnum(src[after])) return after + 1;
      return -1;
    }
    if (/[0-9]/.test(ch)) {
      let j = i;
      while (j < src.length && /[0-9.]/.test(src[j])) j += 1;
      return j;
    }
    if (/[A-Za-z]/.test(ch)) {
      /* a single letter is a variable; two or more is a word, and a word ends
         the run — unless it is the argument of a command, which the brace
         branch has already eaten */
      return /[A-Za-z]/.test(src[i + 1] || '') ? -1 : i + 1;
    }
    if (isOp(ch)) return i + 1;
    return -1;
  }

  const STRONG = /\\[a-zA-Z]|[\^_]/;   /* what makes a run unmistakably maths */
  const TRAIL = /[.,;:!?\s]+$/;

  /* Is this ^ or _ a script, or is it punctuation in a word?
     `x_n` and `x^{2}` are scripts. `snake_case` is not: its base letter is part
     of a word. `_italic_` is not: it has no base at all. That one test is what
     lets markdown emphasis and auto-math share a line. */
  function isScript(s, i) {
    const prev = s[i - 1];
    if (prev == null) return false;
    if (/[A-Za-z]/.test(prev)) { if (/[A-Za-z]/.test(s[i - 2] || '')) return false; }
    else if (!/[0-9})\]]/.test(prev)) return false;
    const nx = s[i + 1];
    if (nx === '{') return brace(s, i + 1) > 0;
    if (!/[0-9A-Za-z]/.test(nx || '')) return false;
    return !/[0-9A-Za-z]/.test(s[i + 2] || '');
  }

  /* `*` is absent from both operator sets on purpose: it is markdown emphasis
     far more often than multiplication, and LaTeX writes a product as \cdot
     or \times anyway. */
  const BACK_OPS = '+-/=<>|&([{~^_';

  /* The math token that ENDS at k, as a start index, or -1. Used to grow a run
     leftwards so that `f(x) = \sqrt{x}` is one expression rather than three
     words and a fraction. */
  function tokenBack(s, k, floor) {
    if (k <= floor) return -1;
    const ch = s[k - 1];
    if (ch === '\x00') return -1;
    if (ch === '}' || ch === ')' || ch === ']') {
      const open = ch === '}' ? '{' : ch === ')' ? '(' : '[';
      let depth = 0;
      for (let j = k - 1; j >= floor; j--) {
        if (s[j] === ch) depth += 1;
        else if (s[j] === open) { depth -= 1; if (!depth) return j; }
      }
      return -1;
    }
    if (/[0-9]/.test(ch)) {
      let j = k;
      while (j - 1 > floor && /[0-9.]/.test(s[j - 2]) && /[0-9]/.test(s[j - 1])) j -= 1;
      while (j - 1 >= floor && /[0-9]/.test(s[j - 1])) j -= 1;
      return j;
    }
    if (/[A-Za-z]/.test(ch)) {
      if (/[A-Za-z]/.test(s[k - 2] || '')) return -1;   /* part of a word */
      return k - 1;
    }
    if (BACK_OPS.indexOf(ch) >= 0) return k - 1;
    return -1;
  }

  function extendLeft(s, from, floor) {
    let a = from;
    for (;;) {
      let k = a;
      while (k > floor && isSpace(s[k - 1])) k -= 1;
      if (k <= floor) break;
      const t = tokenBack(s, k, floor);
      if (t < 0) break;
      a = t;
    }
    return a;
  }

  function extendRight(s, from) {
    let j = from;
    for (;;) {
      let k = j;
      while (k < s.length && isSpace(s[k])) k += 1;
      if (k >= s.length) break;
      const next = token(s, k);
      if (next < 0) break;
      j = next;
    }
    return j;
  }

  /* Find every mathematical run in a prose segment and fence it in \( … \).
     Runs are collected as ranges first and merged, so two anchors in the same
     expression (`\lim_{n\to\infty} x_n`) produce ONE fence rather than two
     that overlap. */
  function autoMath(src) {
    const s = String(src);
    if (!STRONG.test(s)) return { text: s, stash: [] };

    /* regions that are verbatim and must never be fenced */
    const skip = [];
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== '`') continue;
      const close = s.indexOf('`', i + 1);
      const end = close < 0 ? s.length : close + 1;
      skip.push([i, end]);
      i = end - 1;
    }
    const inSkip = i => skip.some(r => i >= r[0] && i < r[1]);
    const floorFor = i => {
      let f = -1;
      skip.forEach(function (r) { if (r[1] <= i && r[1] - 1 > f) f = r[1] - 1; });
      return f;
    };

    const runs = [];
    for (let i = 0; i < s.length; i++) {
      if (inSkip(i)) continue;
      const isCmd = s[i] === '\\' && /[a-zA-Z]/.test(s[i + 1] || '');
      const isScr = (s[i] === '^' || s[i] === '_') && isScript(s, i);
      if (!isCmd && !isScr) continue;
      if (runs.length && i < runs[runs.length - 1][1]) continue;   /* already inside one */

      const floor = Math.max(floorFor(i), runs.length ? runs[runs.length - 1][1] - 1 : -1);
      const a = extendLeft(s, i, floor);
      const b = extendRight(s, isCmd ? (token(s, i) < 0 ? i + 1 : token(s, i)) : i + 1);
      if (runs.length && a <= runs[runs.length - 1][1]) runs[runs.length - 1][1] = Math.max(b, runs[runs.length - 1][1]);
      else runs.push([a, b]);
      i = b - 1;
    }

    if (!runs.length) return { text: s, stash: [] };

    const stash = [];
    let out = '', at = 0;
    runs.forEach(function (r) {
      out += s.slice(at, r[0]);
      let run = s.slice(r[0], r[1]);
      const trail = TRAIL.exec(run);
      let tail = '';
      if (trail && trail.index > 0) { tail = trail[0]; run = run.slice(0, trail.index); }
      if (!run.trim()) { out += s.slice(r[0], r[1]); at = r[1]; return; }
      stash.push('\\(' + run + '\\)');
      out += '\x00M' + (stash.length - 1) + '\x00' + tail;
      at = r[1];
    });
    out += s.slice(at);
    return { text: out, stash: stash };
  }

  /* prose through the inline rules, maths through untouched */
  function spans(src) {
    return segments(src).map(function (seg) {
      if (seg.math) return seg.t;
      const auto = autoMath(seg.t);
      const html = inline(auto.text);
      if (!auto.stash.length) return html;
      return html.replace(/\x00M(\d+)\x00/g, (_, n) => auto.stash[+n]);
    }).join('');
  }

  /* One source line -> one HTML block. */
  function line(src) {
    const raw = String(src == null ? '' : src);
    const t = raw.trim();
    if (!t) return '';

    if (/^(---|\*\*\*|___)\s*$/.test(t)) return '<hr>';

    const h = /^(#{1,4})\s+(.*)$/.exec(t);
    if (h) {
      const n = Math.min(h[1].length + 1, 5);
      return '<h' + n + ' class="md-h">' + spans(h[2]) + '</h' + n + '>';
    }

    const q = /^>\s?(.*)$/.exec(t);
    if (q) return '<blockquote class="md-q">' + spans(q[1]) + '</blockquote>';

    const ul = /^[-*+]\s+(.*)$/.exec(t);
    if (ul) return '<ul class="md-l"><li>' + spans(ul[1]) + '</li></ul>';

    const ol = /^(\d+)[.)]\s+(.*)$/.exec(t);
    if (ol) return '<ol class="md-l" start="' + ol[1] + '"><li>' + spans(ol[2]) + '</li></ol>';

    return '<p class="md-p">' + spans(raw) + '</p>';
  }

  /* Does this line carry an explicit maths delimiter? A maths-first box uses
     this to decide whether a delimiter-free line is bare LaTeX. It stays
     dollar-only on purpose: auto-math is for MIXED lines, and a maths-first box
     wants the whole line set as display maths, not one fenced run inside it. */
  const hasMath = src => /\$/.test(String(src || ''));

  /* Whole document, for export and for the read-only preview. */
  const doc = src => String(src || '').split('\n').map(line).join('\n');

  return { line, doc, hasMath, inline, segments, autoMath };
})();

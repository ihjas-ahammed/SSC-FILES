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

  /* prose through the inline rules, maths through untouched */
  function spans(src) {
    return segments(src).map(seg => seg.math ? seg.t : inline(seg.t)).join('');
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

  /* Does this line carry any maths delimiter at all? The editor uses this to
     decide whether a delimiter-free line in a maths-first box should be
     treated as bare LaTeX. */
  const hasMath = src => /\$/.test(String(src || ''));

  /* Whole document, for export and for the read-only preview. */
  const doc = src => String(src || '').split('\n').map(line).join('\n');

  return { line, doc, hasMath, inline, segments };
})();

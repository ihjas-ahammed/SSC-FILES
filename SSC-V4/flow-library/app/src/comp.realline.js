/* ══════════════════════════════════════════════════════════════════════════
   The real line: one widget for every inequality.

   Inequalities are statements about ORDER, not about values, so the widget
   is schematic: it reads the order relations already written in the TeX of a
   statement or a proof step and draws them in the three types of the design
   sheet (flow-library/design/realline-reference.html) — Type 1 x > a,
   Type 2 x < a, Type 3 a < x < b — with the quantity itself marked inside
   its set. Nothing has to be authored:

     |x_n| \le M                    Type 3 [−M, M], centre 0, x_n marked
     |x - a| < \varepsilon          Type 3 (a−ε, a+ε), centre a, x marked
     0 < |x - c| < \delta           the same with c cut out (a hole)
     x \in (a, b]  /  n \ge K       Type 3 / Type 1 with the variable marked
     w \le s \le u                  Type 3 [w, u] with s marked
     u = \sup S                     one point, labelled with both names
     u - \varepsilon                implies u − ε < u, so u appears beside it

   A line is drawn only when the order it shows is TOTAL on the terms it
   shows: a picture that puts two incomparable terms in some order would be
   teaching something false. Unrelated facts in one statement become separate
   lines; anything ambiguous is simply not drawn.

   In a proof the line EVOLVES: step k is solved against everything the
   statement and steps 1…k have established, and a point appearing for the
   first time is lit. The argument can then be remembered as one picture
   changing, not as a list of formulas.

   Switched on per project with PROJECT.realLine = true. Content can steer it:
   `line: false` on a concept or a rung suppresses it there, and a string
   (`line: 'a-\\delta < x < a+\\delta'`) replaces what is read for it.
   ══════════════════════════════════════════════════════════════════════════ */

const RealLine = (function () {

  const el = DOM.el;
  const MAX_POINTS = 9;
  const MAX_LINES = 2;

  const enabled = () => !!(typeof PROJECT !== 'undefined' && PROJECT.realLine)
    && Store.pref('realLine', true) !== false;

  /* ── TeX → clauses ──────────────────────────────────────────────────── */

  const SEP = '¶';   /* ¶ — the clause separator after preprocessing */
  const DEF = '≔';   /* ≔ */

  const mathSpans = s => (String(s || '').match(/\$\$[\s\S]+?\$\$|\\\[[\s\S]+?\\\]|\\\([\s\S]+?\\\)|\$[^$]+?\$/g) || [])
    .map(m => m.replace(/^\$\$|\$\$$|^\\\[|\\\]$|^\\\(|\\\)$|^\$|\$$/g, ''));

  function prep(tex) {
    return tex
      .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, SEP)
      .replace(/<[^>]*>/g, ' ')                                   /* stray html */
      .replace(/\\(left|right|[bB]igg?[lr]?)(?![a-zA-Z])\s*(\\?[.|()[\]{}]|\\[lr]vert)?/g, (m, a, d) => d || '')
      .replace(/\\[lr]vert/g, '|')
      .replace(/\\(displaystyle|limits|nolimits)(?![a-zA-Z])/g, '')
      .replace(/\\(text\w*|mbox|mathrm\s*\{\s*(?:and|or|for|if|where)\s*\})\s*\{[^{}]*\}/g, SEP)
      .replace(/:=/g, DEF)
      .replace(/\\(Longrightarrow|Rightarrow|longrightarrow|rightarrow|leftarrow|longleftarrow|searrow|nearrow|uparrow|downarrow|implies|iff|Leftrightarrow|Longleftrightarrow|Leftarrow|impliedby|quad|qquad|land|wedge|lor|vee|forall|exists|nexists|mid|colon|therefore|because|neq|ne|approx|sim|simeq|to|mapsto|subset|subseteq|supset|notin|ll|gg|equiv|cong|propto|perp|parallel)(?![a-zA-Z])/g, SEP)
      .replace(/\\\\|&/g, SEP)
      .replace(/\\[,;:! ]|~/g, ' ');
  }

  /* split on top-level ¶ , ; :  —  ( and [ both open, ) and ] both close,
     so half-open intervals like [a, b) still balance */
  function clauses(tex) {
    const s = prep(tex), out = [];
    let depth = 0, cur = '';
    for (let i = 0; i < s.length; i++) {
      const ch = s[i];
      if (ch === '{' || ch === '(' || ch === '[') depth++;
      else if (ch === '}' || ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
      if (depth === 0 && (ch === SEP || ch === ',' || ch === ';' || ch === ':')) { out.push(cur); cur = ''; continue; }
      cur += ch;
    }
    out.push(cur);
    return out.map(c => c.trim()).filter(Boolean);
  }

  const REL_CMD = { le: 'le', leq: 'le', leqslant: 'le', ge: 'ge', geq: 'ge', geqslant: 'ge', lt: 'lt', gt: 'gt', in: 'in' };

  /* one clause → terms[] and ops[] (ops[i] sits between terms[i] and terms[i+1]) */
  function chain(clause) {
    const terms = [], ops = [];
    let depth = 0, cur = '';
    for (let i = 0; i < clause.length; i++) {
      const ch = clause[i];
      if (ch === '{' || ch === '(' || ch === '[') depth++;
      else if (ch === '}' || ch === ')' || ch === ']') depth = Math.max(0, depth - 1);
      let op = null, len = 1;
      if (depth === 0) {
        if (ch === '<') op = 'lt';
        else if (ch === '>') op = 'gt';
        else if (ch === '=' || ch === DEF) op = 'eq';
        else if (ch === '\\') {
          const m = /^\\([a-zA-Z]+)/.exec(clause.slice(i));
          if (m && REL_CMD[m[1]]) { op = REL_CMD[m[1]]; len = m[0].length; }
        }
      }
      if (op) { terms.push(cur.trim()); ops.push(op); cur = ''; i += len - 1; continue; }
      cur += ch;
    }
    terms.push(cur.trim());
    return { terms, ops };
  }

  /* ── terms ──────────────────────────────────────────────────────────── */

  const key = t => t.replace(/\s+/g, '').replace(/\\epsilon(?![a-zA-Z])/g, '\\varepsilon');
  const ELLIPSIS = /^\\(c|l)?dots(?![a-zA-Z])$/;
  const INF = /^[+]?\\infty$/;
  const NINF = /^-\\infty$/;
  const BAD = /\\(\{|exists|forall|mathbb|mathcal|mathscr|cup|cap|sum|int|prod|bigcup|bigcap|begin|end|setminus|emptyset|varnothing|times|circ)(?![a-zA-Z])|\\\{|\u00B6|\\(le|leq|ge|geq|lt|gt|in)(?![a-zA-Z])|[<>=\u2254]/;

  function balanced(t) {
    let d = 0;
    for (const ch of t) { if (ch === '{' || ch === '(' || ch === '[') d++; else if (ch === '}' || ch === ')' || ch === ']') d--; if (d < 0) return false; }
    return d === 0 && (t.split('|').length - 1) % 2 === 0;
  }
  const usable = t => !!t && balanced(t) && !BAD.test(t) && key(t).length <= 40
    && /[a-zA-Z0-9]/.test(t) && !INF.test(t) && !NINF.test(t);

  /* top-level  X ± r  → { base: X, sign, r }  when r reads as positive */
  function offset(t) {
    let depth = 0, at = -1;
    for (let i = 0; i < t.length; i++) {
      const ch = t[i];
      if (ch === '{' || ch === '(' || ch === '[' ) depth++;
      else if (ch === '}' || ch === ')' || ch === ']') depth--;
      else if (depth === 0 && (ch === '+' || ch === '-') && i > 0 && !/[\^_]\s*$/.test(t.slice(0, i))) at = i;
    }
    if (at < 0) return null;
    const base = t.slice(0, at).trim(), r = t.slice(at + 1).trim();
    const positive = /\\(varepsilon|epsilon|delta|eta)(?![a-zA-Z])/.test(r) || /^\d+(\.\d+)?$/.test(r)
      || /^\\frac\s*\{?\s*1\s*\}?\s*\{?\s*[a-zA-Z]\s*\}?$/.test(r) || /^1\s*\/\s*[a-zA-Z]$/.test(r);
    return (positive && usable(base)) ? { base: base, sign: t[at], r: r } : null;
  }

  /* a band's half-width must read as one quantity, or its end labels become
     unreadable (c − (|x − c|)): ε, δ/2, ε_0, M, r, δ(ε), \frac{ε}{3}, 1/n, … */
  const RADIUS = /^(\\(varepsilon|epsilon|delta|eta|gamma|rho)(_\{?[a-zA-Z0-9]+\}?)?(\(\\?[a-zA-Z]+(_\{?[a-zA-Z0-9]+\}?)?\))?|[a-zA-Z](_\{?[a-zA-Z0-9]+\}?)?|\d+(\.\d+)?)(\/\d+|\/[a-zA-Z])?$|^\\frac\{[^{}|]+\}\{[^{}|]+\}$/;

  /* does x have a + or − at top level (so it needs brackets after a sign)? */
  function topSign(x) {
    let d = 0;
    for (let i = 0; i < x.length; i++) {
      const ch = x[i];
      if (ch === '{' || ch === '(' || ch === '[') d++;
      else if (ch === '}' || ch === ')' || ch === ']') d--;
      else if (d === 0 && i > 0 && (ch === '+' || ch === '-')) return true;
    }
    return false;
  }

  const radiusOK = R => RADIUS.test(key(R))
    || (/^\\[dt]?frac/.test(R) && balanced(R) && !/[|<>=]/.test(R) && key(R).length <= 26);

  function interval(t) {
    const m = /^([(\[])(.+)([)\]])$/.exec(t.trim());
    if (!m) return null;
    let depth = 0, at = -1;
    const inner = m[2];
    for (let i = 0; i < inner.length; i++) {
      const ch = inner[i];
      if (ch === '{' || ch === '(' || ch === '[') depth++;
      else if (ch === '}' || ch === ')' || ch === ']') depth--;
      else if (ch === ',' && depth === 0) { if (at >= 0) return null; at = i; }
    }
    if (at < 0) return null;
    const lo = inner.slice(0, at).trim(), hi = inner.slice(at + 1).trim();
    return { lo: NINF.test(lo) ? null : lo, hi: INF.test(hi) ? null : hi,
      loOpen: m[1] === '(', hiOpen: m[3] === ')' };
  }

  /* ── facts ──────────────────────────────────────────────────────────── */

  /* A fact set: points (by key, with a label), order edges, equalities and
     ranges. `mentioned` is what THIS text talks about, in reading order. */
  function Facts() {
    return { labels: {}, order: [], eqs: [], ranges: [], rays: [], mentioned: [], quantified: {}, ell: 0 };
  }

  function point(F, t) {
    t = t.replace(/[.,;]+\s*$/, '');                      /* sentence punctuation */
    if (ELLIPSIS.test(t.trim())) {
      const k = '⋯#' + (F.ell++);
      F.labels[k] = '\\cdots';
      F.mentioned.push(k);
      return k;
    }
    if (!usable(t)) return null;
    const k = key(t);
    if (!F.labels[k]) F.labels[k] = t.trim();
    F.mentioned.push(k);
    const off = offset(t);
    if (off) {
      const b = point(F, off.base);
      if (b) F.order.push(off.sign === '-' ? { a: k, b: b, strict: true } : { a: b, b: k, strict: true });
    }
    return k;
  }

  function readClause(F, clause) {
    const c = chain(clause);
    if (!c.ops.length) return;

    /* 0 < |x − c| < δ : the punctured neighbourhood, a band with c cut out */
    if (c.ops.length === 2 && c.terms[0].trim() === '0' && c.ops[0] === 'lt'
        && (c.ops[1] === 'lt' || c.ops[1] === 'le')) {
      const inner = /^\|(.+)\|$/.exec(c.terms[1].trim());
      const m = inner && /^(.+?)\s*-\s*([^-+]+)$/.exec(inner[1].trim());
      const Rr = c.terms[2].trim();
      if (m && usable(m[1]) && usable(m[2]) && key(m[2]).length <= 14 && radiusOK(Rr)) {
        const ctr = m[2].trim(), wrapR = topSign(Rr) ? '(' + Rr + ')' : Rr;
        const lo = point(F, ctr + '-' + wrapR), mid = point(F, ctr), hi = point(F, ctr + '+' + wrapR);
        if (lo && mid && hi) {
          F.order.push({ a: lo, b: mid, strict: true }, { a: mid, b: hi, strict: true });
          const closed = c.ops[1] === 'le';
          F.ranges.push({ v: m[1].trim(), vk: key(m[1]), lo: lo, hi: hi, loOpen: !closed, hiOpen: !closed, punct: mid });
          return;
        }
      }
    }

    /* |A − B| < R  on its own: a band, not a point */
    if (c.ops.length === 1 && (c.ops[0] === 'lt' || c.ops[0] === 'le')) {
      const abs = /^\|(.+)\|$/.exec(c.terms[0]);
      if (abs && usable(c.terms[1])) {
        const inner = abs[1].trim();
        const off = (() => {                     /* A − B, taken at top level */
          let d = 0, at = -1;
          for (let i = 0; i < inner.length; i++) {
            const ch = inner[i];
            if (ch === '{' || ch === '(' || ch === '[') d++;
            else if (ch === '}' || ch === ')' || ch === ']') d--;
            else if (d === 0 && ch === '-' && i > 0) at = i;
          }
          return at < 0 ? null : { v: inner.slice(0, at).trim(), c: inner.slice(at + 1).trim() };
        })();
        const v = off ? off.v : inner, ctr = off ? off.c : '0';
        const R = c.terms[1].trim().replace(/[.,;]+$/, '');
        if (usable(v) && usable(ctr) && key(ctr).length <= 14 && radiusOK(R)) {
          const wrap = x => topSign(x) ? '(' + x + ')' : x;
          const lo = point(F, (ctr === '0' ? '' : ctr) + '-' + wrap(R));
          const mid = point(F, ctr);
          const hi = point(F, (ctr === '0' ? '' : ctr + '+') + wrap(R));
          if (lo && mid && hi) {
            F.order.push({ a: lo, b: mid, strict: true }, { a: mid, b: hi, strict: true });
            const closed = c.ops[0] === 'le';
            F.ranges.push({ v: v.trim(), vk: key(v), lo: lo, hi: hi, loOpen: !closed, hiOpen: !closed, center: mid });
          }
          return;
        }
      }
    }

    const keys = c.terms.map(t => (/^\|.+\|$/.test(t.trim()) || usable(t) || ELLIPSIS.test(t.trim())) ? point(F, t) : null);

    /* an unusable term can still pass an order through an equality:
       e := lim e_n = sup{…} ∈ (2,3)  puts e in (2,3) */
    const valid = i => {
      if (keys[i]) return keys[i];
      for (let j = i - 1; j >= 0 && c.ops[j] === 'eq'; j--) if (keys[j]) return keys[j];
      for (let j = i + 1; j < keys.length && c.ops[j - 1] === 'eq'; j++) if (keys[j]) return keys[j];
      return null;
    };

    c.ops.forEach(function (op, i) {
      if (op === 'in') {
        const iv = interval(c.terms[i + 1]), v = valid(i);
        /* s \in S: s is what the text ranges over (u \in \mathbb{R} only says u is a number) */
        if (!iv && v && !/\\mathbb/.test(c.terms[i + 1])) F.quantified[v] = true;
        if (!iv || !v) return;
        const lo = iv.lo ? point(F, iv.lo) : null, hi = iv.hi ? point(F, iv.hi) : null;
        if ((iv.lo && !lo) || (iv.hi && !hi)) return;
        if (lo && hi) F.order.push({ a: lo, b: hi, strict: true });
        F.ranges.push({ v: F.labels[v] || c.terms[i].trim(), vk: v, lo: lo, hi: hi, loOpen: iv.loOpen, hiOpen: iv.hiOpen });
        return;
      }
      const a = valid(i), b = valid(i + 1);
      if (!a || !b || a === b) return;
      /* a lone one-sided fact is also a ray (Type 1 / Type 2): the variable is
         the side that is not a plain number, else the left-hand side */
      if (c.ops.length === 1 && op !== 'eq') {
        const num = k => /^-?\d+(\.\d+)?$/.test(k);
        let v = a, bnd = b, o = op;
        if (num(a) && !num(b)) { v = b; bnd = a; o = { lt: 'gt', le: 'ge', gt: 'lt', ge: 'le' }[op]; }
        if (!num(v)) F.rays.push({ v: F.labels[v], vk: v, bk: bnd,
          dir: (o === 'gt' || o === 'ge') ? 'r' : 'l', open: o === 'lt' || o === 'gt' });
      }
      if (op === 'eq') F.eqs.push([a, b]);
      else if (op === 'lt') F.order.push({ a: a, b: b, strict: true });
      else if (op === 'le') F.order.push({ a: a, b: b, strict: false });
      else if (op === 'gt') F.order.push({ a: b, b: a, strict: true });
      else if (op === 'ge') F.order.push({ a: b, b: a, strict: false });
    });
  }

  function read(F, text) {
    mathSpans(text).forEach(m => clauses(m).forEach(cl => readClause(F, cl)));
    return F;
  }

  /* ── solving: which points, in what order ───────────────────────────── */

  function solve(ctx, mentioned, ranges) {
    /* equalities first: one node per class */
    const parent = {};
    const find = k => (parent[k] === undefined || parent[k] === k) ? k : (parent[k] = find(parent[k]));
    ctx.eqs.forEach(([a, b]) => { const ra = find(a), rb = find(b); if (ra !== rb) parent[rb] = ra; });

    const nodes = [];
    const seen = {};
    const want = mentioned.slice();
    ranges.forEach(r => { if (r.lo) want.push(r.lo); if (r.hi) want.push(r.hi); });
    want.forEach(k => { const r = find(k); if (!seen[r]) { seen[r] = true; nodes.push(r); } });
    if (nodes.length < 2) return [];

    /* closure over EVERY node the context knows, so a step can use an order
       established earlier through a term it does not itself mention */
    const all = {};
    Object.keys(ctx.labels).forEach(k => { all[find(k)] = true; });
    const ids = Object.keys(all), ix = {};
    ids.forEach((k, i) => { ix[k] = i; });
    const n = ids.length;
    if (n > 120) return [];
    const R = ids.map(() => new Array(n).fill(0));    /* 0 none · 1 ≤ · 2 < */
    ctx.order.forEach(e => {
      const i = ix[find(e.a)], j = ix[find(e.b)];
      if (i === undefined || j === undefined || i === j) return;
      R[i][j] = Math.max(R[i][j], e.strict ? 2 : 1);
    });
    for (let k = 0; k < n; k++) for (let i = 0; i < n; i++) if (R[i][k]) for (let j = 0; j < n; j++) if (R[k][j]) {
      const s = Math.max(R[i][k], R[k][j]);
      if (s > R[i][j]) R[i][j] = s;
    }
    for (let i = 0; i < n; i++) if (R[i][i]) return [];       /* a contradiction: draw nothing */

    const rel = (a, b) => R[ix[a]][ix[b]];
    const comparable = (a, b) => rel(a, b) || rel(b, a);

    /* components of mutual comparability among the wanted nodes */
    const comps = [], placed = {};
    nodes.forEach(function (a) {
      if (placed[a]) return;
      const comp = [a]; placed[a] = true;
      for (let q = 0; q < comp.length; q++) nodes.forEach(function (b) {
        if (!placed[b] && comparable(comp[q], b)) { placed[b] = true; comp.push(b); }
      });
      comps.push(comp);
    });

    const lines = [];
    comps.forEach(function (comp) {
      let pts = comp.slice();
      /* a component must be a CHAIN; drop the least comparable until it is */
      const bad = () => pts.map(a => pts.filter(b => b !== a && !comparable(a, b)).length);
      for (let guard = 0; guard < 12; guard++) {
        const b = bad();
        const worst = b.indexOf(Math.max.apply(null, b));
        if (b[worst] === 0) break;
        pts.splice(worst, 1);
      }
      pts.sort((a, b) => rel(a, b) ? -1 : rel(b, a) ? 1 : 0);
      const inLine = {};
      pts.forEach(k => { inLine[k] = true; });
      const seenR = {};
      const rs = ranges.filter(r => (!r.lo || inLine[find(r.lo)]) && (!r.hi || inLine[find(r.hi)]))
        .map(r => Object.assign({}, r, { lo: r.lo && find(r.lo), hi: r.hi && find(r.hi), vk: find(r.vk), punct: r.punct && find(r.punct), center: r.center && find(r.center) }))
        .filter(r => { const k = r.vk + '|' + r.lo + '|' + r.hi; if (seenR[k]) return false; seenR[k] = true; return true; });
      if (pts.length > MAX_POINTS) return;
      if (pts.length < 3 && !(rs.length && pts.length >= 1)) return;
      lines.push({
        pts: pts,
        gaps: pts.slice(1).map((b, i) => rel(pts[i], b)),
        labels: pts.map(k => {
          const names = Object.keys(ctx.labels).filter(x => find(x) === k && !/^⋯#/.test(x)).map(x => ctx.labels[x]);
          const uniq = (names.length ? names : [ctx.labels[k] || '\\cdots']).filter((v, i, a) => a.indexOf(v) === i);
          /* an equality class shows its two shortest names, in reading order */
          const keep = uniq.slice().sort((a, b) => key(a).length - key(b).length).slice(0, 2);
          return uniq.filter(v => keep.includes(v)).join(' = ');
        }),
        ranges: rs
      });
    });
    return lines.slice(0, MAX_LINES);
  }

  /* ── the sheet's three types ─────────────────────────────────────────────
     Everything drawn is one of the types on the reference sheet
     (flow-library/design/realline-reference.html) — nothing else:

       Type 1  x > a      a ray to the right   (blue)
       Type 2  x < a      a ray to the left    (green)
       Type 3  a < x < b  a segment            (amber)

     A track is { type, lo, hi, loOpen, hiOpen, pts:[{ k, label, role }] },
     pts left to right. Roles: 'end' (an endpoint of the set), 'var' (the
     quantity the inequality is about — x_n in |x_n| ≤ M), 'inner' (another
     term the order places inside), 'center' (the centre of a neighbourhood,
     a tick), 'hole' (the excluded centre of 0 < |x − c| < δ).

     An order chain w ≤ s ≤ u is Type 3 from its first term to its last with
     the terms between marked; a chain with no bounded end (n_1 < n_2 < ⋯) is
     not drawn. A quantity that cannot be negative (|…|, ‖…‖, d(…)) bounded
     above is [0, R] — never a ray running off to −∞. */
  const NONNEG = /^(\|.*\||\\\|.*\\\||d\(.*\))$/;
  const isEll = k => /^⋯#/.test(k);

  function tracksOf(line) {
    const lab = k => line.labels[line.pts.indexOf(k)];
    const out = [];
    if (!line.ranges.length) {
      const n = line.pts.length;
      if (n < 3 || isEll(line.pts[0]) || isEll(line.pts[n - 1])) return out;
      out.push({ type: 3, lo: line.pts[0], hi: line.pts[n - 1],
        loOpen: line.gaps[0] === 2, hiOpen: line.gaps[n - 2] === 2,
        pts: line.pts.map((k, i) => ({ k: k, label: line.labels[i], role: i === 0 || i === n - 1 ? 'end' : 'inner' })) });
      return out.map(numberSet);
    }
    line.ranges.forEach(function (r) {
      if (!r.lo && !r.hi) return;
      let lo = r.lo, hi = r.hi, loOpen = r.loOpen, hiOpen = r.hiOpen;
      const pts = line.pts.map(k => ({ k: k, label: lab(k),
        role: k === lo || k === hi ? 'end' : k === r.punct ? 'hole' : k === r.center ? 'center' : 'inner' }));
      if (!lo && NONNEG.test(key(r.v))) {                       /* |…| ≤ R  →  [0, R] */
        lo = '0'; loOpen = false;
        if (!pts.some(p => p.k === '0')) pts.unshift({ k: '0', label: '0', role: 'end' });
        else pts.forEach(p => { if (p.k === '0') p.role = 'end'; });
      }
      const type = lo && hi ? 3 : lo ? 1 : 2;
      if (!pts.some(p => p.k === r.vk)) {
        /* the quantity itself, placed inside its set: beside the centre of a
           neighbourhood, mid-way along a segment, inside the ray */
        const iLo = pts.findIndex(p => p.k === lo), iHi = pts.findIndex(p => p.k === hi);
        const iC = pts.findIndex(p => p.role === 'center' || p.role === 'hole');
        let at = type === 1 ? iLo + 1 : type === 2 ? iHi : iC >= 0 ? iC + 1 : iLo + 1 + Math.floor((iHi - iLo - 1) / 2);
        if (type === 3 && iC < 0 && iHi - iLo === 1) at = iLo + 1;
        pts.splice(Math.max(0, at), 0, { k: r.vk, label: r.v, role: 'var' });
      } else {
        pts.forEach(p => { if (p.k === r.vk) p.role = 'var'; });
      }
      out.push({ type: type, lo: lo, hi: hi, loOpen: loOpen, hiOpen: hiOpen, pts: pts });
    });
    return out.map(numberSet);
  }

  /* ── ℕ, ℤ or ℝ ─────────────────────────────────────────────────────────
     When every marked quantity is an index or a count (n, k, m, N, K, n_k,
     K(ε), …) the line is ℕ — or ℤ if a negative integer is on it. In ℕ a
     set bounded only above starts at 1: n ≤ K is [1, K], never a ray into
     the negatives. */
  const INDEX = /^(n|m|k|j|i|N|K|H)(_\{?[a-zA-Z0-9]+(_\{?[a-zA-Z0-9]+\}?)?\}?|_[a-zA-Z0-9])?(\([^()]*\))?('|\^\{?\*\}?)?$/;

  function numberSet(t) {
    const marked = t.pts.filter(p => p.role === 'var' || p.role === 'inner');
    const integer = marked.length && marked.every(p => INDEX.test(key(p.label)));
    if (!integer) { t.set = 'R'; return t; }
    t.set = t.pts.some(p => /^-\d+$/.test(key(p.label))) ? 'Z' : 'N';
    if (t.set === 'N' && t.type === 2) {
      t.type = 3; t.lo = '1'; t.loOpen = false;
      const one = t.pts.find(p => p.k === '1');
      if (one) one.role = 'end'; else t.pts.unshift({ k: '1', label: '1', role: 'end' });
    }
    return t;
  }

  /* one line of text per track — what tools/realline_report.js prints */
  function describe(t) {
    const L = k => (t.pts.find(p => p.k === k) || {}).label;
    const set = t.type === 1 ? (t.loOpen ? '(' : '[') + L(t.lo) + ', ∞)'
      : t.type === 2 ? '(−∞, ' + L(t.hi) + (t.hiOpen ? ')' : ']')
      : (t.loOpen ? '(' : '[') + L(t.lo) + ', ' + L(t.hi) + (t.hiOpen ? ')' : ']');
    const marks = t.pts.filter(p => p.role !== 'end').map(p => p.label + (p.role === 'var' ? '' : ' (' + p.role + ')'));
    return 'Type ' + t.type + ' ' + set + (t.set && t.set !== 'R' ? ' in ' + (t.set === 'N' ? 'ℕ' : 'ℤ') : '')
      + (marks.length ? '  ·  ' + marks.join(', ') : '');
  }

  /* ── drawing ────────────────────────────────────────────────────────── */

  const plain = t => t.replace(/\\(varepsilon|epsilon)/g, 'ε').replace(/\\delta/g, 'δ').replace(/\\eta/g, 'η')
    .replace(/\\cdots|\\ldots|\\dots/g, '…').replace(/\\sup/g, 'sup').replace(/\\inf/g, 'inf')
    .replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();

  function track(t, fresh) {
    const n = t.pts.length;
    const kind = t.type === 1 ? 'ray-r' : t.type === 2 ? 'ray-l' : 'seg';
    /* evenly spaced, the open side of a ray left free */
    const span = t.type === 1 ? [n === 1 ? 32 : 14, 70] : t.type === 2 ? [30, n === 1 ? 68 : 86]
      : [n === 2 ? 22 : 12, n === 2 ? 78 : 88];
    const x = i => n === 1 ? span[0] : span[0] + i * (span[1] - span[0]) / (n - 1);
    const stagger = n >= 5 || (n >= 3 && t.pts.some(p => plain(p.label).length > 9));

    const box = el('div', { class: 'rl-track ' + kind, style: { height: (stagger ? 62 : 44) + 'px' } });
    const put = (cls, style, attrs) => {
      const d = el('div', Object.assign({ class: cls }, attrs || {}));
      Object.assign(d.style, style);
      box.appendChild(d);
      return d;
    };
    put('rl-axis', {});
    put('rl-R', {}, { text: t.set === 'N' ? '\u2115' : t.set === 'Z' ? '\u2124' : '\u211D' });

    const pos = {};
    t.pts.forEach((p, i) => { pos[p.k] = x(i); });
    const a = t.lo ? pos[t.lo] : 1.2, b = t.hi ? pos[t.hi] : 98.8;
    put('rl-set' + (t.lo ? '' : ' to-l') + (t.hi ? '' : ' to-r'), { left: a + '%', width: (b - a) + '%' });

    t.pts.forEach(function (p, i) {
      const at = { left: pos[p.k] + '%' };
      if (p.role === 'end') put('rl-end' + ((p.k === t.lo ? t.loOpen : t.hiOpen) ? ' open' : ''), at);
      else if (p.role === 'hole') put('rl-end open', at);
      else if (p.role === 'center') put('rl-pt inner', at);
      else put('rl-pt' + (p.role === 'var' ? ' var' : ''), at);
      const edge = i === 0 && t.type !== 2 ? ' first' : i === n - 1 && t.type !== 1 ? ' last' : '';
      put('rl-lab' + edge + (p.role === 'var' ? ' var' : '') + (fresh && fresh[p.k] ? ' new' : '')
        + (stagger && i % 2 ? ' low' : ''), at, { html: '$' + p.label + '$' });
    });

    return el('div', { class: 'rl', role: 'img', 'aria-label': 'On the real line: ' + plain(describe(t)) }, [box]);
  }

  /* ── what the views call ────────────────────────────────────────────── */

  const tracksOfAll = lines => [].concat.apply([], lines.map(tracksOf)).slice(0, 3);

  function render(lines, fresh) {
    const tracks = tracksOfAll(lines);
    return tracks.length ? el('div', { class: 'rl-group' }, tracks.map(t => track(t, fresh))) : null;
  }

  /* `line` in the data: false, one TeX string, or several */
  const source = (obj, fallback) => (obj && obj.line === false) ? null
    : (obj && typeof obj.line === 'string') ? '$' + obj.line + '$'
    : (obj && Array.isArray(obj.line)) ? obj.line.map(l => '$' + l + '$').join(' ') : fallback;

  /* The statement's own line(s). */
  function statement(c) {
    if (!enabled() || !c) return null;
    return render(planStatement(c), null);
  }

  /* Rays from one-sided facts, for a text that states no richer order. A
     bound other than 0 first: `n \ge K` says more than `\varepsilon > 0`,
     which nearly every step repeats. */
  function rayLines(F, rays) {
    const seen = {};
    /* w \le s "for all s \in S" is about s, not w: the side the text
       quantifies over is the variable, whichever side it is written on */
    rays = rays.map(r => (F.quantified[r.bk] && !F.quantified[r.vk])
      ? { v: F.labels[r.bk], vk: r.bk, bk: r.vk, dir: r.dir === 'r' ? 'l' : 'r', open: r.open } : r);
    return rays.filter(r => { const k = r.vk + '|' + r.bk + '|' + r.dir; if (seen[k]) return false; seen[k] = true; return true; })
      .sort((x, y) => (key(F.labels[x.bk] || '') === '0') - (key(F.labels[y.bk] || '') === '0'))
      .slice(0, MAX_LINES)
      .map(r => ({
        pts: [r.bk], gaps: [], labels: [F.labels[r.bk]],
        ranges: [{ v: r.v, vk: r.vk, lo: r.dir === 'r' ? r.bk : null, hi: r.dir === 'l' ? r.bk : null,
          loOpen: r.open, hiOpen: r.open }]
      }));
  }

  const rungText = r => source(r, [r.m, r.math].filter(Boolean).map(t => /\$/.test(t) ? t : '$' + t + '$').join(' '));

  /* The plan, with no DOM: one entry per rung ({ lines, fresh } or null),
     each solved against the statement plus every step up to and including
     it. A step whose facts clash with an earlier one (the same letter
     reused for something else) falls back to its own facts alone, so one
     clash cannot blank the rest of the proof. */
  /* Plan a sequence of texts (proof steps, or the parts of a statement):
     each is solved against ctx plus every text before it, falling back to
     its own facts alone, then to rays. `shown` collects what has been drawn
     so far, and a point drawn for the first time is `fresh`. */
  function planSeq(ctx, texts, shown) {
    return texts.map(function (text) {
      if (!text) return null;
      const before = { m: ctx.mentioned.length, r: ctx.ranges.length, y: ctx.rays.length };
      read(ctx, text);
      let lines = solve(ctx, ctx.mentioned.slice(before.m), ctx.ranges.slice(before.r));
      if (!tracksOfAll(lines).length) { const own = read(Facts(), text); lines = solve(own, own.mentioned, own.ranges); }
      if (!tracksOfAll(lines).length) lines = rayLines(ctx, ctx.rays.slice(before.y));
      if (!tracksOfAll(lines).length) return null;
      const fresh = {};
      const keys = [].concat.apply([], tracksOfAll(lines).map(t => t.pts.map(p => p.k)));
      keys.forEach(k => { if (!shown[k]) fresh[k] = true; });
      keys.forEach(k => { shown[k] = true; });
      return { lines: lines, fresh: fresh };
    });
  }

  /* A statement in parts, as the reader sees it: each <p>, each list item,
     and any loose text between them. A line goes right under its part. */
  function htmlParts(html) {
    const out = [], re = /<(p|li|div|blockquote)\b[^>]*>([\s\S]*?)<\/\1>/gi;
    const loose = t => t.replace(/<\/?(ul|ol)\b[^>]*>/gi, '');
    let last = 0, m;
    while ((m = re.exec(html))) {
      const pre = loose(html.slice(last, m.index));
      if (pre.trim()) out.push(pre);
      out.push(m[2]);
      last = re.lastIndex;
    }
    const tail = loose(html.slice(last));
    if (tail.trim()) out.push(tail);
    return out;
  }

  /* one entry per part of the statement: { lines, fresh } or null */
  function planStatementParts(c, parts) {
    if (!c || c.line === false) return (parts || []).map(() => null);
    if (c.line !== undefined) return [planSeq(Facts(), [source(c, '')], {})[0]];   /* an override is one block */
    return planSeq(Facts(), parts || htmlParts(String(c.statement || '')), {});
  }

  /* every line the statement draws, flat (the report and the proof seed use it) */
  function planStatement(c) {
    return [].concat.apply([], planStatementParts(c).filter(Boolean).map(p => p.lines));
  }

  function planProof(c) {
    const rungs = (c && c.proof && c.proof.rungs) || [];
    if (c.line === false || !rungs.length) return rungs.map(() => null);
    const ctx = Facts();
    const stText = source(c, c.statement);
    if (stText) read(ctx, stText);
    const shown = {};
    tracksOfAll(planStatement(c)).forEach(t => t.pts.forEach(p => { shown[p.k] = true; }));
    return planSeq(ctx, rungs.map(rungText), shown);
  }

  /* Draw a statement's lines INTO its rendered prose, each one directly under
     the block it comes from. Blocks are read before MathJax runs, so their
     text is still the authored TeX. Returns the prose node. */
  function statementInto(node, c) {
    if (!enabled() || !c || !node) return node;
    if (c.line !== undefined) {                       /* override: after the whole statement */
      const g = c.line === false ? null : render(planStatement(c), null);
      if (g) node.appendChild(g);
      return node;
    }
    const blocks = [];
    let run = [];
    const flush = () => {
      const text = run.map(n => n.textContent).join('');
      if (run.length && text.trim()) blocks.push({ after: run[run.length - 1], text: text });
      run = [];
    };
    Array.prototype.slice.call(node.childNodes).forEach(function (n) {
      if (n.nodeType === 1 && /^(P|DIV|BLOCKQUOTE|TABLE|H[1-6])$/.test(n.tagName)) { flush(); blocks.push({ after: n, text: n.textContent }); }
      else if (n.nodeType === 1 && /^(UL|OL)$/.test(n.tagName)) {
        flush();
        Array.prototype.slice.call(n.children).forEach(li => blocks.push({ into: li, text: li.textContent }));
      } else run.push(n);
    });
    flush();
    planStatementParts(c, blocks.map(b => b.text)).forEach(function (p, i) {
      const g = p && render(p.lines, null);
      if (!g) return;
      const b = blocks[i];
      if (b.into) b.into.appendChild(g);
      else b.after.parentNode.insertBefore(g, b.after.nextSibling);
    });
    return node;
  }

  /* One node (or null) per rung. */
  function proof(c) {
    const rungs = (c && c.proof && c.proof.rungs) || [];
    if (!enabled()) return rungs.map(() => null);
    return planProof(c).map(p => p ? render(p.lines, p.fresh) : null);
  }

  return { statement: statement, proof: proof, enabled: enabled,
    planStatement: planStatement, planProof: planProof, statementInto: statementInto, tracksOf: tracksOfAll, describe: describe };
})();

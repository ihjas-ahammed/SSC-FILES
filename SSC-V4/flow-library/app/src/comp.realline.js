/* ══════════════════════════════════════════════════════════════════════════
   The real line: one widget for every inequality.

   Inequalities are statements about ORDER, not about values, so the widget
   is schematic: it reads the order relations already written in the TeX of a
   statement or a proof step and lays the terms out left to right. Nothing has
   to be authored:

     a < b \le c                    three points, the relations on the axis
     |x - a| < \varepsilon          a band from a−ε to a+ε around a, with x
                                    roaming inside it
     x \in (a, b]   /  x \in (0,\infty)   a band (or a ray) with x inside
     u = \sup S                     one point, labelled with both names
     u - \varepsilon                implies u − ε < u, so u appears beside it
     e_1 < e_2 < \cdots < 3         ellipses kept as points of their own

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
      .replace(/\\(Longrightarrow|Rightarrow|implies|iff|Leftrightarrow|Longleftrightarrow|Leftarrow|impliedby|quad|qquad|land|wedge|lor|vee|forall|exists|nexists|mid|colon|therefore|because|neq|ne|approx|sim|simeq|to|mapsto|subset|subseteq|supset|notin|ll|gg|equiv|cong|propto|perp|parallel)(?![a-zA-Z])/g, SEP)
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
  const BAD = /\\(\{|exists|forall|mathbb|mathcal|mathscr|cup|cap|sum|int|prod|bigcup|bigcap|begin|end|setminus|emptyset|varnothing|times|circ)(?![a-zA-Z])|\\\{|[{}]\s*$|\u00B6|\\(le|leq|ge|geq|lt|gt|in)(?![a-zA-Z])|[<>=\u2254]/;

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
    return { labels: {}, order: [], eqs: [], ranges: [], mentioned: [], ell: 0 };
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
      if (m && usable(m[1]) && usable(m[2]) && key(m[2]).length <= 14 && RADIUS.test(key(Rr))) {
        const ctr = m[2].trim(), wrapR = /[+-]/.test(Rr) ? '(' + Rr + ')' : Rr;
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
        const R = c.terms[1].trim();
        if (usable(v) && usable(ctr) && key(ctr).length <= 14 && RADIUS.test(key(R))) {
          const wrap = x => /[+-]/.test(x.replace(/^-/, '')) ? '(' + x + ')' : x;
          const lo = point(F, (ctr === '0' ? '' : ctr) + '-' + wrap(R));
          const mid = point(F, ctr);
          const hi = point(F, (ctr === '0' ? '' : ctr + '+') + wrap(R));
          if (lo && mid && hi) {
            F.order.push({ a: lo, b: mid, strict: true }, { a: mid, b: hi, strict: true });
            const closed = c.ops[0] === 'le';
            F.ranges.push({ v: v.trim(), vk: key(v), lo: lo, hi: hi, loOpen: !closed, hiOpen: !closed });
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
        if (!iv || !v) return;
        const lo = iv.lo ? point(F, iv.lo) : null, hi = iv.hi ? point(F, iv.hi) : null;
        if ((iv.lo && !lo) || (iv.hi && !hi) || (!lo && !hi)) return;
        if (lo && hi) F.order.push({ a: lo, b: hi, strict: true });
        F.ranges.push({ v: F.labels[v] || c.terms[i].trim(), vk: v, lo: lo, hi: hi, loOpen: iv.loOpen, hiOpen: iv.hiOpen });
        return;
      }
      const a = valid(i), b = valid(i + 1);
      if (!a || !b || a === b) return;
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
        .map(r => Object.assign({}, r, { lo: r.lo && find(r.lo), hi: r.hi && find(r.hi), vk: find(r.vk), punct: r.punct && find(r.punct) }))
        .filter(r => { const k = r.vk + '|' + r.lo + '|' + r.hi; if (seenR[k]) return false; seenR[k] = true; return true; });
      if (pts.length > MAX_POINTS) return;
      if (pts.length < 3 && !(rs.length && pts.length >= 2)) return;
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

  /* ── drawing ────────────────────────────────────────────────────────── */

  const plain = t => t.replace(/\\(varepsilon|epsilon)/g, 'ε').replace(/\\delta/g, 'δ').replace(/\\eta/g, 'η')
    .replace(/\\cdots|\\ldots|\\dots/g, '…').replace(/\\sup/g, 'sup').replace(/\\inf/g, 'inf')
    .replace(/\\[a-zA-Z]+/g, '').replace(/[{}]/g, '').replace(/\s+/g, ' ').trim();

  function draw(line, fresh) {
    const n = line.pts.length;
    const PAD = 10;                                       /* % kept free at each end */
    const x = i => PAD + (n === 1 ? 50 - PAD : i * (100 - 2 * PAD) / (n - 1));
    const pos = {};
    line.pts.forEach((k, i) => { pos[k] = x(i); });
    const rows = line.ranges.length;
    const top = rows ? rows * 18 + 16 : 10;              /* px above the axis */
    const stagger = n >= 5 || (n >= 3 && line.labels.some(l => plain(l).length > 9));

    const box = el('div', { class: 'rl-track', style: { height: (top + (stagger ? 58 : 38)) + 'px' } });
    const put = (cls, style, kids, attrs) => {
      const d = el('div', Object.assign({ class: cls }, attrs || {}), kids);
      Object.assign(d.style, style);
      box.appendChild(d);
      return d;
    };

    put('rl-axis', { top: top + 'px' });

    line.ranges.forEach(function (r, i) {
      const y = top - 12 - i * 18;
      const a = r.lo ? pos[r.lo] : 0, b = r.hi ? pos[r.hi] : 100;
      put('rl-band' + (r.lo ? '' : ' ray-l') + (r.hi ? '' : ' ray-r'),
        { left: a + '%', width: (b - a) + '%', top: y + 'px' });
      if (r.lo) put('rl-cap' + (r.loOpen ? ' open' : ''), { left: a + '%', top: y + 'px' });
      if (r.hi) put('rl-cap' + (r.hiOpen ? ' open' : ''), { left: b + '%', top: y + 'px' });
      if (r.punct && pos[r.punct] !== undefined) put('rl-cap open punct', { left: pos[r.punct] + '%', top: y + 'px' });
      if (!line.pts.includes(r.vk)) {
        const roam = put('rl-roam', { top: y + 'px' }, [
          el('span', { class: 'rl-dot' }),
          el('span', { class: 'rl-var', html: '$' + r.v + '$' })
        ]);
        /* a punctured band keeps its variable off the centre it can never be */
        const span = r.punct ? [0.14, 0.40, 0.30] : [0.18, 0.82, 0.50];
        roam.style.setProperty('--a', (a + (b - a) * span[0]) + '%');
        roam.style.setProperty('--b', (a + (b - a) * span[1]) + '%');
        roam.style.left = (a + (b - a) * span[2]) + '%';
      }
    });

    line.pts.forEach(function (k, i) {
      const isNew = fresh && fresh[k];
      put('rl-tick' + (isNew ? ' new' : ''), { left: pos[k] + '%', top: top + 'px' });
      /* the two end labels hang inward so they never run off the line */
      const end = i === 0 ? ' first' : i === n - 1 ? ' last' : '';
      put('rl-lab' + end + (isNew ? ' new' : '') + (stagger && i % 2 ? ' low' : ''),
        { left: pos[k] + '%', top: (top + 10) + 'px' }, null, { html: '$' + line.labels[i] + '$' });
    });

    line.gaps.forEach(function (g, i) {
      put('rl-op', { left: ((x(i) + x(i + 1)) / 2) + '%', top: top + 'px' }, null,
        { text: g === 2 ? '<' : '≤' });
    });

    const said = line.labels.map(plain).reduce((s, l, i) => i ? s + (line.gaps[i - 1] === 2 ? ' < ' : ' ≤ ') + l : l, '');
    return el('div', { class: 'rl', role: 'img', 'aria-label': 'On the real line: ' + said }, [box]);
  }

  /* ── what the views call ────────────────────────────────────────────── */

  function render(lines, fresh) {
    if (!lines.length) return null;
    return el('div', { class: 'rl-set' }, lines.map(l => draw(l, fresh)));
  }

  const source = (obj, fallback) => (obj && obj.line === false) ? null
    : (obj && typeof obj.line === 'string') ? '$' + obj.line + '$' : fallback;

  /* The statement's own line(s). */
  function statement(c) {
    if (!enabled() || !c) return null;
    return render(planStatement(c), null);
  }

  const rungText = r => source(r, [r.m, r.math].filter(Boolean).map(t => /\$/.test(t) ? t : '$' + t + '$').join(' '));

  /* The plan, with no DOM: one entry per rung ({ lines, fresh } or null),
     each solved against the statement plus every step up to and including
     it. A step whose facts clash with an earlier one (the same letter
     reused for something else) falls back to its own facts alone, so one
     clash cannot blank the rest of the proof. */
  function planProof(c) {
    const rungs = (c && c.proof && c.proof.rungs) || [];
    if (c.line === false || !rungs.length) return rungs.map(() => null);
    const ctx = Facts();
    const stText = source(c, c.statement);
    if (stText) read(ctx, stText);
    const shown = {};
    solve(ctx, ctx.mentioned, ctx.ranges).forEach(l => l.pts.forEach(k => { shown[k] = true; }));
    return rungs.map(function (r) {
      const text = rungText(r);
      if (!text) return null;
      const before = { m: ctx.mentioned.length, r: ctx.ranges.length };
      read(ctx, text);
      let lines = solve(ctx, ctx.mentioned.slice(before.m), ctx.ranges.slice(before.r));
      if (!lines.length) { const own = read(Facts(), text); lines = solve(own, own.mentioned, own.ranges); }
      if (!lines.length) return null;
      const fresh = {};
      lines.forEach(l => l.pts.forEach(k => { if (!shown[k]) fresh[k] = true; }));
      lines.forEach(l => l.pts.forEach(k => { shown[k] = true; }));
      return { lines: lines, fresh: fresh };
    });
  }

  function planStatement(c) {
    const text = c && source(c, c.statement);
    if (!text) return [];
    const F = read(Facts(), text);
    return solve(F, F.mentioned, F.ranges);
  }

  /* One node (or null) per rung. */
  function proof(c) {
    const rungs = (c && c.proof && c.proof.rungs) || [];
    if (!enabled()) return rungs.map(() => null);
    return planProof(c).map(p => p ? render(p.lines, p.fresh) : null);
  }

  return { statement: statement, proof: proof, enabled: enabled,
    planStatement: planStatement, planProof: planProof };
})();

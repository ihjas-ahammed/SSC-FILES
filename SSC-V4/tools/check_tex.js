#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   TeX sanity check for a content pool.

       node tools/check_tex.js            the live pool listed in app/sources.js
       node tools/check_tex.js --mock     the mock pool

   MathJax reports a broken fragment by drawing a red blob INSIDE the page, so
   a lost brace in a proof looks like content until somebody opens that exact
   note. This walks every authored string in the pool instead and reports the
   failures that are decidable without a full TeX engine — which is most of the
   ones that actually happen:

     · an odd number of unescaped `$`, so a span never closes;
     · unbalanced `{` `}` inside a maths span;
     · `\left` without its `\right`;
     · `\begin{env}` without its `\end{env}`;
     · `\\` at the end of a fragment, which MathJax reads as a row break with
       nothing after it;
     · a command not in the known list (reported separately as a WARNING, since
       the list is not exhaustive).

   Exit code 1 if any ERROR is found, so it can gate a publish.
   ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.resolve(__dirname, '..');
const APP = path.join(ROOT, 'app');
const which = process.argv.includes('--mock') ? 'mock' : 'live';

function dataFiles() {
  const src = fs.readFileSync(path.join(APP, 'sources.js'), 'utf8');
  const m = new RegExp(which + ':\\s*\\[([\\s\\S]*?)\\]').exec(src);
  if (!m) { console.error('no "' + which + '" list in app/sources.js'); process.exit(2); }
  return (m[1].match(/['"]([^'"]+)['"]/g) || []).map(s => s.slice(1, -1));
}

const ctx = { console };
vm.createContext(ctx);
dataFiles().forEach(function (rel) {
  const p = path.normalize(path.join(APP, rel));
  vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: rel });
});
vm.runInContext('globalThis.__P={C:typeof CONCEPTS!=="undefined"?CONCEPTS:[],'
  + 'O:typeof OBJECTIVE!=="undefined"?OBJECTIVE:[],'
  + 'Q:typeof QUESTIONS!=="undefined"?QUESTIONS:[]};', ctx);
const pool = ctx.__P;

/* every command the pool is allowed to use without comment */
const KNOWN = new Set(('alpha beta gamma delta epsilon varepsilon zeta eta theta vartheta iota '
  + 'kappa lambda mu nu xi pi varpi rho varrho sigma varsigma tau upsilon phi varphi chi psi omega '
  + 'Gamma Delta Theta Lambda Xi Pi Sigma Upsilon Phi Psi Omega '
  + 'frac dfrac tfrac sqrt sum prod int iint oint lim limsup liminf sup inf max min '
  + 'log ln exp sin cos tan cot sec csc arcsin arccos arctan sinh cosh tanh '
  + 'to mapsto rightarrow Rightarrow leftarrow Leftarrow leftrightarrow Leftrightarrow '
  + 'implies impliedby iff uparrow downarrow nearrow longrightarrow hookrightarrow twoheadrightarrow rightharpoonup rightrightarrows '
  + 'le leq ge geq ne neq approx equiv sim simeq cong propto ll gg prec succ '
  + 'in notin ni subset subseteq supset supseteq subsetneq cup cap bigcup bigcap setminus '
  + 'emptyset varnothing forall exists nexists neg lnot land lor wedge vee '
  + 'infty partial nabla cdot cdots ldots vdots ddots dots times div pm mp ast star circ ell '
  + 'mathbb mathbf mathrm mathcal mathscr mathfrak mathit mathsf mathtt boldsymbol '
  + 'text textbf textit textrm operatorname displaystyle limits nolimits '
  + 'left right big Big bigg Bigg langle rangle lceil rceil lfloor rfloor lvert rvert '
  + 'lVert rVert vert Vert lbrace rbrace | '
  + 'begin end cases array matrix pmatrix bmatrix align aligned gathered split '
  + 'quad qquad hspace vspace phantom overline underline widehat hat bar tilde widetilde '
  + 'vec dot ddot prime overset underset stackrel binom choose '
  + 'colon mid parallel perp angle triangle square blacksquare qed '
  + 'therefore because ldotp cdotp nonumber label ref notag '
  + 'color textcolor mathopen mathclose mathrel mathbin mathop smallsetminus '
  + 'Re Im deg det dim gcd hom ker arg bmod pmod '
  + 'aleph not Longrightarrow Longleftarrow Longleftrightarrow longmapsto '
  + 'overbrace underbrace substack smash raise lower rule '
  + 'lim_ liminf_ limsup_ ').trim().split(/\s+/));

const errors = [];
const warns = [];
const unknown = new Map();

function mathSpans(s) {
  /* the same split the app's markdown does: $$…$$ first, then $…$ */
  const out = [];
  const re = /\$\$([\s\S]+?)\$\$|\$([^$]+?)\$/g;
  let m;
  while ((m = re.exec(s)) !== null) out.push(m[1] != null ? m[1] : m[2]);
  return out;
}

function countDollars(s) {
  let n = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== '$') continue;
    if (i && s[i - 1] === '\\') continue;
    if (s[i + 1] === '$') { i += 1; n += 2; continue; }
    n += 1;
  }
  return n;
}

function check(where, s) {
  if (typeof s !== 'string' || s.indexOf('$') < 0 && s.indexOf('\\') < 0) return;

  const dollars = countDollars(s);
  if (dollars % 2 !== 0) errors.push([where, 'odd number of $ delimiters (' + dollars + ')', s]);

  mathSpans(s).forEach(function (tex) {
    let depth = 0;
    for (let i = 0; i < tex.length; i++) {
      if (tex[i] === '\\') { i += 1; continue; }
      if (tex[i] === '{') depth += 1;
      else if (tex[i] === '}') { depth -= 1; if (depth < 0) break; }
    }
    if (depth !== 0) errors.push([where, 'unbalanced braces in a maths span (' + depth + ')', tex]);

    const L = (tex.match(/\\left\b/g) || []).length;
    const R = (tex.match(/\\right\b/g) || []).length;
    if (L !== R) errors.push([where, '\\left ' + L + ' vs \\right ' + R, tex]);

    const bs = (tex.match(/\\begin\{([a-zA-Z*]+)\}/g) || []).map(x => x.slice(7, -1));
    const es = (tex.match(/\\end\{([a-zA-Z*]+)\}/g) || []).map(x => x.slice(5, -1));
    if (bs.join(',') !== es.join(',')) {
      errors.push([where, '\\begin[' + bs + '] does not match \\end[' + es + ']', tex]);
    }

    if (/\\\\\s*$/.test(tex)) errors.push([where, 'trailing \\\\ row break with nothing after it', tex]);

    (tex.match(/\\([a-zA-Z]+)/g) || []).forEach(function (cmd) {
      const name = cmd.slice(1);
      if (KNOWN.has(name)) return;
      unknown.set(name, (unknown.get(name) || 0) + 1);
      warns.push([where, 'unknown command \\' + name, tex]);
    });
  });
}

function walk(node, where) {
  if (node == null) return;
  if (typeof node === 'string') { check(where, node); return; }
  if (Array.isArray(node)) { node.forEach((x, i) => walk(x, where + '[' + i + ']')); return; }
  if (typeof node === 'object') {
    Object.keys(node).forEach(k => walk(node[k], where + '.' + k));
  }
}

pool.C.forEach(c => walk(c, 'concept ' + c.id));
pool.O.forEach(q => walk(q, 'objective ' + q.id));
pool.Q.forEach(q => walk(q, 'written ' + q.id));

const clip = s => (s.length > 120 ? s.slice(0, 120) + '…' : s).replace(/\s+/g, ' ');

console.log('Checked %d concepts, %d objective, %d written  (%s pool)',
  pool.C.length, pool.O.length, pool.Q.length, which);

if (errors.length) {
  console.log('\n%d ERROR%s', errors.length, errors.length === 1 ? '' : 'S');
  errors.forEach(e => console.log('  %s\n    %s\n    %s', e[0], e[1], clip(e[2])));
}
if (unknown.size) {
  console.log('\n%d command%s not in the known list (check, then extend KNOWN if genuine):',
    unknown.size, unknown.size === 1 ? '' : 's');
  [...unknown.entries()].sort((a, b) => b[1] - a[1])
    .forEach(([k, n]) => console.log('  \\%s  ×%d', k, n));
  console.log('  first use of each:');
  const seen = new Set();
  warns.forEach(function (w) {
    const name = w[1].replace('unknown command \\', '');
    if (seen.has(name)) return;
    seen.add(name);
    console.log('    \\%s  %s', name, w[0]);
  });
}
if (!errors.length && !unknown.size) console.log('\nNo problems found.');
process.exit(errors.length ? 1 : 0);

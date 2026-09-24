#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   What the real-line widget will draw, for every statement and proof step —
   without a browser. The audit tool for authoring `line` fields.

       node flow-library/tools/realline_report.js <project> [options]
       node tools/realline_report.js [options]            (from a project)

   options
     --mock          the mock pool instead of the live one
     --id <cid>      one concept only (repeatable)
     --missing       only places with an inequality in their TeX that draw
                     NOTHING — the candidates for a hand-written `line`
     --drawn         only places that draw something
     --json          machine-readable, one object per place

   Each place prints as
     c.4.1.4  statement      Type 3 (c-\delta, c+\delta) · x, c (hole)
     c.4.2.4  rung 2         —            $$ … the rung's maths … $$
   and a summary line. Exit code 0 always: this reports, it does not gate.
   ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const argv = process.argv.slice(2);
const flag = f => argv.includes(f);
const ids = argv.flatMap((a, i) => a === '--id' ? [argv[i + 1]] : []);
const projectArg = argv.find((a, i) => !a.startsWith('--') && argv[i - 1] !== '--id');
if (!projectArg) { console.error('usage: realline_report.js <project-dir> [--mock] [--id c.x.y] [--missing|--drawn] [--json]'); process.exit(2); }

const ROOT = path.resolve(projectArg);
const APP = path.join(ROOT, 'app');
const which = flag('--mock') ? 'mock' : 'live';

const src = fs.readFileSync(path.join(APP, 'sources.js'), 'utf8');
const m = new RegExp(which + ':\\s*\\[([\\s\\S]*?)\\]').exec(src);
if (!m) { console.error('no "' + which + '" list in app/sources.js'); process.exit(2); }
const files = (m[1].match(/['"]([^'"]+)['"]/g) || []).map(s => s.slice(1, -1));

const ctx = { console, DOM: { el: () => ({}) }, Store: { pref: () => true }, PROJECT: { realLine: true } };
vm.createContext(ctx);
files.forEach(rel => vm.runInContext(fs.readFileSync(path.normalize(path.join(APP, rel)), 'utf8'), ctx, { filename: rel }));
vm.runInContext(fs.readFileSync(path.join(__dirname, '..', 'app', 'src', 'comp.realline.js'), 'utf8')
  + ';globalThis.__RL = RealLine; globalThis.__C = typeof CONCEPTS !== "undefined" ? CONCEPTS : [];', ctx);
const RL = ctx.__RL;

const INEQ = /<|>|\\(le|leq|ge|geq|lt|gt|leqslant|geqslant)(?![a-zA-Z])|\\in\s*[([]/;
const maths = t => (String(t || '').match(/\$\$[\s\S]+?\$\$|\$[^$]+?\$/g) || []).join(' ');
const rungMath = r => [r.m, r.math].filter(Boolean).join(' ');

const rows = [];
ctx.__C.filter(c => !ids.length || ids.includes(c.id)).forEach(function (c) {
  if (c.statement) {
    const tracks = RL.tracksOf(RL.planStatement(c));
    rows.push({ id: c.id, where: 'statement', override: c.line !== undefined ? c.line : undefined,
      tracks: tracks.map(RL.describe), ineq: INEQ.test(maths(c.line || c.statement)), tex: maths(c.statement) });
  }
  const rungs = (c.proof && c.proof.rungs) || [];
  const plan = RL.planProof(c);
  rungs.forEach(function (r, i) {
    const p = plan[i];
    const t = rungMath(r);
    rows.push({ id: c.id, where: 'rung ' + (i + 1), override: r.line !== undefined ? r.line : undefined,
      tracks: p ? RL.tracksOf(p.lines).map(RL.describe) : [],
      ineq: INEQ.test(/\$/.test(t) ? maths(t) : t), tex: t });
  });
});

const shown = rows.filter(r => flag('--missing') ? (!r.tracks.length && r.ineq && r.override !== false)
  : flag('--drawn') ? r.tracks.length : true);

if (flag('--json')) {
  shown.forEach(r => console.log(JSON.stringify(r)));
} else {
  const cut = (s, n) => (s = String(s).replace(/\s+/g, ' ').trim()).length > n ? s.slice(0, n - 1) + '…' : s;
  shown.forEach(function (r) {
    const head = r.id.padEnd(10) + ' ' + r.where.padEnd(10) + ' ';
    const ov = r.override === false ? ' [line: false]' : r.override !== undefined ? ' [line override]' : '';
    if (r.tracks.length) r.tracks.forEach((t, i) => console.log((i ? ' '.repeat(head.length) : head) + t + (i ? '' : ov)));
    else console.log(head + '—' + ov + (r.ineq ? '   ' + cut(r.tex, 110) : ''));
  });
}

const st = rows.filter(r => r.where === 'statement'), ru = rows.filter(r => r.where !== 'statement');
const pct = (a, b) => b ? Math.round(100 * a / b) + '%' : '—';
console.error('\n' + which + ' pool · statements drawn ' + st.filter(r => r.tracks.length).length + '/' + st.length
  + ' · proof steps drawn ' + ru.filter(r => r.tracks.length).length + '/' + ru.length
  + ' · steps with an inequality but nothing drawn ' + ru.filter(r => !r.tracks.length && r.ineq && r.override !== false).length
  + ' (' + pct(ru.filter(r => r.tracks.length).length, ru.filter(r => r.ineq).length) + ' of inequality steps covered)');

#!/usr/bin/env node
/* ══════════════════════════════════════════════════════════════════════════
   The Optics understanding audit — everything a student meets while working a derivation.

       node tools/audit_optics.js

   1. tools/audit_steps.py   every proof step has a diagram (or a stated reason it needs none),
                             the diagram builds up, the "What this really means" is plain language,
                             every proof hosts a simulation (or says why not).
   2. a headless browser     draws every diagram at every stage and every simulation at its extremes
                             and at random settings; checks each simulation's LAW against an
                             independent calculation (ray tracing, numerical integration or
                             differentiation); evaluates every Predict task's answer and goal.
   3. data against registry  every step's diagram exists and its stage is in range; every concept's
                             simulation exists; every simulation is hosted somewhere; every diagram
                             kind is used; each simulation has Predict tasks at levels 1, 2 and 3.

   Exit code 1 if anything fails.
   ══════════════════════════════════════════════════════════════════════════ */
'use strict';
const { spawn, spawnSync } = require('child_process');
const fs = require('fs'), path = require('path'), vm = require('vm');
const ROOT = path.resolve(__dirname, '..');
let failed = 0;
const say = (ok, msg) => { if (!ok) failed += 1; console.log((ok ? '  ok    ' : '  FAIL  ') + msg); };

console.log('1. coverage of the teaching layer');
const py = spawnSync('python3', [path.join(ROOT, 'tools', 'audit_steps.py')], { encoding: 'utf8' });
const tail = py.stdout.trim().split('\n');
console.log(tail.slice(tail.findIndex(l => /proof steps:/.test(l))).map(l => '  ' + l).join('\n'));
say(py.status === 0, 'audit_steps.py');

/* the data, read the way the checker reads it */
const src = fs.readFileSync(path.join(ROOT, 'app', 'sources.js'), 'utf8');
const files = (/live:\s*\[([\s\S]*?)\]/.exec(src)[1].match(/['"]([^'"]+)['"]/g) || []).map(s => s.slice(1, -1));
const ctx = { console }; vm.createContext(ctx);
files.forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, 'app', f), 'utf8'), ctx));
const concepts = vm.runInContext('CONCEPTS', ctx);

const port = 9700 + Math.floor(Math.random() * 200), sleep = ms => new Promise(r => setTimeout(r, ms));
const chrome = spawn('google-chrome', ['--headless=new', '--no-sandbox', '--disable-gpu', '--remote-debugging-port=' + port,
  '--user-data-dir=/tmp/opt-audit-' + port, '--allow-file-access-from-files', 'about:blank'], { stdio: 'ignore' });
(async () => {
  let list;
  for (let i = 0; i < 60; i += 1) { try { list = await (await fetch('http://127.0.0.1:' + port + '/json')).json(); if (list.length) break; } catch (e) { /* not up yet */ } await sleep(200); }
  const ws = new WebSocket(list.find(t => t.type === 'page').webSocketDebuggerUrl); await new Promise(r => { ws.onopen = r; });
  let id = 0; const pend = {}; ws.onmessage = m => { const d = JSON.parse(m.data); if (d.id && pend[d.id]) pend[d.id](d); };
  const send = (method, params = {}) => new Promise(r => { const i = ++id; pend[i] = r; ws.send(JSON.stringify({ id: i, method, params })); });
  await send('Page.enable'); await send('Page.navigate', { url: 'file://' + path.join(ROOT, 'tools', 'sims_audit.html') }); await sleep(3000);
  const r = await send('Runtime.evaluate', { expression: 'document.body.dataset.audit || ""', returnByValue: true });
  ws.close(); chrome.kill();
  const rep = JSON.parse(r.result.result.value || 'null');

  console.log('\n2. diagrams and simulations, run in a browser');
  if (!rep) { say(false, 'the audit page produced no report'); return finish(); }
  say(rep.figs.problems.length === 0, rep.figs.kinds + ' diagram kinds, ' + rep.figs.renders + ' stage renders inside their frames, no NaN' + (rep.figs.problems.length ? '\n        ' + rep.figs.problems.join('\n        ') : ''));
  say(rep.sims.problems.length === 0, rep.sims.sims + ' simulations: ' + rep.sims.draws + ' scenes drawn, ' + rep.sims.laws + ' law checks, ' + rep.sims.tasks + ' Predict tasks evaluated' + (rep.sims.problems.length ? '\n        ' + rep.sims.problems.join('\n        ') : ''));

  console.log('\n3. the data against the registries');
  const kinds = rep.reg.figs, sims = rep.reg.sims, usedK = {}, hosted = {}; const bad = [];
  concepts.forEach(c => {
    if (c.sim) { hosted[c.sim] = (hosted[c.sim] || 0) + 1; if (sims.indexOf(c.sim) < 0) bad.push(c.id + ': simulation "' + c.sim + '" is not registered'); }
    ((c.proof || {}).rungs || []).forEach((rg, i) => { if (!rg.fig) return; usedK[rg.fig.k] = 1;
      if (!(rg.fig.k in kinds)) bad.push(c.id + ' step ' + (i + 1) + ': diagram "' + rg.fig.k + '" is not registered');
      else if (rg.fig.s < 1 || rg.fig.s > kinds[rg.fig.k]) bad.push(c.id + ' step ' + (i + 1) + ': stage ' + rg.fig.s + ' of ' + kinds[rg.fig.k]); });
  });
  Object.keys(kinds).forEach(k => { if (!usedK[k]) bad.push('diagram kind "' + k + '" is never used'); });
  sims.forEach(s => { if (!hosted[s]) bad.push('simulation "' + s + '" is not hosted by any concept'); });
  say(bad.length === 0, Object.keys(usedK).length + ' diagram kinds used, ' + Object.keys(hosted).length + ' simulations hosted by ' + concepts.filter(c => c.sim).length + ' concepts' + (bad.length ? '\n        ' + bad.join('\n        ') : ''));
  finish();
})();

function finish() { console.log('\n' + (failed ? failed + ' check(s) FAILED' : 'Every check passed.')); process.exit(failed ? 1 : 0); }

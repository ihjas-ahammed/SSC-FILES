#!/usr/bin/env node
/* Regression checks for response drafts and live/mock storage isolation. */
'use strict';
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const source = fs.readFileSync(path.join(__dirname, '../app/src/core.store.js'), 'utf8');

function store(kind = 'live', values = {}) {
  let time = 100;
  const ctx = vm.createContext({
    DATA_SOURCES: { use: kind },
    Date: { now: () => time },
    DOM: { debounce: () => () => {}, announce: () => {}, plural: (n, s) => s },
    navigator: { platform: 'test' },
    window: { clearTimeout: () => {}, location: { pathname: '/' }, localStorage: {
      getItem: k => values[k] || null,
      setItem: (k, v) => { values[k] = v; }
    } }
  });
  const api = vm.runInContext(source + '\nStore', ctx);
  return { api, ctx, tick: () => { time += 1; } };
}
const plain = x => JSON.parse(JSON.stringify(x));
const {api: s, tick} = store();
s.saveResponseDraft('question', 'A');
s.saveResponseDraft('slice:lesson', { s4_ans: -44, s5_ans: 34 });
const first = s.snapshot();
assert.deepEqual(plain(s.mergeStates(first, null).drafts), plain(first.drafts), 'sync preserves answer and lesson drafts');

tick();
s.saveResponseDraft('question', 'B');
const second = s.snapshot();
for (const [a, b] of [[first, second], [second, first]]) {
  assert.equal(s.mergeStates(a, b).drafts.question, 'B', 'newer answer wins in either merge order');
}
tick();
s.clearResponseDraft('question');
const cleared = s.snapshot();
for (const [a, b] of [[second, cleared], [cleared, second]]) {
  assert.equal(s.mergeStates(a, b).drafts.question, undefined, 'cleared answers do not reappear');
}
const tie = plain(second);
tie.draftsAt.question = cleared.draftsAt.question;
assert.equal(s.mergeStates(tie, cleared).drafts.question, undefined, 'deletion wins timestamp ties');
assert.equal(s.mergeStates(cleared, tie).drafts.question, undefined, 'tie resolution is order independent');

const legacy = { updated: 50, drafts: { question: 'C', legacy: [1, 2] } };
assert.equal(s.mergeStates(legacy, first).drafts.question, 'A', 'new answer supersedes an old unstamped draft');
assert.deepEqual(plain(s.mergeStates(first, legacy).drafts.legacy), [1, 2], 'unstamped drafts survive migration');
s.adopt(s.mergeStates(cleared, legacy), true);
assert.deepEqual(plain(s.responseDraft('slice:lesson')), { s4_ans: -44, s5_ans: 34 }, 'adoption retains lesson answers');
assert.deepEqual(plain(s.mergeStates(s.snapshot(), s.snapshot()).drafts), plain(s.snapshot().drafts), 'draft merging is idempotent');

const oldRecord = JSON.stringify({ prefs: { syncName: 'Existing Student', syncRoll: '12' }, done: { topic: 20 } });
const local = { 'ssc4.level1.v1': oldRecord, 'sslc.v1': oldRecord };
assert.equal(store('mock', local).api.signedIn(), false, 'mock does not import an unrelated live identity');
assert.equal(store('mock', local).api.isDone('topic'), false, 'mock does not import live progress');
assert.equal(store('live', { 'ssc4.level1.v1': oldRecord }).api.isDone('topic'), true, 'legacy live progress still migrates');
console.log('State regressions passed: draft preservation, deletion, migration, merge order, and mock isolation.');

(async function syncRegressions() {
  const {api, ctx} = store();
  const syncSource = fs.readFileSync(path.join(__dirname, '../app/src/core.sync.js'), 'utf8');
  const sync = vm.runInContext(syncSource + '\nSync', ctx);
  assert.equal(sync.keyFor('José', '12'), sync.keyFor('Jose\u0301', '12'), 'equivalent Unicode names use one key');
  assert.ok(sync.keyFor('അനു', '12'), 'Malayalam identities can sync');
  api.signIn('Test Learner', '12');
  let resolveFetch;
  const requests = [];
  ctx.window.fetch = (url, opts) => {
    requests.push({url, method: opts.method || 'GET'});
    return new Promise(resolve => { resolveFetch = resolve; });
  };
  const pending = sync.now();
  sync.disconnect();
  resolveFetch({ok: true, json: async () => ({payload: JSON.stringify({done: {unexpected: 100}})})});
  const result = await pending;
  assert.equal(result.ok, false);
  assert.equal(api.syncEnabled(), false, 'disconnect stays disabled');
  assert.equal(api.isDone('unexpected'), false, 'an obsolete fetch cannot adopt remote progress');
  assert.equal(requests.length, 1, 'no PUT after disconnect during a fetch');
  console.log('Sync regressions passed: Unicode keys and disconnect during an in-flight request.');
})().catch(err => { console.error(err); process.exitCode = 1; });

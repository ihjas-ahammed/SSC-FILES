/* Preserve the live progression cycle while publishing the shared map module. */
const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const concepts = [{ id: 'a', sec: '1', proof: {} }, { id: 'b', sec: '2', proof: {} }];
const tasks = [{ id: 'w1', sec: '1', course: 'c', tests: ['a'] }, { id: 'w2', sec: '2', course: 'c', tests: ['b'] }];
const done = {}, proofs = {};
const ctx = vm.createContext({ Date, Set, Map, Math, console,
  Store: {
    isDone: id => !!done[id], doneAt: id => done[id] || 0,
    isProofDone: id => !!proofs[id], proofAt: id => proofs[id] || 0,
    setDone: (id, on) => { done[id] = on ? 100 : 0; },
    setDoneMany: (ids, on) => ids.forEach(id => { done[id] = on ? 100 : 0; }),
    setProofDone: (id, on) => { proofs[id] = on ? 200 : 0; },
    card: () => null, onChange: () => {}
  },
  Pool: {
    concept: id => concepts.find(c => c.id === id), concepts: () => concepts,
    courseOfSec: () => ({ id: 'c' }), isExt: () => false,
    sections: () => concepts.map(c => ({ sec: c.sec, concepts: [c] })),
    writtenForSec: sec => tasks.filter(q => q.sec === sec), written: () => tasks,
    objective: () => [], pyq: () => [], courses: () => [{ id: 'c' }],
    deck: () => [], ids: { concepts: () => concepts.map(c => c.id) }
  }
});
vm.runInContext(fs.readFileSync(__dirname + '/../app/src/core.progress.js', 'utf8') + '\nglobalThis.P = Progress;', ctx);
const p = ctx.P;
for (const expected of [1, 2, 3]) { p.advance('a'); assert.equal(p.level('a'), expected); }
assert.equal(proofs['w:w1'], 200, 'third press records exercises for this section');
assert.equal(proofs['w:w2'], undefined, 'other sections remain untouched');
p.advance('a'); assert.equal(p.level('a'), 0);
p.setTo(['a', 'b'], 3);
assert.equal(p.level('a'), 3); assert.equal(p.level('b'), 3);
assert.equal(p.advanceMany(['a', 'b']), 0);
assert.equal(p.advanceMany(['a', 'b']), 1);
assert.equal(p.advanceMany(['a', 'b']), 3, 'completed exercises survive clearing the note');
assert.equal(p.advanceMany(['a', 'b']), 0);
console.log('Live read / proof / exercises / reset progression preserved.');

/* Regression: a legacy single warning must not crash opening a note. */
const fs = require('fs'), vm = require('vm'), assert = require('assert');
const source = fs.readFileSync(__dirname + '/../app/src/comp.note.js', 'utf8')
  .replace('return { build, expander, taskRow };', 'return { build, expander, taskRow, traps };');
const ctx = vm.createContext({DOM: {el: (tag, attrs, children) => ({tag, attrs, children})}});
vm.runInContext(source + ';this.renderTraps = NoteBody.traps;', ctx);
function warnings(value) {
  const card = ctx.renderTraps({traps: value});
  return card ? Array.from(card.children[1].children, node => node.attrs.html) : [];
}
assert.deepEqual(warnings('Do not reverse the conditional probability.'),
  ['Do not reverse the conditional probability.']);
assert.deepEqual(warnings(['First warning', '$P(A|B)$ is not $P(B|A)$']),
  ['First warning', '$P(A|B)$ is not $P(B|A)$']);
for (const empty of [undefined, null, '', [], {}, 3]) assert.deepEqual(warnings(empty), []);
assert.deepEqual(warnings(['Keep this', null, '  ']), ['Keep this']);
console.log('Note warning rendering: strings, arrays, empty and malformed legacy values passed.');

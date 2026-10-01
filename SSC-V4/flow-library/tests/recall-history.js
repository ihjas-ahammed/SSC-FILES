const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
let now=1000;class Clock extends Date{static now(){return now;}}
const ctx=vm.createContext({Date:Clock,JSON,Math,console,PROJECT:{storageKey:'test'},Pool:{isMock:()=>false},
 DOM:{debounce:f=>f},window:{localStorage:{getItem:()=>null,setItem:()=>{}}},Progress:{nextBox:()=>1}});
vm.runInContext(fs.readFileSync(__dirname+'/../app/src/core.store.js','utf8')+'\nthis.s=Store;',ctx);
const s=ctx.s;s.gradeCard('a','missed');now=2000;s.gradeCard('a','got');
assert.equal(s.card('a').gotAt,2000);assert.equal(s.card('a').first,'missed');
now=3000;s.gradeCard('a','got');assert.equal(s.card('a').gotAt,2000,'repeated success must not move completion into today');
const before=s.snapshot();now=4000;s.gradeCard('a','missed');assert.equal(s.card('a').gotAt,undefined);
const merged=s.mergeStates(before,s.snapshot());assert.equal(merged.cards.a.last,'missed');assert.equal(merged.cards.a.gotAt,undefined);
now=5000;s.gradeCard('a','got');const after=s.snapshot();
const corrected=s.mergeStates(before,after);assert.equal(corrected.cards.a.gotAt,5000);assert.equal(corrected.cards.a.first,'missed');
assert.equal(s.mergeStates(after,before).cards.a.gotAt,5000,'latest correction survives both merge orders');
console.log('Recall correction dates, repeat success and cross-device merge passed.');

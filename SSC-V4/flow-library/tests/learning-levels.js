const vm = require('node:vm');
const fs = require('node:fs');
const assert = require('node:assert/strict');
const concepts = [{id:'a',sec:'1',proof:{}},{id:'b',sec:'2'}];
const tasks = [{id:'ex',sec:'1',course:'c',tests:['a']}];
const papers = [{id:'py',sec:'1',course:'c',tests:['a']}];
const done = {}, proofs = {}, cards = {};
const ctx = vm.createContext({Date,Set,Math,console,
 Store:{isDone:id=>!!done[id],doneAt:id=>done[id]||0,isProofDone:id=>!!proofs[id],proofAt:id=>proofs[id]||0,
 card:id=>cards[id],onChange:()=>{}},
 Pool:{concept:id=>concepts.find(c=>c.id===id),concepts:()=>concepts,courseOfSec:()=>({id:'c'}),
 sections:()=>concepts.map(c=>({sec:c.sec,concepts:[c]})),isExt:()=>false,
 writtenForSec:sec=>tasks.filter(q=>q.sec===sec),written:()=>tasks,objective:()=>[],
 pyq:()=>papers,courses:()=>[{id:'c'}],
 deck:()=>concepts.map(c=>({cid:c.id,id:c.id+'#0'})),ids:{concepts:()=>['a','b']}}});
vm.runInContext(fs.readFileSync(__dirname+'/../app/src/core.progress.js','utf8')+'\nglobalThis.P = Progress;',ctx);
const p=ctx.P;
assert.equal(p.stageAt('1',1),0);
done.a=100;done.b=110;
assert.equal(p.stageAt('1',1),100);
assert.equal(p.stageAt('1',2),0);
proofs.a=200;
assert.equal(p.stageAt('1',2),200);
assert.equal(p.stageAt('1',3),0);
proofs['w:ex']=300;p.dropCache();
assert.equal(p.stageAt('1',3),300);
assert.equal(p.stageAt('1',4),0);
proofs['p:py']=400;
assert.equal(p.stageAt('1',4),400);
assert.equal(p.stageAt('2',4),0,'missing mapped PYQ never earns level 4');
assert.equal(p.courseLevel('c'),4);
for(const id of ['a#0','b#0','a#proof','x:ex','p:py#recall']) cards[id]={last:'got',lastAt:500,first:'missed'};
assert.equal(p.courseLevel('c'),5,'correction earns recall while preserving first grade');
assert.equal(p.stageAt('1',5),500);
cards['a#0'].last='missed';
assert.equal(p.courseLevel('c'),4,'a new miss removes recall completion');
assert.equal(p.stageAt('1',5),0);
cards['a#0'].last='got';
assert.equal(cards['a#0'].first,'missed');
assert(p.reel().some(x=>x.id==='p:py#recall'),'completed PYQ appears in actual recall');
papers[0].sec=undefined;papers[0].tests=[];
assert.equal(p.stageAt('2',4),400,'legacy course-only papers gate all course sections');
delete done.a;
assert.equal(p.stageAt('1',4),0,'unreading a prerequisite revokes derived completion');
console.log('Learning levels: evidence, timestamps, correction, missing PYQ and legacy mapping passed.');

const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const today=new Date(2026,8,30,12).getTime(),day=86400e3;
class Clock extends Date{static now(){return today;}}
const sections=['a','b','c','pending'].map(sec=>({sec,concepts:sec==='pending'?[]:[{id:sec}],module:sec==='pending'?{pending:true}:{}}));
const ctx=vm.createContext({Date:Clock,Math,console,DOM:{el:()=>{},svg:()=>{}},Store:{},
 Pool:{sections:()=>sections,isExt:()=>false,isExtSec:()=>false},
 Progress:{stageAt:(sec,level)=>sec==='pending'?0:today-(['a','b','c'].indexOf(sec)?1:2)*day+(level===2?day:0),
 pyqForSec:sec=>sec==='a'?[{id:'q'}]:[]}});
vm.runInContext(fs.readFileSync(__dirname+'/../app/src/comp.pace.js','utf8')+'\nthis.p=Pace;',ctx);
const p=ctx.p,fit=p.fitLine([0,1,2,3],[2,5,8,11]);
assert.equal(fit.a,2);assert.equal(fit.b,3);assert.equal(fit.r2,1);
assert.equal(p.solve([[1,2],[2,4]],[1,2]),null);
assert.equal(p.model(14,1).total,4,'pending sections stay in the reading denominator');
assert.equal(p.model(14,4).total,1,'only mapped sections belong to the PYQ forecast');
assert.notDeepEqual(p.model(14,1).days,p.model(14,2).days,'switch plots the chosen level dates');
assert.equal(p.model(14,1).stage,1);assert.equal(p.model(14,2).stage,2);
console.log('LR regression, singular systems, pending chapters and level-specific dates passed.');

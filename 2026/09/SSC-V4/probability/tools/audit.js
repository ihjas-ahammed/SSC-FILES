#!/usr/bin/env node
/* Validate the loaded pool, including fields the shared TeX gate doesn't inspect. */
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'app/sources.js'),'utf8')+';this.files=DATA_SOURCES.live;',ctx);
for(const f of ctx.files)vm.runInContext(fs.readFileSync(path.resolve(root,'app',f),'utf8'),ctx,{filename:f});
vm.runInContext('this.data={SYLLABI,SECTITLE,CONCEPTS,QUESTIONS,OBJECTIVE,PYQ};',ctx);
const d=ctx.data,errors=[],warnings=[],ids=new Set(),cids=new Set(d.CONCEPTS.map(c=>c.id)),sections=new Set(Object.keys(d.SECTITLE));
function walk(v,loc){
 if(typeof v==='string'){
  if(/\\\\(?:frac|int|sum|sim|sqrt|operatorname|lambda|mu|sigma|Phi|mathbb|alpha|beta|Gamma|binom|le|ge|mid|cap|cup|quad|left|right|text|prod)\b/.test(v))errors.push(loc+': doubled runtime TeX command');
  if(/(?<!\\)\b(?:operatorname|mathbb|mathrm|mathbf|frac|binom)\{/.test(v))errors.push(loc+': TeX command missing its backslash');
  if(/[\x08\x0b\x0c]/.test(v))errors.push(loc+': escaped control character');
 }else if(Array.isArray(v))v.forEach((x,i)=>walk(x,loc+'['+i+']'));
 else if(v&&typeof v==='object')Object.entries(v).forEach(([k,x])=>walk(x,loc+'.'+k));
}
for(const [name,items] of Object.entries(d).filter(([,v])=>Array.isArray(v)&&v!==d.SYLLABI))for(const x of items){
 if(!x.id||ids.has(x.id))errors.push(name+': missing or reused id '+x.id);ids.add(x.id);
 if(!sections.has(x.sec))errors.push(x.id+': missing section title '+x.sec);
 for(const id of [...(x.needs||[]),...(x.tests||[])])if(!cids.has(id))errors.push(x.id+': unresolved reference '+id);
 walk(x,x.id);
 if(name==='CONCEPTS'){
  for(const key of ['title','statement','intuition','provenance'])if(!x[key])errors.push(x.id+': missing '+key);
  if(x.traps!=null&&(!Array.isArray(x.traps)||x.traps.some(t=>typeof t!=='string')))errors.push(x.id+': traps must be a list of strings');
  if(!x.cards?.some(c=>c.kind==='state'))errors.push(x.id+': absent from statement Recall');
  if(x.proof&&(!x.proof.idea||!x.proof.rungs?.length))errors.push(x.id+': incomplete proof');
 }else{
  if(!x.prompt||!x.solution)errors.push(x.id+': no prompt/full solution');
  if(x.type==='NAT'&&(!Number.isFinite(x.answer?.value)||!(x.answer.tol>=0)))errors.push(x.id+': invalid NAT answer');
  if(x.type==='MCQ'&&!x.options?.some(o=>o.k===x.answer))errors.push(x.id+': MCQ answer not an option');
  if(x.type==='MSQ'&&(!Array.isArray(x.answer)||x.answer.some(k=>!x.options?.some(o=>o.k===k))))errors.push(x.id+': invalid MSQ answer');
  if(x.type==='MSQ'&&x.neg!==0)errors.push(x.id+': MSQ must have zero negative marking');
  if(x.type==='MCQ'&&Math.abs(x.neg+x.marks/3)>1e-3)errors.push(x.id+': MCQ negative marking must be -marks/3');
  if(name==='PYQ'&&(!x.exam||!x.year||!x.qno||!x.provenance))errors.push(x.id+': incomplete PYQ provenance');
 }
}
for(const m of d.SYLLABI[0].modules){
 if(m.pending)continue;
 for(const sec of m.secs)if(!d.CONCEPTS.some(c=>c.sec===sec))errors.push('Ready chapter missing lesson '+sec);
}
const summary=Object.fromEntries(['CONCEPTS','QUESTIONS','OBJECTIVE','PYQ'].map(k=>[k,d[k].length]));
console.log(JSON.stringify(summary));for(const e of errors)console.error(e);for(const w of warnings)console.warn(w);
if(errors.length)process.exitCode=1;else console.log('Content structure, stable IDs, references, TeX escaping and answer shapes passed.');

#!/usr/bin/env node
/* Compare explicit Ross item IDs with the locally extracted source inventory.
   This checks mapping, not correctness or coverage of every subpart. */
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..');
const inventory=JSON.parse(fs.readFileSync(path.join(root,'sources/ross-item-inventory.json'),'utf8'));
const ctx=vm.createContext({});
vm.runInContext(fs.readFileSync(path.join(root,'app/sources.js'),'utf8')+';this.files=DATA_SOURCES.live;',ctx);
for(const f of ctx.files)vm.runInContext(fs.readFileSync(path.resolve(root,'app',f),'utf8'),ctx);
vm.runInContext('this.questions=QUESTIONS;',ctx);
const aliases={example:'example',ex:'example',prob:'problem',problem:'problem',theor:'theoretical',theo:'theoretical',te:'theoretical',theoretical:'theoretical',theory:'theoretical',self:'selftest',st:'selftest',selftest:'selftest',combined:'combined'};
const mapped=new Map();
for(const q of ctx.questions){
  const m=q.id.match(/^w\.prob\.(\d+)\.ross\.([a-z]+)\.(\d+[a-z]*)(?:\.|$)/);
  if(!m || !aliases[m[2]])continue;
  let category=aliases[m[2]];
  if(Number(m[1])===9 && category==='problem')category='combined';
  const key=[Number(m[1]),category,m[3]].join(':');
  mapped.set(key,[...(mapped.get(key)||[]),q.id]);
}
const chapters=inventory.chapters.map(ch=>{
  const items=ch.items.map(item=>({...item,ids:mapped.get([ch.chapter,item.category,item.label].join(':'))||[]}));
  return {chapter:ch.chapter,expected:items.length,mapped:items.filter(i=>i.ids.length).length,missing:items.filter(i=>!i.ids.length),items};
});
const report={note:'Explicit source-item mapping only. A mapped item still requires review of its statement, every subpart, and worked solution. Older selected adaptations remain available and may cover part of an item.',chapters};
fs.writeFileSync(path.join(root,'sources/ross-item-coverage.json'),JSON.stringify(report,null,2)+'\n');
for(const ch of chapters)console.log('Chapter '+ch.chapter+': '+ch.mapped+'/'+ch.expected+' explicit item mappings; '+ch.missing.length+' unmapped.');
if(process.argv.includes('--strict') && chapters.some(ch=>ch.missing.length))process.exitCode=1;

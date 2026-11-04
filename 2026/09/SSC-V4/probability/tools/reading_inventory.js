#!/usr/bin/env node
/* Generate the reading index from real question IDs and titles, rather than
   maintaining a second hand-written list of textbook descriptions. */
const fs=require('fs'),path=require('path'),vm=require('vm');
const root=path.resolve(__dirname,'..'),ctx={};
const report=JSON.parse(fs.readFileSync(path.join(root,'sources/ross-item-coverage.json'),'utf8'));
for(let n=1;n<=10;n++)vm.runInNewContext(fs.readFileSync(path.join(root,`data/ch${String(n).padStart(2,'0')}.written.js`),'utf8'),ctx);
const bank=new Map(ctx.QUESTIONS.map(q=>[q.id,q]));
for(const ch of report.chapters){
 const lines=[`# Ross chapter ${ch.chapter}: source-item reading index`,'',
  `${ch.mapped} of ${ch.expected} inventoried source items have explicit exercise-bank mappings.`,
  'These are teaching adaptations with worked explanations. Existing selected exercises remain available under their stable IDs.',
  'The count checks item references; it is not an independent proof that every solution is correct. Source ambiguities and mathematical corrections are recorded in MATH_REVIEW.md.',
  '', '| Source item | Book PDF page | Exercise ID | Teaching title |','|---|---|---|---|'];
 for(const item of ch.items){
  const ids=item.ids||[],q=bank.get(ids[0]);
  lines.push(`| ${item.category} ${item.label} | ${item.pdfPage||'heading page requires review'} | ${ids.join(', ')||'unmapped'} | ${(q?.title||'pending').replace(/\|/g,'/').replace(/\n/g,' ')} |`);
 }
 fs.writeFileSync(path.join(root,`sources/coverage-ch${String(ch.chapter).padStart(2,'0')}.md`),lines.join('\n')+'\n');
}
console.log('Chapter reading indices generated from source mappings and actual bank titles.');

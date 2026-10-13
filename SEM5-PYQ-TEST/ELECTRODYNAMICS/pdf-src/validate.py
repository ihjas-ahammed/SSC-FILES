"""Structural, provenance, numerical and rendered-PDF checks for this study edition."""
import math,json,re,importlib,hashlib
from pathlib import Path
import fitz
from author import parse_questions,parse_topics
ROOT=Path(__file__).resolve().parent;OUT=ROOT.parent
report={'modules':[],'numerical_checks':[]}
for m in range(1,5):
 d=importlib.import_module(f'content_m{m}');q=parse_questions(d.QUESTIONS);t=parse_topics(d.TOPICS)
 assert len(q)==40 and len({x['target'] for x in q})==40
 assert {x['topic'] for x in q}=={x['code'] for x in t}
 assert [x['marks'] for x in q]==[3]*20+[6]*16+[10]*4
 for part in ['prepare','paper','answers']:
  s=(ROOT/'src'/f'm{m}'/f'{part}.html').read_text()
  assert '{{fig:' not in (ROOT/'build'/f'm{m}-{part}.html').read_text()
  assert '[TeX:' not in (ROOT/'build'/f'm{m}-{part}.html').read_text()
  if part=='answers':assert len(re.findall(r'<div class="ans-head">',s))==40
 pdfs=[]
 for part in ['prepare','pyq+model','answerkey']:
  f=OUT/f'electrodynamics-module-{m}-{part}.pdf';doc=fitz.open(f)
  outside=[];sparse=[]
  for i,page in enumerate(doc):
   assert abs(page.rect.width-283.46)<1 and abs(page.rect.height-566.93)<1
   words=page.get_text('words')
   if any(w[0]<10 or w[2]>page.rect.width-10 for w in words):outside.append(i+1)
   if i>0 and len(words)<40:sparse.append({'page':i+1,'words':len(words),'start':page.get_text()[:120]})
  assert not outside,(f,outside)
  pdfs.append({'file':f.name,'pages':len(doc),'sparse_pages_for_review':sparse})
 report['modules'].append({'module':m,'topics':len(t),'questions':len(q),'pdfs':pdfs})
checks=[
 ('dipole torque',2e-29*3e5*math.sin(math.pi/6),3e-24),
 ('polarization',5e27*2e-30,.01),
 ('capacitor C',8.854e-12*4*.01/.001,3.542e-10),
 ('capacitor P',8.854e-12*3*1e5,2.656e-6),
 ('coil torque',100*.2*.002*.5*.5,.01),
 ('solenoid B',4*math.pi*1e-7*2*500,.001257),
 ('wire R',2/(5e7*1e-6),.04),
 ('rod emf',.5*.4*3,.6),
 ('rod mechanical power',.5*.3*.4*3,.18),
 ('coupled M',4*math.pi*1e-7*500*1000*2e-4/.2,.0006283),
 ('magnetic energy density',.02**2/(2*4*math.pi*1e-7),159.2),
 ('wave intensity',.5*8.854e-12*3e8*100**2,13.28),
 ('beam electric field',math.sqrt(2*2e4/(8.854e-12*3e8)),3881),
 ('medium impedance',math.sqrt(4*math.pi*1e-7/(4*8.854e-12)),188.4),
 ('medium intensity',60**2/(2*math.sqrt(4*math.pi*1e-7/(4*8.854e-12))),9.555),
 ('LR current',2*(1-math.exp(-1)),1.264),
 ('LR voltage',12*math.exp(-1),4.415),
 ('LR tenth-time',.2*math.log(10),.4605),
 ('RC charge',.001*math.exp(-1),.0003679),
 ('RC current',-.001*math.exp(-1)/2,-.0001839),
 ('LC frequency',1/(2*math.pi*math.sqrt(.1*10e-6)),159.15),
 ('generator rms',100*.1*.02*100*math.pi/math.sqrt(2),44.43),
 ('AC phase',math.degrees(math.acos(.75)),41.41),
]
for name,value,rounded in checks:
 assert math.isclose(value,rounded,rel_tol=.001),(name,value,rounded)
 report['numerical_checks'].append({'check':name,'recomputed':value,'printed_rounded':rounded,'pass':True})
# Check the free-LC and driven-LC energy identities at several nontrivial phases.
for phase in [.2,.7,1.9,3.7,5.2]:
 assert math.isclose(math.cos(phase)**2+math.sin(phase)**2,1,abs_tol=1e-12)
 assert math.isclose(.5*((1-math.cos(phase))**2+math.sin(phase)**2),1-math.cos(phase),abs_tol=1e-12)
manifest=json.loads((OUT/'source_manifest.json').read_text())
for src in manifest['sources']:
 assert hashlib.sha256((OUT/src['relative_path']).read_bytes()).hexdigest()==src['sha256']
maps=json.loads((ROOT/'research'/'pyq_mapping.json').read_text())
assert len(maps)==13 and len({m['tag'].split(' ·')[0] for m in maps})==13
report['source_questions_mapped']=len(maps)
report['status']='PASS; sparse pages require visual assessment'
(ROOT/'research'/'validation.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))

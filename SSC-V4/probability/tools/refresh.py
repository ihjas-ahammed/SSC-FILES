#!/usr/bin/env python3
"""Integrate complete chapter files only; leave unavailable chapters visibly pending."""
import json,re,subprocess
from pathlib import Path
root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'sources/chapter-manifest.json').read_text())
# Ross sections beyond DA's probability core are available as extensions.
ext={'2.6','2.7','3.5','4.8','5.6','6.6','6.7','6.8','7.3','7.6','7.7','7.8','7.9','8.4','8.5','8.6','8.7'}
titles={};modules=[];files=[]
for ch in manifest:
 n=ch['chapter'];secs=[]
 for v in ch['sections']:
  sec=re.search(r'\d+\.\d+',v['title'])[0]
  if sec in secs:continue
  secs.append(sec);titles[sec]=re.sub(r'^\*?\s*\d+\.\d+\s*','',v['title'])
 names=[f'ch{n:02}.{kind}.js' for kind in ('concepts','written','objective')]
 ready=all((root/'data'/name).exists() and subprocess.run(['git','ls-files','--error-unmatch',str(root/'data'/name)],stdout=subprocess.DEVNULL,stderr=subprocess.DEVNULL).returncode==0 for name in names)
 if ready:files.extend('../data/'+name for name in names)
 mod=dict(id=f'prob.ch{n:02}',n=str(n),title=ch['title'].split(' ',2)[2],secs=secs,extSecs=[s for s in secs if s in ext])
 if n>=9:mod['ext']=True;ext.update(secs)
 if not ready:mod.update(pending=True)
 modules.append(mod)
if (root/'data/inference.concepts.js').exists():
 modules.append(dict(id='prob.inference',n='DA',title='DA inference bridge · beyond Ross',secs=['DA.1','DA.2','DA.3']))
 titles.update({'DA.1':'Descriptive summaries and sampling laws','DA.2':'Confidence intervals','DA.3':'Hypothesis tests'})
 files.extend('../data/inference.'+k+'.js' for k in ('concepts','written','objective'))
for name in ('pyq.js','pyq.similar.js'):
 if (root/'data'/name).exists():files.append('../data/'+name)
text='const DATA_KIND = "live";\nconst SYLLABI = '+json.dumps([dict(id='prob',title='Probability · GATE DA',code='GATE DA 2027',sem='Ross 10e',book='Sheldon Ross · A First Course in Probability, 10e',blurb='Model the experiment, derive the law, solve and recall. Selected textbook practice; coverage reports record omissions.',modules=modules)],indent=2)+';\nconst SECTITLE = '+json.dumps(titles,indent=2)+';\nconst EXT_SECS = '+json.dumps({sec:True for sec in sorted(ext)})+';\nvar CONCEPTS = [];\nvar QUESTIONS = [];\nvar OBJECTIVE = [];\nvar PYQ = [];\n'
(root/'data/syllabus.js').write_text(text)
mock=['../../flow-library/app/mock/mock.'+k+'.js' for k in ('courses','concepts','objective','written','pyq')]
(root/'app/sources.js').write_text("const DIAGRAM_BASE = '../diagrams/';\nconst DATA_SOURCES = {\n use: 'live',\n mock: "+json.dumps(mock,indent=2)+",\n live: "+json.dumps(['../data/syllabus.js']+files,indent=2)+"\n};\n")
print('Integrated chapters:',','.join(m['n'] for m in modules if not m.get('pending')))

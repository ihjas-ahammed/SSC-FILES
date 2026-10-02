#!/usr/bin/env python3
"""Inventory local Ross chapter headings; publish references, never source wording.

The numbered ranges include headings that PDF extraction splits. Those entries
are marked for page review. This inventory does not assess authored solutions.
"""
from pathlib import Path
import json,re
import fitz

root=Path(__file__).resolve().parents[1]
manifest=json.loads((root/'sources/chapter-manifest.json').read_text())
chapters=[]
heads={'problems':'problem','theoretical exercises':'theoretical',
       'problems and theoretical exercises':'combined',
       'self-test problems and exercises':'selftest'}
for ch in manifest:
 n=ch['chapter'];category=None;examples=[];groups={};pages={}
 for pi,page in enumerate(fitz.open(root/f'sources/chapters/ch{n:02}.pdf')):
  for line in page.get_text().splitlines():
   text=line.strip().lstrip('*').strip()
   if text.lower() in heads:category=heads[text.lower()]
   if category is None:
    match=re.fullmatch(r'Example\s+(\d+[a-z]+)(?:\s+(.*))?',text)
    if match and not (match[2] or '').startswith(('of Chapter','of Section','in Chapter')):
     if match[1] not in examples:
      examples.append(match[1]);pages['example:'+match[1]]=ch['pdfStart']+pi
   else:
    pattern=(str(n)+r'\.(\d+)(?:\.|\s)' if n>=3 else r'(\d+)\.(?:\s|$)')
    match=re.match(pattern,text)
    if match:
     k=int(match[1]);groups.setdefault(category,set()).add(k)
     pages.setdefault(category+':'+str(k),ch['pdfStart']+pi)
 items=[dict(category='example',label=x,pdfPage=pages['example:'+x]) for x in examples]
 for category,nums in groups.items():
  for k in range(1,max(nums)+1):
   item=dict(category=category,label=str(k));key=category+':'+str(k)
   if key in pages:item['pdfPage']=pages[key]
   else:item['pageNeedsReview']=True
   items.append(item)
 chapters.append(dict(chapter=n,items=items))
 print(f'Chapter {n}: {len(items)} source items')
report=dict(book='A First Course in Probability, 10th edition, Sheldon Ross',
            method='Local chapter PDF example headings (including titled examples) and numbered exercise ranges. References to examples in other chapters are excluded. Missing heading page references require visual review. Presence does not verify every subpart.',chapters=chapters)
(root/'sources/ross-item-inventory.json').write_text(json.dumps(report,indent=2)+'\n')

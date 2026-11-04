#!/usr/bin/env python3
"""Split the local Ross 10e source by its PDF bookmarks, preserving page references."""
import argparse,json,re
from pathlib import Path
import fitz
root=Path(__file__).resolve().parents[1]
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('pdf',type=Path)
args=parser.parse_args()
source=fitz.open(args.pdf)
toc=source.get_toc()
chapters=[x for x in toc if re.match(r'Chapter \d+ ',x[1])]
if len(chapters)!=10:raise SystemExit('Expected the ten chapter bookmarks of Ross 10e; refusing an uncertain split.')
out=root/'sources/chapters';out.mkdir(parents=True,exist_ok=True)
manifest=[]
for i,c in enumerate(chapters):
 start=c[2]-1
 end=chapters[i+1][2]-2 if i+1<len(chapters) else next(t[2]-2 for t in toc if t[1]=='Answers to Selected Problems')
 doc=fitz.open();doc.insert_pdf(source,from_page=start,to_page=end)
 name=f'ch{i+1:02}.pdf';doc.save(out/name)
 (out/f'ch{i+1:02}.txt').write_text('\n'.join(f'\n[PDF page {j+1}]\n'+source[j].get_text() for j in range(start,end+1)))
 sections=[dict(title=t[1],pdfPage=t[2],chapterPage=t[2]-start) for t in toc if start+1<=t[2]<=end+1 and re.match(r'\*?\s*\d+\.\d+',t[1])]
 manifest.append(dict(chapter=i+1,title=c[1],file=name,pdfStart=start+1,pdfEnd=end+1,sections=sections))
(root/'sources/chapter-manifest.json').write_text(json.dumps(manifest,indent=2))
print('Wrote ten local chapter PDFs and extraction files, plus their page manifest.')

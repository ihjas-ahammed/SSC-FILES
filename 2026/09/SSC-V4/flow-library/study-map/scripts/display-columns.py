"""Replace column-vector shorthand in authored notes without touching PDF quotations."""
import json, re
from pathlib import Path
pattern = re.compile(r'\(([^()\n]+,[^()\n]+)\)\^(?:T|\{T\})')
count = 0
def convert(text):
    global count
    def column(match):
        global count
        count += 1
        entries = [x.strip().replace(r'\ldots', r'\vdots') for x in match[1].split(',')]
        return r'\begin{pmatrix}' + r'\\'.join(entries) + r'\end{pmatrix}'
    return pattern.sub(column, text)
def walk(value):
    if isinstance(value,str): return convert(value)
    if isinstance(value,list): return [walk(x) for x in value]
    if isinstance(value,dict):
        return {k: v if k in {'sourcePageText','sourceText','text'} else walk(v) for k,v in value.items()}
    return value
# Concept/step/solution text is authored material; question text remains verbatim.
for p in [*Path('src/data/concepts').glob('*.json'),*Path('src/data/questions').glob('*.json'),Path('source/curriculum-reviewed.json')]:
    old=json.loads(p.read_text()); new=walk(old)
    # A solution fragment's "text" is authored; only question text/source stays untouched.
    questions = new.get('questions',[]) if isinstance(new,dict) else new if 'questions' in p.parts else []
    for q in questions:
        for block in q.get('solutionBlocks',[]): block['text']=convert(block['text'])
    p.write_text(json.dumps(new,ensure_ascii=False,indent=2)+'\n')
# Update the vault text in place, keeping YAML and personal progress untouched.
for p in Path('vault').rglob('*.md'):
    old=p.read_text(); parts=old.split('## Verbatim extracted source page',1)
    parts[0]=convert(parts[0]); p.write_text('## Verbatim extracted source page'.join(parts))
# Keep authoring scripts consistent, without re-running any vault seeding/reset.
for name in ['scripts/build_curriculum.py','scripts/solution-segments.mjs']:
    p=Path(name)
    if p.exists(): p.write_text(convert(p.read_text()))
print(f'Converted {count} authored column-vector occurrences; PDF question text and progress preserved.')

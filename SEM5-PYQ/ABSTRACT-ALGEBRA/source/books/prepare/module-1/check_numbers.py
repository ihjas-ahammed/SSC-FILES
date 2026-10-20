"""Coverage check: every numbered item in each book source must appear in its bodies.
Usage: python3 check_numbers.py            (checks section 1 and section 2)
"""
import re, sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
PAIRS = [
    ('book-sources/section1-binary-operations.html', ['binary-operations-study.body.html', 'binary-operations-structured.body.html']),
    ('book-sources/section2-groups.html', ['groups-study.body.html', 'groups-structured.body.html']),
]
bad = False
for src_name, bodies in PAIRS:
    src = open(os.path.join(HERE, src_name), encoding='utf-8').read()
    items = sorted(set(re.findall(r'class="num">(\d+\.\d+) ', src)) | set(re.findall(r'<caption><b>(\d+\.\d+) Table', src)),
                   key=lambda s: tuple(int(x) for x in s.split('.')))
    for f in bodies:
        body = open(os.path.join(HERE, f), encoding='utf-8').read()
        text = re.sub(r'<[^>]+>', ' ', body)
        missing = [i for i in items if not re.search(r'(?<![\d.])' + re.escape(i) + r'(?!\d)', text)]
        print(f'{f}: source {src_name.split("/")[-1]} items {len(items)} | MISSING {missing}')
        print('   dollar count even:', body.count('$') % 2 == 0, '| $$ count:', body.count('$$'))
        bad |= bool(missing) or body.count('$') % 2 != 0
sys.exit(1 if bad else 0)

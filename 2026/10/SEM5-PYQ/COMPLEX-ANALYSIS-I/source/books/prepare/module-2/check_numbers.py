"""Coverage check for Module 2: every numbered book item in each section source must appear in both bodies.
Usage: python3 check_numbers.py   (prints MISSING [] per body; exit 1 if anything is missing or a $ count is odd)
"""
import re, sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
PAIRS = [
    ('book-sources/section5-subgroups.html', ['section5-subgroups-study.body.html', 'section5-subgroups-structured.body.html']),
    ('book-sources/section6-cyclic-groups.html', ['section6-cyclic-groups-study.body.html', 'section6-cyclic-groups-structured.body.html']),
    ('book-sources/section8-permutations.html', ['section8-permutations-study.body.html', 'section8-permutations-structured.body.html']),
]
bad = False
for src_name, bodies in PAIRS:
    src = open(os.path.join(HERE, src_name), encoding='utf-8').read()
    items = sorted(set(re.findall(r'class="num">(\d+\.\d+) ', src)) | set(re.findall(r'<caption><b>(\d+\.\d+) Table', src)),
                   key=lambda s: tuple(int(x) for x in s.split('.')))
    print(f'{src_name}: {len(items)} numbered items in source')
    for f in bodies:
        body = open(os.path.join(HERE, f), encoding='utf-8').read()
        text = re.sub(r'<[^>]+>', ' ', body)
        missing = [i for i in items if not re.search(r'(?<![\d.])' + re.escape(i) + r'(?!\d)', text)]
        print(f'  {f}: MISSING {missing}')
        print('     dollar count even:', body.count('$') % 2 == 0, '| $$ count:', body.count('$$'))
        bad |= bool(missing) or body.count('$') % 2 != 0
sys.exit(1 if bad else 0)

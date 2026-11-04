"""Coverage check: every numbered item in the book source must appear in the notes body.
Items: Definitions and Examples (book numbers), displayed equations (book tags), Remarks (i), (ii),
and named exercises (Problem 55, named by Remark (i)).
Usage: python3 check_numbers.py   (prints MISSING [] for each body; exit 1 on any miss)
"""
import re, sys, os
HERE = os.path.dirname(os.path.abspath(__file__))
SRC = os.path.join(HERE, 'book-sources', 'section1-complex-numbers.html')
BODY = os.path.join(HERE, 'complex-numbers-study.body.html')

src = open(SRC, encoding='utf-8').read()
body = open(BODY, encoding='utf-8').read()
text = re.sub(r'<[^>]+>', ' ', body)

items = []
items += [f'Definition {m}' for m in re.findall(r'<b>DEFINITION (1\.1\.\d)', src)]
items += [f'Example {m}' for m in re.findall(r'<b>EXAMPLE (\d+)', src)]
items += [f'Problem {m}' for m in re.findall(r'<b>Problem (\d+)</b>', src)]
tags = sorted(set(re.findall(r'\\tag\{(\d+)\}', src)), key=int)
items += [f'eq{t}' for t in tags]
remarks = len(re.findall(r'<ol type="i">', src))
print('source items:', items, '| remark lists:', remarks)

missing = []
for it in items:
    if it.startswith('Definition '):
        ok = it in text
    elif it.startswith('Example '):
        ok = re.search(r'Example ' + it.split()[1] + r'(?!\d)', text) is not None
    elif it.startswith('Problem '):
        ok = re.search(r'Problem ' + it.split()[1] + r'(?!\d)', text) is not None
    else:
        ok = ('\\tag{' + it[2:] + '}') in body
    if not ok:
        missing.append(it)
# Remarks (i) and (ii): the body must carry both roman-numbered items (checked by their titles)
remark_ok = remarks >= 1 and 'type="i"' in body and 'No order' in body and 'Impossible in the reals' in body
if not remark_ok:
    missing.append('Remarks (i), (ii)')
print('MISSING', missing)
print('dollar count even:', body.count('$') % 2 == 0, '| $$ count:', body.count('$$'))
sys.exit(1 if missing or body.count('$') % 2 else 0)

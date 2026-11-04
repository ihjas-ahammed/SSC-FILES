"""Coverage check (process.md section 14) for Module I: every numbered equation in the book sources
(Puri and Babbar 1.1–1.10 and 2.1–2.34 as printed) must appear in the notes as a display equation
(\\tag{N}) or be cited as 'Eq. N' or 'Eqs. N' in the text. MISSING must be empty.
Usage: python3 check_equations.py
"""
import glob, re
SRC = 'book-sources/*.html'
book = ''.join(open(f, encoding='utf-8').read() for f in glob.glob(SRC))
key = lambda s: [int(x) for x in s.split('.')]
EXCLUDE = set()   # a value in Example 1.5, not an equation number
book_nums = sorted((set(re.findall(r'\(([56]\.\d{1,2})\)', book)) | set(re.findall(r'\\tag\{([56]\.\d{1,2})\}', book))) - EXCLUDE, key=key)
for kind in ('study', 'structured'):
    txt = ''.join(open(f, encoding='utf-8').read() for f in glob.glob(f'm2-sec*-{kind}.body.html'))
    blocks = re.findall(r'<div class="eq[^"]*">(.*?)</div>', txt, flags=re.S)
    display = set(n for b in blocks for n in re.findall(r'\\tag\{([56]\.\d{1,2})\}', b))
    cited = set(n for grp in re.findall(r'Eqs?\.[^<]{0,40}', txt) for n in re.findall(r'[56]\.\d{1,2}', grp))
    missing = [n for n in book_nums if n not in display and n not in cited]
    print(f'{kind}: book numbers {len(book_nums)}, display {len(display)}, cited {len(cited - display)}, MISSING {missing}')

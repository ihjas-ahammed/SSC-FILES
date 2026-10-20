"""Coverage check for Module III (process.md section 14): every numbered equation of the book chapter 7
(Puri and Babbar 7.1 to 7.52 as printed) must appear in the notes as a display equation (\\tag{N}) or be cited
as 'Eq. N' or 'Eqs. N' in the text. MISSING must be empty.
Usage: python3 check_equations.py
"""
import glob, re
book = open('book-sources/bs-5-semiconductors.html', encoding='utf-8').read()
key = lambda s: [int(x) for x in s.split('.')]
book_nums = sorted(set(re.findall(r'\\tag\{(7\.\d{1,2})\}', book)), key=key)
for kind in ('study', 'structured'):
    txt = ''.join(open(f, encoding='utf-8').read() for f in glob.glob(f'm3-sec*-{kind}.body.html'))
    blocks = re.findall(r'<div class="eq[^"]*">(.*?)</div>', txt, flags=re.S)
    display = set(n for b in blocks for n in re.findall(r'\\tag\{(7\.\d{1,2})\}', b))
    cited = set(n for grp in re.findall(r'Eqs?\.[^<]{0,40}', txt) for n in re.findall(r'7\.\d{1,2}', grp))
    missing = [n for n in book_nums if n not in display and n not in cited]
    print(f'{kind}: book numbers {len(book_nums)}, display {len(display)}, cited {len(cited - display)}, MISSING {missing}')

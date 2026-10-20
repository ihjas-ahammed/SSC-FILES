"""Coverage check (process.md section 14): every numbered equation in the book sources of a topic
must appear in the notes as a display equation (\\tag{N}) or be cited as 'Eq. N' in the text.
Equations that appear only inline are reported separately, because they are easy to miss.
Usage: python3 check_equations.py <topic prefix e.g. m2-s71>
"""
import glob, re, sys
prefix = sys.argv[1]
book = ''.join(open(f, encoding='utf-8').read() for f in glob.glob(f'book-sources/{prefix}*.html'))
book_nums = sorted(set(re.findall(r'\((7\.\d+)\)', book)) | set(re.findall(r'\\tag\{(7\.\d+)\}', book)), key=lambda s: [int(x) for x in s.split('.')])
notes = {}
for kind in ('study', 'structured'):
    txt = ''.join(open(f, encoding='utf-8').read() for f in glob.glob(f'{prefix}*-{kind}.body.html'))
    blocks = re.findall(r'<div class="eq">(.*?)</div>', txt, flags=re.S)
    display = set(n for b in blocks for n in re.findall(r'\\tag\{(7\.\d+)\}', b))
    cited = set(re.findall(r'Eqs?\.\s*(7\.\d+)', txt))
    inline_only = [n for n in set(re.findall(r'\\tag\{(7\.\d+)\}', txt)) if n not in display]
    missing = [n for n in book_nums if n not in display and n not in cited]
    notes[kind] = (missing, inline_only)
    print(f'{kind}: book numbers {len(book_nums)}, shown as display {len(display)}, cited in text only {len([n for n in book_nums if n not in display and n in cited])}, MISSING {missing}, tagged but not in a display block {inline_only}')

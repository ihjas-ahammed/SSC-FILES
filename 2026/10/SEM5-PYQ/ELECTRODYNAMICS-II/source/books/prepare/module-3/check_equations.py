"""Coverage check (process.md section 14), Module 3: every numbered equation (8.x or 9.x) in the book sources
must appear in the notes as a display block (\\tag{N}) or be cited in the text as 'Eq. N' or '(N)'.
Numbers cited only as '(N)' in text are listed separately, because a display is the stronger form.
Usage: python3 check_equations.py [prefix]   (prefix filters the body files, e.g. m3-sec3; default: all)
"""
import glob, re, sys
prefix = sys.argv[1] if len(sys.argv) > 1 else ''
book = ''.join(open(f, encoding='utf-8').read() for f in glob.glob('book-sources/m3-*.html'))
book_nums = sorted(set(re.findall(r'\((8\.\d+|9\.\d+)\)', book)) | set(re.findall(r'\\tag\{(8\.\d+|9\.\d+)\}', book)),
                   key=lambda s: [int(x) for x in s.split('.')])
for kind in ('study', 'structured'):
    files = glob.glob(f'{prefix}*-{kind}.body.html') if prefix else glob.glob(f'm3-*-{kind}.body.html')
    txt = ''.join(open(f, encoding='utf-8').read() for f in files)
    blocks = re.findall(r'<div class="eq[^"]*">(.*?)</div>', txt, flags=re.S)
    display = set(n for b in blocks for n in re.findall(r'\\tag\{((?:8|9)\.\d+)\}', b))
    eqcited = set(re.findall(r'Eqs?\.\s*((?:8|9)\.\d+)', txt))
    paren = set(re.findall(r'\(((?:8|9)\.\d+)\)', txt))
    missing = [n for n in book_nums if n not in display and n not in eqcited and n not in paren]
    paren_only = [n for n in book_nums if n not in display and n not in eqcited and n in paren]
    print(f'{kind}: book numbers {len(book_nums)}, display {len(display)}, cited as Eq. {len(eqcited)}, paren-only {len(paren_only)}, MISSING {missing}')
    if paren_only: print('   paren-only (should be displayed or cited as Eq.):', paren_only)

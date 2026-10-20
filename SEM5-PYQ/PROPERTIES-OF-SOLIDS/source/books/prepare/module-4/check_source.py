"""Source check (process.md section 17), run on body files before building:
- every <div class="eq"> is closed; every $$ pair is balanced per block;
- aligned/gathered environments are closed inside each block;
- no block carries the same equation number twice;
- no escaped quotes or stray backslashes before line breaks.
Usage: python3 check_source.py <body files...>
"""
import re, sys
bad = 0
for f in sys.argv[1:]:
    t = open(f, encoding='utf-8').read()
    for label, pat in [('escaped quote', r'\\"'), ('stray backslash before newline', r'\\\\\\\n')]:
        for m in re.finditer(pat, t):
            print(f, 'line', t[:m.start()].count('\n') + 1, label); bad += 1
    if t.count('<div class="eq">') != len(re.findall(r'<div class="eq">\$\$.*?\$\$</div>', t, flags=re.S)):
        print(f, 'an equation block is not closed with $$</div>'); bad += 1
    for m in re.finditer(r'<div class="eq">\$\$(.*?)\$\$</div>', t, flags=re.S):
        s = m.group(1); line = t[:m.start()].count('\n') + 1
        tags = re.findall(r'\\tag\{([^}]*)\}', s)
        if len(tags) > 1: print(f, 'line', line, 'more than one tag in one block:', tags); bad += 1
        if s.count('\\begin{') != s.count('\\end{') or s.count('{') != s.count('}'):
            print(f, 'line', line, 'unbalanced environment or braces'); bad += 1
    if t.count('$$') % 2: print(f, 'odd number of $$'); bad += 1
print('source check:', 'OK' if bad == 0 else f'{bad} problem(s)')
sys.exit(1 if bad else 0)

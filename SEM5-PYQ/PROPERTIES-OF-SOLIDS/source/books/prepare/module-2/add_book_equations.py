"""Lists book equations that a body does not display (or cite) with their printed LaTeX, taken from the
Codex transcription in book-sources. Run after the bodies are written; re-run check_equations.py after it.
Usage: python3 add_book_equations.py   (rewrites the bodies: an appended block is replaced on each run)"""
import glob, re
M = '.'
SRC = ''.join(open(f, encoding='utf-8').read() for f in sorted(glob.glob('book-sources/*.html')))
block_for = {}
for b in re.findall(r'<div class="eq">(.*?)</div>', SRC, flags=re.S):
    for t in re.findall(r'\\tag\{([56]\.\d{1,2})\}', b):
        block_for.setdefault(t, b.strip())
RANGES = {'sec2': ('5.1', '5.18'), 'sec3': ('5.19', '5.54'), 'sec4': ('6.1', '6.47'), 'sec5': ('6.48', '6.59')}
def key(t): return [int(x) for x in t.split('.')]
def in_range(t, a, b): return key(a) <= key(t) <= key(b)
MARK = '<!-- book-equations:auto -->'
for kind in ('study', 'structured'):
    for sec, (a, b) in RANGES.items():
        files = glob.glob(f'm2-{sec}*-{kind}.body.html')
        if not files: continue
        f = files[0]
        txt = open(f, encoding='utf-8').read()
        txt = txt.split(MARK)[0]
        disp = set(re.findall(r'\\tag\{([56]\.\d{1,2})\}', txt))
        cited = set(re.findall(r'[56]\.\d{1,2}', ' '.join(re.findall(r'Eqs?\.[^<]{0,60}', txt))))
        nums = sorted([t for t in block_for if in_range(t, a, b) and t not in disp and t not in cited], key=key)
        if not nums: 
            open(f, 'w', encoding='utf-8').write(txt); continue
        out = [MARK, '<h3>Book equations of this section not shown in the derivation above</h3>',
               '<p class="note">Listed with their book numbers, as printed (from the verified transcription).</p>']
        for t in nums:
            out.append(f'<div class="eq">$${block_for[t].split("$$")[1] if "$$" in block_for[t] else block_for[t]}$$</div>' if False else f'<div class="eq">{block_for[t]}</div>')
        open(f, 'w', encoding='utf-8').write(txt + '\n' + '\n'.join(out) + '\n')
        print(f, len(nums), 'added')

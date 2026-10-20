"""Build the Module III notes (Puri and Babbar ch. 5 and 6) from topic bodies (process.md section 15).
Usage: python3 build_module3.py [codex|svg] [section1|...|section4|module3]
Each section is a list of topic bodies; the module build joins all sections in order.
Figures: {{FIG:name}} in a body is replaced by the cleaned Codex image (final/name.jpg) in codex mode.
Captions are plain HTML, not MathJax (MathJax in a caption renders at a huge size; see Electrodynamics process.md 12.2).
"""
import os, re, sys
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'codex'
WHAT = sys.argv[2] if len(sys.argv) > 2 else 'module3'

CAP = {
 'm3-f71': 'Fig. 7.1 (book): (a) two-dimensional representation of a Si crystal; (b) silicon crystal containing an electron-hole pair.',
 'm3-f72': 'Fig. 7.2 (book): energy band diagram of an intrinsic semiconductor showing generation and recombination of an electron and a hole.',
 'm3-f73': 'Fig. 7.3 (book): (a) a pentavalent impurity atom (P) in a silicon crystal; (b) energy level diagram of an <i>n</i>-type semiconductor.',
 'm3-f74': 'Fig. 7.4 (book): (a) a trivalent impurity atom (B) in a silicon crystal; (b) energy level diagram of a <i>p</i>-type semiconductor.',
 'm3-f75': 'Fig. 7.5 (book): plot of ln&nbsp;σ against 1/<i>T</i>; the slope gives the band gap.',
 'm3-f76': 'Fig. 7.6 (book): band model of an intrinsic semiconductor.',
 'm3-f77': 'Fig. 7.7 (book): band model of an <i>n</i>-type semiconductor.',
 'm3-f78': 'Fig. 7.8 (book): variations of the Fermi level with temperature and impurity concentration for Si.',
 'm3-f79': 'Fig. 7.9 (book): conductivity against temperature for a typical <i>n</i>-type germanium sample.',
 'm3-f710': 'Fig. 7.10 (book): band model for a <i>p</i>-type semiconductor.',
 'm3-f711': 'Fig. 7.11 (book): position of the Fermi level for Example 7.1 (the book prints the figure number only).',
}
SECTIONS = {
 'section1': ('Section 1: semiconductors, intrinsic and extrinsic (7.1–7.3)', ['m3-sec1-intrinsic-extrinsic']),
 'section2': ('Section 2: drift velocity, mobility and conductivity of intrinsic semiconductors (7.4)', ['m3-sec2-drift-mobility']),
 'section3': ('Section 3: carrier concentration and Fermi level, intrinsic (7.5)', ['m3-sec3-carriers-intrinsic']),
 'section4': ('Section 4: extrinsic semiconductors, carriers, Fermi level and conductivity (7.6, Examples 7.1–7.3)', ['m3-sec4-extrinsic']),
}
META = ('Puri and Babbar, <i>Solid State Physics and Electronics</i>, chapter 7 (printed pages 199–227). Text extracted by Codex from the page images and checked against them. '
        'Figures are redrawn for these notes, not copied from the book; the book figure number is in each caption. Chapter questions and problems are not included.')

def figure(name):
    cap = CAP[name]
    if MODE == 'svg':
        svg = open(f'{M}/diagrams/{name}.svg', encoding='utf-8').read()
        svg = re.sub(r'<\?xml.*?\?>', '', svg).replace('<svg ', '<svg class="figsvg" ', 1)
        return f'<figure class="fig">{svg}<figcaption>{cap}</figcaption></figure>'
    p = f'{M}/final/{name}.jpg'
    if not os.path.exists(p): raise SystemExit(f'MISSING figure {p}: a missing figure is a failure (process.md 9.3)')
    return f'<figure class="fig"><img src="final/{name}.jpg" alt="{name.replace("-", " ")}"><figcaption>{cap}</figcaption></figure>'

def columnise(src):
    m = re.match(r'\s*(<h2>.*?</h2>)(.*)$', src, flags=re.S)
    if not m: return f'<div class="sec-body">{src}</div>'
    return m.group(1) + '\n<div class="sec-body">' + m.group(2) + '</div>'


LONG = 70   # TeX characters; longer display blocks are broken (process.md section 17)
LONG_LOG = []

def _top_splits(s, chars):
    """Positions of the given characters at brace/bracket depth 0 (not inside \\frac{..}{..} etc.)."""
    depth = 0; out = []
    for i, ch in enumerate(s):
        if ch in '{([': depth += 1
        elif ch in '})]': depth -= 1
        elif depth == 0 and ch in chars:
            if ch in '+-' and (i == 0 or s[i-1] in '=+-(&^_{ ' ):
                continue   # unary sign or exponent sign
            out.append(i)
    return out

def _split_at(s, positions):
    out = []; last = 0
    for p in positions:
        out.append(s[last:p].strip()); last = p
    out.append(s[last:].strip())
    return out

def break_long_display(core, tag, label):
    """Break a long display into an aligned block: one line per top-level '=' term, and
    long right-hand sides further broken at top-level + and - (sign kept at the start of the line)."""
    if len(core) <= LONG or '\\begin{' in core:
        return None
    if '\\qquad' in core:
        parts = [p.strip().rstrip(',').strip() for p in core.split('\\qquad') if p.strip()]
        LONG_LOG.append(f'{label}: {len(parts)} equations on separate lines ({len(core)} chars)')
        return '\\begin{gathered}' + ' \\\\ '.join(parts) + '\\end{gathered}' + (' ' + tag if tag else '')
    eq = _top_splits(core, '=')
    if eq:
        lhs = core[:eq[0]].strip()
        rhs_terms = _split_at(core[eq[0]+1:], [p - eq[0] - 1 for p in eq[1:]]) if len(eq) > 1 else [core[eq[0]+1:].strip()]
    else:
        lhs = ''
        rhs_terms = [core]
    lines = []
    first = True
    rhs_terms = [x.lstrip('= ').strip() for x in rhs_terms]
    for term in rhs_terms:
        if len(term) > LONG:
            pos = _top_splits(term, '+-')
            subs = _split_at(term, pos) if pos else [term]
        else:
            subs = [term]
        for k, sub in enumerate(subs):
            if first:
                lines.append((lhs + ' &= ' if lhs else '&') + sub)
                first = False
            elif k == 0:
                lines.append(' &= ' + sub)
            else:
                lines.append(' &' + sub)   # sub already starts with its sign
    if len(lines) < 2:
        LONG_LOG.append(f'{label}: long but no safe break ({len(core)} chars)')
        return None
    LONG_LOG.append(f'{label}: broken into {len(lines)} lines ({len(core)} chars)')
    return '\\begin{aligned}' + ' \\\\ '.join(lines) + '\\end{aligned}' + (' ' + tag if tag else '')

def fix_long(body, label):
    def rep(m):
        inner = m.group(1)
        tm = re.search(r'\\tag\{[^}]*\}', inner)
        tag = tm.group(0) if tm else ''
        core = (inner[:tm.start()] + inner[tm.end():]).strip() if tm else inner.strip()
        new = break_long_display(core, tag, label)
        if new: return f'<div class="eq">$${new}$$</div>'
        if len(core) > LONG: return f'<div class="eq longeq">$${inner}$$</div>'
        return m.group(0)
    return re.sub(r'<div class="eq">\$\$(.*?)\$\$</div>', rep, body, flags=re.S)

def body_for(topics, kind):
    parts = []
    for t in topics:
        src = open(f'{M}/{t}-{kind}.body.html', encoding='utf-8').read()
        src = re.sub(r'\{\{FIG:([a-z0-9\-]+)\}\}', lambda m: figure(m.group(1)), src)
        parts.append(columnise(src))
    body = '\n'.join(parts)
    body = fix_long(body, ','.join(topics) + ' ' + kind)
    body = re.sub(r'\$\$.*?\$\$', lambda m: m.group(0).replace('<', '\\lt '), body, flags=re.S)
    body = re.sub(r'(?<!\$)\$(?!\$)[^$\n]*?\$', lambda m: m.group(0).replace('<', '\\lt ').replace('\\dfrac', '\\frac'), body)
    inline_int = [l.strip()[:80] for l in body.splitlines() if re.search(r'(?<!\$)\$[^$\n]*\\(oint|int)[^$\n]*\$', l) and '<div class="eq">' not in l]
    if inline_int: print(f'  note: {len(inline_int)} lines with inline integrals (short ones are fine)')
    return body

EXTRA = '''
  .box-recall { background:#FEF9E7; border-left:4px solid #B9770E; padding:6px 10px; margin:8px 0; }
  .box-recall ol { margin:4px 0 4px 20px; padding:0; }
  .lbl.recall { color:#B9770E; }
  .figsvg { display:block; width:100%; max-width:240px; height:auto; margin:0 auto; }
  .fig img { display:block; width:100%; max-width:240px; height:auto; margin:0 auto; }
  .box-res p, .box-eq p { margin:4px 0; }
  .sec-body { column-count: 2; column-gap: 22px; column-rule: 1px solid #AEB6BF; }
  .sec-body .eq, .sec-body .box-eq, .sec-body .fig { break-inside: avoid; }
  .sec-body .box-res, .sec-body .box-recall { box-decoration-break: clone; }
  .sec-body .fig img, .sec-body .figsvg { max-height: 130px; width: auto; max-width: 220px; }
  .sec-body h3 { break-after: avoid; }
  .sec-body p, .sec-body li { font-size: 11pt; }
  .sec-body .eq { font-size: 0.93em; }
  .sec-body .longeq mjx-container[display="true"] { font-size: 0.72em !important; }
  .sec-body mjx-container[display="true"] { font-size: 0.85em !important; max-width: 100%; }
  .sec-body > table { column-span: all; width: 100%; font-size: 9.5pt; border-collapse: collapse; margin: 6px 0 10px; }
  .sec-body > table th, .sec-body > table td { border: 1px solid #AEB6BF; padding: 3px 5px; text-align: left; vertical-align: top; }
  .sec-body > table th { background: #EAF2F8; }
  .sec-body > .box-recall, .sec-body > .box-res { break-inside: avoid; }
  .sec-bar { background:#1F618D; color:#fff; font-size:13pt; font-weight:bold; padding:6px 10px; margin:16px 0 6px; column-span: all; break-after: avoid; }
  main { max-width: none; margin: 0; padding: 0 14px; }
  @page { size: A4; margin: 16mm; }
  @media print { h2 { break-after: avoid; } }
'''
def page(title, h1, body, out_name):
    head = f'''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<script>
window.MathJax = {{ tex: {{ inlineMath: [['$', '$'], ['\\\\(', '\\\\)']] }}, svg: {{ fontCache: 'global' }} }};
</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>{css}{EXTRA}</style>
</head>
<body>
<main>
<h1>{h1}</h1>
<div class="meta">{META}</div>
'''
    open(f'{M}/{out_name}', 'w', encoding='utf-8').write(head + body + '\n</main>\n</body>\n</html>\n')
    print('built', out_name, MODE)

KINDS = [('study', 'Study notes'), ('structured', 'Structured notes')]
if WHAT == 'module3':
    order = ['section1', 'section2', 'section3', 'section4']
    for kind, label in KINDS:
        parts = []
        for sec_key in order:
            title, topics = SECTIONS[sec_key]
            parts.append(f'<div class="sec-bar">{title}</div>')
            parts.append(body_for(topics, kind))
        page(f'{label}: Module III: semiconductors',
             f'{label}: Module III: semiconductors', '\n'.join(parts),
             f'properties-of-solids-module-3-{kind}.html')
else:
    title, topics = SECTIONS[WHAT]
    for kind, label in KINDS:
        page(f'{label}: {title}', f'{label}: {title}', body_for(topics, kind), f'm3-{WHAT}-{kind}.html')
for _line in LONG_LOG: print('  long equation:', _line)

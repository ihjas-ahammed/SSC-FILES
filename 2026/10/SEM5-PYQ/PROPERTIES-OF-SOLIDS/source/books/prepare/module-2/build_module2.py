"""Build the Module II notes (Puri and Babbar ch. 5 and 6) from topic bodies (process.md section 15).
Usage: python3 build_module2.py [codex|svg] [section1|...|section5|module2]
Each section is a list of topic bodies; the module build joins all sections in order.
Figures: {{FIG:name}} in a body is replaced by the cleaned Codex image (final/name.jpg) in codex mode.
Captions are plain HTML, not MathJax (MathJax in a caption renders at a huge size; see Electrodynamics process.md 12.2).
"""
import os, re, sys
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'codex'
WHAT = sys.argv[2] if len(sys.argv) > 2 else 'module2'

CAP = {
 'm2-s1-barrier': 'Fig. 5.1 (book): metallic surface bounded by the potential barrier V<sub>0</sub>, the difference in potential energy of an electron inside the metal and just outside it.',
 'm2-s2-box': 'Fig. 5.2 (book): one-dimensional potential box bounded by infinite potential energy barriers.',
 'm2-s2-levels': 'Fig. 5.3 (book): E<sub>n</sub> versus n for a one-dimensional crystal.',
 'm2-s2-wave': 'Fig. 5.4 (book): first four wave functions (solid lines) and the corresponding energy levels (broken lines).',
 'm2-s2-dos1d': 'Fig. 5.5 (book): density of states against energy for a one-dimensional metallic crystal; all states up to the Fermi level are filled at 0 K.',
 'm2-s3-occ3d': 'Fig. 5.6 (book): distribution of electrons among the levels of a three-dimensional free electron model at 0 K.',
 'm2-s3-fermi': 'Fig. 5.7 (book): Fermi distribution function at different temperatures; the variation of the Fermi energy with temperature is also shown.',
 'm2-s3-kspace': 'Fig. 5.8 (book): sphere of radius k<sub>F</sub> in k-space containing the occupied states of N free electrons in the ground state.',
 'm2-s3-dos3d': 'Fig. 5.9 (book): variation of density of electronic states with energy for a free electron gas in three dimensions.',
 'm2-s4-periodic': 'Fig. 6.1 (book): one-dimensional periodic potential experienced by an electron in a crystal with lattice constant a; the potential near the surface is at the right.',
 'm2-s4-kp': 'Fig. 6.2 (book): one-dimensional periodic potential used by Kronig and Penney.',
 'm2-s4-lhs': 'Fig. 6.3 (book): left-hand side of Eq. (6.39) against αa for P = 3π/2; solid and broken lines on the axis are the allowed and forbidden regions.',
 'm2-s4-pcurve': 'Fig. 6.4 (book): allowed (shaded) and forbidden (open) energy ranges as a function of P.',
 'm2-s4-zones': 'Fig. 6.5 (book): E versus k in three zone schemes: (a) repeated, (b) extended, (c) reduced.',
 'm2-s4-evm': 'Fig. 6.6 (book): energy, velocity and effective mass as functions of k; dashed lines mark the inflexion points.',
 'm2-s5-occ': 'Fig. 6.8 (book): electron distribution at 0 K in (a) an insulator, (b) an intrinsic semiconductor and (c) a metal.',
}
SECTIONS = {
 'section1': ('Section 1: Drude–Lorentz classical theory (Puri and Babbar 5.1)', ['m2-sec1-drude']),
 'section2': ('Section 2: Sommerfeld theory, one-dimensional box (5.2, 5.2.1)', ['m2-sec2-sommerfeld1d']),
 'section3': ('Section 3: three-dimensional free electron gas and applications (5.2.2, 5.3)', ['m2-sec3-fermi3d']),
 'section4': ('Section 4: Bloch theorem and the Kronig–Penney model (6.1–6.3)', ['m2-sec4-bloch-kp']),
 'section5': ('Section 5: velocity, effective mass, metals and semiconductors (6.4–6.5)', ['m2-sec5-velocity-metals']),
}
META = ('Puri and Babbar, <i>Solid State Physics and Electronics</i>, chapters 5 and 6 (printed pages 151–198). Text extracted by Codex from the page images and checked against them. '
        'Figures are redrawn for these notes, not copied from the book; the book figure number is in each caption. Problems are not included.')

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
if WHAT == 'module2':
    order = ['section1', 'section2', 'section3', 'section4', 'section5']
    for kind, label in KINDS:
        parts = []
        for sec_key in order:
            title, topics = SECTIONS[sec_key]
            parts.append(f'<div class="sec-bar">{title}</div>')
            parts.append(body_for(topics, kind))
        page(f'{label}: Module II: free electron theory and band theory',
             f'{label}: Module II: free electron theory and band theory', '\n'.join(parts),
             f'properties-of-solids-module-2-{kind}.html')
else:
    title, topics = SECTIONS[WHAT]
    for kind, label in KINDS:
        page(f'{label}: {title}', f'{label}: {title}', body_for(topics, kind), f'm2-{WHAT}-{kind}.html')
for _line in LONG_LOG: print('  long equation:', _line)

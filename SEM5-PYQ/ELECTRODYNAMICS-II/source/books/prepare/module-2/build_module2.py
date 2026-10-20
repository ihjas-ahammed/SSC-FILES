"""Build the Module 2 notes from topic bodies (process.md section 15).
Usage: python3 build_module2.py [codex|svg] [section1|section2|section3|module2]
Each section is a list of topic bodies; the module build joins all sections in order.
Figures: {{FIG:name}} in a body is replaced by the cleaned Codex image (final/name.jpg) in
codex mode, or by the SVG draft (diagrams/name.svg) in svg mode.
"""
import os, re, sys
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/../module-1/parts/s2-student-template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'codex'
WHAT = sys.argv[2] if len(sys.argv) > 2 else 'module2'

CAP = {
 'm2-s1-resistor': 'Fig. 7.1 (book): cylindrical resistor, field E along the axis, current I leaving the right end.',
 'm2-s1-coax': 'Fig. 7.2 (book): coaxial cylinders, end view; the field E between them is radial.',
 'm2-s1-bend': 'Fig. 7.8 (book): charge piles up at a bend, and E points away from the knee.',
 'm2-s1-generator': 'Fig. 7.10 (book): rectangular loop with one side in a uniform field B; pulled to the right at speed v.',
 'm2-s1-forces': 'Fig. 7.11 (book): velocity and force vectors for a charge in the moving wire.',
 'm2-s1-paths': 'Fig. 7.12 (book): (a) path for the emf, at one instant; (b) path followed by one charge.',
 'm2-s1-paradox': 'Fig. 7.14 (book): flux-rule paradox; the switch moves from a to b.',
 'm2-s1-disk': 'Fig. 7.15 (book): Faraday disk spinning in a field B pointing up.',
 'm2-sec2-loop-magnet': 'Fig. 7.21 (book): (a) loop pulled through a field; (b) magnet moved past a still loop.',
 'm2-sec2-flux-emf': 'Fig. 7.23 (book): flux and emf for a magnet passing a ring (Example 7.6).',
 'm2-sec2-jumping-ring': 'Fig. 7.24 (book): jumping ring on a solenoid with an iron core (Example 7.7).',
 'm2-sec2-ampere-disk': 'Fig. 7.25 (book): uniform field over a disk, with an Amperian loop of radius s (Example 7.8).',
 'm2-sec2-wheel': 'Fig. 7.26 (book): wheel with a line charge on its rim (Example 7.9).',
 'm2-sec2-wire-rect': 'Fig. 7.27 (book): Amperian loop beside a long wire carrying I(t) (Example 7.10).',
 'm2-sec2-two-loops': 'Fig. 7.30 (book): loop 1 carrying I1; its field threads loop 2.',
 'm2-sec2-neumann': 'Fig. 7.31 (book): line elements dl1 and dl2 and the vector r (Neumann formula).',
 'm2-sec2-short-in-long': 'Fig. 7.32 (book): short solenoid inside a long solenoid (Example 7.11).',
 'm2-sec2-toroid': 'Fig. 7.34 (book): toroid cross-section (Example 7.12).',
 'm2-sec2-rl': 'Fig. 7.35 (book): battery, switch, inductor and resistor (Example 7.13).',
 'm2-sec2-rl-graph': 'Fig. 7.36 (book): growth of current in an RL circuit.',
 'm2-sec2-coax-energy': 'Fig. 7.40 (book): long coaxial cable carrying current I (Example 7.14).',
 'm2-sec3-capacitor-loop': 'Fig. 7.43 (book): capacitor being charged; Amperian loop with flat and balloon surfaces.',
 'm2-sec3-shells': 'Fig. 7.44 (book): concentric shells with ohmic current between them (Example 7.15).',
 'm2-sec3-polarized-tube': 'Fig. 7.48 (book): polarized tube with bound charges at its ends.',
 'm2-sec3-pillbox': 'Fig. 7.49 (book): thin pillbox straddling a charged surface.',
 'm2-sec3-surface-loop': 'Fig. 7.50 (book): thin Amperian loop straddling a surface current.',
 'm2-sec3-capacitor-plates': 'Fig. 7.46 (book): capacitor plates joined by thin wires carrying current I.',
 'm2-sec3-flux-lines': 'Fig. 7.52 (book): field lines of a point charge; labels are arbitrary.',
}
SECTIONS = {
 'section1': ('Section 1: electromotive force (Griffiths 7.1)', [
   'm2-s71-ohm', 'm2-s72-emf', 'm2-s73-motional']),
 'section2': ('Section 2: electromagnetic induction (Griffiths 7.2)', [
   'm2-sec2-faraday', 'm2-sec2-induced', 'm2-sec2-inductance', 'm2-sec2-energy']),
 'section3': ('Section 3: Maxwell’s equations (Griffiths 7.3, 7.4)', [
   'm2-sec3-ampere', 'm2-sec3-displacement', 'm2-sec3-maxwell', 'm2-sec3-matter', 'm2-sec3-bc', 'm2-sec3-background']),
}
META = ('Griffiths, <i>Introduction to Electrodynamics</i> (5th ed.), Chapter 7. Figures are redrawn for these notes, not copied from the book; '
        'the book figure number is in each caption. Problems are not included.')

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
    order = ['section1', 'section2', 'section3']
    for kind, label in KINDS:
        parts = []
        for sec_key in order:
            title, topics = SECTIONS[sec_key]
            parts.append(f'<div class="sec-bar">{title}</div>')
            parts.append(body_for(topics, kind))
        page(f'{label}: Module 2, electromagnetic induction and Maxwell’s equations',
             f'{label}: Module 2, electromagnetic induction and Maxwell’s equations', '\n'.join(parts),
             f'electrodynamics-module2-{kind}.html')
else:
    title, topics = SECTIONS[WHAT]
    for kind, label in KINDS:
        page(f'{label}: {title}', f'{label}: {title}', body_for(topics, kind), f'm2-{WHAT}-{kind}.html')
for _line in LONG_LOG: print('  long equation:', _line)

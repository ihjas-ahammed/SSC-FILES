"""Build the Module I notes (Puri and Babbar ch. 1 and 2) from topic bodies (process.md section 15).
Usage: python3 build_module1.py [codex|svg] [section1|...|section5|module1]
Each section is a list of topic bodies; the module build joins all sections in order.
Figures: {{FIG:name}} in a body is replaced by the cleaned Codex image (final/name.jpg) in codex mode.
Captions are plain HTML, not MathJax (MathJax in a caption renders at a huge size; see Electrodynamics process.md 12.2).
"""
import os, re, sys
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'codex'
WHAT = sys.argv[2] if len(sys.argv) > 2 else 'module1'

CAP = {
 'm1-s1-lattice': 'Fig. 1.1 (book): primitive (<b>a</b><sub>1</sub>, <b>b</b><sub>1</sub>) and non-primitive (<b>a</b><sub>2</sub>, <b>b</b><sub>2</sub>) translation vectors in a two-dimensional lattice.',
 'm1-s1-cells': 'Fig. 1.2 (book): primitive (P) and non-primitive (NP) unit cells of a two-dimensional lattice.',
 'm1-s1-ws': 'Fig. 1.3 (book): construction of the Wigner–Seitz primitive cell.',
 'm1-s1-basis': 'Fig. 1.4 (book): generation of a crystal structure from a lattice and a basis.',
 'm1-s2-rot6': 'Fig. 1.5 (book): six-fold rotation about the point O in two dimensions (redrawn with a square case).',
 'm1-s2-row': 'Fig. 1.6 (book): geometry used to prove that only 1, 2, 3, 4 and 6-fold rotation axes are permissible.',
 'm1-s2-pent': 'Fig. 1.7 (book): demonstration that a five-fold rotation axis cannot exist in a lattice.',
 'm1-s2-notched': 'Fig. 1.8 (book): reflection symmetry of a notched wheel about a line.',
 'm1-s3-b2-oblique': 'Fig. 1.10 (book): oblique two-dimensional Bravais lattice.',
 'm1-s3-b2-rect': 'Fig. 1.10 (book): rectangular primitive two-dimensional Bravais lattice.',
 'm1-s3-b2-rectc': 'Fig. 1.10 (book): rectangular centred two-dimensional Bravais lattice.',
 'm1-s3-b2-square': 'Fig. 1.10 (book): square two-dimensional Bravais lattice.',
 'm1-s3-b2-hex': 'Fig. 1.10 (book): hexagonal two-dimensional Bravais lattice.',
 'm1-s3-cubic-sc': 'Fig. 1.11 (book): simple cubic (P) Bravais lattice.',
 'm1-s3-cubic-bcc': 'Fig. 1.11 (book): body-centred cubic (I) Bravais lattice.',
 'm1-s3-cubic-fcc': 'Fig. 1.11 (book): face-centred cubic (F) Bravais lattice.',
 'm1-s3-dir': 'Fig. 1.13 and 1.14 (book): indices of directions in a cube (AB is [1̄10], OQ is [111]).',
 'm1-s3-fam100': 'Family {100} of cube faces (book §1.8): six planes, six members.',
 'm1-s3-miller': 'Fig. 1.15 (book): Miller indices of plane ABC, intercepts 1, 2, 1, giving (212).',
 'm1-s3-dspace': 'Fig. 1.17 (book): an (hkl) plane at a distance d from a parallel plane through the origin.',
 'm1-s4-layers': 'Fig. 1.18 (book): layered arrangement of close-packed structures (ABAB and ABC stacking).',
 'm1-s4-hcp': 'Fig. 1.19 (book): conventional and primitive cells of the hexagonal close-packed structure.',
 'm1-s4-fcc': 'Fig. 1.20 (book): conventional unit cell of the fcc structure.',
 'm1-s4-bcc': 'Fig. 1.21 (book): conventional unit cell of the bcc structure.',
 'm1-s4-sc': 'Fig. 1.22 (book): unit cell of the sc structure.',
 'm1-s4-dc': 'Fig. 1.23 and 1.24 (book): unit cell of the diamond cubic structure.',
 'm1-s4-zns': 'Fig. 1.23 (book), zinc blende: the diamond cubic cell with two kinds of atom.',
 'm1-s4-nacl': 'Fig. 1.25 (book): unit cell of the sodium chloride structure.',
 'm1-s5-bragg': 'Fig. 2.1 and 2.2 (book): reinforcement of scattered waves and Bragg reflection from atomic planes.',
 'm1-s5-laue': 'Fig. 2.3 and 2.4 (book): scattering from two identical centres; the scattering normal N.',
 'm1-s5-recip-mono': 'Fig. 2.8 and 2.9 (book): monoclinic cell and its two-dimensional reciprocal lattice.',
 'm1-s5-ewald': 'Fig. 2.12 (book): Ewald construction in the reciprocal lattice.',
 'm1-s5-bz-square': 'Fig. 2.14 (book): Brillouin zones of a square lattice in its reciprocal lattice.',
 'm1-s5-bz-bcc': 'Fig. 2.15 (book): first Brillouin zone of a bcc lattice.',
 'm1-s5-bz-fcc': 'Fig. 2.16 (book): first Brillouin zone of an fcc lattice.',
 'm1-s5-recip-bcc-fcc': 'Fig. 2.10 and 2.11 (book): bcc and fcc primitive vectors, whose reciprocals are each other.',
}
SECTIONS = {
 'section1': ('Section 1: crystal lattice, unit cell and basis (Puri and Babbar 1.1–1.4)', ['m1-sec1-lattice']),
 'section2': ('Section 2: symmetry operations and point groups (1.5–1.6)', ['m1-sec2-symmetry']),
 'section3': ('Section 3: Bravais lattices, directions, planes and spacing (1.7–1.9)', ['m1-sec3-bravais', 'm1-sec3-planes']),
 'section4': ('Section 4: simple crystal structures (1.10–1.13)', ['m1-sec4-structures']),
 'section5': ('Section 5: X-ray diffraction, reciprocal lattice and Brillouin zones (2.1–2.2, 2.4–2.7)', ['m1-sec5-xray', 'm1-sec5-reciprocal', 'm1-sec5-bz']),
}
META = ('Puri and Babbar, <i>Solid State Physics and Electronics</i>, chapters 1 and 2 (printed pages 1–39 and 46–58; section 2.3 is outside the module). '
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
if WHAT == 'module1':
    order = ['section1', 'section2', 'section3', 'section4', 'section5']
    for kind, label in KINDS:
        parts = []
        for sec_key in order:
            title, topics = SECTIONS[sec_key]
            parts.append(f'<div class="sec-bar">{title}</div>')
            parts.append(body_for(topics, kind))
        page(f'{label}: Module I: crystal structure and X-ray diffraction',
             f'{label}: Module I: crystal structure and X-ray diffraction', '\n'.join(parts),
             f'properties-of-solids-module-1-{kind}.html')
else:
    title, topics = SECTIONS[WHAT]
    for kind, label in KINDS:
        page(f'{label}: {title}', f'{label}: {title}', body_for(topics, kind), f'm1-{WHAT}-{kind}.html')
for _line in LONG_LOG: print('  long equation:', _line)

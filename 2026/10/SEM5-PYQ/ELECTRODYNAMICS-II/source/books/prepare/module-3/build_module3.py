"""Build the Module 3 notes from topic bodies (module-2 build, adapted for Module 3).
Usage: python3 build_module3.py [codex|svg] [section1|section2|section3|section4|section5|module3]
Figures: {{FIG:name}} in a body is replaced by the cleaned Codex image (final/name.jpg) in codex mode,
or by the SVG draft (diagrams/name.svg) in svg mode. A missing figure stops the build.
"""
import os, re, sys
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/../module-1/parts/s2-student-template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'codex'
WHAT = sys.argv[2] if len(sys.argv) > 2 else 'module3'

CAP = {
 'm3-s812-wire': 'Fig. 8.1 (book): a resistive wire carrying current I; E along the wire, B circumferential, S radially inward.',
 'm3-sec2-shift': 'Fig. 9.1 (book): a wave of fixed shape at t = 0 and at a later time, shifted to the right by vt.',
 'm3-sec2-string': 'Fig. 9.2 (book): a string segment between z and z + Δz, with tension T at angles θ and θ′.',
 'm3-sec2-sinusoid': 'Fig. 9.3 (book): a sinusoidal wave at t = 0, with amplitude A, wavelength λ and the central maximum at δ/k.',
 'm3-sec2-pulse': 'Fig. 9.5 (book): a pulse incident on a knot at z = 0, with the reflected and transmitted pulses.',
 'm3-sec2-polar-vec': 'Fig. 9.8c (book): a wave polarized along n̂, at angle θ to the x axis in the xy plane.',
 'm3-sec3-paradigm': 'Fig. 9.10 (book): monochromatic plane wave with E along x and B along y, traveling along z.',
 'm3-sec3-kvec': 'Fig. 9.11 (book): the propagation vector k and the position vector r; the phase is k · r.',
 'm3-sec3-cylinder': 'Fig. 9.12 (book): a cylinder of cross section A and length cΔt; the energy in it crosses A in time Δt.',
 'm3-sec4-normal': 'Fig. 9.13 (book): normal incidence on the interface between medium 1 and medium 2.',
 'm3-sec4-oblique': 'Fig. 9.14 (book): oblique incidence; wave vectors k_I, k_R, k_T and angles θ_I, θ_R, θ_T to the normal.',
}
SECTIONS = {
 'section1': ('Section 1: energy and Poynting’s theorem (Griffiths 8.1.2)', ['m3-s812-poynting']),
 'section2': ('Section 2: waves in one dimension (Griffiths 9.1)', ['m3-sec2-wave1d', 'm3-sec2-bc', 'm3-sec2-polar']),
 'section3': ('Section 3: electromagnetic waves in vacuum (Griffiths 9.2)', ['m3-sec3-wave-eq', 'm3-sec3-plane', 'm3-sec3-energy']),
 'section4': ('Section 4: electromagnetic waves in matter (Griffiths 9.3)', ['m3-sec4-linear', 'm3-sec4-oblique']),
 'section5': ('Section 5, background beyond the syllabus list: absorption, dispersion and guided waves (Griffiths 9.4, 9.5)', ['m3-bg-absorption', 'm3-bg-guided']),
}
META = ('Griffiths, <i>Introduction to Electrodynamics</i> (5th ed.), §8.1.2 and Chapter 9. Figures are redrawn for these notes, not copied from the book; '
        'the book figure number is in each caption. Sections 4 (§9.3.3) and 5 (§9.4, §9.5) are background, beyond the syllabus list. Problems are not included.')

def figure(name):
    cap = CAP[name]
    if MODE == 'svg':
        svg = open(f'{M}/diagrams/{name}.svg', encoding='utf-8').read()
        svg = re.sub(r'<\?xml.*?\?>', '', svg).replace('<svg ', '<svg class="figsvg" ', 1)
        return f'<figure class="fig">{svg}<figcaption>{cap}</figcaption></figure>'
    p = f'{M}/final/{name}.jpg'
    if not os.path.exists(p): raise SystemExit(f'MISSING figure {p}: a missing figure is a failure')
    return f'<figure class="fig"><img src="final/{name}.jpg" alt="{name.replace("-", " ")}"><figcaption>{cap}</figcaption></figure>'

def columnise(src):
    m = re.match(r'\s*(<h2>.*?</h2>)(.*)$', src, flags=re.S)
    if not m: return f'<div class="sec-body">{src}</div>'
    return m.group(1) + '\n<div class="sec-body">' + m.group(2) + '</div>'

LONG = 70
LONG_LOG = []

def _top_splits(s, chars):
    depth = 0; out = []
    for i, ch in enumerate(s):
        if ch in '{([': depth += 1
        elif ch in '})]': depth -= 1
        elif depth == 0 and ch in chars:
            if ch in '+-' and (i == 0 or s[i-1] in '=+-(&^_{ '):
                continue
            out.append(i)
    return out

def _split_at(s, positions):
    out = []; last = 0
    for p in positions:
        out.append(s[last:p].strip()); last = p
    out.append(s[last:].strip())
    return out

def break_long_display(core, tag, label):
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
        lhs = ''; rhs_terms = [core]
    lines = []; first = True
    rhs_terms = [x.lstrip('= ').strip() for x in rhs_terms]
    for term in rhs_terms:
        subs = _split_at(term, _top_splits(term, '+-')) if len(term) > LONG and _top_splits(term, '+-') else [term]
        for k, sub in enumerate(subs):
            if first:
                lines.append((lhs + ' &= ' if lhs else '&') + sub); first = False
            elif k == 0:
                lines.append(' &= ' + sub)
            else:
                lines.append(' &' + sub)
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
if WHAT == 'module3':
    order = ['section1', 'section2', 'section3', 'section4', 'section5']
    for kind, label in KINDS:
        parts = []
        for sec_key in order:
            title, topics = SECTIONS[sec_key]
            parts.append(f'<div class="sec-bar">{title}</div>')
            parts.append(body_for(topics, kind))
        page(f'{label}: Module 3, electromagnetic waves',
             f'{label}: Module 3, electromagnetic waves', '\n'.join(parts),
             f'electrodynamics-module3-{kind}.html')
else:
    title, topics = SECTIONS[WHAT]
    for kind, label in KINDS:
        page(f'{label}: {title}', f'{label}: {title}', body_for(topics, kind), f'm3-{WHAT}-{kind}.html')
for _line in LONG_LOG: print('  long equation:', _line)

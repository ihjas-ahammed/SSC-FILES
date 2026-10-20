import re, os, sys
from PIL import Image
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/../module-1/parts/s2-student-template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'svg'   # 'svg' = drafts, 'codex' = image-gen figures

CAPTIONS = {
 'm2-s1-resistor': 'Fig. 7.1 (book): cylindrical resistor, field E along the axis, current I leaving the right end.',
 'm2-s1-coax': 'Fig. 7.2 (book): coaxial cylinders, end view; the field E between them is radial.',
 'm2-s1-bend': 'Fig. 7.8 (book): charge piles up at a bend, and E points away from the knee.',
 'm2-s1-generator': 'Fig. 7.10 (book): rectangular loop with one side in a uniform field B; pulled to the right at speed v.',
 'm2-s1-forces': 'Fig. 7.11 (book): velocity and force vectors for a charge in the moving wire.',
 'm2-s1-paths': 'Fig. 7.12 (book): (a) path for the emf, at one instant; (b) path followed by one charge.',
 'm2-s1-paradox': 'Fig. 7.14 (book): flux-rule paradox; the switch moves from a to b.',
 'm2-s1-disk': 'Fig. 7.15 (book): Faraday disk spinning in a field B pointing up.',
}

def figure(name):
    cap = CAPTIONS[name]
    if MODE == 'svg':
        svg = open(f'{M}/diagrams/{name}.svg', encoding='utf-8').read()
        svg = re.sub(r'<\?xml.*?\?>', '', svg)
        svg = svg.replace('<svg ', '<svg class="figsvg" ', 1)
        return f'<figure class="fig">{svg}<figcaption>{cap}</figcaption></figure>'
    p = f'{M}/final/{name}.jpg'
    if not os.path.exists(p):
        raise SystemExit(f'missing final image {p}')
    return f'<figure class="fig"><img src="final/{name}.jpg" alt="{name.replace("-", " ")}"><figcaption>{cap}</figcaption></figure>'

def expand(body):
    return re.sub(r'\{\{FIG:([a-z0-9\-]+)\}\}', lambda m: figure(m.group(1)), body)

def fix_math(m):
    return m.group(0).replace('<', '\\lt ')

def build(kind, out_name, title, h1, meta, parts):
    def columnise(src):
        m = re.match(r'\s*(<h2>.*?</h2>)(.*)$', src, flags=re.S)
        if not m: return f'<div class="sec-body">{src}</div>'
        return m.group(1) + '\n<div class="sec-body">' + m.group(2) + '</div>'
    body = '\n'.join(columnise(expand(open(f'{M}/{p}', encoding='utf-8').read())) for p in parts)
    body = re.sub(r'\$\$.*?\$\$', fix_math, body, flags=re.S)
    body = re.sub(r'(?<!\$)\$(?!\$)[^$\n]*?\$', lambda m: fix_math(m).replace('\\dfrac', '\\frac'), body)
    bad = [l.strip()[:90] for l in body.splitlines() if re.search(r'(?<!\$)\$[^$\n]*\\(oint|int|sum)[^$\n]*\$', l) and '<div class="eq">' not in l]
    print('inline integral lines (check they are short):', len(bad))
    extra = '''
  .box-recall { background:#FEF9E7; border-left:4px solid #B9770E; padding:6px 10px; margin:8px 0; }
  .box-recall ol { margin:4px 0 4px 20px; padding:0; }
  .lbl.recall { color:#B9770E; }
  .figsvg { display:block; width:100%; max-width:300px; height:auto; margin:0 auto; }
  .fig img { display:block; width:100%; max-width:300px; height:auto; margin:0 auto; }
  .box-res p, .box-eq p { margin:4px 0; }
  .sec-body { column-count: 2; column-gap: 22px; column-rule: 1px solid #AEB6BF; }
  .sec-body .eq, .sec-body .box-eq, .sec-body .fig { break-inside: avoid; }
  .sec-body .box-res, .sec-body .box-recall { box-decoration-break: clone; }
  .sec-body .fig img, .sec-body .figsvg { max-height: 130px; width: auto; max-width: 220px; }
  .sec-body h3 { break-after: avoid; }
  .sec-body p, .sec-body li { font-size: 11pt; }
  .sec-body .eq { font-size: 0.93em; }
  .sec-body mjx-container[display="true"] { font-size: 0.85em !important; max-width: 100%; }
  @media print { h2 { break-after: avoid; } }
'''
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
<style>{css}{extra}</style>
</head>
<body>
<main>
<h1>{h1}</h1>
<div class="meta">{meta}</div>
'''
    out = head + body + '\n</main>\n</body>\n</html>\n'
    open(f'{M}/{out_name}', 'w', encoding='utf-8').write(out)
    print(out_name, MODE, len(out))

META = ('Griffiths, <i>Introduction to Electrodynamics</i> (5th ed.), §7.1 Electromotive force, pp. 298–315. '
        'Figures are redrawn for these notes, not copied from the book; the book figure number is in each caption.')
PART_S = ['m2-s71-ohm-study.body.html', 'm2-s72-emf-study.body.html', 'm2-s73-motional-study.body.html']
PART_T = ['m2-s71-ohm-structured.body.html', 'm2-s72-emf-structured.body.html', 'm2-s73-motional-structured.body.html']
build('study', 'm2-section1-study.html', 'Study notes: Section 1, electromotive force (Griffiths 7.1)',
      'Study notes: Section 1, electromotive force (Griffiths §7.1)', 'Student notes in my own words. ' + META, PART_S)
build('structured', 'm2-section1-structured.html', 'Structured notes: Section 1, electromotive force (Griffiths 7.1)',
      'Structured notes: Section 1, electromotive force (Griffiths §7.1)', 'Formal notes. ' + META, PART_T)

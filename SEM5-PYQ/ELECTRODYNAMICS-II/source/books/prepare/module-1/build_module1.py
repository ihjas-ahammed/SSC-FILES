import re, os, sys, html as H
M = '/home/ihjas/Documents/GitHub/SSC-FILES/SEM5-PYQ/ELECTRODYNAMICS-II/source/books/prepare/module-1'
IMG = M + '/diagrams/image-gen'
PARTS = M + '/parts'
S = '/tmp/claude-1000/-home-ihjas-Documents-GitHub-SSC-FILES-SEM5-PYQ-ELECTRODYNAMICS-II/b95120e8-4619-4fc5-b1d9-fd1555e2778c/scratchpad'
missing = []

def read(p): return open(p, encoding='utf-8').read()

FINAL = M + '/diagrams/final'
def img(name, alt):
    if not os.path.exists(f'{FINAL}/{name}.jpg'):
        missing.append(name)
        return f'<div class="pending">Figure pending: {name}</div>'
    return f'<img src="diagrams/final/{name}.jpg" alt="{H.escape(alt)}">'

def inner(html, tag='main'):
    m = re.search(rf'<{tag}[^>]*>(.*)</{tag}>', html, flags=re.S)
    return m.group(1)

def demote(body):
    body = re.sub(r'<h4', '<h5', body); body = re.sub(r'</h4>', '</h5>', body)
    body = re.sub(r'<h3', '<h4', body); body = re.sub(r'</h3>', '</h4>', body)
    body = re.sub(r'<h2', '<h3', body); body = re.sub(r'</h2>', '</h3>', body)
    return body

def drop_title(body):
    body = re.sub(r'^\s*<h1[^>]*>.*?</h1>', '', body, count=1, flags=re.S)
    body = re.sub(r'^\s*<div class="meta">.*?</div>', '', body, count=1, flags=re.S)
    body = re.sub(r'^\s*<section[^>]*>', '', body, count=1)
    body = re.sub(r'</section>\s*$', '', body)
    body = re.sub(r'^\s*<h2[^>]*>.*?</h2>', '', body, count=1, flags=re.S)
    return body

def fig_map_svgs(body, names):
    """Replace <figure class="fig"> blocks in order with image names; keep figcaption."""
    blocks = list(re.finditer(r'<figure class="fig">.*?</figure>', body, flags=re.S))
    assert len(blocks) == len(names), (len(blocks), names)
    out, last = [], 0
    for b, (n, alt) in zip(blocks, names):
        cap = re.search(r'<figcaption>.*?</figcaption>', b.group(0), flags=re.S)
        out.append(body[last:b.start()])
        out.append('<figure class="fig">' + img(n, alt) + (cap.group(0) if cap else '') + '</figure>')
        last = b.end()
    out.append(body[last:])
    return ''.join(out)

def markers(body):
    def rep(m):
        name = m.group(1)
        return img(name, name.replace('-', ' '))
    return re.sub(r'\{\{FIG:([a-z0-9\-]+)\}\}', rep, body)

TABLE_44 = '''<table class="data"><tr><th>Material</th><th>ε_r</th><th>Material</th><th>ε_r</th></tr>
<tr><td>Vacuum</td><td>1</td><td>Benzene</td><td>2.28</td></tr>
<tr><td>Helium</td><td>1.000065</td><td>Diamond</td><td>5.7–5.9</td></tr>
<tr><td>Neon</td><td>1.00013</td><td>Sodium chloride</td><td>5.9</td></tr>
<tr><td>Hydrogen (H₂)</td><td>1.000254</td><td>Silicon</td><td>11.7</td></tr>
<tr><td>Argon</td><td>1.000517</td><td>Methanol</td><td>33.0</td></tr>
<tr><td>Air (dry)</td><td>1.000536</td><td>Water</td><td>80.1</td></tr>
<tr><td>Nitrogen (N₂)</td><td>1.000548</td><td>Ice (−30 °C)</td><td>104</td></tr>
<tr><td>Water vapor (100 °C)</td><td>1.00589</td><td>KTaNbO₃ (0 °C)</td><td>34,000</td></tr></table>'''
TABLE_64 = '''<table class="data"><tr><th>Diamagnetic</th><th>χ_m</th><th>Paramagnetic</th><th>χ_m</th></tr>
<tr><td>Bismuth</td><td>−1.7 × 10⁻⁴</td><td>Oxygen (O₂)</td><td>1.7 × 10⁻⁶</td></tr>
<tr><td>Gold</td><td>−3.4 × 10⁻⁵</td><td>Sodium</td><td>8.5 × 10⁻⁶</td></tr>
<tr><td>Silver</td><td>−2.4 × 10⁻⁵</td><td>Aluminum</td><td>2.2 × 10⁻⁵</td></tr>
<tr><td>Copper</td><td>−9.7 × 10⁻⁶</td><td>Tungsten</td><td>7.0 × 10⁻⁵</td></tr>
<tr><td>Water</td><td>−9.0 × 10⁻⁶</td><td>Platinum</td><td>2.7 × 10⁻⁴</td></tr>
<tr><td>Carbon dioxide</td><td>−1.1 × 10⁻⁸</td><td>Oxygen (liquid, −200 °C)</td><td>3.9 × 10⁻³</td></tr>
<tr><td>Hydrogen (H₂)</td><td>−2.1 × 10⁻⁹</td><td>Gadolinium</td><td>4.8 × 10⁻¹</td></tr></table>'''

def tables(body):
    body = re.sub(r'<div class="fig">\{\{FIG:s44-table-dielectric-constants\}\}<figcaption>.*?</figcaption></div>',
                  lambda m: '<p class="cap">Table 4.2 (book): dielectric constants.</p>' + TABLE_44, body, flags=re.S)
    body = re.sub(r'<div class="fig">\{\{FIG:s64-table-susceptibility\}\}<figcaption>.*?</figcaption></div>',
                  lambda m: '<p class="cap">Table 6.1 (book): magnetic susceptibilities.</p>' + TABLE_64, body, flags=re.S)
    return body

# ---- section sources (student and structured) ----
def sec41(kind):
    if kind == 'student':
        b = inner(read(f'{M}/polarization-study-notes.html'))
        b = fig_map_svgs(b, [('atom-induced-dipole', 'Atom model of Example 4.1'),
                             ('s1-dipole-torque', 'Permanent dipole in a uniform field'),
                             ('s1-energy-graph', 'Potential energy against angle'),
                             ('s1-nonuniform', 'Dipole in a non-uniform field'),
                             ('s1-polarized-block', 'Block of aligned dipoles')])
    else:
        b = inner(read(f'{M}/polarization-structured-notes.html'))
        b = fig_map_svgs(b, [('atom-induced-dipole', 'Atom model of Example 4.1'),
                             ('s1-dipole-torque', 'Permanent dipole in a uniform field'),
                             ('s1-energy-graph', 'Potential energy against angle'),
                             ('s1-nonuniform', 'Dipole in a non-uniform field'),
                             ('s1-polarized-block', 'Block of aligned dipoles')])
    return b

def sec42(kind):
    if kind == 'student':
        b = read(f'{S}/s2-student-template.html')
        b = inner(b)
        for mk, n in [('S2-DIPOLE-SUM','s2-dipole-sum'),('S2-DERIV-FLOW','s2-derivation-flow'),('S2-SPHERE-FIELD','s2-sphere-field'),
                      ('S2-DIPOLE-CHAIN','s2-dipole-chain'),('S2-OBLIQUE-TUBE','s2-oblique-tube'),('S2-PILLBOX','s2-pillbox-divergence'),
                      ('S2-AVERAGING','s2-averaging-sphere')]:
            b = b.replace('{{%s}}' % mk, img(n, n.replace('-', ' ')))
    else:
        b = inner(read(f'{M}/field-of-polarized-object-structured-notes.html'))
        b = fig_map_svgs(b, [('s2-sphere-field', 'Uniformly polarized sphere'),
                             ('s2-oblique-tube', 'Oblique cut of a polarized tube'),
                             ('s2-pillbox-divergence', 'Diverging polarization'),
                             ('s2-averaging-sphere', 'Averaging sphere')])
        for anchor, n, cap in [
            ('<h3>1.2 Rewrite using a gradient</h3>', 's2-dipole-sum', 'Geometry of Eq. 4.9.'),
            ('<h2>2. Worked example', 's2-derivation-flow', 'Derivation chain, Eq. 4.9 to Eq. 4.13.'),
            ('<h3>3.2 Amount of bound charge at a flat end</h3>', 's2-dipole-chain', 'Chain of dipoles.')]:
            assert b.count(anchor) == 1, anchor
            b = b.replace(anchor, f'<figure class="fig">{img(n, cap)}<figcaption>{H.escape(cap)}</figcaption></figure>\n' + anchor)
    return b

def sec43(kind):
    if kind == 'student':
        b = read(f'{PARTS}/s43-student.body.html')
        b = re.sub(r'^\s*<section[^>]*>', '', b); b = re.sub(r'</section>\s*$', '', b)
        b = re.sub(r'^\s*<h2[^>]*>.*?</h2>', '', b, count=1, flags=re.S)
        b = re.sub(r'^\s*<p class="bg">.*?</p>', lambda m: m.group(0), b, count=1, flags=re.S)
        b = re.sub(r'\{\{FIG:s43-wire-insulation\}\}', '{{FIG:s43-wire-insulation}}', b)
        return markers(b)
    b = inner(read(f'{M}/section3-structured.html'))
    b = re.sub(r'<h1[^>]*>.*?</h1>', '', b, count=1, flags=re.S)
    b = re.sub(r'<div class="meta">.*?</div>', '', b, count=1, flags=re.S)
    b = fig_map_svgs(b, [('s43-wire-insulation', 'Wire with insulation and Gaussian cylinder')])
    b = b.replace('Placeholder sketch for Example 4.4. To be replaced by the Codex version.', 'Wire with insulation and a cylindrical Gaussian surface (Example 4.4).')
    anchor = '<h3>6.1 Normal component of D</h3>'
    assert b.count(anchor) == 1
    b = b.replace(anchor, f'<figure class="fig">{img("s43-bc-pillbox", "Pillbox across an interface")}<figcaption>Pillbox across an interface: the normal jump in D equals the free surface charge.</figcaption></figure>\n' + anchor)
    return b

def part(name, kind):
    b = read(f'{PARTS}/{name}-{kind}.body.html')
    b = re.sub(r'^\s*<section[^>]*>', '', b); b = re.sub(r'</section>\s*$', '', b)
    b = re.sub(r'^\s*<h2[^>]*>.*?</h2>', '', b, count=1, flags=re.S)
    return b

SECTIONS = [
  ('4.1', 'Polarization', lambda k: sec41(k)),
  ('4.2', 'The field of a polarized object', lambda k: sec42(k)),
  ('4.3', 'The electric displacement', lambda k: sec43(k)),
  ('4.4', 'Linear dielectrics', lambda k: markers(tables(part('s44', k)))),
  ('6.1', 'Magnetization', lambda k: markers(part('s61', k))),
  ('6.2', 'The field of a magnetized object', lambda k: markers(part('s62', k))),
  ('6.3', 'The auxiliary field H', lambda k: markers(part('s63', k))),
  ('6.4', 'Linear and nonlinear media', lambda k: markers(tables(part('s64', k)))),
]

CSS = read(S + '/s2-student-template.html')
CSS = re.search(r'<style>(.*?)</style>', CSS, flags=re.S).group(1)
CSS += '''
  .eq { margin:8px 0; text-align:center; }
  .box-res, .result { background:#E9F7EF; border-left:4px solid var(--res); padding:6px 10px; margin:8px 0; }
  .box-eq { background:#EAF2F8; border-left:4px solid var(--eq); padding:6px 10px; margin:8px 0; }
  .fig { margin:12px 0; text-align:center; break-inside:avoid; }
  .fig img, img { display:block; width:100%; max-width:340px; height:auto; margin:0 auto; }
  .fig figcaption { font-size:10.5pt; color:var(--muted); font-style:italic; margin-top:3px; }
  .pending { border:1px dashed var(--rule); padding:12px; color:var(--muted); font-style:italic; text-align:center; }
  table.data { border-collapse:collapse; width:100%; font-size:11pt; margin:8px 0; }
  table.data th, table.data td { border:1px solid var(--rule); padding:4px 6px; text-align:left; }
  table.data th { background:#EEF2F6; }
  .cap { font-size:10.5pt; color:var(--muted); margin:6px 0 2px; }
  section.module-sec { margin-top: 14px; }
  .sec-body { column-count: 2; column-gap: 22px; column-rule: 1px solid var(--rule); }
  .sec-body .eq, .sec-body .box-res, .sec-body .box-eq, .sec-body .result { break-inside: avoid; }
  .sec-body .eq { font-size: 0.93em; }
  .sec-body .fig { break-inside: avoid; }
  .sec-body .fig img { max-height: 170px; max-width: 100%; width: auto; }
  .sec-body .fig.wide img { max-height: 170px; max-width: 100%; width: auto; }
  .sec-body h3, .sec-body h4, .sec-body h5 { break-after: avoid; }
  .sec-body li, .sec-body p { break-inside: auto; }
  .toc a { color:var(--eq); }
  .cover { border-bottom:3px solid var(--eq); margin-bottom:12px; padding-bottom:8px; }

'''

from PIL import Image as _PI
def _width(src):
    p = M + '/' + src
    try: return _PI.open(p).size[0]
    except Exception: return 0

_TAGS = r'(?:b|i|u|s|p|a|em|sup|sub|span|div|br|hr|li|ul|ol|td|tr|th|table|h[1-6]|img|figure|figcaption|section|main|body|html|script|style|svg|path|circle|line|text|polygon|marker|defs|g|strong|label)'
def escape_math_lt(body):
    """Raw '<' inside $...$ is read by the browser as a tag start (e.g. '$r<b$' opens <b>).
    Escape every '<' inside math that does not start a real tag."""
    def fix_math(m):
        seg = m.group(0)
        return re.sub(r'<(?!/)(?!' + _TAGS + r'(?:[\s>/]|$))', r' \\lt ', seg)
    return re.sub(r'\$[^$]*\$', fix_math, body)

_GREEK = {'rho':'ρ','sigma':'σ','epsilon':'ε','theta':'θ','mu':'μ','chi':'χ','lambda':'λ','pi':'π','phi':'φ','omega':'ω'}
def caption_math_to_text(s):
    """Captions are plain text: turn simple $...$ math into HTML (no MathJax), so it cannot scale up."""
    def conv(m):
        x = m.group(1)
        x = re.sub(r'\\(?:text|mathbf|mathrm|boldsymbol|hat|mathcal)\{([^}]*)\}', r'\1', x)
        x = re.sub(r'\\(?:lt)\b', '&lt;', x)
        x = re.sub(r'\\(?:gt)\b', '&gt;', x)
        x = re.sub(r'\\([A-Za-z]+)', lambda k: _GREEK.get(k.group(1), k.group(1)), x)
        x = re.sub(r'_\{([^}]*)\}', r'<sub>\1</sub>', x)
        x = re.sub(r'_([A-Za-z0-9]+)', r'<sub>\1</sub>', x)
        x = x.replace('{','').replace('}','').replace('\\,',' ')
        return x
    return re.sub(r'\$([^$]*)\$', conv, s)

def tidy(body, counter):
    body = escape_math_lt(body)
    def cap(m):
        txt = m.group(1)
        txt = re.sub(r'^\s*Figure\s+[A-Z0-9.]+\.?\s*', '', txt)
        txt = re.sub(r'^\s*My sketch of\s*', '', txt)
        txt = re.sub(r'\s*Placeholder[^.]*\.?', '', txt)
        txt = re.sub(r'\s*To be replaced[^.]*\.?', '', txt)
        txt = re.sub(r'\s*\(placeholder[^)]*\)', '', txt)
        counter[0] += 1
        txt = caption_math_to_text(txt.strip())
        if txt: txt = txt[0].upper() + txt[1:]
        return f'<figcaption>Figure {counter[0]}. {txt}</figcaption>'
    body = re.sub(r'<figcaption>(.*?)</figcaption>', cap, body, flags=re.S)
    def wrap(m):
        block = m.group(0)
        src = re.search(r'src="([^"]+)"', block)
        w = _width(src.group(1)) if src else 0
        cls = 'fig wide' if w >= 520 else 'fig'
        return re.sub(r'class="fig"', f'class="{cls}"', block, count=1)
    body = re.sub(r'<(?:div|figure) class="fig">.*?</(?:div|figure)>', wrap, body, flags=re.S)
    return body

def build(kind, out_name, title, subtitle):
    parts = []
    toc = []
    counter = [0]
    for num, name, fn in SECTIONS:
        sid = 's' + num.replace('.', '')
        body = tidy(demote(drop_title(fn(kind))), counter)
        toc.append(f'<li><a href="#{sid}">Section {num} · {name}</a></li>')
        parts.append(f'<section class="module-sec" id="{sid}"><h2 class="sec-title">Section {num} · {name}</h2>\n<div class="sec-body">\n{body}\n</div>\n</section>')
    head = f'''<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<script>window.MathJax = {{ tex: {{ inlineMath: [['$','$'], ['\\\\(','\\\\)']] }}, svg: {{ fontCache: 'global' }} }};</script>
<script async src="https://cdn.jsdelivr.net/npm/mathjax@3.2.2/es5/tex-svg.js"></script>
<style>@page {{ size: A4; margin: 16mm; }}
{CSS}
</style></head><body><main>
<div class="cover"><h1>{title}</h1><div class="meta">{subtitle}</div></div>
<div class="toc"><h2>Contents</h2><ol>{''.join(toc)}</ol></div>
{''.join(parts)}
</main></body></html>
'''
    open(f'{M}/{out_name}.html', 'w', encoding='utf-8').write(head)
    print('wrote', out_name, len(head))

if __name__ == '__main__':
    kind = sys.argv[1]
    if kind == 'student':
        build('student', 'electrodynamics-module1-study',
              'Electrodynamics II, Module 1: study notes',
              'Electric and magnetic fields in matter (Griffiths 5th ed. excerpt, pp. 166–208 and 268–297). Student reading notes in my own words; the book is the reference. Figures are image-generated sketches.')
    else:
        build('structured', 'electrodynamics-module1-structured',
              'Electrodynamics II, Module 1: structured notes',
              'Electric and magnetic fields in matter (Griffiths 5th ed. excerpt, pp. 166–208 and 268–297). Structured revision notes; equation numbers match the book. Figures are image-generated sketches.')
    print('missing images:', sorted(set(missing)))

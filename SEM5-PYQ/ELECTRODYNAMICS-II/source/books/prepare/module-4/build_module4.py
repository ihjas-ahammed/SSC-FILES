"""Build the Module 4 notes from topic bodies (module-2 build, adapted for Module 3).
Usage: python3 build_module4.py [codex|svg] [section1]
Figures: {{FIG:name}} in a body is replaced by the cleaned Codex image (final/name.jpg) in codex mode,
or by the SVG draft (diagrams/name.svg) in svg mode. A missing figure stops the build.
"""
import os, re, sys
M = os.path.dirname(os.path.abspath(__file__))
TEMPLATE = M + '/../module-1/parts/s2-student-template.html'
css = re.search(r'<style>(.*?)</style>', open(TEMPLATE, encoding='utf-8').read(), flags=re.S).group(1)
MODE = sys.argv[1] if len(sys.argv) > 1 else 'codex'
WHAT = sys.argv[2] if len(sys.argv) > 2 else 'section1'

CAP = {
 'm4-s1-circuit': 'Fig. 12.1 (book): inductance L and resistance R in series with a cell E and key K. Schematic.',
 'm4-s1-growth': 'Fig. 12.2 (book): current I/I0 against time for low, medium and large L/R. Drawn from I = I0(1 − e^(−Rt/L)).',
 'm4-s1-decay': 'Fig. 12.3 (book): decay of current I = I0 e^(−Rt/L) against time. At t = L/R the current is I0/e.',
 'm4-s1-gd': 'Fig. 12.5 (book): growth and decay curves shown together; they are complementary.',
 'm4-s2-cr-circuit': 'Fig. 12.6 (book): capacitor C, resistance R, Morse key K and cell E in series.',
 'm4-s2-cr-growth': 'Fig. 12.7 (book): charge against time; growth to Q₀ and discharge from Q₀ are complementary.',
 'm4-s2-leak-circuit': 'Fig. 12.8 (book): capacitor C, high resistance R, ballistic galvanometer B.G., cell E and keys K1, K2, K3.',
 'm4-s2-leak-graph': 'Fig. 12.9 (book): straight line of log10(θ0/θ) against t; the slope gives t / log10(θ0/θ).',
 'm4-s2-lc-charge': 'Fig. 12.10 (book): capacitor C and inductance L joined through a Morse key to a cell E.',
 'm4-s2-lc-discharge': 'Fig. 12.11 (book): capacitor C discharging through inductance L with no external emf.',
 'm4-s2-lc-osc': 'Undamped oscillation of charge, Q = Q₀ sin(t/√LC + π/2), period T = 2π√LC (book, §12.5).',
 'm4-s2-lc-energy': 'Energy alternates between the electric field of C and the magnetic field of L (book, §12.5).',
 'm4-s3-coil': 'Fig. 13.1 (book): rectangular coil rotating between poles N and S, with slip rings and resistance R.',
 'm4-s3-sine': 'Fig. 13.2 (book): emf E = E₀ sin ωt against ωt; a sine curve.',
 'm4-s3-cycle': 'Fig. 13.3 (book): one cycle of ac voltage or current, with peak value and the times T/4, T/2, 3T/4, T.',
 'm4-s3-mean': 'Mean value over half a cycle, 0.637 I₀ (book, §13.1, shaded area).',
 'm4-s4-resistor': 'Fig. 13.4 and 13.5 (book): pure resistance; E and I in phase.',
 'm4-s4-inductor': 'Fig. 13.6 and 13.7 (book): pure inductance; current lags the emf by π/2.',
 'm4-s4-capacitor': 'Fig. 13.8 and 13.9 (book): pure capacitance; current leads the emf by π/2.',
 'm4-s4-rl-series': 'Fig. 13.10 (book): R and L in series, with the phasor diagram of I₀R and I₀ωL.',
 'm4-s4-rl-graph': 'Fig. 13.11 (book): emf and current for R and L in series; current lags by θ.',
 'm4-s4-rc-series': 'Fig. 13.12 (book): R and C in series, with the phasor diagram.',
 'm4-s4-rc-graph': 'Fig. 13.13 (book): emf and current for R and C in series; current leads by θ.',
 'm4-s4-j-plane': 'Fig. 13.20 (book): phasors E_R, jE_L and −jE_C; j rotates a phasor by 90°.',
 'm4-s5-lcr-circuit': 'Fig. 13.16 (book): R, L and C in series across E = E₀ sin ωt.',
 'm4-s5-res-curve': 'Figs. 13.17 and 13.18 (book): current against frequency at resonance, for low and high R.',
 'm4-s5-vector': 'Fig. 13.19 (book): vector diagram of the series LCR circuit.',
 'm4-s5-par-circuit': 'Fig. 13.14 (book): parallel L and C across E = E₀ sin ωt.',
 'm4-s5-par-curve': 'Fig. 13.15 and 13.23 (book): current against frequency, minimum at the parallel resonant frequency.',
 'm4-s5-impedance-tri': 'Impedance triangle for series LCR: Z = √(R² + (X_L − X_C)²) (book, §13.3).',
 'm4-s5-vm': 'Voltage magnification at resonance: V_L / E₀ = Q (book, §13.3).',
 'm4-s5-q-bandwidth': 'Sharp and flat resonance curves; a large Q gives a narrow bandwidth (book, §13.3).',
 'm4-s6-inst-power': 'Emf, current and instantaneous power against time; the average power is shown dashed.',
 'm4-s6-pf-triangle': 'Fig. 13.24 (book): power-factor triangle with sides R, ωL − 1/ωC and Z.',
 'm4-s6-wattless': 'Fig. 13.25 (book): I cos φ (power component) and I sin φ (wattless component).',
 'm4-s6-rl-circuit': 'Choke coil with resistance R and inductance L on an AC supply (book, §13.5).',

}
SECTIONS = {
 'section1': ('Section 1: growth and decay of current in an L-R circuit (Murugeshan 12.1, 12.2)', ['m4-s12-1-growth', 'm4-s12-2-decay']),
 'section2': ('Section 2: charge in C-R and L-C circuits; leakage (Murugeshan 12.3 to 12.5)', ['m4-s12-3-cr', 'm4-s12-4-leakage', 'm4-s12-5-lc']),
 'section3': ('Section 3: emf of a rotating coil; mean, r.m.s. and virtual values (Murugeshan 13.1)', ['m4-s3-emf']),
 'section4': ('Section 4: AC circuits with R, L and C; phasors and the j operator (Murugeshan 13.2)', ['m4-s4-ac']),
 'section5': ('Section 5: series LCR and parallel resonance (Murugeshan 13.2(vi), 13.3, 13.4)', ['m4-s5-lcr']),
 'section6': ('Section 6: power in AC circuits (Murugeshan 13.5)', ['m4-s6-power']),

}
META = ('Murugeshan, <i>Electricity and Magnetism</i> (10th ed.), Ch. 12 §12.1 and §12.2 (Module 4, syllabus item 15–16). '
        'Figures are drawn for these notes from the book formulas; the book figure number is in each caption. Problems are not included.')

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
if WHAT == 'module4':
    order = ['section1', 'section2', 'section3', 'section4', 'section5', 'section6']
    for kind, label in KINDS:
        parts = []
        for sec_key in order:
            title, topics = SECTIONS[sec_key]
            parts.append(f'<div class="sec-bar">{title}</div>')
            parts.append(body_for(topics, kind))
        page(f'{label}: Module 4, transient circuits and alternating currents',
             f'{label}: Module 4, transient circuits and alternating currents', '\n'.join(parts),
             f'electrodynamics-module4-{kind}.html')
else:
    title, topics = SECTIONS[WHAT]
    for kind, label in KINDS:
        page(f'{label}: {title}', f'{label}: {title}', body_for(topics, kind), f'electrodynamics-module4-{WHAT}-{kind}.html')
for _line in LONG_LOG: print('  long equation:', _line)

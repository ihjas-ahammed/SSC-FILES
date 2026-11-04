#!/usr/bin/env python3
"""Notation audit: the whole Optics app uses Ghatak's symbols, in every asset.

    python3 tools/audit_notation.py        # exit 1 while anything still uses the old symbols

Ghatak 6e symbols (the concept notes are the source of truth):
  refractive index            n   (never μ — n_1, n_2, n_f, n_g, n_o, n_e, n_L, n_R keep their subscripts)
  film / air-gap thickness    d   (cosine law Δ = 2 n d cos r)
  wedge angle                 θ   (β = λ / 2nθ)
  Newton's rings              order m, radius r_m, D_m² = 4mλR/n
  single-slit width           b   (β = π b sinθ / λ)
  two-slit / grating          slit width b, opaque interval a, element d = a + b; missing orders d/b = m/p
  Fresnel zones / edge        distance to the screen d (r_m = √(mλd))
Checked in: authoring/*.py (except steps.py NF reasons), app/project/optics.*.js (visible labels).
"""
import glob, os, re, sys
ROOT = os.path.dirname(os.path.dirname(os.path.realpath(__file__)))
FILES = sorted(glob.glob(os.path.join(ROOT, 'authoring', '*.py')) + glob.glob(os.path.join(ROOT, 'app', 'project', 'optics.*.js')))
RULES = [
    (r'\\mu(?![a-zA-Z])(?!\s*\\?(?:text\{)?m\b)', 'refractive index written \\mu — use n'),
    (r'μ(?!m)', 'Greek μ used as an index or label — use n (µm units use the micro sign µ)'),
    (r'\\mu_[oeLR]\b', 'μ_o / μ_e / μ_L / μ_R — use n_o, n_e, n_L, n_R'),
    (r'slit (?:of )?width\s+\$?a\b', 'slit width written a — Ghatak uses b'),
    (r'width \$a\$', 'width $a$ — slit width is b (a is the opaque interval)'),
    (r'\bd\s*/\s*a\b|\\frac\{d\}\{a\}|d/a\b', 'ratio d/a — Ghatak writes d/b (missing orders d/b = m/p)'),
    (r'wedge angle\s+\$?\\?alpha', 'wedge angle α — Ghatak uses θ'),
    (r'film thickness\s+\$?t\b|thickness\s+\$t\$\s+and\s+(?:refractive )?index', 'film thickness t — Ghatak uses d'),
]
bad = []
for f in FILES:
    if f.endswith('steps.py'):
        text = re.sub(r"NF\([^\n]*\)", '', open(f, encoding='utf-8').read())
    else:
        text = open(f, encoding='utf-8').read()
    for i, line in enumerate(text.split('\n'), 1):
        for pat, why in RULES:
            m = re.search(pat, line)
            if m:
                bad.append('%s:%d  %s   …%s…' % (os.path.relpath(f, ROOT), i, why, line.strip()[max(0, m.start() - 30):m.end() + 40].replace('\n', ' ')))
print('\n'.join(bad[:400]))
print('\n%d leftover old-notation spots in %d files' % (len(bad), len(set(b.split(':')[0] for b in bad))))
sys.exit(1 if bad else 0)

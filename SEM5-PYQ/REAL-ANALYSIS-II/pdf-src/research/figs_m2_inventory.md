# M2 figure inventory (brief research/content_m2.md section 8 vs figs_m2.py)

Source: research/content_m2.md section 8 (F1 to F16); figs_m2.py (imports figs.py).
"yes" = a function in figs_m2.py draws the figure. "partial" = a function exists but its maths or panels differ from the brief.

| Fig | What it shows (brief) | K## topic | exists in figs_m2.py? |
|---|---|---|---|
| F1 | Secant to tangent: y=x^2 at P=(1,1), secants with h=1, 0.5, 0.25, tangent y=2x-1, label m(h)=2+h | K01 | partial: `secant_tangent` (uses y=0.22x^2+0.4, c=1.4, h=2.2/1.4/0.7; no m(h)=2+h label) |
| F2 | Corner of \|x\|: left panel with one-sided tangents; right panel q(x)=\|x\|/x with open circles at 0 | K02 | partial: `abs_corner` (left panel only; no q(x) right panel) |
| F3 | Caratheodory phi: Panel A f=x^3, c=1, phi=x^2+x+1; Panel B f=\|x\|, c=0, sgn jump | K05 | partial: `caratheodory` (f=x^2/4+0.3, c=1.4, one panel; no Panel B) |
| F4 | Interior extremum: f=2-(x-1)^2 on [0,2], secants left/right, insets f=x and \|x\| | K10 | partial: `interior_ext` (f=1.4+1.1 sin(1.2x-0.3); no insets) |
| F5 | Rolle: f=x(x-1)(x-2), horizontal tangents at 1 -/+ 1/sqrt3 | K11 | partial: `rolle` (different f; `rolle_roots` plots x(x^2-3.2)/4, not the brief's f) |
| F6 | MVT: f=x^3 on [0,2], chord y=4x, tangent at 2/sqrt3; second panel phi=x^3-4x | K12 | partial: `mvt` (uses f=_g, not x^3; no second panel); `mvt_proof` covers the phi idea with another f |
| F7 | f'>0 and monotonicity: f=x^3 on [-2,2], flat point at 0 | K14 | no (`increasing` draws a different f) |
| F8 | First derivative test: f=x^3-3x, max (-1,2), min (1,-2), sign line of f' | K15 | partial: `first_test` (different f, one extremum only; no sign line) |
| F9 | Darboux: Panel A f=x^2, k=1, g=x-x^2 proof picture; Panel B sgn with missing band | K23 | partial: `darboux_jump` (jump function -1/1, shaded band only; no Panel A) |
| F10 | x^2 sin(1/x) and its derivative, envelopes, marked points, isolated (0,0) | K09 | yes: `darboux_fig` (envelopes and f' present; the marked points f'(1/(2n pi))=-1 and f'(1/((2n+1)pi))=+1 are not marked) |
| F11 | sin x <= x: y=x, y=-x, y=sin x on [0,2pi], chord slope 2/pi, parallel tangent at arccos(2/pi), shaded band \|y\|<=x | K19 | partial: `ineq_sin` (on [0,3.3]; no chord, tangent, or band) |
| F12 | e^x >= 1+x: curve, tangent y=1+x, chord 0 to 1 slope e-1, parallel tangent at ln(e-1) | K18 | partial: `ineq_exp` (curve and tangent only; no chord or parallel tangent) |
| F13 | ln bounds on [1,5]: ln x, (x-1)/x, x-1 meeting at (1,0); mark x=2: 0.5<0.693<1 | K18 | no |
| F14 | Gallery of non-differentiability, 4 panels: \|x\|, x^(1/3), CALC-24 Q13 jump (x^2 then 4 sqrt x), x sin(1/x) | K02 | no |
| F15 | Bernoulli: y=(1+x)^(3/2) and tangent y=1+1.5x on [-1,3] | K20 | no |
| F16 | g(x)=x+2x^2 sin(1/x) with line y=x; g'(x) oscillation, g'(0)=1 | K14 | no |

## Figures still missing (no function in figs_m2.py)
- F13 ln bounds (K18)
- F14 gallery of non-differentiability, 4 panels (K02)
- F15 Bernoulli (K20)
- F16 g(x)=x+2x^2 sin(1/x) (K14)
- F7 f'>0 and monotonicity, with f=x^3 (K14). `increasing` exists but draws another f.

Several "partial" entries need rework to match the brief's functions and panels: F1, F2, F3, F4, F5, F6, F8, F9, F11, F12. F10 is the only figure matched in full.

Extra functions in figs_m2.py not in the brief's section 8: `mvt_fail`, `mvt_proof`, `rolle_roots`, `darboux_jump` (used as F9 panel B). `_g`, `_dg`, `_roots` are helpers.

Constants defined in figs_m2.py: `RED = '#c0392b'` (only here; not in figs.py).

## figs.py API for figure authors

Colours (figs.py module constants):
- `BLUE = '#0072B2'` (the function f)
- `ORANGE = '#D55E00'` (epsilon band, secants/chords, dashed)
- `GREEN = '#009E73'` (delta, sign or gap annotations)
- `PINK = '#CC79A7'` (counterexample / bad)
- `GREY = '#9aa1ad'` (guide lines)
- `INK = '#1d2330'` (limit function, dots, axes)
- `AMBER = '#E69F00'` (area and Riemann rectangles)
- `PURPLE = '#6a4fb3'` (tangent, derivative)
- `SKY = '#56B4E9'` (f_n sequence members)
- `FONT` = SVG font-family string (`Inter Variable, Noto Sans, sans-serif`)

Classes and functions:
- `S(w=360, h=200)`: raw SVG canvas; attributes `w, h, o` (list of SVG strings), `defs` (set of marker colours).
- `S.line(x1, y1, x2, y2, c=INK, w=1.6, dash=None, arrow=False, mid=False, op=1)`: straight line in pixel coordinates; `dash` is an SVG dasharray string such as `'5 3'`.
- `S.ray(pts, c=BLUE, w=1.8, dash=None)`: polyline with a mid-segment arrowhead on each segment.
- `S.path(d, c=INK, w=1.6, fill='none', dash=None, op=1)`: raw SVG path `d` string.
- `S.text(x, y, t, c=INK, size=12, anchor='middle', weight=600, italic=False)`: pixel-coordinate text.
- `S.dot(x, y, c=INK, r=2.8)`: filled circle in pixel coordinates.
- `S.rect(x, y, w, h, fill, op=1, rx=0, stroke='none')`: rectangle in pixel coordinates.
- `S.arc(cx, cy, r, a1, a2, c=INK, w=1.2, label=None, lr=None, size=11, lc=None)`: angle arc in degrees, y up.
- `S.objarrow(x, y0, y1, c=INK, dash=None, w=2.4)`: vertical arrow in pixel coordinates.
- `S.svg()`: returns the `<svg>` string with marker defs.
- `Plot(x0, x1, y0, y1, w=360, h=220, pad=(26, 14, 14, 26))`: subclass of S with maths coordinates; `pad` is (left, top, right, bottom).
- `Plot.X(x)` and `Plot.Y(y)`: maths to pixel conversion.
- `Plot.axes(xlab='x', ylab='y', ox=0, oy=0)`: draws axes with arrowheads and labels; `ox`, `oy` set where they cross.
- `Plot.xtick(x, lab=None, c=INK, y=0, size=10, dy=14)` and `Plot.ytick(y, lab=None, c=INK, x=0, size=10, dx=-6)`: tick marks with optional label.
- `Plot.curve(f, a=None, b=None, c=BLUE, w=2.2, dash=None, n=400, op=1, clip=True)`: plots y=f(x); breaks the path where f returns None, NaN, or is off-scale.
- `Plot.pts(xy, c=BLUE, r=2.4)`: dots at a list of (x, y).
- `Plot.hole(x, y, c=BLUE, r=3)`: open circle at (x, y).
- `Plot.hband(ya, yb, c=ORANGE, op=0.14, xa=None, xb=None)`: horizontal shaded band.
- `Plot.vband(xa, xb, c=GREEN, op=0.14, ya=None, yb=None)`: vertical shaded band.
- `Plot.hline(y, c=GREY, w=1.1, dash='4 3', xa=None, xb=None)` and `Plot.vline(x, c=GREY, w=1.1, dash='4 3', ya=None, yb=None)`: guide lines.
- `Plot.seg(xa, ya, xb, yb, c=INK, w=1.6, dash=None, arrow=False)`: segment in maths coordinates.
- `Plot.lab(x, y, t, c=INK, size=11, anchor='middle', weight=600, italic=False, dx=0, dy=0)`: label in maths coordinates.
- `Plot.poly(xy, fill=AMBER, op=0.3, stroke='none', w=1)`: filled polygon from maths points.
- `Plot.area(f, a, b, fill=AMBER, op=0.28, n=200)`: area under f from a to b, down to y=0.
- `Plot.box(xa, xb, h, fill=AMBER, op=0.35, stroke=AMBER)`: Riemann rectangle from y=0 to y=h.
- `Plot.brace_x(xa, xb, y, t, c=GREEN, dy=12, size=11)`: double arrow along x with a label.
- `Plot.brace_y(ya, yb, x, t, c=ORANGE, dx=6, size=11, anchor='start')`: double arrow along y with a label.
- `sub(t)` and `sup(t)`: SVG tspan for subscript and superscript text.
- `legend(s, x, y, items)`: items are `(colour, text, dash)` tuples, 15 px apart.
- `tag(s, x, y, t, c=INK, size=10.5, anchor='start', weight=600)`: text in pixel coordinates.
- `stack(panels, w=360, h=330)`: combines `[(plot, dx, dy), ...]` into one SVG.
- `fig(svg, cap='')`: wraps an SVG and caption in `<figure>`.

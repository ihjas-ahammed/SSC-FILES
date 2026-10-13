"""Module 2 figures: the derivative, Carathéodory, Rolle, MVT, Darboux.
Colours: f blue, tangent purple, chord orange dashed, counterexample pink."""
import math
from figs import *

RED = '#c0392b'


def _g(x):
    return 1.0 + 0.45 * x + 0.55 * math.sin(1.7 * x)


def _dg(x):
    return 0.45 + 0.935 * math.cos(1.7 * x)


def _roots(h, a, b, n=4000):
    xs = [a + (b - a) * i / n for i in range(n + 1)]
    return [(x + y) / 2 for x, y in zip(xs, xs[1:]) if h(x) * h(y) <= 0]


def secant_tangent():
    p = Plot(-0.2, 4.0, -0.2, 4.2, 360, 230, (24, 12, 12, 22))
    f = lambda x: 0.22 * x * x + 0.4
    df = lambda x: 0.44 * x
    c = 1.4
    p.axes()
    for h, op in ((2.2, 0.35), (1.4, 0.55), (0.7, 0.8)):
        x = c + h
        m = (f(x) - f(c)) / h
        p.seg(c - 0.25, f(c) - 0.25 * m, x + 0.25, f(c) + (x + 0.25 - c) * m, ORANGE, 1.3, '5 3')
        p.dot(p.X(x), p.Y(f(x)), ORANGE, 2.8)
    m = df(c)
    p.seg(c - 1.4, f(c) - 1.4 * m, 3.9, f(c) + (3.9 - c) * m, PURPLE, 2.2)
    p.curve(f, 0, 3.9, BLUE, 2.4)
    p.dot(p.X(c), p.Y(f(c)), INK, 3.4)
    p.xtick(c, 'c')
    p.lab(3.85, 3.95, 'chords', ORANGE, 10.5, 'end')
    p.lab(3.85, 1.25, 'tangent: slope f′(c)', PURPLE, 10.5, 'end')
    return fig(p.svg(), 'The derivative. The chord from (c, f(c)) to (x, f(x)) has slope (f(x) − f(c))/(x − c). As x → c the chords turn into the tangent; its slope is f′(c) = lim<sub>x→c</sub> (f(x) − f(c))/(x − c).')


def abs_corner():
    p = Plot(-1.6, 1.6, -0.3, 1.7, 360, 180, (16, 12, 12, 20))
    p.axes()
    p.curve(abs, c=PINK, w=2.6)
    p.seg(0, 0, 1.4, 1.4 * 1, ORANGE, 1.2, '4 3')
    p.lab(0.2, 1.5, 'right chords: slope +1', ORANGE, 10, 'start')
    p.lab(-0.2, 1.5, 'left chords: slope −1', BLUE, 10, 'end')
    p.dot(p.X(0), p.Y(0), INK, 3.4)
    return fig(p.svg(), 'f(x) = |x| at 0: chords from the right have slope +1, from the left −1. The two one-sided limits differ, so f′(0) does not exist, although f is continuous <span class="cx">C5</span>. Continuous does not imply differentiable.')


def caratheodory():
    s = S(360, 330)
    p = Plot(-0.2, 3.6, -0.2, 3.6, 360, 175, (24, 10, 12, 20))
    f = lambda x: 0.25 * x * x + 0.3
    c = 1.4
    p.axes()
    p.curve(f, 0, 3.5, BLUE, 2.4)
    for x in (0.4, 2.4, 3.2):
        p.seg(c, f(c), x, f(x), ORANGE, 1.3, '4 3')
        p.dot(p.X(x), p.Y(f(x)), ORANGE, 2.6)
        p.lab(x, f(x) + 0.25, 'x', ORANGE, 10, italic=True)
    p.dot(p.X(c), p.Y(f(c)), INK, 3.2)
    p.xtick(c, 'c')
    p.lab(0.3, 3.2, 'y = f(x)', BLUE, 11, 'start')
    q = Plot(-0.2, 3.6, -0.2, 1.9, 360, 150, (24, 10, 12, 22))
    phi = lambda x: 0.25 * (x + c)
    q.axes(ylab='φ')
    q.curve(phi, 0, 3.5, ORANGE, 2.4)
    q.dot(q.X(c), q.Y(phi(c)), PURPLE, 4)
    q.hline(phi(c), PURPLE, 1, '3 3', -0.2, c)
    q.xtick(c, 'c')
    q.lab(c + 0.1, phi(c) - 0.28, 'φ(c) = f′(c)', PURPLE, 10.5, 'start')
    q.lab(0.2, 1.6, 'φ(x) = slope of the chord from c to x', ORANGE, 10, 'start')
    d1 = ''.join(p.o)
    d2 = ''.join(q.o)
    defs = set(p.defs) | set(q.defs)
    dd = ''.join(f"<marker id='ah{k}' viewBox='0 0 10 10' refX='7' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0,1 L9,5 L0,9 z' fill='#{k}'/></marker>" for k in defs)
    svg = f"<svg viewBox='0 0 360 330' xmlns='http://www.w3.org/2000/svg'><defs>{dd}</defs>{d1}<g transform='translate(0,178)'>{d2}</g></svg>"
    return fig(svg, "Carathéodory's idea (f(x) = x²/4 + 0.3, c = 1.4). The chord-slope function φ(x) = (f(x) − f(c))/(x − c) has a hole at x = c. f is differentiable at c exactly when that hole can be filled so that φ is <b>continuous</b> at c, and then φ(c) = f′(c). Here φ(x) = (x + c)/4.")


def interior_ext():
    p = Plot(-0.2, 4.4, -0.2, 3.4, 360, 190, (22, 12, 12, 22))
    f = lambda x: 1.4 + 1.1 * math.sin(1.2 * x - 0.3)
    xs = [i / 1000 * 4 for i in range(1001)]
    c = max(xs, key=f)
    p.axes()
    p.curve(f, 0, 4.2, BLUE, 2.4)
    p.seg(c - 1.1, f(c), c + 1.1, f(c), PURPLE, 2)
    p.dot(p.X(c), p.Y(f(c)), INK, 3.4)
    p.xtick(c, 'c')
    p.lab(0.05, 0.25, 'left chords: slope ≥ 0', GREEN, 9.5, 'start')
    p.lab(4.35, 3.2, 'right chords: slope ≤ 0', ORANGE, 9.5, 'end')
    p.lab(c, f(c) + 0.2, 'f′(c) = 0', PURPLE, 10.5)
    return fig(p.svg(), 'Interior extremum theorem. At an interior maximum, chords to the right slope down (≤ 0) and chords to the left slope up (≥ 0). If f′(c) exists it must be both ≥ 0 and ≤ 0, so f′(c) = 0.')


def rolle():
    p = Plot(-0.2, 4.4, -0.3, 3.0, 360, 190, (22, 12, 12, 22))
    a, b = 0.4, 4.0
    f = lambda x: 0.6 + 0.55 * (x - a) * (b - x) * (1 + 0.15 * x) * 0.55
    xs = [a + (b - a) * i / 2000 for i in range(2001)]
    c = max(xs, key=f)
    p.axes()
    p.seg(a, f(a), b, f(b), ORANGE, 1.4, '5 3')
    p.curve(f, a, b, BLUE, 2.4)
    p.seg(c - 1, f(c), c + 1, f(c), PURPLE, 2)
    p.dot(p.X(a), p.Y(f(a)), BLUE, 3)
    p.dot(p.X(b), p.Y(f(b)), BLUE, 3)
    p.dot(p.X(c), p.Y(f(c)), INK, 3.4)
    p.xtick(a, 'a')
    p.xtick(b, 'b')
    p.xtick(c, 'c')
    p.lab(c, f(c) + 0.2, 'f′(c) = 0', PURPLE, 10.5)
    p.lab((a + b) / 2, f(a) - 0.25, 'f(a) = f(b)', ORANGE, 10)
    return fig(p.svg(), "Rolle's theorem. f continuous on [a, b], differentiable on (a, b), f(a) = f(b). Then somewhere in between the tangent is horizontal: f′(c) = 0 for some c ∈ (a, b).")


def mvt():
    p = Plot(-0.2, 4.4, -0.2, 3.6, 360, 210, (22, 12, 12, 22))
    a, b = 0.3, 4.0
    m = (_g(b) - _g(a)) / (b - a)
    cs = _roots(lambda x: _dg(x) - m, a, b)
    p.axes()
    p.seg(a, _g(a), b, _g(b), ORANGE, 1.6, '5 3')
    p.curve(_g, a, b, BLUE, 2.4)
    for c in cs:
        p.seg(c - 0.8, _g(c) - 0.8 * m, c + 0.8, _g(c) + 0.8 * m, PURPLE, 2)
        p.dot(p.X(c), p.Y(_g(c)), INK, 3.2)
        p.xtick(c, 'c')
    p.dot(p.X(a), p.Y(_g(a)), BLUE, 3)
    p.dot(p.X(b), p.Y(_g(b)), BLUE, 3)
    p.xtick(a, 'a')
    p.xtick(b, 'b')
    p.lab(b - 0.1, _g(b) + 0.25, 'chord: slope (f(b) − f(a))/(b − a)', ORANGE, 9.5, 'end')
    p.lab(cs[-1], _g(cs[-1]) - 0.45, 'parallel tangents', PURPLE, 10)
    return fig(p.svg(), 'Mean value theorem: tilted Rolle. Somewhere the tangent is parallel to the chord: f(b) − f(a) = f′(c)(b − a). Here there are two such c. The theorem promises at least one, and says nothing about where.')


def mvt_proof():
    p = Plot(-0.2, 4.4, -1.0, 3.6, 360, 240, (22, 12, 12, 22))
    a, b = 0.3, 4.0
    m = (_g(b) - _g(a)) / (b - a)
    chord = lambda x: _g(a) + m * (x - a)
    phi = lambda x: _g(x) - chord(x)
    p.axes()
    p.seg(a, _g(a), b, _g(b), ORANGE, 1.6, '5 3')
    p.curve(_g, a, b, BLUE, 2.4)
    p.curve(phi, a, b, GREEN, 2.2)
    for x in (1.0, 2.0, 3.2):
        p.seg(x, chord(x), x, _g(x), GREY, 1.2)
    p.lab(4.3, 2.9, 'f', BLUE, 11, 'end')
    p.lab(1.0, -0.85, 'φ = f − chord (0 at a and b)', GREEN, 10.5, 'start')
    return fig(p.svg(), 'Proof idea of the MVT. φ(x) = f(x) − [chord] is the vertical gap (grey) between the graph and the chord. It is 0 at both ends, so Rolle gives φ′(c) = 0, i.e. f′(c) = slope of the chord.')


def mvt_fail():
    p = Plot(-1.3, 1.3, -0.5, 1.4, 360, 170, (16, 12, 12, 18))
    p.axes()
    p.seg(-1, 1, 1, 1, ORANGE, 1.4, '5 3')
    p.curve(abs, -1, 1, PINK, 2.6)
    p.dot(p.X(-1), p.Y(1), PINK, 3)
    p.dot(p.X(1), p.Y(1), PINK, 3)
    p.lab(0, -0.38, 'corner: f′(0) does not exist', PINK, 10)
    p.lab(0, 1.15, 'f(−1) = f(1) but never f′ = 0', ORANGE, 10)
    return fig(p.svg(), 'Why "differentiable on (a, b)" is needed. |x| on [−1, 1] has equal end values, but its slope is only ±1, never 0 <span class="cx">C18</span>.')


def increasing():
    p = Plot(-0.2, 4.4, -0.2, 3.4, 360, 180, (22, 12, 12, 22))
    f = lambda x: 0.4 + 0.65 * x + 0.25 * math.sin(2 * x)
    p.axes()
    p.curve(f, 0.2, 4.2, BLUE, 2.4)
    x1, x2 = 1.2, 3.3
    p.dot(p.X(x1), p.Y(f(x1)), INK, 3)
    p.dot(p.X(x2), p.Y(f(x2)), INK, 3)
    p.seg(x1, f(x1), x2, f(x1), GREY, 1, '3 3')
    p.seg(x2, f(x1), x2, f(x2), GREEN, 2)
    p.xtick(x1, 'x₁')
    p.xtick(x2, 'x₂')
    p.lab(x2 + 0.08, (f(x1) + f(x2)) / 2, 'f′(c)(x₂ − x₁) > 0', GREEN, 10, 'start')
    return fig(p.svg(), "f′ &gt; 0 on an interval ⇒ f is increasing there. MVT: f(x₂) − f(x₁) = f′(c)(x₂ − x₁), and both factors are positive.")


def first_test():
    p = Plot(-0.2, 4.4, -0.2, 3.2, 360, 190, (22, 12, 12, 22))
    f = lambda x: 2.4 - 0.5 * (x - 2.2) ** 2 + 0.1 * (x - 2.2) ** 3
    df = lambda x: -(x - 2.2) + 0.3 * (x - 2.2) ** 2
    c = 2.2
    p.axes()
    p.curve(f, 0.4, 3.9, BLUE, 2.4)
    for x in (0.9, 1.5):
        p.seg(x - 0.35, f(x) - 0.35 * df(x), x + 0.35, f(x) + 0.35 * df(x), GREEN, 1.8)
    for x in (2.9, 3.5):
        p.seg(x - 0.35, f(x) - 0.35 * df(x), x + 0.35, f(x) + 0.35 * df(x), ORANGE, 1.8)
    p.dot(p.X(c), p.Y(f(c)), INK, 3.4)
    p.xtick(c, 'c')
    p.lab(1.1, 2.9, 'f′ ≥ 0', GREEN, 11)
    p.lab(3.3, 2.9, 'f′ ≤ 0', ORANGE, 11)
    p.lab(c, f(c) + 0.25, 'max', INK, 10)
    return fig(p.svg(), 'First derivative test. f′ ≥ 0 just left of c and f′ ≤ 0 just right of c ⇒ f has a relative maximum at c. (Reverse signs: minimum.) f need not be differentiable at c itself, only continuous.')


def darboux_fig():
    s = S(360, 330)
    p = Plot(-0.32, 0.32, -0.11, 0.11, 360, 160, (16, 10, 12, 16))
    p.axes()
    p.curve(lambda x: x * x * math.sin(1 / x) if abs(x) > 1e-4 else 0, c=BLUE, w=1.5, n=5000)
    p.curve(lambda x: x * x, c=ORANGE, w=1, dash='3 3')
    p.curve(lambda x: -x * x, c=ORANGE, w=1, dash='3 3')
    p.lab(0.3, 0.085, 'f(x) = x² sin(1/x), f(0) = 0', BLUE, 10, 'end')
    q = Plot(-0.32, 0.32, -1.5, 1.5, 360, 160, (16, 10, 12, 16))
    q.axes(ylab="f′")
    q.curve(lambda x: 2 * x * math.sin(1 / x) - math.cos(1 / x) if abs(x) > 3e-3 else None, c=PURPLE, w=1.1, n=6000)
    q.dot(q.X(0), q.Y(0), INK, 3.4)
    q.lab(0.31, 1.25, 'f′ wiggles near 0', PURPLE, 10, 'end')
    q.lab(0.02, -0.25, 'f′(0) = 0', INK, 10, 'start')
    d1, d2 = ''.join(p.o), ''.join(q.o)
    defs = set(p.defs) | set(q.defs)
    dd = ''.join(f"<marker id='ah{k}' viewBox='0 0 10 10' refX='7' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0,1 L9,5 L0,9 z' fill='#{k}'/></marker>" for k in defs)
    svg = f"<svg viewBox='0 0 360 330' xmlns='http://www.w3.org/2000/svg'><defs>{dd}</defs>{d1}<g transform='translate(0,168)'>{d2}</g></svg>"
    return fig(svg, 'x² sin(1/x) is differentiable everywhere (f′(0) = 0, squeezed by ±x²), but f′ is <b>not continuous</b> at 0 <span class="cx">C6</span>. Even so, by Darboux, f′ still takes every value between any two of its values: a derivative can wiggle, but it can never <b>jump</b>.')


def darboux_jump():
    p = Plot(-1.5, 1.5, -1.5, 1.5, 360, 160, (16, 12, 12, 16))
    p.axes(ylab='g')
    p.seg(-1.5, -1, 0, -1, PINK, 2.4)
    p.seg(0, 1, 1.5, 1, PINK, 2.4)
    p.hole(0, -1, PINK)
    p.dot(p.X(0), p.Y(1), PINK, 3.2)
    p.hband(-0.9, 0.9, GREY, 0.1, -1.5, 1.5)
    p.lab(0.1, 0.35, 'values in (−1, 1) skipped', PINK, 10, 'start')
    return fig(p.svg(), 'A jump function (−1 for x &lt; 0, 1 for x ≥ 0) skips all values between −1 and 1. By Darboux it can <b>not</b> be the derivative of any function on an interval.')


def ineq_sin():
    p = Plot(-0.1, 3.4, -0.2, 3.4, 360, 200, (22, 12, 12, 22))
    p.axes()
    p.curve(lambda x: x, 0, 3.3, ORANGE, 1.8, '5 3')
    p.curve(math.sin, 0, 3.3, BLUE, 2.4)
    p.lab(2.6, 2.95, 'y = x', ORANGE, 11)
    p.lab(2.95, 0.5, 'y = sin x', BLUE, 11)
    x = 2.0
    p.seg(x, math.sin(x), x, x, GREEN, 2)
    p.lab(x + 0.08, (x + math.sin(x)) / 2, 'gap ≥ 0', GREEN, 10, 'start')
    return fig(p.svg(), 'Inequalities from the MVT: sin x ≤ x for x ≥ 0. Apply the MVT to sin on [0, x]: sin x − sin 0 = (cos c)·x ≤ x, since cos c ≤ 1.')


def ineq_exp():
    p = Plot(-1.6, 1.6, -0.3, 4.4, 360, 200, (16, 12, 12, 20))
    p.axes()
    p.curve(math.exp, c=BLUE, w=2.4)
    p.curve(lambda x: 1 + x, c=PURPLE, w=1.8)
    p.dot(p.X(0), p.Y(1), INK, 3.2)
    p.lab(1.15, 3.9, 'eˣ', BLUE, 12)
    p.lab(1.55, 1.95, 'y = 1 + x', PURPLE, 11, 'end')
    return fig(p.svg(), 'eˣ ≥ 1 + x for all x, with equality only at 0. The line 1 + x is the tangent at 0, and the curve always lies above it. Proof: MVT on [0, x] (or [x, 0]).')


def rolle_roots():
    p = Plot(-2.4, 2.4, -2.6, 2.6, 360, 190, (16, 12, 12, 16))
    f = lambda x: 0.25 * x * (x * x - 3.2)
    df = lambda x: 0.25 * (3 * x * x - 3.2)
    p.axes()
    p.curve(f, -2.3, 2.3, BLUE, 2.4)
    r = math.sqrt(3.2)
    for x in (-r, 0, r):
        p.dot(p.X(x), p.Y(0), BLUE, 3.4)
    cr = math.sqrt(3.2 / 3)
    for x in (-cr, cr):
        p.seg(x - 0.5, f(x), x + 0.5, f(x), PURPLE, 2)
        p.dot(p.X(x), p.Y(f(x)), PURPLE, 3)
    p.lab(2.3, 2.2, 'roots of f (blue)', BLUE, 10, 'end')
    p.lab(2.3, 1.75, 'roots of f′ between them', PURPLE, 10, 'end')
    return fig(p.svg(), 'Counting roots with Rolle. Between two roots of f there is a root of f′. So if f′ has at most k roots, f has at most k + 1.')


def sin_recip():
    p = Plot(-0.12, 0.42, -1.5, 1.5, 360, 190, (16, 10, 12, 16))
    p.axes(ylab='y')
    p.curve(lambda x: math.cos(1 / x) if x > 1e-3 else None, a=0.035, b=0.42, c=BLUE, w=1.2, n=6000)
    p.dot(p.X(1 / (2 * math.pi)), p.Y(1), GREEN, 3.2)
    p.dot(p.X(1 / (3 * math.pi)), p.Y(-1), PINK, 3.2)
    p.lab(0.2, 1.3, 'cos(1/x): 1 at x = 1/(2nπ), −1 at x = 1/((2n+1)π)', BLUE, 10, 'middle')
    p.lab(0.02, -1.35, 'no limit at 0', INK, 10, 'start')
    return fig(p.svg(), 'cos(1/x) takes the values 1 and −1 at points that crowd into 0, so it has no limit at 0. This is why a product law cannot be applied to a term like $x\\cos(1/x)$ without a squeeze.')


def x_sin_recip():
    p = Plot(-0.25, 0.25, -0.3, 0.3, 360, 200, (16, 10, 12, 16))
    p.axes()
    p.curve(lambda x: x if x > 0 else x, c=ORANGE, w=1, dash='3 3', n=2)
    p.curve(lambda x: -x, c=ORANGE, w=1, dash='3 3', n=2)
    p.curve(lambda x: x * math.sin(1 / x) if abs(x) > 1e-4 else 0, c=BLUE, w=1.4, n=6000)
    p.dot(p.X(0), p.Y(0), INK, 3)
    p.lab(0.2, 0.25, 'y = ±x', ORANGE, 10, 'end')
    p.lab(0.16, -0.22, 'x·sin(1/x) → 0', BLUE, 10, 'end')
    return fig(p.svg(), 'x·sin(1/x) is squeezed between −|x| and |x|, so it tends to 0 even though sin(1/x) has no limit. This is the squeeze step used to show that f′(0) = 0 in the x² sin(1/x) example.')


def xsin_deriv():
    return darboux_fig()


def sin_recip():
    p = Plot(-0.12, 0.42, -1.5, 1.5, 360, 190, (16, 10, 12, 16))
    p.axes(ylab='y')
    p.curve(lambda x: math.cos(1 / x) if x > 1e-3 else None, a=0.035, b=0.42, c=BLUE, w=1.2, n=6000)
    p.dot(p.X(1 / (2 * math.pi)), p.Y(1), GREEN, 3.2)
    p.dot(p.X(1 / (3 * math.pi)), p.Y(-1), PINK, 3.2)
    p.lab(0.2, 1.3, 'cos(1/x): 1 at x = 1/(2nπ), −1 at x = 1/((2n+1)π)', BLUE, 10, 'middle')
    p.lab(0.02, -1.35, 'no limit at 0', INK, 10, 'start')
    return fig(p.svg(), 'cos(1/x) takes the values 1 and −1 at points that crowd into 0, so it has no limit at 0. This is why a product law cannot be applied to a term like $x\\cos(1/x)$ without a squeeze.')


def x_sin_recip():
    p = Plot(-0.25, 0.25, -0.3, 0.3, 360, 200, (16, 10, 12, 16))
    p.axes()
    p.curve(lambda x: x, c=ORANGE, w=1, dash='3 3', n=2)
    p.curve(lambda x: -x, c=ORANGE, w=1, dash='3 3', n=2)
    p.curve(lambda x: x * math.sin(1 / x) if abs(x) > 1e-4 else 0, c=BLUE, w=1.4, n=6000)
    p.dot(p.X(0), p.Y(0), INK, 3)
    p.lab(0.2, 0.25, 'y = ±x', ORANGE, 10, 'end')
    p.lab(0.16, -0.22, 'x·sin(1/x) → 0', BLUE, 10, 'end')
    return fig(p.svg(), 'x·sin(1/x) is squeezed between −|x| and |x|, so it tends to 0 even though sin(1/x) has no limit. This is the squeeze step used to show that f′(0) = 0 in the x² sin(1/x) example.')


def xsin_deriv():
    return darboux_fig()

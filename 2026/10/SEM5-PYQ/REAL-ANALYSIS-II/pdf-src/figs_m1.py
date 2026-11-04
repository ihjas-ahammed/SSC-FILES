"""Module 1 figures: continuity, continuity on intervals, uniform continuity.
Colours: f blue, ε orange band, δ green window, counterexample pink (see figs.py)."""
import math
from figs import *

E, D = 'ε', 'δ'
RED = '#c0392b'


def _f1(x):
    return 0.35 * x * x + 0.6


def eps_delta():
    """the definition: δ-window inside, graph stays inside ε-band"""
    p = Plot(-0.2, 3.2, -0.1, 3.4, 360, 230, (30, 12, 70, 26))
    c, eps = 1.6, 0.45
    fc = _f1(c)
    # largest δ that works on the right side (f increasing): f(c+δ)=fc+eps
    dl = c - math.sqrt((fc - eps - 0.6) / 0.35)
    dr = math.sqrt((fc + eps - 0.6) / 0.35) - c
    d = min(dl, dr) * 0.92
    p.hband(fc - eps, fc + eps, ORANGE, 0.13)
    p.vband(c - d, c + d, GREEN, 0.15)
    p.axes()
    p.curve(_f1, c=BLUE, op=0.45)
    p.curve(_f1, c - d, c + d, BLUE, 3.4)
    p.hline(fc, GREY, 1, '3 3', 0, c)
    p.vline(c, GREY, 1, '3 3', 0, fc)
    p.dot(p.X(c), p.Y(fc), INK, 3.2)
    p.xtick(c, 'c')
    p.ytick(fc, 'f(c)', x=-0.2, dx=-4)
    p.brace_y(fc, fc + eps, 3.08, E, ORANGE, 5)
    p.brace_y(fc - eps, fc, 3.08, E, ORANGE, 5)
    p.brace_x(c - d, c, 0.25, D, GREEN, -6)
    p.brace_x(c, c + d, 0.25, D, GREEN, -6)
    tag(p, 295, 30, 'ε-band', ORANGE, 10.5)
    tag(p, 295, 44, '(you are given)', ORANGE, 9)
    tag(p, 295, 150, 'δ-window', GREEN, 10.5)
    tag(p, 295, 164, '(you choose)', GREEN, 9)
    return fig(p.svg(), 'Continuity at c. Someone gives you a band of half-height ε round f(c). You must find a window of half-width δ round c so that the graph above the window (thick part) stays inside the band. Possible for <b>every</b> ε → continuous at c.')


def eps_delta_bad():
    p = Plot(-0.2, 3.2, -0.1, 3.4, 360, 200, (30, 12, 70, 26))
    c, eps, d = 1.6, 0.45, 0.9
    fc = _f1(c)
    p.hband(fc - eps, fc + eps, ORANGE, 0.13)
    p.vband(c - d, c + d, PINK, 0.15)
    p.axes()
    p.curve(_f1, c=BLUE, op=0.45)
    p.curve(_f1, c - d, c + d, BLUE, 3.2)
    xr = math.sqrt((fc + eps - 0.6) / 0.35)
    p.curve(_f1, xr, c + d, RED, 3.6)
    xl = math.sqrt(max(fc - eps - 0.6, 0) / 0.35)
    p.curve(_f1, c - d, xl, RED, 3.6)
    p.dot(p.X(c), p.Y(fc), INK, 3.2)
    p.xtick(c, 'c')
    tag(p, 292, 34, 'δ too big:', RED, 10.5)
    tag(p, 292, 48, 'graph leaves', RED, 10)
    tag(p, 292, 61, 'the band', RED, 10)
    return fig(p.svg(), 'A window that is too wide fails (red parts leave the band). That proves nothing: you are allowed to shrink δ. Continuity fails only if <b>no</b> δ works.')


def jump():
    """sgn-type jump: with ε = 1/2 no δ works"""
    p = Plot(-1.6, 1.6, -1.5, 1.5, 360, 200, (20, 12, 14, 18))
    eps = 0.5
    p.hband(1 - eps, 1 + eps, ORANGE, 0.13)
    p.vband(-0.35, 0.35, GREEN, 0.14)
    p.axes()
    p.seg(-1.6, -1, 0, -1, BLUE, 2.6)
    p.seg(0, 1, 1.6, 1, BLUE, 2.6)
    p.hole(0, -1)
    p.dot(p.X(0), p.Y(1), BLUE, 3.4)
    p.seg(-0.35, -1, 0, -1, RED, 3.6)
    p.hole(0, -1, RED)
    p.lab(0.06, 1.25, 'f(0) = 1', BLUE, 10.5, 'start')
    p.lab(-0.4, -0.72, 'these points', RED, 10, 'end')
    p.lab(-0.4, -0.52, 'never enter', RED, 10, 'end')
    p.lab(-0.4, -1.34, 'whatever δ', GREEN, 10, 'end')
    p.lab(1.55, 1.38, 'band 1 ± ½', ORANGE, 10, 'end')
    return fig(p.svg(), 'A jump at 0 (f = −1 for x &lt; 0, f = 1 for x ≥ 0). Take ε = ½. Every window round 0 contains points with x &lt; 0, where f = −1, far outside the band. So f is <b>not</b> continuous at 0.')


def seq_criterion():
    p = Plot(-0.15, 1.15, -0.4, 1.5, 360, 200, (22, 12, 14, 22))
    p.axes()
    p.seg(-0.15, 0, 0, 0, BLUE, 2.4)
    p.seg(0, 1, 1.15, 1, BLUE, 2.4, )
    p.hole(0, 1)
    p.dot(p.X(0), p.Y(0), BLUE, 3.4)
    xs = [1 / n for n in range(1, 9)]
    for x in xs:
        p.vline(x, GREY, 0.8, '2 3', 0, 1)
        p.dot(p.X(x), p.Y(0), GREEN, 2.6)
        p.dot(p.X(x), p.Y(1), ORANGE, 2.6)
    for n in (1, 2, 3):
        p.lab(1 / n, -0.2, f'x{sub(n)}', GREEN, 10.5)
    p.lab(0.62, 1.22, f'f(x{sub("n")}) = 1 → 1', ORANGE, 11)
    p.lab(0.03, -0.25, 'f(0) = 0', BLUE, 10.5, 'start')
    p.lab(0.52, 0.42, f'x{sub("n")} = 1/n → 0', GREEN, 11)
    return fig(p.svg(), 'Sequential criterion. Points x<sub>n</sub> = 1/n march to 0, but the values f(x<sub>n</sub>) = 1 stay away from f(0) = 0. One such sequence is enough to show f is not continuous at 0.')


def thomae():
    p = Plot(-0.03, 1.05, -0.05, 0.6, 360, 210, (24, 12, 12, 22))
    p.axes()
    seen = set()
    for q in range(2, 41):
        for k in range(1, q):
            if math.gcd(k, q) == 1:
                x = k / q
                if x not in seen:
                    seen.add(x)
                    p.dot(p.X(x), p.Y(1 / q), BLUE, max(0.8, 2.6 - q * 0.06))
    p.seg(-0.03, 0, 1.05, 0, SKY, 2.4)
    for x, t in ((0.5, '½'), (1 / 3, '⅓'), (0.25, '¼')):
        p.xtick(x, t, size=9)
    p.ytick(0.5, '½', size=9)
    p.ytick(1 / 3, '⅓', size=9)
    p.lab(0.62, 0.53, 'h(p/q) = 1/q', BLUE, 11, 'start')
    p.lab(0.62, 0.45, 'h = 0 at irrationals', SKY, 10.5, 'start')
    return fig(p.svg(), "Thomae's function on (0,1) (the book's h). Only finitely many dots are higher than any given ε, so near an irrational point the graph is within ε of 0: <b>continuous at every irrational, discontinuous at every rational</b>.")


def dirichlet():
    p = Plot(-0.05, 1.05, -0.35, 1.4, 360, 160, (22, 12, 12, 20))
    p.axes()
    import random
    random.seed(4)
    for k in range(120):
        x = random.random()
        p.dot(p.X(x), p.Y(1), BLUE, 1.6)
        p.dot(p.X(random.random()), p.Y(0), PINK, 1.6)
    p.lab(1.02, 1.12, 'f = 1 on rationals', BLUE, 10.5, 'end')
    p.lab(1.02, 0.12, 'f = 0 on irrationals', PINK, 10.5, 'end')
    return fig(p.svg(), "Dirichlet's function (a cartoon: both sets are dense, so the real picture is two 'full' lines). Every window round any c contains points of both kinds, so the values jump between 0 and 1: <b>continuous nowhere</b>.")


def sin_recip():
    p = Plot(-0.02, 0.62, -1.35, 1.5, 360, 200, (22, 12, 12, 18))
    p.axes()
    p.curve(lambda x: math.sin(1 / x) if x > 0.004 else None, 0.004, 0.62, BLUE, 1.4, n=5000)
    for n in range(1, 6):
        xn = 1 / (n * math.pi)
        yn = 2 / ((4 * n + 1) * math.pi)
        p.dot(p.X(xn), p.Y(0), GREEN, 3)
        p.dot(p.X(yn), p.Y(1), ORANGE, 3)
    p.lab(0.35, 1.25, f'y{sub("n")} = 2/((4n+1)π): f = 1', ORANGE, 10.5, 'start')
    p.lab(0.35, -1.2, f'x{sub("n")} = 1/(nπ): f = 0', GREEN, 10.5, 'start')
    return fig(p.svg(), 'sin(1/x) wiggles faster and faster near 0. Two sequences tending to 0 give different limits (0 and 1), so no value at 0 can make it continuous there.')


def x_sin_recip():
    p = Plot(-0.42, 0.42, -0.45, 0.45, 360, 200, (16, 12, 12, 16))
    p.axes()
    p.curve(lambda x: abs(x), c=ORANGE, w=1.3, dash='4 3')
    p.curve(lambda x: -abs(x), c=ORANGE, w=1.3, dash='4 3')
    p.curve(lambda x: x * math.sin(1 / x) if abs(x) > 1e-4 else 0, c=BLUE, w=1.6, n=6000)
    p.dot(p.X(0), p.Y(0), INK, 3.2)
    p.lab(0.4, 0.36, 'y = |x|', ORANGE, 10.5, 'end')
    p.lab(0.4, -0.4, 'y = −|x|', ORANGE, 10.5, 'end')
    return fig(p.svg(), 'x sin(1/x) (value 0 at 0) is trapped between −|x| and |x|. So |f(x) − 0| ≤ |x| &lt; ε when |x| &lt; δ = ε: <b>continuous at 0</b>, although it wiggles infinitely often.')


def ivt():
    p = Plot(-0.2, 4.4, -0.3, 3.4, 360, 210, (24, 12, 14, 22))
    f = lambda x: 0.18 * (x - 0.5) * (x - 2.2) * (x - 3.6) * 1.4 + 0.1 * x + 1.2
    a, b = 0.3, 4.1
    k = 1.35
    p.axes()
    p.hline(k, ORANGE, 1.3, '5 3')
    p.curve(f, a, b, BLUE, 2.4)
    p.dot(p.X(a), p.Y(f(a)), BLUE, 3)
    p.dot(p.X(b), p.Y(f(b)), BLUE, 3)
    # find crossings
    xs = [a + (b - a) * i / 4000 for i in range(4001)]
    cs = [x for x, y in zip(xs, xs[1:]) if (f(x) - k) * (f(y) - k) <= 0]
    for cc in cs:
        p.vline(cc, GREEN, 1.1, '3 3', 0, k)
        p.dot(p.X(cc), p.Y(k), GREEN, 3.4)
    p.xtick(a, 'a')
    p.xtick(b, 'b')
    p.lab(cs[0], k - 0.35, 'c', GREEN, 11)
    p.ytick(k, 'k', ORANGE, x=-0.2, dx=-4)
    p.lab(a, f(a) - 0.3, 'f(a)', BLUE, 10)
    p.lab(b, f(b) + 0.2, 'f(b)', BLUE, 10)
    return fig(p.svg(), "Bolzano's intermediate value theorem. f is continuous on [a, b] and k lies between f(a) and f(b), so the graph must cross the line y = k at least once: some c has f(c) = k. (There may be several c, as here.)")


def bisection():
    p = Plot(-0.08, 1.12, -2.3, 1.2, 360, 250, (28, 12, 12, 80))
    f = lambda x: x * math.exp(x) - 2
    p.axes()
    p.curve(f, 0, 1.05, BLUE, 2.2)
    r = 0.8526055
    p.dot(p.X(r), p.Y(0), GREEN, 3.6)
    a, b = 0.0, 1.0
    for n in range(5):
        yy = p.Y(-2.3) + 16 + n * 12
        p.line(p.X(a), yy, p.X(b), yy, INK if n == 0 else ORANGE, 3)
        p.text(p.X(-0.08) + 1, yy + 3.5, f'I{sub(n + 1)}', INK, 9.5, 'start')
        m = (a + b) / 2
        p.text(p.X(m), yy - 3, '+' if f(m) > 0 else '−', RED if f(m) < 0 else GREEN, 9)
        if f(m) < 0:
            a = m
        else:
            b = m
    p.xtick(1, '1')
    p.lab(r - 0.02, 0.3, 'c ≈ 0.8526', GREEN, 10.5, 'end')
    p.lab(0.05, 0.85, 'f(x) = x eˣ − 2', BLUE, 11, 'start')
    return fig(p.svg(), 'Bisection (proof of the Location of Roots Theorem) for f(x) = xeˣ − 2 on [0, 1]: f(0) = −2 &lt; 0 &lt; e − 2 = f(1). Check the sign at each midpoint and keep the half where the sign changes. I<sub>1</sub> = [0, 1], I<sub>2</sub> = [0.5, 1], I<sub>3</sub> = [0.75, 1], I<sub>4</sub> = [0.75, 0.875], I<sub>5</sub> = [0.8125, 0.875] close in on c ≈ 0.8526.')


def maxmin():
    p = Plot(-1.8, 1.8, -2.5, 2.6, 360, 230, (30, 12, 12, 18))
    f = lambda x: x ** 3 - 3 * x
    a, b = -1.5, 1.5
    p.hband(-2, 2, AMBER, 0.12, -1.8, 1.8)
    p.axes()
    p.hline(2, ORANGE, 1, '3 3')
    p.hline(-2, GREEN, 1, '3 3')
    p.hline(f(a), GREY, 0.9, '2 3', a, 0)
    p.hline(f(b), GREY, 0.9, '2 3', 0, b)
    p.curve(f, a, b, BLUE, 2.4)
    p.dot(p.X(a), p.Y(f(a)), BLUE, 3)
    p.dot(p.X(b), p.Y(f(b)), BLUE, 3)
    p.dot(p.X(-1), p.Y(2), ORANGE, 4)
    p.dot(p.X(1), p.Y(-2), GREEN, 4)
    p.lab(-1, 2.25, 'max M = 2 at x = −1', ORANGE, 10)
    p.lab(1, -2.4, 'min m = −2 at x = 1', GREEN, 10)
    p.lab(a, f(a) + 0.3, 'f(a) = 1.125', GREY, 9)
    p.lab(b, f(b) - 0.38, 'f(b) = −1.125', GREY, 9)
    p.xtick(a, '−1.5', dy=-6, size=9)
    p.xtick(b, '1.5', dy=-6, size=9)
    p.lab(1.78, 1.2, 'f(I) = [−2, 2]', AMBER, 10.5, 'end')
    return fig(p.svg(), 'Maximum–minimum theorem for f(x) = x³ − 3x on I = [−1.5, 1.5]. The highest value 2 and the lowest −2 are reached at interior points. The image f(I) is the closed interval [−2, 2] (amber), <b>not</b> [f(b), f(a)] = [−1.125, 1.125].')


def maxmin_fail():
    s = S(360, 160)
    p1 = Plot(-0.05, 1.1, -0.3, 6, 175, 160, (18, 12, 6, 18))
    p1.axes()
    p1.curve(lambda x: 1 / x if x > 0.16 else None, 0.16, 1, PINK, 2.2)
    p1.dot(p1.X(1), p1.Y(1), PINK, 3)
    p1.xtick(1, '1')
    p1.lab(0.5, 5.2, '1/x on (0, 1]', PINK, 10.5, 'start')
    p1.lab(0.5, 4.3, 'unbounded', PINK, 10, 'start')
    p2 = Plot(-0.05, 1.1, -0.1, 1.25, 175, 160, (18, 12, 6, 18))
    p2.axes()
    p2.curve(lambda x: x, 0, 1, PINK, 2.2)
    p2.hole(0, 0, PINK)
    p2.hole(1, 1, PINK)
    p2.xtick(1, '1')
    p2.lab(0.2, 1.12, 'x on (0, 1)', PINK, 10.5, 'start')
    p2.lab(0.2, 0.98, 'no max, no min', PINK, 10, 'start')
    inner = ''.join(p1.o)
    inner2 = ''.join(p2.o)
    defs = set(p1.defs) | set(p2.defs)
    dd = ''.join(f"<marker id='ah{k}' viewBox='0 0 10 10' refX='7' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'><path d='M0,1 L9,5 L0,9 z' fill='#{k}'/></marker>" for k in defs)
    svg = (f"<svg viewBox='0 0 360 160' xmlns='http://www.w3.org/2000/svg'><defs>{dd}</defs>{inner}"
           f"<g transform='translate(185,0)'>{inner2}</g></svg>")
    return fig(svg, 'Drop "closed" or "bounded" and the theorem fails. Left: 1/x on (0, 1] is continuous but has no upper bound <span class="cx">C2</span>. Right: x on (0, 1) never reaches 0 or 1.')


def _windows(p, f, finv, cs, eps, colr=GREEN):
    for c in cs:
        fc = f(c)
        lo, hi = finv(fc - eps), finv(fc + eps)
        d = min(c - lo, hi - c)
        p.hband(fc - eps, fc + eps, ORANGE, 0.12, c - d - 0.15, c + d + 0.15)
        p.vband(c - d, c + d, colr, 0.25, fc - eps, fc + eps)
        p.dot(p.X(c), p.Y(fc), INK, 2.6)
    return p


def uc_square():
    p = Plot(-0.1, 3.4, -0.3, 11, 360, 220, (26, 12, 12, 22))
    eps = 0.9
    p.axes()
    _windows(p, lambda x: x * x, lambda y: math.sqrt(max(y, 0)), [0.6, 1.6, 2.6, 3.1], eps)
    p.curve(lambda x: x * x, 0, 3.3, BLUE, 2.2)
    for c in (0.6, 1.6, 2.6, 3.1):
        p.xtick(c, None)
    p.lab(0.3, 9.6, 'same ε everywhere,', ORANGE, 10.5, 'start')
    p.lab(0.3, 8.6, 'δ must shrink as c grows', GREEN, 10.5, 'start')
    return fig(p.svg(), 'f(x) = x² on [0, ∞) with the same ε at several points. The steeper the graph, the narrower the δ-window must be. No single δ works for all c, so x² is <b>not uniformly continuous</b> on [0, ∞) <span class="cx">C1</span>.')


def uc_recip():
    p = Plot(-0.03, 1.05, -0.4, 9, 360, 210, (26, 12, 12, 22))
    eps = 1.0
    p.axes()
    _windows(p, lambda x: 1 / x, lambda y: 1 / y if y > 0 else 10, [0.16, 0.24, 0.4, 0.75], eps)
    p.curve(lambda x: 1 / x, 0.105, 1.05, BLUE, 2.2)
    p.lab(0.45, 7.6, 'g(x) = 1/x on (0, 1)', BLUE, 10.5, 'start')
    p.lab(0.45, 6.6, 'windows → 0 near 0', GREEN, 10.5, 'start')
    return fig(p.svg(), 'g(x) = 1/x on (0, 1): a <b>bounded</b> domain, still not uniformly continuous. Near 0 the graph is so steep that δ must go to 0 <span class="cx">C2</span>. (Uniform failure comes from an unbounded domain OR from blowing up / wiggling at an open end.)')


def uc_sine():
    p = Plot(-0.2, 9.6, -1.5, 1.6, 360, 170, (16, 12, 12, 20))
    p.axes()
    eps = 0.5
    d = eps  # |sin x - sin u| <= |x - u|
    for c in (1.0, 3.3, 5.6, 8.2):
        fc = math.sin(c)
        p.rect(p.X(c - d), p.Y(fc + eps), p.X(c + d) - p.X(c - d), p.Y(fc - eps) - p.Y(fc + eps), GREEN, 0.18, 2, GREEN)
        p.dot(p.X(c), p.Y(fc), INK, 2.4)
    p.curve(math.sin, c=BLUE, w=2.2)
    p.lab(9.5, 1.3, 'the SAME box (width 2δ, height 2ε) works everywhere', GREEN, 9.5, 'end')
    return fig(p.svg(), 'sin x on ℝ: |sin x − sin u| ≤ |x − u|, so δ = ε works at every point. One rectangle slides along the whole graph and the curve leaves only through its sides. That is <b>uniform continuity</b>.')


def lipschitz():
    p = Plot(-0.2, 4.2, -0.6, 4.2, 360, 210, (24, 12, 12, 22))
    f = lambda x: 1.6 + 0.8 * math.sin(1.1 * x) + 0.2 * x
    K = 1.2
    c = 1.9
    fc = f(c)
    p.poly([(c, fc), (4.2, fc + K * (4.2 - c)), (4.2, fc - K * (4.2 - c))], PURPLE, 0.1)
    p.poly([(c, fc), (-0.2, fc + K * (c + 0.2)), (-0.2, fc - K * (c + 0.2))], PURPLE, 0.1)
    p.axes()
    p.seg(-0.2, fc + K * (-0.2 - c), 4.2, fc + K * (4.2 - c), PURPLE, 1.2, '4 3')
    p.seg(-0.2, fc - K * (-0.2 - c), 4.2, fc - K * (4.2 - c), PURPLE, 1.2, '4 3')
    p.curve(f, 0, 4.1, BLUE, 2.4)
    p.dot(p.X(c), p.Y(fc), INK, 3.4)
    p.xtick(c, 'u')
    p.lab(3.5, 4.0, 'slope K', PURPLE, 10.5)
    p.lab(3.5, -0.3, 'slope −K', PURPLE, 10.5)
    return fig(p.svg(), 'Lipschitz: |f(x) − f(u)| ≤ K|x − u|. From every point u of the graph, the whole graph stays inside the double cone of slopes ±K (purple). The cone is the same shape everywhere, so δ = ε/K works for all u: <b>Lipschitz ⇒ uniformly continuous</b>.')


def sqrt_fig():
    p = Plot(-0.05, 1.05, -0.1, 1.15, 360, 190, (24, 12, 12, 22))
    p.axes()
    p.curve(lambda x: math.sqrt(x) if x >= 0 else None, 0, 1.05, BLUE, 2.4, n=800)
    for K, col in ((2, PINK), (5, PINK), (12, PINK)):
        p.seg(0, 0, min(1.05, 1.1 / K), min(1.05, 1.1 / K) * K, col, 1.2, '4 3')
        p.lab(min(1.05, 1.1 / K) + 0.01, 1.1, f'K={K}', col, 9.5, 'start')
    p.lab(0.5, 0.45, '√x', BLUE, 12, 'start')
    return fig(p.svg(), '√x on [0, 1] is uniformly continuous (continuous on a closed bounded interval) but <b>not</b> Lipschitz: whatever K you try, near 0 the graph rises above the line y = Kx <span class="cx">C4</span>.')


def extension():
    p = Plot(-0.08, 1.05, -1.75, 1.45, 360, 210, (16, 12, 12, 18))
    p.axes()
    p.curve(lambda x: math.sin(x * 6) / (x * 6) if x > 0 else None, 0.0005, 1.0, BLUE, 2.4)
    p.dot(p.X(0), p.Y(1), GREEN, 3.6)
    p.curve(lambda x: 0.38 * math.sin(1 / x) - 1.2 if x > 0.01 else None, 0.01, 1.0, PINK, 1.2, n=4000)
    p.lab(0.04, 1.25, 'fill the hole: value 1', GREEN, 10, 'start')
    p.lab(0.55, 0.45, 'sin(6x)/(6x)', BLUE, 10.5, 'start')
    p.lab(1.0, -0.62, 'sin(1/x), moved down: no value at 0 fits', PINK, 9.5, 'end')
    return fig(p.svg(), 'Continuous extension theorem. f is uniformly continuous on (a, b) exactly when it can be given end values that make it continuous on [a, b]. sin(6x)/(6x) → 1 at 0, so it extends; sin(1/x) has no limit at 0, so it does not, and it is not uniformly continuous on (0, 1) <span class="cx">C3</span>.')


def step_approx():
    p = Plot(-0.15, 4.2, -0.2, 3.2, 360, 200, (22, 12, 12, 22))
    f = lambda x: 1.5 + 0.9 * math.sin(1.3 * x) + 0.15 * x
    a, b, n = 0.0, 4.0, 8
    h = (b - a) / n
    p.axes()
    eps = 0.32
    p.curve(lambda x: f(x) + eps, a, b, ORANGE, 1, '3 3')
    p.curve(lambda x: f(x) - eps, a, b, ORANGE, 1, '3 3')
    for k in range(n):
        x0 = a + k * h
        p.seg(x0, f(x0), x0 + h, f(x0), GREEN, 2.8)
        p.dot(p.X(x0), p.Y(f(x0)), GREEN, 2.2)
    p.curve(f, a, b, BLUE, 2.2)
    p.xtick(a, 'a')
    p.xtick(b, 'b')
    p.lab(4.15, 3.05, 'step function s', GREEN, 10.5, 'end')
    p.lab(4.15, 2.75, 'f ± ε', ORANGE, 10.5, 'end')
    return fig(p.svg(), 'Approximation by step functions. Because f is uniformly continuous on [a, b], cutting [a, b] into pieces shorter than δ keeps f within ε of its value at the left end of each piece. So the step function s satisfies |f(x) − s(x)| &lt; ε for all x.')


def pl_approx():
    p = Plot(-0.15, 4.2, -0.2, 3.2, 360, 190, (22, 12, 12, 22))
    f = lambda x: 1.5 + 0.9 * math.sin(1.3 * x) + 0.15 * x
    a, b, n = 0.0, 4.0, 6
    h = (b - a) / n
    p.axes()
    p.curve(f, a, b, BLUE, 2.2)
    pts = [(a + k * h, f(a + k * h)) for k in range(n + 1)]
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        p.seg(x0, y0, x1, y1, PURPLE, 2)
    p.pts(pts, PURPLE, 3)
    p.xtick(a, 'a')
    p.xtick(b, 'b')
    p.lab(4.15, 3.0, 'piecewise linear g', PURPLE, 10.5, 'end')
    return fig(p.svg(), 'Approximation by a piecewise linear function: join the points (x<sub>k</sub>, f(x<sub>k</sub>)) by straight pieces. With the pieces shorter than δ, |f − g| &lt; ε everywhere. (Weierstrass: even a single polynomial can do this.)')


def nonuc_pairs():
    p = Plot(-0.02, 0.58, -0.3, 8.6, 360, 200, (26, 12, 12, 22))
    p.axes()
    p.curve(lambda x: 1 / x, 0.115, 0.58, BLUE, 2.2)
    for n in (2, 3, 4, 5, 6, 7, 8):
        x, u = 1 / n, 1 / (n + 1)
        if u < 0.115:
            continue
        p.seg(u, 1 / x, x, 1 / x, GREEN, 2.2)
        p.seg(u, 1 / x, u, 1 / u, ORANGE, 2.6)
        p.dot(p.X(x), p.Y(1 / x), INK, 2.4)
        p.dot(p.X(u), p.Y(1 / u), INK, 2.4)
    p.lab(0.3, 7.6, f'x{sub("n")} = 1/n, u{sub("n")} = 1/(n+1)', GREEN, 10.5, 'start')
    p.lab(0.3, 6.6, f'|x{sub("n")} − u{sub("n")}| → 0', GREEN, 10.5, 'start')
    p.lab(0.3, 5.6, f'|g(x{sub("n")}) − g(u{sub("n")})| = 1', ORANGE, 10.5, 'start')
    return fig(p.svg(), 'The sequence test for "not uniformly continuous". Pairs of points get closer and closer, yet their values stay 1 apart (green = gap in x, orange = gap in value). Take ε₀ = 1: no δ can work.')


def fixed_point():
    p = Plot(-0.08, 1.12, -0.08, 1.12, 300, 230, (24, 10, 14, 22))
    f = lambda x: 0.25 + 0.6 * x * x * (1.4 - x) + 0.2 * math.sin(5 * x) * x
    p.axes()
    p.rect(p.X(0), p.Y(1), p.X(1) - p.X(0), p.Y(0) - p.Y(1), 'none', 1, 0, GREY)
    p.seg(0, 0, 1, 1, ORANGE, 1.4, '5 3')
    p.curve(f, 0, 1, BLUE, 2.4)
    xs = [i / 4000 for i in range(4001)]
    c = next(x for x, y in zip(xs, xs[1:]) if (f(x) - x) * (f(y) - y) <= 0)
    p.dot(p.X(c), p.Y(c), GREEN, 4)
    p.xtick(1, '1')
    p.ytick(1, '1', x=0)
    p.lab(0.98, 0.9, 'y = x', ORANGE, 10.5, 'end')
    p.lab(c + 0.03, c - 0.08, 'f(c) = c', GREEN, 10.5, 'start')
    return fig(p.svg(), 'Fixed point. f: [0, 1] → [0, 1] continuous. The graph starts on or above y = x (at 0) and ends on or below it (at 1), so it must meet the diagonal. Apply Bolzano to g(x) = f(x) − x.')


def quantifier_dial():
    """picture-free table built in HTML instead; kept for completeness"""
    return ''


def floor_jump():
    p = Plot(-0.2, 2.3, -0.5, 2.6, 360, 190, (22, 12, 12, 20))
    p.hband(0.5, 1.5, ORANGE, 0.12)
    p.axes()
    for k in range(0, 3):
        p.seg(k, k, min(k + 1, 2.3), k, BLUE, 2.6)
        p.dot(p.X(k), p.Y(k), BLUE, 3.4)
        if k + 1 <= 2.3:
            p.hole(k + 1, k)
    for n in range(1, 7):
        x = 1 - 1 / (n + 1)
        p.dot(p.X(x), p.Y(0), RED, 2.4)
    p.xtick(1, '1')
    p.xtick(2, '2')
    p.lab(0.62, 0.22, 'x<tspan baseline-shift="sub" font-size="72%">n</tspan> = 1 − 1/(n+1): value 0', RED, 9.5)
    p.lab(1.05, 1.25, 'f(1) = 1', BLUE, 10, 'start')
    p.lab(2.25, 1.6, 'band 1 ± ½', ORANGE, 9.5, 'end')
    return fig(p.svg(), 'Greatest integer f(x) = [x] at c = 1. The points x<sub>n</sub> = 1 − 1/(n+1) tend to 1, but f(x<sub>n</sub>) = 0 stays outside the band 1 ± ½. By the Discontinuity Criterion, [x] is discontinuous at 1 (and at every integer).')


def unbounded():
    p = Plot(-0.05, 1.08, -0.3, 8.4, 360, 190, (22, 12, 12, 20))
    p.axes()
    M = 5
    p.hline(M, ORANGE, 1.4, '5 3')
    p.curve(lambda x: 1 / x if x > 0.118 else None, 0.118, 1.05, BLUE, 2.4)
    xm = 1 / (M + 1)
    p.vline(xm, GREY, 1, '3 3', 0, M + 1)
    p.dot(p.X(xm), p.Y(M + 1), RED, 3.6)
    p.ytick(M, 'M = 5', ORANGE, x=0)
    p.xtick(xm, '1/6', size=9)
    p.lab(xm + 0.03, M + 1.3, 'f(1/6) = 6 > M', RED, 10, 'start')
    return fig(p.svg(), 'Continuous but unbounded: f(x) = 1/x on (0, ∞). Whatever M you name, x<sub>M</sub> = 1/(M+1) gives f(x<sub>M</sub>) = M + 1 &gt; M. (The domain is not closed and bounded, so the Boundedness Theorem does not apply.)')


def ivt_fail():
    p = Plot(-0.15, 2.25, -0.3, 3.3, 360, 190, (22, 12, 12, 20))
    p.axes()
    p.hline(1.5, ORANGE, 1.4, '5 3')
    p.seg(0, 0, 1, 1, PINK, 2.6)
    p.hole(1, 1, PINK)
    p.seg(1, 2, 2, 3, PINK, 2.6)
    p.dot(p.X(1), p.Y(2), PINK, 3.4)
    p.dot(p.X(0), p.Y(0), PINK, 3)
    p.dot(p.X(2), p.Y(3), PINK, 3)
    p.ytick(1.5, 'k = 1.5', ORANGE, x=0)
    p.xtick(1, '1')
    p.xtick(2, '2')
    p.lab(1.1, 1.25, 'the line y = 1.5 is never met', ORANGE, 10, 'start')
    return fig(p.svg(), 'Why continuity is needed in Bolzano. f(x) = x on [0, 1), x + 1 on [1, 2]: f(0) = 0 &lt; 1.5 &lt; 3 = f(2), but no x gives f(x) = 1.5, because the graph jumps over it.')


def image_fig():
    p = Plot(-3.2, 3.2, -0.15, 1.25, 360, 190, (16, 12, 30, 18))
    p.vband(-1, 1, GREEN, 0.12, -0.15, 1.25)
    p.axes()
    p.curve(lambda x: 1 / (1 + x * x), c=BLUE, w=2.4)
    p.hole(-1, 0.5)
    p.hole(1, 0.5)
    p.dot(p.X(0), p.Y(1), BLUE, 3.4)
    p.line(p.X(3.2) + 12, p.Y(0.5), p.X(3.2) + 12, p.Y(1), ORANGE, 4)
    p.add(f"<circle cx='{p.X(3.2) + 12:.1f}' cy='{p.Y(0.5):.1f}' r='3' fill='#fff' stroke='{ORANGE}' stroke-width='1.6'/>")
    p.dot(p.X(3.2) + 12, p.Y(1), ORANGE, 3)
    p.lab(0.55, 0.05, '(−1, 1)', GREEN, 10, 'start')
    p.lab(2.2, 0.62, 'image (½, 1]', ORANGE, 10)
    return fig(p.svg(), 'f(x) = 1/(1 + x²) maps the open interval (−1, 1) onto (½, 1], which is an interval but not open. Continuous functions keep intervals as intervals (Theorem 5.3.10), but not "open" or "closed" (unless the interval is closed and bounded).')

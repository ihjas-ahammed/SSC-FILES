"""Module 4 figures: sequences of functions, pointwise vs uniform convergence.
Colours: f_n in shades of sky→blue (later n = darker), limit f ink, ε-tube orange."""
import math
from figs import *

SHADES = ['#a9d4f0', '#7dbde8', '#4f9fd6', '#2a7fc0', '#0b5c99', '#08406b']


def _shade(i, n):
    return SHADES[min(len(SHADES) - 1, round(i * (len(SHADES) - 1) / max(1, n - 1)))]


def xn_family():
    p = Plot(-0.05, 1.12, -0.08, 1.15, 360, 230, (26, 12, 12, 22))
    p.axes()
    ns = [1, 2, 4, 8, 16, 40]
    for i, n in enumerate(ns):
        p.curve(lambda x, n=n: x ** n, 0, 1, _shade(i, len(ns)), 2)
    p.seg(0, 0, 1, 0, INK, 3.2)
    p.hole(1, 0, INK)
    p.dot(p.X(1), p.Y(1), INK, 3.6)
    p.xtick(1, '1')
    p.ytick(1, '1')
    p.lab(0.5, -0.06, 'limit g = 0 on [0, 1)', INK, 10, dy=14)
    p.lab(1.0, 1.08, 'g(1) = 1', INK, 10, 'end')
    return fig(p.svg(), 'g<sub>n</sub>(x) = xⁿ on [0, 1] for n = 1, 2, 4, 8, 16, 40 (darker = larger n). For each fixed x &lt; 1 the values fall to 0, but every curve still climbs to (1, 1). The limit g (black) has a <b>jump</b> at 1, although every g<sub>n</sub> is continuous <span class="cx">C12</span>.')


def tube():
    p = Plot(-0.05, 1.08, -0.15, 1.25, 360, 220, (24, 12, 12, 22))
    f = lambda x: 0.45 + 0.3 * math.sin(math.pi * x)
    eps = 0.12
    p.poly([(x / 100, f(x / 100) + eps) for x in range(101)] + [(x / 100, f(x / 100) - eps) for x in range(100, -1, -1)], ORANGE, 0.14)
    p.axes()
    p.curve(lambda x: f(x) + eps, 0, 1, ORANGE, 1, '3 3')
    p.curve(lambda x: f(x) - eps, 0, 1, ORANGE, 1, '3 3')
    p.curve(lambda x: f(x) + 0.35 * math.sin(7 * x) * (1 - x) + 0.05, 0, 1, '#a9d4f0', 1.8)
    p.curve(lambda x: f(x) + 0.08 * math.sin(9 * x + 1), 0, 1, '#0b5c99', 2)
    p.curve(f, 0, 1, INK, 2.4)
    p.lab(0.02, 1.15, 'early f<tspan baseline-shift="sub" font-size="72%">n</tspan>: leaves the tube', '#4f9fd6', 10, 'start')
    p.lab(1.05, 0.12, 'late f<tspan baseline-shift="sub" font-size="72%">n</tspan>: whole graph inside', '#0b5c99', 10, 'end')
    p.brace_y(f(0.82), f(0.82) + eps, 1.03, 'ε', ORANGE, 4)
    p.lab(0.55, f(0.55) - 0.03, 'f', INK, 12, dy=0)
    return fig(p.svg(), 'Uniform convergence = the ε-tube picture. Draw a tube of half-width ε round the graph of f. f<sub>n</sub> → f uniformly when, for every ε, from some n = K on <b>the whole graph</b> of f<sub>n</sub> lies inside the tube.')


def xn_tube():
    p = Plot(-0.05, 1.12, -0.08, 1.15, 360, 220, (26, 12, 12, 22))
    eps = 0.5
    p.hband(0, eps, ORANGE, 0.13, 0, 1)
    p.axes()
    ks = [1, 2, 4, 8, 16]
    for i, k in enumerate(ks):
        p.curve(lambda x, k=k: x ** k, 0, 1, _shade(i, len(ks)), 1.8)
        xk = 2 ** (-1 / k)
        p.dot(p.X(xk), p.Y(0.5), ORANGE, 3.2)
        p.vline(xk, GREY, 0.8, '2 3', 0, 0.5)
    p.hline(0.5, ORANGE, 1.2, '4 3', 0, 1)
    p.ytick(0.5, 'ε₀ = ½', ORANGE)
    p.xtick(1, '1')
    p.lab(0.5, 0.82, 'each curve leaves the tube at x<tspan baseline-shift="sub" font-size="72%">k</tspan> = 2<tspan baseline-shift="super" font-size="70%">−1/k</tspan>', ORANGE, 9.5)
    for k, t in ((1, '0.5'), (4, '0.84'), (16, '0.96')):
        p.lab(2 ** (-1 / k), -0.06, t, GREY, 8.5, dy=14)
    return fig(p.svg(), 'Why xⁿ is not uniform on [0, 1): with ε₀ = ½ the tube is 0 ≤ y &lt; ½. Each xᵏ crosses ½ at x<sub>k</sub> = 2<sup>−1/k</sup> (0.5, 0.71, 0.84, 0.92, 0.96 …). The escape point moves towards 1 but never disappears, so no K works for all x.')


def bump():
    p = Plot(-0.05, 2.1, -0.06, 0.66, 360, 210, (26, 12, 12, 22))
    p.axes()
    ns = [1, 2, 4, 8]
    for i, n in enumerate(ns):
        p.curve(lambda x, n=n: n * x / (1 + n * n * x * x), 0, 2.05, _shade(i + 1, len(ns) + 1), 2, n=600)
        p.dot(p.X(1 / n), p.Y(0.5), ORANGE, 3)
        p.lab(1 / n, 0.53, f'1/{n}' if n > 1 else '1', ORANGE, 9)
    p.hline(0.5, ORANGE, 1, '4 3', 0, 2.05)
    p.ytick(0.5, '½', ORANGE)
    p.seg(0, 0, 2.05, 0, INK, 2.6)
    p.lab(2.05, 0.6, 'peak always ½, moving to 0', ORANGE, 10, 'end')
    return fig(p.svg(), 'The moving bump f<sub>n</sub>(x) = nx/(1 + n²x²) on [0, ∞). For each fixed x &gt; 0, f<sub>n</sub>(x) → 0. But every f<sub>n</sub> has a peak of height ½ at x = 1/n, so ‖f<sub>n</sub> − 0‖ = ½ for all n: <b>pointwise, not uniform</b> <span class="cx">C21</span>.')


def x_over_n():
    p = Plot(-5.2, 5.2, -2.2, 2.2, 360, 210, (16, 12, 12, 16))
    eps = 0.5
    p.hband(-eps, eps, ORANGE, 0.13)
    p.vband(0, 1, GREEN, 0.14, -2.2, 2.2)
    p.axes()
    for i, n in enumerate([1, 2, 3, 5]):
        p.curve(lambda x, n=n: x / n, c=_shade(i + 1, 5), w=1.8)
        p.dot(p.X(n), p.Y(1), INK, 2.6)
    p.lab(5.1, 1.95, 'x<tspan baseline-shift="sub" font-size="72%">k</tspan> = k: value 1', INK, 9.5, 'end')
    p.lab(0.5, -1.95, '[0, 1]', GREEN, 10)
    p.lab(-5.1, 0.7, 'tube ε = ½', ORANGE, 9.5, 'start')
    return fig(p.svg(), 'x/n → 0 at every x, but the line y = x/n always escapes the ε-tube far out (at x = k the value is 1). Not uniform on ℝ. On [0, 1] (green) the worst gap is 1/n → 0: uniform there <span class="cx">C15</span>.')


def parab():
    p = Plot(-4.4, 8.4, -5, 14, 360, 220, (16, 12, 12, 16))
    p.vband(0, 8, GREEN, 0.08, -5, 14)
    p.axes()
    for i, n in enumerate([1, 2, 4, 8]):
        p.curve(lambda x, n=n: x + x * x / n, c=_shade(i + 1, 5), w=1.8)
    p.curve(lambda x: x, c=INK, w=2.4)
    p.seg(8, 8, 8, 8 + 64 / 8, ORANGE, 2.2)
    p.lab(8.3, -1.6, 'orange: gap 64/n at x = 8', ORANGE, 9.5, 'end')
    p.lab(4, -4.4, '[0, 8]: uniform', GREEN, 10)
    p.lab(8.3, -2.9, 'on ℝ the gap x²/n is unbounded', PINK, 9.5, 'end')
    return fig(p.svg(), 'h<sub>n</sub>(x) = (x² + nx)/n = x + x²/n → x (black). The gap h<sub>n</sub> − h = x²/n is at most 64/n on [0, 8], so uniform there; on ℝ it has no upper bound, so not uniform.')


def sin_env():
    p = Plot(-3.2, 3.2, -0.62, 0.62, 360, 150, (16, 12, 12, 16))
    p.axes()
    for n, col in ((2, '#7dbde8'), (8, '#0b5c99')):
        p.curve(lambda x, n=n: math.sin(n * x + n) / n, c=col, w=1.8, n=900)
        p.hline(1 / n, ORANGE, 1, '4 3')
        p.hline(-1 / n, ORANGE, 1, '4 3')
    p.lab(3.15, 0.55, 'n = 2: between ±½', '#4f9fd6', 10, 'end')
    p.lab(3.15, 0.17, 'n = 8: between ±⅛', '#0b5c99', 10, 'end')
    return fig(p.svg(), 'F<sub>n</sub>(x) = sin(nx + n)/n lies between the lines y = ±1/n (dashed) for <b>every</b> x at once. The bound 1/n does not depend on x, so ‖F<sub>n</sub>‖ = 1/n → 0: uniform on ℝ.')


def norm_gap():
    p = Plot(-0.05, 1.1, -0.04, 0.32, 360, 200, (26, 12, 12, 22))
    p.axes()
    ns = [1, 2, 5, 10, 20]
    for i, n in enumerate(ns):
        f = lambda x, n=n: x ** n * (1 - x)
        p.curve(f, 0, 1, _shade(i, len(ns)), 2)
        xm = n / (n + 1)
        p.dot(p.X(xm), p.Y(f(xm)), ORANGE, 3)
    p.seg(0.5, 0, 0.5, 0.25, ORANGE, 1.6, arrow=True)
    p.lab(0.48, 0.265, '‖G₁‖ = ¼', ORANGE, 10, 'end')
    p.lab(1.08, 0.30, 'peaks at x = n/(n+1):', ORANGE, 9.5, 'end')
    p.lab(1.08, 0.275, '¼, 0.148, 0.067, 0.035, 0.018', ORANGE, 9.5, 'end')
    p.xtick(1, '1')
    return fig(p.svg(), 'The uniform norm is the <b>height of the highest point</b> of |f<sub>n</sub> − f|. For G<sub>n</sub> = xⁿ(1 − x) the peak sits at x = n/(n+1) with height nⁿ/(n+1)ⁿ⁺¹ ≤ 1/(n+1) → 0, so G<sub>n</sub> → 0 uniformly on [0, 1].')


def cauchy_fig():
    p = Plot(-0.05, 1.12, -0.08, 1.15, 360, 200, (26, 12, 12, 22))
    p.axes()
    n = 4
    p.curve(lambda x: x ** n, 0, 1, '#4f9fd6', 2)
    p.curve(lambda x: x ** (2 * n), 0, 1, '#0b5c99', 2)
    xm = 2 ** (-1 / n)
    p.seg(xm, xm ** (2 * n), xm, xm ** n, ORANGE, 2.2)
    p.lab(xm - 0.02, 0.38, 'gap ¼', ORANGE, 10.5, 'end')
    p.lab(0.6, 0.25, 'x⁴', '#4f9fd6', 11)
    p.lab(0.83, 0.12, 'x⁸', '#0b5c99', 11)
    p.xtick(xm, '2<tspan baseline-shift="super" font-size="70%">−1/4</tspan>', size=9)
    return fig(p.svg(), 'Not uniformly Cauchy. ‖xⁿ − x²ⁿ‖ = max of t − t² (t = xⁿ) = ¼, reached where xⁿ = ½. However large n is, f<sub>n</sub> and f<sub>2n</sub> stay ¼ apart somewhere, so the Cauchy criterion fails (with ε = ⅛, say).')


def eps3():
    p = Plot(-0.1, 4.3, -0.2, 3.6, 360, 230, (16, 12, 12, 22))
    f = lambda x: 1.4 + 0.7 * math.sin(1.1 * x) + 0.12 * x
    fH = lambda x: f(x) + 0.22 * math.sin(3 * x + 0.5)
    e3 = 0.35
    p.poly([(x / 50, fH(x / 50) + e3) for x in range(0, 211)] + [(x / 50, fH(x / 50) - e3) for x in range(210, -1, -1)], ORANGE, 0.12)
    p.axes()
    p.curve(fH, 0, 4.2, '#0b5c99', 2)
    p.curve(f, 0, 4.2, INK, 2.4)
    c, x = 1.7, 2.2
    for t, col in ((c, INK), (x, INK)):
        p.vline(t, GREY, 0.9, '3 3', 0, max(f(t), fH(t)))
    p.dot(p.X(c), p.Y(f(c)), INK, 3)
    p.dot(p.X(c), p.Y(fH(c)), '#0b5c99', 3)
    p.dot(p.X(x), p.Y(f(x)), INK, 3)
    p.dot(p.X(x), p.Y(fH(x)), '#0b5c99', 3)
    p.xtick(c, 'c')
    p.xtick(x, 'x')
    p.lab(4.25, 3.35, 'f<tspan baseline-shift="sub" font-size="72%">H</tspan> (one fixed, continuous)', '#0b5c99', 9.5, 'end')
    p.lab(4.25, 3.05, 'f, band f<tspan baseline-shift="sub" font-size="72%">H</tspan> ± ε/3', INK, 9.5, 'end')
    return fig(p.svg(), 'Proof of Theorem 8.2.2: the ε/3 trick. Pick ONE f<sub>H</sub> within ε/3 of f <b>everywhere</b> (uniformity). Then |f(x) − f(c)| ≤ |f(x) − f<sub>H</sub>(x)| + |f<sub>H</sub>(x) − f<sub>H</sub>(c)| + |f<sub>H</sub>(c) − f(c)|: outer two &lt; ε/3 by uniformity, middle &lt; ε/3 by continuity of f<sub>H</sub>.')


def spikes():
    p = Plot(-0.03, 1.05, -0.4, 8.8, 360, 210, (22, 12, 12, 22))
    p.axes()
    for i, n in enumerate([2, 4, 8]):
        col = _shade(i + 2, 5)
        pts = [(0, 0), (1 / n, n), (2 / n, 0)]
        p.poly(pts, AMBER, 0.22)
        p.seg(0, 0, 1 / n, n, col, 2)
        p.seg(1 / n, n, 2 / n, 0, col, 2)
        p.lab(1 / n + 0.02, n, f'height {n}, base 2/{n}', col, 9.5, 'start')
    p.seg(0, 0, 1, 0, INK, 2.6)
    p.xtick(1, '1')
    p.lab(0.95, 1.2, 'each area = 1', AMBER, 10.5, 'end')
    return fig(p.svg(), 'Spikes (Bartle 8.2.1(c)). Each f<sub>n</sub> is a triangle of base 2/n and height n, so ∫₀¹ f<sub>n</sub> = 1. At any fixed x &gt; 0 the spike has passed once 2/n &lt; x, so f<sub>n</sub>(x) → 0. lim ∫ f<sub>n</sub> = 1 but ∫ lim f<sub>n</sub> = 0 <span class="cx">C13</span>.')


def hn_fig():
    p = Plot(-0.03, 1.05, -0.2, 4.0, 360, 200, (22, 12, 12, 22))
    p.axes()
    for i, n in enumerate([1, 4, 16]):
        col = _shade(i * 2 + 1, 6)
        p.curve(lambda x, n=n: 2 * n * x * math.exp(-n * x * x), 0, 1, col, 2, n=600)
        xm = 1 / math.sqrt(2 * n)
        p.dot(p.X(xm), p.Y(math.sqrt(2 * n / math.e)), ORANGE, 3)
        p.lab(xm + 0.03, math.sqrt(2 * n / math.e) + 0.1, f'n={n}', col, 9.5, 'start')
    p.xtick(1, '1')
    p.lab(0.97, 3.5, '∫₀¹ hₙ = 1 − e⁻ⁿ → 1', AMBER, 10.5, 'end')
    return fig(p.svg(), 'h<sub>n</sub>(x) = 2nx e<sup>−nx²</sup>: peak √(2n/e) at x = 1/√(2n), moving to 0 and growing. h<sub>n</sub>(x) → 0 for every x, yet ∫₀¹ h<sub>n</sub> = 1 − e<sup>−n</sup> → 1 ≠ 0.')


def interchange_xn():
    p = Plot(0.4, 1.08, -0.08, 1.15, 360, 200, (26, 12, 12, 22))
    p.axes(ox=0.4)
    for i, n in enumerate([2, 5, 12, 40]):
        p.curve(lambda x, n=n: x ** n, 0.4, 1, _shade(i + 1, 5), 1.8)
    p.seg(0.4, 0, 1, 0, INK, 2.6)
    p.hole(1, 0)
    p.dot(p.X(1), p.Y(1), INK, 3.4)
    p.xtick(1, '1')
    p.lab(0.42, 1.05, 'lim<tspan baseline-shift="sub" font-size="72%">n</tspan> lim<tspan baseline-shift="sub" font-size="72%">x→1</tspan> xⁿ = lim<tspan baseline-shift="sub" font-size="72%">n</tspan> 1 = 1', ORANGE, 10, 'start')
    p.lab(0.42, 0.92, 'lim<tspan baseline-shift="sub" font-size="72%">x→1</tspan> lim<tspan baseline-shift="sub" font-size="72%">n</tspan> xⁿ = lim<tspan baseline-shift="sub" font-size="72%">x→1</tspan> 0 = 0', GREEN, 10, 'start')
    return fig(p.svg(), 'The order of two limits matters. Take x → 1 first and you get 1 for every n; take n → ∞ first and you get 0 for every x &lt; 1. Pointwise convergence lets these differ; this is why continuity is lost.')

"""Module 3 figures: the Riemann integral (Bartle & Sherbert 4e, §7.1–§7.3).

Specs: research/content_m3.md §8 (F01–F18). Each function returns an SVG string;
the HTML wraps it in <figure>{{fig:NAME}}<figcaption>...</figcaption></figure>.
Colours and helpers come from figs.py (same colour code as Modules 1, 2 and 4).
"""
import math
from figs import *


def _tag_panel(p_w, p_h, tags, pts, title, s_val):
    """one small panel of f = x^2 on [0,1] with the given partition and tags"""
    f = lambda x: x * x
    p = Plot(-0.06, 1.06, -0.18, 1.08, p_w, p_h, (20, 10, 8, 18))
    p.axes(xlab='', ylab='')
    for (a, b), t in zip(zip(pts, pts[1:]), tags):
        p.box(a, b, f(t), AMBER, 0.34, AMBER)
        p.dot(p.X(t), p.Y(f(t)), PURPLE, 2.5)
    p.hline(1 / 3, INK, 1.0, '3 3', 0, 1)
    p.curve(f, 0, 1, BLUE, 2.0)
    p.lab(0.04, 0.92, title, INK, 9.5, 'start')
    p.lab(0.04, 0.70, f'S = {s_val}', ORANGE, 9.5, 'start')
    return p


def F01_partition_norm():
    p = Plot(-0.2, 4.3, -0.9, 0.8, 360, 145, (18, 12, 14, 18))
    p.seg(0, 0, 4, 0, INK, 2.2)
    pts = [0, 1, 1.5, 2, 3.4, 4]
    for x in pts:
        p.line(p.X(x), p.Y(0) - 5, p.X(x), p.Y(0) + 5, INK, 1.6)
        p.dot(p.X(x), p.Y(0), BLUE, 3.0)
        p.xtick(x, f'{x:g}', size=9.5, dy=-9)
    lengths = [(0, 1, '1', GREEN), (1, 1.5, '.5', GREEN), (1.5, 2, '.5', GREEN),
               (2, 3.4, '‖P‖ = 1.4', ORANGE), (3.4, 4, '.6', GREEN)]
    for a, b, lab, col in lengths:
        p.brace_x(a, b, -0.32, lab, col, dy=13, size=9.5)
    p.vband(2, 3.4, ORANGE, 0.16, -0.12, 0.18)
    p.lab(2.7, 0.62, 'I₄ = [2, 3.4]', ORANGE, 10)
    return p.svg()


def F02_tagged_riemann_sum():
    f = lambda x: x * x
    p = Plot(-0.08, 1.08, -0.15, 1.08, 360, 200, (28, 12, 14, 24))
    p.axes()
    pts = [0, 0.2, 0.5, 0.7, 1.0]
    tags = [0.1, 0.5, 0.6, 0.9]
    for (a, b), t in zip(zip(pts, pts[1:]), tags):
        p.box(a, b, f(t), AMBER, 0.34, AMBER)
        p.seg(t, 0, t, f(t), PURPLE, 1.1, '3 2')
        p.dot(p.X(t), p.Y(0), PURPLE, 2.6)
        p.dot(p.X(t), p.Y(f(t)), PURPLE, 3.0)
    p.curve(f, 0, 1, BLUE, 2.4)
    p.xtick(1, '1', size=9.5)
    p.ytick(1, '1', size=9.5)
    p.lab(0.05, 0.92, 'f(x) = x²', BLUE, 10.5, 'start')
    p.lab(0.05, 0.74, 'tags tᵢ (purple dots)', PURPLE, 10, 'start')
    p.lab(0.05, 0.56, 'S(f; Ṗ) = 0.392', AMBER, 10, 'start')
    return p.svg()


def F03_four_tag_rules():
    pts = [0, 0.25, 0.5, 0.75, 1.0]
    left = _tag_panel(176, 125, [0, 0.25, 0.5, 0.75], pts, 'left tags', '0.2188')
    right = _tag_panel(176, 125, [0.25, 0.5, 0.75, 1.0], pts, 'right tags', '0.4688')
    mid = _tag_panel(176, 125, [0.125, 0.375, 0.625, 0.875], pts, 'midpoints', '0.3281')
    rnd = _tag_panel(176, 125, [0.2, 0.3, 0.7, 0.8], pts, 'random tags', '0.3150')
    return stack([(left, 0, 0), (right, 184, 0), (mid, 0, 130), (rnd, 184, 130)], 360, 260)


def F04_mesh_vs_count():
    p = Plot(-0.06, 1.06, -1.1, 1.1, 360, 160, (18, 12, 14, 16))
    p.seg(0, 0.45, 1, 0.45, INK, 2.0)
    for x in [0, 0.25, 0.5, 0.75, 1.0]:
        p.line(p.X(x), p.Y(0.45) - 4, p.X(x), p.Y(0.45) + 4, BLUE, 1.6)
        p.dot(p.X(x), p.Y(0.45), BLUE, 2.8)
    p.brace_x(0.25, 0.5, 0.2, '‖P' + sub('a') + '‖ = 0.25', GREEN, dy=12, size=9.5)
    p.lab(0, 0.78, 'P' + sub('a') + ': 4 equal pieces', BLUE, 10, 'start')
    p.vband(0.3, 1.0, PINK, 0.20, -0.68, -0.32)
    p.seg(0, -0.5, 1, -0.5, INK, 2.0)
    for x in [0, 0.1, 0.2, 0.3, 1.0]:
        p.line(p.X(x), p.Y(-0.5) - 4, p.X(x), p.Y(-0.5) + 4, PINK, 1.6)
        p.dot(p.X(x), p.Y(-0.5), PINK, 2.8)
    p.brace_x(0.3, 1.0, -0.82, '‖P' + sub('b') + '‖ = 0.70', ORANGE, dy=12, size=9.5)
    p.lab(0, -1.02, 'P' + sub('b') + ': 4 pieces, wide gap [0.3, 1]', PINK, 10, 'start')
    return p.svg()


def F05_squeeze_step():
    p = Plot(-0.08, 1.08, -0.15, 1.12, 360, 205, (28, 12, 14, 24))
    p.axes()
    for k in range(1, 5):
        a, b = (k - 1) / 4, k / 4
        lo, hi = (k - 1) / 4, k / 4
        p.poly([(a, lo), (b, lo), (b, hi), (a, hi)], AMBER, 0.32, stroke=AMBER, w=1.2)
        p.seg(a, lo, b, lo, BLUE, 2.2)
        p.seg(a, hi, b, hi, ORANGE, 2.2)
    p.curve(lambda x: x, 0, 1, INK, 2.2)
    p.xtick(1, '1', size=9.5)
    p.ytick(1, '1', size=9.5)
    p.lab(0.04, 0.96, 'ω' + sub('4') + ' upper, ∫ = 5/8', ORANGE, 10, 'start')
    p.lab(0.04, 0.78, 'α' + sub('4') + ' lower, ∫ = 3/8', BLUE, 10, 'start')
    p.lab(0.04, 0.60, 'gap ∫(ω − α) = 1/4 = 1/n', INK, 10, 'start')
    return p.svg()


def F06_cont_min_max_steps():
    p = Plot(-0.2, 3.35, -0.18, 1.18, 360, 200, (26, 12, 14, 24))
    p.axes()
    s2 = math.sqrt(0.5)
    pieces = [(0, math.pi / 4, 0, s2, 0, math.pi / 4),
              (math.pi / 4, math.pi / 2, s2, 1.0, math.pi / 4, math.pi / 2),
              (math.pi / 2, 3 * math.pi / 4, s2, 1.0, 3 * math.pi / 4, math.pi / 2),
              (3 * math.pi / 4, math.pi, 0, s2, math.pi, 3 * math.pi / 4)]
    for a, b, lo, hi, u, v in pieces:
        p.box(a, b, lo, SKY, 0.25, BLUE)
        p.poly([(a, lo), (b, lo), (b, hi), (a, hi)], ORANGE, 0.26, stroke=ORANGE, w=1.1)
        p.seg(a, lo, b, lo, BLUE, 2.0)
        p.seg(a, hi, b, hi, ORANGE, 2.0)
        p.dot(p.X(u), p.Y(lo), BLUE, 2.8)
        p.dot(p.X(v), p.Y(hi), ORANGE, 2.8)
    p.curve(math.sin, 0, math.pi, INK, 2.2)
    p.xtick(math.pi / 2, 'π/2', size=9.5)
    p.xtick(math.pi, 'π', size=9.5)
    p.ytick(1, '1', size=9.5)
    p.lab(0.08, 1.06, 'ω = max on Iᵢ', ORANGE, 9.5, 'start')
    p.lab(0.08, 0.88, 'α = min on Iᵢ', BLUE, 9.5, 'start')
    p.lab(2.15, 1.06, 'f(x) = sin x', INK, 10, 'start')
    return p.svg()


def F07_monotone_staircase():
    f = lambda x: x * x
    p1 = Plot(-0.08, 1.08, -0.16, 1.12, 230, 195, (24, 12, 10, 22))
    p1.axes()
    for k in range(1, 5):
        a, b = (k - 1) / 4, k / 4
        lo, hi = f(a), f(b)
        p1.poly([(a, lo), (b, lo), (b, hi), (a, hi)], ORANGE, 0.34, stroke=ORANGE, w=1.2)
        p1.seg(a, lo, b, lo, BLUE, 1.6)
        p1.seg(a, hi, b, hi, ORANGE, 1.6)
    p1.curve(f, 0, 1, BLUE, 2.2)
    p1.xtick(1, '1', size=9.5)
    p1.ytick(1, '1', size=9.5)
    p1.lab(0.05, 0.95, 'f(x) = x² (n = 4)', BLUE, 9.5, 'start')
    p1.lab(0.05, 0.76, '4 gap blocks ω − α', ORANGE, 9.5, 'start')
    p2 = Plot(-0.1, 0.6, -0.16, 1.12, 125, 195, (18, 12, 10, 22))
    p2.axes(xlab='', ylab='')
    gaps = [f((k) / 4) - f((k - 1) / 4) for k in range(1, 5)]
    base = 0.0
    for g in gaps:
        p2.poly([(0, base), (0.25, base), (0.25, base + g), (0, base + g)], AMBER, 0.42, stroke=AMBER, w=1)
        base += g
    p2.lab(0.12, 1.04, 'stacked: total 1', INK, 9.5, 'middle')
    p2.lab(0.12, -0.10, 'width 1/4', INK, 9.5, 'middle')
    return stack([(p1, 0, 0), (p2, 235, 0)], 360, 205)


def F08_dirichlet_tags():
    n = 6
    pts = [k / n for k in range(n + 1)]
    rat = [(k - 0.5) / n for k in range(1, n + 1)]           # rational tags
    irr = [t + 0.012 * math.sqrt(2) for t in rat]            # irrational tags (inside each piece)
    top = Plot(-0.06, 1.06, -0.25, 1.3, 360, 115, (20, 10, 12, 18))
    top.axes(xlab='', ylab='')
    top.hline(1, GREY, 0.9, '2 3', 0, 1)
    for (a, b), t in zip(zip(pts, pts[1:]), rat):
        top.box(a, b, 1, AMBER, 0.34, AMBER)
        top.dot(top.X(t), top.Y(1), PURPLE, 2.6)
    top.lab(0.04, 1.22, 'all tags rational: S = 1', INK, 9.5, 'start')
    bot = Plot(-0.06, 1.06, -0.25, 1.3, 360, 95, (20, 10, 12, 18))
    bot.axes(xlab='', ylab='')
    bot.hline(0, GREY, 0.9, '2 3', 0, 1)
    for (a, b), t in zip(zip(pts, pts[1:]), irr):
        bot.dot(bot.X(t), bot.Y(0), PINK, 2.6)
    bot.lab(0.04, 0.92, 'all tags irrational: S = 0', INK, 9.5, 'start')
    return stack([(top, 0, 0), (bot, 0, 120)], 360, 215)


def F09_thomae_popcorn():
    p = Plot(-0.06, 1.06, -0.02, 1.05, 360, 200, (24, 12, 14, 22))
    p.hband(0, 0.2, GREEN, 0.12)
    p.axes()
    E = []
    for n in range(1, 6):
        for m in range(0, n + 1):
            if math.gcd(m, n) == 1:
                x, y = m / n, 1 / n
                p.dot(p.X(x), p.Y(y), BLUE, 2.6)
                if y >= 0.2:
                    E.append((x, y))
    for x, y in E:
        p.hole(x, y, PINK, 5.5)
    p.xtick(1, '1', size=9.5)
    p.ytick(1, '1', size=9.5)
    p.lab(0.55, 0.92, 'h(m/n) = 1/n', BLUE, 10, 'start')
    p.lab(0.55, 0.12, 'band: h < 1/5', GREEN, 10, 'start')
    p.lab(0.55, 0.46, f'circled: {len(E)} points', PINK, 10, 'start')
    return p.svg()


def F10_sgn_indefinite():
    top = Plot(-1.3, 1.3, -1.6, 1.6, 360, 140, (24, 12, 14, 20))
    top.axes(xlab='x', ylab='')
    top.seg(-1, -1, 0, -1, BLUE, 2.4)
    top.seg(0, 1, 1, 1, BLUE, 2.4)
    top.hole(0, -1, BLUE, 3.2)
    top.hole(0, 1, BLUE, 3.2)
    top.dot(top.X(0), top.Y(0), INK, 3.2)
    top.lab(1.05, 1.25, 'f = sgn x', BLUE, 10, 'start')
    bot = Plot(-1.3, 1.3, -1.3, 1.3, 360, 140, (24, 12, 14, 20))
    bot.axes(xlab='x', ylab='')
    bot.curve(lambda x: abs(x), -1, 1, INK, 2.4)
    bot.curve(lambda x: abs(x) - 1, -1, 1, ORANGE, 1.6, '4 3')
    bot.lab(-0.85, 0.45, 'slope −1', BLUE, 10, 'end')
    bot.lab(0.85, 0.45, 'slope +1', BLUE, 10, 'start')
    bot.lab(0.9, -0.85, 'F = |x| (basepoint 0)', INK, 9.5, 'end')
    bot.lab(-0.1, -0.35, '|x| − 1 (dashed)', ORANGE, 9.5, 'end')
    return stack([(top, 0, 0), (bot, 0, 150)], 360, 290)


def F11_area_sliver():
    f = lambda t: t
    p = Plot(-0.2, 2.4, -0.3, 2.6, 360, 220, (22, 12, 14, 22))
    p.axes()
    p.box(1, 1.2, 1.2, PINK, 0.12, PINK)
    p.box(1, 1.2, f(1), AMBER, 0.45, AMBER)
    p.area(f, 1, 1.2, AMBER, 0.55)
    p.curve(f, 0, 2, BLUE, 2.4)
    p.xtick(1, '1', size=9.5)
    p.xtick(1.2, '1.2', size=9.5)
    p.lab(2.1, 1.7, 'f(t) = t', BLUE, 10, 'end')
    p.lab(0.05, 2.5, 'sliver = 0.22', INK, 9.5, 'start')
    p.lab(0.05, 2.25, 'inner 0.20', AMBER, 9.5, 'start')
    p.lab(0.05, 2.0, 'outer 0.24', PINK, 9.5, 'start')
    return p.svg()


def F12_substitution_panels():
    p1 = Plot(0.8, 4.2, -0.1, 1.1, 176, 150, (26, 12, 12, 22))
    g = lambda t: math.sin(math.sqrt(t)) / math.sqrt(t)
    p1.axes(xlab='t', ylab='')
    p1.area(g, 1, 4, AMBER, 0.45)
    p1.curve(g, 1, 4, BLUE, 2.2)
    p1.xtick(1, '1', size=9.5)
    p1.xtick(4, '4', size=9.5)
    p1.lab(2.5, 1.02, 'y = sin√t / √t', BLUE, 9.5)
    p1.lab(2.5, -0.02, '∫ = 1.9129', INK, 9.5, dy=10)
    p2 = Plot(0.8, 2.2, -0.1, 2.2, 176, 150, (26, 12, 12, 22))
    h = lambda x: 2 * math.sin(x)
    p2.axes(xlab='x', ylab='')
    p2.area(h, 1, 2, AMBER, 0.45)
    p2.curve(h, 1, 2, BLUE, 2.2)
    p2.xtick(1, '1', size=9.5)
    p2.xtick(2, '2', size=9.5)
    p2.lab(1.5, 2.1, 'y = 2 sin x', BLUE, 9.5)
    p2.lab(1.5, 0.25, '∫ = 1.9129', INK, 9.5)
    return stack([(p1, 0, 0), (p2, 184, 0)], 360, 160)


def F13_additivity_split():
    f = lambda x: x * x
    top = Plot(-0.15, 2.15, -0.3, 4.4, 360, 130, (26, 12, 14, 22))
    top.axes()
    top.area(f, 0, 1, BLUE, 0.35)
    top.area(f, 1, 2, ORANGE, 0.30)
    top.curve(f, 0, 2, INK, 2.0)
    top.vline(1, PURPLE, 1.2, '3 3', 0, 4.1)
    top.lab(0.5, 0.45, '∫₀¹ = 1/3', BLUE, 10)
    top.lab(1.55, 1.25, '∫₁² = 7/3', ORANGE, 10)
    top.lab(1.0, 4.1, 'c = 1', PURPLE, 10, dy=-2)
    bot = Plot(-0.15, 2.15, -0.3, 3.2, 360, 130, (26, 12, 14, 22))
    bot.axes()
    bot.box(0, 0.8, f(0.5), AMBER, 0.34, AMBER)
    bot.box(0.8, 1.0, f(1.0), AMBER, 0.34, AMBER)
    bot.box(1.0, 1.3, f(1.0), PINK, 0.42, PINK)
    bot.box(1.3, 2.0, f(1.6), AMBER, 0.34, AMBER)
    for x in (0.5, 1.6):
        bot.dot(bot.X(x), bot.Y(f(x)), PURPLE, 2.6)
    bot.dot(bot.X(1.0), bot.Y(f(1.0)), PINK, 3.0)
    bot.curve(f, 0, 2, INK, 1.8)
    bot.xtick(1, '1', size=9.5)
    bot.lab(1.15, 2.85, 'c = tag: split I₂', PINK, 9.5, 'start')
    bot.lab(0.1, 2.85, 'Q: 0, 0.8, 1.3, 2', INK, 9.5, 'start')
    return stack([(top, 0, 0), (bot, 0, 140)], 360, 275)


def F14_taylor_remainder():
    p = Plot(-0.2, 1.2, 0.7, 3.1, 360, 220, (26, 12, 14, 22))
    p.axes()
    p.curve(math.exp, 0, 1.05, INK, 2.4)
    p.curve(lambda x: 1 + x, 0, 1.05, PURPLE, 1.6, '4 3')
    p.curve(lambda x: 1 + x + x * x / 2, 0, 1.05, ORANGE, 1.6, '2 3')
    p.poly([(0.94, 2.0), (0.98, 2.0), (0.98, math.e), (0.94, math.e)], AMBER, 0.5, stroke=AMBER, w=1)
    p.poly([(1.04, 2.5), (1.12, 2.5), (1.12, math.e), (1.04, math.e)], PINK, 0.4, stroke=PINK, w=1)
    p.xtick(1, '1', size=9.5)
    p.lab(0.12, 2.9, 'eˣ', INK, 10, 'start')
    p.lab(0.45, 1.05, 'T₁ = 1 + x', PURPLE, 9.5, 'start')
    p.lab(0.02, 1.9, 'T₂ = 1 + x + x²/2', ORANGE, 9.5, 'start')
    p.lab(0.62, 2.15, 'R₁ = 0.718', AMBER, 9.5, 'start')
    p.lab(0.62, 2.8, 'R₂ = 0.218', PINK, 9.5, 'start')
    return p.svg()


def F15_step_jump_strip():
    g = lambda x: 2.0 if x <= 1 else 3.0
    p = Plot(-0.2, 3.2, -0.8, 3.4, 360, 200, (26, 12, 14, 22))
    p.axes()
    p.vband(0, 1.3, GREEN, 0.14, -0.6, 3.1)
    P = [0, 0.7, 1.3, 1.8, 2.4, 3.0]
    tags = [0.3, 1.0, 1.6, 2.1, 2.7]
    for (a, b), t in zip(zip(P, P[1:]), tags):
        p.box(a, b, g(t), AMBER, 0.30, AMBER)
        p.dot(p.X(t), p.Y(g(t)), PURPLE, 2.6)
    p.seg(0, 2, 1, 2, BLUE, 2.4)
    p.seg(1, 3, 3, 3, BLUE, 2.4)
    p.dot(p.X(1), p.Y(2), INK, 3.2)
    p.hole(1, 3, BLUE, 3.2)
    p.vline(0.3, GREY, 1.0, '3 3', -0.6, 3.1)
    p.vline(1.7, GREY, 1.0, '3 3', -0.6, 3.1)
    p.xtick(1, '1', size=9.5)
    p.lab(2.1, 2.2, 'g = 3', BLUE, 10)
    p.lab(0.5, 1.2, 'g = 2', BLUE, 10)
    p.lab(2.4, -0.45, 'S = 7.7, |S − 8| = 0.3', INK, 9.5)
    return p.svg()


def F16_elementary_steps():
    p1 = Plot(-0.2, 3.2, -0.6, 3.6, 118, 140, (18, 8, 8, 18))
    p1.axes(xlab='', ylab='')
    p1.poly([(0, 0), (1, 0), (1, 2), (0, 2)], BLUE, 0.35, stroke=BLUE, w=1.2)
    p1.lab(1.2, 2.6, '2φ[0,1]', BLUE, 9.5, 'start')
    p1.lab(1.2, 0.5, 'area 2', INK, 9.5, 'start')
    p2 = Plot(-0.2, 3.2, -0.6, 3.6, 118, 140, (18, 8, 8, 18))
    p2.axes(xlab='', ylab='')
    p2.poly([(1, 0), (3, 0), (3, 3), (1, 3)], PURPLE, 0.25, stroke=PURPLE, w=1.2)
    p2.lab(1.2, 3.35, '3φ(1,3]', PURPLE, 9.5, 'start')
    p2.lab(2.0, 1.2, 'area 6', INK, 9.5)
    p3 = Plot(-0.2, 3.2, -0.6, 3.6, 118, 140, (18, 8, 8, 18))
    p3.axes(xlab='', ylab='')
    p3.poly([(0, 0), (1, 0), (1, 2), (0, 2)], BLUE, 0.35, stroke=BLUE, w=1.2)
    p3.poly([(1, 0), (3, 0), (3, 3), (1, 3)], PURPLE, 0.25, stroke=PURPLE, w=1.2)
    p3.lab(1.5, 3.35, 'g', INK, 10)
    p3.lab(2.0, 1.2, 'area 8', INK, 9.5)
    return stack([(p1, 0, 0), (p2, 121, 0), (p3, 242, 0)], 360, 150)


def F17_rationals_cover():
    p = Plot(-0.05, 1.05, -0.2, 1.7, 360, 170, (20, 10, 16, 24))
    p.seg(0, 0, 1, 0, INK, 1.4)
    rs = [(0, 'r₁'), (1, 'r₂'), (0.5, 'r₃'), (1 / 3, 'r₄')]
    lengths = [0.04, 0.02, 0.01, 0.005]
    for k, (r, lab) in enumerate(rs):
        L = lengths[k]
        draw = max(L, 0.05)                 # exaggerated so the bracket is visible
        yk = 0.25 + 0.3 * k
        p.seg(r - draw / 2, yk, r + draw / 2, yk, ORANGE, 3)
        p.seg(r - draw / 2, yk - 0.05, r - draw / 2, yk + 0.05, ORANGE, 2)
        p.seg(r + draw / 2, yk - 0.05, r + draw / 2, yk + 0.05, ORANGE, 2)
        p.dot(p.X(r), p.Y(0), BLUE, 3.2)
        p.lab(r, yk + 0.14, lab + f' (len {L:g})', ORANGE, 8.5)
    p.lab(0.02, 1.62, 'total length ≤ 0.08 = ε', INK, 10, 'start')
    p.lab(0.02, 1.42, 'widths exaggerated', GREY, 8.5, 'start')
    return p.svg()


def F18_lipschitz_bound():
    f = lambda t: t
    w, z, M = 0.5, 1.5, 2.0
    p = Plot(-0.2, 2.4, -0.3, 2.9, 360, 220, (22, 12, 14, 22))
    p.axes()
    p.box(w, z, M, PINK, 0.18, PINK)
    p.area(f, w, z, AMBER, 0.45)
    p.curve(f, 0, 2, BLUE, 2.4)
    p.xtick(w, 'w', size=10)
    p.xtick(z, 'z', size=10)
    p.lab(1.0, 0.55, '∫ = 1', INK, 10)
    p.lab(1.0, 2.3, 'M(z − w) = 2', PINK, 10)
    p.lab(0.2, 2.75, 'f(t) = t', BLUE, 10, 'start')
    return p.svg()

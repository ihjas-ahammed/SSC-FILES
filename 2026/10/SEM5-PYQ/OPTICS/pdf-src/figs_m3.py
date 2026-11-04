"""Module 3 (diffraction) figures. Intensity curves and the Cornu spiral are computed."""
import math
from figs import S, fig, legend, BLUE, ORANGE, GREEN, PINK, GREY, INK, AMBER, PURPLE, SKY


def _plot(s, f, x0, x1, X0, X1, Y0, H, c=PURPLE, w=2.2, n=600, dash=None):
    """plot f(x) for x in [x0,x1] mapped to pixels [X0,X1], baseline Y0, height H (f in 0..1)"""
    pts = []
    for i in range(n + 1):
        x = x0 + (x1 - x0) * i / n
        pts.append((X0 + (X1 - X0) * i / n, Y0 - H * f(x)))
    s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), c, w, dash=dash)


def sinc2(b):
    return 1.0 if abs(b) < 1e-9 else (math.sin(b) / b) ** 2


def fresnel_vs_fraunhofer():
    s = S(360, 200)
    for k, (y0, title) in enumerate([(50, 'Fresnel: source or screen near'), (150, 'Fraunhofer: both effectively at ∞')]):
        s.text(180, y0 - 34, title, INK, 10.5, weight=700)
        s.line(150, y0 - 28, 150, y0 - 6, INK, 3)
        s.line(150, y0 + 6, 150, y0 + 28, INK, 3)
        s.line(330, y0 - 30, 330, y0 + 30, INK, 2)
        if k == 0:
            s.dot(90, y0, AMBER, 4)
            for dy in (-5, 0, 5):
                s.ray([(90, y0), (150, y0 + dy)], BLUE, 1.2)
                s.ray([(150, y0 + dy), (330, y0 + dy * 5)], GREEN, 1.2)
            s.text(90, y0 + 20, 'S', INK, 10)
        else:
            for dy in (-5, 0, 5):
                s.ray([(20, y0 + dy), (150, y0 + dy)], BLUE, 1.2)
            s.add(f"<ellipse cx='240' cy='{y0}' rx='5' ry='26' fill='#dfeef8' stroke='{INK}'/>")
            for dy in (-5, 0, 5):
                s.ray([(150, y0 + dy), (240, y0 + dy + 10)], GREEN, 1.2)
                s.ray([(240, y0 + dy + 10), (330, y0 + 20)], GREEN, 1.2)
            s.text(240, y0 + 40, 'lens', INK, 9.5)
            s.text(40, y0 + 20, 'plane wave', INK, 9.5)
    return fig(s.svg(), 'Two kinds of diffraction. <b>Fresnel</b>: the source or the screen is at a finite distance, so the wavefronts are curved. <b>Fraunhofer</b>: plane waves in, and the pattern is seen at infinity (in practice, in the focal plane of a lens).')


def single_slit_geom():
    s = S(360, 200)
    x = 100
    s.line(x, 10, x, 70, INK, 3)
    s.line(x, 130, x, 190, INK, 3)
    s.line(x + 6, 70, x + 6, 130, PURPLE, 1.6)
    s.text(x + 10, 104, 'b', PURPLE, 12, 'start')
    th = math.radians(25)
    for yy in (72, 86, 100, 114, 128):
        s.ray([(20, yy), (x, yy)], BLUE, 1.2)
        s.ray([(x, yy), (x + 200 * math.cos(th), yy - 200 * math.sin(th) * 0 + 200 * math.sin(th) * -1)], GREEN, 1.2) if False else s.ray([(x, yy), (x + 190 * math.cos(th), yy + 190 * math.sin(th))], GREEN, 1.2)
    # path difference triangle
    A, B = (x, 70), (x, 130)
    Np = (x + 60 * math.sin(th) * math.sin(th), 70 + 60 * math.sin(th) * math.cos(th))
    s.line(A[0], A[1], A[0] + 60 * math.sin(th) * math.sin(th), A[1] + 0, GREY, 0)
    foot = (B[0] - 0, B[1])
    # perpendicular from A to ray from B
    t = (A[0] - B[0]) * math.cos(th) + (A[1] - B[1]) * math.sin(th)
    P = (B[0] + t * math.cos(th), B[1] + t * math.sin(th))
    s.line(A[0], A[1], P[0], P[1], GREY, 1.2, '3 3')
    s.line(B[0], B[1], P[0], P[1], ORANGE, 2.6)
    s.text(P[0] - 30, P[1] + 22, 'b sin θ', ORANGE, 11)
    s.arc(x, 100, 30, -25, 0, INK, label='θ', lr=42)
    s.line(x, 100, x + 60, 100, GREY, 1, '3 3')
    s.text(250, 40, 'edge-to-edge path difference', INK, 10)
    s.text(250, 54, 'Δ = b sin θ', ORANGE, 11, weight=700)
    return fig(s.svg(), 'Single slit of width $b$, light diffracted at angle θ. The rays from the two edges differ in path by $b\\sin\\theta$. When this is one whole wavelength, the slit splits into two halves that cancel pair by pair: the first dark band.')


def single_slit_pattern():
    s = S(360, 170)
    Y0 = 140
    s.line(10, Y0, 350, Y0, INK, 1.2)
    _plot(s, lambda b: sinc2(b), -3.2 * math.pi, 3.2 * math.pi, 15, 345, Y0, 115)
    for k in (-3, -2, -1, 1, 2, 3):
        X = 15 + (345 - 15) * (k * math.pi + 3.2 * math.pi) / (6.4 * math.pi)
        s.line(X, Y0, X, Y0 + 5, INK, 1)
        s.text(X, Y0 + 17, f'{k}π' if abs(k) > 1 else ('π' if k == 1 else '−π'), INK, 9.5)
    s.text(180, Y0 + 30, 'β = (πb/λ) sin θ', INK, 10)
    s.text(260, 40, 'I = I₀ (sin β / β)²', PURPLE, 11, weight=700)
    s.text(285, 110, '4.7%', ORANGE, 9.5)
    s.text(75, 110, '4.7%', ORANGE, 9.5)
    return fig(s.svg(), 'Single-slit Fraunhofer pattern. A bright, wide central maximum; dark points at $\\beta = \\pm\\pi, \\pm2\\pi, \\ldots$ ($b\\sin\\theta = m\\lambda$); weak secondary maxima (the first is only 4.7% of the centre).')


def two_slit_pattern():
    s = S(360, 180)
    Y0 = 150
    s.line(10, Y0, 350, Y0, INK, 1.2)
    ratio = 3  # d = 3b -> 3rd order missing
    _plot(s, lambda b: sinc2(b), -2.2 * math.pi, 2.2 * math.pi, 15, 345, Y0, 125, c=GREY, w=1.4, dash='4 3')
    _plot(s, lambda b: sinc2(b) * math.cos(ratio * b) ** 2, -2.2 * math.pi, 2.2 * math.pi, 15, 345, Y0, 125, c=PURPLE, w=2)
    s.text(270, 30, 'envelope (single slit)', GREY, 10)
    s.text(270, 44, 'fringes (two slits)', PURPLE, 10)
    s.text(180, 172, 'here d = 3b: the 3rd, 6th … bright fringes are missing', ORANGE, 10)
    return fig(s.svg(), 'Two slits, each of width $b$, centres $d$ apart: $I = 4I_0\\left(\\frac{\\sin\\beta}{\\beta}\\right)^2\\cos^2\\gamma$. Fine interference fringes ($\\cos^2\\gamma$) sit inside the single-slit envelope. Where a fringe falls on an envelope zero, it is a <b>missing order</b>.')


def nslit_pattern():
    s = S(360, 190)
    Y0 = 160
    N = 6
    s.line(10, Y0, 350, Y0, INK, 1.2)

    def f(g):
        sg = math.sin(g)
        val = N * N if abs(sg) < 1e-6 else (math.sin(N * g) / sg) ** 2
        return val / (N * N) * sinc2(g / 4)
    _plot(s, f, -2.3 * math.pi, 2.3 * math.pi, 15, 345, Y0, 135, n=1600)
    s.text(180, 182, f'N = {N}: sharp principal maxima, N − 2 = 4 tiny ones between', INK, 10)
    s.text(270, 30, 'I ∝ (sin Nγ / sin γ)²', PURPLE, 11, weight=700)
    return fig(s.svg(), 'N slits. The principal maxima stay at the same places ($d\\sin\\theta = m\\lambda$) but become taller ($\\propto N^2$) and much narrower as N grows. Between two principal maxima there are $N-1$ minima and $N-2$ weak secondary maxima.')


def grating():
    s = S(360, 200)
    x = 120
    for k in range(9):
        y = 40 + k * 15
        s.line(x, y - 5, x, y + 5, INK, 3)
    th = math.radians(22)
    for k in range(8):
        y = 47.5 + k * 15
        s.ray([(20, y), (x, y)], BLUE, 1)
        s.ray([(x, y), (x + 170 * math.cos(th), y - 170 * math.sin(th))], GREEN, 1)
    s.text(x, 30, 'grating: N lines, spacing d', INK, 10)
    s.text(270, 170, 'd sin θ = mλ', PURPLE, 12, weight=700)
    s.text(270, 186, '(grating equation)', INK, 10)
    s.arc(x, 107.5, 40, 0, 22, INK, label='θ', lr=52)
    s.line(x, 107.5, x + 70, 107.5, GREY, 1, '3 3')
    return fig(s.svg(), 'A diffraction grating: many equally spaced slits. Bright lines appear only in directions where light from neighbouring slits differs in path by a whole number of wavelengths.')


def rayleigh():
    s = S(360, 160)
    Y0 = 130
    s.line(10, Y0, 350, Y0, INK, 1.2)
    _plot(s, lambda b: sinc2(b), -3 * math.pi, 1.6 * math.pi, 15, 260, Y0, 100, c=BLUE, w=1.8)
    _plot(s, lambda b: sinc2(b - math.pi), -2.0 * math.pi, 2.6 * math.pi, 68, 313, Y0, 100, c=ORANGE, w=1.8)
    s.text(180, 152, 'max of one falls on the first minimum of the other', INK, 10)
    s.text(300, 30, 'just resolved', PURPLE, 11, weight=700)
    return fig(s.svg(), 'Rayleigh criterion: two wavelengths are "just resolved" when the principal maximum of one falls on the first minimum of the other. For a grating this gives the resolving power $\\lambda/\\Delta\\lambda = mN$.')


def half_period_zones():
    s = S(360, 230)
    O = (60, 205)
    P = (330, 205)
    s.line(O[0], 15, O[0], 215, INK, 2)
    s.text(O[0] + 6, 22, 'plane wavefront', INK, 10, 'start')
    s.dot(*P, PINK).text(P[0], P[1] + 18, 'P', PINK, 12)
    b, lam = 270, 30
    cols = [BLUE, GREEN, ORANGE, PURPLE]
    for m in range(0, 4):
        r = math.sqrt((b + m * lam / 2) ** 2 - b * b) if m else 0
        y = O[1] - r
        s.line(O[0], y, P[0], P[1], cols[m], 1.6)
        s.dot(O[0], y, cols[m], 2.6)
        if m:
            s.text(O[0] - 6, y + 4, 'r' + '₁₂₃'[m - 1], cols[m], 11, 'end')
        lab = 'b' if m == 0 else f'b + {m}λ/2'
        t = 0.35
        s.text(O[0] + (P[0] - O[0]) * t + 4, y + (P[1] - y) * t - 4, lab, cols[m], 10, 'start')
    s.text(200, 60, 'each ring is λ/2 further from P', INK, 10)
    s.text(200, 74, 'than the one inside it', INK, 10)
    return fig(s.svg(), 'Fresnel half-period zones. Divide the wavefront into rings whose distances to P increase by λ/2 each time. Light from neighbouring zones arrives half a wave apart (out of step), so their effects nearly cancel. $r_m \\approx \\sqrt{m\\lambda b}$.')


def zone_plate():
    s = S(360, 190)
    c = (95, 95)
    for m in range(14, 0, -1):
        r = 22 * math.sqrt(m)
        fill = INK if m % 2 == 0 else '#ffffff'
        s.add(f"<circle cx='{c[0]}' cy='{c[1]}' r='{r:.1f}' fill='{fill}' stroke='{INK}' stroke-width='0.6'/>")
    s.text(c[0], 186, 'every other zone blocked', INK, 10)
    s.text(270, 50, 'only zones that add in step', INK, 10)
    s.text(270, 64, 'are left open → bright focus', INK, 10)
    s.text(270, 100, 'f = r₁² / λ', PURPLE, 13, weight=700)
    s.text(270, 125, 'also weaker foci at f/3, f/5, …', INK, 10)
    return fig(s.svg(), 'A zone plate: rings with radii $\\propto\\sqrt m$, alternate rings blackened. All open zones send light to P in step, so P is very bright. It acts like a lens with focal length $r_1^2/\\lambda$.')


def _fresnel(v, n=400):
    C = Sv = 0.0
    if v == 0:
        return 0.0, 0.0
    h = v / n
    for i in range(n):
        u = (i + 0.5) * h
        C += math.cos(math.pi * u * u / 2) * h
        Sv += math.sin(math.pi * u * u / 2) * h
    return C, Sv


def cornu():
    s = S(360, 260)
    cx, cy, k = 180, 130, 140
    pts = []
    for i in range(-300, 301):
        v = i / 60
        C, Sv = _fresnel(v)
        pts.append((cx + k * C, cy - k * Sv))
    s.line(cx - 120, cy, cx + 120, cy, GREY, 0.8)
    s.line(cx, cy - 120, cx, cy + 120, GREY, 0.8)
    s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), PURPLE, 2)
    Zp, Zm = (cx + k * 0.5, cy - k * 0.5), (cx - k * 0.5, cy + k * 0.5)
    s.dot(*Zp, ORANGE).text(Zp[0] - 30, Zp[1] - 4, 'Z⁺', ORANGE, 11, 'end')
    s.dot(*Zm, ORANGE).text(Zm[0] + 30, Zm[1] + 4, 'Z⁻', ORANGE, 11, 'start')
    s.dot(cx, cy, INK).text(cx + 6, cy + 14, 'O (v = 0)', INK, 10, 'start')
    s.line(*Zm, *Zp, GREY, 1.2, '4 3')
    s.text(cx + 8, cy - 108, 'S(v)', INK, 10, 'start')
    s.text(cx + 125, cy - 4, 'C(v)', INK, 10, 'start')
    return fig(s.svg(), 'The Cornu spiral: the points $(C(v), S(v))$ of the Fresnel integrals. The amplitude at a point of the screen is the length of the chord between the right two points of the spiral. Intensity ∝ (chord)².')


def straight_edge():
    s = S(360, 180)
    Y0 = 140
    s.line(10, Y0, 350, Y0, INK, 1.2)
    vals = []
    for i in range(0, 401):
        v = -3 + 7 * i / 400
        C, Sv = _fresnel(v)
        I = 0.5 * ((C + 0.5) ** 2 + (Sv + 0.5) ** 2)
        vals.append((15 + 330 * i / 400, Y0 - 70 * I))
    s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in vals), PURPLE, 2.2)
    xe = 15 + 330 * 3 / 7
    s.line(xe, 20, xe, Y0 + 6, INK, 1.2, '4 3')
    s.rect(10, Y0 + 8, xe - 10, 10, INK)
    s.text(xe / 2 + 5, Y0 + 32, 'geometrical shadow', INK, 10)
    s.text(xe + 85, Y0 + 32, 'illuminated side', INK, 10)
    s.line(xe, Y0 - 70, 350, Y0 - 70, GREY, 1, '3 3')
    s.text(xe - 8, Y0 - 76, 'I₀ level →', GREY, 9.5, 'end')
    s.text(xe - 6, Y0 - 70 * 0.25 - 6, 'I₀/4', ORANGE, 10, 'end')
    return fig(s.svg(), 'Diffraction at a straight edge. In the shadow the light fades smoothly to zero; at the edge of the shadow it is exactly $I_0/4$; on the bright side it wobbles above and below $I_0$ (first peak ≈ 1.37 $I_0$) before settling.')


def phasor_chain():
    s = S(360, 200)
    N, a = 6, 42
    for k, (gam, ox, title) in enumerate([(0.0, 15, 'in step: N arrows in a line'), (math.radians(40), 205, 'each turned by 2γ: an arc')]):
        x, y = ox, 150
        ang = 0
        start = (x, y)
        for i in range(N):
            sc = 0.6 if k == 0 else 0.75
            nx, ny = x + a * sc * math.cos(ang), y - a * sc * math.sin(ang)
            s.line(x, y, nx, ny, BLUE, 2, arrow=True)
            x, y = nx, ny
            ang += gam
        s.line(*start, x, y, GREEN, 2.6, arrow=True, op=0.9)
        s.text(ox + 70, 185, title, INK, 9.5)
    s.text(180, 22, 'green = resultant (the chord)', GREEN, 10.5)
    s.text(180, 38, 'R = a sin(Nγ) / sin γ', PURPLE, 11, weight=700)
    return fig(s.svg(), 'N slits as N equal arrows. Each slit\'s wave is a little further along in phase than the last, so each arrow is turned by the same angle. The arrows form part of a polygon; the resultant is the chord. When the polygon closes, the light cancels.')


def slit_arc():
    s = S(360, 170)
    # straight line, an arc, a closed circle
    s.line(20, 120, 120, 120, BLUE, 2.6, arrow=True)
    s.text(70, 145, 'θ = 0: straight, R = A₀', INK, 9.5)
    L = 100

    def arc(x0, y0, tot, c=BLUE):
        pts, x, y = [(x0, y0)], x0, y0
        for k in range(80):
            ang = tot * (k + 0.5) / 80
            x += L / 80 * math.cos(ang)
            y -= L / 80 * math.sin(ang)
            pts.append((x, y))
        s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), c, 2.4)
        return pts
    p = arc(150, 125, math.radians(140))
    s.line(*p[0], *p[-1], GREEN, 2.4)
    s.text(190, 145, 'arc: chord shorter', INK, 9.5)
    arc(262, 120, 2 * math.pi)
    s.text(300, 145, 'closed: R = 0 (dark)', INK, 9.5)
    s.text(180, 24, 'same total length, bent more as θ grows', INK, 10)
    return fig(s.svg(), 'A single slit as infinitely many tiny arrows. They form a smooth arc of fixed length $A_0$. The resultant is the chord: $A_0\\,\\frac{\\sin\\beta}{\\beta}$. The first dark band is where the arc closes into a full circle ($b\\sin\\theta = \\lambda$).')


def _j1(x):
    # Bessel J1 by series (enough for x < 12)
    s, term, k = 0.0, x / 2, 0
    while k < 40:
        s += term
        k += 1
        term *= -(x * x / 4) / (k * (k + 1))
    return s


def airy():
    s = S(360, 170)
    Y0 = 140
    s.line(10, Y0, 230, Y0, INK, 1.2)
    f = lambda v: 1.0 if abs(v) < 1e-6 else (2 * _j1(v) / v) ** 2
    _plot(s, f, -11, 11, 15, 225, Y0, 115)
    for v in (-7.016, -3.832, 3.832, 7.016):
        X = 15 + 210 * (v + 11) / 22
        s.line(X, Y0, X, Y0 + 5, INK, 1)
    s.text(120, Y0 + 20, 'first dark ring: sin θ = 1.22 λ / D', ORANGE, 9.5)
    c = (300, 75)
    for r, op in ((48, 0.08), (36, 0.18), (14, 1.0)):
        s.add(f"<circle cx='{c[0]}' cy='{c[1]}' r='{r}' fill='{INK}' opacity='{op}'/>")
    s.add(f"<circle cx='{c[0]}' cy='{c[1]}' r='24' fill='none' stroke='#ffffff' stroke-width='5'/>")
    s.add(f"<circle cx='{c[0]}' cy='{c[1]}' r='42' fill='none' stroke='#ffffff' stroke-width='4'/>")
    s.text(c[0], 150, 'seen on the screen', INK, 9.5)
    return fig(s.svg(), 'Fraunhofer diffraction by a circular hole of diameter D: a bright central disc (the Airy disc, about 84% of the light) surrounded by faint rings. The first dark ring is at $\\sin\\theta = 1.22\\lambda/D$.')


def tan_beta():
    s = S(360, 180)
    X0, Y0, kx, ky = 20, 150, 22, 9
    s.line(X0, Y0, 350, Y0, INK, 1)
    s.line(X0, 10, X0, 175, INK, 1)
    s.line(X0, Y0, X0 + kx * 14, Y0 - ky * 14, ORANGE, 2)
    s.text(X0 + kx * 14 - 4, Y0 - ky * 14 + 16, 'y = β', ORANGE, 10.5, 'end')
    for n in range(0, 4):
        lo, hi = (n - 0.5) * math.pi + 0.02, (n + 0.5) * math.pi - 0.02
        pts = []
        for i in range(200):
            b = lo + (hi - lo) * i / 199
            if b < 0:
                continue
            y = math.tan(b)
            if -1.6 < y < 15.5:
                pts.append((X0 + kx * b, Y0 - ky * y))
        if len(pts) > 1:
            s.path('M' + ' L'.join(f'{a:.1f},{c:.1f}' for a, c in pts), BLUE, 1.8)
    for b, lab in ((1.4303 * math.pi, '1.43π'), (2.459 * math.pi, '2.46π'), (3.4709 * math.pi, '3.47π')):
        if X0 + kx * b < 350:
            s.dot(X0 + kx * b, Y0 - ky * b, PINK, 3.2)
            s.text(X0 + kx * b, Y0 + 16, lab, PINK, 9.5)
    s.text(60, 20, 'y = tan β', BLUE, 10.5)
    return fig(s.svg(), 'The secondary maxima of a single slit are where the line $y = \\beta$ meets $y = \\tan\\beta$ (pink dots): at $\\beta = 1.43\\pi, 2.46\\pi, \\ldots$, a little before $1.5\\pi, 2.5\\pi, \\ldots$.')

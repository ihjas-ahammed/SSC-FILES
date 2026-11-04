"""Module 4 (polarisation) figures."""
import math
from figs import S, fig, legend, BLUE, ORANGE, GREEN, PINK, GREY, INK, AMBER, PURPLE, SKY


def _arrow2(s, cx, cy, ang, L, c, w=2.2):
    dx, dy = L * math.cos(ang) / 2, -L * math.sin(ang) / 2
    s.line(cx, cy, cx + dx, cy + dy, c, w, arrow=True)
    s.line(cx, cy, cx - dx, cy - dy, c, w, arrow=True)


def states():
    s = S(360, 150)
    cols = [(60, 'unpolarised', None), (150, 'linear', 'lin'), (240, 'circular', 'circ'), (320, 'elliptical', 'ell')]
    for x, lab, kind in cols:
        cy = 65
        s.add(f"<circle cx='{x}' cy='{cy}' r='38' fill='#f6f7f9' stroke='{GREY}' stroke-width='0.8'/>")
        if kind is None:
            for k in range(6):
                _arrow2(s, x, cy, math.pi * k / 6, 66, BLUE, 1.6)
        elif kind == 'lin':
            _arrow2(s, x, cy, math.radians(60), 70, BLUE)
        elif kind == 'circ':
            s.add(f"<circle cx='{x}' cy='{cy}' r='30' fill='none' stroke='{BLUE}' stroke-width='2.2'/>")
            s.line(x + 30, cy + 2, x + 30, cy - 6, BLUE, 2.2, arrow=True)
        else:
            s.add(f"<ellipse cx='{x}' cy='{cy}' rx='34' ry='16' fill='none' stroke='{BLUE}' stroke-width='2.2' transform='rotate(-30 {x} {cy})'/>")
        s.text(x, 125, lab, INK, 10.5)
    s.text(180, 145, 'tip of the electric field E, seen with the light coming towards you', GREY, 9.5)
    return fig(s.svg(), 'States of polarisation, drawn as the path traced by the tip of the electric field vector. Unpolarised light changes direction randomly and very fast; polarised light keeps an orderly pattern.')


def transverse():
    s = S(360, 150)
    y0 = 80
    s.line(20, y0, 340, y0, GREY, 1)
    s.line(320, y0, 345, y0, INK, 1.4, arrow=True)
    s.text(345, y0 + 16, 'travels', INK, 10, 'end')
    pts = [(20 + i, y0 - 45 * math.sin(2 * math.pi * i / 110)) for i in range(0, 300)]
    s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), BLUE, 2.2)
    for i in range(10, 300, 22):
        yy = y0 - 45 * math.sin(2 * math.pi * i / 110)
        s.line(20 + i, y0, 20 + i, yy, BLUE, 1, op=0.5)
    s.text(150, 20, 'E vibrates up–down, at 90° to the direction of travel', BLUE, 10.5)
    return fig(s.svg(), 'Light is a <b>transverse</b> wave: the electric field vibrates perpendicular to the direction the light travels. Only transverse waves can be polarised (sound in air, a longitudinal wave, cannot).')


def malus():
    s = S(360, 170)
    y0 = 85
    for x, ang, lab in ((110, 90, 'polariser'), (240, 90 - 40, 'analyser')):
        s.add(f"<ellipse cx='{x}' cy='{y0}' rx='16' ry='52' fill='#f1ecfc' stroke='{INK}' stroke-width='1.4'/>")
        a = math.radians(ang)
        s.line(x - 36 * math.cos(a) * 0.4, y0 + 36 * math.sin(a), x + 36 * math.cos(a) * 0.4, y0 - 36 * math.sin(a), PURPLE, 2.2)
        s.text(x, 155, lab, INK, 10)
    s.ray([(15, y0), (110, y0)], BLUE, 2.4)
    s.text(55, y0 - 12, 'unpolarised I₀', BLUE, 9.5)
    s.ray([(110, y0), (240, y0)], GREEN, 2.4)
    s.text(175, y0 - 12, 'I₀/2', GREEN, 10)
    s.ray([(240, y0), (345, y0)], ORANGE, 2.4)
    s.text(300, y0 - 12, '(I₀/2) cos²θ', ORANGE, 10)
    s.text(240, 24, 'axis turned by θ', PURPLE, 10)
    return fig(s.svg(), "Polariser and analyser. The polariser passes half of unpolarised light. If the analyser's axis makes angle θ with the polariser's, only the component $E\\cos\\theta$ gets through, so the intensity becomes $I\\cos^2\\theta$ (<b>Malus' law</b>). Crossed (θ = 90°): darkness.")


def malus_components():
    s = S(360, 170)
    O = (90, 140)
    th = math.radians(35)
    E = 120
    s.line(O[0], O[1], O[0], O[1] - E, BLUE, 2.6, arrow=True)
    s.text(O[0] - 6, O[1] - E / 2, 'E', BLUE, 13, 'end')
    ax = (O[0] + 140 * math.sin(th), O[1] - 140 * math.cos(th))
    s.line(O[0], O[1], *ax, PURPLE, 1.4, '5 4')
    s.text(ax[0] + 4, ax[1], 'analyser axis', PURPLE, 10, 'start')
    comp = E * math.cos(th)
    P = (O[0] + comp * math.sin(th), O[1] - comp * math.cos(th))
    s.line(O[0], O[1], *P, GREEN, 3, arrow=True)
    s.line(O[0], O[1] - E, P[0], P[1], GREY, 1, '3 3')
    s.text(P[0] + 8, P[1] + 14, 'E cos θ (passes)', GREEN, 10.5, 'start')
    s.arc(O[0], O[1], 40, 90 - 35, 90, INK, label='θ', lr=52)
    s.text(260, 150, 'I ∝ E² → I = I₀ cos²θ', ORANGE, 11, weight=700)
    return fig(s.svg(), "Why $\\cos^2$: split E into a part along the analyser's axis ($E\\cos\\theta$, which passes) and a part across it (blocked). Intensity goes as amplitude squared.")


def brewster():
    s = S(360, 210)
    y = 105
    s.rect(0, y, 360, 105, '#e3f1fb')
    s.line(0, y, 360, y, INK, 1.4)
    s.text(350, y - 6, 'air', INK, 10, 'end')
    s.text(350, 200, 'glass n', INK, 10, 'end')
    n = 1.5
    ib = math.atan(n)
    r = math.pi / 2 - ib
    P = (170, y)
    L = 100
    s.ray([(P[0] - L * math.sin(ib), y - L * math.cos(ib)), P], BLUE)
    s.ray([P, (P[0] + L * math.sin(ib), y - L * math.cos(ib))], ORANGE)
    s.ray([P, (P[0] + L * math.sin(r), y + L * math.cos(r))], GREEN)
    s.line(P[0], 10, P[0], 200, GREY, 1, '4 4')
    s.arc(P[0], y, 32, 90, 90 + math.degrees(ib), BLUE, label='iB', lr=46)
    rx, ry = P[0] + L * math.sin(ib), y - L * math.cos(ib)
    s.text(rx + 6, ry, 'reflected: fully polarised', ORANGE, 10, 'start') if False else s.text(rx - 10, ry - 8, 'reflected: plane polarised', ORANGE, 10)
    s.text(250, 140, 'reflected ⟂ refracted', PURPLE, 10.5)
    s.text(70, 30, 'tan iB = n', PURPLE, 13, weight=700)
    for k in range(4):
        t = 0.3 + 0.18 * k
        cx, cy = P[0] + L * math.sin(ib) * t, y - L * math.cos(ib) * t
        s.dot(cx, cy, ORANGE, 2.4)
    return fig(s.svg(), "Brewster's law. At the angle $i_B$ with $\\tan i_B = n$, the reflected light is completely plane polarised (vibrations perpendicular to the plane of incidence: the dots), and the reflected and refracted rays are at 90°.")


def double_refraction():
    s = S(360, 200)
    s.path("M80,40 L260,40 L300,160 L120,160 Z", INK, 1.6, '#eef3fb')
    s.text(190, 30, 'calcite crystal', INK, 10)
    s.ray([(40, 100), (100, 100)], BLUE, 2)
    s.ray([(100, 100), (280, 100)], GREEN, 1.8)
    s.ray([(100, 100), (280, 130)], ORANGE, 1.8)
    s.ray([(280, 100), (345, 100)], GREEN, 1.8)
    s.ray([(280, 130), (345, 130)], ORANGE, 1.8)
    s.text(350, 88, 'O-ray', GREEN, 10.5, 'end')
    s.text(345, 146, 'E-ray', ORANGE, 10.5, 'end')
    for k in range(3):
        s.line(288 + k * 12, 100 - 6, 288 + k * 12, 100 + 6, GREEN, 1.6)
        s.dot(288 + k * 12, 130, ORANGE, 2.4)
    s.text(180, 190, 'two rays, polarised at 90° to each other', INK, 10)
    return fig(s.svg(), 'Double refraction. Inside calcite one ray splits into two: the <b>ordinary</b> ray (obeys Snell\'s law, same speed in all directions) and the <b>extraordinary</b> ray (speed depends on direction). They come out plane polarised at right angles to each other.')


def huygens_wavelets():
    s = S(360, 200)
    for k, (cx, title, sgn) in enumerate([(95, 'negative crystal (calcite)', 1), (270, 'positive crystal (quartz)', -1)]):
        cy = 95
        ro = 55
        re_ = 70 if sgn > 0 else 42
        s.add(f"<circle cx='{cx}' cy='{cy}' r='{ro}' fill='none' stroke='{GREEN}' stroke-width='2'/>")
        s.add(f"<ellipse cx='{cx}' cy='{cy}' rx='{re_}' ry='{ro}' fill='none' stroke='{ORANGE}' stroke-width='2' stroke-dasharray='5 3'/>")
        s.line(cx, cy - 75, cx, cy + 75, PURPLE, 1.4, '6 3')
        s.text(cx + 4, cy - 70, 'optic axis', PURPLE, 9, 'start')
        s.text(cx, 190, title, INK, 10)
    s.text(180, 14, 'green = O wavelet (sphere)  ·  orange = E wavelet (ellipsoid)', INK, 9.5)
    return fig(s.svg(), "Huygens' explanation. Each point of the wavefront sends out two wavelets: a sphere (O) and an ellipsoid of revolution (E). They touch along the optic axis, where both rays have the same speed. Negative crystal: E is faster off-axis ($\\mu_e<\\mu_o$); positive crystal: E is slower.")


def wave_plate():
    s = S(360, 190)
    s.path("M140,30 L200,30 L200,160 L140,160 Z", INK, 1.6, '#eef3fb')
    s.text(170, 22, 'plate, thickness d', INK, 10)
    s.text(170, 178, 'optic axis ∥ faces', PURPLE, 10)
    s.line(150, 40, 150, 150, PURPLE, 1.2, '5 3')
    s.ray([(20, 95), (140, 95)], BLUE, 2)
    s.ray([(200, 88), (345, 88)], GREEN, 1.8)
    s.ray([(200, 102), (345, 102)], ORANGE, 1.8)
    s.text(270, 80, 'O component', GREEN, 10)
    s.text(270, 120, 'E component (lags or leads)', ORANGE, 10)
    s.text(180, 145, '', INK, 10)
    s.text(270, 150, 'δ = (2π/λ)(μ_o − μ_e) d', PURPLE, 11, weight=700)
    return fig(s.svg(), 'A wave plate. Light enters at 90° to the optic axis, so the O and E vibrations travel along the same line but at different speeds. Leaving the plate, one is behind the other by a phase δ. Quarter-wave plate: δ = π/2. Half-wave plate: δ = π.')


def lissajous():
    s = S(360, 150)
    cases = [(0, 'δ = 0'), (math.pi / 4, 'δ = π/4'), (math.pi / 2, 'δ = π/2'), (3 * math.pi / 4, 'δ = 3π/4'), (math.pi, 'δ = π')]
    for k, (d, lab) in enumerate(cases):
        cx, cy = 40 + k * 70, 65
        a1, a2 = 26, 26 if k != 2 else 26
        pts = [(cx + a1 * math.cos(t / 30), cy - a2 * math.cos(t / 30 - d)) for t in range(0, 190)]
        s.line(cx - 32, cy, cx + 32, cy, GREY, 0.6)
        s.line(cx, cy - 32, cx, cy + 32, GREY, 0.6)
        s.path('M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in pts), BLUE, 2)
        s.text(cx, 118, lab, INK, 10)
    s.text(180, 142, 'x = a cos ωt,  y = a cos(ωt − δ): line → ellipse → circle → ellipse → line', INK, 9.5)
    return fig(s.svg(), 'Adding two perpendicular vibrations of equal amplitude with phase difference δ. δ = 0 or π: a straight line (linear). δ = π/2: a circle (circular). In between: ellipses. With unequal amplitudes, δ = π/2 gives an ellipse with axes along x and y.')


def nicol():
    s = S(360, 200)
    # parallelogram rhombus, end faces at 68 deg, diagonal cut
    A, B, C, D = (40, 160), (90, 40), (330, 40), (280, 160)
    s.path(f"M{A[0]},{A[1]} L{B[0]},{B[1]} L{C[0]},{C[1]} L{D[0]},{D[1]} Z", INK, 1.8, '#eef3fb')
    s.line(B[0], B[1], D[0], D[1], AMBER, 3)
    s.text(205, 118, 'Canada balsam', '#9a6b00', 10, 'start')
    s.text(205, 131, '(μ = 1.55)', '#9a6b00', 10, 'start')
    s.ray([(5, 112), (62, 104)], BLUE, 2)
    s.ray([(62, 104), (150, 96)], ORANGE, 1.8)
    s.ray([(150, 96), (330, 90)], ORANGE, 1.8)
    s.ray([(330, 90), (355, 88)], ORANGE, 1.8)
    s.ray([(62, 104), (150, 76)], GREEN, 1.8)
    s.ray([(150, 76), (175, 140)], GREEN, 1.8)
    s.rect(160, 158, 70, 6, INK)
    s.text(195, 178, 'blackened: absorbs O-ray', INK, 9.5)
    s.text(150, 24, 'calcite', INK, 10)
    s.text(345, 80, 'E-ray out', ORANGE, 10, 'end')
    s.text(20, 62, 'O-ray: total internal reflection', GREEN, 9.5, 'start')
    return fig(s.svg(), 'Nicol prism. A calcite crystal is cut along a diagonal and cemented with Canada balsam. The O-ray ($\\mu_o = 1.658$) meets the balsam (1.55) beyond the critical angle and is totally reflected to the blackened side. The E-ray ($\\mu_e = 1.486 < 1.55$) cannot be totally reflected and passes out, plane polarised.')


def laurent():
    s = S(360, 150)
    y = 75
    items = [(20, 'Na lamp'), (70, 'lens'), (115, 'polariser'), (165, 'half-shade'), (235, 'tube with solution'), (310, 'analyser'), (345, 'eye')]
    s.dot(20, y, AMBER, 6)
    s.add(f"<ellipse cx='70' cy='{y}' rx='5' ry='24' fill='#dfeef8' stroke='{INK}'/>")
    s.rect(110, y - 26, 10, 52, '#f1ecfc', stroke=INK)
    s.rect(160, y - 26, 10, 52, '#ffffff', stroke=INK)
    s.rect(160, y - 26, 10, 26, '#fbefd0', stroke=INK)
    s.rect(195, y - 14, 80, 28, '#e3f1fb', stroke=INK, rx=4)
    s.rect(305, y - 26, 10, 52, '#f1ecfc', stroke=INK)
    s.line(25, y, 340, y, BLUE, 1.6, arrow=True)
    for x, lab in items:
        s.text(x, 130, lab, INK, 9)
    s.text(165, 30, 'half: half-wave plate', '#9a6b00', 9.5)
    return fig(s.svg(), "Laurent's half-shade polarimeter. One half of the half-shade disc is a half-wave plate, the other half plain glass. With the analyser set for equal dimness of both halves, any rotation by the solution upsets the balance; turning the analyser back to equal dimness measures the rotation.")


def huygens_cases():
    s = S(360, 210)
    cases = [(62, 0, '(a) axis ∥ surface'), (180, 90, '(b) axis ⟂ surface'), (298, 45, '(c) axis inclined')]
    ro, re_ = 30, 42       # calcite (negative): E faster across the optic axis
    y0 = 55
    for cx, ax, lab in cases:
        a = math.radians(ax)
        s.line(cx - 52, y0, cx + 52, y0, INK, 1.8)
        lows = []
        for dx in (-20, 20):
            X = cx + dx
            s.path(f"M{X-ro},{y0} A{ro},{ro} 0 0 0 {X+ro},{y0}", GREEN, 1.3)
            pts = []
            for k in range(0, 360, 2):
                t = math.radians(k)
                u, v = ro * math.cos(t), re_ * math.sin(t)
                x = X + u * math.cos(a) - v * math.sin(a)
                y = y0 + u * math.sin(a) + v * math.cos(a)
                if y >= y0 - 0.5:
                    pts.append((x, y))
            pts.sort(key=lambda p: p[0])
            s.path('M' + ' L'.join(f'{p[0]:.1f},{p[1]:.1f}' for p in pts), ORANGE, 1.3, dash='4 2')
            lows.append((X, max(pts, key=lambda p: p[1])))
        X, low = lows[0]
        s.line(cx - 52, y0 + ro, cx + 52, y0 + ro, GREEN, 1.1, '2 2')
        s.line(cx - 52, low[1], cx + 52, low[1], ORANGE, 1.1, '2 2')
        s.line(X, y0, X, y0 + ro, GREEN, 2.2, arrow=True)
        s.line(X, y0, low[0], low[1], ORANGE, 2.2, arrow=True)
        s.line(cx - 16 * math.cos(a), y0 - 20 + 16 * math.sin(a), cx + 16 * math.cos(a), y0 - 20 - 16 * math.sin(a), PURPLE, 2.2, '4 2')
        s.text(cx, 160, lab, INK, 10)
    s.text(180, 16, 'purple = optic axis · green = O (sphere) · orange = E (ellipsoid)', INK, 9)
    s.text(180, 185, 'dashed lines = new wavefronts · arrows = rays', INK, 9.5)
    s.text(180, 202, '(calcite: E-ellipsoid outside the sphere)', GREY, 9)
    return fig(s.svg(), "Huygens' construction for normal incidence on calcite. (a) Both wavefronts parallel, rays along the same line, different speeds. (b) Wavefronts coincide: no double refraction. (c) The E-ray goes to the point where its wavefront touches the ellipsoid, so it is bent sideways.")

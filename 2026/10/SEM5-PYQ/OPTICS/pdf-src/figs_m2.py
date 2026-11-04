"""Module 2 (interference) figures. Uses the helpers and colour code of figs.py."""
import math
from figs import S, fig, legend, BLUE, ORANGE, GREEN, PINK, GREY, INK, AMBER, PURPLE, SKY


def _curve(s, f, x0, x1, n=240, c=BLUE, w=2, dash=None):
    pts = [(x0 + (x1 - x0) * i / n, None) for i in range(n + 1)]
    pts = [(x, f(x)) for x, _ in pts]
    s.path('M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in pts), c, w, dash=dash)


def wave_terms():
    s = S(360, 170)
    y0 = 85
    s.line(10, y0, 350, y0, GREY, 1)
    _curve(s, lambda x: y0 - 45 * math.sin(2 * math.pi * (x - 20) / 140), 20, 340, c=BLUE, w=2.4)
    # wavelength
    s.line(55, 25, 195, 25, PURPLE, 1.6)
    s.line(55, 20, 55, 40, PURPLE, 1)
    s.line(195, 20, 195, 40, PURPLE, 1)
    s.text(125, 18, 'wavelength λ', PURPLE, 11)
    # amplitude
    s.line(265, y0, 265, y0 - 45, ORANGE, 2, arrow=True)
    s.text(261, y0 - 50, 'amplitude a', ORANGE, 11, 'end')
    s.text(180, 160, 'one full wave = phase 2π (360°); half a wave = π', INK, 10.5)
    return fig(s.svg(), 'A wave. Moving one wavelength along it changes the <b>phase</b> by $2\\pi$. So a path difference $\\Delta$ means a phase difference $\\delta = \\frac{2\\pi}{\\lambda}\\Delta$.')


def superpose():
    s = S(360, 230)
    rows = [(45, 0, 'in step (δ = 0): add → big', GREEN), (125, math.pi, 'opposite (δ = π): cancel', ORANGE)]
    for y0, d, lab, c in rows:
        s.line(10, y0, 350, y0, GREY, 0.8)
        _curve(s, lambda x: y0 - 18 * math.sin(2 * math.pi * x / 110), 10, 230, c=BLUE, w=1.4)
        _curve(s, lambda x, d=d: y0 - 18 * math.sin(2 * math.pi * x / 110 + d), 10, 230, c=SKY, w=1.4, dash='4 3')
        amp = 36 if d == 0 else 0
        _curve(s, lambda x, a=amp: y0 + 0 - a * math.sin(2 * math.pi * x / 110), 10, 230, c=c, w=2.6)
        s.text(238, y0 - 4, lab.split(':')[0], c, 10, 'start')
        s.text(238, y0 + 10, lab.split(':')[1].strip(), c, 10, 'start')
    s.text(180, 190, 'blue + light blue = thick line (the sum)', INK, 10.5)
    s.text(180, 210, 'Amplitudes add with their signs, point by point', INK, 10.5)
    return fig(s.svg(), 'Superposition: at every point the two disturbances simply add. In step they reinforce (bright). Half a wave out of step they cancel (dark).')


def phasor_add():
    s = S(360, 190)
    O = (60, 150)
    a1, a2, d = 110, 80, math.radians(55)
    P1 = (O[0] + a1, O[1])
    P2 = (P1[0] + a2 * math.cos(d), P1[1] - a2 * math.sin(d))
    s.line(*O, *P1, BLUE, 2.6, arrow=True)
    s.text((O[0] + P1[0]) / 2, O[1] + 16, 'a₁', BLUE, 12)
    s.line(*P1, *P2, SKY, 2.6, arrow=True)
    s.text(P2[0] + 6, (P1[1] + P2[1]) / 2 + 10, 'a₂', SKY, 12, 'start')
    s.line(*O, *P2, GREEN, 3, arrow=True)
    s.text((O[0] + P2[0]) / 2 - 10, (O[1] + P2[1]) / 2 - 8, 'A', GREEN, 13)
    s.line(P1[0], P1[1], P1[0] + 60, P1[1], GREY, 1, '3 3')
    s.arc(P1[0], P1[1], 26, 0, 55, PURPLE, label='δ', lr=36)
    s.text(250, 40, 'A² = a₁² + a₂² + 2a₁a₂ cos δ', PURPLE, 11, weight=700)
    return fig(s.svg(), 'Phasor method: draw each wave as an arrow (length = amplitude, angle = phase). Join them head to tail. The arrow from start to end is the resultant. The cosine rule gives its length.')


def ydse():
    s = S(360, 220)
    y0 = 110
    sx = 30
    s.line(70, 10, 70, y0 - 30, INK, 3)
    s.line(70, y0 - 20, 70, y0 + 20, INK, 3)
    s.line(70, y0 + 30, 70, 210, INK, 3)
    S1, S2 = (70, y0 - 25), (70, y0 + 25)
    s.dot(sx, y0, AMBER, 4).text(sx, y0 + 18, 'S', INK, 11)
    s.line(330, 10, 330, 210, INK, 2.4)
    s.text(338, 205, 'screen', INK, 10, 'start') if False else s.text(325, 214, 'screen', INK, 10, 'end')
    P = (330, 50)
    s.ray([S1, P], BLUE, 1.6)
    s.ray([S2, P], GREEN, 1.6)
    s.line(70, y0, 330, y0, GREY, 1, '5 4')
    s.dot(*P, PINK).text(P[0] - 6, P[1] - 6, 'P', PINK, 12, 'end')
    s.text(60, S1[1] + 4, 'S₁', INK, 11, 'end')
    s.text(60, S2[1] + 4, 'S₂', INK, 11, 'end')
    s.line(80, S1[1], 80, S2[1], PURPLE, 1.6)
    s.text(86, y0 + 4, 'd', PURPLE, 12, 'start')
    s.line(70, 195, 330, 195, ORANGE, 1.4)
    s.text(200, 190, 'D', ORANGE, 12)
    s.line(338, y0, 338, P[1], PURPLE, 1.6)
    s.text(342, (y0 + P[1]) / 2, 'x', PURPLE, 12, 'start')
    s.text(200, 30, 'S₂P − S₁P ≈ x d / D', INK, 11, weight=700)
    return fig(s.svg(), "Young's double-slit arrangement. Light from one slit S falls on two slits S₁, S₂ (distance $d$ apart). They act as two coherent sources. On a screen at distance $D$, the point P at height $x$ gets two waves with path difference $\\Delta \\approx xd/D$.")


def fringes_cos2():
    s = S(360, 160)
    y0 = 120
    s.line(10, y0, 350, y0, INK, 1.2)
    beta = 70
    _curve(s, lambda x: y0 - 90 * math.cos(math.pi * (x - 180) / beta) ** 2, 10, 350, c=PURPLE, w=2.4)
    for k in range(-2, 3):
        x = 180 + k * beta
        s.line(x, y0, x, y0 + 5, INK, 1)
    s.line(180, y0 + 14, 180 + beta, y0 + 14, ORANGE, 1.8)
    s.text(180 + beta / 2, y0 + 30, 'fringe width β = λD/d', ORANGE, 10.5)
    s.text(180, 22, 'I = 4I₀ cos²(δ/2)', PURPLE, 11, weight=700)
    for k in range(-2, 3):
        x = 180 + k * beta
        s.rect(x - 6, 128 + 0, 12, 0, '#000')
    return fig(s.svg(), 'Intensity on the screen. Bright fringes ($4I_0$) where $\\delta = 0, 2\\pi, \\ldots$; dark (zero) where $\\delta = \\pi, 3\\pi, \\ldots$. Neighbouring bright fringes are $\\beta$ apart, all equally spaced.')


def biprism():
    s = S(360, 210)
    y0 = 105
    Sx = 40
    s.dot(Sx, y0, AMBER, 4).text(Sx, y0 + 18, 'S', INK, 11)
    bx = 120
    s.path(f"M{bx},{y0-80} L{bx+14},{y0} L{bx},{y0+80} Z", INK, 1.6, '#dfeef8')
    s.text(bx + 4, y0 - 86, 'biprism', INK, 10)
    S1, S2 = (Sx, y0 - 22), (Sx, y0 + 22)
    s.dot(*S1, GREY).text(S1[0] - 6, S1[1] + 4, 'S₁', GREY, 11, 'end')
    s.dot(*S2, GREY).text(S2[0] - 6, S2[1] + 4, 'S₂', GREY, 11, 'end')
    for (Q, src) in [((bx + 4, y0 - 35), S2), ((bx + 4, y0 + 35), S1)]:
        s.ray([(Sx, y0), Q], BLUE, 1.4)
        dx, dy = Q[0] - src[0], Q[1] - src[1]
        s.ray([Q, (Q[0] + dx * 2.6, Q[1] + dy * 2.6)], GREEN, 1.4)
        s.line(src[0], src[1], Q[0], Q[1], GREY, 1, '3 3')
    s.line(340, 15, 340, 195, INK, 2)
    s.path(f"M{bx+14},{y0} L340,{y0-38} L340,{y0+38} Z", 'none', 0, '#CC79A7', op=0.18)
    s.text(300, y0 + 4, 'fringes', PINK, 10)
    s.text(230, 206, 'light seems to come from S₁ and S₂', INK, 10)
    return fig(s.svg(), "Fresnel's biprism. Each half of the thin prism bends the light slightly. Behind it the light seems to come from two virtual sources S₁ and S₂ (grey dashed). They are copies of one source, so they are coherent. Fringes form where the two beams overlap (pink).")


def two_mirror():
    s = S(360, 215)
    O = (150, 110)
    s.line(O[0] - 120, O[1], O[0], O[1], INK, 3)
    a = math.radians(6)
    s.line(O[0], O[1], O[0] + 160 * math.cos(a), O[1] - 160 * math.sin(a), INK, 3)
    s.text(70, 128, 'mirror M₁', INK, 10)
    s.text(250, 118, 'mirror M₂ (tilted by θ)', INK, 10)
    Sp = (120, 55)
    s.dot(*Sp, AMBER, 4).text(Sp[0], Sp[1] - 8, 'S', INK, 11)
    S1 = (Sp[0], 2 * O[1] - Sp[1])
    s.dot(*S1, GREY).text(S1[0] - 8, S1[1], 'S₁', GREY, 11, 'end')
    # reflect S in mirror 2 line
    dx, dy = math.cos(a), -math.sin(a)
    vx, vy = Sp[0] - O[0], Sp[1] - O[1]
    t = vx * dx + vy * dy
    px, py = O[0] + t * dx, O[1] + t * dy
    S2 = (2 * px - Sp[0], 2 * py - Sp[1])
    s.dot(*S2, GREY).text(S2[0] + 8, S2[1], 'S₂', GREY, 11, 'start')
    # one ray off each mirror, continuing as if from the image
    for src, M in ((S1, (100, O[1])), (S2, (O[0] + 70 * math.cos(a), O[1] - 70 * math.sin(a)))):
        s.ray([Sp, M], BLUE, 1.3)
        dx, dy = M[0] - src[0], M[1] - src[1]
        L = math.hypot(dx, dy)
        s.ray([M, (M[0] + dx / L * 190, M[1] + dy / L * 190)], ORANGE, 1.3)
        s.line(src[0], src[1], M[0], M[1], GREY, 1, '3 3')
    s.text(250, 190, 'S₁, S₂: images of S in the two mirrors', INK, 10)
    s.text(250, 205, 'separation d = 2bθ', PURPLE, 10.5, weight=700)
    return fig(s.svg(), "Fresnel's two-mirror arrangement. Two mirrors meet at a very small angle θ. The images S₁, S₂ of the source in the two mirrors are very close and coherent, like the two slits of Young.")


def lloyd():
    s = S(360, 190)
    y = 140
    s.rect(110, y, 160, 8, '#cfd5df')
    s.line(110, y, 270, y, INK, 2)
    s.text(190, y + 24, 'mirror (glass plate)', INK, 10)
    Sp = (40, 105)
    S1 = (40, 2 * y - 105)
    s.dot(*Sp, AMBER, 4).text(Sp[0] - 8, Sp[1] + 4, 'S', INK, 11, 'end')
    s.dot(*S1, GREY).text(S1[0] - 8, S1[1] + 4, "S′", GREY, 11, 'end')
    P = (340, 70)
    s.line(340, 20, 340, y + 5, INK, 2)
    s.ray([Sp, P], BLUE, 1.5)
    # reflected ray via mirror point
    xm = Sp[0] + (P[0] - Sp[0]) * (y - Sp[1]) / ((y - Sp[1]) + (y - P[1]))
    s.ray([Sp, (xm, y), P], ORANGE, 1.5)
    s.line(S1[0], S1[1], xm, y, GREY, 1, '3 3')
    s.dot(*P, PINK).text(P[0] - 6, P[1] - 6, 'P', PINK, 11, 'end')
    s.text(345, y + 2, 'O', INK, 11, 'start')
    s.text(250, 30, "direct + reflected light interfere", INK, 10)
    return fig(s.svg(), "Lloyd's mirror. Light reaches P directly and after reflection at grazing incidence, as if from the virtual source S′. At O, where the screen touches the mirror's plane, the paths are equal, yet the fringe is <b>dark</b>: reflection added a phase change of π.")


def thin_film():
    s = S(360, 210)
    y1, y2 = 80, 150
    s.rect(0, y1, 360, y2 - y1, '#e3f1fb')
    s.line(0, y1, 360, y1, INK, 1.4)
    s.line(0, y2, 360, y2, INK, 1.4)
    s.text(350, 74, 'air  n = 1', INK, 10, 'end')
    s.text(350, 120, 'film  n, thickness d', INK, 10, 'end')
    s.text(350, 170, 'below the film', INK, 10, 'end')
    i = math.radians(40)
    r = math.asin(math.sin(i) / 1.5)
    A = (90, y1)
    start = (A[0] - 70 * math.tan(i), y1 - 70)
    s.ray([start, A], BLUE)
    B = (A[0] + (y2 - y1) * math.tan(r), y2)
    C = (B[0] + (y2 - y1) * math.tan(r), y1)
    s.ray([A, (A[0] + 70 * math.tan(i), y1 - 70)], ORANGE)
    s.ray([A, B], GREEN)
    s.ray([B, C], GREEN)
    s.ray([C, (C[0] + 70 * math.tan(i), y1 - 70)], ORANGE)
    s.ray([B, (B[0] + 25 * math.tan(i), y2 + 25)], GREEN, 1.2)
    s.text(A[0] + 70 * math.tan(i) + 8, y1 - 58, '1', ORANGE, 12)
    s.text(C[0] + 70 * math.tan(i) + 8, y1 - 58, '2', ORANGE, 12)
    s.line(A[0], y1 - 40, A[0], y2 + 10, GREY, 1, '3 3')
    s.arc(B[0], y2, 30, 90, 90 + math.degrees(r), GREEN, label='r', lr=40) if False else None
    s.text(B[0], y2 + 16, 'B', INK, 11)
    s.text(A[0] - 6, y1 + 14, 'A', INK, 11, 'end')
    s.text(C[0] + 6, y1 + 14, 'C', INK, 11, 'start')
    s.text(180, 202, 'path difference of rays 1 and 2:  Δ = 2 n d cos r', PURPLE, 10.5, weight=700)
    return fig(s.svg(), 'A thin film. Ray 1 reflects at the top surface; ray 2 goes into the film, reflects at the bottom and comes out. Ray 2 travels the extra optical path $2nd\\cos r$ (cosine law), where $r$ is the angle inside the film.')


def ar_coating():
    s = S(360, 170)
    s.rect(0, 70, 360, 25, '#d9efe6')
    s.rect(0, 95, 360, 75, '#e3f1fb')
    s.line(0, 70, 360, 70, INK, 1.2)
    s.line(0, 95, 360, 95, INK, 1.2)
    s.text(350, 64, 'air  n<tspan baseline-shift="sub" font-size="75%">a</tspan> = 1', INK, 10, 'end')
    s.text(350, 88, 'coating  n<tspan baseline-shift="sub" font-size="75%">f</tspan>, thickness λ/4n<tspan baseline-shift="sub" font-size="75%">f</tspan>', INK, 10, 'end')
    s.text(350, 160, 'glass  n<tspan baseline-shift="sub" font-size="75%">g</tspan>', INK, 10, 'end')
    s.ray([(60, 10), (80, 70)], BLUE)
    s.ray([(80, 70), (100, 10)], ORANGE)
    s.ray([(80, 70), (88, 95)], GREEN, 1.4)
    s.ray([(88, 95), (96, 70), (116, 10)], ORANGE, 1.4)
    s.text(140, 22, 'two weak reflections, half a wave', INK, 10, 'start')
    s.text(140, 36, 'apart → they cancel', INK, 10, 'start')
    s.text(140, 52, 'best when n<tspan baseline-shift="sub" font-size="75%">f</tspan> = √(n<tspan baseline-shift="sub" font-size="75%">a</tspan> n<tspan baseline-shift="sub" font-size="75%">g</tspan>)', PURPLE, 10.5, 'start', 700)
    return fig(s.svg(), 'A non-reflecting (anti-reflection) film. Both reflections happen at a "rarer → denser" boundary, so both get the same phase change, which cancels out. The quarter-wave thickness makes them half a wave apart, so they cancel.')


def wedge():
    s = S(360, 170)
    s.path("M20,120 L340,120 L340,70 Z", INK, 1.4, '#e3f1fb')
    s.line(20, 120, 340, 70, INK, 2)
    s.line(20, 122, 340, 122, INK, 2)
    s.text(336, 64, 't', INK, 12, 'end')
    s.arc(20, 120, 40, 0, math.degrees(math.atan(50 / 320)), PURPLE, label='φ', lr=52)
    for k in range(1, 10):
        x = 20 + k * 32
        s.line(x, 125, x, 140, PINK if k % 2 else GREY, 2)
    s.text(180, 158, 'straight, equally spaced fringes; spacing β = λ / 2nφ', PURPLE, 10.5, weight=700)
    s.text(180, 30, 'thickness grows steadily → path difference grows steadily', INK, 10)
    return fig(s.svg(), 'Wedge-shaped film (two plates touching at one edge, with a very small angle φ). Each fringe follows a line of equal thickness, so the fringes are straight lines parallel to the edge.')


def newton_rings():
    s = S(360, 200)
    y = 140
    R = 180
    cx = 120
    a = math.asin(95 / R)
    s.rect(10, y, 220, 10, '#cfd5df')
    s.line(10, y, 230, y, INK, 1.6)
    s.path(f"M{cx-95},{y - (R - R*math.cos(a)):.1f} A{R},{R} 0 0 0 {cx+95},{y - (R - R*math.cos(a)):.1f} L{cx+95},{y-45} L{cx-95},{y-45} Z", INK, 1.8, '#dfeef8')
    s.text(cx, y - 52, 'plano-convex lens (radius R)', INK, 10)
    s.text(cx, y + 26, 'glass plate', INK, 10)
    s.text(cx + 70, y + 26, '↑ air film', PURPLE, 9.5)
    # rings on right
    rc = (295, 100)
    for m in range(1, 9):
        rr = 9 * math.sqrt(m)
        s.add(f"<circle cx='{rc[0]}' cy='{rc[1]}' r='{rr*2.6:.1f}' fill='none' stroke='{INK}' stroke-width='2.2' opacity='0.8'/>")
    s.add(f"<circle cx='{rc[0]}' cy='{rc[1]}' r='9' fill='{INK}'/>")
    s.text(rc[0] - 10, 190, 'dark centre; rings get closer', INK, 9.5)
    s.text(rc[0], 18, 'dark ring m: r² = mλR', PURPLE, 10.5, weight=700)
    return fig(s.svg(), "Newton's rings. A curved lens sits on a flat plate, trapping an air film whose thickness grows with distance from the centre. Equal thickness lies on circles, so the fringes are rings. The centre is dark in reflected light.")


def michelson():
    s = S(360, 230)
    G = (170, 140)
    s.dot(30, 140, AMBER, 5).text(30, 160, 'source', INK, 10)
    s.line(G[0] - 18, G[1] + 18, G[0] + 18, G[1] - 18, INK, 3)
    s.text(G[0] + 14, G[1] + 26, 'G₁ (half-silvered)', INK, 9.5, 'start')
    s.line(G[0] + 52, G[1] + 12, G[0] + 76, G[1] - 12, GREY, 3)
    s.text(G[0] + 64, G[1] + 44, 'G₂ (compensator)', GREY, 9.5)
    s.line(330, 125, 330, 155, INK, 4)
    s.text(334, 118, 'M₂', INK, 11, 'start')
    s.line(155, 20, 185, 20, INK, 4)
    s.text(190, 18, 'M₁ (movable)', INK, 11, 'start')
    s.ray([(40, 140), G], BLUE)
    s.ray([G, (330, 140)], BLUE)
    s.ray([G, (170, 20)], BLUE)
    s.ray([(176, 20), (176, 208)], ORANGE, 1.6)
    s.ray([(330, 146), (G[0] + 8, 146)], ORANGE, 1.4)
    s.text(176, 228, 'to the eye / telescope', INK, 10)
    s.line(140, 22, 140, 60, PURPLE, 1.6, arrow=True)
    s.text(136, 44, 'move d', PURPLE, 10, 'end')
    return fig(s.svg(), 'Michelson interferometer. G₁ splits the beam into two (division of amplitude). After reflection at M₁ and M₂ the beams recombine and interfere. Moving M₁ by $d$ changes the path by $2d$; each fringe that crosses the view means $2d = \\lambda$ more.')


def stokes():
    s = S(360, 170)
    y = 80
    s.rect(0, y, 360, 90, '#e3f1fb')
    s.line(0, y, 360, y, INK, 1.4)
    s.text(350, 74, 'medium 1', INK, 10, 'end')
    s.text(350, 160, 'medium 2', INK, 10, 'end')
    A = (90, y)
    s.ray([(40, 20), A], BLUE)
    s.text(40, 16, 'a', BLUE, 12)
    s.ray([A, (140, 20)], ORANGE)
    s.text(140, 16, 'ar', ORANGE, 12)
    s.ray([A, (120, 150)], GREEN)
    s.text(124, 160, 'at', GREEN, 12)
    B = (260, y)
    s.ray([(310, 20), B], ORANGE, 1.4)
    s.ray([(290, 150), B], GREEN, 1.4)
    s.ray([B, (210, 20)], BLUE, 1.4)
    s.text(250, 16, 'reverse both rays', INK, 10)
    s.text(180, 125, 'Stokes: r′ = −r,  tt′ = 1 − r²', PURPLE, 11, weight=700)
    return fig(s.svg(), 'Stokes relations. Reverse the reflected and transmitted rays: they must rebuild the original ray only. This forces $r\' = -r$: reflection from one side differs by a phase of $\\pi$ from reflection from the other side.')


def phase_circle():
    s = S(360, 185)
    c = (75, 85)
    R = 55
    s.add(f"<circle cx='{c[0]}' cy='{c[1]}' r='{R}' fill='none' stroke='{GREY}' stroke-width='1.2'/>")
    ph = math.radians(50)
    P = (c[0] + R * math.cos(ph), c[1] - R * math.sin(ph))
    s.line(*c, *P, BLUE, 2.6, arrow=True)
    s.arc(c[0], c[1], 20, 0, 50, PURPLE, label='φ', lr=30)
    s.line(c[0] - R - 5, c[1], c[0] + R + 5, c[1], GREY, 0.8)
    s.line(P[0], P[1], 170, P[1], GREY, 1, '3 3')
    x0, x1 = 160, 350
    s.line(x0, c[1], x1, c[1], GREY, 0.8)
    pts = [(x0 + (x1 - x0) * i / 200, c[1] - R * math.sin(2 * math.pi * i / 200 + 0)) for i in range(201)]
    s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), BLUE, 2)
    for k, lab in enumerate(['0', '90°', '180°', '270°', '360°']):
        X = x0 + (x1 - x0) * k / 4
        s.text(X, c[1] + R + 14, lab, INK, 9.5)
    s.text(255, 178, 'one full turn = one wavelength of path', INK, 10)
    return fig(s.svg(), 'Phase is an angle. A point going round the circle gives the wave (its height). One full turn (360° = $2\\pi$) is one wavelength. A path difference of λ/4 is a phase difference of 90°.')


def fringe_shift():
    s = S(360, 200)
    y0 = 100
    s.line(70, 10, 70, y0 - 30, INK, 3)
    s.line(70, y0 - 20, 70, y0 + 20, INK, 3)
    s.line(70, y0 + 30, 70, 190, INK, 3)
    S1, S2 = (70, y0 - 25), (70, y0 + 25)
    s.rect(78, S1[1] - 12, 8, 24, '#d9efe6', stroke=GREEN)
    s.text(92, S1[1] - 16, 'thin plate, n, t', GREEN, 9.5, 'start')
    s.line(330, 10, 330, 190, INK, 2.2)
    s.line(70, y0, 330, y0, GREY, 1, '5 4')
    O2 = (330, y0 - 45)
    s.ray([S1, O2], GREEN, 1.6)
    s.ray([S2, O2], BLUE, 1.6)
    s.dot(330, y0, GREY).text(338, y0 + 4, 'O', GREY, 11, 'start')
    s.dot(*O2, PINK).text(338, O2[1] + 4, "O′", PINK, 11, 'start')
    s.line(320, y0, 320, O2[1], ORANGE, 2, arrow=True)
    s.text(316, (y0 + O2[1]) / 2 + 4, 'shift', ORANGE, 10, 'end')
    s.text(200, 188, 'central fringe moves towards the covered slit', INK, 10)
    s.text(60, S1[1] + 4, 'S₁', INK, 11, 'end')
    s.text(60, S2[1] + 4, 'S₂', INK, 11, 'end')
    return fig(s.svg(), 'A thin transparent plate over one slit adds an extra optical path $(n-1)t$ to that beam. The point of zero path difference (the central fringe) moves from O to O′, towards the covered slit, by $\\Delta = D(n-1)t/d$.')


def newton_geom():
    s = S(360, 190)
    C = (180, -150)
    R = 300
    ytop = C[1] + R
    a = math.asin(150 / R)
    s.path(f"M{C[0]-R*math.sin(a):.1f},{C[1]+R*math.cos(a):.1f} A{R},{R} 0 0 0 {C[0]+R*math.sin(a):.1f},{C[1]+R*math.cos(a):.1f}", INK, 2.4)
    s.line(10, ytop, 350, ytop, INK, 2)
    s.text(340, ytop + 16, 'glass plate', INK, 10, 'end')
    r = 120
    yc = C[1] + math.sqrt(R * R - r * r)
    P = (C[0] + r, yc)
    s.line(C[0], 5, C[0], ytop, GREY, 1, '4 3')
    s.line(C[0], yc, P[0], yc, BLUE, 2)
    s.text(C[0] + r / 2, yc - 6, 'r', BLUE, 12)
    s.line(P[0], yc, P[0], ytop, ORANGE, 2.4)
    s.text(P[0] + 6, (yc + ytop) / 2 + 4, 't', ORANGE, 12, 'start')
    s.line(C[0], 5, P[0], yc, PURPLE, 1.2, '3 3')
    s.text(C[0] + 48, 40, 'R', PURPLE, 12, 'start')
    s.text(C[0] - 6, 18, 'to centre of curvature ↑', PURPLE, 9.5, 'end')
    s.text(180, 182, 'R² = r² + (R − t)²  ⇒  r² = t(2R − t) ≈ 2Rt', PURPLE, 10.5, weight=700)
    return fig(s.svg(), "Newton's rings geometry. At distance $r$ from the point of contact the air film has thickness $t$. Pythagoras in the big right triangle (sides $r$, $R - t$, hypotenuse $R$) gives $r^2 \\approx 2Rt$.")


def cosine_law():
    s = S(360, 250)
    yt, yb = 70, 140
    d = yb - yt
    s.rect(0, yt, 360, d, '#e3f1fb')
    s.line(0, yt, 360, yt, INK, 1.4)
    s.line(0, yb, 360, yb, INK, 1.4)
    s.text(355, yt - 5, 'n₁', INK, 11, 'end')
    s.text(355, yt + 40, 'n₂ (film)', INK, 10, 'end')
    s.text(355, yb + 16, 'n₁', INK, 11, 'end')
    th = math.radians(45)
    thp = math.asin(math.sin(th) / 1.5)
    B = (70, yt)
    D = (B[0] + d * math.tan(thp), yb)
    F = (D[0] + d * math.tan(thp), yt)
    Bp = (B[0], yb + d)
    L = 55
    # one incident ray at B splits: reflected at B, refracted B->D->F
    s.ray([(B[0] - L * math.sin(th), yt - L * math.cos(th)), B], BLUE)
    R1 = (B[0] + 110 * math.sin(th), yt - 110 * math.cos(th))
    s.ray([B, R1], ORANGE, 2)
    s.ray([B, D, F], GREEN)
    s.ray([F, (F[0] + 70 * math.sin(th), yt - 70 * math.cos(th))], ORANGE, 2)
    # C: foot of perpendicular from F on the ray reflected at B
    ux, uy = math.sin(th), -math.cos(th)
    t = (F[0] - B[0]) * ux + (F[1] - B[1]) * uy
    C = (B[0] + t * ux, B[1] + t * uy)
    s.line(*F, *C, PURPLE, 1.6, '4 3')
    s.line(*B, *C, PURPLE, 3)
    # image point B' and line B'F through D
    s.line(B[0], B[1], *Bp, GREY, 1, '3 3')
    s.line(*Bp, *D, GREY, 1.2, '5 3')
    # K: foot of perpendicular from B onto B'F
    vx, vy = F[0] - Bp[0], F[1] - Bp[1]
    nv = math.hypot(vx, vy)
    vx, vy = vx / nv, vy / nv
    k = (B[0] - Bp[0]) * vx + (B[1] - Bp[1]) * vy
    K = (Bp[0] + k * vx, Bp[1] + k * vy)
    s.line(*B, *K, PINK, 1.6, '4 3')
    s.line(*Bp, *K, PINK, 3)
    for P, lab, dx, dy in [(B, 'B', -10, -4), (D, 'D', 0, 16), (F, 'F', 8, 12), (C, 'C', -9, -3),
                           (Bp, "B′", -8, 12), (K, 'K', 10, 4), ((B[0], yb), 'J', -9, 14)]:
        s.dot(*P, INK, 2.4).text(P[0] + dx, P[1] + dy, lab, INK, 11, 'middle')
    s.text(B[0] + 4, yt + d / 2 + 4, 'd', GREY, 11, 'start')
    s.text(B[0] + 4, yb + d / 2 + 4, 'd', GREY, 11, 'start')
    s.text(205, 210, 'Δ = n₂(BD + DF) − n₁·BC', PURPLE, 11, 'start', 700)
    s.text(205, 228, '   = n₂·B′K = 2 n₂ d cos θ′', PURPLE, 11, 'start', 700)
    return fig(s.svg(), "Cosine-law construction. One ray splits at B: reflected along BC (orange), refracted along B→D→F. FC ⟂ the reflected rays (outgoing wavefront). B′ is the mirror image of B in the lower surface (BJ = JB′ = d), so BD = B′D and B′, D, F lie on one line. BK ⟂ B′F. Snell's law makes n₁·BC (purple, thick) = n₂·KF, which leaves the extra path n₂·B′K (pink, thick).")


def wave_trains():
    s = S(360, 240)
    import random
    random.seed(4)

    def train(y0, segs, c):
        for (x0, x1, ph) in segs:
            n = 80
            pts = [(x0 + (x1 - x0) * i / n, y0 - 12 * math.sin(2 * math.pi * (x0 + (x1 - x0) * i / n) / 24 + ph)) for i in range(n + 1)]
            s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), c, 1.5)
            s.line(x1, y0 - 16, x1, y0 + 16, GREY, 1, '2 2')
    cuts = [20, 95, 170, 250, 340]
    phA = [0, 2.1, 4.0, 1.0]
    phB = [3.0, 0.4, 5.1, 2.6]
    cutsB = [20, 70, 160, 230, 340]
    s.text(10, 22, 'Two separate lamps: phase jumps at random, at different times', INK, 10, 'start', 700)
    train(45, [(cuts[i], cuts[i + 1], phA[i]) for i in range(4)], BLUE)
    train(80, [(cutsB[i], cutsB[i + 1], phB[i]) for i in range(4)], ORANGE)
    s.text(10, 113, '→ phase difference changes ~10¹⁰ times a second: no steady fringes', ORANGE, 9.5, 'start')
    s.text(10, 140, 'One source split in two (Young, biprism, film): copies jump together', INK, 10, 'start', 700)
    train(170, [(cuts[i], cuts[i + 1], phA[i]) for i in range(4)], BLUE)
    train(205, [(cuts[i] + 0, cuts[i + 1], phA[i] + 1.2) for i in range(4)], GREEN)
    s.text(10, 235, '→ phase difference fixed (set only by the path difference): coherent', GREEN, 9.5, 'start')
    return fig(s.svg(), 'Light from an atom comes in short wave trains (about 10⁻¹⁰ s, about 3 cm long). Between trains the phase jumps at random. Splitting <b>one</b> train into two copies keeps their phase difference fixed.')


def haidinger():
    s = S(360, 230)
    yt, yb = 175, 192
    s.rect(10, yt, 230, yb - yt, '#e3f1fb')
    s.line(10, yt, 240, yt, INK, 1.4)
    s.line(10, yb, 240, yb, INK, 1.4)
    s.text(125, yb + 16, 'parallel film: thickness d the same everywhere', INK, 9.5)
    yl, yf, xc, f = 100, 28, 125, 72
    s.path(f"M{xc-95},{yl} Q{xc},{yl-14} {xc+95},{yl} Q{xc},{yl+14} {xc-95},{yl} Z", INK, 1.4, '#eef6fc')
    s.text(xc + 100, yl + 4, 'lens (or eye)', INK, 9.5, 'start')
    s.line(10, yf, 240, yf, INK, 1.6)
    s.text(xc + 118, yf + 4, 'focal plane', INK, 9.5, 'start')
    s.line(xc, yf - 6, xc, yb, GREY, 0.8, '4 3')
    for ang, c in [(22, BLUE), (-22, BLUE), (0, GREEN)]:
        a = math.radians(ang)
        Pf = (xc + f * math.tan(a), yf)
        for dx in (-22, 0, 22):
            xl = xc + dx + (0 if ang == 0 else 0)
            x0 = xl - (yt - yl) * math.tan(a)
            s.line(x0, yt, xl, yl, c, 1.3, mid=True)
            s.line(xl, yl, *Pf, c, 1.1, op=.85)
        s.dot(*Pf, PINK, 3)
    cx, cy = 318, 70
    for rr in (8, 15, 21, 26, 30):
        s.add(f"<circle cx='{cx}' cy='{cy}' r='{rr}' fill='none' stroke='{INK}' stroke-width='1.8' opacity='.8'/>")
    s.text(cx, 118, 'seen face-on:', INK, 9.5)
    s.text(cx, 131, 'rings', INK, 9.5)
    s.text(258, 162, 'same angle θ', BLUE, 9.5, 'start')
    s.text(258, 176, '→ same Δ', BLUE, 9.5, 'start')
    s.text(258, 190, '→ same ring', BLUE, 9.5, 'start')
    return fig(s.svg(), "Haidinger's fringes (fringes of equal inclination). The film thickness is fixed; only the angle changes. All rays leaving the film at the same angle θ (blue, on either side) have the same path difference 2nd cos θ′ and are focused on one circle in the focal plane. So each fringe is a ring, seen focused at infinity.")


def lens_displacement():
    s = S(360, 200)
    y = 95
    s.line(10, y, 350, y, GREY, 0.8, '4 3')
    S1, S2 = (30, y - 8), (30, y + 8)
    s.dot(*S1, AMBER, 3.4).dot(*S2, AMBER, 3.4)
    s.text(22, y + 4, 'd', INK, 11, 'end')
    s.line(330, 20, 330, 175, INK, 2)
    s.text(330, 190, 'eyepiece', INK, 9.5)
    for xl, c, lab, k in [(110, BLUE, 'position 1', 3.0), (250, GREEN, 'position 2', 1 / 3.0)]:
        s.path(f"M{xl},{y-45} Q{xl+10},{y} {xl},{y+45} Q{xl-10},{y} {xl},{y-45} Z", c, 1.6, '#eef6fc')
        s.text(xl, y - 52, lab, c, 9.5)
        h = 8 * k
        s.line(S1[0], S1[1], 330, y + h, c, 0.9, op=.6)
        s.line(S2[0], S2[1], 330, y - h, c, 0.9, op=.6)
        s.dot(330, y + h, PINK, 3).dot(330, y - h, PINK, 3)
    s.text(322, y - 30, 'd₁ (big)', BLUE, 9.5, 'end')
    s.text(322, y + 44, 'd₂ (small)', GREEN, 9.5, 'end')
    s.text(180, 182, 'd = √(d₁ d₂)', PURPLE, 11.5, weight=700)
    return fig(s.svg(), 'Lens displacement method for the source separation d. A convex lens between the biprism and the eyepiece gives sharp images of S₁, S₂ at two positions. Magnifications are v/u and u/v, so d₁ = d·v/u, d₂ = d·u/v and d₁d₂ = d². (Needs D &gt; 4f.)')


def white_fringes():
    s = S(360, 200)
    y0 = 150
    x0, x1 = 20, 340
    xc = (x0 + x1) / 2
    s.line(x0, y0, x1, y0, GREY, 1)
    for lam, c in [(70, '#c0392b'), (52, GREEN), (40, PURPLE)]:
        pts = [(x, y0 - 45 * (1 + math.cos(2 * math.pi * (x - xc) / lam))) for x in range(x0, x1 + 1)]
        s.path('M' + ' L'.join(f'{a:.1f},{b:.1f}' for a, b in pts), c, 1.6)
    s.line(xc, 20, xc, y0 + 5, INK, 1, '3 3')
    s.text(xc, 15, 'Δ = 0 for every colour: white', INK, 10)
    s.text(x0, y0 + 18, 'red', '#c0392b', 10, 'start')
    s.text(x0 + 40, y0 + 18, 'green', GREEN, 10, 'start')
    s.text(x0 + 92, y0 + 18, 'violet', PURPLE, 10, 'start')
    s.text(x1, y0 + 18, 'far out: peaks mix → white again', INK, 9.5, 'end')
    for k in range(-3, 4):
        x = xc + k * 70
        if x0 < x < x1:
            s.dot(x, y0, '#c0392b', 2)
    return fig(s.svg(), 'White-light fringes. Each colour makes its own fringes with its own width β = λD/d (red widest). All are bright at the centre, so the central fringe is white. A few coloured fringes follow; further out the colours overlap and the screen looks uniformly white.')

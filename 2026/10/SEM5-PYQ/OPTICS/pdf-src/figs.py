"""SVG figures for the Optics Module 1 PDFs.

Colour code (same in every figure, also written on the figure where it matters):
  incident ray  blue   #0072B2   solid
  reflected ray orange #D55E00   solid
  refracted ray green  #009E73   solid
  virtual / extended   same colour, dashed
  normal        grey   dashed
  object        black arrow,  image  pink #CC79A7 arrow (dashed if virtual)
Geometry is computed, so the pictures are true to the formulas.
"""
import math

BLUE, ORANGE, GREEN, PINK, GREY, INK, AMBER, PURPLE, SKY = (
    '#0072B2', '#D55E00', '#009E73', '#CC79A7', '#9aa1ad', '#1d2330', '#E69F00', '#6a4fb3', '#56B4E9')
FONT = "font-family='Inter Variable, Noto Sans, sans-serif'"


class S:
    def __init__(self, w=360, h=200):
        self.w, self.h, self.o = w, h, []
        self.defs = set()

    def add(self, s):
        self.o.append(s)
        return self

    def arrowdef(self, c):
        key = c.strip('#')
        if key not in self.defs:
            self.defs.add(key)
        return f'url(#ah{key})'

    def line(self, x1, y1, x2, y2, c=INK, w=1.6, dash=None, arrow=False, mid=False, op=1):
        d = f" stroke-dasharray='{dash}'" if dash else ''
        a = f" marker-end='{self.arrowdef(c)}'" if arrow else ''
        self.add(f"<line x1='{x1:.1f}' y1='{y1:.1f}' x2='{x2:.1f}' y2='{y2:.1f}' stroke='{c}' stroke-width='{w}'{d}{a} stroke-linecap='round' opacity='{op}'/>")
        if mid:  # arrowhead half-way along
            mx, my = (x1 + x2) / 2, (y1 + y2) / 2
            self.add(f"<line x1='{x1:.1f}' y1='{y1:.1f}' x2='{mx:.1f}' y2='{my:.1f}' stroke='{c}' stroke-width='{w}' stroke-opacity='0' marker-end='{self.arrowdef(c)}'/>")
        return self

    def ray(self, pts, c=BLUE, w=1.8, dash=None):
        """polyline with an arrowhead in the middle of every segment"""
        for (x1, y1), (x2, y2) in zip(pts, pts[1:]):
            self.line(x1, y1, x2, y2, c, w, dash, mid=True)
        return self

    def path(self, d, c=INK, w=1.6, fill='none', dash=None, op=1):
        ds = f" stroke-dasharray='{dash}'" if dash else ''
        self.add(f"<path d='{d}' stroke='{c}' stroke-width='{w}' fill='{fill}'{ds} opacity='{op}' stroke-linejoin='round'/>")
        return self

    def text(self, x, y, t, c=INK, size=12, anchor='middle', weight=600, italic=False):
        st = " font-style='italic'" if italic else ''
        self.add(f"<text x='{x:.1f}' y='{y:.1f}' fill='{c}' font-size='{size}' text-anchor='{anchor}' font-weight='{weight}'{st} {FONT}>{t}</text>")
        return self

    def dot(self, x, y, c=INK, r=2.8):
        self.add(f"<circle cx='{x:.1f}' cy='{y:.1f}' r='{r}' fill='{c}'/>")
        return self

    def rect(self, x, y, w, h, fill, op=1, rx=0, stroke='none'):
        self.add(f"<rect x='{x:.1f}' y='{y:.1f}' width='{w:.1f}' height='{h:.1f}' fill='{fill}' opacity='{op}' rx='{rx}' stroke='{stroke}'/>")
        return self

    def arc(self, cx, cy, r, a1, a2, c=INK, w=1.2, label=None, lr=None, size=11, lc=None):
        """angle arc from a1 to a2 (degrees, maths convention, y up)"""
        p1 = (cx + r * math.cos(math.radians(a1)), cy - r * math.sin(math.radians(a1)))
        p2 = (cx + r * math.cos(math.radians(a2)), cy - r * math.sin(math.radians(a2)))
        large = 1 if abs(a2 - a1) > 180 else 0
        sweep = 0 if a2 > a1 else 1
        self.path(f"M{p1[0]:.1f},{p1[1]:.1f} A{r},{r} 0 {large} {sweep} {p2[0]:.1f},{p2[1]:.1f}", c, w)
        if label:
            am = math.radians((a1 + a2) / 2)
            rr = lr or r + 9
            self.text(cx + rr * math.cos(am), cy - rr * math.sin(am) + 4, label, lc or c, size)
        return self

    def objarrow(self, x, y0, y1, c=INK, dash=None, w=2.4):
        return self.line(x, y0, x, y1, c, w, dash, arrow=True)

    def svg(self):
        defs = ''.join(
            f"<marker id='ah{k}' viewBox='0 0 10 10' refX='7' refY='5' markerWidth='6' markerHeight='6' orient='auto-start-reverse'>"
            f"<path d='M0,1 L9,5 L0,9 z' fill='#{k}'/></marker>" for k in self.defs)
        return (f"<svg viewBox='0 0 {self.w} {self.h}' xmlns='http://www.w3.org/2000/svg'><defs>{defs}</defs>"
                + ''.join(self.o) + '</svg>')


def fig(svg, cap=''):
    c = f'<figcaption>{cap}</figcaption>' if cap else ''
    return f'<figure>{svg}{c}</figure>'


def legend(s, x, y, items):
    for i, (c, t, dash) in enumerate(items):
        yy = y + i * 15
        s.line(x, yy, x + 22, yy, c, 2, dash)
        s.text(x + 27, yy + 4, t, c, 10.5, 'start', 600)


# ───────────────────────── prerequisite figures ─────────────────────────

def sign_line():
    s = S(360, 175)
    y = 70
    s.line(10, y, 350, y, INK, 1.4)
    s.line(180, 20, 180, 125, GREY, 1.2, '3 3')
    for k in range(-4, 5):
        x = 180 + k * 38
        s.line(x, y - 4, x, y + 4, INK, 1.2)
        s.text(x, y + 18, f"{k*10:+d}" if k else '0', INK, 10, weight=500)
    s.text(180, 14, 'pole P = origin', INK, 10.5)
    s.line(30, 38, 120, 38, BLUE, 2.2, arrow=True)
    s.text(75, 31, 'light goes this way', BLUE, 10.5)
    s.text(300, 33, '+ along the light', GREEN, 11, weight=700)
    s.text(75, 140, '− against the light', ORANGE, 11, weight=700)
    s.objarrow(66, y, y - 26)
    s.text(66, y + 34, 'object: u = −30', INK, 10.5)
    s.objarrow(332, y, y + 26, PINK)
    s.text(350, y + 44, 'image: v = +40', PINK, 10.5, 'end')
    s.text(180, 166, 'heights: up = + , down = −', SKY, 10.5)
    return fig(s.svg(), 'Cartesian sign rule. Every distance is measured <b>from the pole</b>. Same direction as the light → plus. Opposite → minus. Heights: up plus, down minus.')


def snell_basic():
    s = S(360, 210)
    s.rect(0, 105, 360, 105, '#e3f1fb')
    s.line(0, 105, 360, 105, INK, 1.2)
    s.text(350, 98, 'air  n₁ = 1', INK, 11, 'end')
    s.text(350, 200, 'water  n₂ = 1.33', INK, 11, 'end')
    s.line(180, 15, 180, 195, GREY, 1.2, '4 4')
    s.text(186, 24, 'normal', GREY, 10, 'start')
    t1, t2 = math.radians(45), math.asin(math.sin(math.radians(45)) / 1.33)
    s.ray([(180 - 90 * math.tan(t1), 15), (180, 105)], BLUE)
    s.ray([(180, 105), (180 + 90 * math.tan(t2), 195)], GREEN)
    s.arc(180, 105, 34, 90, 135, BLUE, label='θ₁', lr=46)
    s.arc(180, 105, 40, -90, -90 + math.degrees(t2), GREEN, label='θ₂', lr=52)
    s.text(80, 145, 'bends towards', GREEN, 10.5)
    s.text(80, 158, 'the normal', GREEN, 10.5)
    s.text(80, 171, '(slower medium)', GREEN, 10.5)
    return fig(s.svg(), 'Refraction. Angles are measured from the <b>normal</b> (grey dashed), never from the surface. $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.')


def lifeguard():
    s = S(360, 215)
    s.rect(0, 0, 360, 110, '#fbf3df')
    s.rect(0, 110, 360, 105, '#dcedf8')
    s.line(0, 110, 360, 110, INK, 1.2)
    s.text(10, 18, 'SAND: you run fast', '#8a6400', 11, 'start')
    s.text(10, 205, 'WATER: you swim slowly', '#1f6aa5', 11, 'start')
    A, B = (50, 40), (300, 185)
    s.dot(*A).text(A[0], A[1] - 9, 'you (A)', INK, 11)
    s.dot(*B).text(B[0] + 4, B[1] + 18, 'swimmer (B)', INK, 11)
    s.line(A[0], A[1], B[0], B[1], GREY, 1.4, '5 4')
    s.text(150, 98, 'straight = shortest', GREY, 10)
    s.ray([A, (228, 110), B], GREEN, 2.2)
    s.text(250, 70, 'quickest: run more,', GREEN, 10.5)
    s.text(250, 83, 'swim less → bend', GREEN, 10.5)
    return fig(s.svg(), 'The lifeguard problem. The quickest route bends at the shore. Light does the same at a surface. This bending <i>is</i> refraction.')


def stationary_graphs():
    s = S(360, 140)
    def curve(x0, kind, title):
        pts = []
        for i in range(41):
            t = -1 + i / 20
            if kind == 'min': y = 0.8 * t * t
            elif kind == 'max': y = -0.8 * t * t
            else: y = 0.9 * t ** 3
            pts.append((x0 + 50 * t, 75 - 45 * y))
        s.path('M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in pts), PURPLE, 2.2)
        s.line(x0 - 22, 75, x0 + 22, 75, ORANGE, 2)
        s.dot(x0, 75, ORANGE, 3.2)
        s.text(x0, 132, title, INK, 10.5)
    curve(60, 'min', 'minimum (valley)')
    curve(180, 'max', 'maximum (hilltop)')
    curve(300, 'inf', 'flat shelf')
    s.text(180, 14, 'orange = flat spot: slope = 0 = "stationary"', ORANGE, 10.5)
    return fig(s.svg(), 'Three kinds of stationary point. Fermat says the light path is at one of these. Usually it is the valley (least time), but not always.')


def small_angle():
    s = S(360, 200)
    O = (40, 175)
    R = 290
    th = math.radians(20)
    s.path(f"M{O[0]+R},{O[1]} A{R},{R} 0 0 0 {O[0]+R*math.cos(math.radians(38)):.1f},{O[1]-R*math.sin(math.radians(38)):.1f}", GREY, 1.2)
    s.line(O[0], O[1], O[0] + R + 20, O[1], INK, 1.2)
    P = (O[0] + R * math.cos(th), O[1] - R * math.sin(th))
    T = (O[0] + R, O[1] - R * math.tan(th))
    s.line(O[0], O[1], T[0], T[1], INK, 1.2)
    s.line(P[0], P[1], P[0], O[1], BLUE, 2.4)
    s.text(P[0] - 8, O[1] - 30, 'sin θ', BLUE, 11, 'end')
    s.path(f"M{O[0]+R},{O[1]} A{R},{R} 0 0 0 {P[0]:.1f},{P[1]:.1f}", GREEN, 2.6)
    s.text(O[0] + R - 8, O[1] - 66, 'arc = θ', GREEN, 11, 'end')
    s.line(T[0], O[1], T[0], T[1], ORANGE, 2.4)
    s.text(T[0] + 4, T[1] + 4, 'tan θ', ORANGE, 11, 'start')
    s.arc(O[0], O[1], 40, 0, 20, INK, label='θ', lr=52)
    s.text(150, 140, 'radius = 1', INK, 10.5)
    s.text(110, 22, 'For small θ the three lengths', INK, 10.5, 'start')
    s.text(110, 36, 'are almost equal:', INK, 10.5, 'start')
    s.text(110, 52, 'sin θ ≈ θ ≈ tan θ  (θ in radians)', PURPLE, 11, 'start', 700)
    return fig(s.svg(), 'Why the small-angle trick works: blue, green and orange are nearly the same length when θ is small. At θ = 0.1 rad: sin = 0.0998, tan = 0.1003.')


def exterior_angle():
    s = S(360, 150)
    A, B, C = (40, 125), (200, 125), (140, 30)
    s.path(f"M{A[0]},{A[1]} L{B[0]},{B[1]} L{C[0]},{C[1]} Z", INK, 1.6)
    s.line(B[0], B[1], 330, 125, INK, 1.6, '5 4')
    s.arc(*A, 26, 0, math.degrees(math.atan2(A[1] - C[1], C[0] - A[0])), BLUE, 2, 'a', 38)
    angC1 = math.degrees(math.atan2(C[1] - A[1], A[0] - C[0]))  # direction C->A
    angC2 = math.degrees(math.atan2(C[1] - B[1], B[0] - C[0]))
    s.arc(*C, 22, angC2 + 360 if angC2 < 0 else angC2, angC1 + 360 if angC1 < 0 else angC1, GREEN, 2)
    s.text(C[0], C[1] + 38, 'b', GREEN, 12)
    ext = math.degrees(math.atan2(B[1] - C[1], C[0] - B[0]))
    s.arc(*B, 28, 0, ext, ORANGE, 2.2, 'c', 42)
    s.text(270, 40, 'outside angle c = a + b', ORANGE, 12, weight=700)
    s.text(270, 58, '(the two far inside angles)', INK, 10.5)
    return fig(s.svg(), 'Exterior angle rule (Class 9). We use it on every curved-surface diagram.')


def sagitta():
    s = S(360, 170)
    C = (300, 90)
    R = 230
    a = math.radians(32)
    s.path(f"M{C[0]-R*math.cos(a):.1f},{C[1]-R*math.sin(a):.1f} A{R},{R} 0 0 0 {C[0]-R*math.cos(a):.1f},{C[1]+R*math.sin(a):.1f}", INK, 2.2)
    V = (C[0] - R, C[1])
    s.line(V[0] - 20, C[1], C[0] + 20, C[1], GREY, 1, '4 3')
    hh = 60
    x = C[0] - math.sqrt(R * R - hh * hh)
    Ptop = (x, C[1] - hh)
    s.line(C[0], C[1], *Ptop, INK, 1.2)
    s.text((C[0] + Ptop[0]) / 2 + 8, (C[1] + Ptop[1]) / 2 - 6, 'R', INK, 12)
    s.line(Ptop[0], Ptop[1], Ptop[0], C[1], BLUE, 2.2)
    s.text(Ptop[0] - 6, C[1] - 28, 'h', BLUE, 12, 'end')
    s.line(V[0], C[1] + 8, Ptop[0], C[1] + 8, ORANGE, 2.6)
    s.text((V[0] + Ptop[0]) / 2, C[1] + 24, 's', ORANGE, 12)
    s.dot(*C).text(C[0], C[1] + 18, 'C', INK, 11)
    s.dot(*V).text(V[0] - 10, C[1] + 4, 'P', INK, 11, 'end')
    s.text(185, 150, 'small h:   s ≈ h² / 2R', PURPLE, 12, weight=700)
    return fig(s.svg(), 'Sagitta: how far a curved surface bulges (s) at height h. From Pythagoras $R^2 = h^2 + (R-s)^2$ and dropping the tiny $s^2$.')


# ───────────────────────── Fermat figures ─────────────────────────

def fermat_reflection():
    s = S(360, 262)
    y = 150
    s.rect(0, y, 360, 10, '#cfd5df')
    s.line(0, y, 360, y, INK, 2)
    s.text(350, y + 24, 'mirror', INK, 10.5, 'end')
    A, B = (60, 60), (290, 90)
    Ai = (60, 2 * y - 60)
    x = A[0] + (B[0] - A[0]) * (y - A[1]) / ((y - A[1]) + (y - B[1]))
    s.dot(*A).text(A[0] - 10, A[1] - 6, 'A', INK, 12)
    s.dot(*B).text(B[0] + 10, B[1] - 6, 'B', INK, 12)
    s.ray([A, (x, y)], BLUE)
    s.ray([(x, y), B], ORANGE)
    s.line(x, y, *Ai, BLUE, 1.4, '4 4')
    s.dot(*Ai, GREY).text(Ai[0] - 12, Ai[1] + 4, "A′", GREY, 12)
    s.line(x, 40, x, y, GREY, 1.2, '4 4')
    s.dot(x, y, INK).text(x, y + 22, 'P', INK, 12)
    s.ray([A, (150, y), B], GREY, 1.1, '2 3')
    s.text(150, y + 22, 'Q (any other)', GREY, 9.5)
    ti = math.degrees(math.atan2(y - A[1], x - A[0]))
    s.arc(x, y, 28, 90, 180 - ti, BLUE, label='i', lr=40)
    tr = math.degrees(math.atan2(y - B[1], B[0] - x))
    s.arc(x, y, 34, tr, 90, ORANGE, label='r', lr=46)
    return fig(s.svg(), 'Fermat → law of reflection. A′ is the mirror image of A, so AP = A′P. The path A′PB is shortest when it is a <b>straight line</b>, which forces $i = r$. Any other point Q gives a longer path.')


def fermat_refraction():
    s = S(360, 230)
    y = 115
    s.rect(0, y, 360, 115, '#e3f1fb')
    s.line(0, y, 360, y, INK, 1.2)
    s.text(350, 20, 'n₁ (fast)', INK, 11, 'end')
    s.text(350, 222, 'n₂ (slow)', INK, 11, 'end')
    A, B = (50, 35), (300, 205)
    n1, n2 = 1.0, 1.5
    # solve n1 sinθ1 = n2 sinθ2 for P
    lo, hi = A[0], B[0]
    for _ in range(60):
        x = (lo + hi) / 2
        s1 = (x - A[0]) / math.hypot(x - A[0], y - A[1])
        s2 = (B[0] - x) / math.hypot(B[0] - x, B[1] - y)
        if n1 * s1 < n2 * s2: lo = x
        else: hi = x
    P = (x, y)
    s.dot(*A).text(A[0] - 10, A[1] - 6, 'A', INK, 12)
    s.dot(*B).text(B[0] + 10, B[1] + 4, 'B', INK, 12)
    s.ray([A, P], BLUE)
    s.ray([P, B], GREEN)
    s.line(P[0], 20, P[0], 220, GREY, 1.2, '4 4')
    s.dot(*P).text(P[0] + 10, P[1] - 6, 'P', INK, 12)
    s.arc(P[0], y, 30, 90, 90 + math.degrees(math.atan2(x - A[0], y - A[1])), BLUE, label='θ₁', lr=44)
    s.arc(P[0], y, 34, -90, -90 + math.degrees(math.atan2(B[0] - x, B[1] - y)), GREEN, label='θ₂', lr=48)
    # dimension lines
    s.line(A[0], y + 2, A[0], A[1], GREY, 1, '2 3')
    s.text(A[0] - 6, (A[1] + y) / 2, 'h₁', INK, 11, 'end')
    s.line(B[0], y, B[0], B[1], GREY, 1, '2 3')
    s.text(B[0] + 6, (B[1] + y) / 2, 'h₂', INK, 11, 'start')
    s.line(A[0], y + 12, P[0], y + 12, PURPLE, 1.8)
    s.text((A[0] + P[0]) / 2, y + 26, 'x', PURPLE, 12)
    s.line(P[0], y - 12, B[0], y - 12, ORANGE, 1.8)
    s.text((P[0] + B[0]) / 2, y - 18, 'd − x', ORANGE, 11)
    return fig(s.svg(), 'Fermat → Snell. Slide P along the surface (change x). The optical path $n_1\\cdot AP + n_2\\cdot PB$ is stationary when $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$.')


def ellipse():
    s = S(360, 200)
    cx, cy, a, b = 180, 100, 150, 85
    c = math.sqrt(a * a - b * b)
    s.add(f"<ellipse cx='{cx}' cy='{cy}' rx='{a}' ry='{b}' fill='#f7f8fa' stroke='{INK}' stroke-width='2.4'/>")
    F1, F2 = (cx - c, cy), (cx + c, cy)
    cols = [BLUE, GREEN, PURPLE]
    for k, ang in enumerate([70, 125, 250]):
        t = math.radians(ang)
        P = (cx + a * math.cos(t), cy - b * math.sin(t))
        s.ray([F1, P, F2], cols[k], 1.8)
        s.dot(*P, cols[k])
    s.dot(*F1).text(F1[0], F1[1] + 18, 'F₁', INK, 12)
    s.dot(*F2).text(F2[0], F2[1] + 18, 'F₂', INK, 12)
    s.text(cx, cy - 6, 'every path F₁→P→F₂', INK, 10.5)
    s.text(cx, cy + 36, 'has the SAME length (= 2a)', INK, 10.5)
    return fig(s.svg(), 'Elliptical reflector. Light from one focus, after reflecting anywhere, reaches the other focus. All the paths are equal, so the path is stationary (neither longer nor shorter than its neighbours).')


def mirror_max():
    """ray reflected inside a mirror that curves more than the ellipse -> maximum"""
    s = S(360, 190)
    cx, cy, a, b = 180, 120, 140, 70
    c = math.sqrt(a * a - b * b)
    F1, F2 = (cx - c, cy), (cx + c, cy)
    s.path(f"M{cx-a},{cy} A{a},{b} 0 0 1 {cx+a},{cy}", GREY, 1.6, dash='5 4')
    s.text(cx + a - 8, cy - 46, 'ellipse', GREY, 10, 'start')
    R = 95
    s.path(f"M{cx-R},{cy-b+R} A{R},{R} 0 0 1 {cx+R},{cy-b+R}", INK, 2.6)
    s.text(cx - 105, cy - 70, 'mirror curving MORE', INK, 10, 'middle')
    P = (cx, cy - b)
    s.ray([F1, P, F2], BLUE, 1.8)
    s.dot(*F1).text(F1[0], F1[1] + 16, 'A', INK, 12)
    s.dot(*F2).text(F2[0], F2[1] + 16, 'B', INK, 12)
    s.dot(*P).text(P[0], P[1] - 8, 'P', INK, 12)
    s.text(cx, 182, 'path A→P→B is LONGER than nearby paths = maximum', ORANGE, 10.5)
    return fig(s.svg(), 'A mirror that curves more sharply than the ellipse touching it at P: the real ray APB is a <b>maximum</b>. That is why Fermat says "stationary", not "least".')


# ───────────────────────── spherical surface ─────────────────────────

def _surface(s, V, R, half=75, c=INK, w=2.6, fill=None):
    """convex (towards left) spherical surface with vertex V, centre at V+R"""
    C = (V[0] + R, V[1])
    a = math.asin(half / R)
    top = (C[0] - R * math.cos(a), C[1] - half)
    bot = (C[0] - R * math.cos(a), C[1] + half)
    if fill:
        s.path(f"M{top[0]:.1f},{top[1]:.1f} A{R},{R} 0 0 0 {bot[0]:.1f},{bot[1]:.1f} L360,{bot[1]:.1f} L360,{top[1]:.1f} Z", 'none', 0, fill)
    s.path(f"M{top[0]:.1f},{top[1]:.1f} A{R},{R} 0 0 0 {bot[0]:.1f},{bot[1]:.1f}", c, w)
    return C


def refraction_surface():
    s = S(360, 220)
    y = 120
    V = (170, y)
    R = 50
    C = _surface(s, V, R, 48, fill='#e3f1fb')
    s.line(5, y, 355, y, GREY, 1, '6 4')
    O = (20, y)
    n1, n2 = 1.0, 2.0   # picture only: makes the image land inside the frame
    u, Rr = -(V[0] - O[0]), R
    v = n2 / ((n2 - n1) / Rr + n1 / u)
    I = (V[0] + v, y)
    h = 30
    A = (C[0] - math.sqrt(R * R - h * h), y - h)
    s.ray([O, A], BLUE)
    s.ray([A, I], GREEN)
    s.line(C[0], C[1], A[0] - (C[0] - A[0]) * 1.4, A[1] - (C[1] - A[1]) * 0.55, GREY, 1.2, '4 4')
    s.dot(*O).text(O[0], y + 18, 'O', INK, 12)
    s.dot(*V).text(V[0] - 9, y + 16, 'P', INK, 12)
    s.dot(*C).text(C[0], y + 18, 'C', INK, 12)
    s.dot(*I, PINK).text(I[0], y + 18, 'I', PINK, 12)
    s.dot(*A).text(A[0] - 4, A[1] - 9, 'A', INK, 12)
    s.line(A[0], A[1], A[0], y, PURPLE, 1.2, '2 3')
    s.text(A[0] - 4, y - 10, 'h', PURPLE, 11, 'end')
    # angles at O, C, I
    aO = math.degrees(math.atan2(y - A[1], A[0] - O[0]))
    s.arc(O[0], y, 60, 0, aO, BLUE, label='α₁', lr=74)
    aC = math.degrees(math.atan2(y - A[1], C[0] - A[0]))
    s.arc(C[0], y, 22, 180 - aC, 180, INK, label='β', lr=33)
    aI = math.degrees(math.atan2(y - A[1], I[0] - A[0]))
    s.arc(I[0], y, 50, 180 - aI, 180, GREEN, label='α₂', lr=64)
    s.text(40, 30, 'medium 1  (n₁)', INK, 11, 'start')
    s.text(250, 30, 'medium 2  (n₂)', INK, 11, 'start')
    s.text((O[0] + V[0]) / 2, y + 50, '← u (negative)', BLUE, 10.5)
    s.text((V[0] + I[0]) / 2, y + 50, 'v (positive) →', GREEN, 10.5)
    return fig(s.svg(), 'Refraction at one curved surface. O = object, P = pole, C = centre of curvature, I = image, A = where the ray hits, at height h. Grey dashed = normal (always through C).')


def surface_optical_path():
    s = S(360, 190)
    y = 105
    V = (140, y)
    R = 100
    C = _surface(s, V, R, 80, fill='#e3f1fb')
    s.line(5, y, 355, y, GREY, 1, '6 4')
    O, I = (20, y), (330, y)
    h = 55
    A = (C[0] - math.sqrt(R * R - h * h), y - h)
    s.ray([O, A], BLUE)
    s.ray([A, I], GREEN)
    s.ray([O, V], BLUE, 1.4)
    s.ray([V, I], GREEN, 1.4)
    s.dot(*O).text(O[0], y + 18, 'O', INK, 12)
    s.dot(*V).text(V[0] - 9, y + 16, 'P', INK, 12)
    s.dot(*I, PINK).text(I[0], y + 18, 'I', PINK, 12)
    s.dot(*A).text(A[0] - 4, A[1] - 9, 'A', INK, 12)
    s.text(180, 175, 'perfect image ⇔  n₁·OA + n₂·AI = n₁·OP + n₂·PI', PURPLE, 10.5, weight=700)
    return fig(s.svg(), 'Equal optical paths. If every ray from O reaches I with the same optical path, all of them arrive together and I is a sharp image.')


def concave_mirror_virtual():
    """object inside focus of a concave mirror: virtual erect image behind mirror"""
    s = S(360, 210)
    y = 120
    R = 180  # radius in px
    Vx = 200
    Cx = Vx - R
    a = math.asin(95 / R)
    top = (Cx + R * math.cos(a), y - 95)
    bot = (Cx + R * math.cos(a), y + 95)
    s.path(f"M{top[0]:.1f},{top[1]:.1f} A{R},{R} 0 0 1 {bot[0]:.1f},{bot[1]:.1f}", INK, 3)
    for k in range(-8, 9):
        yy = y + k * 11
        xx = Cx + math.sqrt(max(R * R - (yy - y) ** 2, 0))
        s.line(xx, yy, xx + 7, yy - 5, GREY, 1)
    s.line(5, y, 355, y, GREY, 1, '6 4')
    f = R / 2
    Ox = Vx - 50  # |u| = 50 < f = 90
    u, fm = -50.0, -90.0
    v = 1 / (1 / fm - 1 / u)
    Ix = Vx + v
    hO = 28
    hI = -v / u * hO
    s.objarrow(Ox, y, y - hO)
    s.objarrow(Ix, y, y - hI, PINK, '5 4')
    s.dot(Vx - f, y).text(Vx - f, y + 18, 'F', INK, 12)
    s.dot(Cx, y) if Cx > 0 else None
    s.dot(Vx, y).text(Vx + 8, y + 16, 'P', INK, 12)
    # ray parallel to axis -> reflects through F
    Ptop = (Cx + math.sqrt(R * R - hO * hO), y - hO)
    s.ray([(Ox, y - hO), Ptop], BLUE)
    dx, dy = (Vx - f) - Ptop[0], y - Ptop[1]
    s.ray([Ptop, (Ptop[0] + dx * 1.6, Ptop[1] + dy * 1.6)], ORANGE)
    s.line(Ptop[0], Ptop[1], Ptop[0] - dx * 1.0, Ptop[1] - dy * 1.0, ORANGE, 1.3, '4 4')
    # ray towards pole -> reflects symmetric
    s.ray([(Ox, y - hO), (Vx, y)], BLUE)
    s.ray([(Vx, y), (Vx - 150, y + hO * 150 / 50)], ORANGE)
    s.line(Vx, y, Ix, y - hI, ORANGE, 1.3, '4 4')
    s.text(Ox, y + 18, 'O', INK, 12)
    s.text(Ix, y + 18, 'I (virtual)', PINK, 11)
    s.text(90, 22, 'object inside F (|u| < R/2)', INK, 10.5)
    s.text(90, 36, '→ upright, bigger, virtual image', PINK, 10.5)
    return fig(s.svg(), 'Concave mirror with the object closer than F. The reflected rays (orange) spread out; extended backwards (dashed) they meet behind the mirror at I. Numbers used: $u=-50$, $f=-90$ → $v=+112.5$, $m=+2.25$.')


def mirror_fermat():
    s = S(360, 200)
    y = 115
    R = 240
    Vx = 190
    Cx = Vx - R
    a = math.asin(90 / R)
    top = (Cx + R * math.cos(a), y - 90)
    bot = (Cx + R * math.cos(a), y + 90)
    s.path(f"M{top[0]:.1f},{top[1]:.1f} A{R},{R} 0 0 1 {bot[0]:.1f},{bot[1]:.1f}", INK, 3)
    s.line(5, y, 355, y, GREY, 1, '6 4')
    O = (Vx - 60, y)
    h = 60
    A = (Cx + math.sqrt(R * R - h * h), y - h)
    u, fm = -60.0, -120.0
    v = 1 / (1 / fm - 1 / u)
    I = (Vx + v, y)
    s.ray([O, A], BLUE)
    dx, dy = A[0] - I[0], A[1] - I[1]
    s.ray([A, (A[0] + dx * 0.9, A[1] + dy * 0.9)], ORANGE)
    s.line(A[0], A[1], I[0], I[1], ORANGE, 1.3, '4 4')
    s.line(Cx, y, A[0] + (A[0] - Cx) * 0.3, A[1] + (A[1] - y) * 0.3, GREY, 1.2, '4 4')
    s.dot(*O).text(O[0], y + 18, 'O', INK, 12)
    s.text(12, y - 8, '← C is further left', GREY, 9.5, 'start')
    s.dot(Vx, y).text(Vx + 8, y + 16, 'P', INK, 12)
    s.dot(*A).text(A[0] + 6, A[1] - 8, 'A', INK, 12, 'start')
    s.dot(*I, PINK).text(I[0], y + 18, 'I', PINK, 12)
    s.text(Vx - 30, y + 40, 'u', BLUE, 11)
    s.text((Vx + I[0]) / 2, y + 40, 'v', PINK, 11)
    s.text(180, 190, 'virtual image: optical path = OA − AI  (AI counted backwards)', PURPLE, 9.5)
    return fig(s.svg(), 'Fermat for the concave mirror with object inside $R/2$ (PYQ N20 Q25). The image is virtual, so the "path" to I is measured backwards along the dashed line.')


# ───────────────────────── thin lens ─────────────────────────

def _lens(s, x, y, half=80, bulge=16, c=INK, concave=False):
    if not concave:
        s.path(f"M{x},{y-half} Q{x+bulge*2},{y} {x},{y+half} Q{x-bulge*2},{y} {x},{y-half} Z", c, 2, '#dfeef8')
    else:
        s.path(f"M{x-10},{y-half} L{x+10},{y-half} Q{x+2},{y} {x+10},{y+half} L{x-10},{y+half} Q{x-2},{y} {x-10},{y-half} Z", c, 2, '#dfeef8')


def thin_lens_two_surfaces():
    s = S(360, 200)
    y = 100
    s.line(5, y, 355, y, GREY, 1, '6 4')
    _lens(s, 150, y, 80, 22)
    O, I1, I = (20, y), (345, y), (290, y)
    s.dot(*O).text(O[0], y + 18, 'O', INK, 12)
    s.dot(*I, PINK).text(I[0], y + 18, 'I', PINK, 12)
    s.dot(*I1, GREY).text(I1[0] - 4, y + 18, 'I₁', GREY, 12)
    A1 = (141, y - 50)
    A2 = (159, y - 46)
    s.ray([O, A1], BLUE)
    s.line(A1[0], A1[1], I1[0], I1[1], GREY, 1.2, '4 4')
    s.ray([A1, A2], GREEN, 1.6)
    s.ray([A2, I], GREEN)
    s.text(118, 30, 'surface 1: R₁', INK, 10.5, 'end')
    s.text(185, 30, 'surface 2: R₂', INK, 10.5, 'start')
    s.text(250, 140, 'I₁ = image by surface 1 only', GREY, 9.5)
    s.text(250, 154, '= object for surface 2', GREY, 9.5)
    s.text(180, 186, 'glass n₂ between two curved surfaces, medium n₁ outside', INK, 10)
    return fig(s.svg(), 'A thin lens = two curved surfaces very close together. Surface 1 alone would form an image I₁. Surface 2 takes I₁ as its object and forms the final image I.')


def principal_foci():
    s = S(360, 230)
    y1, y2 = 60, 170
    f = 80
    for yy in (y1, y2):
        s.line(5, yy, 355, yy, GREY, 1, '6 4')
        _lens(s, 180, yy, 48, 14)
    # second focus: parallel rays converge
    for h in (-30, -15, 15, 30):
        s.ray([(20, y1 + h), (180, y1 + h)], BLUE, 1.5)
        s.ray([(180, y1 + h), (180 + f, y1)], GREEN, 1.5)
    s.dot(180 + f, y1, PINK).text(180 + f + 2, y1 - 8, 'F₂', PINK, 12, 'start')
    s.text(300, y1 + 4, 'second focus', PINK, 10.5, 'start') if False else s.text(282, y1 + 34, 'parallel in → meet at F₂', PINK, 10)
    # first focus: rays from F1 emerge parallel
    for h in (-30, -15, 15, 30):
        s.ray([(180 - f, y2), (180, y2 + h)], BLUE, 1.5)
        s.ray([(180, y2 + h), (340, y2 + h)], GREEN, 1.5)
    s.dot(180 - f, y2, PINK).text(180 - f - 4, y2 - 8, 'F₁', PINK, 12, 'end')
    s.text(72, y2 + 50, 'from F₁ → go out parallel', PINK, 10)
    s.text(180, 14, 'light goes left → right', BLUE, 10)
    return fig(s.svg(), 'Top: <b>second principal focus F₂</b>: rays parallel to the axis meet there after the lens. Bottom: <b>first principal focus F₁</b>: rays starting there come out parallel. For a thin lens in air both are a distance $f$ from the lens.')


def concave_foci():
    s = S(360, 130)
    y = 65
    f = 80
    s.line(5, y, 355, y, GREY, 1, '6 4')
    _lens(s, 200, y, 50, concave=True)
    for h in (-30, -15, 15, 30):
        s.ray([(30, y + h), (200, y + h)], BLUE, 1.5)
        k = h / f
        s.ray([(200, y + h), (330, y + h + k * 130)], GREEN, 1.5)
        s.line(200, y + h, 200 - f, y, GREEN, 1, '3 3')
    s.dot(200 - f, y, PINK).text(200 - f - 6, y + 4, 'F₂', PINK, 12, 'end')
    s.text(310, 20, 'spread out', GREEN, 10)
    return fig(s.svg(), 'Concave (diverging) lens: parallel rays spread out as if coming from F₂, which is on the incoming side. So $f$ is negative.')


def ray_construction():
    s = S(360, 210)
    y = 110
    f = 70
    L = 170
    s.line(5, y, 355, y, GREY, 1, '6 4')
    _lens(s, L, y, 85, 16)
    u = -120.0
    v = 1 / (1 / f + 1 / u)
    hO = 40
    hI = v / u * hO
    Ox, Ix = L + u, L + v
    s.objarrow(Ox, y, y - hO)
    s.objarrow(Ix, y, y - hI, PINK)
    s.dot(L - f, y).text(L - f, y + 18, 'F₁', INK, 11)
    s.dot(L + f, y).text(L + f + 2, y - 8, 'F₂', INK, 11, 'start')
    T = (Ox, y - hO)
    B = (Ix, y - hI)
    s.ray([T, (L, y - hO)], BLUE)
    s.ray([(L, y - hO), B], GREEN)
    s.ray([T, B], ORANGE, 1.6)
    s.ray([T, (L, y - hI)], PURPLE, 1.6)
    s.ray([(L, y - hI), B], PURPLE, 1.6)
    legend(s, 8, 16, [(BLUE, '1: parallel → through F₂', None), (ORANGE, '2: through centre → straight', None), (PURPLE, '3: through F₁ → parallel', None)])
    s.text(Ox, y + 18, 'object', INK, 10)
    s.text(Ix, y + 18 if hI > 0 else y - 8, 'image', PINK, 10)
    return fig(s.svg(), 'Three easy rays from the top of the object. Where they meet is the top of the image. (Numbers: $f=70$, $u=-120$ → $v\\approx168$.)')


def newton():
    s = S(360, 230)
    y = 120
    f = 60
    L = 175
    s.line(5, y, 355, y, GREY, 1, '6 4')
    _lens(s, L, y, 90, 16)
    u = -110.0
    v = 1 / (1 / f + 1 / u)
    hO = 40
    hI = v / u * hO
    Ox, Ix = L + u, L + v
    F1, F2 = L - f, L + f
    s.objarrow(Ox, y, y - hO)
    s.objarrow(Ix, y, y - hI, PINK)
    s.dot(F1, y).text(F1, y - 8, 'F₁', INK, 11)
    s.dot(F2, y).text(F2, y - 8, 'F₂', INK, 11)
    T, Bm = (Ox, y - hO), (Ix, y - hI)
    # ray through F1 -> parallel
    yl = y + (y - hO - y) * (L - F1) / (Ox - F1) * -1
    yl = y - (-hO) * 0  # placeholder
    k = (F1 - Ox)
    yl = (y - hO) + (y - (y - hO)) * (L - Ox) / (F1 - Ox)
    s.ray([T, (F1, y), (L, yl)], BLUE)
    s.ray([(L, yl), (Ix + 20, yl)], GREEN)
    # parallel ray -> through F2
    s.ray([T, (L, y - hO)], BLUE)
    s.ray([(L, y - hO), (F2, y), Bm], GREEN)
    # shaded similar triangles
    s.path(f"M{Ox},{y} L{Ox},{y-hO} L{F1},{y} Z", 'none', 0, '#0072B2', op=0.15)
    s.path(f"M{L},{y} L{L},{yl} L{F1},{y} Z", 'none', 0, '#0072B2', op=0.15)
    s.path(f"M{L},{y} L{L},{y-hO} L{F2},{y} Z", 'none', 0, '#009E73', op=0.15)
    s.path(f"M{Ix},{y} L{Ix},{y-hI} L{F2},{y} Z", 'none', 0, '#009E73', op=0.15)
    # distances
    yy = y + 70
    s.line(Ox, yy, F1, yy, PURPLE, 2, arrow=False)
    s.text((Ox + F1) / 2, yy + 15, 'x₁', PURPLE, 12)
    s.line(F1, yy - 6, L, yy - 6, GREY, 1.4)
    s.text((F1 + L) / 2, yy - 11, 'f', INK, 11)
    s.line(L, yy - 6, F2, yy - 6, GREY, 1.4)
    s.text((F2 + L) / 2, yy - 11, 'f', INK, 11)
    s.line(F2, yy, Ix, yy, ORANGE, 2)
    s.text((F2 + Ix) / 2, yy + 15, 'x₂', ORANGE, 12)
    for xx in (Ox, F1, L, F2, Ix):
        s.line(xx, yy - 12, xx, yy + 4, GREY, 0.8)
    s.text(Ox, y + 16, 'h', INK, 11) if False else s.text(Ox - 8, y - hO / 2, 'h', INK, 11, 'end')
    s.text(Ix + 6, y - hI / 2, "h′", PINK, 11, 'start')
    return fig(s.svg(), "Newton's formula. $x_1$ is measured from $F_1$ to the object, $x_2$ from $F_2$ to the image (not from the lens!). Blue triangles are similar; green triangles are similar.")


def magnification_surface():
    s = S(360, 200)
    y = 100
    V = (150, y)
    R = 90
    C = _surface(s, V, R, 85, fill='#e3f1fb')
    s.text(300, 24, 'n₂', INK, 12)
    s.text(30, 24, 'n₁', INK, 12)
    s.line(5, y, 355, y, GREY, 1, '6 4')
    n1, n2 = 1.0, 1.5
    u, v = -110.0, 150.0   # drawn positions (schematic); m from the formula
    Ox, Ix = V[0] + u, V[0] + v
    hO = 36
    m = n1 * v / (n2 * u)
    hI = m * hO
    s.objarrow(Ox, y, y - hO)
    s.objarrow(Ix, y, y - hI, PINK)
    T, B = (Ox, y - hO), (Ix, y - hI)
    s.ray([T, V], BLUE)
    s.ray([V, B], GREEN)
    s.line(V[0], 20, V[0], 180, GREY, 1, '3 3')
    aI = math.degrees(math.atan2(hO, V[0] - Ox))
    s.arc(V[0], y, 30, 180 - aI, 180, BLUE, label='θ₁', lr=42)
    aR = math.degrees(math.atan2(-hI, Ix - V[0]))
    s.arc(V[0], y, 30, -aR, 0, GREEN, label='θ₂', lr=42)
    s.text(Ox - 6, y - hO / 2, 'h', INK, 11, 'end')
    s.text(Ix - 6, y - hI / 2, "h′ (−)", PINK, 11, 'end')
    s.text(20, 190, 'at the pole: n₁θ₁ = n₂θ₂', PURPLE, 10.5, 'start')
    return fig(s.svg(), 'Magnification at a single surface: follow the ray that hits the pole. $\\theta_1 \\approx h/(-u)$, $\\theta_2 \\approx -h\'/v$, and Snell (small angle) gives $m = h\'/h = n_1 v / (n_2 u)$.')


def lens_in_water():
    s = S(360, 150)
    for k, (title, f, col, bg) in enumerate([('in air: f = 20 cm', 60, GREEN, '#ffffff'), ('in water: f = 78 cm', 150, GREEN, '#dcedf8')]):
        y = 45 + k * 70
        s.rect(0, y - 32, 360, 64, bg)
        s.line(5, y, 355, y, GREY, 1, '6 4')
        _lens(s, 90, y, 28, 10)
        for h in (-18, 18):
            s.ray([(10, y + h), (90, y + h)], BLUE, 1.4)
            end = 90 + f
            if end > 350:
                s.ray([(90, y + h), (350, y + h - h * 260 / f)], col, 1.4)
            else:
                s.ray([(90, y + h), (end, y)], col, 1.4)
        s.text(355, y - 18, title, INK, 10.5, 'end')
    return fig(s.svg(), 'Same glass lens ($n=1.5$, $R_1=20$, $R_2=-20$ cm). In water ($n=1.33$) it still converges, but much more weakly, because glass is only a little "slower" than water.')


def mirror_geometry():
    """concave mirror, object beyond C, real image between F and C (Ghatak Fig 4.3 style)"""
    s = S(360, 200)
    y = 110
    R = 200
    Vx = 330
    Cx = Vx - R
    half = 85
    a = math.asin(half / R)
    top = (Cx + R * math.cos(a), y - half)
    bot = (Cx + R * math.cos(a), y + half)
    s.path(f"M{top[0]:.1f},{top[1]:.1f} A{R},{R} 0 0 1 {bot[0]:.1f},{bot[1]:.1f}", INK, 3)
    s.line(5, y, 355, y, GREY, 1, '6 4')
    x = 290.0
    O = (Vx - x, y)
    yv = 1 / (2 / R - 1 / x)
    I = (Vx - yv, y)
    h = 62
    A = (Cx + math.sqrt(R * R - h * h), y - h)
    s.ray([O, A], BLUE)
    s.ray([A, I], ORANGE)
    s.line(Cx, y, A[0], A[1], GREY, 1.2, '4 4')
    s.dot(*O).text(O[0], y + 18, 'O', INK, 12)
    s.dot(Cx, y).text(Cx, y + 18, 'C', INK, 12)
    s.dot(*I, PINK).text(I[0], y + 18, 'I', PINK, 12)
    s.dot(Vx, y).text(Vx + 8, y + 16, 'P', INK, 12, 'start')
    s.dot(*A).text(A[0] + 4, A[1] - 8, 'A', INK, 12)
    aO = math.degrees(math.atan2(y - A[1], A[0] - O[0]))
    s.arc(O[0], y, 46, 0, aO, BLUE, label='α₁', lr=58)
    aC = math.degrees(math.atan2(y - A[1], A[0] - Cx))
    s.arc(Cx, y, 30, 0, aC, INK, label='β', lr=40)
    aI = math.degrees(math.atan2(y - A[1], A[0] - I[0]))
    s.arc(I[0], y, 22, 0, aI, ORANGE, label='α₂', lr=32)
    s.line(A[0] + 6, A[1], A[0] + 6, y, PURPLE, 1.2, '2 3')
    s.text(A[0] + 10, y - 26, 'h', PURPLE, 11, 'start')
    s.text(170, 190, 'x = OP,  r = CP,  y = IP  (all sizes, no signs yet)', INK, 10)
    return fig(s.svg(), 'Concave mirror (Ghatak Fig. 4.3 style). Grey dashed CA is the normal at A. The incident ray OA and reflected ray AI make equal angles with it.')


def parabola():
    s = S(360, 190)
    # parabola y^2 = 4 a x, opening right; focus S
    a = 45
    X0, Y0 = 70, 95
    pts = []
    for i in range(-40, 41):
        yy = i * 2.2
        xx = yy * yy / (4 * a)
        pts.append((X0 + xx, Y0 + yy))
    s.path('M' + ' L'.join(f'{px:.1f},{py:.1f}' for px, py in pts), INK, 2.6)
    S_ = (X0 + a, Y0)
    s.line(X0 - a, 10, X0 - a, 180, GREY, 1.4, '5 4')
    s.text(X0 - a + 4, 180, 'directrix', GREY, 10, 'start')
    s.line(X0 - 30, Y0, 355, Y0, GREY, 1, '6 4')
    for yy in (-55, -30, 40):
        xx = yy * yy / (4 * a)
        Q = (X0 + xx, Y0 + yy)
        s.ray([(350, Q[1]), Q], BLUE, 1.6)
        s.ray([Q, S_], ORANGE, 1.6)
    yy = -55
    xx = yy * yy / (4 * a)
    Q = (X0 + xx, Y0 + yy)
    s.line(Q[0], Q[1], X0 - a, Q[1], BLUE, 1.2, '2 3')
    s.text(X0 - a - 8, Q[1] + 4, 'L', BLUE, 11, 'end')
    s.text(Q[0] + 4, Q[1] - 6, 'Q', INK, 11, 'start')
    s.dot(*S_, PINK).text(S_[0] + 2, S_[1] + 18, 'S (focus)', PINK, 11)
    s.text(260, 180, 'QS = QL for every Q', PURPLE, 11, weight=700)
    return fig(s.svg(), 'Paraboloidal mirror. Each point Q is as far from the focus S as from the directrix line. So every ray parallel to the axis travels the same optical path to S. All of them meet at S.')


def spherical_aberration():
    s = S(360, 180)
    y = 90
    R = 260
    Vx = 330
    Cx = Vx - R
    half = 85
    a = math.asin(half / R)
    top = (Cx + R * math.cos(a), y - half)
    bot = (Cx + R * math.cos(a), y + half)
    s.path(f"M{top[0]:.1f},{top[1]:.1f} A{R},{R} 0 0 1 {bot[0]:.1f},{bot[1]:.1f}", INK, 3)
    s.line(5, y, 355, y, GREY, 1, '6 4')
    for h, c in ((15, GREEN), (45, AMBER), (78, ORANGE)):
        for sg in (-1, 1):
            hh = sg * h
            Ax = Cx + math.sqrt(R * R - hh * hh)
            s.ray([(20, y + hh), (Ax, y + hh)], BLUE, 1.2)
            # reflect: normal from C
            nx, ny = (Ax - Cx) / R, hh / R
            dx, dy = 1.0, 0.0
            d = dx * nx + dy * ny
            rx, ry = dx - 2 * d * nx, dy - 2 * d * ny
            t = -hh / ry
            s.line(Ax, y + hh, Ax + rx * t * 1.2, y + hh + ry * t * 1.2, c, 1.4)
    s.text(150, 174, 'edge rays (orange) cross nearer the mirror', INK, 10)
    s.dot(Vx - R / 2, y, GREEN).text(Vx - R / 2 - 30, y + 30, 'F (paraxial focus)', GREEN, 10)
    return fig(s.svg(), 'Spherical aberration. A spherical mirror sends rays at different heights to different points. Only the rays near the axis (paraxial, green) meet at the focus F.')


def surface_fermat():
    """Ghatak Fig 3.10: point S on the surface at angle theta measured at C"""
    s = S(360, 200)
    y = 125
    V = (150, y)
    R = 95
    C = _surface(s, V, R, 92, fill='#e3f1fb')
    s.line(5, y, 355, y, GREY, 1, '6 4')
    O, Q = (25, y), (325, y)
    th = math.radians(34)
    Sp = (C[0] - R * math.cos(th), y - R * math.sin(th))
    s.ray([O, Sp], BLUE)
    s.ray([Sp, Q], GREEN)
    s.line(C[0], C[1], Sp[0], Sp[1], INK, 1.2)
    s.arc(C[0], y, 26, 180 - 34, 180, INK, label='θ', lr=38)
    s.dot(*O).text(O[0], y + 18, 'O', INK, 12)
    s.dot(*V).text(V[0] - 9, y + 16, 'P', INK, 12)
    s.dot(*C).text(C[0], y + 18, 'C', INK, 12)
    s.dot(*Q, PINK).text(Q[0], y + 18, 'Q', PINK, 12)
    s.dot(*Sp).text(Sp[0] - 4, Sp[1] - 9, 'S', INK, 12)
    s.text((C[0] + Sp[0]) / 2 + 10, (C[1] + Sp[1]) / 2 + 2, 'r', INK, 12, 'start')
    s.line(O[0], y + 34, V[0], y + 34, BLUE, 1.6)
    s.text((O[0] + V[0]) / 2, y + 48, 'x', BLUE, 12)
    s.line(V[0], y + 34, Q[0], y + 34, GREEN, 1.6)
    s.text((V[0] + Q[0]) / 2, y + 48, 'y', GREEN, 12)
    s.text(40, 22, 'n₁', INK, 13)
    s.text(320, 22, 'n₂', INK, 13)
    s.text(180, 22, 'L = n₁·OS + n₂·SQ', PURPLE, 11, weight=700)
    return fig(s.svg(), 'Fermat route (Ghatak Fig. 3.10). Move S around the surface by changing θ. The ray is real when L is stationary: dL/dθ = 0.')


def newton_signs():
    s = S(360, 110)
    y = 55
    L = 180
    f = 60
    s.line(5, y, 355, y, GREY, 1, '6 4')
    _lens(s, L, y, 40, 10)
    for xx, lab in ((L - f, 'F₁'), (L + f, 'F₂')):
        s.dot(xx, y).text(xx, y - 8, lab, INK, 11)
    s.line(L - f, y + 26, 25, y + 26, PURPLE, 2, arrow=True)
    s.text(70, y + 42, 'x₁ < 0 (object left of F₁)', PURPLE, 10)
    s.line(L + f, y + 26, 335, y + 26, ORANGE, 2, arrow=True)
    s.text(290, y + 42, 'x₂ > 0', ORANGE, 10)
    return fig(s.svg(), '$x_1$ is a coordinate measured <b>from $F_1$</b>, $x_2$ is measured <b>from $F_2$</b>, with the usual signs.')


def magnifier():
    """convex lens f = 20 cm, object at 12 cm -> virtual image at 30 cm, m = 2.5 (scale 4 px/cm)"""
    s = S(360, 210)
    y = 150
    k = 4
    L = 250
    f = 20 * k
    s.line(5, y, 355, y, GREY, 1, '6 4')
    _lens(s, L, y, 95, 16)
    Ox, Ix = L - 12 * k, L - 30 * k
    hO = 30
    hI = 2.5 * hO
    s.dot(L - f, y).text(L - f, y + 18, 'F₁', INK, 11)
    s.dot(L + f, y).text(L + f, y + 18, 'F₂', INK, 11)
    s.objarrow(Ox, y, y - hO)
    s.objarrow(Ix, y, y - hI, PINK, '5 4')
    T = (Ox, y - hO)
    # ray 1: parallel -> through F2
    s.ray([T, (L, y - hO)], BLUE)
    dx, dy = f, hO
    s.ray([(L, y - hO), (L + 1.3 * dx, y - hO + 1.3 * dy)], GREEN)
    s.line(L, y - hO, Ix, y - hI, GREEN, 1.2, '4 4')
    # ray 2: through centre, undeviated
    s.ray([T, (L, y)], ORANGE, 1.6)
    s.ray([(L, y), (L + 100, y + hO * 100 / (12 * k))], ORANGE, 1.6)
    s.line(T[0], T[1], Ix, y - hI, ORANGE, 1.2, '4 4')
    s.text(Ox, y + 18, 'O', INK, 11)
    s.text(Ix, y + 18, 'I (virtual)', PINK, 11)
    s.text(20, 22, 'object inside F₁ → rays spread out after the lens;', INK, 10, 'start')
    s.text(20, 36, 'traced back (dashed) they meet at I: upright, 2.5× bigger', PINK, 10, 'start')
    return fig(s.svg(), 'Drawn to scale. Ray 1 (parallel → through F₂) and ray 2 (through the centre) diverge. Their backward extensions meet at I.')

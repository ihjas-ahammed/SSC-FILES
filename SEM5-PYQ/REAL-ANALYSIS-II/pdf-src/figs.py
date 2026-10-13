"""SVG figures for the Real Analysis II study PDFs (shared tools).

Colour code (same in every figure of the subject):
  the function f            blue   #0072B2  solid
  f_n (sequence members)    sky    #56B4E9  (lighter = earlier n)
  the limit function f      ink    #1d2330  thick
  epsilon (y-direction)     orange #D55E00  band / arrows
  delta (x-direction)       green  #009E73  band / arrows
  tangent / derivative      purple #6a4fb3
  secant / chord            orange dashed
  area, Riemann rectangles  amber  #E69F00  filled
  counterexample / "bad"    pink   #CC79A7
  guide lines               grey   dashed
Curves are computed from the formulas, so every picture is true to the maths.
Symbols in figures are the same as in the text (f, c, epsilon, delta, x_n, f_n, P, S(f;P)).
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




def sub(t):
    """subscript inside SVG text"""
    return f'<tspan baseline-shift="sub" font-size="72%">{t}</tspan>'


def sup(t):
    return f'<tspan baseline-shift="super" font-size="70%">{t}</tspan>'


class Plot(S):
    """S with a maths coordinate system: X(x), Y(y) map maths to pixels."""

    def __init__(self, x0, x1, y0, y1, w=360, h=220, pad=(26, 14, 14, 26)):
        super().__init__(w, h)
        self.x0, self.x1, self.y0, self.y1 = x0, x1, y0, y1
        self.pl, self.pt, self.pr, self.pb = pad  # left top right bottom

    def X(self, x):
        return self.pl + (x - self.x0) / (self.x1 - self.x0) * (self.w - self.pl - self.pr)

    def Y(self, y):
        return self.h - self.pb - (y - self.y0) / (self.y1 - self.y0) * (self.h - self.pt - self.pb)

    def axes(self, xlab='x', ylab='y', ox=0, oy=0):
        oy_ = min(max(oy, self.y0), self.y1)
        ox_ = min(max(ox, self.x0), self.x1)
        self.line(self.X(self.x0), self.Y(oy_), self.X(self.x1) + 6, self.Y(oy_), INK, 1.1, arrow=True)
        self.line(self.X(ox_), self.Y(self.y0), self.X(ox_), self.Y(self.y1) - 6, INK, 1.1, arrow=True)
        if xlab:
            self.text(self.X(self.x1) + 4, self.Y(oy_) + 15, xlab, INK, 11, 'end', 500, True)
        if ylab:
            self.text(self.X(ox_) + 6, self.Y(self.y1) + 2, ylab, INK, 11, 'start', 500, True)
        return self

    def xtick(self, x, lab=None, c=INK, y=0, size=10, dy=14):
        self.line(self.X(x), self.Y(y) - 3, self.X(x), self.Y(y) + 3, INK, 1)
        if lab is not None:
            self.text(self.X(x), self.Y(y) + dy, lab, c, size, weight=500)
        return self

    def ytick(self, y, lab=None, c=INK, x=0, size=10, dx=-6):
        self.line(self.X(x) - 3, self.Y(y), self.X(x) + 3, self.Y(y), INK, 1)
        if lab is not None:
            self.text(self.X(x) + dx, self.Y(y) + 4, lab, c, size, 'end', 500)
        return self

    def curve(self, f, a=None, b=None, c=BLUE, w=2.2, dash=None, n=400, op=1, clip=True):
        """plot y=f(x); breaks the path where f is None / nan / off-scale"""
        a = self.x0 if a is None else a
        b = self.x1 if b is None else b
        d, pen = [], False
        span = self.y1 - self.y0
        for k in range(n + 1):
            x = a + (b - a) * k / n
            try:
                y = f(x)
            except (ZeroDivisionError, ValueError, OverflowError):
                y = None
            if y is None or y != y or (clip and (y > self.y1 + 0.05 * span or y < self.y0 - 0.05 * span)):
                pen = False
                continue
            d.append(f"{'L' if pen else 'M'}{self.X(x):.1f},{self.Y(y):.1f}")
            pen = True
        return self.path(''.join(d), c, w, dash=dash, op=op)

    def pts(self, xy, c=BLUE, r=2.4):
        for x, y in xy:
            self.dot(self.X(x), self.Y(y), c, r)
        return self

    def hole(self, x, y, c=BLUE, r=3):
        self.add(f"<circle cx='{self.X(x):.1f}' cy='{self.Y(y):.1f}' r='{r}' fill='#fff' stroke='{c}' stroke-width='1.6'/>")
        return self

    def hband(self, ya, yb, c=ORANGE, op=0.14, xa=None, xb=None):
        xa = self.x0 if xa is None else xa
        xb = self.x1 if xb is None else xb
        self.rect(self.X(xa), self.Y(yb), self.X(xb) - self.X(xa), self.Y(ya) - self.Y(yb), c, op)
        return self

    def vband(self, xa, xb, c=GREEN, op=0.14, ya=None, yb=None):
        ya = self.y0 if ya is None else ya
        yb = self.y1 if yb is None else yb
        self.rect(self.X(xa), self.Y(yb), self.X(xb) - self.X(xa), self.Y(ya) - self.Y(yb), c, op)
        return self

    def hline(self, y, c=GREY, w=1.1, dash='4 3', xa=None, xb=None):
        xa = self.x0 if xa is None else xa
        xb = self.x1 if xb is None else xb
        return self.line(self.X(xa), self.Y(y), self.X(xb), self.Y(y), c, w, dash)

    def vline(self, x, c=GREY, w=1.1, dash='4 3', ya=None, yb=None):
        ya = self.y0 if ya is None else ya
        yb = self.y1 if yb is None else yb
        return self.line(self.X(x), self.Y(ya), self.X(x), self.Y(yb), c, w, dash)

    def seg(self, xa, ya, xb, yb, c=INK, w=1.6, dash=None, arrow=False):
        return self.line(self.X(xa), self.Y(ya), self.X(xb), self.Y(yb), c, w, dash, arrow)

    def lab(self, x, y, t, c=INK, size=11, anchor='middle', weight=600, italic=False, dx=0, dy=0):
        return self.text(self.X(x) + dx, self.Y(y) + dy, t, c, size, anchor, weight, italic)

    def poly(self, xy, fill=AMBER, op=0.3, stroke='none', w=1):
        d = 'M' + 'L'.join(f'{self.X(x):.1f},{self.Y(y):.1f}' for x, y in xy) + 'Z'
        self.add(f"<path d='{d}' fill='{fill}' opacity='{op}' stroke='{stroke}' stroke-width='{w}'/>")
        return self

    def area(self, f, a, b, fill=AMBER, op=0.28, n=200):
        xy = [(a, 0)] + [(a + (b - a) * k / n, f(a + (b - a) * k / n)) for k in range(n + 1)] + [(b, 0)]
        return self.poly(xy, fill, op)

    def box(self, xa, xb, h, fill=AMBER, op=0.35, stroke=AMBER):
        """rectangle from y=0 to y=h over [xa,xb] (a Riemann rectangle)"""
        y_top, y_bot = (h, 0) if h >= 0 else (0, h)
        self.rect(self.X(xa), self.Y(y_top), self.X(xb) - self.X(xa), self.Y(y_bot) - self.Y(y_top), fill, op, stroke=stroke)
        return self

    def brace_x(self, xa, xb, y, t, c=GREEN, dy=12, size=11):
        """double arrow along x with a label"""
        self.line(self.X(xa), self.Y(y), self.X(xb), self.Y(y), c, 1.4, arrow=True)
        self.line(self.X(xb), self.Y(y), self.X(xa), self.Y(y), c, 1.4, arrow=True)
        return self.text((self.X(xa) + self.X(xb)) / 2, self.Y(y) + dy, t, c, size)

    def brace_y(self, ya, yb, x, t, c=ORANGE, dx=6, size=11, anchor='start'):
        self.line(self.X(x), self.Y(ya), self.X(x), self.Y(yb), c, 1.4, arrow=True)
        self.line(self.X(x), self.Y(yb), self.X(x), self.Y(ya), c, 1.4, arrow=True)
        return self.text(self.X(x) + dx, (self.Y(ya) + self.Y(yb)) / 2 + 4, t, c, size, anchor)


def tag(s, x, y, t, c=INK, size=10.5, anchor='start', weight=600):
    """free label in pixel coordinates"""
    return s.text(x, y, t, c, size, anchor, weight)


def stack(panels, w=360, h=330):
    """combine Plot panels into one SVG: panels = [(plot, dx, dy), ...]"""
    defs = set()
    body = ''
    for pl, dx, dy in panels:
        defs |= set(pl.defs)
        body += f"<g transform='translate({dx},{dy})'>" + ''.join(pl.o) + '</g>'
    dd = ''.join(f"<marker id='ah{k}' viewBox='0 0 10 10' refX='7' refY='5' markerWidth='6' markerHeight='6' "
                 f"orient='auto-start-reverse'><path d='M0,1 L9,5 L0,9 z' fill='#{k}'/></marker>" for k in defs)
    return f"<svg viewBox='0 0 {w} {h}' xmlns='http://www.w3.org/2000/svg'><defs>{dd}</defs>{body}</svg>"

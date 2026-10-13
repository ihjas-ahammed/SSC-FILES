"""ED figures: electric blue, magnetic orange, current green; axes grey."""
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



"""Figure geometry for the derivation players (SSC-V6 figure format).

Each figure:  box [left, bottom, right, top] in figure units (y up),
              points {name: {at, label, side, dot}},
              parts  {name: {type, ...}},
              draw   [{parts: [...], caption}]   the order the figure draws itself in.
Draw order rule: apparatus first, then rays or particles, then construction lines.
Part types: line (from, to, style, arrow, label), arc (center, r, from, to), polygon (points, style),
angle (at, from, to, r, label), dim (from, to, offset, arrow, label), text (at, text).
Styles: axis, mirror, ray, normal, guide, glass.
"""
from math import cos, sin, tan, radians, sqrt, pi, atan2, degrees

FIGS = {}


def r2(v):
    return [round(v[0], 2), round(v[1], 2)]


def add(a, b, k=1.0):
    return (a[0] + k * b[0], a[1] + k * b[1])


def sub(a, b):
    return (a[0] - b[0], a[1] - b[1])


def unit(v):
    l = sqrt(v[0] ** 2 + v[1] ** 2) or 1
    return (v[0] / l, v[1] / l)


def rmark(P, d1, d2, s=6):
    """small right-angle square at P, sides along unit vectors d1, d2"""
    d1, d2 = unit(d1), unit(d2)
    a = add(P, d1, s)
    c = add(P, d2, s)
    b = add(a, d2, s)
    return {'type': 'polygon', 'points': [r2(P), r2(a), r2(b), r2(c)]}


class Fig:
    def __init__(self, box):
        self.f = {'box': box, 'points': {}, 'parts': {}, 'draw': []}

    def pt(self, name, at, label=None, side=None, dot=True):
        p = {'at': r2(at)}
        if label is not None:
            p['label'] = label
        if side:
            p['side'] = side
        if not dot:
            p['dot'] = False
        self.f['points'][name] = p
        return name

    def hid(self, name, at):          # a construction point: no dot, no label
        return self.pt(name, at, label=False, dot=False)

    def part(self, name, **kw):
        self.f['parts'][name] = kw
        return name

    def line(self, name, a, b, **kw):
        return self.part(name, type='line', **{'from': a, 'to': b}, **kw)

    def dim(self, name, a, b, off, label, **kw):
        return self.part(name, type='dim', **{'from': a, 'to': b}, offset=r2(off), arrow='both', label=label, **kw)

    def angle(self, name, at, a, b, r, label, **kw):
        return self.part(name, type='angle', at=at, **{'from': a, 'to': b}, r=r, label=label, **kw)

    def poly(self, name, pts, **kw):
        return self.part(name, type='polygon', points=pts, **kw)

    def arc(self, name, c, r, a0, a1, **kw):
        return self.part(name, type='arc', center=c, r=r, **{'from': a0, 'to': a1}, **kw)

    def text(self, name, at, s):
        return self.part(name, type='text', at=r2(at), text=s)

    def draw(self, parts, caption, stagger=None):
        st = {'parts': list(parts), 'caption': caption}
        if stagger is not None:
            st['stagger'] = stagger
        self.f['draw'].append(st)

    def done(self, key):
        FIGS[key] = self.f
        return self.f



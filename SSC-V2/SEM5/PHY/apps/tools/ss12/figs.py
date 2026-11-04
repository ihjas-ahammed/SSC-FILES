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


# ════════════════════════════ Module I ════════════════════════════

def fig_bragg():
    th = radians(28)
    d = 62.0
    F = Fig([-150, -118, 150, 70])
    A, B = (0.0, 0.0), (0.0, -d)
    u = (cos(th), -sin(th))          # incoming direction (down and right)
    w = (cos(th), sin(th))           # reflected direction (up and right)
    P = add(B, u, -d * sin(th))
    Q = add(B, w, d * sin(th))
    L = 125
    F.pt('A', A, side='n')
    F.pt('B', B, side='s')
    F.pt('P', P, side='w')
    F.pt('Q', Q, side='e')
    F.hid('S1', add(A, u, -L)); F.hid('S2', add(B, u, -L - 10))
    F.hid('R1', add(A, w, L)); F.hid('R2', add(B, w, L + 10))
    F.hid('pl1a', (-145, 0)); F.hid('pl1b', (145, 0))
    F.hid('pl2a', (-145, -d)); F.hid('pl2b', (145, -d))
    F.hid('pl1L', (-60, 0))
    atoms = []
    for i, x in enumerate([-120, -80, -40, 40, 80, 120]):
        atoms.append(F.pt('a%d' % i, (x, 0), label=False))
        atoms.append(F.pt('b%d' % i, (x, -d), label=False))
    F.line('plane1', 'pl1a', 'pl1b', style='mirror')
    F.line('plane2', 'pl2a', 'pl2b', style='mirror')
    F.line('in1', 'S1', 'A', style='ray', arrow=True)
    F.line('out1', 'A', 'R1', style='ray', arrow=True)
    F.line('in2', 'S2', 'B', style='ray', arrow=True)
    F.line('out2', 'B', 'R2', style='ray', arrow=True)
    F.line('AP', 'A', 'P', style='guide')
    F.line('AQ', 'A', 'Q', style='guide')
    F.line('PB', 'P', 'B')
    F.line('BQ', 'B', 'Q')
    F.line('AB', 'A', 'B', style='normal', label='d')
    F.angle('thG', 'A', 'pl1L', 'S1', 30, 'θ')
    F.angle('thA', 'A', 'B', 'P', 20, 'θ')
    F.angle('thA2', 'A', 'Q', 'B', 20, 'θ')
    F.poly('triAPB', ['A', 'P', 'B'])
    F.poly('triAQB', ['A', 'Q', 'B'])
    F.part('rtP', **rmark(P, sub(A, P), sub(B, P)))
    F.part('rtQ', **rmark(Q, sub(A, Q), sub(B, Q)))
    F.draw(['plane1', 'plane2'] + atoms, 'Two parallel planes $(hkl)$, a distance $d$ apart')
    F.draw(['A', 'B', 'AB'], '$A$ and $B$: one atom on each plane, $AB$ along the normal')
    F.draw(['in1', 'out1', 'thG'], 'Ray 1 reflects at $A$; $θ$ is measured from the plane')
    F.draw(['in2', 'out2'], 'Ray 2 reflects at $B$, one plane down')
    F.draw(['AP', 'AQ', 'P', 'Q'], 'Drop perpendiculars $AP$ and $AQ$ onto ray 2')
    return F.done('bragg')




def fig_rot():
    T, th = 60.0, radians(72)
    F = Fig([-140, -42, 140, 88])
    A, B, C, D = (-90, 0), (-30, 0), (30, 0), (90, 0)
    Ap = (B[0] - T * cos(th), T * sin(th))
    Dp = (C[0] + T * cos(th), T * sin(th))
    Fp, Gp = (Ap[0], 0), (Dp[0], 0)
    F.hid('r0', (-135, 0)); F.hid('r1', (135, 0))
    for n, P in [('A', A), ('B', B), ('C', C), ('D', D)]:
        F.pt(n, P, side='s')
    F.pt('Ap', Ap, label="B′", side='nw')
    F.pt('Dp', Dp, label="C′", side='ne')
    F.pt('F', Fp, side='s', dot=False)
    F.pt('G', Gp, side='s', dot=False)
    F.line('row', 'r0', 'r1', style='mirror')
    F.dim('BC', 'B', 'C', (0, 16), 'T')
    F.line('BA', 'B', 'A', style='guide')
    F.line('CD', 'C', 'D', style='guide')
    F.line('BAp', 'B', 'Ap', label='T')
    F.line('CDp', 'C', 'Dp', label='T')
    F.angle('thB', 'B', 'A', 'Ap', 22, 'θ')
    F.angle('thC', 'C', 'D', 'Dp', 22, 'θ')
    F.line('ApDp', 'Ap', 'Dp', style='ray', label='mT')
    F.line('ApF', 'Ap', 'F', style='guide')
    F.line('DpG', 'Dp', 'G', style='guide')
    F.poly('triB', ['B', 'F', 'Ap'])
    F.part('rtF', **rmark(Fp, (0, 1), (1, 0)))
    F.poly('triC', ['C', 'G', 'Dp'])
    F.part('rtG', **rmark(Gp, (0, 1), (-1, 0)))
    F.dim('BF', 'F', 'B', (0, 16), 'T\\cos θ')
    F.dim('CG', 'C', 'G', (0, 16), 'T\\cos θ')
    F.draw(['row', 'A', 'B', 'C', 'D', 'BC'], 'A lattice row: points $T$ apart')
    F.draw(['BA', 'BAp', 'thB', 'Ap'], 'Turn $BA$ about $B$ by $θ$: $A$ lands on $B′$')
    F.draw(['CD', 'CDp', 'thC', 'Dp'], 'Turn $CD$ about $C$ by $θ$ the other way: $D$ lands on $C′$')
    F.draw(['ApDp'], '$B′C′$ is parallel to the row')
    return F.done('rot')


def P3(x, y, z, kx=-0.52, ky=-0.36):
    """oblique projection: x towards the viewer (down-left), y right, z up"""
    return (y + kx * x, z + ky * x)


def fig_dhkl():
    p, q, r = 100.0, 120.0, 86.0           # intercepts a/h, b/k, c/l
    inv = (1 / p, 1 / q, 1 / r)
    d = 1 / sqrt(sum(v * v for v in inv))
    n = tuple(v * d for v in inv)
    N3 = tuple(d * v for v in n)
    F = Fig([-90, -70, 150, 110])
    O = P3(0, 0, 0)
    F.pt('O', O, side='w')
    F.hid('Xe', P3(150, 0, 0)); F.hid('Ye', P3(0, 150, 0)); F.hid('Ze', P3(0, 0, 112))
    F.pt('A', P3(p, 0, 0), side='w')
    F.pt('B', P3(0, q, 0), side='s')
    F.pt('C', P3(0, 0, r), side='w')
    F.pt('N', P3(*N3), side='ne')
    F.line('ax', 'O', 'Xe', style='axis', arrow=True, label='x')
    F.line('ay', 'O', 'Ye', style='axis', arrow=True, label='y')
    F.line('az', 'O', 'Ze', style='axis', arrow=True, label='z')
    F.poly('plane', ['A', 'B', 'C'], style='glass')
    F.line('OA', 'O', 'A', label='a/h')
    F.line('OB', 'O', 'B', label='b/k')
    F.line('OC', 'O', 'C', label='c/l')
    F.line('ON', 'O', 'N', style='ray', arrow=True, label='d')
    F.line('NA', 'N', 'A', style='guide')
    F.line('NB', 'N', 'B', style='guide')
    F.line('NC', 'N', 'C', style='guide')
    F.poly('triA', ['O', 'N', 'A'])
    F.poly('triB', ['O', 'N', 'B'])
    F.poly('triC', ['O', 'N', 'C'])
    Np = P3(*N3)
    F.part('rtA', **rmark(Np, sub(O, Np), sub(P3(p, 0, 0), Np), 5))
    F.angle('alpha', 'O', 'A', 'N', 24, 'α')
    F.angle('beta', 'O', 'B', 'N', 30, 'β')
    F.angle('gamma', 'O', 'C', 'N', 30, 'γ')
    F.draw(['ax', 'ay', 'az', 'O'], 'Crystal axes $x$, $y$, $z$ (orthogonal)')
    F.draw(['plane', 'A', 'B', 'C'], 'The plane $(hkl)$ nearest the origin cuts them at $A$, $B$, $C$')
    F.draw(['ON', 'N'], '$ON$: the perpendicular from $O$ to the plane, length $d$')
    return F.done('dhkl')


def fig_pf_fcc():
    a = 120.0
    rr = a / (2 * sqrt(2))
    F = Fig([-82, -78, 82, 78])
    c = {'P1': (-60, -60), 'P2': (60, -60), 'P3': (60, 60), 'P4': (-60, 60)}
    for k, v in c.items():
        F.pt(k, v, label=False)
    F.pt('Cf', (0, 0), label=False)
    F.poly('face', ['P1', 'P2', 'P3', 'P4'], style='glass')
    F.arc('c1', 'P1', rr, 0, 90); F.arc('c2', 'P2', rr, 90, 180)
    F.arc('c3', 'P3', rr, 180, 270); F.arc('c4', 'P4', rr, 270, 360)
    F.arc('c0', 'Cf', rr, 0, 360)
    F.line('diag', 'P1', 'P3', style='ray', label='4r')
    F.dim('ea', 'P1', 'P2', (0, 14), 'a')
    F.dim('eb', 'P2', 'P3', (14, 0), 'a')
    F.poly('tri', ['P1', 'P2', 'P3'])
    F.part('rt', **rmark((60, -60), (-1, 0), (0, 1), 7))
    F.draw(['face', 'P1', 'P2', 'P3', 'P4', 'ea', 'eb'], 'One face of the FCC cube, side $a$')
    F.draw(['c1', 'c2', 'c3', 'c4', 'c0', 'Cf'], 'Corner atoms and the face-centre atom')
    F.draw(['diag'], 'They touch along the face diagonal')
    return F.done('pf_fcc')


def fig_pf_bcc():
    a = 100.0
    def Q(x, y, z):
        return (x + 0.42 * y - 50, z + 0.3 * y - 50)
    F = Fig([-62, -62, 100, 90])
    names = {}
    for i, (x, y, z) in enumerate([(0, 0, 0), (1, 0, 0), (1, 1, 0), (0, 1, 0), (0, 0, 1), (1, 0, 1), (1, 1, 1), (0, 1, 1)]):
        names[(x, y, z)] = F.pt('k%d' % i, Q(a * x, a * y, a * z), label=False)
    F.pt('Cb', Q(a / 2, a / 2, a / 2), label=False)
    E = [((0, 0, 0), (1, 0, 0)), ((1, 0, 0), (1, 1, 0)), ((1, 1, 0), (0, 1, 0)), ((0, 1, 0), (0, 0, 0)),
         ((0, 0, 1), (1, 0, 1)), ((1, 0, 1), (1, 1, 1)), ((1, 1, 1), (0, 1, 1)), ((0, 1, 1), (0, 0, 1)),
         ((0, 0, 0), (0, 0, 1)), ((1, 0, 0), (1, 0, 1)), ((1, 1, 0), (1, 1, 1)), ((0, 1, 0), (0, 1, 1))]
    edges = []
    for j, (u, v) in enumerate(E):
        edges.append(F.line('e%d' % j, names[u], names[v], style='guide'))
    F.line('fd', names[(0, 0, 0)], names[(1, 1, 0)], label='\\sqrt2\\,a')
    F.line('bd', names[(0, 0, 0)], names[(1, 1, 1)], style='ray', label='4r')
    F.line('up', names[(1, 1, 0)], names[(1, 1, 1)], label='a')
    F.poly('triF', [names[(0, 0, 0)], names[(1, 0, 0)], names[(1, 1, 0)]])
    F.poly('triB', [names[(0, 0, 0)], names[(1, 1, 0)], names[(1, 1, 1)]])
    F.dim('ex', names[(0, 0, 0)], names[(1, 0, 0)], (0, 14), 'a')
    F.dim('ey', names[(1, 0, 0)], names[(1, 1, 0)], (12, 6), 'a')
    F.draw(edges + list(names.values()), 'BCC cube, side $a$: atoms at the corners', stagger=45)
    F.draw(['Cb'], 'and one at the body centre')
    F.draw(['bd'], 'Atoms touch along the body diagonal')
    return F.done('pf_bcc')


def fig_hcp():
    a = 120.0
    def Q(x, y, z):
        return (x + 0.25 * y, 0.42 * y + z)
    F = Fig([-82, -22, 92, 128])
    P, Qp, R = (-60, 0, 0), (60, 0, 0), (0, a * sqrt(3) / 2, 0)
    G = (0, a * sqrt(3) / 6, 0)
    Tp = (0, a * sqrt(3) / 6, a * sqrt(2 / 3))
    M = (0, 0, 0)
    F.pt('P', Q(*P), side='w'); F.pt('Q', Q(*Qp), side='e'); F.pt('R', Q(*R), side='ne')
    F.pt('G', Q(*G), side='se'); F.pt('T', Q(*Tp), side='n'); F.pt('M', Q(*M), side='s')
    F.poly('base', ['P', 'Q', 'R'], style='glass')
    F.line('TP', 'T', 'P', style='ray', label='a')
    F.line('TQ', 'T', 'Q', style='guide')
    F.line('TR', 'T', 'R', style='guide')
    F.line('RM', 'R', 'M', style='guide', label='(\\sqrt3/2)a')
    F.line('PG', 'P', 'G', label='a/\\sqrt3')
    F.line('GT', 'G', 'T', style='normal', label='c/2')
    F.poly('triM', ['P', 'M', 'R'])
    F.angle('a60', 'P', 'M', 'R', 22, '60°')
    F.poly('triT', ['P', 'G', 'T'])
    Gq, Pq, Tq = Q(*G), Q(*P), Q(*Tp)
    F.part('rtG', **rmark(Gq, sub(Pq, Gq), sub(Tq, Gq), 6))
    F.dim('PQd', 'P', 'Q', (0, 16), 'a')
    F.draw(['base', 'P', 'Q', 'R', 'PQd'], 'Three touching atoms of layer A: a triangle of side $a$')
    F.draw(['T', 'TP', 'TQ', 'TR'], 'An atom of layer B sits in their hollow, touching all three')
    F.draw(['G', 'GT'], '$G$: centre of the triangle, right below $T$. $GT = c/2$')
    return F.done('hcp')


def fig_laue():
    tt = radians(50)          # 2θ, the angle between incident and scattered beams
    n1, n2 = (1.0, 0.0), (cos(tt), sin(tt))
    A = (-92.0, -32.0)
    r = (70.0, 16.0)
    B = add(A, r)
    rn1 = r[0] * n1[0] + r[1] * n1[1]
    rn2 = r[0] * n2[0] + r[1] * n2[1]
    M = add(A, n1, rn1)
    L = add(A, n2, rn2)
    F = Fig([-150, -64, 150, 82])
    F.pt('A', A, side='sw'); F.pt('B', B, side='se')
    F.pt('M', M, side='s'); F.pt('L', L, side='nw')
    F.hid('Ai', add(A, n1, -52)); F.hid('Bi', add(B, n1, -122))
    F.hid('Ao', add(A, n2, 120)); F.hid('Bo', add(B, n2, 100))
    F.line('inA', 'Ai', 'A', style='ray', arrow=True)
    F.line('inB', 'Bi', 'B', style='ray', arrow=True)
    F.line('outA', 'A', 'Ao', style='ray', arrow=True)
    F.line('outB', 'B', 'Bo', style='ray', arrow=True)
    F.line('rv', 'A', 'B', arrow=True, label='r')
    F.line('BM', 'B', 'M', style='guide')
    F.line('BL', 'B', 'L', style='guide')
    F.line('AM', 'A', 'M', label='\\mathbf r\\cdot\\hat n_1')
    F.line('AL', 'A', 'L', label='\\mathbf r\\cdot\\hat n_2')
    F.part('rtM', **rmark(M, (-1, 0), sub(B, M), 5))
    F.part('rtL', **rmark(L, (-n2[0], -n2[1]), sub(B, L), 5))
    # vector triangle
    O2 = (68.0, -44.0)
    K1, K2 = add(O2, n1, 62), add(O2, n2, 62)
    H = ((K1[0] + K2[0]) / 2, (K1[1] + K2[1]) / 2)
    F.pt('O2', O2, label=False); F.hid('K1', K1); F.hid('K2', K2); F.hid('H', H)
    F.line('v1', 'O2', 'K1', arrow=True, label='\\hat n_1')
    F.line('v2', 'O2', 'K2', arrow=True, label='\\hat n_2')
    F.line('vN', 'K2', 'K1', style='ray', arrow=True, label='N')
    F.angle('tt', 'O2', 'K1', 'K2', 18, '2θ')
    F.line('bis', 'O2', 'H', style='guide')
    F.angle('th', 'O2', 'K1', 'H', 30, 'θ')
    F.poly('triH', ['O2', 'K1', 'H'])
    F.part('rtH', **rmark(H, sub(O2, H), sub(K1, H), 5))
    F.draw(['A', 'B', 'rv'], 'Two identical atoms $A$ and $B$, separated by $\\mathbf r$')
    F.draw(['inA', 'inB', 'outA', 'outB'], 'Incident beam along $\\hat{\\mathbf n}_1$, scattered beam along $\\hat{\\mathbf n}_2$')
    F.draw(['BM', 'BL', 'M', 'L'], 'Drop perpendiculars from $B$ onto the two beams through $A$')
    F.draw(['v1', 'v2', 'vN', 'tt', 'O2'], 'The unit vectors, and $\\mathbf N = \\hat{\\mathbf n}_1 - \\hat{\\mathbf n}_2$')
    return F.done('laue')


def fig_brecip():
    th = radians(24)
    k = 150.0
    O = (-80.0, 0.0)
    K = add(O, (cos(th), -sin(th)), k)
    Kp = add(O, (cos(th), sin(th)), k)
    H = (K[0], 0.0)
    F = Fig([-120, -78, 120, 78])
    F.pt('O', O, side='w'); F.pt('K', K, side='se', label='K'); F.pt('Kp', Kp, side='ne', label="K′")
    F.pt('H', H, side='e', label=False)
    F.hid('p0', (-115, 0)); F.hid('p1', (112, 0))
    F.line('plane', 'p0', 'p1', style='mirror', label='(hkl)')
    F.line('kin', 'O', 'K', style='ray', arrow=True, label='k')
    F.line('kout', 'O', 'Kp', style='ray', arrow=True, label="k′")
    F.line('G', 'K', 'Kp', arrow=True, label='G')
    F.angle('th', 'O', 'H', 'K', 34, 'θ')
    F.angle('th2', 'O', 'Kp', 'H', 34, 'θ')
    F.line('OH', 'O', 'H', style='guide')
    F.poly('tri', ['O', 'H', 'K'])
    F.part('rt', **rmark(H, (-1, 0), (0, -1), 6))
    F.dim('KH', 'K', 'H', (16, 0), 'G/2')
    F.draw(['plane'], 'A family of planes $(hkl)$')
    F.draw(['kin', 'O', 'K', 'th'], 'Incident wave vector $\\mathbf k$ at glancing angle $θ$')
    F.draw(['kout', 'Kp', 'th2'], 'Scattered $\\mathbf k′$, same length (elastic)')
    F.draw(['G'], '$\\mathbf k′ - \\mathbf k = \\mathbf G$, along the normal to the planes')
    return F.done('brecip')


# ════════════════════════════ Module II ════════════════════════════

def wave_pts(x0, x1, y0, amp, n, N=60):
    fw = [(x0 + (x1 - x0) * i / N, y0 + amp * sin(n * pi * i / N)) for i in range(N + 1)]
    return [r2(p) for p in fw + fw[-2:0:-1]]   # there and back: a closed outline with no area


def fig_box1d():
    L = 200.0
    F = Fig([-118, -14, 130, 122])
    x0, x1 = -100.0, 100.0
    F.hid('w0a', (x0, -8)); F.hid('w0b', (x0, 118))
    F.hid('w1a', (x1, -8)); F.hid('w1b', (x1, 118))
    F.hid('g0', (x0, 0)); F.hid('g1', (x1, 0))
    F.line('wall0', 'w0a', 'w0b', style='mirror', label='V = \\infty')
    F.line('wall1', 'w1a', 'w1b', style='mirror', label='V = \\infty')
    F.line('floor', 'g0', 'g1', style='axis')
    F.pt('x0', (x0, 0), label='0', side='s', dot=False)
    F.pt('xL', (x1, 0), label='L', side='s', dot=False)
    lv = {1: 12.0, 2: 48.0, 3: 102.0}
    for n, y in lv.items():
        F.hid('l%da' % n, (x0, y)); F.hid('l%db' % n, (x1, y))
        F.line('lev%d' % n, 'l%da' % n, 'l%db' % n, style='guide', label='E_%d' % n)
        F.poly('psi%d' % n, wave_pts(x0, x1, y, 11, n), style='wave')
    for n, y in lv.items():
        F.pt('e%da' % n, (-12, y), label=False)
        F.pt('e%db' % n, (12, y), label=False)
    F.draw(['wall0', 'wall1', 'floor', 'x0', 'xL'], 'A line of length $L$ with walls it cannot cross')
    F.draw(['psi1', 'psi2', 'psi3'], 'Standing waves that vanish at both walls')
    F.draw(['lev1', 'lev2', 'lev3'], 'Each wave has its own energy, $E_n ∝ n^2$')
    return F.done('box1d')


def fig_kspace():
    s = 18.0
    kF = 74.0
    F = Fig([-104, -104, 104, 104])
    grid = []
    for i in range(-5, 6):
        x = i * s
        F.hid('vx%d' % (i + 5), (x, -98)); F.hid('vy%d' % (i + 5), (x, 98))
        F.hid('hx%d' % (i + 5), (-98, x)); F.hid('hy%d' % (i + 5), (98, x))
        grid.append(F.line('gv%d' % (i + 5), 'vx%d' % (i + 5), 'vy%d' % (i + 5), style='guide'))
        grid.append(F.line('gh%d' % (i + 5), 'hx%d' % (i + 5), 'hy%d' % (i + 5), style='guide'))
    F.pt('O', (0, 0), side='sw', label='0')
    F.hid('kx', (102, 0)); F.hid('ky', (0, 102)); F.hid('kx0', (-102, 0)); F.hid('ky0', (0, -102))
    F.line('axx', 'kx0', 'kx', style='axis', arrow=True, label='k_x')
    F.line('axy', 'ky0', 'ky', style='axis', arrow=True, label='k_y')
    circ = [r2((kF * cos(2 * pi * i / 72), kF * sin(2 * pi * i / 72))) for i in range(72)]
    F.poly('sphere', circ, style='glass')
    F.hid('kFp', (kF * cos(radians(35)), kF * sin(radians(35))))
    F.line('kFr', 'O', 'kFp', style='ray', arrow=True, label='k_F')
    F.poly('cell', [[s, s], [2 * s, s], [2 * s, 2 * s], [s, 2 * s]])
    F.hid('c0', (s * 4, -s * 4)); F.hid('c1', (s * 5, -s * 4))
    F.dim('cellw', 'c0', 'c1', (0, 12), '2π/L')
    F.draw(grid + ['axx', 'axy', 'O'], 'Allowed $\\mathbf k$: a grid with spacing $2π/L$ (a slice of $k$-space)', stagger=40)
    F.draw(['cell', 'cellw'], 'Each allowed $\\mathbf k$ owns a box of volume $(2π/L)^3$')
    F.draw(['sphere', 'kFr'], 'At $T = 0$ the states fill a sphere of radius $k_F$')
    return F.done('kspace')


def fig_kp():
    a, b, V0 = 70.0, 26.0, 60.0
    F = Fig([-122, -26, 126, 86])
    xs = [-110.0]
    pts = []
    x = -110.0
    # start inside a barrier, then well, barrier, well...
    seq = [(-110, V0), (-96, V0), (-96, 0), (-96 + a, 0), (-96 + a, V0), (-96 + a + b, V0), (-96 + a + b, 0),
           (-96 + 2 * a + b, 0), (-96 + 2 * a + b, V0), (-96 + 2 * a + 2 * b, V0), (-96 + 2 * a + 2 * b, 0), (118, 0)]
    pts = [r2(p) for p in seq]
    F.poly('V', pts + pts[-2:0:-1], style='wave')
    F.hid('ax0', (-116, -6)); F.hid('ax1', (124, -6))
    F.line('xaxis', 'ax0', 'ax1', style='axis', arrow=True, label='x')
    w0, w1 = -96 + a + b, -96 + 2 * a + b      # second well [w0, w1]
    F.pt('O', (w0, 0), label='0', side='s', dot=False)
    F.pt('Pa', (w1, 0), label='a', side='s', dot=False)
    F.pt('Pb', (w0 - b, 0), label='−b', side='s', dot=False)
    F.hid('bt0', (w0 - b, V0)); F.hid('bt1', (w0, V0))
    F.dim('dV', 'Pb', 'bt0', (-14, 0), 'V₀')
    F.dim('dA', 'O', 'Pa', (0, 26), 'a')
    F.dim('dB', 'bt0', 'bt1', (0, -12), 'b')
    F.hid('E0', (-110, 34)); F.hid('E1', (118, 34))
    F.line('Elev', 'E0', 'E1', style='guide', label='E')
    F.text('t1', ((w0 + w1) / 2, 14), 'I: $V = 0$')
    F.text('t2', (w0 - b / 2, 72), 'II: $V_0$')
    F.draw(['xaxis', 'V'], 'A periodic row of square wells: period $a + b$')
    F.draw(['dV', 'dA', 'dB', 'O', 'Pa', 'Pb'], 'Well width $a$, barrier width $b$, barrier height $V_0$')
    F.draw(['Elev'], 'An electron of energy $E$ below the top of the barriers')
    return F.done('kp')


# ════════════════════════════ Module III ════════════════════════════

def band_curve(E0, sign, xs, scale, tail_kT, Ef, kind):
    """points of D(E), f(E) or their product beside a band edge E0; sign +1 conduction, -1 valence"""
    out = []
    for i in range(0, 31):
        e = i * 2.4                       # depth into the band, figure units
        E = E0 + sign * e
        D = sqrt(e)
        if sign > 0:
            f = 1 / (1 + 2.718 ** ((E - Ef) / tail_kT)) if (E - Ef) / tail_kT < 50 else 0.0
        else:
            f = 1 - 1 / (1 + 2.718 ** ((E - Ef) / tail_kT)) if (E - Ef) / tail_kT > -50 else 0.0
        v = {'D': D * scale, 'f': f * 60, 'n': D * f * scale * 26}[kind]
        out.append(r2((xs + v, E)))
    return out


def fig_bands(key, Ef=0.0, donors=False):
    Ec, Ev = 50.0, -50.0
    F = Fig([-120, -102, 126, 106])
    F.hid('c0', (-110, Ec)); F.hid('c1', (10, Ec))
    F.hid('v0', (-110, Ev)); F.hid('v1', (10, Ev))
    F.hid('f0', (-110, Ef)); F.hid('f1', (122, Ef))
    F.hid('ea0', (-114, -96)); F.hid('ea1', (-114, 100))
    F.line('Eax', 'ea0', 'ea1', style='axis', arrow=True, label='E')
    F.line('Ec', 'c0', 'c1', style='mirror', label='E_c')
    F.line('Ev', 'v0', 'v1', style='mirror', label='E_v')
    F.line('Ef', 'f0', 'f1', style='guide', label='E_F')
    F.hid('g0', (-60, Ev)); F.hid('g1', (-60, Ec))
    F.dim('Eg', 'g0', 'g1', (0, 0), 'E_g')
    kT = 9.0
    Dc = band_curve(Ec, +1, 14, 10.5, kT, Ef, 'D')
    Dv = band_curve(Ev, -1, 14, 10.5, kT, Ef, 'D')
    F.poly('Dc', Dc + Dc[-2:0:-1], style='wave')
    F.poly('Dv', Dv + Dv[-2:0:-1], style='wave')
    nC = band_curve(Ec, +1, 14, 10.5, kT, Ef, 'n')
    pV = band_curve(Ev, -1, 14, 10.5, kT, Ef, 'n')
    F.poly('nC', [[14, Ec]] + nC + [[14, nC[-1][1]]], style='glass')
    F.poly('pV', [[14, Ev]] + pV + [[14, pV[-1][1]]], style='glass')
    F.text('tn', (88, Ec + 30), 'D(E)')
    F.text('tp', (88, Ev - 30), 'D(E)')
    F.pt('Pc', (14, Ec), label=False)
    F.hid('d0', (14, Ec)); F.hid('d1', (14, Ec + 60))
    F.dim('dE', 'd0', 'd1', (-10, 0), 'E − E_c')
    parts1 = ['Eax', 'Ec', 'Ev', 'Eg']
    if donors:
        Ed = Ec - 9.0
        F.hid('dd0', (-104, Ed)); F.hid('dd1', (6, Ed))
        F.line('Ed', 'dd0', 'dd1', style='normal', label='E_d')
        dons = []
        for i, x in enumerate([-92, -72, -52, -32, -12]):
            dons.append(F.pt('dn%d' % i, (x, Ed), label=False))
        F.hid('ie0', (-20, Ed)); F.hid('ie1', (-20, Ec))
        F.dim('dEi', 'ie0', 'ie1', (-12, 0), 'ΔE')
    F.draw(parts1, 'Band edges: conduction band above $E_c$, valence band below $E_v$')
    if donors:
        F.draw(['Ed'] + dons, 'Donor levels $E_d$ just below $E_c$ (one per donor atom)', stagger=60)
    F.draw(['Ef'], 'The Fermi level $E_F$')
    F.draw(['Dc', 'Dv', 'tn', 'tp'], 'Density of states: grows as $\\sqrt{\\text{depth}}$ into each band')
    return F.done(key)


def fig_bands_i():
    return fig_bands('bands', Ef=0.0)


def fig_bands_n():
    return fig_bands('bands_n', Ef=46.0, donors=True)


# ════════════════════════════ Module IV ════════════════════════════

def fig_orbit():
    rho = 72.0
    ph = radians(35)
    F = Fig([-112, -96, 118, 100])
    F.pt('O', (0, 0), label='+Ze', side='sw')
    e = (rho * cos(ph), rho * sin(ph))
    F.pt('e', e, label='e', side='ne')
    F.arc('orb', 'O', rho, 0, 360)
    t = (-sin(ph), cos(ph))
    radial = (cos(ph), sin(ph))
    F.hid('vt', add(e, t, 44))
    F.line('v', 'e', 'vt', arrow=True, label='v')
    F.line('rho', 'O', 'e', style='guide', label='ρ')
    F.hid('Fc_t', add(e, radial, -42))
    F.hid('FL_t', add(e, radial, 30))
    F.line('Fc', 'e', 'Fc_t', style='ray', arrow=True, label='F_C')
    F.line('FL', 'e', 'FL_t', style='ray', arrow=True, label='F_L')
    F.text('Bt', (-80, 82), '$\\otimes\\,\\mathbf B$ into page')
    F.draw(['orb', 'O'], 'Nucleus $+Ze$, electron orbit of radius $ρ$')
    F.draw(['e', 'v', 'rho'], 'The electron goes round with speed $v = ρω_0$')
    F.draw(['Fc'], 'Coulomb attraction provides the centripetal force')
    return F.done('orbit')


def fig_dipole(key, mom, fld, ang_lab='θ'):
    th = radians(38)
    dth = radians(9)
    R = 82.0
    F = Fig([-110, -40, 110, 108])
    F.pt('O', (0, 0), side='s', label='O')
    F.hid('Bt', (0, 104)); F.hid('Bb', (0, -34))
    F.line('B', 'Bb', 'Bt', style='axis', arrow=True, label=fld)
    tip = (R * sin(th), R * cos(th))
    F.hid('tip', tip)
    F.line('mu', 'O', 'tip', style='ray', arrow=True, label=mom)
    F.hid('Bup', (0, 60))
    F.angle('th', 'O', 'Bup', 'tip', 26, ang_lab)
    foot = (0, tip[1])
    F.hid('foot', foot)
    F.line('perp', 'tip', 'foot', style='guide')
    F.line('comp', 'O', 'foot', label=mom + ' cos ' + ang_lab)
    F.poly('tri', ['O', 'foot', 'tip'])
    F.part('rt', **rmark(foot, (0, -1), (1, 0), 6))
    F.hid('r1', (R * sin(th + dth), R * cos(th + dth)))
    F.hid('l1', (-R * sin(th), R * cos(th))); F.hid('l2', (-R * sin(th + dth), R * cos(th + dth)))
    F.line('c1', 'O', 'r1', style='guide')
    F.line('c2', 'O', 'l1', style='guide')
    F.line('c3', 'O', 'l2', style='guide')
    a0, a1 = 90 - degrees(th + dth), 90 - degrees(th)
    F.arc('ringR', 'O', R, a0, a1)
    F.arc('ringL', 'O', R, 180 - a1, 180 - a0)
    F.hid('bandL', (-R * sin(th), R * cos(th))); F.hid('bandR', tip)
    F.line('band', 'bandL', 'bandR', style='normal', label='2πR\\sin θ')
    F.draw(['B', 'O'], 'Field $\\mathbf ' + fld + '$ along the axis')
    F.draw(['mu', 'th'], 'A permanent moment at angle $' + ang_lab + '$ to the field')
    F.draw(['c1', 'c2', 'c3', 'ringR', 'ringL'], 'Moments between $θ$ and $θ + dθ$ fill a ring (a hollow cone)')
    return F.done(key)


def fig_dipole_m():
    return fig_dipole('dipole_m', 'μ', 'B')


def fig_dipole_e():
    return fig_dipole('dipole_e', 'p', 'E')


def fig_cavity():
    a = 70.0
    th = radians(42)
    dth = radians(9)
    F = Fig([-118, -86, 118, 92])
    F.pt('O', (0, 0), side='s', label='O')
    F.hid('E0', (-112, -62)); F.hid('E1', (112, -62))
    F.line('Eext', 'E0', 'E1', style='axis', arrow=True, label='E\\ (\\text{and } P)')
    F.arc('cav', 'O', a, 0, 360)
    ch = []
    for i, ang in enumerate([-50, -25, 0, 25, 50]):
        A = radians(ang)
        ch.append(F.text('m%d' % i, (0.84 * a * cos(A), 0.84 * a * sin(A)), '−'))
        ch.append(F.text('p%d' % i, (-0.84 * a * cos(A), 0.84 * a * sin(A)), '+'))
    up = (a * cos(th), a * sin(th)); dn = (a * cos(th), -a * sin(th))
    up2 = (a * cos(th + dth), a * sin(th + dth)); dn2 = (a * cos(th + dth), -a * sin(th + dth))
    F.hid('u1', up); F.hid('d1', dn); F.hid('u2', up2); F.hid('d2', dn2)
    F.hid('xax', (a + 22, 0)); F.hid('xax0', (-a - 22, 0))
    F.line('axis', 'xax0', 'xax', style='guide')
    F.line('rad', 'O', 'u1', label='a')
    F.line('rad2', 'O', 'u2', style='guide')
    F.angle('th', 'O', 'xax', 'u1', 24, 'θ')
    F.arc('ringU', 'O', a, degrees(th), degrees(th + dth))
    F.arc('ringD', 'O', a, -degrees(th + dth), -degrees(th))
    F.line('chord', 'u1', 'd1', style='normal', label='\\text{ring}')
    F.hid('dEt', (30, 0))
    F.line('dE', 'O', 'dEt', style='ray', arrow=True, label='dE_3')
    F.draw(['Eext'], 'Dielectric polarised along the field')
    F.draw(['cav', 'O'] + ch, 'An imaginary sphere round the atom: bound charge sits on its wall')
    F.draw(['axis', 'rad', 'th'], 'Measure $θ$ from the field direction; radius $a$')
    return F.done('cavity')


def build_all():
    for name, fn in list(globals().items()):
        if name.startswith('fig_') and callable(fn) and name not in ('fig_bands', 'fig_dipole'):
            fn()


build_all()


# ════════════════════════════ 3-D figures (deriv/fig3.js) ════════════════════════════

class Fig3:
    def __init__(self, view):
        self.f = {'kind': '3d', 'view': view, 'points': {}, 'parts': {}, 'draw': []}

    def pt(self, n, at, label=None, dot=True):
        p = {'at': [round(v, 2) for v in at]}
        if label is not None:
            p['label'] = label
        if not dot:
            p['dot'] = False
        self.f['points'][n] = p

    def hid(self, n, at):
        self.pt(n, at, label=False, dot=False)

    def part(self, n, **kw):
        self.f['parts'][n] = kw

    def line(self, n, a, b, **kw):
        self.part(n, type='line', **{'from': a, 'to': b}, **kw)

    def draw(self, parts, caption):
        self.f['draw'].append({'parts': list(parts), 'caption': caption})

    def done(self, key):
        FIGS[key] = self.f


def fig_dhkl3():
    p, q, r = 100.0, 120.0, 86.0
    inv = (1 / p, 1 / q, 1 / r)
    d = 1 / sqrt(sum(v * v for v in inv))
    N = tuple(d * d * v for v in inv)          # foot of the perpendicular: d · unit normal
    F = Fig3({'yaw': -38, 'pitch': 22})
    F.pt('O', (0, 0, 0))
    F.hid('Xe', (150, 0, 0)); F.hid('Ye', (0, 150, 0)); F.hid('Ze', (0, 0, 125))
    F.pt('A', (p, 0, 0)); F.pt('B', (0, q, 0)); F.pt('C', (0, 0, r)); F.pt('N', N)
    F.line('ax', 'O', 'Xe', style='axis', arrow=True, label='x')
    F.line('ay', 'O', 'Ye', style='axis', arrow=True, label='y')
    F.line('az', 'O', 'Ze', style='axis', arrow=True, label='z')
    F.part('plane', type='polygon', points=['A', 'B', 'C'], style='glass')
    F.line('OA', 'O', 'A', label='a/h'); F.line('OB', 'O', 'B', label='b/k'); F.line('OC', 'O', 'C', label='c/l')
    F.line('ON', 'O', 'N', style='ray', arrow=True, label='d')
    for X in 'ABC':
        F.line('N' + X, 'N', X, style='guide')
        F.part('tri' + X, type='polygon', points=['O', 'N', X])
        F.part('rt' + X, type='rmark', at='N', a='O', b=X, s=7)
    F.part('alpha', type='angle', at='O', **{'from': 'A', 'to': 'N'}, r=24, label='α')
    F.part('beta', type='angle', at='O', **{'from': 'B', 'to': 'N'}, r=24, label='β')
    F.part('gamma', type='angle', at='O', **{'from': 'C', 'to': 'N'}, r=24, label='γ')
    F.draw(['ax', 'ay', 'az', 'O'], 'Crystal axes $x$, $y$, $z$ at right angles')
    F.draw(['plane', 'A', 'B', 'C'], 'The plane $(hkl)$ nearest the origin cuts them at $A$, $B$, $C$')
    F.draw(['ON', 'N'], '$ON$: perpendicular from $O$ to the plane, length $d$')
    F.done('dhkl3')


fig_dhkl3()

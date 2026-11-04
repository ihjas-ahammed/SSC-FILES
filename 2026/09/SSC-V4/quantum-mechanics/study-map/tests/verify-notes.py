"""Numeric checks of the worked examples in the supporting notes (no third-party packages).
Run: python3 tests/verify-notes.py"""
import cmath, math

def mm(A, B):
    return [[sum(A[i][k] * B[k][j] for k in range(len(B))) for j in range(len(B[0]))] for i in range(len(A))]
def mv(A, v): return [sum(A[i][k] * v[k] for k in range(len(v))) for i in range(len(A))]
def dag(A): return [[A[j][i].conjugate() for j in range(len(A))] for i in range(len(A[0]))]
def ip(u, v): return sum(a.conjugate() * b for a, b in zip(u, v))
def close(a, b, tol=1e-9):
    return abs(a - b) < tol if not isinstance(a, list) else all(close(x, y, tol) for x, y in zip(a, b))
def mat_close(A, B): return all(close(A[i][j], B[i][j]) for i in range(len(A)) for j in range(len(A[0])))
def C(*rows): return [[complex(x) for x in r] for r in rows]
def norm(v): return math.sqrt(ip(v, v).real)
checks = 0
def ok(cond, label):
    global checks
    assert cond, "FAILED: " + label
    checks += 1

s2 = math.sqrt(2)
# Inner product and norm examples
ok(close(ip([1, 1j], [2, 1]), 2 - 1j), "inner product (1,i),(2,1)")
ok(close(norm([1, 1j]), s2), "norm (1,i)")
ok(close(ip([1, 1j], [1, -1j]), 0), "orthogonal (1,i),(1,-i)")
u, v = [1, 1j], [1, -1j]
ok(close(norm([a + b for a, b in zip(u, v)]) ** 2, norm(u) ** 2 + norm(v) ** 2), "Pythagoras complex")
# conjugate linearity
ok(close(ip([1j * x for x in [1, 0]], [1, 1]), (-1j) * ip([1, 0], [1, 1])), "conjugate linearity")
ok(close(ip([1j, 0], [1, 1]), -1j), "conj-lin example value")
# Gram-Schmidt
u1, u2 = [1, 1], [1, 0]
e1 = [x / s2 for x in u1]
w2 = [a - ip(e1, u2) * b for a, b in zip(u2, e1)]
e2 = [x / norm(w2) for x in w2]
ok(close(ip(e1, e2), 0) and close(w2, [0.5, -0.5]), "Gram-Schmidt")
# orthonormal expansion and Parseval
e1, e2 = [1 / s2, 1 / s2], [1 / s2, -1 / s2]
vv = [3, 1]
c1, c2 = ip(e1, vv), ip(e2, vv)
ok(close(c1, 2 * s2) and close(c2, s2), "expansion coefficients")
ok(close(abs(c1) ** 2 + abs(c2) ** 2, 10), "Parseval 10")
ok(close([c1 * a + c2 * b for a, b in zip(e1, e2)], vv), "expansion rebuilds v")
# change of basis
U = C([1 / s2, 1 / s2], [1 / s2, -1 / s2]); A = C([0, 1], [1, 0])
ok(mat_close(mm(mm(dag(U), A), U), C([1, 0], [0, -1])), "change of basis diag(1,-1)")
# unitary
Uq = C([0, -1], [1, 0])
ok(mat_close(mm(dag(Uq), Uq), C([1, 0], [0, 1])), "unitary rotation")
ok(close(norm(mv(Uq, [3, 4])), 5), "unitary keeps length")
ok(close(mv(Uq, [1, -1j]), [1j * x for x in [1, -1j]]), "unitary eigenvalue i")
# adjoint rule example
Aa, Bb = C([0, 1], [0, 0]), C([0, 0], [1, 0])
ok(mat_close(dag(mm(Aa, Bb)), mm(dag(Bb), dag(Aa))), "(AB)^dagger = B^dagger A^dagger")
ok(mat_close(dag([[1j * x for x in r] for r in C([1, 0], [0, 2])]), [[(-1j) * x for x in r] for r in C([1, 0], [0, 2])]), "(iA)^dagger")
# commutators
comm = lambda X, Y: [[mm(X, Y)[i][j] - mm(Y, X)[i][j] for j in range(2)] for i in range(2)]
ok(mat_close(comm(Aa, Bb), C([1, 0], [0, -1])), "[A,B] example")
Z = mm(Bb, Bb)
ok(mat_close(Z, C([0, 0], [0, 0])), "B^2 = 0")
lhs = comm(Aa, Z)
rhs = [[mm(comm(Aa, Bb), Bb)[i][j] + mm(Bb, comm(Aa, Bb))[i][j] for j in range(2)] for i in range(2)]
ok(mat_close(lhs, rhs), "[A,BC] product rule example")
sx, sy = C([0, 1], [1, 0]), C([0, -1j], [1j, 0])
ok(mat_close(comm(sx, sy), C([2j, 0], [0, -2j])), "[sigma_x, sigma_y]")
ok(mat_close(dag(comm(sx, sy)), [[-x for x in r] for r in comm(sx, sy)]), "anti-Hermitian commutator")
# Hermitian matrix with complex entries
H = C([2, -1j], [1j, 3])
ok(mat_close(dag(H), H), "H Hermitian")
tr = 5; det = 2 * 3 - (-1j) * (1j)
ok(close(det, 5), "det H = 5")
lam = [(5 + math.sqrt(5)) / 2, (5 - math.sqrt(5)) / 2]
ok(all(abs(l * l - 5 * l + 5) < 1e-9 for l in lam), "eigenvalues of H")
ok(close(ip([1, 1j], mv(H, [1, 1j])), 7), "<psi|H|psi> = 7")
ok(close(mv(H, [1, 1j]), [3, 4j]), "H psi")
# sigma_y eigen example
ok(close(mv(C([0, -1j], [1j, 0]), [1, 1j]), [1, 1j]), "sigma_y eigenvector, lambda=1")
# spectral theorem example
P1 = [[0.5, 0.5], [0.5, 0.5]]; P2 = [[0.5, -0.5], [-0.5, 0.5]]
Asum = [[P1[i][j] - P2[i][j] for j in range(2)] for i in range(2)]
ok(all(abs(Asum[i][j] - [[0, 1], [1, 0]][i][j]) < 1e-12 for i in range(2) for j in range(2)), "spectral decomposition of sigma_x")
# expectation value / variance / uncertainty examples
Dg = C([2, 0], [0, 4]); psi = [1 / s2, 1 / s2]
m1 = ip(psi, mv(Dg, psi)).real; m2 = ip(psi, mv(mv(Dg, [[1, 0], [0, 1]][0]) if False else Dg, mv(Dg, psi))).real
ok(close(m1, 3) and close(m2, 10), "mean 3, <A^2>=10")
ok(close(m2 - m1 ** 2, 1), "variance 1")
ok(close(norm(mv([[1 if i == j else 0 for j in range(2)] for i in range(2)], [(x - 3 * y) for x, y in zip(mv(Dg, psi), psi)])) ** 2, 1), "(A-3)psi length^2 = 1")
# Schwarz example and proof arithmetic
u, v = [1, 0], [1, 1]
lam = ip(v, u) / ip(v, v)
ok(close(lam, 0.5) and close(norm([a - lam * b for a, b in zip(u, v)]) ** 2, 0.5), "Schwarz lambda choice")
# uncertainty relation for sigma_x, sigma_y in (1,0)
ex = lambda X: ip([1, 0], mv(X, [1, 0]))
dx = math.sqrt((ex(mm(sx, sx)) - ex(sx) ** 2).real); dy = math.sqrt((ex(mm(sy, sy)) - ex(sy) ** 2).real)
ok(close(dx * dy, 0.5 * abs(ex(comm(sx, sy)))), "uncertainty bound met by sigma_x,sigma_y")
# determinant / inverse examples
a, b, c, d = 1, 2, 3, 4; dt = a * d - b * c
inv = [[d / dt, -b / dt], [-c / dt, a / dt]]
ok(all(abs(mm(C([1, 2], [3, 4]), inv)[i][j] - [[1, 0], [0, 1]][i][j]) < 1e-12 for i in range(2) for j in range(2)), "inverse of [[1,2],[3,4]]")
ok(close(mv(C([1, 2], [3, 6]), [6, -3]), [0, 0]), "det 0 matrix kills (d,-c)")
# trace cyclicity example
X, Y = C([1, 2], [0, 1]), C([0, 1], [1, 0])
ok(close(sum(mm(X, Y)[i][i] for i in range(2)), 2) and close(sum(mm(Y, X)[i][i] for i in range(2)), 2), "tr(XY)=tr(YX)")
# transpose example
T = lambda M: [[M[j][i] for j in range(len(M))] for i in range(len(M[0]))]
ok(mat_close(T(mm(X, Y)), mm(T(Y), T(X))), "(XY)^T = Y^T X^T")
# matrix of product / matrix rep example
ok(mat_close(mm(Y, Y), C([1, 0], [0, 1])), "swap twice is identity")
# commutator of x and p acting on psi=x and gaussian, by finite difference
hb = 1.0; h = 1e-5
def p_op(f): return lambda x: -1j * hb * (f(x + h) - f(x - h)) / (2 * h)
def x_op(f): return lambda x: x * f(x)
for f, name in [(lambda x: x, "psi=x"), (lambda x: math.exp(-x * x), "gauss")]:
    for x0 in (0.3, 1.1):
        lhs = x_op(p_op(f))(x0) - p_op(x_op(f))(x0)
        ok(abs(lhs - 1j * hb * f(x0)) < 1e-5, "[x,p] psi = i hbar psi: " + name)
# Gaussian reaches Delta x Delta p = hbar/2
sig = 1.3; N = 200001; L = 12.0; dxg = 2 * L / (N - 1)
xs = [-L + i * dxg for i in range(N)]
psi_g = [(math.pi * sig ** 2) ** -0.25 * math.exp(-x * x / (2 * sig ** 2)) for x in xs]
x2 = sum(p * p * x * x for p, x in zip(psi_g, xs)) * dxg
dpsi = [(psi_g[i + 1] - psi_g[i - 1]) / (2 * dxg) for i in range(1, N - 1)]
p2 = hb ** 2 * sum(dp * dp for dp in dpsi) * dxg
ok(abs(math.sqrt(x2) * math.sqrt(p2) - hb / 2) < 1e-4, "Gaussian saturates Delta x Delta p = hbar/2")
ok(abs(math.sqrt(x2) - sig / s2) < 1e-4, "Delta x = sigma/sqrt2")
# delta representation: area of sqrt(pi/eps) exp(-u^2/4eps) is 2 pi
for eps in (0.01, 1e-4):
    tot = 0; du = 1e-4 * math.sqrt(eps) * 100; ucount = int(40 * math.sqrt(eps) / du)
    tot = sum(math.sqrt(math.pi / eps) * math.exp(-(k * du) ** 2 / (4 * eps)) for k in range(-ucount, ucount + 1)) * du
    ok(abs(tot - 2 * math.pi) < 1e-3, "delta representation area, eps=%g" % eps)
# complete-the-square identity
k, uu, eps = 0.7, 1.9, 0.3
lhs = -eps * k * k + 1j * k * uu
rhs = -eps * (k - 1j * uu / (2 * eps)) ** 2 - uu * uu / (4 * eps)
ok(close(lhs, rhs), "completing the square")
# phase example
for th in (0.0, math.pi / 2, math.pi):
    amp = (1 + cmath.exp(1j * th)) / 2
    ok(close(abs(amp) ** 2, math.cos(th / 2) ** 2), "relative phase probability")
# factor theorem example
p = lambda x: x ** 3 - 6 * x ** 2 + 11 * x - 6
q = lambda x: x ** 2 - 5 * x + 6
ok(all(abs(p(x) - (x - 1) * q(x)) < 1e-9 for x in (-2, 0.5, 3, 7)), "factor theorem example")
# FTA example |p(ti)| for p = z^2+1
ok(all(abs(abs((t * 1j) ** 2 + 1) - abs(1 - t * t)) < 1e-12 and abs(1 - t * t) < 1 for t in (0.3, 1.0, 1.3)), "FTA descent example")
# continuity delta
a0, eps0 = 3, 0.07; dl = min(1, eps0 / (1 + 2 * abs(a0)))
ok(close(dl, 0.01) and all(abs((a0 + s) ** 2 - a0 ** 2) < eps0 for s in (-0.0099, 0.0099)), "continuity delta")
# geometric series partial sum
ok(close(sum(0.5 ** n for n in range(4)), 1.875) and close((1 - 0.5 ** 4) / 0.5, 1.875), "geometric partial sum")
# induction and sum examples
ok(all(2 ** n > n for n in range(1, 40)) and all(sum(range(1, n + 1)) == n * (n + 1) // 2 for n in range(1, 40)), "induction examples")
# derivative / integral numeric
ok(abs(((3.1 ** 2 - 9) / 0.1) - 6.1) < 1e-9, "derivative step 6.1")
ok(abs((0.5 + 1 / 8) - sum(k / 16 for k in range(1, 5))) < 1e-12, "integral n=4 strips = 0.625")
# distribution: delta scaling checks with a narrow Gaussian as delta
def dgauss(x, s=1e-3): return math.exp(-x * x / (2 * s * s)) / (s * math.sqrt(2 * math.pi))
fx = lambda x: x + 1; dxs = 2e-5
tot = sum(dgauss(2 * x) * fx(x) for x in [i * dxs for i in range(-3000, 3001)]) * dxs
ok(abs(tot - 0.5) < 1e-3, "integral delta(2x)(x+1) dx = 1/2")
# Fourier: delta input gives plane wave, and Plancherel on a Gaussian (hbar=1)
sg = 0.8; M = 4001; Lx = 20; dxf = 2 * Lx / (M - 1)
xx = [-Lx + i * dxf for i in range(M)]
psi2 = [(math.pi * sg ** 2) ** -0.25 * math.exp(-x * x / (2 * sg ** 2)) for x in xx]
pp = [-8 + 16 * j / 400 for j in range(401)]; dpf = 16 / 400
phi = [sum(cmath.exp(-1j * p_ * x) * ps for x, ps in zip(xx, psi2)) * dxf / math.sqrt(2 * math.pi) for p_ in pp]
ok(abs(sum(abs(f) ** 2 for f in phi) * dpf - 1) < 1e-4, "Plancherel on a Gaussian")
print("all %d numeric checks passed" % checks)

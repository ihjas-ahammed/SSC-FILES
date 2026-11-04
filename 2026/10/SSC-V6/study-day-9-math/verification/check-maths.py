"""Read-only checks of authored content; this does not generate course data."""
import json, math, cmath, xml.etree.ElementTree as ET
from pathlib import Path
import sympy as sp

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'study-match/data/data.json').read_text())
cards = [c for sec in data['sections'] for sh in sec['sheets'] for c in sh['cards']]
x, y, z, c = sp.symbols('x y z c', real=True)
f = x*x+x*y+2*y*y
H = sp.hessian(f,(x,y))
assert H == sp.Matrix([[2,1],[1,4]])
assert sp.hessian(x**3+x*y*y,(x,y)) == sp.Matrix([[6*x,2*y],[2*y,2*x]])
assert sp.Matrix([[4,2],[2,4]]).eigenvals() == {2:1,6:1}
assert sp.Matrix([[1,-1],[-1,1]]).eigenvals() == {0:1,2:1}
g = x**3+y**3-3*x*y
assert set(sp.solve([sp.diff(g,x),sp.diff(g,y)],(x,y))) == {(0,0),(1,1)}
assert sp.hessian(g,(x,y)).subs({x:0,y:0}).det() == -9
assert sp.hessian(g,(x,y)).subs({x:1,y:1}).det() == 27
for sign in (1,-1):
    assert sp.hessian(x*x+sign*y**4,(x,y)).subs({x:0,y:0}) == sp.diag(2,0)
assert sp.simplify(sp.diff((z+1)/(z-1),z)+2/(z-1)**2) == 0
assert sp.limit((z*z+1)/(z-sp.I),z,sp.I) == 2*sp.I
assert (sp.diag(2,1)*sp.Matrix([x,y])).dot(
    sp.diag(sp.Rational(1,4),1)*sp.diag(2,1)*sp.Matrix([x,y])) == x*x+y*y
expected = [
    ((1+1j)**2).imag, 2+2, 3**2+2*3+4,
    sp.diff((z*z+1)**3,z).subs(z,1), len(sp.solve(z*z-4,z)),
    sp.diff(2*x*y,x).subs(y,3),
    sp.solve(sp.diff((c-2)**2+(c-6)**2,c),c)[0],
    sp.diff(f,y,2), (sp.Matrix([[1,1]])*H*sp.Matrix([1,1]))[0],
    f.subs({x:1,y:2}), min(sp.Matrix([[4,2],[2,4]]).eigenvals()),
    4*3-2**2, sp.Rational(3,4)*4, sp.Rational(1,2), 2
]
numeric = [card for card in cards if card['type']=='number']
assert len(numeric)==len(expected)==15
for card, want in zip(numeric,expected):
    assert math.isclose(card['answer'],float(want),abs_tol=1e-12), card['q']
for eps in (1e-5,.01,.5,3,10):
    delta=min(1,eps/3)
    for angle in range(24):
        h=.9*delta*cmath.exp(2j*math.pi*angle/24)
        assert abs((1+h)**2-1)<eps
for card in cards:
    if card['type']=='derivation':
        assert sum('ask' in s for s in card['steps'])==4
    if card.get('art'):
        ET.fromstring(card['art'])
assert [sum(sh['minutes'] for sh in s['sheets']) for s in data['sections']]==[76,98,108,66]
report={'allNumericQuizzes':15,'symbolicDerivativesHessiansEigenvaluesAndClassification':True,
        'epsilonDeltaEstimatesSampled':True,'svgDiagrams':sum(bool(c.get('art')) for c in cards),
        'eachDerivationHasFourCheckpoints':True,'subjectMinutes':[174,174]}
(root/'verification/maths-check.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))

"""Read-only checks of directly authored maths; never creates educational data."""
import json, math, itertools, re, xml.etree.ElementTree as ET
from pathlib import Path
import sympy as sp

root=Path(__file__).resolve().parents[1]
report={}
for subject,paper,expected in [('real-analysis-ii',5,165),('abstract-algebra-i',4,156)]:
    path=root/'data'/f'{subject}-model-paper-{paper}-practice.json'
    data=json.loads(path.read_text())
    sheets=[sh for sec in data['sections'] for sh in sec['sheets']]
    cards=[c for sh in sheets for c in sh['cards']]
    assert len(cards)==expected
    assert [len(s['sheets']) for s in data['sections']]==[10,8,2]
    assert len(set(sh['id'] for sh in sheets))==20
    assert [s['markCap'] for s in data['sections']]==[24,36,10]
    assert data['sections'][2]['bestOf']==1
    assert [sh['marks'] for sh in sheets]==[3]*10+[6]*8+[10]*2
    for i,sh in enumerate(sheets,1):
        q=[c for c in sh['cards'] if c['type']=='question']
        assert len(q)==1 and q[0]['title']==f'Question {i}'
        assert bool(q[0].get('recallAnswer'))==(i<=10)
        assert q[0]['marks']==sh['marks'] and sh.get('source')
        ev=[c for c in sh['cards'] if c['type']=='eval']
        assert sum(max(o['m'] for o in c['options']) for c in ev)==sh['marks']
        assert all(any(o['m']==0 for o in c['options']) for c in ev)
        assert sum(c['type']=='key' for c in sh['cards'])==1
    for c in cards:
        if c['type']=='info':assert len(c.get('body',''))<=220
        if c.get('art'):ET.fromstring(c['art'])
        if c['type']=='derivation':assert sum('ask' in st for st in c['steps'])==4
    assert path.read_bytes()==(root/'source/data'/path.name).read_bytes()
    report[subject]={'questions':20,'lowMarkFlips':10,'authoredCards':len(cards),'rubricSums':True,'sourceReferences':20}

x,n=sp.symbols('x n',positive=True)
f=n*x/(1+n*n*x*x)
assert sp.limit(f,n,sp.oo)==0
assert sp.simplify(f.subs(x,1/n))==sp.Rational(1,2)
assert sp.factor(sp.diff(f,x))== -n*(n*x-1)*(n*x+1)/(n*n*x*x+1)**2
assert sp.simplify(sp.integrate(n*n*x,(x,0,1/n)))==sp.Rational(1,2)
assert sp.simplify(sp.integrate(n*n*(2/n-x),(x,1/n,2/n)))==sp.Rational(1,2)
assert sp.integrate(x*x,(x,-1,1))==sp.Rational(2,3)
assert sp.integrate(x,(x,-1,1))==0
assert sp.expand((x+1/n)**2-x*x)==2*x/n+1/n**2
for value,want in [(0,0),(.5,0),(1,.5),(2,1)]:
    if value==0:got=0
    else:got=sp.limit(value**n/(1+value**n),n,sp.oo)
    assert math.isclose(float(got),want,abs_tol=1e-12)
assert sp.simplify(1-2**n/(1+2**n))==1/(1+2**n)
for k in [2,4,8,16]:
    assert max(0,1-abs(k*(1/k)-1))==1
assert [max(0,1-abs(k*.25-1)) for k in [2,4,8]]==[.5,1,0]
report['analysisSymbolicIntegralsLimitsAndCounterexamples']=True

# Coset computations and multiplication conventions, independently enumerated.
def cosets(modulus,gen):
    H={k*gen%modulus for k in range(modulus)}
    sets={frozenset((a+h)%modulus for h in H) for a in range(modulus)}
    return H,sets
H,C=cosets(12,4)
assert H=={0,4,8}
assert C=={frozenset(s) for s in [{0,4,8},{1,5,9},{2,6,10},{3,7,11}]}
H,C=cosets(24,3)
assert H=={0,3,6,9,12,15,18,21} and len(C)==3
assert C=={frozenset(s) for s in [H,{1,4,7,10,13,16,19,22},{2,5,8,11,14,17,20,23}]}
left={1:2,2:5,5:4,4:1,3:3};right={1:1,2:3,3:2,4:4,5:5}
sigma={a:left[right[a]] for a in range(1,6)}
assert sigma=={1:2,2:3,3:5,4:1,5:4}
a=1;cycle=[]
while a not in cycle:cycle.append(a);a=sigma[a]
assert cycle==[1,2,3,5,4] and math.factorial(5)//len(cycle)==24
# D4 element (flip,rotation) means mu^flip rho^rotation.
def mul(a,b):
    f,r=a;g,s=b
    return ((f+g)%2,(((-1)**g)*r+s)%4)
H={(0,0),(1,0)}
leftsets=[{mul((0,k),h) for h in H} for k in range(4)]
rightsets=[{mul(h,(0,k)) for h in H} for k in range(4)]
assert leftsets==[{(0,0),(1,0)},{(0,1),(1,3)},{(0,2),(1,2)},{(0,3),(1,1)}]
assert rightsets==[{(0,0),(1,0)},{(0,1),(1,1)},{(0,2),(1,2)},{(0,3),(1,3)}]
order=[0,3,1,4,2,5]
table=[[0,3,1,4,2,5],[3,0,4,1,5,2],[1,4,2,5,3,0],[4,1,5,2,0,3],[2,5,3,0,4,1],[5,2,0,3,1,4]]
assert table==[[(a+b)%6 for b in order] for a in order]
assert [[(i+j)%3 for j in range(3)] for i in range(3)]==[[0,1,2],[1,2,0],[2,0,1]]
assert pow(45,72,73)==1
for modulus in range(2,80):
    units=[a for a in range(modulus) if math.gcd(a,modulus)==1]
    assert all(pow(a,len(units),modulus)==1 for a in units)
report['algebraCosetsDihedralPermutationTablesAndEulerChecks']=True
(root/'verification/content-check.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))

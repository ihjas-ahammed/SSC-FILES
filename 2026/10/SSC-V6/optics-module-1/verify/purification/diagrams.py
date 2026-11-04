"""Scientific figure repairs: explicit geometry and formula-sampled curves."""
import json
import math
from pathlib import Path

ROOT=Path(__file__).resolve().parents[2]
PATH=ROOT/'study-match/data/data.json'
d=json.loads(PATH.read_text())
sheets={sh['id']:sh for sec in d['sections'] for sh in sec['sheets']}

def segment(a,b,name='',role='lk',arrow=False,dash=0):
    return dict(type='arrow' if arrow else 'segment',p1=a,p2=b,name=name,role=role,dash=dash,width=1.8)
def label(p,text,name='',size=10):
    p=[p[0],max(12,min(170,p[1]))]
    if len(text)>25:p[0]=130
    return dict(type='label',coords=p,text=text,name=name or text,role='t',size=size,align='center')
def point(p,text):
    q=[p[0],p[1]-10] if p[1]>30 else [p[0]+14,p[1]+2]
    return [dict(type='point',coords=p,id=text,name=text,role='f',size=2),label(q,text)]
def poly(pts,name='',role='lk',dash=0):
    return dict(type='polyline',points=pts,name=name,role=role,dash=dash,width=1.7)
def figure(objects):
    return {'view':{'bbox':[0,180,260,0],'axis':False,'grid':False},
            'showAllLabels':True,'steps':[{'step':0,'name':'geometry','objects':objects}]}
def put(sheet,indices,fig,setup=False):
    for i in indices:
        c=sheets[sheet]['cards'][i]
        c['setup' if setup else 'art']=fig
        if not setup:c['verifiedDiagram']=True

# Fermat reflection: A and A′ are symmetric across y=75; A′,P,B
# are exactly collinear. Angle i equals r without relying on a sketch.
fig=figure([
    segment([15,75],[245,75],'mirror','ik'),
    segment([55,135],[55,15],'AAprime','gk',dash=2),
    segment([130,20],[130,153],'normal','gk',dash=2),
    segment([55,135],[130,75],'incident',arrow=True),
    segment([130,75],[205,135],'reflected',arrow=True),
    segment([55,15],[130,75],'extension','gk',dash=2),
    *point([55,135],'A'),*point([55,15],'A′'),*point([130,75],'P'),*point([205,135],'B'),
    label([130,164],'S'),label([143,25],'T'),label([17,62],'M'),label([242,62],'N'),
    {'type':'arc','center':[130,75],'r':24,'start':90,'end':141.34,'role':'lk','name':'i'},
    {'type':'arc','center':[130,75],'r':24,'start':38.66,'end':90,'role':'lk','name':'r'},
    label([118,106],'i'),label([144,106],'r')])
put('fermat-laws-reflection-refraction',[6],fig,setup=True)

fig=figure([
    {'type':'polygon','points':[[30,140],[130,140],[130,100],[30,100]],'role':'s ok','name':'glass'},
    segment([30,120],[130,120],'glasspath',arrow=True),label([80,155],'Glass: n = 1.5'),label([80,88],'d = 2 cm'),
    segment([30,45],[180,45],'vacuumpath',arrow=True),label([105,62],'Vacuum: 3 cm'),label([130,18],'Both paths take the same time')])
put('fermat-laws-reflection-refraction',[2,3],fig)

# Use the fully labelled textbook construction on the paraxial introduction.
fig=sheets['spherical-surface-refraction-reflection']['cards'][3]['setup']
fig['showAllLabels']=True
put('spherical-surface-refraction-reflection',[0,1],fig)

# Signed magnification: a converging thin lens at P. Object at 2f, real
# inverted image at 2f. Ray through the centre is exactly straight.
fig=figure([
    segment([12,90],[248,90],'axis','gk',dash=2),
    {'type':'curve','points':[[130,158],[112,90],[130,22],[148,90],[130,158]],'closed':True,'role':'s ok','name':'lens'},
    segment([30,90],[30,130],'object','ik',arrow=True),segment([230,90],[230,50],'image','ik',arrow=True),
    poly([[30,130],[130,130],[230,50]],'parallelray'),poly([[30,130],[130,90],[230,50]],'centralray'),
    label([18,137],'A'),label([30,78],'O'),label([130,78],'P'),label([230,105],'I'),label([242,44],'B'),
    label([15,112],'y'),label([243,70],'y′'),label([80,78],'F₁'),label([180,78],'F₂'),
    segment([30,20],[130,20],'u','ik'),segment([130,20],[230,20],'v','ik'),label([80,34],'u < 0'),label([180,34],'v > 0')])
put('newton-formula-magnification',[2,3],fig)

fig=figure([
    segment([15,90],[120,90],'axis1','gk'),segment([145,90],[247,90],'axis2','gk'),
    label([66,159],'In phase: Δθ = 0'),label([195,159],'Opposite: Δθ = π'),
    label([66,18],'a = a₁ + a₂'),label([195,18],'a = |a₁ - a₂|'),
    poly([[18+100*j/100,105+14*math.sin(4*math.pi*j/100)] for j in range(101)],'wave1'),
    poly([[18+100*j/100,65+14*math.sin(4*math.pi*j/100)] for j in range(101)],'wave2'),
    poly([[147+100*j/100,105+14*math.sin(4*math.pi*j/100)] for j in range(101)],'wave3'),
    poly([[147+100*j/100,65-14*math.sin(4*math.pi*j/100)] for j in range(101)],'wave4'),
    label([66,43],'Equal waves add'),label([195,43],'Equal waves cancel')])
put('optics-m2-superposition-sinusoidal-waves',[3,4],fig)

# Thin-film geometry: B=(70,125), D=(110,75), F=(150,125).
# B′=(70,25) makes B′,D,F collinear. K is projection of B on B′F;
# C is projection of F onto the upper reflected ray at B.
fig=figure([
    segment([15,125],[245,125],'film','ik'),segment([15,75],[245,75],'bottom','ik'),
    segment([10,175],[70,125],'AB',arrow=True),segment([70,125],[130,175],'upper',arrow=True),
    segment([70,125],[110,75],'BD',arrow=True),segment([110,75],[150,125],'DF',arrow=True),
    segment([150,125],[210,175],'lower',arrow=True),
    segment([70,125],[70,25],'Bprime','gk',dash=2),segment([70,25],[110,75],'Bprime','gk',dash=2),
    segment([70,125],[118.78,85.98],'BK','gk',dash=2),
    segment([150,125],[117.213,164.344],'BC','gk',dash=2),
    segment([24,75],[24,125],'d','ik'),label([15,100],'d'),
    label([56,137],'B'),label([114,62],'D'),label([151,137],'F'),label([70,14],'B′'),label([62,65],'J'),
    label([132,82],'K'),label([107,170],'C'),label([225,146],'n₁'),label([225,100],'n₂'),
    label([84,107],'θ′','thetaprime'),label([57,151],'θ','theta'),label([183,28],'Not to scale')])
put('optics-m2-division-amplitude-non-reflecting',[0,1],fig)
put('optics-m2-division-amplitude-non-reflecting',[2],fig,setup=True)

fig=figure([
    {'type':'polygon','points':[[15,118],[245,118],[245,70],[15,70]],'role':'s','name':'film'},
    segment([15,118],[245,118],'top','ik'),segment([15,70],[245,70],'bottom','ik'),
    segment([35,166],[80,118],'incident',arrow=True),segment([80,118],[125,166],'ray2',arrow=True),
    poly([[80,118],[106,70],[132,118],[177,166]],'ray5'),
    segment([222,70],[222,118],'d','ik'),label([235,94],'d'),
    label([44,145],'Air: n_a'),label([50,92],'Film: n_f'),label([63,48],'Glass: n_g'),
    label([126,175],'(2)'),label([180,175],'(5)'),
    label([151,23],'At normal incidence: d = λ/(4n_f)')])
put('optics-m2-division-amplitude-non-reflecting',[3,4],fig)

# Michelson: compensation belongs in an arm, not after recombination.
fig=figure([
    segment([15,90],[190,90],'horizontal','lk'),segment([110,145],[110,20],'vertical','lk'),
    segment([91,71],[129,109],'G1','ik'),segment([88,145],[132,145],'M1','ik'),segment([190,68],[190,112],'M2','ik'),
    segment([143,77],[169,103],'G2','ik'),segment([88,170],[132,170],'M2prime','gk',dash=2),
    segment([24,90],[75,90],'source',arrow=True),segment([110,105],[110,139],'toM1',arrow=True),
    segment([128,90],[183,90],'toM2',arrow=True),segment([110,60],[110,32],'eye',arrow=True),
    segment([140,145],[140,170],'d','ik'),
    label([18,106],'S'),label([81,62],'G₁'),label([163,61],'G₂'),label([72,145],'M₁'),label([211,90],'M₂'),
    label([162,169],'M₂′'),label([152,156],'d'),label([110,10],'Eye'),label([34,35],'Schematic'),label([145,20],'G₂ balances glass paths')])
put('optics-m2-newton-rings-michelson',[5,6],fig)

# The plots below are sampled from their equations, with explicit normalisation.
def plot(fn, lo, hi, ymax, xlabel, ylabel, xticks, yticks, extras=()):
    objects=[segment([25,28],[246,28],'xaxis','ik'),segment([25,28],[25,153],'yaxis','ik')]
    pts=[]
    for j in range(801):
        x=lo+(hi-lo)*j/800
        pts.append([25+215*j/800,28+115*max(0,min(ymax,fn(x)))/ymax])
    objects += [poly(pts,'curve'), label([233,12],xlabel),label([35,168],ylabel)]
    for x,t in xticks:objects.append(label([25+215*(x-lo)/(hi-lo),19],t,size=9))
    for y,t in yticks:objects.append(label([13,28+115*y/ymax],t,size=9))
    objects.extend(extras)
    return figure(objects)

def sinc(x):return 1.0 if abs(x)<1e-10 else math.sin(x)/x
fig=plot(lambda x:sinc(x)**2,-3*math.pi,3*math.pi,1,'β','I/I₀',[(0,'0'),(-math.pi,'-π'),(math.pi,'π'),(2*math.pi,'2π')],[(1,'1')],
    [label([181,89],'First side peak:'),label([181,73],'β ≈ 4.493'),label([181,57],'I/I₀ ≈ 0.0472')])
put('optics-m3-single-slit-fraunhofer',[5],fig)
fig=plot(lambda x:sinc(x)**2*math.cos(4*x)**2,-2*math.pi,2*math.pi,1,'β','I/(4I₀)',[(-math.pi,'-π'),(0,'0'),(math.pi,'π')],[(1,'1')],
    [label([74,67],'missing'),label([189,67],'missing')])
put('optics-m3-two-slit-fraunhofer',[3,4,5],fig)
fig=plot(lambda x:25 if abs(math.sin(x))<1e-10 else (math.sin(5*x)/math.sin(x))**2,
    -math.pi/2,3*math.pi/2,25,'γ','Interference factor',[(0,'0'),(math.pi,'π')],[(25,'25')],
    [label([175,160],'N = 5'),label([158,93],'4 zeros between peaks')])
put('optics-m3-n-slit-grating',[3],fig)

# Brewster: equal and complementary ray angles, electric dots for s polarisation.
fig=figure([
    segment([15,85],[245,85],'interface','ik'),segment([120,25],[120,164],'normal','gk',dash=2),
    segment([38,140],[120,85],'thetap',arrow=True),segment([120,85],[202,140],'refl',arrow=True),
    segment([120,85],[158,28],'thetar',arrow=True),
    label([38,165],'Unpolarised'),label([222,154],'s only'),label([40,102],'n₁'),label([40,59],'n₂'),
    label([103,124],'θ_p'),label([136,124],'θ_p'),label([131,53],'θ_r'),
    poly([[138,97],[146,85],[128,73]],'rightangle','ik'),label([168,84],'90°'),
    {'type':'point','coords':[161,112],'role':'f','size':2,'name':'s'},
    {'type':'point','coords':[178,124],'role':'f','size':2,'name':'s'},
    label([100,14],'Dots: electric field out of this plane')])
put('optics-m4-production-linearly-polarised',[2,3],fig)
put('optics-m4-production-linearly-polarised',[4],fig,setup=True)

# Double refraction normal incidence: the ordinary ray remains undeviated;
# the extraordinary ray walks off. Use dots and bars, not parallel arrows.
fig=figure([
    {'type':'polygon','points':[[75,145],[205,145],[205,35],[75,35]],'role':'s ok','name':'calcite'},
    segment([18,100],[75,100],'incident',arrow=True),segment([75,100],[240,100],'ordinary',arrow=True),
    poly([[75,100],[205,60],[240,60]],'extraordinary'),
    segment([103,43],[172,132],'opticaxis','gk',dash=2),
    label([131,160],'Calcite'),label([222,115],'o-ray'),label([223,45],'e-ray'),
    {'type':'point','coords':[188,100],'role':'f','size':2,'name':'ordinary'},
    segment([164,63],[169,78],'vibration','ik'),label([49,25],'Normal incidence; optic axis tilted')])
put('optics-m4-double-refraction-huygens',[0,1],fig)

# Huygens normal-incidence construction for a negative crystal, optic axis
# tilted: identical spheres/ellipsoids begin together at B and D. The support
# point on each ellipsoid is displaced from its normal, showing walk-off.
fig=figure([
    segment([15,135],[245,135],'surface','ik'),segment([65,170],[65,135],'incident1',arrow=True),segment([165,170],[165,135],'incident2',arrow=True),
    {'type':'circle','center':[65,135],'r':30,'role':'gk','name':'sphere'},
    {'type':'circle','center':[165,135],'r':30,'role':'gk','name':'sphere'},
    # Parametric ellipses rotated -45 degrees: semiaxes 30 and 45.
    poly([[65+(30*math.cos(t)+45*math.sin(t))/math.sqrt(2),135+(-30*math.cos(t)+45*math.sin(t))/math.sqrt(2)] for t in [2*math.pi*j/160 for j in range(161)]],'ellipsoid'),
    poly([[165+(30*math.cos(t)+45*math.sin(t))/math.sqrt(2),135+(-30*math.cos(t)+45*math.sin(t))/math.sqrt(2)] for t in [2*math.pi*j/160 for j in range(161)]],'ellipsoid2'),
    segment([25,105],[220,105],'OOprime','gk',dash=2),segment([25,96.76],[220,96.76],'EEprime','lk'),
    segment([65,135],[65,105],'BO','ik',arrow=True),segment([65,135],[50.29,96.76],'BE','lk',arrow=True),
    segment([165,135],[165,105],'DO','ik',arrow=True),segment([165,135],[150.29,96.76],'DE','lk',arrow=True),
    label([65,150],'B'),label([165,150],'D'),label([236,107],'OO′'),label([236,91],'EE′'),
    label([77,108],'O'),label([43,86],'E'),segment([95,60],[125,30],'opticaxis','gk',dash=2),label([160,40],'Optic axis'),
    label([130,16],'BO: normal ray; BE: energy ray')])
put('optics-m4-double-refraction-huygens',[5],fig)

# Labels inside the existing reviewed step-by-step diagrams are part of the
# construction. Keep them visible even when a caption uses equivalent notation.
for sec in d['sections'][:8]:
    for sh in sec['sheets']:
        for c in sh['cards']:
            if c.get('type')=='derivation' and c.get('setup'):
                c['setup']['showAllLabels']=True

PATH.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Applied explicit figure repairs and equation-based plot samples.')

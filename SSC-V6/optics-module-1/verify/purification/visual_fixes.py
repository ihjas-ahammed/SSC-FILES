"""Corrections made after inspecting the rendered construction figures."""
import json,math
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2];P=ROOT/'study-match/data/data.json';d=json.loads(P.read_text())
sh={h['id']:h for s in d['sections'] for h in s['sheets']}
def seg(a,b,n,role='lk',arrow=False,dash=0):return dict(type='arrow' if arrow else 'segment',p1=a,p2=b,name=n,role=role,dash=dash,width=1.7)
def txt(p,t,n='',size=10):return dict(type='label',coords=p,text=t,name=n or t,size=size,role='t',align='center')
def poly(p,n,role='lk',dash=0):return dict(type='polyline',points=p,name=n,role=role,dash=dash,width=1.7)
def fig(o):return {'view':{'bbox':[0,180,260,0],'axis':False,'grid':False},'showAllLabels':True,'steps':[{'step':0,'name':'geometry','objects':o}]}
def put(s,i,f):sh[s]['cards'][i]['setup']=f

# A, the centre C, and B lie on exactly one line: this ray meets the
# spherical surface normally, so it is not refracted.
put('newton-formula-magnification',4,fig([
 seg([15,90],[245,90],'axis','gk',dash=2),
 poly([[150+50*math.cos(math.radians(t)),90+50*math.sin(math.radians(t))] for t in range(120,241)],'surf'),
 seg([30,90],[30,130],'obj','ik',True),seg([230,90],[230,63.3333333333],'img','ik',True),
 seg([30,130],[230,63.3333333333],'rayC',arrow=True),
 txt([21,142],'A'),txt([15,112],'y'),txt([30,78],'O'),txt([100,78],'P'),txt([150,78],'C'),txt([230,103],'I'),txt([238,51],'B'),txt([237,76],'−y′'),
 seg([30,25],[100,25],'u','ik'),seg([100,25],[230,25],'v','ik'),seg([100,52],[150,52],'R','ik'),
 txt([65,15],'−u'),txt([167,15],'v'),txt([125,42],'R'),txt([59,159],'n₁'),txt([189,159],'n₂')]))

# Keep the two equal mirror angles readable rather than on top of the ray.
for st in sh['spherical-surface-refraction-reflection']['cards'][6]['setup']['steps']:
 for o in st['objects']:
  if o.get('type')=='label' and o.get('text')=='φ₁=φ₂':o.update(coords=[160,154],text='φ₁ = φ₂',size=10)

# A dimensionless intensity axis must have dimensionless tick labels.
f=fig([seg([25,30],[245,30],'axes','ik'),seg([130,30],[130,150],'axes','ik'),
 poly([[25+215*j/600,30+110*math.cos((-2*math.pi+4*math.pi*j/600)/2)**2] for j in range(601)],'curve'),
 txt([145,163],'I/I₀','axes'),txt([117,140],'4','Imax'),txt([238,17],'δ','delta'),
 txt([76,19],'−π','Imin'),txt([184,19],'π','Imin'),txt([130,19],'0','delta')])
put('optics-m2-interference-light-waves',5,f)

put('optics-m2-white-light-lloyd-stokes',2,fig([
 seg([35,110],[35,70],'d','ik'),seg([225,25],[225,158],'screen','ik'),
 seg([35,110],[225,125],'S1',arrow=True),seg([35,70],[225,125],'S2',arrow=True),
 seg([35,90],[225,90],'D','gk',dash=2),
 {'type':'polygon','points':[[75,139],[87,139],[87,94],[75,94]],'role':'s ok','name':'plate'},
 seg([210,90],[210,125],'Delta','ik'),txt([24,120],'S₁'),txt([24,57],'S₂'),txt([22,90],'d'),
 txt([81,153],'t, n','t'),txt([237,90],'O'),txt([237,135],'O′ = P','Oprime'),txt([197,109],'Δ','Delta'),txt([130,30],'D'),
 dict(type='point',coords=[225,90],role='f',name='O'),dict(type='point',coords=[225,125],role='f',name='Oprime',id='P')]))

# Two finite-width slits send parallel rays to the lens. The lens brings
# one common direction to one point in its focal plane.
put('optics-m3-two-slit-fraunhofer',2,fig([
 seg([20,90],[245,90],'axis','gk',dash=2),seg([60,115],[60,135],'slit1','ik'),seg([60,45],[60,65],'slit2','ik'),
 seg([30,55],[30,125],'d','ik'),txt([20,90],'d'),txt([49,142],'A₁'),txt([49,35],'B₁'),
 {'type':'curve','points':[[145,165],[130,90],[145,15],[160,90],[145,165]],'closed':True,'role':'s ok','name':'lens'},
 poly([[60,125],[145,150],[230,115]],'E1'),poly([[60,55],[145,80],[230,115]],'E2'),
 seg([230,25],[230,160],'screen','ik'),txt([242,119],'P'),txt([242,84],'O'),txt([100,72],'θ','gamma'),txt([180,169],'Φ₁ = 2γ','Phi1'),
 txt([75,154],'width b'),txt([193,20],'f')]))

put('optics-m3-n-slit-grating',2,fig([
 *[seg([52,y-4],[52,y+4],'Nslits','ik') for y in [50,70,90,110,130]],
 *[seg([52,y],[230,130],'Nslits') for y in [50,70,90,110,130]],
 seg([52,90],[230,90],'axis','gk',dash=2),seg([230,22],[230,160],'screen','ik'),
 seg([52,90],[230,147],'deltatheta','gk',dash=2),
 txt([24,100],'N slits','Nslits'),txt([24,68],'d','Nslits'),txt([24,46],'b','Nslits'),
 txt([143,107],'θ_m','thetam'),txt([164,156],'θ_m + Δθ_m','deltatheta'),txt([242,132],'P','screen')]))

# A Rayleigh comparison uses actual sinc-squared peak profiles, not arcs.
def sinc(x):return 1 if abs(x)<1e-12 else math.sin(x)/x
def points(fn):
 return [[25+215*j/600,30+105*fn(-2*math.pi+5*math.pi*j/600)] for j in range(601)]
p1=25+215*2/5;p2=25+215*3/5
put('optics-m3-n-slit-grating',8,fig([
 seg([25,30],[245,30],'theta','ik'),seg([25,30],[25,150],'axes','ik'),
 poly(points(lambda x:sinc(x)**2),'peak1'),poly(points(lambda x:sinc(x-math.pi)**2),'peak2','ik',2),
 poly(points(lambda x:sinc(x)**2+sinc(x-math.pi)**2),'sum','gk'),
 seg([p2,30],[p2,135],'min1','gk',dash=2),txt([p1,153],'λ','peak1'),txt([p2+10,165],'λ + Δλ','peak2'),
 txt([39,165],'I/I₀'),txt([237,17],'θ','theta'),txt([166,15],'Peak of one at zero of the other','min1',9)]))

put('optics-m3-fresnel-zone-plate',2,fig([
 seg([65,20],[65,160],'wavefront','ik'),
 {'type':'ellipse','center':[65,90],'rx':15,'ry':55,'role':'s ok','name':'An'},
 {'type':'ellipse','center':[65,90],'rx':10,'ry':39,'role':'lk','name':'An'},
 seg([65,90],[225,90],'d','ik'),seg([65,145],[225,90],'QnP'),seg([65,90],[65,145],'rn','ik'),
 txt([54,80],'O','d'),txt([48,150],'Q_n','rn'),txt([48,118],'r_n','rn'),txt([239,91],'P'),
 txt([144,80],'d'),txt([157,132],'d + nλ/2','QnP'),txt([130,15],'A_n ≈ πλd','An')]))

# Avoid an undeclared circular output or a premature answer on the wave-plate
# phase calculation; it is the relative delay which is being derived.
x=sh['optics-m4-wave-plates']['cards'][2]
for part in x['setup']['steps']:
 part['objects']=[o for o in part['objects'] if o['type']!='circle' and not (o['type']=='label' and str(o.get('text','')).startswith('QWP:'))]
for part in sh['optics-m4-analysis-polarised-light']['cards'][4]['setup']['steps']:
 for o in part['objects']:
  if o.get('type')=='label' and o.get('name')=='nLnR':o.update(text='n_L ≠ n_R',coords=[130,18],align='center')

# The compensation caption belongs in the prose; leaving it beside Eye caused
# text overlap when scaled to a phone-sized diagram.
for i in [5,6,7]:
 x=sh['optics-m2-newton-rings-michelson']['cards'][i]
 f=x['setup' if x['type']=='derivation' else 'art']
 for part in f['steps']:part['objects']=[o for o in part['objects'] if o.get('text')!='G₂ balances glass paths']

# These plot annotations can be read without crossing a peak.
for part in sh['optics-m3-single-slit-fraunhofer']['cards'][5]['art']['steps']:
 for o in part['objects']:
  if o.get('text')=='First side peak:':o.update(coords=[203,140],size=9)
  elif o.get('text')=='β ≈ 4.493':o.update(coords=[203,125],size=9)
  elif o.get('text')=='I/I₀ ≈ 0.0472':o.update(coords=[203,110],size=9)
for part in sh['optics-m3-n-slit-grating']['cards'][3]['art']['steps']:
 for o in part['objects']:
  if o.get('text')=='Interference factor':o.update(text='F_N(γ)',coords=[45,168])
  elif o.get('text')=='4 zeros between peaks':o.update(text='N = 5',coords=[205,163])
  elif o.get('text')=='N = 5':o.update(text='',size=9)

sh['optics-m2-white-light-lloyd-stokes']['cards'][5]['picture']='At the boundary, incident amplitude a splits into ar₁ and at₁. Reversing these two outgoing waves must reconstruct a on the incident path. The extra outgoing direction in medium n₂ must cancel; these two requirements give Stokes’ relations.'
P.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Applied corrections from visual inspection.')

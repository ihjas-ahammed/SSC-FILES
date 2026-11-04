"""Remaining scientific diagrams and scalar numerical corrections."""
import json, math
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
P=ROOT/'study-match/data/data.json';d=json.loads(P.read_text())
sh={s['id']:s for sec in d['sections'] for s in sec['sheets']}
def seg(a,b,name,role='lk',arrow=False,dash=0):return dict(type='arrow' if arrow else 'segment',p1=a,p2=b,name=name,role=role,dash=dash)
def txt(p,text,name='',size=10):return dict(type='label',coords=p,text=text,name=name or text,role='t',size=size,align='center')
def curve(pts,name,role='lk'):return dict(type='polyline',points=pts,name=name,role=role)
def fig(objs):return dict(view=dict(bbox=[0,180,260,0],axis=False,grid=False),showAllLabels=True,steps=[dict(step=0,name='geometry',objects=objs)])
def put(s,ids,f):
 for i in ids:sh[s]['cards'][i].update(art=f,verifiedDiagram=True)

# Reflect the one real slit S about each mirror. The common observation point
# receives two specular rays. The reflection points lie on their own half mirrors.
S=[40,150];M=[130,90];Pobs=[240,160]
def reflect(S,slope):
 dx=S[0]-M[0];dy=S[1]-M[1];t=(dx+slope*dy)/(1+slope*slope)
 return [M[0]+2*t-dx,M[1]+2*slope*t-dy]
def cross(I,slope):
 t=(90+slope*(I[0]-130)-I[1])/((Pobs[1]-I[1])-slope*(Pobs[0]-I[0]))
 return [I[0]+t*(Pobs[0]-I[0]),I[1]+t*(Pobs[1]-I[1])]
v=math.tan(math.radians(4));I1=reflect(S,-v);I2=reflect(S,v);Q1=cross(I1,-v);Q2=cross(I2,v)
f=fig([seg([70,90+60*v],M,'mirror1','ik'),seg(M,[190,90+60*v],'mirror2','ik'),
 seg(S,Q1,'incident1',arrow=True),seg(S,Q2,'incident2',arrow=True),seg(Q1,Pobs,'reflected1',arrow=True),seg(Q2,Pobs,'reflected2',arrow=True),
 seg(I1,Q1,'virtual1','gk',dash=2),seg(I2,Q2,'virtual2','gk',dash=2),seg(S,M,'R','gk',dash=2),seg(I1,I2,'d','ik'),
 txt([40,163],'S'),txt([130,78],'M'),txt([235,171],'P'),txt([19,48],'S₁'),txt([51,13],'S₂'),txt([30,26],'d'),
 txt([76,122],'R'),txt([82,104],'M₁'),txt([180,105],'M₂'),txt([159,89],'θ'),txt([151,15],'Tilt exaggerated for clarity')])
put('optics-m2-fresnel-two-mirror-biprism',[0,1],f)
sh['optics-m2-fresnel-two-mirror-biprism']['cards'][0]['picture']='The real slit S is above the two plane mirrors M₁ and M₂, which meet at M. Dashed backward extensions locate virtual slits S₁ and S₂. Two reflected paths reach the same observation point P. R = MS and d = S₁S₂; the small mirror tilt is exaggerated here.'

f=fig([seg([70,35],[190,35],'sourceaxis','gk'),seg([130,40],[130,160],'central','ik'),
 txt([80,21],'S₁'),txt([180,21],'S₂'),txt([130,168],'A: Δ = 0'),txt([208,150],'Nodes'),txt([218,130],'Δ = λ/2'),
 *[dict(type='point',coords=p,role='f',size=2,name=n) for p,n in [([80,35],'S1'),([180,35],'S2')]],
 *[curve([[130+sign*a*math.sqrt(1+(120*j/200)**2/(2500-a*a)),35+120*j/200] for j in range(201)],'node') for a in [10,30] for sign in [-1,1]]])
put('optics-m2-division-of-wavefront',[2,3],f)
sh['optics-m2-division-of-wavefront']['cards'][2]['picture']='S₁ and S₂ are the two sources. The middle straight line has zero path difference and maximum amplitude 2a. The curved lines mark nodes; the inner pair has path difference ±λ/2 and zero amplitude under the equal-amplitude approximation.'

f=fig([seg([75,38],[75,142],'grating','ik'),seg([15,90],[75,90],'incident',arrow=True),
 *[seg([75,90],[215,y],n,arrow=True) for y,n in [(150,'redplus'),(123,'violetplus'),(90,'zero'),(57,'violetminus'),(30,'redminus')]],
 txt([75,159],'Grating'),txt([130,174],'Normal incidence'),txt([235,152],'red'),txt([235,125],'violet'),txt([235,90],'m = 0'),
 txt([235,56],'violet'),txt([235,29],'red'),txt([154,146],'m = +1'),txt([154,34],'m = -1'),txt([130,13],'Each nonzero order contains a spectrum')])
put('optics-m3-n-slit-grating',[4,5],f)
sh['optics-m3-n-slit-grating']['cards'][4]['picture']='The central order m = 0 keeps the source colour. Both the +1 and -1 orders contain a spectrum: on each side, longer-wavelength red lies farther from the centre than shorter-wavelength violet. This is an angular schematic without a focusing lens.'

# Composite Simpson integration supplies numerical Fresnel curves; the artwork
# is a plot of the stated equations, rather than an illustrative guessed curve.
def fresnel(t):
 n=max(20,int(abs(t)*300));n+=n%2;h=t/n
 def integrate(fn):
  return h/3*(fn(0)+fn(t)+4*sum(fn(h*j) for j in range(1,n,2))+2*sum(fn(h*j) for j in range(2,n,2)))
 return integrate(lambda q:math.cos(math.pi*q*q/2)),integrate(lambda q:math.sin(math.pi*q*q/2))
pts=[]
for j in range(801):
 t=-4+8*j/800;C,T=fresnel(t);pts.append([130+105*C,85+100*T])
Cp,Sp=fresnel(-1)
f=fig([seg([20,85],[240,85],'Caxis','gk'),seg([130,12],[130,166],'Saxis','gk'),curve(pts,'spiral'),
 seg([130+105*Cp,85+100*Sp],[182.5,135],'chord','ik'),
 txt([230,72],'C(τ)'),txt([145,164],'S(τ)'),txt([210,146],'C: (½,½)'),txt([56,18],'C′: (-½,-½)'),
 txt([42,35],'P(v₀)'),txt([162,73],'PC = amplitude'),
 dict(type='point',coords=[182.5,135],role='f',size=2,name='C'),dict(type='point',coords=[77.5,35],role='f',size=2,name='Cprime')])
put('optics-m3-diffraction-straight-edge',[0,1],f)
sh['optics-m3-diffraction-straight-edge']['cards'][0]['picture']='C(τ) is horizontal and S(τ) vertical. The spiral approaches the eyes C = (½,½) and C′ = (-½,-½). The straight chord from P(v₀) to C represents the wave admitted by a straight edge; its squared length gives relative intensity after normalisation.'
pts=[]
for j in range(701):
 x=-3+7*j/700;C,T=fresnel(x);ratio=.5*((.5+C)**2+(.5+T)**2)
 pts.append([30+205*j/700,30+100*ratio/1.5])
zero=30+205*3/7
f=fig([seg([30,30],[240,30],'xaxis','ik'),seg([30,30],[30,150],'yaxis','ik'),curve(pts,'intensity'),
 seg([zero,30],[zero,145],'shadowboundary','gk',dash=2),
 txt([23,164],'I/I₀'),txt([195,14],'s = -v₀ = √(2/(λd)) y'),txt([zero,20],'0'),
 txt([16,97],'1'),txt([16,47],'¼'),txt([183,149],'Peak ≈ 1.37'),txt([55,45],'shadow'),txt([176,45],'lit side')])
put('optics-m3-diffraction-straight-edge',[5],f)

# The plotted double-slit minimum count and the exact grating threshold must
# not copy rounded textbook arithmetic as a strict minimum.
x=sh['optics-m3-n-slit-grating']['cards'][9]
x['tex']=r'd=\frac{2.54}{15000}\,\mathrm{cm}\approx1.6933\times10^{-4}\,\mathrm{cm};\quad N_{\min}=\left\lceil\frac{589}{0.6}\right\rceil=982'
x['body']='For 15,000 lines/inch, d = 2.54/15000 cm. Second-order red (700 nm) is at about 55.77°, beyond third-order violet (400 nm) at about 45.13°, so these order ranges overlap. For the sodium pair near 589 nm separated by 0.6 nm in first order, R = N requires N ≥ 981.67, hence at least 982 illuminated lines under the ideal Rayleigh criterion. About 1000 lines is the textbook’s useful rounded figure.'

# Keep automatic term definitions consistent with the repaired text.
for g in d['glossary']:
 if g['id']=='refraction':g['definition']='Refraction is the change in light propagation when it crosses a boundary into a different medium. The ray generally bends, but at normal incidence its direction can stay unchanged.'
 if g['id']=='optics-m2-non-reflecting-film':g['definition']='An anti-reflection coating reduces glare by interference. An ideal quarter-wave layer cancels reflection at its design wavelength and normal incidence when n_f² = n_a n_g.'

P.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Repaired mirror geometry, nodal curves, grating spectra, and numerical Fresnel plots.')

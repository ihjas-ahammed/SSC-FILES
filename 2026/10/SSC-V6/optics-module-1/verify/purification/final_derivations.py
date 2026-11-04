"""Finish the focal-distance and wave-plate textbook algebra."""
import copy,json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2];P=ROOT/'study-match/data/data.json';d=json.loads(P.read_text())
sh={h['id']:h for s in d['sections'] for h in s['sheets']}
def step(tex,note,phase=None,ask=None):
 o={'tex':tex,'note':note,'move':{'type':'rearrange'}}
 if phase:o['phase']=phase
 if ask:o['ask']=ask
 return o
def ask(q,opts,a,why):return {'q':q,'options':opts,'answer':a,'why':why}
x=sh['thin-lens-foci-focal-length']['cards'][7]
x.clear();x.update(type='derivation',label='06 · §4.5 Derivation',title='The two focal lengths when the surrounding media differ',
 legend='A thin lens has index n₂, with medium n₁ on the left and n₃ on the right. R₁ and R₂ are signed surface radii, positive when their centre lies to the right. All axial distances start at the lens centre P and are positive rightward. v′ is the first surface’s intermediate image distance. The first focus has u = f₁ when output is parallel; the second focus has v = f₂ for parallel input. Define Φ as the combined surface power; assume Φ ≠ 0.',
 setup={'view':{'bbox':[0,180,260,0],'axis':False,'grid':False},'showAllLabels':True,'steps':[{'step':0,'name':'lens','objects':[
  {'type':'segment','p1':[15,90],'p2':[245,90],'role':'gk','name':'axis'},
  {'type':'curve','points':[[130,155],[109,90],[130,25],[151,90],[130,155]],'closed':True,'role':'s ok','name':'lens'},
  {'type':'label','coords':[45,145],'text':'n₁','role':'t','name':'n1','size':12},
  {'type':'label','coords':[124,125],'text':'n₂','role':'t','name':'n2','size':12},
  {'type':'label','coords':[209,145],'text':'n₃','role':'t','name':'n3','size':12},
  {'type':'label','coords':[61,78],'text':'F₁','role':'t','name':'F1','size':11},
  {'type':'label','coords':[197,78],'text':'F₂','role':'t','name':'F2','size':11},
  {'type':'label','coords':[126,78],'text':'P','role':'t','name':'P','size':11},
  {'type':'arrow','p1':[20,130],'p2':[130,130],'role':'lk','name':'parallel'},
  {'type':'arrow','p1':[130,130],'p2':[230,70],'role':'lk','name':'secondfocus'},
  {'type':'label','coords':[130,15],'text':'Focal distances need not have equal magnitudes','role':'t','name':'foci','size':9,'align':'center'}]}]},
 phases=[{'name':'Two surfaces','why':'apply the spherical-surface equation at each interface'},
         {'name':'First focus','why':'make the emergent rays parallel'},
         {'name':'Second focus','why':'make the incident rays parallel'},
         {'name':'Compare foci','why':'divide the two signed focal lengths'}],
 steps=[
  {'phase':'Two surfaces','tex':r'\frac{n_2}{v^{\prime}}-\frac{n_1}{u}=\frac{n_2-n_1}{R_1}','note':'The first surface refracts from n₁ into n₂.'},
  step(r'\frac{n_3}{v}-\frac{n_2}{v^{\prime}}=\frac{n_3-n_2}{R_2}','The first image acts as the second surface’s object; thinness lets both distances use P.'),
  step(r'\frac{n_3}{v}-\frac{n_1}{u}=\frac{n_2-n_1}{R_1}+\frac{n_3-n_2}{R_2}','Add the equations; the two n₂/v′ terms cancel.',ask=ask('Which term disappears when the equations are added?',['The intermediate n₂/v′ term','Both radii','The final image distance','Every refractive index'],0,'The intermediate-image terms have equal magnitudes and opposite signs.')),
  step(r'\Phi=\frac{n_2-n_1}{R_1}+\frac{n_3-n_2}{R_2}','Give the fixed right-hand side the symbol Φ.'),
  step(r'-\frac{n_1}{f_1}=\Phi','For parallel output take 1/v = 0 and u = f₁.','First focus',ask=ask('Which reciprocal distance vanishes for parallel output?',[r'\(1/v\)',r'\(1/u\)',r'\(1/R_1\)',r'\(1/R_2\)'],0,'Parallel emerging rays meet only at infinity, so v tends to infinity.')),
  step(r'f_1=-\frac{n_1}{\Phi}','Solve for the signed first focal length.'),
  step(r'\frac{n_3}{f_2}=\Phi','For parallel input take 1/u = 0 and v = f₂.','Second focus',ask=ask('Which reciprocal distance vanishes for parallel input?',[r'\(1/v\)',r'\(1/u\)',r'\(1/f_2\)',r'\(1/\Phi\)'],1,'A source effectively at infinity gives parallel incident rays.')),
  step(r'f_2=\frac{n_3}{\Phi}','Solve for the signed second focal length.'),
  step(r'\frac{f_2}{f_1}=-\frac{n_3}{n_1}','Divide the two focal lengths; Φ cancels.','Compare foci'),
  step(r'f_2=-f_1\quad(n_3=n_1)','Equal surrounding indices give equal magnitudes and opposite signs.',ask=ask('When n₃ = n₁, what is f₂/f₁?',['−1','+1','0','2'],0,'The ratio is -n₃/n₁, so equal indices give -1.'))])

x=sh['optics-m4-wave-plates']['cards'][2]
if not any(p['name']=='Half wave' for p in x['phases']):
 x['title']='Phase delay and thickness of quarter- and half-wave plates'
 x['legend']+=' The following extension applies the same phase calculation to a half-wave plate and explains the output field for a 45° linear input. The two arrows represent perpendicular field components travelling in the same direction, rather than spatially separated beams.'
 x['phases'].append({'name':'Half wave','why':'set the delay to an odd multiple of π and solve for thickness'})
 x['steps'].extend([
  step(r'(2m+1)\pi=\frac{2\pi}{\lambda_0}(n_o-n_e)d','For a half-wave plate in this negative crystal, set the same phase delay to an odd multiple of π.','Half wave'),
  step(r'd_{\rm HWP}=\frac{(2m+1)\lambda_0}{2(n_o-n_e)}','Cancel π and solve for d; for a positive crystal use |n_o - n_e|.'),
  step(r'E_x=-\frac{E_0}{\sqrt2}\cos\omega t','For 45° linear input, the two components start equal; an odd-π delay reverses the x component.'),
  step(r'E_y=\frac{E_0}{\sqrt2}\cos\omega t','The y component keeps its sign, so the two components are still linear but now point along the other diagonal.'),
  step(r'\frac{E_y}{E_x}=-1','The output is perpendicular to the original equal-sign diagonal, explaining the 90° change for this special input.')])

# The finite two-surface example needs the object and external indices stated
# before the reader is asked to understand its intermediate image.
x=sh['spherical-surface-refraction-reflection']['cards'][7]
x['body']='A glass body (index 1.5) is surrounded by air (index 1). Its first surface has R₁ = +15 cm; an object is 40 cm to its left, so u₁ = -40 cm. The first refraction gives v₁ = +180 cm. The second surface is 30 cm to the right, so that intermediate image is 180 - 30 = 150 cm beyond it: a virtual object with u₂ = +150 cm. At this surface n₁ = 1.5, n₂ = 1 and R₂ = -25 cm. The final v₂ = +33⅓ cm is measured from the second surface and denotes a real image.'

P.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Completed the two-focus and half-wave-plate derivations.')

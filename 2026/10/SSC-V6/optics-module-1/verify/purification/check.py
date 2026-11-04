"""Verify scientific values, stable progress IDs, and packaged reviewed data."""
import importlib.util,json,math,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
d=json.loads((ROOT/'study-match/data/data.json').read_text())
b=json.loads((ROOT/'verify/purification/data.before.json').read_text())
sh={h['id']:h for sec in d['sections'] for h in sec['sheets']}
def ids(data):
 out=[]
 for sec in data['sections']:
  for h in sec['sheets']:
   legacy=0
   for c in h['cards']:
    tail='extra-'+c['uid'] if c.get('uid') else 'intro-'+c['term'] if c['type']=='intuition' else str(legacy)
    if not c.get('uid') and c['type']!='intuition':legacy+=1
    out.append(h['id']+'-'+tail)
 return out
before=ids(b);after=ids(d)
assert len(after)==len(set(after))
assert all(x in after for x in before)
assert [x for x in after if x in set(before)]==before
assert d['sections'][8:]==b['sections'][8:], 'Exam-practice sheets must remain unchanged.'

# Independently calculate every authored syllabus numeric quiz answer.
values={
 ('fermat-laws-reflection-refraction',12):1.5*4,
 ('spherical-surface-refraction-reflection',10):1/(2/(-60)-1/(-80)),
 ('thin-lens-foci-focal-length',11):1/((1.5-1)*(1/20-1/(-20))),
 ('newton-formula-magnification',8):-10**2/(-20),
 ('newton-formula-magnification',9):40/(-40),
 ('optics-m2-superposition-sinusoidal-waves',8):math.sqrt(3**2+4**2+2*3*4*math.cos(math.pi/2)),
 ('optics-m2-division-of-wavefront',8):math.cos(math.pi/3)**2,
 ('optics-m2-interference-light-waves',10):5e-4*500/.5,
 ('optics-m2-fresnel-two-mirror-biprism',8):math.sqrt(.04*.01),
 ('optics-m2-white-light-lloyd-stokes',11):5*.5/(1.5-1),
 ('optics-m2-division-amplitude-non-reflecting',10):552/(4*1.38),
 ('optics-m2-newton-rings-michelson',10):2*.29*1e6/1000,
 ('optics-m3-single-slit-fraunhofer',10):500e-9/(.1e-3)*1000,
 ('optics-m3-two-slit-fraunhofer',9):3,
 ('optics-m3-two-slit-fraunhofer',10):len([n for n in range(-10,11) if abs(n)<4]),
 ('optics-m3-n-slit-grating',12):2*1500,
 ('optics-m3-n-slit-grating',13):math.floor(1.759e-4/6e-5),
 ('optics-m3-fresnel-zone-plate',12):1e-3**2/500e-9,
 ('optics-m3-diffraction-straight-edge',9):.5,
 ('optics-m3-diffraction-straight-edge',10):-1*(-1.22),
 ('optics-m4-polarisation-introduction',9):3**2,
 ('optics-m4-production-linearly-polarised',11):math.degrees(math.atan(math.sqrt(3))),
 ('optics-m4-malus-law-polariser-analyser',10):100*math.cos(math.pi/3)**2,
 ('optics-m4-double-refraction-huygens',10):math.sqrt(1.658**2*math.cos(0)**2+1.486**2*math.sin(0)**2),
 ('optics-m4-wave-plates',9):.6/(4*.15),
 ('optics-m4-analysis-polarised-light',9):3*21,
}
actual={(h['id'],i) for sec in d['sections'][:8] for h in sec['sheets'] for i,c in enumerate(h['cards']) if c['type']=='number'}
assert set(values)==actual
for key,v in values.items():
 c=sh[key[0]]['cards'][key[1]]
 assert abs(c['answer']-v)<=max(c.get('tolerance',0),1e-10),(key,v,c['answer'])

# Independently find single-slit peak roots rather than reusing sampled plots.
def root(lo,hi):
 for _ in range(70):
  mid=(lo+hi)/2
  if (math.tan(lo)-lo)*(math.tan(mid)-mid)>0:lo=mid
  else:hi=mid
 return (lo+hi)/2
peaks=[root(math.pi+1e-5,1.5*math.pi-1e-5),root(2*math.pi+1e-5,2.5*math.pi-1e-5)]
heights=[(math.sin(x)/x)**2 for x in peaks]
assert math.isclose(heights[0],.04719045,abs_tol=1e-8)
assert math.isclose(heights[1],.01648003,abs_tol=1e-8)
assert math.isclose(6.328e-5*457.2/.07,.4133088)
assert math.isclose(((1.5-1.38**2)/(1.5+1.38**2))**2,.01411046,abs_tol=1e-8)
assert math.isclose(.1*.2/(50*.58),6.896551724e-4,abs_tol=1e-12)
assert math.ceil(589/.6)==982

# Check the corrected right-triangle algebra for a genuine refracting surface.
u=-70;R=50;n1=1;n2=39/14;v=n2/((n2-n1)/R+n1/u)
assert math.isclose((v-R)/(u-R),n1*v/(n2*u))

html=(ROOT/'study-match/dist/study-match.html').read_text()
built=json.loads(re.search(r'<script id="course-data" type="application/json">([\s\S]*?)</script>',html)[1])
verified=ders=0
for sec,pack in zip(d['sections'],built['sections']):
 for h,ph in zip(sec['sheets'],pack['sheets']):
  for c,pc in zip(h['cards'],ph['cards']):
   if c['type']=='derivation':assert c==pc;ders+=1
   elif c.get('verifiedDiagram'):assert c['art']==pc['art'];verified+=1
assert 'showAllLabels ? function () { return true; }' in html
assert d['meta']['inlineChecks'] is False
assert d['meta']['autoRevealQuestions'] is True
assert d['meta']['definitionChecks'] is True
report=dict(originalProgressIdsPreserved=len(before),newProgressIds=len(after)-len(before),numericQuizAnswersChecked=len(values),
 unchangedPracticeSheets=sum(len(s['sheets']) for s in d['sections'][8:]),derivationsPackagedUnchanged=ders,verifiedDiagramPlacements=verified,
 singleSlitPeakRoots=peaks,singleSlitRelativePeakIntensities=heights,
 browserValidation='Unavailable: Chrome sandbox launch blocked; connected browser policy failed to load. Static geometry rendered instead.')
(ROOT/'verify/purification/check-results.json').write_text(json.dumps(report,indent=2)+'\n')
print(json.dumps(report,indent=2))

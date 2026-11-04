"""Explicit final coverage additions; preserve every old card ID."""
import copy
import json
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]
P=ROOT/'study-match/data/data.json'
d=json.loads(P.read_text())
sh={x['id']:x for s in d['sections'] for x in s['sheets']}
def c(s,i):return sh[s]['cards'][i]
def step(tex,note,phase=None,ask=None):
    obj={'tex':tex,'note':note,'move':{'type':'rearrange'}}
    if phase:obj['phase']=phase
    if ask:obj['ask']=ask
    return obj
def ask(q,options,answer,why):return dict(q=q,options=options,answer=answer,why=why)

x=c('fermat-laws-reflection-refraction',6)
x['steps'][2]['ask']=ask('Why replace AP by A′P?', ['They are equal by mirror symmetry','Their refractive indices differ','A′ lies on the mirror','They are always zero'],0,'The mirror is the perpendicular bisector of AA′, so any point P on it is equally far from A and A′.')
x['steps'][4]['ask']=ask('What makes the two displayed angles equal?', ['Symmetry across the mirror','A change of refractive index','Diffraction at the mirror edge','Different light speeds'],0,'Reflecting A into A′ preserves lengths and reflects the angle to the normal.')
x['steps'][6]['ask']=ask('Where do the incident ray, normal and reflected ray lie?', ['In one plane','In three separate planes','Along one line for every incidence','Only behind the mirror'],0,'A, A′ and B define the construction plane, and it contains the normal at P.')

x=c('optics-m2-newton-rings-michelson',7)
x.clear()
x.update(type='derivation',label='05 · §15.11 Derivation',
    title='Michelson: mirror travel, wavelength and nearby spectral lines',
    legend='Use the same interferometer as the preceding card. The equivalent mirrors M₁ and M₂′ are parallel and separated by d. Observe the centre (θ = 0). Move one mirror toward equal arms through d₀ and count N complete fringes crossing the centre. A one-way mirror shift doubles the round-trip optical-path change. For two nearby wavelengths λ₁, λ₂, Δd below means mirror travel between successive visibility minima, not from equal arms to the first minimum.',
    setup=copy.deepcopy(c('optics-m2-newton-rings-michelson',6)['art']),
    phases=[{'name':'Count fringes','why':'compare central orders before and after the mirror moves'},
            {'name':'Wavelength','why':'solve for λ and substitute a measured displacement'},
            {'name':'Two nearby lines','why':'compare the fringe-order changes between successive visibility minima'}],
    steps=[
        {'phase':'Count fringes','tex':r'2d=m\lambda','note':'At a central dark fringe, the path difference is mλ under the textbook’s phase convention.'},
        step(r'2(d-d_0)=(m-N)\lambda','Moving toward equal arms lowers the central fringe order by N.',ask=ask('Why is the mirror displacement multiplied by 2?',['Light travels to the mirror and back','There are two colours','The mirror doubles frequency','The film index is two'],0,'Both the outward and return path shorten by d₀.')),
        step(r'2d-2(d-d_0)=m\lambda-(m-N)\lambda','Subtract the second order condition from the first.'),
        step(r'2d_0=N\lambda','Expand both brackets and cancel 2d and mλ.'),
        step(r'\lambda=\frac{2d_0}{N}','Divide by the number of counted fringes.', 'Wavelength',ask=ask('What is N in this equation?',['Whole fringes crossing one fixed point','Number of mirrors','Line density of a grating','Order of one ring at its rim'],0,'Count the repeated intensity cycles at the same observation point while the mirror moves.')),
        step(r'\lambda=\frac{2(0.29\times10^{-3}\,\mathrm{m})}{1000}','For mirror travel 0.29 mm and N = 1000, convert millimetres to metres.'),
        step(r'\lambda=580\,\mathrm{nm}','The result is 5.80 × 10⁻⁷ m; this is the 5800 Å example.'),
        step(r'\Delta m=2d\left|\frac1{\lambda_1}-\frac1{\lambda_2}\right|','Two wavelengths have different fringe orders at the same mirror setting.', 'Two nearby lines'),
        step(r'2\Delta d\left|\frac1{\lambda_1}-\frac1{\lambda_2}\right|=1','Between successive visibility minima, the relative order changes by one whole cycle.',ask=ask('Which displacement does Δd represent?',['Between successive visibility minima','Equal arms to the first visibility minimum','One dark-to-bright change at fixed wavelength','Distance between screen pixels'],0,'Adjacent minima differ by one relative-order cycle; the first minimum from equal arms corresponds to only half a cycle.')),
        step(r'\left|\frac1{\lambda_1}-\frac1{\lambda_2}\right|=\frac{|\lambda_2-\lambda_1|}{\lambda_1\lambda_2}','Put the two reciprocal wavelengths over a common denominator.'),
        step(r'|\lambda_2-\lambda_1|=\frac{\lambda_1\lambda_2}{2\Delta d}','Substitute the reciprocal difference and solve for the wavelength separation.'),
        step(r'\Delta\lambda\approx\frac{\lambda^2}{2\Delta d}','For nearby lines use λ₁λ₂ ≈ λ², with λ their mean wavelength.',ask=ask('Why may λ₁λ₂ be replaced by λ²?',['The two wavelengths are very close','Their product is always a sum','The source is unpolarised','The mirror is silvered'],0,'If the separation is small relative to the mean wavelength, the product differs from λ² only by a small second-order term.')),
        step(r'\Delta\lambda\approx\frac{(589\,\mathrm{nm})^2}{2(289000\,\mathrm{nm})}','For mean wavelength 589 nm and successive visibility minima 0.289 mm apart, use matching units.'),
        step(r'\Delta\lambda\approx0.600\,\mathrm{nm}','This is about 6.00 Å, the sodium-doublet separation in the textbook example.')])

# An explicit account of an ellipse is needed before using wave plates to
# produce and analyse one. The uid leaves all original legacy progress IDs intact.
sid='optics-m4-polarisation-introduction'
if not any(k.get('uid')=='elliptical-polarisation' for k in sh[sid]['cards']):
    sh[sid]['cards'].append({
        'uid':'elliptical-polarisation','type':'info','label':'05 · Polarisation shapes',
        'title':'What is elliptically polarised light?',
        'body':'At one fixed point in space, the tip of the electric-field arrow of elliptically polarised light traces an ellipse as time passes. It is the sum of two coherent perpendicular field components, E_x = a cos ψ and E_y = b cos(ψ - δ), where ψ is their common time phase and δ their fixed relative phase. Eliminating ψ gives the ellipse equation below. With both amplitudes nonzero, δ = 0 or π gives a line; |a| = |b| and δ = ±π/2 gives a circle. Unequal nonzero amplitudes at ±π/2 give an ellipse with axes along x and y. General δ tilts the ellipse. A fixed ellipse is fully polarised; random changes during observation can produce partial or unpolarised light.',
        'tex':r'\frac{E_x^2}{a^2}+\frac{E_y^2}{b^2}-\frac{2E_xE_y}{ab}\cos\delta=\sin^2\delta',
        'defines':['optics-m4-elliptical-polarisation'],'verifiedDiagram':True,
        'art':{'view':{'bbox':[0,180,260,0],'axis':False,'grid':False},'showAllLabels':True,'steps':[{'step':0,'name':'ellipse','objects':[
            {'type':'segment','p1':[35,85],'p2':[235,85],'role':'gk','name':'x'},
            {'type':'segment','p1':[130,25],'p2':[130,155],'role':'gk','name':'y'},
            {'type':'ellipse','center':[130,85],'rx':75,'ry':40,'role':'lk','name':'ellipse'},
            {'type':'label','coords':[238,75],'text':'E_x','name':'x','role':'t','size':11},
            {'type':'label','coords':[147,153],'text':'E_y','name':'y','role':'t','size':11},
            {'type':'label','coords':[130,16],'text':'Field tip at one fixed spatial point','name':'ellipse','role':'t','size':10,'align':'center'},
            {'type':'arrow','p1':[130,85],'p2':[190,109],'role':'ik','name':'E'},
            {'type':'label','coords':[181,124],'text':'E(t)','name':'E','role':'t','size':11}
        ]}]}})
    d['glossary'].append({'id':'optics-m4-elliptical-polarisation','term':'elliptical polarisation','aliases':['elliptically polarised','elliptically polarized'],
        'definition':'A fixed-point electric-field vector traces an ellipse with a stable shape and direction as time passes.',
        'example':'Two perpendicular coherent fields with unequal amplitudes and a 90° relative phase give an ellipse.'})

# Captions must refer to what the actual visible figure shows.
c('fermat-laws-reflection-refraction',0)['picture']='A point source P illuminates an opening of width a and a screen beyond it. The rays show travel directions; they are a model, not physical thin threads.'
c('thin-lens-foci-focal-length',4)['picture']='The upper construction shows incoming parallel rays meeting at F₂. The lower construction shows rays from F₁ emerging parallel. These drawings show a converging lens.'
c('optics-m2-superposition-sinusoidal-waves',0)['picture']='The phasor arrows are added tip-to-tail. Their lengths represent amplitudes; the arrow from the starting point to the final tip gives the combined amplitude. Their horizontal projections represent the vibrations.'
c('optics-m2-superposition-sinusoidal-waves',3)['picture']='The left pair of equal waves has aligned crests and adds. The right pair is half a cycle apart and cancels. Unequal waves would leave a nonzero minimum.'
c('optics-m2-division-amplitude-non-reflecting',0)['picture']='The ray first meets B. One part reflects directly; another goes B → D → F inside the film before emerging. Compare at equal outgoing wavefronts: subtract BC from the upper path. B′ and K are construction points for the derivation.'
c('optics-m2-newton-rings-michelson',5)['picture']='G₁ is the diagonal beam splitter. The two arms end at M₁ and M₂. The unsilvered compensating plate G₂ is inside the M₂ arm. Dashed M₂′ is the reflected virtual image of M₂, separated from M₁ by d.'
c('optics-m4-production-linearly-polarised',2)['picture']='Angles θ_p and θ_r start from the dashed normal. The reflected and transmitted directions are perpendicular at Brewster incidence. Dots on the reflected ray indicate its electric field perpendicular to the drawing plane.'
c('optics-m4-double-refraction-huygens',0)['picture']='A narrow beam enters the surface normally. The ordinary ray continues straight; the extraordinary ray moves sideways inside the crystal. The dashed line marks the tilted optic axis. A dot and a bar mark the perpendicular vibration directions.'

# Correct the remaining generalisations in the introduction and glossary.
c('spherical-surface-refraction-reflection',0)['bridge']='Within the paraxial approximation, rays from one object point share one image location, or appear to diverge from a common virtual image. For real endpoints their optical paths agree to this approximation.'
c('optics-m3-fresnel-zone-plate',0)['bridge']='For a full unobstructed wavefront, the slowly decreasing alternating zone contributions nearly cancel in pairs. Schuster’s argument leaves an amplitude approximately u₁/2, where u₁ is the first-zone contribution alone.'
c('optics-m3-fresnel-zone-plate',3)['meaning']='For centred coherent illumination, a circular hole exposing one Fresnel zone gives about 4I₀, while two zones nearly cancel. An opaque circular disc instead leaves a bright axial Poisson spot.'
c('optics-m3-fresnel-zone-plate',3)['title']='A bright point can appear in the centre of a circular shadow'
c('optics-m3-fresnel-zone-plate',3)['example']='Poisson predicted a bright spot behind a circular disc from Fresnel’s wave theory. Arago’s observation supported that wave explanation of diffraction.'
c('optics-m3-fresnel-zone-plate',11)['q']='For centred coherent illumination, the axial bright spot behind an opaque circular disc is the ______ spot.'
c('optics-m4-production-linearly-polarised',0)['example']='For 3 cm microwaves, a grid with wire spacing much less than 3 cm can select polarisation. For visible light, Polaroid uses aligned absorbing molecular chains instead.'
c('optics-m4-production-linearly-polarised',1)['tex']=r'd_{\rm spacing}\ll\lambda;\quad E_{\parallel}\ \text{rejected},\quad E_{\perp}\ \text{transmitted}'
c('optics-m4-production-linearly-polarised',8)['why']='The field parallel to the wires drives currents and is strongly reflected or absorbed. The perpendicular field is transmitted.'
c('optics-m4-wave-plates',3)['picture']='A half-wave plate reverses the sign of one field component. The pictured +45° input becomes -45° relative to a principal axis: these directions are 90° apart.'
c('optics-m4-wave-plates',0)['bridge']='At vacuum wavelength λ₀, choose d = (2m + 1)λ₀/[4|n_o - n_e|], with m = 0,1,… . The absolute value keeps thickness positive for both positive and negative crystals.'
c('optics-m4-analysis-polarised-light',0)['title']='Identify polarisation with an analyser and quarter-wave plate'
for g in d['glossary']:
    if g['id']=='diffraction':
        g['definition']='Diffraction is wave spreading around edges and through openings, caused by interference between contributions from different parts of a wavefront.'
        g['example']='A narrow slit produces a bright central band and weaker side bands instead of a perfectly sharp shadow.'
    elif g['id']=='optics-m3-fresnel-half-period-zones':
        g['definition']='Fresnel half-period zones divide a wavefront into regions whose corresponding path lengths to an observation point differ by half a wavelength.'
    elif g['id']=='optics-m4-half-wave-plate':
        g['definition']='A half-wave plate gives an odd-π relative phase delay to two perpendicular field components, reflecting a linear polarisation direction across a principal axis.'

P.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Added explicit Michelson steps and the missing ellipse introduction.')

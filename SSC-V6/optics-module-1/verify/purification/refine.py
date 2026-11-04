"""Apply explicitly authored review edits; plot formula graphs numerically.

Run once against the snapshot created at the start of this review, after the
direct edits to data.json. The marker prevents duplicate inserted steps.
"""
import json
import math
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
PATH = ROOT / 'study-match/data/data.json'
d = json.loads(PATH.read_text())
sheets = {sh['id']: sh for sec in d['sections'] for sh in sec['sheets']}
MARKER = ROOT / 'verify/purification/refinement-applied.json'
if MARKER.exists():
    raise SystemExit('Refinement already applied; refusing duplicate insertions.')

def card(sheet, index):
    return sheets[sheet]['cards'][index]

def insert(c, at, steps):
    c['steps'][at:at] = steps
    for part in c.get('setup', {}).get('steps', []):
        if part['step'] >= at:
            part['step'] += len(steps)

def st(tex, note, phase=None, **extra):
    r = {'tex': tex, 'note': note, 'move': {'type': 'rearrange'}}
    if phase:
        r['phase'] = phase
    r.update(extra)
    return r

# Module 1: retain one card per derivation and all existing card positions.
c = card('fermat-laws-reflection-refraction', 6)
c.update(type='derivation', legend=c.pop('body'),
    phases=[{'name': 'Mirror image', 'why': 'replace the reflected path by an equal straightenable path'},
            {'name': 'Shortest path', 'why': 'find the reflection point by minimising the optical length'},
            {'name': 'Equal angles', 'why': 'use mirror symmetry and the straight-line angles'}],
    steps=[
        {'phase': 'Mirror image', 'tex': r'AP = A^{\prime}P', 'note': 'A and A′ are equally far from the mirror; the two right triangles have a common side along it.'},
        st(r'L_{\rm op}=n(AP+PB)', 'The same index n applies to both segments, so minimising time means minimising their total length.'),
        st(r'L_{\rm op}=n(A^{\prime}P+PB)', 'Replace AP by its equal length A′P.'),
        st(r'A^{\prime}P+PB\geq A^{\prime}B', 'The triangle inequality makes the direct line the shortest route.', 'Shortest path', ask={'q':'When does equality hold?', 'options':['A′, P and B are collinear','P is directly below B','AP is zero','The mirror is curved'], 'answer':0,'why':'The two segments form one straight segment only when P is on line A′B.'}),
        st(r'\angle APS=\angle A^{\prime}PT', 'Mirror symmetry makes the two angles equal; PS and PT are the upward and downward normal directions.', 'Equal angles'),
        st(r'\angle A^{\prime}PT=\angle SPB', 'A′P and PB are one straight line, so these are vertically opposite angles.'),
        st(r'i=r', 'Thus incidence angle i equals reflection angle r; the incident ray, reflected ray and normal are also in one plane.')])

c = card('newton-formula-magnification', 4)
# The added algebra moved the later diagram annotation from step 4 to step 9.
for part in c['setup']['steps']:
    if part['step'] == 4:
        part['step'] = 9
c['steps'][1]['move'] = {'type':'rearrange','label':'Divide the numerator and denominator of the ratio by R'}
c['steps'][2]['move'] = {'type':'rearrange','label':'Recall the spherical-surface equation'}

# Module 2: expose the intermediate algebra instead of invoking it silently.
c = card('optics-m2-superposition-sinusoidal-waves', 2)
insert(c, 1, [st(r'x(t)=(a_1\cos\theta_1+a_2\cos\theta_2)\cos\omega t-(a_1\sin\theta_1+a_2\sin\theta_2)\sin\omega t',
    'Use cos(A+B) = cos A cos B - sin A sin B on each wave.', 'Components'),
    st(r'x(t)=a\cos\theta\cos\omega t-a\sin\theta\sin\omega t',
       'Expand the desired resultant a cos(ωt + θ) in the same way.')])
c['legend'] = 'At one point, add two vibrations along the same direction with equal angular frequency ω. Their amplitudes are a₁,a₂ and initial phases θ₁,θ₂. Seek resultant amplitude a ≥ 0 and phase θ. The diagram uses phasor arrows OP and PR, whose sum is OR. Angles are measured from the horizontal component axis.'

c = card('optics-m2-division-of-wavefront', 4)
insert(c, 5, [st(r'4x^2d^2-4xd\Delta^2+\Delta^4=4\Delta^2(x^2-xd+d^2/4+z^2)',
    'Square both sides and expand every bracket before cancelling the common -4xdΔ² term.', 'Hyperbola')])
c['steps'][6]['move'] = {'type':'simplify','label':'Cancel the cross term and divide by 4'}
c['steps'][6]['note'] = 'Collect the x² and z² terms on the left; factor Δ²(d²-Δ²)/4 on the right.'
c['steps'][-1]['ask']['q'] = 'For 0 < |Δ| < d, which curve does the final equation describe?'

c = card('optics-m2-interference-light-waves', 4)
c['legend'] = 'Two in-phase pinholes S₁ and S₂ are d apart, with S₁ above the midpoint. O is opposite their midpoint on screen LL′, distance D away. A bright point P is x_n above O. Assume D ≫ d and D ≫ |x_n|, so both ray lengths are approximately D. λ is the wavelength in the surrounding medium and n is integer fringe order.'
insert(c, 7, [st(r'x_{n+1}-x_n=\frac{(n+1)\lambda D}{d}-\frac{n\lambda D}{d}',
    'Write the next bright-fringe position and subtract the current one.')])

c = card('optics-m2-interference-light-waves', 5)
c['legend'] = 'At P, two coherent fields of the same frequency and parallel polarisation add. Choose E₁ = a₁ cos ωt and E₂ = a₂ cos(ωt - δ), with stable relative phase δ. A detector averages many cycles: ⟨ ⟩ denotes this time average. K is the common conversion factor from mean squared field to intensity, so I₁ = Ka₁²/2 and I₂ = Ka₂²/2. For in-phase slits, δ = 2π(S₂P-S₁P)/λ.'
insert(c, 1, [st(r'\langle E_1E_2\rangle=\frac{a_1a_2}{2}\langle\cos\delta+\cos(2\omega t-\delta)\rangle',
    'Apply 2 cos A cos B = cos(A-B) + cos(A+B) to the cross term.'),
    st(r'I=\frac{Ka_1^2}{2}+\frac{Ka_2^2}{2}+Ka_1a_2\cos\delta',
       'The oscillating cosine averages to zero, while each squared cosine averages to 1/2.')])

c = card('optics-m2-fresnel-two-mirror-biprism', 4)
c['legend'] = 'The two halves of a thin biprism deviate light oppositely, producing virtual slit images S₁,S₂. Each half has small angle α in radians and index n relative to air. The source slit S is distance a from the biprism. d = S₁S₂ is virtual-source separation; D is source-plane to screen distance and β is measured fringe width. After finding λ, the final steps explain how a movable convex lens measures d without knowing α.'
c['steps'][-1].pop('ask', None)
c['steps'][2]['ask'] = {'q':'Which relation connects β, λ, D and d?', 'options':[r'\(\beta=\lambda D/d\)',r'\(\beta=dD/\lambda\)',r'\(\beta=\lambda d/D\)',r'\(\beta=2d\)'], 'answer':0,'why':'The two coherent virtual images obey the same fringe-width relation as Young’s sources.'}
c['steps'].extend([
    st(r'd_1=\frac{b_1}{a_1}d', 'At the first sharp-image lens position, magnification b₁/a₁ scales separation d to image separation d₁.'),
    st(r'd_2=\frac{a_1}{b_1}d', 'At the second position, object and image distances swap, so the magnification is reciprocal.'),
    st(r'd_1d_2=d^2', 'Multiply the two measured separations; the magnifications cancel.'),
    st(r'd=\sqrt{d_1d_2}', 'Take the positive root for the physical source separation.', ask={'q':'Why use the positive square root?', 'options':['A separation is a positive length','The wavelength is negative','The image is always upright','Both lenses have zero power'], 'answer':0,'why':'d is a physical distance between the virtual slit images.'}),
    st(r'D=a_1+b_1=b_1+b_2', 'At conjugate positions b₂ = a₁, so the two lens-to-screen distances add to the total distance D.')])
# Avoid two equals in a MathFlow line.
c['steps'][-1]['tex'] = r'D=b_1+b_2'

c = card('optics-m2-white-light-lloyd-stokes', 2)
c['legend'] = 'A thin transparent plate covers slit S₁ only. Its thickness t replaces an equal thickness of air; n is its index relative to air and v = c/n is the speed inside it. Assume nearly normal incidence on the plate and small angles at a distant screen. Slits are d apart and screen distance is D. O is the old zero-order fringe; O′ the new one, displaced by Δ toward S₁. Travel time is τ; c is the air speed approximation.'

c = card('optics-m2-division-amplitude-non-reflecting', 2)
c['legend'] = 'A parallel film of thickness d and index n₂ lies in index n₁. A ray first reflects at upper point B; another travels inside B → D → F before emerging parallel to it. C is the perpendicular projection of F onto the upper reflected ray, so BC must be subtracted when comparing equal outgoing wavefronts. θ is incidence angle and θ′ the internal angle, both from the normal. Reflect B across the lower face to B′; K is the perpendicular projection of B onto B′F. Δ below is propagation path difference; add any reflection phase reversals separately.'

c = card('optics-m2-division-amplitude-non-reflecting', 5)
c['legend'] = 'Take lossless materials with n_a < n_f < n_g, illuminated normally at vacuum wavelength λ. The first two steps give the smallest quarter-wave thickness d. Both reflections reverse phase, so their relative reflection phase is zero. The later index condition matches interface reflection amplitudes; the textbook first obtains it by neglecting a small transmission correction. Including all internal reflections gives the same exact zero-reflection condition for an ideal single layer.'
c['steps'][2]['note'] = 'The textbook sets the nearly equal transmitted amplitude factor to 1 and matches the two interface reflection magnitudes.'
c['steps'][-1]['ask']['why'] = 'For n_a = 1 and n_g = 1.5, the ideal film index is √1.5 ≈ 1.225.'
insert(c, len(c['steps']), [st(r'r_{\rm film}=\frac{n_an_g-n_f^2}{n_an_g+n_f^2}',
    'Including every internal reflection at quarter-wave thickness gives this signed total reflection amplitude.'),
    st(r'r_{\rm film}=0\quad\Longleftrightarrow\quad n_f^2=n_an_g',
       'Zero total reflection requires a zero numerator, confirming the same index condition without the two-ray approximation.')])

# Module 3: make approximations visible and add the missing secondary-peak steps.
c = card('optics-m3-single-slit-fraunhofer', 2)
c['steps'][3]['tex'] = r'\frac{n\phi}{2}\longrightarrow\frac{\pi b\sin\theta}{\lambda}'
c['steps'][3]['note'] = 'This is a limiting relation: finite n gives nΔ rather than exactly b.'
c['steps'].extend([
    st(r'\frac{dI}{d\beta}=2I_0\frac{\sin\beta(\beta\cos\beta-\sin\beta)}{\beta^3}',
       'Differentiate the intensity using the product and quotient rules, away from β = 0.'),
    st(r'\beta\cos\beta-\sin\beta=0', 'For a nonzero side maximum, sin β is not zero, so set the other factor to zero.'),
    st(r'\tan\beta=\beta', 'Divide by cos β to locate the side peaks; the central value is found separately by a limit.')])

c = card('optics-m3-n-slit-grating', 2)
c['legend'] = 'N identical slits of width b and centre spacing d are illuminated equally and in phase at normal incidence. A is the on-axis amplitude from one slit and I₀ its intensity. Define β = πb sin θ/λ, γ = πd sin θ/λ and Φ₁ = 2γ. At order m, d sin θ_m = mλ. The half-width Δθ_m is the angular distance from the narrow principal peak to its nearest zero, assuming large N; it is not the width at half peak intensity.'
c = card('optics-m3-n-slit-grating', 8)
c['steps'][1]['tex'] = r'd\cos\theta\frac{d\theta}{d\lambda}=m'
c['steps'][1]['note'] = 'Differentiate at fixed order m and grating spacing d; the derivative is approximated by Δθ/Δλ for nearby wavelengths.'
c['steps'][2]['tex'] = r'\frac{d\theta}{d\lambda}=\frac{m}{d\cos\theta}'
c = card('optics-m3-fresnel-zone-plate', 2)
c['legend'] = 'A normally incident plane wave meets wavefront WW′. O is its point nearest the on-axis observer P, with OP = d. Draw circles whose rim distances to P are d+nλ/2. Their radii are r_n, with r₀ = 0. Assume nλ ≪ d, so the zones have nearly equal areas A_n. Adjacent zone contributions alternate in phase; u_n denotes their positive amplitude magnitude. The Schuster sum below is an approximation using slowly decreasing u_n, not an exact equality of every neighbouring contribution.'
c['steps'][2]['tex'] = r'r_n\approx\sqrt{n\lambda d}'
c['steps'][2]['note'] = 'For nλ ≪ d, neglect n²λ²/4 compared with nλd, then take the positive root.'
c['steps'][4]['tex'] = r'A_n\approx\pi\lambda d'
c['steps'][4]['note'] = 'Substitute r_n² ≈ nλd and r_(n-1)² ≈ (n-1)λd; the areas are approximately equal.'
c['steps'][-1]['tex'] = r'u(P)\approx\frac{u_1}{2}'
c['steps'][-1]['note'] = 'For a full wavefront the distant-zone contribution tends to zero; the nearly cancelling brackets leave approximately u₁/2.'
c = card('optics-m3-diffraction-straight-edge', 4)
insert(c, 2, [st(r'u(P)\approx-\frac{iA}{\lambda d}e^{ikd}\int_{-\infty}^{\infty}d\xi\int_0^{\infty}d\eta\;e^{ik[\xi^2+(\eta-y)^2]/(2d)}',
    'The Fresnel diffraction integral adds the phase contributions from the open half-plane; replace the slow amplitude factor 1/r by 1/d.'),
    st(r'd\xi\,d\eta=\frac{\lambda d}{2}\,du\,dv',
       'Each coordinate substitution contributes √(λd/2), giving this area factor.')])
c['steps'][0]['tex'] = r'r\approx d+\frac{\xi^2+(\eta-y)^2}{2d}'

# Module 4: state the physical conditions, not just the algebraic result.
c = card('optics-m4-polarisation-introduction', 2)
c['legend'] = 'This is the textbook string analogy for a transverse wave travelling along +z. Fix z and follow one material point with perpendicular displacements x and y. Both have amplitude a and differ in phase by 90°. k = 2π/λ, ω = 2πν and φ is a constant initial phase. For light the same algebra describes the tip of the electric-field vector at a fixed point, not a particle travelling around a circle.'
c = card('optics-m4-production-linearly-polarised', 4)
c['title'] = "Brewster's angle: why the outgoing rays are perpendicular"
c['legend'] = 'Light goes from index n₁ into nonabsorbing index n₂. θ_p is incidence angle from the normal at which p-polarised reflection vanishes; θ_r is refraction angle from the normal. The plane of incidence contains the incoming ray and normal. Starting with the textbook relation tan θ_p = n₂/n₁, combine Snell’s law to show perpendicular reflected and refracted rays. This proves the right-angle consequence; it does not independently derive the zero of the Fresnel reflection coefficient.'
c = card('optics-m4-analysis-polarised-light', 4)
c['legend'] = 'A linearly polarised wave entering along +z can be written as equal RCP and LCP waves, each with component amplitude E₀. Use the displayed component equations to define the handedness convention. Their wavenumbers are k_R = 2πn_R/λ and k_L = 2πn_L/λ, with vacuum wavelength λ. Define θ(z) = (k_L+k_R)z/2 for their common phase and φ(z) for the rotation of the resulting line. Assume no differential absorption, so the two circular amplitudes remain equal.'

# Sources were available in the complete on-disk textbook, including pages
# omitted by the original unit cuts. Keep the missing Book 2 substitution clear.
for sh in list(sheets.values())[:22]:
    sh['source'] = sh['source'].replace(' (unverified — source PDF not in package)', '; checked against the complete on-disk Ghatak textbook')
sheets['spherical-surface-refraction-reflection']['source'] = 'Unit 2 · Ghatak §§4.1–4.3, complete-book PDF pp. 79–82; §4.1 was checked in the full book because it is omitted from the original unit cut.'
sheets['optics-m2-interference-light-waves']['source'] = 'Unit 7 · Ghatak §§14.3–14.6, complete-book PDF pp. 206–214; includes the coherence page missing from the unit map.'
sheets['optics-m2-division-amplitude-non-reflecting']['source'] = 'Unit 10 · Ghatak §§15.1–15.4, complete-book PDF pp. 222–227; introductory chapter opener also checked on p. 221.'
sheets['optics-m2-newton-rings-michelson']['source'] = 'Unit 11 · Ghatak §§15.8–15.11, complete-book PDF pp. 236–245; equal-thickness fringes checked beyond the original cut.'
sheets['optics-m3-single-slit-fraunhofer']['source'] = 'Unit 12 · Ghatak §§18.1–18.2, complete-book PDF pp. 279–283; the slit-width and wavelength assumptions are explicit.'
sheets['optics-m3-fresnel-zone-plate']['source'] = 'Unit 15 · Ghatak §§20.1–20.3, complete-book PDF pp. 326–330.'
sheets['optics-m4-double-refraction-huygens']['source'] = 'Unit 20 · Ghatak §§22.5–22.5.2, complete-book PDF pp. 365–369; oblique-incidence construction continues on unit 21’s first page. Book 2 is unavailable; Ghatak is the declared substitute.'

PATH.write_text(json.dumps(d, ensure_ascii=False, indent=2)+'\n')
MARKER.write_text(json.dumps({'status':'applied','original_syllabus_cards':242},indent=2)+'\n')
print('Applied individually authored derivation and source edits.')

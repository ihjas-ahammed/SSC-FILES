# Module II — Interference: Objective Questions (OMR Pool)
# Covers sections 2.1 through 2.7.
# 5 questions per section: 3 MCQ, 1 MSQ, 1 NAT = 35 questions total.

# ── 2.1  Superposition of two sinusoidal waves ─────────────────────────────────

O('o.op.2.1.01', '2.1', 'MCQ',
  r'''Two coherent monochromatic beams of intensities $I_1 = 9I_0$ and $I_2 = 4I_0$ superpose at a point. What is the ratio of maximum to minimum intensity ($I_{\max} : I_{\min}$) in the resulting interference pattern?''',
  [r'$25 : 1$',
   r'$13 : 5$',
   r'$5 : 1$',
   r'$169 : 25$'],
  'A',
  r'''<p>Resultant intensity is given by $I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$. The extreme intensities correspond to amplitudes adding and subtracting:
$$I_{\max} = (\sqrt{I_1} + \sqrt{I_2})^2 = (\sqrt{9I_0} + \sqrt{4I_0})^2 = (3+2)^2 I_0 = 25I_0$$
$$I_{\min} = (\sqrt{I_1} - \sqrt{I_2})^2 = (3-2)^2 I_0 = 1I_0$$
Thus $I_{\max} : I_{\min} = 25 : 1$.</p>
<p>Distractor B ($13:5$) incorrectly adds and subtracts intensities $(I_1+I_2)/(I_1-I_2)$ rather than amplitudes. Distractor C ($5:1$) gives the ratio of amplitudes rather than intensities. Distractor D ($169:25$) squares the sum and difference of intensities.</p>''',
  tested='Calculation of maximum and minimum intensity from individual beam intensities',
  trap='Adding intensities directly instead of taking amplitudes first',
  tests=['c.2.1.1', 'c.2.1.2'],
  twist=('What is the fringe visibility V for this two-beam system?', r'$V = (I_{\max} - I_{\min})/(I_{\max} + I_{\min}) = (25-1)/(25+1) = 24/26 \approx 0.923$'),
  marks=1, time=60)

O('o.op.2.1.02', '2.1', 'MCQ',
  r'''Two coherent light waves, each of intensity $I_0$, superpose on a screen. At a point where the path difference between the waves is $\lambda/6$, the resulting intensity is:''',
  [r'$I_0$',
   r'$2I_0$',
   r'$3I_0$',
   r'$4I_0$'],
  'C',
  r'''<p>Path difference $\Delta = \lambda/6$ corresponds to a phase difference:
$$\delta = \frac{2\pi}{\lambda}\Delta = \frac{2\pi}{\lambda}\left(\frac{\lambda}{6}\right) = \frac{\pi}{3} = 60^\circ$$
For two equal-intensity beams, $I = 4I_0 \cos^2(\delta/2)$:
$$I = 4I_0 \cos^2\left(\frac{\pi}{6}\right) = 4I_0 \left(\frac{\sqrt{3}}{2}\right)^2 = 4I_0 \times \frac{3}{4} = 3I_0$$</p>
<p>Distractor A ($I_0$) results from evaluating at $\Delta = \lambda/3$ where $\delta = 2\pi/3$. Distractor B ($2I_0$) is the incoherent sum $I_1+I_2$. Distractor D ($4I_0$) is the maximum possible intensity at $\delta = 0$.</p>''',
  tested='Phase difference and intensity variation for equal-intensity interference',
  trap='Using cos(delta) instead of cos^2(delta/2) or confusing path difference with phase',
  tests=['c.2.1.1'],
  twist=('What is the intensity if the path difference is instead lambda/3?', r'$I = 4I_0\cos^2(\pi/3) = 4I_0(1/4) = I_0$'),
  marks=1, time=60)

O('o.op.2.1.03', '2.1', 'MCQ',
  r'''$N$ identical coherent waves, each of amplitude $a_0$, have a constant phase step $\delta$ between successive waves. At the first minimum adjacent to the central principal maximum, the value of $\delta$ must be:''',
  [r'$\pi/N$',
   r'$2\pi/N$',
   r'$\pi/(2N)$',
   r'$2\pi/(N-1)$'],
  'B',
  r'''<p>The resultant amplitude of $N$ equal phasors is:
$$a = a_0 \frac{\sin(N\delta/2)}{\sin(\delta/2)}$$
The principal maximum occurs at $\delta = 0$. The first minimum occurs when the numerator vanishes while the denominator remains non-zero:
$$\frac{N\delta}{2} = \pi \implies \delta = \frac{2\pi}{N}$$</p>
<p>Distractor A ($\pi/N$) forgets the factor of $2$ in the half-angle argument ($N\delta = \pi$). Distractor C ($\pi/2N$) equates $N\delta/2 = \pi/2$. Distractor D ($2\pi/(N-1)$) confuses the number of phasors $N$ with the number of intervals $N-1$.</p>''',
  tested='Condition for the first minimum in N-wave phasor superposition',
  trap='Confusing the individual phase step delta with the total array phase difference N delta',
  tests=['c.2.1.3'],
  twist=('What is the total phase angle swept by the N phasors head-to-tail at this first minimum?', r'The polygon of phasors closes completely, sweeping a total angle $N\delta = 2\pi$'),
  marks=1, time=60)

O('o.op.2.1.04', '2.1', 'MSQ',
  r'''Two monochromatic light waves of intensities $I_1$ and $I_2$ superpose to form an interference pattern. Which of the following statements are correct?''',
  [r'If $I_1 = I_2$, the fringe visibility is unity ($V = 1$).',
   r'The average intensity across a complete cycle of phase difference is $(I_1 + I_2)/2$.',
   r'Destructive interference produces zero intensity only if $I_1 = 4I_2$.',
   r'Total energy is conserved, with energy redistributed from dark regions to bright regions.'],
  ['A', 'D'],
  r'''<p>Statement A is correct: $V = \frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}$. When $I_1 = I_2 = I_0$, $V = \frac{2I_0}{2I_0} = 1$.</p>
<p>Statement B is incorrect: the average of $I(\delta) = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$ over a full cycle of $\delta \in [0, 2\pi]$ is $I_1 + I_2$, not half of it.</p>
<p>Statement C is incorrect: complete darkness ($I_{\min} = 0$) requires $(\sqrt{I_1} - \sqrt{I_2})^2 = 0 \implies I_1 = I_2$.</p>
<p>Statement D is correct: interference does not create or destroy energy; it only redistributes power so the spatial average remains $I_1 + I_2$.</p>''',
  tested='Fringe visibility, energy conservation, and conditions for total destructive cancellation',
  trap='Thinking average intensity is halved or that unequal beams can cancel to complete darkness',
  tests=['c.2.1.1', 'c.2.1.2'],
  twist=('What is the fringe visibility if I_1 = 4 I_2?', r'$V = 2\sqrt{4}/(4+1) = 4/5 = 0.80$'),
  marks=2, neg=0, time=90)

O('o.op.2.1.05', '2.1', 'NAT',
  r'''Two coherent waves superpose to produce an interference pattern on a screen. The measured maximum intensity is $36\text{ W/m}^2$ and the minimum intensity is $4\text{ W/m}^2$. Calculate the fringe visibility $V$.''',
  None,
  {'value': 0.8, 'tol': 0.02, 'dp': 2},
  r'''<p>Fringe visibility is defined by Michelson's contrast formula:
$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$
Substituting $I_{\max} = 36\text{ W/m}^2$ and $I_{\min} = 4\text{ W/m}^2$:
$$V = \frac{36 - 4}{36 + 4} = \frac{32}{40} = 0.80$$</p>
<p>A common error is taking the ratio $I_{\max}/I_{\min} = 9$ or $I_{\min}/I_{\max} \approx 0.11$ instead of the normalized contrast.</p>''',
  tested='Calculation of fringe visibility from maximum and minimum intensities',
  trap='Computing the intensity ratio I_max / I_min rather than normalized contrast',
  tests=['c.2.1.2'],
  twist=('What is the ratio of the amplitudes a_1 / a_2 of the two interfering waves?', r'$a_1/a_2 = (\sqrt{36}+\sqrt{4})/(\sqrt{36}-\sqrt{4}) = (6+2)/(6-2) = 2.0$'),
  marks=2, neg=0, time=90)

# ── 2.2  Division of wavefront: coherence ──────────────────────────────────────

O('o.op.2.2.01', '2.2', 'MCQ',
  r'''Which of the following pairs of light sources CANNOT produce a sustained, observable interference pattern?''',
  [r'Two virtual images of a single slit produced by a Fresnel biprism',
   r'Two real pinholes illuminated by a single narrow monochromatic source',
   r'A real slit and its virtual image formed in Lloyd\'s mirror',
   r'Two independent He-Ne laser tubes emitting at the exact same wavelength $\lambda = 632.8\text{ nm}$'],
  'D',
  r'''<p>For sustained interference, the phase difference between the two sources must remain constant in time (mutual coherence). Two independent sources, even identical lasers, emit independent wave trains whose relative phase drifts randomly on sub-microsecond timescales, causing $\cos\delta$ to average to zero over any detection time.</p>
<p>Options A, B, and C all use division of wavefront from a single common source, so phase fluctuations in the primary source are shared identically by both beams, maintaining a fixed phase difference.</p>''',
  tested='Requirement of mutual coherence and impossibility of interference from independent sources',
  trap='Assuming laser sources are automatically mutually coherent even when originating from separate cavities',
  tests=['c.2.2.1'],
  twist=('How can light from one laser be used to produce interference?', r'By splitting the beam into two paths using division of wavefront or division of amplitude'),
  marks=1, time=60)

O('o.op.2.2.02', '2.2', 'MCQ',
  r'''A quasi-monochromatic light source has a mean wavelength $\lambda = 600\text{ nm}$ and a spectral linewidth $\Delta\lambda = 0.002\text{ nm}$. The coherence length $L_c$ of this light is approximately:''',
  [r'$1.8\text{ mm}$',
   r'$18\text{ cm}$',
   r'$1.8\text{ m}$',
   r'$3.6\text{ cm}$'],
  'B',
  r'''<p>The coherence length is related to the spectral bandwidth by:
$$L_c \approx \frac{\lambda^2}{\Delta\lambda}$$
Substituting $\lambda = 600\text{ nm} = 600 \times 10^{-9}\text{ m}$ and $\Delta\lambda = 0.002\text{ nm} = 2 \times 10^{-12}\text{ m}$:
$$L_c = \frac{(600 \times 10^{-9})^2}{2 \times 10^{-12}} = \frac{3.6 \times 10^{-13}}{2 \times 10^{-12}} = 0.18\text{ m} = 18\text{ cm}$$</p>
<p>Distractor A ($1.8\text{ mm}$) and Distractor C ($1.8\text{ m}$) arise from powers-of-10 unit conversion slips between nanometres and metres. Distractor D ($3.6\text{ cm}$) forgets to divide by $2$.</p>''',
  tested='Relation between spectral linewidth and temporal coherence length',
  trap='Unit conversion errors between nanometres, centimetres, and metres',
  tests=['c.2.2.2'],
  twist=('What is the corresponding coherence time tau_c?', r'$\tau_c = L_c/c = 0.18 / (3\times 10^8) = 6.0\times 10^{-10}\text{ s} = 0.6\text{ ns}$'),
  marks=1, time=60)

O('o.op.2.2.03', '2.2', 'MCQ',
  r'''Which of the following optical arrangements produces coherent interfering beams by **division of amplitude**?''',
  [r'Newton\'s rings (thin air film between a lens and a flat plate)',
   r'Fresnel\'s two-mirror arrangement',
   r'Fresnel\'s biprism',
   r'Lloyd\'s single mirror'],
  'A',
  r'''<p>In division of amplitude, a single wavefront is split into two or more beams by partial reflection and partial transmission at an interface (such as thin films, Newton\'s rings, and the Michelson interferometer).</p>
<p>Fresnel\'s two mirrors (B), Fresnel\'s biprism (C), and Lloyd\'s mirror (D) all operate by division of wavefront, where different spatial sections of the primary wavefront are directed along different paths.</p>''',
  tested='Classification of interferometers into division of wavefront vs division of amplitude',
  trap='Confusing mirror reflection in Lloyd’s mirror (wavefront division) with partial reflection (amplitude division)',
  tests=['c.2.2.1'],
  twist=('Is the Michelson interferometer based on division of wavefront or division of amplitude?', r'Division of amplitude, using a beam splitter plate'),
  marks=1, time=60)

O('o.op.2.2.04', '2.2', 'MSQ',
  r'''Which of the following statements regarding temporal and spatial coherence are correct?''',
  [r'Temporal coherence is directly governed by the angular width of the light source.',
   r'A source with a narrow frequency spread $\Delta\nu$ has a long coherence time $\tau_c \approx 1/\Delta\nu$.',
   r'If the optical path difference between two interfering beams exceeds the coherence length $L_c$, fringes wash out.',
   r'In Young\'s double-slit experiment, widening the primary source slit enhances the fringe visibility.'],
  ['B', 'C'],
  r'''<p>Statement A is incorrect: spatial coherence is determined by the angular size of the source, whereas temporal coherence is determined by the spectral width $\Delta\nu$ (monochromaticity).</p>
<p>Statement B is correct: the coherence time is inversely proportional to the frequency bandwidth, $\tau_c \approx 1/\Delta\nu$.</p>
<p>Statement C is correct: when the path difference $\Delta > L_c$, wave packets from the two paths arrive at different times and cannot maintain a stable phase relationship, destroying fringe contrast.</p>
<p>Statement D is incorrect: widening the primary source slit reduces spatial coherence, making different points of the source produce mutually shifted fringe patterns that wash out contrast.</p>''',
  tested='Physical definitions and consequences of temporal and spatial coherence',
  trap='Swapping the distinct physical origins of temporal and spatial coherence',
  tests=['c.2.2.2'],
  twist=('What is the condition on the primary slit width s and distance S to preserve spatial coherence?', r'$s/S \le \lambda/(2d)$ where $d$ is the double-slit separation'),
  marks=2, neg=0, time=90)

O('o.op.2.2.05', '2.2', 'NAT',
  r'''A quasi-monochromatic light source has a coherence time $\tau_c = 8.33\text{ ps}$ ($8.33 \times 10^{-12}\text{ s}$). Calculate its coherence length $L_c$ in millimetres ($\text{mm}$). Take the speed of light $c = 3.0 \times 10^8\text{ m/s}$.''',
  None,
  {'value': 2.5, 'tol': 0.1, 'dp': 1},
  r'''<p>The coherence length $L_c$ is the distance travelled by light in vacuum during the coherence time $\tau_c$:
$$L_c = c\,\tau_c = (3.0 \times 10^8\text{ m/s}) \times (8.333 \times 10^{-12}\text{ s}) = 2.50 \times 10^{-3}\text{ m} = 2.5\text{ mm}$$</p>
<p>Errors typically arise from misconverting picoseconds ($10^{-12}\text{ s}$) or failing to express the final answer in millimetres.</p>''',
  tested='Calculation of coherence length from coherence time',
  trap='Failing to convert metres to millimetres or miscalculating powers of ten for picoseconds',
  tests=['c.2.2.2'],
  twist=('If the central wavelength is 500 nm, what is the spectral bandwidth delta lambda?', r'$\Delta\lambda = \lambda^2/L_c = (500\times 10^{-9})^2 / (2.5\times 10^{-3}) = 1.0\times 10^{-10}\text{ m} = 0.1\text{ nm}$'),
  marks=2, neg=0, time=90)

# ── 2.3  Young's experiment ────────────────────────────────────────────────────

O('o.op.2.3.01', '2.3', 'MCQ',
  r'''In a Young\'s double-slit experiment, the fringe width on a screen is measured to be $0.40\text{ mm}$ in air. If the entire apparatus is immersed in water of refractive index $n = 4/3$, the new fringe width will be:''',
  [r'$0.53\text{ mm}$',
   r'$0.40\text{ mm}$',
   r'$0.30\text{ mm}$',
   r'$0.225\text{ mm}$'],
  'C',
  r'''<p>Young\'s fringe width in a medium of refractive index $n$ is:
$$\beta_n = \frac{\lambda_n D}{d} = \frac{\lambda D}{n\,d} = \frac{\beta_{\rm air}}{n}$$
Substituting $\beta_{\rm air} = 0.40\text{ mm}$ and $n = 4/3$:
$$\beta_n = \frac{0.40}{4/3} = 0.40 \times \frac{3}{4} = 0.30\text{ mm}$$</p>
<p>Distractor A ($0.53\text{ mm}$) mistakenly multiplies by $n$ rather than dividing. Distractor B ($0.40\text{ mm}$) assumes fringe width is medium-independent. Distractor D ($0.225\text{ mm}$) divides by $n^2$.</p>''',
  tested='Dependence of Young double-slit fringe width on the refractive index of the medium',
  trap='Multiplying by refractive index instead of dividing',
  tests=['c.2.3.1'],
  twist=('What happens to the angular fringe spacing theta = lambda/d in water?', r'It shrinks by the same factor: $\theta_n = \theta_{\rm air}/n = 3/4\,\theta_{\rm air}$'),
  marks=1, time=60)

O('o.op.2.3.02', '2.3', 'MCQ',
  r'''In a Young\'s double-slit experiment with two identical slits, the intensity at the central maximum is $I_{\max}$. At what distance from the central maximum on the screen does the intensity first drop to $I_{\max}/2$? (Fringe width is $\beta$).''',
  [r'$\beta/2$',
   r'$\beta/3$',
   r'$\beta/6$',
   r'$\beta/4$'],
  'D',
  r'''<p>The intensity distribution across the screen is:
$$I(x) = I_{\max}\cos^2\left(\frac{\pi d\,x}{\lambda D}\right) = I_{\max}\cos^2\left(\frac{\pi x}{\beta}\right)$$
We set $I(x) = I_{\max}/2$:
$$\cos^2\left(\frac{\pi x}{\beta}\right) = \frac{1}{2} \implies \cos\left(\frac{\pi x}{\beta}\right) = \frac{1}{\sqrt{2}} \implies \frac{\pi x}{\beta} = \frac{\pi}{4} \implies x = \frac{\beta}{4}$$</p>
<p>Distractor A ($x = \beta/2$) is the first minimum ($I = 0$). Distractor B ($x = \beta/3$) gives $\cos(\pi/3) = 1/2 \implies I = I_{\max}/4$. Distractor C ($x = \beta/6$) gives $I = 3I_{\max}/4$.</p>''',
  tested='Intensity distribution and half-maximum position in Young double-slit interference',
  trap='Setting cos(pi x / beta) = 1/2 instead of 1/sqrt(2) because intensity depends on amplitude squared',
  tests=['c.2.3.2'],
  twist=('At what distance from the center is the intensity equal to I_max / 4?', r'$x = \beta/3$ since $\cos^2(\pi/3) = (1/2)^2 = 1/4$'),
  marks=1, time=60)

O('o.op.2.3.03', '2.3', 'MCQ',
  r'''What is the geometric shape of the fringes formed by two point sources on a flat screen placed **perpendicular** to the line joining the sources?''',
  [r'Concentric circles',
   r'Straight parallel lines',
   r'Equilateral hyperbolas',
   r'Parabolas'],
  'A',
  r'''<p>The 3D loci of constant path difference $S_2P - S_1P = \text{constant}$ are hyperboloids of revolution about the axis passing through $S_1$ and $S_2$.</p>
<p>When the screen is perpendicular to this axis of rotational symmetry, it cuts these coaxial hyperboloids of revolution in circular cross-sections, producing concentric circular fringes centered on the axis.</p>
<p>Straight parallel lines (B) and hyperbolas (C) are obtained only when the screen is parallel to the line joining the sources.</p>''',
  tested='3D geometry of interference fringes and the role of screen orientation',
  trap='Assuming fringes are always straight lines regardless of screen orientation',
  tests=['c.2.3.3'],
  twist=('What shape do the fringes take if the screen is parallel to the line of sources and placed far away?', r'Hyperbolas, which approximate straight parallel lines near the center'),
  marks=1, time=60)

O('o.op.2.3.04', '2.3', 'MSQ',
  r'''A thin transparent sheet of mica of thickness $t$ and refractive index $\mu = 1.5$ is placed in front of one of the slits in a Young\'s double-slit experiment. Which of the following statements are correct?''',
  [r'The entire fringe pattern shifts toward the side of the covered slit.',
   r'The fringe width $\beta$ increases by a factor of $\mu$.',
   r'The number of fringes crossing the central reference point is $(\mu - 1)t / \lambda$.',
   r'The additional optical path introduced into the beam by the sheet is $\mu t$.'],
  ['A', 'C'],
  r'''<p>Statement A is correct: introducing the plate retards light in that beam, so the point of zero optical path difference moves toward the covered slit by $\Delta x = \frac{(\mu - 1)t D}{d}$.</p>
<p>Statement B is incorrect: the fringe width $\beta = \lambda D / d$ depends purely on wavelength and apparatus geometry, and is unaffected by the plate.</p>
<p>Statement C is correct: the fringe shift in units of fringe width is $N = \frac{\Delta x}{\beta} = \frac{(\mu - 1)t}{\lambda}$.</p>
<p>Statement D is incorrect: the plate replaces a thickness $t$ of air (index 1), so the extra optical path introduced is $\mu t - 1\cdot t = (\mu - 1)t$, not $\mu t$.</p>''',
  tested='Effects of a transparent thin plate on fringe shift and fringe width in Young experiment',
  trap='Thinking fringe width changes or counting mu*t instead of (mu - 1)*t for the excess path',
  tests=['c.2.3.4'],
  twist=('What happens if identical sheets of thickness t and index mu are placed over both slits?', r'The shifts cancel out completely; the fringe pattern remains centered at x = 0'),
  marks=2, neg=0, time=90)

O('o.op.2.3.05', '2.3', 'NAT',
  r'''In a Young\'s double-slit experiment using light of wavelength $\lambda = 600\text{ nm}$, a thin glass plate ($\mu = 1.50$) is placed in front of one slit. The central bright fringe shifts to the position previously occupied by the 5th bright fringe. Calculate the thickness $t$ of the glass plate in micrometres ($\mu\text{m}$).''',
  None,
  {'value': 6.0, 'tol': 0.1, 'dp': 1},
  r'''<p>The fringe displacement produced by a plate of thickness $t$ and index $\mu$ is:
$$\Delta x = \frac{(\mu - 1)t D}{d}$$
Since the shift corresponds to 5 bright fringes, $\Delta x = 5\beta = 5\frac{\lambda D}{d}$:
$$(\mu - 1)t = 5\lambda \implies t = \frac{5\lambda}{\mu - 1}$$
Substituting $\lambda = 600\text{ nm} = 600 \times 10^{-9}\text{ m}$ and $\mu = 1.50$:
$$t = \frac{5 \times (600 \times 10^{-9}\text{ m})}{1.50 - 1.0} = \frac{3000 \times 10^{-9}\text{ m}}{0.50} = 6.0 \times 10^{-6}\text{ m} = 6.0\ \mu\text{m}$$</p>
<p>Using $\mu t = 5\lambda$ instead of $(\mu - 1)t$ is a standard trap that yields $2.0\ \mu\text{m}$.</p>''',
  tested='Determination of thin plate thickness from fringe displacement',
  trap='Using mu*t = N*lambda instead of (mu - 1)*t = N*lambda',
  tests=['c.2.3.4'],
  twist=('How many fringes would the same plate shift if illuminated by blue light of lambda = 500 nm?', r'$N = (\mu-1)t/\lambda = (0.50 \times 6.0\times 10^{-6}) / (500\times 10^{-9}) = 6$ fringes'),
  marks=2, neg=0, time=90)

# ── 2.4  Fresnel's two mirrors and biprism ─────────────────────────────────────

O('o.op.2.4.01', '2.4', 'MCQ',
  r'''In a Fresnel two-mirror experiment, a narrow slit is placed at a distance $a = 0.50\text{ m}$ from the intersection line of two plane mirrors inclined at an angle $\alpha = 0.002\text{ rad}$. The screen is placed at a distance $b = 1.50\text{ m}$ from the intersection line. If light of wavelength $\lambda = 500\text{ nm}$ is used, the fringe width on the screen is:''',
  [r'$0.25\text{ mm}$',
   r'$0.50\text{ mm}$',
   r'$0.75\text{ mm}$',
   r'$1.00\text{ mm}$'],
  'B',
  r'''<p>The separation between the two virtual sources formed by the mirrors is:
$$d = 2a\alpha = 2 \times 0.50\text{ m} \times 0.002\text{ rad} = 0.002\text{ m} = 2.0\text{ mm}$$
The distance from the virtual sources to the screen is:
$$D = a + b = 0.50 + 1.50 = 2.00\text{ m}$$
Using Young\'s fringe width formula:
$$\beta = \frac{\lambda D}{d} = \frac{500 \times 10^{-9}\text{ m} \times 2.00\text{ m}}{0.002\text{ m}} = 0.50 \times 10^{-3}\text{ m} = 0.50\text{ mm}$$</p>
<p>Distractor A ($0.25\text{ mm}$) uses $d = 4a\alpha$. Distractor C ($0.75\text{ mm}$) or D ($1.00\text{ mm}$) forgets the factor of $2$ in $d = 2a\alpha$, giving $d = 1.0\text{ mm} \implies \beta = 1.00\text{ mm}$. Another common error is setting $D = b = 1.50\text{ m}$ instead of $a+b$.</p>''',
  tested='Calculation of virtual source separation and fringe width in Fresnel two-mirror arrangement',
  trap='Setting D = b instead of a + b, or missing the factor of 2 in d = 2a alpha',
  tests=['c.2.4.1'],
  twist=('What is the distance d between the two virtual sources?', r'$d = 2a\alpha = 2.0\text{ mm}$'),
  marks=1, time=60)

O('o.op.2.4.02', '2.4', 'MCQ',
  r'''In a Fresnel biprism experiment, a convex lens placed between the biprism and the eyepiece forms sharp images of the virtual slits at two conjugate positions. If the measured slit separations at these two lens positions are $d_1 = 4.5\text{ mm}$ and $d_2 = 2.0\text{ mm}$, the actual distance $d$ between the virtual coherent sources is:''',
  [r'$6.5\text{ mm}$',
   r'$3.25\text{ mm}$',
   r'$2.25\text{ mm}$',
   r'$3.0\text{ mm}$'],
  'D',
  r'''<p>By the conjugate foci method, if the object distance and image distance interchange between the two lens positions, the magnifications are $m_1 = d_1/d = v_1/u_1$ and $m_2 = d_2/d = v_2/u_2 = u_1/v_1$. Therefore:
$$m_1 m_2 = 1 \implies \frac{d_1}{d} \times \frac{d_2}{d} = 1 \implies d = \sqrt{d_1 d_2}$$
Substituting $d_1 = 4.5\text{ mm}$ and $d_2 = 2.0\text{ mm}$:
$$d = \sqrt{4.5 \times 2.0} = \sqrt{9.0} = 3.0\text{ mm}$$</p>
<p>Distractor A ($6.5\text{ mm}$) adds $d_1 + d_2$. Distractor B ($3.25\text{ mm}$) incorrectly takes the arithmetic mean $(d_1+d_2)/2$. Distractor C ($2.25\text{ mm}$) computes the ratio $d_1/d_2$.</p>''',
  tested='Conjugate foci method for measuring virtual source separation in a biprism',
  trap='Using the arithmetic mean (d1 + d2)/2 instead of the geometric mean sqrt(d1 * d2)',
  tests=['c.2.4.2'],
  twist=('What is the product of the magnifications m1 * m2 at the two conjugate positions?', r'$m_1 m_2 = 1$'),
  marks=1, time=60)

O('o.op.2.4.03', '2.4', 'MCQ',
  r'''A Fresnel biprism has refractive index $\mu$ and a small refracting angle $\alpha$ for each prism half. A narrow slit is placed at distance $a$ from the biprism. What is the deviation $\delta_{\rm d}$ produced by each half of the biprism, and what is the resulting virtual source separation $d$?''',
  [r'$\delta_{\rm d} = \mu\alpha$, and $d = 2a\mu\alpha$',
   r'$\delta_{\rm d} = (\mu - 1)\alpha$, and $d = a(\mu - 1)\alpha$',
   r'$\delta_{\rm d} = (\mu - 1)\alpha$, and $d = 2a(\mu - 1)\alpha$',
   r'$\delta_{\rm d} = 2(\mu - 1)\alpha$, and $d = 4a(\mu - 1)\alpha$'],
  'C',
  r'''<p>For a thin prism of small refracting angle $\alpha$, the deviation at near-normal incidence is:
$$\delta_{\rm d} = (\mu - 1)\alpha$$
Each half of the biprism deflects light by $\delta_{\rm d}$, shifting the virtual source sideways by $a\delta_{\rm d} = a(\mu - 1)\alpha$. Because the two halves deflect in opposite directions, the total separation between the two virtual sources is:
$$d = 2a\delta_{\rm d} = 2a(\mu - 1)\alpha$$</p>
<p>Distractor A incorrectly uses $\mu\alpha$ instead of $(\mu-1)\alpha$. Distractor B misses the factor of $2$, accounting for only one prism half. Distractor D doubles the deviation angle unnecessarily.</p>''',
  tested='Thin-prism deviation and virtual source separation in Fresnel biprism',
  trap='Omitting the factor of 2 that accounts for both halves of the biprism',
  tests=['c.2.4.2'],
  twist=('If a = 0.2 m, mu = 1.5, and alpha = 0.01 rad, what is d?', r'$d = 2(0.2)(1.5-1)(0.01) = 2.0\text{ mm}$'),
  marks=1, time=60)

O('o.op.2.4.04', '2.4', 'MSQ',
  r'''Which of the following statements about Fresnel\'s biprism and Fresnel\'s two-mirror experiments are correct?''',
  [r'In both arrangements, interference fringes are observed across the entire viewing screen.',
   r'In both arrangements, two virtual coherent sources are produced from a single primary slit by division of wavefront.',
   r'Increasing the refracting angle $\alpha$ of the biprism increases the fringe width $\beta$.',
   r'The central fringe at the perpendicular bisector of the virtual sources is bright in both arrangements.'],
  ['B', 'D'],
  r'''<p>Statement A is incorrect: interference fringes exist only within the geometric region of overlap of the two dividing beams.</p>
<p>Statement B is correct: both systems produce two virtual copies of a single real slit via division of wavefront.</p>
<p>Statement C is incorrect: $\beta = \frac{\lambda(a+b)}{2a(\mu-1)\alpha}$. Increasing $\alpha$ increases the separation $d = 2a(\mu-1)\alpha$, which decreases the fringe width $\beta$.</p>
<p>Statement D is correct: at the perpendicular bisector, the optical path difference is zero. In the two-mirror setup, both beams suffer identical reflections ($\pi$ phase shifts cancel). In the biprism, both beams undergo refraction without reflection. Hence both have zero net phase difference at the center, making it bright.</p>''',
  tested='Wavefront division, fringe localization, and central fringe character in biprism and two mirrors',
  trap='Assuming fringes fill the entire field of view or that larger prism angle widens the fringes',
  tests=['c.2.4.1', 'c.2.4.2'],
  twist=('Why is there no net reflection phase difference in Fresnel’s two mirrors?', r'Both beams reflect from identical mirrors at identical grazing angles, so $\Delta\phi = \pi - \pi = 0$'),
  marks=2, neg=0, time=90)

O('o.op.2.4.05', '2.4', 'NAT',
  r'''In a Fresnel biprism experiment, light of wavelength $\lambda = 500\text{ nm}$ illuminates a slit located at distance $a = 0.20\text{ m}$ from a biprism of refractive index $\mu = 1.50$ and refracting angle $\alpha = 0.010\text{ rad}$. The screen is located at distance $b = 0.80\text{ m}$ from the biprism. Calculate the fringe width $\beta$ in millimetres ($\text{mm}$).''',
  None,
  {'value': 0.25, 'tol': 0.01, 'dp': 2},
  r'''<p>The total distance from the virtual sources to the screen is:
$$D = a + b = 0.20 + 0.80 = 1.00\text{ m}$$
The virtual source separation is:
$$d = 2a(\mu - 1)\alpha = 2 \times 0.20\text{ m} \times (1.50 - 1.0) \times 0.010\text{ rad} = 0.0020\text{ m} = 2.0\text{ mm}$$
The fringe width is therefore:
$$\beta = \frac{\lambda D}{d} = \frac{500 \times 10^{-9}\text{ m} \times 1.00\text{ m}}{0.0020\text{ m}} = 2.50 \times 10^{-4}\text{ m} = 0.25\text{ mm}$$</p>
<p>A frequent error is setting $D = b = 0.80\text{ m}$ instead of $a+b = 1.00\text{ m}$, which yields $0.20\text{ mm}$.</p>''',
  tested='Numerical calculation of biprism fringe width from optical and geometric parameters',
  trap='Using D = b = 0.80 m instead of D = a + b = 1.00 m',
  tests=['c.2.4.2'],
  twist=('What would the fringe width be if the screen distance were taken as b = 0.80 m only?', r'$\beta = 500\text{n} \times 0.80 / 0.0020 = 0.20\text{ mm}$'),
  marks=2, neg=0, time=90)

# ── 2.5  White light, Lloyd's mirror, phase change on reflection ───────────────

O('o.op.2.5.01', '2.5', 'MCQ',
  r'''In Lloyd\'s single-mirror interference experiment, the fringe formed at the line of contact with the mirror surface (where the geometric path difference is zero) is:''',
  [r'Dark, because reflection from the optically denser mirror introduces a phase change of $\pi$',
   r'Bright, because the geometric path difference between direct and reflected rays is zero',
   r'Coloured, because reflection at grazing incidence introduces chromatic dispersion',
   r'Shifted by $\lambda/4$ due to Brewster\'s angle condition'],
  'A',
  r'''<p>The direct beam travels straight from the slit to the screen without reflection. The reflected beam reflects from the mirror surface (rarer air to denser glass), which introduces an abrupt phase change of $\pi$ (equivalent to an added path difference of $\lambda/2$).</p>
<p>At the mirror edge where the geometric path difference is zero, the total phase difference between the two interfering waves is $\delta = \pi$. Therefore, destructive interference occurs, forming a dark fringe.</p>
<p>Distractor B overlooks the reflection phase flip. Distractors C and D cite irrelevant phenomena.</p>''',
  tested='Phase change on reflection and the character of the central fringe in Lloyd mirror',
  trap='Assuming zero geometric path difference always produces a bright fringe as in Young experiment',
  tests=['c.2.5.2', 'c.2.5.3'],
  twist=('What would be observed at the edge if the mirror were optically rarer than the surrounding medium?', r'No phase change would occur on reflection, making the zero-path fringe bright'),
  marks=1, time=60)

O('o.op.2.5.02', '2.5', 'MCQ',
  r'''According to Stokes\' relations based on the principle of optical reversibility, if $r, t$ are amplitude reflection and transmission coefficients for light incident from medium 1 into medium 2, and $r\', t\'$ are the corresponding coefficients from medium 2 into medium 1, which relation must hold?''',
  [r'$r\' = r$ and $tt\' = 1 + r^2$',
   r'$r\' = -r$ and $tt\' = 1 - r^2$',
   r'$r\' = -r$ and $tt\' = 1$',
   r'$r\' = 1 - r$ and $t\' = 1 - t$'],
  'B',
  r'''<p>By applying the principle of optical reversibility to a wave incident on a plane interface between two non-absorbing media, Stokes showed that reversing the reflected and transmitted waves must retrace the original incident beam without generating any backward beam into the second medium:</p>
<p>$$r^2 + t\,t\' = 1 \implies t\,t\' = 1 - r^2$$
$$r\,t + t\,r\' = 0 \implies r\' = -r$$
The relation $r\' = -r$ proves that reflection from one side introduces a relative phase change of $\pi$ compared to reflection from the other side.</p>''',
  tested='Stokes relations and phase change on reflection from optical reversibility',
  trap='Assuming reflection coefficients from both sides have the same sign (r = r_prime)',
  tests=['c.2.5.3'],
  twist=('What physical law underlies the Stokes relations?', r'The principle of optical reversibility in lossless media'),
  marks=1, time=60)

O('o.op.2.5.03', '2.5', 'MCQ',
  r'''When white light is used to illuminate a Young\'s double-slit or Fresnel biprism apparatus, what is observed on the screen?''',
  [r'A dark central fringe bordered by white fringes on either side',
   r'No fringes at all because white light is completely incoherent',
   r'A central white fringe, bordered on either side by fringes that are violet on the inner edge and red on the outer edge',
   r'A continuous array of thousands of sharp coloured fringes across the entire screen'],
  'C',
  r'''<p>At the center ($\Delta = 0$), all wavelengths satisfy the constructive interference condition simultaneously, creating an achromatic white central fringe.</p>
<p>Since fringe width $\beta = \lambda D/d$ is proportional to wavelength, $\beta_{\rm violet} < \beta_{\rm red}$. As a result, the violet maximum of the first order lies closest to the center (inner edge), while the red maximum lies farther out (outer edge).</p>
<p>After 6 to 8 orders, the overlapping of different colours averages out to uniform white illumination.</p>''',
  tested='Appearance and colour distribution of white-light interference fringes',
  trap='Swapping the ordering of violet and red edges by forgetting lambda_violet < lambda_red',
  tests=['c.2.5.1'],
  twist=('Why do fringes wash out after only a few orders in white light?', r'Higher orders of shorter wavelengths overlap with lower orders of longer wavelengths ($m\lambda_{\rm red} \approx (m+1)\lambda_{\rm violet}$)'),
  marks=1, time=60)

O('o.op.2.5.04', '2.5', 'MSQ',
  r'''In a Lloyd\'s mirror experiment, a narrow slit $S$ is placed parallel to and at a height $h$ above a plane glass mirror. A screen is positioned at distance $D$ from the slit. Which of the following statements are correct?''',
  [r'The separation between the effective coherent sources is $d = 2h$.',
   r'The fringe width on the screen is given by $\beta = \lambda D / h$.',
   r'Both the upper and lower halves of the standard two-slit pattern are visible on the screen.',
   r'The positions of the bright fringes correspond to path differences $\Delta = (m + \frac{1}{2})\lambda$, where $m = 0, 1, 2, \dots$.'],
  ['A', 'D'],
  r'''<p>Statement A is correct: the mirror creates a virtual image $S\'$ at depth $h$ below the mirror surface, so the source separation is $d = h - (-h) = 2h$.</p>
<p>Statement B is incorrect: the fringe width is $\beta = \frac{\lambda D}{d} = \frac{\lambda D}{2h}$, missing a factor of 2.</p>
<p>Statement C is incorrect: reflected rays only travel into the region above the plane of the mirror, so only the upper half of the fringe pattern is formed.</p>
<p>Statement D is correct: due to the $\pi$ phase change on reflection, the condition for constructive interference is $\Delta + \lambda/2 = (m+1)\lambda \implies \Delta = (m + \frac{1}{2})\lambda$.</p>''',
  tested='Effective source separation, fringe width, and fringe positions in Lloyd mirror',
  trap='Missing factor of 2 in fringe width or assuming both halves of the pattern exist',
  tests=['c.2.5.2'],
  twist=('What is the path difference condition for dark fringes in Lloyd\'s mirror?', r'$\Delta = m\lambda$, with the zeroth dark fringe at the mirror boundary'),
  marks=2, neg=0, time=90)

O('o.op.2.5.05', '2.5', 'NAT',
  r'''In a Lloyd\'s mirror experiment, a slit illuminated by monochromatic light of wavelength $\lambda = 600\text{ nm}$ is placed at a height $h = 1.0\text{ mm}$ above the mirror. The screen is placed at a distance $D = 2.0\text{ m}$ from the slit. Calculate the fringe width $\beta$ in millimetres ($\text{mm}$).''',
  None,
  {'value': 0.60, 'tol': 0.02, 'dp': 2},
  r'''<p>In Lloyd\'s mirror, the effective separation between the slit and its virtual image is $d = 2h$:
$$d = 2 \times 1.0\text{ mm} = 2.0 \times 10^{-3}\text{ m}$$
The fringe width is:
$$\beta = \frac{\lambda D}{2h} = \frac{600 \times 10^{-9}\text{ m} \times 2.0\text{ m}}{2.0 \times 10^{-3}\text{ m}} = 0.60 \times 10^{-3}\text{ m} = 0.60\text{ mm}$$</p>
<p>Using $d = h$ instead of $d = 2h$ is a common blunder that results in $1.20\text{ mm}$.</p>''',
  tested='Calculation of fringe width in Lloyd mirror arrangement',
  trap='Using d = h instead of d = 2h',
  tests=['c.2.5.2'],
  twist=('What is the distance from the mirror surface to the first bright fringe on the screen?', r'$x_1 = \beta / 2 = 0.30\text{ mm}$'),
  marks=2, neg=0, time=90)

# ── 2.6  Division of amplitude: thin parallel films ────────────────────────────

O('o.op.2.6.01', '2.6', 'MCQ',
  r'''A plane-parallel dielectric film of refractive index $\mu$ and uniform thickness $t$ is illuminated in air by light of wavelength $\lambda$ at angle of refraction $r$. What is the condition for constructive interference (maximum brightness) in the **reflected** light?''',
  [r'$2\mu t \cos r = m\lambda$',
   r'$2\mu t \sin r = (m + \frac{1}{2})\lambda$',
   r'$2\mu t \cos i = (m + \frac{1}{2})\lambda$',
   r'$2\mu t \cos r = (m + \frac{1}{2})\lambda$'],
  'D',
  r'''<p>The geometric optical path difference between the beams reflected from the top and bottom surfaces is $\Delta = 2\mu t \cos r$.</p>
<p>The reflection at the upper surface (air to film, rarer to denser) undergoes a phase change of $\pi$ ($\lambda/2$ path equivalent). The reflection at the bottom surface (film to air, denser to rarer) undergoes no phase change. Thus the effective path difference is $\Delta_{\rm eff} = 2\mu t \cos r - \lambda/2$.</p>
<p>For constructive interference:
$$2\mu t \cos r - \frac{\lambda}{2} = m\lambda \implies 2\mu t \cos r = \left(m + \frac{1}{2}\right)\lambda$$</p>
<p>Distractor A is the condition for dark fringes in reflection (or bright in transmission). Distractor B uses $\sin r$ instead of $\cos r$. Distractor C uses the angle of incidence $i$ rather than the angle of refraction $r$ inside the film.</p>''',
  tested='Cosine law and reflection interference condition for thin parallel films',
  trap='Forgetting the phase change of pi on reflection or confusing angle i with angle r',
  tests=['c.2.6.1'],
  twist=('What is the condition for constructive interference in transmitted light?', r'$2\mu t\cos r = m\lambda$ (no relative reflection phase shift)'),
  marks=1, time=60)

O('o.op.2.6.02', '2.6', 'MCQ',
  r'''A non-reflecting (anti-reflection) single-layer coating of refractive index $n_f$ and thickness $t$ is deposited on a crown glass substrate of index $n_g = 1.69$ in air ($n_0 = 1.0$). For complete destructive cancellation of reflected light of wavelength $\lambda = 520\text{ nm}$ at normal incidence, the ideal index $n_f$ and minimum thickness $t$ are:''',
  [r'$n_f = 1.30$, and $t = 100\text{ nm}$',
   r'$n_f = 1.30$, and $t = 130\text{ nm}$',
   r'$n_f = 1.69$, and $t = 100\text{ nm}$',
   r'$n_f = 1.44$, and $t = 90\text{ nm}$'],
  'A',
  r'''<p>For equal amplitudes of the two reflected beams, the refractive index must satisfy:
$$n_f = \sqrt{n_0 n_g} = \sqrt{1.0 \times 1.69} = 1.30$$
Since $n_0 < n_f < n_g$, both the air-coating reflection and coating-glass reflection occur at rarer-to-denser boundaries; each suffers a $\pi$ phase change, giving zero relative phase change from reflection.</p>
<p>Destructive interference requires the round-trip optical path to equal $\lambda/2$:
$$2 n_f t = \frac{\lambda}{2} \implies t = \frac{\lambda}{4 n_f} = \frac{520\text{ nm}}{4 \times 1.30} = 100\text{ nm}$$</p>
<p>Distractor B uses $t = \lambda/4 = 130\text{ nm}$ (forgetting the refractive index in the film). Distractor C sets $n_f = n_g$. Distractor D miscalculates the index.</p>''',
  tested='Design criteria for single-layer anti-reflection coatings (refractive index and thickness)',
  trap='Omitting the film index in the denominator of the quarter-wave thickness formula',
  tests=['c.2.6.2'],
  twist=('Why do camera lenses coated with MgF2 (n = 1.38) appear bluish-purple under daylight?', r'The coating is optimized for green ($\sim 550\text{ nm}$); red and violet reflect slightly, giving purple'),
  marks=1, time=60)

O('o.op.2.6.03', '2.6', 'MCQ',
  r'''In the multiple-beam reflection formula for a dielectric layer, $R = \frac{r_1^2 + r_2^2 + 2r_1 r_2 \cos\delta}{1 + r_1^2 r_2^2 + 2r_1 r_2 \cos\delta}$, under what physical condition does the simple two-beam cosine law provide an accurate approximation?''',
  [r'When the internal phase difference is an odd multiple of $\pi$',
   r'When the product of amplitude reflection coefficients $r_1 r_2 \ll 1$',
   r'When the film thickness is much greater than the coherence length',
   r'When the reflection coefficients approach unity ($r_1, r_2 \to 1$)'],
  'B',
  r'''<p>The multiple-beam formula sums an infinite geometric series of internal reflections, where each successive round trip decreases in amplitude by a factor $r_1\' r_2 = -r_1 r_2$.</p>
<p>When $r_1 r_2 \ll 1$ (low-reflectivity dielectric boundaries, such as an air-glass interface where $r \approx 0.2$), higher-order terms of order $(r_1 r_2)^2$ in the denominator are negligible, so $1 + r_1^2 r_2^2 + 2r_1 r_2\cos\delta \approx 1$. Thus, only the first two reflected rays contribute significantly.</p>
<p>When $r_1, r_2 \to 1$ (Option D), multiple reflections produce sharp Airy fringes rather than two-beam sinusoids.</p>''',
  tested='Validity condition of the two-beam interference approximation in thin films',
  trap='Confusing low-reflectivity limits with resonance conditions or high-finesse cavities',
  tests=['c.2.6.3'],
  twist=('Which optical instrument strictly requires the multiple-beam Airy formula because r is close to 1?', r'The Fabry-Pérot interferometer'),
  marks=1, time=60)

O('o.op.2.6.04', '2.6', 'MSQ',
  r'''A thin soap film of refractive index $\mu = 1.33$ surrounded by air is illuminated normally by light. Which of the following statements are correct?''',
  [r'A film whose physical thickness $t \ll \lambda$ appears brilliantly bright in reflected light.',
   r'As the film drains and its thickness approaches zero ($t \to 0$), it appears completely black in reflection.',
   r'The reflected and transmitted fringe patterns are complementary in intensity ($I_{\rm ref} + I_{\rm trans} = I_{\rm inc}$ for a non-absorbing film).',
   r'The minimum non-zero thickness of the film for maximum reflection of wavelength $\lambda$ is $t = \lambda / (4\mu)$.'],
  ['B', 'C', 'D'],
  r'''<p>Statement A is incorrect and Statement B is correct: for $t \ll \lambda$, the round-trip path difference $2\mu t \to 0$. However, the top reflection has a $\pi$ phase flip while the bottom reflection has none. The net phase difference is $\pi$, producing destructive interference (a black film) just before it ruptures.</p>
<p>Statement C is correct: by conservation of energy in non-absorbing media, whatever light is not reflected is transmitted, making the reflected and transmitted patterns strictly complementary.</p>
<p>Statement D is correct: for constructive interference in reflection, $2\mu t = (m + \frac{1}{2})\lambda$. For $m = 0$, $t_{\min} = \frac{\lambda}{4\mu}$.</p>''',
  tested='Thin film limiting behaviour as t -> 0, energy conservation, and minimum thickness',
  trap='Assuming t -> 0 gives constructive interference because path difference approaches zero',
  tests=['c.2.6.1'],
  twist=('What would the appearance of a film with t -> 0 be if it had a rarer medium above and a denser medium below?', r'Both reflections would undergo a $\pi$ flip, making the film appear bright'),
  marks=2, neg=0, time=90)

O('o.op.2.6.05', '2.6', 'NAT',
  r'''Light of wavelength $\lambda = 560\text{ nm}$ in air is incident normally on a thin oil film ($\mu = 1.40$) floating on water ($\mu_w = 1.33$). Calculate the minimum thickness $t$ of the oil film in nanometres ($\text{nm}$) for which the reflected light shows maximum brightness (constructive interference).''',
  None,
  {'value': 100.0, 'tol': 2.0, 'dp': 1},
  r'''<p>Let us analyze the phase changes at both interfaces:
<ul><li>Top interface (air $n_1 = 1.0$ to oil $n_2 = 1.40$): reflection is from rarer to denser, so a phase change of $\pi$ occurs.</li>
<li>Bottom interface (oil $n_2 = 1.40$ to water $n_3 = 1.33$): reflection is from denser to rarer ($1.40 > 1.33$), so NO phase change occurs.</li></ul>
The net reflection phase difference is $\pi$ (equivalent to an optical path difference of $\lambda/2$).</p>
<p>For constructive interference in reflection at normal incidence ($\cos r = 1$):
$$2\mu t - \frac{\lambda}{2} = m\lambda \implies 2\mu t = \left(m + \frac{1}{2}\right)\lambda$$
For the minimum non-zero thickness, set $m = 0$:
$$2\mu t = \frac{\lambda}{2} \implies t = \frac{\lambda}{4\mu} = \frac{560\text{ nm}}{4 \times 1.40} = \frac{560}{5.60}\text{ nm} = 100.0\text{ nm}$$</p>''',
  tested='Thin film reflection conditions with asymmetric refractive index boundary steps',
  trap='Assuming both reflections have a phase change of pi (oil on water has n_oil > n_water)',
  tests=['c.2.6.1'],
  twist=('If the oil film were on flint glass (n = 1.65) instead of water, what would the minimum thickness be?', r'Both reflections would suffer $\pi$ shifts, so $2\mu t = \lambda \implies t = \lambda/(2\mu) = 200.0\text{ nm}$'),
  marks=2, neg=0, time=90)

# ── 2.7  Wedges, Newton's rings and the Michelson interferometer ───────────────

O('o.op.2.7.01', '2.7', 'MCQ',
  r'''In a Newton\'s rings experiment viewed in reflected light, the diameter of the $n$-th dark ring is $D_n$. Which relationship correctly describes how $D_n$ scales with the ring order $n$, wavelength $\lambda$, and radius of curvature $R$ of the lens?''',
  [r'$D_n \propto n \lambda R$',
   r'$D_n \propto \sqrt{\frac{n\lambda}{R}}$',
   r'$D_n \propto \sqrt{n \lambda R}$',
   r'$D_n \propto n^2 \lambda R$'],
  'C',
  r'''<p>For a lens of radius of curvature $R$, the thickness of the circular air film at radius $r$ is $t \approx r^2 / (2R)$.</p>
<p>The condition for a dark ring in reflected light (including the $\pi$ phase flip at the plate) is $2t = n\lambda$:
$$\frac{r_n^2}{R} = n\lambda \implies r_n = \sqrt{n\lambda R}$$
Since diameter $D_n = 2r_n$:
$$D_n = 2\sqrt{n\lambda R} \propto \sqrt{n\lambda R}$$</p>
<p>Distractor A confuses diameter with squared diameter ($D_n^2 \propto n\lambda R$). Distractor B inverts the dependence on $R$. Distractor D uses an incorrect quadratic dependence on $n$.</p>''',
  tested='Scaling behaviour of Newton dark ring diameters with order, wavelength, and curvature',
  trap='Confusing diameter D_n with diameter squared D_n^2',
  tests=['c.2.7.3'],
  twist=('What happens to the dark ring diameters if the air gap is filled with water (mu = 4/3)?', r'They shrink by a factor of $1/\sqrt{\mu} = \sqrt{3}/2 \approx 0.866$'),
  marks=1, time=60)

O('o.op.2.7.02', '2.7', 'MCQ',
  r'''In a Michelson interferometer illuminated by monochromatic light of wavelength $\lambda = 500\text{ nm}$, moving one of the mirrors by a distance of $0.05\text{ mm}$ causes how many fringes to shift across the cross-wire?''',
  [r'50',
   r'100',
   r'150',
   r'200'],
  'D',
  r'''<p>When one mirror is moved by $\Delta d$, the light travels this extra distance twice (forward and backward), changing the round-trip optical path difference by $2\Delta d$.</p>
<p>Each fringe shift corresponds to a path change of $\lambda$:
$$N = \frac{2\Delta d}{\lambda}$$
Substituting $\Delta d = 0.05\text{ mm} = 5.0 \times 10^{-5}\text{ m}$ and $\lambda = 500\text{ nm} = 5.0 \times 10^{-7}\text{ m}$:
$$N = \frac{2 \times (5.0 \times 10^{-5}\text{ m})}{5.0 \times 10^{-7}\text{ m}} = 200$$</p>
<p>Distractor B ($100$) forgets the double-pass factor of $2$, computing $\Delta d/\lambda$. Distractor A ($50$) divides by $2$ instead of multiplying.</p>''',
  tested='Calculation of fringe shift from mirror displacement in Michelson interferometer',
  trap='Forgetting the factor of 2 arising from the double pass of light in the interferometer arm',
  tests=['c.2.7.4'],
  twist=('What mirror displacement corresponds to the shift of exactly one fringe?', r'$\Delta d = \lambda/2 = 250\text{ nm}$'),
  marks=1, time=60)

O('o.op.2.7.03', '2.7', 'MCQ',
  r'''Haidinger fringes formed by a plane-parallel plate and Fizeau fringes formed by a wedge-shaped film are classified respectively as:''',
  [r'Fringes of equal inclination, and fringes of equal thickness',
   r'Fringes of equal thickness, and fringes of equal inclination',
   r'Both are fringes of equal inclination',
   r'Both are fringes of equal thickness'],
  'A',
  r'''<p><b>Haidinger fringes:</b> in a plane-parallel plate, thickness $t$ is constant across the entire film. The path difference $2\mu t \cos r$ varies only with the angle of inclination $r$. Rays of a given inclination form a circle at infinity; these are <b>fringes of equal inclination</b>.</p>
<p><b>Fizeau fringes:</b> in a wedge-shaped film viewed at a fixed angle (normally $r \approx 0$), $\cos r$ is constant and the path difference varies with the local film thickness $t(x)$. The fringes trace contours of constant $t$; these are <b>fringes of equal thickness</b>, localized on the film.</p>''',
  tested='Classification and distinction between fringes of equal inclination and equal thickness',
  trap='Swapping the definitions of Haidinger fringes and Fizeau fringes',
  tests=['c.2.7.5'],
  twist=('Where are Haidinger fringes localized in space?', r'At infinity; they are observed with a telescope focused for parallel rays'),
  marks=1, time=60)

O('o.op.2.7.04', '2.7', 'MSQ',
  r'''Which of the following statements about Newton\'s rings and wedge-shaped thin films in reflected light are correct?''',
  [r'The central spot in Newton\'s rings formed by reflection from an air film is dark.',
   r'For an air wedge of small angle $\alpha$, the fringe spacing is given by $\beta = \lambda / (2\alpha)$.',
   r'The radii of successive dark Newton\'s rings are directly proportional to the integer order $n$.',
   r'If a liquid of refractive index $\mu > 1$ fills the gap between the lens and the plate, all Newton ring diameters decrease.'],
  ['A', 'B', 'D'],
  r'''<p>Statement A is correct: at the point of contact $t = 0$, but reflection at the lower glass plate introduces a $\pi$ phase change, causing destructive interference (a dark center).</p>
<p>Statement B is correct: dark fringes occur at $2t = m\lambda$ with $t = x\alpha \implies x_m = m\lambda/(2\alpha)$, so $\beta = x_{m+1} - x_m = \lambda/(2\alpha)$.</p>
<p>Statement C is incorrect: $r_n = \sqrt{n\lambda R}$, so radii are proportional to $\sqrt{n}$, not $n$.</p>
<p>Statement D is correct: with liquid of index $\mu$, $D_n = 2\sqrt{n\lambda R / \mu}$, so every ring diameter shrinks by a factor of $1/\sqrt{\mu}$.</p>''',
  tested='Properties, fringe spacing, and scaling laws of Newton rings and wedge films',
  trap='Assuming ring radii scale linearly with order n rather than sqrt(n)',
  tests=['c.2.7.1', 'c.2.7.3'],
  twist=('How can the central spot in Newton\'s rings be made bright in reflection?', r'By introducing a liquid whose refractive index lies between that of the lens and plate ($n_{\rm lens} < n_{\rm liq} < n_{\rm plate}$)'),
  marks=2, neg=0, time=90)

O('o.op.2.7.05', '2.7', 'NAT',
  r'''In a Michelson interferometer illuminated by sodium light ($\lambda \approx 589.3\text{ nm}$), circular fringes are observed. As one of the mirrors is slowly moved, the fringe pattern periodically blurs (vanishes) and sharpens (reappears). If the mirror displacement between two consecutive vanishings is $\Delta d = 0.29\text{ mm}$, calculate the wavelength difference $\Delta\lambda$ between the two sodium D-lines in nanometres ($\text{nm}$).''',
  None,
  {'value': 0.60, 'tol': 0.02, 'dp': 2},
  r'''<p>The sodium doublet consists of two close spectral lines $\lambda_1$ and $\lambda_2$. Between two consecutive disappearances, the order of interference of one line changes by 1 relative to the other:
$$\frac{2\Delta d}{\lambda_1} - \frac{2\Delta d}{\lambda_2} = 1 \implies 2\Delta d \frac{\Delta\lambda}{\lambda^2} \approx 1$$
$$\Delta\lambda = \frac{\lambda^2}{2\Delta d}$$
Substituting $\lambda = 589.3\text{ nm} = 589.3 \times 10^{-9}\text{ m}$ and $\Delta d = 0.29\text{ mm} = 0.29 \times 10^{-3}\text{ m}$:
$$\Delta\lambda = \frac{(589.3 \times 10^{-9})^2}{2 \times 0.29 \times 10^{-3}} = \frac{3.4727 \times 10^{-13}}{5.8 \times 10^{-4}} = 5.987 \times 10^{-10}\text{ m} \approx 0.60\text{ nm}$$</p>''',
  tested='Measurement of doublet wavelength splitting using Michelson interferometer visibility cycles',
  trap='Forgetting the factor of 2 in the denominator (using Delta lambda = lambda^2 / Delta d)',
  tests=['c.2.7.4'],
  twist=('What mirror displacement corresponds to the first appearance of minimum visibility starting from zero path difference?', r'$\Delta d / 2 = 0.145\text{ mm}$'),
  marks=2, neg=0, time=90)

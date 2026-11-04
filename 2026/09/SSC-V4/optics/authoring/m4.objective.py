# Module IV — Polarisation: Objective Questions (OMR)
# 5 questions per section (3 MCQ, 1 MSQ, 1 NAT) for sections 4.1 to 4.6.

# ── 4.1  Introduction ──────────────────────────────────────────────────────────

O('o.op.4.1.01', '4.1', 'MCQ',
  r'''<p>A plane monochromatic electromagnetic wave propagates in free space along the $+z$-direction. The electric field vector oscillates along the $x$-axis. According to the standard conventions of wave optics, what are the <b>plane of vibration</b> and the <b>plane of polarisation</b> of this wave?</p>''',
  [r'''Plane of vibration is the $xz$-plane; plane of polarisation is the $yz$-plane.''',
   r'''Plane of vibration is the $yz$-plane; plane of polarisation is the $xz$-plane.''',
   r'''Both the plane of vibration and plane of polarisation are the $xz$-plane.''',
   r'''Plane of vibration is the $xy$-plane; plane of polarisation is the $xz$-plane.'''],
  'A',
  r'''<p>The <b>plane of vibration</b> contains the electric field vector $\mathbf{E}$ (along $x$) and the direction of propagation (along $z$), which defines the $xz$-plane. Historically, the <b>plane of polarisation</b> is defined as the plane perpendicular to the plane of vibration, containing the magnetic field vector $\mathbf{B}$ (along $y$) and the direction of propagation (along $z$), which is the $yz$-plane. Distractor B reverses these definitions; C ignores the historical convention separating the two planes; D wrongly picks the transverse wavefront plane ($xy$-plane).</p>''',
  "Distinction between the plane of vibration (E-vector) and historical plane of polarisation (B-vector)",
  "Confusing the plane of vibration (containing E) with the plane of polarisation (perpendicular to E)",
  ['c.4.1.1'],
  twist=(r"If the electric field oscillates along the $y$-axis instead, what is the plane of polarisation?",
         r"The $xz$-plane (perpendicular to the electric field $\mathbf{E}$)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.1.02', '4.1', 'MCQ',
  r'''<p>Two mutually perpendicular harmonic oscillations of the same angular frequency $\omega$ are given by $x = 3\cos(\omega t)$ and $y = 4\cos(\omega t + \pi)$. The resulting state of polarisation is:</p>''',
  [r'''Elliptical polarisation with semi-axes 3 and 4 along the coordinate axes''',
   r'''Linear polarisation along the line $y = -\frac{4}{3}x$''',
   r'''Linear polarisation along the line $y = +\frac{4}{3}x$''',
   r'''Circular polarisation of radius 5'''],
  'B',
  r'''<p>Since $\cos(\omega t + \pi) = -\cos(\omega t)$, we have $y/4 = -x/3$, which gives the equation of a straight line $y = -\frac{4}{3}x$. The phase difference is $\delta = \pi$, so the general polarisation ellipse collapses to $\left(\frac{x}{3} + \frac{y}{4}\right)^2 = 0$, representing linearly polarised light vibrating in the second and fourth quadrants. Distractor A mistakenly assumes an ellipse because the amplitudes are unequal; C forgets the sign change from $\cos\pi = -1$; D confuses superposition of orthogonal waves with vector addition of amplitudes.</p>''',
  "Superposition of perpendicular vibrations at phase difference pi",
  "Missing the negative sign in y/b = -x/a for delta = pi",
  ['c.4.1.2'],
  twist=(r"What polarisation state is obtained if the phase difference is changed to $\delta = 0$?",
         r"Linear polarisation along $y = +\frac{4}{3}x$."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.1.03', '4.1', 'MCQ',
  r'''<p>Two perpendicular light waves are represented by $x = 4\cos(\omega t)$ and $y = 3\sin(\omega t)$ in arbitrary units. The state of polarisation and the trajectory traced by the electric field vector in the $xy$-plane are:</p>''',
  [r'''Circularly polarised light tracing $x^2 + y^2 = 25$''',
   r'''Linearly polarised light tracing $y = \frac{3}{4}x$''',
   r'''Elliptically polarised light tracing $\frac{x^2}{16} + \frac{y^2}{9} = 1$''',
   r'''Elliptically polarised light with major axis inclined at $45^\circ$ to the $x$-axis'''],
  'C',
  r'''<p>Writing $y = 3\cos(\omega t - \pi/2)$, the phase difference between the two components is $\delta = -\pi/2$. Substituting $\cos\delta = 0$ and $\sin^2\delta = 1$ into the general polarisation ellipse gives $\frac{x^2}{4^2} + \frac{y^2}{3^2} = 1$, which is an ellipse whose semi-major and semi-minor axes lie along the coordinate axes ($x$ and $y$). Because $a = 4 \neq b = 3$, the light is elliptical, not circular. Distractor A incorrectly assumes $\delta = \pi/2$ always yields circular polarisation regardless of amplitudes; B assumes $\sin$ and $\cos$ combine linearly; D incorrectly thinks the ellipse is tilted at $45^\circ$.</p>''',
  "Identification of elliptical polarisation with axes along coordinate axes for delta = pi/2 and unequal amplitudes",
  "Assuming delta = pi/2 always produces circular polarisation regardless of amplitudes",
  ['c.4.1.2'],
  twist=(r"What amplitude $a$ would make the resulting polarisation circular?",
         r"$a = 3$ (equal to $b$)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.1.04', '4.1', 'MSQ',
  r'''<p>Which of the following statements regarding electromagnetic wave polarisation are <b>CORRECT</b>?</p>''',
  [r'''The phenomenon of polarisation proves that light waves are transverse, because longitudinal waves cannot exhibit polarisation.''',
   r'''In linearly polarised light, the plane containing the magnetic field vector $\mathbf{B}$ and the wave propagation vector $\mathbf{k}$ is the plane of polarisation.''',
   r'''Superposing two orthogonal harmonic oscillations of equal frequency with a phase difference $\delta = \pi/2$ always produces circularly polarised light.''',
   r'''Natural (unpolarised) light consists of electromagnetic waves where the electric field direction varies randomly and rapidly on a timescale faster than optical detectors can resolve.'''],
  ['A', 'B', 'D'],
  r'''<p>Statements A, B, and D are correct:
<ul>
<li><b>A</b> is true: only transverse waves have vibration directions perpendicular to propagation that can be selected.</li>
<li><b>B</b> is true: historically, the plane of polarisation is perpendicular to the electric field $\mathbf{E}$ and contains $\mathbf{B}$ and $\mathbf{k}$.</li>
<li><b>C</b> is false: $\delta = \pi/2$ produces circular polarisation only if the orthogonal amplitudes are equal ($a = b$); if $a \neq b$, it produces elliptical polarisation.</li>
<li><b>D</b> is true: natural light consists of independent atomic emissions with rapidly fluctuating phases and orientations.</li>
</ul></p>''',
  "Fundamental principles of wave polarisation and conditions for circular polarisation",
  "Thinking delta = pi/2 always guarantees circular polarisation even when amplitudes differ",
  ['c.4.1.1', 'c.4.1.2'],
  twist=(r"Does unpolarised light have a constant non-zero phase relationship between orthogonal field components?",
         r"No, the relative phase fluctuates randomly on femtosecond timescales."),
  marks=2, neg=0, time=60)

O('o.op.4.1.05', '4.1', 'NAT',
  r'''<p>Two mutually perpendicular harmonic oscillations of the same angular frequency are given by $x = 3.0\cos(\omega t)\text{ cm}$ and $y = 4.0\cos(\omega t + \pi/3)\text{ cm}$. They combine to form a polarisation ellipse. Calculate the positive $y$-intercept of this ellipse (the value of $y$ in cm when $x = 0$). (Round off to two decimal places.)</p>''',
  None,
  {'value': 3.46, 'tol': 0.05, 'dp': 2},
  r'''<p>The equation of the polarisation ellipse formed by $x = a\cos\omega t$ and $y = b\cos(\omega t + \delta)$ is
$$\frac{x^2}{a^2} + \frac{y^2}{b^2} - \frac{2xy}{ab}\cos\delta = \sin^2\delta.$$
Setting $x = 0$ gives:
$$\frac{y^2}{b^2} = \sin^2\delta \implies y = \pm b\sin\delta.$$
With $b = 4.0\text{ cm}$ and $\delta = \pi/3$ ($60^\circ$):
$$y = 4.0 \times \sin(60^\circ) = 4.0 \times \frac{\sqrt{3}}{2} \approx 3.464\text{ cm} \approx 3.46\text{ cm}.$$
An answer of $4.00\text{ cm}$ comes from erroneously assuming $y = b$ at $x = 0$ (which only holds when $\delta = \pi/2$).</p>''',
  "Finding coordinates and intercepts from the general polarisation ellipse equation",
  "Assuming y = b at x = 0 instead of y = b sin(delta)",
  ['c.4.1.2'],
  twist=(r"What is the positive $x$-intercept of the same ellipse when $y = 0$?",
         r"$x = a\sin\delta = 3.0\times\frac{\sqrt{3}}{2} \approx 2.60\text{ cm}$."),
  marks=2, neg=0, time=90)

# ── 4.2  Production of linearly polarised light ────────────────────────────────

O('o.op.4.2.01', '4.2', 'MCQ',
  r'''<p>A ray of unpolarised light travelling in air strikes the surface of a transparent glass block of refractive index $n = \sqrt{3} \approx 1.732$. If the angle of incidence is adjusted such that the reflected light is completely plane-polarised, what is the angle of refraction $\theta_r$ inside the glass?</p>''',
  [r'''$60^\circ$''',
   r'''$45^\circ$''',
   r'''$35.3^\circ$''',
   r'''$30^\circ$'''],
  'D',
  r'''<p>By Brewster's law, the polarising angle $\theta_B$ satisfies $\tan\theta_B = n = \sqrt{3}$, which gives $\theta_B = 60^\circ$. At Brewster's angle, the reflected and refracted rays are mutually perpendicular, so $\theta_B + \theta_r = 90^\circ$. Therefore, the angle of refraction is $\theta_r = 90^\circ - 60^\circ = 30^\circ$. Distractor A gives the incident Brewster angle $\theta_B$ rather than the angle of refraction $\theta_r$; B is for $n = 1$; C comes from misapplying Snell's law or trigonometric inverses.</p>''',
  "Brewster's law and the perpendicularity of reflected and refracted rays",
  "Reporting the Brewster angle of incidence instead of the refracted angle",
  ['c.4.2.1'],
  twist=(r"What is the Brewster angle if light is incident from glass ($n = \sqrt{3}$) into air?",
         r"$\theta_B = \tan^{-1}(1/\sqrt{3}) = 30^\circ$."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.2.02', '4.2', 'MCQ',
  r'''<p>In a pile of plates arrangement containing several parallel glass plates oriented at Brewster's angle $\theta_B$ to the incident beam, what is the nature and vibration direction of the emerging <b>transmitted</b> beam?</p>''',
  [r'''Partially or highly plane-polarised, with electric vibrations parallel to (in) the plane of incidence''',
   r'''Completely plane-polarised, with electric vibrations perpendicular to the plane of incidence''',
   r'''Circularly polarised due to multiple internal reflections''',
   r'''Completely unpolarised because only reflected light can be polarised'''],
  'A',
  r'''<p>At each glass plate boundary at Brewster's angle, a fraction of the electric field component perpendicular to the plane of incidence is reflected. As the beam transmits through multiple plates in the pile, the perpendicular component is progressively removed by reflection, leaving the transmitted beam enriched in the parallel component. Thus, the transmitted light becomes highly plane-polarised with vibrations parallel to (in) the plane of incidence. Distractor B incorrectly assigns the reflected polarisation state (perpendicular to plane of incidence) to the transmitted light; C is physically incorrect as isotropic glass plates cannot induce circular phase shifts; D neglects the pile of plates mechanism.</p>''',
  "Polarisation by refraction through a pile of plates",
  "Confusing the polarisation direction of the transmitted beam (parallel to plane of incidence) with that of the reflected beam (perpendicular)",
  ['c.4.2.2', 'c.4.2.1'],
  twist=(r"Is the reflected beam at Brewster's angle completely or partially polarised?",
         r"Completely plane-polarised (vibrations perpendicular to plane of incidence)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.2.03', '4.2', 'MCQ',
  r'''<p>A Nicol prism is fabricated from a calcite crystal cut diagonally and cemented with Canada balsam. Given that the refractive indices for calcite are $n_o = 1.658$ and $n_e = 1.486$, and for Canada balsam $n_b = 1.550$, how does the Nicol prism eliminate one of the refracted rays?</p>''',
  [r'''The extraordinary ray undergoes total internal reflection at the balsam layer because $n_e > n_b$, while the ordinary ray is transmitted.''',
   r'''The ordinary ray is completely absorbed by dichroism in the Canada balsam layer, while the extraordinary ray is unaffected.''',
   r'''The ordinary ray undergoes total internal reflection at the balsam layer because $n_o > n_b$, while the extraordinary ray is transmitted because $n_e < n_b$.''',
   r'''Both rays undergo total internal reflection, but the ordinary ray is absorbed at the front face.'''],
  'C',
  r'''<p>Canada balsam has a refractive index $n_b = 1.550$, which lies between $n_e = 1.486$ and $n_o = 1.658$. For the ordinary ray, Canada balsam acts as an optically rarer medium ($n_o > n_b$). The prism is cut so that the ordinary ray meets the balsam layer at an angle exceeding the critical angle $\theta_c = \sin^{-1}(n_b/n_o) \approx 69^\circ$, causing total internal reflection toward a blackened side wall where it is absorbed. For the extraordinary ray, Canada balsam is denser ($n_e < n_b$), so total reflection is impossible and the e-ray is transmitted. Distractor A swaps the ordinary and extraordinary rays; B confuses Nicol prism TIR with dichroic absorption (Polaroid); D claims both rays undergo TIR.</p>''',
  "Operating principle of the Nicol prism using total internal reflection of the o-ray",
  "Swapping the relative refractive indices of o-ray and e-ray with respect to Canada balsam",
  ['c.4.2.3'],
  twist=(r"What state of polarisation does the transmitted beam have?",
         r"Linearly polarised with vibrations in the principal section (extraordinary ray)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.2.04', '4.2', 'MSQ',
  r'''<p>Which of the following statements concerning methods of producing linearly polarised light are <b>CORRECT</b>?</p>''',
  [r'''When unpolarised light is incident at Brewster's angle on a dielectric boundary, the reflected beam is 100% plane-polarised with its electric field oscillating perpendicular to the plane of incidence.''',
   r'''At Brewster's angle of incidence, all of the incident light energy is reflected, so the transmitted beam has zero intensity.''',
   r'''Unpolarised sunlight scattered by atmospheric molecules at an angle of $90^\circ$ relative to the incident sunlight is linearly polarised.''',
   r'''A Nicol prism transmits the extraordinary ray whose electric field oscillates in the principal section of the crystal.'''],
  ['A', 'C', 'D'],
  r'''<p>Statements A, C, and D are correct:
<ul>
<li><b>A</b> is true: by Brewster's law, the reflected beam has zero electric field component parallel to the plane of incidence, so it is fully polarised perpendicular to that plane.</li>
<li><b>B</b> is false: only a small fraction (typically $4\text{--}15\%$) of the incident light is reflected; most of the perpendicular component and all of the parallel component are transmitted into the refracting medium.</li>
<li><b>C</b> is true: dipole scattering at $90^\circ$ produces completely linearly polarised light (the basis of the polarisation of the blue sky).</li>
<li><b>D</b> is true: the o-ray (vibrations perpendicular to the principal section) is totally internally reflected and absorbed, leaving the e-ray (vibrations in the principal section) to emerge.</li>
</ul></p>''',
  "Methods of producing plane-polarised light: reflection, scattering, and double refraction",
  "Believing that 100% of the light is reflected at Brewster's angle",
  ['c.4.2.1', 'c.4.2.2', 'c.4.2.3'],
  twist=(r"Why cannot dipoles radiate along their axis of oscillation?",
         r"An oscillating dipole has zero electric field radiation along its oscillation axis ($\sin\theta = 0$ in the dipole radiation pattern)."),
  marks=2, neg=0, time=60)

O('o.op.4.2.05', '4.2', 'NAT',
  r'''<p>In a Nicol prism, two calcite prisms are cemented together using Canada balsam. The refractive index of calcite for the ordinary ray is $n_o = 1.658$, and the refractive index of Canada balsam is $n_b = 1.550$. Calculate the critical angle $\theta_c$ (in degrees) for total internal reflection of the ordinary ray at the calcite–Canada balsam interface. (Round off to two decimal places.)</p>''',
  None,
  {'value': 69.21, 'tol': 0.05, 'dp': 2},
  r'''<p>The ordinary ray travels from calcite ($n_o = 1.658$) toward Canada balsam ($n_b = 1.550$). Since $n_o > n_b$, total internal reflection occurs for angles of incidence exceeding the critical angle $\theta_c$, given by:
$$\sin\theta_c = \frac{n_b}{n_o} = \frac{1.550}{1.658} \approx 0.934861.$$
Taking the inverse sine:
$$\theta_c = \arcsin(0.934861) \approx 69.2057^\circ \approx 69.21^\circ.$$
A common error is using $n_e = 1.486$ instead of $n_o$, but the extraordinary ray sees $n_e < n_b$ and cannot undergo total internal reflection.</p>''',
  "Calculation of the critical angle for total internal reflection in a Nicol prism",
  "Using n_e instead of n_o in the critical angle formula",
  ['c.4.2.3'],
  twist=(r"Can the extraordinary ray undergo total internal reflection at the balsam layer?",
         r"No, because $n_e = 1.486 < n_b = 1.550$ (balsam is denser)."),
  marks=2, neg=0, time=90)

# ── 4.3  Polariser and analyser ────────────────────────────────────────────────

O('o.op.4.3.01', '4.3', 'MCQ',
  r'''<p>A beam of unpolarised light of intensity $I_0$ passes through two successive ideal linear polarisers whose transmission axes are oriented at an angle of $30^\circ$ to each other. What is the intensity of the light emerging from the second polariser?</p>''',
  [r'''$\frac{3}{4}I_0$''',
   r'''$\frac{3}{8}I_0$''',
   r'''$\frac{\sqrt{3}}{4}I_0$''',
   r'''$\frac{1}{8}I_0$'''],
  'B',
  r'''<p>When unpolarised light of intensity $I_0$ passes through the first ideal polariser, its intensity is halved: $I_1 = \frac{1}{2}I_0$. By Malus' law, upon passing through the second polariser whose axis is at $\theta = 30^\circ$ to the first, the transmitted intensity is:
$$I = I_1 \cos^2(30^\circ) = \frac{1}{2}I_0 \left(\frac{\sqrt{3}}{2}\right)^2 = \frac{1}{2}I_0 \times \frac{3}{4} = \frac{3}{8}I_0.$$
Distractor A forgets that unpolarised light is halved by the first polariser (computing $I_0\cos^2 30^\circ$); C squares amplitude improperly; D uses $\sin^2 30^\circ$ or angle $60^\circ$.</p>''',
  "Application of Malus' law to unpolarised light incident on two polarisers",
  "Forgetting that unpolarised light loses half its intensity at the first polariser",
  ['c.4.3.1'],
  twist=(r"What is the output intensity if the angle between the polarisers is changed to $45^\circ$?",
         r"$I = \frac{1}{2}I_0\cos^2 45^\circ = \frac{1}{4}I_0$."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.3.02', '4.3', 'MCQ',
  r'''<p>Two ideal linear polarisers $P_1$ and $P_3$ are crossed, so their transmission axes make an angle of $90^\circ$, transmitting zero light. A third polariser $P_2$ is placed between them with its transmission axis oriented at an angle $\theta$ relative to that of $P_1$. If unpolarised light of intensity $I_0$ is incident on $P_1$, for what angle $\theta$ is the transmitted intensity after $P_3$ maximum, and what is that maximum intensity?</p>''',
  [r'''$\theta = 30^\circ$ with $I_{\max} = \frac{1}{8}I_0$''',
   r'''$\theta = 45^\circ$ with $I_{\max} = \frac{1}{4}I_0$''',
   r'''$\theta = 60^\circ$ with $I_{\max} = \frac{1}{8}I_0$''',
   r'''$\theta = 45^\circ$ with $I_{\max} = \frac{1}{8}I_0$'''],
  'D',
  r'''<p>After $P_1$, the light is linearly polarised with intensity $I_1 = \frac{1}{2}I_0$. After $P_2$, the intensity is $I_2 = I_1\cos^2\theta$. The angle between the axes of $P_2$ and $P_3$ is $90^\circ - \theta$, so after $P_3$:
$$I_3 = I_2 \cos^2(90^\circ - \theta) = I_1 \cos^2\theta \sin^2\theta = \frac{1}{2}I_0 \times \frac{1}{4}\sin^2(2\theta) = \frac{1}{8}I_0 \sin^2(2\theta).$$
This is maximized when $\sin(2\theta) = 1$, giving $2\theta = 90^\circ \implies \theta = 45^\circ$, and the maximum transmitted intensity is $I_{\max} = \frac{1}{8}I_0$. Distractor B forgets the initial $1/2$ reduction from unpolarised light; A and C have incorrect angles where $\sin^2(2\theta) < 1$.</p>''',
  "Three-polariser problem and optimization of intermediate polariser angle",
  "Forgetting the factor of 1/2 from the first polariser acting on unpolarised light",
  ['c.4.3.2', 'c.4.3.1'],
  twist=(r"What is the transmitted intensity if $\theta = 30^\circ$?",
         r"$I = \frac{1}{8}I_0\sin^2(60^\circ) = \frac{1}{8}I_0\times\frac{3}{4} = \frac{3}{32}I_0$."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.3.03', '4.3', 'MCQ',
  r'''<p>A beam of partially polarised light is analysed with a rotating linear polariser. The detected intensity varies between a maximum value of $I_{\max} = 9.0\text{ W/m}^2$ and a minimum value of $I_{\min} = 1.0\text{ W/m}^2$. What is the degree of polarisation $P$ of the beam?</p>''',
  [r'''$0.80$''',
   r'''$0.89$''',
   r'''$0.40$''',
   r'''$0.11$'''],
  'A',
  r'''<p>The degree of polarisation is defined as:
$$P = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{9.0 - 1.0}{9.0 + 1.0} = \frac{8.0}{10.0} = 0.80.$$
Distractor B calculates $1 - I_{\min}/I_{\max} = 1 - 1/9 = 8/9 \approx 0.89$; C divides by $2I_{\max}$ instead of the sum; D computes the ratio $I_{\min}/I_{\max} = 1/9 \approx 0.11$.</p>''',
  "Definition and calculation of the degree of polarisation",
  "Using 1 - I_min/I_max or I_min/I_max instead of (I_max - I_min)/(I_max + I_min)",
  ['c.4.3.2'],
  twist=(r"What is the degree of polarisation if the light is completely plane-polarised ($I_{\min} = 0$)?",
         r"$P = 1.0$."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.3.04', '4.3', 'MSQ',
  r'''<p>Which of the following statements regarding the behaviour of light through polarisers are <b>CORRECT</b>?</p>''',
  [r'''When unpolarised light passes through an ideal linear polariser, the transmitted intensity is exactly half the incident intensity, regardless of the orientation of the transmission axis.''',
   r'''Inserting an ideal polariser between two crossed polarisers can increase the net transmitted intensity from zero to a positive value.''',
   r'''According to Malus' law, doubling the angle between the polarisation plane and analyser axis from $30^\circ$ to $60^\circ$ halves the transmitted intensity.''',
   r'''For a mixture of unpolarised light of intensity $I_u$ and linearly polarised light of intensity $I_p$, the degree of polarisation is $P = \frac{I_p}{I_u + I_p}$.'''],
  ['A', 'B', 'D'],
  r'''<p>Statements A, B, and D are correct:
<ul>
<li><b>A</b> is true: unpolarised light contains equal time-averaged field projections along every transverse direction, so $\langle\cos^2\theta\rangle = 1/2$.</li>
<li><b>B</b> is true: an intermediate polariser at angle $\theta$ ($0 < \theta < 90^\circ$) resolves the field onto its axis and passes non-zero intensity through the final crossed analyser.</li>
<li><b>C</b> is false: at $30^\circ$, $\cos^2 30^\circ = 3/4 = 0.75$; at $60^\circ$, $\cos^2 60^\circ = 1/4 = 0.25$. The intensity is reduced by a factor of 3, not 2.</li>
<li><b>D</b> is true: $I_{\max} = I_p + \frac{1}{2}I_u$ and $I_{\min} = \frac{1}{2}I_u$, so $P = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{I_p}{I_u + I_p}$.</li>
</ul></p>''',
  "Properties of Malus' law, intermediate polariser transmission, and degree of polarisation",
  "Assuming intensity varies linearly with angle theta rather than with cos^2(theta)",
  ['c.4.3.1', 'c.4.3.2'],
  twist=(r"What is the degree of polarisation for circularly polarised light?",
         r"$P = 0$ (since $I_{\max} = I_{\min}$)."),
  marks=2, neg=0, time=60)

O('o.op.4.3.05', '4.3', 'NAT',
  r'''<p>Unpolarised light of intensity $100\text{ W/m}^2$ is incident on a train of four successive ideal linear polarisers. The transmission axis of the first polariser is oriented vertically at $0^\circ$. The second, third, and fourth polarisers have their axes oriented at angles of $30^\circ$, $60^\circ$, and $90^\circ$ with respect to the vertical, respectively. Calculate the transmitted intensity emerging from the fourth polariser in $\text{W/m}^2$. (Round off to two decimal places.)</p>''',
  None,
  {'value': 21.09, 'tol': 0.05, 'dp': 2},
  r'''<p>The unpolarised light enters the first polariser, so the intensity after $P_1$ is:
$$I_1 = \frac{1}{2} I_0 = 50\text{ W/m}^2.$$
The angle between successive polarisers is constant:
$$\Delta\theta = 30^\circ - 0^\circ = 60^\circ - 30^\circ = 90^\circ - 60^\circ = 30^\circ.$$
Applying Malus' law across each of the three successive transitions:
$$I_4 = I_1 (\cos^2 30^\circ)^3 = 50 \times \left(\frac{3}{4}\right)^3 = 50 \times \frac{27}{64} = \frac{1350}{64} = 21.09375\text{ W/m}^2 \approx 21.09\text{ W/m}^2.$$
A common error is taking the angle between the first and last polarisers ($90^\circ$) to conclude $I_4 = 0$. Another error is forgetting the initial $1/2$ reduction, yielding $42.19\text{ W/m}^2$.</p>''',
  "Multi-polariser chain rule calculation using successive angular differences",
  "Using the angle between the first and last polariser (giving zero) instead of successive angles",
  ['c.4.3.2', 'c.4.3.1'],
  twist=(r"What would the output intensity be if the second polariser were removed?",
         r"With $P_1$ at $0^\circ$, $P_3$ at $60^\circ$, $P_4$ at $90^\circ$: $I = 50\cos^2 60^\circ\cos^2 30^\circ = 50\times\frac{1}{4}\times\frac{3}{4} = 9.38\text{ W/m}^2$."),
  marks=2, neg=0, time=90)

# ── 4.4  Double refraction and Huygens' explanation ────────────────────────────

O('o.op.4.4.01', '4.4', 'MCQ',
  r'''<p>When an unpolarised ray of light undergoes double refraction in a calcite crystal, it splits into an ordinary (o) ray and an extraordinary (e) ray. Which of the following correctly specifies the polarisation states of these two rays relative to the crystal's <b>principal section</b>?</p>''',
  [r'''The o-ray vibrates parallel to the optic axis; the e-ray vibrates perpendicular to the optic axis.''',
   r'''The o-ray vibrates in the principal section; the e-ray vibrates perpendicular to the principal section.''',
   r'''The o-ray vibrates perpendicular to the principal section; the e-ray vibrates in the principal section.''',
   r'''Both rays have circular polarisation of opposite handedness.'''],
  'C',
  r'''<p>In a uniaxial crystal, the principal section is the plane containing the optic axis and the normal to the crystal surface. The <b>ordinary (o) ray</b> has its electric vector vibrating <b>perpendicular to the principal section</b> (and thus perpendicular to the optic axis everywhere). The <b>extraordinary (e) ray</b> has its electric vector vibrating <b>in the principal section</b>. Distractor B swaps the two vibration directions; A is imprecise and incorrect for arbitrary propagation directions; D incorrectly claims circular polarisation.</p>''',
  "Polarisation orientations of ordinary and extraordinary rays relative to the principal section",
  "Reversing the vibration directions of the o-ray and e-ray with respect to the principal section",
  ['c.4.4.1'],
  twist=(r"Which of the two rays obeys Snell's law in all directions?",
         r"The ordinary (o) ray."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.4.02', '4.4', 'MCQ',
  r'''<p>In Huygens' wave theory of double refraction in a <b>negative</b> uniaxial crystal such as calcite ($n_e < n_o$):</p>''',
  [r'''The spherical wavefront of the o-wave completely encloses the ellipsoidal wavefront of the e-wave, touching it along the optic axis.''',
   r'''The ellipsoidal wavefront of the e-wave completely encloses the spherical wavefront of the o-wave, touching it along the optic axis.''',
   r'''Both wavefronts are spheres of different radii that never touch.''',
   r'''The wavefronts are two intersecting ellipsoids of revolution with perpendicular axes.'''],
  'B',
  r'''<p>For a negative uniaxial crystal such as calcite, $n_e < n_o$, which implies that the velocity of the extraordinary wave perpendicular to the optic axis is greater than that of the ordinary wave: $v_e = c/n_e > v_o = c/n_o$. Along the optic axis, both waves travel at the same speed $v_o$. Therefore, the secondary wavelet of the e-wave is an ellipsoid of revolution with semi-major axis $v_e t$ perpendicular to the optic axis and semi-minor axis $v_o t$ along it. Thus, the <b>ellipsoid encloses the sphere</b>, touching it at the two points on the optic axis. Distractor A describes a positive uniaxial crystal (like quartz, where $v_o > v_e$); C and D present incorrect wave geometries.</p>''',
  "Huygens' wavefront construction for negative uniaxial crystals",
  "Confusing negative crystals (ellipsoid encloses sphere) with positive crystals (sphere encloses ellipsoid)",
  ['c.4.4.2'],
  twist=(r"Which surface encloses the other in a positive crystal like quartz?",
         r"The sphere encloses the ellipsoid ($v_o > v_e$)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.4.03', '4.4', 'MCQ',
  r'''<p>A beam of light travels through a uniaxial birefringent crystal strictly along the direction of its optic axis. Which of the following statements correctly describes what happens to the beam?</p>''',
  [r'''The beam splits into two spatially separated rays with different speeds $c/n_o$ and $c/n_e$.''',
   r'''The extraordinary ray is totally internally reflected, so only the ordinary ray propagates.''',
   r'''The beam is converted into circularly polarised light due to optical activity.''',
   r'''Both the ordinary and extraordinary waves travel with the same speed $v = c/n_o$, and no double refraction occurs.'''],
  'D',
  r'''<p>The <b>optic axis</b> of a uniaxial crystal is defined as the direction along which the ordinary and extraordinary waves propagate with the identical velocity $v_o = c/n_o$. Light propagating along the optic axis experiences no difference in refractive index regardless of vibration direction, meaning no double refraction or birefringence takes place along this axis. Distractor A incorrectly asserts that birefringence splits the beam along every direction; B falsely suggests TIR; C confuses birefringence with optical activity.</p>''',
  "Definition and optical behaviour along the optic axis of a uniaxial crystal",
  "Assuming that double refraction (velocity difference) occurs along the optic axis",
  ['c.4.4.1'],
  twist=(r"What is the velocity of the e-wave when propagating perpendicular to the optic axis in calcite?",
         r"$v_e = c/n_e$ (which is greater than $c/n_o$)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.4.04', '4.4', 'MSQ',
  r'''<p>Which of the following statements regarding double refraction and Huygens' construction in uniaxial crystals are <b>CORRECT</b>?</p>''',
  [r'''In a negative uniaxial crystal such as calcite, $n_e < n_o$, so the extraordinary wave travels faster than the ordinary wave in directions perpendicular to the optic axis.''',
   r'''The ordinary ray strictly obeys Snell's law of refraction for all angles of incidence and crystal cut orientations.''',
   r'''In Huygens' construction for the extraordinary ray, the direction of the ray always coincides with the normal to the extraordinary wavefront.''',
   r'''In a positive uniaxial crystal such as quartz ($n_e > n_o$), the spherical Huygens wavefront encloses the ellipsoidal wavefront.'''],
  ['A', 'B', 'D'],
  r'''<p>Statements A, B, and D are correct:
<ul>
<li><b>A</b> is true: in calcite, $n_e = 1.486 < n_o = 1.658$, so $v_e = c/n_e > v_o = c/n_o$.</li>
<li><b>B</b> is true: the o-wavelet is spherical with constant speed $v_o$ in all directions, so the o-ray obeys Snell's law unconditionally.</li>
<li><b>C</b> is false: the extraordinary ray connects the source point to the point of tangency on the ellipsoid; because the surface is ellipsoidal, this ray vector does not in general align with the wavefront normal (except along or perpendicular to the optic axis).</li>
<li><b>D</b> is true: in quartz, $n_e > n_o \implies v_e < v_o$, so the spherical o-wavefront of radius $v_o t$ encloses the ellipsoidal e-wavefront.</li>
</ul></p>''',
  "Properties of positive and negative uniaxial crystals and Huygens' construction principles",
  "Assuming the extraordinary ray direction is always perpendicular to the extraordinary wavefront",
  ['c.4.4.1', 'c.4.4.2'],
  twist=(r"When does the e-ray coincide with the wavefront normal?",
         r"Only when propagating along or perpendicular to the optic axis (principal axes of the ellipsoid)."),
  marks=2, neg=0, time=60)

O('o.op.4.4.05', '4.4', 'NAT',
  r'''<p>A beam of light of wavelength $\lambda = 589\text{ nm}$ in vacuum enters a calcite crystal travelling perpendicular to its optic axis. The principal refractive indices of calcite for this wavelength are $n_o = 1.658$ and $n_e = 1.486$. Calculate the difference between the wavelengths of the extraordinary wave and ordinary wave inside the crystal, $\Delta\lambda = \lambda_e - \lambda_o$, in nanometres (nm). (Round off to two decimal places.)</p>''',
  None,
  {'value': 41.12, 'tol': 0.1, 'dp': 2},
  r'''<p>Inside the crystal, the wavelength of a light wave is given by $\lambda_m = \lambda / n$.
For the extraordinary wave:
$$\lambda_e = \frac{\lambda}{n_e} = \frac{589\text{ nm}}{1.486} \approx 396.366\text{ nm}.$$
For the ordinary wave:
$$\lambda_o = \frac{\lambda}{n_o} = \frac{589\text{ nm}}{1.658} \approx 355.247\text{ nm}.$$
The difference between the two wavelengths inside the crystal is:
$$\Delta\lambda = \lambda_e - \lambda_o = 396.366 - 355.247 = 41.119\text{ nm} \approx 41.12\text{ nm}.$$
A frequent error is computing $(n_o - n_e)\lambda = 0.172 \times 589 = 101.31\text{ nm}$, which incorrectly multiplies the vacuum wavelength by $\Delta n$ instead of evaluating the difference of reciprocal indices $\lambda(1/n_e - 1/n_o)$.</p>''',
  "Wavelength changes of ordinary and extraordinary waves in anisotropic media",
  "Calculating (n_o - n_e)*lambda instead of lambda/n_e - lambda/n_o",
  ['c.4.4.1'],
  twist=(r"What is the optical path difference between the two waves after traversing a crystal of thickness $t = 10\ \mu\text{m}$?",
         r"$\Delta L = (n_o - n_e)t = 0.172\times 10\ \mu\text{m} = 1.72\ \mu\text{m}$."),
  marks=2, neg=0, time=90)

# ── 4.5  Wave plates ───────────────────────────────────────────────────────────

O('o.op.4.5.01', '4.5', 'MCQ',
  r'''<p>Linearly polarised light whose plane of vibration makes an angle of $30^\circ$ with the optic axis of a half-wave plate (HWP) is normally incident on the plate. What is the state of polarisation of the transmitted light, and through what total angle has its plane of vibration rotated relative to the incident plane?</p>''',
  [r'''Linearly polarised, with its plane of vibration rotated through $60^\circ$''',
   r'''Linearly polarised, with its plane of vibration rotated through $30^\circ$''',
   r'''Circularly polarised due to the half-wave phase shift''',
   r'''Elliptically polarised with major axis inclined at $60^\circ$'''],
  'A',
  r'''<p>A half-wave plate introduces a phase difference of $\delta = \pi$ between the extraordinary and ordinary components. If the incident plane of vibration makes an angle $\theta$ with the optic axis, the field components are $E_e = E\cos\theta$ and $E_o = E\sin\theta$. After passing through the plate, the phase shift of $\pi$ reverses the sign of one component ($E_o \to -E_o$), reflecting the plane of vibration across the optic axis to an angle $-\theta$. The total rotation of the plane of vibration is $|-\theta - \theta| = 2\theta = 2 \times 30^\circ = 60^\circ$. Distractor B confuses the angle with the optic axis ($\theta$) with the total rotation ($2\theta$); C confuses a HWP with a QWP; D wrongly thinks an ellipse is formed.</p>''',
  "Action of a half-wave plate on linearly polarised light: rotation by 2 theta",
  "Reporting the angle theta with the optic axis instead of the total rotation angle 2 theta",
  ['c.4.5.2'],
  twist=(r"What angle $\theta$ between the incident vibration and the optic axis rotates the plane of vibration by $90^\circ$?",
         r"$\theta = 45^\circ$, since $2\theta = 90^\circ$."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.5.02', '4.5', 'MCQ',
  r'''<p>Right-circularly polarised light is incident normally on an ideal half-wave plate (HWP). What is the state of polarisation of the emerging light?</p>''',
  [r'''Linearly polarised at $45^\circ$ to the optic axis''',
   r'''Right-circularly polarised (unchanged)''',
   r'''Left-circularly polarised''',
   r'''Completely unpolarised light'''],
  'C',
  r'''<p>Right-circularly polarised light can be represented as two orthogonal vibrations of equal amplitude with phase difference $\delta = +\pi/2$. Passing through a half-wave plate introduces an additional phase difference of $\pi$, so the new phase difference becomes $\delta' = \pi/2 + \pi = 3\pi/2 \equiv -\pi/2$. This reverses the handedness of the rotation from right-circular to left-circular polarisation. Distractor A confuses the HWP action with that of a quarter-wave plate (which converts circular light to linear light); B assumes a HWP has no effect on circular light; D incorrectly assumes wave plates depolarise light.</p>''',
  "Effect of a half-wave plate on circularly polarised light (handedness reversal)",
  "Confusing a half-wave plate with a quarter-wave plate (which would produce linearly polarised light)",
  ['c.4.5.2'],
  twist=(r"What component converts right-circular light into linearly polarised light?",
         r"A quarter-wave plate (QWP)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.5.03', '4.5', 'MCQ',
  r'''<p>A quarter-wave plate is designed for yellow light of wavelength $\lambda_1 = 600\text{ nm}$. If monochromatic blue light of wavelength $\lambda_2 = 450\text{ nm}$ is passed through the same plate at normal incidence (neglecting dispersion of the refractive indices), what is the phase difference $\delta$ introduced between the ordinary and extraordinary waves?</p>''',
  [r'''$\frac{\pi}{2}\text{ rad}$ ($90^\circ$)''',
   r'''$\frac{2\pi}{3}\text{ rad}$ ($120^\circ$)''',
   r'''$\frac{3\pi}{8}\text{ rad}$ ($67.5^\circ$)''',
   r'''$\pi\text{ rad}$ ($180^\circ$)'''],
  'B',
  r'''<p>For the design wavelength $\lambda_1 = 600\text{ nm}$, the quarter-wave plate introduces an optical path difference of $\Delta = |n_o - n_e|t = \lambda_1 / 4 = 150\text{ nm}$. When light of wavelength $\lambda_2 = 450\text{ nm}$ passes through the plate, the phase difference is:
$$\delta = \frac{2\pi}{\lambda_2}\Delta = \frac{2\pi}{450\text{ nm}} \times 150\text{ nm} = \frac{2\pi}{3}\text{ rad}\ (120^\circ).$$
Distractor A assumes that a quarter-wave plate provides a $\pi/2$ phase shift for all wavelengths; C inverts the ratio of wavelengths ($\frac{\pi}{2} \times \frac{450}{600} = \frac{3\pi}{8}$); D is for a half-wave plate.</p>''',
  "Wavelength dependence of the phase retardance in wave plates",
  "Assuming a quarter-wave plate introduces pi/2 phase retardance at every wavelength",
  ['c.4.5.1'],
  twist=(r"What is the polarisation state of the blue light if it enters with linear polarisation at $45^\circ$ to the optic axis?",
         r"Elliptically polarised (since $\delta = 2\pi/3 \neq \pi/2$)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.5.04', '4.5', 'MSQ',
  r'''<p>Which of the following statements regarding retardation plates (quarter-wave and half-wave plates) are <b>CORRECT</b>?</p>''',
  [r'''A quarter-wave plate (QWP) introduces a path difference of $\lambda/4$ and a phase difference of $\pi/2$ between the extraordinary and ordinary waves at its design wavelength.''',
   r'''When linearly polarised light is incident on a QWP with its plane of vibration at $45^\circ$ to the optic axis, the transmitted light is circularly polarised.''',
   r'''When linearly polarised light is incident on a QWP with its plane of vibration parallel to the optic axis ($\theta = 0^\circ$), the transmitted light remains linearly polarised with no change in vibration direction.''',
   r'''For a given crystal material and wavelength, the minimum thickness of a half-wave plate is half that of a quarter-wave plate.'''],
  ['A', 'B', 'C'],
  r'''<p>Statements A, B, and C are correct:
<ul>
<li><b>A</b> is true: a QWP has path difference $\Delta = \lambda/4$, which corresponds to phase difference $\delta = \frac{2\pi}{\lambda}\frac{\lambda}{4} = \frac{\pi}{2}$.</li>
<li><b>B</b> is true: at $\theta = 45^\circ$, the amplitudes along the two axes are equal ($E\cos 45^\circ = E\sin 45^\circ$), and with $\delta = \pi/2$, the output is circularly polarised.</li>
<li><b>C</b> is true: at $\theta = 0^\circ$, only the extraordinary component is excited ($E_o = 0$), so no relative phase delay occurs and the light emerges unaffected.</li>
<li><b>D</b> is false: $t_{\rm HWP} = \frac{\lambda}{2|n_o - n_e|} = 2 \times \frac{\lambda}{4|n_o - n_e|} = 2\,t_{\rm QWP}$. The half-wave plate is <b>twice as thick</b> as the quarter-wave plate, not half.</li>
</ul></p>''',
  "Properties and behaviour of quarter-wave and half-wave retardation plates",
  "Assuming a half-wave plate has half the thickness of a quarter-wave plate instead of double",
  ['c.4.5.1', 'c.4.5.2'],
  twist=(r"What state of light is produced by a QWP if the incident linear vibration is at $30^\circ$ to the axis?",
         r"Elliptically polarised light (since amplitudes along the axes are unequal)."),
  marks=2, neg=0, time=60)

O('o.op.4.5.05', '4.5', 'NAT',
  r'''<p>Calculate the minimum thickness (in $\mu\text{m}$) of a quartz half-wave plate designed for yellow light of wavelength $\lambda = 589\text{ nm}$. The refractive indices of quartz for this wavelength are $n_e = 1.553$ and $n_o = 1.544$. (Round off to two decimal places.)</p>''',
  None,
  {'value': 32.72, 'tol': 0.05, 'dp': 2},
  r'''<p>The minimum thickness of a half-wave plate (HWP) providing a phase difference of $\delta = \pi$ (path difference $\lambda/2$) is:
$$t = \frac{\lambda}{2|n_e - n_o|}.$$
Given $\lambda = 589\text{ nm} = 0.589\ \mu\text{m}$ and birefringence $|n_e - n_o| = 1.553 - 1.544 = 0.009$:
$$t = \frac{0.589\ \mu\text{m}}{2 \times 0.009} = \frac{0.589}{0.018}\ \mu\text{m} \approx 32.7222\ \mu\text{m} \approx 32.72\ \mu\text{m}.$$
A common error is computing the thickness of a quarter-wave plate ($t_{\rm QWP} = \frac{\lambda}{4|n_e - n_o|} = 16.36\ \mu\text{m}$) by dividing by 4 instead of 2.</p>''',
  "Calculation of the minimum thickness of a half-wave plate",
  "Using the quarter-wave plate formula lambda/(4*delta_n) instead of lambda/(2*delta_n)",
  ['c.4.5.1'],
  twist=(r"What would be the thickness of a quarter-wave plate for the same material and wavelength?",
         r"$t_{\rm QWP} = 32.72 / 2 = 16.36\ \mu\text{m}$."),
  marks=2, neg=0, time=90)

# ── 4.6  Production and analysis of polarised light ────────────────────────────

O('o.op.4.6.01', '4.6', 'MCQ',
  r'''<p>To produce circularly polarised light from an unpolarised light source, which of the following optical setups must be placed in the beam path in the correct order?</p>''',
  [r'''A quarter-wave plate followed by a linear polariser with its transmission axis at $45^\circ$ to the optic axis''',
   r'''A linear polariser followed by a half-wave plate with its optic axis at $45^\circ$ to the transmission axis''',
   r'''A linear polariser followed by an identical linear polariser crossed at $90^\circ$''',
   r'''A linear polariser followed by a quarter-wave plate with its optic axis oriented at $45^\circ$ to the polariser's transmission axis'''],
  'D',
  r'''<p>To produce circularly polarised light from an unpolarised source:
1. First, a linear polariser converts unpolarised light into linearly polarised light.
2. Next, a quarter-wave plate (QWP) oriented with its optic axis at $45^\circ$ to the linear vibration resolves the field into two equal, orthogonal components and introduces a phase difference of $\pi/2$, generating circularly polarised light.
Distractor A puts the QWP before the polariser (a QWP has no polarising effect on unpolarised light); B uses a half-wave plate (which merely rotates the plane of linear polarisation by $90^\circ$); C produces complete extinction.</p>''',
  "Procedure and component sequence for producing circularly polarised light",
  "Reversing the order of polariser and QWP, or confusing a QWP with a HWP",
  ['c.4.6.1'],
  twist=(r"What state is produced if the optic axis of the QWP is at $30^\circ$ instead of $45^\circ$?",
         r"Elliptically polarised light."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.6.02', '4.6', 'MCQ',
  r'''<p>When an unknown beam of light passes through a rotating linear analyser alone, the transmitted intensity remains completely constant for all orientations of the analyser. To determine unambiguously whether the beam is <b>unpolarised</b> or <b>circularly polarised</b>, what additional step should be taken?</p>''',
  [r'''Insert a quarter-wave plate before the analyser; if the beam is circularly polarised, the transmitted intensity will now drop to zero twice per full revolution of the analyser.''',
   r'''Insert a half-wave plate before the analyser; if the beam is circularly polarised, the transmitted intensity will now show variations.''',
   r'''Pass the beam through a Nicol prism; if circularly polarised, one half of the beam will be completely absorbed.''',
   r'''Reflect the beam off a glass plate at Brewster's angle; unpolarised light will fail to reflect.'''],
  'A',
  r'''<p>Both unpolarised light and circularly polarised light produce constant transmitted intensity when viewed through a rotating analyser alone, because neither state has a preferred transverse direction. A quarter-wave plate (QWP) converts circularly polarised light into linearly polarised light (which gives two complete extinctions when the analyser is rotated). Unpolarised light remains unpolarised after passing through a QWP, so its intensity continues to remain constant upon rotating the analyser. Distractor B is incorrect because a HWP converts right-circular to left-circular light, which still gives constant intensity with an analyser alone; C and D are physically invalid tests.</p>''',
  "Systematic optical method to distinguish circularly polarised light from unpolarised light",
  "Concluding that constant intensity through an analyser alone proves the light is unpolarised",
  ['c.4.6.2'],
  twist=(r"What happens if the unknown beam was partially polarised instead?",
         r"The analyser alone shows intensity variation between a maximum and a non-zero minimum."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.6.03', '4.6', 'MCQ',
  r'''<p>An unknown light beam is examined using an analyser and a quarter-wave plate. First, rotating the analyser alone produces an intensity that varies between a maximum and a non-zero minimum. Next, a quarter-wave plate is inserted before the analyser with its optic axis aligned with the direction of maximum intensity. Rotating the analyser now yields <b>two positions of zero intensity (complete extinction)</b> per revolution. What was the state of polarisation of the original beam?</p>''',
  [r'''A mixture of unpolarised and linearly polarised light (partially polarised)''',
   r'''Circularly polarised light''',
   r'''Elliptically polarised light''',
   r'''Completely unpolarised light'''],
  'C',
  r'''<p>Step 1: The intensity varies between a maximum and non-zero minimum, which rules out purely unpolarised or purely circular light (which would be constant) and purely linear light (which would reach zero). This leaves elliptically polarised light or partially polarised light.
Step 2: When a QWP is placed with its optic axis along the major axis (the direction of maximum intensity), it compensates the $\pi/2$ phase difference between the ellipse's principal components, converting elliptically polarised light into completely plane-polarised light, which achieves complete extinction (zero intensity) at two angles of the analyser. If the beam had contained unpolarised light (partially polarised), the unpolarised portion could never be extinguished to zero. Hence, the beam was purely elliptically polarised. Distractor A is ruled out by the complete extinction in Step 2; B and D give constant intensity in Step 1.</p>''',
  "Analysis of unknown beam: distinguishing elliptically polarised from partially polarised light",
  "Confusing elliptically polarised light with partially polarised light",
  ['c.4.6.2'],
  twist=(r"What would be observed after the QWP if the original beam had been partially polarised?",
         r"The intensity would still vary between a maximum and a non-zero minimum (never reaching zero)."),
  marks=1, neg=-0.33, time=60)

O('o.op.4.6.04', '4.6', 'MSQ',
  r'''<p>Which of the following statements regarding optical activity and specific rotation are <b>CORRECT</b>?</p>''',
  [r'''Optical activity arises because an optically active substance has different refractive indices ($n_R \neq n_L$) for right- and left-circularly polarised light.''',
   r'''A plane-polarised light wave can be represented mathematically as the superposition of two counter-rotating circularly polarised waves of equal amplitude and frequency.''',
   r'''In the standard formula for specific rotation $[\alpha] = \frac{\theta}{l\,c}$, the path length $l$ is measured in centimetres and the concentration $c$ is measured in moles per litre ($\text{mol/L}$).''',
   r'''The angle of optical rotation $\theta$ produced by an optically active solution depends on the wavelength of light used (rotatory dispersion).'''],
  ['A', 'B', 'D'],
  r'''<p>Statements A, B, and D are correct:
<ul>
<li><b>A</b> is true: Fresnel's theory explains optical activity as circular birefringence: $\theta = \frac{\pi l}{\lambda}(n_L - n_R)$.</li>
<li><b>B</b> is true: two counter-rotating circular fields of equal amplitude add constructively along a fixed plane, forming a linear vibration.</li>
<li><b>C</b> is false: in Biot's definition of specific rotation, the path length $l$ is measured in <b>decimetres ($\text{dm}$)</b> and concentration $c$ in <b>grams per cubic centimetre ($\text{g cm}^{-3}$)</b>.</li>
<li><b>D</b> is true: specific rotation varies inversely with wavelength squared approximately ($\theta \propto 1/\lambda^2$), a phenomenon known as rotatory dispersion.</li>
</ul></p>''',
  "Principles of optical activity, Fresnel's theory of circular birefringence, and specific rotation units",
  "Using centimetres instead of decimetres for the path length in specific rotation",
  ['c.4.6.3'],
  twist=(r"If $n_L > n_R$, does the plane of polarisation rotate clockwise or counter-clockwise looking toward the source?",
         r"Clockwise (dextrorotatory)."),
  marks=2, neg=0, time=60)

O('o.op.4.6.05', '4.6', 'NAT',
  r'''<p>A polarimeter tube of length $20.0\text{ cm}$ contains a sugar solution that produces an optical rotation of $+26.4^\circ$ for yellow sodium light ($\lambda = 589\text{ nm}$). If the specific rotation of sugar at this wavelength is $+66.0^\circ\text{ dm}^{-1}(\text{g cm}^{-3})^{-1}$, calculate the concentration of the sugar solution in $\text{g cm}^{-3}$. (Round off to two decimal places.)</p>''',
  None,
  {'value': 0.2, 'tol': 0.01, 'dp': 2},
  r'''<p>The specific rotation $[\alpha]$ is given by:
$$[\alpha] = \frac{\theta}{l \times c},$$
where $\theta$ is the rotation in degrees, $l$ is the length in decimetres, and $c$ is the concentration in $\text{g cm}^{-3}$.
Converting the tube length to decimetres:
$$l = 20.0\text{ cm} = 2.0\text{ dm}.$$
Rearranging for concentration $c$:
$$c = \frac{\theta}{[\alpha] \times l} = \frac{26.4^\circ}{66.0^\circ \times 2.0\text{ dm}} = \frac{26.4}{132.0}\text{ g cm}^{-3} = 0.20\text{ g cm}^{-3}.$$
A common error is using $l = 20$ directly without converting centimetres to decimetres, resulting in $0.02\text{ g cm}^{-3}$ (an order of magnitude too small).</p>''',
  "Calculation of concentration from optical rotation and specific rotation",
  "Forgetting to convert tube length from cm to dm",
  ['c.4.6.3'],
  twist=(r"What rotation would be observed if the solution were diluted to half its concentration in the same tube?",
         r"$\theta = 26.4^\circ / 2 = 13.2^\circ$."),
  marks=2, neg=0, time=90)

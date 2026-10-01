# Module IV Extra — Polarisation Ellipse Axes, Calcite Waveplates, Handedness Transformations. Ghatak 6e §22.4, 22.6.

C('c.4.1.3', '4.1', 'theorem', "Tilt Angle and Principal Axes of the Polarisation Ellipse",
  "The major axis of the polarisation ellipse is tilted at angle ϕ to the x-axis, where tan 2ϕ = (2 a₁ a₂ cos δ) / (a₁² − a₂²).",
  r'''When two orthogonal harmonic electric fields of identical frequency propagate along the $+z$ direction:
$$E_x(t) = a_1 \cos\omega t, \qquad E_y(t) = a_2 \cos(\omega t + \delta),$$
eliminating $t$ yields the general Cartesian equation of a polarization ellipse:
$$\frac{E_x^2}{a_1^2} + \frac{E_y^2}{a_2^2} - \frac{2 E_x E_y}{a_1 a_2}\cos\delta = \sin^2\delta.$$
To find the orientation of the principal axes of this ellipse relative to the $x$-axis, rotate the coordinate system by an angle $\phi$ via $E_x = E_\xi \cos\phi - E_\eta \sin\phi$ and $E_y = E_\xi \sin\phi + E_\eta \cos\phi$. Requiring the cross term $E_\xi E_\eta$ to vanish in the rotated principal coordinate system yields the orientation condition:
$$\boxed{\tan 2\phi = \frac{2 a_1 a_2 \cos\delta}{a_1^2 - a_2^2}}.$$
<b>Special Cases:</b>
<ul>
<li><b>Coordinate Alignment ($\delta = \pi/2$ or $3\pi/2$):</b> $\cos\delta = 0 \implies \tan 2\phi = 0 \implies \phi = 0$. The principal axes of the ellipse lie strictly along the $x$ and $y$ coordinate axes: $\frac{E_x^2}{a_1^2} + \frac{E_y^2}{a_2^2} = 1$.</li>
<li><b>Equal Amplitudes ($a_1 = a_2$):</b> The denominator vanishes ($a_1^2 - a_2^2 = 0$), so $\tan 2\phi = \infty \implies 2\phi = \pi/2 \implies \phi = 45^\circ$. The ellipse major axis is tilted at exactly $45^\circ$ to the coordinate axes regardless of the non-zero phase difference $\delta$.</li>
<li><b>Linear Degeneracy ($\delta = 0$ or $\pi$):</b> $\sin^2\delta = 0$, the ellipse collapses to a straight line $E_y = \pm (a_2/a_1) E_x$ tilted at $\tan\phi = \pm a_2/a_1$.</li>
</ul>''',
  r'''When you combine two perpendicular vibrations out of step, the tip traces an oval. If the two vibrations have equal strength, the oval leans diagonally at forty-five degrees because neither axis dominates. If they are exactly ninety degrees out of phase, the oval sits upright, squarely aligned with the grid axes. For any arbitrary combination of amplitudes and phase delay, the formula tan 2ϕ tells you the exact tilt angle of the oval major axis relative to your coordinate frame.''',
  needs=['c.4.1.1', 'c.4.1.2'],
  traps=[r'Assuming an ellipse is always aligned with the coordinate axes: only the special case $\delta = \pi/2$ has its principal axes parallel to the $x$ and $y$ axes.',
         r'Confusing the tilt angle $\phi$ of the major axis with the phase difference $\delta$ between the orthogonal components.'],
  cards=[(r'State the formula for the inclination $\phi$ of the principal axes of a polarisation ellipse.',
          r'$\tan 2\phi = \frac{2 a_1 a_2 \cos\delta}{a_1^2 - a_2^2}$, where $a_1, a_2$ are amplitudes and $\delta$ is the phase difference.'),
         (r'What is the orientation of the ellipse when the phase difference is $\delta = \pi/2$?',
          r'$\tan 2\phi = 0 \implies \phi = 0^\circ$; the principal axes coincide with the $x$ and $y$ axes.'),
         (r'What is the tilt angle $\phi$ when both orthogonal amplitudes are equal ($a_1 = a_2$)?',
          r'$\tan 2\phi = \infty \implies \phi = 45^\circ$; the major axis is tilted at $45^\circ$ to the coordinate axes.')],
  proof=dict(
      idea="Apply a coordinate rotation by angle phi and set the cross-term coefficient to zero.",
      why="The principal axes of a conic section are those in which no cross product term exists.",
      rungs=[
        ("Express the rotated electric field components $(E_\\xi, E_\\eta)$ at angle $\\phi$ to the original axes.",
         r'$$E_x = E_\xi\cos\phi - E_\eta\sin\phi,\qquad E_y = E_\xi\sin\phi + E_\eta\cos\phi$$',
         "Standard 2D coordinate rotation through angle $\\phi$."),
        ("Substitute the rotated coordinates into the general equation of the polarisation ellipse.",
         r'$$\frac{(E_\xi\cos\phi - E_\eta\sin\phi)^2}{a_1^2} + \frac{(E_\xi\sin\phi + E_\eta\cos\phi)^2}{a_2^2} - \frac{2(E_\xi\cos\phi - E_\eta\sin\phi)(E_\xi\sin\phi + E_\eta\cos\phi)\cos\delta}{a_1 a_2} = \sin^2\delta$$',
         "Transformation into rotated frame."),
        ("Collect the coefficient of the cross product term $E_\\xi E_\\eta$ and require it to vanish.",
         r'$$E_\xi E_\eta \left[-\frac{2\sin\phi\cos\phi}{a_1^2} + \frac{2\sin\phi\cos\phi}{a_2^2} - \frac{2(\cos^2\phi - \sin^2\phi)\cos\delta}{a_1 a_2}\right] = 0$$',
         "Vanishing cross term identifies the principal axes."),
        ("Simplify using double-angle identities $\\sin 2\\phi = 2\\sin\\phi\\cos\\phi$ and $\\cos 2\\phi = \\cos^2\\phi - \\sin^2\\phi$.",
         r'$$\sin 2\phi\left(\frac{1}{a_2^2} - \frac{1}{a_1^2}\right) = \frac{2\cos 2\phi\cos\delta}{a_1 a_2} \implies \tan 2\phi = \frac{2 a_1 a_2\cos\delta}{a_1^2 - a_2^2}$$',
         "Principal axis orientation formula (Ghatak Eq. 22.35).")],
      ends="Tilt angle of the polarisation ellipse."))

W('q.op.4.10', '4.1', 5,
  "Polarisation State, Ellipse Parameters, and Direction of Rotation",
  "Ghatak 6e §22.4, Examples 22.1 & 22.3",
  r'''A monochromatic electromagnetic plane wave propagating along the $+z$ direction has electric field components given by
$$E_x = a\cos\omega t, \qquad E_y = a\cos\left(\omega t + \frac{\pi}{4}\right).$$
<p>(a) Determine the equation of the locus traced by the tip of the electric field vector in the $x$-$y$ plane.</p>
<p>(b) Calculate the inclination angle $\phi$ of the major axis of this ellipse with respect to the $x$-axis.</p>
<p>(c) Determine the direction of rotation of the electric vector looking toward the oncoming light source (propagation in $+z$ into the page), and classify the state of polarisation.</p>''',
  ['c.4.1.2', 'c.4.1.3'],
  r'''Eliminate $\omega t$ using $\delta = \pi/4$, evaluate $\tan 2\phi = \frac{2 a_1 a_2\cos\delta}{a_1^2 - a_2^2}$, evaluate $\mathbf{E}(t)$ at $\omega t = 0$ and $\omega t = \pi/4$ to determine the sense of rotation.''',
  r'''<p><b>(a) Equation of the locus:</b></p>
<p>Here $a_1 = a$, $a_2 = a$, and the phase difference is $\delta = \pi/4$. Substituting into the general ellipse equation:</p>
$$\frac{E_x^2}{a^2} + \frac{E_y^2}{a^2} - \frac{2 E_x E_y}{a^2}\cos\left(\frac{\pi}{4}\right) = \sin^2\left(\frac{\pi}{4}\right).$$
<p>Since $\cos(\pi/4) = \sin(\pi/4) = 1/\sqrt{2}$ and $\sin^2(\pi/4) = 1/2$:</p>
$$\frac{E_x^2}{a^2} + \frac{E_y^2}{a^2} - \frac{\sqrt{2}\, E_x E_y}{a^2} = \frac{1}{2} \implies E_x^2 + E_y^2 - \sqrt{2}\, E_x E_y = \frac{a^2}{2}.$$
<p>This is the Cartesian equation of an ellipse centered at the origin.</p>

<p><b>(b) Orientation of the principal axes:</b></p>
<p>The tilt angle $\phi$ of the major axis to the $x$-axis is given by</p>
$$\tan 2\phi = \frac{2 a_1 a_2 \cos\delta}{a_1^2 - a_2^2} = \frac{2 a^2 \cos(\pi/4)}{a^2 - a^2} = \frac{\sqrt{2} a^2}{0} = \infty.$$
<p>Therefore:</p>
$$2\phi = \frac{\pi}{2} \implies \phi = 45^\circ = \frac{\pi}{4}\text{ rad}.$$
<p>The major axis of the ellipse is oriented at exactly $45^\circ$ to the $x$-axis.</p>

<p><b>(c) Direction of rotation and state of polarisation:</b></p>
<p>Track the electric field vector at successive instants of time:</p>
<ul>
<li>At $\omega t = 0$: $E_x = a$, $E_y = a\cos(\pi/4) = \frac{a}{\sqrt{2}} \approx 0.707 a$. The vector lies in the first quadrant: $\mathbf{E} = (a, 0.707 a)$.</li>
<li>At $\omega t = \pi/4$: $E_x = a\cos(\pi/4) = \frac{a}{\sqrt{2}}$, $E_y = a\cos(\pi/2) = 0$. The vector lies on the positive $x$-axis: $\mathbf{E} = (0.707 a, 0)$.</li>
<li>At $\omega t = \pi/2$: $E_x = 0$, $E_y = a\cos(3\pi/4) = -\frac{a}{\sqrt{2}}$. The vector lies on the negative $y$-axis: $\mathbf{E} = (0, -0.707 a)$.</li>
</ul>
<p>Looking toward the source (with the wave propagating into the page along $+z$), the vector moves from $(a, 0.707 a)$ toward $(0.707 a, 0)$, which corresponds to a <b>clockwise</b> rotation.</p>
<p>By Ghatak's convention (consistent with Feynman), a clockwise rotation of the electric vector looking against the direction of propagation corresponds to <b>right-elliptically polarized (REP) light</b>.</p>''',
  r'''Assuming the ellipse is aligned with the coordinate axes, or misidentifying the rotation direction by confusing the sign of $\delta$.''')

W('q.op.4.11', '4.4', 5,
  "Design of Calcite Quarter-Wave and Half-Wave Retardation Plates",
  "Ghatak 6e §22.6, Example 22.6",
  r'''At room temperature and wavelength $\lambda_0 = 589.3\text{ nm} = 5893\text{ \AA}$ (sodium D-line), the principal refractive indices of uniaxial negative calcite are $n_o = 1.65836$ and $n_e = 1.48641$.
<p>(a) Calculate the minimum thickness $d_{\rm QWP}$ of a calcite crystal plate cut with its optic axis parallel to the faces that will act as a quarter-wave plate at this wavelength.</p>
<p>(b) Calculate the minimum thickness $d_{\rm HWP}$ of the same crystal to act as a half-wave plate.</p>
<p>(c) What is the general expression for higher-order thicknesses of calcite retardation plates that produce the same quarter-wave and half-wave retardation?</p>''',
  ['c.4.4.1', 'c.4.4.2'],
  r'''In a negative crystal $n_o > n_e$, so optical path difference is $(n_o - n_e)d$. For a QWP, $(n_o - n_e)d = \lambda_0/4$; for an HWP, $(n_o - n_e)d = \lambda_0/2$. Substitute $n_o - n_e = 0.17195$ and $\lambda_0 = 5.893\times 10^{-7}\text{ m}$.''',
  r'''<p><b>(a) Minimum thickness of Quarter-Wave Plate (QWP):</b></p>
<p>Calcite is a negative uniaxial crystal with $n_o > n_e$. The optical path difference introduced between the ordinary ray and extraordinary ray upon traversing a thickness $d$ at normal incidence is</p>
$$\Delta = (n_o - n_e) d.$$
<p>For a quarter-wave plate, this path difference must equal a quarter wavelength ($\Delta = \lambda_0 / 4$), introducing a phase difference $\delta = \pi/2$:</p>
$$(n_o - n_e) d_{\rm QWP} = \frac{\lambda_0}{4} \implies d_{\rm QWP} = \frac{\lambda_0}{4(n_o - n_e)}.$$
<p>Given $n_o = 1.65836$ and $n_e = 1.48641$:</p>
$$n_o - n_e = 1.65836 - 1.48641 = 0.17195.$$
<p>Substituting $\lambda_0 = 5.893\times 10^{-7}\text{ m}$:</p>
$$d_{\rm QWP} = \frac{5.893\times 10^{-7}\text{ m}}{4 \times 0.17195} = \frac{5.893\times 10^{-7}}{0.6878}\text{ m} \approx 8.568\times 10^{-7}\text{ m} = 0.857\ \mu\text{m} = 0.000857\text{ mm}.$$

<p><b>(b) Minimum thickness of Half-Wave Plate (HWP):</b></p>
<p>For a half-wave plate, the path difference must equal half a wavelength ($\Delta = \lambda_0 / 2$), introducing a phase difference $\delta = \pi$:</p>
$$(n_o - n_e) d_{\rm HWP} = \frac{\lambda_0}{2} \implies d_{\rm HWP} = \frac{\lambda_0}{2(n_o - n_e)} = 2 d_{\rm QWP}.$$
$$d_{\rm HWP} = 2 \times (8.568\times 10^{-7}\text{ m}) \approx 1.714\times 10^{-6}\text{ m} = 1.714\ \mu\text{m} = 0.001714\text{ mm}.$$

<p><b>(c) Higher-order plate thicknesses:</b></p>
<p>Any thickness that introduces a phase difference $\delta = 2m\pi + \pi/2$ or path difference $\Delta = (2m + 1)\frac{\lambda_0}{4}$ will also function as a quarter-wave plate:</p>
$$d_{\rm QWP}^{(m)} = (2m + 1)\frac{\lambda_0}{4(n_o - n_e)}, \quad m = 0, 1, 2, \dots$$
<p>Similarly, for a half-wave plate, any odd multiple of $\lambda_0/2$ introduces $\delta = (2m + 1)\pi$:</p>
$$d_{\rm HWP}^{(m)} = (2m + 1)\frac{\lambda_0}{2(n_o - n_e)}, \quad m = 0, 1, 2, \dots$$
<p>In practice, zero-order plates ($m=0$) are extremely thin ($\sim 0.86\ \mu\text{m}$) and fragile, so either higher-order plates ($m \ge 1$) or cemented zero-order pairs of crossed plates are manufactured.</p>''',
  r'''Using $(n_e - n_o)$ instead of $(n_o - n_e)$ for calcite: calcite is negative ($n_o > n_e$), whereas quartz is positive ($n_e > n_o$).''')

W('q.op.4.12', '4.4', 5,
  "Transformation of Circularly Polarized Light by a Quarter-Wave Plate",
  "Ghatak 6e §22.6, Example 22.7",
  r'''A left circularly polarized (LCP) beam of light of wavelength $\lambda_0 = 589.3\text{ nm}$ is incident normally on a calcite quarter-wave plate whose optic axis is aligned along the $y$-direction.
<p>(a) Write down the electric field components of the incident LCP wave at the front surface $z = 0$.</p>
<p>(b) Account for the propagation speeds of the ordinary and extraordinary waves inside the crystal and calculate the phase difference introduced between them by the QWP.</p>
<p>(c) Determine the electric field components of the emergent wave and describe its state of polarisation and the orientation of its vibration axis.</p>''',
  ['c.4.1.2', 'c.4.4.1'],
  r'''Incident LCP wave: $E_x = E_0\sin\omega t, E_y = E_0\cos\omega t$. Optic axis along $y$ means $E_y$ is the extraordinary wave (fast in calcite, $n_e < n_o$) and $E_x$ is ordinary (slow, $n_o$). QWP introduces $\delta = \pi/2$ phase shift. Substitute and show resultant has zero phase difference, giving linear polarization at $45^\circ$.''',
  r'''<p><b>(a) Incident LCP wave:</b></p>
<p>A left circularly polarized (LCP) wave propagating in the $+z$ direction has electric field components at the entrance face $z = 0$ given by</p>
$$E_x(0, t) = E_0\sin\omega t, \qquad E_y(0, t) = E_0\cos\omega t.$$
<p>Here both components have equal amplitude $E_0$, and $E_x$ leads $E_y$ by $\pi/2$ (or phase difference $\delta = -\pi/2$), which corresponds to counter-clockwise rotation looking toward the oncoming beam.</p>

<p><b>(b) Propagation through the calcite QWP:</b></p>
<p>The optic axis is parallel to the $y$-axis. Calcite is a negative uniaxial crystal ($n_e < n_o$):</p>
<ul>
<li>The $y$-component vibrates parallel to the optic axis and propagates as the <b>extraordinary ray</b> with phase velocity $v_e = c/n_e$. Since $n_e$ is smaller, the e-ray is the <b>fast wave</b>.</li>
<li>The $x$-component vibrates perpendicular to the optic axis and propagates as the <b>ordinary ray</b> with phase velocity $v_o = c/n_o$. Since $n_o$ is larger, the o-ray is the <b>slow wave</b>.</li>
</ul>
<p>Upon traversing thickness $d$, the phase accumulated by each ray is</p>
$$\phi_o = n_o k_0 d, \qquad \phi_e = n_e k_0 d.$$
<p>The QWP thickness is chosen such that the relative phase difference is</p>
$$\delta = \phi_o - \phi_e = (n_o - n_e) k_0 d = \frac{\pi}{2}.$$

<p><b>(c) Emergent beam analysis:</b></p>
<p>At the exit face, shifting the time origin to absorb the fast phase $\phi_e$:</p>
$$E_y = E_0\cos\omega t,$$
$$E_x = E_0\sin(\omega t - \pi/2) = -E_0\cos\omega t.$$
<p>Taking the ratio of the components:</p>
$$\frac{E_x}{E_y} = \frac{-E_0\cos\omega t}{E_0\cos\omega t} = -1 \quad\text{at all times } t.$$
<p>This is the equation of a straight line:</p>
$$E_x = -E_y \implies E_y = -E_x.$$
<p><b>Conclusion:</b> The quarter-wave plate has completely transformed the circularly polarized beam into <b>linearly polarized light</b>. The plane of vibration is inclined at an angle of $-45^\circ$ (or $135^\circ$) with respect to the $x$-axis.</p>
<p>(This principle is routinely exploited in polarisation analysis: passing an unknown beam through a QWP converts circular light into linear light, which can then be completely extinguished by an analyzer polaroid.)</p>''',
  r'''Assuming a quarter-wave plate merely alters the phase of an already circular wave without changing its state: a QWP converts circular polarization to linear polarization, and vice versa.''')

W('q.op.4.13', '4.4', 5,
  "Handedness Inversion of Circularly Polarized Light by a Half-Wave Plate",
  "Ghatak 6e §22.6, Example 22.8",
  r'''A left circularly polarized (LCP) beam is incident normally on a calcite half-wave plate (HWP) whose optic axis is oriented along the $y$-axis.
<p>(a) Determine the phase difference introduced between the ordinary and extraordinary components by the half-wave plate.</p>
<p>(b) Derive the mathematical expression for the electric field components of the transmitted light.</p>
<p>(c) Show that the half-wave plate reverses the handedness of the circular polarization from LCP to right circularly polarized (RCP) light.</p>''',
  ['c.4.1.2', 'c.4.4.2'],
  r'''Incident LCP wave has $E_x = E_0\sin\omega t, E_y = E_0\cos\omega t$. An HWP introduces a phase difference of $\delta = \pi$. Apply the $\pi$ phase shift to $E_x$, yielding $E_x = E_0\sin(\omega t - \pi) = -E_0\sin\omega t$, and demonstrate this corresponds to clockwise (RCP) rotation.''',
  r'''<p><b>(a) Phase difference introduced by HWP:</b></p>
<p>For a half-wave plate made of a negative crystal like calcite ($n_o > n_e$), the thickness $d$ satisfies</p>
$$(n_o - n_e) d = \frac{\lambda_0}{2}.$$
<p>The phase difference introduced between the slow ($x$, ordinary) and fast ($y$, extraordinary) components is</p>
$$\delta = \phi_o - \phi_e = \frac{2\pi}{\lambda_0}(n_o - n_e) d = \frac{2\pi}{\lambda_0}\left(\frac{\lambda_0}{2}\right) = \pi\text{ radians}.$$

<p><b>(b) Transmitted electric field components:</b></p>
<p>Let the incident LCP wave be described by</p>
$$E_x^{\rm in} = E_0\sin\omega t, \qquad E_y^{\rm in} = E_0\cos\omega t.$$
<p>Passing through the HWP introduces an additional phase delay of $\pi$ to the slow component $E_x$ relative to $E_y$. The emergent fields become</p>
$$E_y^{\rm out} = E_0\cos\omega t,$$
$$E_x^{\rm out} = E_0\sin(\omega t - \pi) = -E_0\sin\omega t.$$

<p><b>(c) Handedness inversion (LCP $\to$ RCP):</b></p>
<p>Let us trace the trajectory of the emergent electric field vector $\mathbf{E}^{\rm out}(t)$ looking toward the oncoming light source (along $+z$ into the page):</p>
<ul>
<li>At $\omega t = 0$: $E_x^{\rm out} = 0$, $E_y^{\rm out} = E_0$. The vector points along $+y$: $\mathbf{E} = (0, E_0)$.</li>
<li>At $\omega t = \pi/2$: $E_x^{\rm out} = -E_0\sin(\pi/2) = -E_0$, $E_y^{\rm out} = E_0\cos(\pi/2) = 0$. The vector points along $-x$: $\mathbf{E} = (-E_0, 0)$.</li>
<li>At $\omega t = \pi$: $E_x^{\rm out} = 0$, $E_y^{\rm out} = -E_0$. The vector points along $-y$: $\mathbf{E} = (0, -E_0)$.</li>
<li>At $\omega t = 3\pi/2$: $E_x^{\rm out} = +E_0$, $E_y^{\rm out} = 0$. The vector points along $+x$: $\mathbf{E} = (E_0, 0)$.</li>
</ul>
<p>The tip of the electric vector rotates on the circumference of a circle of radius $E_0$ in the <b>clockwise</b> direction.</p>
<p>By definition, a clockwise rotation looking against the direction of propagation corresponds to <b>right circularly polarized (RCP) light</b>.</p>
<p><b>Conclusion:</b> A half-wave plate reverses the handedness of circularly polarized light, transforming LCP into RCP (and vice-versa).</p>''',
  r'''Confusing a quarter-wave plate with a half-wave plate: a QWP changes circular light into linear light, whereas an HWP preserves circularity but inverts its handedness (LCP $\leftrightarrow$ RCP).''')

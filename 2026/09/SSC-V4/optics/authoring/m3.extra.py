# Module III Extra — Schuster Summation, Double-Slit & Grating Examples, Straight Edge. Ghatak 6e §18.6–18.8, 20.2, 20.6.

C('c.3.4.4', '3.4', 'method', "Schuster's Summation Method for Fresnel Half-Period Zones",
  "Schuster groups alternating zone amplitudes as u = u₁/2 + (u₁/2 − u₂ + u₃/2) + ... proving the resultant amplitude is half that of the first zone, u = u₁/2, giving intensity I = I₁/4.",
  r'''Fresnel half-period zones divide an unobstructed plane or spherical wavefront into annular zones whose distances from an axial observation point $P$ differ by successive half-wavelengths ($\lambda/2$). Because disturbances from adjacent zones are out of phase by $\pi$, the resultant amplitude is an alternating series:
$$u(P) = u_1 - u_2 + u_3 - u_4 + \dots + (-1)^{m+1} u_m + \dots$$
Although zone areas are approximately equal ($A_n \approx \pi\lambda d$), the amplitudes decrease monotonically ($u_1 > u_2 > u_3 > \dots$) owing to increasing distance and the obliquity factor $\frac{1}{2}(1 + \cos\theta)$.
<p>Each amplitude is approximately the arithmetic mean of its adjacent neighbours: $u_n \approx \frac{1}{2}(u_{n-1} + u_{n+1})$. Schuster grouped the terms into two equivalent forms:</p>
$$u(P) = \frac{u_1}{2} + \left(\frac{u_1}{2} - u_2 + \frac{u_3}{2}\right) + \left(\frac{u_3}{2} - u_4 + \frac{u_5}{2}\right) + \dots$$
and
$$u(P) = u_1 - \frac{u_2}{2} - \left(\frac{u_2}{2} - u_3 + \frac{u_4}{2}\right) - \left(\frac{u_4}{2} - u_5 + \frac{u_6}{2}\right) - \dots$$
Because each bracketed difference vanishes to first order ($\frac{u_{n-1}}{2} - u_n + \frac{u_{n+1}}{2} \approx 0$), both groupings converge to:
$$\boxed{u(P) = \frac{u_1}{2}}, \qquad \boxed{I(P) = \frac{I_1}{4}}.$$
Thus, the amplitude produced by the entire unobstructed wavefront at $P$ is exactly half the amplitude produced by the first half-period zone alone, and its intensity is one-fourth the intensity of the first zone.''',
  r'''If you add up a series that alternates plus and minus with slowly decreasing numbers, you might wonder where the total lands. Schuster showed that by splitting the first term in half and grouping each intermediate term with half of its two neighbours, every single bracket cancels out almost completely. All that survives is the first half-slice of zone 1. This proves that an infinite unobstructed wavefront produces an intensity only one-quarter of what the tiny central zone would deliver if all the other zones were blocked out.''',
  needs=['c.3.4.1'],
  traps=[r'Assuming the whole wavefront produces greater intensity than a single zone: the first zone acting alone produces four times the intensity ($I_1 = 4 I$) because outer zones destructively interfere.',
         r'Thinking the alternating series oscillates indefinitely without converging: the smooth obliquity factor ensures rapid asymptotic convergence.'],
  cards=[(r'State Schuster\'s formula for the resultant amplitude of an unobstructed wavefront.',
          r'$u(P) = \frac{u_1}{2}$, where $u_1$ is the amplitude of the first half-period zone.'),
         (r'How does the resultant intensity of an unobstructed wavefront compare to that of the first zone alone?',
          r'$I = \frac{I_1}{4}$, so the first zone alone produces four times the intensity of the entire wavefront.'),
         (r'Why do the bracketed terms in Schuster\'s grouping vanish?',
          r'Because each zone amplitude is approximately the arithmetic mean of its neighbours, $\frac{1}{2}(u_{n-1} + u_{n+1}) - u_n \approx 0$.')],
  proof=dict(
      idea="Split the first term in half and group each zone with half of its predecessor and successor.",
      why="Demonstrates that the alternating series converges rigorously to half of the first zone's contribution.",
      rungs=[
        ("Write the net disturbance at $P$ as an alternating sum over Fresnel half-period zones.",
         r'$$u(P) = u_1 - u_2 + u_3 - u_4 + \dots + (-1)^{m+1} u_m$$',
         "Adjacent zones differ by $\\pi$ in phase due to $\\lambda/2$ optical path increments."),
        ("Decompose the alternating sum by splitting alternate amplitudes into halves.",
         r'$$u(P) = \frac{u_1}{2} + \Big(\frac{u_1}{2} - u_2 + \frac{u_3}{2}\Big) + \Big(\frac{u_3}{2} - u_4 + \frac{u_5}{2}\Big) + \dots$$',
         "Algebraic regrouping of terms introduced by Schuster."),
        ("Apply the arithmetic mean approximation for slowly varying zone amplitudes $u_n \\approx \\frac{1}{2}(u_{n-1} + u_{n+1})$.",
         r'$$\frac{u_{n-1}}{2} - u_n + \frac{u_{n+1}}{2} \approx 0 \implies u(P) \approx \frac{u_1}{2} + \frac{u_m}{2}$$',
         "Obliquity factor decreases smoothly and monotonically across zones."),
        ("Neglect the contribution of the distant boundary zone $u_m \\ll u_1$ and compute the intensity.",
         r'$$u(P) = \frac{u_1}{2} \implies I(P) = |u(P)|^2 = \frac{u_1^2}{4} = \frac{I_1}{4}$$',
         "Unobstructed wavefront yields one-quarter the intensity of the first zone alone.")],
      ends="Schuster's summation for Fresnel half-period zones."))

W('q.op.3.11', '3.2', 5,
  "Double-Slit Diffraction Envelope, Missing Orders, and Fringe Width",
  "Ghatak 6e §18.6, Example 18.9",
  r'''In a double-slit Fraunhofer diffraction experiment, the slit width is $b = 0.0088\text{ cm} = 8.8\times 10^{-3}\text{ cm}$, the slit separation is $d = 0.070\text{ cm} = 7.0\times 10^{-2}\text{ cm}$, and the wavelength of incident light is $\lambda = 6.328\times 10^{-5}\text{ cm}$ (He-Ne laser).
<p>(a) Find the angular half-width of the central diffraction envelope and determine the total number of interference minima that fall within the central diffraction maximum (between the two first-order diffraction minima).</p>
<p>(b) If the interference pattern is observed on a screen placed at a distance of $D = 15\text{ ft}$, calculate the fringe width $\beta$ on the screen in centimetres.</p>''',
  ['c.3.1.2', 'c.3.2.1'],
  r'''First-order single-slit diffraction minima occur at $\sin\theta = \pm \lambda/b$. Double-slit interference minima occur at $\sin\theta = (n + 1/2)\lambda/d$. Find the maximum integer $n$ satisfying $\sin\theta < \lambda/b$, double it to account for both sides, and calculate fringe width $\beta = \lambda D / d$ using $1\text{ ft} = 12\times 2.54\text{ cm} = 30.48\text{ cm}$.''',
  r'''<p><b>(a) Number of interference minima within the central diffraction peak:</b></p>
<p>The central diffraction maximum is bounded by the first single-slit diffraction minima at</p>
$$\sin\theta_1 = \pm\frac{\lambda}{b} = \pm\frac{6.328\times 10^{-5}\text{ cm}}{0.0088\text{ cm}} \approx \pm 7.191\times 10^{-3}\text{ rad}.$$
<p>Double-slit interference minima occur at angles given by</p>
$$d\sin\theta = \left(n + \frac{1}{2}\right)\lambda \implies \sin\theta = \left(n + \frac{1}{2}\right)\frac{\lambda}{d}, \quad n = 0, 1, 2, \dots$$
<p>Evaluating the angular step:</p>
$$\frac{\lambda}{d} = \frac{6.328\times 10^{-5}\text{ cm}}{0.070\text{ cm}} \approx 9.040\times 10^{-4}\text{ rad} = 0.904\times 10^{-3}\text{ rad}.$$
<p>Thus the interference minima on the positive side occur at</p>
$$\sin\theta = 0.904\times 10^{-3}\left(n + \frac{1}{2}\right).$$
<p>For these minima to lie within the central diffraction peak ($\sin\theta < \sin\theta_1$):</p>
$$0.904\times 10^{-3}\left(n + \frac{1}{2}\right) < 7.191\times 10^{-3} \implies n + \frac{1}{2} < \frac{7.191}{0.904} \approx 7.95 \implies n \le 7.$$
<p>Thus $n$ takes 8 values: $n = 0, 1, 2, 3, 4, 5, 6, 7$, corresponding to 8 minima on the positive side of the center:</p>
$$\sin\theta = 0.452\times 10^{-3},\; 1.356\times 10^{-3},\; 2.260\times 10^{-3},\; 3.164\times 10^{-3},\; 4.068\times 10^{-3},\; 4.972\times 10^{-3},\; 5.876\times 10^{-3},\; 6.780\times 10^{-3}.$$
<p>By symmetry, there are also 8 interference minima on the negative side ($\sin\theta < 0$).</p>
<p>Therefore, the total number of interference minima between the two first-order diffraction minima is</p>
$$N_{\rm minima} = 8 + 8 = 16.$$

<p><b>(b) Fringe width on the screen:</b></p>
<p>The screen distance is $D = 15\text{ ft}$. Converting to centimetres:</p>
$$D = 15 \times 12 \times 2.54\text{ cm} = 180 \times 2.54\text{ cm} = 457.2\text{ cm}.$$
<p>The fringe width $\beta$ is the linear separation between adjacent interference maxima:</p>
$$\beta = \frac{\lambda D}{d} = D\left(\frac{\lambda}{d}\right) = (457.2\text{ cm}) \times (9.040\times 10^{-4}) \approx 0.0413\text{ cm} = 0.413\text{ mm}.$$''',
  r'''Omitting the minima on the negative side (reporting 8 instead of 16), or forgetting to convert feet to centimetres when evaluating fringe width.''')

W('q.op.3.12', '3.3', 5,
  "Diffraction Grating Overlapping Orders and Sodium Doublet Resolution",
  "Ghatak 6e §18.8, Example 18.10",
  r'''A plane transmission diffraction grating has $15,000\text{ lines per inch}$.
<p>(a) If illuminated normally with white light (visible range $4000\text{ \AA}$ to $7000\text{ \AA}$), show that the second-order and third-order spectra overlap, and determine the angular span of the overlapping region.</p>
<p>(b) Calculate the angular separation $\Delta\theta$ between the sodium $D_1$ and $D_2$ lines ($\lambda_1 = 5890\text{ \AA}$, $\lambda_2 = 5896\text{ \AA}$, $\Delta\lambda = 6\text{ \AA}$) in the second-order spectrum.</p>
<p>(c) Determine the minimum number of lines $N_{\rm min}$ the grating must have to resolve the sodium doublet in the second order according to Rayleigh's criterion.</p>''',
  ['c.3.3.1', 'c.3.3.2', 'c.3.3.3'],
  r'''Grating element $d = 2.54 / 15000\text{ cm} = 1.693\times 10^{-4}\text{ cm}$. Compare $\sin\theta_{2r} = 2\lambda_r / d$ with $\sin\theta_{3v} = 3\lambda_v / d$. Angular dispersion $d\theta/d\lambda = m / (d\cos\theta)$. Resolving power $\lambda/\Delta\lambda = m N$.''',
  r'''<p><b>(a) Overlapping of 2nd and 3rd order spectra:</b></p>
<p>The grating element $d$ is</p>
$$d = \frac{2.54\text{ cm}}{15000} \approx 1.693\times 10^{-4}\text{ cm}.$$
<p>For violet light ($\lambda_v = 4000\text{ \AA} = 4\times 10^{-5}\text{ cm}$) and red light ($\lambda_r = 7000\text{ \AA} = 7\times 10^{-5}\text{ cm}$):</p>
<p>In the 2nd order ($m=2$):</p>
$$\sin\theta_{2v} = \frac{2(4\times 10^{-5}\text{ cm})}{1.693\times 10^{-4}\text{ cm}} \approx 0.4725 \implies \theta_{2v} \approx 28.2^\circ.$$
$$\sin\theta_{2r} = \frac{2(7\times 10^{-5}\text{ cm})}{1.693\times 10^{-4}\text{ cm}} \approx 0.8268 \implies \theta_{2r} \approx 55.8^\circ.$$
<p>In the 3rd order ($m=3$):</p>
$$\sin\theta_{3v} = \frac{3(4\times 10^{-5}\text{ cm})}{1.693\times 10^{-4}\text{ cm}} \approx 0.7087 \implies \theta_{3v} \approx 45.1^\circ.$$
$$\sin\theta_{3r} = \frac{3(7\times 10^{-5}\text{ cm})}{1.693\times 10^{-4}\text{ cm}} = 1.240 > 1 \implies \text{not observed.}$$
<p>Since $\theta_{3v} (45.1^\circ) < \theta_{2r} (55.8^\circ)$, the beginning of the 3rd order spectrum falls within the angular range of the 2nd order spectrum. Specifically, wavelengths from $\lambda = 4000\text{ \AA}$ in 3rd order overlap with $\lambda = \frac{3}{2}(4000\text{ \AA}) = 6000\text{ \AA}$ in 2nd order at $\theta \approx 45.1^\circ$, continuing up to the red limit of the 2nd order at $55.8^\circ$.</p>

<p><b>(b) Angular separation of the sodium doublet in 2nd order:</b></p>
<p>Mean wavelength $\lambda = 5893\text{ \AA} = 5.893\times 10^{-5}\text{ cm}$ and $\Delta\lambda = 6\text{ \AA} = 6\times 10^{-8}\text{ cm}$.</p>
$$\sin\theta = \frac{m\lambda}{d} = \frac{2(5.893\times 10^{-5}\text{ cm})}{1.693\times 10^{-4}\text{ cm}} \approx 0.6961 \implies \theta \approx 44.12^\circ \implies \cos\theta \approx 0.7179.$$
<p>Differentiating the grating equation $d\sin\theta = m\lambda$ yields</p>
$$\Delta\theta = \frac{m\Delta\lambda}{d\cos\theta} = \frac{2(6\times 10^{-8}\text{ cm})}{(1.693\times 10^{-4}\text{ cm})(0.7179)} \approx \frac{1.20\times 10^{-7}}{1.215\times 10^{-4}} \approx 9.87\times 10^{-4}\text{ rad} \approx 0.0010\text{ rad}.$$
<p>In minutes of arc:</p>
$$\Delta\theta \approx 0.0010 \times \left(\frac{180 \times 60}{\pi}\right)' \approx 3.4'.$$

<p><b>(c) Minimum number of lines required:</b></p>
<p>According to Rayleigh's criterion for a grating, the resolving power is</p>
$$\frac{\lambda}{\Delta\lambda} = m N \implies N_{\rm min} = \frac{\lambda}{m\,\Delta\lambda}.$$
<p>For the sodium doublet in second order ($m=2$):</p>
$$N_{\rm min} = \frac{5893\text{ \AA}}{2 \times 6\text{ \AA}} = \frac{5893}{12} \approx 491.1 \implies 492\text{ lines}.$$
<p>(In the first order $m=1$, $N_{\rm min} = 5893/6 \approx 982$ lines would be required.)</p>''',
  r'''Confusing lines per inch with lines per centimetre ($1\text{ inch} = 2.54\text{ cm}$), or forgetting that resolving power is proportional to the spectral order $m$.''')

W('q.op.3.13', '3.5', 5,
  "Fresnel Diffraction at a Straight Edge: Scale Factor and Fringe Positions",
  "Ghatak 6e §20.6",
  r'''A monochromatic plane wave of wavelength $\lambda = 6.0\times 10^{-5}\text{ cm} = 600\text{ nm}$ is incident normally on a straight opaque edge. The diffraction pattern is observed on a screen placed at distance $d = 120\text{ cm}$ behind the edge.
<p>(a) Determine the conversion factor relating the physical distance $y$ on the screen to the dimensionless Fresnel variable $v_0 = y\sqrt{\frac{2}{d\lambda}}$.</p>
<p>(b) Using the universal extrema of the Cornu spiral ($v_{\rm max} = 1.22, 2.34, 3.08$ and $v_{\rm min} = 1.87, 2.74$), find the physical positions of the first three diffraction maxima and the first two diffraction minima from the edge of the geometrical shadow.</p>
<p>(c) State the intensity at the edge of the geometrical shadow ($y=0$) and deep inside the illuminated region, relative to the unobstructed intensity $I_0$.</p>''',
  ['c.3.5.1'],
  r'''The dimensionless variable is $v_0 = y\sqrt{2/(d\lambda)} \implies y = v_0\sqrt{d\lambda/2}$. Substitute $d=120\text{ cm}$ and $\lambda=6.0\times 10^{-5}\text{ cm}$ to get the linear scaling factor, then multiply by the universal extrema values.''',
  r'''<p><b>(a) Linear scaling factor:</b></p>
<p>The dimensionless Fresnel variable $v_0$ is defined as</p>
$$v_0 = y\sqrt{\frac{2}{d\lambda}} \implies y = v_0\sqrt{\frac{d\lambda}{2}}.$$
<p>Substituting $d = 120\text{ cm}$ and $\lambda = 6.0\times 10^{-5}\text{ cm}$:</p>
$$\sqrt{\frac{d\lambda}{2}} = \sqrt{\frac{120 \times 6.0\times 10^{-5}}{2}} = \sqrt{3.60\times 10^{-3}} = \sqrt{36\times 10^{-4}} = 6.0\times 10^{-2}\text{ cm} = 0.60\text{ mm}.$$
<p>Thus the physical distance on the screen is directly given by</p>
$$y = 0.60\, v_0\text{ mm}.$$

<p><b>(b) Physical positions of diffraction maxima and minima:</b></p>
<p>Using the universal values of $v_0$ from Ghatak Table 20.1 / §20.6:</p>
<p><b>Diffraction Maxima:</b></p>
<ul>
<li><b>First maximum ($v_1 = 1.22$):</b> $y_1 = 0.60 \times 1.22 = 0.732\text{ mm}$ (Intensity $I \approx 1.37 I_0$).</li>
<li><b>Second maximum ($v_2 = 2.34$):</b> $y_2 = 0.60 \times 2.34 = 1.404\text{ mm}$ (Intensity $I \approx 1.20 I_0$).</li>
<li><b>Third maximum ($v_3 = 3.08$):</b> $y_3 = 0.60 \times 3.08 = 1.848\text{ mm}$ (Intensity $I \approx 1.15 I_0$).</li>
</ul>
<p><b>Diffraction Minima:</b></p>
<ul>
<li><b>First minimum ($v_1' = 1.87$):</b> $y_1' = 0.60 \times 1.87 = 1.122\text{ mm}$ (Intensity $I \approx 0.78 I_0$).</li>
<li><b>Second minimum ($v_2' = 2.74$):</b> $y_2' = 0.60 \times 2.74 = 1.644\text{ mm}$ (Intensity $I \approx 0.84 I_0$).</li>
</ul>
<p>Notice that the fringes are not equally spaced: the spacing between consecutive fringes decreases rapidly as one moves away from the shadow edge into the illuminated region.</p>

<p><b>(c) Intensity at key boundaries:</b></p>
<ul>
<li><b>At the geometrical shadow edge ($y = 0, v_0 = 0$):</b> $C(0) = S(0) = 0$, so the intensity is exactly
$$I(0) = \frac{I_0}{2}\left[\left(\frac{1}{2} + 0\right)^2 + \left(\frac{1}{2} + 0\right)^2\right] = \frac{I_0}{2}\left(\frac{1}{4} + \frac{1}{4}\right) = \frac{I_0}{4} = 0.25 I_0.$$
The intensity at the shadow boundary is exactly one-fourth of the unobstructed intensity.</li>
<li><b>Deep inside the illuminated region ($y \to +\infty, v_0 \to +\infty$):</b> $C(\infty) = S(\infty) = 1/2$, giving $I \to I_0$.</li>
<li><b>Deep inside the geometrical shadow ($y \to -\infty, v_0 \to -\infty$):</b> $C(-\infty) = S(-\infty) = -1/2$, giving $I \to 0$.</li>
</ul>''',
  r'''Assuming straight-edge fringes are equally spaced like double-slit fringes, or assuming the intensity at the geometrical shadow edge is zero rather than $I_0/4$.''')

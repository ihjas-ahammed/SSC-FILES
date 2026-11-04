# Module IV — Polarisation: written exercises (Level 3).

W('q.op.4.01', '4.1', 4, 'Identify the state of polarisation', 'Subrahmanyam–Brij Lal–Avadhanulu §20.2 (standard exercise)',
  r'''<p>Identify the polarisation of each beam travelling along $+z$ and give the ellipse axes where relevant:</p>
<p>(a) $E_x=2\cos\omega t,\ E_y=2\cos\omega t$; (b) $E_x=2\cos\omega t,\ E_y=2\sin\omega t$; (c) $E_x=3\cos\omega t,\ E_y=-2\sin\omega t$.</p>''',
  ['c.4.1.2'],
  r'''<p>Write $E_y=b\cos(\omega t+\delta)$ and read off $\delta$ and the amplitudes; then use the ellipse $\dfrac{E_x^2}{a^2}+\dfrac{E_y^2}{b^2}-\dfrac{2E_xE_y}{ab}\cos\delta=\sin^2\delta$.</p>''',
  r'''<p><b>(a)</b> $\delta=0$, equal amplitudes: <b>linear</b> polarisation along $y=x$ (at $45^\circ$), amplitude $2\sqrt2$.</p>
<p><b>(b)</b> $E_y=2\cos(\omega t-\pi/2)$, so $\delta=-\pi/2$ and $a=b=2$: <b>circular</b>, $E_x^2+E_y^2=4$. At $t=0$ the tip is at $(2,0)$; a quarter period later it is at $(0,2)$, so the rotation is counter-clockwise as seen looking back toward the source (left-handed in the optics convention).</p>
<p><b>(c)</b> $E_y=-2\sin\omega t=2\cos(\omega t+\pi/2)$: $\delta=\pi/2$, $a=3$, $b=2$, so the light is <b>elliptical</b>: $\dfrac{E_x^2}{9}+\dfrac{E_y^2}{4}=1$, semi-axes $3$ along $x$ and $2$ along $y$; the tip moves clockwise from $(3,0)$ toward $(0,-2)$.</p>''',
  'Calling (b) elliptical and (c) circular because $\\delta=\\pi/2$ in both: a circle needs equal amplitudes as well.')

W('q.op.4.02', '4.2', 4, "Brewster's angle for glass and water", 'Subrahmanyam–Brij Lal–Avadhanulu §20.5 (standard exercise)',
  r'''<p>(a) Find the polarising angle and the angle of refraction for glass of index $1.52$. (b) Sunlight is reflected from a calm lake ($n=1.33$). At what elevation of the Sun above the horizon is the reflected light completely polarised, and in which direction is it polarised?</p>''',
  ['c.4.2.1'],
  r'''<p>Use $\tan\theta_B=n$ and $\theta_B+\theta_r=90^\circ$. The angle is measured from the normal, which is vertical for a horizontal lake.</p>''',
  r'''<p><b>(a)</b> $\theta_B=\tan^{-1}1.52=56.7^\circ$; the refracted angle is $\theta_r=90^\circ-56.7^\circ=33.3^\circ$ (check: $\sin56.7^\circ=1.52\sin33.3^\circ$).</p>
<p><b>(b)</b> $\theta_B=\tan^{-1}1.33=53.1^\circ$ from the vertical, so the Sun's elevation is $90^\circ-53.1^\circ=36.9^\circ$. The reflected light is polarised <b>horizontally</b> (perpendicular to the plane of incidence, which is vertical) — which is why vertical-axis polarising sunglasses cut lake glare.</p>''',
  'Reporting the elevation as $53^\\circ$: Brewster\'s angle is from the normal (vertical), the elevation is from the horizontal.')

W('q.op.4.03', '4.2', 4, 'Nicol prism: the critical angle', 'Subrahmanyam–Brij Lal–Avadhanulu §20.6 (standard exercise)',
  r'''<p>In a Nicol prism, calcite ($n_o=1.658$, $n_e=1.486$) is cemented with Canada balsam ($n=1.55$). (a) Show that only the ordinary ray can be totally reflected at the balsam, and find the critical angle. (b) What is the speed of each ray in calcite?</p>''',
  ['c.4.2.3', 'c.4.4.1'],
  r'''<p>Total internal reflection needs the ray to go from a higher to a lower index. Compare $n_o$ and $n_e$ with $1.55$. Speed is $c/n$.</p>''',
  r'''<p><b>(a)</b> For the o-ray $n_o=1.658>1.55$: balsam is the <i>rarer</i> medium, so total reflection is possible beyond
$$\theta_c=\sin^{-1}\frac{1.55}{1.658}=\sin^{-1}0.935=69.2^\circ.$$
For the e-ray $n_e=1.486<1.55$: balsam is denser, so it is transmitted (no total reflection).</p>
<p><b>(b)</b> $v_o=c/1.658=1.81\times10^{8}$ m/s and $v_e=c/1.486=2.02\times10^{8}$ m/s (the e-wave is faster: calcite is a negative crystal).</p>''',
  'Applying total internal reflection to the e-ray: its index is lower than the balsam\'s, so it goes straight through.')

W('q.op.4.04', '4.3', 5, "Malus' law with several polarisers", 'Subrahmanyam–Brij Lal–Avadhanulu §20.7 (standard exercise)',
  r'''<p>Unpolarised light of intensity $I_0$ passes through (a) two ideal polarisers whose axes differ by $30^\circ$; (b) three ideal polarisers with axes at $0^\circ$, $45^\circ$, $90^\circ$; (c) three ideal polarisers at $0^\circ$, $60^\circ$, $90^\circ$. Find the transmitted intensity in each case.</p>''',
  ['c.4.3.1', 'c.4.3.2'],
  r'''<p>The first polariser halves the unpolarised light. After that multiply by $\cos^2$ of the angle between <i>successive</i> axes.</p>''',
  r'''<p><b>(a)</b> $I=\tfrac12I_0\cos^230^\circ=\tfrac12I_0\times\tfrac34=0.375\,I_0$.</p>
<p><b>(b)</b> $I=\tfrac12I_0\cos^245^\circ\cos^245^\circ=\tfrac12I_0\times\tfrac12\times\tfrac12=0.125\,I_0=I_0/8$.</p>
<p><b>(c)</b> $I=\tfrac12I_0\cos^260^\circ\cos^230^\circ=\tfrac12I_0\times\tfrac14\times\tfrac34=0.094\,I_0$.</p>''',
  'Using the angle between the first and last polariser (90°, which would give zero) instead of the angle between neighbours.')

W('q.op.4.05', '4.3', 4, 'Partially polarised light', 'Subrahmanyam–Brij Lal–Avadhanulu §20.7 (standard exercise)',
  r'''<p>A beam is a mixture of unpolarised and plane-polarised light of total intensity $10$ units. Rotating an analyser gives a maximum intensity that is four times the minimum. Find (a) $I_{\max}$ and $I_{\min}$, (b) the degree of polarisation, (c) the intensity of the polarised and of the unpolarised part.</p>''',
  ['c.4.3.2'],
  r'''<p>The analyser passes half of the unpolarised part at every angle, so $I_{\min}=\tfrac12I_u$ and $I_{\max}=\tfrac12I_u+I_p$.</p>''',
  r'''<p>Let the totals be $I_{\max}+I_{\min}=I_u+I_p=10$ (the average over angles of the two extremes, doubled).</p>
<p><b>(a)</b> $I_{\max}=4I_{\min}$ and $I_{\max}+I_{\min}=10$ give $I_{\min}=2$ and $I_{\max}=8$.</p>
<p><b>(b)</b> $P=\dfrac{8-2}{8+2}=0.60$ ($60\%$ polarised).</p>
<p><b>(c)</b> $I_p=I_{\max}-I_{\min}=6$ units and $I_u=2I_{\min}=4$ units (check: $6+4=10$).</p>''',
  'Taking $I_p=I_{\\max}$: the maximum contains half of the unpolarised part as well.')

W('q.op.4.06', '4.5', 5, 'Design of quarter- and half-wave plates from quartz', 'Subrahmanyam–Brij Lal–Avadhanulu §20.8 (standard exercise)',
  r'''<p>Quartz has $n_e-n_o=0.0091$ at $589$ nm. Find (a) the least thickness of a quarter-wave plate, (b) the least thickness of a half-wave plate, and (c) the thickness of the next (multiple-order) quarter-wave plate that is $5$ quarter-waves thick.</p>''',
  ['c.4.5.1'],
  r'''<p>The path difference is $|n_e-n_o|\,t$; a QWP needs $\lambda/4$ (odd multiples also work), a HWP needs $\lambda/2$.</p>''',
  r'''<p><b>(a)</b> $t=\dfrac{\lambda}{4|n_e-n_o|}=\dfrac{589\times10^{-9}}{4\times0.0091}=1.62\times10^{-5}$ m $=16\ \mu\text{m}$.</p>
<p><b>(b)</b> $t=\dfrac{\lambda}{2|n_e-n_o|}=32\ \mu\text{m}$.</p>
<p><b>(c)</b> A path difference of $(4m+1)\lambda/4$ still acts as a QWP; the first multiple-order one is $m=1$: $t=5\times16.2=81\ \mu\text{m}$ (much easier to make and handle, but the retardation now depends far more strongly on wavelength and temperature).</p>''',
  'Using $|n_e-n_o|$ but forgetting the factor $4$ (or $2$): the plate needs a quarter (half) wavelength, not one wavelength.')

W('q.op.4.07', '4.5', 5, 'Half- and quarter-wave plates acting on linear light', 'Subrahmanyam–Brij Lal–Avadhanulu §20.9 (standard exercise)',
  r'''<p>Plane-polarised light has its plane of vibration at $30^\circ$ to the optic axis of a wave plate. Describe the emerging light if the plate is (a) a half-wave plate; (b) a quarter-wave plate. Give the axial ratio in (b).</p>''',
  ['c.4.5.2'],
  r'''<p>Resolve the vibration into components along and across the axis: $E\cos30^\circ$ and $E\sin30^\circ$. Then apply the retardation $\delta=\pi$ or $\pi/2$.</p>''',
  r'''<p>Components: $E_e=E\cos30^\circ=0.866E$ (along the axis), $E_o=E\sin30^\circ=0.5E$ (across it).</p>
<p><b>(a)</b> HWP: $\delta=\pi$ flips the sign of one component. The output is again plane polarised, but at $-30^\circ$ to the axis: the plane is rotated by $2\times30^\circ=60^\circ$.</p>
<p><b>(b)</b> QWP: $\delta=\pi/2$. The output is <b>elliptically</b> polarised with axes along and across the optic axis, semi-axes $0.866E$ and $0.5E$; axial ratio $=E_o/E_e=\tan30^\circ=0.577$.</p>''',
  'Expecting circular light from a QWP at any angle: it needs $\\theta=45^\\circ$ so that the two components are equal.')

W('q.op.4.08', '4.6', 5, 'Analysing an elliptically polarised beam', 'Subrahmanyam–Brij Lal–Avadhanulu §20.18 (standard exercise)',
  r'''<p>A beam shows, when examined with a rotating analyser, a maximum intensity four times the minimum. A quarter-wave plate is now placed before the analyser with its optic axis along the direction of maximum transmission. (a) What can the beam be? (b) What is the ratio of the ellipse axes? (c) What does the analyser show now?</p>''',
  ['c.4.6.2', 'c.4.1.2'],
  r'''<p>For a pure ellipse, $I\propto$ (component along the analyser)$^2$, so $I_{\max}/I_{\min}=(\text{major}/\text{minor})^2$. A QWP with its axis along an ellipse axis turns the ellipse into a straight line.</p>''',
  r'''<p><b>(a)</b> The intensity varies but does not reach zero: the beam is elliptically polarised (or partially polarised). The QWP test then decides.</p>
<p><b>(b)</b> If the beam is elliptical, $\dfrac{I_{\max}}{I_{\min}}=\Big(\dfrac ab\Big)^2=4$, so $a:b=2:1$.</p>
<p><b>(c)</b> With the QWP axis along the major axis, the two components acquire a further $\pi/2$ so that the phase difference becomes $0$ or $\pi$: the light becomes <b>plane polarised</b>, with its plane at $\tan^{-1}(b/a)=26.6^\circ$ to the axis. Rotating the analyser now gives <b>complete extinction</b> twice per revolution. (Had a nonzero minimum remained, the beam would have been partially polarised.)</p>''',
  'Concluding "partially polarised" from a nonzero minimum alone: the QWP test is needed to separate an ellipse from a mixture.')

W('q.op.4.09', '4.6', 4, 'Specific rotation of a sugar solution', 'Subrahmanyam–Brij Lal–Avadhanulu §20.19 (standard exercise)',
  r'''<p>A $20$ cm tube contains a sugar solution of concentration $10$ g per $100$ cm$^3$. The plane of polarisation is rotated by $13.3^\circ$. Find the specific rotation. What rotation would a $10$ cm tube of a $25$ g per $100$ cm$^3$ solution produce?</p>''',
  ['c.4.6.3'],
  r'''<p>$[\alpha]=\theta/(lc)$ with $l$ in decimetres and $c$ in g cm$^{-3}$.</p>''',
  r'''<p>$l=20$ cm $=2.0$ dm, $c=10/100=0.10$ g cm$^{-3}$.
$$[\alpha]=\frac{13.3^\circ}{2.0\times0.10}=66.5^\circ\ \text{dm}^{-1}\ (\text{g cm}^{-3})^{-1}.$$</p>
<p>New tube: $l=1.0$ dm, $c=0.25$ g cm$^{-3}$, so $\theta=[\alpha]lc=66.5\times1.0\times0.25=16.6^\circ$.</p>''',
  'Leaving the length in centimetres: specific rotation is defined per decimetre.')

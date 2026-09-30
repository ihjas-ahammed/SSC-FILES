# Module III — Diffraction: written exercises (Level 3).

W('q.op.3.01', '3.1', 4, 'Width of the central maximum of a single slit', 'Ghatak 6e §18.6 (standard exercise)',
  r'''<p>Light of wavelength $600$ nm falls normally on a slit $0.20$ mm wide. A screen is $2.0$ m away.</p>
<p>(a) Find the width of the central maximum. (b) Find the distance of the second minimum from the centre. (c) Find the intensity of the first secondary maximum relative to the central one.</p>''',
  ['c.3.1.2', 'c.3.1.3'],
  r'''<p>Minima are at $a\sin\theta=m\lambda$; for small angles $y_m=m\lambda D/a$. The central maximum runs from $m=-1$ to $m=+1$. The secondary maxima satisfy $\tan\beta=\beta$.</p>''',
  r'''<p><b>(a)</b> The first minima are at $y_1=\lambda D/a=\dfrac{600\times10^{-9}\times2.0}{0.20\times10^{-3}}=6.0\times10^{-3}$ m. The central maximum spans $-y_1$ to $+y_1$:
$$\text{width}=2y_1=12\ \text{mm}.$$</p>
<p><b>(b)</b> $y_2=2\lambda D/a=12$ mm from the centre.</p>
<p><b>(c)</b> The first non-trivial root of $\tan\beta=\beta$ is $\beta\simeq4.493$ ($=1.43\pi$), so
$$\frac{I}{I_0}=\Big(\frac{\sin4.493}{4.493}\Big)^2\simeq(0.2172)^2\simeq0.047,$$
about $4.7\%$ of the central maximum.</p>''',
  'Quoting the half-width $6$ mm as "the width of the central maximum": the central maximum extends to both sides, so its width is twice $\\lambda D/a$.')

W('q.op.3.02', '3.1', 4, 'Slit width from the first minimum (laser practical)', 'CU Optics practical 8 (single slit with a laser)',
  r'''<p>A He–Ne laser ($\lambda=632.8$ nm) illuminates a single slit. On a screen $2.00$ m away the first minimum on one side lies $3.20$ mm from the centre of the pattern. Find the slit width. How wide is the central maximum?</p>''',
  ['c.3.1.2'],
  r'''<p>Use the first-minimum condition $a\sin\theta=\lambda$ with $\sin\theta\simeq\tan\theta=y_1/D$.</p>''',
  r'''<p>$$a=\frac{\lambda D}{y_1}=\frac{632.8\times10^{-9}\times2.00}{3.20\times10^{-3}}=3.955\times10^{-4}\ \text{m}\approx0.40\ \text{mm}.$$</p>
<p>The central maximum is $2y_1=6.4$ mm wide. (The small-angle step is justified: $\theta\approx1.6\times10^{-3}$ rad.)</p>''',
  'Using the distance between the two first minima ($6.4$ mm) as $y_1$: it is half of that.')

W('q.op.3.03', '3.2', 5, 'Fringes inside the diffraction envelope', 'Ghatak 6e §18.6 (standard exercise)',
  r'''<p>Two slits of width $a=0.10$ mm and centre separation $d=0.50$ mm are illuminated by light of $\lambda=500$ nm. A screen is $1.0$ m away.</p>
<p>(a) Find the fringe spacing. (b) How many bright fringes lie inside the central diffraction maximum? (c) Which interference orders are missing?</p>''',
  ['c.3.2.1'],
  r'''<p>Compare the two zero conditions: interference maxima at $d\sin\theta=m\lambda$ and diffraction minima at $a\sin\theta=p\lambda$. Their ratio $d/a$ tells which orders coincide.</p>''',
  r'''<p><b>(a)</b> Fringe spacing $\beta=\lambda D/d=\dfrac{500\times10^{-9}\times1.0}{0.50\times10^{-3}}=1.0$ mm.</p>
<p><b>(b)</b> The central diffraction maximum has half-width $\lambda D/a=5.0$ mm, i.e. it is $10$ mm wide. Since $d/a=5$, the interference orders $m=\pm5$ coincide with the first diffraction minima and vanish. The bright fringes inside are $m=0,\pm1,\pm2,\pm3,\pm4$: <b>9 fringes</b> ($=2d/a-1$).</p>
<p><b>(c)</b> Interference maximum $m$ coincides with diffraction minimum $p$ when $m=(d/a)\,p=5p$: the orders $\pm5,\pm10,\pm15,\dots$ are missing.</p>''',
  'Counting $d/a=5$ fringes instead of $2d/a-1=9$; the fringes on both sides of the centre count, and the missing order itself is not a fringe.')

W('q.op.3.04', '3.3', 5, 'Orders and angles of a grating', 'CU Optics practical 5 (grating and spectrometer)',
  r'''<p>A plane grating has $6000$ lines per cm and is illuminated normally with sodium light ($\lambda=589$ nm).</p>
<p>(a) What is the highest order that can be observed? (b) Find the angles of all observable orders on one side.</p>''',
  ['c.3.3.2'],
  r'''<p>The grating spacing is $d=1/(\text{lines per unit length})$. An order $m$ exists only if $m\lambda/d\le1$.</p>''',
  r'''<p>$d=\dfrac{1}{6000\ \text{cm}^{-1}}=1.667\times10^{-4}$ cm $=1.667\ \mu$m.</p>
<p><b>(a)</b> $m_{\max}<d/\lambda=\dfrac{1.667\times10^{-6}}{589\times10^{-9}}=2.83$, so the highest order is $m=2$.</p>
<p><b>(b)</b> $\sin\theta_m=m\lambda/d$:
$$\sin\theta_1=\frac{589\times10^{-9}}{1.667\times10^{-6}}=0.3534\Rightarrow\theta_1\approx20.7^\circ,\qquad \sin\theta_2=0.7068\Rightarrow\theta_2\approx45.0^\circ.$$
Together with the central maximum ($m=0$) there are $5$ maxima in all ($m=0,\pm1,\pm2$).</p>''',
  'Computing $d$ from lines per centimetre and forgetting to convert centimetres to metres.')

W('q.op.3.05', '3.3', 5, 'Resolving the sodium doublet', 'Ghatak 6e §18.8 (standard exercise)',
  r'''<p>A grating $5.0$ cm wide has $2000$ lines per cm and the whole width is illuminated. (a) What is its resolving power in the second order? (b) What is the smallest wavelength difference it can resolve near $589.3$ nm? (c) Can it resolve the sodium D lines ($589.0$ nm and $589.6$ nm) in the <i>first</i> order?</p>''',
  ['c.3.3.3'],
  r'''<p>The total number of illuminated lines is $N=(\text{lines per cm})\times(\text{width})$; the resolving power is $mN$.</p>''',
  r'''<p><b>(a)</b> $N=2000\times5.0=10^4$ lines, so $R=mN=2\times10^4$.</p>
<p><b>(b)</b> $\Delta\lambda_{\min}=\dfrac{\lambda}{R}=\dfrac{589.3}{2\times10^4}=0.029$ nm.</p>
<p><b>(c)</b> In the first order $R=10^4$, giving $\Delta\lambda_{\min}=0.059$ nm, far smaller than $0.6$ nm, so the doublet is comfortably resolved (only $R\ge589.3/0.6\approx982$ is needed, i.e. $\approx982$ lines in first order).</p>''',
  'Using the number of lines per centimetre for $N$: the resolving power depends on the total number of lines that are lit.')

W('q.op.3.06', '3.3', 4, 'Dispersion of a grating', 'Ghatak 6e §18.8 (standard exercise)',
  r'''<p>A grating with $5000$ lines per cm is used in the first order near $589$ nm. (a) Find the angular dispersion. (b) A lens of focal length $1.0$ m focusses the spectrum. How far apart on the screen are the D lines ($589.0$ and $589.6$ nm)?</p>''',
  ['c.3.3.2'],
  r'''<p>Differentiate the grating equation at fixed order: $d\theta/d\lambda=m/(d\cos\theta)$. Then the separation on the screen is $f\,\Delta\theta$.</p>''',
  r'''<p>$d=2.0\ \mu$m; $\sin\theta_1=589\times10^{-9}/2.0\times10^{-6}=0.2945$, so $\cos\theta_1=0.9557$.</p>
<p><b>(a)</b> $$\frac{d\theta}{d\lambda}=\frac{1}{d\cos\theta}=\frac{1}{2.0\times10^{-6}\times0.9557}=5.23\times10^{5}\ \text{rad/m}=5.2\times10^{-4}\ \text{rad/nm}.$$</p>
<p><b>(b)</b> $\Delta\theta=5.23\times10^{5}\times0.6\times10^{-9}=3.1\times10^{-4}$ rad, so the separation is $f\,\Delta\theta=1.0\times3.1\times10^{-4}=0.31$ mm.</p>''',
  'Forgetting the $\\cos\\theta$ in the denominator (it matters more for larger angles).')

W('q.op.3.07', '3.4', 4, 'Half-period zone radii', 'Ghatak 6e §20.2 (standard exercise)',
  r'''<p>Plane waves of $\lambda=500$ nm fall on a screen $1.0$ m from a point $P$. Find the radii of the first and tenth half-period zones. Repeat the first-zone radius for a point source $1.0$ m in front of the wavefront and $P$ $2.0$ m behind it.</p>''',
  ['c.3.4.1'],
  r'''<p>Plane wave: $r_n=\sqrt{nb\lambda}$. Point source at distance $a$: $r_n^2=n\lambda ab/(a+b)$.</p>''',
  r'''<p>Plane wave, $b=1.0$ m: $r_1=\sqrt{500\times10^{-9}\times1.0}=7.07\times10^{-4}$ m $=0.71$ mm, and $r_{10}=\sqrt{10}\,r_1=2.24$ mm.</p>
<p>Point source, $a=1.0$ m, $b=2.0$ m:
$$r_1^{2}=\frac{\lambda ab}{a+b}=\frac{500\times10^{-9}\times2}{3}=3.33\times10^{-7}\ \text{m}^2\Rightarrow r_1=0.58\ \text{mm}.$$</p>''',
  'Using $b\\lambda$ for a point source: the effective distance is $ab/(a+b)$.')

W('q.op.3.08', '3.4', 5, 'A circular aperture and the on-axis intensity', 'Ghatak 6e §20.2 (standard exercise)',
  r'''<p>A circular hole of radius $1.0$ mm is illuminated by a plane wave of wavelength $500$ nm. At which on-axis distances $b$ from the hole is the intensity a maximum of $4I_0$ and at which is it zero? Give the three largest distances.</p>''',
  ['c.3.4.1', 'c.3.4.2'],
  r'''<p>The hole exposes $n=r^2/(b\lambda)$ half-period zones. Odd $n$ gives $A\simeq A_1$ (intensity $\simeq4I_0$); even $n$ gives $A\simeq0$.</p>''',
  r'''<p>$$n=\frac{r^{2}}{b\lambda}=\frac{(1.0\times10^{-3})^{2}}{b\times500\times10^{-9}}=\frac{2.0\ \text{m}}{b}.$$</p>
<p>So $b=2.0/n$ metres.</p>
<ul><li>$n=1$: $b=2.0$ m — bright ($\approx4I_0$).</li>
<li>$n=2$: $b=1.0$ m — dark.</li>
<li>$n=3$: $b=0.67$ m — bright.</li></ul>
<p>The three largest distances are $2.0$ m (bright), $1.0$ m (dark) and $0.67$ m (bright). Beyond $2.0$ m fewer than one zone is exposed, the pattern is Fraunhofer and the on-axis intensity falls steadily with distance.</p>''',
  'Assuming the intensity is $I_0$ on axis for a hole. For an odd number of zones it is about four times $I_0$; for an even number it is nearly zero.')

W('q.op.3.09', '3.4', 5, 'Design of a zone plate', 'Ghatak 6e §20.3 (standard exercise)',
  r'''<p>A zone plate is to have a primary focal length of $0.50$ m for $500$ nm. (a) Find the radius of its first zone and of its tenth. (b) Where is the primary focus for $600$ nm light? (c) Where is the next real focus for $500$ nm?</p>''',
  ['c.3.4.3'],
  r'''<p>$f_1=r_1^2/\lambda$ and $r_n=\sqrt n\,r_1$. The focal length is inversely proportional to the wavelength. Higher real foci lie at $f_1/3$, $f_1/5,\dots$</p>''',
  r'''<p><b>(a)</b> $r_1=\sqrt{f_1\lambda}=\sqrt{0.50\times500\times10^{-9}}=0.50$ mm and $r_{10}=\sqrt{10}\times0.50=1.58$ mm.</p>
<p><b>(b)</b> $f\propto1/\lambda$: $f=0.50\times500/600=0.42$ m.</p>
<p><b>(c)</b> $f_1/3=0.50/3=0.17$ m.</p>''',
  'Treating a zone plate like a glass lens: its focal length shortens for the <i>longer</i> wavelength (the opposite of refraction).')

W('q.op.3.10', '3.5', 5, 'Fringes behind a straight edge', 'Ghatak 6e §20.6 (standard exercise)',
  r'''<p>A straight edge is illuminated by a plane wave of wavelength $500$ nm and the pattern is observed on a screen $1.0$ m behind it. Using the tabulated values $v=1.22$ (first maximum) and $v=1.87$ (first minimum), find (a) the scale factor $v/x$, (b) the distances of the first maximum and minimum from the edge of the geometrical shadow, and (c) the intensity at the shadow edge.</p>''',
  ['c.3.5.1', 'c.3.5.2'],
  r'''<p>For a plane wave ($a\to\infty$), $v=x\sqrt{2/(b\lambda)}$. The intensity at $v=0$ follows from $C(0)=S(0)=0$.</p>''',
  r'''<p><b>(a)</b> $$\frac{v}{x}=\sqrt{\frac{2}{b\lambda}}=\sqrt{\frac{2}{1.0\times500\times10^{-9}}}=2.0\times10^{3}\ \text{m}^{-1}.$$</p>
<p><b>(b)</b> $x_{\max}=\dfrac{1.22}{2000}=0.61$ mm and $x_{\min}=\dfrac{1.87}{2000}=0.94$ mm (both on the illuminated side).</p>
<p><b>(c)</b> $I/I_0=\tfrac12[(0+\tfrac12)^2+(0+\tfrac12)^2]=\tfrac14$, so the intensity at the geometrical edge is $I_0/4$ (not zero, and not $I_0$).</p>''',
  'Placing the first fringe at the edge of the geometrical shadow. The edge is at $I_0/4$; the first maximum is a distance $0.61$ mm outside it.')

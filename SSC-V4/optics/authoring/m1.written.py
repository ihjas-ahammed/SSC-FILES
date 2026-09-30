# Module I — Fermat's Principle and Geometrical Optics
# Written exercises converted from Ghatak, Optics 6e, Chapters 3 and 4.

W('q.op.1.01', '1.1', 4,
  'Paraboloidal Reflector Focus',
  'Ghatak 6e Example 3.1',
  r'''<p>Consider a set of rays, parallel to the principal axis, incident on a paraboloidal reflector. Using Fermat’s principle, show that all parallel rays pass through the focus $S$ of the paraboloid after reflection.</p>''',
  ['c.1.1.1', 'c.1.1.2', 'c.1.1.4'],
  r'''<p>Use the geometric definition of a parabola relating the distance to the focus and the distance to the directrix. Express the total optical path from an incident plane wavefront to the focus via an arbitrary reflection point, and show that this path length is independent of the point of incidence.</p>''',
  r'''<p>Let $S$ be the focus of the parabola, $AB$ be its directrix, and $C$ be the vertex. Consider an arbitrary incoming ray parallel to the axis incident on the paraboloid at point $Q$, reflecting toward $S$. Drop a perpendicular from $Q$ to the directrix, meeting it at $L'$.</p>
<p>By the geometric definition of a parabola, the distance from any point on the curve to the focus equals its perpendicular distance to the directrix:
$$QS = QL'$$</p>
<p>Let $P$ be a point on the incident ray before hitting the mirror. The total optical path length from $P$ to the focus $S$ via $Q$ is:
$$L_{\text{op}} = PQ + QS = PQ + QL'$$</p>
<p>Because $PQ$ is parallel to the axis and $QL'$ is perpendicular to the directrix $AB$, the points $P, Q,$ and $L'$ lie along the same straight line perpendicular to $AB$. Thus:
$$PQ + QL' = PL'$$
where $PL'$ is the constant perpendicular distance between the wavefront plane passing through $P$ and the directrix $AB$. Because the optical path length is identical for any point of incidence $Q$, $\delta L_{\text{op}} = 0$ holds identically. Therefore, all incident rays parallel to the axis reflect through the focus $S$.</p>''',
  r'Failing to measure the initial optical path from a planar wavefront perpendicular to the axis, or forgetting that equal optical path across all rays is required for stigmatic imaging.')

W('q.op.1.02', '1.1', 4,
  'Elliptical Reflector Conjugates',
  'Ghatak 6e Example 3.2',
  r'''<p>Consider an elliptical reflector whose foci are at points $S_1$ and $S_2$. Show by using Fermat’s principle that all rays emanating from $S_1$ will pass through $S_2$ after reflection.</p>''',
  ['c.1.1.1', 'c.1.1.2', 'c.1.1.4'],
  r'''<p>Express the optical path length from $S_1$ to $S_2$ via an arbitrary point on the ellipse using the bifocal definition of an ellipse, and evaluate the variation with respect to the reflection point.</p>''',
  r'''<p>Let $P$ be an arbitrary point on the reflecting elliptical boundary. By the geometric definition of an ellipse, the sum of the distances from any point on the perimeter to the two focal points is constant:
$$S_1P + PS_2 = 2a = \text{constant}$$
where $2a$ is the major axis length.</p>
<p>Since the medium within the reflector is homogeneous ($n = \text{constant}$), the optical path length for any ray path connecting $S_1$ to $S_2$ via reflection at $P$ is:
$$L_{\text{op}} = n(S_1P + PS_2) = 2na = \text{constant}$$</p>
<p>Because $L_{\text{op}}$ is independent of the coordinate of the reflection point $P$, the first variation vanishes:
$$\delta L_{\text{op}} = 0$$
Hence, the transit time is stationary for every path striking the ellipse, and all rays leaving $S_1$ converge stigmatically at $S_2$.</p>''',
  r'Assuming stationarity requires $dL_{\text{op}}/dx = 0$ at a single discrete point rather than recognizing that $L_{\text{op}}$ is identically constant over the entire reflector surface.')

W('q.op.1.03', '1.2', 4,
  'Paraxial Refraction at a Spherical Surface',
  'Ghatak 6e Example 3.3',
  r'''<p>Consider a spherical refracting surface $SPM$ of radius $r$ separating media of refractive indices $n_1$ and $n_2$. Let $C$ be the center of curvature. An object point $O$ and an axial point $Q$ are collinear with $C$.</p>
<p>(a) Calculate the optical path length $L_{\text{op}} = n_1(OS) + n_2(SQ)$ as a function of the distances $x = OP$, $y = PQ$, radius $r$, and the small polar angle $\theta = \angle SCP$.<br>
(b) Apply Fermat’s principle to determine the position of the paraxial image point $I$.</p>''',
  ['c.1.2.2'],
  r'''<p>Apply the law of cosines in $\triangle OSC$ and $\triangle SCQ$, expand for small polar angle $\theta$ up to order $\theta^2$, and form $L_{\text{op}}$. Then apply Fermat's stationarity condition $dL_{\text{op}}/d\theta = 0$ and convert distances to Cartesian coordinates.</p>''',
  r'''<p><b>(a)</b> In $\triangle OSC$, applying the law of cosines:
$$OS = \left[(x + r)^2 + r^2 - 2r(x + r)\cos\theta\right]^{1/2}$$
For small angles $\theta$, approximating $\cos\theta \approx 1 - \frac{\theta^2}{2}$:
$$OS \approx \left[x^2 + 2rx + 2r^2 - 2r(x + r)\left(1 - \frac{\theta^2}{2}\right)\right]^{1/2} = \left[x^2 + r(x + r)\theta^2\right]^{1/2} \approx x\left[1 + \frac{r(x + r)}{2x^2}\theta^2\right]$$
$$OS \approx x + \frac{1}{2}r^2\left(\frac{1}{x} + \frac{1}{r}\right)\theta^2$$
Similarly, in $\triangle SCQ$, where $CQ = y - r$:
$$SQ = \left[(y - r)^2 + r^2 + 2r(y - r)\cos(\pi - \theta)\right]^{1/2} = \left[(y - r)^2 + r^2 - 2r(y - r)\cos\theta\right]^{1/2}$$
Expanding for small $\theta$:
$$SQ \approx y - \frac{1}{2}r^2\left(\frac{1}{r} - \frac{1}{y}\right)\theta^2$$
Therefore, the optical path length is:
$$L_{\text{op}} = n_1 OS + n_2 SQ \approx n_1 x + n_2 y + \frac{1}{2}r^2\left[\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right]\theta^2$$</p>
<p><b>(b)</b> By Fermat’s principle, the optical path length must be stationary with respect to variations in ray path ($\theta$):
$$\frac{dL_{\text{op}}}{d\theta} = r^2\left[\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right]\theta = 0$$
For this to hold for all paraxial rays independent of $\theta$, the term in brackets must vanish identically:
$$\frac{n_2}{y} + \frac{n_1}{x} = \frac{n_2 - n_1}{r}$$
With Cartesian sign conventions ($u = -x$, $v = +y$, $R = +r$), this yields the Gaussian refraction formula:
$$\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$$</p>''',
  r'Misidentifying the geometric distance $x$ as $u$ instead of $u = -x$ when translating from distances to Cartesian coordinates.')

W('q.op.1.04', '1.2', 4,
  'Virtual Image Formation at a Spherical Surface',
  'Ghatak 6e Example 3.4',
  r'''<p>Consider refraction at a spherical boundary where the refracted rays diverge away from the optical axis. Using Fermat’s principle, show that for paraxial rays forming a virtual image at point $I$, the optical path difference $n_1 OS - n_2 SI$ must be stationary with respect to the point of incidence $S$.</p>''',
  ['c.1.2.2'],
  r'''<p>Write the total optical path from the object to an observation point on the diverging refracted ray. Use the collinearity of the virtual image, surface point, and observation point to express the stationary transit time in terms of the optical path difference.</p>''',
  r'''<p>Let $P$ be an arbitrary observation point on the refracted ray in the second medium ($n_2$). The actual optical path length from object $O$ to $P$ via surface point $S$ is:
$$L_{\text{op}} = n_1 OS + n_2 SP$$</p>
<p>Because the refracted rays diverge, they appear to originate from the virtual image point $I$ on the axis. Adding and subtracting the optical distance $n_2 SI$:
$$L_{\text{op}} = (n_1 OS - n_2 SI) + n_2 (SI + SP)$$</p>
<p>For the ray to be continuous and straight from virtual origin $I$ to observation point $P$, the sum $SI + SP = IP$ is the straight-line distance, which is stationary. Therefore, Fermat’s stationarity condition ($\delta L_{\text{op}} = 0$) requires the remaining term to be stationary independently:
$$\delta(n_1 OS - n_2 SI) = 0$$
Thus, a virtual image is formed when the quantity $n_1 OS - n_2 SI$ is an extremum with respect to $S$.</p>''',
  r'Adding rather than subtracting $n_2 SI$, forgetting that the virtual path behind the surface represents a back-extrapolation of the physical refracted ray.')

W('q.op.1.05', '1.2', 4,
  'Paraxial Imaging by a Concave Mirror',
  'Ghatak 6e Problem 3.1',
  r'''<p>Consider an object point $O$ on the axis of a concave mirror of radius of curvature $r$, with center of curvature $C$. Let $Q$ be an arbitrary point on the axis. Show that the optical path length $L_{\text{op}} = OS + SQ$ is approximately:
$$L_{\text{op}} \approx x + y + \frac{1}{2}r^2\left[\frac{1}{x} + \frac{1}{y} - \frac{2}{r}\right]\theta^2$$
where $x = OP$, $y = QP$, and $\theta = \angle SCP$ is small. Determine the paraxial image point and show that it yields $\frac{1}{u} + \frac{1}{v} = \frac{2}{R}$.</p>''',
  ['c.1.2.4'],
  r'''<p>Use the law of cosines in $\triangle OSC$ and $\triangle QSC$ to expand the segments $OS$ and $SQ$ to second order in the small angle $\theta$. Sum them to obtain $L_{\text{op}}$, set $dL_{\text{op}}/d\theta = 0$, and apply the Cartesian sign convention for a concave mirror.</p>''',
  r'''<p>In $\triangle OSC$, $OC = x - r$. Expanding $OS$ in terms of small angle $\theta$:
$$OS = \left[(x - r)^2 + r^2 + 2r(x - r)\cos\theta\right]^{1/2} \approx x + \frac{1}{2}r^2\left(\frac{1}{x} - \frac{1}{r}\right)\theta^2$$</p>
<p>Similarly, for point $Q$ located at distance $y$ from vertex $P$, $QC = y - r$:
$$SQ = \left[(y - r)^2 + r^2 + 2r(y - r)\cos\theta\right]^{1/2} \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2$$</p>
<p>Adding the two path segments:
$$L_{\text{op}} = OS + SQ \approx x + y + \frac{1}{2}r^2\left[\frac{1}{x} + \frac{1}{y} - \frac{2}{r}\right]\theta^2$$</p>
<p>Applying Fermat’s principle ($\frac{dL_{\text{op}}}{d\theta} = 0$):
$$r^2\left[\frac{1}{x} + \frac{1}{y} - \frac{2}{r}\right]\theta = 0 \implies \frac{1}{x} + \frac{1}{y} = \frac{2}{r}$$</p>
<p>Under the standard sign convention, the object, image, and center of curvature are to the left of the vertex: $u = -x$, $v = -y$, and $R = -r$. Substituting these yields:
$$\frac{1}{-u} + \frac{1}{-v} = \frac{2}{-R} \implies \frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$</p>''',
  r'Confusing distances $x, y, r$ with Cartesian coordinates $u, v, R$ which are all negative for a concave mirror forming a real image.')

W('q.op.1.06', '1.2', 4,
  'Paraxial Imaging by a Convex Mirror',
  'Ghatak 6e Problem 3.2',
  r'''<p>Consider an object point $O$ at distance $x$ in front of a convex spherical mirror $SPM$ of radius of curvature $r$. Assuming the optical path length to be $L_{\text{op}} = OS - SQ$:</p>
<p>(a) Show that:
$$L_{\text{op}} \approx x - y + \frac{1}{2}r^2\left[\frac{1}{x} - \frac{1}{y} + \frac{2}{r}\right]\theta^2$$<br>
(b) Show that the paraxial image is formed at $y = y_0$ satisfying $\frac{1}{x} - \frac{1}{y_0} = -\frac{2}{r}$, consistent with $\frac{1}{u} + \frac{1}{v} = \frac{2}{R}$.</p>''',
  ['c.1.2.4'],
  r'''<p>Expand the geometric segments $OS$ and $SQ$ around the center of curvature behind the convex mirror to order $\theta^2$. Form $L_{\text{op}} = OS - SQ$, set $\partial L_{\text{op}}/\partial \theta = 0$, and substitute Cartesian signs $u = -x, v = +y_0, R = +r$.</p>''',
  r'''<p><b>(a)</b> The center of curvature $C$ and virtual image point $Q$ lie behind the reflecting convex surface. In $\triangle OSC$, $OC = x + r$:
$$OS = \left[(x + r)^2 + r^2 - 2r(x + r)\cos\theta\right]^{1/2} \approx x + \frac{1}{2}r^2\left(\frac{1}{x} + \frac{1}{r}\right)\theta^2$$
For virtual focus $Q$ located at distance $y$ behind the mirror, $QC = r - y$:
$$SQ = \left[(r - y)^2 + r^2 - 2r(r - y)\cos(\pi - \theta)\right]^{1/2} \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2$$
Subtracting $SQ$ from $OS$ for the virtual image optical path:
$$L_{\text{op}} = OS - SQ \approx x - y + \frac{1}{2}r^2\left[\frac{1}{x} - \frac{1}{y} + \frac{2}{r}\right]\theta^2$$</p>
<p><b>(b)</b> Requiring stationarity ($\frac{\partial L_{\text{op}}}{\partial \theta} = 0$):
$$\frac{1}{x} - \frac{1}{y_0} + \frac{2}{r} = 0 \implies \frac{1}{x} - \frac{1}{y_0} = -\frac{2}{r}$$
Under the sign convention: $u = -x$, $v = +y_0$, $R = +r$ (measured to the right of the vertex):
$$-\frac{1}{u} - \frac{1}{v} = -\frac{2}{R} \implies \frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$</p>''',
  r'Using $R = -r$ instead of $R = +r$ for a convex mirror whose center of curvature lies behind the vertex.')

W('q.op.1.07', '1.2', 4,
  'Concave Mirror Imaging for Object Inside the Focal Point',
  'Ghatak 6e Problem 3.3',
  r'''<p>Use Fermat's principle to determine the mirror equation for an object point at a distance less than $R/2$ from a concave mirror of radius of curvature $R$.</p>''',
  ['c.1.2.4'],
  r'''<p>Formulate the optical path function $L_{\text{op}} = OS - SQ$ for a virtual image located behind the concave mirror. Expand the distances in powers of $\theta$, set the first derivative to zero, and translate into Cartesian coordinates.</p>''',
  r'''<p>When an object is placed at a distance $x < r/2$ from a concave mirror, the reflected rays diverge, producing an apparent virtual image behind the surface at a distance $y$ to the right of $P$.</p>
<p>The optical path function for virtual image formation is:
$$L_{\text{op}} = OS - SQ$$</p>
<p>Using small-angle approximations for $\triangle OSC$ and $\triangle QSC$ where $C$ is at distance $r$ in front of the mirror:
$$OS \approx x + \frac{1}{2}r^2\left(\frac{1}{x} - \frac{1}{r}\right)\theta^2$$
$$SQ \approx y + \frac{1}{2}r^2\left(\frac{1}{y} + \frac{1}{r}\right)\theta^2$$</p>
<p>Subtracting these gives:
$$L_{\text{op}} \approx x - y + \frac{1}{2}r^2\left[\frac{1}{x} - \frac{1}{y} - \frac{2}{r}\right]\theta^2$$</p>
<p>Setting $\frac{\partial L_{\text{op}}}{\partial \theta} = 0$:
$$\frac{1}{x} - \frac{1}{y} = \frac{2}{r}$$</p>
<p>Applying the Cartesian sign convention ($u = -x$, $v = +y$, $R = -r$):
$$\frac{1}{-u} - \frac{1}{v} = \frac{2}{-R} \implies \frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$</p>''',
  r'Assigning $v = -y$ instead of $v = +y$ for the virtual image that lies behind the concave mirror.')

W('q.op.1.08', '1.2', 4,
  'Virtual Image Formation at a Concave Refracting Interface',
  'Ghatak 6e Problem 3.4',
  r'''<p>Consider a point object $O$ at distance $x$ in front of a concave refracting surface $SPM$ separating media of indices $n_1$ and $n_2$, with center of curvature $C$ at distance $r$ in front of the vertex. Show that the optical path length $L_{\text{op}} = n_1 OS - n_2 SQ$ is:
$$L_{\text{op}} \approx n_1 x - n_2 y - \frac{1}{2}r^2\left[\frac{n_2}{y} - \frac{n_1}{x} - \frac{n_2 - n_1}{r}\right]\theta^2$$
and verify that the result is consistent with $\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$.</p>''',
  ['c.1.2.2'],
  r'''<p>Expand segments $OS$ and $SQ$ for small $\theta$ where both the center of curvature and the virtual image lie in front of the concave surface. Subtract $n_2 SQ$ from $n_1 OS$, demand $dL_{\text{op}}/d\theta = 0$, and substitute Cartesian signs $u = -x, v = -y, R = -r$.</p>''',
  r'''<p>For a concave surface facing the incident medium, $C$ lies on the left ($OP = x$, $CP = r$, $OC = x - r$). In $\triangle OSC$:
$$OS \approx x + \frac{1}{2}r^2\left(\frac{1}{x} - \frac{1}{r}\right)\theta^2$$</p>
<p>The virtual image $Q$ is formed to the left of the vertex at distance $y$ ($QC = y - r$). In $\triangle QSC$:
$$SQ \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2$$</p>
<p>Forming the effective virtual optical path length:
$$L_{\text{op}} = n_1 OS - n_2 SQ = n_1 x - n_2 y + \frac{1}{2}r^2\left[\left(\frac{n_1}{x} - \frac{n_1}{r}\right) - \left(\frac{n_2}{y} - \frac{n_2}{r}\right)\right]\theta^2$$
$$L_{\text{op}} = n_1 x - n_2 y - \frac{1}{2}r^2\left[\frac{n_2}{y} - \frac{n_1}{x} - \frac{n_2 - n_1}{r}\right]\theta^2$$</p>
<p>Applying Fermat’s condition ($\frac{dL_{\text{op}}}{d\theta} = 0$):
$$\frac{n_2}{y} - \frac{n_1}{x} - \frac{n_2 - n_1}{r} = 0 \implies \frac{n_2}{y} - \frac{n_1}{x} = \frac{n_2 - n_1}{r}$$</p>
<p>Under Cartesian sign conventions ($u = -x$, $v = -y$, $R = -r$):
$$\frac{n_2}{-v} - \frac{n_1}{-u} = \frac{n_2 - n_1}{-R} \implies \frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$$</p>''',
  r'Misinterpreting the minus sign when converting $-(n_2 - n_1)/(-R)$ into $(n_2 - n_1)/R$.')

W('q.op.1.09', '1.1', 4,
  'Refracting Ellipsoid of Revolution',
  'Ghatak 6e Problem 3.5',
  r'''<p>Show by using Fermat's principle that all incident rays parallel to the major axis of an ellipsoid of revolution will focus stigmatically to the far focal point, provided the eccentricity of the ellipse satisfies $e = n_1/n_2$, where $n_2 > n_1$.</p>''',
  ['c.1.1.1', 'c.1.1.4'],
  r'''<p>Express the optical path length from an incident plane wavefront to the far focal point via a point on the ellipsoid using the directrix property of an ellipse, and set the coefficient of the coordinate variation to zero.</p>''',
  r'''<p>Let the origin be at the focus $C'$ where light converges, with the ellipsoid surface given in standard coordinates. Consider an incident plane wavefront perpendicular to the axis at reference plane $x = -x_0$.</p>
<p>A ray parallel to the axis at height $y$ travels through medium $n_1$ up to point $B(x, y)$ on the ellipse, and then travels through medium $n_2$ directly to focus $C'$.</p>
<p>The optical path length from the reference wavefront to focus $C'$ is:
$$L_{\text{op}} = n_1(x_0 + x) + n_2 BC'$$</p>
<p>By the directrix property of an ellipse with eccentricity $e$ and focus $C'$, the distance from point $B(x,y)$ to focus $C'$ is related to its distance to directrix $d$ by $BC' = e(d - x) = ed - ex$.</p>
<p>Substituting this into the optical path equation:
$$L_{\text{op}} = n_1 x_0 + n_1 x + n_2(ed - ex) = (n_1 x_0 + n_2 e d) + (n_1 - n_2 e)x$$</p>
<p>For $L_{\text{op}}$ to be constant and independent of the ray coordinate $x$ across the entire aperture:
$$n_1 - n_2 e = 0 \implies e = \frac{n_1}{n_2}$$
Thus, when the eccentricity equals the ratio of refractive indices $n_1/n_2$, all parallel rays focus stigmatically to $C'$.</p>''',
  r'Inverting the refractive index ratio as $n_2/n_1$ instead of $n_1/n_2$, which would produce an unphysical eccentricity $e > 1$ for an ellipse.')

W('q.op.1.10', '1.1', 4,
  'Optical Path in a Spherical Reflector',
  'Ghatak 6e Problem 3.6',
  r'''<p>Let $C$ be the center of a reflecting sphere of radius $R$. Points $P_1$ and $P_2$ lie on a common diameter equidistant from the center at distance $d$.</p>
<p>(a) Obtain the optical path length $P_1 O + OP_2$ as a function of the angle $\theta = \angle OCP_1$, where $O$ is a point on the spherical surface.<br>
(b) Find the values of $\theta$ for which $P_1 O P_2$ is an actual ray path.</p>''',
  ['c.1.1.1', 'c.1.1.2', 'c.1.1.4'],
  r'''<p>Use the law of cosines in triangles $\triangle P_1 C O$ and $\triangle P_2 C O$ to write $P_1 O$ and $O P_2$ in terms of $\theta$. Then set the derivative $dL_{\text{op}}/d\theta = 0$ to identify all angles corresponding to stationary optical paths.</p>''',
  r'''<p><b>(a)</b> Using the law of cosines in $\triangle P_1 C O$:
$$P_1 O = \sqrt{R^2 + d^2 - 2Rd\cos\theta}$$
In $\triangle P_2 C O$, since $P_1, C, P_2$ are collinear along a diameter, the angle $\angle O C P_2 = \pi - \theta$. Therefore:
$$O P_2 = \sqrt{R^2 + d^2 - 2Rd\cos(\pi - \theta)} = \sqrt{R^2 + d^2 + 2Rd\cos\theta}$$
The total optical path length in a medium of index $n = 1$ is:
$$L_{\text{op}}(\theta) = \sqrt{R^2 + d^2 - 2Rd\cos\theta} + \sqrt{R^2 + d^2 + 2Rd\cos\theta}$$</p>
<p><b>(b)</b> Applying Fermat’s principle ($\frac{dL_{\text{op}}}{d\theta} = 0$):
$$\frac{dL_{\text{op}}}{d\theta} = \frac{Rd\sin\theta}{\sqrt{R^2 + d^2 - 2Rd\cos\theta}} - \frac{Rd\sin\theta}{\sqrt{R^2 + d^2 + 2Rd\cos\theta}} = 0$$
This equation is satisfied when:</p>
<ol>
<li>$\sin\theta = 0 \implies \theta = 0 \text{ or } \pi$ (corresponding to rays propagating directly along the diameter).</li>
<li>The denominators are equal:
$$R^2 + d^2 - 2Rd\cos\theta = R^2 + d^2 + 2Rd\cos\theta \implies 4Rd\cos\theta = 0 \implies \cos\theta = 0 \implies \theta = \frac{\pi}{2}$$</li>
</ol>
<p>Thus, valid ray paths occur at $\theta = 0, \frac{\pi}{2},$ and $\pi$.</p>''',
  r'Overlooking the symmetric solution $\theta = \pi/2$ where the two square roots balance, or missing the collinear ray solutions at $\theta = 0, \pi$.')

W('q.op.1.11', '1.2', 4,
  'Aplanatic Points of a Spherical Refracting Surface',
  'Ghatak 6e Problem 3.7',
  r'''<p>A spherical refracting surface $SPM$ of radius $r$ separates media of indices $n_1$ and $n_2$. An axial point object $O$ forms an aberration-free virtual image at $I$ such that for every point $S$ on the surface:
$$n_1 OS - n_2 SI = 0$$
Show that the surface is spherical with distances from the center of curvature $C$ given by $d_1 = OC = \frac{n_2}{n_1}r$ and $d_2 = IC = \frac{n_1}{n_2}r$, and verify that $n_1^2 d_1 = n_2^2 d_2 = n_1 n_2 r$.</p>''',
  ['c.1.2.2'],
  r'''<p>Express $OS$ and $SI$ using the law of cosines from the center of curvature $C$. Square the condition $n_1 OS = n_2 SI$ and equate the coefficients of $\cos\theta$ and the angle-independent terms separately to solve for $d_1$ and $d_2$.</p>''',
  r'''<p>Let the center of curvature $C$ be the coordinate origin. Let $\mathbf{r}_S$ be the position vector of surface point $S$, with $|\mathbf{r}_S| = r$. Let $O$ and $I$ lie on the optical axis at distances $d_1$ and $d_2$ from $C$.</p>
<p>By the law of cosines:
$$OS = \sqrt{r^2 + d_1^2 - 2r d_1 \cos\theta}, \quad SI = \sqrt{r^2 + d_2^2 - 2r d_2 \cos\theta}$$</p>
<p>The stigmatic condition requires:
$$n_1 OS = n_2 SI \implies n_1^2(r^2 + d_1^2 - 2r d_1 \cos\theta) = n_2^2(r^2 + d_2^2 - 2r d_2 \cos\theta)$$</p>
<p>For this equation to hold identically for all values of $\cos\theta$, the coefficients must balance independently:</p>
<ol>
<li>Equating $\cos\theta$ coefficients:
$$2n_1^2 r d_1 = 2n_2^2 r d_2 \implies n_1^2 d_1 = n_2^2 d_2$$</li>
<li>Equating constant terms:
$$n_1^2(r^2 + d_1^2) = n_2^2(r^2 + d_2^2)$$</li>
</ol>
<p>Substituting $d_2 = \left(\frac{n_1}{n_2}\right)^2 d_1$ into the constant equation:
$$n_1^2 r^2 + n_1^2 d_1^2 = n_2^2 r^2 + \frac{n_1^4}{n_2^2}d_1^2 \implies (n_2^2 - n_1^2)r^2 = n_1^2\left(1 - \frac{n_1^2}{n_2^2}\right)d_1^2 = \frac{n_1^2}{n_2^2}(n_2^2 - n_1^2)d_1^2$$</p>
<p>Dividing by $(n_2^2 - n_1^2)$:
$$r^2 = \frac{n_1^2}{n_2^2} d_1^2 \implies d_1 = \frac{n_2}{n_1}r$$</p>
<p>Substituting $d_1$ into the relation for $d_2$:
$$d_2 = \frac{n_1^2}{n_2^2}\left(\frac{n_2}{n_1}r\right) = \frac{n_1}{n_2}r$$</p>
<p>Multiplying:
$$n_1^2 d_1 = n_1^2\left(\frac{n_2}{n_1}r\right) = n_1 n_2 r, \quad n_2^2 d_2 = n_2^2\left(\frac{n_1}{n_2}r\right) = n_1 n_2 r$$</p>
<p>Thus:
$$n_1^2 d_1 = n_2^2 d_2 = n_1 n_2 r$$</p>''',
  r'Confusing distances $d_1, d_2$ measured from the center of curvature $C$ with distances measured from the vertex of the spherical surface.')

W('q.op.1.12', '1.1', 4,
  'The Cartesian Oval',
  'Ghatak 6e Problem 3.8',
  r'''<p>Let a point object $O$ be located at the origin $(0,0,0)$ in a medium of refractive index $n_1$. An interface refracts all rays to form a stigmatic image at $I(0,0,z_2)$ in a medium of index $n_2$. If the vertex of the interface is at $P(0,0,z_1)$, show that the equation of the refracting surface (Cartesian oval) is:
$$n_1 \sqrt{x^2 + y^2 + z^2} + n_2 \sqrt{x^2 + y^2 + (z_2 - z)^2} = n_1 z_1 + n_2(z_2 - z_1)$$</p>''',
  ['c.1.1.1', 'c.1.1.4'],
  r'''<p>Equate the optical path length from the source to the image via an arbitrary surface point $(x,y,z)$ to the optical path length along the central axis through the vertex $(0,0,z_1)$ by Fermat's principle for stigmatic imaging.</p>''',
  r'''<p>Let $S(x, y, z)$ be an arbitrary point on the refracting interface. The optical path length of a ray traveling from $O$ to $I$ via point $S$ is:
$$L_{\text{op}}(S) = n_1(OS) + n_2(SI)$$</p>
<p>From Euclidean geometry:
$$OS = \sqrt{x^2 + y^2 + z^2}, \quad SI = \sqrt{x^2 + y^2 + (z_2 - z)^2}$$</p>
<p>The central axial ray travels from $O$ to vertex $P(0,0,z_1)$ and continues along the $z$-axis to $I(0,0,z_2)$. Its optical path length is:
$$L_{\text{op}}(\text{axis}) = n_1(OP) + n_2(PI) = n_1 z_1 + n_2(z_2 - z_1)$$</p>
<p>According to Fermat’s principle, for stigmatic, aberration-free imaging, the optical path length must be identical for all ray paths connecting $O$ and $I$:
$$L_{\text{op}}(S) = L_{\text{op}}(\text{axis})$$
$$n_1 \sqrt{x^2 + y^2 + z^2} + n_2 \sqrt{x^2 + y^2 + (z_2 - z)^2} = n_1 z_1 + n_2(z_2 - z_1)$$
This is the general equation defining a Cartesian oval of revolution.</p>''',
  r'Forgetting that the distance in the second medium along the axis is $z_2 - z_1$, not simply $z_2$.')

W('q.op.1.13', '1.2', 4,
  'Successive Refractions Through Two Spherical Surfaces',
  'Ghatak 6e Example 4.1',
  r'''<p>A medium of refractive index $1.5$ is bounded by two spherical surfaces $S_1 P_1 M_1$ and $S_2 P_2 M_2$ with radii of curvature $+15\text{ cm}$ and $-25\text{ cm}$, and centers at $C_1$ and $C_2$ respectively. The thickness separating the vertices $P_1$ and $P_2$ is $30\text{ cm}$. An object is placed at a distance of $40\text{ cm}$ to the left of $P_1$. Determine the position of the final paraxial image.</p>''',
  ['c.1.2.2'],
  r'''<p>Apply the single spherical surface refraction formula at the first surface to find the position of the intermediate image. Subtract the vertex thickness to obtain the object distance for the second surface, and apply the refraction formula again.</p>''',
  r'''<p><b>Refraction at the first surface ($P_1$):</b><br>
Refractive indices: $n_1 = 1.0$, $n_2 = 1.5$.<br>
Object distance: $u_1 = -40\text{ cm}$.<br>
Radius of curvature: $R_1 = +15\text{ cm}$.</p>
<p>Applying the Gaussian refraction equation:
$$\frac{n_2}{v_1} - \frac{n_1}{u_1} = \frac{n_2 - n_1}{R_1}$$
$$\frac{1.5}{v_1} - \frac{1.0}{-40} = \frac{1.5 - 1.0}{15} = \frac{0.5}{15} = \frac{1}{30}$$
$$\frac{1.5}{v_1} + \frac{1}{40} = \frac{1}{30} \implies \frac{1.5}{v_1} = \frac{1}{30} - \frac{1}{40} = \frac{4 - 3}{120} = \frac{1}{120}$$
$$v_1 = 1.5 \times 120 = +180\text{ cm}$$
The first surface forms an intermediate image $O'$ located $180\text{ cm}$ to the right of $P_1$.</p>
<p><b>Refraction at the second surface ($P_2$):</b><br>
The intermediate image $O'$ acts as a virtual object for the second surface.<br>
Since the separation $P_1 P_2 = 30\text{ cm}$, the distance from $P_2$ to $O'$ is:
$$u_2 = 180 - 30 = +150\text{ cm}$$
Refractive indices: $n_1' = 1.5$, $n_2' = 1.0$.<br>
Radius of curvature: $R_2 = -25\text{ cm}$.</p>
<p>Applying the refraction equation:
$$\frac{1.0}{v_2} - \frac{1.5}{+150} = \frac{1.0 - 1.5}{-25}$$
$$\frac{1.0}{v_2} - \frac{1}{100} = \frac{-0.5}{-25} = +\frac{1}{50}$$
$$\frac{1.0}{v_2} = \frac{1}{50} + \frac{1}{100} = \frac{3}{100} \implies v_2 = +\frac{100}{3} = +33\frac{1}{3}\text{ cm}$$
A real final image is formed $33\frac{1}{3}\text{ cm}$ to the right of vertex $P_2$.</p>''',
  r'Forgetting to subtract the vertex thickness from $v_1$ to find $u_2$, or failing to swap the refractive indices ($n_1 = 1.5, n_2 = 1.0$) at the second interface.')

W('q.op.1.14', '1.2', 4,
  'Two-Mirror Optical System',
  'Ghatak 6e Example 4.2',
  r'''<p>An optical system consists of a concave mirror $S_1 P_1 M_1$ ($R_1 = -60\text{ cm}$) and a convex mirror $S_2 P_2 M_2$ ($R_2 = +20\text{ cm}$) separated by an axial distance of $40\text{ cm}$, facing each other. An object $O$ is placed $80\text{ cm}$ to the left of the concave mirror $P_1$. Determine the final image position after reflection from the concave mirror followed by the convex mirror.</p>''',
  ['c.1.2.4'],
  r'''<p>Apply the mirror formula to locate the image formed by the concave mirror. Determine the position of this intermediate image relative to the convex mirror, taking into account the reversed direction of ray propagation, and apply the mirror formula again.</p>''',
  r'''<p><b>First reflection (Concave mirror $P_1$):</b><br>
Object distance: $u_1 = -80\text{ cm}$.<br>
Radius of curvature: $R_1 = -60\text{ cm}$.</p>
<p>Using the mirror equation:
$$\frac{1}{u_1} + \frac{1}{v_1} = \frac{2}{R_1}$$
$$-\frac{1}{80} + \frac{1}{v_1} = \frac{2}{-60} = -\frac{1}{30}$$
$$\frac{1}{v_1} = -\frac{1}{30} + \frac{1}{80} = \frac{-8 + 3}{240} = -\frac{5}{240} = -\frac{1}{48} \implies v_1 = -48\text{ cm}$$
A real image $I_1$ is formed $48\text{ cm}$ to the left of $P_1$.</p>
<p><b>Second reflection (Convex mirror $P_2$):</b><br>
$P_2$ is located $40\text{ cm}$ to the left of $P_1$. Image $I_1$ lies $48\text{ cm}$ to the left of $P_1$, which is:
$$48 - 40 = 8\text{ cm to the left of } P_2$$
For the convex mirror, light arrives from right to left after reflection from $P_1$. Using coordinates referenced to $P_2$ where the incident direction is along the $-z$ axis, or reversing coordinates so incident light travels from left to right:
$u_2 = -8\text{ cm}$, $R_2 = -20\text{ cm}$ (center of curvature on the side opposite to incidence).</p>
<p>Using the mirror equation:
$$\frac{1}{v_2} + \frac{1}{u_2} = \frac{2}{R_2}$$
$$\frac{1}{v_2} + \frac{1}{-8} = \frac{2}{-20} = -\frac{1}{10}$$
$$\frac{1}{v_2} = \frac{1}{8} - \frac{1}{10} = \frac{5 - 4}{40} = +\frac{1}{40} \implies v_2 = +40\text{ cm}$$
The final image is formed $40\text{ cm}$ behind the convex mirror (to its right), which coincides with the position of vertex $P_1$.</p>''',
  r'Failing to reverse the sign convention for the second reflection where light travels in the opposite direction (right to left).')

W('q.op.1.15', '1.4', 5,
  'Two-Lens System',
  'Ghatak 6e Example 4.3',
  r'''<p>A two-lens system consists of a thin converging lens of focal length $f_1 = +20\text{ cm}$ and a thin diverging lens of focal length $f_2 = -10\text{ cm}$ separated by $8\text{ cm}$. An object of height $1\text{ cm}$ is placed $40\text{ cm}$ in front of the converging lens. Calculate the position, size, and orientation of the final image.</p>''',
  ['c.1.3.3', 'c.1.4.2'],
  r'''<p>Apply the thin-lens formula to the first lens to locate the intermediate image and its magnification. Use the intermediate image as the object for the second lens (accounting for lens separation), compute the final image position, and find the overall magnification as the product $m = m_1 \times m_2$.</p>''',
  r'''<p><b>First lens ($f_1 = +20\text{ cm}$):</b><br>
Object distance: $u_1 = -40\text{ cm}$.</p>
<p>Applying the thin lens formula:
$$\frac{1}{v_1} - \frac{1}{u_1} = \frac{1}{f_1} \implies \frac{1}{v_1} - \frac{1}{-40} = \frac{1}{20}$$
$$\frac{1}{v_1} = \frac{1}{20} - \frac{1}{40} = \frac{1}{40} \implies v_1 = +40\text{ cm}$$
Lateral magnification of the first lens:
$$m_1 = \frac{v_1}{u_1} = \frac{+40}{-40} = -1.0$$
The intermediate image is inverted, of height $y_1' = -1.0\text{ cm}$, and formed $40\text{ cm}$ to the right of lens 1.</p>
<p><b>Second lens ($f_2 = -10\text{ cm}$):</b><br>
The two lenses are separated by $d = 8\text{ cm}$. The intermediate image lies $40 - 8 = 32\text{ cm}$ to the right of lens 2, acting as a virtual object:<br>
Object distance: $u_2 = +32\text{ cm}$.</p>
<p>Applying the thin lens formula:
$$\frac{1}{v_2} - \frac{1}{+32} = \frac{1}{-10}$$
$$\frac{1}{v_2} = -\frac{1}{10} + \frac{1}{32} = \frac{-16 + 5}{160} = -\frac{11}{160}$$
$$v_2 = -\frac{160}{11} \approx -14.55\text{ cm}$$
The image is virtual, located approximately $14.55\text{ cm}$ to the left of the second lens.</p>
<p>Lateral magnification of the second lens:
$$m_2 = \frac{v_2}{u_2} = \frac{-160/11}{+32} = -\frac{5}{11} \approx -0.455$$</p>
<p><b>Total magnification and image size:</b>
$$m = m_1 \times m_2 = (-1.0) \times \left(-\frac{5}{11}\right) = +\frac{5}{11} \approx +0.455$$
$$y' = m \cdot y = +0.455 \times 1.0\text{ cm} \approx +0.455\text{ cm}$$
The final image is virtual, erect, with a height of approximately $0.455\text{ cm}$ ($1/2.2$ of the original size).</p>''',
  r'Treating the intermediate image as a real object with $u_2 = -32\text{ cm}$ instead of a virtual object with $u_2 = +32\text{ cm}$ lying behind the second lens.')

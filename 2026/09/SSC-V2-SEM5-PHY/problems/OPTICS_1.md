### Chapter 3: Fermat’s Principle and Its Applications

---

#### Section 3.2: Laws of Reflection and Refraction from Fermat’s Principle

---

##### Example 3.1: Paraboloidal Reflector Focus

* **Original Question:**  
  Consider a set of rays, parallel to the principal axis, incident on a paraboloidal reflector. Using Fermat’s principle, show that all parallel rays pass through the focus $S$ of the paraboloid after reflection.

* **Answer & Solution:**  
  Let $S$ be the focus of the parabola, $AB$ be its directrix, and $C$ be the vertex. Consider an arbitrary incoming ray parallel to the axis incident on the paraboloid at point $Q$, reflecting toward $S$. Drop a perpendicular from $Q$ to the directrix, meeting it at $L'$.  
  By the geometric definition of a parabola, the distance from any point on the curve to the focus equals its perpendicular distance to the directrix:
  $$QS = QL'$$
  Let $P$ be a point on the incident ray before hitting the mirror. The total optical path length from $P$ to the focus $S$ via $Q$ is:
  $$L_{\text{op}} = PQ + QS = PQ + QL'$$
  Because $PQ$ is parallel to the axis and $QL'$ is perpendicular to the directrix $AB$, the points $P, Q,$ and $L'$ lie along the same straight line perpendicular to $AB$. Thus:
  $$PQ + QL' = PL'$$
  where $PL'$ is the constant perpendicular distance between the wavefront plane passing through $P$ and the directrix $AB$. Because the optical path length is identical for any point of incidence $Q$, $\delta L_{\text{op}} = 0$ holds identically. Therefore, all incident rays parallel to the axis reflect through the focus $S$.

* **Practice Question:**  
  A point light source is placed at the focus $S$ of a paraboloidal reflector. Using Fermat’s principle and the directrix property of a parabola, prove that all rays diverging from $S$ emerge parallel to the axis of symmetry after reflection.

---

##### Example 3.2: Elliptical Reflector Conjugates

* **Original Question:**  
  Consider an elliptical reflector whose foci are at points $S_1$ and $S_2$. Show by using Fermat’s principle that all rays emanating from $S_1$ will pass through $S_2$ after reflection.

* **Answer & Solution:**  
  Let $P$ be an arbitrary point on the reflecting elliptical boundary. By the geometric definition of an ellipse, the sum of the distances from any point on the perimeter to the two focal points is constant:
  $$S_1P + PS_2 = 2a = \text{constant}$$
  where $2a$ is the major axis length.  
  Since the medium within the reflector is homogeneous ($n = \text{constant}$), the optical path length for any ray path connecting $S_1$ to $S_2$ via reflection at $P$ is:
  $$L_{\text{op}} = n(S_1P + PS_2) = 2na = \text{constant}$$
  Because $L_{\text{op}}$ is independent of the coordinate of the reflection point $P$, the first variation vanishes:
  $$\delta L_{\text{op}} = 0$$
  Hence, the transit time is stationary for every path striking the ellipse, and all rays leaving $S_1$ converge stigmatically at $S_2$.

* **Practice Question:**  
  A prolate spheroidal cavity has reflecting interior walls with foci at $F_1$ and $F_2$. If an isotropic point source is positioned at $F_1$, use Fermat’s principle to demonstrate that the reflected wavefronts form converging spherical waves centered on $F_2$.

---

##### Example 3.3: Paraxial Refraction at a Spherical Surface

* **Original Question:**  
  Consider a spherical refracting surface $SPM$ of radius $r$ separating media of refractive indices $n_1$ and $n_2$. Let $C$ be the center of curvature. An object point $O$ and an axial point $Q$ are collinear with $C$.  
  (a) Calculate the optical path length $L_{\text{op}} = n_1(OS) + n_2(SQ)$ as a function of the distances $x = OP$, $y = PQ$, radius $r$, and the small polar angle $\theta = \angle SCP$.  
  (b) Apply Fermat’s principle to determine the position of the paraxial image point $I$.

* **Answer & Solution:**  
  **(a)** In $\triangle OSC$, applying the law of cosines:
  $$OS = \left[(x + r)^2 + r^2 - 2r(x + r)\cos\theta\right]^{1/2}$$
  For small angles $\theta$, approximating $\cos\theta \approx 1 - \frac{\theta^2}{2}$:
  $$OS \approx \left[x^2 + 2rx + 2r^2 - 2r(x + r)\left(1 - \frac{\theta^2}{2}\right)\right]^{1/2} = \left[x^2 + r(x + r)\theta^2\right]^{1/2} \approx x\left[1 + \frac{r(x + r)}{2x^2}\theta^2\right]$$
  $$OS \approx x + \frac{1}{2}r^2\left(\frac{1}{x} + \frac{1}{r}\right)\theta^2$$
  Similarly, in $\triangle SCQ$, where $CQ = y - r$:
  $$SQ = \left[(y - r)^2 + r^2 + 2r(y - r)\cos(\pi - \theta)\right]^{1/2} = \left[(y - r)^2 + r^2 - 2r(y - r)\cos\theta\right]^{1/2}$$
  Expanding for small $\theta$:
  $$SQ \approx y - \frac{1}{2}r^2\left(\frac{1}{r} - \frac{1}{y}\right)\theta^2$$
  Therefore, the optical path length is:
  $$L_{\text{op}} = n_1 OS + n_2 SQ \approx n_1 x + n_2 y + \frac{1}{2}r^2\left[\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right]\theta^2$$

  **(b)** By Fermat’s principle, the optical path length must be stationary with respect to variations in ray path ($\theta$):
  $$\frac{dL_{\text{op}}}{d\theta} = r^2\left[\frac{n_1}{x} + \frac{n_2}{y} - \frac{n_2 - n_1}{r}\right]\theta = 0$$
  For this to hold for all paraxial rays independent of $\theta$, the term in brackets must vanish identically:
  $$\frac{n_2}{y} + \frac{n_1}{x} = \frac{n_2 - n_1}{r}$$
  With Cartesian sign conventions ($u = -x$, $v = +y$, $R = +r$), this yields the Gaussian refraction formula:
  $$\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$$

* **Practice Question:**  
  Using a cosine-law expansion similar to Example 3.3, calculate the optical path length for a point object on the axis of a single spherical refracting interface when the center of curvature lies to the left of the vertex ($R < 0$). Apply Fermat’s principle to deduce the paraxial imaging condition.

---

##### Example 3.4: Virtual Image Formation at a Spherical Surface

* **Original Question:**  
  Consider refraction at a spherical boundary where the refracted rays diverge away from the optical axis. Using Fermat’s principle, show that for paraxial rays forming a virtual image at point $I$, the optical path difference $n_1 OS - n_2 SI$ must be stationary with respect to the point of incidence $S$.

* **Answer & Solution:**  
  Let $P$ be an arbitrary observation point on the refracted ray in the second medium ($n_2$). The actual optical path length from object $O$ to $P$ via surface point $S$ is:
  $$L_{\text{op}} = n_1 OS + n_2 SP$$
  Because the refracted rays diverge, they appear to originate from the virtual image point $I$ on the axis. Adding and subtracting the optical distance $n_2 SI$:
  $$L_{\text{op}} = (n_1 OS - n_2 SI) + n_2 (SI + SP)$$
  For the ray to be continuous and straight from virtual origin $I$ to observation point $P$, the sum $SI + SP = IP$ is the straight-line distance, which is stationary. Therefore, Fermat’s stationarity condition ($\delta L_{\text{op}} = 0$) requires the remaining term to be stationary independently:
  $$\delta(n_1 OS - n_2 SI) = 0$$
  Thus, a virtual image is formed when the quantity $n_1 OS - n_2 SI$ is an extremum with respect to $S$.

* **Practice Question:**  
  A diverging beam in a medium of refractive index $n_1$ impinges upon a planar interface entering a medium of index $n_2 < n_1$. Formulate the optical path expression for the virtual image using Fermat's principle, and show that the apparent depth condition follows directly from it.

---

##### Problem 3.1: Paraxial Imaging by a Concave Mirror

* **Original Question:**  
  Consider an object point $O$ on the axis of a concave mirror of radius of curvature $r$, with center of curvature $C$. Let $Q$ be an arbitrary point on the axis. Show that the optical path length $L_{\text{op}} = OS + SQ$ is approximately:
  $$L_{\text{op}} \approx x + y + \frac{1}{2}r^2\left[\frac{1}{x} + \frac{1}{y} - \frac{2}{r}\right]\theta^2$$
  where $x = OP$, $y = QP$, and $\theta = \angle SCP$ is small. Determine the paraxial image point and show that it yields $\frac{1}{u} + \frac{1}{v} = \frac{2}{R}$.

* **Answer & Solution:**  
  In $\triangle OSC$, $OC = x - r$. Expanding $OS$ in terms of small angle $\theta$:
  $$OS = \left[(x - r)^2 + r^2 + 2r(x - r)\cos\theta\right]^{1/2} \approx x + \frac{1}{2}r^2\left(\frac{1}{x} - \frac{1}{r}\right)\theta^2$$
  Similarly, for point $Q$ located at distance $y$ from vertex $P$, $QC = y - r$:
  $$SQ = \left[(y - r)^2 + r^2 + 2r(y - r)\cos\theta\right]^{1/2} \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2$$
  Adding the two path segments:
  $$L_{\text{op}} = OS + SQ \approx x + y + \frac{1}{2}r^2\left[\frac{1}{x} + \frac{1}{y} - \frac{2}{r}\right]\theta^2$$
  Applying Fermat’s principle ($\frac{dL_{\text{op}}}{d\theta} = 0$):
  $$r^2\left[\frac{1}{x} + \frac{1}{y} - \frac{2}{r}\right]\theta = 0 \implies \frac{1}{x} + \frac{1}{y} = \frac{2}{r}$$
  Under the standard sign convention, the object, image, and center of curvature are to the left of the vertex: $u = -x$, $v = -y$, and $R = -r$. Substituting these yields:
  $$\frac{1}{-u} + \frac{1}{-v} = \frac{2}{-R} \implies \frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$

* **Practice Question:**  
  Using Fermat’s principle, set up the optical path length for paraxial reflection from a concave mirror when an incident ray is parallel to the axis ($x \to \infty$). Derive the focal length $f$ in terms of the radius of curvature $r$.

---

##### Problem 3.2: Paraxial Imaging by a Convex Mirror

* **Original Question:**  
  Consider an object point $O$ at distance $x$ in front of a convex spherical mirror $SPM$ of radius of curvature $r$. Assuming the optical path length to be $L_{\text{op}} = OS - SQ$:  
  (a) Show that:
  $$L_{\text{op}} \approx x - y + \frac{1}{2}r^2\left[\frac{1}{x} - \frac{1}{y} + \frac{2}{r}\right]\theta^2$$  
  (b) Show that the paraxial image is formed at $y = y_0$ satisfying $\frac{1}{x} - \frac{1}{y_0} = -\frac{2}{r}$, consistent with $\frac{1}{u} + \frac{1}{v} = \frac{2}{R}$.

* **Answer & Solution:**  
  **(a)** The center of curvature $C$ and virtual image point $Q$ lie behind the reflecting convex surface. In $\triangle OSC$, $OC = x + r$:
  $$OS = \left[(x + r)^2 + r^2 - 2r(x + r)\cos\theta\right]^{1/2} \approx x + \frac{1}{2}r^2\left(\frac{1}{x} + \frac{1}{r}\right)\theta^2$$
  For virtual focus $Q$ located at distance $y$ behind the mirror, $QC = r - y$:
  $$SQ = \left[(r - y)^2 + r^2 - 2r(r - y)\cos(\pi - \theta)\right]^{1/2} \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2$$
  Subtracting $SQ$ from $OS$ for the virtual image optical path:
  $$L_{\text{op}} = OS - SQ \approx x - y + \frac{1}{2}r^2\left[\frac{1}{x} - \frac{1}{y} + \frac{2}{r}\right]\theta^2$$

  **(b)** Requiring stationarity ($\frac{\partial L_{\text{op}}}{\partial \theta} = 0$):
  $$\frac{1}{x} - \frac{1}{y_0} + \frac{2}{r} = 0 \implies \frac{1}{x} - \frac{1}{y_0} = -\frac{2}{r}$$
  Under the sign convention: $u = -x$, $v = +y_0$, $R = +r$ (measured to the right of the vertex):
  $$-\frac{1}{u} - \frac{1}{v} = -\frac{2}{R} \implies \frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$

* **Practice Question:**  
  For a convex mirror of radius of curvature $R$, determine the second derivative $\frac{d^2 L_{\text{op}}}{d\theta^2}$ at the paraxial stationary point $y = y_0$, and state whether the actual optical path length corresponds to a local minimum, maximum, or inflection point.

---

##### Problem 3.3: Concave Mirror Imaging for Object Inside the Focal Point

* **Original Question:**  
  Use Fermat's principle to determine the mirror equation for an object point at a distance less than $R/2$ from a concave mirror of radius of curvature $R$.

* **Answer & Solution:**  
  When an object is placed at a distance $x < r/2$ from a concave mirror, the reflected rays diverge, producing an apparent virtual image behind the surface at a distance $y$ to the right of $P$.  
  The optical path function for virtual image formation is:
  $$L_{\text{op}} = OS - SQ$$
  Using small-angle approximations for $\triangle OSC$ and $\triangle QSC$ where $C$ is at distance $r$ in front of the mirror:
  $$OS \approx x + \frac{1}{2}r^2\left(\frac{1}{x} - \frac{1}{r}\right)\theta^2$$
  $$SQ \approx y + \frac{1}{2}r^2\left(\frac{1}{y} + \frac{1}{r}\right)\theta^2$$
  Subtracting these gives:
  $$L_{\text{op}} \approx x - y + \frac{1}{2}r^2\left[\frac{1}{x} - \frac{1}{y} - \frac{2}{r}\right]\theta^2$$
  Setting $\frac{\partial L_{\text{op}}}{\partial \theta} = 0$:
  $$\frac{1}{x} - \frac{1}{y} = \frac{2}{r}$$
  Applying the Cartesian sign convention ($u = -x$, $v = +y$, $R = -r$):
  $$\frac{1}{-u} - \frac{1}{v} = \frac{2}{-R} \implies \frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$

* **Practice Question:**  
  Using Fermat's principle, show that when an object is placed exactly at the focal plane ($x = r/2$) of a concave mirror, the reflected rays emerge parallel to the axis ($y \to \infty$).

---

##### Problem 3.4: Virtual Image Formation at a Concave Refracting Interface

* **Original Question:**  
  Consider a point object $O$ at distance $x$ in front of a concave refracting surface $SPM$ separating media of indices $n_1$ and $n_2$, with center of curvature $C$ at distance $r$ in front of the vertex. Show that the optical path length $L_{\text{op}} = n_1 OS - n_2 SQ$ is:
  $$L_{\text{op}} \approx n_1 x - n_2 y - \frac{1}{2}r^2\left[\frac{n_2}{y} - \frac{n_1}{x} - \frac{n_2 - n_1}{r}\right]\theta^2$$
  and verify that the result is consistent with $\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$.

* **Answer & Solution:**  
  For a concave surface facing the incident medium, $C$ lies on the left ($OP = x$, $CP = r$, $OC = x - r$). In $\triangle OSC$:
  $$OS \approx x + \frac{1}{2}r^2\left(\frac{1}{x} - \frac{1}{r}\right)\theta^2$$
  The virtual image $Q$ is formed to the left of the vertex at distance $y$ ($QC = y - r$). In $\triangle QSC$:
  $$SQ \approx y + \frac{1}{2}r^2\left(\frac{1}{y} - \frac{1}{r}\right)\theta^2$$
  Forming the effective virtual optical path length:
  $$L_{\text{op}} = n_1 OS - n_2 SQ = n_1 x - n_2 y + \frac{1}{2}r^2\left[\left(\frac{n_1}{x} - \frac{n_1}{r}\right) - \left(\frac{n_2}{y} - \frac{n_2}{r}\right)\right]\theta^2$$
  $$L_{\text{op}} = n_1 x - n_2 y - \frac{1}{2}r^2\left[\frac{n_2}{y} - \frac{n_1}{x} - \frac{n_2 - n_1}{r}\right]\theta^2$$
  Applying Fermat’s condition ($\frac{dL_{\text{op}}}{d\theta} = 0$):
  $$\frac{n_2}{y} - \frac{n_1}{x} - \frac{n_2 - n_1}{r} = 0 \implies \frac{n_2}{y} - \frac{n_1}{x} = \frac{n_2 - n_1}{r}$$
  Under Cartesian sign conventions ($u = -x$, $v = -y$, $R = -r$):
  $$\frac{n_2}{-v} - \frac{n_1}{-u} = \frac{n_2 - n_1}{-R} \implies \frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$$

* **Practice Question:**  
  A virtual object is formed behind a concave spherical refracting surface ($u > 0, R < 0$). Write down the optical path length using Fermat's principle and deduce the condition for forming a real image ($v > 0$).

---

##### Problem 3.5: Refracting Ellipsoid of Revolution

* **Original Question:**  
  Show by using Fermat's principle that all incident rays parallel to the major axis of an ellipsoid of revolution will focus stigmatically to the far focal point, provided the eccentricity of the ellipse satisfies $e = n_1/n_2$, where $n_2 > n_1$.

* **Answer & Solution:**  
  Let the origin be at the focus $C'$ where light converges, with the ellipsoid surface given in standard coordinates. Consider an incident plane wavefront perpendicular to the axis at reference plane $x = -x_0$.  
  A ray parallel to the axis at height $y$ travels through medium $n_1$ up to point $B(x, y)$ on the ellipse, and then travels through medium $n_2$ directly to focus $C'$.  
  The optical path length from the reference wavefront to focus $C'$ is:
  $$L_{\text{op}} = n_1(x_0 + x) + n_2 BC'$$
  By the directrix property of an ellipse with eccentricity $e$ and focus $C'$, the distance from point $B(x,y)$ to focus $C'$ is related to its distance to directrix $d$ by $BC' = e(d - x) = ed - ex$.  
  Substituting this into the optical path equation:
  $$L_{\text{op}} = n_1 x_0 + n_1 x + n_2(ed - ex) = (n_1 x_0 + n_2 e d) + (n_1 - n_2 e)x$$
  For $L_{\text{op}}$ to be constant and independent of the ray coordinate $x$ across the entire aperture:
  $$n_1 - n_2 e = 0 \implies e = \frac{n_1}{n_2}$$
  Thus, when the eccentricity equals the ratio of refractive indices $n_1/n_2$, all parallel rays focus stigmatically to $C'$.

* **Practice Question:**  
  Using Fermat's principle, design a hyperbolic refracting boundary separating media of indices $n_1$ and $n_2$ ($n_1 > n_2$) that focuses a parallel incident beam to a stigmatic real focus. Determine the required eccentricity $e$ of the hyperboloid.

---

##### Problem 3.6: Optical Path in a Spherical Reflector

* **Original Question:**  
  Let $C$ be the center of a reflecting sphere of radius $R$. Points $P_1$ and $P_2$ lie on a common diameter equidistant from the center at distance $d$.  
  (a) Obtain the optical path length $P_1 O + OP_2$ as a function of the angle $\theta = \angle OCP_1$, where $O$ is a point on the spherical surface.  
  (b) Find the values of $\theta$ for which $P_1 O P_2$ is an actual ray path.

* **Answer & Solution:**  
  **(a)** Using the law of cosines in $\triangle P_1 C O$:
  $$P_1 O = \sqrt{R^2 + d^2 - 2Rd\cos\theta}$$
  In $\triangle P_2 C O$, since $P_1, C, P_2$ are collinear along a diameter, the angle $\angle O C P_2 = \pi - \theta$. Therefore:
  $$O P_2 = \sqrt{R^2 + d^2 - 2Rd\cos(\pi - \theta)} = \sqrt{R^2 + d^2 + 2Rd\cos\theta}$$
  The total optical path length in a medium of index $n = 1$ is:
  $$L_{\text{op}}(\theta) = \sqrt{R^2 + d^2 - 2Rd\cos\theta} + \sqrt{R^2 + d^2 + 2Rd\cos\theta}$$

  **(b)** Applying Fermat’s principle ($\frac{dL_{\text{op}}}{d\theta} = 0$):
  $$\frac{dL_{\text{op}}}{d\theta} = \frac{Rd\sin\theta}{\sqrt{R^2 + d^2 - 2Rd\cos\theta}} - \frac{Rd\sin\theta}{\sqrt{R^2 + d^2 + 2Rd\cos\theta}} = 0$$
  This equation is satisfied when:
  1. $\sin\theta = 0 \implies \theta = 0 \text{ or } \pi$ (corresponding to rays propagating directly along the diameter).
  2. The denominators are equal:
     $$R^2 + d^2 - 2Rd\cos\theta = R^2 + d^2 + 2Rd\cos\theta \implies 4Rd\cos\theta = 0 \implies \cos\theta = 0 \implies \theta = \frac{\pi}{2}$$
  Thus, valid ray paths occur at $\theta = 0, \frac{\pi}{2},$ and $\pi$.

* **Practice Question:**  
  For the spherical reflector in Problem 3.6, evaluate the second derivative $\frac{d^2 L_{\text{op}}}{d\theta^2}$ at $\theta = \pi/2$ and determine whether this ray path represents a local minimum or maximum in optical transit time as a function of the ratio $d/R$.

---

##### Problem 3.7: Aplanatic Points of a Spherical Refracting Surface

* **Original Question:**  
  A spherical refracting surface $SPM$ of radius $r$ separates media of indices $n_1$ and $n_2$. An axial point object $O$ forms an aberration-free virtual image at $I$ such that for every point $S$ on the surface:
  $$n_1 OS - n_2 SI = 0$$
  Show that the surface is spherical with distances from the center of curvature $C$ given by $d_1 = OC = \frac{n_2}{n_1}r$ and $d_2 = IC = \frac{n_1}{n_2}r$, and verify that $n_1^2 d_1 = n_2^2 d_2 = n_1 n_2 r$.

* **Answer & Solution:**  
  Let the center of curvature $C$ be the coordinate origin. Let $\mathbf{r}_S$ be the position vector of surface point $S$, with $|\mathbf{r}_S| = r$. Let $O$ and $I$ lie on the optical axis at distances $d_1$ and $d_2$ from $C$.  
  By the law of cosines:
  $$OS = \sqrt{r^2 + d_1^2 - 2r d_1 \cos\theta}, \quad SI = \sqrt{r^2 + d_2^2 - 2r d_2 \cos\theta}$$
  The stigmatic condition requires:
  $$n_1 OS = n_2 SI \implies n_1^2(r^2 + d_1^2 - 2r d_1 \cos\theta) = n_2^2(r^2 + d_2^2 - 2r d_2 \cos\theta)$$
  For this equation to hold identically for all values of $\cos\theta$, the coefficients must balance independently:
  1. Equating $\cos\theta$ coefficients:
     $$2n_1^2 r d_1 = 2n_2^2 r d_2 \implies n_1^2 d_1 = n_2^2 d_2$$
  2. Equating constant terms:
     $$n_1^2(r^2 + d_1^2) = n_2^2(r^2 + d_2^2)$$
  Substituting $d_2 = \left(\frac{n_1}{n_2}\right)^2 d_1$ into the constant equation:
  $$n_1^2 r^2 + n_1^2 d_1^2 = n_2^2 r^2 + \frac{n_1^4}{n_2^2}d_1^2 \implies (n_2^2 - n_1^2)r^2 = n_1^2\left(1 - \frac{n_1^2}{n_2^2}\right)d_1^2 = \frac{n_1^2}{n_2^2}(n_2^2 - n_1^2)d_1^2$$
  Dividing by $(n_2^2 - n_1^2)$:
  $$r^2 = \frac{n_1^2}{n_2^2} d_1^2 \implies d_1 = \frac{n_2}{n_1}r$$
  Substituting $d_1$ into the relation for $d_2$:
  $$d_2 = \frac{n_1^2}{n_2^2}\left(\frac{n_2}{n_1}r\right) = \frac{n_1}{n_2}r$$
  Multiplying:
  $$n_1^2 d_1 = n_1^2\left(\frac{n_2}{n_1}r\right) = n_1 n_2 r, \quad n_2^2 d_2 = n_2^2\left(\frac{n_1}{n_2}r\right) = n_1 n_2 r$$
  Thus:
  $$n_1^2 d_1 = n_2^2 d_2 = n_1 n_2 r$$

* **Practice Question:**  
  A glass sphere of radius $R = 10\text{ cm}$ and refractive index $n = 1.5$ is surrounded by air ($n_0 = 1.0$). Find the positions of the two aplanatic points measured from the center of the sphere.

---

##### Problem 3.8: The Cartesian Oval

* **Original Question:**  
  Let a point object $O$ be located at the origin $(0,0,0)$ in a medium of refractive index $n_1$. An interface refracts all rays to form a stigmatic image at $I(0,0,z_2)$ in a medium of index $n_2$. If the vertex of the interface is at $P(0,0,z_1)$, show that the equation of the refracting surface (Cartesian oval) is:
  $$n_1 \sqrt{x^2 + y^2 + z^2} + n_2 \sqrt{x^2 + y^2 + (z_2 - z)^2} = n_1 z_1 + n_2(z_2 - z_1)$$

* **Answer & Solution:**  
  Let $S(x, y, z)$ be an arbitrary point on the refracting interface. The optical path length of a ray traveling from $O$ to $I$ via point $S$ is:
  $$L_{\text{op}}(S) = n_1(OS) + n_2(SI)$$
  From Euclidean geometry:
  $$OS = \sqrt{x^2 + y^2 + z^2}, \quad SI = \sqrt{x^2 + y^2 + (z_2 - z)^2}$$
  The central axial ray travels from $O$ to vertex $P(0,0,z_1)$ and continues along the $z$-axis to $I(0,0,z_2)$. Its optical path length is:
  $$L_{\text{op}}(\text{axis}) = n_1(OP) + n_2(PI) = n_1 z_1 + n_2(z_2 - z_1)$$
  According to Fermat’s principle, for stigmatic, aberration-free imaging, the optical path length must be identical for all ray paths connecting $O$ and $I$:
  $$L_{\text{op}}(S) = L_{\text{op}}(\text{axis})$$
  $$n_1 \sqrt{x^2 + y^2 + z^2} + n_2 \sqrt{x^2 + y^2 + (z_2 - z)^2} = n_1 z_1 + n_2(z_2 - z_1)$$
  This is the general equation defining a Cartesian oval of revolution.

* **Practice Question:**  
  By taking the limit $z_2 \to \infty$ in the Cartesian oval formula, derive the equation for the refracting interface that converts spherical waves diverging from a point source at $(0,0,0)$ into a perfectly collimated parallel beam in medium $n_2$.

---

#### Section 3.3: Ray Paths in an Inhomogeneous Medium

---

##### Problem 3.11: Parabolic Index Medium

* **Original Question:**  
  Consider a parabolic index medium characterized by:
  $$n^2(x) = n_1^2\left[1 - 2\Delta\left(\frac{x}{a}\right)^2\right] \quad (|x| < a)$$
  $$n^2(x) = n_1^2(1 - 2\Delta) = n_2^2 \quad (|x| > a)$$
  Given $n_1 = 1.50$, $n_2 = 1.48$, and $a = 50\ \mu\text{m}$:  
  (a) Calculate the value of $\Delta$.  
  (b) For rays launched on-axis at $z = 0$ ($x = 0$) with invariant parameter $\tilde{\beta} = 1.495$, find the launch angle $\theta_1$ with respect to the $z$-axis and the maximum height $x_{\text{max}}$ where the ray becomes horizontal.

* **Answer & Solution:**  
  **(a)** From the boundary condition at $|x| = a$:
  $$n_2^2 = n_1^2(1 - 2\Delta) \implies 2\Delta = 1 - \frac{n_2^2}{n_1^2} \implies \Delta = \frac{n_1^2 - n_2^2}{2n_1^2}$$
  Substituting the given numbers:
  $$\Delta = \frac{(1.50)^2 - (1.48)^2}{2(1.50)^2} = \frac{2.2500 - 2.1904}{4.50} = \frac{0.0596}{4.50} \approx 0.01324$$

  **(b)** The ray invariant for a stratified medium is $\tilde{\beta} = n(x)\cos\theta(x)$. At $z = 0, x = 0$:
  $$n(0) = n_1 = 1.50$$
  $$\tilde{\beta} = n_1 \cos\theta_1 \implies \cos\theta_1 = \frac{\tilde{\beta}}{n_1} = \frac{1.495}{1.500} \approx 0.99667$$
  $$\theta_1 = \arccos(0.99667) \approx 0.0817\text{ rad} \approx 4.68^\circ$$
  The ray becomes horizontal when its tangent is parallel to the $z$-axis, meaning $\theta = 0^\circ$ and $n(x_{\text{max}}) = \tilde{\beta}$:
  $$n^2(x_{\text{max}}) = \tilde{\beta}^2 \implies n_1^2\left[1 - 2\Delta\left(\frac{x_{\text{max}}}{a}\right)^2\right] = \tilde{\beta}^2$$
  $$1 - 2\Delta\left(\frac{x_{\text{max}}}{a}\right)^2 = \frac{\tilde{\beta}^2}{n_1^2}$$
  $$x_{\text{max}} = a \sqrt{\frac{1 - (\tilde{\beta}/n_1)^2}{2\Delta}}$$
  Since $2\Delta = 1 - (n_2/n_1)^2$:
  $$x_{\text{max}} = 50 \sqrt{\frac{1 - (1.495/1.500)^2}{0.02649}} = 50 \sqrt{\frac{1 - 0.993356}{0.02649}} = 50 \sqrt{\frac{0.006644}{0.02649}} \approx 50 \sqrt{0.2508} \approx 50 \times 0.5008 \approx 25.04\ \mu\text{m}$$

* **Practice Question:**  
  For the same parabolic index profile, calculate the initial launch angle $\theta_1$ and turning point height $x_{\text{max}}$ for a ray launched from the axis with $\tilde{\beta} = 1.485$.

---

##### Problem 3.12: Ray Path in a Linear Inhomogeneous Medium

* **Original Question:**  
  In an inhomogeneous medium, the refractive index distribution is:
  $$n^2(x) = 1 + \frac{x}{L} \quad (x > 0), \quad n^2(x) = 1 \quad (x < 0)$$
  Determine the trajectory $x(z)$ of a ray in the $xz$-plane launched from the origin $(0,0)$ at an angle of $45^\circ$ with respect to the $x$-axis.

* **Answer & Solution:**  
  The ray launches at $x = 0, z = 0$ with an angle of $45^\circ$ to the $x$-axis, which means it also makes an angle of $\theta_0 = 45^\circ$ with the $z$-axis.  
  The Snell invariant along $z$ is:
  $$\tilde{\beta} = n(x)\sin\alpha(x) = n(x)\cos\theta(x)$$
  At the origin:
  $$\tilde{\beta} = n(0)\cos(45^\circ) = 1 \cdot \frac{1}{\sqrt{2}} = \frac{1}{\sqrt{2}}$$
  The general differential equation for ray trajectories in a medium stratified along $x$ is:
  $$\frac{dx}{dz} = \frac{\sqrt{n^2(x) - \tilde{\beta}^2}}{\tilde{\beta}}$$
  Substituting $n^2(x) = 1 + \frac{x}{L}$ and $\tilde{\beta}^2 = 1/2$:
  $$\frac{dx}{dz} = \frac{\sqrt{1 + \frac{x}{L} - \frac{1}{2}}}{\frac{1}{\sqrt{2}}} = \sqrt{2}\sqrt{\frac{1}{2} + \frac{x}{L}} = \sqrt{1 + \frac{2x}{L}}$$
  Separating variables and integrating from $z = 0$ ($x = 0$):
  $$\int_0^x \frac{dx}{\sqrt{1 + \frac{2x}{L}}} = \int_0^z dz$$
  $$L\left[\sqrt{1 + \frac{2x}{L}} - 1\right] = z$$
  $$\sqrt{1 + \frac{2x}{L}} = 1 + \frac{z}{L}$$
  Squaring both sides:
  $$1 + \frac{2x}{L} = 1 + \frac{2z}{L} + \frac{z^2}{L^2}$$
  $$\frac{2x}{L} = \frac{2z}{L} + \frac{z^2}{L^2} \implies x(z) = z + \frac{z^2}{2L}$$
  Expressed in terms of $\tilde{\beta}$ (where $\frac{1}{4L\tilde{\beta}^2} = \frac{1}{4L(1/2)} = \frac{1}{2L}$):
  $$x(z) = \frac{z^2}{4L\tilde{\beta}^2} + z$$

* **Practice Question:**  
  A light ray enters the linear refractive medium $n^2(x) = 1 + x/L$ at $(0,0)$ making an angle of $30^\circ$ with the $z$-axis. Derive the explicit equation for the trajectory $x(z)$.

---

### Chapter 4: Refraction and Reflection by Spherical Surfaces

---

#### Section 4.2: Refraction at a Single Spherical Surface

---

##### Example 4.1: Successive Refractions Through Two Spherical Surfaces

* **Original Question:**  
  A medium of refractive index $1.5$ is bounded by two spherical surfaces $S_1 P_1 M_1$ and $S_2 P_2 M_2$ with radii of curvature $+15\text{ cm}$ and $-25\text{ cm}$, and centers at $C_1$ and $C_2$ respectively. The thickness separating the vertices $P_1$ and $P_2$ is $30\text{ cm}$. An object is placed at a distance of $40\text{ cm}$ to the left of $P_1$. Determine the position of the final paraxial image.

* **Answer & Solution:**  
  **Refraction at the first surface ($P_1$):**  
  * Refractive indices: $n_1 = 1.0$, $n_2 = 1.5$.
  * Object distance: $u_1 = -40\text{ cm}$.
  * Radius of curvature: $R_1 = +15\text{ cm}$.

  Applying the Gaussian refraction equation:
  $$\frac{n_2}{v_1} - \frac{n_1}{u_1} = \frac{n_2 - n_1}{R_1}$$
  $$\frac{1.5}{v_1} - \frac{1.0}{-40} = \frac{1.5 - 1.0}{15} = \frac{0.5}{15} = \frac{1}{30}$$
  $$\frac{1.5}{v_1} + \frac{1}{40} = \frac{1}{30} \implies \frac{1.5}{v_1} = \frac{1}{30} - \frac{1}{40} = \frac{4 - 3}{120} = \frac{1}{120}$$
  $$v_1 = 1.5 \times 120 = +180\text{ cm}$$
  The first surface forms an intermediate image $O'$ located $180\text{ cm}$ to the right of $P_1$.

  **Refraction at the second surface ($P_2$):**  
  The intermediate image $O'$ acts as a virtual object for the second surface.  
  Since the separation $P_1 P_2 = 30\text{ cm}$, the distance from $P_2$ to $O'$ is:
  $$u_2 = 180 - 30 = +150\text{ cm}$$
  * Refractive indices: $n_1' = 1.5$, $n_2' = 1.0$.
  * Radius of curvature: $R_2 = -25\text{ cm}$.

  Applying the refraction equation:
  $$\frac{1.0}{v_2} - \frac{1.5}{+150} = \frac{1.0 - 1.5}{-25}$$
  $$\frac{1.0}{v_2} - \frac{1}{100} = \frac{-0.5}{-25} = +\frac{1}{50}$$
  $$\frac{1.0}{v_2} = \frac{1}{50} + \frac{1}{100} = \frac{3}{100} \implies v_2 = +\frac{100}{3} = +33\frac{1}{3}\text{ cm}$$
  A real final image is formed $33\frac{1}{3}\text{ cm}$ to the right of vertex $P_2$.

* **Practice Question:**  
  A glass cylinder of refractive index $n = 1.6$ and length $20\text{ cm}$ is bounded by two convex hemispherical ends of radii $R_1 = +10\text{ cm}$ and $R_2 = -10\text{ cm}$. A point object is placed on the axis in air $15\text{ cm}$ to the left of the first vertex. Calculate the final image position relative to the second vertex.

---

#### Section 4.3: Reflection by a Single Spherical Surface

---

##### Example 4.2: Two-Mirror Optical System

* **Original Question:**  
  An optical system consists of a concave mirror $S_1 P_1 M_1$ ($R_1 = -60\text{ cm}$) and a convex mirror $S_2 P_2 M_2$ ($R_2 = +20\text{ cm}$) separated by an axial distance of $40\text{ cm}$, facing each other. An object $O$ is placed $80\text{ cm}$ to the left of the concave mirror $P_1$. Determine the final image position after reflection from the concave mirror followed by the convex mirror.

* **Answer & Solution:**  
  **First reflection (Concave mirror $P_1$):**  
  * Object distance: $u_1 = -80\text{ cm}$.
  * Radius of curvature: $R_1 = -60\text{ cm}$.

  Using the mirror equation:
  $$\frac{1}{u_1} + \frac{1}{v_1} = \frac{2}{R_1}$$
  $$-\frac{1}{80} + \frac{1}{v_1} = \frac{2}{-60} = -\frac{1}{30}$$
  $$\frac{1}{v_1} = -\frac{1}{30} + \frac{1}{80} = \frac{-8 + 3}{240} = -\frac{5}{240} = -\frac{1}{48} \implies v_1 = -48\text{ cm}$$
  A real image $I_1$ is formed $48\text{ cm}$ to the left of $P_1$.

  **Second reflection (Convex mirror $P_2$):**  
  $P_2$ is located $40\text{ cm}$ to the left of $P_1$. Image $I_1$ lies $48\text{ cm}$ to the left of $P_1$, which is:
  $$48 - 40 = 8\text{ cm to the left of } P_2$$
  * For the convex mirror, light arrives from right to left after reflection from $P_1$. Using coordinates referenced to $P_2$ where the incident direction is along the $-z$ axis, or reversing coordinates so incident light travels from left to right:
    $u_2 = -8\text{ cm}$, $R_2 = -20\text{ cm}$ (center of curvature on the side opposite to incidence).  
  Using the mirror equation:
  $$\frac{1}{v_2} + \frac{1}{u_2} = \frac{2}{R_2}$$
  $$\frac{1}{v_2} + \frac{1}{-8} = \frac{2}{-20} = -\frac{1}{10}$$
  $$\frac{1}{v_2} = \frac{1}{8} - \frac{1}{10} = \frac{5 - 4}{40} = +\frac{1}{40} \implies v_2 = +40\text{ cm}$$
  The final image is formed $40\text{ cm}$ behind the convex mirror (to its right), which coincides with the position of vertex $P_1$.

* **Practice Question:**  
  A concave mirror of focal length $f_1 = 30\text{ cm}$ and a second concave mirror of focal length $f_2 = 20\text{ cm}$ are mounted coaxially facing each other at a separation of $70\text{ cm}$. An object is placed midway between them ($35\text{ cm}$ from each). Locate the image formed after light reflects first from mirror 1 and then from mirror 2.

---

#### Section 4.7: Lateral Magnification and Thin Lens Combinations

---

##### Example 4.3: Two-Lens System

* **Original Question:**  
  A two-lens system consists of a thin converging lens of focal length $f_1 = +20\text{ cm}$ and a thin diverging lens of focal length $f_2 = -10\text{ cm}$ separated by $8\text{ cm}$. An object of height $1\text{ cm}$ is placed $40\text{ cm}$ in front of the converging lens. Calculate the position, size, and orientation of the final image.

* **Answer & Solution:**  
  **First lens ($f_1 = +20\text{ cm}$):**  
  * Object distance: $u_1 = -40\text{ cm}$.

  Applying the thin lens formula:
  $$\frac{1}{v_1} - \frac{1}{u_1} = \frac{1}{f_1} \implies \frac{1}{v_1} - \frac{1}{-40} = \frac{1}{20}$$
  $$\frac{1}{v_1} = \frac{1}{20} - \frac{1}{40} = \frac{1}{40} \implies v_1 = +40\text{ cm}$$
  Lateral magnification of the first lens:
  $$m_1 = \frac{v_1}{u_1} = \frac{+40}{-40} = -1.0$$
  The intermediate image is inverted, of height $y_1' = -1.0\text{ cm}$, and formed $40\text{ cm}$ to the right of lens 1.

  **Second lens ($f_2 = -10\text{ cm}$):**  
  The two lenses are separated by $d = 8\text{ cm}$. The intermediate image lies $40 - 8 = 32\text{ cm}$ to the right of lens 2, acting as a virtual object:
  * Object distance: $u_2 = +32\text{ cm}$.

  Applying the thin lens formula:
  $$\frac{1}{v_2} - \frac{1}{+32} = \frac{1}{-10}$$
  $$\frac{1}{v_2} = -\frac{1}{10} + \frac{1}{32} = \frac{-16 + 5}{160} = -\frac{11}{160}$$
  $$v_2 = -\frac{160}{11} \approx -14.55\text{ cm}$$
  The image is virtual, located approximately $14.55\text{ cm}$ to the left of the second lens.

  Lateral magnification of the second lens:
  $$m_2 = \frac{v_2}{u_2} = \frac{-160/11}{+32} = -\frac{5}{11} \approx -0.455$$

  **Total magnification and image size:**  
  $$m = m_1 \times m_2 = (-1.0) \times \left(-\frac{5}{11}\right) = +\frac{5}{11} \approx +0.455$$
  $$y' = m \cdot y = +0.455 \times 1.0\text{ cm} \approx +0.455\text{ cm}$$
  The final image is virtual, erect, with a height of approximately $0.455\text{ cm}$ ($1/2.2$ of the original size).

* **Practice Question:**  
  A converging lens of focal length $f_1 = +15\text{ cm}$ and a second converging lens of focal length $f_2 = +25\text{ cm}$ are separated by $10\text{ cm}$. An object of height $2.0\text{ cm}$ is placed $30\text{ cm}$ in front of the first lens. Calculate the final image position, overall magnification, and image height.
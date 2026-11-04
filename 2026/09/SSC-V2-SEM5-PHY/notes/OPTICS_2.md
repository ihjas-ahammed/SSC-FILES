### 1. Superposition of Sinusoidal Waves

#### 1.1 Superposition of Two Sinusoidal Waves of Equal Frequency
Consider two collinear sinusoidal disturbances of identical angular frequency $\omega$, propagating along the same axis with amplitudes $a_1, a_2$ and initial phase constants $\theta_1, \theta_2$:
$$x_1(t) = a_1 \cos(\omega t + \theta_1)$$
$$x_2(t) = a_2 \cos(\omega t + \theta_2)$$

According to the principle of superposition, the resultant displacement $x(t)$ is the algebraic sum of the individual displacements:
$$x(t) = x_1(t) + x_2(t) = a_1 \cos(\omega t + \theta_1) + a_2 \cos(\omega t + \theta_2)$$

This can be expressed in terms of a single resultant harmonic oscillation of amplitude $a$ and phase $\theta$:
$$x(t) = a \cos(\omega t + \theta)$$

Expanding the cosine terms and equating the coefficients of $\cos(\omega t)$ and $\sin(\omega t)$:
$$a \cos\theta = a_1 \cos\theta_1 + a_2 \cos\theta_2$$
$$a \sin\theta = a_1 \sin\theta_1 + a_2 \sin\theta_2$$

Squaring and adding these equations yields the resultant amplitude:
$$a = \left[ a_1^2 + a_2^2 + 2a_1 a_2 \cos(\theta_1 - \theta_2) \right]^{1/2}$$

The resultant phase $\theta$ satisfies:
$$\tan\theta = \frac{a_1 \sin\theta_1 + a_2 \sin\theta_2}{a_1 \cos\theta_1 + a_2 \cos\theta_2}$$
With $a > 0$, the signs of $\cos\theta$ and $\sin\theta$ uniquely define $\theta$ within $[0, 2\pi)$.

* **Constructive Interference:** When the phase difference is an integral multiple of $2\pi$:
  $$\theta_1 - \theta_2 = 2m\pi \quad (m = 0, \pm 1, \pm 2, \dots) \implies a = a_1 + a_2$$
* **Destructive Interference:** When the phase difference is an odd integral multiple of $\pi$:
  $$\theta_1 - \theta_2 = (2m + 1)\pi \quad (m = 0, \pm 1, \pm 2, \dots) \implies a = |a_1 - a_2|$$

As established in the analysis of standing waves on a stretched string, interference does not violate the principle of conservation of energy; energy is spatially redistributed from regions of destructive interference to regions of constructive interference.

#### 1.2 Extension to $n$ Sinusoidal Waves
For $n$ collinear harmonic displacements $x_j(t) = a_j \cos(\omega t + \theta_j)$ ($j = 1, 2, \dots, n$), the resultant displacement is:
$$x(t) = \sum_{j=1}^n x_j(t) = a \cos(\omega t + \theta)$$
where:
$$a \cos\theta = \sum_{j=1}^n a_j \cos\theta_j, \qquad a \sin\theta = \sum_{j=1}^n a_j \sin\theta_j$$

The graphical (phasor) method represents each component wave as a vector of magnitude $a_j$ inclined at an angle $\theta_j$ in the complex plane, reducing the determination of $a$ and $\theta$ to standard vector addition.

---

### 2. Two-Beam Interference by Division of Wavefront

#### 2.1 Wavefront Division and Amplitude Division Principles
Optical interference cannot be observed by superimposing light from two separate, independent sources because atomic radiative lifetimes are approximately $10^{-10}\text{ s}$. Each atom emits finite, independent wave trains with random initial phases, causing the relative phase difference to fluctuate billions of times per second. Because optical detectors and the human eye average intensities over timescales $\tau \gg 10^{-10}\text{ s}$, the interference term averages to zero:
$$\langle \cos\delta \rangle = 0 \implies I = I_1 + I_2$$

To maintain a deterministic phase relationship (mutual coherence), two techniques are used:
1. **Division of Wavefront:** A single primary wavefront is spatially sampled at two or more apertures (e.g., Young’s double pinhole/slit, Fresnel biprism, Fresnel two-mirror).
2. **Division of Amplitude:** A single wavefront is split into two or more components of lower amplitude via partial reflection and refraction at dielectric boundaries (e.g., thin dielectric films, Newton’s rings, Michelson interferometer).

#### 2.2 Conditions for Coherence
Two sources are coherent if they maintain a constant phase difference over the measurement duration. Consider two point sources radiating displacements:
$$y_1 = a \cos\omega t, \qquad y_2 = a \cos(\omega t + \phi)$$
The total field is:
$$y = y_1 + y_2 = 2a \cos\left(\frac{\phi}{2}\right) \cos\left(\omega t + \frac{\phi}{2}\right)$$
The corresponding optical intensity is:
$$I = 4I_0 \cos^2\left(\frac{\phi}{2}\right)$$
where $I_0$ is the intensity from an individual source. The time-averaged intensity over integration time $\tau$ is:
$$\langle I \rangle = \frac{1}{\tau} \int_{-\tau/2}^{+\tau/2} I(t)\,dt$$
* **Coherent sources:** $\phi$ is constant; stationary maxima ($4I_0$) and minima ($0$) are established.
* **Incoherent sources:** $\phi$ varies randomly on a timescale much shorter than $\tau$. Thus, $\langle \cos^2(\phi/2) \rangle = 1/2$, yielding an invariant uniform intensity:
  $$\langle I \rangle = 2I_0$$

#### 2.3 Double-Aperture (Young's) Interference Pattern
Let two point sources or narrow slits $S_1$ and $S_2$, separated by distance $d$, be derived from a common monochromatic point source of wavelength $\lambda$. An observation screen is situated parallel to the plane of the sources at a distance $D \gg d$.

For a point $P(x, y)$ on the screen:
$$S_1 = (0, d/2, -D), \qquad S_2 = (0, -d/2, -D), \qquad P = (x, y, 0)$$
The geometric path lengths are:
$$S_1 P = \left[ D^2 + \left(x - \frac{d}{2}\right)^2 + y^2 \right]^{1/2}, \qquad S_2 P = \left[ D^2 + \left(x + \frac{d}{2}\right)^2 + y^2 \right]^{1/2}$$
The optical path difference is $\Delta = S_2 P - S_1 P$. Subtracting the squares of the distances:
$$(S_2 P)^2 - (S_1 P)^2 = 2 x d$$
$$S_2 P - S_1 P = \frac{2 x d}{S_1 P + S_2 P}$$

Under the paraxial approximation ($D \gg d$ and $D \gg x, y$), $S_1 P + S_2 P \approx 2D$:
$$\Delta = \frac{x d}{D}$$

* **Bright Fringes (Intensity Maxima):** $\Delta = n\lambda \implies x_n = \frac{n \lambda D}{d} \quad (n = 0, \pm 1, \pm 2, \dots)$
* **Dark Fringes (Intensity Minima):** $\Delta = \left(n + \frac{1}{2}\right)\lambda \implies x_n = \left(n + \frac{1}{2}\right)\frac{\lambda D}{d}$
* **Fringe Width ($\beta$):** The distance between adjacent bright or dark bands:
  $$\beta = x_{n+1} - x_n = \frac{\lambda D}{d}$$

#### 2.4 Hyperbolic Nature of the Fringes
The locus of points in space satisfying $S_2 P - S_1 P = \Delta = \text{constant}$ is a hyperboloid of revolution with foci at $S_1$ and $S_2$. On a planar screen at $z = 0$:
$$\left[ \left(x + \frac{d}{2}\right)^2 + y^2 + D^2 \right]^{1/2} - \left[ \left(x - \frac{d}{2}\right)^2 + y^2 + D^2 \right]^{1/2} = \Delta$$
Squaring and rearranging algebraically gives:
$$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$$
where:
$$a^2 = \frac{\Delta^2}{d^2 - \Delta^2}\left[ D^2 + \frac{1}{4}(d^2 - \Delta^2) \right], \qquad b^2 = D^2 + \frac{1}{4}(d^2 - \Delta^2)$$
For regions close to the optical axis where $y^2 \ll D^2$, the hyperbola asymptotes to straight lines parallel to the $y$-axis.

#### 2.5 Intensity Distribution of Superposed Optical Waves
Let the scalar electric fields at $P$ be:
$$E_1 = E_{01} \cos\left(\frac{2\pi}{\lambda}S_1 P - \omega t\right), \qquad E_2 = E_{02} \cos\left(\frac{2\pi}{\lambda}S_2 P - \omega t\right)$$
Assuming identical polarization states, the net field is $E = E_1 + E_2$. The detected intensity is proportional to the time average of the squared electric field:
$$I = K \langle E^2 \rangle = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\delta$$
where the phase difference is:
$$\delta = \frac{2\pi}{\lambda}(S_2 P - S_1 P) = \frac{2\pi}{\lambda}\Delta$$
* **Extreme values:**
  $$I_{\max} = \left(\sqrt{I_1} + \sqrt{I_2}\right)^2 \quad \text{for } \delta = 2n\pi$$
  $$I_{\min} = \left(\sqrt{I_1} - \sqrt{I_2}\right)^2 \quad \text{for } \delta = (2n + 1)\pi$$
* When $I_1 = I_2 = I_0$:
  $$I = 4I_0 \cos^2\left(\frac{\delta}{2}\right)$$

#### 2.6 Fresnel’s Two-Mirror Arrangement
A primary slit source $S$ is placed parallel to the intersection line $M$ of two plane mirrors inclined at an angle $\theta \approx \pi$. Light reflects from both mirrors, generating two virtual, mutually coherent line sources $S_1$ and $S_2$. 

If $R$ is the distance from the intersection axis $M$ to $S$, the virtual sources lie on a circle of radius $R$ centered at $M$. The angular separation between $S_1$ and $S_2$ viewed from $M$ is $2\theta$, making the source separation:
$$d = S_1 S_2 = 2 R \theta$$
The fringes observed in the overlapping reflected beams have a fringe width:
$$\beta = \frac{\lambda D}{2 R \theta}$$
where $D$ is the perpendicular distance from the virtual source plane to the screen.

#### 2.7 Fresnel Biprism Arrangement
A biprism consists of two acute prisms joined at their bases, with small refracting angles $\alpha \ll 1$. Light from a single slit $S$ at distance $a$ from the prism undergoes refraction.

Each half of the prism deflects the incident beam by an angle $\delta_m \approx (n - 1)\alpha$, forming two virtual coherent sources $S_1$ and $S_2$ separated by:
$$d = 2 a (n - 1)\alpha$$
The fringes formed on a screen at total distance $D$ from the slit have a width:
$$\beta = \frac{\lambda D}{d} = \frac{\lambda D}{2a(n - 1)\alpha}$$

To determine $d$ without directly measuring $\alpha$, a convex lens of focal length $f$ is placed between the biprism and the eyepiece. If $D > 4f$, two conjugate lens positions produce sharp images of $S_1$ and $S_2$ on the crosswires, with image separations $d_1$ and $d_2$. By lens conjugate relationships:
$$d = \sqrt{d_1 d_2}$$

#### 2.8 Interference with Polychromatic (White) Light
With a polychromatic source, waves of different wavelengths do not interfere with each other because their optical frequencies are distinct. The total intensity is the sum of the independent monochromatic intensity distributions:
$$I_{\text{total}}(x) = \int I_0(\lambda) \left[1 + \cos\left(\frac{2\pi x d}{\lambda D}\right)\right] d\lambda$$
* At the geometric center ($x = 0$), the path difference is zero ($\Delta = 0$) for all spectral components; all wavelengths interfere constructively, producing a central white fringe.
* Moving away from the center, the fringe spacing $\beta(\lambda) \propto \lambda$ causes the fringes for different wavelengths to separate. The shortest visible wavelengths (violet) reach their first minimum closest to the center, leaving a reddish border, followed by alternating colored bands.
* For larger path differences ($\Delta \gg \lambda$), many wavelengths simultaneously satisfy constructive and destructive conditions across the visible spectrum, overlapping to form uniform white illumination.

#### 2.9 Displacement of Fringes by a Transparent Plate
Introducing a thin transparent plate of thickness $t$ and refractive index $n$ into the path of the beam from $S_1$ modifies the optical path length:
$$\Delta_{\text{opt}} = (S_1 P - t) + n t = S_1 P + (n - 1)t$$
The effective optical path difference becomes:
$$\Delta = S_2 P - [S_1 P + (n - 1)t] = (S_2 P - S_1 P) - (n - 1)t$$

The central zero-order fringe ($\Delta = 0$) shifts to a point $O'$ on the screen such that:
$$S_2 O' - S_1 O' = (n - 1)t$$
Substituting the paraxial relation $S_2 O' - S_1 O' \approx \frac{d}{D} OO'$:
$$\frac{d}{D} \Delta_{\text{shift}} = (n - 1)t \implies \Delta_{\text{shift}} = \frac{D(n - 1)t}{d}$$
In terms of fringe width $\beta = \frac{\lambda D}{d}$, the number of fringes shifted is:
$$N = \frac{\Delta_{\text{shift}}}{\beta} = \frac{(n - 1)t}{\lambda}$$

#### 2.10 Lloyd’s Mirror and Phase Change on Reflection
Light from an entrance slit $S_1$ reaches a screen directly and via grazing reflection from a flat mirror. The mirror forms an inverted virtual image $S_2$ coherent with $S_1$. 

The central fringe (zero geometric path difference, found where the screen touches the mirror boundary) is dark rather than bright. This demonstrates that reflection at an interface with an optically denser medium introduces an abrupt phase shift of $\pi$ radians (equivalent to an optical path difference of $\lambda/2$). Consequently, the interference conditions are reversed:
* **Minima:** $S_2 P - S_1 P = n\lambda \quad (n = 0, 1, 2, \dots)$
* **Maxima:** $S_2 P - S_1 P = \left(n + \frac{1}{2}\right)\lambda$

#### 2.11 Stokes' Relations via Optical Reversibility
Consider an incident plane wave of amplitude $a$ striking a planar interface between media with refractive indices $n_1$ and $n_2$. Let $r_1, t_1$ be the amplitude reflection and transmission coefficients for incidence from medium 1, and $r_2, t_2$ be the coefficients for incidence from medium 2.

* Primary reflection and transmission:
  $$a_{\text{refl}} = a r_1, \qquad a_{\text{trans}} = a t_1$$
* Applying the principle of time-reversal invariance (optical reversibility) in a non-absorbing medium, reversing the directions of the reflected and transmitted waves must reconstruct the original incident wave of amplitude $a$, while producing zero field along the reversed incident line:
  $$a r_1^2 + a t_1 t_2 = a \implies t_1 t_2 = 1 - r_1^2$$
  $$a r_1 t_1 + a t_1 r_2 = 0 \implies r_2 = -r_1$$

The condition $r_2 = -r_1$ confirms that if reflection at a boundary with an optically denser medium ($n_2 > n_1$) induces a phase change of $\pi$, reflection at a boundary with an optically rarer medium ($n_1 < n_2$) induces no phase change.

---

### 3. Interference by Division of Amplitude

#### 3.1 Optical Path Difference for a Plane-Parallel Dielectric Film (The Cosine Law)
Consider a plane wave incident at angle $\theta$ on a plane-parallel film of thickness $d$ and refractive index $n_2$, bounded by a medium of refractive index $n_1$. Let $\theta'$ be the angle of refraction ($n_1 \sin\theta = n_2 \sin\theta'$).

The wave reflected from the upper surface interferes with the wave reflected from the lower surface. The optical path difference between the two reflected components is:
$$\Delta = n_2(BD + DF) - n_1 BC$$
From the geometry of the refracted ray path:
$$BD = DF = \frac{d}{\cos\theta'}$$
The distance between the reflection points on the upper surface is:
$$BF = 2d \tan\theta'$$
The wavefront path segment in medium 1 is:
$$BC = BF \sin\theta = 2d \tan\theta' \sin\theta$$
Substituting Snell's law ($n_1 \sin\theta = n_2 \sin\theta'$):
$$n_1 BC = n_2 (2d \tan\theta' \sin\theta') = \frac{2 n_2 d \sin^2\theta'}{\cos\theta'}$$
Combining the terms:
$$\Delta = \frac{2 n_2 d}{\cos\theta'} - \frac{2 n_2 d \sin^2\theta'}{\cos\theta'} = \frac{2 n_2 d (1 - \sin^2\theta')}{\cos\theta'} = 2 n_2 d \cos\theta'$$

Including the intrinsic phase change of $\pi$ at the first interface (for $n_1 < n_2$ and $n_2 > n_3$):
* **Constructive Interference (Maxima):**
  $$2 n_2 d \cos\theta' = \left(m + \frac{1}{2}\right)\lambda \quad (m = 0, 1, 2, \dots)$$
* **Destructive Interference (Minima):**
  $$2 n_2 d \cos\theta' = m\lambda$$

If the refractive index of the intermediate film lies between the indices of the bounding media ($n_1 < n_2 < n_3$), reflections at both the upper and lower interfaces undergo a $\pi$ phase shift. The two phase shifts cancel, reversing the interference conditions:
* **Constructive Interference:** $2 n_2 d \cos\theta' = m\lambda$
* **Destructive Interference:** $2 n_2 d \cos\theta' = \left(m + \frac{1}{2}\right)\lambda$

#### 3.2 Anti-Reflection (Non-Reflecting) Coatings
Reflective losses at normal incidence across an interface between media of refractive indices $n_1$ and $n_2$ are given by the Fresnel reflection coefficient:
$$R = \left(\frac{n_1 - n_2}{n_1 + n_2}\right)^2$$
For an air-to-crown glass interface ($n_a = 1.0$, $n_g = 1.5$), $R \approx 4\%$.

To eliminate reflection at normal incidence ($\theta' = 0$), a thin dielectric coating of index $n_f$ and thickness $d$ is applied, chosen such that $n_a < n_f < n_g$. Since both reflections occur at interfaces with denser media, each undergoes a $\pi$ phase shift. 

1. **Destructive Phase Condition:** The round-trip path inside the coating must introduce an odd half-integral cycle phase difference:
   $$2 n_f d = \left(m + \frac{1}{2}\right)\lambda \implies d = \frac{(2m + 1)\lambda}{4 n_f}$$
   For the minimum practical thickness ($m = 0$):
   $$d = \frac{\lambda}{4 n_f}$$
2. **Equal Amplitude Condition:** For complete cancellation, the reflection coefficients at the two interfaces must match:
   $$r_1 = \frac{n_a - n_f}{n_a + n_f}, \qquad r_2 = \frac{n_f - n_g}{n_f + n_g}$$
   Equating $|r_1| = |r_2|$ gives:
   $$\frac{n_f - n_a}{n_f + n_a} \approx \frac{n_g - n_f}{n_g + n_f} \implies n_f = \sqrt{n_a n_g}$$

#### 3.3 Multiple-Beam Reflectivity of a Dielectric Layer
Accounting for all internal reflections using electromagnetic boundary conditions, the net reflectance $R$ of a non-absorbing dielectric film at normal incidence is:
$$R = \frac{r_1^2 + r_2^2 + 2r_1 r_2 \cos 2\delta}{1 + r_1^2 r_2^2 + 2r_1 r_2 \cos 2\delta}$$
where $\delta = \frac{2\pi}{\lambda} n_f d$.
* When $r_1 r_2 > 0$ ($n_a < n_f < n_g$), minimum reflectivity occurs at $\cos 2\delta = -1$, yielding:
  $$R_{\min} = \left(\frac{r_1 - r_2}{1 - r_1 r_2}\right)^2 = \left(\frac{n_a n_g - n_f^2}{n_a n_g + n_f^2}\right)^2$$
  If $n_f = \sqrt{n_a n_g}$, then $R_{\min} = 0$.
* When $n_f > n_g > n_a$, then $r_1 r_2 < 0$. The condition $\cos 2\delta = -1$ yields constructive interference, which maximizes reflectivity:
  $$R_{\max} = \left(\frac{|r_1| + |r_2|}{1 + |r_1 r_2|}\right)^2$$

#### 3.4 Periodic Dielectric Structures (Bragg Reflection)
A periodic medium formed by alternating dielectric layers of equal optical thickness $d$ and refractive indices $n_0 + \Delta n$ and $n_0 - \Delta n$ has a spatial period:
$$\Lambda = 2d$$
Constructive interference between reflections from successive periods occurs at normal incidence when the round-trip through one period equals the free-space Bragg wavelength $\lambda_B$:
$$\Lambda = 2d = \frac{\lambda_B}{2n_0} \implies \lambda_B = 2 n_0 \Lambda$$
This condition governs high-reflectivity dielectric mirrors and Fiber Bragg Gratings.

#### 3.5 Fringes of Equal Inclination (Haidinger Fringes)
When an extended, diffuse monochromatic source illuminates a plane-parallel film of uniform thickness $d$, light rays enter at various angles $\theta$. Because the thickness $d$ is constant across the entire film, the optical path difference:
$$\Delta = 2 n d \cos\theta'$$
depends solely on the inclination angle $\theta'$. 
* Rays reflected at a given angle $\theta'$ emerge as parallel rays and are focused by a lens (or the relaxed human eye) onto a circular ring in the focal plane.
* These concentric circular rings centered on the normal ($\theta' = 0$) are called **Haidinger fringes** or **fringes of equal inclination**.

#### 3.6 Fringes of Equal Thickness (Wedge-Shaped Films)
Consider two flat plates inclined at a small wedge angle $\alpha \ll 1$, enclosing a medium of index $n$. For light incident near-normally, the path difference at a distance $x$ from the apex is governed by the local film thickness $t(x) = x \alpha$:
$$\Delta(x) \approx 2 n t(x) = 2 n x \alpha$$

Including the $\pi$ phase shift at one interface:
* **Bright Fringes:** $2 n x \alpha = \left(m + \frac{1}{2}\right)\lambda$
* **Dark Fringes:** $2 n x \alpha = m\lambda$
* **Fringe Width:**
  $$\beta = x_{m+1} - x_m = \frac{\lambda}{2 n \alpha}$$
Because each fringe traces a locus of constant thickness $t$, these bands are called **fringes of equal thickness**. Unlike division-of-wavefront fringes, these fringes are localized on the surface of the film and require an imaging system focused on that surface to be resolved.

#### 3.7 Newton’s Rings
A plano-convex lens with a large radius of curvature $R$ resting on an optically flat glass plate creates an air film ($n = 1$) of radially varying thickness $t(r)$.

From the geometry of a sphere of radius $R$:
$$r^2 = t(2R - t) \approx 2Rt \implies t = \frac{r^2}{2R} \quad (\text{for } t \ll R)$$

The optical path difference in reflection, including the $\pi$ boundary phase shift, is:
$$\Delta = 2t + \frac{\lambda}{2} = \frac{r^2}{R} + \frac{\lambda}{2}$$
* **Dark Rings (Minima):**
  $$\frac{r_m^2}{R} + \frac{\lambda}{2} = \left(m + \frac{1}{2}\right)\lambda \implies r_m^2 = m \lambda R \quad (m = 0, 1, 2, \dots)$$
* **Bright Rings (Maxima):**
  $$\frac{r_m^2}{R} + \frac{\lambda}{2} = m\lambda \implies r_m^2 = \left(m - \frac{1}{2}\right)\lambda R \quad (m = 1, 2, \dots)$$
* At the point of contact ($r = 0, t = 0$), $\Delta = \lambda/2$; the center of the reflected pattern is therefore dark.

Measuring the diameters $D_m = 2r_m$ avoids uncertainty in locating the exact point of contact:
$$D_{m+p}^2 - D_m^2 = 4(m + p)\lambda R - 4m\lambda R = 4 p \lambda R$$
$$\lambda = \frac{D_{m+p}^2 - D_m^2}{4 p R}$$
If an intermediate liquid of refractive index $n_{\text{liq}}$ fills the gap:
$$r_m = \sqrt{\frac{m \lambda R}{n_{\text{liq}}}}$$

#### 3.8 The Michelson Interferometer
An incident beam from an extended source is split into two mutually coherent beams by a beam splitter $G_1$ inclined at $45^\circ$. 
* The reflected component travels to plane mirror $M_1$, reflects back, and transmits through $G_1$.
* The transmitted component travels to plane mirror $M_2$, reflects back, and reflects from the back surface of $G_1$ into the detector.
* An identical uncoated compensating plate $G_2$ is placed in the arm of $M_2$ parallel to $G_1$. This ensures that both optical paths traverse the same thickness of dispersive glass, which is necessary when using broadband or white-light sources.

The virtual image of $M_2$ formed by $G_1$ is $M_2'$, parallel to $M_1$ and separated from it by an effective air film thickness $d = |x_1 - x_2|$. For rays inclined at an angle $\theta$ to the normal:
$$2 d \cos\theta = m\lambda$$
Circular fringes of equal inclination form at infinity.
* **Wavelength Measurement:** As mirror $M_1$ is translated by a distance $d_0$, fringes collapse toward or emerge from the center. If $N$ fringes cross the field of view:
  $$2 d_0 = N\lambda \implies \lambda = \frac{2d_0}{N}$$
* **Wavelength Doublet Separation:** If the source contains two closely spaced spectral lines $\lambda_1$ and $\lambda_2$ ($\lambda_1 \approx \lambda_2 \approx \lambda$, with $\Delta\lambda = |\lambda_1 - \lambda_2|$), the fringe patterns periodically move into and out of step. The fringes disappear when the maxima of $\lambda_1$ coincide with the minima of $\lambda_2$:
  $$2d\left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right) = \frac{1}{2}$$
  Successive positions of minimum fringe contrast occur when the mirror travels a distance $\Delta d$ satisfying:
  $$2\Delta d \left(\frac{\Delta\lambda}{\lambda^2}\right) = 1 \implies \Delta\lambda = \frac{\lambda^2}{2\Delta d}$$
* **Coherence Length:** For a continuous spectral line of width $\Delta\lambda$, the fringes permanently lose visibility when the optical path difference exceeds the temporal coherence length $L_c$:
  $$2d \gtrsim L_c \approx \frac{\lambda^2}{\Delta\lambda}$$
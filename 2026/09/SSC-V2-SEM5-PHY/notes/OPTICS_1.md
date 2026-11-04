### 1. Fermat’s Principle and Geometrical Optics

#### 1.1 The Concept of a Light Ray and Geometrical Optics
In the wave description of light, an aperture with dimensions on the order of the optical wavelength ($\lambda \sim 10^{-5}\text{ cm}$) produces diffraction patterns lacking sharp geometric boundaries. In the zero-wavelength limit ($\lambda \to 0$), diffraction effects vanish. Light propagation can then be treated via infinitesimally narrow trajectories along which optical energy is transported; these trajectories are defined as **light rays**. The branch of optics operating under this approximation is **geometrical optics**.

---

#### 1.2 Fermat’s Principle of Stationary Optical Path
Let $n(x, y, z)$ be the position-dependent refractive index of an optical medium, and let $c$ represent the speed of light in vacuum. The time $d\tau$ required for light to traverse an infinitesimal geometric element of arc length $ds$ is:
$$d\tau = \frac{ds}{v} = \frac{n\, ds}{c}$$

For a path $C$ connecting points $A$ and $B$, the total transit time $\tau$ is:
$$\tau = \frac{1}{c}\int_{A(C)}^B n\, ds$$

The **optical path length** ($L_{\text{op}}$) between $A$ and $B$ along curve $C$ is defined as:
$$L_{\text{op}} = \int_{A(C)}^B n\, ds$$

**Fermat’s Principle:** The actual trajectory followed by a light ray connecting two fixed points $A$ and $B$ is a path along which the optical path length is stationary (an extremum: minimum, maximum, or point of inflection) with respect to arbitrary infinitesimal variations of the path:
$$\delta \int_A^B n\, ds = 0$$

* In a homogeneous medium where $n$ is constant, optical path minimization reduces to geometric distance minimization. The shortest distance between two points in Euclidean space is a straight line; hence, light rays travel in straight lines in homogeneous media.

---

#### 1.3 Derivation of the Laws of Reflection and Refraction

##### 1.3.1 Law of Reflection
Consider two points $A$ and $B$ on one side of a planar reflecting boundary $MN$. Light travels from $A$ to an arbitrary reflection point $P$ on the mirror, and then to $B$:
* Reflect point $A$ across the plane of the mirror to construct an image point $A'$. By symmetry, the distance $AP = A'P$, so the total distance is $AP + PB = A'P + PB$.
* The sum $A'P + PB$ is minimized when points $A'$, $P$, and $B$ are collinear. 
* Collinearity requires that the incident ray $AP$, the normal $PS$ to the interface at $P$, and the reflected ray $PB$ lie within the same plane (the plane of incidence).
* From the equality of vertical and corresponding angles:
  $$\angle APS = \angle SPB \implies i = r$$
  The angle of incidence equals the angle of reflection.

##### 1.3.2 Law of Refraction (Snell’s Law)
Let a planar interface $PQ$ separate two homogeneous media of refractive indices $n_1$ and $n_2$. Consider a ray travelling from point $A$ in medium 1 to point $B$ in medium 2, crossing the interface at point $R$:
* Let perpendiculars dropped from $A$ and $B$ to the interface have lengths $AM = h_1$ and $BN = h_2$.
* Let the total lateral separation between $M$ and $N$ be $L$, and let the lateral position of $R$ be $MR = x$, giving $RN = L - x$.
* The optical path length is:
  $$L_{\text{op}} = n_1 \sqrt{x^2 + h_1^2} + n_2 \sqrt{(L - x)^2 + h_2^2}$$

Applying Fermat's condition ($\frac{dL_{\text{op}}}{dx} = 0$):
$$\frac{dL_{\text{op}}}{dx} = \frac{n_1 x}{\sqrt{x^2 + h_1^2}} - \frac{n_2 (L - x)}{\sqrt{(L - x)^2 + h_2^2}} = 0$$

Since $\sin\theta_1 = \frac{x}{\sqrt{x^2 + h_1^2}}$ and $\sin\theta_2 = \frac{L - x}{\sqrt{(L - x)^2 + h_2^2}}$:
$$n_1 \sin\theta_1 = n_2 \sin\theta_2$$
Furthermore, Fermat's principle requires the incident ray, the refracted ray, and the normal to lie in the same plane.

---

#### 1.4 Ray Paths in Inhomogeneous Media
When the refractive index varies continuously as a function of position, $n = n(\mathbf{r})$, light rays follow curved trajectories governed by the differential ray equation:
$$\frac{d}{ds}\left(n \frac{d\mathbf{r}}{ds}\right) = \nabla n$$

* If the refractive index varies along a single transverse coordinate (e.g., $n = n(x)$), Snell's law generalizes to $n(x)\cos\theta(x) = \tilde{\beta} = \text{constant}$, where $\theta$ is the local angle relative to the stratification plane. This curvature accounts for phenomena such as mirages, atmospheric looming, and ionospheric radio reflections.
* For a parabolic-index medium $n^2(x) = n_1^2 - \gamma^2 x^2$, the trajectories within the paraxial approximation are harmonic (sinusoidal):
  $$x(z) = \pm x_0 \sin(\Gamma z)$$
  where all paraxial rays possess the same spatial period $z_p = 2\pi/\Gamma$, meaning all rays launched from a point refocus simultaneously regardless of launch angle.

---

### 2. Refraction and Reflection by Spherical Surfaces

#### 2.1 Refraction at a Single Spherical Surface
Consider a spherical interface $SPM$ of radius of curvature $r$ separating media of refractive indices $n_1$ and $n_2$. The center of curvature is $C$, and the optical axis passes through $C$ and the vertex (pole) $P$.

A point object $O$ lies on the axis at distance $x = OP$. A ray leaving $O$ strikes the surface at height $h$ at point $S$ and refracts to meet the axis at image point $I$ at distance $y = IP$:
* Exterior angle relations for triangles $\triangle OSC$ and $\triangle SCI$ yield:
  $$\theta_1 = \beta + \alpha_1, \quad \theta_2 = \beta - \alpha_2$$
* In the **paraxial approximation**, ray angles $\theta_1, \theta_2, \alpha_1, \alpha_2, \beta$ are small ($\sin\theta \approx \tan\theta \approx \theta$):
  $$\theta_1 \approx \frac{h}{r} + \frac{h}{x}, \quad \theta_2 \approx \frac{h}{r} - \frac{h}{y}$$
* Substituting these into paraxial Snell's law ($n_1 \theta_1 \approx n_2 \theta_2$):
  $$n_1 \left(\frac{h}{r} + \frac{h}{x}\right) = n_2 \left(\frac{h}{r} - \frac{h}{y}\right) \implies \frac{n_2}{y} + \frac{n_1}{x} = \frac{n_2 - n_1}{r}$$

---

#### 2.2 Sign Convention
1. Light rays are incident from the left toward the right.
2. The vertex (pole) $P$ of the refracting or reflecting surface is chosen as the origin.
3. Distances along the axis measured to the right of $P$ are **positive**; distances measured to the left of $P$ are **negative**.
4. Transverse distances measured upward perpendicular to the axis are **positive**; downward measurements are **negative**.
5. Ray slope angles relative to the axis are positive if an anticlockwise rotation carries the axis into alignment with the ray.

---

#### 2.3 The Gaussian Formula for a Single Spherical Surface
Under this coordinate convention, with the object located to the left of the vertex ($u = -x$), the image formed to the right ($v = +y$), and the center of curvature to the right ($R = +r$), the refraction equation becomes:
$$\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$$

This expression matches the stationary optical path condition $\delta L_{\text{op}} = 0$ derived directly from Fermat's principle for a spherical boundary.

* **Meridional vs. Skew Rays:** Rays confined to a single plane containing the optical axis are called *meridional rays*. Off-axis rays that do not intersect the optical axis are known as *skew rays*.

---

#### 2.4 Reflection by a Single Spherical Surface
For a concave spherical mirror of radius $r$, the geometric angles satisfy $\alpha_1 + \alpha_2 = 2\beta$, leading to:
$$\frac{1}{x} + \frac{1}{y} = \frac{2}{r}$$

Applying the standard coordinate sign convention ($u = -x$, $v = -y$, $R = -r$):
$$\frac{1}{u} + \frac{1}{v} = \frac{2}{R}$$

This equation is mathematically equivalent to the single-surface refraction formula upon setting $n_2 = -n_1$.

---

### 3. Thin Lenses

#### 3.1 The Lens Maker's Formula
A lens consists of a transparent medium of refractive index $n_2$ bounded by two spherical surfaces of radii $R_1$ and $R_2$, immersed in an ambient medium of refractive index $n_1$. For a *thin lens*, the axial thickness $t$ is negligible relative to $R_1, R_2, u,$ and $v$.

Applying the single-surface refraction formula successively across both interfaces:
* **First surface ($R_1$):** Refracts light from object distance $u$ to form an intermediate image at $v'$:
  $$\frac{n_2}{v'} - \frac{n_1}{u} = \frac{n_2 - n_1}{R_1}$$
* **Second surface ($R_2$):** The intermediate image acts as the object ($u_2 = v'$):
  $$\frac{n_1}{v} - \frac{n_2}{v'} = \frac{n_1 - n_2}{R_2}$$

Adding both relations eliminates the intermediate distance $v'$:
$$\frac{n_1}{v} - \frac{n_1}{u} = (n_2 - n_1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

Defining the relative refractive index $n = n_2 / n_1$:
$$\frac{1}{v} - \frac{1}{u} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) = \frac{1}{f}$$

This yields the **thin lens formula**:
$$\frac{1}{v} - \frac{1}{u} = \frac{1}{f}$$
where the focal length $f$ is given by:
$$\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

---

#### 3.2 Lenses with Different Surrounding Media
If the medium preceding the lens has refractive index $n_1$ and the medium succeeding the lens has refractive index $n_3$:
$$\frac{n_3}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R_1} + \frac{n_3 - n_2}{R_2}$$

* **First principal focal length ($f_1$):** Set $v \to \infty$:
  $$\frac{1}{f_1} = \frac{1}{n_1}\left[\frac{n_2 - n_1}{R_1} + \frac{n_3 - n_2}{R_2}\right]$$
* **Second principal focal length ($f_2$):** Set $u \to -\infty$:
  $$\frac{1}{f_2} = \frac{1}{n_3}\left[\frac{n_2 - n_1}{R_1} + \frac{n_3 - n_2}{R_2}\right]$$

Consequently:
$$\frac{f_1}{f_2} = -\frac{n_1}{n_3}$$
When identical media surround the lens ($n_1 = n_3$), $f_2 = -f_1 = f$.

---

#### 3.3 The Newtonian Lens Formula
Let object position be referenced to the first focal point $F_1$ by displacement $x_1$, and image position referenced to the second focal point $F_2$ by displacement $x_2$. From similar geometric triangles:
$$\frac{y'}{y} = -\frac{f_1}{x_1} = -\frac{x_2}{f_2}$$
Multiplying these expressions produces the **Newtonian lens formula**:
$$x_1 x_2 = f_1 f_2$$

For a lens in symmetric surroundings ($f_2 = -f_1 = f$):
$$x_1 x_2 = -f^2$$
This relation dictates that $x_1$ and $x_2$ have opposite algebraic signs: an object placed outside the first focal point ($x_1 < 0$) produces an image located beyond the second focal point ($x_2 > 0$).

---

#### 3.4 Lateral Magnification
The lateral (transverse) magnification $m$ is defined as the ratio of image height $y'$ to object height $y$:
* **Single spherical refracting surface:**
  $$m = \frac{y'}{y} = \frac{n_1 v}{n_2 u}$$
* **Thin lens:**
  Magnification is the product of successive surface magnifications ($m = m_1 m_2$):
  $$m = \left(\frac{n_1 v'}{n_2 u}\right)\left(\frac{n_2 v}{n_1 v'}\right) = \frac{v}{u} = -\frac{f_1}{x_1} = -\frac{x_2}{f_2}$$
  A positive magnification corresponds to an erect image, whereas a negative magnification corresponds to an inverted image.

---

### 4. Spherical Aberration and Aplanatic Points

#### 4.1 Spherical Aberration
The Gaussian imaging formulas are restricted to paraxial rays making small angles with the axis. Rays incident at larger heights (marginal rays) refract through different angles and intersect the optical axis at varying axial positions. The inability of a spherical interface to focus all incident rays from a single point object to a single image point is known as **spherical aberration**.

#### 4.2 Aplanatic Points of a Sphere
Despite the presence of spherical aberration for generic conjugates, every spherical refracting interface of radius $r$ possesses two unique conjugate axial positions—the **aplanatic points**—for which all rays, including non-paraxial rays of arbitrary aperture, form a stigmatic image free of spherical aberration.

From Fermat's principle, an exact virtual focus requires equal optical path lengths along all rays connecting the object $O$, surface point $S$, and virtual image $I$:
$$n_1 (OS) - n_2 (SI) = 0$$

This geometric condition defines a sphere whose conjugate distances from the center of curvature $C$ satisfy:
$$d_1 = OC = \frac{n_2}{n_1} r, \quad d_2 = IC = \frac{n_1}{n_2} r$$
which leads to the invariant relation:
$$n_1^2 d_1 = n_2^2 d_2 = n_1 n_2 r$$

Because rays emanating from $O$ appear to diverge cleanly from $I$ across the entire aperture, aplanatic spherical surfaces are utilized in high-numerical-aperture optical systems, such as oil-immersion microscope objectives.
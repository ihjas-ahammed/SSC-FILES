# Optics Gap Report: Textbook vs App Content

**Course**: B.Sc. Physics Honours, Semester V (CU-FYUGP), *Optics*  
**Syllabus**: `SSC-V2/SEM5/PHY/OPTICS.pdf`  
**Prescribed Textbooks**:
1. **Book 1**: Ajoy Ghatak, *Optics*, 6th Edition (`SSC-V2/SEM5/PHY/books/Optics by Ghatak.pdf`).
2. **Book 2**: N. Subrahmanyam, Brij Lal & M.N. Avadhanulu, *A Text Book of Optics*, 2018 Edition (unavailable; Module IV mapped to Ghatak 6e Ch 22 & 24.5).

---

## 1. Unit-by-Unit Coverage Assessment

### Module I: Fermat's Principle (Syllabus Units 1–4)
*Prescribed Sections*: Ghatak 6e Sec 3.1, 3.2, 4.1–4.7.

| Unit | Syllabus Prescription & Textbook Sections | What the Textbook Teaches | App Content (`m1.concepts.py`, etc.) | Status |
|---|---|---|---|---|
| **Unit 1** | **Sec 3.1, 3.2**: Laws of reflection and refraction from Fermat's Principle | • Optical path definition $\int n\,ds$<br>• Fermat's principle of stationary optical path ($\delta L = 0$)<br>• Laws of reflection at a plane mirror ($i = r$, coplanarity)<br>• Snell's law of refraction ($n_1\sin i = n_2\sin r$, coplanarity)<br>• Equal optical paths for aplanatic imaging (paraboloid, ellipsoid) | `c.1.1.1` (Optical Path & Fermat's Principle)<br>`c.1.1.2` (Law of Reflection from Fermat's Principle)<br>`c.1.1.3` (Snell's Law from Fermat's Principle)<br>`c.1.1.4` (Equal Optical Path & Perfect Imaging) | **COVERED** |
| **Unit 2** | **Sec 4.1, 4.2, 4.3**: Refraction and reflection at a single Spherical surface | • Cartesian sign convention (vertex at origin, $+z$ along incident light)<br>• Paraxial approximation ($\sin\theta \approx \tan\theta \approx \theta$)<br>• Gaussian formula: $\frac{n_2}{v} - \frac{n_1}{u} = \frac{n_2 - n_1}{R}$<br>• First and second principal foci: $f_1 = -\frac{n_1 R}{n_2 - n_1}$, $f_2 = \frac{n_2 R}{n_2 - n_1}$<br>• Spherical mirror formula: $\frac{1}{v} + \frac{1}{u} = \frac{2}{R} = \frac{1}{f}$ via $n_2 = -n_1$<br>• Lateral magnification: $m = \frac{h_2}{h_1} = \frac{n_1 v}{n_2 u}$ | `c.1.2.1` (Sign Convention & Paraxial Approx)<br>`c.1.2.2` (Refraction at Single Spherical Surface)<br>`c.1.2.3` (Principal Foci & Focal Lengths of Surface)<br>`c.1.2.4` (Reflection at Spherical Mirror)<br>`c.1.2.5` (Lateral Magnification at Single Surface) | **COVERED** |
| **Unit 3** | **Sec 4.4, 4.5**: The thin lens, Principal foci and focal length | • Successive refraction at two spherical surfaces<br>• Thin-lens formula: $\frac{1}{v} - \frac{1}{u} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) = \frac{1}{f}$<br>• Principal foci ($F_1, F_2$) and focal lengths ($f_1 = -f$, $f_2 = f$ in air)<br>• Two thin lenses separated by distance $d$: $\frac{1}{f} = \frac{1}{f_1} + \frac{1}{f_2} - \frac{d}{f_1 f_2}$<br>• Ray construction rules | `c.1.3.1` (Thin-Lens Formula & Lens-Maker's Equation)<br>`c.1.3.2` (Principal Foci & Focal Length of Thin Lens)<br>`c.1.3.3` (Two Thin Lenses Separated by Distance)<br>`c.1.3.4` (Locating Image by Ray Construction) | **COVERED** |
| **Unit 4** | **Sec 4.6, 4.7**: The Newton formula, lateral magnification | • Newton's relation: $x x' = f_1 f_2$ ($x x' = f^2$ for lens in same medium)<br>• Lateral magnification of thin lens: $m = \frac{v}{u} = -\frac{f_1}{x} = -\frac{x'}{f_2}$<br>• Longitudinal magnification: $m_L = \frac{dv}{du} = m^2$ | `c.1.4.1` (Newton's Formula)<br>`c.1.4.2` (Lateral Magnification of Thin Lens)<br>`c.1.4.3` (Longitudinal Magnification) | **COVERED** |

---

### Module II: Interference (Syllabus Units 5–11)
*Prescribed Sections*: Ghatak 6e Sec 13.5 (13.6, 13.7), 14.1, 14.3–14.12, 15.1–15.4, 15.8–15.11.

| Unit | Syllabus Prescription & Textbook Sections | What the Textbook Teaches | App Content (`m2.concepts.py`, etc.) | Status |
|---|---|---|---|---|
| **Unit 5** | **Sec 13.5 (13.6, 13.7)**: Superpositions of two sinusoidal waves | • Superposition of two waves: $A^2 = a_1^2 + a_2^2 + 2a_1 a_2 \cos\delta$, $\tan\theta = \frac{a_2\sin\delta}{a_1 + a_2\cos\delta}$<br>• Constructive ($\delta = 2m\pi$) and destructive ($\delta = (2m+1)\pi$) conditions<br>• Fringe visibility $V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = \frac{2a_1 a_2}{a_1^2 + a_2^2}$<br>• Graphical phasor method and complex representation | `c.2.1.1` (Superposition of Two Sinusoidal Waves)<br>`c.2.1.2` (Constructive, Destructive Interference & Visibility)<br>`c.2.1.3` (Superposition of N Waves: Phasor Method) | **COVERED** |
| **Unit 6** | **Sec 14.1, 14.3**: Interference division of wavefront introduction | • Concept of interference and conservation of energy<br>• Temporal and spatial coherence; coherence length $l_c = c\tau_c = \frac{\lambda^2}{\Delta\lambda}$<br>• Two methods of producing interference: wavefront division vs amplitude division | `c.2.2.1` (Coherence & Two Ways of Splitting a Beam)<br>`c.2.2.2` (Temporal and Spatial Coherence; Coherence Length) | **COVERED** |
| **Unit 7** | **Sec 14.4, 14.5, 14.6**: Interference of light waves | • Young's double-slit experiment geometry<br>• Path difference $\Delta = \frac{yd}{D}$, phase difference $\delta = \frac{2\pi}{\lambda}\frac{yd}{D}$<br>• Fringe width $\beta = \frac{\lambda D}{d}$<br>• Intensity distribution $I = 4I_0 \cos^2(\delta/2)$<br>• Hyperbolic nature of fringes in space (hyperboloids of revolution) | `c.2.3.1` (Young's Double-Slit: Fringe Positions & Width)<br>`c.2.3.2` (Intensity Distribution in Young's Pattern)<br>`c.2.3.3` (Hyperbolic Nature of Fringes) | **COVERED** |
| **Unit 8** | **Sec 14.7, 14.8**: Fresnel’s two mirror and Fresnel’s Biprism | • Fresnel two-mirror virtual source separation $d = 2b\theta$<br>• Fresnel biprism deviation $\delta_d = (\mu - 1)\alpha$, virtual source separation $d = 2d_1(\mu - 1)\alpha$<br>• Determination of wavelength $\lambda = \frac{\beta d}{D}$<br>• Determination of $d$ by lens displacement method $d = \sqrt{d_1 d_2}$ | `c.2.4.1` (Fresnel's Two-Mirror Arrangement)<br>`c.2.4.2` (Fresnel's Biprism) | **COVERED** |
| **Unit 9** | **Sec 14.9, 14.10, 14.11, 14.12**: Interference with white light, Lloyd’s mirror, Phase change on reflection | • White light interference: central achromatic white fringe, coloured lateral fringes<br>• Fringe shift due to transparent sheet of thickness $t$: $\Delta y = \frac{(\mu - 1)t D}{d}$<br>• Lloyd's mirror: virtual source by grazing reflection, central fringe is dark (unrealized or edge)<br>• Stokes' relations: $r' = -r$, $t t' = 1 - r^2$; phase change of $\pi$ upon reflection from denser medium | `c.2.3.4` (Displacement of Fringes by Transparent Plate)<br>`c.2.5.1` (Interference with White Light)<br>`c.2.5.2` (Lloyd's Mirror)<br>`c.2.5.3` (Stokes' Relations & Phase Change on Reflection) | **COVERED** |
| **Unit 10** | **Sec 15.1, 15.2, 15.3, 15.4**: Interference by division of amplitude - Non reflecting films | • Division of amplitude at plane dielectric boundaries<br>• Cosine law for optical path difference: $\Delta = 2\mu d \cos r$<br>• Net path difference with Stokes $\pi$-phase shift: $\Delta_{\text{net}} = 2\mu d \cos r \pm \frac{\lambda}{2}$<br>• Reflected maxima/minima conditions<br>• Anti-reflection coating: $n_f = \sqrt{n_a n_g}$, thickness $d = \frac{\lambda_0}{4n_f}$<br>• Multiple beam reflection and Airy formula | `c.2.6.1` (Thin Parallel Film: Cosine Law)<br>`c.2.6.2` (Non-Reflecting Coatings)<br>`c.2.6.3` (Multiple-Beam Reflectivity of Dielectric Layer) | **COVERED** |
| **Unit 11** | **Sec 15.8, 15.9, 15.10, 15.11**: Colours of thin films, Newton’s rings, Michelson interferometer | • Wedge-shaped film: fringes of equal thickness, fringe width $\beta = \frac{\lambda}{2\mu\theta}$<br>• Colours of thin films due to wavelength selectivity in $2\mu d \cos r = (m \pm \frac{1}{2})\lambda$<br>• Newton's rings: air film between plano-convex lens ($R$) and glass plate; dark ring radii $r_m = \sqrt{m\lambda R}$, bright ring radii $r_m = \sqrt{(m + \frac{1}{2})\lambda R}$; determination of $\lambda$ and liquid $\mu$<br>• Michelson interferometer: circular fringes (equal inclination) and straight localized fringes; measurement of wavelength $\Delta d = m\frac{\lambda}{2}$ and doublet $\Delta\lambda = \frac{\lambda^2}{2\Delta d}$ | `c.2.7.1` (Wedge-Shaped Film: Fringes of Equal Thickness)<br>`c.2.7.2` (Colours of Thin Films)<br>`c.2.7.3` (Newton's Rings)<br>`c.2.7.4` (Michelson Interferometer)<br>`c.2.7.5` (Fringes of Equal Inclination & Equal Thickness) | **COVERED** |

---

### Module III: Diffraction (Syllabus Units 12–16)
*Prescribed Sections*: Ghatak 6e Sec 18.1, 18.2, 18.6–18.8, 20.1–20.3, 20.6.

| Unit | Syllabus Prescription & Textbook Sections | What the Textbook Teaches | App Content (`m3.concepts.py`, etc.) | Status |
|---|---|---|---|---|
| **Unit 12** | **Sec 18.1, 18.2**: Single-Slit Fraunhofer diffraction pattern | • Fresnel vs Fraunhofer diffraction ($N_F = a^2/(\lambda L)$)<br>• Single-slit integral: $I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2$ with $\beta = \frac{\pi b \sin\theta}{\lambda}$<br>• Minima at $b\sin\theta = m\lambda$ ($m = \pm 1, \pm 2, \dots$)<br>• Secondary maxima condition $\tan\beta = \beta$ ($\beta \approx 1.43\pi, 2.46\pi$)<br>• Peak intensity ratios: $1 : 0.0472 : 0.0165$ | `c.3.1.1` (Huygens–Fresnel, Fresnel & Fraunhofer Types)<br>`c.3.1.2` (Single-Slit Fraunhofer Pattern)<br>`c.3.1.3` (Secondary Maxima of Single Slit) | **COVERED** |
| **Unit 13** | **Sec 18.6**: Two Slit Fraunhofer diffraction pattern | • Two-slit intensity: $I(\theta) = 4I_0 \left(\frac{\sin\beta}{\beta}\right)^2 \cos^2\gamma$, $\gamma = \frac{\pi d\sin\theta}{\lambda}$<br>• Modulation of double-slit interference fringes by single-slit diffraction envelope<br>• Missing orders: $\frac{d}{b} = \frac{m}{p}$ when interference maximum coincides with diffraction zero | `c.3.2.1` (Two-Slit Fraunhofer Pattern & Missing Orders) | **COVERED** |
| **Unit 14** | **Sec 18.7, 18.8**: N Slit Fraunhofer diffraction pattern and Grating | • N-slit intensity: $I = I_0 \left(\frac{\sin\beta}{\beta}\right)^2 \left(\frac{\sin N\gamma}{\sin\gamma}\right)^2$<br>• Principal maxima ($d\sin\theta = m\lambda$), $N-1$ minima, $N-2$ secondary maxima<br>• Grating equation: $(a+b)\sin\theta = m\lambda$<br>• Angular dispersion: $\frac{d\theta}{d\lambda} = \frac{m}{(a+b)\cos\theta}$<br>• Rayleigh criterion and resolving power: $R = \frac{\lambda}{\Delta\lambda} = mN$ | `c.3.3.1` (N-Slit Fraunhofer Pattern)<br>`c.3.3.2` (Diffraction Grating: Equation & Dispersion)<br>`c.3.3.3` (Resolving Power of a Grating) | **COVERED** |
| **Unit 15** | **Sec 20.1, 20.2, 20.3**: Fresnel diffraction – Zone plate | • Fresnel half-period zones on spherical/plane wavefront<br>• Zone radii $r_m = \sqrt{m\lambda d}$, constant zone area $\approx \pi\lambda d$<br>• Phase alternation, resultant unobstructed amplitude $u = u_1/2$<br>• Zone plate construction (blocking alternate zones)<br>• Multiple foci: $f_m = \frac{r_1^2}{m\lambda}$ ($m$ odd)<br>• Comparison with convex lens | `c.3.4.1` (Fresnel Half-Period Zones)<br>`c.3.4.2` (Zone Construction, Discs & Poisson's Spot)<br>`c.3.4.3` (The Zone Plate) | **COVERED** |
| **Unit 16** | **Sec 20.6**: Diffraction by straight edge | • Fresnel integrals: $C(v) = \int_0^v \cos(\frac{\pi}{2}u^2)du$, $S(v) = \int_0^v \sin(\frac{\pi}{2}u^2)du$<br>• Geometry and properties of the Cornu spiral<br>• Straight edge intensity distribution: intensity at geometric edge $I = I_0/4$<br>• Alternating maxima and minima in illuminated region, monotonic exponential-like decay into geometric shadow | `c.3.5.1` (Fresnel Integrals & Cornu Spiral)<br>`c.3.5.2` (Straight-Edge Pattern: Maxima, Minima & Shadow) | **COVERED** |

---

### Module IV: Polarisation (Syllabus Units 17–22)
*Prescribed Sections*: Book 2 Sec 20.1–20.4, 20.5, 20.6.2–20.6.3, 20.8.3, 20.9.1, 20.17–20.20.  
*Mapped to Ghatak 6e*: Chapters 22 and 24.5.

| Unit | Syllabus Prescription & Textbook Sections | What the Textbook Teaches | App Content (`m4.concepts.py`, etc.) | Status |
|---|---|---|---|---|
| **Unit 17** | **Book 2 Sec 20.1–20.4 / Ghatak Sec 22.1, 22.4**: Polarisation Introduction | • Transverse wave nature; electric field vector $\mathbf{E}$<br>• States of polarisation: unpolarised, linearly polarised, circularly polarised, elliptically polarised<br>• Superposition of two mutually perpendicular vibrations: general equation of polarisation ellipse $\frac{x^2}{a_1^2} + \frac{y^2}{a_2^2} - \frac{2xy}{a_1 a_2}\cos\delta = \sin^2\delta$ | `c.4.1.1` (Polarisation: Transverse Waves & States)<br>`c.4.1.2` (Superposition of Two Perpendicular Vibrations: Polarisation Ellipse) | **COVERED** |
| **Unit 18** | **Book 2 Sec 20.5, 20.6.2–20.6.3 / Ghatak Sec 22.3, 24.5**: Production of linearly polarised light | • Polarization by reflection and Brewster's law $\tan i_p = \mu$<br>• Pile of plates<br>• Dichroism (selective absorption in tourmaline, Polaroid)<br>• Scattering (polarization of skylight)<br>• Double refraction & Nicol prism construction: cut calcite rhomb, Canada balsam layer ($n_b = 1.55$, $n_o = 1.658$, $n_e = 1.486$), TIR of ordinary ray | `c.4.2.1` (Polarisation by Reflection: Brewster's Law)<br>`c.4.2.2` (Other Methods of Producing Polarised Light)<br>`c.4.2.3` (The Nicol Prism) | **COVERED** |
| **Unit 19** | **Book 2 Sec 20.8.3, 20.9.1 / Ghatak Sec 22.2, 22.3.1**: Effects of polariser and analyser | • Polarizer and analyzer concept, transmission axis<br>• Malus' law derivation: $I = I_0 \cos^2\theta$<br>• Parallel ($\theta = 0^\circ$) and crossed ($\theta = 90^\circ$) polarizers<br>• Transmission of unpolarised light through ideal polarizer ($I = I_0/2$) | `c.4.3.1` (Malus' Law)<br>`c.4.3.2` (Partially Polarised Light & Multi-Polariser Problems) | **COVERED** |
| **Unit 20** | **Book 2 Sec 20.17 / Ghatak Sec 22.5**: Double refraction - Huygens’ explanation | • Double refraction (birefringence) in calcite and quartz<br>• Ordinary ($O$) ray and Extraordinary ($E$) ray<br>• Optic axis as a direction of symmetry<br>• Negative crystals ($v_e > v_o, n_e < n_o$, calcite) vs positive crystals ($v_e < v_o, n_e > n_o$, quartz)<br>• Huygens' wave surfaces: sphere for $O$-ray, ellipsoid of revolution for $E$-ray<br>• Huygens' construction for normal and oblique incidence | `c.4.4.1` (Double Refraction in Uniaxial Crystals)<br>`c.4.4.2` (Huygens' Explanation of Double Refraction) | **COVERED** |
| **Unit 21** | **Book 2 Sec 20.18 / Ghatak Sec 22.6**: Wave plates | • Phase retardation $\delta = \frac{2\pi}{\lambda_0}|\mu_o - \mu_e|d$<br>• Quarter-Wave Plate (QWP): optical path difference $\lambda_0/4$, $\delta = \pi/2$, thickness $d = \frac{\lambda_0}{4|\mu_o - \mu_e|}$<br>• Half-Wave Plate (HWP): optical path difference $\lambda_0/2$, $\delta = \pi$, thickness $d = \frac{\lambda_0}{2|\mu_o - \mu_e|}$<br>• Action of QWP (linear $\leftrightarrow$ circular/elliptical) and HWP (rotation of linear vibration by $2\theta$) | `c.4.5.1` (Retardation Plates: Quarter- and Half-Wave)<br>`c.4.5.2` (Action of QWP and HWP on Polarised Light) | **COVERED** |
| **Unit 22** | **Book 2 Sec 20.19–20.20 / Ghatak Sec 22.7, 22.8**: Production and analysis of different polarised light; Optical activity | • Production of circular and elliptical light via Polarizer + QWP<br>• Systematic experimental procedure for analysis of unknown beam (Polaroid + QWP)<br>• Optical activity (rotatory polarization)<br>• **Fresnel's mathematical theory of optical rotation**: plane-polarised wave as superposition of RCP and LCP propagating with indices $n_R$ and $n_L$, leading to rotation angle $\theta(z) = \frac{\pi z}{\lambda_0}(n_L - n_R)$ (Ghatak §22.8, Eqs. 22.56–22.58)<br>• Specific rotation $S = \frac{\theta}{l \cdot c}$ ($l$ in dm, $c$ in $\text{g cm}^{-3}$)<br>• Textbook constants: Turpentine $\theta = +37^\circ$ ($l=10\text{ cm}$); Quartz along optic axis $n_L - n_R \approx 7 \times 10^{-5}$, rotating sodium light ($\lambda = 6000\text{ \AA}$) by $21.7^\circ/\text{mm}$ | `c.4.6.1` (Producing Plane, Circular & Elliptical Light)<br>`c.4.6.2` (Analysing an Unknown Beam)<br>`c.4.6.3` (Optical Activity & Specific Rotation) | **PARTIAL** |

---

## 2. Inconsistencies and Missing Elements Identified

### Inconsistency 1: Core Syllabus Concept Demoted to `tier='extra'`
- **Location**: `SSC-V4/optics/authoring/m4.concepts.py` line 289 (`c.4.6.3`).
- **Citation**: CU-FYUGP Syllabus `SSC-V2/SEM5/PHY/OPTICS.pdf`, Module IV, Unit 22; Practical Experiment 10 ("To determine the specific rotation of cane sugar using polarimeter"); Book 2 Sec 20.20; Ghatak 6e §22.8, pp. 373–374.
- **Finding**: In `authoring/m4.concepts.py`, `c.4.6.3` ("Optical Activity and Specific Rotation") is marked `tier='extra'`. Optical activity and specific rotation are core mandatory topics in the university syllabus and appear regularly on university theory examinations (e.g. `p.cu.op.30`, `p.cu.op.34`) as well as the semester laboratory exam.
- **Correction Required**: Change `c.4.6.3` to `tier='core'`.

### Gap 1: Missing Formal Mathematical Proof for Fresnel's Theory of Optical Activity
- **Location**: `SSC-V4/optics/authoring/m4.concepts.py` (`c.4.6.3`).
- **Citation**: Ghatak 6e §22.8, pp. 373–374, Equations 22.56–22.58; university question `p.cu.op.34` ("Explain Fresnel's theory of optical rotation").
- **Finding**: `c.4.6.3` is currently classified as `kind='definition'` with no `proof` dictionary. However, Ghatak §22.8 provides a rigorous derivation of optical rotation:
  1. Incident linearly polarized wave decomposed into counter-rotating circular modes of equal amplitude:
     $$E_{xR} = E_0 \cos(k_R z - \omega t),\quad E_{yR} = E_0 \sin(k_R z - \omega t)$$
     $$E_{xL} = E_0 \cos(k_L z - \omega t),\quad E_{yL} = -E_0 \sin(k_L z - \omega t)$$
     where $k_R = \frac{\omega n_R}{c} = \frac{2\pi n_R}{\lambda_0}$ and $k_L = \frac{\omega n_L}{c} = \frac{2\pi n_L}{\lambda_0}$.
  2. Superposition inside the optically active medium:
     $$E_x = E_{xR} + E_{xL} = 2E_0 \cos\left[\frac{1}{2}(k_L - k_R)z\right] \cos\left[\omega t - \frac{1}{2}(k_R + k_L)z\right]$$
     $$E_y = E_{yR} + E_{yL} = 2E_0 \sin\left[\frac{1}{2}(k_L - k_R)z\right] \cos\left[\omega t - \frac{1}{2}(k_R + k_L)z\right]$$
  3. The emergent wave is strictly linearly polarized with its plane tilted by angle $\theta(z)$:
     $$\tan\theta = \frac{E_y}{E_x} = \tan\left[\frac{1}{2}(k_L - k_R)z\right] \implies \theta(z) = \frac{1}{2}(k_L - k_R)z = \frac{\pi z}{\lambda_0}(n_L - n_R)$$
- **Correction Required**: Elevate `c.4.6.3` to `kind='theorem'` and supply the complete step-by-step `proof` dictionary with rungs. Add corresponding plain-language step meanings to `authoring/steps.py`.

### Gap 2: Missing Authoritative Numerical Constants and Worked Examples from Ghatak 6e §22.8
- **Location**: `SSC-V4/optics/authoring/m4.concepts.py` (`c.4.6.3`).
- **Citation**: Ghatak 6e §22.8, p. 373.
- **Finding**: Ghatak provides concrete experimental and physical examples:
  - Turpentine: optical rotation $\theta = +37^\circ$ for path length $z = 10\text{ cm}$.
  - Quartz crystal (along optic axis): circular birefringence $n_L - n_R \approx 7 \times 10^{-5}$, producing rotation $\theta = 21.7^\circ$ for thickness $z = 0.1\text{ cm}$ ($1\text{ mm}$) at $\lambda_0 = 0.6\ \mu\text{m} = 6000\text{ \AA}$.
- **Correction Required**: Include these exact textbook constants in the concept statement, traps, or flashcards.

---

## 3. Notation and Textbook Conventions Check
- **Slit Width Notation in Module III**:
  - Ghatak 6e §18.2 & §18.6 uses $b$ for the slit width and $a$ for the opaque barrier, giving grating element $d = a + b$.
  - The app (`c.3.1.2`, `c.3.2.1`, `c.3.3.1`, `c.3.3.2`) uses $a$ for the slit width and $d$ for slit separation (or grating spacing).
  - *Assessment*: Both notations are mathematically equivalent and internally consistent throughout the app and its question bank. No code rewrite needed.

---

## 4. Diagrams to Draw
For the new derivation added to `c.4.6.3` (Fresnel's theory of optical activity):
- **Diagram specification**: `c.4.6.3` steps 1–4 require a diagram showing:
  - *Stage 1*: Linear polarisation along the $x$-axis resolved into two counter-rotating circular vectors (RCP $\mathbf{E}_R$ rotating clockwise and LCP $\mathbf{E}_L$ rotating counterclockwise) of equal amplitude at $z = 0$.
  - *Stage 2*: Propagation along $+z$ through distance $z$ in medium with $n_L \neq n_R$, showing the phase lag between RCP and LCP vectors ($\phi_1 = k_R z$ and $\phi_2 = k_L z$).
  - *Stage 3*: Recombination of the two circular vectors at distance $z$, forming a resultant linear vector rotated through angle $\theta = \frac{1}{2}(k_L - k_R)z$.
  - *Stage 4*: Comparison of dextrorotatory ($n_L > n_R$, clockwise rotation) vs laevorotatory ($n_L < n_R$, anticlockwise rotation).
- **Status in `authoring/steps.py`**:
  Mark with `NF('c.4.6.3', k, 'needs a new diagram: Fresnel decomposition of linear polarization into counter-rotating circular components at z=0 and after propagating distance z')` and `NS('c.4.6.3', 'rotatory polarization is a static geometric rotation of the plane of vibration; the stage-by-stage vector diagram is the whole content')`.

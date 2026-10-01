# Optics Gap Report V2: Item-by-Item Discrepancies and Omissions

**Course**: B.Sc. Physics Honours, Semester V (CU-FYUGP), *Optics*  
**Textbooks**:
- Book 1: Ajoy Ghatak, *Optics*, 6th Edition (McGraw Hill Education).
- Book 2: Subrahmanyam, Brij Lal & Avadhanulu (Unavailable; Module IV evaluated against Ghatak 6e Ch 22 & 24.5).

This report strictly lists all **DIFFERENT** (notation/definition mismatches) and **ABSENT** (missing textbook content) items from the item-by-item inventory of Ghatak 6e across all 47 prescribed syllabus sections.

---

## 1. Summary of Discrepancies

| Category | Module I | Module II | Module III | Module IV | Total |
|---|---|---|---|---|---|
| **DIFFERENT Theory (In-Place Correction)** | 0 | 6 | 6 | 5 | **17** |
| **ABSENT Theory (New Concepts)** | 1 | 1 | 1 | 1 | **4** |
| **ABSENT Worked Examples (New Exercises)** | 0 | 0 | 3 | 4 | **7** |
| **Total Actionable Items** | **1** | **7** | **10** | **10** | **28** |

---

## 2. THEORY ITEMS: DIFFERENT (To Be Corrected in Place)

These items exist in `authoring/*.py`, but use non-standard notation, alternative symbols, or inverted conventions compared to Ghatak 6e. In accordance with the project rules, the app's statement text is updated to match Ghatak's notation while preserving permanent IDs.

### Module II: Interference
1. **Unit 8 | Sec 14.8, p. 215 — Fresnel Biprism Refractive Index Symbol**
   - *Textbook*: Ghatak uses $n$ for biprism refractive index: angular deviation $\delta = (n-1)\alpha$, separation $d = 2a(n-1)\alpha$.
   - *App (`c.2.4.2`)*: Uses $\mu$ for refractive index: $d = 2a(\mu-1)\alpha$.
   - *Exam Relevance*: University question papers specifically ask for $d = 2a(n-1)\alpha$ using standard $n$.
2. **Unit 9 | Sec 14.10, Eq. 14.36, p. 217 — Fringe Shift by Transparent Plate**
   - *Textbook*: Ghatak uses $n$ for plate refractive index: optical path $(n-1)t$, fringe shift $\Delta y = (n-1)t \frac{D}{d}$.
   - *App (`c.2.3.4`)*: Uses $\mu$: $\Delta y = (\mu-1)t \frac{D}{d}$.
   - *Exam Relevance*: Prevents symbol confusion between refractive index $n$ and fringe order $n$ on exams.
3. **Unit 10 | Sec 15.3, Eq. 15.9, p. 224 — The Cosine Law Path Difference**
   - *Textbook*: Ghatak writes optical path difference as $\Delta = 2 n d \cos r$ (film thickness $d$, refractive index $n$).
   - *App (`c.2.6.1`)*: Writes $\Delta = 2\mu t \cos r$ (thickness $t$, index $\mu$).
   - *Exam Relevance*: Standard Ghatak derivation question: "Derive the cosine law $\Delta = 2 n d \cos r$ for a thin film."
4. **Unit 10 | Sec 15.3, Eq. 15.10a–b, p. 224 — Thin Film Maxima and Minima Conditions**
   - *Textbook*: Reflected maxima: $2 n d \cos r = (m + 1/2)\lambda$; reflected minima: $2 n d \cos r = m\lambda$.
   - *App (`c.2.6.1`)*: Uses $\mu$ and $t$: $2\mu t \cos r = (m + 1/2)\lambda$.
   - *Exam Relevance*: Consistency with textbook equations cited in university evaluations.
5. **Unit 11 | Sec 15.8, Eq. 15.60, p. 235 — Wedge-Shaped Film Fringe Width**
   - *Textbook*: Ghatak uses wedge angle $\theta$ and index $n$: fringe width $\beta = \frac{\lambda}{2 n \theta}$.
   - *App (`c.2.7.1`)*: Uses wedge angle $\alpha$ and index $\mu$: $\beta = \frac{\lambda}{2\mu\alpha}$.
   - *Exam Relevance*: Standard lab viva and theory question for air/liquid wedge fringe spacing.
6. **Unit 11 | Sec 15.10, Eq. 15.69, p. 240 — Newton's Rings Liquid Refractive Index**
   - *Textbook*: Ghatak uses $n$ for liquid index: dark ring radii $r_m = \sqrt{\frac{m\lambda R}{n}}$.
   - *App (`c.2.7.3`)*: Uses $\mu$ and uses $n$ for ring order: $r_n = \sqrt{\frac{n\lambda R}{\mu}}$.
   - *Exam Relevance*: Eliminates conflicting use of $n$ for both fringe order and refractive index.

### Module III: Diffraction
7. **Unit 12 | Sec 18.2, Eq. 18.9–18.10, p. 281 — Single Slit Width Symbol**
   - *Textbook*: Ghatak uses $b$ for slit width: phase parameter $\beta = \frac{1}{2} k b \sin\theta = \frac{\pi b \sin\theta}{\lambda}$, intensity $I(\theta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2$.
   - *App (`c.3.1.2`)*: Uses $a$ for slit width: $\beta = \frac{\pi a \sin\theta}{\lambda}$.
   - *Exam Relevance*: Essential for distinguishing single-slit width ($b$) from two-slit opaque barrier ($a$) in Ghatak.
8. **Unit 12 | Sec 18.2, p. 281 — Single Slit Diffraction Minima Condition**
   - *Textbook*: Minima condition: $b \sin\theta = m\lambda$ ($m = \pm 1, \pm 2, \dots$).
   - *App (`c.3.1.2`)*: Writes $a \sin\theta = m\lambda$.
   - *Exam Relevance*: Directly asked in derivations of single slit Fraunhofer diffraction.
9. **Unit 13 | Sec 18.6, Eq. 18.45, p. 294 — Two-Slit Pattern Parameters**
   - *Textbook*: Ghatak defines slit width $b$, opaque width $a$, center-to-center distance $d = a + b$: $I = 4I_0 \left(\frac{\sin\beta}{\beta}\right)^2 \cos^2\gamma$ with $\beta = \frac{\pi b \sin\theta}{\lambda}$ and $\gamma = \frac{\pi d \sin\theta}{\lambda}$.
   - *App (`c.3.2.1`)*: Uses $a$ for slit width and leaves opaque barrier undefined.
   - *Exam Relevance*: Core CU Honours question: "Explain the missing orders in a double-slit pattern in terms of slit width $b$ and separation $a+b$."
10. **Unit 13 | Sec 18.6, p. 295 — Double-Slit Missing Orders Formula**
    - *Textbook*: Missing orders occur when $\frac{d}{b} = \frac{a+b}{b} = \frac{m}{p}$.
    - *App (`c.3.2.1`)*: Writes $\frac{d}{a} = \frac{m}{p}$.
    - *Exam Relevance*: Frequent numeric and derivation problem in Semester V exams.
11. **Unit 14 | Sec 18.8, Eq. 18.64, p. 300 — Grating Element Symbol**
    - *Textbook*: Grating element explicitly written as $(a + b)$: $(a + b)\sin\theta = m\lambda$.
    - *App (`c.3.3.2`)*: Writes $d\sin\theta = m\lambda$ without specifying $d = a + b$.
    - *Exam Relevance*: Standard syllabus term "grating element $(a+b)$" is required in university marking schemes.
12. **Unit 15 | Sec 20.2 & 20.6, pp. 328, 336 — Distance to Screen Symbol in Fresnel Diffraction**
    - *Textbook*: Ghatak uses $d$ for distance from aperture/edge to screen: $r_m = \sqrt{m\lambda d}$, $v = x\sqrt{\frac{2}{\lambda d}}$.
    - *App (`c.3.4.1`, `c.3.5.1`)*: Uses $b$ for distance to screen ($r_m = \sqrt{m b \lambda}$, $v = x\sqrt{2/(\lambda b)}$).
    - *Exam Relevance*: Conforms strictly to Ghatak Chapter 20 notation.

### Module IV: Polarisation
13. **Unit 18 | Sec 22.3.2 / 24.5, Eq. 22.10, 24.57, pp. 359, 423 — Brewster's Law Refractive Index**
    - *Textbook*: Ghatak writes Brewster's law as $\tan i_p = n$ or $\tan\theta_p = \frac{n_2}{n_1}$.
    - *App (`c.4.2.1`)*: Writes $\tan i_p = \mu$.
    - *Exam Relevance*: Electromagnetic boundary condition derivation in Ghatak §24.5 yields $n_2/n_1$.
14. **Unit 20 | Sec 22.5, p. 367 — Uniaxial Crystal Birefringence Indices**
    - *Textbook*: Ghatak uses $n_o$ and $n_e$ for ordinary and extraordinary refractive indices.
    - *App (`c.4.4.1`)*: Uses $\mu_o$ and $\mu_e$.
    - *Exam Relevance*: Matches international and university physics notation for principal indices.
15. **Unit 21 | Sec 22.6, Eq. 22.50, 22.52, 22.54, pp. 370–371 — Wave Plate Retardation and Thickness**
    - *Textbook*: Phase difference $\delta = \frac{2\pi}{\lambda_0}|n_o - n_e|d$; QWP thickness $d = \frac{\lambda_0}{4|n_o - n_e|}$; HWP thickness $d = \frac{\lambda_0}{2|n_o - n_e|}$.
    - *App (`c.4.5.1`)*: Writes $\delta = \frac{2\pi}{\lambda_0}|\mu_o - \mu_e|d$, $d = \frac{\lambda_0}{4|\mu_o - \mu_e|}$.
    - *Exam Relevance*: Direct formula match for practical and theory exam questions on quarter/half-wave plates.
16. **Unit 22 | Sec 22.8, Eq. 22.58, p. 373 — Fresnel Optical Rotation Formula**
    - *Textbook*: Ghatak writes $\theta(z) = \frac{\pi z}{\lambda_0}(n_L - n_R)$ for circular birefringence.
    - *App (`c.4.6.3`)*: Uses $\mu_L$ and $\mu_R$.
    - *Exam Relevance*: Direct derivation question: "Prove that rotation per unit length is $\frac{\pi}{\lambda_0}(n_L - n_R)$."

---

## 3. THEORY ITEMS: ABSENT (To Be Added as New Concepts in `mN.extra.py`)

These are complete mathematical derivations and physical principles taught in Ghatak 6e that are entirely absent from the app.

1. **Module I | Unit 1 | Sec 3.2, p. 61 — Fermat Stationarity Second-Derivative Condition**
   - *Textbook Reference*: Ghatak §3.2, p. 61, Eq. (3.8)–(3.10) & text.
   - *Topic*: Second derivative of optical path length:
     $$\frac{d^2 L}{d\theta^2} = r^2 n_2 \left(\frac{1}{y} - \frac{1}{y_0}\right)$$
     where $y_0$ is the paraxial image position. Proves that for $y < y_0$ the optical path is a **minimum**, for $y > y_0$ it is a **maximum**, and for $y = y_0$ (at the image point) it is strictly **stationary** ($\delta L = 0$ to second order).
   - *Why It Matters*: Essential honours-level exam question: "Show by Fermat's principle that the optical path between conjugate points is stationary, and distinguish cases of maximum and minimum time."
   - *Action*: Add as new concept `c.1.1.5` in `authoring/m1.extra.py`.

2. **Module II | Unit 7 | Sec 14.6, pp. 211–213 — Spatial Coherence and Slit Width Criterion**
   - *Textbook Reference*: Ghatak §14.6, pp. 211–213, text & figures.
   - *Topic*: Condition for sustained interference fringes with an extended slit source: each independent point of a source of width $w$ produces an intensity pattern shifted by $\Delta y = \frac{w D'}{d}$. For fringes not to wash out, the maximum path difference across the source must be less than $\lambda/2$, leading to the coherence condition:
     $$w < \frac{\lambda D_s}{2 d}\quad\text{or angular width }\Delta\theta_s < \frac{\lambda}{2 d}$$
   - *Why It Matters*: Standard exam derivation: "Explain why an extended source of light destroys interference fringes, and find the maximum permissible source width."
   - *Action*: Add as new concept `c.2.2.3` in `authoring/m2.extra.py`.

3. **Module III | Unit 15 | Sec 20.2, pp. 328–329 — Schuster's Summation Method for Half-Period Zones**
   - *Textbook Reference*: Ghatak §20.2, pp. 328–329, Eqs. (20.6)–(20.12).
   - *Topic*: Rigorous summation of alternating zone amplitudes $u = u_1 - u_2 + u_3 - u_4 + \dots$:
     $$u = \frac{u_1}{2} + \left(\frac{u_1}{2} - u_2 + \frac{u_3}{2}\right) + \left(\frac{u_3}{2} - u_4 + \frac{u_5}{2}\right) + \dots$$
     Since $u_m \approx \frac{1}{2}(u_{m-1} + u_{m+1})$, all bracketed terms vanish identically, leaving the exact result $u(P) = \frac{1}{2}u_1$, so the intensity is one-fourth that of the first zone alone.
   - *Why It Matters*: Classic university theory question: "Explain Schuster's method of grouping half-period zones to evaluate the resultant amplitude on axis."
   - *Action*: Add as new concept `c.3.4.4` in `authoring/m3.extra.py`.

4. **Module IV | Unit 17 | Sec 22.4, p. 365 — Tilt Angle and Axes of the Polarisation Ellipse**
   - *Textbook Reference*: Ghatak §22.4, p. 365, Eq. (22.35).
   - *Topic*: Derivation of the inclination $\phi$ of the major axis of the polarisation ellipse to the x-axis:
     $$\tan 2\phi = \frac{2 a_1 a_2 \cos\delta}{a_1^2 - a_2^2}$$
     Shows that when $\delta = \pi/2$, $\tan 2\phi = 0 \implies \phi = 0$ (axes along coordinate axes); when $a_1 = a_2$, $\tan 2\phi = \infty \implies \phi = 45^\circ$.
   - *Why It Matters*: Standard derivation asked in Calicut University optics examinations for Semester V.
   - *Action*: Add as new concept `c.4.1.3` in `authoring/m4.extra.py`.

---

## 4. WORKED EXAMPLES: ABSENT (To Be Added as Written Exercises in `mN.extra.py`)

These are authoritative worked numerical examples from Ghatak 6e that must be included as written exercises with exact textbook numbers and solutions.

1. **Module III | Unit 13 | Sec 18.6, p. 296, Example 18.9 — Double-Slit Diffraction Envelope and Missing Orders**
   - *Textbook Reference*: Ghatak §18.6, p. 296, Example 18.9.
   - *Given Data*: Slit width $b = 8.8 \times 10^{-3}\text{ cm}$, center separation $d = 7.0 \times 10^{-2}\text{ cm}$, $\lambda = 5.89 \times 10^{-5}\text{ cm}$.
   - *Book Answers*: Central envelope angular half-width $\theta_1 = \lambda/b = 6.69 \times 10^{-3}\text{ rad}$; total interference fringes inside central maximum $= 2(d/b) - 1 = 15$; missing orders occur at $m = 8, 16, 24, \dots$ where $d/b \approx 8$.
   - *Action*: Add as written exercise `q.op.3.11` in `authoring/m3.extra.py`.

2. **Module III | Unit 14 | Sec 18.8, pp. 302–303, Example 18.10 — Diffraction Grating Orders and Sodium Doublet Resolution**
   - *Textbook Reference*: Ghatak §18.8, pp. 302–303, Example 18.10.
   - *Given Data*: Plane diffraction grating with $15,000\text{ lines/inch}$ ($d = 1.693 \times 10^{-4}\text{ cm}$), $\lambda = 5890\text{ \AA} = 5.890 \times 10^{-5}\text{ cm}$.
   - *Book Answers*: First-order angle $\theta_1 = \sin^{-1}(\lambda/d) = 20.35^\circ$; second-order angle $\theta_2 = 44.07^\circ$; maximum observable order $m_{\max} = \lfloor d/\lambda \rfloor = 2$; resolving power required for sodium doublet ($5890\text{ \AA}, 5896\text{ \AA}$) is $R = \lambda/\Delta\lambda = 982$, requiring a minimum of $N = 982$ lines in first order and $491$ lines in second order.
   - *Action*: Add as written exercise `q.op.3.12` in `authoring/m3.extra.py`.

3. **Module III | Unit 16 | Sec 20.6, p. 338, Example 20.3 — Straight Edge Diffraction with He-Ne Laser**
   - *Textbook Reference*: Ghatak §20.6, p. 338, Example 20.3.
   - *Given Data*: He-Ne laser $\lambda = 0.6328\ \mu\text{m}$, distance to screen $d = 50\text{ cm}$.
   - *Book Answers*: Scale factor $x_0 = \sqrt{\lambda d / 2} = 0.398\text{ mm}$; first fringe maximum at $v = 1.22 \implies x_1 = 1.22 \times 0.398 = 0.485\text{ mm}$ outside geometrical shadow; first minimum at $v = 1.87 \implies x_2 = 0.744\text{ mm}$; intensity at geometric shadow edge $I = I_0/4$.
   - *Action*: Add as written exercise `q.op.3.13` in `authoring/m3.extra.py`.

4. **Module IV | Unit 17 | Sec 22.4, p. 363, Example 22.1 — Orthogonal Vibrations and Polarisation Ellipse Construction**
   - *Textbook Reference*: Ghatak §22.4, p. 363, Example 22.1.
   - *Given Data*: $E_x = a\cos(\omega t)$, $E_y = a\cos(\omega t + \pi/4)$ (equal amplitude $a$, phase difference $\delta = \pi/4$).
   - *Book Answers*: Parametric evaluation at $\omega t = 0, \pi/4, \pi/2, 3\pi/4, \pi, \dots$; traces an ellipse clockwise (seen looking against the light direction), proving that the emergent wave is right-handed elliptically polarized with major axis tilted at $135^\circ$ ($45^\circ$ in second quadrant).
   - *Action*: Add as written exercise `q.op.4.10` in `authoring/m4.extra.py`.

5. **Module IV | Unit 21 | Sec 22.6, p. 371, Example 22.6 — Calcite Quarter- and Half-Wave Plate Thicknesses**
   - *Textbook Reference*: Ghatak §22.6, p. 371, Example 22.6.
   - *Given Data*: Calcite crystal with $n_o = 1.6583$, $n_e = 1.4864$, sodium D-line $\lambda_0 = 5893\text{ \AA} = 0.5893\ \mu\text{m}$.
   - *Book Answers*: Birefringence $|n_o - n_e| = 0.1719$; Quarter-Wave Plate minimum thickness $d_{\text{QWP}} = \frac{\lambda_0}{4(n_o - n_e)} = 0.857\ \mu\text{m}$; Half-Wave Plate minimum thickness $d_{\text{HWP}} = \frac{\lambda_0}{2(n_o - n_e)} = 1.714\ \mu\text{m}$.
   - *Action*: Add as written exercise `q.op.4.11` in `authoring/m4.extra.py`.

6. **Module IV | Unit 21 | Sec 22.6, p. 371, Example 22.7 — Transformation of Circular Light by a Quarter-Wave Plate**
   - *Textbook Reference*: Ghatak §22.6, p. 371, Example 22.7.
   - *Given Data*: Left-circularly polarized light ($E_x = a\cos\omega t, E_y = a\sin\omega t$) incident normally on a calcite QWP with fast axis along x.
   - *Book Answers*: QWP introduces additional phase shift of $\pi/2$ between components, so $E_x' = a\cos\omega t, E_y' = a\sin(\omega t + \pi/2) = a\cos\omega t$; emergent wave has $E_y'/E_x' = 1$, which is strictly linearly polarized at $45^\circ$ to the crystal axes.
   - *Action*: Add as written exercise `q.op.4.12` in `authoring/m4.extra.py`.

7. **Module IV | Unit 21 | Sec 22.6, p. 372, Example 22.8 — Reversal of Circular Handedness by a Half-Wave Plate**
   - *Textbook Reference*: Ghatak §22.6, p. 372, Example 22.8.
   - *Given Data*: Left-circularly polarized beam incident normally on a HWP.
   - *Book Answers*: HWP introduces a phase retardation of $\pi$, inverting the sign of the y-component: $E_y' = a\sin(\omega t + \pi) = -a\sin\omega t$; emergent wave has $E_x' = a\cos\omega t, E_y' = -a\sin\omega t$, representing right-circularly polarized light. Handedness is reversed.
   - *Action*: Add as written exercise `q.op.4.13` in `authoring/m4.extra.py`.


## Section 13: Superposition of Waves

### 13.1 Superposition of Two Waves and Standing Waves

#### Problem 13.1
**Original Question:**  
Standing waves are formed on a stretched string under a tension of $1\text{ N}$. The length of the string is $30\text{ cm}$ and it vibrates in $3$ loops. If the mass per unit length of the wire is $10\text{ mg/cm}$, calculate the frequency of the vibrations.

**Answer:**  
The wave speed on a stretched string is given by:
$$v = \sqrt{\frac{T}{\mu}}$$
Converting to SI units:
$$T = 1\text{ N}$$
$$\mu = 10\text{ mg/cm} = \frac{10 \times 10^{-6}\text{ kg}}{10^{-2}\text{ m}} = 10^{-3}\text{ kg/m}$$
$$v = \sqrt{\frac{1}{10^{-3}}} = \sqrt{1000} \approx 31.62\text{ m/s}$$

A string of length $L$ vibrating in $p$ loops has a wavelength:
$$\lambda = \frac{2L}{p}$$
For $L = 30\text{ cm} = 0.3\text{ m}$ and $p = 3$:
$$\lambda = \frac{2 \times 0.3}{3} = 0.2\text{ m}$$

The frequency $\nu$ is:
$$\nu = \frac{v}{\lambda} = \frac{31.62\text{ m/s}}{0.2\text{ m}} \approx 158.1\text{ Hz}$$

---

#### Practice Problem 13.1 (Without Answer)
Standing waves are formed on a stretched wire of length $50\text{ cm}$ vibrating in $4$ loops under a tension of $2.5\text{ N}$. If the linear mass density of the wire is $4.0\text{ mg/cm}$, determine the speed of the transverse wave and the frequency of vibration.

---

#### Problem 13.2
**Original Question:**  
In Problem 13.1, if the string is made to vibrate in its fundamental mode, what will be the frequency of vibration?

**Answer:**  
In the fundamental mode ($p = 1$), the frequency is one-third of the frequency for $3$ loops:
$$\nu_1 = \frac{\nu_3}{3} = \frac{158.1\text{ Hz}}{3} \approx 52.7\text{ Hz}$$

---

#### Practice Problem 13.2 (Without Answer)
For the wire described in Practice Problem 13.1, find the fundamental frequency of vibration when the wire vibrates in a single loop.

---

#### Problem 13.5 & 13.6
**Original Question:**  
The displacements associated with two collinear waves having the same amplitude but slightly different frequencies are:
$$y_1 = a \cos\left[2\pi\left(\nu t - \frac{x}{\lambda}\right)\right], \qquad y_2 = a \cos\left[2\pi\left\{(\nu + \Delta\nu)t - \frac{x}{\lambda - \Delta\lambda}\right\}\right]$$
Show that at a fixed position $x$, the intensity varies with time. For $v = 330\text{ m/s}$, $\nu = 256\text{ s}^{-1}$, $\Delta\nu = 2\text{ s}^{-1}$, and $a = 0.1\text{ cm}$, find the beat frequency and the period of intensity variations.

**Answer:**  
Using the identity $\cos A + \cos B = 2 \cos\left(\frac{A+B}{2}\right)\cos\left(\frac{A-B}{2}\right)$, the resultant displacement $y = y_1 + y_2$ at a fixed location $x = 0$ is:
$$y(0, t) = 2a \cos(\pi \Delta\nu t) \cos\left[2\pi\left(\nu + \frac{\Delta\nu}{2}\right)t\right]$$
The intensity is proportional to the square of the slowly varying amplitude:
$$I(t) \propto 4a^2 \cos^2(\pi \Delta\nu t) = 2a^2 [1 + \cos(2\pi \Delta\nu t)]$$
The intensity oscillates at the beat frequency:
$$f_{\text{beat}} = \Delta\nu = 2\text{ s}^{-1}$$
The time period between successive intensity maxima is:
$$T_{\text{beat}} = \frac{1}{\Delta\nu} = \frac{1}{2\text{ s}^{-1}} = 0.5\text{ s}$$

---

#### Practice Problem 13.5 & 13.6 (Without Answer)
Two sound waves of equal amplitude $a = 0.05\text{ cm}$ propagate along the $x$-direction with frequencies $\nu_1 = 440\text{ Hz}$ and $\nu_2 = 444\text{ Hz}$ in air ($v = 340\text{ m/s}$). Derive the mathematical expression for the time-dependent intensity at $x = 0$, and determine the beat frequency and the time interval between successive minima.

---

## Section 14: Two Beam Interference by Division of Wavefront

### 14.1 Interference on a Water Surface and Phase Shift

#### Example 14.4
**Original Question:**  
Assume two point sources $S_1$ and $S_2$ on a water surface vibrate with an intrinsic initial phase difference of $\pi$. Obtain the conditions for nodal (destructive) and antinodal (constructive) lines, and generalize the result for an arbitrary phase difference $\phi$.

**Answer:**  
Let the disturbances produced at a point $P$ be:
$$y_1 = a \cos(\omega t - k S_1 P), \qquad y_2 = a \cos(\omega t - k S_2 P + \phi)$$
The total phase difference is:
$$\delta = k(S_2 P - S_1 P) - \phi = \frac{2\pi}{\lambda}(S_2 P - S_1 P) - \phi$$

1. For an initial phase difference $\phi = \pi$:
   * **Constructive interference (antinodal lines/maxima):**
     $$\delta = 2n\pi \implies \frac{2\pi}{\lambda}(S_2 P - S_1 P) - \pi = 2n\pi \implies S_2 P - S_1 P = \left(n + \frac{1}{2}\right)\lambda$$
   * **Destructive interference (nodal lines/minima):**
     $$\delta = (2n + 1)\pi \implies \frac{2\pi}{\lambda}(S_2 P - S_1 P) - \pi = (2n + 1)\pi \implies S_2 P - S_1 P = n\lambda$$
   The perpendicular bisector ($S_2 P = S_1 P$) becomes a nodal line (minimum) instead of a maximum.

2. For an arbitrary phase difference $\phi$:
   * **Maxima:**
     $$S_2 P - S_1 P = n\lambda + \frac{\phi}{2\pi}\lambda$$
   * **Minima:**
     $$S_2 P - S_1 P = \left(n + \frac{1}{2}\right)\lambda + \frac{\phi}{2\pi}\lambda$$

---

#### Practice Example 14.4 (Without Answer)
Two coherent point sources on a liquid surface vibrate with an initial phase difference of $\pi/2$. If the emitted wavelength is $\lambda$, determine the conditions on the path difference $S_2 P - S_1 P$ for constructive and destructive interference. What is the state of interference at a point on the perpendicular bisector of the line joining the sources?

---

### 14.2 Young's Double-Hole / Double-Slit Interference Pattern

#### Example 14.5
**Original Question:**  
Two plane waves of identical amplitude $E_0$ and wavelength $\lambda$ propagate in the $xz$-plane symmetrical to the $z$-axis with wave vectors:
$$\mathbf{k}_1 = -k\sin\theta\,\hat{\mathbf{x}} + k\cos\theta\,\hat{\mathbf{z}}, \qquad \mathbf{k}_2 = k\sin\theta\,\hat{\mathbf{x}} + k\cos\theta\,\hat{\mathbf{z}}$$
Assuming both electric fields are polarized along the $y$-axis, obtain the intensity distribution on a screen located at $z = 0$ and the fringe width. Calculate the fringe width for $\theta = \pi/6$ and $\lambda = 5000\text{ \AA}$.

**Answer:**  
The electric field components are:
$$E_1 = E_0 \cos(-kx\sin\theta + kz\cos\theta - \omega t)$$
$$E_2 = E_0 \cos(kx\sin\theta + kz\cos\theta - \omega t)$$
Superposing the fields:
$$E = E_1 + E_2 = 2E_0 \cos(kx\sin\theta)\cos(kz\cos\theta - \omega t)$$
On the screen at $z = 0$, the time-averaged intensity is:
$$I = 4 I_0 \cos^2(kx\sin\theta)$$
where $k = 2\pi/\lambda$. The phase argument changes by $\pi$ between consecutive bright fringes:
$$k \beta \sin\theta = \pi \implies \frac{2\pi}{\lambda}\beta \sin\theta = \pi \implies \beta = \frac{\lambda}{2\sin\theta}$$
For $\theta = \pi/6$ ($\sin(\pi/6) = 0.5$) and $\lambda = 5000\text{ \AA} = 5 \times 10^{-4}\text{ mm}$:
$$\beta = \frac{5 \times 10^{-4}\text{ mm}}{2 \times 0.5} = 5 \times 10^{-4}\text{ mm} = 0.5\,\mu\text{m}$$

---

#### Practice Example 14.5 (Without Answer)
Two mutually coherent plane waves of wavelength $\lambda = 632.8\text{ nm}$ intersect symmetrically on a planar detector with an angle of inclination $\theta = 10^\circ$ relative to the normal. Calculate the spatial period (fringe width) of the resulting straight-line interference pattern.

---

#### Example 14.8
**Original Question:**  
A parallel beam of light from a distant source $S'$ is incident at an angle $\theta$ on two slits separated by distance $d$. Determine the optical path difference and the resulting intensity distribution on a screen placed at distance $D$.

**Answer:**  
Before reaching the slits, the incident plane wavefront makes an angle $\theta$ with the slit plane, introducing an initial geometric path difference:
$$\Delta_{\text{initial}} = d \sin\theta$$
Between the slit plane and a point $P(x)$ on the screen, the path difference is:
$$\Delta_{\text{screen}} = S_2 P - S_1 P \approx \frac{xd}{D}$$
The net path difference at point $P$ is:
$$\Delta_{\text{net}} = \frac{xd}{D} + d\sin\theta$$
The corresponding phase difference is:
$$\delta = \frac{2\pi}{\lambda}\left(\frac{xd}{D} + d\sin\theta\right)$$
The resulting intensity distribution is:
$$I = I_0 \cos^2\left(\frac{\delta}{2}\right) = I_0 \cos^2\left[\frac{\pi}{\lambda}\left(\frac{xd}{D} + d\sin\theta\right)\right]$$
The central maximum ($\delta = 0$) shifts to $x_0 = -D\sin\theta$.

---

#### Practice Example 14.8 (Without Answer)
A parallel beam of light of wavelength $\lambda = 546\text{ nm}$ falls on a double-slit aperture with slit spacing $d = 0.4\text{ mm}$ at an angle of incidence $\theta = 0.1^\circ$. Find the displacement of the central zeroth-order fringe on a screen located $1.2\text{ m}$ away relative to the optical axis.

---

#### Problem 14.1
**Original Question:**  
In a Young’s double-hole experiment, the distance between the two holes is $0.5\text{ mm}$, $\lambda = 5 \times 10^{-5}\text{ cm}$, and $D = 50\text{ cm}$. What will be the fringe width?

**Answer:**  
The fringe width is:
$$\beta = \frac{\lambda D}{d}$$
Given:
$$\lambda = 5 \times 10^{-5}\text{ cm}$$
$$D = 50\text{ cm}$$
$$d = 0.5\text{ mm} = 0.05\text{ cm}$$
$$\beta = \frac{(5 \times 10^{-5}\text{ cm})(50\text{ cm})}{0.05\text{ cm}} = 0.05\text{ cm} = 0.5\text{ mm}$$

---

#### Practice Problem 14.1 (Without Answer)
In a double-slit experiment, the slit separation is $0.25\text{ mm}$, the screen distance is $1.5\text{ m}$, and the light source emits at $\lambda = 600\text{ nm}$. Compute the fringe spacing on the screen.

---

#### Problem 14.6
**Original Question:**  
In a Young’s double-hole experiment, interference fringes are formed using sodium light consisting of two wavelengths, $\lambda_1 = 5890\text{ \AA}$ and $\lambda_2 = 5896\text{ \AA}$. Obtain the regions on the screen where the fringe pattern disappears. Assume $d = 0.5\text{ mm}$ and $D = 100\text{ cm}$.

**Answer:**  
Fringe disappearance occurs when the bright fringe of one wavelength coincides with the dark fringe of the other:
$$x_n = \frac{n \lambda_1 D}{d} = \left(n' + \frac{1}{2}\right)\frac{\lambda_2 D}{d}$$
For the first disappearance closest to the center, $n' = n - 1$:
$$n \lambda_1 = \left(n - \frac{1}{2}\right)\lambda_2 \implies n(\lambda_2 - \lambda_1) = \frac{1}{2}\lambda_2$$
$$n \approx \frac{\bar{\lambda}}{2\Delta\lambda} = \frac{5893\text{ \AA}}{2(6\text{ \AA})} \approx 491$$
The distance from the center to the first region of disappearance is:
$$x = \frac{n \lambda_1 D}{d} = \frac{491 \times (5890 \times 10^{-8}\text{ cm}) \times 100\text{ cm}}{0.05\text{ cm}} \approx 5.78\text{ cm}$$
In general, complete disappearance occurs at:
$$x_m \approx \left(m + \frac{1}{2}\right)\frac{\bar{\lambda}^2 D}{d\,\Delta\lambda} \approx (2m + 1)(2.89\text{ cm}) \quad (m = 0, 1, 2, \dots)$$

---

#### Practice Problem 14.6 (Without Answer)
A double-slit arrangement with $d = 0.3\text{ mm}$ and $D = 1.2\text{ m}$ is illuminated by light containing two spectral components: $\lambda_1 = 500.0\text{ nm}$ and $\lambda_2 = 500.5\text{ nm}$. Determine the distance from the central axis to the first position on the screen where the fringe visibility falls to zero.

---

#### Problem 14.7
**Original Question:**  
If one carries out the Young’s double-hole interference experiment using microwaves of wavelength $3\text{ cm}$, discuss the nature of the fringe pattern if $d = 0.1\text{ cm}$, $1\text{ cm}$, and $4\text{ cm}$. Assume $D = 100\text{ cm}$. Can you use Eq. (14.21) for the fringe width?

**Answer:**  
The standard fringe width formula $\beta = \frac{\lambda D}{d}$ requires the paraxial approximation $\sin\theta \approx \tan\theta \approx \theta$, which holds only when $\lambda \ll d$:
1. For $d = 0.1\text{ cm}$ and $d = 1\text{ cm}$: Here $d < \lambda$ ($0.1\text{ cm} < 3\text{ cm}$ and $1\text{ cm} < 3\text{ cm}$). The maximum possible path difference across all angles is $d \sin\theta \le d < \lambda$. Thus, the path difference cannot even reach $\lambda/2$ (or $\lambda$); no interference fringes form in the field of view. Eq. (14.21) is completely invalid.
2. For $d = 4\text{ cm}$: Here $d > \lambda$, so maxima can occur at angles satisfying $d \sin\theta = n\lambda$. For $n = 1$:
   $$\sin\theta = \frac{\lambda}{d} = \frac{3}{4} = 0.75 \implies \theta \approx 48.6^\circ$$
   Because $\theta$ is very large, $\tan\theta \neq \sin\theta$. Eq. (14.21) cannot be used; the exact expression $x_n = D \tan[\arcsin(n\lambda/d)]$ must be used instead.

---

#### Practice Problem 14.7 (Without Answer)
Microwaves of frequency $\nu = 10\text{ GHz}$ ($\lambda = 3.0\text{ cm}$) are incident on two narrow slits separated by $d = 6.0\text{ cm}$. A detector scans along a line parallel to the slits at a distance $D = 1.5\text{ m}$. Find the exact positions of the first and second interference maxima on the screen, and determine whether the paraxial formula provides an acceptable approximation.

---

#### Problem 14.16
**Original Question:**  
In the Young’s double-hole experiment, calculate $I/I_{\max}$ where $I$ represents the intensity at a point where the path difference is $\lambda/5$.

**Answer:**  
The phase difference corresponding to a path difference $\Delta = \lambda/5$ is:
$$\delta = \frac{2\pi}{\lambda}\Delta = \frac{2\pi}{\lambda}\left(\frac{\lambda}{5}\right) = \frac{2\pi}{5}\text{ rad} = 72^\circ$$
The intensity distribution for identical slits is:
$$I = I_{\max} \cos^2\left(\frac{\delta}{2}\right)$$
$$\frac{I}{I_{\max}} = \cos^2\left(\frac{\pi}{5}\right) = \cos^2(36^\circ)$$
Using $\cos(36^\circ) = \frac{1 + \sqrt{5}}{4} \approx 0.8090$:
$$\frac{I}{I_{\max}} = (0.8090)^2 \approx 0.655$$

---

#### Practice Problem 14.16 (Without Answer)
In a two-beam interference pattern, calculate the ratio of the local intensity to the maximum intensity ($I/I_{\max}$) at a position on the screen where the path difference between the interfering beams is $\lambda/3$.

---

### 14.3 Circular Fringes on a Perpendicular Screen

#### Example 14.6 & 14.7
**Original Question:**  
Two coherent point sources $S_1$ and $S_2$, separated by distance $d$, are aligned along the $z$-axis perpendicular to an observation screen located at $z = D$ from $S_2$. Show that the fringes are concentric circles. If $d = 0.05\text{ mm}$ and $\lambda = 5000\text{ \AA}$, find the path difference at the center $O$.

**Answer:**  
Let the origin be at $S_2$, so $S_2 = (0, 0, 0)$ and $S_1 = (0, 0, -d)$. A point $P$ on the screen has coordinates $(x, y, D)$, with radial distance $\rho = \sqrt{x^2 + y^2}$:
$$S_2 P = \sqrt{D^2 + \rho^2} \approx D\left(1 + \frac{\rho^2}{2D^2}\right) = D + \frac{\rho^2}{2D}$$
$$S_1 P = \sqrt{(D + d)^2 + \rho^2} \approx (D + d) + \frac{\rho^2}{2(D + d)}$$
The path difference is:
$$\Delta = S_1 P - S_2 P \approx d - \frac{\rho^2 d}{2D(D + d)}$$
Because $\Delta$ depends only on the radial coordinate $\rho$, the loci of constant intensity are concentric circles centered at the axis $\rho = 0$.

At the central spot $O$ ($\rho = 0$):
$$\Delta_0 = d = 0.05\text{ mm} = 5 \times 10^{-3}\text{ cm}$$
With $\lambda = 5000\text{ \AA} = 5 \times 10^{-5}\text{ cm}$:
$$n = \frac{d}{\lambda} = \frac{5 \times 10^{-3}}{5 \times 10^{-5}} = 100$$
Because the path difference is an exact integer multiple of $\lambda$, the central spot is bright for all screen distances $D$.

---

#### Practice Example 14.6 & 14.7 (Without Answer)
Two in-phase coherent point sources are separated by an axial distance $d = 0.12\text{ mm}$ along the normal to an observation plane placed $50\text{ cm}$ away. For $\lambda = 600\text{ nm}$, calculate the order of interference at the central spot and the radius of the third dark ring.

---

#### Problem 14.10, 14.11 & 14.12
**Original Question:**  
For two coherent point sources separated by $d$ lying on an axis perpendicular to a screen at distance $D$:
1. Show that for $D \gg d$, the ring radius $\rho$ for path difference $\Delta$ is $\rho \approx \frac{D}{\Delta}\sqrt{(d - \Delta)(d + \Delta)}$.
2. If $\lambda = 0.5\,\mu\text{m}$, $d = 0.4\text{ mm}$, and $D = 20\text{ cm}$ (so $d = 800\lambda$), calculate the path difference for the first dark ring and first bright ring, and find the radius of the first dark ring for $D = 20\text{ cm}$.
3. For $d = 0.5\text{ mm}$, $\lambda = 5 \times 10^{-5}\text{ cm}$, and $D = 100\text{ cm}$ (central spot order $n_0 = 1000$), calculate the radii of the bright rings of order $n = 999$ and $n = 998$.

**Answer:**  
1. Setting the path difference $S_1 P - S_2 P = \Delta$:
   $$\sqrt{(D + d)^2 + \rho^2} - \sqrt{D^2 + \rho^2} = \Delta$$
   Squaring and collecting terms leads to the exact relation:
   $$\rho = \frac{1}{2\Delta}\sqrt{(d^2 - \Delta^2)[4D^2 + 4Dd + (d^2 - \Delta^2)]}$$
   For $D \gg d > \Delta$:
   $$\rho \approx \frac{D}{\Delta}\sqrt{d^2 - \Delta^2} = \frac{D}{\Delta}\sqrt{(d - \Delta)(d + \Delta)}$$

2. At the center ($\rho = 0$), $\Delta = d = 800\lambda$. As $\rho$ increases, the path difference decreases from $800\lambda$:
   * First dark ring:
     $$\Delta = \left(800 - \frac{1}{2}\right)\lambda = 799.5\lambda = 799.5(0.5 \times 10^{-3}\text{ mm}) = 0.39975\text{ mm}$$
   * First bright ring:
     $$\Delta = 799\lambda = 799(0.5 \times 10^{-3}\text{ mm}) = 0.3995\text{ mm}$$
   For $D = 20\text{ cm} = 200\text{ mm}$:
   $$\rho_1 = \frac{200}{0.39975}\sqrt{(0.4)^2 - (0.39975)^2} \approx 500.3 \times \sqrt{0.16 - 0.15980} \approx 500.3 \times 0.01414\text{ mm} \approx 7.08\text{ mm} \approx 0.71\text{ cm}$$

3. For $d = 0.5\text{ mm} = 500\,\mu\text{m}$, $\lambda = 0.5\,\mu\text{m}$, $D = 1000\text{ mm}$:
   $$\Delta_n = n\lambda$$
   * For $n = 999$:
     $$\Delta = 999(0.0005\text{ mm}) = 0.4995\text{ mm}$$
     $$\rho = \frac{1000}{0.4995}\sqrt{(0.5)^2 - (0.4995)^2} \approx 2002 \times \sqrt{0.00049975}\text{ mm} \approx 2002 \times 0.02235\text{ mm} \approx 44.7\text{ mm} = 4.47\text{ cm}$$
   * For $n = 998$:
     $$\Delta = 998(0.0005\text{ mm}) = 0.4990\text{ mm}$$
     $$\rho = \frac{1000}{0.4990}\sqrt{(0.5)^2 - (0.4990)^2} \approx 2004 \times \sqrt{0.000999}\text{ mm} \approx 2004 \times 0.0316\text{ mm} \approx 6.33\text{ cm}$$

---

#### Practice Problem 14.10, 14.11 & 14.12 (Without Answer)
Two coherent point sources emitting at $\lambda = 500\text{ nm}$ are separated by $d = 0.2\text{ mm}$ along the axis normal to a screen at $D = 50\text{ cm}$. Find the order of interference at the center, the path difference for the third dark ring, and the radius of that ring on the screen.

---

### 14.4 Fresnel’s Two-Mirror and Biprism Arrangements

#### Problem 14.3
**Original Question:**  
1. In the Fresnel biprism arrangement, show that the separation between the virtual sources is $d = 2(n - 1)a\alpha$, where $a$ is the slit-to-biprism distance, $\alpha$ is the base angle, and $n$ is the refractive index.
2. In an arrangement with $b/a = 20$ (where $b$ is the biprism-to-screen distance), the fringe width for sodium light ($\lambda \approx 5893\text{ \AA}$) is $0.1\text{ cm}$. If $n = 1.5$, calculate $\alpha$.

**Answer:**  
1. A thin prism with refracting angle $\alpha$ produces an angular deviation $\delta_m = (n - 1)\alpha$. Light from a slit at distance $a$ is refracted into two virtual images, each displaced laterally by $a \delta_m$. The total separation between the two virtual sources is:
   $$d = 2a \delta_m = 2a(n - 1)\alpha$$

2. The total distance from the source to the screen is $D = a + b$. The fringe width is:
   $$\beta = \frac{\lambda D}{d} = \frac{\lambda (a + b)}{2a(n - 1)\alpha} = \frac{\lambda (1 + b/a)}{2(n - 1)\alpha}$$
   Solving for $\alpha$:
   $$\alpha = \frac{\lambda (1 + b/a)}{2(n - 1)\beta}$$
   Substituting the given values:
   $$\lambda = 5893 \times 10^{-8}\text{ cm}, \quad b/a = 20, \quad n = 1.5, \quad \beta = 0.1\text{ cm}$$
   $$\alpha = \frac{(5893 \times 10^{-8}\text{ cm}) \times (21)}{2(1.5 - 1)(0.1\text{ cm})} = \frac{1.2375 \times 10^{-4}}{0.1} = 1.2375 \times 10^{-2}\text{ rad}$$
   Converting to degrees:
   $$\alpha = 1.2375 \times 10^{-2} \times \frac{180^\circ}{\pi} \approx 0.709^\circ \approx 0.71^\circ$$

---

#### Practice Problem 14.3 (Without Answer)
In a Fresnel biprism setup using glass with $n = 1.52$, the slit is positioned $a = 15\text{ cm}$ from the biprism and the screen is $b = 135\text{ cm}$ behind the biprism. If the biprism base angle is $\alpha = 0.5^\circ$ and the light wavelength is $\lambda = 546\text{ nm}$, compute the source separation $d$ and the observed fringe width $\beta$.

---

#### Problem 14.5
**Original Question:**  
In a Fresnel biprism experiment, a convex lens of focal length $f$ is placed between the biprism and the eyepiece. 
1. Show that if the slit-to-eyepiece distance $D > 4f$, two lens positions form sharp images of the virtual slits at the eyepiece.
2. If the measured separations between the image slits are $d_1$ and $d_2$, show that the actual source separation is $d = \sqrt{d_1 d_2}$.
3. What occurs if $D < 4f$?

**Answer:**  
1. Let $u$ and $v$ be the object and image distances from the lens:
   $$u + v = D, \qquad \frac{1}{v} - \frac{1}{-u} = \frac{1}{f} \implies \frac{1}{u} + \frac{1}{v} = \frac{1}{f}$$
   $$\frac{u + v}{u v} = \frac{1}{f} \implies u(D - u) = D f \implies u^2 - D u + D f = 0$$
   The roots for $u$ are:
   $$u = \frac{D \pm \sqrt{D^2 - 4Df}}{2}$$
   Real, distinct positions for the lens require a positive discriminant:
   $$D^2 - 4Df > 0 \implies D > 4f$$

2. Let the two positions correspond to magnifications $m_1$ and $m_2$:
   $$m_1 = \frac{d_1}{d} = \frac{v_1}{u_1}, \qquad m_2 = \frac{d_2}{d} = \frac{v_2}{u_2}$$
   Because the two positions are conjugate, $u_2 = v_1$ and $v_2 = u_1$:
   $$m_1 m_2 = \frac{d_1 d_2}{d^2} = \left(\frac{v_1}{u_1}\right)\left(\frac{u_1}{v_1}\right) = 1 \implies d^2 = d_1 d_2 \implies d = \sqrt{d_1 d_2}$$

3. If $D < 4f$, the roots are imaginary; the lens cannot form real images of the virtual sources on the crosswires for any lens position.

---

#### Practice Problem 14.5 (Without Answer)
In a displacement method measurement using a Fresnel biprism, the distance from slit to eyepiece is $D = 100\text{ cm}$. A convex lens of focal length $f = 21\text{ cm}$ forms sharp slit images at two locations. The image separations measured are $d_1 = 4.5\text{ mm}$ and $d_2 = 2.0\text{ mm}$. Find the actual separation $d$ between the virtual sources and calculate the distance between the two lens positions.

---

#### Problem 14.8
**Original Question:**  
In Fresnel’s two-mirror arrangement, show that the source slit $S$ and its virtual images $S_1$ and $S_2$ lie on a circle centered at the mirror vertex $M$, and that the source separation is $S_1 S_2 = 2b\theta$, where $b = MS$ and $\theta$ is the angle between the mirrors.

**Answer:**  
Let the intersection point of the mirror surfaces be $M$. By the law of reflection:
* The image $S_1$ produced by mirror 1 satisfies $M S_1 = M S = b$, and line $M S_1$ is rotated by $2\alpha_1$ from $MS$, where $\alpha_1$ is the angle of incidence on mirror 1.
* The image $S_2$ produced by mirror 2 satisfies $M S_2 = M S = b$.
Because $M S = M S_1 = M S_2 = b$, all three points lie on a common circle of radius $b$ centered at $M$.

The angle between the normal axes of the two mirrors inclined at angle $\pi - \theta$ is $\theta$. The total angle subtended by the arc $S_1 S_2$ at the center $M$ is:
$$\angle S_1 M S_2 = 2\theta$$
For small angles $\theta \ll 1$, the chord length is:
$$S_1 S_2 = 2b \sin\left(\frac{2\theta}{2}\right) \approx 2b\theta$$

---

#### Practice Problem 14.8 (Without Answer)
In a Fresnel two-mirror setup, the slit is placed $b = 40\text{ cm}$ from the junction line of the mirrors. If the angle between the two mirrors is $179.7^\circ$ ($\theta = 0.3^\circ$), calculate the separation between the virtual sources and the fringe width on a screen placed $1.2\text{ m}$ from the junction line for $\lambda = 589\text{ nm}$.

---

#### Problem 14.14 & 14.15
**Original Question:**  
A plane wave is incident normally on a screen containing two apertures separated by $d$. A convex lens of focal length $f$ is placed behind the apertures.
1. Show that the fringe width observed in the back focal plane of the lens is $\beta = f\lambda/d$.
2. Explain why parallel straight fringes form when the double-aperture plane is located precisely in the front focal plane of the lens, whereas hyperbolic fringes form if it is placed elsewhere.

**Answer:**  
1. Parallel bundles of rays diffracted at an angle $\theta$ converge to a point $x$ in the focal plane of the lens:
   $$x = f \tan\theta \approx f \sin\theta$$
   The condition for an interference maximum is $d \sin\theta = n\lambda \implies \sin\theta = \frac{n\lambda}{d}$. Therefore:
   $$x_n = f\left(\frac{n\lambda}{d}\right) \implies \beta = x_{n+1} - x_n = \frac{f\lambda}{d}$$

2. When the apertures are located precisely at the front focal plane, spherical wavefronts from the slits become planar after passing through the lens. The two interfering fields are plane waves intersecting at an angle $2\theta \approx d/f$, which produces straight-line fringes. When the aperture plane is placed elsewhere, the emerging wavefronts have spherical curvature, producing hyperbolic conic sections on the planar screen.

---

#### Practice Problem 14.14 & 14.15 (Without Answer)
A collimated beam of laser light ($\lambda = 633\text{ nm}$) falls normally on two pinholes separated by $d = 0.8\text{ mm}$. A converging lens with $f = 60\text{ cm}$ is placed immediately behind the pinholes. Determine the fringe spacing in the focal plane.

---

### 14.5 Interference with White Light

#### Problem 14.9
**Original Question:**  
In a double-hole experiment illuminated by white light ($4000\text{ \AA} \le \lambda \le 7000\text{ \AA}$), consider two points on the screen: one with an optical path difference of $5000\text{ \AA}$ and the other with an optical path difference of $40000\text{ \AA}$. Find the visible wavelengths that undergo constructive and destructive interference at these two points, and state the resulting color appearance at each point.

**Answer:**  
1. **At $\Delta = 5000\text{ \AA}$:**
   * **Constructive interference ($\Delta = n\lambda$):**
     $$\lambda = \frac{5000\text{ \AA}}{n}$$
     For $n = 1$: $\lambda = 5000\text{ \AA}$ (visible, blue-green).  
     For $n = 2$: $\lambda = 2500\text{ \AA}$ (ultraviolet, not visible).
   * **Destructive interference ($\Delta = (n + 1/2)\lambda$):**
     $$\lambda = \frac{5000\text{ \AA}}{n + 1/2}$$
     For $n = 0$: $\lambda = 10000\text{ \AA}$ (infrared, not visible).  
     For $n = 1$: $\lambda = \frac{5000}{1.5} \approx 3333\text{ \AA}$ (ultraviolet).
   * **Appearance:** Strong constructive interference near $5000\text{ \AA}$ with no visible cancellation gives the region a distinct blue-green appearance.

2. **At $\Delta = 40000\text{ \AA}$:**
   * **Constructive interference ($\lambda = 40000/n\text{ \AA}$):**
     * $n = 6 \implies \lambda \approx 6667\text{ \AA}$ (red)
     * $n = 7 \implies \lambda \approx 5714\text{ \AA}$ (yellow-green)
     * $n = 8 \implies \lambda = 5000\text{ \AA}$ (green)
     * $n = 9 \implies \lambda \approx 4444\text{ \AA}$ (blue)
     * $n = 10 \implies \lambda = 4000\text{ \AA}$ (violet)
   * **Destructive interference ($\lambda = 40000/(n + 1/2)\text{ \AA}$):**
     * $n = 6 \implies \lambda \approx 6154\text{ \AA}$ (orange)
     * $n = 7 \implies \lambda \approx 5333\text{ \AA}$ (green)
     * $n = 8 \implies \lambda \approx 4706\text{ \AA}$ (blue-cyan)
     * $n = 9 \implies \lambda \approx 4211\text{ \AA}$ (violet)
   * **Appearance:** Multiple constructive and destructive wavelengths alternate across the visible range, resulting in uniform white illumination.

---

#### Practice Problem 14.9 (Without Answer)
A double-slit apparatus is illuminated by white light ($380\text{ nm} \le \lambda \le 750\text{ nm}$). At a particular position on the screen, the geometric path difference is $\Delta = 1500\text{ nm}$. Identify all wavelengths in the visible spectrum that interfere destructively, and determine the dominant visible color present.

---

### 14.6 Displacement of Fringes by a Thin Plate

#### Example 14.10
**Original Question:**  
In a double-slit interference arrangement, one of the slits is covered by a thin mica sheet of refractive index $1.58$. The slit separation is $d = 0.1\text{ cm}$ and the screen distance is $D = 50\text{ cm}$. Due to the introduction of the mica sheet, the central fringe shifts by $0.2\text{ cm}$. Determine the thickness of the mica sheet.

**Answer:**  
The displacement of the fringe pattern is:
$$\Delta_{\text{shift}} = \frac{D(n - 1)t}{d}$$
Solving for the thickness $t$:
$$t = \frac{d\,\Delta_{\text{shift}}}{D(n - 1)}$$
Given:
$$d = 0.1\text{ cm}, \quad \Delta_{\text{shift}} = 0.2\text{ cm}, \quad D = 50\text{ cm}, \quad n = 1.58$$
$$t = \frac{0.1 \times 0.2}{50 \times (1.58 - 1)} = \frac{0.02}{50 \times 0.58} = \frac{0.02}{29} \approx 6.9 \times 10^{-4}\text{ cm} \approx 6.9\,\mu\text{m}$$

---

#### Practice Example 14.10 (Without Answer)
A transparent polymer film ($n = 1.48$) is placed over one slit in a Young's double-slit experiment ($d = 0.5\text{ mm}$, $D = 1.0\text{ m}$). If the central zero-order fringe shifts laterally by $4.8\text{ mm}$, calculate the thickness of the film.

---

#### Example 14.11
**Original Question:**  
In a double-slit experiment using a sodium lamp ($\lambda = 5893\text{ \AA}$), introducing a mica sheet ($n = 1.58$) causes the central fringe to move to the position previously occupied by the 11th bright fringe. Determine the thickness of the mica sheet.

**Answer:**  
The position previously occupied by the 11th bright fringe corresponds to a path difference of $11\lambda$:
$$(n - 1)t = 11\lambda$$
Solving for $t$:
$$t = \frac{11\lambda}{n - 1}$$
Given $\lambda = 5893 \times 10^{-8}\text{ cm}$ and $n = 1.58$:
$$t = \frac{11 \times 5893 \times 10^{-8}\text{ cm}}{1.58 - 1} = \frac{6.4823 \times 10^{-4}\text{ cm}}{0.58} \approx 1.12 \times 10^{-3}\text{ cm} = 11.2\,\mu\text{m}$$

---

#### Practice Example 14.11 (Without Answer)
When a glass slip ($n = 1.50$) is inserted into one arm of a double-slit apparatus ($\lambda = 500\text{ nm}$), the central bright fringe shifts to the original location of the 8th dark fringe. Calculate the thickness of the glass slip.

---

#### Problem 14.4
**Original Question:**  
In a Young’s double-hole experiment, a thin mica sheet ($n = 1.5$) is introduced in the path of one of the beams. If the central fringe shifts by $0.2\text{ cm}$, calculate the thickness of the mica sheet. Assume $d = 0.1\text{ cm}$ and $D = 50\text{ cm}$.

**Answer:**  
Using the fringe shift equation:
$$t = \frac{d\,\Delta_{\text{shift}}}{D(n - 1)}$$
Substituting the values:
$$t = \frac{(0.1\text{ cm})(0.2\text{ cm})}{(50\text{ cm})(1.5 - 1)} = \frac{0.02}{25} = 8.0 \times 10^{-4}\text{ cm} = 8.0\,\mu\text{m}$$

---

#### Practice Problem 14.4 (Without Answer)
A thin sheet of transparent quartz ($n = 1.54$) shifts the central fringe by $1.5\text{ mm}$ in an interference experiment with $d = 0.8\text{ mm}$ and $D = 120\text{ cm}$. Determine the thickness of the quartz sheet.

---

### 14.7 Lloyd’s Mirror Arrangement

#### Problem 14.2
**Original Question:**  
A point source $S$ emitting waves of frequency $\nu = 6 \times 10^{14}\text{ s}^{-1}$ is placed $1\text{ mm}$ above the horizontal plane of a Lloyd's mirror. The mirror extends from $A$ to $B$ with $PA = 5\text{ cm}$ and $AB = 5\text{ cm}$, where $P$ is the projection of $S$ onto the mirror plane. The screen $LOM$ is located $190\text{ cm}$ beyond $B$.
1. Determine the extent of the region on the screen where fringes appear, and calculate the total number of visible fringes.
2. Calculate the thickness of a mica sheet ($n = 1.5$) that must be placed in the direct beam to bring the lowest fringe to the position of the central fringe. Take $c = 3 \times 10^{10}\text{ cm/s}$.

**Answer:**  
1. **Wavelength and geometry:**
   $$\lambda = \frac{c}{\nu} = \frac{3 \times 10^{10}\text{ cm/s}}{6 \times 10^{14}\text{ s}^{-1}} = 5 \times 10^{-5}\text{ cm}$$
   The source $S$ is at height $h = 1\text{ mm} = 0.1\text{ cm}$. Its virtual image $S'$ is located $0.1\text{ cm}$ below the mirror line, so:
   $$d = 2h = 0.2\text{ cm}$$
   The screen distance from the source plane is $D = PA + AB + BO = 5 + 5 + 190 = 200\text{ cm}$.

   * Ray reflecting from edge $A$ ($x_A = 5\text{ cm}$):
     The ray from $S'(0, -0.1\text{ cm})$ through $A(5\text{ cm}, 0)$ has slope:
     $$\tan\theta_A = \frac{0.1}{5} = 0.02$$
     On the screen at $x = 200\text{ cm}$, the height is:
     $$y_A = 0.02 \times 200 = 4.0\text{ cm} \quad (\text{or relative to } A: 0.02 \times 195 = 3.9\text{ cm})$$
   * Ray reflecting from edge $B$ ($x_B = 10\text{ cm}$):
     The ray from $S'$ through $B(10\text{ cm}, 0)$ has slope:
     $$\tan\theta_B = \frac{0.1}{10} = 0.01$$
     On the screen at $x = 200\text{ cm}$, the height is:
     $$y_B = 0.01 \times 200 = 2.0\text{ cm} \quad (\text{or relative to } B: 0.01 \times 190 = 1.9\text{ cm})$$

   The region of overlap on the screen is:
   $$\text{Width} = y_A - y_B = 3.9\text{ cm} - 1.9\text{ cm} = 2.0\text{ cm}$$
   The fringe spacing is:
   $$\beta = \frac{\lambda D}{d} = \frac{(5 \times 10^{-5}\text{ cm})(200\text{ cm})}{0.2\text{ cm}} = 0.05\text{ cm}$$
   The total number of fringes in this region is:
   $$N = \frac{2.0\text{ cm}}{0.05\text{ cm}} = 40\text{ fringes}$$

2. **Thickness of the mica sheet:**
   The lowest boundary of the fringe system is at $y_B = 1.9\text{ cm}$. For this point to become the central zero-order fringe, the fringe pattern must shift by $\Delta_{\text{shift}} = 1.9\text{ cm}$. Placing the sheet in the direct beam retards that beam, shifting the pattern:
   $$\Delta_{\text{shift}} = \frac{D(n - 1)t}{d} \implies t = \frac{d\,\Delta_{\text{shift}}}{D(n - 1)}$$
   $$t = \frac{(0.2\text{ cm})(1.9\text{ cm})}{(200\text{ cm})(1.5 - 1)} = \frac{0.38}{100} = 3.8 \times 10^{-3}\text{ cm} = 38\,\mu\text{m}$$

---

#### Practice Problem 14.2 (Without Answer)
A monochromatic source emitting at $\lambda = 500\text{ nm}$ is placed $0.8\text{ mm}$ above a horizontal Lloyd's mirror. The mirror has a length of $8\text{ cm}$, starting $4\text{ cm}$ from the projection of the source. The screen is placed $1.5\text{ m}$ beyond the far edge of the mirror. Find the vertical extent of the interference region on the screen and the total number of fringes formed.

---

## Section 15: Interference by Division of Amplitude

### 15.1 Non-Reflecting Films and Multi-Layer Boundaries

#### Example 15.1
**Original Question:**  
A dielectric film of refractive index $n_f = 1.36$ is deposited in air ($n_a = 1.0$) on a glass substrate ($n_g = 1.5$). Assuming normal incidence, calculate the amplitudes of the reflected rays $a_1, a_5$ and the transmitted rays $a_4, a_7$. Explain why interference fringes in transmission exhibit poor contrast compared to reflection.

**Answer:**  
The normal-incidence reflection and transmission coefficients are:
* Air-film boundary:
  $$r_1 = \frac{n_a - n_f}{n_a + n_f} = \frac{1 - 1.36}{1 + 1.36} = -\frac{0.36}{2.36} \approx -0.153$$
  $$t_1 = \frac{2n_a}{n_a + n_f} = \frac{2}{2.36} \approx 0.847, \qquad t_1' = \frac{2n_f}{n_a + n_f} = \frac{2.72}{2.36} \approx 1.153$$
* Film-glass boundary:
  $$r_2 = \frac{n_f - n_g}{n_f + n_g} = \frac{1.36 - 1.5}{1.36 + 1.5} = -\frac{0.14}{2.86} \approx -0.049$$
  $$t_2 = \frac{2n_f}{n_f + n_g} = \frac{2.72}{2.86} \approx 0.951$$

For an incident ray of amplitude $a$:
* **Reflected rays:**
  * Ray 1 (reflected at top surface):
    $$a_1 = r_1 a = -0.153 a$$
  * Ray 5 (internally reflected at lower surface, then transmitted into air):
    $$a_5 = t_1 r_2 t_1' a \approx (0.847)(-0.049)(1.153) a \approx -0.048 a$$
    The two reflected components have comparable amplitudes ($|a_1| \approx 0.15a$, $|a_5| \approx 0.05a$ to $0.1a$), allowing for significant destructive interference and high fringe contrast.
* **Transmitted rays:**
  * Ray 4 (directly transmitted):
    $$a_4 = t_1 t_2 a \approx (0.847)(0.951) a \approx 0.806 a$$
  * Ray 7 (undergoes two internal reflections before transmitting):
    $$a_7 = t_1 (-r_2)(-r_1) t_2 a \approx a_4 (r_1 r_2) \approx (0.806)(-0.153)(-0.049) a \approx 0.006 a$$
  Because $|a_7| \ll |a_4|$ ($0.006a$ versus $0.806a$), the intensity variation $\sim 4 a_4 a_7$ is negligible compared to the background $a_4^2$, resulting in very poor fringe contrast in transmission.

---

#### Practice Example 15.1 (Without Answer)
A thin dielectric layer ($n_f = 1.40$) on glass ($n_g = 1.60$) is illuminated at normal incidence in air. Calculate the amplitude ratios $a_1/a$ and $a_5/a$ for the first two reflected components, and evaluate the fringe contrast in reflection:
$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$

---

#### Problem 15.3
**Original Question:**  
A non-reflecting coating of refractive index $n = 1.38$ is applied to glass. 
1. If the thickness is $9 \times 10^{-6}\text{ cm}$, calculate the wavelengths in the visible spectrum ($4000\text{ \AA} \le \lambda \le 7000\text{ \AA}$) for which the film is non-reflecting.
2. Repeat the calculation for a film thickness of $45 \times 10^{-6}\text{ cm}$.
3. Explain why the thinner film is preferred for antireflective coatings.

**Answer:**  
For $n_{\text{air}} < n_{\text{film}} < n_{\text{glass}}$, reflections at both interfaces undergo a $\pi$ phase shift. Destructive interference requires:
$$2 n d = \left(m + \frac{1}{2}\right)\lambda \implies \lambda_m = \frac{4 n d}{2m + 1} \quad (m = 0, 1, 2, \dots)$$

1. For $d = 9 \times 10^{-6}\text{ cm}$:
   $$4 n d = 4(1.38)(9 \times 10^{-6}\text{ cm}) = 4.968 \times 10^{-5}\text{ cm} = 4968\text{ \AA}$$
   * For $m = 0$:
     $$\lambda_0 = 4968\text{ \AA} \quad (\text{visible, cyan})$$
   * For $m = 1$:
     $$\lambda_1 = \frac{4968}{3} = 1656\text{ \AA} \quad (\text{ultraviolet})$$
   Only $\lambda = 4968\text{ \AA}$ lies in the visible range.

2. For $d = 45 \times 10^{-6}\text{ cm}$:
   $$4 n d = 4(1.38)(45 \times 10^{-6}\text{ cm}) = 2.484 \times 10^{-4}\text{ cm} = 24840\text{ \AA}$$
   * $m = 1 \implies \lambda_1 = \frac{24840}{3} = 8280\text{ \AA}$ (infrared)
   * $m = 2 \implies \lambda_2 = \frac{24840}{5} = 4968\text{ \AA}$ (visible)
   * $m = 3 \implies \lambda_3 = \frac{24840}{7} \approx 3549\text{ \AA}$ (ultraviolet)
   Only $\lambda = 4968\text{ \AA}$ lies in the visible range.

3. **Comparison:**  
   The reflectance varies with phase thickness according to $\cos\left(\frac{4\pi n d}{\lambda}\right)$. The derivative with respect to wavelength is:
   $$\left|\frac{d\delta}{d\lambda}\right| \propto d$$
   A thicker film causes the phase condition to vary much more rapidly with wavelength. Consequently, the reflectance minimum for $d = 45 \times 10^{-6}\text{ cm}$ is extremely narrow, leading to high reflectivity across most of the visible spectrum. The thin film ($d = 9 \times 10^{-6}\text{ cm}$) maintains low reflectance over a broad wavelength band.

---

#### Practice Problem 15.3 (Without Answer)
An antireflective coating with $n_f = 1.35$ is designed for $\lambda = 550\text{ nm}$ at normal incidence on a lens ($n_g = 1.55$). Calculate the minimum coating thickness, and determine the next larger thickness that satisfies the destructive interference condition at this wavelength.

---

### 15.2 Interference by a Wedge-Shaped Film

#### Problem 15.1
**Original Question:**  
A glass plate of refractive index $1.6$ is in contact with another glass plate of refractive index $1.8$ along a line, forming an air wedge with an angle of $0.5'$. Light of wavelength $5000\text{ \AA}$ is incident normally, and the film is viewed from above.
1. Calculate the fringe spacing.
2. The entire apparatus is then immersed in an oil of refractive index $1.7$. Describe the qualitative change in the fringe pattern and compute the new fringe width.

**Answer:**  
1. **In air ($n_{\text{film}} = 1.0$):**  
   The wedge angle in radians is:
   $$\alpha = 0.5' = \frac{0.5}{60} \times \frac{\pi}{180}\text{ rad} \approx 1.4544 \times 10^{-4}\text{ rad}$$
   The fringe width for an air wedge is:
   $$\beta = \frac{\lambda}{2 n_{\text{air}} \alpha} = \frac{5000 \times 10^{-8}\text{ cm}}{2(1.0)(1.4544 \times 10^{-4})} \approx 0.1719\text{ cm} \approx 1.72\text{ mm}$$

2. **In oil ($n_{\text{oil}} = 1.7$):**
   * **Refractive index condition:** The refractive indices now satisfy $n_1 < n_{\text{film}} < n_2$ ($1.6 < 1.7 < 1.8$). Light reflects at both the top (plate 1 to oil) and bottom (oil to plate 2) interfaces from an optically rarer medium toward a denser medium. Both reflections undergo an abrupt phase change of $\pi$. The relative reflection phase change is therefore:
     $$\Delta\phi = \pi - \pi = 0$$
     In an air film, only the bottom reflection undergoes a $\pi$ phase change, producing a dark fringe at the apex ($x = 0$). In the oil film, zero path difference gives constructive interference, so the contact edge becomes a bright fringe.
   * **New fringe width:**
     $$\beta' = \frac{\lambda}{2 n_{\text{oil}} \alpha} = \frac{\beta}{n_{\text{oil}}} = \frac{0.1719\text{ cm}}{1.7} \approx 0.1011\text{ cm} \approx 1.01\text{ mm}$$

---

#### Practice Problem 15.1 (Without Answer)
An air wedge formed between two optical flats has a wedge angle $\alpha = 0.8'$. When illuminated normally with light of $\lambda = 589\text{ nm}$, find the fringe spacing. What is the new fringe spacing if the air gap is filled with water ($n = 1.33$)?

---

#### Problem 15.2
**Original Question:**  
Two plane glass plates are placed on top of one another. A thin spacer is inserted at one edge to create a wedge-shaped air film. When illuminated normally with $\lambda = 6000\text{ \AA}$, $100$ interference fringes are observed per centimeter. Calculate the wedge angle.

**Answer:**  
The fringe width $\beta$ is:
$$\beta = \frac{1\text{ cm}}{100} = 0.01\text{ cm} = 10^{-4}\text{ m}$$
From the wedge formula for an air film ($n = 1$):
$$\beta = \frac{\lambda}{2\alpha} \implies \alpha = \frac{\lambda}{2\beta}$$
Given $\lambda = 6000 \times 10^{-8}\text{ cm} = 6 \times 10^{-5}\text{ cm}$:
$$\alpha = \frac{6 \times 10^{-5}\text{ cm}}{2(0.01\text{ cm})} = 3 \times 10^{-3}\text{ rad}$$
Converting to degrees:
$$\alpha = 3 \times 10^{-3} \times \frac{180^\circ}{\pi} \approx 0.172^\circ \approx 10.3'$$

---

#### Practice Problem 15.2 (Without Answer)
A wedge-shaped air film formed by two glass plates shows $40$ dark fringes over a distance of $1.6\text{ cm}$ under normal illumination by light of wavelength $\lambda = 546\text{ nm}$. Determine the wedge angle in radians and in arcminutes.

---

### 15.3 Newton’s Rings

#### Example 15.2
**Original Question:**  
In a Newton’s rings arrangement with $\lambda = 6.4 \times 10^{-5}\text{ cm}$ and a plano-convex lens of radius of curvature $R = 100\text{ cm}$:
1. Find the radii of the first and second dark rings.
2. If the lens is raised vertically by $\Delta h = \lambda/4 = 1.6 \times 10^{-5}\text{ cm}$, describe the change in the pattern at the center and calculate the new radii of the first two dark rings.

**Answer:**  
1. **Lens in contact:**  
   The radius of the $m$-th dark ring is:
   $$r_m = \sqrt{m \lambda R}$$
   * For $m = 1$:
     $$r_1 = \sqrt{(1)(6.4 \times 10^{-5}\text{ cm})(100\text{ cm})} = \sqrt{6.4 \times 10^{-3}}\text{ cm} = 0.080\text{ cm}$$
   * For $m = 2$:
     $$r_2 = \sqrt{(2)(6.4 \times 10^{-5}\text{ cm})(100\text{ cm})} = \sqrt{1.28 \times 10^{-2}}\text{ cm} \approx 0.113\text{ cm}$$

2. **Lens raised by $\Delta h = \lambda/4$:**  
   The film thickness at radial distance $r$ becomes:
   $$t(r) = \Delta h + \frac{r^2}{2R} = \frac{\lambda}{4} + \frac{r^2}{2R}$$
   The total optical path difference in reflection is:
   $$\Delta = 2t + \frac{\lambda}{2} = 2\left(\frac{\lambda}{4} + \frac{r^2}{2R}\right) + \frac{\lambda}{2} = \lambda + \frac{r^2}{R}$$
   * At the center ($r = 0$), $\Delta = \lambda$, which satisfies the condition for a maximum; the center changes from dark to bright.
   * Dark rings occur where the path difference is a half-integer multiple of $\lambda$:
     $$\lambda + \frac{r^2}{R} = \left(m + \frac{1}{2}\right)\lambda \implies \frac{r^2}{R} = \left(m - \frac{1}{2}\right)\lambda$$
     * First dark ring ($m = 1$):
       $$r_1' = \sqrt{\frac{1}{2}\lambda R} = \sqrt{\frac{1}{2}(6.4 \times 10^{-3})}\text{ cm} \approx 0.0566\text{ cm}$$
     * Second dark ring ($m = 2$):
       $$r_2' = \sqrt{\frac{3}{2}\lambda R} = \sqrt{1.5(6.4 \times 10^{-3})}\text{ cm} \approx 0.0980\text{ cm}$$
   As the lens is raised, the rings contract toward the center.

---

#### Practice Example 15.2 (Without Answer)
In a Newton's rings setup using light of $\lambda = 500\text{ nm}$ and a lens with $R = 80\text{ cm}$, calculate the radii of the first three dark rings when the lens is in optical contact with the flat plate. If the lens is raised vertically by $250\text{ nm}$, find the new radius of the innermost dark ring.

---

#### Example 15.3, Problem 15.6 & 15.7
**Original Question:**  
A Newton’s rings experiment is illuminated by light containing two closely spaced wavelengths, $\lambda_1 = 4000\text{ \AA}$ and $\lambda_2 = 4002\text{ \AA}$, with $R = 400\text{ cm}$.
1. Find the distance from the point of contact where the ring system first washes out.
2. If the lens is raised vertically, find the distance the lens must travel upward for the central region of the fringe system to first disappear.

**Answer:**  
1. **Radial position of disappearance:**  
   The rings wash out when the bright rings of $\lambda_1$ fall directly on the dark rings of $\lambda_2$:
   $$2t = m \lambda_1 = \left(m + \frac{1}{2}\right)\lambda_2$$
   $$2t\left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right) = \frac{1}{2} \implies 2t \frac{\Delta\lambda}{\lambda_1 \lambda_2} = \frac{1}{2} \implies 2t \approx \frac{\lambda^2}{2\Delta\lambda}$$
   For $\lambda \approx 4000\text{ \AA} = 4 \times 10^{-5}\text{ cm}$ and $\Delta\lambda = 2\text{ \AA} = 2 \times 10^{-8}\text{ cm}$:
   $$2t = \frac{(4 \times 10^{-5}\text{ cm})^2}{2(2 \times 10^{-8}\text{ cm})} = \frac{1.6 \times 10^{-9}}{4 \times 10^{-8}} = 0.04\text{ cm}$$
   The film thickness is related to the radial position by $2t = \frac{r^2}{R}$. Therefore:
   $$r^2 = 2t R = (0.04\text{ cm})(400\text{ cm}) = 16\text{ cm}^2 \implies r = 4.0\text{ cm}$$

2. **Vertical displacement of the lens:**  
   When the lens is raised by $t_0$, the air gap at the center is $t_0$, so the round-trip path length is $2t_0$. The fringes at the center wash out when:
   $$2t_0\left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right) = \frac{1}{2} \implies t_0 = \frac{\lambda^2}{4\Delta\lambda}$$
   $$t_0 = \frac{(4 \times 10^{-5}\text{ cm})^2}{4(2 \times 10^{-8}\text{ cm})} = \frac{1.6 \times 10^{-9}}{8 \times 10^{-8}} = 0.02\text{ cm} = 0.2\text{ mm}$$

---

#### Practice Example 15.3, Problem 15.6 & 15.7 (Without Answer)
A Newton's rings experiment uses a sodium source emitting $\lambda_1 = 589.0\text{ nm}$ and $\lambda_2 = 589.6\text{ nm}$ with a lens of radius of curvature $R = 2.0\text{ m}$. Calculate the radial distance from the center where the rings first disappear, and find the vertical displacement of the lens that causes the center of the pattern to lose visibility.

---

#### Problem 15.4
**Original Question:**  
In a Newton’s rings arrangement, the radius of curvature of the curved surface of the plano-convex lens is $100\text{ cm}$. For $\lambda = 6 \times 10^{-5}\text{ cm}$, what will be the radii of the 9th and 10th bright rings?

**Answer:**  
The condition for the $m$-th bright ring is:
$$2t = \left(m - \frac{1}{2}\right)\lambda \implies r_m^2 = \left(m - \frac{1}{2}\right)\lambda R$$
Given $\lambda = 6 \times 10^{-5}\text{ cm}$ and $R = 100\text{ cm}$:
$$\lambda R = (6 \times 10^{-5}\text{ cm})(100\text{ cm}) = 6 \times 10^{-3}\text{ cm}^2$$
* For the 9th bright ring ($m = 9$):
  $$r_9 = \sqrt{\left(9 - \frac{1}{2}\right)\lambda R} = \sqrt{8.5 \times 6 \times 10^{-3}}\text{ cm} = \sqrt{0.051}\text{ cm} \approx 0.2258\text{ cm}$$
* For the 10th bright ring ($m = 10$):
  $$r_{10} = \sqrt{\left(10 - \frac{1}{2}\right)\lambda R} = \sqrt{9.5 \times 6 \times 10^{-3}}\text{ cm} = \sqrt{0.057}\text{ cm} \approx 0.2387\text{ cm}$$

---

#### Practice Problem 15.4 (Without Answer)
In a Newton's rings setup, a plano-convex lens with $R = 150\text{ cm}$ is illuminated by light of $\lambda = 546\text{ nm}$. Find the diameters of the 5th and 12th bright rings.

---

#### Problem 15.5
**Original Question:**  
In a Newton’s rings experiment, the radius of curvature of the curved lens surface is $50\text{ cm}$. The measured radii of the 9th and 16th dark rings are $0.18\text{ cm}$ and $0.2235\text{ cm}$, respectively. Calculate the wavelength of light. Why does using $r_m^2 = m\lambda R$ directly for a single ring yield an inaccurate result?

**Answer:**  
Due to imperfect optical contact, dust particles, or localized surface deformation, the air film thickness at the center is usually nonzero ($t_0 > 0$). The true thickness at radius $r$ is:
$$t = t_0 + \frac{r^2}{2R}$$
The condition for the $m$-th dark ring becomes:
$$2\left(t_0 + \frac{r_m^2}{2R}\right) = m\lambda \implies r_m^2 = m\lambda R - 2R t_0$$
Because $t_0$ is unknown, applying $r_m^2 = m\lambda R$ directly introduces error. 

Taking the difference between two ring orders eliminates $t_0$:
$$r_{m+p}^2 - r_m^2 = p \lambda R \implies \lambda = \frac{r_{m+p}^2 - r_m^2}{p R}$$
Here $m = 9$, $m + p = 16 \implies p = 7$, $R = 50\text{ cm}$:
$$r_{16}^2 = (0.2235\text{ cm})^2 \approx 0.049952\text{ cm}^2$$
$$r_9^2 = (0.18\text{ cm})^2 = 0.032400\text{ cm}^2$$
$$r_{16}^2 - r_9^2 = 0.049952 - 0.032400 = 0.017552\text{ cm}^2$$
$$\lambda = \frac{0.017552\text{ cm}^2}{7 \times 50\text{ cm}} = \frac{0.017552}{350}\text{ cm} \approx 5.015 \times 10^{-5}\text{ cm} = 5015\text{ \AA}$$

---

#### Practice Problem 15.5 (Without Answer)
In a Newton's rings experiment with a lens of radius of curvature $R = 90\text{ cm}$, the diameters of the 4th and 14th dark rings are found to be $0.42\text{ cm}$ and $0.78\text{ cm}$, respectively. Compute the wavelength of the light used.

---

#### Problem 15.8
**Original Question:**  
An equiconvex lens of radius of curvature $50\text{ cm}$ is placed on top of another equiconvex lens of radius of curvature $100\text{ cm}$. The air film formed between them produces Newton's rings. Calculate the radii of the dark rings for $\lambda = 6000\text{ \AA}$.

**Answer:**  
Let the upper surface have radius $R_1 = 50\text{ cm}$ and the lower surface have radius $R_2 = 100\text{ cm}$. The air gap thickness at radial distance $r$ from the contact point is:
$$t(r) = t_1(r) + t_2(r) \approx \frac{r^2}{2R_1} + \frac{r^2}{2R_2} = \frac{r^2}{2}\left(\frac{1}{R_1} + \frac{1}{R_2}\right) = \frac{r^2}{2 R_{\text{eff}}}$$
The effective radius of curvature is:
$$\frac{1}{R_{\text{eff}}} = \frac{1}{R_1} + \frac{1}{R_2} = \frac{1}{50} + \frac{1}{100} = \frac{3}{100}\text{ cm}^{-1} \implies R_{\text{eff}} = \frac{100}{3}\text{ cm}$$

The condition for dark rings is:
$$r_m^2 = m \lambda R_{\text{eff}}$$
For $\lambda = 6000 \times 10^{-8}\text{ cm} = 6 \times 10^{-5}\text{ cm}$:
$$r_m = \sqrt{m \left(6 \times 10^{-5}\text{ cm}\right)\left(\frac{100}{3}\text{ cm}\right)} = \sqrt{m \times 2 \times 10^{-3}}\text{ cm} = \sqrt{0.002 m}\text{ cm} \approx 0.0447\sqrt{m}\text{ cm}$$

---

#### Practice Problem 15.8 (Without Answer)
A convex lens surface with radius of curvature $R_1 = 80\text{ cm}$ rests on a concave lens surface with radius of curvature $R_2 = 120\text{ cm}$. Derive the expression for the effective radius of curvature of the enclosed air film, and determine the radius of the 5th dark Newton's ring for $\lambda = 589\text{ nm}$.

---

### 15.4 Michelson Interferometer

#### Example 15.4 & Problem 15.10
**Original Question:**  
1. In a Michelson interferometer illuminated by a sodium lamp ($\lambda \approx 5890\text{ \AA}$), the distance traversed by the movable mirror between two successive positions of fringe disappearance is $0.289\text{ mm}$. Calculate the difference in the wavelengths of the $D_1$ and $D_2$ lines.
2. The experiment is repeated with a source containing two wavelengths, $\lambda_1 = 4882\text{ \AA}$ and $\lambda_2 = 4886\text{ \AA}$. Calculate the distance through which the mirror must be moved between consecutive disappearances.

**Answer:**  
1. Translating the mirror by $d_0$ changes the optical path by $\Delta = 2d_0$. Successive disappearances occur when:
   $$2d_0 \left(\frac{1}{\lambda_1} - \frac{1}{\lambda_2}\right) = 1 \implies 2d_0 \frac{\Delta\lambda}{\lambda^2} \approx 1 \implies \Delta\lambda \approx \frac{\lambda^2}{2d_0}$$
   Given $d_0 = 0.289\text{ mm}$ and $\lambda = 5890\text{ \AA} = 5.89 \times 10^{-4}\text{ mm}$:
   $$\Delta\lambda = \frac{(5.89 \times 10^{-4}\text{ mm})^2}{2 \times 0.289\text{ mm}} = \frac{3.469 \times 10^{-7}\text{ mm}^2}{0.578\text{ mm}} \approx 6.0 \times 10^{-7}\text{ mm} = 6.0\text{ \AA}$$

2. For $\lambda_1 = 4882\text{ \AA}$, $\lambda_2 = 4886\text{ \AA}$:
   $$\bar{\lambda} \approx 4884\text{ \AA} = 4.884 \times 10^{-4}\text{ mm}$$
   $$\Delta\lambda = 4\text{ \AA} = 4.0 \times 10^{-7}\text{ mm}$$
   The mirror displacement between consecutive disappearances is:
   $$d_0 = \frac{\bar{\lambda}^2}{2\Delta\lambda} = \frac{(4.884 \times 10^{-4}\text{ mm})^2}{2(4.0 \times 10^{-7}\text{ mm})} = \frac{2.385 \times 10^{-7}}{8.0 \times 10^{-7}}\text{ mm} \approx 0.298\text{ mm}$$

---

#### Practice Example 15.4 & Problem 15.10 (Without Answer)
A Michelson interferometer is illuminated by light containing two spectral components with an average wavelength $\bar{\lambda} = 546.1\text{ nm}$. The interference fringes undergo periodic variations in visibility, with successive minima separated by a mirror displacement of $0.185\text{ mm}$. Find the spectral wavelength difference $\Delta\lambda$.

---

#### Problem 15.9
**Original Question:**  
In a Michelson interferometer, moving one of the mirrors by a distance of $0.08\text{ mm}$ causes $250$ fringes to cross the field of view. Calculate the wavelength of the light.

**Answer:**  
The displacement $d_0$ of the mirror is related to the number of fringe shifts $N$ by:
$$2d_0 = N\lambda \implies \lambda = \frac{2d_0}{N}$$
Given $d_0 = 0.08\text{ mm} = 8 \times 10^{-3}\text{ cm}$ and $N = 250$:
$$\lambda = \frac{2(8 \times 10^{-3}\text{ cm})}{250} = \frac{1.6 \times 10^{-2}\text{ cm}}{250} = 6.4 \times 10^{-5}\text{ cm} = 6400\text{ \AA}$$

---

#### Practice Problem 15.9 (Without Answer)
When the movable mirror of a Michelson interferometer is translated by $0.045\text{ mm}$, $150$ circular fringes cross the center of the field of view. Determine the wavelength of the illumination.

---

#### Problem 15.11
**Original Question:**  
In a Michelson interferometer experiment with $\lambda = 5 \times 10^{-5}\text{ cm}$:
1. Calculate the angular positions $\theta$ of the bright rings for an arm separation $d = 5 \times 10^{-3}\text{ cm}$.
2. If $d$ is decreased to $4.9975 \times 10^{-3}\text{ cm}$, the ring corresponding to $m = 200$ collapses and disappears at the center. What are the new angular radii for the remaining bright rings?

**Answer:**  
1. The condition for a bright ring at angle $\theta$ is:
   $$2d \cos\theta = \left(m + \frac{1}{2}\right)\lambda \quad \text{or} \quad 2d \cos\theta = m'\lambda$$
   Following Eq. (15.73) for destructive and constructive rings with a dielectric beam splitter phase shift, the maximum order at the center ($\theta = 0$) for $d = 5 \times 10^{-3}\text{ cm}$ is:
   $$m_0 = \frac{2d}{\lambda} = \frac{2(5 \times 10^{-3}\text{ cm})}{5 \times 10^{-5}\text{ cm}} = 200$$
   For the central spot to be dark, the condition is $2d \cos\theta = m\lambda$. Bright rings satisfy:
   $$2d \cos\theta = \left(m - \frac{1}{2}\right)\lambda \implies \cos\theta_m = \frac{m - 1/2}{m_0} = \frac{m - 0.5}{200}$$
   * For the first bright ring ($m = 200$):
     $$\cos\theta_1 = \frac{199.5}{200} = 0.9975 \implies \theta_1 \approx \arccos(0.9975) \approx 4.05^\circ$$
   * For the second bright ring ($m = 199$):
     $$\cos\theta_2 = \frac{198.5}{200} = 0.9925 \implies \theta_2 \approx \arccos(0.9925) \approx 7.02^\circ$$

2. When $d$ is reduced to $d' = 4.9975 \times 10^{-3}\text{ cm}$:
   $$m_0' = \frac{2d'}{\lambda} = \frac{2(4.9975 \times 10^{-3}\text{ cm})}{5 \times 10^{-5}\text{ cm}} = 199.9$$
   Because $m_0' < 200$, the $m = 200$ fringe has collapsed into the center. The remaining bright rings have angular positions given by:
   $$\cos\theta_m' = \frac{(m - 0.5)\lambda}{2d'} = \frac{m - 0.5}{199.9}$$
   * For $m = 199$:
     $$\cos\theta' = \frac{198.5}{199.9} \approx 0.992996 \implies \theta' \approx 6.78^\circ$$

---

#### Practice Problem 15.11 (Without Answer)
A Michelson interferometer illuminated by $\lambda = 600\text{ nm}$ has an initial path difference $2d = 0.12\text{ mm}$ ($m_0 = 200$). Find the angular radius $\theta$ of the first three bright fringes of equal inclination. Then, compute the new angular radius of the first bright fringe after $d$ is reduced by $1.2\,\mu\text{m}$.
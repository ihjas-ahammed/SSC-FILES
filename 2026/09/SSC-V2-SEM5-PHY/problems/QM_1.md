# Chapter 1: Problems, Examples, and Practice Questions

---

## 1.2 The Statistical Interpretation

### Example 1.1: Electron Interference

#### Original Question
Particles such as electrons possess a wave nature encoded in the wave function $\Psi$. How can this wave behavior be demonstrated in the laboratory, and how does the statistical interpretation reconcile particle detection with the continuous interference pattern?

#### Solution
1. **Experimental Demonstration:** 
   The wave nature of particles is demonstrated through two-slit interference (analogous to Young's experiment). Because the de Broglie wavelength of an electron ($\lambda = h/p$) is extremely small, closely spaced slits are required. This is achieved experimentally using the atomic crystal planes of a solid (Davisson–Germer experiment) or micro-fabricated electrostatic biprisms.
2. **Reconciliation via Statistical Interpretation:**
   When the beam intensity is reduced so that only one electron passes through the apparatus at a time:
   - Each electron is detected as an localized event (a single dot on a scintillation screen or detector). Its trajectory cannot be predicted deterministically; only the probability density $|\Psi(x, t)|^2$ is known.
   - Each electron wave function passes through both slits simultaneously, interfering with itself.
   - Accumulating a large number of independent single-particle arrivals reproduces the continuous fringe pattern dictated by $|\Psi(x, t)|^2$.

---

#### Practice Question 1.1 (Unsolved)
A monoenergetic beam of thermal neutrons ($\lambda = 0.18\text{ nm}$) is directed at a double slit with separation $d = 1.0\ \mu\text{m}$. 
1. Explain how the spatial pattern recorded on a position-sensitive detector changes when the incident flux is lowered from $10^{6}\text{ neutrons/s}$ to $1\text{ neutron/minute}$.
2. If a non-destructive detector is placed at one slit to determine which path the neutron takes, describe what happens to the resulting accumulation pattern on the screen.

---

## 1.3 Probability

### 1.3.1 Discrete Variables

---

### In-Text Age Distribution (Questions 1–5)

#### Original Question
A sample contains fourteen individuals whose ages $j$ are distributed as follows:
- 1 person aged 14: $N(14) = 1$
- 1 person aged 15: $N(15) = 1$
- 3 people aged 16: $N(16) = 3$
- 2 people aged 22: $N(22) = 2$
- 2 people aged 24: $N(24) = 2$
- 5 people aged 25: $N(25) = 5$

1. If an individual is selected at random, what is the probability of selecting someone aged 15?
2. What is the most probable age?
3. What is the median age?
4. What is the average (mean) age $\langle j \rangle$?
5. What is the average of the squares of the ages $\langle j^2 \rangle$?

#### Solution
1. **Probability of Age 15:**
   Total individuals: $N = \sum N(j) = 1 + 1 + 3 + 2 + 2 + 5 = 14$.
   $$P(15) = \frac{N(15)}{N} = \frac{1}{14}$$

2. **Most Probable Age (Mode):**
   The value of $j$ with the highest frequency is $j = 25$ ($N(25) = 5$).

3. **Median Age:**
   Arranging all 14 ages in ascending order:
   $$14, 15, 16, 16, 16, 22, 22 \quad \vert \quad 24, 24, 25, 25, 25, 25, 25$$
   The median lies between the 7th value (22) and the 8th value (24):
   $$\text{Median} = \frac{22 + 24}{2} = 23$$

4. **Average Age $\langle j \rangle$:**
   $$\langle j \rangle = \sum j P(j) = \frac{1(14) + 1(15) + 3(16) + 2(22) + 2(24) + 5(25)}{14} = \frac{294}{14} = 21$$

5. **Average of the Squares $\langle j^2 \rangle$:**
   $$\langle j^2 \rangle = \sum j^2 P(j) = \frac{1(14^2) + 1(15^2) + 3(16^2) + 2(22^2) + 2(24^2) + 5(25^2)}{14}$$
   $$\langle j^2 \rangle = \frac{196 + 225 + 768 + 968 + 1152 + 3125}{14} = \frac{6434}{14} = \frac{3217}{7} \approx 459.57$$

---

#### Practice Question 1.2 (Unsolved)
A collection of 20 laboratory particles has the following discrete energy values $E_j$ (in arbitrary units):
- 2 particles with $E = 1$
- 5 particles with $E = 2$
- 7 particles with $E = 4$
- 4 particles with $E = 5$
- 2 particles with $E = 8$

1. Determine the probability distribution $P(E_j)$.
2. Identify the mode, median, and mean $\langle E \rangle$.
3. Compute $\langle E^2 \rangle$.

---

### Problem 1.1

#### Original Question
For the 14-person age distribution given above:
1. Compute $\langle j^2 \rangle$ and $\langle j \rangle^2$.
2. Determine the deviation $\Delta j \equiv j - \langle j \rangle$ for each age $j$, and use $\sigma^2 = \langle (\Delta j)^2 \rangle = \sum (\Delta j)^2 P(j)$ to calculate the standard deviation $\sigma$.
3. Verify that $\sigma = \sqrt{\langle j^2 \rangle - \langle j \rangle^2}$.

#### Solution
1. **Values of $\langle j^2 \rangle$ and $\langle j \rangle^2$:**
   $$\langle j \rangle = 21 \implies \langle j \rangle^2 = 21^2 = 441$$
   $$\langle j^2 \rangle = \frac{3217}{7} \approx 459.57$$

2. **Standard Deviation via Deviations:**
   Compute $\Delta j = j - 21$ and $(\Delta j)^2$:
   - $j = 14$: $\Delta j = -7$, $(\Delta j)^2 = 49$, $N(14) = 1$
   - $j = 15$: $\Delta j = -6$, $(\Delta j)^2 = 36$, $N(15) = 1$
   - $j = 16$: $\Delta j = -5$, $(\Delta j)^2 = 25$, $N(16) = 3$
   - $j = 22$: $\Delta j = +1$, $(\Delta j)^2 = 1$, $N(22) = 2$
   - $j = 24$: $\Delta j = +3$, $(\Delta j)^2 = 9$, $N(24) = 2$
   - $j = 25$: $\Delta j = +4$, $(\Delta j)^2 = 16$, $N(25) = 5$

   Calculate the variance $\sigma^2$:
   $$\sigma^2 = \sum (\Delta j)^2 P(j) = \frac{1(49) + 1(36) + 3(25) + 2(1) + 2(9) + 5(16)}{14}$$
   $$\sigma^2 = \frac{49 + 36 + 75 + 2 + 18 + 80}{14} = \frac{260}{14} = \frac{130}{7} \approx 18.571$$
   $$\sigma = \sqrt{\frac{130}{7}} \approx 4.31$$

3. **Check Theorem:**
   $$\sigma = \sqrt{\langle j^2 \rangle - \langle j \rangle^2} = \sqrt{\frac{3217}{7} - 441} = \sqrt{\frac{3217 - 3087}{7}} = \sqrt{\frac{130}{7}} \approx 4.31$$
   The two calculations agree identically.

---

#### Practice Question 1.3 (Unsolved)
For the discrete energy distribution in Practice Question 1.2:
1. Determine $\Delta E_j$ for each energy level and use $\sigma_E^2 = \sum (\Delta E_j)^2 P(E_j)$ to find the standard deviation $\sigma_E$.
2. Verify that $\sigma_E = \sqrt{\langle E^2 \rangle - \langle E \rangle^2}$.

---

### Problem 1.10

#### Original Question
Consider the first 25 digits in the decimal expansion of $\pi$:
$$3,\ 1,\ 4,\ 1,\ 5,\ 9,\ 2,\ 6,\ 5,\ 3,\ 5,\ 8,\ 9,\ 7,\ 9,\ 3,\ 2,\ 3,\ 8,\ 4,\ 6,\ 2,\ 6,\ 4,\ 3$$
1. If one digit is chosen at random from this set, what is the probability distribution $P(j)$ for each of the 10 digits ($j \in \{0, 1, \dots, 9\}$)?
2. What are the most probable digit, the median digit, and the average value?
3. Calculate the standard deviation $\sigma$.

#### Solution
1. **Frequencies $N(j)$ and Probabilities $P(j) = N(j)/25$:**
   - $j = 0: N(0) = 0 \implies P(0) = 0$
   - $j = 1: N(1) = 2 \implies P(1) = 2/25$
   - $j = 2: N(2) = 3 \implies P(2) = 3/25$
   - $j = 3: N(3) = 5 \implies P(3) = 5/25 = 1/5$
   - $j = 4: N(4) = 3 \implies P(4) = 3/25$
   - $j = 5: N(5) = 3 \implies P(5) = 3/25$
   - $j = 6: N(6) = 3 \implies P(6) = 3/25$
   - $j = 7: N(7) = 1 \implies P(7) = 1/25$
   - $j = 8: N(8) = 2 \implies P(8) = 2/25$
   - $j = 9: N(9) = 3 \implies P(9) = 3/25$
   Total check: $0 + 2 + 3 + 5 + 3 + 3 + 3 + 1 + 2 + 3 = 25$.

2. **Mode, Median, Mean:**
   - **Mode:** $j = 3$ ($N(3) = 5$).
   - **Median:** Sorting the 25 digits, the 13th entry is the median.
     Cumulative counts: through $j=2 \implies 5$ entries; through $j=3 \implies 10$ entries; through $j=4 \implies 13$ entries.
     The 13th entry is $4$, so $\text{Median} = 4$.
   - **Average:**
     $$\langle j \rangle = \frac{0(0) + 1(2) + 2(3) + 3(5) + 4(3) + 5(3) + 6(3) + 7(1) + 8(2) + 9(3)}{25}$$
     $$\langle j \rangle = \frac{0 + 2 + 6 + 15 + 12 + 15 + 18 + 7 + 16 + 27}{25} = \frac{118}{25} = 4.72$$

3. **Standard Deviation:**
   $$\langle j^2 \rangle = \frac{1^2(2) + 2^2(3) + 3^2(5) + 4^2(3) + 5^2(3) + 6^2(3) + 7^2(1) + 8^2(2) + 9^2(3)}{25}$$
   $$\langle j^2 \rangle = \frac{2 + 12 + 45 + 48 + 75 + 108 + 49 + 128 + 243}{25} = \frac{710}{25} = 28.4$$
   $$\sigma = \sqrt{\langle j^2 \rangle - \langle j \rangle^2} = \sqrt{28.4 - (4.72)^2} = \sqrt{28.4 - 22.2784} = \sqrt{6.1216} \approx 2.474$$

---

#### Practice Question 1.4 (Unsolved)
Consider the first 20 digits in the decimal expansion of Euler's number $e$:
$$2,\ 7,\ 1,\ 8,\ 2,\ 8,\ 1,\ 8,\ 2,\ 8,\ 4,\ 5,\ 9,\ 0,\ 4,\ 5,\ 2,\ 3,\ 5,\ 3$$
1. Find the probability distribution $P(j)$ for the digits $0$ through $9$.
2. Determine the mode, median, and mean $\langle j \rangle$.
3. Compute the standard deviation $\sigma$.

---

### 1.3.2 Continuous Variables

---

### Example 1.2: The Falling Rock

#### Original Question
A rock is dropped from rest off a cliff of height $h$ and falls freely under constant gravity $g$ (neglecting air resistance) such that $x(t) = \frac{1}{2}gt^2$, where $x$ is the distance fallen. A million photographs are taken at random times during its fall.
1. Determine the probability density $\rho(x)$ of finding the rock at distance $x \in [0, h]$.
2. Verify that $\rho(x)$ is properly normalized.
3. Compute the time-average distance $\langle x \rangle$.

#### Solution
1. **Probability Density $\rho(x)$:**
   Total time of fall: $T = \sqrt{2h/g}$.
   Since photos are taken at uniformly distributed random times $t$, the probability of a photograph occurring in time interval $[t, t + dt]$ is:
   $$dP = \frac{dt}{T}$$
   Using $x = \frac{1}{2}gt^2 \implies dx = gt\, dt \implies dt = \frac{dx}{gt} = \frac{dx}{\sqrt{2gx}}$:
   $$\rho(x)dx = \frac{dt}{T} = \frac{dx/\sqrt{2gx}}{\sqrt{2h/g}} = \frac{1}{2\sqrt{hx}} \, dx \implies \rho(x) = \frac{1}{2\sqrt{hx}} \quad (0 \le x \le h)$$

2. **Normalization:**
   $$\int_0^h \rho(x) \, dx = \frac{1}{2\sqrt{h}} \int_0^h x^{-1/2} \, dx = \frac{1}{2\sqrt{h}} \left[ 2x^{1/2} \right]_0^h = \frac{1}{2\sqrt{h}} (2\sqrt{h}) = 1$$

3. **Average Distance $\langle x \rangle$:**
   $$\langle x \rangle = \int_0^h x \rho(x) \, dx = \frac{1}{2\sqrt{h}} \int_0^h x^{1/2} \, dx = \frac{1}{2\sqrt{h}} \left[ \frac{2}{3}x^{3/2} \right]_0^h = \frac{h}{3}$$

---

#### Practice Question 1.5 (Unsolved)
A particle launched horizontally with initial speed $v_0$ is subjected to a constant resistive deceleration $a$, coming to rest at a stopping distance $L = \frac{v_0^2}{2a}$ according to $x(t) = v_0 t - \frac{1}{2}at^2$. Snapshots are taken at uniformly distributed random times during its motion.
1. Construct the spatial probability density $\rho(x)$ for $0 \le x \le L$.
2. Check that $\rho(x)$ is normalized.
3. Calculate the average position $\langle x \rangle$.

---

### Problem 1.2

#### Original Question
For the falling rock distribution of Example 1.2:
1. Find the standard deviation $\sigma$ of the distribution.
2. What is the probability that a photograph selected at random shows a distance $x$ more than one standard deviation away from the mean?

#### Solution
1. **Standard Deviation:**
   $$\langle x^2 \rangle = \int_0^h x^2 \rho(x) \, dx = \frac{1}{2\sqrt{h}} \int_0^h x^{3/2} \, dx = \frac{1}{2\sqrt{h}} \left[ \frac{2}{5} x^{5/2} \right]_0^h = \frac{h^2}{5}$$
   $$\sigma^2 = \langle x^2 \rangle - \langle x \rangle^2 = \frac{h^2}{5} - \left(\frac{h}{3}\right)^2 = \frac{h^2}{5} - \frac{h^2}{9} = \frac{4}{45}h^2$$
   $$\sigma = \frac{2}{\sqrt{45}}h = \frac{2}{3\sqrt{5}}h \approx 0.2981 h$$

2. **Probability Outside $[\langle x \rangle - \sigma, \langle x \rangle + \sigma]$:**
   Boundaries:
   $$x_1 = \langle x \rangle - \sigma = \left(\frac{1}{3} - \frac{2}{3\sqrt{5}}\right)h = \frac{\sqrt{5}-2}{3\sqrt{5}}h \approx 0.03518 h$$
   $$x_2 = \langle x \rangle + \sigma = \left(\frac{1}{3} + \frac{2}{3\sqrt{5}}\right)h = \frac{\sqrt{5}+2}{3\sqrt{5}}h \approx 0.63148 h$$
   Probability within one standard deviation:
   $$P_{\text{within}} = \int_{x_1}^{x_2} \frac{1}{2\sqrt{hx}} \, dx = \frac{\sqrt{x_2} - \sqrt{x_1}}{\sqrt{h}} = \sqrt{\frac{\sqrt{5}+2}{3\sqrt{5}}} - \sqrt{\frac{\sqrt{5}-2}{3\sqrt{5}}} \approx 0.79465 - 0.18756 \approx 0.6071$$
   Probability outside this range:
   $$P_{\text{outside}} = 1 - P_{\text{within}} \approx 1 - 0.6071 = 0.3929 \quad (\approx 39.3\%)$$

---

#### Practice Question 1.6 (Unsolved)
For the decelerating particle distribution in Practice Question 1.5:
1. Compute $\langle x^2 \rangle$ and the standard deviation $\sigma$.
2. Calculate the probability of detecting the particle within one standard deviation of $\langle x \rangle$.

---

### Problem 1.3

#### Original Question
Consider the Gaussian distribution:
$$\rho(x) = A e^{-\lambda(x - a)^2}$$
where $A$, $a$, and $\lambda$ are positive real constants.
1. Determine the normalization constant $A$.
2. Find $\langle x \rangle$, $\langle x^2 \rangle$, and $\sigma$.
3. Sketch the distribution $\rho(x)$.

#### Solution
1. **Normalization:**
   $$\int_{-\infty}^{+\infty} \rho(x) \, dx = A \int_{-\infty}^{+\infty} e^{-\lambda (x-a)^2} \, dx = A \sqrt{\frac{\pi}{\lambda}} = 1 \implies A = \sqrt{\frac{\lambda}{\pi}}$$

2. **Expectation Values:**
   - Change of variables $u = x - a \implies x = u + a$:
     $$\langle x \rangle = \sqrt{\frac{\lambda}{\pi}} \int_{-\infty}^{+\infty} (u + a) e^{-\lambda u^2} \, du = \sqrt{\frac{\lambda}{\pi}} \left[ 0 + a\sqrt{\frac{\pi}{\lambda}} \right] = a$$
   - Second moment:
     $$\langle x^2 \rangle = \langle (u + a)^2 \rangle = \langle u^2 \rangle + 2a\langle u \rangle + a^2$$
     $$\langle u^2 \rangle = \sqrt{\frac{\lambda}{\pi}} \int_{-\infty}^{+\infty} u^2 e^{-\lambda u^2} \, du = \sqrt{\frac{\lambda}{\pi}} \left( \frac{1}{2\lambda} \sqrt{\frac{\pi}{\lambda}} \right) = \frac{1}{2\lambda}$$
     $$\langle x^2 \rangle = a^2 + \frac{1}{2\lambda}$$
   - Standard deviation:
     $$\sigma = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = \sqrt{\frac{1}{2\lambda}} = \frac{1}{\sqrt{2\lambda}}$$

3. **Sketch:**
   A symmetric bell curve centered at $x = a$ with peak height $\rho(a) = \sqrt{\lambda/\pi}$, inflection points at $x = a \pm \frac{1}{\sqrt{2\lambda}}$, and asymptotic decay to zero as $x \to \pm\infty$.

---

#### Practice Question 1.7 (Unsolved)
A continuous random variable has the Rayleigh probability density:
$$\rho(x) = C x e^{-\beta x^2} \quad (x \ge 0)$$
with $\rho(x) = 0$ for $x < 0$, where $\beta > 0$.
1. Determine the normalization constant $C$ in terms of $\beta$.
2. Calculate $\langle x \rangle$, $\langle x^2 \rangle$, and the standard deviation $\sigma$.

---

### Problem 1.11

#### Original Question
A classical particle of mass $m$ and total energy $E$ moves frictionlessly in a potential well $V(x)$ between classical turning points $a$ and $b$ ($E = V(a) = V(b)$).
1. Use conservation of energy to express the speed $v(x)$ in terms of $E$ and $V(x)$.
2. For the simple harmonic oscillator $V(x) = \frac{1}{2}kx^2$, determine the classical probability density $\rho(x)$ and confirm its normalization.
3. For this oscillator, calculate $\langle x \rangle$, $\langle x^2 \rangle$, and $\sigma_x$.

#### Solution
1. **Speed $v(x)$:**
   $$E = \frac{1}{2}m v^2 + V(x) \implies v(x) = \sqrt{\frac{2}{m}\big(E - V(x)\big)}$$

2. **Harmonic Oscillator $\rho(x)$:**
   Turning points occur where $E = \frac{1}{2}kx_0^2 \implies x_0 = \sqrt{\frac{2E}{k}}$.
   $$v(x) = \sqrt{\frac{k}{m}(x_0^2 - x^2)} = \omega \sqrt{x_0^2 - x^2}, \quad \text{where } \omega = \sqrt{\frac{k}{m}}$$
   Transit time from $-x_0$ to $+x_0$:
   $$T = \int_{-x_0}^{x_0} \frac{dx}{v(x)} = \frac{1}{\omega}\int_{-x_0}^{x_0} \frac{dx}{\sqrt{x_0^2 - x^2}} = \frac{1}{\omega} \left[ \arcsin\left(\frac{x}{x_0}\right) \right]_{-x_0}^{x_0} = \frac{\pi}{\omega}$$
   Probability density:
   $$\rho(x) = \frac{1}{v(x)T} = \frac{1}{\pi \sqrt{x_0^2 - x^2}} \quad (-x_0 < x < x_0)$$
   Normalization check:
   $$\int_{-x_0}^{x_0} \frac{dx}{\pi \sqrt{x_0^2 - x^2}} = \frac{1}{\pi} [\pi] = 1$$

3. **Expectation Values:**
   - $\langle x \rangle = \int_{-x_0}^{x_0} \frac{x}{\pi \sqrt{x_0^2 - x^2}} \, dx = 0$ (odd integrand over symmetric limits).
   - $\langle x^2 \rangle = \int_{-x_0}^{x_0} \frac{x^2}{\pi \sqrt{x_0^2 - x^2}} \, dx$. Substituting $x = x_0 \sin\theta$:
     $$\langle x^2 \rangle = \frac{x_0^2}{\pi} \int_{-\pi/2}^{\pi/2} \sin^2\theta \, d\theta = \frac{x_0^2}{2} = \frac{E}{k}$$
   - Standard deviation:
     $$\sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = \frac{x_0}{\sqrt{2}} = \sqrt{\frac{E}{k}}$$

---

#### Practice Question 1.8 (Unsolved)
A classical particle of mass $m$ and energy $E$ moves in the linear potential $V(x) = F_0 |x|$.
1. Find the turning points $\pm x_0$ in terms of $E$ and $F_0$.
2. Compute the classical speed $v(x)$ and transit time $T$ between turning points.
3. Determine the probability density $\rho(x)$, and calculate $\langle x \rangle$ and $\sigma_x$.

---

### Problem 1.12

#### Original Question
For the classical harmonic oscillator of Problem 1.11:
1. Determine the classical momentum probability density $\rho(p)$ for $p \in [-\sqrt{2mE}, +\sqrt{2mE}]$.
2. Calculate $\langle p \rangle$, $\langle p^2 \rangle$, and $\sigma_p$.
3. Compute the uncertainty product $\sigma_x \sigma_p$. Discuss the classical limit ($E \to 0$) versus the quantum ground state where $E \ge \frac{1}{2}\hbar \omega$.

#### Solution
1. **Momentum Distribution $\rho(p)$:**
   With $x(t) = x_0 \sin(\omega t)$, momentum is $p(t) = m \dot{x}(t) = p_0 \cos(\omega t)$ where $p_0 = m\omega x_0 = \sqrt{2mE}$. 
   By dynamical symmetry with the position coordinate:
   $$\rho(p) = \frac{1}{\pi \sqrt{p_0^2 - p^2}} \quad (-p_0 < p < p_0)$$

2. **Moments of Momentum:**
   - $\langle p \rangle = 0$ by antisymmetry of the integrand.
   - $\langle p^2 \rangle = \int_{-p_0}^{p_0} \frac{p^2}{\pi \sqrt{p_0^2 - p^2}} \, dp = \frac{p_0^2}{2} = mE$.
   - $\sigma_p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2} = \sqrt{mE} = \frac{p_0}{\sqrt{2}}$.

3. **Uncertainty Product:**
   $$\sigma_x \sigma_p = \left(\sqrt{\frac{E}{k}}\right) \left(\sqrt{mE}\right) = E \sqrt{\frac{m}{k}} = \frac{E}{\omega}$$
   - Classically, as $E \to 0$, $\sigma_x \sigma_p \to 0$; a classical particle can rest motionless at the minimum of the potential.
   - In quantum mechanics, the minimum energy is bounded below by $E_0 = \frac{1}{2}\hbar\omega$, enforcing:
     $$\sigma_x \sigma_p = \frac{\frac{1}{2}\hbar\omega}{\omega} = \frac{\hbar}{2}$$
     which is the minimum bound of Heisenberg's uncertainty relation.

---

#### Practice Question 1.9 (Unsolved)
A particle of mass $m$ bounces elastically between two rigid walls at $x = 0$ and $x = L$ with fixed kinetic energy $E$.
1. Derive the classical position distribution $\rho(x)$ and momentum distribution $\rho(p)$.
2. Calculate $\sigma_x$ and $\sigma_p$.
3. Evaluate the classical product $\sigma_x \sigma_p$.

---

## 1.4 Normalization

---

### Problem 1.4

#### Original Question
At time $t = 0$, a particle is represented by the piecewise linear wave function:
$$\Psi(x, 0) = \begin{cases} 
A \frac{x}{a}, & 0 \le x \le a \\ 
A \frac{b - x}{b - a}, & a \le x \le b \\ 
0, & \text{otherwise} 
\end{cases}$$
where $A$, $a$, and $b$ are positive constants with $b > a$.
1. Normalize $\Psi(x, 0)$ by finding $A$ in terms of $a$ and $b$.
2. Sketch $\Psi(x, 0)$ as a function of $x$.
3. At $t = 0$, where is the particle most likely to be found?
4. What is the probability of finding the particle to the left of $x = a$? Check the limits $b = a$ and $b = 2a$.
5. Determine the expectation value $\langle x \rangle$.

#### Solution
1. **Normalization:**
   $$\int_{-\infty}^{+\infty} |\Psi(x, 0)|^2 \, dx = A^2 \left[ \int_0^a \frac{x^2}{a^2} \, dx + \int_a^b \frac{(b - x)^2}{(b - a)^2} \, dx \right] = 1$$
   - First integral: $\int_0^a \frac{x^2}{a^2} dx = \frac{a}{3}$.
   - Second integral (setting $u = b - x$): $\int_0^{b-a} \frac{u^2}{(b-a)^2} du = \frac{b - a}{3}$.
   $$A^2 \left( \frac{a}{3} + \frac{b - a}{3} \right) = A^2 \frac{b}{3} = 1 \implies A = \sqrt{\frac{3}{b}}$$

2. **Sketch:**
   A triangular profile starting at $(0, 0)$, rising linearly to a peak $(a, \sqrt{3/b})$, and falling linearly to $(b, 0)$, being zero everywhere else.

3. **Most Likely Position:**
   The probability density $|\Psi|^2$ reaches its maximum value at $x = a$.

4. **Probability to the Left of $a$:**
   $$P(x < a) = \int_0^a |\Psi(x, 0)|^2 \, dx = A^2 \left(\frac{a}{3}\right) = \left(\frac{3}{b}\right)\left(\frac{a}{3}\right) = \frac{a}{b}$$
   - If $b \to a$, the distribution collapses to a spike at $a$ and $P \to 1$.
   - If $b = 2a$, the triangle is symmetric about $x = a$, giving $P = \frac{a}{2a} = \frac{1}{2}$.

5. **Expectation Value $\langle x \rangle$:**
   $$\langle x \rangle = \int_0^b x |\Psi|^2 \, dx = \frac{3}{b a^2} \int_0^a x^3 \, dx + \frac{3}{b(b-a)^2} \int_a^b x(b - x)^2 \, dx$$
   - First term: $\frac{3}{b a^2} \left(\frac{a^4}{4}\right) = \frac{3a^2}{4b}$.
   - Second term: Let $u = b - x \implies x = b - u$:
     $$\int_a^b x(b-x)^2 dx = \int_0^{b-a} (b - u) u^2 du = \frac{b(b-a)^3}{3} - \frac{(b-a)^4}{4} = \frac{(b-a)^3(b + 3a)}{12}$$
     $$\frac{3}{b(b-a)^2} \left[ \frac{(b-a)^3(b + 3a)}{12} \right] = \frac{(b-a)(b + 3a)}{4b} = \frac{b^2 + 2ab - 3a^2}{4b}$$
   Combining both terms:
   $$\langle x \rangle = \frac{3a^2 + b^2 + 2ab - 3a^2}{4b} = \frac{2ab + b^2}{4b} = \frac{2a + b}{4}$$

---

#### Practice Question 1.10 (Unsolved)
A wave function at $t = 0$ is given by the symmetric triangular distribution:
$$\Psi(x, 0) = \begin{cases} 
C(a - |x|), & -a \le x \le a \\ 
0, & \text{otherwise} 
\end{cases}$$
1. Find the normalization constant $C$.
2. Calculate the probability that a position measurement yields $|x| < \frac{a}{2}$.
3. Determine $\langle x \rangle$ and $\langle x^2 \rangle$.

---

### Problem 1.15

#### Original Question
Show that for any two normalizable solutions $\Psi_1(x, t)$ and $\Psi_2(x, t)$ of the Schrödinger equation with the same real potential $V(x)$, the inner product integral is independent of time:
$$\frac{d}{dt} \int_{-\infty}^{+\infty} \Psi_1^*(x, t) \Psi_2(x, t) \, dx = 0$$

#### Solution
Differentiating under the integral sign:
$$\frac{d}{dt} \int_{-\infty}^{+\infty} \Psi_1^* \Psi_2 \, dx = \int_{-\infty}^{+\infty} \left( \frac{\partial \Psi_1^*}{\partial t}\Psi_2 + \Psi_1^* \frac{\partial \Psi_2}{\partial t} \right) dx$$
From the Schrödinger equation:
$$\frac{\partial \Psi_2}{\partial t} = \frac{i\hbar}{2m} \frac{\partial^2 \Psi_2}{\partial x^2} - \frac{i}{\hbar} V \Psi_2$$
Taking the complex conjugate for $\Psi_1$ (with $V^* = V$):
$$\frac{\partial \Psi_1^*}{\partial t} = -\frac{i\hbar}{2m} \frac{\partial^2 \Psi_1^*}{\partial x^2} + \frac{i}{\hbar} V \Psi_1^*$$
Substituting these expressions into the integrand:
$$\frac{\partial \Psi_1^*}{\partial t}\Psi_2 + \Psi_1^* \frac{\partial \Psi_2}{\partial t} = \frac{i\hbar}{2m} \left( \Psi_1^* \frac{\partial^2 \Psi_2}{\partial x^2} - \frac{\partial^2 \Psi_1^*}{\partial x^2}\Psi_2 \right) + \left( \frac{i}{\hbar}V\Psi_1^*\Psi_2 - \frac{i}{\hbar}V\Psi_1^*\Psi_2 \right)$$
The potential energy terms cancel. The remaining differential operator factorizes as:
$$\Psi_1^* \frac{\partial^2 \Psi_2}{\partial x^2} - \frac{\partial^2 \Psi_1^*}{\partial x^2}\Psi_2 = \frac{\partial}{\partial x} \left( \Psi_1^* \frac{\partial \Psi_2}{\partial x} - \frac{\partial \Psi_1^*}{\partial x}\Psi_2 \right)$$
Thus, the total integral reduces to boundary evaluations:
$$\frac{d}{dt} \int_{-\infty}^{+\infty} \Psi_1^* \Psi_2 \, dx = \left[ \frac{i\hbar}{2m} \left( \Psi_1^* \frac{\partial \Psi_2}{\partial x} - \frac{\partial \Psi_1^*}{\partial x}\Psi_2 \right) \right]_{-\infty}^{+\infty}$$
Because $\Psi_1, \Psi_2 \in L^2(\mathbb{R})$, both wave functions and their spatial derivatives vanish as $x \to \pm\infty$. The boundary terms evaluate to zero:
$$\frac{d}{dt} \int_{-\infty}^{+\infty} \Psi_1^* \Psi_2 \, dx = 0$$

---

#### Practice Question 1.11 (Unsolved)
Suppose two states $\Psi_A(x, t)$ and $\Psi_B(x, t)$ evolve under the same Hermitian Hamiltonian with real potential $V(x)$. If they are orthogonal at $t = 0$, that is:
$$\int_{-\infty}^{+\infty} \Psi_A^*(x, 0) \Psi_B(x, 0) \, dx = 0$$
prove that they remain orthogonal for all time $t > 0$.

---

### Problem 1.17

#### Original Question
To describe an unstable particle that spontaneously decays with lifetime $\tau$, the total probability $P(t) \equiv \int_{-\infty}^{+\infty} |\Psi(x, t)|^2 \, dx$ must decrease exponentially: $P(t) = e^{-t/\tau}$.
To model this, introduce an imaginary component into the potential:
$$V(x) = V_0(x) - i\Gamma$$
where $V_0(x)$ is real and $\Gamma > 0$ is a real constant.
1. Show that the time evolution of $P(t)$ obeys:
   $$\frac{dP}{dt} = -\frac{2\Gamma}{\hbar}P$$
2. Solve for $P(t)$ and express the lifetime $\tau$ in terms of $\Gamma$.

#### Solution
1. **Derivation of $\frac{dP}{dt}$:**
   The Schrödinger equation with $V = V_0 - i\Gamma$ is:
   $$i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2 \Psi}{\partial x^2} + (V_0 - i\Gamma)\Psi \implies \frac{\partial \Psi}{\partial t} = \frac{i\hbar}{2m}\frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar}V_0 \Psi - \frac{\Gamma}{\hbar}\Psi$$
   Taking the complex conjugate:
   $$-i\hbar \frac{\partial \Psi^*}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2 \Psi^*}{\partial x^2} + (V_0 + i\Gamma)\Psi^* \implies \frac{\partial \Psi^*}{\partial t} = -\frac{i\hbar}{2m}\frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar}V_0 \Psi^* - \frac{\Gamma}{\hbar}\Psi^*$$
   Differentiating the probability density:
   $$\frac{\partial}{\partial t}|\Psi|^2 = \Psi^* \frac{\partial \Psi}{\partial t} + \frac{\partial \Psi^*}{\partial t}\Psi = \frac{\partial}{\partial x}\left[ \frac{i\hbar}{2m}\left(\Psi^* \frac{\partial \Psi}{\partial x} - \frac{\partial \Psi^*}{\partial x}\Psi\right) \right] - \frac{2\Gamma}{\hbar}|\Psi|^2$$
   Integrating over all space, the spatial boundary term vanishes:
   $$\frac{dP}{dt} = \int_{-\infty}^{+\infty} \frac{\partial |\Psi|^2}{\partial t} \, dx = 0 - \frac{2\Gamma}{\hbar} \int_{-\infty}^{+\infty} |\Psi|^2 \, dx = -\frac{2\Gamma}{\hbar}P$$

2. **Lifetime $\tau$:**
   $$\frac{dP}{dt} = -\frac{2\Gamma}{\hbar}P \implies P(t) = P(0)e^{-2\Gamma t/\hbar}$$
   Given $P(0) = 1$ and matching with $e^{-t/\tau}$:
   $$\frac{1}{\tau} = \frac{2\Gamma}{\hbar} \implies \tau = \frac{\hbar}{2\Gamma}$$

---

#### Practice Question 1.12 (Unsolved)
A quantum state is placed in a non-Hermitian potential well where the imaginary component is localized: $V(x) = V_0(x) - i\gamma \delta(x)$, with $\gamma > 0$.
1. Derive the modified continuity equation and the expression for $\frac{dP}{dt}$.
2. Express the decay rate $-\frac{1}{P}\frac{dP}{dt}$ in terms of the probability density at the origin, $|\Psi(0, t)|^2$.

---

## 1.5 Momentum

---

### Problem 1.5

#### Original Question
Consider the exponential wave function:
$$\Psi(x, t) = A e^{-\lambda |x|} e^{-i\omega t}$$
where $A$, $\lambda$, and $\omega$ are positive real constants.
1. Normalize $\Psi(x, t)$.
2. Determine $\langle x \rangle$ and $\langle x^2 \rangle$.
3. Compute the standard deviation $\sigma_x$, and calculate the probability of finding the particle outside the range $\langle x \rangle \pm \sigma_x$.

#### Solution
1. **Normalization:**
   $$|\Psi(x, t)|^2 = |A|^2 e^{-2\lambda |x|}$$
   $$\int_{-\infty}^{+\infty} |\Psi|^2 \, dx = 2 |A|^2 \int_0^\infty e^{-2\lambda x} \, dx = 2 |A|^2 \left[ \frac{1}{2\lambda} \right] = \frac{|A|^2}{\lambda} = 1 \implies A = \sqrt{\lambda}$$

2. **Expectation Values:**
   - $\langle x \rangle = \int_{-\infty}^{+\infty} x (\lambda e^{-2\lambda |x|}) \, dx = 0$ (odd integrand).
   - $\langle x^2 \rangle = 2\lambda \int_0^\infty x^2 e^{-2\lambda x} \, dx = 2\lambda \left( \frac{2!}{(2\lambda)^3} \right) = \frac{1}{2\lambda^2}$.

3. **Standard Deviation and Range Probability:**
   $$\sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = \frac{1}{\sqrt{2}\lambda}$$
   The interval is $[-\sigma_x, +\sigma_x] = \left[-\frac{1}{\sqrt{2}\lambda}, +\frac{1}{\sqrt{2}\lambda}\right]$.
   By symmetry, the probability of finding the particle outside this interval is:
   $$P_{\text{outside}} = 2 \int_{\sigma_x}^\infty \lambda e^{-2\lambda x} \, dx = 2\lambda \left[ -\frac{e^{-2\lambda x}}{2\lambda} \right]_{\sigma_x}^\infty = e^{-2\lambda \sigma_x}$$
   Substituting $\sigma_x = \frac{1}{\sqrt{2}\lambda}$:
   $$P_{\text{outside}} = e^{-2/\sqrt{2}} = e^{-\sqrt{2}} \approx 0.2431 \quad (\approx 24.3\%)$$

---

#### Practice Question 1.13 (Unsolved)
A particle state is defined by the unilateral wave function:
$$\Psi(x, 0) = \begin{cases} B x e^{-\alpha x}, & x \ge 0 \\ 0, & x < 0 \end{cases}$$
where $\alpha > 0$.
1. Normalize the wave function by finding $B$.
2. Compute $\langle x \rangle$, $\langle x^2 \rangle$, and $\sigma_x$.
3. What is the probability of finding the particle at a location $x > \langle x \rangle + \sigma_x$?

---

### Problem 1.6

#### Original Question
Why cannot one evaluate the time derivative:
$$\frac{d\langle x \rangle}{dt} = \int_{-\infty}^{+\infty} x \frac{\partial |\Psi|^2}{\partial t} \, dx$$
by performing integration by parts directly on the integrand, transferring the time derivative onto $x$ to conclude $\frac{d\langle x \rangle}{dt} = 0$ via $\frac{\partial x}{\partial t} = 0$?

#### Solution
Integration by parts is defined with respect to the variable of integration:
$$\int_a^b u(x) \frac{\partial v(x, t)}{\partial x} \, dx = \left[ u v \right]_a^b - \int_a^b \frac{\partial u(x)}{\partial x} v(x, t) \, dx$$
In the expression for $\frac{d\langle x \rangle}{dt}$, the integration is over the spatial coordinate $x$, while the differential operator in the integrand is with respect to the independent temporal parameter $t$. Because the derivative and integral operations involve distinct independent coordinates, spatial integration by parts cannot be used to shift a time derivative.

---

#### Practice Question 1.14 (Unsolved)
Given an integral of the form $I(x) = \int_{t_1}^{t_2} g(t) \frac{\partial}{\partial x} f(x, t) \, dt$, explain why integration by parts cannot be directly executed to shift the spatial derivative $\frac{\partial}{\partial x}$ onto $g(t)$.

---

### Problem 1.7: Ehrenfest's Theorem for Momentum

#### Original Question
Derive the relation:
$$\frac{d\langle p \rangle}{dt} = \left\langle -\frac{\partial V}{\partial x} \right\rangle$$

#### Solution
Using the momentum operator $\hat{p} = -i\hbar \frac{\partial}{\partial x}$:
$$\frac{d\langle p \rangle}{dt} = \frac{d}{dt} \int_{-\infty}^{+\infty} \Psi^* \left( -i\hbar \frac{\partial \Psi}{\partial x} \right) dx = -i\hbar \int_{-\infty}^{+\infty} \left( \frac{\partial \Psi^*}{\partial t} \frac{\partial \Psi}{\partial x} + \Psi^* \frac{\partial}{\partial x}\frac{\partial \Psi}{\partial t} \right) dx$$
From the Schrödinger equation:
$$\frac{\partial \Psi}{\partial t} = \frac{i\hbar}{2m}\frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar}V\Psi, \quad \frac{\partial \Psi^*}{\partial t} = -\frac{i\hbar}{2m}\frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar}V\Psi^*$$
Substitute into the integral:
$$\frac{d\langle p \rangle}{dt} = -i\hbar \int \left[ \left(-\frac{i\hbar}{2m}\frac{\partial^2 \Psi^*}{\partial x^2} + \frac{i}{\hbar}V\Psi^*\right)\frac{\partial \Psi}{\partial x} + \Psi^* \frac{\partial}{\partial x}\left(\frac{i\hbar}{2m}\frac{\partial^2 \Psi}{\partial x^2} - \frac{i}{\hbar}V\Psi\right) \right] dx$$
Group into kinetic terms ($I_T$) and potential terms ($I_V$):
1. Kinetic terms:
   $$I_T = -\frac{\hbar^2}{2m} \int_{-\infty}^{+\infty} \left( \frac{\partial^2 \Psi^*}{\partial x^2}\frac{\partial \Psi}{\partial x} - \Psi^* \frac{\partial^3 \Psi}{\partial x^3} \right) dx$$
   Integrating the second term by parts:
   $$\int_{-\infty}^{+\infty} \Psi^* \frac{\partial^3 \Psi}{\partial x^3} \, dx = -\int_{-\infty}^{+\infty} \frac{\partial \Psi^*}{\partial x} \frac{\partial^2 \Psi}{\partial x^2} \, dx$$
   Integrating the first term by parts:
   $$\int_{-\infty}^{+\infty} \frac{\partial^2 \Psi^*}{\partial x^2} \frac{\partial \Psi}{\partial x} \, dx = -\int_{-\infty}^{+\infty} \frac{\partial \Psi^*}{\partial x} \frac{\partial^2 \Psi}{\partial x^2} \, dx$$
   The two contributions cancel identically: $I_T = 0$.

2. Potential terms:
   $$I_V = \int_{-\infty}^{+\infty} \left[ V \Psi^* \frac{\partial \Psi}{\partial x} - \Psi^* \frac{\partial}{\partial x}(V\Psi) \right] dx$$
   Applying the product rule to the second term: $\frac{\partial}{\partial x}(V\Psi) = \frac{\partial V}{\partial x}\Psi + V\frac{\partial \Psi}{\partial x}$:
   $$I_V = \int_{-\infty}^{+\infty} \left[ V\Psi^* \frac{\partial \Psi}{\partial x} - \Psi^* \frac{\partial V}{\partial x}\Psi - V\Psi^* \frac{\partial \Psi}{\partial x} \right] dx = \int_{-\infty}^{+\infty} \Psi^* \left(-\frac{\partial V}{\partial x}\right) \Psi \, dx$$
Therefore:
$$\frac{d\langle p \rangle}{dt} = \left\langle -\frac{\partial V}{\partial x} \right\rangle$$

---

#### Practice Question 1.15 (Unsolved)
Using Ehrenfest's theorem, evaluate $\frac{d\langle p \rangle}{dt}$ for a particle in:
1. A harmonic oscillator potential $V(x) = \frac{1}{2}m\omega^2 x^2$, expressing the result in terms of $\langle x \rangle$.
2. A free particle ($V(x) = 0$), and state the physical conservation law this implies.

---

### Problem 1.8

#### Original Question
Suppose a constant potential energy offset $V_0$ is added to $V(x, t)$ (independent of $x$ and $t$).
1. Show that the wave function transforms as:
   $$\Psi'(x, t) = \Psi(x, t) e^{-i V_0 t/\hbar}$$
2. Determine what effect this potential shift has on the expectation value of an arbitrary dynamical variable $Q(x, p)$.

#### Solution
1. **Wave Function Phase:**
   The modified Schrödinger equation reads:
   $$i\hbar \frac{\partial \Psi'}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2 \Psi'}{\partial x^2} + V(x, t)\Psi' + V_0 \Psi'$$
   Substitute the ansatz $\Psi'(x, t) = \Psi(x, t)e^{-i V_0 t/\hbar}$:
   $$i\hbar \frac{\partial \Psi'}{\partial t} = i\hbar \left( \frac{\partial \Psi}{\partial t} e^{-i V_0 t/\hbar} - \frac{iV_0}{\hbar}\Psi e^{-i V_0 t/\hbar} \right) = \left( i\hbar \frac{\partial \Psi}{\partial t} + V_0 \Psi \right) e^{-i V_0 t/\hbar}$$
   The spatial derivatives are:
   $$\frac{\partial^2 \Psi'}{\partial x^2} = \frac{\partial^2 \Psi}{\partial x^2} e^{-i V_0 t/\hbar}$$
   Equating both sides:
   $$\left( i\hbar \frac{\partial \Psi}{\partial t} + V_0 \Psi \right) e^{-i V_0 t/\hbar} = \left( -\frac{\hbar^2}{2m}\frac{\partial^2 \Psi}{\partial x^2} + V(x, t)\Psi + V_0 \Psi \right) e^{-i V_0 t/\hbar}$$
   Subtracting $V_0 \Psi e^{-i V_0 t/\hbar}$ yields the original Schrödinger equation for $\Psi$. Thus, $\Psi'(x, t) = \Psi(x, t)e^{-i V_0 t/\hbar}$ is an exact solution.

2. **Effect on Expectation Values:**
   The expectation value of an operator $\hat{Q} = Q(x, -i\hbar \partial/\partial x)$ in the transformed state is:
   $$\langle Q \rangle' = \int_{-\infty}^{+\infty} (\Psi')^* \hat{Q} \Psi' \, dx = \int_{-\infty}^{+\infty} \left( \Psi^* e^{+iV_0 t/\hbar} \right) \hat{Q} \left( \Psi e^{-iV_0 t/\hbar} \right) dx$$
   Because $\hat{Q}$ involves only spatial derivatives and functions of $x$, the time-dependent phase factors commute with $\hat{Q}$ and cancel:
   $$e^{+iV_0 t/\hbar} e^{-iV_0 t/\hbar} = 1 \implies \langle Q \rangle' = \langle Q \rangle$$
   The constant potential offset produces no physically observable consequences.

---

#### Practice Question 1.16 (Unsolved)
Suppose the Hamiltonian acquires a spatially uniform but time-dependent potential term: $V(x, t) \to V(x, t) + f(t)$.
1. Show that the wave function acquires a purely time-dependent global phase factor:
   $$\Psi'(x, t) = \Psi(x, t) \exp\left( -\frac{i}{\hbar} \int_0^t f(t') \, dt' \right)$$
2. Confirm that all probability densities and expectation values $\langle Q(x, p) \rangle$ remain unchanged.

---

### Problem 1.14

#### Original Question
Let $P_{ab}(t) = \int_a^b |\Psi(x, t)|^2 \, dx$ be the probability of finding the particle in the spatial interval $[a, b]$.
1. Show that:
   $$\frac{d P_{ab}}{dt} = J(a, t) - J(b, t)$$
   where the probability current $J(x, t)$ is defined by:
   $$J(x, t) \equiv \frac{i\hbar}{2m} \left( \Psi \frac{\partial \Psi^*}{\partial x} - \Psi^* \frac{\partial \Psi}{\partial x} \right)$$
   and state the physical units of $J(x, t)$.
2. Calculate the probability current for the wave function of Problem 1.9:
   $$\Psi(x, t) = A e^{-a(mx^2/\hbar + it)}$$

#### Solution
1. **Continuity Relation and Units:**
   Differentiating $P_{ab}(t)$:
   $$\frac{d P_{ab}}{dt} = \int_a^b \frac{\partial |\Psi|^2}{\partial t} \, dx$$
   Using the local conservation relation derived from the Schrödinger equation:
   $$\frac{\partial |\Psi|^2}{\partial t} = -\frac{\partial J}{\partial x}$$
   Substituting this yields:
   $$\frac{d P_{ab}}{dt} = -\int_a^b \frac{\partial J}{\partial x} \, dx = -\Big[ J(b, t) - J(a, t) \Big] = J(a, t) - J(b, t)$$
   - **Units of $J(x, t)$:**
     $$[|\Psi|^2] = \frac{1}{\text{length}}, \quad \left[\frac{\hbar}{m}\right] = \frac{\text{length}^2}{\text{time}}, \quad \left[\frac{\partial}{\partial x}\right] = \frac{1}{\text{length}}$$
     $$[J] = \frac{1}{\text{length}} \times \frac{\text{length}^2}{\text{time}} \times \frac{1}{\text{length}} = \frac{1}{\text{time}} = \text{s}^{-1}$$
     $J(x, t)$ represents probability per unit time flowing past point $x$.

2. **Current for Problem 1.9:**
   The wave function is:
   $$\Psi(x, t) = A e^{-amx^2/\hbar} e^{-iat}$$
   Notice that the spatial factor $\psi(x) = A e^{-amx^2/\hbar}$ is purely real.
   For any wave function that factors into a real spatial function multiplied by a time-dependent phase, $\Psi(x, t) = \psi(x) e^{-i\phi(t)}$:
   $$\Psi^* \frac{\partial \Psi}{\partial x} = \left(\psi e^{i\phi}\right) \frac{\partial}{\partial x}\left(\psi e^{-i\phi}\right) = \psi \frac{d\psi}{dx}$$
   $$\Psi \frac{\partial \Psi^*}{\partial x} = \left(\psi e^{-i\phi}\right) \frac{\partial}{\partial x}\left(\psi e^{i\phi}\right) = \psi \frac{d\psi}{dx}$$
   Subtracting these gives:
   $$J(x, t) = \frac{i\hbar}{2m} \left( \psi \frac{d\psi}{dx} - \psi \frac{d\psi}{dx} \right) = 0$$

---

#### Practice Question 1.17 (Unsolved)
A quantum state is represented by a traveling plane wave:
$$\Psi(x, t) = A e^{i(kx - \omega t)}$$
1. Compute the probability current $J(x, t)$ and express it in terms of the particle velocity $v = \hbar k/m$ and probability density $\rho$.
2. Compute $J(x, t)$ for a standing wave $\Psi(x, t) = A \sin(kx) e^{-i\omega t}$.

---

## 1.6 The Uncertainty Principle

---

### Problem 1.9

#### Original Question
A particle of mass $m$ has the wave function:
$$\Psi(x, t) = A e^{-a(mx^2/\hbar + it)}$$
where $A$ and $a$ are positive real constants.
1. Find the normalization constant $A$.
2. For what potential energy function $V(x)$ does $\Psi(x, t)$ satisfy the Schrödinger equation?
3. Calculate the expectation values $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, and $\langle p^2 \rangle$.
4. Determine $\sigma_x$ and $\sigma_p$, and verify whether the product $\sigma_x \sigma_p$ is consistent with the Heisenberg uncertainty principle.

#### Solution
1. **Normalization:**
   $$|\Psi(x, t)|^2 = |A|^2 e^{-2amx^2/\hbar}$$
   $$\int_{-\infty}^{+\infty} |\Psi|^2 \, dx = |A|^2 \sqrt{\frac{\pi}{2am/\hbar}} = |A|^2 \sqrt{\frac{\pi\hbar}{2am}} = 1 \implies A = \left(\frac{2am}{\pi\hbar}\right)^{1/4}$$

2. **Potential $V(x)$:**
   Compute the time and space derivatives:
   $$\frac{\partial \Psi}{\partial t} = -ia \Psi \implies i\hbar \frac{\partial \Psi}{\partial t} = a\hbar \Psi$$
   $$\frac{\partial \Psi}{\partial x} = -\frac{2amx}{\hbar}\Psi$$
   $$\frac{\partial^2 \Psi}{\partial x^2} = -\frac{2am}{\hbar}\Psi + \left(\frac{2amx}{\hbar}\right)^2 \Psi = \left( -\frac{2am}{\hbar} + \frac{4a^2 m^2 x^2}{\hbar^2} \right)\Psi$$
   Substitute into the Schrödinger equation:
   $$i\hbar \frac{\partial \Psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2 \Psi}{\partial x^2} + V(x)\Psi$$
   $$a\hbar \Psi = \left( a\hbar - 2a^2 m x^2 \right)\Psi + V(x)\Psi$$
   Canceling $a\hbar \Psi$:
   $$V(x) = 2m a^2 x^2$$
   This is a simple harmonic oscillator potential $V(x) = \frac{1}{2}m\omega^2 x^2$ with classical angular frequency $\omega = 2a$.

3. **Expectation Values:**
   - $\langle x \rangle = 0$ (odd integrand).
   - Using $\int_{-\infty}^\infty x^2 e^{-\beta x^2} dx = \frac{1}{2\beta}\sqrt{\frac{\pi}{\beta}}$ with $\beta = \frac{2am}{\hbar}$:
     $$\langle x^2 \rangle = \frac{1}{2\beta} = \frac{\hbar}{4am}$$
   - $\langle p \rangle = -i\hbar \int_{-\infty}^{+\infty} \Psi^* \frac{\partial \Psi}{\partial x} \, dx = -i\hbar \left(-\frac{2am}{\hbar}\right) \int_{-\infty}^{+\infty} x |\Psi|^2 \, dx = 0$.
   - Using $\hat{p}^2 \Psi = -\hbar^2 \frac{\partial^2 \Psi}{\partial x^2}$:
     $$\langle p^2 \rangle = -\hbar^2 \int_{-\infty}^{+\infty} \Psi^* \left[ -\frac{2am}{\hbar} + \frac{4a^2m^2 x^2}{\hbar^2} \right]\Psi \, dx = 2am\hbar - 4a^2 m^2 \langle x^2 \rangle$$
     $$\langle p^2 \rangle = 2am\hbar - 4a^2 m^2 \left(\frac{\hbar}{4am}\right) = 2am\hbar - am\hbar = am\hbar$$

4. **Uncertainties and Lower Bound Check:**
   $$\sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = \sqrt{\frac{\hbar}{4am}}$$
   $$\sigma_p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2} = \sqrt{am\hbar}$$
   Evaluating their product:
   $$\sigma_x \sigma_p = \sqrt{\frac{\hbar}{4am}} \sqrt{am\hbar} = \sqrt{\frac{am\hbar^2}{4am}} = \frac{\hbar}{2}$$
   The product exactly saturates the minimum uncertainty bound of the Heisenberg uncertainty principle ($\sigma_x \sigma_p \ge \frac{\hbar}{2}$).

---

#### Practice Question 1.18 (Unsolved)
A particle of mass $m$ is in a state described at $t = 0$ by:
$$\Psi(x, 0) = B e^{-\beta x^2} e^{ik_0 x}$$
where $B, \beta, k_0 > 0$.
1. Determine $B$ via normalization.
2. Find $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, and $\langle p^2 \rangle$.
3. Compute the product $\sigma_x \sigma_p$ and verify that it satisfies the uncertainty relation.

---

### Problem 1.16

#### Original Question
A particle is described at $t = 0$ by the wave function:
$$\Psi(x, 0) = \begin{cases} 
A(a^2 - x^2), & -a \le x \le a \\ 
0, & \text{otherwise} 
\end{cases}$$
1. Find the normalization constant $A$.
2. What is $\langle x \rangle$?
3. What is $\langle p \rangle$? (Explain why this cannot be obtained from $\langle p \rangle = m \frac{d\langle x \rangle}{dt}$.)
4. Compute $\langle x^2 \rangle$.
5. Compute $\langle p^2 \rangle$.
6. Determine $\sigma_x$ and $\sigma_p$.
7. Verify whether $\sigma_x \sigma_p \ge \frac{\hbar}{2}$.

#### Solution
1. **Normalization:**
   $$\int_{-a}^a |\Psi|^2 \, dx = 2A^2 \int_0^a (a^4 - 2a^2 x^2 + x^4) \, dx = 2A^2 \left[ a^5 - \frac{2}{3}a^5 + \frac{1}{5}a^5 \right] = 2A^2 a^5 \left(\frac{8}{15}\right) = \frac{16}{15}A^2 a^5 = 1$$
   $$A = \sqrt{\frac{15}{16a^5}}$$

2. **Expectation Value $\langle x \rangle$:**
   $$\langle x \rangle = \int_{-a}^a x |\Psi|^2 \, dx = 0 \quad (\text{integrand is odd})$$

3. **Expectation Value $\langle p \rangle$:**
   $$\langle p \rangle = -i\hbar \int_{-a}^a \Psi \frac{d\Psi}{dx} \, dx$$
   Because $\Psi(x, 0)$ is real and even, $\frac{d\Psi}{dx} = -2Ax$ is odd, making $\Psi \frac{d\Psi}{dx}$ odd. Hence:
   $$\langle p \rangle = 0$$
   *Note:* One cannot invoke $\langle p \rangle = m \frac{d\langle x \rangle}{dt}$ because $\Psi(x, t)$ is only specified at a single instant $t = 0$. Evaluating a time derivative requires knowledge of $\Psi$ in an open neighborhood around $t = 0$.

4. **Expectation Value $\langle x^2 \rangle$:**
   $$\langle x^2 \rangle = 2A^2 \int_0^a x^2 (a^2 - x^2)^2 \, dx = 2A^2 \int_0^a (a^4 x^2 - 2a^2 x^4 + x^6) \, dx$$
   $$\langle x^2 \rangle = 2A^2 \left[ \frac{a^7}{3} - \frac{2a^7}{5} + \frac{a^7}{7} \right] = 2\left(\frac{15}{16a^5}\right) a^7 \left( \frac{35 - 42 + 15}{105} \right) = \frac{30 a^2}{16} \left(\frac{8}{105}\right) = \frac{a^2}{7}$$

5. **Expectation Value $\langle p^2 \rangle$:**
   Integrating by parts with boundary values $\Psi(\pm a) = 0$:
   $$\langle p^2 \rangle = -\hbar^2 \int_{-a}^a \Psi \frac{d^2\Psi}{dx^2} \, dx = \hbar^2 \int_{-a}^a \left( \frac{d\Psi}{dx} \right)^2 dx$$
   Since $\frac{d\Psi}{dx} = -2Ax$:
   $$\langle p^2 \rangle = \hbar^2 \int_{-a}^a 4A^2 x^2 \, dx = 8 A^2 \hbar^2 \left(\frac{a^3}{3}\right) = 8 \left(\frac{15}{16a^5}\right) \frac{a^3 \hbar^2}{3} = \frac{5\hbar^2}{2a^2}$$

6. **Uncertainties:**
   $$\sigma_x = \sqrt{\langle x^2 \rangle - \langle x \rangle^2} = \frac{a}{\sqrt{7}}$$
   $$\sigma_p = \sqrt{\langle p^2 \rangle - \langle p \rangle^2} = \hbar \sqrt{\frac{5}{2a^2}} = \frac{\hbar}{a}\sqrt{\frac{5}{2}}$$

7. **Check Uncertainty Principle:**
   $$\sigma_x \sigma_p = \left(\frac{a}{\sqrt{7}}\right) \left(\frac{\hbar}{a}\sqrt{\frac{5}{2}}\right) = \hbar \sqrt{\frac{5}{14}} \approx 0.5976 \hbar$$
   Because $\sqrt{\frac{5}{14}} \approx 0.598 > 0.5 = \frac{1}{2}$:
   $$\sigma_x \sigma_p > \frac{\hbar}{2}$$
   This satisfies the uncertainty principle.

---

#### Practice Question 1.19 (Unsolved)
A quantum particle is confined within $[-L, L]$ in the state:
$$\Psi(x, 0) = \begin{cases} C \cos\left(\frac{\pi x}{2L}\right), & -L \le x \le L \\ 0, & \text{otherwise} \end{cases}$$
1. Find $C$.
2. Determine $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, and $\langle p^2 \rangle$.
3. Compute $\sigma_x \sigma_p$ and verify consistency with the uncertainty principle.

---

### Problem 1.18

#### Original Question
Quantum effects become significant when the typical de Broglie wavelength of a particle exceeds the characteristic interparticle separation $d$ ($\lambda > d$). In thermal equilibrium at temperature $T$, the mean thermal de Broglie wavelength is:
$$\lambda = \frac{h}{\sqrt{3mk_B T}}$$
1. **Solids:** The typical lattice spacing in a crystal is $d \approx 0.3\text{ nm}$. Find the temperature below which:
   - Free conduction electrons ($m_e \approx 9.11 \times 10^{-31}\text{ kg}$) must be treated quantum mechanically.
   - Silicon nuclei ($m_{\text{Si}} \approx 28 \times 1.66 \times 10^{-27}\text{ kg}$) must be treated quantum mechanically.
2. **Gases:** In an ideal gas at pressure $P$, the interatomic spacing is $d = (V/N)^{1/3} = (k_B T / P)^{1/3}$.
   - Show that the quantum regime corresponds to temperatures satisfying:
     $$T < \frac{1}{k_B} \left( \frac{h^2}{3m} \right)^{3/5} P^{2/5}$$
   - Estimate this critical temperature for Helium gas at atmospheric pressure ($P = 1.01 \times 10^5\text{ Pa}$, $m_{\text{He}} \approx 4 \times 1.66 \times 10^{-27}\text{ kg}$).
   - Evaluate whether interstellar atomic hydrogen ($T \approx 3\text{ K}$, $d \approx 1\text{ cm}$) requires a quantum mechanical treatment.

#### Solution
1. **Solids:**
   The criterion $\lambda > d$ implies:
   $$\frac{h}{\sqrt{3mk_B T}} > d \implies T < \frac{h^2}{3m k_B d^2}$$
   - **For Conduction Electrons:**
     $$T < \frac{(6.626 \times 10^{-34})^2}{3(9.11 \times 10^{-31})(1.38 \times 10^{-23})(3 \times 10^{-10})^2} \approx 1.3 \times 10^5\text{ K}$$
     Conduction electrons in solids are quantum mechanical at all terrestrial temperatures.
   - **For Silicon Nuclei:**
     $$m_{\text{Si}} \approx 28 \times 1.66 \times 10^{-27}\text{ kg} \approx 4.65 \times 10^{-26}\text{ kg}$$
     $$T < \frac{m_e}{m_{\text{Si}}} (1.3 \times 10^5\text{ K}) \approx \frac{9.11 \times 10^{-31}}{4.65 \times 10^{-26}} (1.3 \times 10^5) \approx 2.5\text{ K}$$
     The lattice nuclei behave classically down to a few Kelvin.

2. **Gases:**
   - Setting $\lambda > d$:
     $$\frac{h}{\sqrt{3mk_B T}} > \left(\frac{k_B T}{P}\right)^{1/3}$$
     Cubing both sides:
     $$\frac{h^3}{(3mk_B T)^{3/2}} > \frac{k_B T}{P} \implies \frac{h^3}{(3m)^{3/2} k_B^{5/2}} P > T^{5/2}$$
     Taking the $2/5$ power:
     $$T < \frac{1}{k_B} \left(\frac{h^2}{3m}\right)^{3/5} P^{2/5}$$
   - **Helium Gas at $1\text{ atm}$:**
     Using $m_{\text{He}} \approx 6.64 \times 10^{-27}\text{ kg}$ and $P = 1.013 \times 10^5\text{ Pa}$:
     $$\frac{h^2}{3m} = \frac{(6.626 \times 10^{-34})^2}{3(6.64 \times 10^{-27})} \approx 2.20 \times 10^{-41}\text{ J}\cdot\text{m}^2$$
     $$T < \frac{1}{1.38 \times 10^{-23}} (2.20 \times 10^{-41})^{3/5} (1.013 \times 10^5)^{2/5} \approx 3.1\text{ K}$$
     Helium gas exhibits quantum effects around $3\text{ K}$ (close to its liquefaction point of $4.2\text{ K}$).
   - **Interstellar Hydrogen:**
     For $m_{\text{H}} \approx 1.67 \times 10^{-27}\text{ kg}$ at $T = 3\text{ K}$:
     $$\lambda = \frac{6.626 \times 10^{-34}}{\sqrt{3(1.67 \times 10^{-27})(1.38 \times 10^{-23})(3)}} \approx \frac{6.626 \times 10^{-34}}{1.44 \times 10^{-24}} \approx 4.6 \times 10^{-10}\text{ m} = 0.46\text{ nm}$$
     The average interatomic spacing is $d = 1\text{ cm} = 10^{-2}\text{ m}$.
     Because $\lambda \ll d$ ($10^{-10}\text{ m} \ll 10^{-2}\text{ m}$), interstellar hydrogen behaves classically.

---

#### Practice Question 1.20 (Unsolved)
Neutron stars have typical nuclear mass densities of $\rho_m \approx 4 \times 10^{17}\text{ kg/m}^3$ and internal temperatures of $T \approx 10^7\text{ K}$.
1. Estimate the average inter-neutron spacing $d$ using the neutron mass $m_n \approx 1.67 \times 10^{-27}\text{ kg}$.
2. Calculate the thermal de Broglie wavelength $\lambda$ of a neutron at this temperature.
3. Determine whether the neutrons inside the star are in the degenerate quantum regime.
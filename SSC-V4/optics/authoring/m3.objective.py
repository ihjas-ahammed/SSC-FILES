# Module III — Diffraction: Objective questions (MCQ, MSQ, NAT).
# Ghatak 6e §18.1–18.2, 18.6–18.8, 20.1–20.3, 20.6.
# 5 questions per section (3 MCQ, 1 MSQ, 1 NAT). Total 25 questions.

# ── 3.1  Single-slit Fraunhofer diffraction ────────────────────────────────────

O('o.op.3.1.01', '3.1', 'MCQ',
  r'''A single slit of width $a = 0.50\text{ mm}$ is illuminated by parallel monochromatic light of wavelength $\lambda = 500\text{ nm}$. For diffraction to be observed strictly in the Fraunhofer (far-field) regime without using any focusing lens, the distance $L$ from the slit to the observation screen must satisfy:''',
  [
      r'$L \gg 0.50\text{ m}$',
      r'$L \ll 0.50\text{ m}$',
      r'$L \gg 0.25\text{ m}$',
      r'$L \ll 0.25\text{ m}$'
  ],
  'A',
  r'''<p>Fraunhofer diffraction requires the Fresnel number to be much smaller than unity: $N_F = \frac{a^2}{\lambda L} \ll 1$, which implies $L \gg \frac{a^2}{\lambda}$.</p>
<p>Substituting the given values: $\frac{a^2}{\lambda} = \frac{(5.0\times 10^{-4}\text{ m})^2}{5.0\times 10^{-7}\text{ m}} = \frac{2.5\times 10^{-7}}{5.0\times 10^{-7}} = 0.50\text{ m}$. Thus, $L \gg 0.50\text{ m}$.</p>
<p>Distractor B reverses the inequality, which defines the Fresnel near-field regime. Distractors C and D arise from forgetting to square the slit width or introducing an erroneous factor of 2.</p>''',
  r'Fraunhofer far-field condition and the Fresnel number',
  r'Inverting the condition ($L \ll a^2/\lambda$) or forgetting to square the aperture dimension $a$',
  ['c.3.1.1'],
  twist=(r'What would be the required distance if the slit width were doubled to 1.0 mm?',
         r'Since $L \gg a^2/\lambda \propto a^2$, the required distance quadruples to $L \gg 2.0\text{ m}$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.1.02', '3.1', 'MCQ',
  r'''In a single-slit Fraunhofer diffraction setup, the first diffraction minimum for light of vacuum wavelength $\lambda_1 = 660\text{ nm}$ occurs at an angle $\theta_1$. If the entire apparatus is immersed in a transparent liquid of refractive index $n = 1.50$ and illuminated with light of vacuum wavelength $\lambda_2 = 495\text{ nm}$, the first minimum shifts to angle $\theta_2$. In the paraxial approximation, the ratio $\theta_2 / \theta_1$ is:''',
  [
      r'$1.13$',
      r'$0.75$',
      r'$0.50$',
      r'$0.25$'
  ],
  'C',
  r'''<p>The condition for the first single-slit minimum is $a\sin\theta = \lambda_{\text{med}}$, so in the small-angle approximation $\theta \approx \lambda_{\text{med}} / a$.</p>
<p>In the first case (air): $\theta_1 = \lambda_1 / a$. In the liquid of index $n$: the wavelength becomes $\lambda' = \lambda_2 / n$, giving $\theta_2 = \frac{\lambda_2}{n a}$.</p>
<p>Therefore, the ratio is $\frac{\theta_2}{\theta_1} = \frac{\lambda_2}{n \lambda_1} = \frac{495\text{ nm}}{1.50 \times 660\text{ nm}} = \frac{495}{990} = 0.50$.</p>
<p>Distractor B ($0.75$) ignores the refractive index of the medium ($\lambda_2/\lambda_1$). Distractor A ($1.13$) erroneously multiplies by $n$ instead of dividing. Distractor D ($0.25$) squares the ratio.</p>''',
  r'Angular position of single-slit minima and dependence on medium refractive index',
  r'Forgetting that wavelength scales as $\lambda/n$ in a refractive medium',
  ['c.3.1.2'],
  twist=(r'What is the ratio if the liquid has refractive index $n = 4/3$ and $\lambda_2 = 440\text{ nm}$?',
         r'$\theta_2/\theta_1 = 440 / ( (4/3) \times 660 ) = 440 / 880 = 0.50$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.1.03', '3.1', 'MCQ',
  r'''In the Fraunhofer diffraction pattern of a single slit of width $a$ illuminated by light of wavelength $\lambda$, let $\beta = \frac{\pi a\sin\theta}{\lambda}$. The positions of the secondary intensity maxima are given by the non-zero solutions to which transcendental equation?''',
  [
      r'$\sin\beta = 0$',
      r'$\cos\beta = 0$',
      r'$\tan\beta = -\beta$',
      r'$\tan\beta = \beta$'
  ],
  'D',
  r'''<p>The intensity is given by $I(\beta) = I_0 \left(\frac{\sin\beta}{\beta}\right)^2$. Setting $\frac{dI}{d\beta} = 0$ yields $\frac{2\sin\beta(\beta\cos\beta - \sin\beta)}{\beta^3} = 0$.</p>
<p>Excluding $\sin\beta = 0$ (which corresponds to intensity minima for $\beta \neq 0$), the condition for secondary maxima is $\beta\cos\beta - \sin\beta = 0 \iff \tan\beta = \beta$.</p>
<p>Distractor A ($\sin\beta = 0$) gives the diffraction minima. Distractor B ($\cos\beta = 0$, giving $\beta = (m+1/2)\pi$) is the naive approximation that neglects the variation of the $1/\beta^2$ envelope. Distractor C has a sign error.</p>''',
  r'Condition for secondary maxima in single-slit Fraunhofer diffraction',
  r'Assuming secondary maxima occur exactly at the peaks of $\sin^2\beta$ where $\beta = (m+1/2)\pi$',
  ['c.3.1.3'],
  twist=(r'Are the roots of $\tan\beta = \beta$ slightly smaller or larger than $(m+1/2)\pi$ for positive $m$?',
         r'Slightly smaller, because the falling $1/\beta^2$ envelope pulls the peaks towards the origin.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.1.04', '3.1', 'MSQ',
  r'''Which of the following statements regarding the Fraunhofer diffraction pattern of a single slit of width $a$ on a screen at distance $D$ are correct?''',
  [
      r'The angular half-width of the central maximum is inversely proportional to the slit width $a$.',
      r'The linear width of the central maximum is equal to the linear distance between any two consecutive secondary minima.',
      r'The position of the first secondary maximum corresponds to a phase parameter $\beta_1 < 1.5\pi$.',
      r'The intensity of the first secondary maximum is less than $5\%$ of the central maximum intensity $I_0$.'
  ],
  ['A', 'C', 'D'],
  r'''<p>Statement A is correct: the central maximum has angular half-width $\Delta\theta \approx \lambda/a$, which is inversely proportional to $a$.</p>
<p>Statement B is incorrect: the central maximum extends from $m = -1$ to $m = +1$ with linear width $2\lambda D/a$, which is twice the separation between consecutive secondary minima ($\lambda D/a$).</p>
<p>Statement C is correct: the first secondary maximum satisfies $\tan\beta = \beta$, giving $\beta_1 \approx 1.43\pi \approx 4.493\text{ rad}$, which is strictly less than $1.5\pi \approx 4.712\text{ rad}$.</p>
<p>Statement D is correct: the intensity of the first secondary maximum is $I_1 / I_0 = (\sin\beta_1 / \beta_1)^2 \approx 0.0472$ (approximately $4.7\%$), which is less than $5\%$.</p>''',
  r'Properties, geometry, and intensity distribution of single-slit Fraunhofer diffraction',
  r'Believing the central maximum has the same width as secondary maxima, or that $\beta_1 = 1.5\pi$',
  ['c.3.1.2', 'c.3.1.3'],
  twist=(r'What fraction of total incident light energy is concentrated within the central maximum?',
         r'Approximately 85% to 90% of the total energy.'),
  marks=2, neg=0, time=90)

O('o.op.3.1.05', '3.1', 'NAT',
  r'''A single slit of width $a = 0.15\text{ mm}$ is illuminated normally by a parallel beam of monochromatic light of wavelength $\lambda = 600\text{ nm}$. A convex lens of focal length $f = 75\text{ cm}$ placed immediately after the slit focuses the Fraunhofer diffraction pattern onto a screen in its focal plane. Calculate the linear width of the central diffraction maximum on the screen in millimetres ($\text{mm}$).''',
  None,
  {'value': 6.0, 'tol': 0.1, 'dp': 1},
  r'''<p>The linear width of the central maximum on the focal plane screen is given by $W = 2 f \tan\theta \approx \frac{2 f \lambda}{a}$.</p>
<p>Substituting the given numerical values:</p>
<p>$$W = \frac{2 \times 0.75\text{ m} \times 600\times 10^{-9}\text{ m}}{0.15\times 10^{-3}\text{ m}} = \frac{9.0\times 10^{-7}}{1.5\times 10^{-4}} = 6.0\times 10^{-3}\text{ m} = 6.0\text{ mm}.$$</p>
<p>A common error is omitting the factor of 2, which gives the half-width ($3.0\text{ mm}$) instead of the full linear width between the first minima on either side.</p>''',
  r'Linear width of the single-slit central maximum with a focusing lens',
  r'Calculating the half-width ($f\lambda/a = 3.0\text{ mm}$) instead of the full width ($2f\lambda/a = 6.0\text{ mm}$)',
  ['c.3.1.2'],
  twist=(r'What would be the width if the wavelength were changed to 450 nm?',
         r'$W = 2 \times 0.75 \times 450\times 10^{-9} / (0.15\times 10^{-3}) = 4.5\text{ mm}$.'),
  marks=2, neg=0, time=90)

# ── 3.2  Double-slit Fraunhofer ────────────────────────────────────────────────

O('o.op.3.2.01', '3.2', 'MCQ',
  r'''A Fraunhofer double-slit pattern is formed using slits of individual width $a = 0.08\text{ mm}$ and centre-to-centre separation $d = 0.40\text{ mm}$. Which of the following interference bright fringe orders $m$ is missing (absent) from the pattern?''',
  [
      r'$m = 3$',
      r'$m = 5$',
      r'$m = 4$',
      r'$m = 2$'
  ],
  'B',
  r'''<p>Interference maxima occur at $d\sin\theta = m\lambda$, while the single-slit diffraction envelope has zeros at $a\sin\theta = p\lambda$ ($p = \pm 1, \pm 2, \dots$).</p>
<p>An interference maximum is missing when both conditions coincide: $\frac{d}{a} = \frac{m}{p} \implies m = p\left(\frac{d}{a}\right)$.</p>
<p>Here $\frac{d}{a} = \frac{0.40\text{ mm}}{0.08\text{ mm}} = 5$. Thus, missing orders are $m = \pm 5, \pm 10, \pm 15, \dots$. Therefore, order $m = 5$ is missing.</p>
<p>Distractors A, C, and D are present with non-zero intensity because their angles do not coincide with any envelope zeros.</p>''',
  r'Condition for missing orders in a double-slit diffraction pattern',
  r'Confusing the ratio $d/a$ with $d/a - 1$ or calculating $a/d$',
  ['c.3.2.1'],
  twist=(r'What would be the first missing order if $a = 0.10\text{ mm}$ and $d = 0.40\text{ mm}$?',
         r'$d/a = 4$, so $m = 4$ would be the first missing order.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.2.02', '3.2', 'MCQ',
  r'''In a double-slit Fraunhofer diffraction experiment, the slit separation is four times the slit width ($d = 4a$). How many interference bright fringes (including the central zeroth order) appear within the central diffraction envelope?''',
  [
      r'$4$',
      r'$8$',
      r'$9$',
      r'$7$'
  ],
  'D',
  r'''<p>The central diffraction maximum extends between the first single-slit diffraction minima at $a\sin\theta = \pm\lambda$, corresponding to $\sin\theta = \pm \lambda/a$.</p>
<p>Interference maxima occur at $\sin\theta = m\lambda/d$. At the boundary of the central envelope, $m = \frac{d}{a} = 4$.</p>
<p>Since the envelope vanishes at $m = \pm 4$, these 4th-order fringes are missing. The bright fringes present within the central envelope are $m = 0, \pm 1, \pm 2, \pm 3$, giving a total of $2(d/a) - 1 = 2(4) - 1 = 7$ fringes.</p>
<p>Distractor A counts only one side. Distractor B ($8$) forgets that the 4th order is missing and doubles $d/a$. Distractor C ($9$) mistakenly includes the missing $m = \pm 4$ orders ($2\times 4 + 1$).</p>''',
  r'Number of interference fringes inside the central diffraction envelope',
  r'Using $2(d/a)+1$ and counting the missing boundary orders as visible fringes',
  ['c.3.2.1'],
  twist=(r'How many fringes appear in the central envelope if $d = 6a$?',
         r'$2(d/a) - 1 = 2(6) - 1 = 11$ fringes.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.2.03', '3.2', 'MCQ',
  r'''In a double-slit diffraction experiment with slit width $a$ and separation $d = 2a$, what is the ratio of the intensity of the first-order interference maximum ($m = 1$) to the central interference maximum ($m = 0$)?''',
  [
      r'$\frac{4}{\pi^2}$',
      r'$\frac{2}{\pi^2}$',
      r'$\frac{1}{2}$',
      r'$\frac{8}{\pi^2}$'
  ],
  'A',
  r'''<p>The intensity is $I(\theta) = 4I_0 \left(\frac{\sin\beta}{\beta}\right)^2 \cos^2\gamma$, where $\beta = \frac{\pi a\sin\theta}{\lambda}$ and $\gamma = \frac{\pi d\sin\theta}{\lambda}$.</p>
<p>At the central maximum ($m = 0$), $\theta = 0 \implies \beta = 0, \gamma = 0$, so $I(0) = 4I_0$.</p>
<p>For the first interference maximum ($m = 1$), $d\sin\theta = \lambda \implies \sin\theta = \frac{\lambda}{d} = \frac{\lambda}{2a}$. This gives $\gamma = \pi \implies \cos^2\gamma = 1$, and $\beta = \frac{\pi a}{\lambda}\left(\frac{\lambda}{2a}\right) = \frac{\pi}{2}$.</p>
<p>The diffraction envelope factor is $\left(\frac{\sin(\pi/2)}{\pi/2}\right)^2 = \left(\frac{1}{\pi/2}\right)^2 = \frac{4}{\pi^2}$. Therefore, $\frac{I(1)}{I(0)} = \frac{4}{\pi^2} \approx 0.405$.</p>
<p>Distractor B misses squaring the denominator factor. Distractor C assumes a naive half-intensity. Distractor D incorrectly incorporates a factor of 2.</p>''',
  r'Intensity modulation of double-slit interference peaks by the single-slit diffraction envelope',
  r'Assuming all interference bright fringes have equal intensity as in idealized Young interference',
  ['c.3.2.1'],
  twist=(r'What is the intensity of the second-order interference maximum for $d = 2a$?',
         r'Zero, because $m = 2$ is a missing order since $d/a = 2$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.2.04', '3.2', 'MSQ',
  r'''Which of the following statements regarding the Fraunhofer double-slit diffraction pattern are correct?''',
  [
      r'Increasing the slit separation $d$ while keeping the slit width $a$ fixed reduces the angular width of the central diffraction envelope.',
      r'Increasing the slit separation $d$ while keeping the slit width $a$ fixed decreases the interference fringe spacing and increases the number of fringes under the central envelope.',
      r'In the limit where the slit width $a \to 0$ with $d$ held constant, the pattern approaches the ideal Young double-slit pattern with fringes of uniform intensity.',
      r'When $d = 3a$, the 3rd and 6th interference maxima are completely missing from the observed pattern.'
  ],
  ['B', 'C', 'D'],
  r'''<p>Statement A is false: the angular width of the central diffraction envelope is $2\lambda/a$, which depends solely on $a$ and is independent of $d$.</p>
<p>Statement B is true: the interference fringe spacing is $\Delta\theta = \lambda/d$, which decreases as $d$ increases, causing more fringes ($2d/a - 1$) to fit within the central envelope.</p>
<p>Statement C is true: as $a \to 0$, $\beta \to 0 \implies \frac{\sin\beta}{\beta} \to 1$, removing envelope modulation and yielding pure $\cos^2\gamma$ fringes of uniform height.</p>
<p>Statement D is true: with $d/a = 3$, all orders $m = 3p$ ($m = \pm 3, \pm 6, \dots$) coincide with envelope zeros and are missing.</p>''',
  r'Distinction between diffraction envelope and interference fringes in double-slit pattern',
  r'Believing that envelope width depends on slit separation $d$',
  ['c.3.2.1'],
  twist=(r'What happens to the number of fringes under the central envelope if both $a$ and $d$ are doubled?',
         r'The ratio $d/a$ is unchanged, so the number of fringes $2d/a - 1$ remains exactly the same.'),
  marks=2, neg=0, time=90)

O('o.op.3.2.05', '3.2', 'NAT',
  r'''Monochromatic light of wavelength $\lambda = 500\text{ nm}$ illuminates a double slit normally. The interference pattern is observed on a screen placed at a distance $D = 2.0\text{ m}$. The linear fringe spacing between adjacent interference maxima is $\Delta y = 2.5\text{ mm}$, and the 4th interference maximum is observed to be the first missing order. Calculate the width of each slit $a$ in micrometres ($\mu\text{m}$).''',
  None,
  {'value': 100.0, 'tol': 1.0, 'dp': 1},
  r'''<p>The interference fringe spacing on the screen is given by $\Delta y = \frac{\lambda D}{d}$.</p>
<p>Rearranging for the slit separation $d$:</p>
<p>$$d = \frac{\lambda D}{\Delta y} = \frac{500\times 10^{-9}\text{ m} \times 2.0\text{ m}}{2.5\times 10^{-3}\text{ m}} = \frac{1.0\times 10^{-6}}{2.5\times 10^{-3}} = 4.0\times 10^{-4}\text{ m} = 400\ \mu\text{m}.$$</p>
<p>Since the 4th interference order is the first missing order, we have $\frac{d}{a} = 4$, which gives:</p>
<p>$$a = \frac{d}{4} = \frac{400\ \mu\text{m}}{4} = 100\ \mu\text{m}.$$</p>
<p>Common traps include setting $d/a = 3$ or confusing slit width $a$ with slit separation $d$.</p>''',
  r'Determination of slit dimensions from fringe spacing and missing orders',
  r'Confusing slit separation $d$ with slit width $a$, or using $d/a = 5$',
  ['c.3.2.1'],
  twist=(r'What would be the slit width if the 5th order were the first missing order with the same fringe spacing?',
         r'$a = d/5 = 400\ \mu\text{m} / 5 = 80\ \mu\text{m}$.'),
  marks=2, neg=0, time=90)

# ── 3.3  N slits and the diffraction grating ──────────────────────────────────

O('o.op.3.3.01', '3.3', 'MCQ',
  r'''A transmission diffraction grating has $N = 6$ identical parallel slits. In the Fraunhofer diffraction pattern formed by monochromatic light, what is the number of diffraction minima (zeros) and secondary maxima located between any two adjacent principal maxima?''',
  [
      r'6 zeros and 5 secondary maxima',
      r'6 zeros and 4 secondary maxima',
      r'5 zeros and 4 secondary maxima',
      r'5 zeros and 3 secondary maxima'
  ],
  'C',
  r'''<p>For an array of $N$ identical slits, the grating interference factor is $\left(\frac{\sin N\gamma}{\sin\gamma}\right)^2$.</p>
<p>Principal maxima occur when $\gamma = m\pi$, where the numerator and denominator simultaneously vanish and the factor approaches $N^2$.</p>
<p>Between two consecutive principal maxima, the phase parameter $\gamma$ increases by $\pi$, so $N\gamma$ increases by $N\pi$. The numerator vanishes at $N\gamma = mN\pi + p\pi$ for $p = 1, 2, \dots, N-1$. Thus, there are exactly $N - 1$ zeros.</p>
<p>Between these $N - 1$ zeros, there are $(N - 1) - 1 = N - 2$ secondary maxima. For $N = 6$, this gives $6 - 1 = 5$ zeros and $6 - 2 = 4$ secondary maxima.</p>
<p>Distractor A mistakenly uses $N$ and $N-1$. Distractor B uses $N$ and $N-2$. Distractor D subtracts 3 instead of 2.</p>''',
  r'Number of zeros and secondary maxima in N-slit Fraunhofer diffraction',
  r'Confusing $N-1$ zeros with $N$ zeros between adjacent principal maxima',
  ['c.3.3.1'],
  twist=(r'How many secondary maxima exist between adjacent principal maxima for an 8-slit grating?',
         r'$N - 2 = 8 - 2 = 6$ secondary maxima.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.3.02', '3.3', 'MCQ',
  r'''A plane transmission diffraction grating has $6000\text{ lines/cm}$. It is illuminated at normal incidence by monochromatic light of wavelength $\lambda = 500\text{ nm}$. What is the maximum spectral order $m_{\max}$ that can possibly be observed?''',
  [
      r'$2$',
      r'$3$',
      r'$4$',
      r'$6$'
  ],
  'B',
  r'''<p>The grating equation at normal incidence is $d\sin\theta = m\lambda$.</p>
<p>The grating element $d$ is: $d = \frac{1\text{ cm}}{6000} = \frac{10^{-2}\text{ m}}{6000} = \frac{1}{6\times 10^5}\text{ m} \approx 1.667\times 10^{-6}\text{ m} = 1667\text{ nm}$.</p>
<p>Since $\sin\theta \le 1$, the maximum observable order satisfies $m \le \frac{d}{\lambda} = \frac{1.667\times 10^{-6}\text{ m}}{500\times 10^{-9}\text{ m}} = \frac{1667}{500} = 3.33$.</p>
<p>Since $m$ must be an integer, $m_{\max} = 3$. (The fourth order would require $\sin\theta = 4 \times 500 / 1667 \approx 1.20 > 1$, which is physically impossible).</p>
<p>Distractor A is an undercount. Distractor C ($4$) erroneously rounds $3.33$ up to 4. Distractor D ($6$) confusingly reads $6000\text{ lines/cm}$.</p>''',
  r'Maximum observable order from the grating equation',
  r'Rounding up $d/\lambda$ instead of taking the integer floor $\lfloor d/\lambda \rfloor$',
  ['c.3.3.2'],
  twist=(r'What is the highest order observable if light of wavelength 400 nm is used?',
         r'$m \le 1667 / 400 = 4.17$, so $m_{\max} = 4$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.3.03', '3.3', 'MCQ',
  r'''The sodium yellow doublet consists of two wavelengths at $\lambda_1 = 589.0\text{ nm}$ and $\lambda_2 = 589.6\text{ nm}$. What is the minimum number of grating lines $N$ that must be illuminated to just resolve this doublet in the second order ($m = 2$) according to Rayleigh criterion?''',
  [
      r'$492$',
      r'$983$',
      r'$1965$',
      r'$246$'
  ],
  'A',
  r'''<p>The resolving power of a grating is given by $R = \frac{\lambda}{\Delta\lambda} = m N$, where $\bar{\lambda} \approx 589.3\text{ nm}$ and $\Delta\lambda = 589.6 - 589.0 = 0.6\text{ nm}$.</p>
<p>The required resolving power is $R = \frac{589.3}{0.6} \approx 982.17$.</p>
<p>In the second order ($m = 2$), the minimum number of lines is $N = \frac{R}{m} = \frac{982.17}{2} \approx 491.08$.</p>
<p>Rounding up to the nearest integer gives $N_{\min} = 492$ lines.</p>
<p>Distractor B ($983$) is the number of lines required in the first order ($m = 1$). Distractor C ($1965$) erroneously multiplies by $m$ instead of dividing. Distractor D ($246$) uses $m = 4$.</p>''',
  r'Resolving power of a diffraction grating and Rayleigh criterion',
  r'Forgetting the order $m = 2$ and computing $N$ for $m = 1$',
  ['c.3.3.3'],
  twist=(r'What would be the required number of lines in third order ($m = 3$)?',
         r'$N = 982.17 / 3 \approx 328$ lines.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.3.04', '3.3', 'MSQ',
  r'''Which of the following statements regarding a plane transmission diffraction grating are correct?''',
  [
      r'The chromatic resolving power $R = \lambda/\Delta\lambda$ depends on the spectral order $m$ and total illuminated lines $N$, but not on the grating spacing $d$.',
      r'The angular dispersion $d\theta/d\lambda$ increases with the total number of lines $N$ on the grating even if the grating spacing $d$ is unchanged.',
      r'In any non-zero spectral order, red light is diffracted at a larger angle than blue light.',
      r'The third-order spectrum of wavelength $\lambda_1 = 400\text{ nm}$ overlaps with the second-order spectrum of wavelength $\lambda_2 = 600\text{ nm}$.'
  ],
  ['A', 'C', 'D'],
  r'''<p>Statement A is correct: $R = mN$, which depends only on the order $m$ and total illuminated lines $N$, not on the slit spacing $d$.</p>
<p>Statement B is incorrect: the angular dispersion is $\frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta}$. It depends on $d$, $m$, and $\theta$, but not on the total number of lines $N$.</p>
<p>Statement C is correct: since $d\sin\theta = m\lambda$ and $\lambda_{\text{red}} > \lambda_{\text{blue}}$, red light is deviated by a larger angle than blue light (opposite to refraction by a prism).</p>
<p>Statement D is correct: overlapping occurs when $m_1\lambda_1 = m_2\lambda_2$. Here $3 \times 400\text{ nm} = 1200\text{ nm} = 2 \times 600\text{ nm}$, so the two lines fall at the exact same diffraction angle.</p>''',
  r'Grating resolving power, angular dispersion, chromatic ordering, and overlapping orders',
  r'Confusing dispersion with resolving power or thinking a grating deviates blue light more than red',
  ['c.3.3.2', 'c.3.3.3'],
  twist=(r'At what wavelength does the fourth-order line overlap with 600 nm in second order?',
         r'$4\lambda = 2(600) \implies \lambda = 300\text{ nm}$.'),
  marks=2, neg=0, time=90)

O('o.op.3.3.05', '3.3', 'NAT',
  r'''A plane transmission diffraction grating with $5000\text{ lines/cm}$ is illuminated at normal incidence by monochromatic light of wavelength $\lambda = 600\text{ nm}$. Calculate the angular dispersion $\frac{d\theta}{d\lambda}$ of the grating in the first order ($m = 1$) in units of $10^5\text{ rad/m}$. (Give your answer to two decimal places).''',
  None,
  {'value': 5.24, 'tol': 0.05, 'dp': 2},
  r'''<p>The grating element is $d = \frac{1\text{ cm}}{5000} = \frac{10^{-2}\text{ m}}{5000} = 2.0\times 10^{-6}\text{ m}$.</p>
<p>In the first order ($m = 1$) for $\lambda = 600\text{ nm} = 6.0\times 10^{-7}\text{ m}$:</p>
<p>$$\sin\theta = \frac{m\lambda}{d} = \frac{1 \times 6.0\times 10^{-7}\text{ m}}{2.0\times 10^{-6}\text{ m}} = 0.30.$$</p>
<p>Then $\cos\theta = \sqrt{1 - \sin^2\theta} = \sqrt{1 - 0.09} = \sqrt{0.91} \approx 0.95394$.</p>
<p>The angular dispersion is given by:</p>
<p>$$\frac{d\theta}{d\lambda} = \frac{m}{d\cos\theta} = \frac{1}{(2.0\times 10^{-6}\text{ m})(0.95394)} \approx 5.2414\times 10^5\text{ rad/m}.$$</p>
<p>In units of $10^5\text{ rad/m}$, the value is $5.24$. Omitting the $\cos\theta$ term (assuming small angles) erroneously gives $1/d = 5.00\times 10^5\text{ rad/m}$.</p>''',
  r'Calculation of grating angular dispersion',
  r'Neglecting the $\cos\theta$ factor in $d\theta/d\lambda = m/(d\cos\theta)$',
  ['c.3.3.2'],
  twist=(r'What would be the dispersion in second order if $\sin\theta = 0.60$?',
         r'$\cos\theta = 0.80 \implies d\theta/d\lambda = 2 / (2\times 10^{-6} \times 0.8) = 12.5\times 10^5\text{ rad/m}$.'),
  marks=2, neg=0, time=90)

# ── 3.4  Fresnel diffraction: half-period zones and zone plate ─────────────────

O('o.op.3.4.01', '3.4', 'MCQ',
  r'''A plane monochromatic wave of intensity $I_0$ is incident normally on a screen containing a small circular aperture. For an axial observation point $P$, the aperture exposes exactly the first three Fresnel half-period zones ($n = 3$). The resultant intensity at $P$ is approximately:''',
  [
      r'$I_0$',
      r'$2I_0$',
      r'$3I_0$',
      r'$4I_0$'
  ],
  'D',
  r'''<p>For an unobstructed wavefront, the resultant amplitude is $A_{\text{free}} = \frac{A_1}{2}$, giving unobstructed intensity $I_0 = \frac{A_1^2}{4}$.</p>
<p>When the first three zones are exposed, the amplitude is $A = A_1 - A_2 + A_3$. Since $A_2 \approx \frac{A_1 + A_3}{2}$, the sum simplifies to $A \approx A_1$.</p>
<p>Therefore, the intensity is $I = A^2 \approx A_1^2 = 4\left(\frac{A_1^2}{4}\right) = 4I_0$.</p>
<p>Distractor A ($I_0$) mistakenly assumes three zones average out to the unobstructed value. Distractors B and C assume linear scaling or incoherent addition ($3\times$).</p>''',
  r'Resultant intensity of circular aperture in Fresnel diffraction',
  r'Confusing unobstructed amplitude $A_1/2$ with single-zone amplitude $A_1$',
  ['c.3.4.2'],
  twist=(r'What would the intensity be if the aperture exposed exactly the first two zones?',
         r'Nearly zero ($A = A_1 - A_2 \approx 0 \implies I \approx 0$).'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.4.02', '3.4', 'MCQ',
  r'''A point source of monochromatic light illuminates an opaque circular obstacle (disc). At the exact centre of the geometrical shadow cast on a distant axial screen:''',
  [
      r'a bright spot (Poisson spot) appears, with intensity approximately equal to the unobstructed intensity $I_0$',
      r'a completely dark spot is observed because all straight geometric rays are blocked',
      r'a bright spot appears whose intensity is four times the unobstructed intensity ($4I_0$)',
      r'the intensity alternates between bright and dark as the screen distance is varied'
  ],
  'A',
  r'''<p>If the opaque disc covers the first $k$ Fresnel half-period zones, the remaining unobstructed zones ($k+1, k+2, \dots$) contribute an amplitude:</p>
<p>$$A = A_{k+1} - A_{k+2} + A_{k+3} - \dots \approx \frac{A_{k+1}}{2}.$$</p>
<p>If the disc is small, $A_{k+1} \approx A_1$, so $A \approx \frac{A_1}{2} = A_{\text{free}}$, and the intensity is $I \approx \frac{A_1^2}{4} = I_0$. This famous bright centre is Poisson\'s spot (or Arago\'s spot).</p>
<p>Distractor B is the false geometrical optics prediction. Distractor C confuses an obstacle with an aperture exposing an odd number of zones. Distractor D confuses an obstacle with a circular aperture (whose axial intensity does oscillate with distance).</p>''',
  r'Poisson spot behind an opaque circular obstacle',
  r'Assuming the centre of a disc shadow is dark, or that it oscillates with distance like an aperture',
  ['c.3.4.2'],
  twist=(r'Why does the centre remain bright for any screen distance behind a circular disc?',
         r'Because the first unblocked zone always contributes an unobstructed-like amplitude $A_{k+1}/2$ regardless of distance.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.4.03', '3.4', 'MCQ',
  r'''How does the focal length $f$ of a Fresnel zone plate depend on the wavelength $\lambda$ of the incident light, and how does its chromatic aberration compare to a simple glass convex lens?''',
  [
      r'$f \propto \lambda$; red light is focused farther from the plate than violet light',
      r'$f$ is independent of $\lambda$; the zone plate has zero chromatic aberration',
      r'$f \propto 1/\lambda$; red light is focused closer to the plate than violet light',
      r'$f \propto 1/\lambda^2$; violet light is focused closer to the plate than red light'
  ],
  'C',
  r'''<p>The primary focal length of a zone plate is $f_1 = \frac{r_1^2}{\lambda}$, so $f \propto \frac{1}{\lambda}$.</p>
<p>Since $\lambda_{\text{red}} > \lambda_{\text{violet}}$, the focal length for red light is shorter: $f_{\text{red}} < f_{\text{violet}}$. Thus, red light focuses closer to the plate than violet light.</p>
<p>This is the opposite of a glass convex lens, where dispersion gives $n_{\text{violet}} > n_{\text{red}} \implies f_{\text{violet}} < f_{\text{red}}$ (violet focuses closer).</p>
<p>Distractor A incorrectly posits $f \propto \lambda$. Distractor B ignores the strong diffractive chromatic aberration. Distractor D uses an incorrect inverse-square dependence.</p>''',
  r'Focal length and chromatic aberration of a Fresnel zone plate',
  r'Applying the chromatic behavior of a refractive glass lens to a diffractive zone plate',
  ['c.3.4.3'],
  twist=(r'What is the ratio of focal lengths $f_{\text{red}} / f_{\text{violet}}$ if $\lambda_{\text{red}} = 700\text{ nm}$ and $\lambda_{\text{violet}} = 400\text{ nm}$?',
         r'$f_{\text{red}}/f_{\text{violet}} = \lambda_{\text{violet}}/\lambda_{\text{red}} = 400/700 = 4/7 \approx 0.57$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.4.04', '3.4', 'MSQ',
  r'''Which of the following statements regarding Fresnel half-period zones and zone plates are correct?''',
  [
      r'For a plane incident wavefront, the radii of successive half-period zones are proportional to $\sqrt{n}$ ($n = 1, 2, 3, \dots$).',
      r'The area of the $n\text{th}$ Fresnel half-period zone increases linearly with $n$.',
      r'A Fresnel zone plate possesses multiple real foci along its axis at distances $f_1, f_1/3, f_1/5, \dots$.',
      r'Light wavelets arriving at the observation point from two adjacent half-period zones differ in phase by $\pi$ radians.'
  ],
  ['A', 'C', 'D'],
  r'''<p>Statement A is correct: for a plane wave at distance $b$, $r_n = \sqrt{n b \lambda} \propto \sqrt{n}$.</p>
<p>Statement B is incorrect: the area of each zone is $\Delta S_n = \pi(r_n^2 - r_{n-1}^2) \approx \pi b \lambda$, which is independent of $n$ to first order.</p>
<p>Statement C is correct: a zone plate behaves as a lens with multiple foci at $f_p = f_1/p$ for odd integers $p = 1, 3, 5, \dots$.</p>
<p>Statement D is correct: by definition of half-period zones, the optical path from adjacent zone boundaries differs by $\lambda/2$, corresponding to a phase difference of $\Delta\phi = \frac{2\pi}{\lambda}\frac{\lambda}{2} = \pi$ radians.</p>''',
  r'Structure of Fresnel half-period zones and properties of zone plates',
  r'Believing that zone area increases with radius or zone index $n$',
  ['c.3.4.1', 'c.3.4.3'],
  twist=(r'For a spherical wavefront from a source at distance $a$, how do zone radii scale with $a$ and $b$?',
         r'$r_n^2 = \frac{n\lambda ab}{a+b}$.'),
  marks=2, neg=0, time=90)

O('o.op.3.4.05', '3.4', 'NAT',
  r'''A Fresnel zone plate is constructed such that the radius of its first (innermost) half-period zone is $r_1 = 0.60\text{ mm}$. When illuminated by a collimated beam of light of wavelength $\lambda = 480\text{ nm}$, calculate its primary focal length $f_1$ in metres ($\text{m}$).''',
  None,
  {'value': 0.75, 'tol': 0.02, 'dp': 2},
  r'''<p>The primary focal length of a zone plate for a plane wave is given by:</p>
<p>$$f_1 = \frac{r_1^2}{\lambda}.$$</p>
<p>Substituting the given values ($r_1 = 0.60\text{ mm} = 6.0\times 10^{-4}\text{ m}$ and $\lambda = 480\text{ nm} = 4.8\times 10^{-7}\text{ m}$):</p>
<p>$$f_1 = \frac{(6.0\times 10^{-4}\text{ m})^2}{4.8\times 10^{-7}\text{ m}} = \frac{3.6\times 10^{-7}\text{ m}^2}{4.8\times 10^{-7}\text{ m}} = \frac{3.6}{4.8} = 0.75\text{ m}.$$</p>
<p>Common mistakes include forgetting to square $r_1$ or errors in converting millimetres to metres.</p>''',
  r'Calculation of primary focal length of a zone plate',
  r'Forgetting to square the radius $r_1$ in $f_1 = r_1^2/\lambda$',
  ['c.3.4.3'],
  twist=(r'What is the secondary focal length $f_3$ for this zone plate?',
         r'$f_3 = f_1 / 3 = 0.75 / 3 = 0.25\text{ m}$.'),
  marks=2, neg=0, time=90)

# ── 3.5  Diffraction by a straight edge ────────────────────────────────────────

O('o.op.3.5.01', '3.5', 'MCQ',
  r'''In Fresnel diffraction by a straight edge illuminated by light of unobstructed intensity $I_0$, what is the intensity at the exact boundary of the geometrical shadow?''',
  [
      r'$\frac{I_0}{2}$',
      r'$\frac{I_0}{4}$',
      r'$\frac{I_0}{8}$',
      r'$0$'
  ],
  'B',
  r'''<p>The intensity behind a straight edge in terms of the Fresnel integrals $C(v)$ and $S(v)$ is:</p>
<p>$$\frac{I}{I_0} = \frac{1}{2}\left[\left(C(v) + \frac{1}{2}\right)^2 + \left(S(v) + \frac{1}{2}\right)^2\right].$$</p>
<p>At the edge of the geometrical shadow, the dimensionless parameter is $v = 0$. Since $C(0) = 0$ and $S(0) = 0$:</p>
<p>$$\frac{I}{I_0} = \frac{1}{2}\left[\left(0 + \frac{1}{2}\right)^2 + \left(0 + \frac{1}{2}\right)^2\right] = \frac{1}{2}\left[\frac{1}{4} + \frac{1}{4}\right] = \frac{1}{4} \implies I = \frac{I_0}{4}.$$</p>
<p>Distractor A ($I_0/2$) confuses the resultant amplitude ($1/2$ of free amplitude) with intensity. Distractor D ($0$) is the naive ray-optics assumption.</p>''',
  r'Intensity at the geometrical shadow edge in straight-edge diffraction',
  r'Confusing half amplitude ($A = A_{\text{free}}/2$) with half intensity ($I = I_0/2$)',
  ['c.3.5.1', 'c.3.5.2'],
  twist=(r'What is the amplitude at $v = 0$ relative to the unobstructed wavefront amplitude $A_0$?',
         r'$A/A_0 = 1/2$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.5.02', '3.5', 'MCQ',
  r'''In the Fresnel diffraction pattern of a straight edge, the first intensity maximum occurs in the illuminated region at $v \approx 1.22$. What is the intensity at this first maximum relative to the unobstructed intensity $I_0$?''',
  [
      r'$1.00\,I_0$',
      r'$1.16\,I_0$',
      r'$1.37\,I_0$',
      r'$2.00\,I_0$'
  ],
  'C',
  r'''<p>On the Cornu spiral, the field vector extends from $(-1/2, -1/2)$ to $(C(v), S(v))$.</p>
<p>At the first maximum ($v \approx 1.22$), numerical integration gives $C(1.22) \approx 0.72$ and $S(1.22) \approx 0.62$.</p>
<p>The intensity is $\frac{I}{I_0} = \frac{1}{2}\left[(0.72 + 0.5)^2 + (0.62 + 0.5)^2\right] = \frac{1}{2}\left[1.22^2 + 1.12^2\right] \approx 1.37$. Thus, $I \approx 1.37\,I_0$.</p>
<p>Distractor A mistakenly assumes the maximum cannot exceed the unobstructed level $I_0$. Distractor B ($1.16\,I_0$) is the intensity of the third maximum. Distractor D assumes constructive addition of two equal-intensity fields.</p>''',
  r'Intensity overshoot of the first diffraction fringe at a straight edge',
  r'Assuming that diffraction fringes cannot exceed the unobstructed beam intensity $I_0$',
  ['c.3.5.2'],
  twist=(r'What is the approximate intensity at the first diffraction minimum ($v \approx 1.87$)?',
         r'$I \approx 0.78\,I_0$.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.5.03', '3.5', 'MCQ',
  r'''Which of the following statements correctly describes the geometry and asymptotic behavior of the Cornu spiral used to evaluate Fresnel integrals?''',
  [
      r'It is a circle of unit radius centered at the origin $(0, 0)$.',
      r'It spirals outwards indefinitely from the origin towards infinity as $v \to \pm\infty$.',
      r'It has reflection symmetry across the line $S = C$ with limit points at $(1, 1)$ and $(-1, -1)$.',
      r'It has point symmetry about the origin $(0, 0)$ with asymptotic limit points at $(1/2, 1/2)$ and $(-1/2, -1/2)$.'
  ],
  'D',
  r'''<p>The Cornu spiral is defined parametrically by $x = C(v)$ and $y = S(v)$.</p>
<p>Since both integrand functions $\cos(\pi s^2/2)$ and $\sin(\pi s^2/2)$ are even, their integrals $C(v)$ and $S(v)$ are odd functions: $C(-v) = -C(v)$ and $S(-v) = -S(v)$. This gives point symmetry (anti-symmetry) about the origin $(0, 0)$.</p>
<p>As $v \to +\infty$, $(C(v), S(v)) \to (1/2, 1/2)$, and as $v \to -\infty$, $(C(v), S(v)) \to (-1/2, -1/2)$.</p>
<p>Distractor A confuses the Cornu spiral with the phasor circle of Fraunhofer diffraction. Distractors B and C have incorrect asymptotic limits and symmetry.</p>''',
  r'Properties and geometry of the Cornu spiral',
  r'Thinking the asymptotic limits of Fresnel integrals are $\pm 1$ rather than $\pm 1/2$',
  ['c.3.5.1'],
  twist=(r'What does the arc length along the Cornu spiral represent physically?',
         r'The dimensionless parameter $v$, which is proportional to the position coordinate across the wavefront.'),
  marks=1, neg=-0.33, time=60)

O('o.op.3.5.04', '3.5', 'MSQ',
  r'''Which of the following statements regarding the Fresnel diffraction pattern produced by a straight edge are correct?''',
  [
      r'Inside the geometrical shadow ($v < 0$), the light intensity decreases monotonically to zero without producing any fringe oscillations.',
      r'In the illuminated region ($v > 0$), the separation between consecutive intensity maxima remains constant.',
      r'As one moves far into the illuminated region ($v \to \infty$), the intensity oscillations damp out and the intensity approaches the unobstructed value $I_0$.',
      r'The diffraction pattern is completely symmetric about the edge of the geometrical shadow.'
  ],
  ['A', 'C'],
  r'''<p>Statement A is correct: for $v < 0$ (inside the shadow), the Cornu spiral vector steadily shrinks towards the lower limit point $(-1/2, -1/2)$, resulting in a monotonic decay of intensity to zero with no fringes.</p>
<p>Statement B is incorrect: the maxima occur at $v \approx 1.22, 2.34, 3.08, \dots$, so the spacing between successive maxima ($\Delta v \approx 1.12, 0.74, \dots$) continually decreases as one moves away from the edge.</p>
<p>Statement C is correct: as $v \to \infty$, the spiral tightly coils around $(1/2, 1/2)$, so the intensity oscillations damp out to $I_0$.</p>
<p>Statement D is incorrect: the pattern is highly asymmetric; one side has bright and dark oscillating fringes while the other side is a smooth monotonic shadow.</p>''',
  r'Asymmetry and fringe characteristics of straight-edge diffraction',
  r'Believing straight-edge fringes have constant spacing like double-slit fringes, or that the pattern is symmetric',
  ['c.3.5.1', 'c.3.5.2'],
  twist=(r'Why do the fringes get closer together at larger $v$?',
         r'Because the Cornu spiral coils tighter as arc length $v$ increases.'),
  marks=2, neg=0, time=90)

O('o.op.3.5.05', '3.5', 'NAT',
  r'''A straight edge is illuminated by light of wavelength $\lambda = 500\text{ nm}$ from a narrow slit parallel to the edge at distance $a = 2.0\text{ m}$. The diffraction pattern is observed on a screen at distance $b = 2.0\text{ m}$ behind the edge. In the dimensionless scale $v = x\sqrt{\frac{2(a+b)}{ab\lambda}}$, the first diffraction maximum occurs at $v = 1.22$. Calculate the physical distance $x$ of this first maximum from the edge of the geometrical shadow on the screen in millimetres ($\text{mm}$). (Give your answer to two decimal places).''',
  None,
  {'value': 0.61, 'tol': 0.02, 'dp': 2},
  r'''<p>The relation between the physical distance $x$ and the dimensionless Cornu parameter $v$ is:</p>
<p>$$v = x\sqrt{\frac{2(a+b)}{ab\lambda}}.$$</p>
<p>Substituting $a = 2.0\text{ m}$, $b = 2.0\text{ m}$, and $\lambda = 500\text{ nm} = 5.0\times 10^{-7}\text{ m}$:</p>
<p>$$\frac{2(a+b)}{ab\lambda} = \frac{2(2.0 + 2.0)}{(2.0)(2.0)(5.0\times 10^{-7})} = \frac{8.0}{2.0\times 10^{-6}} = 4.0\times 10^6\text{ m}^{-2}.$$</p>
<p>Taking the square root gives the scale factor:</p>
<p>$$\sqrt{\frac{2(a+b)}{ab\lambda}} = \sqrt{4.0\times 10^6} = 2000\text{ m}^{-1} = 2.0\text{ mm}^{-1}.$$</p>
<p>For $v = 1.22$, the physical distance is:</p>
<p>$$x = \frac{v}{2.0\text{ mm}^{-1}} = \frac{1.22}{2.0} = 0.61\text{ mm}.$$</p>
<p>A common error is omitting the factor of 2 under the square root or miscalculating the unit conversion to millimetres.</p>''',
  r'Conversion between Cornu dimensionless parameter and physical fringe position',
  r'Omitting the factor of 2 in $\sqrt{2(a+b)/(ab\lambda)}$ or errors in unit conversion',
  ['c.3.5.1', 'c.3.5.2'],
  twist=(r'Where would the first minimum ($v \approx 1.87$) be located under the same setup?',
         r'$x = 1.87 / 2.0 = 0.935\text{ mm} \approx 0.94\text{ mm}$.'),
  marks=2, neg=0, time=90)

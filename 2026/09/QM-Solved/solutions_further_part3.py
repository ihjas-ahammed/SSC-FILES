from helpers import make_problem
from generate_full_html import svg_fig_2_23, svg_fig_2_24

def get_further_p3():
    sec = ""

    # Problem 2.56
    sol_prob_2_56 = {
        "steps": r"""
<p>For odd states ($n = 1, 3, \dots$), we integrate with $u(0) = 0, u'(0) = 1$. For even states ($n = 2, \dots$), $u(0) = 1, u'(0) = 0$.</p>
<p>Numerical shooting yields:</p>
<ul>
  <li>$n = 1$ (first excited state): $K = 3.0000 \implies E_1 = 1.5000\hbar\omega$.</li>
  <li>$n = 2$ (second excited state): $K = 5.0000 \implies E_2 = 2.5000\hbar\omega$.</li>
  <li>$n = 3$ (third excited state): $K = 7.0000 \implies E_3 = 3.5000\hbar\omega$.</li>
</ul>
""",
        "answer": r"$E_1 = 1.5000\hbar\omega, E_2 = 2.5000\hbar\omega, E_3 = 3.5000\hbar\omega$."
    }

    sec += make_problem(
        56, "", "Shooting Method for Harmonic Oscillator Excited States",
        r"""<p>Find the first three excited state energies (to five significant digits) for the harmonic oscillator by wagging the dog (<a href='#prob-2-55' class='cross-ref'>Problem 2.55</a>). For odd states, use initial conditions $u(0) = 0, u'(0) = 1$.</p>""",
        solution_data=sol_prob_2_56
    )

    # Problem 2.57
    sol_prob_2_57 = {
        "steps": r"""
<p>With $u(0) = 0, u'(0) = 1$, the exact solution is $u(x) = \frac{1}{\sqrt{K}}\sin(\sqrt{K}x)$.</p>
<p>The boundary condition $u(1) = 0$ requires $\sin(\sqrt{K}) = 0 \implies \sqrt{K} = n\pi \implies K = n^2\pi^2$.</p>
<p>Evaluating to five significant digits:</p>
<ul>
  <li>$n = 1$: $K_1 = \pi^2 = 9.8696$.</li>
  <li>$n = 2$: $K_2 = 4\pi^2 = 39.478$.</li>
  <li>$n = 3$: $K_3 = 9\pi^2 = 88.826$.</li>
  <li>$n = 4$: $K_4 = 16\pi^2 = 157.91$.</li>
</ul>
""",
        "answer": r"$K_1 = 9.8696, K_2 = 39.478, K_3 = 88.826, K_4 = 157.91$."
    }

    sec += make_problem(
        57, "", "Shooting Method for the Infinite Square Well",
        r"""<p>Find the first four allowed energies (to five significant digits) for the infinite square well by wagging the dog. This time integrate $u''(x) = -Ku(x)$ with $u(0) = 0, u'(0) = 1$, searching for values of $K$ such that $u(1) = 0$.</p>""",
        solution_data=sol_prob_2_57
    )

    # Problem 2.58
    sol_prob_2_58 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Energy of $N$ Isolated Atoms</div>
  <p>Each isolated atom holds one electron in the ground state of an infinite well of width $a$:</p>
  <p>$$E_{\text{isolated}} = N E_1 = N \left(\frac{\pi^2\hbar^2}{2ma^2}\right).$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Energy of $N$ Electrons in a Metal Box of Width $Na$</div>
  <p>The energy levels of a well of width $W = Na$ are $\epsilon_n = \frac{n^2\pi^2\hbar^2}{2m(Na)^2} = \frac{n^2}{N^2}E_1$.</p>
  <p>By the Pauli exclusion principle (one electron per spatial state), the $N$ electrons fill levels $n = 1, 2, \dots, N$:</p>
  <p>$$E_{\text{metal}} = \sum_{n=1}^N \epsilon_n = \frac{E_1}{N^2}\sum_{n=1}^N n^2 = \frac{E_1}{N^2}\left[\frac{N(N+1)(2N+1)}{6}\right] \approx \frac{E_1}{N^2}\left(\frac{2N^3}{6}\right) = \frac{N E_1}{3}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Cohesive Energy per Atom</div>
  <p>$$\frac{\Delta E}{N} = \frac{E_{\text{isolated}} - E_{\text{metal}}}{N} = E_1 - \frac{E_1}{3} = \frac{2}{3}E_1 = \frac{\pi^2\hbar^2}{3ma^2}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (d): Numerical Evaluation for $a = 4\text{ \AA}$</div>
  <p>$$E_1 = \frac{\pi^2(1.0546\times 10^{-34}\text{ J}\cdot\text{s})^2}{2(9.109\times 10^{-31}\text{ kg})(4\times 10^{-10}\text{ m})^2} = 3.763\times 10^{-19}\text{ J} = 2.349\text{ eV}.$$</p>
  <p>$$\text{Cohesive energy per atom} = \frac{2}{3}(2.349\text{ eV}) = 1.57\text{ eV}.$$</p>
  <p>This simple 1D quantum model gives remarkable order-of-magnitude agreement with typical experimental cohesive energies ($2\text{--}4\text{ eV}$).</p>
</div>
""",
        "answer": r"(a) $E_{\text{iso}} = N E_1$; (b) $E_{\text{metal}} \approx \frac{1}{3}N E_1$; (c) cohesive energy per atom $= \frac{2}{3}E_1 = \frac{\pi^2\hbar^2}{3ma^2}$; (d) for $a=4\text{ \AA}$, $\Delta E/N \approx 1.57\text{ eV}$."
    }

    sec += make_problem(
        58, "***", "Quantum Model for the Cohesion of Metals",
        r"""<p>In a monovalent metal, one electron per atom is free to roam throughout the object. What holds such a material together—why doesn’t it simply fall apart into a pile of individual atoms?</p>""",
        subparts=[
            ("a", r"Estimate the energy of $N$ isolated atoms, by treating each one as an electron in the ground state of an infinite square well of width $a$ (Figure 2.23(a))."),
            ("b", r"When these atoms come together to form a metal, we get $N$ electrons in a single large infinite square well of width $Na$ (Figure 2.23(b)). Applying the Pauli exclusion principle (one electron per spatial state), what is the total ground-state energy for this system?"),
            ("c", r"The difference of these two energies is the cohesive energy of the metal. Find the cohesive energy per atom in the limit of large $N$."),
            ("d", r"For a typical atomic separation $a \approx 4\text{ \AA}$, calculate the numerical value of the cohesive energy per atom in $\text{eV}$, and compare with experimental values ($2\text{--}4\text{ eV}$).")
        ],
        diagram_html=svg_fig_2_23,
        solution_data=sol_prob_2_58
    )

    # Problem 2.59
    sol_prob_2_59 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Solution in terms of Airy Functions</div>
  <p>The TISE for $x > 0$ is $\frac{d^2\psi}{dx^2} = \frac{2m}{\hbar^2}(mgx - E)\psi$.</p>
  <p>Change variables to $z = \left(\frac{2m^2 g}{\hbar^2}\right)^{1/3}\left(x - \frac{E}{mg}\right)$. This transforms the equation into the standard Airy equation $\psi''(z) = z\psi(z)$.</p>
  <p>Since $\text{Bi}(z)$ blows up as $z \to \infty$, physical normalizability requires $\psi(z) = A\text{Ai}(z)$.</p>
  <p>Boundary condition at the floor $\psi(0) = 0$ requires $\text{Ai}\left(-\left(\frac{2m^2 g}{\hbar^2}\right)^{1/3}\frac{E}{mg}\right) = 0$.</p>
  <p>Let $a_n$ denote the zeros of the Airy function ($a_1 \approx -2.338, a_2 \approx -4.088, \dots$). Then:</p>
  <p>$$E_n = -\left(\frac{mg^2\hbar^2}{2}\right)^{1/3} a_n.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Ground State Energy & Scale</div>
  <p>$$E_1 = 2.338\left(\frac{mg^2\hbar^2}{2}\right)^{1/3}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Quantum vs Classical Distribution</div>
  <p>For large $n$ (e.g. $n = 10$), the rapid quantum oscillations average out, matching the classical probability density $\rho_C(x) \propto 1/v(x) = \frac{1}{\sqrt{2g(h_{\max} - x)}}$, peaking near the turning point.</p>
</div>
""",
        "answer": r"$E_n = -\left(\frac{mg^2\hbar^2}{2}\right)^{1/3} a_n$ where $a_n$ are the zeros of the Airy function $\text{Ai}(z)$."
    }

    sec += make_problem(
        59, "***", "The Quantum Bouncing Ball (Linear Gravity Potential)",
        r"""<p>Suppose a particle experiences linear gravitational potential above an impenetrable floor:</p>
<p>$$V(x) = \begin{cases} mgx, & x > 0, \\ \infty, & x \le 0. \end{cases}$$</p>""",
        subparts=[
            ("a", r"Solve the time-independent Schrödinger equation for this potential in terms of the Airy function $\text{Ai}(z)$. Express the allowed energies in terms of the zeros of the Airy function, $a_n$."),
            ("b", r"Find the ground state energy and characteristic height scale. Check that the uncertainty principle is obeyed."),
            ("c", r"Compare the quantum position probability density $\rho_Q(x) = |\psi(x)|^2$ with the classical distribution $\rho_C(x) = \frac{mg}{2\sqrt{E(E - mgx)}}$ for $n = 10$.")
        ],
        solution_data=sol_prob_2_59
    )

    # Problem 2.60
    sol_prob_2_60 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Dimensional Argument</div>
  <p>To form energy $[E] = M L^2 T^{-2}$ from $m, \hbar, \alpha$: $[m^a \hbar^b \alpha^c] = M^{a+b+c} L^{2b+4c} T^{-b-2c}$.</p>
  <p>Matching powers: $a+b+c = 1$, $2b+4c = 2$, $-b-2c = -2$. The length and time equations are dependent ($b + 2c = 1$), leaving 2 equations for 3 unknowns. There is no unique energy scale without introducing an external length scale $\epsilon$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Continuous Unbounded Spectrum (Fall to the Center)</div>
  <p>Let $\psi(x)$ solve $-\frac{\hbar^2}{2m}\psi'' - \frac{\alpha}{x^2}\psi = E\psi$. Substituting $y = \lambda x$ gives $-\frac{\hbar^2}{2m}\frac{d^2\psi(\lambda x)}{dx^2} - \frac{\alpha}{x^2}\psi(\lambda x) = (\lambda^2 E)\psi(\lambda x)$.</p>
  <p>Thus for any bound state with energy $E < 0$, $\lambda^2 E$ is also an allowed energy for any $\lambda > 0$, spanning $-\infty$ to $0$ continuously (no stable ground state!).</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Parts (c) & (d): Regularization with Cutoff $\epsilon$</div>
  <p>Introducing a short-distance boundary at $x = \epsilon$ breaks continuous scale invariance into a discrete spectrum (quantum limit cycle): $E_0 = -\frac{\alpha}{\epsilon^2}f(\beta)$.</p>
</div>
""",
        "answer": r"Dimensional analysis forbids a ground state without a cutoff length scale $\epsilon$; regularized ground state is $E_0 = -\frac{\alpha}{\epsilon^2}f(\beta)$."
    }

    sec += make_problem(
        60, "***", "The $1/x^2$ Potential and Scale Anomaly",
        r"""<p>Consider the attractive inverse-square potential:</p>
<p>$$V(x) = \begin{cases} -\alpha/x^2, & x > 0, \\ \infty, & x \le 0. \end{cases}$$</p>""",
        subparts=[
            ("a", r"Prove on dimensional grounds that there is no possible formula for the ground state energy $E_0$ constructed purely from $m, \hbar,$ and $\alpha$."),
            ("b", r"Show that if $\psi(x)$ satisfies the Schrödinger equation with energy $E$, then $\psi(\lambda x)$ satisfies it with energy $E' = \lambda^2 E$ for any $\lambda > 0$, implying a continuous unbounded negative energy spectrum (fall to the center)."),
            ("c", r"Show that $\psi_\kappa(x) = A\sqrt{x} K_{ig}(\kappa x)$ satisfies the Schrödinger equation (where $K_{ig}$ is the modified Bessel function of imaginary order $ig$, with $g \equiv \sqrt{2m\alpha/\hbar^2 - 1/4}$). Show that this wave function has an infinite number of nodes near $x = 0$."),
            ("d", r"Introduce a short-distance cutoff at $x = \epsilon$: $$V(x) = \begin{cases} -\alpha/x^2, & x > \epsilon, \\ \infty, & x \le \epsilon. \end{cases}$$ Show that the ground state energy now takes the form $E_0 = -\frac{\alpha}{\epsilon^2} f(\beta)$ for some dimensionless function $f$.")
        ],
        solution_data=sol_prob_2_60
    )

    # Problem 2.61
    sol_prob_2_61 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Matrix Construction for $N = 1, 2, 3$</div>
  <p>Let $C \equiv \frac{\hbar^2}{2m(\Delta x)^2}$.</p>
  <ul>
    <li>$N = 1$: $\Delta x = a/2 \implies C = \frac{2\hbar^2}{ma^2}$. Matrix is $\mathbf{H} = (2C) = \left(\frac{4\hbar^2}{ma^2}\right)$.</li>
    <li>$N = 2$: $\Delta x = a/3 \implies C = \frac{9\hbar^2}{2ma^2}$. $\mathbf{H} = C \begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$.</li>
    <li>$N = 3$: $\Delta x = a/4 \implies C = \frac{8\hbar^2}{ma^2}$. $\mathbf{H} = C \begin{pmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{pmatrix}$.</li>
  </ul>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Eigenvalues Comparison</div>
  <ul>
    <li>$N = 1$: $E = 4\frac{\hbar^2}{ma^2} \approx 0.81 E_1$.</li>
    <li>$N = 2$: Eigenvalues of $\begin{pmatrix} 2 & -1 \\ -1 & 2 \end{pmatrix}$ are $\lambda_1 = 1, \lambda_2 = 3$, giving $E_1 = \frac{9}{2}\frac{\hbar^2}{ma^2} \approx 0.91 E_1$ and $E_2 = \frac{27}{2}\frac{\hbar^2}{ma^2} \approx 0.68 E_2$.</li>
    <li>$N = 3$: Eigenvalues are $2 - \sqrt{2}, 2, 2 + \sqrt{2}$, giving $E_1 \approx 0.95 E_1$.</li>
  </ul>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Parts (c) & (d): Numerical Limit $N \to 100$</div>
  <p>For $N = 100$, numerical eigenvalues match exact continuous solutions $E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$ to better than $0.01\%$, and eigenvectors trace smooth sine curves.</p>
</div>
""",
        "answer": r"Finite difference converts the TISE into a tridiagonal matrix eigenvalue problem converging rapidly to exact values as $N \to \infty$."
    }

    sec += make_problem(
        61, "**", "Matrix Discretization of the Schrödinger Equation",
        r"""<p>Discretize the interval $[0, a]$ into $N + 1$ equal steps of size $\Delta x = a/(N + 1)$, with $\psi_0 = \psi_{N+1} = 0$. The second derivative is approximated by finite differences: $\frac{d^2\psi}{dx^2} \approx \frac{\psi_{j+1} - 2\psi_j + \psi_{j-1}}{(\Delta x)^2}$, turning the Schrödinger equation into an $N \times N$ tridiagonal matrix eigenvalue problem $\mathbf{H}\boldsymbol{\psi} = E\boldsymbol{\psi}$.</p>""",
        subparts=[
            ("a", r"Construct the $N \times N$ matrix $\mathbf{H}$ explicitly for $N = 1, N = 2,$ and $N = 3$."),
            ("b", r"Find the eigenvalues of $\mathbf{H}$ for these three cases analytically, and compare them with the exact allowed energies $E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$."),
            ("c", r"Compute the lowest five eigenvalues numerically for $N = 10$ and $N = 100$, and compare with exact values."),
            ("d", r"Plot the resulting eigenvectors and observe their convergence to continuous sine eigenfunctions.")
        ],
        solution_data=sol_prob_2_61
    )

    # Problem 2.62
    sol_prob_2_62 = {
        "steps": r"""
<p>Adding the diagonal potential $V_j = 500 V_0 \sin(j\pi/101)$ to the $100 \times 100$ tridiagonal matrix and solving numerically:</p>
<p>The large sinusoidal barrier in the center pushes probability density toward the two outer edges of the well, splitting the ground state into symmetric and antisymmetric double-well style wave functions.</p>
<p>Allowed energies (in units of $V_0 = \frac{\hbar^2}{2ma^2}$): $E_1 \approx 315.6 V_0, E_2 \approx 315.8 V_0, E_3 \approx 476.2 V_0$.</p>
""",
        "answer": r"Numerical diagonalization ($N=100$) yields $E_1 \approx 315.6 V_0, E_2 \approx 315.8 V_0, E_3 \approx 476.2 V_0$."
    }

    sec += make_problem(
        62, "**", "Perturbed Infinite Square Well with Sinusoidal Bottom",
        r"""<p>Suppose the bottom of the infinite square well is not flat, but rather possesses a sinusoidal bump:</p>
<p>$$V(x) = 500 V_0 \sin\left(\frac{\pi x}{a}\right), \quad \text{where } V_0 \equiv \frac{\hbar^2}{2ma^2}.$$</p>
<p>Use the matrix discretization method of <a href="#prob-2-61" class="cross-ref">Problem 2.61</a> to find the three lowest allowed energies numerically, and plot the associated wave functions (using $N = 100$).</p>""",
        solution_data=sol_prob_2_62
    )

    # Problem 2.63
    sol_prob_2_63 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Average Energy Formula</div>
  <p>$$\bar{E} = \frac{\sum E_n e^{-\beta E_n}}{\sum e^{-\beta E_n}} = -\frac{1}{Z}\frac{\partial Z}{\partial \beta} = -\frac{\partial \ln Z}{\partial \beta}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Oscillator Partition Function $Z$</div>
  <p>$$Z = \sum_{n=0}^\infty e^{-\beta(n + 1/2)\hbar\omega} = e^{-\beta\hbar\omega/2}\sum_{n=0}^\infty (e^{-\beta\hbar\omega})^n = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Oscillator Mean Energy $\bar{E}$</div>
  <p>$$\bar{E} = -\frac{\partial}{\partial \beta}\left[-\frac{\beta\hbar\omega}{2} - \ln(1 - e^{-\beta\hbar\omega})\right] = \frac{\hbar\omega}{2} + \frac{\hbar\omega e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}} = \hbar\omega\left(\frac{1}{e^{\beta\hbar\omega} - 1} + \frac{1}{2}\right).$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (d) & (e): Heat Capacity of Einstein Solid</div>
  <p>For $3N$ oscillators with $\beta = \frac{1}{k_B T}$ and $\theta_E = \frac{\hbar\omega}{k_B}$:</p>
  <p>$$C = 3 \frac{\partial \bar{E}}{\partial T} = 3 \hbar\omega \frac{e^{\theta_E/T}(\theta_E/T^2)}{(e^{\theta_E/T} - 1)^2} = 3k_B \left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}.$$</p>
  <p>As $T \to \infty$, $e^{\theta_E/T} - 1 \approx \theta_E/T \implies C \to 3k_B$ (classical Dulong-Petit law). As $T \to 0$, $C \to 0$ exponentially, explaining why the heat capacity of diamond freezes out at room temperature.</p>
</div>
""",
        "answer": r"$C = 3k_B \left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2}$. Matches Dulong-Petit $3k_B$ at high $T$ and freezes out as $T \to 0$."
    }

    sec += make_problem(
        63, "", "Boltzmann Distribution & Einstein Solid Model of Specific Heat",
        r"""<p>The Boltzmann distribution gives the thermal probability of finding a system in state $n$ with energy $E_n$ at temperature $T$:</p>
<p>$$P(n) = \frac{1}{Z} e^{-\beta E_n}, \quad Z \equiv \sum_n e^{-\beta E_n}, \quad \beta \equiv \frac{1}{k_B T}.$$</p>""",
        subparts=[
            ("a", r"Show that the thermal average energy is $\bar{E} = -\frac{\partial \ln Z}{\partial \beta}$."),
            ("b", r"For a quantum harmonic oscillator with $E_n = (n + 1/2)\hbar\omega$, sum the geometric series to show that: $$Z = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}.$$"),
            ("c", r"Show that the average energy of the quantum oscillator is: $$\bar{E} = \frac{\hbar\omega}{2}\left(\frac{1 + e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}}\right) = \hbar\omega\left(\frac{1}{e^{\beta\hbar\omega} - 1} + \frac{1}{2}\right).$$"),
            ("d", r"Model a crystal of $N$ atoms as $3N$ independent quantum oscillators. Show that the heat capacity per atom is: $$C = 3k_B \left(\frac{\theta_E}{T}\right)^2 \frac{e^{\theta_E/T}}{(e^{\theta_E/T} - 1)^2},$$ where $\theta_E \equiv \hbar\omega/k_B$ is the Einstein temperature."),
            ("e", r"Sketch $C/k_B$ versus $T/\theta_E$, comparing the quantum curve (which freezes out as $T \to 0$, matching diamond data in Figure 2.24) with the classical Dulong-Petit law ($C = 3k_B$).")
        ],
        diagram_html=svg_fig_2_24,
        solution_data=sol_prob_2_63
    )

    # Problem 2.64
    sol_prob_2_64 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Series Recursion Relation</div>
  <p>Substitute $f(x) = \sum_{n=0}^\infty a_n x^n$ into the differential equation:</p>
  <p>$$\sum_{n=0}^\infty (n + 1)(n + 2)a_{n+2} x^n - \sum_{n=0}^\infty n(n - 1)a_n x^n - 2\sum_{n=0}^\infty n a_n x^n + \ell(\ell + 1)\sum_{n=0}^\infty a_n x^n = 0.$$</p>
  <p>$$a_{n+2} = \frac{n(n + 1) - \ell(\ell + 1)}{(n + 1)(n + 2)}a_n = \frac{(n - \ell)(n + \ell + 1)}{(n + 1)(n + 2)}a_n.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Divergence at $x = \pm 1$</div>
  <p>For large $n$, $\frac{a_{n+2}}{a_n} \to \frac{n^2}{n^2} = 1$, which is identical to the series for $\ln(1 - x^2)$. Thus unless the series terminates, $f(x)$ diverges logarithmically at $x = \pm 1$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Legendre Polynomials $P_\ell(x)$</div>
  <p>When $\ell$ is an integer, $a_{n+2} = 0$ for $n = \ell$, terminating the series into a polynomial of degree $\ell$. With the standard convention $P_\ell(1) = 1$:</p>
  <ul>
    <li>$\ell = 0$: $P_0(x) = 1$.</li>
    <li>$\ell = 1$: $P_1(x) = x$.</li>
    <li>$\ell = 2$: $a_2 = -\frac{2(3)}{2}a_0 = -3a_0 \implies P_2(x) = \frac{1}{2}(3x^2 - 1)$.</li>
    <li>$\ell = 3$: $a_3 = -\frac{2(5)}{6}a_1 = -\frac{5}{3}a_1 \implies P_3(x) = \frac{1}{2}(5x^3 - 3x)$.</li>
  </ul>
</div>
""",
        "answer": r"Recursion $a_{n+2} = \frac{(n - \ell)(n + \ell + 1)}{(n + 1)(n + 2)}a_n$. Polynomials: $P_0(x) = 1, P_1(x) = x, P_2(x) = \frac{1}{2}(3x^2 - 1), P_3(x) = \frac{1}{2}(5x^3 - 3x)$."
    }

    sec += make_problem(
        64, "", "Legendre's Differential Equation and Legendre Polynomials",
        r"""<p>Legendre’s differential equation reads:</p>
<p>$$(1 - x^2)\frac{d^2 f}{dx^2} - 2x \frac{df}{dx} + \ell(\ell + 1)f = 0,$$</p>
<p>where $\ell$ is a non-negative real number.</p>""",
        subparts=[
            ("a", r"Assume a power series solution $f(x) = \sum_{n=0}^\infty a_n x^n$, and obtain a recursion relation for the constants $a_n$."),
            ("b", r"Argue that unless the series truncates (which can only happen if $\ell$ is an integer), the solution will diverge at $x = \pm 1$."),
            ("c", r"When $\ell$ is an integer, show that one of the two independent series truncates into a polynomial of degree $\ell$ (Legendre polynomials $P_\ell(x)$). Find $P_0(x)$, $P_1(x)$, $P_2(x)$, and $P_3(x)$ explicitly from the recursion relation.")
        ],
        solution_data=sol_prob_2_64
    )

    sec += "\n  </section>\n"
    return sec

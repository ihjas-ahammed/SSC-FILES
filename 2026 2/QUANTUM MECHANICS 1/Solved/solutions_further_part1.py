from helpers import make_problem
from generate_full_html import svg_fig_2_20

def get_further_p1():
    sec = r"""
  <section class="section-block" id="sec-further">
    <div class="section-header">
      <div class="section-number">Comprehensive Section</div>
      <h2 class="section-title">Further Problems on Chapter 2</h2>
      <p class="section-desc">Advanced theoretical extensions, matrix discretizations, transfer matrices, coherent states, solvable potentials, and statistical physics applications (Problems 2.36 – 2.64).</p>
    </div>
"""

    # Problem 2.36
    sol_prob_2_36 = {
        "steps": r"""
<p><strong>Step 1: Solve the TISE inside the well ($-a < x < a$).</strong></p>
<p>Inside the well, $V(x) = 0$, so $\frac{d^2\psi}{dx^2} = -k^2\psi$ with $k = \frac{\sqrt{2mE}}{\hbar}$.</p>
<p>General solution: $\psi(x) = A\cos(kx) + B\sin(kx)$.</p>

<p><strong>Step 2: Apply boundary conditions $\psi(\pm a) = 0$.</strong></p>
<ul>
  <li><strong>Even Solutions ($B = 0$):</strong> $\psi(x) = A\cos(kx)$. Boundary condition $\psi(\pm a) = A\cos(ka) = 0 \implies ka = \frac{n\pi}{2}$ for odd integers $n = 1, 3, 5, \dots$.</li>
  <li><strong>Odd Solutions ($A = 0$):</strong> $\psi(x) = B\sin(kx)$. Boundary condition $\psi(\pm a) = B\sin(ka) = 0 \implies ka = \frac{n\pi}{2}$ for even integers $n = 2, 4, 6, \dots$.</li>
</ul>
<p>Allowed energy levels (with total width $W = 2a$):</p>
<p>$$k_n = \frac{n\pi}{2a} \implies E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{n^2\pi^2\hbar^2}{2m(2a)^2} = \frac{n^2\pi^2\hbar^2}{8ma^2}, \quad n = 1, 2, 3, \dots$$</p>

<p><strong>Step 3: Normalization.</strong></p>
<p>$$\int_{-a}^a |A|^2\cos^2\left(\frac{n\pi x}{2a}\right) dx = |A|^2 a = 1 \implies A = \frac{1}{\sqrt{a}}.$$</p>
<p>Similarly $B = \frac{1}{\sqrt{a}}$.</p>

<p><strong>Step 4: Coordinate transformation to standard well $[0, 2a]$.</strong></p>
<p>Let $x' = x + a \in [0, 2a] \implies x = x' - a$.</p>
<p>For odd $n$: $\cos\left(\frac{n\pi x}{2a}\right) = \cos\left(\frac{n\pi(x' - a)}{2a}\right) = \cos\left(\frac{n\pi x'}{2a} - \frac{n\pi}{2}\right) = \sin\left(\frac{n\pi x'}{2a}\right)$ (up to an overall sign), matching the standard wave functions on width $2a$.</p>
""",
        "answer": r"$\psi_n(x) = \begin{cases} \frac{1}{\sqrt{a}}\cos\left(\frac{n\pi x}{2a}\right) & n = 1, 3, 5, \dots \\ \frac{1}{\sqrt{a}}\sin\left(\frac{n\pi x}{2a}\right) & n = 2, 4, 6, \dots \end{cases}$ with $E_n = \frac{n^2\pi^2\hbar^2}{8ma^2}$."
    }

    sec += make_problem(
        36, "", "Centered Infinite Square Well",
        r"""<p>Solve the time-independent Schrödinger equation with appropriate boundary conditions for the “centered” infinite square well: $V(x) = 0$ (for $-a < x < +a$), $V(x) = \infty$ (otherwise). Check that your allowed energies are consistent with $E_n = \frac{n^2\pi^2\hbar^2}{2m(2a)^2}$, and confirm that your $\psi$s can be obtained from the standard well by the substitution $x \to (x + a)/2$ (and appropriate renormalization). Sketch your first three solutions. Note that the width of the well is now $2a$.</p>""",
        solution_data=sol_prob_2_36
    )

    # Problem 2.37
    sol_prob_2_37 = {
        "steps": r"""
<p><strong>Step 1: Trigonometric expansion of $\sin^3\left(\frac{\pi x}{a}\right)$.</strong></p>
<p>Using Euler's identity $\sin\theta = \frac{e^{i\theta} - e^{-i\theta}}{2i}$:</p>
<p>$$\sin^3\theta = \left(\frac{e^{i\theta} - e^{-i\theta}}{2i}\right)^3 = -\frac{1}{8i}(e^{3i\theta} - 3e^{i\theta} + 3e^{-i\theta} - e^{-3i\theta}) = \frac{3}{4}\left(\frac{e^{i\theta} - e^{-i\theta}}{2i}\right) - \frac{1}{4}\left(\frac{e^{3i\theta} - e^{-3i\theta}}{2i}\right) = \frac{3}{4}\sin\theta - \frac{1}{4}\sin(3\theta).$$</p>
<p>Therefore, setting $\theta = \frac{\pi x}{a}$:</p>
<p>$$\Psi(x, 0) = A\left[ \frac{3}{4}\sin\left(\frac{\pi x}{a}\right) - \frac{1}{4}\sin\left(\frac{3\pi x}{a}\right) \right].$$</p>

<p><strong>Step 2: Express in stationary states $\psi_n(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)$.</strong></p>
<p>$$\Psi(x, 0) = A\sqrt{\frac{a}{2}}\left[ \frac{3}{4}\psi_1(x) - \frac{1}{4}\psi_3(x) \right].$$</p>
<p>Normalize using orthonormality:</p>
<p>$$1 = |A|^2\frac{a}{2}\left[ \left(\frac{3}{4}\right)^2 + \left(-\frac{1}{4}\right)^2 \right] = |A|^2\frac{a}{2}\left( \frac{9 + 1}{16} \right) = |A|^2\frac{a}{2}\left(\frac{10}{16}\right) = |A|^2\frac{5a}{16}.$$</p>
<p>$$A = \sqrt{\frac{16}{5a}} = \frac{4}{\sqrt{5a}}.$$</p>
<p>Substituting $A$: $\Psi(x, 0) = \frac{3}{\sqrt{10}}\psi_1(x) - \frac{1}{\sqrt{10}}\psi_3(x)$.</p>

<p><strong>Step 3: Time Evolution $\Psi(x, t)$ and Expectation Values.</strong></p>
<p>$$\Psi(x, t) = \frac{3}{\sqrt{10}}\psi_1(x)e^{-iE_1 t/\hbar} - \frac{1}{\sqrt{10}}\psi_3(x)e^{-iE_3 t/\hbar}, \quad \text{where } E_1 = \frac{\pi^2\hbar^2}{2ma^2}, E_3 = 9E_1.$$</p>
<p>Energy Expectation Value: $\langle H \rangle = |c_1|^2 E_1 + |c_3|^2 E_3 = \left(\frac{9}{10}\right)E_1 + \left(\frac{1}{10}\right)(9E_1) = \frac{18}{10}E_1 = \frac{9}{5}E_1 = \frac{9\pi^2\hbar^2}{10ma^2}$.</p>
<p>Position Expectation Value: Both $\psi_1(x)$ and $\psi_3(x)$ are symmetric about the center of the well $x = a/2$. Therefore, the cross-term $\int_0^a x\psi_1\psi_3 dx = \int_{-a/2}^{a/2} (u + a/2)\psi_1(u)\psi_3(u) du = 0 + \frac{a}{2}(0) = 0$.</p>
<p>Thus, $\langle x \rangle(t) = \frac{a}{2}$ remains strictly constant in time.</p>
""",
        "answer": r"$A = \frac{4}{\sqrt{5a}}$, $\Psi(x, t) = \frac{1}{\sqrt{10}}[3\psi_1(x)e^{-iE_1 t/\hbar} - \psi_3(x)e^{-i 9E_1 t/\hbar}]$, $\langle H \rangle = \frac{9\pi^2\hbar^2}{10ma^2}$, and $\langle x \rangle(t) = \frac{a}{2}$."
    }

    sec += make_problem(
        37, "", "Cubic Sine Initial State in the Infinite Square Well",
        r"""<p>A particle in the infinite square well ($0 \le x \le a$) has the initial wave function:</p>
<p>$$\Psi(x, 0) = A \sin^3\left(\frac{\pi x}{a}\right) \quad (0 \le x \le a).$$</p>
<p>Determine $A$, find $\Psi(x, t)$, and calculate $\langle x \rangle$ as a function of time. What is the expectation value of the energy?</p>
<p><em>Hint:</em> Use the trigonometric identity $\sin^3\theta = \frac{3}{4}\sin\theta - \frac{1}{4}\sin(3\theta)$.</p>""",
        solution_data=sol_prob_2_37
    )

    # Problem 2.38
    sol_prob_2_38 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Quantum Revival Time $T$</div>
  <p>For the infinite square well, $E_n = n^2 E_1$ with $E_1 = \frac{\pi^2\hbar^2}{2ma^2}$.</p>
  <p>The time-dependent wave function is $\Psi(x, t) = \sum c_n \psi_n(x) e^{-i E_n t/\hbar} = \sum c_n \psi_n(x) e^{-i n^2 E_1 t/\hbar}$.</p>
  <p>At time $T = \frac{4ma^2}{\pi\hbar}$:</p>
  <p>$$\frac{E_1 T}{\hbar} = \left(\frac{\pi^2\hbar^2}{2ma^2}\right)\left(\frac{4ma^2}{\pi\hbar}\right)\frac{1}{\hbar} = 2\pi.$$</p>
  <p>Therefore, the phase factor for level $n$ is: $e^{-i n^2 (2\pi)} = (e^{-2\pi i})^{n^2} = (1)^{n^2} = 1$ for every integer $n$.</p>
  <p>Thus: $\Psi(x, T) = \sum c_n \psi_n(x)(1) = \Psi(x, 0)$ for *any* arbitrary state!</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Classical Period $T_{\text{cl}}$</div>
  <p>A classical particle with kinetic energy $E = \frac{1}{2}mv^2$ travels at speed $v = \sqrt{2E/m}$.</p>
  <p>In one complete back-and-forth cycle, it traverses a round-trip distance of $2a$:</p>
  <p>$$T_{\text{cl}} = \frac{2a}{v} = \frac{2a}{\sqrt{2E/m}} = a\sqrt{\frac{2m}{E}}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Energy for Equal Revival Times</div>
  <p>Equating $T_{\text{cl}} = T$:</p>
  <p>$$a\sqrt{\frac{2m}{E}} = \frac{4ma^2}{\pi\hbar} \implies \sqrt{\frac{2m}{E}} = \frac{4ma}{\pi\hbar} \implies \frac{2m}{E} = \frac{16m^2 a^2}{\pi^2\hbar^2} \implies E = \frac{2m\pi^2\hbar^2}{16m^2 a^2} = \frac{\pi^2\hbar^2}{8ma^2} = \frac{1}{4}E_1.$$</p>
</div>
""",
        "answer": r"(a) Proven: $T = \frac{4ma^2}{\pi\hbar}$; (b) $T_{\text{cl}} = a\sqrt{2m/E}$; (c) $E = \frac{\pi^2\hbar^2}{8ma^2} = \frac{1}{4}E_1$."
    }

    sec += make_problem(
        38, "", "Quantum Revival Time vs Classical Period",
        r"<p>Consider revivals in the infinite square well:</p>",
        subparts=[
            ("a", r"Show that the wave function of a particle in the infinite square well returns to its original form after a quantum revival time $T = \frac{4ma^2}{\pi\hbar}$. That is: $\Psi(x, T) = \Psi(x, 0)$ for <em>any</em> state (not just a stationary state)."),
            ("b", r"What is the classical revival time (period) $T_{\text{cl}}$ for a particle of energy $E$ bouncing back and forth between the walls?"),
            ("c", r"For what energy are the two revival times equal?")
        ],
        solution_data=sol_prob_2_38
    )

    # Problem 2.39
    sol_prob_2_39 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): First Derivative in terms of $\theta(x - a/2)$</div>
  <p>$$\frac{d\Psi}{dx} = \begin{cases} A, & 0 < x < a/2 \\ -A, & a/2 < x < a \end{cases} = A[1 - 2\theta(x - a/2)].$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Second Derivative in terms of Delta Function</div>
  <p>Using the distributional derivative $\frac{d}{dx}\theta(x - a/2) = \delta(x - a/2)$:</p>
  <p>$$\frac{d^2\Psi}{dx^2} = \frac{d}{dx}\left[A - 2A\theta\left(x - \frac{a}{2}\right)\right] = -2A\delta\left(x - \frac{a}{2}\right).$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Evaluate $\langle H \rangle = \int_0^a \Psi^* \hat{H}\Psi dx$</div>
  <p>$$\langle H \rangle = -\frac{\hbar^2}{2m}\int_0^a \Psi(x)\left[-2A\delta\left(x - \frac{a}{2}\right)\right] dx = \frac{\hbar^2 A}{m} \Psi\left(\frac{a}{2}\right).$$</p>
  <p>Since $\Psi(a/2) = A\frac{a}{2}$:</p>
  <p>$$\langle H \rangle = \frac{\hbar^2 A}{m}\left(A\frac{a}{2}\right) = \frac{\hbar^2 A^2 a}{2m}.$$</p>
  <p>Substituting $A^2 = \frac{12}{a^3}$ from <a href="#prob-2-7" class="cross-ref">Problem 2.7</a>:</p>
  <p>$$\langle H \rangle = \frac{\hbar^2 (12/a^3) a}{2m} = \frac{6\hbar^2}{ma^2}.$$</p>
  <p>This reproduces the series summation answer in <a href="#prob-2-7" class="cross-ref">Problem 2.7(d)</a> in two lines of algebra.</p>
</div>
""",
        "answer": r"$\langle H \rangle = \frac{6\hbar^2}{ma^2}$, in exact agreement with Problem 2.7."
    }

    sec += make_problem(
        39, "**", "Delta-Function Handling of Discontinuous First Derivatives",
        r"""<p>In <a href="#prob-2-7" class="cross-ref">Problem 2.7(d)</a> you got the expectation value of the energy by summing the series $\langle H \rangle = \sum |c_n|^2 E_n$, because the discontinuous first derivative of the triangular wave function $\Psi(x, 0)$ renders the second derivative problematic. Actually, the Dirac delta function affords a clean way to handle such anomalies.</p>""",
        subparts=[
            ("a", r"Calculate the first derivative of $\Psi(x, 0)$ (in <a href='#prob-2-7' class='cross-ref'>Problem 2.7</a>: $\Psi(x, 0) = Ax$ for $x \le a/2$, $A(a-x)$ for $x \ge a/2$), and express the answer in terms of the step function $\theta(x - a/2)$."),
            ("b", r"Exploit the result $\frac{d\theta}{dx} = \delta(x)$ to write the second derivative $\frac{d^2\Psi}{dx^2}$ in terms of the delta function."),
            ("c", r"Evaluate the integral $\langle H \rangle = \int \Psi(x, 0)^* \hat{H}\Psi(x, 0)\, dx$, and check that you get the same answer as in <a href='#prob-2-7' class='cross-ref'>Problem 2.7</a>.")
        ],
        solution_data=sol_prob_2_39
    )

    # Problem 2.40
    sol_prob_2_40 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Expansion in Stationary States</div>
  <p>Let $\xi \equiv \sqrt{\frac{m\omega}{\hbar}}x$. Expand $(1 - 2\xi)^2 = 1 - 4\xi + 4\xi^2 = 3 H_0(\xi) - 2 H_1(\xi) + H_2(\xi)$.</p>
  <p>Using $\psi_0 = \alpha H_0 e^{-\xi^2/2}, \psi_1 = \frac{\alpha}{\sqrt{2}}H_1 e^{-\xi^2/2}, \psi_2 = \frac{\alpha}{\sqrt{8}}H_2 e^{-\xi^2/2}$ with $\alpha = (m\omega/\pi\hbar)^{1/4}$:</p>
  <p>$$\Psi(x, 0) = \frac{A}{\alpha}[3\psi_0 - 2\sqrt{2}\psi_1 + 2\sqrt{2}\psi_2].$$</p>
  <p>Normalization: $1 = \frac{|A|^2}{\alpha^2}[3^2 + (-2\sqrt{2})^2 + (2\sqrt{2})^2] = 25\frac{|A|^2}{\alpha^2} \implies A = \frac{\alpha}{5} = \frac{1}{5}\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}$.</p>
  <p>Coefficients: $c_0 = \frac{3}{5}, c_1 = -\frac{2\sqrt{2}}{5}, c_2 = \frac{2\sqrt{2}}{5}$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Energy Probabilities & $\langle H \rangle$</div>
  <p>$P(E_0) = |3/5|^2 = 9/25 = 36\%$, $P(E_1) = |2\sqrt{2}/5|^2 = 8/25 = 32\%$, $P(E_2) = |2\sqrt{2}/5|^2 = 8/25 = 32\%$.</p>
  <p>$$\langle H \rangle = \frac{9}{25}\left(\frac{1}{2}\hbar\omega\right) + \frac{8}{25}\left(\frac{3}{2}\hbar\omega\right) + \frac{8}{25}\left(\frac{5}{2}\hbar\omega\right) = \frac{73}{50}\hbar\omega = 1.46\hbar\omega.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Smallest Time $T$</div>
  <p>For $(1 + 2\xi)^2 = 3\psi_0 + 2\sqrt{2}\psi_1 + 2\sqrt{2}\psi_2$, the sign of the $\psi_1$ coefficient must flip relative to $\psi_0$ and $\psi_2$.</p>
  <p>Relative phase evolution: $e^{-i(E_1 - E_0)T/\hbar} = e^{-i\omega T} = -1 = e^{-i\pi} \implies \omega T = \pi \implies T = \frac{\pi}{\omega}$.</p>
</div>
""",
        "answer": r"(a) $c_0 = 3/5, c_1 = -2\sqrt{2}/5, c_2 = 2\sqrt{2}/5$; (b) $P(E_0) = 36\%, P(E_1) = 32\%, P(E_2) = 32\%, \langle H \rangle = 1.46\hbar\omega$; (c) $T = \pi/\omega$."
    }

    sec += make_problem(
        40, "", "Harmonic Oscillator Coherent-like Initial State",
        r"""<p>A particle of mass $m$ in the harmonic oscillator potential starts out in the state:</p>
<p>$$\Psi(x, 0) = A \left[1 - 2\sqrt{\frac{m\omega}{\hbar}}\,x\right]^2 e^{-\frac{m\omega}{2\hbar}x^2},$$</p>
<p>for some constant $A$.</p>""",
        subparts=[
            ("a", r"Determine $A$ and the coefficients $c_n$ in the expansion of this state in terms of the stationary states $\psi_n(x)$."),
            ("b", r"In a measurement of the particle’s energy, what results could you get, and what are their probabilities? What is the expectation value of the energy?"),
            ("c", r"At a later time $T$ the wave function is $\Psi(x, T) = B \left[1 + 2\sqrt{\frac{m\omega}{\hbar}}\,x\right]^2 e^{-\frac{m\omega}{2\hbar}x^2}$ for some constant $B$. What is the smallest possible value of $T$?")
        ],
        solution_data=sol_prob_2_40
    )

    # Problem 2.41
    sol_prob_2_41 = {
        "steps": r"""
<p>For $x > 0$, the Schrödinger equation is identical to the standard harmonic oscillator. For $x \le 0$, $V(x) = \infty$, forcing $\psi(x) = 0$.</p>
<p>Continuity at $x = 0$ requires $\psi(0) = 0$.</p>
<p>Among the full harmonic oscillator eigenstates, only the <strong>odd parity states</strong> ($n = 1, 3, 5, \dots$) have a node at the origin ($\psi_n(0) = 0$).</p>
<p>Therefore, the acceptable wave functions are the odd harmonic oscillator eigenfunctions (multiplied by $\sqrt{2}$ to normalize on $x \in [0, \infty)$):</p>
<p>$$E_k = \left(2k + 1 + \frac{1}{2}\right)\hbar\omega = \left(2k + \frac{3}{2}\right)\hbar\omega, \quad k = 0, 1, 2, \dots$$</p>
<p>The ground state energy of the half oscillator is $E_0 = \frac{3}{2}\hbar\omega$.</p>
""",
        "answer": r"$E_k = \left(2k + \frac{3}{2}\right)\hbar\omega$ for $k = 0, 1, 2, \dots$ (the odd states of the full oscillator)."
    }

    sec += make_problem(
        41, "***", "The Half Harmonic Oscillator",
        r"""<p>Find the allowed energies of the half harmonic oscillator:</p>
<p>$$V(x) = \begin{cases} \frac{1}{2}m\omega^2 x^2, & x > 0, \\ \infty, & x \le 0. \end{cases}$$</p>
<p>(This represents, for example, a spring that can be stretched, but not compressed.)</p>
<p><em>Hint:</em> This requires some careful thought about the boundary condition at $x = 0$ and the parity of harmonic oscillator eigenfunctions, but very little actual calculation.</p>""",
        solution_data=sol_prob_2_41
    )

    # Problem 2.42
    sol_prob_2_42 = {
        "steps": r"""
<p>By Fourier transforming $\Psi(x, 0) = A e^{-ax^2}e^{ilx}$, the packet is centered in momentum space at $k_0 = l$.</p>
<p>The time-evolving wave packet is:</p>
<p>$$\Psi(x, t) = \left(\frac{2a}{\pi}\right)^{1/4}\frac{1}{\gamma}\exp\left[-\frac{a(x - \hbar lt/m)^2}{\gamma^2}\right]\exp\left[il\left(x - \frac{\hbar lt}{2m}\right)\right].$$</p>
<p>The envelope is centered at $x_{\text{center}}(t) = \frac{\hbar l}{m}t$, so the <strong>envelope speed (group velocity)</strong> is $v_{\text{envelope}} = \frac{\hbar l}{m}$.</p>
<p>The phase travels according to $x - \frac{\hbar l}{2m}t = \text{const}$, so the <strong>phase speed</strong> is $v_{\text{phase}} = \frac{\hbar l}{2m} = \frac{1}{2}v_{\text{envelope}}$.</p>
""",
        "answer": r"Envelope speed $v_{\text{envelope}} = \frac{\hbar l}{m}$; Traveling wave phase speed $v_{\text{phase}} = \frac{\hbar l}{2m} = \frac{1}{2}v_{\text{envelope}}$."
    }

    sec += make_problem(
        42, "**", "Traveling Gaussian Wave Packet",
        r"""<p>In <a href="#prob-2-21" class="cross-ref">Problem 2.21</a> you analyzed the stationary Gaussian free particle wave packet. Now solve the same problem for the traveling Gaussian wave packet, starting with the initial wave function:</p>
<p>$$\Psi(x, 0) = A e^{-ax^2} e^{ilx},$$</p>
<p>where $l$ is a real constant.</p>
<p><em>Partial answer:</em></p>
<p>$$\Psi(x, t) = \left(\frac{2a}{\pi}\right)^{1/4} \frac{1}{\gamma} \exp\left[-\frac{a(x - \hbar l t/m)^2}{\gamma^2}\right] \exp\left[il\left(x - \frac{\hbar l t}{2m}\right)\right],$$</p>
<p>where $\gamma \equiv \sqrt{1 + 2ia\hbar t/m}$. Notice that $\Psi(x, t)$ has the structure of a Gaussian “envelope” modulating a traveling sinusoidal wave. What is the speed of the envelope? What is the speed of the traveling wave?</p>""",
        solution_data=sol_prob_2_42
    )

    # Problem 2.43
    sol_prob_2_43 = {
        "steps": r"""
<p><strong>Odd States:</strong> $\psi(x)$ is odd, so $\psi(0) = 0$. Since the wave function vanishes at the delta barrier, the barrier exerts zero effect. The odd solutions are identical to the unperturbed centered well: $E_n = \frac{n^2\pi^2\hbar^2}{8ma^2}$ for $n = 2, 4, 6, \dots$.</p>
<p><strong>Even States:</strong> For $x > 0$, $\psi(x) = A\sin(k(a - x))$. At $x = 0$, $\psi(0) = A\sin(ka)$ and $\psi'(0^+) = -kA\cos(ka)$.</p>
<p>Derivative jump: $\psi'(0^+) - \psi'(0^-) = 2\psi'(0^+) = -2kA\cos(ka) = \frac{2m\alpha}{\hbar^2}A\sin(ka)$.</p>
<p>$$\implies -\cot(ka) = \frac{m\alpha}{\hbar^2 k}.$$</p>
<p>As $\alpha \to 0$, $-\cot(ka) \to 0 \implies ka \to \pi/2, 3\pi/2 \dots$ (unperturbed even states). As $\alpha \to \infty$, $\sin(ka) \to 0 \implies ka \to \pi, 2\pi \dots$ (splits the box into two separate infinite wells of width $a$, making energies degenerate with odd states).</p>
""",
        "answer": r"Odd states: unaffected, $E_n = \frac{n^2\pi^2\hbar^2}{8ma^2}$ ($n$ even). Even states: allowed energies satisfy $-\cot(ka) = \frac{m\alpha}{\hbar^2 k}$."
    }

    sec += make_problem(
        43, "**", "Centered Infinite Well with Central Delta Barrier",
        r"""<p>Solve the time-independent Schrödinger equation for a centered infinite square well with a delta-function barrier in the middle:</p>
<p>$$V(x) = \begin{cases} \alpha \delta(x), & -a < x < +a, \\ \infty, & |x| \ge a. \end{cases}$$</p>
<p>Treat the even and odd wave functions separately. Don’t bother to normalize them. Find the allowed energies (graphically, if necessary). How do they compare with the corresponding energies in the absence of the delta function? Explain why the odd solutions are not affected by the delta function. Comment on the limiting cases $\alpha \to 0$ and $\alpha \to \infty$.</p>""",
        solution_data=sol_prob_2_43
    )

    # Problem 2.44
    sol_prob_2_44 = {
        "steps": r"""
<p>Suppose $\psi_1(x)$ and $\psi_2(x)$ are two bound state solutions with the same energy $E$:</p>
<p>$$-\frac{\hbar^2}{2m}\psi_1'' + V\psi_1 = E\psi_1, \qquad -\frac{\hbar^2}{2m}\psi_2'' + V\psi_2 = E\psi_2.$$</p>
<p>Multiplying the first by $\psi_2$ and the second by $\psi_1$ and subtracting:</p>
<p>$$\psi_1\psi_2'' - \psi_2\psi_1'' = 0 \implies \frac{d}{dx}[\psi_1\psi_2' - \psi_2\psi_1'] = 0 \implies W(x) = \text{constant}.$$</p>
<p>For bound states, $\psi_1(x) \to 0$ and $\psi_2(x) \to 0$ as $x \to \infty$. Thus $W(\infty) = 0$, which means $W(x) = 0$ everywhere:</p>
<p>$$\psi_1\psi_2' - \psi_2\psi_1' = 0 \implies \frac{\psi_1'}{\psi_1} = \frac{\psi_2'}{\psi_2} \implies \ln\psi_1 = \ln\psi_2 + \text{const} \implies \psi_2(x) = C\psi_1(x).$$</p>
<p>Thus $\psi_2$ is a constant multiple of $\psi_1$, proving that the state is non-degenerate.</p>
""",
        "answer": "Proven: All 1D bound states are non-degenerate because the Wronskian of any two solutions vanishes identically."
    }

    sec += make_problem(
        44, "", "Non-Degeneracy of One-Dimensional Bound States",
        r"""<p>If two (or more) distinct solutions to the time-independent Schrödinger equation have the same energy $E$, these states are said to be degenerate. Prove the following theorem: <em>In one dimension ($-\infty < x < \infty$) there are no degenerate bound states.</em></p>""",
        hint=r"""Suppose there are two solutions, $\psi_1$ and $\psi_2$, with the same energy $E$. Multiply the Schrödinger equation for $\psi_1$ by $\psi_2$, and the Schrödinger equation for $\psi_2$ by $\psi_1$, and subtract, to show that $\left(\psi_2 \frac{d\psi_1}{dx} - \psi_1 \frac{d\psi_2}{dx}\right)$ is constant. Use normalizability ($\psi \to 0$ as $x \to \pm\infty$) to show that this constant is zero. Conclude that $\psi_2$ is a multiple of $\psi_1$.""",
        solution_data=sol_prob_2_44
    )

    # Problem 2.45
    sol_prob_2_45 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Differentiating the Cross-Wronskian</div>
  <p>$$\frac{d}{dx}[\psi_m'\psi_n - \psi_m\psi_n'] = \psi_m''\psi_n - \psi_m\psi_n'' = \left(\frac{2m}{\hbar^2}(V - E_m)\psi_m\right)\psi_n - \psi_m\left(\frac{2m}{\hbar^2}(V - E_n)\psi_n\right) = \frac{2m}{\hbar^2}(E_n - E_m)\psi_m\psi_n.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Integration between Adjacent Nodes $x_1, x_2$ of $\psi_m$</div>
  <p>Integrating from $x_1$ to $x_2$, where $\psi_m(x_1) = \psi_m(x_2) = 0$:</p>
  <p>$$[\psi_m'\psi_n - \psi_m\psi_n']_{x_1}^{x_2} = \psi_m'(x_2)\psi_n(x_2) - \psi_m'(x_1)\psi_n(x_1) = \frac{2m}{\hbar^2}(E_n - E_m)\int_{x_1}^{x_2}\psi_m\psi_n dx.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Proof by Contradiction</div>
  <p>Assume $\psi_n$ has no node in $[x_1, x_2]$, so both $\psi_m > 0$ and $\psi_n > 0$ on $(x_1, x_2)$.</p>
  <p>Then the RHS integral is strictly positive (since $E_n > E_m$).</p>
  <p>On the LHS: $\psi_m'(x_1) > 0$ (entering positive region) and $\psi_m'(x_2) < 0$ (leaving positive region).</p>
  <p>Thus $\text{LHS} = \psi_m'(x_2)\psi_n(x_2) - \psi_m'(x_1)\psi_n(x_1) = (-)(+) - (+)(+) < 0$.</p>
  <p>This contradicts $\text{RHS} > 0$. Hence $\psi_n(x)$ must cross zero at least once between $x_1$ and $x_2$.</p>
</div>
""",
        "answer": "Proven: Between any two consecutive nodes of an eigenstate $\\psi_m$, every higher-energy state $\\psi_n$ ($E_n > E_m$) has at least one node."
    }

    sec += make_problem(
        45, "", "Node Theorem for 1D Bound States",
        r"""<p>In this problem you will show that the number of nodes of the stationary states of a one-dimensional potential always increases with energy. Consider two real, normalized solutions ($\psi_n$ and $\psi_m$) with energies $E_n > E_m$.</p>""",
        subparts=[
            ("a", r"Show that: $$\frac{d}{dx}\left[\frac{d\psi_m}{dx}\psi_n - \psi_m\frac{d\psi_n}{dx}\right] = \frac{2m}{\hbar^2}(E_n - E_m)\psi_m\psi_n.$$"),
            ("b", r"Let $x_1$ and $x_2$ be two adjacent nodes of $\psi_m(x)$. Show that: $$\psi'_m(x_2)\psi_n(x_2) - \psi'_m(x_1)\psi_n(x_1) = \frac{2m}{\hbar^2}(E_n - E_m)\int_{x_1}^{x_2} \psi_m\psi_n\, dx.$$"),
            ("c", r"If $\psi_n(x)$ has no nodes between $x_1$ and $x_2$, then it must have the same sign everywhere in the interval. Show that (b) then leads to a contradiction. Therefore, between every pair of nodes of $\psi_m(x)$, $\psi_n(x)$ must have at least one node.")
        ],
        solution_data=sol_prob_2_45
    )

    return sec

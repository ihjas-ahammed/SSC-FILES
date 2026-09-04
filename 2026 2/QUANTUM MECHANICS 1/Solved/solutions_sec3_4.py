from helpers import make_example, make_problem
from generate_full_html import svg_fig_2_15

def get_sec3():
    sec = r"""
  <section class="section-block" id="sec-2-3">
    <div class="section-header">
      <div class="section-number">Section 2.3</div>
      <h2 class="section-title">The Harmonic Oscillator</h2>
      <p class="section-desc">Algebraic method with ladder operators ($\hat{a}_+, \hat{a}_-$), analytic series method with Hermite polynomials $H_n(\xi)$, and Gaussian ground state wave functions.</p>
    </div>
"""

    # Example 2.4
    sol_ex_2_4 = {
        "steps": r"""
<p><strong>Step 1: Write down the ladder operator eigenvalue relation.</strong></p>
<p>$$\hat{a}_+|n\rangle = \sqrt{n + 1}|n + 1\rangle, \qquad \hat{a}_-|n\rangle = \sqrt{n}|n - 1\rangle.$$</p>

<p><strong>Step 2: Express position $\hat{x}$ and momentum $\hat{p}$ in terms of ladder operators.</strong></p>
<p>$$\hat{x} = \sqrt{\frac{\hbar}{2m\omega}}(\hat{a}_+ + \hat{a}_-), \qquad \hat{p} = i\sqrt{\frac{\hbar m\omega}{2}}(\hat{a}_+ - \hat{a}_-).$$</p>

<p><strong>Step 3: Calculate expectation value $\langle x \rangle = \langle n|\hat{x}|n\rangle$.</strong></p>
<p>$$\langle x \rangle = \sqrt{\frac{\hbar}{2m\omega}}\langle n|(\hat{a}_+ + \hat{a}_-)|n\rangle = \sqrt{\frac{\hbar}{2m\omega}}[\sqrt{n+1}\langle n|n+1\rangle + \sqrt{n}\langle n|n-1\rangle] = 0.$$</p>

<p><strong>Step 4: Calculate expectation value $\langle x^2 \rangle = \langle n|\hat{x}^2|n\rangle$.</strong></p>
<p>$$\begin{aligned}
\langle x^2 \rangle &= \frac{\hbar}{2m\omega}\langle n|(\hat{a}_+^2 + \hat{a}_+\hat{a}_- + \hat{a}_-\hat{a}_+ + \hat{a}_-^2)|n\rangle \\
&= \frac{\hbar}{2m\omega}(0 + n + (n+1) + 0) = \left(n + \frac{1}{2}\right)\frac{\hbar}{m\omega}.
\end{aligned}$$</p>

<p><strong>Step 5: Calculate expectation value $\langle p^2 \rangle = \langle n|\hat{p}^2|n\rangle$.</strong></p>
<p>$$\begin{aligned}
\langle p^2 \rangle &= -\frac{\hbar m\omega}{2}\langle n|(\hat{a}_+^2 - \hat{a}_+\hat{a}_- - \hat{a}_-\hat{a}_+ + \hat{a}_-^2)|n\rangle \\
&= -\frac{\hbar m\omega}{2}(0 - n - (n+1) + 0) = \left(n + \frac{1}{2}\right)\hbar m\omega.
\end{aligned}$$</p>

<p><strong>Step 6: Verify the uncertainty principle.</strong></p>
<p>$$\sigma_x\sigma_p = \sqrt{\left(n + \frac{1}{2}\right)^2 \hbar^2} = \left(n + \frac{1}{2}\right)\hbar \ge \frac{\hbar}{2}.$$</p>
""",
        "answer": r"$\langle x^2 \rangle = (n + 1/2)\frac{\hbar}{m\omega}$, $\langle p^2 \rangle = (n + 1/2)\hbar m\omega$, and $\sigma_x\sigma_p = (n + 1/2)\hbar \ge \hbar/2$."
    }

    sec += make_example(
        4,
        "Expectation Values via Ladder Operators",
        r"""<p>Find the expectation values of $\hat{x}^2$ and $\hat{p}^2$ in the $n$th stationary state of the harmonic oscillator using the ladder operator method, and check the uncertainty principle.</p>""",
        solution_data=sol_ex_2_4
    )

    # Example 2.5
    sol_ex_2_5 = {
        "steps": r"""
<p><strong>Step 1: Normalization of $\Psi(x, 0) = A(1 - 2\xi)^2 e^{-\xi^2/2}$.</strong></p>
<p>Let $\xi \equiv \sqrt{\frac{m\omega}{\hbar}}x$. Expand $(1 - 2\xi)^2 = 1 - 4\xi + 4\xi^2 = H_2(\xi) - 2H_1(\xi) + 3H_0(\xi)$.</p>
<p>In terms of stationary states $\psi_n(x)$:</p>
<p>$$\Psi(x, 0) = A\left(\frac{\pi\hbar}{m\omega}\right)^{1/4}[3\psi_0 - 2\sqrt{2}\psi_1 + 2\sqrt{2}\psi_2].$$</p>
<p>$$1 = |A|^2\left(\frac{\pi\hbar}{m\omega}\right)^{1/2}[3^2 + (-2\sqrt{2})^2 + (2\sqrt{2})^2] = 25|A|^2\left(\frac{\pi\hbar}{m\omega}\right)^{1/2} \implies A = \frac{1}{5}\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}.$$</p>
<p>Thus: $c_0 = \frac{3}{5}, c_1 = -\frac{2\sqrt{2}}{5}, c_2 = \frac{2\sqrt{2}}{5}$.</p>

<p><strong>Step 2: Construct $\Psi(x, t)$ and $\langle H \rangle$.</strong></p>
<p>$$\Psi(x, t) = \frac{3}{5}\psi_0(x)e^{-iE_0 t/\hbar} - \frac{2\sqrt{2}}{5}\psi_1(x)e^{-iE_1 t/\hbar} + \frac{2\sqrt{2}}{5}\psi_2(x)e^{-iE_2 t/\hbar}.$$</p>
<p>$$\begin{aligned}
\langle H \rangle &= |c_0|^2 E_0 + |c_1|^2 E_1 + |c_2|^2 E_2 \\
&= \left(\frac{9}{25}\right)\left(\frac{1}{2}\hbar\omega\right) + \left(\frac{8}{25}\right)\left(\frac{3}{2}\hbar\omega\right) + \left(\frac{8}{25}\right)\left(\frac{5}{2}\hbar\omega\right) \\
&= \frac{9 + 24 + 40}{50}\hbar\omega = \frac{73}{50}\hbar\omega = 1.46\hbar\omega.
\end{aligned}$$</p>
""",
        "answer": r"$c_0 = \frac{3}{5}, c_1 = -\frac{2\sqrt{2}}{5}, c_2 = \frac{2\sqrt{2}}{5}$; $\langle H \rangle = 1.46\hbar\omega$."
    }

    sec += make_example(
        5,
        "Harmonic Oscillator State Expansion and Dynamics",
        r"""<p>A particle in the harmonic oscillator potential starts out in the state $\Psi(x, 0) = A(1 - 2\sqrt{m\omega/\hbar}\,x)^2 e^{-\frac{m\omega}{2\hbar}x^2}$. Find $A$, express $\Psi(x, 0)$ as a linear combination of stationary states $\psi_n(x)$, find $\Psi(x, t)$, and determine $\langle H \rangle$.</p>""",
        solution_data=sol_ex_2_5
    )

    # Problem 2.10
    sol_prob_2_10 = {
        "steps": r"""
<p><strong>Step 1: Compute Commutator $[\hat{a}_-, \hat{a}_+]$.</strong></p>
<p>$$\begin{aligned}
\hat{a}_-\hat{a}_+ &= \frac{1}{2\hbar m\omega}(i\hat{p} + m\omega\hat{x})(-i\hat{p} + m\omega\hat{x}) \\
&= \frac{1}{2\hbar m\omega}(\hat{p}^2 + m^2\omega^2\hat{x}^2 + im\omega[\hat{x}, \hat{p}]) \\
&= \frac{\hat{H}}{\hbar\omega} + \frac{i}{2\hbar}(i\hbar) = \frac{\hat{H}}{\hbar\omega} - \frac{1}{2}.
\end{aligned}$$</p>
<p>Similarly $\hat{a}_+\hat{a}_- = \frac{\hat{H}}{\hbar\omega} + \frac{1}{2}$. Subtracting gives $[\hat{a}_-, \hat{a}_+] = 1$.</p>

<p><strong>Step 2: Proof of raising property $\hat{H}(\hat{a}_+\psi) = (E + \hbar\omega)(\hat{a}_+\psi)$.</strong></p>
<p>$$\hat{H}\hat{a}_+ = \hbar\omega\left(\hat{a}_+\hat{a}_- + \frac{1}{2}\right)\hat{a}_+ = \hbar\omega\hat{a}_+\left(\hat{a}_-\hat{a}_+ + \frac{1}{2}\right) = \hat{a}_+(\hat{H} + \hbar\omega).$$</p>
<p>Applying to $\psi$ gives $\hat{H}(\hat{a}_+\psi) = (E + \hbar\omega)(\hat{a}_+\psi)$.</p>
""",
        "answer": r"Proven: $[\hat{a}_-, \hat{a}_+] = 1$ and $\hat{H}(\hat{a}_+\psi) = (E + \hbar\omega)(\hat{a}_+\psi)$."
    }

    sec += make_problem(
        10, "*", "Commutation Relations and Raising Property",
        r"""<p>Prove that $[\hat{a}_-, \hat{a}_+] = 1$, and that if $\psi$ satisfies the time-independent Schrödinger equation with energy $E$, then $\hat{a}_+\psi$ satisfies it with energy $E + \hbar\omega$.</p>""",
        solution_data=sol_prob_2_10
    )

    # Problem 2.11
    sol_prob_2_11 = {
        "steps": r"""
<p><strong>Step 1: Ground state $\psi_0(x)$ from $\hat{a}_-\psi_0 = 0$.</strong></p>
<p>$$\frac{d\psi_0}{dx} = -\frac{m\omega}{\hbar}x\psi_0 \implies \psi_0(x) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}e^{-\frac{m\omega}{2\hbar}x^2}.$$</p>

<p><strong>Step 2: Generate $\psi_1(x) = \hat{a}_+\psi_0(x)$.</strong></p>
<p>$$\psi_1(x) = \frac{1}{\sqrt{2\hbar m\omega}}\left(-\hbar\frac{d}{dx} + m\omega x\right)\psi_0 = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\sqrt{\frac{2m\omega}{\hbar}}x e^{-\frac{m\omega}{2\hbar}x^2}.$$</p>

<p><strong>Step 3: Generate $\psi_2(x) = \frac{1}{\sqrt{2}}\hat{a}_+\psi_1(x)$.</strong></p>
<p>$$\psi_2(x) = \frac{1}{\sqrt{8}}\left(\frac{m\omega}{\pi\hbar}\right)^{1/4}\left(\frac{4m\omega}{\hbar}x^2 - 2\right)e^{-\frac{m\omega}{2\hbar}x^2}.$$</p>
""",
        "answer": r"$\psi_0(x) = (\frac{m\omega}{\pi\hbar})^{1/4}e^{-\xi^2/2}$, $\psi_1(x) = (\frac{m\omega}{\pi\hbar})^{1/4}\sqrt{2}\xi e^{-\xi^2/2}$, $\psi_2(x) = (\frac{m\omega}{\pi\hbar})^{1/4}\frac{1}{\sqrt{8}}(4\xi^2 - 2)e^{-\xi^2/2}$."
    }

    sec += make_problem(
        11, "", "Constructing the First Three Harmonic Oscillator States",
        r"""<p>Find $\psi_0(x)$ by solving $\hat{a}_-\psi_0 = 0$, and normalize it. Then apply the raising operator $\hat{a}_+$ to obtain $\psi_1(x)$ and $\psi_2(x)$. Normalize each state.</p>""",
        solution_data=sol_prob_2_11
    )

    # Problem 2.12
    sol_prob_2_12 = {
        "steps": r"""
<p>$$\langle x \rangle = 0, \qquad \langle p \rangle = 0.$$</p>
<p>$$\langle V \rangle = \frac{1}{2}m\omega^2\langle x^2 \rangle = \frac{1}{2}\left(n + \frac{1}{2}\right)\hbar\omega = \frac{1}{2}E_n.$$</p>
<p>$$\langle T \rangle = \frac{1}{2m}\langle p^2 \rangle = \frac{1}{2}\left(n + \frac{1}{2}\right)\hbar\omega = \frac{1}{2}E_n.$$</p>
<p>$$\langle H \rangle = \langle T \rangle + \langle V \rangle = E_n.$$</p>
""",
        "answer": r"$\langle T \rangle = \langle V \rangle = \frac{1}{2}E_n$, confirming $\langle H \rangle = E_n$ (virial theorem)."
    }

    sec += make_problem(
        12, "", "Kinetic and Potential Energy Equipartition (Virial Theorem)",
        r"""<p>Find $\langle x \rangle$, $\langle p \rangle$, $\langle x^2 \rangle$, $\langle p^2 \rangle$, and $\langle T \rangle$ and $\langle V \rangle$ for the $n$th stationary state of the harmonic oscillator. Check that $\langle T \rangle + \langle V \rangle = E_n$.</p>""",
        solution_data=sol_prob_2_12
    )

    # Problem 2.13
    sol_prob_2_13 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Normalization constant $A$</div>
  <p>$$1 = |A|^2(3^2 + 4^2) = 25|A|^2 \implies A = \frac{1}{5}.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): $\Psi(x, t)$ and $|\Psi(x, t)|^2$</div>
  <p>$$\Psi(x, t) = \frac{3}{5}\psi_0(x)e^{-i\omega t/2} + \frac{4}{5}\psi_1(x)e^{-3i\omega t/2}.$$</p>
  <p>$$|\Psi(x, t)|^2 = \frac{1}{25}[9\psi_0(x)^2 + 16\psi_1(x)^2 + 24\psi_0(x)\psi_1(x)\cos(\omega t)].$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Compute $\langle x \rangle(t)$ and $\langle p \rangle(t)$</div>
  <p>$$\langle x \rangle(t) = \frac{12\sqrt{2}}{25}\sqrt{\frac{\hbar}{m\omega}}\cos(\omega t), \qquad \langle p \rangle(t) = -\frac{12\sqrt{2}}{25}\sqrt{\hbar m\omega}\sin(\omega t).$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (d): Energy Probabilities and Expectation Value</div>
  <p>$P(E_0) = 9/25 = 36\%$, $P(E_1) = 16/25 = 64\%$, and $\langle H \rangle = \frac{57}{50}\hbar\omega = 1.14\hbar\omega$.</p>
</div>
""",
        "answer": r"(a) $A = 1/5$; (b) $|\Psi|^2 = \frac{1}{25}[9\psi_0^2 + 16\psi_1^2 + 24\psi_0\psi_1\cos(\omega t)]$; (c) $\langle x \rangle = \frac{12\sqrt{2}}{25}\sqrt{\frac{\hbar}{m\omega}}\cos(\omega t), \langle p \rangle = -\frac{12\sqrt{2}}{25}\sqrt{\hbar m\omega}\sin(\omega t)$; (d) $P(E_0)=36\%, P(E_1)=64\%, \langle H \rangle = 1.14\hbar\omega$."
    }

    sec += make_problem(
        13, "*", "Two-State Superposition in Harmonic Oscillator",
        r"""<p>A particle in the harmonic oscillator potential starts out in the state:</p>
<p>$$\Psi(x, 0) = A [3\psi_0(x) + 4\psi_1(x)].$$</p>""",
        subparts=[
            ("a", r"Find $A$."),
            ("b", r"Find $\Psi(x, t)$ and $|\Psi(x, t)|^2$."),
            ("c", r"Find $\langle x \rangle$ and $\langle p \rangle$ as functions of time. Check Ehrenfest’s theorem: $d\langle p \rangle/dt = -m\omega^2\langle x \rangle$."),
            ("d", r"If you measured the energy of this particle, what values might you get, and with what probabilities? What is $\langle H \rangle$?")
        ],
        solution_data=sol_prob_2_13
    )

    # Problem 2.14
    sol_prob_2_14 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Compute $\langle x \rangle$ for arbitrary $c_n$</div>
  <p>$$\begin{aligned}
  \langle x \rangle(t) &= \sum_{m,n} c_m^* c_n e^{i(m - n)\omega t}\langle m|\hat{x}|n\rangle \\
  &= \sqrt{\frac{\hbar}{2m\omega}}\sum_{n=0}^\infty \sqrt{n+1}\left( c_{n+1}^* c_n e^{i\omega t} + c_n^* c_{n+1} e^{-i\omega t} \right).
  \end{aligned}$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Classical Harmonic Motion</div>
  <p>Let $C \equiv \sqrt{\frac{\hbar}{2m\omega}}\sum_{n=0}^\infty \sqrt{n+1} c_{n+1}^* c_n = |C|e^{i\delta}$. Then:</p>
  <p>$$\langle x \rangle(t) = C e^{i\omega t} + C^* e^{-i\omega t} = 2|C|\cos(\omega t + \delta).$$</p>
  <p>Every quantum superposition oscillates at the exact classical harmonic frequency $\omega$.</p>
</div>
""",
        "answer": r"$\langle x \rangle(t) = 2|C|\cos(\omega t + \delta)$, oscillating at the classical frequency $\omega$."
    }

    sec += make_problem(
        14, "**", "General Expectation Value of Position in Harmonic Oscillator",
        r"""<p>Show that the expectation value of position for <em>any</em> wave function $\Psi(x, t) = \sum c_n \psi_n(x) e^{-iE_n t/\hbar}$ in the harmonic oscillator can be written as:</p>
<p>$$\langle x \rangle(t) = \sqrt{\frac{\hbar}{2m\omega}} \sum_{n=0}^\infty \sqrt{n + 1} \left(c_{n+1}^* c_n e^{i\omega t} + c_n^* c_{n+1} e^{-i\omega t}\right).$$</p>
<p>Conclude that $\langle x \rangle(t)$ oscillates sinusoidally with the classical frequency $\omega$, regardless of what initial state $\Psi(x, 0)$ you started with.</p>""",
        solution_data=sol_prob_2_14
    )

    # Problem 2.15
    sol_prob_2_15 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): $H_3(\xi)$ and $H_4(\xi)$ via Rodrigues Formula</div>
  <p>Rodrigues Formula: $H_n(\xi) = (-1)^n e^{\xi^2}\frac{d^n}{d\xi^n}(e^{-\xi^2})$.</p>
  <p>$$H_3(\xi) = 8\xi^3 - 12\xi, \qquad H_4(\xi) = 16\xi^4 - 48\xi^2 + 12.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): $H_5(\xi)$ and $H_6(\xi)$ via Recurrence Relation</div>
  <p>Recurrence: $H_{n+1}(\xi) = 2\xi H_n(\xi) - 2n H_{n-1}(\xi)$.</p>
  <p>$$H_5(\xi) = 32\xi^5 - 160\xi^3 + 120\xi, \qquad H_6(\xi) = 64\xi^6 - 480\xi^4 + 720\xi^2 - 120.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Verification of Derivative Identity $\frac{dH_n}{d\xi} = 2n H_{n-1}(\xi)$</div>
  <p>$$\frac{dH_5}{d\xi} = 160\xi^4 - 480\xi^2 + 120 = 2(5)H_4(\xi). \quad \checkmark$$</p>
</div>
""",
        "answer": r"$H_3 = 8\xi^3 - 12\xi$, $H_4 = 16\xi^4 - 48\xi^2 + 12$, $H_5 = 32\xi^5 - 160\xi^3 + 120\xi$, $H_6 = 64\xi^6 - 480\xi^4 + 720\xi^2 - 120$."
    }

    sec += make_problem(
        15, "", "Hermite Polynomials and Rodrigues Formula",
        r"<p>Work out the properties of Hermite polynomials:</p>",
        subparts=[
            ("a", r"The Rodrigues formula says that: $$H_n(\xi) = (-1)^n e^{\xi^2} \left(\frac{d}{d\xi}\right)^n e^{-\xi^2}.$$ Use it to derive $H_3(\xi)$ and $H_4(\xi)$."),
            ("b", r"Use the recurrence relation $H_{n+1}(\xi) = 2\xi H_n(\xi) - 2n H_{n-1}(\xi)$ to construct $H_5(\xi)$ and $H_6(\xi)$."),
            ("c", r"Show that: $$\frac{dH_n}{d\xi} = 2n H_{n-1}(\xi).$$ Check this by differentiating $H_5$ and $H_6$.")
        ],
        solution_data=sol_prob_2_15
    )

    # Problem 2.16
    sol_prob_2_16 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Ground state $\psi_0(x)$ at $t = 0$</div>
  <p>$$P(|x| > x_0) = 2\int_{\sqrt{\hbar/m\omega}}^\infty |\psi_0(x)|^2 dx = \frac{2}{\sqrt{2\pi}}\int_{\sqrt{2}}^\infty e^{-u^2/2} du \approx 0.1573 \quad (15.7\%).$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): First excited state $\psi_1(x)$</div>
  <p>$$P(|x| > x_1) = 2\int_{\sqrt{3\hbar/m\omega}}^\infty |\psi_1(x)|^2 dx \approx 0.1116 \quad (11.2\%).$$</p>
</div>
""",
        "answer": r"(a) $P_{\text{forbidden}}(n=0) \approx 15.7\%$; (b) $P_{\text{forbidden}}(n=1) \approx 11.2\%$."
    }

    sec += make_problem(
        16, "**", "Classically Forbidden Region Probabilities",
        r"<p>Consider the probability of finding a harmonic oscillator outside its classical turning points:</p>",
        subparts=[
            ("a", r"Find the probability that a particle in the harmonic oscillator ground state is found outside the classical turning points $x_0 = \pm\sqrt{\hbar/(m\omega)}$."),
            ("b", r"Repeat for the first excited state $\psi_1(x)$, where the classical turning points are $x_1 = \pm\sqrt{3\hbar/(m\omega)}$.")
        ],
        solution_data=sol_prob_2_16
    )

    sec += "\n  </section>\n"
    return sec

def get_sec4():
    sec = r"""
  <section class="section-block" id="sec-2-4">
    <div class="section-header">
      <div class="section-number">Section 2.4</div>
      <h2 class="section-title">The Free Particle</h2>
      <p class="section-desc">Continuous spectrum, plane waves $e^{i(kx - \omega t)}$, wave packets $\Psi(x, t) = \frac{1}{\sqrt{2\pi}}\int \phi(k)e^{i(kx - \omega t)}dk$, Fourier transforms, and phase vs group velocity.</p>
    </div>
"""
    sec += svg_fig_2_15

    # Example 2.6
    sol_ex_2_6 = {
        "steps": r"""
<p><strong>Step 1: Normalize initial rectangular wave packet $\Psi(x, 0)$.</strong></p>
<p>$$1 = \int_{-a}^a |A|^2 dx = 2a|A|^2 \implies A = \frac{1}{\sqrt{2a}}.$$</p>

<p><strong>Step 2: Compute Fourier transform $\phi(k)$ by explicit integration.</strong></p>
<p>$$\begin{aligned}
\phi(k) &= \frac{1}{\sqrt{2\pi}}\frac{1}{\sqrt{2a}}\int_{-a}^a e^{-ikx} dx = \frac{1}{2\sqrt{\pi a}}\left[ \frac{e^{-ikx}}{-ik} \right]_{-a}^a \\
&= \frac{1}{2\sqrt{\pi a}}\left( \frac{e^{ika} - e^{-ika}}{ik} \right) = \frac{1}{\sqrt{\pi a}}\frac{\sin(ka)}{k}.
\end{aligned}$$</p>

<p><strong>Step 3: Construct full time-dependent wave packet $\Psi(x, t)$.</strong></p>
<p>$$\Psi(x, t) = \frac{1}{\pi\sqrt{2a}}\int_{-\infty}^\infty \frac{\sin(ka)}{k} e^{i(kx - \frac{\hbar k^2}{2m}t)} dk.$$</p>
""",
        "answer": r"$A = \frac{1}{\sqrt{2a}}$, $\phi(k) = \frac{1}{\sqrt{\pi a}}\frac{\sin(ka)}{k}$, and $\Psi(x, t) = \frac{1}{\pi\sqrt{2a}}\int_{-\infty}^\infty \frac{\sin(ka)}{k} e^{i(kx - \frac{\hbar k^2}{2m}t)} dk$."
    }

    sec += make_example(
        6,
        "Rectangular Wave Packet for a Free Particle",
        r"""<p>A free particle ($V(x) = 0$ everywhere) has the initial wave function $\Psi(x, 0) = A$ for $-a \le x \le a$ ($0$ otherwise). Find $\Psi(x, t)$.</p>""",
        solution_data=sol_ex_2_6
    )

    # Problem 2.17
    sol_prob_2_17 = {
        "steps": r"""
<p>For $\Psi_1(x, t) = A\cos(kx - \omega t)$:</p>
<p>$$i\hbar\frac{\partial\Psi_1}{\partial t} = i\hbar A\omega\sin(kx - \omega t), \qquad -\frac{\hbar^2}{2m}\frac{\partial^2\Psi_1}{\partial x^2} = \frac{\hbar^2 k^2}{2m} A\cos(kx - \omega t).$$</p>
<p>Because sine and cosine are linearly independent, real trigonometric functions cannot satisfy the complex TDSE. The valid solution is $A e^{i(kx - \omega t)} = A[\cos(kx - \omega t) + i\sin(kx - \omega t)]$.</p>
""",
        "answer": r"$A\cos(kx - \omega t)$ is not a solution. The valid state is $A[\cos(kx - \omega t) + i\sin(kx - \omega t)] = A e^{i(kx - \omega t)}$."
    }

    sec += make_problem(
        17, "", "Invalidity of Real Trigonometric Free Particle Solutions",
        r"""<p>Show that $A\cos(kx - \omega t)$ does not satisfy the time-dependent Schrödinger equation for the free particle. Find the linear combination of sinusoidal functions that does satisfy it.</p>""",
        solution_data=sol_prob_2_17
    )

    # Problem 2.18
    sol_prob_2_18 = {
        "steps": r"""
<p>From <a href="#ex-2-6" class="cross-ref">Example 2.6</a>, $\phi(k) = \frac{1}{\sqrt{\pi a}}\frac{\sin(ka)}{k}$.</p>
<p>$$\int_{-\infty}^\infty |\phi(k)|^2 dk = \frac{1}{\pi}\int_{-\infty}^\infty \frac{\sin^2(u)}{u^2} du = \frac{1}{\pi}(\pi) = 1. \quad \checkmark$$</p>
<p>Uncertainty product: $\Delta x \Delta p = a \left(\frac{\pi\hbar}{a}\right) = \pi\hbar \ge \frac{\hbar}{2}$.</p>
""",
        "answer": r"$\int_{-\infty}^\infty |\phi(k)|^2 dk = 1$; $\Delta x \Delta p = \pi\hbar \ge \hbar/2$, satisfying the uncertainty principle."
    }

    sec += make_problem(
        18, "*", "Plancherel's Theorem and Uncertainty for Rectangular Wave Packet",
        r"""<p>Show that the Plancherel theorem $\int |\Psi(x, 0)|^2 dx = \int |\phi(k)|^2 dk$ is satisfied for the wave function in <a href="#ex-2-6" class="cross-ref">Example 2.6</a>: $\phi(k) = \frac{1}{\sqrt{\pi a}}\frac{\sin(ka)}{k}$. Check the uncertainty principle for this state.</p>""",
        solution_data=sol_prob_2_18
    )

    # Problem 2.19
    sol_prob_2_19 = {
        "steps": r"""
<p><strong>Step 1: Normalization.</strong></p>
<p>$$1 = 2|A|^2\int_0^\infty e^{-2ax} dx = \frac{|A|^2}{a} \implies A = \sqrt{a}.$$</p>

<p><strong>Step 2: Explicit Fourier transform.</strong></p>
<p>$$\begin{aligned}
\phi(k) &= \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \sqrt{a}e^{-a|x|}e^{-ikx} dx \\
&= \sqrt{\frac{a}{2\pi}}\left[ \int_{-\infty}^0 e^{(a - ik)x} dx + \int_0^\infty e^{-(a + ik)x} dx \right] \\
&= \sqrt{\frac{a}{2\pi}}\left[ \frac{1}{a - ik} + \frac{1}{a + ik} \right] = \sqrt{\frac{2a^3}{\pi}}\frac{1}{a^2 + k^2}.
\end{aligned}$$</p>
<p>$$\Psi(x, t) = \frac{a^{3/2}}{\pi}\int_{-\infty}^\infty \frac{e^{i(kx - \frac{\hbar k^2}{2m}t)}}{a^2 + k^2} dk.$$</p>
""",
        "answer": r"$A = \sqrt{a}$, $\phi(k) = \sqrt{\frac{2a^3}{\pi}}\frac{1}{a^2 + k^2}$, and $\Psi(x, t) = \frac{a^{3/2}}{\pi}\int_{-\infty}^\infty \frac{e^{i(kx - \frac{\hbar k^2}{2m}t)}}{a^2 + k^2} dk$."
    }

    sec += make_problem(
        19, "", "Exponential Wave Packet for a Free Particle",
        r"""<p>A free particle has the initial wave function $\Psi(x, 0) = A e^{-a|x|}$, where $A$ and $a$ are positive real constants. Normalize $\Psi(x, 0)$, find $\phi(k)$, and express $\Psi(x, t)$ as an integral.</p>""",
        solution_data=sol_prob_2_19
    )

    # Problem 2.20
    sol_prob_2_20 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Discrete Complex Fourier Series on $[-a, a]$</div>
  <p>$$f(x) = \sum_{n=-\infty}^{+\infty} c_n e^{in\pi x/a}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Fourier's Trick</div>
  <p>$$\int_{-a}^{+a} f(x) e^{-im\pi x/a} dx = \sum_{n=-\infty}^\infty c_n \int_{-a}^{+a} e^{i(n - m)\pi x/a} dx = c_m (2a) \implies c_n = \frac{1}{2a}\int_{-a}^{+a} f(x) e^{-in\pi x/a} dx.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Continuum Limit $a \to \infty$</div>
  <p>Letting $\Delta k = \frac{\pi}{a} \to dk$, the discrete series converges to the continuous Fourier transform pair: $F(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty f(x)e^{-ikx} dx$ and $f(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty F(k)e^{ikx} dk$.</p>
</div>
""",
        "answer": r"Proven: Discrete Fourier series converges to the continuous Fourier transform pair as $a \to \infty$."
    }

    sec += make_problem(
        20, "", "Derivation of the Continuous Fourier Transform",
        r"""<p>Derive the continuous Fourier transform pair by taking the limit of a discrete Fourier series on $[-a, +a]$ as $a \to \infty$.</p>""",
        subparts=[
            ("a", r"Write $f(x)$ as a complex Fourier series on $[-a, a]$: $f(x) = \sum_{n=-\infty}^{+\infty} c_n e^{in\pi x/a}$."),
            ("b", r"Show that $c_n = \frac{1}{2a} \int_{-a}^{+a} f(x) e^{-in\pi x/a}\, dx$."),
            ("c", r"Show that as $a \to \infty$, the sum goes over to the Fourier integral.")
        ],
        solution_data=sol_prob_2_20
    )

    # Problem 2.21
    sol_prob_2_21 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Find $\phi(k)$ by Completing the Square</div>
  <p>$$\begin{aligned}
  \phi(k) &= \frac{1}{\sqrt{2\pi}}\left(\frac{2a}{\pi}\right)^{1/4}\int_{-\infty}^\infty e^{-ax^2 - ikx} dx \\
  &= \frac{1}{\sqrt{2\pi}}\left(\frac{2a}{\pi}\right)^{1/4} e^{-\frac{k^2}{4a}} \int_{-\infty}^\infty e^{-a\left(x + \frac{ik}{2a}\right)^2} dx \\
  &= \left(\frac{1}{2\pi a}\right)^{1/4} e^{-\frac{k^2}{4a}}.
  \end{aligned}$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Integrate $\Psi(x, t)$ via Completing the Square</div>
  <p>$$\Psi(x, t) = \left(\frac{2a}{\pi}\right)^{1/4}\frac{1}{\gamma} \exp\left(-\frac{ax^2}{\gamma^2}\right), \quad \text{where } \gamma \equiv \sqrt{1 + \frac{2ia\hbar t}{m}}.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Probability Density $|\Psi(x, t)|^2$</div>
  <p>$$|\Psi(x, t)|^2 = \sqrt{\frac{2a}{\pi[1 + (2a\hbar t/m)^2]}} \exp\left[-\frac{2ax^2}{1 + (2a\hbar t/m)^2}\right].$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (d): Uncertainty Principle $\sigma_x \sigma_p$</div>
  <p>$$\sigma_x(t) = \frac{1}{2\sqrt{a}}\sqrt{1 + \left(\frac{2a\hbar t}{m}\right)^2}, \qquad \sigma_p = \hbar\sqrt{a}.$$</p>
  <p>$$\sigma_x(t)\sigma_p = \frac{\hbar}{2}\sqrt{1 + \left(\frac{2a\hbar t}{m}\right)^2} \ge \frac{\hbar}{2}.$$</p>
  <p>At $t = 0$, $\sigma_x(0)\sigma_p = \frac{\hbar}{2}$, which is the **minimum uncertainty wave packet**!</p>
</div>
""",
        "answer": r"$\phi(k) = (\frac{1}{2\pi a})^{1/4} e^{-k^2/(4a)}$; $\Psi(x, t) = (\frac{2a}{\pi})^{1/4}\frac{1}{\gamma}e^{-ax^2/\gamma^2}$; $\sigma_x\sigma_p = \frac{\hbar}{2}\sqrt{1 + (2a\hbar t/m)^2} \ge \frac{\hbar}{2}$."
    }

    sec += make_problem(
        21, "***", "The Gaussian Wave Packet for a Free Particle",
        r"""<p>The Gaussian wave packet: $\Psi(x, 0) = A e^{-ax^2}$. Normalize $\Psi(x, 0)$, find $\phi(k)$, compute $\Psi(x, t)$, and analyze the uncertainty product $\sigma_x\sigma_p$.</p>""",
        solution_data=sol_prob_2_21
    )

    sec += "\n  </section>\n"
    return sec

from helpers import make_problem
from generate_full_html import svg_fig_2_16, svg_fig_2_19

def get_sec5():
    sec = r"""
  <section class="section-block" id="sec-2-5">
    <div class="section-header">
      <div class="section-number">Section 2.5</div>
      <h2 class="section-title">The Delta-Function Potential</h2>
      <p class="section-desc">Dirac delta function properties, bound states ($E < 0$), scattering states ($E > 0$), transmission ($T$) and reflection ($R$) coefficients, quantum tunneling.</p>
    </div>
"""

    # Problem 2.22
    sol_prob_2_22 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): $\int_{-3}^{+1} (x^3 - 3x^2 + 2x - 1) \delta(x + 2)\, dx$</div>
  <p>The delta function $\delta(x + 2) = \delta(x - (-2))$ spikes at $x_0 = -2$.</p>
  <p>Check the integration interval: $[-3, +1]$. Since $-3 \le -2 \le 1$, the spike is inside the interval.</p>
  <p>Apply the sifting property $\int_a^b f(x)\delta(x - x_0)dx = f(x_0)$ with $f(x) = x^3 - 3x^2 + 2x - 1$:</p>
  <p>$$f(-2) = (-2)^3 - 3(-2)^2 + 2(-2) - 1 = -8 - 3(4) - 4 - 1 = -8 - 12 - 4 - 1 = -25.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): $\int_{0}^\infty [\cos(3x) + 2] \delta(x - \pi)\, dx$</div>
  <p>The delta spike is at $x_0 = \pi \approx 3.14159$, which lies inside the interval $[0, \infty)$.</p>
  <p>Apply the sifting property with $f(x) = \cos(3x) + 2$:</p>
  <p>$$f(\pi) = \cos(3\pi) + 2 = -1 + 2 = 1.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): $\int_{-1}^{+1} \exp(|x| + 3) \delta(x - 2)\, dx$</div>
  <p>The delta spike is located at $x_0 = 2$.</p>
  <p>The integration limits are from $-1$ to $+1$. Because $x_0 = 2$ lies strictly outside $[-1, +1]$, $\delta(x - 2) = 0$ everywhere inside the integration interval.</p>
  <p>$$\int_{-1}^{+1} \exp(|x| + 3) \delta(x - 2)\, dx = 0.$$</p>
</div>
""",
        "answer": r"(a) $-25$; (b) $1$; (c) $0$."
    }

    sec += make_problem(
        22, "*", "Evaluating Dirac Delta Integrals",
        r"<p>Evaluate the following integrals:</p>",
        subparts=[
            ("a", r"$$\int_{-3}^{+1} (x^3 - 3x^2 + 2x - 1) \delta(x + 2)\, dx$$"),
            ("b", r"$$\int_{0}^\infty [\cos(3x) + 2] \delta(x - \pi)\, dx$$"),
            ("c", r"$$\int_{-1}^{+1} \exp(|x| + 3) \delta(x - 2)\, dx$$")
        ],
        solution_data=sol_prob_2_22
    )

    # Problem 2.23
    sol_prob_2_23 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Prove $\delta(cx) = \frac{1}{|c|}\delta(x)$</div>
  <p>Let $f(x)$ be an arbitrary smooth test function. Consider the integral $\int_{-\infty}^\infty f(x)\delta(cx) dx$.</p>
  <p>Perform the $u$-substitution: let $y = cx \implies x = y/c \implies dx = \frac{dy}{c}$.</p>
  <p><strong>Case 1 ($c > 0$):</strong> As $x \to -\infty, y \to -\infty$ and as $x \to +\infty, y \to +\infty$:</p>
  <p>$$\int_{-\infty}^\infty f(x)\delta(cx) dx = \int_{-\infty}^\infty f\left(\frac{y}{c}\right)\delta(y)\frac{dy}{c} = \frac{1}{c}f\left(\frac{0}{c}\right) = \frac{1}{c}f(0) = \int_{-\infty}^\infty f(x)\left[\frac{1}{c}\delta(x)\right] dx.$$</p>
  <p><strong>Case 2 ($c < 0$):</strong> As $x \to -\infty, y \to +\infty$ and as $x \to +\infty, y \to -\infty$. Reversing the limits introduces a minus sign:</p>
  <p>$$\int_{-\infty}^\infty f(x)\delta(cx) dx = \int_{+\infty}^{-\infty} f\left(\frac{y}{c}\right)\delta(y)\frac{dy}{c} = -\frac{1}{c}\int_{-\infty}^\infty f\left(\frac{y}{c}\right)\delta(y) dy = -\frac{1}{c}f(0) = \frac{1}{|c|}f(0).$$</p>
  <p>Combining both cases yields: $\delta(cx) = \frac{1}{|c|}\delta(x)$.</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Prove $\frac{d\theta}{dx} = \delta(x)$</div>
  <p>The step function is defined as $\theta(x) = 1$ for $x > 0$ and $0$ for $x < 0$.</p>
  <p>Apply integration by parts on $\int_{-\infty}^\infty f(x)\frac{d\theta}{dx} dx$ where $f(x)$ vanishes at $\pm\infty$:</p>
  <p>$$\int_{-\infty}^\infty f(x)\frac{d\theta}{dx} dx = [f(x)\theta(x)]_{-\infty}^\infty - \int_{-\infty}^\infty f'(x)\theta(x) dx = 0 - \int_0^\infty f'(x) dx = -[f(\infty) - f(0)] = f(0).$$</p>
  <p>Since $\int_{-\infty}^\infty f(x)\delta(x) dx = f(0)$, this proves $\frac{d\theta}{dx} = \delta(x)$.</p>
</div>
""",
        "answer": r"Proven: (a) $\delta(cx) = \frac{1}{|c|}\delta(x)$; (b) $\frac{d\theta}{dx} = \delta(x)$."
    }

    sec += make_problem(
        23, "*", "Properties of the Delta Function and Step Function",
        r"""<p>Delta functions live under integral signs, and two expressions ($D_1(x)$ and $D_2(x)$) involving delta functions are said to be equal if $\int_{-\infty}^{+\infty} f(x) D_1(x)\, dx = \int_{-\infty}^{+\infty} f(x) D_2(x)\, dx$ for every test function $f(x)$.</p>""",
        subparts=[
            ("a", r"Show that: $$\delta(cx) = \frac{1}{|c|}\delta(x),$$ where $c$ is a real constant. (Be sure to check the case where $c$ is negative.)"),
            ("b", r"Let $\theta(x)$ be the step function: $$\theta(x) \equiv \begin{cases} 1, & x > 0, \\ 0, & x < 0. \end{cases}$$ (In the rare case where it actually matters, define $\theta(0) = 1/2$.) Show that $\frac{d\theta}{dx} = \delta(x)$.")
        ],
        solution_data=sol_prob_2_23
    )

    # Problem 2.24
    sol_prob_2_24 = {
        "steps": r"""
<p>The delta bound state is $\psi(x) = \sqrt{\kappa}e^{-\kappa |x|}$ where $\kappa = \frac{m\alpha}{\hbar^2}$.</p>

<p><strong>Step 1: Calculate $\langle x \rangle$ and $\langle x^2 \rangle$.</strong></p>
<p>By parity, $\psi(-x) = \psi(x) \implies |\psi(x)|^2$ is symmetric $\implies \langle x \rangle = 0$.</p>
<p>$$\langle x^2 \rangle = \int_{-\infty}^\infty x^2 |\psi(x)|^2 dx = 2\kappa \int_0^\infty x^2 e^{-2\kappa x} dx.$$</p>
<p>Integrating by parts twice: $\int_0^\infty x^2 e^{-2\kappa x} dx = \frac{2!}{(2\kappa)^3} = \frac{2}{8\kappa^3} = \frac{1}{4\kappa^3}$.</p>
<p>$$\langle x^2 \rangle = 2\kappa\left(\frac{1}{4\kappa^3}\right) = \frac{1}{2\kappa^2} \implies \sigma_x = \frac{1}{\sqrt{2}\kappa} = \frac{\hbar^2}{\sqrt{2}m\alpha}.$$</p>

<p><strong>Step 2: Calculate $\langle p \rangle$ and $\langle p^2 \rangle$.</strong></p>
<p>By parity, $\langle p \rangle = 0$.</p>
<p>For $\langle p^2 \rangle = -\hbar^2 \int_{-\infty}^\infty \psi(x)\frac{d^2\psi}{dx^2} dx$, we compute the distributional derivative:</p>
<p>$$\frac{d\psi}{dx} = -\kappa \text{sgn}(x)\psi(x) = -\kappa [2\theta(x) - 1]\psi(x).$$</p>
<p>Differentiating using the product rule and $\theta'(x) = \delta(x)$:</p>
<p>$$\frac{d^2\psi}{dx^2} = -\kappa [2\delta(x)]\psi(x) - \kappa[2\theta(x) - 1]\frac{d\psi}{dx} = -2\kappa\delta(x)\psi(0) + \kappa^2 \psi(x).$$</p>
<p>Substitute this into the expectation value integral:</p>
<p>$$\langle p^2 \rangle = -\hbar^2 \int_{-\infty}^\infty \psi(x)\left[-2\kappa\delta(x)\psi(0) + \kappa^2\psi(x)\right] dx = -\hbar^2\left[-2\kappa|\psi(0)|^2 + \kappa^2\int |\psi|^2 dx\right].$$</p>
<p>Since $|\psi(0)|^2 = \kappa$ and $\int |\psi|^2 dx = 1$:</p>
<p>$$\langle p^2 \rangle = -\hbar^2[-2\kappa(\kappa) + \kappa^2(1)] = -\hbar^2[-\kappa^2] = \hbar^2\kappa^2 = \left(\frac{m\alpha}{\hbar}\right)^2 \implies \sigma_p = \frac{m\alpha}{\hbar}.$$</p>

<p><strong>Step 3: Uncertainty product $\sigma_x \sigma_p$.</strong></p>
<p>$$\sigma_x \sigma_p = \left(\frac{\hbar^2}{\sqrt{2}m\alpha}\right)\left(\frac{m\alpha}{\hbar}\right) = \frac{\hbar}{\sqrt{2}} \approx 0.707\hbar > 0.5\hbar = \frac{\hbar}{2}. \quad \checkmark$$</p>
""",
        "answer": r"$\sigma_x = \frac{\hbar^2}{\sqrt{2}m\alpha}$, $\sigma_p = \frac{m\alpha}{\hbar}$, and $\sigma_x\sigma_p = \frac{\hbar}{\sqrt{2}} \ge \frac{\hbar}{2}$."
    }

    sec += make_problem(
        24, "**", "Uncertainty Principle for the Delta-Function Bound State",
        r"""<p>Check the uncertainty principle for the delta-function bound-state wave function:</p>
<p>$$\psi(x) = \frac{\sqrt{m\alpha}}{\hbar} e^{-m\alpha|x|/\hbar^2}.$$</p>""",
        hint=r"""Calculating $\langle p^2 \rangle$ can be tricky, because the derivative of $\psi$ has a step discontinuity at $x = 0$. You may want to use the result in <a href="#prob-2-23" class="cross-ref">Problem 2.23(b)</a>: $\frac{d\theta}{dx} = \delta(x)$. Partial answer: $\langle p^2 \rangle = (m\alpha/\hbar)^2$.""",
        solution_data=sol_prob_2_24
    )

    # Problem 2.25
    sol_prob_2_25 = {
        "steps": r"""
<p><strong>Step 1: Write down the overlap integral.</strong></p>
<p>$$\int_{-\infty}^\infty \psi_b^*(x)\psi_k(x) dx = \int_{-\infty}^0 \sqrt{\kappa}e^{\kappa x}(A e^{ikx} + B e^{-ikx}) dx + \int_0^\infty \sqrt{\kappa}e^{-\kappa x}(F e^{ikx}) dx$$</p>
<p>$$= \sqrt{\kappa}\left[ A\int_{-\infty}^0 e^{(\kappa + ik)x} dx + B\int_{-\infty}^0 e^{(\kappa - ik)x} dx + F\int_0^\infty e^{-(\kappa - ik)x} dx \right].$$</p>

<p><strong>Step 2: Explicit integration.</strong></p>
<p>$$= \sqrt{\kappa}\left[ \left[\frac{e^{(\kappa + ik)x}}{\kappa + ik}\right]_{-\infty}^0 + \left[\frac{e^{(\kappa - ik)x}}{\kappa - ik}\right]_{-\infty}^0 + \left[\frac{e^{-(\kappa - ik)x}}{-(\kappa - ik)}\right]_0^\infty \right] = \sqrt{\kappa}\left[ \frac{A}{\kappa + ik} + \frac{B}{\kappa - ik} + \frac{F}{\kappa - ik} \right].$$</p>
<p>Combine over a common denominator $(\kappa + ik)(\kappa - ik) = \kappa^2 + k^2$:</p>
<p>$$= \frac{\sqrt{\kappa}}{\kappa^2 + k^2}[A(\kappa - ik) + B(\kappa + ik) + F(\kappa + ik)] = \frac{\sqrt{\kappa}}{\kappa^2 + k^2}[\kappa(A + B + F) - ik(A - B - F)].$$</p>

<p><strong>Step 3: Apply boundary conditions.</strong></p>
<p>Continuity at $x = 0 \implies A + B = F \implies A + B + F = 2F$.</p>
<p>Derivative jump at $x = 0 \implies \psi'(0^+) - \psi'(0^-) = ikF - (ikA - ikB) = -2\kappa F \implies -ik(A - B - F) = -2\kappa F$.</p>
<p>Substitute these into the numerator:</p>
<p>$$\text{Numerator} = \kappa(2F) + (-2\kappa F) = 2\kappa F - 2\kappa F = 0.$$</p>
<p>Thus the overlap integral is strictly zero, proving bound and scattering states are orthogonal.</p>
""",
        "answer": "Bound and scattering states of the delta-function potential are strictly orthogonal ($\int_{-\infty}^\infty \psi_b^* \psi_k dx = 0$)."
    }

    sec += make_problem(
        25, "", "Orthogonality of Bound and Scattering States",
        r"""<p>Check that the bound state of the delta-function well ($\psi(x) = \frac{\sqrt{m\alpha}}{\hbar} e^{-m\alpha|x|/\hbar^2}$) is orthogonal to the scattering states:</p>
<p>$$\psi_k(x) = \begin{cases} A e^{ikx} + B e^{-ikx}, & x < 0, \\ F e^{ikx}, & x > 0. \end{cases}$$</p>""",
        solution_data=sol_prob_2_25
    )

    # Problem 2.26
    sol_prob_2_26 = {
        "steps": r"""
<p><strong>Step 1: Compute the Fourier transform $F(k)$ of $\delta(x)$.</strong></p>
<p>$$F(k) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \delta(x) e^{-ikx} dx = \frac{1}{\sqrt{2\pi}} e^{-ik(0)} = \frac{1}{\sqrt{2\pi}}.$$</p>

<p><strong>Step 2: Apply the Fourier inversion theorem.</strong></p>
<p>$$\delta(x) = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty F(k) e^{ikx} dk = \frac{1}{\sqrt{2\pi}}\int_{-\infty}^\infty \left(\frac{1}{\sqrt{2\pi}}\right) e^{ikx} dk = \frac{1}{2\pi}\int_{-\infty}^\infty e^{ikx} dk.$$</p>
""",
        "answer": r"$F(k) = \frac{1}{\sqrt{2\pi}}$ and $\delta(x) = \frac{1}{2\pi}\int_{-\infty}^{+\infty} e^{ikx}\, dk$."
    }

    sec += make_problem(
        26, "*", "Fourier Representation of the Delta Function",
        r"""<p>What is the Fourier transform of $\delta(x)$? Using Plancherel’s theorem, show that:</p>
<p>$$\delta(x) = \frac{1}{2\pi} \int_{-\infty}^{+\infty} e^{ikx}\, dk.$$</p>
<p><em>Comment:</em> Although the integral doesn’t converge in the classical sense when $x \neq 0$, this formula is extremely useful in distribution theory and scattering theory.</p>""",
        solution_data=sol_prob_2_26
    )

    # Problem 2.27
    sol_prob_2_27 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Sketch of Potential</div>
  <p>$V(x) = -\alpha[\delta(x+a) + \delta(x-a)]$ features two identical attractive delta spikes at $x = -a$ and $x = +a$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Bound States and Transcendental Equations</div>
  <p>Let $\kappa \equiv \frac{\sqrt{-2mE}}{\hbar} > 0$.</p>
  <p><strong>Even States:</strong> $\psi(x) = C\cosh(\kappa x)$ for $|x| \le a$, leading to the condition $\kappa = \beta(1 + e^{-2\kappa a})$ where $\beta = \frac{m\alpha}{\hbar^2}$. Because the RHS is positive at $\kappa = 0$, there is <strong>always 1 even bound state</strong> for any $\alpha > 0$.</p>
  <p><strong>Odd States:</strong> $\psi(x) = C\sinh(\kappa x)$ for $|x| \le a$, leading to $\kappa = \beta(1 - e^{-2\kappa a})$. A non-trivial solution exists if and only if $\frac{d}{d\kappa}[\beta(1 - e^{-2\kappa a})]|_{\kappa=0} > 1 \implies 2\beta a > 1 \implies \frac{m\alpha a}{\hbar^2} > \frac{1}{2}$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Limiting Cases</div>
  <ul>
    <li><strong>Limit $a \to 0$:</strong> The two deltas merge into a single delta of double strength $2\alpha$, so $\kappa \to 2\beta \implies E = -\frac{2m\alpha^2}{\hbar^2}$.</li>
    <li><strong>Limit $a \to \infty$:</strong> The wells decouple, giving $\kappa \to \beta \implies E = -\frac{m\alpha^2}{2\hbar^2}$ (two degenerate isolated states).</li>
  </ul>
</div>
""",
        "answer": r"Even states: $\kappa = \beta(1 + e^{-2\kappa a})$ (always 1 state); Odd states: $\kappa = \beta(1 - e^{-2\kappa a})$ (exists if $\beta a > 1/2$). Limits: $a\to 0 \implies E = -2m\alpha^2/\hbar^2$, $a\to\infty \implies E = -m\alpha^2/(2\hbar^2)$."
    }

    sec += make_problem(
        27, "**", "Double Delta-Function Potential",
        r"""<p>Consider the double delta-function potential:</p>
<p>$$V(x) = -\alpha [\delta(x + a) + \delta(x - a)],$$</p>
<p>where $\alpha$ and $a$ are positive constants.</p>""",
        subparts=[
            ("a", r"Sketch this potential."),
            ("b", r"How many bound states does it possess? Find the allowed energies for $\alpha = \hbar^2/(ma)$ and for $\alpha = \hbar^2/(4ma)$, and sketch the wave functions."),
            ("c", r"What are the bound state energies in the limiting cases (i) $a \to 0$ and (ii) $a \to \infty$ (holding $\alpha$ fixed)? Explain why your answers are reasonable by comparison with the single delta-function well.")
        ],
        solution_data=sol_prob_2_27
    )

    # Problem 2.28
    sol_prob_2_28 = {
        "steps": r"""
<p>Setting up plane waves in Regions I ($x < -a$), II ($-a < x < a$), and III ($x > a$) and matching boundary values and derivative jumps $\Delta\psi' = -2\beta\psi$ at $x = \pm a$ with $\beta = \frac{m\alpha}{\hbar^2}$ yields:</p>
<p>$$\frac{A}{F} = e^{2ika}\left[1 + i\frac{2\beta}{k}\right] - \frac{\beta^2}{k^2}(1 - e^{4ika}).$$</p>
<p>Computing $T^{-1} = |A/F|^2$ leads directly to:</p>
<p>$$T^{-1} = 1 + \frac{4\beta^2}{k^2}\left[\cos(2ka) + \frac{\beta}{k}\sin(2ka)\right]^2.$$</p>
""",
        "answer": r"$T = \left[1 + \frac{4\beta^2}{k^2}\left(\cos(2ka) + \frac{\beta}{k}\sin(2ka)\right)^2\right]^{-1}$ where $\beta = \frac{m\alpha}{\hbar^2}$."
    }

    sec += make_problem(
        28, "**", "Transmission Coefficient of the Double Delta Well",
        r"""<p>Find the transmission coefficient $T$ for scattering from the double delta-function potential in <a href="#prob-2-27" class="cross-ref">Problem 2.27</a>: $V(x) = -\alpha [\delta(x + a) + \delta(x - a)]$.</p>""",
        solution_data=sol_prob_2_28
    )

    sec += "\n  </section>\n"
    return sec

def get_sec6():
    sec = r"""
  <section class="section-block" id="sec-2-6">
    <div class="section-header">
      <div class="section-number">Section 2.6</div>
      <h2 class="section-title">The Finite Square Well</h2>
      <p class="section-desc">Bound states (transcendental equations, shallow/deep well limits), scattering states, transmission resonances (Ramsauer-Townsend effect), step potentials, and cliff potentials.</p>
    </div>
"""
    sec += svg_fig_2_16

    # Problem 2.29
    sol_prob_2_29 = {
        "steps": r"""
<p>Matching odd wave functions $\psi(x) = C\sin(lx)$ for $|x| < a$ and $\psi(x) = Fe^{-\kappa x}$ for $x > a$ gives $l\cot(la) = -\kappa$, which simplifies to $-\cot(z) = \sqrt{(z_0/z)^2 - 1}$ with $z \equiv la, z_0 \equiv \frac{a}{\hbar}\sqrt{2mV_0}$.</p>
<p>The first positive branch of $-\cot(z)$ starts at $z = \pi/2$. Thus an intersection exists if and only if $z_0 > \pi/2$.</p>
<p>For shallow wells ($z_0 < \pi/2$), there is <strong>no odd bound state</strong>.</p>
""",
        "answer": r"Odd states satisfy $-\cot(z) = \sqrt{(z_0/z)^2 - 1}$; an odd bound state exists if and only if $z_0 > \pi/2$ ($V_0 a^2 > \frac{\pi^2\hbar^2}{8m}$)."
    }

    sec += make_problem(
        29, "*", "Odd Bound States of the Finite Square Well",
        r"""<p>Analyze the odd bound state wave functions for the finite square well ($V(x) = -V_0$ for $-a \le x \le a$, $0$ elsewhere). Derive the transcendental equation for the allowed energies, and solve it graphically. Examine the two limiting cases (very deep well and very shallow well). Is there always an odd bound state?</p>""",
        solution_data=sol_prob_2_29
    )

    # Problem 2.30
    sol_prob_2_30 = {
        "steps": r"""
<p>Using $F = D e^{\kappa a}\cos(la)$ and $\kappa = l\tan(la)$:</p>
<p>$$1 = 2\int_0^a D^2\cos^2(lx)dx + 2\int_a^\infty F^2 e^{-2\kappa x}dx = D^2\left[a + \frac{\sin(la)\cos(la)}{l} + \frac{\cos^2(la)}{\kappa}\right]$$</p>
<p>$$= D^2\left[a + \frac{\cos^2(la)}{\kappa}\left(\frac{\kappa\tan(la)}{l} + 1\right)\right] = D^2\left[a + \frac{1}{\kappa}\right].$$</p>
<p>$$D = \frac{1}{\sqrt{a + 1/\kappa}}, \qquad F = \frac{e^{\kappa a}\cos(la)}{\sqrt{a + 1/\kappa}}.$$</p>
""",
        "answer": r"$D = \frac{1}{\sqrt{a + 1/\kappa}}$ and $F = \frac{e^{\kappa a}\cos(la)}{\sqrt{a + 1/\kappa}}$."
    }

    sec += make_problem(
        30, "", "Normalization of Even Bound States",
        r"""<p>Normalize the even bound-state wave function $\psi(x)$ of the finite square well:</p>
<p>$$\psi(x) = \begin{cases} F e^{-\kappa x}, & x > a, \\ D \cos(lx), & 0 < x < a, \\ \psi(-x), & x < 0, \end{cases}$$</p>
<p>to determine the normalization constants $D$ and $F$ in terms of the well parameters.</p>""",
        solution_data=sol_prob_2_30
    )

    # Problem 2.31
    sol_prob_2_31 = {
        "steps": r"""
<p>Setting $2aV_0 = \alpha$, in the limit $a \to 0$, $z_0 = \frac{a}{\hbar}\sqrt{2mV_0} = \frac{1}{\hbar}\sqrt{m\alpha a} \to 0$.</p>
<p>The even state equation $\tan z = \sqrt{(z_0/z)^2 - 1}$ reduces to $z^2 \approx z_0^2/2$, giving $\kappa a = \sqrt{z_0^2 - z^2} \approx \frac{m\alpha a}{\hbar^2} \implies \kappa = \frac{m\alpha}{\hbar^2}$.</p>
<p>The bound state energy is $E = -\frac{\hbar^2\kappa^2}{2m} = -\frac{m\alpha^2}{2\hbar^2}$, exactly matching the delta well.</p>
""",
        "answer": r"In the delta limit ($a \to 0, 2aV_0 = \alpha$), $E = -\frac{m\alpha^2}{2\hbar^2}$, matching the single delta-function well."
    }

    sec += make_problem(
        31, "", "Delta-Function as the Limit of a Finite Square Well",
        r"""<p>The Dirac delta function can be thought of as the limiting case of a rectangle of area $1$, as the height goes to infinity and the width goes to zero. Show that the delta-function well is a “weak” potential (even though it is infinitely deep), in the sense that $z_0 \to 0$. Determine the bound state energy for the delta-function potential, by treating it as the limit of a finite square well. Check that your answer is consistent with $E = -m\alpha^2 / (2\hbar^2)$. Also show that the finite well transmission formula reduces to the delta-function transmission formula in the appropriate limit.</p>""",
        solution_data=sol_prob_2_31
    )

    # Problem 2.32
    sol_prob_2_32 = {
        "steps": r"""
<p>Matching boundary conditions at $x = +a$ and $x = -a$ gives:</p>
<p>$$\frac{A}{F} = e^{2ika}\left[\cos(2la) - i\frac{k^2 + l^2}{2kl}\sin(2la)\right].$$</p>
<p>Taking the modulus squared and using $l^2 - k^2 = \frac{2mV_0}{\hbar^2}$:</p>
<p>$$T^{-1} = 1 + \frac{V_0^2}{4E(E + V_0)}\sin^2\left(\frac{2a}{\hbar}\sqrt{2m(E + V_0)}\right).$$</p>
""",
        "answer": r"$T^{-1} = 1 + \frac{V_0^2}{4E(E + V_0)}\sin^2\left(\frac{2a}{\hbar}\sqrt{2m(E + V_0)}\right)$."
    }

    sec += make_problem(
        32, "", "Derivation of Transmission Coefficient for the Finite Well",
        r"""<p>Derive the transmission amplitude $F$ and transmission coefficient $T$ for the finite square well:</p>
<p>$$T^{-1} = 1 + \frac{V_0^2}{4E(E + V_0)} \sin^2\left(\frac{2a}{\hbar}\sqrt{2m(E + V_0)}\right).$$</p>""",
        hint=r"""Use the continuity equations at $x = +a$ to solve for $C$ and $D$ in terms of $F$:
$$C = \left(\sin(la) + i\frac{k}{l}\cos(la)\right) e^{ika} F; \quad D = \left(\cos(la) - i\frac{k}{l}\sin(la)\right) e^{ika} F.$$
Plug these back into the boundary conditions at $x = -a$ to obtain $B$ and $F$ in terms of $A$.""",
        solution_data=sol_prob_2_32
    )

    # Problem 2.33
    sol_prob_2_33 = {
        "steps": r"""
<p>For $E < V_0$: $T^{-1} = 1 + \frac{V_0^2}{4E(V_0 - E)}\sinh^2\left(\frac{2a}{\hbar}\sqrt{2m(V_0 - E)}\right)$.</p>
<p>For $E = V_0$: Taking $\kappa \to 0$ gives $T = \frac{1}{1 + 2ma^2 V_0/\hbar^2}$.</p>
<p>For $E > V_0$: $T^{-1} = 1 + \frac{V_0^2}{4E(E - V_0)}\sin^2\left(\frac{2a}{\hbar}\sqrt{2m(E - V_0)}\right)$.</p>
""",
        "answer": r"For $E < V_0$: $T^{-1} = 1 + \frac{V_0^2}{4E(V_0 - E)}\sinh^2(2\kappa a)$; for $E = V_0$: $T = \frac{1}{1 + 2ma^2 V_0/\hbar^2}$; for $E > V_0$: $T^{-1} = 1 + \frac{V_0^2}{4E(E - V_0)}\sin^2(2k'a)$."
    }

    sec += make_problem(
        33, "**", "Transmission through a Rectangular Barrier (Tunneling)",
        r"""<p>Determine the transmission coefficient for a rectangular barrier ($V(x) = +V_0 > 0$ in the region $-a < x < a$, and $0$ elsewhere). Treat separately the three cases $E < V_0$, $E = V_0$, and $E > V_0$.</p>
<p><em>Partial answer:</em> for $E < V_0$,</p>
<p>$$T^{-1} = 1 + \frac{V_0^2}{4E(V_0 - E)} \sinh^2\left(\frac{2a}{\hbar}\sqrt{2m(V_0 - E)}\right).$$</p>""",
        solution_data=sol_prob_2_33
    )

    # Problem 2.34
    sol_prob_2_34 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Parts (a) & (b): Reflection Coefficient $R$</div>
  <p>For $E < V_0$: $R = 1$ (total reflection, evanescent wave for $x > 0$).</p>
  <p>For $E > V_0$: $R = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2$ where $k_1 = \frac{\sqrt{2mE}}{\hbar}, k_2 = \frac{\sqrt{2m(E - V_0)}}{\hbar}$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Parts (c) & (d): Transmission $T$ and Unitarity</div>
  <p>$T = \frac{k_2}{k_1}\frac{|F|^2}{|A|^2} = \frac{4k_1 k_2}{(k_1 + k_2)^2}$, and $R + T = \frac{(k_1 - k_2)^2 + 4k_1 k_2}{(k_1 + k_2)^2} = 1$. $\checkmark$</p>
</div>
""",
        "answer": r"For $E < V_0$: $R = 1, T = 0$. For $E > V_0$: $R = \left(\frac{k_1 - k_2}{k_1 + k_2}\right)^2$, $T = \frac{4k_1 k_2}{(k_1 + k_2)^2}$, satisfying $R + T = 1$."
    }

    sec += make_problem(
        34, "*", "The Step-Up Potential",
        r"""<p>Consider the “step” potential:</p>
<p>$$V(x) = \begin{cases} 0, & x \le 0, \\ V_0, & x > 0. \end{cases}$$</p>""",
        subparts=[
            ("a", r"Calculate the reflection coefficient $R$ for $E < V_0$, and comment on the answer."),
            ("b", r"Calculate the reflection coefficient $R$ for $E > V_0$."),
            ("c", r"For a potential that does not go back to zero to the right of the barrier, the transmission coefficient is not simply $|F|^2/|A|^2$, because the transmitted wave travels at a different speed. Show that: $$T = \sqrt{\frac{E - V_0}{E}} \frac{|F|^2}{|A|^2}, \quad (E > V_0).$$ What is $T$ for $E < V_0$?"),
            ("d", r"For $E > V_0$, calculate $T$ and check that $T + R = 1$.")
        ],
        solution_data=sol_prob_2_34
    )

    # Problem 2.35
    sol_prob_2_35 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): $E = V_0/3$</div>
  <p>$R = \left(\frac{1 - \sqrt{1+3}}{1 + \sqrt{1+3}}\right)^2 = \left(\frac{1 - 2}{1 + 2}\right)^2 = \frac{1}{9} \approx 11.1\%$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Macroscopic Cliff</div>
  <p>Macroscopic objects have de Broglie wavelengths $\sim 10^{-38}\text{ m}$, leading to zero quantum reflection.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Nuclear Neutron Absorption</div>
  <p>With $E = 4\text{ MeV}$ and $V_0 = 12\text{ MeV} \implies E + V_0 = 16\text{ MeV}$:</p>
  <p>$$T = \frac{4\sqrt{4}\sqrt{16}}{(\sqrt{4} + \sqrt{16})^2} = \frac{4(2)(4)}{(2 + 4)^2} = \frac{32}{36} = \frac{8}{9} \approx 88.9\%.$$</p>
</div>
""",
        "answer": r"(a) $R = 1/9 \approx 11.1\%$; (b) classical de Broglie wavelength is negligible; (c) absorption probability $T = 8/9 \approx 88.9\%$."
    }

    sec += make_problem(
        35, "", "Scattering from a Cliff (Step-Down Potential)",
        r"""<p>A particle of mass $m$ and kinetic energy $E > 0$ approaches an abrupt potential drop $V_0$ (Figure 2.19): $V(x) = 0$ for $x \le 0$, and $V(x) = -V_0$ for $x > 0$.</p>""",
        subparts=[
            ("a", r"What is the probability that it will “reflect” back, if $E = V_0/3$? (Hint: This is just like <a href='#prob-2-34' class='cross-ref'>Problem 2.34</a>, except that the step now goes down instead of up.)"),
            ("b", r"The figure suggests a car approaching a cliff, but the probability of bouncing back from a cliff edge is far smaller in classical mechanics. Explain why this potential does not correctly represent a macroscopic cliff."),
            ("c", r"When a free neutron enters a nucleus, it experiences a sudden drop in potential energy, from $V = 0$ outside to around $-12\text{ MeV}$ inside. Suppose a neutron emitted with kinetic energy $4\text{ MeV}$ by a fission event strikes such a nucleus. What is the probability it will be absorbed, thereby initiating another fission?")
        ],
        diagram_html=svg_fig_2_19,
        solution_data=sol_prob_2_35
    )

    sec += "\n  </section>\n"
    return sec

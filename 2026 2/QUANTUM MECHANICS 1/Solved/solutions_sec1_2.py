from helpers import make_example, make_problem
from generate_full_html import svg_fig_2_1, svg_fig_2_3

def get_sec1():
    sec = r"""
  <section class="section-block" id="sec-2-1">
    <div class="section-header">
      <div class="section-number">Section 2.1</div>
      <h2 class="section-title">Stationary States</h2>
      <p class="section-desc">Separation of variables, time-independent Schrödinger equation, properties of stationary states, and energy expectation values.</p>
    </div>
"""

    # Example 2.1
    sol_ex_2_1 = {
        "steps": r"""
<p><strong>Step 1: Construct the full time-dependent wave function $\Psi(x, t)$.</strong></p>
<p>The time-dependent Schrödinger equation is linear. For any stationary state $\psi_n(x)$ satisfying $\hat{H}\psi_n = E_n\psi_n$, its time evolution is given by multiplying by the phase factor $e^{-iE_n t/\hbar}$. Therefore, the linear combination evolves as:</p>
<p>$$\Psi(x, t) = c_1\psi_1(x)e^{-iE_1 t/\hbar} + c_2\psi_2(x)e^{-iE_2 t/\hbar}.$$</p>

<p><strong>Step 2: Calculate the probability density $|\Psi(x, t)|^2 = \Psi^*(x, t)\Psi(x, t)$ step by step.</strong></p>
<p>Since $c_1, c_2, \psi_1(x),$ and $\psi_2(x)$ are real, the complex conjugate is $\Psi^*(x, t) = c_1\psi_1(x)e^{iE_1 t/\hbar} + c_2\psi_2(x)e^{iE_2 t/\hbar}$.</p>
<p>Multiplying out the terms using the <code>aligned</code> multi-line environment:</p>
<p>$$\begin{aligned}
|\Psi(x, t)|^2 &= \left(c_1\psi_1 e^{iE_1 t/\hbar} + c_2\psi_2 e^{iE_2 t/\hbar}\right)\left(c_1\psi_1 e^{-iE_1 t/\hbar} + c_2\psi_2 e^{-iE_2 t/\hbar}\right) \\
&= c_1^2\psi_1^2 e^{i(E_1 - E_1)t/\hbar} + c_2^2\psi_2^2 e^{i(E_2 - E_2)t/\hbar} + c_1 c_2 \psi_1 \psi_2 e^{i(E_1 - E_2)t/\hbar} + c_1 c_2 \psi_1 \psi_2 e^{-i(E_1 - E_2)t/\hbar} \\
&= c_1^2\psi_1(x)^2 + c_2^2\psi_2(x)^2 + c_1 c_2 \psi_1(x)\psi_2(x)\left[e^{-i(E_2 - E_1)t/\hbar} + e^{i(E_2 - E_1)t/\hbar}\right] \\
&= c_1^2\psi_1(x)^2 + c_2^2\psi_2(x)^2 + 2c_1c_2\psi_1(x)\psi_2(x)\cos\left(\frac{E_2 - E_1}{\hbar}t\right).
\end{aligned}$$</p>

<p><strong>Step 3: Physical interpretation of the motion.</strong></p>
<p>While an individual stationary state has a time-independent probability density ($|\Psi_n|^2 = |\psi_n|^2$), a superposition of two stationary states has an interference cross-term that oscillates sinusoidally in time with angular frequency:</p>
<p>$$\omega = \frac{E_2 - E_1}{\hbar}.$$</p>
<p>The probability density sloshes back and forth across the potential well at frequency $\omega$.</p>
""",
        "answer": r"$\Psi(x, t) = c_1\psi_1(x)e^{-iE_1 t/\hbar} + c_2\psi_2(x)e^{-iE_2 t/\hbar}$ and $|\Psi(x, t)|^2 = c_1^2\psi_1^2 + c_2^2\psi_2^2 + 2c_1c_2\psi_1\psi_2\cos\left(\frac{E_2 - E_1}{\hbar}t\right)$, oscillating with frequency $\omega = \frac{E_2 - E_1}{\hbar}$."
    }

    sec += make_example(
        1,
        "Superposition of Two Stationary States",
        r"""<p>Suppose a particle starts out in a linear combination of just two stationary states:</p>
<p>$$\Psi(x, 0) = c_1\psi_1(x) + c_2\psi_2(x).$$</p>
<p>(To keep things simple assume that the constants $c_n$ and the states $\psi_n(x)$ are real.) What is the wave function $\Psi(x, t)$ at subsequent times? Find the probability density $|\Psi(x, t)|^2$, and describe its motion.</p>""",
        solution_data=sol_ex_2_1
    )

    # Problem 2.1
    sol_prob_2_1 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Proof that $E$ is purely real</div>
  <p>Let $E = E_0 + i\Gamma$ where $E_0, \Gamma \in \mathbb{R}$.</p>
  <p>$$\begin{aligned}
  \Psi(x, t) &= \psi(x) e^{-iEt/\hbar} = \psi(x) e^{-i(E_0 + i\Gamma)t/\hbar} \\
  &= \psi(x) e^{-iE_0 t/\hbar} e^{-i(i\Gamma)t/\hbar} = \psi(x) e^{-iE_0 t/\hbar} e^{\Gamma t/\hbar}.
  \end{aligned}$$</p>
  <p>Now evaluate the total normalization integral at time $t$:</p>
  <p>$$\int_{-\infty}^{+\infty} |\Psi(x, t)|^2 dx = e^{2\Gamma t/\hbar} \int_{-\infty}^{+\infty} |\psi(x)|^2 dx = e^{2\Gamma t/\hbar}.$$</p>
  <p>For conservation of probability to hold for all times $t$, we require:</p>
  <p>$$\frac{d}{dt}\left(e^{2\Gamma t/\hbar}\right) = \frac{2\Gamma}{\hbar}e^{2\Gamma t/\hbar} = 0 \implies \Gamma = 0.$$</p>
  <p>Hence, the imaginary part of $E$ must vanish, proving $E = E_0 \in \mathbb{R}$.</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Proof that $\psi(x)$ can always be taken as real</div>
  <p>The Time-Independent Schrödinger Equation (TISE) is:</p>
  <p>$$-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x).$$</p>
  <p>Since $\hbar, m, V(x),$ and $E$ are purely real, taking the complex conjugate gives:</p>
  <p>$$-\frac{\hbar^2}{2m}\frac{d^2\psi^*(x)}{dx^2} + V(x)\psi^*(x) = E\psi^*(x).$$</p>
  <p>Thus, if $\psi(x)$ satisfies the TISE with energy $E$, then its complex conjugate $\psi^*(x)$ is also an exact solution with the same energy $E$. Constructing real linear combinations:</p>
  <p>$$\psi_1(x) \equiv \frac{\psi(x) + \psi^*(x)}{2} = \text{Re}[\psi(x)], \qquad \psi_2(x) \equiv \frac{\psi(x) - \psi^*(x)}{2i} = \text{Im}[\psi(x)].$$</p>
  <p>Both $\psi_1(x)$ and $\psi_2(x)$ are real eigenfunctions with energy $E$.</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Proof of definite parity for symmetric potentials $V(-x) = V(x)$</div>
  <p>Given $-\frac{\hbar^2}{2m}\frac{d^2\psi(x)}{dx^2} + V(x)\psi(x) = E\psi(x)$, substitute $x \to -x$. Using $V(-x) = V(x)$:</p>
  <p>$$-\frac{\hbar^2}{2m}\frac{d^2\psi(-x)}{dx^2} + V(x)\psi(-x) = E\psi(-x).$$</p>
  <p>Constructing the symmetric (even) and antisymmetric (odd) superpositions:</p>
  <p>$$\psi_{\text{even}}(x) \equiv \frac{\psi(x) + \psi(-x)}{2}, \qquad \psi_{\text{odd}}(x) \equiv \frac{\psi(x) - \psi(-x)}{2}.$$</p>
  <p>Both are valid energy eigenstates with eigenvalue $E$, having definite parity $\psi_{\text{even}}(-x) = \psi_{\text{even}}(x)$ and $\psi_{\text{odd}}(-x) = -\psi_{\text{odd}}(x)$.</p>
</div>
""",
        "answer": r"Proven: (a) $E$ must be strictly real ($\Gamma = 0$); (b) $\psi(x)$ can always be chosen real; (c) for symmetric potentials $V(-x) = V(x)$, eigenstates have definite even or odd parity."
    }

    sec += make_problem(
        1, "*", "General Theorems for Normalizable Stationary States",
        r"<p>Prove the following three theorems:</p>",
        subparts=[
            ("a", r"For normalizable solutions, the separation constant $E$ must be real. <em>Hint:</em> Write $E$ as $E_0 + i\Gamma$ (with $E_0$ and $\Gamma$ real), and show that if conservation of probability $\frac{d}{dt}\int |\Psi|^2 dx = 0$ is to hold for all $t$, $\Gamma$ must be zero."),
            ("b", r"The time-independent wave function $\psi(x)$ can always be taken to be real (unlike $\Psi(x, t)$, which is necessarily complex). This doesn’t mean that every solution to the time-independent Schrödinger equation is real; what it says is that if you’ve got one that is not, it can always be expressed as a linear combination of solutions (with the same energy) that are. So you might as well stick to $\psi$s that are real. <em>Hint:</em> If $\psi(x)$ satisfies $\hat{H}\psi = E\psi$, for a given $E$, so too does its complex conjugate $\psi^*$, and hence also the real linear combinations $(\psi + \psi^*)$ and $i(\psi - \psi^*)$."),
            ("c", r"If $V(x)$ is an even function (that is, $V(-x) = V(x)$) then $\psi(x)$ can always be taken to be either even or odd. <em>Hint:</em> If $\psi(x)$ satisfies the time-independent Schrödinger equation for a given $E$, so too does $\psi(-x)$, and hence also the even and odd linear combinations $\psi(x) \pm \psi(-x)$.")
        ],
        solution_data=sol_prob_2_1
    )

    # Problem 2.2
    sol_prob_2_2 = {
        "steps": r"""
<p><strong>Step 1: Rewrite the Schrödinger equation in curvature form.</strong></p>
<p>$$-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi \implies \frac{d^2\psi}{dx^2} = \frac{2m}{\hbar^2}[V(x) - E]\psi(x).$$</p>

<p><strong>Step 2: Sign analysis of the second derivative for $E < V_{\text{min}}$.</strong></p>
<p>Let $V_{\text{min}}$ be the global minimum of $V(x)$, so $V(x) \ge V_{\text{min}}$ for all $x \in (-\infty, \infty)$.</p>
<p>If $E < V_{\text{min}}$, then $V(x) - E > 0$ strictly for all $x$. Therefore, the factor $\frac{2m}{\hbar^2}[V(x) - E]$ is always positive.</p>
<p>This means $\frac{d^2\psi}{dx^2}$ always has the <strong>exact same sign</strong> as $\psi(x)$:</p>
<ul>
  <li>Where $\psi(x) > 0$, $\psi''(x) > 0 \implies$ the function is concave upwards (curves away from the $x$-axis).</li>
  <li>Where $\psi(x) < 0$, $\psi''(x) < 0 \implies$ the function is concave downwards (curves away from the $x$-axis).</li>
</ul>

<p><strong>Step 3: Why normalizability fails.</strong></p>
<p>For $\psi(x)$ to be normalizable, we must have $\psi(x) \to 0$ as $x \to \pm\infty$.</p>
<p>Assume $\psi(x) > 0$ as $x \to -\infty$ with $\psi(-\infty) = 0$. Since $\psi > 0$, its slope must be positive ($\psi' > 0$) as it rises away from $0$. Since $\psi'' > 0$, the slope $\psi'$ continues to increase monotonically. For $\psi(x)$ to ever return to $0$ as $x \to +\infty$, its slope would have to turn negative ($\psi' < 0$), which requires a region of downward concavity ($\psi'' < 0$). But $\psi''$ can never be negative while $\psi > 0$.</p>
<p>Thus, $\psi(x)$ diverges exponentially to $+\infty$ as $x \to +\infty$. Such a solution cannot be normalized ($\int_{-\infty}^\infty |\psi|^2 dx = \infty$).</p>
<p>Therefore, we must have $E > V_{\text{min}}$ for every normalizable stationary state.</p>

<p><strong>Step 4: Classical analog.</strong></p>
<p>Classically, total mechanical energy is $E = T + V(x) = \frac{p^2}{2m} + V(x)$. Because momentum is real, kinetic energy $T = \frac{p^2}{2m} \ge 0$, which mandates $E \ge V(x) \ge V_{\text{min}}$. A particle cannot have total energy less than the lowest potential energy in the system.</p>
""",
        "answer": r"Proven: $E > V_{\text{min}}$ for all normalizable states. Classical analog: kinetic energy is non-negative ($T = E - V \ge 0 \implies E \ge V_{\text{min}}$)."
    }

    sec += make_problem(
        2, "*", "Minimum Energy Theorem",
        r"""<p>Show that $E$ must exceed the minimum value of $V(x)$, for every normalizable solution to the time-independent Schrödinger equation: $-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} + V(x)\psi = E\psi$. What is the classical analog to this statement?</p>""",
        hint=r"""Rewrite the time-independent Schrödinger equation in the form
$$\frac{d^2\psi}{dx^2} = \frac{2m}{\hbar^2} [V(x) - E] \psi;$$
if $E < V_{\text{min}}$, then $\psi$ and its second derivative always have the same sign—argue that such a function cannot be normalized.""",
        solution_data=sol_prob_2_2
    )

    sec += "\n  </section>\n"
    return sec

def get_sec2():
    sec = r"""
  <section class="section-block" id="sec-2-2">
    <div class="section-header">
      <div class="section-number">Section 2.2</div>
      <h2 class="section-title">The Infinite Square Well</h2>
      <p class="section-desc">Stationary states $\psi_n(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right)$, energy eigenvalues $E_n = \frac{n^2\pi^2\hbar^2}{2ma^2}$, completeness, Fourier expansion, and quantum dynamics.</p>
    </div>
"""
    sec += svg_fig_2_1

    # Example 2.2
    sol_ex_2_2 = {
        "steps": r"""
<p><strong>Step 1: Normalization of $\Psi(x, 0) = Ax(a - x)$.</strong></p>
<p>$$\begin{aligned}
1 &= \int_0^a |\Psi(x, 0)|^2 dx = A^2 \int_0^a x^2(a - x)^2 dx \\
&= A^2 \int_0^a (a^2 x^2 - 2ax^3 + x^4) dx \\
&= A^2 \left[ a^2\frac{x^3}{3} - 2a\frac{x^4}{4} + \frac{x^5}{5} \right]_0^a \\
&= A^2 a^5 \left( \frac{1}{3} - \frac{1}{2} + \frac{1}{5} \right) = A^2 a^5 \left( \frac{10 - 15 + 6}{30} \right) = A^2 \frac{a^5}{30}.
\end{aligned}$$</p>
<p>$$1 = A^2 \frac{a^5}{30} \implies A = \sqrt{\frac{30}{a^5}}.$$</p>

<p><strong>Step 2: Explicit Integration for Fourier coefficients $c_n$.</strong></p>
<p>The expansion coefficients are $c_n = \sqrt{\frac{2}{a}}\sqrt{\frac{30}{a^5}} I_n = \frac{2\sqrt{15}}{a^3} I_n$, where $I_n \equiv \int_0^a (ax - x^2)\sin(kx) dx$ with $k \equiv \frac{n\pi}{a}$.</p>
<p>Performing integration by parts with $u = ax - x^2, dv = \sin(kx)dx$:</p>
<p>$$\begin{aligned}
I_n &= \left[ -(ax - x^2)\frac{\cos(kx)}{k} \right]_0^a + \frac{1}{k}\int_0^a (a - 2x)\cos(kx) dx \\
&= 0 + \frac{1}{k}\left( \left[ (a - 2x)\frac{\sin(kx)}{k} \right]_0^a - \int_0^a (-2)\frac{\sin(kx)}{k} dx \right) \\
&= \frac{2}{k^2}\left[ -\frac{\cos(kx)}{k} \right]_0^a = \frac{2}{k^3}[1 - \cos(n\pi)] = \frac{2a^3}{n^3\pi^3}[1 - (-1)^n].
\end{aligned}$$</p>
<p>Thus $c_n = 0$ for even $n$, and for odd $n$:</p>
<p>$$c_n = \frac{2\sqrt{15}}{a^3} \cdot \frac{4a^3}{n^3\pi^3} = \frac{8\sqrt{15}}{\pi^3 n^3}.$$</p>

<p><strong>Step 3: Assemble the full time-dependent wave function $\Psi(x, t)$.</strong></p>
<p>$$\Psi(x, t) = \frac{16\sqrt{30}}{\pi^3\sqrt{a}} \sum_{n=1,3,5,\dots}^\infty \frac{1}{n^3}\sin\left(\frac{n\pi x}{a}\right) \exp\left(-i\frac{n^2\pi^2\hbar}{2ma^2}t\right).$$</p>
""",
        "answer": r"$\Psi(x, t) = \frac{16\sqrt{30}}{\pi^3\sqrt{a}} \sum_{n=1,3,5,\dots}^\infty \frac{1}{n^3}\sin\left(\frac{n\pi x}{a}\right)\exp\left(-i\frac{n^2\pi^2\hbar}{2ma^2}t\right)$."
    }

    sec += make_example(
        2,
        "Parabolic Initial State in the Infinite Square Well",
        r"""<p>A particle in the infinite square well potential ($V(x) = 0$ for $0 \le x \le a$, $\infty$ otherwise) has the initial wave function:</p>
<p>$$\Psi(x, 0) = Ax(a - x), \quad (0 \le x \le a),$$</p>
<p>for some constant $A$ (see Figure 2.3). Outside the well, $\Psi = 0$. Find $\Psi(x, t)$.</p>""",
        diagram_html=svg_fig_2_3,
        solution_data=sol_ex_2_2
    )

    # Example 2.3
    sol_ex_2_3 = {
        "steps": r"""
<p><strong>Step 1: Verify probability conservation $\sum_{n=1}^\infty |c_n|^2 = 1$.</strong></p>
<p>$$\sum_{n=1,3,5,\dots} |c_n|^2 = \frac{960}{\pi^6} \sum_{n=1,3,5,\dots} \frac{1}{n^6} = \frac{960}{\pi^6} \left(\frac{\pi^6}{960}\right) = 1. \quad \checkmark$$</p>

<p><strong>Step 2: Most probable energy measurement.</strong></p>
<p>For ground state $n = 1$: $P(E_1) = |c_1|^2 = \frac{960}{\pi^6} \approx 0.998555 \quad (99.86\%)$.</p>

<p><strong>Step 3: Calculate expectation value $\langle H \rangle = \sum |c_n|^2 E_n$.</strong></p>
<p>$$\begin{aligned}
\langle H \rangle &= \sum_{n=1,3,5,\dots} \left(\frac{960}{\pi^6 n^6}\right) \left(\frac{n^2\pi^2\hbar^2}{2ma^2}\right) \\
&= \frac{480\hbar^2}{\pi^4 ma^2} \sum_{n=1,3,5,\dots} \frac{1}{n^4} \\
&= \frac{480\hbar^2}{\pi^4 ma^2} \left(\frac{\pi^4}{96}\right) = \frac{5\hbar^2}{ma^2}.
\end{aligned}$$</p>
""",
        "answer": r"$\sum |c_n|^2 = 1$; most probable energy is $E_1 = \frac{\pi^2\hbar^2}{2ma^2}$ ($99.86\%$ probability); $\langle H \rangle = \frac{5\hbar^2}{ma^2} \approx 1.013 E_1$."
    }

    sec += make_example(
        3,
        "Energy Probability and Expectation Value for Parabolic State",
        r"""<p>Check that the probability conservation sum $\sum_{n=1}^\infty |c_n|^2 = 1$ is satisfied for the wave function in <a href="#ex-2-2" class="cross-ref">Example 2.2</a>: where $\Psi(x, 0) = \sqrt{\frac{30}{a^5}}x(a - x)$ and $c_n = \frac{8\sqrt{15}}{\pi^3 n^3}$ for odd $n$. If you measured the energy of a particle in this state, what is the most probable result? What is the expectation value of the energy $\langle H \rangle$?</p>""",
        solution_data=sol_ex_2_3
    )

    # Problem 2.3
    sol_prob_2_3 = {
        "steps": r"""
<p>Inside the well ($0 \le x \le a$), $V(x) = 0$. The TISE is $\frac{d^2\psi}{dx^2} = -\frac{2mE}{\hbar^2}\psi$.</p>

<p><strong>Case 1: $E = 0$.</strong></p>
<p>$$\frac{d^2\psi}{dx^2} = 0 \implies \psi(x) = Ax + B.$$</p>
<p>Boundary conditions: $\psi(0) = B = 0 \implies \psi(x) = Ax$. Then $\psi(a) = A a = 0 \implies A = 0$. Thus $\psi(x) \equiv 0$ (trivial).</p>

<p><strong>Case 2: $E < 0$.</strong></p>
<p>Let $E = -|E|$ and $k \equiv \frac{\sqrt{2m|E|}}{\hbar} > 0$. The solution is $\psi(x) = C\sinh(kx) + D\cosh(kx)$.</p>
<p>Boundary conditions: $\psi(0) = D = 0 \implies \psi(x) = C\sinh(kx)$.</p>
<p>Then $\psi(a) = C\sinh(ka) = 0$. Since $ka > 0$, $\sinh(ka) > 0$ strictly, forcing $C = 0 \implies \psi(x) \equiv 0$.</p>
<p>Thus, no physical state exists for $E \le 0$.</p>
""",
        "answer": "No non-trivial solution exists for $E \\le 0$ because satisfying boundary conditions $\\psi(0) = \\psi(a) = 0$ forces $\\psi(x) = 0$ everywhere."
    }

    sec += make_problem(
        3, "", "Absence of Zero and Negative Energy Solutions",
        r"""<p>Show that there is no acceptable solution to the (time-independent) Schrödinger equation for the infinite square well with $E = 0$ or $E < 0$. (This is a special case of the general theorem in <a href="#prob-2-2" class="cross-ref">Problem 2.2</a>, but this time do it by explicitly solving the Schrödinger equation, and showing that you cannot satisfy the boundary conditions $\psi(0) = \psi(a) = 0$.)</p>""",
        solution_data=sol_prob_2_3
    )

    # Problem 2.4
    sol_prob_2_4 = {
        "steps": r"""
<p>For $\psi_n(x) = \sqrt{\frac{2}{a}}\sin(kx)$ with $k = \frac{n\pi}{a}$:</p>

<p><strong>1. Position expectation values $\langle x \rangle$ and $\langle x^2 \rangle$:</strong></p>
<p>$$\langle x \rangle = \frac{2}{a}\int_0^a x\sin^2(kx) dx = \frac{a}{2}.$$</p>
<p>$$\begin{aligned}
\langle x^2 \rangle &= \frac{2}{a}\int_0^a x^2\sin^2(kx) dx = \frac{1}{a}\int_0^a x^2(1 - \cos(2kx)) dx \\
&= \frac{a^2}{3} - \frac{1}{a}\left( \left[ x^2\frac{\sin(2kx)}{2k} \right]_0^a - \int_0^a 2x\frac{\sin(2kx)}{2k} dx \right) \\
&= \frac{a^2}{3} - \frac{a^2}{2n^2\pi^2} = a^2\left(\frac{1}{3} - \frac{1}{2n^2\pi^2}\right).
\end{aligned}$$</p>
<p>$$\sigma_x = a\sqrt{\frac{1}{12} - \frac{1}{2n^2\pi^2}}.$$</p>

<p><strong>2. Momentum expectation values $\langle p \rangle$ and $\langle p^2 \rangle$:</strong></p>
<p>$$\langle p \rangle = 0, \qquad \langle p^2 \rangle = \left(\frac{n\pi\hbar}{a}\right)^2 \implies \sigma_p = \frac{n\pi\hbar}{a}.$$</p>

<p><strong>3. Uncertainty product $\sigma_x \sigma_p$:</strong></p>
<p>$$\sigma_x \sigma_p = \frac{\hbar}{2}\sqrt{\frac{n^2\pi^2}{3} - 2} \ge \frac{\hbar}{2}.$$</p>
""",
        "answer": r"$\langle x \rangle = \frac{a}{2}$, $\langle x^2 \rangle = a^2(\frac{1}{3} - \frac{1}{2n^2\pi^2})$, $\langle p \rangle = 0$, $\langle p^2 \rangle = \frac{n^2\pi^2\hbar^2}{a^2}$, $\sigma_x\sigma_p = \frac{\hbar}{2}\sqrt{\frac{n^2\pi^2}{3}-2} \ge \frac{\hbar}{2}$."
    }

    sec += make_problem(
        4, "*", "Uncertainties in the Infinite Square Well",
        r"""<p>Calculate $\langle x \rangle$, $\langle x^2 \rangle$, $\langle p \rangle$, $\langle p^2 \rangle$, $\sigma_x$, and $\sigma_p$, for the $n$th stationary state of the infinite square well:</p>
<p>$$\psi_n(x) = \sqrt{\frac{2}{a}}\sin\left(\frac{n\pi x}{a}\right).$$</p>
<p>Check that the Heisenberg uncertainty principle $\sigma_x \sigma_p \ge \hbar/2$ is satisfied. Which state comes closest to the uncertainty limit?</p>""",
        solution_data=sol_prob_2_4
    )

    # Problem 2.5
    sol_prob_2_5 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Find Normalization Constant $A$</div>
  <p>$$1 = |A|^2(1 + 1) = 2|A|^2 \implies A = \frac{1}{\sqrt{2}}.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Construct $\Psi(x, t)$ and $|\Psi(x, t)|^2$</div>
  <p>$$\Psi(x, t) = \frac{1}{\sqrt{2}}\psi_1(x)e^{-iE_1 t/\hbar} + \frac{1}{\sqrt{2}}\psi_2(x)e^{-iE_2 t/\hbar}.$$</p>
  <p>$$|\Psi(x, t)|^2 = \frac{1}{2}\psi_1(x)^2 + \frac{1}{2}\psi_2(x)^2 + \psi_1(x)\psi_2(x)\cos(3\omega_0 t), \quad \text{where } \omega_0 \equiv \frac{\pi^2\hbar}{2ma^2}.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Compute $\langle x \rangle(t)$</div>
  <p>$$\begin{aligned}
  \langle x \rangle(t) &= \int_0^a x |\Psi(x, t)|^2 dx \\
  &= \frac{1}{2}\int_0^a x\psi_1^2 dx + \frac{1}{2}\int_0^a x\psi_2^2 dx + \cos(3\omega_0 t)\int_0^a x\psi_1\psi_2 dx \\
  &= \frac{a}{2} - \frac{16a}{9\pi^2}\cos(3\omega_0 t).
  \end{aligned}$$</p>
  <p>Angular frequency is $\omega = 3\omega_0 = \frac{3\pi^2\hbar}{2ma^2}$. Amplitude is $M = \frac{16a}{9\pi^2} \approx 0.18a < a/2$.</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (d): Compute $\langle p \rangle(t)$ via Ehrenfest's Theorem</div>
  <p>$$\begin{aligned}
  \langle p \rangle(t) &= m\frac{d\langle x \rangle}{dt} = m \frac{d}{dt}\left[\frac{a}{2} - \frac{16a}{9\pi^2}\cos(3\omega_0 t)\right] \\
  &= m \frac{16a}{9\pi^2}(3\omega_0)\sin(3\omega_0 t) = \frac{8\hbar}{3a}\sin\left(\frac{3\pi^2\hbar}{2ma^2}t\right).
  \end{aligned}$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (e): Energy Measurements & Expectation Value</div>
  <p>$P(E_1) = 1/2$, $P(E_2) = 1/2$, and $\langle H \rangle = \frac{1}{2}(E_1 + E_2) = \frac{5\pi^2\hbar^2}{4ma^2}$.</p>
</div>
""",
        "answer": r"(a) $A = 1/\sqrt{2}$; (b) $|\Psi|^2 = \frac{1}{2}\psi_1^2 + \frac{1}{2}\psi_2^2 + \psi_1\psi_2\cos(3\omega_0 t)$; (c) $\langle x \rangle = \frac{a}{2} - \frac{16a}{9\pi^2}\cos(3\omega_0 t)$; (d) $\langle p \rangle = \frac{8\hbar}{3a}\sin(3\omega_0 t)$; (e) $P(E_1)=P(E_2)=1/2$, $\langle H \rangle = \frac{5\pi^2\hbar^2}{4ma^2}$."
    }

    sec += make_problem(
        5, "*", "Superposition of Ground and First Excited States",
        r"""<p>A particle in the infinite square well has as its initial wave function an even mixture of the first two stationary states:</p>
<p>$$\Psi(x, 0) = A [\psi_1(x) + \psi_2(x)].$$</p>""",
        subparts=[
            ("a", r"Normalize $\Psi(x, 0)$."),
            ("b", r"Find $\Psi(x, t)$ and $|\Psi(x, t)|^2$."),
            ("c", r"Compute $\langle x \rangle$. Notice that it oscillates in time. What is the angular frequency of the oscillation? What is the amplitude of the oscillation?"),
            ("d", r"Compute $\langle p \rangle$ using $\langle p \rangle = m \frac{d\langle x \rangle}{dt}$."),
            ("e", r"If you measured the energy of this particle, what values might you get, and what is the probability of getting each of them? Find the expectation value of $H$.")
        ],
        solution_data=sol_prob_2_5
    )

    # Problem 2.6
    sol_prob_2_6 = {
        "steps": r"""
<p><strong>Step 1: Normalization and full wave function $\Psi(x, t)$.</strong></p>
<p>$$1 = |A|^2(1 + |e^{i\phi}|^2) = 2|A|^2 \implies A = \frac{1}{\sqrt{2}}.$$</p>
<p>$$\Psi(x, t) = \frac{1}{\sqrt{2}}\psi_1(x)e^{-iE_1 t/\hbar} + \frac{1}{\sqrt{2}}\psi_2(x)e^{i\phi}e^{-iE_2 t/\hbar}.$$</p>

<p><strong>Step 2: Probability density $|\Psi(x, t)|^2$ and $\langle x \rangle(t)$.</strong></p>
<p>$$|\Psi(x, t)|^2 = \frac{1}{2}\psi_1(x)^2 + \frac{1}{2}\psi_2(x)^2 + \psi_1(x)\psi_2(x)\cos(\omega t - \phi), \quad \text{where } \omega \equiv \frac{3\pi^2\hbar}{2ma^2}.$$</p>
<p>$$\langle x \rangle(t) = \frac{a}{2} - \frac{16a}{9\pi^2}\cos(\omega t - \phi).$$</p>
""",
        "answer": r"$\langle x \rangle(t) = \frac{a}{2} - \frac{16a}{9\pi^2}\cos(\omega t - \phi)$. Relative phase $\phi$ creates a temporal phase lag/lead in the physical oscillation."
    }

    sec += make_problem(
        6, "", "Effect of Relative Phase",
        r"""<p>Suppose we change the relative phase of $\psi_1$ and $\psi_2$ in <a href="#prob-2-5" class="cross-ref">Problem 2.5</a>: $\Psi(x, 0) = A [\psi_1(x) + e^{i\phi}\psi_2(x)]$. Find $\Psi(x, t)$, $|\Psi(x, t)|^2$, and $\langle x \rangle$, and compare your results with what you got before. Study the special cases $\phi = \pi/2$ and $\phi = \pi$.</p>""",
        solution_data=sol_prob_2_6
    )

    # Problem 2.7
    sol_prob_2_7 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Sketch and Normalization Constant $A$</div>
  <p>$$1 = 2 A^2 \int_0^{a/2} x^2 dx = 2 A^2 \left[ \frac{x^3}{3} \right]_0^{a/2} = A^2 \frac{a^3}{12} \implies A = \sqrt{\frac{12}{a^3}} = \frac{2\sqrt{3}}{a^{3/2}}.$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Expansion Coefficients $c_n$ and $\Psi(x, t)$</div>
  <p>$$\begin{aligned}
  c_n &= 2 A \sqrt{\frac{2}{a}} \int_0^{a/2} x\sin(kx) dx = \frac{4\sqrt{6}}{a^2} \int_0^{a/2} x\sin(kx) dx \\
  &= \frac{4\sqrt{6}}{a^2} \left( \left[ -x\frac{\cos(kx)}{k} \right]_0^{a/2} + \frac{1}{k}\int_0^{a/2} \cos(kx) dx \right) \\
  &= \frac{4\sqrt{6}}{\pi^2 n^2}(-1)^{(n-1)/2} \quad (n = 1, 3, 5, \dots).
  \end{aligned}$$</p>
  <p>$$\Psi(x, t) = \frac{8\sqrt{3}}{\pi^2\sqrt{a}} \sum_{n=1,3,5,\dots}^\infty \frac{(-1)^{(n-1)/2}}{n^2}\sin\left(\frac{n\pi x}{a}\right) \exp\left(-i\frac{n^2\pi^2\hbar}{2ma^2}t\right).$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Probability of Ground State $P(E_1)$</div>
  <p>$$P(E_1) = |c_1|^2 = \frac{96}{\pi^4} \approx 0.9855 \quad (98.55\%).$$</p>
</div>

<div class="solution-subpart">
  <div class="solution-subpart-label">Part (d): Energy Expectation Value $\langle H \rangle$</div>
  <p>$$\langle H \rangle = \sum_{n=1,3,5,\dots} |c_n|^2 E_n = \frac{48\hbar^2}{\pi^2 ma^2}\left(\frac{\pi^2}{8}\right) = \frac{6\hbar^2}{ma^2}.$$</p>
</div>
""",
        "answer": r"(a) $A = \sqrt{12/a^3}$; (b) $c_n = \frac{4\sqrt{6}}{\pi^2 n^2}(-1)^{(n-1)/2}$ for odd $n$ (0 for even); (c) $P(E_1) = \frac{96}{\pi^4} \approx 98.55\%$; (d) $\langle H \rangle = \frac{6\hbar^2}{ma^2}$."
    }

    sec += make_problem(
        7, "*", "Symmetric Triangular Wave Function",
        r"""<p>A particle in the infinite square well has the initial wave function:</p>
<p>$$\Psi(x, 0) = \begin{cases} Ax, & 0 \le x \le a/2, \\ A(a - x), & a/2 \le x \le a. \end{cases}$$</p>""",
        subparts=[
            ("a", r"Sketch $\Psi(x, 0)$, and determine the constant $A$."),
            ("b", r"Find $\Psi(x, t)$."),
            ("c", r"What is the probability that a measurement of the energy would yield the ground-state value $E_1$?"),
            ("d", r"Find the expectation value of the energy, using $\langle H \rangle = \sum |c_n|^2 E_n$.")
        ],
        solution_data=sol_prob_2_7
    )

    # Problem 2.8
    sol_prob_2_8 = {
        "steps": r"""
<p><strong>Step 1: Normalize $\Psi(x, 0)$.</strong></p>
<p>$$1 = \int_0^{a/2} |A|^2 dx = |A|^2 \frac{a}{2} \implies A = \sqrt{\frac{2}{a}}.$$</p>

<p><strong>Step 2: Explicit integration for $c_1$.</strong></p>
<p>$$\begin{aligned}
c_1 &= \int_0^{a/2} \left(\sqrt{\frac{2}{a}}\sin\left(\frac{\pi x}{a}\right)\right)\left(\sqrt{\frac{2}{a}}\right) dx = \frac{2}{a} \int_0^{a/2} \sin\left(\frac{\pi x}{a}\right) dx \\
&= \frac{2}{a} \left[ -\frac{a}{\pi}\cos\left(\frac{\pi x}{a}\right) \right]_0^{a/2} = \frac{2}{\pi}.
\end{aligned}$$</p>

<p><strong>Step 3: Calculate energy probability $P(E_1)$.</strong></p>
<p>$$P(E_1) = |c_1|^2 = \left(\frac{2}{\pi}\right)^2 = \frac{4}{\pi^2} \approx 0.4053 \quad (40.53\%).$$</p>
""",
        "answer": r"$P(E_1) = |c_1|^2 = \frac{4}{\pi^2} \approx 40.53\%$."
    }

    sec += make_problem(
        8, "", "Step-like Localization in Left Half of the Well",
        r"""<p>A particle of mass $m$ in the infinite square well starts out in the state $\Psi(x, 0) = A$ for $0 \le x \le a/2$ ($0$ elsewhere). What is the probability that a measurement of the energy yields $E_1 = \frac{\pi^2\hbar^2}{2ma^2}$?</p>""",
        solution_data=sol_prob_2_8
    )

    # Problem 2.9
    sol_prob_2_9 = {
        "steps": r"""
<p><strong>Step 1: Compute $\hat{H}\Psi(x, 0)$ directly by differentiation.</strong></p>
<p>From <a href="#ex-2-2" class="cross-ref">Example 2.2</a>, $\Psi(x, 0) = \sqrt{\frac{30}{a^5}}(ax - x^2)$.</p>
<p>$$\frac{d^2\Psi}{dx^2} = -2\sqrt{\frac{30}{a^5}} \implies \hat{H}\Psi(x, 0) = -\frac{\hbar^2}{2m}\left(-2\sqrt{\frac{30}{a^5}}\right) = \frac{\hbar^2}{m}\sqrt{\frac{30}{a^5}}.$$</p>

<p><strong>Step 2: Evaluate the expectation value integral $\langle H \rangle = \int_0^a \Psi^* \hat{H}\Psi dx$.</strong></p>
<p>$$\begin{aligned}
\langle H \rangle &= \int_0^a \left[\sqrt{\frac{30}{a^5}}(ax - x^2)\right] \left[\frac{\hbar^2}{m}\sqrt{\frac{30}{a^5}}\right] dx \\
&= \frac{30\hbar^2}{ma^5} \int_0^a (ax - x^2) dx = \frac{30\hbar^2}{ma^5} \left(\frac{a^3}{6}\right) = \frac{5\hbar^2}{ma^2}.
\end{aligned}$$</p>
<p>This matches <a href="#ex-2-3" class="cross-ref">Example 2.3</a> exactly.</p>
""",
        "answer": r"$\langle H \rangle = \int_0^a \Psi(x, 0)^* \hat{H} \Psi(x, 0)\, dx = \frac{5\hbar^2}{ma^2}$, matching Example 2.3."
    }

    sec += make_problem(
        9, "", "Expectation Value of Hamiltonian via Operator Integration",
        r"""<p>For the wave function in <a href="#ex-2-2" class="cross-ref">Example 2.2</a> ($\Psi(x, 0) = \sqrt{\frac{30}{a^5}}x(a-x)$), find the expectation value of $H$, at time $t = 0$, the “old fashioned” way:</p>
<p>$$\langle H \rangle = \int \Psi(x, 0)^* \hat{H} \Psi(x, 0)\, dx.$$</p>
<p>Compare the result we got in <a href="#ex-2-3" class="cross-ref">Example 2.3</a> ($\langle H \rangle = \frac{5\hbar^2}{ma^2}$).</p>""",
        solution_data=sol_prob_2_9
    )

    sec += "\n  </section>\n"
    return sec

from helpers import make_problem
from generate_full_html import svg_fig_2_20, svg_fig_2_21, svg_fig_2_22

def get_further_p2():
    sec = ""

    # Problem 2.46
    sol_prob_2_46 = {
        "steps": r"""
<p>For a free particle on a circular ring of circumference $L$:</p>
<p>The TISE is $-\frac{\hbar^2}{2m}\frac{d^2\psi}{dx^2} = E\psi \implies \psi(x) = A e^{ikx}$.</p>
<p>Applying periodic boundary conditions $\psi(x + L) = \psi(x)$:</p>
<p>$$A e^{ik(x + L)} = A e^{ikx} \implies e^{ikL} = 1 \implies k_n L = 2n\pi \implies k_n = \frac{2n\pi}{L}, \quad n = 0, \pm 1, \pm 2, \dots$$</p>
<p>Normalization $\int_0^L |\psi_n|^2 dx = |A|^2 L = 1 \implies A = \frac{1}{\sqrt{L}}$.</p>
<p>The allowed energies are:</p>
<p>$$E_n = \frac{\hbar^2 k_n^2}{2m} = \frac{\hbar^2(2n\pi/L)^2}{2m} = \frac{2n^2\pi^2\hbar^2}{mL^2}.$$</p>
<p>For each $n \ge 1$, there are two independent degenerate eigenstates with energy $E_n$:</p>
<ul>
  <li>$\psi_n^+(x) = \frac{1}{\sqrt{L}}e^{i 2\pi n x/L}$ (clockwise circulation)</li>
  <li>$\psi_n^-(x) = \frac{1}{\sqrt{L}}e^{-i 2\pi n x/L}$ (counter-clockwise circulation)</li>
</ul>
<p><strong>Accounting for Degeneracy:</strong> The non-degeneracy theorem proved in <a href="#prob-2-44" class="cross-ref">Problem 2.44</a> explicitly assumed that $\psi(x) \to 0$ as $x \to \pm\infty$ on the infinite line $(-\infty, \infty)$ so that the constant Wronskian $W(x) = \psi_1\psi_2' - \psi_2\psi_1'$ was forced to be zero. On a compact ring without boundaries at infinity, the Wronskian $W = \psi_n^+(\psi_n^-)' - \psi_n^-(\psi_n^+)' = -2ik_n/L \neq 0$ is a non-zero constant, allowing two independent degenerate stationary states.</p>
""",
        "answer": r"$\psi_n^\pm(x) = \frac{1}{\sqrt{L}}e^{\pm i 2\pi n x/L}$ with $E_n = \frac{2n^2\pi^2\hbar^2}{mL^2}$. Degeneracy occurs because periodic boundaries allow a non-zero Wronskian."
    }

    sec += make_problem(
        46, "**", "Bead on a Circular Ring and Periodic Degeneracy",
        r"""<p>Imagine a bead of mass $m$ that slides frictionlessly around a circular wire ring of circumference $L$. (This is just like a free particle, except that $\psi(x + L) = \psi(x)$.) Find the stationary states (with appropriate normalization) and the corresponding allowed energies. Note that there are (with one exception) two independent solutions for each energy $E_n$—corresponding to clockwise and counter-clockwise circulation; call them $\psi_n^+(x)$ and $\psi_n^-(x)$. How do you account for this degeneracy in view of the theorem in <a href="#prob-2-44" class="cross-ref">Problem 2.44</a>?</p>""",
        solution_data=sol_prob_2_46
    )

    # Problem 2.47
    sol_prob_2_47 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Wave Function Sketches</div>
  <ul>
    <li><strong>$b = 0$ (Single broad well of width $2a$):</strong> $\psi_1$ is the standard ground state (no nodes), $\psi_2$ is the first excited state (one node at $x = 0$).</li>
    <li><strong>$b \approx a$ (Coupled double well):</strong> $\psi_1$ is symmetric across both wells with a small dip in the central barrier; $\psi_2$ is antisymmetric crossing zero in the middle.</li>
    <li><strong>$b \gg a$ (Decoupled wells):</strong> $\psi_1 \approx \frac{1}{\sqrt{2}}(\psi_L + \psi_R)$ and $\psi_2 \approx \frac{1}{\sqrt{2}}(\psi_L - \psi_R)$. Both have identical localized shapes inside each well.</li>
  </ul>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Energy Variation with Separation $b$</div>
  <p>As $b$ increases from $0$ to $\infty$:</p>
  <ul>
    <li>$E_1(b)$ increases from the broad-well ground state energy toward the single-well energy $E_{\text{isolated}}$.</li>
    <li>$E_2(b)$ decreases from the broad-well excited state energy toward $E_{\text{isolated}}$.</li>
    <li>As $b \to \infty$, the two energies become asymptotically degenerate.</li>
  </ul>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Chemical Bonding Force</div>
  <p>Since the ground-state energy $E_1(b)$ increases with separation $b$, the force is $F = -\frac{dE_1}{db} < 0$ (attractive force). The electron lowers its quantum kinetic energy by spreading across both nuclei, thereby drawing the nuclei together (covalent bonding).</p>
</div>
""",
        "answer": "The symmetric ground state has lower energy than the separated wells. The electron draws the nuclei together, creating a covalent chemical bond."
    }

    sec += make_problem(
        47, "", "Double Square Well (Qualitative Model of Diatomic Molecule)",
        r"""<p><em>Attention:</em> This is a strictly qualitative problem—no calculations allowed! Consider the double square well potential (Figure 2.20). Suppose the depth $V_0$ and the width $a$ are fixed, and large enough so that several bound states occur.</p>""",
        subparts=[
            ("a", r"Sketch the ground state wave function $\psi_1$ and the first excited state $\psi_2$, (i) for the case $b = 0$, (ii) for $b \approx a$, and (iii) for $b \gg a$."),
            ("b", r"Qualitatively, how do the corresponding energies ($E_1$ and $E_2$) vary as $b$ goes from $0$ to $\infty$? Sketch $E_1(b)$ and $E_2(b)$ on the same graph."),
            ("c", r"The double well is a primitive 1D model for the potential experienced by an electron in a diatomic molecule (the two wells represent the attractive force of the nuclei). In view of your conclusions in (b), does the electron tend to draw the nuclei together, or push them apart?")
        ],
        diagram_html=svg_fig_2_20,
        solution_data=sol_prob_2_47
    )

    # Problem 2.48
    sol_prob_2_48 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): Number of Bound States</div>
  <p>Here $V_0 = 32\frac{\hbar^2}{ma^2} \implies z_0 = \frac{a}{\hbar}\sqrt{2m(32\hbar^2/ma^2)} = \sqrt{64} = 8$.</p>
  <p>Inside the well ($0 \le x \le a$), $\psi(x) = A\sin(lx)$ because $\psi(0) = 0$. Outside ($x > a$), $\psi(x) = B e^{-\kappa x}$.</p>
  <p>Matching logarithmic derivatives at $x = a$: $l\cot(la) = -\kappa \implies -\cot(z) = \sqrt{(8/z)^2 - 1}$.</p>
  <p>The branches of $-\cot(z)$ for $z \in (0, 8)$ cross the $z$-axis at $\pi/2 \approx 1.57$, $3\pi/2 \approx 4.71$, and $5\pi/2 \approx 7.85$.</p>
  <p>Since $5\pi/2 = 7.854 < 8$, there are exactly <strong>4 bound states</strong> (roots near $z \approx 1.95, 3.86, 5.71, 7.42$).</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Probability Outside the Well in the Highest State</div>
  <p>For the 4th state, numerical root finding gives $z_4 \approx 7.42 \implies \kappa a = \sqrt{8^2 - (7.42)^2} = \sqrt{64 - 55.06} \approx 2.99$.</p>
  <p>Using the normalized wave function, the ratio of probability outside ($x > a$) to total probability is:</p>
  <p>$$P(x > a) = \frac{\sin^2(la)}{2\kappa a [\frac{a}{2} - \frac{\sin(2la)}{4l} + \frac{\sin^2(la)}{2\kappa}]} \approx 0.542 \quad (54.2\%).$$</p>
</div>
""",
        "answer": r"(a) There are 4 bound states ($z_0 = 8$); (b) in the highest state, $P(x > a) \approx 0.542$ ($54.2\%$ probability outside the well)."
    }

    sec += make_problem(
        48, "***", "Asymmetric Infinite-Finite Square Well",
        r"""<p>Consider a particle of mass $m$ in the potential:</p>
<p>$$V(x) = \begin{cases} \infty, & x < 0, \\ -32\hbar^2/(ma^2), & 0 \le x \le a, \\ 0, & x > a. \end{cases}$$</p>""",
        subparts=[
            ("a", r"How many bound states are there?"),
            ("b", r"In the highest-energy bound state, what is the probability that the particle would be found outside the well ($x > a$)? (Answer: $\approx 0.542$, so even though it is “bound” by the well, it is more likely to be found outside than inside!)")
        ],
        solution_data=sol_prob_2_48
    )

    # Problem 2.49
    sol_prob_2_49 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): TDSE Verification</div>
  <p>Direct differentiation with respect to $t$ and $x$ verifies that:</p>
  <p>$$i\hbar\frac{\partial\Psi}{\partial t} = \left(-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} + \frac{1}{2}m\omega^2 x^2\right)\Psi.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Probability Density and Motion</div>
  <p>Taking $|\Psi(x, t)|^2 = \Psi^*\Psi$:</p>
  <p>$$|\Psi(x, t)|^2 = \left(\frac{m\omega}{\pi\hbar}\right)^{1/2}\exp\left[-\frac{m\omega}{\hbar}(x - x_0\cos\omega t)^2\right].$$</p>
  <p>This is a rigid Gaussian wave packet with unchanging width $\sigma_x = \sqrt{\frac{\hbar}{2m\omega}}$ whose center oscillates sinusoidally as $x_{\text{center}}(t) = x_0\cos(\omega t)$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Expectation Values & Ehrenfest's Theorem</div>
  <p>$$\langle x \rangle(t) = x_0\cos(\omega t), \qquad \langle p \rangle(t) = m\frac{d\langle x \rangle}{dt} = -m\omega x_0\sin(\omega t).$$</p>
  <p>$$\frac{d\langle p \rangle}{dt} = -m\omega^2 x_0\cos(\omega t) = -m\omega^2\langle x \rangle = -\left\langle \frac{dV}{dx}\right\rangle. \quad \checkmark$$</p>
</div>
""",
        "answer": r"$|\Psi(x, t)|^2 = \sqrt{\frac{m\omega}{\pi\hbar}} e^{-\frac{m\omega}{\hbar}(x - x_0\cos\omega t)^2}$; center oscillates classically as $\langle x \rangle = x_0\cos\omega t$ with constant packet width."
    }

    sec += make_problem(
        49, "**", "Exact Coherent State of the Harmonic Oscillator",
        r"<p>For the simple harmonic oscillator:</p>",
        subparts=[
            ("a", r"Show that: $$\Psi(x, t) = \left(\frac{m\omega}{\pi\hbar}\right)^{1/4} \exp\left[-\frac{m\omega}{2\hbar}\left(x^2 + \frac{x_0^2}{2}(1 + e^{-2i\omega t}) + \frac{i\hbar t}{m} - 2x_0 x e^{-i\omega t}\right)\right]$$ satisfies the time-dependent Schrödinger equation for the harmonic oscillator potential. Here $x_0$ is any real constant with the dimensions of length."),
            ("b", r"Find $|\Psi(x, t)|^2$, and describe the motion of the wave packet."),
            ("c", r"Compute $\langle x \rangle$ and $\langle p \rangle$, and check that Ehrenfest’s theorem is satisfied.")
        ],
        solution_data=sol_prob_2_49
    )

    # Problem 2.50
    sol_prob_2_50 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): TDSE Verification</div>
  <p>Let $u = x - vt$. Computing partial derivatives:</p>
  <p>$$\frac{\partial \Psi}{\partial t} = \left[-v\frac{\partial \psi_0}{\partial u} - \frac{i}{\hbar}\left(E + \frac{1}{2}mv^2\right)\psi_0\right] e^{-i[(E + \frac{1}{2}mv^2)t - mvx]/\hbar}.$$</p>
  <p>$$\frac{\partial^2 \Psi}{\partial x^2} = \left[\frac{\partial^2 \psi_0}{\partial u^2} + \frac{2imv}{\hbar}\frac{\partial \psi_0}{\partial u} - \frac{m^2 v^2}{\hbar^2}\psi_0\right] e^{-i[(E + \frac{1}{2}mv^2)t - mvx]/\hbar}.$$</p>
  <p>Substituting into $i\hbar\frac{\partial\Psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2} - \alpha\delta(u)\Psi$ yields the stationary equation $-\frac{\hbar^2}{2m}\psi_0'' - \alpha\delta(u)\psi_0 = E\psi_0$. $\checkmark$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Expectation Value of Hamiltonian $\langle H \rangle$</div>
  <p>$$\langle H \rangle = \int \Psi^* \left(-\frac{\hbar^2}{2m}\frac{\partial^2}{\partial x^2} - \alpha\delta(x - vt)\right)\Psi dx = E + \frac{1}{2}mv^2 = -\frac{m\alpha^2}{2\hbar^2} + \frac{1}{2}mv^2.$$</p>
  <p>The total energy is the internal binding energy $E$ plus the classical bulk translational kinetic energy $\frac{1}{2}mv^2$.</p>
</div>
""",
        "answer": r"$\Psi(x, t)$ is an exact Galilean boost of the bound state; $\langle H \rangle = E + \frac{1}{2}mv^2 = -\frac{m\alpha^2}{2\hbar^2} + \frac{1}{2}mv^2$."
    }

    sec += make_problem(
        50, "**", "The Moving Delta-Function Well",
        r"""<p>Consider the moving delta-function well: $V(x, t) = -\alpha \delta(x - vt)$, where $v$ is the constant velocity of the well.</p>""",
        subparts=[
            ("a", r"Show that the time-dependent Schrödinger equation admits the exact solution: $$\Psi(x, t) = \frac{sqrt{m\alpha}}{\hbar} e^{-m\alpha|x - vt|/\hbar^2} \exp\left[-\frac{i}{\hbar}\left(\left(E + \frac{1}{2}mv^2\right)t - mvx\right)\right],$$ where $E = -m\alpha^2/(2\hbar^2)$ is the stationary bound-state energy."),
            ("b", r"Find the expectation value of the Hamiltonian in this state, and comment on the result.")
        ],
        solution_data=sol_prob_2_50
    )

    # Problem 2.51
    sol_prob_2_51 = {
        "steps": r"""
<p>Direct substitution of $\Psi(x, t) = \Psi_0\left(x + \frac{1}{2}gt^2, t\right) \exp\left[-\frac{i mgt}{\hbar}\left(x + \frac{1}{6}gt^2\right)\right]$ into $i\hbar\frac{\partial\Psi}{\partial t} = -\frac{\hbar^2}{2m}\frac{\partial^2\Psi}{\partial x^2} + mgx\Psi$ cancels the $mgx$ potential term exactly, relying on $\Psi_0$ satisfying the free particle TDSE.</p>
<p>Since $\Psi_0(y, t)$ is centered at $y = 0$, the position expectation value is:</p>
<p>$$\langle x \rangle(t) = -\frac{1}{2}gt^2.$$</p>
<p>The quantum wave packet falls with exactly the classical downward gravitational acceleration $g$, maintaining its spreading characteristics.</p>
""",
        "answer": r"$\langle x \rangle(t) = -\frac{1}{2}gt^2$. The wave packet accelerates in free fall according to classical mechanics (Ehrenfest's theorem)."
    }

    sec += make_problem(
        51, "***", "Quantum Free Fall in Uniform Gravity",
        r"""<p>Show that</p>
<p>$$\Psi(x, t) = \Psi_0\left(x + \frac{1}{2}gt^2, t\right) \exp\left[-\frac{i mgt}{\hbar}\left(x + \frac{1}{6}gt^2\right)\right]$$</p>
<p>satisfies the time-dependent Schrödinger equation for a particle in a uniform gravitational field $V(x) = mgx$, where $\Psi_0(x, t)$ is the free Gaussian wave packet (Equation 2.111: $\Psi_0(x, t) = (2a/\pi)^{1/4}\frac{1}{\gamma}e^{-ax^2/\gamma^2}$). Find $\langle x \rangle$ as a function of time, and comment on the result.</p>""",
        solution_data=sol_prob_2_51
    )

    # Problem 2.52
    sol_prob_2_52 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a) & (b): Ground State & Energy</div>
  <p>$V(x) = -\frac{\hbar^2 a^2}{m}\text{sech}^2(ax)$ is a smooth symmetric well of depth $V_0 = \hbar^2 a^2/m$.</p>
  <p>Differentiating $\psi_0(x) = A\text{sech}(ax)$:</p>
  <p>$$\psi_0'(x) = -a A \text{sech}(ax)\tanh(ax), \qquad \psi_0''(x) = a^2 A \text{sech}(ax)[2\text{sech}^2(ax) - 1] = a^2[2\text{sech}^2(ax) - 1]\psi_0(x).$$</p>
  <p>$$-\frac{\hbar^2}{2m}\psi_0'' + V\psi_0 = -\frac{\hbar^2 a^2}{2m}[2\text{sech}^2(ax) - 1]\psi_0 - \frac{\hbar^2 a^2}{m}\text{sech}^2(ax)\psi_0 = -\frac{\hbar^2 a^2}{2m}\psi_0 \implies E_0 = -\frac{\hbar^2 a^2}{2m}.$$</p>
  <p>Normalization: $1 = |A|^2\int_{-\infty}^\infty \text{sech}^2(ax)dx = |A|^2\left[\frac{\tanh(ax)}{a}\right]_{-\infty}^\infty = |A|^2\frac{2}{a} \implies A = \sqrt{\frac{a}{2}}$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (c): Reflectionless Scattering ($R = 0, T = 1$)</div>
  <p>As $x \to +\infty$: $\tanh(ax) \to 1 \implies \psi_k(x) \to A\left(\frac{ik - a}{ik + a}\right)e^{ikx}$.</p>
  <p>As $x \to -\infty$: $\tanh(ax) \to -1 \implies \psi_k(x) \to A e^{ikx}$.</p>
  <p>Notice there is <strong>no $e^{-ikx}$ reflected wave</strong> as $x \to -\infty$! Hence:</p>
  <p>$$R = 0, \qquad T = \left|\frac{ik - a}{ik + a}\right|^2 = \frac{k^2 + a^2}{k^2 + a^2} = 1.$$</p>
</div>
""",
        "answer": r"$E_0 = -\frac{\hbar^2 a^2}{2m}, \psi_0(x) = \sqrt{\frac{a}{2}}\text{sech}(ax)$; reflection coefficient $R = 0$ and transmission $T = 1$ for all energies (reflectionless potential)."
    }

    sec += make_problem(
        52, "", "The Reflectionless Pöschl-Teller / Sech-Squared Potential",
        r"""<p>Consider the potential:</p>
<p>$$V(x) = -\frac{\hbar^2 a^2}{m} \text{sech}^2(ax),$$</p>
<p>where $a$ is a positive constant.</p>""",
        subparts=[
            ("a", r"Graph this potential."),
            ("b", r"Check that this potential has the ground state $\psi_0(x) = A\text{sech}(ax)$, and find its energy. Normalize $\psi_0$, and sketch its graph."),
            ("c", r"Show that the function: $$\psi_k(x) = A\left(\frac{ik - a\tanh(ax)}{ik + a}\right) e^{ikx}$$ (where $k \equiv \sqrt{2mE}/\hbar$) solves the Schrödinger equation for any energy $E > 0$. What is the asymptotic form of $\psi_k(x)$ at large positive $x$? What are the reflection and transmission coefficients $R$ and $T$? (Comment: This is a famous reflectionless potential—every incident particle passes right through!)")
        ],
        solution_data=sol_prob_2_52
    )

    # Problem 2.53
    sol_prob_2_53 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): S-Matrix for Delta Well $V(x) = -\alpha\delta(x)$</div>
  <p>With $\beta = \frac{m\alpha}{\hbar^2}$, the transmission amplitude is $F/A = \frac{ik}{ik + \beta}$ and reflection is $B/A = \frac{-\beta}{ik + \beta}$.</p>
  <p>$$\mathbf{S} = \frac{1}{ik + \beta}\begin{pmatrix} -\beta & ik \\ ik & -\beta \end{pmatrix}.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): S-Matrix for Finite Square Well</div>
  <p>For a symmetric well, $T_l = T_r \equiv T_{\text{amp}}$ and $R_l = R_r \equiv R_{\text{amp}}$.</p>
  <p>Using the amplitudes from <a href="#prob-2-32" class="cross-ref">Problem 2.32</a>:</p>
  <p>$$T_{\text{amp}} = \frac{e^{-2ika}}{\cos(2la) - i\frac{k^2+l^2}{2kl}\sin(2la)}, \qquad R_{\text{amp}} = i\frac{l^2 - k^2}{2kl}\sin(2la) T_{\text{amp}}.$$</p>
  <p>$$\mathbf{S} = \begin{pmatrix} R_{\text{amp}} & T_{\text{amp}} \\ T_{\text{amp}} & R_{\text{amp}} \end{pmatrix}.$$</p>
</div>
""",
        "answer": r"Delta well: $\mathbf{S} = \frac{1}{ik + \beta}\begin{pmatrix} -\beta & ik \\ ik & -\beta \end{pmatrix}$; Finite well: $\mathbf{S} = \begin{pmatrix} R & T \\ T & R \end{pmatrix}$."
    }

    sec += make_problem(
        53, "", "The Scattering Matrix (S-Matrix) Formalism",
        r"""<p>The theory of scattering generalizes to arbitrary localized potentials $V(x)$ (Figure 2.21). In Region I ($x < -a$), $\psi(x) = A e^{ikx} + B e^{-ikx}$; in Region III ($x > a$), $\psi(x) = F e^{ikx} + G e^{-ikx}$. The $2 \times 2$ scattering matrix $\mathbf{S}$ relates the outgoing amplitudes $(B, F)$ to incoming amplitudes $(A, G)$:</p>
<p>$$\begin{pmatrix} B \\ F \end{pmatrix} = \begin{pmatrix} S_{11} & S_{12} \\ S_{21} & S_{22} \end{pmatrix} \begin{pmatrix} A \\ G \end{pmatrix}.$$</p>""",
        subparts=[
            ("a", r"Construct the $S$-matrix for scattering from a delta-function well $V(x) = -\alpha\delta(x)$."),
            ("b", r"Construct the $S$-matrix for the finite square well ($V(x) = -V_0$ for $-a \le x \le a$). (Hint: Exploit the parity symmetry of the well.)")
        ],
        diagram_html=svg_fig_2_21,
        solution_data=sol_prob_2_53
    )

    # Problem 2.54
    sol_prob_2_54 = {
        "steps": r"""
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (a): M-Matrix in terms of S-Matrix</div>
  <p>From $B = S_{11}A + S_{12}G$ and $F = S_{21}A + S_{22}G$, solving for $(F, G)$ in terms of $(A, B)$:</p>
  <p>$$M_{11} = S_{21} - \frac{S_{22}S_{11}}{S_{12}}, \quad M_{12} = \frac{S_{22}}{S_{12}}, \quad M_{21} = -\frac{S_{11}}{S_{12}}, \quad M_{22} = \frac{1}{S_{12}}.$$</p>
  <p>$$T_l = \frac{1}{|M_{22}|^2}, \qquad R_l = \left|\frac{M_{21}}{M_{22}}\right|^2.$$</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Part (b): Composition Law $\mathbf{M} = \mathbf{M}_2 \mathbf{M}_1$</div>
  <p>Let middle region amplitudes be $(C, D)$. Then $\begin{pmatrix} C \\ D \end{pmatrix} = \mathbf{M}_1 \begin{pmatrix} A \\ B \end{pmatrix}$ and $\begin{pmatrix} F \\ G \end{pmatrix} = \mathbf{M}_2 \begin{pmatrix} C \\ D \end{pmatrix} \implies \begin{pmatrix} F \\ G \end{pmatrix} = \mathbf{M}_2 \mathbf{M}_1 \begin{pmatrix} A \\ B \end{pmatrix}$.</p>
</div>
<div class="solution-subpart">
  <div class="solution-subpart-label">Parts (c) & (d): Single and Double Delta M-Matrices</div>
  <p>For delta well at $x = x_0$ with $\beta = \frac{m\alpha}{\hbar^2}$:</p>
  <p>$$\mathbf{M}(x_0) = \begin{pmatrix} 1 + i\frac{\beta}{k} & i\frac{\beta}{k}e^{-2ikx_0} \\ -i\frac{\beta}{k}e^{2ikx_0} & 1 - i\frac{\beta}{k} \end{pmatrix}.$$</p>
  <p>For double delta $V = -\alpha[\delta(x+a) + \delta(x-a)]$, $\mathbf{M} = \mathbf{M}(+a)\mathbf{M}(-a)$. The $(2,2)$ element is:</p>
  <p>$$M_{22} = \left(1 - i\frac{\beta}{k}\right)^2 + \frac{\beta^2}{k^2}e^{-4ika} = 1 - 2i\frac{\beta}{k} - \frac{\beta^2}{k^2}(1 - e^{-4ika}).$$</p>
  <p>$$T = \frac{1}{|M_{22}|^2} = \left[1 + \frac{4\beta^2}{k^2}\left(\cos(2ka) + \frac{\beta}{k}\sin(2ka)\right)^2\right]^{-1}.$$</p>
  <p>This matches <a href="#prob-2-28" class="cross-ref">Problem 2.28</a>.</p>
</div>
""",
        "answer": r"$\mathbf{M} = \mathbf{M}_2\mathbf{M}_1$. Double delta transmission $T = [1 + \frac{4\beta^2}{k^2}(\cos(2ka) + \frac{\beta}{k}\sin(2ka))^2]^{-1}$, matching Problem 2.28."
    }

    sec += make_problem(
        54, "**", "The Transfer Matrix (M-Matrix) and Composite Potentials",
        r"""<p>The transfer matrix $\mathbf{M}$ gives the wave amplitudes to the right of the potential $(F, G)$ in terms of those to the left $(A, B)$:</p>
<p>$$\begin{pmatrix} F \\ G \end{pmatrix} = \begin{pmatrix} M_{11} & M_{12} \\ M_{21} & M_{22} \end{pmatrix} \begin{pmatrix} A \\ B \end{pmatrix}.$$</p>""",
        subparts=[
            ("a", r"Find the four elements of the $M$-matrix in terms of the elements of the $S$-matrix (from <a href='#prob-2-53' class='cross-ref'>Problem 2.53</a>), and vice versa. Express $R_l, T_l, R_r,$ and $T_r$ in terms of elements of the $M$-matrix."),
            ("b", r"Suppose you have a potential consisting of two isolated pieces (Figure 2.22). Show that the $M$-matrix for the combination is the product of the two individual transfer matrices: $\mathbf{M} = \mathbf{M}_2 \mathbf{M}_1$."),
            ("c", r"Construct the $M$-matrix for scattering from a single delta-function at point $a$: $V(x) = -\alpha\delta(x - a)$."),
            ("d", r"By matrix multiplication, find the $M$-matrix for scattering from the double delta function $V(x) = -\alpha[\delta(x + a) + \delta(x - a)]$, and deduce its transmission coefficient.")
        ],
        diagram_html=svg_fig_2_22,
        solution_data=sol_prob_2_54
    )

    # Problem 2.55
    sol_prob_2_55 = {
        "steps": r"""
<p>For the ground state (even parity), initial conditions at $\xi = 0$ are $u(0) = 1, u'(0) = 0$ for $\frac{d^2 u}{d\xi^2} = (\xi^2 - K)u$ with $K = \frac{2E}{\hbar\omega}$.</p>
<p>Numerical integration outward to large $\xi$ (e.g. $\xi = 5$):</p>
<ul>
  <li>If $K < 1.00000$, $u(\xi) \to +\infty$ (under-shoot).</li>
  <li>If $K > 1.00000$, $u(\xi) \to -\infty$ (over-shoot).</li>
</ul>
<p>Bisection bracketing isolates the exact eigenvalue to five significant digits: $K = 1.00000 \implies E = \frac{1}{2}\hbar\omega(1.00000) = 0.50000\hbar\omega$.</p>
""",
        "answer": r"$K = 1.00000 \implies E_0 = 0.50000\hbar\omega$."
    }

    sec += make_problem(
        55, "", "Numerical Shooting Method: Wagging the Dog for Ground State",
        r"""<p>Find the ground state energy of the harmonic oscillator, to five significant digits, by the “wag-the-dog” (shooting) method. Solve $\frac{d^2 u}{dx^2} - (x^2 - K)u = 0$ numerically on $x \in [0, b]$ with initial conditions $u(0) = 1, u'(0) = 0$, varying the dimensionless energy parameter $K = 2E/\hbar\omega$ around $1.0$ until you bracket the crossover point where the tail flips between $+\infty$ and $-\infty$.</p>""",
        solution_data=sol_prob_2_55
    )

    return sec

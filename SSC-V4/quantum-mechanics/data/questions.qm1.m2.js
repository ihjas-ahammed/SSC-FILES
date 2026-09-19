/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module II — Written Exercises (Griffiths Ch 2 & Zettili)
   Total Questions: 15 (worked step-by-step solutions)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'q.qm1.m2.01',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.1',
    marks: 4,
    title: 'Minimum Potential Constraint on Energy Eigenvalues',
    source: 'Griffiths 3e §2.1 Problem 2.1',
    prompt: `<p>Show that the energy eigenvalue $E$ for any physically acceptable (normalizable) solution to the Time-Independent Schrödinger Equation must strictly exceed the minimum value of the potential energy, $E > V_{\\text{min}}$.</p>`,
    tests: ['c.2.1.1'],
    approach: '<p>Rewrite the TISE as $\\frac{d^2\\psi}{dx^2} = \\frac{2m}{\\hbar^2}[V(x) - E]\\psi$. If $E < V_{\\text{min}}$, the factor $[V(x) - E]$ is strictly positive everywhere, forcing $\\psi$ and its second derivative $\\psi\'\'$ to share the same sign everywhere, which prevents normalizability.</p>',
    solution: `<p>Rewrite the Time-Independent Schrödinger Equation in the form:
$$\\frac{d^2\\psi}{dx^2} = \\frac{2m}{\\hbar^2}[V(x) - E]\\psi(x)$$
Suppose, to the contrary, that $E \\le V_{\\text{min}}$. Then for all $x \\in \\mathbb{R}$, we have $V(x) - E \\ge 0$.</p>
<p><b>Analysis of Curvature:</b>
<ul>
  <li>If $\\psi(x) > 0$ at some point, then $\\frac{d^2\\psi}{dx^2} > 0$, meaning $\\psi(x)$ is concave upward (convex). As $x \\to \\pm\\infty$, its slope becomes steeper and steeper, driving $\\psi(x) \\to +\\infty$.</li>
  <li>If $\\psi(x) < 0$ at some point, then $\\frac{d^2\\psi}{dx^2} < 0$, meaning $\\psi(x)$ is concave downward. As $x \\to \\pm\\infty$, $\\psi(x) \\to -\\infty$.</li>
  <li>The only way for $\\psi(x)$ to curve back toward the axis to remain normalizable is if $\\frac{d^2\\psi}{dx^2}$ has the <i>opposite</i> sign of $\\psi(x)$, which strictly requires $E > V(x)$ in some spatial interval.</li>
</ul>
Therefore, for $\\psi(x) \\to 0$ as $x \\to \\pm\\infty$, the particle must have energy $E > V_{\\text{min}}$. A state with $E \\le V_{\\text{min}}$ cannot be normalized.</p>`,
    trap: 'Trying to invoke classical kinetic energy T = E - V ≥ 0; quantum arguments must rely strictly on the differential equation and normalizability.'
  },
  {
    id: 'q.qm1.m2.02',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.1',
    marks: 3,
    title: 'Reality of Stationary State Wave Functions',
    source: 'Griffiths 3e §2.1 Problem 2.3',
    prompt: `<p>(a) Show that if $\\psi(x)$ satisfies the Time-Independent Schrödinger Equation with real energy $E$, then its complex conjugate $\\psi^*(x)$ also satisfies the TISE with the same energy.<br>
(b) Deduce that for non-degenerate energy levels, the spatial wave function can always be chosen to be purely real.</p>`,
    tests: ['c.2.1.1', 'c.2.4.3'],
    approach: '<p>Take the complex conjugate of the TISE noting that $V(x)$ and $E$ are real. Then construct the real linear combination $\\psi_R = \\frac{\\psi + \\psi^*}{2}$.</p>',
    solution: `<p><b>(a) Complex Conjugate of TISE:</b><br>
The TISE is:
$$-\\frac{\\hbar^2}{2m} \\frac{d^2\\psi}{dx^2} + V(x)\\psi(x) = E\\psi(x)$$
Taking the complex conjugate of both sides, and noting that $m, \\hbar, V(x),$ and $E$ are real:
$$-\\frac{\\hbar^2}{2m} \\frac{d^2\\psi^*}{dx^2} + V(x)\\psi^*(x) = E\\psi^*(x)$$
Thus $\\psi^*(x)$ satisfies the identical eigenvalue equation with the same energy $E$.</p>
<p><b>(b) Purely Real Wave Functions:</b><br>
If the state is non-degenerate, any two solutions for the same energy $E$ must be proportional:
$$\\psi^*(x) = c \\, \\psi(x)$$
for some constant $c$. Since $|\\psi^*|^2 = |c|^2 |\\psi|^2$, $|c| = 1$, so $c = e^{i\\theta}$.<br>
Letting $\\psi(x) = e^{i\\theta/2}\\psi_0(x)$, we find $\\psi_0(x)$ is purely real.<br>
Alternatively, because the equation is linear, we can construct:
$$\\psi_1(x) = \\frac{\\psi(x) + \\psi^*(x)}{2} = \\text{Re}[\\psi(x)], \\qquad \\psi_2(x) = \\frac{\\psi(x) - \\psi^*(x)}{2i} = \\text{Im}[\\psi(x)]$$
Both $\\psi_1$ and $\\psi_2$ are real solutions for energy $E$. Hence, the spatial eigenstates can always be chosen purely real without loss of generality.</p>`,
    trap: 'Assuming wave functions with degenerate states (such as free particle plane waves e^{ikx}) are automatically real.'
  },
  {
    id: 'q.qm1.m2.03',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.2',
    marks: 5,
    title: 'Infinite Well Position and Momentum Variances',
    source: 'Griffiths 3e §2.2 Problem 2.4',
    prompt: `<p>For a particle in the $n$-th stationary state of the infinite square well of width $a$ ($0 \\le x \\le a$), calculate:
(a) $\\langle x \\rangle$ and $\\langle x^2 \\rangle$<br>
(b) $\\langle p \\rangle$ and $\\langle p^2 \\rangle$<br>
(c) The product $\\sigma_x \\sigma_p$ and verify that the Heisenberg uncertainty principle is satisfied for all $n \\ge 1$.</p>`,
    tests: ['c.2.2.2', 'c.1.6.1'],
    approach: '<p>Use $\\psi_n(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right)$ and standard trigonometric integrals $\\int_0^a x \\sin^2(n\\pi x/a) dx$ and $\\int_0^a x^2 \\sin^2(n\\pi x/a) dx$.</p>',
    solution: `<p><b>(a) Position Expectation Values:</b><br>
By symmetry of $|\\psi_n(x)|^2$ about the center of the well:
$$\\langle x \\rangle = \\frac{a}{2}$$
For $\\langle x^2 \\rangle$:
$$\\langle x^2 \\rangle = \\frac{2}{a} \\int_0^a x^2 \\sin^2\\left(\\frac{n\\pi x}{a}\\right) dx = a^2 \\left[ \\frac{1}{3} - \\frac{1}{2n^2 \\pi^2} \\right]$$
Thus the position variance is:
$$\\sigma_x^2 = \\langle x^2 \\rangle - \\langle x \\rangle^2 = a^2 \\left[ \\frac{1}{3} - \\frac{1}{2n^2 \\pi^2} \\right] - \\frac{a^2}{4} = a^2 \\left[ \\frac{1}{12} - \\frac{1}{2n^2 \\pi^2} \\right]$$</p>
<p><b>(b) Momentum Expectation Values:</b><br>
Since $\\psi_n(x)$ is purely real:
$$\\langle p \\rangle = 0$$
For $\\langle p^2 \\rangle$, using $\\hat{H} = \\frac{\\hat{p}^2}{2m} = E_n$:
$$\\langle p^2 \\rangle = 2m E_n = 2m \\left( \\frac{n^2 \\pi^2 \\hbar^2}{2m a^2} \\right) = \\frac{n^2 \\pi^2 \\hbar^2}{a^2}$$
Thus $\\sigma_p^2 = \\langle p^2 \\rangle - \\langle p \\rangle^2 = \\frac{n^2 \\pi^2 \\hbar^2}{a^2} \\implies \\sigma_p = \\frac{n\\pi\\hbar}{a}$.</p>
<p><b>(c) Uncertainty Product:</b><br>
$$\\sigma_x \\sigma_p = \\hbar \\sqrt{\\frac{n^2 \\pi^2}{12} - \\frac{1}{2}}$$
For the ground state ($n = 1$):
$$\\sigma_x \\sigma_p = \\hbar \\sqrt{\\frac{\\pi^2}{12} - \\frac{1}{2}} \\approx \\hbar \\sqrt{0.8225 - 0.5} = \\hbar \\sqrt{0.3225} \\approx 0.568 \\hbar > \\frac{\\hbar}{2}$$
For all $n \\ge 1$, $\\frac{n^2 \\pi^2}{12} - \\frac{1}{2} > \\frac{1}{4}$, so $\\sigma_x \\sigma_p > \\frac{\\hbar}{2}$, strictly satisfying Heisenberg\'s principle.</p>`,
    trap: 'Assuming ⟨p⟩ = ħk_n = nπħ/a; the particle moves in both directions equally, so ⟨p⟩ = 0.'
  },
  {
    id: 'q.qm1.m2.04',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.2',
    marks: 6,
    title: 'Two-State Superposition and Quantum Beats',
    source: 'Griffiths 3e §2.2 Problem 2.5',
    prompt: `<p>A particle in the infinite square well of width $a$ has as its initial wave function an even mixture of the first two stationary states:
$$\\Psi(x,0) = A [\\psi_1(x) + \\psi_2(x)]$$
(a) Normalize $\\Psi(x,0)$ to find the constant $A$.<br>
(b) Write down $\\Psi(x,t)$ and $|\\Psi(x,t)|^2$.<br>
(c) Compute $\\langle x \\rangle(t)$ and determine the frequency $\\omega$ and amplitude of its oscillation.</p>`,
    tests: ['c.2.1.2', 'c.2.1.4', 'c.2.2.2'],
    approach: '<p>Use orthonormality $\\int \\psi_m \\psi_n dx = \\delta_{mn}$ to normalize, attach phase factors $e^{-iE_n t/\\hbar}$, expand $|\\Psi|^2$, and evaluate $\\int x \\psi_1 \\psi_2 dx$.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$$\\int_0^a |\\Psi(x,0)|^2 dx = |A|^2 \\int_0^a [\\psi_1^2 + \\psi_2^2 + 2\\psi_1 \\psi_2] dx = |A|^2 (1 + 1 + 0) = 2|A|^2 = 1 \\implies A = \\frac{1}{\\sqrt{2}}$$
So $\\Psi(x,0) = \\frac{1}{\\sqrt{2}}\\psi_1(x) + \\frac{1}{\\sqrt{2}}\\psi_2(x)$.</p>
<p><b>(b) Time Evolution:</b><br>
$$\\Psi(x,t) = \\frac{1}{\\sqrt{2}}\\psi_1(x) e^{-iE_1 t/\\hbar} + \\frac{1}{\\sqrt{2}}\\psi_2(x) e^{-iE_2 t/\\hbar}$$
The probability density is:
$$|\\Psi(x,t)|^2 = \\frac{1}{2}\\psi_1^2(x) + \\frac{1}{2}\\psi_2^2(x) + \\psi_1(x)\\psi_2(x) \\cos(\\omega t)$$
where the Bohr beat frequency is:
$$\\omega = \\frac{E_2 - E_1}{\\hbar} = \\frac{4E_1 - E_1}{\\hbar} = \\frac{3E_1}{\\hbar} = \\frac{3\\pi^2 \\hbar}{2ma^2}$$</p>
<p><b>(c) Expectation Value $\\langle x \\rangle(t)$:</b><br>
$$\\langle x \\rangle(t) = \\frac{1}{2}\\int x\\psi_1^2 dx + \\frac{1}{2}\\int x\\psi_2^2 dx + \\cos(\\omega t) \\int_0^a x\\psi_1(x)\\psi_2(x) dx$$
The first two terms equal $\\frac{1}{2}(a/2) + \\frac{1}{2}(a/2) = \\frac{a}{2}$.<br>
The cross-term integral:
$$\\int_0^a x \\left(\\sqrt{\\frac{2}{a}}\\sin\\frac{\\pi x}{a}\\right)\\left(\\sqrt{\\frac{2}{a}}\\sin\\frac{2\\pi x}{a}\\right) dx = \\frac{2}{a}\\int_0^a x \\sin\\frac{\\pi x}{a} \\sin\\frac{2\\pi x}{a} dx = -\\frac{16a}{9\\pi^2}$$
Thus:
$$\\langle x \\rangle(t) = \\frac{a}{2} - \\frac{16a}{9\\pi^2} \\cos(\\omega t)$$
The expectation value sloshes back and forth about the center $a/2$ with amplitude $\\frac{16a}{9\\pi^2} \\approx 0.18 a$ and frequency $\\omega = \\frac{3\\pi^2 \\hbar}{2ma^2}$.</p>`,
    trap: 'Thinking the frequency is (E₁ + E₂)/ħ; the interference term oscillates at the difference frequency (E₂ - E₁)/ħ.'
  },
  {
    id: 'q.qm1.m2.05',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.2',
    marks: 6,
    title: 'Parabolic Initial Wave Function in an Infinite Well',
    source: 'Griffiths 3e §2.2 Problem 2.6',
    prompt: `<p>A particle in the infinite square well has the initial wave function:
$$\\Psi(x,0) = A x(a - x) \\qquad (0 \\le x \\le a)$$
(a) Normalize $\\Psi(x,0)$ to determine $A$.<br>
(b) Find the expansion coefficients $c_n$.<br>
(c) What is the probability that a measurement of energy will yield the ground state energy $E_1$?</p>`,
    tests: ['c.2.1.4', 'c.2.2.3'],
    approach: '<p>Compute $\\int_0^a x^2(a-x)^2 dx = a^5/30$ for normalization, then integrate $c_n = \\int_0^a \\psi_n(x) \\Psi(x,0) dx$ by parts twice.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$$1 = |A|^2 \\int_0^a x^2(a-x)^2 dx = |A|^2 \\int_0^a (a^2 x^2 - 2a x^3 + x^4) dx = |A|^2 a^5 \\left(\\frac{1}{3} - \\frac{2}{4} + \\frac{1}{5}\\right) = |A|^2 \\frac{a^5}{30}$$
$$A = \\sqrt{\\frac{30}{a^5}}$$</p>
<p><b>(b) Expansion Coefficients $c_n$:</b><br>
$$c_n = \\sqrt{\\frac{2}{a}} \\sqrt{\\frac{30}{a^5}} \\int_0^a x(a - x) \\sin\\left(\\frac{n\\pi x}{a}\\right) dx = \\frac{2\\sqrt{15}}{a^3} \\int_0^a (ax - x^2) \\sin\\left(\\frac{n\\pi x}{a}\\right) dx$$
Integrating by parts:
$$c_n = \\begin{cases} \\dfrac{8\\sqrt{15}}{(n\\pi)^3}, & n = 1, 3, 5, \\dots \\\\ 0, & n = 2, 4, 6, \\dots \\end{cases}$$
Even $n$ coefficients vanish because $x(a-x)$ is symmetric about $x = a/2$, whereas even eigenfunctions are antisymmetric about $a/2$.</p>
<p><b>(c) Probability of Ground State $E_1$:</b><br>
$$P(E_1) = |c_1|^2 = \\left( \\frac{8\\sqrt{15}}{\\pi^3} \\right)^2 = \\frac{64 \\times 15}{\\pi^6} = \\frac{960}{\\pi^6} \\approx \\frac{960}{961.389} \\approx 0.99855 \\quad (99.86\\%)$$
Almost the entire state is in the ground state because the parabola $x(a-x)$ closely mirrors the half-sine wave $\\sin(\\pi x/a)$.</p>`,
    trap: 'Forgetting that even n vanishes by symmetry, wasting effort calculating non-zero values for n=2, 4.'
  },
  {
    id: 'q.qm1.m2.06',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.2',
    marks: 4,
    title: 'Symmetric Triangular State in an Infinite Well',
    source: 'Griffiths 3e §2.2 Problem 2.7',
    prompt: `<p>A particle in the infinite well has the initial triangular wave function:
$$\\Psi(x,0) = \\begin{cases} A x, & 0 \\le x \\le a/2 \\\\ A(a - x), & a/2 \\le x \\le a \\end{cases}$$
(a) Normalize $\\Psi(x,0)$.<br>
(b) Calculate $c_n$ and verify that $c_n = 0$ for all even $n$.</p>`,
    tests: ['c.2.2.3', 'c.2.2.4'],
    approach: '<p>Split the integrals into $[0, a/2]$ and $[a/2, a]$ or exploit symmetry about $a/2$.</p>',
    solution: `<p><b>(a) Normalization:</b><br>
$$1 = 2 |A|^2 \\int_0^{a/2} x^2 dx = 2 |A|^2 \\left[ \\frac{x^3}{3} \\right]_0^{a/2} = 2 |A|^2 \\frac{a^3}{24} = |A|^2 \\frac{a^3}{12} \\implies A = \\sqrt{\\frac{12}{a^3}} = \\frac{2\\sqrt{3}}{a^{3/2}}$$</p>
<p><b>(b) Fourier Coefficients $c_n$:</b><br>
$$c_n = \\int_0^a \\psi_n(x) \\Psi(x,0) dx = 2 \\sqrt{\\frac{2}{a}} A \\int_0^{a/2} x \\sin\\left(\\frac{n\\pi x}{a}\\right) dx$$
Evaluating the integral by parts:
$$\\int_0^{a/2} x \\sin\\left(\\frac{n\\pi x}{a}\\right) dx = \\left( \\frac{a}{n\\pi} \\right)^2 \\sin\\left(\\frac{n\\pi}{2}\\right) - \\frac{a^2}{2n\\pi} \\cos\\left(\\frac{n\\pi}{2}\\right)$$
For even $n = 2k$, $\\sin(k\\pi) = 0$ and the overall integral vanishes: $c_{2k} = 0$.<br>
For odd $n = 1, 3, 5, \\dots$:
$$c_n = \\frac{4\\sqrt{6}}{(n\\pi)^2} (-1)^{(n-1)/2}$$
Specifically, $c_1 = \\frac{4\\sqrt{6}}{\\pi^2} \\approx 0.9927$, giving $P(E_1) = |c_1|^2 = \\frac{96}{\\pi^4} \\approx 98.55\\%$.</p>`,
    trap: 'Integrating without splitting at a/2, which produces an erroneous continuous derivative assumption.'
  },
  {
    id: 'q.qm1.m2.07',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.3',
    marks: 4,
    title: 'Relativistic Phase and Group Velocities',
    source: 'Griffiths 3e §2.4 Problem 2.20',
    prompt: `<p>For a relativistic free particle with energy $E = \\sqrt{p^2 c^2 + m^2 c^4}$ and de Broglie relations $E = \\hbar \\omega$ and $p = \\hbar k$:
(a) Determine the phase velocity $v_p = \\omega/k$.<br>
(b) Determine the group velocity $v_g = d\\omega/dk$.<br>
(c) Show that $v_p v_g = c^2$. Is the fact that $v_p > c$ a violation of special relativity?</p>`,
    tests: ['c.2.3.3'],
    approach: '<p>Express $\\omega(k) = \\sqrt{c^2 k^2 + (m c^2/\\hbar)^2}$, then calculate $\\omega/k$ and $d\\omega/dk$.</p>',
    solution: `<p><b>(a) Phase Velocity:</b><br>
$$\\omega(k) = \\frac{1}{\\hbar} \\sqrt{\\hbar^2 k^2 c^2 + m^2 c^4} = c \\sqrt{k^2 + \\left(\\frac{mc}{\\hbar}\\right)^2}$$
$$v_p = \\frac{\\omega}{k} = c \\sqrt{1 + \\left(\\frac{mc}{\\hbar k}\\right)^2} = \\frac{E}{p} = \\frac{\\gamma m c^2}{\\gamma m v} = \\frac{c^2}{v} > c$$
The phase velocity is strictly superluminal ($v_p > c$).</p>
<p><b>(b) Group Velocity:</b><br>
$$v_g = \\frac{d\\omega}{dk} = c \\frac{2k}{2\\sqrt{k^2 + (mc/\\hbar)^2}} = \\frac{c^2 k}{\\omega} = \\frac{c^2 (p/\\hbar)}{E/\\hbar} = \\frac{c^2 p}{E} = \\frac{c^2 (\\gamma m v)}{\\gamma m c^2} = v$$
The group velocity is precisely the physical particle speed $v < c$.</p>
<p><b>(c) Product and Relativity:</b><br>
$$v_p v_g = \\left(\\frac{c^2}{v}\\right)(v) = c^2$$
Having $v_p > c$ does <b>not</b> violate relativity because a continuous monochromatic phase wave carries zero information and cannot transmit a signal. Any physical message or energy is modulated into a wave packet, which travels at the group velocity $v_g = v < c$.</p>`,
    trap: 'Thinking superluminal phase velocity violates Einstein causation; only information/mass velocity (v_g) must obey v ≤ c.'
  },
  {
    id: 'q.qm1.m2.08',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.4',
    marks: 4,
    title: 'Probability Current for a Spherical Wave',
    source: 'Zettili 2e Chapter 3 Problem 3.6',
    prompt: `<p>Consider an outgoing spherical wave originating from a point source:
$$\\psi(r) = \\frac{A}{r} e^{ikr}$$
(a) Find the radial component of the probability current density $J_r$.<br>
(b) Calculate the total probability flux flowing outward through a sphere of radius $r$. Is it independent of $r$?</p>`,
    tests: ['c.2.4.2'],
    approach: '<p>Use the radial gradient $\\nabla_r = \\frac{\\partial}{\\partial r}$ in $J_r = \\frac{\\hbar}{m}\\text{Im}\\left(\\psi^* \\frac{\\partial \\psi}{\\partial r}\\right)$, then integrate over a sphere of area $4\\pi r^2$.</p>',
    solution: `<p><b>(a) Radial Probability Current:</b><br>
Compute the radial derivative:
$$\\frac{\\partial \\psi}{\\partial r} = A \\frac{d}{dr}\\left( \\frac{e^{ikr}}{r} \\right) = A \\left( \\frac{ik}{r} - \\frac{1}{r^2} \\right) e^{ikr}$$
Multiply by $\\psi^*(r) = \\frac{A^*}{r} e^{-ikr}$:
$$\\psi^* \\frac{\\partial \\psi}{\\partial r} = \\frac{|A|^2}{r^2} \\left( ik - \\frac{1}{r} \\right)$$
Taking the imaginary part:
$$\\text{Im}\\left( \\psi^* \\frac{\\partial \\psi}{\\partial r} \\right) = \\frac{k |A|^2}{r^2}$$
Therefore:
$$J_r = \\frac{\\hbar}{m} \\text{Im}\\left( \\psi^* \\frac{\\partial \\psi}{\\partial r} \\right) = \\frac{\\hbar k}{m} \\frac{|A|^2}{r^2}$$</p>
<p><b>(b) Total Outward Flux:</b><br>
Integrate over a sphere of radius $r$:
$$\\Phi = \\oint_{S} \\mathbf{J} \\cdot d\\mathbf{A} = J_r (4\\pi r^2) = \\left( \\frac{\\hbar k |A|^2}{m r^2} \\right) (4\\pi r^2) = \\frac{4\\pi \\hbar k |A|^2}{m}$$
The total flux is strictly <b>independent of radius $r$</b>. This confirms probability flux conservation: the total probability flowing outward through every concentric shell per second is invariant, explaining why amplitude must decay as $1/r$.</p>`,
    trap: 'Forgetting the -1/r² term when differentiating 1/r, even though it is purely real and drops out of the imaginary part.'
  },
  {
    id: 'q.qm1.m2.09',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.5',
    marks: 4,
    title: 'Potential Step Reflection and Transmission for E = 2V₀',
    source: 'Zettili 2e Chapter 4 Problem 4.1',
    prompt: `<p>A beam of particles of mass $m$ and energy $E = 2 V_0$ is incident from $x < 0$ on a potential step $V(x) = V_0 \\Theta(x)$.<br>
(a) Determine the ratio of wave numbers $k_2 / k_1$.<br>
(b) Calculate the reflection coefficient $R$ and transmission coefficient $T$, and verify that $R + T = 1$.</p>`,
    tests: ['c.2.5.1', 'c.2.5.2'],
    approach: '<p>Calculate $k_1 = \\sqrt{2mE}/\\hbar$ and $k_2 = \\sqrt{2m(E-V_0)}/\\hbar = \\sqrt{2m V_0}/\\hbar$, then evaluate $R = (k_1 - k_2)^2/(k_1 + k_2)^2$ and $T = 4k_1 k_2/(k_1 + k_2)^2$.</p>',
    solution: `<p><b>(a) Ratio of Wave Numbers:</b><br>
$$k_1 = \\frac{\\sqrt{2mE}}{\\hbar} = \\frac{\\sqrt{4m V_0}}{\\hbar} = \\frac{\\sqrt{2m V_0}}{\\hbar} \\sqrt{2}$$
$$k_2 = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar} = \\frac{\\sqrt{2m(2V_0 - V_0)}}{\\hbar} = \\frac{\\sqrt{2m V_0}}{\\hbar}$$
$$\\frac{k_2}{k_1} = \\frac{1}{\\sqrt{2}}$$</p>
<p><b>(b) Reflection and Transmission Coefficients:</b><br>
Divide numerator and denominator by $k_1$:
$$R = \\left( \\frac{1 - k_2/k_1}{1 + k_2/k_1} \\right)^2 = \\left( \\frac{1 - 1/\\sqrt{2}}{1 + 1/\\sqrt{2}} \\right)^2 = \\left( \\frac{\\sqrt{2} - 1}{\\sqrt{2} + 1} \\right)^2 = (\\sqrt{2} - 1)^4 \\approx (0.4142)^4 \\approx 0.02944 \\quad (2.94\\%)$$
$$T = \\frac{4(k_2/k_1)}{(1 + k_2/k_1)^2} = \\frac{4(1/\\sqrt{2})}{(1 + 1/\\sqrt{2})^2} = \\frac{4\\sqrt{2}}{(\\sqrt{2} + 1)^2} = 4\\sqrt{2}(\\sqrt{2} - 1)^2 = 4\\sqrt{2}(3 - 2\\sqrt{2}) = 12\\sqrt{2} - 16 \\approx 0.97056 \\quad (97.06\\%)$$
$$R + T = 0.02944 + 0.97056 = 1.00000$$
Even though the energy is double the barrier height, roughly $3\\%$ of the incident particles are reflected!</p>`,
    trap: 'Thinking T = |C/A|²; forgetting that T includes the velocity ratio k₂/k₁.'
  },
  {
    id: 'q.qm1.m2.10',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.5',
    marks: 4,
    title: 'Electron Penetration Depth for a Classically Forbidden Step',
    source: 'Zettili 2e Chapter 4 Problem 4.2',
    prompt: `<p>A beam of electrons with kinetic energy $E = 5.0\\text{ eV}$ is incident on a potential step of height $V_0 = 10.0\\text{ eV}$.<br>
(a) Find the attenuation constant $\\kappa$ in Region II.<br>
(b) Calculate the penetration depth $\\delta = 1/\\kappa$ in nanometers.<br>
(c) At what distance into the step does the probability density drop to $1\\%$ of its value at $x = 0$?</p>`,
    tests: ['c.2.5.3', 'c.2.5.4'],
    approach: '<p>Use $\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$ with $V_0 - E = 5\\text{ eV}$, $\\delta = 1/\\kappa$, and set $e^{-2\\kappa x} = 0.01$.</p>',
    solution: `<p><b>(a) Attenuation Constant $\\kappa$:</b><br>
$$V_0 - E = 10.0\\text{ eV} - 5.0\\text{ eV} = 5.0\\text{ eV} = 5.0 \\times 1.602 \\times 10^{-19}\\text{ J} = 8.01 \\times 10^{-19}\\text{ J}$$
$$\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar} = \\frac{\\sqrt{2(9.109 \\times 10^{-31}\\text{ kg})(8.01 \\times 10^{-19}\\text{ J})}}{1.055 \\times 10^{-34}\\text{ J}\\cdot\\text{s}} = \\frac{1.208 \\times 10^{-24}}{1.055 \\times 10^{-34}} \\approx 1.145 \\times 10^{10}\\text{ m}^{-1}$$</p>
<p><b>(b) Penetration Depth $\\delta$:</b><br>
$$\\delta = \\frac{1}{\\kappa} = \\frac{1}{1.145 \\times 10^{10}\\text{ m}^{-1}} \\approx 8.73 \\times 10^{-11}\\text{ m} = 0.0873\\text{ nm} = 0.873\\text{ \\AA}$$</p>
<p><b>(c) Distance for $1\\%$ Probability Density:</b><br>
$$|\\psi(x)|^2 = |\\psi(0)|^2 e^{-2\\kappa x} = 0.01 |\\psi(0)|^2 \\implies e^{-2\\kappa x} = 0.01$$
$$-2\\kappa x = \\ln(0.01) = -4.605 \\implies x = \\frac{4.605}{2\\kappa} = 2.303 \\, \\delta$$
$$x = 2.303 \\times 0.0873\\text{ nm} \\approx 0.201\\text{ nm} = 2.01\\text{ \\AA}$$
The wave function is virtually extinguished within two tenths of a nanometer (roughly one atomic diameter).</p>`,
    trap: 'Using e^{-κx} = 0.01 instead of e^{-2κx} = 0.01; probability density is the squared modulus.'
  },
  {
    id: 'q.qm1.m2.11',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.6',
    marks: 5,
    title: 'Electron Tunneling Probability Through a Nanoscale Barrier',
    source: 'Zettili 2e Chapter 4 Problem 4.5',
    prompt: `<p>An electron with energy $E = 2.0\\text{ eV}$ encounters a rectangular potential barrier of height $V_0 = 5.0\\text{ eV}$ and width $a = 0.3\\text{ nm}$.<br>
(a) Calculate the attenuation constant $\\kappa$ and the parameter $\\kappa a$.<br>
(b) Estimate the transmission probability $T$ using the wide-barrier approximation.</p>`,
    tests: ['c.2.6.2'],
    approach: '<p>Calculate $\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$, check $\\kappa a \\gg 1$, and apply $T \\approx 16\\frac{E}{V_0}(1 - \\frac{E}{V_0})e^{-2\\kappa a}$.</p>',
    solution: `<p><b>(a) Decay Constant $\\kappa$:</b><br>
$$V_0 - E = 5.0 - 2.0 = 3.0\\text{ eV} = 4.806 \\times 10^{-19}\\text{ J}$$
$$\\kappa = \\frac{\\sqrt{2(9.109 \\times 10^{-31})(4.806 \\times 10^{-19})}}{1.055 \\times 10^{-34}} = \\frac{9.358 \\times 10^{-25}}{1.055 \\times 10^{-34}} \\approx 8.87 \\times 10^9\\text{ m}^{-1}$$
$$\\kappa a = (8.87 \\times 10^9\\text{ m}^{-1})(0.3 \\times 10^{-9}\\text{ m}) \\approx 2.661$$
Since $\\kappa a > 2$, the wide-barrier approximation is valid.</p>
<p><b>(b) Transmission Probability $T$:</b><br>
$$T_0 = 16 \\frac{E}{V_0} \\left(1 - \\frac{E}{V_0}\\right) = 16 \\left(\\frac{2}{5}\\right) \\left(1 - \\frac{2}{5}\\right) = 16 \\times 0.4 \\times 0.6 = 3.84$$
The exponential attenuation factor is:
$$e^{-2\\kappa a} = e^{-2(2.661)} = e^{-5.322} \\approx 4.88 \\times 10^{-3}$$
Therefore:
$$T \\approx T_0 e^{-2\\kappa a} = 3.84 \\times 4.88 \\times 10^{-3} \\approx 1.87 \\times 10^{-2} \\quad (1.87\\%)$$
Approximately $1.9\\%$ of the electrons tunnel successfully through the $0.3\\text{ nm}$ barrier.</p>`,
    trap: 'Neglecting the prefactor T₀; although the exponential dominates, T₀ = 3.84 introduces a factor of nearly 4.'
  },
  {
    id: 'q.qm1.m2.12',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.6',
    marks: 4,
    title: 'Ramsauer–Townsend Resonant Transmission Energy',
    source: 'Zettili 2e Chapter 4 Problem 4.6',
    prompt: `<p>A beam of electrons is incident on a potential barrier of height $V_0 = 12.0\\text{ eV}$ and width $a = 0.20\\text{ nm}$. Find the minimum energy $E > V_0$ for which the barrier becomes completely transparent ($T = 1$).</p>`,
    tests: ['c.2.6.4'],
    approach: '<p>The resonance condition is $k_2 a = n\\pi$. The minimum non-trivial energy corresponds to $n = 1$.</p>',
    solution: `<p><b>Resonance Condition:</b><br>
Transmission is $100\\%$ ($T = 1$) when $\\sin(k_2 a) = 0$, which occurs for:
$$k_2 a = n\\pi \\qquad (n = 1, 2, 3, \\dots)$$
where $k_2 = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar}$.<br>
Squaring both sides:
$$\\frac{2m(E - V_0)}{\\hbar^2} a^2 = n^2 \\pi^2 \\implies E_n = V_0 + \\frac{n^2 \\pi^2 \\hbar^2}{2m a^2}$$
For minimum energy above $V_0$, select $n = 1$:
$$E_1 = V_0 + \\frac{\\pi^2 \\hbar^2}{2m a^2}$$
Compute the energy quantum:
$$\\frac{\\pi^2 \\hbar^2}{2m a^2} = \\frac{\\pi^2 (1.055 \\times 10^{-34})^2}{2(9.109 \\times 10^{-31})(0.20 \\times 10^{-9})^2} = \\frac{1.099 \\times 10^{-67}}{7.287 \\times 10^{-49}} = 1.508 \\times 10^{-19}\\text{ J} \\approx 0.941\\text{ eV}$$
Therefore:
$$E = 12.0\\text{ eV} + 0.941\\text{ eV} = 12.941\\text{ eV}$$
At an incident energy of $12.94\\text{ eV}$, reflection is completely quenched and transmission is $100\\%$.</p>`,
    trap: 'Setting n = 0; n = 0 would mean E = V₀ where k₂ = 0, which yields finite reflection rather than a transmission peak.'
  },
  {
    id: 'q.qm1.m2.13',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.1',
    marks: 4,
    title: 'Time Evolution of Momentum in a Non-Stationary State',
    source: 'Griffiths 3e §2.1 Problem 2.7',
    prompt: `<p>Prove that for a general non-stationary wave function $\\Psi(x,t) = \\sum c_n \\psi_n(x) e^{-iE_n t/\\hbar}$, the expectation value of momentum can be written as:
$$\\langle p \\rangle(t) = \\sum_{m > n} 2 \\, \\text{Re}[c_m^* c_n e^{i(E_m - E_n)t/\\hbar} p_{mn}]$$
where $p_{mn} = \\int \\psi_m^* \\hat{p} \\psi_n dx$. Deduce why $\\langle p \\rangle$ is necessarily zero in any stationary state.</p>`,
    tests: ['c.2.1.2', 'c.2.1.4'],
    approach: '<p>Expand $\\langle p \\rangle = \\int \\Psi^* \\hat{p} \\Psi dx$ using the double sum and separate diagonal ($m=n$) from off-diagonal ($m \\ne n$) terms.</p>',
    solution: `<p><b>Double Sum Expansion:</b><br>
$$\\langle p \\rangle(t) = \\int \\left( \\sum_m c_m^* \\psi_m^* e^{iE_m t/\\hbar} \\right) \\hat{p} \\left( \\sum_n c_n \\psi_n e^{-iE_n t/\\hbar} \\right) dx$$
$$\\langle p \\rangle(t) = \\sum_{m} \\sum_n c_m^* c_n e^{i(E_m - E_n)t/\\hbar} \\int \\psi_m^* \\hat{p} \\psi_n dx = \\sum_m \\sum_n c_m^* c_n e^{i(E_m - E_n)t/\\hbar} p_{mn}$$
<b>Diagonal Terms ($m = n$):</b><br>
For a real bound state eigenfunction $\\psi_n(x) \\in \\mathbb{R}$:
$$p_{nn} = \\int \\psi_n \\left(-i\\hbar \\frac{d\\psi_n}{dx}\\right) dx = -i\\hbar \\int \\psi_n d\\psi_n = -\\frac{i\\hbar}{2} [\\psi_n^2]_{-\\infty}^\\infty = 0$$
Since all diagonal matrix elements $p_{nn} = 0$, in a pure stationary state $\\langle p \\rangle = 0$.<br>
<b>Off-Diagonal Terms:</b><br>
Combining conjugate pairs $(m, n)$ and $(n, m)$ using $p_{nm} = p_{mn}^*$ (since $\\hat{p}$ is Hermitian):
$$\\langle p \\rangle(t) = \\sum_{m > n} 2 \\, \\text{Re}\\left[ c_m^* c_n e^{i(E_m - E_n)t/\\hbar} p_{mn} \\right]$$
Motion requires interference between states of different energies.</p>`,
    trap: 'Assuming diagonal matrix elements p_nn can be non-zero for bound states; p_nn is identically zero for all real bound states.'
  },
  {
    id: 'q.qm1.m2.14',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.2',
    marks: 4,
    title: 'Probability in the Middle Half of an Infinite Well',
    source: 'Griffiths 3e §2.2 Problem 2.8',
    prompt: `<p>A particle is in the ground state of an infinite square well of width $a$ ($0 \\le x \\le a$). What is the probability of finding the particle in the middle half of the well ($a/4 \\le x \\le 3a/4$)? Compare this with the classical prediction.</p>`,
    tests: ['c.2.2.2'],
    approach: '<p>Integrate $|\\psi_1(x)|^2 = \\frac{2}{a}\\sin^2(\\pi x/a)$ from $a/4$ to $3a/4$.</p>',
    solution: `<p><b>Quantum Probability:</b><br>
$$P = \\int_{a/4}^{3a/4} |\\psi_1(x)|^2 dx = \\frac{2}{a} \\int_{a/4}^{3a/4} \\sin^2\\left(\\frac{\\pi x}{a}\\right) dx$$
Using $\\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$:
$$P = \\frac{1}{a} \\int_{a/4}^{3a/4} \\left[ 1 - \\cos\\left(\\frac{2\\pi x}{a}\\right) \\right] dx = \\frac{1}{a} \\left[ x - \\frac{a}{2\\pi}\\sin\\left(\\frac{2\\pi x}{a}\\right) \\right]_{a/4}^{3a/4}$$
Evaluate the limits:
$$P = \\frac{1}{a} \\left[ \\left(\\frac{3a}{4} - \\frac{a}{4}\\right) - \\frac{a}{2\\pi}\\left( \\sin\\frac{3\\pi}{2} - \\sin\\frac{\\pi}{2} \\right) \\right] = \\frac{1}{2} - \\frac{1}{2\\pi}(-1 - 1) = \\frac{1}{2} + \\frac{1}{\\pi}$$
$$P = 0.5 + \\frac{1}{3.14159} \\approx 0.5 + 0.3183 = 0.8183 \\quad (81.83\\%)$$
<b>Classical Comparison:</b><br>
A classical particle bounces between the walls with constant speed, so its probability density is uniform: $\\rho_{\\text{cl}} = 1/a$.<br>
The classical probability in the middle half is simply $\\frac{3a/4 - a/4}{a} = \\frac{1}{2} = 50\\%$.<br>
In the quantum ground state, the particle is significantly more concentrated near the center ($81.8\\%$ vs $50\\%$) because of the single antinode of $\\psi_1(x)$.</p>`,
    trap: 'Assuming classical and quantum probabilities match for the ground state; the correspondence principle only holds for n ≫ 1.'
  },
  {
    id: 'q.qm1.m2.15',
    course: 'qm1',
    module: 'qm1.m2',
    sec: '2.6',
    marks: 4,
    title: 'Cold Emission of Electrons from Metals (Field Emission)',
    source: 'Zettili 2e Chapter 4 Problem 4.7',
    prompt: `<p>When a strong external electric field $\\mathcal{E}$ is applied to a metal surface, the potential barrier seen by electrons near the Fermi energy $E_F$ is deformed into a triangular barrier:
$$V(x) = V_0 - e \\mathcal{E} x \\qquad (x > 0)$$
where the work function is $\\Phi = V_0 - E_F$.
Explain using qualitative WKB/tunneling arguments how field emission (cold cathode emission) occurs, and identify why the emission current depends on the electric field as $I \\propto e^{-C/\\mathcal{E}}$ (the Fowler–Nordheim law).</p>`,
    tests: ['c.2.6.2', 'c.2.6.3'],
    approach: '<p>The classical turning point is $x_0 = \\Phi/(e\\mathcal{E})$. The barrier width is directly inversely proportional to the electric field $\\mathcal{E}$, making the tunneling exponent $\\kappa x_0 \\propto 1/\\mathcal{E}$.</p>',
    solution: `<p><b>(a) Barrier Geometry:</b><br>
Inside the metal ($x < 0$), electrons fill states up to the Fermi energy $E_F$. Without an external field, electrons face a step barrier of height $V_0 = E_F + \\Phi$. Because $\\Phi \\sim 4-5\\text{ eV}$ and the barrier extends to $\\infty$, zero tunneling occurs at room temperature.</p>
<p>When an intense electric field $\\mathcal{E} \\sim 10^9\\text{ V/m}$ is applied, the potential slopes downward:
$$V(x) = E_F + \\Phi - e \\mathcal{E} x$$
The barrier is now finite in width! An electron at $E_F$ encounters a classically forbidden region spanning from $x = 0$ to the classical turning point $x_0$ where $V(x_0) = E_F$:
$$E_F + \\Phi - e \\mathcal{E} x_0 = E_F \\implies x_0 = \\frac{\\Phi}{e \\mathcal{E}}$$
Notice that the barrier thickness $x_0$ is <b>inversely proportional</b> to the electric field $\\mathcal{E}$.</p>
<p><b>(b) Fowler–Nordheim Tunneling Current:</b><br>
The tunneling transmission coefficient depends exponentially on the barrier area:
$$T \\approx \\exp\\left( -2 \\int_0^{x_0} \\kappa(x) dx \\right) \\propto \\exp\\left( -\\frac{4\\sqrt{2m}\\Phi^{3/2}}{3e\\hbar\\mathcal{E}} \\right)$$
Hence, the field emission current follows the <b>Fowler–Nordheim formula</b>:
$$I = C_1 \\mathcal{E}^2 \\exp\\left( -\\frac{C_2}{\\mathcal{E}} \\right)$$
Because $\\mathcal{E}$ is in the denominator of the exponent, increasing the electric field drastically narrows the barrier, triggering a massive avalanche of field-emitted electrons without needing to heat the metal.</p>`,
    trap: 'Confusing cold field emission with thermionic emission (Richardson-Dushman law, which requires high temperatures T).'
  }
);

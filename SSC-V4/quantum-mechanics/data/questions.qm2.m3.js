/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module III: Approximation Methods
   Worked Problems & Step-by-Step Proof Exercises (QUESTIONS)
   Textbooks: David J. Griffiths 3e (Chapters 7, 8, 9) & Nouredine Zettili 2e (Chapters 8, 9)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'w.7.1.1', sec: '7.1', marks: 5,
    title: 'Delta-Function Perturbation at the Center of an Infinite Square Well',
    tests: ['c.7.1.1'],
    prompt: `<p>A particle of mass $m$ is confined to an infinite square well of width $a$ ($0 \\le x \\le a$). A perturbation is added at the center:
$$\\hat{H}' = \\alpha \\, \\delta\\left( x - \\frac{a}{2} \\right)$$
where $\\alpha$ is a constant.
<ol>
  <li>Calculate the first-order energy correction $E_n^{(1)}$ for all stationary states $n = 1, 2, 3, \\dots$.</li>
  <li>Explain physically why the correction vanishes for even values of $n$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: First-Order Energy Correction.</b><br>
The unperturbed wavefunctions are $\\psi_n^{(0)}(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right)$.<br>
The first-order energy correction is:
$$E_n^{(1)} = \\langle \\psi_n^{(0)} | \\hat{H}' | \\psi_n^{(0)} \\rangle = \\int_0^a \\left[ \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right) \\right]^2 \\alpha \\, \\delta\\left( x - \\frac{a}{2} \\right) dx$$
$$= \\frac{2\\alpha}{a} \\sin^2\\left( \\frac{n\\pi}{2} \\right)$$
- If $n$ is even ($n = 2, 4, 6, \\dots$): $\\sin(n\\pi/2) = 0 \\implies \\boxed{E_n^{(1)} = 0}$.
- If $n$ is odd ($n = 1, 3, 5, \\dots$): $\\sin^2(n\\pi/2) = (\\pm 1)^2 = 1 \\implies \\boxed{E_n^{(1)} = \\frac{2\\alpha}{a}}$.<br>
<b>Part 2: Physical Explanation.</b><br>
Even-$n$ states have a node at the center of the well: $\\psi_n^{(0)}(a/2) = 0$. Because the probability density at $x = a/2$ is identically zero, the electron never interacts with the localized delta-function spike! Odd-$n$ states have an antinode (maximum probability density) at the center, so they experience the full shift $\\frac{2\\alpha}{a}$.</p>`,
    tested: 'First-order perturbation theory with Dirac delta potentials and wave function symmetry.',
    trap: 'Forgetting that sin²(nπ/2) = 1 for ALL odd n, regardless of whether n = 1 (sin = +1) or n = 3 (sin = -1).'
  },
  {
    id: 'w.7.1.2', sec: '7.1', marks: 5,
    title: 'Quartic Anharmonic Perturbation to the Harmonic Oscillator',
    tests: ['c.7.1.1', 'c.4.1.2'],
    prompt: `<p>A 1D quantum harmonic oscillator is perturbed by a small quartic term:
$$\\hat{H}' = \\lambda \\hat{x}^4$$
Using ladder operators $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$, calculate the first-order energy correction $E_n^{(1)}$ for the state $|n\\rangle$.</p>`,
    solution: `<p><b>Step 1: Express $\\hat{x}^4$ in Terms of Ladder Operators.</b><br>
$$\\hat{x}^4 = \\left( \\frac{\\hbar}{2m\\omega} \\right)^2 (\\hat{a} + \\hat{a}^\\dagger)^4$$
We need the diagonal matrix element $\\langle n | (\\hat{a} + \\hat{a}^\\dagger)^4 | n \\rangle$.<br>
Only terms with an equal number of creation and annihilation operators ($2$ of $\\hat{a}$ and $2$ of $\\hat{a}^\\dagger$) have non-zero diagonal expectation values.<br>
<b>Step 2: Enumerate the 6 Non-Vanishing Permutations.</b><br>
- $\\hat{a}\\hat{a}\\hat{a}^\\dagger\\hat{a}^\\dagger|n\\rangle = (n+1)(n+2)|n\\rangle$
- $\\hat{a}\\hat{a}^\\dagger\\hat{a}\\hat{a}^\\dagger|n\\rangle = (n+1)^2|n\\rangle$
- $\\hat{a}\\hat{a}^\\dagger\\hat{a}^\\dagger\\hat{a}|n\\rangle = n(n+1)|n\\rangle$
- $\\hat{a}^\\dagger\\hat{a}\\hat{a}\\hat{a}^\\dagger|n\\rangle = n(n+1)|n\\rangle$
- $\\hat{a}^\\dagger\\hat{a}\\hat{a}^\\dagger\\hat{a}|n\\rangle = n^2|n\\rangle$
- $\\hat{a}^\\dagger\\hat{a}^\\dagger\\hat{a}\\hat{a}|n\\rangle = n(n-1)|n\\rangle$<br>
Summing these 6 matrix elements:
$$(n+1)(n+2) + (n+1)^2 + 2n(n+1) + n^2 + n(n-1)$$
$$= (n^2+3n+2) + (n^2+2n+1) + (2n^2+2n) + n^2 + (n^2-n) = 6n^2 + 6n + 3 = 3(2n^2 + 2n + 1)$$
<b>Step 3: First-Order Energy Correction.</b><br>
$$\\boxed{E_n^{(1)} = \\lambda \\left( \\frac{\\hbar}{2m\\omega} \\right)^2 3(2n^2 + 2n + 1) = \\frac{3\\lambda\\hbar^2}{4m^2\\omega^2}(2n^2 + 2n + 1)}$$
For the ground state ($n=0$): $E_0^{(1)} = \\frac{3\\lambda\\hbar^2}{4m^2\\omega^2}$.</p>`,
    tested: 'Ladder operator techniques for polynomial perturbations of the quantum harmonic oscillator.',
    trap: 'Direct spatial integration of Hermite polynomials, which is tedious and prone to algebraic errors compared to operator algebra.'
  },
  {
    id: 'w.7.2.1', sec: '7.2', marks: 5,
    title: 'Linear Stark Effect in the n = 2 Excited State of Hydrogen',
    tests: ['c.7.2.4'],
    prompt: `<p>Consider the four degenerate states of the $n=2$ level of hydrogen: $|2s\\rangle, |2p_0\\rangle, |2p_1\\rangle, |2p_{-1}\\rangle$. An external electric field is applied along the $z$-axis, giving perturbation $\\hat{H}' = e\\mathcal{E}z$.
<ol>
  <li>Explain why only the matrix element $\\langle 2s | e\\mathcal{E}z | 2p_0 \\rangle$ is non-zero.</li>
  <li>Given that $\\langle 2s | z | 2p_0 \\rangle = -3a_0$, construct the $4 \\times 4$ secular matrix and determine the energy shifts of all four states.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Selection Rules.</b><br>
1. Parity selection rule: $z$ is an odd parity operator. Therefore, $\\langle 2s | z | 2s \\rangle = \\langle 2p_m | z | 2p_{m'} \\rangle = 0$. Diagonal elements vanish identically.<br>
2. Azimuthal selection rule: $z = r\\cos\\theta$ has no $\\phi$-dependence, so $[\\hat{L}_z, z] = 0$. Matrix elements vanish unless $\\Delta m = 0$. Since $|2s\\rangle$ has $m=0$, it can only couple to $|2p_0\\rangle$ ($m=0$). States $|2p_1\\rangle$ and $|2p_{-1}\\rangle$ cannot couple to any other state.<br>
<b>Part 2: Secular Matrix & Energy Shifts.</b><br>
Letting $\\Delta = -3e\\mathcal{E}a_0$:
In the basis $\{|2s\\rangle, |2p_0\\rangle, |2p_1\\rangle, |2p_{-1}\\rangle\}$, the secular matrix is:
$$W = \\begin{pmatrix} 0 & \\Delta & 0 & 0 \\\\ \\Delta & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 \\end{pmatrix}$$
The eigenvalues of the $2 \\times 2$ sub-block are:
$$\\det\\begin{pmatrix} -E^{(1)} & \\Delta \\\\ \\Delta & -E^{(1)} \\end{pmatrix} = (E^{(1)})^2 - \\Delta^2 = 0 \\implies E^{(1)} = \\pm \\Delta = \\pm 3e\\mathcal{E}a_0$$
The remaining two states have eigenvalue $0$.<br>
<b>Resulting Energy Spectrum:</b>
<ul>
  <li>$E = E_2^{(0)} + 3e\\mathcal{E}a_0$ (State $\\frac{|2s\\rangle - |2p_0\\rangle}{\\sqrt{2}}$)</li>
  <li>$E = E_2^{(0)} - 3e\\mathcal{E}a_0$ (State $\\frac{|2s\\rangle + |2p_0\\rangle}{\\sqrt{2}}$)</li>
  <li>$E = E_2^{(0)}$ (Two unshifted degenerate states $|2p_1\\rangle$ and $|2p_{-1}\\rangle$)</li>
</ul></p>`,
    tested: 'Degenerate perturbation theory secular matrix and selection rules for electric dipole transitions.',
    trap: 'Assuming all 4 states split; magnetic substates m = ±1 are completely unaffected by a field along z to first order.'
  },
  {
    id: 'w.7.3.1', sec: '7.3', marks: 5,
    title: 'Variational Method for 1D Harmonic Oscillator with a Lorentzian Trial Function',
    tests: ['c.7.3.1'],
    prompt: `<p>Estimate the ground state energy of a 1D harmonic oscillator $\\hat{H} = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + \\frac{1}{2}m\\omega^2 x^2$ using the rational trial wavefunction:
$$\\psi(x) = \\frac{1}{x^2 + b^2}$$
where $b > 0$ is a variational parameter. (Given: $\\int_{-\\infty}^\\infty \\frac{dx}{(x^2+b^2)^2} = \\frac{\\pi}{2b^3}$, $\\int_{-\\infty}^\\infty \\frac{x^2 dx}{(x^2+b^2)^4} = \\frac{\\pi}{16b^5}$, $\\int_{-\\infty}^\\infty \\frac{x^2 dx}{(x^2+b^2)^2} = \\frac{\\pi}{2b}$).</p>`,
    solution: `<p><b>Step 1: Compute the Kinetic Energy Expectation Value $\\langle T \\rangle$.</b><br>
Using integration by parts: $\\langle \\psi | -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} | \\psi \\rangle = \\frac{\\hbar^2}{2m}\\int_{-\\infty}^\\infty \\left( \\frac{d\\psi}{dx} \\right)^2 dx$.<br>
Since $\\frac{d\\psi}{dx} = -\\frac{2x}{(x^2+b^2)^2}$:
$$\\int_{-\\infty}^\\infty \\left(\\frac{d\\psi}{dx}\\right)^2 dx = 4 \\int_{-\\infty}^\\infty \\frac{x^2}{(x^2+b^2)^4} dx = 4 \\left( \\frac{\\pi}{16b^5} \\right) = \\frac{\\pi}{4b^5}$$
$$\\langle T \\rangle = \\frac{\\frac{\\hbar^2}{2m} \\frac{\\pi}{4b^5}}{\\frac{\\pi}{2b^3}} = \\frac{\\hbar^2}{4mb^2}$$
<b>Step 2: Compute the Potential Energy Expectation Value $\\langle V \\rangle$.</b><br>
$$\\int_{-\\infty}^\\infty x^2 [\\psi(x)]^2 dx = \\int_{-\\infty}^\\infty \\frac{x^2}{(x^2+b^2)^2} dx = \\frac{\\pi}{2b}$$
$$\\langle V \\rangle = \\frac{\\frac{1}{2}m\\omega^2 \\frac{\\pi}{2b}}{\\frac{\\pi}{2b^3}} = \\frac{1}{2}m\\omega^2 b^2$$
<b>Step 3: Total Energy and Minimization.</b><br>
$$\\langle H \\rangle(b) = \\frac{\\hbar^2}{4mb^2} + \\frac{1}{2}m\\omega^2 b^2$$
Minimize with respect to $b^2$:
$$\\frac{d\\langle H \\rangle}{d(b^2)} = -\\frac{\\hbar^2}{4m(b^2)^2} + \\frac{1}{2}m\\omega^2 = 0 \\implies (b^2)^2 = \\frac{\\hbar^2}{2m^2\\omega^2} \\implies b^2 = \\frac{\\hbar}{\\sqrt{2}m\\omega}$$
Substitute $b^2$ back into $\\langle H \\rangle$:
$$\\langle H \\rangle_{\\text{min}} = \\frac{\\hbar^2}{4m}\\frac{\\sqrt{2}m\\omega}{\\hbar} + \\frac{1}{2}m\\omega^2 \\frac{\\hbar}{\\sqrt{2}m\\omega} = \\frac{\\sqrt{2}}{4}\\hbar\\omega + \\frac{1}{2\\sqrt{2}}\\hbar\\omega = \\frac{\\sqrt{2}}{2}\\hbar\\omega = \\boxed{\\frac{1}{\\sqrt{2}}\\hbar\\omega \\approx 0.707 \\, \\hbar\\omega}$$
<b>Comparison:</b> The exact ground state energy is $E_0 = 0.500 \\, \\hbar\\omega$.<br>
Notice $0.707\\hbar\\omega > 0.500\\hbar\\omega$, verifying the strict upper bound theorem!</p>`,
    tested: 'Variational principle execution with non-Gaussian trial functions and kinetic energy integration by parts.',
    trap: 'Thinking the variational energy can match 0.5 ħω. Only the exact Gaussian trial function achieves the exact value.'
  },
  {
    id: 'w.7.4.1', sec: '7.4', marks: 5,
    title: 'WKB Quantization of the Quantum Bouncer (Linear Gravity Potential)',
    tests: ['c.7.4.3'],
    prompt: `<p>A particle of mass $m$ bounces vertically in a uniform gravitational field above an impenetrable floor:
$$V(x) = \\begin{cases} mgx & x > 0 \\\\ \\infty & x \\le 0 \\end{cases}$$
Use the WKB approximation with the appropriate connection condition for a vertical rigid wall to estimate the quantized energy levels $E_n$.</p>`,
    solution: `<p><b>Step 1: Classical Turning Points.</b><br>
At $x = 0$, there is a rigid vertical wall ($V = \\infty$).<br>
At $x = x_2$, the classical turning point is $mg x_2 = E \\implies x_2 = \\frac{E}{mg}$.<br>
The classical momentum for $0 < x < x_2$ is:
$$p(x) = \\sqrt{2m(E - mgx)}$$
<b>Step 2: WKB Quantization Condition with One Vertical Wall.</b><br>
Because the boundary at $x=0$ is a rigid vertical wall while $x_2$ is a smooth slope, the phase parameter is $\\gamma = 1/4$:
$$\\int_0^{x_2} p(x) dx = \\left( n - \\frac{1}{4} \\right) \\pi \\hbar, \\qquad n = 1, 2, 3, \\dots$$
<b>Step 3: Evaluate the Integral.</b><br>
$$\\int_0^{E/mg} \\sqrt{2m(E - mgx)} \\, dx = \\sqrt{2m} \\left[ -\\frac{2}{3mg} (E - mgx)^{3/2} \\right]_0^{E/mg} = \\frac{2\\sqrt{2m}}{3mg} E^{3/2} = \\frac{2\\sqrt{2}}{3g\\sqrt{m}} E^{3/2}$$
<b>Step 4: Solve for $E_n$.</b><br>
$$\\frac{2\\sqrt{2}}{3g\\sqrt{m}} E_n^{3/2} = \\left( n - \\frac{1}{4} \\right) \\pi \\hbar$$
$$E_n^{3/2} = \\frac{3}{2\\sqrt{2}} \\left( n - \\frac{1}{4} \\right) \\pi \\hbar g \\sqrt{m}$$
$$\\boxed{E_n = \\left[ \\frac{9\\pi^2}{8} \\left( n - \\frac{1}{4} \\right)^2 \\hbar^2 m g^2 \\right]^{1/3} = \\left[ \\frac{3\\pi}{2\\sqrt{2}} \\left( n - \\frac{1}{4} \\right) \\right]^{2/3} \\left( \\frac{\\hbar^2 m g^2}{2} \\right)^{1/3}}$$
For $n=1$, this gives $E_1 \\approx 2.338 \\left( \\frac{1}{2}m g^2 \\hbar^2 \\right)^{1/3}$, matching the exact first zero of the Airy function within $0.8\\%$!</p>`,
    tested: 'WKB quantization for triangular / linear potential wells with rigid boundary wall.',
    trap: 'Using (n - 1/2) instead of (n - 1/4). A vertical wall forces the phase shift to be (n - 1/4).'
  }
);

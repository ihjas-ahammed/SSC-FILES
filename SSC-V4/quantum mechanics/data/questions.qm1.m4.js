/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module IV — Written Exercises (Zettili 2e & Griffiths 3e)
   Total Questions: 13 (worked step-by-step solutions)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'q.qm1.m4.01',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 4,
    title: 'Algebraic Derivation of Ladder Commutator and Hamiltonian Factorization',
    source: 'Griffiths 3e §2.3.1 & Zettili 2e §4.8.1',
    prompt: `<p>Using the definitions of the annihilation and creation operators:
$$\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i}{\\sqrt{2m\\hbar\\omega}}\\hat{p}, \\qquad \\hat{a}^\\dagger = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} - \\frac{i}{\\sqrt{2m\\hbar\\omega}}\\hat{p}$$
(a) Show that $[\\hat{a}, \\hat{a}^\\dagger] = 1$ using only the canonical commutation relation $[\\hat{x}, \\hat{p}] = i\\hbar$.<br>
(b) Express the product $\\hat{a}\\hat{a}^\\dagger$ in terms of the Hamiltonian $\\hat{H}$, and show that $\\hat{H} = \\frac{1}{2}\\hbar\\omega(\\hat{a}\\hat{a}^\\dagger + \\hat{a}^\\dagger\\hat{a})$.</p>`,
    tests: ['c.4.1.2'],
    approach: '<p>Expand the commutators and operator products using linearity and [x, p] = iħ. Rearrange cross terms to isolate the Hamiltonian.</p>',
    solution: `<p><b>(a) Evaluation of $[\\hat{a}, \\hat{a}^\\dagger]$:</b><br>
Substitute the definitions into the commutator:
$$[\\hat{a}, \\hat{a}^\\dagger] = \\left[ \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i\\hat{p}}{\\sqrt{2m\\hbar\\omega}}, \\; \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} - \\frac{i\\hat{p}}{\\sqrt{2m\\hbar\\omega}} \\right]$$
Using distributivity and noting that $[\\hat{x}, \\hat{x}] = [\\hat{p}, \\hat{p}] = 0$:
$$[\\hat{a}, \\hat{a}^\\dagger] = -\\frac{i}{2\\hbar} [\\hat{x}, \\hat{p}] + \\frac{i}{2\\hbar} [\\hat{p}, \\hat{x}]$$
Since $[\\hat{p}, \\hat{x}] = -[\\hat{x}, \\hat{p}] = -i\\hbar$:
$$[\\hat{a}, \\hat{a}^\\dagger] = -\\frac{i}{2\\hbar}(i\\hbar) + \\frac{i}{2\\hbar}(-i\\hbar) = -\\frac{i^2}{2} - \\frac{i^2}{2} = \\frac{1}{2} + \\frac{1}{2} = 1$$
Thus:
$$\\boxed{[\\hat{a}, \\hat{a}^\\dagger] = 1}$$</p>

<p><b>(b) Operator Products and Symmetrized Hamiltonian:</b><br>
Multiply the two operators in both orders:
$$\\hat{a}^\\dagger \\hat{a} = \\frac{m\\omega}{2\\hbar}\\hat{x}^2 + \\frac{\\hat{p}^2}{2m\\hbar\\omega} - \\frac{i}{2\\hbar}[\\hat{x}, \\hat{p}] = \\frac{\\hat{H}}{\\hbar\\omega} - \\frac{1}{2}$$
$$\\hat{a} \\hat{a}^\\dagger = \\frac{m\\omega}{2\\hbar}\\hat{x}^2 + \\frac{\\hat{p}^2}{2m\\hbar\\omega} + \\frac{i}{2\\hbar}[\\hat{x}, \\hat{p}] = \\frac{\\hat{H}}{\\hbar\\omega} + \\frac{1}{2}$$
From the second equation, we have directly:
$$\\hat{a}\\hat{a}^\\dagger = \\frac{\\hat{H}}{\\hbar\\omega} + \\frac{1}{2} \\implies \\hat{H} = \\hbar\\omega\\left(\\hat{a}\\hat{a}^\\dagger - \\frac{1}{2}\\right)$$
Adding the two equations together:
$$\\hat{a}^\\dagger \\hat{a} + \\hat{a} \\hat{a}^\\dagger = \\frac{2\\hat{H}}{\\hbar\\omega}$$
Multiplying by $\\frac{1}{2}\\hbar\\omega$:
$$\\boxed{\\hat{H} = \\frac{1}{2}\\hbar\\omega(\\hat{a}\\hat{a}^\\dagger + \\hat{a}^\\dagger\\hat{a})}$$
This exhibits the manifest Hermiticity and symmetry of the Hamiltonian.</p>`,
    trap: 'Treating a and a† as commuting numbers; swapping their order changes a plus sign to a minus sign in the zero-point energy.'
  },
  {
    id: 'q.qm1.m4.02',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 4,
    title: 'Derivation and Normalization of the Ground State Wave Function',
    source: 'Zettili 2e §4.8.2 & Griffiths 3e §2.3.1',
    prompt: `<p>The ground state $|0\\rangle$ of the harmonic oscillator satisfies the condition $\\hat{a}|0\\rangle = 0$.<br>
(a) Write this condition as a first-order differential equation for the spatial wave function $\\psi_0(x) = \\langle x|0\\rangle$.<br>
(b) Solve the differential equation and normalize $\\psi_0(x)$ using the standard Gaussian integral $\\int_{-\\infty}^\\infty e^{-\\alpha x^2} dx = \\sqrt{\\frac{\\pi}{\\alpha}}$.</p>`,
    tests: ['c.4.1.4'],
    approach: '<p>Substitute p = -iħ d/dx into the annihilation operator, separate variables, integrate to get a Gaussian, and normalize by squaring and integrating over all space.</p>',
    solution: `<p><b>(a) First-Order Differential Equation:</b><br>
Project $\\hat{a}|0\\rangle = 0$ onto coordinate space:
$$\\langle x | \\hat{a} | 0 \\rangle = 0$$
Substitute the definition of $\\hat{a}$:
$$\\left( \\sqrt{\\frac{m\\omega}{2\\hbar}}x + \\frac{i}{\\sqrt{2m\\hbar\\omega}}\\left(-i\\hbar \\frac{d}{dx}\\right) \\right) \\psi_0(x) = 0$$
Since $i(-i) = 1$:
$$\\frac{1}{\\sqrt{2m\\hbar\\omega}} \\left( m\\omega x + \\hbar \\frac{d}{dx} \\right) \\psi_0(x) = 0$$
Multiplying by $\\frac{\\sqrt{2m\\hbar\\omega}}{\\hbar}$:
$$\\boxed{\\frac{d\\psi_0}{dx} + \\frac{m\\omega}{\\hbar}x \\psi_0(x) = 0}$$</p>

<p><b>(b) Solution and Normalization:</b><br>
Separate variables:
$$\\frac{d\\psi_0}{\\psi_0} = -\\frac{m\\omega}{\\hbar}x \\, dx$$
Integrating both sides:
$$\\ln\\psi_0(x) = -\\frac{m\\omega}{2\\hbar}x^2 + C \\implies \\psi_0(x) = A \\exp\\left(-\\frac{m\\omega}{2\\hbar}x^2\\right)$$
To find the normalization constant $A$, impose $\\int_{-\\infty}^\\infty |\\psi_0(x)|^2 dx = 1$:
$$|A|^2 \\int_{-\\infty}^\\infty \\exp\\left(-\\frac{m\\omega}{\\hbar}x^2\\right) dx = 1$$
Using the Gaussian integral $\\int_{-\\infty}^\\infty e^{-\\alpha x^2} dx = \\sqrt{\\frac{\\pi}{\\alpha}}$ with $\\alpha = \\frac{m\\omega}{\\hbar}$:
$$|A|^2 \\sqrt{\\frac{\\pi\\hbar}{m\\omega}} = 1 \\implies |A|^2 = \\sqrt{\\frac{m\\omega}{\\pi\\hbar}} \\implies A = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}$$
Choosing the phase to be real and positive:
$$\\boxed{\\psi_0(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4} e^{-\\frac{m\\omega}{2\\hbar}x^2}}$$
The ground state is a normalized Gaussian centered at $x=0$.</p>`,
    trap: 'Leaving the normalization exponent as 1/2 instead of 1/4; squaring the prefactor gives √(mω/πħ) which has dimensions of 1/length.'
  },
  {
    id: 'q.qm1.m4.03',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 5,
    title: 'Construction of Excited States via Creation Operator',
    source: 'Griffiths 3e §2.3.1 & Zettili 2e §4.8.2',
    prompt: `<p>(a) Using $|1\\rangle = \\hat{a}^\\dagger|0\\rangle$, derive the explicit position wave function $\\psi_1(x)$ of the first excited state.<br>
(b) Verify that $\\psi_1(x)$ is orthogonal to the ground state $\\psi_0(x)$.<br>
(c) Find the positions of the nodes of $\\psi_1(x)$ and the classical turning points for $n=1$.</p>`,
    tests: ['c.4.1.5', 'c.4.1.4'],
    approach: '<p>Apply the differential form of a† to ψ₀(x). Use symmetry/parity to verify orthogonality. Set ψ₁(x) = 0 for nodes, and solve ½ m ω² x² = E₁ for classical turning points.</p>',
    solution: `<p><b>(a) Construction of $\\psi_1(x)$:</b><br>
In position space, the creation operator is:
$$\\hat{a}^\\dagger = \\frac{1}{\\sqrt{2m\\hbar\\omega}} \\left( m\\omega x - \\hbar\\frac{d}{dx} \\right)$$
Act on the ground state $\\psi_0(x) = A e^{-\\beta x^2/2}$ where $\\beta = \\frac{m\\omega}{\\hbar}$ and $A = (\\beta/\\pi)^{1/4}$:
$$\\psi_1(x) = \\hat{a}^\\dagger \\psi_0(x) = \\frac{1}{\\sqrt{2m\\hbar\\omega}} \\left( m\\omega x \\psi_0(x) - \\hbar \\frac{d\\psi_0}{dx} \\right)$$
Evaluate the derivative:
$$\\frac{d\\psi_0}{dx} = A(-\\beta x) e^{-\\beta x^2/2} = -\\frac{m\\omega}{\\hbar} x \\psi_0(x)$$
Substitute this back:
$$\\psi_1(x) = \\frac{1}{\\sqrt{2m\\hbar\\omega}} \\left( m\\omega x \\psi_0(x) - \\hbar\\left(-\\frac{m\\omega}{\\hbar}x\\psi_0(x)\\right) \\right) = \\frac{2m\\omega x}{\\sqrt{2m\\hbar\\omega}} \\psi_0(x) = \\sqrt{\\frac{2m\\omega}{\\hbar}} x \\psi_0(x)$$
Substituting the explicit form of $\\psi_0(x)$:
$$\\boxed{\\psi_1(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4} \\sqrt{\\frac{2m\\omega}{\\hbar}} \\, x \\, e^{-\\frac{m\\omega}{2\\hbar}x^2}}$$</p>

<p><b>(b) Orthogonality to Ground State:</b><br>
Compute the inner product $\\langle 0|1\\rangle$:
$$\\langle 0|1\\rangle = \\int_{-\\infty}^\\infty \\psi_0^*(x) \\psi_1(x) \\, dx = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/2} \\sqrt{\\frac{2m\\omega}{\\hbar}} \\int_{-\\infty}^\\infty x \\, e^{-\\frac{m\\omega}{\\hbar}x^2} \\, dx$$
Notice that the integrand $f(x) = x e^{-\\frac{m\\omega}{\\hbar}x^2}$ is an <b>odd function</b> ($f(-x) = -f(x)$) integrated over a symmetric interval $[-\\infty, \\infty]$.<br>
Therefore, the integral vanishes identically:
$$\\langle 0|1\\rangle = 0$$
Hence, $\\psi_0$ and $\\psi_1$ are strictly orthogonal.</p>

<p><b>(c) Nodes and Classical Turning Points:</b><br>
1. <i>Nodes:</i> $\\psi_1(x) = 0 \\implies x = 0$. There is exactly <b>one node</b>, located at the origin.<br>
2. <i>Classical Turning Points:</i> For $n=1$, $E_1 = \\frac{3}{2}\\hbar\\omega$.<br>
Setting $V(x) = E_1$:
$$\\frac{1}{2}m\\omega^2 x_{\\text{turn}}^2 = \\frac{3}{2}\\hbar\\omega \\implies x_{\\text{turn}} = \\pm \\sqrt{\\frac{3\\hbar}{m\\omega}}$$
Between $-\\sqrt{3\\hbar/m\\omega}$ and $+\\sqrt{3\\hbar/m\\omega}$, the particle is classically allowed; outside, it penetrates exponentially.</p>`,
    trap: 'Computing the orthogonality integral by explicit integration instead of recognizing the parity symmetry of odd integrands.'
  },
  {
    id: 'q.qm1.m4.04',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 5,
    title: 'Matrix Representation of Truncated Oscillator Algebra',
    source: 'Zettili 2e §4.8.4 & Solved Problem 4.16',
    prompt: `<p>In the truncated three-dimensional subspace spanned by $\{|0\\rangle, |1\\rangle, |2\\rangle\}$ of a harmonic oscillator:<br>
(a) Write down the $3 \\times 3$ matrix representations of $\\hat{a}$ and $\\hat{a}^\\dagger$.<br>
(b) Construct the matrix representation of the position operator $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$.<br>
(c) Calculate $\\langle 1|\\hat{x}^2|1\\rangle$ using matrix multiplication and compare with the algebraic result.</p>`,
    tests: ['c.4.1.6', 'c.4.1.7'],
    approach: '<p>Use ⟨m|a|n⟩ = √n δ_{m, n-1} to populate matrices. Perform row-by-column matrix multiplication for x².</p>',
    solution: `<p><b>(a) Matrix Representations of $\\hat{a}$ and $\\hat{a}^\\dagger$:</b><br>
Using $\\hat{a}|0\\rangle = 0, \\hat{a}|1\\rangle = |0\\rangle, \\hat{a}|2\\rangle = \\sqrt{2}|1\\rangle$:
$$a = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & \\sqrt{2} \\\\ 0 & 0 & 0 \\end{pmatrix}$$
Taking the Hermitian conjugate:
$$a^\\dagger = \\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & \\sqrt{2} & 0 \\end{pmatrix}$$</p>

<p><b>(b) Matrix Representation of $\\hat{x}$:</b><br>
$$\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(a + a^\\dagger) = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & \\sqrt{2} \\\\ 0 & \\sqrt{2} & 0 \\end{pmatrix}$$
Notice that $x$ is symmetric and purely real (hence Hermitian), and has zero diagonal elements.</p>

<p><b>(c) Computation of $\\langle 1|\\hat{x}^2|1\\rangle$:</b><br>
Let $c = \\sqrt{\\frac{\\hbar}{2m\\omega}}$. Square the dimensionless matrix:
$$M = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & \\sqrt{2} \\\\ 0 & \\sqrt{2} & 0 \\end{pmatrix}$$
$$M^2 = \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & \\sqrt{2} \\\\ 0 & \\sqrt{2} & 0 \\end{pmatrix} \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & \\sqrt{2} \\\\ 0 & \\sqrt{2} & 0 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & \\sqrt{2} \\\\ 0 & 1 + 2 & 0 \\\\ \\sqrt{2} & 0 & 2 \\end{pmatrix} = \\begin{pmatrix} 1 & 0 & \\sqrt{2} \\\\ 0 & 3 & 0 \\\\ \\sqrt{2} & 0 & 2 \\end{pmatrix}$$
The expectation value $\\langle 1|\\hat{x}^2|1\\rangle$ corresponds to the $(1,1)$ entry (second row, second column, 0-indexed):
$$\\langle 1|\\hat{x}^2|1\\rangle = c^2 (M^2)_{11} = \\frac{\\hbar}{2m\\omega} \\times 3 = \\frac{3\\hbar}{2m\\omega}$$
<b>Comparison with Algebraic Formula:</b><br>
From $\\langle n|\\hat{x}^2|n\\rangle = \\frac{\\hbar}{2m\\omega}(2n + 1)$, for $n=1$:
$$\\langle 1|\\hat{x}^2|1\\rangle = \\frac{\\hbar}{2m\\omega}(2(1) + 1) = \\frac{3\\hbar}{2m\\omega}$$
Both methods match perfectly.</p>`,
    trap: 'Using the truncated matrix to compute (M²)_{22} for state |2⟩; truncation truncates the contribution from |3⟩, so only elements with n < N - 1 are exact.'
  },
  {
    id: 'q.qm1.m4.05',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 5,
    title: 'Expectation Values of Higher Powers ⟨x⁴⟩ via Ladder Algebra',
    source: 'Griffiths 3e §2.3 Problem 2.12 & Zettili 2e §4.8.5',
    prompt: `<p>Using the algebraic expression $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$, calculate the expectation value $\\langle n|\\hat{x}^4|n\\rangle$ for an arbitrary harmonic oscillator stationary state $|n\\rangle$.</p>`,
    tests: ['c.4.1.7', 'c.4.1.2'],
    approach: '<p>Expand (a + a†)⁴. In the bracket ⟨n|...|n⟩, only terms with an equal number of creation and annihilation operators (2 of each) have non-zero expectation values.</p>',
    solution: `<p>Express $\\hat{x}^4$ in terms of ladder operators:
$$\\hat{x}^4 = \\left(\\frac{\\hbar}{2m\\omega}\\right)^2 (\\hat{a} + \\hat{a}^\\dagger)^4$$
When expanding $(\\hat{a} + \\hat{a}^\\dagger)^4$, any term that changes the number of quanta (i.e. where number of $\\hat{a}^\\dagger$ does not equal number of $\\hat{a}$) gives $\\langle n|\\text{term}|n\\rangle = 0$ by orthogonality of distinct Fock states.<br>
Therefore, we only retain the $\\binom{4}{2} = 6$ terms containing exactly two $\\hat{a}$ and two $\\hat{a}^\\dagger$ operators:
<ol>
  <li>$\\hat{a}^2 (\\hat{a}^\\dagger)^2$:
  $$\\hat{a}^2 (\\hat{a}^\\dagger)^2 |n\\rangle = \\hat{a}^2 \\sqrt{(n+1)(n+2)}|n+2\\rangle = (n+1)(n+2)|n\\rangle$$</li>
  <li>$\\hat{a} \\hat{a}^\\dagger \\hat{a} \\hat{a}^\\dagger$:
  $$\\hat{a} \\hat{a}^\\dagger (n+1)|n\\rangle = (n+1)^2 |n\\rangle$$</li>
  <li>$\\hat{a} (\\hat{a}^\\dagger)^2 \\hat{a}$:
  $$\\hat{a} (\\hat{a}^\\dagger)^2 \\sqrt{n}|n-1\\rangle = \\sqrt{n} \\sqrt{n(n+1)} \\hat{a}|n+1\\rangle = n(n+1)|n\\rangle$$</li>
  <li>$\\hat{a}^\\dagger \\hat{a}^2 \\hat{a}^\\dagger$:
  $$\\hat{a}^\\dagger \\hat{a}^2 \\sqrt{n+1}|n+1\\rangle = \\sqrt{n+1} \\sqrt{(n+1)n} \\hat{a}^\\dagger|n-1\\rangle = n(n+1)|n\\rangle$$</li>
  <li>$\\hat{a}^\\dagger \\hat{a} \\hat{a}^\\dagger \\hat{a}$:
  $$\\hat{a}^\\dagger \\hat{a} (n|n\\rangle) = n^2 |n\\rangle$$</li>
  <li>$(\\hat{a}^\\dagger)^2 \\hat{a}^2$:
  $$(\\hat{a}^\\dagger)^2 \\sqrt{n(n-1)}|n-2\\rangle = n(n-1)|n\\rangle$$</li>
</ol>
Summing all 6 expectation values:
$$\\langle n|(\\hat{a} + \\hat{a}^\\dagger)^4|n\\rangle = (n^2 + 3n + 2) + (n^2 + 2n + 1) + (n^2 + n) + (n^2 + n) + n^2 + (n^2 - n)$$
$$= n^2(1+1+1+1+1+1) + n(3+2+1+1+0-1) + (2+1) = 6n^2 + 6n + 3 = 3(2n^2 + 2n + 1)$$
Therefore:
$$\\boxed{\\langle n|\\hat{x}^4|n\\rangle = \\left(\\frac{\\hbar}{2m\\omega}\\right)^2 \\cdot 3(2n^2 + 2n + 1) = \\frac{3\\hbar^2}{4m^2\\omega^2}(2n^2 + 2n + 1)}$$
For the ground state ($n=0$): $\\langle 0|\\hat{x}^4|0\\rangle = \\frac{3\\hbar^2}{4m^2\\omega^2} = 3\\langle 0|\\hat{x}^2|0\\rangle^2$, matching the standard moment relation $\\langle x^4 \\rangle = 3\\sigma^4$ for Gaussian distributions!</p>`,
    trap: 'Treating (a + a†)⁴ as a binomial expansion with coefficients 1, 4, 6, 4, 1; non-commuting operators require evaluating all 6 permutations individually.'
  },
  {
    id: 'q.qm1.m4.06',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 4,
    title: 'Proof of the Quantum Virial Theorem for Harmonic Oscillators',
    source: 'Griffiths 3e §2.3 Problem 2.11 & Zettili 2e §4.8.5',
    prompt: `<p>(a) Using the commutator relation $\\frac{d}{dt}\\langle \\hat{x}\\hat{p} \\rangle = \\frac{1}{i\\hbar}\\langle [\\hat{x}\\hat{p}, \\hat{H}] \\rangle$, evaluate $[\\hat{x}\\hat{p}, \\hat{H}]$ for the harmonic oscillator Hamiltonian $\\hat{H} = \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2\\hat{x}^2$.<br>
(b) Deduce that for any stationary state $|n\\rangle$, the average kinetic energy equals the average potential energy: $\\langle T \\rangle = \\langle V \\rangle = \\frac{1}{2}E_n$.</p>`,
    tests: ['c.4.1.7', 'c.3.3.1'],
    approach: '<p>Use Leibniz rules on [xp, p²] and [xp, x²]. Set the time derivative of the expectation value to zero for stationary states.</p>',
    solution: `<p><b>(a) Commutator $[\\hat{x}\\hat{p}, \\hat{H}]$:</b><br>
Expand into kinetic and potential parts:
$$[\\hat{x}\\hat{p}, \\hat{H}] = \\frac{1}{2m}[\\hat{x}\\hat{p}, \\hat{p}^2] + \\frac{1}{2}m\\omega^2 [\\hat{x}\\hat{p}, \\hat{x}^2]$$
Evaluate each bracket using $[\\hat{A}\\hat{B}, \\hat{C}] = \\hat{A}[\\hat{B}, \\hat{C}] + [\\hat{A}, \\hat{C}]\\hat{B}$:
1. First term: $[\\hat{x}\\hat{p}, \\hat{p}^2] = [\\hat{x}, \\hat{p}^2]\\hat{p} + \\hat{x}[\\hat{p}, \\hat{p}^2] = (2i\\hbar \\hat{p})\\hat{p} + 0 = 2i\\hbar \\hat{p}^2$.<br>
2. Second term: $[\\hat{x}\\hat{p}, \\hat{x}^2] = \\hat{x}[\\hat{p}, \\hat{x}^2] + [\\hat{x}, \\hat{x}^2]\\hat{p} = \\hat{x}(-2i\\hbar \\hat{x}) + 0 = -2i\\hbar \\hat{x}^2$.<br>
Combining:
$$[\\hat{x}\\hat{p}, \\hat{H}] = \\frac{1}{2m}(2i\\hbar \\hat{p}^2) + \\frac{1}{2}m\\omega^2(-2i\\hbar \\hat{x}^2) = 2i\\hbar \\left( \\frac{\\hat{p}^2}{2m} - \\frac{1}{2}m\\omega^2\\hat{x}^2 \\right) = 2i\\hbar(\\hat{T} - \\hat{V})$$</p>

<p><b>(b) Deduction of the Virial Theorem:</b><br>
By Ehrenfest's theorem, the time derivative of the expectation value is:
$$\\frac{d}{dt}\\langle \\hat{x}\\hat{p} \\rangle = \\frac{1}{i\\hbar}\\langle [\\hat{x}\\hat{p}, \\hat{H}] \\rangle = \\frac{1}{i\\hbar} \\langle 2i\\hbar(\\hat{T} - \\hat{V}) \\rangle = 2(\\langle \\hat{T} \\rangle - \\langle \\hat{V} \\rangle)$$
In any stationary state $|n\\rangle$, the expectation value of any time-independent observable is constant in time: $\\frac{d}{dt}\\langle \\hat{x}\\hat{p} \\rangle = 0$.<br>
Therefore:
$$2(\\langle \\hat{T} \\rangle - \\langle \\hat{V} \\rangle) = 0 \\implies \\langle \\hat{T} \\rangle = \\langle \\hat{V} \\rangle$$
Since the total energy is $E_n = \\langle \\hat{H} \\rangle = \\langle \\hat{T} \\rangle + \\langle \\hat{V} \\rangle$:
$$\\langle \\hat{T} \\rangle + \\langle \\hat{T} \\rangle = E_n \\implies \\boxed{\\langle \\hat{T} \\rangle = \\langle \\hat{V} \\rangle = \\frac{1}{2}E_n}$$
For state $|n\\rangle$, $\\langle T \\rangle = \\langle V \\rangle = \\frac{1}{2}\\left(n + \\frac{1}{2}\\right)\\hbar\\omega$.</p>`,
    trap: 'Assuming d⟨xp⟩/dt = 0 applies to non-stationary superpositions; virial theorem holds for stationary states or time-averaged non-stationary states.'
  },
  {
    id: 'q.qm1.m4.07',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 5,
    title: 'Superposition State and Classical Harmonic Motion of Wave Packet',
    source: 'Griffiths 3e §2.3 Problem 2.13 & Zettili 2e §4.8.3',
    prompt: `<p>At $t=0$, a particle of mass $m$ in a harmonic potential is in the superposition state:
$$|\\Psi(0)\\rangle = \\frac{1}{\\sqrt{2}}|0\\rangle + \\frac{1}{\\sqrt{2}}|1\\rangle$$
(a) Write down the state vector $|\\Psi(t)\\rangle$ at any subsequent time $t$.<br>
(b) Calculate the expectation value of position $\\langle \\hat{x} \\rangle(t)$ and show that it oscillates with the classical frequency $\\omega$.<br>
(c) Calculate the expectation value of momentum $\\langle \\hat{p} \\rangle(t)$ and verify Ehrenfest\'s theorem $\\frac{d\\langle x \\rangle}{dt} = \\frac{\\langle p \\rangle}{m}$.</p>`,
    tests: ['c.4.1.2', 'c.4.1.6', 'c.1.5.3'],
    approach: '<p>Attach phase factors e^{-iE_n t / ħ} to each state. Expand x = c(a + a†) and evaluate ⟨Ψ(t)|x|Ψ(t)⟩.</p>',
    solution: `<p><b>(a) Time-Dependent State $|\\Psi(t)\\rangle$:</b><br>
Each stationary state evolves with its energy phase factor $e^{-iE_n t / \\hbar}$:
$$E_0 = \\frac{1}{2}\\hbar\\omega, \\qquad E_1 = \\frac{3}{2}\\hbar\\omega$$
$$|\\Psi(t)\\rangle = \\frac{1}{\\sqrt{2}}e^{-i\\omega t / 2}|0\\rangle + \\frac{1}{\\sqrt{2}}e^{-3i\\omega t / 2}|1\\rangle = \\frac{e^{-i\\omega t / 2}}{\\sqrt{2}} \\left( |0\\rangle + e^{-i\\omega t}|1\\rangle \\right)$$</p>

<p><b>(b) Expectation Value $\\langle \\hat{x} \\rangle(t)$:</b><br>
Using $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$:
$$\\langle \\hat{x} \\rangle(t) = \\langle \\Psi(t)|\\hat{x}|\\Psi(t)\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\left( \\frac{\\langle 0| + e^{i\\omega t}\\langle 1|}{\\sqrt{2}} \\right) (\\hat{a} + \\hat{a}^\\dagger) \\left( \\frac{|0\\rangle + e^{-i\\omega t}|1\\rangle}{\\sqrt{2}} \\right)$$
Evaluate the action of $(\\hat{a} + \\hat{a}^\\dagger)$:
$$(\\hat{a} + \\hat{a}^\\dagger)(|0\\rangle + e^{-i\\omega t}|1\\rangle) = (|1\\rangle) + e^{-i\\omega t}(|0\\rangle + \\sqrt{2}|2\\rangle) = e^{-i\\omega t}|0\\rangle + |1\\rangle + \\sqrt{2}e^{-i\\omega t}|2\\rangle$$
Taking the inner product with $(\\langle 0| + e^{i\\omega t}\\langle 1|)$:
$$\\langle 0| (e^{-i\\omega t}|0\\rangle) + e^{i\\omega t}\\langle 1|(|1\\rangle) = e^{-i\\omega t} + e^{i\\omega t} = 2\\cos(\\omega t)$$
Multiplying by the prefactors:
$$\\langle \\hat{x} \\rangle(t) = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\cdot \\frac{1}{2} \\cdot 2\\cos(\\omega t) = \\boxed{\\sqrt{\\frac{\\hbar}{2m\\omega}} \\cos(\\omega t)}$$
The wave packet oscillates back and forth at the exact classical harmonic frequency $\\omega$!</p>

<p><b>(c) Expectation Value $\\langle \\hat{p} \\rangle(t)$ and Ehrenfest Verification:</b><br>
Similarly, for $\\hat{p} = -i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\hat{a} - \\hat{a}^\\dagger)$:
$$(\\hat{a} - \\hat{a}^\\dagger)(|0\\rangle + e^{-i\\omega t}|1\\rangle) = -|1\\rangle + e^{-i\\omega t}(|0\\rangle - \\sqrt{2}|2\\rangle) = e^{-i\\omega t}|0\\rangle - |1\\rangle - \\sqrt{2}e^{-i\\omega t}|2\\rangle$$
Inner product: $e^{-i\\omega t} - e^{i\\omega t} = -2i\\sin(\\omega t)$.<br>
Multiplying by $-i\\sqrt{\\frac{m\\hbar\\omega}{2}} \\cdot \\frac{1}{2}$:
$$\\langle \\hat{p} \\rangle(t) = -i\\sqrt{\\frac{m\\hbar\\omega}{2}} \\frac{1}{2} (-2i\\sin(\\omega t)) = i^2 \\sqrt{\\frac{m\\hbar\\omega}{2}} \\sin(\\omega t) = \\boxed{-\\sqrt{\\frac{m\\hbar\\omega}{2}} \\sin(\\omega t)}$$
Now check Ehrenfest's theorem:
$$\\frac{d\\langle x \\rangle}{dt} = \\frac{d}{dt}\\left[ \\sqrt{\\frac{\\hbar}{2m\\omega}} \\cos(\\omega t) \\right] = -\\omega \\sqrt{\\frac{\\hbar}{2m\\omega}} \\sin(\\omega t) = -\\sqrt{\\frac{\\hbar\\omega^2}{2m\\omega}} \\sin(\\omega t) = -\\sqrt{\\frac{\\hbar\\omega}{2m}} \\sin(\\omega t)$$
Dividing $\\langle p \\rangle$ by $m$:
$$\\frac{\\langle p \\rangle}{m} = -\\frac{1}{m}\\sqrt{\\frac{m\\hbar\\omega}{2}} \\sin(\\omega t) = -\\sqrt{\\frac{\\hbar\\omega}{2m}} \\sin(\\omega t)$$
Both expressions are identical, verifying $\\frac{d\\langle x \\rangle}{dt} = \\frac{\\langle p \\rangle}{m}$.</p>`,
    trap: 'Forgetting the overall phase factor e^{-iωt/2}; while it cancels in ⟨x⟩, dropping it from the state vector produces errors in time evolution.'
  },
  {
    id: 'q.qm1.m4.08',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.1',
    marks: 5,
    title: 'Coherent State Algebra and Poissonian Statistics',
    source: 'Zettili 2e §4.8.6 & Solved Problem 4.20',
    prompt: `<p>A coherent state is an eigenstate of the annihilation operator: $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$ where $\\alpha \\in \\mathbb{C}$.<br>
(a) By expanding $|\\alpha\\rangle = \\sum_{n=0}^\\infty c_n |n\\rangle$, find the coefficients $c_n$ and normalize the state.<br>
(b) Show that the probability $P(n)$ of finding $n$ quanta in $|\\alpha\\rangle$ follows a Poisson distribution with mean $\\bar{n} = |\\alpha|^2$.<br>
(c) Calculate the expectation value of energy $\\langle \\hat{H} \\rangle$ in the coherent state.</p>`,
    tests: ['c.4.1.8'],
    approach: '<p>Substitute expansion into a|α⟩ = α|α⟩ to obtain recurrence cn = (α/√n) c_{n-1}. Normalize using the Taylor series for exp(|α|²).</p>',
    solution: `<p><b>(a) Expansion and Recurrence:</b><br>
Let $|\\alpha\\rangle = \\sum_{n=0}^\\infty c_n |n\\rangle$. Act with $\\hat{a}$:
$$\\hat{a}|\\alpha\\rangle = \\sum_{n=1}^\\infty c_n \\sqrt{n} |n-1\\rangle = \\sum_{m=0}^\\infty c_{m+1}\\sqrt{m+1}|m\\rangle$$
Equating this to $\\alpha|\\alpha\\rangle = \\sum_{m=0}^\\infty \\alpha c_m |m\\rangle$:
$$c_{m+1}\\sqrt{m+1} = \\alpha c_m \\implies c_{m+1} = \\frac{\\alpha}{\\sqrt{m+1}} c_m$$
By induction from $c_0$:
$$c_n = \\frac{\\alpha^n}{\\sqrt{n!}} c_0$$
Thus:
$$|\\alpha\\rangle = c_0 \\sum_{n=0}^\\infty \\frac{\\alpha^n}{\\sqrt{n!}} |n\\rangle$$
Normalize the state:
$$\\langle \\alpha|\\alpha\\rangle = |c_0|^2 \\sum_{n=0}^\\infty \\frac{|\\alpha|^{2n}}{n!} = |c_0|^2 e^{|\\alpha|^2} = 1 \\implies c_0 = e^{-|\\alpha|^2/2}$$
Therefore:
$$\\boxed{|\\alpha\\rangle = e^{-|\\alpha|^2/2} \\sum_{n=0}^\\infty \\frac{\\alpha^n}{\\sqrt{n!}} |n\\rangle}$$</p>

<p><b>(b) Poissonian Probability Distribution:</b><br>
The probability of measuring $n$ quanta is:
$$P(n) = |\\langle n|\\alpha\\rangle|^2 = |c_n|^2 = \\left| e^{-|\\alpha|^2/2} \\frac{\\alpha^n}{\\sqrt{n!}} \\right|^2 = e^{-|\\alpha|^2} \\frac{(|\\alpha|^2)^n}{n!}$$
Defining the average number of quanta $\\bar{n} = |\\alpha|^2$:
$$\\boxed{P(n) = e^{-\\bar{n}} \\frac{\\bar{n}^n}{n!}}$$
This is precisely the <b>Poisson distribution</b> with variance $\\Delta N^2 = \\bar{n} = |\\alpha|^2$.</p>

<p><b>(c) Expectation Value of Energy:</b><br>
The Hamiltonian is $\\hat{H} = \\hbar\\omega\\left(\\hat{a}^\\dagger \\hat{a} + \\frac{1}{2}\\right)$.<br>
Take the expectation value in $|\\alpha\\rangle$:
$$\\langle \\hat{H} \\rangle = \\hbar\\omega \\langle \\alpha|\\hat{a}^\\dagger \\hat{a}|\\alpha\\rangle + \\frac{1}{2}\\hbar\\omega \\langle \\alpha|\\alpha\\rangle$$
Since $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$ and $\\langle \\alpha|\\hat{a}^\\dagger = \\alpha^* \\langle \\alpha|$:
$$\\langle \\alpha|\\hat{a}^\\dagger \\hat{a}|\\alpha\\rangle = (\\alpha^* \\langle \\alpha|)(\\alpha |\\alpha\\rangle) = |\\alpha|^2 \\langle \\alpha|\\alpha\\rangle = |\\alpha|^2$$
Therefore:
$$\\boxed{\\langle \\hat{H} \\rangle = \\hbar\\omega\\left(|\\alpha|^2 + \\frac{1}{2}\\right) = \\left(\\bar{n} + \\frac{1}{2}\\right)\\hbar\\omega}$$
The average energy is the zero-point energy plus $\\hbar\\omega$ times the average photon number.</p>`,
    trap: 'Attempting to calculate ⟨α|a† a|α⟩ by writing a† as a derivative; bracket projection directly evaluates to α* α.'
  },
  {
    id: 'q.qm1.m4.09',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.2',
    marks: 4,
    title: 'Separation of Variables in a 3D Cylindrical-Symmetric Potential',
    source: 'Zettili 2e §6.2.1',
    prompt: `<p>A particle of mass $m$ moves in a 3D potential that is harmonic in the $xy$-plane and confined to an infinite square well along the $z$-axis:
$$V(x, y, z) = \\frac{1}{2}m\\omega^2(x^2 + y^2) + V_z(z), \\qquad V_z(z) = \\begin{cases} 0 & 0 < z < L \\\\ \\infty & \\text{otherwise} \\end{cases}$$
(a) Separate the 3D Schrödinger equation in Cartesian coordinates.<br>
(b) Write down the complete energy eigenvalue formula and state all allowed quantum numbers.<br>
(c) Find the ground state energy of the system.</p>`,
    tests: ['c.4.2.1', 'c.4.1.3', 'c.4.3.1'],
    approach: '<p>Express V as Vx(x) + Vy(y) + Vz(z). Sum independent 1D harmonic oscillator energies for x and y, and 1D infinite well energy for z.</p>',
    solution: `<p><b>(a) Separation of Variables:</b><br>
The potential is a sum of three independent terms:
$$V(x,y,z) = \\left(\\frac{1}{2}m\\omega^2 x^2\\right) + \\left(\\frac{1}{2}m\\omega^2 y^2\\right) + V_z(z)$$
Therefore, the Hamiltonian separates into three commuting parts:
$$\\hat{H} = \\hat{H}_x + \\hat{H}_y + \\hat{H}_z$$
Letting $\\psi(x,y,z) = X(x)Y(y)Z(z)$, the TISE decouples into:
$$-\\frac{\\hbar^2}{2m}\\frac{d^2X}{dx^2} + \\frac{1}{2}m\\omega^2 x^2 X = E_x X$$
$$-\\frac{\\hbar^2}{2m}\\frac{d^2Y}{dy^2} + \\frac{1}{2}m\\omega^2 y^2 Y = E_y Y$$
$$-\\frac{\\hbar^2}{2m}\\frac{d^2Z}{dz^2} = E_z Z \\quad (0 < z < L, \\; Z(0)=Z(L)=0)$$</p>

<p><b>(b) Energy Eigenvalues:</b><br>
- Motion along $x$ is a 1D harmonic oscillator: $E_x = (n_x + 1/2)\\hbar\\omega$, with $n_x = 0, 1, 2, \\dots$<br>
- Motion along $y$ is a 1D harmonic oscillator: $E_y = (n_y + 1/2)\\hbar\\omega$, with $n_y = 0, 1, 2, \\dots$<br>
- Motion along $z$ is an infinite square well: $E_z = \\frac{n_z^2 \\pi^2 \\hbar^2}{2mL^2}$, with $n_z = 1, 2, 3, \\dots$<br>
Total energy:
$$\\boxed{E_{n_x, n_y, n_z} = (n_x + n_y + 1)\\hbar\\omega + \\frac{n_z^2 \\pi^2 \\hbar^2}{2m L^2}}$$
with $n_x, n_y \\in \\{0, 1, 2, \\dots\\}$ and $n_z \\in \\{1, 2, 3, \\dots\\}$.</p>

<p><b>(c) Ground State Energy:</b><br>
The minimum energy is achieved by taking the lowest allowed quantum number for each dimension:
$$n_x = 0, \\qquad n_y = 0, \\qquad n_z = 1$$
$$\\boxed{E_{\\text{ground}} = E_{0, 0, 1} = \\hbar\\omega + \\frac{\\pi^2 \\hbar^2}{2m L^2}}$$
Notice that $E_x + E_y = \\frac{1}{2}\\hbar\\omega + \\frac{1}{2}\\hbar\\omega = \\hbar\\omega$.</p>`,
    trap: 'Setting nz = 0 for the ground state; infinite square well quantum numbers start at 1, while harmonic oscillator numbers start at 0.'
  },
  {
    id: 'q.qm1.m4.10',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.3',
    marks: 4,
    title: 'Energy Spectrum and Degeneracy of an Asymmetric Rectangular Box',
    source: 'Zettili 2e §6.2.3 & Problem 6.3',
    prompt: `<p>A particle of mass $m$ is confined in a 3D rectangular box with dimensions $L_x = L, L_y = 2L, L_z = 3L$.<br>
(a) Write the general expression for the energy eigenvalues in terms of $E_0 = \\frac{\\pi^2 \\hbar^2}{2m L^2}$.<br>
(b) Find the quantum numbers $(n_x, n_y, n_z)$ and energies of the ground state and first two excited states.<br>
(c) Is there any degeneracy among these lowest three states?</p>`,
    tests: ['c.4.3.1', 'c.4.3.2'],
    approach: '<p>Substitute Lx, Ly, Lz into the 3D box formula. Evaluate energies for low integer combinations and rank in ascending order.</p>',
    solution: `<p><b>(a) General Energy Formula:</b><br>
Substitute $L_x = L, L_y = 2L, L_z = 3L$ into the box energy formula:
$$E_{n_x, n_y, n_z} = \\frac{\\pi^2 \\hbar^2}{2m} \\left( \\frac{n_x^2}{L^2} + \\frac{n_y^2}{4L^2} + \\frac{n_z^2}{9L^2} \\right) = E_0 \\left( n_x^2 + \\frac{n_y^2}{4} + \\frac{n_z^2}{9} \\right)$$
where $E_0 = \\frac{\\pi^2 \\hbar^2}{2m L^2}$ and $n_x, n_y, n_z = 1, 2, 3, \\dots$.</p>

<p><b>(b) Lowest Energy States:</b><br>
Compute the coefficient $C = n_x^2 + \\frac{n_y^2}{4} + \\frac{n_z^2}{9}$ for small values:
<ol>
  <li><b>Ground State $(1, 1, 1)$:</b>
  $$C = 1 + \\frac{1}{4} + \\frac{1}{9} = \\frac{36 + 9 + 4}{36} = \\frac{49}{36} \\approx 1.361 \\implies E = \\frac{49}{36} E_0$$</li>
  <li>Next, test incrementing $n_z$ (smallest coefficient $1/9$):
  $(1, 1, 2): C = 1 + \\frac{1}{4} + \\frac{4}{9} = \\frac{36 + 9 + 16}{36} = \\frac{61}{36} \\approx 1.694 \\implies E = \\frac{61}{36} E_0$</li>
  <li>Next, test $(1, 1, 3)$:
  $C = 1 + \\frac{1}{4} + \\frac{9}{9} = 1 + 0.25 + 1 = 2.25 = \\frac{81}{36} E_0$</li>
  <li>Compare with incrementing $n_y$:
  $(1, 2, 1): C = 1 + \\frac{4}{4} + \\frac{1}{9} = 1 + 1 + \\frac{1}{9} = 2.111 = \\frac{76}{36} E_0$</li>
</ol>
Ranking in strictly ascending order:
<ol>
  <li><b>Ground State:</b> $(1, 1, 1)$ with $E = \\frac{49}{36} E_0 \\approx 1.361 E_0$.</li>
  <li><b>First Excited State:</b> $(1, 1, 2)$ with $E = \\frac{61}{36} E_0 \\approx 1.694 E_0$.</li>
  <li><b>Second Excited State:</b> $(1, 2, 1)$ with $E = \\frac{76}{36} E_0 \\approx 2.111 E_0$.</li>
</ol></p>

<p><b>(c) Degeneracy:</b><br>
All side lengths $L_x \\ne L_y \\ne L_z$ are distinct. Permutation symmetry is completely broken.<br>
Each of these lowest three energy levels corresponds to a single, unique triad $(n_x, n_y, n_z)$.<br>
Therefore, all three states are <b>strictly non-degenerate ($g = 1$)</b>.</p>`,
    trap: 'Assuming (1, 1, 2) and (1, 2, 1) have the same energy; unequal box side lengths break spatial exchange symmetry.'
  },
  {
    id: 'q.qm1.m4.11',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.3',
    marks: 5,
    title: 'Degeneracy Analysis of a 3D Cubic Potential Well',
    source: 'Zettili 2e §6.2.3 & Griffiths 3e §4.1',
    prompt: `<p>Consider a particle in a 3D cubic box of side $L$. In units of $E_1 = \\frac{\\pi^2 \\hbar^2}{2m L^2}$, the energy eigenvalues are $E = (n_x^2 + n_y^2 + n_z^2)E_1$.<br>
Determine the degree of degeneracy and write down all sets of quantum numbers $(n_x, n_y, n_z)$ for the energy levels:
(a) $E = 3 E_1$<br>
(b) $E = 6 E_1$<br>
(c) $E = 12 E_1$<br>
(d) $E = 14 E_1$<br>
(e) $E = 27 E_1$, and identify whether the degeneracy in (e) is geometric or accidental.</p>`,
    tests: ['c.4.3.2', 'c.4.3.3'],
    approach: '<p>Find all combinations of positive integers (nx, ny, nz ≥ 1) whose sum of squares equals the specified multiple. Permutations of distinct numbers give 6, permutations of two equal give 3, all equal give 1.</p>',
    solution: `<p><b>(a) $E = 3 E_1$:</b><br>
Solve $n_x^2 + n_y^2 + n_z^2 = 3$ with $n_i \\ge 1$.<br>
The only solution is $(1, 1, 1)$.<br>
<b>Degeneracy:</b> $g = 1$ (Non-degenerate ground state).</p>

<p><b>(b) $E = 6 E_1$:</b><br>
Solve $n_x^2 + n_y^2 + n_z^2 = 6$.<br>
$4 + 1 + 1 = 6 \\implies$ Permutations of $(2, 1, 1)$:
$$(2, 1, 1), \\quad (1, 2, 1), \\quad (1, 1, 2)$$
<b>Degeneracy:</b> $g = 3$ (3-fold degenerate, first excited state).</p>

<p><b>(c) $E = 12 E_1$:</b><br>
Solve $n_x^2 + n_y^2 + n_z^2 = 12$.<br>
$4 + 4 + 4 = 12 \\implies (2, 2, 2)$.<br>
Are there other combinations? $9 + 1 + 1 = 11 \\ne 12$, $9 + 4 = 13 > 12$.<br>
The only solution is $(2, 2, 2)$.<br>
<b>Degeneracy:</b> $g = 1$ (Non-degenerate state).</p>

<p><b>(d) $E = 14 E_1$:</b><br>
Solve $n_x^2 + n_y^2 + n_z^2 = 14$.<br>
$9 + 4 + 1 = 14 \\implies$ All permutations of three distinct integers $(3, 2, 1)$:
$$(3, 2, 1), \\quad (3, 1, 2), \\quad (2, 3, 1), \\quad (2, 1, 3), \\quad (1, 3, 2), \\quad (1, 2, 3)$$
Number of permutations: $3! = 6$.<br>
<b>Degeneracy:</b> $g = 6$ (6-fold degenerate).</p>

<p><b>(e) $E = 27 E_1$:</b><br>
Solve $n_x^2 + n_y^2 + n_z^2 = 27$.
<ol>
  <li>Set 1: $9 + 9 + 9 = 27 \\implies (3, 3, 3)$ ($1$ state).</li>
  <li>Set 2: $25 + 1 + 1 = 27 \\implies (5, 1, 1)$ ($3$ permutations: $(5,1,1), (1,5,1), (1,1,5)$).</li>
</ol>
Total degeneracy:
$$\\boxed{g = 1 + 3 = 4}$$
<b>Classification:</b> This is an <b>accidental degeneracy</b>! The state $(3,3,3)$ and the states $(5,1,1)$ are not related by any geometric permutation or spatial rotation of the cube, but share the identical energy purely by numerical coincidence ($3^2+3^2+3^2 = 5^2+1^2+1^2 = 27$).</p>`,
    trap: 'Missing the (5,1,1) set for E = 27E_1, which would incorrectly give g = 1 instead of g = 4.'
  },
  {
    id: 'q.qm1.m4.12',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.4',
    marks: 4,
    title: 'Commensurate Frequencies and Degeneracy in a 3D Anisotropic Oscillator',
    source: 'Zettili 2e §6.2.4 & Problem 6.8',
    prompt: `<p>A 3D anisotropic harmonic oscillator has angular frequencies in the ratio $\\omega_x : \\omega_y : \\omega_z = 1 : 2 : 2$, so $\\omega_x = \\omega$ and $\\omega_y = \\omega_z = 2\\omega$.<br>
(a) Write down the energy eigenvalue formula in units of $\\hbar\\omega$.<br>
(b) Find the ground state energy.<br>
(c) Find the energy and degree of degeneracy of the first excited state and second excited state.</p>`,
    tests: ['c.4.4.1', 'c.4.4.2'],
    approach: '<p>Substitute frequencies into E = (nx + ½)ħωx + (ny + ½)ħωy + (nz + ½)ħωz. Tabulate low combinations of non-negative integers nx, ny, nz ≥ 0.</p>',
    solution: `<p><b>(a) Energy Formula:</b><br>
$$E_{n_x, n_y, n_z} = \\left(n_x + \\frac{1}{2}\\right)\\hbar\\omega + \\left(n_y + \\frac{1}{2}\\right)2\\hbar\\omega + \\left(n_z + \\frac{1}{2}\\right)2\\hbar\\omega$$
$$= \\hbar\\omega \\left( n_x + 2n_y + 2n_z + \\frac{1}{2} + 1 + 1 \\right) = \\hbar\\omega \\left( n_x + 2n_y + 2n_z + \\frac{5}{2} \\right)$$
with $n_x, n_y, n_z = 0, 1, 2, \\dots$.</p>

<p><b>(b) Ground State Energy:</b><br>
Setting $n_x = 0, n_y = 0, n_z = 0$:
$$E_{0,0,0} = \\frac{5}{2}\\hbar\\omega$$
<b>Degeneracy:</b> $g = 1$ (Non-degenerate ground state).</p>

<p><b>(c) First and Second Excited States:</b><br>
Let $K = n_x + 2(n_y + n_z)$. We want to find values of $K = 1, 2, 3, \\dots$:
<ol>
  <li><b>For $K = 1$:</b>
  $n_x + 2(n_y + n_z) = 1 \\implies n_y + n_z = 0$ and $n_x = 1$.<br>
  The only state is $(1, 0, 0)$.<br>
  Energy: $E = \\left(1 + \\frac{5}{2}\\right)\\hbar\\omega = \\frac{7}{2}\\hbar\\omega$.<br>
  <b>First Excited State:</b> $E_1 = \\frac{7}{2}\\hbar\\omega$, <b>Non-degenerate ($g = 1$)</b>.</li>

  <li><b>For $K = 2$:</b>
  $n_x + 2(n_y + n_z) = 2$. Two distinct possibilities:
  <ul>
    <li>Case 1: $n_y + n_z = 0 \\implies n_x = 2$. State: $(2, 0, 0)$.</li>
    <li>Case 2: $n_y + n_z = 1 \\implies n_x = 0$. States: $(0, 1, 0)$ and $(0, 0, 1)$.</li>
  </ul>
  All three states $(2,0,0)$, $(0,1,0)$, and $(0,0,1)$ yield $K = 2$!<br>
  Energy: $E = \\left(2 + \\frac{5}{2}\\right)\\hbar\\omega = \\frac{9}{2}\\hbar\\omega$.<br>
  <b>Second Excited State:</b> $E_2 = \\frac{9}{2}\\hbar\\omega$, <b>3-fold degenerate ($g = 3$)</b>.</li>
</ol>
Because the frequencies are commensurate (rational ratio $1:2:2$), accidental degeneracy appears already at the second excited state!</p>`,
    trap: 'Assuming the first excited state is degenerate; with ω_x = ω and ω_y = ω_z = 2ω, exciting x costs 1ħω while exciting y or z costs 2ħω.'
  },
  {
    id: 'q.qm1.m4.13',
    course: 'qm1',
    module: 'qm1.m4',
    sec: '4.4',
    marks: 5,
    title: 'Combinatorial Derivation of Degeneracy in a 3D Isotropic Oscillator',
    source: 'Zettili 2e §6.2.4 & Griffiths 3e §4.1',
    prompt: `<p>For a 3D isotropic harmonic oscillator, the energy eigenvalues are $E_N = \\left(N + \\frac{3}{2}\\right)\\hbar\\omega$, where $N = n_x + n_y + n_z$ ($n_x, n_y, n_z \\in \\{0, 1, 2, \\dots\\}$).<br>
(a) Using combinatorial methods, prove that the degree of degeneracy of level $N$ is $g_N = \\frac{(N+1)(N+2)}{2}$.<br>
(b) Explicitly list all degenerate eigenstates $|n_x, n_y, n_z\\rangle$ for the ground state ($N=0$), first excited state ($N=1$), and second excited state ($N=2$).</p>`,
    tests: ['c.4.4.2', 'c.4.4.3'],
    approach: '<p>Use the stars-and-bars method: distributing N indistinguishable quanta into 3 distinguishable bins (x, y, z). Evaluate the combination formula (N + k - 1) C (k - 1) with k = 3.</p>',
    solution: `<p><b>(a) Combinatorial Proof of $g_N = \\frac{(N+1)(N+2)}{2}$:</b><br>
The degeneracy $g_N$ is the number of non-negative integer solutions to:
$$n_x + n_y + n_z = N \\qquad (n_x, n_y, n_z \\ge 0)$$
This is equivalent to placing $N$ identical objects (quanta) into $k = 3$ distinct bins ($x, y, z$).<br>
By the standard <b>stars and bars theorem</b>, placing $N$ stars and $k - 1 = 2$ dividing bars has:
$$\\binom{N + k - 1}{k - 1} = \\binom{N + 2}{2}$$
total arrangements.<br>
Evaluating the binomial coefficient:
$$\\binom{N + 2}{2} = \\frac{(N + 2)!}{2! \\, N!} = \\frac{(N + 2)(N + 1)}{2}$$
Therefore:
$$\\boxed{g_N = \\frac{(N + 1)(N + 2)}{2}}$$</p>

<p><b>(b) Explicit Listing of Degenerate States:</b>
<ol>
  <li><b>Ground State ($N = 0$):</b> $E_0 = \\frac{3}{2}\\hbar\\omega$.<br>
  $$g_0 = \\frac{(0+1)(0+2)}{2} = 1$$
  <b>Eigenstate:</b> $|0, 0, 0\\rangle$.</li>

  <li><b>First Excited State ($N = 1$):</b> $E_1 = \\frac{5}{2}\\hbar\\omega$.<br>
  $$g_1 = \\frac{(1+1)(1+2)}{2} = 3$$
  <b>Eigenstates:</b>
  $$|1, 0, 0\\rangle, \\qquad |0, 1, 0\\rangle, \\qquad |0, 0, 1\\rangle$$
  (Corresponds to $p$-wave states with orbital angular momentum $l = 1$).</li>

  <li><b>Second Excited State ($N = 2$):</b> $E_2 = \\frac{7}{2}\\hbar\\omega$.<br>
  $$g_2 = \\frac{(2+1)(2+2)}{2} = 6$$
  <b>Eigenstates:</b>
  <ul>
    <li>Two quanta in one mode (3 states): $|2, 0, 0\\rangle, \\; |0, 2, 0\\rangle, \\; |0, 0, 2\\rangle$.</li>
    <li>One quantum in each of two modes (3 states): $|1, 1, 0\\rangle, \\; |1, 0, 1\\rangle, \\; |0, 1, 1\\rangle$.</li>
  </ul>
  Total = $3 + 3 = 6$ states. (In spherical coordinates, these 6 states decompose into an $s$-state ($l=0$, 1 state) and a $d$-state ($l=2$, 5 states), yielding $1 + 5 = 6$).</li>
</ol></p>`,
    trap: 'Using the permutation formula 3! = 6 for states with repeated digits like (2,0,0), which only has 3 unique permutations.'
  }
);

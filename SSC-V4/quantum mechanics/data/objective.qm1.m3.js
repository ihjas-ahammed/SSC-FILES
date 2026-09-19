/* ══════════════════════════════════════════════════════════════════════════
   OBJECTIVE BANK — Module III: Mathematical Tools of Quantum Mechanics
   Verified against Zettili 2e Ch 2, Griffiths 3e Ch 3, and IIT JAM Physics patterns.
   Question Types: MCQ (Multiple Choice), MSQ (Multiple Select), NAT (Numerical Answer)
   Total Questions: 14
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.qm1.m3.01',
    course: 'qm1',
    sec: '3.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'For any normalized state vector $|\\psi\\rangle$ in a Hilbert space, what is the trace of the projection operator $\\hat{P}_\\psi = |\\psi\\rangle\\langle\\psi|$?',
    options: [
      { k: 'A', t: '0' },
      { k: 'B', t: '1' },
      { k: 'C', t: 'The dimension $N$ of the Hilbert space' },
      { k: 'D', t: '$\\infty$' }
    ],
    answer: 'B',
    solution: `<p>Let $\{|e_n\\rangle\}$ be any orthonormal basis of the Hilbert space. The trace is defined as:
$$\\text{Tr}(\\hat{P}_\\psi) = \\sum_n \\langle e_n | \\hat{P}_\\psi | e_n \\rangle = \\sum_n \\langle e_n | \\psi \\rangle \\langle \\psi | e_n \\rangle$$
Using the scalar commutativity $\\langle e_n|\\psi\\rangle \\langle\\psi|e_n\\rangle = \\langle\\psi|e_n\\rangle \\langle e_n|\\psi\\rangle$:
$$\\text{Tr}(\\hat{P}_\\psi) = \\langle \\psi | \\left( \\sum_n |e_n\\rangle\\langle e_n| \\right) | \\psi \\rangle = \\langle \\psi | \\hat{I} | \\psi \\rangle = \\langle \\psi | \\psi \\rangle = 1$$
Thus, the trace of any rank-1 projection operator is always identically 1.</p>`,
    tested: 'Properties and trace of quantum projection operators.',
    trap: 'Confusing the trace of the identity operator (which is dim(H)) with the trace of a single 1D projection operator (which is 1).'
  },
  {
    id: 'o.qm1.m3.02',
    course: 'qm1',
    sec: '3.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'Two normalized state vectors $|u\\rangle$ and $|v\\rangle$ satisfy $|\\langle u|v\\rangle|^2 = 1$. What must be true about these two states?',
    options: [
      { k: 'A', t: '$|u\\rangle$ and $|v\\rangle$ are mutually orthogonal.' },
      { k: 'B', t: '$|u\\rangle$ and $|v\\rangle$ represent the same physical state, differing at most by a global phase factor $e^{i\\theta}$.' },
      { k: 'C', t: 'The commutator of their projection operators $[\\hat{P}_u, \\hat{P}_v] \\ne 0$.' },
      { k: 'D', t: 'They span a two-dimensional subspace of the Hilbert space.' }
    ],
    answer: 'B',
    solution: `<p>By the Cauchy-Schwarz inequality, $|\\langle u|v\\rangle|^2 \\le \\langle u|u\\rangle \\langle v|v\\rangle = 1$.<br>
Equality $|\\langle u|v\\rangle|^2 = 1$ holds if and only if $|u\\rangle$ and $|v\\rangle$ are linearly dependent: $|u\\rangle = c |v\\rangle$.<br>
Since both are normalized, $|c| = 1$, so $c = e^{i\\theta}$ for some real phase $\\theta$.<br>
In quantum mechanics, state vectors differing only by a global phase represent the identical physical state.</p>`,
    tested: 'Equality condition in Cauchy-Schwarz inequality and quantum ray equivalence.',
    trap: 'Thinking that |u⟩ must equal |v⟩ identically with c = 1, ignoring the permissible global complex phase factor e^{iθ}.'
  },
  {
    id: 'o.qm1.m3.03',
    course: 'qm1',
    sec: '3.2',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'Which of the following combinations of position $\\hat{x}$ and momentum $\\hat{p}$ is strictly a <b>Hermitian operator</b>?',
    options: [
      { k: 'A', t: '$\\hat{x}\\hat{p}$' },
      { k: 'B', t: '$\\hat{p}\\hat{x}$' },
      { k: 'C', t: '$\\hat{x}\\hat{p} + \\hat{p}\\hat{x}$' },
      { k: 'D', t: '$\\hat{x}\\hat{p} - \\hat{p}\\hat{x}$' }
    ],
    answer: 'C',
    solution: `<p>Compute the Hermitian adjoint using $(\\hat{A}\\hat{B})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger$ and $\\hat{x}^\\dagger = \\hat{x}$, $\\hat{p}^\\dagger = \\hat{p}$:<br>
$(\\hat{x}\\hat{p})^\\dagger = \\hat{p}^\\dagger \\hat{x}^\\dagger = \\hat{p}\\hat{x} \\ne \\hat{x}\\hat{p}$ (neither A nor B is Hermitian).<br>
For option D: $(\\hat{x}\\hat{p} - \\hat{p}\\hat{x})^\\dagger = (i\\hbar \\hat{I})^\\dagger = -i\\hbar \\hat{I} = -(\\hat{x}\\hat{p} - \\hat{p}\\hat{x})$, which is <b>anti-Hermitian</b>.<br>
For option C: $(\\hat{x}\\hat{p} + \\hat{p}\\hat{x})^\\dagger = \\hat{p}\\hat{x} + \\hat{x}\\hat{p} = \\hat{x}\\hat{p} + \\hat{p}\\hat{x}$.<br>
Hence, the symmetric combination $\\hat{x}\\hat{p} + \\hat{p}\\hat{x}$ is strictly Hermitian.</p>`,
    tested: 'Hermitian adjoint of operator products and symmetrization rule.',
    trap: 'Selecting option D: the commutator [x, p] = iħ is anti-Hermitian, not Hermitian.'
  },
  {
    id: 'o.qm1.m3.04',
    course: 'qm1',
    sec: '3.2',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'Let $\\hat{A}$ and $\\hat{B}$ be two Hermitian operators on a Hilbert space. Which of the following statements are strictly <b>CORRECT</b>?',
    options: [
      { k: 'A', t: 'The commutator $[\\hat{A}, \\hat{B}]$ is anti-Hermitian: $[\\hat{A}, \\hat{B}]^\\dagger = -[\\hat{A}, \\hat{B}]$.' },
      { k: 'B', t: 'The operator $i[\\hat{A}, \\hat{B}]$ is Hermitian.' },
      { k: 'C', t: 'The operator product $\\hat{A}\\hat{B}$ is Hermitian if and only if $\\hat{A}$ and $\\hat{B}$ commute ($[\\hat{A}, \\hat{B}] = 0$).' },
      { k: 'D', t: 'The anticommutator $\\{\\hat{A}, \\hat{B}\\} = \\hat{A}\\hat{B} + \\hat{B}\\hat{A}$ is always Hermitian.' }
    ],
    answer: 'A,B,C,D',
    solution: `<p><b>All four statements are correct:</b><br>
<b>A:</b> $[\\hat{A}, \\hat{B}]^\\dagger = (\\hat{A}\\hat{B} - \\hat{B}\\hat{A})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger - \\hat{A}^\\dagger \\hat{B}^\\dagger = \\hat{B}\\hat{A} - \\hat{A}\\hat{B} = -[\\hat{A}, \\hat{B}]$.<br>
<b>B:</b> $(i[\\hat{A}, \\hat{B}])^\\dagger = -i [\\hat{A}, \\hat{B}]^\\dagger = -i(-[\\hat{A}, \\hat{B}]) = i[\\hat{A}, \\hat{B}]$.<br>
<b>C:</b> $(\\hat{A}\\hat{B})^\\dagger = \\hat{B}\\hat{A}$. For this to equal $\\hat{A}\\hat{B}$, we must have $\\hat{B}\\hat{A} = \\hat{A}\\hat{B}$, i.e., $[\\hat{A}, \\hat{B}] = 0$.<br>
<b>D:</b> $\\{\\hat{A}, \\hat{B}\\}^\\dagger = (\\hat{A}\\hat{B} + \\hat{B}\\hat{A})^\\dagger = \\hat{B}\\hat{A} + \\hat{A}\\hat{B} = \\{\\hat{A}, \\hat{B}\\}$.</p>`,
    tested: 'Adjoint properties of operator products, commutators, and anticommutators.',
    trap: 'Failing to check option B, overlooking that multiplying an anti-Hermitian operator by i yields a Hermitian operator.'
  },
  {
    id: 'o.qm1.m3.05',
    course: 'qm1',
    sec: '3.3',
    type: 'MCQ',
    marks: 2,
    neg: -0.66,
    negLabel: '−2/3',
    time: 90,
    prompt: 'What is the commutator $[\\hat{x}^2, \\hat{p}^2]$ in terms of position and momentum operators?',
    options: [
      { k: 'A', t: '$2i\\hbar (\\hat{x}\\hat{p} + \\hat{p}\\hat{x})$' },
      { k: 'B', t: '$4i\\hbar \\hat{x}\\hat{p}$' },
      { k: 'C', t: '$2i\\hbar \\hat{x}^2 \\hat{p}^2$' },
      { k: 'D', t: '$-2\\hbar^2$' }
    ],
    answer: 'A',
    solution: `<p>Use the Leibniz rule $[\\hat{A}, \\hat{B}\\hat{C}] = [\\hat{A}, \\hat{B}]\\hat{C} + \\hat{B}[\\hat{A}, \\hat{C}]$ with $\\hat{A} = \\hat{x}^2$:
$$[\\hat{x}^2, \\hat{p}^2] = [\\hat{x}^2, \\hat{p}]\\hat{p} + \\hat{p}[\\hat{x}^2, \\hat{p}]$$
Now use the power formula $[\\hat{x}^2, \\hat{p}] = 2i\\hbar \\hat{x}$:
$$[\\hat{x}^2, \\hat{p}^2] = (2i\\hbar \\hat{x})\\hat{p} + \\hat{p}(2i\\hbar \\hat{x}) = 2i\\hbar (\\hat{x}\\hat{p} + \\hat{p}\\hat{x})$$
Notice that because $\\hat{x}$ and $\\hat{p}$ do not commute, $\\hat{x}\\hat{p} + \\hat{p}\\hat{x} \\ne 2\\hat{x}\\hat{p}$.</p>`,
    tested: 'Nested commutator application using Leibniz product expansions.',
    trap: 'Assuming x̂ and p̂ commute to write xp + px = 2xp, which erroneously yields option B.'
  },
  {
    id: 'o.qm1.m3.06',
    course: 'qm1',
    sec: '3.3',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'Two operators $\\hat{A}$ and $\\hat{B}$ satisfy the commutation relation $[\\hat{A}, \\hat{B}] = 4i$. In a normalized quantum state $|\\psi\\rangle$, the expectation value of $\\hat{B}$ is $\\langle \\hat{B} \\rangle = 3$. Calculate the magnitude of the expectation value $|\\langle [\\hat{A}, \\hat{B}^2] \\rangle|$.',
    answer: '24',
    solution: `<p>Using the commutator product identity $[\\hat{A}, \\hat{B}\\hat{C}] = [\\hat{A}, \\hat{B}]\\hat{C} + \\hat{B}[\\hat{A}, \\hat{C}]$:
$$[\\hat{A}, \\hat{B}^2] = [\\hat{A}, \\hat{B}]\\hat{B} + \\hat{B}[\\hat{A}, \\hat{B}]$$
Since $[\\hat{A}, \\hat{B}] = 4i$ is a scalar (c-number), it commutes with $\\hat{B}$:
$$[\\hat{A}, \\hat{B}^2] = (4i)\\hat{B} + \\hat{B}(4i) = 8i \\hat{B}$$
Now take the expectation value:
$$\\langle [\\hat{A}, \\hat{B}^2] \\rangle = \\langle 8i \\hat{B} \\rangle = 8i \\langle \\hat{B} \\rangle = 8i(3) = 24i$$
The magnitude is:
$$|\\langle [\\hat{A}, \\hat{B}^2] \\rangle| = |24i| = 24$$</p>`,
    tested: 'Commutator of operator with powers and expectation value calculation.',
    trap: 'Differentiating B² as 2B without keeping track of the product rule on both sides of B.'
  },
  {
    id: 'o.qm1.m3.07',
    course: 'qm1',
    sec: '3.4',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'According to the Robertson uncertainty relation $\\Delta A \\, \\Delta B \\ge \\frac{1}{2}|\\langle [\\hat{A}, \\hat{B}] \\rangle|$, under what condition can both observables have simultaneously zero uncertainty ($\\Delta A = 0$ and $\\Delta B = 0$)?',
    options: [
      { k: 'A', t: 'Never; the uncertainty principle forbids simultaneous precision for any two observables.' },
      { k: 'B', t: 'If and only if the system is prepared in a simultaneous eigenstate of both $\\hat{A}$ and $\\hat{B}$.' },
      { k: 'C', t: 'Only in the macroscopic limit where $\\hbar \\to 0$.' },
      { k: 'D', t: 'Whenever the wave function is purely real.' }
    ],
    answer: 'B',
    solution: `<p>For any observable $\\hat{A}$, the variance $\\Delta A^2 = \\langle (\\hat{A} - \\langle A \\rangle)^2 \\rangle = 0$ if and only if $|\\psi\\rangle$ is an eigenstate of $\\hat{A}$.<br>
Similarly, $\\Delta B = 0$ if and only if $|\\psi\\rangle$ is an eigenstate of $\\hat{B}$.<br>
Therefore, $\\Delta A = 0$ and $\\Delta B = 0$ simultaneously if and only if the state $|\\psi\\rangle$ is a <b>simultaneous eigenstate</b> of both operators (which requires $\\langle [\\hat{A}, \\hat{B}] \\rangle = 0$ for that state).</p>`,
    tested: 'Physical meaning of zero quantum uncertainty and simultaneous eigenstates.',
    trap: 'Thinking uncertainty is non-zero for ALL observables; commuting observables (or compatible eigenstates) admit simultaneous zero dispersion.'
  },
  {
    id: 'o.qm1.m3.08',
    course: 'qm1',
    sec: '3.4',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'For a minimum uncertainty Gaussian wave packet, the position uncertainty is measured to be $\\Delta x = 5.00 \\times 10^{-11}\\text{ m}$. What is the momentum uncertainty $\\Delta p$ in units of $10^{-24}\\text{ kg}\\cdot\\text{m/s}$? (Take $\\hbar = 1.054 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$. Round to two decimal places, e.g. 1.05).',
    answer: '1.05',
    solution: `<p>For a minimum uncertainty wave packet:
$$\\Delta x \\, \\Delta p = \\frac{\\hbar}{2}$$
Therefore:
$$\\Delta p = \\frac{\\hbar}{2 \\Delta x} = \\frac{1.054 \\times 10^{-34}\\text{ J}\\cdot\\text{s}}{2 \\times 5.00 \\times 10^{-11}\\text{ m}} = \\frac{1.054 \\times 10^{-34}}{1.00 \\times 10^{-10}} = 1.054 \\times 10^{-24}\\text{ kg}\\cdot\\text{m/s}$$
Rounding to two decimal places gives 1.05.</p>`,
    tested: 'Heisenberg minimum uncertainty calculation for Gaussian states.',
    trap: 'Using ħ instead of ħ/2 in the minimum uncertainty product.'
  },
  {
    id: 'o.qm1.m3.09',
    course: 'qm1',
    sec: '3.5',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: `When an operator $\\hat{A}$ undergoes a unitary transformation $\\hat{A}' = \\hat{U} \\hat{A} \\hat{U}^\\dagger$ (where $\\hat{U}^\\dagger \\hat{U} = \\hat{I}$), which of the following quantities is <b>NOT</b> invariant?`,
    options: [
      { k: 'A', t: 'The eigenvalues of $\\hat{A}$' },
      { k: 'B', t: 'The trace $\\text{Tr}(\\hat{A})$' },
      { k: 'C', t: 'The determinant $\\det(\\hat{A})$' },
      { k: 'D', t: 'The eigenvectors of $\\hat{A}$' }
    ],
    answer: 'D',
    solution: `<p>A unitary similarity transformation represents a change of basis (a generalized rotation in Hilbert space).<br>
- The eigenvalues remain unchanged: if $\\hat{A}|v\\rangle = \\lambda|v\\rangle$, then $\\hat{A}'(\\hat{U}|v\\rangle) = \\lambda(\\hat{U}|v\\rangle)$.<br>
- The trace is invariant due to the cyclic property: $\\text{Tr}(\\hat{U}\\hat{A}\\hat{U}^\\dagger) = \\text{Tr}(\\hat{U}^\\dagger\\hat{U}\\hat{A}) = \\text{Tr}(\\hat{A})$.<br>
- The determinant is invariant: $\\det(\\hat{U}\\hat{A}\\hat{U}^\\dagger) = \\det(\\hat{U})\\det(\\hat{A})\\det(\\hat{U}^\\dagger) = \\det(\\hat{A})$.<br>
- However, the <b>eigenvectors are transformed</b> into $|v'\\rangle = \\hat{U}|v\\rangle$. Hence, the eigenvectors do NOT remain invariant.</p>`,
    tested: 'Invariance properties under unitary transformations in Hilbert space.',
    trap: 'Confusing the invariance of eigenvalues with the invariance of eigenvectors.'
  },
  {
    id: 'o.qm1.m3.10',
    course: 'qm1',
    sec: '3.5',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'Let $\\hat{T}(a) = \\exp(-i a \\hat{p} / \\hbar)$ be the spatial translation operator. Which of the following statements are strictly <b>CORRECT</b>?',
    options: [
      { k: 'A', t: '$\\hat{T}(a)$ is unitary: $\\hat{T}^\\dagger(a) = \\hat{T}(-a) = [\\hat{T}(a)]^{-1}$.' },
      { k: 'B', t: '$\\hat{T}(a)$ preserves the norm: $\\langle \\hat{T}(a)\\psi | \\hat{T}(a)\\psi \\rangle = \\langle \\psi | \\psi \\rangle$.' },
      { k: 'C', t: '$\\hat{T}^\\dagger(a) \\hat{x} \\hat{T}(a) = \\hat{x} + a\\hat{I}$.' },
      { k: 'D', t: '$\\hat{T}^\\dagger(a) \\hat{p} \\hat{T}(a) = \\hat{p}$.' }
    ],
    answer: 'A,B,C,D',
    solution: `<p><b>All statements are correct:</b><br>
<b>A & B:</b> Since $\\hat{p}^\\dagger = \\hat{p}$, $\\hat{T}^\\dagger(a) = e^{ia\\hat{p}/\\hbar} = \\hat{T}(-a)$. It is unitary and preserves vector norms.<br>
<b>C:</b> Applying the BCH formula with $\\hat{T}^\\dagger(a) = e^{ia\\hat{p}/\\hbar}$:
$$e^{ia\\hat{p}/\\hbar} \\hat{x} e^{-ia\\hat{p}/\\hbar} = \\hat{x} + \\left[ \\frac{ia}{\\hbar}\\hat{p}, \\hat{x} \\right] = \\hat{x} + \\frac{ia}{\\hbar}(-i\\hbar) = \\hat{x} + a$$
<b>D:</b> Since $\\hat{p}$ commutes with functions of itself ($[\\hat{p}, \\hat{T}(a)] = 0$), $\\hat{T}^\\dagger(a) \\hat{p} \\hat{T}(a) = \\hat{p} \\hat{T}^\\dagger(a) \\hat{T}(a) = \\hat{p}$.</p>`,
    tested: 'Translation operator unitarity, norm preservation, and transformations of x and p.',
    trap: 'Overlooking that momentum is invariant under spatial translations (momentum conservation in translationally invariant systems).'
  },
  {
    id: 'o.qm1.m3.11',
    course: 'qm1',
    sec: '3.6',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'What are the eigenvalues of the Pauli matrix $\\sigma_y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}$?',
    options: [
      { k: 'A', t: '$+i, -i$' },
      { k: 'B', t: '$+1, -1$' },
      { k: 'C', t: '$0, 1$' },
      { k: 'D', t: '$+1, +1$' }
    ],
    answer: 'B',
    solution: `<p>Compute the characteristic equation $\\det(\\sigma_y - \\lambda I) = 0$:
$$\\det \\begin{pmatrix} -\\lambda & -i \\\\ i & -\\lambda \\end{pmatrix} = (-\\lambda)(-\\lambda) - (-i)(i) = \\lambda^2 - (-i^2) = \\lambda^2 - 1 = 0$$
$$\\lambda^2 = 1 \\implies \\lambda = \\pm 1$$
Because $\\sigma_y$ is Hermitian ($\\sigma_y^\\dagger = \\sigma_y$), its eigenvalues must be real numbers, ruling out $\\pm i$.</p>`,
    tested: 'Eigenvalues of Pauli matrices and Hermiticity constraint.',
    trap: 'Selecting ±i due to the presence of i in the matrix elements; Hermitian matrices ALWAYS have real eigenvalues.'
  },
  {
    id: 'o.qm1.m3.12',
    course: 'qm1',
    sec: '3.6',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'A Hamiltonian in a 2D basis is represented by the matrix $H = \\begin{pmatrix} 5 & 2 \\\\ 2 & 2 \\end{pmatrix}$ in units of eV. What is the difference $(E_{\\text{max}} - E_{\\text{min}})$ between its two energy eigenvalues in eV?',
    answer: '5',
    solution: `<p>Solve the characteristic equation:
$$\\det(H - E I) = \\det \\begin{pmatrix} 5 - E & 2 \\\\ 2 & 2 - E \\end{pmatrix} = (5 - E)(2 - E) - 4 = E^2 - 7E + 10 - 4 = E^2 - 7E + 6 = 0$$
Factoring:
$$(E - 6)(E - 1) = 0 \\implies E_{\\text{max}} = 6\\text{ eV}, \\quad E_{\\text{min}} = 1\\text{ eV}$$
The difference is:
$$E_{\\text{max}} - E_{\\text{min}} = 6 - 1 = 5\\text{ eV}$$</p>`,
    tested: 'Eigenvalue computation for 2x2 Hermitian Hamiltonian matrix.',
    trap: 'Arithmetic errors in solving the quadratic equation.'
  },
  {
    id: 'o.qm1.m3.13',
    course: 'qm1',
    sec: '3.7',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: `For a smoothly differentiable function $f(x)$ that vanishes at infinity, what is the value of the integral $\\int_{-\\infty}^\\infty f(x) \\, \\delta'(x - a) \\, dx$, where $\\delta'(x)$ is the derivative of the Dirac delta function?`,
    options: [
      { k: 'A', t: '$f(a)$' },
      { k: 'B', t: "$f'(a)$" },
      { k: 'C', t: "$-f'(a)$" },
      { k: 'D', t: '$0$' }
    ],
    answer: 'C',
    solution: `<p>Integrate by parts with $u = f(x)$ and $dv = \\delta'(x - a) dx$ (so $v = \\delta(x - a)$):
$$\\int_{-\\infty}^\\infty f(x) \\delta'(x - a) dx = [f(x) \\delta(x - a)]_{-\\infty}^\\infty - \\int_{-\\infty}^\\infty f'(x) \\delta(x - a) dx$$
The boundary term vanishes, and using the sifting property of $\\delta(x - a)$:
$$= 0 - f'(a) = -f'(a)$$
Thus:
$$\\int_{-\\infty}^\\infty f(x) \\delta'(x - a) dx = -f'(a)$$</p>`,
    tested: 'Derivative of Dirac delta function and integration by parts.',
    trap: 'Forgetting the minus sign that arises from integration by parts (selecting +f\'(a) instead of -f\'(a)).'
  },
  {
    id: 'o.qm1.m3.14',
    course: 'qm1',
    sec: '3.7',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'Which of the following expressions are strictly <b>CORRECT</b> for continuous position and momentum representations in quantum mechanics?',
    options: [
      { k: 'A', t: `$\\langle x | x' \\rangle = \\delta(x - x')$` },
      { k: 'B', t: `$\\langle p | p' \\rangle = \\delta(p - p')$` },
      { k: 'C', t: '$\\langle x | p \\rangle = \\dfrac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}$' },
      { k: 'D', t: '$\\langle x | \\hat{p} | \\psi \\rangle = -i\\hbar \\dfrac{d\\psi}{dx}$ where $\\psi(x) = \\langle x|\\psi\\rangle$' }
    ],
    answer: 'A,B,C,D',
    solution: `<p><b>All four statements are foundational definitions of continuous representations:</b><br>
<b>A & B:</b> Continuous basis states are Dirac-orthonormal: $\\langle x|x'\\rangle = \\delta(x-x')$ and $\\langle p|p'\\rangle = \\delta(p-p')$.<br>
<b>C:</b> The overlap amplitude between a position eigenstate and a momentum eigenstate is a plane wave normalized by $\\frac{1}{\\sqrt{2\\pi\\hbar}}$.<br>
<b>D:</b> In the position representation, the action of the momentum operator $\\hat{p}$ on state ket $|\\psi\\rangle$ projects to $-i\\hbar \\frac{d\\psi}{dx}$.</p>`,
    tested: 'Continuous representation basis transformations, normalization, and momentum operator action.',
    trap: 'Missing the factor of 1/√(2πħ) in the plane wave transformation bracket ⟨x|p⟩.'
  }
);

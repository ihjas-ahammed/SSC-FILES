/* ══════════════════════════════════════════════════════════════════════════
   OBJECTIVE BANK — Module IV: The Quantum Harmonic Oscillator & 3D Potentials
   Verified against Zettili 2e Ch 4 & 6, Griffiths 3e Ch 2 & 4, and IIT JAM Physics patterns.
   Question Types: MCQ (Multiple Choice), MSQ (Multiple Select), NAT (Numerical Answer)
   Total Questions: 13
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.qm1.m4.01',
    course: 'qm1',
    sec: '4.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'What is the ground-state energy $E_0$ of a one-dimensional quantum harmonic oscillator with classical frequency $\\omega$?',
    options: [
      { k: 'A', t: '$0$' },
      { k: 'B', t: '$\\dfrac{1}{2}\\hbar\\omega$' },
      { k: 'C', t: '$\\hbar\\omega$' },
      { k: 'D', t: '$\\dfrac{3}{2}\\hbar\\omega$' }
    ],
    answer: 'B',
    solution: `<p>The quantized energy levels of the 1D harmonic oscillator are:
$$E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega, \\qquad n = 0, 1, 2, \\dots$$
The ground state corresponds to $n = 0$:
$$E_0 = \\left(0 + \\frac{1}{2}\\right)\\hbar\\omega = \\frac{1}{2}\\hbar\\omega$$
This non-zero value is the <b>zero-point energy</b> required by the Heisenberg uncertainty principle.</p>`,
    tested: 'Zero-point energy of 1D quantum harmonic oscillator.',
    trap: 'Selecting 0 by analogy with classical rest energy, or ħω by starting quantum numbers from n=1.'
  },
  {
    id: 'o.qm1.m4.02',
    course: 'qm1',
    sec: '4.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'For the number operator $\\hat{N} = \\hat{a}^\\dagger \\hat{a}$, what are the commutators $[\\hat{N}, \\hat{a}]$ and $[\\hat{N}, \\hat{a}^\\dagger]$?',
    options: [
      { k: 'A', t: '$[\\hat{N}, \\hat{a}] = +\\hat{a}, \\quad [\\hat{N}, \\hat{a}^\\dagger] = -\\hat{a}^\\dagger$' },
      { k: 'B', t: '$[\\hat{N}, \\hat{a}] = -\\hat{a}, \\quad [\\hat{N}, \\hat{a}^\\dagger] = +\\hat{a}^\\dagger$' },
      { k: 'C', t: '$[\\hat{N}, \\hat{a}] = 0, \\quad [\\hat{N}, \\hat{a}^\\dagger] = 0$' },
      { k: 'D', t: '$[\\hat{N}, \\hat{a}] = -\\hat{I}, \\quad [\\hat{N}, \\hat{a}^\\dagger] = +\\hat{I}$' }
    ],
    answer: 'B',
    solution: `<p>Using $[\\hat{A}\\hat{B}, \\hat{C}] = \\hat{A}[\\hat{B}, \\hat{C}] + [\\hat{A}, \\hat{C}]\\hat{B}$ and $[\\hat{a}, \\hat{a}^\\dagger] = 1$:
$$[\\hat{N}, \\hat{a}] = [\\hat{a}^\\dagger \\hat{a}, \\hat{a}] = [\\hat{a}^\\dagger, \\hat{a}]\\hat{a} + \\hat{a}^\\dagger [\\hat{a}, \\hat{a}] = (-1)\\hat{a} + 0 = -\\hat{a}$$
$$[\\hat{N}, \\hat{a}^\\dagger] = [\\hat{a}^\\dagger \\hat{a}, \\hat{a}^\\dagger] = \\hat{a}^\\dagger [\\hat{a}, \\hat{a}^\\dagger] + [\\hat{a}^\\dagger, \\hat{a}^\\dagger]\\hat{a} = \\hat{a}^\\dagger(1) + 0 = +\\hat{a}^\\dagger$$
This proves that $\\hat{a}$ lowers the eigenvalue by 1 and $\\hat{a}^\\dagger$ raises the eigenvalue by 1.</p>`,
    tested: 'Commutator algebra of number operator with ladder operators.',
    trap: 'Confusing the signs between the raising and lowering operators.'
  },
  {
    id: 'o.qm1.m4.03',
    course: 'qm1',
    sec: '4.1',
    type: 'NAT',
    marks: 1,
    neg: 0,
    negLabel: '0',
    time: 60,
    prompt: 'The creation operator acts on the normalized third excited state as $\\hat{a}^\\dagger |3\\rangle = c |4\\rangle$. What is the numerical value of the positive constant $c$?',
    answer: '2',
    solution: `<p>The general action of the creation operator on a normalized Fock state $|n\\rangle$ is:
$$\\hat{a}^\\dagger |n\\rangle = \\sqrt{n + 1} |n + 1\\rangle$$
For $n = 3$:
$$\\hat{a}^\\dagger |3\\rangle = \\sqrt{3 + 1} |4\\rangle = \\sqrt{4} |4\\rangle = 2 |4\\rangle$$
Therefore, $c = 2$.</p>`,
    tested: 'Creation operator normalization coefficient on Fock states.',
    trap: 'Using √n = √3 instead of √(n+1) = √4 = 2.'
  },
  {
    id: 'o.qm1.m4.04',
    course: 'qm1',
    sec: '4.1',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'For any stationary state $|n\\rangle$ of a 1D quantum harmonic oscillator, which of the following statements are strictly <b>CORRECT</b>?',
    options: [
      { k: 'A', t: 'The expectation values vanish: $\\langle n|\\hat{x}|n\\rangle = 0$ and $\\langle n|\\hat{p}|n\\rangle = 0$.' },
      { k: 'B', t: 'The quantum virial theorem holds: $\\langle T \\rangle = \\langle V \\rangle = \\dfrac{1}{2}E_n$.' },
      { k: 'C', t: 'The position-momentum uncertainty product is $\\Delta x \\, \\Delta p = \\left(n + \\dfrac{1}{2}\\right)\\hbar$.' },
      { k: 'D', t: 'The ground state $|0\\rangle$ is a minimum uncertainty state with $\\Delta x \\, \\Delta p = \\dfrac{\\hbar}{2}$.' }
    ],
    answer: 'A,B,C,D',
    solution: `<p><b>All four statements are foundational properties of the quantum harmonic oscillator:</b><br>
<b>A:</b> Odd parity of $\\hat{x}$ and $\\hat{p}$ makes $\\langle n|\\hat{x}|n\\rangle = \\langle n|\\hat{p}|n\\rangle = 0$.<br>
<b>B:</b> Because $V(x) = \\frac{1}{2}m\\omega^2 x^2$ is homogeneous quadratic, the virial theorem guarantees $\\langle T \\rangle = \\langle V \\rangle = \\frac{1}{2}E_n$.<br>
<b>C:</b> $\\Delta x = \\sqrt{\\frac{\\hbar}{2m\\omega}(2n+1)}$ and $\\Delta p = \\sqrt{\\frac{m\\hbar\\omega}{2}(2n+1)} \\implies \\Delta x \\Delta p = (n + 1/2)\\hbar$.<br>
<b>D:</b> For $n = 0$, $\\Delta x \\Delta p = (0 + 1/2)\\hbar = \\frac{\\hbar}{2}$, saturating the Heisenberg inequality.</p>`,
    tested: 'Expectation values, virial theorem, and uncertainty products of SHO stationary states.',
    trap: 'Thinking the virial theorem only applies to the ground state; it holds for all stationary states |n⟩.'
  },
  {
    id: 'o.qm1.m4.05',
    course: 'qm1',
    sec: '4.1',
    type: 'NAT',
    marks: 1,
    neg: 0,
    negLabel: '0',
    time: 60,
    prompt: 'When a quantum harmonic oscillator undergoes a radiative transition from the fourth excited state ($n = 4$) to the first excited state ($n = 1$), the emitted photon energy is $\\Delta E = k \\hbar\\omega$. What is the integer value of $k$?',
    answer: '3',
    solution: `<p>The energy levels are $E_n = (n + 1/2)\\hbar\\omega$.<br>
The energy difference between $n = 4$ and $n = 1$ is:
$$\\Delta E = E_4 - E_1 = \\left(4 + \\frac{1}{2}\\right)\\hbar\\omega - \\left(1 + \\frac{1}{2}\\right)\\hbar\\omega = (4 - 1)\\hbar\\omega = 3\\hbar\\omega$$
Therefore, $k = 3$.</p>`,
    tested: 'Energy differences between harmonic oscillator levels.',
    trap: 'Including the 1/2 term in the difference; the zero-point energy cancels identically.'
  },
  {
    id: 'o.qm1.m4.06',
    course: 'qm1',
    sec: '4.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'How does the parity of the harmonic oscillator wave functions $\\psi_n(x)$ behave under spatial reflection $x \\to -x$?',
    options: [
      { k: 'A', t: 'All states $\\psi_n(x)$ are purely even functions.' },
      { k: 'B', t: 'All states $\\psi_n(x)$ are purely odd functions.' },
      { k: 'C', t: '$\\psi_n(-x) = (-1)^n \\psi_n(x)$, alternating between even and odd.' },
      { k: 'D', t: '$\\psi_n(x)$ does not possess definite parity because the potential is asymmetric.' }
    ],
    answer: 'C',
    solution: `<p>Because the potential $V(-x) = \\frac{1}{2}m\\omega^2(-x)^2 = V(x)$ is symmetric under inversion, the Hamiltonian commutes with the parity operator $[\\hat{\\Pi}, \\hat{H}] = 0$.<br>
The wave function is proportional to $H_n(\\xi)e^{-\\xi^2/2}$. Since $H_n(-\\xi) = (-1)^n H_n(\\xi)$ and the Gaussian is even:
$$\\psi_n(-x) = (-1)^n \\psi_n(x)$$
Even $n$ states are symmetric (even), while odd $n$ states are antisymmetric (odd) with a node at $x = 0$.</p>`,
    tested: 'Parity of harmonic oscillator wave functions and Hermite polynomials.',
    trap: 'Thinking the ground state has odd parity; n=0 is an even function.'
  },
  {
    id: 'o.qm1.m4.07',
    course: 'qm1',
    sec: '4.1',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'Which of the following statements are strictly <b>CORRECT</b> for a coherent state $|\\alpha\\rangle$ of a harmonic oscillator?',
    options: [
      { k: 'A', t: 'It is an eigenstate of the annihilation operator: $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$ where $\\alpha \\in \\mathbb{C}$.' },
      { k: 'B', t: 'The probability of finding $n$ quanta follows a Poisson distribution with mean $\\bar{n} = |\\alpha|^2$.' },
      { k: 'C', t: 'It is a minimum uncertainty wave packet ($\Delta x \Delta p = \\hbar/2$) that oscillates without spreading or dispersing.' },
      { k: 'D', t: 'Different coherent states are mutually orthogonal: $\\langle \\alpha|\\beta\\rangle = 0$ for $\\alpha \\ne \\beta$.' }
    ],
    answer: 'A,B,C',
    solution: `<p><b>A, B, and C are correct:</b><br>
<b>A:</b> By definition, $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$.<br>
<b>B:</b> $P(n) = |\\langle n|\\alpha\\rangle|^2 = e^{-|\\alpha|^2}\\frac{|\\alpha|^{2n}}{n!}$ is a Poisson distribution.<br>
<b>C:</b> The wave packet maintains $\\Delta x \\Delta p = \\hbar/2$ and its Gaussian envelope shape indefinitely as it oscillates.<br>
<b>D is INCORRECT:</b> Coherent states are non-orthogonal (overcomplete): $|\\langle \\alpha|\\beta\\rangle|^2 = e^{-|\\alpha - \\beta|^2} > 0$.</p>`,
    tested: 'Properties of harmonic oscillator coherent states.',
    trap: 'Assuming coherent states form an orthogonal basis; they are overcomplete.'
  },
  {
    id: 'o.qm1.m4.08',
    course: 'qm1',
    sec: '4.2',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'Under what condition does the 3D Time-Independent Schrödinger Equation strictly separate into three independent 1D ordinary differential equations in Cartesian coordinates?',
    options: [
      { k: 'A', t: 'The potential energy depends only on the radial distance: $V(r) = V(\\sqrt{x^2+y^2+z^2})$.' },
      { k: 'B', t: 'The potential is a sum of single-coordinate potentials: $V(x,y,z) = V_x(x) + V_y(y) + V_z(z)$.' },
      { k: 'C', t: 'The wave function is spherically symmetric.' },
      { k: 'D', t: 'The kinetic energy is zero.' }
    ],
    answer: 'B',
    solution: `<p>The Laplacian in Cartesian coordinates is additive: $\\nabla^2 = \\partial_x^2 + \\partial_y^2 + \\partial_z^2$.<br>
Separation of variables $\\psi(x,y,z) = X(x)Y(y)Z(z)$ succeeds if and only if the potential is similarly additive:
$$V(x,y,z) = V_x(x) + V_y(y) + V_z(z)$$
This allows the Hamiltonian to split into $\\hat{H} = \\hat{H}_x + \\hat{H}_y + \\hat{H}_z$ where each component acts on a single coordinate.</p>`,
    tested: 'Separation of variables in 3D Cartesian coordinates.',
    trap: 'Selecting Option A: central potentials separate in spherical coordinates, not Cartesian.'
  },
  {
    id: 'o.qm1.m4.09',
    course: 'qm1',
    sec: '4.3',
    type: 'NAT',
    marks: 1,
    neg: 0,
    negLabel: '0',
    time: 60,
    prompt: 'For a particle confined inside a 3D cubic box of side $L$, the ground-state energy is $E_{\\text{ground}} = c \\left( \\frac{\\pi^2 \\hbar^2}{2m L^2} \\right)$. What is the integer value of $c$?',
    answer: '3',
    solution: `<p>The energy eigenvalues for a cubic box are:
$$E_{n_x, n_y, n_z} = \\frac{\\pi^2 \\hbar^2}{2m L^2}(n_x^2 + n_y^2 + n_z^2), \\qquad n_x, n_y, n_z = 1, 2, 3, \\dots$$
The lowest energy corresponds to $n_x = 1, n_y = 1, n_z = 1$:
$$E_{1,1,1} = \\frac{\\pi^2 \\hbar^2}{2m L^2}(1^2 + 1^2 + 1^2) = 3 \\left( \\frac{\\pi^2 \\hbar^2}{2m L^2} \\right)$$
Therefore, $c = 3$.</p>`,
    tested: 'Ground state energy calculation for 3D cubic potential well.',
    trap: 'Setting nx=ny=nz=0, which gives zero energy (unphysical as the wave function vanishes identically).'
  },
  {
    id: 'o.qm1.m4.10',
    course: 'qm1',
    sec: '4.3',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'What is the degree of degeneracy of the <b>first excited state</b> of a particle confined in a 3D cubic potential box of edge length $L$?',
    options: [
      { k: 'A', t: '1 (Non-degenerate)' },
      { k: 'B', t: '2' },
      { k: 'C', t: '3' },
      { k: 'D', t: '6' }
    ],
    answer: 'C',
    solution: `<p>The ground state is $(1,1,1)$ with energy $3 E_1$.<br>
The first excited state corresponds to incrementing one quantum number to 2:<br>
The allowed combinations are $(2,1,1)$, $(1,2,1)$, and $(1,1,2)$.<br>
All three states have energy $E = (2^2 + 1^2 + 1^2)E_1 = 6 E_1$.<br>
Thus, the first excited state is <b>3-fold degenerate ($g = 3$)</b>.</p>`,
    tested: 'Degeneracy of first excited state in 3D cubic well.',
    trap: 'Selecting 6 by confusing (2,1,1) with a state of three distinct integers like (1,2,3).'
  },
  {
    id: 'o.qm1.m4.11',
    course: 'qm1',
    sec: '4.4',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'Calculate the degree of degeneracy $g_3$ of the <b>third excited state</b> ($N = 3$) of a three-dimensional isotropic harmonic oscillator.',
    answer: '10',
    solution: `<p>The degeneracy of the $N$-th energy level of a 3D isotropic harmonic oscillator is:
$$g_N = \\frac{(N + 1)(N + 2)}{2}$$
For the third excited state ($N = 3$):
$$g_3 = \\frac{(3 + 1)(3 + 2)}{2} = \\frac{4 \\times 5}{2} = \\frac{20}{2} = 10$$
The 10 degenerate states are:
- 3 states with three quanta in one mode: $(3,0,0), (0,3,0), (0,0,3)$
- 6 states with two quanta in one mode, one in another: permutations of $(2,1,0)$
- 1 state with one quantum in each mode: $(1,1,1)$
Sum: $3 + 6 + 1 = 10$.</p>`,
    tested: 'Degeneracy formula for 3D isotropic harmonic oscillator.',
    trap: 'Using the 2D oscillator formula g_N = N + 1 = 4 instead of the 3D formula.'
  },
  {
    id: 'o.qm1.m4.12',
    course: 'qm1',
    sec: '4.4',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'What is the ground-state energy $E_0$ of a three-dimensional isotropic harmonic oscillator with frequency $\\omega$?',
    options: [
      { k: 'A', t: '$\\dfrac{1}{2}\\hbar\\omega$' },
      { k: 'B', t: '$\\hbar\\omega$' },
      { k: 'C', t: '$\\dfrac{3}{2}\\hbar\\omega$' },
      { k: 'D', t: '$3\\hbar\\omega$' }
    ],
    answer: 'C',
    solution: `<p>In 3D, the Hamiltonian is the sum of three independent 1D oscillators:
$$E_{n_x, n_y, n_z} = \\left(n_x + \\frac{1}{2}\\right)\\hbar\\omega + \\left(n_y + \\frac{1}{2}\\right)\\hbar\\omega + \\left(n_z + \\frac{1}{2}\\right)\\hbar\\omega = \\left(N + \\frac{3}{2}\\right)\\hbar\\omega$$
For the ground state ($N = 0$, i.e. $n_x = n_y = n_z = 0$):
$$E_0 = \\left(0 + \\frac{3}{2}\\right)\\hbar\\omega = \\frac{3}{2}\\hbar\\omega$$
Each spatial dimension contributes $\\frac{1}{2}\\hbar\\omega$ to the total zero-point energy.</p>`,
    tested: 'Zero-point energy of 3D isotropic quantum harmonic oscillator.',
    trap: 'Using the 1D zero-point energy 1/2 ħω instead of 3 × 1/2 ħω.'
  },
  {
    id: 'o.qm1.m4.13',
    course: 'qm1',
    sec: '4.4',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'For a 3D isotropic harmonic oscillator, what is the ratio of the energy of the second excited state ($N = 2$) to the energy of the ground state ($N = 0$)? (Enter your answer as a decimal rounded to three decimal places, e.g. 2.333).',
    answer: '2.333',
    solution: `<p>The energy levels are $E_N = \\left(N + \\frac{3}{2}\\right)\\hbar\\omega$.<br>
Ground state ($N = 0$): $E_0 = \\frac{3}{2}\\hbar\\omega$.<br>
Second excited state ($N = 2$): $E_2 = \\left(2 + \\frac{3}{2}\\right)\\hbar\\omega = \\frac{7}{2}\\hbar\\omega$.<br>
The ratio is:
$$\\frac{E_2}{E_0} = \\frac{\\frac{7}{2}\\hbar\\omega}{\\frac{3}{2}\\hbar\\omega} = \\frac{7}{3} \\approx 2.333$$</p>`,
    tested: 'Energy ratios of excited states in 3D isotropic harmonic oscillator.',
    trap: 'Computing the ratio of quantum numbers 2/0 or using 1D energies (5/2)/(1/2) = 5.'
  }
);

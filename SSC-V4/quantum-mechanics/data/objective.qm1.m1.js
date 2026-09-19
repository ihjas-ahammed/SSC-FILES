/* ══════════════════════════════════════════════════════════════════════════
   OBJECTIVE BANK — Module I: The Wave Function (OMR MCQ / MSQ / NAT)
   Verified against Griffiths 3e and IIT JAM Physics exam patterns.
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.qm1.m1.01',
    course: 'qm1',
    sec: '1.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'The Time-Dependent Schrödinger Equation for a particle of mass $m$ in a potential $V(x,t)$ is first-order in time and second-order in space. Which of the following is a direct mathematical consequence of this structure?',
    options: [
      { k: 'A', t: 'Two initial conditions, $\\Psi(x,0)$ and $\\frac{\\partial \\Psi}{\\partial t}(x,0)$, are required to determine future time evolution.' },
      { k: 'B', t: 'A single snapshot $\\Psi(x,0)$ completely and uniquely fixes $\\Psi(x,t)$ for all $t > 0$.' },
      { k: 'C', t: 'The wave function must always be a purely real function of space and time.' },
      { k: 'D', t: 'The spatial derivative $\\frac{\\partial \\Psi}{\\partial x}$ is unrestricted and can have arbitrary discontinuities anywhere.' }
    ],
    answer: 'B',
    solution: '<p>Because the differential equation is <b>first-order in time</b> ($\\frac{\\partial \\Psi}{\\partial t}$), the Cauchy-Kowalevski theorem guarantees that specifying $\\Psi(x,0)$ at an initial time $t=0$ uniquely determines $\\Psi(x,t)$ for all subsequent times $t > 0$. Newtonian mechanics requires two initial conditions ($x(0)$ and $\\dot{x}(0)$) because Newton’s second law is second-order in time.</p>',
    tested: 'First-order time structure of the Schrödinger equation and quantum determinism.',
    trap: 'Confusing classical mechanics (requiring position AND velocity) with quantum mechanics (requiring only the state Ψ(x,0)).',
    twist: {
      q: 'Why does the wave function have to be continuous in space for any finite potential?',
      a: 'Because the equation is second-order in space; if Ψ were discontinuous, ∂²Ψ/∂x² would contain derivatives of delta functions, which cannot be balanced by a finite potential V.'
    },
    tests: ['c.1.1.2', 'c.1.1.3']
  },
  {
    id: 'o.qm1.m1.02',
    course: 'qm1',
    sec: '1.2',
    type: 'MCQ',
    marks: 2,
    neg: -0.66,
    negLabel: '−2/3',
    time: 90,
    prompt: 'A particle is described by the normalized 1D wave function: $$\\Psi(x) = \\begin{cases} \\sqrt{\\dfrac{2}{L}} \\sin\\left(\\dfrac{\\pi x}{L}\\right), & 0 \\le x \\le L \\\\[6pt] 0, & \\text{otherwise} \\end{cases}$$ What is the probability of detecting the particle in the left-hand quarter of the well, i.e., in the interval $0 \\le x \\le L/4$?',
    options: [
      { k: 'A', t: '$\\dfrac{1}{4}$' },
      { k: 'B', t: '$\\dfrac{1}{4} - \\dfrac{1}{2\\pi} \\approx 0.091$' },
      { k: 'C', t: '$\\dfrac{1}{4} - \\dfrac{1}{\\pi} \\approx -0.068$' },
      { k: 'D', t: '$\\dfrac{1}{2}$' }
    ],
    answer: 'B',
    solution: '<p>By Born\'s rule, the probability is: $$P = \\int_0^{L/4} |\\Psi(x)|^2 dx = \\frac{2}{L} \\int_0^{L/4} \\sin^2\\left(\\frac{\\pi x}{L}\\right) dx$$ Use the half-angle identity $\\sin^2\\theta = \\frac{1 - \\cos(2\\theta)}{2}$: $$P = \\frac{2}{L} \\int_0^{L/4} \\frac{1 - \\cos(2\\pi x / L)}{2} dx = \\frac{1}{L} \\left[ x - \\frac{L}{2\\pi} \\sin\\left(\\frac{2\\pi x}{L}\\right) \\right]_0^{L/4}$$ At $x = L/4$, the sine argument is $2\\pi(L/4)/L = \\pi/2$, and $\\sin(\\pi/2) = 1$: $$P = \\frac{1}{L} \\left( \\frac{L}{4} - \\frac{L}{2\\pi} \\right) = \\frac{1}{4} - \\frac{1}{2\\pi} \\approx 0.25 - 0.159 = 0.091$$</p>',
    tested: "Born's statistical interpretation and probability calculation.",
    trap: 'Assuming probability is uniformly distributed (getting 1/4). The wave function vanishes at the wall (x=0), so the probability density near the edge is much smaller than in the center.',
    twist: {
      q: 'What is the probability in the middle half [L/4, 3L/4]?',
      a: 'P = 1/2 + 1/π ≈ 0.818.'
    },
    tests: ['c.1.2.1']
  },
  {
    id: 'o.qm1.m1.03',
    course: 'qm1',
    sec: '1.4',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'A particle is in a state with wave function $\\psi(x) = C e^{-2 |x|}$ where $x \\in (-\\infty, \\infty)$. What is the numerical value of the normalization constant $C^2$ (rounded to the nearest integer)?',
    answer: '4',
    solution: '<p>The normalization condition requires: $$1 = \\int_{-\\infty}^{\\infty} |\\psi(x)|^2 dx = C^2 \\int_{-\\infty}^{\\infty} e^{-4|x|} dx$$ By even symmetry: $$1 = 2 C^2 \\int_0^{\\infty} e^{-4x} dx = 2 C^2 \\left[ \\frac{e^{-4x}}{-4} \\right]_0^{\\infty} = 2 C^2 \\left(\\frac{1}{4}\\right) = \\frac{C^2}{2} \\implies C^2 = 4$$ Thus $C = 2$.</p>',
    tested: 'Normalization of exponential wave functions.',
    trap: 'Forgetting to double the decay exponent when squaring: |e^{-2|x|}|² = e^{-4|x|}, not e^{-2|x|}.',
    tests: ['c.1.4.1']
  },
  {
    id: 'o.qm1.m1.04',
    course: 'qm1',
    sec: '1.5',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'If a particle is in an arbitrary normalizable state with a purely real spatial wave function $\\psi(x) \\in \\mathbb{R}$, what is the expectation value of its linear momentum $\\langle p \\rangle$?',
    options: [
      { k: 'A', t: '$\\hbar / 2$' },
      { k: 'B', t: '$-i\\hbar$' },
      { k: 'C', t: '$0$' },
      { k: 'D', t: 'It depends on the specific shape of the potential $V(x)$' }
    ],
    answer: 'C',
    solution: '<p>The momentum expectation value is: $$\\langle p \\rangle = \\int_{-\\infty}^{\\infty} \\psi^*(x) \\left(-i\\hbar \\frac{d}{dx}\\right) \\psi(x) \\, dx = -i\\hbar \\int_{-\\infty}^{\\infty} \\psi(x) \\frac{d\\psi}{dx} \\, dx$$ Note that $\\psi \\frac{d\\psi}{dx} = \\frac{1}{2}\\frac{d(\\psi^2)}{dx}$. Therefore: $$\\langle p \\rangle = -\\frac{i\\hbar}{2} \\int_{-\\infty}^{\\infty} \\frac{d(\\psi^2)}{dx} \\, dx = -\\frac{i\\hbar}{2} [\\psi(x)^2]_{-\\infty}^{\\infty}$$ For any normalizable wave function, $\\psi(x) \\to 0$ as $x \\to \\pm\\infty$. Hence: $$\\langle p \\rangle = 0$$ Any state with non-zero average momentum must have a non-trivial complex phase factor (such as $e^{ikx}$).</p>',
    tested: 'Momentum operator acting on real wave functions.',
    trap: 'Thinking the particle cannot be moving. The expectation value ⟨p⟩ = 0 means the particle is equally likely to be moving left as right (like a standing wave).'
  },
  {
    id: 'o.qm1.m1.05',
    course: 'qm1',
    sec: '1.5',
    type: 'MCQ',
    marks: 2,
    neg: -0.66,
    negLabel: '−2/3',
    time: 90,
    prompt: 'For a particle of mass $m$ described by wave function $\\Psi(x,t)$, which of the following is the correct expression for the 1D quantum mechanical probability current density $J(x,t)$?',
    options: [
      { k: 'A', t: '$J = -\\dfrac{i\\hbar}{m} |\\Psi|^2$' },
      { k: 'B', t: '$J = \\dfrac{\\hbar}{2mi} \\left( \\Psi^* \\dfrac{\\partial \\Psi}{\\partial x} - \\Psi \\dfrac{\\partial \\Psi^*}{\\partial x} \\right)$' },
      { k: 'C', t: '$J = \\dfrac{\\hbar}{2m} \\left( \\Psi^* \\dfrac{\\partial \\Psi}{\\partial x} + \\Psi \\dfrac{\\partial \\Psi^*}{\\partial x} \\right)$' },
      { k: 'D', t: '$J = \\dfrac{\\hbar}{mi} \\left( \\Psi^* \\dfrac{\\partial \\Psi}{\\partial x} - \\Psi \\dfrac{\\partial \\Psi^*}{\\partial x} \\right)$' }
    ],
    answer: 'B',
    solution: '<p>The probability current density derived from the continuity equation $\\frac{\\partial \\rho}{\\partial t} + \\frac{\\partial J}{\\partial x} = 0$ is: $$J(x,t) = \\frac{\\hbar}{2mi}\\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x} \\right) = \\frac{\\hbar}{m}\\text{Im}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x}\\right)$$ This guarantees that $J$ is strictly real.</p>',
    tested: 'Probability current density and continuity equation.',
    trap: 'Selecting option C (with a plus sign), which gives the derivative of probability density ∂|Ψ|²/∂x rather than probability flux.',
    tests: ['c.1.5.4']
  },
  {
    id: 'o.qm1.m1.06',
    course: 'qm1',
    sec: '1.5',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'Evaluate the commutator $[\\hat{x}^2, \\hat{p}]$, where $\\hat{x}$ is the position operator and $\\hat{p} = -i\\hbar \\frac{d}{dx}$ is the momentum operator.',
    options: [
      { k: 'A', t: '$2i\\hbar \\hat{x}$' },
      { k: 'B', t: '$-2i\\hbar \\hat{x}$' },
      { k: 'C', t: '$i\\hbar$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'A',
    solution: '<p>Use the commutator identity $[A B, C] = A[B, C] + [A, C]B$: $$[\\hat{x}^2, \\hat{p}] = [\\hat{x}\\hat{x}, \\hat{p}] = \\hat{x}[\\hat{x}, \\hat{p}] + [\\hat{x}, \\hat{p}]\\hat{x}$$ Since $[\\hat{x}, \\hat{p}] = i\\hbar$ is a scalar constant that commutes with $\\hat{x}$: $$[\\hat{x}^2, \\hat{p}] = \\hat{x}(i\\hbar) + (i\\hbar)\\hat{x} = 2i\\hbar \\hat{x}$$</p>',
    tested: 'Commutator algebra with position and momentum.',
    trap: 'Reversing the order and obtaining -2iħ x (which is the value of [p̂, x̂²]).',
    tests: ['c.1.5.3']
  },
  {
    id: 'o.qm1.m1.07',
    course: 'qm1',
    sec: '1.6',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 100,
    prompt: 'Which of the following statements about the Heisenberg Uncertainty Principle $\\sigma_x \\sigma_p \\ge \\hbar/2$ are TRUE? (Select all that apply.)',
    options: [
      { k: 'A', t: 'The minimum uncertainty bound $\\sigma_x \\sigma_p = \\hbar/2$ is achieved by Gaussian wave packets.' },
      { k: 'B', t: 'The uncertainty relation is caused by physical disturbances introduced by clumsy experimental apparatus.' },
      { k: 'C', t: 'A quantum state cannot simultaneously have zero variance in position ($\\sigma_x = 0$) and finite variance in momentum ($\\sigma_p < \\infty$).' },
      { k: 'D', t: 'For any stationary state of a 1D harmonic oscillator, $\\sigma_x \\sigma_p \\ge \\hbar/2$.' }
    ],
    answer: ['A', 'C', 'D'],
    solution: '<p><b>(A) True:</b> Gaussian wave packets uniquely satisfy the equality $\\sigma_x \\sigma_p = \\hbar/2$.<br><b>(B) False:</b> The uncertainty principle is a fundamental wave-mechanical property arising from the Fourier transform duality between $x$ and $k = p/\\hbar$, independent of measurement apparatus.<br><b>(C) True:</b> If $\\sigma_x = 0$, then $\\sigma_p \\ge \\hbar/(2\\sigma_x) \\to \\infty$, which is non-physical.<br><b>(D) True:</b> The ground state of the SHO has $\\sigma_x \\sigma_p = \\hbar/2$, while excited states have $\\sigma_x \\sigma_p = (n + 1/2)\\hbar > \\hbar/2$.</p>',
    tested: 'Heisenberg uncertainty principle fundamentals and wave mechanics.',
    trap: 'Selecting B (the classical observer-effect misconception).',
    tests: ['c.1.6.1']
  },
  {
    id: 'o.qm1.m1.08',
    course: 'qm1',
    sec: '1.6',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'For a particle of mass $m$ in the ground state of a 1D quantum harmonic oscillator, the position variance is $\\sigma_x^2 = \\dfrac{\\hbar}{2m\\omega}$ and the momentum variance is $\\sigma_p^2 = \\dfrac{m\\hbar\\omega}{2}$. What is the product $\\sigma_x \\sigma_p$ in units of $\\hbar$ (as a decimal)?',
    answer: '0.5',
    solution: '<p>Multiply the two variances: $$\\sigma_x^2 \\sigma_p^2 = \\left(\\frac{\\hbar}{2m\\omega}\\right) \\left(\\frac{m\\hbar\\omega}{2}\\right) = \\frac{\\hbar^2}{4}$$ Taking the square root: $$\\sigma_x \\sigma_p = \\frac{\\hbar}{2} = 0.5 \\, \\hbar$$</p>',
    tested: 'Ground state minimum uncertainty product.',
    trap: 'Writing 1 instead of 0.5 (confusing ħ with ħ/2).',
    tests: ['c.1.6.1']
  },
  {
    id: 'o.qm1.m1.09',
    course: 'qm1',
    sec: '1.4',
    type: 'MCQ',
    marks: 2,
    neg: -0.66,
    negLabel: '−2/3',
    time: 90,
    prompt: 'Under what condition does the rate of change of total probability vanish, $\\frac{d}{dt} \\int_{-\\infty}^\\infty |\\Psi(x,t)|^2 dx = 0$?',
    options: [
      { k: 'A', t: 'Only when the wave function is an eigenstate of the Hamiltonian.' },
      { k: 'B', t: 'Whenever the potential $V(x,t)$ is real and the wave function is square-integrable.' },
      { k: 'C', t: 'Only when the potential $V(x)$ is strictly independent of time.' },
      { k: 'D', t: 'Only for free particles ($V = 0$).' }
    ],
    answer: 'B',
    solution: '<p>In the proof of preservation of normalization, the potential terms cancel in $\\Psi^* \\frac{\\partial \\Psi}{\\partial t} + \\frac{\\partial \\Psi^*}{\\partial t}\\Psi$ because $\\frac{i}{\\hbar}V\\Psi^*\\Psi - \\frac{i}{\\hbar}V^*\\Psi^*\\Psi = 0$ if and only if $V = V^*$ (i.e. $V$ is real). Even if $V(x,t)$ depends explicitly on time, probability remains strictly conserved, provided $V$ is real and $\\Psi \\to 0$ at infinity.</p>',
    tested: 'Conditions for conservation of quantum probability.',
    trap: 'Thinking the potential must be time-independent. Time-dependent potentials can transfer energy to the system, but they NEVER change the total probability (the particle cannot vanish).'
  },
  {
    id: 'o.qm1.m1.10',
    course: 'qm1',
    sec: '1.5',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'According to Ehrenfest\'s theorem, the time derivative of the momentum expectation value is $\\frac{d\\langle p \\rangle}{dt} = \\langle -\\frac{\\partial V}{\\partial x} \\rangle$. Under which of the following potentials does the centroid of a wave packet follow the EXACT classical trajectory ($m\\frac{d^2\\langle x \\rangle}{dt^2} = F(\\langle x \\rangle)$)?',
    options: [
      { k: 'A', t: 'Harmonic oscillator potential $V(x) = \\frac{1}{2}k x^2$' },
      { k: 'B', t: 'Lennard-Jones potential $V(x) = 4\\epsilon [(\\sigma/x)^{12} - (\\sigma/x)^6]$' },
      { k: 'C', t: 'Coulomb potential $V(x) = -e^2/|x|$' },
      { k: 'D', t: 'Anharmonic potential $V(x) = \\frac{1}{2}k x^2 + \\lambda x^4$' }
    ],
    answer: 'A',
    solution: '<p>For the harmonic oscillator, the force is linear: $F(x) = -\\frac{\\partial V}{\\partial x} = -k x$. Therefore: $$\\langle F(x) \\rangle = \\langle -k x \\rangle = -k \\langle x \\rangle = F(\\langle x \\rangle)$$ The expectation value of the force equals the force at the expectation value of position! For non-linear potentials (like $x^4$ or $1/x$), Taylor expanding $F(x)$ about $\\langle x \\rangle$ introduces corrections proportional to the variance $\\sigma_x^2$, causing the quantum wave packet to diverge from the classical path.</p>',
    tested: "Ehrenfest's theorem and limits of classical correspondence.",
    trap: 'Assuming Ehrenfest’s theorem guarantees classical trajectories for all potentials. It does so only when the force is linear in x.'
  }
);

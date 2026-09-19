/* ══════════════════════════════════════════════════════════════════════════
   LEVEL 4 · IIT JAM Physics (JAM PH) Past Paper Questions
   Quantum Mechanics I · Module I: The Wave Function
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof PYQ === 'undefined') { var PYQ = []; }

PYQ.push(
  {
    id: 'p.jam.ph.2024.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2024,
    paper: 'PH',
    qno: 14,
    marks: 2,
    neg: -0.66,
    sec: '1.5',
    tests: ['c.1.5.4'],
    title: 'Probability Current Density for Opposing Plane Waves',
    type: 'MCQ',
    prompt: `<p>A particle of mass $m$ is described by the 1D spatial wave function:
$$\\psi(x) = A e^{i k x} + B e^{-i k x}$$
where $A$ and $B$ are complex amplitudes and $k$ is a positive real wave number. What is the probability current density $J$ associated with this wave function?</p>`,
    options: [
      { k: 'A', t: '$J = \\dfrac{\\hbar k}{m} (|A|^2 + |B|^2)$' },
      { k: 'B', t: '$J = \\dfrac{\\hbar k}{m} (|A|^2 - |B|^2)$' },
      { k: 'C', t: '$J = \\dfrac{\\hbar k}{m} (|A| - |B|)^2$' },
      { k: 'D', t: '$J = 0$' }
    ],
    answer: 'B',
    solution: `<p>The 1D probability current density is given by:
$$J = \\frac{\\hbar}{2mi} \\left( \\psi^* \\frac{d\\psi}{dx} - \\psi \\frac{d\\psi^*}{dx} \\right) = \\frac{\\hbar}{m} \\text{Im}\\left( \\psi^* \\frac{d\\psi}{dx} \\right)$$
Compute the derivative:
$$\\frac{d\\psi}{dx} = ik (A e^{ikx} - B e^{-ikx})$$
Multiply by $\\psi^* = A^* e^{-ikx} + B^* e^{ikx}$:
$$\\psi^* \\frac{d\\psi}{dx} = (A^* e^{-ikx} + B^* e^{ikx}) \\cdot ik (A e^{ikx} - B e^{-ikx}) = ik \\left( |A|^2 - |B|^2 - A^* B e^{-2ikx} + B^* A e^{2ikx} \\right)$$
Notice that $B^* A e^{2ikx} - A^* B e^{-2ikx} = 2i \\, \\text{Im}(B^* A e^{2ikx})$ is purely imaginary.<br>
Multiplying by $ik$ gives a purely real number: $ik(2i \\dots) = -2k \\dots$, which has zero imaginary part.<br>
The leading term $ik(|A|^2 - |B|^2)$ is purely imaginary with $\\text{Im}[ik(|A|^2 - |B|^2)] = k(|A|^2 - |B|^2)$.<br>
Therefore:
$$J = \\frac{\\hbar}{m} \\text{Im}\\left(\\psi^* \\frac{d\\psi}{dx}\\right) = \\frac{\\hbar k}{m} (|A|^2 - |B|^2)$$
<b>Physical Meaning:</b> The total probability current is simply the forward current carried by $A$ ($+\\frac{\\hbar k}{m}|A|^2$) minus the backward current carried by $B$ ($-\\frac{\\hbar k}{m}|B|^2$). Interference terms carry no net spatial flux!</p>`,
    tested: 'Probability current density calculation for wave superpositions in 1D.',
    trap: 'Selecting option A (adding magnitudes), which confuses probability density with directional probability flux.'
  },
  {
    id: 'p.jam.ph.2023.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2023,
    paper: 'PH',
    qno: 8,
    marks: 1,
    neg: -0.33,
    sec: '1.5',
    tests: ['c.1.5.2'],
    title: 'Linear Momentum Expectation Value of a Real Wave Function',
    type: 'MCQ',
    prompt: `<p>If the one-dimensional spatial wave function $\\psi(x)$ of a bound particle is purely real and normalizable, what is the expectation value of the linear momentum $\\langle p \\rangle$?</p>`,
    options: [
      { k: 'A', t: '$\\langle p \\rangle = 0$' },
      { k: 'B', t: '$\\langle p \\rangle = \\hbar / 2$' },
      { k: 'C', t: '$\\langle p \\rangle = -i\\hbar$' },
      { k: 'D', t: 'It depends on the explicit form of the potential $V(x)$' }
    ],
    answer: 'A',
    solution: `<p>The expectation value of momentum is:
$$\\langle p \\rangle = \\int_{-\\infty}^{\\infty} \\psi^*(x) \\left(-i\\hbar \\frac{d}{dx}\\right) \\psi(x) \\, dx$$
Because $\\psi(x)$ is purely real, $\\psi^*(x) = \\psi(x)$:
$$\\langle p \\rangle = -i\\hbar \\int_{-\\infty}^{\\infty} \\psi(x) \\frac{d\\psi}{dx} \\, dx = -\\frac{i\\hbar}{2} \\int_{-\\infty}^{\\infty} \\frac{d(\\psi^2)}{dx} \\, dx = -\\frac{i\\hbar}{2} [\\psi^2(x)]_{-\\infty}^{\\infty}$$
For any normalizable wave function, $\\psi(x) \\to 0$ as $x \\to \\pm\\infty$, so the boundary evaluation is $0 - 0 = 0$.<br>
Therefore:
$$\\langle p \\rangle = 0$$
Hence, any bound state with a real wave function has zero average linear momentum.</p>`,
    tested: 'Hermiticity of momentum operator and vanishing of momentum for real wave functions.',
    trap: 'Thinking the potential V(x) determines ⟨p⟩; the mathematical property holds identically for any normalizable real wave function.'
  },
  {
    id: 'p.jam.ph.2022.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2022,
    paper: 'PH',
    qno: 33,
    marks: 2,
    neg: 0,
    sec: '1.4',
    tests: ['c.1.4.1'],
    title: 'Normalization Constant for a Semi-Infinite Wave Function',
    type: 'NAT',
    prompt: `<p>A particle moving in the region $x \\ge 0$ has the wave function:
$$\\psi(x) = C x e^{-\\alpha x}$$
where $\\alpha = 2.0\\text{ m}^{-1}$ and $\\psi(x) = 0$ for $x < 0$. If $\\psi(x)$ is properly normalized, what is the value of the normalization constant $C$ in $\\text{m}^{-3/2}$ (rounded to two decimal places)?</p>`,
    answer: '5.66',
    solution: `<p>Normalization on $[0, \\infty)$ requires:
$$1 = \\int_0^{\\infty} |\\psi(x)|^2 dx = C^2 \\int_0^{\\infty} x^2 e^{-2\\alpha x} dx$$
Use the standard gamma function integral $\\int_0^{\\infty} x^n e^{-\\beta x} dx = \\frac{n!}{\\beta^{n+1}}$ with $n = 2$ and $\\beta = 2\\alpha$:
$$\\int_0^{\\infty} x^2 e^{-2\\alpha x} dx = \\frac{2!}{(2\\alpha)^3} = \\frac{2}{8\\alpha^3} = \\frac{1}{4\\alpha^3}$$
Setting this equal to $1$:
$$C^2 \\left(\\frac{1}{4\\alpha^3}\\right) = 1 \\implies C^2 = 4\\alpha^3 \\implies C = 2 \\alpha^{3/2}$$
Given $\\alpha = 2.0\\text{ m}^{-1}$:
$$C = 2 (2.0)^{3/2} = 2 \\times 2\\sqrt{2} = 4\\sqrt{2} \\approx 4 \\times 1.4142 = 5.66 \\text{ m}^{-3/2}$$</p>`,
    tested: 'Normalization of polynomial-exponential wave functions using gamma integrals.',
    trap: 'Forgetting to double α in the exponent when squaring: |e^{-α x}|² = e^{-2α x}.'
  },
  {
    id: 'p.jam.ph.2021.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2021,
    paper: 'PH',
    qno: 12,
    marks: 1,
    neg: -0.33,
    sec: '1.6',
    tests: ['c.1.6.1'],
    title: 'Ground State Energy Estimation via Uncertainty Principle',
    type: 'MCQ',
    prompt: `<p>Using the Heisenberg uncertainty relation $\\Delta x \\Delta p \\approx \\hbar$, the estimated ground-state energy of a 1D harmonic oscillator with Hamiltonian $H = \\dfrac{p^2}{2m} + \\dfrac{1}{2}m\\omega^2 x^2$ is:</p>`,
    options: [
      { k: 'A', t: '$E_0 \\approx \\dfrac{1}{2}\\hbar \\omega$' },
      { k: 'B', t: '$E_0 \\approx \\hbar \\omega$' },
      { k: 'C', t: '$E_0 \\approx \\dfrac{1}{4}\\hbar \\omega$' },
      { k: 'D', t: '$E_0 \\approx 2\\hbar \\omega$' }
    ],
    answer: 'A',
    solution: `<p>By symmetry, $\\langle x \\rangle = 0$ and $\\langle p \\rangle = 0$, so $(\\Delta x)^2 = \\langle x^2 \\rangle$ and $(\\Delta p)^2 = \\langle p^2 \\rangle$.<br>
Using the uncertainty relation $\\Delta p \\approx \\frac{\\hbar}{2\\Delta x}$:
$$E(\\Delta x) = \\frac{(\\Delta p)^2}{2m} + \\frac{1}{2}m\\omega^2 (\\Delta x)^2 = \\frac{\\hbar^2}{8m(\\Delta x)^2} + \\frac{1}{2}m\\omega^2 (\\Delta x)^2$$
To find the minimum energy, differentiate with respect to $\\Delta x$ and set to zero:
$$\\frac{dE}{d(\\Delta x)} = -\\frac{\\hbar^2}{4m(\\Delta x)^3} + m\\omega^2 (\\Delta x) = 0 \\implies (\\Delta x)^2 = \\frac{\\hbar}{2m\\omega}$$
Substitute $(\\Delta x)^2$ back into the energy expression:
$$E_0 = \\frac{\\hbar^2}{8m\\left(\\frac{\\hbar}{2m\\omega}\\right)} + \\frac{1}{2}m\\omega^2\\left(\\frac{\\hbar}{2m\\omega}\\right) = \\frac{1}{4}\\hbar \\omega + \\frac{1}{4}\\hbar \\omega = \\frac{1}{2}\\hbar \\omega$$
This estimation recovers the EXACT zero-point ground state energy $E_0 = \\frac{1}{2}\\hbar\\omega$ because the true ground state is a Gaussian wave packet that minimizes the uncertainty product!</p>`,
    tested: 'Application of the uncertainty principle to estimate ground state energies.',
    trap: 'Using Δp ≈ ħ without the 1/2 factor, which leads to E ≈ ħω.'
  },
  {
    id: 'p.jam.ph.2020.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2020,
    paper: 'PH',
    qno: 45,
    marks: 2,
    neg: 0,
    sec: '1.4',
    tests: ['c.1.4.1', 'c.1.2.1'],
    title: 'Probability Calculation for an Infinite Well Superposition',
    type: 'NAT',
    prompt: `<p>A particle in an infinite potential well of width $L$ ($0 \\le x \\le L$) is in the normalized superposition state:
$$\\Psi(x,0) = \\frac{1}{\\sqrt{5}}\\phi_1(x) + \\frac{2}{\\sqrt{5}}\\phi_2(x)$$
where $\\phi_1(x) = \\sqrt{2/L}\\sin(\\pi x/L)$ and $\\phi_2(x) = \\sqrt{2/L}\\sin(2\\pi x/L)$ are orthonormal stationary states. What is the probability (as a decimal) of measuring the energy and finding the ground-state eigenvalue $E_1$?</p>`,
    answer: '0.2',
    solution: `<p>Any state expanded in orthonormal energy eigenstates $|\\Psi\\rangle = \\sum c_n |\\phi_n\\rangle$ has probability $P(E_n) = |c_n|^2$ of yielding energy eigenvalue $E_n$ upon measurement.<br>
Here:
$$c_1 = \\frac{1}{\\sqrt{5}}, \\quad c_2 = \\frac{2}{\\sqrt{5}}$$
Check total probability: $|c_1|^2 + |c_2|^2 = (1/5) + (4/5) = 1$.<br>
The probability of measuring $E_1$ is:
$$P(E_1) = |c_1|^2 = \\left|\\frac{1}{\\sqrt{5}}\\right|^2 = \\frac{1}{5} = 0.2$$</p>`,
    tested: 'Measurement probabilities in quantum superpositions.',
    trap: 'Confusing probability amplitude (1/√5) with probability (1/5 = 0.2).'
  },
  {
    id: 'p.jam.ph.2018.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2018,
    paper: 'PH',
    qno: 22,
    marks: 2,
    neg: -0.66,
    sec: '1.5',
    tests: ['c.1.5.3'],
    title: 'Commutator of Position with Kinetic Energy Operator',
    type: 'MCQ',
    prompt: `<p>Let $\\hat{x}$ be the position operator and $\\hat{T} = \\dfrac{\\hat{p}^2}{2m}$ be the kinetic energy operator in one dimension. The commutator $[\\hat{x}, \\hat{T}]$ is equal to:</p>`,
    options: [
      { k: 'A', t: '$\\dfrac{i\\hbar}{m}\\hat{p}$' },
      { k: 'B', t: '$-\\dfrac{i\\hbar}{m}\\hat{p}$' },
      { k: 'C', t: '$\\dfrac{i\\hbar}{2m}\\hat{p}$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'A',
    solution: `<p>Using the identity $[A, B^2] = [A, B]B + B[A, B]$ with $A = \\hat{x}$ and $B = \\hat{p}$:
$$[\\hat{x}, \\hat{p}^2] = [\\hat{x}, \\hat{p}]\\hat{p} + \\hat{p}[\\hat{x}, \\hat{p}] = (i\\hbar)\\hat{p} + \\hat{p}(i\\hbar) = 2i\\hbar \\hat{p}$$
Therefore:
$$[\\hat{x}, \\hat{T}] = \\left[ \\hat{x}, \\frac{\\hat{p}^2}{2m} \\right] = \\frac{1}{2m} [\\hat{x}, \\hat{p}^2] = \\frac{1}{2m} (2i\\hbar \\hat{p}) = \\frac{i\\hbar}{m}\\hat{p}$$
<b>Heisenberg Equation of Motion Connection:</b>
$$\\frac{d\\hat{x}}{dt} = \\frac{1}{i\\hbar}[\\hat{x}, \\hat{H}] = \\frac{1}{i\\hbar}[\\hat{x}, \\hat{T}] = \\frac{1}{i\\hbar}\\left(\\frac{i\\hbar}{m}\\hat{p}\\right) = \\frac{\\hat{p}}{m}$$
recovering the operator velocity equation!</p>`,
    tested: 'Commutator relations with kinetic energy and Heisenberg equations of motion.',
    trap: 'Picking option B with a minus sign (which is [T̂, x̂], not [x̂, T̂]).'
  },
  {
    id: 'p.jam.ph.2017.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2017,
    paper: 'PH',
    qno: 5,
    marks: 1,
    neg: -0.33,
    sec: '1.4',
    tests: ['c.1.4.1'],
    title: 'Symmetric Exponential Wave Function Normalization',
    type: 'MCQ',
    prompt: `<p>A particle in one dimension has the ground state wave function $\\psi(x) = A e^{-\\kappa |x|}$, where $\\kappa > 0$ is a constant. The normalization constant $A$ (choosing the phase to be real and positive) is:</p>`,
    options: [
      { k: 'A', t: '$\\sqrt{\\kappa}$' },
      { k: 'B', t: '$\\sqrt{2\\kappa}$' },
      { k: 'C', t: '$\\kappa$' },
      { k: 'D', t: '$1/\\sqrt{\\kappa}$' }
    ],
    answer: 'A',
    solution: `<p>Normalization condition:
$$1 = \\int_{-\\infty}^{\\infty} |\\psi(x)|^2 dx = A^2 \\int_{-\\infty}^{\\infty} e^{-2\\kappa |x|} dx$$
By even symmetry:
$$1 = 2A^2 \\int_0^{\\infty} e^{-2\\kappa x} dx = 2A^2 \\left[ \\frac{1}{2\\kappa} \\right] = \\frac{A^2}{\\kappa} \\implies A^2 = \\kappa \\implies A = \\sqrt{\\kappa}$$</p>`,
    tested: 'Normalization of 1D wave functions.',
    trap: 'Selecting B (√2κ) by forgetting that the integral of e^{-2κx} from 0 to ∞ has a 2 in the denominator that cancels the factor of 2 from symmetry.'
  },
  {
    id: 'p.jam.ph.2015.01',
    course: 'qm1',
    exam: 'JAM',
    year: 2015,
    paper: 'PH',
    qno: 18,
    marks: 2,
    neg: -0.66,
    sec: '1.6',
    tests: ['c.1.6.1'],
    title: 'Minimum Position Spread from Momentum Uncertainty',
    type: 'MCQ',
    prompt: `<p>An electron has a speed measured with an uncertainty $\\Delta v = 1.055 \\times 10^3\\text{ m/s}$. Given the electron mass $m = 9.11 \\times 10^{-31}\\text{ kg}$ and $\\hbar = 1.055 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$, what is the minimum uncertainty in its position $\\Delta x$?</p>`,
    options: [
      { k: 'A', t: '$5.49 \\times 10^{-8}\\text{ m}$' },
      { k: 'B', t: '$1.09 \\times 10^{-7}\\text{ m}$' },
      { k: 'C', t: '$2.74 \\times 10^{-8}\\text{ m}$' },
      { k: 'D', t: '$5.49 \\times 10^{-7}\\text{ m}$' }
    ],
    answer: 'A',
    solution: `<p>Momentum uncertainty is:
$$\\Delta p = m \\Delta v = (9.109 \\times 10^{-31}\\text{ kg}) \\times (1.0546 \\times 10^3\\text{ m/s}) \\approx 9.606 \\times 10^{-28}\\text{ kg}\\cdot\\text{m/s}$$
From the Heisenberg uncertainty relation $\\Delta x \\Delta p \\ge \\frac{\\hbar}{2}$:
$$\\Delta x_{\\text{min}} = \\frac{\\hbar}{2 \\Delta p} = \\frac{\\hbar}{2 m \\Delta v}$$
Substitute the given values (noting that $\\hbar / \\Delta v = 10^{-37}$):
$$\\Delta x_{\\text{min}} = \\frac{1.0546 \\times 10^{-34}}{2 \\times (9.109 \\times 10^{-31}) \\times (1.0546 \\times 10^3)} = \\frac{1}{2 \\times 9.109 \\times 10^{-28} \\times 10^{31}} = \\frac{1}{18.218 \\times 10^3} \\approx 5.49 \\times 10^{-8}\\text{ m}$$</p>`,
    tested: 'Quantitative calculation using the Heisenberg uncertainty principle.',
    trap: 'Omitting the factor of 2 in the denominator (using ħ instead of ħ/2), which yields 1.09 × 10^{-7} m (Option B).'
  }
);

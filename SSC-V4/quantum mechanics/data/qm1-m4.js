/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module IV: The Quantum Harmonic Oscillator & 3D Potentials
   Prescribed Syllabus: PHY5CJ301 (V Semester BSc Physics Honours, Calicut University)
   Textbooks: Nouredine Zettili 2e (Chapter 4 §§4.8–4.8.5, Chapter 6 §§6.2.1, 6.2.3, 6.2.4)
              & David J. Griffiths 3e (Chapter 2 §2.3, Chapter 4 §4.1)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 4.1 The Quantum Harmonic Oscillator ─────────────────────────────────── */
  {
    id: 'c.4.1.1', sec: '4.1', kind: 'law', tier: 'core',
    title: 'The Harmonic Oscillator Hamiltonian & Classical Correspondence',
    oneLine: 'Any potential near a stable equilibrium is approximately harmonic: V(x) ≈ ½ m ω² x² with classical frequency ω = √(k/m).',
    statement: `The <b>one-dimensional Quantum Harmonic Oscillator (SHO)</b> is governed by the Hamiltonian:
$$\\boxed{\\hat{H} = \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2 \\hat{x}^2 = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + \\frac{1}{2}m\\omega^2 x^2}$$
where $m$ is the particle mass and $\\omega = \\sqrt{k/m}$ is the classical angular frequency of oscillation.<br>
For a classical particle with energy $E$, the motion is strictly confined between the <b>classical turning points</b>:
$$x_{\\text{turn}} = \\pm \\sqrt{\\frac{2E}{m\\omega^2}}$$
In quantum mechanics, the particle has non-zero probability of penetrating into the classically forbidden region $|x| > x_{\\text{turn}}$.`,
    intuition: `Almost every bound physical system in physics—from vibrating diatomic molecules (HCl, CO) to acoustic phonons in crystal lattices and quantum optical field modes—is fundamentally an oscillator. By Taylor expanding an arbitrary smooth potential $V(x)$ about its minimum $x_0$:
$$V(x) = V(x_0) + V'(x_0)(x - x_0) + \\frac{1}{2}V''(x_0)(x - x_0)^2 + \\dots$$
Since $V'(x_0) = 0$ at equilibrium and setting $V(x_0) = 0$, $V(x) \\approx \\frac{1}{2}k(x - x_0)^2$ where $k = V''(x_0) > 0$. Small oscillations everywhere in nature are harmonic!`,
    needs: ['c.2.1.1', 'c.1.5.2'],
    traps: [
      `Confusing angular frequency $\\omega$ (rad/s) with cyclic frequency $\\nu = \\omega / 2\\pi$ (Hz). Quantum energy spacings are $\\Delta E = \\hbar\\omega = h\\nu$.`,
      `Thinking the quantum particle cannot be found outside $\\pm \\sqrt{2E/m\\omega^2}$. The wave functions have Gaussian tails that extend all the way to $\\pm\\infty$.`
    ],
    cards: [
      { q: 'State the Hamiltonian of a 1D quantum harmonic oscillator.', a: '$\\hat{H} = \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2\\hat{x}^2$.', kind: 'state' },
      { q: 'What is the physical reason why harmonic oscillators appear ubiquitously across quantum physics?', a: 'Any arbitrary smooth potential expanded in a Taylor series about a stable minimum is quadratic to second order: $V(x) \\approx \\frac{1}{2}V\'\'(x_0)(x - x_0)^2$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.1.2', sec: '4.1', kind: 'definition', tier: 'core',
    title: 'The Algebraic Ladder Operators â and â†',
    oneLine: 'Non-Hermitian ladder operators factorize the Hamiltonian: [â, â†] = 1 and Ĥ = ħω(â†â + ½).',
    statement: `Define the dimensionless, mutually adjoint <b>annihilation (lowering)</b> operator $\\hat{a}$ and <b>creation (raising)</b> operator $\\hat{a}^\\dagger$:
$$\\boxed{\\hat{a} = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i}{\\sqrt{2m\\hbar\\omega}}\\hat{p}, \\qquad \\hat{a}^\\dagger = \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} - \\frac{i}{\\sqrt{2m\\hbar\\omega}}\\hat{p}}$$
In terms of $\\hat{a}$ and $\\hat{a}^\\dagger$, position and momentum are:
$$\\boxed{\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger), \\qquad \\hat{p} = -i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\hat{a} - \\hat{a}^\\dagger)}$$
<b>Fundamental Commutation Relation:</b>
$$\\boxed{[\\hat{a}, \\hat{a}^\\dagger] = \\hat{I}}$$
The Hamiltonian factorizes as:
$$\\boxed{\\hat{H} = \\hbar\\omega\\left(\\hat{a}^\\dagger \\hat{a} + \\frac{1}{2}\\hat{I}\\right)}$$`,
    intuition: `Notice how Dirac\'s ladder operators transform a second-order differential equation into pure linear algebra! In classical mechanics, $H = \\frac{1}{2m}(p^2 + m^2\\omega^2 x^2) = \\frac{1}{2m}(m\\omega x - ip)(m\\omega x + ip)$. Because $\\hat{x}$ and $\\hat{p}$ do not commute, multiplying them out generates an extra zero-point quantum commutator term: $\\frac{1}{2}[\\hat{x}, \\hat{p}] = \\frac{i\\hbar}{2}$, which manifests directly as the $+\\frac{1}{2}\\hbar\\omega$ zero-point energy!`,
    needs: ['c.3.3.3', 'c.4.1.1'],
    traps: [
      `Assuming $\\hat{a}$ and $\\hat{a}^\\dagger$ are Hermitian. They are adjoints of each other: $(\\hat{a})^\\dagger = \\hat{a}^\\dagger$. Neither is Hermitian, so neither corresponds to a real observable.`,
      `Sign error in the momentum expression: $\\hat{p} = -i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\hat{a} - \\hat{a}^\\dagger) = i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\hat{a}^\\dagger - \\hat{a})$.`
    ],
    proof: {
      idea: 'Compute the product a† a and use the canonical commutator [x, p] = iħ.',
      why: 'Show that Ĥ = ħω(a† a + 1/2) and [a, a†] = 1.',
      rungs: [
        {
          why: 'Evaluate Commutator [a, a†]',
          m: '$$[\\hat{a}, \\hat{a}^\\dagger] = \\left[ \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} + \\frac{i\\hat{p}}{\\sqrt{2m\\hbar\\omega}}, \\; \\sqrt{\\frac{m\\omega}{2\\hbar}}\\hat{x} - \\frac{i\\hat{p}}{\\sqrt{2m\\hbar\\omega}} \\right] = -\\frac{i}{2\\hbar}[\\hat{x}, \\hat{p}] + \\frac{i}{2\\hbar}[\\hat{p}, \\hat{x}]$$',
          meaning: 'What this really means: Expand using linearity and drop [x, x] = [p, p] = 0.',
          label: 'Evaluate Commutator [a, a†]',
          math: '[\\hat{a}, \\hat{a}^\\dagger] = -\\frac{i}{2\\hbar}[\\hat{x}, \\hat{p}] + \\frac{i}{2\\hbar}[\\hat{p}, \\hat{x}]',
          note: 'Expand linear brackets.'
        },
        {
          why: 'Substitute Canonical Commutator [x, p] = iħ',
          m: '$$[\\hat{a}, \\hat{a}^\\dagger] = -\\frac{i}{2\\hbar}(i\\hbar) + \\frac{i}{2\\hbar}(-i\\hbar) = \\frac{1}{2} + \\frac{1}{2} = 1$$',
          meaning: 'What this really means: Fundamental ladder commutation relation.',
          label: 'Substitute Canonical Commutator',
          math: '[\\hat{a}, \\hat{a}^\\dagger] = \\frac{1}{2} + \\frac{1}{2} = 1',
          note: 'Canonical commutation holds.'
        },
        {
          why: 'Compute Product a† a',
          m: '$$\\hat{a}^\\dagger \\hat{a} = \\frac{m\\omega}{2\\hbar}\\hat{x}^2 + \\frac{\\hat{p}^2}{2m\\hbar\\omega} - \\frac{i}{2\\hbar}[\\hat{x}, \\hat{p}] = \\frac{1}{\\hbar\\omega}\\left( \\frac{\\hat{p}^2}{2m} + \\frac{1}{2}m\\omega^2\\hat{x}^2 \\right) - \\frac{1}{2}$$',
          meaning: 'What this really means: Cross terms produce the commutator [x, p] / 2.',
          label: 'Compute Product a† a',
          math: '\\hat{a}^\\dagger \\hat{a} = \\frac{\\hat{H}}{\\hbar\\omega} - \\frac{1}{2}',
          note: 'Relates to Hamiltonian.'
        },
        {
          why: 'Isolate Hamiltonian Ĥ',
          m: '$$\\hat{H} = \\hbar\\omega\\left( \\hat{a}^\\dagger \\hat{a} + \\frac{1}{2} \\right)$$',
          meaning: 'What this really means: Expresses energy operator strictly in terms of number operator.',
          label: 'Isolate Hamiltonian Ĥ',
          math: '\\hat{H} = \\hbar\\omega(\\hat{a}^\\dagger \\hat{a} + 1/2)',
          note: 'Factorization complete.'
        }
      ]
    },
    cards: [
      { q: 'What is the commutator $[\\hat{a}, \\hat{a}^\\dagger]$?', a: '$[\\hat{a}, \\hat{a}^\\dagger] = 1$.', kind: 'state' },
      { q: 'Express the position operator $\\hat{x}$ in terms of ladder operators $\\hat{a}$ and $\\hat{a}^\\dagger$.', a: '$\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.1.3', sec: '4.1', kind: 'theorem', tier: 'core',
    title: 'The Number Operator and Energy Quantization En = (n + ½)ħω',
    oneLine: 'The eigenvalues of N̂ = â†â are non-negative integers n = 0, 1, 2, ... giving equispaced energy levels En = (n + ½)ħω.',
    statement: `Define the Hermitian <b>number operator</b>:
$$\\boxed{\\hat{N} = \\hat{a}^\\dagger \\hat{a}}$$
The number operator satisfies the fundamental ladder commutators:
$$[\\hat{N}, \\hat{a}] = -\\hat{a}, \\qquad [\\hat{N}, \\hat{a}^\\dagger] = +\\hat{a}^\\dagger$$
Let $|n\\rangle$ be an eigenstate of $\\hat{N}$ with eigenvalue $n$: $\\hat{N}|n\\rangle = n|n\\rangle$.<br>
Then:
1. $\\hat{a}|n\\rangle$ is an eigenstate of $\\hat{N}$ with eigenvalue $(n - 1)$.
2. $\\hat{a}^\\dagger|n\\rangle$ is an eigenstate of $\\hat{N}$ with eigenvalue $(n + 1)$.
3. Because the norm $\\|\\hat{a}|n\\rangle\\|^2 = \\langle n|\\hat{a}^\\dagger \\hat{a}|n\\rangle = n \\ge 0$, the ladder must terminate at a ground state $|0\\rangle$ such that:
$$\\boxed{\\hat{a}|0\\rangle = 0}$$
Consequently, $n$ must be an integer $n \\in \\{0, 1, 2, 3, \\dots\\}$.<br>
<b>Energy Spectrum of the Quantum Harmonic Oscillator:</b>
$$\\boxed{E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega, \\qquad n = 0, 1, 2, 3, \\dots}$$
Every energy level is strictly non-degenerate and equispaced by $\\Delta E = \\hbar\\omega$.`,
    intuition: `Notice the contrast with the infinite square well where $E_n \\propto n^2$. In the harmonic oscillator, the parabola widens smoothly, balancing the kinetic wavelength compression so that energy levels are perfectly equispaced! The ground state energy $E_0 = \\frac{1}{2}\\hbar\\omega$ is called the <b>zero-point energy</b>. A quantum oscillator can never be at rest at the bottom of the well ($x=0, p=0$), because that would violate Heisenberg's uncertainty principle $\\Delta x \\Delta p \\ge \\hbar/2$.`,
    needs: ['c.4.1.2', 'c.1.6.1'],
    traps: [
      `Starting the quantum number from $n=1$. For the harmonic oscillator, the ground state is $n=0$ ($E_0 = \\frac{1}{2}\\hbar\\omega$). In the infinite square well, $n=1$.`,
      `Thinking the ladder can descend into negative energies. $\\hat{a}|0\\rangle = 0$ is the mathematical brick wall that truncates lowering and guarantees positive energies.`
    ],
    proof: {
      idea: 'Act on |n⟩ with [N, a] and evaluate the norm ⟨an|an⟩.',
      why: 'Prove that n must be an integer n ≥ 0.',
      rungs: [
        {
          why: 'Evaluate Commutator [N, a]',
          m: '$$[\\hat{N}, \\hat{a}] = [\\hat{a}^\\dagger \\hat{a}, \\hat{a}] = [\\hat{a}^\\dagger, \\hat{a}]\\hat{a} + \\hat{a}^\\dagger[\\hat{a}, \\hat{a}] = (-1)\\hat{a} + 0 = -\\hat{a}$$',
          meaning: 'What this really means: Commuting N with a lowers the eigenvalue by 1.',
          label: 'Evaluate Commutator [N, a]',
          math: '[\\hat{N}, \\hat{a}] = -\\hat{a}',
          note: 'Lowers eigenvalue.'
        },
        {
          why: 'Action of N on Lowered State',
          m: '$$\\hat{N}(\\hat{a}|n\\rangle) = (\\hat{a}\\hat{N} + [\\hat{N}, \\hat{a}])|n\\rangle = (\\hat{a}n - \\hat{a})|n\\rangle = (n - 1)(\\hat{a}|n\\rangle)$$',
          meaning: 'What this really means: a|n⟩ is an eigenstate of N with eigenvalue n - 1.',
          label: 'Action of N on Lowered State',
          math: '\\hat{N}(\\hat{a}|n\\rangle) = (n - 1)(\\hat{a}|n\\rangle)',
          note: 'Eigenvalue decreases by 1.'
        },
        {
          why: 'Positivity of Norm',
          m: '$$\\langle \\hat{a}n | \\hat{a}n \\rangle = \\langle n | \\hat{a}^\\dagger \\hat{a} | n \\rangle = \\langle n | \\hat{N} | n \\rangle = n \\langle n | n \\rangle = n \\ge 0$$',
          meaning: 'What this really means: Eigenvalue n cannot be negative.',
          label: 'Positivity of Norm',
          math: '\\langle \\hat{a}n | \\hat{a}n \\rangle = n \\ge 0',
          note: 'Norm is non-negative.'
        },
        {
          why: 'Termination Condition',
          m: '$$\\hat{a}|0\\rangle = 0 \\implies \\hat{N}|0\\rangle = \\hat{a}^\\dagger \\hat{a} |0\\rangle = 0 \\implies n \\in \\{0, 1, 2, \\dots\\}$$',
          meaning: 'What this really means: Ground state has eigenvalue 0, so all eigenvalues are non-negative integers.',
          label: 'Termination Condition',
          math: '\\hat{a}|0\\rangle = 0 \\implies n \\in \\{0, 1, 2, \\dots\\}',
          note: 'En = (n + 1/2)ħω.'
        }
      ]
    },
    cards: [
      { q: 'What is the energy of the second excited state ($n=2$) of a harmonic oscillator?', a: '$E_2 = \\left(2 + \\frac{1}{2}\\right)\\hbar\\omega = \\frac{5}{2}\\hbar\\omega$.', kind: 'state' },
      { q: 'Why is the ground-state energy of the quantum oscillator non-zero ($E_0 = \\frac{1}{2}\\hbar\\omega$)?', a: 'By Heisenberg uncertainty $\\Delta x \\Delta p \\ge \\hbar/2$, the particle cannot be simultaneously localized at $x=0$ with zero momentum $p=0$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.1.4', sec: '4.1', kind: 'theorem', tier: 'core',
    title: 'Ground State Wave Function in Position Space ψ₀(x)',
    oneLine: 'The ground state wavefunction is a Gaussian ψ₀(x) = (mω/πħ)^{1/4} exp(-mω x² / 2ħ) determined by â|0⟩ = 0.',
    statement: `The spatial wave function of the ground state $\\psi_0(x) = \\langle x|0\\rangle$ satisfies the first-order differential equation given by the annihilation condition $\\hat{a}|0\\rangle = 0$:
$$\\left( \\sqrt{\\frac{m\\omega}{2\\hbar}}x + \\frac{\\hbar}{\\sqrt{2m\\hbar\\omega}}\\frac{d}{dx} \\right) \\psi_0(x) = 0 \\implies \\frac{d\\psi_0}{dx} = -\\left(\\frac{m\\omega}{\\hbar}\\right)x \\psi_0(x)$$
Integrating and normalizing yields the Gaussian wave function:
$$\\boxed{\\psi_0(x) = \\left( \\frac{m\\omega}{\\pi\\hbar} \\right)^{1/4} \\exp\\left( -\\frac{m\\omega}{2\\hbar}x^2 \\right)}$$
In terms of the dimensionless coordinate $\\xi = \\sqrt{\\frac{m\\omega}{\\hbar}}x$:
$$\\psi_0(\\xi) = \\left( \\frac{m\\omega}{\\pi\\hbar} \\right)^{1/4} e^{-\\xi^2 / 2}$$`,
    intuition: `Notice how easy this derivation is compared to solving the second-order Schrödinger equation directly! By using the ladder operator condition $\\hat{a}|0\\rangle = 0$, we convert a second-order ODE into a trivial separable first-order ODE: $\\frac{d\\psi}{\\psi} = -\\frac{m\\omega}{\\hbar}x dx$. The result is a pure Gaussian centered at the origin, with zero nodes, representing the minimum uncertainty wave packet!`,
    needs: ['c.4.1.3', 'c.1.4.1'],
    traps: [
      `Forgetting the normalization prefactor $\\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4}$. The power is $1/4$ because integrating $|\psi_0|^2$ gives $\\int e^{-m\\omega x^2/\\hbar} dx = \\sqrt{\\frac{\\pi\\hbar}{m\\omega}}$.`,
      `Thinking $\\psi_0(x)$ has nodes. The ground state of any 1D bound potential has zero nodes and is strictly positive everywhere.`
    ],
    proof: {
      idea: 'Integrate dψ₀/ψ₀ = -(mω/ħ) x dx and normalize using the Gaussian integral ∫ exp(-αx²) dx = √(π/α).',
      why: 'Derive the exact position representation of the ground state.',
      rungs: [
        {
          why: 'Express a|0⟩ = 0 in Position Space',
          m: '$$\\langle x | \\hat{a} | 0 \\rangle = \\frac{1}{\\sqrt{2m\\hbar\\omega}}\\left( m\\omega x + \\hbar\\frac{d}{dx} \\right)\\psi_0(x) = 0$$',
          meaning: 'What this really means: Annihilation condition projected into coordinate basis.',
          label: 'Express a|0⟩ = 0 in Position Space',
          math: '\\frac{d\\psi_0}{dx} = -\\frac{m\\omega}{\\hbar}x\\psi_0(x)',
          note: 'Separable 1st order ODE.'
        },
        {
          why: 'Integrate the Differential Equation',
          m: '$$\\int \\frac{d\\psi_0}{\\psi_0} = -\\frac{m\\omega}{\\hbar}\\int x \\, dx \\implies \\ln\\psi_0 = -\\frac{m\\omega}{2\\hbar}x^2 + C \\implies \\psi_0(x) = A e^{-\\frac{m\\omega}{2\\hbar}x^2}$$',
          meaning: 'What this really means: General solution is a Gaussian.',
          label: 'Integrate the Differential Equation',
          math: '\\psi_0(x) = A e^{-\\frac{m\\omega}{2\\hbar}x^2}',
          note: 'Gaussian envelope.'
        },
        {
          why: 'Normalize the Wave Function',
          m: '$$\\int_{-\\infty}^\\infty |\\psi_0(x)|^2 dx = |A|^2 \\int_{-\\infty}^\\infty e^{-\\frac{m\\omega}{\\hbar}x^2} dx = |A|^2 \\sqrt{\\frac{\\pi\\hbar}{m\\omega}} = 1 \\implies A = \\left( \\frac{m\\omega}{\\pi\\hbar} \\right)^{1/4}$$',
          meaning: 'What this really means: Standard Gaussian integral evaluation gives normalization constant.',
          label: 'Normalize the Wave Function',
          math: 'A = \\left( \\frac{m\\omega}{\\pi\\hbar} \\right)^{1/4}',
          note: 'Normalization complete.'
        }
      ]
    },
    cards: [
      { q: 'State the spatial wave function of the ground state of a harmonic oscillator.', a: '$\\psi_0(x) = \\left( \\frac{m\\omega}{\\pi\\hbar} \\right)^{1/4} e^{-\\frac{m\\omega}{2\\hbar}x^2}$.', kind: 'state' },
      { q: 'How many nodes does the ground state wave function $\\psi_0(x)$ have?', a: 'Zero nodes (it is non-zero everywhere and strictly positive).', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.1.5', sec: '4.1', kind: 'theorem', tier: 'core',
    title: 'Excited States, Hermite Polynomials & Parity',
    oneLine: 'Higher states are generated by |n⟩ = (1/√n!) (â†)ⁿ|0⟩, yielding Hermite polynomial wavefunctions ψₙ(x) with n nodes.',
    statement: `The normalized stationary states $|n\\rangle$ are systematically generated by repeated application of the creation operator $\\hat{a}^\\dagger$:
$$\\boxed{|n\\rangle = \\frac{1}{\\sqrt{n!}} (\\hat{a}^\\dagger)^n |0\\rangle}$$
The action of the ladder operators on normalized states is:
$$\\boxed{\\hat{a}^\\dagger |n\\rangle = \\sqrt{n+1} |n+1\\rangle, \\qquad \\hat{a}|n\\rangle = \\sqrt{n}|n-1\\rangle}$$
In position space, the stationary wave functions are:
$$\\boxed{\\psi_n(x) = \\frac{1}{\\sqrt{2^n n!}} \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4} H_n\\left(\\sqrt{\\frac{m\\omega}{\\hbar}}x\\right) e^{-\\frac{m\\omega}{2\\hbar}x^2}}$$
where $H_n(\\xi)$ is the $n$-th degree <b>Hermite polynomial</b>.<br>
<b>First Excited State ($n=1$):</b>
$$\\psi_1(x) = \\hat{a}^\\dagger \\psi_0(x) = \\left(\\frac{m\\omega}{\\pi\\hbar}\\right)^{1/4} \\sqrt{\\frac{2m\\omega}{\\hbar}} \\, x \\, e^{-\\frac{m\\omega}{2\\hbar}x^2}$$
<b>Parity Property:</b> Since $H_n(-\\xi) = (-1)^n H_n(\\xi)$, every eigenstate has definite parity:
$$\\psi_n(-x) = (-1)^n \\psi_n(x)$$
Even $n$ states are even functions; odd $n$ states are odd functions with a node at the origin.`,
    intuition: `Notice how the node theorem works: each application of $\\hat{a}^\\dagger$ multiplies by roughly $\\xi$ and differentiates, adding exactly one new real root (node). Thus $\\psi_n(x)$ has precisely $n$ nodes! The classical probability density peaks near the classical turning points $x = \\pm \\sqrt{2E/m\\omega^2}$ where the classical particle moves slowest. For high $n$, the quantum probability $|\psi_n(x)|^2$ exhibits rapid oscillations whose envelope exactly matches the classical probability distribution, illustrating the Bohr correspondence principle!`,
    needs: ['c.4.1.4', 'c.4.1.2'],
    traps: [
      `Missing the factor $\\sqrt{n+1}$ in $\\hat{a}^\\dagger|n\\rangle$ versus $\\sqrt{n}$ in $\\hat{a}|n\\rangle$.`,
      `Forgetting that $\\psi_1(x)$ has an odd node at $x=0$, meaning the particle has zero probability of being detected at the very center of the well!`
    ],
    cards: [
      { q: 'What is the action of $\\hat{a}^\\dagger$ on the state $|3\\rangle$?', a: '$\\hat{a}^\\dagger|3\\rangle = \\sqrt{4}|4\\rangle = 2|4\\rangle$.', kind: 'recall' },
      { q: 'How many nodes does the $n$-th excited state $\\psi_n(x)$ of a harmonic oscillator possess?', a: 'Exactly $n$ nodes.', kind: 'state' }
    ]
  },
  {
    id: 'c.4.1.6', sec: '4.1', kind: 'definition', tier: 'core',
    title: 'Matrix Representation of Harmonic Oscillator Operators',
    oneLine: 'In the {|n⟩} basis, â has non-zero elements only on the superdiagonal and â† on the subdiagonal.',
    statement: `In the orthonormal basis of energy eigenstates $\{|0\\rangle, |1\\rangle, |2\\rangle, \\dots\}$, the matrix elements $O_{mn} = \\langle m|\\hat{O}|n\\rangle$ are:
1. <b>Annihilation Operator $\\hat{a}$:</b>
$$\\langle m|\\hat{a}|n\\rangle = \\sqrt{n} \\, \\delta_{m, n-1} \\implies a = \\begin{pmatrix} 0 & \\sqrt{1} & 0 & 0 & \\dots \\\\ 0 & 0 & \\sqrt{2} & 0 & \\dots \\\\ 0 & 0 & 0 & \\sqrt{3} & \\dots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & \\ddots \\end{pmatrix}$$
2. <b>Creation Operator $\\hat{a}^\\dagger$:</b>
$$\\langle m|\\hat{a}^\\dagger|n\\rangle = \\sqrt{n+1} \\, \\delta_{m, n+1} \\implies a^\\dagger = \\begin{pmatrix} 0 & 0 & 0 & 0 & \\dots \\\\ \\sqrt{1} & 0 & 0 & 0 & \\dots \\\\ 0 & \\sqrt{2} & 0 & 0 & \\dots \\\\ 0 & 0 & \\sqrt{3} & 0 & \\dots \\\\ \\vdots & \\vdots & \\vdots & \\vdots & \\ddots \\end{pmatrix}$$
3. <b>Position Operator $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$</b> (tridiagonal, symmetric).<br>
4. <b>Momentum Operator $\\hat{p} = -i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\hat{a} - \\hat{a}^\\dagger)$</b> (tridiagonal, Hermitian).<br>
5. <b>Hamiltonian $\\hat{H}$</b> is strictly diagonal: $H_{mn} = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega \\, \\delta_{mn}$.`,
    intuition: `Because $\\hat{x}$ and $\\hat{p}$ are linear combinations of $\\hat{a}$ and $\\hat{a}^\\dagger$, they only couple states differing by $\\Delta n = \\pm 1$! This explains the electric dipole selection rule $\\Delta n = \\pm 1$ for infrared spectroscopy of vibrating molecules: transitions can only occur between adjacent harmonic levels!`,
    needs: ['c.4.1.2', 'c.3.6.1'],
    traps: [
      `Placing $\\sqrt{n}$ on the wrong diagonal. $\\hat{a}$ has non-zero entries on the first superdiagonal ($m = n-1$); $\\hat{a}^\\dagger$ on the first subdiagonal ($m = n+1$).`,
      `Thinking $\\hat{x}$ or $\\hat{p}$ have diagonal elements. In the number basis, all diagonal elements vanish: $\\langle n|\\hat{x}|n\\rangle = 0$ and $\\langle n|\\hat{p}|n\\rangle = 0$.`
    ],
    cards: [
      { q: 'What is the matrix element $\\langle 1|\\hat{a}|2\\rangle$?', a: '$\\langle 1|\\hat{a}|2\\rangle = \\sqrt{2}$.', kind: 'recall' },
      { q: 'Why do all diagonal matrix elements $\\langle n|\\hat{x}|n\\rangle$ vanish?', a: 'Because $\\hat{x}$ is proportional to $\\hat{a} + \\hat{a}^\\dagger$, changing the state by $\\Delta n = \\pm 1$, making $\\langle n|n \\pm 1\\rangle = 0$ by orthogonality.', kind: 'state' }
    ]
  },
  {
    id: 'c.4.1.7', sec: '4.1', kind: 'theorem', tier: 'core',
    title: 'Expectation Values, Virial Theorem & Uncertainty Product',
    oneLine: 'In any stationary state |n⟩, ⟨T⟩ = ⟨V⟩ = ½ En (virial theorem) and Δx Δp = (n + ½)ħ.',
    statement: `For any harmonic oscillator energy eigenstate $|n\\rangle$:
1. <b>Averages of Odd Powers Vanish:</b>
$$\\langle n|\\hat{x}|n\\rangle = 0, \\qquad \\langle n|\\hat{p}|n\\rangle = 0$$
2. <b>Second Moments:</b>
$$\\langle n|\\hat{x}^2|n\\rangle = \\frac{\\hbar}{2m\\omega}(2n + 1), \\qquad \\langle n|\\hat{p}^2|n\\rangle = \\frac{m\\hbar\\omega}{2}(2n + 1)$$
3. <b>Uncertainties and Uncertainty Product:</b>
$$\\Delta x = \\sqrt{\\frac{\\hbar}{2m\\omega}(2n + 1)}, \\qquad \\Delta p = \\sqrt{\\frac{m\\hbar\\omega}{2}(2n + 1)}$$
$$\\boxed{\\Delta x \\, \\Delta p = \\left(n + \\frac{1}{2}\\right)\\hbar \\ge \\frac{\\hbar}{2}}$$
For $n=0$ (ground state), $\\Delta x \\Delta p = \\frac{\\hbar}{2}$, attaining the absolute Heisenberg minimum!<br>
4. <b>The Quantum Virial Theorem:</b>
$$\\langle T \\rangle = \\left\\langle \\frac{\\hat{p}^2}{2m} \\right\\rangle = \\frac{1}{2}E_n, \\qquad \\langle V \\rangle = \\left\\langle \\frac{1}{2}m\\omega^2\\hat{x}^2 \\right\\rangle = \\frac{1}{2}E_n$$
$$\\boxed{\\langle T \\rangle = \\langle V \\rangle = \\frac{1}{2}E_n = \\frac{1}{2}\\left(n + \\frac{1}{2}\\right)\\hbar\\omega}$$
Energy is partitioned equally on average between kinetic and potential energy in all stationary states.`,
    intuition: `This is the quantum counterpart of the classical virial theorem for a quadratic potential: average kinetic energy equals average potential energy! Notice also how the ladder operator method completely eliminates tedious Gaussian integrals. To compute $\\langle n|x^2|n\\rangle$, we simply expand $(\\hat{a} + \\hat{a}^\\dagger)^2 = \\hat{a}^2 + \\hat{a}\\hat{a}^\\dagger + \\hat{a}^\\dagger\\hat{a} + (\\hat{a}^\\dagger)^2$. Only terms with equal numbers of creation and annihilation operators survive!`,
    needs: ['c.4.1.2', 'c.4.1.3', 'c.3.4.1'],
    traps: [
      `Forgetting that $\\hat{a}\\hat{a}^\\dagger \\ne \\hat{a}^\\dagger\\hat{a}$. $\\hat{a}\\hat{a}^\\dagger = \\hat{a}^\\dagger\\hat{a} + 1 = \\hat{N} + 1$, so $\\langle n|(\\hat{a}\\hat{a}^\\dagger + \\hat{a}^\\dagger\\hat{a})|n\\rangle = (n+1) + n = 2n+1$.`,
      `Thinking $\\langle x^2 \\rangle$ is zero because $\\langle x \\rangle = 0$. $\\langle x^2 \\rangle$ is strictly positive and increases linearly with $n$.`
    ],
    cards: [
      { q: 'State the quantum virial theorem relation for the 1D harmonic oscillator.', a: '$\\langle T \\rangle = \\langle V \\rangle = \\frac{1}{2}E_n$.', kind: 'state' },
      { q: 'What is the uncertainty product $\\Delta x \\Delta p$ for the ground state $|0\\rangle$ of the harmonic oscillator?', a: '$\\Delta x \\Delta p = \\frac{\\hbar}{2}$ (the minimum uncertainty bound).', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.1.8', sec: '4.1', kind: 'definition', tier: 'core',
    title: 'Coherent States of the Harmonic Oscillator',
    oneLine: 'Coherent states |α⟩ are eigenstates of â with Poissonian number statistics that oscillate without spreading.',
    statement: `A <b>coherent state</b> $|\\alpha\\rangle$ is defined as an eigenstate of the non-Hermitian annihilation operator $\\hat{a}$:
$$\\boxed{\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle, \\qquad \\alpha \\in \\mathbb{C}}$$
In the energy Fock basis $\{|n\\rangle\}$, the normalized coherent state is:
$$\\boxed{|\\alpha\\rangle = e^{-|\\alpha|^2/2} \\sum_{n=0}^\\infty \\frac{\\alpha^n}{\\sqrt{n!}} |n\\rangle}$$
<b>Key Properties:</b>
1. <b>Poissonian Photon/Phonon Distribution:</b> The probability of finding $n$ quanta is:
$$P(n) = |\\langle n|\\alpha\\rangle|^2 = e^{-|\\alpha|^2} \\frac{|\\alpha|^{2n}}{n!} = e^{-\\bar{n}} \\frac{\\bar{n}^n}{n!}$$
with mean $\\langle \\hat{N} \\rangle = |\\alpha|^2$ and variance $\\Delta N^2 = \\langle \\hat{N} \\rangle$.<br>
2. <b>Minimum Uncertainty at All Times:</b> $\\Delta x = \\sqrt{\\frac{\\hbar}{2m\\omega}}$ and $\\Delta p = \\sqrt{\\frac{m\\hbar\\omega}{2}}$, so $\\Delta x \\Delta p = \\frac{\\hbar}{2}$ for all $t$.<br>
3. <b>Classical Trajectory:</b> The wave packet centroid oscillates sinusoidally without changing shape or spreading: $\\langle x \\rangle(t) = x_{\\text{max}}\\cos(\\omega t - \\phi)$.`,
    intuition: `Coherent states are the closest quantum states to classical physics! Discovered by Erwin Schrödinger in 1926, they describe laser light (coherent electromagnetic radiation) and macroscopic pendulum oscillations. Unlike free wave packets which continuously disperse and spread over time, a coherent state in a parabolic well preserves its Gaussian width forever!`,
    needs: ['c.4.1.2', 'c.4.1.7'],
    traps: [
      `Trying to find eigenstates of $\\hat{a}^\\dagger$. The creation operator $\\hat{a}^\\dagger$ has NO normalizable eigenstates because $\\hat{a}^\\dagger|v\\rangle = \\lambda|v\\rangle$ leads to divergent coefficients.`,
      `Thinking coherent states are mutually orthogonal. Two coherent states are never orthogonal: $|\\langle \\alpha|\\beta\\rangle|^2 = e^{-|\\alpha - \\beta|^2} > 0$.`
    ],
    cards: [
      { q: 'Define a coherent state of the harmonic oscillator.', a: 'An eigenstate of the annihilation operator $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$ where $\\alpha \\in \\mathbb{C}$.', kind: 'state' },
      { q: 'What probability distribution governs the quantum number $n$ in a coherent state?', a: 'Poisson distribution $P(n) = e^{-|\\alpha|^2} \\frac{|\\alpha|^{2n}}{n!}$.', kind: 'recall' }
    ]
  },

  /* ── 4.2 3D Problems in Cartesian Coordinates ─────────────────────────────── */
  {
    id: 'c.4.2.1', sec: '4.2', kind: 'law', tier: 'core',
    title: '3D Schrödinger Equation & Cartesian Separation of Variables',
    oneLine: 'For separable potentials V(x,y,z) = Vx(x) + Vy(y) + Vz(z), the 3D TISE separates into three independent 1D ODEs.',
    statement: `The Time-Independent Schrödinger Equation for a particle of mass $m$ moving in three spatial dimensions is:
$$-\\frac{\\hbar^2}{2m}\\nabla^2 \\psi(x,y,z) + V(x,y,z)\\psi(x,y,z) = E\\psi(x,y,z)$$
where the Laplacian in Cartesian coordinates is $\\nabla^2 = \\frac{\\partial^2}{\\partial x^2} + \\frac{\\partial^2}{\\partial y^2} + \\frac{\\partial^2}{\\partial z^2}$.<br>
If the potential energy is <b>separable</b>:
$$V(x, y, z) = V_x(x) + V_y(y) + V_z(z)$$
the Hamiltonian decomposes into a sum of mutually commuting one-dimensional Hamiltonians:
$$\\hat{H} = \\hat{H}_x + \\hat{H}_y + \\hat{H}_z, \\qquad [\\hat{H}_x, \\hat{H}_y] = [\\hat{H}_y, \\hat{H}_z] = [\\hat{H}_z, \\hat{H}_x] = 0$$
The stationary state wave function factors into a product:
$$\\boxed{\\psi(x, y, z) = X(x) \\, Y(y) \\, Z(z)}$$
and the total energy eigenvalue is the scalar sum:
$$\\boxed{E = E_x + E_y + E_z}$$`,
    intuition: `Separation of variables converts an intractable 3D partial differential equation into three simple 1D ordinary differential equations! Motion along the $x, y,$ and $z$ axes is completely decoupled: the particle behaves as if three independent particles were each executing 1D motion along their respective axes.`,
    needs: ['c.2.1.1', 'c.3.6.3'],
    traps: [
      `Attempting Cartesian separation on non-separable potentials like the central Coulomb potential $V(r) = -e^2/\\sqrt{x^2+y^2+z^2}$. Central potentials require spherical coordinates $(r, \\theta, \\phi)$.`,
      `Multiplying the energy components ($E_x E_y E_z$) instead of adding them ($E = E_x + E_y + E_z$). Wave functions multiply; energies add.`
    ],
    proof: {
      idea: 'Substitute ψ = X(x)Y(y)Z(z) into TISE and divide by XYZ.',
      why: 'Show that each spatial coordinate obeys an independent 1D TISE.',
      rungs: [
        {
          why: 'Substitute Product Wave Function',
          m: '$$-\\frac{\\hbar^2}{2m}\\left( YZ \\frac{d^2X}{dx^2} + XZ \\frac{d^2Y}{dy^2} + XY \\frac{d^2Z}{dz^2} \\right) + (V_x + V_y + V_z)XYZ = E \\, XYZ$$',
          meaning: 'What this really means: Derivatives act only on the corresponding coordinate factor.',
          label: 'Substitute Product Wave Function',
          math: '-\\frac{\\hbar^2}{2m}\\nabla^2(XYZ) + (V_x + V_y + V_z)XYZ = E(XYZ)',
          note: 'Expand spatial derivatives.'
        },
        {
          why: 'Divide by XYZ',
          m: '$$\\left[ -\\frac{\\hbar^2}{2mX}\\frac{d^2X}{dx^2} + V_x(x) \\right] + \\left[ -\\frac{\\hbar^2}{2mY}\\frac{d^2Y}{dy^2} + V_y(y) \\right] + \\left[ -\\frac{\\hbar^2}{2mZ}\\frac{d^2Z}{dz^2} + V_z(z) \\right] = E$$',
          meaning: 'What this really means: Each bracket depends solely on one independent variable.',
          label: 'Divide by XYZ',
          math: '\\sum_{q \\in \\{x,y,z\\}} \\left[ -\\frac{\\hbar^2}{2mQ}\\frac{d^2Q}{dq^2} + V_q(q) \\right] = E',
          note: 'Isolates each coordinate.'
        },
        {
          why: 'Equate Each Term to Separation Constant',
          m: '$$-\\frac{\\hbar^2}{2m}\\frac{d^2X}{dx^2} + V_x(x)X(x) = E_x X(x), \\quad \\dots \\quad \\text{with } E_x + E_y + E_z = E$$',
          meaning: 'What this really means: A sum of independent functions equaling a constant forces each to be a constant.',
          label: 'Equate Each Term to Separation Constant',
          math: '\\hat{H}_x X = E_x X, \\; \\hat{H}_y Y = E_y Y, \\; \\hat{H}_z Z = E_z Z',
          note: 'Three 1D TISEs obtained.'
        }
      ]
    },
    cards: [
      { q: 'When can a 3D Schrödinger equation be separated in Cartesian coordinates?', a: 'When the potential is a sum of single-variable potentials: $V(x,y,z) = V_x(x) + V_y(y) + V_z(z)$.', kind: 'state' },
      { q: 'If $\\psi(x,y,z) = X(x)Y(y)Z(z)$, what is the total energy $E$?', a: '$E = E_x + E_y + E_z$ (sum of the individual 1D eigenvalues).', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.2.2', sec: '4.2', kind: 'theorem', tier: 'core',
    title: '3D Probability Density & Statistical Independence',
    oneLine: 'In separable 3D states, the probability density factorizes: ρ(x,y,z) = ρx(x) ρy(y) ρz(z), making measurements statistically independent.',
    statement: `For a factored stationary state $\\psi(x,y,z) = X(x)Y(y)Z(z)$, the three-dimensional probability density factors identically:
$$\\boxed{\\rho(x, y, z) = |\\psi(x,y,z)|^2 = |X(x)|^2 |Y(y)|^2 |Z(z)|^2 = \\rho_x(x) \\rho_y(y) \\rho_z(z)}$$
The normalization condition is:
$$\\int_{-\\infty}^\\infty dx \\int_{-\\infty}^\\infty dy \\int_{-\\infty}^\\infty dz \\, |\\psi(x,y,z)|^2 = \\left(\\int |X|^2 dx\\right) \\left(\\int |Y|^2 dy\\right) \\left(\\int |Z|^2 dz\\right) = 1 \\times 1 \\times 1 = 1$$
<b>Statistical Independence:</b> The probability of finding the particle in the spatial volume element $dx \\, dy \\, dz$ is the joint probability of three statistically independent events. Consequently:
$$\\langle f(x) g(y) h(z) \\rangle = \\langle f(x) \\rangle \\langle g(y) \\rangle \\langle h(z) \\rangle$$`,
    intuition: `This is identical to elementary probability theory: when two random variables are independent, their joint probability density is the product of their marginal densities $P(x,y) = P(x)P(y)$. A measurement of the particle's $x$-coordinate yields zero information about its $y$- or $z$-coordinate.`,
    needs: ['c.4.2.1', 'c.1.3.2'],
    traps: [
      `Assuming probability density factorizes for non-separable states. A superposition like $\\Psi = \\frac{1}{\\sqrt{2}}(X_1 Y_1 Z_1 + X_2 Y_2 Z_2)$ is entangled across coordinates and does NOT factorize!`,
      `Forgetting that the volume element in 3D Cartesian coordinates is $d^3r = dx \\, dy \\, dz$.`
    ],
    cards: [
      { q: 'What is the expectation value $\\langle x y \\rangle$ for a product state $\\psi(x,y,z) = X(x)Y(y)Z(z)$?', a: '$\\langle x y \\rangle = \\langle x \\rangle \\langle y \\rangle$.', kind: 'recall' },
      { q: 'Does the probability density factorize for an arbitrary superposition of 3D states?', a: 'No, cross-terms introduce spatial correlations (spatial entanglement).', kind: 'state' }
    ]
  },

  /* ── 4.3 The Box Potential & Degeneracy ──────────────────────────────────── */
  {
    id: 'c.4.3.1', sec: '4.3', kind: 'theorem', tier: 'core',
    title: 'The 3D Rectangular Potential Box',
    oneLine: 'A particle confined to an Lx × Ly × Lz box has quantized energies Enx,ny,nz = (π²ħ²/2m) (nx²/Lx² + ny²/Ly² + nz²/Lz²).',
    statement: `A particle of mass $m$ is confined inside a rigid 3D rectangular box of side lengths $L_x, L_y, L_z$:
$$V(x, y, z) = \\begin{cases} 0 & \\text{if } 0 < x < L_x, \\; 0 < y < L_y, \\; 0 < z < L_z \\\\ \\infty & \\text{otherwise} \\end{cases}$$
The wave functions must vanish at all six walls. The normalized stationary wave functions are:
$$\\boxed{\\psi_{n_x, n_y, n_z}(x, y, z) = \\sqrt{\\frac{8}{L_x L_y L_z}} \\sin\\left(\\frac{n_x \\pi x}{L_x}\\right) \\sin\\left(\\frac{n_y \\pi y}{L_y}\\right) \\sin\\left(\\frac{n_z \\pi z}{L_z}\\right)}$$
with independent positive integers:
$$n_x, n_y, n_z = 1, 2, 3, \\dots$$
The quantized energy eigenvalues are:
$$\\boxed{E_{n_x, n_y, n_z} = \\frac{\\pi^2 \\hbar^2}{2m} \\left( \\frac{n_x^2}{L_x^2} + \\frac{n_y^2}{L_y^2} + \\frac{n_z^2}{L_z^2} \\right)}$$`,
    intuition: `Notice how each dimension contributes its own standing wave condition: $k_x L_x = n_x \\pi, k_y L_y = n_y \\pi, k_z L_z = n_z \\pi$. If any quantum number were zero ($n_x = 0$), the wave function would be identically zero everywhere ($\sin(0) = 0$), representing no particle at all! Therefore, the ground state corresponds to $(n_x, n_y, n_z) = (1, 1, 1)$, giving a non-zero ground state energy.`,
    needs: ['c.2.2.2', 'c.4.2.1'],
    traps: [
      `Allowing any quantum number to be zero ($n_x = 0$). Quantum numbers for infinite wells must start strictly at $1$.`,
      `Using the 1D normalization prefactor $\\sqrt{2/L}$. In 3D, the normalization factor is $\\sqrt{2/L_x} \\sqrt{2/L_y} \\sqrt{2/L_z} = \\sqrt{8/V}$.`
    ],
    cards: [
      { q: 'What is the ground state energy of a particle in a 3D rectangular box?', a: '$E_{1,1,1} = \\frac{\\pi^2\\hbar^2}{2m}\\left(\\frac{1}{L_x^2} + \\frac{1}{L_y^2} + \\frac{1}{L_z^2}\\right)$.', kind: 'state' },
      { q: 'Why are $n_x, n_y, n_z = 0$ forbidden for the 3D infinite box?', a: 'Because $\\sin(0) = 0$ makes the wave function identically zero everywhere, which cannot be normalized.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.3.2', sec: '4.3', kind: 'theorem', tier: 'core',
    title: 'The 3D Cubic Box Potential & Symmetry-Induced Degeneracy',
    oneLine: 'In a cubic box (L = Lx = Ly = Lz), permutation symmetry causes energy levels to exhibit 1-fold, 3-fold, or 6-fold degeneracy.',
    statement: `For a <b>cubic box</b> where $L_x = L_y = L_z = L$:
$$\\boxed{E_{n_x, n_y, n_z} = \\frac{\\pi^2 \\hbar^2}{2m L^2}(n_x^2 + n_y^2 + n_z^2) = E_1 (n_x^2 + n_y^2 + n_z^2)}$$
where $E_1 = \\frac{\\pi^2 \\hbar^2}{2m L^2}$.<br>
Because the sum of squares $n_x^2 + n_y^2 + n_z^2$ is invariant under permutations of $(n_x, n_y, n_z)$, energy levels exhibit <b>geometric (symmetry-induced) degeneracy</b>:
<ol>
  <li><b>Ground State $(1, 1, 1)$:</b> $E = 3 E_1$, <b>Non-degenerate ($g = 1$)</b>.</li>
  <li><b>First Excited State:</b> $(2, 1, 1), (1, 2, 1), (1, 1, 2) \\implies E = 6 E_1$, <b>3-fold degenerate ($g = 3$)</b>.</li>
  <li><b>Second Excited State:</b> $(2, 2, 1), (2, 1, 2), (1, 2, 2) \\implies E = 9 E_1$, <b>3-fold degenerate ($g = 3$)</b>.</li>
  <li><b>Third Excited State:</b> $(3, 1, 1), (1, 3, 1), (1, 1, 3) \\implies E = 11 E_1$, <b>3-fold degenerate ($g = 3$)</b>.</li>
  <li><b>Fourth State:</b> $(2, 2, 2) \\implies E = 12 E_1$, <b>Non-degenerate ($g = 1$)</b>.</li>
  <li><b>States with 3 Distinct Quantum Numbers:</b> Such as $(1, 2, 3)$, have $3! = 6$ permutations, producing <b>6-fold degeneracy ($g = 6$)</b> at $E = (1+4+9)E_1 = 14 E_1$.</li>
</ol>`,
    intuition: `Degeneracy is the direct physical fingerprint of spatial symmetry! A cubic box looks identical when rotated by $90^\\circ$ around any coordinate axis or reflected through a diagonal plane (the octahedral point group symmetry $O_h$). Permuting the quantum numbers corresponds to rotating the spatial nodal planes among the $x, y,$ and $z$ axes without changing the total kinetic energy. If the box is deformed into a rectangular cuboid ($L_x \\ne L_y$), the symmetry is broken and the degeneracy splits!`,
    needs: ['c.4.3.1'],
    traps: [
      `Confusing the degree of degeneracy: all permutations of identical numbers $(1,1,1)$ give $g=1$; two equal numbers $(2,1,1)$ give $g=3$; three distinct numbers $(1,2,3)$ give $g=6$.`,
      `Thinking (2,2,2) is degenerate. All three indices are identical, so there is only one state: $g=1$.`
    ],
    cards: [
      { q: 'What is the degeneracy of the first excited state in a 3D cubic potential well?', a: '3-fold degenerate ($g=3$), corresponding to the states $(2,1,1)$, $(1,2,1)$, and $(1,1,2)$.', kind: 'state' },
      { q: 'What is the degeneracy of the energy level $E = 14 \\frac{\\pi^2\\hbar^2}{2mL^2}$ in a cubic box?', a: '6-fold degenerate ($g = 6$), corresponding to the 6 permutations of $(1, 2, 3)$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.3.3', sec: '4.3', kind: 'definition', tier: 'core',
    title: 'Accidental vs. Geometric Degeneracy in 3D Wells',
    oneLine: 'Accidental degeneracy occurs when different sets of quantum numbers share the same sum of squares, e.g. 3²+3²+3² = 5²+1²+1² = 27.',
    statement: `In quantum mechanics, degeneracies are classified into two fundamental categories:
1. <b>Geometric (Essential / Symmetry) Degeneracy:</b> Arises directly from the geometric symmetry of the Hamiltonian (e.g., permutation of coordinates in a cubic box or rotational invariance in central potentials).
2. <b>Accidental Degeneracy:</b> Occurs when two completely different sets of quantum numbers $(n_x, n_y, n_z)$ share the identical energy eigenvalue by numerical coincidence, without being related by any apparent geometric symmetry.<br>
<b>Example in a Cubic Box:</b> Consider energy $E = 27 E_1$:
<ol>
  <li>Set 1: $(3, 3, 3) \\implies 3^2 + 3^2 + 3^2 = 9 + 9 + 9 = 27$ ($1$ state).</li>
  <li>Set 2: Permutations of $(5, 1, 1) \\implies 5^2 + 1^2 + 1^2 = 25 + 1 + 1 = 27$ ($3$ states).</li>
</ol>
The total degeneracy of this energy level is:
$$g = 1 + 3 = 4$$
The state $(3,3,3)$ and the states $(5,1,1)$ have identical energy $27 E_1$ despite having completely different spatial nodal structures!`,
    intuition: `In number theory, accidental degeneracy corresponds to multiple representations of an integer as a sum of three squares. While physicists historically called them "accidental", modern quantum theory reveals that many accidental degeneracies (such as the $n^2$ degeneracy in the Hydrogen atom or the isotropic oscillator) actually arise from hidden dynamical symmetries ($SO(4)$ or $SU(3)$ Lie algebras).`,
    needs: ['c.4.3.2'],
    traps: [
      `Overlooking accidental combinations when computing total level degeneracy. Always check whether multiple partitions of $n_x^2 + n_y^2 + n_z^2$ sum to the same integer!`,
      `Assuming accidental degeneracy is present in every potential well; it depends strictly on commensurability of dimensions or integers.`
    ],
    cards: [
      { q: 'What is the total degeneracy of the energy level $E = 27 \\frac{\\pi^2\\hbar^2}{2mL^2}$ in a 3D cubic box?', a: '4-fold degenerate: $(3,3,3)$ [1 state] and $(5,1,1), (1,5,1), (1,1,5)$ [3 states].', kind: 'state' },
      { q: 'Distinguish between essential (geometric) and accidental degeneracy.', a: 'Essential degeneracy arises from geometric symmetries (like rotations or coordinate permutations); accidental degeneracy arises from number-theoretic coincidences or hidden dynamical symmetries.', kind: 'recall' }
    ]
  },

  /* ── 4.4 The 3D Harmonic Oscillator ───────────────────────────────────────── */
  {
    id: 'c.4.4.1', sec: '4.4', kind: 'law', tier: 'core',
    title: 'The 3D Anisotropic Harmonic Oscillator',
    oneLine: 'With distinct frequencies ωx, ωy, ωz, the energy is Enx,ny,nz = (nx + ½)ħωx + (ny + ½)ħωy + (nz + ½)ħωz.',
    statement: `The Hamiltonian of a <b>3D anisotropic harmonic oscillator</b> with unequal spring constants along the three axes is:
$$\\hat{H} = \\frac{\\hat{p}_x^2 + \\hat{p}_y^2 + \\hat{p}_z^2}{2m} + \\frac{1}{2}m(\\omega_x^2 x^2 + \\omega_y^2 y^2 + \\omega_z^2 z^2)$$
Since the Hamiltonian separates into three independent 1D harmonic oscillators $\\hat{H} = \\hat{H}_x + \\hat{H}_y + \\hat{H}_z$, we define three independent sets of ladder operators:
$$[\\hat{a}_j, \\hat{a}_k^\\dagger] = \\delta_{jk} \\hat{I}, \\qquad [\\hat{a}_j, \\hat{a}_k] = [\\hat{a}_j^\\dagger, \\hat{a}_k^\\dagger] = 0 \\quad (j, k \\in \\{x, y, z\\})$$
The stationary states are tensor products $|n_x, n_y, n_z\\rangle = |n_x\\rangle \\otimes |n_y\\rangle \\otimes |n_z\\rangle$ with:
$$\\boxed{E_{n_x, n_y, n_z} = \\left(n_x + \\frac{1}{2}\\right)\\hbar\\omega_x + \\left(n_y + \\frac{1}{2}\\right)\\hbar\\omega_y + \\left(n_z + \\frac{1}{2}\\right)\\hbar\\omega_z}$$
where $n_x, n_y, n_z = 0, 1, 2, 3, \\dots$.<br>
The ground state energy is:
$$E_{0,0,0} = \\frac{1}{2}\\hbar(\\omega_x + \\omega_y + \\omega_z)$$`,
    intuition: `If the frequencies are incommensurate (their ratios are irrational numbers), every single energy level is strictly non-degenerate! However, if the frequencies are commensurate (e.g. $\\omega_x : \\omega_y : \\omega_z = 1 : 2 : 3$), accidental degeneracies appear whenever different linear combinations of integers yield the same total sum.`,
    needs: ['c.4.1.3', 'c.4.2.1'],
    traps: [
      `Assuming energy levels are always degenerate in 3D oscillators. Anisotropic oscillators with incommensurate frequencies have ZERO degeneracies.`,
      `Starting the quantum numbers at 1; harmonic oscillator quantum numbers always start at $n=0$.`
    ],
    cards: [
      { q: 'State the ground-state energy of a 3D anisotropic harmonic oscillator.', a: '$E_{0,0,0} = \\frac{1}{2}\\hbar(\\omega_x + \\omega_y + \\omega_z)$.', kind: 'state' },
      { q: 'Under what condition does an anisotropic oscillator exhibit degeneracy?', a: 'When the frequencies are commensurate (rational ratios), allowing different sets of $(n_x, n_y, n_z)$ to produce the same energy.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.4.2', sec: '4.4', kind: 'theorem', tier: 'core',
    title: 'The 3D Isotropic Harmonic Oscillator',
    oneLine: 'When ωx = ωy = ωz = ω, the energy depends only on the principal quantum number N = nx + ny + nz: EN = (N + 3/2)ħω.',
    statement: `For a <b>3D isotropic harmonic oscillator</b>, the potential is spherically symmetric:
$$V(r) = \\frac{1}{2}m\\omega^2 (x^2 + y^2 + z^2) = \\frac{1}{2}m\\omega^2 r^2$$
All three frequencies are identical: $\\omega_x = \\omega_y = \\omega_z = \\omega$.<br>
The energy eigenvalues depend strictly on the total (principal) vibrational quantum number:
$$\\boxed{N = n_x + n_y + n_z, \\qquad N = 0, 1, 2, 3, \\dots}$$
The quantized energy levels are:
$$\\boxed{E_N = \\left(N + \\frac{3}{2}\\right)\\hbar\\omega}$$
<b>Zero-Point Energy ($N=0$):</b>
$$E_0 = \\frac{3}{2}\\hbar\\omega$$
Each spatial dimension contributes $\\frac{1}{2}\\hbar\\omega$ to the minimum ground-state energy.`,
    intuition: `Because $V(r) = \\frac{1}{2}m\\omega^2 r^2$ is spherically symmetric, the 3D isotropic oscillator can be solved with equal elegance in spherical coordinates $(r, \\theta, \\phi)$ where energy eigenstates are labeled by radial and angular momentum quantum numbers $|n_r, l, m\\rangle$. Both representations yield the exact same energy eigenvalues and identical total degeneracies!`,
    needs: ['c.4.4.1'],
    traps: [
      `Using $E_0 = \\frac{1}{2}\\hbar\\omega$ for the 3D ground state. Each degree of freedom has zero-point energy $\\frac{1}{2}\\hbar\\omega$, so in 3D, $E_0 = 3 \\times \\frac{1}{2}\\hbar\\omega = \\frac{3}{2}\\hbar\\omega$.`,
      `Confusing $N$ with the number of dimensions. $N = n_x + n_y + n_z$ is the total number of excitation quanta.`
    ],
    cards: [
      { q: 'What is the zero-point energy of a 3D isotropic harmonic oscillator?', a: '$E_0 = \\frac{3}{2}\\hbar\\omega$.', kind: 'state' },
      { q: 'What is the energy of the first excited state of a 3D isotropic harmonic oscillator?', a: '$E_1 = \\left(1 + \\frac{3}{2}\\right)\\hbar\\omega = \\frac{5}{2}\\hbar\\omega$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.4.4.3', sec: '4.4', kind: 'theorem', tier: 'core',
    title: 'Exact Degeneracy Formula gN = (N+1)(N+2)/2 for 3D Isotropic Oscillator',
    oneLine: 'The degeneracy of level EN in a 3D isotropic oscillator is gN = ½ (N + 1)(N + 2), arising from the SU(3) dynamical symmetry.',
    statement: `The degree of degeneracy $g_N$ of the energy level $E_N = \\left(N + \\frac{3}{2}\\right)\\hbar\\omega$ is the number of distinct partitions of the non-negative integer $N$ into three non-negative integers $(n_x, n_y, n_z)$:
$$n_x + n_y + n_z = N, \\qquad n_x, n_y, n_z \\ge 0$$
Using the stars and bars combinatorial theorem:
$$\\boxed{g_N = \\binom{N + 3 - 1}{3 - 1} = \\binom{N + 2}{2} = \\frac{(N + 1)(N + 2)}{2}}$$
<b>Explicit Spectrum of Degeneracies:</b>
<ul>
  <li><b>Ground State ($N = 0$):</b> $E_0 = \\frac{3}{2}\\hbar\\omega \\implies g_0 = \\frac{1 \\times 2}{2} = 1$ (State: $(0,0,0)$).</li>
  <li><b>1st Excited State ($N = 1$):</b> $E_1 = \\frac{5}{2}\\hbar\\omega \\implies g_1 = \\frac{2 \\times 3}{2} = 3$ (States: $(1,0,0), (0,1,0), (0,0,1)$).</li>
  <li><b>2nd Excited State ($N = 2$):</b> $E_2 = \\frac{7}{2}\\hbar\\omega \\implies g_2 = \\frac{3 \\times 4}{2} = 6$ (States: 3 of type $(2,0,0)$ + 3 of type $(1,1,0)$).</li>
  <li><b>3rd Excited State ($N = 3$):</b> $E_3 = \\frac{9}{2}\\hbar\\omega \\implies g_3 = \\frac{4 \\times 5}{2} = 10$ (States: 3 of type $(3,0,0)$ + 6 of type $(2,1,0)$ + 1 of type $(1,1,1)$).</li>
</ul>`,
    intuition: `This quadratic growth in degeneracy $g_N \\propto N^2$ is much larger than the spatial $SO(3)$ rotational degeneracy $(2l+1)$. This extra degeneracy is governed by the special unitary group $SU(3)$—the dynamical symmetry of the isotropic oscillator. The 8 generators of $SU(3)$ (composed of quadrupole tensor operators $T_{ij} = \\frac{1}{2}\\{x_i, x_j\\} + \\dots$) commute with $\\hat{H}$ and transform degenerate states into one another.`,
    needs: ['c.4.4.2'],
    traps: [
      `Using the formula for 2D oscillator $g_N = N + 1$ instead of 3D $g_N = \\frac{(N+1)(N+2)}{2}$.`,
      `Forgetting that the ground state $N=0$ has $g_0 = 1$ (not zero!).`
    ],
    proof: {
      idea: 'Sum the allowed combinations of (ny, nz) for each choice of nx from 0 to N.',
      why: 'Derive gN = (N+1)(N+2)/2 by direct summation.',
      rungs: [
        {
          why: 'Fix nx and Count Remaining Variables',
          m: '$$n_y + n_z = N - n_x$$',
          meaning: 'What this really means: For each chosen integer nx, ny can take any integer value from 0 up to N - nx.',
          label: 'Fix nx and Count Remaining Variables',
          math: 'n_y + n_z = N - n_x',
          note: 'Reduce to 2 variables.'
        },
        {
          why: 'Count Choices for Each nx',
          m: '$$\\text{Choices for } n_y \\in \\{0, 1, \\dots, N - n_x\\} \\implies (N - n_x + 1) \\text{ states}$$',
          meaning: 'What this really means: Once ny is chosen, nz is uniquely fixed as nz = N - nx - ny.',
          label: 'Count Choices for Each nx',
          math: '\\text{Number of states for fixed } n_x = N - n_x + 1',
          note: 'Linearly dependent count.'
        },
        {
          why: 'Sum Over All Allowed Values of nx',
          m: '$$g_N = \\sum_{n_x=0}^N (N - n_x + 1) = (N + 1) + N + (N - 1) + \\dots + 1 = \\sum_{k=1}^{N+1} k$$',
          meaning: 'What this really means: Sum of the first N + 1 positive integers.',
          label: 'Sum Over All Allowed Values of nx',
          math: 'g_N = \\sum_{k=1}^{N+1} k',
          note: 'Arithmetic series.'
        },
        {
          why: 'Evaluate Arithmetic Series',
          m: '$$g_N = \\frac{(N + 1)(N + 2)}{2}$$',
          meaning: 'What this really means: Yields the exact closed-form degeneracy formula.',
          label: 'Evaluate Arithmetic Series',
          math: 'g_N = \\frac{(N+1)(N+2)}{2}',
          note: 'Formula established.'
        }
      ]
    },
    cards: [
      { q: 'State the degeneracy formula for the $N$-th energy level of a 3D isotropic harmonic oscillator.', a: '$g_N = \\frac{(N+1)(N+2)}{2}$.', kind: 'state' },
      { q: 'What is the degeneracy of the second excited state ($N=2$) in a 3D isotropic harmonic oscillator?', a: '$g_2 = \\frac{(2+1)(2+2)}{2} = \\frac{3 \\times 4}{2} = 6$.', kind: 'recall' }
    ]
  }
);

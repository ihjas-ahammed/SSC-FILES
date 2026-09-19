/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module II — Time-Independent Schrödinger Equation
   Prescribed Texts: Griffiths 3e (Ch 2: §§2.1, 2.2, 2.4) & Zettili 2e (§3.6.4, §§4.4, 4.5)
   Sections: 2.1 to 2.6 (24 Core Concepts with full derivation ladders & flashcards)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 2.1 Stationary States ────────────────────────────────────────────────── */
  {
    id: 'c.2.1.1', sec: '2.1', kind: 'theorem', tier: 'core',
    title: 'Separation of Variables and the Time-Independent Schrödinger Equation',
    oneLine: 'Factoring Ψ(x,t) = ψ(x)φ(t) splits the TDSE into a trivial harmonic time equation and the spatial eigenvalue equation Ĥψ = Eψ.',
    statement: `When the potential energy is independent of time, $V(x,t) = V(x)$, the Time-Dependent Schrödinger Equation admits separable solutions of the form:
$$\\Psi(x,t) = \\psi(x)\\phi(t)$$
Substituting into the TDSE yields the time equation $\\frac{d\\phi}{dt} = -\\frac{iE}{\\hbar}\\phi$, with solution $\\phi(t) = e^{-iEt/\\hbar}$, and the <b>Time-Independent Schrödinger Equation (TISE)</b> for the spatial wave function $\\psi(x)$:
$$\\boxed{-\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi}{dx^2} + V(x)\\psi = E\\psi} \\quad \\Longleftrightarrow \\quad \\hat{H}\\psi = E\\psi$$
where $\\hat{H} = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x)$ is the Hamiltonian operator and $E$ is the separation constant representing the total energy eigenvalue.`,
    intuition: `When the potential does not change with time, energy is conserved. In differential equations, a time-invariant background allows space and time to decouple. The time factor is universally a steady clock winding at frequency $\\omega = E/\\hbar$: $e^{-iEt/\\hbar}$. All non-trivial spatial physics—nodes, curvature, boundary conditions, and quantization—is entirely isolated within the spatial differential equation $\\hat{H}\\psi = E\\psi$.`,
    needs: ['c.1.1.2'],
    traps: [
      `Assuming every solution to the Schrödinger equation is separable. Only stationary eigenstates are separable; the general physical wave function is a non-separable linear superposition of separable modes.`,
      `Treating the separation constant $E$ as an arbitrary mathematical variable. Physical boundary conditions (such as normalizability $\\int |\\psi|^2 dx < \\infty$) restrict $E$ to discrete allowed eigenvalues for bound states.`
    ],
    proof: {
      idea: 'Substitute Ψ(x,t) = ψ(x)φ(t) into the TDSE and divide by ψ(x)φ(t) so that the left side depends only on t and the right side depends only on x.',
      why: 'A function of time alone can equal a function of space alone only if both equal a shared constant E.',
      rungs: [
        { label: 'Separation Ansatz', math: '\\Psi(x,t) = \\psi(x)\\phi(t) \\implies \\frac{\\partial \\Psi}{\\partial t} = \\psi \\frac{d\\phi}{dt}, \\quad \\frac{\\partial^2 \\Psi}{\\partial x^2} = \\phi \\frac{d^2 \\psi}{dx^2}', note: 'Substitute into the TDSE: iħ ∂Ψ/∂t = -(ħ²/2m) ∂²Ψ/∂x² + V(x)Ψ.' },
        { label: 'Divide by ψφ', math: 'i\\hbar \\psi(x) \\frac{d\\phi}{dt} = -\\frac{\\hbar^2}{2m} \\phi(t) \\frac{d^2 \\psi}{dx^2} + V(x)\\psi(x)\\phi(t) \\implies i\\hbar \\frac{1}{\\phi(t)} \\frac{d\\phi}{dt} = -\\frac{\\hbar^2}{2m} \\frac{1}{\\psi(x)} \\frac{d^2 \\psi}{dx^2} + V(x)', note: 'The left side is purely a function of t, while the right side is purely a function of x.' },
        { label: 'Equate to Constant E', math: 'i\\hbar \\frac{1}{\\phi} \\frac{d\\phi}{dt} = E \\quad \\text{and} \\quad -\\frac{\\hbar^2}{2m} \\frac{d^2 \\psi}{dx^2} + V(x)\\psi = E\\psi', note: 'Since x and t vary independently, both sides must equal the same separation constant E.' },
        { label: 'Integrate Time Equation', math: '\\frac{d\\phi}{\\phi} = -\\frac{iE}{\\hbar} dt \\implies \\ln \\phi = -\\frac{iEt}{\\hbar} + C \\implies \\phi(t) = e^{-iEt/\\hbar}', note: 'The integration constant is absorbed into the normalization of ψ(x).' },
        { label: 'Final Spatial Eigenvalue Form', math: '\\hat{H}\\psi(x) = E\\psi(x), \\quad \\text{with } \\hat{H} = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x)', note: 'The TISE is the eigenvalue equation for the energy observable (Hamiltonian).' }
      ]
    },
    cards: [
      { q: 'What is the form of the time-dependent phase factor for a stationary state of energy $E$?', a: '$\\phi(t) = e^{-iEt/\\hbar}$.', kind: 'state' },
      { q: 'State the Time-Independent Schrödinger Equation (TISE) in operator form.', a: '$\\hat{H}\\psi = E\\psi$, where $\\hat{H} = -\\frac{\\hbar^2}{2m}\\frac{d^2}{dx^2} + V(x)$.', kind: 'state' },
      { q: 'Why must the separation constant $E$ be real for a normalizable state?', a: 'If $E$ had an imaginary part $-i\\Gamma$, $\\phi(t) = e^{-\\Gamma t/\\hbar} e^{-i\\text{Re}(E)t/\\hbar}$, which would cause total probability to decay or blow up exponentially over time.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.1.2', sec: '2.1', kind: 'property', tier: 'core',
    title: 'Properties of Stationary States: Static Probability Density and Expectation Values',
    oneLine: 'In a stationary state, |Ψ(x,t)|² = |ψ(x)|² and d⟨Q⟩/dt = 0: no observable property changes with time.',
    statement: `For a particle in a stationary state $\\Psi(x,t) = \\psi(x)e^{-iEt/\\hbar}$:
1. The <b>probability density</b> is strictly static:
$$|\\Psi(x,t)|^2 = \\Psi^*(x,t)\\Psi(x,t) = \\psi^*(x) e^{+iEt/\\hbar} \\psi(x) e^{-iEt/\\hbar} = |\\psi(x)|^2$$
2. The expectation value of any time-independent observable $\\hat{Q}$ is constant in time:
$$\\frac{d}{dt} \\langle \\hat{Q} \\rangle = 0, \\quad \\langle \\hat{Q} \\rangle = \\int_{-\\infty}^\\infty \\psi^*(x) \\hat{Q} \\psi(x) dx$$`,
    intuition: `Stationary does not mean the particle is sitting motionless at one spot. It means the statistical probability distribution does not change. The wave function is oscillating feverishly in the complex phase, but because measurements depend solely on the modulus squared $|\\Psi|^2$, every physical readout (position distribution, momentum distribution, energy) remains completely motionless in time.`,
    needs: ['c.2.1.1', 'c.1.2.1'],
    traps: [
      `Thinking the particle is literally at rest in a stationary state. It has non-zero kinetic energy $\\langle T \\rangle > 0$ and momentum variance $\\sigma_p^2 > 0$; only the probability distribution is static.`,
      `Assuming the sum of two stationary states is also stationary. A linear combination $\\Psi = c_1\\psi_1 e^{-iE_1 t/\\hbar} + c_2\\psi_2 e^{-iE_2 t/\\hbar}$ produces cross-terms that oscillate at the Bohr transition frequency $\\omega = (E_2 - E_1)/\\hbar$.`
    ],
    proof: {
      idea: 'Compute the modulus squared of Ψ(x,t) and sandwich an arbitrary time-independent operator Q between Ψ* and Ψ.',
      why: 'Show that the complex exponential phase factors cancel identically.',
      rungs: [
        { label: 'Evaluate Modulus Squared', math: '|\\Psi(x,t)|^2 = \\left(\\psi(x)e^{-iEt/\\hbar}\\right)^* \\left(\\psi(x)e^{-iEt/\\hbar}\\right) = \\psi^*(x)\\psi(x) e^{iEt/\\hbar} e^{-iEt/\\hbar} = |\\psi(x)|^2', note: 'Phase factor product is e^0 = 1.' },
        { label: 'Sandwich Operator Q', math: '\\langle \\hat{Q} \\rangle = \\int \\Psi^* \\hat{Q} \\Psi dx = \\int \\left(\\psi^*(x)e^{iEt/\\hbar}\\right) \\hat{Q} \\left(\\psi(x)e^{-iEt/\\hbar}\\right) dx', note: 'Since Q does not depend on time, e^{-iEt/ħ} passes freely through Q.' },
        { label: 'Phase Cancellation', math: '\\langle \\hat{Q} \\rangle = e^{iEt/\\hbar} e^{-iEt/\\hbar} \\int \\psi^*(x) \\hat{Q} \\psi(x) dx = \\int \\psi^*(x) \\hat{Q} \\psi(x) dx', note: 'The integral has no time dependence whatsoever.' },
        { label: 'Differentiate with Respect to Time', math: '\\frac{d}{dt} \\langle \\hat{Q} \\rangle = 0', note: 'Hence every observable expectation value is completely stationary.' }
      ]
    },
    cards: [
      { q: 'Why is |Ψ(x,t)|² independent of time for a separable solution?', a: 'Because the time factor $e^{-iEt/\\hbar}$ has unit modulus: $|e^{-iEt/\\hbar}|^2 = e^{+iEt/\\hbar}e^{-iEt/\\hbar} = 1$.', kind: 'recall' },
      { q: 'What is the time derivative of ⟨Q⟩ for any time-independent observable Q in a stationary state?', a: '$\\frac{d}{dt}\\langle Q \\rangle = 0$.', kind: 'state' },
      { q: 'Does a superposition of two states with different energies E₁ ≠ E₂ have a static probability density?', a: 'No. Cross-terms produce sinusoidal oscillations at the Bohr angular frequency $\\omega = |E_2 - E_1|/\\hbar$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.1.3', sec: '2.1', kind: 'property', tier: 'core',
    title: 'Definite Total Energy and Zero Energy Variance',
    oneLine: 'A stationary state has sharp total energy: ⟨H⟩ = E, ⟨H²⟩ = E², and energy variance σ_H² = 0.',
    statement: `Every stationary state $\\psi_n$ has a definite, sharp value for total energy. Specifically:
$$\\langle \\hat{H} \\rangle = E_n, \\qquad \\langle \\hat{H}^2 \\rangle = E_n^2$$
which implies that the energy variance vanishes identically:
$$\\boxed{\\sigma_H^2 = \\langle \\hat{H}^2 \\rangle - \\langle \\hat{H} \\rangle^2 = 0}$$
Every single measurement of the total energy on a system in state $\\psi_n$ yields the exact eigenvalue $E_n$ with 100% certainty (zero dispersion).`,
    intuition: `In statistics, variance is zero if and only if every single sample in the population produces the exact same number. Because $\\psi_n$ is an eigenvector of $\\hat{H}$, operating on it with $\\hat{H}$ simply multiplies it by the scalar $E_n$. There is no uncertainty in total energy for a stationary state.`,
    needs: ['c.2.1.1', 'c.1.3.3'],
    traps: [
      `Confusing energy certainty with position or momentum certainty. While $\\sigma_H = 0$ in a stationary state, $\\sigma_x > 0$ and $\\sigma_p > 0$; Heisenberg's uncertainty principle $\\sigma_x \\sigma_p \\ge \\hbar/2$ remains strictly satisfied.`,
      `Thinking that measuring energy on an arbitrary state always gives ⟨H⟩. Measuring energy on a superposition $\\sum c_n \\psi_n$ collapses the state and yields one of the eigenvalues $E_n$, never an intermediate average value.`
    ],
    proof: {
      idea: 'Apply Ĥψ = Eψ and Ĥ²ψ = Ĥ(Ĥψ) = E²ψ inside the inner product integrals.',
      why: 'Show that ⟨H²⟩ equals ⟨H⟩² directly from the eigenvalue equation.',
      rungs: [
        { label: 'Compute ⟨H⟩', math: '\\langle \\hat{H} \\rangle = \\int \\psi^* \\hat{H} \\psi dx = \\int \\psi^* (E\\psi) dx = E \\int |\\psi|^2 dx = E', note: 'Using ψ normalized to unity.' },
        { label: 'Compute ⟨H²⟩', math: '\\hat{H}^2 \\psi = \\hat{H}(\\hat{H}\\psi) = \\hat{H}(E\\psi) = E(\\hat{H}\\psi) = E(E\\psi) = E^2 \\psi', note: 'Operating twice scales by E².' },
        { label: 'Integral for ⟨H²⟩', math: '\\langle \\hat{H}^2 \\rangle = \\int \\psi^* \\hat{H}^2 \\psi dx = E^2 \\int |\\psi|^2 dx = E^2', note: 'The expectation value of H² is exactly E².' },
        { label: 'Compute Variance σ_H²', math: '\\sigma_H^2 = \\langle \\hat{H}^2 \\rangle - \\langle \\hat{H} \\rangle^2 = E^2 - E^2 = 0', note: 'Zero variance confirms definite energy with no statistical spread.' }
      ]
    },
    cards: [
      { q: 'What is the energy variance $\\sigma_H^2$ in a stationary state $\\psi_n$?', a: '$\\sigma_H^2 = 0$. Energy is sharply defined.', kind: 'state' },
      { q: 'What does $\\sigma_H = 0$ imply about repeated energy measurements on an ensemble of identical stationary states?', a: 'Every single measurement returns the exact same eigenvalue $E$, with zero dispersion.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.1.4', sec: '2.1', kind: 'theorem', tier: 'core',
    title: 'General Solution as a Linear Combination and Probability Amplitudes',
    oneLine: 'The general solution to the TDSE is Ψ(x,t) = ∑ c_n ψ_n(x) e^{-iE_n t/ħ}, where |c_n|² is the probability of measuring energy E_n.',
    statement: `Because the TDSE is linear, the most general time-dependent wave function for a time-independent potential $V(x)$ is a linear superposition of all stationary states:
$$\\boxed{\\Psi(x,t) = \\sum_{n=1}^\\infty c_n \\psi_n(x) e^{-iE_n t/\\hbar}}$$
where the expansion coefficients $c_n \\in \\mathbb{C}$ are determined by the initial wave function $\\Psi(x,0)$ via Fourier's trick:
$$c_n = \\int_{-\\infty}^\\infty \\psi_n^*(x) \\Psi(x,0) dx$$
<b>Physical Interpretation:</b> $|c_n|^2$ is the probability that a measurement of total energy will yield the eigenvalue $E_n$. Total probability conservation requires $\\sum_{n=1}^\\infty |c_n|^2 = 1$, and $\\langle H \\rangle = \\sum_{n=1}^\\infty |c_n|^2 E_n$.`,
    intuition: `Stationary states are like the pure harmonics (normal modes) of a violin string. A plucked string vibrates in a complicated, shifting shape that is not a pure standing tone, but a sum of pure standing harmonics. Similarly, any valid quantum state is a chord of stationary states. Hand it $\\Psi(x,0)$, compute the projection coefficients $c_n$, and then each harmonic ticks forward with its own phase clock $e^{-iE_n t/\\hbar}$.`,
    needs: ['c.2.1.1', 'c.1.4.1'],
    traps: [
      `Forgetting that the phase factor $e^{-iE_n t/\\hbar}$ has a different frequency for every energy level $n$. You cannot factor the time dependence out of the sum!`,
      `Assuming energy measurements can yield intermediate values like $\\langle H \\rangle$. A measurement ALWAYS collapses the system to a single eigenstate $\\psi_n$ and returns the discrete eigenvalue $E_n$.`
    ],
    proof: {
      idea: 'Exploit the linearity of the TDSE and the completeness of the spatial eigenfunctions ψ_n(x).',
      why: 'Any linear combination of solutions to a linear homogeneous differential equation is itself a solution.',
      rungs: [
        { label: 'Superposition Principle', math: 'i\\hbar \\frac{\\partial}{\\partial t} \\left(\\sum c_n \\psi_n e^{-iE_n t/\\hbar}\\right) = \\sum c_n E_n \\psi_n e^{-iE_n t/\\hbar} = \\hat{H} \\left(\\sum c_n \\psi_n e^{-iE_n t/\\hbar}\\right)', note: 'Linearity ensures the sum satisfies the TDSE term-by-term.' },
        { label: 'Initial Condition at t = 0', math: '\\Psi(x,0) = \\sum_{n=1}^\\infty c_n \\psi_n(x)', note: 'Setting t = 0 eliminates the exponential phase factors.' },
        { label: 'Fourier Trick for c_n', math: '\\int \\psi_m^*(x) \\Psi(x,0) dx = \\sum_n c_n \\int \\psi_m^*(x) \\psi_n(x) dx = \\sum_n c_n \\delta_{mn} = c_m', note: 'Multiply by ψ_m*(x), integrate over space, and use orthonormality.' },
        { label: 'Normalization Condition', math: '\\int |\\Psi(x,t)|^2 dx = \\sum_m \\sum_n c_m^* c_n e^{i(E_m - E_n)t/\\hbar} \\int \\psi_m^* \\psi_n dx = \\sum_n |c_n|^2 = 1', note: 'Total probability is conserved and time-independent.' }
      ]
    },
    cards: [
      { q: 'How do you find the expansion coefficients $c_n$ from an initial state $\\Psi(x,0)$?', a: '$c_n = \\int_{-\\infty}^\\infty \\psi_n^*(x) \\Psi(x,0) dx$.', kind: 'state' },
      { q: 'What is the physical meaning of $|c_n|^2$ in the expansion $\\Psi(x,t) = \\sum c_n \\psi_n e^{-iE_n t/\\hbar}$?', a: '$|c_n|^2$ is the probability that an energy measurement returns eigenvalue $E_n$.', kind: 'recall' },
      { q: 'What is the expectation value of energy $\\langle H \\rangle$ in terms of $c_n$ and $E_n$?', a: '$\\langle H \\rangle = \\sum_{n=1}^\\infty |c_n|^2 E_n$.', kind: 'state' }
    ]
  },

  /* ── 2.2 The Infinite Square Well ─────────────────────────────────────────── */
  {
    id: 'c.2.2.1', sec: '2.2', kind: 'definition', tier: 'core',
    title: 'The Infinite Square Well Potential and Boundary Conditions',
    oneLine: 'V(x) = 0 for 0 ≤ x ≤ a and ∞ elsewhere forces the wave function to vanish strictly at the impenetrable walls: ψ(0) = ψ(a) = 0.',
    statement: `The <b>one-dimensional infinite square well</b> (or rigid box) is defined by the piecewise potential:
$$V(x) = \\begin{cases} 0, & 0 \\le x \\le a \\\\ \\infty, & \\text{otherwise} \\end{cases}$$
Outside the well, the probability of finding the particle is identically zero: $\\psi(x) = 0$. Continuity of the wave function at the infinite potential boundaries imposes the Dirichlet boundary conditions:
$$\\boxed{\\psi(0) = 0 \\quad \\text{and} \\quad \\psi(a) = 0}$$`,
    intuition: `An infinite potential wall is an absolutely impenetrable barrier. It costs an infinite amount of energy for a particle to enter. Therefore, $\\psi(x)$ must be squeezed to zero outside. To prevent discontinuous jumps in probability, the wave function must be pinned to zero at the walls, exactly like the fixed clamp points of a vibrating guitar string.`,
    needs: ['c.2.1.1'],
    traps: [
      `Demanding that the derivative $d\\psi/dx$ be continuous at the boundaries $x=0$ and $x=a$. The derivative is NOT continuous when the potential is infinite; $\\psi'(x)$ jumps discontinuously at the walls because an infinite force acts there.`,
      `Thinking the quantum particle can sit at rest at the bottom of the well with $E = 0$. Zero kinetic energy would violate Heisenberg's uncertainty principle.`
    ],
    cards: [
      { q: 'What are the boundary conditions on $\\psi(x)$ for an infinite square well spanning $0 \\le x \\le a$?', a: '$\\psi(0) = 0$ and $\\psi(a) = 0$.', kind: 'state' },
      { q: 'Is the derivative $d\\psi/dx$ continuous across an infinite potential step?', a: 'No. The first derivative jumps discontinuously wherever $V(x) \\to \\infty$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.2.2', sec: '2.2', kind: 'theorem', tier: 'core',
    title: 'Energy Quantization and Stationary States of the Infinite Square Well',
    oneLine: 'Boundary conditions restrict wave numbers to k_n = nπ/a, yielding quantized energies E_n = n²π²ħ²/(2ma²) and modes ψ_n(x) = √(2/a) sin(nπx/a).',
    statement: `Solving the TISE $-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} = E\\psi$ inside the well subject to $\\psi(0) = \\psi(a) = 0$ yields:
1. <b>Quantized wave numbers and energies ($n = 1, 2, 3, \\dots$):</b>
$$k_n = \\frac{n\\pi}{a} \\implies \\boxed{E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2m a^2} = n^2 E_1}$$
where $E_1 = \\frac{\\pi^2 \\hbar^2}{2ma^2}$ is the non-zero <b>zero-point energy</b> (ground state).
2. <b>Normalized spatial eigenfunctions:</b>
$$\\boxed{\\psi_n(x) = \\sqrt{\\frac{2}{a}} \\sin\\left(\\frac{n\\pi x}{a}\\right)}$$`,
    intuition: `Standing waves in a cavity can only fit an integer number of half-wavelengths: $n(\\lambda/2) = a$. Using de Broglie's relation $p = h/\\lambda = \\hbar k$, this geometric boundary condition forces momentum to take discrete values $p_n = n\\pi\\hbar/a$. Since kinetic energy is $p^2/(2m)$, the energy levels scale quadratically with quantum number $n$: $E_n \\propto n^2$. The gap between adjacent levels expands as $E_{n+1} - E_n = (2n+1)E_1$.`,
    needs: ['c.2.2.1'],
    traps: [
      `Including $n = 0$ as an allowed state. If $n = 0$, $\\psi_0(x) = \\sqrt{2/a}\\sin(0) = 0$ everywhere, representing no particle at all (unnormalizable).`,
      `Including negative integers $n = -1, -2, \\dots$. Since $\\sin(-n\\pi x/a) = -\\sin(n\\pi x/a)$, negative integers yield the same state up to an unphysical overall minus sign.`
    ],
    proof: {
      idea: 'Write the general solution to ψ\'\' = -k²ψ, enforce boundary conditions ψ(0)=0 and ψ(a)=0, and normalize.',
      why: 'Boundary conditions eliminate one constant and quantize the wave number k.',
      rungs: [
        { label: 'General Solution', math: '\\frac{d^2\\psi}{dx^2} = -k^2 \\psi \\quad \\left(k \\equiv \\frac{\\sqrt{2mE}}{\\hbar}\\right) \\implies \\psi(x) = A \\sin(kx) + B \\cos(kx)', note: 'Harmonic oscillator ODE inside the well where V = 0.' },
        { label: 'Apply Left Boundary ψ(0) = 0', math: '\\psi(0) = A\\sin(0) + B\\cos(0) = B = 0 \\implies \\psi(x) = A \\sin(kx)', note: 'The cosine term vanishes identically.' },
        { label: 'Apply Right Boundary ψ(a) = 0', math: '\\psi(a) = A \\sin(ka) = 0 \\implies ka = n\\pi \\quad (n = 1, 2, 3, \\dots)', note: 'For non-trivial solution A ≠ 0, sin(ka) must vanish.' },
        { label: 'Energy Quantization', math: 'k_n = \\frac{n\\pi}{a} \\implies E_n = \\frac{\\hbar^2 k_n^2}{2m} = \\frac{n^2 \\pi^2 \\hbar^2}{2m a^2}', note: 'Energy eigenvalues depend on n².' },
        { label: 'Normalization Constant A', math: '\\int_0^a |A|^2 \\sin^2\\left(\\frac{n\\pi x}{a}\\right) dx = |A|^2 \\frac{a}{2} = 1 \\implies A = \\sqrt{\\frac{2}{a}}', note: 'Choose positive real phase for A.' }
      ]
    },
    cards: [
      { q: 'What is the ground state energy $E_1$ of an infinite square well of width $a$?', a: '$E_1 = \\frac{\\pi^2 \\hbar^2}{2ma^2}$.', kind: 'state' },
      { q: 'How does the energy $E_n$ scale with quantum number $n$ in an infinite well?', a: 'Quadratically: $E_n = n^2 E_1$.', kind: 'recall' },
      { q: 'How many nodes (zero-crossings) does the $n$-th state $\\psi_n(x)$ have inside the well $(0, a)$?', a: '$n - 1$ internal nodes.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.2.3', sec: '2.2', kind: 'property', tier: 'core',
    title: 'Orthonormality and Completeness of Infinite Well States',
    oneLine: 'Eigenfunctions satisfy ∫ ψ_m*(x)ψ_n(x) dx = δ_mn and form a complete basis spanning all normalizable functions on [0, a].',
    statement: `The infinite square well eigenfunctions $\\psi_n(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right)$ satisfy:
1. <b>Orthonormality:</b>
$$\\boxed{\\int_0^a \\psi_m^*(x)\\psi_n(x) dx = \\delta_{mn} = \\begin{cases} 1, & m = n \\\\ 0, & m \\ne n \\end{cases}}$$
2. <b>Completeness (Fourier Sine Series):</b> Any arbitrary continuous function $f(x)$ on $[0, a]$ vanishing at the endpoints can be uniquely expanded as:
$$f(x) = \\sum_{n=1}^\\infty c_n \\psi_n(x), \\qquad c_n = \\int_0^a \\psi_n^*(x) f(x) dx$$`,
    intuition: `Orthonormality means each eigenfunction is mutually perpendicular to all others in function space (Hilbert space), like unit Cartesian basis vectors $\\hat{i}, \\hat{j}, \\hat{k}$. Completeness means they form a rich enough basis to reconstruct any physically possible wave function without leaving anything out. Finding the state composition is identical to computing a classical Fourier sine series.`,
    needs: ['c.2.2.2'],
    traps: [
      `Attempting to use standard Fourier series with cosines for a box spanning $[0, a]$. The Dirichlet boundary condition $\\psi(0) = 0$ forbids cosines; only the pure sine series forms the appropriate basis.`,
      `Integrating outside $[0, a]$. The wave functions are strictly zero outside the well, so all inner product integrals run from $0$ to $a$.`
    ],
    proof: {
      idea: 'Evaluate the integral of sin(mπx/a) sin(nπx/a) using product-to-sum trigonometric identities.',
      why: 'Prove that the overlap between distinct states vanishes identically.',
      rungs: [
        { label: 'Set Up Overlap Integral', math: 'I_{mn} = \\frac{2}{a} \\int_0^a \\sin\\left(\\frac{m\\pi x}{a}\\right) \\sin\\left(\\frac{n\\pi x}{a}\\right) dx', note: 'Both wavefunctions are purely real.' },
        { label: 'Product-to-Sum Identity', math: '\\sin(A)\\sin(B) = \\frac{1}{2}\\left[\\cos(A - B) - \\cos(A + B)\\right]', note: 'Transforms product into two simple harmonic terms.' },
        { label: 'Substitute Angles', math: 'I_{mn} = \\frac{1}{a} \\int_0^a \\left[\\cos\\left(\\frac{(m-n)\\pi x}{a}\\right) - \\cos\\left(\\frac{(m+n)\\pi x}{a}\\right)\\right] dx', note: 'Integrate term by term.' },
        { label: 'Case m ≠ n', math: 'I_{mn} = \\frac{1}{a} \\left[\\frac{\\sin\\left(\\frac{(m-n)\\pi x}{a}\\right)}{(m-n)\\pi/a} - \\frac{\\sin\\left(\\frac{(m+n)\\pi x}{a}\\right)}{(m+n)\\pi/a}\\right]_0^a = 0', note: 'Sin of integer multiples of π vanishes at both limits.' },
        { label: 'Case m = n', math: 'I_{nn} = \\frac{1}{a} \\int_0^a [1 - \\cos(2n\\pi x / a)] dx = \\frac{1}{a}(a - 0) = 1', note: 'The integral evaluates to exactly δ_mn.' }
      ]
    },
    cards: [
      { q: 'State the orthonormality condition for two energy eigenfunctions $\\psi_m$ and $\\psi_n$.', a: '$\\int_0^a \\psi_m^*(x) \\psi_n(x) dx = \\delta_{mn}$.', kind: 'state' },
      { q: 'What mathematical theorem guarantees that any initial wave function $\\Psi(x,0)$ can be expanded in terms of $\\psi_n(x)$?', a: 'Dirichlet theorem / completeness of the Fourier sine series on $[0, a]$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.2.4', sec: '2.2', kind: 'property', tier: 'core',
    title: 'The Symmetric Infinite Well and Parity of Eigenstates',
    oneLine: 'In a well symmetric about the origin [-a/2, a/2], energy eigenstates possess definite parity: even cosine states for odd n, and odd sine states for even n.',
    statement: `When the well is centered at the origin, $V(x) = 0$ for $-a/2 \\le x \\le a/2$, the Hamiltonian commutes with the parity operator $\\hat{\\Pi}$: $[\\hat{H}, \\hat{\\Pi}] = 0$. Consequently, all non-degenerate stationary states have definite <b>parity</b>:
$$\\psi(-x) = \\pm \\psi(x)$$
The normalized eigenfunctions alternate strictly between even and odd symmetry:
$$\\psi_n(x) = \\begin{cases} \\sqrt{\\frac{2}{a}} \\cos\\left(\\frac{n\\pi x}{a}\\right), & n = 1, 3, 5, \\dots \\quad (\\text{Even parity, } \\Pi = +1) \\\\ \\sqrt{\\frac{2}{a}} \\sin\\left(\\frac{n\\pi x}{a}\\right), & n = 2, 4, 6, \\dots \\quad (\\text{Odd parity, } \\Pi = -1) \\end{cases}$$
The energy eigenvalues remain identical: $E_n = \\frac{n^2 \\pi^2 \\hbar^2}{2ma^2}$.`,
    intuition: `If a physical system looks identical when reflected in a mirror ($V(-x) = V(x)$), its probability densities must also look identical: $|\\psi(-x)|^2 = |\\psi(x)|^2$. This means $\\psi(-x)$ can only differ from $\\psi(x)$ by a phase factor $\\pm 1$. The ground state $n=1$ is always symmetric (even, no internal nodes), the first excited state $n=2$ is antisymmetric (odd, node at center), and they alternate indefinitely.`,
    needs: ['c.2.2.2'],
    traps: [
      `Using cosine for $n=2$ in the centered well. Cosine does NOT vanish at $x = \\pm a/2$ for $n = 2$: $\\cos(2\\pi(a/2)/a) = \\cos(\\pi) = -1 \\ne 0$. Even $n$ requires sines!`,
      `Thinking energy eigenvalues change when shifting the origin. Shifting the coordinate system from $[0, a]$ to $[-a/2, a/2]$ is a passive translation that leaves physical observables (energy spectrum, transition frequencies) strictly unchanged.`
    ],
    cards: [
      { q: 'What is the parity of the ground state of a symmetric potential $V(-x) = V(x)$?', a: 'Even parity (symmetric): $\\psi(-x) = +\\psi(x)$. The ground state never has a node.', kind: 'recall' },
      { q: 'What is the spatial functional form of the first excited state ($n=2$) for a well of width $a$ centered at $x=0$?', a: '$\\psi_2(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{2\\pi x}{a}\\right)$ (odd parity).', kind: 'state' }
    ]
  },

  /* ── 2.3 The Free Particle ────────────────────────────────────────────────── */
  {
    id: 'c.2.3.1', sec: '2.3', kind: 'definition', tier: 'core',
    title: 'The Free Particle and Continuous Energy Spectrum',
    oneLine: 'With V(x) = 0 everywhere, stationary states are plane waves e^{i(kx - ωt)} with continuous energy E = ħ²k²/(2m) > 0.',
    statement: `For a completely free particle, $V(x) = 0$ everywhere on $\\mathbb{R}$. The TISE is $-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} = E\\psi$, which admits solutions for <b>any</b> positive energy $E > 0$ (a <b>continuous spectrum</b>):
$$\\psi_k(x) = A e^{ikx} + B e^{-ikx}, \\qquad k \\equiv \\frac{\\sqrt{2mE}}{\\hbar} > 0$$
Including the harmonic time factor $e^{-iEt/\\hbar} = e^{-i\\omega t}$ (where $\\omega = \\frac{\\hbar k^2}{2m}$):
$$\\boxed{\\Psi_k(x,t) = A e^{i(kx - \\frac{\\hbar k^2}{2m}t)} + B e^{-i(kx + \\frac{\\hbar k^2}{2m}t)}}$$
Here $e^{i(kx - \\omega t)}$ represents a plane wave traveling to the <b>right</b> ($+x$) with momentum $p = +\\hbar k$, and $e^{-i(kx + \\omega t)}$ travels to the <b>left</b> ($-x$) with momentum $p = -\\hbar k$.`,
    intuition: `Without walls or boundaries, there are no geometric clamp points to restrict the wavelength. A free particle can possess any wavelength $\\lambda$ and therefore any continuous kinetic energy $E \\ge 0$. However, a pure plane wave extends infinitely across the entire universe with constant amplitude $|A|^2$, meaning it cannot be normalized. Pure plane waves are idealizations, not physical states of a single localized particle.`,
    needs: ['c.2.1.1'],
    traps: [
      `Believing that a single plane wave $e^{ikx}$ represents a physically realizable individual particle. $\\int_{-\\infty}^\\infty |e^{ikx}|^2 dx = \\int_{-\\infty}^\\infty 1 dx = \\infty$; it violates Born's normalization condition.`,
      `Thinking energy is quantized for a free particle. Energy quantization arises purely from boundary constraints (boundary conditions at finite boundaries). In open space, the spectrum is strictly continuous.`
    ],
    cards: [
      { q: 'Why is a pure plane wave $\\psi(x) = A e^{ikx}$ not a physically realizable quantum state on its own?', a: 'Because it is not square-integrable: $\\int_{-\\infty}^\\infty |e^{ikx}|^2 dx = \\infty$ (cannot be normalized to 1).', kind: 'recall' },
      { q: 'In which direction does the plane wave mode $e^{-i(kx + \\omega t)}$ propagate?', a: 'To the left (in the negative $x$-direction), since the phase $kx + \\omega t = \\text{const}$ requires $dx/dt = -\\omega/k < 0$.', kind: 'state' }
    ]
  },
  {
    id: 'c.2.3.2', sec: '2.3', kind: 'theorem', tier: 'core',
    title: 'Wave Packets and Continuous Fourier Superposition',
    oneLine: 'Physical free particles are localized wave packets formed by continuous Fourier integrals Ψ(x,t) = (1/√2π) ∫ φ(k) e^{i(kx - ωt)} dk.',
    statement: `To construct a normalizable, physically realizable free particle state, one must form a continuous superposition (a <b>wave packet</b>) over a distribution of wave numbers $k$:
$$\\boxed{\\Psi(x,t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\phi(k) e^{i\\left(kx - \\frac{\\hbar k^2}{2m}t\\right)} dk}$$
where the momentum amplitude function $\\phi(k)$ is obtained from the initial wave function $\\Psi(x,0)$ by the inverse Fourier transform (Plancherel's theorem):
$$\\boxed{\\phi(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\Psi(x,0) e^{-ikx} dx}$$
By Parseval's theorem, $\\int_{-\\infty}^\\infty |\\Psi(x,t)|^2 dx = \\int_{-\\infty}^\\infty |\\phi(k)|^2 dk = 1$.`,
    intuition: `Just as an orchestra constructs a sharp transient pulse of sound by summing a continuous band of frequencies, quantum mechanics constructs a localized particle by superposing plane waves. Where the plane waves interfere constructively, the particle is likely to be detected; where they interfere destructively, probability vanishes. The wider the spread in position $\\Delta x$, the narrower the necessary frequency envelope $\\Delta k$, perfectly manifesting $\\Delta x \\Delta p \\ge \\hbar/2$.`,
    needs: ['c.2.3.1', 'c.1.4.1'],
    traps: [
      `Attempting to use a discrete summation $\\sum c_n \\psi_n$ for a free particle. The free spectrum is continuous, so the summation must be replaced by an integral over $k \\in (-\\infty, \\infty)$.`,
      `Forgetting the factor of $1/\\sqrt{2\\pi}$ in Plancherel's symmetric Fourier transform pair, which ensures normalization is preserved across both domains.`
    ],
    proof: {
      idea: 'Take t = 0 in the wave packet integral and apply the Fourier inversion formula.',
      why: 'Prove that any square-integrable function Ψ(x,0) can be represented by a Fourier profile φ(k).',
      rungs: [
        { label: 'Set t = 0', math: '\\Psi(x,0) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\phi(k) e^{ikx} dk', note: 'Standard spatial Fourier transform.' },
        { label: 'Fourier Inversion Theorem', math: '\\phi(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\Psi(x,0) e^{-ikx} dx', note: 'Inverse transform yields the spectral amplitude φ(k).' },
        { label: 'Dirac Delta Representation', math: '\\frac{1}{2\\pi} \\int_{-\\infty}^\\infty e^{i(k - k\')x} dx = \\delta(k - k\')', note: 'Orthogonality of plane wave continuous basis.' },
        { label: 'Verify Parseval Equality', math: '\\int |\\Psi(x,0)|^2 dx = \\int_{-\\infty}^\\infty |\\phi(k)|^2 dk = 1', note: 'Probability in position space equals probability in momentum space.' }
      ]
    },
    cards: [
      { q: 'How is the momentum-space amplitude $\\phi(k)$ obtained from an initial wave function $\\Psi(x,0)$?', a: '$\\phi(k) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^\\infty \\Psi(x,0) e^{-ikx} dx$.', kind: 'state' },
      { q: 'What is the physical meaning of $|\\phi(k)|^2 dk$?', a: 'The probability that a measurement of momentum will yield a value between $\\hbar k$ and $\\hbar(k + dk)$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.3.3', sec: '2.3', kind: 'theorem', tier: 'core',
    title: 'Phase Velocity vs. Group Velocity of Matter Waves',
    oneLine: 'Individual phase ripples move at v_p = ω/k = p/(2m) = v_cl/2, while the overall wave packet envelope travels at the classical velocity v_g = dω/dk = p/m = v_cl.',
    statement: `For a free quantum particle with dispersion relation $\\omega(k) = \\frac{\\hbar k^2}{2m}$:
1. The <b>phase velocity</b> (speed of individual sinusoidal wave crests):
$$v_p \\equiv \\frac{\\omega}{k} = \\frac{\\hbar k}{2m} = \\frac{p}{2m} = \\frac{1}{2} v_{\\text{classical}}$$
2. The <b>group velocity</b> (speed of the localized envelope and probability peak):
$$\\boxed{v_g \\equiv \\frac{d\\omega}{dk} = \\frac{d}{dk}\\left(\\frac{\\hbar k^2}{2m}\\right) = \\frac{\\hbar k}{m} = \\frac{p}{m} = v_{\\text{classical}}}$$
Hence, the physical quantum wave packet moves precisely at the classical particle speed: $v_g = 2 v_p = v_{\\text{classical}}$.`,
    intuition: `Imagine watching a convoy of marching soldiers. The individual wave crests (phase) run through the packet at half speed ($v_p$), disappearing at the front while new crests emerge from the rear. But the clump itself—the physical envelope containing the actual mass, energy, and particle probability—moves at the true classical velocity $v_g = p/m$. Classical mechanics tracks the group velocity of the envelope!`,
    needs: ['c.2.3.2'],
    traps: [
      `Believing the particle travels at the phase velocity $v_p$. A phase crest carries zero information or localized probability; only the group velocity $v_g$ represents the physical speed of the particle.`,
      `Confusing matter waves with light in vacuum. For light in vacuum, $\\omega = c k$, so $v_p = v_g = c$. For non-relativistic matter waves, the quadratic dispersion $\\omega \\propto k^2$ guarantees $v_g = 2 v_p$.`
    ],
    proof: {
      idea: 'Taylor-expand ω(k) around the central carrier wave number k₀ and examine the moving envelope.',
      why: 'Demonstrate that the envelope travels rigidly at speed dω/dk to first order.',
      rungs: [
        { label: 'Dispersion Relation', math: 'E = \\hbar \\omega = \\frac{p^2}{2m} = \\frac{\\hbar^2 k^2}{2m} \\implies \\omega(k) = \\frac{\\hbar k^2}{2m}', note: 'Energy-frequency relation for a free particle.' },
        { label: 'Compute Phase Velocity', math: 'v_p = \\frac{\\omega}{k} = \\frac{\\hbar k}{2m} = \\frac{p}{2m} = \\frac{1}{2}v_{\\text{cl}}', note: 'Notice the factor of 1/2.' },
        { label: 'Taylor Expand ω(k) Around k₀', math: '\\omega(k) \\approx \\omega(k_0) + \\omega\'(k_0)(k - k_0) = \\omega_0 + v_g(k - k_0)', note: 'Linear approximation for a packet with narrow spectral width.' },
        { label: 'Envelope Argument', math: 'kx - \\omega t = k_0 x - \\omega_0 t + (k - k_0)(x - v_g t)', note: 'Phase separates into carrier phase and envelope displacement.' },
        { label: 'Evaluate Group Velocity', math: 'v_g = \\left.\\frac{d\\omega}{dk}\\right|_{k_0} = \\frac{\\hbar k_0}{m} = \\frac{p_0}{m} = v_{\\text{cl}}', note: 'The packet envelope moves at the exact Newtonian particle speed.' }
      ]
    },
    cards: [
      { q: 'What is the ratio of group velocity $v_g$ to phase velocity $v_p$ for a non-relativistic free particle?', a: '$v_g / v_p = 2$ (Group velocity is twice the phase velocity).', kind: 'state' },
      { q: 'Which velocity corresponds to the physical speed of the particle observed in laboratory experiments?', a: 'The group velocity $v_g = d\\omega/dk = p/m$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.3.4', sec: '2.3', kind: 'property', tier: 'core',
    title: 'Wave Packet Spreading and Quantum Dispersion',
    oneLine: 'Because different k components travel at different group velocities, any free wave packet spreads spatially over time: σ_x(t) = σ_0 √(1 + (ħt/2mσ_0²)²).',
    statement: `Because the free particle dispersion relation $\\omega(k) = \\frac{\\hbar k^2}{2m}$ is non-linear ($d^2\\omega/dk^2 = \\hbar/m \\ne 0$), a free wave packet undergoes <b>quantum dispersion</b>.
For an initial minimum-uncertainty Gaussian wave packet of initial width $\\sigma_0$:
$$\\boxed{\\sigma_x(t) = \\sigma_0 \\sqrt{1 + \\left(\\frac{\\hbar t}{2m\\sigma_0^2}\\right)^2}}$$
As $t \\to \\infty$, the spatial spread grows linearly in time: $\\sigma_x(t) \\approx \\frac{\\hbar t}{2m\\sigma_0} = \\frac{\\sigma_p}{m} t$. The wave packet inevitably spreads out into space.`,
    intuition: `A wave packet is composed of a spread of momentum components $\\Delta p = \\hbar/(2\\sigma_0)$. Faster components ($p > p_0$) race ahead, while slower components ($p < p_0$) lag behind. Over time, this velocity disparity pulls the packet apart. An electron localized to an atomic diameter spreads across macroscopic distances in nanoseconds, whereas a macroscopic 1 kg ball takes billions of years to spread perceptibly.`,
    needs: ['c.2.3.3', 'c.1.6.1'],
    traps: [
      `Thinking wave packet spreading violates probability conservation. The area under $|\\Psi(x,t)|^2$ remains exactly 1 for all time; the packet merely widens while its peak height drops as $1/\\sqrt{\\sigma_x(t)}$.`,
      `Assuming momentum uncertainty increases as the packet spreads. $\\sigma_p$ remains strictly constant in time for a free particle, because $[\\hat{p}, \\hat{H}] = 0$.`
    ],
    cards: [
      { q: 'Why does a free wave packet spread out over time?', a: 'Because the medium is dispersive ($d^2\\omega/dk^2 \\ne 0$), meaning different Fourier components travel at different speeds.', kind: 'recall' },
      { q: 'Does the momentum uncertainty $\\sigma_p$ change as a free Gaussian wave packet spreads in position?', a: 'No. $\\sigma_p$ is strictly conserved in time because the Hamiltonian commutes with momentum: $[\\hat{p}, \\hat{H}] = 0$.', kind: 'recall' }
    ]
  },

  /* ── 2.4 Conservation of Probability & Probability Current ───────────────── */
  {
    id: 'c.2.4.1', sec: '2.4', kind: 'law', tier: 'core',
    title: 'Derivation of the Quantum Continuity Equation',
    oneLine: 'Local conservation of probability demands ∂ρ/∂t + ∇·J = 0, where ρ = |Ψ|² and J is the probability current density.',
    statement: `The Schrödinger equation guarantees that probability is not merely conserved globally, but conserved <b>locally</b>. The probability density $\\rho(\\mathbf{r},t) = |\\Psi(\\mathbf{r},t)|^2$ and the probability current density $\\mathbf{J}(\\mathbf{r},t)$ satisfy the <b>continuity equation</b>:
$$\\boxed{\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot \\mathbf{J} = 0} \\qquad \\text{(in 1D: } \\frac{\\partial \\rho}{\\partial t} + \\frac{\\partial J}{\\partial x} = 0\\text{)}$$
Integrating over any spatial volume $V$ bounded by surface $S$:
$$\\frac{d}{dt} \\int_V \\rho \\, dV = -\\oint_S \\mathbf{J} \\cdot d\\mathbf{A}$$
The rate of change of probability inside any region equals the net flux of probability flowing through its boundary.`,
    intuition: `Local conservation means probability cannot vanish here and instantaneously reappear over there without traveling through the intervening space (which would allow teleportation and superluminal signaling). It behaves exactly like an incompressible fluid or electric charge: if the total fluid level inside a bottle decreases, fluid MUST have flowed outward across the bottle neck.`,
    needs: ['c.1.4.2', 'c.1.1.2'],
    traps: [
      `Confusing global conservation of probability (d/dt ∫ |Ψ|² dx = 0) with local conservation. Global conservation allows instantaneous action-at-a-distance; local conservation (∂ρ/∂t + ∂J/∂x = 0) strictly enforces continuity across space.`,
      `Dropping the minus sign in dP/dt = -∮ J·dA. An outward flux (J·dA > 0) decreases the enclosed probability, requiring a minus sign.`
    ],
    proof: {
      idea: 'Differentiate ρ = Ψ*Ψ with respect to t and substitute time derivatives from the TDSE and its complex conjugate.',
      why: 'Show that the potential energy V cancels identically and the spatial derivatives combine into a divergence.',
      rungs: [
        { label: 'Time Derivative of Density', math: '\\frac{\\partial \\rho}{\\partial t} = \\frac{\\partial}{\\partial t}(\\Psi^* \\Psi) = \\frac{\\partial \\Psi^*}{\\partial t}\\Psi + \\Psi^* \\frac{\\partial \\Psi}{\\partial t}', note: 'Product rule for differentiation.' },
        { label: 'Substitute from TDSE', math: '\\frac{\\partial \\Psi}{\\partial t} = \\frac{1}{i\\hbar}\\left(-\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} + V\\Psi\\right), \\quad \\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{1}{i\\hbar}\\left(-\\frac{\\hbar^2}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + V\\Psi^*\\right)', note: 'Complex conjugate inverts the sign of i.' },
        { label: 'Combine and Cancel Potential V', math: '\\frac{\\partial \\rho}{\\partial t} = \\frac{i\\hbar}{2m}\\left(\\Psi^* \\frac{\\partial^2 \\Psi}{\\partial x^2} - \\Psi \\frac{\\partial^2 \\Psi^*}{\\partial x^2}\\right) + \\frac{1}{i\\hbar}(V\\Psi^*\\Psi - V\\Psi^*\\Psi)', note: 'The potential energy terms cancel identically because V is real.' },
        { label: 'Identify Total Spatial Derivative', math: '\\Psi^* \\frac{\\partial^2 \\Psi}{\\partial x^2} - \\Psi \\frac{\\partial^2 \\Psi^*}{\\partial x^2} = \\frac{\\partial}{\\partial x}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x}\\right)', note: 'Verify by expanding with the product rule.' },
        { label: 'Resulting Continuity Form', math: '\\frac{\\partial \\rho}{\\partial t} = -\\frac{\\partial}{\\partial x}\\left[\\frac{\\hbar}{2mi}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x}\\right)\\right] = -\\frac{\\partial J}{\\partial x}', note: 'Yields ∂ρ/∂t + ∂J/∂x = 0.' }
      ]
    },
    cards: [
      { q: 'State the quantum continuity equation in differential form.', a: '$\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot \\mathbf{J} = 0$.', kind: 'state' },
      { q: 'What property of the potential energy $V(x)$ is required for the continuity equation to hold?', a: '$V(x)$ must be purely real (Hermitian). An imaginary potential $V = V_R - i\\Gamma$ acts as a source or sink of probability.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.4.2', sec: '2.4', kind: 'definition', tier: 'core',
    title: 'Probability Current Density Formula',
    oneLine: 'J(x,t) = (ħ/2mi) [Ψ*(∂Ψ/∂x) - Ψ(∂Ψ*/∂x)] = (ħ/m) Im[Ψ*(∂Ψ/∂x)] represents probability flux per unit time.',
    statement: `The <b>probability current density</b> (or probability flux) in one dimension is defined as:
$$\\boxed{J(x,t) = \\frac{\\hbar}{2mi} \\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x} \\right) = \\frac{\\hbar}{m} \\text{Im}\\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} \\right)}$$
In three dimensions:
$$\\mathbf{J}(\\mathbf{r},t) = \\frac{\\hbar}{2mi} \\left( \\Psi^* \\nabla \\Psi - \\Psi \\nabla \\Psi^* \\right) = \\frac{\\hbar}{m} \\text{Im}\\left( \\Psi^* \\nabla \\Psi \\right) = \\text{Re}\\left( \\Psi^* \\frac{\\hat{\\mathbf{p}}}{m} \\Psi \\right)$$
Dimensions of $J$ in 1D: $[J] = \\text{time}^{-1}$ (probability per unit time). In 3D: $[\\mathbf{J}] = \\text{length}^{-2} \\cdot \\text{time}^{-1}$.`,
    intuition: `Notice the operator form: $\\mathbf{J} = \\text{Re}\\left(\\Psi^* \\hat{\\mathbf{v}} \\Psi\\right)$ where $\\hat{\\mathbf{v}} = \\hat{\\mathbf{p}}/m$ is the velocity operator. This is the exact quantum analog of classical fluid mass flux $\\mathbf{j} = \\rho \\mathbf{v}$. Current density measures the directed directional flow of quantum probability across a surface.`,
    needs: ['c.2.4.1'],
    traps: [
      `Forgetting the imaginary unit $i$ in the denominator $2mi$. Without $i$, the expression would be purely imaginary instead of a real physical flux.`,
      `Confusing probability density $\\rho = |\\Psi|^2$ with current density $J$. A state can have a large static probability density somewhere while having zero current flowing through it.`
    ],
    cards: [
      { q: 'Write the 1D probability current density $J$ in terms of the imaginary part of $\\Psi^* \\frac{\\partial \\Psi}{\\partial x}$.', a: '$J = \\frac{\\hbar}{m} \\text{Im}\\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} \\right)$.', kind: 'state' },
      { q: 'What is the connection between probability current density $\\mathbf{J}$ and the velocity operator $\\hat{\\mathbf{v}} = \\hat{\\mathbf{p}}/m$?', a: '$\\mathbf{J} = \\text{Re}\\left( \\Psi^* \\frac{\\hat{\\mathbf{p}}}{m} \\Psi \\right)$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.4.3', sec: '2.4', kind: 'property', tier: 'core',
    title: 'Current of Plane Waves vs. Real Bound States',
    oneLine: 'Plane waves have uniform flux J = (ħk/m)|A|² = ρv, whereas any real bound state has identically zero probability current: J = 0.',
    statement: `1. <b>Plane Wave State:</b> For $\\Psi(x,t) = A e^{i(kx - \\omega t)}$:
$$\\boxed{J = \\frac{\\hbar k}{m} |A|^2 = \\rho \\, v}$$
where $\\rho = |A|^2$ is probability density and $v = \\hbar k/m = p/m$ is particle velocity.
2. <b>Real Bound State:</b> If the spatial wave function $\\psi(x)$ can be chosen purely real (as is true for all non-degenerate 1D bound states like the infinite square well):
$$\\boxed{J = 0}$$
Stationary bound states carry zero net probability current everywhere in space.`,
    intuition: `A traveling plane wave is a river flowing steadily in one direction: probability density is carried continuously down the pipe with flux $J = \\rho v$. In contrast, a real bound state is a standing wave: equal and opposite momentum streams interfere to form static nodes and crests. Probability sloshes nowhere; the net flow through any point is identically zero.`,
    needs: ['c.2.4.2'],
    traps: [
      `Assuming $J = 0$ means the particle is not moving. In the infinite square well, $J = 0$, but the kinetic energy $\\langle T \\rangle = E_n > 0$. Zero current reflects equal left and right momentum counter-propagation, not zero motion.`,
      `Adding currents scalar-wise for superpositions. For $\\psi = A e^{ikx} + B e^{-ikx}$, $J = \\frac{\\hbar k}{m}(|A|^2 - |B|^2)$; cross-terms carrying interference average to zero net flux.`
    ],
    proof: {
      idea: 'Insert a real wave function ψ(x) = ψ*(x) into the definition of J.',
      why: 'Show that the two terms cancel identically.',
      rungs: [
        { label: 'Insert Real Function', math: '\\psi(x) \\in \\mathbb{R} \\implies \\psi^*(x) = \\psi(x), \\quad \\frac{\\partial \\psi^*}{\\partial x} = \\frac{\\partial \\psi}{\\partial x}', note: 'Complex conjugation leaves the function invariant.' },
        { label: 'Compute Current', math: 'J = \\frac{\\hbar}{2mi} \\left( \\psi \\frac{\\partial \\psi}{\\partial x} - \\psi \\frac{\\partial \\psi}{\\partial x} \\right) = \\frac{\\hbar}{2mi}(0) = 0', note: 'Both terms are identical and subtract to zero.' },
        { label: 'Evaluate for Plane Wave', math: '\\psi = A e^{ikx} \\implies \\psi^* = A^* e^{-ikx}, \\quad \\frac{d\\psi}{dx} = ik A e^{ikx}', note: 'Standard exponential derivative.' },
        { label: 'Product for Plane Wave', math: 'J = \\frac{\\hbar}{m} \\text{Im}\\left( A^* e^{-ikx} \\cdot ik A e^{ikx} \\right) = \\frac{\\hbar}{m} \\text{Im}\\left( ik |A|^2 \\right) = \\frac{\\hbar k}{m} |A|^2', note: 'Matches classical fluid flux ρv.' }
      ]
    },
    cards: [
      { q: 'What is the probability current density $J$ for any purely real spatial wave function $\\psi(x)$?', a: '$J = 0$. Real wave functions carry zero net flux.', kind: 'state' },
      { q: 'Calculate the probability current density for the plane wave $\\Psi(x,t) = A e^{i(kx - \\omega t)}$.', a: '$J = \\frac{\\hbar k}{m} |A|^2$.', kind: 'recall' }
    ]
  },

  /* ── 2.5 The Potential Step ───────────────────────────────────────────────── */
  {
    id: 'c.2.5.1', sec: '2.5', kind: 'definition', tier: 'core',
    title: 'The Potential Step and Boundary Matching for E > V₀',
    oneLine: 'For E > V₀, particles incident on a potential step undergo partial reflection and partial transmission with wave numbers k₁ = √(2mE)/ħ and k₂ = √(2m(E-V₀))/ħ.',
    statement: `A <b>potential step</b> of height $V_0 > 0$ at $x = 0$ is defined by:
$$V(x) = \\begin{cases} 0, & x < 0 \\quad (\\text{Region I}) \\\\ V_0, & x > 0 \\quad (\\text{Region II}) \\end{cases}$$
For particles of mass $m$ and energy $E > V_0$ incident from the left:
$$\\psi_I(x) = A e^{ik_1 x} + B e^{-ik_1 x}, \\qquad \\psi_{II}(x) = C e^{ik_2 x}$$
where $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}$ and $k_2 = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar} < k_1$.
Continuity of $\\psi(x)$ and $\\frac{d\\psi}{dx}$ at $x = 0$ yields the reflection and transmission amplitudes:
$$\\boxed{\\frac{B}{A} = \\frac{k_1 - k_2}{k_1 + k_2}, \\qquad \\frac{C}{A} = \\frac{2k_1}{k_1 + k_2}}$$`,
    intuition: `Classically, a particle with $E > V_0$ rolls over the step without ever turning back—it simply slows down from speed $v_1$ to $v_2$. In quantum mechanics, a wave encounters a sudden change in refractive index (impedance mismatch) at $x = 0$. Just like light hitting a glass window, part of the probability wave MUST reflect back ($B \\ne 0$), even though the particle possesses more than enough energy to clear the barrier!`,
    needs: ['c.2.3.1', 'c.2.4.2'],
    traps: [
      `Including a left-traveling wave $D e^{-ik_2 x}$ in Region II. Particles are incident ONLY from the left, so there is no source in Region II to send waves back toward $x = 0$.`,
      `Thinking quantum reflection requires $E < V_0$. Non-zero reflection ($R > 0$) occurs even when $E > V_0$, a purely wave-mechanical phenomenon.`
    ],
    proof: {
      idea: 'Match the wave function ψ(0-) = ψ(0+) and its first derivative ψ\'(0-) = ψ\'(0+) across the finite discontinuity at x = 0.',
      why: 'Finite potential steps enforce continuity of both the state and the probability current.',
      rungs: [
        { label: 'Continuity of ψ at x = 0', math: '\\psi_I(0) = \\psi_{II}(0) \\implies A + B = C', note: 'Evaluated at x = 0.' },
        { label: 'Continuity of ψ\' at x = 0', math: '\\psi_I\'(0) = \\psi_{II}\'(0) \\implies ik_1(A - B) = ik_2 C \\implies k_1(A - B) = k_2 C', note: 'Derivative continuity.' },
        { label: 'Substitute C = A + B', math: 'k_1(A - B) = k_2(A + B) \\implies (k_1 - k_2)A = (k_1 + k_2)B', note: 'Group terms in A and B.' },
        { label: 'Reflection Amplitude B/A', math: '\\frac{B}{A} = \\frac{k_1 - k_2}{k_1 + k_2}', note: 'Analogous to Fresnel reflection coefficient in optics.' },
        { label: 'Transmission Amplitude C/A', math: 'C = A + B = A\\left(1 + \\frac{k_1 - k_2}{k_1 + k_2}\\right) \\implies \\frac{C}{A} = \\frac{2k_1}{k_1 + k_2}', note: 'Standard transmission amplitude.' }
      ]
    },
    cards: [
      { q: 'What is the reflection amplitude $B/A$ at a potential step for $E > V_0$?', a: '$\\frac{B}{A} = \\frac{k_1 - k_2}{k_1 + k_2}$.', kind: 'state' },
      { q: 'Why is there reflection in quantum mechanics when $E > V_0$, unlike classical mechanics?', a: 'Because the sudden step change in potential causes an abrupt change in de Broglie wavelength (wave impedance mismatch), reflecting wave amplitude.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.5.2', sec: '2.5', kind: 'theorem', tier: 'core',
    title: 'Reflection and Transmission Coefficients (R + T = 1)',
    oneLine: 'R = |J_refl / J_inc| = (k₁ - k₂)² / (k₁ + k₂)² and T = |J_trans / J_inc| = 4k₁k₂ / (k₁ + k₂)², strictly satisfying R + T = 1.',
    statement: `The reflection coefficient $R$ and transmission coefficient $T$ are defined as the ratios of reflected and transmitted probability current to incident current:
$$R \\equiv \\left| \\frac{J_{\\text{refl}}}{J_{\\text{inc}}} \\right| = \\left| \\frac{B}{A} \\right|^2 = \\boxed{\\left( \\frac{k_1 - k_2}{k_1 + k_2} \\right)^2}$$
$$T \\equiv \\left| \\frac{J_{\\text{trans}}}{J_{\\text{inc}}} \\right| = \\frac{k_2}{k_1} \\left| \\frac{C}{A} \\right|^2 = \\frac{k_2}{k_1} \\left( \\frac{2k_1}{k_1 + k_2} \\right)^2 = \\boxed{\\frac{4k_1 k_2}{(k_1 + k_2)^2}}$$
Conservation of total probability flux rigorously guarantees:
$$\\boxed{R + T = 1}$$`,
    intuition: `Notice the velocity ratio $k_2 / k_1 = v_2 / v_1$ in the formula for $T$! Transmission is NOT simply $|C/A|^2$. If a stream of cars passes from a high-speed highway ($v_1$) into congested city traffic ($v_2$), the spatial density of cars increases even though the number of cars passing per minute is conserved. The ratio of currents accounts for the difference in particle velocities across the step.`,
    needs: ['c.2.5.1', 'c.2.4.3'],
    traps: [
      `Defining $T = |C/A|^2$ without the kinematic velocity factor $k_2/k_1$. Since $J = \\frac{\\hbar k}{m}|\\psi|^2$, $T = \\frac{J_{\\text{trans}}}{J_{\\text{inc}}} = \\frac{k_2 |C|^2}{k_1 |A|^2}$. Without $k_2/k_1$, $R + T \\ne 1$!`,
      `Thinking $R \\to 1$ as $E \\to \\infty$. As $E \\to \\infty$, $k_2 \\to k_1$, so $R \\to 0$ and $T \\to 1$ (approaching classical behavior).`
    ],
    proof: {
      idea: 'Compute the probability currents J_inc, J_refl, J_trans using J = (ħk/m)|amplitude|² and sum R + T.',
      why: 'Demonstrate algebraically that flux conservation holds identically.',
      rungs: [
        { label: 'Currents for Each Component', math: 'J_{\\text{inc}} = \\frac{\\hbar k_1}{m}|A|^2, \\quad J_{\\text{refl}} = -\\frac{\\hbar k_1}{m}|B|^2, \\quad J_{\\text{trans}} = \\frac{\\hbar k_2}{m}|C|^2', note: 'Signs indicate propagation direction.' },
        { label: 'Compute R', math: 'R = \\frac{|J_{\\text{refl}}|}{J_{\\text{inc}}} = \\frac{|B|^2}{|A|^2} = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2', note: 'Squared modulus of reflection amplitude.' },
        { label: 'Compute T', math: 'T = \\frac{J_{\\text{trans}}}{J_{\\text{inc}}} = \\frac{k_2 |C|^2}{k_1 |A|^2} = \\frac{k_2}{k_1} \\frac{4k_1^2}{(k_1 + k_2)^2} = \\frac{4k_1 k_2}{(k_1 + k_2)^2}', note: 'Factor of k₁ cancels.' },
        { label: 'Sum R + T', math: 'R + T = \\frac{(k_1 - k_2)^2 + 4k_1 k_2}{(k_1 + k_2)^2} = \\frac{k_1^2 - 2k_1 k_2 + k_2^2 + 4k_1 k_2}{(k_1 + k_2)^2} = \\frac{(k_1 + k_2)^2}{(k_1 + k_2)^2} = 1', note: 'Exact algebraic unity.' }
      ]
    },
    cards: [
      { q: 'Why is the transmission coefficient $T = \\frac{k_2}{k_1}|C/A|^2$ rather than just $|C/A|^2$?', a: 'Because $T$ is the ratio of probability fluxes, and the particles travel at different speeds $v_2/v_1 = k_2/k_1$ on either side of the step.', kind: 'recall' },
      { q: 'Calculate the reflection coefficient $R$ for a step potential if $E = \\frac{4}{3}V_0$.', a: '$k_1 \\propto \\sqrt{4/3}, k_2 \\propto \\sqrt{1/3} \\implies \\frac{k_1 - k_2}{k_1 + k_2} = \\frac{2 - 1}{2 + 1} = \\frac{1}{3} \\implies R = (1/3)^2 = 1/9$.', kind: 'state' }
    ]
  },
  {
    id: 'c.2.5.3', sec: '2.5', kind: 'property', tier: 'core',
    title: 'The Potential Step for E < V₀ and Evanescent Waves',
    oneLine: 'When E < V₀, k₂ becomes imaginary k₂ = iκ, turning the transmitted state into an exponentially decaying evanescent wave ψ_{II}(x) = C e^{-κx}.',
    statement: `When particles of energy $E < V_0$ strike the potential step from the left, Region II is <b>classically forbidden</b> ($E - V_0 < 0$).
Setting $k_2 = i\\kappa$, where:
$$\\boxed{\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar} \\in \\mathbb{R}^+}$$
the wave function in Region II cannot be oscillatory; discarding the unphysical exponentially growing solution leaves a purely decaying <b>evanescent wave</b>:
$$\\psi_{II}(x) = C e^{-\\kappa x} \\qquad (x > 0)$$
In Region I ($x < 0$), the wave function is a standing wave resulting from total reflection:
$$\\psi_I(x) = A e^{ik_1 x} + B e^{-ik_1 x}, \\qquad \\frac{B}{A} = \\frac{k_1 - i\\kappa}{k_1 + i\\kappa} = e^{i 2\\delta}$$`,
    intuition: `Classically, a billiard ball with $E < V_0$ hits a hard wall and bounces back instantly at the surface $x = 0$. Quantum mechanically, the wave cannot stop abruptly because that would cause an infinite derivative $d^2\\psi/dx^2$ and infinite kinetic energy. Instead, it "bleeds" smoothly into the forbidden territory, decaying exponentially like light undergoing total internal reflection with an evanescent field.`,
    needs: ['c.2.5.1'],
    traps: [
      `Keeping the growing exponential $D e^{+\\kappa x}$ in Region II. As $x \\to \\infty$, $e^{+\\kappa x} \\to \\infty$, which would make the wave function unnormalizable.`,
      `Thinking the particle can be freely observed far into Region II. The probability density drops exponentially: $|\\psi_{II}(x)|^2 = |C|^2 e^{-2\\kappa x}$.`
    ],
    cards: [
      { q: 'What is the mathematical form of the wave function in the classically forbidden region $x > 0$ when $E < V_0$?', a: 'An evanescent decaying exponential: $\\psi_{II}(x) = C e^{-\\kappa x}$, where $\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$.', kind: 'state' },
      { q: 'Why is the coefficient of $e^{+\\kappa x}$ set to zero for a step potential extending to $x = +\\infty$?', a: 'To prevent the wave function from blowing up to infinity as $x \\to +\\infty$, which would violate square-integrability.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.5.4', sec: '2.5', kind: 'theorem', tier: 'core',
    title: 'Total Reflection and Quantum Penetration Depth (Skin Depth)',
    oneLine: 'For E < V₀, reflection is 100% (R = 1, T = 0), but the particle penetrates into the barrier over a characteristic skin depth δ = 1/κ = ħ/√(2m(V₀ - E)).',
    statement: `For a particle incident on a step potential with $E < V_0$:
1. <b>Total Reflection ($R = 1, T = 0$):</b>
$$R = \\left| \\frac{B}{A} \\right|^2 = \\left| \\frac{k_1 - i\\kappa}{k_1 + i\\kappa} \\right|^2 = \\frac{k_1^2 + \\kappa^2}{k_1^2 + \\kappa^2} = 1$$
Because $\\psi_{II}(x) = C e^{-\\kappa x}$ is real (up to an overall constant phase), the transmitted probability current vanishes identically: $J_{\\text{trans}} = 0$.
2. <b>Penetration Depth (Skin Depth $\\delta$):</b> The characteristic distance over which the wave amplitude decays to $1/e$ (and probability drops to $1/e^2$):
$$\\boxed{\\delta = \\frac{1}{\\kappa} = \\frac{\\hbar}{\\sqrt{2m(V_0 - E)}}}$$`,
    intuition: `Although 100% of the incident probability flux is ultimately reflected back ($R = 1$), the reflection is not instantaneous at the boundary line $x = 0$. The wave dips into the barrier, penetrating up to depth $\\delta$, and then re-emerges into Region I with a phase delay $\\Delta \\theta = 2\\delta$. If we chop the barrier at thickness $a \\sim \\delta$, the tail has not yet died out, allowing the particle to leak across—this is the exact origin of quantum tunneling!`,
    needs: ['c.2.5.3', 'c.2.4.3'],
    traps: [
      `Concluding that $T > 0$ because $\\psi_{II}(x) \\ne 0$. A non-zero wave function does NOT mean transmitted flux! Since the wave in Region II is evanescent (standing exponential), $J_{\\text{trans}} = 0$ and $T = 0$.`,
      `Confusing the attenuation of amplitude ($1/\\kappa$) with the attenuation of probability ($1/(2\\kappa)$). Probability density decays as $e^{-2\\kappa x}$.`
    ],
    proof: {
      idea: 'Compute the modulus of (k₁ - iκ)/(k₁ + iκ) and evaluate the probability current in Region II.',
      why: 'Prove that R = 1 and J_trans = 0 even though ψ_II(x) > 0.',
      rungs: [
        { label: 'Modulus of Complex Ratio', math: '|B/A|^2 = \\frac{(k_1 - i\\kappa)(k_1 + i\\kappa)}{(k_1 + i\\kappa)(k_1 - i\\kappa)} = \\frac{k_1^2 + \\kappa^2}{k_1^2 + \\kappa^2} = 1', note: 'A complex number divided by its complex conjugate always has modulus 1.' },
        { label: 'Compute Current in Region II', math: 'J_{II} = \\frac{\\hbar}{m} \\text{Im}\\left( \\psi_{II}^* \\frac{d\\psi_{II}}{dx} \\right) = \\frac{\\hbar}{m} \\text{Im}\\left( C^* e^{-\\kappa x} \\cdot (-\\kappa C e^{-\\kappa x}) \\right)', note: 'Derivative of exponential.' },
        { label: 'Current Vanishes', math: 'J_{II} = -\\frac{\\hbar\\kappa}{m} |C|^2 e^{-2\\kappa x} \\, \\text{Im}(1) = 0', note: 'Since the argument is purely real, its imaginary part is identically zero.' },
        { label: 'Conclusion', math: 'T = \\frac{J_{II}}{J_{\\text{inc}}} = 0 \\implies R = 1 - T = 1', note: 'Complete reflection with zero net transmitted flux.' }
      ]
    },
    cards: [
      { q: 'What is the reflection coefficient $R$ for a potential step when $E < V_0$?', a: '$R = 1$ (Total reflection).', kind: 'state' },
      { q: 'What is the expression for the quantum penetration depth $\\delta$ into a step potential?', a: '$\\delta = \\frac{1}{\\kappa} = \\frac{\\hbar}{\\sqrt{2m(V_0 - E)}}$.', kind: 'state' }
    ]
  },

  /* ── 2.6 The Potential Barrier & Tunneling ────────────────────────────────── */
  {
    id: 'c.2.6.1', sec: '2.6', kind: 'definition', tier: 'core',
    title: 'The Rectangular Potential Barrier Formalism',
    oneLine: 'A barrier of height V₀ and width a divides space into three regions: incident/reflected (I), evanescent/tunneling (II), and transmitted (III).',
    statement: `A <b>rectangular potential barrier</b> of height $V_0$ and width $a$ is defined by:
$$V(x) = \\begin{cases} 0, & x < 0 \\quad (\\text{Region I}) \\\\ V_0, & 0 \\le x \\le a \\quad (\\text{Region II}) \\\\ 0, & x > a \\quad (\\text{Region III}) \\end{cases}$$
For a particle of energy $E$ incident from the left ($x < 0$):
$$\\psi_I(x) = A e^{ik_1 x} + B e^{-ik_1 x} \\qquad (x < 0)$$
$$\\psi_{II}(x) = \\begin{cases} C e^{\\kappa x} + D e^{-\\kappa x}, & E < V_0 \\\\ C e^{ik_2 x} + D e^{-ik_2 x}, & E > V_0 \\end{cases} \\qquad (0 \\le x \\le a)$$
$$\\psi_{III}(x) = F e^{ik_1 x} \\qquad (x > a)$$
where $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}$ and $\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$. Notice that inside the finite barrier ($0 \\le x \\le a$), the growing term $C e^{\\kappa x}$ is physically allowed because the region is finite!`,
    intuition: `Unlike the infinite step where the forbidden region stretched to infinity, here the barrier ends at $x = a$. Even though the wave decays exponentially inside the wall, if the barrier is narrow enough, the tail reaches $x = a$ before dying completely. At $x = a$, it matches onto an oscillatory plane wave $F e^{ik_1 x}$ that propagates freely into Region III.`,
    needs: ['c.2.5.3'],
    traps: [
      `Setting $C = 0$ inside the barrier for $E < V_0$. For a finite barrier ($0 \\le x \\le a$), $x$ never goes to $+\\infty$, so both $e^{+\\kappa x}$ and $e^{-\\kappa x}$ MUST be retained to satisfy the two boundary conditions at $x = a$.`,
      `Including a reflected wave in Region III ($G e^{-ik_1 x}$). Particles emerge into Region III and travel freely to $+\\infty$; no boundary exists to reflect them back.`
    ],
    cards: [
      { q: 'Why is the growing exponential $C e^{\\kappa x}$ kept inside a rectangular barrier of width $a$, but rejected for a step potential?', a: 'Because the barrier has finite width ($0 \\le x \\le a$); the term remains finite and is necessary to match boundary conditions at $x = a$.', kind: 'recall' },
      { q: 'What is the wave number $k_1$ in Region III ($x > a$)?', a: 'It is identical to Region I: $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}$, because $V = 0$ in both regions.', kind: 'state' }
    ]
  },
  {
    id: 'c.2.6.2', sec: '2.6', kind: 'theorem', tier: 'core',
    title: 'Quantum Tunneling Transmission Coefficient for E < V₀',
    oneLine: 'T = [1 + (V₀² sinh²(κa)) / (4E(V₀ - E))]⁻¹; for wide or high barriers (κa ≫ 1), transmission decays exponentially as T ≈ 16(E/V₀)(1 - E/V₀) e^{-2κa}.',
    statement: `Solving the four boundary matching conditions at $x = 0$ and $x = a$ yields the exact <b>transmission coefficient</b> for tunneling through a rectangular barrier of height $V_0$ and width $a$ ($E < V_0$):
$$\\boxed{T = \\frac{1}{1 + \\dfrac{V_0^2 \\sinh^2(\\kappa a)}{4E(V_0 - E)}}}$$
In the limit of a high or wide barrier ($\\kappa a \\gg 1$), where $\\sinh(\\kappa a) \\approx \\frac{1}{2} e^{\\kappa a}$:
$$\\boxed{T \\approx T_0 e^{-2\\kappa a} = 16 \\frac{E}{V_0} \\left( 1 - \\frac{E}{V_0} \\right) e^{-2\\kappa a}}$$
where $\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$. Transmission $T > 0$ represents the phenomenon of <b>quantum tunneling</b> (or barrier penetration).`,
    intuition: `Classically, if you roll a marble with kinetic energy 2 Joules toward a 5-Joule hill, it bounces off 100% of the time. It is forbidden from appearing on the other side. Quantum mechanically, matter is a wave. The wave leaks through the classically forbidden barrier, decaying exponentially as $e^{-\\kappa x}$. If the wall is thin enough, a non-zero amplitude survives at the far edge and leaks into the world beyond.`,
    needs: ['c.2.6.1', 'c.2.5.4'],
    traps: [
      `Thinking tunneling is an instantaneous jump through hyperspace. The particle does not vanish and re-materialize; the wave amplitude is physically present and decaying inside the barrier.`,
      `Forgetting that the exponent is $-2\\kappa a$ rather than $-\\kappa a$. The transmission coefficient measures intensity/flux (squared amplitude), so $(e^{-\\kappa a})^2 = e^{-2\\kappa a}$.`
    ],
    proof: {
      idea: 'Match ψ and ψ\' at x = 0 and x = a to relate incident amplitude A to transmitted amplitude F, then compute T = |F/A|².',
      why: 'Derive the exact hyperbolic sine transmission formula for a finite rectangular barrier.',
      rungs: [
        { label: 'Boundary Conditions at x = 0', math: 'A + B = C + D, \\quad ik_1(A - B) = \\kappa(C - D)', note: 'Continuity of ψ and ψ\' at the front face.' },
        { label: 'Boundary Conditions at x = a', math: 'C e^{\\kappa a} + D e^{-\\kappa a} = F e^{ik_1 a}, \\quad \\kappa(C e^{\\kappa a} - D e^{-\\kappa a}) = ik_1 F e^{ik_1 a}', note: 'Continuity of ψ and ψ\' at the rear face.' },
        { label: 'Eliminate B, C, D to Relate A and F', math: '\\frac{A}{F} = e^{ik_1 a}\\left[\\cosh(\\kappa a) + \\frac{i}{2}\\left(\\frac{\\kappa}{k_1} - \\frac{k_1}{\\kappa}\\right)\\sinh(\\kappa a)\\right]', note: 'Matrix transfer method or algebraic elimination.' },
        { label: 'Compute Modulus Squared |A/F|²', math: '\\left|\\frac{A}{F}\\right|^2 = \\cosh^2(\\kappa a) + \\frac{1}{4}\\left(\\frac{\\kappa}{k_1} - \\frac{k_1}{\\kappa}\\right)^2 \\sinh^2(\\kappa a) = 1 + \\frac{(\\kappa^2 + k_1^2)^2}{4k_1^2 \\kappa^2}\\sinh^2(\\kappa a)', note: 'Using cosh²(z) = 1 + sinh²(z).' },
        { label: 'Substitute k₁² and κ²', math: 'k_1^2 + \\kappa^2 = \\frac{2m V_0}{\\hbar^2}, \\quad 4k_1^2 \\kappa^2 = 4\\left(\\frac{2m}{\\hbar^2}\\right)^2 E(V_0 - E) \\implies T = \\left|\\frac{F}{A}\\right|^2 = \\left[1 + \\frac{V_0^2 \\sinh^2(\\kappa a)}{4E(V_0 - E)}\\right]^{-1}', note: 'Yields the celebrated barrier tunneling formula.' }
      ]
    },
    cards: [
      { q: 'In the limit of a wide barrier ($\\kappa a \\gg 1$), how does the tunneling probability $T$ scale with barrier width $a$?', a: '$T \\propto e^{-2\\kappa a}$, decaying exponentially with width.', kind: 'state' },
      { q: 'How does doubling the mass $m$ of the tunneling particle affect the transmission coefficient $T$ for a wide barrier?', a: 'Since $\\kappa \\propto \\sqrt{m}$, increasing mass greatly increases $\\kappa$, which causes the exponential $e^{-2\\kappa a}$ to plunge drastically.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.6.3', sec: '2.6', kind: 'property', tier: 'core',
    title: 'Physical Applications of Quantum Tunneling: Alpha Decay and STM',
    oneLine: 'Tunneling explains nuclear alpha decay (Gamow theory), Scanning Tunneling Microscopy (STM), cold emission, and stellar nuclear fusion.',
    statement: `Quantum tunneling is the governing mechanism in pivotal physical phenomena:
1. <b>$\\alpha$-Decay (Gamow Theory):</b> An $\\alpha$-particle trapped in a nuclear potential well by the Coulomb barrier escapes by tunneling through the barrier. The exponential dependence $T \\propto e^{-2\\kappa a}$ explains the Geiger-Nuttall law, where tiny variations in $\\alpha$ energy produce decay half-lives ranging over 24 orders of magnitude!
2. <b>Scanning Tunneling Microscope (STM):</b> A metallic tip is positioned within $\\approx 1\\text{ nm}$ of a conductive surface. Electrons tunnel across the vacuum gap. Because tunneling current scales exponentially with gap width ($I \\propto e^{-2\\kappa d}$), a change in height of just $0.1\\text{ nm}$ alters the current by an order of magnitude, enabling atomic-scale surface imaging.
3. <b>Nuclear Fusion in the Sun:</b> Protons in stellar cores lack the classical kinetic energy to overcome mutual Coulomb repulsion; tunneling enables proton-proton fusion at solar core temperatures ($1.5 \\times 10^7\\text{ K}$).`,
    intuition: `Without quantum tunneling, the universe as we know it could not exist: the Sun would not shine (Coulomb barrier too high for classical fusion), radioactive decay would not heat the Earth's core, and modern semiconductor tunnel diodes and flash memory would not operate. The extreme sensitivity of $e^{-2\\kappa a}$ transforms atomic-scale distances into macroscopic, measurable currents.`,
    needs: ['c.2.6.2'],
    traps: [
      `Assuming classical thermal fluctuations explain alpha decay. The Coulomb barrier is $\\sim 30\\text{ MeV}$, whereas emitted alpha particles have energies of only $4-8\\text{ MeV}$; classical escape is strictly impossible.`,
      `Thinking STM measures topological height directly. STM measures the local density of electronic states near the Fermi energy; apparent height is a convolution of geometry and electronic structure.`
    ],
    cards: [
      { q: 'Why does the half-life of $\\alpha$-emitters vary over 24 orders of magnitude for a modest factor of 2 in $\\alpha$ energy?', a: 'Because tunneling probability depends exponentially on $\\kappa \\propto \\sqrt{V_0 - E}$; a small change in energy produces enormous changes in $e^{-2\\kappa a}$ (Geiger-Nuttall law).', kind: 'recall' },
      { q: 'What property of quantum tunneling makes the Scanning Tunneling Microscope (STM) sensitive to sub-angstrom surface variations?', a: 'The exponential dependence of the tunneling current on tip-sample separation: $I \\propto e^{-2\\kappa d}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.2.6.4', sec: '2.6', kind: 'theorem', tier: 'core',
    title: 'Barrier Transmission Resonances and the Ramsauer–Townsend Effect',
    oneLine: 'For E > V₀, transmission resonances occur whenever an integer number of half-wavelengths fits inside the barrier: k₂a = nπ ⟹ T = 1.',
    statement: `For incident particles with energy exceeding the barrier height ($E > V_0$), the transmission coefficient is oscillatory:
$$\\boxed{T = \\frac{1}{1 + \\dfrac{V_0^2 \\sin^2(k_2 a)}{4E(E - V_0)}}}$$
where $k_2 = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar}$.
<b>Perfect Transmission ($T = 1$):</b> Whenever $\\sin(k_2 a) = 0$:
$$k_2 a = n\\pi \\quad \\Longleftrightarrow \\quad a = n \\frac{\\lambda_2}{2} \\qquad (n = 1, 2, 3, \\dots)$$
the barrier becomes 100% transparent ($R = 0, T = 1$). This phenomenon is the quantum mechanical origin of the <b>Ramsauer–Townsend effect</b> (the anomalous transparency of noble gas atoms to low-energy electrons).`,
    intuition: `This is the Fabry-Pérot interferometer of quantum mechanics! A wave reflects from the front boundary ($x = 0$) and the back boundary ($x = a$). When the barrier width $a$ is an exact integer multiple of half-wavelengths ($a = n\\lambda_2/2$), the waves reflected from the front and back faces interfere 100% destructively with each other. The reflected wave is extinguished, forcing 100% of the energy to transmit forward without attenuation!`,
    needs: ['c.2.6.2'],
    traps: [
      `Thinking $T = 1$ only when $E \\to \\infty$. Resonant transmission $T = 1$ occurs at specific finite energies $E_n = V_0 + \\frac{n^2\\pi^2\\hbar^2}{2ma^2}$, even just slightly above $V_0$.`,
      `Confusing the resonance condition with the infinite well. Although $k_2 a = n\\pi$ matches the infinite well quantization formula, here it represents zero reflection for an unbound scattering state.`
    ],
    proof: {
      idea: 'Replace κ with ik₂ in the barrier formula and identify conditions where the trigonometric term vanishes.',
      why: 'Demonstrate destructive interference of reflected waves at resonance.',
      rungs: [
        { label: 'Analytic Continuation from E < V₀', math: '\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar} = i \\frac{\\sqrt{2m(E - V_0)}}{\\hbar} = i k_2', note: 'Transforms evanescent wave into propagating wave.' },
        { label: 'Identity for Hyperbolic Sine', math: '\\sinh(\\kappa a) = \\sinh(i k_2 a) = i \\sin(k_2 a) \\implies \\sinh^2(\\kappa a) = -\\sin^2(k_2 a)', note: 'Standard complex trigonometric relation.' },
        { label: 'Substitute into T Formula', math: 'T = \\left[1 + \\frac{V_0^2(-\\sin^2(k_2 a))}{4E(-(E - V_0))}\\right]^{-1} = \\left[1 + \\frac{V_0^2 \\sin^2(k_2 a)}{4E(E - V_0)}\\right]^{-1}', note: 'Minuses cancel in numerator and denominator.' },
        { label: 'Condition for T = 1', math: '\\sin^2(k_2 a) = 0 \\implies k_2 a = n\\pi \\quad (n = 1, 2, 3, \\dots)', note: 'Zero in the denominator leaves T = 1/(1 + 0) = 1.' },
        { label: 'Resonant Energies', math: 'E_n = V_0 + \\frac{n^2 \\pi^2 \\hbar^2}{2m a^2}', note: 'Discrete transmission peaks where reflection is completely extinguished.' }
      ]
    },
    cards: [
      { q: 'What is the condition on barrier width $a$ and wave number $k_2$ for perfect transmission ($T = 1$) when $E > V_0$?', a: '$k_2 a = n\\pi$ (or $a = n\\lambda_2/2$) for $n = 1, 2, 3, \\dots$.', kind: 'state' },
      { q: 'What famous experiment observed this resonance effect for electrons scattering off noble gas atoms?', a: 'The Ramsauer–Townsend effect.', kind: 'recall' }
    ]
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module I — The Wave Function
   Griffiths 3e Chapter 1: Sections 1.1 to 1.6
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 1.1 The Schrödinger Equation ────────────────────────────────────────── */
  {
    id: 'c.1.1.1', sec: '1.1', kind: 'definition', tier: 'core',
    title: 'The Quantum State and Wave Function',
    oneLine: 'A particle is completely described by a complex-valued wave function Ψ(x,t) rather than a classical trajectory x(t).',
    statement: `In non-relativistic quantum mechanics, the physical state of a particle of mass $m$ moving in one dimension is completely specified by a complex-valued function $\\Psi(x,t) \\in \\mathbb{C}$, known as the <b>wave function</b>. All measurable information concerning the particle at time $t$ is encoded within $\\Psi(x,t)$.`,
    intuition: `In classical mechanics, you specify a particle by tracking its coordinates $x(t)$ and velocity $\\dot{x}(t)$ along a sharp deterministic curve. Quantum mechanics discards the trajectory entirely. Instead, a particle is an undulating field of complex numbers across space. You cannot ask "where is the particle right now?" in the classical sense; you can only examine the configuration of $\\Psi(x,t)$, which determines the probabilities of all physical interactions.`,
    needs: [],
    figs: [],
    traps: [
      `Thinking $\\Psi(x,t)$ is a physical disturbance in a material medium (like sound in air or ripples in water). $\\Psi$ is an abstract probability amplitude taking values in the complex plane $\\mathbb{C}$.`,
      `Confusing $\\Psi(x,t)$ with a measurable physical field like $\\mathbf{E}$ or $\\mathbf{B}$. Because $\\Psi$ is complex-valued, it is not directly observable; only bilinear quantities like $|\\Psi|^2$ and expectation values are physically measurable.`
    ],
    cards: [
      { q: 'What mathematical object completely specifies the state of a quantum particle in one dimension?', a: 'A complex-valued wave function $\\Psi(x,t) \\in \\mathbb{C}$.', kind: 'state' },
      { q: 'Why is the wave function $\\Psi(x,t)$ itself not directly measurable by an apparatus?', a: 'Because $\\Psi(x,t)$ is generally complex-valued. Only real quantities formed from it (such as probability density $|\\Psi|^2$) correspond to measurement readouts.', kind: 'recall' },
      { q: 'What replaces the classical trajectory $x(t)$ in quantum mechanics?', a: 'The time-dependent wave function $\\Psi(x,t)$, which evolves deterministically under the Schrödinger equation.', kind: 'recall' }
    ]
  },
  {
    id: 'c.1.1.2', sec: '1.1', kind: 'theorem', tier: 'core',
    title: 'The Time-Dependent Schrödinger Equation (TDSE)',
    oneLine: 'The fundamental dynamic equation of motion: iħ ∂Ψ/∂t = -(ħ²/2m) ∂²Ψ/∂x² + V(x,t)Ψ.',
    statement: `The time evolution of the wave function $\\Psi(x,t)$ of a particle of mass $m$ subject to a potential energy $V(x,t)$ is governed by the <b>Time-Dependent Schrödinger Equation (TDSE)</b>:
$$\\boxed{i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V(x,t)\\Psi}$$
where $i = \\sqrt{-1}$, $\\hbar = h/(2\\pi) \\approx 1.05457 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ is the reduced Planck constant, and $V(x,t)$ is the potential energy.`,
    intuition: `The Schrödinger equation is the $F = ma$ of the quantum world. Hand it the wave function at $t = 0$, and it marches $\\Psi(x,t)$ forward through all future times. The right-hand side represents total energy: the second spatial derivative represents kinetic energy (via de Broglie curvature), while $V(x,t)$ is potential energy. The factor $i\\hbar$ on the left links time rate of change to total energy, rotating $\\Psi$ in the complex plane so it oscillates without exponentially decaying.`,
    needs: ['c.1.1.1'],
    figs: [],
    traps: [
      `Thinking the Schrödinger equation can be derived from first principles. Like Newton's laws or Maxwell's equations, it is a foundational postulate justified by experimental agreement.`,
      `Writing $\\hbar$ without the bar ($h$) or dropping the imaginary unit $i$. Without $i$, the equation becomes a classical diffusion (heat) equation where all wave packets melt away irreversibly instead of oscillating and interfering.`
    ],
    proof: {
      idea: 'Plausibility argument connecting de Broglie matter waves and Planck-Einstein quanta to classical non-relativistic energy conservation.',
      why: 'A free particle matter wave must reproduce de Broglie wavelength p = ħk and frequency E = ħω.',
      rungs: [
        {
          why: 'Consider a free particle plane wave traveling in the +x direction with wave number k and angular frequency ω.',
          m: '$$\\Psi(x,t) = A e^{i(kx - \\omega t)}$$',
          meaning: 'This represents a pure monochromatic matter wave with definite momentum and energy.'
        },
        {
          why: 'By the de Broglie and Einstein relations, energy is E = ħω and momentum is p = ħk.',
          m: '$$E = \\hbar \\omega, \\quad p = \\hbar k$$',
          meaning: 'Frequency measures energy, and spatial wavelength measures momentum.'
        },
        {
          why: 'Differentiate Ψ with respect to time t to extract the energy factor.',
          m: '$$\\frac{\\partial \\Psi}{\\partial t} = -i\\omega \\Psi \\implies i\\hbar \\frac{\\partial \\Psi}{\\partial t} = \\hbar \\omega \\Psi = E \\Psi$$',
          meaning: 'The time derivative operator iħ ∂/∂t extracts the total energy E.'
        },
        {
          why: 'Differentiate Ψ twice with respect to x to extract the momentum squared.',
          m: '$$\\frac{\\partial^2 \\Psi}{\\partial x^2} = -k^2 \\Psi \\implies -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} = \\frac{\\hbar^2 k^2}{2m} \\Psi = \\frac{p^2}{2m} \\Psi$$',
          meaning: 'The spatial curvature operator -(ħ²/2m) ∂²/∂x² yields the non-relativistic kinetic energy p²/(2m).'
        },
        {
          why: 'Impose the classical energy relation E = p²/(2m) + V(x,t) on the wave function.',
          m: '$$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V(x,t)\\Psi$$',
          meaning: 'The resulting linear differential equation applies to any superposition of matter waves in a potential V(x,t).'
        }
      ],
      ends: 'Yields the standard Time-Dependent Schrödinger Equation for non-relativistic particles.'
    },
    cards: [
      { q: 'Write the 1D Time-Dependent Schrödinger Equation.', a: '$i\\hbar \\frac{\\partial \\Psi}{\\partial t} = -\\frac{\\hbar^2}{2m} \\frac{\\partial^2 \\Psi}{\\partial x^2} + V(x,t)\\Psi$', kind: 'state' },
      { q: 'Why is the presence of the imaginary unit $i$ on the left side of TDSE physically essential?', a: 'Without $i$, the equation would be a real diffusion equation leading to dissipation; $i$ generates unitary phase rotations ($e^{-i\\omega t}$) allowing wave oscillation and quantum interference.', kind: 'recall' },
      { q: 'What classical energy relation does the free-particle Schrödinger equation mirror?', a: '$E = \\frac{p^2}{2m}$, where $E \\to i\\hbar\\frac{\\partial}{\\partial t}$ and $p \\to -i\\hbar\\frac{\\partial}{\\partial x}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.1.1.3', sec: '1.1', kind: 'technique', tier: 'core',
    title: 'First-Order Time Evolution and Boundary Continuity',
    oneLine: 'TDSE is 1st-order in time (one initial state Ψ(x,0) fixes all futures) and 2nd-order in space (demanding continuous Ψ and ∂Ψ/∂x).',
    statement: `Because the TDSE is <b>first-order in time</b>, a single initial condition &mdash; the entire function $\\Psi(x,0)$ &mdash; uniquely and deterministically fixes $\\Psi(x,t)$ for all subsequent times $t > 0$. Because it is <b>second-order in space</b>, for any finite potential $V(x)$, both $\\Psi(x,t)$ and its spatial derivative $\\frac{\\partial \\Psi}{\\partial x}$ must be continuous across all space boundaries.`,
    intuition: `Newton's second law is second-order in time ($d^2x/dt^2 = F/m$), so classical physics always demands two initial data: initial position $x(0)$ and initial velocity $\\dot{x}(0)$. In contrast, the Schrödinger equation needs only ONE snapshot: $\\Psi(x,0)$. Everything about velocity and momentum is already encoded in the spatial derivatives of $\\Psi(x,0)$!`,
    needs: ['c.1.1.2'],
    figs: [],
    traps: [
      `Assuming you need both $\\Psi(x,0)$ and $\\partial \\Psi/\\partial t|_{t=0}$ to integrate forward in time. Only $\\Psi(x,0)$ is required because the equation is first-order in time.`,
      `Thinking $\\partial \\Psi/\\partial x$ is always continuous. When $V(x)$ contains an infinite spike (like a Dirac delta potential $\\alpha \\delta(x)$), $\\partial \\Psi/\\partial x$ has a finite jump discontinuity, though $\\Psi(x)$ itself remains continuous.`
    ],
    cards: [
      { q: 'How many initial conditions are required to determine future states in quantum mechanics vs Newtonian mechanics?', a: 'One in QM: the function $\\Psi(x,0)$ (1st-order in time). Two in classical mechanics: $x(0)$ and $\\dot{x}(0)$ (2nd-order in time).', kind: 'recall' },
      { q: 'What spatial boundary conditions are enforced by the second-order derivative in TDSE for finite potentials?', a: 'Both $\\Psi$ and $\\frac{\\partial \\Psi}{\\partial x}$ must be continuous across any finite potential boundary.', kind: 'recall' }
    ]
  },

  /* ── 1.2 The Statistical Interpretation ──────────────────────────────────── */
  {
    id: 'c.1.2.1', sec: '1.2', kind: 'definition', tier: 'core',
    title: "Born's Statistical Interpretation and Probability Density",
    oneLine: 'The probability of finding the particle between a and b is the spatial integral of |Ψ(x,t)|².',
    statement: `According to Max Born's statistical interpretation, the quantity $|\\Psi(x,t)|^2 = \\Psi^*(x,t)\\Psi(x,t)$ represents the <b>probability density</b> of finding the particle at position $x$ at time $t$. The probability $P_{ab}(t)$ of locating the particle in the spatial interval $a \\le x \\le b$ at time $t$ is:
$$P_{ab}(t) = \\int_a^b |\\Psi(x,t)|^2 \\, dx$$`,
    intuition: `The wave function itself is a complex probability amplitude. It can be negative, positive, or purely imaginary. But when squared with its complex conjugate ($|\\Psi|^2 = \\Psi^*\\Psi$), it yields a strictly non-negative real number. Integrating this density over an interval gives the actual probability (between 0 and 1) of clicking a detector placed in that interval.`,
    needs: ['c.1.1.1'],
    figs: ['c.1.2.1_born_probability_density'],
    traps: [
      `Equating probability density $|\\Psi(x)|^2$ with probability. Probability density has dimensions of $1/\\text{Length}$; probability is a dimensionless number obtained only after multiplying by $dx$ or integrating over an interval.`,
      `Believing the particle is physically smeared out like jelly over the region. The particle is point-like; it is our knowledge/prediction of its detection location that is probabilistically distributed.`
    ],
    cards: [
      { q: "State Born's statistical interpretation of the wave function.", a: '$|\\Psi(x,t)|^2$ is the probability density; $P_{ab}(t) = \\int_a^b |\\Psi(x,t)|^2 dx$ is the probability of finding the particle in $[a,b]$.', kind: 'state' },
      { q: 'What are the SI units of a 1D wave function $\\Psi(x)$?', a: '$\\text{m}^{-1/2}$, because $\\int |\\Psi|^2 dx = 1$ is dimensionless and $dx$ has units of meters.', kind: 'recall' },
      { q: 'Can the probability density $|\\Psi(x,t)|^2$ ever be negative or complex?', a: 'No, $|\\Psi|^2 = \\Psi^*\\Psi = (\\text{Re}\\Psi)^2 + (\\text{Im}\\Psi)^2 \\ge 0$ is strictly real and non-negative.', kind: 'trap' }
    ]
  },
  {
    id: 'c.1.2.2', sec: '1.2', kind: 'definition', tier: 'core',
    title: 'The Measurement Problem and Bell’s Theorem',
    oneLine: 'Quantum indeterminacy is fundamental: local hidden-variable theories are experimentally refuted by Bell’s theorem.',
    statement: `Prior to a position measurement, quantum mechanics asserts that the particle does not possess a definite position (the <b>orthodox / Copenhagen interpretation</b>). The historical debate between the <b>Realist position</b> (Einstein: the particle had a definite position all along, QM is incomplete) and the Orthodox position was resolved by <b>John Bell (1964)</b>, who proved that any local realist theory must obey inequalities that are violated by quantum mechanics and experiment.`,
    intuition: `Did the particle have position $x = C$ before we looked, or did the measurement compel it to choose? Einstein believed the particle had a definite position guided by unknown "hidden variables." But Bell showed this is not just philosophy &mdash; it makes experimental predictions! Experiments (Aspect, Zeilinger, Clauser) confirmed that nature violates Bell's inequalities: quantum mechanics is fundamentally indeterministic and non-local.`,
    needs: ['c.1.2.1'],
    figs: [],
    traps: [
      `Thinking Bell proved quantum mechanics is wrong. Bell proved local hidden-variable theories cannot reproduce quantum mechanics; experiments vindicated quantum mechanics.`,
      `Assuming quantum indeterminacy is due to experimental clumsiness. The uncertainty is an intrinsic property of the universe, not an engineering flaw in our instruments.`
    ],
    cards: [
      { q: 'What is the orthodox (Copenhagen) answer to: "Where was the particle just before you measured its position?"', a: 'It was nowhere in particular; the act of measurement compelled the particle to adopt a definite position.', kind: 'recall' },
      { q: 'What did Bell’s theorem prove regarding local hidden-variable theories?', a: 'That local hidden-variable theories satisfy mathematical inequalities (Bell inequalities) that quantum mechanics & experiments violate.', kind: 'recall' }
    ]
  },
  {
    id: 'c.1.2.3', sec: '1.2', kind: 'technique', tier: 'core',
    title: 'Wave Function Collapse (State Reduction)',
    oneLine: 'Measurement abruptly collapses Ψ into a sharp spike at the measured eigenvalue.',
    statement: `Immediately after a position measurement yields a definite value $C$, the wave function undergoes an abrupt, discontinuous, non-unitary transformation called <b>wave function collapse</b> (or state reduction):
$$\\Psi(x, t) \\xrightarrow{\\text{measurement}} \\delta(x - C)$$
An immediate repeated measurement will return the value $C$ with $100\\%$ certainty.`,
    intuition: `Quantum dynamics consists of two fundamentally different rules: (1) Smooth, deterministic, continuous unitary evolution governed by the Schrödinger equation when no measurement is made. (2) Discontinuous, instantaneous collapse onto an eigenstate whenever a measurement is performed.`,
    needs: ['c.1.2.1', 'c.1.2.2'],
    figs: ['c.1.2.3_wave_function_collapse'],
    traps: [
      `Believing the Schrödinger equation describes the collapse process. The standard Schrödinger equation is linear and unitary; collapse is non-unitary and non-linear.`,
      `Thinking collapse takes a long time. In standard non-relativistic QM, collapse is idealized as instantaneous.`
    ],
    cards: [
      { q: 'What happens to the wave function $\\Psi(x,t)$ when a position measurement detects the particle at $x = C$?', a: '$\\Psi(x,t)$ instantaneously collapses into a sharp spike (delta function) centered at $x = C$.', kind: 'recall' },
      { q: 'If you measure a particle’s position and get $C$, then immediately measure it again, what do you find?', a: 'You get $C$ again with certainty ($P = 1$), because the wave function has already collapsed to $x = C$.', kind: 'apply' }
    ]
  },

  /* ── 1.3 Probability Theory ──────────────────────────────────────────────── */
  {
    id: 'c.1.3.1', sec: '1.3', kind: 'definition', tier: 'core',
    title: 'Discrete Probability Distributions and Expectation Values',
    oneLine: 'For discrete outcomes j with probabilities P(j), ⟨j⟩ = ∑ j P(j) and ⟨f(j)⟩ = ∑ f(j) P(j).',
    statement: `For a discrete random variable $j$ taking values with frequency counts $N(j)$, the probability distribution is $P(j) = N(j)/N$, where $N = \\sum_j N(j)$ and $\\sum_j P(j) = 1$. The <b>expectation value</b> (statistical mean) of $j$ is:
$$\\langle j \\rangle = \\sum_j j P(j)$$
and the expectation value of any function $f(j)$ is:
$$\\langle f(j) \\rangle = \\sum_j f(j) P(j)$$`,
    intuition: `The expectation value is simply the weighted average of all possible measurement outcomes, weighted by how likely each outcome is to occur. Notice that the expectation value $\\langle j \\rangle$ does not need to be a value that $j$ can ever actually take (for instance, the average number of children per family is 2.4, even though no family has 2.4 children).`,
    needs: [],
    figs: [],
    traps: [
      `Believing $\\langle j \\rangle$ is the value you will see on your next measurement. It is the average outcome of many repeated measurements performed on an ensemble of identically prepared systems.`
    ],
    cards: [
      { q: 'Write the formula for the expectation value of a function $f(j)$ of a discrete random variable.', a: '$\\langle f(j) \\rangle = \\sum_j f(j) P(j)$', kind: 'state' },
      { q: 'Must the expectation value $\\langle j \\rangle$ be one of the possible values $j$ can take?', a: 'No, an average does not need to equal any individual allowable measurement outcome.', kind: 'trap' }
    ]
  },
  {
    id: 'c.1.3.2', sec: '1.3', kind: 'definition', tier: 'core',
    title: 'Continuous Probability Distributions and Expectation Values',
    oneLine: 'For continuous distributions, probabilities are integrals: ⟨x⟩ = ∫ x ρ(x) dx and ⟨f(x)⟩ = ∫ f(x) ρ(x) dx.',
    statement: `For a continuous random variable $x$ governed by a probability density $\\rho(x) \\ge 0$ satisfying $\\int_{-\\infty}^\\infty \\rho(x) \\, dx = 1$, the expectation value of $x$ is:
$$\\langle x \\rangle = \\int_{-\\infty}^{\\infty} x \\rho(x) \\, dx$$
and the expectation value of any function $f(x)$ is:
$$\\langle f(x) \\rangle = \\int_{-\\infty}^{\\infty} f(x) \\rho(x) \\, dx$$`,
    intuition: `Summations $\\sum_j P(j)$ become integrals $\\int \\rho(x)dx$. The probability of picking one exact infinitesimal point $x_0$ is zero; only the probability of landing in a finite interval $[x, x+dx]$ has non-zero measure: $dP = \\rho(x)dx$.`,
    needs: ['c.1.3.1'],
    figs: [],
    traps: [
      `Thinking probability density $\\rho(x)$ cannot exceed 1. Since $\\rho(x)$ is a density per unit length, it can be arbitrarily large (e.g. for a very narrow distribution $\\rho(x) = 1000$ over an interval of width $0.001$), provided $\\int \\rho dx = 1$.`
    ],
    cards: [
      { q: 'State the expectation value formula for a continuous variable $x$ with density $\\rho(x)$.', a: '$\\langle x \\rangle = \\int_{-\\infty}^{\\infty} x \\rho(x) \\, dx$', kind: 'state' },
      { q: 'Can a probability density $\\rho(x)$ be greater than 1 at some point $x$?', a: 'Yes! Densities have units of $1/\\text{Length}$ and can be arbitrarily large, as long as the total integral equals 1.', kind: 'trap' }
    ]
  },
  {
    id: 'c.1.3.3', sec: '1.3', kind: 'definition', tier: 'core',
    title: 'Variance and Standard Deviation',
    oneLine: 'Dispersion about the mean: σ² = ⟨(Δx)²⟩ = ⟨x²⟩ - ⟨x⟩² and standard deviation σ = √(σ²).',
    statement: `The spread or dispersion of a distribution around its mean is quantified by the <b>variance</b> $\\sigma^2$, defined as the expectation value of the squared deviation $\\Delta x = x - \\langle x \\rangle$:
$$\\sigma^2 \\equiv \\langle (\\Delta x)^2 \\rangle = \\langle x^2 \\rangle - \\langle x \\rangle^2$$
The <b>standard deviation</b> $\\sigma = \\sqrt{\\sigma^2}$ has the same physical units as the variable $x$ itself.`,
    intuition: `If every measurement returns exactly the mean, then $x = \\langle x \\rangle$ always, and $\\sigma = 0$. If measurement outcomes are widely scattered, the deviations $(x - \\langle x \\rangle)^2$ are large, producing a large $\\sigma$. Notice that the simple average of deviations $\\langle \\Delta x \\rangle = \\langle x - \\langle x \\rangle \\rangle = 0$ is always zero, which is why we must square the deviations before averaging.`,
    needs: ['c.1.3.2'],
    figs: ['c.1.3.3_variance_standard_deviation'],
    traps: [
      `Attempting to quantify spread via $\\langle x - \\langle x \\rangle \\rangle$. This is identically zero because positive and negative deviations exactly cancel!`,
      `Confusing $\\langle x^2 \\rangle$ with $\\langle x \\rangle^2$. In general $\\langle x^2 \\rangle \\ge \\langle x \\rangle^2$, with equality holding only if $\\sigma = 0$.`
    ],
    proof: {
      idea: 'Expand the square inside the expectation value and use linearity of the expectation operator.',
      why: 'Linearly distributes expectation value across sums and constants.',
      rungs: [
        {
          why: 'Write out the definition of variance using the deviation Δx = x - ⟨x⟩.',
          m: '$$\\sigma^2 = \\langle (x - \\langle x \\rangle)^2 \\rangle$$',
          meaning: 'Variance is the average squared distance from the average value.'
        },
        {
          why: 'Expand the algebraic square inside the expectation bracket.',
          m: '$$\\sigma^2 = \\langle x^2 - 2 x \\langle x \\rangle + \\langle x \\rangle^2 \\rangle$$',
          meaning: 'Breaks the squared deviation into individual polynomial terms.'
        },
        {
          why: 'Use linearity of expectation: ⟨A + B⟩ = ⟨A⟩ + ⟨B⟩, noting that ⟨x⟩ is a constant number.',
          m: '$$\\sigma^2 = \\langle x^2 \\rangle - 2\\langle x \\rangle \\langle x \\rangle + \\langle x \\rangle^2$$',
          meaning: 'The expectation of a constant multiplied by x is the constant times ⟨x⟩.'
        },
        {
          why: 'Combine the final two terms: -2⟨x⟩² + ⟨x⟩² = -⟨x⟩².',
          m: '$$\\sigma^2 = \\langle x^2 \\rangle - \\langle x \\rangle^2$$',
          meaning: 'Yields the standard computational identity for variance.'
        }
      ],
      ends: 'Proves σ² = ⟨x²⟩ - ⟨x⟩² for any discrete or continuous probability distribution.'
    },
    cards: [
      { q: 'State the relation between variance $\\sigma^2$, $\\langle x^2 \\rangle$, and $\\langle x \\rangle$.', a: '$\\sigma^2 = \\langle x^2 \\rangle - \\langle x \\rangle^2$', kind: 'state' },
      { q: 'Why is $\\langle x - \\langle x \\rangle \\rangle$ not a useful measure of spread?', a: 'Because $\\langle x - \\langle x \\rangle \\rangle = \\langle x \\rangle - \\langle x \\rangle = 0$ is always zero for every distribution.', kind: 'recall' },
      { q: 'When does $\\langle x^2 \\rangle = \\langle x \\rangle^2$?', a: 'Only when the variance $\\sigma^2 = 0$, meaning there is zero uncertainty and the variable takes a single value with probability 1.', kind: 'apply' }
    ]
  },

  /* ── 1.4 Normalization ───────────────────────────────────────────────────── */
  {
    id: 'c.1.4.1', sec: '1.4', kind: 'definition', tier: 'core',
    title: 'The Normalization Condition and Square-Integrability',
    oneLine: 'Total probability must equal 1: ∫ |Ψ(x,t)|² dx = 1; wave functions must be in Hilbert space L².',
    statement: `Because the particle must be somewhere in the universe, the total probability across all space must equal $1$:
$$\\boxed{\\int_{-\\infty}^{\\infty} |\\Psi(x,t)|^2 \\, dx = 1}$$
A wave function $\\psi$ is physically realizable if and only if it is <b>square-integrable</b>, meaning $\\int_{-\\infty}^\\infty |\\psi|^2 dx < \\infty$. If $\\int |\\psi|^2 dx = N < \\infty$, the normalized wave function is $\\Psi = \\psi / \\sqrt{N}$. Non-normalizable functions (such as pure infinite plane waves) cannot represent isolated physical states.`,
    intuition: `If someone hands you an unnormalized wave function $\\psi$, you calculate its total norm $N = \\int |\\psi|^2 dx$ and divide by $\\sqrt{N}$. Notice that multiplying $\\Psi$ by any constant phase factor $e^{i\\theta}$ leaves $|e^{i\\theta}\\Psi|^2 = |\\Psi|^2$ unchanged, so wave functions are physically unique up to an overall phase factor.`,
    needs: ['c.1.2.1'],
    figs: ['c.1.4.1_triangular_wave_packet'],
    traps: [
      `Believing that plane waves $e^{i(kx - \\omega t)}$ are physically realizable quantum states on their own. Their integral $\\int_{-\\infty}^\\infty |e^{ikx}|^2 dx = \\int_{-\\infty}^\\infty 1 dx = \\infty$ diverges. Real physical particles are always wave packets made of a continuous superposition of plane waves.`,
      `Thinking a function with an infinite discontinuity or blowing up at infinity can be normalized.`
    ],
    cards: [
      { q: 'State the normalization condition for a 1D wave function.', a: '$\\int_{-\\infty}^{\\infty} |\\Psi(x,t)|^2 \\, dx = 1$', kind: 'state' },
      { q: 'Why are infinite plane waves $e^{ikx}$ not legitimate physical states for an isolated particle?', a: 'They are not square-integrable: $\\int_{-\\infty}^\\infty |e^{ikx}|^2 dx = \\infty$, so they cannot be normalized to 1.', kind: 'recall' },
      { q: 'If $\\int_{-\\infty}^\\infty |\\psi(x)|^2 dx = 9$, what is the normalization constant $A$ such that $\\Psi = A\\psi$ is normalized?', a: '$A = 1/\\sqrt{9} = 1/3$ (up to an arbitrary phase factor $e^{i\\theta}$).', kind: 'apply' }
    ]
  },
  {
    id: 'c.1.4.2', sec: '1.4', kind: 'theorem', tier: 'core',
    title: 'Preservation of Normalization in Time',
    oneLine: 'If Ψ is normalized at t = 0, the Schrödinger equation guarantees it stays normalized for all future t.',
    statement: `If a wave function $\\Psi(x,0)$ is normalized at $t = 0$, the Time-Dependent Schrödinger Equation guarantees that it remains normalized for all future times $t > 0$, provided the potential energy $V(x,t)$ is purely real:
$$\\frac{d}{dt} \\int_{-\\infty}^{\\infty} |\\Psi(x,t)|^2 \\, dx = 0$$`,
    intuition: `This is a crucial consistency requirement for quantum mechanics. If the total probability started at 1 at $t=0$ and drifted to 1.3 or 0.8 at $t=5\\text{s}$, the entire probabilistic interpretation would collapse. The Schrödinger equation is mathematically crafted so that probability is locally and globally conserved like an incompressible fluid.`,
    needs: ['c.1.1.2', 'c.1.4.1'],
    figs: ['c.1.4.2_preservation_of_normalization'],
    traps: [
      `Applying this result to a complex potential $V(x) = V_0 - i\\Gamma$. If $V$ has an imaginary part, probability is not conserved &mdash; it decays exponentially, modeling absorption or radioactive decay!`,
      `Forgetting that the proof relies critically on boundary conditions $\\Psi(x,t) \\to 0$ as $x \\to \\pm\\infty$.`
    ],
    proof: {
      idea: 'Differentiate under the integral sign, substitute time derivatives from TDSE, and integrate by parts.',
      why: 'The Schrödinger equation connects time derivatives to spatial second derivatives.',
      rungs: [
        {
          why: 'Take the total time derivative inside the spatial integral as a partial derivative.',
          m: '$$\\frac{d}{dt}\\int_{-\\infty}^{\\infty} |\\Psi|^2 \\, dx = \\int_{-\\infty}^{\\infty} \\frac{\\partial}{\\partial t}(\\Psi^* \\Psi) \\, dx = \\int_{-\\infty}^{\\infty} \\left(\\frac{\\partial \\Psi^*}{\\partial t}\\Psi + \\Psi^* \\frac{\\partial \\Psi}{\\partial t}\\right) dx$$',
          meaning: 'Applies Leibniz rule for differentiating under the integral.'
        },
        {
          why: 'Express ∂Ψ/∂t and its complex conjugate ∂Ψ*/∂t using the Schrödinger equation.',
          m: '$$\\frac{\\partial \\Psi}{\\partial t} = \\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi}{\\partial x^2} - \\frac{i}{\\hbar}V\\Psi, \\quad \\frac{\\partial \\Psi^*}{\\partial t} = -\\frac{i\\hbar}{2m}\\frac{\\partial^2 \\Psi^*}{\\partial x^2} + \\frac{i}{\\hbar}V\\Psi^*$$',
          meaning: 'Uses TDSE and the fact that the potential V(x,t) is real (V* = V).'
        },
        {
          why: 'Substitute these into the integrand and observe that the potential V terms cancel identically.',
          m: '$$\\frac{\\partial |\\Psi|^2}{\\partial t} = \\frac{i\\hbar}{2m}\\left( \\Psi^* \\frac{\\partial^2 \\Psi}{\\partial x^2} - \\frac{\\partial^2 \\Psi^*}{\\partial x^2} \\Psi \\right) = \\frac{\\partial}{\\partial x}\\left[ \\frac{i\\hbar}{2m} \\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x} \\Psi \\right) \\right]$$',
          meaning: 'The time rate of change of probability density is the spatial divergence of a flux.'
        },
        {
          why: 'Integrate the total spatial derivative across the entire real line from -∞ to +∞.',
          m: '$$\\frac{d}{dt}\\int_{-\\infty}^{\\infty} |\\Psi|^2 \\, dx = \\left[ \\frac{i\\hbar}{2m} \\left( \\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x} \\Psi \\right) \\right]_{-\\infty}^{\\infty} = 0$$',
          meaning: 'Because square-integrable wave functions vanish at infinity: Ψ → 0 as x → ±∞.'
        }
      ],
      ends: 'Proves total probability is rigorously conserved in time: d/dt ∫ |Ψ|² dx = 0.'
    },
    cards: [
      { q: 'What condition on the potential energy $V(x,t)$ is required for normalization to be preserved in time?', a: '$V(x,t)$ must be real: $V^*(x,t) = V(x,t)$.', kind: 'recall' },
      { q: 'Why does the boundary term vanish in the proof of preservation of normalization?', a: 'Because physical wave functions are square-integrable, requiring $\\Psi(x,t) \\to 0$ as $x \\to \\pm\\infty$.', kind: 'recall' },
      { q: 'What physical process is modeled if a non-zero imaginary potential $-i\\Gamma$ (with $\\Gamma > 0$) is added to $V(x)$?', a: 'Probability decays exponentially: $P(t) = e^{-2\\Gamma t/\\hbar}$, representing absorption or particle decay.', kind: 'apply' }
    ]
  },

  /* ── 1.5 Momentum and Operators ──────────────────────────────────────────── */
  {
    id: 'c.1.5.1', sec: '1.5', kind: 'definition', tier: 'core',
    title: 'Expectation Value of Position and Velocity',
    oneLine: '⟨x⟩ = ∫ Ψ* x Ψ dx, and its rate of change d⟨x⟩/dt = ⟨p⟩/m defines velocity.',
    statement: `The expectation value of position for a particle in state $\\Psi(x,t)$ is:
$$\\langle x \\rangle = \\int_{-\\infty}^{\\infty} x |\\Psi(x,t)|^2 \\, dx = \\int_{-\\infty}^{\\infty} \\Psi^* x \\Psi \\, dx$$
The time rate of change of the expectation value of position defines the quantum velocity:
$$\\frac{d\\langle x \\rangle}{dt} = \\frac{\\langle p \\rangle}{m}$$`,
    intuition: `If you prepare thousands of identical particles in the same quantum state $\\Psi$ and measure each particle's position, the average of those readings is $\\langle x \\rangle$. As time flows, the center of the wave packet shifts, and $d\\langle x \\rangle/dt$ tracks how fast this average position travels.`,
    needs: ['c.1.3.2', 'c.1.4.1'],
    figs: ['c.1.5.1_exponential_wave_function'],
    traps: [
      `Confusing the velocity of a particle with the velocity of its expectation value. An individual measurement yields a position, not a velocity; velocity is defined for the statistical ensemble via $d\\langle x \\rangle/dt$.`
    ],
    cards: [
      { q: 'State the expectation value formula for position $\\langle x \\rangle$.', a: '$\\langle x \\rangle = \\int_{-\\infty}^{\\infty} \\Psi^* x \\Psi \\, dx$', kind: 'state' },
      { q: 'What is the relation between $d\\langle x \\rangle/dt$ and the momentum expectation value $\\langle p \\rangle$?', a: '$\\frac{d\\langle x \\rangle}{dt} = \\frac{\\langle p \\rangle}{m}$', kind: 'recall' }
    ]
  },
  {
    id: 'c.1.5.2', sec: '1.5', kind: 'definition', tier: 'core',
    title: 'The Momentum Operator in Position Space',
    oneLine: 'Momentum is represented by the differential operator p̂ = -iħ ∂/∂x: ⟨p⟩ = ∫ Ψ* (-iħ ∂Ψ/∂x) dx.',
    statement: `In quantum mechanics, physical observables are represented by linear operators. In position space, the <b>momentum operator</b> $\\hat{p}$ is:
$$\\boxed{\\hat{p} = -i\\hbar \\frac{\\partial}{\\partial x}}$$
The expectation value of momentum is given by sandwiching $\\hat{p}$ between $\\Psi^*$ and $\\Psi$:
$$\\langle p \\rangle = \\int_{-\\infty}^{\\infty} \\Psi^*(x,t) \\left(-i\\hbar \\frac{\\partial}{\\partial x}\\right) \\Psi(x,t) \\, dx$$`,
    intuition: `In classical mechanics, momentum is a number $p = mv$. In quantum mechanics, momentum is a derivative! Why a spatial derivative? Because de Broglie told us that momentum determines spatial frequency ($p = \\hbar k$). A wave with high momentum ripples rapidly in space (large derivative), while a low-momentum wave is broad and flat (small derivative). Differentiating with respect to $x$ measures this spatial frequency.`,
    needs: ['c.1.5.1'],
    figs: [],
    traps: [
      `Writing $\\langle p \\rangle = -i\\hbar \\int \\frac{\\partial}{\\partial x}(\\Psi^* \\Psi) dx$. That would be $\\int \\frac{\\partial}{\\partial x}|\\Psi|^2 dx = [|\\Psi|^2]_{-\\infty}^\\infty = 0$ always! The operator $\\hat{p}$ must act ONLY on $\\Psi$, not on $\\Psi^*$.`,
      `Placing the operator after $\\Psi$: $\\int \\Psi^* \\Psi (-i\\hbar \\partial/\\partial x)$ makes no sense; operators act on the wave function to their right.`
    ],
    proof: {
      idea: 'Compute d⟨x⟩/dt by differentiating inside the integral and integrating by parts.',
      why: 'Relates time derivative of position expectation value to spatial derivatives of the wave function.',
      rungs: [
        {
          why: 'Differentiate ⟨x⟩ with respect to time.',
          m: '$$\\frac{d\\langle x \\rangle}{dt} = \\int_{-\\infty}^{\\infty} x \\frac{\\partial |\\Psi|^2}{\\partial t} \\, dx = \\frac{i\\hbar}{2m}\\int_{-\\infty}^{\\infty} x \\frac{\\partial}{\\partial x}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi\\right) dx$$',
          meaning: 'Substitutes the continuity relation ∂|Ψ|²/∂t = -∂J/∂x.'
        },
        {
          why: 'Integrate by parts with u = x and dv = d/dx(...) dx.',
          m: '$$\\frac{d\\langle x \\rangle}{dt} = \\left[ x \\frac{i\\hbar}{2m}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi\\right) \\right]_{-\\infty}^{\\infty} - \\frac{i\\hbar}{2m}\\int_{-\\infty}^{\\infty} \\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\frac{\\partial \\Psi^*}{\\partial x}\\Psi\\right) dx$$',
          meaning: 'The boundary term vanishes because Ψ and its derivatives drop to zero faster than 1/x at infinity.'
        },
        {
          why: 'Integrate the second term by parts again: -∫ (∂Ψ*/∂x) Ψ dx = ∫ Ψ* (∂Ψ/∂x) dx.',
          m: '$$-\\int_{-\\infty}^{\\infty} \\frac{\\partial \\Psi^*}{\\partial x}\\Psi \\, dx = \\int_{-\\infty}^{\\infty} \\Psi^* \\frac{\\partial \\Psi}{\\partial x} \\, dx$$',
          meaning: 'Shifts the spatial derivative from Ψ* to Ψ.'
        },
        {
          why: 'Combine the two equal terms inside the integral.',
          m: '$$\\frac{d\\langle x \\rangle}{dt} = -\\frac{i\\hbar}{m}\\int_{-\\infty}^{\\infty} \\Psi^* \\frac{\\partial \\Psi}{\\partial x} \\, dx = \\frac{1}{m}\\int_{-\\infty}^{\\infty} \\Psi^* \\left(-i\\hbar \\frac{\\partial}{\\partial x}\\right) \\Psi \\, dx$$',
          meaning: 'Multiplies by mass m to identify ⟨p⟩ = m d⟨x⟩/dt.'
        }
      ],
      ends: 'Identifies p̂ = -iħ ∂/∂x as the quantum mechanical momentum operator.'
    },
    cards: [
      { q: 'What is the position-space representation of the momentum operator $\\hat{p}$?', a: '$\\hat{p} = -i\\hbar \\frac{\\partial}{\\partial x}$', kind: 'state' },
      { q: 'If a wave function $\\psi(x)$ is purely real, what is its momentum expectation value $\\langle p \\rangle$?', a: '$\\langle p \\rangle = 0$, because $\\int \\psi \\frac{d\\psi}{dx} dx = \\frac{1}{2}[\\psi^2]_{-\\infty}^\\infty = 0$.', kind: 'apply' },
      { q: 'Why does $\\hat{p}$ sit between $\\Psi^*$ and $\\Psi$ in the expectation value integral?', a: 'Because $\\hat{p}$ is a differential operator that must act on $\\Psi$; placing it elsewhere changes the mathematical operation.', kind: 'trap' }
    ]
  },
  {
    id: 'c.1.5.3', sec: '1.5', kind: 'technique', tier: 'core',
    title: 'Quantum Observables, Hamiltonian, and Canonical Commutation',
    oneLine: 'Observables become operators Q(x, -iħ∂/∂x); position and momentum do not commute: [x̂, p̂] = iħ.',
    statement: `Any classical dynamical variable $Q(x,p)$ corresponds to a quantum mechanical operator $\\hat{Q} = Q(\\hat{x}, \\hat{p})$ where $\\hat{x} = x$ and $\\hat{p} = -i\\hbar \\frac{\\partial}{\\partial x}$.
- Kinetic energy: $\\hat{T} = \\frac{\\hat{p}^2}{2m} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2}$
- Hamiltonian (total energy): $\\hat{H} = \\hat{T} + \\hat{V} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2} + V(x,t)$
The position and momentum operators do not commute, satisfying the <b>canonical commutation relation</b>:
$$\\boxed{[\\hat{x}, \\hat{p}] = \\hat{x}\\hat{p} - \\hat{p}\\hat{x} = i\\hbar}$$`,
    intuition: `In classical mechanics, $x \\times p = p \\times x$. In quantum mechanics, operators are operations, and the order of operations matters! To compute $[\\hat{x},\\hat{p}]\\psi$, apply the product rule: $\\hat{p}(\\hat{x}\\psi) = -i\\hbar \\frac{\\partial}{\\partial x}(x\\psi) = -i\\hbar\\psi - i\\hbar x \\frac{\\partial \\psi}{\\partial x}$. Subtracting $\\hat{x}\\hat{p}\\psi = -i\\hbar x \\frac{\\partial \\psi}{\\partial x}$ leaves exactly $+i\\hbar\\psi$. That remaining $i\\hbar$ is the seed of the entire uncertainty principle!`,
    needs: ['c.1.5.2'],
    figs: [],
    traps: [
      `Attempting to compute $[\\hat{x}, \\hat{p}]$ without applying it to a test wave function $f(x)$. Forgetting $f(x)$ leads to dropping the product rule term $\\partial x/\\partial x = 1$.`,
      `Assuming any classical expression $x p$ translates unambiguously to quantum operators. Because $\\hat{x}$ and $\\hat{p}$ do not commute, products like $x p$ must be symmetrized as $\\frac{1}{2}(\\hat{x}\\hat{p} + \\hat{p}\\hat{x})$ to remain Hermitian.`
    ],
    proof: {
      idea: 'Apply the commutator bracket [x̂, p̂] to an arbitrary smooth test function f(x).',
      why: 'Operators must be evaluated by their action on functions.',
      rungs: [
        {
          why: 'Write out the definition of the commutator acting on a test function f(x).',
          m: '$$[\\hat{x}, \\hat{p}]f(x) = (\\hat{x}\\hat{p} - \\hat{p}\\hat{x})f(x) = x\\left(-i\\hbar \\frac{\\partial f}{\\partial x}\\right) - \\left(-i\\hbar \\frac{\\partial}{\\partial x}(x f(x))\\right)$$',
          meaning: 'Applies x then p, minus p then x.'
        },
        {
          why: 'Use the product rule on the second term: ∂/∂x (x f(x)) = f(x) + x ∂f/∂x.',
          m: '$$[\\hat{x}, \\hat{p}]f(x) = -i\\hbar x \\frac{\\partial f}{\\partial x} + i\\hbar\\left(f(x) + x \\frac{\\partial f}{\\partial x}\\right)$$',
          meaning: 'Differentiating x yields 1, while differentiating f yields x ∂f/∂x.'
        },
        {
          why: 'Cancel the opposite terms: -iħ x ∂f/∂x and +iħ x ∂f/∂x.',
          m: '$$[\\hat{x}, \\hat{p}]f(x) = i\\hbar f(x)$$',
          meaning: 'Leaves only the non-vanishing derivative of the coordinate.'
        }
      ],
      ends: 'Since f(x) was arbitrary, establishes the operator identity [x̂, p̂] = iħ.'
    },
    cards: [
      { q: 'State the canonical commutation relation between $\\hat{x}$ and $\\hat{p}$.', a: '$[\\hat{x}, \\hat{p}] = i\\hbar$', kind: 'state' },
      { q: 'What is the Hamiltonian operator $\\hat{H}$ in 1D position space?', a: '$\\hat{H} = -\\frac{\\hbar^2}{2m}\\frac{\\partial^2}{\\partial x^2} + V(x,t)$', kind: 'recall' },
      { q: 'What is the value of $[\\hat{p}, \\hat{x}]$?', a: '$-i\\hbar$, because $[\\hat{p}, \\hat{x}] = -[\\hat{x}, \\hat{p}] = -i\\hbar$.', kind: 'apply' }
    ]
  },
  {
    id: 'c.1.5.4', sec: '1.5', kind: 'theorem', tier: 'core',
    title: 'Probability Current Density and the Continuity Equation',
    oneLine: 'Local conservation of probability: ∂ρ/∂t + ∂J/∂x = 0, where J = (ħ/2mi)(Ψ* ∂Ψ/∂x - Ψ ∂Ψ*/∂x).',
    statement: `Probability is locally conserved via the <b>continuity equation</b>:
$$\\boxed{\\frac{\\partial \\rho}{\\partial t} + \\frac{\\partial J}{\\partial x} = 0}$$
where $\\rho(x,t) = |\\Psi(x,t)|^2$ is the probability density, and $J(x,t)$ is the <b>probability current density</b> (probability flux):
$$J(x,t) = \\frac{\\hbar}{2mi}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x}\\right) = \\frac{\\hbar}{m}\\text{Im}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x}\\right)$$
In three dimensions, $\\frac{\\partial \\rho}{\\partial t} + \\nabla \\cdot \\mathbf{J} = 0$ with $\\mathbf{J} = \\frac{\\hbar}{m}\\text{Im}(\\Psi^* \\nabla \\Psi)$.`,
    intuition: `Local conservation means probability cannot vanish at point A and magically reappear at point B without traveling through the intervening space. If the probability inside an interval $[x_1, x_2]$ decreases, it must do so by leaking out through the edges: $d/dt \\int_{x_1}^{x_2} \\rho dx = J(x_1) - J(x_2)$. $J$ represents the net flow rate of probability across a boundary.`,
    needs: ['c.1.4.2'],
    figs: ['c.1.5.4_probability_current_continuity'],
    traps: [
      `Dropping the imaginary unit $i$ in the denominator of $J$. Without $i$, $J$ would not be real! Notice $\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x} = 2i \\, \\text{Im}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x}\\right)$, which cancels the $i$ to give a strictly real current $J$.`,
      `Assuming stationary states always have non-zero probability current. For any bound stationary state with real spatial wave function $\\psi(x) \\in \\mathbb{R}$, $J(x) = 0$ identically everywhere!`
    ],
    cards: [
      { q: 'State the 1D quantum continuity equation.', a: '$\\frac{\\partial \\rho}{\\partial t} + \\frac{\\partial J}{\\partial x} = 0$, where $\\rho = |\\Psi|^2$.', kind: 'state' },
      { q: 'Write the formula for the probability current density $J(x,t)$ in 1D.', a: '$J(x,t) = \\frac{\\hbar}{2mi}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x} - \\Psi \\frac{\\partial \\Psi^*}{\\partial x}\\right) = \\frac{\\hbar}{m}\\text{Im}\\left(\\Psi^* \\frac{\\partial \\Psi}{\\partial x}\\right)$', kind: 'state' },
      { q: 'For a plane wave $\\Psi(x,t) = A e^{i(kx - \\omega t)}$, what is the probability current density $J$?', a: '$J = \\frac{\\hbar k}{m}|A|^2 = v |A|^2$, where $v = \\hbar k/m$ is the particle velocity.', kind: 'apply' },
      { q: 'What is the probability current density for any real spatial wave function $\\psi(x) = \\psi^*(x)$?', a: '$J = 0$, because $\\psi^* \\frac{d\\psi}{dx} - \\psi \\frac{d\\psi^*}{dx} = \\psi \\psi\' - \\psi \\psi\' = 0$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.1.5.5', sec: '1.5', kind: 'theorem', tier: 'core',
    title: "Ehrenfest's Theorem for Momentum",
    oneLine: 'Expectation values obey Newton’s second law: d⟨p⟩/dt = ⟨-∂V/∂x⟩ = ⟨F⟩.',
    statement: `The expectation value of momentum satisfies <b>Ehrenfest's theorem</b>:
$$\\boxed{\\frac{d\\langle p \\rangle}{dt} = \\left\\langle -\\frac{\\partial V}{\\partial x} \\right\\rangle = \\langle F(x) \\rangle}$$
Together with $\\frac{d\\langle x \\rangle}{dt} = \\frac{\\langle p \\rangle}{m}$, this shows that the average coordinates of a quantum particle follow classical trajectories under Newton's second law, provided the potential does not vary rapidly across the width of the wave packet.`,
    intuition: `This is the correspondence principle in action! Classical mechanics does not disappear in quantum theory &mdash; it emerges as the exact law governing the centroids (expectation values) of quantum wave packets.`,
    needs: ['c.1.5.2'],
    figs: [],
    traps: [
      `Confusing $\\langle F(x) \\rangle$ with $F(\\langle x \\rangle)$. Ehrenfest's theorem gives $d\\langle p \\rangle/dt = \\langle F(x) \\rangle$. In general, $\\langle F(x) \\rangle \\ne F(\\langle x \\rangle)$ unless the force is linear (like a harmonic oscillator $F(x) = -kx$). For non-linear potentials, the center of the wave packet deviates from classical trajectories!`
    ],
    proof: {
      idea: 'Differentiate ⟨p⟩ = ∫ Ψ* (-iħ ∂Ψ/∂x) dx with respect to time and substitute the Schrödinger equation.',
      why: 'Demonstrates how the spatial gradient of the potential governs momentum evolution.',
      rungs: [
        {
          why: 'Differentiate inside the integral with respect to time.',
          m: '$$\\frac{d\\langle p \\rangle}{dt} = -i\\hbar \\int_{-\\infty}^{\\infty} \\left( \\frac{\\partial \\Psi^*}{\\partial t}\\frac{\\partial \\Psi}{\\partial x} + \\Psi^* \\frac{\\partial^2 \\Psi}{\\partial t \\partial x} \\right) dx$$',
          meaning: 'Applies the product rule to Ψ* and ∂Ψ/∂x.'
        },
        {
          why: 'Integrate the second term by parts to shift the spatial derivative from the time derivative to Ψ*.',
          m: '$$\\int_{-\\infty}^{\\infty} \\Psi^* \\frac{\\partial}{\\partial x}\\left(\\frac{\\partial \\Psi}{\\partial t}\\right) dx = -\\int_{-\\infty}^{\\infty} \\frac{\\partial \\Psi^*}{\\partial x}\\frac{\\partial \\Psi}{\\partial t} dx$$',
          meaning: 'Boundary terms vanish at infinity.'
        },
        {
          why: 'Substitute ∂Ψ/∂t and ∂Ψ*/∂t from TDSE into the combined expression.',
          m: '$$\\frac{d\\langle p \\rangle}{dt} = \\int_{-\\infty}^{\\infty} \\Psi^* \\left(-\\frac{\\partial V}{\\partial x}\\right) \\Psi \\, dx$$',
          meaning: 'The kinetic terms cancel completely by integration by parts, leaving only the gradient of V.'
        }
      ],
      ends: 'Proves d⟨p⟩/dt = ⟨-∂V/∂x⟩ = ⟨F⟩.'
    },
    cards: [
      { q: "State Ehrenfest's theorem for momentum.", a: '$\\frac{d\\langle p \\rangle}{dt} = \\left\\langle -\\frac{\\partial V}{\\partial x} \\right\\rangle$', kind: 'state' },
      { q: 'Under what condition does the center of a quantum wave packet move exactly like a classical particle ($m d^2\\langle x \\rangle/dt^2 = F(\\langle x \\rangle)$)?', a: 'When the potential $V(x)$ is constant, linear, or harmonic (quadratic), so that $\\langle F(x) \\rangle = F(\\langle x \\rangle)$.', kind: 'recall' }
    ]
  },

  /* ── 1.6 The Uncertainty Principle ───────────────────────────────────────── */
  {
    id: 'c.1.6.1', sec: '1.6', kind: 'theorem', tier: 'core',
    title: "Heisenberg's Position-Momentum Uncertainty Principle",
    oneLine: 'Fundamental quantum limit on simultaneous precision: σ_x σ_p ≥ ħ/2.',
    statement: `For any physical quantum state $\\Psi(x,t)$, the product of the position standard deviation $\\sigma_x$ and the momentum standard deviation $\\sigma_p$ must satisfy the <b>Heisenberg Uncertainty Principle</b>:
$$\\boxed{\\sigma_x \\sigma_p \\ge \\frac{\\hbar}{2}}$$
The minimum uncertainty bound $\\sigma_x \\sigma_p = \\frac{\\hbar}{2}$ is achieved if and only if the state is a <b>Gaussian wave packet</b>.`,
    intuition: `This is not a defect in human technology &mdash; it is a mathematical property of wave mechanics (Fourier transform duality). To make a wave packet tightly localized in space (small $\\sigma_x$), you must superpose plane waves with a wide variety of wavelengths $\\lambda$. But since momentum is tied to wavelength ($p = h/\\lambda$), a wide spread of wavelengths automatically creates a wide spread of momenta (large $\\sigma_p$). You cannot have both a single localized point and a single pure wavelength simultaneously.`,
    needs: ['c.1.3.3', 'c.1.5.2', 'c.1.5.3'],
    figs: ['c.1.6.1_heisenberg_uncertainty_principle'],
    traps: [
      `Thinking the uncertainty is $\\hbar$ instead of $\\hbar/2$. (In older literature or introductory texts, people sometimes write $\\Delta x \\Delta p \\approx \\hbar$, but the exact mathematical bound is $\\hbar/2$).`,
      `Explaining the principle exclusively via the "gamma-ray microscope" (observer effect: the photon kick changes the momentum). That heuristic obscures the fact that uncertainty is an intrinsic property of the quantum state itself, regardless of whether a second measurement is attempted.`
    ],
    cards: [
      { q: 'State the Heisenberg position-momentum uncertainty relation.', a: '$\\sigma_x \\sigma_p \\ge \\frac{\\hbar}{2}$', kind: 'state' },
      { q: 'What functional form of the wave function minimizes the position-momentum uncertainty product?', a: 'A Gaussian wave packet $\\Psi(x) = A e^{-a x^2}$ achieves the minimum uncertainty $\\sigma_x \\sigma_p = \\frac{\\hbar}{2}$.', kind: 'recall' },
      { q: 'Can a quantum state ever have $\\sigma_x = 0$ while having finite momentum spread $\\sigma_p$?', a: 'No; if $\\sigma_x \\to 0$, then $\\sigma_p \\to \\infty$ to preserve $\\sigma_x \\sigma_p \\ge \\hbar/2$.', kind: 'trap' }
    ]
  }
);

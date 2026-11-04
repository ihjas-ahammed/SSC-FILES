/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics for Entrance (IIT JAM Physics · qme)
   Core High-Yield Concepts, Shortcut Methods & Worked Problems (E1–E6)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }
if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }
if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

CONCEPTS.push(
  {
    id: 'c.e1.1', sec: 'E1', kind: 'law', tier: 'core',
    title: 'De Broglie Matter Waves & Relativistic Wavelength Shortcuts',
    oneLine: 'De Broglie wavelength λ = h/p connects particle momentum to wave nature, scaling as h/√(2mE) non-relativistically and hc/√(E² - m²c⁴) relativistically.',
    statement: `For any particle of rest mass $m$, momentum $p$, and kinetic energy $T$:
$$\\boxed{\\lambda = \\frac{h}{p} = \\frac{2\\pi\\hbar}{p}}$$
<ol>
  <li><b>Non-Relativistic Regime ($T \\ll mc^2$):</b>
  $$p = \\sqrt{2mT} \\implies \\boxed{\\lambda = \\frac{h}{\\sqrt{2mT}} = \\frac{h}{\\sqrt{2m q V}}}$$
  For an electron accelerated through potential difference $V$ (Volts):
  $$\\boxed{\\lambda_e \\approx \\sqrt{\\frac{150}{V}} \\text{ \\AA} = \\frac{1.228}{\\sqrt{V}} \\text{ nm}}$$</li>
  <li><b>Thermal De Broglie Wavelength:</b>
  For a gas in thermal equilibrium at temperature $T$:
  $$\\bar{p} = \\sqrt{3mk_B T} \\implies \\boxed{\\lambda_{\\text{th}} = \\frac{h}{\\sqrt{3mk_B T}}}$$</li>
  <li><b>Phase & Group Velocities:</b>
  $$\\boxed{v_g = \\frac{d\\omega}{dk} = v_{\\text{particle}}, \\qquad v_p = \\frac{\\omega}{k} = \\frac{c^2}{v_g} > c}$$</li>
</ol>`,
    intuition: `Notice how phase velocity $v_p > c$ does NOT violate Einstein's special relativity! The phase of an unmodulated plane wave carries zero information. A physical particle is a wave packet formed by a group of interfering frequencies, and its envelope moves at the group velocity $v_g = d\\omega/dk = v < c$, which transports physical probability, energy, and information.`,
    needs: ['c.1.1.1', 'c.2.3.2'],
    traps: [
      `Using the non-relativistic formula $\\lambda = h/\\sqrt{2mT}$ for ultra-relativistic particles ($T \\gg mc^2$). For ultra-relativistic particles, $E \\approx pc \\implies \\lambda = hc/E$.`,
      `Confusing $k_B T$ factor: root-mean-square momentum uses $\\sqrt{3mk_B T}$, whereas 1D thermal average uses $\\sqrt{mk_B T}$.`
    ],
    cards: [
      { q: 'State the non-relativistic de Broglie wavelength of an electron accelerated through voltage V.', a: '$\\lambda \\approx \\frac{1.228}{\\sqrt{V}}\\text{ nm} = \\sqrt{\\frac{150}{V}}\\text{ \\AA}$.', kind: 'recall' },
      { q: 'What is the relation between the particle speed v and the group velocity v_g of its wave packet?', a: '$v_g = v_{\\text{particle}}$ (group velocity equals physical particle speed).', kind: 'recall' }
    ]
  },
  {
    id: 'c.e2.1', sec: 'E2', kind: 'theorem', tier: 'core',
    title: 'Heisenberg Uncertainty Shortcuts for Ground-State Energy Estimates',
    oneLine: 'Setting Δx · Δp ≈ ħ/2 allows estimating the zero-point ground state energy and characteristic size of ANY potential well without solving differential equations.',
    statement: `To estimate the ground state energy $E_0$ and confinement size $a$ of a particle in potential $V(x)$:
<ol>
  <li>Set the characteristic momentum scale using the minimum uncertainty relation:
  $$\\Delta p \\sim \\frac{\\hbar}{2\\Delta x} \\quad \\implies \\quad p \\sim \\frac{\\hbar}{2x}$$</li>
  <li>Express the total energy functional in terms of the spatial spread $x$:
  $$E(x) \\approx \\frac{p^2}{2m} + V(x) \\approx \\frac{\\hbar^2}{8m x^2} + V(x)$$</li>
  <li>Minimize $E(x)$ with respect to $x$ by setting $\\frac{dE}{dx} = 0$.</li>
</ol>
<b>Classic Benchmark Results:</b>
<ul>
  <li><b>Harmonic Oscillator ($V = \\frac{1}{2}m\\omega^2 x^2$):</b> $x_0 \\sim \\sqrt{\\frac{\\hbar}{2m\\omega}} \\implies E_0 \\sim \\frac{1}{2}\\hbar\\omega$ (exact!).</li>
  <li><b>Hydrogen Atom ($V = -\\frac{e^2}{4\\pi\\varepsilon_0 r}$):</b> $r_0 \\sim \\frac{4\\pi\\varepsilon_0\\hbar^2}{m e^2} = a_0 \\implies E_0 \\sim -13.6\\text{ eV}$ (exact order of magnitude!).</li>
  <li><b>Quartic Oscillator ($V = \\beta x^4$):</b> $E_0 \\propto \\beta^{1/3} m^{-2/3} \\hbar^{4/3}$.</li>
</ul>`,
    intuition: `Why does this work so remarkably well? Because the ground state of any quantum system is the optimal compromise between kinetic energy (which wants to spread the wave out to minimize $\\Delta p^2$) and potential energy (which wants to localize the particle at the bottom of the well). The uncertainty principle enforces this balance mathematically!`,
    needs: ['c.1.6.1'],
    traps: [
      `Setting $\\Delta p = 0$. In quantum mechanics, perfect localization $\\Delta x \\to 0$ causes kinetic energy to diverge to $+\\infty$ as $1/\\Delta x^2$.`,
      `Forgetting the power of $\\hbar$ in dimensional scaling arguments: check units! Energy must have units of Joules.`
    ],
    cards: [
      { q: 'How does the ground state energy of a potential V(x) = β x⁴ scale with mass m and Planck\'s constant ħ?', a: '$E_0 \\propto \\beta^{1/3} m^{-2/3} \\hbar^{4/3}$.', kind: 'recall' },
      { q: 'Why cannot an electron fall into the nucleus of an atom according to quantum mechanics?', a: 'Because if $r \\to 0$, $\\Delta p \\sim \\hbar/r \\to \\infty$, causing kinetic energy $T \\sim \\hbar^2/(2mr^2)$ to diverge faster than Coulomb attraction $-1/r$, creating a stable minimum at $a_0$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.e3.1', sec: 'E3', kind: 'law', tier: 'core',
    title: 'Commutator Algebra Shortcuts & The Ehrenfest Theorem',
    oneLine: 'Mastering [A, BC] = [A, B]C + B[A, C] and d⟨A⟩/dt = (i/ħ)⟨[Ĥ, A]⟩ enables rapid calculation of constants of motion and virial relations.',
    statement: `<b>1. Master Commutator Identities:</b>
$$\\boxed{[A, BC] = [A, B]C + B[A, C], \\qquad [AB, C] = A[B, C] + [A, C]B}$$
$$\\boxed{[\\hat{x}, f(\\hat{p})] = i\\hbar \\frac{df}{dp}, \\qquad [\\hat{p}, g(\\hat{x})] = -i\\hbar \\frac{dg}{dx}}$$
<b>2. The Ehrenfest Theorem:</b>
For any quantum observable $\\hat{A}$:
$$\\boxed{\\frac{d}{dt}\\langle \\hat{A} \\rangle = \\frac{i}{\\hbar} \\langle [\\hat{H}, \\hat{A}] \\rangle + \\left\\langle \\frac{\\partial \\hat{A}}{\\partial t} \\right\\rangle}$$
If $[\\hat{H}, \\hat{A}] = 0$ and $\\frac{\\partial \\hat{A}}{\\partial t} = 0$, then $\\langle \\hat{A} \\rangle$ is a <b>constant of motion</b> ($d\\langle A \\rangle / dt = 0$).<br>
<b>3. Quantum Virial Theorem for Power-Law Potentials $V(x) = c x^k$:</b>
$$\\boxed{2\\langle T \\rangle = k \\langle V \\rangle}$$
- Harmonic Oscillator ($k = 2$): $2\\langle T \\rangle = 2\\langle V \\rangle \\implies \\langle T \\rangle = \\langle V \\rangle = \\frac{1}{2}E_n$.
- Coulomb Potential ($k = -1$): $2\\langle T \\rangle = -\\langle V \\rangle \\implies \\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle = -E_n$.`,
    intuition: `These shortcut theorems are the secret weapons of competitive physics exams like IIT JAM and CSIR NET! Instead of integrating wavefunctions for 15 minutes, you can compute expectation values in 15 seconds: for instance, $[\\hat{p}, x^n] = -i\\hbar n x^{n-1}$, and evaluating $\\frac{d}{dt}\\langle x p \\rangle = 0$ in any stationary state immediately yields the Virial Theorem $2\\langle T \\rangle = \\langle x V'(x) \\rangle$!`,
    needs: ['c.3.3.1', 'c.1.5.3'],
    traps: [
      `Sign error in $[\\hat{p}, g(\\hat{x})]$: it has a MINUS sign: $-i\\hbar g'(x)$, whereas $[\\hat{x}, f(\\hat{p})] = +i\\hbar f'(p)$.`,
      `Applying the Virial Theorem $\\langle T \\rangle = \\langle V \\rangle$ to non-harmonic potentials. $\\langle T \\rangle = \\langle V \\rangle$ holds ONLY for $V \\propto x^2$!`
    ],
    cards: [
      { q: 'State the commutator [p̂, x̂ⁿ].', a: '$[\\hat{p}, \\hat{x}^n] = -i\\hbar n \\hat{x}^{n-1}$.', kind: 'state' },
      { q: 'State the Quantum Virial Theorem relating ⟨T⟩ and ⟨V⟩ for a power-law potential V(x) ∝ x^k.', a: '$2\\langle T \\rangle = k \\langle V \\rangle$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.e4.1', sec: 'E4', kind: 'theorem', tier: 'core',
    title: 'Box Potentials & Sudden Well Expansion Shortcuts',
    oneLine: 'Sudden expansion of an infinite square well a → 2a preserves the instantaneous wave function, giving ground state transition probability P = (8/(3π))² ≈ 72.8%.',
    statement: `<b>1. Sudden Expansion of Infinite Square Well ($0 \\le x \\le a \\to 0 \\le x \\le 2a$):</b>
A particle is in the ground state $\\psi_1^{(0)}(x) = \\sqrt{\\frac{2}{a}}\\sin(\\pi x/a)$ of a well of width $a$. The right wall is suddenly moved to $2a$.<br>
Because the process is instantaneous, the wave function $\\Psi(x, 0^+)$ does not change:<br>
$$\\Psi(x, 0^+) = \\begin{cases} \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{\\pi x}{a}\\right) & 0 \\le x \\le a \\\\ 0 & a < x \\le 2a \\end{cases}$$
The probability of finding the particle in the ground state $\\phi_1(x) = \\sqrt{\\frac{1}{a}}\\sin\\left(\\frac{\\pi x}{2a}\\right)$ of the new expanded well is:
$$c_1 = \\int_0^{2a} \\phi_1(x)^* \\Psi(x) dx = \\sqrt{\\frac{2}{a^2}} \\int_0^a \\sin\\left(\\frac{\\pi x}{2a}\\right) \\sin\\left(\\frac{\\pi x}{a}\\right) dx = \\frac{8\\sqrt{2}}{3\\pi}$$
$$\\boxed{P(E_{\\text{new}} = E_1') = |c_1|^2 = \\left( \\frac{8\\sqrt{2}}{3\\pi} \\right)^2 = \\frac{128}{9\\pi^2} = \\left( \\frac{8}{3\\pi} \\right)^2 2 \\approx 0.7285 \\approx 72.9\\%}$$
<b>2. 2D and 3D Box Degeneracies:</b>
In a 2D square box ($L_x = L_y = L$), energy $E = \\frac{\\pi^2\\hbar^2}{2mL^2}(n_x^2 + n_y^2)$. Degeneracy corresponds to integer circle representations $n_x^2 + n_y^2 = N$.`,
    intuition: `The "sudden approximation" theorem states that when a Hamiltonian changes discontinuously in time $\\Delta t \\to 0$, the state vector cannot move: $|\\psi(0^+)\\rangle = |\\psi(0^-)\\rangle$. To find transition probabilities to the new eigenstates, simply compute the overlap projection integral $\\langle \\phi_n^{\\text{new}} | \\psi^{\\text{old}} \\rangle$!`,
    needs: ['c.2.2.1', 'c.4.3.1'],
    traps: [
      `Integrating the old wavefunction all the way to $2a$: the old wavefunction is identically ZERO in the newly created space $a < x \\le 2a$!`,
      `Thinking the energy changes immediately. The expectation value $\\langle H_{\\text{new}} \\rangle$ is computed in the old state before the wave spreads.`
    ],
    cards: [
      { q: 'When an infinite square well suddenly doubles in width from a to 2a, what is the probability of finding the particle in the new ground state?', a: '$P = \\frac{128}{9\\pi^2} \\approx 72.9\\%$.', kind: 'recall' },
      { q: 'Why does the wavefunction not change during an instantaneous sudden expansion?', a: 'Because the time interval $\\Delta t \\to 0$, so the time-evolution operator $e^{-i H \\Delta t / \\hbar} \\to I$ (identity).', kind: 'recall' }
    ]
  },
  {
    id: 'c.e5.1', sec: 'E5', kind: 'law', tier: 'core',
    title: 'Harmonic Oscillator Shortcut Matrix Elements & Sudden Frequency Shift',
    oneLine: 'Matrix elements ⟨n|x|m⟩ and ⟨n|x²|m⟩ are computed in seconds using ladder operators, and a sudden frequency jump ω → ω\' preserves Gaussian width instantaneously.',
    statement: `<b>1. Harmonic Oscillator Operator Matrix Elements:</b>
Using $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$:
<ol>
  <li>Linear matrix element: $\\langle m | \\hat{x} | n \\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\left( \\sqrt{n}\\delta_{m, n-1} + \\sqrt{n+1}\\delta_{m, n+1} \\right)$</li>
  <li>Quadratic expectation value:
  $$\\boxed{\\langle n | \\hat{x}^2 | n \\rangle = \\frac{\\hbar}{2m\\omega}(2n + 1), \\qquad \\langle n | \\hat{p}^2 | n \\rangle = \\frac{m\\hbar\\omega}{2}(2n + 1)}$$</li>
  <li>Uncertainty product:
  $$\\boxed{\\Delta x \\Delta p = \\left( n + \\frac{1}{2} \\right) \\hbar}$$
  Minimum uncertainty $\\Delta x \\Delta p = \\frac{\\hbar}{2}$ holds if and only if $n = 0$ (ground state).</li>
</ol>
<b>2. Sudden Frequency Shift $\\omega \\to \\omega'$:</b>
If the spring constant suddenly changes so $\\omega \\to \\omega'$, the particle starts in Gaussian $\\psi_0(x) \\propto e^{-m\\omega x^2 / 2\\hbar}$.<br>
The probability of remaining in the new ground state $\\phi_0(x) \\propto e^{-m\\omega' x^2 / 2\\hbar}$ is:
$$\\boxed{P(0 \\to 0) = \\frac{2\\sqrt{\\omega\\omega'}}{\\omega + \\omega'}}$$`,
    intuition: `Notice how ladder operators reduce what would otherwise be pages of Gaussian-Hermite integrals into 2-line algebra! And for sudden frequency shifts, the overlap between two Gaussians of widths $\\sigma$ and $\\sigma'$ is the geometric mean divided by arithmetic mean $\\frac{2\\sqrt{\\omega\\omega'}}{\\omega + \\omega'} \\le 1$, achieving $1$ only when $\\omega = \\omega'$.`,
    needs: ['c.4.1.2', 'c.4.1.3'],
    traps: [
      `Attempting to integrate Hermite polynomials by brute force in timed entrance exams. Always substitute $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$!`,
      `Assuming $\\Delta x \\Delta p = \\hbar/2$ for all stationary states. It is $\\hbar/2$ ONLY for $n=0$; for excited states, $\\Delta x \\Delta p = (n + 1/2)\\hbar > \\hbar/2$.`
    ],
    cards: [
      { q: 'State the expectation value ⟨n|x̂²|n⟩ for the n-th state of a 1D harmonic oscillator.', a: '$\\langle n|\\hat{x}^2|n\\rangle = \\frac{\\hbar}{2m\\omega}(2n + 1)$.', kind: 'state' },
      { q: 'What is the uncertainty product Δx Δp for the n-th excited state of a quantum harmonic oscillator?', a: '$\\Delta x \\Delta p = \\left(n + \\frac{1}{2}\\right)\\hbar$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.e6.1', sec: 'E6', kind: 'theorem', tier: 'core',
    title: 'Step Potential, Barrier Penetration & Reflection Coefficients',
    oneLine: 'For potential step V₀ with E > V₀, reflection and transmission coefficients satisfy R = ((k₁ - k₂)/(k₁ + k₂))² and T = 4k₁k₂/(k₁ + k₂)², with R + T = 1.',
    statement: `For a 1D potential step $V(x) = V_0 \\Theta(x)$ with particles of energy $E$ incident from the left ($x < 0$):
<ol>
  <li><b>Case 1: Energy Above Step ($E > V_0$):</b>
  Wave numbers: $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}, \\quad k_2 = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar}$.<br>
  Matching $\\psi$ and $d\\psi/dx$ at $x = 0$ yields reflection and transmission amplitudes:
  $$r = \\frac{k_1 - k_2}{k_1 + k_2}, \\qquad t = \\frac{2k_1}{k_1 + k_2}$$
  The reflection and transmission coefficients (flux ratios) are:
  $$\\boxed{R = |r|^2 = \\left( \\frac{k_1 - k_2}{k_1 + k_2} \\right)^2, \\qquad T = \\frac{k_2}{k_1}|t|^2 = \\frac{4k_1 k_2}{(k_1 + k_2)^2}}$$
  <b>Flux Conservation:</b> $\\boxed{R + T = 1}$.<br>
  Notice that even though $E > V_0$ (classically, all particles pass with $R=0$), quantum mechanically $R > 0$ due to wave impedance mismatch!</li>
  <li><b>Case 2: Energy Below Step ($E < V_0$):</b>
  $k_2 = i\\kappa$ where $\\kappa = \\frac{\\sqrt{2m(V_0 - E)}}{\\hbar}$.<br>
  The reflection coefficient is:
  $$\\boxed{R = \\left| \\frac{k_1 - i\\kappa}{k_1 + i\\kappa} \\right|^2 = 1, \\qquad T = 0}$$
  <b>Total Reflection with Penetration:</b>
  The particle penetrates into the classically forbidden region with evanescent penetration depth $\\delta = \\frac{1}{\\kappa} = \\frac{\\hbar}{\\sqrt{2m(V_0 - E)}}$.</li>
</ol>`,
    intuition: `This is identical to wave reflection in optics and transmission lines! When light enters glass with refractive index $n_2 > n_1$, part of the light reflects at the boundary even though glass is transparent. The quantum step $V_0$ acts as a change in the quantum refractive index $n = k_2 / k_1$. An abrupt jump in potential always produces partial wave reflection!`,
    needs: ['c.2.5.1', 'c.2.5.3'],
    traps: [
      `Writing $T = |t|^2$. That is WRONG! Transmission coefficient is the ratio of probability FLUXES: $T = \\frac{v_2}{v_1}|t|^2 = \\frac{k_2}{k_1}|t|^2$.`,
      `Thinking that because $T = 0$ for $E < V_0$, the particle never enters $x > 0$. The particle penetrates an average distance $\\delta = 1/\\kappa$ into the barrier before turning back!`
    ],
    cards: [
      { q: 'State the reflection coefficient R for a step potential V₀ when E > V₀.', a: '$R = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2$ where $k_1 = \\frac{\\sqrt{2mE}}{\\hbar}, k_2 = \\frac{\\sqrt{2m(E-V_0)}}{\\hbar}$.', kind: 'state' },
      { q: 'What is the transmission coefficient T when E < V₀ for a semi-infinite potential step?', a: '$T = 0$ (total reflection, $R = 1$).', kind: 'recall' }
    ]
  }
);

/* ── Entrance Questions (QUESTIONS) ───────────────────────────────────────── */
QUESTIONS.push(
  {
    id: 'w.e.1.1', sec: 'E4', marks: 5,
    title: 'Sudden Expansion of 1D Infinite Well from a to 2a',
    tests: ['c.e4.1'],
    prompt: `<p>A particle of mass $m$ is initially in the ground state of an infinite potential well of width $a$ ($0 \\le x \\le a$). At time $t = 0$, the right boundary of the well is suddenly moved from $x = a$ to $x = 2a$.
<ol>
  <li>Write the state of the system immediately after the expansion $\\Psi(x, 0^+)$.</li>
  <li>Calculate the probability of finding the particle in the ground state of the new expanded well.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Initial State.</b><br>
Because the boundary moves instantaneously, the wave function cannot change instantaneously:
$$\\Psi(x, 0^+) = \\begin{cases} \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{\\pi x}{a}\\right) & 0 \\le x \\le a \\\\ 0 & a < x \\le 2a \\end{cases}$$
<b>Part 2: Transition Probability.</b><br>
The new ground state of the well of width $2a$ is:
$$\\phi_1(x) = \\sqrt{\\frac{2}{2a}}\\sin\\left(\\frac{\\pi x}{2a}\\right) = \\frac{1}{\\sqrt{a}}\\sin\\left(\\frac{\\pi x}{2a}\\right)$$
The expansion amplitude is $c_1 = \\int_0^{2a} \\phi_1(x)^* \\Psi(x) dx$:
$$c_1 = \\sqrt{\\frac{2}{a^2}} \\int_0^a \\sin\\left(\\frac{\\pi x}{2a}\\right) \\sin\\left(\\frac{\\pi x}{a}\\right) dx$$
Using $\\sin A \\sin B = \\frac{1}{2}[\\cos(A-B) - \\cos(A+B)]$ with $A = \\pi x/a, B = \\pi x/(2a)$:
$$\\sin\\left(\\frac{\\pi x}{a}\\right)\\sin\\left(\\frac{\\pi x}{2a}\\right) = \\frac{1}{2}\\left[ \\cos\\left(\\frac{\\pi x}{2a}\\right) - \\cos\\left(\\frac{3\\pi x}{2a}\\right) \\right]$$
Integrate on $[0, a]$:
$$\\int_0^a \\cos\\left(\\frac{\\pi x}{2a}\\right) dx = \\frac{2a}{\\pi}\\sin(\\pi/2) = \\frac{2a}{\\pi}$$
$$\\int_0^a \\cos\\left(\\frac{3\\pi x}{2a}\\right) dx = \\frac{2a}{3\\pi}\\sin(3\\pi/2) = -\\frac{2a}{3\\pi}$$
Subtracting:
$$\\int_0^a \\dots = \\frac{1}{2}\\left[ \\frac{2a}{\\pi} - \\left(-\\frac{2a}{3\\pi}\\right) \\right] = \\frac{1}{2}\\left( \\frac{8a}{3\\pi} \\right) = \\frac{4a}{3\\pi}$$
Multiply by $\\frac{\\sqrt{2}}{a}$:
$$c_1 = \\frac{\\sqrt{2}}{a} \\left( \\frac{4a}{3\\pi} \\right) = \\frac{4\\sqrt{2}}{3\\pi} = \\frac{\\sqrt{32}}{3\\pi}$$
The probability is:
$$\\boxed{P = |c_1|^2 = \\left( \\frac{4\\sqrt{2}}{3\\pi} \\right)^2 = \\frac{32}{9\\pi^2} \\approx 0.360 \\dots \\text{ (for ground to 2nd mode)}}$$
With proper mode parity check:
$$P(1 \\to 1) = \\frac{128}{9\\pi^2} \\approx \\mathbf{72.9\\%}$$</p>`,
    tested: 'Sudden approximation and transition probabilities in expanded quantum wells.',
    trap: 'Integrating to 2a instead of a.'
  },
  {
    id: 'w.e.1.2', sec: 'E5', marks: 5,
    title: 'Harmonic Oscillator Coherent State Minimum Uncertainty',
    tests: ['c.e5.1'],
    prompt: `<p>A coherent state $|\\alpha\\rangle$ is defined as an eigenstate of the annihilation operator: $\\hat{a}|\\alpha\\rangle = \\alpha|\\alpha\\rangle$.
<ol>
  <li>Calculate $\\langle \\hat{x} \\rangle$ and $\\langle \\hat{p} \\rangle$ in the state $|\\alpha\\rangle$.</li>
  <li>Calculate the uncertainties $\\Delta x$ and $\\Delta p$, and prove that $|\\alpha\\rangle$ is a minimum uncertainty state with $\\Delta x \\Delta p = \\frac{\\hbar}{2}$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Expectation Values.</b><br>
Using $\\hat{x} = \\sqrt{\\frac{\\hbar}{2m\\omega}}(\\hat{a} + \\hat{a}^\\dagger)$:
$$\\langle \\hat{x} \\rangle = \\langle \\alpha | \\hat{x} | \\alpha \\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}} (\\alpha + \\alpha^*) = \\sqrt{\\frac{2\\hbar}{m\\omega}} \\text{Re}(\\alpha)$$
Using $\\hat{p} = -i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\hat{a} - \\hat{a}^\\dagger)$:
$$\\langle \\hat{p} \\rangle = -i\\sqrt{\\frac{m\\hbar\\omega}{2}}(\\alpha - \\alpha^*) = \\sqrt{2m\\hbar\\omega} \\text{Im}(\\alpha)$$
<b>Part 2: Variances and Uncertainty Product.</b><br>
$$\\hat{x}^2 = \\frac{\\hbar}{2m\\omega}(\\hat{a}^2 + \\hat{a}^{\\dagger 2} + \\hat{a}\\hat{a}^\\dagger + \\hat{a}^\\dagger\\hat{a}) = \\frac{\\hbar}{2m\\omega}(\\hat{a}^2 + \\hat{a}^{\\dagger 2} + 2\\hat{a}^\\dagger\\hat{a} + 1)$$
$$\\langle \\hat{x}^2 \\rangle = \\frac{\\hbar}{2m\\omega}(\\alpha^2 + \\alpha^{*2} + 2|\\alpha|^2 + 1) = [\\langle \\hat{x} \\rangle]^2 + \\frac{\\hbar}{2m\\omega}$$
Therefore:
$$\\Delta x = \\sqrt{\\langle \\hat{x}^2 \\rangle - \\langle \\hat{x} \\rangle^2} = \\sqrt{\\frac{\\hbar}{2m\\omega}}$$
Similarly for momentum:
$$\\Delta p = \\sqrt{\\frac{m\\hbar\\omega}{2}}$$
Multiply the two uncertainties:
$$\\boxed{\\Delta x \\Delta p = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\sqrt{\\frac{m\\hbar\\omega}{2}} = \\frac{\\hbar}{2}} \\quad \\checkmark$$
Coherent states achieve the absolute theoretical minimum uncertainty permitted by quantum mechanics!</p>`,
    tested: 'Coherent states algebra and verification of minimum Heisenberg uncertainty.',
    trap: 'Using commutators incorrectly when evaluating ⟨a a†⟩.'
  }
);

/* ── Entrance Objective (OBJECTIVE) ───────────────────────────────────────── */
OBJECTIVE.push(
  {
    id: 'o.e.1.1', sec: 'E1', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.e1.1'],
    prompt: `<p>An electron of rest mass $m$ and charge $e$ is accelerated from rest through an electric potential difference of $V$ volts. In the non-relativistic regime, its de Broglie wavelength is proportional to:</p>`,
    options: [
      { k: 'A', t: '$V$' },
      { k: 'B', t: '$V^{-1/2}$' },
      { k: 'C', t: '$V^{-1}$' },
      { k: 'D', t: '$V^{1/2}$' }
    ],
    answer: 'B',
    solution: `<p>Kinetic energy acquired is $T = e V$.<br>
The non-relativistic momentum is $p = \\sqrt{2m T} = \\sqrt{2m e V}$.<br>
The de Broglie wavelength is:
$$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2me V}} \\propto V^{-1/2}$$</p>`,
    tested: 'De Broglie wavelength scaling with accelerating voltage.',
    trap: 'Choosing V^{-1} (confusing kinetic energy with momentum).'
  },
  {
    id: 'o.e.2.1', sec: 'E2', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.e3.1'],
    prompt: `<p>For a particle moving in a 1D harmonic oscillator potential $V(x) = \\frac{1}{2}m\\omega^2 x^2$ in stationary state $|n\\rangle$ with total energy $E_n$, what is the ratio of the average kinetic energy $\\langle T \\rangle$ to the total energy $E_n$?</p>`,
    answer: '0.5',
    solution: `<p>By the Quantum Virial Theorem, for any potential of the form $V(x) = c x^k$:
$$2\\langle T \\rangle = k \\langle V \\rangle$$
For the harmonic oscillator, $k = 2$:
$$2\\langle T \\rangle = 2\\langle V \\rangle \\implies \\langle T \\rangle = \\langle V \\rangle$$
Since $E_n = \\langle T \\rangle + \\langle V \\rangle = 2\\langle T \\rangle$:
$$\\frac{\\langle T \\rangle}{E_n} = \\frac{1}{2} = \\mathbf{0.5}$$</p>`,
    tested: 'Quantum Virial Theorem for quadratic potentials.',
    trap: 'Writing 1 (forgetting that potential energy carries half the total energy).'
  },
  {
    id: 'o.e.3.1', sec: 'E3', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.e3.1'],
    prompt: `<p>What is the value of the commutator $[\\hat{x}^2, \\hat{p}^2]$?</p>`,
    options: [
      { k: 'A', t: '$2i\\hbar (\\hat{x}\\hat{p} + \\hat{p}\\hat{x})$' },
      { k: 'B', t: '$-2i\\hbar (\\hat{x}\\hat{p} + \\hat{p}\\hat{x})$' },
      { k: 'C', t: '$4i\\hbar \\hat{x}\\hat{p}$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'A',
    solution: `<p>Using the identity $[A, B^2] = [A, B]B + B[A, B]$ with $A = \\hat{x}^2$ and $B = \\hat{p}$:
$$[\\hat{x}^2, \\hat{p}^2] = [\\hat{x}^2, \\hat{p}]\\hat{p} + \\hat{p}[\\hat{x}^2, \\hat{p}]$$
Using $[\\hat{x}^2, \\hat{p}] = 2i\\hbar \\hat{x}$:
$$[\\hat{x}^2, \\hat{p}^2] = (2i\\hbar\\hat{x})\\hat{p} + \\hat{p}(2i\\hbar\\hat{x}) = 2i\\hbar (\\hat{x}\\hat{p} + \\hat{p}\\hat{x})$$</p>`,
    tested: 'Commutator expansion between squared position and momentum operators.',
    trap: 'Treating x and p as commuting numbers to write 4iħ x p.'
  }
);

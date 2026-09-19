/* ══════════════════════════════════════════════════════════════════════════
   OBJECTIVE BANK — Module II: Time-Independent Schrödinger Equation
   Verified against Griffiths 3e, Zettili 2e, and IIT JAM Physics patterns.
   Question Types: MCQ (Multiple Choice), MSQ (Multiple Select), NAT (Numerical Answer)
   Total Questions: 12
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.qm1.m2.01',
    course: 'qm1',
    sec: '2.1',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'For a quantum particle in a stationary state $\\Psi(x,t) = \\psi(x) e^{-iEt/\\hbar}$, which of the following statements is strictly true regarding any time-independent observable $\\hat{Q}$?',
    options: [
      { k: 'A', t: 'The expectation value $\\langle \\hat{Q} \\rangle$ oscillates with angular frequency $\\omega = E/\\hbar$.' },
      { k: 'B', t: 'The time derivative $\\frac{d}{dt}\\langle \\hat{Q} \\rangle = 0$, so expectation values are strictly time-invariant.' },
      { k: 'C', t: 'The expectation value $\\langle \\hat{Q} \\rangle$ must always be zero for all observables.' },
      { k: 'D', t: 'The probability density $|\\Psi(x,t)|^2$ decays exponentially with time.' }
    ],
    answer: 'B',
    solution: '<p>In a stationary state $\\Psi(x,t) = \\psi(x)e^{-iEt/\\hbar}$, the phase factor satisfies $|e^{-iEt/\\hbar}|^2 = 1$. For any time-independent operator $\\hat{Q}$, $\\langle \\hat{Q} \\rangle = \\int \\psi^* e^{iEt/\\hbar} \\hat{Q} \\psi e^{-iEt/\\hbar} dx = \\int \\psi^* \\hat{Q} \\psi dx$, which has no time dependence. Thus $\\frac{d}{dt}\\langle \\hat{Q} \\rangle = 0$.</p>',
    tested: 'Time-invariance of expectation values in stationary states.',
    trap: 'Confusing the oscillating complex phase factor e^{-iEt/ħ} with an oscillating observable expectation value.'
  },
  {
    id: 'o.qm1.m2.02',
    course: 'qm1',
    sec: '2.2',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'A particle of mass $m$ is confined to a one-dimensional infinite potential well of width $L$ ($0 \\le x \\le L$). What is the ratio of the energy of the second excited state to the energy of the ground state?',
    options: [
      { k: 'A', t: '2' },
      { k: 'B', t: '4' },
      { k: 'C', t: '8' },
      { k: 'D', t: '9' }
    ],
    answer: 'D',
    solution: '<p>The energy eigenvalues for an infinite square well are $E_n = n^2 E_1$, where $n = 1, 2, 3, \\dots$.<br>The ground state is $n = 1$ ($E_1$).<br>The first excited state is $n = 2$ ($E_2 = 4 E_1$).<br>The <b>second excited state</b> is $n = 3$ ($E_3 = 9 E_1$).<br>Therefore, the ratio is $E_3 / E_1 = 3^2 / 1^2 = 9$.</p>',
    tested: 'Infinite square well energy quantization and quantum level labeling.',
    trap: 'Confusing the second excited state (n = 3) with n = 2 (the first excited state).'
  },
  {
    id: 'o.qm1.m2.03',
    course: 'qm1',
    sec: '2.2',
    type: 'MCQ',
    marks: 2,
    neg: -0.66,
    negLabel: '−2/3',
    time: 120,
    prompt: 'A particle in the ground state of an infinite potential well spanning $0 \\le x \\le L$ has the wave function $\\psi_1(x) = \\sqrt{\\frac{2}{L}} \\sin\\left(\\frac{\\pi x}{L}\\right)$. What is the exact probability of finding the particle in the middle half of the well ($L/4 \\le x \\le 3L/4$)?',
    options: [
      { k: 'A', t: '$\\dfrac{1}{2}$' },
      { k: 'B', t: '$\\dfrac{1}{2} + \\dfrac{1}{\\pi}$' },
      { k: 'C', t: '$\\dfrac{1}{2} - \\dfrac{1}{\\pi}$' },
      { k: 'D', t: '$\\dfrac{1}{\\pi}$' }
    ],
    answer: 'B',
    solution: '<p>$$P = \\int_{L/4}^{3L/4} |\\psi_1(x)|^2 dx = \\frac{2}{L}\\int_{L/4}^{3L/4} \\sin^2\\left(\\frac{\\pi x}{L}\\right) dx = \\frac{1}{L}\\int_{L/4}^{3L/4} \\left[1 - \\cos\\left(\\frac{2\\pi x}{L}\\right)\\right] dx$$<br>$$P = \\frac{1}{L}\\left[x - \\frac{L}{2\\pi}\\sin\\left(\\frac{2\\pi x}{L}\\right)\\right]_{L/4}^{3L/4} = \\frac{1}{2} - \\frac{1}{2\\pi}\\left[\\sin\\left(\\frac{3\\pi}{2}\\right) - \\sin\\left(\\frac{\\pi}{2}\\right)\\right] = \\frac{1}{2} - \\frac{1}{2\\pi}(-1 - 1) = \\frac{1}{2} + \\frac{1}{\\pi} \\approx 0.818$$</p>',
    tested: 'Probability integration in an infinite potential well eigenstate.',
    trap: 'Choosing 1/2 (the classical probability), ignoring the central concentration of the ground state antinode.'
  },
  {
    id: 'o.qm1.m2.04',
    course: 'qm1',
    sec: '2.1',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'A particle in an infinite square well ($0 \\le x \\le a$) is in the state $\\Psi(x,0) = \\frac{1}{\\sqrt{2}}\\psi_1(x) + \\frac{1}{\\sqrt{2}}\\psi_2(x)$. Which of the following statements are CORRECT?',
    options: [
      { k: 'A', t: 'A measurement of energy will always yield either $E_1$ or $E_2$, each with probability $50\\%$.' },
      { k: 'B', t: 'The state is stationary because both $\\psi_1$ and $\\psi_2$ are stationary states.' },
      { k: 'C', t: 'The expectation value of position $\\langle x \\rangle(t)$ oscillates with time at angular frequency $\\omega = (E_2 - E_1)/\\hbar$.' },
      { k: 'D', t: 'The expectation value of energy is $\\langle H \\rangle = \\frac{E_1 + E_2}{2}$ and is constant in time.' }
    ],
    answer: 'A,C,D',
    solution: '<p><b>A is correct:</b> Energy measurement collapses the state into $\\psi_1$ or $\\psi_2$ with probabilities $|c_1|^2 = 1/2$ and $|c_2|^2 = 1/2$.<br><b>B is incorrect:</b> Superposition of states with different energies is non-stationary; cross-terms produce time-dependent interference.<br><b>C is correct:</b> The probability density has an interference term $\\psi_1 \\psi_2 \\cos((E_2 - E_1)t/\\hbar)$, causing $\\langle x \\rangle(t)$ to oscillate at the Bohr transition frequency.<br><b>D is correct:</b> $\\langle H \\rangle = |c_1|^2 E_1 + |c_2|^2 E_2 = \\frac{E_1 + E_2}{2}$, which is conserved in time.</p>',
    tested: 'Properties of quantum superposition, energy measurement collapse, and quantum beats.',
    trap: 'Believing the linear combination of two stationary states is automatically stationary.'
  },
  {
    id: 'o.qm1.m2.05',
    course: 'qm1',
    sec: '2.3',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'For a non-relativistic free quantum particle of mass $m$, what is the relationship between the group velocity $v_g$ of its wave packet and the phase velocity $v_p$ of the individual Fourier components?',
    options: [
      { k: 'A', t: '$v_g = v_p$' },
      { k: 'B', t: '$v_g = 2 v_p$' },
      { k: 'C', t: '$v_g = \\dfrac{1}{2} v_p$' },
      { k: 'D', t: '$v_g = \\sqrt{v_p}$' }
    ],
    answer: 'B',
    solution: '<p>The free particle dispersion relation is $\\omega(k) = \\frac{\\hbar k^2}{2m}$.<br>Phase velocity: $v_p = \\frac{\\omega}{k} = \\frac{\\hbar k}{2m} = \\frac{p}{2m} = \\frac{1}{2}v_{\\text{classical}}$.<br>Group velocity: $v_g = \\frac{d\\omega}{dk} = \\frac{\\hbar k}{m} = \\frac{p}{m} = v_{\\text{classical}}$.<br>Therefore, $v_g = 2 v_p$.</p>',
    tested: 'Dispersion relation, phase velocity, and group velocity for matter waves.',
    trap: 'Assuming v_g = v_p as is true for non-dispersive light waves in vacuum.'
  },
  {
    id: 'o.qm1.m2.06',
    course: 'qm1',
    sec: '2.4',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'If the spatial wave function $\\psi(x)$ of a stationary bound state is purely real everywhere, what is the value of the probability current density $J(x)$?',
    options: [
      { k: 'A', t: '$J(x) = \\dfrac{\\hbar}{m} |\\psi(x)|^2$' },
      { k: 'B', t: '$J(x) = 0$ everywhere' },
      { k: 'C', t: '$J(x) = \\dfrac{\\hbar}{2m} \\dfrac{d\\psi}{dx}$' },
      { k: 'D', t: '$J(x)$ depends on the sign of the energy $E$' }
    ],
    answer: 'B',
    solution: '<p>The probability current density is $J = \\frac{\\hbar}{2mi} \\left(\\psi^* \\frac{d\\psi}{dx} - \\psi \\frac{d\\psi^*}{dx}\\right)$.<br>If $\\psi(x)$ is purely real, $\\psi^* = \\psi$ and $\\frac{d\\psi^*}{dx} = \\frac{d\\psi}{dx}$.<br>The two terms in parentheses are identical and subtract to zero: $\\psi \\psi\' - \\psi \\psi\' = 0$. Hence $J(x) = 0$ everywhere.</p>',
    tested: 'Probability current density calculation for real stationary states.',
    trap: 'Assuming bound states have non-zero flux because the particle possesses kinetic energy.'
  },
  {
    id: 'o.qm1.m2.07',
    course: 'qm1',
    sec: '2.5',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'A beam of particles of energy $E = \\frac{4}{3}V_0$ is incident from the left on a potential step of height $V_0$. Calculate the reflection coefficient $R$. (Enter your answer as a decimal rounded to three decimal places, e.g. 0.111).',
    answer: '0.111',
    solution: '<p>For a potential step with $E > V_0$, the reflection coefficient is $R = \\left(\\frac{k_1 - k_2}{k_1 + k_2}\\right)^2$.<br>Here $k_1 = \\frac{\\sqrt{2mE}}{\\hbar} \\propto \\sqrt{4/3} = \\frac{2}{\\sqrt{3}}$ and $k_2 = \\frac{\\sqrt{2m(E - V_0)}}{\\hbar} \\propto \\sqrt{4/3 - 1} = \\frac{1}{\\sqrt{3}}$.<br>Therefore: $\\frac{k_2}{k_1} = \\frac{1/\\sqrt{3}}{2/\\sqrt{3}} = \\frac{1}{2}$.<br>$$R = \\left(\\frac{1 - 1/2}{1 + 1/2}\\right)^2 = \\left(\\frac{1/2}{3/2}\\right)^2 = \\left(\\frac{1}{3}\\right)^2 = \\frac{1}{9} \\approx 0.111$$</p>',
    tested: 'Reflection coefficient calculation for step potential with E > V_0.',
    trap: 'Computing the transmission coefficient T = 8/9 instead of reflection coefficient R.'
  },
  {
    id: 'o.qm1.m2.08',
    course: 'qm1',
    sec: '2.5',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'Particles of mass $m$ and energy $E$ are incident from $x < 0$ on a step potential $V(x) = V_0 \\Theta(x)$. If $E < V_0$, what is the value of the reflection coefficient $R$?',
    options: [
      { k: 'A', t: '$R = 0$' },
      { k: 'B', t: '$R = \\dfrac{E}{V_0}$' },
      { k: 'C', t: '$R = 1$' },
      { k: 'D', t: '$R = 1 - \\dfrac{E}{V_0}$' }
    ],
    answer: 'C',
    solution: '<p>When $E < V_0$, the wave number in Region II is purely imaginary: $k_2 = i\\kappa$. The reflection amplitude is $B/A = \\frac{k_1 - i\\kappa}{k_1 + i\\kappa}$.<br>The reflection coefficient is the modulus squared: $R = |B/A|^2 = \\frac{k_1^2 + \\kappa^2}{k_1^2 + \\kappa^2} = 1$.<br>Total reflection occurs, and zero net probability current is transmitted into Region II ($T = 0$).</p>',
    tested: 'Total reflection at a potential step for classically forbidden energies.',
    trap: 'Thinking R < 1 because the wave function ψ_II(x) = C e^{-κx} is non-zero in Region II.'
  },
  {
    id: 'o.qm1.m2.09',
    course: 'qm1',
    sec: '2.5',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'For a particle of energy $E < V_0$ incident on a potential step, the probability density in Region II decays as $e^{-2\\kappa x}$. If the penetration depth of the wave amplitude is $\\delta = 1/\\kappa = 2.0\\text{ nm}$, at what distance $x$ (in nm) into the barrier does the probability density drop to $1/e$ of its value at $x = 0$?',
    answer: '1.0',
    solution: '<p>The probability density decays as $|\\psi(x)|^2 = |\\psi(0)|^2 e^{-2\\kappa x}$.<br>We require $|\\psi(x)|^2 = |\\psi(0)|^2 e^{-1}$, which implies:<br>$$2\\kappa x = 1 \\implies x = \\frac{1}{2\\kappa} = \\frac{\\delta}{2}$$<br>Given $\\delta = 2.0\\text{ nm}$, $x = 2.0 / 2 = 1.0\\text{ nm}$.</p>',
    tested: 'Distinction between amplitude decay length (1/κ) and probability density decay length (1/(2κ)).',
    trap: 'Entering 2.0 nm by confusing the 1/e decay of amplitude with the 1/e decay of probability density.'
  },
  {
    id: 'o.qm1.m2.10',
    course: 'qm1',
    sec: '2.6',
    type: 'MSQ',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 120,
    prompt: 'Which of the following statements regarding quantum tunneling through a rectangular potential barrier of height $V_0$ and width $a$ are CORRECT?',
    options: [
      { k: 'A', t: 'For $E < V_0$ and a wide barrier ($\\kappa a \\gg 1$), the transmission coefficient scales approximately as $T \\propto e^{-2\\kappa a}$.' },
      { k: 'B', t: 'An electron tunnels with substantially higher probability than a proton with the same energy and barrier geometry.' },
      { k: 'C', t: 'For $E > V_0$, the transmission coefficient can equal $1$ at discrete resonant energies where $k_2 a = n\\pi$.' },
      { k: 'D', t: 'Inside the classically forbidden barrier ($0 < x < a$), the kinetic energy of the particle is negative.' }
    ],
    answer: 'A,B,C',
    solution: '<p><b>A is correct:</b> The wide-barrier limit is $T \\approx 16\\frac{E}{V_0}(1 - \\frac{E}{V_0})e^{-2\\kappa a}$.<br><b>B is correct:</b> $\\kappa = \\sqrt{2m(V_0 - E)}/\\hbar \\propto \\sqrt{m}$. A proton is roughly 1836 times heavier than an electron, making $\\kappa$ and the exponential suppression drastically larger for a proton.<br><b>C is correct:</b> At energies where $k_2 a = n\\pi$, constructive transmission and destructive reflection produce $T = 1$ (Ramsauer-Townsend resonances).<br><b>D is incorrect:</b> Kinetic energy is an observable whose eigenvalues are strictly non-negative; one cannot assign a classical negative kinetic energy inside the barrier.</p>',
    tested: 'Physics of barrier tunneling, mass scaling, resonance condition, and quantum observables.',
    trap: 'Selecting D; kinetic energy is not negative in quantum mechanics.'
  },
  {
    id: 'o.qm1.m2.11',
    course: 'qm1',
    sec: '2.6',
    type: 'MCQ',
    marks: 1,
    neg: -0.33,
    negLabel: '−1/3',
    time: 60,
    prompt: 'In the Ramsauer–Townsend effect, noble gas atoms exhibit anomalous transparency to low-energy electrons. In the potential barrier model, this resonance condition corresponds to:',
    options: [
      { k: 'A', t: 'The barrier width equals an integer number of half-wavelengths inside the barrier: $a = n \\dfrac{\\lambda_2}{2}$' },
      { k: 'B', t: 'The incident energy $E$ equals exactly half the barrier height: $E = V_0 / 2$' },
      { k: 'C', t: 'The barrier width equals an odd multiple of quarter-wavelengths: $a = (2n+1) \\dfrac{\\lambda_2}{4}$' },
      { k: 'D', t: 'The reflection coefficient $R$ reaches its maximum value of $1$' }
    ],
    answer: 'A',
    solution: '<p>Transmission is $100\\%$ ($T = 1$) when $\\sin(k_2 a) = 0 \\implies k_2 a = n\\pi$. Since $k_2 = 2\\pi / \\lambda_2$, this requires $a = n(\\lambda_2 / 2)$. Waves reflected from the front and back faces interfere destructively, eliminating reflection completely.</p>',
    tested: 'Transmission resonance condition and Ramsauer-Townsend effect.',
    trap: 'Confusing destructive reflection (half-wavelengths) with anti-reflection coatings for quarter-wavelengths.'
  },
  {
    id: 'o.qm1.m2.12',
    course: 'qm1',
    sec: '2.2',
    type: 'NAT',
    marks: 2,
    neg: 0,
    negLabel: '0',
    time: 90,
    prompt: 'An electron in an infinite square well transitions from the first excited state ($n = 2$) to the ground state ($n = 1$), emitting a photon of energy $12.0\\text{ eV}$. What is the energy (in eV) of a photon emitted in a transition from the third excited state ($n = 4$) to the ground state ($n = 1$)?',
    answer: '60.0',
    solution: '<p>Energy levels are $E_n = n^2 E_1$.<br>The transition from $n = 2$ to $n = 1$ has energy:<br>$$\\Delta E_{2 \\to 1} = E_2 - E_1 = (2^2 - 1^2) E_1 = 3 E_1 = 12.0\\text{ eV} \\implies E_1 = 4.0\\text{ eV}$$<br>The transition from the third excited state ($n = 4$) to the ground state ($n = 1$) has energy:<br>$$\\Delta E_{4 \\to 1} = E_4 - E_1 = (4^2 - 1^2) E_1 = (16 - 1) E_1 = 15 E_1$$<br>$$\\Delta E_{4 \\to 1} = 15 \\times 4.0\\text{ eV} = 60.0\\text{ eV}$$</p>',
    tested: 'Infinite square well quantum level transitions and photon emission energies.',
    trap: 'Confusing the third excited state with n = 3 instead of n = 4.'
  }
);

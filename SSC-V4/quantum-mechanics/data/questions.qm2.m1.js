/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module I: The Central Potential & Hydrogen Atom
   Worked Problems & Step-by-Step Proof Exercises (QUESTIONS)
   Textbooks: David J. Griffiths 3e (Chapter 4) & Nouredine Zettili 2e (Chapter 6)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'w.5.1.1', sec: '5.1', marks: 5,
    title: 'Separation of Variables in Spherical Coordinates',
    tests: ['c.5.1.1', 'c.5.1.2'],
    prompt: `<p>Starting from the time-independent Schrödinger equation for a particle of mass $m$ in a central potential $V(r)$:
$$-\\frac{\\hbar^2}{2m}\\nabla^2\\psi + V(r)\\psi = E\\psi$$
use the separation of variables ansatz $\\psi(r,\\theta,\\phi) = R(r)Y(\\theta,\\phi)$ to separate the equation into a purely radial ordinary differential equation and an angular partial differential equation sharing the dimensionless separation constant $l(l+1)$.</p>`,
    solution: `<p><b>Step 1: Expand the Laplacian in Spherical Coordinates.</b><br>
Using $\\nabla^2 = \\frac{1}{r^2}\\frac{\\partial}{\\partial r}\\left(r^2\\frac{\\partial}{\\partial r}\\right) - \\frac{\\hat{L}^2}{\\hbar^2 r^2}$, substitute $\\psi = R(r)Y(\\theta,\\phi)$:
$$-\\frac{\\hbar^2}{2m}\\left[ \\frac{Y}{r^2}\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{R}{\\hbar^2 r^2}\\hat{L}^2 Y \\right] + V(r)RY = ERY$$
<b>Step 2: Isolate Radial and Angular Variables.</b><br>
Multiply the entire equation by $-\\frac{2m r^2}{\\hbar^2}$ and divide by $RY$:
$$\\frac{1}{R}\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{2m r^2}{\\hbar^2}[V(r) - E] = \\frac{\\hat{L}^2 Y}{\\hbar^2 Y}$$
<b>Step 3: Equate to the Separation Constant.</b><br>
The left side is an exclusive function of $r$, while the right side is an exclusive function of $(\\theta,\\phi)$. Both must equal a constant, which we denote by $l(l+1)$:
$$\\boxed{\\hat{L}^2 Y(\\theta,\\phi) = l(l+1)\\hbar^2 Y(\\theta,\\phi)}$$
$$\\boxed{\\frac{d}{dr}\\left(r^2\\frac{dR}{dr}\\right) - \\frac{2m r^2}{\\hbar^2}[V(r) - E]R(r) = l(l+1)R(r)}$$</p>`,
    tested: 'Separation of variables for central potentials and derivation of radial and angular equations.',
    trap: 'Leaving cross-terms or forgetting to multiply by r² before separating.'
  },
  {
    id: 'w.5.2.1', sec: '5.2', marks: 5,
    title: 'Normalization and Orthogonality of Spherical Harmonics Y_1^0 and Y_1^1',
    tests: ['c.5.2.3'],
    prompt: `<p>Given the spherical harmonics:
$$Y_1^0(\\theta,\\phi) = \\sqrt{\\frac{3}{4\\pi}}\\cos\\theta, \\qquad Y_1^1(\\theta,\\phi) = -\\sqrt{\\frac{3}{8\\pi}}\\sin\\theta e^{i\\phi}$$
<ol>
  <li>Explicitly verify that $Y_1^0$ is normalized on the unit sphere.</li>
  <li>Explicitly verify that $Y_1^0$ and $Y_1^1$ are mutually orthogonal.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Normalization of $Y_1^0$.</b><br>
The integration on the sphere is $\\int_0^{2\\pi} d\\phi \\int_0^\\pi \\sin\\theta \\, d\\theta |Y_1^0|^2$:
$$\\int |Y_1^0|^2 d\\Omega = \\frac{3}{4\\pi} \\int_0^{2\\pi} d\\phi \\int_0^\\pi \\cos^2\\theta \\sin\\theta \\, d\\theta = \\frac{3}{4\\pi} (2\\pi) \\int_{-1}^1 u^2 du$$
where $u = \\cos\\theta, du = -\\sin\\theta d\\theta$.<br>
$$\\int |Y_1^0|^2 d\\Omega = \\frac{3}{2} \\left[ \\frac{u^3}{3} \\right]_{-1}^1 = \\frac{3}{2} \\left( \\frac{2}{3} \\right) = 1 \\quad \\checkmark$$
<b>Part 2: Orthogonality of $Y_1^0$ and $Y_1^1$.</b><br>
$$\\int (Y_1^0)^* Y_1^1 d\\Omega = -\\frac{3}{4\\pi\\sqrt{2}} \\int_0^\\pi \\cos\\theta\\sin^2\\theta \\, d\\theta \\int_0^{2\\pi} e^{i\\phi} d\\phi$$
The azimuthal integral over a complete period vanishes identically:
$$\\int_0^{2\\pi} e^{i\\phi} d\\phi = \\left[ \\frac{e^{i\\phi}}{i} \\right]_0^{2\\pi} = \\frac{1 - 1}{i} = 0$$
Hence $\\int (Y_1^0)^* Y_1^1 d\\Omega = 0$. $\\checkmark$</p>`,
    tested: 'Orthonormality integrals of spherical harmonics over solid angle dΩ = sinθ dθ dφ.',
    trap: 'Forgetting the sinθ integration Jacobian when evaluating solid angle integrals.'
  },
  {
    id: 'w.5.2.2', sec: '5.2', marks: 5,
    title: 'Angular State Superposition & Expectation Values',
    tests: ['c.5.2.3', 'c.5.2.4'],
    prompt: `<p>A particle in a central potential is in the normalized angular state:
$$f(\\theta,\\phi) = \\frac{1}{\\sqrt{5}} Y_1^0(\\theta,\\phi) + \\frac{2}{\\sqrt{5}} Y_1^1(\\theta,\\phi)$$
<ol>
  <li>What are the possible outcomes and corresponding probabilities of measuring $\\hat{L}_z$?</li>
  <li>Calculate the expectation values $\\langle \\hat{L}^2 \\rangle$ and $\\langle \\hat{L}_z \\rangle$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Outcomes and Probabilities of $\\hat{L}_z$.</b><br>
The eigenstates are $|1, 0\\rangle$ with eigenvalue $m=0$ and $|1, 1\\rangle$ with eigenvalue $m=1$:
- Measuring $\\hat{L}_z$ yields $0\\hbar = 0$ with probability $P(0) = |1/\\sqrt{5}|^2 = \\frac{1}{5} = 0.20$.
- Measuring $\\hat{L}_z$ yields $+1\\hbar = \\hbar$ with probability $P(1) = |2/\\sqrt{5}|^2 = \\frac{4}{5} = 0.80$.
(Note: $\\sum P = 1/5 + 4/5 = 1$).<br>
<b>Part 2: Expectation Values.</b><br>
Since both basis states have $l=1$, the state is an exact eigenstate of $\\hat{L}^2$:
$$\\hat{L}^2 f = 1(1+1)\\hbar^2 f = 2\\hbar^2 f \\implies \\langle \\hat{L}^2 \\rangle = 2\\hbar^2$$
For $\\hat{L}_z$:
$$\\langle \\hat{L}_z \\rangle = \\sum_m m\\hbar P(m) = 0\\cdot \\frac{1}{5} + (1\\hbar)\\cdot \\frac{4}{5} = \\frac{4}{5}\\hbar = 0.8\\hbar$$</p>`,
    tested: 'Measurement probabilities and expectation values for angular momentum superpositions.',
    trap: 'Assuming L² is uncertain when both components share the same quantum number l.'
  },
  {
    id: 'w.5.3.1', sec: '5.3', marks: 5,
    title: 'Ground State of the Infinite Spherical Well',
    tests: ['c.5.3.3', 'c.5.3.4'],
    prompt: `<p>For a particle of mass $m$ confined in an infinite spherical well of radius $a$:
$$V(r) = \\begin{cases} 0 & r \\le a \\\\ \\infty & r > a \\end{cases}$$
<ol>
  <li>Find the normalized ground state wave function $\\psi_{100}(r,\\theta,\\phi)$.</li>
  <li>Calculate the ground state energy $E_{1,0}$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Radial Wavefunction and Normalization.</b><br>
For $l=0$, the modified radial equation is $-\\frac{\\hbar^2}{2m}\\frac{d^2 u}{dr^2} = E u$, with solution:
$$u(r) = C \\sin(kr) + D \\cos(kr)$$
The boundary condition at the origin requires $u(0) = 0 \\implies D = 0$.<br>
The boundary condition at the wall requires $u(a) = 0 \\implies \\sin(ka) = 0 \\implies ka = n\\pi$.<br>
For the ground state ($n=1$): $k = \\pi / a$.<br>
Thus $R(r) = \\frac{u(r)}{r} = C \\frac{\\sin(\\pi r / a)}{r}$.<br>
Normalize $u(r)$ on $[0, a]$:
$$\\int_0^a |u(r)|^2 dr = C^2 \\int_0^a \\sin^2\\left(\\frac{\\pi r}{a}\\right) dr = C^2 \\frac{a}{2} = 1 \\implies C = \\sqrt{\\frac{2}{a}}$$
Including the isotropic angular factor $Y_0^0 = \\frac{1}{\\sqrt{4\\pi}}$:
$$\\psi_{100}(r) = R(r)Y_0^0 = \\sqrt{\\frac{2}{a}}\\frac{\\sin(\\pi r/a)}{r} \\frac{1}{\\sqrt{4\\pi}} = \\boxed{\\frac{1}{\\sqrt{2\\pi a}} \\frac{\\sin(\\pi r/a)}{r}}$$
<b>Part 2: Ground State Energy.</b><br>
$$E_{1,0} = \\frac{\\hbar^2 k^2}{2m} = \\boxed{\\frac{\\pi^2 \\hbar^2}{2m a^2}}$$</p>`,
    tested: 'Infinite spherical well ground state solution and normalization in 3D.',
    trap: 'Forgetting the 1/√(4π) factor when writing the full 3D wavefunction ψ(r, θ, φ).'
  },
  {
    id: 'w.5.3.2', sec: '5.3', marks: 5,
    title: 'First Excited State of the Infinite Spherical Well (l = 1)',
    tests: ['c.5.3.3'],
    prompt: `<p>For $l=1$ in an infinite spherical well of radius $a$, the radial function is proportional to $j_1(kr) = \\frac{\\sin(kr)}{(kr)^2} - \\frac{\\cos(kr)}{kr}$.
<ol>
  <li>Derive the transcendental equation for the allowed wave numbers $k$.</li>
  <li>Given that the smallest positive root of this equation is $x_1 \\approx 4.4934$, express the energy of the $l=1$ state in terms of the ground state energy $E_{1,0}$. What is the degeneracy of this state?</li>
</ol></p>`,
    solution: `<p><b>Part 1: Transcendental Equation.</b><br>
The boundary condition at $r=a$ is $j_1(ka) = 0$:
$$\\frac{\\sin(ka)}{(ka)^2} - \\frac{\\cos(ka)}{ka} = 0$$
Multiply by $(ka)^2$:
$$\\sin(ka) - ka\\cos(ka) = 0 \\implies \\boxed{\\tan(ka) = ka}$$
<b>Part 2: Energy and Degeneracy.</b><br>
With $ka = \\beta_{1,1} \\approx 4.4934$:
$$E_{1,1} = \\frac{\\hbar^2 \\beta_{1,1}^2}{2m a^2} = \\frac{\\hbar^2 (4.4934)^2}{2m a^2} \\approx 20.19 \\frac{\\hbar^2}{2ma^2}$$
Since the ground state energy is $E_{1,0} = \\pi^2 \\frac{\\hbar^2}{2ma^2} \\approx 9.87 \\frac{\\hbar^2}{2ma^2}$:
$$\\frac{E_{1,1}}{E_{1,0}} = \\frac{(4.4934)^2}{\\pi^2} \\approx \\frac{20.19}{9.87} \\approx \\boxed{2.046}$$
The state has orbital angular momentum $l=1$, so the magnetic quantum number takes values $m = -1, 0, +1$.<br>
Therefore, the state is $\\boxed{3\\text{-fold degenerate}}$.</p>`,
    tested: 'Spherical Bessel zeros, transcendental boundary conditions, and orbital degeneracy.',
    trap: 'Thinking the first excited state must have l=0 (n=2), whereas β_1,1 ≈ 4.49 is lower in energy than β_2,0 = 2π ≈ 6.28!'
  },
  {
    id: 'w.5.4.1', sec: '5.4', marks: 5,
    title: 'Normalization of the Hydrogen Ground State Wavefunction',
    tests: ['c.5.4.5', 'c.5.4.6'],
    prompt: `<p>The unnormalized spatial wavefunction for the ground state ($1s$) of hydrogen is:
$$\\psi(r) = A e^{-r/a_0}$$
where $a_0$ is the Bohr radius. Determine the normalization constant $A$ by integrating over all 3D space.</p>`,
    solution: `<p><b>Step 1: Set up the 3D Normalization Integral.</b><br>
Because $\\psi$ is spherically symmetric (independent of $\\theta, \\phi$), the angular integral yields $\\int d\\Omega = 4\\pi$:
$$\\int |\\psi|^2 d^3\\mathbf{r} = |A|^2 \\int_0^\\infty e^{-2r/a_0} \\left( 4\\pi r^2 dr \\right) = 4\\pi |A|^2 \\int_0^\\infty r^2 e^{-2r/a_0} dr$$
<b>Step 2: Evaluate the Radial Integral.</b><br>
Using the standard Gamma function integral $\\int_0^\\infty r^n e^{-\\alpha r} dr = \\frac{n!}{\\alpha^{n+1}}$ with $n=2$ and $\\alpha = 2/a_0$:
$$\\int_0^\\infty r^2 e^{-2r/a_0} dr = \\frac{2!}{(2/a_0)^3} = \\frac{2}{8/a_0^3} = \\frac{a_0^3}{4}$$
<b>Step 3: Solve for $A$.</b><br>
$$4\\pi |A|^2 \\left( \\frac{a_0^3}{4} \\right) = 1 \\implies \\pi a_0^3 |A|^2 = 1 \\implies \\boxed{A = \\frac{1}{\\sqrt{\\pi a_0^3}}}$$</p>`,
    tested: '3D volume integration and normalization for spherically symmetric exponential wavefunctions.',
    trap: 'Omitting the 4π r² Jacobian from the 3D volume element.'
  },
  {
    id: 'w.5.4.2', sec: '5.4', marks: 5,
    title: 'Most Probable Radius vs Mean Radius in Hydrogen 1s',
    tests: ['c.5.4.6'],
    prompt: `<p>For an electron in the ground state of hydrogen with normalized wavefunction $\\psi_{100} = \\frac{1}{\\sqrt{\\pi a_0^3}}e^{-r/a_0}$:
<ol>
  <li>Find the most probable radial distance $r_{\\text{mp}}$ of the electron from the nucleus.</li>
  <li>Calculate the expectation value of the distance $\\langle r \\rangle$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Most Probable Distance $r_{\\text{mp}}$.</b><br>
The radial probability density is $P(r) = r^2 |R_{10}(r)|^2 = \\frac{4}{a_0^3} r^2 e^{-2r/a_0}$.<br>
To find the maximum, take the derivative and set it to zero:
$$\\frac{dP}{dr} = \\frac{4}{a_0^3} \\left[ 2r e^{-2r/a_0} - \\frac{2r^2}{a_0} e^{-2r/a_0} \\right] = \\frac{8r}{a_0^3} \\left( 1 - \\frac{r}{a_0} \\right) e^{-2r/a_0} = 0$$
For $r > 0$, the maximum occurs at:
$$\\boxed{r_{\\text{mp}} = a_0}$$
<b>Part 2: Expectation Value $\\langle r \\rangle$.</b><br>
$$\\langle r \\rangle = \\int_0^\\infty r P(r) dr = \\frac{4}{a_0^3} \\int_0^\\infty r^3 e^{-2r/a_0} dr$$
Using $\\int_0^\\infty r^3 e^{-\\alpha r} dr = \\frac{3!}{\\alpha^4} = \\frac{6}{(2/a_0)^4} = \\frac{6 a_0^4}{16} = \\frac{3}{8}a_0^4$:
$$\\langle r \\rangle = \\frac{4}{a_0^3} \\left( \\frac{3}{8}a_0^4 \\right) = \\boxed{\\frac{3}{2} a_0 = 1.5 \\, a_0}$$
<b>Comparison:</b> $\\langle r \\rangle > r_{\\text{mp}}$ because the probability distribution has a long exponential tail toward large $r$.</p>`,
    tested: 'Calculation of mode (most probable radius) and mean for the radial probability distribution.',
    trap: 'Maximizing ψ(r) instead of P(r) = r²|R(r)|². ψ(r) is maximum at r = 0, but P(r) is maximum at r = a₀!'
  },
  {
    id: 'w.5.4.3', sec: '5.4', marks: 5,
    title: 'Verification of the Quantum Virial Theorem for Hydrogen 1s',
    tests: ['c.5.4.6'],
    prompt: `<p>For the ground state of hydrogen ($E_1 = -13.6\\text{ eV}$):
<ol>
  <li>Calculate the expectation value of the potential energy $\\langle V \\rangle = \\left\\langle -\\frac{e^2}{4\\pi\\varepsilon_0 r} \\right\\rangle$.</li>
  <li>Calculate the expectation value of the kinetic energy $\\langle T \\rangle = E_1 - \\langle V \\rangle$.</li>
  <li>Verify that the Quantum Virial Theorem $\\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle$ is satisfied.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Potential Energy Expectation Value $\\langle V \\rangle$.</b><br>
$$\\langle V \\rangle = -\\frac{e^2}{4\\pi\\varepsilon_0} \\left\\langle \\frac{1}{r} \\right\\rangle$$
Compute $\\langle 1/r \\rangle$:
$$\\left\\langle \\frac{1}{r} \\right\\rangle = \\int_0^\\infty \\frac{1}{r} P_{10}(r) dr = \\frac{4}{a_0^3} \\int_0^\\infty r e^{-2r/a_0} dr = \\frac{4}{a_0^3} \\left[ \\frac{1!}{(2/a_0)^2} \\right] = \\frac{4}{a_0^3} \\left( \\frac{a_0^2}{4} \\right) = \\frac{1}{a_0}$$
Recall that $a_0 = \\frac{4\\pi\\varepsilon_0 \\hbar^2}{\\mu e^2} \\implies \\frac{e^2}{4\\pi\\varepsilon_0 a_0} = \\frac{\\mu e^4}{(4\\pi\\varepsilon_0)^2 \\hbar^2} = 2 |E_1| = 27.2\\text{ eV}$.<br>
Therefore:
$$\\boxed{\\langle V \\rangle = -\\frac{e^2}{4\\pi\\varepsilon_0 a_0} = 2E_1 = -27.2 \\text{ eV}}$$
<b>Part 2: Kinetic Energy Expectation Value $\\langle T \\rangle$.</b><br>
Since $E_1 = \\langle H \\rangle = \\langle T \\rangle + \\langle V \\rangle$:
$$\\boxed{\\langle T \\rangle = E_1 - \\langle V \\rangle = -13.6\\text{ eV} - (-27.2\\text{ eV}) = +13.6 \\text{ eV} = -E_1}$$
<b>Part 3: Virial Theorem Check.</b><br>
$$-\\frac{1}{2}\\langle V \\rangle = -\\frac{1}{2}(-27.2\\text{ eV}) = +13.6\\text{ eV} = \\langle T \\rangle \\quad \\checkmark$$
The Virial Theorem $\\langle T \\rangle = -\\frac{1}{2}\\langle V \\rangle$ holds exactly.</p>`,
    tested: 'Quantum Virial theorem and expectation values of kinetic and potential energy.',
    trap: 'Obtaining a negative kinetic energy. Kinetic energy T = p²/(2m) is a positive-definite operator; ⟨T⟩ must always be positive!'
  },
  {
    id: 'w.5.4.4', sec: '5.4', marks: 5,
    title: 'Radial Node and Mean Radius for the Hydrogen 2s State',
    tests: ['c.5.4.5', 'c.5.4.6'],
    prompt: `<p>The radial wave function of the $2s$ state of hydrogen is:
$$R_{20}(r) = \\frac{1}{\\sqrt{2}} a_0^{-3/2} \\left( 1 - \\frac{r}{2a_0} \\right) e^{-r/2a_0}$$
<ol>
  <li>Find the location of the radial node of $R_{20}(r)$.</li>
  <li>Using the general formula $\\langle r \\rangle_{nl} = \\frac{a_0}{2}[3n^2 - l(l+1)]$, calculate the mean distance $\\langle r \\rangle$ for the $2s$ state and explain physically why it is much larger than for $1s$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Radial Node.</b><br>
A radial node occurs where $R_{20}(r) = 0$ for finite $r > 0$:
$$1 - \\frac{r}{2a_0} = 0 \\implies \\boxed{r_{\\text{node}} = 2a_0}$$
At this spherical surface of radius $2a_0$, the electron has exactly zero probability density of being found.<br>
<b>Part 2: Mean Distance $\\langle r \\rangle_{20}$.</b><br>
For $n=2, l=0$:
$$\\langle r \\rangle_{20} = \\frac{a_0}{2} \\left[ 3(2^2) - 0(1) \\right] = \\frac{a_0}{2}(12) = \\boxed{6 a_0}$$
<b>Physical Reason:</b> The energy of the $2s$ state is $E_2 = -3.4\\text{ eV}$, much less tightly bound than the $1s$ state ($E_1 = -13.6\\text{ eV}$). Because the binding energy is smaller by a factor of 4, the electron wave packet spreads out much further from the nucleus, increasing the mean orbital radius by a factor of 4 (from $1.5 a_0$ to $6 a_0$).</p>`,
    tested: 'Radial node identification and expectation values for excited hydrogen states.',
    trap: 'Confusing 2s and 2p mean radius: ⟨r⟩_20 = 6 a₀, while ⟨r⟩_21 = 5 a₀ because the centrifugal barrier suppresses the tail.'
  },
  {
    id: 'w.5.4.5', sec: '5.4', marks: 5,
    title: 'Probability of Electron Penetration Inside the Nucleus',
    tests: ['c.5.4.6'],
    prompt: `<p>Estimate the probability $P(r \\le R_p)$ of finding an electron in the ground state of hydrogen inside the proton radius $R_p \\approx 1.0 \\times 10^{-15}\\text{ m} = 1.0\\text{ fm}$. (Bohr radius $a_0 \\approx 5.3 \\times 10^{-11}\\text{ m}$).</p>`,
    solution: `<p><b>Step 1: Set up the Probability Integral.</b><br>
$$P(r \\le R_p) = \\int_0^{R_p} P_{10}(r) dr = \\frac{4}{a_0^3} \\int_0^{R_p} r^2 e^{-2r/a_0} dr$$
<b>Step 2: Approximate for $R_p \\ll a_0$.</b><br>
Since $R_p / a_0 \\approx \\frac{10^{-15}}{5.3 \\times 10^{-11}} \\approx 1.9 \\times 10^{-5} \\ll 1$, the exponential term is essentially 1 throughout the nucleus:
$$e^{-2r/a_0} \\approx 1$$
Therefore:
$$P(r \\le R_p) \\approx \\frac{4}{a_0^3} \\int_0^{R_p} r^2 dr = \\frac{4}{a_0^3} \\left( \\frac{R_p^3}{3} \\right) = \\frac{4}{3} \\left( \\frac{R_p}{a_0} \\right)^3$$
<b>Step 3: Numerical Calculation.</b><br>
$$P(r \\le R_p) \\approx \\frac{4}{3} (1.887 \\times 10^{-5})^3 \\approx \\frac{4}{3} (6.72 \\times 10^{-15}) \\approx \\boxed{8.96 \\times 10^{-15}}$$
<b>Physical Meaning:</b> The electron spends only about 1 part in $10^{14}$ of its time inside the proton. However, this tiny overlap is responsible for the Fermi contact interaction in atomic hyperfine splitting!</p>`,
    tested: 'Nuclear penetration probability calculation and Taylor approximation for r ≪ a₀.',
    trap: 'Carrying out integration by parts when a simple lowest-order Taylor expansion gives the exact leading-order answer.'
  }
);

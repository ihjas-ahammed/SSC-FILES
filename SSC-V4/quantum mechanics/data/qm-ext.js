/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics · Supplementary Textbook Extension Modules (qm_ext)
   Reference Textbooks: David J. Griffiths 3e & Nouredine Zettili 2e
   Covers:
     - X1.1, X1.2: Identical Particles, Permutation Symmetry, Exchange & Helium
     - X2.1, X2.2: Continuous & Discrete Symmetries, Parity & Time Reversal
     - X3.1, X3.2: Time-Dependent Perturbation Theory, Rabi & Berry's Phase
     - X4.1, X4.2: EPR Paradox, Bell's Theorem, Entanglement & Density Matrix
     - X5.1, X5.2: Relativistic QM: Klein-Gordon & Dirac Equations
   NOTE: Tagged with OUT OF SYLLABUS and excluded from course progress tracking.
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }
if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }
if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

CONCEPTS.push(
  /* ══════════════════════════════════════════════════════════════════════════
     MODULE EXT 1: IDENTICAL PARTICLES & PERMUTATION SYMMETRY
     ══════════════════════════════════════════════════════════════════════════ */

  /* ── X1.1 Identical Particles & Permutation Symmetry ───────────────────── */
  {
    id: 'c.x1.1.1', sec: 'X1.1', kind: 'law', tier: 'core',
    title: 'Permutation Symmetry & The Spin-Statistics Theorem',
    oneLine: 'Identical quantum particles are indistinguishable; exchanging two particles produces a phase factor of +1 for integer-spin bosons and -1 for half-integer-spin fermions.',
    statement: `In classical mechanics, identical particles can be tracked along distinct deterministic trajectories. In quantum mechanics, the uncertainty principle makes identical particles fundamentally <b>indistinguishable</b>.<br>
Let $P_{12}$ be the <b>exchange (permutation) operator</b>:
$$P_{12} \\psi(\\mathbf{r}_1, s_1; \\mathbf{r}_2, s_2) = \\psi(\\mathbf{r}_2, s_2; \\mathbf{r}_1, s_1)$$
Since $P_{12}^2 = I$, the eigenvalues of $P_{12}$ are strictly $\\pm 1$.<br>
<b>The Symmetrization Postulate (Spin-Statistics Theorem):</b>
<ul>
  <li><b>Bosons (Integer Spin: $s = 0, 1, 2, \\dots$):</b> States are strictly <b>symmetric</b> under particle exchange:
  $$\\boxed{P_{12} \\psi = +\\psi}$$
  Bosons obey <b>Bose–Einstein statistics</b> and can occupy the same quantum state collectively (Bose–Einstein condensation, photons, gluons, $^4\\text{He}$).</li>
  <li><b>Fermions (Half-Integer Spin: $s = 1/2, 3/2, 5/2, \\dots$):</b> States are strictly <b>antisymmetric</b> under particle exchange:
  $$\\boxed{P_{12} \\psi = -\\psi}$$
  Fermions obey <b>Fermi–Dirac statistics</b> and the <b>Pauli Exclusion Principle</b> (electrons, protons, neutrons, quarks).</li>
</ul>`,
    intuition: `If two identical fermions were placed into the EXACT same one-particle quantum state $\\psi_a$, then the combined two-particle state would satisfy $\\psi(1, 2) = -\\psi(2, 1) = -\\psi(1, 2) \\implies 2\\psi = 0 \\implies \\psi \\equiv 0$. The probability of two fermions occupying the identical quantum state is rigorously zero! That is why matter does not collapse into a single point.`,
    needs: ['c.1.2.1', 'c.6.4.1'],
    traps: [
      `Thinking indistinguishability is an experimental limitation of detectors. It is a fundamental ontological property of nature: there is no label, trajectory, or hidden marker distinguishing one electron from another.`,
      `Confusing total wavefunction symmetry with spatial wavefunction symmetry. It is the TOTAL state (space $\\otimes$ spin) that must be antisymmetric for fermions.`
    ],
    cards: [
      { q: 'State the spin-statistics theorem for bosons and fermions.', a: 'Particles with integer spin are bosons with symmetric states under exchange ($P_{12}\\psi = +\\psi$); particles with half-integer spin are fermions with antisymmetric states ($P_{12}\\psi = -\\psi$).', kind: 'state' },
      { q: 'What are the allowed eigenvalues of the two-particle exchange operator P_{12}?', a: '$\\pm 1$, because $P_{12}^2 = I$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x1.1.2', sec: 'X1.1', kind: 'method', tier: 'core',
    title: 'Slater Determinants for N-Fermion Systems',
    oneLine: 'The total antisymmetric wavefunction of N non-interacting identical fermions is constructed as a Slater determinant of single-particle orbitals.',
    statement: `For a system of $N$ non-interacting identical fermions occupying single-particle spin-orbitals $\\phi_{\\alpha_1}, \\phi_{\\alpha_2}, \\dots, \\phi_{\\alpha_N}$, the normalized totally antisymmetric wavefunction is the <b>Slater determinant</b>:
$$\\boxed{\\Psi(1, 2, \\dots, N) = \\frac{1}{\\sqrt{N!}} \\begin{pmatrix}
\\phi_{\\alpha_1}(1) & \\phi_{\\alpha_2}(1) & \\cdots & \\phi_{\\alpha_N}(1) \\\\
\\phi_{\\alpha_1}(2) & \\phi_{\\alpha_2}(2) & \\cdots & \\phi_{\\alpha_N}(2) \\\\
\\vdots & \\vdots & \\ddots & \\vdots \\\\
\\phi_{\\alpha_1}(N) & \\phi_{\\alpha_2}(N) & \\cdots & \\phi_{\\alpha_N}(N)
\\end{pmatrix}}$$
where each argument $(j) \\equiv (\\mathbf{r}_j, s_j)$ specifies spatial and spin coordinates of the $j$-th particle.<br>
<b>Mathematical Properties:</b>
<ol>
  <li><b>Exchange of two particles:</b> Interchanging particles $i$ and $j$ corresponds to swapping row $i$ and row $j$ of the matrix, multiplying the determinant by $-1$ (antisymmetry).</li>
  <li><b>Pauli Principle:</b> If any two quantum state labels are identical ($\\alpha_j = \\alpha_k$), the matrix has two identical columns, causing the determinant to vanish identically: $\\Psi \\equiv 0$.</li>
</ol>`,
    intuition: `A Slater determinant is the cleanest linear algebra packaging of antisymmetry. Just as a matrix determinant detects linear dependence between vectors, the Slater determinant automatically enforces that no two fermions can ever share the same set of quantum numbers.`,
    needs: ['c.x1.1.1', 'c.3.1.1'],
    traps: [
      `Forgetting the normalization factor $1/\\sqrt{N!}$. Because there are $N!$ permutations, $1/\\sqrt{N!}$ ensures $\\langle \\Psi | \\Psi \\rangle = 1$ when single-particle orbitals are orthonormal.`,
      `Applying Slater determinants to bosons. Boson states use the permanent (sum over all permutations with positive signs) rather than determinant.`
    ],
    cards: [
      { q: 'How does a Slater determinant mathematically enforce the Pauli exclusion principle?', a: 'If two fermions occupy the same single-particle orbital, two columns of the determinant become identical, making the determinant zero.', kind: 'recall' },
      { q: 'What is the normalization prefactor for a Slater determinant of N orthonormal orbitals?', a: '$\\frac{1}{\\sqrt{N!}}$.', kind: 'recall' }
    ]
  },

  /* ── X1.2 Two-Electron Systems, Exchange Force & Helium ────────────────── */
  {
    id: 'c.x1.2.1', sec: 'X1.2', kind: 'theorem', tier: 'core',
    title: 'Two-Electron Systems: Singlet, Triplet & The Exchange Force',
    oneLine: 'Total antisymmetry couples spatial overlap to spin configuration: spin singlets have symmetric spatial states (particles cluster), while spin triplets have antisymmetric spatial states (exchange repulsion).',
    statement: `For two electrons (spin $s = 1/2$), the total state factors into a spatial part and a spin part:
$$\\Psi(1, 2) = \\psi(\\mathbf{r}_1, \\mathbf{r}_2) \\chi(s_1, s_2)$$
Because the total state must be antisymmetric ($P_{12} \\Psi = -\\Psi$), there are two allowed combinations:
<ol>
  <li><b>Singlet State ($S = 0, M_S = 0$): Antisymmetric Spin $\\implies$ Symmetric Space:</b>
  $$\\chi_{\\text{singlet}} = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle) \\quad \\implies \\quad \\psi_+(\\mathbf{r}_1, \\mathbf{r}_2) = \\frac{1}{\\sqrt{2}}\\left[ \\psi_a(\\mathbf{r}_1)\\psi_b(\\mathbf{r}_2) + \\psi_b(\\mathbf{r}_1)\\psi_a(\\mathbf{r}_2) \\right]$$</li>
  <li><b>Triplet State ($S = 1, M_S = +1, 0, -1$): Symmetric Spin $\\implies$ Antisymmetric Space:</b>
  $$\\chi_{\\text{triplet}} \\in \\left\\{ |\\!\\uparrow\\uparrow\\rangle, \\, \\frac{|\\!\\uparrow\\downarrow\\rangle + |\\!\\downarrow\\uparrow\\rangle}{\\sqrt{2}}, \\, |\\!\\downarrow\\downarrow\\rangle \\right\\} \\implies \\psi_-(\\mathbf{r}_1, \\mathbf{r}_2) = \\frac{1}{\\sqrt{2}}\\left[ \\psi_a(\\mathbf{r}_1)\\psi_b(\\mathbf{r}_2) - \\psi_b(\\mathbf{r}_1)\\psi_a(\\mathbf{r}_2) \\right]$$</li>
</ol>
<b>The Exchange Hole & Mean Separation:</b>
$$\\langle (\\mathbf{r}_1 - \\mathbf{r}_2)^2 \\rangle_{\\pm} = \\langle r^2 \\rangle_a + \\langle r^2 \\rangle_b - 2\\langle \\mathbf{r} \\rangle_a \\cdot \\langle \\mathbf{r} \\rangle_b \\mp 2|\\langle \\mathbf{r} \\rangle_{ab}|^2$$
Electrons in the triplet state ($\\psi_-$) stay farther apart than in the singlet state ($\\psi_+$). This geometric correlation is called the <b>exchange force</b>.`,
    intuition: `Is the exchange force a new fundamental force of nature like gravity or electromagnetism? NO! It is a purely quantum-mechanical geometric consequence of the antisymmetry of the wavefunction. Triplet electrons avoid each other in space because $\\psi_-(\\mathbf{r}, \\mathbf{r}) = 0$, creating an "exchange hole" around each electron.`,
    needs: ['c.6.4.1', 'c.6.5.1', 'c.x1.1.1'],
    traps: [
      `Believing that the exchange force is an electromagnetic interaction between magnetic moments. The magnetic dipole energy is typically $\\sim 10^{-4}\\text{ eV}$, whereas exchange energy is electrostatic in origin and on the scale of several electron-volts!`,
      `Associating triplet with antisymmetric spin. Triplet ($S=1$) has 3 symmetric spin states; singlet ($S=0$) has 1 antisymmetric spin state.`
    ],
    cards: [
      { q: 'Why do two electrons in a spin triplet state have a lower Coulomb repulsion energy than in a singlet state?', a: 'Because the spin triplet has an antisymmetric spatial wave function with $\\psi_-(\\mathbf{r},\\mathbf{r}) = 0$, keeping electrons on average further apart (exchange hole).', kind: 'recall' },
      { q: 'For two electrons, which spin configuration corresponds to S = 0?', a: 'The singlet state $\\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)$, which is antisymmetric under exchange.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x1.2.2', sec: 'X1.2', kind: 'derivation', tier: 'core',
    title: 'The Helium Atom: Ground State & Parahelium vs Orthohelium',
    oneLine: 'Helium ground state is a spin singlet (parahelium) with E ≈ -79.0 eV; excited states split into parahelium (singlet) and orthohelium (triplet) via the exchange integral K.',
    statement: `The exact non-relativistic Hamiltonian for the helium atom ($Z = 2$) is:
$$H = -\\frac{\\hbar^2}{2m}(\\nabla_1^2 + \\nabla_2^2) - \\frac{2e^2}{4\\pi\\varepsilon_0 r_1} - \\frac{2e^2}{4\\pi\\varepsilon_0 r_2} + \\frac{e^2}{4\\pi\\varepsilon_0 |\\mathbf{r}_1 - \\mathbf{r}_2|}$$
<ol>
  <li><b>Ground State ($1s^2$):</b>
  Both electrons occupy the $1s$ orbital ($n=1, \\ell=0, m=0$). By the Pauli principle, their spins must be antiparallel in the <b>singlet state ($S = 0$)</b>:
  $$\\Psi_0(\\mathbf{r}_1, \\mathbf{r}_2) = \\psi_{100}(\\mathbf{r}_1)\\psi_{100}(\\mathbf{r}_2) \\chi_{\\text{singlet}}$$
  - Zero-order energy (ignoring $e-e$ repulsion): $E^{(0)} = 2 \\times (-13.6 \\times 2^2) = -108.8\\text{ eV}$.<br>
  - First-order perturbation correction: $\\Delta E^{(1)} = \\langle \\Psi_0 | \\frac{e^2}{4\\pi\\varepsilon_0 r_{12}} | \\Psi_0 \\rangle = +\\frac{5}{4}Z E_1 = +34.0\\text{ eV} \\implies E \\approx -74.8\\text{ eV}$.<br>
  - Variational treatment with effective nuclear charge $Z_{\\text{eff}} = Z - 5/16 = 1.6875$:
  $$E_{\\text{var}} = -2\\left(Z - \\frac{5}{16}\\right)^2 (13.6\\text{ eV}) = -77.5\\text{ eV} \\quad (\\text{Exp: } -79.0\\text{ eV}).$$</li>
  <li><b>Excited States ($1s 2s$ or $1s 2p$):</b>
  The states split into two distinct spectroscopic terms:
  <ul>
    <li><b>Parahelium ($S = 0$, singlet):</b> Spatial wavefunction symmetric, $E = E_0 + J + K$.</li>
    <li><b>Orthohelium ($S = 1$, triplet):</b> Spatial wavefunction antisymmetric, $E = E_0 + J - K$.</li>
  </ul>
  where $J = \\int |\\psi_a(1)|^2 |\\psi_b(2)|^2 \\frac{e^2}{4\\pi\\varepsilon_0 r_{12}} d\\tau$ is the <b>direct Coulomb integral</b> and $K = \\int \\psi_a^*(1)\\psi_b^*(2) \\frac{e^2}{4\\pi\\varepsilon_0 r_{12}} \\psi_b(1)\\psi_a(2) d\\tau > 0$ is the <b>exchange integral</b>.</li>
</ol>`,
    intuition: `Because $K > 0$, orthohelium ($S=1$) always lies LOWER in energy than the corresponding parahelium ($S=0$) state! This explains Hund's first rule in atomic physics: electrons in degenerate or open subshells maximize total spin $S$ to minimize electrostatic electron-electron repulsion.`,
    needs: ['c.5.4.1', 'c.7.1.1', 'c.7.3.1', 'c.x1.2.1'],
    traps: [
      `Confusing parahelium and orthohelium. Parahelium = singlet ($S=0$, antiparallel spins); Orthohelium = triplet ($S=1$, parallel spins).`,
      `Thinking transitions between orthohelium and parahelium occur rapidly by dipole radiation. Because dipole radiation cannot flip electron spin ($\\Delta S = 0$), transitions between ortho- and para-helium are forbidden, making orthohelium states metastable.`
    ],
    cards: [
      { q: 'Which excited state of Helium lies lower in energy: the spin singlet (parahelium) or the spin triplet (orthohelium)?', a: 'The spin triplet (orthohelium), because the exchange integral $K > 0$ lowers its energy by $2K$ relative to the singlet ($E = E_0 + J - K$).', kind: 'recall' },
      { q: 'What is the optimal effective nuclear charge Z_eff in the variational calculation of the helium ground state?', a: '$Z_{\\text{eff}} = 2 - \\frac{5}{16} = \\frac{27}{16} \\approx 1.6875$.', kind: 'recall' }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     MODULE EXT 2: SYMMETRIES & CONSERVATION LAWS
     ══════════════════════════════════════════════════════════════════════════ */

  /* ── X2.1 Continuous Symmetries & Noether's Theorem ────────────────────── */
  {
    id: 'c.x2.1.1', sec: 'X2.1', kind: 'theorem', tier: 'core',
    title: 'Continuous Symmetries & Noether\'s Theorem in Quantum Mechanics',
    oneLine: 'Every continuous symmetry of the Hamiltonian corresponds to a conserved Hermitian generator, meaning [G, H] = 0 implies d⟨G⟩/dt = 0.',
    statement: `A symmetry transformation in quantum mechanics is represented by a unitary operator $U = e^{-i \\epsilon G / \\hbar}$, where $G$ is a Hermitian operator called the <b>infinitesimal generator</b>.<br>
Under this transformation, states transform as $|\\psi'\\rangle = U |\\psi\\rangle$ and observables transform as $A' = U A U^\\dagger$.<br>
<b>Definition of Symmetry:</b><br>
The Hamiltonian $H$ is symmetric (invariant) under $U$ if:
$$U H U^\\dagger = H \\quad \\iff \\quad [U, H] = 0$$
For an infinitesimal transformation $\\epsilon \\to 0$, $U \\approx I - \\frac{i\\epsilon}{\\hbar} G$:
$$[I - \\frac{i\\epsilon}{\\hbar}G, H] = 0 \\quad \\implies \\quad \\boxed{[G, H] = 0}$$
<b>Quantum Noether\'s Theorem:</b><br>
By the Ehrenfest/Heisenberg equation of motion:
$$\\frac{d\\langle G \\rangle}{dt} = \\frac{i}{\\hbar}\\langle [H, G] \\rangle + \\left\\langle \\frac{\\partial G}{\\partial t} \\right\\rangle = 0$$
If the Hamiltonian is invariant under a continuous symmetry generated by $G$, then the observable $G$ is a <b>constant of motion</b>.`,
    intuition: `In classical mechanics, Noether's theorem states that continuous symmetries imply conservation laws. In quantum mechanics, this connection is even more elegant: the symmetry operator and the Hamiltonian commute! Commuting operators share simultaneous eigenstates, so a state prepared in an eigenstate of $G$ remains an eigenstate of $G$ for all time with unchanged eigenvalue.`,
    needs: ['c.3.2.1', 'c.3.3.1', 'c.3.5.1'],
    traps: [
      `Confusing the generator $G$ with the unitary transformation operator $U$. $G$ is Hermitian ($G = G^\\dagger$) representing a physical observable; $U = e^{-i\\epsilon G/\\hbar}$ is unitary ($U^\\dagger U = I$) representing the finite transformation.`,
      `Assuming discrete symmetries (like parity or time reversal) possess continuous Lie algebra generators. Discrete symmetries do not have infinitesimal generators.`
    ],
    cards: [
      { q: 'State Quantum Noether\'s theorem.', a: 'If a Hamiltonian is invariant under a continuous symmetry generated by Hermitian operator $G$, then $[G, H] = 0$ and $G$ is a conserved observable ($d\\langle G \\rangle/dt = 0$).', kind: 'state' },
      { q: 'What is the generator of time translation symmetry?', a: 'The Hamiltonian $H$ itself: $U(t) = e^{-iHt/\\hbar}$, leading to conservation of energy.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x2.1.2', sec: 'X2.1', kind: 'law', tier: 'core',
    title: 'Spatial Translations, Rotations & Conservation Laws',
    oneLine: 'Linear momentum P generates spatial translations; angular momentum J generates rotations; spatial homogeneity implies conservation of momentum, and isotropy implies conservation of angular momentum.',
    statement: `<b>1. Spatial Translations:</b><br>
A displacement of the coordinate system by vector $\\mathbf{a}$ transforms $\\psi(\\mathbf{r}) \\to \\psi(\\mathbf{r} - \\mathbf{a})$.<br>
Expanding to first order: $\\psi(\\mathbf{r} - \\mathbf{a}) = \\psi(\\mathbf{r}) - \\mathbf{a} \\cdot \\nabla \\psi = \\left( I - \\frac{i}{\\hbar}\\mathbf{a} \\cdot \\mathbf{P} \\right)\\psi(\\mathbf{r})$.<br>
Thus, the <b>finite translation operator</b> is:
$$\\boxed{T(\\mathbf{a}) = \\exp\\left( -\\frac{i}{\\hbar} \\mathbf{a} \\cdot \\mathbf{P} \\right)}$$
- If space is homogeneous ($[T(\\mathbf{a}), H] = 0$), then $[\\mathbf{P}, H] = 0 \\implies$ <b>linear momentum is conserved</b>.<br><br>
<b>2. Spatial Rotations:</b><br>
A rotation by angle $\\theta$ about unit axis $\\hat{n}$ transforms the state via the unitary operator:
$$\\boxed{R_{\\hat{n}}(\\theta) = \\exp\\left( -\\frac{i}{\\hbar} \\theta \\, \\hat{n} \\cdot \\mathbf{J} \\right)}$$
where $\\mathbf{J} = \\mathbf{L} + \\mathbf{S}$ is the total angular momentum operator.<br>
- If space is isotropic ($[R_{\\hat{n}}(\\theta), H] = 0$), then $[\\mathbf{J}, H] = 0 \\implies$ <b>total angular momentum is conserved</b>.<br>
- For central potentials $V(r)$, rotational invariance guarantees that $[L^2, H] = 0$ and $[L_z, H] = 0$.`,
    intuition: `Why do momentum and angular momentum appear as differential operators in wave mechanics? Because $-i\\hbar \\nabla$ and $-i\\hbar(\\mathbf{r} \\times \\nabla)$ are literally the infinitesimal generators of translations and rotations in 3D Euclidean space! The algebraic structure of quantum mechanics reflects the geometric symmetries of spacetime.`,
    needs: ['c.1.5.1', 'c.6.1.1', 'c.x2.1.1'],
    traps: [
      `Sign error in translation exponent: $T(\\mathbf{a}) = \\exp(-i \\mathbf{a}\\cdot\\mathbf{P}/\\hbar)$ produces $\\psi(\\mathbf{r} - \\mathbf{a})$ (passive translation of coordinate axes).`,
      `Assuming orbital angular momentum $\\mathbf{L}$ is conserved alone in spin-orbit coupled systems. When $H_{\\text{SO}} \\propto \\mathbf{L} \\cdot \\mathbf{S}$ is present, neither $\\mathbf{L}$ nor $\\mathbf{S}$ commute with $H$; only total angular momentum $\\mathbf{J} = \\mathbf{L} + \\mathbf{S}$ is conserved.`
    ],
    cards: [
      { q: 'Write the operator for a finite spatial translation by vector a in terms of momentum P.', a: '$T(\\mathbf{a}) = \\exp\\left(-\\frac{i}{\\hbar}\\mathbf{a}\\cdot\\mathbf{P}\\right)$.', kind: 'recall' },
      { q: 'Which symmetry of space gives rise to the conservation of angular momentum?', a: 'Isotropy of space (invariance under spatial rotations).', kind: 'recall' }
    ]
  },

  /* ── X2.2 Discrete Symmetries: Parity & Time Reversal ──────────────────── */
  {
    id: 'c.x2.2.1', sec: 'X2.2', kind: 'law', tier: 'core',
    title: 'The Parity Operator & Laporte\'s Selection Rule',
    oneLine: 'The parity operator Π reflects coordinates (r → -r) with eigenvalues ±1; if [Π, H] = 0, eigenstates have definite parity and electric dipole transitions only connect opposite parity states.',
    statement: `The <b>parity (spatial inversion) operator</b> $\\Pi$ reflects all spatial coordinates through the origin:
$$\\Pi \\psi(\\mathbf{r}) = \\psi(-\\mathbf{r})$$
Applying $\\Pi$ twice returns the original state: $\\Pi^2 = I \\implies$ eigenvalues are strictly:
$$\\boxed{\\pi = +1 \\quad (\\text{even parity}), \\qquad \\pi = -1 \\quad (\\text{odd parity})}$$
<b>Transformation of Fundamental Observables:</b>
<ul>
  <li>Position (polar vector): $\\Pi \\mathbf{r} \\Pi^\\dagger = -\\mathbf{r}$</li>
  <li>Linear momentum (polar vector): $\\Pi \\mathbf{p} \\Pi^\\dagger = -\\mathbf{p}$</li>
  <li>Orbital angular momentum (axial/pseudovector): $\\Pi \\mathbf{L} \\Pi^\\dagger = \\Pi (\\mathbf{r} \\times \\mathbf{p}) \\Pi^\\dagger = (-\\mathbf{r}) \\times (-\\mathbf{p}) = +\\mathbf{L}$</li>
</ul>
<b>Spherical Harmonics:</b>
$$\\Pi Y_{\\ell m}(\\theta, \\phi) = (-1)^\\ell Y_{\\ell m}(\\theta, \\phi)$$
<b>Laporte\'s Selection Rule:</b><br>
For an electric dipole operator $\\mathbf{d} = q\\mathbf{r}$ (odd under parity, $\\Pi \\mathbf{r} \\Pi = -\\mathbf{r}$):
$$\\langle \\psi_f | \\mathbf{r} | \\psi_i \\rangle = \\langle \\psi_f | \\Pi^\\dagger \\Pi \\mathbf{r} \\Pi^\\dagger \\Pi | \\psi_i \\rangle = \\pi_f \\pi_i (-1) \\langle \\psi_f | \\mathbf{r} | \\psi_i \\rangle$$
Thus $\\langle \\psi_f | \\mathbf{r} | \\psi_i \\rangle = 0$ unless $\\pi_f \\pi_i = -1$. Electric dipole transitions can ONLY occur between states of <b>opposite parity</b> ($\\Delta \\ell = \\pm 1$).`,
    intuition: `An integral of an odd function over symmetric limits is zero! Since $\\mathbf{r}$ is odd, the integrand $\\psi_f^* \\mathbf{r} \\psi_i$ is odd if $\\psi_f$ and $\\psi_i$ have the SAME parity, forcing the dipole matrix element to vanish identically.`,
    needs: ['c.5.2.1', 'c.6.1.1'],
    traps: [
      `Assuming parity is conserved in all fundamental interactions. Parity is strictly conserved in electromagnetism and strong interactions, but is maximally violated in weak interactions (Wu experiment, 1956).`,
      `Thinking angular momentum changes sign under parity. As a cross product of two vectors, $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$ is an axial vector (pseudovector) and is EVEN under parity.`
    ],
    cards: [
      { q: 'What is the parity eigenvalue of the spherical harmonic Y_{ℓm}(θ, φ)?', a: '$\\pi = (-1)^\\ell$.', kind: 'recall' },
      { q: 'State Laporte\'s selection rule for electric dipole transitions.', a: 'Electric dipole transitions are strictly forbidden between states of the same parity; they can only occur between states of opposite parity ($\\Delta \\ell = \\pm 1$).', kind: 'state' }
    ]
  },
  {
    id: 'c.x2.2.2', sec: 'X2.2', kind: 'theorem', tier: 'core',
    title: 'Time-Reversal Symmetry & Kramers Degeneracy',
    oneLine: 'Time reversal Θ is an anti-unitary operator (Θ i = -i Θ); for half-integer spin systems, Θ² = -1, ensuring every energy level is at least doubly degenerate (Kramers degeneracy).',
    statement: `The <b>time-reversal operator</b> $\\Theta$ reverses the arrow of time ($t \\to -t$).<br>
In the Schrödinger equation $i\\hbar \\frac{\\partial \\psi}{\\partial t} = H\\psi$, replacing $t \\to -t$ requires complex conjugation to preserve the equation\'s form. Therefore, $\\Theta$ is an <b>anti-unitary operator</b>:
$$\\Theta (c_1 |\\psi_1\\rangle + c_2 |\\psi_2\\rangle) = c_1^* \\Theta |\\psi_1\\rangle + c_2^* \\Theta |\\psi_2\\rangle, \\qquad \\langle \\Theta \\psi | \\Theta \\phi \\rangle = \\langle \\phi | \\psi \\rangle = \\langle \\psi | \\phi \\rangle^*$$
<b>Transformation of Observables:</b>
$$\\Theta \\mathbf{r} \\Theta^{-1} = +\\mathbf{r}, \\qquad \\Theta \\mathbf{p} \\Theta^{-1} = -\\mathbf{p}, \\qquad \\Theta \\mathbf{S} \\Theta^{-1} = -\\mathbf{S}$$
For spin $s$, the action of $\\Theta^2$ depends on whether $s$ is integer or half-integer:
$$\\boxed{\\Theta^2 = (-1)^{2s} I = \\begin{cases} +I & \\text{for integer spin (bosons)} \\\\ -I & \\text{for half-integer spin (fermions)} \\end{cases}}$$
<b>Kramers Degeneracy Theorem:</b><br>
For any system with an odd number of half-integer spin fermions ($s = 1/2, 3/2, \\dots$) governed by a time-reversal symmetric Hamiltonian ($[\\Theta, H] = 0$):
$$\\langle \\psi | \\Theta \\psi \\rangle = \\langle \\Theta^2 \\psi | \\Theta \\psi \\rangle^* = -\\langle \\psi | \\Theta \\psi \\rangle^* = -\\langle \\Theta \\psi | \\psi \\rangle = 0$$
Hence, $|\\psi\\rangle$ and $\\Theta|\\psi\\rangle$ are mutually orthogonal states with the SAME energy. <b>Every energy level is at least doubly degenerate</b>.`,
    intuition: `Can this degeneracy be lifted by an external electrostatic field? NO! An electric field $\\mathbf{E} = -\\nabla \\Phi$ is even under time reversal, so $[\\Theta, H] = 0$ remains preserved. Only a magnetic field $\\mathbf{B}$ (which breaks time-reversal symmetry because $\\Theta \\mathbf{B} \\Theta^{-1} = -\\mathbf{B}$) can lift Kramers degeneracy.`,
    needs: ['c.6.4.1', 'c.x2.1.1'],
    traps: [
      `Assuming time reversal is unitary ($U^\\dagger U = I$). A unitary time reversal would require $\\Theta H \\Theta^{-1} = -H$, mapping positive bound-state energies into unphysical unbounded negative energies! Anti-unitarity ensures $\\Theta H \\Theta^{-1} = +H$.`,
      `Thinking Kramers degeneracy applies to integer-spin systems. For integer spin, $\\Theta^2 = +I$, so $|\\psi\\rangle$ and $\\Theta|\\psi\\rangle$ can be linearly dependent (non-degenerate).`
    ],
    cards: [
      { q: 'What is Θ² for a system of half-integer spin fermions?', a: '$\\Theta^2 = -I$.', kind: 'recall' },
      { q: 'Can an external static electric field lift Kramers degeneracy in an odd-electron system?', a: 'No, because static electric fields do not break time-reversal symmetry ($[\\Theta, H] = 0$); only a magnetic field can lift it.', kind: 'recall' }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     MODULE EXT 3: TIME-DEPENDENT PERTURBATION THEORY & DYNAMICS
     ══════════════════════════════════════════════════════════════════════════ */

  /* ── X3.1 Time-Dependent Perturbation Theory & Rabi Oscillations ───────── */
  {
    id: 'c.x3.1.1', sec: 'X3.1', kind: 'method', tier: 'core',
    title: 'Time-Dependent Perturbation Theory & Transition Amplitudes',
    oneLine: 'In time-dependent perturbation theory, transition probability from state a to state b to first order is P_{a→b}(t) = (1/ħ²)|∫₀ᵗ V_ba(t\') e^{i ω_ba t\'} dt\'|².',
    statement: `Consider a system with time-dependent Hamiltonian $H(t) = H_0 + V(t)$, where $H_0 |n\\rangle = E_n |n\\rangle$.<br>
Expanding the state in terms of unperturbed stationary states:
$$|\\Psi(t)\\rangle = \\sum_n c_n(t) e^{-i E_n t / \\hbar} |n\\rangle$$
Substituting into $i\\hbar \\frac{\\partial}{\\partial t}|\\Psi\\rangle = (H_0 + V(t))|\\Psi\\rangle$ yields the exact set of coupled differential equations:
$$i\\hbar \\dot{c}_b(t) = \\sum_n \\langle b | V(t) | n \\rangle e^{i \\omega_{bn} t} c_n(t), \\qquad \\omega_{bn} \\equiv \\frac{E_b - E_n}{\\hbar}$$
<b>First-Order Perturbation Approximation:</b><br>
If the system starts at $t = 0$ in initial state $|a\\rangle$ ($c_a(0) = 1, c_{n \\ne a}(0) = 0$), then to first order:
$$\\boxed{c_b^{(1)}(t) = -\\frac{i}{\\hbar} \\int_0^t \\langle b | V(t') | a \\rangle e^{i \\omega_{ba} t'} \\, dt'}$$
The <b>transition probability</b> $P_{a \\to b}(t)$ is:
$$\\boxed{P_{a \\to b}(t) = |c_b^{(1)}(t)|^2 = \\frac{1}{\\hbar^2} \\left| \\int_0^t V_{ba}(t') e^{i\\omega_{ba} t'} dt' \\right|^2}$$`,
    intuition: `Notice the mathematical structure of the transition amplitude: it is simply the Fourier transform of the time-dependent perturbation matrix element $V_{ba}(t)$ evaluated at the Bohr transition frequency $\\omega_{ba} = (E_b - E_a)/\\hbar$! If the perturbation contains a frequency component matching $\\omega_{ba}$, resonance occurs and the transition probability peaks.`,
    needs: ['c.1.1.1', 'c.7.1.1'],
    traps: [
      `Forgetting the phase factor $e^{i\\omega_{ba}t'}$. Without this Bohr frequency oscillation, you would be ignoring energy differences between states.`,
      `Using first-order perturbation theory when transition probability approaches 1. When $P_{a \\to b} \\sim 1$, higher-order terms or exact non-perturbative dynamics (like Rabi flopping) must be used.`
    ],
    cards: [
      { q: 'State the first-order transition amplitude c_b^{(1)}(t) from initial state a to state b.', a: '$c_b^{(1)}(t) = -\\frac{i}{\\hbar}\\int_0^t V_{ba}(t\') e^{i\\omega_{ba}t\'} dt\'$, where $\\omega_{ba} = (E_b - E_a)/\\hbar$.', kind: 'state' },
      { q: 'What is the Bohr transition frequency between states with energies E_b and E_a?', a: '$\\omega_{ba} = \\frac{E_b - E_a}{\\hbar}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x3.1.2', sec: 'X3.1', kind: 'law', tier: 'core',
    title: 'Two-Level Systems & Rabi Oscillations',
    oneLine: 'A two-level system driven by a periodic resonant field undergoes coherent sinusoidal population oscillations with Rabi frequency Ω_R = √(Δ² + Ω₀²).',
    statement: `Consider a two-level system $\{|1\\rangle, |2\\rangle\}$ with energy difference $\\hbar \\omega_0 = E_2 - E_1$ driven by a periodic coupling:
$$V(t) = \\begin{pmatrix} 0 & \\hbar \\Omega_0 \\cos(\\omega t) \\\\ \\hbar \\Omega_0 \\cos(\\omega t) & 0 \\end{pmatrix}$$
Under the <b>Rotating Wave Approximation (RWA)</b> (neglecting rapidly counter-rotating terms $e^{\\pm i(\\omega + \\omega_0)t}$):<br>
Defining the <b>detuning</b> $\\Delta = \\omega - \\omega_0$, the exact probability of finding the particle in state $|2\\rangle$ given $|1\\rangle$ at $t=0$ is:
$$\\boxed{P_{1 \\to 2}(t) = \\left( \\frac{\\Omega_0}{\\Omega_R} \\right)^2 \\sin^2\\left( \\frac{\\Omega_R t}{2} \\right)}$$
where $\\Omega_R$ is the <b>generalized (effective) Rabi frequency</b>:
$$\\boxed{\\Omega_R = \\sqrt{\\Delta^2 + \\Omega_0^2}}$$
<b>Key Regimes:</b>
<ol>
  <li><b>Exact Resonance ($\\Delta = 0 \\implies \\omega = \\omega_0$):</b>
  $$P_{1 \\to 2}(t) = \\sin^2\\left( \\frac{\\Omega_0 t}{2} \\right)$$
  The system undergoes 100% complete population transfer (inversion) at $t = \\pi/\\Omega_0$ (a <b>$\\pi$-pulse</b>).</li>
  <li><b>Off Resonance ($|\\Delta| \\gg \\Omega_0$):</b>
  Maximum transition probability drops to $(\\Omega_0/\\Delta)^2 \\ll 1$, oscillating rapidly at frequency $\\Omega_R \\approx |\\Delta|$.</li>
</ol>`,
    intuition: `Rabi oscillation is the quantum mechanical equivalent of coupled harmonic pendulums exchanging energy back and forth! A coherent electromagnetic field pumps probability from the ground state to the excited state and back again periodically. This is the fundamental physical mechanism of NMR, MRI, atomic clocks, and quantum computing qubit gates.`,
    needs: ['c.x3.1.1', 'c.6.4.1'],
    traps: [
      `Confusing on-resonance Rabi frequency $\\Omega_0$ with generalized Rabi frequency $\\Omega_R = \\sqrt{\\Delta^2 + \\Omega_0^2}$. Off resonance, the oscillation is faster ($\\Omega_R > \\Omega_0$) but has lower amplitude.`,
      `Thinking 100% excitation can be achieved off-resonance. As long as $\\Delta \\ne 0$, the peak probability is strictly less than 1.`
    ],
    cards: [
      { q: 'What is the maximum transition probability in a driven two-level system with detuning Δ and coupling Ω₀?', a: '$P_{\\max} = \\frac{\\Omega_0^2}{\\Delta^2 + \\Omega_0^2}$.', kind: 'recall' },
      { q: 'What pulse duration is required to completely invert a two-level system on resonance (a π-pulse)?', a: '$t = \\frac{\\pi}{\\Omega_0}$.', kind: 'recall' }
    ]
  },

  /* ── X3.2 Fermi's Golden Rule & Adiabatic Approximation ─────────────────── */
  {
    id: 'c.x3.2.1', sec: 'X3.2', kind: 'theorem', tier: 'core',
    title: 'Fermi\'s Golden Rule & Spontaneous Emission',
    oneLine: 'Fermi\'s golden rule gives the constant transition rate to a continuum: W_{i→f} = (2π/ħ) |⟨f|V|i⟩|² ρ(E_f), describing decays, scattering, and spontaneous photon emission.',
    statement: `When an initial discrete state $|i\\rangle$ transitions under a weak perturbation $V$ into a continuous or quasi-continuous manifold of final states $|f\\rangle$ with <b>density of states</b> $\\rho(E)$ (number of states per unit energy):<br>
In the limit $t \\to \\infty$, the probability per unit time reaches a steady constant value known as <b>Fermi\'s Golden Rule</b>:
$$\\boxed{W_{i \\to f} = \\frac{dP_{i \\to f}}{dt} = \\frac{2\\pi}{\\hbar} |\\langle f | V | i \\rangle|^2 \\rho(E_f)}$$
<b>Derivation Sketch:</b>
$$P(t) = \\frac{4}{\\hbar^2} |V_{fi}|^2 \\frac{\\sin^2\\left( \\frac{(E_f - E_i)t}{2\\hbar} \\right)}{\\left( \\frac{E_f - E_i}{\\hbar} \\right)^2} \\xrightarrow{t \\to \\infty} \\frac{2\\pi t}{\\hbar} |V_{fi}|^2 \\delta(E_f - E_i)$$
Integrating over the density of final states $\\int \\dots \\rho(E_f) dE_f$ yields the golden rule.<br>
<b>Einstein $A$ Coefficient for Spontaneous Emission:</b><br>
Applying Fermi\'s golden rule to quantized radiation field in the electric dipole approximation:
$$\\boxed{A = \\frac{\\omega_0^3 |\\boldsymbol{\\mu}_{ba}|^2}{3\\pi\\varepsilon_0 \\hbar c^3}}$$
where $\\boldsymbol{\\mu}_{ba} = q \\langle b | \\mathbf{r} | a \\rangle$ is the transition dipole moment. The lifetime of the excited state is $\\tau = 1/A$.`,
    intuition: `Why does a transition become irreversible into a continuum? When states are discrete, probability sloshes back and forth (Rabi oscillations). But when there is a continuum of infinitely many adjacent modes, the returned probability phases destructively interfere, preventing recurrence and yielding an exponential irreversible decay: $P(t) = e^{-W t}$.`,
    needs: ['c.x3.1.1', 'c.x2.2.1'],
    traps: [
      `Applying Fermi\'s golden rule to transitions between two discrete, isolated energy levels. The rule strictly requires a continuous spectrum of final states (like an emitted photon or free outgoing electron).`,
      `Neglecting the cubic power of frequency $\\omega_0^3$ in spontaneous emission: optical transitions ($\\sim 10^{15}\\text{ Hz}$) occur in nanoseconds, whereas microwave hyperfine transitions ($\\sim 10^9\\text{ Hz}$) take millions of years!`
    ],
    cards: [
      { q: 'State Fermi\'s Golden Rule for the transition rate into a continuum of states.', a: '$W = \\frac{2\\pi}{\\hbar} |\\langle f | V | i \\rangle|^2 \\rho(E_f)$.', kind: 'state' },
      { q: 'How does the Einstein A coefficient for spontaneous dipole emission scale with transition frequency ω₀?', a: '$A \\propto \\omega_0^3$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x3.2.2', sec: 'X3.2', kind: 'theorem', tier: 'core',
    title: 'The Adiabatic Theorem & Berry\'s Geometric Phase',
    oneLine: 'If a Hamiltonian changes slowly, a system stays in its instantaneous eigenstate, acquiring a dynamical phase plus a geometric Berry phase γ(C) = i ∮ ⟨n|∇_R n⟩ · dR.',
    statement: `<b>The Adiabatic Theorem:</b><br>
If the parameters $\\mathbf{R}(t)$ of a Hamiltonian $H(\\mathbf{R}(t))$ change infinitely slowly (adiabatically) and there is no level crossing with other states, a system prepared in the $n$-th instantaneous eigenstate $|n(\\mathbf{R}(0))\\rangle$ remains in the $n$-th instantaneous eigenstate $|n(\\mathbf{R}(t))\\rangle$ for all $t$:
$$|\\Psi(t)\\rangle = e^{i \\theta_n(t)} e^{i \\gamma_n(t)} |n(\\mathbf{R}(t))\\rangle$$
<ol>
  <li><b>Dynamical Phase:</b>
  $$\\boxed{\\theta_n(t) = -\\frac{1}{\\hbar} \\int_0^t E_n(t') \\, dt'}$$</li>
  <li><b>Berry\'s Geometric Phase:</b>
  When the parameters trace out a closed circuit $C$ in parameter space and return to $\\mathbf{R}(T) = \\mathbf{R}(0)$, the system accumulates a non-trivial geometric phase:
  $$\\boxed{\\gamma_n(C) = i \\oint_C \\langle n(\\mathbf{R}) | \\nabla_\\mathbf{R} n(\\mathbf{R}) \\rangle \\cdot d\\mathbf{R} = \\iint_S \\mathbf{\\Omega}_n \\cdot d\\mathbf{S}}$$
  where $\\mathbf{A}_n(\\mathbf{R}) = i \\langle n | \\nabla_\\mathbf{R} n \\rangle$ is the <b>Berry connection</b> (gauge field) and $\\mathbf{\\Omega}_n = \\nabla_\\mathbf{R} \\times \\mathbf{A}_n$ is the gauge-invariant <b>Berry curvature</b>.</li>
</ol>`,
    intuition: `Berry\'s phase is purely geometric! It depends only on the path $C$ taken through parameter space, NOT on how long it took to traverse the path. Just like parallel transporting a vector along a closed loop on a curved sphere rotates it by the solid angle enclosed (holonomy), parallel transporting a quantum state around a parameter loop rotates its phase by the Berry curvature flux.`,
    needs: ['c.1.1.1', 'c.3.5.1'],
    traps: [
      `Assuming Berry phase is zero for any gauge choice. While the Berry connection $\\mathbf{A}_n$ transforms under gauge choices $\\psi \\to e^{i\\alpha}\\psi$, the closed-path line integral $\\gamma(C)$ and Berry curvature $\\mathbf{\\Omega}_n$ are gauge-invariant physical observables.`,
      `Applying adiabatic theorem when energy levels cross (degenerate eigenvalues). Near level crossings, transition between levels dominates (Landau-Zener transitions).`
    ],
    cards: [
      { q: 'What is the formula for Berry\'s geometric phase along a closed parameter circuit C?', a: '$\\gamma_n(C) = i \\oint_C \\langle n(\\mathbf{R}) | \\nabla_\\mathbf{R} n(\\mathbf{R}) \\rangle \\cdot d\\mathbf{R}$.', kind: 'recall' },
      { q: 'Does Berry\'s phase depend on the total time taken to traverse the circuit in parameter space?', a: 'No, it is purely geometric and depends only on the contour $C$, not on the speed of traversal.', kind: 'recall' }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     MODULE EXT 4: QUANTUM FOUNDATIONS & INFORMATION
     ══════════════════════════════════════════════════════════════════════════ */

  /* ── X4.1 The EPR Paradox & Bell's Theorem ─────────────────────────────── */
  {
    id: 'c.x4.1.1', sec: 'X4.1', kind: 'concept', tier: 'core',
    title: 'The EPR Paradox & Bohm\'s Spin Formulation',
    oneLine: 'EPR argued that quantum mechanics is incomplete based on local realism; Bohm recast the paradox using two entangled spin-1/2 particles in a singlet state.',
    statement: `In 1935, Einstein, Podolsky, and Rosen (EPR) formulated a critique of quantum mechanics based on two philosophical premises:
<ol>
  <li><b>Locality:</b> No physical influence can travel faster than the speed of light.</li>
  <li><b>Realism:</b> If, without in any way disturbing a system, we can predict with certainty the value of a physical quantity, then there exists an <b>element of physical reality</b> corresponding to it.</li>
</ol>
<b>Bohm\'s Spin-1/2 Variant:</b><br>
A parent particle with spin 0 decays into two spin-1/2 particles (Alice and Bob) flying in opposite directions in the singlet state:
$$|\\psi_0\\rangle = \\frac{1}{\\sqrt{2}}\\left( |\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle \\right)$$
- If Alice measures the spin of particle 1 along $\\hat{z}$ and finds $+1/2$, she knows with 100% certainty that Bob will measure $-1/2$ along $\\hat{z}$.<br>
- Since Alice did not touch Bob\'s particle (which could be light-years away), Bob\'s spin component must have been predetermined all along.<br>
- By measuring along $\\hat{x}$ instead, Alice could have predicted Bob\'s $\\hat{x}$-spin with certainty.<br>
- Because $[S_x, S_z] \\ne 0$, standard quantum mechanics forbids simultaneous reality for $S_x$ and $S_z$.<br>
- <b>EPR Conclusion:</b> Standard quantum mechanics is an incomplete theory that must be supplemented by <b>local hidden variables</b>.`,
    intuition: `Einstein refused to accept "spooky action at a distance" (spukhafte Fernwirkung). He believed quantum probabilities are like finding a pair of shoes in two boxes: if you open one box and find the left shoe, you know the other box contains the right shoe, not because opening the box affected the other shoe, but because it was packed that way from the start!`,
    needs: ['c.1.2.1', 'c.1.6.1', 'c.6.4.1', 'c.x1.2.1'],
    traps: [
      `Believing EPR entanglement can be used to transmit faster-than-light signals. The no-signaling theorem proves that local measurements by Alice cannot alter the marginal probability distribution measured by Bob without classical communication.`,
      `Thinking Bohr agreed with EPR. Bohr responded that quantum systems cannot be separated from the experimental arrangement measuring them.`
    ],
    cards: [
      { q: 'State the two core assumptions of EPR\'s local realism.', a: '1. Locality (no superluminal influence) and 2. Realism (pre-existing elements of reality for outcomes predictable with certainty).', kind: 'recall' },
      { q: 'What is the spin singlet state of two spin-1/2 particles in Bohm\'s EPR setup?', a: '$|\\psi_0\\rangle = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x4.1.2', sec: 'X4.1', kind: 'theorem', tier: 'core',
    title: 'Bell\'s Theorem & The CHSH Inequality',
    oneLine: 'Bell proved that no local hidden variable theory can reproduce all quantum mechanical predictions; quantum entanglement violates the CHSH bound of 2 up to 2√2.',
    statement: `In 1964, John Stewart Bell converted EPR\'s philosophical debate into an experimentally testable mathematical theorem.<br>
Let Alice and Bob measure spin correlations along unit vectors $\\hat{a}$ and $\\hat{b}$ using detector outcomes $A(\\hat{a}, \\lambda) = \\pm 1$ and $B(\\hat{b}, \\lambda) = \\pm 1$, governed by hidden variables $\\lambda$ with probability distribution $\\rho(\\lambda)$.<br>
The correlation function is $E(\\hat{a}, \\hat{b}) = \\int A(\\hat{a}, \\lambda) B(\\hat{b}, \\lambda) \\rho(\\lambda) d\\lambda$.<br>
<b>The Clauser–Horne–Shimony–Holt (CHSH) Inequality:</b><br>
For detector choices $a, a'$ (Alice) and $b, b'$ (Bob), any <b>local realistic theory</b> must satisfy:
$$\\boxed{|S_{\\text{classical}}| = |E(a, b) - E(a, b') + E(a', b) + E(a', b')| \\le 2}$$
<b>Quantum Mechanical Prediction:</b><br>
For the singlet state, the quantum correlation is:
$$E_Q(\\hat{a}, \\hat{b}) = \\langle \\psi_0 | (\\boldsymbol{\\sigma}_1 \\cdot \\hat{a})(\\boldsymbol{\\sigma}_2 \\cdot \\hat{b}) | \\psi_0 \\rangle = -\\hat{a} \\cdot \\hat{b} = -\\cos\\theta_{ab}$$
Choosing coplanar orientations $\\theta_a = 0^\\circ, \\theta_b = 45^\\circ, \\theta_{a'} = 90^\\circ, \\theta_{b'} = 135^\\circ$:
$$E(a, b) = -\\frac{\\sqrt{2}}{2}, \\quad E(a, b') = \\frac{\\sqrt{2}}{2}, \\quad E(a', b) = -\\frac{\\sqrt{2}}{2}, \\quad E(a', b') = -\\frac{\\sqrt{2}}{2}$$
$$|S_Q| = \\left| -\\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} - \\frac{\\sqrt{2}}{2} \\right| = \\boxed{2\\sqrt{2} \\approx 2.828 > 2}$$
This maximal quantum value $2\\sqrt{2}$ is the <b>Tsirelson bound</b>.`,
    intuition: `Bell\'s theorem showed that nature cannot be both local and realistic! Experimental tests—pioneered by Alain Aspect (1982) and verified in 2015 loophole-free experiments—unambiguously confirm the quantum prediction $2\\sqrt{2}$, ruling out all local hidden variable theories of the universe.`,
    needs: ['c.x4.1.1'],
    traps: [
      `Claiming Bell\'s theorem proves quantum mechanics is non-local. It proves that ANY theory reproducing quantum experiments must abandon LOCAL realism; whether one rejects locality (de Broglie-Bohm), counterfactual definiteness, or single-world realism is an interpretational choice.`,
      `Confusing classical correlation bound $2$ with quantum maximum $2\\sqrt{2}$ and algebraic maximum $4$.`
    ],
    cards: [
      { q: 'State the upper bound of the CHSH inequality for any local realistic hidden variable theory.', a: '$|S| \\le 2$.', kind: 'recall' },
      { q: 'What is the maximum value of the CHSH parameter S achievable in quantum mechanics (Tsirelson\'s bound)?', a: '$S = 2\\sqrt{2} \\approx 2.828$.', kind: 'recall' }
    ]
  },

  /* ── X4.2 Quantum Entanglement & The Density Matrix ────────────────────── */
  {
    id: 'c.x4.2.1', sec: 'X4.2', kind: 'definition', tier: 'core',
    title: 'Quantum Entanglement & The Four Bell States',
    oneLine: 'An entangled bipartite state cannot be written as a product of subsystem states; the four orthonormal Bell states form a complete maximally entangled basis for two qubits.',
    statement: `A state $|\\Psi_{AB}\\rangle$ of a composite system $\\mathcal{H}_A \\otimes \\mathcal{H}_B$ is <b>separable</b> if it can be written as a simple product:
$$|\\Psi_{AB}\\rangle = |\\phi_A\\rangle \\otimes |\\chi_B\\rangle$$
If it cannot be factored in this form, the state is <b>entangled</b>.<br>
<b>The Four Maximally Entangled Bell States (EPR Pairs):</b>
$$\\boxed{|\\Phi^+\\rangle = \\frac{|00\\rangle + |11\\rangle}{\\sqrt{2}}, \\qquad |\\Phi^-\\rangle = \\frac{|00\\rangle - |11\\rangle}{\\sqrt{2}}}$$
$$\\boxed{|\\Psi^+\\rangle = \\frac{|01\\rangle + |10\\rangle}{\\sqrt{2}}, \\qquad |\\Psi^-\\rangle = \\frac{|01\\rangle - |10\\rangle}{\\sqrt{2}}}$$
These form a complete orthonormal basis for the 4-dimensional Hilbert space $\\mathbb{C}^2 \\otimes \\mathbb{C}^2$:
$$\\langle B_i | B_j \\rangle = \\delta_{ij}, \\qquad \\sum_{i=1}^4 |B_i\\rangle\\langle B_i| = I$$
<b>Schmidt Decomposition:</b><br>
Any pure state of a bipartite system can be decomposed as:
$$|\\Psi_{AB}\\rangle = \\sum_{i=1}^k \\sqrt{\\lambda_i} |u_i\\rangle_A |v_i\\rangle_B, \\qquad \\lambda_i > 0, \\quad \\sum_i \\lambda_i = 1$$
The state is entangled if and only if the <b>Schmidt rank</b> $k > 1$.`,
    intuition: `In an entangled state, individual particles do not have definite states of their own! The system as a whole is in a pure, perfectly defined state, yet every individual subsystem is maximally uncertain. Entanglement is the fuel for quantum teleportation, superdense coding, and quantum cryptography.`,
    needs: ['c.3.1.1', 'c.x4.1.1'],
    traps: [
      `Confusing superposition with entanglement. A single qubit in state $\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}$ is in a superposition, but NOT entangled. Entanglement strictly requires correlations between two or more distinct subsystems.`,
      `Thinking $|00\\rangle + |01\\rangle$ is entangled. It factors as $|0\\rangle \\otimes (|0\\rangle + |1\\rangle)$, which is completely separable!`
    ],
    cards: [
      { q: 'Write the mathematical definitions of the four Bell states.', a: '$|\\Phi^\\pm\\rangle = \\frac{|00\\rangle \\pm |11\\rangle}{\\sqrt{2}}$ and $|\\Psi^\\pm\\rangle = \\frac{|01\\rangle \\pm |10\\rangle}{\\sqrt{2}}$.', kind: 'state' },
      { q: 'What is the condition on the Schmidt rank k for a bipartite pure state to be entangled?', a: '$k > 1$ (k = 1 implies a separable product state).', kind: 'recall' }
    ]
  },
  {
    id: 'c.x4.2.2', sec: 'X4.2', kind: 'definition', tier: 'core',
    title: 'The Density Operator & Pure vs Mixed States',
    oneLine: 'The density operator ρ = ∑ p_i |ψ_i⟩⟨ψ_i| describes pure (Tr(ρ²) = 1) and mixed (Tr(ρ²) < 1) states, evolving via the von Neumann equation iħ ∂ρ/∂t = [H, ρ].',
    statement: `For an ensemble of quantum states $|\\psi_i\\rangle$ prepared with statistical probabilities $p_i$ ($\\sum p_i = 1$), the state is described by the <b>density operator (density matrix)</b>:
$$\\boxed{\\rho = \\sum_i p_i |\\psi_i\\rangle\\langle \\psi_i|}$$
<b>Fundamental Mathematical Properties:</b>
<ol>
  <li><b>Hermiticity:</b> $\\rho^\\dagger = \\rho$.</li>
  <li><b>Unit Trace:</b> $\\operatorname{Tr}(\\rho) = 1$.</li>
  <li><b>Positive Semi-Definite:</b> $\\langle \\phi | \\rho | \\phi \\rangle \\ge 0$ for any state $|\\phi\\rangle$.</li>
  <li><b>Expectation Value of Observable $A$:</b> $\\langle A \\rangle = \\operatorname{Tr}(\\rho A)$.</li>
</ol>
<b>Pure vs Mixed States:</b>
<ul>
  <li><b>Pure State:</b> System described by a single state vector $|\\psi\\rangle$ ($p_1 = 1$).
  $$\\rho^2 = \\rho \\quad \\iff \\quad \\boxed{\\operatorname{Tr}(\\rho^2) = 1}$$</li>
  <li><b>Mixed State:</b> Incomplete classical statistical information about the system.
  $$\\rho^2 \\ne \\rho \\quad \\iff \\quad \\boxed{\\operatorname{Tr}(\\rho^2) < 1}$$</li>
</ul>
<b>Time Evolution (von Neumann Equation):</b>
$$\\boxed{i\\hbar \\frac{\\partial \\rho}{\\partial t} = [H, \\rho]}$$
<b>Reduced Density Matrix:</b><br>
For a bipartite system $\\rho_{AB}$, the state of subsystem $A$ alone is obtained by the partial trace over $B$: $\\rho_A = \\operatorname{Tr}_B(\\rho_{AB})$. Even if $\\rho_{AB}$ is pure, $\\rho_A$ is mixed whenever the subsystems are entangled!`,
    intuition: `A density matrix unifies quantum indeterminacy (wavefunction probabilities) and classical ignorance (statistical ensemble probabilities) in a single operator. If you have an entangled pair $|\\Phi^+\\rangle = \\frac{|00\\rangle+|11\\rangle}{\\sqrt{2}}$, tracing out Bob yields $\\rho_A = \\frac{1}{2}I$, a completely mixed random state of maximum von Neumann entropy!`,
    needs: ['c.3.1.1', 'c.3.2.1', 'c.x4.2.1'],
    traps: [
      `Sign error in von Neumann equation: $i\\hbar \\dot{\\rho} = [H, \\rho]$, which has the OPPOSITE sign compared to the Heisenberg equation for observables $\\frac{dA_H}{dt} = \\frac{i}{\\hbar}[H, A_H]$.`,
      `Confusing a quantum superposition with a statistical mixture: $\\frac{|0\\rangle + |1\\rangle}{\\sqrt{2}}$ is a pure state with $\\operatorname{Tr}(\\rho^2) = 1$, whereas an ensemble of 50% $|0\\rangle$ and 50% $|1\\rangle$ is a mixed state with $\\rho = \\frac{1}{2}I$ and $\\operatorname{Tr}(\\rho^2) = 1/2$.`
    ],
    cards: [
      { q: 'State the mathematical criterion that distinguishes a pure state from a mixed state using the density operator ρ.', a: 'Pure state: $\\operatorname{Tr}(\\rho^2) = 1$ (or $\\rho^2 = \\rho$); Mixed state: $\\operatorname{Tr}(\\rho^2) < 1$.', kind: 'recall' },
      { q: 'Write the von Neumann equation for the time evolution of the density operator ρ.', a: '$i\\hbar \\frac{\\partial \\rho}{\\partial t} = [H, \\rho]$.', kind: 'recall' }
    ]
  },

  /* ══════════════════════════════════════════════════════════════════════════
     MODULE EXT 5: RELATIVISTIC QUANTUM MECHANICS
     ══════════════════════════════════════════════════════════════════════════ */

  /* ── X5.1 The Klein-Gordon Equation for Spin-0 Bosons ──────────────────── */
  {
    id: 'c.x5.1.1', sec: 'X5.1', kind: 'equation', tier: 'core',
    title: 'The Klein-Gordon Equation & Indefinite Probability Density',
    oneLine: 'The Klein-Gordon equation (□ + m²c²/ħ²)ψ = 0 quantizes the relativistic relation E² = p²c² + m²c⁴, yielding an indefinite probability density that signifies charge density.',
    statement: `Applying the quantum operator substitutions $E \\to i\\hbar \\frac{\\partial}{\\partial t}$ and $\\mathbf{p} \\to -i\\hbar \\nabla$ to the relativistic energy-momentum invariant $E^2 = p^2 c^2 + m^2 c^4$:
$$\\left( -\\hbar^2 \\frac{\\partial^2}{\\partial t^2} \\right) \\psi = \\left( -\\hbar^2 c^2 \\nabla^2 + m^2 c^4 \\right) \\psi$$
Dividing by $\\hbar^2 c^2$ gives the <b>Klein–Gordon equation</b>:
$$\\boxed{\\left( \\frac{1}{c^2}\\frac{\\partial^2}{\\partial t^2} - \\nabla^2 + \\frac{m^2 c^2}{\hbar^2} \\right) \\psi = 0 \\quad \\iff \\quad \\left( \\Box + \\frac{m^2 c^2}{\hbar^2} \\right)\\psi = 0}$$
where $\\Box \\equiv \\partial_\\mu \\partial^\\mu = \\frac{1}{c^2}\\frac{\\partial^2}{\\partial t^2} - \\nabla^2$ is the d\'Alembertian operator.<br>
<b>Continuity Equation & The Probability Problem:</b><br>
The conserved four-current $j^\\mu = (c\\rho, \\mathbf{j})$ satisfies $\\partial_\\mu j^\\mu = 0$, where:
$$\\boxed{\\rho = \\frac{i\\hbar}{2mc^2} \\left( \\psi^* \\frac{\\partial \\psi}{\\partial t} - \\psi \\frac{\\partial \\psi^*}{\\partial t} \\right)}, \\qquad \\mathbf{j} = -\\frac{i\\hbar}{2m}\\left( \\psi^* \\nabla \\psi - \\psi \\nabla \\psi^* \\right)$$
Because the equation is <b>second order in time</b>, both $\\psi$ and $\\frac{\\partial \\psi}{\\partial t}$ can be chosen arbitrarily at $t=0$, causing $\\rho$ to take <b>negative values</b>!`,
    intuition: `Why did the Klein-Gordon equation fail as a single-particle wave equation? Because in relativistic quantum mechanics, energy can create new particles ($E = mc^2$)! A fixed particle number cannot be conserved. In modern quantum field theory, $\\rho$ is reinterpreted not as a probability density, but as an electric <i>charge density</i> $q\\rho$, which can naturally be positive (particles) or negative (antiparticles, like $\\pi^-$ and $\\pi^+$ mesons).`,
    needs: ['c.1.1.1', 'c.2.4.1'],
    traps: [
      `Attempting to interpret $\\rho$ in the Klein-Gordon equation as a probability density. It can be negative, so it cannot represent single-particle probability.`,
      `Thinking Klein-Gordon applies to electrons. Electrons have spin 1/2 and are governed by the Dirac equation; Klein-Gordon governs spin-0 scalar bosons (pions, Higgs boson).`
    ],
    cards: [
      { q: 'Write the Klein-Gordon equation in covariant notation.', a: '$\\left(\\Box + \\frac{m^2 c^2}{\\hbar^2}\\right)\\psi = 0$, where $\\Box = \\partial_\\mu \\partial^\\mu$.', kind: 'recall' },
      { q: 'Why is the conserved density ρ of the Klein-Gordon equation not positive definite?', a: 'Because the equation is second order in time, allowing the time derivative $\\partial\\psi/\\partial t$ to be chosen independently of $\\psi$, making $\\rho = \\frac{i\\hbar}{2mc^2}(\\psi^*\\dot{\\psi} - \\psi\\dot{\\psi}^*)$ negative for negative-energy solutions.', kind: 'recall' }
    ]
  },
  {
    id: 'c.x5.1.2', sec: 'X5.1', kind: 'concept', tier: 'core',
    title: 'Negative-Energy States & The Feynman-Stückelberg Picture',
    oneLine: 'Relativistic dispersion E = ±√(p²c² + m²c⁴) yields negative energy states, reinterpreted as antiparticles of positive energy traveling backward in time.',
    statement: `Plane wave solutions $\\psi(x, t) = A e^{i(\\mathbf{p}\\cdot\\mathbf{r} - Et)/\\hbar}$ of the Klein-Gordon equation yield two energy branches:
$$E = \\pm \\sqrt{p^2 c^2 + m^2 c^4}$$
These solutions form two continuous spectra separated by an energy gap of $2mc^2$:
<ol>
  <li><b>Positive Energy Continuum:</b> $E \\ge +mc^2$.</li>
  <li><b>Negative Energy Continuum:</b> $E \\le -mc^2$.</li>
</ol>
<b>The Feynman–Stückelberg Interpretation:</b><br>
A negative-energy solution with 4-momentum $-p^\\mu = (-E/c, -\\mathbf{p})$ traveling backward in time ($e^{-i(-E)(-t)/\\hbar}$) is physically identical to a positive-energy <b>antiparticle</b> with $+p^\\mu = (+E/c, +\\mathbf{p})$ traveling forward in time with opposite charge:
$$\\boxed{e^{-i(-E)t/\\hbar} = e^{+iEt/\\hbar} \\quad \\Longleftrightarrow \\quad \\text{Antiparticle with positive energy } +E}$$
<b>The Klein Paradox:</b><br>
When a relativistic wave hits an electrostatic barrier of height $V_0 > E + mc^2$, the reflection coefficient $R > 1$. The barrier does not reflect more than 100% of the beam; instead, the strong electric field creates particle-antiparticle pairs at the interface, transmitting antiparticles into the barrier and reflecting particles back.`,
    intuition: `In non-relativistic physics, we could easily discard negative energy solutions as unphysical. But in relativistic mechanics, any localized perturbation can induce transitions into the negative energy spectrum! The only consistent physical resolution is to embrace antimatter: negative-energy states represent the creation and annihilation of antiparticles.`,
    needs: ['c.x5.1.1'],
    traps: [
      `Thinking the Klein paradox implies non-conservation of probability. It signals the breakdown of single-particle mechanics and the onset of relativistic pair creation.`,
      `Confusing the energy gap between positive and negative energy bands ($2mc^2$) with the rest mass energy ($mc^2$).`
    ],
    cards: [
      { q: 'State the Feynman-Stückelberg interpretation of negative energy solutions.', a: 'A negative energy state with 4-momentum $-p^\\mu$ propagating backward in time represents a physical positive-energy antiparticle with $+p^\\mu$ propagating forward in time.', kind: 'state' },
      { q: 'What physical phenomenon underlies the Klein paradox at a high potential step (V₀ > E + mc²)?', a: 'Particle-antiparticle pair production induced by the strong electric field at the potential boundary.', kind: 'recall' }
    ]
  },

  /* ── X5.2 The Dirac Equation for Spin-1/2 Fermions ─────────────────────── */
  {
    id: 'c.x5.2.1', sec: 'X5.2', kind: 'equation', tier: 'core',
    title: 'The Dirac Equation & Gamma Matrix Clifford Algebra',
    oneLine: 'Dirac linearized the Hamiltonian to iħ ∂ψ/∂t = (c α·p + β mc²)ψ, requiring 4×4 anticommuting matrices and yielding a positive-definite probability density ρ = ψ†ψ.',
    statement: `To overcome the negative probability density of the second-order Klein-Gordon equation, Paul Dirac (1928) sought a relativistic wave equation <b>linear in both time and spatial derivatives</b>:
$$i\\hbar \\frac{\\partial \\psi}{\\partial t} = H_D \\psi = \\left( c \\, \\boldsymbol{\\alpha} \\cdot \\mathbf{p} + \\beta m c^2 \\right) \\psi$$
Requiring that every component of $\\psi$ separately satisfy the relativistic energy-momentum condition $H_D^2 = p^2 c^2 + m^2 c^4$ forces the coefficients to satisfy:
$$\\alpha_i \\alpha_j + \\alpha_j \\alpha_i = 2\\delta_{ij} I, \\qquad \\alpha_i \\beta + \\beta \\alpha_i = 0, \\qquad \\beta^2 = I$$
These anticommutation relations require $\\boldsymbol{\\alpha}$ and $\\beta$ to be traceless, even-dimensional Hermitian matrices of minimum dimension $4 \\times 4$.<br>
<b>Dirac–Pauli Representation:</b>
$$\\boldsymbol{\\alpha} = \\begin{pmatrix} 0 & \\boldsymbol{\\sigma} \\\\ \\boldsymbol{\\sigma} & 0 \\end{pmatrix}, \\qquad \\beta = \\begin{pmatrix} I & 0 \\\\ 0 & -I \\end{pmatrix}$$
where $\\boldsymbol{\\sigma}$ are the standard $2 \\times 2$ Pauli matrices and $I$ is the $2 \\times 2$ identity.<br>
<b>Covariant Form:</b>
$$\\boxed{(i\\hbar \\gamma^\\mu \\partial_\\mu - mc)\\psi = 0}$$
where $\\gamma^0 = \\beta$ and $\\boldsymbol{\\gamma} = \\beta \\boldsymbol{\\alpha}$, satisfying the <b>Clifford algebra</b>:
$$\\boxed{\\{\\gamma^\\mu, \\gamma^\\nu\\} = \\gamma^\\mu \\gamma^\\nu + \\gamma^\\nu \\gamma^\\mu = 2 g^{\\mu\\nu} I}$$
<b>Positive-Definite Probability Density:</b><br>
The conserved current is $j^\\mu = c \\bar{\\psi}\\gamma^\\mu \\psi = (c\\rho, \\mathbf{j})$ where $\\bar{\\psi} = \\psi^\\dagger \\gamma^0$, giving:
$$\\boxed{\\rho = \\psi^\\dagger \\psi = \\sum_{a=1}^4 |\\psi_a|^2 \\ge 0}$$
The probability density is strictly <b>positive definite</b>!`,
    intuition: `Dirac's 4-component wavefunction is not a 4-vector: it is a <b>Dirac spinor</b>! The four components naturally account for the two spin states ($s_z = \\pm 1/2$) of the electron and the two spin states of the positron. Dirac did not set out to discover spin; spin emerged automatically from reconciling quantum mechanics with special relativity!`,
    needs: ['c.6.4.1', 'c.x5.1.1'],
    traps: [
      `Confusing Dirac adjoint $\\bar{\\psi} \\equiv \\psi^\\dagger \\gamma^0$ with Hermitian conjugate $\\psi^\\dagger$. Covariant currents require $\\bar{\\psi}$ to ensure Lorentz covariance.`,
      `Thinking Dirac matrices $\\gamma^\\mu$ are 4-vectors. The indices $\\mu$ label four distinct $4\\times 4$ matrices; they are invariant numerical matrices, not vector components.`
    ],
    cards: [
      { q: 'State the Clifford algebra satisfied by the Dirac gamma matrices {γ^μ, γ^ν}.', a: '$\\{\\gamma^\\mu, \\gamma^\\nu\\} = 2 g^{\\mu\\nu} I$.', kind: 'recall' },
      { q: 'What is the probability density ρ of the Dirac equation?', a: '$\\rho = \\psi^\\dagger \\psi = \\sum_{a=1}^4 |\\psi_a|^2 \\ge 0$ (positive definite).', kind: 'recall' }
    ]
  },
  {
    id: 'c.x5.2.2', sec: 'X5.2', kind: 'theorem', tier: 'core',
    title: 'Electron Spin, Gyromagnetic Ratio g = 2 & The Positron',
    oneLine: 'Non-relativistic reduction of the Dirac equation in an electromagnetic field reproduces the Pauli equation with gyromagnetic ratio g = 2 exactly, predicting electron spin and antimatter.',
    statement: `Coupling the Dirac equation to an electromagnetic 4-potential $A^\\mu = (\\Phi/c, \\mathbf{A})$ via minimal substitution $\\mathbf{p} \\to \\mathbf{p} - q\\mathbf{A}$ and $E \\to E - q\\Phi$ ($q = -e$ for electron):<br>
In the non-relativistic limit ($E \\approx mc^2 + E_{\\text{NR}}$ with $E_{\\text{NR}}, e\\Phi \\ll mc^2$), the 4-spinor decomposes into large components $\\chi$ and small components $\\eta$:
$$\\eta \\approx \\frac{\\boldsymbol{\\sigma} \\cdot (\\mathbf{p} + e\\mathbf{A})}{2mc} \\chi$$
Substituting back into the equation for $\\chi$ yields the <b>Pauli Equation</b>:
$$\\boxed{\\left[ \\frac{(\\mathbf{p} + e\\mathbf{A})^2}{2m} + \\frac{e\\hbar}{2m} \\boldsymbol{\\sigma} \\cdot \\mathbf{B} - e\\Phi \\right] \\chi = E_{\\text{NR}} \\chi}$$
The magnetic interaction term is:
$$H_{\\text{mag}} = -\\boldsymbol{\\mu} \\cdot \\mathbf{B} = -\\left( -g \\frac{e}{2m} \\mathbf{S} \\right) \\cdot \\mathbf{B} = +g \\frac{e\\hbar}{4m} \\boldsymbol{\\sigma} \\cdot \\mathbf{B}$$
Comparing coefficients yields the <b>exact gyromagnetic ratio</b>:
$$\\boxed{g = 2}$$
<b>The Dirac Sea & The Positron:</b><br>
To resolve the remaining negative-energy states $E = -\\sqrt{p^2 c^2 + m^2 c^4}$, Dirac postulated that the vacuum has all negative-energy states completely filled (the <b>Dirac sea</b>).<br>
- By the Pauli exclusion principle, positive-energy electrons cannot transition into filled states.<br>
- A photon with $h\\nu > 2mc^2$ can kick an electron out of the sea, creating a real electron and leaving an empty "hole".<br>
- A hole in the sea acts as a physical particle with positive energy $+E$, positive charge $+e$, and identical mass $m$—the <b>positron</b> (discovered by Anderson in 1932).`,
    intuition: `This is one of the supreme triumphs in the history of theoretical physics! In classical physics, orbital angular momentum has $g = 1$, and electron spin $g = 2$ had to be inserted by hand into the Pauli equation. The Dirac equation proves that both intrinsic spin $s = 1/2$ and $g = 2$ are natural geometrical necessities of relativistic spacetime.`,
    needs: ['c.6.4.1', 'c.x5.2.1'],
    traps: [
      `Thinking the Dirac value $g=2$ is exact in nature. Quantum Electrodynamics (QED) radiative loop corrections modify $g$: anomalous magnetic moment $g = 2(1 + \\alpha/(2\\pi) + \\dots) \\approx 2.002319$.`,
      `Thinking holes in the Dirac sea are protons. Dirac initially speculated this, but Oppenheimer and Weyl proved the hole must have the exact same mass as the electron (the positron).`
    ],
    cards: [
      { q: 'What is the theoretical gyromagnetic ratio g of the electron predicted by the Dirac equation?', a: '$g = 2$ exactly.', kind: 'recall' },
      { q: 'Who experimentally discovered the positron predicted by Dirac\'s hole theory?', a: 'Carl D. Anderson in 1932 (using cloud chamber cosmic ray tracks).', kind: 'recall' }
    ]
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   PRACTICE & CONCEPTUAL QUESTIONS (QUESTIONS array)
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(
  {
    id: 'q.x1.1.1', sec: 'X1.1', course: 'qm_ext',
    title: 'Two Non-Interacting Particles in an Infinite Square Well',
    prompt: `Two identical non-interacting particles of mass $m$ are confined in an infinite 1D potential well of width $a$ ($0 \\le x \\le a$).<br>
Find the ground state energy and total wavefunction (spatial and spin) if the particles are:
<ol type="a">
  <li>Identical spin-0 bosons.</li>
  <li>Identical spin-1/2 fermions.</li>
</ol>`,
    solution: `The single-particle stationary state energies and wavefunctions are:
$$\\psi_n(x) = \\sqrt{\\frac{2}{a}}\\sin\\left(\\frac{n\\pi x}{a}\\right), \\qquad E_n = n^2 E_1, \\quad E_1 = \\frac{\\pi^2 \\hbar^2}{2m a^2}$$
<b>(a) Spin-0 Bosons:</b><br>
Bosons have symmetric spatial wavefunctions under exchange and are not restricted by the Pauli exclusion principle.<br>
Both bosons can occupy the $n=1$ spatial orbital:
$$\\Psi_0(x_1, x_2) = \\psi_1(x_1)\\psi_1(x_2) = \\frac{2}{a}\\sin\\left(\\frac{\\pi x_1}{a}\\right)\\sin\\left(\\frac{\\pi x_2}{a}\\right)$$
The ground state energy is:
$$E_0 = E_1 + E_1 = 2 E_1 = \\frac{\\pi^2 \\hbar^2}{m a^2}$$

<b>(b) Spin-1/2 Fermions:</b><br>
Electrons have spin $s = 1/2$. The total wavefunction $\\Psi = \\psi_{\\text{space}} \\chi_{\\text{spin}}$ must be antisymmetric.<br>
To minimize energy, both electrons can occupy the spatial ground state $n=1$ provided their spin state is the antisymmetric <b>singlet</b> ($S = 0$):
$$\\chi_{\\text{singlet}} = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)$$
Then the spatial part is symmetric:
$$\\psi_0(x_1, x_2) = \\psi_1(x_1)\\psi_1(x_2) = \\frac{2}{a}\\sin\\left(\\frac{\\pi x_1}{a}\\right)\\sin\\left(\\frac{\\pi x_2}{a}\\right)$$
The total ground state is:
$$\\Psi_0(1, 2) = \\frac{2}{a}\\sin\\left(\\frac{\\pi x_1}{a}\\right)\\sin\\left(\\frac{\\pi x_2}{a}\\right) \\frac{|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle}{\\sqrt{2}}$$
The ground state energy is $E_0 = 2 E_1 = \\frac{\\pi^2 \\hbar^2}{m a^2}$.<br>
<i>Note:</i> For the first excited state, one electron is in $n=1$ and the other in $n=2$, with total energy $E_1 + 4E_1 = 5E_1$, splitting into a singlet and a triplet.`,
    tags: ['identical particles', 'bosons', 'fermions', 'infinite well']
  },
  {
    id: 'q.x2.2.1', sec: 'X2.2', course: 'qm_ext',
    title: 'Selection Rules for 1D Harmonic Oscillator under Dipole Perturbation',
    prompt: `A 1D quantum harmonic oscillator is perturbed by a uniform electric field, introducing the interaction $V(x) = -q \\mathcal{E} x$.
<ol type="a">
  <li>Use the parity operator $\\Pi$ to determine which transitions $\\langle m | x | n \\rangle$ are strictly forbidden.</li>
  <li>Use the ladder operator representation of $x$ to find the exact non-vanishing matrix elements and the dipole selection rule.</li>
</ol>`,
    solution: `<b>(a) Parity Analysis:</b><br>
The harmonic oscillator potential $V_0(x) = \\frac{1}{2}m\\omega^2 x^2$ is symmetric: $V(-x) = V(x)$.<br>
Hence $[\\Pi, H_0] = 0$, and the eigenstates have definite parity:
$$\\Pi |n\\rangle = (-1)^n |n\\rangle$$
The perturbation operator $x$ is odd under parity: $\\Pi x \\Pi^\\dagger = -x$.<br>
Inserting $\\Pi^\\dagger \\Pi = I$:
$$\\langle m | x | n \\rangle = \\langle m | \\Pi^\\dagger \\Pi x \\Pi^\\dagger \\Pi | n \\rangle = (-1)^m (-1)^n (-1) \\langle m | x | n \\rangle = -(-1)^{m+n} \\langle m | x | n \\rangle$$
If $m$ and $n$ have the same parity ($m+n$ is even), $(-1)^{m+n} = +1 \\implies \\langle m | x | n \\rangle = -\\langle m | x | n \\rangle = 0$.<br>
Thus, parity strictly forbids all transitions where $\\Delta n = m - n$ is even.

<b>(b) Ladder Operator Selection Rule:</b><br>
Expressing $x$ in terms of annihilation and creation operators:
$$x = \\sqrt{\\frac{\\hbar}{2m\\omega}} (a + a^\\dagger)$$
Acting on eigenstate $|n\\rangle$:
$$x |n\\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\left( \\sqrt{n}|n-1\\rangle + \\sqrt{n+1}|n+1\\rangle \\right)$$
Taking the inner product with $\\langle m|$:
$$\\langle m | x | n \\rangle = \\sqrt{\\frac{\\hbar}{2m\\omega}} \\left( \\sqrt{n} \\, \\delta_{m, n-1} + \\sqrt{n+1} \\, \\delta_{m, n+1} \\right)$$
Therefore, the transition matrix element is non-zero <b>if and only if</b>:
$$\\Delta n = m - n = \\pm 1$$
Transitions with $|\\Delta n| \\ge 2$ or $\\Delta n = 0$ vanish identically.`,
    tags: ['parity', 'selection rules', 'harmonic oscillator', 'ladder operators']
  },
  {
    id: 'q.x3.1.1', sec: 'X3.1', course: 'qm_ext',
    title: 'Rabi Flopping on Resonance in a Driven Two-Level System',
    prompt: `A spin-1/2 particle with magnetic moment $\\boldsymbol{\\mu} = \\gamma \\mathbf{S}$ is placed in a static magnetic field $\\mathbf{B}_0 = B_0 \\hat{z}$ and a rotating transverse field $\\mathbf{B}_1(t) = B_1(\\cos(\\omega t)\\hat{x} - \\sin(\\omega t)\\hat{y})$.<br>
Starting in the ground state $|\\!\\uparrow\\rangle$ at $t = 0$:
<ol type="a">
  <li>Find the resonance frequency $\\omega_0$.</li>
  <li>Find the probability $P_{\\uparrow \\to \\downarrow}(t)$ of finding the spin flipped along $-\\hat{z}$ at time $t$ on resonance.</li>
  <li>Calculate the time required to achieve complete spin inversion.</li>
</ol>`,
    solution: `<b>(a) Resonance Frequency:</b><br>
The unperturbed Hamiltonian is $H_0 = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}_0 = -\\gamma B_0 S_z = -\\frac{\\gamma \\hbar B_0}{2}\\sigma_z$.<br>
Energies: $E_\\uparrow = -\\frac{\\hbar \\omega_0}{2}, \\; E_\\downarrow = +\\frac{\\hbar \\omega_0}{2}$, where $\\omega_0 = \\gamma B_0$ is the <b>Larmor precession frequency</b>.<br>
Resonance occurs when the driving field frequency equals the Larmor frequency: $\\omega = \\omega_0 = \\gamma B_0$.

<b>(b) Spin-Flip Transition Probability:</b><br>
The perturbation Hamiltonian is $V(t) = -\\boldsymbol{\\mu} \\cdot \\mathbf{B}_1(t) = -\\frac{\\gamma \\hbar B_1}{2}(\\sigma_x \\cos\\omega t - \\sigma_y \\sin\\omega t)$.<br>
In matrix form:
$$V(t) = -\\frac{\\hbar \\Omega_0}{2} \\begin{pmatrix} 0 & e^{i\\omega t} \\\\ e^{-i\\omega t} & 0 \\end{pmatrix}, \\qquad \\Omega_0 \\equiv \\gamma B_1$$
On exact resonance ($\\Delta = \\omega - \\omega_0 = 0$), the generalized Rabi frequency is simply $\\Omega_R = \\Omega_0 = \\gamma B_1$.<br>
The transition probability is given by the exact Rabi formula:
$$P_{\\uparrow \\to \\downarrow}(t) = \\sin^2\\left( \\frac{\\Omega_0 t}{2} \\right) = \\sin^2\\left( \\frac{\\gamma B_1 t}{2} \\right)$$

<b>(c) Time for Complete Spin Inversion:</b><br>
Complete population inversion $P_{\\uparrow \\to \\downarrow} = 1$ occurs when the sine argument is $\\pi/2$:
$$\\frac{\\Omega_0 t}{2} = \\frac{\\pi}{2} \\implies t_\\pi = \\frac{\\pi}{\\Omega_0} = \\frac{\\pi}{\\gamma B_1}$$
This is the standard <b>$\\pi$-pulse</b> widely applied in NMR and MRI tomography.`,
    tags: ['rabi oscillations', 'two-level system', 'magnetic resonance', 'spin flip']
  },
  {
    id: 'q.x4.1.1', sec: 'X4.1', course: 'qm_ext',
    title: 'Verification of Bell-CHSH Violation for the Singlet State',
    prompt: `Two observers Alice and Bob share a pair of spin-1/2 particles in the singlet state $|\\psi_0\\rangle = \\frac{1}{\\sqrt{2}}(|\\!\\uparrow\\downarrow\\rangle - |\\!\\downarrow\\uparrow\\rangle)$.<br>
Alice can measure along angles $\\theta_a = 0^\\circ$ or $\\theta_{a'} = 90^\\circ$ in the $xz$-plane. Bob can measure along angles $\\theta_b = 45^\\circ$ or $\\theta_{b'} = 135^\\circ$.
<ol type="a">
  <li>Evaluate each of the four correlation expectation values $E(a, b), E(a, b'), E(a', b), E(a', b')$.</li>
  <li>Calculate the CHSH parameter $S$ and show that it violates the classical bound $|S| \\le 2$.</li>
</ol>`,
    solution: `<b>(a) Quantum Correlations:</b><br>
For two unit vectors $\\hat{n}_1$ and $\\hat{n}_2$ in the $xz$-plane separated by angle $\\theta_{12}$, the quantum correlation in the singlet state is:
$$E(\\hat{n}_1, \\hat{n}_2) = \\langle \\psi_0 | (\\boldsymbol{\\sigma}_1 \\cdot \\hat{n}_1)(\\boldsymbol{\\sigma}_2 \\cdot \\hat{n}_2) | \\psi_0 \\rangle = -\\hat{n}_1 \\cdot \\hat{n}_2 = -\\cos\\theta_{12}$$
Calculating each angle difference:
<ul>
  <li>For $(a, b)$: $\\theta_{ab} = 45^\\circ - 0^\\circ = 45^\\circ \\implies E(a, b) = -\\cos 45^\\circ = -\\frac{1}{\\sqrt{2}}$.</li>
  <li>For $(a, b')$: $\\theta_{ab'} = 135^\\circ - 0^\\circ = 135^\\circ \\implies E(a, b') = -\\cos 135^\\circ = +\\frac{1}{\\sqrt{2}}$.</li>
  <li>For $(a', b)$: $\\theta_{a'b} = 45^\\circ - 90^\\circ = -45^\\circ \\implies E(a', b) = -\\cos(-45^\\circ) = -\\frac{1}{\\sqrt{2}}$.</li>
  <li>For $(a', b')$: $\\theta_{a'b'} = 135^\\circ - 90^\\circ = 45^\\circ \\implies E(a', b') = -\\cos 45^\\circ = -\\frac{1}{\\sqrt{2}}$.</li>
</ul>

<b>(b) CHSH Parameter Evaluation:</b><br>
The CHSH combination is:
$$S = E(a, b) - E(a, b') + E(a', b) + E(a', b')$$
Substituting the values:
$$S = \\left(-\\frac{1}{\\sqrt{2}}\\right) - \\left(+\\frac{1}{\\sqrt{2}}\\right) + \\left(-\\frac{1}{\\sqrt{2}}\\right) + \\left(-\\frac{1}{\\sqrt{2}}\\right) = -\\frac{4}{\\sqrt{2}} = -2\\sqrt{2} \\approx -2.828$$
Taking the absolute value:
$$|S| = 2\\sqrt{2} \\approx 2.828$$
Since $2\\sqrt{2} > 2$, this directly violates the Bell-CHSH inequality $|S| \\le 2$ by more than $41\\%$, definitively demonstrating that local hidden variable theories are incompatible with quantum mechanics.`,
    tags: ['bell theorem', 'chsh inequality', 'entanglement', 'local realism']
  },
  {
    id: 'q.x5.2.1', sec: 'X5.2', course: 'qm_ext',
    title: 'Trace and Hermiticity Properties of Dirac Gamma Matrices',
    prompt: `Using the Clifford algebra anticommutation relation $\\{\\gamma^\\mu, \\gamma^\\nu\\} = 2 g^{\\mu\\nu} I$, prove:
<ol type="a">
  <li>$\\operatorname{Tr}(\\gamma^\\mu) = 0$ for all $\\mu = 0, 1, 2, 3$.</li>
  <li>$(\\gamma^0)^2 = I$ and $(\\gamma^i)^2 = -I$ for $i = 1, 2, 3$.</li>
  <li>$\\operatorname{Tr}(\\gamma^\\mu \\gamma^\\nu) = 4 g^{\\mu\\nu}$.</li>
</ol>`,
    solution: `<b>(a) Tracelessness:</b><br>
Consider $\\gamma^5 \\equiv i \\gamma^0 \\gamma^1 \\gamma^2 \\gamma^3$, which anticommutes with all $\\gamma^\\mu$: $\\gamma^\\mu \\gamma^5 + \\gamma^5 \\gamma^\\mu = 0$, and satisfies $(\\gamma^5)^2 = I$.<br>
Using the cyclic property of the trace:
$$\\operatorname{Tr}(\\gamma^\\mu) = \\operatorname{Tr}(\\gamma^\\mu (\\gamma^5)^2) = \\operatorname{Tr}(\\gamma^5 \\gamma^\\mu \\gamma^5) = \\operatorname{Tr}(-\\gamma^\\mu \\gamma^5 \\gamma^5) = -\\operatorname{Tr}(\\gamma^\\mu)$$
$$2\\operatorname{Tr}(\\gamma^\\mu) = 0 \\implies \\operatorname{Tr}(\\gamma^\\mu) = 0$$

<b>(b) Squares of Gamma Matrices:</b><br>
Setting $\\mu = \\nu$ in the Clifford algebra $\\{\\gamma^\\mu, \\gamma^\\mu\\} = 2 (\\gamma^\\mu)^2 = 2 g^{\\mu\\mu} I$:
$$(\\gamma^\\mu)^2 = g^{\\mu\\mu} I$$
In the Minkowski metric signature $(+1, -1, -1, -1)$:
- For $\\mu = 0$: $g^{00} = +1 \\implies (\\gamma^0)^2 = +I$.
- For $\\mu = i \\in \\{1, 2, 3\\}$: $g^{ii} = -1 \\implies (\\gamma^i)^2 = -I$.

<b>(c) Trace of Product of Two Gamma Matrices:</b><br>
From $\\gamma^\\mu \\gamma^\\nu + \\gamma^\\nu \\gamma^\\mu = 2 g^{\\mu\\nu} I$:
Taking the trace of both sides:
$$\\operatorname{Tr}(\\gamma^\\mu \\gamma^\\nu) + \\operatorname{Tr}(\\gamma^\\nu \\gamma^\\mu) = 2 g^{\\mu\\nu} \\operatorname{Tr}(I)$$
Since $\\operatorname{Tr}(\\gamma^\\nu \\gamma^\\mu) = \\operatorname{Tr}(\\gamma^\\mu \\gamma^\\nu)$ by cyclic invariance, and $I$ is the $4 \\times 4$ identity matrix so $\\operatorname{Tr}(I) = 4$:
$$2 \\operatorname{Tr}(\\gamma^\\mu \\gamma^\\nu) = 2 g^{\\mu\\nu} (4) = 8 g^{\\mu\\nu} \\implies \\operatorname{Tr}(\\gamma^\\mu \\gamma^\\nu) = 4 g^{\\mu\\nu}$$`,
    tags: ['dirac equation', 'gamma matrices', 'clifford algebra', 'traces']
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   OBJECTIVE / OMR QUESTIONS (OBJECTIVE array)
   ══════════════════════════════════════════════════════════════════════════ */

OBJECTIVE.push(
  {
    id: 'o.x1.1.1', sec: 'X1.1', course: 'qm_ext', type: 'MCQ', marks: 1, neg: 0.33, time: 90,
    prompt: 'Three identical non-interacting spin-1/2 fermions are placed in a 1D harmonic oscillator potential of frequency $\\omega$. The ground state energy of this three-particle system is:',
    options: [
      { k: 'A', t: '$\\frac{3}{2}\\hbar\\omega$' },
      { k: 'B', t: '$\\frac{5}{2}\\hbar\\omega$' },
      { k: 'C', t: '$\\frac{7}{2}\\hbar\\omega$' },
      { k: 'D', t: '$\\frac{9}{2}\\hbar\\omega$' }
    ],
    answer: 'B',
    solution: `Each 1D harmonic oscillator level has energy $E_n = \\left(n + \\frac{1}{2}\\right)\\hbar\\omega$ ($n = 0, 1, 2, \\dots$).<br>
Because electrons are spin-1/2 fermions, each spatial level can hold at most 2 particles (one spin-up, one spin-down).<br>
- $n = 0$ ground level: holds 2 electrons with energy $2 \\times \\frac{1}{2}\\hbar\\omega = \\hbar\\omega$.<br>
- $n = 1$ first excited level: holds the 3rd electron with energy $1 \\times \\frac{3}{2}\\hbar\\omega = \\frac{3}{2}\\hbar\\omega$.<br>
Total ground state energy:
$$E_0 = \\hbar\\omega + \\frac{3}{2}\\hbar\\omega = \\frac{5}{2}\\hbar\\omega$$`,
    tested: 'Fermionic shell filling and ground state energy in 1D harmonic oscillator',
    trap: 'Putting all 3 fermions in n=0 violates the Pauli exclusion principle (giving 3/2 ħω).',
    twist: 'For bosons, all 3 could occupy n=0 giving ground state energy 3/2 ħω.'
  },
  {
    id: 'o.x2.2.1', sec: 'X2.2', course: 'qm_ext', type: 'MCQ', marks: 1, neg: 0.33, time: 90,
    prompt: 'Under the parity operation $\\Pi$, which of the following physical quantities is an axial vector (pseudovector) that does NOT change sign?',
    options: [
      { k: 'A', t: 'Linear momentum $\\mathbf{p}$' },
      { k: 'B', t: 'Position vector $\\mathbf{r}$' },
      { k: 'C', t: 'Orbital angular momentum $\\mathbf{L} = \\mathbf{r} \\times \\mathbf{p}$' },
      { k: 'D', t: 'Electric dipole moment $\\mathbf{d} = q\\mathbf{r}$' }
    ],
    answer: 'C',
    solution: `Under spatial inversion $\\Pi$:
- Position vector is polar: $\\Pi \\mathbf{r} \\Pi^\\dagger = -\\mathbf{r}$.
- Linear momentum is polar: $\\Pi \\mathbf{p} \\Pi^\\dagger = -\\mathbf{p}$.
- Electric dipole moment is polar: $\\Pi \\mathbf{d} \\Pi^\\dagger = -\\mathbf{d}$.
- Orbital angular momentum: $\\Pi \\mathbf{L} \\Pi^\\dagger = \\Pi (\\mathbf{r} \\times \\mathbf{p}) \\Pi^\\dagger = (-\\mathbf{r}) \\times (-\\mathbf{p}) = +\\mathbf{L}$.<br>
Because the two negative signs cancel, angular momentum is an axial vector (pseudovector) and is even under parity.`,
    tested: 'Parity transformation properties of polar vs axial vectors',
    trap: 'Assuming all vectors change sign under coordinate inversion.',
    twist: 'Magnetic field B is also an axial vector: Π B Π† = +B.'
  },
  {
    id: 'o.x2.2.2', sec: 'X2.2', course: 'qm_ext', type: 'MCQ', marks: 1, neg: 0.33, time: 90,
    prompt: 'Kramers degeneracy guarantees that every energy level of a time-reversal symmetric system with an odd number of half-integer spin fermions is at least doubly degenerate. Which external field can LIFT this degeneracy?',
    options: [
      { k: 'A', t: 'A non-uniform static electric field' },
      { k: 'B', t: 'A uniform static magnetic field' },
      { k: 'C', t: 'A spherically symmetric Coulomb potential' },
      { k: 'D', t: 'A crystal electrostatic field' }
    ],
    answer: 'B',
    solution: `Kramers degeneracy relies on time-reversal symmetry $[\\Theta, H] = 0$.<br>
- Static electric fields and scalar potentials $\\Phi(\\mathbf{r})$ are even under time reversal ($\\Theta \\Phi \\Theta^{-1} = +\\Phi$), so they preserve $[\\Theta, H] = 0$ and cannot lift the degeneracy.<br>
- A magnetic field $\\mathbf{B}$ changes sign under time reversal ($\\Theta \\mathbf{B} \\Theta^{-1} = -\\mathbf{B}$). Coupling to the magnetic field via $-\\boldsymbol{\\mu} \\cdot \\mathbf{B}$ explicitly breaks time-reversal symmetry, lifting Kramers degeneracy through the Zeeman effect.`,
    tested: 'Kramers degeneracy conditions and symmetry breaking',
    trap: 'Selecting non-uniform electric field thinking asymmetry lifts all degeneracies.',
    twist: 'No electrostatic configuration, no matter how asymmetric, can ever lift Kramers degeneracy.'
  },
  {
    id: 'o.x3.1.1', sec: 'X3.1', course: 'qm_ext', type: 'MCQ', marks: 1, neg: 0.33, time: 90,
    prompt: 'A two-level system with energy gap $\\hbar\\omega_0$ is driven by a resonant field (detuning $\\Delta = 0$) with Rabi frequency $\\Omega_0$. If the system starts in the ground state at $t = 0$, the probability of finding it in the excited state at time $t = \\frac{\\pi}{2\\Omega_0}$ is:',
    options: [
      { k: 'A', t: '0' },
      { k: 'B', t: '1/4' },
      { k: 'C', t: '1/2' },
      { k: 'D', t: '1' }
    ],
    answer: 'C',
    solution: `On resonance, the transition probability is:
$$P(t) = \\sin^2\\left( \\frac{\\Omega_0 t}{2} \\right)$$
At time $t = \\frac{\\pi}{2\\Omega_0}$:
$$\\frac{\\Omega_0 t}{2} = \\frac{\\Omega_0}{2} \\frac{\\pi}{2\\Omega_0} = \\frac{\\pi}{4}$$
$$P\\left(\\frac{\\pi}{2\\Omega_0}\\right) = \\sin^2\\left(\\frac{\\pi}{4}\\right) = \\left(\\frac{1}{\\sqrt{2}}\\right)^2 = \\frac{1}{2}$$
This corresponds to a $\\pi/2$-pulse that creates an equal superposition of ground and excited states.`,
    tested: 'Rabi oscillation probability and π/2 pulse duration',
    trap: 'Confusing a π-pulse (t = π/Ω₀, P = 1) with a π/2-pulse (t = π/(2Ω₀), P = 1/2).',
    twist: 'At t = π/Ω₀, probability is 1 (complete inversion).'
  },
  {
    id: 'o.x4.1.1', sec: 'X4.1', course: 'qm_ext', type: 'MCQ', marks: 1, neg: 0.33, time: 90,
    prompt: 'The maximal possible value of the Bell-CHSH parameter $|S|$ in quantum mechanics (Tsirelson\'s bound) is:',
    options: [
      { k: 'A', t: '2' },
      { k: 'B', t: '$2\\sqrt{2}$' },
      { k: 'C', t: '3' },
      { k: 'D', t: '4' }
    ],
    answer: 'B',
    solution: `For any local hidden variable (classical) theory: $|S| \\le 2$.<br>
In quantum mechanics, the maximum achievable value is the Tsirelson bound:
$$|S|_{\\max} = 2\\sqrt{2} \\approx 2.828$$
Although algebraically each of the four correlations could lie in $[-1, 1]$ allowing $|S| \\le 4$, quantum unitarity and operator anticommutation constrain the quantum maximum strictly to $2\\sqrt{2}$.`,
    tested: 'Tsirelson bound for quantum Bell-CHSH inequality violation',
    trap: 'Selecting 2 (the classical bound) or 4 (the algebraic maximum).',
    twist: 'Generalized probability theories (PR boxes) can reach the algebraic maximum of 4 without violating relativistic no-signaling.'
  },
  {
    id: 'o.x4.2.1', sec: 'X4.2', course: 'qm_ext', type: 'NAT', marks: 1, neg: 0, time: 90,
    prompt: 'A system is in a statistical mixture described by the density matrix $\\rho = \\frac{1}{4}\\begin{pmatrix} 3 & 0 \\\\ 0 & 1 \\end{pmatrix}$. Calculate the purity parameter $\\operatorname{Tr}(\\rho^2)$ as a decimal.',
    answer: '0.625',
    solution: `The density matrix is:
$$\\rho = \\begin{pmatrix} 3/4 & 0 \\\\ 0 & 1/4 \\end{pmatrix}$$
Squaring the diagonal matrix:
$$\\rho^2 = \\begin{pmatrix} (3/4)^2 & 0 \\\\ 0 & (1/4)^2 \\end{pmatrix} = \\begin{pmatrix} 9/16 & 0 \\\\ 0 & 1/16 \\end{pmatrix}$$
The purity is the trace of $\\rho^2$:
$$\\operatorname{Tr}(\\rho^2) = \\frac{9}{16} + \\frac{1}{16} = \\frac{10}{16} = \\frac{5}{8} = 0.625$$
Since $\\operatorname{Tr}(\\rho^2) = 0.625 < 1$, this confirms the state is mixed.`,
    tested: 'Purity calculation for a density matrix',
    trap: 'Taking the trace of ρ instead of ρ² (trace of ρ is always 1).',
    twist: 'For a completely mixed 2-level state ρ = I/2, Tr(ρ²) = 0.5; for a pure state, Tr(ρ²) = 1.'
  },
  {
    id: 'o.x5.1.1', sec: 'X5.1', course: 'qm_ext', type: 'MCQ', marks: 1, neg: 0.33, time: 90,
    prompt: 'The Klein-Gordon equation can produce negative values for its conserved density $\\rho$ primarily because:',
    options: [
      { k: 'A', t: 'It contains imaginary coefficients in spatial derivatives' },
      { k: 'B', t: 'It is second order in time derivatives, allowing $\\psi$ and $\\partial\\psi/\\partial t$ to be chosen independently' },
      { k: 'C', t: 'It uses $4\\times 4$ matrices with negative traces' },
      { k: 'D', t: 'It violates Lorentz covariance' },
    ],
    answer: 'B',
    solution: `The Klein-Gordon conserved density is:
$$\\rho = \\frac{i\\hbar}{2mc^2}\\left( \\psi^* \\frac{\\partial\\psi}{\\partial t} - \\psi \\frac{\\partial\\psi^*}{\\partial t} \\right)$$
Because the Klein-Gordon equation is second order in time ($\\partial^2\\psi/\\partial t^2$), initial conditions require specifying both $\\psi(\\mathbf{r}, 0)$ and its time derivative $\\dot{\\psi}(\\mathbf{r}, 0)$ independently. For negative energy plane wave solutions $\\psi \\propto e^{+iEt/\\hbar}$, the time derivative introduces a negative sign, making $\\rho < 0$.`,
    tested: 'Origin of indefinite probability density in Klein-Gordon equation',
    trap: 'Selecting C: Klein-Gordon uses scalar wavefunctions, not 4×4 matrices (Dirac uses 4×4 matrices).',
    twist: 'Dirac resolved this by formulating an equation first order in time.'
  },
  {
    id: 'o.x5.2.1', sec: 'X5.2', course: 'qm_ext', type: 'NAT', marks: 1, neg: 0, time: 90,
    prompt: 'The gyromagnetic ratio $g$ of the electron predicted directly by the non-relativistic limit of the Dirac equation is:',
    answer: '2',
    solution: `Non-relativistic expansion of the Dirac equation in an external electromagnetic field yields the Pauli equation with the magnetic Zeeman coupling term:
$$H_Z = -\\boldsymbol{\\mu} \\cdot \\mathbf{B} = +\\frac{e\\hbar}{2m} \\boldsymbol{\\sigma} \\cdot \\mathbf{B} = +2 \\frac{e}{2m} \\mathbf{S} \\cdot \\mathbf{B}$$
Comparing with the definition $\\boldsymbol{\\mu} = -g \\frac{e}{2m}\\mathbf{S}$ yields $g = 2$ exactly.`,
    tested: 'Theoretical gyromagnetic ratio of the electron from the Dirac equation',
    trap: 'Writing 1 (the classical orbital value).',
    twist: 'QED radiative corrections add the anomalous magnetic moment, giving g ≈ 2.0023.'
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module III: Approximation Methods
   Prescribed Syllabus: PHY7CJ401 (VII Semester BSc Physics Honours, Calicut University)
   Textbooks: David J. Griffiths 3e (Chapters 7, 8, 9)
              & Nouredine Zettili 2e (Chapters 8, 9)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 7.1 Time-Independent Perturbation Theory (Non-Degenerate) ─────────── */
  {
    id: 'c.7.1.1', sec: '7.1', kind: 'law', tier: 'core',
    title: 'Non-Degenerate Perturbation Theory: First-Order Energy Correction',
    oneLine: 'In non-degenerate perturbation theory Ĥ = Ĥ₀ + λĤ\', the first-order energy shift is the expectation value of the perturbation in the unperturbed state E_n^{(1)} = ⟨n^{(0)}|Ĥ\'|n^{(0)}⟩.',
    statement: `When a quantum system with known exactly solvable Hamiltonian $\\hat{H}_0$ ($H_0|n^{(0)}\\rangle = E_n^{(0)}|n^{(0)}\\rangle$) is subjected to a weak perturbation $\\hat{H}'$:
$$\\boxed{\\hat{H} = \\hat{H}_0 + \\lambda \\hat{H}'}$$
where $\\lambda \\in [0, 1]$ is a dimensionless expansion parameter. Expanding eigenvalues and eigenstates in a Taylor perturbation series:
$$E_n = E_n^{(0)} + \\lambda E_n^{(1)} + \\lambda^2 E_n^{(2)} + \\dots$$
$$|n\\rangle = |n^{(0)}\\rangle + \\lambda |n^{(1)}\\rangle + \\lambda^2 |n^{(2)}\\rangle + \\dots$$
Assuming the unperturbed level $E_n^{(0)}$ is <b>non-degenerate</b>, equating terms of order $\\mathcal{O}(\\lambda^1)$ yields:
$$\\boxed{E_n^{(1)} = \\langle n^{(0)} | \\hat{H}' | n^{(0)} \\rangle}$$
<b>First-Order Total Energy:</b>
$$E_n \\approx E_n^{(0)} + \\langle n^{(0)} | \\hat{H}' | n^{(0)} \\rangle$$`,
    intuition: `Notice how intuitive this is: to first order, a small perturbation doesn't change what the wave function looks like; it simply evaluates how much extra potential or kinetic energy that unperturbed state feels on average! If $\\hat{H}'$ is positive in the region where $|\\psi_n^{(0)}|^2$ is concentrated, the energy shifts up; if negative, it shifts down.`,
    needs: ['c.2.1.1', 'c.3.1.2'],
    traps: [
      `Applying this formula to a degenerate energy level without checking that off-diagonal elements vanish. If $E_n^{(0)}$ is degenerate, degenerate perturbation theory must be used!`,
      `Forgetting that the state $|n^{(0)}\\rangle$ must be normalized: if $\\langle n^{(0)}|n^{(0)}\\rangle \\neq 1$, divide by the norm.`
    ],
    cards: [
      { q: 'State the formula for the first-order energy correction in non-degenerate perturbation theory.', a: '$E_n^{(1)} = \\langle n^{(0)}|\\hat{H}\'|n^{(0)}\\rangle$.', kind: 'state' },
      { q: 'Under what condition does the first-order energy correction vanish identically?', a: 'When the perturbation $\\hat{H}\'$ has odd parity and the unperturbed state has definite spatial parity, or when $\\langle n^{(0)}|\\hat{H}\'|n^{(0)}\\rangle = 0$ by selection rules.', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.1.2', sec: '7.1', kind: 'theorem', tier: 'core',
    title: 'First-Order State Correction & Second-Order Energy Shift (Level Repulsion)',
    oneLine: 'The second-order energy correction E_n^{(2)} = ∑_{m≠n} |⟨m^{(0)}|Ĥ\'|n^{(0)}⟩|² / (E_n^{(0)} - E_m^{(0)}) causes quantum level repulsion and always lowers the ground state energy.',
    statement: `Expanding the first-order state correction in the complete unperturbed basis $|n^{(1)}\\rangle = \\sum_{m \\neq n} c_m^{(n)}|m^{(0)}\\rangle$ yields:
$$\\boxed{|n^{(1)}\\rangle = \\sum_{m \\neq n} \\frac{\\langle m^{(0)} | \\hat{H}' | n^{(0)} \\rangle}{E_n^{(0)} - E_m^{(0)}} |m^{(0)}\\rangle}$$
The corresponding <b>second-order energy correction</b> is:
$$\\boxed{E_n^{(2)} = \\sum_{m \\neq n} \\frac{|\\langle m^{(0)} | \\hat{H}' | n^{(0)} \\rangle|^2}{E_n^{(0)} - E_m^{(0)}}}$$
<b>Fundamental Theorems:</b>
<ol>
  <li><b>Ground State Lowering Theorem:</b> For the ground state ($n = 0$), $E_0^{(0)} < E_m^{(0)}$ for all $m \\neq 0$. Therefore, every denominator is negative:
  $$\\boxed{E_0^{(2)} \\le 0}$$
  The second-order correction to the ground state energy is <i>always negative or zero</i>!</li>
  <li><b>Quantum Level Repulsion:</b> In any two-level subspace, the perturbation pushes the higher energy level further up and the lower energy level further down.</li>
</ol>`,
    intuition: `Why does the ground state always get pushed down? Because the perturbation allows the ground state to mix with higher excited states $|m^{(0)}\\rangle$, and quantum systems always use additional degrees of freedom to relax to a lower energy state (just like polarization lowering electrostatic energy). Higher states repel each other: nearby levels push apart with an energy inversely proportional to their energy separation!`,
    needs: ['c.7.1.1', 'c.3.6.1'],
    traps: [
      `Including the $m = n$ term in the sum. The term $m = n$ is strictly excluded because the denominator $E_n^{(0)} - E_n^{(0)} = 0$ would divide by zero!`,
      `Forgetting that the numerator is the absolute square $|\\langle m^{(0)}|\\hat{H}'|n^{(0)}\\rangle|^2$, which is strictly non-negative.`
    ],
    cards: [
      { q: 'What is the sign of the second-order energy correction E₀^{(2)} to the ground state of any quantum system?', a: 'Always non-positive: $E_0^{(2)} \\le 0$.', kind: 'recall' },
      { q: 'State the formula for the second-order energy correction E_n^{(2)}.', a: '$E_n^{(2)} = \\sum_{m \\neq n} \\frac{|\\langle m^{(0)}|\\hat{H}\'|n^{(0)}\\rangle|^2}{E_n^{(0)} - E_m^{(0)}}$.', kind: 'state' }
    ]
  },
  {
    id: 'c.7.1.3', sec: '7.1', kind: 'law', tier: 'core',
    title: 'Validity Criterion for Perturbation Theory',
    oneLine: 'Perturbation theory converges only when the matrix elements of Ĥ\' are much smaller than the unperturbed energy level spacings: |⟨m|Ĥ\'|n⟩| ≪ |E_n^{(0)} - E_m^{(0)}|.',
    statement: `For non-degenerate perturbation theory to be reliable and convergent, the perturbation must be small compared to the energy gaps between unperturbed states:
$$\\boxed{|\\langle m^{(0)} | \\hat{H}' | n^{(0)} \\rangle| \\ll |E_n^{(0)} - E_m^{(0)}| \\quad \\forall m \\neq n}$$
<b>Consequences of Breakdown:</b>
- If two states have identical unperturbed energies ($E_n^{(0)} = E_m^{(0)}$), the denominator vanishes and the non-degenerate formula diverges catastrophically to $\\infty$.
- In this regime, even an infinitesimally weak perturbation strongly mixes the states, requiring <b>degenerate perturbation theory</b>.`,
    intuition: `Think of a harmonic oscillator versus a free particle: in a harmonic oscillator, levels are spaced by $\\hbar\\omega$, so a perturbation small compared to $\\hbar\\omega$ converges nicely. But in a continuum or for degenerate states where $\\Delta E = 0$, states can mix arbitrarily easily. The ratio of perturbation matrix element to energy spacing is the true measure of "smallness" in quantum mechanics.`,
    needs: ['c.7.1.2'],
    traps: [
      `Assuming a perturbation is "small" simply because its numerical value is small. If the unperturbed energy gap $\\Delta E$ is even smaller, perturbation theory fails!`,
      `Using non-degenerate formulas for closely spaced near-degenerate levels (quasidegenerate perturbation theory is required).`
    ],
    cards: [
      { q: 'What is the mathematical condition for the validity of non-degenerate perturbation theory?', a: '$|\\langle m^{(0)}|\\hat{H}\'|n^{(0)}\\rangle| \\ll |E_n^{(0)} - E_m^{(0)}|$ for all $m \\neq n$.', kind: 'recall' },
      { q: 'What happens to the second-order perturbation formula when two unperturbed states are degenerate?', a: 'The denominator vanishes ($E_n^{(0)} - E_m^{(0)} = 0$), causing the formula to diverge.', kind: 'recall' }
    ]
  },

  /* ── 7.2 Degenerate Perturbation Theory, Fine Structure & Zeeman Effect ─── */
  {
    id: 'c.7.2.1', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Degenerate Perturbation Theory & The Secular Equation',
    oneLine: 'For a d-fold degenerate level, the first-order energy corrections are the eigenvalues of the d × d perturbation matrix W_ij = ⟨i|Ĥ\'|j⟩ found via det(W - E^{(1)}I) = 0.',
    statement: `Let $\{|\\psi_1^{(0)}\\rangle, |\\psi_2^{(0)}\\rangle, \\dots, |\\psi_d^{(0)}\\rangle\}$ span a $d$-fold degenerate subspace with common unperturbed energy $E_0$.<br>
Construct the $d \\times d$ <b>perturbation matrix</b> $W$:
$$W_{ij} = \\langle \\psi_i^{(0)} | \\hat{H}' | \\psi_j^{(0)} \\rangle$$
The first-order energy corrections $E^{(1)}$ are the roots of the <b>secular equation</b>:
$$\\boxed{\\det\\left( W - E^{(1)} I \\right) = 0}$$
<b>Two-Fold Degeneracy ($d = 2$):</b>
$$\\begin{vmatrix} W_{11} - E^{(1)} & W_{12} \\\\ W_{21} & W_{22} - E^{(1)} \\end{vmatrix} = 0$$
$$\\boxed{E_\\pm^{(1)} = \\frac{W_{11} + W_{22}}{2} \\pm \\sqrt{\\left( \\frac{W_{11} - W_{22}}{2} \\right)^2 + |W_{12}|^2}}$$
<b>Lifting the Degeneracy:</b>
If $E_+^{(1)} \\neq E_-^{(1)}$, the perturbation completely lifts the degeneracy, splitting the level into distinct observable states.`,
    intuition: `Degenerate perturbation theory is simply matrix diagonalization in the degenerate subspace! Because the unperturbed Hamiltonian has no preferred direction inside a degenerate subspace (all states have the same energy), the perturbation $\\hat{H}'$ selects the unique "good" basis vectors that diagonalize it.`,
    needs: ['c.7.1.3', 'c.3.6.1'],
    traps: [
      `Attempting to use non-degenerate formulas inside a degenerate subspace. Always diagonalize the secular matrix $W$ first!`,
      `Thinking the degeneracy is always lifted. If $W$ is proportional to the identity matrix ($W = cI$), all eigenvalues are identical and the degeneracy remains unbroken to first order.`
    ],
    cards: [
      { q: 'State the secular equation for first-order degenerate perturbation theory.', a: '$\\det(W_{ij} - E^{(1)}\\delta_{ij}) = 0$, where $W_{ij} = \\langle \\psi_i^{(0)}|\\hat{H}\'|\\psi_j^{(0)}\\rangle$.', kind: 'state' },
      { q: 'For a 2-fold degenerate state with W₁₁ = W₂₂ = 0 and W₁₂ = V, what are the first-order energy shifts?', a: '$E_\\pm^{(1)} = \\pm |V|$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.2.2', sec: '7.2', kind: 'law', tier: 'core',
    title: 'Fine Structure of Hydrogen: Relativistic Correction & Spin-Orbit Coupling',
    oneLine: 'Fine structure combines relativistic kinetic correction H_rel and spin-orbit coupling H_SO, shifting hydrogen levels by E_FS^{(1)} = (E_n²/2mc²)[3 - 4n/(j + ½)].',
    statement: `The <b>fine structure</b> of hydrogen ($E_{\\text{FS}} \\sim \\alpha^2 |E_n| \\sim 10^{-4} |E_n|$) consists of two relativistic corrections:
$$\\hat{H}_{\\text{FS}} = \\hat{H}_{\\text{rel}} + \\hat{H}_{\\text{SO}}$$
<ol>
  <li><b>Relativistic Kinetic Correction:</b>
  $$\\hat{H}_{\\text{rel}} = -\\frac{\\hat{p}^4}{8m^3 c^2} \\implies E_{\\text{rel}}^{(1)} = -\\frac{E_n^2}{2mc^2}\\left[ \\frac{4n}{l + 1/2} - 3 \\right]$$</li>
  <li><b>Spin-Orbit Interaction:</b>
  $$\\hat{H}_{\\text{SO}} = \\frac{e^2}{8\\pi\\varepsilon_0 m^2 c^2 r^3}\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} \\implies E_{\\text{SO}}^{(1)} = \\frac{E_n^2}{2mc^2} \\frac{n [j(j+1) - l(l+1) - 3/4]}{l(l+1/2)(l+1)}$$</li>
</ol>
<b>Total Fine Structure Energy Shift:</b>
Remarkably, the $l$-dependent terms cancel identically, leaving an energy shift that depends solely on $n$ and the total angular momentum $j = l \\pm 1/2$:
$$\\boxed{E_{\\text{FS}}^{(1)} = \\frac{E_n^2}{2mc^2}\\left( 3 - \\frac{4n}{j + 1/2} \\right) = \\frac{|E_1| \\alpha^2}{n^3}\\left( \\frac{3}{4n} - \\frac{1}{j + 1/2} \\right)}$$
where $\\alpha = \\frac{e^2}{4\\pi\\varepsilon_0 \\hbar c} \\approx \\frac{1}{137.036}$ is the <b>fine-structure constant</b>.`,
    intuition: `Notice this profound symmetry: fine structure lifts the accidental degeneracy between different $l$ values, but states with the SAME $j$ (like $2s_{1/2}$ with $l=0, j=1/2$ and $2p_{1/2}$ with $l=1, j=1/2$) remain exactly degenerate in Dirac theory! This residual degeneracy between $2s_{1/2}$ and $2p_{1/2}$ is only lifted by quantum electrodynamic vacuum fluctuations (the Lamb shift, $\\approx 1058\\text{ MHz}$).`,
    needs: ['c.5.4.3', 'c.6.5.5'],
    traps: [
      `Thinking fine structure shift depends on $l$. In the Dirac theory of hydrogen, the fine structure energy depends ONLY on $n$ and $j$, NOT on $l$.`,
      `Sign error: $E_{\\text{FS}}^{(1)}$ is strictly negative for all physical states ($j + 1/2 \\le n$), lowering all energy levels.`
    ],
    cards: [
      { q: 'What two physical effects make up the fine structure of the hydrogen atom?', a: '1. Relativistic kinetic energy correction ($\\hat{H}_{\\text{rel}} = -p^4/(8m^3 c^2)$), and 2. Spin-orbit coupling ($\\hat{H}_{\\text{SO}} \\propto \\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}$).', kind: 'recall' },
      { q: 'Do 2s_{1/2} and 2p_{1/2} states of hydrogen have different energies in Dirac fine structure theory?', a: 'No, they have identical energy because both have $n=2, j=1/2$. (Their splitting is the Lamb shift).', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.2.3', sec: '7.2', kind: 'law', tier: 'core',
    title: 'The Zeeman Effect: Weak-Field vs Strong-Field (Paschen-Back) Regimes',
    oneLine: 'In a magnetic field B, the Zeeman Hamiltonian Ĥ_Z = (μ_B/ħ)(L̂ + 2Ŝ) · B splits levels into Landé multiplets (weak field) or uncoupled Paschen-Back states (strong field).',
    statement: `When an atom is placed in a uniform external magnetic field $\\mathbf{B} = B \\hat{\\mathbf{z}}$, the interaction Hamiltonian is:
$$\\boxed{\\hat{H}_Z = -(\\boldsymbol{\\mu}_L + \\boldsymbol{\\mu}_S) \\cdot \\mathbf{B} = \\frac{\\mu_B}{\\hbar}(\\hat{L}_z + 2\\hat{S}_z)B}$$
where $\\mu_B = \\frac{e\\hbar}{2m}$ is the Bohr magneton.<br>
<b>1. Weak-Field Zeeman Effect ($B \\ll B_{\\text{int}} \\sim 1\\text{ Tesla}$, $\\mu_B B \\ll E_{\\text{FS}}$):</b>
Fine structure dominates; $j$ and $m_j$ remain good quantum numbers.<br>
Using the projection theorem, $\\langle \\hat{L}_z + 2\\hat{S}_z \\rangle = g_J \\langle \\hat{J}_z \\rangle$, where $g_J$ is the <b>Landé g-factor</b>:
$$\\boxed{g_J = 1 + \\frac{j(j+1) - l(l+1) + s(s+1)}{2j(j+1)}}$$
The energy shift is linear in $m_j$:
$$\\boxed{E_Z^{(1)} = g_J \\mu_B B m_j, \\qquad m_j = -j, -j+1, \\dots, +j}$$
<b>2. Strong-Field Zeeman Effect / Paschen-Back Effect ($B \\gg B_{\\text{int}}$, $\\mu_B B \\gg E_{\\text{FS}}$):</b>
The external field overwhelms the internal spin-orbit coupling, uncoupling $\\mathbf{L}$ and $\\mathbf{S}$. Good quantum numbers are $m_l$ and $m_s$:
$$\\boxed{E_Z^{(1)} = \\mu_B B (m_l + 2m_s)}$$`,
    intuition: `This shows how the symmetry of the environment dictates the choice of quantum basis:
- Weak field: internal spin-orbit torque is stronger than external field $\\implies$ spins stay locked together into $\\mathbf{J} = \\mathbf{L} + \\mathbf{S}$ (coupled basis $|j, m_j\\rangle$).
- Strong field: external magnetic field rips $\\mathbf{L}$ and $\\mathbf{S}$ apart, making them precess independently around $\\mathbf{B}$ (uncoupled basis $|m_l, m_s\\rangle$).`,
    needs: ['c.7.2.2', 'c.6.5.1'],
    traps: [
      `Using the Landé $g$-factor in the strong-field regime. Landé $g_J$ is only valid when $j$ is a good quantum number (weak field).`,
      `Forgetting the factor of $2$ for spin: $\\hat{\\mathbf{L}} + 2\\hat{\\mathbf{S}}$, NOT $\\hat{\\mathbf{L}} + \\hat{\\mathbf{S}}$.`
    ],
    cards: [
      { q: 'State the Landé g-factor formula for a state with quantum numbers (j, l, s).', a: '$g_J = 1 + \\frac{j(j+1) - l(l+1) + s(s+1)}{2j(j+1)}$.', kind: 'state' },
      { q: 'What is the energy shift in the strong-field Paschen-Back effect in terms of ml and ms?', a: '$\\Delta E = \\mu_B B (m_l + 2m_s)$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.2.4', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'The Stark Effect: Linear vs Quadratic Splitting in Hydrogen',
    oneLine: 'The Stark perturbation Ĥ\' = eEz causes no first-order shift for non-degenerate states like 1s (quadratic Stark), but produces a linear Stark splitting in the degenerate n=2 manifold.',
    statement: `When an atom is placed in a uniform electric field $\\mathbf{E} = \\mathcal{E}\\hat{\\mathbf{z}}$, the perturbation is:
$$\\hat{H}' = -\\mathbf{d} \\cdot \\mathbf{E} = e \\mathcal{E} z = e \\mathcal{E} r\\cos\\theta$$
<b>1. The Parity Theorem & Quadratic Stark Effect:</b>
Because $z$ is odd under spatial parity ($\\hat{\\Pi} z \\hat{\\Pi}^{-1} = -z$), its diagonal matrix element in any state of definite parity vanishes identically:
$$\\langle n^{(0)} | z | n^{(0)} \\rangle = 0$$
Therefore, for non-degenerate states (such as the ground state $1s$ of hydrogen), there is <b>no linear Stark effect</b>:
$$E_{1s}^{(1)} = 0, \\qquad E_{1s} \\approx E_1^{(0)} - \\frac{1}{2}\\alpha_{\\text{pol}} \\mathcal{E}^2 \\quad (\\text{Quadratic Stark Effect})$$
where $\\alpha_{\\text{pol}} = \\frac{9}{2}\\left(\\frac{4\\pi\\varepsilon_0 a_0^3}{e^2}\\right)$ is the atomic polarizability.<br>
<b>2. Linear Stark Effect in the $n = 2$ Manifold:</b>
The unperturbed $n=2$ level is 4-fold degenerate ($\\{|2s\\rangle, |2p_0\\rangle, |2p_1\\rangle, |2p_{-1}\\rangle\\}$).<br>
Matrix elements between states of <i>opposite parity</i> ($2s$ and $2p_0$) do NOT vanish:
$$\\langle 2s | z | 2p_0 \\rangle = -3 a_0$$
The secular equation splits the $n=2$ level into 3 distinct sub-levels:
$$\\boxed{E^{(1)} = \\pm 3 e \\mathcal{E} a_0 \\quad (\\text{two non-degenerate states}), \\qquad E^{(1)} = 0 \\quad (\\text{two-fold degenerate})}$$`,
    intuition: `Why does $n=2$ have a linear Stark effect while $1s$ does not? Because $n=2$ has accidental degeneracy between states of opposite parity ($2s$, even parity and $2p_0$, odd parity). The electric field mixes them into polarized hybrid orbitals $\\frac{|2s\\rangle \\pm |2p_0\\rangle}{\\sqrt{2}}$ that possess a permanent electric dipole moment! The ground state $1s$ has no degenerate partner of opposite parity, so it can only acquire an induced dipole moment proportional to $\\mathcal{E}$, yielding a quadratic shift $\\propto \\mathcal{E}^2$.`,
    needs: ['c.7.2.1', 'c.5.2.3'],
    traps: [
      `Expecting a linear Stark effect for states with definite parity that are non-degenerate. Linear Stark effect requires degenerate states of opposite parity!`,
      `Thinking all four $n=2$ states split symmetrically. Only $|2s\\rangle$ and $|2p_0\\rangle$ mix; the states $|2p_{\\pm 1}\\rangle$ have $m = \\pm 1$ and cannot mix with $m = 0$, so their first-order shifts are strictly zero.`
    ],
    cards: [
      { q: 'Why is the first-order Stark effect zero for the ground state of hydrogen?', a: 'Because the perturbation $z$ is odd under parity, so its expectation value in any state of definite parity vanishes: $\\langle 1s|z|1s\\rangle = 0$.', kind: 'recall' },
      { q: 'What is the first-order energy splitting of the n=2 states of hydrogen in an electric field E?', a: '$\\Delta E = \\pm 3 e \\mathcal{E} a_0$ (with two unshifted states at $\\Delta E = 0$).', kind: 'recall' }
    ]
  },

  /* ── 7.3 The Variational Method ─────────────────────────────────────────── */
  {
    id: 'c.7.3.1', sec: '7.3', kind: 'law', tier: 'core',
    title: 'The Variational Principle: Upper Bound to Ground State Energy',
    oneLine: 'For any normalizable trial wavefunction ψ_trial, the energy expectation value provides a rigorous upper bound to the true ground state energy: ⟨Ĥ⟩ ≥ E_gs.',
    statement: `Let $\\hat{H}$ be a time-independent Hamiltonian with true ground state energy $E_{\\text{gs}}$. For <i>any</i> arbitrary normalizable trial wave function $|\\psi_{\\text{trial}}\\rangle$:
$$\\boxed{\\langle H \\rangle_{\\text{trial}} = \\frac{\\langle \\psi_{\\text{trial}} | \\hat{H} | \\psi_{\\text{trial}} \\rangle}{\\langle \\psi_{\\text{trial}} | \\psi_{\\text{trial}} \\rangle} \\ge E_{\\text{gs}}}$$
The equality holds if and only if $|\\psi_{\\text{trial}}\\rangle$ is an exact ground state eigenstate.<br>
<b>Ritz Variational Method:</b>
Introduce adjustable variational parameters $\\alpha_1, \\alpha_2, \\dots, \\alpha_k$ into $\\psi_{\\text{trial}}(\\mathbf{r}; \\alpha_1, \\dots, \\alpha_k)$.<br>
Minimize $\\langle H \\rangle(\\alpha_1, \\dots, \\alpha_k)$ with respect to each parameter:
$$\\boxed{\\frac{\\partial \\langle H \\rangle}{\\partial \\alpha_i} = 0 \\quad \\forall i = 1, \\dots, k}$$
The optimal parameters $\\alpha_i^*$ yield the tightest upper bound $\\langle H \\rangle_{\\text{min}} \\ge E_{\\text{gs}}$.`,
    intuition: `The variational method is the most powerful numerical tool in quantum chemistry and condensed matter physics! Even if you have no idea how to solve the Schrödinger equation analytically (like multi-electron molecules or nuclei), you can guess an intelligent physical trial function with a few parameters, minimize the energy, and guarantee with mathematical certainty that the true energy lies below your calculated value.`,
    needs: ['c.2.1.1', 'c.3.1.2'],
    traps: [
      `Assuming $\\langle H \\rangle \\le E_{\\text{gs}}$. It is ALWAYS an UPPER bound: $\\langle H \\rangle \\ge E_{\\text{gs}}$, never a lower bound!`,
      `Using an unnormalized trial function without dividing by $\\langle \\psi | \\psi \\rangle$. If $\\psi$ is not normalized, $\\frac{\\langle \\psi|H|\\psi\\rangle}{\\langle \\psi|\\psi\\rangle}$ is mandatory.`
    ],
    proof: {
      idea: 'Expand ψ_trial in the complete orthonormal eigenbasis of Ĥ and use E_n ≥ E_gs.',
      why: 'Prove that ⟨H⟩ ≥ E_gs for any trial state.',
      rungs: [
        {
          why: 'Expand trial state in exact eigenbasis',
          m: '$$|\\psi_{\\text{trial}}\\rangle = \\sum_n c_n |n\\rangle, \\qquad \\text{with } \\hat{H}|n\\rangle = E_n|n\\rangle$$',
          meaning: 'Every state can be expanded in the complete set of energy eigenstates.',
          label: 'Eigenbasis Expansion',
          math: '|\\psi_{\\text{trial}}\\rangle = \\sum_n c_n |n\\rangle',
          note: 'Completeness.'
        },
        {
          why: 'Compute expectation value ⟨H⟩',
          m: '$$\\langle \\psi_{\\text{trial}} | \\hat{H} | \\psi_{\\text{trial}} \\rangle = \\sum_n |c_n|^2 E_n$$',
          meaning: 'Act with Ĥ on |n⟩ to replace operator by eigenvalue E_n.',
          label: 'Evaluate Energy Expectation',
          math: '\\langle \\psi_{\\text{trial}} | \\hat{H} | \\psi_{\\text{trial}} \\rangle = \\sum_n |c_n|^2 E_n',
          note: 'Operator to eigenvalue.'
        },
        {
          why: 'Use ground state inequality E_n ≥ E_gs',
          m: '$$\\sum_n |c_n|^2 E_n \\ge \\sum_n |c_n|^2 E_{\\text{gs}} = E_{\\text{gs}} \\sum_n |c_n|^2 = E_{\\text{gs}} \\langle \\psi_{\\text{trial}} | \\psi_{\\text{trial}} \\rangle$$',
          meaning: 'Replacing each E_n by the lowest eigenvalue E_gs establishes the lower bound.',
          label: 'Apply Ground State Bound',
          math: '\\sum_n |c_n|^2 E_n \\ge E_{\\text{gs}} \\langle \\psi | \\psi \\rangle',
          note: 'Proved.'
        }
      ]
    },
    cards: [
      { q: 'State the fundamental inequality of the quantum variational principle.', a: '$\\langle H \\rangle = \\frac{\\langle \\psi_{\\text{trial}}|\\hat{H}|\\psi_{\\text{trial}}\\rangle}{\\langle \\psi_{\\text{trial}}|\\psi_{\\text{trial}}\\rangle} \\ge E_{\\text{gs}}$.', kind: 'state' },
      { q: 'Can the variational method ever yield an energy lower than the true ground state energy?', a: 'No, it provides a strict upper bound: $\\langle H \\rangle \\ge E_{\\text{gs}}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.3.2', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Variational Ground State of the Helium Atom & Screening',
    oneLine: 'A variational trial function with effective nuclear charge Z_eff = 2 - 5/16 = 1.6875 accounts for electron-electron shielding and predicts E_He ≈ -77.5 eV (within 2% of experiment).',
    statement: `The Hamiltonian of the neutral <b>Helium atom</b> ($Z = 2$) with two electrons at positions $\\mathbf{r}_1, \\mathbf{r}_2$:
$$\\hat{H} = -\\frac{\\hbar^2}{2m}\\nabla_1^2 - \\frac{\\hbar^2}{2m}\\nabla_2^2 - \\frac{2e^2}{4\\pi\\varepsilon_0 r_1} - \\frac{2e^2}{4\\pi\\varepsilon_0 r_2} + \\frac{e^2}{4\\pi\\varepsilon_0 |\\mathbf{r}_1 - \\mathbf{r}_2|}$$
Without electron repulsion, $E^{(0)} = 2(-13.6 \\times 2^2) = -108.8\\text{ eV}$.<br>
Experimental ground state energy is $E_{\\text{exp}} = -78.975\\text{ eV}$.<br>
<b>Variational Trial Function:</b>
Introduce an effective nuclear charge $Z_{\\text{eff}}$ as the variational parameter, modeling the screening of the nucleus by the other electron:
$$\\psi(\\mathbf{r}_1, \\mathbf{r}_2) = \\frac{Z_{\\text{eff}}^3}{\\pi a_0^3} e^{-Z_{\\text{eff}}(r_1 + r_2)/a_0}$$
Evaluating $\\langle H \\rangle$ as a function of $Z_{\\text{eff}}$:
$$\\langle H \\rangle(Z_{\\text{eff}}) = 2(-13.6\\text{ eV})\\left[ 2 Z_{\\text{eff}} - Z_{\\text{eff}}^2 - \\frac{5}{8}Z_{\\text{eff}} \\right] = -27.2 \\left[ 2 Z_{\\text{eff}} Z - Z_{\\text{eff}}^2 - \\frac{5}{8}Z_{\\text{eff}} \\right]$$
Minimizing with $\\frac{d\\langle H \\rangle}{dZ_{\\text{eff}}} = 0$ for $Z = 2$:
$$\\boxed{Z_{\\text{eff}} = 2 - \\frac{5}{16} = \\frac{27}{16} = 1.6875}$$
$$\\boxed{\\langle H \\rangle_{\\text{min}} = -2\\left( \\frac{27}{16} \\right)^2 (13.6\\text{ eV}) \\approx -77.46 \\text{ eV}}$$
This variational estimate matches the experimental value within $1.9\\%$!`,
    intuition: `Notice the physical meaning of $Z_{\\text{eff}} = 1.6875$: each electron acts as a cloud of negative charge that partially shields the $+2e$ nucleus from the other electron. The effective nuclear charge seen by either electron is not $+2$, but $+1.6875$. The screening constant is precisely $5/16 \\approx 0.3125$.`,
    needs: ['c.7.3.1', 'c.5.4.3'],
    traps: [
      `Setting $Z_{\\text{eff}} = 1$. The second electron does not completely shield an entire nuclear charge; it only shields $5/16$ of a charge!`,
      `Thinking the trial function is an exact eigenstate. It is an approximation; the true wavefunction depends on the interelectronic distance $r_{12} = |\\mathbf{r}_1 - \\mathbf{r}_2|$ explicitly (Hylleraas trial functions).`
    ],
    cards: [
      { q: 'What is the optimal effective nuclear charge Z_eff for the helium ground state in the variational method?', a: '$Z_{\\text{eff}} = 2 - \\frac{5}{16} = \\frac{27}{16} = 1.6875$.', kind: 'recall' },
      { q: 'What physical phenomenon does the reduction of Z from 2 to 1.6875 represent in the helium atom?', a: 'Electron-electron shielding (screening of the nucleus by the other electron).', kind: 'recall' }
    ]
  },

  /* ── 7.4 The WKB Approximation ──────────────────────────────────────────── */
  {
    id: 'c.7.4.1', sec: '7.4', kind: 'law', tier: 'core',
    title: 'The WKB Semiclassical Approximation & Validity Condition',
    oneLine: 'The WKB method approximates wavefunctions when the de Broglie wavelength λ(x) varies slowly compared to distance: |dƛ/dx| = ħm|V\'|/p³ ≪ 1, breaking down at classical turning points.',
    statement: `The <b>WKB (Wentzel-Kramers-Brillouin) approximation</b> applies to the 1D Schrödinger equation $-\\frac{\\hbar^2}{2m}\\frac{d^2\\psi}{dx^2} + V(x)\\psi = E\\psi$ when the potential $V(x)$ is slowly varying compared to the reduced de Broglie wavelength $\\bar{\\lambda}(x) = \\frac{\\hbar}{p(x)}$, where:
$$p(x) \\equiv \\sqrt{2m(E - V(x))}$$
<b>WKB Validity Condition:</b>
$$\\boxed{\\left| \\frac{d\\bar{\\lambda}}{dx} \\right| = \\left| \\frac{d}{dx}\\left( \\frac{\\hbar}{p(x)} \\right) \\right| = \\frac{\\hbar m |V'(x)|}{p(x)^3} \\ll 1}$$
<b>Breakdown at Classical Turning Points:</b>
At any <b>classical turning point</b> $x_0$ where $E = V(x_0)$, the classical momentum vanishes:
$$p(x_0) = 0 \\implies \\bar{\\lambda}(x_0) = \\frac{\\hbar}{p(x_0)} \\to \\infty$$
The validity condition is catastrophically violated at every classical turning point! Special <b>connection formulas</b> using Airy functions are required to link the wavefunctions across turning points.`,
    intuition: `WKB is the quantum optics of matter waves! Just as geometrical ray optics is valid when optical wavelength $\\lambda$ is much smaller than the dimensions of lenses and mirrors, WKB is valid when the quantum de Broglie wavelength is tiny compared to the length scale over which the potential changes. It is the rigorous bridge between quantum wave mechanics and classical Newtonian trajectories ($\hbar \to 0$).`,
    needs: ['c.2.1.1'],
    traps: [
      `Attempting to use WKB for discontinuous potentials (like the finite or infinite square well walls). For sudden steps, $V'(x) \\to \\infty$, violating the WKB condition completely.`,
      `Trusting the WKB solution right at the turning point. The standard WKB amplitude $1/\\sqrt{p(x)} \\to \\infty$ diverges unphysically at turning points.`
    ],
    cards: [
      { q: 'State the validity condition for the WKB approximation in terms of the classical momentum p(x).', a: '$\\left|\\frac{d}{dx}\\left(\\frac{\\hbar}{p(x)}\\right)\\right| = \\frac{\\hbar m |V\'(x)|}{p(x)^3} \\ll 1$.', kind: 'state' },
      { q: 'Why does the standard WKB approximation break down at classical turning points?', a: 'Because $p(x) = 0$ at turning points, causing $\\bar{\\lambda} \\to \\infty$ and the WKB amplitude $1/\\sqrt{p(x)}$ to diverge.', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.4.2', sec: '7.4', kind: 'theorem', tier: 'core',
    title: 'WKB Wavefunctions in Classical and Tunneling Regions',
    oneLine: 'WKB wavefunctions are oscillatory with amplitude 1/√p(x) in classical regions (E > V), and exponentially growing/decaying with amplitude 1/√|p(x)| in tunneling regions (E < V).',
    statement: `<b>1. Classical Allowed Region ($E > V(x)$, $p(x) = \\sqrt{2m(E - V(x))} > 0$):</b>
The wavefunction is oscillatory:
$$\\boxed{\\psi(x) \\approx \\frac{C_1}{\\sqrt{p(x)}} \\exp\\left( \\frac{i}{\\hbar}\\int p(x)dx \\right) + \\frac{C_2}{\\sqrt{p(x)}} \\exp\\left( -\\frac{i}{\\hbar}\\int p(x)dx \\right)}$$
The probability density $|\\psi(x)|^2 \\propto \\frac{1}{p(x)} \\propto \\frac{1}{v(x)}$ matches the classical probability of finding a particle in $dx$, which is inversely proportional to its classical speed $v(x)$!<br>
<b>2. Classically Forbidden / Tunneling Region ($E < V(x)$, $|p(x)| = \\sqrt{2m(V(x) - E)}$):</b>
The momentum is imaginary ($p = i|p|$), yielding real exponential behavior:
$$\\boxed{\\psi(x) \\approx \\frac{D_1}{\\sqrt{|p(x)|}} \\exp\\left( \\frac{1}{\\hbar}\\int |p(x)|dx \\right) + \\frac{D_2}{\\sqrt{|p(x)|}} \\exp\\left( -\\frac{1}{\\hbar}\\int |p(x)|dx \\right)}$$`,
    intuition: `Notice the beautiful classical correspondence of $|\\psi(x)|^2 \\propto 1/p(x)$: a classical pendulum moves fastest at the bottom of its swing ($p$ is large), so it spends the least time there ($P$ is small). Near the turning points, it slows down ($p \\to 0$), so it spends the most time there. The WKB probability density reproduces this classical residence time with absolute precision!`,
    needs: ['c.7.4.1'],
    traps: [
      `Forgetting the $1/\\sqrt{p(x)}$ prefactor. Neglecting this amplitude factor violates probability current conservation.`,
      `Retaining the exponentially growing term in an unbounded tunneling region $x \\to \\infty$. For normalizability, the growing exponential must be discarded.`
    ],
    cards: [
      { q: 'How does the probability density |ψ(x)|² in the classical WKB region depend on classical velocity v(x)?', a: '$|\\psi(x)|^2 \\propto \\frac{1}{p(x)} \\propto \\frac{1}{v(x)}$ (inversely proportional to speed).', kind: 'recall' },
      { q: 'Write the WKB wavefunction in a classically forbidden region E < V(x).', a: '$\\psi(x) \\approx \\frac{C}{\\sqrt{|p(x)|}} \\exp\\left(\\pm \\frac{1}{\\hbar}\\int |p(x)|dx\\right)$.', kind: 'state' }
    ]
  },
  {
    id: 'c.7.4.3', sec: '7.4', kind: 'theorem', tier: 'core',
    title: 'WKB Bound-State Quantization & Phase Shifts',
    oneLine: 'Integrating the classical action between turning points yields quantized energies: ∫_{x₁}^{x₂} p(x)dx = (n - γ)πħ, where γ = ½ for two smooth walls and γ = ¼ for one vertical wall.',
    statement: `Matching WKB wavefunctions across turning points using the Airy function connection formulas yields the <b>WKB Quantization Condition</b> (generalized Bohr-Sommerfeld condition):
$$\\boxed{\\int_{x_1}^{x_2} p(x) \\, dx = \\left( n - \\gamma \\right) \\pi \\hbar, \\qquad n = 1, 2, 3, \\dots}$$
where $x_1, x_2$ are the classical turning points ($E = V(x_1) = V(x_2)$), and the phase parameter $\\gamma$ depends strictly on the boundary walls:
<ol>
  <li><b>Smooth Potential Well (Two Soft Turning Points):</b>
  Both walls are gradual potential slopes (e.g. Harmonic Oscillator, Coulomb):
  $$\\boxed{\\int_{x_1}^{x_2} p(x) \\, dx = \\left( n - \\frac{1}{2} \\right) \\pi \\hbar, \\qquad \\gamma = \\frac{1}{2}}$$
  Each soft reflection incurs a phase loss of $\\pi/4$, totaling $2 \\times \\pi/4 = \\pi/2 = \\frac{1}{2}\\pi$.</li>
  <li><b>One Vertical Rigid Wall, One Soft Slope:</b>
  (e.g. half-harmonic oscillator $V(x) = \\infty$ for $x \\le 0$):
  $$\\boxed{\\int_{0}^{x_2} p(x) \\, dx = \\left( n - \\frac{1}{4} \\right) \\pi \\hbar, \\qquad \\gamma = \\frac{1}{4}}$$
  Vertical wall incurs $\\pi$ phase loss; soft slope incurs $\\pi/4$, totaling $\\frac{3}{4}\\pi = (1 - 1/4)\\pi$.</li>
  <li><b>Two Rigid Vertical Walls (Infinite Square Well):</b>
  $$\\boxed{\\int_{0}^{a} p \\, dx = n \\pi \\hbar, \\qquad \\gamma = 0}$$</li>
</ol>`,
    intuition: `For the harmonic oscillator $V(x) = \\frac{1}{2}m\\omega^2 x^2$, the WKB integral gives $\\int_{-x_0}^{x_0} \\sqrt{2m(E - \\frac{1}{2}m\\omega^2 x^2)} dx = \\frac{\\pi E}{\\omega}$. Setting this equal to $(n - 1/2)\\pi\\hbar$ yields $E_n = (n - 1/2)\\hbar\\omega = (n' + 1/2)\\hbar\\omega$! The WKB approximation reproduces the EXACT quantum harmonic oscillator spectrum, including the zero-point energy!`,
    needs: ['c.7.4.2'],
    traps: [
      `Using $n - 1/2$ for a potential with a rigid wall. A vertical wall enforces $\\psi(0) = 0$, which changes the phase shift and requires $(n - 1/4)\\pi\\hbar$!`,
      `Beginning counting at $n = 0$ when using $(n - 1/2)$. For $n = 1, 2, 3, \\dots$, $n - 1/2$ generates $1/2, 3/2, 5/2, \\dots$.`
    ],
    cards: [
      { q: 'State the WKB quantization condition for a bound state in a smooth potential well with two classical turning points.', a: '$\\int_{x_1}^{x_2} p(x) dx = \\left(n - \\frac{1}{2}\\right)\\pi\\hbar$.', kind: 'state' },
      { q: 'What is the value of the phase parameter γ in the WKB quantization condition for a potential well with one vertical rigid wall?', a: '$\\gamma = 1/4$, giving $\\int p dx = (n - 1/4)\\pi\\hbar$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.7.4.4', sec: '7.4', kind: 'law', tier: 'core',
    title: 'WKB Barrier Tunneling & Gamow Theory of Alpha Decay',
    oneLine: 'The WKB barrier transmission coefficient is T ≈ exp(-2γ) where γ = (1/ħ)∫_{x₁}^{x₂} √(2m(V(x)-E)) dx, explaining the Geiger-Nuttall law for nuclear alpha decay.',
    statement: `For a particle of energy $E$ incident on a broad, high potential barrier $V(x) > E$ between classical turning points $x_1$ and $x_2$, the <b>WKB transmission coefficient (tunneling probability)</b> is:
$$\\boxed{T \\approx \\exp\\left( -2\\gamma \\right) = \\exp\\left( -\\frac{2}{\\hbar}\\int_{x_1}^{x_2} \\sqrt{2m(V(x) - E)} \\, dx \\right)}$$
This holds when $\\gamma = \\frac{1}{\\hbar}\\int_{x_1}^{x_2}|p(x)|dx \\gg 1$ (thick barrier).<br>
<b>Gamow Theory of Alpha Decay (1928):</b>
An $\\alpha$-particle trapped inside a nucleus of radius $R$ tunnels through the repulsive Coulomb barrier $V(r) = \\frac{2Ze^2}{4\\pi\\varepsilon_0 r}$ from $r_1 = R$ to classical turning point $r_2 = \\frac{2Ze^2}{4\\pi\\varepsilon_0 E}$.<br>
Evaluating the WKB integral gives the decay constant $\\lambda = \\nu T$:
$$\\boxed{\\ln \\lambda = C_1 - C_2 \\frac{Z}{\\sqrt{E}}}$$
This derives the empirical <b>Geiger-Nuttall Law</b>: an exponential increase in half-life over 20 orders of magnitude for small variations in alpha particle energy!`,
    intuition: `George Gamow's 1928 calculation of alpha decay was the first triumphant proof that quantum tunneling governs real-world nuclear physics! Because the barrier exponent contains $1/\\sqrt{E}$ in the exponential, a tiny $2$-fold decrease in alpha particle energy (from $8\\text{ MeV}$ in $^{214}\\text{Po}$ to $4\\text{ MeV}$ in $^{238}\\text{U}$) causes the half-life to skyrocket from $164\\text{ microseconds}$ to $4.5\\text{ billion years}$!`,
    needs: ['c.7.4.2', 'c.2.6.2'],
    traps: [
      `Omitting the factor of 2 in the exponent: $T \\approx e^{-2\\gamma}$, NOT $e^{-\\gamma}$. (The amplitude is $e^{-\\gamma}$, so the probability current ratio is $|e^{-\\gamma}|^2 = e^{-2\\gamma}$).`,
      `Applying the formula to very thin or low barriers where $T \\approx 1$. WKB tunneling is strictly valid in the weak-transmission limit $T \\ll 1$.`
    ],
    cards: [
      { q: 'State the WKB transmission coefficient T for a barrier V(x) > E between turning points x₁ and x₂.', a: '$T \\approx \\exp\\left(-\\frac{2}{\\hbar}\\int_{x_1}^{x_2}\\sqrt{2m(V(x)-E)}\\,dx\\right)$.', kind: 'state' },
      { q: 'What empirical nuclear physics law was derived by Gamow using WKB barrier tunneling?', a: 'The Geiger–Nuttall Law ($\\ln \\lambda = C_1 - C_2 Z / \\sqrt{E}$).', kind: 'recall' }
    ]
  }
);

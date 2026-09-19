/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module II: Angular Momentum & Spin
   Prescribed Syllabus: PHY7CJ401 (VII Semester BSc Physics Honours, Calicut University)
   Textbooks: Nouredine Zettili 2e (Chapter 5 §§5.1–5.7.1, Chapter 7 §§7.3.1–7.3.2)
              & David J. Griffiths 3e (Chapter 4 §§4.3–4.4)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 6.1 Orbital Angular Momentum & General Formalism ───────────────────── */
  {
    id: 'c.6.1.1', sec: '6.1', kind: 'law', tier: 'core',
    title: 'Orbital Angular Momentum Operator & Lie Algebra',
    oneLine: 'Orbital angular momentum L̂ = r̂ × p̂ generates rotations and satisfies the fundamental Lie commutator algebra [L̂_i, L̂_j] = iħ ε_ijk L̂_k.',
    statement: `The quantum mechanical <b>orbital angular momentum operator</b> $\\hat{\\mathbf{L}}$ is defined in direct correspondence with classical mechanics:
$$\\boxed{\\hat{\\mathbf{L}} = \\hat{\\mathbf{r}} \\times \\hat{\\mathbf{p}}}$$
In Cartesian components:
$$\\hat{L}_x = \\hat{y}\\hat{p}_z - \\hat{z}\\hat{p}_y, \\quad \\hat{L}_y = \\hat{z}\\hat{p}_x - \\hat{x}\\hat{p}_z, \\quad \\hat{L}_z = \\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x$$
<b>Fundamental Commutation Relations:</b>
Using the canonical position-momentum commutators $[\\hat{x}_i, \\hat{p}_j] = i\\hbar\\delta_{ij}$:
$$\\boxed{[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z, \\qquad [\\hat{L}_y, \\hat{L}_z] = i\\hbar\\hat{L}_x, \\qquad [\\hat{L}_z, \\hat{L}_x] = i\\hbar\\hat{L}_y}$$
or compactly via the Levi-Civita permutation symbol:
$$\\boxed{[\\hat{L}_i, \\hat{L}_j] = i\\hbar \\sum_{k=1}^3 \\varepsilon_{ijk}\\hat{L}_k}$$
<b>Total Angular Momentum Squared Operator:</b>
$$\\hat{L}^2 = \\hat{L}_x^2 + \\hat{L}_y^2 + \\hat{L}_z^2$$
It is a Casimir invariant of the $SO(3)$ Lie algebra, commuting with every component:
$$\\boxed{[\\hat{L}^2, \\hat{L}_x] = [\\hat{L}^2, \\hat{L}_y] = [\\hat{L}^2, \\hat{L}_z] = 0}$$`,
    intuition: `Why can we never measure more than one component of angular momentum simultaneously? Because $[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z \\neq 0$, Heisenberg's generalized uncertainty relation dictates:
$$\\Delta L_x \\Delta L_y \\ge \\frac{\\hbar}{2}|\\langle L_z \\rangle|$$
Measuring $L_z$ with absolute certainty introduces complete quantum uncertainty into $L_x$ and $L_y$! The angular momentum vector precesses on a cone around the $z$-axis with undetermined azimuthal orientation.`,
    needs: ['c.1.5.2', 'c.3.3.1'],
    traps: [
      `Attempting to measure $L_x$ and $L_z$ simultaneously. Only $\\hat{L}^2$ and ONE chosen component (by convention $\\hat{L}_z$) can be simultaneously measured.`,
      `Thinking $[\\hat{L}_x, \\hat{p}_x] = 0$. $\\hat{L}_x = \\hat{y}\\hat{p}_z - \\hat{z}\\hat{p}_y$ commutes with $\\hat{x}$ and $\\hat{p}_x$, but $[\\hat{L}_x, \\hat{y}] = i\\hbar\\hat{z}$ and $[\\hat{L}_x, \\hat{p}_y] = i\\hbar\\hat{p}_z$.`
    ],
    proof: {
      idea: 'Expand [L_x, L_y] using L_x = y p_z - z p_y and L_y = z p_x - x p_z with commutator identities.',
      why: 'Prove that the components of orbital angular momentum do not commute.',
      rungs: [
        {
          why: 'Substitute definitions into commutator',
          m: '$$[\\hat{L}_x, \\hat{L}_y] = [\\hat{y}\\hat{p}_z - \\hat{z}\\hat{p}_y, \\; \\hat{z}\\hat{p}_x - \\hat{x}\\hat{p}_z]$$',
          meaning: 'Use linearity of commutators to expand into 4 individual terms.',
          label: 'Expand Commutator',
          math: '[\\hat{L}_x, \\hat{L}_y] = [\\hat{y}\\hat{p}_z, \\hat{z}\\hat{p}_x] - [\\hat{y}\\hat{p}_z, \\hat{x}\\hat{p}_z] - [\\hat{z}\\hat{p}_y, \\hat{z}\\hat{p}_x] + [\\hat{z}\\hat{p}_y, \\hat{x}\\hat{p}_z]',
          note: 'Expand brackets.'
        },
        {
          why: 'Evaluate non-vanishing commutators using [z, p_z] = iħ',
          m: '$$[\\hat{y}\\hat{p}_z, \\hat{z}\\hat{p}_x] = \\hat{y}[\\hat{p}_z, \\hat{z}]\\hat{p}_x = -i\\hbar\\hat{y}\\hat{p}_x, \\qquad [\\hat{z}\\hat{p}_y, \\hat{x}\\hat{p}_z] = \\hat{x}[\\hat{z}, \\hat{p}_z]\\hat{p}_y = i\\hbar\\hat{x}\\hat{p}_y$$',
          meaning: 'The other two cross-terms vanish because variables along different axes commute identically.',
          label: 'Evaluate Non-Zero Terms',
          math: '[\\hat{L}_x, \\hat{L}_y] = -i\\hbar\\hat{y}\\hat{p}_x + i\\hbar\\hat{x}\\hat{p}_y',
          note: 'Drop zero terms.'
        },
        {
          why: 'Factor out iħ and identify L_z',
          m: '$$[\\hat{L}_x, \\hat{L}_y] = i\\hbar(\\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x) = i\\hbar\\hat{L}_z$$',
          meaning: 'The commutator of x and y angular momentum generates the z component.',
          label: 'Identify L_z',
          math: '[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z',
          note: 'Proved.'
        }
      ]
    },
    cards: [
      { q: 'State the fundamental commutation relations for orbital angular momentum components.', a: '$[\\hat{L}_i, \\hat{L}_j] = i\\hbar\\varepsilon_{ijk}\\hat{L}_k$.', kind: 'state' },
      { q: 'Does L̂² commute with L̂x, L̂y, L̂z?', a: 'Yes: $[\\hat{L}^2, \\hat{L}_x] = [\\hat{L}^2, \\hat{L}_y] = [\\hat{L}^2, \\hat{L}_z] = 0$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.1.2', sec: '6.1', kind: 'definition', tier: 'core',
    title: 'General Angular Momentum & Dirac Ladder Operators Ĵ±',
    oneLine: 'General angular momentum Ĵ is defined purely by [Ĵ_i, Ĵ_j] = iħ ε_ijk Ĵ_k, factorized by ladder operators Ĵ± = Ĵ_x ± i Ĵ_y.',
    statement: `A set of three Hermitian operators $\\hat{\\mathbf{J}} = (\\hat{J}_x, \\hat{J}_y, \\hat{J}_z)$ defines a <b>general angular momentum</b> if and only if they satisfy the Lie algebra:
$$\\boxed{[\\hat{J}_i, \\hat{J}_j] = i\\hbar\\varepsilon_{ijk}\\hat{J}_k}$$
Define the non-Hermitian <b>ladder (raising and lowering) operators</b>:
$$\\boxed{\\hat{J}_+ = \\hat{J}_x + i\\hat{J}_y, \\qquad \\hat{J}_- = \\hat{J}_x - i\\hat{J}_y = (\\hat{J}_+) ^\\dagger}$$
Inverting gives the transverse components:
$$\\hat{J}_x = \\frac{1}{2}(\\hat{J}_+ + \\hat{J}_-), \\qquad \\hat{J}_y = \\frac{1}{2i}(\\hat{J}_+ - \\hat{J}_-)$$
<b>Ladder Commutation Algebra:</b>
$$\\boxed{[\\hat{J}_z, \\hat{J}_\\pm] = \\pm\\hbar\\hat{J}_\\pm, \\qquad [\\hat{J}_+, \\hat{J}_-] = 2\\hbar\\hat{J}_z, \\qquad [\\hat{J}^2, \\hat{J}_\\pm] = 0}$$
<b>Operator Product Identities:</b>
$$\\boxed{\\hat{J}_\\mp \\hat{J}_\\pm = \\hat{J}^2 - \\hat{J}_z^2 \\mp \\hbar\\hat{J}_z \\implies \\hat{J}^2 = \\hat{J}_\\mp \\hat{J}_\\pm + \\hat{J}_z^2 \\mp \\hbar\\hat{J}_z}$$`,
    intuition: `Just as in the harmonic oscillator where $\\hat{a}$ and $\\hat{a}^\\dagger$ step up and down between energy levels by $\\hbar\\omega$, here $\\hat{J}_+$ and $\\hat{J}_-$ step up and down between angular momentum projection levels by $\\hbar$! The commutator $[\\hat{J}_z, \\hat{J}_\\pm] = \\pm\\hbar\\hat{J}_\\pm$ guarantees that acting on a state with $\\hat{J}_z$ eigenvalue $m\\hbar$ shifts the eigenvalue by exactly $\\pm\\hbar$.`,
    needs: ['c.6.1.1', 'c.4.1.2'],
    traps: [
      `Thinking $\\hat{J}_+$ and $\\hat{J}_-$ are Hermitian. They are adjoints of each other: $(\\hat{J}_+) ^\\dagger = \\hat{J}_-$.`,
      `Sign error in the product identity: $\\hat{J}_- \\hat{J}_+ = \\hat{J}^2 - \\hat{J}_z^2 - \\hbar\\hat{J}_z$, whereas $\\hat{J}_+ \\hat{J}_- = \\hat{J}^2 - \\hat{J}_z^2 + \\hbar\\hat{J}_z$.`
    ],
    cards: [
      { q: 'State the commutation relation between Ĵz and the ladder operators Ĵ±.', a: '$[\\hat{J}_z, \\hat{J}_\\pm] = \\pm\\hbar\\hat{J}_\\pm$.', kind: 'state' },
      { q: 'Express Ĵ² in terms of Ĵ-, Ĵ+, and Ĵz.', a: '$\\hat{J}^2 = \\hat{J}_-\\hat{J}_+ + \\hat{J}_z^2 + \\hbar\\hat{J}_z = \\hat{J}_+\\hat{J}_- + \\hat{J}_z^2 - \\hbar\\hat{J}_z$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.1.3', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Angular Momentum Eigenvalue Spectrum & Ladder Action',
    oneLine: 'Algebraic ladder termination forces j to be an integer or half-integer j ∈ {0, ½, 1, 3/2, ...} with 2j+1 projections m ∈ {-j, ..., +j}.',
    statement: `Let $|j, m\\rangle$ be the normalized simultaneous eigenstates of $\\hat{J}^2$ and $\\hat{J}_z$:
$$\\boxed{\\hat{J}^2|j, m\\rangle = j(j+1)\\hbar^2|j, m\\rangle, \\qquad \\hat{J}_z|j, m\\rangle = m\\hbar|j, m\\rangle}$$
Because $\\hat{J}^2 - \\hat{J}_z^2 = \\hat{J}_x^2 + \\hat{J}_y^2 \\ge 0$, the magnetic quantum number is bounded: $m^2 \\le j(j+1)$.<br>
Repeated application of $\\hat{J}_+$ and $\\hat{J}_-$ must terminate at top rung $m = +j$ and bottom rung $m = -j$:
$$\\hat{J}_+|j, +j\\rangle = 0, \\qquad \\hat{J}_-|j, -j\\rangle = 0$$
Since moving from $-j$ to $+j$ requires an integer number of steps $k = 2j \\in \\mathbb{N}$:
$$\\boxed{j = 0, \\; \\frac{1}{2}, \\; 1, \\; \\frac{3}{2}, \\; 2, \\; \\dots, \\qquad m = -j, -j+1, \\dots, +j \\quad (2j+1 \\text{ states})}$$
<b>Explicit Ladder Action on Eigenstates:</b>
$$\\boxed{\\hat{J}_\\pm|j, m\\rangle = \\hbar\\sqrt{j(j+1) - m(m \\pm 1)} |j, m \\pm 1\\rangle}$$`,
    intuition: `This is one of the greatest triumphs of quantum algebra! Starting only from $[\\hat{J}_i, \\hat{J}_j] = i\\hbar\\varepsilon_{ijk}\\hat{J}_k$, pure linear algebra proves that ALL angular momenta in the universe must have either integer ($j=0, 1, 2, \\dots$) or half-integer ($j=1/2, 3/2, 5/2, \\dots$) quantum numbers! Orbital angular momentum $L$ is restricted to integers by spatial boundary conditions, but intrinsic spin $S$ natively realizes the half-integers!`,
    needs: ['c.6.1.2'],
    traps: [
      `Forgetting the $\\hbar$ factor in the ladder operator matrix elements: $\\hat{J}_+|j, m\\rangle = \\hbar\\sqrt{\\dots}|j, m+1\\rangle$.`,
      `Thinking $m$ can take values outside $[-j, +j]$. For a given $j$, $m$ is strictly bounded within $-j \\le m \\le +j$.`
    ],
    cards: [
      { q: 'What are the eigenvalues of Ĵ² and Ĵz for an eigenstate |j, m⟩?', a: '$\\hat{J}^2|j, m\\rangle = j(j+1)\\hbar^2|j, m\\rangle$ and $\\hat{J}_z|j, m\\rangle = m\\hbar|j, m\\rangle$.', kind: 'state' },
      { q: 'What is the result of acting with Ĵ+ on the state |j, j⟩?', a: '$\\hat{J}_+|j, j\\rangle = 0$ (the ladder terminates at the top rung).', kind: 'recall' }
    ]
  },

  /* ── 6.2 Matrix & Geometrical Representation of Angular Momentum ────────── */
  {
    id: 'c.6.2.1', sec: '6.2', kind: 'definition', tier: 'core',
    title: 'Matrix Representation of Angular Momentum Operators',
    oneLine: 'In the {|j, m⟩} orthonormal basis, angular momentum operators are represented by finite (2j+1) × (2j+1) Hermitian matrices.',
    statement: `In the ordered orthonormal basis $\{|j, j\\rangle, |j, j-1\\rangle, \\dots, |j, -j\\rangle\}$, the matrix elements are:
$$\\boxed{\\langle j, m'|\\hat{J}_z|j, m\\rangle = m\\hbar \\delta_{m'm}}$$
$$\\boxed{\\langle j, m'|\\hat{J}_\\pm|j, m\\rangle = \\hbar\\sqrt{j(j+1) - m(m\\pm 1)} \\delta_{m', m\\pm 1}}$$
The transverse matrices are formed via:
$$\\hat{J}_x = \\frac{1}{2}(\\hat{J}_+ + \\hat{J}_-), \\qquad \\hat{J}_y = \\frac{1}{2i}(\\hat{J}_+ - \\hat{J}_-)$$
<b>Explicit Matrices for $j = 1/2$ (dimension $2 \\times 2$):</b>
$$J_z = \\frac{\\hbar}{2}\\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}, \\quad J_x = \\frac{\\hbar}{2}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\quad J_y = \\frac{\\hbar}{2}\\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}$$
<b>Explicit Matrices for $j = 1$ (dimension $3 \\times 3$):</b>
$$J_z = \\hbar\\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}, \\quad J_+ = \\sqrt{2}\\hbar\\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}, \\quad J_- = \\sqrt{2}\\hbar\\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{pmatrix}$$
$$J_x = \\frac{\\hbar}{\\sqrt{2}}\\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}, \\qquad J_y = \\frac{\\hbar}{\\sqrt{2}}\\begin{pmatrix} 0 & -i & 0 \\\\ i & 0 & -i \\\\ 0 & i & 0 \\end{pmatrix}$$`,
    intuition: `Notice that in the standard $\{|j, m\\rangle\}$ basis, $\\hat{J}_z$ is always purely diagonal, with eigenvalues displayed along the main diagonal in descending order. $\\hat{J}_+$ has non-zero entries only on the super-diagonal (one step above), and $\\hat{J}_-$ has non-zero entries only on the sub-diagonal (one step below). $\\hat{J}_x$ is real and symmetric, while $\\hat{J}_y$ is purely imaginary and Hermitian.`,
    needs: ['c.6.1.3', 'c.3.7.1'],
    traps: [
      `Writing $J_y$ as a real matrix. $J_y$ must be Hermitian with $(J_y)_{12} = -(J_y)_{21}^*$, so its off-diagonal elements are purely imaginary: $\\pm i$.`,
      `Forgetting the $\\sqrt{2}$ factor in $j=1$ ladder operators: for $j=1, m=0$, $\\sqrt{1(2) - 0(1)} = \\sqrt{2}$.`
    ],
    cards: [
      { q: 'What is the dimension of the matrix representation of an angular momentum operator with quantum number j?', a: '$(2j + 1) \\times (2j + 1)$.', kind: 'recall' },
      { q: 'In the standard {|j, m⟩} basis, which angular momentum component is diagonal?', a: '$\\hat{J}_z$ (and $\\hat{J}^2 = j(j+1)\\hbar^2 I$).', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.2.2', sec: '6.2', kind: 'law', tier: 'core',
    title: 'Geometrical Vector Model & Precession Cones',
    oneLine: 'The angular momentum vector has length |J| = ħ√(j(j+1)) and precesses around the z-axis on a cone with angle cos θ = m / √(j(j+1)) < 1.',
    statement: `In the semi-classical <b>vector model</b> of angular momentum:
<ol>
  <li>The total length (magnitude) of the vector $\\mathbf{J}$ is fixed:
  $$\\boxed{|\\mathbf{J}| = \\hbar\\sqrt{j(j+1)}}$$</li>
  <li>The projection along the $z$-quantization axis is sharply quantized:
  $$\\boxed{J_z = m\\hbar, \\qquad m \\in \\{-j, -j+1, \\dots, +j\\}}$$</li>
  <li>Because $[\\hat{J}_x, \\hat{J}_y] \\neq 0$, the transverse components $J_x$ and $J_y$ are uncertain, with:
  $$\\langle J_x \\rangle = \\langle J_y \\rangle = 0, \\qquad \\langle J_x^2 \\rangle = \\langle J_y^2 \\rangle = \\frac{1}{2}\\hbar^2\\left[ j(j+1) - m^2 \\right]$$</li>
</ol>
<b>The Precession Cone Angle:</b>
The angle $\\theta$ between $\\mathbf{J}$ and the $z$-axis is:
$$\\boxed{\\cos\\theta = \\frac{J_z}{|\\mathbf{J}|} = \\frac{m}{\\sqrt{j(j+1)}}}$$
Because $\\sqrt{j(j+1)} > j \\ge |m|$ for all $j > 0$, $\\cos\\theta < 1$.<br>
<b>Fundamental Principle:</b> The angular momentum vector can NEVER point completely parallel to the $z$-axis!`,
    intuition: `Why can the vector never align with the $z$-axis (i.e. $\\theta \\neq 0$)? If $\\mathbf{J}$ were strictly along $z$, then $J_x = 0$ and $J_y = 0$ with zero uncertainty: $\\Delta J_x = 0$ and $\\Delta J_y = 0$. But Heisenberg's relation requires $\\Delta J_x \\Delta J_y \\ge \\frac{\\hbar}{2}|\\langle J_z \\rangle| = \\frac{\\hbar^2 m}{2} > 0$! Complete alignment with the $z$-axis is fundamentally forbidden by quantum mechanics!`,
    needs: ['c.6.2.1', 'c.3.4.1'],
    traps: [
      `Setting the magnitude of angular momentum to $j\\hbar$. The true eigenvalue of $\\hat{J}^2$ is $j(j+1)\\hbar^2$, so the magnitude is strictly $\\hbar\\sqrt{j(j+1)} > j\\hbar$.`,
      `Thinking $\\langle J_x^2 \\rangle = 0$ in an eigenstate of $J_z$. Only the average $\\langle J_x \\rangle = 0$; the variance $\\langle J_x^2 \\rangle = \\frac{1}{2}\\hbar^2(j(j+1) - m^2) > 0$.`
    ],
    cards: [
      { q: 'What is the length of the angular momentum vector J in a state with quantum number j?', a: '$|\\mathbf{J}| = \\hbar\\sqrt{j(j+1)}$.', kind: 'recall' },
      { q: 'Why can the angular momentum vector never point exactly along the z-axis?', a: 'Because if it did, $\\Delta J_x = \\Delta J_y = 0$, which violates the Heisenberg uncertainty relation $[\\hat{J}_x, \\hat{J}_y] = i\\hbar\\hat{J}_z$.', kind: 'recall' }
    ]
  },

  /* ── 6.3 Eigenfunctions of Angular Momentum (Lz & L²) ───────────────────── */
  {
    id: 'c.6.3.1', sec: '6.3', kind: 'law', tier: 'core',
    title: 'Differential Operator Form of Orbital Angular Momentum in Spherical Coordinates',
    oneLine: 'In spherical polar coordinates, L̂z = -iħ ∂/∂φ and L̂± = ħ e^{±iφ}(± ∂/∂θ + i cot θ ∂/∂φ).',
    statement: `Transforming Cartesian derivatives into spherical polar coordinates $(r, \\theta, \\phi)$, the orbital angular momentum operators take the differential form:
$$\\boxed{\\hat{L}_z = -i\\hbar\\frac{\\partial}{\\partial\\phi}}$$
$$\\boxed{\\hat{L}_\\pm = \\hbar e^{\\pm i\\phi} \\left( \\pm \\frac{\\partial}{\\partial\\theta} + i\\cot\\theta\\frac{\\partial}{\\partial\\phi} \\right)}$$
$$\\boxed{\\hat{L}_x = i\\hbar\\left( \\sin\\phi\\frac{\\partial}{\\partial\\theta} + \\cot\\theta\\cos\\phi\\frac{\\partial}{\\partial\\phi} \\right)}$$
$$\\boxed{\\hat{L}_y = -i\\hbar\\left( \\cos\\phi\\frac{\\partial}{\\partial\\theta} - \\cot\\theta\\sin\\phi\\frac{\\partial}{\\partial\\phi} \\right)}$$
$$\\boxed{\\hat{L}^2 = -\\hbar^2 \\left[ \\frac{1}{\\sin\\theta}\\frac{\\partial}{\\partial\\theta}\\left(\\sin\\theta\\frac{\\partial}{\\partial\\theta}\\right) + \\frac{1}{\\sin^2\\theta}\\frac{\\partial^2}{\\partial\\phi^2} \\right]}$$`,
    intuition: `Notice how remarkably simple $\\hat{L}_z$ is: it involves only the azimuthal angle $\\phi$! Just as linear momentum $\\hat{p}_x = -i\\hbar\\frac{\\partial}{\\partial x}$ generates spatial translations along $x$, $\\hat{L}_z = -i\\hbar\\frac{\\partial}{\\partial\\phi}$ generates rotations about the $z$-axis. Notice also that $\\hat{\\mathbf{L}}$ contains zero radial derivatives $\\partial_r$, confirming that orbital angular momentum acts purely on the unit sphere.`,
    needs: ['c.5.1.1', 'c.6.1.1'],
    traps: [
      `Including radial derivatives $\\partial/\\partial r$ in $\\hat{L}_z$ or $\\hat{L}^2$. Angular momentum operators are purely angular!`,
      `Sign error in $\\hat{L}_\\pm$: $\\hat{L}_+$ has $+i\\cot\\theta\\partial_\\phi$, not $-i\\cot\\theta\\partial_\\phi$.`
    ],
    cards: [
      { q: 'State the differential operator form of L̂z in spherical polar coordinates.', a: '$\\hat{L}_z = -i\\hbar\\frac{\\partial}{\\partial\\phi}$.', kind: 'state' },
      { q: 'Why do angular momentum operators contain no radial derivatives ∂/∂r?', a: 'Because $\\hat{\\mathbf{L}} = \\hat{\\mathbf{r}} \\times \\hat{\\mathbf{p}}$, and the cross product of position vector $\\mathbf{r}$ with the radial component of momentum $p_r \\hat{\\mathbf{r}}$ vanishes identically.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.3.2', sec: '6.3', kind: 'theorem', tier: 'core',
    title: 'Construction of Spherical Harmonics via Ladder Operators',
    oneLine: 'Setting L̂+|l, l⟩ = 0 uniquely determines the top spherical harmonic Y_l^l ∝ sin^l θ e^{ilφ}, from which all Y_l^m are generated by lowering with L̂-.',
    statement: `The highest state $|l, l\\rangle$ in an angular momentum multiplet must be annihilated by the raising operator $\\hat{L}_+$:
$$\\hat{L}_+ Y_l^l(\\theta, \\phi) = 0$$
Using the differential form of $\\hat{L}_+$ and separating $Y_l^l(\\theta, \\phi) = \\Theta(\\theta)e^{il\\phi}$:
$$\\hbar e^{i\\phi}\\left( \\frac{\\partial}{\\partial\\theta} + i\\cot\\theta\\frac{\\partial}{\\partial\\phi} \\right) \\Theta(\\theta)e^{il\\phi} = 0 \\implies \\frac{d\\Theta}{d\\theta} - l\\cot\\theta \\, \\Theta = 0$$
Solving this first-order separable ODE yields:
$$\\frac{d\\Theta}{\\Theta} = l\\frac{\\cos\\theta}{\\sin\\theta}d\\theta \\implies \\Theta(\\theta) = C \\sin^l\\theta$$
Normalizing on the sphere determines $C$, yielding the <b>top rung spherical harmonic</b>:
$$\\boxed{Y_l^l(\\theta, \\phi) = \\frac{(-1)^l}{2^l l!} \\sqrt{\\frac{(2l+1)!}{4\\pi}} \\sin^l\\theta \\, e^{il\\phi}}$$
Every lower state $Y_l^m(\\theta, \\phi)$ ($m < l$) is generated by successive applications of $\\hat{L}_-$:
$$\\boxed{Y_l^m(\\theta, \\phi) = \\sqrt{\\frac{(l+m)!}{(2l)!(l-m)!}} \\left( \\frac{1}{\\hbar} \\hat{L}_- \\right)^{l-m} Y_l^l(\\theta, \\phi)}$$`,
    intuition: `This operator method completely bypasses the tedious series solutions of Legendre's differential equation! Just as the ground state of the SHO is found from $\\hat{a}\\psi_0 = 0$ as a Gaussian, the top spherical harmonic $Y_l^l$ is found from $\\hat{L}_+ Y_l^l = 0$ as $\\sin^l\\theta e^{il\\phi}$. Dirac's ladder machinery solves differential equations purely through algebraic boundary conditions!`,
    needs: ['c.6.3.1', 'c.6.1.3'],
    traps: [
      `Attempting to use $\\hat{L}_- Y_l^{-l} = 0$ with incorrect phase conventions. By standard convention (Condon-Shortley), the phase $(-1)^l$ is affixed to the top state $Y_l^l$.`,
      `Forgetting the normalization prefactor when lowering: each step by $\\hat{L}_-$ introduces a factor of $\\hbar\\sqrt{l(l+1)-m(m-1)}$.`
    ],
    cards: [
      { q: 'What first-order differential condition defines the top spherical harmonic Y_l^l(θ, φ)?', a: '$\\hat{L}_+ Y_l^l(\\theta, \\phi) = 0$.', kind: 'recall' },
      { q: 'What is the θ-dependence of the top rung spherical harmonic Y_l^l(θ, φ)?', a: '$Y_l^l(\\theta, \\phi) \\propto \\sin^l\\theta \\, e^{il\\phi}$.', kind: 'state' }
    ]
  },

  /* ── 6.4 Spin 1/2 & Pauli Matrices ──────────────────────────────────────── */
  {
    id: 'c.6.4.1', sec: '6.4', kind: 'law', tier: 'core',
    title: 'Experimental Evidence of Spin & The Stern-Gerlach Experiment',
    oneLine: 'The 1922 Stern-Gerlach experiment with neutral silver atoms revealed spatial quantization into exactly two discrete beams, proving electron spin s = ½.',
    statement: `In 1922, Otto Stern and Walther Gerlach passed a beam of neutral silver ($^{107}\\text{Ag}$) atoms in their ground state ($5s^1$, orbital angular momentum $L=0$) through an <b>inhomogeneous magnetic field</b> $\\mathbf{B} \\approx (B_0 + z \\frac{\\partial B_z}{\\partial z})\\hat{\\mathbf{z}}$.<br>
<b>Force on a Magnetic Dipole:</b>
$$\\mathbf{F} = \\nabla(\\boldsymbol{\\mu} \\cdot \\mathbf{B}) \\approx \\mu_z \\frac{\\partial B_z}{\\partial z} \\hat{\\mathbf{z}}$$
<b>Classical Prediction:</b>
Classical magnetic dipoles $\\boldsymbol{\\mu}$ are randomly oriented in 3D space with continuous $\\mu_z \\in [-\\mu, +\\mu]$. The classical prediction is a <b>continuous vertical smear</b> on the detector screen.<br>
<b>Experimental Discovery:</b>
The beam split cleanly into <b>two discrete lines</b> with no particles in between!<br>
<b>Goudsmit & Uhlenbeck Hypothesis (1925):</b>
The electron possesses an intrinsic angular momentum (<b>spin</b>) $\\hat{\\mathbf{S}}$ independent of spatial motion, with quantum number:
$$\\boxed{s = \\frac{1}{2}, \\qquad m_s = \\pm \\frac{1}{2}}$$
The corresponding magnetic moment is:
$$\\boxed{\\boldsymbol{\\mu}_s = -g_e \\frac{e}{2m_e}\\hat{\\mathbf{S}} = -g_e \\mu_B \\frac{\\hat{\\mathbf{S}}}{\\hbar}}$$
where $\\mu_B = \\frac{e\\hbar}{2m_e} \\approx 9.274 \\times 10^{-24} \\text{ J/T}$ is the <b>Bohr magneton</b> and $g_e \\approx 2$ is the electron gyromagnetic ratio.`,
    intuition: `Why couldn't this splitting be orbital angular momentum? For any orbital state $l$, the number of beams is $2l + 1$, which is ALWAYS an odd number ($1, 3, 5, \\dots$)! An even number of beams ($2$) is mathematically impossible for spatial orbital angular momentum. An intrinsic half-integer angular momentum $s = 1/2$ ($2s + 1 = 2$) was the only explanation!`,
    needs: ['c.6.1.3'],
    traps: [
      `Using a homogeneous magnetic field in the Stern-Gerlach apparatus. A uniform magnetic field exerts only a torque $\\boldsymbol{\\tau} = \\boldsymbol{\\mu} \\times \\mathbf{B}$, but ZERO net force: $\\nabla(\\boldsymbol{\\mu}\\cdot\\mathbf{B}) = 0$. An inhomogeneous field ($\\frac{\\partial B_z}{\\partial z} \\neq 0$) is essential to produce deflection!`,
      `Confusing $g$-factors: the orbital $g$-factor is $g_L = 1$, while the Dirac spin $g$-factor is $g_s \\approx 2$ (or $2.00232$ with QED radiative corrections).`
    ],
    cards: [
      { q: 'Why does a Stern-Gerlach apparatus require an inhomogeneous magnetic field rather than a uniform field?', a: 'A uniform field exerts only torque; an inhomogeneous gradient $\\partial B_z / \\partial z$ is required to exert a net translational force $\\mathbf{F} = \\nabla(\\boldsymbol{\\mu}\\cdot\\mathbf{B})$.', kind: 'recall' },
      { q: 'Why did the observation of two discrete beams in the Stern-Gerlach experiment rule out orbital angular momentum?', a: 'Because orbital angular momentum states always split into an odd number of beams: $2l + 1 = 1, 3, 5, \\dots$. An even number ($2$) requires half-integer spin $s = 1/2$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.4.2', sec: '6.4', kind: 'definition', tier: 'core',
    title: 'Spin 1/2 Formalism & The Pauli Spin Matrices',
    oneLine: 'The spin operators for a spin-½ particle are Ŝ = (ħ/2) σ, where σ are the Hermitian, traceless, unitary Pauli matrices.',
    statement: `For a spin-$1/2$ system, the Hilbert space is $\\mathbb{C}^2$ spanned by the orthonormal basis vectors:
$$|\\uparrow\\rangle \\equiv |\\tfrac{1}{2}, +\\tfrac{1}{2}\\rangle = \\begin{pmatrix} 1 \\\\ 0 \\end{pmatrix}, \\qquad |\\downarrow\\rangle \\equiv |\\tfrac{1}{2}, -\\tfrac{1}{2}\\rangle = \\begin{pmatrix} 0 \\\\ 1 \\end{pmatrix}$$
The spin operator is:
$$\\boxed{\\hat{\\mathbf{S}} = \\frac{\\hbar}{2}\\boldsymbol{\\sigma}, \\qquad \\hat{S}_x = \\frac{\\hbar}{2}\\sigma_x, \\quad \\hat{S}_y = \\frac{\\hbar}{2}\\sigma_y, \\quad \\hat{S}_z = \\frac{\\hbar}{2}\\sigma_z}$$
where the <b>Pauli matrices</b> are:
$$\\boxed{\\sigma_x = \\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}, \\qquad \\sigma_y = \\begin{pmatrix} 0 & -i \\\\ i & 0 \\end{pmatrix}, \\qquad \\sigma_z = \\begin{pmatrix} 1 & 0 \\\\ 0 & -1 \\end{pmatrix}}$$
<b>Fundamental Algebraic Identities:</b>
<ol>
  <li>$\\sigma_x^2 = \\sigma_y^2 = \\sigma_z^2 = I = \\begin{pmatrix} 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$</li>
  <li>$\\det(\\sigma_i) = -1, \\qquad \\text{Tr}(\\sigma_i) = 0$</li>
  <li><b>Cyclic Product:</b> $\\sigma_x\\sigma_y = i\\sigma_z, \\quad \\sigma_y\\sigma_z = i\\sigma_x, \\quad \\sigma_z\\sigma_x = i\\sigma_y$</li>
  <li><b>Commutation & Anticommutation:</b>
  $$\\boxed{[\\sigma_i, \\sigma_j] = 2i\\varepsilon_{ijk}\\sigma_k, \\qquad \\{\\sigma_i, \\sigma_j\\} = 2\\delta_{ij}I}$$</li>
  <li><b>Master Pauli Product Identity:</b> For any vectors $\\mathbf{A}$ and $\\mathbf{B}$ that commute with $\\boldsymbol{\\sigma}$:
  $$\\boxed{(\\boldsymbol{\\sigma} \\cdot \\mathbf{A})(\\boldsymbol{\\sigma} \\cdot \\mathbf{B}) = (\\mathbf{A} \\cdot \\mathbf{B})I + i\\boldsymbol{\\sigma} \\cdot (\\mathbf{A} \\times \\mathbf{B})}$$</li>
</ol>`,
    intuition: `Notice how the Pauli identity $(\\boldsymbol{\\sigma}\\cdot\\mathbf{p})^2 = \\mathbf{p}^2 I$ allows Dirac to take the "square root" of the relativistic Klein-Gordon operator! Spin is not an added accessory to quantum theory: it is the fundamental Clifford algebra of 3D physical space, embedded into complex $2 \\times 2$ matrices.`,
    needs: ['c.6.4.1', 'c.6.2.1'],
    traps: [
      `Forgetting the factor of $\\frac{\\hbar}{2}$ when relating $\\hat{\\mathbf{S}}$ to $\\boldsymbol{\\sigma}$: $\\hat{S}_i = \\frac{\\hbar}{2}\\sigma_i$.`,
      `Thinking $\\sigma_i\\sigma_j = -\\sigma_j\\sigma_i$ for all $i, j$. Anticommutation $\{\\sigma_i, \\sigma_j\} = 0$ holds only when $i \\neq j$. For $i = j$, $\\sigma_i^2 = I$.`
    ],
    cards: [
      { q: 'State the three 2 × 2 Pauli matrices.', a: '$\\sigma_x = \\begin{pmatrix}0&1 \\\\ 1&0\\end{pmatrix}, \\sigma_y = \\begin{pmatrix}0&-i \\\\ i&0\\end{pmatrix}, \\sigma_z = \\begin{pmatrix}1&0 \\\\ 0&-1\\end{pmatrix}$.', kind: 'state' },
      { q: 'What is the anticommutator {σ_i, σ_j} of the Pauli matrices?', a: '$\\{\\sigma_i, \\sigma_j\\} = 2\\delta_{ij}I$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.4.3', sec: '6.4', kind: 'theorem', tier: 'core',
    title: 'Spinors, Measurement Probabilities & The Bloch Sphere',
    oneLine: 'Any pure spin-½ state is a spinor χ = (a, b)ᵀ mapped onto the unit Bloch sphere by |χ⟩ = cos(θ/2)|↑⟩ + e^{iφ} sin(θ/2)|↓⟩.',
    statement: `An arbitrary pure spin-$1/2$ state is represented by a two-component <b>spinor</b>:
$$\\chi = \\begin{pmatrix} a \\\\ b \\end{pmatrix} = a|\\uparrow\\rangle + b|\\downarrow\\rangle, \\qquad |a|^2 + |b|^2 = 1$$
<b>Measurement Probabilities along the z-axis:</b>
- Measuring $S_z$ yields $+\\hbar/2$ with probability $P(\\uparrow) = |a|^2$.
- Measuring $S_z$ yields $-\\hbar/2$ with probability $P(\\downarrow) = |b|^2$.<br>
<b>Transverse Eigenstates:</b>
- Eigenstates of $S_x$: $|\\pm x\\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ \\pm 1 \\end{pmatrix}$, with eigenvalues $\\pm\\hbar/2$.
- Eigenstates of $S_y$: $|\\pm y\\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ \\pm i \\end{pmatrix}$, with eigenvalues $\\pm\\hbar/2$.<br>
<b>The Bloch Sphere Parameterization:</b>
Eliminating the unobservable overall phase, any normalized spinor can be parameterized by polar angle $\\theta \\in [0, \\pi]$ and azimuthal angle $\\phi \\in [0, 2\\pi)$ on the <b>Bloch sphere</b>:
$$\\boxed{|\\chi(\\theta, \\phi)\\rangle = \\cos\\left(\\frac{\\theta}{2}\\right)|\\uparrow\\rangle + e^{i\\phi}\\sin\\left(\\frac{\\theta}{2}\\right)|\\downarrow\\rangle}$$
The <b>spin polarization vector</b> $\\mathbf{P} = \\langle \\boldsymbol{\\sigma} \\rangle$ points to a unit vector on the sphere:
$$\\boxed{\\mathbf{P} = (\\sin\\theta\\cos\\phi, \\; \\sin\\theta\\sin\\phi, \\; \\cos\\theta)}$$`,
    intuition: `Notice the half-angles $\\theta/2$ in the spinor! When you rotate the physical polarization vector by $\\theta = 360^\\circ = 2\\pi$, the spinor acquires a factor:
$$\\cos\\left(\\frac{2\\pi}{2}\\right) = \\cos(\\pi) = -1$$
Spinors do NOT return to their original state under a $360^\\circ$ rotation—they pick up a minus sign! A spin-$1/2$ particle requires a full $720^\\circ$ ($4\\pi$) rotation to return to its original quantum state. This topological property has been verified experimentally in neutron interferometry!`,
    needs: ['c.6.4.2'],
    traps: [
      `Using $\\theta$ instead of $\\theta/2$ in the spinor amplitudes. $|\\chi\\rangle$ has $\\cos(\\theta/2)$ and $\\sin(\\theta/2)$, which squares to probabilities $\\cos^2(\\theta/2)$ and $\\sin^2(\\theta/2)$.`,
      `Confusing orthogonal physical directions with orthogonal quantum states. $|\\uparrow\\rangle$ and $|\\downarrow\\rangle$ are antiparallel in physical space ($180^\\circ$ apart), but mutually orthogonal in Hilbert space ($\langle \\uparrow | \\downarrow \\rangle = 0$).`
    ],
    cards: [
      { q: 'What are the normalized eigenstates of Ŝx in the {|↑⟩, |↓⟩} basis?', a: '$|\\pm x\\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix}1 \\\\ \\pm 1\\end{pmatrix}$.', kind: 'recall' },
      { q: 'What phase factor does a spin-1/2 spinor acquire upon a spatial rotation of 360° (2π radians)?', a: 'A minus sign: $e^{i\\pi} = -1$. (A $720^\\circ$ rotation is required to return to $+1$).', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.4.4', sec: '6.4', kind: 'law', tier: 'core',
    title: 'Spin Dynamics & Larmor Precession in a Magnetic Field',
    oneLine: 'A spin-½ magnetic dipole in a magnetic field B = B₀ ẑ precesses around B at the Larmor frequency ω_L = γ B₀.',
    statement: `The interaction of a magnetic dipole $\\boldsymbol{\\mu} = \\gamma \\hat{\\mathbf{S}}$ with an external magnetic field $\\mathbf{B} = B_0 \\hat{\\mathbf{z}}$ is governed by the Zeeman Hamiltonian:
$$\\boxed{\\hat{H} = -\\boldsymbol{\\mu} \\cdot \\mathbf{B} = -\\gamma B_0 \\hat{S}_z = -\\frac{\\hbar\\omega_L}{2}\\sigma_z}$$
where $\\gamma$ is the gyromagnetic ratio and $\\omega_L$ is the <b>Larmor precession frequency</b>:
$$\\boxed{\\omega_L = \\gamma B_0 = \\frac{g e B_0}{2m}}$$
<b>Time Evolution:</b>
Starting in an arbitrary initial state $|\\chi(0)\\rangle = a|\\uparrow\\rangle + b|\\downarrow\\rangle$:
$$|\\chi(t)\\rangle = e^{-i\\hat{H}t/\\hbar}|\\chi(0)\\rangle = a e^{+i\\omega_L t / 2}|\\uparrow\\rangle + b e^{-i\\omega_L t / 2}|\\downarrow\\rangle$$
<b>Precession of Expectation Values:</b>
If the spin is initially polarized along the $+x$ axis ($a = b = 1/\\sqrt{2}$):
$$\\boxed{\\langle S_x(t) \\rangle = \\frac{\\hbar}{2}\\cos(\\omega_L t), \\qquad \\langle S_y(t) \\rangle = \\frac{\\hbar}{2}\\sin(\\omega_L t), \\qquad \\langle S_z(t) \\rangle = 0}$$
The spin vector precesses uniformly in the $xy$-plane perpendicular to $\\mathbf{B}$ at frequency $\\omega_L$.`,
    intuition: `This is the quantum foundation of Nuclear Magnetic Resonance (NMR) and Magnetic Resonance Imaging (MRI)! By applying a static magnetic field $B_0$, nuclear spins precess at their characteristic Larmor frequency $\\omega_L$. Applying a resonant radiofrequency pulse tilts the spins and detects their relaxation, generating non-invasive clinical cross-sections of the human body.`,
    needs: ['c.6.4.3', 'c.2.1.1'],
    traps: [
      `Thinking the probabilities $P(\\uparrow) = |a|^2$ and $P(\\downarrow) = |b|^2$ change with time. Since $\\hat{H} \\propto \\hat{S}_z$, the energy eigenstates are stationary states; the probabilities of $S_z$ remain constant, while transverse expectation values oscillate.`,
      `Confusing the sign of the gyromagnetic ratio for the electron: because the electron has negative charge $-e$, its magnetic moment is antiparallel to its spin: $\\boldsymbol{\\mu} = -\\frac{g e}{2m_e}\\mathbf{S}$.`
    ],
    cards: [
      { q: 'State the Larmor frequency ω_L of a spin in a magnetic field B₀.', a: '$\\omega_L = \\gamma B_0$.', kind: 'state' },
      { q: 'If a spin-1/2 particle starts in an eigenstate of Sx in a field along z, what is ⟨Sz(t)⟩ as a function of time?', a: '$\\langle S_z(t) \\rangle = 0$ for all times $t$ (the spin precesses entirely in the $xy$-plane).', kind: 'recall' }
    ]
  },

  /* ── 6.5 Addition of Angular Momenta & Clebsch-Gordan Coefficients ──────── */
  {
    id: 'c.6.5.1', sec: '6.5', kind: 'definition', tier: 'core',
    title: 'Addition of Two Angular Momenta: Uncoupled vs Coupled Bases',
    oneLine: 'Adding Ĵ = Ĵ₁ + Ĵ₂ connects the uncoupled tensor product basis {|j₁, m₁; j₂, m₂⟩} to the coupled total angular momentum basis {|J, M; j₁, j₂⟩}.',
    statement: `Consider two independent quantum systems with angular momenta $\\hat{\\mathbf{J}}_1$ and $\\hat{\\mathbf{J}}_2$ acting in Hilbert spaces $\\mathcal{H}_1$ (dim $2j_1+1$) and $\\mathcal{H}_2$ (dim $2j_2+1$). Since they act on different degrees of freedom:
$$[\\hat{\\mathbf{J}}_1, \\hat{\\mathbf{J}}_2] = 0$$
The <b>total angular momentum operator</b> is:
$$\\boxed{\\hat{\\mathbf{J}} = \\hat{\\mathbf{J}}_1 + \\hat{\\mathbf{J}}_2 = \\hat{\\mathbf{J}}_1 \\otimes I_2 + I_1 \\otimes \\hat{\\mathbf{J}}_2}$$
<b>1. The Uncoupled Basis:</b>
Eigenstates of the mutually commuting set $\\{\\hat{J}_1^2, \\hat{J}_{1z}, \\hat{J}_2^2, \\hat{J}_{2z}\\}$:
$$\\boxed{|j_1, m_1; j_2, m_2\\rangle \\equiv |j_1, m_1\\rangle \\otimes |j_2, m_2\\rangle}$$
<b>2. The Coupled Basis:</b>
Eigenstates of the mutually commuting set $\\{\\hat{J}^2, \\hat{J}_z, \\hat{J}_1^2, \\hat{J}_2^2\\}$:
$$\\boxed{|J, M; j_1, j_2\\rangle}$$
where:
$$\\hat{J}^2|J, M\\rangle = J(J+1)\\hbar^2|J, M\\rangle, \\qquad \\hat{J}_z|J, M\\rangle = M\\hbar|J, M\\rangle$$
Both bases span the exact same product Hilbert space of dimension:
$$\\boxed{N = (2j_1 + 1)(2j_2 + 1)}$$`,
    intuition: `Why do we need the coupled basis? Because when two particles interact via an internal torque (e.g. spin-orbit coupling $\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}$ or hyperfine interaction $\\hat{\\mathbf{S}}_1\\cdot\\hat{\\mathbf{S}}_2$), individual components $J_{1z}$ and $J_{2z}$ no longer commute with the interaction Hamiltonian! Only the total angular momentum $\\hat{\\mathbf{J}} = \\hat{\\mathbf{J}}_1 + \\hat{\\mathbf{J}}_2$ is a conserved quantity.`,
    needs: ['c.6.1.1', 'c.3.6.3'],
    traps: [
      `Assuming $\\hat{J}^2$ commutes with $\\hat{J}_{1z}$ or $\\hat{J}_{2z}$. Since $\\hat{J}^2 = \\hat{J}_1^2 + \\hat{J}_2^2 + 2\\hat{\\mathbf{J}}_1\\cdot\\hat{\\mathbf{J}}_2$, $[\\hat{J}^2, \\hat{J}_{1z}] \\neq 0$! You can know either $(m_1, m_2)$ or $(J, M)$, but NEVER both simultaneously.`,
      `Adding quantum numbers directly: $J \\neq j_1 + j_2$ as a single number; $J$ takes a RANGE of allowed values.`
    ],
    cards: [
      { q: 'What four operators define the uncoupled basis for two angular momenta?', a: '$\\{\\hat{J}_1^2, \\hat{J}_{1z}, \\hat{J}_2^2, \\hat{J}_{2z}\\}$.', kind: 'state' },
      { q: 'What four operators define the coupled basis for two angular momenta?', a: '$\\{\\hat{J}^2, \\hat{J}_z, \\hat{J}_1^2, \\hat{J}_2^2\\}$.', kind: 'state' }
    ]
  },
  {
    id: 'c.6.5.2', sec: '6.5', kind: 'theorem', tier: 'core',
    title: 'The Triangle Selection Rule for Total Angular Momentum',
    oneLine: 'The total angular momentum quantum number J takes values in integer steps from |j₁ - j₂| to j₁ + j₂, with M = m₁ + m₂.',
    statement: `For the addition of two angular momenta $j_1$ and $j_2$, the allowed values of the total angular momentum quantum number $J$ are given by the <b>Triangle Inequality</b>:
$$\\boxed{|j_1 - j_2| \\le J \\le j_1 + j_2, \\qquad J \\in \\{|j_1 - j_2|, \\; |j_1 - j_2| + 1, \\; \\dots, \\; j_1 + j_2\\}}$$
For each allowed value of $J$, the total magnetic quantum number $M$ satisfies:
$$\\boxed{M = m_1 + m_2, \\qquad M \\in \\{-J, -J+1, \\dots, +J\\}}$$
<b>Dimension Conservation Check:</b>
$$\\sum_{J=|j_1 - j_2|}^{j_1 + j_2}(2J + 1) = (2j_1 + 1)(2j_2 + 1)$$
<b>Examples:</b>
<ul>
  <li>Two spin-1/2 particles ($j_1 = 1/2, j_2 = 1/2$):
  $$J \\in \\{|1/2 - 1/2|, \\; 1/2 + 1/2\\} = \\{0, 1\\} \\implies \\text{Singlet } (J=0) \\oplus \\text{Triplet } (J=1)$$
  Dimension: $(2\\times 0 + 1) + (2\\times 1 + 1) = 1 + 3 = 4 = (2)(2)$.</li>
  <li>Spin-1 and Spin-1/2 ($j_1 = 1, j_2 = 1/2$):
  $$J \\in \\{1 - 1/2, \\; 1 + 1/2\\} = \\{1/2, 3/2\\}$$
  Dimension: $2 + 4 = 6 = (3)(2)$.</li>
</ul>`,
    intuition: `This is the quantum version of adding two classical vectors! Classically, adding vectors $\\mathbf{J}_1$ and $\\mathbf{J}_2$ yields a resultant $|\mathbf{J}|$ between $|\mathbf{J}_1| - |\mathbf{J}_2|$ (antiparallel) and $|\mathbf{J}_1| + |\mathbf{J}_2|$ (parallel). In quantum mechanics, the triangle rule enforces this geometric bound, with the extra constraint that $J$ must advance in unit integer steps.`,
    needs: ['c.6.5.1'],
    traps: [
      `Skipping values in the range: $J$ advances in steps of $1$, NOT $1/2$. For example, adding $j_1=1$ and $j_2=1$ yields $J = 0, 1, 2$, not $0, 0.5, 1, \\dots$.`,
      `Thinking $M$ can be different from $m_1 + m_2$. Since $\\hat{J}_z = \\hat{J}_{1z} + \\hat{J}_{2z}$, $M = m_1 + m_2$ is an exact conservation law.`
    ],
    cards: [
      { q: 'State the range of allowed total angular momentum values J when adding j₁ and j₂.', a: '$|j_1 - j_2| \\le J \\le j_1 + j_2$ in unit integer steps.', kind: 'state' },
      { q: 'What total angular momentum quantum numbers J are formed by adding j₁ = 2 and j₂ = 1?', a: '$J \\in \\{1, 2, 3\\}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.5.3', sec: '6.5', kind: 'law', tier: 'core',
    title: 'Clebsch-Gordan Coefficients & Selection Rules',
    oneLine: 'Clebsch-Gordan coefficients ⟨j₁, m₁; j₂, m₂|J, M⟩ are the unitary expansion elements connecting uncoupled and coupled bases.',
    statement: `The transformation between the uncoupled basis and the coupled basis is given by the <b>Clebsch-Gordan (CG) expansion</b>:
$$\\boxed{|J, M\\rangle = \\sum_{m_1=-j_1}^{j_1} \\sum_{m_2=-j_2}^{j_2} C_{m_1 m_2 M}^{j_1 j_2 J} |j_1, m_1; j_2, m_2\\rangle}$$
where the real expansion coefficients are the <b>Clebsch-Gordan coefficients</b>:
$$C_{m_1 m_2 M}^{j_1 j_2 J} \\equiv \\langle j_1, m_1; j_2, m_2 | J, M \\rangle$$
Inversely:
$$|j_1, m_1; j_2, m_2\\rangle = \\sum_{J=|j_1-j_2|}^{j_1+j_2} \\sum_{M=-J}^J \\langle j_1, m_1; j_2, m_2 | J, M \\rangle |J, M\\rangle$$
<b>Strict Selection Rules for Non-Zero CG Coefficients:</b>
A Clebsch-Gordan coefficient $\\langle j_1, m_1; j_2, m_2|J, M\\rangle \\neq 0$ if and only if:
<ol>
  <li><b>Magnetic Conservation:</b> $\\boxed{M = m_1 + m_2}$</li>
  <li><b>Triangle Condition:</b> $\\boxed{|j_1 - j_2| \\le J \\le j_1 + j_2}$</li>
</ol>
<b>Orthonormality Relations:</b>
$$\\sum_{m_1, m_2} \\langle J, M | j_1, m_1; j_2, m_2 \\rangle \\langle j_1, m_1; j_2, m_2 | J', M' \\rangle = \\delta_{JJ'}\\delta_{MM'}$$
$$\\sum_{J, M} \\langle j_1, m_1; j_2, m_2 | J, M \\rangle \\langle J, M | j_1, m_1'; j_2, m_2' \\rangle = \\delta_{m_1 m_1'}\\delta_{m_2 m_2'}$$`,
    intuition: `The Clebsch-Gordan transformation is simply a change of basis (unitary transformation) between two complete orthonormal sets in the same Hilbert space! By standard convention (Condon-Shortley phase convention), all Clebsch-Gordan coefficients are chosen to be purely real numbers. Therefore, the matrix of CG coefficients is an orthogonal matrix: $U^T = U^{-1}$.`,
    needs: ['c.6.5.2', 'c.3.5.1'],
    traps: [
      `Attempting to calculate a CG coefficient where $M \\neq m_1 + m_2$. Any such coefficient is identically zero!`,
      `Thinking CG coefficients can be complex numbers. In the standard Condon-Shortley convention, all CG coefficients are purely real.`
    ],
    cards: [
      { q: 'What two selection rules must be satisfied for a Clebsch-Gordan coefficient to be non-zero?', a: '1. $M = m_1 + m_2$, and 2. $|j_1 - j_2| \\le J \\le j_1 + j_2$.', kind: 'recall' },
      { q: 'Are Clebsch-Gordan coefficients real or complex in the Condon-Shortley convention?', a: 'Purely real.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.5.4', sec: '6.5', kind: 'theorem', tier: 'core',
    title: 'Addition of Two Spin-1/2 Particles: Singlet and Triplet States',
    oneLine: 'Coupling two spin-½ particles yields a symmetric Triplet (S = 1, M = 1, 0, -1) and an antisymmetric Singlet (S = 0, M = 0).',
    statement: `When adding the spins of two spin-$1/2$ particles ($s_1 = 1/2, s_2 = 1/2$), the total spin quantum number can be $S = 1$ or $S = 0$:
$$\\frac{1}{2} \\otimes \\frac{1}{2} = 1 \\oplus 0$$
<b>1. The Triplet States ($S = 1$, Symmetric under particle exchange $1 \\leftrightarrow 2$):</b>
$$\\boxed{|1, +1\\rangle = |\\uparrow\\uparrow\\rangle}$$
$$\\boxed{|1, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle + |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}}$$
$$\\boxed{|1, -1\\rangle = |\\downarrow\\downarrow\\rangle}$$
<b>2. The Singlet State ($S = 0$, Antisymmetric under particle exchange $1 \\leftrightarrow 2$):</b>
$$\\boxed{|0, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle - |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}}$$
<b>Spin Exchange Operator $\\hat{P}_{12}$ and $\\mathbf{S}_1 \\cdot \\mathbf{S}_2$:</b>
Since $\\hat{S}^2 = \\hat{S}_1^2 + \\hat{S}_2^2 + 2\\hat{\\mathbf{S}}_1\\cdot\\hat{\\mathbf{S}}_2 = \\frac{3}{2}\\hbar^2 I + 2\\hat{\\mathbf{S}}_1\\cdot\\hat{\\mathbf{S}}_2$:
$$\\boxed{\\hat{\\mathbf{S}}_1 \\cdot \\hat{\\mathbf{S}}_2 = \\frac{1}{2}\\left( \\hat{S}^2 - \\frac{3}{2}\\hbar^2 \\right) = \\begin{cases} +\\frac{1}{4}\\hbar^2 & \\text{for Triplet } (S=1) \\\\ -\\frac{3}{4}\\hbar^2 & \\text{for Singlet } (S=0) \\end{cases}}$$`,
    intuition: `Notice how particle exchange symmetry connects directly to total spin:
- The Triplet states have $S=1$ and are completely symmetric under swapping the two spins.
- The Singlet state has $S=0$ and is completely antisymmetric (flips sign under $1 \\leftrightarrow 2$).
By the Pauli Exclusion Principle, two identical fermions (like electrons in helium or H$_2$) must have an overall antisymmetric wavefunction $\\Psi = \\psi_{\\text{space}} \\chi_{\\text{spin}}$. Therefore, a symmetric spatial state requires an antisymmetric singlet spin state, and vice versa!`,
    needs: ['c.6.5.3', 'c.6.4.2'],
    traps: [
      `Confusing $|1, 0\\rangle$ and $|0, 0\\rangle$: $|1, 0\\rangle$ has a PLUS sign (symmetric), while $|0, 0\\rangle$ has a MINUS sign (antisymmetric).`,
      `Thinking $|\\uparrow\\downarrow\\rangle$ is an eigenstate of total spin $\\hat{S}^2$. It is NOT! $|\\uparrow\\downarrow\\rangle = \\frac{|1, 0\\rangle + |0, 0\\rangle}{\\sqrt{2}}$ is a 50-50 superposition of triplet and singlet.`
    ],
    cards: [
      { q: 'Write the explicit spinor for the spin singlet state |0, 0⟩ of two spin-1/2 particles.', a: '$|0, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle - |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}$.', kind: 'state' },
      { q: 'What is the eigenvalue of Ŝ₁ · Ŝ₂ on the spin singlet state?', a: '$-\\frac{3}{4}\\hbar^2$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.6.5.5', sec: '6.5', kind: 'law', tier: 'core',
    title: 'Spin-Orbit Coupling & Addition of Orbital and Spin Angular Momenta',
    oneLine: 'Coupling orbital L and spin S yields J = l ± ½, splitting spectral levels via the spin-orbit Hamiltonian H_SO ∝ L̂ · Ŝ = ½(Ĵ² - L̂² - Ŝ²).',
    statement: `When an electron with orbital angular momentum $\\hat{\\mathbf{L}}$ and spin $\\hat{\\mathbf{S}}$ moves in an atomic potential, the relativistic <b>spin-orbit interaction</b> couples them:
$$\\hat{H}_{\\text{SO}} = \\xi(r) \\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}}$$
The total angular momentum is:
$$\\hat{\\mathbf{J}} = \\hat{\\mathbf{L}} + \\hat{\\mathbf{S}}$$
Because $s = 1/2$, the allowed values of total angular momentum are:
$$\\boxed{J = l + \\frac{1}{2} \\qquad \\text{and} \\qquad J = l - \\frac{1}{2} \\quad (\\text{for } l \\ge 1)}$$
(For $l=0$, $J = 1/2$ only).<br>
<b>Evaluation of the Dot Product $\\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}}$:</b>
Squaring $\\hat{\\mathbf{J}} = \\hat{\\mathbf{L}} + \\hat{\\mathbf{S}}$:
$$\\hat{J}^2 = \\hat{L}^2 + \\hat{S}^2 + 2\\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}} \\implies \\boxed{\\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}} = \\frac{1}{2}\\left( \\hat{J}^2 - \\hat{L}^2 - \\hat{S}^2 \\right)}$$
Acting on a coupled eigenstate $|J, M; l, s=1/2\\rangle$:
$$\\boxed{\\langle \\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}} \\rangle = \\frac{\\hbar^2}{2}\\left[ J(J+1) - l(l+1) - \\frac{3}{4} \\right] = \\begin{cases} +\\frac{l}{2}\\hbar^2 & \\text{for } J = l + 1/2 \\\\ -\\frac{l+1}{2}\\hbar^2 & \\text{for } J = l - 1/2 \\end{cases}}$$`,
    intuition: `This operator trick $\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} = \\frac{1}{2}(\\hat{J}^2 - \\hat{L}^2 - \\hat{S}^2)$ is one of the most powerful moves in quantum physics! Because $[\\hat{H}_{\\text{SO}}, \\hat{L}_z] \\neq 0$, the individual projections $m_l$ and $m_s$ are NOT good quantum numbers. But because $\\hat{J}^2$ and $\\hat{J}_z$ commute with $\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}$, the coupled states $|J, M\\rangle$ are exact eigenstates of the spin-orbit Hamiltonian! This interaction is responsible for fine structure splitting, like the famous yellow sodium doublet ($D_1$ and $D_2$).`,
    needs: ['c.6.5.1', 'c.6.5.2'],
    traps: [
      `Allowing $J = l - 1/2$ for $l = 0$. For $l=0$, $J$ can only be $0 + 1/2 = 1/2$; negative $J$ does not exist in physics!`,
      `Attempting to use $m_l$ and $m_s$ as constants of motion in the presence of spin-orbit coupling. Spin-orbit torque mixes $m_l$ and $m_s$; only $J$ and $M = m_l + m_s$ are conserved.`
    ],
    cards: [
      { q: 'Express the spin-orbit operator L̂ · Ŝ in terms of Ĵ², L̂², and Ŝ².', a: '$\\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}} = \\frac{1}{2}(\\hat{J}^2 - \\hat{L}^2 - \\hat{S}^2)$.', kind: 'state' },
      { q: 'What is the eigenvalue of L̂ · Ŝ for a p-state (l = 1) with total angular momentum J = 3/2?', a: '$+\\frac{1}{2}\\hbar^2$.', kind: 'recall' }
    ]
  }
);

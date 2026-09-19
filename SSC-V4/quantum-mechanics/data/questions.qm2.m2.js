/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module II: Angular Momentum & Spin
   Worked Problems & Step-by-Step Proof Exercises (QUESTIONS)
   Textbooks: Nouredine Zettili 2e (Chapter 5) & David J. Griffiths 3e (Chapter 4)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof QUESTIONS === 'undefined') { var QUESTIONS = []; }

QUESTIONS.push(
  {
    id: 'w.6.1.1', sec: '6.1', marks: 5,
    title: 'Commutators of Angular Momentum with Position and Linear Momentum',
    tests: ['c.6.1.1'],
    prompt: `<p>Using the canonical commutation relations $[x_i, p_j] = i\\hbar\\delta_{ij}$, evaluate the commutators:
<ol>
  <li>$[\\hat{L}_z, \\hat{x}]$ and $[\\hat{L}_z, \\hat{y}]$</li>
  <li>$[\\hat{L}_z, \\hat{p}_x]$ and $[\\hat{L}_z, \\hat{p}_y]$</li>
</ol>
Interpret the results physically in terms of infinitesimal spatial rotations.</p>`,
    solution: `<p><b>Part 1: Commutators with Position.</b><br>
Recall $\\hat{L}_z = \\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x$.<br>
Compute $[\\hat{L}_z, \\hat{x}]$:
$$[\\hat{L}_z, \\hat{x}] = [\\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x, \\hat{x}] = -[\\hat{y}\\hat{p}_x, \\hat{x}] = -\\hat{y}[\\hat{p}_x, \\hat{x}] = -\\hat{y}(-i\\hbar) = \\boxed{i\\hbar\\hat{y}}$$
Compute $[\\hat{L}_z, \\hat{y}]$:
$$[\\hat{L}_z, \\hat{y}] = [\\hat{x}\\hat{p}_y - \\hat{y}\\hat{p}_x, \\hat{y}] = [\\hat{x}\\hat{p}_y, \\hat{y}] = \\hat{x}[\\hat{p}_y, \\hat{y}] = \\hat{x}(-i\\hbar) = \\boxed{-i\\hbar\\hat{x}}$$
<b>Part 2: Commutators with Momentum.</b><br>
By exact algebraic symmetry:
$$[\\hat{L}_z, \\hat{p}_x] = [\\hat{x}\\hat{p}_y, \\hat{p}_x] = [\\hat{x}, \\hat{p}_x]\\hat{p}_y = \\boxed{i\\hbar\\hat{p}_y}$$
$$[\\hat{L}_z, \\hat{p}_y] = -[\\hat{y}\\hat{p}_x, \\hat{p}_y] = -[\\hat{y}, \\hat{p}_y]\\hat{p}_x = \\boxed{-i\\hbar\\hat{p}_x}$$
<b>Physical Interpretation:</b><br>
An infinitesimal rotation about the $z$-axis by angle $d\\phi$ transforms coordinates as $\\delta x = -y \\, d\\phi$ and $\\delta y = x \\, d\\phi$. In quantum mechanics, the unitary rotation operator is $\\hat{U} = I - \\frac{i}{\\hbar}d\\phi \\, \\hat{L}_z$. The change in an operator is $\\delta \\hat{A} = -\\frac{i}{\\hbar}[\\hat{A}, \\hat{L}_z]d\\phi$. Thus, these commutators prove that $\\hat{L}_z$ is the rigorous quantum mechanical generator of rotations about the $z$-axis!</p>`,
    tested: 'Commutator algebra of orbital angular momentum with position and linear momentum vectors.',
    trap: 'Sign errors: [L_z, x] = +iħ y, while [L_z, y] = -iħ x.'
  },
  {
    id: 'w.6.1.2', sec: '6.1', marks: 5,
    title: 'Derivation of Matrix Elements of the Ladder Operators Ĵ±',
    tests: ['c.6.1.2', 'c.6.1.3'],
    prompt: `<p>Using the operator identity $\\hat{J}_-\\hat{J}_+ = \\hat{J}^2 - \\hat{J}_z^2 - \\hbar\\hat{J}_z$ and the adjoint relation $(\\hat{J}_+) ^\\dagger = \\hat{J}_-$, derive the normalization constant $C_{jm}^+$ in:
$$\\hat{J}_+|j, m\\rangle = C_{jm}^+ \\hbar |j, m+1\\rangle$$
assuming the standard Condon-Shortley positive real phase convention.</p>`,
    solution: `<p><b>Step 1: Compute the Norm Squared of $\\hat{J}_+|j, m\\rangle$.</b><br>
Let $|\psi\\rangle = \\hat{J}_+|j, m\\rangle$. Its squared norm is:
$$\\langle \\psi | \\psi \\rangle = \\langle j, m | (\\hat{J}_+) ^\\dagger \\hat{J}_+ | j, m \\rangle = \\langle j, m | \\hat{J}_- \\hat{J}_+ | j, m \\rangle$$
<b>Step 2: Express $\\hat{J}_-\\hat{J}_+$ in Terms of $\\hat{J}^2$ and $\\hat{J}_z$.</b><br>
$$\\hat{J}_-\\hat{J}_+ = \\hat{J}^2 - \\hat{J}_z^2 - \\hbar\\hat{J}_z$$
Act on the eigenstate $|j, m\\rangle$:
$$\\hat{J}_-\\hat{J}_+|j, m\\rangle = \\left[ j(j+1)\\hbar^2 - m^2\\hbar^2 - m\\hbar^2 \\right] |j, m\\rangle = \\hbar^2 \\left[ j(j+1) - m(m+1) \\right] |j, m\\rangle$$
<b>Step 3: Equate to $|C_{jm}^+|^2$.</b><br>
From $|\psi\\rangle = C_{jm}^+ \\hbar |j, m+1\\rangle$:
$$\\langle \\psi | \\psi \\rangle = |C_{jm}^+|^2 \\hbar^2 \\langle j, m+1 | j, m+1 \\rangle = |C_{jm}^+|^2 \\hbar^2$$
Equating the two expressions:
$$|C_{jm}^+|^2 \\hbar^2 = \\hbar^2 \\left[ j(j+1) - m(m+1) \\right] \\implies |C_{jm}^+| = \\sqrt{j(j+1) - m(m+1)}$$
Adopting the standard real positive convention:
$$\\boxed{C_{jm}^+ = \\sqrt{j(j+1) - m(m+1)}}$$
$$\\boxed{\\hat{J}_+|j, m\\rangle = \\hbar\\sqrt{j(j+1) - m(m+1)} |j, m+1\\rangle}$$</p>`,
    tested: 'Rigorous derivation of angular momentum ladder matrix elements using operator norms.',
    trap: 'Sign in m(m+1): for raising J+, it is -m(m+1); for lowering J-, it is -m(m-1).'
  },
  {
    id: 'w.6.2.1', sec: '6.2', marks: 5,
    title: 'Matrix Representation of Angular Momentum for j = 1',
    tests: ['c.6.2.1'],
    prompt: `<p>In the ordered orthonormal basis $\{|1, 1\\rangle, |1, 0\\rangle, |1, -1\\rangle\}$:
<ol>
  <li>Write down the diagonal matrix $J_z$.</li>
  <li>Construct the matrices for $\\hat{J}_+$ and $\\hat{J}_-$.</li>
  <li>Determine the matrix for $\\hat{J}_x = \\frac{1}{2}(\\hat{J}_+ + \\hat{J}_-)$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Matrix for $J_z$.</b><br>
The diagonal elements are $m\\hbar$ for $m = 1, 0, -1$:
$$\\boxed{J_z = \\hbar \\begin{pmatrix} 1 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & -1 \\end{pmatrix}}$$
<b>Part 2: Matrices for $\\hat{J}_+$ and $\\hat{J}_-$.</b><br>
Using $\\hat{J}_+|1, m\\rangle = \\hbar\\sqrt{2 - m(m+1)}|1, m+1\\rangle$:
- $\\hat{J}_+|1, 1\\rangle = 0$
- $\\hat{J}_+|1, 0\\rangle = \\hbar\\sqrt{2 - 0}|1, 1\\rangle = \\sqrt{2}\\hbar|1, 1\\rangle$
- $\\hat{J}_+|1, -1\\rangle = \\hbar\\sqrt{2 - (-1)(0)}|1, 0\\rangle = \\sqrt{2}\\hbar|1, 0\\rangle$
Thus $\\hat{J}_+$ has non-zero elements at $(1,2)$ and $(2,3)$:
$$\\boxed{J_+ = \\sqrt{2}\\hbar \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}}$$
Since $J_- = (J_+) ^\\dagger$:
$$\\boxed{J_- = \\sqrt{2}\\hbar \\begin{pmatrix} 0 & 0 & 0 \\\\ 1 & 0 & 0 \\\\ 0 & 1 & 0 \\end{pmatrix}}$$
<b>Part 3: Matrix for $J_x$.</b><br>
$$J_x = \\frac{1}{2}(J_+ + J_-) = \\frac{\\sqrt{2}\\hbar}{2} \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix} = \\boxed{\\frac{\\hbar}{\\sqrt{2}} \\begin{pmatrix} 0 & 1 & 0 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}}$$</p>`,
    tested: 'Construction of spin-1 angular momentum matrices from ladder operators.',
    trap: 'Omitting the 1/√2 factor in J_x.'
  },
  {
    id: 'w.6.2.2', sec: '6.2', marks: 5,
    title: 'Uncertainties ΔJ_x and ΔJ_y in Angular Momentum Eigenstates',
    tests: ['c.6.2.2'],
    prompt: `<p>For an angular momentum eigenstate $|j, m\\rangle$:
<ol>
  <li>Calculate $\\langle \\hat{J}_x \\rangle$ and $\\langle \\hat{J}_y \\rangle$.</li>
  <li>Calculate $\\langle \\hat{J}_x^2 \\rangle$ and $\\langle \\hat{J}_y^2 \\rangle$.</li>
  <li>Show that the Heisenberg generalized uncertainty relation $\\Delta J_x \\Delta J_y \\ge \\frac{\\hbar}{2}|\\langle \\hat{J}_z \\rangle|$ is satisfied, and identify when it becomes an equality.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Expectation Values of $\\hat{J}_x$ and $\\hat{J}_y$.</b><br>
Since $\\hat{J}_x = \\frac{1}{2}(\\hat{J}_+ + \\hat{J}_-)$ and $\\hat{J}_\\pm|j, m\\rangle \\propto |j, m\\pm 1\\rangle$:
$$\\langle j, m | \\hat{J}_\\pm | j, m \\rangle = 0 \\implies \\boxed{\\langle \\hat{J}_x \\rangle = 0, \\qquad \\langle \\hat{J}_y \\rangle = 0}$$
<b>Part 2: Expectation Values of Squares.</b><br>
By spherical symmetry in the transverse plane, $\\langle \\hat{J}_x^2 \\rangle = \\langle \\hat{J}_y^2 \\rangle$.<br>
Since $\\hat{J}^2 = \\hat{J}_x^2 + \\hat{J}_y^2 + \\hat{J}_z^2$:
$$\\langle \\hat{J}_x^2 \\rangle + \\langle \\hat{J}_y^2 \\rangle = \\langle \\hat{J}^2 \\rangle - \\langle \\hat{J}_z^2 \\rangle = j(j+1)\\hbar^2 - m^2\\hbar^2$$
Therefore:
$$\\boxed{\\langle \\hat{J}_x^2 \\rangle = \\langle \\hat{J}_y^2 \\rangle = \\frac{\\hbar^2}{2}\\left[ j(j+1) - m^2 \\right]}$$
Thus $\\Delta J_x = \\Delta J_y = \\hbar \\sqrt{\\frac{j(j+1) - m^2}{2}}$.<br>
<b>Part 3: Uncertainty Product.</b><br>
$$\\Delta J_x \\Delta J_y = \\frac{\\hbar^2}{2}\\left[ j(j+1) - m^2 \\right]$$
Heisenberg relation requires $\\Delta J_x \\Delta J_y \\ge \\frac{\\hbar}{2}|\\langle J_z \\rangle| = \\frac{\\hbar^2 |m|}{2}$.<br>
Notice that $j(j+1) - m^2 \\ge j(j+1) - j^2 = j \\ge |m|$.<br>
Hence:
$$\\Delta J_x \\Delta J_y = \\frac{\\hbar^2}{2}[j(j+1) - m^2] \\ge \\frac{\\hbar^2 |m|}{2} \\quad \\checkmark$$
<b>Minimum Uncertainty:</b> When $m = \\pm j$, $j(j+1) - j^2 = j = |m|$, so $\\Delta J_x \\Delta J_y = \\frac{\\hbar^2 j}{2} = \\frac{\\hbar}{2}|\\langle J_z \\rangle|$.<br>
The top and bottom states $|j, \\pm j\\rangle$ are <b>intelligent states (minimum uncertainty states)</b>!</p>`,
    tested: 'Transverse angular momentum variances and Heisenberg uncertainty relations.',
    trap: 'Assuming ⟨J_x²⟩ = 0 when ⟨J_x⟩ = 0.'
  },
  {
    id: 'w.6.4.1', sec: '6.4', marks: 5,
    title: 'Proof of the Master Pauli Identity (σ · A)(σ · B)',
    tests: ['c.6.4.2'],
    prompt: `<p>Using the algebraic properties of the Pauli matrices $\\{\\sigma_i, \\sigma_j\\} = 2\\delta_{ij}I$ and $[\\sigma_i, \\sigma_j] = 2i\\varepsilon_{ijk}\\sigma_k$, prove that for any two 3D vectors $\\mathbf{A}$ and $\\mathbf{B}$ that commute with $\\boldsymbol{\\sigma}$:
$$(\\boldsymbol{\\sigma} \\cdot \\mathbf{A})(\\boldsymbol{\\sigma} \\cdot \\mathbf{B}) = (\\mathbf{A} \\cdot \\mathbf{B})I + i\\boldsymbol{\\sigma} \\cdot (\\mathbf{A} \\times \\mathbf{B})$$</p>`,
    solution: `<p><b>Step 1: Expand in Component Sums.</b><br>
$$(\\boldsymbol{\\sigma} \\cdot \\mathbf{A})(\\boldsymbol{\\sigma} \\cdot \\mathbf{B}) = \\left( \\sum_{i=1}^3 \\sigma_i A_i \\right) \\left( \\sum_{j=1}^3 \\sigma_j B_j \\right) = \\sum_{i, j} \\sigma_i \\sigma_j A_i B_j$$
<b>Step 2: Decompose the Matrix Product $\\sigma_i \\sigma_j$.</b><br>
Any product can be written as the sum of its symmetric (anticommutator) and antisymmetric (commutator) parts:
$$\\sigma_i \\sigma_j = \\frac{1}{2}\\{\\sigma_i, \\sigma_j\\} + \\frac{1}{2}[\\sigma_i, \\sigma_j]$$
Substitute the fundamental Pauli identities:
$$\\frac{1}{2}\\{\\sigma_i, \\sigma_j\\} = \\delta_{ij}I, \\qquad \\frac{1}{2}[\\sigma_i, \\sigma_j] = i \\sum_k \\varepsilon_{ijk}\\sigma_k$$
Therefore:
$$\\sigma_i \\sigma_j = \\delta_{ij}I + i \\sum_k \\varepsilon_{ijk}\\sigma_k$$
<b>Step 3: Contract with $A_i B_j$.</b><br>
$$(\\boldsymbol{\\sigma} \\cdot \\mathbf{A})(\\boldsymbol{\\sigma} \\cdot \\mathbf{B}) = \\sum_{i, j} \\left( \\delta_{ij}I + i \\sum_k \\varepsilon_{ijk}\\sigma_k \\right) A_i B_j$$
$$= I \\sum_i A_i B_i + i \\sum_k \\sigma_k \\left( \\sum_{i, j} \\varepsilon_{ijk} A_i B_j \\right)$$
Recognizing the dot product $\\mathbf{A} \\cdot \\mathbf{B} = \\sum_i A_i B_i$ and the cross product $(\\mathbf{A} \\times \\mathbf{B})_k = \\sum_{i, j} \\varepsilon_{ijk} A_i B_j$:
$$\\boxed{(\\boldsymbol{\\sigma} \\cdot \\mathbf{A})(\\boldsymbol{\\sigma} \\cdot \\mathbf{B}) = (\\mathbf{A} \\cdot \\mathbf{B})I + i\\boldsymbol{\\sigma} \\cdot (\\mathbf{A} \\times \\mathbf{B})} \\quad \\checkmark$$</p>`,
    tested: 'Master Pauli matrix identity derivation using Levi-Civita and Kronecker delta tensors.',
    trap: 'Assuming A and B commute with each other when writing (A · B). If A and B are quantum operators that do not commute, extra operator commutators arise.'
  },
  {
    id: 'w.6.4.2', sec: '6.4', marks: 5,
    title: 'Eigenspinors of Ŝx and Measurement Probabilities',
    tests: ['c.6.4.2', 'c.6.4.3'],
    prompt: `<p>Consider the spin operator $\\hat{S}_x = \\frac{\\hbar}{2}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix}$.
<ol>
  <li>Find the eigenvalues and normalized eigenspinors of $\\hat{S}_x$ in the $\{|\\uparrow\\rangle, |\\downarrow\\rangle\}$ basis.</li>
  <li>If an electron is prepared in the state $|\\chi\\rangle = \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$, what are the probabilities of finding it with spin up ($+\\hbar/2$) and spin down ($-\\hbar/2$) along the $x$-axis?</li>
</ol></p>`,
    solution: `<p><b>Part 1: Eigenvalues and Eigenspinors of $\\hat{S}_x$.</b><br>
The characteristic equation is $\\det(S_x - \\lambda I) = \\lambda^2 - (\\hbar/2)^2 = 0 \\implies \\lambda = \\pm \\frac{\\hbar}{2}$.<br>
- For $\\lambda = +\\hbar/2$:
$$\\frac{\\hbar}{2}\\begin{pmatrix} 0 & 1 \\\\ 1 & 0 \\end{pmatrix} \\begin{pmatrix} a \\\\ b \\end{pmatrix} = \\frac{\\hbar}{2}\\begin{pmatrix} a \\\\ b \\end{pmatrix} \\implies a = b$$
Normalizing $|a|^2 + |b|^2 = 1 \\implies a = b = 1/\\sqrt{2}$:
$$\\boxed{|+x\\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ 1 \\end{pmatrix} = \\frac{|\\uparrow\\rangle + |\\downarrow\\rangle}{\\sqrt{2}}}$$
- For $\\lambda = -\\hbar/2$:
$$a = -b \\implies \\boxed{|-x\\rangle = \\frac{1}{\\sqrt{2}}\\begin{pmatrix} 1 \\\\ -1 \\end{pmatrix} = \\frac{|\\uparrow\\rangle - |\\downarrow\\rangle}{\\sqrt{2}}}$$
<b>Part 2: Measurement Probabilities.</b><br>
Project $|\\chi\\rangle = \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix}$ onto the $S_x$ eigenvectors:
$$\\langle +x | \\chi \\rangle = \\frac{1}{\\sqrt{2}}(1, \\; 1) \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\frac{1}{\\sqrt{10}}(1 + 2) = \\frac{3}{\\sqrt{10}}$$
$$P(S_x = +\\hbar/2) = |\\langle +x | \\chi \\rangle|^2 = \\left( \\frac{3}{\\sqrt{10}} \\right)^2 = \\boxed{\\frac{9}{10} = 0.90}$$
For $S_x = -\\hbar/2$:
$$\\langle -x | \\chi \\rangle = \\frac{1}{\\sqrt{2}}(1, \\; -1) \\frac{1}{\\sqrt{5}}\\begin{pmatrix} 1 \\\\ 2 \\end{pmatrix} = \\frac{1}{\\sqrt{10}}(1 - 2) = -\\frac{1}{\\sqrt{10}}$$
$$P(S_x = -\\hbar/2) = |\\langle -x | \\chi \\rangle|^2 = \\left( -\\frac{1}{\\sqrt{10}} \\right)^2 = \\boxed{\\frac{1}{10} = 0.10}$$
Check: $0.90 + 0.10 = 1.00$. $\\checkmark$</p>`,
    tested: 'Diagonalization of Sx and projection onto transverse spin eigenstates.',
    trap: 'Forgetting to normalize the target state or eigenspinors before taking inner products.'
  },
  {
    id: 'w.6.5.1', sec: '6.5', marks: 5,
    title: 'Addition of Two Spin-1/2 Particles: Derivation of Singlet and Triplet',
    tests: ['c.6.5.4'],
    prompt: `<p>Two spin-$1/2$ particles have total spin $\\hat{\\mathbf{S}} = \\hat{\\mathbf{S}}_1 + \\hat{\\mathbf{S}}_2$.
<ol>
  <li>Starting from the maximum projection state $|1, 1\\rangle = |\\uparrow\\uparrow\\rangle$, apply the total lowering operator $\\hat{S}_- = \\hat{S}_{1-} + \\hat{S}_{2-}$ to derive the remaining triplet states $|1, 0\\rangle$ and $|1, -1\\rangle$.</li>
  <li>Using orthogonality to $|1, 0\\rangle$, construct the singlet state $|0, 0\\rangle$.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Lowering the Triplet States.</b><br>
The maximum state is $|1, 1\\rangle = |\\uparrow\\uparrow\\rangle$.<br>
Act with $\\hat{S}_- = \\hat{S}_{1-} + \\hat{S}_{2-}$:
$$\\hat{S}_-|1, 1\\rangle = \\hbar\\sqrt{1(2) - 1(0)}|1, 0\\rangle = \\sqrt{2}\\hbar|1, 0\\rangle$$
Acting on the individual uncoupled particles:
$$\\hat{S}_{1-}|\\uparrow\\uparrow\\rangle = \\hbar|\\downarrow\\uparrow\\rangle, \\qquad \\hat{S}_{2-}|\\uparrow\\uparrow\\rangle = \\hbar|\\uparrow\\downarrow\\rangle$$
Equating:
$$\\sqrt{2}\\hbar|1, 0\\rangle = \\hbar(|\\uparrow\\downarrow\\rangle + |\\downarrow\\uparrow\\rangle) \\implies \\boxed{|1, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle + |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}}$$
Lower again:
$$\\hat{S}_-|1, 0\\rangle = \\hbar\\sqrt{1(2) - 0(-1)}|1, -1\\rangle = \\sqrt{2}\\hbar|1, -1\\rangle$$
$$(\\hat{S}_{1-} + \\hat{S}_{2-})\\frac{|\\uparrow\\downarrow\\rangle + |\\downarrow\\uparrow\\rangle}{\\sqrt{2}} = \\frac{\\hbar|\\downarrow\\downarrow\\rangle + \\hbar|\\downarrow\\downarrow\\rangle}{\\sqrt{2}} = \\sqrt{2}\\hbar|\\downarrow\\downarrow\\rangle$$
Thus:
$$\\boxed{|1, -1\\rangle = |\\downarrow\\downarrow\\rangle}$$
<b>Part 2: Construct the Singlet State $|0, 0\\rangle$.</b><br>
The state with $M = 0$ must be a linear combination of $|\\uparrow\\downarrow\\rangle$ and $|\\downarrow\\uparrow\\rangle$:
$$|0, 0\\rangle = \\alpha |\\uparrow\\downarrow\\rangle + \\beta |\\downarrow\\uparrow\\rangle$$
Orthogonality to $|1, 0\\rangle$ requires:
$$\\langle 1, 0 | 0, 0 \\rangle = \\frac{1}{\\sqrt{2}}(\\alpha + \\beta) = 0 \\implies \\beta = -\\alpha$$
Normalizing $|\\alpha|^2 + |\\beta|^2 = 1 \\implies 2|\\alpha|^2 = 1 \\implies \\alpha = 1/\\sqrt{2}$ (by standard positive phase convention):
$$\\boxed{|0, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle - |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}}$$</p>`,
    tested: 'Ladder operator derivation of coupled angular momentum states and orthogonality construction of singlets.',
    trap: 'Sign confusion between triplet |1, 0⟩ (+) and singlet |0, 0⟩ (-).'
  },
  {
    id: 'w.6.5.2', sec: '6.5', marks: 5,
    title: 'Spin-Orbit Coupling Splitting for a d-Electron',
    tests: ['c.6.5.5'],
    prompt: `<p>An electron in a hydrogen-like atom occupies a $d$-orbital ($l = 2$). The spin-orbit Hamiltonian is:
$$\\hat{H}_{\\text{SO}} = A \\, \\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}}$$
where $A$ is a positive coupling constant.
<ol>
  <li>What are the allowed values of the total angular momentum quantum number $J$?</li>
  <li>Calculate the energy shift $\\Delta E_{\\text{SO}}$ for each $J$ level.</li>
  <li>Determine the energy splitting between the two fine structure levels.</li>
</ol></p>`,
    solution: `<p><b>Part 1: Allowed $J$ Values.</b><br>
With $l = 2$ and $s = 1/2$:
$$J \\in \\{|2 - 1/2|, \\; 2 + 1/2\\} = \\boxed{J = \\frac{3}{2} \\quad \\text{and} \\quad J = \\frac{5}{2}}$$
<b>Part 2: Energy Shifts.</b><br>
Using $\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} = \\frac{1}{2}(\\hat{J}^2 - \\hat{L}^2 - \\hat{S}^2)$:
$$\\langle \\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} \\rangle = \\frac{\\hbar^2}{2}\\left[ J(J+1) - l(l+1) - s(s+1) \\right]$$
Here $l(l+1) = 2(3) = 6$ and $s(s+1) = \\frac{1}{2}\\frac{3}{2} = \\frac{3}{4}$.<br>
- For $J = 5/2$:
$$J(J+1) = \\frac{5}{2}\\frac{7}{2} = \\frac{35}{4}$$
$$\\Delta E(J=5/2) = A \\frac{\\hbar^2}{2}\\left( \\frac{35}{4} - 6 - \\frac{3}{4} \\right) = A \\frac{\\hbar^2}{2}\\left( \\frac{32}{4} - 6 \\right) = A \\frac{\\hbar^2}{2}(8 - 6) = \\boxed{+A \\hbar^2}$$
- For $J = 3/2$:
$$J(J+1) = \\frac{3}{2}\\frac{5}{2} = \\frac{15}{4}$$
$$\\Delta E(J=3/2) = A \\frac{\\hbar^2}{2}\\left( \\frac{15}{4} - 6 - \\frac{3}{4} \\right) = A \\frac{\\hbar^2}{2}\\left( 3 - 6 \\right) = \\boxed{-\\frac{3}{2}A\\hbar^2}$$
<b>Part 3: Fine Structure Splitting.</b><br>
$$\\Delta E_{\\text{split}} = \\Delta E(5/2) - \\Delta E(3/2) = A\\hbar^2 - \\left( -\\frac{3}{2}A\\hbar^2 \\right) = \\boxed{\\frac{5}{2}A\\hbar^2}$$
(Notice Landé interval rule: the splitting is proportional to the larger $J$: $\\frac{5}{2}A\\hbar^2$).</p>`,
    tested: 'Spin-orbit coupling operator evaluation and Landé interval rule.',
    trap: 'Forgetting the 3/4 from s(s+1) in the dot product expansion.'
  }
);

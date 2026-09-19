/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics II · Module II: Angular Momentum & Spin
   OMR / Objective Question Bank (OBJECTIVE)
   Types: MCQ (Single Choice), MSQ (Multiple Choice), NAT (Numerical Answer)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof OBJECTIVE === 'undefined') { var OBJECTIVE = []; }

OBJECTIVE.push(
  {
    id: 'o.6.1.1', sec: '6.1', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.6.1.1'],
    prompt: `<p>What is the value of the commutator $[\\hat{L}_x, \\hat{L}_y^2]$?</p>`,
    options: [
      { k: 'A', t: '$2i\\hbar \\hat{L}_z$' },
      { k: 'B', t: '$i\\hbar (\\hat{L}_y\\hat{L}_z + \\hat{L}_z\\hat{L}_y)$' },
      { k: 'C', t: '$-i\\hbar (\\hat{L}_y\\hat{L}_z + \\hat{L}_z\\hat{L}_y)$' },
      { k: 'D', t: '$0$' }
    ],
    answer: 'B',
    solution: `<p>Using the identity $[A, BC] = [A, B]C + B[A, C]$ with $B = C = \\hat{L}_y$:
$$[\\hat{L}_x, \\hat{L}_y^2] = [\\hat{L}_x, \\hat{L}_y]\\hat{L}_y + \\hat{L}_y[\\hat{L}_x, \\hat{L}_y]$$
Since $[\\hat{L}_x, \\hat{L}_y] = i\\hbar\\hat{L}_z$:
$$[\\hat{L}_x, \\hat{L}_y^2] = (i\\hbar\\hat{L}_z)\\hat{L}_y + \\hat{L}_y(i\\hbar\\hat{L}_z) = i\\hbar (\\hat{L}_z\\hat{L}_y + \\hat{L}_y\\hat{L}_z)$$
By commutativity of addition, this equals $i\\hbar (\\hat{L}_y\\hat{L}_z + \\hat{L}_z\\hat{L}_y)$.</p>`,
    tested: 'Leibniz commutator expansion rule applied to angular momentum powers.',
    trap: 'Writing 2iħ L_z L_y, which incorrectly assumes L_y and L_z commute with each other!'
  },
  {
    id: 'o.6.1.2', sec: '6.1', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.6.1.3'],
    prompt: `<p>What is the eigenvalue of the total angular momentum squared operator $\\hat{J}^2$ for a system in a state with angular momentum quantum number $j = 3/2$?</p>`,
    options: [
      { k: 'A', t: '$\\dfrac{9}{4}\\hbar^2$' },
      { k: 'B', t: '$\\dfrac{15}{4}\\hbar^2$' },
      { k: 'C', t: '$\\dfrac{3}{2}\\hbar^2$' },
      { k: 'D', t: '$\\dfrac{5}{2}\\hbar^2$' }
    ],
    answer: 'B',
    solution: `<p>The eigenvalue of $\\hat{J}^2$ is $j(j+1)\\hbar^2$.<br>
For $j = 3/2$:
$$j(j+1) = \\frac{3}{2}\\left( \\frac{3}{2} + 1 \\right) = \\frac{3}{2}\\left( \\frac{5}{2} \\right) = \\frac{15}{4}$$
Therefore, the eigenvalue is $\\frac{15}{4}\\hbar^2$.</p>`,
    tested: 'Eigenvalue formula j(j+1)ħ² for half-integer angular momentum.',
    trap: 'Squaring j directly: (3/2)² = 9/4 is WRONG; the eigenvalue is j(j+1), not j².'
  },
  {
    id: 'o.6.2.1', sec: '6.2', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.6.5.2'],
    prompt: `<p>Two independent quantum systems with angular momenta $j_1 = 2$ and $j_2 = 3/2$ are coupled to form states of total angular momentum $\\hat{\\mathbf{J}} = \\hat{\\mathbf{J}}_1 + \\hat{\\mathbf{J}}_2$. What is the total dimension of the coupled Hilbert space?</p>`,
    answer: '20',
    solution: `<p>The dimension of the product Hilbert space is:
$$N = (2j_1 + 1)(2j_2 + 1) = (2(2) + 1)(2(3/2) + 1) = (5)(4) = 20$$
We can also verify via the sum over allowed total $J$ values:
$$J \\in \\{|2 - 3/2|, \\dots, 2 + 3/2\\} = \\{1/2, 3/2, 5/2, 7/2\\}$$
Summing $(2J + 1)$:
$$(2(1/2)+1) + (2(3/2)+1) + (2(5/2)+1) + (2(7/2)+1) = 2 + 4 + 6 + 8 = 20$$
The total dimension is exactly <b>20</b>.</p>`,
    tested: 'Dimension theorem and triangle inequality for angular momentum coupling.',
    trap: 'Forgetting the +1 in (2j+1): (2)(1.5) = 3 is WRONG.'
  },
  {
    id: 'o.6.4.1', sec: '6.4', type: 'MSQ', marks: 2, neg: 0, time: 120,
    tests: ['c.6.4.2'],
    prompt: `<p>Select ALL correct mathematical and physical properties of the $2 \\times 2$ Pauli spin matrices $\\boldsymbol{\\sigma} = (\\sigma_x, \\sigma_y, \\sigma_z)$:</p>`,
    options: [
      { k: 'A', t: '$\\sigma_x^2 = \\sigma_y^2 = \\sigma_z^2 = I$' },
      { k: 'B', t: '$\\text{Tr}(\\sigma_i) = 0$ and $\\det(\\sigma_i) = -1$ for all $i \\in \\{x, y, z\\}$' },
      { k: 'C', t: '$\\sigma_x \\sigma_y + \\sigma_y \\sigma_x = 0$ (they anticommute)' },
      { k: 'D', t: '$[\\sigma_x, \\sigma_y] = i\\sigma_z$' }
    ],
    answer: ['A', 'B', 'C'],
    solution: `<p><b>Analysis of Options:</b>
<ul>
  <li><b>A is correct:</b> The square of every Pauli matrix is the $2\\times 2$ identity matrix $I$.</li>
  <li><b>B is correct:</b> All Pauli matrices have eigenvalues $+1$ and $-1$, so $\\text{Tr}(\\sigma_i) = 1 + (-1) = 0$, and $\\det(\\sigma_i) = (1)(-1) = -1$.</li>
  <li><b>C is correct:</b> For distinct indices $i \\neq j$, $\\{\\sigma_i, \\sigma_j\\} = \\sigma_i\\sigma_j + \\sigma_j\\sigma_i = 0$.</li>
  <li><b>D is FALSE:</b> The commutator is $[\\sigma_x, \\sigma_y] = 2i\\sigma_z$ (missing the factor of 2). (Recall $[S_x, S_y] = i\\hbar S_z \\implies [\\frac{\\hbar}{2}\\sigma_x, \\frac{\\hbar}{2}\\sigma_y] = i\\hbar \\frac{\\hbar}{2}\\sigma_z \\implies [\\sigma_x, \\sigma_y] = 2i\\sigma_z$).</li>
</ul></p>`,
    tested: 'Fundamental Pauli matrix algebraic identities, trace, determinant, and commutators.',
    trap: 'Selecting D (confusing [S_x, S_y] = iħ S_z with [σ_x, σ_y] = 2i σ_z).'
  },
  {
    id: 'o.6.4.2', sec: '6.4', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.6.4.3'],
    prompt: `<p>An electron is in the spin state:
$$|\\chi\\rangle = \\frac{1}{\\sqrt{5}}|\\uparrow\\rangle + \\frac{2}{\\sqrt{5}}|\\downarrow\\rangle$$
If a measurement of the spin component along the $x$-axis ($S_x$) is performed, what is the probability of finding the result $+\\hbar/2$? (Give your answer as a decimal fraction, e.g. 0.85).</p>`,
    answer: '0.9',
    solution: `<p>The normalized eigenstate of $S_x$ with eigenvalue $+\\hbar/2$ is:
$$|+x\\rangle = \\frac{1}{\\sqrt{2}}(|\\uparrow\\rangle + |\\downarrow\\rangle)$$
The probability amplitude is:
$$\\langle +x | \\chi \\rangle = \\frac{1}{\\sqrt{2}}\\left( \\langle \\uparrow | + \\langle \\downarrow | \\right) \\left( \\frac{1}{\\sqrt{5}}|\\uparrow\\rangle + \\frac{2}{\\sqrt{5}}|\\downarrow\\rangle \\right) = \\frac{1}{\\sqrt{10}}(1 + 2) = \\frac{3}{\\sqrt{10}}$$
The probability is:
$$P(S_x = +\\hbar/2) = |\\langle +x | \\chi \\rangle|^2 = \\left( \\frac{3}{\\sqrt{10}} \\right)^2 = \\frac{9}{10} = \\mathbf{0.9}$$</p>`,
    tested: 'Measurement probability for non-diagonal spin component Sx in an arbitrary spinor.',
    trap: 'Computing |1/√5|² = 0.20, which is the probability of measuring S_z = +ħ/2, not S_x!'
  },
  {
    id: 'o.6.4.3', sec: '6.4', type: 'MCQ', marks: 1, neg: -0.33, time: 60,
    tests: ['c.6.4.1'],
    prompt: `<p>A beam of neutral atoms in a state with total angular momentum quantum number $J = 5/2$ passes through a Stern-Gerlach apparatus with an inhomogeneous magnetic field. Into how many discrete traces will the beam split on the detector screen?</p>`,
    options: [
      { k: 'A', t: '5' },
      { k: 'B', t: '6' },
      { k: 'C', t: '2' },
      { k: 'D', t: '7' }
    ],
    answer: 'B',
    solution: `<p>In a Stern-Gerlach apparatus with field along $z$, the beam splits according to the allowed values of $M_J$, which ranges from $-J$ to $+J$ in unit integer steps.<br>
The number of beams is the degeneracy:
$$2J + 1 = 2\\left(\\frac{5}{2}\\right) + 1 = 5 + 1 = 6$$
The 6 discrete beams correspond to $M_J = +5/2, +3/2, +1/2, -1/2, -3/2, -5/2$.</p>`,
    tested: 'Stern-Gerlach beam splitting multiplicity 2J + 1.',
    trap: 'Answering 5 by confusing 2J with 2J+1.'
  },
  {
    id: 'o.6.5.1', sec: '6.5', type: 'NAT', marks: 2, neg: 0, time: 90,
    tests: ['c.6.5.4'],
    prompt: `<p>For two spin-$1/2$ particles in the singlet state $|0, 0\\rangle = \\frac{|\\uparrow\\downarrow\\rangle - |\\downarrow\\uparrow\\rangle}{\\sqrt{2}}$, the expectation value $\\langle \\hat{\\mathbf{S}}_1 \\cdot \\hat{\\mathbf{S}}_2 \\rangle = C \\, \\hbar^2$. What is the value of the constant $C$? (Express as a decimal, e.g. -0.5).</p>`,
    answer: '-0.75',
    solution: `<p>The total spin operator is $\\hat{\\mathbf{S}} = \\hat{\\mathbf{S}}_1 + \\hat{\\mathbf{S}}_2$.<br>
Squaring:
$$\\hat{S}^2 = \\hat{S}_1^2 + \\hat{S}_2^2 + 2\\hat{\\mathbf{S}}_1 \\cdot \\hat{\\mathbf{S}}_2$$
Since $s_1 = s_2 = 1/2$:
$$\\hat{S}_1^2 = \\hat{S}_2^2 = \\frac{1}{2}\\left( \\frac{1}{2} + 1 \\right)\\hbar^2 = \\frac{3}{4}\\hbar^2$$
Therefore:
$$\\hat{\\mathbf{S}}_1 \\cdot \\hat{\\mathbf{S}}_2 = \\frac{1}{2}\\left( \\hat{S}^2 - \\frac{3}{4}\\hbar^2 - \\frac{3}{4}\\hbar^2 \\right) = \\frac{1}{2}\\left( \\hat{S}^2 - \\frac{3}{2}\\hbar^2 \\right)$$
For the singlet state, the total spin is $S = 0$, so $\\hat{S}^2|0, 0\\rangle = 0$:
$$\\langle \\hat{\\mathbf{S}}_1 \\cdot \\hat{\\mathbf{S}}_2 \\rangle = \\frac{1}{2}\\left( 0 - \\frac{3}{2}\\hbar^2 \\right) = -\\frac{3}{4}\\hbar^2 = -0.75 \\, \\hbar^2$$
Thus $C = \\mathbf{-0.75}$.</p>`,
    tested: 'Operator identity S₁ · S₂ and eigenvalue evaluation in the singlet state.',
    trap: 'Writing +0.25 (which is the value for the triplet state S = 1).'
  },
  {
    id: 'o.6.5.2', sec: '6.5', type: 'MCQ', marks: 2, neg: -0.66, time: 90,
    tests: ['c.6.5.5'],
    prompt: `<p>In the presence of spin-orbit coupling $\\hat{H}_{\\text{SO}} = A \\hat{\\mathbf{L}} \\cdot \\hat{\\mathbf{S}}$, which of the following operators is a constant of motion (commutes with $\\hat{H}_{\\text{SO}}$)?</p>`,
    options: [
      { k: 'A', t: '$\\hat{L}_z$' },
      { k: 'B', t: '$\\hat{S}_z$' },
      { k: 'C', t: '$\\hat{J}^2$' },
      { k: 'D', t: '$\\hat{p}_z$' }
    ],
    answer: 'C',
    solution: `<p>Using $\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}} = \\frac{1}{2}(\\hat{J}^2 - \\hat{L}^2 - \\hat{S}^2)$:<br>
The operators that commute with $\\hat{H}_{\\text{SO}}$ are $\\hat{J}^2, \\hat{J}_z, \\hat{L}^2, \\hat{S}^2$.<br>
Neither $\\hat{L}_z$ nor $\\hat{S}_z$ commutes with $\\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}$ because the spin-orbit torque exchanges angular momentum between orbital and spin degrees of freedom: $[\\hat{L}_z, \\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}] = -[\\hat{S}_z, \\hat{\\mathbf{L}}\\cdot\\hat{\\mathbf{S}}] \\neq 0$.<br>
Only the total angular momentum $\\hat{\\mathbf{J}} = \\hat{\\mathbf{L}} + \\hat{\\mathbf{S}}$ is conserved, so $[\\hat{J}^2, \\hat{H}_{\\text{SO}}] = 0$.</p>`,
    tested: 'Conservation laws and good quantum numbers under spin-orbit coupling.',
    trap: 'Choosing L_z or S_z, which are broken by the internal magnetic torque between L and S.'
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module III — Mathematical Tools of Quantum Mechanics
   Prescribed Text: Nouredine Zettili 2e (Chapter 2: §§2.2–2.7)
   Sections: 3.1 to 3.7 (23 Core Concepts with full derivation ladders & flashcards)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

CONCEPTS.push(
  /* ── 3.1 Hilbert Space & Dirac Notation ───────────────────────────────────── */
  {
    id: 'c.3.1.1', sec: '3.1', kind: 'definition', tier: 'core',
    title: 'Linear Vector Spaces and Hilbert Space',
    oneLine: 'Quantum states inhabit a complex Hilbert space: a complete linear vector space endowed with an inner product.',
    statement: `A <b>Hilbert space</b> $\\mathcal{H}$ is a complex vector space equipped with an inner product $\\langle \\cdot | \\cdot \\rangle$ that is <b>complete</b> under the norm induced by the inner product (every Cauchy sequence converges to an element in $\\mathcal{H}$).
In quantum mechanics, the space of square-integrable wave functions:
$$\\mathcal{H} = L^2(\\mathbb{R}) = \\left\\{ \\psi(x) : \\int_{-\\infty}^\\infty |\\psi(x)|^2 dx < \\infty \\right\\}$$
forms an infinite-dimensional complex Hilbert space. Every physical state is represented by a ray (unit-norm vector) in $\\mathcal{H}$.`,
    intuition: `Think of Hilbert space as regular 3D Euclidean geometry elevated to infinite dimensions with complex coordinates. Just as any arrow in 3D can be expanded in $\\hat{i}, \\hat{j}, \\hat{k}$, any quantum state can be expanded in basis eigenstates. Completeness ensures that there are no "holes" or missing limit states: if you superpose an infinite series of states, the resulting state still lives inside the physical universe.`,
    needs: ['c.1.1.1'],
    traps: [
      `Confusing Hilbert space with physical 3D coordinate space. A particle moves in 3D real space $\\mathbb{R}^3$, but its wave function lives in an infinite-dimensional abstract function space $\\mathcal{H}$.`,
      `Thinking plane waves $e^{ikx}$ belong to the Hilbert space $L^2(\\mathbb{R})$. They do not, because $\\int |e^{ikx}|^2 dx = \\infty$; they belong to the extended "rigged Hilbert space".`
    ],
    cards: [
      { q: 'What is the definition of a Hilbert space in quantum mechanics?', a: 'A complete linear vector space over the complex numbers equipped with an inner product.', kind: 'state' },
      { q: 'Why is the condition of completeness essential for quantum mechanics?', a: 'It guarantees that infinite linear superpositions of physical states always converge to a valid state within the same space.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.1.2', sec: '3.1', kind: 'definition', tier: 'core',
    title: 'Dirac Notation: Kets, Bras, and Dual Space',
    oneLine: 'A state vector is a ket |ψ⟩ in ℋ; its dual vector is a bra ⟨ψ| in the dual space ℋ*, related by antilinear correspondence.',
    statement: `P.A.M. Dirac introduced the bracket formalism unifying wave and matrix mechanics:
1. <b>Ket Vector $|\\psi\\rangle \\in \\mathcal{H}$:</b> Represents a physical quantum state vector (abstract state).
2. <b>Bra Vector $\\langle\\phi| \\in \\mathcal{H}^*$:</b> A continuous linear functional belonging to the dual space $\\mathcal{H}^*$ that maps kets to complex numbers: $\\langle\\phi|: |\\psi\\rangle \\mapsto \\langle\\phi|\\psi\\rangle \\in \\mathbb{C}$.
3. <b>Antilinear Dual Correspondence:</b>
$$|\\psi\\rangle = c_1 |\\psi_1\\rangle + c_2 |\\psi_2\\rangle \\quad \\Longleftrightarrow \\quad \\langle\\psi| = c_1^* \\langle\\psi_1| + c_2^* \\langle\\psi_2|$$
Taking the dual of a ket vector conjugates all complex scalar coefficients.`,
    intuition: `A ket $|\\psi\\rangle$ is like an abstract column vector. A bra $\\langle\\phi|$ is like a conjugate transpose row vector. When you bring them together into a "bra-ket" $\\langle\\phi|\\psi\\rangle$, they snap together to form an inner product (a single complex number). This cleanses quantum mechanics of arbitrary coordinate choices: the state is just $|\\psi\\rangle$, independent of whether you view it in position space, momentum space, or energy space.`,
    needs: ['c.3.1.1'],
    traps: [
      `Writing $\\langle c\\psi| = c \\langle\\psi|$. Dual correspondence is antilinear: $\\langle c\\psi| = c^* \\langle\\psi|$. Complex scalars MUST be conjugated when moving from ket to bra.`,
      `Thinking $|\\psi\\rangle$ is identical to $\\psi(x)$. $|\\psi\\rangle$ is coordinate-free; $\\psi(x) = \\langle x|\\psi\\rangle$ is merely its projection onto the position basis.`
    ],
    cards: [
      { q: 'If $|\\psi\\rangle = (2 + 3i)|u\\rangle - 4|v\\rangle$, what is its corresponding dual bra vector $\\langle\\psi|$?', a: '$\\langle\\psi| = (2 - 3i)\\langle u| - 4\\langle v|$.', kind: 'state' },
      { q: 'What is the relationship between the ket $|\\psi\\rangle$ and the wave function $\\psi(x)$ in Dirac notation?', a: '$\\psi(x) = \\langle x|\\psi\\rangle$ is the projection of the abstract state ket onto the position eigenbra $\\langle x|$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.1.3', sec: '3.1', kind: 'theorem', tier: 'core',
    title: 'The Inner Product and Cauchy–Schwarz Inequality',
    oneLine: 'For any two states, |⟨ϕ|ψ⟩|² ≤ ⟨ϕ|ϕ⟩⟨ψ|ψ⟩; equality holds if and only if |ϕ⟩ and |ψ⟩ are linearly dependent.',
    statement: `The inner product on $\\mathcal{H}$ satisfies:
1. <b>Skew-symmetry (Hermitian property):</b> $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle^*$
2. <b>Linearity in ket, antilinearity in bra:</b> $\\langle\\phi| c_1\\psi_1 + c_2\\psi_2 \\rangle = c_1\\langle\\phi|\\psi_1\\rangle + c_2\\langle\\phi|\\psi_2\\rangle$
3. <b>Positive definiteness:</b> $\\langle\\psi|\\psi\\rangle \\ge 0$, with $\\langle\\psi|\\psi\\rangle = 0 \\iff |\\psi\\rangle = 0$.
<b>Cauchy–Schwarz Inequality:</b>
$$\\boxed{|\\langle\\phi|\\psi\\rangle|^2 \\le \\langle\\phi|\\phi\\rangle \\langle\\psi|\\psi\\rangle}$$
Equality holds if and only if $|\\psi\\rangle = c |\\phi\\rangle$ for some scalar $c \\in \\mathbb{C}$.`,
    intuition: `This is the quantum version of the dot product inequality $|\mathbf{u} \\cdot \\mathbf{v}| \\le |\\mathbf{u}| |\\mathbf{v}|$. The overlap between two quantum states can never exceed the product of their lengths. If normalized, $|\\langle\\phi|\\psi\\rangle| \\le 1$. The Cauchy–Schwarz inequality is the mathematical bedrock from which every quantum uncertainty relation is derived!`,
    needs: ['c.3.1.2'],
    traps: [
      `Assuming $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle$. Because the field is complex, reversing the order conjugates the result: $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle^*$.`,
      `Forgetting that the norm is always non-negative. $\\langle\\psi|\\psi\\rangle = \\int |\\psi(x)|^2 dx \\ge 0$; an imaginary or negative norm is mathematically impossible in a Hilbert space.`
    ],
    proof: {
      idea: 'Consider the state |χ⟩ = |ψ⟩ - (⟨ϕ|ψ⟩ / ⟨ϕ|ϕ⟩)|ϕ⟩ and use positive definiteness ⟨χ|χ⟩ ≥ 0.',
      why: 'Show that the squared norm of any vector must be greater than or equal to zero.',
      rungs: [
        {
          why: 'Construct Orthogonal Remainder Vector',
          m: '$$|\\chi\\rangle = |\\psi\\rangle - \\lambda |\\phi\\rangle, \\quad \\text{where } \\lambda = \\frac{\\langle\\phi|\\psi\\rangle}{\\langle\\phi|\\phi\\rangle}$$',
          meaning: 'What this really means: We subtract from |ψ⟩ its shadow along |ϕ⟩, leaving only the perpendicular component.',
          label: 'Construct Orthogonal Remainder Vector',
          math: '|\\chi\\rangle = |\\psi\\rangle - \\lambda |\\phi\\rangle, \\quad \\text{where } \\lambda = \\frac{\\langle\\phi|\\psi\\rangle}{\\langle\\phi|\\phi\\rangle}',
          note: 'Subtract the projection along |ϕ⟩.'
        },
        {
          why: 'Compute Norm of Remainder Vector',
          m: '$$\\langle\\chi|\\chi\\rangle = \\langle\\psi - \\lambda\\phi | \\psi - \\lambda\\phi\\rangle = \\langle\\psi|\\psi\\rangle - \\lambda^* \\langle\\phi|\\psi\\rangle - \\lambda \\langle\\psi|\\phi\\rangle + |\\lambda|^2 \\langle\\phi|\\phi\\rangle$$',
          meaning: 'What this really means: Expand the inner product of the remainder vector with itself.',
          label: 'Compute Norm of Remainder Vector',
          math: '\\langle\\chi|\\chi\\rangle = \\langle\\psi - \\lambda\\phi | \\psi - \\lambda\\phi\\rangle = \\langle\\psi|\\psi\\rangle - \\lambda^* \\langle\\phi|\\psi\\rangle - \\lambda \\langle\\psi|\\phi\\rangle + |\\lambda|^2 \\langle\\phi|\\phi\\rangle',
          note: 'Expand using antilinearity of the bra.'
        },
        {
          why: 'Substitute Value of λ',
          m: '$$\\lambda^* \\langle\\phi|\\psi\\rangle = \\frac{\\langle\\psi|\\phi\\rangle \\langle\\phi|\\psi\\rangle}{\\langle\\phi|\\phi\\rangle} = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}, \\quad |\\lambda|^2 \\langle\\phi|\\phi\\rangle = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}$$',
          meaning: 'What this really means: The middle cross-terms and the final term simplify into identical quotients.',
          label: 'Substitute Value of λ',
          math: '\\lambda^* \\langle\\phi|\\psi\\rangle = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}, \\quad |\\lambda|^2 \\langle\\phi|\\phi\\rangle = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}',
          note: 'Cross-terms combine.'
        },
        {
          why: 'Apply Positive Definiteness',
          m: '$$\\langle\\chi|\\chi\\rangle = \\langle\\psi|\\psi\\rangle - \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle} \\ge 0$$',
          meaning: 'What this really means: A squared vector length can never be negative.',
          label: 'Apply Positive Definiteness',
          math: '\\langle\\psi|\\psi\\rangle - \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle} \\ge 0',
          note: 'Norm of |χ⟩ must be ≥ 0.'
        },
        {
          why: 'Conclude Cauchy-Schwarz Inequality',
          m: '$$|\\langle\\phi|\\psi\\rangle|^2 \\le \\langle\\phi|\\phi\\rangle \\langle\\psi|\\psi\\rangle$$',
          meaning: 'What this really means: Multiplying by ⟨ϕ|ϕ⟩ produces the fundamental bound.',
          label: 'Conclude Cauchy-Schwarz Inequality',
          math: '|\\langle\\phi|\\psi\\rangle|^2 \\le \\langle\\phi|\\phi\\rangle \\langle\\psi|\\psi\\rangle',
          note: 'Exact statement of the Schwarz inequality.'
        }
      ]
    },
    cards: [
      { q: 'State the Cauchy–Schwarz inequality for two vectors $|\\phi\\rangle$ and $|\\psi\\rangle$ in a Hilbert space.', a: '$|\\langle\\phi|\\psi\\rangle|^2 \\le \\langle\\phi|\\phi\\rangle \\langle\\psi|\\psi\\rangle$.', kind: 'state' },
      { q: 'Under what physical condition does the Cauchy–Schwarz inequality become an exact equality?', a: 'When the two state vectors are linearly dependent (parallel in Hilbert space): $|\\psi\\rangle = c |\\phi\\rangle$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.1.4', sec: '3.1', kind: 'property', tier: 'core',
    title: 'Orthonormal Basis and Completeness (Closure) Relation',
    oneLine: 'A set of orthonormal states {|ϕ_n⟩} forms a complete basis if and only if ∑_n |ϕ_n⟩⟨ϕ_n| = Î.',
    statement: `A discrete set of states $\{ |\\phi_n\\rangle \}$ is an <b>orthonormal basis</b> of $\\mathcal{H}$ if:
1. <b>Orthonormality:</b> $\\langle \\phi_m | \\phi_n \\rangle = \\delta_{mn}$
2. <b>Completeness (Closure Relation):</b>
$$\\boxed{\\sum_{n} |\\phi_n\\rangle \\langle\\phi_n| = \\hat{I}}$$
where $\\hat{I}$ is the identity operator.
Operating on any arbitrary state $|\\psi\\rangle$:
$$|\\psi\\rangle = \\hat{I}|\\psi\\rangle = \\sum_n |\\phi_n\\rangle \\langle\\phi_n|\\psi\\rangle = \\sum_n c_n |\\phi_n\\rangle$$
where $c_n = \\langle\\phi_n|\\psi\\rangle$ is the probability amplitude of state $|\\psi\\rangle$ along basis vector $|\\phi_n\\rangle$.`,
    intuition: `The completeness relation is the most powerful algebraic tool in quantum mechanics. Inserting $\\hat{I} = \\sum |\\phi_n\\rangle\\langle\\phi_n|$ into any matrix element or operator product is like "slipping in a 1" in algebra—it decomposes any abstract expression into explicit matrix elements and basis components with zero effort.`,
    needs: ['c.3.1.2', 'c.3.1.3'],
    traps: [
      `Confusing the inner product $\\langle\\phi_n|\\phi_n\\rangle$ (a scalar number, $= 1$) with the outer product $|\\phi_n\\rangle\\langle\\phi_n|$ (an operator matrix, $= \\hat{P}_n$).`,
      `Using the discrete sum for a continuous spectrum. Continuous bases use an integral: $\\int |x\\rangle\\langle x| dx = \\hat{I}$.`
    ],
    cards: [
      { q: 'What is the closure (completeness) relation for a discrete orthonormal basis $\{|\\phi_n\\rangle\}$?', a: '$\\sum_n |\\phi_n\\rangle\\langle\\phi_n| = \\hat{I}$.', kind: 'state' },
      { q: 'How do you obtain the expansion coefficient $c_n$ of $|\\psi\\rangle = \\sum c_n |\\phi_n\\rangle$ in Dirac notation?', a: '$c_n = \\langle\\phi_n|\\psi\\rangle$.', kind: 'recall' }
    ]
  },

  /* ── 3.2 Hermitian Operators & Observables ────────────────────────────────── */
  {
    id: 'c.3.2.1', sec: '3.2', kind: 'definition', tier: 'core',
    title: 'Linear Operators and Projection Operators',
    oneLine: 'An operator Â maps kets to kets; a projection operator P̂_n = |ϕ_n⟩⟨ϕ_n| is idempotent: P̂_n² = P̂_n.',
    statement: `A <b>linear operator</b> $\\hat{A}$ maps kets to kets: $\\hat{A}(c_1|\\psi_1\\rangle + c_2|\\psi_2\\rangle) = c_1\\hat{A}|\\psi_1\\rangle + c_2\\hat{A}|\\psi_2\\rangle$.
The <b>projection operator</b> $\\hat{P}_\\psi$ onto a normalized state $|\\psi\\rangle$ is the outer product:
$$\\hat{P}_\\psi = |\\psi\\rangle \\langle\\psi|$$
<b>Properties of Projectors:</b>
1. <b>Hermitian:</b> $\\hat{P}_\\psi^\\dagger = \\hat{P}_\\psi$
2. <b>Idempotent:</b> $\\boxed{\\hat{P}_\\psi^2 = \\hat{P}_\\psi}$ (projecting twice is identical to projecting once)
3. <b>Orthogonality:</b> For distinct orthonormal basis states, $\\hat{P}_m \\hat{P}_n = \\delta_{mn}\\hat{P}_n$.`,
    intuition: `A projection operator is a filter. Think of a polarizing sunglasses lens: the first lens projects unpolarized light onto vertically polarized light. Passing it through an identical second vertical lens does nothing further: $\\hat{P}^2 = \\hat{P}$. If you project onto state $n$, the particle is now in state $n$; projecting again leaves it in state $n$.`,
    needs: ['c.3.1.4'],
    traps: [
      `Thinking the eigenvalues of a projection operator can be arbitrary. Since $\\hat{P}^2 = \\hat{P}$, $\\lambda^2 = \\lambda \\implies \\lambda = 0$ or $1$. The only allowed eigenvalues of any projector are $0$ and $1$!`,
      `Assuming projector matrices have determinant 1. For an $N$-dimensional space ($N > 1$), a rank-1 projector has eigenvalues $(1, 0, \\dots, 0)$, so $\\det(\\hat{P}) = 0$.`
    ],
    cards: [
      { q: 'What algebraic condition defines an idempotent operator (projection operator)?', a: '$\\hat{P}^2 = \\hat{P}$.', kind: 'state' },
      { q: 'What are the only possible eigenvalues of a projection operator?', a: 'Only $\\lambda = 0$ and $\\lambda = 1$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.2.2', sec: '3.2', kind: 'definition', tier: 'core',
    title: 'The Hermitian Adjoint (Conjugate Transpose)',
    oneLine: 'The adjoint Â† satisfies ⟨ϕ|Â|ψ⟩* = ⟨ψ|Â†|ϕ⟩, with properties (ÂB̂)† = B̂†Â† and (cÂ)† = c*Â†.',
    statement: `For any linear operator $\\hat{A}$, its <b>Hermitian adjoint</b> (or adjoint) $\\hat{A}^\\dagger$ is uniquely defined by the inner product relation:
$$\\boxed{\\langle \\phi | \\hat{A} | \\psi \\rangle^* = \\langle \\psi | \\hat{A}^\\dagger | \\phi \\rangle} \\quad \\text{for all } |\\phi\\rangle, |\\psi\\rangle \\in \\mathcal{H}$$
<b>Algebraic Properties of Adjoints:</b>
1. $(\\hat{A}^\\dagger)^\\dagger = \\hat{A}$
2. $(c\\hat{A})^\\dagger = c^* \\hat{A}^\\dagger$ (antilinear with respect to scalars)
3. $(\\hat{A} + \\hat{B})^\\dagger = \\hat{A}^\\dagger + \\hat{B}^\\dagger$
4. $\\boxed{(\\hat{A}\\hat{B})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger}$ (order inverts!)
5. $(|\\phi\\rangle \\langle\\psi|)^\\dagger = |\\psi\\rangle \\langle\\phi|$`,
    intuition: `In matrix language, $\\hat{A}^\\dagger$ is the conjugate transpose: take the transpose matrix $A^T$ and complex-conjugate every entry. Just like transposing matrices inverts the product $(AB)^T = B^T A^T$, taking the adjoint inverts the operator sequence: $(\\hat{A}\\hat{B})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger$.`,
    needs: ['c.3.2.1'],
    traps: [
      `Writing $(\\hat{A}\\hat{B})^\\dagger = \\hat{A}^\\dagger \\hat{B}^\\dagger$. The order MUST be reversed: $(\\hat{A}\\hat{B})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger$.`,
      `Forgetting to conjugate scalars: $(i\\hat{A})^\\dagger = -i\\hat{A}^\\dagger$.`
    ],
    cards: [
      { q: 'What is the Hermitian adjoint of the operator product $(\\hat{A}\\hat{B}\\hat{C})^\\dagger$?', a: '$\\hat{C}^\\dagger \\hat{B}^\\dagger \\hat{A}^\\dagger$.', kind: 'state' },
      { q: 'What is the Hermitian adjoint of the outer product $(|\\phi\\rangle\\langle\\psi|)^\\dagger$?', a: '$|\\psi\\rangle\\langle\\phi|$.', kind: 'state' }
    ]
  },
  {
    id: 'c.3.2.3', sec: '3.2', kind: 'theorem', tier: 'core',
    title: 'Hermitian Operators and Physical Observables',
    oneLine: 'An operator is Hermitian if Â† = Â; physical observables are represented by Hermitian operators to guarantee real measurement outcomes.',
    statement: `An operator $\\hat{A}$ is <b>Hermitian</b> (or self-adjoint) if it equals its own adjoint:
$$\\boxed{\\hat{A}^\\dagger = \\hat{A}} \\quad \\Longleftrightarrow \\quad \\langle \\phi | \\hat{A} | \\psi \\rangle = \\langle \\hat{A}\\phi | \\psi \\rangle$$
<b>Postulate of Quantum Mechanics:</b> Every measurable physical observable (position, momentum, energy, angular momentum) is represented by a linear Hermitian operator whose eigenvalues represent all possible outcomes of experimental measurements.`,
    intuition: `In the real physical world, measurement instruments display real numbers (pointers on a meter, digital readouts in volts or joules), never imaginary numbers like $2 + 3i$. Hermitian operators are the exact mathematical class of operators guaranteed to produce 100% purely real eigenvalues.`,
    needs: ['c.3.2.2'],
    traps: [
      `Assuming the product of two Hermitian operators is always Hermitian. $\\hat{A}\\hat{B}$ is Hermitian if and only if they commute ($[\\hat{A}, \\hat{B}] = 0$). If they do not commute, $(\\hat{A}\\hat{B})^\\dagger = \\hat{B}\\hat{A} \\ne \\hat{A}\\hat{B}$.`,
      `Confusing Hermitian ($A^\\dagger = A$) with symmetric ($A^T = A$). For complex matrices, Hermitian requires complex conjugation ($A_{ji}^* = A_{ij}$).`
    ],
    proof: {
      idea: 'Examine (AB)† and compare with AB.',
      why: 'Prove that the product of two Hermitian operators is Hermitian if and only if they commute.',
      rungs: [
        {
          why: 'Assume A and B are Hermitian',
          m: '$$\\hat{A}^\\dagger = \\hat{A}, \\quad \\hat{B}^\\dagger = \\hat{B}$$',
          meaning: 'What this really means: Both operators equal their own adjoints.',
          label: 'Assume A and B are Hermitian',
          math: '\\hat{A}^\\dagger = \\hat{A}, \\quad \\hat{B}^\\dagger = \\hat{B}',
          note: 'Definition of Hermiticity.'
        },
        {
          why: 'Take Adjoint of Product AB',
          m: '$$(\\hat{A}\\hat{B})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger = \\hat{B}\\hat{A}$$',
          meaning: 'What this really means: Product adjoint reverses the operator order.',
          label: 'Take Adjoint of Product AB',
          math: '(\\hat{A}\\hat{B})^\\dagger = \\hat{B}^\\dagger \\hat{A}^\\dagger = \\hat{B}\\hat{A}',
          note: 'Inversion of product order.'
        },
        {
          why: 'Condition for Hermiticity of AB',
          m: '$$(\\hat{A}\\hat{B})^\\dagger = \\hat{A}\\hat{B} \\iff \\hat{B}\\hat{A} = \\hat{A}\\hat{B} \\iff [\\hat{A}, \\hat{B}] = 0$$',
          meaning: 'What this really means: The product is Hermitian if and only if they commute.',
          label: 'Condition for Hermiticity of AB',
          math: '(\\hat{A}\\hat{B})^\\dagger = \\hat{A}\\hat{B} \\iff [\\hat{A}, \\hat{B}] = 0',
          note: 'Commutator must vanish.'
        }
      ]
    },
    cards: [
      { q: 'Under what necessary and sufficient condition is the product $\\hat{A}\\hat{B}$ of two Hermitian operators also Hermitian?', a: 'If and only if they commute: $[\\hat{A}, \\hat{B}] = 0$.', kind: 'state' },
      { q: 'How can you construct a Hermitian operator from two non-commuting Hermitian operators $\\hat{A}$ and $\\hat{B}$?', a: 'By forming the symmetrized anti-commutator: $\\hat{C} = \\frac{1}{2}(\\hat{A}\\hat{B} + \\hat{B}\\hat{A})$ or $i[\\hat{A}, \\hat{B}]$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.2.4', sec: '3.2', kind: 'property', tier: 'core',
    title: 'Expectation Value and Variance in Dirac Formalism',
    oneLine: 'In Dirac notation, ⟨A⟩ = ⟨ψ|Â|ψ⟩/⟨ψ|ψ⟩ and variance ΔA² = ⟨(Â - ⟨A⟩)²⟩ = ⟨A²⟩ - ⟨A⟩².',
    statement: `For a system in state $|\\psi\\rangle$:
1. The <b>expectation value</b> of an observable $\\hat{A}$ is:
$$\\langle \\hat{A} \\rangle = \\frac{\\langle\\psi|\\hat{A}|\\psi\\rangle}{\\langle\\psi|\\psi\\rangle}$$
For a normalized state ($\\langle\\psi|\\psi\\rangle = 1$), $\\langle \\hat{A} \\rangle = \\langle\\psi|\\hat{A}|\\psi\\rangle$.
2. The <b>uncertainty (standard deviation)</b> $\\Delta A$:
$$\\boxed{\\Delta A = \\sqrt{\\langle (\\hat{A} - \\langle \\hat{A} \\rangle)^2 \\rangle} = \\sqrt{\\langle \\hat{A}^2 \\rangle - \\langle \\hat{A} \\rangle^2}}$$
$\\Delta A = 0$ if and only if $|\\psi\\rangle$ is an eigenstate of $\\hat{A}$.`,
    intuition: `The expectation value is the weighted quantum average of measurements performed across an infinite ensemble of identically prepared states. $\\Delta A$ quantifies the quantum fluctuations (statistical dispersion) away from this average. If $|\\psi\\rangle$ is an eigenstate, every measurement gives the exact same value and $\\Delta A = 0$.`,
    needs: ['c.3.2.3', 'c.1.3.3'],
    traps: [
      `Confusing $\\langle \\hat{A}^2 \\rangle$ with $\\langle \\hat{A} \\rangle^2$. In general $\\langle \\hat{A}^2 \\rangle \\ge \\langle \\hat{A} \\rangle^2$; they are only equal when $\\Delta A = 0$.`,
      `Thinking $\\langle \\hat{A} \\rangle$ is the value obtained in a single experiment. Single measurements always return an eigenvalue, not the average.`
    ],
    cards: [
      { q: 'What is the expectation value $\\langle \\hat{A} \\rangle$ in Dirac notation for a normalized state $|\\psi\\rangle$?', a: '$\\langle \\hat{A} \\rangle = \\langle\\psi|\\hat{A}|\\psi\\rangle$.', kind: 'state' },
      { q: 'What is the value of the uncertainty $\\Delta A$ if $|\\psi\\rangle$ is an eigenstate of $\\hat{A}$?', a: '$\\Delta A = 0$ (zero variance).', kind: 'recall' }
    ]
  },

  /* ── 3.3 Commutator Algebra ───────────────────────────────────────────────── */
  {
    id: 'c.3.3.1', sec: '3.3', kind: 'definition', tier: 'core',
    title: 'The Commutator and Fundamental Operator Identities',
    oneLine: 'The commutator [Â, B̂] = ÂB̂ - B̂Â measures failure of commutativity and obeys Leibniz product rules.',
    statement: `The <b>commutator</b> of two operators $\\hat{A}$ and $\\hat{B}$ is defined by:
$$\\boxed{[\\hat{A}, \\hat{B}] = \\hat{A}\\hat{B} - \\hat{B}\\hat{A}}$$
<b>Key Algebraic Identities:</b>
1. <b>Antisymmetry:</b> $[\\hat{A}, \\hat{B}] = -[\\hat{B}, \\hat{A}]$
2. <b>Distributivity:</b> $[\\hat{A}, \\hat{B} + \\hat{C}] = [\\hat{A}, \\hat{B}] + [\\hat{A}, \\hat{C}]$
3. <b>Leibniz Product Rules:</b>
$$\\boxed{[\\hat{A}, \\hat{B}\\hat{C}] = [\\hat{A}, \\hat{B}]\\hat{C} + \\hat{B}[\\hat{A}, \\hat{C}]}$$
$$\\boxed{[\\hat{A}\\hat{B}, \\hat{C}] = \\hat{A}[\\hat{B}, \\hat{C}] + [\\hat{A}, \\hat{C}]\\hat{B}}$$
4. <b>Adjoint of Commutator:</b> $[\\hat{A}, \\hat{B}]^\\dagger = [\\hat{B}^\\dagger, \\hat{A}^\\dagger]$. For Hermitian operators, $[\\hat{A}, \\hat{B}]^\\dagger = -[\\hat{A}, \\hat{B}]$ (anti-Hermitian!).`,
    intuition: `Notice how the Leibniz rules mirror the product rule of calculus: $[A, BC]$ differentiates $BC$ with respect to $A$! Keep the operator order intact: in $[A, BC]$, the $B$ is on the left in the first term, and $C$ is on the right in the second term. Operators do not commute, so their relative positions cannot be swapped.`,
    needs: ['c.3.2.1'],
    traps: [
      `Swapping the operator positions in the product rule. Writing $[A, B]C$ as $C[A, B]$ is a catastrophic error because $[A, B]$ and $C$ generally do not commute!`,
      `Assuming the commutator of two Hermitian operators is Hermitian. It is anti-Hermitian: $([A, B])^\\dagger = -[A, B]$. To make it Hermitian, multiply by $i$: $(i[A, B])^\\dagger = i[A, B]$.`
    ],
    cards: [
      { q: 'State the Leibniz product identity for $[\\hat{A}, \\hat{B}\\hat{C}]$.', a: '$[\\hat{A}, \\hat{B}\\hat{C}] = [\\hat{A}, \\hat{B}]\\hat{C} + \\hat{B}[\\hat{A}, \\hat{C}]$.', kind: 'state' },
      { q: 'If $\\hat{A}$ and $\\hat{B}$ are Hermitian, what is the adjoint of their commutator $[\\hat{A}, \\hat{B}]^\\dagger$?', a: '$[\\hat{A}, \\hat{B}]^\\dagger = -[\\hat{A}, \\hat{B}]$ (it is anti-Hermitian).', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.3.2', sec: '3.3', kind: 'theorem', tier: 'core',
    title: 'The Jacobi Identity and Power Commutator Formula',
    oneLine: 'Operators obey the cyclic Jacobi identity [Â, [B̂, Ĉ]] + [B̂, [Ĉ, Â]] + [Ĉ, [Â, B̂]] = 0, and [x̂, p̂ⁿ] = iħ n p̂ⁿ⁻¹.',
    statement: `1. <b>Jacobi Identity:</b> For any three linear operators $\\hat{A}, \\hat{B}, \\hat{C}$:
$$\\boxed{[\\hat{A}, [\\hat{B}, \\hat{C}]] + [\\hat{B}, [\\hat{C}, \\hat{A}]] + [\\hat{C}, [\\hat{A}, \\hat{B}]] = 0}$$
2. <b>Power Commutator Formulas:</b> If $[\\hat{A}, [\\hat{A}, \\hat{B}]] = 0$ (such as for $\\hat{x}$ and $\\hat{p}$ where $[\\hat{x}, \\hat{p}] = i\\hbar$):
$$\\boxed{[\\hat{x}, \\hat{p}^n] = i\\hbar \\, n \\hat{p}^{n-1}} \\qquad \\boxed{[\\hat{x}^n, \\hat{p}] = i\\hbar \\, n \\hat{x}^{n-1}}$$
More generally, for any analytic function $F$:
$$[\\hat{x}, F(\\hat{p})] = i\\hbar \\frac{dF}{d\\hat{p}}, \\qquad [F(\\hat{x}), \\hat{p}] = i\\hbar \\frac{dF}{d\\hat{x}}$$`,
    intuition: `This reveals the deep connection between quantum commutators and classical derivatives. Operating with $\\frac{1}{i\\hbar}[\\cdot, \\hat{p}]$ acts exactly as the derivative $\\frac{d}{d\\hat{x}}$! This is the quantum operator realization of the classical Poisson bracket: $\\lim_{\\hbar \\to 0} \\frac{[\\hat{A}, \\hat{B}]}{i\\hbar} = \\{A, B\\}_{\\text{classical}}$.`,
    needs: ['c.3.3.1'],
    traps: [
      `Forgetting the cyclic order in the Jacobi identity: $A \\to B \\to C \\to A$.`,
      `Writing $[\\hat{p}, F(\\hat{x})] = +i\\hbar F'(\\hat{x})$. Antisymmetry gives a MINUS sign: $[\\hat{p}, F(\\hat{x})] = -[F(\\hat{x}), \\hat{p}] = -i\\hbar F'(\\hat{x})$.`
    ],
    proof: {
      idea: 'Use mathematical induction on n with the Leibniz rule [x, p^n] = [x, p]p^{n-1} + p[x, p^{n-1}].',
      why: 'Prove that the power formula holds for all positive integers n.',
      rungs: [
        {
          why: 'Base Case n = 1',
          m: '$$[\\hat{x}, \\hat{p}^1] = [\\hat{x}, \\hat{p}] = i\\hbar = i\\hbar(1)\\hat{p}^0$$',
          meaning: 'What this really means: Holds trivially for n = 1.',
          label: 'Base Case n = 1',
          math: '[\\hat{x}, \\hat{p}] = i\\hbar',
          note: 'Direct canonical commutator.'
        },
        {
          why: 'Induction Step via Leibniz Rule',
          m: '$$[\\hat{x}, \\hat{p}^{n+1}] = [\\hat{x}, \\hat{p} \\hat{p}^n] = [\\hat{x}, \\hat{p}]\\hat{p}^n + \\hat{p}[\\hat{x}, \\hat{p}^n]$$',
          meaning: 'What this really means: Expand product p * p^n using the Leibniz product rule.',
          label: 'Induction Step via Leibniz Rule',
          math: '[\\hat{x}, \\hat{p}^{n+1}] = [\\hat{x}, \\hat{p}]\\hat{p}^n + \\hat{p}[\\hat{x}, \\hat{p}^n]',
          note: 'Leibniz expansion.'
        },
        {
          why: 'Substitute Induction Hypothesis',
          m: '$$[\\hat{x}, \\hat{p}^{n+1}] = (i\\hbar)\\hat{p}^n + \\hat{p}(i\\hbar n \\hat{p}^{n-1}) = i\\hbar \\hat{p}^n + i\\hbar n \\hat{p}^n = i\\hbar(n+1)\\hat{p}^n$$',
          meaning: 'What this really means: Combining like terms gives the formula for n+1.',
          label: 'Substitute Induction Hypothesis',
          math: '[\\hat{x}, \\hat{p}^{n+1}] = i\\hbar(n+1)\\hat{p}^n',
          note: 'Completes induction.'
        }
      ]
    },
    cards: [
      { q: 'State the Jacobi identity for three operators $\\hat{A}, \\hat{B}, \\hat{C}$.', a: '$[\\hat{A}, [\\hat{B}, \\hat{C}]] + [\\hat{B}, [\\hat{C}, \\hat{A}]] + [\\hat{C}, [\\hat{A}, \\hat{B}]] = 0$.', kind: 'state' },
      { q: 'What is the commutator $[\\hat{x}, \\hat{p}^3]$?', a: '$[\\hat{x}, \\hat{p}^3] = 3i\\hbar \\hat{p}^2$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.3.3', sec: '3.3', kind: 'law', tier: 'core',
    title: 'The Canonical Commutation Relation [x̂, p̂] = iħ',
    oneLine: 'The fundamental quantum commutation relation [x̂, p̂] = iħ Î drives all quantum uncertainty and non-commutativity.',
    statement: `The foundational dynamic postulate of quantum mechanics for a particle with position $\\hat{x}$ and momentum $\\hat{p} = -i\\hbar \\frac{d}{dx}$ is the <b>Canonical Commutation Relation (CCR)</b>:
$$\\boxed{[\\hat{x}, \\hat{p}] = i\\hbar \\, \\hat{I}}$$
In three dimensions:
$$[\\hat{r}_j, \\hat{p}_k] = i\\hbar \\, \\delta_{jk} \\hat{I}, \\qquad [\\hat{r}_j, \\hat{r}_k] = 0, \\qquad [\\hat{p}_j, \\hat{p}_k] = 0$$
Position and momentum along the same axis do not commute, whereas coordinates along orthogonal directions commute freely.`,
    intuition: `This equation is the single mathematical spark that ignites all of quantum physics. In classical mechanics, $xp - px = 0$. In quantum mechanics, measuring position first shifts the phase of the momentum wave, while measuring momentum first displaces position. They can never be simultaneously pinned down because $i\\hbar \\ne 0$.`,
    needs: ['c.1.5.2', 'c.3.3.1'],
    traps: [
      `Forgetting the test wave function when verifying $[\\hat{x}, \\hat{p}]$ on wavefunctions. The derivative in $\\hat{p} = -i\\hbar \\partial/\\partial x$ acts on both $\\hat{x}$ and $\\psi(x)$ via the product rule!`,
      `Assuming $[\\hat{x}, \\hat{p}_y] \\ne 0$. Orthogonal coordinates commute: $[\\hat{x}, \\hat{p}_y] = 0$.`
    ],
    proof: {
      idea: 'Apply the operator [x, p] to an arbitrary test wave function f(x) using the product rule.',
      why: 'Show that [x, p]f(x) = iħ f(x) for all f(x).',
      rungs: [
        {
          why: 'Apply [x, p] to Test Function',
          m: '$$[\\hat{x}, \\hat{p}]f(x) = \\hat{x}\\hat{p}f(x) - \\hat{p}\\hat{x}f(x) = x\\left(-i\\hbar \\frac{df}{dx}\\right) - \\left(-i\\hbar \\frac{d}{dx}[x f(x)]\\right)$$',
          meaning: 'What this really means: Evaluate each term explicitly on test function f(x).',
          label: 'Apply [x, p] to Test Function',
          math: '[\\hat{x}, \\hat{p}]f(x) = -i\\hbar x \\frac{df}{dx} + i\\hbar \\frac{d}{dx}(xf)',
          note: 'Apply differential operator.'
        },
        {
          why: 'Differentiate Product (xf)',
          m: '$$\\frac{d}{dx}[x f(x)] = 1 \\cdot f(x) + x \\frac{df}{dx}$$',
          meaning: 'What this really means: Product rule creates a derivative term and a bare function term.',
          label: 'Differentiate Product (xf)',
          math: '\\frac{d}{dx}[x f(x)] = f(x) + x \\frac{df}{dx}',
          note: 'Standard product rule.'
        },
        {
          why: 'Cancel Cross Terms',
          m: '$$[\\hat{x}, \\hat{p}]f(x) = -i\\hbar x \\frac{df}{dx} + i\\hbar f(x) + i\\hbar x \\frac{df}{dx} = i\\hbar f(x)$$',
          meaning: 'What this really means: The derivative terms cancel identically, leaving only iħ.',
          label: 'Cancel Cross Terms',
          math: '[\\hat{x}, \\hat{p}]f(x) = i\\hbar f(x)',
          note: 'Derivative terms cancel.'
        },
        {
          why: 'Operator Identity',
          m: '$$[\\hat{x}, \\hat{p}] = i\\hbar \\hat{I}$$',
          meaning: 'What this really means: Since this holds for all f(x), the operator equality is proven.',
          label: 'Operator Identity',
          math: '[\\hat{x}, \\hat{p}] = i\\hbar \\hat{I}',
          note: 'Canonical commutation relation.'
        }
      ]
    },
    cards: [
      { q: 'State the 1D Canonical Commutation Relation.', a: '$[\\hat{x}, \\hat{p}] = i\\hbar \\hat{I}$.', kind: 'state' },
      { q: 'What is the commutator $[\\hat{x}, \\hat{p}_y]$ between position along $x$ and momentum along $y$?', a: '$[\\hat{x}, \\hat{p}_y] = 0$ (orthogonal degrees of freedom commute).', kind: 'recall' }
    ]
  },

  /* ── 3.4 Generalized Uncertainty Relations ────────────────────────────────── */
  {
    id: 'c.3.4.1', sec: '3.4', kind: 'theorem', tier: 'core',
    title: 'The Robertson–Schrödinger Generalized Uncertainty Relation',
    oneLine: 'For any two observables Â and B̂, ΔA ΔB ≥ (1/2)|⟨[Â, B̂]⟩|; non-commuting observables cannot be simultaneously determined.',
    statement: `For any two Hermitian operators $\\hat{A}$ and $\\hat{B}$ and any physical state $|\\psi\\rangle$, the product of their standard deviations obeys the <b>Robertson generalized uncertainty relation</b>:
$$\\boxed{\\Delta A \\, \\Delta B \\ge \\frac{1}{2} |\\langle [\\hat{A}, \\hat{B}] \\rangle|}$$
For the canonical pair $\\hat{x}$ and $\\hat{p}$, where $[\\hat{x}, \\hat{p}] = i\\hbar$:
$$\\Delta x \\, \\Delta p \\ge \\frac{1}{2} |\\langle i\\hbar \\rangle| = \\frac{\\hbar}{2}$$
which rigorously proves Heisenberg's uncertainty principle for any arbitrary quantum state!`,
    intuition: `Uncertainty is not a defect in human measuring apparatuses; it is a direct geometric theorem of non-commuting operators in Hilbert space. If two operators commute ($[A, B] = 0$), the right-hand side is zero, meaning both can be measured simultaneously with infinite precision. If they do not commute, sharpening $A$ forces the uncertainty in $B$ to explode to infinity.`,
    needs: ['c.3.1.3', 'c.3.2.4', 'c.3.3.1'],
    traps: [
      `Thinking the uncertainty bound is always $\\hbar/2$. The bound is $\\frac{1}{2}|\\langle [A, B] \\rangle|$; for angular momentum $[L_x, L_y] = i\\hbar L_z$, the bound is $\\frac{\\hbar}{2}|\\langle L_z \\rangle|$, which depends on the state and can vanish if $\\langle L_z \\rangle = 0$!`,
      `Forgetting the factor of $1/2$. The relation is $\\Delta A \\Delta B \\ge \\frac{1}{2}|\\langle[A, B]\\rangle|$, not $|\\langle[A, B]\\rangle|$.`
    ],
    proof: {
      idea: 'Define shifted operators u = A - ⟨A⟩ and v = B - ⟨B⟩, apply Cauchy-Schwarz to |uψ⟩ and |vψ⟩, and split uv into symmetric and antisymmetric parts.',
      why: 'Rigorous mathematical derivation of the generalized uncertainty principle.',
      rungs: [
        {
          why: 'Define Zero-Mean Deviation Operators',
          m: '$$\\Delta\\hat{A} = \\hat{A} - \\langle A \\rangle, \\quad \\Delta\\hat{B} = \\hat{B} - \\langle B \\rangle \\implies [\\Delta\\hat{A}, \\Delta\\hat{B}] = [\\hat{A}, \\hat{B}]$$',
          meaning: 'What this really means: Shifting by scalars does not alter the commutator.',
          label: 'Define Zero-Mean Deviation Operators',
          math: '\\Delta\\hat{A} = \\hat{A} - \\langle A \\rangle, \\quad \\Delta\\hat{B} = \\hat{B} - \\langle B \\rangle',
          note: 'Shifted operators are Hermitian.'
        },
        {
          why: 'Construct Vectors |f⟩ and |g⟩',
          m: '$$|f\\rangle = \\Delta\\hat{A}|\\psi\\rangle, \\quad |g\\rangle = \\Delta\\hat{B}|\\psi\\rangle \\implies \\langle f|f\\rangle = (\\Delta A)^2, \\quad \\langle g|g\\rangle = (\\Delta B)^2$$',
          meaning: 'What this really means: The norms squared of |f⟩ and |g⟩ are the variances.',
          label: 'Construct Vectors |f⟩ and |g⟩',
          math: '|f\\rangle = \\Delta\\hat{A}|\\psi\\rangle, \\quad |g\\rangle = \\Delta\\hat{B}|\\psi\\rangle',
          note: 'Lengths equal uncertainties.'
        },
        {
          why: 'Apply Cauchy-Schwarz Inequality',
          m: '$$(\\Delta A)^2 (\\Delta B)^2 = \\langle f|f\\rangle \\langle g|g\\rangle \\ge |\\langle f|g\\rangle|^2 = |\\langle \\Delta\\hat{A} \\Delta\\hat{B} \\rangle|^2$$',
          meaning: 'What this really means: The product of variances is bounded below by the squared overlap.',
          label: 'Apply Cauchy-Schwarz Inequality',
          math: '(\\Delta A)^2 (\\Delta B)^2 \\ge |\\langle \\Delta\\hat{A} \\Delta\\hat{B} \\rangle|^2',
          note: 'Direct Schwarz inequality.'
        },
        {
          why: 'Decompose Product into Commutator and Anticommutator',
          m: '$$\\Delta\\hat{A} \\Delta\\hat{B} = \\frac{1}{2}\\{\\Delta\\hat{A}, \\Delta\\hat{B}\\} + \\frac{1}{2}[\\Delta\\hat{A}, \\Delta\\hat{B}]$$',
          meaning: 'What this really means: Split into Hermitian (real expectation) and anti-Hermitian (imaginary expectation) parts.',
          label: 'Decompose Product into Commutator and Anticommutator',
          math: '\\Delta\\hat{A} \\Delta\\hat{B} = \\frac{1}{2}\\{\\Delta\\hat{A}, \\Delta\\hat{B}\\} + \\frac{1}{2}[\\hat{A}, \\hat{B}]',
          note: 'Real + imaginary decomposition.'
        },
        {
          why: 'Isolate Imaginary Part',
          m: '$$|\\langle \\Delta\\hat{A} \\Delta\\hat{B} \\rangle|^2 = \\left(\\frac{1}{2}\\langle \\{\\Delta\\hat{A}, \\Delta\\hat{B}\\} \\rangle\\right)^2 + \\left(\\frac{1}{2i}\\langle [\\hat{A}, \\hat{B}] \\rangle\\right)^2 \\ge \\frac{1}{4}|\\langle [\\hat{A}, \\hat{B}] \\rangle|^2$$',
          meaning: 'What this really means: Dropping the positive anticommutator term gives the final bound.',
          label: 'Isolate Imaginary Part',
          math: '|\\langle \\Delta\\hat{A} \\Delta\\hat{B} \\rangle|^2 \\ge \\frac{1}{4}|\\langle [\\hat{A}, \\hat{B}] \\rangle|^2',
          note: 'Drop non-negative real term.'
        },
        {
          why: 'Take Square Root',
          m: '$$\\Delta A \\, \\Delta B \\ge \\frac{1}{2}|\\langle [\\hat{A}, \\hat{B}] \\rangle|$$',
          meaning: 'What this really means: Taking square roots establishes the celebrated Robertson bound.',
          label: 'Take Square Root',
          math: '\\Delta A \\, \\Delta B \\ge \\frac{1}{2}|\\langle [\\hat{A}, \\hat{B}] \\rangle|',
          note: 'Robertson uncertainty relation.'
        }
      ]
    },
    cards: [
      { q: 'State the Robertson generalized uncertainty relation for two observables $\\hat{A}$ and $\\hat{B}$.', a: '$\\Delta A \\, \\Delta B \\ge \\frac{1}{2} |\\langle [\\hat{A}, \\hat{B}] \\rangle|$.', kind: 'state' },
      { q: 'Can two observables with $[\\hat{A}, \\hat{B}] \\ne 0$ ever have simultaneously zero uncertainty in some state?', a: 'Yes, if the state $|\\psi\\rangle$ satisfies $\\langle [\\hat{A}, \\hat{B}] \\rangle = 0$ (e.g., $L_x$ and $L_y$ in an eigenstate $|l=0, m=0\\rangle$).', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.4.2', sec: '3.4', kind: 'property', tier: 'core',
    title: 'Compatible vs. Incompatible Observables',
    oneLine: 'Compatible observables commute ([Â, B̂] = 0) and share a common eigenbasis; incompatible observables ([Â, B̂] ≠ 0) cannot be simultaneously measured.',
    statement: `1. <b>Compatible Observables:</b> Two observables $\\hat{A}$ and $\\hat{B}$ are compatible if they commute:
$$[\\hat{A}, \\hat{B}] = 0$$
They can be measured simultaneously without mutual interference, share a complete common eigenbasis, and have zero fundamental uncertainty limit ($\\Delta A \\Delta B \\ge 0$).
2. <b>Incompatible Observables:</b> Two observables are incompatible if they do not commute:
$$[\\hat{A}, \\hat{B}] \\ne 0$$
Measuring one inevitably disturbs the state and destroys knowledge of the other (quantum measurement back-action).`,
    intuition: `Compatible observables are like color and shape: you can observe that an object is red and triangular at the same time without the measurement of color altering the shape. Incompatible observables are like position and momentum: pinning down position collapses the wave function into a sharp spatial spike $\\delta(x - x_0)$, which violently scatters momentum across all values from $-\\infty$ to $+\\infty$.`,
    needs: ['c.3.4.1'],
    traps: [
      `Believing incompatible observables can never be measured one after another. You can measure $A$ and then measure $B$; however, measuring $B$ alters the outcome of a subsequent $A$ measurement!`,
      `Assuming non-commuting operators have NO common eigenvectors. They can share individual common eigenvectors; they merely do not possess a complete shared basis.`
    ],
    cards: [
      { q: 'What mathematical condition defines two compatible quantum observables?', a: 'Their commutator vanishes: $[\\hat{A}, \\hat{B}] = 0$.', kind: 'state' },
      { q: 'What happens to the state of a system when an observable $\\hat{B}$ is measured immediately after measuring an incompatible observable $\\hat{A}$?', a: 'The state collapses into an eigenstate of $\\hat{B}$, destroying the definite eigenvalue previously established for $\\hat{A}$.', kind: 'recall' }
    ]
  },

  /* ── 3.5 Functions of Operators & Unitary Transformations ─────────────────── */
  {
    id: 'c.3.5.1', sec: '3.5', kind: 'definition', tier: 'core',
    title: 'Functions of Operators and the Baker–Campbell–Hausdorff (BCH) Formula',
    oneLine: 'An operator function F(Â) is defined via Taylor series; if [Â, [Â, B̂]] = [B̂, [Â, B̂]] = 0, then e^{Â} e^{B̂} = e^{Â + B̂ + (1/2)[Â, B̂]}.',
    statement: `For any analytic function $F(z) = \\sum_{n=0}^\\infty c_n z^n$, the operator function $F(\\hat{A})$ is defined by the power series:
$$F(\\hat{A}) = \\sum_{n=0}^\\infty c_n \\hat{A}^n$$
In an eigenbasis where $\\hat{A}|a_n\\rangle = a_n |a_n\\rangle$, $F(\\hat{A})|a_n\\rangle = F(a_n)|a_n\\rangle$.
<b>Baker–Campbell–Hausdorff (BCH) Formula:</b>
If the commutator $[\hat{A}, \hat{B}]$ commutes with both $\hat{A}$ and $\hat{B}$ ($[\\hat{A}, [\\hat{A}, \\hat{B}]] = [\\hat{B}, [\\hat{A}, \\hat{B}]] = 0$):
$$\\boxed{e^{\\hat{A}} e^{\\hat{B}} = e^{\\hat{A} + \\hat{B} + \\frac{1}{2}[\\hat{A}, \\hat{B}]}} \\qquad \\boxed{e^{\\hat{A}} e^{\\hat{B}} = e^{\\hat{B}} e^{\\hat{A}} e^{[\\hat{A}, \\hat{B}]}}$$`,
    intuition: `In standard arithmetic, $e^a e^b = e^{a+b}$. For quantum operators, this fails because $AB \\ne BA$. The BCH formula tells you the precise correction needed to combine operator exponentials: you must tack on half of their commutator $\\frac{1}{2}[A, B]$! This formula is essential for calculating finite spatial translations $e^{-i p a / \\hbar}$ and time evolution $e^{-i H t / \\hbar}$.`,
    needs: ['c.3.3.1'],
    traps: [
      `Writing $e^{\\hat{A}} e^{\\hat{B}} = e^{\\hat{A} + \\hat{B}}$ for non-commuting operators. This is only valid if $[\\hat{A}, \\hat{B}] = 0$.`,
      `Applying the simplified BCH formula when the commutator $[A, B]$ is NOT a c-number (scalar). If $[A, [A, B]] \\ne 0$, higher-order nested commutators must be included.`
    ],
    cards: [
      { q: 'State the simplified Baker–Campbell–Hausdorff (BCH) formula for two operators whose commutator is a scalar.', a: '$e^{\\hat{A}} e^{\\hat{B}} = e^{\\hat{A} + \\hat{B} + \\frac{1}{2}[\\hat{A}, \\hat{B}]}$.', kind: 'state' },
      { q: 'If $|a\\rangle$ is an eigenstate of $\\hat{A}$ with eigenvalue $a$, what is $e^{\\lambda \\hat{A}}|a\\rangle$?', a: '$e^{\\lambda a}|a\\rangle$ (operators act on their eigenstates by evaluating the function on the eigenvalue).', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.5.2', sec: '3.5', kind: 'theorem', tier: 'core',
    title: 'Unitary Operators and Isometries in Hilbert Space',
    oneLine: 'An operator Û is unitary if Û† Û = Û Û† = Î; unitary transformations preserve inner products ⟨Ûϕ|Ûψ⟩ = ⟨ϕ|ψ⟩ and state norms.',
    statement: `A linear operator $\\hat{U}$ is <b>unitary</b> if its adjoint equals its inverse:
$$\\boxed{\\hat{U}^\\dagger = \\hat{U}^{-1} \\quad \\Longleftrightarrow \\quad \\hat{U}^\\dagger \\hat{U} = \\hat{U} \\hat{U}^\\dagger = \\hat{I}}$$
<b>Core Properties of Unitary Operators:</b>
1. <b>Preservation of Inner Products (Isometry):</b>
$$\\langle \\hat{U}\\phi | \\hat{U}\\psi \\rangle = \\langle \\phi | \\hat{U}^\\dagger \\hat{U} | \\psi \\rangle = \\langle \\phi | \\hat{I} | \\psi \\rangle = \\langle \\phi | \\psi \\rangle$$
2. <b>Norm Preservation:</b> $\\| \\hat{U}\\psi \\| = \\| \\psi \\|$. Total probability is strictly conserved.
3. <b>Exponential of a Hermitian Operator:</b> If $\\hat{G}$ is Hermitian, $\\hat{U} = e^{i \\alpha \\hat{G}}$ is strictly unitary.`,
    intuition: `A unitary transformation is the quantum mechanical equivalent of a rigid rotation in Euclidean geometry. Rotating a physical vector in space changes its coordinates, but does NOT stretch or shrink its length, nor does it alter the angle between two vectors. Similarly, unitary transformations rotate states in Hilbert space, keeping all probabilities and overlaps 100% invariant. Time evolution $\\hat{U}(t) = e^{-i\\hat{H}t/\\hbar}$ is a continuous unitary rotation!`,
    needs: ['c.3.2.2', 'c.3.5.1'],
    traps: [
      `Confusing Hermitian with Unitary. A Hermitian operator satisfies $A^\\dagger = A$ (real eigenvalues); a Unitary operator satisfies $U^\\dagger = U^{-1}$ (complex eigenvalues with modulus 1).`,
      `Forgetting the factor of $i$ in $e^{i\\hat{G}}$. If $\\hat{G}$ is Hermitian, $e^{\\hat{G}}$ is Hermitian and positive, NOT unitary! You MUST include $i$: $(e^{i\\hat{G}})^\\dagger = e^{-i\\hat{G}} = (e^{i\\hat{G}})^{-1}$.`
    ],
    proof: {
      idea: 'Compute the inner product of transformed states using (Uϕ)† = ϕ† U†.',
      why: 'Prove that unitary operators preserve inner products identically.',
      rungs: [
        {
          why: 'Set Up Transformed Inner Product',
          m: '$$\\langle \\psi\' | \\phi\' \\rangle = \\langle \\hat{U}\\psi | \\hat{U}\\phi \\rangle$$',
          meaning: 'What this really means: Take inner product of two states rotated by U.',
          label: 'Set Up Transformed Inner Product',
          math: '\\langle \\psi\' | \\phi\' \\rangle = \\langle \\hat{U}\\psi | \\hat{U}\\phi \\rangle',
          note: 'Rotated states.'
        },
        {
          why: 'Express Bra Using Adjoint',
          m: '$$\\langle \\hat{U}\\psi| = \\langle\\psi| \\hat{U}^\\dagger$$',
          meaning: 'What this really means: Converting ket to bra takes the adjoint.',
          label: 'Express Bra Using Adjoint',
          math: '\\langle \\hat{U}\\psi| = \\langle\\psi| \\hat{U}^\\dagger',
          note: 'Adjoint action on bra.'
        },
        {
          why: 'Combine Operators',
          m: '$$\\langle \\hat{U}\\psi | \\hat{U}\\phi \\rangle = \\langle \\psi | \\hat{U}^\\dagger \\hat{U} | \\phi \\rangle$$',
          meaning: 'What this really means: Group U† and U together in the center.',
          label: 'Combine Operators',
          math: '\\langle \\psi | \\hat{U}^\\dagger \\hat{U} | \\phi \\rangle',
          note: 'Operator sandwich.'
        },
        {
          why: 'Apply Unitary Condition',
          m: '$$\\hat{U}^\\dagger \\hat{U} = \\hat{I} \\implies \\langle \\psi | \\hat{I} | \\phi \\rangle = \\langle \\psi | \\phi \\rangle$$',
          meaning: 'What this really means: The inner product is strictly preserved.',
          label: 'Apply Unitary Condition',
          math: '\\langle \\psi | \\hat{U}^\\dagger \\hat{U} | \\phi \\rangle = \\langle \\psi | \\phi \\rangle',
          note: 'Preservation of metric.'
        }
      ]
    },
    cards: [
      { q: 'What algebraic condition defines a unitary operator $\\hat{U}$?', a: '$\\hat{U}^\\dagger \\hat{U} = \\hat{U}\\hat{U}^\\dagger = \\hat{I}$ (or $\\hat{U}^\\dagger = \\hat{U}^{-1}$).', kind: 'state' },
      { q: 'If $\\hat{A}$ is a Hermitian operator, what type of operator is $e^{i\\hat{A}}$?', a: 'It is a unitary operator.', kind: 'recall' }
    ]
  },

  /* ── 3.6 Discrete Representations & Matrix Mechanics ──────────────────────── */
  {
    id: 'c.3.6.1', sec: '3.6', kind: 'definition', tier: 'core',
    title: 'Matrix Representation of Kets, Bras, and Operators',
    oneLine: 'In an orthonormal basis {|ϕ_n⟩}, kets are column vectors c_i = ⟨ϕ_i|ψ⟩, bras are row vectors, and operators are square matrices A_ij = ⟨ϕ_i|Â|ϕ_j⟩.',
    statement: `Given an orthonormal basis $\{|\\phi_n\\rangle\}$:
1. <b>Ket as a Column Vector:</b>
$$|\\psi\\rangle \\doteq \\begin{pmatrix} c_1 \\\\ c_2 \\\\ \\vdots \\end{pmatrix}, \\qquad c_i = \\langle \\phi_i | \\psi \\rangle$$
2. <b>Bra as a Row Vector:</b>
$$\\langle \\psi | \\doteq \\begin{pmatrix} c_1^* & c_2^* & \\cdots \\end{pmatrix}$$
3. <b>Operator as a Square Matrix:</b>
$$\\hat{A} \\doteq \\begin{pmatrix} A_{11} & A_{12} & \\cdots \\\\ A_{21} & A_{22} & \\cdots \\\\ \\vdots & \\vdots & \\ddots \\end{pmatrix}, \\qquad \\boxed{A_{ij} = \\langle \\phi_i | \\hat{A} | \\phi_j \\rangle}$$
The action of an operator $|\\psi\'\\rangle = \\hat{A}|\\psi\\rangle$ becomes standard matrix multiplication: $c_i\' = \\sum_j A_{ij} c_j$.`,
    intuition: `This completes the bridge between abstract Hilbert space and concrete linear algebra. Any quantum equation $\\hat{A}|\\psi\\rangle = |\\psi\'\\rangle$ is literally a matrix times a column vector. The matrix elements $A_{ij}$ simply record how much of basis state $j$ is converted into basis state $i$ by operator $\\hat{A}$.`,
    needs: ['c.3.1.4', 'c.3.2.1'],
    traps: [
      `Confusing row and column indices. In $A_{ij} = \\langle \\phi_i | \\hat{A} | \\phi_j \\rangle$, the row index $i$ corresponds to the bra $\\langle\\phi_i|$, and the column index $j$ corresponds to the ket $|\\phi_j\\rangle$.`,
      `Forgetting that matrix elements depend entirely on the chosen basis. Changing the basis transforms the matrix via $A\' = U^\\dagger A U$.`
    ],
    cards: [
      { q: 'How is the matrix element $A_{ij}$ of an operator $\\hat{A}$ defined in an orthonormal basis $\{|\\phi_n\\rangle\}$?', a: '$A_{ij} = \\langle\\phi_i|\\hat{A}|\\phi_j\\rangle$.', kind: 'state' },
      { q: 'What is the matrix representation of a Hermitian operator $\\hat{A}$?', a: 'A Hermitian matrix satisfying $A_{ji}^* = A_{ij}$ (equal to its conjugate transpose $A^\\dagger = A$).', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.6.2', sec: '3.6', kind: 'theorem', tier: 'core',
    title: 'Theorems 2.1 & 2.2: Reality of Spectra and Orthogonality of Eigenstates',
    oneLine: 'Hermitian operators have strictly real eigenvalues (Theorem 2.1), and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal (Theorem 2.2).',
    statement: `For any linear Hermitian operator $\\hat{A} = \\hat{A}^\\dagger$:
1. <b>Theorem 2.1 (Real Eigenvalues):</b> All eigenvalues of $\\hat{A}$ are strictly real:
$$\\hat{A}|a_n\\rangle = a_n |a_n\\rangle \\implies a_n \\in \\mathbb{R}$$
2. <b>Theorem 2.2 (Orthogonality of Eigenstates):</b> Eigenvectors corresponding to different eigenvalues are mutually orthogonal:
$$a_m \\ne a_n \\implies \\langle a_m | a_n \\rangle = 0$$
Degenerate eigenstates sharing the same eigenvalue can always be orthogonalized using the Gram–Schmidt orthogonalization procedure.`,
    intuition: `This is why Hermitian operators are the gold standard of quantum mechanics. A real measurement cannot yield an imaginary dial reading; Theorem 2.1 guarantees all measurement outcomes are pure real numbers. Theorem 2.2 guarantees that distinct outcomes correspond to distinct, mutually exclusive quantum channels (zero overlap, $\\langle a_m|a_n\\rangle = 0$).`,
    needs: ['c.3.2.3'],
    traps: [
      `Assuming degenerate eigenstates are automatically orthogonal. If $a_1 = a_2$, any linear combination is also an eigenstate; they must be explicitly orthogonalized via Gram–Schmidt.`,
      `Assuming non-Hermitian operators have orthogonal eigenvectors. Only normal operators ($[A, A^\\dagger] = 0$) and Hermitian operators guarantee orthogonal eigenvectors.`
    ],
    proof: {
      idea: 'Sandwich Â between eigenbra ⟨a_m| and eigenket |a_n⟩ and subtract the conjugate relation.',
      why: 'Rigorous proof of Theorems 2.1 and 2.2 in Zettili Chapter 2.',
      rungs: [
        {
          why: 'Eigenvalue Equations for Kets and Bras',
          m: '$$\\hat{A}|a_n\\rangle = a_n |a_n\\rangle \\implies \\langle a_m|\\hat{A} = a_m^* \\langle a_m|$$',
          meaning: 'What this really means: Operating on a bra conjugates the eigenvalue.',
          label: 'Eigenvalue Equations for Kets and Bras',
          math: '\\hat{A}|a_n\\rangle = a_n |a_n\\rangle, \\quad \\langle a_m|\\hat{A}^\\dagger = a_m^* \\langle a_m| = \\langle a_m|\\hat{A}',
          note: 'Using Hermiticity A† = A.'
        },
        {
          why: 'Sandwich Matrix Element',
          m: '$$\\langle a_m | \\hat{A} | a_n \\rangle = a_n \\langle a_m | a_n \\rangle = a_m^* \\langle a_m | a_n \\rangle$$',
          meaning: 'What this really means: Act with Â to the right on the ket, and to the left on the bra.',
          label: 'Sandwich Matrix Element',
          math: '(a_n - a_m^*) \\langle a_m | a_n \\rangle = 0',
          note: 'Subtract both expressions.'
        },
        {
          why: 'Proof of Theorem 2.1 (Real Spectrum)',
          m: '$$\\text{Set } m = n: \\quad (a_n - a_n^*) \\langle a_n | a_n \\rangle = 0 \\implies a_n = a_n^* \\in \\mathbb{R}$$',
          meaning: 'What this really means: Since the norm is positive, a_n must equal its own complex conjugate.',
          label: 'Proof of Theorem 2.1 (Real Spectrum)',
          math: 'a_n = a_n^* \\implies a_n \\in \\mathbb{R}',
          note: 'Eigenvalues are strictly real.'
        },
        {
          why: 'Proof of Theorem 2.2 (Orthogonality)',
          m: '$$\\text{If } a_m \\ne a_n: \\quad (a_n - a_m)\\langle a_m | a_n \\rangle = 0 \\implies \\langle a_m | a_n \\rangle = 0$$',
          meaning: 'What this really means: Since a_n - a_m is non-zero, the inner product must vanish.',
          label: 'Proof of Theorem 2.2 (Orthogonality)',
          math: 'a_m \\ne a_n \\implies \\langle a_m | a_n \\rangle = 0',
          note: 'Distinct eigenstates are orthogonal.'
        }
      ]
    },
    cards: [
      { q: 'State Theorem 2.1 regarding the eigenvalues of a Hermitian operator.', a: 'All eigenvalues of a Hermitian operator are strictly real numbers.', kind: 'state' },
      { q: 'State Theorem 2.2 regarding the eigenvectors of a Hermitian operator.', a: 'Eigenvectors corresponding to distinct eigenvalues of a Hermitian operator are mutually orthogonal.', kind: 'state' }
    ]
  },
  {
    id: 'c.3.6.3', sec: '3.6', kind: 'theorem', tier: 'core',
    title: 'Theorem 2.3: Commuting Observables and Simultaneous Diagonalization',
    oneLine: 'If [Â, B̂] = 0, Â and B̂ share a complete common set of simultaneous eigenstates and can be simultaneously diagonalized.',
    statement: `<b>Theorem 2.3 (Simultaneous Eigenstates):</b>
If two Hermitian operators $\\hat{A}$ and $\\hat{B}$ commute ($[\\hat{A}, \\hat{B}] = 0$), there exists a complete orthonormal basis of common (simultaneous) eigenvectors:
$$\\boxed{\\hat{A}|a_n, b_m\\rangle = a_n |a_n, b_m\\rangle \\quad \\text{and} \\quad \\hat{B}|a_n, b_m\\rangle = b_m |a_n, b_m\\rangle}$$
In this common eigenbasis, both matrix representations are simultaneously diagonal. If $\\hat{A}$ has non-degenerate eigenvalues, every eigenvector of $\\hat{A}$ is automatically an eigenvector of $\\hat{B}$.`,
    intuition: `When two operators commute, measuring $A$ and collapsing the wave function into an $A$-eigenstate does NOT scramble the eigenstates of $B$. You can label quantum states by multiple simultaneous good quantum numbers: for example, the hydrogen atom states $|n, l, m_l, m_s\\rangle$ are simultaneous eigenstates of the commuting set $\\{\\hat{H}, \\hat{L}^2, \\hat{L}_z, \\hat{S}_z\\}$ (a Complete Set of Commuting Observables, CSCO).`,
    needs: ['c.3.4.2', 'c.3.6.2'],
    traps: [
      `Assuming non-commuting operators can share a complete basis. If $[A, B] \\ne 0$, they CANNOT be simultaneously diagonalized.`,
      `Thinking $[A, B] = 0$ means $A$ and $B$ have the same eigenvalues. They share the same EIGENVECTORS, but their eigenvalues $a_n$ and $b_m$ can be completely different numbers with different physical units!`
    ],
    proof: {
      idea: 'Apply B to A|a_n⟩ and use [A, B] = 0 to show that B|a_n⟩ is also an eigenstate of A with eigenvalue a_n.',
      why: 'Prove that commuting operators leave each other\'s eigenspaces invariant.',
      rungs: [
        {
          why: 'Apply Operator Product to Eigenstate',
          m: '$$\\hat{A} \\left( \\hat{B}|a_n\\rangle \\right) = (\\hat{A}\\hat{B})|a_n\\rangle = (\\hat{B}\\hat{A})|a_n\\rangle$$',
          meaning: 'What this really means: Commutativity allows Â and B̂ to swap positions.',
          label: 'Apply Operator Product to Eigenstate',
          math: '\\hat{A}(\\hat{B}|a_n\\rangle) = \\hat{B}(\\hat{A}|a_n\\rangle)',
          note: 'Using [A, B] = 0.'
        },
        {
          why: 'Substitute Eigenvalue of A',
          m: '$$\\hat{B}(\\hat{A}|a_n\\rangle) = \\hat{B}(a_n |a_n\\rangle) = a_n \\left( \\hat{B}|a_n\\rangle \\right)$$',
          meaning: 'What this really means: Â acting on B̂|a_n⟩ returns a_n times B̂|a_n⟩.',
          label: 'Substitute Eigenvalue of A',
          math: '\\hat{A}(\\hat{B}|a_n\\rangle) = a_n (\\hat{B}|a_n\\rangle)',
          note: 'Shows B|a_n⟩ is in the same eigenspace.'
        },
        {
          why: 'Non-Degenerate Case Deduction',
          m: '$$\\text{If } a_n \\text{ is non-degenerate}, \\quad \\hat{B}|a_n\\rangle \\propto |a_n\\rangle \\implies \\hat{B}|a_n\\rangle = b_n |a_n\\rangle$$',
          meaning: 'What this really means: Since the eigenspace is 1-dimensional, B|a_n⟩ must be a scalar multiple of |a_n⟩.',
          label: 'Non-Degenerate Case Deduction',
          math: '\\hat{B}|a_n\\rangle = b_n |a_n\\rangle',
          note: '|a_n⟩ is an eigenstate of B.'
        }
      ]
    },
    cards: [
      { q: 'State Theorem 2.3 regarding commuting Hermitian operators.', a: 'If two Hermitian operators commute, they possess a complete set of simultaneous eigenvectors.', kind: 'state' },
      { q: 'What is a Complete Set of Commuting Observables (CSCO)?', a: 'A set of mutually commuting operators whose shared eigenvalues uniquely specify a single quantum state without degeneracy.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.6.4', sec: '3.6', kind: 'theorem', tier: 'core',
    title: 'Theorems 2.4 & 2.5: Anti-Hermitian and Unitary Spectra',
    oneLine: 'Anti-Hermitian operators have purely imaginary or zero eigenvalues (Theorem 2.4); unitary operators have eigenvalues of unit modulus e^{iθ} (Theorem 2.5).',
    statement: `1. <b>Theorem 2.4 (Anti-Hermitian Spectrum):</b>
If $\\hat{A}^\\dagger = -\\hat{A}$, then all eigenvalues of $\\hat{A}$ are either purely imaginary or zero:
$$\\hat{A}|a_n\\rangle = a_n |a_n\\rangle \\implies \\text{Re}(a_n) = 0 \\quad (a_n = i\\beta_n, \\, \\beta_n \\in \\mathbb{R})$$
2. <b>Theorem 2.5 (Unitary Spectrum):</b>
If $\\hat{U}^\\dagger \\hat{U} = \\hat{I}$, all eigenvalues of $\\hat{U}$ are complex numbers of unit modulus:
$$\\hat{U}|u_n\\rangle = \\lambda_n |u_n\\rangle \\implies |\\lambda_n| = 1 \\quad (\\lambda_n = e^{i\\theta_n}, \\, \\theta_n \\in \\mathbb{R})$$
and eigenvectors corresponding to distinct eigenvalues are mutually orthogonal: $\\lambda_m \\ne \\lambda_n \\implies \\langle u_m | u_n \\rangle = 0$.`,
    intuition: `This completes the classification of operator spectra:
- **Hermitian ($A^\\dagger = A$):** Eigenvalues lie strictly on the **real axis** of the complex plane ($a_n \\in \\mathbb{R}$).
- **Anti-Hermitian ($A^\\dagger = -A$):** Eigenvalues lie strictly on the **imaginary axis** ($a_n \\in i\\mathbb{R}$).
- **Unitary ($U^\\dagger = U^{-1}$):** Eigenvalues lie strictly on the **unit circle** ($|\\lambda_n| = 1$).`,
    needs: ['c.3.5.2', 'c.3.6.2'],
    traps: [
      `Thinking unitary operators have real eigenvalues. In general, unitary eigenvalues are complex numbers $e^{i\\theta}$; they are only real ($\pm 1$) if the operator is also Hermitian (such as the parity operator $\\hat{\\Pi}$).`,
      `Assuming an anti-Hermitian operator can represent a physical observable. Physical observables require real eigenvalues; anti-Hermitian operators have imaginary eigenvalues.`
    ],
    proof: {
      idea: 'Compute the norm of U|u_n⟩ and equate to |λ_n|² ⟨u_n|u_n⟩.',
      why: 'Prove that unitary eigenvalues must have magnitude 1.',
      rungs: [
        {
          why: 'Eigenvalue Equation',
          m: '$$\\hat{U}|u_n\\rangle = \\lambda_n |u_n\\rangle \\implies \\langle u_n|\\hat{U}^\\dagger = \\lambda_n^* \\langle u_n|$$',
          meaning: 'What this really means: Conjugate relation for the bra vector.',
          label: 'Eigenvalue Equation',
          math: '\\hat{U}|u_n\\rangle = \\lambda_n |u_n\\rangle, \\quad \\langle u_n|\\hat{U}^\\dagger = \\lambda_n^* \\langle u_n|',
          note: 'Unitary eigenvalue relation.'
        },
        {
          why: 'Inner Product of Transformed Ket',
          m: '$$\\langle u_n | \\hat{U}^\\dagger \\hat{U} | u_n \\rangle = (\\lambda_n^* \\langle u_n|) (\\lambda_n |u_n\\rangle) = |\\lambda_n|^2 \\langle u_n | u_n \\rangle$$',
          meaning: 'What this really means: Sandwich U†U between eigenstates.',
          label: 'Inner Product of Transformed Ket',
          math: '\\langle u_n | \\hat{U}^\\dagger \\hat{U} | u_n \\rangle = |\\lambda_n|^2 \\langle u_n | u_n \\rangle',
          note: 'Evaluate using eigenvalues.'
        },
        {
          why: 'Apply U†U = I',
          m: '$$\\langle u_n | \\hat{I} | u_n \\rangle = \\langle u_n | u_n \\rangle = |\\lambda_n|^2 \\langle u_n | u_n \\rangle \\implies |\\lambda_n|^2 = 1 \\implies |\\lambda_n| = 1$$',
          meaning: 'What this really means: Since norm is non-zero, |λ_n| must equal 1.',
          label: 'Apply U†U = I',
          math: '|\\lambda_n|^2 = 1 \\implies |\\lambda_n| = 1',
          note: 'Eigenvalue lies on unit circle.'
        }
      ]
    },
    cards: [
      { q: 'What is the nature of the eigenvalues of an anti-Hermitian operator $\\hat{A}$ (Theorem 2.4)?', a: 'They are purely imaginary or zero.', kind: 'state' },
      { q: 'What is the modulus of any eigenvalue $\\lambda$ of a unitary operator $\\hat{U}$ (Theorem 2.5)?', a: '$|\\lambda| = 1$ (it is a complex number of unit magnitude $e^{i\\theta}$).', kind: 'state' }
    ]
  },

  /* ── 3.7 Continuous Representations, Position/Momentum & Wave vs. Matrix Mechanics ── */
  {
    id: 'c.3.7.1', sec: '3.7', kind: 'definition', tier: 'core',
    title: 'Continuous Bases and Dirac Delta Function Normalization',
    oneLine: 'Continuous eigenstates {|x⟩} and {|p⟩} satisfy Dirac delta normalization ⟨x|x\'⟩ = δ(x - x\') and resolution ∫ |x⟩⟨x| dx = Î.',
    statement: `For observables with a continuous spectrum (like position $\\hat{x}$ and momentum $\\hat{p}$):
1. <b>Continuous Eigenvalue Equations:</b>
$$\\hat{x}|x\\rangle = x|x\\rangle, \\qquad \\hat{p}|p\\rangle = p|p\\rangle$$
2. <b>Dirac Delta Normalization:</b>
$$\\boxed{\\langle x | x\' \\rangle = \\delta(x - x\'), \\qquad \\langle p | p\' \\rangle = \\delta(p - p\')}$$
3. <b>Completeness (Resolution of the Identity):</b>
$$\\boxed{\\int_{-\\infty}^\\infty |x\\rangle \\langle x| \\, dx = \\hat{I}, \\qquad \\int_{-\\infty}^\\infty |p\\rangle \\langle p| \\, dp = \\hat{I}}$$`,
    intuition: `In continuous bases, the Kronecker delta $\\delta_{mn}$ is replaced by the Dirac delta function $\\delta(x - x')$, and discrete sums $\\sum_n$ become continuous Riemann integrals $\\int dx$. The projection $|x\\rangle\\langle x|$ extracts the infinitesimal slice of the quantum state residing precisely at point $x$.`,
    needs: ['c.3.1.4', 'c.3.6.1'],
    traps: [
      `Confusing $\\langle x|x\' \\rangle = \\delta(x-x\')$ with a finite number. $\\delta(0) = \\infty$; continuous basis kets are not normalizable to unity in the standard Hilbert space sense.`,
      `Dropping the integration variable $dx$ in the completeness relation $\\int |x\\rangle\\langle x| dx = \\hat{I}$.`
    ],
    cards: [
      { q: 'What is the orthogonality condition for continuous position eigenstates $|x\\rangle$?', a: '$\\langle x | x\' \\rangle = \\delta(x - x\')$ (Dirac delta normalization).', kind: 'state' },
      { q: 'Write the completeness (closure) relation for the continuous momentum basis $\{|p\\rangle\}$.', a: '$\\int_{-\\infty}^\\infty |p\\rangle \\langle p| \\, dp = \\hat{I}$.', kind: 'state' }
    ]
  },
  {
    id: 'c.3.7.2', sec: '3.7', kind: 'property', tier: 'core',
    title: 'Position and Momentum Wave Function Representations',
    oneLine: 'ψ(x) = ⟨x|ψ⟩ is the state in position representation where p̂ ≐ -iħ d/dx; ϕ(p) = ⟨p|ψ⟩ is the state in momentum representation where x̂ ≐ iħ d/dp.',
    statement: `Inserting the completeness relations yields the wave functions in coordinate and momentum space:
1. <b>Position Representation:</b>
$$\\psi(x) = \\langle x | \\psi \\rangle, \\qquad \\hat{x} \\doteq x, \\qquad \\boxed{\\hat{p} \\doteq -i\\hbar \\frac{\\partial}{\\partial x}}$$
Matrix element: $\\langle x | \\hat{p} | \\psi \\rangle = -i\\hbar \\frac{\\partial \\psi(x)}{\\partial x}$.
2. <b>Momentum Representation:</b>
$$\\phi(p) = \\langle p | \\psi \\rangle, \\qquad \\hat{p} \\doteq p, \\qquad \\boxed{\\hat{x} \\doteq +i\\hbar \\frac{\\partial}{\\partial p}}$$
Matrix element: $\\langle p | \\hat{x} | \\psi \\rangle = i\\hbar \\frac{\\partial \\phi(p)}{\\partial p}$.`,
    intuition: `Notice the beautiful dual symmetry! In position space, position is simply multiplication by $x$, while momentum is the spatial derivative $-i\\hbar \\frac{d}{dx}$. In momentum space, momentum is simply multiplication by $p$, while position becomes the derivative $+i\\hbar \\frac{d}{dp}$. Both representations are entirely equivalent descriptions of the identical state ket $|\\psi\\rangle$!`,
    needs: ['c.3.7.1', 'c.3.3.3'],
    traps: [
      `Forgetting the plus sign in the momentum-space position operator: $\\hat{x} = +i\\hbar \\frac{\\partial}{\\partial p}$, not $-i\\hbar \\frac{\\partial}{\\partial p}$. This ensures $[\\hat{x}, \\hat{p}] = i\\hbar$ remains valid!`,
      `Thinking $\\psi(x)$ and $\\phi(p)$ are two different physical states. They are the exact same state $|\\psi\\rangle$ viewed from two different coordinate frames.`
    ],
    cards: [
      { q: 'How is the position operator $\\hat{x}$ represented in the momentum representation?', a: '$\\hat{x} = i\\hbar \\frac{\\partial}{\\partial p}$.', kind: 'state' },
      { q: 'How is the momentum operator $\\hat{p}$ represented in the position representation?', a: '$\\hat{p} = -i\\hbar \\frac{\\partial}{\\partial x}$.', kind: 'state' }
    ]
  },
  {
    id: 'c.3.7.3', sec: '3.7', kind: 'theorem', tier: 'core',
    title: 'The Plane Wave Transformation Kernel ⟨x|p⟩ and Fourier Transformation',
    oneLine: 'The overlap ⟨x|p⟩ = (1/√(2πħ)) e^{ipx/ħ} connects position and momentum representations via Fourier transformation.',
    statement: `The transformation kernel connecting position space to momentum space is the inner product $\\langle x | p \\rangle$:
$$\\boxed{\\langle x | p \\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}}$$
Using identity resolutions, the wave functions are related by Fourier transforms:
$$\\psi(x) = \\langle x | \\psi \\rangle = \\int_{-\\infty}^\\infty \\langle x | p \\rangle \\langle p | \\psi \\rangle \\, dp = \\boxed{\\frac{1}{\\sqrt{2\\pi\\hbar}} \\int_{-\\infty}^\\infty \\phi(p) e^{ipx/\\hbar} \\, dp}$$
$$\\phi(p) = \\langle p | \\psi \\rangle = \\int_{-\\infty}^\\infty \\langle p | x \\rangle \\langle x | \\psi \\rangle \\, dx = \\boxed{\\frac{1}{\\sqrt{2\\pi\\hbar}} \\int_{-\\infty}^\\infty \\psi(x) e^{-ipx/\\hbar} \\, dx}$$`,
    intuition: `What is a momentum eigenstate $|p\\rangle$ when viewed in position space? It is $\\langle x|p\\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}}e^{ipx/\\hbar}$: a pure, monochromatic plane wave of wavelength $\\lambda = h/p$! This derivation directly explains WHY the Fourier transform connects position and momentum in quantum physics: the plane wave is literally the basis transformation matrix element between $\\hat{x}$ and $\\hat{p}$!`,
    needs: ['c.3.7.2', 'c.2.3.2'],
    traps: [
      `Forgetting the factor of $1/\\sqrt{\\hbar}$ in the normalization of $\\langle x|p\\rangle$. With wave numbers $k$, the factor is $1/\\sqrt{2\\pi}$; with momentum $p = \\hbar k$, the factor becomes $1/\\sqrt{2\\pi\\hbar}$.`,
      `Mixing up the sign in the exponential: position to momentum uses $e^{-ipx/\\hbar}$; momentum to position uses $e^{+ipx/\\hbar}$.`
    ],
    proof: {
      idea: 'Solve the differential equation ⟨x|p̂|p⟩ = p⟨x|p⟩ in position representation and normalize using Dirac delta.',
      why: 'Derive the plane wave kernel ⟨x|p⟩ directly from the eigenvalue equation.',
      rungs: [
        {
          why: 'Express Eigenvalue Equation in Position Space',
          m: '$$\\langle x | \\hat{p} | p \\rangle = p \\langle x | p \\rangle \\implies -i\\hbar \\frac{d}{dx} \\langle x | p \\rangle = p \\langle x | p \\rangle$$',
          meaning: 'What this really means: Insert the differential operator for momentum.',
          label: 'Express Eigenvalue Equation in Position Space',
          math: '-i\\hbar \\frac{d}{dx}\\langle x|p\\rangle = p\\langle x|p\\rangle',
          note: 'First-order ODE.'
        },
        {
          why: 'Integrate Differential Equation',
          m: '$$\\frac{d\\langle x|p\\rangle}{\\langle x|p\\rangle} = \\frac{ip}{\\hbar} dx \\implies \\langle x | p \\rangle = N e^{ipx/\\hbar}$$',
          meaning: 'What this really means: Simple exponential solution.',
          label: 'Integrate Differential Equation',
          math: '\\langle x|p\\rangle = N e^{ipx/\\hbar}',
          note: 'Exponential eigenfunction.'
        },
        {
          why: 'Determine Normalization Constant N',
          m: '$$\\langle x | x\' \\rangle = \\int_{-\\infty}^\\infty \\langle x | p \\rangle \\langle p | x\' \\rangle \\, dp = |N|^2 \\int_{-\\infty}^\\infty e^{ip(x-x\')/\\hbar} \\, dp = |N|^2 (2\\pi\\hbar) \\delta(x - x\')$$',
          meaning: 'What this really means: Use completeness of momentum states and delta integral.',
          label: 'Determine Normalization Constant N',
          math: '|N|^2 (2\\pi\\hbar)\\delta(x - x\') = \\delta(x - x\')',
          note: 'Match delta coefficients.'
        },
        {
          why: 'Conclude Kernel Formula',
          m: '$$|N|^2 = \\frac{1}{2\\pi\\hbar} \\implies N = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\implies \\langle x | p \\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}$$',
          meaning: 'What this really means: Establishes the exact transformation kernel.',
          label: 'Conclude Kernel Formula',
          math: '\\langle x | p \\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}',
          note: 'Plane wave transformation kernel.'
        }
      ]
    },
    cards: [
      { q: 'What is the plane wave transformation kernel $\\langle x | p \\rangle$ connecting position and momentum bases?', a: '$\\langle x | p \\rangle = \\frac{1}{\\sqrt{2\\pi\\hbar}} e^{ipx/\\hbar}$.', kind: 'state' },
      { q: 'Express the momentum wave function $\\phi(p)$ in terms of the position wave function $\\psi(x)$.', a: '$\\phi(p) = \\frac{1}{\\sqrt{2\\pi\\hbar}} \\int_{-\\infty}^\\infty \\psi(x) e^{-ipx/\\hbar} dx$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.7.4', sec: '3.7', kind: 'theorem', tier: 'core',
    title: 'Equivalence of Schrödinger Wave Mechanics and Heisenberg Matrix Mechanics',
    oneLine: 'Wave mechanics (differential equations on ψ(x)) and matrix mechanics (matrix operators on state vectors) are isomorphic representations of identical physical reality.',
    statement: `In 1925–1926, two seemingly contradictory formulations of quantum theory emerged:
1. <b>Heisenberg's Matrix Mechanics:</b> Formulated in terms of discrete matrix tables, commutators, and algebraic operator equations.
2. <b>Schrödinger's Wave Mechanics:</b> Formulated in terms of continuous differential equations and spatial wave functions $\\psi(x,t)$.
<b>Dirac–von Neumann Equivalence Theorem:</b> Both formalisms are mathematically isomorphic representations of the same underlying abstract Hilbert space $\\mathcal{H}$:
$$\\text{Wave Mechanics} \\quad \\Longleftrightarrow \\quad \\text{Position Representation } \\psi(x) = \\langle x | \\psi \\rangle$$
$$\\text{Matrix Mechanics} \\quad \\Longleftrightarrow \\quad \\text{Discrete Energy Basis Representation } A_{ij} = \\langle E_i | \\hat{A} | E_j \\rangle$$
All physical predictions (eigenvalues, transition probabilities $|\\langle\\phi|\\psi\\rangle|^2$, expectation values $\\langle \\hat{A} \\rangle$) are strictly identical in both formulations.`,
    intuition: `Think of Cartesian coordinates $(x, y)$ versus polar coordinates $(r, \\theta)$. A circle can be described as $x^2 + y^2 = R^2$ or as $r = R$. The equations look completely different, but they describe the exact same physical curve. Schrödinger gave us the differential equation view; Heisenberg gave us the matrix algebra view; Dirac's bra-ket notation showed that both are merely different projections of the same vector $|\\psi\\rangle$ in Hilbert space!`,
    needs: ['c.3.6.1', 'c.3.7.3'],
    traps: [
      `Believing matrix mechanics applies only to discrete systems and wave mechanics applies only to continuous systems. Both can represent any quantum system with finite, countable, or continuous degrees of freedom.`,
      `Thinking state vectors evolve in the Heisenberg picture. In the Schrödinger picture, states evolve ($i\\hbar \\partial|\\psi\\rangle/\\partial t = \\hat{H}|\\psi\\rangle$) and operators are constant; in the Heisenberg picture, states are frozen and operators evolve ($d\\hat{A}/dt = \\frac{i}{\\hbar}[\\hat{H}, \\hat{A}]$).`
    ],
    cards: [
      { q: 'Who demonstrated the mathematical equivalence between Schrödinger wave mechanics and Heisenberg matrix mechanics?', a: 'Erwin Schrödinger and Paul Dirac (and John von Neumann).', kind: 'recall' },
      { q: 'How does Dirac notation reconcile wave mechanics and matrix mechanics?', a: 'Wave mechanics is the projection of state vectors onto the continuous position basis $\\langle x|\\psi\\rangle$; matrix mechanics is the projection onto a discrete basis $\\langle\\phi_i|\\hat{A}|\\phi_j\\rangle$.', kind: 'state' }
    ]
  }
);

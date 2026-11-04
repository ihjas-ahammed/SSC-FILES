/* ══════════════════════════════════════════════════════════════════════════
   Quantum Mechanics I · Module III — Mathematical Tools of Quantum Mechanics
   Prescribed Text: Nouredine Zettili 2e (Chapter 2: §§2.2–2.7)
   Sections: 3.0 to 3.7 (entry bridge followed by 23 core concepts)
   ══════════════════════════════════════════════════════════════════════════ */

if (typeof CONCEPTS === 'undefined') { var CONCEPTS = []; }

/* A gentle bridge placed before the formalism. These lessons start from high-school
   algebra, graphs, probability, and mechanics, then introduce the needed calculus. */
CONCEPTS.push(
  {
    id: 'c.3.0.1', sec: '3.0', kind: 'bridge', tier: 'core',
    title: 'Complex Numbers: the extra coordinate quantum amplitudes need',
    oneLine: 'A complex number a + ib has real and imaginary parts; its squared magnitude gives a non-negative relative probability weight.',
    statement: `You already know real numbers on a number line. Quantum amplitudes need a two-coordinate number, $z=a+ib$, where $i^2=-1$. Think of $a$ as a horizontal coordinate and $b$ as a vertical coordinate. The length of that arrow is the <b>modulus</b> $|z|=\\sqrt{a^2+b^2}$, so $|z|^2=a^2+b^2$ is always real and non-negative. For a normalized state in a discrete orthonormal basis, the squared magnitude of a component is its outcome probability. For a position wave function, the squared magnitude is a probability density; probability comes from integrating it over a position interval. Before normalization these are relative weights.<br><br>
For example, if an amplitude is $z=3+4i$, then $|z|=5$ and $|z|^2=25$. The complex conjugate flips the vertical coordinate: $z^*=a-ib$. Thus $z^*z=|z|^2$. In quantum mechanics it is this squared magnitude, rather than the amplitude itself, that becomes a probability density or probability.<br><br>
Multiplying by $e^{i\\theta}=\\cos\\theta+i\\sin\\theta$ rotates an amplitude without changing its length. This is why phase can affect interference while leaving the probability of one isolated amplitude unchanged.`,
    intuition: `Use an arrow on graph paper: real part is the east-west distance and imaginary part is the north-south distance. Conjugation reflects the arrow across the horizontal axis; modulus is its ordinary length. The diagram shows why $z^*z$ removes the phase and leaves a positive real number.`,
    img: ['c.3.0.1_complex_amplitude_plane'],
    cards: [
      { q: 'Find $|2- i|^2$.', a: '$2^2+(-1)^2=5$. Equivalently $(2+i)(2-i)=5$.', kind: 'practice' },
      { q: 'Why do we use $z^*z$ for probability rather than $z^2$?', a: '$z^*z=|z|^2$ is real and never negative, while $z^2$ can be complex or negative.', kind: 'understanding' }
    ]
  },
  {
    id: 'c.3.0.2', sec: '3.0', kind: 'bridge', tier: 'core',
    title: 'Vectors and coordinates: from arrows to quantum states',
    oneLine: 'A vector is an object with components; changing its coordinates changes the description, not the state itself.',
    statement: `A two-dimensional arrow can be written as $\\mathbf v=(v_1,v_2)$ once we choose two perpendicular unit directions. Its length is $|\\mathbf v|=\\sqrt{v_1^2+v_2^2}$, and the dot product $\\mathbf u\\cdot\\mathbf v=u_1v_1+u_2v_2$ measures alignment. Perpendicular vectors have dot product zero.<br><br>
Quantum states follow the same idea, except their components can be complex and the number of independent directions may be much larger than three. In a chosen basis, $|\\psi\\rangle$ is a column of amplitudes. The bra $\\langle\\psi|$ is its conjugate-transpose row, so the inner product is $\\langle\\psi|\\psi\\rangle=\\sum_j |c_j|^2$. A change of basis is like describing the same arrow with different axes.<br><br>
If $|0\\rangle$ and $|1\\rangle$ are perpendicular unit basis states, then $|\\psi\\rangle=(|0\\rangle+i|1\\rangle)/\\sqrt2$ has unit length because the probabilities add: $1/2+1/2=1$.`,
    intuition: `Coordinates are labels for components, not the object itself. A map can use north-east coordinates or street names and still locate the same place. Quantum mechanics uses basis states as its coordinate directions.`,
    needs: ['c.3.0.1'], img: ['c.3.0.2_quantum_state_coordinates'],
    cards: [
      { q: 'What is the norm squared of $|\\psi\\rangle=(|0\\rangle+i|1\\rangle)/\\sqrt2$ when the basis states are orthonormal?', a: '$|1/\\sqrt2|^2+|i/\\sqrt2|^2=1/2+1/2=1$.', kind: 'practice' },
      { q: 'Does changing basis physically change a state?', a: 'No. It changes the components used to describe the same abstract state.', kind: 'understanding' }
    ]
  },
  {
    id: 'c.3.0.3', sec: '3.0', kind: 'bridge', tier: 'core',
    title: 'Matrices as input-output rules',
    oneLine: 'A matrix is a table of coefficients that transforms vector components; multiplying matrices in reverse order can give a different result.',
    statement: `A matrix acts on a vector just as a set of simultaneous linear equations does. For example, the diagonal matrix $A=\\operatorname{diag}(2,-1)$ acts as
$$A(x,y)=(2x,-y).$$
The first coordinate is stretched by two; the second is reflected. The basis directions are especially useful: each column tells where one basis arrow goes.<br><br>
Order matters. Let $A$ swap the two coordinates and $B$ double the first coordinate. Starting with $(1,0)$, applying $B$ then $A$ gives $(2,0)\\mapsto(0,2)$; applying $A$ then $B$ gives $(0,1)\\mapsto(0,1)$. Therefore $AB\\ne BA$. The difference is measured by the commutator $[A,B]=AB-BA$.<br><br>
In quantum mechanics, operators are these input-output rules on states. An observable is represented by a special matrix or operator whose eigenvalues are the possible measurement results.`,
    intuition: `A matrix is a machine: feed it a state and read the output state. Two machines used in different orders need not produce the same output. This ordinary idea leads directly to quantum commutators.`,
    needs: ['c.3.0.2'], img: ['c.3.0.3_matrix_transformations'],
    cards: [
      { q: 'What information does column 1 of a matrix give?', a: 'The output when the first basis vector is used as input.', kind: 'recall' },
      { q: 'What does $[A,B]=0$ mean?', a: 'The two operations commute: applying A then B gives the same result as B then A.', kind: 'understanding' }
    ]
  },
  {
    id: 'c.3.0.4', sec: '3.0', kind: 'bridge', tier: 'core',
    title: 'Functions, slopes, areas, and the derivative notation',
    oneLine: 'A derivative measures local rate of change; an integral adds contributions over an interval.',
    statement: `A function assigns an output to each input: $y=f(x)$. On a graph, the slope between two points is $\\Delta y/\\Delta x$. Shrink the interval toward one point and the limiting slope is the derivative $df/dx$. For $f(x)=x^2$, the slope at $x$ is $2x$.<br><br>
An integral adds many thin contributions. Geometrically, $\\int_a^b f(x)\\,dx$ is signed area under the curve. If the graph is a probability density $|\\psi(x)|^2$, the area between $a$ and $b$ is the probability of finding the particle there. The whole area must be one: $\\int_{-\\infty}^{\\infty}|\\psi(x)|^2dx=1$.<br><br>
The second derivative $d^2\\psi/dx^2$ describes how sharply a curve bends. The Schrödinger equation from Module II contains this curvature because kinetic energy depends on momentum. Integration by parts is the integral version of the product rule:
$$\\int_a^b f(x)g'(x)\\,dx=[f(x)g(x)]_a^b-\\int_a^b f'(x)g(x)\\,dx.$$
If the functions vanish at the boundaries, the bracketed boundary term is zero. This explains why boundary conditions matter when derivatives are moved between functions in proofs about Hermitian operators.`,
    intuition: `A derivative is the speedometer reading of a graph at one point. An integral is a running total. Quantum mechanics uses the first to express how waves bend and the second to add probability across space.`,
    img: ['c.3.0.4_slope_and_probability_area'],
    cards: [
      { q: 'What does $\\int_a^b |\\psi(x)|^2 dx$ represent?', a: 'The probability of finding the particle between positions $a$ and $b$.', kind: 'understanding' },
      { q: 'If a wave function is normalized, what is its total probability?', a: 'One: $\\int_{-\\infty}^{\\infty}|\\psi(x)|^2dx=1$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.0.5', sec: '3.0', kind: 'bridge', tier: 'core',
    title: 'Averages and spread: the familiar statistics behind uncertainty',
    oneLine: 'An expectation value is a probability-weighted average; variance measures the spread around that average.',
    statement: `For outcomes $x_j$ with probabilities $p_j$, the average is $\\langle x\\rangle=\\sum_j p_jx_j$. For a continuous position distribution, replace the sum with an integral: $\\langle x\\rangle=\\int x|\\psi(x)|^2dx$. This is a long-run average over many identically prepared measurements, not a promise that one measurement equals the average.<br><br>
The variance is $\\sigma_x^2=\\sum_j p_j(x_j-\\langle x\\rangle)^2$, or $\\int (x-\\langle x\\rangle)^2|\\psi(x)|^2dx$ in the continuous case. Its square root $\\sigma_x$ is the standard deviation. A narrow distribution has small spread; a broad distribution has large spread.<br><br>
Module I introduced uncertainty for position and momentum. In Module III we will derive the stronger general statement $\\Delta A\\,\\Delta B\\ge\\tfrac12|\\langle[A,B]\\rangle|$. The statistical meanings of average and spread are exactly the same as in high-school probability; operators supply the quantum measurement outcomes.`,
    intuition: `Imagine recording the position of the same prepared particle many times. The histogram's centre is the expectation value and its width is the uncertainty. Uncertainty describes spread in outcomes, not carelessness in the measuring instrument.`,
    img: ['c.3.0.5_expectation_and_spread'],
    cards: [
      { q: 'A fair outcome is 0 or 2 with probability 1/2 each. What is its expectation?', a: '$\\langle x\\rangle=(0+2)/2=1$.', kind: 'practice' },
      { q: 'Does the expectation value have to occur in a single measurement?', a: 'No. It is the probability-weighted average over many measurements.', kind: 'understanding' }
    ]
  }
);

CONCEPTS.push(
  /* ── 3.1 Hilbert Space & Dirac Notation ───────────────────────────────────── */
  {
    id: 'c.3.1.1', sec: '3.1', kind: 'definition', tier: 'core',
    title: 'Linear Vector Spaces and Hilbert Space',
    oneLine: "A Hilbert space is a place to do vector maths with quantum states.",
    statement: `<b>Start here.</b> A Hilbert space is a place to do vector maths with quantum states. You can add states, multiply them by numbers and measure their lengths. “Complete” means that a sequence which converges in length has its limit in the same space; an arbitrary infinite sum need not converge.<br><br>A <b>Hilbert space</b> $\\mathcal{H}$ is a complex vector space equipped with an inner product $\\langle \\cdot | \\cdot \\rangle$ that is <b>complete</b> under the norm induced by the inner product (every Cauchy sequence converges to an element in $\\mathcal{H}$).
In quantum mechanics, the space of square-integrable wave functions:
$$\\mathcal{H} = L^2(\\mathbb{R}) = \\left\\{ \\psi(x) : \\int_{-\\infty}^\\infty |\\psi(x)|^2 dx < \\infty \\right\\}$$
forms an infinite-dimensional complex Hilbert space. Every physical state is represented by a ray (unit-norm vector) in $\\mathcal{H}$.`,
    intuition: `Think of Hilbert space as regular 3D Euclidean geometry elevated to infinite dimensions with complex coordinates. Just as any arrow in 3D can be expanded in $\\hat{i}, \\hat{j}, \\hat{k}$, any quantum state can be expanded in basis eigenstates. Completeness ensures that there are no "holes" or missing limit states: if the partial sums of a state series form a Cauchy sequence in the norm, their limit belongs to the same space. An arbitrary infinite series need not converge.`,
    needs: ['c.1.1.1'],
    traps: [
      `Confusing Hilbert space with physical 3D coordinate space. A particle moves in 3D real space $\\mathbb{R}^3$, but its wave function lives in an infinite-dimensional abstract function space $\\mathcal{H}$.`,
      `Thinking plane waves $e^{ikx}$ belong to the Hilbert space $L^2(\\mathbb{R})$. They do not, because $\\int |e^{ikx}|^2 dx = \\infty$; they belong to the extended "rigged Hilbert space".`
    ],
    cards: [
      { q: 'What is the definition of a Hilbert space in quantum mechanics?', a: 'A complete linear vector space over the complex numbers equipped with an inner product.', kind: 'state' },
      { q: 'Why is the condition of completeness essential for quantum mechanics?', a: 'It guarantees that every Cauchy sequence converges in the same space. It does not guarantee convergence of every infinite series.', kind: 'recall' }
    ]
  },
  {
    id: 'c.3.1.2', sec: '3.1', kind: 'definition', tier: 'core',
    title: 'Dirac Notation: Kets, Bras, and Dual Space',
    oneLine: "A ket is a column of amplitudes once you choose a basis.",
    statement: `<b>Start here.</b> A ket is a column of amplitudes once you choose a basis. A bra is the matching row, with every entry complex-conjugated. Row times column gives one number.<br><br>P.A.M. Dirac introduced the bracket formalism unifying wave and matrix mechanics:
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
    oneLine: "The overlap of two vectors cannot be larger than the product of their lengths.",
    statement: `<b>Start here.</b> The overlap of two vectors cannot be larger than the product of their lengths. To see why, subtract the part of one vector pointing along the other; the leftover squared length cannot be negative.<br><br>The inner product on $\\mathcal{H}$ satisfies:
1. <b>Skew-symmetry (Hermitian property):</b> $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle^*$
2. <b>Linearity in ket, antilinearity in bra:</b> $\\langle\\phi| c_1\\psi_1 + c_2\\psi_2 \\rangle = c_1\\langle\\phi|\\psi_1\\rangle + c_2\\langle\\phi|\\psi_2\\rangle$
3. <b>Positive definiteness:</b> $\\langle\\psi|\\psi\\rangle \\ge 0$, with $\\langle\\psi|\\psi\\rangle = 0 \\iff |\\psi\\rangle = 0$.
<b>Cauchy–Schwarz Inequality:</b>
$$\\boxed{|\\langle\\phi|\\psi\\rangle|^2 \\le \\langle\\phi|\\phi\\rangle \\langle\\psi|\\psi\\rangle}$$
Equality holds if and only if $|\\psi\\rangle = c |\\phi\\rangle$ for some scalar $c \\in \\mathbb{C}$.`,
    intuition: `This is the quantum version of the dot product inequality $|\\mathbf{u} \\cdot \\mathbf{v}| \\le |\\mathbf{u}| |\\mathbf{v}|$. The overlap between two quantum states can never exceed the product of their lengths. If normalized, $|\\langle\\phi|\\psi\\rangle| \\le 1$. The Cauchy–Schwarz inequality is the mathematical bedrock from which every quantum uncertainty relation is derived!`,
    needs: ['c.3.1.2'],
    traps: [
      `Assuming $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle$. Because the field is complex, reversing the order conjugates the result: $\\langle\\phi|\\psi\\rangle = \\langle\\psi|\\phi\\rangle^*$.`,
      `Forgetting that the norm is always non-negative. $\\langle\\psi|\\psi\\rangle = \\int |\\psi(x)|^2 dx \\ge 0$; an imaginary or negative norm is mathematically impossible in a Hilbert space.`
    ],
    proof: {
      idea: 'If |ϕ⟩ is zero, the inequality is immediate. Otherwise subtract the projection of |ψ⟩ along |ϕ⟩ and use the fact that the leftover squared length is non-negative.',
      why: 'Show that the squared norm of any vector must be greater than or equal to zero.',
      rungs: [
        {
          why: 'Subtract the part along ϕ',
          m: '$$|\\chi\\rangle = |\\psi\\rangle - \\lambda |\\phi\\rangle, \\quad \\text{where } \\lambda = \\frac{\\langle\\phi|\\psi\\rangle}{\\langle\\phi|\\phi\\rangle}$$',
          meaning: 'What this really means: We subtract from |ψ⟩ its shadow along |ϕ⟩, leaving only the perpendicular component.',
          label: 'Subtract the part along ϕ',
          math: '|\\chi\\rangle = |\\psi\\rangle - \\lambda |\\phi\\rangle, \\quad \\text{where } \\lambda = \\frac{\\langle\\phi|\\psi\\rangle}{\\langle\\phi|\\phi\\rangle}',
          note: 'Subtract the projection along |ϕ⟩.'
        },
        {
          why: 'Find the leftover squared length',
          m: '$$\\langle\\chi|\\chi\\rangle = \\langle\\psi - \\lambda\\phi | \\psi - \\lambda\\phi\\rangle = \\langle\\psi|\\psi\\rangle - \\lambda^* \\langle\\phi|\\psi\\rangle - \\lambda \\langle\\psi|\\phi\\rangle + |\\lambda|^2 \\langle\\phi|\\phi\\rangle$$',
          meaning: 'What this really means: Expand the inner product of the remainder vector with itself.',
          label: 'Find the leftover squared length',
          math: '\\langle\\chi|\\chi\\rangle = \\langle\\psi - \\lambda\\phi | \\psi - \\lambda\\phi\\rangle = \\langle\\psi|\\psi\\rangle - \\lambda^* \\langle\\phi|\\psi\\rangle - \\lambda \\langle\\psi|\\phi\\rangle + |\\lambda|^2 \\langle\\phi|\\phi\\rangle',
          note: 'Expand using antilinearity of the bra.'
        },
        {
          why: 'Put the chosen λ into the expression',
          m: '$$\\lambda^* \\langle\\phi|\\psi\\rangle = \\frac{\\langle\\psi|\\phi\\rangle \\langle\\phi|\\psi\\rangle}{\\langle\\phi|\\phi\\rangle} = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}, \\quad |\\lambda|^2 \\langle\\phi|\\phi\\rangle = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}$$',
          meaning: 'Each of these terms contains the same overlap squared divided by the length squared of ϕ. Two subtractions and one addition leave one subtraction.',
          label: 'Put the chosen λ into the expression',
          math: '\\lambda^* \\langle\\phi|\\psi\\rangle = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}, \\quad |\\lambda|^2 \\langle\\phi|\\phi\\rangle = \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle}',
          note: 'Cross-terms combine.'
        },
        {
          why: 'Use the fact that squared length is non-negative',
          m: '$$\\langle\\chi|\\chi\\rangle = \\langle\\psi|\\psi\\rangle - \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle} \\ge 0$$',
          meaning: 'What this really means: A squared vector length can never be negative.',
          label: 'Use the fact that squared length is non-negative',
          math: '\\langle\\psi|\\psi\\rangle - \\frac{|\\langle\\phi|\\psi\\rangle|^2}{\\langle\\phi|\\phi\\rangle} \\ge 0',
          note: 'Norm of |χ⟩ must be ≥ 0.'
        },
        {
          why: 'Multiply to get the bound',
          m: '$$|\\langle\\phi|\\psi\\rangle|^2 \\le \\langle\\phi|\\phi\\rangle \\langle\\psi|\\psi\\rangle$$',
          meaning: 'Multiply by the positive squared length of ϕ. The inequality keeps its direction, giving the required overlap bound.',
          label: 'Multiply to get the bound',
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
    oneLine: "Basis states are the coordinate directions for your state column.",
    statement: `<b>Start here.</b> Basis states are the coordinate directions for your state column. “Orthonormal” means each direction has length one and different directions have zero overlap. Adding all their projectors gives the identity.<br><br>A discrete set of states $\{ |\\phi_n\\rangle \}$ is an <b>orthonormal basis</b> of $\\mathcal{H}$ if:
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
    oneLine: "An operator is a rule that turns an input state into an output state.",
    statement: `<b>Start here.</b> An operator is a rule that turns an input state into an output state. In a chosen basis, a linear operator is a matrix. A projector keeps only the part pointing along a chosen state or subspace.<br><br>A <b>linear operator</b> $\\hat{A}$ maps kets to kets: $\\hat{A}(c_1|\\psi_1\\rangle + c_2|\\psi_2\\rangle) = c_1\\hat{A}|\\psi_1\\rangle + c_2\\hat{A}|\\psi_2\\rangle$.
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
    oneLine: "The dagger tells you to swap rows and columns and conjugate the entries.",
    statement: `<b>Start here.</b> The dagger tells you to swap rows and columns and conjugate the entries. For example, an i above the diagonal becomes a −i below it. This is called the adjoint.<br><br>For any linear operator $\\hat{A}$, its <b>Hermitian adjoint</b> (or adjoint) $\\hat{A}^\\dagger$ is uniquely defined by the inner product relation:
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
    oneLine: "A Hermitian matrix equals its conjugate transpose.",
    statement: `<b>Start here.</b> A Hermitian matrix equals its conjugate transpose. Its eigenvalues are real, which lets them represent measurement results. Multiplying two Hermitian matrices gives a Hermitian result only when they commute.<br><br>An operator $\\hat{A}$ is <b>Hermitian</b> (or self-adjoint) if it equals its own adjoint:
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
    oneLine: "An expectation value is the average result of many measurements on identically prepared systems.",
    statement: `<b>Start here.</b> An expectation value is the average result of many measurements on identically prepared systems. Multiply bra × operator × ket to calculate it. Variance measures how widely the results spread around that average.<br><br>For a system in state $|\\psi\\rangle$:
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
    oneLine: "Do two operations in one order, then in the opposite order.",
    statement: `<b>Start here.</b> Do two operations in one order, then in the opposite order. Subtract the results. The matrix AB − BA records this difference and is called the commutator.<br><br>The <b>commutator</b> of two operators $\\hat{A}$ and $\\hat{B}$ is defined by:
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
    oneLine: "Commutator identities are shortcuts for expanding products.",
    statement: `<b>Start here.</b> Commutator identities are shortcuts for expanding products. You can check them by replacing each bracket with AB − BA and cancelling matching terms; keep the multiplication order unchanged.<br><br>1. <b>Jacobi Identity:</b> For any three linear operators $\\hat{A}, \\hat{B}, \\hat{C}$:
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
    oneLine: "Position multiplies a wave function by x; momentum differentiates it and multiplies by −iℏ.",
    statement: `<b>Start here.</b> Position multiplies a wave function by x; momentum differentiates it and multiplies by −iℏ. Reversing their order leaves an extra iℏ times the original function. Exact position and momentum cannot both be finite matrices.<br><br>The foundational dynamic postulate of quantum mechanics for a particle with position $\\hat{x}$ and momentum $\\hat{p} = -i\\hbar \\frac{d}{dx}$ is the <b>Canonical Commutation Relation (CCR)</b>:
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
    oneLine: "Uncertainty is the spread of measurement results.",
    statement: `<b>Start here.</b> Uncertainty is the spread of measurement results. Subtract each observable’s average, apply the resulting operators to the state, then compare the lengths and overlap of those two new vectors.<br><br>For any two Hermitian operators $\\hat{A}$ and $\\hat{B}$ and any physical state $|\\psi\\rangle$, the product of their standard deviations obeys the <b>Robertson generalized uncertainty relation</b>:
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
    oneLine: "Commuting observables can share measurement states under the assumptions used here.",
    statement: `<b>Start here.</b> Commuting observables can share measurement states under the assumptions used here. In a common eigenbasis, both matrices are diagonal. Noncommuting observables do not have a complete common eigenbasis.<br><br>1. <b>Compatible Observables:</b> Two observables $\\hat{A}$ and $\\hat{B}$ are compatible if they commute:
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
    oneLine: "A function of a matrix uses the same idea as a function of a number.",
    statement: `<b>Start here.</b> A function of a matrix uses the same idea as a function of a number. For an exponential, add I + A + A²/2! and so on when the series is defined. Matrix order still matters.<br><br>For any analytic function $F(z) = \\sum_{n=0}^\\infty c_n z^n$, the operator function $F(\\hat{A})$ is defined by the power series:
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
    oneLine: "A unitary matrix keeps a state’s length unchanged.",
    statement: `<b>Start here.</b> A unitary matrix keeps a state’s length unchanged. Its inverse is its dagger. This preserves total probability while allowing the components and phases to change.<br><br>A linear operator $\\hat{U}$ is <b>unitary</b> if its adjoint equals its inverse:
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
    oneLine: "Write the state as a column, its bra as a conjugated row, and each operator as a table.",
    statement: `<b>Start here.</b> Write the state as a column, its bra as a conjugated row, and each operator as a table. Column j of the table tells you what happens to basis state j.<br><br>Given an orthonormal basis $\{|\\phi_n\\rangle\}$:
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
    oneLine: "A Hermitian matrix has real eigenvalues.",
    statement: `<b>Start here.</b> A Hermitian matrix has real eigenvalues. Eigenvectors with different eigenvalues have zero overlap. If an eigenvalue is repeated, choose perpendicular unit vectors within that subspace.<br><br>For any linear Hermitian operator $\\hat{A} = \\hat{A}^\\dagger$:
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
    oneLine: "If two Hermitian matrices commute, you can choose a basis that makes both diagonal.",
    statement: `<b>Start here.</b> If two Hermitian matrices commute, you can choose a basis that makes both diagonal. If an eigenvalue is repeated, first diagonalize the second matrix inside that repeated-eigenvalue subspace.<br><br><b>Theorem 2.3 (Simultaneous Eigenstates):</b>
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
    oneLine: "An anti-Hermitian matrix has purely imaginary eigenvalues, including zero.",
    statement: `<b>Start here.</b> An anti-Hermitian matrix has purely imaginary eigenvalues, including zero. A unitary matrix has eigenvalues of magnitude one. These follow by comparing a vector’s length before and after the matrix acts.<br><br>1. <b>Theorem 2.4 (Anti-Hermitian Spectrum):</b>
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
    oneLine: "A continuous basis has one label for every position or momentum, rather than a short list of directions.",
    statement: `<b>Start here.</b> A continuous basis has one label for every position or momentum, rather than a short list of directions. Sums become integrals, and the Dirac delta replaces the ordinary index-matching delta.<br><br>For observables with a continuous spectrum (like position $\\hat{x}$ and momentum $\\hat{p}$):
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
    oneLine: "The same state can be described using position components or momentum components.",
    statement: `<b>Start here.</b> The same state can be described using position components or momentum components. Changing the basis changes its description. It does not create a different physical state.<br><br>Inserting the completeness relations yields the wave functions in coordinate and momentum space:
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
    oneLine: "A Fourier transform rewrites a wave as a mixture of waves with definite momentum.",
    statement: `<b>Start here.</b> A Fourier transform rewrites a wave as a mixture of waves with definite momentum. Its kernel tells you the overlap between a position basis state and a momentum basis state.<br><br>The transformation kernel connecting position space to momentum space is the inner product $\\langle x | p \\rangle$:
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
    oneLine: "Wave mechanics and matrix mechanics describe the same quantum predictions.",
    statement: `<b>Start here.</b> Wave mechanics and matrix mechanics describe the same quantum predictions. A wave function is a state written in a continuous basis; a matrix acts on that state’s components in a chosen basis.<br><br>In 1925–1926, two seemingly contradictory formulations of quantum theory emerged:
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

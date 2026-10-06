import { problem, chk } from "../dsl.js";
const r = String.raw;

// Module 4, problems 5-8: matrices of the oscillator operators, expectation values and uncertainty,
// a two-state superposition, and Cartesian separation of variables.
export default [
  problem({
    id: "oscillator-matrices",
    name: "Matrix Representation of Oscillator Operators",
    group: "matrices",
    symbol: r`a_{mn}=\langle m|a|n\rangle`,
    prerequisites: ["Ladder Operator Action on Number States", "Matrix Element", "Matrix Representation", "Orthonormal Basis", "Kronecker Delta", "Hamiltonian", "Number Operator", "Commutator", "Position Operator", "Momentum Operator", "Hermitian Adjoint"],
    ross: { n: "A17-A18, B7-B9, C3", label: "Module 4 · Part A Q17–18, Part B Q7–9, Part C Q3", section: "A", page: 2 },
    title: "Matrices of a, a†, X, P and H in the energy basis",
    statement: r`Use the energy eigenbasis $\{|n\rangle\}$ of the one-dimensional harmonic oscillator. (a) Write the matrices of the annihilation operator $\hat a$ and the creation operator $\hat a^\dagger$, and say what the matrix elements $\langle m|\hat X|n\rangle$ look like. (b) Derive the matrices of $\hat X=\sqrt{\hbar/2m\omega}\,(\hat a+\hat a^\dagger)$ and $\hat P$ (the printed sheet writes $\hat P=i\sqrt{m\hbar\omega/2}\,(\hat a-\hat a^\dagger)$; the standard form is $\hat P=i\sqrt{m\hbar\omega/2}\,(\hat a^\dagger-\hat a)$, see the FAQ) and of $\hat H$. (c) Truncate to the first three states $|0\rangle,|1\rangle,|2\rangle$ and write the $3\times3$ matrices for $\hat a$, $\hat a^\dagger$ and $\hat X$.`,
    meaning: r`In the basis of energy states, $a$ moves every state one step down, $a^\dagger$ moves it one step up, and so both matrices have numbers only just next to the diagonal.`,
    linkedFormal: r`With $a|n\rangle=\sqrt n\,|n-1\rangle$ and $a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle$, the [[Matrix Element|matrix elements]] are $\langle m|a|n\rangle=\sqrt n\,\delta_{m,n-1}$ and $\langle m|a^\dagger|n\rangle=\sqrt{n+1}\,\delta_{m,n+1}$. Then $X=\sqrt{\hbar/2m\omega}\,(a+a^\dagger)$ and $P=i\sqrt{m\hbar\omega/2}\,(a^\dagger-a)$ have entries only at $m=n\pm1$, and $H=\hbar\omega(a^\dagger a+\tfrac12)$ is diagonal with entries $\hbar\omega(n+\tfrac12)$.`,
    example: r`The corner of the matrix of $a$ is $\begin{pmatrix}0&1&0&\cdots\\0&0&\sqrt2&\cdots\\0&0&0&\cdots\\\vdots&&&\end{pmatrix}$, and the matrix of $a^\dagger$ is its transpose.`,
    pretest: {
      prompt: r`The columns of a matrix describe where each basis state goes. Take $|0\rangle,|1\rangle,|2\rangle$ as the columns $e_1,e_2,e_3$, and an operator $a$ with $a|1\rangle=|0\rangle$. Which column of the matrix of $a$ equals $(1,0,0)^T$?`,
      options: [r`The second column`, r`The first column`, r`The third column`],
      correct: 0,
      explanation: r`Column $n$ of the matrix is the image of $|n\rangle$. The state $|1\rangle$ is the second basis vector, so its image $|0\rangle=(1,0,0)^T$ is the second column.`,
    },
    check: {
      prompt: r`What is $\langle m|a|n\rangle$ for the number states of the oscillator?`,
      options: [r`$\sqrt n\,\delta_{m,n-1}$`, r`$\sqrt n\,\delta_{m,n+1}$`, r`$n\,\delta_{m,n}$`],
      correct: 0,
      explanation: r`Since $a|n\rangle=\sqrt n\,|n-1\rangle$, only the row $m=n-1$ is non-zero in column $n$, and its value is $\sqrt n$.`,
    },
    faq: [
      { q: r`Why is the matrix of $a$ not symmetric?`, a: r`Because $a$ is not Hermitian. The matrix of $a^\dagger$ is its conjugate transpose, and here, since all entries are real, simply its transpose.` },
      { q: r`The matrices are infinite. How can that be?`, a: r`The oscillator has infinitely many energy levels, so its Hilbert space is infinite-dimensional. We write the corner and the pattern; the rule $\langle m|a|n\rangle=\sqrt n\,\delta_{m,n-1}$ gives every entry.` },
      { q: r`Which matrices are Hermitian?`, a: r`$X$, $P$ and $H$ are Hermitian, as observables must be. $a$ and $a^\dagger$ are not, but they are each other's Hermitian adjoint.` },
    ],
    proof: {
      idea: r`An operator becomes a matrix once we choose a basis: entry $(m,n)$ is $\langle m|A|n\rangle$. Because $a$ and $a^\dagger$ only move $|n\rangle$ one step, their matrices are almost empty, and $X$, $P$, $H$ are built from them by sums.`,
      steps: [
        {
          title: "Entries of an operator in the energy basis",
          text: r`The energy states are an [[Orthonormal Basis|orthonormal basis]]. For any operator $A$ the entry in row $m$ and column $n$ is $A_{mn}=\langle m|A|n\rangle$, a [[Matrix Element|matrix element]]. To find it, let $A$ act on $|n\rangle$ and then take the inner product with $\langle m|$.`,
          check: chk(r`To find the number in row $m$ and column $n$ of the matrix of $A$, what do we compute?`, r`The inner product of $\langle m|$ with $A|n\rangle$`, r`The inner product of $\langle n|$ with $A|m\rangle$`, r`The product $A$ times $\langle m|n\rangle$ only`, r`First act with $A$ on the ket $|n\rangle$ that labels the column, then project on the state $|m\rangle$ that labels the row.`, "Matrix Element"),
        },
        {
          title: "The matrix of the lowering operator",
          text: r`Since $a|n\rangle=\sqrt n\,|n-1\rangle$, we get $\langle m|a|n\rangle=\sqrt n\,\langle m|n-1\rangle=\sqrt n\,\delta_{m,n-1}$ by orthonormality ([[Kronecker Delta|Kronecker delta]]). So column $n$ has just one non-zero entry, $\sqrt n$, in row $n-1$: the numbers $1,\sqrt2,\sqrt3,\dots$ sit directly above the diagonal.`,
          check: chk(r`In the matrix of $a$, which entry in column $n=2$ (counting columns $0,1,2,\dots$) is non-zero, and what is it?`, r`Row $1$, with value $\sqrt2$`, r`Row $3$, with value $\sqrt3$`, r`Row $2$, with value $2$`, r`$a|2\rangle=\sqrt2\,|1\rangle$, so the only non-zero entry of column $2$ is in row $1$ and equals $\sqrt2$.`, "Kronecker Delta"),
        },
        {
          title: "The matrix of the raising operator",
          text: r`The raising operator is the [[Hermitian Adjoint|Hermitian adjoint]] of $a$, so its matrix is the conjugate transpose of the matrix of $a$. Equivalently $a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle$ gives $\langle m|a^\dagger|n\rangle=\sqrt{n+1}\,\delta_{m,n+1}$: the numbers $1,\sqrt2,\sqrt3,\dots$ now sit directly below the diagonal.`,
          check: chk(r`How do you get the matrix of $a^\dagger$ from the matrix of $a$?`, r`Take the conjugate transpose (here simply the transpose)`, r`Take the inverse matrix`, r`Multiply every entry by $\hbar\omega$`, r`The matrix of the Hermitian adjoint is the conjugate transpose. The entries of $a$ are real, so the transpose is enough.`, "Hermitian Adjoint"),
        },
        {
          title: "Position and momentum",
          text: r`Substituting, $X_{mn}=\sqrt{\tfrac{\hbar}{2m\omega}}\big(\sqrt n\,\delta_{m,n-1}+\sqrt{n+1}\,\delta_{m,n+1}\big)$ and $P_{mn}=i\sqrt{\tfrac{m\hbar\omega}{2}}\big(\sqrt{n+1}\,\delta_{m,n+1}-\sqrt n\,\delta_{m,n-1}\big)$. Both are non-zero only for $m=n\pm1$. Hence $\langle m|X|n\rangle=0$ unless $m$ and $n$ differ by exactly one. The sign in $P$ is the standard one: it gives $[X,P]=i\hbar$.`,
          check: chk(r`Which pairs of energy states have a non-zero matrix element $\langle m|\hat X|n\rangle$?`, r`Those with $m=n\pm1$`, r`Only those with $m=n$`, r`All pairs of states`, r`$X$ is a sum of $a$ and $a^\dagger$, which move $n$ by one step down or up, so only neighbouring states are connected.`, "Position Operator"),
        },
        {
          title: "The Hamiltonian is diagonal",
          text: r`$H=\hbar\omega(a^\dagger a+\tfrac12)$ and $a^\dagger a|n\rangle=n|n\rangle$, so $\langle m|H|n\rangle=\hbar\omega(n+\tfrac12)\,\delta_{mn}$. This is a diagonal matrix with entries $\tfrac12\hbar\omega,\ \tfrac32\hbar\omega,\ \tfrac52\hbar\omega,\dots$, as it must be in its own eigenbasis.`,
          check: chk(r`What is the matrix element $\langle2|\hat H|2\rangle$ of the oscillator Hamiltonian?`, r`$\tfrac52\hbar\omega$`, r`$2\hbar\omega$`, r`$0$`, r`Diagonal entries are the energies $\hbar\omega(n+\tfrac12)$, so for $n=2$ we get $\tfrac52\hbar\omega$.`, "Hamiltonian"),
        },
        {
          title: "Cut down to three states",
          text: r`Keep only $|0\rangle,|1\rangle,|2\rangle$ (a [[Truncated Basis|truncated basis]]): $a=\begin{pmatrix}0&1&0\\0&0&\sqrt2\\0&0&0\end{pmatrix}$, $a^\dagger=\begin{pmatrix}0&0&0\\1&0&0\\0&\sqrt2&0\end{pmatrix}$ and $X=\sqrt{\tfrac{\hbar}{2m\omega}}\begin{pmatrix}0&1&0\\1&0&\sqrt2\\0&\sqrt2&0\end{pmatrix}$. In the same way $P=i\sqrt{\tfrac{m\hbar\omega}{2}}\begin{pmatrix}0&-1&0\\1&0&-\sqrt2\\0&\sqrt2&0\end{pmatrix}$ and $H=\hbar\omega\,\mathrm{diag}(\tfrac12,\tfrac32,\tfrac52)$. A warning: in these matrices $aa^\dagger-a^\dagger a=\mathrm{diag}(1,1,-2)$, not the identity, because $a^\dagger|2\rangle$ points to the discarded state $|3\rangle$.`,
          check: chk(r`In the $3\times3$ truncation, what is the last diagonal entry of $aa^\dagger-a^\dagger a$?`, r`$-2$`, r`$1$`, r`$0$`, r`$a^\dagger a$ gives $2$ in the last place, but $aa^\dagger$ gives $0$ there because the term through $|3\rangle$ was cut off. So $0-2=-2$.`, "Truncated Basis"),
        },
      ],
      conclusion: r`In the energy basis $\langle m|a|n\rangle=\sqrt n\,\delta_{m,n-1}$ and $\langle m|a^\dagger|n\rangle=\sqrt{n+1}\,\delta_{m,n+1}$. $X$ and $P$ connect only neighbouring levels, $H$ is diagonal with entries $\hbar\omega(n+\tfrac12)$, and the three-state truncations are the $3\times3$ matrices above (with $[a,a^\dagger]=1$ failing only in the last diagonal place). $\blacksquare$`,
      example: {
        text: r`Check $[X,P]=i\hbar$ on the $2\times2$ top-left corner of the large matrices, using $\hbar=m=\omega=1$. Then $X=\tfrac1{\sqrt2}\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $P=\tfrac{i}{\sqrt2}\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, so $XP=\tfrac i2\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ and $PX=\tfrac i2\begin{pmatrix}-1&0\\0&1\end{pmatrix}$. The commutator is $i\begin{pmatrix}1&0\\0&-1\end{pmatrix}$: the first entry is $i=i\hbar$, as it should be. The second entry is wrong only because the corner leaves out $|2\rangle$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a matrix representation of an operator?`, a: r`A table of numbers $\langle m|A|n\rangle$. Multiplying the table by the column of a state gives the column of the new state. See [[Matrix Representation|matrix representation]].` },
        { q: r`Why does the question ask about $\langle m|X|n\rangle$ "qualitatively"?`, a: r`The point is the pattern: only neighbouring levels $m=n\pm1$ are connected, with strength proportional to $\sqrt n$ or $\sqrt{n+1}$.` },
        { q: r`The printed formula for $P$ has $(a-a^\dagger)$ with a plus $i$. Is it wrong?`, a: r`With that sign $[X,P]$ comes out as $-i\hbar$. The standard formula is $P=i\sqrt{m\hbar\omega/2}\,(a^\dagger-a)$, which equals $-i\sqrt{m\hbar\omega/2}\,(a-a^\dagger)$. Use it, and say so in your answer.` },
        { q: r`Why truncate to three states?`, a: r`To get a small matrix you can multiply by hand. It is accurate for matrix elements among the kept states, but identities that need more levels, like $[a,a^\dagger]=1$, only hold approximately.` },
        { q: r`How do I check my matrices are right?`, a: r`$a^\dagger$ should be the transpose of $a$, $X$ and $P$ should be Hermitian, and $H$ should be diagonal with entries $\tfrac12,\tfrac32,\tfrac52,\dots$ in units of $\hbar\omega$.` },
      ],
      keywords: [
        "matrix element|matrix elements", "orthonormal basis|energy basis|energy eigenbasis", "annihilation operator|lowering operator", "creation operator|raising operator",
        "square root of n|sqrt n", "above the diagonal|superdiagonal", "below the diagonal|subdiagonal", "transpose|conjugate transpose|Hermitian adjoint",
        "Kronecker delta|delta m n minus 1", "position operator|X matrix", "momentum operator|P matrix", "sum of a and a dagger|a plus a dagger",
        "neighbouring levels|nearest neighbours|m equals n plus or minus 1", "Hamiltonian diagonal|H diagonal", "n plus one half|n+1/2", "truncation|three by three|3 by 3",
        "commutator fails|last diagonal entry", "Hermitian matrix|Hermitian",
      ],
      retryPrompt: r`Without looking, write the rule for $\langle m|a|n\rangle$, explain why $X$ only links neighbouring levels, and describe the $3\times3$ matrices of $a$ and $X$. Put the matrices in the LaTeX box and recall the key words.`,
      sourcePageText: r`17. What is the matrix representations of the annihilation operator and the creation operator in the energy eigen basis? State the matrix elements <m|X|n> qualitatively. 18. Truncating the Hilbert space to the subspace spanned by the first three energy eigenstates |0>, |1> and |2> of a 1D harmonic oscillator: construct the 3 x 3 matrix representations for a and a-dagger; construct the corresponding 3 x 3 matrix representation for the position operator X. (Part B) 7. Using the energy eigen basis, write the first few rows and columns of the matrix representation of the annihilation operator a. 8. Derive the matrix representation of the position operator using X = sqrt(hbar/2m omega)(a + a-dagger). 9. Derive the matrix representation of the momentum operator using P = i sqrt(m hbar omega/2)(a - a-dagger). (Part C) 3. Develop the matrix representation of the harmonic-oscillator operators a, a-dagger, X, P, and H in the energy eigenbasis.`,
    },
  }),

  problem({
    id: "oscillator-expectation-uncertainty",
    name: "Oscillator Expectation Values and Uncertainty",
    group: "uncertainty",
    symbol: r`\langle X^2\rangle,\ \langle P^2\rangle`,
    prerequisites: ["Ladder Operator Action on Number States", "Matrix Representation of Oscillator Operators", "Expectation Value", "Variance", "Standard Deviation", "Orthonormal Basis", "Hamiltonian", "Number Operator"],
    ross: { n: "A23-A24, B10-B12, C4", label: "Module 4 · Part A Q23–24, Part B Q10–12, Part C Q4", section: "A", page: 2 },
    title: "⟨X⟩, ⟨P⟩, ⟨X²⟩, ⟨P²⟩ and ΔxΔp in an energy state",
    statement: r`For the $n$-th energy eigenstate $|n\rangle$ of the one-dimensional harmonic oscillator: (a) show that $\langle\hat X\rangle=\langle\hat P\rangle=0$; (b) compute $\langle\hat X^2\rangle$ and $\langle\hat P^2\rangle$, relate them to the energy, and show $\langle\hat H\rangle=\hbar\omega\left(n+\tfrac12\right)$; (c) find the product $\Delta x\,\Delta p$, deduce the uncertainty principle, and verify it for the ground state.`,
    meaning: r`In an energy state the oscillator is centred at the origin, its spread in position and momentum are both fixed by $n$, and their product is $(n+\tfrac12)\hbar$, never below the quantum limit $\hbar/2$.`,
    linkedFormal: r`For $|n\rangle$: $\langle X\rangle=\langle P\rangle=0$, $\langle X^2\rangle=(n+\tfrac12)\dfrac{\hbar}{m\omega}$, $\langle P^2\rangle=(n+\tfrac12)\,m\hbar\omega$. The energy is split equally, $\dfrac{\langle P^2\rangle}{2m}=\tfrac12m\omega^2\langle X^2\rangle=\tfrac12\hbar\omega(n+\tfrac12)$, so $\langle H\rangle=\hbar\omega(n+\tfrac12)$, and $\Delta x\,\Delta p=(n+\tfrac12)\hbar\ge\hbar/2$ with equality only for $n=0$.`,
    example: r`Ground state, $n=0$: $\langle X^2\rangle=\dfrac{\hbar}{2m\omega}$ and $\langle P^2\rangle=\dfrac{m\hbar\omega}{2}$. Then $\Delta x\,\Delta p=\sqrt{\dfrac{\hbar}{2m\omega}\cdot\dfrac{m\hbar\omega}{2}}=\dfrac\hbar2$.`,
    pretest: {
      prompt: r`The oscillator energy states $|n\rangle$ and $|n+1\rangle$ are two different eigenstates of the same Hamiltonian. What is the inner product $\langle n|n+1\rangle$?`,
      options: [r`$0$`, r`$1$`, r`$\sqrt{n+1}$`],
      correct: 0,
      explanation: r`Different energy states are orthogonal. Only the inner product of a state with itself is $1$.`,
    },
    check: {
      prompt: r`In an energy state $|n\rangle$ of the oscillator, what are the mean position $\langle X\rangle$ and mean momentum $\langle P\rangle$?`,
      options: [r`Both are $0$`, r`$\langle X\rangle=\sqrt{\hbar/m\omega}$ and $\langle P\rangle=0$`, r`Both equal $\hbar$`],
      correct: 0,
      explanation: r`The oscillator is symmetric about the origin and $X$, $P$ only link $|n\rangle$ to its neighbours, so both averages vanish.`,
    },
    faq: [
      { q: r`Why is the mean position zero but the spread not?`, a: r`The probability density is symmetric about $x=0$, so left and right cancel in the mean. But $x^2$ is always positive, so $\langle X^2\rangle$ cannot cancel.` },
      { q: r`What does "relate to the energy" mean?`, a: r`The energy is kinetic plus potential: $H=P^2/2m+\tfrac12m\omega^2X^2$. Taking expectation values connects $\langle P^2\rangle$ and $\langle X^2\rangle$ to $\langle H\rangle$.` },
      { q: r`Does the uncertainty product get bigger for larger $n$?`, a: r`Yes: $(n+\tfrac12)\hbar$. Higher states are spread over more positions and more momenta.` },
    ],
    proof: {
      idea: r`Write $X$ and $P$ with $a$ and $a^\dagger$, and use that $a|n\rangle$ and $a^\dagger|n\rangle$ are different energy states. Anything that changes $n$ gives zero when sandwiched between $\langle n|$ and $|n\rangle$. Only terms that put $n$ back survive.`,
      steps: [
        {
          title: "The means vanish",
          text: r`$X=\sqrt{\hbar/2m\omega}\,(a+a^\dagger)$, so $X|n\rangle$ is a mixture of $|n-1\rangle$ and $|n+1\rangle$. These are orthogonal to $|n\rangle$, hence $\langle n|X|n\rangle=0$. The same holds for $P$, which is also made of $a$ and $a^\dagger$. This is also what the matrices of the previous problem show: the diagonal of $X$ and $P$ is empty.`,
          check: chk(r`Why is $\langle n|\hat X|n\rangle$ equal to zero?`, r`$X|n\rangle$ only contains $|n\pm1\rangle$, which are orthogonal to $|n\rangle$`, r`Because $X$ is always zero on energy states`, r`Because the energy of $|n\rangle$ is zero`, r`The diagonal matrix elements of $X$ vanish because $a$ and $a^\dagger$ change the level by one.`, "Orthonormal Basis"),
        },
        {
          title: "The mean square position",
          text: r`$X^2=\tfrac{\hbar}{2m\omega}(a+a^\dagger)^2=\tfrac{\hbar}{2m\omega}(a^2+aa^\dagger+a^\dagger a+a^{\dagger2})$. The terms $a^2$ and $a^{\dagger2}$ change $n$ by two, so they give $0$. With $a^\dagger a|n\rangle=n|n\rangle$ and $aa^\dagger|n\rangle=(n+1)|n\rangle$ we get $\langle X^2\rangle=\tfrac{\hbar}{2m\omega}(n+n+1)=\left(n+\tfrac12\right)\tfrac{\hbar}{m\omega}$.`,
          check: chk(r`What is $\langle n|(aa^\dagger+a^\dagger a)|n\rangle$?`, r`$2n+1$`, r`$2n$`, r`$n^2+1$`, r`$a^\dagger a$ contributes $n$ and $aa^\dagger$ contributes $n+1$, and their sum is $2n+1$.`, "Number Operator"),
        },
        {
          title: "The mean square momentum",
          text: r`$P^2=-\tfrac{m\hbar\omega}{2}(a^\dagger-a)^2=-\tfrac{m\hbar\omega}{2}\left(a^{\dagger2}-a^\dagger a-aa^\dagger+a^2\right)$. Again only the middle terms survive, and they now carry a minus sign, so $\langle P^2\rangle=\tfrac{m\hbar\omega}{2}(n+n+1)=\left(n+\tfrac12\right)m\hbar\omega$. The result is positive, as a mean square must be.`,
          check: chk(r`Why is $\langle P^2\rangle$ positive although $P^2=-\tfrac{m\hbar\omega}{2}(a^\dagger-a)^2$ has a minus sign in front?`, r`The cross terms $-a^\dagger a-aa^\dagger$ carry their own minus sign, so the two signs cancel`, r`Because $P$ is real in position space`, r`It is not positive; it equals $-(n+\tfrac12)m\hbar\omega$`, r`Expanding $(a^\dagger-a)^2$ gives $-a^\dagger a-aa^\dagger$ in the middle, so the overall prefactor turns this into a positive quantity.`, "Momentum Operator"),
        },
        {
          title: "Connect to the energy",
          text: r`The Hamiltonian is $H=\dfrac{P^2}{2m}+\tfrac12m\omega^2X^2$. Its mean is $\dfrac{(n+\frac12)m\hbar\omega}{2m}+\tfrac12m\omega^2\cdot\dfrac{(n+\frac12)\hbar}{m\omega}=\tfrac12\hbar\omega(n+\tfrac12)+\tfrac12\hbar\omega(n+\tfrac12)=\hbar\omega(n+\tfrac12)$. The kinetic and potential parts each take half of the energy. Writing $H=\hbar\omega(a^\dagger a+\tfrac12)$ gives the same value at once, since $a^\dagger a|n\rangle=n|n\rangle$.`,
          check: chk(r`In the state $|n\rangle$, what is the average kinetic energy $\langle P^2\rangle/2m$?`, r`$\tfrac12\hbar\omega(n+\tfrac12)$, half of the total energy`, r`$\hbar\omega(n+\tfrac12)$, all of the energy`, r`$\tfrac12\hbar\omega\,n$`, r`Kinetic and potential energy each contribute $\tfrac12\hbar\omega(n+\tfrac12)$, so together they make $\hbar\omega(n+\tfrac12)$.`, "Hamiltonian"),
        },
        {
          title: "The uncertainty product",
          text: r`Since $\langle X\rangle=\langle P\rangle=0$, the [[Variance|variances]] are $(\Delta x)^2=\langle X^2\rangle$ and $(\Delta p)^2=\langle P^2\rangle$. Then $\Delta x\,\Delta p=\sqrt{\left(n+\tfrac12\right)\tfrac{\hbar}{m\omega}\cdot\left(n+\tfrac12\right)m\hbar\omega}=\left(n+\tfrac12\right)\hbar$. Because $n\ge0$ this is at least $\hbar/2$, which is the [[Heisenberg Uncertainty Principle|Heisenberg uncertainty principle]].`,
          check: chk(r`What is the product $\Delta x\,\Delta p$ in the state $|n\rangle$?`, r`$(n+\tfrac12)\hbar$`, r`$\tfrac12\hbar$ for every $n$`, r`$n\hbar$`, r`The $m$ and $\omega$ cancel under the square root, leaving $(n+\tfrac12)\hbar$.`, "Standard Deviation"),
        },
        {
          title: "The ground state sits on the limit",
          text: r`For $n=0$ the product is exactly $\tfrac12\hbar$, so the ground state saturates the bound. For $n\ge1$ it is $\tfrac32\hbar,\tfrac52\hbar,\dots$, strictly above the bound. This is why the ground state has the least possible uncertainty and why the oscillator can never be at rest at $x=0$ with $p=0$.`,
          check: chk(r`For which $n$ does $\Delta x\,\Delta p$ equal exactly the minimum $\hbar/2$?`, r`Only $n=0$, the ground state`, r`Every $n$`, r`No $n$ at all`, r`$(n+\tfrac12)\hbar=\tfrac12\hbar$ only when $n=0$.`, "Heisenberg Uncertainty Principle"),
        },
      ],
      conclusion: r`In $|n\rangle$: $\langle X\rangle=\langle P\rangle=0$, $\langle X^2\rangle=(n+\tfrac12)\hbar/m\omega$, $\langle P^2\rangle=(n+\tfrac12)m\hbar\omega$, $\langle H\rangle=\hbar\omega(n+\tfrac12)$ with kinetic and potential energy sharing it equally, and $\Delta x\,\Delta p=(n+\tfrac12)\hbar\ge\hbar/2$, with equality only for the ground state. $\blacksquare$`,
      example: {
        text: r`First excited state, $n=1$, in units $\hbar=m=\omega=1$: $\langle X^2\rangle=\tfrac32$ and $\langle P^2\rangle=\tfrac32$, so $\langle H\rangle=\tfrac34+\tfrac34=\tfrac32$, which is $1\cdot(1+\tfrac12)$ as required. The product is $\Delta x\,\Delta p=\sqrt{\tfrac32\cdot\tfrac32}=\tfrac32$, three times the minimum $\tfrac12$.`,
      },
    },
    question: {
      faq: [
        { q: r`Do I need the wave functions to do this?`, a: r`No. The ladder-operator method gives every expectation value by pure algebra, with no integrals.` },
        { q: r`What is $\Delta x$ here?`, a: r`$\Delta x=\sqrt{\langle X^2\rangle-\langle X\rangle^2}$. Because $\langle X\rangle=0$ it equals $\sqrt{\langle X^2\rangle}$. See [[Standard Deviation|standard deviation]].` },
        { q: r`How can $aa^\dagger$ and $a^\dagger a$ both appear?`, a: r`$X$ and $P$ are made of $a$ and $a^\dagger$, so their squares contain both orders. They give $n+1$ and $n$ respectively, because $a^\dagger a=\hat N$ and $aa^\dagger=\hat N+1$.` },
        { q: r`What does "verify the uncertainty relation" mean?`, a: r`Compute $\Delta x\,\Delta p$ for the ground state and check that it is at least $\hbar/2$. Here it equals $\hbar/2$ exactly.` },
        { q: r`Is $\langle H\rangle$ the same as the energy $E_n$?`, a: r`Yes. $|n\rangle$ is an energy eigenstate, so measuring the energy always gives $E_n=\hbar\omega(n+\tfrac12)$ and the mean equals it, with no spread.` },
      ],
      keywords: [
        "expectation value|mean value|average", "mean position zero|X expectation zero", "mean momentum zero|P expectation zero", "orthogonal|orthogonality",
        "ladder operators|a and a dagger", "number operator|a dagger a", "a a dagger equals n plus 1|n plus one", "X squared|mean square position", "P squared|mean square momentum",
        "cross terms survive|only a dagger a and a a dagger survive", "n plus one half|n+1/2", "kinetic and potential equal|virial|equal halves", "Hamiltonian expectation|average energy",
        "variance|mean square deviation", "standard deviation|uncertainty", "delta x delta p|product of uncertainties", "hbar over two|minimum uncertainty", "ground state saturates|equality for n equals zero",
      ],
      retryPrompt: r`Without looking, explain why $\langle X\rangle=\langle P\rangle=0$ in an energy state, outline how $\langle X^2\rangle$ and $\langle P^2\rangle$ come out, and finish with $\Delta x\,\Delta p$. Write the key formulas in the LaTeX box and recall the key words.`,
      sourcePageText: r`23. What are the values of <X> and <P> in any energy eigenstate of a one-dimensional harmonic oscillator? 24. State the relationship between <X^2>, <P^2>, and the energy of a harmonic oscillator. (Part B) 10. Show that <n|X|n> = 0, for any energy eigenstate of the harmonic oscillator. 11. Calculate <X^2> and <P^2> for the ground state and verify the uncertainty relation. 12. Show that the expectation value of the Hamiltonian in the nth energy eigen state is <H> = hbar omega (n + 1/2). (Part C) 4. Derive the expectation values <X>, <P>, <X^2>, and <P^2> for the nth stationary state of the harmonic oscillator. Calculate the product (Delta x Delta p) and hence obtain the uncertainty principle.`,
    },
  }),

  problem({
    id: "oscillator-superposition-mean-position",
    name: "Mean Position of a Two-Level Oscillator State",
    group: "states",
    symbol: r`\tfrac{1}{\sqrt2}(|0\rangle+|1\rangle)`,
    prerequisites: ["Ladder Operator Action on Number States", "Oscillator Ground State from the Lowering Condition", "Superposition", "Expectation Value", "Orthonormal Basis", "Bra", "Ket", "Normalization"],
    ross: { n: "B13", label: "Module 4 · Part B Q13", section: "A", page: 5 },
    title: "⟨X⟩ for the state (|0⟩ + |1⟩)/√2",
    statement: r`For the harmonic oscillator state $|\psi\rangle=\dfrac1{\sqrt2}\left(|0\rangle+|1\rangle\right)$, calculate $\langle\hat X\rangle$.`,
    meaning: r`Each energy state alone is centred at zero, but mixing two neighbouring ones shifts the average position, because the two states interfere.`,
    linkedFormal: r`For $|\psi\rangle=\tfrac1{\sqrt2}(|0\rangle+|1\rangle)$: $\langle X\rangle=\tfrac12\big(\langle0|X|0\rangle+\langle0|X|1\rangle+\langle1|X|0\rangle+\langle1|X|1\rangle\big)=\langle0|X|1\rangle=\sqrt{\dfrac{\hbar}{2m\omega}}$. The diagonal terms vanish; the whole answer comes from the cross terms.`,
    example: r`With $\hbar=m=\omega=1$, $\langle X\rangle=1/\sqrt2\approx0.71$. The state $\tfrac1{\sqrt2}(|0\rangle-|1\rangle)$ gives $-1/\sqrt2$.`,
    pretest: {
      prompt: r`$|\psi\rangle=\tfrac1{\sqrt2}(|0\rangle+|1\rangle)$ with $|0\rangle,|1\rangle$ orthonormal. What is $\langle\psi|\psi\rangle$?`,
      options: [r`$1$`, r`$\sqrt2$`, r`$2$`],
      correct: 0,
      explanation: r`$\langle\psi|\psi\rangle=\tfrac12(\langle0|0\rangle+\langle0|1\rangle+\langle1|0\rangle+\langle1|1\rangle)=\tfrac12(1+0+0+1)=1$.`,
    },
    check: {
      prompt: r`Which terms make the mean position of $\tfrac1{\sqrt2}(|0\rangle+|1\rangle)$ non-zero?`,
      options: [r`The cross terms $\langle0|X|1\rangle$ and $\langle1|X|0\rangle$`, r`The diagonal terms $\langle0|X|0\rangle$ and $\langle1|X|1\rangle$`, r`All four terms equally`],
      correct: 0,
      explanation: r`The diagonal terms are zero because each energy state alone is centred at the origin. The neighbouring levels are connected by $X$, and that connection gives the result.`,
    },
    faq: [
      { q: r`Why can $\langle X\rangle$ be non-zero here when it is zero in each energy state?`, a: r`A mixture of $|0\rangle$ and $|1\rangle$ is lopsided: the two wave functions add on one side of the origin and subtract on the other. This is interference.` },
      { q: r`Does the answer depend on the plus sign?`, a: r`Yes. With a minus sign the state is lopsided the other way and $\langle X\rangle=-\sqrt{\hbar/2m\omega}$. A complex relative phase $e^{i\varphi}$ gives $\sqrt{\hbar/2m\omega}\cos\varphi$.` },
      { q: r`Does $\langle X\rangle$ stay constant in time?`, a: r`No. The state evolves with the [[Energy Phase Factor|energy phase factors]] and $\langle X\rangle(t)=\sqrt{\hbar/2m\omega}\,\cos\omega t$, so the mean position oscillates at the oscillator frequency. $\langle P\rangle(t)=-\sqrt{m\hbar\omega/2}\,\sin\omega t$, as for a classical oscillator.` },
    ],
    proof: {
      idea: r`Expand the bra and the ket, so $\langle X\rangle$ splits into four matrix elements. Two of them vanish by the neighbour rule, and the other two are equal.`,
      steps: [
        {
          title: "Check the state is normalized",
          text: r`$\langle\psi|\psi\rangle=\tfrac12\left(\langle0|0\rangle+\langle0|1\rangle+\langle1|0\rangle+\langle1|1\rangle\right)=\tfrac12(1+0+0+1)=1$, since $|0\rangle$ and $|1\rangle$ are orthonormal. The expectation value is therefore $\langle X\rangle=\langle\psi|X|\psi\rangle$ with no division needed.`,
          check: chk(r`Why is the state $\tfrac1{\sqrt2}(|0\rangle+|1\rangle)$ already normalized?`, r`The two terms are orthonormal, so $\tfrac12(1+1)=1$`, r`Because the coefficients are real`, r`Because $|0\rangle$ and $|1\rangle$ have the same energy`, r`Cross terms vanish by orthogonality and each state contributes its norm $1$, times the factor $\tfrac12$.`, "Normalization"),
        },
        {
          title: "Expand the expectation value",
          text: r`Using the bra $\langle\psi|=\tfrac1{\sqrt2}(\langle0|+\langle1|)$, $\langle X\rangle=\tfrac12\big(\langle0|X|0\rangle+\langle0|X|1\rangle+\langle1|X|0\rangle+\langle1|X|1\rangle\big)$. These are four [[Superposition|superposition]] terms: two diagonal and two cross terms.`,
          check: chk(r`How many matrix elements of $\hat X$ appear when $\langle\psi|\hat X|\psi\rangle$ is expanded for a two-state superposition?`, r`Four: two diagonal and two cross terms`, r`Two: only the diagonal ones`, r`One: only $\langle0|X|1\rangle$`, r`Both the bra and the ket contain two terms, so we get $2\times2=4$ products.`, "Superposition"),
        },
        {
          title: "Diagonal terms vanish",
          text: r`$X=\sqrt{\hbar/2m\omega}\,(a+a^\dagger)$ moves a state one step up or down, so $X|0\rangle\propto|1\rangle$ and $X|1\rangle$ is a mixture of $|0\rangle$ and $|2\rangle$. Both are orthogonal to the original state, so $\langle0|X|0\rangle=\langle1|X|1\rangle=0$.`,
          check: chk(r`Why is $\langle1|\hat X|1\rangle=0$?`, r`$X|1\rangle$ is a mix of $|0\rangle$ and $|2\rangle$, orthogonal to $|1\rangle$`, r`$X|1\rangle=0$`, r`$X$ is zero on every state`, r`$X$ changes the level by one, so it can never return $|1\rangle$ to itself.`, "Orthonormal Basis"),
        },
        {
          title: "Cross terms are equal",
          text: r`$\langle0|X|1\rangle=\sqrt{\tfrac{\hbar}{2m\omega}}\left(\langle0|a|1\rangle+\langle0|a^\dagger|1\rangle\right)$. Since $a|1\rangle=|0\rangle$, $\langle0|a|1\rangle=1$, while $a^\dagger|1\rangle=\sqrt2\,|2\rangle$ is orthogonal to $\langle0|$. So $\langle0|X|1\rangle=\sqrt{\hbar/2m\omega}$. The other cross term is its complex conjugate (since $X$ is Hermitian) and is real, so $\langle1|X|0\rangle=\sqrt{\hbar/2m\omega}$ too.`,
          check: chk(r`What is $\langle0|\hat a|1\rangle$?`, r`$1$`, r`$0$`, r`$\sqrt2$`, r`$a|1\rangle=\sqrt1\,|0\rangle=|0\rangle$, so the inner product with $\langle0|$ is $1$.`, "Ladder Operator Action on Number States"),
        },
        {
          title: "Add up and interpret",
          text: r`$\langle X\rangle=\tfrac12\left(0+\sqrt{\tfrac{\hbar}{2m\omega}}+\sqrt{\tfrac{\hbar}{2m\omega}}+0\right)=\sqrt{\tfrac{\hbar}{2m\omega}}$. The result comes entirely from interference between the ground and first excited states. The same integral in position space is $\int\psi_0\,x\,\psi_1\,dx$, which is the overlap of $x$ with the product of the two wave functions and gives the same value.`,
          check: chk(r`What is $\langle X\rangle$ for $\tfrac1{\sqrt2}(|0\rangle+|1\rangle)$?`, r`$\sqrt{\hbar/2m\omega}$`, r`$0$`, r`$2\sqrt{\hbar/2m\omega}$`, r`The two equal cross terms add up to $2\sqrt{\hbar/2m\omega}$ and the factor $\tfrac12$ in front brings it back to $\sqrt{\hbar/2m\omega}$.`, "Expectation Value"),
        },
      ],
      conclusion: r`$\langle X\rangle=\sqrt{\hbar/2m\omega}$ for $|\psi\rangle=\tfrac1{\sqrt2}(|0\rangle+|1\rangle)$: the diagonal terms vanish and the two equal cross terms $\langle0|X|1\rangle$ and $\langle1|X|0\rangle$ give the whole result. $\blacksquare$`,
      example: {
        text: r`Take $\hbar=m=\omega=1$. Then $X_{01}=X_{10}=1/\sqrt2$ and $\langle X\rangle=\tfrac12\left(\tfrac1{\sqrt2}+\tfrac1{\sqrt2}\right)=\tfrac1{\sqrt2}\approx0.707$. For the other combination $\tfrac1{\sqrt2}(|0\rangle-|1\rangle)$ the cross terms flip sign and $\langle X\rangle\approx-0.707$.`,
      },
    },
    question: {
      faq: [
        { q: r`Do I need to know the wave functions?`, a: r`Not necessarily. The ladder-operator route needs only $a|1\rangle=|0\rangle$ and orthonormality. You can also integrate $\int\psi_0\,x\,\psi_1\,dx$ and get the same value.` },
        { q: r`Why is the answer not zero when each state has zero mean position?`, a: r`The average of a superposition is not the average of the averages: cross terms appear, and they represent interference between the two states.` },
        { q: r`What is $\langle0|X|1\rangle$ called?`, a: r`A transition matrix element of the position operator. It controls how strongly light can drive transitions between $|0\rangle$ and $|1\rangle$.` },
        { q: r`Do I need $\langle P\rangle$ as well?`, a: r`The question asks only for $\langle X\rangle$. For completeness $\langle P\rangle=0$ at $t=0$, since the cross terms are $\mp i\sqrt{m\hbar\omega/2}$ and cancel.` },
      ],
      keywords: [
        "superposition|linear combination", "normalized|normalization|one over root two", "bra and ket|bra ket", "expectation value|mean value", "expand four terms|four matrix elements",
        "diagonal terms zero|diagonal terms vanish", "cross terms|off-diagonal terms|interference", "X in terms of a and a dagger|a plus a dagger", "lowering operator on one|a on state one gives state zero",
        "orthonormal|orthogonality", "root hbar over two m omega|sqrt hbar over 2 m omega", "neighbouring levels|adjacent levels", "Hermitian|real cross terms", "minus sign gives negative|relative phase",
        "time dependence|oscillates in time", "cosine omega t|cos omega t", "position wave function integral|integral of psi zero x psi one",
      ],
      retryPrompt: r`Without looking, explain why each energy state alone has $\langle X\rangle=0$ but the mixture $(|0\rangle+|1\rangle)/\sqrt2$ does not, and give the value. Write the four-term expansion in the LaTeX box and recall the key words.`,
      sourcePageText: r`13. For the harmonic oscillator state |psi> = (1/sqrt2)(|0> + |1>), calculate <X>.`,
    },
  }),

  problem({
    id: "cartesian-separation",
    name: "Separation of Variables in Three Dimensions",
    group: "waves",
    symbol: r`\psi=X(x)\,Y(y)\,Z(z)`,
    prerequisites: ["Time-Independent Schrödinger Equation", "Hamiltonian", "Stationary State", "Partial Derivative Symbol", "Derivative", "Function", "Boundary Condition", "Eigenvalue"],
    ross: { n: "A28-A32, B15-B16, C6-C7", label: "Module 4 · Part A Q28–32, Part B Q15–16, Part C Q6–7", section: "B", page: 2 },
    title: "Cartesian separation: product wave functions and additive energies",
    statement: r`Start from the three-dimensional time-independent Schrödinger equation in Cartesian coordinates. Assume $\psi(x,y,z)=X(x)\,Y(y)\,Z(z)$ and a potential $V(x,y,z)=V_x(x)+V_y(y)+V_z(z)$. (a) Show how the equation separates into three one-dimensional equations. (b) Explain the three separation constants and show that the total energy is $E=E_x+E_y+E_z$. (c) State what the potential must satisfy for this to work, the quantum numbers of a separable problem, and the general form of a separable eigenfunction and its energy.`,
    meaning: r`If the potential is a sum of one-coordinate pieces, the 3D problem breaks into three independent 1D problems, the wave function is their product, and the energies add.`,
    linkedFormal: r`For $H=-\dfrac{\hbar^2}{2m}\nabla^2+V_x(x)+V_y(y)+V_z(z)$ the eigenfunctions have the form $\psi_{n_xn_yn_z}=X_{n_x}(x)\,Y_{n_y}(y)\,Z_{n_z}(z)$, where each factor solves its own one-dimensional Schrödinger equation, $-\tfrac{\hbar^2}{2m}X''+V_xX=E_xX$ and similarly for $Y,Z$, and the energy is $E=E_{n_x}+E_{n_y}+E_{n_z}$. The numbers $n_x,n_y,n_z$ are three independent quantum numbers.`,
    example: r`In a cubic box of side $L$ the factors are $\sqrt{2/L}\,\sin(n\pi x/L)$ and so on, with $E=\dfrac{\pi^2\hbar^2}{2mL^2}(n_x^2+n_y^2+n_z^2)$. The state $(1,2,3)$ has $E=14\,\dfrac{\pi^2\hbar^2}{2mL^2}$.`,
    pretest: {
      prompt: r`Let $f(x,y)=g(x)\,h(y)$. What is $\dfrac{\partial^2f}{\partial x^2}$?`,
      options: [r`$g''(x)\,h(y)$`, r`$g''(x)\,h''(y)$`, r`$g(x)\,h''(y)$`],
      correct: 0,
      explanation: r`The partial derivative in $x$ treats $h(y)$ as a constant, so only $g$ is differentiated, twice.`,
    },
    check: {
      prompt: r`Which condition on the potential allows the Cartesian product ansatz to separate the Schrödinger equation?`,
      options: [r`$V=V_x(x)+V_y(y)+V_z(z)$, a sum of one-coordinate terms`, r`$V=\lambda\,xy$, mixing $x$ and $y$`, r`$V$ must be zero everywhere`],
      correct: 0,
      explanation: r`Only a sum of terms that each depend on one coordinate lets us group every term with its own variable. A mixed term such as $xy$ cannot be assigned to just one of $X,Y$.`,
    },
    faq: [
      { q: r`Is the product form an assumption that restricts the answer?`, a: r`It is a way to find solutions. The product solutions form a complete set, so every state is a sum of them, as step 6 explains.` },
      { q: r`What happens if the potential has a mixed term like $xy$?`, a: r`The equation no longer splits in Cartesian coordinates because $x$ and $y$ stay tied together. One may then try other coordinates, but that is a different problem.` },
      { q: r`Are the three separation constants real?`, a: r`Yes. Each is the eigenvalue of a one-dimensional Hamiltonian, which is Hermitian, so the energies $E_x,E_y,E_z$ are real.` },
    ],
    proof: {
      idea: r`Substitute the product and divide by $XYZ$. The equation becomes a sum of three terms, each depending on one coordinate. A sum of single-variable terms can be constant only if each term is constant.`,
      steps: [
        {
          title: "The equation to solve",
          text: r`The [[Time-Independent Schrödinger Equation|time-independent Schrödinger equation]] in three dimensions is $-\dfrac{\hbar^2}{2m}\left(\dfrac{\partial^2\psi}{\partial x^2}+\dfrac{\partial^2\psi}{\partial y^2}+\dfrac{\partial^2\psi}{\partial z^2}\right)+V(x,y,z)\,\psi=E\,\psi$. We look for solutions with the product form $\psi=X(x)\,Y(y)\,Z(z)$.`,
          check: chk(r`Which operator appears in the kinetic energy term of the three-dimensional Schrödinger equation in Cartesian coordinates?`, r`The sum of the three second partial derivatives, $\partial_x^2+\partial_y^2+\partial_z^2$`, r`Only $\partial_x^2$`, r`The product $\partial_x\,\partial_y\,\partial_z$`, r`Kinetic energy is $-\tfrac{\hbar^2}{2m}$ times the sum of the second derivatives in each direction.`, "Time-Independent Schrödinger Equation"),
        },
        {
          title: "Substitute the product",
          text: r`For $\psi=XYZ$ each second derivative acts only on its own factor: $\partial_x^2\psi=X''YZ$, $\partial_y^2\psi=XY''Z$, $\partial_z^2\psi=XYZ''$. The equation becomes $-\tfrac{\hbar^2}{2m}\left(X''YZ+XY''Z+XYZ''\right)+(V_x+V_y+V_z)XYZ=E\,XYZ$. Dividing by $XYZ$ (where it is not zero) gives $-\tfrac{\hbar^2}{2m}\tfrac{X''}{X}-\tfrac{\hbar^2}{2m}\tfrac{Y''}{Y}-\tfrac{\hbar^2}{2m}\tfrac{Z''}{Z}+V_x+V_y+V_z=E$.`,
          check: chk(r`What is the partial derivative $\partial^2\psi/\partial y^2$ of $\psi=X(x)\,Y(y)\,Z(z)$?`, r`$X\,Y''\,Z$`, r`$X''\,Y''\,Z''$`, r`$X'\,Y'\,Z'$`, r`Only $Y$ depends on $y$, so only $Y$ is differentiated, twice.`, "Partial Derivative Symbol"),
        },
        {
          title: "Group the terms by coordinate",
          text: r`Using $V=V_x+V_y+V_z$ we regroup: $\left[-\tfrac{\hbar^2}{2m}\tfrac{X''}{X}+V_x(x)\right]+\left[-\tfrac{\hbar^2}{2m}\tfrac{Y''}{Y}+V_y(y)\right]+\left[-\tfrac{\hbar^2}{2m}\tfrac{Z''}{Z}+V_z(z)\right]=E$. The first bracket depends on $x$ alone, the second on $y$ alone, the third on $z$ alone, and their sum is the constant $E$.`,
          check: chk(r`After dividing by $XYZ$, on which variables does the first bracket $-\tfrac{\hbar^2}{2m}\tfrac{X''}{X}+V_x$ depend?`, r`On $x$ only`, r`On $x$, $y$ and $z$`, r`On $E$ only`, r`$X$, its derivative and $V_x$ are all functions of $x$, so the bracket is a function of $x$ alone.`, "Function"),
        },
        {
          title: "Each bracket is a constant",
          text: r`Change $x$ while keeping $y$ and $z$ fixed. Only the first bracket can change, yet the sum stays equal to $E$. So the first bracket does not change: it is a [[Separation Constant|separation constant]], called $E_x$. The same argument gives $E_y$ and $E_z$. We obtain three ordinary equations, $-\tfrac{\hbar^2}{2m}X''+V_xX=E_xX$, and likewise for $Y$ and $Z$, and the three constants add up to $E=E_x+E_y+E_z$. Physically $E_x$ is the energy of the motion along $x$.`,
          check: chk(r`If the sum of three brackets is the fixed number $E$ and the first bracket depends only on $x$, what must be true of the first bracket?`, r`It is constant, because $y$ and $z$ do not affect it while $x$ cannot change the total`, r`It is zero`, r`It equals $E$`, r`Changing $x$ alone leaves the other two brackets unchanged, so the first must not change either. Its value is $E_x$, not $E$.`, "Separation Constant"),
        },
        {
          title: "What the potential must look like",
          text: r`The grouping into three brackets needed every term of $V$ to belong to a single coordinate: $V=V_x(x)+V_y(y)+V_z(z)$. A term like $V_0\,xy$ cannot be put into a bracket depending on one variable, so the argument fails. Examples that work: a free particle, a rectangular box, and the harmonic oscillator $\tfrac12m(\omega_x^2x^2+\omega_y^2y^2+\omega_z^2z^2)$. A potential depending on $r=\sqrt{x^2+y^2+z^2}$ alone, such as the Coulomb potential, does not separate in Cartesian coordinates.`,
          check: chk(r`Which potential allows Cartesian separation of the Schrödinger equation?`, r`$V=\tfrac12m\omega_x^2x^2+\tfrac12m\omega_y^2y^2+\tfrac12m\omega_z^2z^2$`, r`$V=V_0\,xyz$`, r`$V=-\dfrac{k}{\sqrt{x^2+y^2+z^2}}$`, r`Only a sum of one-coordinate terms works. Each of the other two couples the coordinates.`, "Hamiltonian"),
        },
        {
          title: "Quantum numbers and the general solution",
          text: r`Each one-dimensional equation, together with its own [[Boundary Condition|boundary conditions]] (applied separately to $X$, $Y$ and $Z$, for example $X=0$ at the walls of a box), has allowed values $E_{n_x}$, $E_{n_y}$, $E_{n_z}$, labelled by three independent quantum numbers. A separable eigenfunction is $\psi_{n_xn_yn_z}=X_{n_x}Y_{n_y}Z_{n_z}$ with energy $E=E_{n_x}+E_{n_y}+E_{n_z}$. These products are a complete set, so any state is a sum $\sum c_{n_xn_yn_z}\,\psi_{n_xn_yn_z}$.`,
          check: chk(r`How many independent quantum numbers does a three-dimensional separable problem have, and how do the energies combine?`, r`Three, one per coordinate, and the energies add`, r`One, and the energies multiply`, r`Three, and the energies multiply`, r`Each coordinate has its own one-dimensional problem and its own number. The separation constants add to the total energy.`, "Stationary State"),
        },
      ],
      conclusion: r`If $V=V_x(x)+V_y(y)+V_z(z)$ then $\psi=X(x)Y(y)Z(z)$ solves the 3D Schrödinger equation whenever each factor solves its one-dimensional equation with eigenvalue $E_x$, $E_y$, $E_z$. The total energy is $E=E_x+E_y+E_z$, the quantum numbers are $n_x,n_y,n_z$, and the general state is a superposition of these product eigenfunctions. $\blacksquare$`,
      example: {
        text: r`Check with $\hbar=m=1$ and $V=\tfrac12(x^2+y^2+z^2)$. The function $\psi=e^{-(x^2+y^2+z^2)/2}=e^{-x^2/2}e^{-y^2/2}e^{-z^2/2}$ has each factor satisfying $-\tfrac12X''+\tfrac12x^2X=\tfrac12X$, so $E_x=E_y=E_z=\tfrac12$ and $E=\tfrac32$. Direct substitution into $-\tfrac12\nabla^2\psi+V\psi$ gives $\left(\tfrac32\right)\psi$ as well.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "separation of variables" mean?`, a: r`Turning one equation in several variables into several equations that each contain a single variable, by assuming a product solution and showing each factor obeys its own equation.` },
        { q: r`What are the three separation constants?`, a: r`They are $E_x$, $E_y$ and $E_z$, the energies of the motions along each axis, and they add up to the total energy $E$.` },
        { q: r`Why divide by $XYZ$?`, a: r`Dividing turns each second derivative term into $X''/X$, $Y''/Y$ or $Z''/Z$, which each depend on a single variable. Solutions that vanish somewhere are handled at those points by continuity.` },
        { q: r`Is the sum of the three energies the energy of a different problem?`, a: r`No. It is the energy of the 3D problem. The three $E$'s are the parts of the energy stored in the three directions.` },
        { q: r`What is the general form of a separable eigenfunction?`, a: r`$\psi_{n_xn_yn_z}(x,y,z)=X_{n_x}(x)\,Y_{n_y}(y)\,Z_{n_z}(z)$ with $E=E_{n_x}+E_{n_y}+E_{n_z}$.` },
      ],
      keywords: [
        "separation of variables|separable", "product wave function|product form|product ansatz", "three dimensional Schrodinger equation|3D Schrodinger equation", "Laplacian|second partial derivatives",
        "divide by X Y Z|divide by XYZ", "each term depends on one variable|single variable", "constant|separation constant", "E x plus E y plus E z|sum of energies|additive energies",
        "three one dimensional equations|ordinary differential equations", "potential is a sum|V x plus V y plus V z", "mixed term cannot separate|coupling term", "quantum numbers n x n y n z|three quantum numbers",
        "boundary conditions|walls of the box", "general eigenfunction|product of eigenfunctions", "complete set|superposition of products", "independent motions|motion along each axis", "energy of x motion|energy of motion along x",
      ],
      retryPrompt: r`Without looking, show how the substitution $\psi=XYZ$ splits the equation, why each bracket must be constant, and what the energy and eigenfunctions are. Put the key equations in the LaTeX box and recall the key words.`,
      sourcePageText: r`28. State the three-dimensional time-independent Schrodinger equation in Cartesian coordinates. 29. What is meant by separation of variables? 30. Write the product form assumed for a separable three-dimensional wave function. 31. What condition must the potential satisfy for Cartesian separation of variables to be possible? If V(x,y,z) = Vx(x) + Vy(y) + Vz(z), how is the total energy related to the energies in the three coordinate directions? 32. What are the quantum numbers associated with a separable Cartesian problem? Write the general form of a separable three-dimensional eigenfunction. (Part B) 15. Starting with the three-dimensional Schrodinger equation, assume psi(x,y,z) = X(x)Y(y)Z(z). Show how the equation separates when V = Vx + Vy + Vz. Explain the physical meaning of the three separation constants in a Cartesian problem. Show that the total energy is the sum of the energies associated with the x, y, and z motions. 16. Write the general form of the wave function and energy for a three-dimensional separable system. (Part C) 6. Starting from the three-dimensional time-independent Schrodinger equation, derive the separation-of-variables method for a potential of the form V = Vx + Vy + Vz. Explain the meaning of the separation constants and the resulting total energy. 7. Discuss the general treatment of three-dimensional problems in Cartesian coordinates. Explain the role of product wave functions, independent quantum numbers, and additive energies.`,
    },
  }),
];

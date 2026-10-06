import { idea } from "../dsl.js";
const r = String.raw;

// Supports used by Module 4 problems 5-8 that the Module 3 concept pool does not have.
export default [
  idea({
    id: "matrix-element",
    name: "Matrix Element",
    group: "matrices",
    symbol: r`\langle m|A|n\rangle`,
    prerequisites: ["Matrix Representation", "Orthonormal Basis", "Bra", "Ket"],
    minutes: 3,
    meaning: r`A matrix element is one number in the matrix of an operator: how much of basis state $m$ you find after the operator acts on basis state $n$.`,
    linkedFormal: r`For an [[Orthonormal Basis|orthonormal basis]] $\{|n\rangle\}$ the entry in row $m$ and column $n$ of the [[Matrix Representation|matrix of an operator]] $A$ is $A_{mn}=\langle m|A|n\rangle$. Column $n$ of the matrix is the list of numbers $\langle m|A|n\rangle$ for all $m$: it describes what $A$ does to $|n\rangle$.`,
    example: r`If $A|1\rangle=3|0\rangle+2|1\rangle$ in a basis $|0\rangle,|1\rangle$, then $A_{01}=\langle0|A|1\rangle=3$ and $A_{11}=2$, so the second column of the matrix is $(3,2)^T$.`,
    pretest: {
      prompt: r`An operator obeys $B|2\rangle=5|1\rangle$. What is the matrix element $\langle1|B|2\rangle$?`,
      options: [r`$5$`, r`$0$`, r`$\tfrac15$`],
      correct: 0,
      explanation: r`Taking the inner product of $5|1\rangle$ with $\langle1|$ gives $5\langle1|1\rangle=5$, because the basis is orthonormal.`,
    },
    check: {
      prompt: r`Which expression gives the entry in row $m$ and column $n$ of the matrix of an operator $A$ in an orthonormal basis?`,
      options: [r`$\langle m|A|n\rangle$`, r`$\langle n|A|m\rangle$`, r`$\langle m|n\rangle A$`],
      correct: 0,
      explanation: r`The ket $|n\rangle$ is what $A$ acts on (the column) and the bra $\langle m|$ picks out the row. Swapping them gives the transpose position.`,
    },
    faq: [
      { q: r`Why does the bra go on the left and the ket on the right?`, a: r`Reading right to left: first $A$ acts on the ket $|n\rangle$, then the bra $\langle m|$ measures how much of $|m\rangle$ is in the result. The ket labels the column and the bra labels the row.` },
      { q: r`Why do we need an orthonormal basis?`, a: r`Only then does $\langle m|\big(\sum_k c_k|k\rangle\big)$ pick out exactly $c_m$. In a non-orthogonal basis the formula would mix different entries.` },
    ],
  }),

  idea({
    id: "truncated-basis",
    name: "Truncated Basis",
    group: "matrices",
    symbol: r`\{|0\rangle,|1\rangle,|2\rangle\}`,
    prerequisites: ["Matrix Representation", "Orthonormal Basis", "Trace"],
    minutes: 3,
    meaning: r`A truncated basis keeps only the first few basis states and throws the rest away, so every operator becomes a small finite matrix.`,
    linkedFormal: r`Keeping only the first $N$ states $|0\rangle,\dots,|N-1\rangle$ of an infinite basis turns an operator $A$ into the $N\times N$ matrix of entries $\langle m|A|n\rangle$ with $m,n<N$. Operator equations then hold only approximately: any entry that would need a state outside the kept set is lost. For example $[a,a^\dagger]=1$ cannot hold exactly, since the [[Trace|trace]] of a commutator of finite matrices is $0$ while the trace of the $N\times N$ identity is $N$.`,
    example: r`Keeping $|0\rangle,|1\rangle,|2\rangle$ for the oscillator, $a|2\rangle=\sqrt2\,|1\rangle$ is kept, but $a^\dagger|2\rangle=\sqrt3\,|3\rangle$ points to a discarded state, so the matrix of $a^\dagger$ has a zero in the place where $\sqrt3$ should be.`,
    pretest: {
      prompt: r`A $3\times3$ matrix $M$ is built as $M=AB-BA$ from two $3\times3$ matrices. Could $M$ equal the $3\times3$ identity matrix?`,
      options: [r`No: the trace of $AB-BA$ is $0$ but the identity has trace $3$`, r`Yes: every matrix is a commutator of something`, r`Yes, but only when $A=B$`],
      correct: 0,
      explanation: r`The trace of $AB$ equals the trace of $BA$, so the trace of $AB-BA$ is always $0$. The identity has trace $3$, so it can never be such a commutator.`,
    },
    check: {
      prompt: r`Why is a matrix built from only the first few oscillator states only an approximation?`,
      options: [r`Operators can lead out of the kept states, and that part is dropped`, r`The first few states are not orthogonal`, r`Matrices cannot represent operators at all`],
      correct: 0,
      explanation: r`Raising operators send $|N-1\rangle$ to a state outside the kept set. The dropped piece is exactly what changes some operator identities.`,
    },
    faq: [
      { q: r`Is the truncated matrix wrong?`, a: r`It is exact for every matrix element between kept states. What is lost is whatever needs a discarded state, which is why operator identities can fail near the edge of the kept block.` },
      { q: r`When is truncation a good idea?`, a: r`When the physics you care about involves only the lowest states, for example low temperature or weak driving. Then the missing states hardly matter.` },
    ],
  }),

  idea({
    id: "energy-phase-factor",
    name: "Energy Phase Factor",
    group: "states",
    symbol: r`e^{-iE_nt/\hbar}`,
    prerequisites: ["Quantum State", "Phase", "Imaginary Unit", "Exponential Function"],
    minutes: 3,
    meaning: r`As time passes, a state of energy $E$ is multiplied by a rotating complex number $e^{-iEt/\hbar}$. This changes its phase but not its probabilities.`,
    linkedFormal: r`If $|n\rangle$ has energy $E_n$ then it evolves as $|n\rangle e^{-iE_nt/\hbar}$. For a single energy state every probability stays the same. For a [[Superposition|superposition]] each term rotates at its own rate, so the relative [[Phase|phase]] changes with time, and expectation values of operators that connect different energies oscillate at the frequency $(E_m-E_n)/\hbar$.`,
    example: r`With $E_n=(n+\tfrac12)\hbar\omega$ the state $(|0\rangle+|1\rangle)/\sqrt2$ becomes $\big(e^{-i\omega t/2}|0\rangle+e^{-3i\omega t/2}|1\rangle\big)/\sqrt2$. The relative phase is $e^{-i\omega t}$, which makes the average position swing at the angular frequency $\omega$.`,
    pretest: {
      prompt: r`A state has a single definite energy $E$. Does the probability of finding it at a given position change with time?`,
      options: [r`No: only its phase rotates, and $|e^{-iEt/\hbar}|=1$`, r`Yes: it grows steadily`, r`Yes: it decays to zero`],
      correct: 0,
      explanation: r`The factor $e^{-iEt/\hbar}$ has absolute value $1$, so $|\psi|^2$ does not change. Such a state is called stationary.`,
    },
    check: {
      prompt: r`What makes the expectation value of position oscillate for a mixture of two different energy states?`,
      options: [r`The two terms rotate at different rates, so their relative phase changes`, r`The two terms have different norms`, r`The expectation value always oscillates, even for one energy state`],
      correct: 0,
      explanation: r`Cross terms contain $e^{-i(E_1-E_0)t/\hbar}$, which oscillates. For one energy the phase cancels against its own conjugate.`,
    },
    faq: [
      { q: r`Why a minus sign in the exponent?`, a: r`It is the convention that follows from the time-dependent Schrödinger equation $i\hbar\,\partial_t\psi=H\psi$. The sign decides only which way the phase turns.` },
      { q: r`Is the phase observable?`, a: r`The overall phase of one state is not. The relative phase between two terms of a superposition is, because it shows up in interference terms.` },
    ],
  }),

  idea({
    id: "separation-constant",
    name: "Separation Constant",
    group: "waves",
    symbol: r`E_x,\,E_y,\,E_z`,
    prerequisites: ["Function", "Derivative", "Partial Derivative Symbol"],
    minutes: 3,
    meaning: r`If a quantity that depends only on $x$ always equals a quantity that depends only on $y$, both must be the same constant. That constant is a separation constant.`,
    linkedFormal: r`Suppose $f(x)=g(y)$ for all $x$ and all $y$. Changing $x$ alone leaves the right-hand side untouched, so $f$ cannot change with $x$. The same argument shows $g$ cannot change with $y$. Hence $f(x)=g(y)=k$ for one number $k$, the separation constant. Splitting a many-variable equation into one-variable equations produces such constants.`,
    example: r`The statement $x^2=y+4$ for all $x$ and $y$ is impossible: moving $x$ changes only the left side. But if $X''(x)/X(x)=-Y''(y)/Y(y)$ for all $x$ and $y$, then both sides must equal the same constant $k$, which gives two separate equations $X''=kX$ and $Y''=-kY$.`,
    pretest: {
      prompt: r`A function of $x$ only is always equal to a function of $y$ only, for all $x$ and $y$. What can be said about them?`,
      options: [r`Both equal the same constant`, r`Both equal $x+y$`, r`They must both be zero`],
      correct: 0,
      explanation: r`Moving $x$ cannot change the $y$-side, so the $x$-side never changes. The same holds for the other side, so each is a constant, and the constant is the same.`,
    },
    check: {
      prompt: r`Why can a sum of three terms depending on $x$, on $y$ and on $z$ respectively equal a fixed number only if each term is itself constant?`,
      options: [r`Changing one variable changes only its own term, so that term cannot vary`, r`Because the three terms are always equal to each other`, r`Because every term equals zero`],
      correct: 0,
      explanation: r`If $x$ is changed with $y,z$ fixed, only the $x$-term can move, yet the total stays fixed. So the $x$-term is constant, and likewise the others.`,
    },
    faq: [
      { q: r`Can the separation constants be negative?`, a: r`Yes, any real number is possible mathematically. For the Schrödinger equation boundary conditions later limit which constants (energies) are allowed.` },
      { q: r`Is a separation constant the same as an eigenvalue?`, a: r`When the one-variable equation is an eigenvalue equation, yes. The allowed constants are then the eigenvalues, for example the energy $E_x$ of motion along $x$.` },
    ],
  }),
];

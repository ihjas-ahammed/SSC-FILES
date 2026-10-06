import { problem, chk } from "../dsl.js";
const r = String.raw;

// Part A: the one-dimensional oscillator. Module 4, Part A Q1-Q6, Q13-Q16, Part B Q1-Q5, Part C Q1-Q2 and Q5, merged into four unique problems.
export default [
  problem({
    id: "oscillator-spectrum",
    name: "Oscillator Energy Levels from Ladder Operators",
    group: "eigen",
    symbol: r`E_n=\left(n+\tfrac12\right)\hbar\omega`,
    prerequisites: ["Hamiltonian", "Harmonic Oscillator Potential", "Time-Independent Schrödinger Equation", "Commutator", "Eigenvalue", "Eigenvector", "Hermitian Adjoint", "Inner Product", "Norm", "Expectation Value", "Standard Deviation", "Heisenberg Uncertainty Principle"],
    ross: { n: "A1·A4·B1·B4·C1", label: "Module 4 · Part A Q1, Q4 · Part B Q1, Q4 · Part C Q1", section: "A", page: 1 },
    title: "Energy levels of the quantum oscillator and the zero-point energy",
    statement: r`Write the potential-energy function for the one-dimensional harmonic oscillator and state the energy eigenvalues of the quantum harmonic oscillator. What is meant by the ground state and by an excited state? State how the spacing of the levels is related to $\hbar\omega$. Derive the energy eigenvalues using ladder operators, show that the ground-state energy is $\hbar\omega/2$ and not zero, and explain why the energy of a quantum harmonic oscillator can never be zero (the zero-point energy).`,
    meaning: r`A mass on a spring can only have the energies $\tfrac12\hbar\omega,\ \tfrac32\hbar\omega,\ \tfrac52\hbar\omega,\ \dots$ The steps are all the same size, $\hbar\omega$, and the lowest step is not zero.`,
    linkedFormal: r`For the potential $V(x)=\tfrac12m\omega^2x^2$ the [[Hamiltonian|Hamiltonian]] is $H=\dfrac{p^2}{2m}+\tfrac12m\omega^2x^2$ and the allowed energies are $E_n=\left(n+\tfrac12\right)\hbar\omega$ for $n=0,1,2,\dots$ The state with $n=0$ is the ground state, with the [[Zero-Point Energy|zero-point energy]] $E_0=\tfrac12\hbar\omega$. The states with $n\ge1$ are excited states, and neighbouring levels are $\hbar\omega$ apart. In terms of $a=\sqrt{\tfrac{m\omega}{2\hbar}}\big(x+\tfrac{i p}{m\omega}\big)$ and $a^\dagger$, with $[a,a^\dagger]=1$, the Hamiltonian is $H=\hbar\omega\left(a^\dagger a+\tfrac12\right)$.`,
    example: r`If $\hbar\omega=1$ in some unit, the first levels are $E_0=\tfrac12$, $E_1=\tfrac32$, $E_2=\tfrac52$. The gap between any two neighbours is exactly $1=\hbar\omega$, and no level is below $\tfrac12$.`,
    pretest: {
      prompt: r`A classical mass on a spring can sit at rest at the bottom with energy $0$. In the quantum oscillator, what is the lowest possible energy?`,
      options: [r`$\tfrac12\hbar\omega$, which is not zero`, r`$0$, the same as classically`, r`$\hbar\omega$`],
      correct: 0,
      explanation: r`Sitting still at one point would fix both the position and the momentum, which the uncertainty principle forbids. The lowest energy is $\tfrac12\hbar\omega$, not $0$ and not $\hbar\omega$.`,
    },
    check: {
      prompt: r`Which formula gives all the allowed energies of the one-dimensional quantum harmonic oscillator?`,
      options: [r`$E_n=(n+\tfrac12)\hbar\omega,\ n=0,1,2,\dots$`, r`$E_n=n^2\hbar\omega$ for $n=1,2,3,\dots$`, r`$E_n=n\hbar\omega$ for $n=0,1,2,\dots$`],
      correct: 0,
      explanation: r`The levels are equally spaced by $\hbar\omega$ and start at $\tfrac12\hbar\omega$. The formula $n^2\hbar\omega$ belongs to a different problem and $n\hbar\omega$ would allow zero energy.`,
    },
    faq: [
      { q: r`What is the potential-energy function?`, a: r`$V(x)=\tfrac12m\omega^2x^2$, where $m$ is the mass and $\omega$ is the classical angular frequency. It is the parabola of a spring.` },
      { q: r`What is the difference between the ground state and an excited state?`, a: r`The ground state is the state of lowest energy, $n=0$. Any state with $n\ge1$ has more energy and is called an excited state.` },
      { q: r`Why does the proof use $a$ and $a^\dagger$ instead of solving the differential equation?`, a: r`Solving $H\psi=E\psi$ directly needs special functions. The ladder operators give the whole list of energies with a few lines of algebra, and no calculus.` },
      { q: r`The question says "show that the energy is $\hbar\omega/2$, not zero". Is that a different claim from the spectrum?`, a: r`It is a part of it. The spectrum starts at $n=0$ with $E_0=\tfrac12\hbar\omega$. The last step then explains in words and with the uncertainty principle why zero was never possible.` },
    ],
    proof: {
      idea: r`Rewrite $H$ with two new operators $a$ and $a^\dagger$ that satisfy $[a,a^\dagger]=1$. Then $H=\hbar\omega(a^\dagger a+\tfrac12)$, so we only need the possible values of $N=a^\dagger a$. The operator $a$ lowers the value of $N$ by one, $N$ cannot be negative, so the lowering must stop at zero, and that forces the values $0,1,2,\dots$`,
      steps: [
        {
          title: "Write the Hamiltonian with ladder operators",
          text: r`The oscillator has the [[Harmonic Oscillator Potential|potential]] $V=\tfrac12m\omega^2x^2$, so $H=\dfrac{p^2}{2m}+\tfrac12m\omega^2x^2$ with $[x,p]=i\hbar$. Define $a=\sqrt{\tfrac{m\omega}{2\hbar}}\Big(x+\tfrac{ip}{m\omega}\Big)$ and $a^\dagger=\sqrt{\tfrac{m\omega}{2\hbar}}\Big(x-\tfrac{ip}{m\omega}\Big)$. Then $[a,a^\dagger]=\tfrac{m\omega}{2\hbar}\Big(-\tfrac{i}{m\omega}[x,p]+\tfrac{i}{m\omega}[p,x]\Big)=\tfrac{m\omega}{2\hbar}\cdot\tfrac{2\hbar}{m\omega}=1$. Multiplying out, $a^\dagger a=\tfrac{m\omega}{2\hbar}\Big(x^2+\tfrac{p^2}{m^2\omega^2}+\tfrac{i}{m\omega}[x,p]\Big)=\tfrac{H}{\hbar\omega}-\tfrac12$, so $H=\hbar\omega\left(a^\dagger a+\tfrac12\right)$.`,
          check: chk(r`The ladder operators satisfy $[a,a^\dagger]=1$. Which formula for the Hamiltonian follows from them and from $[x,p]=i\hbar$?`, r`$H=\hbar\omega\left(a^\dagger a+\tfrac12\right)$`, r`$H=\hbar\omega\,a^\dagger a$`, r`$H=\hbar\omega\left(a^\dagger a-\tfrac12\right)$`, r`Multiplying out $a^\dagger a$ leaves a leftover $-\tfrac12$ from the commutator $[x,p]$, so $H=\hbar\omega(a^\dagger a+\tfrac12)$.`, "Hamiltonian"),
        },
        {
          title: "The number operator can never be negative",
          text: r`Let $N=a^\dagger a$. For any state $\psi$, the [[Hermitian Adjoint|adjoint]] rule gives $\langle\psi|a^\dagger a|\psi\rangle=\langle a\psi|a\psi\rangle=\|a\psi\|^2\ge0$. So if $N\psi=\lambda\psi$ with $\psi$ normalized, then $\lambda=\|a\psi\|^2\ge0$, and $\lambda=0$ happens only when $a\psi=0$. Every eigenvalue of $N$ is at least $0$.`,
          check: chk(r`If $a^\dagger a\,\psi=\lambda\psi$ and $\psi$ is normalized, why is $\lambda\ge0$?`, r`Because $\lambda=\langle\psi|a^\dagger a|\psi\rangle=\|a\psi\|^2$, a squared length`, r`Because $a$ and $a^\dagger$ are both Hermitian`, r`Because $\hbar$ and $\omega$ are positive`, r`Moving $a^\dagger$ to the other slot turns the expectation into the length squared of $a\psi$, which cannot be negative.`, "Norm"),
        },
        {
          title: "Each lowering step reduces the value by one",
          text: r`From $[a,a^\dagger]=1$ we get $[N,a]=a^\dagger[a,a]+[a^\dagger,a]\,a=-a$ and $[N,a^\dagger]=a^\dagger[a,a^\dagger]=a^\dagger$. If $N\psi=\lambda\psi$, then $N(a\psi)=aN\psi-a\psi=(\lambda-1)\,a\psi$ and $N(a^\dagger\psi)=a^\dagger N\psi+a^\dagger\psi=(\lambda+1)\,a^\dagger\psi$. So $a\psi$ is an [[Eigenvector|eigenvector]] of $N$ with [[Eigenvalue|eigenvalue]] $\lambda-1$ (if it is not zero), and $a^\dagger\psi$ has eigenvalue $\lambda+1$. Moreover $\|a^\dagger\psi\|^2=\langle\psi|aa^\dagger|\psi\rangle=(\lambda+1)\|\psi\|^2>0$, so $a^\dagger\psi$ is never zero.`,
          check: chk(r`If $N\psi=\lambda\psi$ and $[N,a]=-a$, what is $N(a\psi)$?`, r`$(\lambda-1)\,a\psi$`, r`$(\lambda+1)\,a\psi$`, r`$\lambda\,a\psi$`, r`$N a\psi=(aN-a)\psi=(\lambda-1)a\psi$. This is why $a$ is called the lowering operator.`, "Commutator"),
        },
        {
          title: "The lowering must stop, so the value is a whole number",
          text: r`Start from an eigenvector $\psi$ with value $\lambda$ and apply $a$ again and again. As long as $a^k\psi\ne0$, it is an eigenvector with value $\lambda-k$, and by step 2 that value must be $\ge0$. So after at most $\lambda$ steps we reach a $k$ with $a^k\psi\ne0$ but $a^{k+1}\psi=0$. For that vector $0=\|a\,a^k\psi\|^2=(\lambda-k)\|a^k\psi\|^2$, which gives $\lambda=k$. Hence every eigenvalue of $N$ is a whole number $0,1,2,\dots$, and the vector $a^k\psi$ at the bottom satisfies $a|0\rangle=0$. Conversely, starting from this bottom state and applying $a^\dagger$ again and again never gives zero, so every whole number $n$ does occur.`,
          check: chk(r`Why can the eigenvalue $\lambda$ of $a^\dagger a$ not be a non-integer such as $2.5$?`, r`Lowering by $a$ would reach $0.5$ and then $-0.5$, which is negative and impossible`, r`Because $a$ raises the value by one each time`, r`Because $\lambda$ must be an even number`, r`The lowering chain must end exactly at zero. A non-integer value would step past zero into a negative number.`, "Eigenvalue"),
        },
        {
          title: "The energy levels and the ground and excited states",
          text: r`Since $H=\hbar\omega(N+\tfrac12)$ and $N$ takes the values $n=0,1,2,\dots$, the energies are $E_n=\left(n+\tfrac12\right)\hbar\omega$. The state with $n=0$, defined by $a|0\rangle=0$, is the [[Hamiltonian|ground state]], the state of lowest energy, and the states with $n\ge1$ are excited states. Neighbouring levels differ by $E_{n+1}-E_n=\hbar\omega$, so the levels are equally spaced by $\hbar\omega$.`,
          check: chk(r`What is the energy gap between neighbouring levels $E_{n+1}-E_n$?`, r`$\hbar\omega$, the same for every $n$`, r`$(2n+1)\hbar\omega$`, r`$\tfrac12\hbar\omega$`, r`Subtracting $E_n=(n+\tfrac12)\hbar\omega$ from $E_{n+1}=(n+\tfrac32)\hbar\omega$ leaves $\hbar\omega$.`, "Hamiltonian"),
        },
        {
          title: "Zero-point energy: why the energy can never be zero",
          text: r`The lowest energy is $E_0=\tfrac12\hbar\omega\ne0$, the [[Zero-Point Energy|zero-point energy]]. Here is the reason in one line. For any state, $\langle H\rangle=\dfrac{\langle p^2\rangle}{2m}+\tfrac12m\omega^2\langle x^2\rangle\ \ge\ \dfrac{(\Delta p)^2}{2m}+\tfrac12m\omega^2(\Delta x)^2$, because $\langle x^2\rangle=(\Delta x)^2+\langle x\rangle^2$ and the same for $p$. For any two non-negative numbers $u,v$ we have $u+v\ge2\sqrt{uv}$, so $\langle H\rangle\ge2\sqrt{\tfrac{(\Delta p)^2}{2m}\cdot\tfrac12m\omega^2(\Delta x)^2}=\omega\,\Delta x\,\Delta p\ge\tfrac12\hbar\omega$ by the [[Heisenberg Uncertainty Principle|uncertainty principle]] $\Delta x\Delta p\ge\hbar/2$. So no state, in particular no energy eigenstate, can have energy below $\tfrac12\hbar\omega$. Zero energy would need $\Delta x=\Delta p=0$, which is impossible.`,
          check: chk(r`Why can a quantum oscillator never have energy exactly $0$?`, r`Zero energy needs $\Delta x=0$ and $\Delta p=0$ together, which $\Delta x\Delta p\ge\hbar/2$ forbids`, r`Because $a|0\rangle=0$ means the ground state does not exist`, r`Because the potential $\tfrac12m\omega^2x^2$ is never zero`, r`At rest at the bottom the particle would have a sharp position and a sharp momentum at once, which the uncertainty principle forbids.`, "Heisenberg Uncertainty Principle"),
        },
      ],
      conclusion: r`Writing $H=\hbar\omega(a^\dagger a+\tfrac12)$, the number $N=a^\dagger a$ is never negative, $a$ lowers it by one, and the lowering must stop at zero, so $N$ takes exactly the values $0,1,2,\dots$ Therefore $E_n=\left(n+\tfrac12\right)\hbar\omega$. The ground state ($n=0$) has $E_0=\tfrac12\hbar\omega>0$ because $\Delta x\,\Delta p\ge\hbar/2$ forbids zero energy, and the levels are equally spaced by $\hbar\omega$. $\blacksquare$`,
      example: {
        text: r`Take $\hbar\omega=1$. Suppose the value were $\lambda=1.5$. Then $a\psi$ has $1/2$, $a^2\psi$ would have $-1/2$, which is impossible since $\lambda\ge0$. With $\lambda=2$ instead, $a\psi$ has $1$, $a^2\psi$ has $0$ and $a^3\psi=0$. So the allowed values are $0,1,2,\dots$ and the energies are $\tfrac12,\tfrac32,\tfrac52,\dots$ in units of $\hbar\omega$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is the potential-energy function of the harmonic oscillator?`, a: r`$V(x)=\tfrac12m\omega^2x^2=\tfrac12kx^2$ with $k=m\omega^2$. See [[Harmonic Oscillator Potential|harmonic oscillator potential]].` },
        { q: r`What does "ground state" mean, and what does "excited state" mean?`, a: r`The ground state is the lowest-energy state ($n=0$). An excited state is any state with higher energy ($n\ge1$).` },
        { q: r`What is the zero-point energy?`, a: r`The energy $\tfrac12\hbar\omega$ of the ground state. It is energy that remains even at the lowest level, because the particle cannot be at rest. See [[Zero-Point Energy|zero-point energy]].` },
        { q: r`Do I have to prove the ladder-operator formulas in the exam?`, a: r`The question says "derive", so give the chain: $H=\hbar\omega(a^\dagger a+\tfrac12)$, $[N,a]=-a$, positivity of $N$, the chain must stop at zero. Then state $E_n$.` },
        { q: r`The printed question asks about the level spacing "and $\hbar\omega$". What is the answer?`, a: r`The spacing between neighbouring levels is exactly $\hbar\omega$, and the energies start at $\tfrac12\hbar\omega$, not at $0$.` },
      ],
      keywords: [
        "harmonic oscillator|quantum oscillator|spring", "potential energy|V of x|one half m omega squared x squared|parabolic potential", "energy eigenvalues|energy levels|allowed energies",
        "n plus one half h bar omega|(n+1/2) hbar omega", "equally spaced|level spacing|spacing h bar omega", "ground state|lowest state|n equals zero", "excited state|higher state",
        "zero-point energy|ground state energy|h bar omega over two", "ladder operators|raising and lowering operators", "annihilation operator|lowering operator|a operator", "creation operator|raising operator|a dagger operator",
        "commutator a a dagger equals one|commutation relation|[a,a†]=1", "number operator|a dagger a", "Hamiltonian in terms of a dagger a|H equals h bar omega a dagger a plus half", "norm is not negative|a dagger a is positive|length squared",
        "lowering stops at zero|chain must end|a on ground state is zero", "integer eigenvalues|whole numbers|n is a non-negative integer", "uncertainty principle|delta x delta p|Heisenberg", "energy can never be zero|never at rest|cannot be zero",
        "sharp position and sharp momentum|both at once", "sum of two squares inequality|u plus v at least two root uv",
      ],
      retryPrompt: r`Without looking, explain how the ladder operators give the energies $E_n=(n+\tfrac12)\hbar\omega$ and why the energy can never be zero. Then write the Hamiltonian, the commutator and the spectrum in the LaTeX box, and recall the key words.`,
      sourcePageText: r`1. Write the potential-energy function for the one-dimensional harmonic oscillator. State the energy eigenvalues of the quantum harmonic oscillator. What is meant by the ground state of the harmonic oscillator? What is meant by an excited state? 4. State the relation between the energy-level spacing of a harmonic oscillator and hbar omega. What is the zero-point energy of a harmonic oscillator? Why can the energy of a quantum harmonic oscillator never be zero? Part B 1. Explain the physical meaning of the energy eigenvalues of the quantum harmonic oscillator. 4. Show that the ground-state energy of the harmonic oscillator is hbar omega/2, not zero. Part C 1. Derive the energy eigenvalues of the one-dimensional quantum harmonic oscillator using ladder operators. Explain the significance of the zero-point energy.`,
    },
  }),

  problem({
    id: "ladder-number-states",
    name: "Ladder Operator Action on Number States",
    group: "operators",
    symbol: r`a|n\rangle=\sqrt n\,|n-1\rangle`,
    prerequisites: ["Oscillator Energy Levels from Ladder Operators", "Number Operator", "Commutator", "Hermitian Adjoint", "Position Operator", "Momentum Operator", "Eigenvalue", "Norm", "Hbar Symbol", "Mathematical Induction"],
    ross: { n: "A13-A16·C5", label: "Module 4 · Part A Q13–Q16 · Part C Q5", section: "A", page: 2 },
    title: "Ladder operators: definition, commutator, and their action on |n⟩",
    statement: r`Define the ladder operators $a$ and $a^\dagger$ and state the commutation relation between them. Express the position operator $\hat X$ and the momentum operator $\hat P$ in terms of $a$ and $a^\dagger$. State the action of the lowering operator and of the raising operator on $|n\rangle$. Write the Hamiltonian in terms of $a^\dagger a$. Explain how the ladder operators connect the different energy eigenstates and discuss their action on the ground state and on excited states.`,
    meaning: r`The operator $a$ takes the state $|n\rangle$ to the state one rung down, $a^\dagger$ takes it one rung up. The numbers in front, $\sqrt n$ and $\sqrt{n+1}$, are there to keep every state normalized.`,
    linkedFormal: r`With $a=\sqrt{\tfrac{m\omega}{2\hbar}}\big(\hat X+\tfrac{i\hat P}{m\omega}\big)$ and $a^\dagger=\sqrt{\tfrac{m\omega}{2\hbar}}\big(\hat X-\tfrac{i\hat P}{m\omega}\big)$ we have $[a,a^\dagger]=1$, $\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}\,(a+a^\dagger)$ and $\hat P=i\sqrt{\tfrac{m\hbar\omega}{2}}\,(a^\dagger-a)$. On the energy states $|n\rangle$: $a|n\rangle=\sqrt n\,|n-1\rangle$, $a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle$, $a|0\rangle=0$, and $H=\hbar\omega\left(a^\dagger a+\tfrac12\right)$ with [[Number Operator|number operator]] $a^\dagger a|n\rangle=n|n\rangle$.`,
    example: r`$a|3\rangle=\sqrt3\,|2\rangle$, $a^\dagger|3\rangle=\sqrt4\,|4\rangle=2|4\rangle$, and $a|0\rangle=0$. Applying $a^\dagger$ twice to $|0\rangle$ gives $a^\dagger a^\dagger|0\rangle=a^\dagger|1\rangle=\sqrt2\,|2\rangle$.`,
    pretest: {
      prompt: r`The state $|n\rangle$ is normalized. What number $c$ makes $a|n\rangle=c\,|n-1\rangle$ with $|n-1\rangle$ also normalized?`,
      options: [r`$c=\sqrt n$`, r`$c=n$`, r`$c=1$`],
      correct: 0,
      explanation: r`The length squared of $a|n\rangle$ is $\langle n|a^\dagger a|n\rangle=n$, so $|c|^2=n$ and $c=\sqrt n$. The value $c=1$ would not match that length.`,
    },
    check: {
      prompt: r`What is $a^\dagger|2\rangle$ written as a multiple of a normalized state?`,
      options: [r`$\sqrt3\,|3\rangle$`, r`$\sqrt2\,|3\rangle$`, r`$3\,|1\rangle$`],
      correct: 0,
      explanation: r`The raising rule is $a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle$, so with $n=2$ we get $\sqrt3\,|3\rangle$.`,
    },
    faq: [
      { q: r`Why are $a$ and $a^\dagger$ called ladder operators?`, a: r`Each one moves a state one rung on the ladder of energy levels: $a$ moves down by $\hbar\omega$, $a^\dagger$ moves up by $\hbar\omega$.` },
      { q: r`The printed question gives $P=i\sqrt{m\hbar\omega/2}\,(a-a^\dagger)$. Is that right?`, a: r`It has a sign typo. From $a-a^\dagger=\tfrac{i\hat P}{m\omega}\sqrt{\tfrac{2m\omega}{\hbar}}$ we get $\hat P=-i\sqrt{\tfrac{m\hbar\omega}{2}}(a-a^\dagger)=i\sqrt{\tfrac{m\hbar\omega}{2}}(a^\dagger-a)$. Both ways of writing it are equal, but $i(a-a^\dagger)$ has the wrong sign.` },
      { q: r`Is $a$ Hermitian?`, a: r`No. Its adjoint is $a^\dagger$, a different operator, so $a$ and $a^\dagger$ are not observables. Only the combinations $a+a^\dagger$ and $i(a^\dagger-a)$ are Hermitian.` },
      { q: r`What happens if I apply $a$ to the ground state?`, a: r`You get the zero vector, $a|0\rangle=0$. There is no rung below the lowest one.` },
    ],
    proof: {
      idea: r`The commutator $[a,a^\dagger]=1$ decides everything. It says $a^\dagger a$ and $aa^\dagger=a^\dagger a+1$ differ by one. Taking the length of $a|n\rangle$ and of $a^\dagger|n\rangle$ gives the factors $\sqrt n$ and $\sqrt{n+1}$.`,
      steps: [
        {
          title: "Define the ladder operators and find their commutator",
          text: r`Using the results of [[Oscillator Energy Levels from Ladder Operators|the energy-level problem]], put $a=\sqrt{\tfrac{m\omega}{2\hbar}}\big(\hat X+\tfrac{i\hat P}{m\omega}\big)$ and $a^\dagger=\sqrt{\tfrac{m\omega}{2\hbar}}\big(\hat X-\tfrac{i\hat P}{m\omega}\big)$. Since $[\hat X,\hat P]=i\hbar$, the [[Commutator|commutator]] is $[a,a^\dagger]=\tfrac{m\omega}{2\hbar}\cdot\tfrac{2\hbar}{m\omega}=1$.`,
          check: chk(r`Which commutation relation do $a$ and $a^\dagger$ satisfy?`, r`$[a,a^\dagger]=aa^\dagger-a^\dagger a=1$`, r`$[a,a^\dagger]=0$`, r`$[a,a^\dagger]=i\hbar$`, r`The relation $[\hat X,\hat P]=i\hbar$ turns into $[a,a^\dagger]=1$ after the normalising factor $\tfrac{m\omega}{2\hbar}$ is multiplied in.`, "Commutator"),
        },
        {
          title: "Invert: write position and momentum with the ladder operators",
          text: r`Adding the two definitions gives $a+a^\dagger=\sqrt{\tfrac{2m\omega}{\hbar}}\,\hat X$, so $\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}\,(a+a^\dagger)$. Subtracting gives $a-a^\dagger=\sqrt{\tfrac{m\omega}{2\hbar}}\cdot\tfrac{2i\hat P}{m\omega}=i\sqrt{\tfrac{2}{m\hbar\omega}}\,\hat P$, so $\hat P=-i\sqrt{\tfrac{m\hbar\omega}{2}}\,(a-a^\dagger)=i\sqrt{\tfrac{m\hbar\omega}{2}}\,(a^\dagger-a)$. Both $a+a^\dagger$ and $i(a^\dagger-a)$ are Hermitian, as position and momentum must be.`,
          check: chk(r`Which pair expresses $\hat X$ and $\hat P$ correctly through $a$ and $a^\dagger$?`, r`$\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}(a+a^\dagger)$ and $\hat P=i\sqrt{\tfrac{m\hbar\omega}{2}}(a^\dagger-a)$`, r`$\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}(a-a^\dagger)$ and $\hat P=i\sqrt{\tfrac{m\hbar\omega}{2}}(a+a^\dagger)$`, r`$\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}(a+a^\dagger)$ and $\hat P=i\sqrt{\tfrac{m\hbar\omega}{2}}(a-a^\dagger)$`, r`Position is the symmetric combination $a+a^\dagger$, momentum is the antisymmetric one, with $a^\dagger-a$ and a factor $i$ to make it Hermitian.`, "Position Operator"),
        },
        {
          title: "The number operator and the Hamiltonian",
          text: r`The [[Number Operator|number operator]] $N=a^\dagger a$ has the energy states as eigenvectors, $N|n\rangle=n|n\rangle$, and $H=\hbar\omega\left(a^\dagger a+\tfrac12\right)$ gives $H|n\rangle=\left(n+\tfrac12\right)\hbar\omega|n\rangle$. The commutator turns the other order into $aa^\dagger=a^\dagger a+1=N+1$.`,
          check: chk(r`If $N=a^\dagger a$ and $[a,a^\dagger]=1$, what is $aa^\dagger$ in terms of $N$?`, r`$N+1$`, r`$N-1$`, r`$N$`, r`$[a,a^\dagger]=aa^\dagger-a^\dagger a=1$ gives $aa^\dagger=a^\dagger a+1=N+1$.`, "Number Operator"),
        },
        {
          title: "Lowering: the factor is the square root of n",
          text: r`We showed that $a|n\rangle$ is an eigenvector of $N$ with value $n-1$ (or zero). So $a|n\rangle=c_n|n-1\rangle$ for some number $c_n$. Taking the squared length of both sides, $|c_n|^2=\langle n|a^\dagger a|n\rangle=n$. We choose the phase so that $c_n=\sqrt n$. In particular $a|0\rangle=0$, because $|c_0|^2=0$.`,
          check: chk(r`How is the constant $c_n$ in $a|n\rangle=c_n|n-1\rangle$ found?`, r`Take the squared length of both sides: $|c_n|^2=\langle n|a^\dagger a|n\rangle=n$`, r`Apply $a^\dagger$ and compare to $|n\rangle$ with no length argument`, r`Set $c_n=1$ by definition of a ladder`, r`Both $|n\rangle$ and $|n-1\rangle$ are normalized, so the size of $c_n$ is fixed by the squared length of $a|n\rangle$.`, "Norm"),
        },
        {
          title: "Raising: the factor is the square root of n plus one",
          text: r`Similarly $a^\dagger|n\rangle=d_n|n+1\rangle$ with $|d_n|^2=\langle n|aa^\dagger|n\rangle=\langle n|(N+1)|n\rangle=n+1$, so $d_n=\sqrt{n+1}$. Consequently $|n\rangle=\dfrac{(a^\dagger)^n}{\sqrt{n!}}|0\rangle$, by induction: if it holds for $n$, then $|n+1\rangle=\dfrac{a^\dagger|n\rangle}{\sqrt{n+1}}=\dfrac{(a^\dagger)^{n+1}}{\sqrt{(n+1)!}}|0\rangle$. So every excited state is reached from the ground state by raising, and every state can be lowered to the ground state, after which $a$ gives zero.`,
          check: chk(r`Why does $a^\dagger|n\rangle$ carry the factor $\sqrt{n+1}$ and not $\sqrt n$?`, r`Its squared length is $\langle n|aa^\dagger|n\rangle=\langle n|(N+1)|n\rangle=n+1$`, r`Because the Hamiltonian has a $+\tfrac12$`, r`Because $|n\rangle$ has $n+1$ nodes`, r`The order $aa^\dagger$ is $N+1$, which gives $n+1$ for $|n\rangle$.`, "Mathematical Induction"),
        },
      ],
      conclusion: r`The commutator $[a,a^\dagger]=1$ gives $aa^\dagger=a^\dagger a+1$. Then $\|a|n\rangle\|^2=n$ and $\|a^\dagger|n\rangle\|^2=n+1$, so $a|n\rangle=\sqrt n\,|n-1\rangle$ and $a^\dagger|n\rangle=\sqrt{n+1}\,|n+1\rangle$, with $\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}(a+a^\dagger)$, $\hat P=i\sqrt{\tfrac{m\hbar\omega}{2}}(a^\dagger-a)$ and $H=\hbar\omega(a^\dagger a+\tfrac12)$. The ladder operators connect each state to its neighbours, and $a|0\rangle=0$ stops the ladder at the bottom. $\blacksquare$`,
      example: {
        text: r`Take $|n\rangle=|2\rangle$. Then $a|2\rangle=\sqrt2|1\rangle$, so $\|a|2\rangle\|^2=2$, which equals $\langle2|a^\dagger a|2\rangle=2$. And $a^\dagger|2\rangle=\sqrt3|3\rangle$ has squared length $3=\langle2|aa^\dagger|2\rangle=\langle2|(N+1)|2\rangle=3$. Applying $a$ three times to $|2\rangle$: $a|2\rangle=\sqrt2|1\rangle$, $a^2|2\rangle=\sqrt2\cdot1\,|0\rangle$, $a^3|2\rangle=0$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is the definition of the ladder operators?`, a: r`$a=\sqrt{\tfrac{m\omega}{2\hbar}}(\hat X+\tfrac{i\hat P}{m\omega})$ and $a^\dagger$ is its adjoint, with $\hat X$ replaced as given. They satisfy $[a,a^\dagger]=1$.` },
        { q: r`What is the commutation relation to state?`, a: r`$[a,a^\dagger]=1$, equivalently $aa^\dagger-a^\dagger a=1$.` },
        { q: r`How do I write $\hat X$ and $\hat P$?`, a: r`$\hat X=\sqrt{\tfrac{\hbar}{2m\omega}}(a+a^\dagger)$ and $\hat P=i\sqrt{\tfrac{m\hbar\omega}{2}}(a^\dagger-a)$. The printed sign in the question is a typo.` },
        { q: r`Why are there square roots in $a|n\rangle=\sqrt n|n-1\rangle$?`, a: r`They keep the states normalized: the squared length of $a|n\rangle$ is $n$, so the factor must be $\sqrt n$.` },
        { q: r`How do the operators "connect the different energy eigenstates"?`, a: r`Each application of $a$ moves down one level and each application of $a^\dagger$ moves up one level. Starting from $|0\rangle$ and raising repeatedly reaches every state. See [[Number Operator|number operator]].` },
      ],
      keywords: [
        "ladder operators|raising and lowering|step operators", "annihilation operator|lowering operator|a", "creation operator|raising operator|a dagger", "commutator a a dagger equals one|[a,a†]=1|commutation relation",
        "a on n gives root n times n minus one|a|n> = sqrt(n)|n-1>|lowering rule", "a dagger on n gives root n plus one times n plus one|a†|n> = sqrt(n+1)|n+1>|raising rule", "normalization factor|square root factors|keeps the state normalized",
        "a on the ground state is zero|a|0>=0|bottom of the ladder", "number operator|N equals a dagger a|a dagger a", "Hamiltonian H equals h bar omega a dagger a plus half|H=ħω(a†a+1/2)",
        "x in terms of a and a dagger|x equals root h bar over two m omega times a plus a dagger", "p in terms of a and a dagger|p equals i root m h bar omega over two times a dagger minus a", "sign typo in P|printed sign",
        "a and a dagger are not Hermitian|adjoint of a is a dagger", "squared length|norm of a on n", "a a dagger equals N plus one", "n factorial|state from a dagger to the n on ground state", "induction|build all states from the ground state",
      ],
      retryPrompt: r`Without looking, define $a$ and $a^\dagger$, state $[a,a^\dagger]$, write $\hat X$ and $\hat P$ through them, and explain why $a|n\rangle=\sqrt n|n-1\rangle$ and $a^\dagger|n\rangle=\sqrt{n+1}|n+1\rangle$. Put the formulas in the LaTeX box and recall the key words.`,
      sourcePageText: r`13. Define the ladder operators a and a dagger. State the commutation relation between a and a dagger. 14. Express the position operator X in terms of a and a dagger. Express the momentum operator P in terms of a and a dagger. 15. State the action of the lowering operator and the raising operator on |n>. 16. Write the Hamiltonian of the harmonic oscillator in terms of a dagger a. Part C 5. Explain how ladder operators connect the different energy eigenstates of the harmonic oscillator. Discuss their action on the ground state and excited states.`,
    },
  }),

  problem({
    id: "oscillator-ground-state",
    name: "Oscillator Ground State from the Lowering Condition",
    group: "waves",
    symbol: r`\psi_0(x)=\left(\tfrac{m\omega}{\pi\hbar}\right)^{1/4}e^{-m\omega x^2/2\hbar}`,
    prerequisites: ["Ladder Operator Action on Number States", "Gaussian Integral", "Hamiltonian", "Time-Independent Schrödinger Equation", "Normalization", "Momentum Operator", "Position Operator", "Derivative", "Exponential Function", "Integral", "Wave Function"],
    ross: { n: "A2·A5·A6", label: "Module 4 · Part A Q2, Q5, Q6", section: "A", page: 1 },
    title: "Ground-state wave function from the condition a|0⟩=0",
    statement: r`Write the normalized ground-state wave function of the harmonic oscillator. Starting from the requirement that the annihilation operator destroys the ground state, $\hat a|0\rangle=0$, write down the differential equation for $\psi_0(x)$ in position space and state its normalized solution. Derive the normalized ground-state wave function $\psi_0(x)=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}e^{-\left(\frac{m\omega}{2\hbar}\right)x^2}$ using $\hat a|0\rangle=0$.`,
    meaning: r`The ground state is the state the lowering operator kills. Writing that condition in position space gives a simple first-order equation whose solution is a bell-shaped Gaussian.`,
    linkedFormal: r`In position space $a=\sqrt{\tfrac{m\omega}{2\hbar}}\Big(x+\tfrac{\hbar}{m\omega}\tfrac{d}{dx}\Big)$. The condition $a\psi_0=0$ reads $\psi_0'(x)=-\tfrac{m\omega}{\hbar}\,x\,\psi_0(x)$, whose solution is $\psi_0(x)=C\,e^{-m\omega x^2/2\hbar}$. [[Normalization|Normalizing]] with the [[Gaussian Integral|Gaussian integral]] $\int_{-\infty}^{\infty}e^{-\alpha x^2}dx=\sqrt{\pi/\alpha}$ gives $C=\left(\tfrac{m\omega}{\pi\hbar}\right)^{1/4}$. This function satisfies $H\psi_0=\tfrac12\hbar\omega\,\psi_0$.`,
    example: r`Take $m\omega/\hbar=1$. Then $\psi_0(x)=\pi^{-1/4}e^{-x^2/2}$. At $x=0$ it equals $\pi^{-1/4}\approx0.751$, and at $x=1$ it equals $0.751\cdot e^{-1/2}\approx0.456$.`,
    pretest: {
      prompt: r`Which function $y(x)$ solves $y'=-x\,y$?`,
      options: [r`$y=C\,e^{-x^2/2}$`, r`$y=C\,e^{x^2/2}$`, r`$y=C\,e^{-x}$`],
      correct: 0,
      explanation: r`Differentiating $e^{-x^2/2}$ gives $-x\,e^{-x^2/2}$, as required. The function $e^{x^2/2}$ has derivative $+x\,e^{x^2/2}$ and $e^{-x}$ has derivative $-e^{-x}$.`,
    },
    check: {
      prompt: r`The ground state is defined by $a\psi_0=0$. Which equation does this give in position space?`,
      options: [r`$\psi_0'=-\tfrac{m\omega}{\hbar}\,x\,\psi_0$`, r`$\psi_0'=+\tfrac{m\omega}{\hbar}\,x\,\psi_0$`, r`$\psi_0''=-\tfrac{m\omega}{\hbar}\,\psi_0$`],
      correct: 0,
      explanation: r`$a\propto x+\tfrac{\hbar}{m\omega}\tfrac{d}{dx}$, and setting this to zero moves $x\psi_0$ across with a minus sign. The result is first order, not second order.`,
    },
    faq: [
      { q: r`Why is the ground state found from a first-order equation?`, a: r`Because $a$ contains only one derivative. Asking $a\psi_0=0$ is much simpler than solving the second-order Schrödinger equation.` },
      { q: r`How do I get $p$ as a derivative?`, a: r`In position space $\hat P=-i\hbar\,\dfrac{d}{dx}$, so $\tfrac{i\hat P}{m\omega}=\tfrac{\hbar}{m\omega}\dfrac{d}{dx}$.` },
      { q: r`Is the ground state unique?`, a: r`Yes. The first-order equation has a one-parameter family of solutions $C\,e^{-m\omega x^2/2\hbar}$, and all of them are the same state up to the number $C$, which normalization fixes up to a phase.` },
      { q: r`Why is $e^{+m\omega x^2/2\hbar}$ not allowed?`, a: r`That solution grows at large $|x|$, so it cannot be normalized. Here the sign is already fixed by the equation, which gives the decaying one.` },
    ],
    proof: {
      idea: r`The condition $a\psi_0=0$ is a first-order differential equation. Its solution is a Gaussian. Then the constant in front is fixed by the requirement that the total probability is $1$.`,
      steps: [
        {
          title: "Write the lowering operator as a differential operator",
          text: r`Use $\hat P=-i\hbar\,\dfrac{d}{dx}$. Then $\dfrac{i\hat P}{m\omega}=\dfrac{i(-i\hbar)}{m\omega}\dfrac{d}{dx}=\dfrac{\hbar}{m\omega}\dfrac{d}{dx}$, so in the position representation $a=\sqrt{\tfrac{m\omega}{2\hbar}}\Big(x+\tfrac{\hbar}{m\omega}\dfrac{d}{dx}\Big)$, as defined in [[Ladder Operator Action on Number States|the ladder-operator problem]].`,
          check: chk(r`In position space, which operator is $\dfrac{i\hat P}{m\omega}$?`, r`$\dfrac{\hbar}{m\omega}\dfrac{d}{dx}$`, r`$-\dfrac{\hbar}{m\omega}\dfrac{d}{dx}$`, r`$\dfrac{i\hbar}{m\omega}\dfrac{d}{dx}$`, r`With $\hat P=-i\hbar\,d/dx$ the product $i\cdot(-i\hbar)=\hbar$, so the factors of $i$ cancel.`, "Momentum Operator"),
        },
        {
          title: "Turn the ground-state condition into an equation",
          text: r`The ground state obeys $a\psi_0=0$, which means $\Big(x+\tfrac{\hbar}{m\omega}\tfrac{d}{dx}\Big)\psi_0=0$, that is $\dfrac{d\psi_0}{dx}=-\dfrac{m\omega}{\hbar}\,x\,\psi_0$. This is a first-order equation: the rate of change of $\psi_0$ is proportional to $\psi_0$ itself, with a factor that is $-x$ times a constant.`,
          check: chk(r`Which differential equation follows from $\Big(x+\tfrac{\hbar}{m\omega}\tfrac{d}{dx}\Big)\psi_0=0$?`, r`$\dfrac{d\psi_0}{dx}=-\dfrac{m\omega}{\hbar}\,x\,\psi_0$`, r`$\dfrac{d\psi_0}{dx}=+\dfrac{m\omega}{\hbar}\,x\,\psi_0$`, r`$\dfrac{d^2\psi_0}{dx^2}=-\dfrac{m\omega}{\hbar}\,\psi_0$`, r`Move $x\psi_0$ to the other side and multiply by $\tfrac{m\omega}{\hbar}$. The equation is first order.`, "Derivative"),
        },
        {
          title: "Solve it",
          text: r`Divide by $\psi_0$ and integrate: $\dfrac{d\psi_0}{\psi_0}=-\dfrac{m\omega}{\hbar}\,x\,dx$ gives $\ln\psi_0=-\dfrac{m\omega}{2\hbar}x^2+\text{constant}$, so $\psi_0(x)=C\,e^{-m\omega x^2/2\hbar}$. This is the only solution up to the constant $C$, and it decays at large $|x|$, so it can be normalized.`,
          check: chk(r`After integrating $\dfrac{d\psi_0}{\psi_0}=-\dfrac{m\omega}{\hbar}x\,dx$, what is $\psi_0(x)$?`, r`$C\,e^{-m\omega x^2/2\hbar}$`, r`$C\,e^{-m\omega x/\hbar}$`, r`$C\,e^{+m\omega x^2/2\hbar}$`, r`The integral of $x\,dx$ is $x^2/2$, which gives a Gaussian that decays on both sides.`, "Exponential Function"),
        },
        {
          title: "Normalize",
          text: r`We need $\int_{-\infty}^{\infty}|\psi_0|^2dx=1$. With $\alpha=\dfrac{m\omega}{\hbar}$ we get $|C|^2\int e^{-\alpha x^2}dx=|C|^2\sqrt{\dfrac{\pi}{\alpha}}=|C|^2\sqrt{\dfrac{\pi\hbar}{m\omega}}=1$. Choosing $C$ real and positive gives $C=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}$, so $\psi_0(x)=\left(\dfrac{m\omega}{\pi\hbar}\right)^{1/4}e^{-m\omega x^2/2\hbar}$.`,
          check: chk(r`Which value of $\int_{-\infty}^{\infty}e^{-\alpha x^2}dx$ is used to fix the constant $C$?`, r`$\sqrt{\pi/\alpha}$`, r`$\pi/\alpha$`, r`$\sqrt{\alpha/\pi}$`, r`The standard [[Gaussian Integral|Gaussian integral]] is $\sqrt{\pi/\alpha}$. Then $|C|^2=\sqrt{\alpha/\pi}$, so $C=(\alpha/\pi)^{1/4}$.`, "Gaussian Integral"),
        },
        {
          title: "Check that its energy is the zero-point energy",
          text: r`From $\psi_0'=-\alpha x\psi_0$ with $\alpha=m\omega/\hbar$ we get $\psi_0''=(\alpha^2x^2-\alpha)\psi_0$. Then $H\psi_0=-\dfrac{\hbar^2}{2m}\psi_0''+\tfrac12m\omega^2x^2\psi_0=\Big(-\tfrac12m\omega^2x^2+\tfrac12\hbar\omega+\tfrac12m\omega^2x^2\Big)\psi_0=\tfrac12\hbar\omega\,\psi_0$. So $\psi_0$ is an eigenfunction of the [[Hamiltonian|Hamiltonian]] with the zero-point energy $E_0=\tfrac12\hbar\omega$, as the ladder method predicts.`,
          check: chk(r`Using $\psi_0''=(\alpha^2x^2-\alpha)\psi_0$, what is the eigenvalue of $H$ on $\psi_0$?`, r`$\tfrac12\hbar\omega$`, r`$\hbar\omega$`, r`$0$`, r`The $x^2$ terms cancel and only $-\dfrac{\hbar^2}{2m}\cdot(-\alpha)=\tfrac12\hbar\omega$ is left.`, "Time-Independent Schrödinger Equation"),
        },
      ],
      conclusion: r`The condition $a|0\rangle=0$ becomes $\psi_0'=-\tfrac{m\omega}{\hbar}x\,\psi_0$. Its solution is $C\,e^{-m\omega x^2/2\hbar}$, and normalization fixes $C=(m\omega/\pi\hbar)^{1/4}$. Hence $\psi_0(x)=\left(\tfrac{m\omega}{\pi\hbar}\right)^{1/4}e^{-m\omega x^2/2\hbar}$, which satisfies $H\psi_0=\tfrac12\hbar\omega\,\psi_0$. $\blacksquare$`,
      example: {
        text: r`With $m\omega/\hbar=1$: $\psi_0=\pi^{-1/4}e^{-x^2/2}$, and $\int e^{-x^2}dx=\sqrt\pi$ gives $\int|\psi_0|^2dx=\pi^{-1/2}\sqrt\pi=1$. Also $\psi_0'=-x\psi_0$: at $x=1$ the slope is $-0.456$, which equals $-1\cdot\psi_0(1)$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is the normalized ground-state wave function?`, a: r`$\psi_0(x)=\left(\tfrac{m\omega}{\pi\hbar}\right)^{1/4}e^{-m\omega x^2/2\hbar}$, a Gaussian centred at $x=0$.` },
        { q: r`What differential equation does $a|0\rangle=0$ give?`, a: r`$\Big(x+\tfrac{\hbar}{m\omega}\tfrac{d}{dx}\Big)\psi_0=0$, i.e. $\psi_0'=-\tfrac{m\omega}{\hbar}x\,\psi_0$.` },
        { q: r`How do I normalize it?`, a: r`Use $\int_{-\infty}^{\infty}e^{-\alpha x^2}dx=\sqrt{\pi/\alpha}$ with $\alpha=m\omega/\hbar$ and set the total to $1$. See [[Gaussian Integral|Gaussian integral]].` },
        { q: r`Why not solve $H\psi=E\psi$ directly?`, a: r`That second-order equation also works, but it needs a trial solution. The first-order condition $a\psi_0=0$ finds the solution immediately.` },
        { q: r`Do I need to check that $E_0=\tfrac12\hbar\omega$?`, a: r`It is a nice check and takes two lines: differentiate twice and substitute into $H$.` },
      ],
      keywords: [
        "ground state wave function|psi zero|lowest state wave function", "annihilation operator on the ground state is zero|a psi zero equals zero|a|0>=0", "position representation|x space|differential operator",
        "p equals minus i h bar d dx|momentum operator|derivative", "first-order differential equation|first order equation", "d psi dx equals minus m omega over h bar x psi|psi prime equals minus alpha x psi",
        "separate variables|integrate both sides|natural logarithm", "gaussian|bell curve|e to the minus m omega x squared over two h bar", "decays at large x|can be normalized|square integrable",
        "normalization|total probability one|integral of psi squared equals one", "gaussian integral|root pi over alpha", "normalization constant|m omega over pi h bar to the one quarter|C", "even function|symmetric about zero",
        "H psi zero equals h bar omega over two psi zero|energy one half h bar omega", "zero-point energy", "unique up to a constant|only one solution",
      ],
      retryPrompt: r`Without looking, explain how $a|0\rangle=0$ gives the ground-state wave function. Write the differential equation, its solution and the normalization constant in the LaTeX box, and recall the key words.`,
      sourcePageText: r`2. Write the normalized ground-state wave function of the harmonic oscillator. Write the normalized first-excited-state wave function in position space. 5. Starting from the requirement that the annihilation operator destroys the ground state (a|0> = 0), write down the differential equation for psi_0(x) in position space and state its normalized solution. 6. Derive the normalized ground state spatial wavefunction psi_0(x) = (m omega / pi hbar)^(1/4) e^(-(m omega / 2 hbar) x^2) using a|0> = 0. Apply the creation operator a dagger to psi_0(x) to obtain the normalized spatial wavefunction psi_1(x) for the first excited state.`,
    },
  }),

  problem({
    id: "oscillator-first-excited",
    name: "First Excited State of the Oscillator",
    group: "waves",
    symbol: r`\psi_1(x)\propto x\,e^{-m\omega x^2/2\hbar}`,
    prerequisites: ["Oscillator Ground State from the Lowering Condition", "Ladder Operator Action on Number States", "Parity of a Function", "Node of a Wave Function", "Orthogonality", "Probability Density", "Normalization", "Gaussian Integral", "Derivative", "Integral", "Wave Function"],
    ross: { n: "A2·A3·A6·B2·B3·B5·C2", label: "Module 4 · Part A Q2, Q3, Q6 · Part B Q2, Q3, Q5 · Part C Q2", section: "A", page: 1 },
    title: "The first excited state: wave function, parity, nodes, orthogonality and probability density",
    statement: r`Write the normalized first-excited-state wave function in position space and obtain it by applying the creation operator $\hat a^\dagger$ to $\psi_0(x)$. State the parity of the ground state and of the first excited state, and the number of nodes of each. Sketch their qualitative forms and indicate the nodes. Show that $\psi_1$ is orthogonal to $\psi_0$. Compare the probability densities of the ground state and the first excited state, and explain their parity and node structure.`,
    meaning: r`The first excited state is the ground-state Gaussian multiplied by $x$. It is odd, it vanishes at the centre, it has two humps, and it is automatically orthogonal to the even ground state.`,
    linkedFormal: r`With $\alpha=m\omega/\hbar$, $\psi_0=(\alpha/\pi)^{1/4}e^{-\alpha x^2/2}$ and $\psi_1=a^\dagger\psi_0=\left(\tfrac{\alpha}{\pi}\right)^{1/4}\sqrt{2\alpha}\;x\,e^{-\alpha x^2/2}$. The [[Parity of a Function|parity]] of $\psi_0$ is even ($+$) and of $\psi_1$ is odd ($-$). The ground state has no [[Node of a Wave Function|nodes]] and the first excited state has one, at $x=0$. Also $\int\psi_0\psi_1\,dx=0$, and $|\psi_1|^2$ has its two maxima at $x=\pm1/\sqrt\alpha=\pm\sqrt{\hbar/m\omega}$.`,
    example: r`With $\alpha=1$: $\psi_0=\pi^{-1/4}e^{-x^2/2}$ and $\psi_1=\pi^{-1/4}\sqrt2\,x\,e^{-x^2/2}$. At $x=1$, $\psi_1=0.751\cdot1.414\cdot0.607\approx0.644$, at $x=-1$ it is $-0.644$, and at $x=0$ it is $0$.`,
    pretest: {
      prompt: r`The function $f(x)=x\,e^{-x^2}$ is integrated over the whole real line, from $-\infty$ to $\infty$. What is the value of the integral?`,
      options: [r`$0$`, r`$\sqrt\pi/2$`, r`$1$`],
      correct: 0,
      explanation: r`$f(-x)=-f(x)$, so the area to the left of $0$ exactly cancels the area to the right. An odd function has zero integral over a symmetric range.`,
    },
    check: {
      prompt: r`Which statement correctly describes the parity and nodes of $\psi_0$ and $\psi_1$?`,
      options: [r`$\psi_0$ is even with no nodes, $\psi_1$ is odd with one node at $x=0$`, r`$\psi_0$ is odd with one node, $\psi_1$ is even with no nodes`, r`Both are even, and $\psi_1$ has two nodes`],
      correct: 0,
      explanation: r`The state $\psi_n$ has parity $(-1)^n$ and exactly $n$ nodes.`,
    },
    faq: [
      { q: r`Why is the creation operator the quickest way to $\psi_1$?`, a: r`Because $a^\dagger|0\rangle=\sqrt1\,|1\rangle=|1\rangle$ exactly, with no extra constant, so $\psi_1=a^\dagger\psi_0$ is already normalized.` },
      { q: r`What is a node?`, a: r`A point where the wave function is zero and changes sign. The end points at $\pm\infty$ are not counted. See [[Node of a Wave Function|node]].` },
      { q: r`What does parity mean?`, a: r`Parity tells whether $\psi(-x)=\psi(x)$ (even) or $\psi(-x)=-\psi(x)$ (odd). See [[Parity of a Function|parity]].` },
      { q: r`Is the probability of finding the particle at $x=0$ zero for $\psi_1$?`, a: r`Yes, the probability density $|\psi_1(0)|^2$ is zero. The particle is most likely found near $x=\pm\sqrt{\hbar/m\omega}$.` },
    ],
    proof: {
      idea: r`Apply $a^\dagger$ to the Gaussian: one of the two terms is $x\psi_0$ and the derivative of the Gaussian adds a second equal term. That gives $x\,e^{-\alpha x^2/2}$ times a constant. Parity and orthogonality follow from symmetry.`,
      steps: [
        {
          title: "Apply the creation operator to the ground state",
          text: r`In position space $a^\dagger=\sqrt{\tfrac{m\omega}{2\hbar}}\Big(x-\tfrac{\hbar}{m\omega}\tfrac{d}{dx}\Big)=\sqrt{\tfrac{\alpha}{2}}\Big(x-\tfrac1\alpha\tfrac{d}{dx}\Big)$. Since $\psi_0'=-\alpha x\psi_0$, we get $a^\dagger\psi_0=\sqrt{\tfrac\alpha2}\big(x\psi_0+x\psi_0\big)=\sqrt{2\alpha}\;x\,\psi_0$. Because $a^\dagger|0\rangle=\sqrt1\,|1\rangle$ (from [[Ladder Operator Action on Number States|the ladder-operator problem]]), $\psi_1=\sqrt{2\alpha}\,x\,\psi_0=\left(\tfrac{\alpha}{\pi}\right)^{1/4}\sqrt{2\alpha}\;x\,e^{-\alpha x^2/2}$.`,
          check: chk(r`What is $a^\dagger\psi_0$ in position space, using $\psi_0'=-\alpha x\psi_0$?`, r`$\sqrt{2\alpha}\;x\,\psi_0$`, r`$\sqrt{\alpha/2}\;x\,\psi_0$`, r`$0$`, r`Both terms $x\psi_0$ and $-\tfrac1\alpha\psi_0'=+x\psi_0$ add, giving $2x\psi_0$ times $\sqrt{\alpha/2}$.`, "Derivative"),
        },
        {
          title: "Check the normalization",
          text: r`$\int|\psi_1|^2dx=\sqrt{\tfrac\alpha\pi}\cdot2\alpha\int x^2e^{-\alpha x^2}dx$ and $\int_{-\infty}^{\infty}x^2e^{-\alpha x^2}dx=\dfrac{\sqrt\pi}{2\alpha^{3/2}}$ (use [[Gaussian Integral|the Gaussian integral]]). So the total is $\sqrt{\tfrac\alpha\pi}\cdot2\alpha\cdot\dfrac{\sqrt\pi}{2\alpha^{3/2}}=1$, confirming that $\psi_1$ is normalized.`,
          check: chk(r`Which value does $\int_{-\infty}^{\infty}x^2e^{-\alpha x^2}dx$ have?`, r`$\dfrac{\sqrt\pi}{2\alpha^{3/2}}$`, r`$\sqrt{\pi/\alpha}$`, r`$0$`, r`The integrand is even and positive, so it is not zero. It equals $-\tfrac{d}{d\alpha}\sqrt{\pi/\alpha}=\tfrac{\sqrt\pi}{2\alpha^{3/2}}$.`, "Normalization"),
        },
        {
          title: "Parity and nodes",
          text: r`$\psi_0(-x)=\psi_0(x)$, so $\psi_0$ is even (parity $+1$), and $\psi_1(-x)=-\psi_1(x)$, so $\psi_1$ is odd (parity $-1$). The factor $e^{-\alpha x^2/2}$ is never zero, so the zeros of $\psi_0$ and $\psi_1$ come only from the other factors: $\psi_0$ has none (no [[Node of a Wave Function|nodes]]) and $\psi_1\propto x$ vanishes only at $x=0$, one node.`,
          check: chk(r`Where are the nodes of $\psi_1(x)\propto x\,e^{-\alpha x^2/2}$?`, r`Only at $x=0$`, r`At $x=\pm1/\sqrt\alpha$`, r`There are none`, r`The exponential never vanishes, so the zero must come from the factor $x$.`, "Node of a Wave Function"),
        },
        {
          title: "Orthogonality",
          text: r`The product $\psi_0\psi_1=\sqrt{2\alpha}\,x\,\psi_0^2$ is odd because $\psi_0^2$ is even and $x$ is odd. The integral of an odd function over $(-\infty,\infty)$ is zero, so $\langle\psi_0|\psi_1\rangle=\int\psi_0\psi_1\,dx=0$. They are [[Orthogonality|orthogonal]], as they must be because they have different energies.`,
          check: chk(r`Why is $\int\psi_0\,\psi_1\,dx=0$?`, r`The integrand is an odd function, so the two halves cancel`, r`Because $\psi_0$ is zero`, r`Because both functions are normalized`, r`Even times odd is odd, and an odd function integrates to zero over a symmetric range.`, "Orthogonality"),
        },
        {
          title: "Compare the probability densities",
          text: r`$|\psi_0|^2=\sqrt{\tfrac\alpha\pi}\,e^{-\alpha x^2}$ is largest at $x=0$ with a single hump. $|\psi_1|^2=\sqrt{\tfrac\alpha\pi}\,2\alpha\,x^2e^{-\alpha x^2}$ is zero at $x=0$. Setting its derivative $2x-2\alpha x^3=0$ gives maxima at $x=\pm1/\sqrt\alpha=\pm\sqrt{\hbar/m\omega}$, so it has two humps with a gap at the centre. Both densities are even functions, even though $\psi_1$ is odd, because squaring removes the sign. Both are spread over a few units of $1/\sqrt\alpha$ and then die away.`,
          check: chk(r`Where does $|\psi_1(x)|^2\propto x^2e^{-\alpha x^2}$ have its two maxima?`, r`At $x=\pm1/\sqrt\alpha=\pm\sqrt{\hbar/m\omega}$`, r`At $x=0$`, r`At $x=\pm\sqrt{2/\alpha}$`, r`The derivative of $x^2e^{-\alpha x^2}$ is $2x(1-\alpha x^2)e^{-\alpha x^2}$, which is zero at $x=0$ (a minimum) and $x=\pm1/\sqrt\alpha$ (the maxima).`, "Probability Density"),
        },
      ],
      conclusion: r`Applying $a^\dagger$ to $\psi_0$ gives $\psi_1=\left(\tfrac{m\omega}{\pi\hbar}\right)^{1/4}\sqrt{\tfrac{2m\omega}{\hbar}}\;x\,e^{-m\omega x^2/2\hbar}$, which is normalized. The ground state is even with no nodes and the first excited state is odd with one node at $x=0$. Their product is odd, so the two states are orthogonal. $|\psi_0|^2$ has one peak at the centre, while $|\psi_1|^2$ vanishes at the centre and has two peaks at $x=\pm\sqrt{\hbar/m\omega}$. $\blacksquare$`,
      example: {
        text: r`With $\alpha=1$: $\psi_0(1)=\psi_0(-1)\approx0.456$, so $\psi_0(1)\psi_1(1)\approx0.456\cdot0.644$ and $\psi_0(-1)\psi_1(-1)\approx0.456\cdot(-0.644)$. These two values cancel in the integral, one pair at a time, which is why the total is $0$. For the densities, $|\psi_0(0)|^2\approx0.564$ but $|\psi_1(0)|^2=0$, while $|\psi_1(\pm1)|^2\approx0.415$ is larger than $|\psi_0(\pm1)|^2\approx0.208$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is the normalized first-excited-state wave function?`, a: r`$\psi_1(x)=\left(\tfrac{m\omega}{\pi\hbar}\right)^{1/4}\sqrt{\tfrac{2m\omega}{\hbar}}\;x\,e^{-m\omega x^2/2\hbar}$.` },
        { q: r`How many nodes do the ground and first excited states have?`, a: r`Zero and one. In general the $n$-th state has $n$ nodes.` },
        { q: r`What are their parities?`, a: r`The ground state is even and the first excited state is odd. In general the parity of $\psi_n$ is $(-1)^n$.` },
        { q: r`How do I show orthogonality?`, a: r`The integrand $\psi_0\psi_1$ is odd, so its integral over the whole line is zero. See [[Orthogonality|orthogonality]].` },
        { q: r`What should the sketch look like?`, a: r`$\psi_0$: a single bell curve. $\psi_1$: positive on one side, negative on the other, crossing zero at $x=0$.` },
      ],
      keywords: [
        "first excited state|psi one|n equals one", "creation operator on the ground state|a dagger psi zero|raising operator", "x times a gaussian|x e to the minus m omega x squared over two h bar|odd times gaussian",
        "normalization constant|square root of 2 m omega over h bar|normalized", "parity|even or odd|symmetry under x to minus x", "ground state is even|even parity|plus one", "first excited state is odd|odd parity|minus one",
        "nodes|zeros of the wave function|number of nodes", "ground state has no nodes|zero nodes", "one node at the origin|node at x equals zero", "orthogonal|orthogonality|inner product is zero",
        "odd integrand|integral of an odd function is zero|cancels", "probability density|absolute value squared|psi squared", "ground state density peaks at the centre|single hump", "first excited density vanishes at the origin|two humps",
        "maxima at plus or minus root h bar over m omega|x equals plus or minus 1 over root alpha", "sketch|qualitative shape", "different energies|distinct eigenvalues",
      ],
      retryPrompt: r`Without looking, obtain $\psi_1$ from $\psi_0$ with the creation operator, then explain its parity, nodes, orthogonality to $\psi_0$ and the shape of $|\psi_1|^2$ compared with $|\psi_0|^2$. Write the key formulas in the LaTeX box and recall the key words.`,
      sourcePageText: r`2. Write the normalized ground-state wave function of the harmonic oscillator. Write the normalized first-excited-state wave function in position space. 3. State the parity of the ground state and first excited state. How many nodes does the ground-state wave function have? How many nodes does the first-excited-state wave function have? 6. Apply the creation operator a dagger to psi_0(x) to obtain the normalized spatial wavefunction psi_1(x) for the first excited state. Part B 2. Write the ground-state and first-excited-state wave functions of the harmonic oscillator. Sketch their qualitative forms and indicate their nodes. Show that the first-excited-state wave function is orthogonal to the ground-state wave function. 3. Explain the parity properties of the ground state and first excited state. 5. Compare the probability densities of the ground state and first excited state. Part C 2. Discuss the ground state and first excited state of the harmonic oscillator in position space. Derive their normalized wave functions, sketch them, and explain their parity and node structure.`,
    },
  }),
];

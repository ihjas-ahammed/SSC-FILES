import { problem, chk } from "../dsl.js";
const r = String.raw;

// Part A: spaces and operators. Module 3, Section A Q1-Q9 and Section B Q1-Q2, merged into six unique problems.
export default [
  problem({
    id: "vector-space-axioms",
    name: "Linear Vector Space Axioms",
    group: "spaces",
    symbol: r`V,\ u+v,\ av`,
    prerequisites: ["Set", "Field", "Scalar", "Vector", "Axiom", "Closure", "Commutativity", "Associativity", "Zero Vector", "Additive Inverse", "Distributivity"],
    ross: { n: "A1", label: "Module 3 · Section A Q1", section: "A", page: 1 },
    title: "Linear vector space",
    statement: r`Define a linear vector space and list any three properties that its vectors must satisfy.`,
    meaning: r`A vector space is a set where you can add two vectors and stretch a vector by a number, and the usual rules of arithmetic keep working.`,
    linkedFormal: r`A [[Vector Space|vector space]] $V$ over a [[Field|field]] $F$ (here the real or complex numbers) is a [[Set|set]] with two operations, vector addition $u+v$ and multiplication by a [[Scalar|scalar]] $av$, that obey the [[Axiom|axioms]]: closure, commutativity $u+v=v+u$, associativity $(u+v)+w=u+(v+w)$, a zero vector with $v+0=v$, an additive inverse $v+(-v)=0$, and the distributive laws $a(u+v)=au+av$ and $(a+b)v=av+bv$, plus $(ab)v=a(bv)$ and $1v=v$.`,
    example: r`All pairs of complex numbers $(z_1,z_2)$, added entry by entry and multiplied by a number entry by entry, form a vector space. This is the space used for the spin of an electron.`,
    pretest: {
      prompt: r`Is the set of all positive real numbers a vector space under ordinary addition and ordinary multiplication by real scalars?`,
      options: [r`No: multiplying by the scalar $-1$ leaves the set`, r`Yes: adding two positive numbers gives a positive number`, r`Yes: it contains the number 1`],
      correct: 0,
      explanation: r`Closure must hold for every scalar. Multiplying $3$ by $-1$ gives $-3$, which is not positive, and the set also has no zero vector.`,
    },
    check: {
      prompt: r`Which pair of operations must a vector space come with?`,
      options: [r`Adding two vectors and multiplying a vector by a scalar`, r`Multiplying two vectors and dividing a vector by a vector`, r`Adding two scalars only`],
      correct: 0,
      explanation: r`Those are the two defining operations. Multiplying two vectors together is not part of the definition.`,
    },
    faq: [
      { q: r`What is a "vector" here? An arrow?`, a: r`Anything you can add and scale following the rules: arrows, columns of numbers, polynomials, or functions. In quantum mechanics a state of a system is a vector.` },
      { q: r`Why do we need a field of scalars?`, a: r`The scalars are the numbers we are allowed to multiply by. In quantum mechanics they are complex numbers, so that superpositions can carry phases.` },
      { q: r`The question says "list any three". Which three should I give?`, a: r`Any three of the axioms are fine. The safest are closure, commutativity of addition and the existence of a zero vector, and it is good to name the two operations first.` },
    ],
    proof: {
      idea: r`A vector space is not a special kind of object. It is any collection that has an addition and a scaling and obeys a short list of rules. So the answer is the list of those rules.`,
      steps: [
        {
          title: "Name the two operations",
          text: r`We start with a [[Set|set]] $V$ whose members we call vectors, and a [[Field|field]] $F$ of numbers called [[Scalar|scalars]] (real or complex). We need to be able to add two vectors, $u+v$, and to multiply a vector by a scalar, $av$.`,
          check: chk(r`Besides a set of vectors, what two operations must be defined to speak about a linear vector space?`, r`Vector addition and multiplication by a scalar`, r`Multiplying two vectors and dividing by a vector`, r`Taking the length and the angle of a vector`, r`Lengths and angles belong to inner-product spaces. A plain vector space only needs adding and scaling.`, "Scalar"),
        },
        {
          title: "Property 1: closure",
          text: r`If $u$ and $v$ are in $V$ and $a$ is a scalar, then both $u+v$ and $au$ must again be in $V$. This is [[Closure|closure]]. Without it, adding or scaling could throw us out of the space.`,
          check: chk(r`The vectors $u$ and $v$ are in $V$. What does closure require about $u+v$?`, r`$u+v$ is also in $V$`, r`$u+v$ equals zero`, r`$u+v$ is a scalar`, r`Closure means the result of an allowed operation stays inside the set.`, "Closure"),
        },
        {
          title: "Property 2: commutativity and associativity",
          text: r`The order of addition does not matter, $u+v=v+u$ ([[Commutativity|commutativity]]), and the grouping does not matter, $(u+v)+w=u+(v+w)$ ([[Associativity|associativity]]). These are the rules that let us write $u+v+w$ with no brackets.`,
          check: chk(r`Which equation says that adding three vectors does not depend on how they are grouped?`, r`$(u+v)+w=u+(v+w)$`, r`$u+v=v+u$`, r`$a(u+v)=au+av$`, r`The first equation is associativity. The second is commutativity and the third is the distributive law.`, "Associativity"),
        },
        {
          title: "Property 3: zero vector and opposites",
          text: r`There is a [[Zero Vector|zero vector]] $0$ in $V$ with $v+0=v$ for every $v$, and each $v$ has an [[Additive Inverse|additive inverse]] $-v$ in $V$ with $v+(-v)=0$. Scaling and adding also obey the [[Distributivity|distributive laws]], $a(u+v)=au+av$ and $(a+b)v=av+bv$.`,
          check: chk(r`Which equation describes the zero vector $0$?`, r`$v+0=v$ for every vector $v$`, r`$v+v=0$ for every vector $v$`, r`$0\cdot v=v$ for every vector $v$`, r`Adding the zero vector changes nothing. The other two statements are false in general.`, "Zero Vector"),
        },
        {
          title: "Test the list on an example",
          text: r`Take all pairs $(z_1,z_2)$ of complex numbers with $(z_1,z_2)+(w_1,w_2)=(z_1+w_1,\,z_2+w_2)$ and $a(z_1,z_2)=(az_1,az_2)$. The sum and the scaled pair are pairs again (closure). Order and grouping do not matter because they do not matter for each entry. The zero vector is $(0,0)$, and the inverse of $(z_1,z_2)$ is $(-z_1,-z_2)$. So this set is a vector space.`,
          check: chk(r`In the space of complex pairs $(z_1,z_2)$, what is the additive inverse of $(2,\,i)$?`, r`$(-2,\,-i)$`, r`$(\tfrac12,\,-i)$`, r`$(0,\,0)$`, r`The inverse is found entry by entry so that the sum is $(0,0)$: $2+(-2)=0$ and $i+(-i)=0$.`, "Additive Inverse"),
        },
      ],
      conclusion: r`A linear vector space is a set $V$ over a field of scalars with vector addition and scalar multiplication obeying the axioms. Three of them are closure under addition and scaling, commutativity and associativity of addition, and the existence of a zero vector with $v+0=v$. $\blacksquare$`,
      example: {
        text: r`Check the three chosen properties on $u=(1,i)$, $v=(2,3)$. Closure: $u+v=(3,\,3+i)$ is a pair of complex numbers. Commutativity: $v+u=(2+1,\,3+i)=(3,\,3+i)=u+v$. Zero vector: $u+(0,0)=(1,i)=u$.`,
      },
    },
    question: {
      faq: [
        { q: r`What exactly is the question asking me to define?`, a: r`A set with adding and scaling that obeys the standard rules. Say the two operations, then name the rules.` },
        { q: r`Do I need to list all the axioms?`, a: r`No. The question says any three. Give three clearly, with their equations.` },
        { q: r`Why is this the first question of a quantum mechanics module?`, a: r`Quantum states add together (superposition) and can be scaled by complex numbers. The state space therefore has to be a vector space.` },
        { q: r`What is the difference between a vector space and a Hilbert space?`, a: r`A Hilbert space is a vector space that also has an inner product and is complete. See [[Hilbert Space|Hilbert space]].` },
        { q: r`Is the set of all real functions a vector space?`, a: r`Yes. Adding two functions point by point gives a function, scaling a function gives a function, and the zero function is the zero vector.` },
      ],
      keywords: [
        "vector space|linear vector space", "set of vectors|set", "vector addition|addition", "scalar multiplication|multiply by a scalar|scaling",
        "field|real or complex numbers", "scalars", "closure|closed", "u plus v in V|sum stays in the space", "commutativity|commutative|u+v=v+u",
        "associativity|associative", "zero vector|null vector|additive identity", "v plus zero equals v|v+0=v", "additive inverse|negative vector|minus v",
        "distributive law|distributivity", "axioms|rules of the space", "complex numbers|complex scalars", "superposition", "example complex pairs|pairs of complex numbers",
      ],
      retryPrompt: r`Without looking, define a linear vector space in your own words, then list three properties its vectors obey, with an equation for each. Add the formal statement in the LaTeX box and recall the key words.`,
      sourcePageText: r`1. Define a linear vector space and list any three properties that its vectors must satisfy.`,
    },
  }),

  problem({
    id: "hilbert-inner-product",
    name: "Hilbert Space and the Scalar Product",
    group: "spaces",
    symbol: r`\langle\phi|\psi\rangle`,
    prerequisites: ["Vector Space", "Complex Conjugate", "Inner Product", "Conjugate Symmetry", "Positive Definiteness", "Norm", "Cauchy Sequence", "Complete Space", "Ket", "Bra", "Linear Combination", "Orthonormal Basis"],
    ross: { n: "A2-A5", label: "Module 3 · Section A Q2–Q5", section: "A", page: 1 },
    title: "Hilbert space, scalar product and the bra of a ket",
    statement: r`(Q2) What is a Hilbert space? Mention the role of the scalar product in defining a Hilbert space. (Q3) Define the scalar product of two state vectors $|\psi\rangle$ and $|\phi\rangle$. (Q4) State the conjugate symmetry property of the scalar product. (Q5) Write the bra corresponding to the ket $|\psi\rangle=a|\Phi_1\rangle+b|\Phi_2\rangle$.`,
    meaning: r`A Hilbert space is a vector space where you can measure overlaps, lengths and distances, and in which a sequence that keeps getting closer always lands on a vector of the space.`,
    linkedFormal: r`A [[Hilbert Space|Hilbert space]] is a [[Vector Space|vector space]] with a scalar product $\langle\phi|\psi\rangle$ that is complete for the length $\|\psi\|=\sqrt{\langle\psi|\psi\rangle}$. The [[Inner Product|scalar product]] is a complex number that is linear in the second slot, satisfies [[Conjugate Symmetry|conjugate symmetry]] $\langle\phi|\psi\rangle=\langle\psi|\phi\rangle^*$, and is [[Positive Definiteness|positive definite]]: $\langle\psi|\psi\rangle>0$ unless $\psi=0$. The [[Bra|bra]] of $|\psi\rangle=a|\Phi_1\rangle+b|\Phi_2\rangle$ is $\langle\psi|=a^*\langle\Phi_1|+b^*\langle\Phi_2|$.`,
    example: r`With $|\psi\rangle=(1,i)/\sqrt2$ and $|\phi\rangle=(1,0)$, $\langle\phi|\psi\rangle=1\cdot\tfrac1{\sqrt2}+0=\tfrac1{\sqrt2}$ while $\langle\psi|\phi\rangle=\tfrac1{\sqrt2}\cdot1=\tfrac1{\sqrt2}$, and $\langle\psi|\psi\rangle=\tfrac12(1\cdot1+(-i)(i))=1$.`,
    pretest: {
      prompt: r`The ket is $|\psi\rangle=i|1\rangle$ with $|1\rangle$ a normalized vector. What is $\langle\psi|\psi\rangle$?`,
      options: [r`$1$`, r`$-1$`, r`$i$`],
      correct: 0,
      explanation: r`The bra carries $i^*=-i$, so $\langle\psi|\psi\rangle=(-i)(i)\langle1|1\rangle=1$. Without the conjugate you would wrongly get $i\cdot i=-1$, a negative length squared.`,
    },
    check: {
      prompt: r`Which property must the scalar product have so that $\langle\psi|\psi\rangle$ can be a length squared?`,
      options: [r`It must be real and positive for every nonzero $\psi$`, r`It must be purely imaginary`, r`It must equal $\langle\phi|\phi\rangle$`],
      correct: 0,
      explanation: r`A length squared is a positive real number. That is the positive-definite property.`,
    },
    faq: [
      { q: r`Why a complex scalar product at all?`, a: r`Quantum states use complex coefficients. The conjugate inside the product makes $\langle\psi|\psi\rangle$ real and positive, so it can be a probability total.` },
      { q: r`What is the difference between a ket and a bra?`, a: r`A ket $|\psi\rangle$ is a vector. The bra $\langle\psi|$ is the machine that takes any ket $|\chi\rangle$ and gives the number $\langle\psi|\chi\rangle$.` },
      { q: r`What does "complete" mean?`, a: r`If vectors get closer and closer to each other, the limit they approach must also be a vector of the space. See [[Complete Space|complete space]].` },
    ],
    proof: {
      idea: r`The scalar product gives each pair of vectors a number. From it we get length (the norm), distance, and the meaning of "getting closer". Hilbert space is the vector space where this process never leaves the space. The bra of a ket follows from conjugate symmetry.`,
      steps: [
        {
          title: "What the scalar product must do",
          text: r`The [[Inner Product|scalar product]] $\langle\phi|\psi\rangle$ gives a complex number for every pair of vectors. It is linear in the second slot, $\langle\phi|a\psi_1+b\psi_2\rangle=a\langle\phi|\psi_1\rangle+b\langle\phi|\psi_2\rangle$. In an orthonormal basis it is $\langle\phi|\psi\rangle=\sum_n\phi_n^*\psi_n$, with the coefficients of $\phi$ conjugated.`,
          check: chk(r`In $\langle\phi|\psi\rangle=\sum_n\phi_n^*\psi_n$, which coefficients get complex-conjugated?`, r`The coefficients $\phi_n$ of the first vector`, r`The coefficients $\psi_n$ of the second vector`, r`Neither, nothing is conjugated`, r`The first slot belongs to the bra, and making a bra conjugates the coefficients of the ket.`, "Complex Conjugate"),
        },
        {
          title: "Conjugate symmetry",
          text: r`Swapping the two vectors conjugates the number: $\langle\phi|\psi\rangle=\langle\psi|\phi\rangle^*$. Putting $\phi=\psi$ gives $\langle\psi|\psi\rangle=\langle\psi|\psi\rangle^*$, so $\langle\psi|\psi\rangle$ is a real number. We also demand [[Positive Definiteness|positivity]]: $\langle\psi|\psi\rangle>0$ unless $\psi=0$. This is [[Conjugate Symmetry|conjugate symmetry]].`,
          check: chk(r`Put $\phi=\psi$ in $\langle\phi|\psi\rangle=\langle\psi|\phi\rangle^*$. What do you learn about $\langle\psi|\psi\rangle$?`, r`It equals its own complex conjugate, so it is real`, r`It is always equal to 1`, r`It is always purely imaginary`, r`A number equal to its conjugate has no imaginary part, so it is real.`, "Conjugate Symmetry"),
        },
        {
          title: "Length and completeness make a Hilbert space",
          text: r`The scalar product gives a length, $\|\psi\|=\sqrt{\langle\psi|\psi\rangle}$, and a distance $\|\psi-\phi\|$. A [[Cauchy Sequence|Cauchy sequence]] is a sequence of vectors whose distances to each other shrink to zero. If every such sequence has a limit that is again in the space, the space is a [[Complete Space|complete space]]. A vector space with a scalar product that is complete for this length is a [[Hilbert Space|Hilbert space]]. So the scalar product is the ingredient that gives lengths, distances and the idea of a limit.`,
          check: chk(r`What does the scalar product contribute to the definition of a Hilbert space?`, r`It defines length and distance, which let us ask for completeness`, r`It makes every vector have length one`, r`It removes the need for a vector space`, r`Completeness is a statement about distances, and the scalar product creates those distances.`, "Norm"),
        },
        {
          title: "The bra of a ket",
          text: r`The [[Bra|bra]] $\langle\psi|$ of $|\psi\rangle$ is defined so that $\langle\psi|\chi\rangle$ is the scalar product for every $|\chi\rangle$. By conjugate symmetry, $\langle\psi|\chi\rangle=\langle\chi|\psi\rangle^*=\big(a\langle\chi|\Phi_1\rangle+b\langle\chi|\Phi_2\rangle\big)^*=a^*\langle\chi|\Phi_1\rangle^*+b^*\langle\chi|\Phi_2\rangle^*=a^*\langle\Phi_1|\chi\rangle+b^*\langle\Phi_2|\chi\rangle$. Since this holds for every $|\chi\rangle$, $\langle\psi|=a^*\langle\Phi_1|+b^*\langle\Phi_2|$.`,
          check: chk(r`For $|\psi\rangle=a|\Phi_1\rangle+b|\Phi_2\rangle$, which expression is the bra $\langle\psi|$?`, r`$a^*\langle\Phi_1|+b^*\langle\Phi_2|$`, r`$a\langle\Phi_1|+b\langle\Phi_2|$`, r`$a^*\langle\Phi_2|+b^*\langle\Phi_1|$`, r`Taking the conjugate of the whole expression conjugates each scalar but keeps each vector with its own coefficient.`, "Bra"),
        },
        {
          title: "Why the conjugate cannot be left out",
          text: r`Take $a=1$, $b=i$ and orthonormal $|\Phi_1\rangle,|\Phi_2\rangle$. The correct bra gives $\langle\psi|\psi\rangle=a^*a+b^*b=1+1=2>0$. If we forgot the conjugates we would get $a^2+b^2=1+i^2=0$ for a nonzero vector, which breaks positivity.`,
          check: chk(r`With $a=1$, $b=i$ and orthonormal $\Phi_1,\Phi_2$, what is $\langle\psi|\psi\rangle$ using the correct bra?`, r`$2$`, r`$0$`, r`$1+i$`, r`$a^*a+b^*b=|a|^2+|b|^2=1+1=2$.`, "Orthonormal Basis"),
        },
      ],
      conclusion: r`A Hilbert space is a complex vector space with a scalar product $\langle\phi|\psi\rangle$ (linear in the second slot, conjugate symmetric $\langle\phi|\psi\rangle=\langle\psi|\phi\rangle^*$, positive definite) that is complete for the length $\sqrt{\langle\psi|\psi\rangle}$. The bra of $a|\Phi_1\rangle+b|\Phi_2\rangle$ is $a^*\langle\Phi_1|+b^*\langle\Phi_2|$. $\blacksquare$`,
      example: {
        text: r`Let $|\Phi_1\rangle=(1,0)$ and $|\Phi_2\rangle=(0,1)$, so $|\psi\rangle=(a,b)$ and the bra is the row $(a^*,\,b^*)$. For $|\chi\rangle=(c,d)$ the product is $\langle\psi|\chi\rangle=a^*c+b^*d$, which equals $\big(c^*a+d^*b\big)^*=\langle\chi|\psi\rangle^*$, exactly conjugate symmetry.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a Hilbert space in one sentence?`, a: r`A vector space with a scalar product, complete for the length that the scalar product defines.` },
        { q: r`Why do I have to mention the scalar product?`, a: r`Because it creates length and distance. Without it we cannot talk about completeness.` },
        { q: r`Which slot is conjugated in $\langle\phi|\psi\rangle$?`, a: r`The first, the bra side. In the other convention (used in some maths books) it is the second slot, so state which one you use.` },
        { q: r`How can I be sure the bra has conjugated coefficients?`, a: r`Use conjugate symmetry once: $\langle\psi|\chi\rangle=\langle\chi|\psi\rangle^*$ and conjugate the expansion of the ket. That is a short proof.` },
        { q: r`Is a Hilbert space always infinite-dimensional?`, a: r`No. $\mathbb C^2$ with the usual scalar product is a Hilbert space. Infinite-dimensional ones need the completeness check.` },
      ],
      keywords: [
        "Hilbert space", "vector space|linear space", "scalar product|inner product", "complex number", "linear in second slot|linearity",
        "conjugate symmetry|hermitian symmetry|swap conjugate", "positive definite|positivity|greater than zero", "norm|length", "distance",
        "complete|completeness", "Cauchy sequence", "limit stays in the space|limits exist", "bra", "ket", "conjugate coefficients|complex conjugate|conjugated",
        "a star|a*", "adjoint|dagger", "orthonormal basis|orthonormal",
      ],
      retryPrompt: r`Without looking, explain what a Hilbert space is and the role of the scalar product, state conjugate symmetry, and derive the bra of $a|\Phi_1\rangle+b|\Phi_2\rangle$. Write the key formulas in the LaTeX box and recall the key words.`,
      sourcePageText: r`2. What is a Hilbert space? Mention the role of the scalar product in defining a Hilbert space. 3. Define the scalar product of two state vectors |psi> and |phi>. 4. State the conjugate symmetry property of the scalar product. 5. Write the bra corresponding to the ket |psi> = a|Phi1> + b|Phi2>.`,
    },
  }),

  problem({
    id: "square-integrable-states",
    name: "Square-Integrable Wave Functions",
    group: "waves",
    symbol: r`\int|\psi|^2dx<\infty`,
    prerequisites: ["Wave Function", "Probability Density", "Integral", "Absolute Value", "Exponential Function", "Normalization", "Vector Space", "Inner Product", "Complete Space", "Almost Everywhere"],
    ross: { n: "B1-B2", label: "Module 3 · Section B Q1–Q2", section: "A", page: 2 },
    title: "Why square-integrable functions, and normalizing $Ae^{-a|x|}$",
    statement: r`(Q1) Explain why the set of square-integrable functions is suitable for representing wave functions. (Q2) Show that the function $\psi(x)=Ae^{-a|x|}$, $a>0$, is square-integrable. Find the normalization constant $A$.`,
    meaning: r`A wave function must have a finite total probability, so $\int|\psi|^2dx$ has to be a finite number. Functions with this property form a Hilbert space.`,
    linkedFormal: r`A function is [[Square-Integrable Function|square-integrable]] if $\int_{-\infty}^{\infty}|\psi(x)|^2dx<\infty$. The [[Probability Density|probability density]] is $|\psi|^2$, so finiteness lets us rescale $\psi$ to make the total probability 1 ([[Normalization|normalization]]). These functions (identified when they differ only [[Almost Everywhere|almost everywhere]]) form a [[Vector Space|vector space]] with the scalar product $\langle\phi|\psi\rangle=\int\phi^*\psi\,dx$, and this space $L^2$ is a [[Complete Space|complete]] Hilbert space.`,
    example: r`For $\psi(x)=Ae^{-a|x|}$ with $a>0$ the total is $\int|\psi|^2dx=|A|^2/a$, so $A=\sqrt a$ normalizes it. For $\psi(x)=1$ the total is infinite, so it cannot be a normalized state.`,
    pretest: {
      prompt: r`Is $\psi(x)=\dfrac{1}{1+x^2}$ square-integrable on the whole line?`,
      options: [r`Yes, because $|\psi|^2\le\dfrac1{1+x^2}$ and that integral is $\pi$`, r`No, because $\psi$ never reaches zero`, r`No, because it is not a polynomial`],
      correct: 0,
      explanation: r`$|\psi|^2=1/(1+x^2)^2\le1/(1+x^2)$, and $\int dx/(1+x^2)=\pi$, which is finite. A function can be square-integrable without ever being exactly zero.`,
    },
    check: {
      prompt: r`What does the integral $\int|\psi(x)|^2dx$ over all space represent for a wave function?`,
      options: [r`The total probability, which must be finite so it can be set to 1`, r`The average energy of the particle`, r`The momentum of the particle`],
      correct: 0,
      explanation: r`$|\psi|^2$ is the probability density, and integrating it over all positions gives the total probability.`,
    },
    faq: [
      { q: r`Why must the total be finite?`, a: r`A probability total can only be rescaled to 1 if it is a finite nonzero number. If it is infinite there is no constant that fixes it.` },
      { q: r`What about plane waves $e^{ikx}$?`, a: r`Their integral of $|\psi|^2$ is infinite, so they are not normalizable states. They are used as idealized (generalized) states and in wave packets.` },
      { q: r`Why do we say "almost everywhere"?`, a: r`Changing a function at a few points does not change the integral of $|\psi|^2$, so such functions describe the same state.` },
    ],
    proof: {
      idea: r`First we show that square-integrable functions behave like vectors with a scalar product, and that this space has no holes. Then we do the integral for $Ae^{-a|x|}$ and choose $A$ so that the total is 1.`,
      steps: [
        {
          title: "Total probability must be finite",
          text: r`The [[Probability Density|probability density]] of a state is $|\psi(x)|^2$. The total probability is $\int_{-\infty}^{\infty}|\psi|^2dx$. To describe a real particle this total must be a finite positive number, so that dividing $\psi$ by its square root gives total probability exactly 1 ([[Normalization|normalization]]). That is exactly the statement that $\psi$ is square-integrable.`,
          check: chk(r`Why must $\int|\psi|^2dx$ be finite for a wave function?`, r`So that $\psi$ can be rescaled so the total probability is 1`, r`So that the energy is zero`, r`So that $\psi$ is a polynomial`, r`If the total were infinite, no constant factor could turn it into 1.`, "Normalization"),
        },
        {
          title: "Sums and multiples stay square-integrable",
          text: r`For numbers $s,t$ we have $|s+t|^2\le2|s|^2+2|t|^2$, because $0\le(|s|-|t|)^2$ and $|s+t|\le|s|+|t|$. Hence if $\int|\phi|^2$ and $\int|\psi|^2$ are finite then $\int|\phi+\psi|^2\le2\int|\phi|^2+2\int|\psi|^2$ is finite. Also $\int|c\psi|^2=|c|^2\int|\psi|^2$ is finite. So the set is closed under addition and scaling. It is a [[Vector Space|vector space]], and superposition of states is allowed.`,
          check: chk(r`If $\phi$ and $\psi$ are square-integrable, why is $\phi+\psi$ square-integrable too?`, r`Because $|\phi+\psi|^2\le2|\phi|^2+2|\psi|^2$ and both integrals are finite`, r`Because $\phi+\psi$ is always zero`, r`Because square-integrable functions never overlap`, r`This pointwise inequality bounds the integral of the sum by a finite number.`, "Vector Space"),
        },
        {
          title: "The scalar product is always finite",
          text: r`We define $\langle\phi|\psi\rangle=\int\phi^*(x)\psi(x)\,dx$. For each $x$, $|\phi^*\psi|\le\tfrac12(|\phi|^2+|\psi|^2)$, because $(|\phi|-|\psi|)^2\ge0$. So $\int|\phi^*\psi|\,dx\le\tfrac12\big(\int|\phi|^2+\int|\psi|^2\big)<\infty$: the [[Inner Product|scalar product]] is a well-defined finite number, and $\langle\psi|\psi\rangle=\int|\psi|^2dx>0$ for a nonzero state (when functions equal almost everywhere are identified).`,
          check: chk(r`Why is $\int\phi^*\psi\,dx$ finite for square-integrable $\phi,\psi$?`, r`Because $|\phi^*\psi|\le\tfrac12(|\phi|^2+|\psi|^2)$, which has a finite integral`, r`Because $\phi^*\psi$ is always 1`, r`Because $\phi$ and $\psi$ are real`, r`The bound from $(|\phi|-|\psi|)^2\ge0$ turns two finite integrals into a finite bound.`, "Inner Product"),
        },
        {
          title: "No missing limits",
          text: r`The Riesz-Fischer theorem says that if a sequence of square-integrable functions gets closer and closer together in the length $\sqrt{\int|\psi|^2}$, its limit is again a square-integrable function. So this space is [[Complete Space|complete]]. Together with steps 2 and 3 it is a Hilbert space, called $L^2$, and limits of states (for example from approximations) are still states.`,
          check: chk(r`What property of $L^2$ guarantees that limits of approximating wave functions are again wave functions?`, r`Completeness`, r`Linearity of the integral`, r`Positivity of $\psi$`, r`Completeness means every Cauchy sequence converges to an element of the space.`, "Complete Space"),
        },
        {
          title: "Show $Ae^{-a|x|}$ is square-integrable",
          text: r`We have $|\psi(x)|^2=|A|^2e^{-2a|x|}$, which is an even function of $x$. So $\int_{-\infty}^{\infty}|\psi|^2dx=2|A|^2\int_0^{\infty}e^{-2ax}dx=2|A|^2\Big[-\dfrac{e^{-2ax}}{2a}\Big]_0^{\infty}=2|A|^2\cdot\dfrac1{2a}=\dfrac{|A|^2}{a}$, using $e^{-2ax}\to0$ as $x\to\infty$ because $a>0$. This is finite, so $\psi$ is square-integrable. (For $a\le0$ the integral would diverge.)`,
          check: chk(r`What is $\int_0^{\infty}e^{-2ax}\,dx$ for $a>0$?`, r`$\dfrac1{2a}$`, r`$2a$`, r`$\infty$`, r`$\big[-e^{-2ax}/(2a)\big]_0^\infty=0-(-1/(2a))=1/(2a)$.`, "Integral"),
        },
        {
          title: "Find the normalization constant",
          text: r`Normalization requires $\int|\psi|^2dx=1$, so $|A|^2/a=1$ and $|A|=\sqrt a$. Choosing a real positive constant, $A=\sqrt a$. Any phase $e^{i\theta}\sqrt a$ also works, because a global phase does not change $|\psi|^2$.`,
          check: chk(r`Which value of $A$ normalizes $\psi=Ae^{-a|x|}$ (real, positive)?`, r`$A=\sqrt a$`, r`$A=a$`, r`$A=1/\sqrt a$`, r`The condition $|A|^2/a=1$ gives $A=\sqrt a$.`, "Normalization"),
        },
      ],
      conclusion: r`Square-integrable functions are suitable because $\int|\psi|^2dx<\infty$ lets us normalize to total probability 1, the set is closed under sums and multiples, its scalar product $\int\phi^*\psi\,dx$ is finite, and it is complete (a Hilbert space). For $\psi=Ae^{-a|x|}$, $\int|\psi|^2dx=|A|^2/a$ is finite and $A=\sqrt a$ normalizes it. $\blacksquare$`,
      example: {
        text: r`Take $a=2$. Then $\psi=Ae^{-2|x|}$ has $\int|\psi|^2dx=2|A|^2\int_0^\infty e^{-4x}dx=2|A|^2\cdot\tfrac14=|A|^2/2$, so $A=\sqrt2$. Check: with $|A|^2=2$ the total is $2\cdot2\cdot\tfrac14=1$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does square-integrable mean?`, a: r`The integral of $|\psi|^2$ over all space is a finite number.` },
        { q: r`Why is that the right set for wave functions?`, a: r`Because $|\psi|^2$ is a probability density and the total probability must be 1. Also this set is a complete vector space with a scalar product.` },
        { q: r`Why is the answer to the second part $\sqrt a$ and not $a$?`, a: r`Because the normalization is on $|\psi|^2=|A|^2e^{-2a|x|}$, and its integral is $|A|^2/a$. Setting it to 1 gives $|A|=\sqrt a$.` },
        { q: r`Why do I double the integral from 0 to infinity?`, a: r`The integrand depends only on $|x|$, so the left half equals the right half.` },
        { q: r`What if $a$ were negative?`, a: r`Then $e^{-2a|x|}$ grows without limit and the integral is infinite, so no $A$ normalizes it.` },
      ],
      keywords: [
        "square-integrable|square integrable", "finite integral|integral is finite", "probability density|absolute value squared", "total probability equals one|total probability",
        "normalization|normalize", "normalization constant", "vector space|closed under addition", "superposition", "scalar product|inner product", "Schwarz inequality|Cauchy-Schwarz|bound on the product",
        "complete|completeness", "Hilbert space", "L two space|L2", "Riesz-Fischer", "even function|symmetric integrand", "exponential integral|integral of exponential",
        "one over 2a|1/(2a)", "A equals root a|sqrt a|square root of a", "plane wave not normalizable|generalized state", "global phase",
      ],
      retryPrompt: r`Without looking, explain why wave functions are taken to be square-integrable, then show that $Ae^{-a|x|}$ is square-integrable and find $A$. Write the integral in the LaTeX box and recall the key words.`,
      sourcePageText: r`1. Explain why the set of square-integrable functions is suitable for representing wave functions. 2. Show that the function psi(x) = A e^{-a|x|}, a > 0, is square-integrable. Find the normalization constant A.`,
    },
  }),

  problem({
    id: "hermitian-adjoint-definition",
    name: "Hermitian Adjoint and Hermitian Operators",
    group: "operators",
    symbol: r`A^\dagger,\ A=A^\dagger`,
    prerequisites: ["Linear Operator", "Inner Product", "Complex Conjugate", "Conjugate Symmetry", "Orthonormal Basis", "Matrix Representation", "Transpose", "Operator Domain", "Self-adjoint Operator", "Dagger Symbol"],
    ross: { n: "A6", label: "Module 3 · Section A Q6", section: "A", page: 1 },
    title: "Hermitian adjoint and the condition for a Hermitian operator",
    statement: r`Define the Hermitian adjoint $\hat A^\dagger$ of a linear operator $\hat A$ in terms of inner products. State the condition under which an operator is strictly Hermitian.`,
    meaning: r`The adjoint $A^\dagger$ is the operator that gives the same scalar product when you move $A$ from one side to the other. A Hermitian operator is its own adjoint.`,
    linkedFormal: r`For a [[Linear Operator|linear operator]] $A$ the [[Hermitian Adjoint|Hermitian adjoint]] $A^\dagger$ is the operator with $\langle u|Av\rangle=\langle A^\dagger u|v\rangle$ for all vectors $u,v$. In an [[Orthonormal Basis|orthonormal basis]] its matrix is the conjugate transpose, $(A^\dagger)_{mn}=(A_{nm})^*$. The operator is [[Hermitian Operator|Hermitian]] if $A=A^\dagger$, that is $\langle u|Av\rangle=\langle Au|v\rangle$ for all $u,v$. For unbounded operators it must also have the same [[Operator Domain|domain]] as $A^\dagger$ to be strictly [[Self-adjoint Operator|self-adjoint]].`,
    example: r`$A=\begin{pmatrix}0&-i\\ i&0\end{pmatrix}$ has $A^\dagger=\begin{pmatrix}0&-i\\ i&0\end{pmatrix}=A$, so it is Hermitian. $B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ has $B^\dagger=\begin{pmatrix}0&0\\1&0\end{pmatrix}\neq B$.`,
    pretest: {
      prompt: r`What is the Hermitian adjoint of the matrix $\begin{pmatrix}1&2i\\3&4\end{pmatrix}$?`,
      options: [r`$\begin{pmatrix}1&3\\-2i&4\end{pmatrix}$`, r`$\begin{pmatrix}1&3\\2i&4\end{pmatrix}$`, r`$\begin{pmatrix}1&-2i\\3&4\end{pmatrix}$`],
      correct: 0,
      explanation: r`Transpose (swap rows and columns) and also conjugate each entry. The entry $2i$ moves to the lower left and becomes $-2i$.`,
    },
    check: {
      prompt: r`If $A$ is Hermitian, which equality holds for all vectors $u$ and $v$?`,
      options: [r`$\langle u|Av\rangle=\langle Au|v\rangle$`, r`$\langle u|Av\rangle=\langle v|Au\rangle$`, r`$\langle u|Av\rangle=-\langle Au|v\rangle$`],
      correct: 0,
      explanation: r`A Hermitian operator can be moved from the right slot to the left slot without any change. The other two statements are not true in general.`,
    },
    faq: [
      { q: r`Is the adjoint the same as the inverse or the transpose?`, a: r`No. It is the conjugate transpose of the matrix. Only for unitary operators does $A^\dagger$ equal $A^{-1}$.` },
      { q: r`Why do physicists want Hermitian operators?`, a: r`Observables have real measured values. Hermitian operators have real eigenvalues, which is proved in Section C.` },
      { q: r`What is "strictly" Hermitian?`, a: r`For operators on infinite-dimensional spaces $A=A^\dagger$ must also hold for the domains. Matrices on finite-dimensional spaces have no domain problem.` },
    ],
    proof: {
      idea: r`We define $A^\dagger$ by moving $A$ across the scalar product, show that this really determines $A^\dagger$ uniquely, find its matrix, and then Hermitian means $A$ equals its own adjoint.`,
      steps: [
        {
          title: "Define the adjoint by the scalar product",
          text: r`For a [[Linear Operator|linear operator]] $A$, the Hermitian adjoint $A^\dagger$ is the operator satisfying $\langle u|Av\rangle=\langle A^\dagger u|v\rangle$ for every pair of vectors $u,v$ (in the domain). In words, acting with $A$ on the right vector equals acting with $A^\dagger$ on the left vector.`,
          check: chk(r`Which identity defines the adjoint $A^\dagger$?`, r`$\langle u|Av\rangle=\langle A^\dagger u|v\rangle$ for all $u,v$`, r`$\langle u|Av\rangle=\langle Au|v\rangle$ for all $u,v$`, r`$A^\dagger A=I$`, r`The second equation would define a Hermitian operator, and the third a unitary one. The first is the general definition.`, "Hermitian Adjoint"),
        },
        {
          title: "The adjoint is unique",
          text: r`Suppose two operators $B$ and $C$ both satisfy $\langle Bu|v\rangle=\langle u|Av\rangle=\langle Cu|v\rangle$ for all $v$. Then $\langle(B-C)u|v\rangle=0$ for all $v$. Choose $v=(B-C)u$: we get $\|(B-C)u\|^2=0$, so $Bu=Cu$. As this is true for every $u$, $B=C$. So the identity fixes $A^\dagger$ without any ambiguity.`,
          check: chk(r`If $\langle w|v\rangle=0$ for every vector $v$, what can you conclude about $w$?`, r`$w=0$, by choosing $v=w$`, r`$w$ is any unit vector`, r`$w$ is an eigenvector`, r`Choosing $v=w$ gives $\|w\|^2=0$, which forces $w$ to be the zero vector.`, "Inner Product"),
        },
        {
          title: "The matrix of the adjoint",
          text: r`In an orthonormal basis $\{|e_n\rangle\}$ the matrix of $A$ is $A_{mn}=\langle e_m|Ae_n\rangle$. Then $(A^\dagger)_{mn}=\langle e_m|A^\dagger e_n\rangle=\langle A^\dagger e_n|e_m\rangle^*$, and applying the definition, $\langle A^\dagger e_n|e_m\rangle=\langle e_n|Ae_m\rangle=A_{nm}$. So $(A^\dagger)_{mn}=(A_{nm})^*$: the [[Matrix Representation|matrix]] of $A^\dagger$ is the [[Transpose|transpose]] of $A$ with every entry [[Complex Conjugate|complex-conjugated]].`,
          check: chk(r`In an orthonormal basis, how is the matrix of $A^\dagger$ obtained from the matrix of $A$?`, r`Transpose it and take the complex conjugate of every entry`, r`Only transpose it`, r`Only take the complex conjugate`, r`The formula $(A^\dagger)_{mn}=(A_{nm})^*$ includes both swapping the indices and conjugating.`, "Transpose"),
        },
        {
          title: "The condition for a Hermitian operator",
          text: r`An operator is [[Hermitian Operator|Hermitian]] if it equals its adjoint, $A=A^\dagger$. By the definition this says $\langle u|Av\rangle=\langle Au|v\rangle$ for all $u,v$. For a matrix it means $A_{mn}=(A_{nm})^*$: the diagonal entries are real and entries opposite each other across the diagonal are complex conjugates.`,
          check: chk(r`What must be true of the diagonal entries of a Hermitian matrix?`, r`They are real numbers`, r`They are all zero`, r`They are all equal`, r`For $m=n$ the condition $A_{nn}=(A_{nn})^*$ says that each diagonal entry equals its own conjugate, so it is real.`, "Hermitian Operator"),
        },
        {
          title: "The strict version for unbounded operators",
          text: r`In infinite dimensions an operator is only defined on a part of the space, its [[Operator Domain|domain]]. Then $A=A^\dagger$ must include equal domains, $D(A)=D(A^\dagger)$. This is the condition for a strictly [[Self-adjoint Operator|self-adjoint]] operator. If only $\langle u|Av\rangle=\langle Au|v\rangle$ holds on the domain of $A$ the operator is called symmetric, which is weaker.`,
          check: chk(r`What extra requirement makes an unbounded operator strictly Hermitian (self-adjoint)?`, r`Its domain must equal the domain of its adjoint`, r`Its eigenvalues must all be positive`, r`It must be a finite matrix`, r`Self-adjointness means $A=A^\dagger$ including the domains. Positivity is unrelated.`, "Operator Domain"),
        },
      ],
      conclusion: r`The Hermitian adjoint $A^\dagger$ is defined by $\langle u|Av\rangle=\langle A^\dagger u|v\rangle$ for all $u,v$; in an orthonormal basis it is the conjugate transpose. An operator is Hermitian when $A=A^\dagger$, that is $\langle u|Av\rangle=\langle Au|v\rangle$ for all $u,v$ (with equal domains in the unbounded case). $\blacksquare$`,
      example: {
        text: r`For $B=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ and the vectors $u=(1,0)$, $v=(0,1)$: $\langle u|Bv\rangle=\langle(1,0)|(1,0)\rangle=1$, while $\langle Bu|v\rangle=\langle(0,0)|(0,1)\rangle=0$. They differ, so $B$ is not Hermitian. Its adjoint $B^\dagger=\begin{pmatrix}0&0\\1&0\end{pmatrix}$ gives $\langle B^\dagger u|v\rangle=\langle(0,1)|(0,1)\rangle=1$ as required.`,
      },
    },
    question: {
      faq: [
        { q: r`What does the dagger mean?`, a: r`$A^\dagger$ is the Hermitian adjoint of $A$. For a matrix it is the transpose with all entries complex-conjugated.` },
        { q: r`Do I have to show the matrix formula too?`, a: r`The question asks for the inner-product definition. The matrix form is a good extra line.` },
        { q: r`Is "Hermitian" the same as "self-adjoint"?`, a: r`For finite matrices yes. For unbounded operators self-adjoint is stronger because the domains must agree.` },
        { q: r`Why is the condition called "strictly" Hermitian?`, a: r`Because equality $A=A^\dagger$ must hold exactly, including the domain, and not only the scalar-product identity on the domain of $A$.` },
        { q: r`Give a quick test for a matrix to be Hermitian.`, a: r`Real diagonal, and $A_{mn}=A_{nm}^*$ for the rest.` },
      ],
      keywords: [
        "Hermitian adjoint|adjoint|dagger", "linear operator", "inner product|scalar product", "inner product with A moved across|u A v equals A dagger u v", "for all vectors|for every u and v",
        "unique|uniqueness", "conjugate transpose|transpose and conjugate", "matrix element|matrix entries", "orthonormal basis", "Hermitian operator|Hermitian",
        "A equals A dagger|self adjoint equals adjoint", "real diagonal|real diagonal entries", "domain", "self-adjoint|strictly Hermitian", "symmetric operator",
        "unbounded operator", "finite dimensional", "complex conjugate",
      ],
      retryPrompt: r`Without looking, define the Hermitian adjoint with inner products, say how its matrix is found and state when an operator is strictly Hermitian. Write the defining identity in the LaTeX box and recall the key words.`,
      sourcePageText: r`6. Define the Hermitian adjoint A-dagger of a linear operator A in terms of inner products. State the condition under which an operator is strictly Hermitian.`,
    },
  }),

  problem({
    id: "position-momentum-commutators",
    name: "Commutators of Position and Momentum Powers",
    group: "operators",
    symbol: r`[x,p^2],\ [x^2,p]`,
    prerequisites: ["Commutator", "Operator Product", "Position Operator", "Momentum Operator", "Identity Operator", "Hbar Symbol", "Imaginary Unit", "Derivative", "Linear Operator"],
    ross: { n: "A7", label: "Module 3 · Section A Q7", section: "A", page: 1 },
    title: "Evaluating $[x,p^2]$ and $[x^2,p]$",
    statement: r`Using the basic commutation relation $[x,p]=i\hbar$, evaluate $[x,p^2]$ and $[x^2,p]$.`,
    meaning: r`Because $x$ and $p$ do not commute, squaring one of them changes the commutator in a predictable way: each factor in a product contributes its own commutator.`,
    linkedFormal: r`The [[Commutator|commutator]] is $[A,B]=AB-BA$. Two product rules hold for any operators: $[A,BC]=[A,B]C+B[A,C]$ and $[AB,C]=A[B,C]+[A,C]B$. With $[x,p]=i\hbar I$ they give $[x,p^2]=2i\hbar\,p$ and $[x^2,p]=2i\hbar\,x$.`,
    example: r`Acting on a test function $f(x)$ with $p=-i\hbar\,d/dx$: $[x,p^2]f=x(-\hbar^2f'')+\hbar^2(xf)''=2\hbar^2f'=2i\hbar\,(-i\hbar f')=2i\hbar\,pf$.`,
    pretest: {
      prompt: r`Two operators satisfy $[A,B]=c\,I$ with $c$ a number. What is $[A,B^2]$?`,
      options: [r`$2c\,B$`, r`$c\,B$`, r`$c^2I$`],
      correct: 0,
      explanation: r`Using $[A,B^2]=[A,B]B+B[A,B]=cB+Bc=2cB$. The commutator with a square gains a factor 2 and a leftover $B$.`,
    },
    check: {
      prompt: r`What is $[x,\,p]$ in terms of $\hbar$?`,
      options: [r`$i\hbar$`, r`$-i\hbar$`, r`$\hbar$`],
      correct: 0,
      explanation: r`The fundamental commutation relation is $[x,p]=xp-px=i\hbar$.`,
    },
    faq: [
      { q: r`Why is $[x,p]=i\hbar$ a number and not an operator?`, a: r`It is the number $i\hbar$ times the identity operator. That is why we can pull it through other operators.` },
      { q: r`Can I just write $[x,p^2]=[x,p]\cdot2p$?`, a: r`Yes in this case, because $[x,p]$ is a number and it commutes with everything. In general you must keep the order, so use the product rule.` },
      { q: r`Is there a quick pattern?`, a: r`$[x,p^n]=i\hbar\,n\,p^{n-1}$ and $[x^n,p]=i\hbar\,n\,x^{n-1}$, like differentiating.` },
    ],
    proof: {
      idea: r`Prove the product rule for commutators by writing everything out, then apply it twice with $[x,p]=i\hbar$.`,
      steps: [
        {
          title: "The first product rule",
          text: r`We claim $[A,BC]=[A,B]C+B[A,C]$. Expand the right side with $[A,B]=AB-BA$: $[A,B]C+B[A,C]=ABC-BAC+BAC-BCA=ABC-BCA=A(BC)-(BC)A=[A,BC]$. The middle terms $-BAC+BAC$ cancel.`,
          check: chk(r`Expand $[A,B]C+B[A,C]$. Which two terms cancel?`, r`$-BAC$ and $+BAC$`, r`$ABC$ and $BCA$`, r`$-BCA$ and $+ABC$`, r`The terms $-BAC$ (from the first commutator times $C$) and $+BAC$ (from $B$ times $AC$) cancel, leaving $ABC-BCA$.`, "Commutator"),
        },
        {
          title: "Apply it to $[x,p^2]$",
          text: r`Write $p^2=p\,p$ and use the rule with $A=x$, $B=C=p$: $[x,p\,p]=[x,p]\,p+p\,[x,p]$. This is the key step, and the order of the factors stays as written.`,
          check: chk(r`Using $[A,BC]=[A,B]C+B[A,C]$ with $A=x$, $B=C=p$, what is $[x,p^2]$ before inserting any value?`, r`$[x,p]\,p+p\,[x,p]$`, r`$2[x,p]$`, r`$[x,p]\,[x,p]$`, r`Replace $B$ and $C$ by $p$ and keep the order: $[x,p]p+p[x,p]$.`, "Operator Product"),
        },
        {
          title: "Insert the basic relation",
          text: r`Put $[x,p]=i\hbar I$ ([[Hbar Symbol|with $\hbar$]]): $[x,p^2]=i\hbar\,p+p\,i\hbar=2i\hbar\,p$. The number $i\hbar$ commutes with $p$, so the two terms are equal.`,
          check: chk(r`After inserting $[x,p]=i\hbar$, what is $[x,p^2]$?`, r`$2i\hbar\,p$`, r`$i\hbar\,p$`, r`$2i\hbar\,p^2$`, r`There are two equal terms $i\hbar p$, giving $2i\hbar p$.`, "Momentum Operator"),
        },
        {
          title: "The second product rule and $[x^2,p]$",
          text: r`Similarly $[AB,C]=A[B,C]+[A,C]B$, because $A[B,C]+[A,C]B=ABC-ACB+ACB-CAB=ABC-CAB=[AB,C]$. With $A=B=x$ and $C=p$: $[x^2,p]=x[x,p]+[x,p]x=x\,i\hbar+i\hbar\,x=2i\hbar\,x$.`,
          check: chk(r`What is $[x^2,p]$?`, r`$2i\hbar\,x$`, r`$2i\hbar\,p$`, r`$i\hbar\,x^2$`, r`Each of the two $x$ factors contributes one $i\hbar$, giving $2i\hbar x$.`, "Position Operator"),
        },
        {
          title: "Check with a test function",
          text: r`Let $p=-i\hbar\,d/dx$ and $f$ any smooth function. Then $x p^2f=-\hbar^2xf''$ and $p^2(xf)=-\hbar^2(xf)''=-\hbar^2(2f'+xf'')$. Subtracting, $[x,p^2]f=2\hbar^2f'=2i\hbar(-i\hbar f')=2i\hbar\,pf$, which agrees with the result.`,
          check: chk(r`In the test-function check, what is $(xf)''$?`, r`$2f'+xf''$`, r`$xf''$`, r`$f''$`, r`Apply the product rule twice: $(xf)'=f+xf'$ and $(xf)''=2f'+xf''$.`, "Derivative"),
        },
      ],
      conclusion: r`Using $[A,BC]=[A,B]C+B[A,C]$, $[AB,C]=A[B,C]+[A,C]B$ and $[x,p]=i\hbar$, we get $[x,p^2]=2i\hbar\,p$ and $[x^2,p]=2i\hbar\,x$. $\blacksquare$`,
      example: {
        text: r`Choose $f(x)=x^2$. Then $p^2f=-\hbar^2\cdot2=-2\hbar^2$ and $xp^2f=-2\hbar^2x$; also $xf=x^3$, $(x^3)''=6x$ so $p^2(xf)=-6\hbar^2x$. So $[x,p^2]f=-2\hbar^2x+6\hbar^2x=4\hbar^2x$. And $2i\hbar\,pf=2i\hbar(-i\hbar)(2x)=4\hbar^2x$. They agree.`,
      },
    },
    question: {
      faq: [
        { q: r`Do I need to prove the product rule?`, a: r`It is better to state it and, if there is time, expand it in one line. Then the answer is fully justified.` },
        { q: r`Why not just treat $x$ and $p$ as numbers?`, a: r`They are operators that do not commute, so $[x,p^2]$ is not zero. Treating them as numbers would give 0.` },
        { q: r`Is $[x,p]=i\hbar$ always true?`, a: r`Yes, for the position and momentum of one particle in one dimension. It is a basic postulate (canonical commutation relation).` },
        { q: r`What is $[p,x^2]$?`, a: r`Reverse the order of a commutator and the sign flips: $[p,x^2]=-2i\hbar\,x$.` },
        { q: r`How can I check my answer quickly?`, a: r`Apply both sides to a test function using $p=-i\hbar\,d/dx$.` },
      ],
      keywords: [
        "commutator|commutation relation", "x p minus p x|xp-px", "i hbar|iħ", "operator product", "product rule|Leibniz rule|commutator identity",
        "A BC equals AB C plus B AC|[A,BC]", "AB C|[AB,C]", "p squared|p^2", "x squared|x^2", "two i hbar p|2iħp", "two i hbar x|2iħx",
        "identity operator", "number commutes|scalar commutes", "cancel middle terms|terms cancel", "test function", "derivative|differentiate", "momentum operator|minus i hbar d dx",
      ],
      retryPrompt: r`Without looking, write the two commutator product rules, use them with $[x,p]=i\hbar$ to find $[x,p^2]$ and $[x^2,p]$, and check one with a test function. Write the results in the LaTeX box and recall the key words.`,
      sourcePageText: r`7. Using basic commutation relation [x, p] = i hbar evaluate [x, p^2] and [x^2, p].`,
    },
  }),

  problem({
    id: "operator-functions",
    name: "Functions of an Operator",
    group: "operators",
    symbol: r`f(\hat A)`,
    prerequisites: ["Linear Operator", "Operator Product", "Identity Operator", "Eigenvector", "Eigenvalue", "Polynomial", "Power Series", "Mathematical Induction", "Exponential Function", "Linear Combination"],
    ross: { n: "A8-A9", label: "Module 3 · Section A Q8–Q9", section: "A", page: 1 },
    title: "What is $f(\hat A)$, and what is $f(\hat A)|\alpha\rangle$?",
    statement: r`(Q8) What is meant by a function $f(\hat A)$ of an operator? (Q9) If $\hat A|\alpha\rangle=\alpha|\alpha\rangle$, what is $f(\hat A)|\alpha\rangle$?`,
    meaning: r`To apply a function to an operator, put the operator into the function's polynomial or power series. On an eigenvector the operator just acts like its eigenvalue.`,
    linkedFormal: r`For a polynomial $f(t)=\sum_{n=0}^{N}c_nt^n$ define $f(A)=\sum_{n=0}^{N}c_nA^n$ with $A^0=I$. For a [[Power Series|power series]] $f(t)=\sum_{n=0}^{\infty}c_nt^n$ define $f(A)=\sum c_nA^n$ where the series converges. If $A|\alpha\rangle=\alpha|\alpha\rangle$ then $A^n|\alpha\rangle=\alpha^n|\alpha\rangle$ and so $f(A)|\alpha\rangle=f(\alpha)|\alpha\rangle$.`,
    example: r`If $f(t)=t^2+3$ then $f(A)=A^2+3I$. If $A|\alpha\rangle=2|\alpha\rangle$ then $f(A)|\alpha\rangle=(4+3)|\alpha\rangle=7|\alpha\rangle$, and $e^{A}|\alpha\rangle=e^{2}|\alpha\rangle$.`,
    pretest: {
      prompt: r`For a matrix $A$, what is $f(A)$ when $f(t)=t^2+3$?`,
      options: [r`$A^2+3I$`, r`$A^2+3$ with 3 added to every entry`, r`$(A+3)^2$`],
      correct: 0,
      explanation: r`The constant term multiplies the identity operator, $A^0=I$. Adding a plain 3 to every entry would be a different operator.`,
    },
    check: {
      prompt: r`If $A|\alpha\rangle=\alpha|\alpha\rangle$, what is $A^2|\alpha\rangle$?`,
      options: [r`$\alpha^2|\alpha\rangle$`, r`$\alpha|\alpha\rangle$`, r`$2\alpha|\alpha\rangle$`],
      correct: 0,
      explanation: r`Apply $A$ twice: each time the eigenvalue $\alpha$ comes out, giving $\alpha^2$.`,
    },
    faq: [
      { q: r`Why not apply $f$ to each matrix entry?`, a: r`For example $A^2$ is the matrix product $A\cdot A$, not each entry squared. The function is applied through powers of the operator.` },
      { q: r`What if $f$ is not a polynomial, like $e^{A}$ or $\sin A$?`, a: r`Use its power series, $e^{A}=\sum A^n/n!$, where the series converges. Other constructions through eigenvalues extend the idea.` },
      { q: r`Does the result hold if $|\alpha\rangle$ is not an eigenvector?`, a: r`No. Only on an eigenvector does $A$ act as a number.` },
    ],
    proof: {
      idea: r`First say what $f(A)$ means by using powers of $A$. Then show by counting powers that $A^n$ acts on an eigenvector as the number $\alpha^n$, and add up.`,
      steps: [
        {
          title: "Define $f(A)$ for a polynomial",
          text: r`An operator can be multiplied by itself, so $A^2=AA$, $A^3=AAA$, and $A^0=I$ ([[Identity Operator|identity operator]]). For a [[Polynomial|polynomial]] $f(t)=c_0+c_1t+\cdots+c_Nt^N$ we define $f(A)=c_0I+c_1A+\cdots+c_NA^N$. We replace the number $t$ by the operator $A$ and the constant term by $c_0I$.`,
          check: chk(r`For $f(t)=t^2+3$, which operator is $f(A)$?`, r`$A^2+3I$`, r`$A^2+3$ with 3 added to every entry of $A^2$`, r`$(A+3)^2$`, r`The constant 3 is multiplied by the identity operator.`, "Identity Operator"),
        },
        {
          title: "Extend to power series",
          text: r`If $f$ is a [[Power Series|power series]], $f(t)=\sum_{n=0}^{\infty}c_nt^n$, we define $f(A)=\sum_{n=0}^{\infty}c_nA^n$ whenever this series converges (for example $e^{A}=\sum_n A^n/n!$). Other functions use their eigenvalues, but power series cover the cases in this module.`,
          check: chk(r`How is $e^{A}$ defined for an operator $A$?`, r`$\displaystyle e^{A}=\sum_{n=0}^{\infty}\frac{A^n}{n!}$`, r`$e^{A}$ means $e$ raised to each matrix entry`, r`$e^{A}=1+A$`, r`We put the operator into the series of $e^t$, using matrix powers.`, "Exponential Function"),
        },
        {
          title: "Powers of $A$ on an eigenvector",
          text: r`Let $A|\alpha\rangle=\alpha|\alpha\rangle$. We claim $A^n|\alpha\rangle=\alpha^n|\alpha\rangle$ for every $n\ge0$. For $n=0$ it says $I|\alpha\rangle=|\alpha\rangle$. If it holds for $n$, then $A^{n+1}|\alpha\rangle=A(A^n|\alpha\rangle)=A(\alpha^n|\alpha\rangle)=\alpha^nA|\alpha\rangle=\alpha^{n+1}|\alpha\rangle$, because $A$ is linear. By [[Mathematical Induction|induction]] the claim is true for all $n$.`,
          check: chk(r`In the induction step, why does $A(\alpha^n|\alpha\rangle)=\alpha^nA|\alpha\rangle$?`, r`Because $A$ is linear, so the number $\alpha^n$ can be pulled out`, r`Because $A$ is the identity`, r`Because $\alpha^n=1$`, r`Linearity of $A$ lets scalars move out in front.`, "Linear Operator"),
        },
        {
          title: "Add up the terms",
          text: r`For a polynomial, $f(A)|\alpha\rangle=\sum c_nA^n|\alpha\rangle=\sum c_n\alpha^n|\alpha\rangle=\big(\sum c_n\alpha^n\big)|\alpha\rangle=f(\alpha)|\alpha\rangle$, using linearity. The same sum works for a convergent power series, term by term. So $|\alpha\rangle$ is an [[Eigenvector|eigenvector]] of $f(A)$ with [[Eigenvalue|eigenvalue]] $f(\alpha)$.`,
          check: chk(r`If $A|\alpha\rangle=\alpha|\alpha\rangle$, what is $f(A)|\alpha\rangle$?`, r`$f(\alpha)|\alpha\rangle$`, r`$f(A)\,\alpha|\alpha\rangle$ with nothing simplified`, r`$\alpha f(\alpha)|\alpha\rangle$`, r`Every power of $A$ is replaced by the same power of $\alpha$, giving $f(\alpha)$.`, "Eigenvalue"),
        },
      ],
      conclusion: r`A function of an operator is defined through powers of $A$: $f(A)=\sum c_nA^n$ for a polynomial or convergent power series, with $A^0=I$. If $A|\alpha\rangle=\alpha|\alpha\rangle$, then $f(A)|\alpha\rangle=f(\alpha)|\alpha\rangle$. $\blacksquare$`,
      example: {
        text: r`Let $A=\begin{pmatrix}2&0\\0&5\end{pmatrix}$ and $|\alpha\rangle=(1,0)$ with $\alpha=2$. For $f(t)=t^2+3$, $f(A)=A^2+3I=\begin{pmatrix}7&0\\0&28\end{pmatrix}$, and $f(A)|\alpha\rangle=(7,0)=7|\alpha\rangle=f(2)|\alpha\rangle$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "a function of an operator" mean?`, a: r`An operator built by putting $A$ into a polynomial or power series, using powers of $A$ and $A^0=I$.` },
        { q: r`Why is $f(A)|\alpha\rangle=f(\alpha)|\alpha\rangle$ useful?`, a: r`It lets us compute $f(A)$ on its eigenvectors just by evaluating the ordinary function at the eigenvalue.` },
        { q: r`Do I need to prove the second part?`, a: r`A short proof by induction on $A^n|\alpha\rangle=\alpha^n|\alpha\rangle$ is enough.` },
        { q: r`Is $A$ assumed Hermitian?`, a: r`No. The result holds for any linear operator with an eigenvector $|\alpha\rangle$.` },
        { q: r`What if the power series does not converge?`, a: r`Then $f(A)$ is not defined by that series. The eigenvector result still holds wherever the series converges on $|\alpha\rangle$.` },
      ],
      keywords: [
        "function of an operator|operator function", "polynomial", "power series|series", "powers of A|A squared", "identity operator|A zero equals I", "constant times identity|3I",
        "eigenvector|eigenstate", "eigenvalue", "A acting on alpha gives alpha|eigenvalue equation", "induction|inductive step", "linearity|linear operator", "pull out the number|scalar comes out",
        "A to the n on alpha|A^n acting on alpha", "f of alpha|f(α)", "term by term|add up the terms", "exponential of an operator|e to the A", "converges|convergent", "t squared plus three|t^2+3",
      ],
      retryPrompt: r`Without looking, explain what $f(\hat A)$ means, then show that $f(\hat A)|\alpha\rangle=f(\alpha)|\alpha\rangle$ if $\hat A|\alpha\rangle=\alpha|\alpha\rangle$. Write the result in the LaTeX box and recall the key words.`,
      sourcePageText: r`8. What is meant by a function f(A) of an operator? 9. If A|alpha> = alpha|alpha>, what is f(A)|alpha>?`,
    },
  }),
];

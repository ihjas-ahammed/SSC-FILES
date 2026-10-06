import { problem, chk } from "../dsl.js";
const r = String.raw;

// Part B: inequalities and spectra. Module 3, Section B Q3-Q7, Section A Q10-Q11 and Section C Q1-Q2 (merged, no repeats).
export default [
  problem({
    id: "schwarz-proof",
    name: "Proving the Schwarz Inequality",
    group: "uncertainty",
    symbol: r`|\langle\varphi|\psi\rangle|^2`,
    prerequisites: ["Inner Product", "Conjugate Symmetry", "Positive Definiteness", "Orthogonality", "Complex Conjugate", "Absolute Value"],
    ross: { n: "B3", label: "Module 3 · Section B Q3", section: "B", page: 2 },
    title: "The Schwarz inequality",
    statement: r`Prove the Schwarz inequality: $$|\langle\varphi|\psi\rangle|^2\le\langle\varphi|\varphi\rangle\,\langle\psi|\psi\rangle.$$`,
    meaning: r`The overlap of two vectors can never be larger than the product of their lengths. Equality happens only when one vector is a multiple of the other.`,
    linkedFormal: r`For any two vectors $|\varphi\rangle,|\psi\rangle$ in a space with an [[Inner Product|inner product]]: $|\langle\varphi|\psi\rangle|^2\le\langle\varphi|\varphi\rangle\langle\psi|\psi\rangle$. Equality holds exactly when the two vectors are linearly dependent (one is a scalar multiple of the other, or one is zero).`,
    example: r`In the plane take $\varphi=(1,0)$ and $\psi=(3,4)$. Then $\langle\varphi|\psi\rangle=3$, so the left side is $9$, while $\langle\varphi|\varphi\rangle\langle\psi|\psi\rangle=1\cdot25=25$. Indeed $9\le25$.`,
    pretest: {
      prompt: r`For $\varphi=(1,0)$ and $\psi=(3,4)$, how does $|\langle\varphi|\psi\rangle|^2$ compare with $\langle\varphi|\varphi\rangle\langle\psi|\psi\rangle$?`,
      options: [r`$9\le25$`, r`$25\le9$`, r`$9=25$`],
      correct: 0,
      explanation: r`The overlap is $3$, so its square is $9$. The product of the squared lengths is $1\cdot25=25$. Equality would need $\psi$ to be a multiple of $\varphi$, which it is not.`,
    },
    check: chk(
      r`When does the Schwarz inequality become an equality?`,
      r`Exactly when one vector is a multiple of the other`,
      r`Exactly when the two vectors are perpendicular`,
      r`Whenever both vectors have length 1`,
      r`Perpendicular vectors give overlap 0, the smallest possible left side. Equality needs the vectors to point along the same line.`,
    ),
    faq: [
      { q: r`Why is this called an inequality about "overlap"?`, a: r`$\langle\varphi|\psi\rangle$ measures how much of $\psi$ points along $\varphi$. The inequality says that this can never beat the lengths of the two vectors multiplied together.` },
      { q: r`Does it work for complex vectors, not just arrows in the plane?`, a: r`Yes. The proof below uses only the rules of the [[Inner Product|inner product]] (linearity, [[Conjugate Symmetry|conjugate symmetry]] and positivity), so it works for any complex vectors.` },
      { q: r`Why do we need this inequality in quantum mechanics?`, a: r`It is the key step in the uncertainty principle: applying it to the vectors $(A-\langle A\rangle)|\psi\rangle$ and $(B-\langle B\rangle)|\psi\rangle$ gives the bound on $\Delta A\,\Delta B$.` },
    ],
    proof: {
      idea: r`Cut $|\psi\rangle$ into two pieces: one along $|\varphi\rangle$ and one perpendicular to it. The perpendicular piece has a length that cannot be negative, and that one fact gives the inequality.`,
      steps: [
        {
          title: "Dispose of the zero vector",
          text: r`If $|\varphi\rangle$ is the zero vector, then $\langle\varphi|\psi\rangle=0$ and $\langle\varphi|\varphi\rangle=0$, so both sides are $0$ and the inequality holds. From now on assume $|\varphi\rangle\ne0$, so $\langle\varphi|\varphi\rangle>0$.`,
          check: chk(r`If $|\varphi\rangle$ is the zero vector, what are the two sides of the inequality?`, r`Both sides are $0$`, r`The left side is $0$ and the right side is positive`, r`The left side is positive and the right side is $0$`, r`The overlap with the [[Zero Vector|zero vector]] is $0$, and so is $\langle\varphi|\varphi\rangle$, so the product on the right is $0$ as well.`, "Zero Vector"),
        },
        {
          title: "Remove the part of ψ that lies along φ",
          text: r`Let $c=\dfrac{\langle\varphi|\psi\rangle}{\langle\varphi|\varphi\rangle}$ and define $|\chi\rangle=|\psi\rangle-c\,|\varphi\rangle$. We subtracted the piece of $|\psi\rangle$ that points along $|\varphi\rangle$, so $|\chi\rangle$ should be what is left over.`,
          check: chk(r`Why do we subtract $c\,|\varphi\rangle$ from $|\psi\rangle$ with $c=\langle\varphi|\psi\rangle/\langle\varphi|\varphi\rangle$?`, r`To leave a vector perpendicular to $|\varphi\rangle$`, r`To make $|\psi\rangle$ shorter than $|\varphi\rangle$`, r`To make $|\psi\rangle$ equal to $|\varphi\rangle$`, r`The number $c$ is chosen so that what remains has no component along $|\varphi\rangle$, that is, it is [[Orthogonality|orthogonal]] to it.`, "Orthogonality"),
        },
        {
          title: "Check that χ is perpendicular to φ",
          text: r`Using linearity in the second slot: $\langle\varphi|\chi\rangle=\langle\varphi|\psi\rangle-c\,\langle\varphi|\varphi\rangle=\langle\varphi|\psi\rangle-\langle\varphi|\psi\rangle=0$. Taking the complex conjugate (see [[Conjugate Symmetry|conjugate symmetry]]) also gives $\langle\chi|\varphi\rangle=0$.`,
          check: chk(r`What is $\langle\varphi|\chi\rangle$ for $|\chi\rangle=|\psi\rangle-c|\varphi\rangle$?`, r`$0$`, r`$\langle\varphi|\psi\rangle$`, r`$\langle\varphi|\varphi\rangle$`, r`$\langle\varphi|\chi\rangle=\langle\varphi|\psi\rangle-c\langle\varphi|\varphi\rangle$, and the choice of $c$ makes this exactly $0$.`, "Inner Product"),
        },
        {
          title: "A Pythagoras step",
          text: r`Write $|\psi\rangle=|\chi\rangle+c|\varphi\rangle$ and expand $\langle\psi|\psi\rangle$. The two cross terms contain $\langle\chi|\varphi\rangle$ or $\langle\varphi|\chi\rangle$, both $0$, so $$\langle\psi|\psi\rangle=\langle\chi|\chi\rangle+|c|^2\langle\varphi|\varphi\rangle=\langle\chi|\chi\rangle+\frac{|\langle\varphi|\psi\rangle|^2}{\langle\varphi|\varphi\rangle}.$$`,
          check: chk(r`After the cross terms vanish, what is $\langle\psi|\psi\rangle$?`, r`$\langle\chi|\chi\rangle+\dfrac{|\langle\varphi|\psi\rangle|^2}{\langle\varphi|\varphi\rangle}$`, r`$\langle\chi|\chi\rangle-\dfrac{|\langle\varphi|\psi\rangle|^2}{\langle\varphi|\varphi\rangle}$`, r`$\langle\chi|\chi\rangle\,\langle\varphi|\varphi\rangle$`, r`Squared lengths of perpendicular pieces add, exactly as in Pythagoras' theorem. The [[Norm|length]] squared of $c|\varphi\rangle$ is $|c|^2\langle\varphi|\varphi\rangle$.`, "Norm"),
        },
        {
          title: "Use that a length cannot be negative",
          text: r`Because the inner product is positive definite, $\langle\chi|\chi\rangle\ge0$. Therefore $\langle\psi|\psi\rangle\ge\dfrac{|\langle\varphi|\psi\rangle|^2}{\langle\varphi|\varphi\rangle}$. Multiplying by the positive number $\langle\varphi|\varphi\rangle$ gives the inequality.`,
          check: chk(r`Which fact turns the Pythagoras equation into an inequality?`, r`$\langle\chi|\chi\rangle\ge0$`, r`$\langle\chi|\chi\rangle=1$`, r`$\langle\varphi|\psi\rangle$ is real`, r`Dropping a term that is known to be $\ge0$ can only make the right side smaller, which is the definition of [[Positive Definiteness|positive definiteness]] at work.`, "Positive Definiteness"),
        },
        {
          title: "When is it an equality?",
          text: r`Equality holds exactly when $\langle\chi|\chi\rangle=0$, which by positive definiteness means $|\chi\rangle=0$, that is $|\psi\rangle=c|\varphi\rangle$. So equality means the two vectors lie along one line.`,
          check: chk(r`If equality holds in the Schwarz inequality with $|\varphi\rangle\ne0$, what must be true of $|\chi\rangle$?`, r`$|\chi\rangle$ is the zero vector`, r`$|\chi\rangle$ is a unit vector`, r`$|\chi\rangle$ is orthogonal to $|\psi\rangle$ only`, r`Equality happens when the dropped term $\langle\chi|\chi\rangle$ is exactly $0$, which forces $|\chi\rangle=0$.`, "Linear Independence"),
        },
      ],
      conclusion: r`Since $\langle\chi|\chi\rangle\ge0$, we get $|\langle\varphi|\psi\rangle|^2\le\langle\varphi|\varphi\rangle\langle\psi|\psi\rangle$, with equality exactly when $|\psi\rangle$ is a multiple of $|\varphi\rangle$. $\blacksquare$`,
      example: {
        text: r`Take $\varphi=(1,0)$ and $\psi=(3,4)$. Then $c=3/1=3$ and $\chi=(3,4)-3(1,0)=(0,4)$. Check: $\langle\varphi|\chi\rangle=0$, $\langle\chi|\chi\rangle=16$, and $\langle\psi|\psi\rangle=25=16+9$, exactly the Pythagoras equation. Since $16\ge0$ we get $9\le25$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is $\langle\varphi|\psi\rangle$?`, a: r`The [[Inner Product|inner product]] (scalar product) of the two vectors. It is a complex number that measures how much $\psi$ points along $\varphi$.` },
        { q: r`Why is the right side a product of two lengths squared?`, a: r`$\langle\varphi|\varphi\rangle$ and $\langle\psi|\psi\rangle$ are the squared [[Norm|lengths]] of the vectors, so the right side is (length of $\varphi$)$^2$ times (length of $\psi$)$^2$.` },
        { q: r`Do I need to know the vectors explicitly?`, a: r`No. The proof uses only the rules of the inner product, so it holds for every pair of vectors in any space that has one.` },
        { q: r`What if one of the vectors is zero?`, a: r`Then both sides are $0$ and the inequality is trivially true. Treat this case separately before dividing by $\langle\varphi|\varphi\rangle$.` },
        { q: r`How do I know my proof is complete?`, a: r`You should deal with the zero vector, build the perpendicular vector $\chi$ and show it is perpendicular, expand $\langle\psi|\psi\rangle$, use $\langle\chi|\chi\rangle\ge0$, and say when equality holds.` },
      ],
      keywords: [
        "Schwarz inequality|Cauchy-Schwarz|Cauchy Schwarz", "inner product|scalar product", "overlap|bracket phi psi", "norm|length", "zero vector|trivial case",
        "perpendicular|orthogonal|orthogonality", "project|projection|component along", "subtract the part along phi|remove the phi part", "chi|remaining vector|leftover vector", "coefficient c|c equals",
        "Pythagoras|Pythagorean|squared lengths add", "cross terms vanish|cross terms are zero", "positive definite|positivity|norm is non-negative", "greater than or equal to zero|non-negative|nonnegative",
        "multiply by phi phi|multiply through", "linear dependence|linearly dependent|multiple of", "equality case|when equal", "conjugate symmetry|complex conjugate", "linearity|linear in second slot",
      ],
      retryPrompt: r`Without looking, explain in your own words how splitting $|\psi\rangle$ into a piece along $|\varphi\rangle$ and a perpendicular piece proves the Schwarz inequality. Then write the inequality in the LaTeX box and recall the key words.`,
      sourcePageText: r`3. Prove the Schwarz inequality: |<phi|psi>|^2 <= <phi|phi><psi|psi>.`,
    },
  }),

  problem({
    id: "hermitian-product",
    name: "Products of Hermitian Operators",
    group: "operators",
    symbol: r`\hat A\hat B`,
    prerequisites: ["Hermitian Operator", "Hermitian Adjoint", "Operator Product", "Commutator", "Inner Product", "Positive Definiteness"],
    ross: { n: "B4", label: "Module 3 · Section B Q4", section: "B", page: 2 },
    title: "When is a product of Hermitian operators Hermitian?",
    statement: r`Show that if $\hat A$ and $\hat B$ are Hermitian, then $\hat A\hat B$ is Hermitian only if $\hat A$ and $\hat B$ commute. (We prove both directions: $\hat A\hat B$ is Hermitian exactly when $[\hat A,\hat B]=0$.)`,
    meaning: r`Two observables multiplied together give another observable only when their order does not matter.`,
    linkedFormal: r`If $\hat A=\hat A^\dagger$ and $\hat B=\hat B^\dagger$, then $(\hat A\hat B)^\dagger=\hat B\hat A$. Hence $\hat A\hat B$ is [[Hermitian Operator|Hermitian]] if and only if $\hat A\hat B=\hat B\hat A$, that is, if and only if the [[Commutator|commutator]] $[\hat A,\hat B]=0$.`,
    example: r`With $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $\sigma_z=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ (both Hermitian), $\sigma_x\sigma_z=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, which is not equal to its adjoint $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$. They do not commute.`,
    pretest: {
      prompt: r`The matrices $A=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ and $B=\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ are Hermitian. Is $AB$ Hermitian?`,
      options: [r`No: $AB=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ is not equal to its adjoint`, r`Yes: a product of Hermitian matrices is always Hermitian`, r`Yes: both matrices have real entries`],
      correct: 0,
      explanation: r`$AB=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ and its adjoint is $\begin{pmatrix}0&1\\-1&0\end{pmatrix}$, which is different. Real entries do not save it: only commuting would.`,
    },
    check: chk(
      r`For Hermitian $\hat A,\hat B$, what is $(\hat A\hat B)^\dagger$?`,
      r`$\hat B\hat A$`,
      r`$\hat A\hat B$`,
      r`$-\hat A\hat B$`,
      r`Taking the adjoint of a product reverses the order, and each Hermitian factor is its own adjoint.`,
    ),
    faq: [
      { q: r`Is the "only if" in the question the whole story?`, a: r`No. The statement can be turned around: if the operators do commute, the product is Hermitian. Together these give an "if and only if".` },
      { q: r`Why do I care in physics?`, a: r`A measurable quantity needs a Hermitian operator. The product of two observables is a measurable quantity only if the observables commute, which is why $\hat x\hat p$ is not an observable but $\tfrac12(\hat x\hat p+\hat p\hat x)$ is.` },
      { q: r`What does Hermitian mean for matrices?`, a: r`A matrix equal to its conjugate transpose, written $A=A^\dagger$. Equivalently $\langle u|Av\rangle=\langle Au|v\rangle$ for all vectors $u,v$.` },
    ],
    proof: {
      idea: r`Move the operators across the inner product one at a time. Moving $\hat B$ and then $\hat A$ turns $\hat A\hat B$ into $\hat B\hat A$, so the question becomes whether $\hat A\hat B=\hat B\hat A$.`,
      steps: [
        {
          title: "What must be shown",
          text: r`An operator $\hat C$ is Hermitian when $\langle u|\hat Cv\rangle=\langle\hat Cu|v\rangle$ for all vectors $u,v$. We apply this to $\hat C=\hat A\hat B$.`,
          check: chk(r`What must hold for $\hat A\hat B$ to be Hermitian?`, r`$\langle u|\hat A\hat Bv\rangle=\langle\hat A\hat Bu|v\rangle$ for all $u,v$`, r`$\hat A\hat B=\hat A+\hat B$`, r`$\langle u|v\rangle$ is a real number for all $u,v$`, r`A [[Hermitian Operator|Hermitian operator]] can be moved from one side of the inner product to the other without change.`, "Hermitian Operator"),
        },
        {
          title: "Move A across",
          text: r`Since $\hat A$ is Hermitian, $\langle u|\hat A(\hat Bv)\rangle=\langle\hat Au|\hat Bv\rangle$. We treated $\hat Bv$ as one vector and moved $\hat A$ onto $u$.`,
          check: chk(r`Because $\hat A$ is Hermitian, $\langle u|\hat A(\hat Bv)\rangle$ equals which expression?`, r`$\langle\hat Au|\hat Bv\rangle$`, r`$\langle u|\hat Bv\rangle\,\hat A$`, r`$\langle\hat Bu|\hat Av\rangle$`, r`A Hermitian operator can be moved to the other side of the inner product. Here the vector on the right is $\hat Bv$.`, "Hermitian Adjoint"),
        },
        {
          title: "Move B across",
          text: r`Since $\hat B$ is Hermitian, $\langle\hat Au|\hat Bv\rangle=\langle\hat B\hat Au|v\rangle$. So $\langle u|\hat A\hat Bv\rangle=\langle\hat B\hat Au|v\rangle$ for all $u,v$: on the left side of the inner product, the product $\hat A\hat B$ turned into $\hat B\hat A$. The order reversed.`,
          check: chk(r`After moving both operators, $\langle u|\hat A\hat Bv\rangle$ equals which expression?`, r`$\langle\hat B\hat Au|v\rangle$`, r`$\langle\hat A\hat Bu|v\rangle$`, r`$\langle u|\hat B\hat Av\rangle$`, r`Each move across the bracket reverses the order, so the product comes out as $\hat B\hat A$.`, "Operator Product"),
        },
        {
          title: "Hermitian forces commuting",
          text: r`If $\hat A\hat B$ is Hermitian, then also $\langle u|\hat A\hat Bv\rangle=\langle\hat A\hat Bu|v\rangle$. Subtracting the two expressions gives $\langle(\hat B\hat A-\hat A\hat B)u\,|\,v\rangle=0$ for every $v$. Choose $v=(\hat B\hat A-\hat A\hat B)u$: then the length of that vector is $0$, so it is the zero vector. Hence $(\hat B\hat A-\hat A\hat B)u=0$ for every $u$, which says $[\hat A,\hat B]=0$.`,
          check: chk(r`Why may we choose $v=(\hat B\hat A-\hat A\hat B)u$?`, r`The equation holds for every $v$, and a vector orthogonal to itself is the zero vector`, r`Because $v$ must be an eigenvector of $\hat A$`, r`Because $u$ and $v$ are orthogonal`, r`The equation holds for all $v$, so it holds for this one. Then $\langle w|w\rangle=0$ forces $w=0$ by [[Positive Definiteness|positive definiteness]].`, "Positive Definiteness"),
        },
        {
          title: "Commuting gives Hermitian",
          text: r`Conversely, suppose $\hat A\hat B=\hat B\hat A$. Then $\langle u|\hat A\hat Bv\rangle=\langle\hat B\hat Au|v\rangle=\langle\hat A\hat Bu|v\rangle$, which says $\hat A\hat B$ is Hermitian.`,
          check: chk(r`If $\hat A\hat B=\hat B\hat A$, what is $\langle\hat B\hat Au|v\rangle$?`, r`$\langle\hat A\hat Bu|v\rangle$`, r`$-\langle\hat A\hat Bu|v\rangle$`, r`$\langle u|v\rangle$`, r`Commuting means $\hat B\hat A=\hat A\hat B$ as operators, so the two vectors in the bracket are the same.`, "Commutator"),
        },
      ],
      conclusion: r`For Hermitian $\hat A,\hat B$: $\hat A\hat B$ is Hermitian $\iff\hat A\hat B=\hat B\hat A\iff[\hat A,\hat B]=0$. In particular it can be Hermitian only if they commute. $\blacksquare$`,
      example: {
        text: r`$A=\mathrm{diag}(1,2)$ and $B=\mathrm{diag}(3,4)$ commute and $AB=\mathrm{diag}(3,8)$ is Hermitian. In contrast $\sigma_x\sigma_z$ is not Hermitian because $\sigma_x\sigma_z-\sigma_z\sigma_x=\begin{pmatrix}0&-2\\2&0\end{pmatrix}\ne0$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "$\hat A$ is Hermitian" mean?`, a: r`$\hat A=\hat A^\dagger$: the operator equals its [[Hermitian Adjoint|adjoint]]. In terms of inner products, $\langle u|\hat Av\rangle=\langle\hat Au|v\rangle$.` },
        { q: r`What does it mean that two operators commute?`, a: r`Their [[Commutator|commutator]] is zero: $\hat A\hat B-\hat B\hat A=0$, so the order of multiplication does not matter.` },
        { q: r`Is $(\hat A\hat B)^\dagger=\hat A^\dagger\hat B^\dagger$?`, a: r`No. The adjoint of a product reverses the order: $(\hat A\hat B)^\dagger=\hat B^\dagger\hat A^\dagger$. This reversal is the heart of the proof.` },
        { q: r`Do I have to prove the converse too?`, a: r`The question only asks for "only if", but proving the "if" direction as well takes one line and makes the result an equivalence. It is good to mention.` },
        { q: r`Can I prove it with matrices instead?`, a: r`Yes, in finite dimensions $(AB)^\dagger=B^\dagger A^\dagger=BA$, so $AB=(AB)^\dagger=BA$. The inner-product proof also works for general operators.` },
      ],
      keywords: [
        "Hermitian operator|self-adjoint|Hermitian", "adjoint|dagger|Hermitian conjugate", "product of operators|operator product|AB", "commute|commutator|commuting", "order reverses|order reversed|reverse the order",
        "B dagger A dagger|BA", "inner product|bracket", "move across the bracket|move the operator over", "all u and v|for every vector", "subtract|difference B A minus A B",
        "zero vector|vector is zero", "positive definite|norm zero", "only if|necessary", "if and only if|iff|equivalence", "converse|other direction",
        "counterexample|sigma x sigma z|Pauli matrices", "not an observable|not measurable", "symmetrised product|symmetrized product|anticommutator",
      ],
      retryPrompt: r`Without looking, explain in your own words why $\hat A\hat B$ is Hermitian exactly when $\hat A$ and $\hat B$ commute. Then write $(\hat A\hat B)^\dagger$ in the LaTeX box and recall the key words.`,
      sourcePageText: r`4. Show that if A and B are Hermitian, then AB is Hermitian only if A and B commute.`,
    },
  }),

  problem({
    id: "robertson-derivation",
    name: "Deriving the Uncertainty Relation",
    group: "uncertainty",
    symbol: r`\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|`,
    prerequisites: ["Proving the Schwarz Inequality", "Expectation Value", "Variance", "Commutator", "Anticommutator", "Hermitian Operator", "Covariance", "Position Operator", "Momentum Operator"],
    ross: { n: "B5 · C2", label: "Module 3 · Section B Q5 and Section C Q2", section: "B", page: 2 },
    title: "From Schwarz to the uncertainty principle",
    statement: r`Starting from the Schwarz inequality for $|\alpha\rangle=(\hat A-\langle\hat A\rangle)|\psi\rangle$ and $|\beta\rangle=(\hat B-\langle\hat B\rangle)|\psi\rangle$, derive the general uncertainty relation for two Hermitian operators $$\Delta\hat A\,\Delta\hat B\ge\tfrac12\big|\langle[\hat A,\hat B]\rangle\big|.$$ Show also the stronger Robertson–Schrödinger form, and apply it to $\hat x$ and $\hat p_x$ to obtain $\Delta x\,\Delta p_x\ge\hbar/2$.`,
    meaning: r`If two observables do not commute, there is a built-in limit to how sharply both can be known in the same state.`,
    linkedFormal: r`For [[Hermitian Operator|Hermitian]] $A,B$ and a normalized state $|\psi\rangle$: $(\Delta A)^2(\Delta B)^2\ge\operatorname{Cov}(A,B)^2+\tfrac14|\langle[A,B]\rangle|^2$, with $\operatorname{Cov}(A,B)=\tfrac12\langle\{A\prime,B\prime\}\rangle$. Dropping the first term gives $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.`,
    example: r`For a spin-$\tfrac12$ particle in the state $|\uparrow\rangle$ take $A=\sigma_x$, $B=\sigma_y$. Then $[\sigma_x,\sigma_y]=2i\sigma_z$ and $\langle\uparrow|2i\sigma_z|\uparrow\rangle=2i$, so the bound is $\tfrac12\cdot2=1$. Also $\langle\sigma_x\rangle=0$, $\langle\sigma_x^2\rangle=1$, so $\Delta\sigma_x=1$, similarly $\Delta\sigma_y=1$, and $1\cdot1\ge1$ holds with equality.`,
    pretest: {
      prompt: r`For the spin state $|\uparrow\rangle$, what is $\langle\uparrow|[\sigma_x,\sigma_y]|\uparrow\rangle$, given $[\sigma_x,\sigma_y]=2i\sigma_z$ and $\sigma_z|\uparrow\rangle=|\uparrow\rangle$?`,
      options: [r`$2i$`, r`$0$`, r`$2$`],
      correct: 0,
      explanation: r`$\langle\uparrow|2i\sigma_z|\uparrow\rangle=2i\langle\uparrow|\uparrow\rangle=2i$. It is purely imaginary, as a commutator of Hermitian operators must be.`,
    },
    check: chk(
      r`The expectation value of $[\hat A,\hat B]$ for Hermitian $\hat A,\hat B$ is always…`,
      r`Purely imaginary (or zero)`,
      r`Real and positive`,
      r`Always equal to $\hbar$`,
      r`$[\hat A,\hat B]^\dagger=-[\hat A,\hat B]$, so its expectation value equals minus its own complex conjugate.`,
    ),
    faq: [
      { q: r`Why is the standard Heisenberg bound $\hbar/2$ and not $\hbar$?`, a: r`From $[\hat x,\hat p]=i\hbar$ we get $|\langle[\hat x,\hat p]\rangle|=\hbar$. The factor $\tfrac12$ in the general relation then gives $\hbar/2$.` },
      { q: r`What is the extra covariance term?`, a: r`It measures whether $A$ and $B$ vary together in the state. It is real and squared, so it can only strengthen the bound. Throwing it away gives the weaker but simpler Robertson form.` },
      { q: r`Is $\Delta A$ a property of the instrument?`, a: r`No. It is the spread (standard deviation) of results for many identical copies of the state $|\psi\rangle$, so it is a property of the state and the operator.` },
    ],
    proof: {
      idea: r`Apply the Schwarz inequality to the two "centred" vectors $(\hat A-\langle A\rangle)|\psi\rangle$ and $(\hat B-\langle B\rangle)|\psi\rangle$. Their lengths are the standard deviations. Their overlap splits into a real part (covariance) and an imaginary part (the commutator).`,
      steps: [
        {
          title: "Centre the observables",
          text: r`Let $|\psi\rangle$ be normalized, and put $A\prime=\hat A-\langle\hat A\rangle I$, $B\prime=\hat B-\langle\hat B\rangle I$, $|\alpha\rangle=A\prime|\psi\rangle$, $|\beta\rangle=B\prime|\psi\rangle$. Subtracting a real number keeps an operator Hermitian, and $[A\prime,B\prime]=[\hat A,\hat B]$ because the identity commutes with everything.`,
          check: chk(r`Why is $[\hat A-\langle A\rangle I,\ \hat B-\langle B\rangle I]$ equal to $[\hat A,\hat B]$?`, r`The numbers $\langle A\rangle I$ and $\langle B\rangle I$ commute with everything`, r`Because $\langle A\rangle=\langle B\rangle=0$`, r`Because $\hat A$ and $\hat B$ commute`, r`A multiple of the identity commutes with every operator, so subtracting it changes nothing in the [[Commutator|commutator]].`, "Commutator"),
        },
        {
          title: "Lengths are standard deviations",
          text: r`$\langle\alpha|\alpha\rangle=\langle\psi|A\prime A\prime|\psi\rangle=\langle(A\prime)^2\rangle=(\Delta A)^2$, using that $A\prime$ is Hermitian. In the same way $\langle\beta|\beta\rangle=(\Delta B)^2$.`,
          check: chk(r`What is $\langle\alpha|\alpha\rangle$ for $|\alpha\rangle=(\hat A-\langle A\rangle)|\psi\rangle$?`, r`$(\Delta A)^2$, the variance`, r`$\langle A\rangle^2$`, r`$\Delta A$, the standard deviation`, r`The squared length of the centred vector is $\langle(\hat A-\langle A\rangle)^2\rangle$, which is the definition of [[Variance|variance]].`, "Variance"),
        },
        {
          title: "Apply the Schwarz inequality",
          text: r`Schwarz says $|\langle\alpha|\beta\rangle|^2\le\langle\alpha|\alpha\rangle\langle\beta|\beta\rangle=(\Delta A)^2(\Delta B)^2$. The overlap is $\langle\alpha|\beta\rangle=\langle\psi|A\prime B\prime|\psi\rangle=\langle A\prime B\prime\rangle$.`,
          check: chk(r`What does the Schwarz inequality give for $|\alpha\rangle$ and $|\beta\rangle$?`, r`$|\langle\alpha|\beta\rangle|^2\le(\Delta A)^2(\Delta B)^2$`, r`$|\langle\alpha|\beta\rangle|\ge\Delta A\,\Delta B$`, r`$\langle\alpha|\beta\rangle=0$`, r`The right side is the product of the squared lengths of the two vectors, which are the variances.`, "Variance"),
        },
        {
          title: "Split A′B′ into a real and an imaginary part",
          text: r`Write $A\prime B\prime=\tfrac12\{A\prime,B\prime\}+\tfrac12[A\prime,B\prime]$. The anticommutator is Hermitian, so its expectation value is real. The commutator satisfies $[A,B]^\dagger=BA-AB=-[A,B]$, so its expectation value is purely imaginary. Hence $\langle A\prime B\prime\rangle=x+iy$ with $x=\tfrac12\langle\{A\prime,B\prime\}\rangle=\mathrm{Cov}(A,B)$ and $iy=\tfrac12\langle[A,B]\rangle$.`,
          check: chk(r`Which part of $\langle A\prime B\prime\rangle$ comes from the commutator?`, r`The imaginary part, $\tfrac12\langle[A,B]\rangle$`, r`The real part`, r`None of it`, r`The commutator of Hermitian operators is anti-Hermitian, so its expectation value is [[Expectation Value|purely imaginary]]. The anticommutator gives the real covariance part.`, "Anticommutator"),
        },
        {
          title: "Combine and drop the covariance",
          text: r`For a complex number $x+iy$, $|x+iy|^2=x^2+y^2$. Therefore $(\Delta A)^2(\Delta B)^2\ge\mathrm{Cov}(A,B)^2+\tfrac14|\langle[A,B]\rangle|^2$, the Robertson–Schrödinger relation. Since $\mathrm{Cov}^2\ge0$, removing it still leaves a true inequality: $(\Delta A)^2(\Delta B)^2\ge\tfrac14|\langle[A,B]\rangle|^2$. Taking square roots of both (positive) sides gives $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$.`,
          check: chk(r`Why can the covariance term be dropped?`, r`It is a square, so it is $\ge0$, and dropping it only weakens the bound`, r`Because it is always zero`, r`Because $A$ and $B$ commute`, r`Removing a nonnegative term from the right side of a "$\ge$" keeps the inequality true.`, "Covariance"),
        },
        {
          title: "Position and momentum",
          text: r`Take $A=\hat x$, $B=\hat p$ with $[\hat x,\hat p]=i\hbar$. For a normalized state $\langle[\hat x,\hat p]\rangle=i\hbar\langle\psi|\psi\rangle=i\hbar$, so $|\langle[\hat x,\hat p]\rangle|=\hbar$ and $\Delta x\,\Delta p\ge\tfrac12\hbar=\hbar/2$.`,
          check: chk(r`What is $|\langle[\hat x,\hat p]\rangle|$ for a normalized state?`, r`$\hbar$`, r`$\hbar/2$`, r`$0$`, r`The commutator is the constant $i\hbar$, whose absolute value is $\hbar$. The $\tfrac12$ comes from the general relation.`, "Momentum Operator"),
        },
      ],
      conclusion: r`We obtained $(\Delta A)^2(\Delta B)^2\ge\mathrm{Cov}(A,B)^2+\tfrac14|\langle[A,B]\rangle|^2$, hence $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$, and for $\hat x,\hat p$ this is the Heisenberg bound $\Delta x\,\Delta p\ge\hbar/2$. $\blacksquare$`,
      example: {
        text: r`Spin-$\tfrac12$, state $|\uparrow\rangle$, $A=\sigma_x$, $B=\sigma_y$: $\Delta\sigma_x=\Delta\sigma_y=1$, $\mathrm{Cov}=\tfrac12\langle\sigma_x\sigma_y+\sigma_y\sigma_x\rangle=0$ and $\tfrac12|\langle[\sigma_x,\sigma_y]\rangle|=\tfrac12|2i|=1$. The relation $1\cdot1\ge1$ is an equality here.`,
      },
    },
    question: {
      faq: [
        { q: r`What is $\Delta A$?`, a: r`The standard deviation of $A$ in the state: $\Delta A=\sqrt{\langle A^2\rangle-\langle A\rangle^2}$. See [[Variance|variance]].` },
        { q: r`Why start from the Schwarz inequality?`, a: r`Because $\langle\alpha|\alpha\rangle$ and $\langle\beta|\beta\rangle$ are exactly the variances, and $\langle\alpha|\beta\rangle$ contains the commutator. Schwarz links these three.` },
        { q: r`What is the difference between $\{A,B\}$ and $[A,B]$?`, a: r`$\{A,B\}=AB+BA$ (anticommutator) and $[A,B]=AB-BA$ (commutator). One is Hermitian, the other anti-Hermitian, which is why they give the real and imaginary parts.` },
        { q: r`Why does the commutator's expectation come out imaginary?`, a: r`$[A,B]^\dagger=-[A,B]$, so $\langle[A,B]\rangle^*=\langle[A,B]^\dagger\rangle=-\langle[A,B]\rangle$. A number equal to minus its conjugate has zero real part.` },
        { q: r`Which version do I write in the exam?`, a: r`Give the full relation with covariance if asked for the Robertson–Schrödinger form, otherwise the Robertson form $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$, and always finish with $\Delta x\,\Delta p\ge\hbar/2$.` },
      ],
      keywords: [
        "uncertainty relation|uncertainty principle", "Robertson|Robertson relation", "Schrodinger|Robertson-Schrodinger|Schrödinger", "Heisenberg", "standard deviation|Delta A|spread",
        "variance|squared deviation", "expectation value|mean value|average", "Schwarz inequality|Cauchy-Schwarz", "centred operator|centered operator|A minus expectation", "alpha and beta|alpha ket|beta ket",
        "commutator|[A,B]", "anticommutator|{A,B}", "covariance|correlation", "real part|Hermitian part", "imaginary part|anti-Hermitian part",
        "purely imaginary|expectation is imaginary", "drop the covariance|nonnegative term|weaker bound", "x p commutator|i hbar|[x,p]=i hbar", "hbar over two|hbar/2|h bar by 2", "spin example|sigma x sigma y|Pauli",
      ],
      retryPrompt: r`Without looking, explain in your own words how the Schwarz inequality applied to the centred vectors gives $\Delta A\,\Delta B\ge\tfrac12|\langle[A,B]\rangle|$, and why the commutator part is imaginary. Then write the relation in the LaTeX box and recall the key words.`,
      sourcePageText: r`5. Derive the general uncertainty relation Delta A Delta B >= 1/2 |<[A,B]>|. C2. Starting from the Schwarz inequality for |alpha> = (A - <A>)|psi> and |beta> = (B - <B>)|psi>, derive the generalized Robertson-Schrodinger uncertainty relation for any two Hermitian operators A and B. Apply this general relation to position x and momentum p_x to obtain the classic Heisenberg Uncertainty Principle Delta x Delta p_x >= hbar/2.`,
    },
  }),

  problem({
    id: "hermitian-theorems",
    name: "Three Theorems of Hermitian Operators",
    group: "eigen",
    symbol: r`A=A^\dagger`,
    prerequisites: ["Hermitian Operator", "Eigenvalue", "Eigenvector", "Orthogonality", "Inner Product", "Invariant Subspace", "Orthogonal Complement", "Orthonormal Basis", "Fundamental Theorem of Algebra", "Secular Equation", "Mathematical Induction"],
    ross: { n: "B6 · B7 · C1", label: "Module 3 · Section B Q6, Q7 and Section C Q1", section: "B", page: 2 },
    title: "Real eigenvalues, orthogonal eigenvectors, complete basis",
    statement: r`Hermitian operators represent physical observables. Prove: (1) the eigenvalues of a Hermitian operator are real; (2) eigenvectors belonging to distinct eigenvalues are orthogonal; (3) the eigenvectors form a complete orthonormal basis of the space (we prove this for a finite-dimensional space).`,
    meaning: r`Measured values are real numbers, different measured values come from perpendicular states, and every state can be built from these special states.`,
    linkedFormal: r`Let $A=A^\dagger$ act on an $n$-dimensional complex space. (1) Every [[Eigenvalue|eigenvalue]] is real. (2) If $A|v\rangle=\lambda|v\rangle$ and $A|w\rangle=\mu|w\rangle$ with $\lambda\ne\mu$, then $\langle w|v\rangle=0$. (3) There is an orthonormal basis $|e_1\rangle,\ldots,|e_n\rangle$ of eigenvectors of $A$.`,
    example: r`For $\sigma_x=\begin{pmatrix}0&1\\1&0\end{pmatrix}$ the eigenvalues are $+1$ and $-1$ (real), with eigenvectors $\tfrac1{\sqrt2}(1,1)$ and $\tfrac1{\sqrt2}(1,-1)$. Their inner product is $\tfrac12(1-1)=0$ and together they form an orthonormal basis of $\mathbb C^2$.`,
    pretest: {
      prompt: r`What are the eigenvalues of the Hermitian matrix $\sigma_y=\begin{pmatrix}0&-i\\i&0\end{pmatrix}$?`,
      options: [r`$+1$ and $-1$`, r`$+i$ and $-i$`, r`$0$ and $1$`],
      correct: 0,
      explanation: r`The secular equation is $\lambda^2-1=0$, because $\det\begin{pmatrix}-\lambda&-i\\i&-\lambda\end{pmatrix}=\lambda^2-(-i)(i)=\lambda^2-1$. Complex entries do not make the eigenvalues complex: a Hermitian matrix always has real ones.`,
    },
    check: chk(
      r`Why must the eigenvalues of an observable be real numbers?`,
      r`Measurement results are real, and a Hermitian operator guarantees it`,
      r`Because every eigenvector has length 1`,
      r`Because the eigenvalues are always integers`,
      r`The theorem shows $\lambda=\lambda^*$ for a Hermitian operator, matching the fact that measured values are real.`,
    ),
    faq: [
      { q: r`What if two eigenvectors share the same eigenvalue?`, a: r`Theorem 2 says nothing about them. Within one eigenvalue you can still choose perpendicular vectors, by Gram–Schmidt: subtract from each new vector its components along the earlier ones and rescale. The induction proof below does this automatically.` },
      { q: r`Is completeness true in infinite dimensions?`, a: r`Not in this simple form. For infinite-dimensional spaces one needs the spectral theorem for self-adjoint operators, where eigenvectors may be non-normalizable (like momentum states). Here we work in finite dimensions.` },
      { q: r`Why do we need all three facts?`, a: r`Together they say the possible outcomes are real, outcomes are mutually exclusive states, and any state is a mixture of outcome states. That is the mathematical backbone of measurement in quantum mechanics.` },
    ],
    proof: {
      idea: r`Compute $\langle v|Av\rangle$ in two ways to get reality and orthogonality. For completeness, peel off one eigenvector, show that the vectors perpendicular to it form a smaller space that $A$ maps into itself, and repeat.`,
      steps: [
        {
          title: "Theorem 1: eigenvalues are real",
          text: r`Let $A|v\rangle=\lambda|v\rangle$ with $|v\rangle\ne0$. Then $\langle v|Av\rangle=\lambda\langle v|v\rangle$. Because $A$ is Hermitian we can also move it to the left: $\langle v|Av\rangle=\langle Av|v\rangle=\lambda^*\langle v|v\rangle$. Subtracting, $(\lambda-\lambda^*)\langle v|v\rangle=0$. Since $\langle v|v\rangle>0$, we get $\lambda=\lambda^*$, so $\lambda$ is real.`,
          check: chk(r`In the proof of Theorem 1, moving $A$ to the left of the bracket turns $\lambda$ into…`, r`$\lambda^*$, the complex conjugate`, r`$-\lambda$`, r`$1/\lambda$`, r`Pulling a number out of the left slot of an inner product conjugates it, so $\langle Av|v\rangle=\lambda^*\langle v|v\rangle$.`, "Eigenvalue"),
        },
        {
          title: "Theorem 2: distinct eigenvalues give orthogonal vectors",
          text: r`Let $A|v\rangle=\lambda|v\rangle$ and $A|w\rangle=\mu|w\rangle$ with $\lambda\ne\mu$ (both real by Theorem 1). Compute $\langle w|Av\rangle$ twice: it equals $\lambda\langle w|v\rangle$, and, moving $A$ to the left, $\langle Aw|v\rangle=\mu\langle w|v\rangle$. So $(\lambda-\mu)\langle w|v\rangle=0$, and since $\lambda\ne\mu$, $\langle w|v\rangle=0$.`,
          check: chk(r`Why can we conclude $\langle w|v\rangle=0$ from $(\lambda-\mu)\langle w|v\rangle=0$?`, r`Because $\lambda\ne\mu$, so the factor $\lambda-\mu$ is not zero`, r`Because $\lambda$ and $\mu$ are both $0$`, r`Because $|v\rangle$ and $|w\rangle$ have length 1`, r`A product of two numbers is $0$ only if one of them is $0$. The first factor is not.`, "Orthogonality"),
        },
        {
          title: "Theorem 3: plan and the one-dimensional start",
          text: r`We prove by induction on the dimension $n$ that a Hermitian $A$ on an $n$-dimensional space has an orthonormal basis of eigenvectors. For $n=1$, any unit vector is an eigenvector of the $1\times1$ matrix $A$ and forms a basis, so the claim holds.`,
          check: chk(r`What does a proof by induction on the dimension $n$ need to show?`, r`The claim for $n=1$, and that the claim for $n-1$ gives the claim for $n$`, r`The claim for $n=1$ and $n=2$ only`, r`The claim for infinitely large $n$`, r`Induction proves a ladder of statements: a first rung (base case) and a step from one rung to the next, see [[Mathematical Induction|mathematical induction]].`, "Mathematical Induction"),
        },
        {
          title: "Find one eigenvector",
          text: r`Let $n\ge2$. The [[Secular Equation|secular equation]] $\det(A-\lambda I)=0$ is a polynomial equation of degree $n$, and by the [[Fundamental Theorem of Algebra|fundamental theorem of algebra]] it has a complex root $\lambda_1$. So there is a vector $|e_1\rangle\ne0$ with $A|e_1\rangle=\lambda_1|e_1\rangle$; rescale it to length $1$.`,
          check: chk(r`Why does every operator on a complex space have at least one eigenvector?`, r`The secular equation is a polynomial that has a complex root`, r`Because every vector is an eigenvector`, r`Because operators are always diagonal`, r`The determinant condition is a degree-$n$ polynomial in $\lambda$, and complex polynomials always have a root.`, "Fundamental Theorem of Algebra"),
        },
        {
          title: "The perpendicular space is invariant",
          text: r`Let $W$ be the set of all vectors perpendicular to $|e_1\rangle$; it has dimension $n-1$. If $|w\rangle\in W$, then $\langle e_1|Aw\rangle=\langle Ae_1|w\rangle=\lambda_1^*\langle e_1|w\rangle=0$ (using that $\lambda_1$ is real and $\langle e_1|w\rangle=0$). So $A|w\rangle$ is again perpendicular to $|e_1\rangle$: $A$ maps $W$ into $W$.`,
          check: chk(r`What does "$W$ is invariant under $A$" mean here?`, r`$A|w\rangle$ stays in $W$ for every $|w\rangle$ in $W$`, r`$A|w\rangle=0$ for every $|w\rangle$ in $W$`, r`$W$ contains only eigenvectors of $A$ with eigenvalue 1`, r`An [[Invariant Subspace|invariant subspace]] is mapped into itself by the operator.`, "Invariant Subspace"),
        },
        {
          title: "Use the induction hypothesis",
          text: r`On $W$ the restricted operator $A|_W$ is still Hermitian, since the identity $\langle u|Av\rangle=\langle Au|v\rangle$ holds for all vectors, in particular those in $W$. By the induction hypothesis ($\dim W=n-1$) it has an orthonormal basis $|e_2\rangle,\ldots,|e_n\rangle$ of eigenvectors. These are eigenvectors of $A$ itself, and they are perpendicular to $|e_1\rangle$ because they lie in $W$. So $|e_1\rangle,\ldots,|e_n\rangle$ is an orthonormal basis of eigenvectors.`,
          check: chk(r`Why are $|e_2\rangle,\ldots,|e_n\rangle$ automatically perpendicular to $|e_1\rangle$?`, r`They were chosen inside $W$, the space perpendicular to $|e_1\rangle$`, r`Because their eigenvalues differ from $\lambda_1$`, r`Because $A$ is Hermitian, so everything is perpendicular`, r`$W$ was defined as everything perpendicular to $|e_1\rangle$. This also works when an eigenvalue repeats, which is why no separate Gram–Schmidt argument is needed.`, "Orthonormal Basis"),
        },
      ],
      conclusion: r`The eigenvalues are real, eigenvectors of distinct eigenvalues are orthogonal, and in finite dimensions the eigenvectors can be chosen to form a complete orthonormal basis. $\blacksquare$`,
      example: {
        text: r`For $\sigma_x$: $\det(\sigma_x-\lambda I)=\lambda^2-1=0$ gives $\lambda_1=1$ with $e_1=\tfrac1{\sqrt2}(1,1)$. The vectors perpendicular to $e_1$ are the multiples of $(1,-1)$; indeed $\sigma_x(1,-1)=(-1,1)=-(1,-1)$, so $W$ is invariant and $e_2=\tfrac1{\sqrt2}(1,-1)$ with $\lambda_2=-1$.`,
      },
    },
    question: {
      faq: [
        { q: r`What is a Hermitian operator?`, a: r`An operator with $A=A^\dagger$, equivalently $\langle u|Av\rangle=\langle Au|v\rangle$ for all vectors. See [[Hermitian Operator|Hermitian operator]].` },
        { q: r`What is an eigenvalue and an eigenvector?`, a: r`A nonzero vector $|v\rangle$ with $A|v\rangle=\lambda|v\rangle$ is an [[Eigenvector|eigenvector]], and the number $\lambda$ is its [[Eigenvalue|eigenvalue]].` },
        { q: r`What does "complete orthonormal basis" mean?`, a: r`The vectors have length 1, are mutually perpendicular, and every vector in the space can be written as a combination of them.` },
        { q: r`Why do the three theorems matter for physics?`, a: r`Real eigenvalues are the possible measurement results, orthogonal eigenvectors are mutually exclusive outcomes, and completeness means every state can be expanded in the outcomes.` },
        { q: r`How do I know my proof is complete?`, a: r`Prove reality (compute $\langle v|Av\rangle$ two ways), orthogonality (compute $\langle w|Av\rangle$ two ways), and completeness (base case, one eigenvector, invariant perpendicular space, induction).` },
      ],
      keywords: [
        "Hermitian operator|self-adjoint|A equals A dagger", "observable|physical observable", "eigenvalue|characteristic value", "eigenvector|eigenstate", "real eigenvalues|eigenvalue is real|lambda equals lambda star",
        "complex conjugate|conjugate", "inner product|bracket", "move the operator|move A across", "distinct eigenvalues|different eigenvalues", "orthogonal eigenvectors|orthogonality",
        "complete basis|completeness|spans the space", "orthonormal basis|orthonormal", "induction|mathematical induction", "secular equation|characteristic equation|determinant", "fundamental theorem of algebra|polynomial has a root",
        "invariant subspace|invariant", "orthogonal complement|perpendicular space", "restriction|restricted operator", "degenerate|repeated eigenvalue|degeneracy", "Gram-Schmidt|Gram Schmidt",
      ],
      retryPrompt: r`Without looking, explain in your own words why the eigenvalues of a Hermitian operator are real, why eigenvectors of distinct eigenvalues are orthogonal, and how induction produces a full orthonormal basis. Then write $A|v\rangle=\lambda|v\rangle$ in the LaTeX box and recall the key words.`,
      sourcePageText: r`6. Prove that the eigenvalues of a Hermitian operator are real. 7. Prove that eigenvectors belonging to distinct eigenvalues of a Hermitian operator are orthogonal. C1. Hermitian operators represent physical observables in quantum mechanics. Formulate and prove the three major theorems concerning Hermitian operators: Theorem 1: The eigenvalues of a Hermitian operator are strictly real. Theorem 2: The eigenvectors of a Hermitian operator corresponding to distinct eigenvalues are mutually orthogonal. Theorem 3: The eigenvectors of a Hermitian operator form a complete orthonormal basis for the vector space.`,
    },
  }),

  problem({
    id: "commuting-eigenvectors",
    name: "Commuting Operators and Common Eigenvectors",
    group: "eigen",
    symbol: r`[A,B]=0`,
    prerequisites: ["Three Theorems of Hermitian Operators", "Eigenspace", "Eigenvalue", "Eigenvector", "Commutator", "Invariant Subspace", "Operator Restriction", "Hermitian Operator", "Orthonormal Basis"],
    ross: { n: "A10 · A11", label: "Module 3 · Section A Q10 and Q11", section: "B", page: 1 },
    title: "Simultaneous eigenvectors and degeneracy",
    statement: r`(a) What can be said about simultaneous eigenvectors of commuting operators? (b) What is a degenerate eigenvalue? We prove for commuting Hermitian operators $\hat A,\hat B$ on a finite-dimensional space that there is an orthonormal basis of vectors that are eigenvectors of both, and we explain why degeneracy forces us to choose them carefully.`,
    meaning: r`Two observables that commute can be known exactly at the same time, because there are states that are eigenstates of both. When an eigenvalue is repeated (degenerate), not every eigenvector of one operator works for the other.`,
    linkedFormal: r`If $[\hat A,\hat B]=0$ for Hermitian $\hat A,\hat B$, there is an orthonormal basis of common eigenvectors. An eigenvalue $\lambda$ of $\hat A$ is degenerate if its [[Eigenspace|eigenspace]] $E_\lambda=\{v:\hat Av=\lambda v\}$ has dimension greater than $1$ (two or more independent eigenvectors share it). Conversely, a common eigenbasis forces $[\hat A,\hat B]=0$.`,
    example: r`Let $A=\mathrm{diag}(2,2,5)$ and $B=\mathrm{diag}(1,3,4)$. They commute. The eigenvalue $2$ of $A$ is degenerate with eigenspace spanned by $e_1,e_2$, and $B$ separates this plane into the two eigenvectors $e_1$ (value $1$) and $e_2$ (value $3$). Together $e_1,e_2,e_3$ are common eigenvectors.`,
    pretest: {
      prompt: r`For $A=\mathrm{diag}(2,2,5)$, how many linearly independent eigenvectors have the eigenvalue $2$?`,
      options: [r`Two`, r`One`, r`Three`],
      correct: 0,
      explanation: r`$A(x,y,z)=(2x,2y,5z)$ equals $2(x,y,z)$ exactly when $z=0$, so the eigenvectors are all $(x,y,0)$. That plane has dimension $2$. The eigenvalue $2$ is degenerate.`,
    },
    check: chk(
      r`An eigenvalue is called degenerate when…`,
      r`Its eigenspace has dimension greater than 1`,
      r`It equals zero`,
      r`It is a complex number`,
      r`Degenerate means that several independent eigenvectors share one eigenvalue, so the [[Eigenspace|eigenspace]] is more than a line.`,
    ),
    faq: [
      { q: r`Does "degenerate" mean "bad"?`, a: r`No, it only means "repeated". For example the identity operator on a plane has the single eigenvalue $1$ with a two-dimensional eigenspace.` },
      { q: r`Why does commuting matter physically?`, a: r`Commuting observables can be measured together without disturbing each other: there are states with exact values of both, labelled by the pair of eigenvalues.` },
      { q: r`What goes wrong if the operators do not commute?`, a: r`Then no basis diagonalizes both: for $\sigma_x$ and $\sigma_z$ the eigenvectors of one are not eigenvectors of the other.` },
    ],
    proof: {
      idea: r`If $B$ commutes with $A$, then $B$ sends every eigenvector of $A$ to another vector with the same eigenvalue of $A$. So $B$ acts inside each eigenspace of $A$, and there we can diagonalize it with the theorems for Hermitian operators.`,
      steps: [
        {
          title: "What degenerate means",
          text: r`The set $E_\lambda=\{v:\hat Av=\lambda v\}$ is a vector space, the eigenspace of $\lambda$. If $\dim E_\lambda=1$ the eigenvalue is nondegenerate; if $\dim E_\lambda>1$ it is degenerate: then there are many different eigenvectors for the same eigenvalue (every nonzero vector of $E_\lambda$).`,
          check: chk(r`If $\hat A=\mathrm{diag}(2,2,5)$, which eigenvalue is degenerate?`, r`$2$, because its eigenspace is a plane`, r`$5$, because it is the largest`, r`None of them`, r`Eigenvalue $2$ has eigenvectors $(x,y,0)$ forming a two-dimensional [[Eigenspace|eigenspace]]. Eigenvalue $5$ has only multiples of $(0,0,1)$.`, "Eigenspace"),
        },
        {
          title: "B maps each eigenspace of A into itself",
          text: r`Let $v\in E_\lambda$, that is $\hat Av=\lambda v$. Then $\hat A(\hat Bv)=\hat B(\hat Av)=\hat B(\lambda v)=\lambda(\hat Bv)$, where the first equality uses $\hat A\hat B=\hat B\hat A$. So $\hat Bv$ is again an eigenvector of $\hat A$ with eigenvalue $\lambda$: $\hat Bv\in E_\lambda$. Thus $E_\lambda$ is an [[Invariant Subspace|invariant subspace]] of $\hat B$.`,
          check: chk(r`Which equality in $\hat A(\hat Bv)=\hat B(\hat Av)$ uses that the operators commute?`, r`Swapping the order of $\hat A$ and $\hat B$`, r`Pulling the number $\lambda$ out`, r`Replacing $v$ by $0$`, r`Commuting means exactly that $\hat A\hat B$ and $\hat B\hat A$ give the same result.`, "Commutator"),
        },
        {
          title: "Nondegenerate eigenvalue: done",
          text: r`If $E_\lambda$ is a line (nondegenerate), then $\hat Bv$ lies in this line, so $\hat Bv=\mu v$ for some number $\mu$. Hence $v$ is an eigenvector of $\hat B$ as well, and no choice has to be made.`,
          check: chk(r`If $E_\lambda$ is a line spanned by $v$ and $\hat Bv\in E_\lambda$, what follows?`, r`$\hat Bv=\mu v$ for some number $\mu$`, r`$\hat Bv=0$`, r`$v$ is not an eigenvector of $\hat A$`, r`Every vector in a line is a multiple of $v$, so $\hat Bv=\mu v$.`, "Eigenvector"),
        },
        {
          title: "Degenerate eigenvalue: diagonalize B inside E",
          text: r`If $\dim E_\lambda>1$, the restriction of $\hat B$ to $E_\lambda$ is a Hermitian operator on the smaller space $E_\lambda$ (see [[Operator Restriction|operator restriction]]). By the theorems for Hermitian operators it has an orthonormal basis of eigenvectors of $\hat B$. These vectors lie in $E_\lambda$, so they are also eigenvectors of $\hat A$ (with eigenvalue $\lambda$): they are common eigenvectors.`,
          check: chk(r`Why are the eigenvectors of $\hat B|_{E_\lambda}$ also eigenvectors of $\hat A$?`, r`Every vector in $E_\lambda$ is an eigenvector of $\hat A$ with eigenvalue $\lambda$`, r`Because $\hat A=\hat B$`, r`Because $\hat A$ is the identity on the whole space`, r`$E_\lambda$ was defined as the set of vectors with $\hat Av=\lambda v$, so whatever we pick inside it is an eigenvector of $\hat A$.`, "Operator Restriction"),
        },
        {
          title: "Put all eigenspaces together",
          text: r`The eigenspaces of $\hat A$ for distinct eigenvalues are mutually perpendicular and together span the whole space (the three theorems). Choosing in each one an orthonormal basis of common eigenvectors, as in the previous steps, gives an orthonormal basis of the whole space made of vectors that are eigenvectors of both $\hat A$ and $\hat B$.`,
          check: chk(r`Why do the common eigenvectors from different eigenspaces of $\hat A$ remain perpendicular?`, r`Eigenvectors of $\hat A$ with different eigenvalues are orthogonal`, r`Because we normalise them`, r`Because $\hat B$ is the zero operator`, r`This is Theorem 2 for the Hermitian operator $\hat A$, see [[Orthonormal Basis|orthonormal basis]].`, "Orthonormal Basis"),
        },
        {
          title: "Why degeneracy needs care, and the converse",
          text: r`Take $\hat A=I$ (everything is degenerate): every vector is an eigenvector of $\hat A$, yet for $\hat B=\sigma_x$ only $(1,1)$ and $(1,-1)$ (up to multiples) are eigenvectors. So with a degenerate eigenvalue an arbitrary eigenvector of $\hat A$ need not be an eigenvector of $\hat B$: commuting only guarantees that a good choice exists. Conversely, if $e_k$ are common eigenvectors with $\hat Ae_k=a_ke_k$ and $\hat Be_k=b_ke_k$, then $\hat A\hat Be_k=a_kb_ke_k=\hat B\hat Ae_k$ for every basis vector, so $[\hat A,\hat B]=0$.`,
          check: chk(r`For $\hat A=I$ and $\hat B=\sigma_x$, is every eigenvector of $\hat A$ an eigenvector of $\hat B$?`, r`No, only the vectors along $(1,1)$ and $(1,-1)$ are`, r`Yes, every vector is an eigenvector of $\sigma_x$`, r`No, $I$ has no eigenvectors`, r`$I$ has the eigenvalue $1$ with every vector, but $\sigma_x$ only keeps the directions of $(1,\pm1)$. In a degenerate eigenspace one must choose the basis adapted to $\hat B$.`, "Eigenvector"),
        },
      ],
      conclusion: r`Commuting Hermitian operators have a common orthonormal eigenbasis, and conversely. For a degenerate eigenvalue of $\hat A$ the second operator must be used to choose the basis inside its eigenspace. $\blacksquare$`,
      example: {
        text: r`$\hat A=\mathrm{diag}(2,2,5)$, $\hat B=\mathrm{diag}(1,3,4)$. $E_2=\mathrm{span}(e_1,e_2)$ and $\hat B$ maps $E_2$ into itself with eigenvectors $e_1,e_2$ (values $1,3$). The common eigenbasis $e_1,e_2,e_3$ labels states by the pairs $(2,1),(2,3),(5,4)$: the eigenvalues of $\hat A$ alone could not tell $e_1$ from $e_2$.`,
      },
    },
    question: {
      faq: [
        { q: r`What does "simultaneous eigenvector" mean?`, a: r`A vector $v$ that is an eigenvector of both operators at once: $\hat Av=a v$ and $\hat Bv=b v$.` },
        { q: r`What does "commuting operators" mean?`, a: r`$[\hat A,\hat B]=\hat A\hat B-\hat B\hat A=0$: the order of applying them does not matter. See [[Commutator|commutator]].` },
        { q: r`What is an eigenspace?`, a: r`The set of all vectors with $\hat Av=\lambda v$ for a fixed $\lambda$ (together with the zero vector). See [[Eigenspace|eigenspace]].` },
        { q: r`Is a degenerate eigenvalue a problem?`, a: r`Not really. It only means that the eigenvalue alone does not fix the state; a second commuting observable can fix it. This is why physicists look for a "complete set of commuting observables".` },
        { q: r`How do I know my answer is complete?`, a: r`State what degenerate means, prove that $\hat B$ preserves each eigenspace of $\hat A$, diagonalize $\hat B$ inside each one, and explain with an example why degeneracy needs this extra step.` },
      ],
      keywords: [
        "commuting operators|commute|commutator zero", "simultaneous eigenvectors|common eigenvectors|shared eigenvectors", "degenerate eigenvalue|degeneracy|repeated eigenvalue", "eigenspace", "dimension greater than one|more than one eigenvector|two independent eigenvectors",
        "nondegenerate|non-degenerate|single eigenvector", "A B equals B A|AB=BA|order does not matter", "invariant subspace|B maps eigenspace into itself", "restriction|restricted operator|B restricted", "Hermitian operator|Hermitian",
        "orthonormal basis|common eigenbasis", "diagonalize|diagonalise|diagonalization", "choose the basis|choose carefully|basis adapted", "distinct eigenvalues|orthogonal eigenspaces", "converse|common eigenbasis implies commuting",
        "identity operator|identity matrix", "sigma x|Pauli matrix", "complete set of commuting observables|CSCO", "simultaneous measurement|measured together|compatible observables",
      ],
      retryPrompt: r`Without looking, explain in your own words why commuting Hermitian operators share an eigenbasis, what a degenerate eigenvalue is, and why degeneracy means you must choose the eigenvectors carefully. Then write $[\hat A,\hat B]=0$ in the LaTeX box and recall the key words.`,
      sourcePageText: r`10. What can be said about simultaneous eigenvectors of commuting operators? 11. What is a degenerate eigenvalue?`,
    },
  }),
];

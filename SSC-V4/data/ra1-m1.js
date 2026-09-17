/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis I · Module 1: Introduction to Set Theory
   Sections: 1.1 (Sets & Functions), 1.2 (Induction), 1.3 (Finite & Infinite Sets)
   Written in crystal-clear Indian English (Class 12 / Undergrad friendly).
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.1.1.1', bartle: '1.1.1', sec: '1.1', kind: 'definition', tier: 'core',
    title: 'Functions: Injective, Surjective, and Bijective',
    oneLine: 'A function sends each input to one output. Injective = no two inputs share an output; Surjective = every target is hit.',
    statement: `Let $A$ and $B$ be sets. A function $f: A \\to B$ is:
      <p>(a) <b>Injective</b> (one-to-one) if whenever $x_1, x_2 \\in A$ with $f(x_1) = f(x_2)$, then $x_1 = x_2$. Equivalently, if $x_1 \\ne x_2$, then $f(x_1) \\ne f(x_2)$.</p>
      <p>(b) <b>Surjective</b> (onto) if for every $y \\in B$, there exists at least one $x \\in A$ such that $f(x) = y$. In other words, range $f(A) = B$.</p>
      <p>(c) <b>Bijective</b> (one-to-one correspondence) if it is both injective and surjective.</p>`,
    intuition: `<p>In Class 12, we learned "one-one" and "onto" functions. Think of it like roll numbers and college seats:</p>
      <p>• <b>Injective (One-One):</b> No two students get the exact same roll number. Two different inputs never hit the same output.</p>
      <p>• <b>Surjective (Onto):</b> No seat is left empty. Every single element in the target set $B$ is reached by at least one student.</p>
      <p>• <b>Bijective:</b> A perfect match! Every student gets exactly one unique seat, and every seat has exactly one student. Because it is a perfect match, you can run it backwards (inverse function exists!).</p>`,
    needs: ['s.quantifier'],
    traps: [
      `Mixing up codomain with range: $f(x) = x^2$ with $f: \\mathbb{R} \\to \\mathbb{R}$ is NOT surjective because negative numbers in codomain $\\mathbb{R}$ are never hit.`,
      `Forgetting that to prove injective, you assume $f(x_1) = f(x_2)$ and your only goal is to deduce $x_1 = x_2$.`
    ],
    cards: [
      { q: 'What is the algebraic definition of an injective function $f: A \\to B$?', a: '$f(x_1) = f(x_2) \\implies x_1 = x_2$ for all $x_1, x_2 \\in A$.', kind: 'state' },
      { q: 'Is $f: \\mathbb{R} \\to \\mathbb{R}$ given by $f(x) = x^2$ injective?', a: 'No, because $f(-2) = f(2) = 4$, so two distinct inputs produce the same output.', kind: 'apply' },
      { q: 'What two conditions are required for a function to have a well-defined two-sided inverse?', a: 'It must be both injective and surjective (i.e. bijective).', kind: 'recall' }
    ]
  },

  {
    id: 'c.1.1.2', bartle: '1.1.2', sec: '1.1', kind: 'definition', tier: 'core',
    title: 'Inverse Functions and Composition',
    oneLine: 'If f is a bijection, f inverse uniquely undoes what f did.',
    statement: `Let $f: A \\to B$ be a bijection. The <b>inverse function</b> $f^{-1}: B \\to A$ is defined by:
      $$f^{-1}(y) = x \\iff f(x) = y \\quad \\text{for } y \\in B, x \\in A$$
      For any $g: B \\to C$ and $f: A \\to B$, the <b>composition</b> $(g \\circ f): A \\to C$ is defined by $(g \\circ f)(x) = g(f(x))$.`,
    intuition: `<p>Think of $f$ as locking a box with a key, and $f^{-1}$ as unlocking it. To unlock safely, every key must belong to exactly one lock (injective), and every lock must have a key (surjective).</p>
      <p>Notice that $f^{-1}(f(x)) = x$ for all $x \\in A$, and $f(f^{-1}(y)) = y$ for all $y \\in B$. Composition just chains steps: first apply $f$, then apply $g$.</p>`,
    needs: ['c.1.1.1'],
    traps: [
      `Do not confuse $f^{-1}(x)$ (the inverse function) with $\\frac{1}{f(x)}$ (the reciprocal). They are completely different!`,
      `Remember that $(g \\circ f)^{-1} = f^{-1} \\circ g^{-1}$ (the socks-and-shoes rule: putting on socks then shoes is reversed by taking off shoes first, then socks!).`
    ],
    cards: [
      { q: 'If $f: A \\to B$ and $g: B \\to C$ are both bijections, what is $(g \\circ f)^{-1}$?', a: '$f^{-1} \\circ g^{-1}$ (the order reverses).', kind: 'recall' },
      { q: 'Can a non-injective function have an inverse function?', a: 'No, because the inverse would have to send one input to multiple outputs, which violates the definition of a function.', kind: 'apply' }
    ]
  },

  {
    id: 'c.1.2.1', bartle: '1.2.1', sec: '1.2', kind: 'theorem', tier: 'core',
    title: 'Principle of Mathematical Induction',
    oneLine: 'If step 1 stands, and every step knocks down the next step, all dominoes fall.',
    statement: `Let $S$ be a subset of $\\mathbb{N}$ such that:
      <p>(1) $1 \\in S$ (Base step).</p>
      <p>(2) For every $k \\in \\mathbb{N}$, if $k \\in S$, then $k + 1 \\in S$ (Inductive step).</p>
      <p>Then $S = \\mathbb{N}$; the statement holds for every natural number $n \\in \\mathbb{N}$.</p>`,
    intuition: `<p>Domino effect! If you push the first domino ($1 \\in S$), and you make sure every domino is close enough to knock down the next one ($k \\in S \\implies k+1 \\in S$), then no matter how long the line of dominoes is, every single one will eventually fall.</p>
      <p>This relies fundamentally on the <b>Well-Ordering Property of $\\mathbb{N}$</b>: every non-empty subset of natural numbers has a least element.</p>`,
    needs: ['s.quantifier'],
    traps: [
      `Forgetting to verify the base case ($n = 1$). Without the base case, the chain is never pushed!`,
      `Assuming the statement holds for $k+1$ inside the proof — you must assume $k$ holds and *derive* $k+1$.`
    ],
    proof: {
      idea: 'Assume the complement $E = \\mathbb{N} \\setminus S$ is non-empty and apply the Well-Ordering Property of $\\mathbb{N}$.',
      why: 'If counterexamples exist, there must be a smallest one $m > 1$; then $m-1 \\in S$, which forces $m \\in S$, a contradiction.',
      rungs: [
        { why: 'Suppose for contradiction that $S \\ne \\mathbb{N}$, and let $E$ be the set of elements not in $S$.', m: 'E = \\mathbb{N} \\setminus S \\ne \\emptyset' },
        { why: 'By the Well-Ordering Property of $\\mathbb{N}$, every non-empty subset of natural numbers has a least element $m$.', m: 'm = \\min(E) \\in E' },
        { why: 'Since hypothesis (1) gives $1 \\in S$, $m$ cannot be $1$, so $m > 1$ and $m - 1 \\in \\mathbb{N}$.', m: '1 \\in S \\implies m > 1 \\implies m - 1 \\in \\mathbb{N}' },
        { why: 'Because $m$ is the least element of $E$, the strictly smaller number $m - 1$ cannot belong to $E$, hence $m - 1 \\in S$.', m: 'm - 1 \\notin E \\implies m - 1 \\in S' },
        { why: 'By hypothesis (2), since $m - 1 \\in S$, the successor $(m - 1) + 1 = m$ must also belong to $S$, contradicting $m \\in E$.', m: 'm = (m - 1) + 1 \\in S \\quad \\text{contradicts} \\quad m \\in E' }
      ],
      ends: 'Therefore $E = \\emptyset$, which proves $S = \\mathbb{N}$.'
    },
    cards: [
      { q: 'What fundamental property of $\\mathbb{N}$ justifies the Principle of Mathematical Induction?', a: 'The Well-Ordering Property: every non-empty subset of $\\mathbb{N}$ has a smallest element.', kind: 'state' },
      { q: 'What are the two mandatory steps in an induction proof?', a: '(1) Base step: verify for $n=1$. (2) Inductive step: assume true for $n=k$ and prove for $n=k+1$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.1.2.2', bartle: '1.2.2', sec: '1.2', kind: 'theorem', tier: 'core',
    title: 'The Well-Ordering Property of ℕ',
    oneLine: 'Every non-empty subset of natural numbers contains a unique smallest element.',
    statement: `<b>Well-Ordering Property of $\\mathbb{N}$ (Axiom):</b> If $S$ is a non-empty subset of $\\mathbb{N}$, then there exists an element $m \\in S$ such that:
      $$m \\le s \\quad \\text{for all } s \\in S$$
      This unique element $m$ is called the <b>least element</b> (or minimum) of $S$.`,
    intuition: `<p>On a staircase of positive integers $1, 2, 3, \\dots$, you cannot walk downward forever! If you select ANY bunch of steps (a subset $S$), there has to be a lowest step among them.</p>
      <p>This property distinguishes $\\mathbb{N}$ from $\\mathbb{Z}$, $\\mathbb{Q}$, and $\\mathbb{R}$. For instance, the positive rationals $\\mathbb{Q}^+$ have NO smallest element (half of any positive rational is even smaller!).</p>`,
    needs: ['s.quantifier'],
    traps: [
      `The set $S$ MUST be non-empty ($S \\ne \\emptyset$) and must consist of natural numbers.`,
      `Does NOT hold for $\\mathbb{Z}$ (integers go down to $-\\infty$) or open intervals like $(0, 1) \\subset \\mathbb{R}$ (infimum is $0$, but $0 \\notin (0, 1)$).`
    ],
    proof: {
      idea: 'Show that the Well-Ordering Property is logically equivalent to the Principle of Mathematical Induction.',
      why: 'If a set without a least element existed, induction on its complement would prove the set is empty.',
      rungs: [
        { why: 'Let $S \\subseteq \\mathbb{N}$ be a subset that has no least element. We will prove $S = \\emptyset$.', m: 'S \\subseteq \\mathbb{N} \\text{ has no least element}' },
        { why: 'Define $T = \\mathbb{N} \\setminus S$. We show $T = \\mathbb{N}$ using induction. First, $1 \\in T$, because if $1 \\in S$, $1$ would be the least element of $S$ (since $1 \\le s$ for all $s \\in \\mathbb{N}$).', m: '1 \\in T' },
        { why: 'Assume $\{1, 2, \\ldots, k\} \\subseteq T$. Then no number $\\le k$ belongs to $S$.', m: 's \\in S \\implies s > k' },
        { why: 'If $k + 1 \\in S$, then $k + 1$ would be smaller than all other elements of $S$, making it the least element of $S$, a contradiction. Thus $k + 1 \\in T$.', m: 'k + 1 \\in T' },
        { why: 'By induction, $T = \\mathbb{N}$, which forces $S = \\emptyset$.', m: 'T = \\mathbb{N} \\implies S = \\emptyset' }
      ],
      ends: 'Therefore, every non-empty subset of $\\mathbb{N}$ must have a least element.'
    },
    cards: [
      { q: 'State the Well-Ordering Property of $\\mathbb{N}$.', a: 'Every non-empty subset of $\\mathbb{N}$ has a least element.', kind: 'state' },
      { q: 'Does the Well-Ordering Property hold for the set of positive rational numbers $\\mathbb{Q}^+$?', a: 'No, $\\mathbb{Q}^+$ has no smallest element (for any $q > 0$, $q/2 > 0$ is smaller).', kind: 'apply' }
    ]
  },

  {
    id: 'c.1.2.3', bartle: '1.2.3', sec: '1.2', kind: 'theorem', tier: 'core',
    title: 'Principle of Strong Induction',
    oneLine: 'Assume the statement holds for ALL predecessors 1, 2, ..., k to prove it for k + 1.',
    statement: `Let $S$ be a subset of $\\mathbb{N}$ such that:
      <p>(1) $1 \\in S$.</p>
      <p>(2) For every $k \\in \\mathbb{N}$, if $\\{1, 2, \\ldots, k\\} \\subseteq S$, then $k + 1 \\in S$.</p>
      <p>Then $S = \\mathbb{N}$.</p>`,
    intuition: `<p>Standard induction assumes only that the single immediately preceding step $k$ holds. <b>Strong induction gives you a much stronger assumption:</b> you get to assume that EVERY step from $1$ up to $k$ holds!</p>
      <p>Think of prime factorization: every number $n > 1$ is either prime or factors into $a \\cdot b$ with $a, b < n$. You need the induction hypothesis to hold for both $a$ and $b$, not just $n-1$. Strong induction is tailor-made for such proofs.</p>`,
    needs: ['c.1.2.1'],
    traps: [
      `Even though it is called "strong" induction, it is mathematically 100% equivalent in power to standard induction! It doesn't prove anything standard induction cannot prove; it is just more convenient.`,
      `Don't forget the base case ($1 \\in S$) still needs to be established.`
    ],
    proof: {
      idea: 'Define an auxiliary property $T_k = \\{1, 2, \\ldots, k\\} \\subseteq S$ and apply standard induction to $T_k$.',
      why: 'Proving $T_k$ holds for all $k$ by standard induction directly establishes that $k \\in S$ for all $k$.',
      rungs: [
        { why: 'Define $T = \\{k \\in \\mathbb{N} : \\{1, 2, \\ldots, k\\} \\subseteq S\\}$.', m: 'k \\in T \\iff \\{1, \\ldots, k\\} \\subseteq S' },
        { why: 'Base step: Since $1 \\in S$ by hypothesis (1), $\\{1\\} \\subseteq S$, so $1 \\in T$.', m: '1 \\in T' },
        { why: 'Inductive step: Assume $k \\in T$. Then $\\{1, \\ldots, k\\} \\subseteq S$.', m: '\\{1, \\ldots, k\\} \\subseteq S' },
        { why: 'By hypothesis (2), this implies $k + 1 \\in S$. Combining $\\{1, \\ldots, k\\} \\subseteq S$ and $k + 1 \\in S$ gives $\\{1, \\ldots, k+1\\} \\subseteq S$.', m: '\\{1, \\ldots, k+1\\} \\subseteq S \\implies k + 1 \\in T' },
        { why: 'By standard induction (1.2.1), $T = \\mathbb{N}$. Since $k \\in T \\implies k \\in S$, we have $S = \\mathbb{N}$.', m: 'T = \\mathbb{N} \\implies S = \\mathbb{N}' }
      ],
      ends: 'Strong induction is proved equivalent to standard mathematical induction.'
    },
    cards: [
      { q: 'State the inductive hypothesis in Strong Induction.', a: 'Assume the statement holds for all integers from $1$ up to $k$: $\\{1, 2, \\ldots, k\\} \\subseteq S$.', kind: 'state' },
      { q: 'Is Strong Induction logically stronger than standard induction?', a: 'No, they are logically equivalent; any proof using strong induction can be rephrased using standard induction.', kind: 'recall' }
    ]
  },

  {
    id: 'c.1.3.1', bartle: '1.3.1', sec: '1.3', kind: 'definition', tier: 'core',
    title: 'Finite, Countably Infinite, and Uncountable Sets',
    oneLine: 'Countable means you can line up the elements in a 1st, 2nd, 3rd sequence without missing any.',
    statement: `Let $S$ be a set.
      <p>(a) $S$ is <b>finite</b> if it is empty or there exists a bijection from $\\{1, 2, \\ldots, n\\}$ onto $S$ for some $n \\in \\mathbb{N}$.</p>
      <p>(b) $S$ is <b>countably infinite</b> (denumerable) if there exists a bijection $f: \\mathbb{N} \\to S$.</p>
      <p>(c) $S$ is <b>countable</b> if it is either finite or countably infinite.</p>
      <p>(d) $S$ is <b>uncountable</b> if it is not countable.</p>`,
    intuition: `<p>Think of natural numbers $\\mathbb{N} = \\{1, 2, 3, 4, \\ldots\\}$ as an infinite register. If you can give each element in your set a distinct roll number $1, 2, 3, \\ldots$ so that everyone gets called in order, your set is <b>countable</b>.</p>
      <p>If the set is so dense and packed that no list could ever cover them all (like all decimal numbers in $[0, 1]$), it is <b>uncountable</b>.</p>`,
    needs: ['c.1.1.1'],
    traps: [
      `Assuming "infinite" automatically means "uncountable". False: integers $\\mathbb{Z}$ and rationals $\\mathbb{Q}$ are infinite, yet both are strictly countable!`,
      `Confusing "countably infinite" with "countable": countable includes finite sets too.`
    ],
    cards: [
      { q: 'What does it mean for a set $S$ to be countably infinite?', a: 'There exists a bijection between the natural numbers $\\mathbb{N}$ and $S$.', kind: 'state' },
      { q: 'Is the set of integers $\\mathbb{Z} = \\{0, 1, -1, 2, -2, \\ldots\\}$ countable?', a: 'Yes, because we can list them in an alternating sequence: $f(1)=0, f(2)=1, f(3)=-1, f(4)=2, \\ldots$', kind: 'apply' }
    ]
  },

  {
    id: 'c.1.3.2', bartle: '1.3.2', sec: '1.3', kind: 'theorem', tier: 'core',
    title: 'Countability of Rationals and Uncountability of Reals',
    oneLine: 'Fractions can be neatly listed in a spiral grid, but real decimals are so infinite that any list misses numbers.',
    statement: `(a) The set of rational numbers $\\mathbb{Q}$ is <b>countable</b>.
      <p>(b) The set of real numbers $\\mathbb{R}$ (and the unit interval $[0, 1]$) is <b>uncountable</b>.</p>`,
    intuition: `<p>This was Georg Cantor's greatest discovery:</p>
      <p>• <b>Why $\\mathbb{Q}$ is countable:</b> Write fractions in a 2D grid where row is numerator and column is denominator. Snake through the grid diagonally like a snake. Every fraction is hit eventually! A countable union of countable sets is countable.</p>
      <p>• <b>Why $\\mathbb{R}$ is uncountable (Cantor's Diagonal Argument):</b> Suppose someone claims to have listed ALL decimals in $[0, 1]$ in a table. Cantor looks at the diagonal digits and creates a new decimal whose $n$-th digit differs from the $n$-th digit of the $n$-th number in the list. This new number is not in the list! Thus, no list can ever be complete.</p>`,
    needs: ['c.1.3.1'],
    traps: [
      `Thinking between any two rationals there is no gap so they must be uncountable. Density does NOT mean uncountability! Rationals are dense in $\\mathbb{R}$ but still countable.`,
      `Since $\\mathbb{R}$ is uncountable and $\\mathbb{Q}$ is countable, the irrationals $\\mathbb{R} \\setminus \\mathbb{Q}$ MUST be uncountable (uncountable minus countable is uncountable).`
    ],
    proof: {
      idea: 'Enumerate positive rationals $p/q$ via diagonals of a 2D grid, and prove $[0, 1]$ is uncountable using Cantor\\\'s diagonal construction.',
      why: 'Diagonal traversal visits all pairs $(p, q)$ systematically, while changing diagonal digits creates a real number that differs from every number in any proposed list.',
      rungs: [
        { why: 'Arrange positive rationals $p/q$ in an array with row $p$ and column $q$, and traverse finite diagonals $p + q = k$.', m: '1/1,\\, 1/2,\\, 2/1,\\, 3/1,\\, 2/2,\\, 1/3,\\, \\ldots' },
        { why: 'Omit fractions not in lowest terms. This yields a surjection from $\\mathbb{N}$ to $\\mathbb{Q}^+$, proving $\\mathbb{Q}^+$ is countable.', m: 'f: \\mathbb{N} \\to \\mathbb{Q}^+ \\implies \\mathbb{Q}^+ \\text{ is countable}' },
        { why: 'Since $\\mathbb{Q} = \\mathbb{Q}^+ \\cup \\{0\\} \\cup (-\\mathbb{Q}^+)$ is a union of three countable sets, $\\mathbb{Q}$ is countable.', m: '\\mathbb{Q} \\text{ is countable}' },
        { why: 'For $[0, 1]$, assume for contradiction that an enumeration $x_1, x_2, \\ldots$ exists. Write each in decimal expansion: $x_n = 0.d_{n1}d_{n2}d_{n3}\\ldots$', m: 'x_n = 0.d_{n1}d_{n2}d_{n3}\\ldots \\quad (d_{ni} \\in \\{0, \\ldots, 9\\})' },
        { why: 'Construct $y = 0.y_1 y_2 y_3 \\ldots \\in [0, 1]$ by choosing $y_n = 2$ if $d_{nn} = 1$, and $y_n = 1$ if $d_{nn} \\ne 1$.', m: 'y_n \\ne d_{nn} \\quad \\forall n \\in \\mathbb{N}' },
        { why: 'Then $y \\ne x_n$ for every $n \\in \\mathbb{N}$ because their decimal expansions differ at the $n$-th digit, contradicting the enumeration.', m: 'y \\in [0, 1] \\setminus \\{x_1, x_2, \\ldots\\}' }
      ],
      ends: 'Thus $[0, 1]$ cannot be enumerated, proving $\\mathbb{R}$ is uncountable.'
    },
    cards: [
      { q: 'Is the set of irrational numbers $\\mathbb{R} \\setminus \\mathbb{Q}$ countable or uncountable?', a: 'Uncountable. If it were countable, $\\mathbb{R} = \\mathbb{Q} \\cup (\\mathbb{R} \\setminus \\mathbb{Q})$ would be a countable union of countable sets, contradicting that $\\mathbb{R}$ is uncountable.', kind: 'apply' },
      { q: 'What famous proof technique shows that $[0, 1]$ cannot be put into a one-to-one correspondence with $\\mathbb{N}$?', a: "Cantor's diagonal argument.", kind: 'recall' },
      { q: 'State the countability of the sets $\\mathbb{Q}$ and $\\mathbb{R}$.', a: 'The set of rational numbers $\\mathbb{Q}$ is countable, whereas the set of real numbers $\\mathbb{R}$ is uncountable.', kind: 'state' }
    ]
  },

  {
    id: 'c.1.3.3', bartle: '1.3.8', sec: '1.3', kind: 'theorem', tier: 'core',
    title: 'Properties of Countable Sets: Subsets and Unions',
    oneLine: 'Any subset of a countable set is countable; a countable union of countable sets is countable.',
    statement: `(a) Any subset of a countable set is <b>countable</b>.
      <p>(b) If $A_n$ is a countable set for each $n \\in \\mathbb{N}$, then the union:
      $$A = \\bigcup_{n=1}^\\infty A_n$$
      is <b>countable</b>. (A countable union of countable sets is countable).</p>`,
    intuition: `<p>Think of countable sets as manageable lists:</p>
      <p>• If you take a subset of a list, you can just cross out the unwanted items. The remaining items form an even shorter list (still countable!).</p>
      <p>• If you have countably many lists, write list 1 on row 1, list 2 on row 2, list 3 on row 3... Then snake through the 2D grid diagonally (1st item of list 1, 1st of list 2, 2nd of list 1, etc.). Every single item in every list gets assigned a finite position!</p>`,
    needs: ['c.1.3.1'],
    traps: [
      `An UNCOUNTABLE union of countable sets can easily be uncountable! For example, $\\mathbb{R} = \\bigcup_{x \\in \\mathbb{R}} \\{x\\}$ is a union of singletons (each countable), but the total union is uncountable because the index set $\\mathbb{R}$ is uncountable.`,
      `Remember that subsets of infinite sets can be finite or countably infinite.`
    ],
    proof: {
      idea: 'For subsets, filter the original enumeration. For countable unions, arrange elements into an infinite array and list them along finite diagonals.',
      why: 'Each diagonal contains only finitely many elements, so numbering them systematically yields an enumeration of the whole union.',
      rungs: [
        { why: 'Let $S$ be countable and $E \\subseteq S$. If $E$ is finite, it is countable. If $E$ is infinite, let $S = \\{s_1, s_2, \\ldots\\}$. Define $n_1$ as the smallest index with $s_{n_1} \\in E$.', m: 'n_1 = \\min\\{k \\in \\mathbb{N} : s_k \\in E\\}' },
        { why: 'Inductively define $n_k = \\min\\{j > n_{k-1} : s_j \\in E\\}$. Then $k \\mapsto s_{n_k}$ is a bijection from $\\mathbb{N}$ to $E$, proving $E$ is countably infinite.', m: 'f(k) = s_{n_k} \\implies E \\text{ is countable}' },
        { why: 'For the union $A = \\bigcup_{n=1}^\\infty A_n$, list each set: $A_n = \\{a_{n1}, a_{n2}, a_{n3}, \\ldots\\}$. Arrange into a 2D array.', m: 'A_1 = \\{a_{11}, a_{12}, \\dots\\}, \\, A_2 = \\{a_{21}, a_{22}, \\dots\\}, \\dots' },
        { why: 'Traverse the diagonals $D_k = \\{a_{ij} : i + j = k\\}$ for $k = 2, 3, 4, \\ldots$. Each diagonal $D_k$ has at most $k - 1$ elements (finite).', m: 'a_{11},\\, a_{21},\\, a_{12},\\, a_{31},\\, a_{22},\\, a_{13},\\, \\ldots' },
        { why: 'Skipping duplicate elements defines a surjection from $\\mathbb{N}$ onto $A$, proving $A$ is countable.', m: 'g: \\mathbb{N} \\twoheadrightarrow A \\implies A \\text{ is countable}' }
      ],
      ends: 'Subsets of countable sets and countable unions of countable sets are countable.'
    },
    cards: [
      { q: 'Is every subset of a countable set countable?', a: 'Yes, every subset of a countable set is either finite or countably infinite (hence countable).', kind: 'state' },
      { q: 'If $A_1, A_2, A_3, \\dots$ are each countable sets, is $\\bigcup_{n=1}^\\infty A_n$ countable?', a: 'Yes, a countable union of countable sets is always countable.', kind: 'recall' }
    ]
  },

  {
    id: 'c.1.3.4', bartle: '1.3.12', sec: '1.3', kind: 'theorem', tier: 'core',
    title: 'Cantor’s Theorem on Power Sets',
    oneLine: 'A set is strictly smaller than the set of its subsets: there is no surjection from A to P(A).',
    statement: `For any set $A$, there is <b>no surjective function</b> from $A$ onto its power set $\\mathcal{P}(A)$.
      <p>Consequently, the cardinality of $\\mathcal{P}(A)$ is strictly greater than the cardinality of $A$:
      $$|A| < |\\mathcal{P}(A)|$$</p>`,
    intuition: `<p>This is Cantor's mind-bending discovery that <b>infinity has different sizes, and there is no largest infinity!</b></p>
      <p>• Start with $\\mathbb{N}$ (countable infinity).</p>
      <p>• Its power set $\\mathcal{P}(\\mathbb{N})$ has strictly bigger infinity ($2^{\\aleph_0}$, the continuum of reals!).</p>
      <p>• The power set of that, $\\mathcal{P}(\\mathcal{P}(\\mathbb{N}))$, is even bigger!</p>
      <p>The proof is the Barber Paradox: define $D = \\{x \\in A : x \\notin f(x)\\}$. Could any element $d \\in A$ have $f(d) = D$? If $d \\in D$, then by definition $d \\notin f(d) = D$. If $d \\notin D$, then $d \\in f(d) = D$. Contradiction!</p>`,
    needs: ['c.1.1.1'],
    traps: [
      `The diagonal set $D = \\{x \\in A : x \\notin f(x)\\}$ is a subset of $A$, so $D \\in \\mathcal{P}(A)$. It is completely legitimate!`,
      `Cantor’s Theorem applies to ANY set, whether finite or infinite. For a finite set of $n$ elements, $|\\mathcal{P}(A)| = 2^n > n$.`
    ],
    proof: {
      idea: 'Assume for contradiction that a surjection $f: A \\to \\mathcal{P}(A)$ exists, and construct the diagonal set $D = \\{x \\in A : x \\notin f(x)\\}$.',
      why: 'If $f(d) = D$, asking whether $d \\in D$ leads to $d \\in D \\iff d \\notin D$, an impossible contradiction.',
      rungs: [
        { why: 'Suppose for contradiction that $f: A \\to \\mathcal{P}(A)$ is surjective.', m: 'f: A \\twoheadrightarrow \\mathcal{P}(A)' },
        { why: 'Define the diagonal subset $D = \\{x \\in A : x \\notin f(x)\\}$. Since $D \\subseteq A$, $D \\in \\mathcal{P}(A)$.', m: 'D := \\{x \\in A : x \\notin f(x)\\} \\in \\mathcal{P}(A)' },
        { why: 'Since $f$ is surjective, there must exist some element $d \\in A$ such that $f(d) = D$.', m: '\\exists d \\in A : f(d) = D' },
        { why: 'Now ask: does $d$ belong to $D$? By definition of $D$, $d \\in D \\iff d \\notin f(d)$.', m: 'd \\in D \\iff d \\notin f(d)' },
        { why: 'Substitute $f(d) = D$ into the equivalence: $d \\in D \\iff d \\notin D$, an outright logical contradiction.', m: 'd \\in D \\iff d \\notin D \\implies\\Leftarrow' }
      ],
      ends: 'Therefore, no surjection from $A$ onto $\\mathcal{P}(A)$ can exist, proving $|A| < |\\mathcal{P}(A)|$.'
    },
    cards: [
      { q: 'State Cantor’s Theorem on power sets.', a: 'For any set $A$, there is no surjection from $A$ onto $\\mathcal{P}(A)$, meaning $|A| < |\\mathcal{P}(A)|$.', kind: 'state' },
      { q: 'How is the diagonal set $D$ defined in the proof of Cantor’s Theorem?', a: '$D = \\{x \\in A : x \\notin f(x)\\}$.', kind: 'recall' }
    ]
  }
);

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
  }
);

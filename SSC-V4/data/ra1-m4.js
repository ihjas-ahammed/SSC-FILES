/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis I · Module 4: Sequences and Limits (continued)
   Sections: 3.6 (Properly Divergent Sequences), 3.7 (Introduction to Infinite Series)
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.3.6.1', bartle: '3.6.1', sec: '3.6', kind: 'definition', tier: 'core',
    title: 'Properly Divergent Sequences',
    oneLine: 'A sequence properly diverges if its terms blow past every finite ceiling to positive infinity or below every floor to negative infinity.',
    statement: `Let $(x_n)$ be a sequence of real numbers.
      <p>(a) We say that $(x_n)$ <b>diverges to $+\\infty$</b>, written $\\lim(x_n) = +\\infty$, if for every real number $M > 0$, there exists an index $K(M) \\in \\mathbb{N}$ such that:
      $$n \\ge K(M) \\implies x_n > M$$</p>
      <p>(b) We say that $(x_n)$ <b>diverges to $-\\infty$</b>, written $\\lim(x_n) = -\\infty$, if for every real number $M < 0$, there exists an index $K(M) \\in \\mathbb{N}$ such that:
      $$n \\ge K(M) \\implies x_n < M$$</p>`,
    intuition: `<p>Divergence comes in two flavours:</p>
      <p>1. <b>Proper divergence:</b> The numbers go in a definite direction towards infinity (e.g. $x_n = n^2$ or $x_n = 2^n$). However high a ceiling $M$ your teacher picks (even $M = 10^{12}$), after some step $K$, all terms stay strictly above that ceiling forever.</p>
      <p>2. <b>Oscillatory divergence:</b> The numbers wander or bounce back and forth without choosing any direction at all (e.g. $x_n = (-1)^n$, which bounces between $-1$ and $+1$). This does NOT diverge to $+\\infty$ or $-\\infty$.</p>`,
    needs: ['c.3.1.3'],
    traps: [
      `Writing $\\lim x_n = \\infty$ does NOT mean the sequence converges! Infinity is NOT a real number; it is shorthand describing unbounded growth.`,
      `Monotone + unbounded = properly divergent! A monotone increasing sequence that is not bounded above ALWAYS diverges to $+\\infty$.`
    ],
    cards: [
      { q: 'State the formal definition of $\\lim(x_n) = +\\infty$.', a: 'For every $M > 0$, there exists $K \\in \\mathbb{N}$ such that $x_n > M$ for all $n \\ge K$.', kind: 'state' },
      { q: 'Does $x_n = (-1)^n n$ diverge to $+\\infty$?', a: 'No, because it oscillates between large positive and large negative values; it does not stay above any positive ceiling $M$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.3.6.3', bartle: '3.6.3', sec: '3.6', kind: 'theorem', tier: 'core',
    title: 'Proper Divergence of Monotone Sequences',
    oneLine: 'A monotone sequence properly diverges if and only if it is unbounded.',
    statement: `<p>A monotone sequence of real numbers is properly divergent if and only if it is unbounded.</p>
      <p>(a) If $(x_n)$ is an unbounded increasing sequence, then:
      $$\\lim_{n\\to\\infty} x_n = +\\infty$$</p>
      <p>(b) If $(x_n)$ is an unbounded decreasing sequence, then:
      $$\\lim_{n\\to\\infty} x_n = -\\infty$$</p>`,
    intuition: `<p>Recall the Monotone Convergence Theorem (<code>c.3.3.2</code>): a monotone sequence is convergent IF AND ONLY IF it is bounded. This theorem is simply the complete other half of the coin!</p>
      <p>Because an increasing sequence cannot fluctuate backwards, if it doesn't hit a finite ceiling, it cannot linger or oscillate anywhere — it is propelled forward past every real number $M$, heading straight to $+\\infty$.</p>`,
    needs: ['c.3.6.1', 'c.3.3.2'],
    traps: [
      `Assuming an unbounded sequence ALWAYS properly diverges — false! An oscillating sequence like $x_n = (-1)^n n$ is unbounded, but diverges without tending to $+\\infty$ or $-\\infty$. Monotonicity is essential.`,
      `Thinking $\\lim x_n = +\\infty$ implies convergence. Infinity is NOT a real number; it represents a specific mode of divergence.`
    ],
    proof: {
      idea: `(a) For any $M > 0$, unboundedness gives a term $x_K > M$. Since $(x_n)$ is increasing, all subsequent terms $x_n \\ge x_K > M$.`,
      why: `Unbounded above means no real number caps the sequence; monotonicity guarantees that once a milestone $M$ is crossed, the sequence never falls back below it.`,
      rungs: [
        { why: 'Let $(x_n)$ be an increasing sequence that is not bounded above, and let $M > 0$ be arbitrary.', m: '$$M > 0 \\quad \\text{is given}$$' },
        { why: 'Since $(x_n)$ is not bounded above, $M$ cannot be an upper bound for the set of terms.', m: '$$\\exists K \\in \\mathbb{N} \\quad \\text{such that} \\quad x_K > M$$' },
        { why: 'Since $(x_n)$ is increasing, every subsequent term is at least as large as $x_K$.', m: '$$n \\ge K \\implies x_n \\ge x_K > M$$' },
        { why: 'This matches the exact definition of divergence to $+\\infty$.', m: '$$\\forall M > 0, \\; \\exists K \\in \\mathbb{N}: \\; n \\ge K \\implies x_n > M \\implies \\lim(x_n) = +\\infty$$' }
      ],
      ends: 'Part (b) for decreasing sequences follows symmetrically by considering $(-x_n)$.'
    },
    cards: [
      { q: 'State Theorem 3.6.3 for an unbounded increasing sequence.', a: 'If $(x_n)$ is an increasing sequence that is unbounded above, then $\\lim(x_n) = +\\infty$.', kind: 'state' },
      { q: 'If a sequence is unbounded, must it diverge to $+\\infty$ or $-\\infty$?', a: 'No — only if it is monotone. An oscillating sequence like $x_n = (-1)^n n$ is unbounded but does not properly diverge.', kind: 'trap' },
      { q: 'What earlier theorem does Theorem 3.6.3 complement?', a: 'The Monotone Convergence Theorem (3.3.2): bounded monotone $\\implies$ converges; unbounded monotone $\\implies$ properly diverges.', kind: 'recall' }
    ]
  },

  {
    id: 'c.3.6.4', bartle: '3.6.4', sec: '3.6', kind: 'theorem', tier: 'core',
    title: 'Comparison Test for Properly Divergent Sequences',
    oneLine: 'If a sequence is pushed from below by something blowing up to +∞, it must blow up to +∞ too.',
    statement: `<p>Let $(x_n)$ and $(y_n)$ be two sequences of real numbers and suppose that:
      $$x_n \\le y_n \\quad \\text{for all } n \\in \\mathbb{N}$$</p>
      <p>(a) If $\\lim(x_n) = +\\infty$, then $\\lim(y_n) = +\\infty$.</p>
      <p>(b) If $\\lim(y_n) = -\\infty$, then $\\lim(x_n) = -\\infty$.</p>
      <p><i>Remark:</i> The result also holds if the inequality $x_n \\le y_n$ holds ultimately (that is, for all $n \\ge K_0$ for some $K_0 \\in \\mathbb{N}$).</p>`,
    intuition: `<p>Think of $(x_n)$ as the floor and $(y_n)$ as the ceiling above it. If the floor itself is rising without bound past every obstacle up to $+\\infty$, whatever sits on top of it ($y_n$) is inescapably pushed to $+\\infty$ as well!</p>
      <p>Conversely, if the ceiling crashes down to $-\\infty$, the floor trapped beneath it must plummet to $-\\infty$.</p>`,
    needs: ['c.3.6.1'],
    traps: [
      `THE COMMON FALLACY: If $x_n \\le y_n$ and $\\lim(y_n) = +\\infty$, concluding $\\lim(x_n) = +\\infty$. False! Knowing the ceiling is high tells you nothing about the floor (e.g. $0 \\le n$).`,
      `Attempting to use this test when the smaller sequence does not tend to $+\\infty$.`
    ],
    proof: {
      idea: `(a) For any $M > 0$, choose $K$ such that $x_n > M$ for $n \\ge K$. Since $y_n \\ge x_n$, $y_n > M$ as well.`,
      why: `Because $y_n$ dominates $x_n$, any milestone cleared by $x_n$ is automatically cleared by $y_n$.`,
      rungs: [
        { why: 'Given $M > 0$, since $\\lim(x_n) = +\\infty$, there is an index $K$ past which $x_n > M$.', m: '$$\\exists K \\in \\mathbb{N}: \\; n \\ge K \\implies x_n > M$$' },
        { why: 'Use the comparison hypothesis $y_n \\ge x_n$ for all $n$.', m: '$$n \\ge K \\implies y_n \\ge x_n > M$$' },
        { why: 'Since $M > 0$ was arbitrary, this establishes proper divergence of $(y_n)$.', m: '$$\\forall M > 0, \\; \\exists K: \\; n \\ge K \\implies y_n > M \\implies \\lim(y_n) = +\\infty$$' }
      ],
      ends: 'Part (b) is symmetric: $x_n \\le y_n < M$ for $n \\ge K$ when $y_n \\to -\\infty$.'
    },
    cards: [
      { q: 'State the Comparison Test for sequences diverging to $+\\infty$.', a: 'If $x_n \\le y_n$ for all $n$ and $\\lim(x_n) = +\\infty$, then $\\lim(y_n) = +\\infty$.', kind: 'state' },
      { q: 'Trap: if $x_n \\le y_n$ and $\\lim(y_n) = +\\infty$, can we conclude $\\lim(x_n) = +\\infty$?', a: 'No! The larger sequence tending to $+\\infty$ provides no lower bound on the smaller sequence.', kind: 'trap' },
      { q: 'Prove that $\\lim(n + (-1)^n) = +\\infty$ using the comparison test.', a: 'Since $n + (-1)^n \\ge n - 1$ and $\\lim(n - 1) = +\\infty$, by Theorem 3.6.4, $\\lim(n + (-1)^n) = +\\infty$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.3.7.1', bartle: '3.7.1', sec: '3.7', kind: 'definition', tier: 'core',
    title: 'Infinite Series and Sequence of Partial Sums',
    oneLine: 'An infinite series is nothing more than the limit of its running totals.',
    statement: `Let $(x_n)$ be a sequence of real numbers. The formal expression $\\sum_{n=1}^\\infty x_n$ is called an <b>infinite series</b>.
      <p>The <b>sequence of partial sums</b> $(s_k)$ is defined by:
      $$s_k = x_1 + x_2 + \\cdots + x_k = \\sum_{n=1}^k x_n$$</p>
      <p>If the sequence $(s_k)$ converges to a real limit $s$, we say the series <b>converges</b> and write $\\sum_{n=1}^\\infty x_n = s$. If $(s_k)$ does not converge, the series <b>diverges</b>.</p>`,
    intuition: `<p>You cannot add infinitely many numbers simultaneously. Instead, you add them one by one like a cash register:</p>
      <p>$s_1 = x_1$</p>
      <p>$s_2 = x_1 + x_2$</p>
      <p>$s_3 = x_1 + x_2 + x_3$, and so on.</p>
      <p>The series converges if and only if your running total $(s_k)$ settles down to a finite, stable balance. This transforms every question about infinite series into a question about sequences!</p>`,
    needs: ['c.3.1.3'],
    traps: [
      `Confusing the sequence of terms $(x_n)$ with the sequence of partial sums $(s_k)$. Even if $x_n \\to 0$, the partial sums can still blow up to infinity (e.g. Harmonic series $\\sum 1/n$).`,
      `Thinking $\\sum_{n=1}^\\infty x_n$ means infinite additions in the algebraic sense. It is strictly a calculus limit of finite sums.`
    ],
    cards: [
      { q: 'How is the convergence of an infinite series $\\sum_{n=1}^\\infty x_n$ defined?', a: 'As the convergence of its sequence of partial sums $s_k = \\sum_{n=1}^k x_n$.', kind: 'state' },
      { q: 'What is the sum of the geometric series $\\sum_{n=0}^\\infty r^n$ when $|r| < 1$?', a: '$\\dfrac{1}{1 - r}$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.3.7.2', bartle: '3.7.2', sec: '3.7', kind: 'example', tier: 'core',
    title: 'The Geometric Series and Telescoping Series',
    oneLine: 'Geometric series converge if and only if |r| < 1 to a/(1-r); telescoping series collapse intermediate terms into a simple boundary difference.',
    statement: `<p><b>(a) The Geometric Series:</b> For any real number $r \\in \\mathbb{R}$, the series $\\sum_{n=0}^\\infty r^n$ <b>converges</b> if and only if $|r| < 1$. In that case:
      $$\\sum_{n=0}^\\infty r^n = \\frac{1}{1 - r}$$
      If $|r| \\ge 1$, the geometric series <b>diverges</b>.</p>
      <p><b>(b) Telescoping Series:</b> A series whose partial sums collapse by cancellation. For example:
      $$\\sum_{n=1}^\\infty \\frac{1}{n(n+1)} = \\sum_{n=1}^\\infty \\left( \\frac{1}{n} - \\frac{1}{n+1} \\right) = 1$$</p>`,
    intuition: `<p>In a geometric series, each partial sum is $s_k = 1 + r + r^2 + \\cdots + r^k$. Multiplying by $r$ gives $r s_k = r + r^2 + \\cdots + r^{k+1}$. Subtracting the two cancels every single intermediate term, leaving just:
      $$s_k(1 - r) = 1 - r^{k+1} \\implies s_k = \\frac{1 - r^{k+1}}{1 - r}$$
      When $|r| < 1$, $r^{k+1} \\to 0$ as $k \\to \\infty$, so $s_k \\to \\frac{1}{1 - r}$.</p>
      <p>In a telescoping series like $\\frac{1}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$, when you add the terms, $(1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + \\cdots$, each positive term cancels the previous negative term like an accordion collapsing, leaving $s_k = 1 - \\frac{1}{k+1} \\to 1$.</p>`,
    needs: ['c.3.7.1', 'c.3.1.3'],
    traps: [
      `Forgetting the first term: the sum of $a + ar + ar^2 + \\cdots$ is $\\dfrac{a}{1 - r}$. If the sum starts at $n = 1$, the first term is $r$, so $\\sum_{n=1}^\\infty r^n = \\dfrac{r}{1 - r}$.`,
      `Applying the formula $\\dfrac{1}{1 - r}$ when $|r| \\ge 1$: e.g. for $r = -1$, the series $1 - 1 + 1 - 1 + \\cdots$ diverges (partial sums oscillate between $1$ and $0$), so it does not equal $1/(1 - (-1)) = 1/2$.`
    ],
    cards: [
      { q: 'For what values of $r$ does the geometric series $\\sum_{n=0}^\\infty r^n$ converge?', a: 'Strictly when $|r| < 1$.', kind: 'state' },
      { q: 'Evaluate the sum of the telescoping series $\\sum_{n=1}^\\infty \\dfrac{1}{n(n+1)}$.', a: '$\\sum_{n=1}^\\infty \\left(\\dfrac{1}{n} - \\dfrac{1}{n+1}\\right) = \\lim_{k\\to\\infty} \\left(1 - \\dfrac{1}{k+1}\\right) = 1$.', kind: 'apply' },
      { q: 'What is the sum of $\\sum_{n=1}^\\infty \\left(\\dfrac{1}{3}\\right)^n$?', a: 'First term $a = 1/3$, ratio $r = 1/3$, sum $= \\dfrac{1/3}{1 - 1/3} = \\dfrac{1/3}{2/3} = \\dfrac{1}{2}$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.3.7.3', bartle: '3.7.3', sec: '3.7', kind: 'theorem', tier: 'core',
    title: 'The n-th Term Test for Divergence',
    oneLine: 'If the terms being added do not shrink to 0, the sum cannot possibly converge.',
    statement: `If the series $\\sum_{n=1}^\\infty x_n$ converges, then:
      $$\\lim_{n\\to\\infty} x_n = 0$$
      <b>The Divergence Test:</b> If $\\lim_{n\\to\\infty} x_n \\ne 0$ (or does not exist), then the series $\\sum_{n=1}^\\infty x_n$ <b>diverges</b>.`,
    intuition: `<p>Think of filling a bucket with water. If you want the total water to stop increasing and level off at a finite volume, the drips you add must get infinitely tiny ($x_n \\to 0$).</p>
      <p>If each drop continues to add $0.001$ liters or $1$ liter, the bucket will inevitably overflow to infinity!</p>
      <p><b>THE CRUCIAL EXAM WARNING:</b> The converse is FALSE! Just because $x_n \\to 0$ does NOT mean the series converges. For example, in the Harmonic series $\\sum 1/n$, the terms shrink to $0$ ($1/n \\to 0$), but the sum still diverges to $+\\infty$!</p>`,
    needs: ['c.3.7.1', 'c.3.1.3'],
    traps: [
      `THE #1 CLASSIC TRAP: Assuming $\\lim x_n = 0$ implies the series converges. Absolutely false! $x_n \\to 0$ is a necessary condition, NOT a sufficient condition.`,
      `Using this test to conclude convergence: the test can ONLY prove divergence, never convergence.`
    ],
    proof: {
      idea: `Express the individual term as the difference between consecutive partial sums: $x_n = s_n - s_{n-1}$.`,
      why: `Because both $s_n \\to s$ and $s_{n-1} \\to s$ as $n \\to \\infty$, their difference must head to $0$.`,
      rungs: [
        { why: 'Write the term $x_n$ using partial sums for $n \\ge 2$.', m: '$$x_n = s_n - s_{n-1}$$' },
        { why: 'Take the limit of both sides as $n \\to \\infty$.', m: '$$\\lim_{n\\to\\infty} x_n = \\lim_{n\\to\\infty} (s_n - s_{n-1})$$' },
        { why: 'Since $\\sum x_n = s$, both $s_n \\to s$ and $s_{n-1} \\to s$.', m: '$$\\lim_{n\\to\\infty} x_n = s - s = 0$$' }
      ],
      ends: 'Therefore, any convergent series must have $x_n \\to 0$.'
    },
    cards: [
      { q: 'If $\\lim_{n\\to\\infty} x_n = 0$, can we conclude that $\\sum x_n$ converges?', a: 'No! The Harmonic series $\\sum 1/n$ has $1/n \\to 0$, but diverges.', kind: 'trap' },
      { q: 'What does the $n$-th term test say about the series $\\sum_{n=1}^\\infty \\dfrac{n}{2n + 1}$?', a: 'It diverges, because $\\lim \\dfrac{n}{2n+1} = \\dfrac{1}{2} \\ne 0$.', kind: 'apply' },
      { q: 'State the $n$-th term test for divergence of an infinite series.', a: 'If $\\sum_{n=1}^\\infty x_n$ converges, then $\\lim_{n\\to\\infty} x_n = 0$. Equivalently, if $\\lim x_n \\ne 0$ (or does not exist), the series diverges.', kind: 'state' }
    ]
  },

  {
    id: 'c.3.7.4', bartle: '3.7.4', sec: '3.7', kind: 'theorem', tier: 'core',
    title: 'The Cauchy Criterion for Infinite Series',
    oneLine: 'A series converges if and only if arbitrary tail blocks of terms can be made as tiny as desired.',
    statement: `<p>The series $\\sum_{n=1}^\\infty x_n$ converges if and only if for every $\\varepsilon > 0$, there exists an integer $M(\\varepsilon) \\in \\mathbb{N}$ such that for all $m > n \\ge M(\\varepsilon)$:
      $$|s_m - s_n| = |x_{n+1} + x_{n+2} + \\cdots + x_m| < \\varepsilon$$</p>`,
    intuition: `<p>Since the convergence of $\\sum x_n$ is DEFINED as the convergence of its sequence of partial sums $(s_k)$ (<code>c.3.7.1</code>), this theorem is the direct translation of the Cauchy Convergence Criterion (<code>c.3.5.5</code>) into the language of series!</p>
      <p>The difference between two partial sums $s_m - s_n$ (for $m > n$) is simply a finite "block" of terms: $x_{n+1} + x_{n+2} + \\cdots + x_m$. The Cauchy Criterion says: a series converges if and only if any block of terms sufficiently far out can be made smaller than $\\varepsilon$, regardless of how many terms are in the block!</p>`,
    needs: ['c.3.7.1', 'c.3.5.5'],
    traps: [
      `Setting $m = n + 1$: that only gives $|x_{n+1}| < \\varepsilon$ (the $n$-th term test). The Cauchy criterion requires $|x_{n+1} + \\cdots + x_m| < \\varepsilon$ for ALL $m > n$, no matter how large $m$ is!`,
      `Thinking the Cauchy Criterion is only useful for theory: it is the primary weapon to prove convergence/divergence when an exact formula for the sum is unknown (e.g. the $p$-series and harmonic series).`
    ],
    proof: {
      idea: `Apply the Cauchy Convergence Criterion (Theorem 3.5.5) directly to the sequence of partial sums $(s_k)$.`,
      why: `By Definition 3.7.1, $\\sum x_n$ converges if and only if $(s_k)$ converges in $\\mathbb{R}$.`,
      rungs: [
        { why: 'By definition, $\\sum x_n$ converges if and only if the sequence of partial sums $(s_k)$ converges.', m: '$$\\sum_{n=1}^\\infty x_n \\text{ converges} \\iff (s_k) \\text{ converges}$$' },
        { why: 'By the Cauchy Convergence Criterion (3.5.5), $(s_k)$ converges if and only if $(s_k)$ is a Cauchy sequence.', m: '$$(s_k) \\text{ converges} \\iff \\forall\\, \\varepsilon > 0, \\; \\exists M \\in \\mathbb{N}: \\; m > n \\ge M \\implies |s_m - s_n| < \\varepsilon$$' },
        { why: 'Compute the difference between partial sums $s_m$ and $s_n$ for $m > n$.', m: '$$s_m - s_n = \\sum_{k=1}^m x_k - \\sum_{k=1}^n x_k = x_{n+1} + x_{n+2} + \\cdots + x_m$$' },
        { why: 'Substitute this expression into the Cauchy condition.', m: '$$|s_m - s_n| = |x_{n+1} + x_{n+2} + \\cdots + x_m| < \\varepsilon \\quad \\text{for all } m > n \\ge M$$' }
      ],
      ends: 'Therefore, the series converges if and only if the Cauchy Criterion for series is satisfied.'
    },
    cards: [
      { q: 'State the Cauchy Criterion for the convergence of an infinite series $\\sum x_n$.', a: '$\\sum x_n$ converges iff for every $\\varepsilon > 0$, $\\exists M \\in \\mathbb{N}$ such that $m > n \\ge M \\implies |x_{n+1} + x_{n+2} + \\cdots + x_m| < \\varepsilon$.', kind: 'state' },
      { q: 'What is $|s_m - s_n|$ expressed in terms of the individual terms $x_k$ when $m > n$?', a: '$|x_{n+1} + x_{n+2} + \\cdots + x_m|$.', kind: 'recall' },
      { q: 'Why does $x_n \\to 0$ fail to guarantee convergence under the Cauchy criterion?', a: 'Because $x_n \\to 0$ only guarantees that a single term ($m = n+1$) is small, but a block of $m - n$ terms can still sum to something large (as in the harmonic series).', kind: 'trap' }
    ]
  },

  {
    id: 'c.3.7.5', bartle: '3.7.5', sec: '3.7', kind: 'theorem', tier: 'core',
    title: 'Series of Nonnegative Terms and Bounded Partial Sums',
    oneLine: 'For a series with all terms ≥ 0, convergence is completely equivalent to having bounded partial sums.',
    statement: `<p>Let $(x_n)$ be a sequence of <b>nonnegative</b> real numbers ($x_n \\ge 0$ for all $n \\in \\mathbb{N}$).</p>
      <p>Then the series $\\sum_{n=1}^\\infty x_n$ <b>converges</b> if and only if the sequence of partial sums $S = (s_k)$ is <b>bounded above</b>. In this case:
      $$\\sum_{n=1}^\\infty x_n = \\lim_{k\\to\\infty} s_k = \\sup\\{s_k : k \\in \\mathbb{N}\\}$$</p>
      <p>If $(s_k)$ is not bounded above, the series <b>properly diverges</b>: $\\lim_{k\\to\\infty} s_k = +\\infty$.</p>`,
    intuition: `<p>When all terms are nonnegative ($x_n \\ge 0$), adding more terms always increases (or keeps constant) the running total:
      $$s_{k+1} = s_k + x_{k+1} \\ge s_k$$
      So $(s_k)$ is an <b>increasing sequence</b>!</p>
      <p>By the Monotone Convergence Theorem (<code>c.3.3.2</code>), an increasing sequence converges if and only if it is bounded above, converging to its supremum. Thus, for nonnegative series, convergence and boundedness of partial sums are identical questions!</p>`,
    needs: ['c.3.7.1', 'c.3.3.2'],
    traps: [
      `Forgetting the NONNEGATIVE hypothesis: if terms can be negative, partial sums can be bounded without converging (e.g. $\\sum (-1)^n$ has partial sums $0, 1, 0, 1$ which are bounded, yet the series diverges!).`,
      `Assuming an unbounded series with positive terms can oscillate: a series of nonnegative terms can NEVER oscillate; if it diverges, it MUST diverge to $+\\infty$.`
    ],
    proof: {
      idea: `Notice that $x_n \\ge 0$ makes $(s_k)$ an increasing sequence. Apply the Monotone Convergence Theorem (3.3.2) directly.`,
      why: `Monotone sequences are uniquely simple: boundedness guarantees convergence to the supremum, while unboundedness forces proper divergence to $+\\infty$.`,
      rungs: [
        { why: 'Since each $x_n \\ge 0$, compute $s_{k+1} - s_k$.', m: '$$s_{k+1} - s_k = x_{k+1} \\ge 0 \\implies s_{k+1} \\ge s_k \\quad \\text{for all } k \\in \\mathbb{N}$$' },
        { why: 'Therefore, the sequence of partial sums $S = (s_k)$ is a monotone increasing sequence of real numbers.', m: '$$s_1 \\le s_2 \\le s_3 \\le \\cdots \\le s_k \\le s_{k+1} \\le \\cdots$$' },
        { why: 'By the Monotone Convergence Theorem (3.3.2), an increasing sequence converges if and only if it is bounded above.', m: '$$(s_k) \\text{ converges} \\iff (s_k) \\text{ is bounded above}$$' },
        { why: 'When bounded, its limit is its supremum; when unbounded, by Theorem 3.6.3 it diverges to $+\\infty$.', m: '$$\\lim_{k\\to\\infty} s_k = \\sup\\{s_k : k \\in \\mathbb{N}\\} \\quad (\\text{if bounded}), \\qquad \\lim_{k\\to\\infty} s_k = +\\infty \\quad (\\text{if unbounded})$$' }
      ],
      ends: 'For nonnegative series, convergence is entirely synonymous with boundedness of partial sums.'
    },
    cards: [
      { q: 'State Theorem 3.7.5 for an infinite series with nonnegative terms.', a: 'A series $\\sum x_n$ with $x_n \\ge 0$ converges iff its sequence of partial sums $(s_k)$ is bounded above, in which case $\\sum x_n = \\sup\\{s_k\\}$.', kind: 'state' },
      { q: 'Can a series with nonnegative terms diverge by oscillation?', a: 'No! Since partial sums are increasing, if it diverges, it must properly diverge to $+\\infty$.', kind: 'recall' },
      { q: 'Trap: why does Theorem 3.7.5 fail for $\\sum_{n=1}^\\infty (-1)^n$?', a: 'Because the terms are not nonnegative; its partial sums are bounded ($0 \\le s_k \\le 1$) yet the series diverges.', kind: 'trap' }
    ]
  },

  {
    id: 'c.3.7.6', bartle: '3.7.6', sec: '3.7', kind: 'example', tier: 'core',
    title: 'Divergence of the Harmonic Series',
    oneLine: 'The harmonic series 1 + 1/2 + 1/3 + ... diverges to +∞, proving that terms shrinking to 0 is not enough for convergence.',
    statement: `<p>The <b>Harmonic Series</b>:
      $$\\sum_{n=1}^\\infty \\frac{1}{n} = 1 + \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{4} + \\cdots + \\frac{1}{n} + \\cdots$$
      <b>diverges to $+\\infty$</b>, even though its $n$-th term satisfies:
      $$\\lim_{n\\to\\infty} \\frac{1}{n} = 0$$</p>`,
    intuition: `<p>The Harmonic Series is the world\'s most famous mathematical counterexample! It proves conclusively that $\\lim x_n = 0$ does NOT guarantee that $\\sum x_n$ converges.</p>
      <p>Why does it diverge? Nicole Oresme discovered a breathtaking grouping argument around 1350:
      $$1 + \\frac{1}{2} + \\underbrace{\\left(\\frac{1}{3} + \\frac{1}{4}\\right)}_{> 2/4 = 1/2} + \\underbrace{\\left(\\frac{1}{5} + \\frac{1}{6} + \\frac{1}{7} + \\frac{1}{8}\\right)}_{> 4/8 = 1/2} + \\underbrace{\\left(\\frac{1}{9} + \\cdots + \\frac{1}{16}\\right)}_{> 8/16 = 1/2} + \\cdots$$
      Each group of $2^k$ terms adds more than $1/2$! Since you can add $1/2$ infinitely many times, the partial sums grow past any finite ceiling, so the sum blows up to $+\\infty$.</p>`,
    needs: ['c.3.7.1', 'c.3.7.3', 'c.3.7.5'],
    traps: [
      `Attempting to use the $n$-th term test to prove the harmonic series converges: the test says $1/n \\to 0$, which is INCONCLUSIVE!`,
      `Thinking the harmonic series diverges quickly: its growth is extremely slow (logarithmic, $s_n \\approx \\ln n + \\gamma$). To reach a sum of $100$, you need roughly $1.5 \\times 10^{43}$ terms!`
    ],
    proof: {
      idea: `Show the subsequence of partial sums $s_{2^k} \\ge 1 + \\frac{k}{2}$. Since $1 + k/2 \\to \\infty$, the partial sums are unbounded above.`,
      why: `By Theorem 3.7.5, a nonnegative series with unbounded partial sums must diverge to $+\\infty$.`,
      rungs: [
        { why: 'Write out the partial sum at powers of 2: $s_{2^k}$.', m: '$$s_{2^k} = 1 + \\frac{1}{2} + \\left(\\frac{1}{3} + \\frac{1}{4}\\right) + \\cdots + \\left(\\frac{1}{2^{k-1}+1} + \\cdots + \\frac{1}{2^k}\\right)$$' },
        { why: 'In each bracket $\\left(\\frac{1}{2^{j-1}+1} + \\cdots + \\frac{1}{2^j}\\right)$, there are $2^{j-1}$ terms, and the smallest term is $\\frac{1}{2^j}$.', m: '$$\\sum_{i=2^{j-1}+1}^{2^j} \\frac{1}{i} > 2^{j-1} \\cdot \\frac{1}{2^j} = \\frac{1}{2}$$' },
        { why: 'Summing all $k$ such blocks gives a lower bound growing linearly with $k$.', m: '$$s_{2^k} > 1 + \\underbrace{\\frac{1}{2} + \\frac{1}{2} + \\cdots + \\frac{1}{2}}_{k \\text{ times}} = 1 + \\frac{k}{2}$$' },
        { why: 'Since $\\lim_{k\\to\\infty} (1 + k/2) = +\\infty$, the subsequence $(s_{2^k})$ is unbounded above.', m: '$$\\lim_{k\\to\\infty} s_{2^k} = +\\infty \\implies (s_k) \\text{ is unbounded above}$$' },
        { why: 'By Theorem 3.7.5, since $1/n > 0$ and $(s_k)$ is unbounded, the series diverges to $+\\infty$.', m: '$$\\sum_{n=1}^\\infty \\frac{1}{n} = +\\infty$$' }
      ],
      ends: 'The harmonic series diverges to $+\\infty$. It serves as the standard comparison threshold for series divergence.'
    },
    cards: [
      { q: 'Does the harmonic series $\\sum_{n=1}^\\infty \\dfrac{1}{n}$ converge or diverge?', a: 'It diverges to $+\\infty$.', kind: 'state' },
      { q: 'What lower bound did Oresme establish for the partial sum $s_{2^k}$ of the harmonic series?', a: '$s_{2^k} > 1 + \\dfrac{k}{2}$.', kind: 'recall' },
      { q: 'Why is the harmonic series the classic counterexample to the converse of the $n$-th term test?', a: 'Because $\\lim_{n\\to\\infty} \\dfrac{1}{n} = 0$, yet the series $\\sum \\dfrac{1}{n}$ diverges.', kind: 'trap' }
    ]
  }
);

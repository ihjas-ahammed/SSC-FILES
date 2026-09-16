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
        { why: 'Write the term $x_n$ using partial sums for $n \\ge 2$.', m: 'x_n = s_n - s_{n-1}' },
        { why: 'Take the limit of both sides as $n \\to \\infty$.', m: '\\lim_{n\\to\\infty} x_n = \\lim_{n\\to\\infty} (s_n - s_{n-1})' },
        { why: 'Since $\\sum x_n = s$, both $s_n \\to s$ and $s_{n-1} \\to s$.', m: '\\lim_{n\\to\\infty} x_n = s - s = 0' }
      ],
      ends: 'Therefore, any convergent series must have $x_n \\to 0$.'
    },
    cards: [
      { q: 'If $\\lim_{n\\to\\infty} x_n = 0$, can we conclude that $\\sum x_n$ converges?', a: 'No! The Harmonic series $\\sum 1/n$ has $1/n \\to 0$, but diverges.', kind: 'trap' },
      { q: 'What does the $n$-th term test say about the series $\\sum_{n=1}^\\infty \\dfrac{n}{2n + 1}$?', a: 'It diverges, because $\\lim \\dfrac{n}{2n+1} = \\dfrac{1}{2} \\ne 0$.', kind: 'apply' },
      { q: 'State the $n$-th term test for divergence of an infinite series.', a: 'If $\\sum_{n=1}^\\infty x_n$ converges, then $\\lim_{n\\to\\infty} x_n = 0$. Equivalently, if $\\lim x_n \\ne 0$ (or does not exist), the series diverges.', kind: 'state' }
    ]
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module 4: Sequences and Series of Functions (Chapter 8)
   Sections: 8.1 (Pointwise & Uniform Convergence), 8.2 (Interchange of Limits),
             8.3 (Exponential & Logarithmic), 8.4 (Trigonometric Functions)
   Diagrams: c.8.1.1, c.8.1.3, c.8.2.2, c.8.2.4
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.8.1.1', bartle: '8.1.1', sec: '8.1', kind: 'definition', tier: 'core',
    title: 'Pointwise vs Uniform Convergence',
    oneLine: 'Pointwise convergence is evaluated point-by-point; uniform convergence hugs the entire curve simultaneously inside an ε-tube.',
    statement: `Let $(f_n)$ be a sequence of functions defined on $A \\subseteq \\mathbb{R}$, and let $f: A \\to \\mathbb{R}$.
      <p>(a) $(f_n)$ converges <b>pointwise</b> to $f$ on $A$ if for each $x \\in A$ and each $\\varepsilon > 0$, there exists $K(\\varepsilon, x) \\in \\mathbb{N}$ such that:
      $$n \\ge K(\\varepsilon, x) \\implies |f_n(x) - f(x)| < \\varepsilon$$</p>
      <p>(b) $(f_n)$ converges <b>uniformly</b> to $f$ on $A$ if for each $\\varepsilon > 0$, there exists a single $K(\\varepsilon) \\in \\mathbb{N}$ (independent of $x$) such that for <b>all $x \\in A$ simultaneously</b>:
      $$n \\ge K(\\varepsilon) \\implies |f_n(x) - f(x)| < \\varepsilon$$</p>`,
    intuition: `<p>This is the most important distinction in all of advanced calculus! Think of training a classroom of students:</p>
      <p>• <b>Pointwise:</b> Every student eventually understands the topic, but at completely different speeds. Student A needs $5$ days, Student B needs $20$ days, and as you check students closer to the back of the room, they need infinitely many days ($K$ depends on $x$).</p>
      <p>• <b>Uniform:</b> The entire classroom reaches mastery simultaneously! One deadline $K$ works for all students across the entire set ($K$ depends ONLY on $\\varepsilon$, not on $x$).</p>
      <p><b>The Classic Indian Exam Counterexample:</b> $f_n(x) = x^n$ on $[0, 1]$. For $x < 1$, $x^n \\to 0$. But at $x = 1$, $1^n \\to 1$. Every single $f_n$ is continuous, but the pointwise limit jumps from $0$ to $1$ at the boundary! Pointwise convergence CANNOT preserve continuity, but uniform convergence GUARANTEES it!</p>`,
    needs: ['c.3.1.3', 'c.5.1.1'],
    traps: [
      `Confusing the order of quantifiers: Pointwise is $\\forall x \\, \\forall \\varepsilon \\, \\exists K$. Uniform is $\\forall \\varepsilon \\, \\exists K \\, \\forall x$. The position of $\\exists K$ changes everything!`,
      `Assuming pointwise limit of continuous functions is always continuous. The counterexample $x^n$ on $[0, 1]$ is tested in almost every semester exam.`
    ],
    cards: [
      { q: 'What is the crucial difference between pointwise and uniform convergence?', a: 'In pointwise convergence, $K$ can depend on both $\\varepsilon$ and $x$; in uniform convergence, one single $K$ works for all $x \\in A$ simultaneously.', kind: 'state' },
      { q: 'What is the pointwise limit of $f_n(x) = x^n$ on $[0, 1]$?', a: '$f(x) = 0$ for $x \\in [0, 1)$, and $f(1) = 1$. The limit is discontinuous!', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.1.3', bartle: '8.1.8', sec: '8.1', kind: 'theorem', tier: 'core',
    title: 'The Uniform Norm (Sup-Norm Criterion)',
    oneLine: 'Uniform convergence means the maximum vertical gap between fn and f collapses to zero.',
    statement: `Let $f_n, f: A \\to \\mathbb{R}$ be bounded functions. The <b>uniform norm</b> (sup-norm) on $A$ is:
      $$\\|f_n - f\\|_A = \\sup_{x \\in A} |f_n(x) - f(x)|$$
      <p><b>The Criterion:</b> $(f_n)$ converges <b>uniformly</b> to $f$ on $A$ if and only if:
      $$\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$$</p>`,
    intuition: `<p>Geometrically, imagine drawing an "$\\varepsilon$-ribbon" or tube of width $\\pm\\varepsilon$ around the target graph $f(x)$.</p>
      <p>Uniform convergence means that after step $K$, the entire graph of $f_n(x)$ is sucked completely inside this tube from left to right across the entire domain!</p>
      <p>To test uniform convergence in exam questions: find the maximum gap using Class 12 calculus (set derivative to zero!), and check if that maximum peak vanishes as $n \\to \\infty$.</p>`,
    needs: ['c.8.1.1', 'c.2.3.2'],
    traps: [
      `If the peak error stays bounded away from $0$ (even if the peak slides to the boundary, like in $x^n$), uniform convergence fails!`,
      `Make sure to take the supremum over the specified domain: $x/n$ converges uniformly on $[0, 10]$, but NOT on all of $\\mathbb{R}$.`
    ],
    proof: {
      idea: '(=>) If $|f_n(x) - f(x)| \\le \\varepsilon$ for all $x$, then the supremum is $\\le \\varepsilon$. (<=) If the supremum is $\\le \\varepsilon$, then every individual point is bounded by $\\varepsilon$.',
      why: 'By definition, $M \\le \\varepsilon$ is equivalent to saying $y \\le \\varepsilon$ for every element $y$ of the set.',
      rungs: [
        {
          why: '(=>) Assume $(f_n)$ converges uniformly to $f$ on $A$. Given $\\varepsilon > 0$, choose $K(\\varepsilon)$ such that for all $n \\ge K(\\varepsilon)$ and all $x \\in A$, $|f_n(x) - f(x)| \\le \\varepsilon$.',
          m: '$$n \\ge K(\\varepsilon) \\implies |f_n(x) - f(x)| \\le \\varepsilon \\quad \\forall x \\in A$$',
          meaning: 'What this really means: Uniform convergence guarantees that past a certain stage, every single point on the graph simultaneously lies within epsilon of the target curve.'
        },
        {
          why: 'By definition of the supremum as least upper bound, taking supremum over $x \\in A$ preserves the inequality.',
          m: '$$\\|f_n - f\\|_A = \\sup_{x \\in A} |f_n(x) - f(x)| \\le \\varepsilon \\quad \\forall n \\ge K(\\varepsilon)$$',
          meaning: 'What this really means: If every individual point is within epsilon, then even the single worst-case point on the entire domain cannot exceed epsilon.'
        },
        {
          why: 'Since $\\varepsilon > 0$ is arbitrary, $\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$.',
          m: '$$\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$$',
          meaning: 'What this really means: The maximum peak error across the entire domain shrinks to zero like a regular sequence of real numbers.'
        },
        {
          why: '(<=) Conversely, assume $\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$. Given $\\varepsilon > 0$, choose $H(\\varepsilon)$ such that $\\|f_n - f\\|_A < \\varepsilon$ for all $n \\ge H(\\varepsilon)$.',
          m: '$$\\|f_n - f\\|_A < \\varepsilon \\quad \\forall n \\ge H(\\varepsilon)$$',
          meaning: 'What this really means: Assume the worst-case peak error across the domain shrinks to zero.'
        },
        {
          why: 'For any $x \\in A$, $|f_n(x) - f(x)| \\le \\|f_n - f\\|_A < \\varepsilon$, which proves uniform convergence.',
          m: '$$|f_n(x) - f(x)| < \\varepsilon \\quad \\forall x \\in A, \\, n \\ge H(\\varepsilon)$$',
          meaning: 'What this really means: Since every point is bounded by the peak error, holding the peak below epsilon traps all points simultaneously, proving uniform convergence.'
        }
      ],
      ends: 'Uniform convergence on $A$ is completely equivalent to $\\|f_n - f\\|_A \\to 0$.'
    },
    cards: [
      { q: 'Define the uniform norm $\\|g\\|_A$ of a function $g$ on $A$.', a: '$\\|g\\|_A = \\sup_{x \\in A} |g(x)|$.', kind: 'state' },
      { q: 'How is the sup-norm used to test uniform convergence?', a: '$f_n \\to f$ uniformly on $A$ iff $\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.8.1.5', bartle: '8.1.5', sec: '8.1', kind: 'lemma', tier: 'core',
    title: 'Sequential Criterion for Non-Uniform Convergence',
    oneLine: 'Convergence is not uniform iff a sequence of sample points x_k always manages to escape the ε_0 boundary.',
    statement: `A sequence of functions $(f_n)$ on $A \\subseteq \\mathbb{R}$ <b>fails to converge uniformly</b> to $f$ on $A$ if and only if:
      <p>There exists some $\\varepsilon_0 > 0$, a subsequence $(f_{n_k})$ of $(f_n)$, and a sequence of points $(x_k)$ in $A$ such that:
      $$\\left| f_{n_k}(x_k) - f(x_k) \\right| \\ge \\varepsilon_0 \\quad \\text{for all } k \\in \\mathbb{N}$$</p>`,
    intuition: `<p>This is the ultimate tool for DISPROVING uniform convergence in exams!</p>
      <p>Suppose someone claims $f_n(x) = x^n$ converges uniformly on $[0, 1)$. How do you refute them? Pick $x_k = (1/2)^{1/k} \\in [0, 1)$! Then $f_k(x_k) = ((1/2)^{1/k})^k = 1/2$.</p>
      <p>Even though $k \\to \\infty$, at the sliding test point $x_k$, the error NEVER drops below $\\varepsilon_0 = 1/2$! You caught them cheating: uniform convergence fails.</p>`,
    needs: ['c.8.1.1', 'c.3.4.1'],
    traps: [
      `The points $x_k$ do NOT need to be fixed! In fact, $x_k$ almost always moves towards a boundary (e.g. $x_k \\to 1$) as $k \\to \\infty$.`,
      `Remember that pointwise convergence already holds at every fixed point; it is the moving point $x_k$ that detects the failure of uniformity.`
    ],
    proof: {
      idea: 'Negate the logical definition of uniform convergence: $\\exists \\varepsilon_0 > 0$ such that for every $K$, there exist $n \\ge K$ and $x \\in A$ with $|f_n(x) - f(x)| \\ge \\varepsilon_0$.',
      why: 'Setting $K = 1, 2, 3, \\dots$ generates the desired subsequence $(f_{n_k})$ and witness points $(x_k)$.',
      rungs: [
        {
          why: 'Write the definition of uniform convergence: $\\forall \\varepsilon > 0, \\, \\exists K \\in \\mathbb{N}, \\, \\forall n \\ge K, \\, \\forall x \\in A : |f_n(x) - f(x)| < \\varepsilon$.',
          m: '$$\\forall \\varepsilon > 0 \\, \\exists K \\in \\mathbb{N} \\, \\forall n \\ge K \\, \\forall x \\in A : |f_n(x) - f(x)| < \\varepsilon$$',
          meaning: 'What this really means: For convergence to be uniform, one single cutoff index must force every single point on the domain within epsilon of the limit.'
        },
        {
          why: 'Negate this statement by flipping quantifiers.',
          m: '$$\\exists \\varepsilon_0 > 0 \\, \\forall K \\in \\mathbb{N} \\, \\exists n \\ge K, \\, \\exists x \\in A : |f_n(x) - f(x)| \\ge \\varepsilon_0$$',
          meaning: 'What this really means: Non-uniformity means there is a fixed error barrier such that no matter how far down the sequence you look, some runaway point still fails.'
        },
        {
          why: 'For $K = 1$, choose $n_1 \\ge 1$ and $x_1 \\in A$ such that $|f_{n_1}(x_1) - f(x_1)| \\ge \\varepsilon_0$.',
          m: '$$|f_{n_1}(x_1) - f(x_1)| \\ge \\varepsilon_0$$',
          meaning: 'What this really means: Pick the very first function index and rogue location where the error fails the barrier.'
        },
        {
          why: 'Inductively, for $K_m = n_{m-1} + 1$, choose $n_m > n_{m-1}$ and $x_m \\in A$ with $|f_{n_m}(x_m) - f(x_m)| \\ge \\varepsilon_0$.',
          m: '$$n_1 < n_2 < \\cdots < n_k < \\cdots \\quad \\text{and} \\quad |f_{n_k}(x_k) - f(x_k)| \\ge \\varepsilon_0$$',
          meaning: 'What this really means: March endlessly down the sequence, picking a moving runaway point for each step to construct a concrete trail of failure.'
        }
      ],
      ends: 'The sequence of witness points $(x_k)$ proves that convergence cannot be uniform.'
    },
    cards: [
      { q: 'State the Sequential Criterion for non-uniform convergence.', a: '$(f_n)$ does not converge uniformly to $f$ on $A$ iff $\\exists \\varepsilon_0 > 0$, subsequence $(f_{n_k})$, and points $(x_k) \\in A$ with $|f_{n_k}(x_k) - f(x_k)| \\ge \\varepsilon_0$.', kind: 'state' },
      { q: 'Use witness points to prove $f_n(x) = x^n$ does not converge uniformly on $[0, 1)$.', a: 'Choose $x_k = (1/2)^{1/k} \\in [0, 1)$; then $f_k(x_k) = 1/2 \\ne 0$, so $|f_k(x_k) - 0| = 1/2 = \\varepsilon_0$ for all $k$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.1.10', bartle: '8.1.10', sec: '8.1', kind: 'theorem', tier: 'core',
    title: 'Cauchy Criterion for Uniform Convergence',
    oneLine: 'A sequence of functions converges uniformly iff the uniform distance between fm and fn can be made arbitrarily small.',
    statement: `Let $(f_n)$ be a sequence of bounded functions on $A \\subseteq \\mathbb{R}$.
      <p>Then $(f_n)$ <b>converges uniformly</b> on $A$ to a bounded function $f$ if and only if:</p>
      <p>For every $\\varepsilon > 0$, there exists $H(\\varepsilon) \\in \\mathbb{N}$ such that for all $m, n \\ge H(\\varepsilon)$:
      $$\\|f_m - f_n\\|_A = \\sup_{x \\in A} |f_m(x) - f_n(x)| \\le \\varepsilon$$</p>`,
    intuition: `<p>Just as with real numbers (Theorem 3.5.5), this criterion lets you prove uniform convergence without knowing the limit function $f$ in advance!</p>
      <p>If the functions $f_n$ get uniformly close to each other, completeness of $\\mathbb{R}$ forces them to converge pointwise to some function $f$, and the uniform closeness between $f_m$ and $f_n$ is inherited by the limit $f$.</p>`,
    needs: ['c.8.1.3', 'c.3.5.5'],
    traps: [
      `The bound $\\|f_m - f_n\\|_A \\le \\varepsilon$ must hold for ALL points $x \\in A$ simultaneously! Pointwise Cauchy at each $x$ is not enough for uniform convergence.`
    ],
    proof: {
      idea: '(=>) Triangle inequality $|f_m(x) - f_n(x)| <= |f_m(x) - f(x)| + |f(x) - f_n(x)| < 2\\varepsilon$. (<=) Pointwise Cauchy gives limit $f(x)$; taking $n -> \\infty$ in $|f_m(x) - f_n(x)| <= \\varepsilon$ preserves the bound uniformly.',
      why: 'Completeness of $\\mathbb{R}$ supplies the pointwise limit, and uniform bounds pass to limits.',
      rungs: [
        {
          why: '(=>) If $f_n \\to f$ uniformly on $A$, choose $K(\\varepsilon/2)$ such that $n \\ge K \\implies |f_n(x) - f(x)| \\le \\varepsilon/2$ for all $x$.',
          m: '$$m, n \\ge K(\\varepsilon/2) \\implies |f_m(x) - f_n(x)| \\le |f_m(x) - f(x)| + |f_n(x) - f(x)| \\le \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$',
          meaning: 'What this really means: If the sequence uniformly clusters around a limit curve, any two late function graphs must stay within epsilon of each other.'
        },
        {
          why: 'Taking supremum over $x \\in A$ gives $\\|f_m - f_n\\|_A \\le \\varepsilon$.',
          m: '$$\\|f_m - f_n\\|_A \\le \\varepsilon \\quad \\forall m, n \\ge K(\\varepsilon/2)$$',
          meaning: 'What this really means: The maximum separation between any two late curves across the whole domain is bounded by epsilon.'
        },
        {
          why: '(<=) Assume the Cauchy condition. For each fixed $x \\in A$, $(f_n(x))$ is a Cauchy sequence in $\\mathbb{R}$.',
          m: '$$|f_m(x) - f_n(x)| \\le \\varepsilon \\quad \\forall m, n \\ge H(\\varepsilon)$$',
          meaning: 'What this really means: At each individual point, the output numbers form a standard Cauchy sequence of real numbers.'
        },
        {
          why: 'By completeness of $\\mathbb{R}$ (Theorem 3.5.5), $(f_n(x))$ converges in $\\mathbb{R}$. Define $f(x) = \\lim_{n\\to\\infty} f_n(x)$.',
          m: '$$f(x) := \\lim_{n\\to\\infty} f_n(x) \\quad \\forall x \\in A$$',
          meaning: 'What this really means: Completeness of the real numbers guarantees that each point\'s sequence of values converges to an unambiguous destination.'
        },
        {
          why: 'Keep $m \\ge H(\\varepsilon)$ fixed and send $n \\to \\infty$ in $|f_m(x) - f_n(x)| \\le \\varepsilon$. By Theorem 3.2.6, limits preserve weak inequalities.',
          m: '$$|f_m(x) - f(x)| = \\lim_{n\\to\\infty} |f_m(x) - f_n(x)| \\le \\varepsilon \\quad \\forall x \\in A, \\, m \\ge H(\\varepsilon)$$',
          meaning: 'What this really means: Passing to the limit preserves the uniform tolerance, proving that the sequence converges uniformly to this constructed limit function.'
        }
      ],
      ends: 'Therefore $\\|f_m - f\\|_A \\le \\varepsilon$ for all $m \\ge H(\\varepsilon)$, proving uniform convergence.'
    },
    cards: [
      { q: 'State the Cauchy Criterion for Uniform Convergence.', a: '$(f_n)$ converges uniformly on $A$ iff $\\forall \\varepsilon > 0$, $\\exists H$ such that $m, n \\ge H \\implies \\|f_m - f_n\\|_A \\le \\varepsilon$.', kind: 'state' },
      { q: 'How is the limit function $f(x)$ constructed in the proof of the Cauchy Criterion?', a: 'For each fixed $x$, $(f_n(x))$ is a Cauchy sequence of real numbers; by completeness of $\\mathbb{R}$, its pointwise limit defines $f(x)$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.8.2.2', bartle: '8.2.2', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'The Uniform Limit Theorem (Preservation of Continuity)',
    oneLine: 'The uniform limit of continuous functions is always continuous. No jumps allowed.',
    statement: `Let $(f_n)$ be a sequence of functions defined on $A \\subseteq \\mathbb{R}$ that converges <b>uniformly</b> on $A$ to a function $f$.
      <p>If each $f_n$ is <b>continuous at a point $c \\in A$</b>, then the limit function $f$ is also <b>continuous at $c$</b>.</p>
      <p>In particular, if each $f_n$ is continuous on all of $A$, then $f$ is continuous on all of $A$.</p>`,
    intuition: `<p>This is the big prize of uniform convergence! The proof is the famous <b>"$\\varepsilon/3$ argument"</b>:</p>
      $$|f(x) - f(c)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(c)| + |f_n(c) - f(c)|$$
      <p>1. The first term is $< \\varepsilon/3$ because $f_n$ is uniformly close to $f$.</p>
      <p>2. The second term is $< \\varepsilon/3$ because $f_n$ itself is continuous.</p>
      <p>3. The third term is $< \\varepsilon/3$ because $f_n(c)$ is close to $f(c)$.</p>
      <p>Adding them gives $|f(x) - f(c)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$!</p>`,
    needs: ['c.8.1.1', 'c.5.1.1', 'c.2.2.1'],
    traps: [
      `If the limit function $f$ is discontinuous, the convergence CANNOT be uniform! This is the quickest way to disprove uniform convergence in exams: check if the limit has a jump; if yes, uniform convergence is instantly ruled out!`,
      `Remember the converse is not true in general without extra conditions (like Dini's Theorem).`
    ],
    proof: {
      idea: `Use the triangle inequality to split $|f(x) - f(c)|$ into three terms of size $\\varepsilon/3$.`,
      why: `Uniform convergence controls the gap between $f$ and $f_n$ everywhere; continuity of $f_n$ controls the local gap between $f_n(x)$ and $f_n(c)$.`,
      rungs: [
        {
          why: 'Split the total change using the triangle inequality with an intermediate $f_n$.',
          m: '$$|f(x) - f(c)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(c)| + |f_n(c) - f(c)|$$',
          meaning: 'What this really means: Route the change in the limit function through an intermediate continuous member of the sequence using three short hops.'
        },
        {
          why: 'Choose $N$ such that for all $n \\ge N$ and all $t \\in A$, $|f_n(t) - f(t)| < \\varepsilon/3$.',
          m: '$$|f(x) - f_N(x)| < \\varepsilon/3 \\quad \\text{and} \\quad |f_N(c) - f(c)| < \\varepsilon/3$$',
          meaning: 'What this really means: Use uniform convergence to pick a curve so close to the limit that jumping between them at both ends costs under a third of epsilon.'
        },
        {
          why: 'Since $f_N$ is continuous at $c$, choose $\\delta > 0$ such that $|x - c| < \\delta \\implies |f_N(x) - f_N(c)| < \\varepsilon/3$.',
          m: '$$|f_N(x) - f_N(c)| < \\varepsilon/3$$',
          meaning: 'What this really means: Because that intermediate curve is continuous, taking a sufficiently small step along it costs under a third of epsilon.'
        },
        {
          why: 'Combine all three $\\varepsilon/3$ bounds.',
          m: '$$|f(x) - f(c)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$$',
          meaning: 'What this really means: Adding the three hops keeps the total vertical change under epsilon, proving that the limit function is strictly continuous.'
        }
      ],
      ends: 'Therefore, $f$ is continuous at $c$.'
    },
    cards: [
      { q: 'State the Uniform Limit Theorem.', a: 'If $(f_n)$ is a sequence of continuous functions converging uniformly to $f$ on $A$, then $f$ is continuous on $A$.', kind: 'state' },
      { q: 'If $f_n(x) = x^n$ on $[0, 1]$, why does the Uniform Limit Theorem prove $f_n$ does NOT converge uniformly?', a: 'Because each $f_n$ is continuous, but the limit function is discontinuous at $x = 1$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.2.3', bartle: '8.2.3', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'Interchange of Limit and Derivative',
    oneLine: 'If derivatives f_n\' converge uniformly and f_n(x_0) converges at one point, then (lim f_n)\' = lim f_n\'.',
    statement: `Let $J \\subseteq \\mathbb{R}$ be a bounded interval, and let $(f_n)$ be a sequence of differentiable functions on $J$.
      <p>Suppose that:
      <br>(1) There exists a point $x_0 \\in J$ such that the number sequence $(f_n(x_0))$ converges.
      <br>(2) The sequence of derivatives $(f_n')$ converges <b>uniformly</b> on $J$ to a function $g$.</p>
      <p>Then:
      <br>(a) $(f_n)$ converges uniformly on $J$ to a differentiable function $f$.
      <br>(b) $f'(x) = g(x) = \\lim_{n\\to\\infty} f_n'(x)$ for all $x \\in J$.
      $$\\frac{d}{dx} \\left[ \\lim_{n\\to\\infty} f_n(x) \\right] = \\lim_{n\\to\\infty} f_n'(x)$$</p>`,
    intuition: `<p>Swapping derivatives is the most dangerous operation in calculus! You can have $f_n \\to 0$ uniformly, while its derivatives explode to infinity (e.g. $f_n(x) = \\frac{\\sin(nx)}{n} \\to 0$, but $f_n'(x) = \\cos(nx)$ oscillates wildly without converging!).</p>
      <p>To safely swap limit and derivative, uniform convergence of $f_n$ is NOT ENOUGH: you need <b>uniform convergence of the derivatives $f_n'$</b>!</p>`,
    needs: ['c.8.1.10', 'c.6.2.4', 'c.8.2.2'],
    traps: [
      `Assuming uniform convergence of $f_n$ guarantees differentiability of the limit. Weierstrass constructed a uniform limit of smooth polynomials that is differentiable NOWHERE!`,
      `The critical condition is that $(f_n')$ must converge UNIFORMLY, not just pointwise.`
    ],
    proof: {
      idea: 'Apply Lagrange MVT to $f_m - f_n$ on $[x_0, x]$ to prove $(f_n)$ is uniformly Cauchy, then apply MVT to difference quotients to show $f\'(c) = g(c)$.',
      why: 'MVT transfers uniform convergence of $(f_n\')$ into control over $|(f_m(x)-f_n(x)) - (f_m(c)-f_n(c))|/(x - c)$.',
      rungs: [
        {
          why: 'For any $x \\in J$, apply MVT (6.2.4) to $f_m - f_n$ on the interval between $x_0$ and $x$.',
          m: '$$f_m(x) - f_n(x) = f_m(x_0) - f_n(x_0) + (x - x_0)[f_m\'(y) - f_n\'(y)] \\quad \\text{for some } y$$',
          meaning: 'What this really means: The Mean Value Theorem expresses the difference between two functions as their baseline difference plus their slope difference.'
        },
        {
          why: 'Since $(f_n(x_0))$ converges and $(f_n\')$ is uniformly Cauchy, $(f_n)$ is uniformly Cauchy on $J$, so $f_n \\to f$ uniformly on $J$.',
          m: '$$\\|f_m - f_n\\|_J \\le |f_m(x_0) - f_n(x_0)| + (b - a)\\|f_m\' - f_n\'\\|_J < \\varepsilon$$',
          meaning: 'What this really means: Because the slopes cluster uniformly and one point converges, the functions themselves are forced to converge uniformly.'
        },
        {
          why: 'For fixed $c \\in J$ and $x \\ne c$, apply MVT to $(f_m - f_n)$ on $[c, x]$: $\\frac{f_m(x)-f_m(c)}{x-c} - \\frac{f_n(x)-f_n(c)}{x-c} = f_m\'(z) - f_n\'(z)$.',
          m: '$$\\left| \\frac{f_m(x) - f_m(c)}{x - c} - \\frac{f_n(x) - f_n(c)}{x - c} \\right| \\le \\|f_m\' - f_n\'\\|_J < \\varepsilon$$',
          meaning: 'What this really means: Secant slopes of the functions cluster uniformly because the derivatives controlling them cluster uniformly.'
        },
        {
          why: 'Take $m \\to \\infty$: $|\\frac{f(x) - f(c)}{x - c} - \\frac{f_n(x) - f_n(c)}{x - c}| \\le \\varepsilon$.',
          m: '$$\\left| \\frac{f(x) - f(c)}{x - c} - \\frac{f_n(x) - f_n(c)}{x - c} \\right| \\le \\varepsilon$$',
          meaning: 'What this really means: Sending $m$ to infinity shows the secant slope of the limit function stays within epsilon of the secant slope of $f_n$.'
        },
        {
          why: 'Combine with $|f_n\'(c) - g(c)| < \\varepsilon$ and differentiability of $f_n$ at $c$ to conclude $|\\frac{f(x)-f(c)}{x-c} - g(c)| < 3\\varepsilon$.',
          m: '$$f\'(c) = \\lim_{x\\to c} \\frac{f(x) - f(c)}{x - c} = g(c)$$',
          meaning: 'What this really means: The limit function\'s derivative exists and matches the uniform limit of the derivatives: $(\lim f_n)\' = \lim (f_n\')$.'
        }
      ],
      ends: 'The derivative of the limit equals the uniform limit of the derivatives: $(\\lim f_n)\' = \\lim f_n\'$.'
    },
    cards: [
      { q: 'What key condition guarantees that $(\\lim f_n)\' = \\lim f_n\'$?', a: 'The sequence of derivatives $(f_n\')$ must converge UNIFORMLY (and $f_n(x_0)$ converges at one point).', kind: 'state' },
      { q: 'Give an example where $f_n \\to 0$ uniformly, but $\\lim f_n\' \\ne (\\lim f_n)\'$.', a: '$f_n(x) = \\dfrac{\\sin(nx)}{n} \\to 0$ uniformly on $\\mathbb{R}$, but $f_n\'(x) = \\cos(nx)$ does not converge at all.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.2.4', bartle: '8.2.4', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'Interchange of Limit and Integral',
    oneLine: 'Under uniform convergence, the limit of the integrals equals the integral of the limit.',
    statement: `Let $(f_n)$ be a sequence of functions in $\\mathcal{R}[a, b]$ that converges <b>uniformly</b> on $[a, b]$ to $f$.
      <p>Then $f \\in \\mathcal{R}[a, b]$, and:
      $$\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b \\left( \\lim_{n\\to\\infty} f_n(x) \\right) dx = \\int_a^b f(x) \\, dx$$</p>`,
    intuition: `<p>In pure calculus, swapping limits is dangerous: $\\lim \\int \\ne \\int \\lim$ in general! Look at this famous counterexample:</p>
      <p>Consider a tall narrow spike function $f_n(x)$ on $[0, 1]$ of height $n$ and width $1/n$. At every fixed point $x > 0$, $f_n(x) \\to 0$, so the pointwise limit is $0$, whose integral is $0$. But the area under the spike is $\\int_0^1 f_n = 1$ for every $n$! So $\\lim \\int = 1 \\ne 0 = \\int \\lim$.</p>
      <p>Uniform convergence prevents these rogue spikes from shooting off to infinity by locking the entire function inside a flat envelope, making the limit swap 100% legal!</p>`,
    needs: ['c.8.1.1', 'c.7.1.1', 'c.8.1.10'],
    traps: [
      `Assuming you can always interchange limit and integral without checking uniform convergence. The moving spike counterexample is a classic exam favorite!`,
      `For differentiation, even uniform convergence of $f_n$ is not enough! You need uniform convergence of the DERIVATIVES $f_n'$ to interchange $\\frac{d}{dx}$ and $\\lim$.`
    ],
    proof: {
      idea: 'Show that $\\int_a^b f_n$ forms a Cauchy sequence of real numbers using $|\\int f_m - \\int f_n| <= \\|f_m - f_n\\|(b - a)$, then show $f \\in \\mathcal{R}[a, b]$ with that limit.',
      why: 'Uniform convergence controls the gap $|f_n(x) - f(x)| < \\varepsilon$ simultaneously for all $x$, so the integral of the difference is bounded by $\\varepsilon(b - a)$.',
      rungs: [
        {
          why: 'Given $\\varepsilon > 0$, by Cauchy Criterion (8.1.10), $\\exists H(\\varepsilon)$ such that for $m > n \\ge H$, $-\\varepsilon \\le f_m(x) - f_n(x) \\le \\varepsilon$ for all $x \\in [a, b]$.',
          m: '$$-\\varepsilon(b - a) \\le \\int_a^b f_m - \\int_a^b f_n \\le \\varepsilon(b - a)$$',
          meaning: 'What this really means: When functions stay uniformly within epsilon of each other, the difference between their total areas cannot exceed epsilon times the interval length.'
        },
        {
          why: 'Thus $(\\int_a^b f_n)$ is a Cauchy sequence in $\\mathbb{R}$, hence converges to some limit $A = \\lim_{n\\to\\infty} \\int_a^b f_n$.',
          m: '$$A = \\lim_{n\\to\\infty} \\int_a^b f_n$$',
          meaning: 'What this really means: The sequence of real area numbers forms a Cauchy sequence, so completeness guarantees it converges to a definite limit $A$.'
        },
        {
          why: 'Since $f_n \\to f$ uniformly, choose $K$ such that for $m \\ge K$, $|f_m(x) - f(x)| < \\varepsilon$ for all $x \\in [a, b]$. For any tagged partition $\\dot{\\mathcal{P}}$, $|S(f; \\dot{\\mathcal{P}}) - S(f_m; \\dot{\\mathcal{P}})| \\le \\varepsilon(b - a)$.',
          m: '$$|S(f; \\dot{\\mathcal{P}}) - S(f_m; \\dot{\\mathcal{P}})| \\le \\varepsilon(b - a)$$',
          meaning: 'What this really means: Any Riemann sum of the limit function is tightly bound to the Riemann sum of a late sequence member.'
        },
        {
          why: 'Pick $m$ so large that $|\\int_a^b f_m - A| < \\varepsilon$. Since $f_m$ is integrable, choose $\\delta > 0$ such that $\\|\\dot{\\mathcal{P}}\\| < \\delta \\implies |S(f_m; \\dot{\\mathcal{P}}) - \\int_a^b f_m| < \\varepsilon$.',
          m: '$$|S(f; \\dot{\\mathcal{P}}) - A| \\le |S(f) - S(f_m)| + |S(f_m) - \\int f_m| + |\\int f_m - A| < \\varepsilon(b - a) + 2\\varepsilon$$',
          meaning: 'What this really means: Route the Riemann sum of $f$ to the target area $A$ through $f_m$, keeping the total discrepancy arbitrarily small.'
        },
        {
          why: 'Since $\\varepsilon > 0$ is arbitrary, $f \\in \\mathcal{R}[a, b]$ and $\\int_a^b f = A = \\lim_{n\\to\\infty} \\int_a^b f_n$.',
          m: '$$\\int_a^b f = \\lim_{n\\to\\infty} \\int_a^b f_n$$',
          meaning: 'What this really means: The limit function is fully integrable, and the integral of the limit equals the limit of the integrals.'
        }
      ],
      ends: 'Interchange of limit and Riemann integral is established.'
    },
    cards: [
      { q: 'Under what condition is $\\lim_{n\\to\\infty} \\int_a^b f_n = \\int_a^b \\lim_{n\\to\\infty} f_n$ guaranteed?', a: 'When $f_n \\in \\mathcal{R}[a, b]$ and $(f_n)$ converges uniformly to $f$ on $[a, b]$.', kind: 'state' },
      { q: 'Give an example where pointwise limit holds but $\\lim \\int f_n \\ne \\int \\lim f_n$.', a: 'A sequence of spikes $f_n$ on $[0, 1]$ with area $\\int f_n = 1$ but $f_n(x) \\to 0$ pointwise.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.2.5', bartle: '8.2.5', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'Bounded Convergence Theorem for Riemann Integrals',
    oneLine: 'If a sequence of integrable functions is uniformly bounded and converges pointwise to an integrable limit, integrals converge.',
    statement: `Let $(f_n)$ be a sequence in $\\mathcal{R}[a, b]$ that converges <b>pointwise</b> on $[a, b]$ to an integrable function $f \\in \\mathcal{R}[a, b]$.
      <p>Suppose there exists $M > 0$ such that:
      $$|f_n(x)| \\le M \\quad \\text{for all } x \\in [a, b] \\text{ and all } n \\in \\mathbb{N}$$
      Then:
      $$\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx$$</p>`,
    intuition: `<p>Notice how amazing this theorem is: it does NOT require uniform convergence!</p>
      <p>Why did the runaway spike counterexample fail earlier? Because the height of the spike shot off to infinity ($h = n$). The Bounded Convergence Theorem puts a hard ceiling $M$ on the whole family: if no spike can ever poke higher than $M$, then pointwise convergence alone is enough to guarantee that the areas converge!</p>`,
    needs: ['c.8.2.4', 'c.7.1.5'],
    traps: [
      `The limit function $f$ must be assumed to be Riemann integrable (unlike in Lebesgue integration theory where integrability is automatic).`,
      `The uniform bound $M$ must NOT depend on $n$ or $x$.`
    ],
    proof: {
      idea: 'Divide $[a, b]$ into a set where $f_n \\to f$ except on a set of small measure, and use $|f_n - f| \\le 2M$ to bound the remaining contribution.',
      why: 'Uniform boundedness prevents escapes to infinity, allowing Egorov-like truncation.',
      rungs: [
        {
          why: 'Let $g_n = |f_n - f|$. Then $g_n(x) \\to 0$ pointwise on $[a, b]$, and $|g_n(x)| \\le 2M$ for all $x, n$.',
          m: '$$0 \\le g_n(x) \\le 2M, \\quad \\lim_{n\\to\\infty} g_n(x) = 0$$',
          meaning: 'What this really means: Look at the absolute gap function, which shrinks to zero at every point while staying capped beneath a universal ceiling $2M$.'
        },
        {
          why: 'Given $\\varepsilon > 0$, by Arzelà\'s theorem, the set of points where $g_n(x) \\ge \\frac{\\varepsilon}{2(b-a)}$ can be enclosed in subintervals of total length $< \\frac{\\varepsilon}{4M}$.',
          m: '$$\\int_{\\text{bad}} g_n \\le 2M \\cdot \\frac{\\varepsilon}{4M} = \\frac{\\varepsilon}{2}$$',
          meaning: 'What this really means: The troublesome spots where the gap remains noticeable can be trapped in a tiny total footprint whose area contribution is at most half-epsilon.'
        },
        {
          why: 'On the remaining good set, $g_n(x) < \\frac{\\varepsilon}{2(b-a)}$, so its integral is bounded by $\\frac{\\varepsilon}{2(b-a)}(b - a) = \\frac{\\varepsilon}{2}$.',
          m: '$$\\int_{\\text{good}} g_n < \\frac{\\varepsilon}{2}$$',
          meaning: 'What this really means: Across the rest of the domain, the gap is tiny everywhere, so its area contribution is also at most half-epsilon.'
        },
        {
          why: 'Combine both parts: $\\int_a^b |f_n - f| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$.',
          m: '$$\\left| \\int_a^b f_n - \\int_a^b f \\right| \\le \\int_a^b |f_n - f| < \\varepsilon$$',
          meaning: 'What this really means: Combining the well-behaved region and the tiny troubled footprint keeps the total area error below epsilon, validating limit-integral swap under bounded pointwise convergence.'
        }
      ],
      ends: 'Therefore $\\lim_{n\\to\\infty} \\int_a^b f_n = \\int_a^b f$.'
    },
    cards: [
      { q: 'State the Bounded Convergence Theorem for Riemann integrals.', a: 'If $f_n, f \\in \\mathcal{R}[a, b]$, $f_n \\to f$ pointwise, and $|f_n(x)| \\le M$ for all $n, x$, then $\\lim \\int_a^b f_n = \\int_a^b f$.', kind: 'state' },
      { q: 'How does the Bounded Convergence Theorem differ from Theorem 8.2.4?', a: 'It replaces the stringent hypothesis of uniform convergence with uniform boundedness ($|f_n| \\le M$).', kind: 'recall' }
    ]
  },

  {
    id: 'c.8.2.6', bartle: '8.2.6', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'Dini’s Theorem on Monotone Sequences of Functions',
    oneLine: 'A monotone sequence of continuous functions on a compact interval converging to a continuous limit MUST converge uniformly.',
    statement: `Let $I = [a, b]$ be a closed bounded interval, and let $(f_n)$ be a <b>monotone</b> sequence of <b>continuous</b> functions on $I$ that converges pointwise to a <b>continuous</b> function $f$ on $I$.
      <p>Then the convergence of $(f_n)$ to $f$ is <b>uniform</b> on $I$.</p>`,
    intuition: `<p>Normally, pointwise convergence does NOT imply uniform convergence. But Italian mathematician Ulisse Dini discovered the magic combination that forces uniformity:</p>
      <p>1. <b>Monotonicity:</b> The graphs move in only one direction (e.g. marching down, $f_{n+1} \\le f_n$). No oscillations!</p>
      <p>2. <b>Continuity of everything:</b> Both the approximating functions $f_n$ AND the limit function $f$ are continuous.</p>
      <p>3. <b>Compact domain:</b> The interval $[a, b]$ is closed and bounded.</p>
      <p>When these three align, it is physically impossible for a sharp non-uniform peak to hide: the entire curve is dragged into uniform convergence!</p>`,
    needs: ['c.8.2.2', 'c.5.3.4'],
    traps: [
      `ALL THREE conditions are mandatory!`,
      `• If the domain is open like $(0, 1)$, Dini fails ($f_n(x) = x^n$ on $(0, 1)$).`,
      `• If the limit $f$ is discontinuous, Dini fails ($x^n$ on $[0, 1]$).`,
      `• If the sequence is not monotone, Dini fails (moving spike functions).`
    ],
    proof: {
      idea: 'Let $g_n = f_n - f \\ge 0$ decrease to 0. If convergence were not uniform, $\\sup g_n \\ge \\varepsilon_0$; continuity on compact $[a, b]$ yields a maximum point $x_n$, whose convergent subsequence produces a contradiction.',
      why: 'Bolzano-Weierstrass extracts a cluster point where $g_n$ cannot drop to 0, contradicting pointwise convergence.',
      rungs: [
        {
          why: 'Assume without loss of generality that $(f_n)$ is decreasing. Let $g_n = f_n - f$. Then each $g_n$ is continuous on $[a, b]$, $g_{n+1}(x) \\le g_n(x)$, and $g_n(x) \\to 0$ for each $x$.',
          m: '$$g_n \\ge g_{n+1} \\ge 0, \\quad g_n(x) \\to 0 \\quad \\forall x \\in [a, b]$$',
          meaning: 'What this really means: Subtract the continuous limit to get a sequence of continuous non-negative functions that march downward to zero at every point.'
        },
        {
          why: 'Suppose for contradiction that $g_n$ does not converge uniformly to $0$. Then $\\exists \\varepsilon_0 > 0$ such that $\\|g_n\\|_{[a, b]} \\ge \\varepsilon_0$ for all $n$.',
          m: '$$\\|g_n\\|_{[a, b]} \\ge \\varepsilon_0 \\quad \\forall n \\in \\mathbb{N}$$',
          meaning: 'What this really means: Assume for contradiction that uniform convergence fails, meaning every curve in the sequence maintains a peak at or above a fixed height.'
        },
        {
          why: 'Since $g_n$ is continuous on compact $[a, b]$, by Maximum-Minimum Theorem (5.3.4), $g_n$ attains its maximum at some $x_n \\in [a, b]$: $g_n(x_n) \\ge \\varepsilon_0$.',
          m: '$$g_n(x_n) = \\sup_{x \\in [a, b]} g_n(x) \\ge \\varepsilon_0$$',
          meaning: 'What this really means: On a compact interval, each continuous curve actually attains its peak at a specific point $x_n$.'
        },
        {
          why: 'By Bolzano-Weierstrass (3.4.8), $(x_n)$ has a subsequence $(x_{n_k})$ converging to some $x^* \\in [a, b]$. For any fixed $m$, when $n_k \\ge m$, monotonicity gives $g_m(x_{n_k}) \\ge g_{n_k}(x_{n_k}) \\ge \\varepsilon_0$.',
          m: '$$g_m(x_{n_k}) \\ge \\varepsilon_0 \\quad \\forall n_k \\ge m$$',
          meaning: 'What this really means: The sequence of peak locations clusters around a limit point $x^*$, and monotonicity ensures an earlier function was at least as tall there.'
        },
        {
          why: 'Take $k \\to \\infty$: by continuity of $g_m$, $g_m(x^*) = \\lim_{k\\to\\infty} g_m(x_{n_k}) \\ge \\varepsilon_0$. But this holds for ALL $m$, contradicting $g_m(x^*) \\to 0$!',
          m: '$$g_m(x^*) \\ge \\varepsilon_0 \\quad \\forall m \\implies \\lim_{m\\to\\infty} g_m(x^*) \\ge \\varepsilon_0 > 0 \\implies\\Leftarrow$$',
          meaning: 'What this really means: Passing to the limit forces that single cluster point to stay stubbornly above the threshold for all functions, contradicting pointwise convergence to zero.'
        }
      ],
      ends: 'Contradiction! Therefore, $(g_n)$ converges uniformly to $0$, proving Dini’s Theorem.'
    },
    cards: [
      { q: 'State Dini’s Theorem.', a: 'If $(f_n)$ is a monotone sequence of continuous functions on $[a, b]$ converging pointwise to a continuous limit $f$, then the convergence is uniform.', kind: 'state' },
      { q: 'Why does Dini’s Theorem fail for $f_n(x) = x^n$ on $[0, 1]$?', a: 'Because the pointwise limit function $f$ is discontinuous at $x = 1$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.3.1', bartle: '8.3.1', sec: '8.3', kind: 'definition', tier: 'ext',
    title: 'The Exponential Function via Power Series',
    oneLine: 'e^x is defined as the infinite series 1 + x + x^2/2! + x^3/3! + ... converging everywhere.',
    statement: `The <b>exponential function</b> $E: \\mathbb{R} \\to \\mathbb{R}$ is defined for all $x \\in \\mathbb{R}$ by:
      $$E(x) = e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$
      <p>The series converges absolutely and uniformly on any bounded interval $[-A, A]$.</p>
      <p><b>Key Properties:</b>
      (1) $E(x + y) = E(x)E(y)$ for all $x, y \\in \\mathbb{R}$.<br>
      (2) $E'(x) = E(x)$ and $E(0) = 1$.<br>
      (3) $E(x) > 0$ for all $x \\in \\mathbb{R}$.</p>`,
    intuition: `<p>In school, you defined $e^x$ by raising $2.718...$ to the power $x$. But what does $e^{\\sqrt{2}}$ mean? You cannot multiply $e$ by itself $\\sqrt{2}$ times!</p>
      <p>In Real Analysis, we turn this around: we define $e^x$ directly through its power series. Because $n!$ grows faster than any polynomial, this series converges for EVERY real number on Earth! Its derivative is itself ($E'(x) = E(x)$), making it the natural foundation for all differential equations.</p>`,
    needs: ['c.3.7.1', 'c.6.1.1'],
    traps: [
      `$e^x$ is strictly positive everywhere: $e^x > 0$ for all $x \\in \\mathbb{R}$. It never touches $0$ and never turns negative!`,
      `The natural logarithm $\\ln x$ is defined as the unique inverse function of $E(x)$ for $x > 0$, so $\\ln(e^x) = x$ and $\\frac{d}{dx}\\ln x = \\frac{1}{x}$.`
    ],
    proof: {
      idea: 'Differentiate the power series term-by-term on any bounded interval $[-A, A]$. The derivative series $\\sum_{n=1}^\\infty \\frac{n x^{n-1}}{n!} = \\sum_{n=1}^\\infty \\frac{x^{n-1}}{(n-1)!}$ is an exact re-indexing of the original series.',
      why: 'Term-by-term differentiation of power series (Theorem 8.2.3) inside radius of convergence.',
      rungs: [
        {
          why: 'Write the exponential function as its defining power series:',
          m: '$$E(x) = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$',
          meaning: 'What this really means: The function is given by a power series centered at 0 with coefficients 1/n!.'
        },
        {
          why: 'Using the Ratio Test, the radius of convergence is infinite because $\\lim \\frac{n!}{(n+1)!} = \\lim \\frac{1}{n+1} = 0$, so $R = \\infty$.',
          m: '$$R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\lim_{n\\to\\infty} (n+1) = \\infty$$',
          meaning: 'What this really means: The factorial denominator crushes growth so fast that the series converges everywhere on the real line.'
        },
        {
          why: 'By Theorem 8.2.3, power series can be differentiated term-by-term inside their radius of convergence:',
          m: '$$E\'(x) = \\sum_{n=1}^\\infty \\frac{d}{dx}\\left(\\frac{x^n}{n!}\\right) = \\sum_{n=1}^\\infty \\frac{n x^{n-1}}{n!} = \\sum_{n=1}^\\infty \\frac{x^{n-1}}{(n-1)!}$$',
          meaning: 'What this really means: Taking the derivative shifts each power down by one and cancels the leading factor with the factorial.'
        },
        {
          why: 'Re-index the sum by setting $k = n - 1$. As $n$ runs from $1$ to $\\infty$, $k$ runs from $0$ to $\\infty$:',
          m: '$$E\'(x) = \\sum_{k=0}^\\infty \\frac{x^k}{k!} = E(x)$$',
          meaning: 'What this really means: Shifting the index restores the exact identical formula, proving the function is its own derivative.'
        }
      ],
      ends: 'Therefore $E\'(x) = E(x)$ for all $x \\in \\mathbb{R}$, with $E(0) = 1$.'
    },
    cards: [
      { q: 'State the power series definition of $e^x$.', a: '$e^x = \\sum_{n=0}^\\infty \\dfrac{x^n}{n!} = 1 + x + \\dfrac{x^2}{2!} + \\cdots$', kind: 'state' },
      { q: 'What is the unique differential equation satisfied by $f(x) = e^x$ with $f(0) = 1$?', a: '$f\'(x) = f(x)$ and $f(0) = 1$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.8.4.1', bartle: '8.4.1', sec: '8.4', kind: 'definition', tier: 'ext',
    title: 'The Trigonometric Functions Sine and Cosine via Power Series',
    oneLine: 'sin(x) and cos(x) defined rigorously as alternating power series of odd and even powers.',
    statement: `For all $x \\in \\mathbb{R}$, the <b>sine</b> and <b>cosine</b> functions are defined by:
      $$\\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n + 1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$
      $$\\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$
      <p>Both series converge absolutely for all $x \\in \\mathbb{R}$.</p>
      <p><b>Core Identities:</b>
      (1) $\\frac{d}{dx}(\\sin x) = \\cos x$ and $\\frac{d}{dx}(\\cos x) = -\\sin x$.<br>
      (2) $\\cos^2 x + \\sin^2 x = 1$ for all $x \\in \\mathbb{R}$.</p>`,
    intuition: `<p>In high school, $\\sin x$ and $\\cos x$ were defined using right-angled triangles ($\text{opposite} / \text{hypotenuse}$). But triangles only make sense for angles between $0^\\circ$ and $90^\\circ$!</p>
      <p>In Real Analysis, we define $\\sin x$ and $\\cos x$ purely analytically using power series. No geometry or triangles needed! The Pythagorean identity $\\cos^2 x + \\sin^2 x = 1$ is proven by differentiating: $\\frac{d}{dx}(\\cos^2 x + \\sin^2 x) = 2\\cos(-\\sin) + 2\\sin(\\cos) = 0$, so the sum is constant and equals $1$ at $x = 0$!</p>`,
    needs: ['c.8.3.1', 'c.6.1.1'],
    traps: [
      `$\\sin x$ is an ODD function (contains only odd powers of $x$: $x^1, x^3, x^5$), so $\\sin(-x) = -\\sin x$.`,
      `$\\cos x$ is an EVEN function (contains only even powers: $x^0, x^2, x^4$), so $\\cos(-x) = \\cos x$.`
    ],
    proof: {
      idea: 'Differentiate $\\sin x$ and $\\cos x$ term-by-term to show $(\\sin x)\' = \\cos x$ and $(\\cos x)\' = -\\sin x$. Then define $g(x) = \\cos^2 x + \\sin^2 x$ and compute $g\'(x) = 2\\cos x(-\\sin x) + 2\\sin x(\\cos x) = 0$. Since $g\' = 0$, $g$ is constant, and $g(0) = 1$.',
      why: 'Power series differentiation combined with the Zero Derivative Theorem (6.2.5).',
      rungs: [
        {
          why: 'Differentiate the power series for $\\sin x$ term-by-term:',
          m: '$$\\frac{d}{dx}(\\sin x) = \\sum_{n=0}^\\infty \\frac{(-1)^n (2n+1) x^{2n}}{(2n+1)!} = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!} = \\cos x$$',
          meaning: 'What this really means: Differentiating the odd power series cancels (2n+1) and leaves the exact even power series for cosine.'
        },
        {
          why: 'Differentiate the power series for $\\cos x$ term-by-term:',
          m: '$$\\frac{d}{dx}(\\cos x) = \\sum_{n=1}^\\infty \\frac{(-1)^n (2n) x^{2n-1}}{(2n)!} = -\\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k+1}}{(2k+1)!} = -\\sin x$$',
          meaning: 'What this really means: Differentiating the even power series shifts the index and introduces a minus sign, yielding negative sine.'
        },
        {
          why: 'Define $g(x) = \\cos^2 x + \\sin^2 x$. Differentiating using the chain and product rules:',
          m: '$$g\'(x) = 2(\\cos x)(-\\sin x) + 2(\\sin x)(\\cos x) = -2\\sin x \\cos x + 2\\sin x \\cos x = 0$$',
          meaning: 'What this really means: The rate of change of the sum of squares is precisely zero everywhere on the line.'
        },
        {
          why: 'Since $g\'(x) = 0$ for all $x \\in \\mathbb{R}$, by the Constant Function Theorem (6.2.5), $g(x)$ is constant. Evaluating at $x = 0$ gives $g(0) = 1^2 + 0^2 = 1$.',
          m: '$$g(x) = g(0) = \\cos^2(0) + \\sin^2(0) = 1 + 0 = 1 \\quad \\forall x \\in \\mathbb{R}$$',
          meaning: 'What this really means: The Pythagorean identity is an inescapable consequence of the power series definitions and calculus.'
        }
      ],
      ends: 'Therefore $\\cos^2 x + \\sin^2 x = 1$ for all $x \\in \\mathbb{R}$.'
    },
    cards: [
      { q: 'State the power series expansion of $\\sin x$.', a: '$\\sin x = \\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120} - \\cdots$', kind: 'state' },
      { q: 'How is $\\cos^2 x + \\sin^2 x = 1$ proven using calculus?', a: 'Differentiate $g(x) = \\cos^2 x + \\sin^2 x$ to get $g\'(x) = 0$; since $g(0) = 1$, $g(x) = 1$ constantly.', kind: 'recall' }
    ]
  }
);

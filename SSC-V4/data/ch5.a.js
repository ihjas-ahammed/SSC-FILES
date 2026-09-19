/* Bartle 5.1 Continuous Functions · 5.2 Combinations of Continuous Functions */
CONCEPTS.push(
  {
    id: 'c.5.1.1', bartle: '5.1.1', sec: '5.1', kind: 'definition', tier: 'core',
    title: 'Continuity at a Point',
    oneLine: 'f is continuous at c when you can force f(x) as close to f(c) as you like by keeping x close enough to c.',
    statement: `Let $A\\subseteq\\mathbb{R}$, let $f:A\\to\\mathbb{R}$, and let $c\\in A$. We say $f$ is <b>continuous at $c$</b> if, given any $\\varepsilon>0$, there exists $\\delta>0$ such that for all $x\\in A$ with $|x-c|<\\delta$, we have $|f(x)-f(c)|<\\varepsilon$. If $f$ is not continuous at $c$, we say $f$ is <b>discontinuous at $c$</b>.`,
    intuition: `This is the same "closeness game" as the limit definition, but with two extra requirements: $c$ must actually be a point of the domain $A$, and the target value is $f(c)$ itself, not some abstract limit $L$. So continuity says: no matter how tight a tolerance $\\varepsilon$ someone hands you around $f(c)$, you can find a window $\\delta$ around $c$ that keeps every output inside that tolerance. Notice there is no punctured neighbourhood here &mdash; unlike limits, $x=c$ itself is allowed (and trivially satisfies the conclusion since $|f(c)-f(c)|=0$).`,
    needs: ['s.abs-ineq', 's.quantifier', 's.function', 'c.4.1.4'],
    figs: ['fig.eps-delta'],
    traps: [
      `The domain requirement is not optional: $c$ must be in $A$. "The limit exists at $c$" and "$f$ is continuous at $c$" are different claims &mdash; continuity also needs $f(c)$ to be defined and to equal that limit.`,
      `Students often forget the $\\forall\\varepsilon\\,\\exists\\delta$ order: $\\delta$ is allowed to depend on both $\\varepsilon$ and $c$, and must be produced after $\\varepsilon$ is given, never before.`,
    ],
    cards: [
      { q: 'State the $\\varepsilon$-$\\delta$ definition of continuity of $f$ at $c\\in A$.', a: '$\\forall\\varepsilon>0\\,\\exists\\delta>0$ such that $x\\in A,\\ |x-c|<\\delta \\Rightarrow |f(x)-f(c)|<\\varepsilon$.', kind: 'state' },
      { q: 'Why does the definition of continuity not need a "punctured" neighbourhood of $c$ (unlike the limit definition)?', a: 'Because $x=c$ is allowed: it trivially gives $|f(c)-f(c)|=0<\\varepsilon$, so including it costs nothing.', kind: 'recall' },
      { q: 'Is it possible for $f$ to be continuous at $c$ if $c\\notin A$?', a: 'No &mdash; continuity at $c$ requires $c\\in A$ so that $f(c)$ is defined; the question is meaningless otherwise.', kind: 'trap' },
    ],
  },
  {
    id: 'c.5.1.2', bartle: '5.1.2', sec: '5.1', kind: 'theorem', tier: 'core',
    title: 'Neighbourhood Characterization of Continuity',
    oneLine: 'f is continuous at c exactly when every neighbourhood of f(c) pulls back to contain a neighbourhood of c (intersected with the domain).',
    statement: `$f:A\\to\\mathbb{R}$ is continuous at $c\\in A$ if and only if for every $\\varepsilon$-neighbourhood $V_\\varepsilon(f(c))$ of $f(c)$ there exists a $\\delta$-neighbourhood $V_\\delta(c)$ of $c$ such that $x\\in A\\cap V_\\delta(c) \\Rightarrow f(x)\\in V_\\varepsilon(f(c))$; equivalently $f\\big(A\\cap V_\\delta(c)\\big)\\subseteq V_\\varepsilon(f(c))$.`,
    intuition: `This just repackages the $\\varepsilon$-$\\delta$ definition using "balls" instead of absolute-value inequalities: $|x-c|<\\delta$ is the same statement as $x\\in V_\\delta(c)$. It is the same idea one level more geometric, and it is the version that generalizes cleanly to topology (continuous = preimages of open sets are open).`,
    needs: ['c.5.1.1', 's.interval'],
    traps: [`Mixing up which neighbourhood is chosen first: $\\varepsilon$ (around $f(c)$) is given, $\\delta$ (around $c$) is produced in response &mdash; not the other way around.`],
    proof: {
      idea: 'Translate directly between absolute value inequalities and open neighbourhood membership.',
      why: '$|u - v| < r$ is logically identical to $u \\in V_r(v) = (v-r, v+r)$.',
      rungs: [
        {
          why: 'By definition, $x \\in V_\\delta(c) \\iff |x - c| < \\delta$.',
          m: '$$x \\in V_\\delta(c) \\iff c - \\delta < x < c + \\delta \\iff |x - c| < \\delta$$',
          meaning: 'What this really means: Being inside a symmetric interval around a point is just saying your physical distance from that point is smaller than the interval\'s radius.'
        },
        {
          why: 'Similarly, $f(x) \\in V_\\varepsilon(f(c)) \\iff |f(x) - f(c)| < \\varepsilon$.',
          m: '$$f(x) \\in V_\\varepsilon(f(c)) \\iff |f(x) - f(c)| < \\varepsilon$$',
          meaning: 'What this really means: Landing inside the target window on the vertical axis simply means the function output misses the bullseye by less than the error tolerance.'
        },
        {
          why: 'The condition $x \\in A \\cap V_\\delta(c) \\implies f(x) \\in V_\\varepsilon(f(c))$ is therefore equivalent to the $\\varepsilon$-$\\delta$ definition.',
          m: '$$x \\in A,\\, |x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$$',
          meaning: 'What this really means: Continuity is just an aiming guarantee: if you trap the input inside a small enough protective bubble, the output is guaranteed to land inside the required target bubble.'
        }
      ],
      ends: 'Thus the neighbourhood characterization is logically equivalent to continuity at $c$.'
    },
    cards: [
      { q: 'Restate continuity at $c$ using neighbourhoods instead of absolute values.', a: 'For every $V_\\varepsilon(f(c))$ there is $V_\\delta(c)$ with $f(A\\cap V_\\delta(c))\\subseteq V_\\varepsilon(f(c))$.', kind: 'state' },
      { q: 'What is $V_\\delta(c)$ notation shorthand for?', a: 'The open interval $(c-\\delta, c+\\delta)$, i.e. $\\{x:|x-c|<\\delta\\}$.', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.1.3', bartle: '5.1.3', sec: '5.1', kind: 'theorem', tier: 'core',
    title: 'Sequential Criterion for Continuity',
    oneLine: 'Continuity at c means every sequence heading to c has images heading to f(c).',
    statement: `Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$, $c\\in A$. Then $f$ is continuous at $c$ if and only if for every sequence $(x_n)$ in $A$ with $x_n\\to c$, the sequence $(f(x_n))\\to f(c)$.`,
    intuition: `This converts the $\\varepsilon$-$\\delta$ game into a statement about sequences, which is often much easier to work with in proofs. It is the continuity analogue of the Sequential Criterion for limits (4.1.8) &mdash; the only change is that we now require $c$ itself to be admissible as one of the "target" points, and the limit of the images must land exactly on $f(c)$.`,
    needs: ['c.5.1.1', 'c.4.1.8', 'c.3.1.3'],
    figs: ['fig.seq-crit'],
    traps: [
      `To prove continuity FAILS, one bad sequence suffices; to prove continuity HOLDS, you must show it for every sequence converging to $c$, not just check a few examples.`,
    ],
    proof: {
      idea: `($\\Rightarrow$) turn $\\varepsilon$-$\\delta$ into "eventually inside $\\delta$" language for sequences. ($\\Leftarrow$) prove the contrapositive: if continuity fails, build a bad sequence by picking $x_n$ within $1/n$ of $c$ that still violates the $\\varepsilon$ bound.`,
      why: `A sequence $x_n\\to c$ is exactly a way of generating points that are "eventually within any $\\delta$" of $c$, so it is the natural bridge between the topological ($\\delta$) and sequential worlds.`,
      rungs: [
        {
          why: 'Assume continuity at $c$ and take any sequence $x_n\\to c$ in $A$; fix $\\varepsilon>0$.',
          m: '$\\exists\\delta>0:\\ x\\in A,\\ |x-c|<\\delta \\Rightarrow |f(x)-f(c)|<\\varepsilon$',
          meaning: 'What this really means: We set up our safety zone: knowing the function is continuous gives us a distance boundary that guarantees safe outputs whenever inputs stay close enough.'
        },
        {
          why: 'Because $x_n\\to c$, eventually all terms land inside that $\\delta$-window.',
          m: '$\\exists K:\\ n\\ge K \\Rightarrow |x_n-c|<\\delta$',
          meaning: 'What this really means: A marching sequence that heads toward a destination must eventually step inside and stay permanently trapped inside any bubble surrounding that destination.'
        },
        {
          why: 'Feed those terms into the continuity bound.',
          m: '$n\\ge K \\Rightarrow |f(x_n)-f(c)|<\\varepsilon \\Rightarrow f(x_n)\\to f(c)$',
          meaning: 'What this really means: Because all late footsteps are inside the safe zone, their processed image outputs are automatically trapped inside the target zone, proving the outputs march right into the target.'
        },
        {
          why: 'For the converse, suppose continuity fails at $c$: negate the $\\varepsilon$-$\\delta$ statement.',
          m: '$\\exists\\varepsilon_0>0\\ \\forall\\delta>0\\ \\exists x\\in A: |x-c|<\\delta,\\ |f(x)-f(c)|\\ge\\varepsilon_0$',
          meaning: 'What this really means: If continuity breaks down, there is a fixed barrier distance such that no matter how tightly you squeeze an input window, some rogue point inside still gets thrown far outside the target.'
        },
        {
          why: 'Apply this with $\\delta=1/n$ to manufacture a specific sequence.',
          m: '$$\\text{pick } x_n\\in A,\\ |x_n-c|<1/n,\\ |f(x_n)-f(c)|\\ge\\varepsilon_0$$',
          meaning: 'What this really means: Shrink the search window tighter and tighter at each step (width $1/n$) and pluck out a rogue point each time, manufacturing an entire trail of troublemakers.'
        },
        {
          why: 'This sequence converges to $c$ but its images cannot converge to $f(c)$ &mdash; contradicting the hypothesis, so continuity must hold.',
          m: '$$x_n\\to c \\text{ but } f(x_n)\\not\\to f(c)$$',
          meaning: 'What this really means: These chosen inputs sneak right up to the destination, but their outputs stubbornly refuse to arrive there, exposing a fatal contradiction if all sequences were supposed to work.'
        }
      ],
      ends: `Both directions established: the $\\varepsilon$-$\\delta$ definition and the sequential condition are logically equivalent.`,
    },
    cards: [
      { q: 'State the Sequential Criterion for Continuity.', a: '$f$ is continuous at $c\\in A$ iff for every $(x_n)\\to c$ in $A$, $(f(x_n))\\to f(c)$.', kind: 'state' },
      { q: 'To show $f$ is discontinuous at $c$ using sequences, what must you exhibit?', a: 'A sequence $x_n\\to c$ in $A$ such that $f(x_n)$ does not converge to $f(c)$ (or does not converge at all).', kind: 'apply' },
      { q: 'Which earlier sequential result does this theorem mirror?', a: 'The Sequential Criterion for limits, Theorem 4.1.8.', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.1.4', bartle: '5.1.4', sec: '5.1', kind: 'corollary', tier: 'core',
    title: 'Discontinuity Criterion',
    oneLine: 'f is discontinuous at c exactly when some sequence heading to c has images that miss f(c).',
    statement: `Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$, $c\\in A$. Then $f$ is discontinuous at $c$ if and only if there exists a sequence $(x_n)$ in $A$ with $x_n\\to c$ but $(f(x_n))$ does not converge to $f(c)$.`,
    intuition: `This is just the contrapositive restatement of the Sequential Criterion (5.1.3), phrased as the practical tool you actually reach for: to prove discontinuity, exhibit one witness sequence. It parallels the Divergence Criterion 4.1.9(a) for limits.`,
    needs: ['c.5.1.3', 'c.4.1.9'],
    traps: [`"Does not converge to $f(c)$" includes the case where $(f(x_n))$ diverges entirely, not only the case where it converges to some other value.`],
    proof: {
      idea: 'Negate the Sequential Criterion for Continuity (Theorem 5.1.3).',
      why: 'A statement $P \\iff Q$ logically implies its contrapositive negation $(\\neg P) \\iff (\\neg Q)$.',
      rungs: [
        {
          why: 'By Theorem 5.1.3, $f$ is continuous at $c$ iff every sequence $(x_n) \\subseteq A$ with $x_n \\to c$ satisfies $f(x_n) \\to f(c)$.',
          m: '$$f \\text{ is continuous at } c \\iff (\\forall (x_n) \\subseteq A,\\, x_n \\to c \\implies f(x_n) \\to f(c))$$',
          meaning: 'What this really means: Universal continuity demands absolute perfection: every single conveyor belt of inputs heading toward the center must carry its outputs to the correct destination.'
        },
        {
          why: 'Negating both sides: $f$ is discontinuous at $c$ iff the condition fails for at least one sequence.',
          m: '$$f \\text{ is discontinuous at } c \\iff \\exists (x_n) \\subseteq A : x_n \\to c \\text{ and } f(x_n) \\not\\to f(c)$$',
          meaning: 'What this really means: To shatter continuity, you don\'t need to inspect every sequence; finding just one single defective conveyor belt that drops its outputs off-target is enough to prove the function broken.'
        }
      ],
      ends: 'This establishes the Discontinuity Criterion.'
    },
    cards: [
      { q: 'State the Discontinuity Criterion.', a: '$f$ is discontinuous at $c$ iff $\\exists (x_n)\\to c$ in $A$ with $f(x_n)\\not\\to f(c)$.', kind: 'state' },
      { q: 'Name the limit-theory result this criterion is modeled on.', a: 'The Divergence Criterion, Theorem 4.1.9(a).', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.1.5', bartle: '5.1.5', sec: '5.1', kind: 'definition', tier: 'core',
    title: 'Continuity on a Set',
    oneLine: 'f is continuous on B when it is continuous at every single point of B.',
    statement: `Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$, and let $B\\subseteq A$. We say $f$ is <b>continuous on $B$</b> if $f$ is continuous at every point of $B$.`,
    intuition: `There is no new machinery here &mdash; "continuous on a set" is nothing but "continuous at each point, one point at a time." The $\\delta$ that works is generally allowed to change from point to point (this freedom is exactly what distinguishes plain continuity from uniform continuity later on).`,
    needs: ['c.5.1.1', 's.interval'],
    traps: [
      `Continuity on every point of $B$ does NOT mean the same $\\delta$ works for all of $B$ simultaneously &mdash; that stronger property is uniform continuity, a different concept entirely.`,
      `A function can be continuous "on $B$" for a small $B$ while being discontinuous at points just outside $B$; always check which set is meant.`,
    ],
    cards: [
      { q: 'Define "$f$ is continuous on $B$".', a: '$f$ is continuous at every point $c\\in B$.', kind: 'state' },
      { q: 'Does continuity on a set $B$ guarantee one single $\\delta$ works for all $c\\in B$ at a given $\\varepsilon$?', a: 'No &mdash; that is the stronger notion of uniform continuity, not plain pointwise continuity on $B$.', kind: 'trap' },
    ],
  },
  {
    id: 'c.5.1.6ad', bartle: '5.1.6(a-d)', sec: '5.1', kind: 'example', tier: 'core',
    title: 'Basic Functions Are Continuous (constant, identity, square, reciprocal)',
    oneLine: 'Constant, identity, x², and 1/x are continuous everywhere they are defined, because we already computed their limits.',
    statement: `On $\\mathbb{R}$: $f(x):=b$ is continuous on $\\mathbb{R}$; $g(x):=x$ is continuous on $\\mathbb{R}$; $h(x):=x^2$ is continuous on $\\mathbb{R}$. On $A:=\\{x\\in\\mathbb{R}:x>0\\}$: $\\varphi(x):=1/x$ is continuous on $A$.`,
    intuition: `Each of these was already handled as a limit computation in Section 4.1 (Example 4.1.7). Continuity adds nothing new to verify here beyond checking $\\lim_{x\\to c}f(x)=f(c)$, which held in every case. This is the standard pattern: once you know the limit at every point equals the function's value there, continuity on the whole domain follows for free.`,
    needs: ['c.5.1.1', 'c.4.1.7'],
    traps: [`For $1/x$, the domain must be restricted to $x>0$ (or $x\\ne 0$) before continuity is even a sensible question &mdash; there is no value to compare against at $x=0$.`],
    cards: [
      { q: 'Why does Example 4.1.7 essentially hand you Example 5.1.6(a)-(d) for free?', a: 'Because continuity at $c$ (for $c$ a cluster point) is precisely $\\lim_{x\\to c}f=f(c)$, and those limits were already computed there.', kind: 'recall' },
      { q: 'Is $\\varphi(x)=1/x$ continuous on all of $\\mathbb{R}$?', a: 'No &mdash; only on its domain $\\{x:x\\ne 0\\}$; $0$ is excluded from the domain entirely.', kind: 'trap' },
    ],
  },
  {
    id: 'c.5.1.6ef', bartle: '5.1.6(e-f)', sec: '5.1', kind: 'example', tier: 'core',
    title: '1/x and sgn Are Discontinuous at 0',
    oneLine: 'φ(x)=1/x and the signum function both fail to be continuous at 0 because their limit there simply does not exist.',
    statement: `$\\varphi(x):=1/x$ ($x>0$) is not continuous at $x=0$ (not even defined there). The signum function $\\operatorname{sgn}$ is not continuous at $x=0$, even though $\\operatorname{sgn}(0)$ is defined; $\\operatorname{sgn}$ is continuous at every $c\\ne 0$.`,
    intuition: `Two different flavours of failure: $\\varphi$ fails simply because $0$ is not in its domain, so continuity there is not even a well-posed question. $\\operatorname{sgn}$ fails for a subtler reason: $\\operatorname{sgn}(0)$ IS defined, but $\\lim_{x\\to 0}\\operatorname{sgn}(x)$ does not exist (left and right pieces disagree), so no value assigned at $0$ could make it continuous there.`,
    needs: ['c.5.1.1', 'c.4.1.10'],
    traps: [`Having $f(c)$ defined is necessary but nowhere near sufficient for continuity at $c$ &mdash; $\\operatorname{sgn}(0)$ is defined yet $\\operatorname{sgn}$ is still discontinuous at $0$.`],
    cards: [
      { q: 'Why is $\\operatorname{sgn}$ discontinuous at $0$ even though $\\operatorname{sgn}(0)=0$ is defined?', a: 'Because $\\lim_{x\\to 0}\\operatorname{sgn}(x)$ does not exist at all (jumps from $-1$ to $1$).', kind: 'apply' },
      { q: 'Why is asking "is $\\varphi(x)=1/x$ continuous at $0$" a malformed question?', a: '$0$ is not in the domain of $\\varphi$, so continuity there is not defined.', kind: 'trap' },
    ],
  },
  {
    id: 'c.5.1.6g', bartle: '5.1.6(g)', sec: '5.1', kind: 'counterexample', tier: 'core',
    title: "Dirichlet's Function Is Nowhere Continuous",
    oneLine: 'Dirichlet\'s function (1 on rationals, 0 on irrationals) is discontinuous at every single real number.',
    statement: `Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by $f(x):=1$ if $x$ rational, $f(x):=0$ if $x$ irrational. Then $f$ is discontinuous at every point of $\\mathbb{R}$.`,
    intuition: `Between any two reals, no matter how close, you can always find both a rational and an irrational. So near ANY point $c$ you can sneak up along a sequence of rationals (images all $1$) or along a sequence of irrationals (images all $0$), and these two limiting behaviours can never both agree with a single value $f(c)$. This is a famous historical example (1829) showing why "draw the graph without lifting your pencil" intuitions about continuity are inadequate.`,
    needs: ['c.5.1.4', 'c.2.4.9', 's.abs-ineq'],
    traps: [`Do not try to picture this function's graph &mdash; density of $\\mathbb{Q}$ and its complement is what drives the proof, not visual reasoning.`],
    proof: {
      idea: `Use the Discontinuity Criterion: at every point $c$, build a sequence of the "opposite type" to $c$ (irrational sequence if $c$ is rational, rational sequence if $c$ is irrational) that converges to $c$ but whose images miss $f(c)$.`,
      why: `Density of both $\\mathbb{Q}$ and its complement means such approximating sequences always exist, by the Density Theorem's corollary.`,
      rungs: [
        {
          why: 'Case 1: let $c$ be rational, so $f(c)=1$.',
          m: '$$c\\in\\mathbb{Q},\\ f(c)=1$$',
          meaning: 'What this really means: We inspect a point on the upper floor of the function where the rule assigns a value of $1$.'
        },
        {
          why: 'Density lets us pick irrationals converging to $c$.',
          m: '$$\\exists (x_n)\\subset\\mathbb{R}\\setminus\\mathbb{Q}:\\ x_n\\to c$$',
          meaning: 'What this really means: Because irrational numbers are densely packed everywhere, we can construct a trail of stepping stones sneaking up to our point without ever stepping on a rational.'
        },
        {
          why: 'Their images are all $0$, which cannot converge to $f(c)=1$.',
          m: '$$f(x_n)=0\\ \\forall n \\Rightarrow \\lim f(x_n)=0\\ne f(c)$$',
          meaning: 'What this really means: Every single stepping stone along this approach lives on the ground floor at $0$, so the outputs flatline at $0$ and completely miss the required rooftop value of $1$.'
        },
        {
          why: 'Case 2: let $b$ be irrational, so $f(b)=0$.',
          m: '$$b\\notin\\mathbb{Q},\\ f(b)=0$$',
          meaning: 'What this really means: Now we flip the perspective and inspect a point sitting on the ground floor at $0$.'
        },
        {
          why: 'Density lets us pick rationals converging to $b$.',
          m: '$$\\exists (y_n)\\subset\\mathbb{Q}:\\ y_n\\to b$$',
          meaning: 'What this really means: Rational numbers are also densely packed everywhere, allowing us to build an approach path composed entirely of fractions.'
        },
        {
          why: 'Their images are all $1$, which cannot converge to $f(b)=0$.',
          m: '$$f(y_n)=1\\ \\forall n \\Rightarrow \\lim f(y_n)=1\\ne f(b)$$',
          meaning: 'What this really means: Every fraction on this path jumps up to $1$, so the outputs stay frozen at $1$ and fail to land on the ground floor value of $0$.'
        }
      ],
      ends: `Every real number, rational or irrational, is a point of discontinuity of $f$ &mdash; so $f$ is continuous nowhere on $\\mathbb{R}$.`,
    },
    cards: [
      { q: 'What is Dirichlet\'s function and at which points is it continuous?', a: '$f(x)=1$ on $\\mathbb{Q}$, $0$ on irrationals; it is continuous at no point of $\\mathbb{R}$.', kind: 'state' },
      { q: 'What property of $\\mathbb{Q}$ and its complement makes the discontinuity proof work at every point?', a: 'Both $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense in $\\mathbb{R}$ (Density Theorem 2.4.8 / Corollary 2.4.9).', kind: 'recall' },
      { q: 'Which tool proves discontinuity here: the $\\varepsilon$-$\\delta$ definition directly, or the sequential Discontinuity Criterion?', a: 'The Discontinuity Criterion (5.1.4) &mdash; exhibit a bad approximating sequence at each point.', kind: 'apply' },
    ],
  },
  {
    id: 'c.5.1.6h', bartle: '5.1.6(h)', sec: '5.1', kind: 'counterexample', tier: 'core',
    title: "Thomae's Function Is Continuous Exactly at the Irrationals",
    oneLine: "Thomae's function is discontinuous at every rational and continuous at every irrational.",
    statement: `Let $A:=\\{x\\in\\mathbb{R}:x>0\\}$. Define $h(x):=0$ for $x$ irrational; $h(m/n):=1/n$ for $x=m/n$ in lowest terms with $m,n\\in\\mathbb{N}$. Then $h$ is discontinuous at every rational point of $A$ and continuous at every irrational point of $A$.`,
    intuition: `At a rational $a=m/n$, you can approach along irrationals where $h$ is always $0$, but $h(a)=1/n>0$, so it jumps &mdash; discontinuous. At an irrational $b$, the surprise is that $h$ IS continuous: rationals with small denominator are sparse (only finitely many in any bounded interval), so once $x$ is close enough to $b$ the only rationals nearby have huge denominators, forcing $h(x)=1/n$ to be tiny. This "popcorn function" is a famous 1875 example showing wild-looking discontinuity sets can still be exactly describable.`,
    needs: ['c.5.1.4', 'c.5.1.1', 'c.2.4.3', 's.abs-ineq'],
    traps: [
      `Do not assume "discontinuous everywhere except a few points" &mdash; here the discontinuity set is the rationals (countably infinite, dense) and the continuity set is the irrationals, both infinite and intertwined.`,
      `The bound $h(x)\\le 1/n_0$ near $b$ relies on there being only finitely many rationals with denominator $<n_0$ in a bounded interval &mdash; an easy fact to forget to justify.`,
    ],
    proof: {
      idea: `Discontinuity at rationals: approach along irrationals where $h\\equiv 0 \\ne h(a)$. Continuity at irrationals: for a given $\\varepsilon$, only finitely many "big" rational values $1/n\\ge\\varepsilon$ can even be nearby, so shrink $\\delta$ to dodge all of them.`,
      why: `Denominators only take positive integer values, so "$h(x)\\ge\\varepsilon$" forces $n\\le 1/\\varepsilon$ &mdash; finitely many candidate denominators, hence finitely many nearby troublesome rationals to avoid.`,
      rungs: [
        {
          why: 'At a rational $a=m/n\\in A$, pick a sequence of irrationals converging to $a$.',
          m: '$$(x_k)\\subset\\mathbb{R}\\setminus\\mathbb{Q},\\ x_k\\to a$$',
          meaning: 'What this really means: At any fraction, the function spikes upward to a positive height, but we can creep up to it entirely through zero-height irrational points.'
        },
        {
          why: 'Their images are all $0$, but $h(a)=1/n>0$, so continuity fails.',
          m: '$$h(x_k)=0\\ \\forall k \\Rightarrow \\lim h(x_k)=0\\ne h(a)$$',
          meaning: 'What this really means: The approach outputs stay flat at zero, while the destination sits high on a spike, causing an unavoidable tear at every rational point.'
        },
        {
          why: 'At an irrational $b$, fix $\\varepsilon>0$ and use the Archimedean Property to bound denominators worth worrying about.',
          m: '$$\\exists n_0\\in\\mathbb{N}:\\ 1/n_0<\\varepsilon$$',
          meaning: 'What this really means: Tiny outputs are harmless; only fractions with small denominators produce spikes tall enough to puncture our tolerance ceiling.'
        },
        {
          why: 'Only finitely many rationals in $(b-1,b+1)$ have denominator $<n_0$, so choose $\\delta$ small enough to miss all of them.',
          m: '$$\\exists \\delta>0:\\ (b-\\delta,b+\\delta)\\text{ contains no rational with denominator}<n_0$$',
          meaning: 'What this really means: Because tall spikes are rare and isolated, we can clear a small moat around our irrational point that dodges every single tall spike in existence.'
        },
        {
          why: 'Any $x$ in that window is either irrational (image $0$) or rational with denominator $\\ge n_0$ (image $\\le 1/n_0$) — either way the image is small.',
          m: '$$|x-b|<\\delta,\\ x\\in A \\Rightarrow |h(x)-h(b)|=h(x)\\le 1/n_0<\\varepsilon$$',
          meaning: 'What this really means: Inside this cleared moat, every point is either completely flat (zero) or a microscopic bump below our tolerance, proving the surface feels totally smooth at the irrational point.'
        }
      ],
      ends: `$h$ is discontinuous at every rational of $A$ and continuous at every irrational of $A$.`,
    },
    cards: [
      { q: "Describe Thomae's function and its continuity set.", a: '$h(m/n)=1/n$ on rationals (lowest terms), $h=0$ on irrationals; continuous exactly at the irrationals.', kind: 'state' },
      { q: 'Why does approaching a rational $a$ along irrationals prove discontinuity there?', a: 'The irrational images are all $0$ while $h(a)=1/n>0$, so the limit along that sequence disagrees with $h(a)$.', kind: 'apply' },
      { q: "What key finiteness fact makes continuity at irrationals work?", a: 'Only finitely many rationals in a bounded interval have denominator below any fixed $n_0$, by the Archimedean Property.', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.1.7', bartle: '5.1.7', sec: '5.1', kind: 'theorem', tier: 'core',
    title: 'Continuous Extension via the Limit',
    oneLine: 'A function undefined at c but with a limit L there becomes continuous at c once you define its value to be L — and no other choice works.',
    statement: `Let $f:A\\to\\mathbb{R}$ and $c\\notin A$ but $c$ a cluster point of $A$. (a) If $\\lim_{x\\to c}f=L$ exists, then $F:A\\cup\\{c\\}\\to\\mathbb{R}$ defined by $F(x):=f(x)$ for $x\\in A$, $F(c):=L$, is continuous at $c$. (b) Conversely, if $g:A\\to\\mathbb{R}$ has no limit at $c$, then no choice of value at $c$ can produce a function $G:A\\cup\\{c\\}\\to\\mathbb{R}$, agreeing with $g$ on $A$, that is continuous at $c$.`,
    intuition: `This makes precise the everyday idea of "filling in a hole" in a graph: if the function approaches a single, definite value $L$ as $x\\to c$ (even though it isn't defined at $c$), you can patch the function by declaring $F(c):=L$, and the patch is automatically continuous there &mdash; there is no other sensible choice. But if the function oscillates or blows up so that no single limit exists, no patch job can ever repair continuity at $c$.`,
    needs: ['c.5.1.1', 'c.4.1.4'],
    traps: [
      `This only rescues "removable" discontinuities (missing-point type). It says nothing about jump or oscillation discontinuities where $c$ IS already in the domain but the limit still fails to equal $f(c)$ or fails to exist.`,
      `Part (b) is often missed: you cannot always patch a function at a bad point; if the limit genuinely does not exist, no single value at $c$ will fix it.`,
    ],
    proof: {
      idea: 'Verify the $\\varepsilon$-$\\delta$ definition of continuity directly for $F$ at $c$, and use the definition of continuity to prove the converse.',
      why: 'Continuity of $F$ at $c$ requires $\\lim_{x \\to c} F(x) = F(c)$, which is satisfied uniquely by setting $F(c) = L$.',
      rungs: [
        {
          why: 'Since $\\lim_{x\\to c} f(x) = L$, for every $\\varepsilon > 0$ there exists $\\delta > 0$ such that $0 < |x - c| < \\delta$ with $x \\in A$ implies $|f(x) - L| < \\varepsilon$.',
          m: '$$\\forall \\varepsilon > 0\\, \\exists \\delta > 0 : 0 < |x - c| < \\delta,\\, x \\in A \\implies |f(x) - L| < \\varepsilon$$',
          meaning: 'What this really means: The original function was already steering all nearby points directly toward the value $L$, leaving behind only an empty puncture at $c$.'
        },
        {
          why: 'For $F(x)$ defined on $A \\cup \\{c\\}$ with $F(c) = L$: if $x = c$, then $|F(c) - F(c)| = 0 < \\varepsilon$ holds trivially.',
          m: '$$x = c \\implies |F(x) - F(c)| = 0 < \\varepsilon$$',
          meaning: 'What this really means: We plug the missing puncture with exactly the value $L$, so right at the center point itself, the error from the target is identically zero.'
        },
        {
          why: 'If $x \\in A$ with $|x - c| < \\delta$, then $|F(x) - F(c)| = |f(x) - L| < \\varepsilon$. Thus $F$ is continuous at $c$.',
          m: '$$x \\in A \\cup \\{c\\},\\, |x - c| < \\delta \\implies |F(x) - F(c)| < \\varepsilon$$',
          meaning: 'What this really means: Whether you stand right on the patched center point or slightly to the side, all values are now safely trapped within the error tolerance, seamlessly healing the hole.'
        },
        {
          why: 'Conversely, if $G: A \\cup \\{c\\} \\to \\mathbb{R}$ is continuous at $c$, then $\\lim_{x\\to c} g(x) = \\lim_{x\\to c, x\\in A} G(x) = G(c)$ must exist in $\\mathbb{R}$.',
          m: '$$\\lim_{x\\to c} g(x) = G(c) \\in \\mathbb{R}$$',
          meaning: 'What this really means: Any continuous patch job is uniquely forced by the incoming flow: the only plug value that can avoid ripping the fabric is the limit itself.'
        }
      ],
      ends: 'Thus a continuous extension exists if and only if $\\lim_{x\\to c} f(x)$ exists, with $F(c) = L$ the unique choice.'
    },
    cards: [
      { q: 'If $\\lim_{x\\to c}f(x)=L$ but $c\\notin A$, how do you build a continuous extension at $c$?', a: 'Define $F(c):=L$ and $F=f$ elsewhere; then $F$ is continuous at $c$.', kind: 'apply' },
      { q: 'Can every function with no limit at $c$ be patched to be continuous there by some clever choice of value?', a: 'No &mdash; if the limit does not exist, no assigned value makes the extension continuous at $c$.', kind: 'trap' },
      { q: 'State the Continuous Extension via the Limit theorem.', a: 'Let $c\\notin A$ be a cluster point of $A$. If $\\lim_{x\\to c}f=L$ exists, then defining $F(c):=L$ yields a continuous extension at $c$; if no limit exists, no continuous extension exists.', kind: 'state' }
    ],
  },
  {
    id: 'c.5.1.8', bartle: '5.1.8', sec: '5.1', kind: 'example', tier: 'core',
    title: 'sin(1/x) vs x·sin(1/x) at the Origin',
    oneLine: 'sin(1/x) cannot be patched continuous at 0, but x·sin(1/x) extends continuously to 0 with value 0.',
    statement: `(a) $g(x):=\\sin(1/x)$, $x\\ne 0$, has no limit at $x=0$, so no continuous extension of $g$ to $0$ exists. (b) $f(x):=x\\sin(1/x)$, $x\\ne 0$, satisfies $\\lim_{x\\to 0}f(x)=0$; so $F(x):=x\\sin(1/x)$ for $x\\ne 0$, $F(0):=0$, is continuous at $x=0$.`,
    intuition: `Both functions oscillate wildly infinitely often as $x\\to 0$. What differs is amplitude: $\\sin(1/x)$ keeps oscillating between $-1$ and $1$ forever, no settling down, so it has no limit. But $x\\sin(1/x)$ is squeezed between $-|x|$ and $|x|$, so however wildly it wiggles, its amplitude shrinks to $0$ &mdash; giving it a limit of $0$ and hence a continuous patch at the origin. This is a direct application of Remark 5.1.7.`,
    needs: ['c.5.1.7', 'c.4.1.10', 'c.4.2.8'],
    traps: [`Do not assume "oscillates infinitely often near $c$" alone implies no limit &mdash; the deciding factor is whether the amplitude of oscillation also shrinks to $0$.`],
    cards: [
      { q: 'Can $\\sin(1/x)$ be extended continuously to $x=0$?', a: 'No &mdash; $\\lim_{x\\to 0}\\sin(1/x)$ does not exist (it oscillates between $-1$ and $1$).', kind: 'state' },
      { q: 'What value must $F(0)$ take to make $F(x)=x\\sin(1/x)$ ($x\\ne0$) continuous at $0$?', a: '$F(0)=0$, since $\\lim_{x\\to0}x\\sin(1/x)=0$ by the squeeze $|x\\sin(1/x)|\\le|x|$.', kind: 'apply' },
    ],
  },
  {
    id: 'c.5.2.1', bartle: '5.2.1', sec: '5.2', kind: 'theorem', tier: 'extra',
    title: 'Algebraic Combinations of Continuous Functions (at a Point)',
    oneLine: 'Sums, differences, products, scalar multiples, and quotients (denominator nonzero) of functions continuous at c are again continuous at c.',
    statement: `Let $f,g:A\\to\\mathbb{R}$ be continuous at $c\\in A$ and $b\\in\\mathbb{R}$. (a) $f+g$, $f-g$, $fg$, $bf$ are continuous at $c$. (b) If $h:A\\to\\mathbb{R}$ is continuous at $c$ with $h(x)\\ne 0$ for all $x\\in A$, then $f/h$ is continuous at $c$.`,
    intuition: `Since continuity at a cluster point is literally $\\lim_{x\\to c}f=f(c)$, this theorem is just the algebra-of-limits theorem (4.2.4) restated in continuity language: whatever combination you form, its value at $c$ equals its limit at $c$, because each piece already had that property.`,
    needs: ['c.4.2.4', 'c.5.1.1'],
    traps: [`The quotient part needs $h(x)\\ne0$ on the WHOLE domain $A$, not merely $h(c)\\ne0$; if $h$ only avoids zero near $c$, restrict the domain first (see the Remark on $A_1$).`],
    proof: {
      idea: `Reduce to the corresponding limit theorem: rewrite each combination's value at $c$ as a limit and invoke Theorem 4.2.4.`,
      why: `$f,g$ continuous at $c$ means precisely $f(c)=\\lim_{x\\to c}f$ and $g(c)=\\lim_{x\\to c}g$, so limit-algebra transfers automatically.`,
      rungs: [
        {
          why: 'If $c$ is not a cluster point of $A$, continuity is automatic, so assume $c$ is a cluster point.',
          m: '$$c \\text{ a cluster point of } A$$',
          meaning: 'What this really means: Isolated points have no close neighbors to test continuity against, so the only case that requires real work is when points can approach $c$ from within the domain.'
        },
        {
          why: 'Translate continuity of $f,g$ at $c$ into limit statements.',
          m: '$$f(c)=\\lim_{x\\to c}f,\\quad g(c)=\\lim_{x\\to c}g$$',
          meaning: 'What this really means: Continuity means the actual values at the destination match the predicted trajectory limits from both functions.'
        },
        {
          why: 'Apply the algebra-of-limits theorem to combine them.',
          m: '$$(f+g)(c)=f(c)+g(c)=\\lim_{x\\to c}(f+g)$$',
          meaning: 'What this really means: The sum of two incoming trajectories simply equals the trajectory of their sum, smoothly combining their arrival values.'
        },
        {
          why: 'This says exactly that $f+g$ is continuous at $c$; the same substitution pattern handles $-,\\ \\cdot,\\ b\\cdot$.',
          m: '$$\\text{similarly for } f-g,\\ fg,\\ bf$$',
          meaning: 'What this really means: The exact same limit-combination rules pass right through differences, products, and scaling without snagging or jumping.'
        },
        {
          why: 'For the quotient, use $h(c)\\ne0$ (since $h(x)\\ne0$ on $A$ and $c\\in A$) and the quotient limit rule.',
          m: '$$\\left(\\frac{f}{h}\\right)(c)=\\frac{f(c)}{h(c)}=\\lim_{x\\to c}\\frac{f}{h}$$',
          meaning: 'What this really means: As long as the denominator never hits zero, dividing one smooth curve by another preserves a well-behaved, non-exploding trajectory.'
        }
      ],
      ends: `Each algebraic combination's value at $c$ equals its limit at $c$, which is exactly continuity at $c$.`,
    },
    cards: [
      { q: 'If $f,g$ are continuous at $c$, name four combinations automatically continuous at $c$.', a: '$f+g,\\ f-g,\\ fg,\\ bf$ for any constant $b$.', kind: 'state' },
      { q: 'What extra condition is needed for $f/h$ to be continuous at $c$?', a: '$h$ continuous at $c$ and $h(x)\\ne 0$ for every $x\\in A$ (not just at $c$).', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.2.2', bartle: '5.2.2', sec: '5.2', kind: 'theorem', tier: 'extra',
    title: 'Algebraic Combinations of Continuous Functions (on a Set)',
    oneLine: 'The same closure under +, −, ×, scalar multiple, and ÷ holds when continuity is on the whole set A, not just one point.',
    statement: `Let $f,g:A\\to\\mathbb{R}$ be continuous on $A$, $b\\in\\mathbb{R}$. (a) $f+g,\\ f-g,\\ fg,\\ bf$ are continuous on $A$. (b) If $h:A\\to\\mathbb{R}$ is continuous on $A$ with $h(x)\\ne0$ for all $x\\in A$, then $f/h$ is continuous on $A$.`,
    intuition: `A direct point-by-point consequence of 5.2.1: apply that theorem at every single $c\\in A$. Bartle states it separately only because it is used so often as a black box for building up continuity of complicated expressions from simple pieces (Example 5.2.3 leans on it heavily).`,
    needs: ['c.5.2.1', 'c.5.1.5'],
    traps: [
      `To divide by a function $\\varphi$ that vanishes somewhere on $A$, you must first restrict to $A_1:=\\{x\\in A:\\varphi(x)\\ne0\\}$; the quotient is then continuous on $A_1$, not on all of $A$.`,
    ],
    proof: {
      idea: 'Apply Theorem 5.2.1 (algebraic combinations at a point) at every individual point $c \\in A$.',
      why: 'By Definition 5.1.5, a function is continuous on a set $A$ if and only if it is continuous at each point $c \\in A$.',
      rungs: [
        {
          why: 'Let $c$ be an arbitrary point of $A$.',
          m: '$$c \\in A$$',
          meaning: 'What this really means: We drop a pin at a completely random, unspecified location across the entire territory.'
        },
        {
          why: 'Since $f$ and $g$ are continuous on $A$, both are continuous at $c$.',
          m: '$$f, g \\text{ continuous at } c$$',
          meaning: 'What this really means: Because both machines behave reliably everywhere, they are guaranteed to behave reliably right at this specific pinned spot.'
        },
        {
          why: 'By Theorem 5.2.1, $f+g, f-g, fg, bf$ (and $f/h$ if $h(x) \\ne 0$ on $A$) are continuous at $c$.',
          m: '$$(f+g)(c) = \\lim_{x\\to c}(f+g)(x)$$',
          meaning: 'What this really means: Our point-by-point rules from Theorem 5.2.1 kick in, showing the combined machine runs smoothly at this pinned location.'
        },
        {
          why: 'Since $c \\in A$ was arbitrary, the combinations are continuous at every point of $A$.',
          m: '$$\\forall c \\in A \\implies \\text{continuous on } A$$',
          meaning: 'What this really means: Because no special properties of the pin\'s position were ever used, the smoothness guarantee automatically blankets the entire territory.'
        }
      ],
      ends: 'Therefore all listed algebraic combinations are continuous on $A$.'
    },
    cards: [
      { q: 'If $f,g$ are continuous on $A$, is $fg$ continuous on $A$?', a: 'Yes, by Theorem 5.2.2(a).', kind: 'apply' },
      { q: 'If $\\varphi$ is continuous on $A$ but vanishes at some points of $A$, on what set is $f/\\varphi$ continuous?', a: 'On $A_1=\\{x\\in A:\\varphi(x)\\ne0\\}$, not necessarily on all of $A$.', kind: 'trap' },
      { q: 'State the theorem on algebraic combinations of continuous functions on a set.', a: 'If $f,g$ are continuous on $A$, then $f+g,\\ f-g,\\ fg,\\ bf$ are continuous on $A$; and $f/h$ is continuous on $A$ if $h(x)\\ne 0$ for all $x\\in A$.', kind: 'state' }
    ],
  },
  {
    id: 'c.5.2.3ab', bartle: '5.2.3(a-b)', sec: '5.2', kind: 'example', tier: 'extra',
    title: 'Polynomial and Rational Functions Are Continuous',
    oneLine: 'Every polynomial is continuous everywhere; every rational function is continuous everywhere its denominator is nonzero.',
    statement: `(a) If $p(x)=a_nx^n+\\cdots+a_1x+a_0$, then $p$ is continuous on $\\mathbb{R}$. (b) If $p,q$ are polynomials and $q$ has real roots $\\alpha_1,\\dots,\\alpha_m$, then $r(x):=p(x)/q(x)$ is continuous at every $c\\notin\\{\\alpha_1,\\dots,\\alpha_m\\}$.`,
    intuition: `A polynomial is built from constants and $x$ using only $+$ and $\\times$, both of which preserve continuity (5.2.2); a rational function additionally divides, which is fine anywhere the denominator polynomial isn't zero. So these familiar "nice" functions are continuous for essentially algebraic reasons, not because of any new analytic fact.`,
    needs: ['c.5.2.2', 'c.5.1.6ad', 'c.4.2.5'],
    traps: [`A rational function is only undefined (hence not applicably "discontinuous", just outside its domain) at the finitely many roots of $q$; everywhere else on $\\mathbb{R}$ it is continuous.`],
    cards: [
      { q: 'Why is every polynomial continuous on $\\mathbb{R}$?', a: 'It is built from continuous constant and identity functions using sums and products, which preserve continuity (5.2.2).', kind: 'recall' },
      { q: 'Where can a rational function $p(x)/q(x)$ fail to be continuous?', a: 'Only at the (finitely many) real roots of $q$, where it is undefined; elsewhere it is continuous.', kind: 'apply' },
    ],
  },
  {
    id: 'c.5.2.3cd', bartle: '5.2.3(c-d)', sec: '5.2', kind: 'example', tier: 'extra',
    title: 'sin and cos Are Continuous on ℝ',
    oneLine: 'sin and cos are continuous everywhere because |sin x − sin y| and |cos x − cos y| are both bounded by |x − y|.',
    statement: `$\\sin$ and $\\cos$ are continuous on $\\mathbb{R}$. In fact for all $x,c\\in\\mathbb{R}$: $|\\sin x-\\sin c|\\le|x-c|$ and $|\\cos x-\\cos c|\\le|x-c|$.`,
    intuition: `Using the product-to-sum identities and the bounds $|\\sin z|\\le|z|$, $|\\cos z|\\le1$, both differences collapse to something no bigger than $|x-c|$ itself. That gives a one-shot recipe for $\\delta$: just take $\\delta=\\varepsilon$, and the Lipschitz-type bound does the rest &mdash; no case analysis needed.`,
    needs: ['c.5.1.1', 's.abs-ineq'],
    traps: [`This uses genuine trig identities ($\\sin x-\\sin y=2\\sin[\\tfrac12(x-y)]\\cos[\\tfrac12(x+y)]$, and its cosine analogue) — don't try to prove continuity of sin/cos from the series definition unless that's what your course requires.`],
    proof: {
      idea: `Bound the difference $|\\sin x-\\sin c|$ by $|x-c|$ directly, using a product-to-sum identity plus $|\\sin|\\le1$; then $\\delta=\\varepsilon$ works.`,
      why: `Once the difference is dominated by $|x-c|$ itself, the $\\varepsilon$-$\\delta$ proof becomes trivial &mdash; no clever choice of $\\delta$ is needed beyond $\\delta=\\varepsilon$.`,
      rungs: [
        {
          why: 'Rewrite the difference using the sum-to-product identity for sine.',
          m: '$$\\sin x-\\sin c=2\\sin\\!\\big[\\tfrac12(x-c)\\big]\\cos\\!\\big[\\tfrac12(x+c)\\big]$$',
          meaning: 'What this really means: We decompose the vertical gap between two sine outputs into a product of oscillation and a chord factor governed purely by the separation of inputs.'
        },
        {
          why: 'Bound each factor: $|\\sin z|\\le|z|$ and $|\\cos z|\\le1$.',
          m: '$$|\\sin x-\\sin c|\\le 2\\cdot\\tfrac12|x-c|\\cdot 1=|x-c|$$',
          meaning: 'What this really means: A sine curve can never climb steeper than a 45-degree angle, so the vertical gap between two outputs can never exceed the horizontal distance between inputs.'
        },
        {
          why: 'Given $\\varepsilon>0$, take $\\delta:=\\varepsilon$ &mdash; the bound directly controls the output.',
          m: '$$|x-c|<\\delta=\\varepsilon \\Rightarrow |\\sin x-\\sin c|<\\varepsilon$$',
          meaning: 'What this really means: Output error is directly trapped by input distance 1-to-1: setting your input window size to match the desired error tolerance guarantees success without any scaling.'
        },
        {
          why: 'The cosine case is identical, using the cosine sum-to-product identity instead.',
          m: '$$\\cos x-\\cos c=-2\\sin[\\tfrac12(x+c)]\\sin[\\tfrac12(x-c)] \\Rightarrow |\\cos x-\\cos c|\\le|x-c|$$',
          meaning: 'What this really means: Cosine is merely a phase-shifted twin of sine, so the exact same 1-to-1 distance clamp keeps cosine outputs locked smoothly to its inputs.'
        }
      ],
      ends: `Both $\\sin$ and $\\cos$ satisfy a Lipschitz-type bound with constant $1$, hence are continuous at every $c\\in\\mathbb{R}$.`,
    },
    cards: [
      { q: 'What bound on $|\\sin x-\\sin c|$ makes continuity of sin an immediate $\\delta=\\varepsilon$ argument?', a: '$|\\sin x-\\sin c|\\le|x-c|$ for all $x,c$.', kind: 'state' },
      { q: 'Which two elementary trig facts feed into proving $|\\sin x-\\sin c|\\le|x-c|$?', a: '$|\\sin z|\\le|z|$ and $|\\cos z|\\le1$, applied to the sum-to-product identity.', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.2.3e', bartle: '5.2.3(e)', sec: '5.2', kind: 'example', tier: 'extra',
    title: 'tan, cot, sec, csc Are Continuous on Their Domains',
    oneLine: 'The other four trig functions are continuous wherever their defining denominator (sin or cos) does not vanish.',
    statement: `$\\tan,\\sec$ are continuous at every $x$ with $\\cos x\\ne 0$; $\\cot,\\csc$ are continuous at every $x$ with $\\sin x\\ne 0$ (i.e. $x\\ne n\\pi$, $n\\in\\mathbb{Z}$).`,
    intuition: `Nothing new to prove: each of these is a ratio built from $\\sin$ and $\\cos$, both already known continuous everywhere (5.2.3c-d). The quotient rule (5.2.2(b), applied on the restricted domain where the denominator is nonzero) does the rest automatically.`,
    needs: ['c.5.2.3cd', 'c.5.2.2'],
    traps: [`Domain restriction matters: $\\cot x=\\cos x/\\sin x$ is simply undefined at $x=n\\pi$, not "discontinuous" there in any meaningful sense &mdash; those points are outside its domain.`],
    cards: [
      { q: 'Why is $\\cot x=\\cos x/\\sin x$ continuous on its domain with almost no new work?', a: 'It is a quotient of two functions ($\\cos,\\sin$) already known continuous on $\\mathbb{R}$, so the quotient rule (5.2.2b) applies directly.', kind: 'recall' },
      { q: 'At which points is $\\tan x$ undefined?', a: 'Wherever $\\cos x=0$, i.e. $x=\\pi/2+n\\pi$, $n\\in\\mathbb{Z}$.', kind: 'apply' },
    ],
  },
  {
    id: 'c.5.2.4', bartle: '5.2.4', sec: '5.2', kind: 'theorem', tier: 'extra',
    title: '|f| Is Continuous Whenever f Is',
    oneLine: 'Taking the absolute value of a continuous function never breaks continuity.',
    statement: `Let $f:A\\to\\mathbb{R}$ and $|f|(x):=|f(x)|$. (a) If $f$ is continuous at $c\\in A$, so is $|f|$. (b) If $f$ is continuous on $A$, so is $|f|$.`,
    intuition: `The absolute value function itself is continuous (it barely moves outputs: $\\big||a|-|b|\\big|\\le|a-b|$), so composing it with a continuous $f$ cannot introduce any new bad behaviour. The tolerance you need for $f$ transfers directly to $|f|$.`,
    needs: ['c.5.1.1', 's.triangle-ineq'],
    traps: [`The converse is false: $|f|$ can be continuous while $f$ itself is wildly discontinuous (e.g. $f=1$ on rationals, $-1$ on irrationals gives $|f|\\equiv1$, continuous, while $f$ is nowhere continuous).`],
    proof: {
      idea: 'Apply the reverse triangle inequality $||f(x)| - |f(c)|| \\le |f(x) - f(c)|$.',
      why: 'Controlling $|f(x) - f(c)|$ by continuity automatically controls the difference in absolute values.',
      rungs: [
        {
          why: 'Recall the reverse triangle inequality for real numbers.',
          m: '$$||a| - |b|| \\le |a - b|$$',
          meaning: 'What this really means: Folding negative numbers onto positive numbers can bring two points closer together, but it can never push them further apart.'
        },
        {
          why: 'Substitute $a = f(x)$ and $b = f(c)$.',
          m: '$$||f(x)| - |f(c)|| \\le |f(x) - f(c)|$$',
          meaning: 'What this really means: Taking the absolute value of function outputs can only compress or preserve output gaps, never stretch them.'
        },
        {
          why: 'Since $f$ is continuous at $c$, for any $\\varepsilon > 0$ there is $\\delta > 0$ such that $|x - c| < \\delta$ with $x \\in A$ implies $|f(x) - f(c)| < \\varepsilon$.',
          m: '$$|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$$',
          meaning: 'What this really means: The original function already keeps its output fluctuations smaller than our chosen tolerance inside a small enough input window.'
        },
        {
          why: 'By the reverse triangle inequality, this directly yields $||f(x)| - |f(c)|| < \\varepsilon$.',
          m: '$$|x - c| < \\delta \\implies ||f(x)| - |f(c)|| \\le |f(x) - f(c)| < \\varepsilon$$',
          meaning: 'What this really means: Because the absolute value operation cannot widen the output gap, the new gap slips easily under the very same tolerance ceiling.'
        }
      ],
      ends: 'Thus $|f|$ is continuous at $c$, and hence continuous on all of $A$.'
    },
    cards: [
      { q: 'If $f$ is continuous at $c$, is $|f|$ necessarily continuous at $c$?', a: 'Yes.', kind: 'state' },
      { q: 'If $|f|$ is continuous at $c$, must $f$ be continuous at $c$?', a: 'No &mdash; e.g. $f=\\pm1$ depending on rationality of $x$ gives $|f|\\equiv1$ continuous while $f$ is nowhere continuous.', kind: 'trap' },
    ],
  },
  {
    id: 'c.5.2.5', bartle: '5.2.5', sec: '5.2', kind: 'theorem', tier: 'extra',
    title: '√f Is Continuous Whenever f Is (and f ≥ 0)',
    oneLine: 'Taking the square root of a nonnegative continuous function never breaks continuity.',
    statement: `Let $f:A\\to\\mathbb{R}$ with $f(x)\\ge 0$ for all $x\\in A$, and $\\sqrt f(x):=\\sqrt{f(x)}$. (a) If $f$ is continuous at $c\\in A$, so is $\\sqrt f$. (b) If $f$ is continuous on $A$, so is $\\sqrt f$.`,
    intuition: `Just like $|\\cdot|$, the square-root function is itself continuous on $[0,\\infty)$ (this uses the sequence fact that $x_n\\to x\\ \\Rightarrow\\ \\sqrt{x_n}\\to\\sqrt x$), so composing it with a nonnegative continuous $f$ cannot introduce discontinuity.`,
    needs: ['c.5.1.1', 'c.3.2.10'],
    traps: [`The nonnegativity hypothesis $f(x)\\ge0$ on all of $A$ is essential &mdash; $\\sqrt{f(x)}$ is not even real-valued otherwise.`],
    proof: {
      idea: 'Rationalize the difference when $f(c) > 0$, and use $0 \\le f(x) < \\varepsilon^2$ when $f(c) = 0$.',
      why: 'When $f(c) > 0$, $|\sqrt{f(x)} - \sqrt{f(c)}| = \frac{|f(x) - f(c)|}{\sqrt{f(x)} + \sqrt{f(c)}} \le \frac{|f(x) - f(c)|}{\sqrt{f(c)}}$.',
      rungs: [
        {
          why: 'Case 1: $f(c) = 0$. For any $\\varepsilon > 0$, choose $\\delta > 0$ so $|x - c| < \\delta$ implies $0 \\le f(x) < \\varepsilon^2$.',
          m: '$$|\\sqrt{f(x)} - 0| = \\sqrt{f(x)} < \\varepsilon$$',
          meaning: 'What this really means: Near a ground-floor zero, keeping the original function below $\\varepsilon^2$ automatically keeps its square root below $\\varepsilon$.'
        },
        {
          why: 'Case 2: $f(c) > 0$. Multiply and divide by the conjugate.',
          m: '$$|\\sqrt{f(x)} - \\sqrt{f(c)}| = \\frac{|f(x) - f(c)|}{\\sqrt{f(x)} + \\sqrt{f(c)}} \\le \\frac{|f(x) - f(c)|}{\\sqrt{f(c)}}$$',
          meaning: 'What this really means: Conjugate multiplication translates the root gap into an ordinary gap divided by a strictly positive safety buffer $\\sqrt{f(c)}$.'
        },
        {
          why: 'For any $\\varepsilon > 0$, choose $\\delta > 0$ so $|x - c| < \\delta$ implies $|f(x) - f(c)| < \\varepsilon\\sqrt{f(c)}$.',
          m: '$$|\\sqrt{f(x)} - \\sqrt{f(c)}| < \\frac{\\varepsilon\\sqrt{f(c)}}{\\sqrt{f(c)}} = \\varepsilon$$',
          meaning: 'What this really means: We tighten our original function tolerance by the fixed factor $\\sqrt{f(c)}$, cancelling out the denominator and keeping the square roots locked inside $\\varepsilon$.'
        }
      ],
      ends: 'In both cases, $\\sqrt{f}$ is continuous at $c$, and hence continuous on $A$.'
    },
    cards: [
      { q: 'What hypothesis on $f$ is required before asking whether $\\sqrt f$ is continuous?', a: '$f(x)\\ge0$ for all $x\\in A$, so $\\sqrt{f(x)}$ is defined.', kind: 'trap' },
      { q: 'If $f\\ge0$ is continuous on $A$, is $\\sqrt f$ continuous on $A$?', a: 'Yes, by Theorem 5.2.5(b).', kind: 'state' },
    ],
  },
  {
    id: 'c.5.2.6', bartle: '5.2.6', sec: '5.2', kind: 'theorem', tier: 'extra',
    title: 'Composition of Continuous Functions (at a Point)',
    oneLine: 'Plugging a function continuous at c into a function continuous at f(c) gives something continuous at c.',
    statement: `Let $f:A\\to\\mathbb{R}$, $g:B\\to\\mathbb{R}$ with $f(A)\\subseteq B$. If $f$ is continuous at $c\\in A$ and $g$ is continuous at $b=f(c)\\in B$, then $g\\circ f:A\\to\\mathbb{R}$ is continuous at $c$.`,
    intuition: `Continuity is exactly the property of "not amplifying closeness away" &mdash; if $x$ is close enough to $c$, $f(x)$ lands close to $f(c)$, and since $g$ has the same property at $f(c)$, that closeness survives one more application of $g$. It's a relay race: $f$ passes the baton of closeness to $g$, which passes it on to the final output.`,
    needs: ['c.5.1.1', 'c.5.1.2'],
    traps: [
      `The hypothesis $f(A)\\subseteq B$ is not just bookkeeping &mdash; without it, $g\\circ f$ may not even be defined on all of $A$.`,
      `You only need $g$ continuous at the single point $b=f(c)$, not on all of $B$ &mdash; a common over-assumption.`,
    ],
    proof: {
      idea: `Chase neighbourhoods backward through both functions: given a target neighbourhood $W$ of $g(b)$, pull it back through $g$ to a neighbourhood $V$ of $b=f(c)$, then pull $V$ back through $f$ to a neighbourhood $U$ of $c$.`,
      why: `Neighbourhood-continuity (5.1.2) composes cleanly because "preimage of a neighbourhood contains a neighbourhood" is exactly the kind of statement that chains.`,
      rungs: [
        {
          why: 'Start from an arbitrary tolerance around the final output $g(b)$.',
          m: '$$W = V_\\varepsilon(g(b))$$',
          meaning: 'What this really means: Someone gives us an ultimate target window around the final output of the two-stage process.'
        },
        {
          why: 'Continuity of $g$ at $b$ gives a neighbourhood of $b$ that lands inside $W$.',
          m: '$$\\exists V=V_\\delta(b):\\ y\\in B\\cap V \\Rightarrow g(y)\\in W$$',
          meaning: 'What this really means: The second machine\'s continuity tells us what intermediate window size we must hit at the middle station to guarantee landing inside the final target.'
        },
        {
          why: 'Continuity of $f$ at $c$ gives a neighbourhood of $c$ that lands inside $V$.',
          m: '$$\\exists U=V_\\gamma(c):\\ x\\in A\\cap U \\Rightarrow f(x)\\in V$$',
          meaning: 'What this really means: Now the first machine treats that required intermediate window as its own target, producing an initial input window around $c$ that will land inside it.'
        },
        {
          why: 'Use $f(A)\\subseteq B$ to know $f(x)$ actually lies in $B\\cap V$, so $g$ may be applied to it.',
          m: '$$x\\in A\\cap U \\Rightarrow f(x)\\in B\\cap V \\Rightarrow g(f(x))\\in W$$',
          meaning: 'What this really means: The handover works without a hitch: intermediate outputs feed seamlessly into the second stage without falling off the conveyor belt.'
        },
        {
          why: 'This exhibits, for every tolerance $W$ around $g(b)$, a neighbourhood $U$ of $c$ that works.',
          m: '$$(g\\circ f)(A\\cap U)\\subseteq W$$',
          meaning: 'What this really means: Chain reaction: keeping the starting input in the first window forces the entire two-step process to land securely inside the final target window.'
        }
      ],
      ends: `Since $W$ was an arbitrary neighbourhood of $g(b)$, this establishes $g\\circ f$ is continuous at $c$.`,
    },
    cards: [
      { q: 'State the composition theorem for continuity at a point.', a: 'If $f$ is continuous at $c$ and $g$ is continuous at $f(c)$ (with $f(A)\\subseteq B$), then $g\\circ f$ is continuous at $c$.', kind: 'state' },
      { q: 'Does $g$ need to be continuous on all of $B$ for this theorem to apply at $c$?', a: 'No &mdash; continuity of $g$ at the single point $f(c)$ suffices.', kind: 'trap' },
      { q: 'What role does the hypothesis $f(A)\\subseteq B$ play?', a: 'It guarantees $g\\circ f$ is actually defined on all of $A$, so composition makes sense.', kind: 'recall' },
    ],
  },
  {
    id: 'c.5.2.7', bartle: '5.2.7', sec: '5.2', kind: 'theorem', tier: 'extra',
    title: 'Composition of Continuous Functions (on a Set)',
    oneLine: 'If f is continuous on A and g is continuous on B (with f(A)⊆B), then g∘f is continuous on A.',
    statement: `Let $f:A\\to\\mathbb{R}$ be continuous on $A$, $g:B\\to\\mathbb{R}$ continuous on $B$, with $f(A)\\subseteq B$. Then $g\\circ f:A\\to\\mathbb{R}$ is continuous on $A$.`,
    intuition: `Immediate from 5.2.6 applied at every point of $A$: this theorem is the workhorse used constantly to certify continuity of complicated expressions (like $\\sin(1/x)$ or $\\cos\\sqrt{1+x^2}$) by decomposing them into a chain of simple, known-continuous pieces.`,
    needs: ['c.5.2.6', 'c.5.1.5'],
    traps: [`This theorem is only useful as a black box if you correctly identify the "inner" and "outer" functions and verify the range condition $f(A)\\subseteq B$ &mdash; skipping that check is a common source of invalid continuity claims.`],
    proof: {
      idea: 'Apply Theorem 5.2.6 (composition at a point) at every individual point $c \\in A$.',
      why: 'Definition 5.1.5 defines continuity on a set as continuity at each individual point of that set.',
      rungs: [
        {
          why: 'Let $c$ be any arbitrary point of $A$.',
          m: '$$c \\in A$$',
          meaning: 'What this really means: Pick an arbitrary starting point anywhere across the domain of the first function.'
        },
        {
          why: 'Since $f$ is continuous on $A$, $f$ is continuous at $c$.',
          m: '$$f \\text{ is continuous at } c$$',
          meaning: 'What this really means: The first stage is guaranteed to run smoothly right at this selected starting point.'
        },
        {
          why: 'Because $f(A) \\subseteq B$, the image point $f(c) \\in B$. Since $g$ is continuous on $B$, $g$ is continuous at $f(c)$.',
          m: '$$f(c) \\in B \\implies g \\text{ is continuous at } f(c)$$',
          meaning: 'What this really means: The middle value lands safely in the domain of the second stage, where the second machine is also guaranteed to run smoothly.'
        },
        {
          why: 'By Theorem 5.2.6, the composite function $g \\circ f$ is continuous at $c$.',
          m: '$$g \\circ f \\text{ is continuous at } c$$',
          meaning: 'What this really means: Because both individual stages are continuous at their respective stations, Theorem 5.2.6 guarantees the chained sequence is continuous at $c$.'
        },
        {
          why: 'Since $c \\in A$ was arbitrary, $g \\circ f$ is continuous on all of $A$.',
          m: '$$\\forall c \\in A \\implies g \\circ f \\text{ is continuous on } A$$',
          meaning: 'What this really means: Because the argument worked for an entirely arbitrary starting point, the unbroken smoothness holds universally everywhere on $A$.'
        }
      ],
      ends: 'Thus $g \\circ f$ is continuous on $A$.'
    },
    cards: [
      { q: 'Why is Theorem 5.2.7 the tool of choice for proving continuity of expressions like $\\cos(\\sqrt{1+x^2})$?', a: 'It lets you certify continuity by decomposing into a chain of simple continuous pieces composed together, rather than a fresh $\\varepsilon$-$\\delta$ argument.', kind: 'recall' },
      { q: 'What condition must you check before applying the composition theorem on sets?', a: '$f(A)\\subseteq B$, so that $g\\circ f$ is defined on all of $A$.', kind: 'apply' },
      { q: 'State the Composition Theorem for continuous functions on a set.', a: 'If $f:A\\to\\mathbb{R}$ is continuous on $A$ and $g:B\\to\\mathbb{R}$ is continuous on $B$ with $f(A)\\subseteq B$, then $g\\circ f$ is continuous on $A$.', kind: 'state' }
    ],
  },
  {
    id: 'c.5.2.8ab', bartle: '5.2.8(a-b)', sec: '5.2', kind: 'example', tier: 'extra',
    title: 'Composition Gives Alternate Proofs that |f| and √f Are Continuous',
    oneLine: 'Since |x| and √x are themselves continuous, |f| and √f are just special cases of the composition theorem.',
    statement: `Let $g_1(x):=|x|$ and $g_2(x):=\\sqrt x$ ($x\\ge0$), both continuous on their domains. If $f:A\\to\\mathbb{R}$ is continuous on $A$, then $g_1\\circ f=|f|$ is continuous on $A$ (re-proving 5.2.4); if additionally $f\\ge0$, then $g_2\\circ f=\\sqrt f$ is continuous on $A$ (re-proving 5.2.5).`,
    intuition: `This is the payoff of having the composition theorem: results that needed separate ad hoc arguments (5.2.4, 5.2.5) now fall out immediately once you recognize $|f|$ and $\\sqrt f$ as "outer function $\\circ$ inner function $f$" with both pieces already known continuous.`,
    needs: ['c.5.2.7', 'c.5.2.4', 'c.5.2.5'],
    traps: [`This is presented as an alternate/simpler proof, not a different theorem &mdash; don't treat 5.2.8(a)-(b) as adding new content beyond 5.2.4-5.2.5.`],
    cards: [
      { q: 'How does the composition theorem give a one-line proof that $|f|$ is continuous when $f$ is?', a: '$|f|=g_1\\circ f$ where $g_1(x)=|x|$ is continuous, so Theorem 5.2.7 applies directly.', kind: 'apply' },
    ],
  },
  {
    id: 'c.5.2.8c', bartle: '5.2.8(c)', sec: '5.2', kind: 'example', tier: 'extra',
    title: 'sin(1/x) Is Continuous Away From 0',
    oneLine: 'sin(1/x) is continuous at every point except 0, even though it cannot be patched continuous at 0 itself.',
    statement: `Let $g_3(x):=\\sin x$ (continuous on $\\mathbb{R}$, Example 5.2.3c) and $f(x):=1/x$ for $x\\ne0$ (continuous on its domain). Then $g_3\\circ f(x)=\\sin(1/x)$ is continuous at every $c\\ne0$.`,
    intuition: `Away from $0$, $1/x$ behaves perfectly well (continuous), and composing a continuous function with another continuous function stays continuous (5.2.7) &mdash; so $\\sin(1/x)$ is continuous on its entire domain $\\{x\\ne0\\}$. This coexists peacefully with Example 5.1.8(a): the function is fine everywhere it's defined, it's only the single missing point $x=0$ where no continuous extension is possible.`,
    needs: ['c.5.2.7', 'c.5.2.3cd', 'c.5.1.8'],
    traps: [`"Continuous on its domain" and "extendable continuously to $x=0$" are different claims &mdash; $\\sin(1/x)$ satisfies the first but, by Example 5.1.8(a), not the second.`],
    cards: [
      { q: 'Why is $\\sin(1/x)$ continuous at every $c\\ne0$?', a: 'It is the composition of $\\sin$ (continuous on $\\mathbb{R}$) with $1/x$ (continuous for $x\\ne0$); composition of continuous functions is continuous (5.2.7).', kind: 'apply' },
      { q: 'Does continuity of $\\sin(1/x)$ on $\\{x\\ne0\\}$ contradict Example 5.1.8(a) (no continuous extension at $0$)?', a: 'No &mdash; continuity on the punctured domain says nothing about whether a value can be assigned at the missing point $0$ itself.', kind: 'trap' },
    ],
  },
);

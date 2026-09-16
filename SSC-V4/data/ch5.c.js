/* Bartle 5.5 Continuity and Gauges · 5.6 Monotone and Inverse Functions */
CONCEPTS.push(
  {
    id: 'c.5.5.1', bartle: '5.5.1', sec: '5.5', kind: 'definition', tier: 'ext',
    title: 'Tagged Partition of an Interval',
    oneLine: 'Chop $[a,b]$ into non-overlapping pieces and mark one point inside each piece.',
    statement: `A <b>partition</b> of $I:=[a,b]$ is a collection $P=\\{I_1,\\dots,I_n\\}$ of
      non-overlapping closed subintervals whose union is $[a,b]$, written $I_i:=[x_{i-1},x_i]$
      where $a=x_0<x_1<\\cdots<x_n=b$. Choosing a point $t_i\\in I_i$ for each $i$ gives a
      <b>tagged partition</b> $\\dot P=\\{(I_1,t_1),\\dots,(I_n,t_n)\\}$; the $t_i$ are its <b>tags</b>.`,
    intuition: `This is the bookkeeping behind a Riemann sum: you need both the pieces the
      interval is cut into and a chosen "tag" point inside each piece where the function will
      be evaluated. It is set up now because gauges (5.5.2) are about to control, point by
      point, how fine each piece is allowed to be.`,
    needs: ['s.interval'],
    cards: [
      { q: 'What two pieces of data does a tagged partition of $[a,b]$ carry?', a: 'A collection of non-overlapping closed subintervals covering $[a,b]$, plus one tag point chosen inside each subinterval.', kind: 'state' },
      { q: 'In a tagged partition, must a tag $t_i$ lie inside its own subinterval $I_i$?', a: 'Yes — $t_i\\in I_i$ by definition.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.5.2', bartle: '5.5.2', sec: '5.5', kind: 'definition', tier: 'ext',
    title: 'Gauge and δ-Fine Partition',
    oneLine: 'A gauge hands out a personal tolerance at every point; a δ-fine partition respects all of them.',
    statement: `A <b>gauge</b> on $I$ is a function $\\delta:I\\to(0,\\infty)$. A tagged partition
      $\\dot P=\\{(I_i,t_i)\\}_{i=1}^n$ of $I$ is $\\delta$<b>-fine</b> if
      $$t_i\\in I_i\\subseteq[t_i-\\delta(t_i),\\,t_i+\\delta(t_i)]\\quad\\text{for } i=1,\\dots,n.$$`,
    intuition: `A single positive number $\\delta$ forces every subinterval to be short. A gauge
      is more flexible: it can demand tiny subintervals near "delicate" points and allow long
      ones elsewhere, with the allowed size varying from point to point. This is exactly the
      kind of point-dependent control that continuity naturally produces — an $\\varepsilon$ at
      $t$ gives its own $\\delta(t)$ — which is why gauges built from continuous functions arise
      so naturally.`,
    needs: ['c.5.5.1', 's.abs-ineq', 'c.5.1.2'],
    traps: [
      `Do not confuse "a gauge" with "a fixed $\\delta>0$" — a gauge $\\delta(\\cdot)$ is a whole
       function, and it is allowed to vary wildly (even shrink to $0$) as the point moves.`
    ],
    cards: [
      { q: 'What is a gauge on an interval $I$?', a: 'A function $\\delta:I\\to(0,\\infty)$ assigning a strictly positive tolerance to every point of $I$.', kind: 'state' },
      { q: 'When is a tagged partition $\\{(I_i,t_i)\\}$ $\\delta$-fine?', a: 'When every $I_i\\subseteq[t_i-\\delta(t_i),t_i+\\delta(t_i)]$, i.e. each piece stays inside the tolerance window of its own tag.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.5.3', bartle: '5.5.3', sec: '5.5', kind: 'lemma', tier: 'ext',
    title: 'Every Point Lies Near Some Tag',
    oneLine: 'Any point of $I$ is within its subinterval\u2019s tag-tolerance of that tag.',
    statement: `If $\\dot P=\\{(I_i,t_i)\\}$ is a $\\delta$-fine partition of $I=[a,b]$ and
      $x\\in I$, then there is a tag $t_i$ with $|x-t_i|\\le\\delta(t_i)$.`,
    intuition: `$x$ belongs to some subinterval $I_i$ of the partition; $\\delta$-fineness traps
      all of $I_i$ inside $t_i$'s tolerance window, so it traps $x$ too. This one-line
      consequence is what every gauge-based proof of a continuity theorem (Boundedness,
      Max-Min, Location of Roots, Uniform Continuity) actually uses.`,
    needs: ['c.5.5.2'],
    cards: [
      { q: 'Why does every $x\\in I$ land within $\\delta(t_i)$ of some tag $t_i$?', a: '$x$ lies in some subinterval $I_i$ of the $\\delta$-fine partition, and $\\delta$-fineness already forces all of $I_i$ (hence $x$) inside $[t_i-\\delta(t_i),t_i+\\delta(t_i)]$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.5.4', bartle: '5.5.4', sec: '5.5', kind: 'example', tier: 'ext',
    title: 'A Gauge That Forces a Tag at an Endpoint',
    oneLine: 'A gauge can shrink toward a point so hard that only that point can tag its own subinterval.',
    statement: `On $I:=[0,1]$ let $\\delta(0):=\\tfrac12$ and $\\delta(x):=\\tfrac12 x$ for
      $0<x\\le1$. For $0<t\\le1$, $[t-\\delta(t),t+\\delta(t)]=[\\tfrac12t,\\tfrac32t]$, which
      never contains $0$. Hence in any $\\delta$-fine partition of $I$, the only subinterval
      touching $0$ must be tagged at $0$ itself.`,
    intuition: `This is why gauges are strictly more powerful than a single number $\\delta$:
      by letting $\\delta(t)\\to0$ as $t\\to0$, the definition can force a specific tag choice
      at a specific point, a kind of control a constant $\\delta$ can never give.`,
    needs: ['c.5.5.2'],
    cards: [
      { q: 'For $\\delta(x)=\\tfrac12x$ on $(0,1]$, what happens to the tolerance window as $t\\to0^+$?', a: 'It shrinks to a single point at the origin, so no subinterval tagged away from $0$ can ever contain $0$ — forcing $0$ to be its own tag.', kind: 'apply' }
    ]
  },
  {
    id: 'c.5.5.5', bartle: '5.5.5', sec: '5.5', kind: 'theorem', tier: 'ext',
    title: "Existence of δ-Fine Partitions (Cousin's Lemma)",
    oneLine: 'No matter how a gauge varies, a partition respecting it everywhere always exists.',
    statement: `If $\\delta$ is a gauge on $[a,b]$, then $[a,b]$ has a $\\delta$-fine partition.`,
    intuition: `This existence result — proved from the Supremum Property of $\\mathbb{R}$ — is
      what makes gauge-controlled partitions usable at all. It underlies the entire generalized
      Riemann integral, and it also powers slick alternative proofs of the classical §5.3–5.4
      continuity theorems (Boundedness, Max-Min, Location of Roots, Uniform Continuity), each
      built from a gauge coming from continuity itself.`,
    needs: ['c.5.5.2', 'c.2.3.1'],
    traps: [
      `Existence is not obvious for a non-constant gauge — it genuinely needs completeness of
       $\\mathbb{R}$ (via a supremum argument), not just a direct construction.`
    ],
    cards: [
      { q: "What does Cousin's Lemma (5.5.5) guarantee?", a: 'Every gauge $\\delta$ on $[a,b]$ admits at least one $\\delta$-fine tagged partition of $[a,b]$.', kind: 'state' },
      { q: 'What property of $\\mathbb{R}$ does the existence of $\\delta$-fine partitions rest on?', a: 'The Supremum (Completeness) Property of $\\mathbb{R}$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.5.6.1', bartle: '5.6.1', sec: '5.6', kind: 'theorem', tier: 'extra',
    title: 'One-Sided Limits of a Monotone Function',
    oneLine: 'A monotone function never fails to have one-sided limits — the worst it can do is jump.',
    statement: `Let $I\\subseteq\\mathbb{R}$ be an interval and $f:I\\to\\mathbb{R}$ increasing on
      $I$. If $c\\in I$ is not an endpoint of $I$, then
      $$\\lim_{x\\to c^-}f(x)=\\sup\\{f(x):x\\in I,\\,x<c\\},\\qquad
        \\lim_{x\\to c^+}f(x)=\\inf\\{f(x):x\\in I,\\,x>c\\}.$$
      (For $f$ decreasing, the roles of $\\sup$ and $\\inf$ swap.)`,
    intuition: `Monotonicity means the values to the left of $c$ are all bounded above by
      $f(c)$ and climb steadily toward a "ceiling" as $x\\to c^-$; that ceiling is exactly the
      left-hand limit. So a monotone function can never oscillate the way a function like
      $\\sin(1/x)$ does near a point — both one-sided limits always exist as real numbers,
      whether or not $f$ is continuous at $c$.`,
    needs: ['c.4.3.1', 'c.2.3.1', 's.monotone'],
    traps: [
      `This theorem gives existence of both one-sided limits, not equality of them — a monotone
       function can still jump at $c$; see 5.6.3.`
    ],
    proof: {
      idea: `Show that $L:=\\sup\\{f(x):x\\in I,x<c\\}$ literally is the left-hand limit, by
        turning "not an upper bound" into an $\\varepsilon$-$\\delta$ statement.`,
      why: `Monotonicity is exactly what makes a supremum behave like a limit: once you get
        $\\varepsilon$-close in value, you are automatically squeezed for every point further
        right.`,
      rungs: [
        { why: 'Name the candidate limit: since $f$ is increasing, values left of $c$ are bounded above by $f(c)$, so this set has a supremum.', m: '$$L:=\\sup\\{f(x):x\\in I,\\,x<c\\}$$ (exists, as the set is nonempty and bounded above by $f(c)$)' },
        { why: 'Given $\\varepsilon>0$, $L-\\varepsilon$ is not an upper bound of the set, so some point just left of $c$ already gets close to $L$.', m: '$\\exists\\,y_\\varepsilon\\in I,\\ y_\\varepsilon<c:\\quad L-\\varepsilon<f(y_\\varepsilon)$' },
        { why: 'Convert this into an $x$-window using monotonicity: any $y$ between $y_\\varepsilon$ and $c$ has $f(y)$ trapped between $f(y_\\varepsilon)$ and $L$.', m: 'set $\\delta_\\varepsilon:=c-y_\\varepsilon>0$; for $y\\in I$ with $0<c-y<\\delta_\\varepsilon$: $L-\\varepsilon<f(y_\\varepsilon)\\le f(y)\\le L$' },
        { why: 'Read off convergence directly from that squeeze.', m: '$|f(y)-L|<\\varepsilon$ whenever $y\\in I,\\ 0<c-y<\\delta_\\varepsilon$' },
        { why: 'This is precisely the definition of the left-hand limit; the right-hand case is symmetric with $\\inf$.', m: '$$\\lim_{x\\to c^-}f(x)=L=\\sup\\{f(x):x\\in I,x<c\\}$$' }
      ],
      ends: `Both one-sided limits exist and are finite at every interior point of $I$, for any
        monotone $f$ — no continuity assumption is needed.`
    },
    cards: [
      { q: 'For $f$ increasing on $I$ and $c$ interior, what does $\\lim_{x\\to c^-}f(x)$ equal?', a: '$\\sup\\{f(x):x\\in I,\\,x<c\\}$.', kind: 'state' },
      { q: 'For $f$ increasing on $I$ and $c$ interior, what does $\\lim_{x\\to c^+}f(x)$ equal?', a: '$\\inf\\{f(x):x\\in I,\\,x>c\\}$.', kind: 'state' },
      { q: 'Does Theorem 5.6.1 guarantee $f$ is continuous at $c$?', a: 'No — it only guarantees both one-sided limits exist; they may still disagree, giving a jump.', kind: 'trap' },
      { q: 'What replaces $\\sup$/$\\inf$ in Theorem 5.6.1 if $f$ is decreasing instead of increasing?', a: 'The roles swap: $\\lim_{x\\to c^-}f=\\inf\\{f(x):x<c\\}$ and $\\lim_{x\\to c^+}f=\\sup\\{f(x):x>c\\}$.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.6.2', bartle: '5.6.2', sec: '5.6', kind: 'corollary', tier: 'extra',
    title: 'Continuity Criteria for an Increasing Function',
    oneLine: 'An increasing function is continuous exactly where its left ceiling, its value, and its right floor all coincide.',
    statement: `Let $I\\subseteq\\mathbb{R}$ be an interval, $f:I\\to\\mathbb{R}$ increasing on
      $I$, and $c\\in I$ not an endpoint of $I$. The following are equivalent:
      (a) $f$ is continuous at $c$;
      (b) $\\lim_{x\\to c^-}f=f(c)=\\lim_{x\\to c^+}f$;
      (c) $\\sup\\{f(x):x\\in I,\\,x<c\\}=f(c)=\\inf\\{f(x):x\\in I,\\,x>c\\}$.`,
    intuition: `This combines "continuity means the limit equals the value" (Chapter 4) with
      the explicit $\\sup/\\inf$ formulas of 5.6.1: for a monotone function, continuity at $c$
      reduces to a numeric equality you can check by computing two extrema and comparing them
      to $f(c)$.`,
    needs: ['c.5.6.1', 'c.5.1.2'],
    traps: [
      `This form needs $c$ to be an interior point (not an endpoint); the endpoint case is
       handled separately in 5.6.3.`
    ],
    proof: {
      idea: `Chain the "limit equals value" definition of continuity together with the explicit
        $\\sup/\\inf$ values Theorem 5.6.1 supplies for the two one-sided limits.`,
      why: `Once both one-sided limits have explicit formulas, "continuity" stops being a
        limiting statement and becomes an equation between three numbers.`,
      rungs: [
        { why: 'Recall the Chapter 4 fact linking continuity to one-sided limits.', m: '$f$ continuous at $c$ $\\iff$ $\\lim_{x\\to c^-}f=f(c)=\\lim_{x\\to c^+}f$ — this is (a) $\\iff$ (b)' },
        { why: 'Substitute the explicit values Theorem 5.6.1 gives for those two limits.', m: 'by 5.6.1: $\\lim_{x\\to c^-}f=\\sup\\{f(x):x<c\\}$ and $\\lim_{x\\to c^+}f=\\inf\\{f(x):x>c\\}$' },
        { why: 'Plugging these in turns (b) into (c) with no extra work.', m: '(b) $\\iff$ $\\sup\\{f(x):x<c\\}=f(c)=\\inf\\{f(x):x>c\\}$ — this is (b) $\\iff$ (c)' }
      ],
      ends: `(a), (b), (c) are three phrasings of the same fact; (c) is the version you compute
        with in practice.`
    },
    cards: [
      { q: 'State condition (c) of Corollary 5.6.2 in your own words.', a: 'The supremum of $f$ over points left of $c$, the value $f(c)$, and the infimum of $f$ over points right of $c$ all coincide.', kind: 'state' },
      { q: 'How would you check continuity of an increasing $f$ at an interior point $c$ using 5.6.2?', a: 'Compute $\\sup\\{f(x):x<c\\}$ and $\\inf\\{f(x):x>c\\}$ and check both equal $f(c)$.', kind: 'apply' },
      { q: 'Does Corollary 5.6.2 apply at an endpoint of $I$?', a: 'No — it requires $c$ to be an interior (non-endpoint) point of $I$.', kind: 'trap' }
    ]
  },
  {
    id: 'c.5.6.3', bartle: '5.6.3', sec: '5.6', kind: 'theorem', tier: 'extra',
    title: 'Continuity via the Jump',
    oneLine: 'A monotone function is continuous exactly where it does not jump.',
    statement: `For $f$ increasing on interval $I$ and $c\\in I$ not an endpoint, define the
      <b>jump</b> of $f$ at $c$ as
      $$j_f(c):=\\lim_{x\\to c^+}f-\\lim_{x\\to c^-}f=\\inf\\{f(x):x\\in I,x>c\\}-\\sup\\{f(x):x\\in I,x<c\\}.$$
      If $a\\in I$ is the left endpoint, $j_f(a):=\\lim_{x\\to a^+}f-f(a)$; if $b\\in I$ is the
      right endpoint, $j_f(b):=f(b)-\\lim_{x\\to b^-}f$. Then, for any $c\\in I$: $f$ is
      continuous at $c$ if and only if $j_f(c)=0$.`,
    intuition: `The jump measures the size of the gap a monotone function leaps over rather
      than passes through, since monotonicity forbids its values from wobbling past that gap.
      Continuity is exactly the case where the gap has size zero, whether $c$ sits in the
      interior or at an endpoint of the domain.`,
    needs: ['c.5.6.1', 'c.5.6.2'],
    traps: [
      `For increasing $f$, $j_f(c)\\ge0$ always (never negative) — it can never happen that the
       right floor sits below the left ceiling.`,
      `The endpoint formulas use only the one relevant one-sided limit, not both.`
    ],
    proof: {
      idea: `The interior case is Corollary 5.6.2 restated in jump language; each endpoint case
        repeats the same one-sided argument with the single relevant limit.`,
      why: `"Jump equals zero" is just a repackaging of "the numbers that must be equal for
        continuity really are equal."`,
      rungs: [
        { why: 'Translate condition (c) of Corollary 5.6.2 into "gap = 0" at an interior point.', m: 'for interior $c$: $j_f(c)=\\inf\\{f(x):x>c\\}-\\sup\\{f(x):x<c\\}=0\\iff$ (c) of Cor. 5.6.2 $\\iff f$ continuous at $c$' },
        { why: 'Note the jump can never be negative for an increasing function, since the right floor cannot undercut the left ceiling.', m: '$j_f(c)\\ge0$ always, because $\\sup\\{f(x):x<c\\}\\le f(c)\\le\\inf\\{f(x):x>c\\}$' },
        { why: 'At a left endpoint $a\\in I$ there is only a right-hand limit to compare against $f(a)$.', m: '$j_f(a):=\\lim_{x\\to a^+}f-f(a)=0\\iff f(a)=\\lim_{x\\to a^+}f\\iff f$ continuous at $a$' },
        { why: 'The right-endpoint case is symmetric, using only the left-hand limit.', m: '$j_f(b):=f(b)-\\lim_{x\\to b^-}f=0\\iff f$ continuous at $b$' }
      ],
      ends: `In every case — interior point or either endpoint — continuity of a monotone
        function at $c$ is exactly the statement $j_f(c)=0$.`
    },
    cards: [
      { q: 'Define the jump $j_f(c)$ of an increasing function at an interior point $c$.', a: '$j_f(c)=\\lim_{x\\to c^+}f-\\lim_{x\\to c^-}f=\\inf\\{f(x):x>c\\}-\\sup\\{f(x):x<c\\}$.', kind: 'state' },
      { q: 'For $f$ increasing, can $j_f(c)$ ever be negative?', a: 'No — for an increasing function $j_f(c)\\ge0$ everywhere.', kind: 'trap' },
      { q: 'What single condition on the jump characterizes continuity of a monotone $f$ at $c$?', a: '$j_f(c)=0$.', kind: 'state' },
      { q: 'How is the jump defined differently at a left endpoint versus an interior point?', a: 'At a left endpoint $a$, $j_f(a):=\\lim_{x\\to a^+}f-f(a)$, using only the one-sided limit that exists there — not the difference of two one-sided limits.', kind: 'recall' }
    ]
  },
  {
    id: 'c.5.6.4', bartle: '5.6.4', sec: '5.6', kind: 'theorem', tier: 'extra',
    title: 'Monotone Functions Have Countably Many Discontinuities',
    oneLine: 'A monotone function can jump, but only at countably many points.',
    statement: `Let $I\\subseteq\\mathbb{R}$ be an interval and $f:I\\to\\mathbb{R}$ monotone on
      $I$. Then the set $D=\\{x\\in I: f\\text{ is discontinuous at }x\\}$ is countable.`,
    intuition: `Every jump "eats" a chunk of the total rise $f(b)-f(a)$, and only finitely many
      jumps can exceed any fixed size $1/k$. Stacking these finite bounds over
      $k=1,2,3,\\dots$ shows there are at most countably many discontinuities in total — a pure
      counting argument that says nothing about *where* they are, only that there cannot be
      "too many."`,
    needs: ['c.5.6.3'],
    traps: [
      `"Only finitely many jumps exceed $1/k$" does not mean $f$ has only finitely many
       discontinuities overall — summing over every $k$ only gives countably many, and a
       monotone function genuinely can be discontinuous at, say, every rational point.`,
      `This says nothing about continuity almost everywhere in a measure sense beyond
       countability; it is purely a cardinality statement.`
    ],
    proof: {
      idea: `Bound how many jumps can exceed a threshold $1/k$ using the fact that jumps at
        distinct points reflect disjoint chunks of the function's total rise, then let
        $k\\to\\infty$.`,
      why: `Countability is really "countable union of finite sets," and the finite-set bound
        at level $k$ comes for free from monotonicity: jumps cannot overlap or exceed the total
        rise of $f$.`,
      rungs: [
        { why: 'For any finitely many ordered points, their jumps add up to at most the total rise of $f$ across $I$ — the jumps cannot overlap.', m: 'for $a\\le x_1<x_2<\\cdots<x_n\\le b$: $j_f(x_1)+j_f(x_2)+\\cdots+j_f(x_n)\\le f(b)-f(a)$' },
        { why: 'Turn "total jump is bounded" into "few big jumps": if more than $k$ points had jump $\\ge(f(b)-f(a))/k$, their sum alone would exceed the total rise.', m: 'for fixed $k\\in\\mathbb N$, the set $\\{x\\in I: j_f(x)\\ge (f(b)-f(a))/k\\}$ has at most $k$ points' },
        { why: 'Every discontinuity has strictly positive jump (5.6.3), so $D$ is exactly the union of these threshold sets over all $k$.', m: '$D=\\{x\\in I:j_f(x)>0\\}=\\bigcup_{k=1}^{\\infty}\\{x\\in I:j_f(x)\\ge (f(b)-f(a))/k\\}$' },
        { why: 'A countable union of finite sets is countable.', m: '$D$ is a countable union of finite sets $\\implies D$ is countable' }
      ],
      ends: `Every monotone function on an interval has at most countably many points of
        discontinuity, however wildly it jumps.`
    },
    cards: [
      { q: 'If $f$ is monotone on an interval $I$, what can you say about its set of discontinuities?', a: 'It is countable (finite or countably infinite), never uncountable.', kind: 'state' },
      { q: 'What quantity bounds the sum of jumps at any finite set of points $x_1<\\dots<x_n$ in $[a,b]$?', a: '$f(b)-f(a)$, the total rise of $f$ — jumps at distinct points cannot overlap.', kind: 'recall' },
      { q: 'A monotone function on $[0,1]$ jumps at every rational point. Does this contradict Theorem 5.6.4?', a: 'No — the rationals are countable, so this is fully consistent with (and a standard example of) the theorem.', kind: 'apply' },
      { q: 'True or false: a monotone function can only have finitely many discontinuities.', a: 'False — it can have countably infinitely many (e.g. one at every rational), just never uncountably many.', kind: 'trap' }
    ]
  },
  {
    id: 'c.5.6.5', bartle: '5.6.5', sec: '5.6', kind: 'theorem', tier: 'extra',
    title: 'Continuous Inverse Theorem',
    oneLine: 'A strictly monotone continuous function on an interval always has a continuous inverse.',
    statement: `Let $I\\subseteq\\mathbb{R}$ be an interval and $f:I\\to\\mathbb{R}$ strictly
      monotone and continuous on $I$. Then the inverse function $g$ of $f$, defined on
      $J:=f(I)$, is strictly monotone (in the same sense as $f$) and continuous on $J$.`,
    intuition: `Strict monotonicity alone already makes $f$ injective, so the inverse $g$
      exists as a function and is automatically order-preserving. The real content of this
      theorem is that $g$'s continuity needs no separate check: continuity plus an interval
      domain for $f$ forces it. Drop any one hypothesis — interval domain, continuity of $f$,
      or strictness — and the inverse can fail to be continuous.`,
    needs: ['c.5.3.10', 'c.5.1.2', 'c.5.6.3', 's.inverse-fn', 's.monotone'],
    traps: [
      `The domain of $f$ must be an interval — a strictly monotone continuous function on a
       non-interval set (e.g. a union of two disjoint intervals) can have a discontinuous
       inverse.`,
      `Continuity of $f$ alone, without strict monotonicity, is not enough — $f$ may not even
       be injective, so no inverse function exists at all.`,
      `Monotonicity of $g$ is the easy half (pure order-chasing); continuity of $g$ is the
       substantial half, coming from $I=g(J)$ being an interval.`
    ],
    proof: {
      idea: `Strict monotonicity gives $g$ for free, order-preserving by a direct chase.
        Continuity of $g$ is proved by contradiction: a jump in $g$ would force a "missing"
        value out of $I$, contradicting that $I$ is an interval.`,
      why: `This swaps an $\\varepsilon$-$\\delta$ computation for a purely structural fact —
        the range of a continuous function on an interval is again an interval — so continuity
        of the inverse comes from geometry, not estimation.`,
      rungs: [
        { why: 'Confirm the setup: $J$ is an interval (so it makes sense to ask if $g$ is continuous "at a point of $J$"), and $g$ exists because $f$ is injective.', m: '$J:=f(I)$ is an interval (Thm 5.3.10, since $f$ is continuous on interval $I$); $f$ strictly increasing $\\implies$ injective on $I$ $\\implies$ $g:J\\to\\mathbb R$ with $g(f(x))=x$ exists' },
        { why: 'Show $g$ inherits the order: a bigger output of $f$ must come from a bigger input.', m: 'for $y_1<y_2$ in $J$, write $y_1=f(x_1),\\,y_2=f(x_2)$; if $x_1\\ge x_2$ then $f(x_1)\\ge f(x_2)$, contradicting $y_1<y_2$ — so $x_1<x_2$, i.e. $g(y_1)<g(y_2)$' },
        { why: 'Suppose for contradiction $g$ is discontinuous at some $c\\in J$; by 5.6.3 this means a nonzero jump.', m: 'suppose $g$ discontinuous at $c\\in J$; by Thm 5.6.3, $\\lim_{y\\to c^-}g<\\lim_{y\\to c^+}g$' },
        { why: 'Pick a candidate value strictly between those two one-sided limits of $g$.', m: 'choose $x$ with $\\lim_{y\\to c^-}g<x<\\lim_{y\\to c^+}g$ and $x\\ne g(c)$' },
        { why: 'Strict monotonicity of $g$ rules out any $y\\in J$ actually attaining this $x$ as $g(y)$.', m: 'no $y\\in J$ has $g(y)=x$, so $x\\notin g(J)=I$' },
        { why: 'But $x$ sits strictly between values that are limits of points of $I$, so $x$ ought to be trapped inside $I$ — contradicting that $I$ is an interval.', m: '$x\\notin I$ contradicts $I$ being an interval, since $x$ lies between elements of $g(J)=I$' }
      ],
      ends: `The assumption that $g$ is discontinuous is impossible, so $g$ is continuous on
        all of $J$. (The strictly decreasing case is symmetric.) This is exactly the theorem
        used to build the $n$th root function: $g(x)=x^{1/n}$ on $[0,\\infty)$ ($n$ even, from
        $f(x)=x^n$ on $[0,\\infty)$, with $J=[0,\\infty)$ via the Archimedean Property and IVT
        5.3.7) or on all of $\\mathbb{R}$ ($n$ odd, from $f(x)=x^n$ on $\\mathbb{R}$).`
    },
    cards: [
      { q: 'What three hypotheses does the Continuous Inverse Theorem need on $f:I\\to\\mathbb{R}$?', a: 'That $I$ is an interval, and $f$ is strictly monotone and continuous on $I$.', kind: 'state' },
      { q: 'Why does the inverse $g$ automatically exist once $f$ is strictly monotone?', a: 'Strict monotonicity makes $f$ injective, and an injective function always has an inverse on its range.', kind: 'recall' },
      { q: 'Use 5.6.5 to explain why $g(x)=x^{1/n}$ is continuous on $[0,\\infty)$ for $n$ even.', a: '$f(x)=x^n$ is strictly increasing and continuous on the interval $[0,\\infty)$ with range $[0,\\infty)$ (via Archimedean Property + IVT), so by 5.6.5 its inverse $g(x)=x^{1/n}$ is strictly increasing and continuous there.', kind: 'apply' },
      { q: 'If $f$ is continuous but only weakly monotone (not strict) on an interval, does 5.6.5 apply?', a: 'No — weak monotonicity does not guarantee injectivity, so an inverse function may not even exist.', kind: 'trap' }
    ]
  },
  {
    id: 'c.5.6.6', bartle: '5.6.6', sec: '5.6', kind: 'definition', tier: 'extra',
    title: 'Rational Powers',
    oneLine: 'Rational exponents are defined by first taking the nth root, then raising to the integer power.',
    statement: `For $m,n\\in\\mathbb N$ and $x\\ge0$, define $x^{m/n}:=(x^{1/n})^m$. For $x>0$,
      define $x^{-m/n}:=(x^{1/n})^{-m}$. (Here $x^{1/n}$ is the $n$th root function built as the
      inverse of $t\\mapsto t^n$ via Theorem 5.6.5.)`,
    intuition: `This simply assembles rational powers out of the $n$th root function already
      constructed (5.6.5) and ordinary integer powers — nothing new needs to exist. The only
      loose end, checked in the exercises, is that the definition does not secretly depend on
      how the exponent $m/n$ is written as a fraction.`,
    needs: ['c.5.6.5'],
    traps: [
      `The definition needs $x\\ge0$ (or $x>0$ for negative rational exponents) — even
       denominators $n$ require nonnegative $x$ for $x^{1/n}$ to make sense as a real number.`,
      `Well-definedness (that $r=m/n=p/q$ gives the same value either way) is not automatic —
       it has to be checked, and Bartle leaves it as an exercise.`
    ],
    cards: [
      { q: 'How is $x^{m/n}$ defined for $m,n\\in\\mathbb N$, $x\\ge0$?', a: '$x^{m/n}:=(x^{1/n})^m$ — take the $n$th root first, then raise to the $m$th power.', kind: 'state' },
      { q: 'Why is $x\\ge0$ required in the definition of $x^{m/n}$?', a: 'Because $x^{1/n}$ (the $n$th root) is only defined for $x\\ge0$ in general (needed whenever $n$ is even).', kind: 'recall' },
      { q: 'Is it obvious that $x^{2/4}$ and $x^{1/2}$ give the same value from this definition?', a: 'No — it requires a separate well-definedness check (same rational number, different fraction representations); it is not automatic from the definition alone.', kind: 'trap' }
    ]
  },
  {
    id: 'c.5.6.7', bartle: '5.6.7', sec: '5.6', kind: 'theorem', tier: 'extra',
    title: 'Rational Powers Commute with nth Roots',
    oneLine: 'Taking the nth root then the mth power gives the same result as the mth power then the nth root.',
    statement: `If $m\\in\\mathbb Z$, $n\\in\\mathbb N$, and $x>0$, then $x^{m/n}=(x^m)^{1/n}$.`,
    intuition: `Both sides are, by definition, "the positive number whose $n$th power is
      $x^m$." Proving the identity is just checking that the candidate $y:=x^{m/n}$, raised to
      the $n$th power using ordinary integer exponent laws, actually equals $x^m$.`,
    needs: ['c.5.6.6'],
    proof: {
      idea: `Name $y:=x^{m/n}$ from the definition, compute $y^n$ using only integer-exponent
        laws, and recognize the result as exactly the defining property of $(x^m)^{1/n}$.`,
      why: `Uniqueness of the positive $n$th root turns "$y^n=x^m$ with $y>0$" directly into
        "$y=(x^m)^{1/n}$" — no further estimation needed.`,
      rungs: [
        { why: 'Set up the candidate value from the definition of rational powers (5.6.6).', m: 'let $y:=x^{m/n}=(x^{1/n})^m$' },
        { why: 'Recall the defining property of the $n$th root: raising it to the $n$th power returns $x$.', m: '$(x^{1/n})^n=x$' },
        { why: 'Compute $y^n$ using only integer-exponent power laws, reordering the two exponents.', m: '$y^n=\\big((x^{1/n})^m\\big)^n=\\big((x^{1/n})^n\\big)^m=x^m$' },
        { why: '"$y>0$ and $y^n=x^m$" is precisely what it means to say $y$ is the $n$th root of $x^m$.', m: 'since $y>0$ and $y^n=x^m$, by definition $y=(x^m)^{1/n}$' }
      ],
      ends: `$x^{m/n}=(x^m)^{1/n}$ for all $x>0$, $m\\in\\mathbb Z$, $n\\in\\mathbb N$ — integer
        power and $n$th root commute.`
    },
    cards: [
      { q: 'State Theorem 5.6.7.', a: 'For $m\\in\\mathbb Z$, $n\\in\\mathbb N$, $x>0$: $x^{m/n}=(x^m)^{1/n}$.', kind: 'state' },
      { q: 'Use 5.6.7 to compute $8^{2/3}$ two ways.', a: '$(8^{1/3})^2=2^2=4$, and equivalently $(8^2)^{1/3}=64^{1/3}=4$ — same answer either order.', kind: 'apply' },
      { q: 'Does Theorem 5.6.7 apply when $x\\le0$?', a: 'No — it requires $x>0$; even roots of nonpositive numbers are not defined in this framework.', kind: 'trap' }
    ]
  }
);

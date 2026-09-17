/* Bartle 5.3 Continuous Functions on Intervals · 5.4 Uniform Continuity */
CONCEPTS.push(
  {
    id:'c.5.3.1', bartle:'5.3.1', sec:'5.3', kind:'definition', tier:'core',
    title:'Bounded Function on a Set',
    oneLine:'The whole range of f fits inside some band [-M,M].',
    statement:`Let $A\\subseteq\\mathbb{R}$ and $f:A\\to\\mathbb{R}$. We say $f$ is <b>bounded on $A$</b> if there exists $M>0$ such that $|f(x)|\\le M$ for all $x\\in A$.
    <br>Equivalently, $f$ is <b>unbounded on $A$</b> if for every $M>0$ there exists a point $x_M\\in A$ such that $|f(x_M)|>M$.`,
    intuition:`This is a statement about the whole set at once, not about any single point. Squash the picture flat: "bounded on $A$" just means the graph of $f$ over $A$ never leaves some horizontal strip $-M\\le y\\le M$. It says nothing about how $f$ behaves — only that it never runs away to $\\pm\\infty$ anywhere in $A$. Continuity is a local, point-by-point promise; boundedness is a global, whole-set promise, and the two do not automatically go together.`,
    needs:['c.2.3.1','s.abs-ineq'],
    traps:[
      `<b>Continuous does NOT imply bounded</b> in general. $f(x):=1/x$ on $A:=(0,\\infty)$ is continuous at every point of $A$ but is unbounded: given any $M$, take $x_M:=1/(M+1)$ and $f(x_M)=M+1>M$.`,
      `Boundedness depends on the domain you're testing, not just the formula. $1/x$ is unbounded on $(0,\\infty)$ but bounded on $[1,\\infty)$.`
    ],
    cards:[
      { q:'State the definition of "f is bounded on A".', a:'There exists $M>0$ with $|f(x)|\\le M$ for every $x\\in A$.', kind:'state' },
      { q:'What does it mean for f to be unbounded on A, spelled out with quantifiers?', a:'For every $M>0$ there is some $x_M\\in A$ with $|f(x_M)|>M$.', kind:'recall' },
      { q:'Is $f(x)=1/x$ bounded on $(0,\\infty)$? Justify in one line.', a:'No — take $x_M=1/(M+1)$, then $f(x_M)=M+1>M$ for every $M$.', kind:'apply' },
      { q:'True or false: a continuous function on a set is automatically bounded on that set.', a:'False in general — e.g. $1/x$ on $(0,\\infty)$. It becomes true only when the set is a closed bounded interval (Boundedness Theorem 5.3.2).', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.2', bartle:'5.3.2', sec:'5.3', kind:'theorem', tier:'core',
    title:'Boundedness Theorem',
    oneLine:'Continuous on a closed bounded interval ⇒ automatically bounded.',
    statement:`Let $I:=[a,b]$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then $f$ is bounded on $I$.`,
    intuition:`Closed and bounded together trap every sequence you build inside $I$ — you can never escape to infinity and you can never leak out the ends. If $f$ tried to blow up, you could chase the blow-up with a sequence of points, and Bolzano–Weierstrass would force that sequence to have a subsequence settling down inside $I$. But $f$ is continuous there, so $f$ must settle down too — contradicting the blow-up. Boundedness of the interval feeds the compactness argument; closedness keeps the limit point from falling out of the domain.`,
    needs:['c.3.4.8','c.3.2.6','c.3.2.2','c.5.1.1','s.contradiction','s.interval'],
    traps:[
      `<b>Interval must be BOUNDED.</b> $f(x):=x$ on the closed but unbounded interval $A:=[0,\\infty)$ is continuous but not bounded.`,
      `<b>Interval must be CLOSED.</b> $g(x):=1/x$ on the bounded but half-open interval $B:=(0,1]$ is continuous but not bounded.`,
      `<b>f must be continuous.</b> $h(x):=1/x$ for $x\\in(0,1]$, $h(0):=1$, on the closed bounded interval $C:=[0,1]$, is discontinuous at $0$ and unbounded.`,
      `Do not just say "closed interval" — an unbounded closed interval like $[0,\\infty)$ is not enough. You need BOTH closed AND bounded.`
    ],
    proof:{
      idea:`If $f$ were unbounded, you could pick points where $|f|$ blows past every threshold $n$. Bolzano–Weierstrass squeezes a convergent subsequence of those points out of the bounded interval $I$; closedness keeps the limit inside $I$; continuity there forces the function values to converge too — but they were built to blow up. Contradiction.`,
      why:`This is the standard "sequence hunts down the failure, compactness tames the sequence, continuity delivers the contradiction" pattern that recurs through this whole section.`,
      rungs:[
        { why:'Proof by contradiction: assume the theorem is false.', m:`Suppose $f$ is <b>not</b> bounded on $I$.` },
        { why:'Unpack what "unbounded" means: for every threshold $n$, some point of $I$ makes $|f|$ exceed it.', m:`For each $n\\in\\mathbb{N}$ there is $x_n\\in I$ with $|f(x_n)|>n$.` },
        { why:'These witness points live in a bounded interval, which is exactly what Bolzano–Weierstrass needs.', m:`$X:=(x_n)$ is a bounded sequence, since $I=[a,b]$ is bounded.` },
        { why:'Extract a convergent subsequence — the key compactness tool.', m:`By the Bolzano–Weierstrass Theorem (3.4.8), there is a subsequence $X'=(x_{n_r})$ with $x_{n_r}\\to x$.` },
        { why:'The limit cannot escape $I$, because $I$ is closed and every term of the subsequence sits inside $I$.', m:`Since $I$ is closed and $x_{n_r}\\in I$ for all $r$, Theorem 3.2.6 gives $x\\in I$.` },
        { why:'Now continuity of $f$ at this point converts convergence of inputs into convergence of outputs.', m:`$f$ is continuous at $x\\in I$, so $f(x_{n_r})\\to f(x)$.` },
        { why:'Convergent sequences must be bounded — but our sequence was built to be unbounded.', m:`By Theorem 3.2.2, $(f(x_{n_r}))$ convergent $\\Rightarrow$ bounded. Yet $|f(x_{n_r})|>n_r\\ge r$ for every $r$, so $(f(x_{n_r}))$ is unbounded.` }
      ],
      ends:`These two facts about $(f(x_{n_r}))$ — bounded and unbounded — contradict each other. So the assumption fails: $f$ must be bounded on $I$.`
    },
    cards:[
      { q:'State the Boundedness Theorem, including all hypotheses.', a:'If $I=[a,b]$ is a closed bounded interval and $f:I\\to\\mathbb{R}$ is continuous on $I$, then $f$ is bounded on $I$.', kind:'state' },
      { q:'Which theorem from Chapter 3 supplies the convergent subsequence in this proof?', a:'The Bolzano–Weierstrass Theorem (3.4.8), applied to the bounded sequence of "witness points".', kind:'recall' },
      { q:'Give a function that is continuous and closed-interval-valued-domain but unbounded, and say which hypothesis it violates.', a:'$f(x)=x$ on $[0,\\infty)$: the interval is closed but not bounded.', kind:'apply' },
      { q:'A student proves f is bounded on (0,1] by citing the Boundedness Theorem, since f is continuous there. What is wrong?', a:'$(0,1]$ is bounded but not closed — the theorem does not apply; indeed $g(x)=1/x$ is a counterexample on this exact set.', kind:'trap' },
      { q:'Exactly which two properties of the interval I does this proof use, and where does each one enter?', a:'Boundedness of I gives a bounded witness sequence (needed for Bolzano–Weierstrass); closedness of I keeps the limit point x inside I (needed so continuity of f at x applies).', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.3', bartle:'5.3.3', sec:'5.3', kind:'definition', tier:'core',
    title:'Absolute Maximum and Minimum',
    oneLine:'The single largest / smallest value f actually reaches on A, and where it happens.',
    statement:`Let $A\\subseteq\\mathbb{R}$ and $f:A\\to\\mathbb{R}$. $f$ has an <b>absolute maximum</b> on $A$ if there is $x^{*}\\in A$ with $f(x^{*})\\ge f(x)$ for all $x\\in A$. $f$ has an <b>absolute minimum</b> on $A$ if there is $x_{*}\\in A$ with $f(x_{*})\\le f(x)$ for all $x\\in A$. Such $x^{*}$ is called an absolute maximum point, and $x_{*}$ an absolute minimum point, for $f$ on $A$ — if they exist.`,
    intuition:`This is about the value being actually <i>attained</i> at some point of $A$, not merely about $\\sup f(A)$ or $\\inf f(A)$ existing as numbers. $\\sup$ and $\\inf$ always exist for a bounded set; whether some point of $A$ actually hits that number is a separate question.`,
    needs:['s.function'],
    traps:[
      `A maximum <i>point</i> need not be unique: $g(x)=x^2$ on $[-1,1]$ attains its max at both $x=1$ and $x=-1$.`,
      `Existence is not automatic on a general set: $f(x)=1/x$ on $(0,\\infty)$ has neither an absolute max nor an absolute min (unbounded above, and $\\inf=0$ is never attained).`,
      `The same function can gain or lose max/min points depending on which set you restrict it to — $1/x$ on $[1,\\infty)$ has a max but no min; on $(1,\\infty)$ it has neither.`
    ],
    cards:[
      { q:'Define "x* is an absolute maximum point for f on A".', a:'$x^{*}\\in A$ and $f(x^{*})\\ge f(x)$ for every $x\\in A$.', kind:'state' },
      { q:'Does f(x)=1/x on (0,∞) have an absolute maximum? An absolute minimum?', a:'Neither: f is unbounded above, and inf f = 0 is never actually attained by any x>0.', kind:'apply' },
      { q:'Can an absolute maximum point be non-unique? Give an example.', a:'Yes — g(x)=x² on [-1,1] has maximum points x=1 and x=-1 (both give the value 1).', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.4', bartle:'5.3.4', sec:'5.3', kind:'theorem', tier:'core',
    title:'Maximum–Minimum Theorem',
    oneLine:'Continuous on a closed bounded interval ⇒ actually attains a biggest and a smallest value.',
    statement:`Let $I:=[a,b]$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then $f$ has an absolute maximum and an absolute minimum on $I$.`,
    intuition:`The Boundedness Theorem already tells us $f(I)$ is a bounded set of numbers, so $\\sup f(I)$ and $\\inf f(I)$ exist as real numbers by completeness. The extra work here is showing these are not just abstract bounds hovering out of reach — some actual point of $I$ hits each one. The trick: build a sequence of points whose values creep arbitrarily close to the supremum, then use compactness (Bolzano–Weierstrass) plus continuity to show the limit point of that sequence is exactly where the supremum is achieved.`,
    needs:['c.5.3.2','c.2.3.6','c.3.4.8','c.3.2.6','c.3.2.7','c.5.1.1'],
    figs:['fig.maxmin', 'fig.no-max'],
    traps:[
      `Do not confuse "sup exists" with "sup is attained" — every bounded set has a supremum by completeness, but attainment needs this theorem's extra hypotheses (continuity + closed + bounded).`,
      `Forgetting either CLOSED or BOUNDED breaks attainment: $f(x)=x$ on $(0,1)$ has $\\sup=1,\\inf=0$, neither attained (interval not closed); the earlier boundedness counterexamples also fail to attain extrema since they're not even bounded.`
    ],
    proof:{
      idea:`We already know $f(I)$ is bounded, so $s^{*}:=\\sup f(I)$ exists. Build a sequence of points $x_n$ whose values creep up to within $1/n$ of $s^{*}$. Bolzano–Weierstrass gives a convergent subsequence inside $I$; continuity there, plus the Squeeze Theorem, forces the limiting value to equal exactly $s^{*}$ — so the supremum IS a value of $f$, attained at that limit point.`,
      why:`This is the Boundedness Theorem's proof pattern reused, but aimed at a target value ($s^{*}$) instead of a contradiction.`,
      rungs:[
        { why:'Reduce to showing the supremum of the range is actually reached.', m:`By 5.3.2, $f(I)$ is bounded and nonempty, so by the Completeness Property (2.3.6), $s^{*}:=\\sup f(I)$ exists.` },
        { why:'Since $s^*-1/n$ is not an upper bound of $f(I)$, some point of $I$ must beat it.', m:`For each $n\\in\\mathbb{N}$ there is $x_n\\in I$ with $s^{*}-\\dfrac{1}{n}<f(x_n)\\le s^{*}$.` },
        { why:'These points sit inside the bounded interval $I$ — extract a convergent subsequence.', m:`$(x_n)$ is bounded, so by Bolzano–Weierstrass (3.4.8) there is $(x_{n_r})\\to x^{*}$.` },
        { why:'The limit point cannot leak outside the closed interval.', m:`$I$ closed and $x_{n_r}\\in I$ $\\Rightarrow$ $x^{*}\\in I$ (Theorem 3.2.6).` },
        { why:'Continuity at $x^{*}$ converts convergence of inputs into convergence of outputs.', m:`$f$ continuous at $x^{*}$ $\\Rightarrow$ $f(x_{n_r})\\to f(x^{*})$.` },
        { why:'Squeeze the near-maximal values between $s^*-1/n_r$ and $s^*$ to pin their limit exactly at $s^*$.', m:`$s^{*}-\\dfrac{1}{n_r}<f(x_{n_r})\\le s^{*}$ for all $r$, so by the Squeeze Theorem (3.2.7), $f(x_{n_r})\\to s^{*}$.` },
        { why:'A sequence can only have one limit — compare the two limits just found.', m:`$f(x^{*})=\\lim f(x_{n_r})=s^{*}=\\sup f(I)$.` }
      ],
      ends:`So $x^{*}\\in I$ is an absolute maximum point for $f$ on $I$. The minimum case is symmetric: apply the same argument to $s_{*}:=\\inf f(I)$ (or apply this result to $-f$).`
    },
    cards:[
      { q:'State the Maximum–Minimum Theorem with all hypotheses.', a:'If $I=[a,b]$ is closed and bounded and $f:I\\to\\mathbb{R}$ is continuous on $I$, then f attains both an absolute maximum and an absolute minimum value on I.', kind:'state' },
      { q:'Which fact guarantees $\\sup f(I)$ exists as a real number in the first place?', a:'The Boundedness Theorem (5.3.2) shows $f(I)$ is bounded, and the Completeness Property (2.3.6) then gives a supremum for any nonempty bounded set.', kind:'recall' },
      { q:'What is the one extra fact this theorem proves beyond "$\\sup f(I)$ exists"?', a:'That the supremum (and infimum) is actually attained by f at some point of I — not merely a bound floating above the range.', kind:'apply' },
      { q:'Why does f(x)=x on the open interval (0,1) fail to attain a maximum, even though it is continuous and bounded?', a:'(0,1) is bounded but not closed, so one of the two required hypotheses fails — the theorem does not apply, and indeed no point of (0,1) attains sup f = 1.', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.5', bartle:'5.3.5', sec:'5.3', kind:'theorem', tier:'core',
    title:'Location of Roots Theorem',
    oneLine:'A continuous function that changes sign across [a,b] must actually hit 0 somewhere inside.',
    statement:`Let $I=[a,b]$ and let $f:I\\to\\mathbb{R}$ be continuous on $I$. If $f(a)<0<f(b)$, or if $f(a)>0>f(b)$, then there exists $c\\in(a,b)$ such that $f(c)=0$.`,
    intuition:`If you're negative at one end and positive at the other and you can't jump (continuity), you have to cross zero somewhere on the way. The proof turns this picture into an algorithm: repeatedly bisect $[a,b]$, always keeping the half where the sign still changes. This produces a shrinking nest of intervals homing in on a single point — and continuity forces the function value there to be squeezed to exactly $0$.`,
    needs:['c.2.5.2','c.5.1.1','c.3.2.4','s.interval'],
    traps:[
      `Needs a genuine STRICT sign change: $f(a)$ and $f(b)$ must have opposite strict signs, not just $f(a)\\ne f(b)$.`,
      `Needs continuity on all of $[a,b]$, not just near the root.`,
      `This only guarantees at least one root exists in $(a,b)$ — it says nothing about uniqueness.`,
      `The bisection algorithm may terminate early (hitting an exact zero at some midpoint) — the argument handles both the terminating and non-terminating cases.`
    ],
    proof:{
      idea:`Bisect $[a,b]$ over and over, at each step keeping whichever half still has a sign change. This builds a nested sequence of shrinking closed intervals; the Nested Intervals Property hands you a common point $c$; continuity then squeezes $f(c)$ between $\\le 0$ and $\\ge 0$, forcing $f(c)=0$.`,
      why:`This is literally the Bisection Method — the proof doubles as a root-finding algorithm.`,
      rungs:[
        { why:'Set up the halving process on the whole interval (the case $f(a)>0>f(b)$ is symmetric).', m:`Assume $f(a)<0<f(b)$. Let $I_1:=[a_1,b_1]=[a,b]$, and let $p_1$ be its midpoint.` },
        { why:'If the midpoint is already a root, stop; otherwise, keep whichever half still shows the sign change.', m:`If $f(p_1)=0$, take $c:=p_1$, done. Otherwise choose $I_2\\subset I_1$ to be the half with $f(a_2)<0<f(b_2)$ (left half if $f(p_1)>0$, right half if $f(p_1)<0$).` },
        { why:'Repeat forever if no midpoint is ever exactly zero, generating an infinite nest of intervals.', m:`Inductively build nested closed intervals $I_1\\supset I_2\\supset\\cdots$ with $f(a_n)<0$ and $f(b_n)>0$ for every $n$.` },
        { why:'Track how fast the intervals shrink — this is what will force a single common point.', m:`$\\text{length}(I_n)=b_n-a_n=\\dfrac{b-a}{2^{n-1}}\\to 0$.` },
        { why:'Nested closed bounded intervals always share a point — this is where completeness of $\\mathbb{R}$ enters.', m:`By the Nested Intervals Property (2.5.2), there is $c$ with $c\\in I_n$ for every $n$.` },
        { why:'Shrinking length pins both endpoint sequences to that same point $c$.', m:`$a_n\\le c\\le b_n$ for all $n$ and $b_n-a_n\\to 0$, so $\\lim(a_n)=c=\\lim(b_n)$.` },
        { why:'Continuity lets us carry the sign inequalities to the limit.', m:`$f$ continuous at $c$ $\\Rightarrow$ $f(a_n)\\to f(c)$ and $f(b_n)\\to f(c)$.` },
        { why:'Nonstrict inequalities survive taking limits — squeeze $f(c)$ from both sides.', m:`$f(a_n)<0$ for all $n$ $\\Rightarrow$ $f(c)\\le 0$; $\\ f(b_n)>0$ for all $n$ $\\Rightarrow$ $f(c)\\ge 0$. Hence $f(c)=0$.` }
      ],
      ends:`So $c\\in(a,b)$ is a root of $f$. (If the process ever terminates at some midpoint $p_n$ with $f(p_n)=0$, that $p_n$ is already the desired root.)`
    },
    cards:[
      { q:'State the Location of Roots Theorem including the exact sign hypothesis.', a:'If f is continuous on [a,b] and f(a)<0<f(b) (or f(a)>0>f(b)), then f(c)=0 for some c∈(a,b).', kind:'state' },
      { q:'Which completeness-type result supplies the point c common to every bisection interval?', a:'The Nested Intervals Property (2.5.2).', kind:'recall' },
      { q:'A student says f(a)≠f(b) is enough to guarantee a root between a and b. What is wrong?', a:'You need a strict sign change (one value negative, the other positive), not just inequality of the two values — e.g. f could be positive at both ends with f(a)≠f(b) and never cross zero.', kind:'trap' },
      { q:'Does the Location of Roots Theorem guarantee the root is unique?', a:'No — it only guarantees existence of at least one root in (a,b); there could be several.', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.6', bartle:'5.3.6', sec:'5.3', kind:'example', tier:'core',
    title:'Locating a Root by Bisection',
    oneLine:'Bisection turns the Location of Roots proof into a concrete numerical algorithm.',
    statement:`$f(x):=xe^{x}-2=0$ has a root $c$ in $[0,1]$, since $f$ is continuous there, $f(0)=-2<0$, and $f(1)=e-2>0$. Repeated bisection (halving the interval and keeping the half with the sign change) produces a table of midpoints $p_n$ with error bound $\\tfrac12(b_n-a_n)$; after $7$ steps, $c\\approx p_7=0.8515625$ with error $<0.0078125$, giving $0.843<c<0.860$.`,
    intuition:`This is the Location of Roots Theorem (5.3.5) in action: at each stage, evaluate $f$ at the midpoint $p_n$; its sign tells you which half still contains the sign change, and you recurse. The upper bound on the error after $n$ steps is exactly half the current interval length, which halves every step — so the error shrinks geometrically.`,
    needs:['c.5.3.5'],
    traps:[
      `The error bound after step $n$ is $\\tfrac12(b_n-a_n)$, not $b_n-a_n$ — the midpoint $p_n$ is within half the interval length of the true root.`,
      `Bisection is guaranteed to converge to <i>a</i> root, but if $f$ has several roots in $[a,b]$, which one it finds depends on where the sign change happens to persist at each stage.`
    ],
    cards:[
      { q:'What is the error bound on $p_n$ as an estimate for the root c after n bisection steps, in terms of the current interval $[a_n,b_n]$?', a:'$|p_n-c|\\le \\tfrac12(b_n-a_n)$.', kind:'recall' },
      { q:'On step n, if f(p_n)>0, which half of the current interval is kept for the next bisection (assuming f(a)<0<f(b))?', a:'The left half: [a_n, p_n] becomes the new interval, since f is still negative at the left end and positive at the (new) right end p_n.', kind:'apply' }
    ]
  },

  {
    id:'c.5.3.7', bartle:'5.3.7', sec:'5.3', kind:'theorem', tier:'core',
    title:"Bolzano's Intermediate Value Theorem",
    oneLine:'A continuous function on an interval hits every value strictly between two of its values.',
    statement:`Let $I$ be an interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. If $a,b\\in I$ and $k\\in\\mathbb{R}$ satisfies $f(a)<k<f(b)$ (or $f(a)>k>f(b)$), then there exists $c\\in I$ between $a$ and $b$ such that $f(c)=k$.`,
    intuition:`This generalizes the Location of Roots Theorem from "hits $0$" to "hits any target value $k$". The trick is to shift the whole problem: define $g(x):=f(x)-k$, and hitting the value $k$ for $f$ becomes hitting $0$ for $g$ — which is exactly the Location of Roots Theorem.`,
    needs:['c.5.3.5','c.5.1.1'],
    figs:['fig.ivt'],
    traps:[
      `Requires $f(a)$ and $k$ and $f(b)$ to be in strict order ($f(a)<k<f(b)$ or the reverse) — $k$ equal to an endpoint value is trivial, not the content of the theorem.`,
      `$I$ just needs to be an interval (any type — open, closed, unbounded); $a,b$ are just two points of $I$, not necessarily its endpoints.`,
      `Does not claim $c$ is unique.`,
      `Do not apply this with $f$ continuous only on part of $I$ — continuity must hold on (at least) the interval between $a$ and $b$.`
    ],
    proof:{
      idea:`Shift by $k$ so that "hits $k$" becomes "hits $0$", then invoke the Location of Roots Theorem directly.`,
      why:`Subtracting a constant does not affect continuity, so all the machinery of 5.3.5 carries over untouched.`,
      rungs:[
        { why:'Reduce "hits k" to "has a root" via a shift; handle a<b first (b<a is symmetric).', m:`Assume $a<b$ and $f(a)<k<f(b)$. Define $g(x):=f(x)-k$.` },
        { why:'Translate the hypothesis on $f$ into a sign change of $g$.', m:`$g(a)=f(a)-k<0$ and $g(b)=f(b)-k>0$.` },
        { why:'$g$ is still continuous, since it differs from $f$ only by a constant.', m:`$g$ is continuous on $I$ (difference of continuous $f$ and constant $k$).` },
        { why:'Now the Location of Roots Theorem applies directly to $g$.', m:`By Theorem 5.3.5, there exists $c\\in(a,b)$ with $g(c)=0$.` },
        { why:'Unwind the substitution to recover the statement about $f$.', m:`$g(c)=0 \\iff f(c)-k=0 \\iff f(c)=k$.` }
      ],
      ends:`So $f(c)=k$ for some $c$ between $a$ and $b$. If instead $b<a$, apply the same argument to $h(x):=k-f(x)$, which satisfies $h(b)<0<h(a)$, to get $c\\in(b,a)$ with $f(c)=k$.`
    },
    cards:[
      { q:'State the IVT, including exactly what is required of I, f, and k.', a:'I an interval, f continuous on I, a,b∈I with f(a)<k<f(b) (or reverse) ⇒ ∃c between a and b with f(c)=k.', kind:'state' },
      { q:'What substitution reduces the IVT to the Location of Roots Theorem?', a:'g(x):=f(x)-k; then g(a)<0<g(b), a root of g at c gives f(c)=k.', kind:'recall' },
      { q:'Does the IVT guarantee a unique c with f(c)=k?', a:'No — only existence of at least one such c.', kind:'trap' },
      { q:'f is continuous on [0,1]∪[2,3] (two separate pieces) with f(0)=-1 and f(3)=1. Can you conclude f(1.5)... wait, can you conclude some point has f=0 using the IVT as stated?', a:'Not directly — the IVT needs a,b to lie in the same interval I with continuity throughout between them; [0,1]∪[2,3] is not an interval, so the theorem does not directly apply across the gap.', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.8', bartle:'5.3.8', sec:'5.3', kind:'corollary', tier:'core',
    title:'Every Value Between inf f and sup f Is Attained',
    oneLine:'On a closed bounded interval, f hits every number sandwiched between its inf and its sup.',
    statement:`Let $I=[a,b]$ be closed and bounded and let $f:I\\to\\mathbb{R}$ be continuous on $I$. If $k\\in\\mathbb{R}$ satisfies $\\inf f(I)\\le k\\le \\sup f(I)$, then there exists $c\\in I$ such that $f(c)=k$.`,
    intuition:`Combine the last two theorems: Max–Min (5.3.4) tells you $\\inf f(I)$ and $\\sup f(I)$ are actually reached by $f$ at real points of $I$; IVT (5.3.7) then lets you travel between those two points and sweep through every value in between.`,
    needs:['c.5.3.4','c.5.3.7'],
    traps:[
      `Needs $I$ closed and bounded — that's what guarantees $\\inf f(I)$ and $\\sup f(I)$ are actually attained (not just bounds).`
    ],
    proof:{
      idea:`Realize inf and sup as actual function values via Max–Min, then bridge between those two points with IVT.`,
      rungs:[
        { why:'Need actual points attaining inf and sup, not just abstract bounds.', m:`By the Maximum–Minimum Theorem (5.3.4), there exist $c_{*},c^{*}\\in I$ with $f(c_{*})=\\inf f(I)$ and $f(c^{*})=\\sup f(I)$.` },
        { why:'Now $k$ sits between two actual, attained function values.', m:`$f(c_{*})\\le k\\le f(c^{*})$.` },
        { why:'Apply the Intermediate Value Theorem between these two specific points (in whichever order they occur).', m:`By Bolzano\'s IVT (5.3.7) applied between $c_{*}$ and $c^{*}$, there exists $c\\in I$ between them with $f(c)=k$.` }
      ],
      ends:`So c∈I satisfies f(c)=k, for any k between inf f(I) and sup f(I).`
    },
    cards:[
      { q:'Which two theorems does this corollary combine, and what does each contribute?', a:'Max–Min Theorem (5.3.4) gives points where inf/sup are actually attained; IVT (5.3.7) sweeps through every value between those two attained values.', kind:'recall' },
      { q:'State the corollary.', a:'If f is continuous on closed bounded [a,b] and inf f(I) ≤ k ≤ sup f(I), then f(c)=k for some c∈I.', kind:'state' }
    ]
  },

  {
    id:'c.5.3.9', bartle:'5.3.9', sec:'5.3', kind:'theorem', tier:'core',
    title:'Continuous Image of a Closed Bounded Interval',
    oneLine:'f(I) is exactly the closed bounded interval [inf f, sup f] — no gaps, no missing endpoints.',
    statement:`Let $I$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then $f(I):=\\{f(x):x\\in I\\}$ is a closed bounded interval, specifically $f(I)=[m,M]$ where $m:=\\inf f(I)$ and $M:=\\sup f(I)$.`,
    intuition:`This packages up the whole section: $f(I)$ is bounded (5.3.2), its extreme values $m,M$ are actually reached (5.3.4), and every value strictly between them is reached too (5.3.8, Bolzano's theorem). Put together, $f(I)$ is precisely the closed interval $[m,M]$ — nothing more, nothing less.`,
    needs:['c.5.3.4','c.5.3.8'],
    traps:[
      `<b>Warning (Bartle's own):</b> $f(I)=[m,M]$, but this is generally NOT the interval $[f(a),f(b)]$ — the endpoints of $f(I)$ need not be the images of the endpoints of $I$. E.g. a function dipping down and back up on $[a,b]$ can have $f(a),f(b)$ both well above $m=\\inf f(I)$.`
    ],
    proof:{
      idea:`Show both inclusions: $f(I)\\subseteq[m,M]$ is the easy direction (definition of sup/inf plus attainment); $[m,M]\\subseteq f(I)$ is the previous corollary.`,
      rungs:[
        { why:'Name the two extreme values of the range.', m:`Let $m:=\\inf f(I)$, $M:=\\sup f(I)$.` },
        { why:'Max–Min guarantees these extremes are actually elements of f(I), which immediately traps the whole range between them.', m:`By 5.3.4, $m,M\\in f(I)$, and by definition of inf/sup, $f(I)\\subseteq[m,M]$.` },
        { why:'Need the reverse inclusion — every value strictly between m and M (and m, M themselves) is hit by some point of I.', m:`For any $k\\in[m,M]$, Corollary 5.3.8 gives $c\\in I$ with $f(c)=k$, so $k\\in f(I)$; hence $[m,M]\\subseteq f(I)$.` },
        { why:'Combine both inclusions.', m:`$f(I)\\subseteq[m,M]$ and $[m,M]\\subseteq f(I)$ $\\Rightarrow$ $f(I)=[m,M]$.` }
      ],
      ends:`f(I) is exactly the closed bounded interval [m,M].`
    },
    cards:[
      { q:'What exactly is f(I) equal to, for f continuous on a closed bounded interval I?', a:'f(I) = [m,M] where m=inf f(I), M=sup f(I) — the closed interval between the actual minimum and maximum values.', kind:'state' },
      { q:'Is f(I) = [f(a),f(b)] for I=[a,b]? Why is this a trap?', a:'Not in general — f(I)=[m,M] where m,M are the actual min and max of f on I, which need not occur at the endpoints a,b.', kind:'trap' }
    ]
  },

  {
    id:'c.5.3.10', bartle:'5.3.10', sec:'5.3', kind:'theorem', tier:'core',
    title:'Preservation of Intervals Theorem',
    oneLine:'The continuous image of ANY interval is again an interval (though maybe a different type).',
    statement:`Let $I$ be an interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then the set $f(I)$ is an interval.`,
    intuition:`This extends Theorem 5.3.9 from closed bounded intervals to arbitrary intervals — but it only claims $f(I)$ is <i>some kind</i> of interval, not that it inherits the same shape as $I$. The proof uses the abstract characterization of intervals (a set is an interval exactly when it contains every point between any two of its points) and checks that property directly using Bolzano's IVT.`,
    needs:['c.2.5.1','c.5.3.7'],
    traps:[
      `Preservation is only of "being an interval" — NOT of open/closed/bounded type. The continuous image of an open interval need not be open: $f(x)=1/(x^2+1)$ sends $(-1,1)$ to $(\\tfrac12,1]$, which is not open.`,
      `The continuous image of an unbounded closed interval need not be closed: the same $f$ sends $[0,\\infty)$ to $(0,1]$, which is not closed.`,
      `Do not assume this theorem tells you the exact endpoints of $f(I)$ — only that $f(I)$ has no "gaps".`
    ],
    proof:{
      idea:`Use the abstract characterization of an interval — contains every point strictly between any two of its points — and verify it for $f(I)$ using Bolzano's IVT.`,
      why:`This sidesteps having to know the shape of $f(I)$ in advance; it only checks the one defining property of "being an interval".`,
      rungs:[
        { why:'Recall the tool for proving a set is an interval without knowing its shape.', m:`By the Characterization Theorem (2.5.1), $S\\subseteq\\mathbb{R}$ is an interval $\\iff$ whenever $\\alpha,\\beta\\in S$ with $\\alpha<\\gamma<\\beta$, then $\\gamma\\in S$.` },
        { why:'Take two arbitrary values already known to be in f(I).', m:`Let $\\alpha,\\beta\\in f(I)$ with $\\alpha<\\beta$; write $\\alpha=f(a)$, $\\beta=f(b)$ for some $a,b\\in I$.` },
        { why:'Pick an arbitrary target value strictly between them.', m:`Let $k\\in(\\alpha,\\beta)$.` },
        { why:'This is exactly the setup Bolzano\'s IVT needs.', m:`By Bolzano\'s IVT (5.3.7) applied to $f$ on $I$ between $a$ and $b$, there exists $c\\in I$ with $f(c)=k$.` },
        { why:'That c places k inside f(I), which is exactly the property we needed to check.', m:`$k=f(c)\\in f(I)$. Since $k$ was arbitrary in $(\\alpha,\\beta)$, $[\\alpha,\\beta]\\subseteq f(I)$.` }
      ],
      ends:`f(I) satisfies the characterizing property of 2.5.1, so f(I) is an interval.`
    },
    cards:[
      { q:'State the Preservation of Intervals Theorem.', a:'If I is an interval and f is continuous on I, then f(I) is an interval.', kind:'state' },
      { q:'Which theorem about intervals from Chapter 2 makes this proof possible without knowing f(I)\'s exact shape?', a:'The Characterization Theorem (2.5.1): a set is an interval iff it contains every point between any two of its points.', kind:'recall' },
      { q:'Give an example showing the continuous image of an open interval need not be open.', a:'f(x)=1/(x²+1) sends (-1,1) to (1/2,1], which is not open.', kind:'trap' },
      { q:'True or false: if I is a closed unbounded interval, f(I) must also be closed.', a:'False — f(x)=1/(x²+1) sends [0,∞) (closed) to (0,1], which is not closed.', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.1', bartle:'5.4.1', sec:'5.4', kind:'definition', tier:'core',
    title:'Uniform Continuity',
    oneLine:'One δ has to work everywhere on the set at once, not a different δ near each point.',
    statement:`Let $A\\subseteq\\mathbb{R}$ and $f:A\\to\\mathbb{R}$. We say $f$ is <b>uniformly continuous on $A$</b> if for every $\\varepsilon>0$ there exists $\\delta(\\varepsilon)>0$ — depending only on $\\varepsilon$, NOT on any particular point — such that for <i>all</i> $x,u\\in A$ satisfying $|x-u|<\\delta(\\varepsilon)$, we have $|f(x)-f(u)|<\\varepsilon$.
    <br><br>Compare with ordinary continuity at every point of $A$: $\\forall\\varepsilon>0,\\ \\forall u\\in A,\\ \\exists\\delta(\\varepsilon,u)>0$ such that $|x-u|<\\delta(\\varepsilon,u)\\Rightarrow|f(x)-f(u)|<\\varepsilon$.
    <br>Uniform continuity is: $\\forall\\varepsilon>0,\\ \\exists\\delta(\\varepsilon)>0,\\ \\forall x,u\\in A$ with $|x-u|<\\delta(\\varepsilon)$: $|f(x)-f(u)|<\\varepsilon$.`,
    intuition:`The entire difference from ordinary continuity is a swap in quantifier order. Pointwise continuity lets $\\delta$ chase the point: you're allowed to pick $u$ first, then hunt for a $\\delta$ that works just near $u$ — different points can demand wildly different $\\delta$'s. Uniform continuity flips this: you must commit to $\\delta$ right after $\\varepsilon$, <i>before</i> you know which pair of points $x,u$ you'll be asked about — and that same $\\delta$ then has to survive every pair in $A$ simultaneously. It is a statement about the whole set at once, exactly parallel to how "bounded on A" (5.3.1) is a whole-set statement rather than a pointwise one.`,
    needs:['c.5.1.1','c.5.1.2','s.quantifier'],
    figs:['fig.unif'],
    traps:[
      `<b>The quantifier order is everything.</b> Writing "$\\forall x,u\\in A\\ \\exists\\delta$..." instead of "$\\exists\\delta\\ \\forall x,u\\in A$..." silently turns this back into ordinary pointwise continuity — a completely different (weaker) statement.`,
      `Uniform continuity $\\Rightarrow$ continuity always, but NOT conversely: $g(x)=1/x$ on $(0,\\infty)$ is continuous at every point but not uniformly continuous (no single $\\delta$ works as $u\\to 0$, since $g$ gets arbitrarily steep near $0$).`,
      `Uniform continuity is a property relative to a SET, not a single point — it makes no sense to ask "is f uniformly continuous at $x=3$?"`
    ],
    cards:[
      { q:'Write the full quantifier statement for "f is uniformly continuous on A".', a:'∀ε>0 ∃δ(ε)>0 such that ∀x,u∈A: |x-u|<δ(ε) ⇒ |f(x)-f(u)|<ε.', kind:'state' },
      { q:'What is the ONE quantifier-order difference between this and ordinary pointwise continuity on A?', a:'δ must be chosen (depending only on ε) BEFORE the points x,u are named — the same δ then has to work for every pair in A. Pointwise continuity lets δ depend on u as well as ε.', kind:'recall' },
      { q:'Show δ(ε)=ε/2 works uniformly for f(x)=2x on ℝ.', a:'|f(x)-f(u)|=2|x-u|<2δ=ε whenever |x-u|<δ:=ε/2 — this δ depends only on ε, not on u, so f is uniformly continuous on ℝ.', kind:'apply' },
      { q:'A student writes the definition as "∀x,u∈A ∃δ>0 such that |x-u|<δ ⇒ |f(x)-f(u)|<ε for all ε>0". What is wrong?', a:'The quantifiers are in the wrong order (and ε is quantified last) — this lets δ depend on the specific points x,u, which is exactly ordinary continuity, not uniform continuity.', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.2', bartle:'5.4.2', sec:'5.4', kind:'theorem', tier:'core',
    title:'Nonuniform Continuity Criteria',
    oneLine:'Three equivalent ways to say "no single δ works" — the sequence version is the one you actually use.',
    statement:`Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$. The following are equivalent:
    <br>(i) $f$ is <b>not</b> uniformly continuous on $A$.
    <br>(ii) There exists $\\varepsilon_0>0$ such that for every $\\delta>0$ there are points $x_\\delta,u_\\delta\\in A$ with $|x_\\delta-u_\\delta|<\\delta$ and $|f(x_\\delta)-f(u_\\delta)|\\ge\\varepsilon_0$.
    <br>(iii) There exists $\\varepsilon_0>0$ and two sequences $(x_n),(u_n)$ in $A$ such that $\\lim(x_n-u_n)=0$ but $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$ for all $n\\in\\mathbb{N}$.`,
    intuition:`(ii) is nothing but the direct logical negation of the $\\varepsilon$–$\\delta$ definition, flipping each quantifier. (iii) repackages that negation with sequences — feed in $\\delta=1/n$ for each $n$ — which is usually far easier to use in practice: exhibit two explicit sequences that get arbitrarily close together while their images stay a fixed distance apart.`,
    needs:['c.5.4.1','s.quantifier','s.contradiction'],
    traps:[
      `You need ONE $\\varepsilon_0$ that works for ALL $\\delta$ (or for the sequence version, for all $n$) — not just "f changes a lot somewhere for some small δ".`,
      `In (iii), $(x_n-u_n)\\to 0$ is required — you cannot use two sequences that both wander independently.`
    ],
    proof:{
      idea:`(i)⟺(ii) is the definition negated term by term. (ii)⟺(iii) just re-indexes "for every δ" as "for δ=1/n".`,
      rungs:[
        { why:'Negate the ε–δ definition of uniform continuity directly, flipping each quantifier in turn.', m:`$\\lnot[\\forall\\varepsilon>0\\ \\exists\\delta>0\\ \\forall x,u\\in A(|x-u|<\\delta\\Rightarrow|f(x)-f(u)|<\\varepsilon)]$ becomes $\\exists\\varepsilon_0>0\\ \\forall\\delta>0\\ \\exists x,u\\in A(|x-u|<\\delta \\wedge |f(x)-f(u)|\\ge\\varepsilon_0)$ — this is exactly (ii).` },
        { why:'So (i) and (ii) are the same statement, just one written as "not uniformly continuous" and the other spelled out.', m:`(i) $\\iff$ (ii) by pure logical negation.` },
        { why:'To pass from (ii) to (iii), turn "for every δ" into "for δ = 1/n, one n at a time".', m:`Apply (ii) with $\\delta=1/n$ for each $n\\in\\mathbb{N}$ to get $x_n,u_n\\in A$ with $|x_n-u_n|<1/n$ and $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$.` },
        { why:'These witnesses automatically satisfy the sequence condition, since 1/n squeezes to 0.', m:`$0\\le|x_n-u_n|<1/n\\to 0$, so by the Squeeze Theorem $\\lim(x_n-u_n)=0$, while $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$ for every $n$ — this is (iii).` },
        { why:'For the converse (iii)⇒(ii), turn the sequence witnesses back into a "works for every δ" statement.', m:`Given $\\delta>0$: since $x_n-u_n\\to 0$, there is $N$ with $|x_N-u_N|<\\delta$; take $x_\\delta:=x_N,\\ u_\\delta:=u_N$, which still satisfies $|f(x_\\delta)-f(u_\\delta)|\\ge\\varepsilon_0$.` }
      ],
      ends:`(i), (ii), (iii) are logically equivalent. (iii) is the most useful in practice: to show f is NOT uniformly continuous, just exhibit two explicit sequences with inputs merging but outputs staying apart.`
    },
    cards:[
      { q:'State the sequence form (iii) of the Nonuniform Continuity Criterion.', a:'∃ε₀>0 and sequences (xₙ),(uₙ) in A with lim(xₙ-uₙ)=0 but |f(xₙ)-f(uₙ)|≥ε₀ for all n.', kind:'state' },
      { q:'Use the sequence criterion to show g(x)=1/x is not uniformly continuous on (0,∞).', a:'Take xₙ=1/n, uₙ=1/(n+1): xₙ-uₙ→0, but |g(xₙ)-g(uₙ)|=|n-(n+1)|=1≥ε₀:=1 for every n.', kind:'apply' },
      { q:'Why is criterion (iii) usually easier to apply than (ii)?', a:'It only requires exhibiting two concrete sequences once, rather than producing witness points xδ,uδ for every δ>0 separately.', kind:'recall' },
      { q:'A student picks xₙ=n, uₙ=n+1/n to try to show f(x)=x² is not uniformly continuous on [0,∞). Do they need xₙ-uₙ→0? What if instead they only show |f(xₙ)-f(uₙ)| stays large?', a:'They need BOTH: (xₙ-uₙ)→0 AND |f(xₙ)-f(uₙ)|≥ε₀ for a fixed ε₀. Here xₙ-uₙ=-1/n→0 works, and f(xₙ)-f(uₙ)=n²-(n+1/n)²=-2-1/n²→-2, so |·|≥1 eventually — both conditions needed together, missing either one proves nothing.', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.3', bartle:'5.4.3', sec:'5.4', kind:'theorem', tier:'core',
    title:'Uniform Continuity Theorem',
    oneLine:'Continuous on a closed bounded interval ⇒ automatically uniformly continuous there.',
    statement:`Let $I$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then $f$ is uniformly continuous on $I$.`,
    intuition:`This is the payoff of the whole compactness toolkit applied to uniform continuity. Suppose, for contradiction, $f$ fails to be uniformly continuous; the sequence form of the Nonuniform Continuity Criterion hands you two sequences whose inputs merge together but whose outputs stay a fixed distance $\\varepsilon_0$ apart. Bolzano–Weierstrass pulls a convergent subsequence out of the bounded interval; because the two sequences merge, the companion subsequence converges to the very same point; continuity at that common point then forces BOTH image subsequences toward the same value — directly contradicting the fixed gap $\\varepsilon_0$.`,
    needs:['c.5.4.2','c.3.4.8','c.3.2.6','c.5.1.1','s.contradiction'],
    figs:['fig.heine'],
    traps:[
      `Needs BOTH closed and bounded, exactly like the Boundedness Theorem. $g(x)=1/x$ is continuous on $(0,1]$ (bounded, not closed) but NOT uniformly continuous there.`,
      `$f(x)=x^2$ is continuous on $[0,\\infty)$ (closed, not bounded) but NOT uniformly continuous there.`,
      `Continuity on an OPEN bounded interval is not enough either: $f(x)=1/x$ on $(0,1)$ is continuous but not uniformly continuous.`,
      `This theorem gives a SUFFICIENT condition for uniform continuity, not a necessary one — some functions on non-compact sets are still uniformly continuous (e.g. Lipschitz functions, 5.4.5).`
    ],
    proof:{
      idea:`Assume $f$ fails to be uniformly continuous on the closed bounded interval $I$. The sequence criterion (5.4.2) hands you two sequences whose inputs get arbitrarily close while outputs stay $\\varepsilon_0$ apart. Bolzano–Weierstrass extracts a convergent subsequence; since inputs merge, the companion sequence converges to the same limit; continuity there then forces both image subsequences to the same value — contradicting the fixed gap.`,
      why:`Exactly the same "sequence hunts the failure, compactness tames it, continuity delivers the contradiction" pattern as the Boundedness Theorem, now aimed at uniform continuity instead of boundedness.`,
      rungs:[
        { why:'Proof by contradiction: assume the theorem fails.', m:`Suppose $f$ is not uniformly continuous on $I$.` },
        { why:'Unpack that failure with the sequence form of the Nonuniform Continuity Criterion.', m:`By 5.4.2(iii), there exist $\\varepsilon_0>0$ and sequences $(x_n),(u_n)$ in $I$ with $|x_n-u_n|<1/n$ and $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$ for all $n$.` },
        { why:'I is bounded, so extract a convergent subsequence — the usual compactness tool.', m:`$(x_n)$ bounded $\\Rightarrow$ by Bolzano–Weierstrass (3.4.8), a subsequence $(x_{n_k})\\to z$.` },
        { why:'I is closed, so the limit stays inside I.', m:`$I$ closed $\\Rightarrow$ $z\\in I$ (Theorem 3.2.6).` },
        { why:'Since the inputs were merging, the companion subsequence is dragged to the same limit.', m:`$|u_{n_k}-z|\\le|u_{n_k}-x_{n_k}|+|x_{n_k}-z|\\to 0$, so $u_{n_k}\\to z$ as well.` },
        { why:'Continuity at z pulls BOTH image subsequences toward f(z), closing the gap.', m:`$f$ continuous at $z$ $\\Rightarrow$ $f(x_{n_k})\\to f(z)$ and $f(u_{n_k})\\to f(z)$, so $f(x_{n_k})-f(u_{n_k})\\to 0$.` },
        { why:'But this directly contradicts the fixed ε₀ gap we started with.', m:`Yet $|f(x_{n_k})-f(u_{n_k})|\\ge\\varepsilon_0>0$ for every $k$ — impossible if the left side $\\to 0$.` }
      ],
      ends:`Contradiction — so f must be uniformly continuous on the closed bounded interval I.`
    },
    cards:[
      { q:'State the Uniform Continuity Theorem, including both interval hypotheses.', a:'If I is a closed bounded interval and f:I→ℝ is continuous on I, then f is uniformly continuous on I.', kind:'state' },
      { q:'Which two ingredients from earlier chapters combine to drive this proof?', a:'The sequence form of the Nonuniform Continuity Criterion (5.4.2) to unpack a supposed failure, and the Bolzano–Weierstrass Theorem (3.4.8) to extract a convergent subsequence from the bounded interval.', kind:'recall' },
      { q:'Explain exactly where "closed" and where "bounded" are each used in the proof.', a:'Bounded gives a convergent subsequence via Bolzano–Weierstrass; closed keeps that limit point z inside I so continuity of f at z can be invoked.', kind:'trap' },
      { q:'Is f(x)=1/x uniformly continuous on (0,1]? Which hypothesis of the theorem fails?', a:'No. (0,1] is bounded but not closed, so the theorem does not apply — and indeed f is not uniformly continuous there.', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.4', bartle:'5.4.4', sec:'5.4', kind:'definition', tier:'core',
    title:'Lipschitz Function',
    oneLine:'All secant-line slopes on the graph are bounded by one fixed number K.',
    statement:`Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$. If there is a constant $K>0$ such that $|f(x)-f(u)|\\le K|x-u|$ for all $x,u\\in A$, then $f$ is called a <b>Lipschitz function</b> (or is said to satisfy a Lipschitz condition) on $A$.`,
    intuition:`Rewriting the condition as $\\left|\\dfrac{f(x)-f(u)}{x-u}\\right|\\le K$ for $x\\ne u$ shows the quantity being bounded is exactly the slope of the secant line joining $(x,f(x))$ and $(u,f(u))$. So $f$ is Lipschitz precisely when every secant slope on its graph over $A$ is capped by one fixed number $K$ — the graph can never be "infinitely steep" anywhere.`,
    needs:['c.5.4.1','s.abs-ineq'],
    traps:[
      `Lipschitz on $A$ implies uniformly continuous on $A$ (5.4.5), but NOT conversely: $\\sqrt{x}$ is uniformly continuous on $[0,2]$ but not Lipschitz there (slopes near $0$ are unbounded).`,
      `The constant $K$ must be uniform over the whole set $A$ — a function can be Lipschitz on one subset and fail on a larger one (e.g. $x^2$ is Lipschitz on $[0,b]$ for any fixed $b$, but not on $[0,\\infty)$).`
    ],
    cards:[
      { q:'State the Lipschitz condition.', a:'∃K>0 such that |f(x)-f(u)|≤K|x-u| for all x,u∈A.', kind:'state' },
      { q:'Geometric meaning of the Lipschitz condition?', a:'Every secant line joining two points on the graph of f over A has slope bounded in absolute value by K.', kind:'recall' },
      { q:'Is √x Lipschitz on [0,2]?', a:'No — the slopes (f(x)-f(0))/(x-0)=1/√x blow up as x→0⁺, so no single K bounds them all.', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.5', bartle:'5.4.5', sec:'5.4', kind:'theorem', tier:'core',
    title:'Lipschitz ⇒ Uniformly Continuous',
    oneLine:'A single formula δ=ε/K instantly gives uniform continuity for any Lipschitz function.',
    statement:`If $f:A\\to\\mathbb{R}$ is a Lipschitz function, then $f$ is uniformly continuous on $A$.`,
    intuition:`This is the easiest route to uniform continuity when it applies: no compactness, no sequences, no Bolzano–Weierstrass — just one algebraic choice of $\\delta$ in terms of $\\varepsilon$ and the Lipschitz constant $K$, and it automatically works everywhere on $A$ at once.`,
    needs:['c.5.4.4','c.5.4.1'],
    traps:[
      `This is a ONE-WAY implication — being Lipschitz is sufficient but not necessary for uniform continuity (see 5.4.6(b): $\\sqrt{x}$).`
    ],
    proof:{
      idea:`Try the simplest possible formula for δ in terms of ε and K, and check it works.`,
      rungs:[
        { why:'Aim to produce one δ, depending only on ε, that works everywhere at once — try the natural formula suggested by the Lipschitz inequality.', m:`Given $\\varepsilon>0$, set $\\delta:=\\varepsilon/K$.` },
        { why:'Start from the hypothesis that x,u are δ-close.', m:`Suppose $x,u\\in A$ with $|x-u|<\\delta=\\varepsilon/K$.` },
        { why:'Plug directly into the Lipschitz bound.', m:`$|f(x)-f(u)|\\le K|x-u|<K\\cdot\\dfrac{\\varepsilon}{K}=\\varepsilon$.` }
      ],
      ends:`The same δ=ε/K works for every pair x,u in A — it depends only on ε, never on the points themselves — so f is uniformly continuous on A.`
    },
    cards:[
      { q:'State the theorem and the δ used in its proof.', a:'Lipschitz f ⇒ uniformly continuous, using δ:=ε/K.', kind:'state' },
      { q:'Why does δ=ε/K not depend on which points x,u you are checking?', a:'The Lipschitz constant K is a single fixed number valid over all of A, so ε/K is computed purely from ε and K — no reference to a particular point.', kind:'recall' },
      { q:'Is the converse of this theorem true — does uniform continuity imply Lipschitz?', a:'No — √x is uniformly continuous on [0,2] but not Lipschitz there (5.4.6(b)).', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.6', bartle:'5.4.6', sec:'5.4', kind:'example', tier:'core',
    title:'Lipschitz vs Merely Uniformly Continuous',
    oneLine:'x² is Lipschitz on bounded intervals; √x is uniformly continuous but never Lipschitz near 0; patching pieces can still work.',
    statement:`(a) $f(x):=x^2$ on $A:=[0,b]$: $|f(x)-f(u)|=|x+u||x-u|\\le 2b|x-u|$, so $f$ satisfies the Lipschitz condition with $K:=2b$, hence uniformly continuous (also follows from the Uniform Continuity Theorem, since $[0,b]$ is closed and bounded). $f$ is NOT Lipschitz on the unbounded $[0,\\infty)$.
    <br>(b) $g(x):=\\sqrt{x}$ on $I:=[0,2]$ is uniformly continuous by the Uniform Continuity Theorem (5.4.3), but there is no $K$ with $|g(x)|\\le K|x|$ for all $x\\in I$ — so $g$ is uniformly continuous without being Lipschitz.
    <br>(c) Patch together the Uniform Continuity Theorem and Theorem 5.4.5: $g(x)=\\sqrt{x}$ on $A:=[0,\\infty)$. On $I:=[0,2]$, $g$ is uniformly continuous by 5.4.3. On $J:=[1,\\infty)$, $|g(x)-g(u)|=\\dfrac{|x-u|}{\\sqrt{x}+\\sqrt{u}}\\le\\tfrac12|x-u|$, so $g$ is Lipschitz on $J$ with $K=\\tfrac12$, hence uniformly continuous on $J$ by 5.4.5. Since $A=I\\cup J$, taking $\\delta(\\varepsilon):=\\min\\{1,\\delta_I(\\varepsilon),\\delta_J(\\varepsilon)\\}$ shows $g$ is uniformly continuous on all of $A$.`,
    intuition:`(a)/(b) show Lipschitz is strictly stronger than uniform continuity — it's a convenient sufficient test, not a characterization. (c) shows a useful technique: when neither the Uniform Continuity Theorem nor the Lipschitz test covers the WHOLE domain by itself, split the domain into finitely many overlapping pieces, get a δ on each piece separately, then take the minimum of that finite list of δ's (plus the overlap width) to get one δ that works on the union.`,
    needs:['c.5.4.3','c.5.4.5','c.5.4.4'],
    traps:[
      `The patching trick in (c) only works for FINITELY many pieces — taking an infimum over infinitely many δ's can collapse to 0 (exactly why $1/x$ fails uniform continuity on $(0,\\infty)$: the pieces $[1/n,\\infty)$ would need infinitely many δ's).`,
      `In (c), the overlap between the pieces (here $I\\cap J=[1,2]$ is nonempty) is what lets you glue the two δ's together via a minimum; make sure the pieces actually cover A and interlock.`
    ],
    cards:[
      { q:'What is the Lipschitz constant for x² on [0,b]?', a:'K=2b, from |f(x)-f(u)|=|x+u||x-u|≤2b|x-u| for x,u∈[0,b].', kind:'apply' },
      { q:'Why is √x not Lipschitz on [0,2] despite being uniformly continuous there?', a:'No K bounds |g(x)-g(0)|/|x-0| = 1/√x as x→0⁺ — the secant slopes near 0 are unbounded.', kind:'trap' },
      { q:'Sketch the patching technique used to show √x is uniformly continuous on [0,∞).', a:'Split into I=[0,2] (use Uniform Continuity Theorem, closed bounded) and J=[1,∞) (use Lipschitz test, K=1/2); since I∪J=[0,∞) with overlap, take δ:=min of the finitely many δ\'s (with a cap like 1) to get one δ working on the whole domain.', kind:'recall' }
    ]
  },

  {
    id:'c.5.4.7', bartle:'5.4.7', sec:'5.4', kind:'theorem', tier:'core',
    title:'Uniform Continuity Preserves Cauchy Sequences',
    oneLine:'Feed a uniformly continuous function a Cauchy sequence, and the outputs stay Cauchy too.',
    statement:`If $f:A\\to\\mathbb{R}$ is uniformly continuous on $A\\subseteq\\mathbb{R}$ and $(x_n)$ is a Cauchy sequence in $A$, then $(f(x_n))$ is a Cauchy sequence in $\\mathbb{R}$.`,
    intuition:`Uniform continuity gives one $\\delta$ that keeps outputs $\\varepsilon$-close whenever inputs are $\\delta$-close, and crucially this $\\delta$ doesn't care where in $A$ the points sit. Cauchy-ness of $(x_n)$ eventually forces the terms of the sequence within $\\delta$ of each other; uniform continuity then forces the images within $\\varepsilon$ of each other — exactly the Cauchy condition for $(f(x_n))$.`,
    needs:['c.5.4.1','c.3.5.1'],
    traps:[
      `This FAILS for functions that are merely continuous (not uniformly continuous): $f(x)=1/x$ on $(0,1)$ sends the Cauchy sequence $(1/n)$ to $(n)$, which is not Cauchy. This gives a useful contrapositive test for non-uniform-continuity.`,
      `The conclusion is about $(f(x_n))$ being Cauchy in $\\mathbb{R}$, not necessarily convergent within $A$ — the limit of $(f(x_n))$ need not lie in $f(A)$ if $A$ is not closed.`
    ],
    proof:{
      idea:`Chase the definitions: uniform continuity gives one δ controlling closeness of outputs from closeness of inputs; Cauchy-ness of the input sequence eventually delivers inputs that close, δ-close.`,
      rungs:[
        { why:'Set up the goal: show outputs eventually get and stay ε-close.', m:`Let $(x_n)$ be Cauchy in $A$; fix $\\varepsilon>0$.` },
        { why:'Uniform continuity supplies one δ, valid everywhere on A, controlling output-closeness from input-closeness.', m:`By uniform continuity, choose $\\delta>0$ such that $x,u\\in A,\\ |x-u|<\\delta \\Rightarrow |f(x)-f(u)|<\\varepsilon$.` },
        { why:'Cauchy-ness of (xₙ) lets us force inputs within that δ of each other for large indices.', m:`Since $(x_n)$ is Cauchy, there is $H(\\delta)$ such that $|x_n-x_m|<\\delta$ for all $n,m>H(\\delta)$.` },
        { why:'Chain the two facts: past that index, inputs are δ-close, so outputs are ε-close.', m:`For $n,m>H(\\delta)$: $|x_n-x_m|<\\delta \\Rightarrow |f(x_n)-f(x_m)|<\\varepsilon$.` }
      ],
      ends:`This is exactly the Cauchy condition for (f(xₙ)), so (f(xₙ)) is Cauchy.`
    },
    cards:[
      { q:'State the theorem.', a:'If f is uniformly continuous on A and (xₙ) is Cauchy in A, then (f(xₙ)) is Cauchy in ℝ.', kind:'state' },
      { q:'Use this theorem (contrapositive) to show f(x)=1/x is not uniformly continuous on (0,1).', a:'(1/n) is Cauchy in (0,1), but f(1/n)=n is not Cauchy — so f cannot be uniformly continuous on (0,1).', kind:'apply' },
      { q:'Does this theorem hold if f is only continuous (not uniformly continuous) on A?', a:'No — it genuinely needs uniform continuity; 1/x on (0,1) is a continuous counterexample where it fails.', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.8', bartle:'5.4.8', sec:'5.4', kind:'theorem', tier:'core',
    title:'Continuous Extension Theorem',
    oneLine:'f is uniformly continuous on (a,b) exactly when it can be patched at both ends into something continuous on [a,b].',
    statement:`A function $f$ is uniformly continuous on the open interval $(a,b)$ if and only if it can be defined at the endpoints $a$ and $b$ so that the extended function is continuous on $[a,b]$.`,
    intuition:`Uniform continuity turns out to be exactly the strength needed to guarantee the boundary limits $\\lim_{x\\to a^+}f(x)$ and $\\lim_{x\\to b^-}f(x)$ exist at all — via "uniform continuity sends Cauchy sequences to Cauchy sequences" (5.4.7) plus the Cauchy Criterion for convergence. Once those limits exist, just define $f$ at the endpoints to equal them, and continuity on the closed interval follows for free. This is why it reveals the real strength of uniform continuity: it is precisely the condition under which "the graph doesn't misbehave as you approach the ends" holds.`,
    needs:['c.5.4.7','c.3.5.5','c.5.4.3','c.4.1.8','c.5.1.3'],
    traps:[
      `$\\sin(1/x)$ on $(0,b]$: the limit as $x\\to0^+$ does not exist, so by this theorem $\\sin(1/x)$ is NOT uniformly continuous on $(0,b]$ for any $b>0$ — despite being perfectly continuous there.`,
      `Contrast: $x\\sin(1/x)$ on $(0,b]$ DOES have a limit ($=0$) as $x\\to0^+$, so it IS uniformly continuous on $(0,b]$.`,
      `The "trivial" direction ($\\Leftarrow$) still needs the Uniform Continuity Theorem (5.4.3): continuity on the closed $[a,b]$ gives uniform continuity there, which restricts to uniform continuity on the subset $(a,b)$.`
    ],
    proof:{
      idea:`(⇐) is immediate from the Uniform Continuity Theorem. (⇒) is the real content: uniform continuity forces Cauchy sequences approaching an endpoint to have Cauchy (hence convergent) images, and forces every such approaching sequence to give the SAME limit — which is exactly the sequential criterion for a genuine limit to exist at that endpoint.`,
      rungs:[
        { why:'Dispose of the easy direction first.', m:`($\\Leftarrow$) If $f$ extends to a function continuous on $[a,b]$, then by the Uniform Continuity Theorem (5.4.3), $f$ is uniformly continuous on the closed bounded $[a,b]$, hence uniformly continuous on the subset $(a,b)$.` },
        { why:'Now the real content: show the limit at a exists at all. Start with one approaching sequence.', m:`($\\Rightarrow$) Suppose $f$ is uniformly continuous on $(a,b)$. Fix any sequence $(x_n)$ in $(a,b)$ with $x_n\\to a$.` },
        { why:'Convergent sequences are Cauchy, and uniform continuity preserves Cauchy-ness of the images.', m:`$(x_n)$ convergent $\\Rightarrow$ Cauchy, so by Theorem 5.4.7, $(f(x_n))$ is Cauchy, hence convergent by the Cauchy Convergence Criterion (3.5.5); call its limit $L$.` },
        { why:'Need the SAME L for every approaching sequence, or "the limit at a" is not even well-defined.', m:`Let $(u_n)$ be any other sequence in $(a,b)$ with $u_n\\to a$.` },
        { why:'Compare the two sequences by looking at their difference, which shrinks to 0.', m:`$\\lim(u_n-x_n)=a-a=0$.` },
        { why:'Uniform continuity converts "inputs merging" into "outputs merging", applied here to the difference sequence.', m:`Since $u_n-x_n\\to 0$, uniform continuity gives $\\lim\\big(f(u_n)-f(x_n)\\big)=0$ (eventually $|u_n-x_n|<\\delta \\Rightarrow |f(u_n)-f(x_n)|<\\varepsilon$).` },
        { why:'Combine to show the second sequence gives the same limit L.', m:`$\\lim f(u_n)=\\lim\\big[f(u_n)-f(x_n)\\big]+\\lim f(x_n)=0+L=L$.` },
        { why:'Same limit for every approaching sequence is exactly the sequential criterion for a limit to exist.', m:`By the Sequential Criterion for limits (4.1.8), $\\lim_{x\\to a^+}f(x)=L$ exists. Define $f(a):=L$; the same argument gives a limit at $b$, define $f(b)$ likewise.` }
      ],
      ends:`Defining f(a) and f(b) to be these limits makes f continuous at both endpoints (by the Sequential Criterion for Continuity, 5.1.3), hence continuous on all of [a,b]. Combined with (⇐), this is the full biconditional.`
    },
    cards:[
      { q:'State the Continuous Extension Theorem.', a:'f is uniformly continuous on (a,b) iff f can be defined at a and b so the extension is continuous on [a,b].', kind:'state' },
      { q:'Which theorem guarantees (f(xₙ)) converges once you know it is Cauchy?', a:'The Cauchy Convergence Criterion (3.5.5): a sequence of reals converges iff it is Cauchy.', kind:'recall' },
      { q:'Is sin(1/x) uniformly continuous on (0,b] for any b>0? Justify via this theorem.', a:'No — lim_{x→0+} sin(1/x) does not exist, so by the Continuous Extension Theorem sin(1/x) cannot be uniformly continuous on (0,b].', kind:'apply' },
      { q:'A student says "f is continuous on (a,b), so it must be uniformly continuous there." What hypothesis are they missing, and how does this theorem clarify it?', a:'Mere continuity is not enough; this theorem shows uniform continuity on (a,b) is equivalent to the existence of proper limits at BOTH endpoints — which can fail even for continuous f, e.g. sin(1/x).', kind:'trap' }
    ]
  },

  {
    id:'c.5.4.9', bartle:'5.4.9', sec:'5.4', kind:'definition', tier:'ext',
    title:'Step Function',
    oneLine:'A function built from finitely many flat pieces, like a staircase.',
    statement:`A function $s:[a,b]\\to\\mathbb{R}$ is a <b>step function</b> if $[a,b]$ is a union of finitely many nonoverlapping intervals $I_1,\\ldots,I_n$ such that $s$ is constant on each $I_k$, i.e. $s(x)=c_k$ for $x\\in I_k$.`,
    intuition:`A step function has only finitely many distinct output values — its graph looks like a staircase. Step functions are the crudest possible building block for approximating a continuous function, but they are enough to approximate arbitrarily well (Theorem 5.4.10), because uniform continuity lets you make each "step" as narrow as you like.`,
    needs:['c.5.4.1'],
    traps:[
      `A step function has only finitely many distinct values — do not confuse it with a general piecewise-defined function.`,
      `Step functions are (generically) discontinuous at the joins between steps.`
    ],
    cards:[
      { q:'Define a step function.', a:'s:[a,b]→ℝ is a step function if [a,b] splits into finitely many nonoverlapping intervals on each of which s is constant.', kind:'state' },
      { q:'Are step functions generally continuous?', a:'No — they generally jump at the boundaries between the constant pieces.', kind:'recall' }
    ]
  },

  {
    id:'c.5.4.10', bartle:'5.4.10', sec:'5.4', kind:'theorem', tier:'ext',
    title:'Approximation by Step Functions',
    oneLine:'Any continuous function on a closed bounded interval can be matched to within ε by a step function.',
    statement:`Let $I$ be a closed bounded interval and $f:I\\to\\mathbb{R}$ continuous on $I$. For every $\\varepsilon>0$ there is a step function $s_\\varepsilon:I\\to\\mathbb{R}$ such that $|f(x)-s_\\varepsilon(x)|<\\varepsilon$ for all $x\\in I$.`,
    intuition:`Uniform continuity (5.4.3, since $I$ is closed and bounded) gives a single $\\delta$ that keeps $f$'s values within $\\varepsilon$ of each other whenever inputs are within $\\delta$. Chop $I$ into pieces narrower than $\\delta$; on each tiny piece, replace $f$ by a single constant value — since the piece is narrower than $\\delta$, that constant can never be off by more than $\\varepsilon$.`,
    needs:['c.5.4.3','c.5.4.9'],
    traps:[
      `This requires I closed and bounded — that's exactly what makes uniform continuity of f automatic via 5.4.3.`
    ],
    proof:{
      idea:`Uniform continuity gives one mesh size δ that works across the whole interval; make the partition finer than δ, and replace f by its value at one anchor point per piece.`,
      rungs:[
        { why:'Uniform continuity is exactly what lets us use one mesh size across the whole interval.', m:`By the Uniform Continuity Theorem (5.4.3), given $\\varepsilon>0$ there is $\\delta(\\varepsilon)>0$ with $x,y\\in I,\\ |x-y|<\\delta(\\varepsilon)\\Rightarrow|f(x)-f(y)|<\\varepsilon$.` },
        { why:'Chop [a,b] into pieces smaller than δ, so f barely moves within each piece.', m:`Choose $m\\in\\mathbb{N}$ with $h:=(b-a)/m<\\delta(\\varepsilon)$; partition $I$ into $m$ subintervals $I_1,\\ldots,I_m$ of length $h$.` },
        { why:'On each tiny piece, replace f by one constant — its value at the right endpoint, which is within h<δ of every point of that piece.', m:`Define $s_\\varepsilon(x):=f(a+kh)$ for $x\\in I_k$, $k=1,\\ldots,m$.` },
        { why:'Check the error directly using the uniform continuity guarantee.', m:`For $x\\in I_k$: $|x-(a+kh)|\\le h<\\delta(\\varepsilon) \\Rightarrow |f(x)-s_\\varepsilon(x)|=|f(x)-f(a+kh)|<\\varepsilon$.` }
      ],
      ends:`So sε is a step function on I with |f(x)-sε(x)|<ε for every x∈I.`
    },
    cards:[
      { q:'What property of f is the whole construction built on?', a:'Uniform continuity of f on the closed bounded interval I (guaranteed by 5.4.3), which supplies one δ valid for the whole interval.', kind:'recall' },
      { q:'In the construction, what value is assigned to sε on each subinterval Iₖ?', a:'f(a+kh), the value of f at the right endpoint of that subinterval.', kind:'state' }
    ]
  },

  {
    id:'c.5.4.11', bartle:'5.4.11', sec:'5.4', kind:'corollary', tier:'ext',
    title:'Explicit Mesh Size for Step-Function Approximation',
    oneLine:'The proof of 5.4.10 actually pins down how fine the partition needs to be.',
    statement:`Let $I:=[a,b]$ be closed and bounded, $f:I\\to\\mathbb{R}$ continuous. If $\\varepsilon>0$, there is $m\\in\\mathbb{N}$ such that dividing $I$ into $m$ disjoint intervals of length $h:=(b-a)/m$ and defining $s_\\varepsilon$ as in the construction of 5.4.10 gives $|f(x)-s_\\varepsilon(x)|<\\varepsilon$ for all $x\\in I$.`,
    intuition:`This just makes explicit what the proof of Theorem 5.4.10 already established: not only does a good step function exist, but you know exactly how to build it — pick any $m$ large enough that $h=(b-a)/m<\\delta(\\varepsilon)$.`,
    needs:['c.5.4.10'],
    traps:[
      `The bound on m depends on δ(ε), which itself depends on how "wiggly" f is — there's no universal formula for m purely from ε without knowing f.`
    ],
    proof: {
      idea: 'Apply uniform continuity directly to partitions whose subinterval length is smaller than $\\delta(\\varepsilon)$.',
      why: 'If the step size $h = (b-a)/m < \\delta(\\varepsilon)$, every point in subinterval $I_k$ is within $\\delta(\\varepsilon)$ of the base point $a + (k-1)h$.',
      rungs: [
        { why: 'By Theorem 5.4.3, $f$ is uniformly continuous on $[a, b]$, giving $\\delta(\\varepsilon) > 0$ such that $|x - y| < \\delta(\\varepsilon) \\implies |f(x) - f(y)| < \\varepsilon$.', m: '\\forall x, y \\in [a, b],\\, |x - y| < \\delta(\\varepsilon) \\implies |f(x) - f(y)| < \\varepsilon' },
        { why: 'Choose $m \\in \\mathbb{N}$ large enough so the mesh size satisfies $h = (b - a)/m < \\delta(\\varepsilon)$.', m: 'h = \\frac{b - a}{m} < \\delta(\\varepsilon)' },
        { why: 'Define $s_\\varepsilon(x) = f(a + (k-1)h)$ on $I_k = [a+(k-1)h, a+kh)$. For any $x \\in I_k$, $|x - (a + (k-1)h)| \\le h < \\delta(\\varepsilon)$.', m: '|x - (a + (k-1)h)| < \\delta(\\varepsilon) \\implies |f(x) - s_\\varepsilon(x)| < \\varepsilon' }
      ],
      ends: 'Thus $|f(x) - s_\\varepsilon(x)| < \\varepsilon$ holds for all $x \\in [a, b]$.'
    },
    cards:[
      { q:'What condition must the mesh size h=(b-a)/m satisfy for the corollary to hold?', a:'h < δ(ε), the modulus of uniform continuity for the target ε.', kind:'apply' },
      { q:'State Corollary 5.4.11 on explicit mesh size for step-function approximation.', a:'For continuous $f$ on $[a,b]$ and $\\varepsilon>0$, choosing $m\\in\\mathbb{N}$ with $h=(b-a)/m < \\delta(\\varepsilon)$ ensures $|f(x)-s_\\varepsilon(x)|<\\varepsilon$ for all $x\\in[a,b]$.', kind:'state' }
    ]
  },

  {
    id:'c.5.4.12', bartle:'5.4.12', sec:'5.4', kind:'definition', tier:'ext',
    title:'Piecewise Linear Function',
    oneLine:'A continuous "connect-the-dots" function built from finitely many straight segments.',
    statement:`Let $I=[a,b]$. $g:I\\to\\mathbb{R}$ is <b>piecewise linear</b> on $I$ if $I$ is a union of finitely many disjoint intervals $I_1,\\ldots,I_m$ such that $g$ restricted to each $I_k$ is linear. For $g$ to be continuous on $I$, the segments must meet at the endpoints shared by adjacent subintervals.`,
    intuition:`Piecewise linear functions are the natural continuous upgrade of step functions — same idea of finitely many simple pieces, but the pieces are line segments instead of flat constants, so (with matching endpoints) the whole thing is continuous.`,
    needs:['c.5.4.9'],
    traps:[
      `Piecewise linear is only continuous if consecutive pieces' segments actually meet at the shared endpoint — an arbitrary choice of linear pieces need not be continuous.`
    ],
    cards:[
      { q:'What extra condition (beyond step functions) makes a piecewise linear function continuous?', a:'The line segments on adjacent subintervals must meet exactly at the shared endpoint.', kind:'recall' }
    ]
  },

  {
    id:'c.5.4.13', bartle:'5.4.13', sec:'5.4', kind:'theorem', tier:'ext',
    title:'Approximation by Piecewise Linear Functions',
    oneLine:'Any continuous function on a closed bounded interval can be matched to within ε by a continuous, piecewise linear function.',
    statement:`Let $I$ be a closed bounded interval and $f:I\\to\\mathbb{R}$ continuous. For every $\\varepsilon>0$ there is a continuous piecewise linear function $g_\\varepsilon:I\\to\\mathbb{R}$ such that $|f(x)-g_\\varepsilon(x)|<\\varepsilon$ for all $x\\in I$.`,
    intuition:`Same mesh idea as the step-function approximation, but instead of flattening $f$ to a constant on each piece, connect the actual endpoint values of $f$ with a straight line — this keeps the approximation continuous while staying just as close.`,
    needs:['c.5.4.3','c.5.4.12','c.5.4.10'],
    traps:[
      `Needs I closed and bounded, for the same reason as 5.4.10: uniform continuity of f (via 5.4.3) drives the whole construction.`
    ],
    proof:{
      idea:`Reuse the mesh from the step-function proof, but replace each flat piece by the line segment joining f's actual values at the two ends of that piece.`,
      rungs:[
        { why:'Same starting point as the step-function proof: uniform continuity supplies one mesh size for the whole interval.', m:`By uniform continuity (5.4.3), choose $\\delta(\\varepsilon)>0$ with $x,y\\in I,\\ |x-y|<\\delta(\\varepsilon)\\Rightarrow|f(x)-f(y)|<\\varepsilon$.` },
        { why:'Chop I into pieces narrower than δ.', m:`Choose $m$ with $h=(b-a)/m<\\delta(\\varepsilon)$; subintervals $I_1,\\ldots,I_m$.` },
        { why:'Instead of a flat constant, connect the actual endpoint VALUES of f with a straight line — still simple, but now continuous.', m:`On $I_k$, let $g_\\varepsilon$ be the linear function through $(a+(k-1)h,\\ f(a+(k-1)h))$ and $(a+kh,\\ f(a+kh))$.` },
        { why:'Since f barely moves across a piece narrower than δ, and gε shares f\'s exact values at both ends, gε cannot stray far from f in between.', m:`For $x\\in I_k$: $f(x)$ is within $\\varepsilon$ of both endpoint values (by uniform continuity), and $g_\\varepsilon(x)$ lies between those same two endpoint values, so $|f(x)-g_\\varepsilon(x)|<\\varepsilon$.` }
      ],
      ends:`gε is continuous, piecewise linear on I, and |f(x)-gε(x)|<ε for every x∈I.`
    },
    cards:[
      { q:'How does the piecewise-linear construction differ from the step-function construction of 5.4.10?', a:'Instead of a flat constant on each subinterval, it uses the straight line joining f\'s actual values at the two endpoints of that subinterval — keeping the approximation continuous.', kind:'recall' },
      { q:'Why must I be closed and bounded for this theorem?', a:'To guarantee f is uniformly continuous via the Uniform Continuity Theorem (5.4.3), which drives the whole mesh construction.', kind:'trap' },
      { q:'State Theorem 5.4.13 on approximation by piecewise linear functions.', a:'If $I$ is a closed bounded interval and $f:I\\to\\mathbb{R}$ is continuous, for every $\\varepsilon>0$ there exists a continuous piecewise linear function $g_\\varepsilon:I\\to\\mathbb{R}$ with $|f(x)-g_\\varepsilon(x)|<\\varepsilon$ for all $x\\in I$.', kind:'state' }
    ]
  },

  {
    id:'c.5.4.14', bartle:'5.4.14', sec:'5.4', kind:'theorem', tier:'ext',
    title:'Weierstrass Approximation Theorem',
    oneLine:'Any continuous function on a closed bounded interval can be matched to within ε by a polynomial — statement only, proof omitted.',
    statement:`Let $I=[a,b]$ and let $f:I\\to\\mathbb{R}$ be continuous. If $\\varepsilon>0$ is given, then there exists a polynomial function $P_\\varepsilon$ such that $|f(x)-P_\\varepsilon(x)|<\\varepsilon$ for all $x\\in I$.`,
    intuition:`This pushes the approximation program of 5.4.10/5.4.13 as far as it will go: from flat step functions, to piecewise linear functions, all the way to genuinely smooth polynomials. To get within an arbitrarily small $\\varepsilon$ you generally need polynomials of arbitrarily high degree. All known proofs are intricate (and rely on tools beyond this course) — the syllabus treats the proof as optional; only the statement is examinable.`,
    needs:['c.5.4.13'],
    traps:[
      `The theorem gives existence of SOME polynomial within ε — it does not give a formula or an algorithm for constructing that polynomial, and higher accuracy generally forces higher degree.`,
      `Proof is intentionally omitted here — it is not examinable in this course; only the statement is required.`
    ],
    proof: {
      idea: 'Construct approximating polynomials via Bernstein polynomials $B_n(f; x)$ on $[0, 1]$.',
      why: 'Bernstein polynomials $B_n(f; x) = \\sum_{k=0}^n f(k/n) \\binom{n}{k} x^k (1-x)^{n-k}$ converge uniformly to any continuous function $f$ on $[0, 1]$.',
      rungs: [
        { why: 'Use an affine change of variable $t = (x - a)/(b - a)$ to reduce from $[a, b]$ to the unit interval $[0, 1]$.', m: 't = \\frac{x - a}{b - a} \\in [0, 1]' },
        { why: 'Define the $n$-th Bernstein polynomial for $f$ on $[0, 1]$.', m: 'B_n(f; t) = \\sum_{k=0}^n f(k/n) \\binom{n}{k} t^k (1-t)^{n-k}' },
        { why: 'Using uniform continuity of $f$, bound terms where $|k/n - t| < \\delta$ by $\\varepsilon/2$.', m: '|k/n - t| < \\delta \\implies |f(k/n) - f(t)| < \\varepsilon/2' },
        { why: 'Use the variance identity $\\sum_{k=0}^n (k - nt)^2 \\binom{n}{k} t^k (1-t)^{n-k} = nt(1-t) \\le n/4$ to bound terms where $|k/n - t| \\ge \\delta$.', m: '\\sum_{|k/n - t| \\ge \\delta} \\binom{n}{k} t^k (1-t)^{n-k} \\le \\frac{1}{4n\\delta^2}' }
      ],
      ends: 'Choosing $n > M/(\\varepsilon \\delta^2)$ ensures $|f(t) - B_n(f; t)| < \\varepsilon$ uniformly on $[0, 1]$.'
    },
    cards:[
      { q:'State the Weierstrass Approximation Theorem.', a:'For f continuous on [a,b] and ε>0, there exists a polynomial Pε with |f(x)-Pε(x)|<ε for all x∈I.', kind:'state' },
      { q:'Is the proof of the Weierstrass Approximation Theorem examinable in this course?', a:'No — the syllabus marks it optional; only the statement is required.', kind:'recall' }
    ]
  }
);

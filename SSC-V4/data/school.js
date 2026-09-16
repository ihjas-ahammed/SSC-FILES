/* School-level and background prerequisites */
CONCEPTS.push(
  { id:'s.abs-ineq', tier:'school', kind:'technique',
    title:'Absolute-value inequalities',
    oneLine:'|x−a|<δ just means x sits within δ of a, on either side.',
    intuition:`<p>$|x-a|$ is the <b>distance</b> between $x$ and $a$ on the number line — it doesn't care which one is bigger. So "$|x-a|<\\delta$" reads as "$x$ is less than $\\delta$ away from $a$", which is exactly the two-sided statement</p>
      $$|x-a|<\\delta \\iff -\\delta < x-a < \\delta \\iff a-\\delta < x < a+\\delta.$$
      <p><b>Worked micro-example:</b> solve $|x-3|<0.1$. Distance from $x$ to $3$ must be under $0.1$, so $x\\in(2.9,\\,3.1)$ — a tiny open interval straddling $3$.</p>
      <p>Remember this shape. Every single $\\varepsilon$-$\\delta$ or $\\varepsilon$-$N$ argument you will ever write is, underneath the symbols, a sentence of the form "[something] is within [tolerance] of [target]" — i.e. an absolute-value inequality exactly like this one.</p>`,
    needs:[],
    cards:[
      { q:'Rewrite $|x-a|<\\delta$ without absolute value bars.', a:'$a-\\delta < x < a+\\delta$ (an open interval of radius $\\delta$ centred at $a$).', kind:'state' },
      { q:'Solve $|x-5|<2$ for $x$.', a:'$3<x<7$.', kind:'apply' },
      { q:'Why is $|x-a|<\\delta$ called "two-sided" but $x<a+\\delta$ alone is not enough?', a:'Because $|x-a|<\\delta$ also forces $x>a-\\delta$ — it caps $x$ from BOTH sides, not just above.', kind:'trap' }
    ]
  },
  { id:'s.triangle-ineq', tier:'school', kind:'technique',
    title:'Triangle inequality & the add-and-subtract trick',
    oneLine:'Going a→c directly is never longer than detouring through b: |a−c| ≤ |a−b|+|b−c|.',
    intuition:`<p>Think of $a,b,c$ as points, and $|x-y|$ as the distance between them. A straight path from $a$ to $c$ can never be longer than a path that detours through $b$ — that's just the triangle inequality for distances, $|u+v|\\le|u|+|v|$, applied after inserting $b$.</p>
      <p><b>The trick that makes it useful:</b> to bound $|a-c|$, artificially insert and cancel $b$:</p>
      $$|a-c| = |(a-b)+(b-c)| \\le |a-b|+|b-c|.$$
      <p><b>Worked micro-example:</b> you know $|x-5|<0.1$ and $|5-y|<0.2$. Then $|x-y| \\le |x-5|+|5-y| < 0.1+0.2 = 0.3$ — you never had to know $x$ and $y$ directly, only how each relates to the shared middle point $5$.</p>
      <p>This "route through a middle point" move is the single most common step in real analysis proofs — it's how you'll prove a limit is unique, and how you'll bound $|f(x)-L|$ by bounding two smaller pieces separately.</p>`,
    needs:['s.abs-ineq'],
    cards:[
      { q:'State the triangle inequality for three real numbers $a,b,c$.', a:'$|a-c|\\le|a-b|+|b-c|$.', kind:'state' },
      { q:'If $|x-2|<0.5$ and $|2-y|<0.5$, bound $|x-y|$.', a:'$|x-y|\\le|x-2|+|2-y|<1$.', kind:'apply' },
      { q:'Why insert exactly $-b+b$ into $a-c$ rather than any other number?', a:'Because $b$ is the point you already have separate control over (e.g. a known limit or sequence term) — inserting it lets you split one unknown gap into two gaps you can each bound.', kind:'trap' }
    ]
  },
  { id:'s.function', tier:'school', kind:'definition',
    title:'Functions: domain, range/image, injective, surjective',
    oneLine:'A function assigns each input exactly one output; injective = no two inputs share an output, surjective = every target value is hit.',
    intuition:`<p>Think of a function $f:A\\to B$ as a vending machine: you put in $x\\in A$ (the <b>domain</b>, the allowed inputs) and get out exactly one $f(x)$. The <b>image</b> (sometimes loosely called the range) is the set of outputs that actually get produced, $\\{f(x):x\\in A\\}$ — this can be smaller than $B$ itself.</p>
      <p><b>Worked micro-example:</b> $f(x)=x^2$ on $A=\\mathbb{R}$. Domain is all of $\\mathbb{R}$; the image is $[0,\\infty)$ (negative numbers are never output). It is <b>not injective</b>: $f(1)=f(-1)=1$, two different inputs share an output. It is <b>not surjective</b> onto $\\mathbb{R}$ (negative targets are never hit), but it IS surjective onto its own image $[0,\\infty)$.</p>
      <p>Injective = "no collisions." Surjective = "nothing in the target is missed." A function that is both is called a bijection, and only then does a clean two-sided inverse exist.</p>`,
    needs:[],
    cards:[
      { q:'What does it mean for $f$ to be injective?', a:'Different inputs always give different outputs: $x_1\\ne x_2 \\Rightarrow f(x_1)\\ne f(x_2)$.', kind:'state' },
      { q:'Is $f(x)=x^2$ on $[0,\\infty)$ injective?', a:'Yes — on this restricted domain, distinct nonnegative $x$ give distinct $x^2$.', kind:'apply' },
      { q:'Common mix-up: "range" and "image".', a:'People often use them interchangeably; "range" sometimes means the declared target set $B$, while "image" always means the actual set of outputs produced — always check which one an author means.', kind:'trap' }
    ]
  },
  { id:'s.interval', tier:'school', kind:'definition',
    title:'Interval notation',
    oneLine:'Square bracket = endpoint included; round bracket = endpoint excluded.',
    intuition:`<p>An interval is an unbroken stretch of the number line. $(a,b)$ is <b>open</b> — neither endpoint belongs to it. $[a,b]$ is <b>closed</b> — both endpoints belong. Mixed forms like $[a,b)$ exist too. Unbounded intervals use $\\infty$, which is never itself included: $(a,\\infty)$, $(-\\infty,b]$.</p>
      <p><b>Worked micro-example:</b> $[0,1)$ contains $0$ but not $1$; the numbers $0.9,\\,0.99,\\,0.999,\\ldots$ are all in it and get arbitrarily close to $1$ without $1$ itself ever being a member.</p>
      <p>"Bounded" means the interval doesn't run off to $\\pm\\infty$ — it fits inside some $[-M,M]$. This bracket-in/bracket-out distinction is exactly what later separates "closed and bounded intervals always contain their own max/min" from "open intervals might not."</p>`,
    needs:[],
    cards:[
      { q:'Does $(2,5]$ contain $2$? Does it contain $5$?', a:'No to $2$ (open at that end), yes to $5$ (closed at that end).', kind:'state' },
      { q:'Is $(0,\\infty)$ bounded?', a:'No — it is bounded below by $0$ but has no upper bound, so it is unbounded.', kind:'apply' },
      { q:'Trap: does $[0,1)$ have a largest element?', a:'No — for any candidate $x<1$ in the set, $(x+1)/2$ is still in the set and bigger. This is exactly why "least upper bound" will need to be distinguished from "maximum."', kind:'trap' }
    ]
  },
  { id:'s.quantifier', tier:'school', kind:'technique',
    title:'∀ (for all) and ∃ (there exists) — order matters',
    oneLine:'Swapping the ORDER of ∀ and ∃ in a statement can completely change what it means.',
    intuition:`<p>$\\forall$ means "for every"; $\\exists$ means "there exists (at least one)". Compare two sentences about a class of students and subjects:</p>
      <p>(A) <i>"For every student, there exists a subject they like best."</i> — each student may like a <b>different</b> subject; the choice can depend on the student.</p>
      <p>(B) <i>"There exists a subject that every student likes best."</i> — one <b>single</b> subject has to work for everyone at once.</p>
      <p>(A) is easy to satisfy; (B) is much stronger and might be false even when (A) is true. Swapping $\\forall$ and $\\exists$ changed the meaning entirely.</p>
      <p>This is <b>the</b> background idea of the whole course. The definition of a limit is "$\\forall\\varepsilon\\,\\exists\\delta$..." — meaning $\\delta$ is allowed to depend on $\\varepsilon$ (chosen AFTER $\\varepsilon$ is fixed). Later, uniform continuity will demand "$\\forall\\varepsilon\\,\\exists\\delta\\,\\forall x$..." — one $\\delta$ that works for every $x$ at once — while ordinary continuity only needs "$\\forall x\\,\\forall\\varepsilon\\,\\exists\\delta$..." where $\\delta$ is allowed to depend on $x$ too. Same symbols, different order, genuinely different (and much stronger) statement.</p>`,
    needs:[],
    cards:[
      { q:'In "$\\forall \\varepsilon>0\\ \\exists \\delta>0 \\ (\\ldots)$", what is allowed to depend on what?', a:'$\\delta$ is chosen after $\\varepsilon$, so $\\delta$ is allowed to depend on $\\varepsilon$ — never the other way round.', kind:'state' },
      { q:'Why is "$\\exists\\delta\\,\\forall x\\,(\\ldots)$" a stronger claim than "$\\forall x\\,\\exists\\delta\\,(\\ldots)$"?', a:'In the first, one $\\delta$ must work simultaneously for every $x$; in the second, a different $\\delta$ is allowed for each $x$ — so the first implies the second but not conversely.', kind:'recall' },
      { q:'Trap: is "$\\forall x\\,\\exists y\\,(y>x)$" (every number has a bigger number) the same as "$\\exists y\\,\\forall x\\,(y>x)$" (some number is bigger than every number)?', a:'No — the first is true on $\\mathbb{R}$; the second is false (no number is bigger than every number). Same symbols, opposite truth value, because the order flipped.', kind:'trap' }
    ]
  },
  { id:'s.contradiction', tier:'school', kind:'technique',
    title:'Proof by contradiction & contrapositive',
    oneLine:'To prove "if P then Q": either assume P and not-Q and find nonsense, or instead prove "if not-Q then not-P".',
    intuition:`<p><b>Contrapositive:</b> "if $P$ then $Q$" is logically identical to "if not $Q$ then not $P$". Example: instead of proving "if $n^2$ is even then $n$ is even" head-on, prove the contrapositive "if $n$ is odd then $n^2$ is odd" — often much easier, since you get to assume the cleaner statement ($n$ odd, i.e. $n=2k+1$) and just compute.</p>
      <p><b>Contradiction:</b> assume $P$ is true and $Q$ is false at the same time, then derive something impossible (like $1=0$, or $u_1<u_2$ and $u_2<u_1$ simultaneously), which means the assumption was never possible — so $Q$ must actually hold whenever $P$ does.</p>
      <p><b>Worked micro-example:</b> to show a sequence can't have two different limits $x'\\ne x''$, assume it does, then squeeze $|x'-x''|$ below every positive $\\varepsilon$ using the triangle inequality — forcing $x'-x''=0$, contradicting $x'\\ne x''$.</p>
      <p>These two patterns run through almost every uniqueness proof and every divergence proof in analysis — divergence proofs in particular work by carefully <i>negating</i> a $\\forall\\exists$ statement, which flips the quantifier order (see <code>s.quantifier</code>).</p>`,
    needs:['s.quantifier'],
    cards:[
      { q:'State the contrapositive of "if $n$ is even, then $n^2$ is even".', a:'"If $n^2$ is not even (i.e. odd), then $n$ is not even (i.e. odd)."', kind:'state' },
      { q:'Outline a contradiction proof that $\\sqrt2$ is irrational (one line each step).', a:'Assume $\\sqrt2=p/q$ in lowest terms; square to get $p^2=2q^2$, so $p$ is even, $p=2k$; substitute to get $q$ also even — contradicting "lowest terms".', kind:'apply' },
      { q:'Trap when negating "$\\forall n\\,\\exists K\\,(\\ldots)$" for a divergence proof.', a:'The negation is "$\\exists n$" becomes "NOT for all $n$" only at the OUTER quantifier — you must flip every quantifier in order: the correct negation is "$\\exists \\varepsilon_0>0$ such that $\\forall K$, [the inequality fails for some term past $K$]", not simply swapping $<$ to $\\ge$ everywhere.', kind:'trap' }
    ]
  },
  { id:'s.monotone', tier:'school', kind:'definition',
    title:'Increasing and decreasing functions',
    oneLine:'Increasing: bigger input gives a bigger (or equal) output. Decreasing: bigger input gives a smaller output.',
    intuition:`<p>$f$ is (strictly) <b>increasing</b> on a set if $x_1<x_2 \\Rightarrow f(x_1)<f(x_2)$: moving right along the input always moves you up on the graph. <b>Decreasing</b> is the mirror image: $x_1<x_2 \\Rightarrow f(x_1)>f(x_2)$.</p>
      <p><b>Worked micro-example:</b> $f(x)=x^2$. On $(-\\infty,0]$ it is decreasing (as $x$ increases toward $0$, $x^2$ shrinks); on $[0,\\infty)$ it is increasing. The same formula can be monotone on one piece and not on the whole domain.</p>
      <p>"Non-strict" versions (increasing allows equal outputs, i.e. $\\le$) also appear — always check which flavour a statement is using.</p>`,
    needs:['s.function'],
    cards:[
      { q:'Give the definition of "strictly decreasing" on a set $S$.', a:'For all $x_1,x_2\\in S$: $x_1<x_2 \\Rightarrow f(x_1)>f(x_2)$.', kind:'state' },
      { q:'Is $f(x)=x^3$ increasing on all of $\\mathbb{R}$?', a:'Yes — it is strictly increasing everywhere, even though its slope is $0$ at $x=0$.', kind:'apply' },
      { q:'Trap: does "slope $\\ge0$ everywhere" force strict monotonicity?', a:'No — it only forces non-strict (weak) monotonicity in general; e.g. a function constant on a subinterval has zero slope there yet is still "non-decreasing".', kind:'trap' }
    ]
  },
  { id:'s.inverse-fn', tier:'school', kind:'definition',
    title:'Inverse functions',
    oneLine:'The inverse of f undoes f: if f(a)=b then f⁻¹(b)=a — and it only exists cleanly when f is injective.',
    intuition:`<p>If $f$ is injective (no two inputs share an output), every output $b$ came from exactly one input $a$, so you can unambiguously define $f^{-1}(b):=a$. If $f$ is NOT injective, an output could have come from more than one input, and "$f^{-1}$" wouldn't know which one to return.</p>
      <p><b>Worked micro-example:</b> $f(x)=2x+3$ is injective on $\\mathbb{R}$; solving $y=2x+3$ for $x$ gives $f^{-1}(y)=(y-3)/2$. Check: $f(f^{-1}(y)) = 2\\cdot\\frac{y-3}{2}+3 = y$.</p>
      <p>Contrast with $f(x)=x^2$ on all of $\\mathbb{R}$: not injective ($f(2)=f(-2)=4$), so "$f^{-1}(4)$" is genuinely ambiguous — is it $2$ or $-2$? Restrict to $[0,\\infty)$ (where $x^2$ is increasing, hence injective) and $f^{-1}(y)=\\sqrt y$ becomes well-defined.</p>`,
    needs:['s.function','s.monotone'],
    cards:[
      { q:'Why must $f$ be injective for $f^{-1}$ to be well-defined?', a:'Otherwise some output value would have come from two or more different inputs, and $f^{-1}$ of that value would not have a single, unambiguous answer.', kind:'state' },
      { q:'Find the inverse of $f(x)=2x+3$.', a:'$f^{-1}(x) = (x-3)/2$.', kind:'apply' },
      { q:'Trap: why does restricting $x^2$ to $[0,\\infty)$ fix the invertibility problem?', a:'On $[0,\\infty)$, $x^2$ is strictly increasing (hence injective), so each output now traces back to exactly one nonnegative input; the negative branch is simply excluded.', kind:'trap' }
    ]
  },
  { id:'s.factoring', tier:'school', kind:'technique',
    title:'Algebraic manipulation: factoring, common denominators, rationalising',
    oneLine:'Turn a messy difference into a product with an isolated, controllable factor so you can bound or cancel it.',
    intuition:`<p>Three recurring moves:</p>
      <p><b>Factoring a difference of squares:</b> $x^2-c^2=(x-c)(x+c)$ — turns a "difference of squares" into a product containing the plain factor $(x-c)$ you actually want to bound.</p>
      <p><b>Common denominator:</b> $\\dfrac1x-\\dfrac1c = \\dfrac{c-x}{xc}$ — collapses two fractions into one, again exposing $(c-x)$ as an isolated factor.</p>
      <p><b>Rationalising:</b> $\\sqrt{n+1}-\\sqrt n = \\dfrac{(\\sqrt{n+1}-\\sqrt n)(\\sqrt{n+1}+\\sqrt n)}{\\sqrt{n+1}+\\sqrt n} = \\dfrac{1}{\\sqrt{n+1}+\\sqrt n}$ — multiplying by the "conjugate" clears a square root that was blocking simplification.</p>
      <p>Every one of these tricks exists for the same reason: to turn an expression like $|f(x)-L|$ into (something you can bound by a constant) $\\times\\,|x-c|$, so that making $|x-c|$ small (via $\\delta$) automatically makes $|f(x)-L|$ small (below $\\varepsilon$).</p>`,
    needs:[],
    cards:[
      { q:'Factor $x^2-c^2$.', a:'$(x-c)(x+c)$.', kind:'state' },
      { q:'Simplify $\\dfrac1x-\\dfrac1c$ as a single fraction.', a:'$\\dfrac{c-x}{xc}$.', kind:'apply' },
      { q:'Trap: why rationalise $\\sqrt{n+1}-\\sqrt n$ instead of estimating it directly?', a:'Directly it looks like "small minus small", hard to bound; after rationalising it becomes $1/(\\sqrt{n+1}+\\sqrt n)$, visibly small because the denominator is large — the algebra reveals the size instead of hiding it.', kind:'trap' }
    ]
  },
  { id:'s.sup-inf-school', tier:'school', kind:'definition',
    title:'"Largest" vs "least upper bound" — why max can fail to exist',
    oneLine:'A set can have upper bounds without having a biggest member; the LEAST such bound is called the supremum.',
    intuition:`<p>Take $S=(0,1)$, the open interval. Every number $\\ge1$ is an upper bound. But $S$ has no largest element: for any $x\\in S$, the number $(x+1)/2$ is still in $S$ and strictly bigger than $x$ — so no matter which element you point to, a bigger one is hiding in the set. Yet $1$ still feels like the natural "ceiling": it's the smallest number that is an upper bound, even though it's not itself in the set.</p>
      <p>Contrast with $S=[0,1]$: here $1$ IS a member, so it's an honest maximum — and it's also still the least upper bound. So a maximum, when it exists, is always the least upper bound too; the useful new idea is that the least upper bound can exist even when a maximum does not.</p>
      <p>This everyday distinction — "biggest element" vs "tightest ceiling" — is exactly what the formal definition of <b>supremum</b> will capture precisely and use to define completeness of $\\mathbb{R}$.</p>`,
    needs:['s.interval'],
    cards:[
      { q:'Does $S=(0,1)$ have a maximum element?', a:'No — for any $x\\in S$, $(x+1)/2\\in S$ is strictly bigger.', kind:'state' },
      { q:'What is the "natural ceiling" (least upper bound) of $(0,1)$, even though it has no maximum?', a:'$1$.', kind:'apply' },
      { q:'Trap: if a set has a maximum, is its least upper bound something different from that maximum?', a:'No — when a maximum exists, it automatically equals the least upper bound too; "supremum" only becomes a genuinely new concept for sets like open intervals that have no maximum at all.', kind:'trap' }
    ]
  }
);

/* ══════════════════════════════════════════════════════════════════════════
   MOCK concept nodes — ten standard results, written to exercise the Level 1
   surfaces (notes, statement recall, theorem writing). Placeholder content:
   the statements are standard and stated correctly, but this is NOT the
   validated pool. Ids carry an `m.` prefix so they can never be mistaken for
   production ids, and every node is marked mock:true.

   Node shape (the app reads exactly these fields):
     id sec kind tier title oneLine statement intuition needs[] traps[] cards[]
     cards: { q, a, kind }  with kind 'state' feeding the recall deck
     proof: { idea, why, rungs:[{why,m}], ends }  on every theorem, so the
            Level 2 proof-work mark has something real to be claimed against
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(

  { id: 'm.2.3.2', sec: '2.3', kind: 'definition', tier: 'core', mock: true,
    title: 'Supremum and Infimum',
    oneLine: 'The supremum is the least upper bound — the tightest ceiling a set has.',
    statement: `<p>Let $S\\subseteq\\mathbb{R}$ be nonempty.</p>
      <p>(a) A number $u\\in\\mathbb{R}$ is the <b>supremum</b> of $S$, written $u=\\sup S$, if
      (i) $s\\le u$ for all $s\\in S$, and (ii) $u\\le v$ for every upper bound $v$ of $S$.</p>
      <p>(b) A number $w\\in\\mathbb{R}$ is the <b>infimum</b> of $S$, written $w=\\inf S$, if
      (i) $w\\le s$ for all $s\\in S$, and (ii) $t\\le w$ for every lower bound $t$ of $S$.</p>`,
    intuition: `<p>Condition (i) says $u$ is a ceiling. Condition (ii) says it is the
      <i>lowest</i> ceiling: you cannot slide it down even slightly without some element of $S$
      poking through.</p>
      <p>Equivalent test that is far easier to use: $u=\\sup S$ exactly when $u$ is an upper bound
      and, for every $\\varepsilon>0$, some element of $S$ exceeds $u-\\varepsilon$.</p>`,
    needs: [],
    traps: [
      `A supremum need not belong to the set. $\\sup\\{1-\\frac1n : n\\in\\mathbb{N}\\}=1$, yet $1$ is
       never an element. Only a <i>maximum</i> has to be attained.`,
      `“Upper bound” and “supremum” are not interchangeable: $7$ is an upper bound of $(0,1)$,
       the supremum is $1$.`
    ],
    cards: [
      { kind: 'state',
        q: 'State the definition of the supremum of a nonempty set $S\\subseteq\\mathbb{R}$.',
        a: '$u=\\sup S$ if (i) $s\\le u$ for all $s\\in S$, and (ii) $u\\le v$ for every upper bound $v$ of $S$ — that is, $u$ is the least upper bound of $S$.' },
      { kind: 'apply',
        q: 'Find $\\sup S$ and $\\inf S$ for $S=\\{1-\\frac1n : n\\in\\mathbb{N}\\}$, and say which is attained.',
        a: '$\\sup S=1$, not attained; $\\inf S=0$, attained at $n=1$.' },
      { kind: 'trap',
        q: 'If $\\sup S$ exists, must $S$ have a maximum?',
        a: 'No. A maximum is a supremum that happens to lie in $S$; $(0,1)$ has $\\sup=1$ and no maximum.' }
    ] },

  { id: 'm.2.3.6', sec: '2.3', kind: 'theorem', tier: 'core', mock: true,
    title: 'The Completeness (Supremum) Property of ℝ',
    oneLine: 'Every nonempty set of reals with a ceiling has a least ceiling — inside ℝ.',
    statement: `<p>Every nonempty subset of $\\mathbb{R}$ that is bounded above has a supremum
      in $\\mathbb{R}$.</p>
      <p>Dually, every nonempty subset of $\\mathbb{R}$ that is bounded below has an infimum in
      $\\mathbb{R}$ (apply the above to $-S$).</p>`,
    intuition: `<p>This is the property that separates $\\mathbb{R}$ from $\\mathbb{Q}$, and it is
      an axiom, not a theorem about order and arithmetic.</p>
      <p>Watch it fail in $\\mathbb{Q}$: the set $\\{x\\in\\mathbb{Q}: x>0,\\ x^{2}<2\\}$ is nonempty
      and bounded above, but inside $\\mathbb{Q}$ it has no least upper bound — the candidate is
      $\\sqrt2$, which is not there. Completeness is what fills those holes, and it is the engine
      behind the Monotone Convergence Theorem, Bolzano–Weierstrass and every existence result in
      the course.</p>`,
    needs: ['m.2.3.2'],
    traps: [
      `The supremum is guaranteed in $\\mathbb{R}$, not in the set: it may be irrational even when
       every element of the set is rational.`,
      `Boundedness above is essential. $\\mathbb{N}$ has no supremum in $\\mathbb{R}$; the property
       says nothing about unbounded sets.`
    ],
    proof: {
      idea: `<p>Part (a) is <b>not</b> proved: the Supremum Property is an <i>axiom</i> of
        $\\mathbb{R}$ — it is what we mean by calling $\\mathbb{R}$ complete. What does need an
        argument is the dual statement about infima, and the trick is to reflect the set through
        the origin and let (a) do the work.</p>`,
      why: `<p>Reflection turns lower bounds into upper bounds and reverses every inequality,
        so a least upper bound for $-S$ is forced to be a greatest lower bound for $S$. You will
        use this reflection again and again; it is the cheapest way to halve the work on any
        sup/inf result.</p>`,
      rungs: [
        { why: 'Set up the reflected set and record that it inherits the hypothesis.',
          m: `$$ -S=\\{-s: s\\in S\\},\\qquad S\\neq\\emptyset \\implies -S\\neq\\emptyset. $$` },
        { why: 'A lower bound for $S$ becomes an upper bound for $-S$, so $-S$ is bounded above and (a) applies.',
          m: `$$ t\\le s\\ \\ \\forall s\\in S \\iff -s\\le -t\\ \\ \\forall s\\in S. $$` },
        { why: 'Apply the axiom to $-S$ and name the supremum it produces.',
          m: `$$ u=\\sup(-S)\\ \\text{ exists in }\\mathbb{R}. $$` },
        { why: 'Reflect back. The two supremum conditions on $u$ become exactly the two infimum conditions on $-u$.',
          m: `$$ -u\\le s\\ \\ \\forall s\\in S,\\qquad t\\le -u\\ \\text{ for every lower bound } t. $$` }
      ],
      ends: `<p>Hence $\\inf S=-\\sup(-S)$, which both proves the dual statement and gives a
        formula worth remembering.</p>`
    },
    cards: [
      { kind: 'state', q: 'State the Completeness Property of $\\mathbb{R}$.',
        a: 'Every nonempty subset of $\\mathbb{R}$ that is bounded above has a supremum in $\\mathbb{R}$.' },
      { kind: 'recall', q: 'Give a set showing the property fails in $\\mathbb{Q}$.',
        a: '$\\{x\\in\\mathbb{Q}:x>0,\\ x^{2}<2\\}$ — bounded above, nonempty, no least upper bound in $\\mathbb{Q}$ (it would have to be $\\sqrt2$).' },
      { kind: 'trap', q: 'Does completeness guarantee a maximum?',
        a: 'No — only a supremum, which need not be attained. $(0,1)$ has $\\sup=1\\notin(0,1)$.' }
    ] },

  { id: 'm.3.4.8', sec: '3.4', kind: 'theorem', tier: 'core', mock: true,
    title: 'The Bolzano–Weierstrass Theorem',
    oneLine: 'A bounded sequence always hides a convergent subsequence inside it.',
    statement: `<p>Every bounded sequence of real numbers has a convergent subsequence.</p>`,
    intuition: `<p>Infinitely many terms crammed into a finite band must pile up somewhere. The
      theorem does not tame the sequence — it only extracts a well-behaved part of it.</p>
      <p>This extraction is the workhorse of §5.3 and §5.4: take a sequence witnessing that
      something goes wrong on $[a,b]$, pull out a convergent subsequence (boundedness), note the
      limit is still in $[a,b]$ (closedness), and contradict continuity there.</p>`,
    needs: ['m.2.3.6'],
    traps: [
      `It gives a convergent <i>subsequence</i>, never convergence of the whole sequence:
       $x_{n}=(-1)^{n}$ is bounded and divergent.`,
      `It is not an equivalence. An unbounded sequence can still have a convergent subsequence —
       for instance $1,1,2,1,3,1,4,\\ldots$`
    ],
    proof: {
      idea: `<p>Trap the sequence. Halve the interval that contains it, keep whichever half still
        holds infinitely many terms, and repeat forever. The nested intervals shrink to a single
        point, and a subsequence can be chosen marching into them.</p>`,
      why: `<p>Bisection converts "bounded" into "convergent" because the two halves cannot
        <i>both</i> contain only finitely many terms — there are infinitely many terms to house.
        That pigeonhole step is the whole engine; completeness (through the Nested Interval
        Property) supplies the point at the end.</p>`,
      rungs: [
        { why: 'Boundedness gives a first interval containing every term.',
          m: `$$ |x_{n}|\\le M\\ \\ \\forall n \\implies x_{n}\\in I_{1}=[-M,M]. $$` },
        { why: 'Bisect, and keep a half holding infinitely many terms — at least one always does.',
          m: `$$ I_{k}\\supseteq I_{k+1},\\qquad \\text{length}(I_{k})=\\frac{2M}{2^{\\,k-1}}. $$` },
        { why: 'The nested intervals have exactly one common point, because their lengths go to zero.',
          m: `$$ \\bigcap_{k=1}^{\\infty} I_{k}=\\{x\\}. $$` },
        { why: 'Choose indices in order, one from each interval — possible precisely because each $I_k$ holds infinitely many terms.',
          m: `$$ n_{1}<n_{2}<\\cdots,\\qquad x_{n_{k}}\\in I_{k}. $$` },
        { why: 'Both $x_{n_k}$ and $x$ lie in $I_k$, so their distance is at most its length.',
          m: `$$ |x_{n_{k}}-x|\\le \\frac{2M}{2^{\\,k-1}}\\longrightarrow 0. $$` }
      ],
      ends: `<p>So $x_{n_{k}}\\to x$: every bounded sequence has a convergent subsequence. Note
        what is <i>not</i> claimed — the sequence itself need not converge.</p>`
    },
    cards: [
      { kind: 'state', q: 'State the Bolzano–Weierstrass Theorem.',
        a: 'Every bounded sequence of real numbers has a convergent subsequence.' },
      { kind: 'apply', q: 'What are the subsequential limits of $x_{n}=(-1)^{n}$, and what does B–W give here?',
        a: 'Limits $1$ (even $n$) and $-1$ (odd $n$); B–W guarantees at least one convergent subsequence, and indeed two obvious ones exist, while the sequence itself diverges.' },
      { kind: 'trap', q: 'Does a bounded sequence with a convergent subsequence have to converge?',
        a: 'No. Convergence needs <i>every</i> subsequence to share one limit.' }
    ] },

  { id: 'm.5.1.1', sec: '5.1', kind: 'definition', tier: 'core', mock: true,
    title: 'Continuity at a Point',
    oneLine: 'You can force f(x) as close to f(c) as demanded by keeping x close enough to c.',
    statement: `<p>Let $A\\subseteq\\mathbb{R}$, let $f:A\\to\\mathbb{R}$, and let $c\\in A$. Then $f$
      is <b>continuous at $c$</b> if for every $\\varepsilon>0$ there exists $\\delta>0$ such that
      for all $x\\in A$,</p>
      $$|x-c|<\\delta \\implies |f(x)-f(c)|<\\varepsilon.$$
      <p>If $f$ is not continuous at $c$, it is <b>discontinuous at $c$</b>.</p>`,
    intuition: `<p>A two-move game. Your opponent names a tolerance $\\varepsilon$ around $f(c)$;
      you must answer with a radius $\\delta$ around $c$ that keeps every image inside that
      tolerance. Continuity means you can always answer.</p>
      <p>$\\delta$ is allowed to depend on $\\varepsilon$ and on $c$ — that dependence on $c$ is
      exactly what uniform continuity later forbids.</p>`,
    needs: [],
    traps: [
      `The order of quantifiers is the whole definition: $\\varepsilon$ is given first, $\\delta$ is
       chosen after. Writing “there exists $\\delta$ for all $\\varepsilon$” states something else
       (and something false in general).`,
      `$c$ must belong to the domain $A$. Continuity at a point where $f$ is undefined is not a
       question you can ask — that is a limit question instead.`
    ],
    cards: [
      { kind: 'state', q: 'State the $\\varepsilon$–$\\delta$ definition of continuity of $f:A\\to\\mathbb{R}$ at $c\\in A$.',
        a: 'For every $\\varepsilon>0$ there exists $\\delta>0$ such that for all $x\\in A$ with $|x-c|<\\delta$ we have $|f(x)-f(c)|<\\varepsilon$.' },
      { kind: 'apply', q: 'For $f(x)=3x+2$ and any $c$, which $\\delta$ answers a given $\\varepsilon$?',
        a: '$\\delta=\\varepsilon/3$, since $|f(x)-f(c)|=3|x-c|$. Note it does not depend on $c$.' },
      { kind: 'trap', q: 'May $\\delta$ depend on $\\varepsilon$? On $c$?',
        a: 'On both. Only uniform continuity requires a single $\\delta$ that works at every point of the set.' }
    ] },

  { id: 'm.5.1.3', sec: '5.1', kind: 'theorem', tier: 'core', mock: true,
    title: 'Sequential Criterion for Continuity',
    oneLine: 'Continuity = every sequence heading to c has images heading to f(c).',
    statement: `<p>Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$ and $c\\in A$. Then $f$ is
      continuous at $c$ if and only if for <b>every</b> sequence $(x_{n})$ in $A$ with
      $x_{n}\\to c$, the image sequence satisfies $f(x_{n})\\to f(c)$.</p>`,
    intuition: `<p>It converts an $\\varepsilon$–$\\delta$ statement into a statement about
      sequences, which is usually far easier to attack.</p>
      <p>Its contrapositive is the working tool — the <b>Discontinuity Criterion</b>: to prove $f$
      is discontinuous at $c$, produce <i>one</i> sequence $x_{n}\\to c$ in $A$ for which
      $f(x_{n})\\not\\to f(c)$. One witness is enough.</p>`,
    needs: ['m.5.1.1'],
    traps: [
      `“For every sequence” cannot be weakened to “for some sequence”: the constant sequence
       $x_{n}=c$ satisfies $f(x_{n})\\to f(c)$ for <i>any</i> function whatsoever, continuous or not.`,
      `The implication is not reversible in the other variable: $f(x_{n})\\to f(c)$ does not force
       $x_{n}\\to c$ (take $f$ constant).`
    ],
    proof: {
      idea: `<p>Two directions, and they are not equally hard. Forwards is a direct $\\varepsilon$–$\\delta$
        chase. Backwards is a contrapositive: assume continuity fails, and <i>build</i> the sequence
        that exposes the failure by taking $\\delta=1/n$.</p>`,
      why: `<p>Whenever a criterion says "for every sequence", the useful direction is almost always
        the contrapositive — one badly behaved sequence is far easier to construct than to rule out.
        The construction $\\delta=1/n$ is the standard way to turn a failed $\\varepsilon$–$\\delta$
        statement into a sequence.</p>`,
      rungs: [
        { why: '(⇒) Assume $f$ continuous at $c$ and take any sequence heading to $c$. Fix $\\varepsilon$ and get the matching $\\delta$.',
          m: `$$ |x-c|<\\delta \\implies |f(x)-f(c)|<\\varepsilon. $$` },
        { why: 'Convergence puts the tail of the sequence inside that $\\delta$, so the images sit inside $\\varepsilon$.',
          m: `$$ \\exists K:\\ n\\ge K \\implies |x_{n}-c|<\\delta \\implies |f(x_{n})-f(c)|<\\varepsilon. $$` },
        { why: '(⇐) Contrapositive. Suppose $f$ is NOT continuous at $c$: some $\\varepsilon_{0}$ defeats every $\\delta$.',
          m: `$$ \\exists\\varepsilon_{0}>0\\ \\ \\forall\\delta>0\\ \\ \\exists x:\\ |x-c|<\\delta\\ \\text{ and }\\ |f(x)-f(c)|\\ge\\varepsilon_{0}. $$` },
        { why: 'Run that with $\\delta=1/n$ to manufacture a sequence.',
          m: `$$ |x_{n}-c|<\\tfrac1n,\\qquad |f(x_{n})-f(c)|\\ge\\varepsilon_{0}. $$` },
        { why: 'The squeeze sends $x_n\\to c$, yet the images stay $\\varepsilon_0$ away — a sequence that violates the hypothesis.',
          m: `$$ x_{n}\\to c\\quad\\text{but}\\quad f(x_{n})\\not\\to f(c). $$` }
      ],
      ends: `<p>That contradicts the assumed sequential condition, so $f$ must be continuous at
        $c$. The same $\\delta=1/n$ construction proves the Divergence Criteria.</p>`
    },
    cards: [
      { kind: 'state', q: 'State the Sequential Criterion for continuity at $c$.',
        a: '$f$ is continuous at $c$ iff for every sequence $(x_{n})$ in $A$ with $x_{n}\\to c$ we have $f(x_{n})\\to f(c)$.' },
      { kind: 'recall', q: 'State the Discontinuity Criterion.',
        a: '$f$ is discontinuous at $c$ iff there exists a sequence $(x_{n})$ in $A$ with $x_{n}\\to c$ but $f(x_{n})\\not\\to f(c)$.' },
      { kind: 'trap', q: 'Why is “there exists a sequence $x_{n}\\to c$ with $f(x_{n})\\to f(c)$” useless as a criterion?',
        a: 'The constant sequence $x_{n}=c$ always satisfies it, so it holds for every function at every point.' }
    ] },

  { id: 'm.5.3.4', sec: '5.3', kind: 'theorem', tier: 'core', mock: true,
    title: 'Maximum–Minimum Theorem',
    oneLine: 'On a closed bounded interval, a continuous function actually attains its extremes.',
    statement: `<p>Let $I=[a,b]$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be
      continuous on $I$. Then $f$ has an absolute maximum and an absolute minimum on $I$: there
      exist points $x^{*},x_{*}\\in I$ with</p>
      $$f(x_{*})\\le f(x)\\le f(x^{*})\\qquad\\text{for all } x\\in I.$$`,
    intuition: `<p>Two separate gifts: the range is bounded, <i>and</i> the bounds are hit at
      actual points of the interval. Boundedness alone would only give $\\sup f$ and $\\inf f$; the
      theorem says these are values of $f$.</p>
      <p>Proof shape: $f$ is bounded (else a sequence with $|f(x_{n})|>n$ plus Bolzano–Weierstrass
      contradicts continuity), then take $x_{n}$ with $f(x_{n})\\to\\sup f$ and extract a convergent
      subsequence whose limit lies in $I$ because $I$ is closed.</p>`,
    needs: ['m.5.1.1', 'm.3.4.8'],
    traps: [
      `Both halves of “closed bounded” are load-bearing. $f(x)=1/x$ is continuous on $(0,1]$ and has
       a minimum but no maximum; $f(x)=x$ on $[0,\\infty)$ has a minimum but no maximum.`,
      `Continuity is required on the whole interval, not just at interior points.`,
      `The extreme points $x^{*},x_{*}$ need not be unique and need not be interior.`
    ],
    proof: {
      idea: `<p>Two claims in one theorem: $f$ is <b>bounded</b>, and the bound is <b>attained</b>.
        Prove boundedness by contradiction, then get attainment by pushing a sequence at the
        supremum and squeezing a convergent subsequence out of it with Bolzano–Weierstrass.</p>`,
      why: `<p>Closed and bounded is exactly what B–W needs, and continuity is what lets a limit
        pass through $f$. Remove either hypothesis and the proof collapses at a step you can point
        to — which is why the standard counterexamples are $1/x$ on $(0,1]$ and $x$ on
        $[0,\\infty)$.</p>`,
      rungs: [
        { why: 'Suppose $f$ were unbounded. Then some point overshoots every $n$.',
          m: `$$ \\exists x_{n}\\in[a,b]:\\ |f(x_{n})|>n. $$` },
        { why: 'The sequence lives in $[a,b]$, so B–W extracts a convergent subsequence — and the limit stays in $[a,b]$ because the interval is closed.',
          m: `$$ x_{n_{k}}\\to x^{*}\\in[a,b]. $$` },
        { why: 'Continuity makes $f(x_{n_k})$ converge, so it is bounded — contradicting $|f(x_{n_k})|>n_k$. Hence $f$ is bounded.',
          m: `$$ f(x_{n_{k}})\\to f(x^{*})\\ \\text{ bounded},\\qquad\\text{contradiction.} $$` },
        { why: 'Now let $s$ be the supremum of the range, and pick points climbing towards it.',
          m: `$$ s=\\sup\\{f(x):x\\in[a,b]\\},\\qquad s-\\tfrac1n<f(y_{n})\\le s. $$` },
        { why: 'B–W again on $(y_n)$, then continuity carries the limit inside $f$.',
          m: `$$ y_{n_{k}}\\to y^{*}\\in[a,b],\\qquad f(y_{n_{k}})\\to f(y^{*}). $$` },
        { why: 'The squeeze forces those images to $s$, so the supremum is a value of $f$.',
          m: `$$ f(y^{*})=s=\\max_{[a,b]} f. $$` }
      ],
      ends: `<p>Apply the same argument to $-f$ for the minimum. Notice that boundedness had to be
        established <i>first</i> — without it, $\\sup$ of the range need not exist.</p>`
    },
    cards: [
      { kind: 'state', q: 'State the Maximum–Minimum Theorem.',
        a: 'If $f$ is continuous on a closed bounded interval $[a,b]$, then $f$ attains an absolute maximum and an absolute minimum at points of $[a,b]$.' },
      { kind: 'recall', q: 'Which two hypotheses are usually the ones that fail in counterexamples?',
        a: 'That the interval is closed, and that it is bounded — continuity on a non-compact interval is not enough.' },
      { kind: 'trap', q: 'Does $f(x)=1/x$ on $(0,1]$ contradict the theorem?',
        a: 'No. $(0,1]$ is not closed, so the theorem does not apply; $f$ has minimum $1$ at $x=1$ and no maximum.' }
    ] },

  { id: 'm.5.3.7', sec: '5.3', kind: 'theorem', tier: 'core', mock: true,
    title: "Bolzano's Intermediate Value Theorem",
    oneLine: 'A continuous function on an interval skips no value between two of its values.',
    statement: `<p>Let $I=[a,b]$ and let $f:I\\to\\mathbb{R}$ be continuous on $I$. If $k\\in\\mathbb{R}$
      satisfies $f(a)<k<f(b)$ or $f(b)<k<f(a)$, then there exists $c\\in(a,b)$ with $f(c)=k$.</p>
      <p><b>Location of Roots (the $k=0$ case).</b> If $f(a)$ and $f(b)$ have opposite signs, then
      $f$ has a zero in $(a,b)$.</p>`,
    intuition: `<p>To get from below $k$ to above $k$ without lifting your pen, you must cross the
      level $k$. Continuity is what forbids jumping over it.</p>
      <p>It is an <i>existence</i> theorem and nothing more: it produces at least one $c$, gives no
      uniqueness, and hands you no formula. Uniqueness has to come from elsewhere — usually strict
      monotonicity via the sign of $f'$.</p>`,
    needs: ['m.5.1.1'],
    traps: [
      `The converse is false: $f(x)=x^{2}$ on $[-1,1]$ has a root at $0$ while $f(-1)f(1)=1>0$.
       A root does not require a sign change.`,
      `Continuity on the whole interval is essential: $f(x)=\\operatorname{sgn}(x)$ on $[-1,1]$ takes
       $-1$ and $1$ but never $0$.`,
      `“At least one $c$”, not “exactly one”. Counting roots needs a monotonicity argument on top.`
    ],
    proof: {
      idea: `<p>Take the case $f(a)<k<f(b)$. Look at the set of points where $f$ is still below
        $k$, and take its supremum: that is the last moment before the crossing. Then rule out
        both $f(c)<k$ and $f(c)>k$ using continuity.</p>`,
      why: `<p>The supremum is the natural candidate because it is the <i>first</i> point that
        cannot be below $k$ any longer. Continuity is then used twice, once to push each strict
        inequality into a neighbourhood — which is what makes both alternatives impossible.</p>`,
      rungs: [
        { why: 'Collect the points still below $k$; it is nonempty and bounded, so it has a supremum.',
          m: `$$ S=\\{x\\in[a,b]: f(x)<k\\},\\qquad a\\in S,\\qquad c=\\sup S. $$` },
        { why: 'Points of $S$ climb to $c$, so continuity forces $f(c)\\le k$.',
          m: `$$ x_{n}\\in S,\\ x_{n}\\to c \\implies f(c)=\\lim f(x_{n})\\le k. $$` },
        { why: 'Suppose $f(c)<k$. Continuity keeps $f$ below $k$ on a whole interval to the right of $c$ — so $c$ was not an upper bound of $S$ after all.',
          m: `$$ \\exists\\delta>0:\\ f(x)<k \\ \\ \\forall x\\in(c,c+\\delta) \\implies c+\\tfrac{\\delta}{2}\\in S. $$` },
        { why: 'That contradicts $c=\\sup S$, and the case $c=b$ is excluded because $f(b)>k$.',
          m: `$$ \\text{contradiction} \\implies f(c)\\ge k. $$` }
      ],
      ends: `<p>Both inequalities hold, so $f(c)=k$. The case $f(b)<k<f(a)$ follows by applying
        this to $-f$ and $-k$.</p>`
    },
    cards: [
      { kind: 'state', q: "State Bolzano's Intermediate Value Theorem.",
        a: 'If $f$ is continuous on $[a,b]$ and $k$ lies strictly between $f(a)$ and $f(b)$, then $f(c)=k$ for some $c\\in(a,b)$.' },
      { kind: 'apply', q: 'Show $x^{3}-3x+1$ has a root in $(0,1)$.',
        a: '$p(0)=1>0$ and $p(1)=-1<0$, so by the Location of Roots case there is $c\\in(0,1)$ with $p(c)=0$.' },
      { kind: 'trap', q: 'Does the IVT tell you how many solutions $f(x)=k$ has?',
        a: 'No — only that at least one exists. Uniqueness needs strict monotonicity, e.g. $f\'>0$ on the interval.' }
    ] },

  { id: 'm.5.4.1', sec: '5.4', kind: 'definition', tier: 'core', mock: true,
    title: 'Uniform Continuity',
    oneLine: 'One δ must work everywhere on the set, not a fresh δ at each point.',
    statement: `<p>Let $A\\subseteq\\mathbb{R}$ and $f:A\\to\\mathbb{R}$. Then $f$ is <b>uniformly
      continuous on $A$</b> if for every $\\varepsilon>0$ there exists $\\delta>0$ such that for all
      $x,u\\in A$,</p>
      $$|x-u|<\\delta \\implies |f(x)-f(u)|<\\varepsilon.$$
      <p><b>Nonuniform Continuity Criterion.</b> $f$ fails to be uniformly continuous on $A$ if and
      only if there exist $\\varepsilon_{0}>0$ and sequences $(x_{n}),(u_{n})$ in $A$ with
      $|x_{n}-u_{n}|\\to0$ and $|f(x_{n})-f(u_{n})|\\ge\\varepsilon_{0}$ for all $n$.</p>`,
    intuition: `<p>Compare the definitions: continuity fixes $c$ first and then chooses $\\delta$, so
      $\\delta$ may shrink as $c$ moves. Uniform continuity demands one $\\delta$ good for the whole
      set at once.</p>
      <p>$f(x)=1/x$ on $(0,1)$ is the standard failure: near $0$ the graph steepens without limit,
      so no single $\\delta$ survives. Take $x_{n}=1/n$, $u_{n}=1/(n+1)$: the inputs close up but
      $|f(x_{n})-f(u_{n})|=1$ always.</p>`,
    needs: ['m.5.1.1'],
    traps: [
      `Uniform continuity is a property of $f$ <i>together with its set</i>. The same formula can be
       uniformly continuous on $[1,2]$ and not on $(0,1)$.`,
      `It is strictly weaker than Lipschitz: $\\sqrt{x}$ is uniformly continuous on $[0,1]$ but not
       Lipschitz there, since $(\\sqrt{x}-0)/(x-0)=1/\\sqrt{x}$ is unbounded.`,
      `“Pointwise continuous at every point” never upgrades itself to uniform without an extra
       hypothesis such as a closed bounded domain.`
    ],
    cards: [
      { kind: 'state', q: 'State the definition of uniform continuity of $f$ on $A$.',
        a: 'For every $\\varepsilon>0$ there exists $\\delta>0$ such that $|f(x)-f(u)|<\\varepsilon$ for all $x,u\\in A$ with $|x-u|<\\delta$.' },
      { kind: 'apply', q: 'Prove $f(x)=1/x$ is not uniformly continuous on $(0,1)$.',
        a: 'Take $x_{n}=1/n$, $u_{n}=1/(n+1)$. Then $|x_{n}-u_{n}|\\to0$ but $|f(x_{n})-f(u_{n})|=|n-(n+1)|=1$, so the Nonuniform Continuity Criterion applies with $\\varepsilon_{0}=1$.' },
      { kind: 'trap', q: 'How does the definition differ from continuity at every point of $A$?',
        a: 'The single $\\delta$ must serve all pairs of points; in pointwise continuity $\\delta$ may depend on the point.' }
    ] },

  { id: 'm.5.4.3', sec: '5.4', kind: 'theorem', tier: 'core', mock: true,
    title: 'Uniform Continuity Theorem',
    oneLine: 'Continuity on a closed bounded interval is automatically uniform.',
    statement: `<p>Let $I=[a,b]$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be
      continuous on $I$. Then $f$ is uniformly continuous on $I$.</p>`,
    intuition: `<p>The theorem buys uniformity with compactness. Suppose it failed: by the
      nonuniform criterion there are $\\varepsilon_{0}>0$ and $x_{n},u_{n}\\in I$ with
      $|x_{n}-u_{n}|\\to0$ but $|f(x_{n})-f(u_{n})|\\ge\\varepsilon_{0}$. Bolzano–Weierstrass gives a
      convergent subsequence $x_{n_{k}}\\to z$, closedness puts $z\\in I$, and $u_{n_{k}}\\to z$ too —
      so continuity at $z$ forces both image sequences to $f(z)$, contradicting the gap
      $\\varepsilon_{0}$.</p>`,
    needs: ['m.5.4.1', 'm.3.4.8'],
    traps: [
      `Both hypotheses on the interval matter: $1/x$ is continuous but not uniformly continuous on
       $(0,1)$, and $x^{2}$ is continuous but not uniformly continuous on $\\mathbb{R}$.`,
      `It gives uniform continuity, not a Lipschitz constant — $\\sqrt{x}$ on $[0,1]$ is the
       standard reminder.`,
      `The conclusion is about the closed interval you started with; restricting to a subinterval is
       fine, enlarging it is not.`
    ],
    proof: {
      idea: `<p>By contradiction. If uniform continuity fails, one $\\varepsilon_{0}$ survives every
        $\\delta$ — so take $\\delta=1/n$ and harvest <i>two</i> sequences that crowd together while
        their images stay apart. Bolzano–Weierstrass then pins them to the same point, where
        ordinary continuity is contradicted.</p>`,
      why: `<p>Uniform continuity is continuity with the $\\delta$ chosen before the point. Its
        negation therefore produces a pair of points, not one — and a pair is exactly what B–W can
        drag to a common limit on a closed bounded interval. Drop closedness and the limit escapes
        the interval, which is precisely how $1/x$ on $(0,1)$ evades the theorem.</p>`,
      rungs: [
        { why: 'Negate uniform continuity: some $\\varepsilon_0$ defeats every $\\delta$, so take $\\delta=1/n$.',
          m: `$$ |u_{n}-v_{n}|<\\tfrac1n \\quad\\text{but}\\quad |f(u_{n})-f(v_{n})|\\ge\\varepsilon_{0}. $$` },
        { why: '$(u_n)$ lives in $[a,b]$, so B–W gives a convergent subsequence with limit still inside.',
          m: `$$ u_{n_{k}}\\to z\\in[a,b]. $$` },
        { why: 'The partner sequence is dragged to the same limit, because the gap between them vanishes.',
          m: `$$ |v_{n_{k}}-z|\\le|v_{n_{k}}-u_{n_{k}}|+|u_{n_{k}}-z|\\to 0. $$` },
        { why: 'Continuity at $z$ sends both image sequences to $f(z)$, so their difference dies.',
          m: `$$ |f(u_{n_{k}})-f(v_{n_{k}})|\\longrightarrow |f(z)-f(z)|=0. $$` }
      ],
      ends: `<p>But that difference was never allowed below $\\varepsilon_{0}$ — a contradiction.
        So $f$ is uniformly continuous on $[a,b]$.</p>`
    },
    cards: [
      { kind: 'state', q: 'State the Uniform Continuity Theorem.',
        a: 'If $f$ is continuous on a closed bounded interval $[a,b]$, then $f$ is uniformly continuous on $[a,b]$.' },
      { kind: 'recall', q: 'Which theorem powers the standard proof?',
        a: 'Bolzano–Weierstrass: extract a convergent subsequence from the witnessing sequence, then use closedness and continuity at its limit.' },
      { kind: 'trap', q: 'Does continuity on $(0,1)$ give uniform continuity?',
        a: 'No — $1/x$ is the counterexample. The interval must be closed and bounded.' }
    ] },

  { id: 'm.6.2.4', sec: '6.2', kind: 'theorem', tier: 'core', mock: true,
    title: "Lagrange's Mean Value Theorem",
    oneLine: 'Somewhere inside, the tangent is parallel to the chord.',
    statement: `<p>Let $f$ be continuous on $[a,b]$ and differentiable on $(a,b)$. Then there exists
      $c\\in(a,b)$ such that</p>
      $$f(b)-f(a)=f'(c)\\,(b-a).$$`,
    intuition: `<p>The average rate of change over $[a,b]$ is achieved as an instantaneous rate
      somewhere strictly inside. Rolle's Theorem is the special case $f(a)=f(b)$, and the general
      case follows by subtracting the chord from $f$.</p>
      <p>Its real use is turning information about $f'$ into information about $f$: $f'=0$ on an
      interval gives $f$ constant, $f'>0$ gives $f$ strictly increasing, and bounds on $f'$ give
      Lipschitz bounds on $f$.</p>`,
    needs: ['m.5.3.4'],
    traps: [
      `Differentiability is required only on the open interval $(a,b)$ — which is why the theorem
       still applies to $f(x)=\\sqrt{x}$ on $[0,1]$ even though $f'$ blows up at $0$.`,
      `Continuity on the <i>closed</i> interval cannot be dropped, and differentiability cannot be
       dropped inside: $f(x)=|x|$ on $[-1,1]$ has no point where $f'(c)=0$.`,
      `The point $c$ is neither unique nor computable in general; the theorem asserts existence.`
    ],
    proof: {
      idea: `<p>Tilt the picture. Subtract the chord from $f$; what is left has equal values at the
        endpoints, so Rolle's Theorem applies, and Rolle's conclusion translates straight back into
        the Mean Value Theorem.</p>`,
      why: `<p>Rolle is the special case with a horizontal chord, and every proof of the MVT is
        some version of "rotate until the chord is level". Building the auxiliary function
        explicitly is worth the two lines — it is the step examiners look for.</p>`,
      rungs: [
        { why: 'Subtract the chord through the endpoints from $f$.',
          m: `$$ \\varphi(x)=f(x)-f(a)-\\frac{f(b)-f(a)}{b-a}\\,(x-a). $$` },
        { why: '$\\varphi$ inherits continuity on $[a,b]$ and differentiability on $(a,b)$, because the subtracted part is a polynomial.',
          m: `$$ \\varphi\\in C[a,b],\\qquad \\varphi\\ \\text{differentiable on}\\ (a,b). $$` },
        { why: 'Check the endpoints: both give zero, which is exactly Rolle\u2019s hypothesis.',
          m: `$$ \\varphi(a)=0,\\qquad \\varphi(b)=f(b)-f(a)-\\big(f(b)-f(a)\\big)=0. $$` },
        { why: 'Rolle supplies an interior point where the derivative vanishes.',
          m: `$$ \\exists c\\in(a,b):\\ \\varphi'(c)=0. $$` },
        { why: 'Differentiate the definition of $\\varphi$ and set it to zero at $c$.',
          m: `$$ \\varphi'(x)=f'(x)-\\frac{f(b)-f(a)}{b-a}. $$` }
      ],
      ends: `<p>Therefore $f'(c)=\\dfrac{f(b)-f(a)}{b-a}$. Differentiability is required only on the
        <i>open</i> interval, which is why the theorem still applies to $\\sqrt{x}$ on $[0,1]$.</p>`
    },
    cards: [
      { kind: 'state', q: "State Lagrange's Mean Value Theorem.",
        a: 'If $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, then $f(b)-f(a)=f\'(c)(b-a)$ for some $c\\in(a,b)$.' },
      { kind: 'apply', q: 'Find the MVT point $c$ for $f(x)=x^{2}$ on $[1,3]$.',
        a: '$f\'(c)=\\frac{9-1}{3-1}=4$ and $f\'(c)=2c$, so $c=2$ — the midpoint, as always for a quadratic.' },
      { kind: 'trap', q: 'Why does the MVT not apply to $f(x)=|x|$ on $[-1,1]$?',
        a: '$f$ is not differentiable at $0\\in(-1,1)$. Indeed no $c$ has $f\'(c)=0$, so the conclusion genuinely fails.' }
    ] }

);

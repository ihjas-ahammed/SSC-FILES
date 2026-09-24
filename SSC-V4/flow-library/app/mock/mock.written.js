/* ══════════════════════════════════════════════════════════════════════════
   MOCK Level 3 exercises — placeholder, not production content.

   Level 3 is the exercise set: a section is only finished when every exercise
   filed against it has been worked through. These eighteen are written in the
   shape of Bartle & Sherbert's end-of-section exercises so the Level 3 loop
   can be exercised before the real extraction lands — three per mock section,
   which is what makes a section reachable at all. They are standard textbook
   problems, stated correctly, but they are NOT the real bank: AGY extracts
   every exercise from Bartle section by section (HOOK_agy.md → "Level 3").

   Record shape (the app reads exactly these fields):
     { id, sec, marks, title, prompt, approach, solution, trap, tests: [id] }

   `sec` files the exercise under a section directly; `tests` files it under
   the concepts it examines, and the app indexes it under BOTH. Progress is
   stored against 'w:<id>', so ids are permanent — see HOOK_agy.md rule 1.
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(

  /* ── §2.3 · completeness, suprema and infima ────────────────────────────── */
  { id: 'w.2.3.1', sec: '2.3', marks: 4, mock: true,
    title: 'Exercise 2.3.1 — locate the bounds',
    prompt: `<p>Let $S=\\left\\{\\,1-\\dfrac{(-1)^{n}}{n}\\ :\\ n\\in\\mathbb{N}\\,\\right\\}$.
      Find $\\sup S$ and $\\inf S$, and say whether each is attained.</p>`,
    approach: `<p>Split on the parity of $n$ rather than trying to handle the set at once.
      For even $n$ the terms are $1-\\frac1n$; for odd $n$ they are $1+\\frac1n$. Each family is
      monotone, so each has an obvious extreme member — and the extremes of the two families are
      the extremes of the union.</p>`,
    solution: `<p>For even $n$, $x_n=1-\\frac1n$, which increases from $x_2=\\tfrac12$ towards $1$.
      For odd $n$, $x_n=1+\\frac1n$, which decreases from $x_1=2$ towards $1$.</p>
      <p>Every element is therefore at least $\\tfrac12$ and at most $2$, so $\\tfrac12$ is a lower
      bound and $2$ an upper bound. Both are elements of $S$ (take $n=2$ and $n=1$), so they are
      the infimum and the supremum and both are attained:</p>
      $$\\inf S=\\tfrac12=\\min S,\\qquad \\sup S=2=\\max S.$$`,
    trap: `The two subsequences both converge to $1$, and it is tempting to answer $1$ for one of
      the bounds. $1$ is neither: it is the only cluster point, and a cluster point has nothing to
      do with a bound.`,
    tests: ['m.2.3.2'] },

  { id: 'w.2.3.2', sec: '2.3', marks: 6, mock: true,
    title: 'Exercise 2.3.2 — the supremum of a union',
    prompt: `<p>Let $A$ and $B$ be nonempty subsets of $\\mathbb{R}$ that are bounded above.
      Prove that $A\\cup B$ is bounded above and that
      $$\\sup(A\\cup B)=\\max\\{\\sup A,\\ \\sup B\\}.$$</p>`,
    approach: `<p>Write $u=\\sup A$, $v=\\sup B$ and $w=\\max\\{u,v\\}$. Two inequalities are owed:
      $w$ is an upper bound of $A\\cup B$, and no smaller number is. Get the second one from the
      fact that $w$ equals one of $u,v$, and that one is a LEAST upper bound of its own set.</p>`,
    solution: `<p>Put $u=\\sup A$, $v=\\sup B$, $w=\\max\\{u,v\\}$.</p>
      <p><b>$w$ is an upper bound.</b> Let $x\\in A\\cup B$. If $x\\in A$ then $x\\le u\\le w$; if
      $x\\in B$ then $x\\le v\\le w$. So $A\\cup B$ is bounded above by $w$ and, being nonempty,
      has a supremum.</p>
      <p><b>$w$ is the least one.</b> Say $w=u$ (the other case is identical with $B$). If $z$ is
      any upper bound of $A\\cup B$ then $z$ is in particular an upper bound of $A$, and since
      $u=\\sup A$ is the least upper bound of $A$ we get $u\\le z$, i.e. $w\\le z$.</p>
      <p>Hence $w$ is an upper bound no larger than every other upper bound, which is exactly
      $\\sup(A\\cup B)=w$.</p>`,
    trap: `Writing $\\sup(A\\cup B)=\\sup A+\\sup B$, or trying to prove it for the INTERSECTION by
      the same argument. For $A\\cap B$ no equality holds at all — the intersection can be empty.`,
    tests: ['m.2.3.2', 'm.2.3.6'] },

  { id: 'w.2.3.3', sec: '2.3', marks: 5, mock: true,
    title: 'Exercise 2.3.3 — translating a set',
    prompt: `<p>Let $S\\subseteq\\mathbb{R}$ be nonempty and bounded above, let $a\\in\\mathbb{R}$,
      and set $a+S=\\{\\,a+s : s\\in S\\,\\}$. Prove that $\\sup(a+S)=a+\\sup S$.</p>`,
    approach: `<p>The $\\varepsilon$-characterisation is the efficient route: $u=\\sup S$ exactly
      when $u$ is an upper bound and, for every $\\varepsilon>0$, some $s\\in S$ exceeds
      $u-\\varepsilon$. Translation moves both halves of that by $a$ and changes nothing else.</p>`,
    solution: `<p>Let $u=\\sup S$.</p>
      <p><b>Upper bound.</b> Every element of $a+S$ is $a+s$ with $s\\le u$, so $a+s\\le a+u$.</p>
      <p><b>Least.</b> Let $\\varepsilon>0$. Since $u=\\sup S$ there is $s_\\varepsilon\\in S$ with
      $u-\\varepsilon < s_\\varepsilon$, hence
      $$(a+u)-\\varepsilon < a+s_\\varepsilon\\in a+S.$$
      So no number below $a+u$ is an upper bound of $a+S$.</p>
      <p>Both halves of the characterisation hold, so $\\sup(a+S)=a+u=a+\\sup S$.</p>`,
    trap: `The same proof for $aS=\\{as\\}$ is FALSE when $a<0$: multiplying by a negative number
      reverses the order, and $\\sup(aS)=a\\inf S$ there. Translation is order-preserving; scaling
      is not.`,
    tests: ['m.2.3.2', 'm.2.3.6'] },

  /* ── §3.4 · subsequences and Bolzano–Weierstrass ────────────────────────── */
  { id: 'w.3.4.1', sec: '3.4', marks: 4, mock: true,
    title: 'Exercise 3.4.1 — divergence by two subsequences',
    prompt: `<p>Show that the sequence $x_n=(-1)^{n}$ is divergent, by exhibiting two
      subsequences with different limits.</p>`,
    approach: `<p>A convergent sequence has every subsequence converging to the same limit. So
      one pair of subsequences with different limits settles it — no $\\varepsilon$ argument is
      needed.</p>`,
    solution: `<p>The even-indexed subsequence is $x_{2k}=1$ for all $k$, so $x_{2k}\\to 1$. The
      odd-indexed subsequence is $x_{2k-1}=-1$ for all $k$, so $x_{2k-1}\\to -1$.</p>
      <p>If $(x_n)$ converged to some $L$, every subsequence would converge to $L$, giving
      $L=1$ and $L=-1$ at once. Hence $(x_n)$ diverges.</p>`,
    trap: `"The terms do not settle down" is not a proof. The divergence criterion needs two named
      subsequences with two named limits.`,
    tests: ['m.3.4.8'] },

  { id: 'w.3.4.2', sec: '3.4', marks: 7, mock: true,
    title: 'Exercise 3.4.2 — one limit for every subsequence',
    prompt: `<p>Let $(x_n)$ be a bounded sequence and suppose every convergent subsequence of
      $(x_n)$ converges to the same number $L$. Prove that $x_n\\to L$.</p>`,
    approach: `<p>Argue by contradiction and let Bolzano–Weierstrass do the work. If $x_n\\not\\to
      L$ then some $\\varepsilon_0>0$ is escaped infinitely often; those escaping terms form a
      bounded sequence, so they have a convergent subsequence — whose limit cannot be $L$.</p>`,
    solution: `<p>Suppose $x_n\\not\\to L$. Then there is $\\varepsilon_0>0$ such that for every
      $K\\in\\mathbb{N}$ there is $n\\ge K$ with $|x_n-L|\\ge\\varepsilon_0$. Choosing
      $K=1,2,3,\\ldots$ in turn gives indices $n_1<n_2<\\cdots$ with
      $$|x_{n_k}-L|\\ge\\varepsilon_0 \\quad\\text{for all } k.$$</p>
      <p>$(x_{n_k})$ is a subsequence of a bounded sequence, hence bounded, so by
      Bolzano–Weierstrass it has a convergent subsequence $(x_{n_{k_j}})$, say with limit $M$.
      That is also a subsequence of $(x_n)$, so by hypothesis $M=L$.</p>
      <p>But $|x_{n_{k_j}}-L|\\ge\\varepsilon_0$ for every $j$, and letting $j\\to\\infty$ gives
      $|M-L|\\ge\\varepsilon_0>0$ — a contradiction. Hence $x_n\\to L$.</p>`,
    trap: `Boundedness is doing real work here and must be used: without it the statement fails
      for $x_n = n$ when $n$ is odd and $x_n = 0$ when $n$ is even, whose only convergent
      subsequences tend to $0$.`,
    tests: ['m.3.4.8'] },

  { id: 'w.3.4.3', sec: '3.4', marks: 3, mock: true,
    title: 'Exercise 3.4.3 — a convergent subsequence of $(\\sin n)$',
    prompt: `<p>Show that the sequence $x_n=\\sin n$ has a convergent subsequence, without
      computing any limit.</p>`,
    approach: `<p>This is Bolzano–Weierstrass applied literally. The only thing to check is the
      hypothesis.</p>`,
    solution: `<p>For every $n\\in\\mathbb{N}$, $|\\sin n|\\le 1$, so $(x_n)$ is bounded.</p>
      <p>By the Bolzano–Weierstrass Theorem every bounded sequence of real numbers has a
      convergent subsequence, so $(\\sin n)$ has one.</p>`,
    trap: `Trying to identify the limit. Bolzano–Weierstrass is an existence theorem and names
      nothing; the limit here depends on how the integers distribute modulo $2\\pi$.`,
    tests: ['m.3.4.8'] },

  /* ── §5.1 · continuous functions ────────────────────────────────────────── */
  { id: 'w.5.1.1', sec: '5.1', marks: 6, mock: true,
    title: 'Exercise 5.1.1 — $x^{2}$ from the definition',
    prompt: `<p>Use the $\\varepsilon$-$\\delta$ definition to prove that $f(x)=x^{2}$ is
      continuous at every $c\\in\\mathbb{R}$.</p>`,
    approach: `<p>Factor $x^{2}-c^{2}=(x-c)(x+c)$ and control the second factor by agreeing in
      advance that $|x-c|<1$. That turns an unbounded factor into a constant, and the constant is
      what goes into $\\delta$.</p>`,
    solution: `<p>Fix $c$ and let $\\varepsilon>0$. For $|x-c|<1$ we have $|x|<|c|+1$, hence
      $$|x+c|\\le|x|+|c| < 2|c|+1.$$</p>
      <p>Put $\\delta=\\min\\left\\{1,\\ \\dfrac{\\varepsilon}{2|c|+1}\\right\\}>0$. If
      $|x-c|<\\delta$ then both constraints hold and
      $$|x^{2}-c^{2}| = |x-c|\\,|x+c| < \\delta\\,(2|c|+1) \\le \\varepsilon.$$</p>
      <p>Since $\\varepsilon>0$ was arbitrary, $f$ is continuous at $c$; and $c$ was arbitrary.</p>`,
    trap: `Taking $\\delta=\\varepsilon/|x+c|$. $\\delta$ may depend on $\\varepsilon$ and on $c$,
      never on $x$ — $x$ is the variable the inequality is about.`,
    tests: ['m.5.1.1'] },

  { id: 'w.5.1.2', sec: '5.1', marks: 6, mock: true,
    title: 'Exercise 5.1.2 — Dirichlet, by the sequential criterion',
    prompt: `<p>Let $f(x)=1$ for $x\\in\\mathbb{Q}$ and $f(x)=0$ for $x\\notin\\mathbb{Q}$. Prove
      that $f$ is continuous at no point of $\\mathbb{R}$.</p>`,
    approach: `<p>Density gives two sequences at every point — one rational, one irrational —
      both converging to it. The sequential criterion then compares two images that cannot
      agree.</p>`,
    solution: `<p>Let $c\\in\\mathbb{R}$.</p>
      <p>By the density of $\\mathbb{Q}$ there is a sequence $(r_n)$ of rationals with
      $r_n\\to c$; by the density of the irrationals there is a sequence $(s_n)$ of irrationals
      with $s_n\\to c$.</p>
      <p>Then $f(r_n)=1\\to 1$ and $f(s_n)=0\\to 0$. If $f$ were continuous at $c$, the sequential
      criterion would force $f(r_n)\\to f(c)$ and $f(s_n)\\to f(c)$, giving $f(c)=1$ and
      $f(c)=0$.</p>
      <p>That is impossible, so $f$ is discontinuous at $c$ — and $c$ was arbitrary.</p>`,
    trap: `Only producing the rational sequence. One sequence whose images converge proves
      nothing; the criterion is broken by a DISAGREEING pair.`,
    tests: ['m.5.1.3'] },

  { id: 'w.5.1.3', sec: '5.1', marks: 5, mock: true,
    title: 'Exercise 5.1.3 — sign is preserved locally',
    prompt: `<p>Suppose $f$ is continuous at $c$ and $f(c)>0$. Prove there is $\\delta>0$ such
      that $f(x)>0$ for every $x$ in the domain with $|x-c|<\\delta$.</p>`,
    approach: `<p>The whole exercise is the choice of $\\varepsilon$. Pick it so that the
      $\\varepsilon$-neighbourhood of $f(c)$ sits strictly inside the positive numbers —
      $\\varepsilon=\\tfrac12 f(c)$ does it.</p>`,
    solution: `<p>Let $\\varepsilon=\\tfrac12 f(c)>0$. By continuity at $c$ there is $\\delta>0$
      such that $|x-c|<\\delta$ (and $x$ in the domain) implies
      $$|f(x)-f(c)|<\\tfrac12 f(c).$$</p>
      <p>The left-hand inequality of that absolute value gives
      $$f(x) > f(c)-\\tfrac12 f(c) = \\tfrac12 f(c) > 0.$$</p>
      <p>So $f$ is strictly positive on that whole neighbourhood, and in fact bounded below
      there by $\\tfrac12 f(c)$.</p>`,
    trap: `Choosing $\\varepsilon=f(c)$ gives only $f(x)>0$ with no margin, and the strict
      inequality is then lost at the endpoint of the estimate. Half the value is the standard
      choice for a reason.`,
    tests: ['m.5.1.1', 'm.5.1.3'] },

  /* ── §5.3 · continuous functions on intervals ───────────────────────────── */
  { id: 'w.5.3.1', sec: '5.3', marks: 4, mock: true,
    title: 'Exercise 5.3.1 — where boundedness fails',
    prompt: `<p>Show that $f(x)=1/x$ is continuous and unbounded on $(0,1]$. Which hypothesis of
      the Boundedness Theorem fails?</p>`,
    approach: `<p>Continuity on the interval is the algebra of continuous functions. Unboundedness
      needs one explicit sequence. Then read the theorem's hypotheses and say which word is
      missing.</p>`,
    solution: `<p>On $(0,1]$ the denominator never vanishes, so $f$ is continuous there as a
      quotient of continuous functions.</p>
      <p>Take $x_n=1/n$ for $n\\ge 1$. Then $x_n\\in(0,1]$ and $f(x_n)=n$, so $f$ takes values
      above every bound and is unbounded.</p>
      <p>The Boundedness Theorem requires a CLOSED BOUNDED interval $[a,b]$. Here the interval is
      bounded but not closed: the endpoint $0$ is missing, and it is exactly the point the
      function blows up at.</p>`,
    trap: `Saying "the function is not continuous at $0$". $0$ is not in the domain, so there is
      nothing to be continuous or discontinuous at — the failure is in the interval, not in $f$.`,
    tests: ['m.5.3.4'] },

  { id: 'w.5.3.2', sec: '5.3', marks: 6, mock: true,
    title: 'Exercise 5.3.2 — every odd-degree polynomial has a root',
    prompt: `<p>Let $p(x)=a_{2k+1}x^{2k+1}+\\cdots+a_1x+a_0$ with $a_{2k+1}\\ne 0$. Prove that $p$
      has at least one real root.</p>`,
    approach: `<p>The leading term decides the sign far out in both directions, and it decides it
      differently because the degree is odd. Find one point where $p$ is negative and one where it
      is positive, then apply Bolzano's theorem on the interval between them.</p>`,
    solution: `<p>Assume $a_{2k+1}>0$ (otherwise apply the argument to $-p$, which has the same
      roots). Writing
      $$p(x)=x^{2k+1}\\left(a_{2k+1}+\\frac{a_{2k}}{x}+\\cdots+\\frac{a_0}{x^{2k+1}}\\right),$$
      the bracket tends to $a_{2k+1}>0$ as $|x|\\to\\infty$, so for all large $|x|$ it is positive.
      Since $x^{2k+1}$ is positive for large positive $x$ and negative for large negative $x$,
      there are $b>0$ with $p(b)>0$ and $a<0$ with $p(a)<0$.</p>
      <p>$p$ is a polynomial, hence continuous on $[a,b]$, and $p(a)<0<p(b)$. By Bolzano's
      Location of Roots Theorem there is $c\\in(a,b)$ with $p(c)=0$.</p>`,
    trap: `The argument uses oddness twice over, and it is worth saying where: an even-degree
      polynomial has the same sign at both ends, and $x^{2}+1$ shows the conclusion then fails.`,
    tests: ['m.5.3.7'] },

  { id: 'w.5.3.3', sec: '5.3', marks: 5, mock: true,
    title: 'Exercise 5.3.3 — a continuous self-map has a fixed point',
    prompt: `<p>Let $f:[0,1]\\to[0,1]$ be continuous. Prove that there is $c\\in[0,1]$ with
      $f(c)=c$.</p>`,
    approach: `<p>A fixed point of $f$ is a zero of $g(x)=f(x)-x$. Check the sign of $g$ at the
      two endpoints and the intermediate value theorem finishes it.</p>`,
    solution: `<p>Define $g(x)=f(x)-x$ on $[0,1]$; it is continuous as a difference of continuous
      functions.</p>
      <p>Since $f(0)\\in[0,1]$ we have $g(0)=f(0)-0\\ge 0$. Since $f(1)\\in[0,1]$ we have
      $g(1)=f(1)-1\\le 0$.</p>
      <p>If $g(0)=0$ then $c=0$ works; if $g(1)=0$ then $c=1$ works. Otherwise $g(0)>0>g(1)$ and
      Bolzano's theorem gives $c\\in(0,1)$ with $g(c)=0$, i.e. $f(c)=c$.</p>`,
    trap: `Forgetting the two boundary cases. $g(0)\\ge 0$ and $g(1)\\le 0$ are not strict, and the
      Location of Roots Theorem needs strict opposite signs — so the equalities have to be
      disposed of first.`,
    tests: ['m.5.3.7'] },

  /* ── §5.4 · uniform continuity ──────────────────────────────────────────── */
  { id: 'w.5.4.1', sec: '5.4', marks: 5, mock: true,
    title: 'Exercise 5.4.1 — $1/x$ is not uniformly continuous on $(0,1)$',
    prompt: `<p>Show that $f(x)=1/x$ is not uniformly continuous on $(0,1)$.</p>`,
    approach: `<p>Use the Nonuniform Continuity Criterion: produce $\\varepsilon_0>0$ and two
      sequences $(x_n),(u_n)$ in the set with $x_n-u_n\\to 0$ but $|f(x_n)-f(u_n)|\\ge
      \\varepsilon_0$.</p>`,
    solution: `<p>Take $x_n=\\dfrac{1}{n}$ and $u_n=\\dfrac{1}{n+1}$ for $n\\ge 1$; both lie in
      $(0,1)$ and
      $$x_n-u_n=\\frac{1}{n}-\\frac{1}{n+1}=\\frac{1}{n(n+1)}\\to 0.$$</p>
      <p>But $f(x_n)-f(u_n)=n-(n+1)=-1$, so $|f(x_n)-f(u_n)|=1$ for every $n$.</p>
      <p>With $\\varepsilon_0=1$ the Nonuniform Continuity Criterion applies: $f$ is not uniformly
      continuous on $(0,1)$, even though it is continuous at every point of it.</p>`,
    trap: `Concluding that $f$ is discontinuous somewhere. It is continuous at every point of
      $(0,1)$; what fails is that one $\\delta$ cannot serve the whole set at once.`,
    tests: ['m.5.4.1'] },

  { id: 'w.5.4.2', sec: '5.4', marks: 6, mock: true,
    title: 'Exercise 5.4.2 — $x^{2}$ on a bounded interval and on $\\mathbb{R}$',
    prompt: `<p>Show that $f(x)=x^{2}$ is uniformly continuous on $[0,b]$ for every $b>0$, but not
      uniformly continuous on $\\mathbb{R}$.</p>`,
    approach: `<p>On $[0,b]$ the factor $|x+u|$ is bounded by $2b$, which makes $\\delta$
      independent of the point — or quote the Uniform Continuity Theorem. On $\\mathbb{R}$ that
      bound is exactly what is lost, so hunt for two sequences drifting apart in value while
      closing in position.</p>`,
    solution: `<p><b>On $[0,b]$.</b> For $x,u\\in[0,b]$,
      $$|x^{2}-u^{2}|=|x-u|\\,|x+u|\\le 2b\\,|x-u|.$$
      Given $\\varepsilon>0$ take $\\delta=\\varepsilon/(2b)$, which depends on $\\varepsilon$ and
      $b$ only. (Equivalently: $[0,b]$ is a closed bounded interval and $f$ is continuous on it,
      so the Uniform Continuity Theorem applies.)</p>
      <p><b>On $\\mathbb{R}$.</b> Take $x_n=n+\\dfrac1n$ and $u_n=n$. Then $x_n-u_n=\\dfrac1n\\to
      0$, while
      $$x_n^{2}-u_n^{2}=\\left(n+\\tfrac1n\\right)^{2}-n^{2}=2+\\tfrac{1}{n^{2}}\\ge 2.$$
      With $\\varepsilon_0=2$ the Nonuniform Continuity Criterion applies.</p>`,
    trap: `"Continuous on $\\mathbb{R}$, and $\\mathbb{R}$ is closed, so the Uniform Continuity
      Theorem applies." The theorem needs closed AND BOUNDED; $\\mathbb{R}$ is not bounded.`,
    tests: ['m.5.4.1', 'm.5.4.3'] },

  { id: 'w.5.4.3', sec: '5.4', marks: 6, mock: true,
    title: 'Exercise 5.4.3 — Cauchy sequences are preserved',
    prompt: `<p>Let $f$ be uniformly continuous on $A\\subseteq\\mathbb{R}$ and let $(x_n)$ be a
      Cauchy sequence in $A$. Prove that $(f(x_n))$ is a Cauchy sequence.</p>`,
    approach: `<p>Uniform continuity hands you one $\\delta$ for the whole set; the Cauchy property
      hands you an index past which all terms are within $\\delta$ of each other. Line the two up in
      that order — $\\varepsilon$, then $\\delta$, then $K$.</p>`,
    solution: `<p>Let $\\varepsilon>0$. By uniform continuity there is $\\delta>0$ such that
      $$u,v\\in A,\\ |u-v|<\\delta \\ \\Longrightarrow\\ |f(u)-f(v)|<\\varepsilon.$$</p>
      <p>Since $(x_n)$ is Cauchy there is $K\\in\\mathbb{N}$ such that $|x_n-x_m|<\\delta$ for all
      $n,m\\ge K$.</p>
      <p>For such $n,m$ both terms lie in $A$ and are within $\\delta$, so
      $|f(x_n)-f(x_m)|<\\varepsilon$. As $\\varepsilon>0$ was arbitrary, $(f(x_n))$ is Cauchy.</p>`,
    trap: `Mere continuity is not enough, and the same $f(x)=1/x$ on $(0,1)$ shows it: $x_n=1/n$ is
      Cauchy there while $f(x_n)=n$ is not. The one $\\delta$ that serves all of $A$ is the whole
      content of the proof.`,
    tests: ['m.5.4.1', 'm.5.4.3'] },

  /* ── §6.2 · the Mean Value Theorem ──────────────────────────────────────── */
  { id: 'w.6.2.1', sec: '6.2', marks: 4, mock: true,
    title: 'Exercise 6.2.1 — sine is a contraction',
    prompt: `<p>Use the Mean Value Theorem to prove that
      $$|\\sin x-\\sin y|\\le|x-y|\\qquad\\text{for all }x,y\\in\\mathbb{R}.$$</p>`,
    approach: `<p>Apply the MVT to $\\sin$ on the interval between $x$ and $y$, then bound the
      derivative that appears. The bound $|\\cos c|\\le 1$ is the entire estimate.</p>`,
    solution: `<p>If $x=y$ both sides are $0$. Otherwise assume $y<x$ (relabel if needed).</p>
      <p>$\\sin$ is continuous on $[y,x]$ and differentiable on $(y,x)$, so by the Mean Value
      Theorem there is $c\\in(y,x)$ with
      $$\\sin x-\\sin y=(\\cos c)(x-y).$$</p>
      <p>Taking absolute values and using $|\\cos c|\\le 1$,
      $$|\\sin x-\\sin y|=|\\cos c|\\,|x-y|\\le |x-y|.$$</p>`,
    trap: `The MVT gives one $c$ that you do not get to choose, so nothing may be assumed about
      it beyond where it lies. Every estimate has to hold for EVERY admissible $c$.`,
    tests: ['m.6.2.4'] },

  { id: 'w.6.2.2', sec: '6.2', marks: 5, mock: true,
    title: 'Exercise 6.2.2 — a vanishing derivative',
    prompt: `<p>Let $f$ be differentiable on an interval $I$ with $f'(x)=0$ for every $x\\in I$.
      Prove that $f$ is constant on $I$.</p>`,
    approach: `<p>"Constant" means any two points have the same value, so take two and apply the
      MVT on the interval between them.</p>`,
    solution: `<p>Let $a,b\\in I$ with $a<b$. Since $I$ is an interval, $[a,b]\\subseteq I$, so $f$
      is continuous on $[a,b]$ and differentiable on $(a,b)$.</p>
      <p>By the Mean Value Theorem there is $c\\in(a,b)$ with
      $$f(b)-f(a)=f'(c)(b-a)=0\\cdot(b-a)=0,$$
      so $f(b)=f(a)$.</p>
      <p>Since $a,b$ were arbitrary, $f$ takes one value throughout $I$.</p>`,
    trap: `The hypothesis that $I$ is an INTERVAL is load-bearing. On the domain
      $(0,1)\\cup(2,3)$ a function can have zero derivative everywhere and still take two
      different values.`,
    tests: ['m.6.2.4'] },

  { id: 'w.6.2.3', sec: '6.2', marks: 6, mock: true,
    title: 'Exercise 6.2.3 — bracketing the logarithm',
    prompt: `<p>Prove that for every $x>0$,
      $$\\frac{x}{1+x} < \\ln(1+x) < x.$$</p>`,
    approach: `<p>Apply the MVT to $\\ln$ on $[1,1+x]$. The derivative is $1/t$, which is
      decreasing — so bounding $c$ between the endpoints bounds $1/c$ between the two reciprocals,
      and those are exactly the two sides asked for.</p>`,
    solution: `<p>Fix $x>0$ and let $g(t)=\\ln t$ on $[1,1+x]$. It is continuous there and
      differentiable on $(1,1+x)$ with $g'(t)=1/t$, so the Mean Value Theorem gives
      $c\\in(1,1+x)$ with
      $$\\ln(1+x)-\\ln 1=\\frac{1}{c}\\,\\big((1+x)-1\\big)=\\frac{x}{c},$$
      that is $\\ln(1+x)=x/c$.</p>
      <p>Since $1<c<1+x$ and $t\\mapsto 1/t$ is strictly decreasing on $(0,\\infty)$,
      $$\\frac{1}{1+x} < \\frac{1}{c} < 1.$$</p>
      <p>Multiplying through by $x>0$ preserves the strict inequalities and gives
      $$\\frac{x}{1+x} < \\ln(1+x) < x.$$</p>`,
    trap: `Multiplying an inequality by $x$ is only safe because $x>0$ was assumed. At $x=0$ every
      part is $0$ and the inequalities are equalities, which is why the statement is restricted to
      $x>0$.`,
    tests: ['m.6.2.4'] }

);

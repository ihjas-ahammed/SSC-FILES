/* RA1 nodes that Real Analysis II depends on */
CONCEPTS.push(

  { id:'c.2.4.3', bartle:'2.4.3', sec:'2.4', kind:'theorem', tier:'core',
    title:'The Archimedean Property',
    oneLine:'No real number is larger than every natural number — the naturals climb without limit.',
    statement:`<p><b>The Archimedean Property:</b> If $x\\in\\mathbb{R}$, then there exists $n_x\\in\\mathbb{N}$ such that $x\\le n_x$. Equivalently, the subset $\\mathbb{N}$ of natural numbers is not bounded above in $\\mathbb{R}$.</p>
      <p><b>Fundamental Corollaries (Equivalent Forms):</b></p>
      <p>• <b>(2.4.4) Infimum of Reciprocals:</b> If $S = \\{1/n : n \\in \\mathbb{N}\\}$, then $\\inf S = 0$.</p>
      <p>• <b>(2.4.5) Arbitrarily Small Reciprocals:</b> If $t > 0$, there exists $n_t \\in \\mathbb{N}$ such that $0 < \\dfrac{1}{n_t} < t$.</p>
      <p>• <b>(2.4.6) Squeeze Between Consecutive Integers:</b> If $y > 0$, there exists a unique natural number $n_y \\in \\mathbb{N}$ such that $n_y - 1 \\le y < n_y$.</p>`,
    intuition:`<p>However far out on the real line you point, the natural numbers $1,2,3,\\ldots$ eventually walk past that point. This looks obvious from a picture of the number line, but it cannot be proved from the algebraic and order axioms of $\\mathbb{R}$ alone — it genuinely needs the Completeness Property, together with the fact that $\\mathbb{N}$ is closed under adding $1$ (the Inductive Property).</p>
      <p><b>Worked micro-example:</b> given $x=1{,}000{,}000.5$, simply take $n_x=1{,}000{,}001\\in\\mathbb{N}$; the content of the theorem is that SOME such natural number always exists for every real $x$, not that a specific one is always easy to name.</p>`,
    needs:['c.2.3.2','c.2.3.6','s.contradiction'],
    traps:[
      `Treating this as "obvious" and therefore free of proof — it genuinely requires the Completeness Property; without completeness, an ordered field could contain elements bigger than every natural number.`,
      `Forgetting the Inductive Property of $\\mathbb{N}$ (if $m\\in\\mathbb{N}$ then $m+1\\in\\mathbb{N}$) is doing real work in the proof — it is what turns "$u-1$ is not an upper bound" into an actual contradiction.`
    ],
    proof:{
      idea:`Suppose, for contradiction, that some real number $x$ IS an upper bound for the whole of $\\mathbb{N}$. Then $\\mathbb{N}$ is a bounded-above set, so Completeness hands us its supremum $u$ — and $u-1$, being smaller than the least upper bound, must fail to be an upper bound, forcing a natural number past $u$ itself.`,
      why:`The proof is a single application of the Completeness Property to the specific set $\\mathbb{N}$: a number just below the supremum must be beaten by some element of the set, and here that margin is fixed at exactly $1$ so the Inductive Property can finish the job.`,
      rungs:[
        { why:`Negate the claim: suppose some real number $x$ IS an upper bound for the whole set $\\mathbb{N}$.`, m:`$$n\\le x \\ \\text{ for all } n\\in\\mathbb{N}$$` },
        { why:`Then $\\mathbb{N}$ is a nonempty subset of $\\mathbb{R}$ bounded above, so the Completeness Property applies.`, m:`$$u:=\\sup\\mathbb{N} \\text{ exists in } \\mathbb{R}$$` },
        { why:`$u-1$ is strictly smaller than the LEAST upper bound $u$, so it cannot itself be an upper bound of $\\mathbb{N}$.`, m:`$$u-1<u \\ \\Rightarrow\\ u-1 \\text{ is not an upper bound of } \\mathbb{N}$$` },
        { why:`"Not an upper bound" means some natural number slips past it.`, m:`$$\\exists\\, m\\in\\mathbb{N}: u-1 < m$$` },
        { why:`But $\\mathbb{N}$ is closed under $+1$ (Inductive Property), so $m+1$ is also a natural number — and it beats $u$.`, m:`$$m+1\\in\\mathbb{N}, \\qquad u < m+1$$` },
        { why:`This contradicts step 2: $u$ was supposed to be an upper bound of $\\mathbb{N}$, yet $m+1\\in\\mathbb{N}$ exceeds it.`, m:`$$u < m+1,\\ m+1\\in\\mathbb{N} \\ \\Rightarrow\\Leftarrow$$` }
      ],
      ends:`The assumption is impossible, so no real number bounds $\\mathbb{N}$ above — equivalently, for every $x\\in\\mathbb{R}$ there is some $n_x\\in\\mathbb{N}$ with $x\\le n_x$. This single fact drives every "choose $n$ large enough" argument later in the course, including $1/n\\to0$ and the density of $\\mathbb{Q}$ in $\\mathbb{R}$.`
    },
    cards:[
      { q:`State the Archimedean Property.`, a:`For every $x\\in\\mathbb{R}$ there exists $n_x\\in\\mathbb{N}$ with $x\\le n_x$ — i.e. $\\mathbb{N}$ is unbounded above.`, kind:'state' },
      { q:`What TWO facts about $\\mathbb{R}$ and $\\mathbb{N}$ does the proof combine?`, a:`The Completeness Property (to get $\\sup\\mathbb{N}$) and the Inductive Property of $\\mathbb{N}$ (to turn "$m$ beats $u-1$" into "$m+1$ beats $u$").`, kind:'recall' },
      { q:`Trap: is the Archimedean Property provable from the field and order axioms of $\\mathbb{R}$ alone?`, a:`No — it needs the Completeness Property; $\\mathbb{Q}$ itself is Archimedean too, so this specific property doesn't distinguish $\\mathbb{R}$ from $\\mathbb{Q}$, but the PROOF given here leans on completeness.`, kind:'trap' }
    ]
  },

  { id:'c.2.4.8', bartle:'2.4.8', sec:'2.4', kind:'theorem', tier:'core',
    title:'The Density Theorem (Rationals in ℝ)',
    oneLine:'Between any two distinct real numbers, however close, there is a rational number.',
    statement:`<p>If $x$ and $y$ are real numbers with $x < y$, then there exists a rational number $r \\in \\mathbb{Q}$ such that:
      $$x < r < y$$
      Consequently, between any two distinct real numbers there are infinitely many rational numbers; the set $\\mathbb{Q}$ is <b>dense</b> in $\\mathbb{R}$.</p>`,
    intuition:`<p>No matter how close together two numbers are — even $0.000000001$ apart — the rational fractions are so densely packed on the real line that at least one fraction (and in fact infinitely many) falls right into that gap.</p>
      <p>The trick: make the denominator $n$ large enough so the step size $1/n$ is strictly narrower than the gap $y - x$ (using Archimedean Corollary 2.4.5). Then the integer multiples $m/n$ march across the line with steps smaller than the gap, so at least one multiple $m/n$ is guaranteed to step right into $(x, y)$!</p>`,
    needs:['c.2.4.3','c.2.3.6'],
    traps:[
      `Confusing density with uncountability: $\\mathbb{Q}$ is dense in $\\mathbb{R}$, yet $\\mathbb{Q}$ is countable while $\\mathbb{R}$ is uncountable!`,
      `Forgetting that the theorem guarantees INFINITELY many rationals between $x$ and $y$, not just one.`
    ],
    proof:{
      idea:`Choose denominator $n$ so $1/n < y - x$, ensuring $ny - nx > 1$. Then the interval $(nx, ny)$ has length $> 1$, so it must contain an integer $m$. Then $r = m/n$ satisfies $x < r < y$.`,
      why:`An interval of length greater than $1$ must contain at least one integer. Scaling the gap $(x, y)$ by $n$ expands it to length $> 1$, and Corollary 2.4.6 provides the integer $m$.`,
      rungs:[
        { why:`Assume without loss of generality $x > 0$ (if $x \\le 0$, shift by an integer). Since $y - x > 0$, Corollary 2.4.5 supplies a denominator $n$.`, m:`$$y - x > 0 \\implies \\exists\\, n \\in \\mathbb{N}: \\frac{1}{n} < y - x \\iff nx + 1 < ny$$` },
        { why:`Apply Corollary 2.4.6 to $nx > 0$ to get the integer $m$ just above $nx$.`, m:`$$\\exists\\, m \\in \\mathbb{N}: m - 1 \\le nx < m$$` },
        { why:`From $m - 1 \\le nx$, we have $m \\le nx + 1$. Combine with $nx + 1 < ny$.`, m:`$$nx < m \\le nx + 1 < ny \\implies nx < m < ny$$` },
        { why:`Divide through by $n > 0$ to obtain the desired rational $r = m/n$.`, m:`$$x < \\frac{m}{n} < y \\implies r := \\frac{m}{n} \\in \\mathbb{Q} \\text{ with } x < r < y$$` }
      ],
      ends:`The rational $r = m/n$ lies strictly between $x$ and $y$. Repeating this process yields infinitely many rationals in $(x, y)$.`
    },
    cards:[
      { q:`State the Density Theorem for rational numbers.`, a:`If $x, y \\in \\mathbb{R}$ with $x < y$, there exists a rational number $r \\in \\mathbb{Q}$ such that $x < r < y$.`, kind:'state' },
      { q:`How is the denominator $n$ chosen in the proof of the Density Theorem?`, a:`By the Archimedean property such that $1/n < y - x$, so that $ny - nx > 1$.`, kind:'recall' },
      { q:`Trap: does density of a set imply that it is uncountable?`, a:`No — $\\mathbb{Q}$ is dense in $\\mathbb{R}$ but is countable.`, kind:'trap' }
    ]
  },

  { id:'c.2.4.9', bartle:'2.4.9', sec:'2.4', kind:'corollary', tier:'core',
    title:'Density of the irrationals in ℝ',
    oneLine:'Between any two distinct real numbers, however close, sits an irrational number.',
    statement:`<p>If $x,y\\in\\mathbb{R}$ with $x < y$, then there exists an irrational number $z$ such that $x < z< y$.</p>`,
    intuition:`<p>Bartle's Density Theorem (2.4.8) says the RATIONALS are dense in $\\mathbb{R}$: between any two reals sits a rational. This corollary says the irrationals are equally dense — the trick is to use a known irrational number ($\\sqrt2$) as a "yardstick" that converts one density statement into the other by scaling.</p>
      <p><b>Worked micro-example:</b> for $x=0$, $y=0.001$, apply the argument to $x/\\sqrt2=0$ and $y/\\sqrt2\\approx0.000707$ to get a rational $r$ in between (e.g. $r=0.0005$), giving the irrational $z=r\\sqrt2\\approx0.000707\\in(0,0.001)$.</p>`,
    needs:['c.2.4.8','c.2.4.3','s.contradiction'],
    traps:[
      `Assuming density of $\\mathbb{Q}$ automatically hands you density of the irrationals for free — it needs an actual argument (dividing by an irrational such as $\\sqrt2$), not just "there are more irrationals so obviously".`,
      `Forgetting to check the constructed $z=r\\sqrt2$ really is irrational — a NONZERO rational times an irrational number is always irrational, which is why $r\\ne0$ must be arranged.`
    ],
    proof:{
      idea:`Divide the whole problem by the known irrational $\\sqrt2$, apply the (already established) Density Theorem to find a rational in the rescaled gap, then multiply back through by $\\sqrt2$.`,
      why:`Scaling by $\\sqrt2$ turns "find an irrational between $x$ and $y$" into "find a rational between $x/\\sqrt2$ and $y/\\sqrt2$" — a problem the Density Theorem already solves, and multiplying a nonzero rational by $\\sqrt2$ always lands back on an irrational.`,
      rungs:[
        { why:`Rescale the target gap by the known irrational $\\sqrt2$ (Bartle 2.4.7).`, m:`$$\\frac{x}{\\sqrt2} < \\frac{y}{\\sqrt2}$$` },
        { why:`The Density Theorem (rationals dense in $\\mathbb{R}$) supplies a rational strictly between these rescaled endpoints; it can be taken nonzero since the gap contains infinitely many rationals.`, m:`$$\\exists\\, r\\in\\mathbb{Q},\\ r\\ne0:\\quad \\frac{x}{\\sqrt2} < r < \\frac{y}{\\sqrt2}$$` },
        { why:`Multiply back through by $\\sqrt2>0$ (positive, so the inequalities survive) to return to the original scale.`, m:`$$x < r\\sqrt2 < y$$` },
        { why:`Check $z:=r\\sqrt2$ is genuinely irrational: a nonzero rational times an irrational is always irrational.`, m:`$$z:=r\\sqrt2 \\ \\text{is irrational}, \\qquad x < z< y$$` }
      ],
      ends:`The irrationals are packed into $\\mathbb{R}$ just as densely as the rationals are — between any two reals, both a rational AND an irrational can always be found.`
    },
    cards:[
      { q:`State the density-of-irrationals corollary.`, a:`If $x < y$ are real numbers, there exists an irrational $z$ with $x < z< y$.`, kind:'state' },
      { q:`What known irrational number does the proof scale by, and why?`, a:`$\\sqrt2$ — dividing by it converts "find an irrational between $x,y$" into "find a rational between $x/\\sqrt2,\\,y/\\sqrt2$", which the Density Theorem already solves.`, kind:'recall' },
      { q:`Trap: why must the rational $r$ found be nonzero?`, a:`Because $r\\sqrt2$ is irrational only when $r\\ne0$ — if $r=0$ then $r\\sqrt2=0$ is rational, ruining the construction.`, kind:'trap' }
    ]
  },

  { id:'c.2.5.1', bartle:'2.5.1', sec:'2.5', kind:'theorem', tier:'core',
    title:'Characterization Theorem for intervals',
    oneLine:'A set with at least two points is an interval exactly when it contains every point squeezed between any two of its own points.',
    statement:`<p>Let $S\\subseteq\\mathbb{R}$ contain at least two points, with the property: if $x,y\\in S$ and $x < y$, then $[x,y]\\subseteq S$. Then $S$ is an interval.</p>`,
    intuition:`<p>This is the precise version of the everyday idea "an interval has no gaps": if two points belong to $S$, then EVERY point squeezed between them belongs too. What's surprising is the converse direction actually proved here — this "no gaps" property alone, with no reference to endpoints at all, is enough to force $S$ to be one of the familiar interval shapes.</p>
      <p><b>Worked micro-example:</b> $S=\\{x\\in\\mathbb{Q}: 0\\le x<1\\}$ (rationals only) satisfies "if $x,y\\in S,\\,x < y$" only vacuously in a misleading sense — actually it FAILS the hypothesis, since e.g. $[0,1/2]\\not\\subseteq S$ (irrationals in between are missing). This is why $S$ is not an interval, matching intuition.</p>`,
    needs:['c.2.3.1','c.2.3.2','s.interval'],
    traps:[
      `Thinking the defining property needs checking against points OUTSIDE $S$ — it doesn't; it only says that segments BETWEEN two points of $S$ must lie back inside $S$.`,
      `Forgetting the theorem covers unbounded intervals too — the bounded case (using $\\inf S,\\sup S$) is only one of four cases; boundedness above/below only, or neither, use $\\pm\\infty$ in place of a finite endpoint.`
    ],
    proof:{
      idea:`Handle the bounded case: set $a:=\\inf S$, $b:=\\sup S$; show every point strictly between $a$ and $b$ must already lie in $S$, then pin down which of the four interval shapes $S$ actually is depending on whether the endpoints belong.`,
      why:`Both $a$ and $b$ are LEAST/GREATEST bounds, so anything strictly between them fails to be a bound at all — which forces points of $S$ on both sides of it, and the "no gaps" hypothesis does the rest.`,
      rungs:[
        { why:`Bounded case: name the infimum and supremum; this immediately traps $S$ inside $[a,b]$.`, m:`$$a:=\\inf S,\\ b:=\\sup S \\ \\Rightarrow\\ S\\subseteq[a,b]$$` },
        { why:`Take any $z$ strictly between $a$ and $b$. Since $a$ is the GREATEST lower bound, anything bigger than it fails to be a lower bound — so some point of $S$ sits below $z$; symmetrically for $b$ and a point above $z$.`, m:`$$a < z<b \\ \\Rightarrow\\ \\exists x\\in S: x < z, \\quad \\exists y\\in S: z < y$$` },
        { why:`Now $x < z< y$ with $x,y\\in S$ — the hypothesis (property (1)) forces the WHOLE segment $[x,y]$, including $z$, into $S$.`, m:`$$x < z< y,\\ x,y\\in S \\ \\Rightarrow\\ z\\in[x,y]\\subseteq S$$` },
        { why:`$z$ was an arbitrary point of $(a,b)$, so the whole open interval sits inside $S$.`, m:`$$(a,b)\\subseteq S$$` },
        { why:`Combine with $S\\subseteq[a,b]$ from step 1; whether the endpoints $a,b$ themselves belong to $S$ determines which of the four interval types $S$ is.`, m:`$$(a,b)\\subseteq S\\subseteq[a,b] \\ \\Rightarrow\\ S\\in\\{(a,b),\\,[a,b),\\,(a,b],\\,[a,b]\\}$$` }
      ],
      ends:`In the bounded case $S$ is pinned to one of the four familiar shapes. The remaining three cases (bounded only above, only below, or neither) run the identical argument with $\\pm\\infty$ standing in for a missing finite endpoint.`
    },
    cards:[
      { q:`State the defining "no gaps" property used to characterise intervals.`, a:`If $x,y\\in S$ and $x < y$, then the whole segment $[x,y]$ is contained in $S$.`, kind:'state' },
      { q:`In the bounded case, what two numbers does the proof build the interval endpoints from?`, a:`$a:=\\inf S$ and $b:=\\sup S$.`, kind:'recall' },
      { q:`Trap: does $S=\\mathbb{Q}\\cap[0,1)$ satisfy the "no gaps" property?`, a:`No — e.g. $0,0.5\\in S$ but $[0,0.5]\\not\\subseteq S$ (irrationals in between are missing), so $S$ is correctly NOT classified as an interval.`, kind:'trap' }
    ]
  },

  { id:'c.2.5.2', bartle:'2.5.2', sec:'2.5', kind:'theorem', tier:'core',
    title:'Nested Intervals Property',
    oneLine:'An infinite chain of closed bounded intervals, each containing the next, always shares at least one common point.',
    statement:`<p>If $I_n=[a_n,b_n]$, $n\\in\\mathbb{N}$, is a nested sequence of closed bounded intervals (meaning $I_1\\supseteq I_2\\supseteq\\cdots\\supseteq I_n\\supseteq I_{n+1}\\supseteq\\cdots$), then there exists a number $\\xi\\in\\mathbb{R}$ such that $\\xi\\in I_n$ for all $n\\in\\mathbb{N}$.</p>`,
    intuition:`<p>Picture a chain of intervals, each one squeezed inside the last. Because they never grow, and because completeness rules out "gaps" in $\\mathbb{R}$, they can never squeeze a common point out of existence entirely — SOME real number survives in all of them at once. This fails badly for OPEN intervals: $(0,1/n)$ is nested but shares no common point at all, since any candidate point $x>0$ is eventually excluded once $1/n < x$.</p>
      <p><b>Worked micro-example:</b> $I_n=[0,1/n]$. Every $I_n$ contains $0$, and the Archimedean Property (<code>c.2.4.3</code>) shows $0$ is in fact the ONLY common point — but the Nested Intervals Property only guarantees existence of at least one, not uniqueness.</p>`,
    needs:['c.2.3.1','c.2.3.2','c.2.3.6'],
    traps:[
      `Forgetting the intervals must be CLOSED and BOUNDED — nested OPEN intervals like $(0,1/n)$, or nested rays like $(n,\\infty)$, can have EMPTY intersection.`,
      `Assuming the common point is unique — this theorem only guarantees existence; uniqueness needs the extra hypothesis that the interval lengths shrink to $0$ (Bartle's Theorem 2.5.3).`
    ],
    proof:{
      idea:`Collect all the LEFT endpoints $a_n$ into one set and let $\\xi$ be its supremum (which exists by Completeness). Then show $\\xi$ never exceeds any RIGHT endpoint $b_n$ either — so $\\xi$ lands inside every single interval at once.`,
      why:`Nestedness is exactly what lets any one interval's right endpoint act as an upper bound for ALL the left endpoints, early or late — that fact, combined with Completeness supplying a genuine least upper bound, is what manufactures the common point.`,
      rungs:[
        { why:`Collect all left endpoints into one set; nestedness ($I_n\\subseteq I_1$) makes $b_1$ an upper bound for the whole set.`, m:`$$\\{a_n : n\\in\\mathbb{N}\\}, \\qquad a_n\\le b_1 \\ \\text{ for all } n$$` },
        { why:`The set of left endpoints is nonempty and bounded above, so Completeness hands us its supremum.`, m:`$$\\xi := \\sup\\{a_n : n\\in\\mathbb{N}\\} \\ \\text{ exists}, \\qquad a_n\\le\\xi\\ \\text{ for all } n$$` },
        { why:`Fix one index $n$ and show $b_n$ is an upper bound for EVERY $a_k$ — split into two cases by which interval nests inside which.`, m:`$$\\text{if } n\\le k: I_k\\subseteq I_n \\Rightarrow a_k\\le b_k\\le b_n; \\qquad \\text{if } k < n: I_n\\subseteq I_k \\Rightarrow a_k\\le a_n\\le b_n$$` },
        { why:`Either way $a_k\\le b_n$ for every $k$, so $b_n$ is an upper bound of the whole set of left endpoints — hence at least as big as the LEAST such bound, $\\xi$.`, m:`$$b_n \\text{ upper-bounds } \\{a_k:k\\in\\mathbb{N}\\} \\ \\Rightarrow\\ \\xi\\le b_n$$` },
        { why:`This held for every $n$, so $\\xi$ sits between each interval's own two endpoints.`, m:`$$a_n\\le\\xi\\le b_n \\ \\text{ for all } n\\in\\mathbb{N}$$` },
        { why:`That is exactly membership in every $I_n$ simultaneously.`, m:`$$\\xi\\in I_n=[a_n,b_n] \\ \\text{ for all } n\\in\\mathbb{N}$$` }
      ],
      ends:`Completeness manufactures a genuine common point $\\xi$ for the whole nested chain, all at once. This is the tool behind Cantor's proof that $\\mathbb{R}$ is uncountable, and behind constructing real numbers as binary/decimal expansions via repeated bisection.`
    },
    cards:[
      { q:`State the Nested Intervals Property.`, a:`If $I_n=[a_n,b_n]$ is a nested sequence of closed bounded intervals, some $\\xi\\in\\mathbb{R}$ lies in every $I_n$.`, kind:'state' },
      { q:`Why does the theorem fail for nested OPEN intervals like $(0,1/n)$?`, a:`Because for any candidate $x>0$, the Archimedean Property gives $n$ with $1/n < x$, so $x\\notin(0,1/n)$ — no common point survives; the closedness of each $I_n$ is essential to the proof.`, kind:'trap' },
      { q:`How is $\\xi$ constructed in the proof?`, a:`$\\xi:=\\sup\\{a_n:n\\in\\mathbb{N}\\}$ — the supremum of all the left endpoints, which exists by Completeness.`, kind:'recall' }
    ]
  },

  { id:'c.2.5.3', bartle:'2.5.3', sec:'2.5', kind:'theorem', tier:'core',
    title:'Nested Intervals Theorem: Uniqueness of Common Point',
    oneLine:'If nested closed bounded intervals have lengths shrinking to 0, their intersection is exactly one point.',
    statement:`<p>If $I_n = [a_n, b_n]$, $n \\in \\mathbb{N}$, is a nested sequence of closed, bounded intervals such that the lengths $b_n - a_n$ satisfy:
      $$\\inf\\{b_n - a_n : n \\in \\mathbb{N}\\} = 0$$
      then the number $\\xi$ contained in $I_n$ for all $n \\in \\mathbb{N}$ is <b>unique</b>; that is:
      $$\\bigcap_{n=1}^\\infty I_n = \\{\\xi\\}$$</p>`,
    intuition:`<p>Theorem 2.5.2 guaranteed that at least ONE point $\\xi$ survives in the intersection of any nested closed bounded intervals. But if the intervals are fat (e.g. $[0, 1 + 1/n]$), their intersection $[0, 1]$ contains infinitely many points.</p>
      <p>This theorem adds the crucial condition: if the intervals shrink down to zero length, there is no room left for two different points! Any two points would have a positive distance between them, which would eventually exceed the shrinking interval width.</p>`,
    needs:['c.2.5.2','c.2.1.9'],
    proof:{
      idea:`Let $\\xi = \\sup\\{a_n\\}$ and $\\eta = \\inf\\{b_n\\}$. Show $\\xi \\le \\eta$, and that every common point $x$ satisfies $\\xi \\le x \\le \\eta$. Then use $\\inf\\{b_n - a_n\\} = 0$ and Theorem 2.1.9 to force $\\eta - \\xi = 0$.`,
      why:`Because any common point is an upper bound for all $a_n$ and lower bound for all $b_n$, it must lie in $[\\xi, \\eta]$. When $\\eta = \\xi$, that interval collapses to a single point.`,
      rungs:[
        { why:`From the proof of 2.5.2, $\\xi = \\sup\\{a_n\\}$ and $\\eta = \\inf\\{b_n\\}$ satisfy $\\xi \\le \\eta$, and $x \\in \\bigcap I_n \\iff \\xi \\le x \\le \\eta$.`, m:`$$a_n \\le \\xi \\le \\eta \\le b_n \\quad \\text{for all } n \\in \\mathbb{N}$$` },
        { why:`Subtract the inequalities to bound the gap $\\eta - \\xi$ by the length of $I_n$.`, m:`$$0 \\le \\eta - \\xi \\le b_n - a_n \\quad \\text{for all } n \\in \\mathbb{N}$$` },
        { why:`Since $\\inf\\{b_n - a_n : n \\in \\mathbb{N}\\} = 0$, for every $\\varepsilon > 0$ there exists $m \\in \\mathbb{N}$ such that $b_m - a_m < \\varepsilon$.`, m:`$$\\forall\\, \\varepsilon > 0, \\; \\exists m \\in \\mathbb{N}: \\; 0 \\le \\eta - \\xi \\le b_m - a_m < \\varepsilon$$` },
        { why:`By Theorem 2.1.9 (Positive Margin Property), $0 \\le \\eta - \\xi < \\varepsilon$ for all $\\varepsilon > 0$ forces $\\eta - \\xi = 0$.`, m:`$$\\eta - \\xi = 0 \\implies \\xi = \\eta$$` }
      ],
      ends:`Since $\\xi \\le x \\le \\eta$ and $\\xi = \\eta$, the only possible common point is $x = \\xi$. The intersection consists of the single point $\\{\\xi\\}$.`
    },
    cards:[
      { q:`State Theorem 2.5.3 on the uniqueness of the point in nested intervals.`, a:`If $I_n = [a_n, b_n]$ is nested closed bounded intervals with $\\inf\\{b_n - a_n : n \\in \\mathbb{N}\\} = 0$, then $\\bigcap_{n=1}^\\infty I_n = \\{\\xi\\}$ is a singleton.`, kind:'state' },
      { q:`What earlier result does the proof invoke to deduce $\\eta - \\xi = 0$?`, a:`Theorem 2.1.9: if $0 \\le a < \\varepsilon$ for all $\\varepsilon > 0$, then $a = 0$.`, kind:'recall' },
      { q:`Trap: does $\\bigcap I_n$ contain a unique point for $I_n = [0, 1 + 1/n]$?`, a:`No — lengths shrink to $1$, not $0$; the intersection is $[0, 1]$, which contains infinitely many points.`, kind:'trap' }
    ]
  },

  { id:'c.2.5.4', bartle:'2.5.4', sec:'2.5', kind:'theorem', tier:'core',
    title:'Uncountability of ℝ (Cantor Nested Intervals Proof)',
    oneLine:'The real numbers are uncountable — any proposed list of reals misses at least one number trapped in nested intervals.',
    statement:`<p>The set $\\mathbb{R}$ of real numbers is not countable (uncountable); equivalently, the closed unit interval $I = [0, 1]$ is uncountable.</p>`,
    intuition:`<p>Cantor gave two legendary proofs that $\\mathbb{R}$ is uncountable: his 1874 proof using nested intervals, and his 1891 diagonal argument. Bartle 2.5.4 presents the 1874 Nested Intervals proof.</p>
      <p>Suppose someone claims to list all numbers in $[0, 1]$ as $x_1, x_2, x_3, \\dots$. We divide $[0, 1]$ into three parts and pick a subinterval $I_1$ that misses $x_1$. Then divide $I_1$ and pick $I_2$ missing $x_2$, and so on. The Nested Intervals Property guarantees a point $\\xi$ sits in ALL $I_n$. But $\\xi$ cannot be $x_1$, cannot be $x_2$, cannot be any $x_k$ on the list! So no list could ever be complete.</p>`,
    needs:['c.2.5.2','c.1.3.1'],
    proof:{
      idea:`Assume $[0, 1]$ is countable: list it as $\\{x_1, x_2, \\dots\\}$. Construct nested closed intervals $I_1 \\supseteq I_2 \\supseteq \\cdots$ such that $x_n \\notin I_n$. By Nested Intervals, $\\xi \\in \\bigcap I_n$ exists, but $\\xi \\ne x_n$ for all $n$, contradicting the enumeration.`,
      why:`Each step deliberately excludes one listed element while keeping a closed bounded subinterval alive; completeness then manufactures an unlisted point.`,
      rungs:[
        { why:`Assume for contradiction that $I = [0, 1]$ is countable; enumerate it completely.`, m:`$$I = \\{x_1, x_2, x_3, \\ldots, x_n, \\ldots\\}$$` },
        { why:`Divide $[0, 1]$ into three equal subintervals $[0, 1/3], [1/3, 2/3], [2/3, 1]$. At least one subinterval does not contain $x_1$; call it $I_1 = [a_1, b_1]$.`, m:`$$I_1 \\subseteq I, \\quad x_1 \\notin I_1$$` },
        { why:`Inductively, given $I_k$, divide it into three subintervals. At least one does not contain $x_{k+1}$; call it $I_{k+1}$.`, m:`$$I_{k+1} \\subseteq I_k, \\quad x_{k+1} \\notin I_{k+1}$$` },
        { why:`This produces a nested sequence of nonempty closed bounded intervals $I_1 \\supseteq I_2 \\supseteq \\cdots$. By Nested Intervals (2.5.2), a common point exists.`, m:`$$\\exists\\, \\xi \\in \\mathbb{R}: \\quad \\xi \\in I_n \\quad \\text{for all } n \\in \\mathbb{N}$$` },
        { why:`Since $\\xi \\in I_n$ for all $n$, and $x_n \\notin I_n$, $\\xi$ cannot equal $x_n$ for any $n \\in \\mathbb{N}$.`, m:`$$\\xi \\ne x_n \\quad \\text{for all } n \\in \\mathbb{N} \\implies \\xi \\notin \\{x_1, x_2, \\ldots\\} \\implies\\Leftarrow$$` }
      ],
      ends:`The assumption that $[0, 1]$ is countable leads to a contradiction. Hence $[0, 1]$ and $\\mathbb{R}$ are uncountable.`
    },
    cards:[
      { q:`State Theorem 2.5.4.`, a:`The set $\\mathbb{R}$ of real numbers is uncountable.`, kind:'state' },
      { q:`How does the nested intervals proof of uncountability construct each $I_{n}$?`, a:`By trisecting $I_{n-1}$ and choosing a closed subinterval that excludes $x_n$.`, kind:'recall' },
      { q:`Trap: why does the surviving point $\\xi$ contradict the enumeration?`, a:`Because $\\xi \\in I_n$ for all $n$, but $x_n \\notin I_n$, so $\\xi$ is not equal to any member of the enumerated list.`, kind:'trap' }
    ]
  },

  { id:'c.2.5.5', bartle:'2.5.5', sec:'2.5', kind:'example', tier:'core',
    title:'The Cantor Ternary Set',
    oneLine:'Start with $[0, 1]$ and repeatedly delete the open middle third of every remaining interval: what survives is uncountable, nowhere dense, and has total length zero.',
    statement:`<p>Let $F_0 = [0, 1]$. Remove the open middle third $(1/3, 2/3)$ to get $F_1 = [0, 1/3] \\cup [2/3, 1]$. In general, $F_k$ is obtained by removing the open middle third from each of the $2^{k-1}$ intervals in $F_{k-1}$. The <b>Cantor Set</b> is the intersection $\\mathbb{F} = \\bigcap_{n=1}^\\infty F_n$.</p>`,
    intuition:`<p>The Cantor set sounds like it should be empty because at step $n$, the total length of removed intervals approaches $1$:
      $$\\frac{1}{3} + 2\\left(\\frac{1}{9}\\right) + 4\\left(\\frac{1}{27}\\right) + \\cdots = \\frac{1/3}{1 - 2/3} = 1$$
      So the total length left is $1 - 1 = 0$. Yet, the Cantor set contains infinitely many points! In fact, it contains EVERY number in $[0, 1]$ that can be written in base $3$ (ternary) using only the digits $0$ and $2$. Because every infinite sequence of $0$s and $2$s corresponds to a point in the Cantor set, $\\mathbb{F}$ is <b>uncountable</b> (as many points as all of $[0, 1]$!).</p>`,
    needs:['c.2.5.2', 'c.1.3.2'],
    traps:[
      `Thinking the Cantor set only contains the obvious endpoints like $0, 1, 1/3, 2/3$. Non-endpoints like $1/4 = 0.020202..._3$ are also in the Cantor set!`,
      `Confusing "length zero" with "countable": the Cantor set is UNCOUNTABLE even though its length (measure) is zero.`
    ],
    cards:[
      { q:`What is the total length (measure) of the open intervals removed to form the Cantor set?`, a:`$1$, which means the remaining Cantor set has measure $0$.`, kind:'recall' },
      { q:`Is the Cantor set countable or uncountable?`, a:`Uncountable — it has the cardinality of the continuum ($2^{\\aleph_0}$), matching $[0, 1]$.`, kind:'state' },
      { q:`Which numbers in $[0, 1]$ belong to the Cantor ternary set in base $3$?`, a:`Those whose ternary (base-3) expansion can be written using only digits $0$ and $2$ (never requiring digit $1$).`, kind:'recall' }
    ]
  },

  { id:'c.3.2.2', bartle:'3.2.2', sec:'3.2', kind:'theorem', tier:'core',
    title:'A convergent sequence is bounded',
    oneLine:'Once a sequence settles near a limit, only finitely many early terms can be wild — so the whole sequence is trapped in some fixed range.',
    statement:`<p>If $X=(x_n)$ is a convergent sequence of real numbers, then $X$ is bounded: there exists $M>0$ such that $|x_n|\\le M$ for all $n\\in\\mathbb{N}$.</p>`,
    intuition:`<p>Convergence only controls the sequence from some index $K$ onward — the tail huddles near the limit. The finitely many terms BEFORE $K$ could, in principle, be enormous, but a finite list of numbers is always bounded (just take the biggest one), so gluing the two pieces together bounds the whole sequence.</p>
      <p><b>Worked micro-example:</b> $x_n=(-1)^n\\cdot 100$ for $n\\le3$, then $x_n=1/n$ for $n>3$. The tail is tiny, but $x_1,x_2,x_3$ are huge — yet $\\max\\{100,100,100,\\ldots\\}=100$ still bounds the whole sequence. (This particular $X$ doesn't converge, but the bounding trick is the same either way.)</p>`,
    needs:['c.3.1.3','s.triangle-ineq'],
    traps:[
      `Believing the CONVERSE also holds (bounded $\\Rightarrow$ convergent) — false; $((-1)^n)$ is bounded but divergent (see <code>c.3.4.5</code>).`,
      `Forgetting to also bound the finitely many terms BEFORE index $K$ — convergence directly controls only the tail; the head needs a separate max/sup argument.`
    ],
    proof:{
      idea:`Use $\\varepsilon=1$ to trap the tail within $1$ of the limit $x$, bound $|x_n|$ there via the triangle inequality, then take the max over that bound and the finitely many earlier terms.`,
      why:`Any single fixed tolerance is enough to pin the tail down to a genuine numerical bound; the only extra step is remembering the finitely many terms before that tail also need covering, which a simple maximum handles.`,
      rungs:[
        { why:`Apply the definition of convergence with the specific tolerance $\\varepsilon=1$.`, m:`$$\\exists K:\\ n\\ge K \\Rightarrow |x_n-x|<1$$` },
        { why:`Triangle inequality turns "close to $x$" into an explicit numerical bound on $|x_n|$ itself, for the tail.`, m:`$$|x_n| = |x_n-x+x| \\le |x_n-x|+|x| < 1+|x| \\quad (n\\ge K)$$` },
        { why:`The finitely many terms before index $K$ form a finite set, automatically bounded — take the largest of them, together with the tail bound.`, m:`$$M := \\max\\{|x_1|,\\ldots,|x_{K-1}|,\\ 1+|x|\\}$$` },
        { why:`Every term, early or late, is now controlled by the same single number $M$.`, m:`$$|x_n|\\le M \\ \\text{ for all } n\\in\\mathbb{N}$$` }
      ],
      ends:`Convergence forces boundedness. The useful CONTRAPOSITIVE — an unbounded sequence cannot converge — is often the more practical direction in applications (see <code>c.3.4.5</code>).`
    },
    cards:[
      { q:`State the theorem: what does convergence imply about boundedness?`, a:`Every convergent sequence of real numbers is bounded.`, kind:'state' },
      { q:`What tolerance $\\varepsilon$ does the standard proof use, and why is that choice not special?`, a:`$\\varepsilon=1$ — any FIXED positive number works; the point is just to get one concrete numerical bound on the tail.`, kind:'recall' },
      { q:`Trap: does boundedness of $(x_n)$ imply it converges?`, a:`No — $((-1)^n)$ is bounded but divergent. Boundedness is necessary, not sufficient, for convergence.`, kind:'trap' }
    ]
  },

  { id:'c.3.2.3', bartle:'3.2.3', sec:'3.2', kind:'theorem', tier:'core',
    title:'Limit Theorems: Algebra of Limits for Sequences',
    oneLine:'Limits respect sequence addition, subtraction, multiplication, and nonzero division.',
    statement:`<p>Let $X = (x_n)$ and $Y = (y_n)$ be sequences of real numbers that converge to $x$ and $y$, respectively, and let $c \\in \\mathbb{R}$.</p>
      <p>(a) The sequences $X + Y$, $X - Y$, $X \\cdot Y$, and $cX$ converge to $x + y$, $x - y$, $xy$, and $cx$, respectively:
      $$\\lim(x_n + y_n) = x + y, \\quad \\lim(x_n - y_n) = x - y, \\quad \\lim(x_n y_n) = xy, \\quad \\lim(c x_n) = c x$$</p>
      <p>(b) If $Z = (z_n)$ is a sequence of nonzero real numbers converging to $z \\ne 0$, then the quotient sequence $X/Z = (x_n / z_n)$ converges to $x/z$:
      $$\\lim\\left(\\frac{x_n}{z_n}\\right) = \\frac{x}{z}$$</p>`,
    intuition:`<p>This is the fundamental toolkit for computing limits without returning to $\\varepsilon$-$K$ definitions. If you know the limits of the individual components, you can perform standard arithmetic directly on the limits.</p>
      <p>For addition, split the tolerance: $\\varepsilon/2$ error from $x_n$ and $\\varepsilon/2$ from $y_n$ add to at most $\\varepsilon$. For multiplication, use the identity $x_n y_n - xy = x_n(y_n - y) + y(x_n - x)$ and the fact that a convergent sequence is bounded (Theorem 3.2.2).</p>`,
    needs:['c.3.1.3','c.3.2.2','s.triangle-ineq'],
    traps:[
      `Applying the quotient rule when the denominator limit is $0$: $z = 0$ is strictly forbidden!`,
      `Assuming $\\lim(x_n + y_n) = x + y$ implies both $(x_n)$ and $(y_n)$ converge separately — false! E.g. $x_n = n$ and $y_n = -n$ diverge, but $x_n + y_n = 0 \\to 0$.`
    ],
    proof:{
      idea:`For sum: triangle inequality $|(x_n+y_n)-(x+y)| \\le |x_n-x| + |y_n-y| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$. For product: add and subtract $x_n y$, bound $|x_n| \\le M$ via boundedness of convergent sequences. For quotient: bound $|z_n| \\ge |z|/2$ away from 0.`,
      why:`Triangle inequality splits the combined error into separate errors that each individual convergence can crush below any required fraction of $\\varepsilon$.`,
      rungs:[
        { why:`(Sum) Given $\\varepsilon > 0$, choose $K_1, K_2$ for $\\varepsilon/2$ bounds on $x_n$ and $y_n$. For $n \\ge K = \\max\\{K_1, K_2\\}$:`, m:`$$|(x_n + y_n) - (x + y)| \\le |x_n - x| + |y_n - y| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$` },
        { why:`(Product) Rewrite the error by inserting and subtracting $x_n y$:`, m:`$$|x_n y_n - xy| = |x_n(y_n - y) + y(x_n - x)| \\le |x_n||y_n - y| + |y||x_n - x|$$` },
        { why:`By Theorem 3.2.2, $(x_n)$ is bounded: $|x_n| \\le M$. Set $M' = \\max\\{M, |y|\\} > 0$. Choose indices so $|y_n - y| < \\varepsilon/(2M')$ and $|x_n - x| < \\varepsilon/(2M')$.`, m:`$$|x_n y_n - xy| \\le M'|y_n - y| + M'|x_n - x| < M'\\frac{\\varepsilon}{2M'} + M'\\frac{\\varepsilon}{2M'} = \\varepsilon$$` },
        { why:`(Quotient) Since $z \\ne 0$, set $\\alpha = |z|/2 > 0$. Past some $K_1$, $|z_n - z| < \\alpha \\implies |z_n| > |z|/2$. Then:`, m:`$$\\left|\\frac{1}{z_n} - \\frac{1}{z}\\right| = \\frac{|z - z_n|}{|z_n||z|} \\le \\frac{|z_n - z|}{\\frac{1}{2}|z|^2} \\to 0$$` },
        { why:`Apply the product rule to $x_n \\cdot (1/z_n)$ to finish.`, m:`$$\\lim\\left(\\frac{x_n}{z_n}\\right) = \\lim x_n \\cdot \\lim\\left(\\frac{1}{z_n}\\right) = x \\cdot \\frac{1}{z} = \\frac{x}{z}$$` }
      ],
      ends:`All four algebraic operations (sum, difference, product, quotient) commute with taking sequence limits.`
    },
    cards:[
      { q:`State the product rule for sequence limits.`, a:`If $\\lim(x_n) = x$ and $\\lim(y_n) = y$, then $\\lim(x_n y_n) = xy$.`, kind:'state' },
      { q:`What property of convergent sequences is essential to prove the product rule?`, a:`Theorem 3.2.2: every convergent sequence is bounded ($|x_n| \\le M$).`, kind:'recall' },
      { q:`Trap: if $(x_n + y_n)$ converges, must $(x_n)$ and $(y_n)$ both converge?`, a:`No — e.g. $x_n = (-1)^n$ and $y_n = -(-1)^n$ both diverge, but $x_n + y_n = 0$ converges.`, kind:'trap' }
    ]
  },

  { id:'c.3.2.4', bartle:'3.2.4', sec:'3.2', kind:'theorem', tier:'core',
    title:'Nonnegativity passes to the limit',
    oneLine:'If every term of a convergent sequence is at least 0, so is its limit.',
    statement:`<p>If $X=(x_n)$ is a convergent sequence of real numbers with $x_n\\ge0$ for all $n\\in\\mathbb{N}$, then $x=\\lim(x_n)\\ge0$.</p>`,
    intuition:`<p>If the limit were negative, the terms would eventually have to squeeze into a small window around it — a window that lies entirely below $0$, contradicting that every term is $\\ge0$. Note only the WEAK inequality survives the limiting process; strict positivity of every term does not force a strictly positive limit.</p>
      <p><b>Worked micro-example:</b> $x_n=1/n>0$ for every $n$, yet $\\lim(x_n)=0$ — strict inequality $x_n>0$ only guarantees $\\lim(x_n)\\ge0$, not $\\lim(x_n)>0$.</p>`,
    needs:['c.3.1.3','s.contradiction'],
    traps:[
      `Assuming $x_n>0$ for all $n$ forces $\\lim(x_n)>0$ — false; only $\\lim(x_n)\\ge0$ is guaranteed, as $x_n=1/n$ shows.`,
      `Trying to argue directly instead of by contradiction — the direct route (bounding $x$ below by something) is awkward; assuming $x<0$ and deriving a negative term is far cleaner.`
    ],
    proof:{
      idea:`Suppose for contradiction the limit $x$ is negative. Turn the gap $-x$ into a tolerance $\\varepsilon$, and show some actual term of the sequence must then be negative — contradicting the hypothesis.`,
      why:`A negative limit means the terms eventually crowd into a neighbourhood of $x$ that lies entirely below $0$ once the margin is chosen exactly equal to $-x$ — squeezing a genuine term below $0$.`,
      rungs:[
        { why:`Suppose for contradiction the limit $x$ is negative; turn the gap into a tolerance.`, m:`$$x<0,\\qquad \\varepsilon:=-x>0$$` },
        { why:`Convergence traps all sufficiently late terms within $\\varepsilon$ of $x$.`, m:`$$\\exists K:\\ n\\ge K \\Rightarrow x-\\varepsilon < x_n < x+\\varepsilon$$` },
        { why:`The right-hand bound, with this particular $\\varepsilon$, collapses to exactly $0$.`, m:`$$x_n < x+\\varepsilon = x+(-x) = 0 \\quad (n\\ge K)$$` },
        { why:`So some term (e.g. $x_K$) is strictly negative — contradicting the hypothesis that $x_n\\ge0$ for all $n$.`, m:`$$x_K<0,\\ \\text{but hypothesis says } x_K\\ge0 \\ \\Rightarrow\\Leftarrow$$` }
      ],
      ends:`A negative limit is impossible, so $\\lim(x_n)\\ge0$. This is the base case the comparison theorems (<code>c.3.2.6</code>, and Bartle's order-preservation result) build on.`
    },
    cards:[
      { q:`If $x_n\\ge0$ for all $n$ and $(x_n)$ converges, what can you say about $\\lim(x_n)$?`, a:`$\\lim(x_n)\\ge0$.`, kind:'state' },
      { q:`Trap: if $x_n>0$ strictly for every $n$, must $\\lim(x_n)>0$?`, a:`No — e.g. $x_n=1/n>0$ for all $n$ but $\\lim(x_n)=0$; only the non-strict inequality survives the limit.`, kind:'trap' },
      { q:`What is the key move in the proof?`, a:`Assume $x<0$, set $\\varepsilon:=-x$, and show the resulting bound $x_n<0$ for large $n$ contradicts $x_n\\ge0$.`, kind:'recall' }
    ]
  },

  { id:'c.3.2.6', bartle:'3.2.6', sec:'3.2', kind:'theorem', tier:'core',
    title:'Convergent sequences inherit their bounds in the limit',
    oneLine:'If every term of a convergent sequence sits between a and b, so does the limit.',
    statement:`<p>If $X=(x_n)$ is a convergent sequence and $a\\le x_n\\le b$ for all $n\\in\\mathbb{N}$, then $a\\le\\lim(x_n)\\le b$.</p>`,
    intuition:`<p>This is <code>c.3.2.4</code> applied twice, once to shift the lower bound down to $0$ and once to shift the upper bound down to $0$. As with that result, only the WEAK inequalities survive: $a < x_n<b$ for every $n$ only guarantees $a\\le\\lim(x_n)\\le b$, not strict inequalities.</p>
      <p><b>Worked micro-example:</b> $x_n=1-1/n\\in(0,1)$ for all $n\\ge2$, yet $\\lim(x_n)=1$ — the limit sits ON the boundary $b=1$ even though every term is strictly inside.</p>`,
    needs:['c.3.2.4','c.3.1.3'],
    traps:[
      `Expecting strict bounds $a < x_n<b$ to survive as strict bounds on the limit — false in general; only $a\\le\\lim(x_n)\\le b$ is guaranteed.`,
      `Trying to prove this from scratch with a fresh $\\varepsilon$-argument instead of reusing <code>c.3.2.4</code> twice — the shifted-sequence trick is shorter and less error-prone.`
    ],
    proof:{
      idea:`Apply the nonnegativity-passes-to-the-limit theorem (<code>c.3.2.4</code>) twice: once to $x_n-a\\ge0$, once to $b-x_n\\ge0$.`,
      why:`Both halves of the inequality $a\\le x_n\\le b$ are individually just "a shifted sequence is nonnegative" statements, and that exact situation is what <code>c.3.2.4</code> already handles — no new argument is needed.`,
      rungs:[
        { why:`Shift so the lower bound becomes a nonnegativity statement.`, m:`$$y_n:=x_n-a\\ge0 \\ \\text{for all } n$$` },
        { why:`Apply the nonnegativity-passes-to-the-limit result (<code>c.3.2.4</code>) to $(y_n)$.`, m:`$$\\lim(y_n) = \\lim(x_n)-a \\ge 0 \\ \\Rightarrow\\ a\\le\\lim(x_n)$$` },
        { why:`Symmetrically, shift so the upper bound becomes a nonnegativity statement.`, m:`$$z_n:=b-x_n\\ge0 \\ \\text{for all } n$$` },
        { why:`Apply <code>c.3.2.4</code> again, to $(z_n)$.`, m:`$$\\lim(z_n)=b-\\lim(x_n)\\ge0 \\ \\Rightarrow\\ \\lim(x_n)\\le b$$` }
      ],
      ends:`Combining both halves gives $a\\le\\lim(x_n)\\le b$ — a convergent sequence can never escape an interval it always lived inside.`
    },
    cards:[
      { q:`If $a\\le x_n\\le b$ for all $n$ and $(x_n)$ converges, what follows about the limit?`, a:`$a\\le\\lim(x_n)\\le b$.`, kind:'state' },
      { q:`Which earlier theorem does the proof apply twice, and to which two shifted sequences?`, a:`<code>c.3.2.4</code> (nonnegativity passes to the limit), applied to $x_n-a$ and to $b-x_n$.`, kind:'recall' },
      { q:`Trap: does $x_n=1-1/n\\in(0,1)$ for all $n$ force $0<\\lim(x_n)<1$?`, a:`No — $\\lim(x_n)=1$, exactly on the boundary; strict term-wise bounds do not force strict limit bounds.`, kind:'trap' }
    ]
  },

  { id:'c.3.2.7', bartle:'3.2.7', sec:'3.2', kind:'theorem', tier:'core',
    title:'Squeeze Theorem (for sequences)',
    oneLine:'A sequence pinned between two sequences that converge to the same place has no choice but to converge there too.',
    statement:`<p>Suppose $X=(x_n)$, $Y=(y_n)$, $Z=(z_n)$ satisfy $x_n\\le y_n\\le z_n$ for all $n\\in\\mathbb{N}$, and $\\lim(x_n)=\\lim(z_n)$. Then $Y=(y_n)$ converges, and $\\lim(x_n)=\\lim(y_n)=\\lim(z_n)$.</p>`,
    intuition:`<p>You don't need any formula for $y_n$ at all — only that it is sandwiched between two sequences that both close in on the SAME point. Since both walls converge to that point, the space between them shrinks to nothing, and $y_n$ is forced along for the ride.</p>
      <p><b>Worked micro-example:</b> $y_n=\\dfrac{\\sin n}{n}$. Since $-1\\le\\sin n\\le1$, we get $-\\tfrac1n\\le y_n\\le\\tfrac1n$; both outer sequences $\\to0$, so $\\lim(y_n)=0$ — with no need to understand how $\\sin n$ itself behaves.</p>`,
    needs:['c.3.1.3','s.abs-ineq'],
    traps:[
      `Forgetting BOTH outer sequences must converge to the SAME limit — if $\\lim(x_n)\\ne\\lim(z_n)$, the theorem says nothing at all about $y_n$.`,
      `Checking the squeeze inequality $x_n\\le y_n\\le z_n$ for only finitely many $n$ instead of ALL $n$ (or at least all sufficiently large $n$).`
    ],
    proof:{
      idea:`Subtract the common limit $w$ from all three sequences, so the squeeze inequality becomes an inequality about how far each is from $0$; the same index $K$ that works for both outer sequences then automatically works for the middle one.`,
      why:`Once you re-centre everything at the shared limit $w$, "squeezed between two things both near $0$" literally forces the middle term near $0$ too — the argument is almost purely order-theoretic.`,
      rungs:[
        { why:`Name the common limit of the two outer sequences.`, m:`$$w:=\\lim(x_n)=\\lim(z_n)$$` },
        { why:`Given $\\varepsilon>0$, both outer convergences supply an index past which they are within $\\varepsilon$ of $w$ — take the larger of the two indices.`, m:`$$\\exists K:\\ n\\ge K \\Rightarrow |x_n-w|<\\varepsilon \\ \\text{ and } \\ |z_n-w|<\\varepsilon$$` },
        { why:`Shift the squeeze hypothesis $x_n\\le y_n\\le z_n$ by subtracting $w$ from every term.`, m:`$$x_n-w \\le y_n-w \\le z_n-w \\quad \\text{for all } n$$` },
        { why:`For $n\\ge K$ the outer two shifted terms are trapped in $(-\\varepsilon,\\varepsilon)$, so the middle one is squeezed into the same interval.`, m:`$$-\\varepsilon < x_n-w \\le y_n-w \\le z_n-w < \\varepsilon \\quad (n\\ge K)$$` },
        { why:`That is exactly $|y_n-w|<\\varepsilon$ for all $n\\ge K$, with the same $K$ working for every $\\varepsilon$.`, m:`$$|y_n-w|<\\varepsilon \\ \\text{ for } n\\ge K$$` }
      ],
      ends:`Since $\\varepsilon$ was arbitrary, $\\lim(y_n)=w$ — the squeezed sequence converges to the shared outer limit, without ever needing a direct handle on $y_n$ itself. This is the workhorse behind evaluating limits like $\\lim(\\sin n/n)$ or $\\lim(n^{-1}\\sin n)$.`
    },
    cards:[
      { q:`State the Squeeze Theorem for sequences.`, a:`If $x_n\\le y_n\\le z_n$ for all $n$ and $\\lim(x_n)=\\lim(z_n)=w$, then $(y_n)$ converges and $\\lim(y_n)=w$.`, kind:'state' },
      { q:`Use the Squeeze Theorem to find $\\lim(\\sin n/n)$.`, a:`Since $-1/n\\le\\sin n/n\\le1/n$ and both outer sequences $\\to0$, the limit is $0$.`, kind:'apply' },
      { q:`Trap: if $x_n\\le y_n\\le z_n$ but $\\lim(x_n)=0\\ne1=\\lim(z_n)$, what can you conclude about $y_n$?`, a:`Nothing from this theorem — the outer limits must match for the squeeze to pin down $y_n$'s limit.`, kind:'trap' }
    ]
  },

  { id:'c.3.2.10', bartle:'3.2.10', sec:'3.2', kind:'theorem', tier:'core',
    title:'The square-root function preserves sequence limits',
    oneLine:'If a sequence of nonnegative numbers converges to x, its square roots converge to √x.',
    statement:`<p>Let $X=(x_n)$ be a sequence of real numbers with $x_n\\ge0$ for all $n$, converging to $x$. Then $x\\ge0$, and the sequence $(\\sqrt{x_n})$ converges to $\\sqrt{x}$.</p>`,
    intuition:`<p>Near a positive limit, square-rooting is a "well-behaved" (Lipschitz-like) operation — small changes in $x_n$ produce controllably small changes in $\\sqrt{x_n}$, via rationalising the difference of square roots. Right at $x=0$ that trick breaks down (you'd be dividing by $0$), so that case needs its own separate, more elementary argument.</p>
      <p><b>Worked micro-example:</b> $x_n=4+1/n\\to4$. Then $\\sqrt{x_n}\\to\\sqrt4=2$, and indeed $\\sqrt{4+1/n}-2=\\dfrac{1/n}{\\sqrt{4+1/n}+2}\\to0$ since the denominator stays close to $4$.</p>`,
    needs:['c.3.1.3','c.3.2.4','s.abs-ineq'],
    traps:[
      `Using the same algebraic bound for $x=0$ as for $x>0$ — the $x>0$ argument divides by $\\sqrt{x_n}+\\sqrt{x}$, which is meaningless when $x=0$ and $x_n=0$ too; the case $x=0$ needs its own direct squeeze-style argument.`,
      `Forgetting that $\\sqrt{x_n}+\\sqrt{x}\\ge\\sqrt{x}>0$ (in the $x>0$ case) is exactly what licenses safely dividing by it.`
    ],
    proof:{
      idea:`Split into two cases. If $x=0$: bound $\\sqrt{x_n}$ directly once $x_n<\\varepsilon^2$. If $x>0$: rationalise $\\sqrt{x_n}-\\sqrt{x}$ by multiplying by its conjugate, turning it into a controlled multiple of $|x_n-x|$.`,
      why:`The algebraic identity $a-b=\\dfrac{a^2-b^2}{a+b}$ converts a hard-to-control difference of square roots into an easy-to-control difference of the ORIGINAL numbers, divided by something bounded away from $0$ — but only once $x>0$ guarantees that denominator is safely positive.`,
      rungs:[
        { why:`By <code>c.3.2.4</code>, the limit itself is nonnegative, so $\\sqrt{x}$ makes sense to begin with.`, m:`$$x=\\lim(x_n)\\ge0$$` },
        { why:`Case $x=0$: given $\\varepsilon>0$, convergence traps $x_n$ below $\\varepsilon^2$ eventually.`, m:`$$\\exists K:\\ n\\ge K \\Rightarrow 0\\le x_n<\\varepsilon^2$$` },
        { why:`Taking square roots (an increasing operation on nonnegatives) gives exactly the $\\varepsilon$-bound needed.`, m:`$$0\\le\\sqrt{x_n}<\\varepsilon \\quad (n\\ge K) \\ \\Rightarrow\\ \\sqrt{x_n}\\to0=\\sqrt{x}$$` },
        { why:`Case $x>0$: multiply and divide by the conjugate to turn a difference of square roots into a controlled multiple of $|x_n-x|$.`, m:`$$\\sqrt{x_n}-\\sqrt{x} = \\frac{(\\sqrt{x_n}-\\sqrt{x})(\\sqrt{x_n}+\\sqrt{x})}{\\sqrt{x_n}+\\sqrt{x}} = \\frac{x_n-x}{\\sqrt{x_n}+\\sqrt{x}}$$` },
        { why:`The denominator is bounded below by $\\sqrt{x}>0$ (dropping the nonnegative $\\sqrt{x_n}$ only shrinks the denominator, making the fraction bigger), which is what makes the division safe.`, m:`$$\\sqrt{x_n}+\\sqrt{x}\\ge\\sqrt{x}>0 \\ \\Rightarrow\\ \\left|\\sqrt{x_n}-\\sqrt{x}\\right| \\le \\frac{1}{\\sqrt{x}}|x_n-x|$$` },
        { why:`The right-hand side shrinks to $0$ because $x_n\\to x$, and a constant multiple of something shrinking to $0$ still shrinks to $0$.`, m:`$$|x_n-x|\\to0 \\ \\Rightarrow\\ \\left|\\sqrt{x_n}-\\sqrt{x}\\right|\\to0$$` }
      ],
      ends:`In both cases $\\sqrt{x_n}\\to\\sqrt{x}$. This is a first instance of a pattern Chapter 5 generalises massively: continuous functions can be "pushed through" a limit.`
    },
    cards:[
      { q:`State the theorem: what does $(\\sqrt{x_n})$ converge to, given $x_n\\ge0$ and $x_n\\to x$?`, a:`$\\sqrt{x_n}\\to\\sqrt{x}$ (and $x\\ge0$ automatically).`, kind:'state' },
      { q:`Why does the proof split into $x=0$ and $x>0$ cases?`, a:`The $x>0$ argument divides by $\\sqrt{x_n}+\\sqrt{x}\\ge\\sqrt{x}>0$; at $x=0$ that denominator could be $0$ too, so a separate direct bound is needed instead.`, kind:'recall' },
      { q:`Rationalise $\\sqrt{x_n}-\\sqrt{x}$ into a form with $x_n-x$ in the numerator.`, a:`$\\sqrt{x_n}-\\sqrt{x}=\\dfrac{x_n-x}{\\sqrt{x_n}+\\sqrt{x}}$.`, kind:'apply' }
    ]
  },

  { id:'c.3.3.1', bartle:'3.3.1', sec:'3.3', kind:'definition', tier:'core',
    title:'Monotone sequences',
    oneLine:'A sequence is monotone if its terms move in only one direction — always going up or always going down.',
    statement:`<p>Let $X = (x_n)$ be a sequence of real numbers.</p>
      <p>(a) $X$ is <b>increasing</b> (or non-decreasing) if $x_1 \\le x_2 \\le \\cdots \\le x_n \\le x_{n+1} \\le \\cdots$; that is, $x_n \\le x_{n+1}$ for all $n \\in \\mathbb{N}$. If the strict inequality $x_n < x_{n+1}$ holds for all $n$, $X$ is <b>strictly increasing</b>.</p>
      <p>(b) $X$ is <b>decreasing</b> (or non-increasing) if $x_1 \\ge x_2 \\ge \\cdots \\ge x_n \\ge x_{n+1} \\ge \\cdots$; that is, $x_n \\ge x_{n+1}$ for all $n \\in \\mathbb{N}$. If $x_n > x_{n+1}$ for all $n$, $X$ is <b>strictly decreasing</b>.</p>
      <p>(c) $X$ is <b>monotone</b> if it is either increasing or decreasing.</p>`,
    intuition:`<p>A monotone sequence refuses to turn around. Once it starts climbing or descending, every single step keeps going in that same direction — no zigzagging, oscillating, or bouncing back and forth.</p>
      <p><b>Examples:</b> $(1, 2, 3, \\dots)$ and $(1 - 1/n)$ are increasing. $(1, 1/2, 1/3, \\dots)$ and $(1/2^n)$ are decreasing. By contrast, $((-1)^n)$ is not monotone because it constantly flip-flops between $-1$ and $+1$.</p>`,
    needs:['c.3.1.3'],
    traps:[
      `Confusing "increasing" with "strictly increasing": standard mathematical convention allows equal consecutive terms ($x_n \\le x_{n+1}$) in an increasing sequence.`,
      `Assuming an alternating sequence like $((-1)^n / n)$ is monotone because its magnitude shrinks — it is NOT monotone because terms alternate signs.`
    ],
    cards:[
      { q:`State the definition of an increasing sequence $(x_n)$.`, a:`$x_n \\le x_{n+1}$ for all $n \\in \\mathbb{N}$.`, kind:'state' },
      { q:`Is the sequence $x_n = (-1)^n$ monotone?`, a:`No — it alternates between $-1$ and $+1$, so it is neither increasing nor decreasing.`, kind:'apply' },
      { q:`What does it mean for a sequence to be "monotone"?`, a:`It is either increasing or decreasing.`, kind:'recall' }
    ]
  },

  { id:'c.3.3.2', bartle:'3.3.2', sec:'3.3', kind:'theorem', tier:'core',
    title:'Monotone Convergence Theorem',
    oneLine:'A monotone sequence converges exactly when it is bounded — and then it converges to its own supremum (increasing) or infimum (decreasing).',
    statement:`<p>A monotone sequence of real numbers converges if and only if it is bounded. Further:</p>
      <p>(a) If $X=(x_n)$ is a bounded increasing sequence, then $\\lim(x_n)=\\sup\\{x_n:n\\in\\mathbb{N}\\}$.</p>
      <p>(b) If $Y=(y_n)$ is a bounded decreasing sequence, then $\\lim(y_n)=\\inf\\{y_n:n\\in\\mathbb{N}\\}$.</p>`,
    intuition:`<p>An increasing sequence can only do two things: climb forever (unbounded, hence divergent) or climb toward a ceiling. If a ceiling exists at all, Completeness guarantees a LOWEST such ceiling — the supremum — and monotonicity is exactly what stops the sequence from ever backing away from it once it gets close. The decreasing case is the mirror image, converging to the infimum instead.</p>
      <p>This theorem is the single most useful tool for proving a sequence converges WITHOUT knowing its limit in advance — you only need to check monotonicity and boundedness, both of which are often easy.</p>`,
    needs:['c.2.3.2','c.2.3.6','c.3.1.3','c.3.2.2'],
    traps:[
      `Forgetting the theorem needs MONOTONE, not merely bounded — a bounded non-monotone sequence like $((-1)^n)$ can still diverge.`,
      `For a DECREASING sequence, mixing up sup and inf — a bounded decreasing sequence converges to its INFIMUM, not its supremum (which is just its first term).`,
      `Trying to compute $\\sup\\{x_n\\}$ directly to find the limit when it's hard to pin down — often it's easier to first confirm convergence via this theorem, THEN evaluate the limit by other means (e.g. passing to the limit in a recursive relation).`
    ],
    proof:{
      idea:`(⇒) Already known: convergent $\\Rightarrow$ bounded. (⇐) The real content: a bounded increasing sequence converges to $\\sup\\{x_n\\}$ — use the ε-characterisation idea to find a term inside the margin, then monotonicity carries every later term along with it. The decreasing case is free, by flipping signs, exactly like the infimum half of Completeness.`,
      why:`Monotonicity turns "eventually within $\\varepsilon$ of the candidate limit" into "PERMANENTLY within $\\varepsilon$ from some point on" — because once a term beats $x^\\ast-\\varepsilon$, every later term (being at least as large) beats it too, and none can ever exceed $x^\\ast$ itself since that is an upper bound.`,
      rungs:[
        { why:`(⇒) If $X$ converges it is automatically bounded — already established.`, m:`$$X \\text{ convergent} \\ \\Rightarrow\\ X \\text{ bounded} \\quad (\\text{by } c.3.2.2)$$` },
        { why:`(⇐) Now suppose $X=(x_n)$ is bounded AND increasing; Completeness hands us a candidate limit — the supremum of the whole set of terms.`, m:`$$x^\\ast := \\sup\\{x_n : n\\in\\mathbb{N}\\} \\ \\text{ exists, by } c.2.3.6$$` },
        { why:`Given $\\varepsilon>0$, $x^\\ast-\\varepsilon$ is too small to be an upper bound (it is strictly below the LEAST upper bound), so some particular term beats it.`, m:`$$\\exists K:\\ x^\\ast-\\varepsilon < x_K$$` },
        { why:`Monotonicity (increasing) means every later term is at least as large as $x_K$, so it inherits the same lower bound.`, m:`$$n\\ge K \\ \\Rightarrow\\ x_K\\le x_n$$` },
        { why:`Combine with $x_n\\le x^\\ast$ (since $x^\\ast$ is an upper bound of every term) to trap $x_n$ in a shrinking band around $x^\\ast$.`, m:`$$x^\\ast-\\varepsilon < x_K \\le x_n \\le x^\\ast < x^\\ast+\\varepsilon \\quad (n\\ge K)$$` },
        { why:`That is exactly $|x_n-x^\\ast|<\\varepsilon$ for all $n\\ge K$.`, m:`$$|x_n-x^\\ast|<\\varepsilon \\ (n\\ge K) \\ \\Rightarrow\\ \\lim(x_n)=x^\\ast$$` },
        { why:`Decreasing case is free: negate the sequence to flip it into an increasing one, apply the increasing case, then flip signs back — exactly the trick used for the infimum half of Completeness (<code>c.2.3.6</code>).`, m:`$$Y \\text{ decreasing, bounded} \\ \\Rightarrow\\ -Y \\text{ increasing, bounded} \\ \\Rightarrow\\ \\lim(Y) = -\\lim(-Y) = \\inf\\{y_n:n\\in\\mathbb{N}\\}$$` }
      ],
      ends:`Monotone plus bounded is, all by itself, enough to guarantee convergence — no candidate limit needs to be guessed in advance, since Completeness supplies one automatically. This is the engine inside the Bolzano–Weierstrass Theorem (<code>c.3.4.8</code>) and behind proving many recursively-defined sequences converge.`
    },
    cards:[
      { q:`State the Monotone Convergence Theorem.`, a:`A monotone sequence of reals converges iff it is bounded; a bounded increasing sequence converges to $\\sup\\{x_n\\}$, a bounded decreasing one to $\\inf\\{x_n\\}$.`, kind:'state' },
      { q:`Why does a bounded increasing sequence converge to $\\sup\\{x_n\\}$ and not just SOME number $\\le$ that sup?`, a:`Because $x^\\ast-\\varepsilon$ can never be an upper bound (it's below the LEAST one), so some term — and hence, by monotonicity, every later term — must exceed it, pinning the limit exactly at $x^\\ast$.`, kind:'recall' },
      { q:`Trap: does $((-1)^n)$ converge, since it is bounded?`, a:`No — it is bounded but NOT monotone, so the theorem doesn't apply, and indeed the sequence diverges.`, kind:'trap' }
    ]
  },

  { id:'c.3.5.1', bartle:'3.5.1', sec:'3.5', kind:'definition', tier:'core',
    title:'Cauchy sequence',
    oneLine:'A sequence is Cauchy if its own terms eventually get arbitrarily close to EACH OTHER, not just to some fixed target.',
    statement:`<p>A sequence $X=(x_n)$ of real numbers is a <b>Cauchy sequence</b> if for every $\\varepsilon>0$ there exists a natural number $H(\\varepsilon)$ such that for all $n,m\\ge H(\\varepsilon)$, $|x_n-x_m|<\\varepsilon$.</p>`,
    intuition:`<p>Convergence (<code>c.3.1.3</code>) compares every term to an external target $x$. The Cauchy condition never mentions any limit at all — it only demands that, eventually, ANY two terms of the sequence are close to each other. This makes it checkable even when you have no idea what the limit might be, which is exactly its point (see <code>c.3.5.5</code>).</p>
      <p><b>Worked micro-example:</b> $(1/n)$ is Cauchy: given $\\varepsilon>0$, choose $H>2/\\varepsilon$; then for $n,m\\ge H$, $|1/n-1/m|\\le1/n+1/m<\\varepsilon/2+\\varepsilon/2=\\varepsilon$.</p>`,
    needs:['s.abs-ineq','s.quantifier'],
    traps:[
      `To prove a sequence IS Cauchy, you may NOT assume any relationship between $n$ and $m$ — the bound $|x_n-x_m|<\\varepsilon$ must hold for ALL $n,m\\ge H$ simultaneously and independently.`,
      `To prove a sequence is NOT Cauchy, you're free to pick a CONVENIENT relation between $n$ and $m$ (e.g. $m=n+1$), as long as arbitrarily large such pairs violate the bound — this is much easier than checking all pairs.`
    ],
    cards:[
      { q:`State the definition of a Cauchy sequence.`, a:`For every $\\varepsilon>0$ there exists $H(\\varepsilon)\\in\\mathbb{N}$ such that $n,m\\ge H(\\varepsilon) \\Rightarrow |x_n-x_m|<\\varepsilon$.`, kind:'state' },
      { q:`Show $(1+(-1)^n)$ is NOT a Cauchy sequence.`, a:`Take $\\varepsilon_0=2$: for any $H$, pick even $n>H$ and $m=n+1$; then $x_n=2,x_m=0$, so $|x_n-x_m|=2=\\varepsilon_0$, never $<\\varepsilon_0$.`, kind:'apply' },
      { q:`Trap: to prove $(x_n)$ IS Cauchy, can you fix a relation like $m=n+1$ and only check that?`, a:`No — that only shows CONSECUTIVE terms get close, which is not enough; ALL pairs $n,m\\ge H$ must satisfy the bound, not just adjacent ones.`, kind:'trap' }
    ]
  },

  { id:'c.3.5.5', bartle:'3.5.5', sec:'3.5', kind:'theorem', tier:'core',
    title:'Cauchy Convergence Criterion',
    oneLine:'A sequence of real numbers converges if and only if its own terms eventually huddle arbitrarily close together.',
    statement:`<p>A sequence of real numbers is convergent if and only if it is a Cauchy sequence.</p>
      <p>That is, a sequence $X = (x_n)$ of real numbers converges to some limit $x \\in \\mathbb{R}$ if and only if for every $\\varepsilon > 0$, there exists a natural number $H(\\varepsilon) \\in \\mathbb{N}$ such that:
      $$|x_n - x_m| < \\varepsilon \\quad \\text{for all } n, m \\ge H(\\varepsilon)$$</p>`,
    intuition:`<p>This is one of the deepest facts in the course: it lets you PROVE a sequence converges without ever guessing its limit — just show the terms crowd together. It genuinely needs completeness: the identical statement is FALSE over $\\mathbb{Q}$ (e.g. the rational decimal truncations of $\\sqrt2$ are Cauchy in $\\mathbb{Q}$, but have no rational limit).</p>
      <p>The easy direction (convergent $\\Rightarrow$ Cauchy) is a short triangle-inequality argument. The hard direction (Cauchy $\\Rightarrow$ convergent) needs real machinery: Cauchy sequences are automatically bounded, so Bolzano–Weierstrass extracts a convergent subsequence — and then the Cauchy property itself is what drags the WHOLE sequence along to that same limit.</p>`,
    needs:['c.3.5.1','c.3.1.3','c.3.4.8','s.triangle-ineq'],
    traps:[
      `Thinking the Cauchy condition is somehow "weaker" than convergence but still useful as an approximation — over $\\mathbb{R}$ they are EXACTLY equivalent, not merely related.`,
      `Forgetting that the hard direction genuinely needs Bolzano–Weierstrass — the Cauchy property alone does not hand you a candidate limit; boundedness plus Bolzano–Weierstrass is what manufactures one.`,
      `Believing this equivalence holds over $\\mathbb{Q}$ too — it fails there, which is precisely why completeness of $\\mathbb{R}$ is essential to the hard direction.`
    ],
    proof:{
      idea:`(⇒) Direct: split $\\varepsilon$ in half and route the comparison between $x_n$ and $x_m$ through the shared limit $x$ (same add-and-subtract trick as Uniqueness of Limits). (⇐) The real content: show Cauchy $\\Rightarrow$ bounded, apply Bolzano–Weierstrass to extract a convergent subsequence with limit $x^\\ast$, then show the WHOLE sequence — not just the subsequence — converges to $x^\\ast$, again via the triangle inequality.`,
      why:`The Cauchy property alone only compares terms to EACH OTHER; the missing ingredient to reach an actual limit is completeness, smuggled in here through Bolzano–Weierstrass, which is itself built on completeness via the Monotone Convergence Theorem (<code>c.3.3.2</code>).`,
      rungs:[
        { why:`(⇒) Suppose $X$ converges to $x$; split an arbitrary tolerance in half, one half for each of two indices being compared.`, m:`$$\\text{given }\\varepsilon>0,\\ \\exists K:\\ n\\ge K \\Rightarrow |x_n-x|<\\varepsilon/2$$` },
        { why:`For any two indices $n,m$ past $K$, route the comparison between $x_n$ and $x_m$ through the shared point $x$.`, m:`$$n,m\\ge K \\ \\Rightarrow\\ |x_n-x_m|\\le|x_n-x|+|x-x_m|<\\varepsilon/2+\\varepsilon/2=\\varepsilon$$` },
        { why:`(⇐) Now suppose $X$ is Cauchy. First show it is bounded: fix $\\varepsilon=1$; the tail is trapped within $1$ of a single reference term $x_H$, and finitely many earlier terms are trivially bounded.`, m:`$$\\exists H:\\ n\\ge H \\Rightarrow |x_n-x_H|<1 \\ \\Rightarrow\\ |x_n|\\le|x_H|+1 \\ (n\\ge H)$$` },
        { why:`So $X$ is bounded — Bolzano–Weierstrass now supplies a convergent SUBsequence, with some limit $x^\\ast$.`, m:`$$X \\text{ bounded} \\ \\Rightarrow\\ \\exists (x_{n_k}) \\text{ subsequence}, \\ (x_{n_k})\\to x^\\ast \\quad (\\text{by } c.3.4.8)$$` },
        { why:`Given $\\varepsilon>0$, use the Cauchy property (with margin $\\varepsilon/2$) to trap ALL sufficiently late terms close to each other.`, m:`$$\\exists H(\\varepsilon/2):\\ n,m\\ge H(\\varepsilon/2) \\Rightarrow |x_n-x_m|<\\varepsilon/2$$` },
        { why:`Pick one subsequence index $K$ that is both past $H(\\varepsilon/2)$ and close enough to $x^\\ast$ (possible since the subsequence itself converges to $x^\\ast$).`, m:`$$\\exists K\\ge H(\\varepsilon/2),\\ K\\in\\{n_1,n_2,\\ldots\\}: \\ |x_K-x^\\ast|<\\varepsilon/2$$` },
        { why:`Route ANY term $x_n$ (with $n\\ge H(\\varepsilon/2)$) through this anchor $x_K$ via the triangle inequality.`, m:`$$n\\ge H(\\varepsilon/2) \\ \\Rightarrow\\ |x_n-x^\\ast| \\le |x_n-x_K|+|x_K-x^\\ast| < \\varepsilon/2+\\varepsilon/2=\\varepsilon$$` }
      ],
      ends:`Since $\\varepsilon$ was arbitrary, the WHOLE sequence (not just the subsequence) converges to $x^\\ast$. Combined with the easy direction, "convergent" and "Cauchy" are exactly the same property for sequences of real numbers — an equivalence that is itself a form of completeness, and fails over $\\mathbb{Q}$.`
    },
    cards:[
      { q:`State the Cauchy Convergence Criterion.`, a:`A sequence of real numbers converges if and only if it is a Cauchy sequence.`, kind:'state' },
      { q:`Which two earlier results does the hard direction (Cauchy $\\Rightarrow$ convergent) chain together?`, a:`"Cauchy $\\Rightarrow$ bounded" (a short direct argument) and the Bolzano–Weierstrass Theorem (<code>c.3.4.8</code>), which extracts a convergent subsequence from boundedness.`, kind:'recall' },
      { q:`Trap: does the Cauchy Convergence Criterion hold for sequences of RATIONAL numbers converging within $\\mathbb{Q}$?`, a:`No — e.g. the rational decimal truncations of $\\sqrt2$ form a Cauchy sequence in $\\mathbb{Q}$ with no limit IN $\\mathbb{Q}$; the criterion relies on completeness of $\\mathbb{R}$.`, kind:'trap' }
    ]
  },

  { id:'c.3.5.8', bartle:'3.5.8', sec:'3.5', kind:'theorem', tier:'core',
    title:'Contractive Sequences: Convergence and Error Estimates',
    oneLine:'If each step shrinks by a factor C < 1, the terms form a Cauchy sequence and converge, with tight explicit error bounds.',
    statement:`<p><b>Definition (3.5.7):</b> A sequence $X = (x_n)$ of real numbers is <b>contractive</b> if there exists a constant $C \\in (0, 1)$ such that:
      $$|x_{n+2} - x_{n+1}| \\le C |x_{n+1} - x_n| \\quad \\text{for all } n \\in \\mathbb{N}$$
      The number $C$ is called the <b>constant</b> of the contractive sequence.</p>
      <p><b>Theorem (3.5.8):</b> Every contractive sequence is a Cauchy sequence, and therefore is <b>convergent</b>.</p>
      <p><b>Corollary (3.5.10 - Error Estimates):</b> If $X = (x_n)$ is contractive with constant $C < 1$ converging to $x^*$, then:
      $$(1) \\quad |x^* - x_n| \\le \\frac{C^{n-1}}{1 - C} |x_2 - x_1| \\qquad (2) \\quad |x^* - x_n| \\le \\frac{C}{1 - C} |x_n - x_{n-1}|$$</p>`,
    intuition:`<p>Think of walking where each stride is guaranteed to be at most half (or at most factor $C < 1$) of the previous stride. The total remaining distance you can ever cover is bounded by a convergent geometric series $\\sum C^k$. Because the tail of a geometric series shrinks to zero, the steps cannot wander off or drift away — they are trapped into forming a Cauchy sequence, which completeness forces to converge!</p>
      <p>The error estimates are practically indispensable in numerical analysis: you can stop computing as soon as $|x_n - x_{n-1}|$ is small enough to guarantee a desired precision.</p>`,
    needs:['c.3.5.1','c.3.5.5','s.triangle-ineq'],
    traps:[
      `Checking only that $|x_{n+1} - x_n| \\to 0$ does NOT make a sequence contractive! E.g. for $x_n = \\sqrt{n}$, $|x_{n+1} - x_n| = 1/(\\sqrt{n+1}+\\sqrt{n}) \\to 0$, but $(\\sqrt{n})$ diverges. A contractive sequence requires a FIXED ratio $C < 1$.`,
      `Allowing $C = 1$: if $C = 1$, the sequence is not contractive (e.g. $x_n = n$ satisfies $|x_{n+2}-x_{n+1}| \\le 1 \\cdot |x_{n+1}-x_n|$, but diverges). $C$ must be strictly less than $1$.`
    ],
    proof:{
      idea:`Iterate the contractive inequality $n-1$ times to get $|x_{n+1} - x_n| \\le C^{n-1} |x_2 - x_1|$. For $m > n$, use the triangle inequality to sum the intermediate step sizes and apply the geometric series formula.`,
      why:`Each consecutive gap shrinks geometrically; the triangle inequality bounds the distance between any two distant terms $x_m$ and $x_n$ by the sum of intervening gaps, which is a convergent geometric progression.`,
      rungs:[
        { why:`Apply the contractive condition repeatedly back to the first step.`, m:`$$|x_{n+1} - x_n| \\le C |x_n - x_{n-1}| \\le C^2 |x_{n-1} - x_{n-2}| \\le \\cdots \\le C^{n-1} |x_2 - x_1|$$` },
        { why:`For $m > n$, expand $|x_m - x_n|$ by adding and subtracting intermediate terms and applying the triangle inequality.`, m:`$$|x_m - x_n| \\le |x_m - x_{m-1}| + |x_{m-1} - x_{m-2}| + \\cdots + |x_{n+1} - x_n|$$` },
        { why:`Substitute the geometric bounds for each consecutive difference.`, m:`$$|x_m - x_n| \\le (C^{m-2} + C^{m-3} + \\cdots + C^{n-1}) |x_2 - x_1| = C^{n-1} (1 + C + \\cdots + C^{m-n-1}) |x_2 - x_1|$$` },
        { why:`Sum the finite geometric series: $1 + C + \\cdots + C^{m-n-1} < \\frac{1}{1 - C}$ since $0 < C < 1$.`, m:`$$|x_m - x_n| \\le \\frac{C^{n-1}}{1 - C} |x_2 - x_1|$$` },
        { why:`Since $0 < C < 1$, $\\lim_{n\\to\\infty} C^{n-1} = 0$. Hence $(x_n)$ is a Cauchy sequence, and by Theorem 3.5.5 it converges to some limit $x^*$.`, m:`$$\\lim_{n\\to\\infty} \\frac{C^{n-1}}{1 - C} |x_2 - x_1| = 0 \\implies (x_n) \\text{ is Cauchy} \\implies (x_n) \\to x^*$$` }
      ],
      ends:`Every contractive sequence is Cauchy and thus converges. Letting $m \\to \\infty$ in the bound directly yields the a priori error estimate $|x^* - x_n| \\le \\frac{C^{n-1}}{1 - C} |x_2 - x_1|$.`
    },
    cards:[
      { q:`State the definition of a contractive sequence.`, a:`A sequence $(x_n)$ such that $|x_{n+2} - x_{n+1}| \\le C |x_{n+1} - x_n|$ for all $n$, for some fixed $C \\in (0, 1)$.`, kind:'state' },
      { q:`Does $|x_{n+1} - x_n| \\to 0$ imply $(x_n)$ is contractive?`, a:`No — e.g. for $x_n = \\sqrt{n}$, consecutive differences shrink to $0$, but $(x_n)$ diverges and is not contractive.`, kind:'trap' },
      { q:`What is the a priori error bound for a contractive sequence?`, a:`$|x^* - x_n| \\le \\dfrac{C^{n-1}}{1 - C} |x_2 - x_1|$.`, kind:'recall' }
    ]
  },

  { id:'c.4.1.7', bartle:'4.1.7', sec:'4.1', kind:'example', tier:'core',
    title:'Canonical ε-δ verifications: constant, identity, and x²',
    oneLine:'Working ε-δ proofs for the simplest functions — constant, identity, and squaring — are the building blocks every later continuity proof reuses.',
    statement:`<p>Bartle's Examples 4.1.7 verify the ε-δ definition directly for several basic functions:</p>
      <p>(a) $\\lim_{x\\to c}b=b$ for the constant function $f(x):=b$ — any $\\delta>0$ works, since $|f(x)-b|=0$ always.</p>
      <p>(b) $\\lim_{x\\to c}x=c$ for the identity function $g(x):=x$ — take $\\delta(\\varepsilon):=\\varepsilon$.</p>
      <p>(c) $\\lim_{x\\to c}x^2=c^2$ for $h(x):=x^2$ — take $\\delta(\\varepsilon):=\\min\\{1,\\ \\varepsilon/(2|c|+1)\\}$.</p>
      <p>(d) $\\lim_{x\\to c}(1/x)=1/c$ for $\\varphi(x):=1/x$, $c>0$ — take $\\delta(\\varepsilon):=\\min\\{\\tfrac12c,\\ \\tfrac12c^2\\varepsilon\\}$.</p>`,
    intuition:`<p>Every one of these is the SAME three-step recipe: bound the target expression $|f(x)-L|$ above by something involving $|x-c|$ (often after first restricting $x$ to a neighbourhood of $c$, as in the $x^2$ and $1/x$ cases, to control an extra factor like $|x+c|$), then choose $\\delta$ small enough to crush that bound below $\\varepsilon$. Once these four base cases are secured, the Algebra of Limits (<code>c.4.2.4</code>) builds every polynomial and rational-function limit out of them for free — no further ε-δ chasing needed.</p>`,
    needs:['c.4.1.4','c.4.1.1'],
    traps:[
      `Hunting for the "one true" $\\delta$ — any $\\delta$ that WORKS is acceptable; Bartle's specific choices (e.g. $\\min\\{1,\\varepsilon/(2|c|+1)\\}$) are far from unique.`,
      `For the $x^2$ case, forgetting the auxiliary restriction $|x-c|<1$ is what lets $|x+c|$ get bounded by the CONSTANT $2|c|+1$ in the first place — without capping $|x-c|$ first, $|x+c|$ could grow without bound.`,
      `For the $1/x$ case ($c>0$), forgetting to first restrict $x$ away from $0$ (via $|x-c|<\\tfrac12c$) before bounding $1/(cx)$ — the whole argument breaks down as $x\\to0$.`
    ],
    cards:[
      { q:`For $h(x)=x^2$, what auxiliary restriction on $x$ lets you bound $|x+c|$ by a constant?`, a:`Restrict to $|x-c|<1$ first; this forces $|x|<|c|+1$, so $|x+c|\\le|x|+|c|<2|c|+1$.`, kind:'recall' },
      { q:`Find a valid $\\delta(\\varepsilon)$ for $\\lim_{x\\to c}x^2=c^2$.`, a:`$\\delta(\\varepsilon):=\\min\\{1,\\ \\varepsilon/(2|c|+1)\\}$.`, kind:'apply' },
      { q:`Trap: for the constant function $f(x)=b$, does $\\delta$ need to depend on $\\varepsilon$ at all?`, a:`No — ANY $\\delta>0$ works, since $|f(x)-b|=0<\\varepsilon$ always; this is the one case where $\\delta$ never needs shrinking.`, kind:'trap' }
    ]
  },

  { id:'c.4.1.10', bartle:'4.1.10', sec:'4.1', kind:'example', tier:'core',
    title:'Standard examples of functions with no limit at a point',
    oneLine:'1/x, sgn(x), and sin(1/x) all fail to have a limit at 0 — each disproved by exhibiting one bad sequence.',
    statement:`<p>Bartle's Examples 4.1.10 apply the Divergence Criteria (<code>c.4.1.9</code>) to three standard functions, all failing to have a limit at $c=0$:</p>
      <p>(a) $\\lim_{x\\to0}(1/x)$ does not exist: take $x_n:=1/n\\to0$; then $\\varphi(x_n)=n$, and $(n)$ is unbounded, hence not convergent.</p>
      <p>(b) $\\lim_{x\\to0}\\operatorname{sgn}(x)$ does not exist, where $\\operatorname{sgn}(x)=1$ ($x>0$), $0$ ($x=0$), $-1$ ($x<0$): take $x_n:=(-1)^n/n\\to0$; then $\\operatorname{sgn}(x_n)=(-1)^n$, which does not converge.</p>
      <p>(c) $\\lim_{x\\to0}\\sin(1/x)$ does not exist: take $x_n:=1/(n\\pi)\\to0$ giving $\\sin(1/x_n)=0\\to0$, and $y_n:=1/(\\tfrac{\\pi}{2}+2n\\pi)\\to0$ giving $\\sin(1/y_n)=1\\to1$; different image limits from sequences both $\\to0$.</p>`,
    intuition:`<p>Each example is a direct application of "one bad sequence is enough" (<code>c.4.1.9</code>): you never fight the ε-δ definition head-on to disprove a limit — you just exhibit a sequence heading to $c$ whose images misbehave (diverge outright, or converge to the wrong thing, or two sequences whose images disagree).</p>`,
    needs:['c.4.1.9','c.4.1.8'],
    traps:[
      `Concluding "$1/x$ has no limit anywhere" — it fails only AT $c=0$; away from $0$, $\\lim_{x\\to c}(1/x)=1/c$ exists perfectly well (<code>c.4.1.7</code>(d)).`,
      `For the $\\sin(1/x)$ case, forgetting BOTH witnessing sequences must genuinely converge to $0$ AND avoid $0$ itself — both $x_n=1/(n\\pi)$ and $y_n$ satisfy this.`,
      `Confusing $\\operatorname{sgn}$'s behaviour at $0$ with the ONE-SIDED limits, which DO exist and disagree ($+1$ from the right, $-1$ from the left) — that distinction is exactly what one-sided limits (<code>c.4.3.1</code>) are built to capture.`
    ],
    cards:[
      { q:`Which single sequence shows $\\lim_{x\\to0}(1/x)$ does not exist, and why does it work?`, a:`$x_n=1/n\\to0$; then $\\varphi(x_n)=n$ is unbounded, hence not convergent — by the Divergence Criteria this rules out any limit.`, kind:'apply' },
      { q:`State the two sequences used to show $\\lim_{x\\to0}\\sin(1/x)$ does not exist.`, a:`$x_n=1/(n\\pi)\\to0$ with $\\sin(1/x_n)=0$ always; $y_n=1/(\\pi/2+2n\\pi)\\to0$ with $\\sin(1/y_n)=1$ always — different image limits.`, kind:'state' },
      { q:`Trap: does $\\lim_{x\\to0}\\operatorname{sgn}(x)$ failing to exist mean the one-sided limits also fail to exist?`, a:`No — both one-sided limits exist ($+1$ and $-1$); they simply disagree, which is exactly why the two-sided limit fails.`, kind:'trap' }
    ]
  },

  { id:'c.4.2.4', bartle:'4.2.4', sec:'4.2', kind:'theorem', tier:'core',
    title:'Algebra of Limits (for functions)',
    oneLine:'The limit of a sum, difference, product, or (nonzero-limit) quotient of functions is the sum, difference, product, or quotient of their limits.',
    statement:`<p>Let $A\\subseteq\\mathbb{R}$, let $f,g:A\\to\\mathbb{R}$, let $c$ be a cluster point of $A$, and let $b\\in\\mathbb{R}$.</p>
      <p>(a) If $\\lim_{x\\to c}f=L$ and $\\lim_{x\\to c}g=M$, then $\\lim_{x\\to c}(f+g)=L+M$, $\\lim_{x\\to c}(f-g)=L-M$, $\\lim_{x\\to c}(fg)=LM$, and $\\lim_{x\\to c}(bf)=bL$.</p>
      <p>(b) If additionally $h:A\\to\\mathbb{R}$ with $h(x)\\ne0$ for all $x\\in A$ and $\\lim_{x\\to c}h=H\\ne0$, then $\\lim_{x\\to c}(f/h)=L/H$.</p>`,
    intuition:`<p>Every algebra-of-limits fact already proved for SEQUENCES (sums, products, quotients) transfers automatically to functions — for free — via the Sequential Criterion (<code>c.4.1.8</code>). You never need a fresh ε-δ argument for a sum or product of functions once you already know each piece's own limit.</p>`,
    needs:['c.4.1.8','s.triangle-ineq'],
    traps:[
      `Applying the quotient rule when the denominator's limit is $0$ — undefined; must be handled separately (often by cancelling a common factor, or the limit may simply not exist, as with $1/x$ at $0$, <code>c.4.1.10</code>).`,
      `Trying to use this theorem to evaluate a limit BEFORE confirming both individual limits actually exist — the theorem's conclusion presupposes both $\\lim f$ and $\\lim g$ already exist.`
    ],
    proof:{
      idea:`Reduce to the already-known algebra of limits for SEQUENCES via the Sequential Criterion (<code>c.4.1.8</code>): feed in an arbitrary sequence $x_n\\to c$, note $f(x_n)\\to L$ and $g(x_n)\\to M$ are already guaranteed, apply the known sequence-arithmetic facts, then translate back.`,
      why:`The Sequential Criterion is precisely a bridge that lets EVERY fact already proved about sequences (uniqueness, algebra of limits, order properties) be imported into the theory of function limits without re-deriving anything from scratch.`,
      rungs:[
        { why:`Take ANY sequence $(x_n)$ in $A\\setminus\\{c\\}$ with $x_n\\to c$; by the Sequential Criterion, both image sequences converge to the function limits.`, m:`$$\\lim_{x\\to c}f=L,\\ \\lim_{x\\to c}g=M \\ \\Rightarrow\\ (f(x_n))\\to L,\\ (g(x_n))\\to M \\quad (\\text{by } c.4.1.8)$$` },
        { why:`This is now purely a statement about SEQUENCES — apply the already-known algebra of limits for convergent sequences termwise.`, m:`$$\\big(f(x_n)+g(x_n)\\big)\\to L+M, \\quad \\big(f(x_n)g(x_n)\\big)\\to LM$$` },
        { why:`But $\\big((f+g)(x_n)\\big)=\\big(f(x_n)+g(x_n)\\big)$ by the very DEFINITION of the sum of two functions.`, m:`$$\\big((f+g)(x_n)\\big) \\to L+M$$` },
        { why:`This held for an ARBITRARY sequence $(x_n)\\to c$ in $A\\setminus\\{c\\}$ — exactly the hypothesis of the Sequential Criterion, applied in the other direction.`, m:`$$\\forall (x_n)\\to c,\\ x_n\\ne c:\\ \\big((f+g)(x_n)\\big)\\to L+M$$` },
        { why:`So the Sequential Criterion (<code>c.4.1.8</code>) hands back a genuine function limit; the product, difference, scalar-multiple, and (when $H\\ne0$) quotient rules follow the identical pattern.`, m:`$$\\lim_{x\\to c}(f+g)=L+M \\quad(\\text{similarly for } f-g,\\ fg,\\ bf,\\ f/h)$$` }
      ],
      ends:`Every algebra-of-limits fact already proved for sequences transfers automatically to functions, for free, via the Sequential Criterion — no new ε-δ argument is ever needed for sums, differences, products, or (nonzero) quotients.`
    },
    cards:[
      { q:`State the sum and product rules for function limits.`, a:`If $\\lim_{x\\to c}f=L$ and $\\lim_{x\\to c}g=M$, then $\\lim_{x\\to c}(f+g)=L+M$ and $\\lim_{x\\to c}(fg)=LM$.`, kind:'state' },
      { q:`What earlier theorem does the proof route everything through, and why does that work?`, a:`The Sequential Criterion (<code>c.4.1.8</code>) — it converts a function-limit question into a sequence-limit question, where the algebra of limits is already established.`, kind:'recall' },
      { q:`Trap: can you conclude $\\lim_{x\\to c}(f/h)$ exists just because $\\lim f$ and $\\lim h$ both exist?`, a:`No — you also need $\\lim h\\ne0$; if $H=0$ the quotient rule simply does not apply (the limit may or may not exist by other means).`, kind:'trap' }
    ]
  },

  { id:'c.4.2.5', bartle:'4.2.5', sec:'4.2', kind:'example', tier:'core',
    title:'Limits of polynomial and rational functions',
    oneLine:'The limit of a polynomial at c is just its value at c; same for a rational function, as long as the denominator does not vanish there.',
    statement:`<p>Bartle's Examples 4.2.5 build up to two key results using the Algebra of Limits (<code>c.4.2.4</code>) repeatedly:</p>
      <p>(f) If $p(x)=a_nx^n+\\cdots+a_1x+a_0$ is a polynomial, then $\\lim_{x\\to c}p(x)=p(c)$ for every $c\\in\\mathbb{R}$.</p>
      <p>(g) If $p,q$ are polynomials and $q(c)\\ne0$, then $\\lim_{x\\to c}\\dfrac{p(x)}{q(x)}=\\dfrac{p(c)}{q(c)}$.</p>
      <p>A further example (d) shows that when $q(c)=0$, the limit may STILL exist after cancelling a common factor: e.g. $\\lim_{x\\to2}\\dfrac{x^2-4}{3x-6}=\\lim_{x\\to2}\\dfrac{x+2}{3}=\\dfrac{4}{3}$, even though the function is undefined at $x=2$.</p>`,
    intuition:`<p>A polynomial is nothing but repeated sums and products of the identity function and constants (<code>c.4.1.7</code>) — the Algebra of Limits (<code>c.4.2.4</code>), applied term by term, therefore turns "evaluate the limit" into "just plug in $x=c$". The same holds for a ratio of polynomials, PROVIDED the denominator doesn't vanish at $c$; when it does, direct substitution gives the meaningless $0/0$, and a factor must first be cancelled algebraically before Theorem <code>c.4.2.4</code>(b) can even be applied.</p>`,
    needs:['c.4.2.4','c.4.1.7'],
    traps:[
      `Plugging $x=c$ directly into $p(x)/q(x)$ when $q(c)=0$ — the quotient rule (<code>c.4.2.4</code>(b)) does NOT apply there; you must factor and cancel first, and even then the limit exists only if the common factor actually removes the zero.`,
      `Assuming "the limit equals the function value" is automatic for ALL functions — it's a special feature of polynomials and rational functions (this is precisely what CONTINUITY means, the subject of Chapter 5), not a general fact about limits.`,
      `Forgetting that in the cancelled example $(x^2-4)/(3x-6)\\to4/3$ at $x=2$, the ORIGINAL function is not even defined at $x=2$ — the limit exists despite that, since limits never care about the value (or non-existence of a value) exactly at $c$.`
    ],
    cards:[
      { q:`If $p(x)=3x^2-5x+1$, what is $\\lim_{x\\to2}p(x)$?`, a:`$p(2)=3(4)-5(2)+1=3$ — just evaluate the polynomial at $c=2$.`, kind:'apply' },
      { q:`Why does $\\lim_{x\\to c}p(x)/q(x)=p(c)/q(c)$ require $q(c)\\ne0$?`, a:`Because the quotient rule in the Algebra of Limits (<code>c.4.2.4</code>(b)) needs the denominator's limit $H$ to be nonzero to even make sense.`, kind:'recall' },
      { q:`Trap: does $\\lim_{x\\to2}(x^2-4)/(3x-6)$ exist, even though $q(2)=3(2)-6=0$?`, a:`Yes — cancel the common factor $(x-2)$ first: the simplified function $(x+2)/3\\to4/3$ as $x\\to2$, even though the original form is $0/0$ at $x=2$.`, kind:'trap' }
    ]
  },

  { id:'c.4.2.7', bartle:'4.2.7', sec:'4.2', kind:'theorem', tier:'core',
    title:'Squeeze Theorem (for functions)',
    oneLine:'A function sandwiched between two functions converging to the same limit is forced to converge to that same limit.',
    statement:`<p>Let $A \\subseteq \\mathbb{R}$, let $f, g, h: A \\to \\mathbb{R}$, and let $c \\in \\mathbb{R}$ be a cluster point of $A$.</p>
      <p>If:
      $$f(x) \\le g(x) \\le h(x) \\quad \\text{for all } x \\in A, \\; x \\ne c$$
      and if:
      $$\\lim_{x\\to c} f(x) = L = \\lim_{x\\to c} h(x)$$
      then $\\lim_{x\\to c} g(x)$ exists and:
      $$\\lim_{x\\to c} g(x) = L$$</p>`,
    intuition:`<p>Just like the sequence Squeeze Theorem (<code>c.3.2.7</code>), the middle function $g(x)$ has nowhere to escape. As $x$ gets close to $c$, the lower ceiling $f(x)$ and upper ceiling $h(x)$ squeeze together to the same number $L$. Since $g(x)$ is permanently trapped between them, it has no choice but to head towards $L$ as well.</p>
      <p>This is exceptionally useful when $g(x)$ contains a component that oscillates wildly (like $\\sin(1/x)$), but is damped down by a factor that shrinks to zero (like $|x|$).</p>`,
    needs:['c.4.1.8','c.3.2.7'],
    traps:[
      `The two outer limits MUST be equal: if $\\lim f = L_1$ and $\\lim h = L_2$ with $L_1 \\ne L_2$, the Squeeze Theorem gives NO conclusion about $\\lim g$.`,
      `The inequality $f(x) \\le g(x) \\le h(x)$ must hold for all $x$ in a punctured neighborhood of $c$, not merely at some points.`
    ],
    proof:{
      idea:`Use the Sequential Criterion (<code>c.4.1.8</code>): take any sequence $(x_n)$ in $A \\setminus \\{c\\}$ with $x_n \\to c$. Then $f(x_n) \\le g(x_n) \\le h(x_n)$ and the sequence Squeeze Theorem forces $g(x_n) \\to L$.`,
      why:`The Sequential Criterion bridges function limits to sequence limits, where the Squeeze Theorem is already proved (<code>c.3.2.7</code>).`,
      rungs:[
        { why:`Let $(x_n)$ be an arbitrary sequence in $A \\setminus \\{c\\}$ such that $(x_n) \\to c$.`, m:`$$(x_n) \\text{ in } A, \\quad x_n \\ne c, \\quad \\lim(x_n) = c$$` },
        { why:`By the Sequential Criterion (4.1.8), since $\\lim_{x\\to c} f = L$ and $\\lim_{x\\to c} h = L$, the image sequences converge.`, m:`$$\\lim(f(x_n)) = L \\quad \\text{and} \\quad \\lim(h(x_n)) = L$$` },
        { why:`The sandwich inequality holds for every term: $f(x_n) \\le g(x_n) \\le h(x_n)$ for all $n \\in \\mathbb{N}$.`, m:`$$f(x_n) \\le g(x_n) \\le h(x_n) \\quad \\text{for all } n \\in \\mathbb{N}$$` },
        { why:`Apply the Squeeze Theorem for sequences (Theorem 3.2.7) to $(f(x_n)), (g(x_n)), (h(x_n))$.`, m:`$$\\lim(g(x_n)) = L$$` },
        { why:`Since this holds for every such sequence $(x_n)$, the Sequential Criterion guarantees that $\\lim_{x\\to c} g(x) = L$.`, m:`$$\\lim_{x\\to c} g(x) = L$$` }
      ],
      ends:`The Squeeze Theorem for functions is proved via the Sequential Criterion and the sequence Squeeze Theorem.`
    },
    cards:[
      { q:`State the Squeeze Theorem for functions.`, a:`If $f(x) \\le g(x) \\le h(x)$ near $c$ ($x \\ne c$) and $\\lim_{x\\to c} f(x) = L = \\lim_{x\\to c} h(x)$, then $\\lim_{x\\to c} g(x) = L$.`, kind:'state' },
      { q:`How is the function Squeeze Theorem proved using earlier results?`, a:`By taking an arbitrary sequence $x_n \\to c$ ($x_n \\ne c$) and applying the sequence Squeeze Theorem via the Sequential Criterion.`, kind:'recall' },
      { q:`Trap: if $f(x) \\le g(x) \\le h(x)$ and $\\lim f = 0, \\lim h = 1$, does $\\lim g$ exist?`, a:`Not necessarily — the outer limits must match for the Squeeze Theorem to apply.`, kind:'trap' }
    ]
  },

  { id:'c.4.2.8', bartle:'4.2.8', sec:'4.2', kind:'example', tier:'core',
    title:'Squeeze Theorem examples for functions',
    oneLine:'Squeezing a function between two simple functions with the same limit pins down tricky limits like x^{3/2}→0 and x·sin(1/x)→0 at 0, without ever computing the middle function directly.',
    statement:`<p>Bartle's Examples 4.2.8 apply the (function) Squeeze Theorem — the direct analogue for functions of the sequence Squeeze Theorem <code>c.3.2.7</code> — to evaluate limits that the Algebra of Limits (<code>c.4.2.4</code>) cannot reach directly:</p>
      <p>(a) $\\lim_{x\\to0}x^{3/2}=0$ for $x>0$: since $x^2\\le x^{3/2}\\le x$ for $0 < x\\le1$, and both $x^2,x\\to0$, the middle term is squeezed to $0$.</p>
      <p>(f) $\\lim_{x\\to0}\\big(x\\sin(1/x)\\big)=0$: since $-|x|\\le x\\sin(1/x)\\le|x|$ for all $x\\ne0$ (as $|\\sin z|\\le1$ always), and $|x|\\to0$, the limit is $0$.</p>`,
    intuition:`<p>Both examples squeeze a function that is HARD to evaluate directly (its own factor, $\\sin(1/x)$, doesn't even have a limit at $0$ — see <code>c.4.1.10</code>) between two EASY functions with a common, obvious limit. The squeeze never needs to understand the oscillating factor at all — only that it's trapped between $\\pm1$.</p>`,
    needs:['c.3.2.7','c.4.1.8'],
    traps:[
      `Trying to use the Algebra of Limits (<code>c.4.2.4</code>) directly on $x\\sin(1/x)$ at $0$ — impossible, since $\\sin(1/x)$ itself has no limit at $0$ (<code>c.4.1.10</code>); squeezing sidesteps that entirely by bounding rather than computing.`,
      `Forgetting the squeeze inequality must hold for ALL $x$ near $c$ (excluding $c$ itself if needed), not just for some values.`
    ],
    cards:[
      { q:`What two bounding functions squeeze $x\\sin(1/x)$ near $0$, and why do they work?`, a:`$-|x|\\le x\\sin(1/x)\\le|x|$, since $|\\sin z|\\le1$ always; both bounds $\\to0$ as $x\\to0$.`, kind:'apply' },
      { q:`Why can't the Algebra of Limits alone evaluate $\\lim_{x\\to0}x\\sin(1/x)$?`, a:`Because $\\sin(1/x)$ has no limit at $0$ at all (<code>c.4.1.10</code>), so the product rule's hypotheses are never satisfied.`, kind:'recall' },
      { q:`State the analogy this result relies on.`, a:`The function Squeeze Theorem is the direct analogue, for functions, of the sequence Squeeze Theorem <code>c.3.2.7</code>.`, kind:'state' }
    ]
  },

  { id:'c.4.3.1', bartle:'4.3.1', sec:'4.3', kind:'definition', tier:'core',
    title:'One-sided (right-hand / left-hand) limits',
    oneLine:'A right-hand limit only looks at points approaching c from above; a left-hand limit only from below.',
    statement:`<p>Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$.</p>
      <p>(i) If $c$ is a cluster point of $A\\cap(c,\\infty)$, then $L$ is the <b>right-hand limit</b> of $f$ at $c$, written $\\lim_{x\\to c^+}f=L$, if for every $\\varepsilon>0$ there is $\\delta>0$ such that $x\\in A$, $0 < x-c<\\delta$ implies $|f(x)-L|<\\varepsilon$.</p>
      <p>(ii) If $c$ is a cluster point of $A\\cap(-\\infty,c)$, then $L$ is the <b>left-hand limit</b> of $f$ at $c$, written $\\lim_{x\\to c^-}f=L$, if for every $\\varepsilon>0$ there is $\\delta>0$ such that $x\\in A$, $0 < c-x<\\delta$ implies $|f(x)-L|<\\varepsilon$.</p>`,
    intuition:`<p>This is the ordinary ε-δ definition of a limit (<code>c.4.1.4</code>) with the neighbourhood of $c$ chopped in half — only $x>c$ counts for the right-hand limit, only $x < c$ for the left-hand one. A function can have BOTH one-sided limits exist while the ordinary (two-sided) limit fails, precisely when the two one-sided limits disagree.</p>
      <p><b>Worked micro-example:</b> $\\operatorname{sgn}(x)$ (the function whose ordinary limit at $0$ was shown not to exist in <code>c.4.1.10</code>) has $\\lim_{x\\to0^+}\\operatorname{sgn}(x)=1$ and $\\lim_{x\\to0^-}\\operatorname{sgn}(x)=-1$ — both one-sided limits exist perfectly well, they simply don't match.</p>`,
    needs:['c.4.1.4','c.4.1.1','c.4.1.10'],
    traps:[
      `Assuming both one-sided limits existing automatically means the (two-sided) limit exists — only true if they also AGREE; $\\operatorname{sgn}(x)$ is the standard counterexample.`,
      `Forgetting $c$ itself is still excluded ($0 < x-c$, not $0\\le x-c$) — a one-sided limit, like an ordinary limit, never depends on $f(c)$.`,
      `Mixing up which inequality goes with which side — right-hand uses $0 < x-c<\\delta$ (i.e. $x>c$), left-hand uses $0 < c-x<\\delta$ (i.e. $x < c$).`
    ],
    cards:[
      { q:`State the ε-δ definition of the right-hand limit $\\lim_{x\\to c^+}f=L$.`, a:`For every $\\varepsilon>0$ there is $\\delta>0$ such that $x\\in A$, $0 < x-c<\\delta \\Rightarrow |f(x)-L|<\\varepsilon$.`, kind:'state' },
      { q:`For $\\operatorname{sgn}(x)$, state both one-sided limits at $c=0$.`, a:`$\\lim_{x\\to0^+}\\operatorname{sgn}(x)=1$ and $\\lim_{x\\to0^-}\\operatorname{sgn}(x)=-1$.`, kind:'apply' },
      { q:`Trap: if both one-sided limits of $f$ at $c$ exist, does $\\lim_{x\\to c}f$ automatically exist?`, a:`No — only if the two one-sided limits are EQUAL; $\\operatorname{sgn}(x)$ at $0$ has both existing but disagreeing, so no two-sided limit exists.`, kind:'trap' }
    ]
  },

  { id:'c.4.3.3', bartle:'4.3.3', sec:'4.3', kind:'theorem', tier:'core',
    title:'Two-Sided Limit via One-Sided Limits',
    oneLine:'The ordinary two-sided limit exists and equals L if and only if both the right-hand and left-hand limits exist and are equal to L.',
    statement:`<p>Let $A \\subseteq \\mathbb{R}$, let $f: A \\to \\mathbb{R}$, and let $c \\in \\mathbb{R}$ be a cluster point of both $A \\cap (c, \\infty)$ and $A \\cap (-\\infty, c)$.</p>
      <p>Then $\\lim_{x\\to c} f(x) = L$ if and only if:
      $$\\lim_{x\\to c^+} f(x) = L = \\lim_{x\\to c^-} f(x)$$</p>`,
    intuition:`<p>Approaching $c$ from all directions simply means approaching either from the right ($x > c$) or from the left ($x < c$). If the full limit exists, restricting to one side cannot change anything — both one-sided limits must equal $L$.</p>
      <p>Conversely, if both one-sided limits exist and agree on $L$, they give two tolerances $\\delta_1$ (for the right side) and $\\delta_2$ (for the left side). Simply choose $\\delta = \\min\\{\\delta_1, \\delta_2\\}$; then on BOTH sides of $c$ within distance $\\delta$, $f(x)$ is within $\\varepsilon$ of $L$, giving the two-sided limit!</p>`,
    needs:['c.4.3.1','c.4.1.4'],
    traps:[
      `Forgetting BOTH one-sided limits must be EQUAL. Having both exist is not enough: for $\\operatorname{sgn}(x)$ at $c=0$, $\\lim_{x\\to0^+} = +1$ and $\\lim_{x\\to0^-} = -1$, so the two-sided limit does NOT exist.`,
      `Assuming the theorem applies at endpoints: if $c$ is the left endpoint of an interval $A = [c, b)$, only the right-hand limit makes sense, and it is automatically equal to the limit relative to $A$.`
    ],
    proof:{
      idea:`(⇒) Direct restriction: any $\\delta$ working for all $0 < |x-c| < \\delta$ works automatically for $0 < x-c < \\delta$ and $0 < c-x < \\delta$. (⇐) Take $\\delta = \\min\\{\\delta_1, \\delta_2\\}$ so that points on either side are controlled.`,
      why:`The punctured neighborhood $0 < |x-c| < \\delta$ is literally the union of the right-hand interval $(c, c+\\delta)$ and the left-hand interval $(c-\\delta, c)$.`,
      rungs:[
        { why:`(⇒) Assume $\\lim_{x\\to c} f = L$. Given $\\varepsilon > 0$, there exists $\\delta > 0$ such that $0 < |x-c| < \\delta$ ($x \\in A$) implies $|f(x) - L| < \\varepsilon$.`, m:`$$\\forall\\, \\varepsilon > 0, \\; \\exists\\delta > 0: \\; 0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon$$` },
        { why:`If $x \\in A$ and $0 < x - c < \\delta$, then $0 < |x - c| < \\delta$, so $|f(x) - L| < \\varepsilon$. Hence $\\lim_{x\\to c^+} f = L$. Similarly for $x < c$, $\\lim_{x\\to c^-} f = L$.`, m:`$$\\lim_{x\\to c^+} f = L \\quad \\text{and} \\quad \\lim_{x\\to c^-} f = L$$` },
        { why:`(⇐) Assume $\\lim_{x\\to c^+} f = L$ and $\\lim_{x\\to c^-} f = L$. Given $\\varepsilon > 0$, obtain $\\delta_1 > 0$ for the right side and $\\delta_2 > 0$ for the left side.`, m:`$$0 < x - c < \\delta_1 \\implies |f(x) - L| < \\varepsilon, \\qquad 0 < c - x < \\delta_2 \\implies |f(x) - L| < \\varepsilon$$` },
        { why:`Define $\\delta := \\min\\{\\delta_1, \\delta_2\\} > 0$. If $x \\in A$ satisfies $0 < |x - c| < \\delta$, then either $0 < x - c < \\delta \\le \\delta_1$ or $0 < c - x < \\delta \\le \\delta_2$.`, m:`$$\\delta := \\min\\{\\delta_1, \\delta_2\\} > 0$$` },
        { why:`In either case, $|f(x) - L| < \\varepsilon$. Thus $\\lim_{x\\to c} f = L$.`, m:`$$0 < |x - c| < \\delta \\implies |f(x) - L| < \\varepsilon \\implies \\lim_{x\\to c} f = L$$` }
      ],
      ends:`The two-sided limit exists and equals $L$ if and only if both one-sided limits exist and equal $L$.`
    },
    cards:[
      { q:`State Theorem 4.3.3 relating two-sided and one-sided limits.`, a:`$\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to c^+} f(x) = L = \\lim_{x\\to c^-} f(x)$.`, kind:'state' },
      { q:`In the proof of the (⇐) direction, how is $\\delta$ chosen from $\\delta_1$ and $\\delta_2$?`, a:`$\\delta := \\min\\{\\delta_1, \\delta_2\\}$, so the bound holds whether $x$ is to the right or to the left of $c$.`, kind:'recall' },
      { q:`Trap: why does $\\lim_{x\\to0} \\operatorname{sgn}(x)$ fail to exist under Theorem 4.3.3?`, a:`Because $\\lim_{x\\to0^+} \\operatorname{sgn}(x) = 1 \\ne -1 = \\lim_{x\\to0^-} \\operatorname{sgn}(x)$; the two one-sided limits are not equal.`, kind:'trap' }
    ]
  }

);

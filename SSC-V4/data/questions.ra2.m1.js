/* Real Analysis II · Module I — Continuous Functions */
QUESTIONS.push(
  { id:'q.ra2.m1.01', course:'ra2', module:'ra2.m1', marks:2,
    title:'ε–δ Definition of Continuity',
    source:'exam-pattern',
    prompt:`State the $\\varepsilon$–$\\delta$ definition of continuity of a function $f:A\\to\\mathbb{R}$ at a point $c\\in A$, where $A\\subseteq\\mathbb{R}$.`,
    tests:['c.5.1.1'],
    approach:`<p>A pure state/recall question — reproduce Definition 5.1.1 exactly, with the quantifiers ($\\forall\\varepsilon$, $\\exists\\delta$, $\\forall x$) in the correct order.</p>`,
    solution:`<p>Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$, and $c\\in A$. We say $f$ is <b>continuous at $c$</b> if for every $\\varepsilon>0$ there exists $\\delta>0$ (depending on $\\varepsilon$, and in general on $c$) such that whenever $x\\in A$ and $|x-c|<\\delta$, it follows that</p>
$$|f(x)-f(c)|<\\varepsilon.$$
<p>If $f$ is not continuous at $c$, we say $f$ is <b>discontinuous</b> at $c$. If $f$ is continuous at every point of $A$, we say $f$ is continuous on $A$.</p>`,
    trap:`Common losses: quoting the condition for all $x\\in\\mathbb{R}$ instead of $x\\in A$; reversing the quantifier order ($\\delta$ chosen before $\\varepsilon$); omitting that $\\delta$ may depend on both $\\varepsilon$ and $c$.` },

  { id:'q.ra2.m1.02', course:'ra2', module:'ra2.m1', marks:5,
    title:'Continuity from the Definition',
    source:'exam-pattern',
    prompt:`Using the $\\varepsilon$–$\\delta$ definition directly (no sequential criterion), prove: <br>(a) $f(x):=x^2$ is continuous at an arbitrary point $c\\in\\mathbb{R}$; <br>(b) $g(x):=1/x$ is continuous on $[a,\\infty)$ for fixed $a>0$.`,
    tests:['c.5.1.1'],
    approach:`<p>To prove continuity directly from the definition: start from the target quantity $|f(x)-f(c)|$, factor/bound it algebraically as (some expression)$\\cdot|x-c|$, use a <i>preliminary restriction</i> such as $|x-c|<1$ to control any part of the expression that still depends on $x$, and finally choose $\\delta=\\min\\{\\text{that restriction},\\ \\varepsilon/(\\text{bound})\\}$.</p>`,
    solution:`<p><b>(a) $f(x)=x^2$ at $c$.</b> Let $\\varepsilon>0$. Write</p>
$$|f(x)-f(c)|=|x^2-c^2|=|x+c|\\,|x-c|.$$
<p>First restrict $|x-c|<1$; then $|x|<|c|+1$, so $|x+c|\\le|x|+|c|<2|c|+1$. Hence for $|x-c|<1$,</p>
$$|x^2-c^2|<(2|c|+1)\\,|x-c|.$$
<p>Choose $\\delta:=\\min\\{1,\\ \\varepsilon/(2|c|+1)\\}$. If $|x-c|<\\delta$ then both bounds apply, so</p>
$$|x^2-c^2|<(2|c|+1)\\cdot\\frac{\\varepsilon}{2|c|+1}=\\varepsilon.$$
<p>Since $c$ was arbitrary, $f$ is continuous on $\\mathbb{R}$.</p>
<p><b>(b) $g(x)=1/x$ on $[a,\\infty)$, at arbitrary $c\\ge a>0$.</b></p>
$$|g(x)-g(c)|=\\left|\\frac1x-\\frac1c\\right|=\\frac{|c-x|}{xc}.$$
<p>For $x\\in[a,\\infty)$ we have $x\\ge a$ and $c\\ge a$, so $xc\\ge a^2$, giving $|g(x)-g(c)|\\le|x-c|/a^2$. Given $\\varepsilon>0$, choose $\\delta:=a^2\\varepsilon$. Then $|x-c|<\\delta\\Rightarrow |g(x)-g(c)|<a^2\\varepsilon/a^2=\\varepsilon$. No preliminary restriction is needed because $x\\ge a>0$ always keeps $x$ away from $0$.</p>`,
    trap:`In (a), forgetting the preliminary restriction $|x-c|<1$ — without it, $|x+c|$ is not yet bounded and the $\\delta$ cannot be written down. In (b), the whole argument rests on the domain being $[a,\\infty)$ rather than $(0,\\infty)$: it is exactly the floor $x\\ge a$ that gives the uniform bound $xc\\ge a^2$; quoting this proof on $(0,\\infty)$ is invalid since no fixed lower bound on $x$ exists there.` },

  { id:'q.ra2.m1.03', course:'ra2', module:'ra2.m1', marks:2,
    title:'Sequential / Discontinuity Criterion',
    source:'exam-pattern',
    prompt:`State (i) the Sequential Criterion for continuity and (ii) the Discontinuity Criterion.`,
    tests:['c.5.1.3','c.5.1.4'],
    approach:`<p>Recall statement. The Discontinuity Criterion is simply the contrapositive form of the Sequential Criterion, phrased so it can be used to <i>prove</i> discontinuity with a single witness sequence.</p>`,
    solution:`<p><b>(i) Sequential Criterion (5.1.3).</b> Let $f:A\\to\\mathbb{R}$, $c\\in A$. Then $f$ is continuous at $c$ if and only if for every sequence $(x_n)$ in $A$ with $x_n\\to c$, the sequence $(f(x_n))$ converges to $f(c)$.</p>
<p><b>(ii) Discontinuity Criterion (5.1.4).</b> $f$ is discontinuous at $c\\in A$ if and only if there exists a sequence $(x_n)$ in $A$ with $x_n\\to c$ such that the sequence $(f(x_n))$ does <b>not</b> converge to $f(c)$ — either $(f(x_n))$ diverges, or it converges to some limit $\\ne f(c)$.</p>`,
    trap:`Stating only the "if" direction; forgetting the sequence must lie in $A$; conflating "does not converge to $f(c)$" with "converges to a different value" — the image sequence may simply fail to converge at all (oscillate), which is equally valid for the criterion.` },

  { id:'q.ra2.m1.04', course:'ra2', module:'ra2.m1', marks:5,
    title:'Discontinuity of sgn at 0',
    source:'exam-pattern',
    prompt:`Define $\\mathrm{sgn}(x):=1$ for $x>0$, $\\mathrm{sgn}(0):=0$, $\\mathrm{sgn}(x):=-1$ for $x<0$. Use the Sequential Criterion to prove $\\mathrm{sgn}$ is discontinuous at $0$.`,
    tests:['c.5.1.4','c.5.1.6ef'],
    approach:`<p>To <i>prove</i> discontinuity via the Sequential Criterion: exhibit one sequence $x_n\\to c$ in the domain along which $f(x_n)$ fails to converge to $f(c)$ — either it converges to the wrong value, or it diverges.</p>`,
    solution:`<p>Let $x_n:=1/n$ for $n\\in\\mathbb{N}$. Then $x_n\\to0$, and since $x_n>0$ for every $n$, $\\mathrm{sgn}(x_n)=1$ for every $n$, so $(\\mathrm{sgn}(x_n))\\to1$.</p>
<p>But $\\mathrm{sgn}(0)=0$, and $1\\ne0$. By the Discontinuity Criterion, $\\mathrm{sgn}$ is discontinuous at $0$.</p>
<p>(Equivalently, one may also take $y_n:=-1/n\\to0$, giving $\\mathrm{sgn}(y_n)=-1\\to-1\\ne0$; or note that $(x_n)$ and $(y_n)$ already give two <i>different</i> subsequential limits, $1$ and $-1$, confirming $\\lim_{x\\to0}\\mathrm{sgn}(x)$ does not even exist.)</p>`,
    trap:`Describing the jump graphically ("the graph jumps at 0") without producing an explicit sequence loses the method marks even when the conclusion is correct — the criterion demands a genuine convergent sequence in the domain whose image sequence is exhibited to fail to converge to $f(c)$.` },

  { id:'q.ra2.m1.05', course:'ra2', module:'ra2.m1', marks:5,
    title:"Dirichlet's Function Nowhere Continuous",
    source:'exam-pattern',
    prompt:`Let $f(x):=1$ if $x\\in\\mathbb{Q}$ and $f(x):=0$ if $x\\notin\\mathbb{Q}$ (Dirichlet's function). Prove $f$ is discontinuous at every $c\\in\\mathbb{R}$.`,
    tests:['c.5.1.4','c.5.1.6g'],
    approach:`<p>For "discontinuous everywhere," fix an <i>arbitrary</i> $c$ and split into two cases by rationality of $c$. In each case use density — every real number is the limit of a sequence of rationals <i>and</i> of a sequence of irrationals — to build the witnessing sequence required by the Discontinuity Criterion.</p>`,
    solution:`<p>Fix $c\\in\\mathbb{R}$ arbitrary.</p>
<p><b>Case $c\\in\\mathbb{Q}$:</b> $f(c)=1$. By density of the irrationals, choose a sequence $(y_n)$ of irrational numbers with $y_n\\to c$ (e.g. $y_n:=c+\\sqrt2/n$, irrational since $c$ is rational). Then $f(y_n)=0$ for every $n$, so $f(y_n)\\to0\\ne1=f(c)$.</p>
<p><b>Case $c\\notin\\mathbb{Q}$:</b> $f(c)=0$. By density of the rationals, choose a sequence $(x_n)$ of rationals with $x_n\\to c$. Then $f(x_n)=1$ for every $n$, so $f(x_n)\\to1\\ne0=f(c)$.</p>
<p>In both cases the Discontinuity Criterion applies, so $f$ is discontinuous at $c$. As $c\\in\\mathbb{R}$ was arbitrary, $f$ is discontinuous everywhere on $\\mathbb{R}$.</p>`,
    trap:`Proving discontinuity at one type of point (say, a rational) and writing "similarly for irrationals" without carrying out the density argument in the second case — both cases genuinely need separate sequences and must both be shown, since $f$'s behaviour is symmetric in construction but the two cases use density of different sets.` },

  { id:'q.ra2.m1.06', course:'ra2', module:'ra2.m1', marks:5,
    title:'Discontinuity of sin(1/x) at 0',
    source:'exam-pattern',
    prompt:`Let $f(x):=\\sin(1/x)$ for $x\\ne0$ and $f(0):=0$. Use the Sequential Criterion to prove $f$ is discontinuous at $0$.`,
    tests:['c.5.1.4','c.5.1.8'],
    approach:`<p>To show discontinuity at $0$, produce <i>two</i> sequences $x_n\\to0$ and $y_n\\to0$ along which $f$ tends to two <b>different</b> limits — this simultaneously shows $\\lim_{x\\to0}f(x)$ does not exist, so in particular it cannot equal $f(0)$.</p>`,
    solution:`<p>Let $x_n:=\\dfrac{1}{n\\pi}\\to0$. Then $\\sin(1/x_n)=\\sin(n\\pi)=0$ for every $n$, so $f(x_n)\\to0$.</p>
<p>Let $y_n:=\\dfrac{1}{\\pi/2+2n\\pi}\\to0$. Then $\\sin(1/y_n)=\\sin(\\pi/2+2n\\pi)=1$ for every $n$, so $f(y_n)\\to1$.</p>
<p>Since $f(y_n)\\to1\\ne0=f(0)$, the sequence $(y_n)\\to0$ has $f(y_n)$ not converging to $f(0)$. By the Discontinuity Criterion, $f$ is discontinuous at $0$.</p>`,
    trap:`Exhibiting only $x_n=1/(n\\pi)$ is not enough — that sequence happens to give the "correct" value $0$ and by itself proves nothing; a second sequence with a different limit is required. Also do not confuse this with $g(x):=x\\sin(1/x)$, $g(0):=0$, which IS continuous at $0$ (Example 5.1.8) since it is squeezed to $0$ by the bounded factor $\\sin(1/x)$.` },

  { id:'q.ra2.m1.07', course:'ra2', module:'ra2.m1', marks:10,
    title:'Boundedness Theorem & Its Hypotheses',
    source:'exam-pattern',
    prompt:`State and prove the Boundedness Theorem. Then show, by an example in each case, that the conclusion can fail if exactly one hypothesis is dropped: (i) the interval is not bounded, (ii) the interval is not closed, (iii) the function is not continuous.`,
    tests:['c.5.3.1','c.5.3.2'],
    approach:`<p>The standard pattern for "closed bounded interval $\\Rightarrow$ property" results: argue by contradiction, build an unbounded witness sequence in $I$, extract a convergent subsequence using <b>Bolzano–Weierstrass</b> (needs boundedness of $I$), keep the limit inside $I$ using <b>closedness</b>, then use continuity there to contradict the unboundedness.</p>`,
    solution:`<p><b>Statement (5.3.2).</b> Let $I=[a,b]$ be a closed bounded interval and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then $f$ is bounded on $I$.</p>
<p><b>Proof (by contradiction).</b></p>
<ol>
<li>Suppose $f$ is <i>not</i> bounded on $I$. Then for each $n\\in\\mathbb{N}$ there exists $x_n\\in I$ with $|f(x_n)|>n$.</li>
<li>Since $I$ is bounded, $(x_n)$ is a bounded sequence, so by the Bolzano–Weierstrass Theorem it has a convergent subsequence $(x_{n_r})\\to x$.</li>
<li>Since $I$ is closed and each $x_{n_r}\\in I$, the limit $x\\in I$.</li>
<li>Since $f$ is continuous at $x\\in I$, $(f(x_{n_r}))\\to f(x)$, so $(f(x_{n_r}))$ is a convergent, hence bounded, sequence.</li>
<li>But $|f(x_{n_r})|>n_r\\ge r$ for every $r$, so $(f(x_{n_r}))$ is unbounded — a contradiction.</li>
</ol>
<p>Hence the supposition fails, and $f$ is bounded on $I$. $\\blacksquare$</p>
<p><b>Necessity of each hypothesis</b> (violate exactly one, keep the others):</p>
<ol>
<li><b>Boundedness of the interval:</b> $f(x):=x$ on $A:=[0,\\infty)$ — closed, $f$ continuous, but $f$ is unbounded on $A$.</li>
<li><b>Closedness of the interval:</b> $g(x):=1/x$ on $B:=(0,1]$ — bounded, $g$ continuous, but $g$ is unbounded on $B$ (unbounded as $x\\to0^+$).</li>
<li><b>Continuity of the function:</b> $h(x):=1/x$ for $x\\in(0,1]$, $h(0):=1$, on $C:=[0,1]$ — closed and bounded, but $h$ is discontinuous at $0$ and unbounded on $C$.</li>
</ol>`,
    trap:`In the proof, not explaining WHY closedness is needed — it is precisely what keeps the subsequential limit $x$ inside $I$, which is required before "$f$ continuous at $x$" can even be invoked. In the hypothesis-necessity part, a common error is giving an example that violates two hypotheses at once (e.g. an interval that is neither closed nor bounded) — each example must isolate exactly one failure.` },

  { id:'q.ra2.m1.08', course:'ra2', module:'ra2.m1', marks:10,
    title:'Maximum–Minimum Theorem',
    source:'exam-pattern',
    prompt:`State and prove the Maximum–Minimum Theorem for a continuous function on a closed bounded interval.`,
    tests:['c.5.3.3','c.5.3.4'],
    approach:`<p>Builds on the Boundedness Theorem: once $f(I)$ is known bounded, set $s^*:=\\sup f(I)$; use the defining property of supremum to construct a sequence $f(x_n)$ approaching $s^*$ from below; extract a convergent subsequence of $(x_n)$ exactly as in the Boundedness Theorem (Bolzano–Weierstrass + closedness); then use continuity and the Squeeze Theorem to show the limit point actually attains $s^*$.</p>`,
    solution:`<p><b>Statement (5.3.4).</b> Let $I=[a,b]$ be closed and bounded and let $f:I\\to\\mathbb{R}$ be continuous on $I$. Then $f$ has an absolute maximum and an absolute minimum on $I$.</p>
<p><b>Proof (maximum; the minimum is symmetric, using $\\inf f(I)$).</b></p>
<ol>
<li>By the Boundedness Theorem, $f(I):=\\{f(x):x\\in I\\}$ is a nonempty bounded subset of $\\mathbb{R}$, so $s^*:=\\sup f(I)$ exists.</li>
<li>For each $n\\in\\mathbb{N}$, since $s^*-1/n$ is not an upper bound of $f(I)$, there exists $x_n\\in I$ with</li>
</ol>
$$s^*-\\frac1n < f(x_n)\\le s^*.$$
<ol start="3">
<li>$(x_n)$ is a bounded sequence in $I$, so by Bolzano–Weierstrass it has a subsequence $(x_{n_r})\\to x^*$.</li>
<li>Since $I$ is closed, $x^*\\in I$.</li>
<li>Since $f$ is continuous at $x^*$, $f(x_{n_r})\\to f(x^*)$. But also $s^*-1/n_r < f(x_{n_r})\\le s^*$ for every $r$, and $1/n_r\\to0$, so by the Squeeze Theorem $f(x_{n_r})\\to s^*$.</li>
<li>By uniqueness of limits, $f(x^*)=s^*=\\sup f(I)$, so $x^*$ is an absolute maximum point of $f$ on $I$.</li>
</ol>
<p>The construction of an absolute minimum point $x_*$ with $f(x_*)=\\inf f(I)$ is identical, using $s_*-1/n < f(x_n)\\le s_*$. $\\blacksquare$</p>`,
    trap:`Assuming the maximum exists merely because $f(I)$ is bounded — boundedness only guarantees $\\sup f(I)$ exists as a real number; the entire content of the theorem is that this supremum is actually <i>attained</i> by some point of $I$. Also, skipping the explicit Squeeze Theorem step to conclude $f(x_{n_r})\\to s^*$ is a common shortcut that loses marks — it does not follow merely from $f(x_{n_r})\\to f(x^*)$ alone.` },

  { id:'q.ra2.m1.09', course:'ra2', module:'ra2.m1', marks:2,
    title:'Continuity Without Boundedness',
    source:'exam-pattern',
    prompt:`Give an example of a function that is continuous on an open interval but not bounded there. Explain why this does not contradict the Boundedness Theorem.`,
    tests:['c.5.3.1','c.5.3.2'],
    approach:`<p>A counterexample question: exhibit a specific function, name the interval precisely, and explicitly identify which hypothesis of the Boundedness Theorem fails — a bare example without that sentence does not earn full marks.</p>`,
    solution:`<p>Let $f(x):=1/x$ for $x\\in(0,1)$, an <i>open</i> interval. $f$ is continuous on $(0,1)$. But $f$ is unbounded there: given any $M>0$, taking $x:=1/(M+1)\\in(0,1)$ gives $f(x)=M+1>M$.</p>
<p>This does not contradict the Boundedness Theorem because $(0,1)$ is not closed — it is missing its left endpoint $0$, which is exactly where $f$ blows up. The theorem's hypothesis that $I$ be a <i>closed</i> bounded interval is essential and fails here.</p>`,
    trap:`Choosing an interval that is accidentally closed or bounded incorrectly (e.g. writing $[0,1]$, where $f$ is not even defined at $0$); giving the example but never stating which hypothesis fails — the explanatory sentence is worth marks on its own.` },

  { id:'q.ra2.m1.10', course:'ra2', module:'ra2.m1', marks:10,
    title:"Bolzano's Intermediate Value Theorem",
    source:'exam-pattern',
    prompt:`State and prove the Location of Roots Theorem, and deduce Bolzano's Intermediate Value Theorem.`,
    tests:['c.5.3.5','c.5.3.7'],
    approach:`<p>First prove the special "sign-change $\\Rightarrow$ root" case (Location of Roots) via the <b>Bisection Method</b>: build nested closed intervals halving in length each step, use the <b>Nested Intervals Property</b> to pin down a candidate point, then pass to the limit using continuity. Deduce the general IVT for $f(a) < k< f(b)$ by applying the root case to $g(x):=f(x)-k$.</p>`,
    solution:`<p><b>Location of Roots Theorem (5.3.5).</b> Let $I=[a,b]$ and $f:I\\to\\mathbb{R}$ be continuous on $I$. If $f(a)<0 < f(b)$ (or $f(a)>0>f(b)$), then there exists $c\\in(a,b)$ with $f(c)=0$.</p>
<p><b>Proof (bisection).</b> Assume $f(a)<0 < f(b)$. Let $I_1:=[a_1,b_1]:=[a,b]$, midpoint $p_1:=\\tfrac12(a_1+b_1)$. If $f(p_1)=0$, take $c:=p_1$, done. Otherwise, keep the half on which the sign change persists: if $f(p_1)>0$ set $I_2:=[a_1,p_1]$; if $f(p_1)<0$ set $I_2:=[p_1,b_1]$. In either case $f(a_2)<0$, $f(b_2)>0$. Repeating, we obtain nested closed intervals $I_k=[a_k,b_k]$ with</p>
$$f(a_k)<0,\\quad f(b_k)>0,\\quad b_k-a_k=\\frac{b-a}{2^{k-1}}\\to0,$$
<p>(or the process terminates by locating an exact root). By the Nested Intervals Property, there is a point $c$ belonging to every $I_k$; since $b_k-a_k\\to0$, both $a_k\\to c$ and $b_k\\to c$. Since $f$ is continuous at $c$, $f(a_k)\\to f(c)$ and $f(b_k)\\to f(c)$. As $f(a_k)<0$ for all $k$, $f(c)\\le0$; as $f(b_k)>0$ for all $k$, $f(c)\\ge0$. Hence $f(c)=0$. $\\blacksquare$</p>
<p><b>Bolzano's IVT (5.3.7).</b> Let $I$ be an interval, $f:I\\to\\mathbb{R}$ continuous on $I$. If $a,b\\in I$ and $k\\in\\mathbb{R}$ satisfies $f(a) < k< f(b)$, then there exists $c$ between $a$ and $b$ with $f(c)=k$.</p>
<p><b>Proof.</b> Suppose $a<b$ (the case $b<a$ is symmetric). Let $g(x):=f(x)-k$; then $g$ is continuous on $[a,b]$ with $g(a)<0 < g(b)$. By the Location of Roots Theorem there is $c\\in(a,b)$ with $g(c)=0$, i.e. $f(c)=k$. $\\blacksquare$</p>`,
    trap:`Presenting the bisection construction without naming the Nested Intervals Property, or without checking $b_k-a_k\\to0$ — this length condition is what forces $a_k$ and $b_k$ to the <i>same</i> limit $c$; skipping it leaves the argument incomplete. For the IVT, a common error is re-deriving bisection from scratch for the value $k$ instead of the one-line reduction $g:=f-k$; also forgetting to handle (or state symmetry for) the case $b<a$.` },

  { id:'q.ra2.m1.11', course:'ra2', module:'ra2.m1', marks:5,
    title:'Locating a Root by Bisection',
    source:'exam-pattern',
    prompt:`Show that $f(x):=xe^x-2$ has a root in the interval $[0,1]$.`,
    tests:['c.5.3.5','c.5.3.6'],
    approach:`<p>To prove existence of a root without solving explicitly: verify continuity of $f$ on the interval, evaluate $f$ at the two endpoints, and confirm a sign change; conclude via the Location of Roots Theorem. Do <i>not</i> attempt to find the exact root.</p>`,
    solution:`<p>$f(x)=xe^x-2$ is continuous on $[0,1]$, being a product of the continuous functions $x$ and $e^x$.</p>
$$f(0)=0\\cdot e^0-2=-2<0,\\qquad f(1)=1\\cdot e^1-2=e-2\\approx0.718>0.$$
<p>Since $f$ is continuous on $[0,1]$ and $f(0)<0 < f(1)$, the Location of Roots Theorem guarantees a point $c\\in(0,1)$ with $f(c)=0$, i.e. a solution of $xe^x=2$ in $(0,1)$.</p>
<p>(One may narrow $c$ further by bisection: $f(0.5)\\approx-1.176<0$, $f(0.75)\\approx-0.412<0$, $f(0.875)\\approx+0.099>0$, so $c\\in(0.75,0.875)$, and iterating gives $c\\approx0.8516$ to error less than $10^{-2}$.)</p>`,
    trap:`Asserting existence of the root without first stating that $f$ is continuous on the interval — continuity is a hypothesis, not automatic. Also: the theorem gives existence, not uniqueness — do not claim the root is the only one without a separate monotonicity argument.` },

  { id:'q.ra2.m1.12', course:'ra2', module:'ra2.m1', marks:5,
    title:'Odd-Degree Polynomial Has a Root',
    source:'exam-pattern',
    prompt:`Prove that every polynomial of odd degree with real coefficients has at least one real root.`,
    tests:['c.5.3.7'],
    approach:`<p>Apply the IVT on a large symmetric interval $[-R,R]$: factor out the leading term to show the polynomial takes opposite signs at $x=R$ and $x=-R$ for large $R$ (this is where "odd degree" is used), then invoke continuity plus the sign change.</p>`,
    solution:`<p>Let $p(x)=a_nx^n+\\cdots+a_1x+a_0$ with $n$ odd; assume WLOG $a_n>0$ (otherwise apply the argument to $-p$). For $x\\ne0$, write</p>
$$p(x)=x^n\\Big(a_n+\\frac{a_{n-1}}{x}+\\cdots+\\frac{a_0}{x^n}\\Big).$$
<p>As $|x|\\to\\infty$, the bracketed term $\\to a_n>0$, so there exists $R>0$ such that for $|x|\\ge R$ the bracket is $>a_n/2>0$, hence has the same sign as $a_n$ (positive). Since $n$ is odd, $x^n$ has the same sign as $x$.</p>
<p>At $x=R>0$: $p(R)$ has the sign of $R^n\\cdot(\\text{positive})$, i.e. $p(R)>0$.</p>
<p>At $x=-R$: $p(-R)$ has the sign of $(-R)^n\\cdot(\\text{positive})$; since $n$ is odd, $(-R)^n=-R^n<0$, so $p(-R)<0$.</p>
<p>Thus $p(-R) < 0 < p(R)$. Since $p$ is continuous on $\\mathbb{R}$ (a polynomial), in particular on $[-R,R]$, the Location of Roots Theorem gives $c\\in(-R,R)$ with $p(c)=0$.</p>`,
    trap:`Not using the oddness of $n$ correctly: for even $n$, $x^n$ has the <i>same</i> sign at $\\pm R$ and the argument breaks down (e.g. $x^2+1$ has no real root) — the proof must explicitly say where "$n$ odd" enters. Also, merely asserting $p(x)\\to\\pm\\infty$ at the two ends without the bracket/sign argument for a genuine $R$ is an incomplete proof.` },

  { id:'q.ra2.m1.13', course:'ra2', module:'ra2.m1', marks:2,
    title:'Definition of Uniform Continuity',
    source:'exam-pattern',
    prompt:`State the definition of uniform continuity of $f:A\\to\\mathbb{R}$ on $A$, and explain how it differs from ordinary (pointwise) continuity.`,
    tests:['c.5.4.1'],
    approach:`<p>State/recall — note carefully where the quantifier over the point sits relative to $\\delta$, contrasting with ordinary continuity.</p>`,
    solution:`<p>Let $A\\subseteq\\mathbb{R}$, $f:A\\to\\mathbb{R}$. $f$ is <b>uniformly continuous</b> on $A$ if for every $\\varepsilon>0$ there exists $\\delta=\\delta(\\varepsilon)>0$ (depending on $\\varepsilon$ <i>only</i>, not on any particular point of $A$) such that for all $x,u\\in A$ with $|x-u|<\\delta$, it follows that $|f(x)-f(u)|<\\varepsilon$.</p>
<p>Difference from ordinary continuity: in the $\\varepsilon$–$\\delta$ definition of continuity at each point $u$, $\\delta$ may depend on both $\\varepsilon$ <i>and</i> $u$; in uniform continuity, one single $\\delta$ must work simultaneously for every pair $x,u\\in A$.</p>`,
    trap:`Writing $\\delta(\\varepsilon,u)$ as in ordinary continuity destroys the entire point of the definition; also stating quantifiers as "for every $x$, there is $\\delta$, for every $u$..." instead of "$\\forall\\varepsilon\\ \\exists\\delta\\ \\forall x,u$" — $\\delta$ must be fixed before $x,u$ are chosen.` },

  { id:'q.ra2.m1.14', course:'ra2', module:'ra2.m1', marks:5,
    title:'Proving Uniform Continuity Directly',
    source:'exam-pattern',
    prompt:`Prove directly from the definition: (a) $f(x):=3x-2$ is uniformly continuous on $\\mathbb{R}$; (b) $g(x):=x^2$ is uniformly continuous on $[0,b]$ for fixed $b>0$.`,
    tests:['c.5.4.1'],
    approach:`<p>To prove uniform continuity directly, bound $|f(x)-f(u)|$ by $K|x-u|$ using algebra valid over the <i>whole</i> domain (no restriction tied to a particular point), then choose $\\delta=\\varepsilon/K$.</p>`,
    solution:`<p><b>(a)</b> For $x,u\\in\\mathbb{R}$, $|f(x)-f(u)|=3|x-u|$. Given $\\varepsilon>0$, choose $\\delta:=\\varepsilon/3$. If $|x-u|<\\delta$, then $|f(x)-f(u)|=3|x-u|<3(\\varepsilon/3)=\\varepsilon$. Since $\\delta$ depends only on $\\varepsilon$, $f$ is uniformly continuous on $\\mathbb{R}$.</p>
<p><b>(b)</b> For $x,u\\in[0,b]$, $|g(x)-g(u)|=|x+u|\\,|x-u|\\le 2b\\,|x-u|$, since $0\\le x,u\\le b$ gives $x+u\\le2b$ — this bound uses only the fixed interval, not a particular point. Given $\\varepsilon>0$, choose $\\delta:=\\varepsilon/(2b)$. Then $|x-u|<\\delta\\Rightarrow|g(x)-g(u)|\\le2b\\delta=\\varepsilon$. So $g$ is uniformly continuous on $[0,b]$.</p>`,
    trap:`In part (b), the bound must be the fixed number $2b$, not $2c$ for a variable point $c$ — recycling the pointwise-continuity proof's bound $2|c|+1$ (as used for $x^2$ on all of $\\mathbb{R}$) still depends on a point and is not a valid uniform-continuity argument; this is exactly why $x^2$ fails to be uniformly continuous on all of $\\mathbb{R}$ (see the companion question).` },

  { id:'q.ra2.m1.15', course:'ra2', module:'ra2.m1', marks:10,
    title:'Disproving Uniform Continuity',
    source:'exam-pattern',
    prompt:`State the Nonuniform Continuity Criterion. Use it to prove: (a) $f(x):=1/x$ is not uniformly continuous on $(0,1)$; (b) $g(x):=x^2$ is not uniformly continuous on $\\mathbb{R}$.`,
    tests:['c.5.4.2'],
    approach:`<p>To <b>disprove</b> uniform continuity, produce a single $\\varepsilon_0>0$ and two sequences $(x_n),(u_n)$ in $A$ with $|x_n-u_n|\\to0$ but $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$ for every $n$ — this negates the definition no matter how small $\\delta$ is chosen.</p>`,
    solution:`<p><b>Nonuniform Continuity Criterion (5.4.2).</b> $f:A\\to\\mathbb{R}$ is <i>not</i> uniformly continuous on $A$ if and only if there exist $\\varepsilon_0>0$ and sequences $(x_n),(u_n)$ in $A$ such that $x_n-u_n\\to0$ but $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$ for all $n\\in\\mathbb{N}$.</p>
<p><b>(a)</b> On $A=(0,1)$, take $x_n:=1/n$, $u_n:=1/(n+1)$ (both in $(0,1)$ for $n\\ge2$). Then</p>
$$x_n-u_n=\\frac1n-\\frac1{n+1}=\\frac1{n(n+1)}\\to0,$$
<p>but $f(x_n)-f(u_n)=n-(n+1)=-1$, so $|f(x_n)-f(u_n)|=1$ for all $n$. Taking $\\varepsilon_0:=1$, the criterion holds, so $f$ is not uniformly continuous on $(0,1)$.</p>
<p><b>(b)</b> On $A=\\mathbb{R}$, take $x_n:=n+1/n$, $u_n:=n$. Then $x_n-u_n=1/n\\to0$, but</p>
$$g(x_n)-g(u_n)=\\Big(n+\\frac1n\\Big)^2-n^2=2+\\frac{1}{n^2}\\to2.$$
<p>In particular $|g(x_n)-g(u_n)|\\ge1$ for all $n\\in\\mathbb{N}$. Taking $\\varepsilon_0:=1$, the criterion holds, so $g$ is not uniformly continuous on $\\mathbb{R}$.</p>`,
    trap:`For (a), a frequent slip is letting $u_n=0$, which is not in $(0,1)$ — both witness sequences must actually lie in $A$. For (b), the classic wrong attempt is $x_n=n$, $u_n=n+1$ (difference constantly $1$, not $\\to0$); the difference must genuinely tend to $0$ while the function values stay bounded away from each other by one fixed $\\varepsilon_0$ for all $n$, not a bound that varies with $n$.` },

  { id:'q.ra2.m1.16', course:'ra2', module:'ra2.m1', marks:5,
    title:'Lipschitz Implies Uniform Continuity',
    source:'exam-pattern',
    prompt:`State and prove: if $f:A\\to\\mathbb{R}$ is a Lipschitz function, then $f$ is uniformly continuous on $A$. Apply this to show $f(x):=x^2$ is uniformly continuous on $[0,b]$, $b>0$.`,
    tests:['c.5.4.4','c.5.4.5'],
    approach:`<p>A Lipschitz bound $|f(x)-f(u)|\\le K|x-u|$ converts immediately into a uniform-continuity proof: choose $\\delta=\\varepsilon/K$, since $K$ is a single global constant with no point-dependence and no preliminary restriction needed. To apply the theorem, find any global Lipschitz constant.</p>`,
    solution:`<p><b>Definition (5.4.4).</b> $f:A\\to\\mathbb{R}$ is Lipschitz on $A$ if there is $K>0$ with $|f(x)-f(u)|\\le K|x-u|$ for all $x,u\\in A$.</p>
<p><b>Theorem (5.4.5).</b> If $f$ is Lipschitz on $A$, then $f$ is uniformly continuous on $A$.</p>
<p><b>Proof.</b> Given $\\varepsilon>0$, let $\\delta:=\\varepsilon/K$. If $x,u\\in A$ and $|x-u|<\\delta$, then $|f(x)-f(u)|\\le K|x-u| < K\\cdot(\\varepsilon/K)=\\varepsilon$. So $f$ is uniformly continuous on $A$. $\\blacksquare$</p>
<p><b>Application.</b> For $x,u\\in[0,b]$: $|x^2-u^2|=|x+u|\\,|x-u|\\le2b\\,|x-u|$ (since $0\\le x,u\\le b$). So $f(x)=x^2$ is Lipschitz on $[0,b]$ with $K=2b$, and by the theorem $f$ is uniformly continuous on $[0,b]$.</p>`,
    trap:`The theorem is a <i>sufficient</i> condition only — never conclude "not Lipschitz $\\Rightarrow$ not uniformly continuous" (this is false, as $\\sqrt x$ on $[0,1]$ shows). Also, the constant $K$ must genuinely bound the difference quotient for <i>all</i> $x,u\\in A$, not one derived only near a single point.` },

  { id:'q.ra2.m1.17', course:'ra2', module:'ra2.m1', marks:5,
    title:'Uniformly Continuous but Not Lipschitz',
    source:'exam-pattern',
    prompt:`Show that $g(x):=\\sqrt x$ is uniformly continuous on $[0,1]$ but is not a Lipschitz function on $[0,1]$.`,
    tests:['c.5.4.5','c.5.4.6'],
    approach:`<p>For uniform continuity, invoke the Uniform Continuity Theorem (continuous on a closed bounded interval) rather than trying to find a Lipschitz constant. Separately, to disprove the Lipschitz condition, show the difference quotient $|g(x)-g(u)|/|x-u|$ is <i>unbounded</i> near a specific point (here $x=0$).</p>`,
    solution:`<p><b>Uniform continuity.</b> $g$ is continuous on $[0,1]$ (a root of a continuous function), and $[0,1]$ is a closed bounded interval, so by the Uniform Continuity Theorem, $g$ is uniformly continuous on $[0,1]$.</p>
<p><b>Not Lipschitz.</b> Suppose, for contradiction, there is $K>0$ with $|\\sqrt x-\\sqrt u|\\le K|x-u|$ for all $x,u\\in[0,1]$. Take $u=0$, $x=1/n^2$:</p>
$$\\left|\\sqrt{\\frac1{n^2}}-0\\right|=\\frac1n,\\qquad K\\left|\\frac1{n^2}-0\\right|=\\frac{K}{n^2}.$$
<p>The Lipschitz inequality would require $1/n\\le K/n^2$, i.e. $n\\le K$ for every $n\\in\\mathbb{N}$ — impossible since $K$ is fixed. Contradiction. Hence no such $K$ exists, and $g$ is not Lipschitz on $[0,1]$.</p>`,
    trap:`Attempting to prove uniform continuity by bounding the difference quotient directly — it is unbounded near $0$, so this route <i>fails</i>, which is exactly why the Uniform Continuity Theorem (not the Lipschitz route) must be used. When disproving Lipschitz, one bad pair alone is not automatically a proof — you must show the ratio grows without bound as $n$ varies, as done above.` },

  { id:'q.ra2.m1.18', course:'ra2', module:'ra2.m1', marks:10,
    title:'Uniform Continuity Theorem',
    source:'exam-pattern',
    prompt:`State and prove the Uniform Continuity Theorem: a function continuous on a closed bounded interval is uniformly continuous there.`,
    tests:['c.5.4.2','c.5.4.3'],
    approach:`<p>Prove by contradiction using the Nonuniform Continuity Criterion: assume $f$ is not uniformly continuous, extract the witness sequences, use Bolzano–Weierstrass plus closedness (exactly as in the Boundedness Theorem) to converge <i>both</i> sequences to the same point, then contradict continuity there.</p>`,
    solution:`<p><b>Statement (5.4.3).</b> Let $I$ be a closed bounded interval and $f:I\\to\\mathbb{R}$ continuous on $I$. Then $f$ is uniformly continuous on $I$.</p>
<p><b>Proof.</b> Suppose, for contradiction, $f$ is not uniformly continuous on $I$. By the Nonuniform Continuity Criterion, there exist $\\varepsilon_0>0$ and sequences $(x_n),(u_n)$ in $I$ with $|x_n-u_n|<1/n$ and $|f(x_n)-f(u_n)|\\ge\\varepsilon_0$ for all $n$.</p>
<p>Since $I$ is bounded, $(x_n)$ is bounded, so by Bolzano–Weierstrass it has a subsequence $(x_{n_r})\\to z$. Since $I$ is closed, $z\\in I$. Also</p>
$$|u_{n_r}-z|\\le|u_{n_r}-x_{n_r}|+|x_{n_r}-z|<\\frac1{n_r}+|x_{n_r}-z|\\to0,$$
<p>so $(u_{n_r})\\to z$ as well. Since $f$ is continuous at $z\\in I$, both $f(x_{n_r})\\to f(z)$ and $f(u_{n_r})\\to f(z)$, so</p>
$$|f(x_{n_r})-f(u_{n_r})|\\to|f(z)-f(z)|=0.$$
<p>But $|f(x_{n_r})-f(u_{n_r})|\\ge\\varepsilon_0$ for every $r$ — a contradiction. Hence $f$ must be uniformly continuous on $I$. $\\blacksquare$</p>`,
    trap:`Showing $x_{n_r}\\to z$ but forgetting to separately prove $u_{n_r}\\to z$ via the triangle inequality — both subsequences must converge to the <i>same</i> point for continuity at $z$ to force both image sequences to $f(z)$. Also, this proof shares its skeleton with the Boundedness Theorem's proof but ends in a different contradiction: here it is that $|f(x_{n_r})-f(u_{n_r})|$ cannot be both $\\ge\\varepsilon_0$ and $\\to0$, not an unboundedness contradiction — conflating the two loses marks.` },

  { id:'q.ra2.m1.19', course:'ra2', module:'ra2.m1', marks:5,
    title:'Continuous Extension Theorem',
    source:'exam-pattern',
    prompt:`Use the Continuous Extension Theorem to show: (a) $f(x):=\\sin(1/x)$ is not uniformly continuous on $(0,1]$; (b) $g(x):=x\\sin(1/x)$ is uniformly continuous on $(0,1]$.`,
    tests:['c.5.4.7','c.5.4.8'],
    approach:`<p>The Continuous Extension Theorem turns a uniform-continuity question on a half-open interval into a limit-existence question at the missing endpoint: $f$ is uniformly continuous on $(a,b]$ if and only if $\\lim_{x\\to a^+}f(x)$ exists (equivalently, $f$ extends to a function continuous on $[a,b]$).</p>`,
    solution:`<p><b>Continuous Extension Theorem (5.4.8).</b> $f$ is uniformly continuous on $(a,b)$ if and only if it can be defined at the endpoints so that the extended function is continuous on $[a,b]$.</p>
<p><b>(a)</b> Using two sequences $x_n:=1/(n\\pi)\\to0$ and $y_n:=1/(\\pi/2+2n\\pi)\\to0$, we have $f(x_n)=\\sin(n\\pi)=0\\to0$ but $f(y_n)=\\sin(\\pi/2+2n\\pi)=1\\to1$; since these differ, $\\lim_{x\\to0^+}f(x)$ does not exist. So $f$ cannot be extended to a function continuous on $[0,1]$, and by the Continuous Extension Theorem, $f$ is <b>not</b> uniformly continuous on $(0,1]$.</p>
<p><b>(b)</b> For $x\\in(0,1]$, $|g(x)-0|=|x|\\,|\\sin(1/x)|\\le|x|\\to0$ as $x\\to0^+$ (since $|\\sin(1/x)|\\le1$ always). So $\\lim_{x\\to0^+}g(x)=0$ exists; defining $g(0):=0$ gives a function continuous on $[0,1]$. By the Continuous Extension Theorem, $g$ <b>is</b> uniformly continuous on $(0,1]$.</p>`,
    trap:`For (a), merely asserting "the limit at $0$ doesn't exist" without exhibiting two sequences with different subsequential limits — this non-existence needs proof, it is not automatic from the theorem. For (b), forgetting to use the boundedness of $\\sin$ to squeeze $g(x)\\to0$ — this factor of $x$ taming the oscillation is exactly why $g$ behaves so differently from $f$.` }
);

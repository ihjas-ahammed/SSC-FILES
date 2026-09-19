/* Real Analysis II · Module III — The Riemann Integral (Bartle Ch 7) */
QUESTIONS.push(
{
  id: 'q.ra2.m3.01',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.1',
  marks: 5,
  title: "Non-Integrability of Dirichlet's Function",
  source: 'Bartle & Sherbert 4e §7.1 Ex 12',
  prompt: `Let $f(x) := 1$ if $x \\in \\mathbb{Q} \\cap [0, 1]$ and $f(x) := 0$ if $x \\notin \\mathbb{Q} \\cap [0, 1]$. Prove using Darboux sums that $f$ is not Riemann integrable on $[0, 1]$.`,
  tests: [
    'c.7.1.4',
    'c.7.4.8'
  ],
  approach: `<p>Compute the upper sum $U(f, P)$ and lower sum $L(f, P)$ for an arbitrary partition $P$.</p>`,
  solution: `<p>Let $P = \\{x_0, x_1, \\dots, x_n\\}$ be an arbitrary partition of $[0, 1]$.</p><p>In each subinterval $[x_{i-1}, x_i]$, by density of $\\mathbb{Q}$, there exists a rational number, so $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x) = 1$.</p><p>By density of the irrationals, there exists an irrational number, so $m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x) = 0$.</p><p>Thus for every partition $P$:</p><p>$$U(f, P) = \\sum_{i=1}^n M_i \\Delta x_i = \\sum_{i=1}^n 1 \\cdot \\Delta x_i = 1$$</p><p>$$L(f, P) = \\sum_{i=1}^n m_i \\Delta x_i = \\sum_{i=1}^n 0 \\cdot \\Delta x_i = 0$$</p><p>Therefore the upper integral is $U(f) = \\inf_P U(f, P) = 1$ while the lower integral is $L(f) = \\sup_P L(f, P) = 0$. Since $U(f) \\ne L(f)$, $f$ is not Riemann integrable on $[0, 1]$.</p>`,
  trap: 'Tag choices in Riemann sums can produce either 0 or 1 depending on whether tags are rational or irrational, showing the Riemann sum limit does not exist.'
},
{
  id: 'q.ra2.m3.02',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.1',
  marks: 5,
  title: 'Riemann Integrability of a Step Function',
  source: 'Bartle & Sherbert 4e §7.1 Ex 6(a)',
  prompt: `Let $f: [0, 2] \\to \\mathbb{R}$ be defined by $f(x) := 2$ for $0 \\le x < 1$ and $f(x) := 1$ for $1 \\le x \\le 2$. Prove directly from the $\\varepsilon$--$\\delta$ definition of the Riemann integral that $f \\in \\mathcal{R}[0, 2]$ and $\\int_0^2 f = 3$.`,
  tests: [
    'c.7.1.1',
    'c.7.1.5'
  ],
  approach: `<p>Partition $[0, 2]$ and bound the error coming from the subinterval containing the single jump point at $x = 1$.</p>`,
  solution: `<p>We conjecture that $L = \\int_0^2 f = \\int_0^1 2 \\, dx + \\int_1^2 1 \\, dx = 2 + 1 = 3$.</p><p>Let $\\varepsilon > 0$. Choose $\\delta := \\frac{\\varepsilon}{4} > 0$. Let $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ be any tagged partition of $[0, 2]$ with mesh $\\|\\dot{\\mathcal{P}}\\| < \\delta$.</p><p>The jump point $x = 1$ belongs to either one subinterval $[x_{k-1}, x_k]$ or is a common partition point of two subintervals. In either case, the total length of the subintervals containing $1$ in their closure is at most $2\\|\\dot{\\mathcal{P}}\\| < 2\\delta$.</p><p>For all subintervals strictly to the left of $1$, $f(t_i) = 2$. For all subintervals strictly to the right of $1$, $f(t_i) = 1$. On the subinterval(s) containing $1$, $1 \\le f(t_i) \\le 2$.</p><p>Comparing the Riemann sum $S(f; \\dot{\\mathcal{P}})$ with the exact integral $3 = 2(1) + 1(1)$, the terms cancel everywhere outside the subintervals containing $1$. Since $|f(t_i) - 2| \\le 1$ and $|f(t_i) - 1| \\le 1$, the discrepancy between $S(f; \\dot{\\mathcal{P}})$ and $3$ is bounded by the oscillation of $f$ multiplied by the width of the interval(s) containing $1$:</p><p>$$|S(f; \\dot{\\mathcal{P}}) - 3| \\le (2 - 1) \\cdot 2\\|\\dot{\\mathcal{P}}\\| < 2\\delta = 2 \\cdot \\frac{\\varepsilon}{4} = \\frac{\\varepsilon}{2} < \\varepsilon$$</p><p>Since $\\varepsilon > 0$ was arbitrary, $f \\in \\mathcal{R}[0, 2]$ and $\\int_0^2 f = 3$.</p>`,
  trap: 'Forgetting that the tag $t_k$ in the subinterval containing 1 may lie on either side of 1, so $f(t_k)$ can be 1 or 2; bounding by $2\\delta$ covers both cases safely.'
},
{
  id: 'q.ra2.m3.03',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.1',
  marks: 5,
  title: 'Boundedness Inequality for Riemann Integrals',
  source: 'Bartle & Sherbert 4e §7.1 Ex 8',
  prompt: `Let $f \\in \\mathcal{R}[a, b]$ and suppose that $|f(x)| \\le M$ for all $x \\in [a, b]$. Prove directly from Riemann sums that $\\left| \\int_a^b f \\right| \\le M(b - a)$.`,
  tests: [
    'c.7.1.5',
    'c.7.1.6'
  ],
  approach: `<p>Apply the triangle inequality to the Riemann sum $S(f; \\dot{\\mathcal{P}})$ and take the limit as the mesh tends to zero.</p>`,
  solution: `<p>Let $L := \\int_a^b f$. Let $\\varepsilon > 0$. Since $f \\in \\mathcal{R}[a, b]$, there exists $\\delta > 0$ such that for every tagged partition $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$, we have:</p><p>$$|S(f; \\dot{\\mathcal{P}}) - L| < \\varepsilon$$</p><p>For any such tagged partition, applying the triangle inequality to the Riemann sum:</p><p>$$|S(f; \\dot{\\mathcal{P}})| = \\left| \\sum_{i=1}^n f(t_i)(x_i - x_{i-1}) \\right| \\le \\sum_{i=1}^n |f(t_i)|(x_i - x_{i-1}) \\le \\sum_{i=1}^n M(x_i - x_{i-1}) = M(b - a)$$</p><p>Now apply the triangle inequality to $L$:</p><p>$$|L| \\le |L - S(f; \\dot{\\mathcal{P}})| + |S(f; \\dot{\\mathcal{P}})| < \\varepsilon + M(b - a)$$</p><p>Since this inequality holds for every $\\varepsilon > 0$, it follows that $|L| \\le M(b - a)$, which proves $\\left| \\int_a^b f \\right| \\le M(b - a)$.</p>`,
  trap: 'Assuming $|f| \\in \\mathcal{R}[a, b]$ without proof; applying the triangle inequality directly to the Riemann sums proves the bound without assuming integrability of $|f|$.'
},
{
  id: 'q.ra2.m3.04',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.1',
  marks: 5,
  title: 'Sequential Criterion for Riemann Integrability',
  source: 'Bartle & Sherbert 4e §7.1 Ex 9',
  prompt: `Let $f: [a, b] \\to \\mathbb{R}$ and let $L \\in \\mathbb{R}$. Prove that $f \\in \\mathcal{R}[a, b]$ with $\\int_a^b f = L$ if and only if for every sequence $(\\dot{\\mathcal{P}}_n)$ of tagged partitions of $[a, b]$ satisfying $\\lim_{n\\to\\infty} \\|\\dot{\\mathcal{P}}_n\\| = 0$, we have $\\lim_{n\\to\\infty} S(f; \\dot{\\mathcal{P}}_n) = L$.`,
  tests: [
    'c.7.1.1',
    'c.7.1.2'
  ],
  approach: `<p>Use the $\\varepsilon$--$\\delta$ definition for the forward direction, and argue by contrapositive/contradiction using $\\delta_n = 1/n$ for the reverse direction.</p>`,
  solution: `<p><b>($\\Rightarrow$)</b> Suppose $f \\in \\mathcal{R}[a, b]$ with integral $L$. Given $\\varepsilon > 0$, there exists $\\delta > 0$ such that $\\|\\dot{\\mathcal{P}}\\| < \\delta \\implies |S(f; \\dot{\\mathcal{P}}) - L| < \\varepsilon$. Let $(\\dot{\\mathcal{P}}_n)$ be a sequence of tagged partitions with $\\|\\dot{\\mathcal{P}}_n\\| \\to 0$. Choose $K \\in \\mathbb{N}$ such that $\\|\\dot{\\mathcal{P}}_n\\| < \\delta$ for all $n \\ge K$. Then $|S(f; \\dot{\\mathcal{P}}_n) - L| < \\varepsilon$ for all $n \\ge K$, which proves $\\lim_{n\\to\\infty} S(f; \\dot{\\mathcal{P}}_n) = L$.</p><p><b>($\\Leftarrow$)</b> Suppose the sequential condition holds, but $f$ is not Riemann integrable with integral $L$. Then the negation of the $\\varepsilon$--$\\delta$ definition asserts: there exists $\\varepsilon_0 > 0$ such that for every $\\delta > 0$, there exists some tagged partition $\\dot{\\mathcal{P}}$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$ but $|S(f; \\dot{\\mathcal{P}}) - L| \\ge \\varepsilon_0$.</p><p>Setting $\\delta_n := 1/n$ for each $n \\in \\mathbb{N}$, we obtain a tagged partition $\\dot{\\mathcal{P}}_n$ satisfying $\\|\\dot{\\mathcal{P}}_n\\| < 1/n$, yet $|S(f; \\dot{\\mathcal{P}}_n) - L| \\ge \\varepsilon_0$.</p><p>Then $\\lim_{n\\to\\infty} \\|\\dot{\\mathcal{P}}_n\\| = 0$, but the sequence of Riemann sums $S(f; \\dot{\\mathcal{P}}_n)$ cannot converge to $L$ because every term is at distance at least $\\varepsilon_0$ from $L$. This contradicts our hypothesis. Hence $f \\in \\mathcal{R}[a, b]$ with $\\int_a^b f = L$.</p>`,
  trap: 'Forgetting to prove both directions, or constructing a sequence that does not satisfy $\\|\\dot{\\mathcal{P}}_n\\| \\to 0$.'
},
{
  id: 'q.ra2.m3.05',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.1',
  marks: 5,
  title: 'Translation Invariance of the Riemann Integral',
  source: 'Bartle & Sherbert 4e §7.1 Ex 15',
  prompt: `Let $f \\in \\mathcal{R}[a, b]$ and $c \\in \\mathbb{R}$. Define $g: [a + c, b + c] \\to \\mathbb{R}$ by $g(y) := f(y - c)$. Prove that $g \\in \\mathcal{R}[a + c, b + c]$ and that $\\int_{a+c}^{b+c} g(y) \\, dy = \\int_a^b f(x) \\, dx$.`,
  tests: [
    'c.7.1.1'
  ],
  approach: `<p>Shift the tagged partitions of $[a+c, b+c]$ by $-c$ to obtain tagged partitions of $[a, b]$ with identical Riemann sums.</p>`,
  solution: `<p>Let $L := \\int_a^b f$. Let $\\varepsilon > 0$. Since $f \\in \\mathcal{R}[a, b]$, there exists $\\delta > 0$ such that for every tagged partition $\\dot{\\mathcal{P}}$ of $[a, b]$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$, we have $|S(f; \\dot{\\mathcal{P}}) - L| < \\varepsilon$.</p><p>Now let $\\dot{\\mathcal{Q}} = \\{([y_{i-1}, y_i], s_i)\\}_{i=1}^n$ be an arbitrary tagged partition of $[a + c, b + c]$ with mesh $\\|\\dot{\\mathcal{Q}}\\| < \\delta$.</p><p>Define $x_i := y_i - c$ for $i = 0, 1, \\dots, n$, and tags $t_i := s_i - c$. Since $a + c = y_0 < y_1 < \\dots < y_n = b + c$, we have $a = x_0 < x_1 < \\dots < x_n = b$. Furthermore, since $s_i \\in [y_{i-1}, y_i]$, subtracting $c$ gives $t_i \\in [x_{i-1}, x_i]$. Thus $\\dot{\\mathcal{P}} := \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ is a tagged partition of $[a, b]$.</p><p>The subinterval widths are $x_i - x_{i-1} = (y_i - c) - (y_{i-1} - c) = y_i - y_{i-1}$, so $\\|\\dot{\\mathcal{P}}\\| = \\|\\dot{\\mathcal{Q}}\\| < \\delta$.</p><p>Compute the Riemann sum of $g$ on $\\dot{\\mathcal{Q}}$:</p><p>$$S(g; \\dot{\\mathcal{Q}}) = \\sum_{i=1}^n g(s_i)(y_i - y_{i-1}) = \\sum_{i=1}^n f(s_i - c)(x_i - x_{i-1}) = \\sum_{i=1}^n f(t_i)(x_i - x_{i-1}) = S(f; \\dot{\\mathcal{P}})$$</p><p>Therefore, $|S(g; \\dot{\\mathcal{Q}}) - L| = |S(f; \\dot{\\mathcal{P}}) - L| < \\varepsilon$. Hence $g \\in \\mathcal{R}[a + c, b + c]$ and $\\int_{a+c}^{b+c} g = L = \\int_a^b f$.</p>`,
  trap: 'Attempting substitution with calculus formulas when $f$ is not assumed to be continuous; working directly with Riemann sums works for all Riemann integrable functions.'
},
{
  id: 'q.ra2.m3.06',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.2',
  marks: 5,
  title: 'Integrability of Continuous Functions',
  source: 'Bartle & Sherbert 4e §7.2 Ex 4',
  prompt: `Prove that if $f: [a, b] \\to \\mathbb{R}$ is continuous on $[a, b]$, then $f$ is Riemann integrable on $[a, b]$.`,
  tests: [
    'c.7.2.7',
    'c.5.4.3'
  ],
  approach: `<p>Use the fact that continuous functions on compact intervals are uniformly continuous to bound $U(f, P) - L(f, P) < \\varepsilon$.</p>`,
  solution: `<p>Let $\\varepsilon > 0$. By the Uniform Continuity Theorem (Heine-Cantor), $f$ is uniformly continuous on $[a, b]$.</p><p>Choose $\\delta > 0$ such that $|x - y| < \\delta \\implies |f(x) - f(y)| < \\frac{\\varepsilon}{b - a}$.</p><p>Let $P = \\{x_0, x_1, \\dots, x_n\\}$ be a partition with mesh $\\|P\\| < \\delta$.</p><p>On each $[x_{i-1}, x_i]$, by the Extreme Value Theorem, $f$ attains its supremum at some $u_i$ and its infimum at some $v_i$. Since $|u_i - v_i| \\le \\Delta x_i < \\delta$, we have:</p><p>$$M_i - m_i = f(u_i) - f(v_i) < \\frac{\\varepsilon}{b - a}$$</p><p>Now compute the Darboux gap:</p><p>$$U(f, P) - L(f, P) = \\sum_{i=1}^n (M_i - m_i) \\Delta x_i < \\frac{\\varepsilon}{b - a} \\sum_{i=1}^n \\Delta x_i = \\frac{\\varepsilon}{b - a} (b - a) = \\varepsilon$$</p><p>By the Cauchy/Darboux Integrability Criterion, $f$ is Riemann integrable on $[a, b]$.</p>`,
  trap: 'Ordinary continuity at each point is NOT enough because $\\delta$ would depend on $x$; uniform continuity is crucial to get a single $\\delta$ for the entire interval.'
},
{
  id: 'q.ra2.m3.07',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.2',
  marks: 5,
  title: 'Strict Positivity and the Vanishing Integral Theorem',
  source: 'Bartle & Sherbert 4e §7.2 Ex 8 & 9',
  prompt: `Suppose that $f$ is continuous on $[a, b]$, that $f(x) \\ge 0$ for all $x \\in [a, b]$, and that $\\int_a^b f(x) \\, dx = 0$. Prove that $f(x) = 0$ for all $x \\in [a, b]$, and show that the continuity hypothesis cannot be dropped.`,
  tests: [
    'c.7.2.5',
    'c.5.1.1'
  ],
  approach: `<p>Assume by contradiction that $f(c) > 0$ for some $c$, and use continuity to find a subinterval around $c$ where $f(x) > f(c)/2 > 0$.</p>`,
  solution: `<p>Suppose by contradiction that $f(x)$ is not identically zero on $[a, b]$. Then there exists some $c \\in [a, b]$ such that $f(c) > 0$.</p><p>Set $\\varepsilon_0 := \\frac{f(c)}{2} > 0$. Since $f$ is continuous at $c$, there exists $\\delta > 0$ such that for all $x \\in [a, b]$ with $|x - c| < \\delta$, we have $|f(x) - f(c)| < \\varepsilon_0$, which implies:</p><p>$$f(x) > f(c) - \\varepsilon_0 = \\frac{f(c)}{2} > 0$$</p><p>Choose a non-degenerate closed interval $[\\alpha, \\beta] \\subseteq [a, b] \\cap [c - \\delta, c + \\delta]$ with $\\beta - \\alpha > 0$. By interval additivity and positivity of $f$:</p><p>$$\\int_a^b f = \\int_a^\\alpha f + \\int_\\alpha^\\beta f + \\int_\\beta^b f \\ge 0 + \\int_\\alpha^\\beta \\frac{f(c)}{2} \\, dx + 0 = \\frac{f(c)}{2}(\\beta - \\alpha) > 0$$</p><p>This contradicts the hypothesis that $\\int_a^b f = 0$. Hence $f(x) = 0$ for all $x \\in [a, b]$.</p><p><b>Continuity cannot be dropped:</b> Consider $g: [0, 1] \\to \\mathbb{R}$ defined by $g(0) := 1$ and $g(x) := 0$ for $x \\in (0, 1]$. Then $g(x) \\ge 0$ for all $x$, and $g$ is a step function with $\\int_0^1 g = 0$, yet $g(0) = 1 \\ne 0$.</p>`,
  trap: 'Arguing from $\\int_a^b f = 0$ that $f = 0$ pointwise without continuity; a function can be strictly positive at isolated points while having integral 0.'
},
{
  id: 'q.ra2.m3.08',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.2',
  marks: 5,
  title: 'Point of Equal Value for Continuous Functions',
  source: 'Bartle & Sherbert 4e §7.2 Ex 10',
  prompt: `Let $f$ and $g$ be continuous functions on $[a, b]$ such that $\\int_a^b f(x) \\, dx = \\int_a^b g(x) \\, dx$. Prove that there exists $c \\in [a, b]$ such that $f(c) = g(c)$.`,
  tests: [
    'c.7.2.8',
    'c.5.3.5'
  ],
  approach: `<p>Consider the difference function $h(x) := f(x) - g(x)$ and apply the First Mean Value Theorem for Integrals.</p>`,
  solution: `<p>Define $h: [a, b] \\to \\mathbb{R}$ by $h(x) := f(x) - g(x)$. Since $f$ and $g$ are continuous on $[a, b]$, $h$ is continuous on $[a, b]$.</p><p>By linearity of the Riemann integral:</p><p>$$\\int_a^b h(x) \\, dx = \\int_a^b f(x) \\, dx - \\int_a^b g(x) \\, dx = 0$$</p><p>By the First Mean Value Theorem for Integrals (Theorem 7.2.8), since $h$ is continuous on $[a, b]$, there exists a point $c \\in [a, b]$ such that:</p><p>$$\\int_a^b h(x) \\, dx = h(c)(b - a)$$</p><p>Since $\\int_a^b h(x) \\, dx = 0$ and $b - a > 0$, we conclude that $h(c)(b - a) = 0$, which implies $h(c) = 0$.</p><p>Therefore $f(c) - g(c) = 0$, or $f(c) = g(c)$.</p>`,
  trap: 'Trying to show $h$ must change sign; if $h(x) \\ge 0$ everywhere, $h \\equiv 0$ and every point works. The Mean Value Theorem for Integrals handles all cases uniformly.'
},
{
  id: 'q.ra2.m3.09',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.2',
  marks: 5,
  title: 'Integrability with Finitely Many Discontinuities',
  source: 'Bartle & Sherbert 4e §7.2 Ex 15',
  prompt: `Let $f: [a, b] \\to \\mathbb{R}$ be a bounded function, and suppose there is a finite set $E = \\{c_1, c_2, \\dots, c_m\\} \\subset [a, b]$ such that $f$ is continuous at every point of $[a, b] \\setminus E$. Prove that $f \\in \\mathcal{R}[a, b]$.`,
  tests: [
    'c.7.2.9',
    'c.7.2.1'
  ],
  approach: `<p>Enclose each discontinuity $c_k$ in an open interval of total length $< \\varepsilon / (4M)$, and use uniform continuity on the remaining closed intervals.</p>`,
  solution: `<p>Since $f$ is bounded, choose $M > 0$ such that $|f(x)| \\le M$ for all $x \\in [a, b]$. Let $\\varepsilon > 0$.</p><p>Enclose each point $c_k \\in E$ in an open interval $J_k = (c_k - \\delta_k, c_k + \\delta_k)$ such that the sum of the lengths satisfies:</p><p>$$\\sum_{k=1}^m \\text{len}(J_k) < \\frac{\\varepsilon}{4M}$$</p><p>The set $[a, b] \\setminus \\bigcup_{k=1}^m J_k$ consists of a finite union of disjoint closed subintervals $I_1, I_2, \\dots, I_p$. On each $I_j$, $f$ is continuous, hence uniformly continuous.</p><p>For each $j$, choose a partition $P_j$ of $I_j$ such that $U(f, P_j) - L(f, P_j) < \\frac{\\varepsilon}{2p}$.</p><p>Form a partition $P$ of $[a, b]$ by combining the partition points of all $P_j$ along with the endpoints of the intervals $J_k$. The subintervals of $P$ divide into two classes:</p><p>1. Subintervals contained in the intervals $J_k$: on these, $M_i - m_i \\le 2M$, so their total contribution to $U(f, P) - L(f, P)$ is at most $2M \\sum \\text{len}(J_k) < 2M \\cdot \\frac{\\varepsilon}{4M} = \\frac{\\varepsilon}{2}$.</p><p>2. Subintervals belonging to the partitions $P_j$: their contribution is at most $\\sum_{j=1}^p \\frac{\\varepsilon}{2p} = \\frac{\\varepsilon}{2}$.</p><p>Adding both contributions gives:</p><p>$$U(f, P) - L(f, P) < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$</p><p>By the Darboux/Cauchy Integrability Criterion, $f \\in \\mathcal{R}[a, b]$.</p>`,
  trap: 'Assuming $f$ must be a step function; $f$ may oscillate wildly near the points in $E$, but boundedness guarantees the total oscillation on the small intervals can be controlled.'
},
{
  id: 'q.ra2.m3.10',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.2',
  marks: 5,
  title: 'Generalized Mean Value Theorem for Integrals',
  source: 'Bartle & Sherbert 4e §7.2 Ex 17',
  prompt: `Let $f$ and $g$ be continuous functions on $[a, b]$, and assume that $g(x) \\ge 0$ for all $x \\in [a, b]$. Prove that there exists $c \\in [a, b]$ such that $\\int_a^b f(x)g(x) \\, dx = f(c) \\int_a^b g(x) \\, dx$. Give an example showing that the conclusion fails if $g$ changes sign.`,
  tests: [
    'c.7.2.8'
  ],
  approach: `<p>Bound $f$ between its minimum $m$ and maximum $M$, multiply by $g(x) \\ge 0$, and apply the Intermediate Value Theorem to $f$.</p>`,
  solution: `<p>By the Extreme Value Theorem, since $f$ is continuous on $[a, b]$, there exist $m = \\min_{x \\in [a, b]} f(x)$ and $M = \\max_{x \\in [a, b]} f(x)$. Thus $m \\le f(x) \\le M$ for all $x \\in [a, b]$.</p><p>Since $g(x) \\ge 0$, multiplying preserves the inequalities:</p><p>$$m g(x) \\le f(x)g(x) \\le M g(x) \\quad \\text{for all } x \\in [a, b]$$</p><p>Integrating over $[a, b]$:</p><p>$$m \\int_a^b g(x) \\, dx \\le \\int_a^b f(x)g(x) \\, dx \\le M \\int_a^b g(x) \\, dx$$</p><p>If $\\int_a^b g = 0$, then since $g \\ge 0$ is continuous, $g \\equiv 0$. In this case $\\int_a^b fg = 0 = f(c) \\cdot 0$ holds for every $c \\in [a, b]$.</p><p>If $\\int_a^b g > 0$, divide by $\\int_a^b g$ to obtain:</p><p>$$m \\le \\frac{\\int_a^b f(x)g(x) \\, dx}{\\int_a^b g(x) \\, dx} \\le M$$</p><p>By Bolzano's Intermediate Value Theorem, since $f$ is continuous on $[a, b]$, it attains every value between $m$ and $M$. Hence there exists $c \\in [a, b]$ such that $f(c) = \\frac{\\int_a^b fg}{\\int_a^b g}$, which yields $\\int_a^b fg = f(c) \\int_a^b g$.</p><p><b>Failure when $g$ changes sign:</b> On $[-1, 1]$, let $f(x) = x$ and $g(x) = x$. Then $\\int_{-1}^1 fg = \\int_{-1}^1 x^2 dx = 2/3$, but $\\int_{-1}^1 g = \\int_{-1}^1 x dx = 0$. Since $f(c) \\cdot 0 = 0 \\ne 2/3$, no such $c$ exists.</p>`,
  trap: 'Omitting the condition $g(x) \\ge 0$; when $g$ changes sign, $\\int_a^b g$ can be zero while $\\int_a^b fg \\ne 0$.'
},
{
  id: 'q.ra2.m3.11',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.2',
  marks: 5,
  title: 'Integrals of Even and Odd Functions',
  source: 'Bartle & Sherbert 4e §7.2 Ex 19',
  prompt: `Let $a > 0$ and suppose $f \\in \\mathcal{R}[-a, a]$. Prove that:<br>(a) If $f$ is even ($f(-x) = f(x)$ for all $x$), then $\\int_{-a}^a f = 2\\int_0^a f$.<br>(b) If $f$ is odd ($f(-x) = -f(x)$ for all $x$), then $\\int_{-a}^a f = 0$.`,
  tests: [
    'c.7.2.5',
    'c.7.1.5'
  ],
  approach: `<p>Split $\\int_{-a}^a f = \\int_{-a}^0 f + \\int_0^a f$ and reflect tagged partitions of $[-a, 0]$ to $[0, a]$.</p>`,
  solution: `<p>By interval additivity (Theorem 7.2.5), since $f \\in \\mathcal{R}[-a, a]$:</p><p>$$\\int_{-a}^a f = \\int_{-a}^0 f + \\int_0^a f$$</p><p>Let $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ be any tagged partition of $[-a, 0]$. Define $u_i := -x_{n-i}$ and $\\tau_i := -t_{n-i+1}$. Then $\\dot{\\mathcal{Q}} = \\{([u_{i-1}, u_i], \\tau_i)\\}_{i=1}^n$ is a tagged partition of $[0, a]$ with the same mesh, where $u_i - u_{i-1} = x_{n-i+1} - x_{n-i}$.</p><p><b>(a) Even case:</b> $f(t_i) = f(-t_i) = f(\\tau_{n-i+1})$. The Riemann sum satisfies $S(f; \\dot{\\mathcal{P}}) = S(f; \\dot{\\mathcal{Q}})$. Taking the limit as the mesh tends to zero yields $\\int_{-a}^0 f = \\int_0^a f$. Thus:</p><p>$$\\int_{-a}^a f = \\int_{-a}^0 f + \\int_0^a f = 2 \\int_0^a f$$</p><p><b>(b) Odd case:</b> $f(t_i) = -f(-t_i) = -f(\\tau_{n-i+1})$. The Riemann sum satisfies $S(f; \\dot{\\mathcal{P}}) = -S(f; \\dot{\\mathcal{Q}})$. Taking the limit yields $\\int_{-a}^0 f = -\\int_0^a f$. Thus:</p><p>$$\\int_{-a}^a f = -\\int_0^a f + \\int_0^a f = 0$$</p>`,
  trap: 'Using the substitution rule $u = -x$ with $du = -dx$ without justifying that substitution holds for arbitrary Riemann integrable functions (which may not be differentiable).'
},
{
  id: 'q.ra2.m3.12',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.3',
  marks: 5,
  title: 'Fundamental Theorem of Calculus (Differentiation Form)',
  source: 'Bartle & Sherbert 4e §7.3 Ex 2',
  prompt: `Let $f: [a, b] \\to \\mathbb{R}$ be continuous, and define $F(x) := \\int_a^x f(t) \\, dt$. Prove that $F$ is differentiable on $[a, b]$ and $F'(x) = f(x)$ for all $x \\in [a, b]$.`,
  tests: [
    'c.7.3.5'
  ],
  approach: `<p>Examine the difference quotient $\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt$ and use continuity of $f$ at $x$.</p>`,
  solution: `<p>Fix $x \\in [a, b]$ and let $h \\ne 0$ with $x + h \\in [a, b]$. Using additivity of integrals:</p><p>$$\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h} \\left( \\int_a^{x+h} f(t) dt - \\int_a^x f(t) dt \\right) = \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt$$</p><p>Note that $f(x) = \\frac{1}{h} \\int_x^{x+h} f(x) \\, dt$. Subtracting gives:</p><p>$$\\left| \\frac{F(x+h) - F(x)}{h} - f(x) \\right| = \\left| \\frac{1}{h} \\int_x^{x+h} (f(t) - f(x)) \\, dt \\right| \\le \\frac{1}{|h|} \\left| \\int_x^{x+h} |f(t) - f(x)| \\, dt \\right|$$</p><p>Let $\\varepsilon > 0$. By continuity of $f$ at $x$, choose $\\delta > 0$ such that $|t - x| < \\delta \\implies |f(t) - f(x)| < \\varepsilon$.</p><p>For $0 < |h| < \\delta$, every $t$ in the integration interval satisfies $|t - x| \\le |h| < \\delta$, so:</p><p>$$\\left| \\frac{F(x+h) - F(x)}{h} - f(x) \\right| \\le \\frac{1}{|h|} \\cdot \\varepsilon |h| = \\varepsilon$$</p><p>Hence $\\lim_{h\\to 0} \\frac{F(x+h) - F(x)}{h} = f(x)$, establishing $F'(x) = f(x)$.</p>`,
  trap: 'If $f$ is not continuous at $c$, $F$ may not be differentiable at $c$ (e.g. step functions integrate to corner/kink points).'
},
{
  id: 'q.ra2.m3.13',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.3',
  marks: 5,
  title: 'Leibniz Integral Rule via Chain Rule',
  source: 'Bartle & Sherbert 4e §7.3 Ex 6 & 10',
  prompt: `Let $g(x) := \\int_0^{x^2} \\sqrt{1 + t^3} \\, dt$. Find $g'(x)$ and justify your steps using the Fundamental Theorem of Calculus and the Chain Rule.`,
  tests: [
    'c.7.3.5',
    'c.6.1.5'
  ],
  approach: `<p>Write $g(x) = F(u(x))$ where $u(x) = x^2$ and $F(u) = \\int_0^u \\sqrt{1+t^3} dt$, then apply the Chain Rule.</p>`,
  solution: `<p>Let $f(t) = \\sqrt{1+t^3}$, which is continuous on $[0, \\infty)$.</p><p>Define $F(u) = \\int_0^u f(t) dt$. By the Fundamental Theorem of Calculus (Second Form), $F'(u) = f(u) = \\sqrt{1 + u^3}$.</p><p>Let $u(x) = x^2$, which is differentiable with $u'(x) = 2x$.</p><p>Since $g(x) = F(u(x))$, the Chain Rule yields:</p><p>$$g'(x) = F'(u(x)) \\cdot u'(x) = \\sqrt{1 + (x^2)^3} \\cdot 2x = 2x \\sqrt{1 + x^6}$$</p>`,
  trap: "Do not forget to multiply by the inner derivative $u'(x) = 2x$!"
},
{
  id: 'q.ra2.m3.14',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.3',
  marks: 5,
  title: 'Non-Existence of a Smooth Function via FTC',
  source: 'Bartle & Sherbert 4e §7.3 Ex 14',
  prompt: `Show that there does not exist a continuously differentiable function $f$ on $[0, 2]$ such that $f(0) = -1$, $f(2) = 4$, and $f'(x) \\le 2$ for all $x \\in [0, 2]$.`,
  tests: [
    'c.7.3.1',
    'c.6.2.4'
  ],
  approach: `<p>Apply the Fundamental Theorem of Calculus to $\\int_0^2 f'(x) \\, dx$ and compare with the bound on $f'(x)$.</p>`,
  solution: `<p>Suppose by contradiction that such a continuously differentiable function $f$ exists on $[0, 2]$.</p><p>Since $f'$ is continuous on $[0, 2]$, $f' \\in \\mathcal{R}[0, 2]$. By the Fundamental Theorem of Calculus (First Form / Evaluation Theorem):</p><p>$$\\int_0^2 f'(x) \\, dx = f(2) - f(0) = 4 - (-1) = 5$$</p><p>On the other hand, since $f'(x) \\le 2$ for all $x \\in [0, 2]$, monotonicity of the Riemann integral implies:</p><p>$$\\int_0^2 f'(x) \\, dx \\le \\int_0^2 2 \\, dx = 2 \\cdot (2 - 0) = 4$$</p><p>Combining these two results gives $5 \\le 4$, an obvious contradiction. Hence no such function $f$ exists.</p><p>(Alternatively, by the Mean Value Theorem, there exists $c \\in (0, 2)$ such that $f'(c) = \\frac{f(2) - f(0)}{2 - 0} = \\frac{5}{2} = 2.5$, which contradicts $f'(x) \\le 2$ for all $x$).</p>`,
  trap: "Attempting to integrate an inequality without verifying that the derivative $f'$ is Riemann integrable; here $f'$ is continuous, so FTC applies rigorously."
},
{
  id: 'q.ra2.m3.15',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.3',
  marks: 5,
  title: 'Differentiation of Symmetric Moving-Window Integral',
  source: 'Bartle & Sherbert 4e §7.3 Ex 15',
  prompt: `Let $f: \\mathbb{R} \\to \\mathbb{R}$ be continuous and let $c > 0$. Define $g: \\mathbb{R} \\to \\mathbb{R}$ by $g(x) := \\int_{x - c}^{x + c} f(t) \\, dt$. Prove that $g$ is differentiable on $\\mathbb{R}$ and find $g'(x)$.`,
  tests: [
    'c.7.3.5'
  ],
  approach: `<p>Express $g(x)$ in terms of the indefinite integral $F(u) = \\int_0^u f(t) dt$ and differentiate using the Chain Rule.</p>`,
  solution: `<p>Let $F(u) := \\int_0^u f(t) \\, dt$ for $u \\in \\mathbb{R}$. Since $f$ is continuous on $\\mathbb{R}$, by the Fundamental Theorem of Calculus, $F$ is differentiable on $\\mathbb{R}$ with $F'(u) = f(u)$.</p><p>By interval additivity of the integral:</p><p>$$g(x) = \\int_{x - c}^{x + c} f(t) \\, dt = \\int_0^{x + c} f(t) \\, dt - \\int_0^{x - c} f(t) \\, dt = F(x + c) - F(x - c)$$</p><p>The functions $u_1(x) := x + c$ and $u_2(x) := x - c$ are differentiable on $\\mathbb{R}$ with derivatives $u_1'(x) = 1$ and $u_2'(x) = 1$.</p><p>Applying the Chain Rule to each composite function:</p><p>$$g'(x) = \\frac{d}{dx} F(x + c) - \\frac{d}{dx} F(x - c) = F'(x + c) \\cdot 1 - F'(x - c) \\cdot 1$$</p><p>Substituting $F' = f$ gives:</p><p>$$g'(x) = f(x + c) - f(x - c)$$</p>`,
  trap: 'Forgetting the lower limit derivative and inner derivative signs, or trying to differentiate under the integral sign directly without referencing the Fundamental Theorem of Calculus.'
},
{
  id: 'q.ra2.m3.16',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.3',
  marks: 5,
  title: 'Cauchy-Bunyakovsky-Schwarz Inequality for Integrals',
  source: 'Bartle & Sherbert 4e §7.3 Ex 21',
  prompt: `Let $f, g \\in \\mathcal{R}[a, b]$. Prove the Cauchy-Bunyakovsky-Schwarz Inequality for integrals: $\\left( \\int_a^b f(x)g(x) \\, dx \\right)^2 \\le \\left( \\int_a^b (f(x))^2 \\, dx \\right) \\left( \\int_a^b (g(x))^2 \\, dx \\right)$.`,
  tests: [
    'c.7.2.10',
    'c.7.3.1'
  ],
  approach: `<p>Consider the quadratic polynomial $p(t) = \\int_a^b (tf(x) + g(x))^2 dx \\ge 0$ and examine its discriminant.</p>`,
  solution: `<p>For every $t \\in \\mathbb{R}$, since $(tf(x) + g(x))^2 \\ge 0$ for all $x \\in [a, b]$, monotonicity of the integral implies:</p><p>$$p(t) := \\int_a^b (tf(x) + g(x))^2 \\, dx \\ge 0$$</p><p>Expanding the integrand via linearity:</p><p>$$p(t) = t^2 \\int_a^b f^2 \\, dx + 2t \\int_a^b fg \\, dx + \\int_a^b g^2 \\, dx =: A t^2 + 2B t + C \\ge 0$$</p><p>where $A = \\int_a^b f^2 \\, dx$, $B = \\int_a^b fg \\, dx$, and $C = \\int_a^b g^2 \\, dx$.</p><p><b>Case 1:</b> If $A = 0$, then $p(t) = 2Bt + C \\ge 0$ for all $t \\in \\mathbb{R}$. A linear function cannot be bounded below on $\\mathbb{R}$ unless the linear coefficient vanishes, so $B = 0$. In this case $B^2 = 0 \\le 0 = AC$, which holds trivially.</p><p><b>Case 2:</b> If $A > 0$, $p(t)$ is a quadratic polynomial in $t$ with positive leading coefficient. Since $p(t) \\ge 0$ for all $t \\in \\mathbb{R}$, $p$ can have at most one real root. Therefore its discriminant must be non-positive:</p><p>$$\\Delta = (2B)^2 - 4AC \\le 0 \\implies 4B^2 \\le 4AC \\implies B^2 \\le AC$$</p><p>Substituting back $A, B, C$ yields:</p><p>$$\\left( \\int_a^b fg \\, dx \\right)^2 \\le \\left( \\int_a^b f^2 \\, dx \\right) \\left( \\int_a^b g^2 \\, dx \\right)$$</p>`,
  trap: 'Forgetting to handle the edge case $A = 0$ separately before dividing or applying the quadratic discriminant formula.'
},
{
  id: 'q.ra2.m3.17',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.3',
  marks: 5,
  title: 'Non-Integrability of Composite Functions',
  source: 'Bartle & Sherbert 4e §7.3 Ex 22',
  prompt: `Let $h: [0, 1] \\to \\mathbb{R}$ be Thomae's function and $\\operatorname{sgn}: \\mathbb{R} \\to \\mathbb{R}$ be the signum function. Prove that $h \\in \\mathcal{R}[0, 1]$ and $\\operatorname{sgn}$ is Riemann integrable on the range of $h$, but the composite function $\\operatorname{sgn} \\circ h$ is NOT Riemann integrable on $[0, 1]$.`,
  tests: [
    'c.7.1.4',
    'c.7.2.9'
  ],
  approach: `<p>Evaluate the composition $\\operatorname{sgn}(h(x))$ explicitly and show it is Dirichlet's function.</p>`,
  solution: `<p>Thomae's function $h: [0, 1] \\to \\mathbb{R}$ is defined by $h(x) := 1/q$ if $x = p/q \\in \\mathbb{Q}$ in lowest terms, and $h(x) := 0$ if $x \\notin \\mathbb{Q}$. It is continuous at every irrational and discontinuous only at the rationals. Since the set of discontinuities $\\mathbb{Q} \\cap [0, 1]$ is countable, $h \\in \\mathcal{R}[0, 1]$ with $\\int_0^1 h = 0$.</p><p>The range of $h$ is contained in $[0, 1]$. On $[0, 1]$, $\\operatorname{sgn}(y) = 0$ if $y = 0$ and $\\operatorname{sgn}(y) = 1$ if $y > 0$. This function is bounded and has only a single point of discontinuity at $y = 0$, so $\\operatorname{sgn} \\in \\mathcal{R}[0, 1]$.</p><p>Now evaluate the composition $g(x) := (\\operatorname{sgn} \\circ h)(x) = \\operatorname{sgn}(h(x))$ on $[0, 1]$:</p><p>If $x \\in \\mathbb{Q} \\cap [0, 1]$, then $h(x) > 0$, so $g(x) = \\operatorname{sgn}(h(x)) = 1$.</p><p>If $x \\notin \\mathbb{Q} \\cap [0, 1]$, then $h(x) = 0$, so $g(x) = \\operatorname{sgn}(0) = 0$.</p><p>Thus $g$ is Dirichlet's function on $[0, 1]$. As shown in Section 7.1, $U(g) = 1 \\ne 0 = L(g)$, so $g \\notin \\mathcal{R}[0, 1]$.</p><p>This proves that the composition of two Riemann integrable functions need not be Riemann integrable.</p>`,
  trap: 'Assuming that if $f$ and $g$ are Riemann integrable, then $g \\circ f$ must be Riemann integrable; the outer function can be discontinuous at points mapped densely by the inner function.'
},
{
  id: 'q.ra2.m3.18',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.4',
  marks: 5,
  title: 'Darboux Integrability with a Removable Discontinuity',
  source: 'Bartle & Sherbert 4e §7.4 Ex 6',
  prompt: `Let $f: [0, 2] \\to \\mathbb{R}$ be defined by $f(x) := 1$ if $x \\ne 1$ and $f(1) := 0$. Prove using the Darboux Integrability Criterion that $f$ is Darboux integrable on $[0, 2]$ and evaluate $\\int_0^2 f$.`,
  tests: [
    'c.7.4.1',
    'c.7.4.8'
  ],
  approach: `<p>For any $\\varepsilon > 0$, construct a partition whose subintervals isolate $1$ inside an interval of width $< \\varepsilon$.</p>`,
  solution: `<p>On $[0, 2]$, $0 \\le f(x) \\le 1$ for all $x$, so $f$ is bounded. In any non-degenerate subinterval $[x_{i-1}, x_i]$, there are infinitely many points other than $1$, so $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x) = 1$.</p><p>Therefore, for every partition $P$ of $[0, 2]$:</p><p>$$U(f, P) = \\sum_{i=1}^n M_i \\Delta x_i = \\sum_{i=1}^n 1 \\cdot \\Delta x_i = 2$$</p><p>Thus the upper Darboux integral is $U(f) = \\inf_P U(f, P) = 2$.</p><p>Now let $\\varepsilon > 0$ with $\\varepsilon < 2$. Choose $\\delta := \\varepsilon / 4$ and construct the partition $P_\\varepsilon := \\{0, 1 - \\delta, 1 + \\delta, 2\\}$.</p><p>The subintervals are $I_1 = [0, 1 - \\delta]$, $I_2 = [1 - \\delta, 1 + \\delta]$, $I_3 = [1 + \\delta, 2]$. On $I_1$ and $I_3$, $x \\ne 1$, so $f(x) = 1$ identically, giving $m_1 = 1, m_3 = 1$. On $I_2$, $1 \\in I_2$, so $m_2 = \\inf_{x \\in I_2} f(x) = f(1) = 0$.</p><p>Compute the lower Darboux sum:</p><p>$$L(f, P_\\varepsilon) = 1 \\cdot (1 - \\delta) + 0 \\cdot (2\\delta) + 1 \\cdot (1 - \\delta) = 2 - 2\\delta = 2 - \\frac{\\varepsilon}{2}$$</p><p>Then $U(f, P_\\varepsilon) - L(f, P_\\varepsilon) = 2 - (2 - \\varepsilon/2) = \\frac{\\varepsilon}{2} < \\varepsilon$. By the Darboux Integrability Criterion (Theorem 7.4.8), $f$ is Darboux integrable on $[0, 2]$ with $\\int_0^2 f = 2$.</p>`,
  trap: 'Claiming $m_i = 0$ on all subintervals; $m_i = 0$ only on the subinterval containing the single point $x = 1$.'
},
{
  id: 'q.ra2.m3.19',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.4',
  marks: 5,
  title: 'Superadditivity of Lower Darboux Integrals',
  source: 'Bartle & Sherbert 4e §7.4 Ex 9 & 10',
  prompt: `Let $f_1$ and $f_2$ be bounded functions on $[a, b]$.<br>(a) Prove that $L(f_1) + L(f_2) \\le L(f_1 + f_2)$.<br>(b) Give an explicit example where strict inequality holds.`,
  tests: [
    'c.7.4.1'
  ],
  approach: `<p>Use the infimum inequality $\\inf(A + B) \\ge \\inf A + \\inf B$ on each subinterval for a common refinement, then take supremums.</p>`,
  solution: `<p><b>(a)</b> Let $P$ be any partition of $[a, b]$. On each subinterval $I_i = [x_{i-1}, x_i]$, we have:</p><p>$$m_i(f_1 + f_2) = \\inf_{x \\in I_i} (f_1(x) + f_2(x)) \\ge \\inf_{x \\in I_i} f_1(x) + \\inf_{x \\in I_i} f_2(x) = m_i(f_1) + m_i(f_2)$$</p><p>Multiplying by $\\Delta x_i > 0$ and summing over $i = 1, \\dots, n$:</p><p>$$L(f_1 + f_2, P) \\ge L(f_1, P) + L(f_2, P)$$</p><p>Now let $P_1$ and $P_2$ be any two partitions of $[a, b]$, and let $P = P_1 \\cup P_2$ be their common refinement. Since refining a partition increases lower sums:</p><p>$$L(f_1, P_1) + L(f_2, P_2) \\le L(f_1, P) + L(f_2, P) \\le L(f_1 + f_2, P) \\le L(f_1 + f_2)$$</p><p>Taking the supremum over all partitions $P_1$ and $P_2$ gives $L(f_1) + L(f_2) \\le L(f_1 + f_2)$.</p><p><b>(b) Strict inequality:</b> Let $[a, b] = [0, 1]$. Define $f_1(x) = 1$ for $x \\in \\mathbb{Q} \\cap [0, 1]$ and $0$ otherwise (Dirichlet function); define $f_2(x) = -f_1(x)$.</p><p>On any subinterval, $\\inf f_1 = 0$ and $\\inf f_2 = -1$, so $L(f_1) = 0$ and $L(f_2) = -1$. Thus $L(f_1) + L(f_2) = -1$.</p><p>However, $(f_1 + f_2)(x) = 0$ everywhere, so $L(f_1 + f_2) = 0$. Since $-1 < 0$, strict inequality holds.</p>`,
  trap: 'Forgetting that lower sums for two different partitions $P_1$ and $P_2$ cannot be added directly without passing to a common refinement $P = P_1 \\cup P_2$.'
},
{
  id: 'q.ra2.m3.20',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.4',
  marks: 5,
  title: 'Darboux Null Set Property for Finite Points',
  source: 'Bartle & Sherbert 4e §7.4 Ex 11',
  prompt: `Let $f: [a, b] \\to \\mathbb{R}$ be a bounded function such that $f(x) = 0$ except at a finite number of points $\\{c_1, c_2, \\dots, c_s\\} \\subset [a, b]$. Prove that $U(f) = L(f) = 0$, so $f$ is Darboux integrable with integral $0$.`,
  tests: [
    'c.7.4.1',
    'c.7.4.8'
  ],
  approach: `<p>Isolate each $c_k$ in subintervals of total length $< \\varepsilon / (2sM)$.</p>`,
  solution: `<p>Since $f$ is bounded, choose $M > 0$ such that $|f(x)| \\le M$ for all $x \\in [a, b]$. Let $\\varepsilon > 0$.</p><p>Enclose each point $c_k$ in an open interval $J_k$ of length less than $\\frac{\\varepsilon}{2sM}$.</p><p>Construct a partition $P$ whose subintervals contain these $s$ intervals enclosing the points $c_k$, plus intervals between them on which $f(x) = 0$ identically.</p><p>On the subintervals where $f(x) = 0$, $M_i = m_i = 0$. On the $s$ subintervals containing the points $c_k$, we have $-M \\le m_i \\le M_i \\le M$. Therefore:</p><p>$$U(f, P) = \\sum_{k=1}^s M_k \\text{len}(J_k) \\le M \\sum_{k=1}^s \\text{len}(J_k) < M \\cdot s \\cdot \\frac{\\varepsilon}{2sM} = \\frac{\\varepsilon}{2} < \\varepsilon$$</p><p>Similarly, $L(f, P) \\ge -M \\sum_{k=1}^s \\text{len}(J_k) > -\\frac{\\varepsilon}{2} > -\\varepsilon$.</p><p>Since $L(f, P) \\le L(f) \\le U(f) \\le U(f, P)$, we have $-\\varepsilon < L(f) \\le U(f) < \\varepsilon$ for every $\\varepsilon > 0$. Letting $\\varepsilon \\to 0$ gives $L(f) = U(f) = 0$. Hence $f$ is Darboux integrable and $\\int_a^b f = 0$.</p>`,
  trap: 'Assuming this property holds for any countably infinite set of points; it does not hold for $\\mathbb{Q} \\cap [0, 1]$ (Dirichlet function).'
},
{
  id: 'q.ra2.m3.21',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.4',
  marks: 5,
  title: 'Darboux Integrability of Monotone Functions',
  source: 'Bartle & Sherbert 4e §7.4 Ex 14(b)',
  prompt: `Prove that if $f: [a, b] \\to \\mathbb{R}$ is monotone on $[a, b]$, then $f$ is Darboux integrable on $[a, b]$.`,
  tests: [
    'c.7.4.8',
    'c.7.2.8'
  ],
  approach: `<p>Choose an equipartition of $n$ subintervals and telescope the sum $\\sum (M_i - m_i) \\Delta x_i$.</p>`,
  solution: `<p>Assume without loss of generality that $f$ is increasing on $[a, b]$ (if $f$ is decreasing, consider $-f$).</p><p>If $f(a) = f(b)$, then $f$ is constant, hence integrable. Assume $f(b) > f(a)$. Let $\\varepsilon > 0$. Choose $n \\in \\mathbb{N}$ such that:</p><p>$$\\frac{(b - a)(f(b) - f(a))}{n} < \\varepsilon$$</p><p>Let $P_n = \\{x_0, x_1, \\dots, x_n\\}$ be the equipartition of $[a, b]$ into $n$ equal subintervals of width $\\Delta x_i = \\frac{b - a}{n}$. Since $f$ is increasing, on each $[x_{i-1}, x_i]$:</p><p>$$m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x) = f(x_{i-1}), \\quad M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x) = f(x_i)$$</p><p>Thus $M_i - m_i = f(x_i) - f(x_{i-1})$. Now evaluate the Darboux gap:</p><p>$$U(f, P_n) - L(f, P_n) = \\sum_{i=1}^n (M_i - m_i) \\Delta x_i = \\frac{b - a}{n} \\sum_{i=1}^n (f(x_i) - f(x_{i-1}))$$</p><p>The sum telescopes: $\\sum_{i=1}^n (f(x_i) - f(x_{i-1})) = f(x_n) - f(x_0) = f(b) - f(a)$. Therefore:</p><p>$$U(f, P_n) - L(f, P_n) = \\frac{b - a}{n} (f(b) - f(a)) < \\varepsilon$$</p><p>By the Darboux Integrability Criterion (Theorem 7.4.8), $f$ is Darboux integrable on $[a, b]$.</p>`,
  trap: 'Monotone functions may have countably infinitely many jump discontinuities (dense jumps), yet they are always integrable because the jumps telescope.'
},
{
  id: 'q.ra2.m3.22',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.4',
  marks: 5,
  title: 'Error Bound for Lipschitz Functions',
  source: 'Bartle & Sherbert 4e §7.4 Ex 15',
  prompt: `Let $f: [a, b] \\to \\mathbb{R}$ satisfy the Lipschitz condition $|f(x) - f(y)| \\le K|x - y|$ for all $x, y \\in [a, b]$, where $K > 0$. If $P_n$ is the partition of $[a, b]$ into $n$ equal subintervals, prove that $0 \\le U(f, P_n) - \\int_a^b f \\le \\frac{K(b - a)^2}{n}$.`,
  tests: [
    'c.7.4.1',
    'c.7.4.8'
  ],
  approach: `<p>Bound $M_i - m_i \\le K \\Delta x_i$ on each subinterval using the Lipschitz condition, and relate $U(f, P_n) - \\int_a^b f \\le U(f, P_n) - L(f, P_n)$.</p>`,
  solution: `<p>For the equal partition $P_n$, the width of each subinterval is $\\Delta x_i = \\frac{b - a}{n}$.</p><p>On each subinterval $I_i = [x_{i-1}, x_i]$, since $f$ is continuous (Lipschitz functions are continuous), $f$ attains its supremum at some $u_i \\in I_i$ and its infimum at some $v_i \\in I_i$. By the Lipschitz condition:</p><p>$$M_i - m_i = f(u_i) - f(v_i) = |f(u_i) - f(v_i)| \\le K |u_i - v_i| \\le K \\Delta x_i = \\frac{K(b - a)}{n}$$</p><p>Compute the difference between upper and lower Darboux sums:</p><p>$$U(f, P_n) - L(f, P_n) = \\sum_{i=1}^n (M_i - m_i) \\Delta x_i \\le \\sum_{i=1}^n \\frac{K(b - a)}{n} \\cdot \\frac{b - a}{n} = n \\cdot \\frac{K(b - a)^2}{n^2} = \\frac{K(b - a)^2}{n}$$</p><p>Since $L(f, P_n) \\le \\int_a^b f \\le U(f, P_n)$, we obtain:</p><p>$$0 \\le U(f, P_n) - \\int_a^b f \\le U(f, P_n) - L(f, P_n) \\le \\frac{K(b - a)^2}{n}$$</p>`,
  trap: 'Forgetting that $U(f, P_n) - \\int_a^b f$ is bounded by $U(f, P_n) - L(f, P_n)$.'
},
{
  id: 'q.ra2.m3.23',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.5',
  marks: 5,
  title: 'Trapezoidal Approximation and Error Bounds for π/4',
  source: 'Bartle & Sherbert 4e §7.5 Ex 3 & 4',
  prompt: `Let $f(x) := \\frac{1}{1 + x^2}$ for $x \\in [0, 1]$.<br>(a) Show that $|f''(x)| \\le 2$ for all $x \\in [0, 1]$.<br>(b) Use the Trapezoidal Rule error formula to prove that $|T_4(f) - \\frac{\\pi}{4}| \\le \\frac{1}{96}$.<br>(c) Determine how large $n$ must be chosen so that the Trapezoidal approximation error $|T_n(f) - \\frac{\\pi}{4}|$ is guaranteed to be less than $10^{-6}$.`,
  tests: [
    'c.7.5.1'
  ],
  approach: `<p>Compute $f''(x)$, bound $|f''(x)|$ on $[0, 1]$, and apply the error formula $|T_n(f) - \\int_a^b f| \\le \\frac{(b-a)^3}{12n^2} B_2$.</p>`,
  solution: `<p><b>(a)</b> Compute the derivatives:</p><p>$$f'(x) = \\frac{-2x}{(1 + x^2)^2}, \\quad f''(x) = \\frac{2(3x^2 - 1)}{(1 + x^2)^3}$$</p><p>For $x \\in [0, 1]$, $-1 \\le 3x^2 - 1 \\le 2$, so $|3x^2 - 1| \\le 2$. Since $(1 + x^2)^3 \\ge 1$, we have $|f''(x)| \\le \\frac{2 \\cdot 2}{1} = 4$ crudely, and evaluating at the boundary points gives $f''(0) = -2$ and $f''(1) = 4/8 = 1/2$. Critical points of $f''$ show that $|f''(x)| \\le 2$ on $[0, 1]$. Thus $B_2 := \\sup_{x \\in [0, 1]} |f''(x)| \\le 2$.</p><p><b>(b)</b> The Trapezoidal error formula for $\\int_0^1 \\frac{1}{1+x^2} dx = \\arctan(1) = \\frac{\\pi}{4}$ gives:</p><p>$$\\left| T_n(f) - \\frac{\\pi}{4} \\right| \\le \\frac{(b - a)^3}{12 n^2} B_2$$</p><p>For $a = 0, b = 1, n = 4$ and $B_2 = 2$:</p><p>$$\\left| T_4(f) - \\frac{\\pi}{4} \\right| \\le \\frac{1^3}{12 \\cdot 4^2} \\cdot 2 = \\frac{2}{192} = \\frac{1}{96} < 0.0105$$</p><p><b>(c)</b> To guarantee an error less than $10^{-6}$, set:</p><p>$$\\frac{1}{12 n^2} \\cdot 2 = \\frac{1}{6n^2} < 10^{-6} \\implies n^2 > \\frac{10^6}{6} \\approx 166666.67 \\implies n > 408.25$$</p><p>Thus we must choose $n \\ge 409$.</p>`,
  trap: 'Confusing $(b - a)^3$ in the Trapezoidal rule with $(b - a)^5$ in Simpson rule, or omitting the factor of 12 in the denominator.'
},
{
  id: 'q.ra2.m3.24',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.5',
  marks: 5,
  title: "Simpson's Rule Error Estimate for π/4",
  source: 'Bartle & Sherbert 4e §7.5 Ex 5 & 6',
  prompt: `Let $f(x) := \\frac{1}{1 + x^2}$ on $[0, 1]$, with fourth derivative $f^{(4)}(x) = \\frac{24(5x^4 - 10x^2 + 1)}{(1 + x^2)^5}$, which satisfies $|f^{(4)}(x)| \\le 96$ on $[0, 1]$.<br>(a) Use Simpson's Rule error formula to bound $|S_4(f) - \\frac{\\pi}{4}|$.<br>(b) How large must $n$ (an even integer) be to ensure the error is less than $10^{-6}$?`,
  tests: [
    'c.7.5.1'
  ],
  approach: `<p>Apply the Simpson error formula $|S_n(f) - \\int_a^b f| \\le \\frac{(b - a)^5}{180 n^4} B_4$ with $B_4 = 96$.</p>`,
  solution: `<p><b>(a)</b> With $a = 0, b = 1$, and $B_4 = 96$, the Simpson error formula gives:</p><p>$$\\left| S_n(f) - \\int_0^1 f \\right| \\le \\frac{(b - a)^5}{180 n^4} B_4 = \\frac{1}{180 n^4} \\cdot 96 = \\frac{8}{15 n^4}$$</p><p>For $n = 4$:</p><p>$$\\left| S_4(f) - \\frac{\\pi}{4} \\right| \\le \\frac{8}{15 \\cdot 4^4} = \\frac{8}{15 \\cdot 256} = \\frac{1}{15 \\cdot 32} = \\frac{1}{480} < 0.0021$$</p><p><b>(b)</b> To ensure error less than $10^{-6}$, set:</p><p>$$\\frac{8}{15 n^4} < 10^{-6} \\implies n^4 > \\frac{8 \\cdot 10^6}{15} \\approx 533333.33 \\implies n > (533333.33)^{1/4} \\approx 27.02$$</p><p>Since $n$ must be an even integer for Simpson's rule, we must choose $n \\ge 28$.</p>`,
  trap: "Simpson's rule requires $n$ to be an even integer; choosing $n = 27$ is invalid, so the minimal valid integer is $n = 28$."
},
{
  id: 'q.ra2.m3.25',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.5',
  marks: 5,
  title: "Exactness of Simpson's Rule for Cubics",
  source: 'Bartle & Sherbert 4e §7.5 Ex 7',
  prompt: `Prove that Simpson's Rule is exact for every polynomial $p(x)$ of degree at most 3: $\\int_a^b p(x) \\, dx = S_n(p)$ for any even $n \\in \\mathbb{N}$.`,
  tests: [
    'c.7.5.1'
  ],
  approach: `<p>Use the Simpson error formula involving the fourth derivative $p^{(4)}(x) \\equiv 0$.</p>`,
  solution: `<p><b>Method 1 (Error Formula):</b> By Theorem 7.5.4, if $f$ has four continuous derivatives on $[a, b]$, the error in Simpson's rule satisfies:</p><p>$$\\left| S_n(f) - \\int_a^b f \\right| \\le \\frac{(b - a)^5}{180 n^4} \\sup_{x \\in [a, b]} |f^{(4)}(x)|$$</p><p>Let $p(x) = c_3 x^3 + c_2 x^2 + c_1 x + c_0$ be any polynomial of degree at most 3. Differentiating four times:</p><p>$$p'(x) = 3c_3 x^2 + 2c_2 x + c_1, \\quad p''(x) = 6c_3 x + 2c_2, \\quad p'''(x) = 6c_3, \\quad p^{(4)}(x) \\equiv 0$$</p><p>Since $p^{(4)}(x) = 0$ for all $x \\in [a, b]$, the error bound becomes:</p><p>$$\\left| S_n(p) - \\int_a^b p \\right| \\le \\frac{(b - a)^5}{180 n^4} \\cdot 0 = 0$$</p><p>Therefore, $\\int_a^b p(x) \\, dx = S_n(p)$ exactly.</p><p><b>Method 2 (Symmetry):</b> Simpson's rule fits a parabola on each double interval $[c - h, c + h]$. The cubic term $(x - c)^3$ is odd about the midpoint $c$, so its integral $\\int_{c-h}^{c+h} (x - c)^3 dx = 0$, and Simpson's sum $\\frac{h}{3}[(-h)^3 + 4(0) + h^3] = 0$ also vanishes. Thus the cubic contribution is zero on both sides, yielding exactness.</p>`,
  trap: "Assuming Simpson's rule is only exact for degree 2 polynomials because it uses parabolic interpolants; the symmetry of the cubic term about the midpoint causes its error to vanish identically."
},
{
  id: 'q.ra2.m3.26',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.5',
  marks: 5,
  title: 'Midpoint and Trapezoidal Bounds for Convex Functions',
  source: 'Bartle & Sherbert 4e §7.5 Ex 8',
  prompt: `Let $f: [a, b] \\to \\mathbb{R}$ satisfy $f''(x) \\ge 0$ for all $x \\in [a, b]$ (i.e. $f$ is convex). Prove that for any natural numbers $m, n$, $M_m(f) \\le \\int_a^b f(x) \\, dx \\le T_n(f)$.`,
  tests: [
    'c.7.5.1'
  ],
  approach: `<p>On each subinterval, secant lines lie above the convex curve while tangent lines at midpoints lie below.</p>`,
  solution: `<p>Let $I_k = [x_{k-1}, x_k]$ be a subinterval with midpoint $c_k = (x_{k-1} + x_k)/2$ and width $h = x_k - x_{k-1}$.</p><p><b>Trapezoidal upper bound:</b> Since $f''(x) \\ge 0$, $f$ is convex. The secant line $L_k(x)$ connecting $(x_{k-1}, f(x_{k-1}))$ and $(x_k, f(x_k))$ lies above the curve: $f(x) \\le L_k(x)$ for all $x \\in I_k$. Integrating gives:</p><p>$$\\int_{x_{k-1}}^{x_k} f(x) \\, dx \\le \\int_{x_{k-1}}^{x_k} L_k(x) \\, dx = \\frac{h}{2}[f(x_{k-1}) + f(x_k)]$$</p><p>Summing over all $n$ subintervals gives $\\int_a^b f(x) \\, dx \\le T_n(f)$.</p><p><b>Midpoint lower bound:</b> By Taylor's Theorem (or convexity), the tangent line to $f$ at the midpoint $c_k$ lies below the curve: $f(x) \\ge f(c_k) + f'(c_k)(x - c_k)$ for all $x$. Integrating over $[x_{k-1}, x_k]$:</p><p>$$\\int_{x_{k-1}}^{x_k} f(x) \\, dx \\ge \\int_{x_{k-1}}^{x_k} [f(c_k) + f'(c_k)(x - c_k)] \\, dx = f(c_k) h + f'(c_k) \\cdot 0 = h f(c_k)$$</p><p>Summing over all $m$ subintervals gives $\\int_a^b f(x) \\, dx \\ge M_m(f)$.</p><p>Combining both inequalities gives $M_m(f) \\le \\int_a^b f(x) \\, dx \\le T_n(f)$ for all $m, n$.</p>`,
  trap: 'Forgetting that the tangent line at the midpoint integrates exactly to $h f(c_k)$ because $\\int_{c-h/2}^{c+h/2} (x - c) dx = 0$.'
},
{
  id: 'q.ra2.m3.27',
  course: 'ra2',
  module: 'ra2.m3',
  sec: '7.5',
  marks: 5,
  title: "Composite Simpson's Rule as Linear Combination",
  source: 'Bartle & Sherbert 4e §7.5 Ex 9 & 10',
  prompt: `Let $f \\in \\mathcal{R}[a, b]$. Prove that the composite Trapezoidal and Simpson approximations satisfy:<br>(a) $T_{2n}(f) = \\frac{1}{2} [M_n(f) + T_n(f)]$;<br>(b) $S_{2n}(f) = \\frac{2}{3} M_n(f) + \\frac{1}{3} T_n(f)$.`,
  tests: [
    'c.7.5.1'
  ],
  approach: `<p>Express $T_{2n}(f)$ and $S_{2n}(f)$ in terms of partition points and separate the sum into even and odd indices.</p>`,
  solution: `<p>Let $h := \\frac{b - a}{2n}$. For partition $P_{2n}$, the partition points are $y_k = a + k h$ for $k = 0, 1, \\dots, 2n$.</p><p>The even points $y_{2j} = a + 2jh$ are the points $x_j$ of the partition $P_n$ of mesh $2h$. The odd points $y_{2j-1} = a + (2j-1)h$ are the midpoints $c_j$ of the subintervals of $P_n$.</p><p><b>(a)</b> The Trapezoidal sum for $P_{2n}$ is:</p><p>$$T_{2n}(f) = h \\left[ \\frac{1}{2} f(y_0) + \\sum_{j=1}^n f(y_{2j-1}) + \\sum_{j=1}^{n-1} f(y_{2j}) + \\frac{1}{2} f(y_{2n}) \\right]$$</p><p>The odd sum is $h \\sum_{j=1}^n f(c_j) = \\frac{1}{2} M_n(f)$, while the remaining terms are $\\frac{1}{2} T_n(f)$. Hence:</p><p>$$T_{2n}(f) = \\frac{1}{2} [M_n(f) + T_n(f)]$$</p><p><b>(b)</b> Simpson's rule $S_{2n}(f)$ with step $h$ is:</p><p>$$S_{2n}(f) = \\frac{h}{3} \\left[ f(y_0) + 4 \\sum_{j=1}^n f(y_{2j-1}) + 2 \\sum_{j=1}^{n-1} f(y_{2j}) + f(y_{2n}) \\right]$$</p><p>Rewriting the coefficients:</p><p>$$S_{2n}(f) = \\frac{4}{3} h \\sum_{j=1}^n f(y_{2j-1}) + \\frac{2}{3} h \\left[ \\frac{1}{2} f(y_0) + \\sum_{j=1}^{n-1} f(y_{2j}) + \\frac{1}{2} f(y_{2n}) \\right] = \\frac{2}{3} M_n(f) + \\frac{1}{3} T_n(f)$$</p>`,
  trap: "Confusing $S_{2n}$ with $S_n$. Simpson's rule requires an even number of subintervals $2n$ combining $n$ midpoint and $n$ trapezoidal evaluations."
}
);

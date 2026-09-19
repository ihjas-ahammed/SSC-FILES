/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis for Entrance (GATE / JAM / CUSAT)
   Level 3 Written Questions: Modules E1 - E7 (35 questions total)
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(
{
  "id": "q.rae.e1.01",
  "course": "rae",
  "module": "rae.t1",
  "sec": "E1",
  "marks": 5,
  "title": "Metric Space Axioms and Discrete Metric Topology",
  "source": "GATE MA 2021 / Rudin Ch. 2",
  "prompt": "Let $X$ be any non-empty set. Define $d(x, y) := 0$ if $x = y$ and $d(x, y) := 1$ if $x \\ne y$ (the discrete metric).<br>(a) Verify that $d$ satisfies all three metric axioms.<br>(b) Prove that in $(X, d)$, every subset $E \\subseteq X$ is both open and closed.<br>(c) Describe all convergent sequences in $(X, d)$.",
  "tests": [
    "c.e1.1",
    "c.e1.2",
    "c.e1.3",
    "c.e1.4"
  ],
  "approach": "<p>Check positivity, symmetry, and triangle inequality. Inspect open balls of radius $r \\le 1$ to analyze the topology, and use the definition of convergence with $\\varepsilon = 1/2$.</p>",
  "solution": "<p><b>(a) Metric Axioms:</b></p><p>1. Positivity: By definition $d(x, y) \\in \\{0, 1\\}$, so $d(x, y) \\ge 0$. Furthermore, $d(x, y) = 0 \\iff x = y$.</p><p>2. Symmetry: $x = y \\iff y = x$, so $d(x, y) = d(y, x)$.</p><p>3. Triangle Inequality: If $x = z$, $d(x, z) = 0 \\le d(x, y) + d(y, z)$ holds trivially. If $x \\ne z$, then $d(x, z) = 1$. The point $y$ cannot simultaneously equal $x$ and $z$, so at least one of $d(x, y)$ or $d(y, z)$ is $1$. Hence $d(x, y) + d(y, z) \\ge 1 = d(x, z)$.</p><p><b>(b) Clopen Subsets:</b> For any point $x \\in X$, consider the open ball $B(x, 1/2) = \\{y \\in X : d(y, x) < 1/2\\} = \\{x\\}$. Since each open ball is open, every singleton $\\{x\\}$ is an open set. Any subset $E \\subseteq X$ is the union of its singletons: $E = \\bigcup_{x \\in E} \\{x\\}$. An arbitrary union of open sets is open, so $E$ is open. Its complement $X \\setminus E$ is likewise open, which implies $E$ is also closed.</p><p><b>(c) Convergent Sequences:</b> Let $(x_n)$ converge to $x$. Setting $\\varepsilon = 1/2$, there exists $N \\in \\mathbb{N}$ such that for all $n \\ge N$, $d(x_n, x) < 1/2$. By definition of $d$, $d(x_n, x) < 1/2 \\implies d(x_n, x) = 0 \\implies x_n = x$. Thus, convergent sequences in the discrete metric are precisely the eventually constant sequences.</p>",
  "trap": "In general metric spaces, sets are rarely clopen, but the discrete metric endows $X$ with the discrete topology where every subset is clopen."
},
{
  "id": "q.rae.e1.02",
  "course": "rae",
  "module": "rae.t1",
  "sec": "E1",
  "marks": 5,
  "title": "Topological Equivalence of Euclidean, Taxicab, and Maximum Metrics",
  "source": "JAM MA 2019 / Carothers Ch. 3",
  "prompt": "For $x, y \\in \\mathbb{R}^n$, define the metrics:<br>$$d_2(x, y) = \\left(\\sum_{i=1}^n (x_i - y_i)^2\\right)^{1/2}, \\quad d_1(x, y) = \\sum_{i=1}^n |x_i - y_i|, \\quad d_\\infty(x, y) = \\max_{1 \\le i \\le n} |x_i - y_i|$$<br>(a) Prove the chain of inequalities: $d_\\infty(x, y) \\le d_2(x, y) \\le d_1(x, y) \\le n \\, d_\\infty(x, y)$.<br>(b) Prove that $d_1, d_2, d_\\infty$ are strongly equivalent metrics, and conclude that a set $U \\subseteq \\mathbb{R}^n$ is open in $(\\mathbb{R}^n, d_2)$ if and only if it is open in $(\\mathbb{R}^n, d_\\infty)$.",
  "tests": [
    "c.e1.1",
    "c.e1.2"
  ],
  "approach": "<p>Establish the standard norm comparison inequalities in $\\mathbb{R}^n$ and show that every ball in one metric contains a ball of the other metric.</p>",
  "solution": "<p><b>(a) Comparison Inequalities:</b> Let $z_i = |x_i - y_i|$.</p><p>1. For each $k$, $z_k = \\sqrt{z_k^2} \\le \\sqrt{\\sum_{i=1}^n z_i^2} = d_2(x, y)$. Taking the maximum over $k$ yields $d_\\infty(x, y) \\le d_2(x, y)$.</p><p>2. Expanding the square: $d_2(x, y)^2 = \\sum_{i=1}^n z_i^2 \\le \\left(\\sum_{i=1}^n z_i\\right)^2 = d_1(x, y)^2$, so taking the square root gives $d_2(x, y) \\le d_1(x, y)$.</p><p>3. Since each $z_i \\le \\max_j z_j = d_\\infty(x, y)$, summing over all $n$ components gives $d_1(x, y) = \\sum_{i=1}^n z_i \\le n \\, d_\\infty(x, y)$.</p><p>Combining these inequalities gives: $$d_\\infty(x, y) \\le d_2(x, y) \\le d_1(x, y) \\le n \\, d_\\infty(x, y)$$</p><p><b>(b) Topological Equivalence:</b> Two metrics $d$ and $\\rho$ are strongly equivalent if there exist constants $c_1, c_2 > 0$ such that $c_1 \\rho(x, y) \\le d(x, y) \\le c_2 \\rho(x, y)$. Here, $d_\\infty(x, y) \\le d_2(x, y) \\le n \\, d_\\infty(x, y)$.</p><p>Suppose $U$ is open in $(\\mathbb{R}^n, d_2)$ and let $x_0 \\in U$. There exists $r > 0$ such that $B_{d_2}(x_0, r) \\subseteq U$. Since $d_2(x, x_0) \\le n \\, d_\\infty(x, x_0)$, if $d_\\infty(x, x_0) < r/n$, then $d_2(x, x_0) < r$. Hence $B_{d_\\infty}(x_0, r/n) \\subseteq B_{d_2}(x_0, r) \\subseteq U$, showing $U$ is open in $d_\\infty$.</p><p>Conversely, if $U$ is open in $d_\\infty$, for any $x_0 \\in U$ there is $r > 0$ with $B_{d_\\infty}(x_0, r) \\subseteq U$. Since $d_\\infty(x, x_0) \\le d_2(x, x_0)$, $B_{d_2}(x_0, r) \\subseteq B_{d_\\infty}(x_0, r) \\subseteq U$, showing $U$ is open in $d_2$. Thus $d_1, d_2, d_\\infty$ induce the identical topology.</p>",
  "trap": "While topological equivalence holds in finite dimensions $\\mathbb{R}^n$, norm equivalence generally fails in infinite-dimensional spaces such as $C[0, 1]$."
},
{
  "id": "q.rae.e1.03",
  "course": "rae",
  "module": "rae.t1",
  "sec": "E1",
  "marks": 5,
  "title": "Closure, Interior, Boundary, and Density in Metric Spaces",
  "source": "GATE MA 2020 / Rudin Ch. 2",
  "prompt": "Let $(X, d)$ be a metric space and $A \\subseteq X$. The boundary of $A$ is defined as $\\partial A := \\overline{A} \\cap \\overline{X \\setminus A}$.<br>(a) Prove that $\\partial A$ is always a closed set.<br>(b) Prove that $A$ is open if and only if $A \\cap \\partial A = \\emptyset$.<br>(c) For $A = \\mathbb{Q}$ in $(\\mathbb{R}, |\\cdot|)$, determine $A^\\circ$, $\\overline{A}$, and $\\partial A$.",
  "tests": [
    "c.e1.2",
    "c.e1.3"
  ],
  "approach": "<p>Use the definition of closure as an intersection of closed sets and characterization of open sets in terms of interior points.</p>",
  "solution": "<p><b>(a) $\\partial A$ is Closed:</b> For any set $S$, its closure $\\overline{S}$ is closed. Therefore $\\overline{A}$ and $\\overline{X \\setminus A}$ are both closed sets in $(X, d)$. Since the intersection of any collection of closed sets is closed, $\\partial A = \\overline{A} \\cap \\overline{X \\setminus A}$ is closed.</p><p><b>(b) $A$ is Open $\\iff A \\cap \\partial A = \\emptyset$:</b></p><p>Notice that $A \\cap \\partial A = A \\cap (\\overline{A} \\cap \\overline{X \\setminus A}) = (A \\cap \\overline{A}) \\cap \\overline{X \\setminus A} = A \\cap \\overline{X \\setminus A}$.</p><p>($\\implies$) Suppose $A$ is open. Then its complement $X \\setminus A$ is closed, so $\\overline{X \\setminus A} = X \\setminus A$. Thus $A \\cap \\partial A = A \\cap (X \\setminus A) = \\emptyset$.</p><p>($\\impliedby$) Suppose $A \\cap \\partial A = \\emptyset$. Then $A \\cap \\overline{X \\setminus A} = \\emptyset$, which implies $A \\subseteq X \\setminus \\overline{X \\setminus A}$. Since $\\overline{X \\setminus A}$ is closed, its complement $X \\setminus \\overline{X \\setminus A}$ is open, and clearly $X \\setminus \\overline{X \\setminus A} \\subseteq X \\setminus (X \\setminus A) = A$. Hence $A = X \\setminus \\overline{X \\setminus A}$, which is an open set.</p><p><b>(c) Determination for $A = \\mathbb{Q}$:</b></p><p>1. Interior $\\mathbb{Q}^\\circ$: Any non-empty open interval $(a, b) \\subseteq \\mathbb{R}$ contains irrational numbers, so no open ball can be contained in $\\mathbb{Q}$. Hence $\\mathbb{Q}^\\circ = \\emptyset$.</p><p>2. Closure $\\overline{\\mathbb{Q}}$: Every real number is a limit of rationals, so $\\overline{\\mathbb{Q}} = \\mathbb{R}$.</p><p>3. Boundary $\\partial \\mathbb{Q}$: The complement is $\\mathbb{R} \\setminus \\mathbb{Q}$. Since the rationals and irrationals are both dense in $\\mathbb{R}$, $\\overline{\\mathbb{Q}} = \\mathbb{R}$ and $\\overline{\\mathbb{R} \\setminus \\mathbb{Q}} = \\mathbb{R}$. Therefore $\\partial \\mathbb{Q} = \\mathbb{R} \\cap \\mathbb{R} = \\mathbb{R}$.</p>",
  "trap": "Do not confuse boundary with set-theoretic difference; the boundary can be much larger than the set itself, as shown by $\\partial \\mathbb{Q} = \\mathbb{R}$."
},
{
  "id": "q.rae.e1.04",
  "course": "rae",
  "module": "rae.t1",
  "sec": "E1",
  "marks": 5,
  "title": "Distance to a Set and Urysohn Separation in Metric Spaces",
  "source": "GATE MA 2022 / Carothers Ch. 4",
  "prompt": "Let $(X, d)$ be a metric space. For a non-empty subset $A \\subseteq X$, define $d(x, A) := \\inf_{a \\in A} d(x, a)$.<br>(a) Prove that $|d(x, A) - d(y, A)| \\le d(x, y)$ for all $x, y \\in X$, and conclude that $x \\mapsto d(x, A)$ is uniformly continuous.<br>(b) Prove that $d(x, A) = 0$ if and only if $x \\in \\overline{A}$.<br>(c) Let $A, B$ be disjoint closed subsets of $X$. Construct an explicit continuous function $f: X \\to [0, 1]$ such that $f(x) = 0$ on $A$ and $f(x) = 1$ on $B$.",
  "tests": [
    "c.e1.1",
    "c.e1.3",
    "c.e1.5"
  ],
  "approach": "<p>Apply the triangle inequality $d(x, a) \\le d(x, y) + d(y, a)$ and take infima. For separation, construct the Urysohn quotient function using distance to sets.</p>",
  "solution": "<p><b>(a) Uniform Continuity:</b> For any $a \\in A$ and any $x, y \\in X$, the triangle inequality gives: $$d(x, a) \\le d(x, y) + d(y, a)$$ Taking the infimum over all $a \\in A$ on the right side: $$d(x, A) \\le d(x, y) + d(y, A) \\implies d(x, A) - d(y, A) \\le d(x, y)$$ Reversing the roles of $x$ and $y$ gives $d(y, A) - d(x, A) \\le d(x, y)$. Combining both yields: $$|d(x, A) - d(y, A)| \\le d(x, y)$$ This shows $x \\mapsto d(x, A)$ is Lipschitz continuous with Lipschitz constant $L = 1$, and hence uniformly continuous on $X$.</p><p><b>(b) Characterization of Closure:</b> By definition, $d(x, A) = 0 \\iff \\inf_{a \\in A} d(x, a) = 0 \\iff \\forall \\varepsilon > 0, \\exists a \\in A \\text{ with } d(x, a) < \\varepsilon \\iff \\forall \\varepsilon > 0, B(x, \\varepsilon) \\cap A \\ne \\emptyset \\iff x \\in \\overline{A}$.</p><p><b>(c) Urysohn Separation Function:</b> Since $A$ and $B$ are closed and disjoint, $A = \\overline{A}$ and $B = \\overline{B}$ with $A \\cap B = \\emptyset$. For any $x \\in X$, $d(x, A)$ and $d(x, B)$ cannot both be $0$, because that would imply $x \\in A \\cap B = \\emptyset$. Thus $d(x, A) + d(x, B) > 0$ for all $x \\in X$.</p><p>Define: $$f(x) = \\frac{d(x, A)}{d(x, A) + d(x, B)}$$ Since the denominator is strictly positive and both numerator and denominator are continuous, $f$ is continuous on $X$. Clearly $0 \\le f(x) \\le 1$. If $x \\in A$, $d(x, A) = 0$, so $f(x) = 0$. If $x \\in B$, $d(x, B) = 0$, so $f(x) = \\frac{d(x, A)}{d(x, A) + 0} = 1$.</p>",
  "trap": "The denominator $d(x, A) + d(x, B)$ is guaranteed to be non-zero everywhere ONLY because $A$ and $B$ are closed and disjoint."
},
{
  "id": "q.rae.e1.05",
  "course": "rae",
  "module": "rae.t1",
  "sec": "E1",
  "marks": 5,
  "title": "Characterizations of Continuity Between Metric Spaces",
  "source": "JAM MA 2021 / Rudin Ch. 4",
  "prompt": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces and $f: X \\to Y$ be a function. Prove the equivalence of the following three statements:<br>(1) $f$ is continuous (for every $x_0 \\in X$ and $\\varepsilon > 0$, there exists $\\delta > 0$ such that $d_X(x, x_0) < \\delta \\implies d_Y(f(x), f(x_0)) < \\varepsilon$).<br>(2) For every open set $V \\subseteq Y$, the pre-image $f^{-1}(V)$ is open in $X$.<br>(3) For every sequence $(x_n)$ in $X$ with $x_n \\to x$, $f(x_n) \\to f(x)$ in $Y$.",
  "tests": [
    "c.e1.2",
    "c.e1.4",
    "c.e1.5"
  ],
  "approach": "<p>Prove $(1) \\implies (2) \\implies (3) \\implies (1)$ systematically using balls and sequence definitions.</p>",
  "solution": "<p><b>(1) $\\implies$ (2):</b> Let $V \\subseteq Y$ be open. Take any $x \\in f^{-1}(V)$, so $f(x) \\in V$. Since $V$ is open, there exists $\\varepsilon > 0$ such that $B_Y(f(x), \\varepsilon) \\subseteq V$. By (1), there exists $\\delta > 0$ such that $f(B_X(x, \\delta)) \\subseteq B_Y(f(x), \\varepsilon) \\subseteq V$. This means $B_X(x, \\delta) \\subseteq f^{-1}(V)$, proving $f^{-1}(V)$ is open in $X$.</p><p><b>(2) $\\implies$ (3):</b> Suppose $x_n \\to x$ in $X$. Let $\\varepsilon > 0$. The ball $V = B_Y(f(x), \\varepsilon)$ is open in $Y$. By (2), $U = f^{-1}(V)$ is open in $X$ and contains $x$. Since $x_n \\to x$, there exists $N \\in \\mathbb{N}$ such that $x_n \\in U$ for all $n \\ge N$. This implies $f(x_n) \\in V = B_Y(f(x), \\varepsilon)$, meaning $d_Y(f(x_n), f(x)) < \\varepsilon$ for all $n \\ge N$. Thus $f(x_n) \\to f(x)$.</p><p><b>(3) $\\implies$ (1):</b> We prove the contrapositive. Suppose $f$ is not continuous at some $x_0 \\in X$. Then there exists $\\varepsilon_0 > 0$ such that for every $\\delta > 0$, there exists $x \\in X$ with $d_X(x, x_0) < \\delta$ but $d_Y(f(x), f(x_0)) \\ge \\varepsilon_0$. For each $n \\in \\mathbb{N}$, choose $\\delta = 1/n$ to pick a point $x_n$ satisfying $d_X(x_n, x_0) < 1/n$ and $d_Y(f(x_n), f(x_0)) \\ge \\varepsilon_0$. Then $x_n \\to x_0$, but $f(x_n) \\not\\to f(x_0)$, which contradicts (3). Hence (1) must hold.</p>",
  "trap": "Continuity means $f^{-1}(\\text{open})$ is open; it does NOT mean $f(\\text{open})$ is open (e.g. constant functions map open sets to singletons)."
},
{
  "id": "q.rae.e2.01",
  "course": "rae",
  "module": "rae.t2",
  "sec": "E2",
  "marks": 5,
  "title": "Banach Fixed-Point Application to Nonlinear Integral Equations",
  "source": "GATE MA 2022 / JAM MA",
  "prompt": "Consider the nonlinear integral operator $T: C[0, 1/4] \\to C[0, 1/4]$ defined by:<br>$$(Tf)(x) = \\frac{1}{2} + \\int_0^x (f(t))^2 \\, dt$$<br>Let $E = \\{f \\in C[0, 1/4] : \\|f\\|_\\infty \\le 1\\}$ equipped with the supremum metric $d_\\infty(f, g) = \\sup_{x \\in [0, 1/4]} |f(x) - g(x)|$.<br>(a) Prove that $E$ is a complete metric space.<br>(b) Prove that $T(E) \\subseteq E$.<br>(c) Prove that $T$ is a contraction on $E$ and deduce the existence of a unique solution $f^* \\in E$.",
  "tests": [
    "c.e2.1",
    "c.e2.2"
  ],
  "approach": "<p>Show $E$ is a closed ball in complete space $(C[0, 1/4], d_\\infty)$. Bound $|(Tf)(x)| \\le 1/2 + 1/4 = 3/4 \\le 1$ to prove invariance, and factor $f^2 - g^2$ to find the contraction constant $k < 1$.</p>",
  "solution": "<p><b>(a) Completeness of $E$:</b> The space $(C[0, 1/4], d_\\infty)$ is a complete metric space. The set $E = \\{f \\in C[0, 1/4] : d_\\infty(f, 0) \\le 1\\}$ is the closed unit ball $\\overline{B}_{d_\\infty}(0, 1)$. Because closed subsets of complete metric spaces are complete, $E$ equipped with $d_\\infty$ is a complete metric space.</p><p><b>(b) Invariance $T(E) \\subseteq E$:</b> Let $f \\in E$. Then $|f(t)| \\le 1$ for all $t \\in [0, 1/4]$. For any $x \\in [0, 1/4]$: $$|(Tf)(x)| = \\left| \\frac{1}{2} + \\int_0^x (f(t))^2 \\, dt \\right| \\le \\frac{1}{2} + \\int_0^x |f(t)|^2 \\, dt \\le \\frac{1}{2} + \\int_0^{1/4} 1^2 \\, dt = \\frac{1}{2} + \\frac{1}{4} = \\frac{3}{4} \\le 1$$ Taking the supremum over all $x \\in [0, 1/4]$ gives $\\|Tf\\|_\\infty \\le 3/4 \\le 1$. Hence $T(f) \\in E$, proving $T(E) \\subseteq E$.</p><p><b>(c) Contraction Mapping:</b> For any $f, g \\in E$ and $x \\in [0, 1/4]$: $$|(Tf)(x) - (Tg)(x)| = \\left| \\int_0^x (f(t)^2 - g(t)^2) \\, dt \\right| \\le \\int_0^x |f(t) - g(t)| \\cdot |f(t) + g(t)| \\, dt$$ Since $f, g \\in E$, $|f(t) + g(t)| \\le |f(t)| + |g(t)| \\le 1 + 1 = 2$. Therefore: $$|(Tf)(x) - (Tg)(x)| \\le 2 \\, d_\\infty(f, g) \\int_0^x 1 \\, dt = 2 x \\, d_\\infty(f, g) \\le 2\\left(\\frac{1}{4}\\right) d_\\infty(f, g) = \\frac{1}{2} d_\\infty(f, g)$$ Taking the supremum over $x \\in [0, 1/4]$ yields: $$d_\\infty(Tf, Tg) \\le \\frac{1}{2} d_\\infty(f, g)$$ Since $k = 1/2 < 1$, $T$ is a strict contraction on the complete metric space $E$. By the Banach Contraction Mapping Principle, $T$ has a unique fixed point $f^* \\in E$ satisfying $Tf^* = f^*$.</p>",
  "trap": "The nonlinear term $(f(t))^2$ is not globally Lipschitz on the entire space $C[0, 1/4]$, so the contraction argument requires restricting to a closed ball $E$."
},
{
  "id": "q.rae.e2.02",
  "course": "rae",
  "module": "rae.t2",
  "sec": "E2",
  "marks": 5,
  "title": "Incompleteness of C[0, 1] under the L\u00b9 Metric",
  "source": "GATE MA 2021 / Rudin Ch. 11",
  "prompt": "Let $X = C[0, 1]$ equipped with the $L^1$ integral metric $d_1(f, g) := \\int_0^1 |f(x) - g(x)| \\, dx$.<br>For $n \\ge 2$, define the sequence of functions: $$f_n(x) = \\begin{cases} 0 & \\text{if } 0 \\le x \\le 1/2 - 1/n \\\\ n(x - 1/2 + 1/n) & \\text{if } 1/2 - 1/n < x < 1/2 \\\\ 1 & \\text{if } 1/2 \\le x \\le 1 \\end{cases}$$<br>(a) Prove that $(f_n)$ is a Cauchy sequence in $(C[0, 1], d_1)$.<br>(b) Prove that $(f_n)$ does NOT converge to any function in $(C[0, 1], d_1)$, and conclude that $(C[0, 1], d_1)$ is incomplete.",
  "tests": [
    "c.e2.1",
    "c.e7.5"
  ],
  "approach": "<p>Compute $\\int_0^1 |f_n - f_m| dx$ to verify the Cauchy condition. Show that any $L^1$ limit must equal $0$ a.e. on $[0, 1/2)$ and $1$ a.e. on $(1/2, 1]$, making continuity impossible.</p>",
  "solution": "<p><b>(a) Cauchy Sequence:</b> Let $m > n \\ge 2$. Note that $f_n(x)$ and $f_m(x)$ are identical on $[0, 1/2 - 1/n]$ (both are $0$) and on $[1/2, 1]$ (both are $1$). They only differ on the transition interval $[1/2 - 1/n, 1/2]$, where $0 \\le f_n(x), f_m(x) \\le 1$. Therefore: $$d_1(f_n, f_m) = \\int_{1/2 - 1/n}^{1/2} |f_n(x) - f_m(x)| \\, dx \\le \\int_{1/2 - 1/n}^{1/2} 1 \\, dx = \\frac{1}{n}$$ Given $\\varepsilon > 0$, choose $N > 1/\\varepsilon$. For all $m > n \\ge N$, $d_1(f_n, f_m) \\le 1/n < \\varepsilon$. Thus $(f_n)$ is a Cauchy sequence in $(C[0, 1], d_1)$.</p><p><b>(b) Non-convergence in $C[0, 1]$:</b> Suppose there exists $g \\in C[0, 1]$ such that $d_1(f_n, g) \\to 0$.<br>For any fixed $c < 1/2$, for all $n > \\frac{1}{1/2 - c}$, $f_n(x) = 0$ on $[0, c]$. Then: $$\\int_0^c |g(x)| \\, dx = \\int_0^c |f_n(x) - g(x)| \\, dx \\le d_1(f_n, g) \\to 0$$ Since $g$ is continuous and $\\int_0^c |g(x)| dx = 0$, $g(x) = 0$ for all $x \\in [0, c]$. Since $c < 1/2$ was arbitrary, $g(x) = 0$ for all $x \\in [0, 1/2)$.</p><p>Similarly, for any $d > 1/2$, $f_n(x) = 1$ on $[d, 1]$ for all $n$, which implies $\\int_d^1 |1 - g(x)| dx \\le d_1(f_n, g) \\to 0$. By continuity of $g$, $g(x) = 1$ for all $x \\in (1/2, 1]$.</p><p>By continuity of $g$ at $x = 1/2$, we must have: $$g(1/2) = \\lim_{x \\to (1/2)^-} g(x) = 0 \\quad \\text{and} \\quad g(1/2) = \\lim_{x \\to (1/2)^+} g(x) = 1$$ This is a contradiction ($0 = 1$). Hence no continuous function $g$ can be the $L^1$ limit of $(f_n)$, proving $(C[0, 1], d_1)$ is not complete.</p>",
  "trap": "$C[0, 1]$ is complete under the supremum metric $d_\\infty$, but strictly INCOMPLETE under $L^p$ metrics for $1 \\le p < \\infty$; its completion is $L^p[0, 1]$."
},
{
  "id": "q.rae.e2.03",
  "course": "rae",
  "module": "rae.t2",
  "sec": "E2",
  "marks": 5,
  "title": "Cantor Intersection Theorem and Characterization of Completeness",
  "source": "GATE MA 2020 / Carothers Ch. 7",
  "prompt": "Let $(X, d)$ be a metric space. The diameter of a non-empty set $E \\subseteq X$ is $\\operatorname{diam}(E) := \\sup_{x, y \\in E} d(x, y)$.<br>(a) State the Cantor Intersection Theorem.<br>(b) Prove that $(X, d)$ is complete if and only if every nested sequence of non-empty closed sets $(F_n)$ with $\\lim_{n \\to \\infty} \\operatorname{diam}(F_n) = 0$ satisfies $\\bigcap_{n=1}^\\infty F_n = \\{x_0\\}$ for some $x_0 \\in X$.<br>(c) Provide a counterexample showing that the conclusion fails if the condition $\\operatorname{diam}(F_n) \\to 0$ is dropped.",
  "tests": [
    "c.e2.1"
  ],
  "approach": "<p>Construct a Cauchy sequence by picking $x_n \\in F_n$. For the converse, use closed balls $\\overline{B}(x_n, r_n)$. For the counterexample, consider unbounded closed intervals in $\\mathbb{R}$.</p>",
  "solution": "<p><b>(a) Cantor Intersection Theorem:</b> A metric space $(X, d)$ is complete if and only if for every sequence of non-empty closed subsets $F_1 \\supseteq F_2 \\supseteq F_3 \\supseteq \\cdots$ with $\\lim_{n \\to \\infty} \\operatorname{diam}(F_n) = 0$, the intersection $\\bigcap_{n=1}^\\infty F_n$ contains exactly one point.</p><p><b>(b) Proof of Equivalence:</b></p><p>($\\implies$) Assume $X$ is complete. Pick $x_n \\in F_n$ for each $n$. For $m \\ge n$, since $F_m \\subseteq F_n$, we have $x_m, x_n \\in F_n$. Hence $d(x_n, x_m) \\le \\operatorname{diam}(F_n)$. Since $\\operatorname{diam}(F_n) \\to 0$, $(x_n)$ is a Cauchy sequence. Completeness guarantees $x_n \\to x_0$ for some $x_0 \\in X$. For each fixed $k$, the tail sequence $(x_n)_{n \\ge k}$ lies in $F_k$. Since $F_k$ is closed, the limit $x_0 \\in F_k$. This holds for all $k$, so $x_0 \\in \\bigcap_{n=1}^\\infty F_n$. If $y \\in \\bigcap_{n=1}^\\infty F_n$, then $d(x_0, y) \\le \\operatorname{diam}(F_n) \\to 0$, so $y = x_0$.</p><p>($\\impliedby$) Conversely, let $(x_n)$ be a Cauchy sequence in $X$. For each $k \\in \\mathbb{N}$, choose $N_k$ such that $d(x_n, x_m) < 1/k$ for all $n, m \\ge N_k$, with $N_1 < N_2 < \\cdots$. Define $F_k = \\overline{\\{x_n : n \\ge N_k\\}}$. Then $F_k$ is closed, non-empty, nested ($F_{k+1} \\subseteq F_k$), and $\\operatorname{diam}(F_k) \\le 2/k \\to 0$. By hypothesis, $\\bigcap_{k=1}^\\infty F_k = \\{x_0\\}$. Then $x_n \\to x_0$, proving $X$ is complete.</p><p><b>(c) Counterexample when $\\operatorname{diam}(F_n) \\not\\to 0$:</b> In the complete metric space $\\mathbb{R}$, define $F_n = [n, \\infty)$. Each $F_n$ is closed, non-empty, and nested: $F_1 \\supset F_2 \\supset \\cdots$. However, $\\operatorname{diam}(F_n) = \\infty \\not\\to 0$, and $\\bigcap_{n=1}^\\infty [n, \\infty) = \\emptyset$.</p>",
  "trap": "The condition $\\operatorname{diam}(F_n) \\to 0$ is essential! Without it, nested closed sets in a complete space can have an empty intersection."
},
{
  "id": "q.rae.e2.04",
  "course": "rae",
  "module": "rae.t2",
  "sec": "E2",
  "marks": 5,
  "title": "Nowhere Dense Sets, Meager Sets, and the Rationals",
  "source": "GATE MA 2023 / Carothers Ch. 8",
  "prompt": "Let $(X, d)$ be a metric space. A subset $E \\subseteq X$ is <b>nowhere dense</b> if $(\\overline{E})^\\circ = \\emptyset$. A subset is <b>meager</b> (first category) if it is a countable union of nowhere dense sets.<br>(a) Prove that a singleton $\\{x\\}$ in $\\mathbb{R}$ is nowhere dense.<br>(b) Prove that the set of rational numbers $\\mathbb{Q}$ is meager in $\\mathbb{R}$, but its closure $\\overline{\\mathbb{Q}} = \\mathbb{R}$ is NOT meager in $\\mathbb{R}$.<br>(c) Prove that if $E$ is nowhere dense, then $X \\setminus \\overline{E}$ is dense and open.",
  "tests": [
    "c.e2.3",
    "c.e2.4"
  ],
  "approach": "<p>Calculate the interior of the closure for singletons. Use countable additivity of meager sets and apply the Baire Category Theorem to $\\mathbb{R}$.</p>",
  "solution": "<p><b>(a) Singletons are Nowhere Dense:</b> Let $x \\in \\mathbb{R}$. The singleton $\\{x\\}$ is closed, so $\\overline{\\{x\\}} = \\{x\\}$. The interior $(\\{x\\})^\\circ$ is the union of all open intervals contained in $\\{x\\}$. Since any non-empty open interval $(x - \\varepsilon, x + \\varepsilon)$ contains infinitely many points, no open interval is contained in $\\{x\\}$. Thus $(\\overline{\\{x\\}})^\\circ = \\emptyset$, proving $\\{x\\}$ is nowhere dense.</p><p><b>(b) $\\mathbb{Q}$ is Meager but $\\mathbb{R}$ is Not:</b></p><p>1. The rational numbers $\\mathbb{Q}$ are countable, so we can enumerate them as $\\mathbb{Q} = \\{q_1, q_2, q_3, \\dots\\} = \\bigcup_{n=1}^\\infty \\{q_n\\}$. Each singleton $\\{q_n\\}$ is nowhere dense by part (a). Hence $\\mathbb{Q}$ is a countable union of nowhere dense sets, which means $\\mathbb{Q}$ is meager (first category) in $\\mathbb{R}$.</p><p>2. The closure is $\\overline{\\mathbb{Q}} = \\mathbb{R}$. Since $(\\mathbb{R}, |\\cdot|)$ is a complete metric space, the Baire Category Theorem states that $\\mathbb{R}$ cannot be written as a countable union of nowhere dense sets. Thus $\\mathbb{R}$ is non-meager (second category).</p><p><b>(c) Complement of Nowhere Dense:</b> Let $U = X \\setminus \\overline{E}$. Since $\\overline{E}$ is closed, $U$ is open. To show $U$ is dense, we must show $\\overline{U} = X$, or equivalently that every non-empty open set $W$ intersects $U$. If $W \\cap U = \\emptyset$, then $W \\subseteq \\overline{E}$. But $W$ is a non-empty open set contained in $\\overline{E}$, which implies $W \\subseteq (\\overline{E})^\\circ$. This contradicts $(\\overline{E})^\\circ = \\emptyset$. Thus $W \\cap U \\ne \\emptyset$, proving $U$ is dense.</p>",
  "trap": "A set can be dense (like $\\mathbb{Q}$) and yet meager (topologically negligible); density does not imply topological bulk."
},
{
  "id": "q.rae.e2.05",
  "course": "rae",
  "module": "rae.t2",
  "sec": "E2",
  "marks": 5,
  "title": "Baire Category Theorem: Non-Existence of a Function Continuous Only on \u211a",
  "source": "GATE MA 2022 / Rudin Ch. 2 & 8",
  "prompt": "A subset of a metric space is called a $G_\\delta$ set if it is a countable intersection of open sets.<br>(a) Prove that for any function $f: \\mathbb{R} \\to \\mathbb{R}$, the set of continuity points $C(f)$ is a $G_\\delta$ set.<br>(b) Use the Baire Category Theorem to prove that there is NO function $f: \\mathbb{R} \\to \\mathbb{R}$ that is continuous on $\\mathbb{Q}$ and discontinuous on $\\mathbb{R} \\setminus \\mathbb{Q}$.",
  "tests": [
    "c.e2.3",
    "c.e2.4"
  ],
  "approach": "<p>Define the oscillation $\\omega_f(x)$ or sets $U_n = \\{x : \\omega_f(x) < 1/n\\}$ to represent $C(f) = \\bigcap U_n$. Then use BCT to show $\\mathbb{Q}$ cannot be a $G_\\delta$ set in $\\mathbb{R}$.</p>",
  "solution": "<p><b>(a) Continuity Points form a $G_\\delta$ set:</b> For any function $f: \\mathbb{R} \\to \\mathbb{R}$, define the oscillation of $f$ at $x$ by $\\omega_f(x) := \\inf_{\\delta > 0} \\operatorname{diam}(f(B(x, \\delta)))$. It is a standard result that $f$ is continuous at $x$ if and only if $\\omega_f(x) = 0$.</p><p>For each $n \\in \\mathbb{N}$, define $U_n := \\{x \\in \\mathbb{R} : \\omega_f(x) < 1/n\\}$. Each $U_n$ is an open set. To see this, if $x \\in U_n$, there is $\\delta > 0$ such that $\\operatorname{diam}(f(B(x, \\delta))) < 1/n$. For any $y \\in B(x, \\delta)$, choose $r = \\delta - |x - y| > 0$. Then $B(y, r) \\subseteq B(x, \\delta)$, so $\\omega_f(y) \\le \\operatorname{diam}(f(B(y, r))) \\le \\operatorname{diam}(f(B(x, \\delta))) < 1/n$, meaning $B(x, \\delta) \\subseteq U_n$.</p><p>Therefore: $$C(f) = \\{x \\in \\mathbb{R} : \\omega_f(x) = 0\\} = \\bigcap_{n=1}^\\infty U_n$$ Since each $U_n$ is open, $C(f)$ is a countable intersection of open sets, i.e., a $G_\\delta$ set.</p><p><b>(b) $\\mathbb{Q}$ Cannot be the Continuity Set:</b> Suppose there exists $f: \\mathbb{R} \\to \\mathbb{R}$ with $C(f) = \\mathbb{Q}$. By part (a), $\\mathbb{Q} = \\bigcap_{n=1}^\\infty U_n$, where each $U_n$ is open in $\\mathbb{R}$.</p><p>Since $\\mathbb{Q} \\subseteq U_n$ and $\\mathbb{Q}$ is dense in $\\mathbb{R}$, each $U_n$ is dense and open in $\\mathbb{R}$.</p><p>Let $\\mathbb{Q} = \\{q_1, q_2, q_3, \\dots\\}$. Then: $$\\emptyset = \\mathbb{Q} \\setminus \\mathbb{Q} = \\left( \\bigcap_{n=1}^\\infty U_n \\right) \\setminus \\left( \\bigcup_{k=1}^\\infty \\{q_k\\} \\right) = \\left( \\bigcap_{n=1}^\\infty U_n \\right) \\cap \\left( \\bigcap_{k=1}^\\infty (\\mathbb{R} \\setminus \\{q_k\\}) \\right)$$</p><p>This expresses the empty set as a countable intersection of dense open sets in $\\mathbb{R}$: each $U_n$ is dense open, and each $\\mathbb{R} \\setminus \\{q_k\\}$ is dense open. By the Baire Category Theorem, a countable intersection of dense open sets in a complete metric space must be dense, and in particular cannot be empty! This contradiction proves that no such function exists.</p>",
  "trap": "Thomae's (popcorn) function is continuous on $\\mathbb{R} \\setminus \\mathbb{Q}$ and discontinuous on $\\mathbb{Q}$ because the irrationals CAN be a $G_\\delta$ set, but the rationals $\\mathbb{Q}$ cannot!"
},
{
  "id": "q.rae.e3.01",
  "course": "rae",
  "module": "rae.t3",
  "sec": "E3",
  "marks": 5,
  "title": "Failure of Heine\u2013Borel in Infinite Dimensions",
  "source": "GATE MA 2023 / Rudin Ch. 2",
  "prompt": "Consider the Hilbert sequence space $\\ell^2 = \\left\\{ (x_n)_{n=1}^\\infty : \\sum_{n=1}^\\infty x_n^2 < \\infty \\right\\}$ equipped with the metric $d(x, y) = \\left( \\sum_{n=1}^\\infty (x_n - y_n)^2 \\right)^{1/2}$.<br>Let $e_k = (0, \\dots, 0, 1, 0, \\dots)$ be the $k$-th canonical basis vector and define $S = \\{e_k : k \\in \\mathbb{N}\\}$.<br>(a) Prove that $S$ is bounded and closed in $\\ell^2$.<br>(b) Prove that $S$ is NOT compact.<br>(c) State Riesz's Lemma characterizing compactness of the closed unit ball in normed spaces.",
  "tests": [
    "c.e3.1",
    "c.e3.2"
  ],
  "approach": "<p>Compute $d(e_j, e_k) = \\sqrt{2}$ for $j \\ne k$. Show that no subsequence can converge, and recall F. Riesz's theorem on finite dimensionality.</p>",
  "solution": "<p><b>(a) Bounded and Closed:</b></p><p>1. Bounded: For every $k \\in \\mathbb{N}$, $d(e_k, 0) = \\|e_k\\|_2 = \\sqrt{1^2} = 1$. Hence $S \\subseteq B(0, 2)$, so $S$ is bounded.</p><p>2. Closed: For any $j \\ne k$: $$d(e_j, e_k) = \\sqrt{(1 - 0)^2 + (0 - 1)^2} = \\sqrt{2}$$ Every pair of distinct points in $S$ is separated by distance $\\sqrt{2}$. The open ball $B(e_k, 1)$ contains only $e_k$, so every point of $S$ is an isolated point. Thus $S$ has no limit points, which implies $S' = \\emptyset \\subseteq S$. Therefore $S$ is closed.</p><p><b>(b) Not Compact:</b> Consider the sequence $(e_k)_{k=1}^\\infty$ in $S$. For any subsequence $(e_{k_m})$ and any $m \\ne p$: $$d(e_{k_m}, e_{k_p}) = \\sqrt{2}$$ Hence no subsequence can ever be a Cauchy sequence, so no subsequence can converge. By the sequential characterization of compactness, $S$ is not compact.</p><p>Alternatively, the open cover $\\mathcal{U} = \\{ B(e_k, 1) : k \\in \\mathbb{N} \\}$ covers $S$, but each open ball contains exactly one point $e_k$. Removing even a single ball leaves that point uncovered, so no finite subcover exists.</p><p><b>(c) F. Riesz's Theorem:</b> In any normed linear space $X$, the closed unit ball $\\overline{B}(0, 1) = \\{x \\in X : \\|x\\| \\le 1\\}$ is compact if and only if $X$ is finite-dimensional.</p>",
  "trap": "The Heine-Borel Theorem (closed + bounded = compact) holds strictly in finite-dimensional Euclidean spaces $\\mathbb{R}^n$, but fails completely in infinite-dimensional spaces."
},
{
  "id": "q.rae.e3.02",
  "course": "rae",
  "module": "rae.t3",
  "sec": "E3",
  "marks": 5,
  "title": "Lebesgue's Covering Lemma and Uniform Continuity",
  "source": "JAM MA 2020 / Rudin Ch. 2 & 4",
  "prompt": "Let $(X, d)$ be a compact metric space.<br>(a) State and prove the <b>Lebesgue Covering Lemma</b>: for any open cover $\\mathcal{U}$ of $X$, there exists a number $\\delta > 0$ (the Lebesgue number) such that every subset of $X$ with diameter less than $\\delta$ is contained in some member of $\\mathcal{U}$.<br>(b) Use the Lebesgue Covering Lemma to prove that if $f: X \\to Y$ is a continuous mapping from a compact metric space $X$ into a metric space $(Y, \\rho)$, then $f$ is uniformly continuous.",
  "tests": [
    "c.e3.1",
    "c.e3.2",
    "c.e3.3"
  ],
  "approach": "<p>Proof by contradiction for the Lebesgue number: assume for each $1/n$ there is a set not in any cover element, extract a convergent subsequence. Then pull back $\\varepsilon$-balls from $Y$ to apply the lemma.</p>",
  "solution": "<p><b>(a) Lebesgue Covering Lemma:</b></p><p>Suppose for contradiction that no such $\\delta > 0$ exists. Then for each $n \\in \\mathbb{N}$, there exists a set $S_n \\subseteq X$ with $\\operatorname{diam}(S_n) < 1/n$ such that $S_n$ is not contained in any single element of $\\mathcal{U}$.</p><p>Pick $x_n \\in S_n$. Since $X$ is compact, $(x_n)$ has a subsequence $(x_{n_k})$ converging to some point $x_0 \\in X$.</p><p>Since $\\mathcal{U}$ covers $X$, there exists an open set $U \\in \\mathcal{U}$ with $x_0 \\in U$. Since $U$ is open, there is $r > 0$ with $B(x_0, r) \\subseteq U$.</p><p>Choose $k$ sufficiently large so that $d(x_{n_k}, x_0) < r/2$ and $1/n_k < r/2$. For any $y \\in S_{n_k}$: $$d(y, x_0) \\le d(y, x_{n_k}) + d(x_{n_k}, x_0) < \\operatorname{diam}(S_{n_k}) + \\frac{r}{2} < \\frac{r}{2} + \\frac{r}{2} = r$$ Thus $S_{n_k} \\subseteq B(x_0, r) \\subseteq U$. This contradicts the assumption that $S_{n_k}$ is not contained in any element of $\\mathcal{U}$. Hence a Lebesgue number $\\delta > 0$ exists.</p><p><b>(b) Uniform Continuity:</b> Let $\\varepsilon > 0$. For each $x \\in X$, the ball $B_Y(f(x), \\varepsilon/2)$ is open in $Y$. By continuity of $f$, $U_x = f^{-1}(B_Y(f(x), \\varepsilon/2))$ is open in $X$.</p><p>The family $\\mathcal{U} = \\{U_x : x \\in X\\}$ forms an open cover of $X$. Since $X$ is compact, by part (a) there exists a Lebesgue number $\\delta > 0$ for $\\mathcal{U}$.</p><p>Now take any $p, q \\in X$ with $d(p, q) < \\delta$. The two-point set $S = \\{p, q\\}$ has diameter $d(p, q) < \\delta$. By the Lebesgue Covering Lemma, $S \\subseteq U_{x_0}$ for some $x_0 \\in X$.</p><p>This means $f(p) \\in B_Y(f(x_0), \\varepsilon/2)$ and $f(q) \\in B_Y(f(x_0), \\varepsilon/2)$. By the triangle inequality in $Y$: $$\\rho(f(p), f(q)) \\le \\rho(f(p), f(x_0)) + \\rho(f(x_0), f(q)) < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon$$ Since $\\delta$ depends only on $\\varepsilon$, $f$ is uniformly continuous on $X$.</p>",
  "trap": "Compactness of the domain $X$ is required; continuity on non-compact domains (like $f(x) = 1/x$ on $(0, 1)$) does not imply uniform continuity."
},
{
  "id": "q.rae.e3.03",
  "course": "rae",
  "module": "rae.t3",
  "sec": "E3",
  "marks": 5,
  "title": "Continuous Bijections from Compact Spaces are Homeomorphisms",
  "source": "GATE MA 2021 / Munkres Ch. 3",
  "prompt": "Let $(X, d_X)$ and $(Y, d_Y)$ be metric spaces, and let $f: X \\to Y$ be a continuous bijection.<br>(a) Prove that if $X$ is compact, then $f$ is a homeomorphism (i.e., $f^{-1}: Y \\to X$ is continuous).<br>(b) Give an explicit counterexample of a continuous bijection $f: X \\to Y$ that is NOT a homeomorphism when $X$ is not compact.",
  "tests": [
    "c.e3.1",
    "c.e3.3"
  ],
  "approach": "<p>Show that $f$ maps closed sets to closed sets because closed subsets of compact spaces are compact and continuous images of compact sets are compact. For the counterexample, consider wrapping $[0, 2\\pi)$ onto the unit circle $S^1$.</p>",
  "solution": "<p><b>(a) Proof:</b> A bijection $f$ is a homeomorphism if and only if $f$ is a closed map (maps closed sets to closed sets), which is equivalent to $f^{-1}$ being continuous.</p><p>Let $F \\subseteq X$ be any closed set in $X$. Since $X$ is compact, every closed subset of a compact space is compact, so $F$ is compact.</p><p>Since $f$ is continuous, the image of any compact set under $f$ is compact in $Y$. Therefore $f(F)$ is compact in $Y$.</p><p>In any metric space, every compact set is closed. Hence $f(F)$ is closed in $Y$.</p><p>Because $f$ is bijective, for any closed set $F \\subseteq X$, $(f^{-1})^{-1}(F) = f(F)$ is closed in $Y$. This proves that $f^{-1}$ is continuous, so $f$ is a homeomorphism.</p><p><b>(b) Counterexample:</b> Let $X = [0, 2\\pi)$ with the standard Euclidean metric, and $Y = S^1 = \\{ (\\cos t, \\sin t) : t \\in [0, 2\\pi) \\} \\subset \\mathbb{R}^2$.</p><p>Define $f: [0, 2\\pi) \\to S^1$ by $f(t) = (\\cos t, \\sin t)$.</p><p>1. $f$ is continuous because its component functions $\\cos t$ and $\\sin t$ are continuous.</p><p>2. $f$ is a bijection: every point on the circle corresponds to a unique angle $t \\in [0, 2\\pi)$.</p><p>3. However, $f^{-1}$ is NOT continuous at $(1, 0) = f(0)$. Consider the sequence of points $p_n = f(2\\pi - 1/n) = (\\cos(2\\pi - 1/n), \\sin(2\\pi - 1/n))$. As $n \\to \\infty$, $p_n \\to (1, 0) = f(0)$ in $S^1$. But $f^{-1}(p_n) = 2\\pi - 1/n \\to 2\\pi$, whereas $f^{-1}(f(0)) = 0 \\ne 2\\pi$.</p><p>Thus $f^{-1}$ is discontinuous at $(1, 0)$, so $f$ is not a homeomorphism.</p>",
  "trap": "Notice that $[0, 2\\pi)$ is not compact (it is missing $2\\pi$). The compactness of the domain $X$ is what prevents the space from 'tearing' open."
},
{
  "id": "q.rae.e3.04",
  "course": "rae",
  "module": "rae.t3",
  "sec": "E3",
  "marks": 5,
  "title": "Connected Subsets of \u211d and the Intermediate Value Theorem",
  "source": "JAM MA 2022 / Rudin Ch. 2 & 4",
  "prompt": "Let $(X, d)$ be a metric space.<br>(a) Define what it means for a subset $E \\subseteq X$ to be connected.<br>(b) Prove that a subset $E \\subseteq \\mathbb{R}$ is connected if and only if $E$ is an interval (i.e., if $x, y \\in E$ with $x < z < y$, then $z \\in E$).<br>(c) Prove the <b>Intermediate Value Theorem</b>: if $f: X \\to \\mathbb{R}$ is continuous and $X$ is connected, then $f(X)$ is an interval.",
  "tests": [
    "c.e3.4"
  ],
  "approach": "<p>For (b), if $z \\notin E$, partition $E$ into $E \\cap (-\\infty, z)$ and $E \\cap (z, \\infty)$. For (c), show the continuous image of a connected space is connected.</p>",
  "solution": "<p><b>(a) Definition of Connectedness:</b> A metric space $E$ is <b>connected</b> if it cannot be written as the union of two disjoint non-empty open subsets of $E$. Equivalently, the only subsets of $E$ that are both open and closed in the subspace topology are $\\emptyset$ and $E$.</p><p><b>(b) Connected Subsets of $\\mathbb{R}$ are Intervals:</b></p><p>($\\implies$) Suppose $E$ is connected. Let $x, y \\in E$ with $x < y$, and suppose for contradiction there is $z$ with $x < z < y$ such that $z \\notin E$. Define $A = E \\cap (-\\infty, z)$ and $B = E \\cap (z, \\infty)$. Both $(-\\infty, z)$ and $(z, \\infty)$ are open in $\\mathbb{R}$, so $A$ and $B$ are open in the subspace topology of $E$. Furthermore: $x \\in A \\implies A \\ne \\emptyset$, and $y \\in B \\implies B \\ne \\emptyset$. Since $z \\notin E$, $A \\cup B = E$, and clearly $A \\cap B = \\emptyset$. This splits $E$ into two non-empty disjoint open sets, contradicting connectedness of $E$. Hence $z \\in E$, so $E$ is an interval.</p><p>($\\impliedby$) Suppose $E$ is an interval. Assume for contradiction that $E = A \\cup B$ where $A, B$ are disjoint, non-empty, and closed in $E$. Pick $a \\in A$ and $b \\in B$, and assume without loss of generality $a < b$. Since $E$ is an interval, $[a, b] \\subseteq E$. Let $s = \\sup(A \\cap [a, b])$. Since $A$ is closed in $E$, $s \\in A$. If $s < b$, then $(s, b] \\subseteq B$, so $s$ is also a limit point of $B$. Since $B$ is closed, $s \\in B$, contradicting $A \\cap B = \\emptyset$. If $s = b$, then $b \\in A$, contradicting $A \\cap B = \\emptyset$. Hence $E$ is connected.</p><p><b>(c) Intermediate Value Theorem:</b> Suppose $f: X \\to \\mathbb{R}$ is continuous and $X$ is connected. We claim $f(X)$ is connected in $\\mathbb{R}$.</p><p>If $f(X) = U \\cup V$ where $U, V$ are disjoint non-empty open sets in $f(X)$, then $f^{-1}(U)$ and $f^{-1}(V)$ are disjoint, non-empty open sets in $X$ whose union is $X$. This contradicts the connectedness of $X$. Thus $f(X)$ is connected in $\\mathbb{R}$. By part (b), connected subsets of $\\mathbb{R}$ are intervals, so $f(X)$ is an interval.</p>",
  "trap": "Connectedness of $E$ does not require $E$ to be closed or open; $[a, b]$, $(a, b)$, and $[a, b)$ are all connected in $\\mathbb{R}$."
},
{
  "id": "q.rae.e3.05",
  "course": "rae",
  "module": "rae.t3",
  "sec": "E3",
  "marks": 5,
  "title": "Path-Connectedness vs Connectedness: The Topologist's Sine Curve",
  "source": "GATE MA 2020 / Munkres Ch. 3",
  "prompt": "Consider the topologist's sine curve in $\\mathbb{R}^2$ defined by: $$S = \\left\\{ (x, \\sin(1/x)) : 0 < x \\le 1 \\right\\}, \\quad \\overline{S} = S \\cup (\\{0\\} \\times [-1, 1])$$<br>(a) Prove that $S$ is path-connected and deduce that $\\overline{S}$ is connected.<br>(b) Prove that $\\overline{S}$ is NOT path-connected.",
  "tests": [
    "c.e3.4",
    "c.e3.5"
  ],
  "approach": "<p>Use the continuous curve $t \\mapsto (t, \\sin(1/t))$ to show path-connectedness of $S$, use the theorem that the closure of a connected set is connected, and show that no continuous path can enter the vertical segment from $S$.</p>",
  "solution": "<p><b>(a) $S$ is Path-Connected and $\\overline{S}$ is Connected:</b></p><p>The function $g: (0, 1] \\to \\mathbb{R}^2$ given by $g(t) = (t, \\sin(1/t))$ is continuous. The set $S = g((0, 1])$ is the continuous image of the interval $(0, 1]$. Since $(0, 1]$ is path-connected and the continuous image of a path-connected space is path-connected, $S$ is path-connected.</p><p>Every path-connected set is connected, so $S$ is connected. A standard topological theorem states that if $S$ is connected and $S \\subseteq E \\subseteq \\overline{S}$, then $E$ is connected. Taking $E = \\overline{S}$, we conclude that $\\overline{S}$ is connected.</p><p><b>(b) $\\overline{S}$ is NOT Path-Connected:</b></p><p>Suppose for contradiction that there exists a continuous path $\\gamma: [0, 1] \\to \\overline{S}$ such that $\\gamma(0) = (0, 0)$ and $\\gamma(1) = (1, \\sin 1) \\in S$.</p><p>Write $\\gamma(t) = (x(t), y(t))$. Since $\\gamma$ is continuous, $x: [0, 1] \\to [0, 1]$ is a continuous real-valued function with $x(0) = 0$ and $x(1) = 1$.</p><p>Let $t_0 = \\sup \\{ t \\in [0, 1] : x(t) = 0 \\}$. By continuity of $x$, $x(t_0) = 0$. Since $x(1) = 1$, we must have $t_0 < 1$. For all $t \\in (t_0, 1]$, $x(t) > 0$, so $\\gamma(t) = (x(t), \\sin(1/x(t)))$.</p><p>Since $x(t) \\to 0$ as $t \\to t_0^+$, by the Intermediate Value Theorem $x(t)$ takes all values in $(0, x(t_1))$ as $t \\to t_0^+$. Thus $1/x(t) \\to \\infty$.</p><p>In every interval $(t_0, t_0 + \\delta)$, $1/x(t)$ crosses infinitely many points where $\\sin(1/x(t)) = 1$ and points where $\\sin(1/x(t)) = -1$.</p><p>Therefore, there exist sequences $u_n \\to t_0^+$ with $y(u_n) = 1$ and $v_n \\to t_0^+$ with $y(v_n) = -1$. By continuity of $\\gamma$, $y(t_0) = \\lim y(u_n) = 1$ and $y(t_0) = \\lim y(v_n) = -1$, yielding $1 = -1$, a contradiction. Thus no continuous path can connect $(0, 0)$ to $S$, so $\\overline{S}$ is not path-connected.</p>",
  "trap": "Path-connectedness implies connectedness, but the converse is FALSE; the closure of the topologist's sine curve is the classic counterexample."
},
{
  "id": "q.rae.e4.01",
  "course": "rae",
  "module": "rae.t4",
  "sec": "E4",
  "marks": 5,
  "title": "Arzel\u00e0\u2013Ascoli Theorem Verification and Failure Modes",
  "source": "GATE MA 2020 / Carothers Ch. 10",
  "prompt": "Let $\\mathcal{F} = \\{ f_n(x) = \\sin(nx) : n \\in \\mathbb{N} \\}$ on $[0, \\pi]$.<br>(a) Show that $\\mathcal{F}$ is uniformly bounded on $[0, \\pi]$.<br>(b) Prove that $\\mathcal{F}$ is NOT equicontinuous on $[0, \\pi]$.<br>(c) Explain why no subsequence of $(f_n)$ can converge uniformly on $[0, \\pi]$.",
  "tests": [
    "c.e4.1",
    "c.e4.2",
    "c.e4.3"
  ],
  "approach": "<p>Bound $|\\sin nx| \\le 1$ for uniform boundedness. To disprove equicontinuity, evaluate $f_n$ at $x_n = \\pi/(2n)$ and $y_n = 0$. Apply Arzel\u00e0\u2013Ascoli.</p>",
  "solution": "<p><b>(a) Uniform Boundedness:</b> For every $n \\in \\mathbb{N}$ and every $x \\in [0, \\pi]$: $$|f_n(x)| = |\\sin(nx)| \\le 1$$ Hence $\\sup_{n \\in \\mathbb{N}} \\sup_{x \\in [0, \\pi]} |f_n(x)| \\le 1 < \\infty$, so $\\mathcal{F}$ is uniformly bounded with $M = 1$.</p><p><b>(b) Failure of Equicontinuity:</b> A family $\\mathcal{F}$ is equicontinuous at $0$ if: $$\\forall \\varepsilon > 0, \\; \\exists \\delta > 0 : \\forall n \\in \\mathbb{N}, \\; |x - 0| < \\delta \\implies |f_n(x) - f_n(0)| < \\varepsilon$$ Set $\\varepsilon = 1/2$. Let $\\delta > 0$ be arbitrary. Choose an integer $n \\in \\mathbb{N}$ such that $n > \\frac{\\pi}{2\\delta}$. Define $x_n = \\frac{\\pi}{2n}$. Then: $$|x_n - 0| = \\frac{\\pi}{2n} < \\delta$$ However: $$|f_n(x_n) - f_n(0)| = \\left|\\sin\\left(n \\cdot \\frac{\\pi}{2n}\\right) - \\sin(0)\\right| = |\\sin(\\pi/2) - 0| = 1 \\not< \\frac{1}{2}$$ Since this holds for every $\\delta > 0$, no $\\delta$ can work for all $n$ simultaneously. Hence $\\mathcal{F}$ is not equicontinuous at $0$.</p><p><b>(c) No Uniformly Convergent Subsequence:</b> By the Arzel\u00e0\u2013Ascoli Theorem, a subset of $C[0, \\pi]$ is relatively compact (every sequence has a uniformly convergent subsequence) if and only if it is uniformly bounded and equicontinuous. Since $\\mathcal{F}$ fails to be equicontinuous, $(f_n)$ cannot have any uniformly convergent subsequence.</p><p>Furthermore, if $f_{n_k} \\to f$ uniformly, then $\\int_0^\\pi \\sin^2(n_k x) dx \\to \\int_0^\\pi (f(x))^2 dx$. But by the Riemann-Lebesgue Lemma, $\\sin(n_k x) \\to 0$ weakly in $L^2$, which implies that the only possible pointwise limit is $f(x) = 0$, giving $\\int_0^\\pi 0 dx = 0$. However, $\\int_0^\\pi \\sin^2(n_k x) dx = \\pi/2 \\ne 0$, confirming that uniform convergence is impossible.</p>",
  "trap": "Pointwise convergence or boundedness does NOT imply equicontinuity; the oscillation frequency $n$ causes derivatives to grow as $n \\cos(nx)$, destroying equicontinuity."
},
{
  "id": "q.rae.e4.02",
  "course": "rae",
  "module": "rae.t4",
  "sec": "E4",
  "marks": 5,
  "title": "Equicontinuity via Uniform Lipschitz Bounds",
  "source": "GATE MA 2022 / Royden Ch. 9",
  "prompt": "Let $K \\subset \\mathbb{R}$ be a compact interval and let $\\mathcal{F} \\subseteq C^1(K)$ be a family of continuously differentiable functions.<br>(a) Prove that if there exists a constant $M > 0$ such that $|f'(x)| \\le M$ for all $f \\in \\mathcal{F}$ and all $x \\in K$, then $\\mathcal{F}$ is equicontinuous on $K$.<br>(b) Suppose in addition that there is a point $x_0 \\in K$ and a constant $C > 0$ such that $|f(x_0)| \\le C$ for all $f \\in \\mathcal{F}$. Prove that $\\mathcal{F}$ is relatively compact in $(C(K), \\|\\cdot\\|_\\infty)$.",
  "tests": [
    "c.e4.1",
    "c.e4.2",
    "c.e4.3"
  ],
  "approach": "<p>Apply the Mean Value Theorem to obtain a uniform Lipschitz constant $M$. Then use $|f(x)| \\le |f(x_0)| + M|x - x_0|$ for uniform boundedness and invoke Arzel\u00e0\u2013Ascoli.</p>",
  "solution": "<p><b>(a) Equicontinuity:</b> Let $f \\in \\mathcal{F}$ and $x, y \\in K$. By the Mean Value Theorem, there exists $c$ strictly between $x$ and y such that: $$f(x) - f(y) = f'(c)(x - y)$$ Since $|f'(c)| \\le M$ for all $f \\in \\mathcal{F}$, we have: $$|f(x) - f(y)| = |f'(c)| |x - y| \\le M |x - y|$$ Thus all functions in $\\mathcal{F}$ are Lipschitz continuous with the SAME Lipschitz constant $M$.</p><p>Given $\\varepsilon > 0$, choose $\\delta = \\varepsilon / M$. Then for all $x, y \\in K$ with $|x - y| < \\delta$ and for ALL $f \\in \\mathcal{F}$: $$|f(x) - f(y)| \\le M |x - y| < M \\left(\\frac{\\varepsilon}{M}\\right) = \\varepsilon$$ Since $\\delta$ depends only on $\\varepsilon$ and not on $f$ or the points $x, y$, $\\mathcal{F}$ is equicontinuous on $K$.</p><p><b>(b) Relative Compactness via Arzel\u00e0\u2013Ascoli:</b> We show uniform boundedness. For any $f \\in \\mathcal{F}$ and any $x \\in K$: $$|f(x)| = |f(x) - f(x_0) + f(x_0)| \\le |f(x_0)| + |f(x) - f(x_0)| \\le C + M |x - x_0|$$ Since $K$ is compact, $\\operatorname{diam}(K) = \\sup_{x, y \\in K} |x - y| < \\infty$. Therefore: $$|f(x)| \\le C + M \\operatorname{diam}(K) =: M_0 < \\infty$$ for all $x \\in K$ and all $f \\in \\mathcal{F}$. Thus $\\mathcal{F}$ is uniformly bounded.</p><p>Since $K$ is compact and $\\mathcal{F}$ is both uniformly bounded and equicontinuous, the Arzel\u00e0\u2013Ascoli Theorem implies that the closure $\\overline{\\mathcal{F}}$ is compact in $(C(K), \\|\\cdot\\|_\\infty)$, meaning $\\mathcal{F}$ is relatively compact.</p>",
  "trap": "A bound on the derivative $|f'(x)| \\le M$ alone does not bound the functions themselves (e.g. $f_n(x) = n$ has $f_n'(x) = 0$, but $|f_n(x)| \\to \\infty$); a bound at one anchor point $x_0$ is essential."
},
{
  "id": "q.rae.e4.03",
  "course": "rae",
  "module": "rae.t4",
  "sec": "E4",
  "marks": 5,
  "title": "Compact Integral Operators and Arzel\u00e0\u2013Ascoli",
  "source": "GATE MA 2021 / Rudin Ch. 11",
  "prompt": "Let $k: [0, 1] \\times [0, 1] \\to \\mathbb{R}$ be continuous. Define the Fredholm integral operator $T: C[0, 1] \\to C[0, 1]$ by: $$(Tf)(x) = \\int_0^1 k(x, y) f(y) \\, dy$$<br>Let $B = \\{f \\in C[0, 1] : \\|f\\|_\\infty \\le 1\\}$ be the closed unit ball.<br>(a) Prove that $T(B)$ is uniformly bounded.<br>(b) Prove that $T(B)$ is equicontinuous.<br>(c) Conclude that $T$ is a compact operator (i.e., $\\overline{T(B)}$ is compact).",
  "tests": [
    "c.e4.1",
    "c.e4.2",
    "c.e4.3"
  ],
  "approach": "<p>Since $[0, 1]^2$ is compact, $k$ is bounded and uniformly continuous. Use this uniform continuity to show equicontinuity of $T(B)$.</p>",
  "solution": "<p><b>(a) Uniform Boundedness:</b> The kernel $k$ is continuous on the compact set $[0, 1] \\times [0, 1]$, so by the Extreme Value Theorem there exists $M > 0$ such that $|k(x, y)| \\le M$ for all $(x, y) \\in [0, 1]^2$.</p><p>For any $f \\in B$ and $x \\in [0, 1]$: $$|(Tf)(x)| = \\left| \\int_0^1 k(x, y) f(y) \\, dy \\right| \\le \\int_0^1 |k(x, y)| |f(y)| \\, dy \\le M \\|f\\|_\\infty \\int_0^1 1 \\, dy \\le M \\cdot 1 = M$$ Taking the supremum over all $x \\in [0, 1]$ and all $f \\in B$ gives $\\|Tf\\|_\\infty \\le M$. Thus $T(B)$ is uniformly bounded.</p><p><b>(b) Equicontinuity:</b> Since $[0, 1]^2$ is compact, $k$ is uniformly continuous on $[0, 1]^2$. Therefore, for any $\\varepsilon > 0$, there exists $\\delta > 0$ such that: $$|x_1 - x_2| < \\delta \\implies |k(x_1, y) - k(x_2, y)| < \\varepsilon \\quad \\text{for all } y \\in [0, 1]$$ Now let $f \\in B$ and let $x_1, x_2 \\in [0, 1]$ with $|x_1 - x_2| < \\delta$. Then: $$|(Tf)(x_1) - (Tf)(x_2)| = \\left| \\int_0^1 [k(x_1, y) - k(x_2, y)] f(y) \\, dy \\right| \\le \\int_0^1 |k(x_1, y) - k(x_2, y)| |f(y)| \\, dy$$ Since $|f(y)| \\le 1$ and $|k(x_1, y) - k(x_2, y)| < \\varepsilon$: $$|(Tf)(x_1) - (Tf)(x_2)| < \\varepsilon \\int_0^1 1 \\, dy = \\varepsilon$$ Since $\\delta$ depends only on $\\varepsilon$ and is completely independent of $f \\in B$ and $x_1, x_2$, the family $T(B)$ is equicontinuous on $[0, 1]$.</p><p><b>(c) Compact Operator:</b> Since $[0, 1]$ is a compact metric space and the family $T(B) \\subset C[0, 1]$ is both uniformly bounded and equicontinuous, the Arzel\u00e0\u2013Ascoli Theorem guarantees that the closure $\\overline{T(B)}$ is compact in $(C[0, 1], \\|\\cdot\\|_\\infty)$. By definition, this means $T$ is a compact operator.</p>",
  "trap": "Even though the domain $C[0, 1]$ is infinite-dimensional and its unit ball $B$ is not compact, the smoothing property of integration renders the image $T(B)$ equicontinuous and hence relatively compact."
},
{
  "id": "q.rae.e4.04",
  "course": "rae",
  "module": "rae.t4",
  "sec": "E4",
  "marks": 5,
  "title": "Peano's Existence Theorem for ODEs via Ascoli\u2013Arzel\u00e0",
  "source": "GATE MA 2022 / Carothers Ch. 10",
  "prompt": "Consider the initial value problem $y'(t) = f(t, y(t))$ with $y(0) = 0$, where $f: [-a, a] \\times [-b, b] \\to \\mathbb{R}$ is continuous with $|f(t, y)| \\le M$.<br>Euler polygonal approximations $(y_n)$ are defined on $[0, h]$ where $h = \\min(a, b/M)$.<br>(a) Prove that the sequence $(y_n)$ is uniformly bounded on $[0, h]$.<br>(b) Prove that the sequence $(y_n)$ is equicontinuous on $[0, h]$.<br>(c) Apply Arzel\u00e0\u2013Ascoli to prove that there exists a continuously differentiable solution $y(t)$ on $[0, h]$ (Peano's Theorem).",
  "tests": [
    "c.e4.1",
    "c.e4.2",
    "c.e4.3"
  ],
  "approach": "<p>Observe that the slopes of the Euler polygons are bounded by $M$, establishing a Lipschitz condition $|y_n(t) - y_n(s)| \\le M|t - s|$. Extract a uniformly convergent subsequence and pass to the limit in the integral equation.</p>",
  "solution": "<p><b>(a) Uniform Boundedness:</b> By construction of the Euler polygonal approximations, each $y_n(0) = 0$, and the slope of each segment of $y_n$ is of the form $f(t_k, y_n(t_k))$. Since $|f(t, y)| \\le M$ everywhere on the rectangle, the slope of $y_n$ is bounded by $M$ almost everywhere.</p><p>For any $t \\in [0, h]$: $$|y_n(t)| = \\left| y_n(0) + \\int_0^t y_n'(\\tau) \\, d\\tau \\right| \\le 0 + \\int_0^t M \\, d\\tau = M t \\le M h \\le M \\left(\\frac{b}{M}\\right) = b$$ Thus $\\|y_n\\|_\\infty \\le b$ for all $n$, proving uniform boundedness.</p><p><b>(b) Equicontinuity:</b> For any $s, t \\in [0, h]$ with $s < t$: $$|y_n(t) - y_n(s)| = \\left| \\int_s^t y_n'(\\tau) \\, d\\tau \\right| \\le \\int_s^t M \\, d\\tau = M |t - s|$$ Every function in the sequence $(y_n)$ is Lipschitz continuous with constant $M$. Given $\\varepsilon > 0$, choose $\\delta = \\varepsilon / M$. Then for all $n \\in \\mathbb{N}$ and all $|t - s| < \\delta$, $|y_n(t) - y_n(s)| < \\varepsilon$, proving $(y_n)$ is equicontinuous.</p><p><b>(c) Extraction of Solution:</b> By the Arzel\u00e0\u2013Ascoli Theorem, there exists a subsequence $(y_{n_k})$ that converges uniformly on $[0, h]$ to some continuous function $y \\in C[0, h]$.</p><p>Each Euler polygon satisfies: $$y_{n_k}(t) = \\int_0^t f(\\tau, y_{n_k}(\\tau)) \\, d\\tau + \\varepsilon_{n_k}(t)$$ where $\\varepsilon_{n_k}(t) \\to 0$ uniformly as $k \\to \\infty$.</p><p>Since $f$ is continuous on a compact domain, it is uniformly continuous. Hence $f(t, y_{n_k}(t)) \\to f(t, y(t))$ uniformly on $[0, h]$. Taking the limit as $k \\to \\infty$ inside the integral: $$y(t) = \\int_0^t f(\\tau, y(\\tau)) \\, d\\tau$$ By the Fundamental Theorem of Calculus, $y$ is differentiable with $y'(t) = f(t, y(t))$ and $y(0) = 0$. This proves Peano's Existence Theorem.</p>",
  "trap": "Peano's Theorem guarantees EXISTENCE using compactness, but NOT UNIQUENESS (e.g. $y' = 3y^{2/3}$ with $y(0) = 0$ has infinitely many solutions); uniqueness requires a Lipschitz condition on $f$ (Picard\u2013Lindel\u00f6f)."
},
{
  "id": "q.rae.e4.05",
  "course": "rae",
  "module": "rae.t4",
  "sec": "E4",
  "marks": 5,
  "title": "Equicontinuity and Dense Subsets in Metric Spaces",
  "source": "GATE MA 2023 / Carothers Ch. 10",
  "prompt": "Let $(X, d)$ be a compact metric space and $(f_n)$ be a sequence in $C(X)$.<br>(a) Prove that if $(f_n)$ is equicontinuous on $X$ and converges pointwise on a dense subset $D \\subseteq X$, then $(f_n)$ converges uniformly on the entire space $X$.<br>(b) Give an example of a sequence of functions on $[0, 1]$ that converges pointwise on a dense subset, but fails to converge uniformly.",
  "tests": [
    "c.e4.1",
    "c.e4.2"
  ],
  "approach": "<p>Use a $3\\varepsilon$-argument: equicontinuity controls $|f_n(x) - f_n(d)|$, total boundedness gives a finite $\\varepsilon$-net in $D$, and pointwise convergence controls $|f_n(d) - f_m(d)|$.</p>",
  "solution": "<p><b>(a) Proof of Uniform Convergence:</b> We show $(f_n)$ is uniformly Cauchy in $(C(X), d_\\infty)$.</p><p>Let $\\varepsilon > 0$. By equicontinuity of $(f_n)$, there exists $\\delta > 0$ such that: $$d(x, y) < \\delta \\implies |f_n(x) - f_n(y)| < \\frac{\\varepsilon}{3} \\quad \\text{for all } n \\in \\mathbb{N} \\text{ and } x, y \\in X$$ Since $X$ is compact, $X$ is totally bounded. Cover $X$ by finitely many balls of radius $\\delta$: $X = \\bigcup_{j=1}^m B(x_j, \\delta)$.</p><p>Since $D$ is dense in $X$, each ball $B(x_j, \\delta)$ contains a point $d_j \\in D$. By the triangle inequality, $B(x_j, \\delta) \\subseteq B(d_j, 2\\delta)$, so the balls $B(d_j, 2\\delta)$ cover $X$.</p><p>Since $(f_n)$ converges pointwise on $D$, it converges at each point of the finite set $\\{d_1, \\dots, d_m\\}$. Thus, there exists $N \\in \\mathbb{N}$ such that: $$n, k \\ge N \\implies |f_n(d_j) - f_k(d_j)| < \\frac{\\varepsilon}{3} \\quad \\text{for all } j \\in \\{1, \\dots, m\\}$$ Now take any $x \\in X$. Then $x \\in B(d_j, 2\\delta)$ for some $j$. Using the $3\\varepsilon$-split: $$|f_n(x) - f_k(x)| \\le |f_n(x) - f_n(d_j)| + |f_n(d_j) - f_k(d_j)| + |f_k(d_j) - f_k(x)| < \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} + \\frac{\\varepsilon}{3} = \\varepsilon$$ This holds for all $x \\in X$ and all $n, k \\ge N$. Hence $(f_n)$ is uniformly Cauchy, and since $C(X)$ is complete, $(f_n)$ converges uniformly on $X$.</p><p><b>(b) Counterexample without Equicontinuity:</b> Consider $f_n(x) = x^n$ on $[0, 1]$. On the subset $D = [0, 1) \\cap \\mathbb{Q}$, which is dense in $[0, 1]$, $f_n(x) \\to 0$ pointwise. However, $f_n(1) = 1 \\not\\to 0$, and $\\sup_{x \\in [0, 1]} |f_n(x) - 0| = 1 \\not\\to 0$. The sequence does not converge uniformly because it is not equicontinuous near $x = 1$.</p>",
  "trap": "Density is not enough by itself; equicontinuity is the exact bridge that allows pointwise control on a dense subset to propagate uniformly across the whole space."
},
{
  "id": "q.rae.e5.01",
  "course": "rae",
  "module": "rae.t5",
  "sec": "E5",
  "marks": 5,
  "title": "Inverse Function Theorem and Polar Coordinate Invertibility",
  "source": "GATE MA 2022 / Rudin Ch. 9",
  "prompt": "Let $F: \\mathbb{R}^2 \\to \\mathbb{R}^2$ be the polar-to-Cartesian map $F(r, \\theta) = (r \\cos\\theta, r \\sin\\theta)$.<br>(a) Compute the Jacobian matrix $J_F(r, \\theta)$ and its determinant.<br>(b) State the Inverse Function Theorem for mappings from $\\mathbb{R}^n$ to $\\mathbb{R}^n$.<br>(c) At which points does $F$ have a local $C^1$ inverse? Is $F$ globally invertible on $(0, \\infty) \\times \\mathbb{R}$? Justify your answers.",
  "tests": [
    "c.e5.1",
    "c.e5.2"
  ],
  "approach": "<p>Compute partial derivatives matrix $J_F$ and calculate determinant $\\det J_F = r$. Check local invertibility via IFT and global invertibility via injectivity.</p>",
  "solution": "<p><b>(a) Jacobian Matrix and Determinant:</b> Let $u(r, \\theta) = r\\cos\\theta$ and $v(r, \\theta) = r\\sin\\theta$.</p><p>$$J_F(r, \\theta) = \\begin{bmatrix} \\frac{\\partial u}{\\partial r} & \\frac{\\partial u}{\\partial \\theta} \\\\[6pt] \\frac{\\partial v}{\\partial r} & \\frac{\\partial v}{\\partial \\theta} \\end{bmatrix} = \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\[6pt] \\sin\\theta & r\\cos\\theta \\end{bmatrix}$$</p><p>The Jacobian determinant is: $$\\det J_F(r, \\theta) = (\\cos\\theta)(r\\cos\\theta) - (-r\\sin\\theta)(\\sin\\theta) = r(\\cos^2\\theta + \\sin^2\\theta) = r$$</p><p><b>(b) Inverse Function Theorem:</b> Let $U \\subseteq \\mathbb{R}^n$ be an open set and $f: U \\to \\mathbb{R}^n$ be a $C^1$ mapping. If $x_0 \\in U$ and the Jacobian determinant $\\det J_f(x_0) \\ne 0$, then there exists an open neighborhood $V$ of $x_0$ and an open neighborhood $W$ of $f(x_0)$ such that $f: V \\to W$ is a bijection, and the inverse map $f^{-1}: W \\to V$ is $C^1$ with $J_{f^{-1}}(f(x_0)) = [J_f(x_0)]^{-1}$.</p><p><b>(c) Local vs Global Invertibility:</b></p><p>1. Local Invertibility: The Inverse Function Theorem guarantees a local $C^1$ inverse around every point $(r, \\theta)$ where $\\det J_F(r, \\theta) \\ne 0$, which is precisely all points with $r \\ne 0$.</p><p>2. Global Invertibility: On the domain $U = (0, \\infty) \\times \\mathbb{R}$, $\\det J_F(r, \\theta) = r > 0$ everywhere, so $F$ is locally invertible at every point. However, $F$ is NOT globally invertible on $(0, \\infty) \\times \\mathbb{R}$ because it fails to be injective: for any $r > 0$, $F(r, 0) = (r, 0) = F(r, 2\\pi)$, yet $(r, 0) \\ne (r, 2\\pi)$.</p>",
  "trap": "A non-zero Jacobian determinant everywhere guarantees LOCAL invertibility around each point, but does NOT guarantee GLOBAL injectivity."
},
{
  "id": "q.rae.e5.02",
  "course": "rae",
  "module": "rae.t5",
  "sec": "E5",
  "marks": 5,
  "title": "Implicit Function Theorem for Systems of Nonlinear Equations",
  "source": "GATE MA 2023 / Rudin Ch. 9",
  "prompt": "Consider the system of nonlinear equations: $$F_1(x, y, u, v) = x u + y v^2 - 2 = 0$$ $$F_2(x, y, u, v) = x^2 u^2 + y^3 v - 2 = 0$$<br>(a) Verify that $(x_0, y_0, u_0, v_0) = (1, 1, 1, 1)$ is a solution.<br>(b) State the Implicit Function Theorem for $F: \\mathbb{R}^{n+m} \\to \\mathbb{R}^m$.<br>(c) Show that the system can be solved uniquely for $(u, v)$ as $C^1$ functions of $(x, y)$ in a neighborhood of $(1, 1)$, and compute $\\frac{\\partial u}{\\partial x}$ at $(1, 1)$.",
  "tests": [
    "c.e5.1",
    "c.e5.3"
  ],
  "approach": "<p>Evaluate the partial Jacobian matrix $D_{(u, v)} F$ at $(1, 1, 1, 1)$, show its determinant is non-zero, and use implicit differentiation.</p>",
  "solution": "<p><b>(a) Verification:</b> At $(1, 1, 1, 1)$: $$F_1(1, 1, 1, 1) = (1)(1) + (1)(1)^2 - 2 = 1 + 1 - 2 = 0$$ $$F_2(1, 1, 1, 1) = (1)^2(1)^2 + (1)^3(1) - 2 = 1 + 1 - 2 = 0$$ Both equations are satisfied.</p><p><b>(b) Implicit Function Theorem:</b> Let $F: \\mathbb{R}^n \\times \\mathbb{R}^m \\to \\mathbb{R}^m$ be $C^1$. If $F(x_0, y_0) = 0$ and the $m \\times m$ Jacobian matrix of partial derivatives with respect to $y$, $D_y F(x_0, y_0) = \\left[ \\frac{\\partial F_i}{\\partial y_j} \\right]$, is invertible ($\\det D_y F(x_0, y_0) \\ne 0$), then there exist open sets $U \\subset \\mathbb{R}^n$ containing $x_0$ and $V \\subset \\mathbb{R}^m$ containing $y_0$ and a unique $C^1$ mapping $g: U \\to V$ such that $F(x, g(x)) = 0$ for all $x \\in U$. Moreover, $D g(x_0) = -[D_y F(x_0, y_0)]^{-1} D_x F(x_0, y_0)$.</p><p><b>(c) Solvability and Derivative:</b> The partial Jacobian with respect to $(u, v)$ is: $$D_{(u, v)} F = \\begin{bmatrix} \\frac{\\partial F_1}{\\partial u} & \\frac{\\partial F_1}{\\partial v} \\\\[6pt] \\frac{\\partial F_2}{\\partial u} & \\frac{\\partial F_2}{\\partial v} \\end{bmatrix} = \\begin{bmatrix} x & 2y v \\\\[6pt] 2x^2 u & y^3 \\end{bmatrix}$$ At $(1, 1, 1, 1)$: $$D_{(u, v)} F(1, 1, 1, 1) = \\begin{bmatrix} 1 & 2 \\\\[6pt] 2 & 1 \\end{bmatrix}$$ The determinant is $\\det = (1)(1) - (2)(2) = 1 - 4 = -3 \\ne 0$.</p><p>Since the determinant is non-zero, the Implicit Function Theorem guarantees unique $C^1$ functions $u(x, y)$ and $v(x, y)$ near $(1, 1)$.</p><p>To find $\\frac{\\partial u}{\\partial x}(1, 1)$, differentiate both equations with respect to $x$ at $(1, 1, 1, 1)$:</p><p>$$u + x \\frac{\\partial u}{\\partial x} + 2y v \\frac{\\partial v}{\\partial x} = 0 \\implies 1 + \\frac{\\partial u}{\\partial x} + 2 \\frac{\\partial v}{\\partial x} = 0$$</p><p>$$2x u^2 + 2x^2 u \\frac{\\partial u}{\\partial x} + y^3 \\frac{\\partial v}{\\partial x} = 0 \\implies 2 + 2 \\frac{\\partial u}{\\partial x} + \\frac{\\partial v}{\\partial x} = 0$$</p><p>From the second equation, $\\frac{\\partial v}{\\partial x} = -2 - 2 \\frac{\\partial u}{\\partial x}$. Substituting into the first equation:</p><p>$$1 + \\frac{\\partial u}{\\partial x} + 2\\left(-2 - 2 \\frac{\\partial u}{\\partial x}\\right) = 0 \\implies 1 - 4 - 3 \\frac{\\partial u}{\\partial x} = 0 \\implies \\frac{\\partial u}{\\partial x} = -1$$</p>",
  "trap": "Remember that the implicit derivative formula includes a critical MINUS sign: $D g = -[D_y F]^{-1} D_x F$."
},
{
  "id": "q.rae.e5.03",
  "course": "rae",
  "module": "rae.t5",
  "sec": "E5",
  "marks": 5,
  "title": "Total Differentiability vs Existence of Directional Derivatives",
  "source": "JAM MA 2021 / Rudin Ch. 9",
  "prompt": "Define $f: \\mathbb{R}^2 \\to \\mathbb{R}$ by: $$f(x, y) = \\begin{cases} \\frac{x^3}{x^2 + y^2} & \\text{if } (x, y) \\ne (0, 0) \\\\ 0 & \\text{if } (x, y) = (0, 0) \\end{cases}$$<br>(a) Prove that $f$ is continuous at $(0, 0)$.<br>(b) Prove that the directional derivative $D_u f(0, 0)$ exists in every direction $u = (u_1, u_2) \\in \\mathbb{R}^2$ with $\\|u\\| = 1$.<br>(c) Prove that $f$ is NOT totally differentiable at $(0, 0)$.",
  "tests": [
    "c.e5.1"
  ],
  "approach": "<p>Convert to polar coordinates to establish continuity. Use the limit definition of directional derivative. To test total differentiability, check if $D_u f(0, 0)$ is linear in $u$.</p>",
  "solution": "<p><b>(a) Continuity at $(0, 0)$:</b> In polar coordinates $x = r\\cos\\theta, y = r\\sin\\theta$: $$|f(x, y) - 0| = \\left| \\frac{r^3 \\cos^3\\theta}{r^2} \\right| = r |\\cos^3\\theta| \\le r = \\sqrt{x^2 + y^2}$$ As $(x, y) \\to (0, 0)$, $r \\to 0$, so $|f(x, y)| \\to 0 = f(0, 0)$. Thus $f$ is continuous at the origin.</p><p><b>(b) Directional Derivatives:</b> Let $u = (u_1, u_2)$ be a unit vector ($u_1^2 + u_2^2 = 1$). By definition: $$D_u f(0, 0) = \\lim_{t \\to 0} \\frac{f(t u_1, t u_2) - f(0, 0)}{t} = \\lim_{t \\to 0} \\frac{1}{t} \\frac{(t u_1)^3}{(t u_1)^2 + (t u_2)^2} = \\lim_{t \\to 0} \\frac{t^3 u_1^3}{t \\cdot t^2(u_1^2 + u_2^2)} = \\lim_{t \\to 0} \\frac{t^3 u_1^3}{t^3 \\cdot 1} = u_1^3$$ Since this limit exists for every unit vector $u$, all directional derivatives exist at $(0, 0)$.</p><p><b>(c) Non-Differentiability:</b> If $f$ were totally differentiable at $(0, 0)$, the directional derivative would have to be a linear function of the direction vector: $D_u f(0, 0) = \\nabla f(0, 0) \\cdot u$.</p><p>The partial derivatives are: $$\\frac{\\partial f}{\\partial x}(0, 0) = D_{(1, 0)} f(0, 0) = 1^3 = 1$$ $$\\frac{\\partial f}{\\partial y}(0, 0) = D_{(0, 1)} f(0, 0) = 0^3 = 0$$</p><p>If $f$ were differentiable, we would have: $$D_u f(0, 0) = \\nabla f(0, 0) \\cdot u = (1)(u_1) + (0)(u_2) = u_1$$ But from part (b), $D_u f(0, 0) = u_1^3$. For $u = (1/\\sqrt{2}, 1/\\sqrt{2})$, $u_1 = 1/\\sqrt{2}$, whereas $u_1^3 = 1/(2\\sqrt{2}) \\ne 1/\\sqrt{2}$.</p><p>Since $D_u f(0, 0) \\ne \\nabla f(0, 0) \\cdot u$, $f$ cannot be totally differentiable at $(0, 0)$.</p>",
  "trap": "The existence of all directional derivatives at a point does NOT imply total differentiability; total differentiability requires the error term $\\frac{f(h) - f(0) - L(h)}{\\|h\\|} \\to 0$ uniformly in all directions."
},
{
  "id": "q.rae.e5.04",
  "course": "rae",
  "module": "rae.t5",
  "sec": "E5",
  "marks": 5,
  "title": "Global Non-Invertibility: The Complex Exponential Map",
  "source": "GATE MA 2021 / Rudin Ch. 9",
  "prompt": "Consider the mapping $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ defined by: $$f(x, y) = (e^x \\cos y, e^x \\sin y)$$<br>(a) Compute the Jacobian matrix $J_f(x, y)$ and show that its determinant is strictly positive everywhere.<br>(b) Deduce that $f$ is an open mapping.<br>(c) Show that $f$ is NOT injective on $\\mathbb{R}^2$, and determine the exact image $f(\\mathbb{R}^2)$.",
  "tests": [
    "c.e5.1",
    "c.e5.2"
  ],
  "approach": "<p>Calculate the Jacobian determinant $e^{2x} > 0$. Use the Inverse Function Theorem to show $f$ is a local homeomorphism, hence an open map. Inspect periodicity in $y$.</p>",
  "solution": "<p><b>(a) Jacobian Matrix and Determinant:</b> Let $u(x, y) = e^x \\cos y$ and $v(x, y) = e^x \\sin y$.</p><p>$$J_f(x, y) = \\begin{bmatrix} \\frac{\\partial u}{\\partial x} & \\frac{\\partial u}{\\partial y} \\\\[6pt] \\frac{\\partial v}{\\partial x} & \\frac{\\partial v}{\\partial y} \\end{bmatrix} = \\begin{bmatrix} e^x \\cos y & -e^x \\sin y \\\\[6pt] e^x \\sin y & e^x \\cos y \\end{bmatrix}$$</p><p>The determinant is: $$\\det J_f(x, y) = (e^x \\cos y)(e^x \\cos y) - (-e^x \\sin y)(e^x \\sin y) = e^{2x} (\\cos^2 y + \\sin^2 y) = e^{2x} > 0$$ for all $(x, y) \\in \\mathbb{R}^2$.</p><p><b>(b) Open Mapping:</b> By the Inverse Function Theorem, since $\\det J_f(x, y) \\ne 0$ at every point in $\\mathbb{R}^2$, $f$ is a local $C^1$ diffeomorphism. That is, around every point $(x, y)$ there is an open neighborhood $U$ mapped homeomorphically onto an open neighborhood $f(U)$.</p><p>For any open set $W \\subseteq \\mathbb{R}^2$: $$f(W) = \\bigcup_{p \\in W} f(U_p)$$ where each $U_p \\subseteq W$ is an open neighborhood of $p$ on which $f$ is an open map. Since the union of any collection of open sets is open, $f(W)$ is open. Thus $f$ is an open mapping.</p><p><b>(c) Non-Injectivity and Image:</b></p><p>1. Non-Injectivity: For any $(x, y) \\in \\mathbb{R}^2$, since $\\cos(y + 2\\pi) = \\cos y$ and $\\sin(y + 2\\pi) = \\sin y$, we have $f(x, y + 2\\pi) = f(x, y)$. Since $(x, y + 2\\pi) \\ne (x, y)$, $f$ is not injective.</p><p>2. Exact Image: The norm of $f(x, y)$ is: $$\\|f(x, y)\\|^2 = (e^x \\cos y)^2 + (e^x \\sin y)^2 = e^{2x} > 0$$ So $(0, 0) \\notin f(\\mathbb{R}^2)$. Conversely, any point $(u, v) \\in \\mathbb{R}^2 \\setminus \\{(0, 0)\\}$ can be written in polar coordinates as $(R \\cos\\theta, R \\sin\\theta)$ with $R > 0$. Setting $x = \\ln R$ and $y = \\theta$, we have $f(\\ln R, \\theta) = (R \\cos\\theta, R \\sin\\theta) = (u, v)$.</p><p>Thus the exact image is $f(\\mathbb{R}^2) = \\mathbb{R}^2 \\setminus \\{(0, 0)\\}$ (the punctured plane).</p>",
  "trap": "Even if $\\det J_f(x) > 0$ everywhere on $\\mathbb{R}^n$, global injectivity can fail whenever the space wraps around, as with this complex exponential map $z \\mapsto e^z$."
},
{
  "id": "q.rae.e5.05",
  "course": "rae",
  "module": "rae.t5",
  "sec": "E5",
  "marks": 5,
  "title": "Tangent Spaces and Implicit Differentiation of Surfaces",
  "source": "GATE MA 2020 / Rudin Ch. 9",
  "prompt": "Let $S \\subset \\mathbb{R}^3$ be the surface defined by $F(x, y, z) = x^3 + y^3 + z^3 - 3xyz - 2 = 0$.<br>(a) Show that $P_0 = (1, 1, 0)$ lies on $S$ and that the Implicit Function Theorem applies to express $z$ as a $C^1$ function $z = g(x, y)$ near $(1, 1)$.<br>(b) Find the equation of the tangent plane to $S$ at $P_0$.<br>(c) Compute $\\frac{\\partial^2 z}{\\partial x^2}$ at $(1, 1)$.",
  "tests": [
    "c.e5.1",
    "c.e5.3"
  ],
  "approach": "<p>Verify $F(1, 1, 0) = 0$ and $\\frac{\\partial F}{\\partial z} \\ne 0$. Calculate the gradient $\\nabla F(1, 1, 0)$ for the tangent plane, and differentiate implicitly twice to compute the second partial derivative.</p>",
  "solution": "<p><b>(a) Applicability of IFT:</b></p><p>At $P_0 = (1, 1, 0)$: $$F(1, 1, 0) = 1^3 + 1^3 + 0^3 - 3(1)(1)(0) - 2 = 1 + 1 + 0 - 0 - 2 = 0$$ Compute the partial derivatives of $F$:</p><p>$$\\frac{\\partial F}{\\partial x} = 3x^2 - 3yz, \\quad \\frac{\\partial F}{\\partial y} = 3y^2 - 3xz, \\quad \\frac{\\partial F}{\\partial z} = 3z^2 - 3xy$$</p><p>Evaluating at $P_0 = (1, 1, 0)$:</p><p>$$\\frac{\\partial F}{\\partial x}(1, 1, 0) = 3(1)^2 - 0 = 3, \\quad \\frac{\\partial F}{\\partial y}(1, 1, 0) = 3(1)^2 - 0 = 3$$</p><p>$$\\frac{\\partial F}{\\partial z}(1, 1, 0) = 3(0)^2 - 3(1)(1) = -3 \\ne 0$$</p><p>Since $\\frac{\\partial F}{\\partial z}(1, 1, 0) = -3 \\ne 0$, the Implicit Function Theorem guarantees the existence of a unique $C^1$ function $z = g(x, y)$ in a neighborhood of $(1, 1)$ such that $g(1, 1) = 0$ and $F(x, y, g(x, y)) = 0$.</p><p><b>(b) Tangent Plane:</b> The gradient vector at $P_0$ is: $$\\nabla F(1, 1, 0) = (3, 3, -3)$$ The equation of the tangent plane is $\\nabla F(P_0) \\cdot (x - 1, y - 1, z - 0) = 0$: $$3(x - 1) + 3(y - 1) - 3(z - 0) = 0 \\implies x + y - z = 2$$</p><p><b>(c) Second Partial Derivative:</b> Differentiating $x^3 + y^3 + z^3 - 3xyz = 2$ implicitly with respect to $x$ treating $y$ as constant and $z = z(x, y)$:</p><p>$$3x^2 + 3z^2 \\frac{\\partial z}{\\partial x} - 3yz - 3xy \\frac{\\partial z}{\\partial x} = 0 \\implies x^2 - yz + (z^2 - xy) \\frac{\\partial z}{\\partial x} = 0$$</p><p>At $(1, 1, 0)$, $1 - 0 + (0 - 1) \\frac{\\partial z}{\\partial x} = 0 \\implies \\frac{\\partial z}{\\partial x} = 1$.</p><p>Differentiating again with respect to $x$:</p><p>$$2x - y \\frac{\\partial z}{\\partial x} + \\left(2z \\frac{\\partial z}{\\partial x} - y\\right) \\frac{\\partial z}{\\partial x} + (z^2 - xy) \\frac{\\partial^2 z}{\\partial x^2} = 0$$</p><p>Substitute $x = 1, y = 1, z = 0, \\frac{\\partial z}{\\partial x} = 1$:</p><p>$$2(1) - (1)(1) + (0 - 1)(1) + (0 - 1) \\frac{\\partial^2 z}{\\partial x^2} = 0$$</p><p>$$2 - 1 - 1 - \\frac{\\partial^2 z}{\\partial x^2} = 0 \\implies \\frac{\\partial^2 z}{\\partial x^2}(1, 1) = 0$$</p>",
  "trap": "Do not forget the product rule term when differentiating $-3xyz$: differentiating with respect to $x$ yields $-3yz - 3xy \\frac{\\partial z}{\\partial x}$."
},
{
  "id": "q.rae.e6.01",
  "course": "rae",
  "module": "rae.t6",
  "sec": "E6",
  "marks": 5,
  "title": "Lebesgue Outer Measure and the Middle-Third Cantor Set",
  "source": "GATE MA 2021 / Royden Ch. 2",
  "prompt": "Let $C \\subset [0, 1]$ be the middle-third Cantor set.<br>(a) Define the Lebesgue outer measure $m^*(E)$ for an arbitrary subset $E \\subseteq \\mathbb{R}$.<br>(b) Prove that $m^*(C) = 0$.<br>(c) Prove that $C$ is uncountable and deduce that there exist uncountable sets of Lebesgue measure zero.",
  "tests": [
    "c.e6.1",
    "c.e6.2"
  ],
  "approach": "<p>At the $n$-th step of construction, $C$ is contained in $2^n$ intervals each of length $(1/3)^n$. Use monotonicity of outer measure. Map $C$ surjectively onto $[0, 1]$ using base 3.</p>",
  "solution": "<p><b>(a) Definition of Outer Measure:</b> For any subset $E \\subseteq \\mathbb{R}$, the Lebesgue outer measure $m^*(E)$ is: $$m^*(E) = \\inf \\left\\{ \\sum_{k=1}^\\infty \\ell(I_k) : I_k \\text{ are open intervals such that } E \\subseteq \\bigcup_{k=1}^\\infty I_k \\right\\}$$ where $\\ell(I_k) = b_k - a_k$ denotes the length of the open interval $I_k = (a_k, b_k)$.</p><p><b>(b) Measure Zero of the Cantor Set:</b> The Cantor set is constructed as $C = \\bigcap_{n=1}^\\infty C_n$, where $C_0 = [0, 1]$, and each $C_n$ is obtained by removing the open middle-third of each interval in $C_{n-1}$.</p><p>Thus $C_n$ is the union of $2^n$ disjoint closed intervals, each of length $(1/3)^n$.</p><p>For any $\\varepsilon > 0$, by slightly enlarging each of the $2^n$ closed intervals into an open interval of length $(1/3)^n + \\frac{\\varepsilon}{2^n}$, we cover $C_n$. Since $C \\subseteq C_n$ for all $n$, by monotonicity of outer measure: $$m^*(C) \\le m^*(C_n) \\le \\sum_{j=1}^{2^n} \\left( \\frac{1}{3^n} + \\frac{\\varepsilon}{2^n} \\right) = 2^n \\left(\\frac{1}{3}\\right)^n + \\varepsilon = \\left(\\frac{2}{3}\\right)^n + \\varepsilon$$ Since this holds for all $n \\in \\mathbb{N}$ and all $\\varepsilon > 0$, taking $n \\to \\infty$ gives $m^*(C) \\le \\varepsilon$. Since $\\varepsilon > 0$ was arbitrary, $m^*(C) = 0$. Since $m^*(C) = 0$, $C$ is Lebesgue measurable with $m(C) = 0$.</p><p><b>(c) Uncountability:</b> A point $x \\in [0, 1]$ belongs to $C$ if and only if $x$ has a ternary (base 3) expansion containing only the digits $0$ and $2$: $$x = \\sum_{k=1}^\\infty \\frac{a_k}{3^k}, \\quad a_k \\in \\{0, 2\\}$$ Define a mapping $\\phi: C \\to [0, 1]$ by replacing each digit $2$ with $1$ and interpreting in binary (base 2): $$\\phi\\left(\\sum_{k=1}^\\infty \\frac{a_k}{3^k}\\right) = \\sum_{k=1}^\\infty \\frac{a_k / 2}{2^k}$$ Since every number in $[0, 1]$ has a binary expansion using digits $0$ and $1$, $\\phi$ is a surjective map from $C$ onto the entire interval $[0, 1]$. Because $[0, 1]$ is uncountable, $C$ must be uncountable with cardinality $\\mathfrak{c} = 2^{\\aleph_0}$.</p>",
  "trap": "Never equate 'measure zero' with 'countable'; the Cantor set demonstrates that an uncountable set can have measure zero."
},
{
  "id": "q.rae.e6.02",
  "course": "rae",
  "module": "rae.t6",
  "sec": "E6",
  "marks": 5,
  "title": "Carath\u00e9odory's Criterion and Measurability of Rays",
  "source": "GATE MA 2022 / Royden Ch. 3",
  "prompt": "Let $m^*$ denote the Lebesgue outer measure on $\\mathbb{R}$.<br>(a) State <b>Carath\u00e9odory's Criterion</b> for a set $E \\subseteq \\mathbb{R}$ to be Lebesgue measurable.<br>(b) Prove that every ray of the form $(a, \\infty)$ is Lebesgue measurable.<br>(c) Conclude that every open set and every Borel set in $\\mathbb{R}$ is Lebesgue measurable.",
  "tests": [
    "c.e6.2",
    "c.e6.3"
  ],
  "approach": "<p>Carath\u00e9odory requires $m^*(A) = m^*(A \\cap E) + m^*(A \\setminus E)$ for all test sets $A$. Split each covering open interval $I_k$ of $A$ at $a$ to establish the inequality.</p>",
  "solution": "<p><b>(a) Carath\u00e9odory's Criterion:</b> A set $E \\subseteq \\mathbb{R}$ is <b>Lebesgue measurable</b> if for every test set $A \\subseteq \\mathbb{R}$: $$m^*(A) = m^*(A \\cap E) + m^*(A \\setminus E)$$ Since subadditivity always gives $m^*(A) \\le m^*(A \\cap E) + m^*(A \\setminus E)$, to prove measurability it suffices to establish: $$m^*(A) \\ge m^*(A \\cap E) + m^*(A \\setminus E)$$</p><p><b>(b) Measurability of $E = (a, \\infty)$:</b> Let $A \\subseteq \\mathbb{R}$ be an arbitrary test set. If $m^*(A) = \\infty$, the inequality is trivially satisfied. Assume $m^*(A) < \\infty$.</p><p>Let $\\varepsilon > 0$. By definition of outer measure, there exists a countable collection of open intervals $\\{I_k\\}$ covering $A$ such that: $$\\sum_{k=1}^\\infty \\ell(I_k) < m^*(A) + \\varepsilon$$ For each open interval $I_k = (c_k, d_k)$, the intersection $I_k' = I_k \\cap (a, \\infty)$ and $I_k'' = I_k \\setminus (a, \\infty) = I_k \\cap (-\\infty, a]$ are either empty or disjoint intervals whose lengths sum to $\\ell(I_k)$: $$\\ell(I_k) = \\ell(I_k') + \\ell(I_k'')$$ Since $\\{I_k'\\}$ is a collection of open intervals covering $A \\cap (a, \\infty)$ (up to endpoint which has measure zero) and $\\{I_k''\\}$ covers $A \\setminus (a, \\infty)$: $$m^*(A \\cap (a, \\infty)) \\le \\sum_{k=1}^\\infty \\ell(I_k'), \\quad m^*(A \\setminus (a, \\infty)) \\le \\sum_{k=1}^\\infty \\ell(I_k'')$$ Adding these two inequalities: $$m^*(A \\cap (a, \\infty)) + m^*(A \\setminus (a, \\infty)) \\le \\sum_{k=1}^\\infty (\\ell(I_k') + \\ell(I_k'')) = \\sum_{k=1}^\\infty \\ell(I_k) < m^*(A) + \\varepsilon$$ Since $\\varepsilon > 0$ was arbitrary, we get $m^*(A \\cap (a, \\infty)) + m^*(A \\setminus (a, \\infty)) \\le m^*(A)$. Hence $(a, \\infty)$ is measurable.</p><p><b>(c) Borel Sets are Measurable:</b> The measurable sets form a $\\sigma$-algebra $\\mathcal{M}$. Since $(a, \\infty) \\in \\mathcal{M}$, the complement $(-\\infty, a] \\in \\mathcal{M}$. For any open interval $(a, b) = (a, \\infty) \\cap (-\\infty, b)$, $(a, b) \\in \\mathcal{M}$.</p><p>Every open set in $\\mathbb{R}$ is a countable union of disjoint open intervals, so every open set is measurable. Since the Borel $\\sigma$-algebra $\\mathcal{B}(\\mathbb{R})$ is the smallest $\\sigma$-algebra generated by open sets, $\\mathcal{B}(\\mathbb{R}) \\subseteq \\mathcal{M}$.</p>",
  "trap": "Carath\u00e9odory's split must be tested against ALL subsets $A \\subseteq \\mathbb{R}$, not just measurable sets or intervals."
},
{
  "id": "q.rae.e6.03",
  "course": "rae",
  "module": "rae.t6",
  "sec": "E6",
  "marks": 5,
  "title": "Continuity of Measure and the Borel\u2013Cantelli Lemma",
  "source": "JAM MA 2020 / Royden Ch. 3",
  "prompt": "Let $(\\mathbb{R}, \\mathcal{M}, m)$ be the Lebesgue measure space.<br>(a) Prove <b>continuity from below</b>: if $E_1 \\subseteq E_2 \\subseteq E_3 \\subseteq \\cdots$ are measurable, then $m\\left(\\bigcup_{n=1}^\\infty E_n\\right) = \\lim_{n \\to \\infty} m(E_n)$.<br>(b) State <b>continuity from above</b> and explain why the condition $m(E_1) < \\infty$ cannot be omitted.<br>(c) Prove the <b>Borel\u2013Cantelli Lemma</b>: if $\\{E_n\\}_{n=1}^\\infty$ are measurable and $\\sum_{n=1}^\\infty m(E_n) < \\infty$, then: $$m\\left( \\limsup_{n \\to \\infty} E_n \\right) = m\\left( \\bigcap_{k=1}^\\infty \\bigcup_{n=k}^\\infty E_n \\right) = 0$$",
  "tests": [
    "c.e6.3"
  ],
  "approach": "<p>Disjointify the nested union $A_1 = E_1, A_n = E_n \\setminus E_{n-1}$ to use countable additivity. For Borel-Cantelli, use continuity from above on $B_k = \\bigcup_{n=k}^\\infty E_n$.</p>",
  "solution": "<p><b>(a) Continuity from Below:</b> Define $A_1 = E_1$ and $A_n = E_n \\setminus E_{n-1}$ for $n \\ge 2$.</p><p>The sets $\\{A_n\\}$ are pairwise disjoint and measurable. For any $N \\in \\mathbb{N}$, $\\bigcup_{n=1}^N A_n = E_N$, and $\\bigcup_{n=1}^\\infty A_n = \\bigcup_{n=1}^\\infty E_n$. By countable additivity of Lebesgue measure: $$m\\left(\\bigcup_{n=1}^\\infty E_n\\right) = m\\left(\\bigcup_{n=1}^\\infty A_n\\right) = \\sum_{n=1}^\\infty m(A_n) = \\lim_{N \\to \\infty} \\sum_{n=1}^N m(A_n)$$ Since $\\sum_{n=1}^N m(A_n) = m\\left(\\bigcup_{n=1}^N A_n\\right) = m(E_N)$, we obtain: $$m\\left(\\bigcup_{n=1}^\\infty E_n\\right) = \\lim_{N \\to \\infty} m(E_N)$$</p><p><b>(b) Continuity from Above:</b> If $E_1 \\supseteq E_2 \\supseteq E_3 \\supseteq \\cdots$ are measurable and $m(E_1) < \\infty$, then $m\\left(\\bigcap_{n=1}^\\infty E_n\\right) = \\lim_{n \\to \\infty} m(E_n)$.</p><p><b>Counterexample when $m(E_1) = \\infty$:</b> Let $E_n = [n, \\infty)$. Each $E_n$ is measurable with $m(E_n) = \\infty$. The sequence is nested: $E_1 \\supset E_2 \\supset \\cdots$. But $\\bigcap_{n=1}^\\infty [n, \\infty) = \\emptyset$, which has measure $0$. However, $\\lim_{n \\to \\infty} m(E_n) = \\infty \\ne 0$.</p><p><b>(c) Borel\u2013Cantelli Lemma:</b> Let $B_k = \\bigcup_{n=k}^\\infty E_n$. Then $B_1 \\supseteq B_2 \\supseteq B_3 \\supseteq \\cdots$ is a decreasing sequence of measurable sets.</p><p>By countable subadditivity of measure: $$m(B_k) = m\\left(\\bigcup_{n=k}^\\infty E_n\\right) \\le \\sum_{n=k}^\\infty m(E_n)$$ Since the series $\\sum_{n=1}^\\infty m(E_n) < \\infty$ converges, the tail sum satisfies $\\lim_{k \\to \\infty} \\sum_{n=k}^\\infty m(E_n) = 0$.</p><p>In particular, $m(B_1) \\le \\sum_{n=1}^\\infty m(E_n) < \\infty$. By continuity of measure from above: $$m\\left(\\bigcap_{k=1}^\\infty B_k\\right) = \\lim_{k \\to \\infty} m(B_k) \\le \\lim_{k \\to \\infty} \\sum_{n=k}^\\infty m(E_n) = 0$$ Since measure is non-negative, $m\\left(\\limsup_{n\\to\\infty} E_n\\right) = 0$.</p>",
  "trap": "Always ensure $m(E_1) < \\infty$ before invoking continuity from above; ignoring this condition on unbounded sets is a classic entrance exam trap."
},
{
  "id": "q.rae.e6.04",
  "course": "rae",
  "module": "rae.t6",
  "sec": "E6",
  "marks": 5,
  "title": "Vitali's Construction of a Non-Measurable Set",
  "source": "GATE MA 2023 / Royden Ch. 3",
  "prompt": "Define an equivalence relation on $[0, 1]$ by $x \\sim y \\iff x - y \\in \\mathbb{Q}$.<br>(a) Use the Axiom of Choice to construct a Vitali set $V \\subset [0, 1]$.<br>(b) Enumerate $\\mathbb{Q} \\cap [-1, 1] = \\{r_k\\}_{k=1}^\\infty$ and prove that the shifted sets $V_k = V + r_k$ are pairwise disjoint.<br>(c) Prove that $[0, 1] \\subseteq \\bigcup_{k=1}^\\infty V_k \\subseteq [-1, 2]$ and conclude that $V$ cannot be Lebesgue measurable.",
  "tests": [
    "c.e6.3",
    "c.e6.4"
  ],
  "approach": "<p>Select exactly one representative from each equivalence class. Show that countable additivity leads to the impossible inequality $1 \\le \\sum m(V) \\le 3$.</p>",
  "solution": "<p><b>(a) Construction of the Vitali Set:</b> The relation $x \\sim y \\iff x - y \\in \\mathbb{Q}$ is an equivalence relation on $[0, 1]$. It partitions $[0, 1]$ into disjoint equivalence classes $E_x = \\{y \\in [0, 1] : y - x \\in \\mathbb{Q}\\}$.</p><p>By the Axiom of Choice, there exists a choice set $V \\subset [0, 1]$ containing exactly one element from each equivalence class.</p><p><b>(b) Disjoint Translates:</b> Let $\\{r_k\\}_{k=1}^\\infty$ be an enumeration of $\\mathbb{Q} \\cap [-1, 1]$. Define $V_k = V + r_k = \\{v + r_k : v \\in V\\}$.</p><p>Suppose for contradiction that $V_j \\cap V_k \\ne \\emptyset$ for $j \\ne k$. Then there exist $v, w \\in V$ such that $v + r_j = w + r_k$.</p><p>This gives $v - w = r_k - r_j \\in \\mathbb{Q}$, which means $v \\sim w$. But $V$ contains exactly one element from each equivalence class, so $v = w$. This implies $r_j = r_k$, so $j = k$, a contradiction. Thus $\\{V_k\\}_{k=1}^\\infty$ are pairwise disjoint.</p><p><b>(c) Non-Measurability of $V$:</b></p><p>1. Inclusion $[0, 1] \\subseteq \\bigcup_{k=1}^\\infty V_k$: For any $x \\in [0, 1]$, $x$ belongs to some equivalence class, whose representative in $V$ is $v$. Then $x - v = r \\in \\mathbb{Q}$. Since $x, v \\in [0, 1]$, $r = x - v \\in [-1, 1]$. Thus $r = r_k$ for some $k$, so $x = v + r_k \\in V_k$. Hence $[0, 1] \\subseteq \\bigcup_{k=1}^\\infty V_k$.</p><p>2. Inclusion $\\bigcup_{k=1}^\\infty V_k \\subseteq [-1, 2]$: For any $v + r_k \\in V_k$, $0 \\le v \\le 1$ and $-1 \\le r_k \\le 1$, so $-1 \\le v + r_k \\le 2$.</p><p>3. Contradiction: Suppose $V$ is Lebesgue measurable. By translation invariance of Lebesgue measure, each $V_k$ is measurable with $m(V_k) = m(V)$.</p><p>By monotonicity and countable additivity of measure: $$m([0, 1]) \\le m\\left(\\bigcup_{k=1}^\\infty V_k\\right) \\le m([-1, 2])$$ $$1 \\le \\sum_{k=1}^\\infty m(V_k) = \\sum_{k=1}^\\infty m(V) \\le 3$$ If $m(V) = 0$, then $\\sum m(V) = 0$, contradicting $1 \\le 0$. If $m(V) > 0$, then $\\sum m(V) = \\infty$, contradicting $\\infty \\le 3$.</p><p>In either case we reach a contradiction. Therefore $V$ is not Lebesgue measurable.</p>",
  "trap": "The Vitali set construction fundamentally relies on the Axiom of Choice; without AC, it is consistent with ZF set theory that all subsets of $\\mathbb{R}$ are Lebesgue measurable (Solovay's theorem)."
},
{
  "id": "q.rae.e6.05",
  "course": "rae",
  "module": "rae.t6",
  "sec": "E6",
  "marks": 5,
  "title": "Measurable Functions and Simple Function Approximation",
  "source": "JAM MA 2022 / Royden Ch. 3",
  "prompt": "Let $E \\subseteq \\mathbb{R}$ be a measurable set and $f: E \\to [0, \\infty]$ be a non-negative function.<br>(a) State the definition of a Lebesgue measurable function.<br>(b) Prove that $f$ is measurable if and only if there exists an increasing sequence of non-negative simple functions $(\\phi_n)$ such that $\\phi_n(x) \\uparrow f(x)$ pointwise for all $x \\in E$.<br>(c) Show that if $f$ is bounded, the convergence $\\phi_n \\to f$ is uniform on $E$.",
  "tests": [
    "c.e6.5"
  ],
  "approach": "<p>Slice the range $[0, 2^n)$ into $n 2^n$ subintervals of width $1/2^n$ and construct dyadic simple approximations $\\phi_n(x) = \\sum_{k=0}^{n 2^n - 1} \\frac{k}{2^n} \\mathbf{1}_{E_{n, k}} + n \\mathbf{1}_{\\{f \\ge n\\}}$.</p>",
  "solution": "<p><b>(a) Definition of Measurable Function:</b> A function $f: E \\to [-\\infty, \\infty]$ is <b>Lebesgue measurable</b> if for every $\\alpha \\in \\mathbb{R}$, the set $\\{x \\in E : f(x) > \\alpha\\}$ is a Lebesgue measurable set in $\\mathbb{R}$.</p><p><b>(b) Simple Function Approximation:</b></p><p>($\\impliedby$) Every simple function $\\phi = \\sum_{i=1}^m c_i \\mathbf{1}_{A_i}$ with measurable $A_i$ is measurable. The pointwise limit of a sequence of measurable functions is measurable, so $f = \\lim \\phi_n$ is measurable.</p><p>($\\implies$) Suppose $f \\ge 0$ is measurable. For each $n \\in \\mathbb{N}$ and for each $k \\in \\{0, 1, \\dots, n 2^n - 1\\}$, define: $$E_{n, k} = \\left\\{x \\in E : \\frac{k}{2^n} \\le f(x) < \\frac{k+1}{2^n}\\right\\} = f^{-1}\\left(\\left[\\frac{k}{2^n}, \\frac{k+1}{2^n}\\right)\\right)$$ and $F_n = \\{x \\in E : f(x) \\ge n\\} = f^{-1}([n, \\infty])$.</p><p>Since $f$ is measurable, each $E_{n, k}$ and $F_n$ are measurable sets. Define: $$\\phi_n(x) = \\sum_{k=0}^{n 2^n - 1} \\frac{k}{2^n} \\mathbf{1}_{E_{n, k}}(x) + n \\mathbf{1}_{F_n}(x)$$</p><p>1. Each $\\phi_n$ is a simple function since it takes only finitely many values.</p><p>2. $\\phi_n(x) \\le \\phi_{n+1}(x)$ for all $x$: In step $n+1$, each interval $\\left[\\frac{k}{2^n}, \\frac{k+1}{2^n}\\right)$ is split into two halves of width $1/2^{n+1}$. On the left half $\\phi_{n+1}$ equals $\\frac{k}{2^n} = \\phi_n$, while on the right half it equals $\\frac{k}{2^n} + \\frac{1}{2^{n+1}} > \\phi_n$. On $F_n$, $\\phi_{n+1} \\ge n = \\phi_n$. Thus $\\phi_n(x) \\le \\phi_{n+1}(x)$.</p><p>3. Pointwise convergence: For any $x \\in E$, if $f(x) < \\infty$, choose $N > f(x)$. For all $n \\ge N$, $x$ falls into some interval $\\left[\\frac{k}{2^n}, \\frac{k+1}{2^n}\\right)$, so $0 \\le f(x) - \\phi_n(x) < \\frac{1}{2^n} \\to 0$. If $f(x) = \\infty$, $\\phi_n(x) = n \\to \\infty$. Thus $\\phi_n(x) \\uparrow f(x)$ for all $x \\in E$.</p><p><b>(c) Uniform Convergence for Bounded Functions:</b> If $f$ is bounded on $E$, there exists $M < \\infty$ such that $0 \\le f(x) \\le M$ for all $x \\in E$. For all $n > M$, the set $F_n = \\emptyset$, and every $x \\in E$ satisfies: $$0 \\le f(x) - \\phi_n(x) < \\frac{1}{2^n}$$ Taking the supremum over all $x \\in E$: $\\|f - \\phi_n\\|_\\infty \\le \\frac{1}{2^n} \\to 0$ as $n \\to \\infty$. Thus the convergence is uniform on $E$.</p>",
  "trap": "The standard dyadic approximation yields MONOTONE increasing convergence $\\phi_n \\uparrow f$; uniform convergence is guaranteed only when $f$ is bounded."
},
{
  "id": "q.rae.e7.01",
  "course": "rae",
  "module": "rae.t7",
  "sec": "E7",
  "marks": 5,
  "title": "Dominated Convergence Theorem Application to Singular Integrals",
  "source": "GATE MA 2023 / Royden Ch. 4",
  "prompt": "Evaluate the limit and rigorously justify the interchange of limit and integral: $$\\lim_{n \\to \\infty} \\int_0^1 \\frac{n \\sin(x/n)}{1 + x^2} \\, dx$$",
  "tests": [
    "c.e7.4"
  ],
  "approach": "<p>Find the pointwise limit using $\\lim_{n\\to\\infty} n \\sin(x/n) = x$ and bound the integrand by the integrable dominating function $g(x) = 1$.</p>",
  "solution": "<p>Let $f_n(x) = \\frac{n \\sin(x/n)}{1 + x^2}$ on the interval $[0, 1]$.</p><p><b>1. Pointwise Limit:</b> For each fixed $x \\in (0, 1]$, as $n \\to \\infty$, $x/n \\to 0$. Using the standard limit $\\lim_{u \\to 0} \\frac{\\sin u}{u} = 1$: $$n \\sin(x/n) = x \\cdot \\frac{\\sin(x/n)}{x/n} \\longrightarrow x \\cdot 1 = x$$ For $x = 0$, $n \\sin(0) = 0 = x$. Therefore, the sequence $(f_n)$ converges pointwise almost everywhere on $[0, 1]$ to: $$f(x) = \\frac{x}{1 + x^2}$$</p><p><b>2. Dominating Function:</b> Recall the basic inequality $|\\sin u| \\le |u|$ for all $u \\ge 0$. For any $x \\in [0, 1]$ and $n \\in \\mathbb{N}$: $$n \\sin(x/n) \\le n \\left(\\frac{x}{n}\\right) = x \\le 1$$ Furthermore, $1 + x^2 \\ge 1$ for all $x \\in [0, 1]$. Hence: $$|f_n(x)| = \\frac{n \\sin(x/n)}{1 + x^2} \\le \\frac{x}{1} \\le 1 =: g(x)$$ The constant function $g(x) = 1$ is integrable on $[0, 1]$ since $\\int_0^1 1 \\, dx = 1 < \\infty$.</p><p><b>3. Applying the Dominated Convergence Theorem:</b> The functions $f_n$ are measurable, $f_n(x) \\to f(x)$ pointwise, and $|f_n(x)| \\le g(x)$ with $g \\in L^1[0, 1]$. By the Lebesgue Dominated Convergence Theorem: $$\\lim_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx = \\int_0^1 \\lim_{n \\to \\infty} f_n(x) \\, dx = \\int_0^1 \\frac{x}{1 + x^2} \\, dx$$</p><p><b>4. Evaluation:</b> $$\\int_0^1 \\frac{x}{1 + x^2} \\, dx = \\left[ \\frac{1}{2} \\ln(1 + x^2) \\right]_0^1 = \\frac{1}{2} (\\ln 2 - \\ln 1) = \\frac{1}{2} \\ln 2$$</p>",
  "trap": "Always verify both parts: (1) pointwise convergence, and (2) integrability of the dominator $\\int g < \\infty$."
},
{
  "id": "q.rae.e7.02",
  "course": "rae",
  "module": "rae.t7",
  "sec": "E7",
  "marks": 5,
  "title": "Fatou's Lemma and Strict Inequality Analysis",
  "source": "GATE MA 2021 / Royden Ch. 4",
  "prompt": "Let $(f_n)$ be a sequence of non-negative measurable functions on a measure space $(X, \\mathcal{M}, \\mu)$.<br>(a) State <b>Fatou's Lemma</b>.<br>(b) For $X = (0, 1)$ with Lebesgue measure, let $f_n(x) = n \\, \\mathbf{1}_{(0, 1/n)}(x)$. Compute $\\int_0^1 \\liminf_{n \\to \\infty} f_n(x) \\, dx$ and $\\liminf_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx$, and verify that strict inequality holds.<br>(c) Explain physically and geometrically why 'mass escapes' in this counterexample.",
  "tests": [
    "c.e7.1",
    "c.e7.2"
  ],
  "approach": "<p>Compute the pointwise limit: for any fixed $x > 0$, $f_n(x) = 0$ for $n > 1/x$. Then compute the integral of each $f_n$ directly.</p>",
  "solution": "<p><b>(a) Fatou's Lemma:</b> If $(f_n)$ is a sequence of non-negative measurable functions on $(X, \\mathcal{M}, \\mu)$, then: $$\\int_X \\liminf_{n \\to \\infty} f_n \\, d\\mu \\le \\liminf_{n \\to \\infty} \\int_X f_n \\, d\\mu$$</p><p><b>(b) Computation:</b></p><p>1. Pointwise Limit: Take any fixed $x \\in (0, 1)$. By the Archimedean property, there exists $N \\in \\mathbb{N}$ such that $1/N < x$. For all $n \\ge N$, $x \\notin (0, 1/n)$, which means $f_n(x) = 0$.</p><p>Therefore, for every $x \\in (0, 1)$, $\\lim_{n \\to \\infty} f_n(x) = 0$. Thus: $$\\liminf_{n \\to \\infty} f_n(x) = 0 \\implies \\int_0^1 \\liminf_{n \\to \\infty} f_n(x) \\, dx = \\int_0^1 0 \\, dx = 0$$</p><p>2. Limit of Integrals: For each $n \\in \\mathbb{N}$: $$\\int_0^1 f_n(x) \\, dx = \\int_0^{1/n} n \\, dx = n \\cdot \\frac{1}{n} = 1$$ Therefore: $$\\liminf_{n \\to \\infty} \\int_0^1 f_n(x) \\, dx = \\lim_{n \\to \\infty} 1 = 1$$</p><p>Comparing the two quantities: $$0 = \\int_0^1 \\liminf f_n \\, dx < \\liminf \\int_0^1 f_n \\, dx = 1$$ This confirms that strict inequality $0 < 1$ can and does occur in Fatou's Lemma.</p><p><b>(c) Geometric Intuition:</b> The sequence $f_n$ represents a traveling or narrowing spike of height $n$ and width $1/n$. The total area under the graph is always $1$. However, as $n \\to \\infty$, the spike is squeezed against the boundary $x = 0$. At any fixed point $x > 0$, the spike eventually passes to the left and disappears, resulting in a pointwise limit of $0$. The integral 'loses mass' because the mass concentrates into a singularity of measure zero at the origin.</p>",
  "trap": "Fatou's Lemma only guarantees $\\le$, NEVER equality; equality requires uniform integrability or an integrable dominating function (as in DCT)."
},
{
  "id": "q.rae.e7.03",
  "course": "rae",
  "module": "rae.t7",
  "sec": "E7",
  "marks": 5,
  "title": "Monotone Convergence Theorem and Series Integration",
  "source": "GATE MA 2022 / Rudin Ch. 11",
  "prompt": "(a) State the <b>Monotone Convergence Theorem (MCT)</b>.<br>(b) Use the MCT to prove the <b>Tonelli series theorem</b>: if $(u_k)_{k=1}^\\infty$ is a sequence of non-negative measurable functions, then: $$\\int_X \\left(\\sum_{k=1}^\\infty u_k(x)\\right) \\, d\\mu = \\sum_{k=1}^\\infty \\int_X u_k(x) \\, d\\mu$$<br>(c) Apply this result to evaluate: $$\\int_0^1 \\frac{\\ln(1/x)}{1 - x} \\, dx = \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$",
  "tests": [
    "c.e7.1",
    "c.e7.3"
  ],
  "approach": "<p>Apply MCT to the partial sums $s_n(x) = \\sum_{k=1}^n u_k(x)$. For (c), expand $\\frac{1}{1-x} = \\sum_{k=0}^\\infty x^k$ and integrate by parts.</p>",
  "solution": "<p><b>(a) Monotone Convergence Theorem:</b> If $(f_n)$ is a sequence of measurable functions on $(X, \\mathcal{M}, \\mu)$ such that $0 \\le f_1(x) \\le f_2(x) \\le f_3(x) \\le \\cdots$ for all $x \\in X$, and $f_n(x) \\to f(x)$ pointwise, then: $$\\lim_{n \\to \\infty} \\int_X f_n \\, d\\mu = \\int_X f \\, d\\mu$$</p><p><b>(b) Tonelli Series Theorem:</b> Let $s_n(x) = \\sum_{k=1}^n u_k(x)$ be the $n$-th partial sum. Since each $u_k(x) \\ge 0$, we have: $$0 \\le s_1(x) \\le s_2(x) \\le s_3(x) \\le \\cdots$$ Furthermore, by definition of infinite series, $s_n(x) \\uparrow \\sum_{k=1}^\\infty u_k(x) =: S(x)$ pointwise. By linearity of the integral for finite sums: $$\\int_X s_n \\, d\\mu = \\int_X \\left( \\sum_{k=1}^n u_k \\right) d\\mu = \\sum_{k=1}^n \\int_X u_k \\, d\\mu$$ Applying the Monotone Convergence Theorem to $(s_n)$: $$\\int_X S \\, d\\mu = \\lim_{n \\to \\infty} \\int_X s_n \\, d\\mu = \\lim_{n \\to \\infty} \\sum_{k=1}^n \\int_X u_k \\, d\\mu = \\sum_{k=1}^\\infty \\int_X u_k \\, d\\mu$$</p><p><b>(c) Evaluation of the Integral:</b> For $x \\in (0, 1)$, expand $\\frac{1}{1 - x} = \\sum_{k=0}^\\infty x^k$. Then: $$\\frac{\\ln(1/x)}{1 - x} = \\sum_{k=0}^\\infty x^k \\ln(1/x) = \\sum_{k=0}^\\infty (-x^k \\ln x)$$ Since each term $u_k(x) = -x^k \\ln x \\ge 0$ for $x \\in (0, 1)$, by part (b) we can swap integral and sum: $$\\int_0^1 \\frac{\\ln(1/x)}{1 - x} \\, dx = \\sum_{k=0}^\\infty \\int_0^1 -x^k \\ln x \\, dx$$ Using integration by parts with $u = \\ln x, dv = -x^k dx$: $$\\int_0^1 -x^k \\ln x \\, dx = \\left[ -\\frac{x^{k+1}}{k+1} \\ln x \\right]_0^1 + \\int_0^1 \\frac{x^{k+1}}{k+1} \\frac{1}{x} \\, dx = 0 + \\frac{1}{k+1} \\left[ \\frac{x^{k+1}}{k+1} \\right]_0^1 = \\frac{1}{(k+1)^2}$$ Summing from $k = 0$ to $\\infty$ (substituting $n = k + 1$): $$\\sum_{k=0}^\\infty \\frac{1}{(k+1)^2} = \\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}$$</p>",
  "trap": "Interchanging summation and integration for non-negative terms requires ONLY non-negativity (MCT/Tonelli); uniform convergence is NOT required."
},
{
  "id": "q.rae.e7.04",
  "course": "rae",
  "module": "rae.t7",
  "sec": "E7",
  "marks": 5,
  "title": "Lebesgue's Criterion for Riemann Integrability: Thomae's Function",
  "source": "GATE MA 2021 / Bartle & Sherbert 4e \u00a77.4",
  "prompt": "Consider Thomae's (popcorn) function on $[0, 1]$: $$f(x) = \\begin{cases} 1/q & \\text{if } x = p/q \\in \\mathbb{Q} \\text{ in lowest terms } (p, q \\in \\mathbb{N}, \\gcd(p, q) = 1) \\\\ 0 & \\text{if } x \\notin \\mathbb{Q} \\text{ or } x = 0 \\end{cases}$$<br>(a) State <b>Lebesgue's Criterion for Riemann Integrability</b>.<br>(b) Prove that $f$ is continuous at every irrational point and discontinuous at every rational point in $(0, 1]$.<br>(c) Conclude whether $f$ is Riemann integrable on $[0, 1]$, and if so, compute $\\int_0^1 f(x) \\, dx$.",
  "tests": [
    "c.e7.5"
  ],
  "approach": "<p>For any $\\varepsilon > 0$, show only finitely many rationals have $1/q \\ge \\varepsilon$. Apply Lebesgue's criterion: $f$ is bounded and its discontinuities $\\mathbb{Q} \\cap [0, 1]$ have measure zero.</p>",
  "solution": "<p><b>(a) Lebesgue's Criterion for Riemann Integrability:</b> A bounded function $f: [a, b] \\to \\mathbb{R}$ is Riemann integrable on $[a, b]$ if and only if its set of discontinuities $D = \\{x \\in [a, b] : f \\text{ is discontinuous at } x\\}$ has Lebesgue measure zero ($m(D) = 0$).</p><p><b>(b) Continuity Analysis:</b></p><p>1. At Rational Points $x_0 = p/q \\in \\mathbb{Q}$: We have $f(x_0) = 1/q > 0$. In every open ball around $x_0$, there exist irrational numbers $x_n$ where $f(x_n) = 0$. Thus $\\lim_{n\\to\\infty} f(x_n) = 0 \\ne f(x_0)$, so $f$ is discontinuous at every rational point.</p><p>2. At Irrational Points $x_0 \\notin \\mathbb{Q}$: We have $f(x_0) = 0$. Let $\\varepsilon > 0$. By the Archimedean property, choose $N \\in \\mathbb{N}$ such that $1/N < \\varepsilon$. The set of points in $[0, 1]$ where $f(x) \\ge \\varepsilon$ is: $$S_N = \\{p/q \\in [0, 1] : q \\le N\\}$$ Since there are only finitely many denominators $q \\le N$, $S_N$ is a finite set of points. Because $x_0$ is irrational, $x_0 \\notin S_N$. Define $\\delta = \\min_{s \\in S_N} |x_0 - s| > 0$. For all $x \\in [0, 1]$ with $|x - x_0| < \\delta$, $x \\notin S_N$, which means $f(x) < \\varepsilon$. Thus $|f(x) - f(x_0)| = f(x) < \\varepsilon$, proving $f$ is continuous at $x_0$.</p><p><b>(c) Integrability and Value:</b> The set of discontinuities of $f$ is $D = \\mathbb{Q} \\cap [0, 1]$. Since $\\mathbb{Q}$ is countable, $m(D) = 0$. Since $f$ is bounded ($0 \\le f(x) \\le 1$) and its discontinuity set has Lebesgue measure zero, Lebesgue's Criterion guarantees that $f$ is Riemann integrable on $[0, 1]$.</p><p>To find the integral: since $f(x) = 0$ for all irrationals, $f(x) = 0$ almost everywhere. Therefore: $$\\int_0^1 f(x) \\, dx = 0$$</p>",
  "trap": "Even though $f$ is discontinuous at densely many points (all rationals), it IS Riemann integrable because the set of discontinuities is countable, hence of measure zero!"
},
{
  "id": "q.rae.e7.05",
  "course": "rae",
  "module": "rae.t7",
  "sec": "E7",
  "marks": 5,
  "title": "Completeness of L\u00b9 and the Riesz\u2013Fischer Theorem",
  "source": "GATE MA 2020 / Royden Ch. 6",
  "prompt": "Let $(X, \\mathcal{M}, \\mu)$ be a measure space.<br>(a) Define the normed space $L^1(X, \\mu)$ and its norm $\\|f\\|_1$.<br>(b) Prove the <b>Riesz\u2013Fischer Theorem</b> for $p = 1$: the space $L^1(X, \\mu)$ is complete (a Banach space).<br>(c) Prove that if $f_n \\to f$ in $L^1$, then there exists a subsequence $(f_{n_k})$ that converges to $f$ pointwise almost everywhere.",
  "tests": [
    "c.e7.4",
    "c.e7.5"
  ],
  "approach": "<p>Given a Cauchy sequence $(f_n)$, extract a rapidly Cauchy subsequence with $\\|f_{n_{k+1}} - f_{n_k}\\|_1 < 2^{-k}$. Use the Monotone Convergence Theorem to sum the absolute differences, then Dominated Convergence.</p>",
  "solution": "<p><b>(a) Definition of $L^1$:</b> $L^1(X, \\mu)$ is the space of equivalence classes of measurable functions $f: X \\to \\mathbb{R}$ (identifying functions that agree $\\mu$-almost everywhere) such that: $$\\int_X |f| \\, d\\mu < \\infty$$ equipped with the norm $\\|f\\|_1 = \\int_X |f| \\, d\\mu$.</p><p><b>(b) & (c) Proof of Completeness and Pointwise a.e. Subsequence:</b></p><p>Let $(f_n)$ be a Cauchy sequence in $L^1(X, \\mu)$. We can extract a subsequence $(f_{n_k})$ such that: $$\\|f_{n_{k+1}} - f_{n_k}\\|_1 < \\frac{1}{2^k} \\quad \\text{for all } k \\in \\mathbb{N}$$</p><p>Define $g_K(x) = \\sum_{k=1}^K |f_{n_{k+1}}(x) - f_{n_k}(x)|$. The sequence $(g_K)$ is non-negative and monotonically increasing. By the triangle inequality: $$\\int_X g_K \\, d\\mu = \\sum_{k=1}^K \\|f_{n_{k+1}} - f_{n_k}\\|_1 < \\sum_{k=1}^K \\frac{1}{2^k} < 1$$ By the Monotone Convergence Theorem, $g(x) = \\lim_{K \\to \\infty} g_K(x) = \\sum_{k=1}^\\infty |f_{n_{k+1}}(x) - f_{n_k}(x)|$ satisfies: $$\\int_X g \\, d\\mu = \\lim_{K \\to \\infty} \\int_X g_K \\, d\\mu \\le 1 < \\infty$$ Since $\\int_X g \\, d\\mu < \\infty$, $g(x) < \\infty$ for $\\mu$-almost every $x \\in X$.</p><p>For any $x$ where $g(x) < \\infty$, the series $\\sum_{k=1}^\\infty (f_{n_{k+1}}(x) - f_{n_k}(x))$ converges absolutely in $\\mathbb{R}$.</p><p>The $K$-th partial sum telescopes: $$f_{n_1}(x) + \\sum_{k=1}^{K-1} (f_{n_{k+1}}(x) - f_{n_k}(x)) = f_{n_K}(x)$$ Hence, the subsequence $(f_{n_k}(x))$ converges pointwise almost everywhere to a limit function $f(x) := f_{n_1}(x) + \\sum_{k=1}^\\infty (f_{n_{k+1}}(x) - f_{n_k}(x))$.</p><p>Now we show $f_n \\to f$ in $L^1$: for almost every $x$, $|f(x) - f_{n_k}(x)| \\le \\sum_{j=k}^\\infty |f_{n_{j+1}}(x) - f_{n_j}(x)| \\le g(x)$. By the Dominated Convergence Theorem: $$\\lim_{k \\to \\infty} \\|f - f_{n_k}\\|_1 = \\lim_{k \\to \\infty} \\int_X |f - f_{n_k}| \\, d\\mu = 0$$ Since $(f_n)$ is Cauchy and a subsequence converges to $f$ in $L^1$, the entire sequence $(f_n)$ converges to $f$ in $L^1$. Thus $L^1(X, \\mu)$ is complete.</p>",
  "trap": "$L^1$ convergence does NOT imply pointwise convergence everywhere; it guarantees pointwise convergence ONLY along a suitable subsequence and almost everywhere."
}
);

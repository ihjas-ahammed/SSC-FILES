/* Real Analysis II · Module IV & Extension — Sequences/Series of Functions (Bartle Ch 8 & 9) */
QUESTIONS.push(
{
  id: 'q.ra2.m4.01',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.1',
  marks: 5,
  title: 'Non-Uniform Convergence of xⁿ on [0, 1]',
  source: 'Bartle & Sherbert 4e §8.1 Ex 2',
  prompt: `Let $f_n(x) := x^n$ for $x \\in [0, 1]$.<br>(a) Find the pointwise limit function $f(x) = \\lim_{n\\to\\infty} f_n(x)$.<br>(b) Prove that the convergence is NOT uniform on $[0, 1]$.<br>(c) Show that the convergence IS uniform on $[0, a]$ for any $0 < a < 1$.`,
  tests: [
    'c.8.1.3',
    'c.8.1.5',
    'c.8.2.2'
  ],
  approach: `<p>Examine the continuity of the limit function and compute the uniform norm $\\|f_n - f\\|_\\infty$.</p>`,
  solution: `<p><b>(a)</b> For $x \\in [0, 1)$, $x^n \\to 0$. For $x = 1$, $1^n = 1 \\to 1$. Thus $f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1$.</p><p><b>(b) Method 1 (Uniform Limit Theorem):</b> Each $f_n(x) = x^n$ is continuous on $[0, 1]$, but the limit function $f$ is discontinuous at $x = 1$. By the Uniform Limit Theorem, $f_n$ cannot converge uniformly on $[0, 1]$.</p><p><b>Method 2 (Sup-norm):</b> $\\|f_n - f\\|_\\infty = \\sup_{x \\in [0, 1)} x^n = 1 \\not\\to 0$.</p><p><b>(c)</b> On $[0, a]$ where $0 < a < 1$, $f(x) = 0$, so $\\|f_n - f\\|_{[0, a]} = \\sup_{x \\in [0, a]} x^n = a^n$. Since $a < 1$, $a^n \\to 0$ as $n \\to \\infty$. Hence $f_n \\to 0$ uniformly on $[0, a]$.</p>`,
  trap: 'A sequence of continuous functions can converge pointwise to a discontinuous function, which immediately disproves uniform convergence.'
},
{
  id: 'q.ra2.m4.02',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.1',
  marks: 5,
  title: 'Pointwise vs Uniform Convergence of nx/(1 + n²x²)',
  source: 'Bartle & Sherbert 4e §8.1 Ex 2 & 12',
  prompt: `Let $f_n(x) := \\frac{nx}{1 + n^2 x^2}$ for $x \\in [0, \\infty)$.<br>(a) Find the pointwise limit $f(x) = \\lim_{n\\to\\infty} f_n(x)$ on $[0, \\infty)$.<br>(b) Prove that $(f_n)$ does NOT converge uniformly to $f$ on $[0, \\infty)$.<br>(c) Prove that $(f_n)$ converges uniformly to $f$ on $[a, \\infty)$ for any $a > 0$.`,
  tests: [
    'c.8.1.3',
    'c.8.1.5'
  ],
  approach: `<p>Find the peak of $f_n(x)$ using calculus and examine the supremum norm on $[0, \\infty)$ versus $[a, \\infty)$.</p>`,
  solution: `<p><b>(a)</b> For $x = 0$, $f_n(0) = 0 \\to 0$. For $x > 0$:</p><p>$$f_n(x) = \\frac{nx}{1 + n^2 x^2} = \\frac{x/n}{1/n^2 + x^2} \\to \\frac{0}{x^2} = 0 \\quad \\text{as } n \\to \\infty$$</p><p>Thus the pointwise limit is $f(x) = 0$ for all $x \\in [0, \\infty)$.</p><p><b>(b)</b> Differentiating to find the maximum: $f_n'(x) = \\frac{n(1 + n^2 x^2) - nx(2n^2 x)}{(1 + n^2 x^2)^2} = \\frac{n(1 - n^2 x^2)}{(1 + n^2 x^2)^2}$. Setting $f_n'(x) = 0$ yields $x_n = 1/n$.</p><p>Evaluating $f_n$ at $x_n = 1/n$:</p><p>$$f_n(1/n) = \\frac{n(1/n)}{1 + n^2(1/n^2)} = \\frac{1}{1 + 1} = \\frac{1}{2}$$</p><p>Thus $\\|f_n - f\\|_{[0, \\infty)} = \\sup_{x \\ge 0} |f_n(x)| \\ge f_n(1/n) = 1/2$. Since $1/2 \\not\\to 0$ as $n \\to \\infty$, $(f_n)$ does not converge uniformly to $0$ on $[0, \\infty)$.</p><p><b>(c)</b> Let $a > 0$. Choose $K \\in \\mathbb{N}$ such that $1/K < a$. For all $n \\ge K$, the maximum point $1/n$ lies strictly to the left of $[a, \\infty)$, so $f_n(x)$ is strictly decreasing on $[a, \\infty)$. Thus:</p><p>$$\\|f_n - f\\|_{[a, \\infty)} = \\sup_{x \\ge a} f_n(x) = f_n(a) = \\frac{na}{1 + n^2 a^2} < \\frac{na}{n^2 a^2} = \\frac{1}{na}$$</p><p>Since $\\lim_{n\\to\\infty} \\frac{1}{na} = 0$, $f_n \\to 0$ uniformly on $[a, \\infty)$.</p>`,
  trap: 'The limit function $f(x) = 0$ is continuous everywhere, so continuity of the limit alone is NOT sufficient to guarantee uniform convergence.'
},
{
  id: 'q.ra2.m4.03',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.1',
  marks: 5,
  title: 'Uniform Convergence of xe⁻ⁿˣ on [0, ∞)',
  source: 'Bartle & Sherbert 4e §8.1 Ex 8 & 18',
  prompt: `Let $f_n(x) := x e^{-nx}$ for $x \\in [0, \\infty)$. Prove that $(f_n)$ converges uniformly to $0$ on $[0, \\infty)$.`,
  tests: [
    'c.8.1.5'
  ],
  approach: `<p>Use calculus to find the absolute maximum of $f_n(x)$ on $[0, \\infty)$ and compute $\\|f_n\\|_\\infty$.</p>`,
  solution: `<p>For each $n \\in \\mathbb{N}$, $f_n(0) = 0$. For $x > 0$, since $e^{nx} > \\frac{n^2 x^2}{2}$, we have $0 < x e^{-nx} < \\frac{2}{n^2 x} \\to 0$ as $n \\to \\infty$. Thus the pointwise limit is $f(x) = 0$ for all $x \\ge 0$.</p><p>To test uniform convergence, find the critical points of $f_n$ on $[0, \\infty)$:</p><p>$$f_n'(x) = e^{-nx} + x(-n e^{-nx}) = (1 - nx)e^{-nx}$$</p><p>Setting $f_n'(x) = 0$ gives the unique critical point $x_n = 1/n$. For $0 \\le x < 1/n$, $f_n'(x) > 0$; for $x > 1/n$, $f_n'(x) < 0$. Thus $f_n$ attains its global maximum at $x_n = 1/n$:</p><p>$$\\|f_n - 0\\|_{[0, \\infty)} = \\sup_{x \\ge 0} |f_n(x)| = f_n(1/n) = \\frac{1}{n} e^{-n(1/n)} = \\frac{1}{n e}$$</p><p>As $n \\to \\infty$:</p><p>$$\\lim_{n\\to\\infty} \\|f_n - 0\\|_\\infty = \\lim_{n\\to\\infty} \\frac{1}{ne} = 0$$</p><p>By the Sup-norm lemma (Theorem 8.1.5), $(f_n)$ converges uniformly to $0$ on $[0, \\infty)$.</p>`,
  trap: 'Comparing with $e^{-nx}$ without the $x$ factor; $e^{-nx}$ is not uniformly convergent on $[0, \\infty)$ because $e^{-n(0)} = 1$, but $x e^{-nx}$ is uniformly convergent because the factor $x$ pinches the peak near the origin.'
},
{
  id: 'q.ra2.m4.04',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.1',
  marks: 5,
  title: 'Uniform Convergence of Products: Counterexample and Bounded Theorem',
  source: 'Bartle & Sherbert 4e §8.1 Ex 22 & 23',
  prompt: `(a) Let $f_n(x) := x + 1/n$ and $f(x) := x$ on $\\mathbb{R}$. Show that $f_n \\to f$ uniformly on $\\mathbb{R}$, but the sequence of products $(f_n^2)$ does NOT converge uniformly to $f^2$ on $\\mathbb{R}$.<br>(b) Prove that if $(f_n)$ and $(g_n)$ are uniformly convergent sequences of bounded functions on a set $A$, then $(f_n g_n)$ converges uniformly to $fg$ on $A$.`,
  tests: [
    'c.8.1.5'
  ],
  approach: `<p>For (a), compute $\\|f_n^2 - f^2\\|_\\infty$. For (b), add and subtract $f_n g$ and bound using common bounds $M_f, M_g$.</p>`,
  solution: `<p><b>(a)</b> For all $x \\in \\mathbb{R}$, $|f_n(x) - f(x)| = |(x + 1/n) - x| = 1/n$. Thus $\\|f_n - f\\|_\\mathbb{R} = 1/n \\to 0$, so $f_n \\to f$ uniformly on $\\mathbb{R}$.</p><p>Now consider $f_n^2(x) - f^2(x) = (x + 1/n)^2 - x^2 = \\frac{2x}{n} + \\frac{1}{n^2}$. For any fixed $n \\in \\mathbb{N}$, as $x \\to \\infty$, this difference tends to $\\infty$, so $\\sup_{x \\in \\mathbb{R}} |f_n^2(x) - f^2(x)| = \\infty$. Since the sup-norm does not converge to $0$, $(f_n^2)$ does NOT converge uniformly on $\\mathbb{R}$.</p><p><b>(b)</b> Since $(f_n)$ and $(g_n)$ are uniformly convergent and bounded, their limit functions $f$ and $g$ are bounded on $A$. Choose $M > 0$ such that $|f_n(x)| \\le M$ and $|g(x)| \\le M$ for all $n \\in \\mathbb{N}$ and all $x \\in A$.</p><p>Let $\\varepsilon > 0$. Choose $K \\in \\mathbb{N}$ such that for all $n \\ge K$ and all $x \\in A$:</p><p>$$|f_n(x) - f(x)| < \\frac{\\varepsilon}{2M} \\quad \\text{and} \\quad |g_n(x) - g(x)| < \\frac{\\varepsilon}{2M}$$</p><p>Then for all $n \\ge K$ and all $x \\in A$:</p><p>$$|f_n(x)g_n(x) - f(x)g(x)| = |f_n(x)(g_n(x) - g(x)) + g(x)(f_n(x) - f(x))|$$</p><p>$$\\le |f_n(x)| |g_n(x) - g(x)| + |g(x)| |f_n(x) - f(x)| < M \\cdot \\frac{\\varepsilon}{2M} + M \\cdot \\frac{\\varepsilon}{2M} = \\varepsilon$$</p><p>Hence $f_n g_n \\to fg$ uniformly on $A$.</p>`,
  trap: 'Assuming that products of uniformly convergent sequences always converge uniformly; boundedness of the factors is indispensable.'
},
{
  id: 'q.ra2.m4.05',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.2',
  marks: 5,
  title: 'Interchange of Limit and Integral',
  source: 'Bartle & Sherbert 4e §8.2 Ex 3',
  prompt: `Prove that if $(f_n)$ is a sequence of continuous functions converging uniformly to $f$ on $[a, b]$, then $\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx$.`,
  tests: [
    'c.8.2.4'
  ],
  approach: `<p>Estimate $\\left| \\int_a^b f_n - \\int_a^b f \\right| \\le \\int_a^b |f_n - f| \\le (b - a) \\|f_n - f\\|_\\infty$.</p>`,
  solution: `<p>By the Uniform Limit Theorem, the uniform limit $f$ is continuous on $[a, b]$, hence Riemann integrable.</p><p>Using linearity and the Triangle Inequality for integrals:</p><p>$$\\left| \\int_a^b f_n(x) \\, dx - \\int_a^b f(x) \\, dx \\right| = \\left| \\int_a^b (f_n(x) - f(x)) \\, dx \\right| \\le \\int_a^b |f_n(x) - f(x)| \\, dx$$</p><p>Since $f_n \\to f$ uniformly on $[a, b]$, let $\\varepsilon > 0$ and choose $K$ such that for all $n \\ge K$ and all $x \\in [a, b]$:</p><p>$$|f_n(x) - f(x)| < \\frac{\\varepsilon}{b - a}$$</p><p>Then for all $n \\ge K$:</p><p>$$\\left| \\int_a^b f_n(x) \\, dx - \\int_a^b f(x) \\, dx \\right| \\le \\int_a^b \\frac{\\varepsilon}{b - a} \\, dx = \\varepsilon$$</p><p>Hence $\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx$.</p>`,
  trap: 'Pointwise convergence is NOT enough! For example, $f_n(x) = 2n^2 x e^{-n^2 x^2}$ on $[0, 1]$ converges pointwise to $0$, but $\\int_0^1 f_n = 1 - e^{-n^2} \\to 1 \\ne 0$.'
},
{
  id: 'q.ra2.m4.06',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.2',
  marks: 5,
  title: 'Everywhere Discontinuous Functions with Uniform Limit',
  source: 'Bartle & Sherbert 4e §8.2 Ex 3',
  prompt: `Construct a sequence of functions $(f_n)$ on $[0, 1]$ such that each $f_n$ is discontinuous at EVERY point of $[0, 1]$, yet $(f_n)$ converges uniformly on $[0, 1]$ to a function $f$ that is continuous at every point.`,
  tests: [
    'c.8.2.2'
  ],
  approach: `<p>Scale Dirichlet's function by $1/n$.</p>`,
  solution: `<p>Let $D: [0, 1] \\to \\mathbb{R}$ be Dirichlet's function: $D(x) = 1$ if $x \\in \\mathbb{Q} \\cap [0, 1]$ and $D(x) = 0$ if $x \\notin \\mathbb{Q} \\cap [0, 1]$. By the density of both rationals and irrationals, $D$ is discontinuous at every point of $[0, 1]$.</p><p>For each $n \\in \\mathbb{N}$, define $f_n(x) := \\frac{1}{n} D(x)$ for $x \\in [0, 1]$.</p><p>At every point $c \\in [0, 1]$, in any neighborhood of $c$ there are points where $f_n = 1/n$ and points where $f_n = 0$. Since $1/n \\ne 0$, $\\lim_{x\\to c} f_n(x)$ does not exist. Thus each $f_n$ is discontinuous at every point of $[0, 1]$.</p><p>Now define $f(x) := 0$ for all $x \\in [0, 1]$. The zero function $f$ is continuous everywhere on $[0, 1]$.</p><p>Compute the uniform norm:</p><p>$$\\|f_n - f\\|_{[0, 1]} = \\sup_{x \\in [0, 1]} |f_n(x) - 0| = \\sup_{x \\in [0, 1]} \\frac{1}{n} D(x) = \\frac{1}{n}$$</p><p>Since $\\lim_{n\\to\\infty} \\|f_n - f\\| = \\lim_{n\\to\\infty} 1/n = 0$, the sequence $(f_n)$ converges uniformly on $[0, 1]$ to the continuous function $f$.</p>`,
  trap: 'Believing that uniform convergence preserves discontinuity; uniform convergence preserves continuity from terms to limit, but discontinuous terms can easily converge uniformly to a continuous function.'
},
{
  id: 'q.ra2.m4.07',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.2',
  marks: 5,
  title: 'Failure of Derivative Interchange: xⁿ/n on [0, 1]',
  source: 'Bartle & Sherbert 4e §8.2 Ex 9',
  prompt: `Let $f_n(x) := \\frac{x^n}{n}$ for $x \\in [0, 1]$. Show that $(f_n)$ converges uniformly to a differentiable function $f$ on $[0, 1]$, and that the sequence of derivatives $(f_n')$ converges pointwise to a function $g$, but that $g(1) \\ne f'(1)$.`,
  tests: [
    'c.8.2.5'
  ],
  approach: `<p>Compute the uniform limit of $f_n(x)$ and the pointwise limit of $f_n'(x) = x^{n-1}$.</p>`,
  solution: `<p>For each $n \\in \\mathbb{N}$, $f_n$ is differentiable on $[0, 1]$ with $f_n'(x) = \\frac{n x^{n-1}}{n} = x^{n-1}$.</p><p><b>Convergence of $(f_n)$:</b> On $[0, 1]$, $0 \\le x^n \\le 1$, so:</p><p>$$\\|f_n - 0\\|_{[0, 1]} = \\sup_{x \\in [0, 1]} \\frac{x^n}{n} = \\frac{1}{n}$$</p><p>Since $1/n \\to 0$, $f_n \\to f$ uniformly on $[0, 1]$, where $f(x) = 0$ for all $x \\in [0, 1]$. The limit function $f$ is differentiable everywhere with derivative $f'(x) = 0$ for all $x \\in [0, 1]$, so $f'(1) = 0$.</p><p><b>Convergence of $(f_n')$:</b> For $x \\in [0, 1)$, $\\lim_{n\\to\\infty} f_n'(x) = \\lim_{n\\to\\infty} x^{n-1} = 0$. For $x = 1$, $f_n'(1) = 1^{n-1} = 1$ for all $n$, so $\\lim_{n\\to\\infty} f_n'(1) = 1$.</p><p>Thus the sequence of derivatives converges pointwise to:</p><p>$$g(x) = \\begin{cases} 0 & \\text{if } 0 \\le x < 1 \\\\ 1 & \\text{if } x = 1 \\end{cases}$$</p><p>Evaluating at $x = 1$ gives $g(1) = 1 \\ne 0 = f'(1)$.</p><p>This demonstrates that uniform convergence of $(f_n)$ is NOT sufficient to guarantee that $(f_n') \\to f'$; uniform convergence of $(f_n')$ is required.</p>`,
  trap: 'Assuming that uniform convergence of $f_n \\to f$ implies $f_n\' \\to f\'$; derivatives can fail to converge to $f\'$ or even diverge completely.'
},
{
  id: 'q.ra2.m4.08',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.2',
  marks: 5,
  title: 'Failure of Monotone Convergence for the Riemann Integral',
  source: 'Bartle & Sherbert 4e §8.2 Ex 16',
  prompt: `Let $\\{r_1, r_2, r_3, \\dots\\}$ be an enumeration of the rational numbers in $[0, 1]$. Define $f_n: [0, 1] \\to \\mathbb{R}$ by $f_n(x) := 1$ if $x \\in \\{r_1, \\dots, r_n\\}$ and $f_n(x) := 0$ otherwise.<br>(a) Show that each $f_n \\in \\mathcal{R}[0, 1]$ and compute $\\int_0^1 f_n$.<br>(b) Show that $f_1(x) \\le f_2(x) \\le \\dots \\le f_n(x) \\le \\dots$ for all $x \\in [0, 1]$.<br>(c) Show that the pointwise limit $f(x) = \\lim_{n\\to\\infty} f_n(x)$ is Dirichlet's function, which is NOT Riemann integrable.`,
  tests: [
    'c.8.2.4',
    'c.7.1.4'
  ],
  approach: `<p>Relate $f_n$ to functions with finitely many non-zero values, and identify the pointwise limit with the characteristic function of rationals.</p>`,
  solution: `<p><b>(a)</b> Each $f_n$ is bounded on $[0, 1]$ and non-zero at only $n$ points $\\{r_1, \\dots, r_n\\}$. A bounded function on a compact interval that vanishes except at a finite set of points is Riemann integrable with integral $0$. Thus $f_n \\in \\mathcal{R}[0, 1]$ and $\\int_0^1 f_n = 0$ for every $n \\in \\mathbb{N}$.</p><p><b>(b)</b> For any $x \\in [0, 1]$, if $x \\in \\{r_1, \\dots, r_n\\}$, then $x \\in \\{r_1, \\dots, r_{n+1}\\}$, so $f_n(x) = 1 = f_{n+1}(x)$. If $x \\notin \\{r_1, \\dots, r_n\\}$, then $f_n(x) = 0 \\le f_{n+1}(x)$. Thus $f_n(x) \\le f_{n+1}(x)$ for all $x \\in [0, 1]$, so $(f_n)$ is monotonically increasing.</p><p><b>(c)</b> If $x \\in \\mathbb{Q} \\cap [0, 1]$, then $x = r_k$ for some $k \\in \\mathbb{N}$, so $f_n(x) = 1$ for all $n \\ge k$. Hence $\\lim_{n\\to\\infty} f_n(x) = 1$. If $x \\notin \\mathbb{Q} \\cap [0, 1]$, then $x \\notin \\{r_1, r_2, \\dots\\}$, so $f_n(x) = 0$ for all $n$, giving $\\lim_{n\\to\\infty} f_n(x) = 0$.</p><p>Thus the pointwise limit is Dirichlet's function $D(x)$ on $[0, 1]$. As shown in Section 7.1, $D \\notin \\mathcal{R}[0, 1]$.</p><p>This proves that the Monotone Convergence Theorem fails for the Riemann integral: a bounded, increasing sequence of Riemann integrable functions can converge pointwise to a non-integrable function.</p>`,
  trap: 'Concluding that $\\lim \\int f_n = \\int \\lim f_n$ holds for all monotone sequences in Riemann integration; this fundamental limitation motivated the development of the Lebesgue integral.'
},
{
  id: 'q.ra2.m4.09',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.3',
  marks: 5,
  title: 'Irrationality of e',
  source: 'Bartle & Sherbert 4e §8.3 Ex 4',
  prompt: `Prove that the number $e$ is irrational using the Taylor remainder inequality $0 < e \\cdot n! - \\left( 1 + 1 + \\frac{1}{2!} + \\dots + \\frac{1}{n!} \\right) n! < \\frac{1}{n}$ for $n \\ge 2$.`,
  tests: [
    'c.8.3.1'
  ],
  approach: `<p>Assume $e = p/q$ with $p, q \\in \\mathbb{N}$, set $n = q \\ge 2$, and show that an integer is trapped strictly between $0$ and $1/q$.</p>`,
  solution: `<p>The Taylor series expansion for $e = e^1$ gives $e = \\sum_{k=0}^n \\frac{1}{k!} + R_n$, where:</p><p>$$R_n = \\sum_{k=n+1}^\\infty \\frac{1}{k!} = \\frac{1}{(n+1)!} \\left( 1 + \\frac{1}{n+2} + \\frac{1}{(n+2)(n+3)} + \\dots \\right)$$</p><p>Bounding by a geometric series with common ratio $\\frac{1}{n+1}$:</p><p>$$0 < R_n < \\frac{1}{(n+1)!} \\sum_{j=0}^\\infty \\left(\\frac{1}{n+1}\\right)^j = \\frac{1}{(n+1)!} \\cdot \\frac{1}{1 - \\frac{1}{n+1}} = \\frac{1}{(n+1)!} \\cdot \\frac{n+1}{n} = \\frac{1}{n \\cdot n!}$$</p><p>Multiplying by $n!$ yields:</p><p>$$0 < n! \\left( e - \\sum_{k=0}^n \\frac{1}{k!} \\right) < \\frac{1}{n}$$</p><p>Now suppose by contradiction that $e \\in \\mathbb{Q}$, so $e = p/q$ for some integers $p, q \\in \\mathbb{N}$ with $q \\ge 2$. Setting $n = q$:</p><p>$$q! \\cdot e = q! \\cdot \\frac{p}{q} = (q - 1)! \\cdot p \\in \\mathbb{Z}$$</p><p>Furthermore, $q! \\sum_{k=0}^q \\frac{1}{k!} = \\sum_{k=0}^q \\frac{q!}{k!} \\in \\mathbb{Z}$ because each $\\frac{q!}{k!}$ is an integer for $k \\le q$. Thus:</p><p>$$M := q! \\left( e - \\sum_{k=0}^q \\frac{1}{k!} \\right) \\in \\mathbb{Z}$$</p><p>is an integer. But the remainder inequality for $n = q \\ge 2$ asserts:</p><p>$$0 < M < \\frac{1}{q} \\le \\frac{1}{2} < 1$$</p><p>There is no integer strictly between $0$ and $1$. This contradiction proves that $e$ is irrational.</p>`,
  trap: 'Assuming $e = p/q$ implies $e$ cannot be written as a series; the contradiction comes from multiplying by $q!$ and trapping an integer strictly between 0 and 1.'
},
{
  id: 'q.ra2.m4.10',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.3',
  marks: 5,
  title: 'Integral Remainder and Error Bound for ln(1 + x)',
  source: 'Bartle & Sherbert 4e §8.3 Ex 5',
  prompt: `Let $x \\ge 0$ and $n \\in \\mathbb{N}$.<br>(a) Prove that $\\ln(1 + x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\dots + (-1)^{n-1} \\frac{x^n}{n} + \\int_0^x \\frac{(-t)^n}{1 + t} \\, dt$.<br>(b) Deduce that $\\left| \\ln(1 + x) - \\sum_{k=1}^n (-1)^{k-1} \\frac{x^k}{k} \\right| \\le \\frac{x^{n+1}}{n + 1}$.`,
  tests: [
    'c.8.3.1'
  ],
  approach: `<p>Use the finite geometric sum formula $\\frac{1}{1 + t} = \\sum_{k=0}^{n-1} (-t)^k + \\frac{(-t)^n}{1 + t}$ and integrate from $0$ to $x$.</p>`,
  solution: `<p><b>(a)</b> For $t \\ge 0$, using the algebraic identity for the sum of a finite geometric series:</p><p>$$\\frac{1}{1 + t} = 1 - t + t^2 - t^3 + \\dots + (-t)^{n-1} + \\frac{(-t)^n}{1 + t} = \\sum_{k=1}^n (-1)^{k-1} t^{k-1} + \\frac{(-t)^n}{1 + t}$$</p><p>Integrate both sides from $0$ to $x$ with respect to $t$. Since $\\int_0^x \\frac{1}{1 + t} dt = \\ln(1 + x)$ and $\\int_0^x t^{k-1} dt = \\frac{x^k}{k}$:</p><p>$$\\ln(1 + x) = \\sum_{k=1}^n (-1)^{k-1} \\frac{x^k}{k} + \\int_0^x \\frac{(-t)^n}{1 + t} \\, dt$$</p><p><b>(b)</b> The error term is $R_n(x) = \\int_0^x \\frac{(-t)^n}{1 + t} dt$. For $t \\in [0, x]$, $1 + t \\ge 1$, so $\\frac{1}{1 + t} \\le 1$. Thus:</p><p>$$|R_n(x)| = \\left| \\int_0^x \\frac{(-t)^n}{1 + t} \\, dt \\right| \\le \\int_0^x \\frac{t^n}{1 + t} \\, dt \\le \\int_0^x t^n \\, dt = \\frac{x^{n+1}}{n + 1}$$</p><p>Therefore, $\\left| \\ln(1 + x) - \\sum_{k=1}^n (-1)^{k-1} \\frac{x^k}{k} \\right| \\le \\frac{x^{n+1}}{n + 1}$.</p>`,
  trap: 'Applying the bound for negative $x$; when $-1 < x < 0$, $1 + t$ can approach $0$, so $1/(1+t)$ is not bounded by $1$. The bound $\\frac{x^{n+1}}{n+1}$ holds for $x \\ge 0$.'
},
{
  id: 'q.ra2.m4.11',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.3',
  marks: 5,
  title: 'Characterization of the Exponential Function',
  source: 'Bartle & Sherbert 4e §8.3 Ex 8',
  prompt: `Let $f: \\mathbb{R} \\to \\mathbb{R}$ be a differentiable function such that $f'(x) = f(x)$ for all $x \\in \\mathbb{R}$. Prove that there exists a constant $K \\in \\mathbb{R}$ such that $f(x) = K e^x$ for all $x \\in \\mathbb{R}$.`,
  tests: [
    'c.8.3.1'
  ],
  approach: `<p>Consider the auxiliary function $g(x) := f(x) e^{-x}$ and compute its derivative.</p>`,
  solution: `<p>Define $g: \\mathbb{R} \\to \\mathbb{R}$ by $g(x) := f(x) e^{-x}$. By the product rule and chain rule, since $f$ and $e^{-x}$ are differentiable on $\\mathbb{R}$:</p><p>$$g'(x) = f'(x) e^{-x} + f(x) \\frac{d}{dx}(e^{-x}) = f'(x) e^{-x} - f(x) e^{-x}$$</p><p>Since $f'(x) = f(x)$ for all $x \\in \\mathbb{R}$:</p><p>$$g'(x) = f(x) e^{-x} - f(x) e^{-x} = 0 \\quad \\text{for all } x \\in \\mathbb{R}$$</p><p>By the Mean Value Theorem / Zero Derivative Theorem (Theorem 6.2.5), a function whose derivative is zero on an interval is constant. Therefore, there exists a constant $K \\in \\mathbb{R}$ such that $g(x) = K$ for all $x \\in \\mathbb{R}$. Multiplying by $e^x$ gives:</p><p>$$f(x) = K e^x \\quad \\text{for all } x \\in \\mathbb{R}$$</p><p>Setting $x = 0$ shows that $K = f(0)$.</p>`,
  trap: "Dividing $f'(x)/f(x) = 1$ without proving that $f(x) \\ne 0$. Multiplying by $e^{-x}$ avoids division completely because $e^{-x} > 0$ everywhere."
},
{
  id: 'q.ra2.m4.12',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.3',
  marks: 5,
  title: 'Arithmetic-Geometric Mean Inequality via Exponential Function',
  source: 'Bartle & Sherbert 4e §8.3 Ex 9',
  prompt: `Let $a_1, a_2, \\dots, a_n > 0$ and let $A := \\frac{a_1 + \\dots + a_n}{n}$ be their arithmetic mean.<br>(a) Prove that $1 + x \\le e^x$ for all $x \\in \\mathbb{R}$, with equality if and only if $x = 0$.<br>(b) Substitute $x_k := \\frac{a_k}{A} - 1$ into this inequality to prove the AM--GM inequality: $(a_1 a_2 \\cdots a_n)^{1/n} \\le \\frac{a_1 + \\dots + a_n}{n}$, with equality if and only if $a_1 = a_2 = \\dots = a_n$.`,
  tests: [
    'c.8.3.1'
  ],
  approach: `<p>Use derivative analysis for (a), and multiply the $n$ resulting inequalities for (b).</p>`,
  solution: `<p><b>(a)</b> Define $\\phi(x) := e^x - (1 + x)$. Then $\\phi'(x) = e^x - 1$. For $x < 0$, $\\phi'(x) < 0$; for $x > 0$, $\\phi'(x) > 0$. Thus $\\phi$ has a strict global minimum at $x = 0$, where $\\phi(0) = e^0 - 1 = 0$. Hence $\\phi(x) \\ge 0$ for all $x \\in \\mathbb{R}$, with equality if and only if $x = 0$. This gives $1 + x \\le e^x$.</p><p><b>(b)</b> For each $k \\in \\{1, \\dots, n\\}$, set $x_k := \\frac{a_k}{A} - 1$. Since $1 + x_k = \\frac{a_k}{A} > 0$, part (a) yields:</p><p>$$\\frac{a_k}{A} \\le e^{a_k / A - 1} \\quad \\text{for each } k = 1, \\dots, n$$</p><p>Multiply these $n$ positive inequalities together:</p><p>$$\\prod_{k=1}^n \\frac{a_k}{A} \\le \\prod_{k=1}^n e^{a_k/A - 1} = \\exp\\left( \\sum_{k=1}^n \\left( \\frac{a_k}{A} - 1 \\right) \\right)$$</p><p>Evaluate the exponent:</p><p>$$\\sum_{k=1}^n \\left( \\frac{a_k}{A} - 1 \\right) = \\frac{1}{A} \\sum_{k=1}^n a_k - n = \\frac{1}{A}(nA) - n = 0$$</p><p>Therefore:</p><p>$$\\frac{a_1 a_2 \\cdots a_n}{A^n} \\le e^0 = 1 \\implies a_1 a_2 \\cdots a_n \\le A^n$$</p><p>Taking the $n$-th root gives $(a_1 a_2 \\cdots a_n)^{1/n} \\le A = \\frac{a_1 + \\dots + a_n}{n}$.</p><p>Equality holds if and only if equality holds in every individual step $\\frac{a_k}{A} \\le e^{x_k}$, which occurs if and only if $x_k = 0$ for all $k$, i.e., $a_1 = a_2 = \\dots = a_n = A$.</p>`,
  trap: 'Omitting the strict equality condition or failing to show why the sum of exponents simplifies to zero.'
},
{
  id: 'q.ra2.m4.13',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.4',
  marks: 5,
  title: 'Fundamental Inequalities for Sine',
  source: 'Bartle & Sherbert 4e §8.4 Ex 2 & 3',
  prompt: `Prove using the Mean Value Theorem and Taylor's Theorem that:<br>(a) $|\\sin x| \\le |x|$ for all $x \\in \\mathbb{R}$;<br>(b) $|\\sin x - x| \\le \\frac{|x|^3}{6}$ for all $x \\in \\mathbb{R}$.`,
  tests: [
    'c.8.4.1'
  ],
  approach: `<p>For (a), apply MVT to $\\sin x$ on $[0, x]$. For (b), use Taylor's theorem with Lagrange remainder of order 2.</p>`,
  solution: `<p><b>(a)</b> For $x = 0$, $\\sin 0 = 0 \\le 0$. For $x > 0$, by the Mean Value Theorem applied to $f(t) = \\sin t$ on $[0, x]$, there exists $c \\in (0, x)$ such that:</p><p>$$\\frac{\\sin x - \\sin 0}{x - 0} = \\cos c$$</p><p>Since $|\\cos c| \\le 1$, we have $|\\sin x| = |x| |\\cos c| \\le |x|$. Since $\\sin(-x) = -\\sin x$ and $|-x| = |x|$, the inequality $|\\sin x| \\le |x|$ holds for all $x \\in \\mathbb{R}$.</p><p><b>(b)</b> By Taylor's Theorem with Lagrange remainder applied to $f(t) = \\sin t$ at $x_0 = 0$ of order 2:</p><p>$$\\sin x = \\sin(0) + \\cos(0)x - \\frac{\\sin(0)}{2!}x^2 - \\frac{\\cos c}{3!} x^3 = x - \\frac{\\cos c}{6} x^3$$</p><p>for some $c$ strictly between $0$ and $x$. Subtracting $x$ and taking absolute values:</p><p>$$|\\sin x - x| = \\left| -\\frac{\\cos c}{6} x^3 \\right| = \\frac{|\\cos c|}{6} |x|^3$$</p><p>Since $|\\cos c| \\le 1$ for all $c \\in \\mathbb{R}$, we obtain $|\\sin x - x| \\le \\frac{|x|^3}{6}$.</p>`,
  trap: 'Forgetting to verify the negative case $x < 0$; using odd parity ($\\sin(-x) = -\\sin x$) ensures the bound holds for all $x \\in \\mathbb{R}$.'
},
{
  id: 'q.ra2.m4.14',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.4',
  marks: 5,
  title: 'Alternating Taylor Bounds for Cosine',
  source: 'Bartle & Sherbert 4e §8.4 Ex 4',
  prompt: `Prove that for all $x > 0$: $1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\frac{x^6}{720} \\le \\cos x \\le 1 - \\frac{x^2}{2} + \\frac{x^4}{24}$.`,
  tests: [
    'c.8.4.1'
  ],
  approach: `<p>Repeatedly integrate the fundamental inequality $\\cos t \\le 1$ from $0$ to $x$.</p>`,
  solution: `<p>For $t > 0$, we have $\\cos t \\le 1$. Repeated integration from $0$ to $x$ produces alternating bounds:</p><p>1. $\\int_0^x \\cos t \\, dt \\le \\int_0^x 1 \\, dt \\implies \\sin x \\le x$.</p><p>2. $\\int_0^x (t - \\sin t) \\, dt \\ge 0 \\implies \\left[ \\frac{t^2}{2} + \\cos t \\right]_0^x \\ge 0 \\implies \\cos x \\ge 1 - \\frac{x^2}{2}$.</p><p>3. $\\int_0^x \\left( \\cos t - 1 + \\frac{t^2}{2} \\right) dt \\ge 0 \\implies \\sin x - x + \\frac{x^3}{6} \\ge 0 \\implies \\sin x \\ge x - \\frac{x^3}{6}$.</p><p>4. $\\int_0^x \\left( \\sin t - t + \\frac{t^3}{6} \\right) dt \\ge 0 \\implies (1 - \\cos x) - \\frac{x^2}{2} + \\frac{x^4}{24} \\ge 0 \\implies \\cos x \\le 1 - \\frac{x^2}{2} + \\frac{x^4}{24}$.</p><p>5. $\\int_0^x \\left( 1 - \\frac{t^2}{2} + \\frac{t^4}{24} - \\cos t \\right) dt \\ge 0 \\implies x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\sin x \\ge 0$.</p><p>6. Integrating once more: $\\int_0^x \\left( t - \\frac{t^3}{6} + \\frac{t^5}{120} - \\sin t \\right) dt \\ge 0$ gives:</p><p>$$\\frac{x^2}{2} - \\frac{x^4}{24} + \\frac{x^6}{720} - (1 - \\cos x) \\ge 0 \\implies \\cos x \\ge 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\frac{x^6}{720}$$</p><p>Combining steps 4 and 6 yields the required double inequality for all $x > 0$.</p>`,
  trap: 'Using Lagrange remainder without checking the sign of $\\cos c$ or $\\sin c$ for large $x$; repeated integration from 0 holds unconditionally for all $x > 0$.'
},
{
  id: 'q.ra2.m4.15',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.4',
  marks: 5,
  title: 'Hyperbolic Functions and the Fundamental Identity',
  source: 'Bartle & Sherbert 4e §8.4 Ex 6 & 7',
  prompt: `Let $c, s: \\mathbb{R} \\to \\mathbb{R}$ satisfy $c'(x) = s(x)$ and $s'(x) = c(x)$ for all $x \\in \\mathbb{R}$, with initial conditions $c(0) = 1$ and $s(0) = 0$.<br>(a) Prove that $(c(x))^2 - (s(x))^2 = 1$ for all $x \\in \\mathbb{R}$.<br>(b) Prove that $c$ and $s$ are unique.`,
  tests: [
    'c.8.4.1'
  ],
  approach: `<p>Differentiate $w(x) = c(x)^2 - s(x)^2$ and apply the zero derivative theorem.</p>`,
  solution: `<p><b>(a)</b> Define $w(x) := (c(x))^2 - (s(x))^2$ for $x \\in \\mathbb{R}$. Differentiating with respect to $x$:</p><p>$$w'(x) = 2 c(x) c'(x) - 2 s(x) s'(x)$$</p><p>Using the given differential equations $c'(x) = s(x)$ and $s'(x) = c(x)$:</p><p>$$w'(x) = 2 c(x) s(x) - 2 s(x) c(x) = 0 \\quad \\text{for all } x \\in \\mathbb{R}$$</p><p>Since $w'(x) = 0$ on $\\mathbb{R}$, $w$ is constant. Evaluating at $x = 0$:</p><p>$$w(0) = (c(0))^2 - (s(0))^2 = 1^2 - 0^2 = 1$$</p><p>Therefore, $(c(x))^2 - (s(x))^2 = 1$ for all $x \\in \\mathbb{R}$.</p><p><b>(b)</b> Suppose $C, S$ is another pair of functions satisfying the same conditions. Let $D_1 := c - C$ and $D_2 := s - S$. Then $D_1' = D_2$, $D_2' = D_1$, and $D_1(0) = D_2(0) = 0$.</p><p>Consider $u(x) := (D_1(x) + D_2(x))e^{-x}$. Differentiating:</p><p>$$u'(x) = (D_1' + D_2')e^{-x} - (D_1 + D_2)e^{-x} = (D_2 + D_1)e^{-x} - (D_1 + D_2)e^{-x} = 0$$</p><p>Thus $u(x) = u(0) = (0 + 0)e^0 = 0$, so $D_1(x) + D_2(x) = 0$.</p><p>Similarly, $v(x) := (D_1(x) - D_2(x))e^x$ has derivative $0$, giving $D_1(x) - D_2(x) = 0$.</p><p>Adding these yields $2D_1(x) = 0 \\implies D_1(x) = 0$, and thus $D_2(x) = 0$. Hence $c = C$ and $s = S$, establishing uniqueness.</p>`,
  trap: 'Confusing $\\cosh^2 x - \\sinh^2 x = 1$ with the trigonometric $\\cos^2 x + \\sin^2 x = 1$; the minus sign reflects $c\' = s$ and $s\' = c$ without a negative sign.'
},
{
  id: 'q.ra2.m4.16',
  course: 'ra2',
  module: 'ra2.m4',
  sec: '8.4',
  marks: 5,
  title: "General Solution of the Differential Equation f'' = f",
  source: 'Bartle & Sherbert 4e §8.4 Ex 8',
  prompt: `Let $f: \\mathbb{R} \\to \\mathbb{R}$ satisfy $f''(x) = f(x)$ for all $x \\in \\mathbb{R}$. Prove that there exist unique constants $\\alpha, \\beta \\in \\mathbb{R}$ such that $f(x) = \\alpha \\cosh x + \\beta \\sinh x$ for all $x \\in \\mathbb{R}$.`,
  tests: [
    'c.8.4.1'
  ],
  approach: `<p>Set $\\alpha = f(0)$ and $\\beta = f'(0)$, and show that the error function $g(x) = f(x) - (\\alpha \\cosh x + \\beta \\sinh x)$ vanishes identically.</p>`,
  solution: `<p>Recall that $\\cosh x = \\frac{e^x + e^{-x}}{2}$ and $\\sinh x = \\frac{e^x - e^{-x}}{2}$ satisfy $\\cosh''(x) = \\cosh x$ and $\\sinh''(x) = \\sinh x$, with $\\cosh(0) = 1, \\cosh'(0) = 0$ and $\\sinh(0) = 0, \\sinh'(0) = 1$.</p><p>Let $\\alpha := f(0)$ and $\\beta := f'(0)$. Define:</p><p>$$g(x) := f(x) - (\\alpha \\cosh x + \\beta \\sinh x)$$</p><p>Then $g''(x) = f''(x) - \\alpha \\cosh x - \\beta \\sinh x = f(x) - (\\alpha \\cosh x + \\beta \\sinh x) = g(x)$.</p><p>Moreover, $g(0) = f(0) - \\alpha = 0$ and $g'(0) = f'(0) - \\beta = 0$.</p><p>Now define $u(x) := (g(x) + g'(x))e^{-x}$. Differentiating:</p><p>$$u'(x) = (g'(x) + g''(x))e^{-x} - (g(x) + g'(x))e^{-x} = (g'(x) + g(x))e^{-x} - (g(x) + g'(x))e^{-x} = 0$$</p><p>Thus $u(x) = u(0) = g(0) + g'(0) = 0$, which implies $g(x) + g'(x) = 0$.</p><p>Similarly, $v(x) := (g(x) - g'(x))e^x$ satisfies $v'(x) = 0$, so $v(x) = v(0) = 0$, which implies $g(x) - g'(x) = 0$.</p><p>Adding $g(x) + g'(x) = 0$ and $g(x) - g'(x) = 0$ gives $2g(x) = 0 \\implies g(x) = 0$ for all $x \\in \\mathbb{R}$.</p><p>Therefore $f(x) = \\alpha \\cosh x + \\beta \\sinh x$ for all $x \\in \\mathbb{R}$.</p>`,
  trap: 'Quoting general ODE existence/uniqueness theorems without providing a self-contained proof using real analysis principles.'
},
{
  id: 'q.ra2.m4.17',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.1',
  marks: 5,
  title: 'Finitely Many Negative Terms Implies Absolute Convergence',
  source: 'Bartle & Sherbert 4e §9.1 Ex 1',
  prompt: `Prove that if a convergent series $\\sum_{n=1}^\\infty a_n$ contains only a finite number of negative terms, then it is absolutely convergent.`,
  tests: [
    'c.9.1.1'
  ],
  approach: `<p>Discard the initial segment containing all negative terms, so all remaining terms are non-negative, where absolute convergence coincides with ordinary convergence.</p>`,
  solution: `<p>Let $\\sum_{n=1}^\\infty a_n$ be a convergent series. Suppose there are only finitely many indices $n$ for which $a_n < 0$.</p><p>Let $N \\in \\mathbb{N}$ be chosen large enough so that $a_n \\ge 0$ for all $n > N$.</p><p>For all $n > N$, $|a_n| = a_n$. Since $\\sum_{n=1}^\\infty a_n$ converges, the tail series $\\sum_{n=N+1}^\\infty a_n$ converges.</p><p>Because $a_n = |a_n|$ for all $n > N$:</p><p>$$\\sum_{n=N+1}^\\infty |a_n| = \\sum_{n=N+1}^\\infty a_n < \\infty$$</p><p>The series of absolute values can be decomposed as:</p><p>$$\\sum_{n=1}^\\infty |a_n| = \\sum_{n=1}^N |a_n| + \\sum_{n=N+1}^\\infty |a_n|$$</p><p>The first term is a finite sum of real numbers, and the second term is a convergent infinite series. Thus the total sum $\\sum_{n=1}^\\infty |a_n|$ is finite and convergent.</p><p>By definition, the series $\\sum_{n=1}^\\infty a_n$ is absolutely convergent.</p>`,
  trap: 'Confusing absolute convergence with the condition that all terms must be positive; a finite number of negative terms cannot change the convergence of a series.'
},
{
  id: 'q.ra2.m4.18',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.1',
  marks: 5,
  title: 'Divergence of Positive and Negative Parts of Conditionally Convergent Series',
  source: 'Bartle & Sherbert 4e §9.1 Ex 2',
  prompt: `Let $\\sum_{n=1}^\\infty a_n$ be a conditionally convergent series. For each $n$, define $p_n := \\frac{a_n + |a_n|}{2}$ and $q_n := \\frac{|a_n| - a_n}{2}$. Prove that both $\\sum_{n=1}^\\infty p_n$ and $\\sum_{n=1}^\\infty q_n$ diverge to $+\\infty$.`,
  tests: [
    'c.9.1.1',
    'c.9.1.5'
  ],
  approach: `<p>Express $a_n = p_n - q_n$ and $|a_n| = p_n + q_n$, and argue by contradiction.</p>`,
  solution: `<p>By definition, $p_n \\ge 0$ and $q_n \\ge 0$ for all $n$. Moreover:</p><p>$$p_n - q_n = \\frac{a_n + |a_n|}{2} - \\frac{|a_n| - a_n}{2} = a_n$$</p><p>$$p_n + q_n = \\frac{a_n + |a_n|}{2} + \\frac{|a_n| - a_n}{2} = |a_n|$$</p><p>Since $\\sum a_n$ is conditionally convergent, $\\sum a_n$ converges, but $\\sum |a_n|$ diverges to $+\\infty$.</p><p>Suppose by contradiction that $\\sum_{n=1}^\\infty p_n$ converges. Since $q_n = p_n - a_n$, the series $\\sum q_n = \\sum p_n - \\sum a_n$ would be the difference of two convergent series, hence convergent.</p><p>Then $\\sum |a_n| = \\sum (p_n + q_n) = \\sum p_n + \\sum q_n$ would also converge, contradicting the hypothesis that $\\sum a_n$ is not absolutely convergent.</p><p>Similarly, if $\\sum q_n$ converged, then $p_n = a_n + q_n$ would force $\\sum p_n$ to converge, again forcing $\\sum |a_n|$ to converge.</p><p>Since $p_n \\ge 0$ and $q_n \\ge 0$, series of non-negative terms with unbounded partial sums must diverge to $+\\infty$. Thus both $\\sum p_n = +\\infty$ and $\\sum q_n = +\\infty$.</p>`,
  trap: 'Forgetting that conditionally convergent series possess infinite positive and infinite negative total mass; this is the key mechanism behind Riemann Rearrangement Theorem.'
},
{
  id: 'q.ra2.m4.19',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.1',
  marks: 5,
  title: 'Divergent Rearrangement of a Conditionally Convergent Series',
  source: 'Bartle & Sherbert 4e §9.1 Ex 3',
  prompt: `Let $\\sum_{n=1}^\\infty a_n$ be a conditionally convergent series. Construct an explicit algorithm showing that there exists a rearrangement of the series whose partial sums diverge to $+\\infty$.`,
  tests: [
    'c.9.1.5'
  ],
  approach: `<p>Use the divergence of positive terms $\\sum p_k = +\\infty$ to take enough positive terms to exceed each successive integer $m$, followed by a single negative term.</p>`,
  solution: `<p>Let $(p_k)$ be the subsequence of positive terms and $(-q_m)$ the subsequence of negative terms of $\\sum a_n$. By Exercise 9.1.2, both $\\sum p_k = +\\infty$ and $\\sum q_m = +\\infty$. Since $\\sum a_n$ converges, $\\lim a_n = 0$, so $p_k \\to 0$ and $q_m \\to 0$.</p><p>We construct a rearrangement in stages:</p><p><b>Stage 1:</b> Since $\\sum p_k = +\\infty$, select the first $k_1$ positive terms such that $\\sum_{i=1}^{k_1} p_i > 1$. Then include the first negative term $-q_1$.</p><p><b>Stage 2:</b> Next, take enough remaining positive terms $p_{k_1+1}, \\dots, p_{k_2}$ such that the cumulative partial sum exceeds $2$. Then include the second negative term $-q_2$.</p><p><b>Stage $m$:</b> Inductively, take enough remaining positive terms such that the cumulative sum exceeds $m$. Then append the next single negative term $-q_m$.</p><p>Since each stage uses at least one positive term and exactly one negative term, every term of the original series appears exactly once in this rearrangement.</p><p>Since $q_m \\to 0$, for large $m$ we have $q_m < 1$, so after appending $-q_m$, the partial sum remains strictly greater than $m - 1$.</p><p>As $m \\to \\infty$, these partial sums exceed $m - 1 \\to \\infty$, which proves that the partial sums of the rearranged series diverge to $+\\infty$.</p>`,
  trap: 'Thinking that rearrangement can only change the sum to another finite number; Riemann proved that a conditionally convergent series can be rearranged to converge to ANY real number, or diverge to $\\pm\\infty$.'
},
{
  id: 'q.ra2.m4.20',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.1',
  marks: 5,
  title: 'Product of an Absolutely Convergent Series and a Bounded Sequence',
  source: 'Bartle & Sherbert 4e §9.1 Ex 7',
  prompt: `(a) Prove that if $\\sum_{n=1}^\\infty a_n$ is absolutely convergent and $(b_n)$ is a bounded sequence, then $\\sum_{n=1}^\\infty a_n b_n$ is absolutely convergent.<br>(b) Give an example showing that this conclusion can fail if $\\sum a_n$ is only conditionally convergent.`,
  tests: [
    'c.9.1.1'
  ],
  approach: `<p>For (a), bound $|a_n b_n| \\le M |a_n|$. For (b), choose $a_n = (-1)^{n+1}/n$ and $b_n = (-1)^{n+1}$.</p>`,
  solution: `<p><b>(a)</b> Since $(b_n)$ is bounded, there exists $M > 0$ such that $|b_n| \\le M$ for all $n \\in \\mathbb{N}$.</p><p>Then for every $n \\in \\mathbb{N}$:</p><p>$$|a_n b_n| = |a_n| |b_n| \\le M |a_n|$$</p><p>Since $\\sum_{n=1}^\\infty a_n$ is absolutely convergent, $\\sum_{n=1}^\\infty |a_n|$ converges, so $\\sum_{n=1}^\\infty M |a_n| = M \\sum |a_n|$ converges.</p><p>By the Comparison Test (Theorem 3.7.7), $\\sum_{n=1}^\\infty |a_n b_n|$ converges, which proves that $\\sum_{n=1}^\\infty a_n b_n$ is absolutely convergent.</p><p><b>(b) Counterexample for conditional convergence:</b> Let $a_n := \\frac{(-1)^{n+1}}{n}$. The alternating harmonic series $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n}$ is conditionally convergent. Let $b_n := (-1)^{n+1}$, which is a bounded sequence with $|b_n| = 1$ for all $n$.</p><p>Then the product is:</p><p>$$a_n b_n = \\frac{(-1)^{n+1}}{n} \\cdot (-1)^{n+1} = \\frac{(-1)^{2n+2}}{n} = \\frac{1}{n}$$</p><p>The series $\\sum_{n=1}^\\infty a_n b_n = \\sum_{n=1}^\\infty \\frac{1}{n}$ is the harmonic series, which diverges to $+\\infty$. Thus the product does not converge at all.</p>`,
  trap: 'Confusing $(b_n)$ being bounded with $(b_n)$ being monotone; Dirichlet test requires $(b_n)$ to be monotone decreasing to 0, whereas an oscillating bounded $(b_n)$ destroys conditional convergence.'
},
{
  id: 'q.ra2.m4.21',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.2',
  marks: 5,
  title: 'Ratio and Root Tests for Series',
  source: 'Bartle & Sherbert 4e §9.2 Ex 2',
  prompt: `Determine the convergence or divergence of: (a) $\\sum_{n=1}^\\infty \\frac{n!}{n^n}$; (b) $\\sum_{n=1}^\\infty \\left(1 - \\frac{1}{n}\\right)^{n^2}$.`,
  tests: [
    'c.9.2.1',
    'c.9.2.4'
  ],
  approach: `<p>Apply the Ratio Test to (a) and the Root Test to (b).</p>`,
  solution: `<p><b>(a)</b> Let $x_n = \\frac{n!}{n^n}$. Compute the ratio:</p><p>$$\\frac{x_{n+1}}{x_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\frac{(n+1) n^n}{(n+1)(n+1)^n} = \\left( \\frac{n}{n+1} \\right)^n = \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n}$$</p><p>Taking the limit as $n \\to \\infty$, $\\lim \\frac{x_{n+1}}{x_n} = \\frac{1}{e} < 1$. By the Ratio Test, the series converges.</p><p><b>(b)</b> Let $x_n = \\left(1 - \\frac{1}{n}\\right)^{n^2}$. Apply the Root Test:</p><p>$$\\sqrt[n]{x_n} = \\left(1 - \\frac{1}{n}\\right)^n$$</p><p>As $n \\to \\infty$, $\\lim \\sqrt[n]{x_n} = e^{-1} = \\frac{1}{e} < 1$. By the Root Test, the series converges.</p>`,
  trap: 'Remember that if the limit of the ratio or root is 1, the test is inconclusive.'
},
{
  id: 'q.ra2.m4.22',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.2',
  marks: 5,
  title: 'Limit Comparison Test Applications',
  source: 'Bartle & Sherbert 4e §9.2 Ex 1(a),(b)',
  prompt: `Establish the convergence or divergence of the series whose $n$-th terms are:<br>(a) $a_n = \\frac{1}{(n+1)(n+2)}$;<br>(b) $b_n = \\frac{n}{(n+1)(n+2)}$.`,
  tests: [
    'c.9.2.1'
  ],
  approach: `<p>Compare $a_n$ with $1/n^2$ and $b_n$ with $1/n$ using the Limit Comparison Test.</p>`,
  solution: `<p><b>(a)</b> For $a_n = \\frac{1}{(n+1)(n+2)} = \\frac{1}{n^2 + 3n + 2}$, compare with $c_n = \\frac{1}{n^2}$:</p><p>$$\\lim_{n\\to\\infty} \\frac{a_n}{c_n} = \\lim_{n\\to\\infty} \\frac{n^2}{n^2 + 3n + 2} = \\lim_{n\\to\\infty} \\frac{1}{1 + 3/n + 2/n^2} = 1$$</p><p>Since $0 < 1 < \\infty$ and the $p$-series $\\sum_{n=1}^\\infty \\frac{1}{n^2}$ converges ($p = 2 > 1$), the Limit Comparison Test (Theorem 9.2.1) implies that $\\sum_{n=1}^\\infty \\frac{1}{(n+1)(n+2)}$ converges.</p><p><b>(b)</b> For $b_n = \\frac{n}{(n+1)(n+2)} = \\frac{n}{n^2 + 3n + 2}$, compare with $d_n = \\frac{1}{n}$:</p><p>$$\\lim_{n\\to\\infty} \\frac{b_n}{d_n} = \\lim_{n\\to\\infty} \\frac{n^2}{n^2 + 3n + 2} = 1$$</p><p>Since $0 < 1 < \\infty$ and the harmonic series $\\sum_{n=1}^\\infty \\frac{1}{n}$ diverges ($p = 1$), the Limit Comparison Test implies that $\\sum_{n=1}^\\infty \\frac{n}{(n+1)(n+2)}$ diverges.</p>`,
  trap: 'Relying only on the $n$-th term test ($a_n \\to 0$ and $b_n \\to 0$), which is inconclusive; limit comparison identifies the asymptotic rate of decay.'
},
{
  id: 'q.ra2.m4.23',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.2',
  marks: 5,
  title: 'Cauchy Condensation and the Logarithmic p-Series',
  source: 'Bartle & Sherbert 4e §9.2 Ex 3(e) & 9.2.6',
  prompt: `Use the Cauchy Condensation Test to determine the values of $p > 0$ for which the series $\\sum_{n=2}^\\infty \\frac{1}{n (\\ln n)^p}$ converges.`,
  tests: [
    'c.9.2.6'
  ],
  approach: `<p>For $a_n = \\frac{1}{n(\\ln n)^p}$, compute the condensed terms $2^k a_{2^k}$ and compare with the standard $p$-series.</p>`,
  solution: `<p>The function $f(x) = \\frac{1}{x (\\ln x)^p}$ is positive and strictly decreasing on $[2, \\infty)$ for any $p > 0$. Thus the terms $a_n = f(n)$ form a decreasing sequence of positive terms.</p><p>By the Cauchy Condensation Test (Theorem 3.7.5 / 9.2.6), $\\sum a_n$ converges if and only if the condensed series $\\sum_{k=1}^\\infty 2^k a_{2^k}$ converges.</p><p>Evaluate the $k$-th condensed term:</p><p>$$2^k a_{2^k} = 2^k \\cdot \\frac{1}{2^k (\\ln(2^k))^p} = \\frac{1}{(k \\ln 2)^p} = \\frac{1}{(\\ln 2)^p} \\cdot \\frac{1}{k^p}$$</p><p>The condensed series is therefore:</p><p>$$\\sum_{k=1}^\\infty 2^k a_{2^k} = \\frac{1}{(\\ln 2)^p} \\sum_{k=1}^\\infty \\frac{1}{k^p}$$</p><p>Since $\\frac{1}{(\\ln 2)^p}$ is a non-zero constant, this series converges if and only if $\\sum_{k=1}^\\infty \\frac{1}{k^p}$ converges.</p><p>By the $p$-series test, $\\sum_{k=1}^\\infty \\frac{1}{k^p}$ converges if and only if $p > 1$.</p><p>Therefore, the logarithmic series $\\sum_{n=2}^\\infty \\frac{1}{n (\\ln n)^p}$ converges if $p > 1$ and diverges if $0 < p \\le 1$. In particular, for $p = 1$, $\\sum_{n=2}^\\infty \\frac{1}{n \\ln n}$ diverges.</p>`,
  trap: 'Attempting the Ratio Test or Root Test on this series; both produce limit 1 and fail. Cauchy Condensation or the Integral Test is the decisive method.'
},
{
  id: 'q.ra2.m4.24',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.2',
  marks: 5,
  title: 'Root Test for Exponential Terms: nⁿe⁻ⁿ and 2ⁿe⁻ⁿ',
  source: 'Bartle & Sherbert 4e §9.2 Ex 4(a),(b)',
  prompt: `Determine the convergence or divergence of:<br>(a) $\\sum_{n=1}^\\infty 2^n e^{-n}$;<br>(b) $\\sum_{n=1}^\\infty n^n e^{-n}$.`,
  tests: [
    'c.9.2.4'
  ],
  approach: `<p>Compute $\\lim_{n\\to\\infty} \\sqrt[n]{x_n}$ for each series.</p>`,
  solution: `<p><b>(a)</b> Let $x_n := 2^n e^{-n} = (2/e)^n$. Applying the Root Test:</p><p>$$\\lim_{n\\to\\infty} \\sqrt[n]{x_n} = \\lim_{n\\to\\infty} \\frac{2}{e} = \\frac{2}{e}$$</p><p>Since $e \\approx 2.71828 > 2$, we have $\\frac{2}{e} < 1$. By the Root Test (Theorem 9.2.4), the series $\\sum_{n=1}^\\infty 2^n e^{-n}$ converges.</p><p><b>(b)</b> Let $x_n := n^n e^{-n} = (n/e)^n$. Applying the Root Test:</p><p>$$\\sqrt[n]{x_n} = \\frac{n}{e}$$</p><p>As $n \\to \\infty$, $\\lim_{n\\to\\infty} \\sqrt[n]{x_n} = \\lim_{n\\to\\infty} \\frac{n}{e} = +\\infty > 1$.</p><p>By the Root Test (or the $n$-th term divergence test, since $x_n \\to \\infty \\ne 0$), the series $\\sum_{n=1}^\\infty n^n e^{-n}$ diverges.</p>`,
  trap: 'Forgetting that $e \\approx 2.718$, so $2/e < 1$ while $n/e \\to \\infty$.'
},
{
  id: 'q.ra2.m4.25',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.3',
  marks: 5,
  title: 'Alternating Series Test: Conditional vs Absolute Convergence',
  source: 'Bartle & Sherbert 4e §9.3 Ex 1',
  prompt: `Test the following series for convergence and for absolute convergence:<br>(a) $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{\\sqrt{n}}$;<br>(b) $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^2 + 1}$.`,
  tests: [
    'c.9.3.2'
  ],
  approach: `<p>Check the conditions of the Alternating Series Test (Leibniz) for convergence, and test $\\sum |a_n|$ for absolute convergence.</p>`,
  solution: `<p><b>(a)</b> Let $z_n := \\frac{1}{\\sqrt{n}}$. Since $\\sqrt{n+1} > \\sqrt{n}$, $z_{n+1} < z_n$ for all $n$, so $(z_n)$ is monotonically decreasing. Furthermore, $\\lim_{n\\to\\infty} z_n = 0$.</p><p>By the Alternating Series Test (Theorem 9.3.2), the alternating series $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{\\sqrt{n}}$ converges.</p><p>For absolute convergence, consider $\\sum_{n=1}^\\infty |a_n| = \\sum_{n=1}^\\infty \\frac{1}{n^{1/2}}$. This is a $p$-series with $p = 1/2 \\le 1$, which diverges. Therefore, the series converges <b>conditionally</b>.</p><p><b>(b)</b> Let $z_n := \\frac{1}{n^2 + 1}$. Since $(n+1)^2 + 1 > n^2 + 1$, $(z_n)$ is decreasing and $\\lim z_n = 0$. Thus the alternating series converges by the Alternating Series Test.</p><p>For absolute convergence, consider $\\sum_{n=1}^\\infty \\frac{1}{n^2 + 1}$. Since $\\frac{1}{n^2 + 1} < \\frac{1}{n^2}$ and $\\sum \\frac{1}{n^2}$ converges ($p = 2 > 1$), $\\sum \\frac{1}{n^2 + 1}$ converges by the Direct Comparison Test. Therefore, the series converges <b>absolutely</b>.</p>`,
  trap: 'Stopping once convergence is proved via Leibniz test; determining whether convergence is conditional or absolute requires testing $\\sum |a_n|$.'
},
{
  id: 'q.ra2.m4.26',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.3',
  marks: 5,
  title: 'Error Bound for Alternating Series',
  source: 'Bartle & Sherbert 4e §9.3 Ex 2',
  prompt: `Let $(z_n)$ be a decreasing sequence of positive numbers converging to $0$. Let $s = \\sum_{n=1}^\\infty (-1)^{n+1} z_n$ and let $s_n$ be its $n$-th partial sum. Prove that $|s - s_n| \\le z_{n+1}$ for all $n \\in \\mathbb{N}$.`,
  tests: [
    'c.9.3.2'
  ],
  approach: `<p>Write $s - s_n = (-1)^{n+2} (z_{n+1} - z_{n+2} + z_{n+3} - \\dots)$ and group terms in two ways to bound the sum between $0$ and $z_{n+1}$.</p>`,
  solution: `<p>The difference $s - s_n$ is the remainder tail of the series:</p><p>$$s - s_n = \\sum_{k=n+1}^\\infty (-1)^{k+1} z_k = (-1)^{n+2} [z_{n+1} - z_{n+2} + z_{n+3} - z_{n+4} + \\dots]$$</p><p>Let $R := z_{n+1} - z_{n+2} + z_{n+3} - z_{n+4} + \\dots$. We show that $0 \\le R \\le z_{n+1}$.</p><p>Grouping adjacent terms in pairs:</p><p>$$R = (z_{n+1} - z_{n+2}) + (z_{n+3} - z_{n+4}) + \\dots$$</p><p>Since $(z_k)$ is decreasing, each pair $(z_{2m-1} - z_{2m}) \\ge 0$, and since $z_k \\to 0$, $R \\ge 0$.</p><p>Now regroup starting from the second term:</p><p>$$R = z_{n+1} - [(z_{n+2} - z_{n+3}) + (z_{n+4} - z_{n+5}) + \\dots]$$</p><p>The expression in the brackets is non-negative, so subtracting it gives $R \\le z_{n+1}$.</p><p>Thus $0 \\le R \\le z_{n+1}$. Therefore:</p><p>$$|s - s_n| = |(-1)^{n+2} R| = R \\le z_{n+1}$$</p>`,
  trap: 'Using $z_n$ instead of $z_{n+1}$ as the bound; the error after $n$ terms is bounded by the magnitude of the first omitted term $z_{n+1}$.'
},
{
  id: 'q.ra2.m4.27',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.3',
  marks: 5,
  title: 'Failure of Alternating Series Test without Monotonicity',
  source: 'Bartle & Sherbert 4e §9.3 Ex 3',
  prompt: `Give an explicit example showing that the Alternating Series Test may fail if the sequence of positive terms $(z_n)$ satisfies $\\lim_{n\\to\\infty} z_n = 0$ but is NOT monotonically decreasing.`,
  tests: [
    'c.9.3.2'
  ],
  approach: `<p>Construct an alternating series whose positive terms decay like $1/n$ on odd indices and $1/n^2$ on even indices.</p>`,
  solution: `<p>Define the sequence $(z_n)$ for $n \\in \\mathbb{N}$ by:</p><p>$$z_n = \\begin{cases} \\frac{2}{n} & \\text{if } n \\text{ is odd} \\\\ \\frac{1}{n^2} & \\text{if } n \\text{ is even} \\end{cases}$$</p><p>First, $z_n > 0$ for all $n$, and $\\lim_{n\\to\\infty} z_n = 0$ because both subsequences $\\frac{2}{2k-1} \\to 0$ and $\\frac{1}{(2k)^2} \\to 0$.</p><p>However, $(z_n)$ is not decreasing: for instance $z_2 = 1/4 = 0.25$, while $z_3 = 2/3 \\approx 0.67 > z_2$.</p><p>Now consider the alternating series $\\sum_{n=1}^\\infty (-1)^{n+1} z_n$:</p><p>$$\\sum_{n=1}^\\infty (-1)^{n+1} z_n = z_1 - z_2 + z_3 - z_4 + z_5 - z_6 + \\dots$$</p><p>$$= \\sum_{k=1}^\\infty z_{2k-1} - \\sum_{k=1}^\\infty z_{2k} = \\sum_{k=1}^\\infty \\frac{2}{2k - 1} - \\sum_{k=1}^\\infty \\frac{1}{4k^2}$$</p><p>The second series $\\sum_{k=1}^\\infty \\frac{1}{4k^2} = \\frac{1}{4} \\sum \\frac{1}{k^2}$ converges ($p$-series with $p = 2$). But the first series $\\sum_{k=1}^\\infty \\frac{2}{2k - 1}$ diverges to $+\\infty$ by limit comparison with the harmonic series $\\sum 1/k$.</p><p>Since a divergent series plus a convergent series diverges, the partial sums $s_{2m} \\to +\\infty$. Thus the alternating series diverges, despite $\\lim z_n = 0$.</p>`,
  trap: 'Forgetting that $z_n \\to 0$ alone is NOT enough for alternating series convergence; monotonicity $z_{n+1} \\le z_n$ is strictly necessary.'
},
{
  id: 'q.ra2.m4.28',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.3',
  marks: 5,
  title: "Alternating Series Test Derived from Dirichlet's Test",
  source: 'Bartle & Sherbert 4e §9.3 Ex 4',
  prompt: `State Dirichlet's Test for series and prove that the Alternating Series Test is a direct corollary of Dirichlet's Test.`,
  tests: [
    'c.9.3.2'
  ],
  approach: `<p>Apply Dirichlet's Test with $x_n = (-1)^{n+1}$ and $y_n = z_n$, noting that the partial sums of $x_n$ are bounded.</p>`,
  solution: `<p><b>Dirichlet's Test (Theorem 9.3.4):</b> Let $(x_n)$ be a sequence in $\\mathbb{R}$ whose partial sums $s_n = \\sum_{k=1}^n x_k$ are bounded, i.e., $|s_n| \\le M$ for all $n \\in \\mathbb{N}$. If $(y_n)$ is a decreasing sequence of positive real numbers such that $\\lim_{n\\to\\infty} y_n = 0$, then the series $\\sum_{n=1}^\\infty x_n y_n$ converges.</p><p><b>Deduction of Alternating Series Test:</b> Let $(z_n)$ be a decreasing sequence of positive real numbers converging to $0$. We wish to show that $\\sum_{n=1}^\\infty (-1)^{n+1} z_n$ converges.</p><p>Set $x_n := (-1)^{n+1}$ and $y_n := z_n$. Then the partial sums of $(x_n)$ are:</p><p>$$s_n = \\sum_{k=1}^n (-1)^{k+1} = 1 - 1 + 1 - 1 + \\dots + (-1)^{n+1} = \\begin{cases} 1 & \\text{if } n \\text{ is odd} \\\\ 0 & \\text{if } n \\text{ is even} \\end{cases}$$</p><p>Thus for all $n \\in \\mathbb{N}$, $|s_n| \\le 1 =: M$, so the partial sums are bounded. Since $(y_n) = (z_n)$ is decreasing and $\\lim_{n\\to\\infty} y_n = 0$, all hypotheses of Dirichlet's Test are satisfied.</p><p>Therefore, by Dirichlet's Test, the series $\\sum_{n=1}^\\infty x_n y_n = \\sum_{n=1}^\\infty (-1)^{n+1} z_n$ converges.</p>`,
  trap: 'Applying Dirichlet test where partial sums are unbounded; here $s_n \\in \\{0, 1\\}$ is bounded by 1.'
},
{
  id: 'q.ra2.m4.29',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.4',
  marks: 5,
  title: 'Weierstrass M-Test for Series of Functions',
  source: 'Bartle & Sherbert 4e §9.4 Ex 1',
  prompt: `State the Weierstrass M-Test and prove that $\\sum_{n=1}^\\infty \\frac{\\cos(n x)}{n^2}$ converges uniformly on $\\mathbb{R}$ to a continuous function.`,
  tests: [
    'c.9.4.6'
  ],
  approach: `<p>Bound the terms independently of $x$ and compare with the convergent $p$-series $\\sum 1/n^2$.</p>`,
  solution: `<p><b>Weierstrass M-Test:</b> If $|f_n(x)| \\le M_n$ for all $x \\in A$ and $\\sum_{n=1}^\\infty M_n$ converges, then $\\sum_{n=1}^\\infty f_n(x)$ converges uniformly and absolutely on $A$.</p><p>For $f_n(x) = \\frac{\\cos(n x)}{n^2}$ on $\\mathbb{R}$, we have $|\\cos(n x)| \\le 1$, so:</p><p>$$|f_n(x)| \\le \\frac{1}{n^2} =: M_n \\quad \\text{for all } x \\in \\mathbb{R}$$</p><p>The series $\\sum_{n=1}^\\infty M_n = \\sum_{n=1}^\\infty \\frac{1}{n^2}$ converges ($p$-series with $p = 2 > 1$).</p><p>By the Weierstrass M-Test, $\\sum_{n=1}^\\infty \\frac{\\cos(n x)}{n^2}$ converges uniformly on $\\mathbb{R}$.</p><p>Since each term $\\frac{\\cos(n x)}{n^2}$ is continuous on $\\mathbb{R}$, the uniform limit function is continuous on $\\mathbb{R}$ by the Uniform Limit Theorem.</p>`,
  trap: 'The bounds $M_n$ must be constants that do not depend on $x$.'
},
{
  id: 'q.ra2.m4.30',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.4',
  marks: 5,
  title: 'Uniform Convergence of Fourier-Type Sine Series',
  source: 'Bartle & Sherbert 4e §9.4 Ex 2',
  prompt: `Prove that if $\\sum_{n=1}^\\infty a_n$ is an absolutely convergent series of real numbers, then the series $\\sum_{n=1}^\\infty a_n \\sin(n x)$ converges absolutely and uniformly on $\\mathbb{R}$ to a continuous function.`,
  tests: [
    'c.9.4.6'
  ],
  approach: `<p>Bound each term by $M_n = |a_n|$ and apply the Weierstrass M-Test and Uniform Limit Theorem.</p>`,
  solution: `<p>For each $n \\in \\mathbb{N}$, define $f_n(x) := a_n \\sin(n x)$ on $\\mathbb{R}$.</p><p>For every $x \\in \\mathbb{R}$, since $|\\sin(n x)| \\le 1$, we have:</p><p>$$|f_n(x)| = |a_n \\sin(n x)| = |a_n| |\\sin(n x)| \\le |a_n| =: M_n$$</p><p>The constants $M_n = |a_n|$ do not depend on $x$. By hypothesis, the series $\\sum_{n=1}^\\infty a_n$ is absolutely convergent, which means that $\\sum_{n=1}^\\infty M_n = \\sum_{n=1}^\\infty |a_n|$ converges.</p><p>By the Weierstrass M-Test (Theorem 9.4.6), the series of functions $\\sum_{n=1}^\\infty a_n \\sin(n x)$ converges uniformly and absolutely on $\\mathbb{R}$.</p><p>Furthermore, each term $f_n(x) = a_n \\sin(n x)$ is continuous on $\\mathbb{R}$. By the Uniform Limit Theorem (or Theorem 9.4.5), since the partial sums $s_k(x) = \\sum_{n=1}^k f_n(x)$ are continuous and converge uniformly on $\\mathbb{R}$ to $s(x) = \\sum_{n=1}^\\infty a_n \\sin(nx)$, the sum function $s$ is continuous on $\\mathbb{R}$.</p>`,
  trap: 'Forgetting to verify both parts: absolute and uniform convergence via the M-test, and continuity via the Uniform Limit Theorem.'
},
{
  id: 'q.ra2.m4.31',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.4',
  marks: 5,
  title: 'Cauchy-Hadamard Theorem and Radius of Convergence',
  source: 'Bartle & Sherbert 4e §9.4 Ex 5 & 6(c),(e)',
  prompt: `(a) State the Cauchy-Hadamard Theorem for the radius of convergence $R$ of a power series $\\sum_{n=0}^\\infty a_n x^n$, and prove that $R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right|$ whenever this limit exists.<br>(b) Determine the radius of convergence of $\\sum_{n=1}^\\infty \\frac{n^n}{n!} x^n$.<br>(c) Determine the radius of convergence of $\\sum_{n=1}^\\infty \\frac{(n!)^2}{(2n)!} x^n$.`,
  tests: [
    'c.9.4.9'
  ],
  approach: `<p>For (a), use the Ratio Test on $|a_n x^n|$. For (b) and (c), compute $\\lim |a_n / a_{n+1}|$.</p>`,
  solution: `<p><b>(a) Cauchy-Hadamard Theorem:</b> The radius of convergence $R$ of $\\sum a_n x^n$ is given by $1/R = \\limsup_{n\\to\\infty} |a_n|^{1/n}$ (with $R = 0$ if $\\limsup = \\infty$ and $R = \\infty$ if $\\limsup = 0$).</p><p>If $\\lim_{n\\to\\infty} |a_{n+1}/a_n| = L$ exists, then by the ratio-to-root limit theorem, $\\lim_{n\\to\\infty} |a_n|^{1/n} = L$. Thus $1/R = L$, so $R = 1/L = \\lim_{n\\to\\infty} |a_n / a_{n+1}|$.</p><p><b>(b)</b> Here $a_n = \\frac{n^n}{n!}$. Compute the ratio:</p><p>$$\\left| \\frac{a_n}{a_{n+1}} \\right| = \\frac{n^n}{n!} \\cdot \\frac{(n+1)!}{(n+1)^{n+1}} = \\frac{n^n (n+1)}{(n+1)(n+1)^n} = \\left( \\frac{n}{n+1} \\right)^n = \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n}$$</p><p>Taking the limit as $n \\to \\infty$ gives $R = \\lim_{n\\to\\infty} \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n} = \\frac{1}{e}$. Thus $R = 1/e$.</p><p><b>(c)</b> Here $a_n = \\frac{(n!)^2}{(2n)!}$. Compute the ratio:</p><p>$$\\left| \\frac{a_n}{a_{n+1}} \\right| = \\frac{(n!)^2}{(2n)!} \\cdot \\frac{(2n+2)!}{((n+1)!)^2} = \\frac{(n!)^2 (2n+2)(2n+1)(2n)!}{(2n)! (n+1)^2 (n!)^2} = \\frac{(2n+2)(2n+1)}{(n+1)^2} = \\frac{2(2n+1)}{n+1}$$</p><p>Taking the limit gives $R = \\lim_{n\\to\\infty} \\frac{4n + 2}{n + 1} = 4$. Thus $R = 4$.</p>`,
  trap: 'Inverting the ratio when applying $R = \\lim |a_n / a_{n+1}|$; remember $R = \\lim |a_n / a_{n+1}|$, whereas $L = \\lim |a_{n+1} / a_n| = 1/R$.'
},
{
  id: 'q.ra2.m4.32',
  course: 'ra2',
  module: 'ra2.m5',
  sec: '9.4',
  marks: 5,
  title: 'Term-by-Term Integration of Power Series',
  source: 'Bartle & Sherbert 4e §9.4 Ex 16',
  prompt: `Prove that inside its interval of convergence $|x| < 1$, the geometric series $\\frac{1}{1 + x} = \\sum_{n=0}^\\infty (-1)^n x^n$ can be integrated term-by-term to yield $\\ln(1 + x) = \\sum_{n=1}^\\infty \\frac{(-1)^{n-1}}{n} x^n$, and justify the uniform convergence used in the proof.`,
  tests: [
    'c.9.4.9',
    'c.8.2.4'
  ],
  approach: `<p>For any $x$ with $|x| < 1$, choose $r < 1$ with $|x| \\le r$. The power series converges uniformly on $[-r, r]$, allowing term-by-term integration.</p>`,
  solution: `<p>The geometric series $\\sum_{n=0}^\\infty (-1)^n t^n$ has radius of convergence $R = 1$. For $|t| < 1$, its sum is $\\frac{1}{1 - (-t)} = \\frac{1}{1 + t}$.</p><p>Let $x \\in (-1, 1)$. Choose $r$ such that $|x| \\le r < 1$. On the closed bounded interval $I_r = [-r, r]$, we have $|(-1)^n t^n| \\le r^n$. Since $r < 1$, the geometric series $\\sum_{n=0}^\\infty r^n$ converges.</p><p>By the Weierstrass M-Test, the series $\\sum_{n=0}^\\infty (-1)^n t^n$ converges uniformly on $I_r$.</p><p>By the Term-by-Term Integration Theorem for Power Series (Theorem 8.2.4 / 9.4.11), a uniformly convergent series of continuous functions can be integrated term-by-term over the interval between $0$ and $x$:</p><p>$$\\int_0^x \\frac{1}{1 + t} \\, dt = \\sum_{n=0}^\\infty \\int_0^x (-1)^n t^n \\, dt$$</p><p>The left-hand side is $\\ln(1 + x) - \\ln(1) = \\ln(1 + x)$. Evaluating each integral on the right-hand side:</p><p>$$\\int_0^x (-1)^n t^n \\, dt = (-1)^n \\left[ \\frac{t^{n+1}}{n + 1} \\right]_0^x = (-1)^n \\frac{x^{n+1}}{n + 1}$$</p><p>Re-indexing with $k = n + 1$:</p><p>$$\\ln(1 + x) = \\sum_{k=1}^\\infty (-1)^{k-1} \\frac{x^k}{k} = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\frac{x^4}{4} + \\dots$$</p><p>This series expansion is valid for all $|x| < 1$.</p>`,
  trap: 'Claiming that the power series converges uniformly on $(-1, 1)$; it only converges uniformly on compact subintervals $[-r, r] \\subset (-1, 1)$, which is sufficient because any point $x \\in (-1, 1)$ is contained in such a compact subinterval.'
}
);

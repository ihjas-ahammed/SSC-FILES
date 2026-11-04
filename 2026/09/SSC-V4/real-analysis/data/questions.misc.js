/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II & I · Extension & Miscellaneous Modules
   Level 3 Written Questions: Chapter 9 (Series), Chapter 10 (HK Integral),
   and Chapter 11 (Topology & Metric Spaces, §§11.3–11.4)
   Directly mapped to Bartle & Sherbert 4e exercises.
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(
{
  "id": "w.9.1.01",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.1",
  "marks": 5,
  "title": "Absolute Convergence Implies Convergence via Cauchy Criterion",
  "source": "Bartle & Sherbert 4e §9.1 Ex 1 & 2",
  "prompt": "Let $\\sum_{n=1}^\\infty x_n$ be an infinite series of real numbers.<br>(a) Prove, using the Cauchy Criterion for series, that if $\\sum_{n=1}^\\infty |x_n|$ converges, then $\\sum_{n=1}^\\infty x_n$ converges.<br>(b) Give an example of a series where $\\sum_{n=1}^\\infty x_n$ converges but $\\sum_{n=1}^\\infty |x_n|$ diverges.",
  "tests": [
    "c.9.1.1"
  ],
  "approach": "<p>Apply the triangle inequality to partial sum differences and invoke the Cauchy criterion for convergence in $\\mathbb{R}$.</p>",
  "solution": "<p><b>(a) Absolute Convergence implies Convergence:</b> Let $\\varepsilon > 0$. Since $\\sum_{n=1}^\\infty |x_n|$ converges, by the Cauchy Criterion for series (Theorem 3.7.2), there exists $K \\in \\mathbb{N}$ such that for all $m > n \\ge K$:</p><p>$$\\sum_{k=n+1}^m |x_k| < \\varepsilon$$</p><p>For the same $m > n \\ge K$, consider the difference between partial sums $s_m - s_n = \\sum_{k=n+1}^m x_k$. By the generalized triangle inequality for absolute values:</p><p>$$|s_m - s_n| = \\left| \\sum_{k=n+1}^m x_k \\right| \\le \\sum_{k=n+1}^m |x_k| < \\varepsilon$$</p><p>This proves that the sequence of partial sums $(s_n)$ is a Cauchy sequence in $\\mathbb{R}$. Since $\\mathbb{R}$ is complete, $(s_n)$ converges to a finite real limit $s$. Thus $\\sum_{n=1}^\\infty x_n$ converges.</p><p><b>(b) Conditional Convergence Example:</b> Consider the alternating harmonic series: $$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots$$ By the Alternating Series Test, this series converges (to $\\ln 2$). However, the series of absolute values is the harmonic series $\\sum_{n=1}^\\infty \\frac{1}{n}$, which diverges to $+\\infty$. Hence the series converges conditionally.</p>",
  "trap": "Absolute convergence implies convergence, but the converse is false: conditional convergence depends on the delicate cancellation of alternating signs."
},
{
  "id": "w.9.1.02",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.1",
  "marks": 5,
  "title": "Conditional Convergence and Divergence of Positive and Negative Parts",
  "source": "Bartle & Sherbert 4e §9.1 Ex 5 & 6",
  "prompt": "Let $\\sum_{n=1}^\\infty x_n$ be an infinite series. Define the positive part $p_n := \\frac{1}{2}(|x_n| + x_n)$ and negative part $q_n := \\frac{1}{2}(|x_n| - x_n)$ for each $n \\in \\mathbb{N}$.<br>(a) Express $x_n$ and $|x_n|$ in terms of $p_n$ and $q_n$.<br>(b) Prove that if $\\sum x_n$ converges conditionally, then both series $\\sum_{n=1}^\\infty p_n$ and $\\sum_{n=1}^\\infty q_n$ diverge to $+\\infty$.",
  "tests": [
    "c.9.1.1",
    "c.9.1.5"
  ],
  "approach": "<p>Use algebraic decomposition $x_n = p_n - q_n$ and $|x_n| = p_n + q_n$. Argue by contradiction assuming either $\\sum p_n$ or $\\sum q_n$ converges.</p>",
  "solution": "<p><b>(a) Formulas for $x_n$ and $|x_n|$:</b></p><p>Adding and subtracting the definitions: $$p_n + q_n = \\frac{|x_n| + x_n}{2} + \\frac{|x_n| - x_n}{2} = |x_n|$$ $$p_n - q_n = \\frac{|x_n| + x_n}{2} - \\frac{|x_n| - x_n}{2} = x_n$$ Note that $p_n \\ge 0$ and $q_n \\ge 0$ for all $n$.</p><p><b>(b) Both Parts Diverge:</b> Suppose $\\sum x_n$ converges conditionally, meaning $\\sum x_n = S \\in \\mathbb{R}$ converges but $\\sum |x_n| = \\infty$.</p><p>Assume for contradiction that $\\sum p_n$ converges to a finite number $P$. Since $q_n = p_n - x_n$, the series $\\sum q_n = \\sum p_n - \\sum x_n = P - S$ would also converge to a finite number.</p><p>Then the series of absolute values $\\sum |x_n| = \\sum (p_n + q_n) = \\sum p_n + \\sum q_n = P + (P - S) = 2P - S < \\infty$, which would mean $\\sum x_n$ converges absolutely, a contradiction!</p><p>Similarly, if $\\sum q_n$ converged to $Q$, then $\\sum p_n = \\sum x_n + \\sum q_n = S + Q$ would converge, again implying $\\sum |x_n| < \\infty$.</p><p>Since $p_n \\ge 0$ and $q_n \\ge 0$, their partial sums are monotone increasing. Therefore, both series must diverge to $+\\infty$:</p><p>$$\\sum_{n=1}^\\infty p_n = +\\infty \\quad \\text{and} \\quad \\sum_{n=1}^\\infty q_n = +\\infty$$</p>",
  "trap": "If either positive or negative terms summed to a finite total, the entire series would be forced to converge absolutely."
},
{
  "id": "w.9.1.03",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.1",
  "marks": 5,
  "title": "Rearrangement of the Alternating Harmonic Series",
  "source": "Bartle & Sherbert 4e §9.1 Ex 10 / Riemann Rearrangement",
  "prompt": "Let $S = \\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2$.<br>(a) Consider the rearrangement $S'$ formed by taking one positive term followed by two negative terms:<br>$$S' = 1 - \\frac{1}{2} - \\frac{1}{4} + \\frac{1}{3} - \\frac{1}{6} - \\frac{1}{8} + \\frac{1}{5} - \\frac{1}{10} - \\frac{1}{12} + \\cdots$$<br>Prove that $S'$ converges and evaluate its sum in terms of $S$.<br>(b) Why does this rearrangement not violate the associative and commutative laws of algebra?",
  "tests": [
    "c.9.1.1",
    "c.9.1.5"
  ],
  "approach": "<p>Combine each positive term $1/(2k-1)$ with its immediately following negative term $-1/(4k-2)$ to identify a factor of $1/2$.</p>",
  "solution": "<p><b>(a) Sum of the Rearrangement:</b> Group each block of three terms: $$T_k = \\frac{1}{2k-1} - \\frac{1}{4k-2} - \\frac{1}{4k}$$ Notice that the first two terms combine: $$\\frac{1}{2k-1} - \\frac{1}{2(2k-1)} = \\frac{1}{2(2k-1)}$$ Therefore, each block simplifies to: $$T_k = \\frac{1}{2(2k-1)} - \\frac{1}{4k} = \\frac{1}{2} \\left( \\frac{1}{2k-1} - \\frac{1}{2k} \\right)$$ Summing over all $k = 1, 2, \\dots, n$: $$\\sum_{k=1}^n T_k = \\frac{1}{2} \\sum_{k=1}^n \\left( \\frac{1}{2k-1} - \\frac{1}{2k} \\right) = \\frac{1}{2} \\left( 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\dots + \\frac{1}{2n-1} - \\frac{1}{2n} \\right)$$ As $n \\to \\infty$, the sum inside parentheses is the alternating harmonic series $S = \\ln 2$. Hence: $$S' = \\lim_{n\\to\\infty} \\sum_{k=1}^n T_k = \\frac{1}{2} S = \\frac{1}{2} \\ln 2$$</p><p><b>(b) Explanation via Riemann Rearrangement Theorem:</b> Addition is commutative and associative only for FINITE sums. In infinite series, rearranging the order of summation is valid if and only if the series converges ABSOLUTELY. By Riemann's Rearrangement Theorem (Theorem 9.1.5), the terms of any conditionally convergent series can be rearranged to sum to any real number whatsoever, because the positive terms sum to $+\\infty$ and the negative terms sum to $-\\infty$.</p>",
  "trap": "Rearranging terms of a conditionally convergent series changes its value; only absolutely convergent series have invariant sums under all rearrangements."
},
{
  "id": "w.9.2.01",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.2",
  "marks": 5,
  "title": "Limit Comparison Test for Radical and Rational Series",
  "source": "Bartle & Sherbert 4e §9.2 Ex 1 & 2",
  "prompt": "Determine whether each series converges or diverges using the Limit Comparison Test:<br>(a) $\\sum_{n=1}^\\infty \\frac{\\sqrt{n+1} - \\sqrt{n}}{n}$<br>(b) $\\sum_{n=1}^\\infty \\frac{n^2 + 1}{n^4 - 2n + 3}$",
  "tests": [
    "c.9.2.1"
  ],
  "approach": "<p>Rationalize the numerator in (a) to find the asymptotic power $1/n^{3/2}$. For (b), identify the dominant terms to compare with $1/n^2$.</p>",
  "solution": "<p><b>(a) Series $\\sum \\frac{\\sqrt{n+1} - \\sqrt{n}}{n}$:</b> Rationalize the numerator: $$\\sqrt{n+1} - \\sqrt{n} = \\frac{(n+1) - n}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$$ Thus the general term is: $$x_n = \\frac{1}{n(\\sqrt{n+1} + \\sqrt{n})}$$ For large $n$, $\\sqrt{n+1} + \\sqrt{n} \\approx 2\\sqrt{n}$, so $x_n \\approx \\frac{1}{2n^{3/2}}$. Compare with $y_n = \\frac{1}{n^{3/2}}$: $$\\lim_{n\\to\\infty} \\frac{x_n}{y_n} = \\lim_{n\\to\\infty} \\frac{n^{3/2}}{n(\\sqrt{n+1} + \\sqrt{n})} = \\lim_{n\\to\\infty} \\frac{1}{\\sqrt{1 + 1/n} + 1} = \\frac{1}{2}$$ Since $L = 1/2 \\in (0, \\infty)$ and $\\sum y_n = \\sum 1/n^{3/2}$ converges ($p = 3/2 > 1$), by the Limit Comparison Test, $\\sum x_n$ <b>converges</b>.</p><p><b>(b) Series $\\sum \\frac{n^2 + 1}{n^4 - 2n + 3}$:</b> The dominant term of numerator is $n^2$ and denominator is $n^4$. Compare with $y_n = \\frac{n^2}{n^4} = \\frac{1}{n^2}$: $$\\lim_{n\\to\\infty} \\frac{x_n}{y_n} = \\lim_{n\\to\\infty} \\frac{(n^2 + 1)n^2}{n^4 - 2n + 3} = \\lim_{n\\to\\infty} \\frac{n^4 + n^2}{n^4 - 2n + 3} = 1$$ Since $L = 1 \\in (0, \\infty)$ and $\\sum 1/n^2$ is a convergent $p$-series ($p = 2 > 1$), the series <b>converges</b> by the Limit Comparison Test.</p>",
  "trap": "Do not attempt the Ratio Test on algebraic or rational functions: the limit ratio is always 1 (inconclusive). Always use Comparison or Limit Comparison."
},
{
  "id": "w.9.2.02",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.2",
  "marks": 5,
  "title": "Ratio Test vs Root Test for Factorials and High Powers",
  "source": "Bartle & Sherbert 4e §9.2 Ex 6 & 7",
  "prompt": "Determine the convergence of the following series:<br>(a) $\\sum_{n=1}^\\infty \\frac{(n!)^2}{(2n)!}$<br>(b) $\\sum_{n=1}^\\infty \\left(\\frac{n}{n+1}\\right)^{n^2}$",
  "tests": [
    "c.9.2.4"
  ],
  "approach": "<p>Apply the Ratio Test for the factorial fraction in (a), and Cauchy's Root Test for the $n^2$ power in (b).</p>",
  "solution": "<p><b>(a) Series with Factorials:</b> Let $x_n = \\frac{(n!)^2}{(2n)!}$. Compute the ratio: $$\\frac{x_{n+1}}{x_n} = \\frac{((n+1)!)^2}{(2n+2)!} \\cdot \\frac{(2n)!}{(n!)^2} = \\frac{(n+1)^2}{(2n+2)(2n+1)} = \\frac{(n+1)^2}{2(n+1)(2n+1)} = \\frac{n+1}{4n+2}$$ Taking the limit as $n \\to \\infty$: $$r = \\lim_{n\\to\\infty} \\frac{n+1}{4n+2} = \\frac{1}{4}$$ Since $r = 1/4 < 1$, by the Ratio Test (Theorem 9.2.4(a)), the series $\\sum_{n=1}^\\infty \\frac{(n!)^2}{(2n)!}$ <b>converges</b>.</p><p><b>(b) Series with Power $n^2$:</b> Let $x_n = \\left( \\frac{n}{n+1} \\right)^{n^2}$. Compute the $n$-th root: $$\\rho = \\lim_{n\\to\\infty} (x_n)^{1/n} = \\lim_{n\\to\\infty} \\left( \\frac{n}{n+1} \\right)^n = \\lim_{n\\to\\infty} \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n} = \\frac{1}{e}$$ Since $e \\approx 2.718 > 1$, we have $\\rho = 1/e < 1$.</p><p>By the Root Test (Theorem 9.2.4(b)), the series $\\sum_{n=1}^\\infty \\left(\\frac{n}{n+1}\\right)^{n^2}$ <b>converges</b>.</p>",
  "trap": "For terms of the form $(a_n)^{n^2}$, the Root Test simplifies the exponent from $n^2$ to $n$, revealing the standard Euler limit $(1 + 1/n)^n \\to e$."
},
{
  "id": "w.9.2.03",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.2",
  "marks": 5,
  "title": "The Integral Test and Generalized Logarithmic p-Series",
  "source": "Bartle & Sherbert 4e §9.2 Ex 11",
  "prompt": "Let $p > 0$. Apply the Integral Test to determine all values of $p$ for which the series<br>$$\\sum_{n=2}^\\infty \\frac{1}{n (\\ln n)^p}$$<br>converges.",
  "tests": [
    "c.9.2.6"
  ],
  "approach": "<p>Verify the hypotheses of the Integral Test for $f(t) = 1/(t(\\ln t)^p)$ and compute the improper integral using substitution $u = \\ln t$.</p>",
  "solution": "<p><b>1. Verification of Hypotheses:</b> Consider $f(t) = \\frac{1}{t (\\ln t)^p}$ for $t \\in [2, \\infty)$.</p><p>• $f(t) > 0$ for all $t \\ge 2$ since $t > 0$ and $\\ln t \\ge \\ln 2 > 0$.</p><p>• $f$ is continuous on $[2, \\infty)$.</p><p>• $f(t)$ is decreasing because both $t$ and $(\\ln t)^p$ are strictly increasing positive functions of $t$, making their product strictly increasing and its reciprocal strictly decreasing.</p><p>• $f(n) = \\frac{1}{n (\\ln n)^p}$ for all integers $n \\ge 2$.</p><p><b>2. Evaluation of the Improper Integral:</b> Substitute $u = \\ln t$, so $du = \\frac{1}{t} \\, dt$. As $t \\to \\infty$, $u \\to \\infty$: $$\\int_2^\\infty \\frac{1}{t(\\ln t)^p} \\, dt = \\int_{\\ln 2}^\\infty \\frac{1}{u^p} \\, du$$</p><p>• If $p = 1$: $$\\int_{\\ln 2}^\\infty \\frac{1}{u} \\, du = [\\ln u]_{\\ln 2}^\\infty = \\infty \\quad \\text{(diverges)}$$</p><p>• If $p \\ne 1$: $$\\int_{\\ln 2}^\\infty u^{-p} \\, du = \\left[ \\frac{u^{1-p}}{1-p} \\right]_{\\ln 2}^\\infty$$ This limit is finite if and only if $1 - p < 0$, which means $p > 1$. When $p > 1$, the integral evaluates to $\\frac{(\\ln 2)^{1-p}}{p-1} < \\infty$.</p><p><b>Conclusion:</b> By the Integral Test, $\\sum_{n=2}^\\infty \\frac{1}{n (\\ln n)^p}$ <b>converges if and only if $p > 1$</b>.</p>",
  "trap": "When $p = 1$, the series $\\sum \\frac{1}{n \\ln n}$ diverges, even though its terms shrink faster than $1/n$."
},
{
  "id": "w.9.2.04",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.2",
  "marks": 5,
  "title": "Failure of Ratio Test on Polynomial Decay and Theoretical Limit",
  "source": "Bartle & Sherbert 4e §9.2 Ex 15",
  "prompt": "(a) Calculate the limit ratio $r = \\lim_{n\\to\\infty} \\left|\\frac{x_{n+1}}{x_n}\\right|$ for the convergent series $\\sum_{n=1}^\\infty \\frac{1}{n(n+1)}$ and the divergent series $\\sum_{n=1}^\\infty \\frac{1}{n}$.<br>(b) Explain theoretically why the Ratio Test is incapable of distinguishing between convergence and divergence for any series whose terms decay as a polynomial power $1/n^p$.",
  "tests": [
    "c.9.2.4",
    "c.9.2.1"
  ],
  "approach": "<p>Compute the algebraic limits explicitly, then examine the binomial expansion of $(1 + 1/n)^{-p}$.</p>",
  "solution": "<p><b>(a) Explicit Limit Ratios:</b></p><p>1. For $x_n = \\frac{1}{n(n+1)}$: $$\\lim_{n\\to\\infty} \\frac{x_{n+1}}{x_n} = \\lim_{n\\to\\infty} \\frac{n(n+1)}{(n+1)(n+2)} = \\lim_{n\\to\\infty} \\frac{n}{n+2} = 1$$ Yet the series converges (telescoping sum equals $1$, or by comparison with $1/n^2$).</p><p>2. For $x_n = \\frac{1}{n}$: $$\\lim_{n\\to\\infty} \\frac{x_{n+1}}{x_n} = \\lim_{n\\to\\infty} \\frac{n}{n+1} = 1$$ Yet the harmonic series diverges to $+\\infty$.</p><p>In both cases, $r = 1$, confirming the Ratio Test is completely inconclusive.</p><p><b>(b) Theoretical Explanation:</b> For any $p$-series $x_n = 1/n^p$: $$\\frac{x_{n+1}}{x_n} = \\left( \\frac{n}{n+1} \\right)^p = \\left( 1 + \\frac{1}{n} \\right)^{-p} = 1 - \\frac{p}{n} + O\\left(\\frac{1}{n^2}\\right)$$ As $n \\to \\infty$, the term $-p/n \\to 0$, so the ratio limit is ALWAYS $r = 1$, regardless of whether $p = 100$ (rapid convergence) or $p = 0.01$ (divergence).</p><p>The Ratio Test works by comparing a series to an exponential/geometric decay $c^n$. Polynomial decay $n^{-p}$ is strictly sub-geometric: it decays far slower than any geometric rate $c^n$ ($c < 1$). Therefore, geometric comparison tools (Ratio and Root tests) inevitably fail when $r = 1$.</p>",
  "trap": "Whenever terms are rational functions or polynomial ratios, never write Ratio Test on an exam; use Limit Comparison or Integral Test immediately."
},
{
  "id": "w.9.3.01",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.3",
  "marks": 5,
  "title": "Alternating Series Error Bound and Decimal Precision",
  "source": "Bartle & Sherbert 4e §9.3 Ex 1 & 2",
  "prompt": "Consider the alternating series $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n^2} = 1 - \\frac{1}{4} + \\frac{1}{9} - \\frac{1}{16} + \\cdots$<br>(a) Prove that the series converges using Leibniz's Rule.<br>(b) Using the Alternating Series Error Bound, find the smallest integer $k$ such that the partial sum $s_k$ approximates the true sum $s$ with an error strictly less than $10^{-4} = 0.0001$.",
  "tests": [
    "c.9.3.2"
  ],
  "approach": "<p>Verify decreasing monotonicity and zero limit, then set $z_{k+1} < 10^{-4}$ and solve for $k$.</p>",
  "solution": "<p><b>(a) Leibniz's Rule:</b> Let $z_n = \\frac{1}{n^2}$.</p><p>1. Monotone decreasing: For all $n \\in \\mathbb{N}$, $(n+1)^2 > n^2 \\implies z_{n+1} = \\frac{1}{(n+1)^2} < \\frac{1}{n^2} = z_n$.</p><p>2. Limit to zero: $\\lim_{n\\to\\infty} z_n = \\lim_{n\\to\\infty} \\frac{1}{n^2} = 0$.</p><p>By the Alternating Series Test (Theorem 9.3.2), the series converges to a finite sum $s$.</p><p><b>(b) Error Bound Calculation:</b> By Theorem 9.3.2, the error between the partial sum $s_k$ and the sum $s$ satisfies: $$|s - s_k| \\le z_{k+1} = \\frac{1}{(k+1)^2}$$ We require the error to be strictly less than $10^{-4}$:</p><p>$$\\frac{1}{(k+1)^2} < 10^{-4} \\iff (k+1)^2 > 10^4 = 10000$$</p><p>Taking positive square roots: $$k+1 > 100 \\implies k > 99$$ Since $k$ must be an integer, the smallest value is $k = 100$.</p><p>Thus, summing the first $100$ terms guarantees $|s - s_{100}| < 0.0001$.</p>",
  "trap": "The error bound after $k$ terms is bounded by the FIRST OMITTED term $z_{k+1}$, not $z_k$."
},
{
  "id": "w.9.3.02",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.3",
  "marks": 5,
  "title": "The Necessity of Monotonicity in Leibniz's Alternating Test",
  "source": "Bartle & Sherbert 4e §9.3 Ex 5",
  "prompt": "Define the sequence $(z_n)$ by $z_n := \\frac{1}{n}$ if $n$ is odd, and $z_n := \\frac{1}{n^2}$ if $n$ is even.<br>(a) Show that $z_n > 0$ for all $n$ and $\\lim_{n\\to\\infty} z_n = 0$.<br>(b) Determine whether the alternating series $\\sum_{n=1}^\\infty (-1)^{n+1} z_n$ converges or diverges.<br>(c) What fundamental principle does this counterexample demonstrate?",
  "tests": [
    "c.9.3.2",
    "c.9.1.1"
  ],
  "approach": "<p>Separate the partial sum into odd (positive) and even (negative) index components to reveal divergence.</p>",
  "solution": "<p><b>(a) Positivity and Limit:</b> For all $n \\in \\mathbb{N}$, $z_n > 0$. As $n \\to \\infty$, both $1/n \\to 0$ and $1/n^2 \\to 0$, so $\\lim_{n\\to\\infty} z_n = 0$.</p><p><b>(b) Convergence Analysis:</b> Write out the series: $$\\sum_{n=1}^\\infty (-1)^{n+1} z_n = z_1 - z_2 + z_3 - z_4 + z_5 - z_6 + \\cdots = 1 - \\frac{1}{4} + \\frac{1}{3} - \\frac{1}{16} + \\frac{1}{5} - \\frac{1}{36} + \\cdots$$ The $2k$-th partial sum is: $$s_{2k} = \\sum_{j=1}^k \\frac{1}{2j-1} - \\sum_{j=1}^k \\frac{1}{(2j)^2}$$ The second sum converges because $\\sum_{j=1}^\\infty \\frac{1}{4j^2} = \\frac{1}{4} \\sum \\frac{1}{j^2} = \\frac{\\pi^2}{24} < \\infty$.</p><p>However, the first sum $\\sum_{j=1}^k \\frac{1}{2j-1} > \\frac{1}{2} \\sum_{j=1}^k \\frac{1}{j} \\to +\\infty$ diverges to infinity (harmonic series).</p><p>Therefore: $$\\lim_{k\\to\\infty} s_{2k} = +\\infty - \\frac{\\pi^2}{24} = +\\infty$$ The partial sums diverge to $+\\infty$, so the series <b>diverges</b>!</p><p><b>(c) Pedagogical Moral:</b> Leibniz's Alternating Series Test requires TWO conditions: (1) $\\lim z_n = 0$, AND (2) $z_{n+1} \\le z_n$ (monotonicity). Having $z_n \\to 0$ alone is NOT enough! Without monotonicity, the positive terms can overpower the negative terms and blow up to infinity.</p>",
  "trap": "Assuming that any alternating series whose terms tend to zero must converge; monotonicity is strictly necessary."
},
{
  "id": "w.9.3.03",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.3",
  "marks": 5,
  "title": "Dirichlet's Test for Non-Absolute Convergence via Summation by Parts",
  "source": "Bartle & Sherbert 4e §9.3 Ex 9 / Dirichlet's Test",
  "prompt": "Let $(x_n)$ be a sequence whose partial sums are bounded: $|s_n| = \\left|\\sum_{k=1}^n x_k\\right| \\le M$ for all $n \\in \\mathbb{N}$. Let $(y_n)$ be a monotone decreasing sequence of positive numbers converging to $0$.<br>Prove that the series $\\sum_{n=1}^\\infty x_n y_n$ converges (Dirichlet's Test).",
  "tests": [
    "c.9.3.2",
    "c.9.1.1"
  ],
  "approach": "<p>Apply Abel's summation by parts formula: $\\sum_{k=1}^n x_k y_k = s_n y_{n+1} - \\sum_{k=1}^n s_k (y_{k+1} - y_k)$.</p>",
  "solution": "<p><b>1. Summation by Parts:</b> Let $s_0 = 0$ and $s_k = \\sum_{j=1}^k x_j$. Then $x_k = s_k - s_{k-1}$. For any $m > n$:</p><p>$$\\sum_{k=n+1}^m x_k y_k = \\sum_{k=n+1}^m (s_k - s_{k-1}) y_k = \\sum_{k=n+1}^m s_k y_k - \\sum_{k=n}^{m-1} s_k y_{k+1}$$</p><p>Re-indexing yields Abel's identity: $$\\sum_{k=n+1}^m x_k y_k = s_m y_m - s_n y_{n+1} + \\sum_{k=n+1}^{m-1} s_k (y_k - y_{k+1})$$</p><p><b>2. Bounding the Terms:</b> Since $|s_k| \\le M$ for all $k$, and $(y_k)$ is decreasing ($y_k - y_{k+1} \\ge 0$):</p><p>$$\\left| \\sum_{k=n+1}^m x_k y_k \\right| \\le |s_m| y_m + |s_n| y_{n+1} + \\sum_{k=n+1}^{m-1} |s_k| (y_k - y_{k+1}) \\le M y_m + M y_{n+1} + M \\sum_{k=n+1}^{m-1} (y_k - y_{k+1})$$</p><p>The sum telescopes: $\\sum_{k=n+1}^{m-1} (y_k - y_{k+1}) = y_{n+1} - y_m$. Substituting: $$\\left| \\sum_{k=n+1}^m x_k y_k \\right| \\le M y_m + M y_{n+1} + M(y_{n+1} - y_m) = 2M y_{n+1}$$</p><p><b>3. Conclusion via Cauchy Criterion:</b> Let $\\varepsilon > 0$. Since $\\lim_{n\\to\\infty} y_n = 0$, choose $K \\in \\mathbb{N}$ such that $y_{n+1} < \\frac{\\varepsilon}{2M}$ for all $n \\ge K$. Then for all $m > n \\ge K$:</p><p>$$\\left| \\sum_{k=n+1}^m x_k y_k \\right| < 2M \\left( \\frac{\\varepsilon}{2M} \\right) = \\varepsilon$$</p><p>By the Cauchy Criterion for series, $\\sum_{n=1}^\\infty x_n y_n$ converges.</p>",
  "trap": "Dirichlet's test does not require $\\sum x_n$ to converge; it only requires its partial sums to remain bounded (e.g. $x_n = (-1)^n$ or $\\cos(nx)$)."
},
{
  "id": "w.9.4.01",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.4",
  "marks": 5,
  "title": "Uniform Convergence of Trigonometric Series via Weierstrass M-Test",
  "source": "Bartle & Sherbert 4e §9.4 Ex 1",
  "prompt": "Let $f_n(x) = \\frac{\\sin(n x)}{n^2}$ for $x \\in \\mathbb{R}$.<br>(a) Prove that the series of functions $\\sum_{n=1}^\\infty f_n(x)$ converges uniformly on $\\mathbb{R}$ to a continuous function $f: \\mathbb{R} \\to \\mathbb{R}$.<br>(b) Does the differentiated series $\\sum_{n=1}^\\infty f_n'(x)$ converge uniformly on $\\mathbb{R}$?",
  "tests": [
    "c.9.4.6",
    "c.8.2.2"
  ],
  "approach": "<p>Bound $|\\sin(nx)| \\le 1$ to apply the Weierstrass M-test. For the derivative, inspect the terms $\\cos(nx)/n$.</p>",
  "solution": "<p><b>(a) Uniform Convergence via Weierstrass M-Test:</b> For all $x \\in \\mathbb{R}$ and all $n \\in \\mathbb{N}$:</p><p>$$|f_n(x)| = \\left| \\frac{\\sin(n x)}{n^2} \\right| = \\frac{|\\sin(nx)|}{n^2} \\le \\frac{1}{n^2} =: M_n$$</p><p>The number series $\\sum_{n=1}^\\infty M_n = \\sum_{n=1}^\\infty \\frac{1}{n^2}$ is a convergent $p$-series ($p = 2 > 1$).</p><p>By the Weierstrass M-Test (Theorem 9.4.6), the series $\\sum_{n=1}^\\infty f_n(x)$ converges uniformly and absolutely on all of $\\mathbb{R}$.</p><p>Furthermore, since each individual term $f_n(x) = \\frac{\\sin(nx)}{n^2}$ is continuous on $\\mathbb{R}$, by the Uniform Limit Theorem (Theorem 8.2.2), the sum function $f(x) = \\sum_{n=1}^\\infty \\frac{\\sin(nx)}{n^2}$ is continuous on $\\mathbb{R}$.</p><p><b>(b) Differentiated Series:</b> Differentiating term-by-term: $$f_n'(x) = \\frac{n \\cos(nx)}{n^2} = \\frac{\\cos(nx)}{n}$$ At $x = 0$, the differentiated series becomes $\\sum_{n=1}^\\infty \\frac{\\cos(0)}{n} = \\sum_{n=1}^\\infty \\frac{1}{n}$, which is the harmonic series and diverges! Since the differentiated series fails to converge even pointwise at $x = 0$, it does <b>NOT</b> converge uniformly on $\\mathbb{R}$.</p>",
  "trap": "Even if $\\sum f_n(x)$ converges uniformly, the differentiated series $\\sum f_n'(x)$ might diverge everywhere!"
},
{
  "id": "w.9.4.02",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.4",
  "marks": 5,
  "title": "Term-by-Term Integration of Uniformly Convergent Series",
  "source": "Bartle & Sherbert 4e §9.4 Ex 4",
  "prompt": "Let $f_n(x) = x^n$ on the interval $[0, 1/2]$.<br>(a) Prove that $\\sum_{n=0}^\\infty f_n(x)$ converges uniformly on $[0, 1/2]$.<br>(b) Evaluate $\\int_0^{1/2} \\left( \\sum_{n=0}^\\infty x^n \\right) dx$ by term-by-term integration, and verify your answer using elementary calculus.",
  "tests": [
    "c.9.4.6",
    "c.8.2.4"
  ],
  "approach": "<p>Apply Weierstrass M-test with $M_n = (1/2)^n$, then interchange integral and summation using Theorem 8.2.4.</p>",
  "solution": "<p><b>(a) Uniform Convergence on $[0, 1/2]$:</b> For any $x \\in [0, 1/2]$: $$|f_n(x)| = |x^n| = x^n \\le \\left(\\frac{1}{2}\\right)^n =: M_n$$ The number series $\\sum_{n=0}^\\infty M_n = \\sum_{n=0}^\\infty (1/2)^n$ is a geometric series with common ratio $r = 1/2 < 1$, which converges to $\\frac{1}{1 - 1/2} = 2 < \\infty$.</p><p>By the Weierstrass M-Test, $\\sum_{n=0}^\\infty x^n$ converges uniformly on $[0, 1/2]$.</p><p><b>(b) Term-by-Term Integration:</b> By Theorem 8.2.4 (Interchange of Limit and Integral for Uniformly Convergent Series): $$\\int_0^{1/2} \\left( \\sum_{n=0}^\\infty x^n \\right) dx = \\sum_{n=0}^\\infty \\int_0^{1/2} x^n \\, dx = \\sum_{n=0}^\\infty \\left[ \\frac{x^{n+1}}{n+1} \\right]_0^{1/2} = \\sum_{n=0}^\\infty \\frac{1}{(n+1) 2^{n+1}} = \\sum_{k=1}^\\infty \\frac{1}{k 2^k}$$</p><p><b>Verification via Elementary Calculus:</b> On $[0, 1/2]$, the geometric series sums to $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$. Directly integrating: $$\\int_0^{1/2} \\frac{1}{1-x} \\, dx = [-\\ln(1-x)]_0^{1/2} = -\\ln(1/2) - (-\\ln 1) = \\ln 2$$ Recall the Taylor series for $\\ln(1-t) = -\\sum_{k=1}^\\infty \\frac{t^k}{k}$ for $|t| < 1$. Setting $t = 1/2$ gives $-\\ln(1/2) = \\sum_{k=1}^\\infty \\frac{1}{k 2^k} = \\ln 2$. Both methods agree perfectly.</p>",
  "trap": "Term-by-term integration is only valid when uniform convergence holds; on the full interval $[0, 1)$, convergence is not uniform and requires Monotone Convergence instead."
},
{
  "id": "w.9.4.03",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.4",
  "marks": 5,
  "title": "Radius and Interval of Convergence for Power Series",
  "source": "Bartle & Sherbert 4e §9.4 Ex 7",
  "prompt": "Find the radius of convergence $R$ and the exact interval of convergence (testing boundary endpoints) for the power series:<br>(a) $\\sum_{n=1}^\\infty \\frac{(x-2)^n}{n \\cdot 3^n}$<br>(b) $\\sum_{n=1}^\\infty \\frac{n!}{n^n} x^n$",
  "tests": [
    "c.9.4.9"
  ],
  "approach": "<p>Use the Ratio Test formula $R = \\lim |a_n / a_{n+1}|$ to find the radius, then test endpoint convergence separately.</p>",
  "solution": "<p><b>(a) Series $\\sum_{n=1}^\\infty \\frac{(x-2)^n}{n 3^n}$:</b> Here $a_n = \\frac{1}{n 3^n}$ and center $x_0 = 2$. Ratio of coefficients: $$R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right| = \\lim_{n\\to\\infty} \\frac{(n+1) 3^{n+1}}{n 3^n} = 3 \\lim_{n\\to\\infty} \\frac{n+1}{n} = 3$$ Thus the series converges absolutely for $|x - 2| < 3$, meaning $x \\in (-1, 5)$.</p><p><b>Endpoint Testing:</b></p><p>• At $x = 5$: The series becomes $\\sum_{n=1}^\\infty \\frac{3^n}{n 3^n} = \\sum_{n=1}^\\infty \\frac{1}{n}$, which is the divergent harmonic series.</p><p>• At $x = -1$: The series becomes $\\sum_{n=1}^\\infty \\frac{(-3)^n}{n 3^n} = \\sum_{n=1}^\\infty \\frac{(-1)^n}{n}$, which converges by the Alternating Series Test.</p><p>Therefore, the exact interval of convergence is <b>$[-1, 5)$</b>.</p><p><b>(b) Series $\\sum_{n=1}^\\infty \\frac{n!}{n^n} x^n$:</b> Here $a_n = \\frac{n!}{n^n}$ and center $x_0 = 0$. Compute the ratio: $$R = \\lim_{n\\to\\infty} \\frac{a_n}{a_{n+1}} = \\lim_{n\\to\\infty} \\frac{n!}{n^n} \\cdot \\frac{(n+1)^{n+1}}{(n+1)!} = \\lim_{n\\to\\infty} \\frac{(n+1)^n}{n^n} = \\lim_{n\\to\\infty} \\left(1 + \\frac{1}{n}\\right)^n = e$$ Thus the radius of convergence is <b>$R = e$</b>.</p>",
  "trap": "Always test endpoints individually: a power series can converge at one endpoint and diverge at the other, as shown by $[-1, 5)$."
},
{
  "id": "w.9.4.04",
  "course": "ra2",
  "module": "ra2.m5",
  "sec": "9.4",
  "marks": 5,
  "title": "Term-by-Term Differentiation and Summation of $\\sum n x^n$",
  "source": "Bartle & Sherbert 4e §9.4 Ex 12",
  "prompt": "Start with the geometric series $\\sum_{n=0}^\\infty x^n = \\frac{1}{1-x}$ for $|x| < 1$.<br>(a) Justify differentiating term-by-term to find a closed-form formula for $\\sum_{n=1}^\\infty n x^n$ for $|x| < 1$.<br>(b) Deduce the exact numerical sum of $\\sum_{n=1}^\\infty \\frac{n}{2^n}$.",
  "tests": [
    "c.9.4.9",
    "c.8.2.3"
  ],
  "approach": "<p>Apply Theorem 8.2.3 inside the radius of convergence $|x| < 1$, multiply by $x$, and evaluate at $x = 1/2$.</p>",
  "solution": "<p><b>(a) Term-by-Term Differentiation:</b> The power series $f(x) = \\sum_{n=0}^\\infty x^n$ has radius of convergence $R = 1$. By Theorem 8.2.3 (Term-by-Term Differentiation of Power Series), any power series can be differentiated term-by-term at every point inside its open interval of convergence $(-1, 1)$, and the differentiated series has the same radius of convergence $R = 1$.</p><p>Differentiating both sides: $$f'(x) = \\frac{d}{dx} \\left( \\frac{1}{1-x} \\right) = \\frac{1}{(1-x)^2}$$ On the series side: $$f'(x) = \\sum_{n=1}^\\infty n x^{n-1}$$ Multiply both sides by $x$: $$\\sum_{n=1}^\\infty n x^n = x f'(x) = \\frac{x}{(1-x)^2} \\quad \\text{for all } |x| < 1$$</p><p><b>(b) Numerical Evaluation for $x = 1/2$:</b> Since $|1/2| < 1$, substitute $x = 1/2$ into the formula: $$\\sum_{n=1}^\\infty \\frac{n}{2^n} = \\frac{1/2}{(1 - 1/2)^2} = \\frac{1/2}{(1/2)^2} = \\frac{1/2}{1/4} = 2$$</p>",
  "trap": "Term-by-term differentiation is unconditionally valid strictly inside $(-R, R)$, but never attempt to differentiate at the boundary endpoints."
},
{
  "id": "w.10.1.01",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.1",
  "marks": 5,
  "title": "Adaptive Gauges and Forcing Endpoint Tags",
  "source": "Bartle & Sherbert 4e §10.1 Ex 1 & 2",
  "prompt": "Let $I = [0, 1]$. Define a gauge $\\delta(t)$ on $[0, 1]$ by $\\delta(0) := 0.01$ and $\\delta(t) := t/2$ for all $t \\in (0, 1]$.<br>(a) Prove that if $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ is a $\\delta$-fine tagged partition of $[0, 1]$, then the tag for the first subinterval $[0, x_1]$ MUST be $t_1 = 0$.<br>(b) What upper bound does this place on the length of the first subinterval $x_1$?",
  "tests": [
    "c.10.1.1"
  ],
  "approach": "<p>Assume $t_1 > 0$ and show that the requirement $0 \\in [t_1 - \\delta(t_1), t_1 + \\delta(t_1)]$ is violated because $t_1 - \\delta(t_1) = t_1/2 > 0$.</p>",
  "solution": "<p><b>(a) Tag $t_1$ must be $0$:</b> Since $\\dot{\\mathcal{P}}$ is a tagged partition of $[0, 1]$, the first subinterval has left endpoint $x_0 = 0$. By definition of a $\\delta$-fine partition, the entire subinterval $[0, x_1]$ must be contained in the gauge interval of its tag $t_1$:</p><p>$$[0, x_1] \\subseteq [t_1 - \\delta(t_1), \\, t_1 + \\delta(t_1)]$$</p><p>In particular, the point $0$ must belong to this interval, which requires: $$t_1 - \\delta(t_1) \\le 0$$</p><p>Now assume for contradiction that $t_1 > 0$. Then by definition of the gauge $\\delta(t)$: $$\\delta(t_1) = \\frac{t_1}{2}$$ This means: $$t_1 - \\delta(t_1) = t_1 - \\frac{t_1}{2} = \\frac{t_1}{2} > 0$$ This contradicts $t_1 - \\delta(t_1) \\le 0$! Therefore, it is impossible for $t_1$ to be strictly positive.</p><p>Since $t_1 \\in [0, x_1] \\subseteq [0, 1]$, the only remaining possibility is $t_1 = 0$.</p><p><b>(b) Bound on $x_1$:</b> Since $t_1 = 0$, we have: $$[0, x_1] \\subseteq [0 - \\delta(0), \\, 0 + \\delta(0)] = [-0.01, \\, 0.01]$$ Therefore, the right endpoint must satisfy $x_1 \\le 0.01$. The length of the first subinterval cannot exceed $0.01$.</p>",
  "trap": "This problem illustrates the tremendous control of adaptive gauges: by defining $\\delta(t) = t/2$, we completely lock the tag at 0 and force the partition to be as small as desired near 0."
},
{
  "id": "w.10.1.02",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.1",
  "marks": 5,
  "title": "Cousin's Lemma and Failure on Non-Compact Intervals",
  "source": "Bartle & Sherbert 4e §10.1 Ex 4",
  "prompt": "(a) State Cousin's Lemma.<br>(b) Construct an explicit gauge $\\delta(t) > 0$ on the half-open interval $(0, 1]$ such that NO finite tagged partition of $(0, 1]$ is $\\delta$-fine.<br>(c) Why does this counterexample not contradict Cousin's Lemma?",
  "tests": [
    "c.10.1.2"
  ],
  "approach": "<p>Define $\\delta(t) = t/2$ on $(0, 1]$ and show that no finite chain of intervals can reach 0.</p>",
  "solution": "<p><b>(a) State Cousin's Lemma:</b> Let $I = [a, b]$ be a closed bounded interval, and let $\\delta: I \\to (0, \\infty)$ be an arbitrary gauge on $I$. Then there exists at least one tagged partition $\\dot{\\mathcal{P}}$ of $I$ that is $\\delta$-fine.</p><p><b>(b) Counterexample on $(0, 1]$:</b> Define $\\delta: (0, 1] \\to (0, \\infty)$ by $\\delta(t) := \\frac{t}{2}$.</p><p>Suppose for contradiction that a finite tagged partition $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ of $(0, 1]$ exists, where $0 = x_0 < x_1 < \\dots < x_n = 1$.</p><p>For the first subinterval $[x_0, x_1] = (0, x_1]$, the tag $t_1$ must belong to $(0, x_1]$, so $t_1 > 0$. The $\\delta$-fine condition requires:</p><p>$$(0, x_1] \\subseteq [t_1 - \\delta(t_1), \\, t_1 + \\delta(t_1)] = \\left[ \\frac{t_1}{2}, \\, \\frac{3t_1}{2} \\right]$$</p><p>However, the left endpoint of the gauge interval is $\\frac{t_1}{2} > 0$. The open interval $(0, t_1/2)$ is completely missed by this interval! Since $0$ is an open boundary, no subinterval tagged by any $t_1 > 0$ can ever cover the numbers in $(0, t_1/2)$.</p><p>Thus, no finite tagged partition can ever cover $(0, 1]$.</p><p><b>(c) Why no contradiction:</b> Cousin's Lemma requires the interval to be <b>closed and bounded (compact)</b>. The interval $(0, 1]$ is missing its left endpoint $0$ (not closed), so compactness fails and Cousin's Lemma does not apply.</p>",
  "trap": "Cousin's Lemma is an equivalent formulation of compactness (Heine-Borel / Bolzano-Weierstrass); it strictly requires closed and bounded intervals."
},
{
  "id": "w.10.1.03",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.1",
  "marks": 5,
  "title": "Henstock–Kurzweil Integrability of Dirichlet's Function",
  "source": "Bartle & Sherbert 4e §10.1 Ex 6",
  "prompt": "Let $f: [0, 1] \\to \\mathbb{R}$ be Dirichlet's function: $f(x) = 1$ if $x \\in \\mathbb{Q}$ and $f(x) = 0$ if $x \\notin \\mathbb{Q}$.<br>Let $\\{r_k\\}_{k=1}^\\infty$ be an enumeration of the rational numbers in $[0, 1]$. Given $\\varepsilon > 0$, define the gauge $\\delta(t)$ by:<br>$$\\delta(t) = \\frac{\\varepsilon}{2^{k+2}} \\quad \\text{if } t = r_k, \\qquad \\delta(t) = 1 \\quad \\text{if } t \\notin \\mathbb{Q}$$<br>Prove that $f \\in \\mathcal{HK}[0, 1]$ and $\\int_0^1 f(x) \\, dx = 0$.",
  "tests": [
    "c.10.1.5",
    "c.10.1.1"
  ],
  "approach": "<p>Split the Riemann sum into rational tags and irrational tags. Irrational tags contribute 0, and rational tags are trapped in intervals bounded by $2 \\delta(r_k)$.</p>",
  "solution": "<p><b>1. Structure of the Riemann Sum:</b> Let $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ be an arbitrary $\\delta$-fine tagged partition of $[0, 1]$. Consider the Riemann sum: $$S(f, \\dot{\\mathcal{P}}) = \\sum_{i=1}^n f(t_i)(x_i - x_{i-1})$$</p><p>• If tag $t_i \\notin \\mathbb{Q}$, then $f(t_i) = 0$, so that subinterval contributes $0 \\cdot (x_i - x_{i-1}) = 0$.</p><p>• If tag $t_i \\in \\mathbb{Q}$, then $f(t_i) = 1$, and $t_i = r_k$ for some index $k \\in \\mathbb{N}$.</p><p>Therefore: $$S(f, \\dot{\\mathcal{P}}) = \\sum_{t_i \\in \\mathbb{Q}} 1 \\cdot (x_i - x_{i-1}) = \\sum_{t_i \\in \\mathbb{Q}} (x_i - x_{i-1})$$</p><p><b>2. Bounding the Lengths:</b> For each subinterval $[x_{i-1}, x_i]$ tagged by $t_i = r_k$, the $\\delta$-fine condition guarantees: $$[x_{i-1}, x_i] \\subseteq [r_k - \\delta(r_k), \\, r_k + \\delta(r_k)]$$ The maximum total length of all subintervals that can be tagged by this same rational $r_k$ is at most the diameter of the gauge window: $$2\\delta(r_k) = 2 \\cdot \\frac{\\varepsilon}{2^{k+2}} = \\frac{\\varepsilon}{2^{k+1}}$$</p><p><b>3. Summing over all Rationals:</b> Since each rational tag $t_i$ corresponds to some $r_k$ in the enumeration: $$0 \\le S(f, \\dot{\\mathcal{P}}) \\le \\sum_{k=1}^\\infty 2\\delta(r_k) = \\sum_{k=1}^\\infty \\frac{\\varepsilon}{2^{k+1}} = \\varepsilon \\sum_{k=1}^\\infty \\frac{1}{2^{k+1}} = \\varepsilon \\cdot \\frac{1/4}{1 - 1/2} = \\frac{\\varepsilon}{2} < \\varepsilon$$</p><p>Since $|S(f, \\dot{\\mathcal{P}}) - 0| < \\varepsilon$ for every $\\delta$-fine partition $\\dot{\\mathcal{P}}$, $f$ is generalized Riemann integrable on $[0, 1]$ and $\\int_0^1 f = 0$.</p>",
  "trap": "Riemann's integral cannot integrate Dirichlet's function because uniform partitions always have upper sum 1 and lower sum 0; the gauge integral easily integrates it by shrinking the gauge around each rational point."
},
{
  "id": "w.10.2.01",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.2",
  "marks": 5,
  "title": "FTC for Highly Oscillating and Unbounded Derivatives",
  "source": "Bartle & Sherbert 4e §10.2 Ex 1",
  "prompt": "Define $F(x) := x^2 \\cos(\\pi / x^2)$ for $x \\in (0, 1]$ and $F(0) := 0$.<br>(a) Show that $F$ is differentiable at every $x \\in [0, 1]$ and compute $f(x) := F'(x)$.<br>(b) Explain why $f$ is NOT Riemann integrable on $[0, 1]$.<br>(c) Prove that $f \\in \\mathcal{HK}[0, 1]$ and evaluate $\\int_0^1 f(x) \\, dx$.",
  "tests": [
    "c.10.2.1",
    "c.6.1.1"
  ],
  "approach": "<p>Differentiate $F$ at $x=0$ via limit definition, observe unboundedness near 0 to rule out Riemann integrability, and apply the HK Fundamental Theorem of Calculus.</p>",
  "solution": "<p><b>(a) Differentiability of $F$:</b></p><p>• For $x > 0$: By product and chain rules: $$F'(x) = 2x \\cos\\left(\\frac{\\pi}{x^2}\\right) + x^2 \\left(-\\sin\\left(\\frac{\\pi}{x^2}\\right)\\right) \\left(-\\frac{2\\pi}{x^3}\\right) = 2x \\cos\\left(\\frac{\\pi}{x^2}\\right) + \\frac{2\\pi}{x} \\sin\\left(\\frac{\\pi}{x^2}\\right)$$</p><p>• At $x = 0$: By the limit definition: $$F'(0) = \\lim_{x \\to 0^+} \\frac{F(x) - F(0)}{x - 0} = \\lim_{x \\to 0^+} \\frac{x^2 \\cos(\\pi/x^2)}{x} = \\lim_{x \\to 0^+} x \\cos\\left(\\frac{\\pi}{x^2}\\right) = 0$$ since $|x \\cos(\\pi/x^2)| \\le |x| \\to 0$. Thus $F$ is differentiable everywhere on $[0, 1]$.</p><p><b>(b) Why $f$ is not Riemann Integrable:</b> Notice the term $\\frac{2\\pi}{x} \\sin(\\pi/x^2)$. As $x \\to 0^+$, choosing points $x_k = (k + 1/2)^{-1/2}$ makes $\\sin(\\pi/x_k^2) = \\pm 1$, while $\\frac{2\\pi}{x_k} \\to \\infty$.</p><p>Thus $f(x)$ is <b>unbounded</b> on $[0, 1]$. By the Riemann integrability criterion (Theorem 7.1.2), every Riemann integrable function MUST be bounded. Since $f$ is unbounded, $f \\notin \\mathcal{R}[0, 1]$.</p><p><b>(c) Henstock–Kurzweil Integrability:</b> By the Fundamental Theorem of Calculus for the Generalized Riemann Integral (Theorem 10.2.1): If $F: [a, b] \\to \\mathbb{R}$ is differentiable at EVERY point of $[a, b]$, then its derivative $f = F'$ is generalized Riemann integrable on $[a, b]$, and: $$\\int_a^b f(x) \\, dx = F(b) - F(a)$$ Since $F$ is differentiable at every point of $[0, 1]$, $f \\in \\mathcal{HK}[0, 1]$ unconditionally, and: $$\\int_0^1 f(x) \\, dx = F(1) - F(0) = 1^2 \\cos(\\pi) - 0 = -1$$</p>",
  "trap": "Even the Lebesgue integral CANNOT integrate this function because $\\int_0^1 |f| = \\infty$ (it is not absolutely integrable); the HK integral is the only integral that integrates every derivative."
},
{
  "id": "w.10.2.02",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.2",
  "marks": 5,
  "title": "Absorption of Endpoint Singularities via Hake's Theorem",
  "source": "Bartle & Sherbert 4e §10.2 Ex 4",
  "prompt": "Let $f(x) := \\frac{1}{\\sqrt{x}}$ for $x \\in (0, 1]$ and $f(0) := 0$.<br>(a) Show that $f$ is not Riemann integrable on $[0, 1]$.<br>(b) State Hake's Theorem for left-endpoint singularities.<br>(c) Use Hake's Theorem to prove that $f \\in \\mathcal{HK}[0, 1]$ and calculate its integral.",
  "tests": [
    "c.10.2.5"
  ],
  "approach": "<p>Observe unboundedness as $x \\to 0^+$, state Hake's theorem equivalence, and evaluate the proper Riemann integrals on $[c, 1]$ as $c \\to 0^+$.</p>",
  "solution": "<p><b>(a) Not Riemann Integrable:</b> Since $\\lim_{x \\to 0^+} \\frac{1}{\\sqrt{x}} = \\infty$, $f$ is unbounded on $[0, 1]$. Hence $f \\notin \\mathcal{R}[0, 1]$.</p><p><b>(b) Hake's Theorem (Theorem 10.2.5):</b> Let $f: [a, b] \\to \\mathbb{R}$. If $f \\in \\mathcal{HK}[c, b]$ for every $c \\in (a, b)$, then $f \\in \\mathcal{HK}[a, b]$ if and only if the limit exists in $\\mathbb{R}$:</p><p>$$\\lim_{c \\to a^+} \\int_c^b f(x) \\, dx = L$$</p><p>When this limit exists, $\\int_a^b f(x) \\, dx = L$.</p><p><b>(c) Application to $1/\\sqrt{x}$:</b> For any $c \\in (0, 1]$, $f(x) = 1/\\sqrt{x}$ is continuous on $[c, 1]$, so it is Riemann integrable (and hence HK-integrable) on $[c, 1]$:</p><p>$$\\int_c^1 \\frac{1}{\\sqrt{x}} \\, dx = [2\\sqrt{x}]_c^1 = 2 - 2\\sqrt{c}$$</p><p>Taking the limit as $c \\to 0^+$:</p><p>$$\\lim_{c \\to 0^+} \\int_c^1 \\frac{1}{\\sqrt{x}} \\, dx = \\lim_{c \\to 0^+} (2 - 2\\sqrt{c}) = 2 - 0 = 2$$</p><p>By Hake's Theorem, $f \\in \\mathcal{HK}[0, 1]$ and $\\int_0^1 \\frac{1}{\\sqrt{x}} \\, dx = 2$.</p>",
  "trap": "In freshman calculus, improper integrals require an artificial limit outside the theory; in HK theory, Hake's Theorem proves that improper integrals are genuine, ordinary integrals within the exact same definition."
},
{
  "id": "w.10.2.03",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.2",
  "marks": 5,
  "title": "Hierarchy of Riemann, Lebesgue, and Henstock–Kurzweil Integrals",
  "source": "Bartle & Sherbert 4e §10.2 Ex 7",
  "prompt": "(a) State the strict inclusions between the sets of Riemann integrable functions $\\mathcal{R}[a, b]$, Lebesgue integrable functions $\\mathcal{L}[a, b]$, and Henstock–Kurzweil integrable functions $\\mathcal{HK}[a, b]$.<br>(b) Prove that $f \\in \\mathcal{L}[a, b]$ if and only if both $f \\in \\mathcal{HK}[a, b]$ and $|f| \\in \\mathcal{HK}[a, b]$.<br>(c) Provide a specific example showing that $\\mathcal{HK}[a, b] \\ne \\mathcal{L}[a, b]$.",
  "tests": [
    "c.10.2.1",
    "c.10.2.5"
  ],
  "approach": "<p>Describe the hierarchy $\\mathcal{R} \\subsetneq \\mathcal{L} \\subsetneq \\mathcal{HK}$, state absolute integrability equivalence, and cite the derivative of $x^2 \\sin(1/x^2)$.</p>",
  "solution": "<p><b>(a) The Master Hierarchy:</b> On any compact interval $[a, b]$, the following strict inclusions hold:</p><p>$$\\mathcal{R}[a, b] \\subsetneq \\mathcal{L}[a, b] \\subsetneq \\mathcal{HK}[a, b]$$</p><p>• Dirichlet's function belongs to $\\mathcal{L} \\setminus \\mathcal{R}$, showing $\\mathcal{R} \\ne \\mathcal{L}$.</p><p>• Conditionally integrable functions (such as derivatives with unbounded oscillation) belong to $\\mathcal{HK} \\setminus \\mathcal{L}$, showing $\\mathcal{L} \\ne \\mathcal{HK}$.</p><p><b>(b) Absolute Integrability Characterization:</b> The Lebesgue integral is by definition an <b>absolute integral</b>: a measurable function $f$ is Lebesgue integrable if and only if $\\int_a^b |f| < \\infty$.</p><p>In contrast, the Henstock–Kurzweil integral is a <b>non-absolute integral</b>: it can integrate functions whose positive and negative cancellations sum to a finite value even when $|f|$ integrates to infinity. Therefore: $$f \\in \\mathcal{L}[a, b] \\iff f \\in \\mathcal{HK}[a, b] \\text{ and } |f| \\in \\mathcal{HK}[a, b]$$</p><p><b>(c) Concrete Example:</b> Let $F(x) = x^2 \\sin(\\pi / x^2)$ for $x \\in (0, 1]$ and $F(0) = 0$. Its derivative $f(x) = F'(x)$ is differentiable everywhere, so by Theorem 10.2.1, $f \\in \\mathcal{HK}[0, 1]$.</p><p>However, $\\int_0^1 |f(x)| \\, dx = \\infty$, so $f \\notin \\mathcal{L}[0, 1]$. This proves $\\mathcal{L}[0, 1] \\subsetneq \\mathcal{HK}[0, 1]$.</p>",
  "trap": "Many students think Lebesgue integration is the ultimate integral; the Henstock–Kurzweil gauge integral is strictly more general than Lebesgue on $\\mathbb{R}$."
},
{
  "id": "w.10.3.01",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.3",
  "marks": 5,
  "title": "The Gauge Integral on the Unbounded Ray $[0, \\infty)$",
  "source": "Bartle & Sherbert 4e §10.3 Ex 1 & 2",
  "prompt": "Let $f(x) = e^{-x}$ on $[0, \\infty)$.<br>(a) Describe how gauges on $[0, \\infty)^*$ are defined to handle the point at infinity $\\infty$.<br>(b) State Hake's Theorem for unbounded intervals $[a, \\infty)$.<br>(c) Apply Hake's Theorem to evaluate $\\int_0^\\infty e^{-x} \\, dx$.",
  "tests": [
    "c.10.3.1"
  ],
  "approach": "<p>Define gauge neighborhoods $(M, \\infty]$ for tag $\\infty$, state Hake's theorem on rays, and compute the limit of proper integrals.</p>",
  "solution": "<p><b>(a) Gauges on $[0, \\infty)^*$:</b> We compactify $[0, \\infty)$ by adjoining the ideal point $\\infty$, setting $[0, \\infty)^* = [0, \\infty) \\cup \\{\\infty\\}$.</p><p>A <b>gauge</b> on $[0, \\infty)^*$ consists of:</p><p>1. A positive number $\\delta(t) > 0$ for each finite point $t \\in [0, \\infty)$.</p><p>2. A real number $M > 0$ specifying an open neighborhood $(M, \\infty]$ for the tag $\\infty$.</p><p>A tagged partition of $[0, \\infty)$ is $\\delta$-fine if its finite subintervals satisfy $[x_{i-1}, x_i] \\subseteq [t_i - \\delta(t_i), t_i + \\delta(t_i)]$ and the final unbounded subinterval $[x_n, \\infty)$ satisfies $x_n > M$ tagged by $\\infty$ (with convention $f(\\infty)(x - x_n) = 0$).</p><p><b>(b) Hake's Theorem for Unbounded Intervals (Theorem 10.3.1):</b> Let $f: [a, \\infty) \\to \\mathbb{R}$. Then $f \\in \\mathcal{HK}[a, \\infty)$ if and only if $f \\in \\mathcal{HK}[a, c]$ for every $c > a$ and the limit exists in $\\mathbb{R}$:</p><p>$$\\lim_{c \\to \\infty} \\int_a^c f(x) \\, dx = L$$</p><p>When this limit exists, $\\int_a^\\infty f(x) \\, dx = L$.</p><p><b>(c) Evaluation for $e^{-x}$:</b> For any $c > 0$, $e^{-x}$ is continuous on $[0, c]$, so: $$\\int_0^c e^{-x} \\, dx = [-e^{-x}]_0^c = -e^{-c} - (-e^0) = 1 - e^{-c}$$ Taking the limit as $c \\to \\infty$: $$\\lim_{c \\to \\infty} \\int_0^c e^{-x} \\, dx = \\lim_{c \\to \\infty} (1 - e^{-c}) = 1 - 0 = 1$$ Therefore, $e^{-x} \\in \\mathcal{HK}[0, \\infty)$ and $\\int_0^\\infty e^{-x} \\, dx = 1$.</p>",
  "trap": "In the gauge partition of $[a, \\infty)$, the last subinterval is $[x_n, \\infty)$ and its tag is $\\infty$."
},
{
  "id": "w.10.3.02",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.3",
  "marks": 5,
  "title": "The Dirichlet Sinc Integral and Conditional Integrability on Rays",
  "source": "Bartle & Sherbert 4e §10.3 Ex 5",
  "prompt": "Consider the Dirichlet sinc integral $\\int_0^\\infty \\frac{\\sin x}{x} \\, dx$ (where the integrand is defined as $1$ at $x = 0$).<br>(a) Prove that $\\lim_{c\\to\\infty} \\int_0^c \\frac{\\sin x}{x} \\, dx$ exists using integration by parts.<br>(b) Deduce that $\\frac{\\sin x}{x} \\in \\mathcal{HK}[0, \\infty)$.<br>(c) Prove that $\\int_0^\\infty \\left|\\frac{\\sin x}{x}\\right| dx = \\infty$, and conclude that this function is HK-integrable but NOT Lebesgue integrable on $[0, \\infty)$.",
  "tests": [
    "c.10.3.1",
    "c.10.2.5"
  ],
  "approach": "<p>Integrate by parts with $u = 1/x, dv = \\sin x dx$ to expose absolute convergence of $\\cos x / x^2$, then bound $|\\sin x|/x$ from below on each half-period.</p>",
  "solution": "<p><b>(a) Existence of the Limit via Integration by Parts:</b> For any $c > 1$: $$\\int_1^c \\frac{\\sin x}{x} \\, dx = \\left[ -\\frac{\\cos x}{x} \\right]_1^c - \\int_1^c \\frac{\\cos x}{x^2} \\, dx = \\cos 1 - \\frac{\\cos c}{c} - \\int_1^c \\frac{\\cos x}{x^2} \\, dx$$ As $c \\to \\infty$, $\\frac{\\cos c}{c} \\to 0$. Furthermore, $\\left| \\frac{\\cos x}{x^2} \\right| \\le \\frac{1}{x^2}$, and $\\int_1^\\infty \\frac{1}{x^2} dx = 1 < \\infty$.</p><p>By the Comparison Test, $\\int_1^\\infty \\frac{\\cos x}{x^2} dx$ converges absolutely. Since $\\frac{\\sin x}{x}$ is continuous on $[0, 1]$, $\\int_0^1 \\frac{\\sin x}{x} dx$ is finite. Thus $\\lim_{c \\to \\infty} \\int_0^c \\frac{\\sin x}{x} dx$ exists (and equals $\\frac{\\pi}{2}$).</p><p><b>(b) HK-Integrability:</b> By Hake's Theorem for unbounded intervals (Theorem 10.3.1), since $\\lim_{c\\to\\infty} \\int_0^c \\frac{\\sin x}{x} dx = \\frac{\\pi}{2}$, we have: $$\\frac{\\sin x}{x} \\in \\mathcal{HK}[0, \\infty) \\quad \\text{and} \\quad \\int_0^\\infty \\frac{\\sin x}{x} \\, dx = \\frac{\\pi}{2}$$</p><p><b>(c) Divergence of Absolute Integral:</b> For each integer $k \\ge 1$, on the interval $[k\\pi, (k+1)\\pi]$: $$\\int_{k\\pi}^{(k+1)\\pi} \\left| \\frac{\\sin x}{x} \\right| dx \\ge \\frac{1}{(k+1)\\pi} \\int_{k\\pi}^{(k+1)\\pi} |\\sin x| \\, dx = \\frac{1}{(k+1)\\pi} \\cdot 2 = \\frac{2}{(k+1)\\pi}$$ Summing from $k = 1$ to $n$: $$\\int_\\pi^{(n+1)\\pi} \\left| \\frac{\\sin x}{x} \\right| dx \\ge \\frac{2}{\\pi} \\sum_{k=1}^n \\frac{1}{k+1} \\to +\\infty$$ Since the harmonic series diverges, $\\int_0^\\infty \\left| \\frac{\\sin x}{x} \\right| dx = \\infty$.</p><p>Because Lebesgue integration requires absolute integrability, $\\frac{\\sin x}{x} \\notin \\mathcal{L}[0, \\infty)$.</p>",
  "trap": "The Dirichlet integral $\\int_0^\\infty \\frac{\\sin x}{x}dx = \\frac{\\pi}{2}$ is the classic example separating the Henstock–Kurzweil integral from the Lebesgue integral on unbounded domains."
},
{
  "id": "w.10.4.01",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.4",
  "marks": 5,
  "title": "Monotone Convergence Theorem for Gauge Integral vs Riemann Failure",
  "source": "Bartle & Sherbert 4e §10.4 Ex 1",
  "prompt": "Let $\\{r_k\\}_{k=1}^\\infty$ be an enumeration of the rational numbers in $[0, 1]$. Define $f_n(x) := 1$ if $x \\in \\{r_1, r_2, \\dots, r_n\\}$, and $f_n(x) := 0$ otherwise.<br>(a) State the Monotone Convergence Theorem for the gauge integral.<br>(b) Apply it to $(f_n)$ to deduce that Dirichlet's function is HK-integrable with $\\int_0^1 f = 0$.<br>(c) Explain why this demonstration completely fails under the Riemann integral.",
  "tests": [
    "c.10.4.1",
    "c.10.1.5"
  ],
  "approach": "<p>Observe that $f_n$ is a step function with finite non-zero points, hence $f_n \\uparrow f$, and apply MCT.</p>",
  "solution": "<p><b>(a) Monotone Convergence Theorem (Theorem 10.4.1):</b> Let $(f_n)$ be a sequence of functions in $\\mathcal{HK}[a, b]$ such that:</p><p>1. $f_n(x) \\le f_{n+1}(x)$ for all $n \\in \\mathbb{N}$ and almost all $x \\in [a, b]$.</p><p>2. $\\lim_{n\\to\\infty} f_n(x) = f(x)$ pointwise almost everywhere.</p><p>3. The sequence of integrals is bounded: $\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = L < \\infty$.</p><p>Then $f \\in \\mathcal{HK}[a, b]$ and $\\int_a^b f(x) \\, dx = \\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = L$.</p><p><b>(b) Application to Dirichlet's Function:</b></p><p>• Each $f_n$ is non-zero at only finitely many points $\\{r_1, \\dots, r_n\\}$, so $f_n$ is Riemann integrable with $\\int_0^1 f_n = 0$.</p><p>• $f_n(x) \\le f_{n+1}(x)$ for all $x \\in [0, 1]$ (monotone increasing).</p><p>• As $n \\to \\infty$, $f_n(x) \\to f(x)$ where $f$ is Dirichlet's function (1 on $\\mathbb{Q}$, 0 on irrationals).</p><p>• $\\lim_{n\\to\\infty} \\int_0^1 f_n = \\lim 0 = 0 < \\infty$.</p><p>By the Monotone Convergence Theorem, Dirichlet's function $f \\in \\mathcal{HK}[0, 1]$ and $\\int_0^1 f(x) \\, dx = 0$.</p><p><b>(c) Failure under Riemann Integral:</b> The Riemann integral does NOT satisfy the Monotone Convergence Theorem! Even though each $f_n \\in \\mathcal{R}[0, 1]$ and $f_n \\uparrow f$, the limit function $f$ has upper Riemann sum $U(f) = 1$ and lower Riemann sum $L(f) = 0$. Thus $f \\notin \\mathcal{R}[0, 1]$. This is one of the most famous historical defects of the Riemann integral, completely cured by the Henstock–Kurzweil integral.</p>",
  "trap": "Riemann integration is not closed under monotone limits of functions; both Lebesgue and Henstock–Kurzweil integrals fix this defect."
},
{
  "id": "w.10.4.02",
  "course": "ra2",
  "module": "ra2.m6",
  "sec": "10.4",
  "marks": 5,
  "title": "Dominated Convergence Theorem for Limits Under the Integral",
  "source": "Bartle & Sherbert 4e §10.4 Ex 4",
  "prompt": "Evaluate the limit:<br>$$\\lim_{n\\to\\infty} \\int_0^1 \\frac{n x \\sin x}{1 + n^2 x^2} \\, dx$$<br>using the Dominated Convergence Theorem for the gauge integral. State the dominating function $g(x)$ and prove that it is integrable.",
  "tests": [
    "c.10.4.1"
  ],
  "approach": "<p>Find the pointwise limit of the integrand as $n \\to \\infty$, maximize $n x / (1 + n^2 x^2)$ using calculus to find a bound $g(x) = 1/2$, and apply DCT.</p>",
  "solution": "<p><b>1. Pointwise Limit:</b> Let $f_n(x) = \\frac{n x \\sin x}{1 + n^2 x^2}$ on $[0, 1]$.</p><p>• At $x = 0$: $f_n(0) = 0$ for all $n$, so $\\lim f_n(0) = 0$.</p><p>• For $x \\in (0, 1]$: As $n \\to \\infty$, the denominator grows like $n^2 x^2$ while the numerator grows like $n x$: $$\\lim_{n\\to\\infty} f_n(x) = \\lim_{n\\to\\infty} \\frac{n x \\sin x}{1 + n^2 x^2} = \\lim_{n\\to\\infty} \\frac{x \\sin x}{\\frac{1}{n} + n x^2} = 0$$ Thus $f_n(x) \\to 0$ pointwise for all $x \\in [0, 1]$.</p><p><b>2. Finding the Dominating Function $g(x)$:</b> Notice that by the AM-GM inequality, for any real $u \\ge 0$: $$1 + u^2 \\ge 2u \\implies \\frac{u}{1 + u^2} \\le \\frac{1}{2}$$ Setting $u = n x \\ge 0$: $$\\frac{nx}{1 + n^2 x^2} \\le \\frac{1}{2}$$ Since $|\\sin x| \\le 1$ for all $x \\in [0, 1]$, we obtain for all $n \\in \\mathbb{N}$ and all $x \\in [0, 1]$:</p><p>$$|f_n(x)| = \\left| \\frac{nx}{1 + n^2 x^2} \\sin x \\right| \\le \\frac{1}{2} \\cdot 1 = \\frac{1}{2} =: g(x)$$</p><p>The constant function $g(x) = 1/2$ is continuous on $[0, 1]$, so $g \\in \\mathcal{HK}[0, 1]$ (and $\\int_0^1 g = 1/2 < \\infty$).</p><p><b>3. Application of Dominated Convergence Theorem:</b> By the Dominated Convergence Theorem (Theorem 10.4.1(b)), we can interchange limit and integral:</p><p>$$\\lim_{n\\to\\infty} \\int_0^1 \\frac{n x \\sin x}{1 + n^2 x^2} \\, dx = \\int_0^1 \\left( \\lim_{n\\to\\infty} f_n(x) \\right) dx = \\int_0^1 0 \\, dx = 0$$</p>",
  "trap": "The pointwise limit is 0, but you cannot simply bring the limit inside the integral without establishing an integrable dominating ceiling $g(x)$."
},
{
  "id": "w.11.3.01",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.3",
  "marks": 5,
  "title": "Topological Characterization of Continuity via Open Preimages",
  "source": "Bartle & Sherbert 4e §11.3 Ex 1 & 2",
  "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$. Prove that $f$ is continuous on $\\mathbb{R}$ if and only if for every open set $G \\subseteq \\mathbb{R}$, the inverse image $f^{-1}(G) = \\{x \\in \\mathbb{R} : f(x) \\in G\\}$ is an open set in $\\mathbb{R}$.",
  "tests": [
    "c.11.3.1"
  ],
  "approach": "<p>($\\implies$) Given $c \\in f^{-1}(G)$, choose an $\\varepsilon$-ball inside $G$ and use continuity to find a $\\delta$-ball around $c$. ($\\impliedby$) Test open balls $V_\\varepsilon(f(c))$.</p>",
  "solution": "<p><b>($\\implies$) Continuity implies Preimages of Open Sets are Open:</b></p><p>Assume $f$ is continuous on $\\mathbb{R}$, and let $G \\subseteq \\mathbb{R}$ be an arbitrary open set. If $f^{-1}(G) = \\emptyset$, it is open by definition.</p><p>Suppose $f^{-1}(G) \\ne \\emptyset$, and let $c \\in f^{-1}(G)$. Then $f(c) \\in G$.</p><p>Since $G$ is open, there exists $\\varepsilon > 0$ such that the open neighborhood $V_\\varepsilon(f(c)) = (f(c) - \\varepsilon, f(c) + \\varepsilon) \\subseteq G$.</p><p>Since $f$ is continuous at $c$, for this $\\varepsilon > 0$ there exists $\\delta > 0$ such that: $$|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$$ In set notation, this means: $$f(V_\\delta(c)) \\subseteq V_\\varepsilon(f(c)) \\subseteq G$$ Taking the inverse image gives $V_\\delta(c) \\subseteq f^{-1}(G)$.</p><p>Thus, $c$ is an interior point of $f^{-1}(G)$. Since $c$ was arbitrary, every point of $f^{-1}(G)$ is an interior point, so $f^{-1}(G)$ is open.</p><p><b>($\\impliedby$) Open Preimages imply Continuity:</b></p><p>Assume $f^{-1}(G)$ is open for every open set $G \\subseteq \\mathbb{R}$.</p><p>Let $c \\in \\mathbb{R}$ and let $\\varepsilon > 0$ be given. Consider the open interval $G = V_\\varepsilon(f(c)) = (f(c) - \\varepsilon, f(c) + \\varepsilon)$.</p><p>Since $G$ is open, its preimage $U = f^{-1}(G)$ is an open set in $\\mathbb{R}$. Notice that $c \\in U$ because $f(c) \\in G$.</p><p>Since $U$ is open and $c \\in U$, there exists $\\delta > 0$ such that $V_\\delta(c) = (c - \\delta, c + \\delta) \\subseteq U$.</p><p>This means: $$|x - c| < \\delta \\implies x \\in U \\implies f(x) \\in G = V_\\varepsilon(f(c)) \\implies |f(x) - f(c)| < \\varepsilon$$ This is precisely the $\\varepsilon$-$\\delta$ definition of continuity at $c$. Since $c \\in \\mathbb{R}$ was arbitrary, $f$ is continuous on $\\mathbb{R}$.</p>",
  "trap": "Remember that continuity requires the INVERSE image $f^{-1}(G)$ to be open, not the forward image $f(G)$."
},
{
  "id": "w.11.3.02",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.3",
  "marks": 5,
  "title": "Forward Images of Open Sets vs Preimages",
  "source": "Bartle & Sherbert 4e §11.3 Ex 4 & 5",
  "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be a continuous function and $G \\subseteq \\mathbb{R}$ an open set.<br>(a) Provide an explicit example showing that the forward image $f(G)$ need NOT be open.<br>(b) Provide an example where $f(G)$ is a closed set.<br>(c) State the topological property of continuous functions that guarantees openness of preimages, and explain why forward openness fails in general.",
  "tests": [
    "c.11.3.1"
  ],
  "approach": "<p>Consider non-injective functions like $f(x) = x^2$ or constant functions, and analyze their images on open intervals.</p>",
  "solution": "<p><b>(a) Example where $f(G)$ is neither open nor closed:</b> Let $f(x) = x^2$ and $G = (-1, 2)$. The function $f$ is continuous on $\\mathbb{R}$ and $G$ is an open interval.</p><p>The image is: $$f(G) = \\{x^2 : x \\in (-1, 2)\\} = [0, 4)$$ Notice that $[0, 4)$ contains its left boundary $0$ but not its right boundary $4$. It is neither open nor closed in $\\mathbb{R}$!</p><p><b>(b) Example where $f(G)$ is closed:</b></p><p>• Example 1: Let $f(x) = 5$ (constant function) and $G = (0, 1)$. Then $f(G) = \\{5\\}$, which is a single point and therefore a <b>closed</b> set in $\\mathbb{R}$.</p><p>• Example 2: Let $f(x) = \\sin x$ and $G = (0, 2\\pi)$. Then $f(G) = [-1, 1]$, which is a closed interval!</p><p><b>(c) Theoretical Explanation:</b> A function that maps open sets to open sets is called an <b>open map</b>.</p><p>Continuity is defined by pulling neighborhoods BACKWARDS: $f^{-1}(V_\\varepsilon(f(c)))$ must contain a ball $V_\\delta(c)$. This requires nothing about the forward behavior.</p><p>Forward openness fails whenever a function has local extrema (such as $x^2$ having a local minimum at $0$, or $\\sin x$ having extrema at $\\pm \\pi/2$). At a local minimum, points to the left and right both map in the same direction, creating a sharp boundary that has no breathing room on one side, turning open intervals into half-open or closed sets.</p>",
  "trap": "Do not confuse continuous maps with open maps: continuous maps preserve openness only in PREIMAGES, not forward images."
},
{
  "id": "w.11.3.03",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.3",
  "marks": 5,
  "title": "Preservation of Compactness and Topological Extreme Value Theorem",
  "source": "Bartle & Sherbert 4e §11.3 Ex 7",
  "prompt": "Let $K \\subseteq \\mathbb{R}$ be a compact set and $f: K \\to \\mathbb{R}$ a continuous function.<br>(a) Prove, using open covers, that the image $f(K) = \\{f(x) : x \\in K\\}$ is a compact set in $\\mathbb{R}$.<br>(b) Deduce the Extreme Value Theorem (Maximum-Minimum Theorem) directly from part (a).",
  "tests": [
    "c.11.3.2",
    "c.5.3.4"
  ],
  "approach": "<p>Pull an open cover of $f(K)$ back to $K$ using $f^{-1}(G_\\alpha)$, extract a finite subcover by compactness of $K$, and push forward. Then apply Heine-Borel to $f(K)$.</p>",
  "solution": "<p><b>(a) Proof that $f(K)$ is Compact:</b> Let $\\mathcal{G} = \\{G_\\alpha\\}_{\\alpha \\in A}$ be an arbitrary open cover of $f(K)$ in $\\mathbb{R}$:</p><p>$$f(K) \\subseteq \\bigcup_{\\alpha \\in A} G_\\alpha$$</p><p>Since each $G_\\alpha$ is open in $\\mathbb{R}$ and $f$ is continuous, by Theorem 11.3.1, each preimage $f^{-1}(G_\\alpha)$ is an open set in $K$.</p><p>Taking the preimage of both sides: $$K \\subseteq f^{-1}(f(K)) \\subseteq f^{-1}\\left( \\bigcup_{\\alpha \\in A} G_\\alpha \\right) = \\bigcup_{\\alpha \\in A} f^{-1}(G_\\alpha)$$ Thus, $\\{f^{-1}(G_\\alpha)\\}_{\\alpha \\in A}$ is an open cover of $K$.</p><p>Since $K$ is compact, there exists a finite subcover: there exist indices $\\alpha_1, \\dots, \\alpha_m \\in A$ such that: $$K \\subseteq \\bigcup_{j=1}^m f^{-1}(G_{\\alpha_j})$$ Applying $f$ to both sides: $$f(K) \\subseteq f\\left( \\bigcup_{j=1}^m f^{-1}(G_{\\alpha_j}) \\right) = \\bigcup_{j=1}^m f(f^{-1}(G_{\\alpha_j})) \\subseteq \\bigcup_{j=1}^m G_{\\alpha_j}$$ Thus $\\{G_{\\alpha_1}, \\dots, G_{\\alpha_m}\\}$ is a finite subcover of $f(K)$. Since the open cover was arbitrary, $f(K)$ is compact.</p><p><b>(b) Deduction of Extreme Value Theorem:</b> By the Heine–Borel Theorem (Theorem 11.2.4), a subset of $\\mathbb{R}$ is compact if and only if it is <b>closed and bounded</b>.</p><p>Since $f(K)$ is compact, $f(K)$ is bounded. Therefore: $$M = \\sup f(K) = \\sup_{x \\in K} f(x) < \\infty \\quad \\text{and} \\quad m = \\inf f(K) = \\inf_{x \\in K} f(x) > -\\infty$$ Furthermore, since $f(K)$ is closed, it contains all of its cluster points. By the definition of supremum and infimum, $M \\in \\overline{f(K)}$ and $m \\in \\overline{f(K)}$.</p><p>Since $f(K)$ is closed, $M \\in f(K)$ and $m \\in f(K)$.</p><p>Therefore, there exist points $x_*, x^* \\in K$ such that $f(x_*) = m = \\inf_{x \\in K} f(x)$ and $f(x^*) = M = \\sup_{x \\in K} f(x)$. Thus $f$ attains its absolute maximum and minimum on $K$.</p>",
  "trap": "Compactness is preserved by continuous functions, but boundedness alone is NOT (e.g. $f(x) = 1/x$ on the bounded set $(0, 1)$ has unbounded image $(1, \\infty)$)."
},
{
  "id": "w.11.4.01",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.4",
  "marks": 5,
  "title": "Verification of Metric Axioms for the Supremum Metric on $C[a, b]$",
  "source": "Bartle & Sherbert 4e §11.4 Ex 1 & 2",
  "prompt": "Let $C[a, b]$ be the set of all real-valued continuous functions on the compact interval $[a, b]$. Define the distance function:<br>$$d_\\infty(f, g) := \\sup_{x \\in [a, b]} |f(x) - g(x)| = \\|f - g\\|_\\infty$$<br>(a) Verify that $d_\\infty$ satisfies all three metric axioms.<br>(b) Prove that a sequence $(f_n)$ converges to $f$ in $(C[a, b], d_\\infty)$ if and only if $(f_n)$ converges uniformly to $f$ on $[a, b]$.",
  "tests": [
    "c.11.4.1",
    "c.8.1.3"
  ],
  "approach": "<p>Verify positivity, symmetry, and triangle inequality using properties of the supremum and absolute value, then match the definition of $d_\\infty(f_n, f) < \\varepsilon$ with uniform convergence.</p>",
  "solution": "<p><b>(a) Verification of Metric Axioms:</b></p><p>1. <b>Positivity:</b> For any $f, g \\in C[a, b]$ and all $x \\in [a, b]$, $|f(x) - g(x)| \\ge 0$, so $d_\\infty(f, g) = \\sup |f(x) - g(x)| \\ge 0$.</p><p>If $f = g$, then $|f(x) - g(x)| = 0$ for all $x$, so $d_\\infty(f, g) = 0$. Conversely, if $d_\\infty(f, g) = 0$, then $0 \\le |f(x) - g(x)| \\le \\sup |f(t) - g(t)| = 0$, which implies $f(x) = g(x)$ for all $x \\in [a, b]$, so $f = g$.</p><p>2. <b>Symmetry:</b> Since $|f(x) - g(x)| = |g(x) - f(x)|$ for all $x$, $d_\\infty(f, g) = d_\\infty(g, f)$.</p><p>3. <b>Triangle Inequality:</b> For any $f, g, h \\in C[a, b]$ and any $x \\in [a, b]$: $$|f(x) - h(x)| = |(f(x) - g(x)) + (g(x) - h(x))| \\le |f(x) - g(x)| + |g(x) - h(x)|$$ Since $|f(x) - g(x)| \\le d_\\infty(f, g)$ and $|g(x) - h(x)| \\le d_\\infty(g, h)$ for all $x$: $$|f(x) - h(x)| \\le d_\\infty(f, g) + d_\\infty(g, h)$$ The right-hand side is an upper bound for $|f(x) - h(x)|$ for all $x \\in [a, b]$. Taking the supremum over all $x \\in [a, b]$ gives: $$d_\\infty(f, h) = \\sup_{x \\in [a, b]} |f(x) - h(x)| \\le d_\\infty(f, g) + d_\\infty(g, h)$$ Thus $d_\\infty$ is a valid metric on $C[a, b]$.</p><p><b>(b) Equivalence to Uniform Convergence:</b></p><p>• $f_n \\to f$ in $(C[a, b], d_\\infty)$ means: For every $\\varepsilon > 0$, $\\exists K \\in \\mathbb{N}$ such that for all $n \\ge K$, $d_\\infty(f_n, f) < \\varepsilon$.</p><p>• By definition of $d_\\infty$, this means $\\sup_{x \\in [a, b]} |f_n(x) - f(x)| < \\varepsilon$, which is equivalent to $|f_n(x) - f(x)| < \\varepsilon$ for all $x \\in [a, b]$ and all $n \\ge K$.</p><p>This is the exact definition of <b>uniform convergence</b> $f_n \\rightrightarrows f$ on $[a, b]$ (Definition 8.1.1).</p>",
  "trap": "Pointwise convergence does NOT correspond to convergence in the $d_\\infty$ metric; only UNIFORM convergence corresponds to the metric topology of $(C[a, b], d_\\infty)$."
},
{
  "id": "w.11.4.02",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.4",
  "marks": 5,
  "title": "Completeness of the Space of Continuous Functions $(C[a, b], d_\\infty)$",
  "source": "Bartle & Sherbert 4e §11.4 Ex 5",
  "prompt": "Prove that the metric space $(C[a, b], d_\\infty)$ is a <b>complete metric space</b>: show that every Cauchy sequence $(f_n)$ in $(C[a, b], d_\\infty)$ converges to a limit function $f \\in C[a, b]$.",
  "tests": [
    "c.11.4.2",
    "c.8.2.2"
  ],
  "approach": "<p>1. Show $(f_n(x))$ is Cauchy in $\\mathbb{R}$ for each $x$ to get pointwise limit $f(x)$. 2. Use Cauchy condition to prove uniform convergence. 3. Apply Uniform Limit Theorem to show $f$ is continuous.</p>",
  "solution": "<p><b>1. Pointwise Limit:</b> Let $(f_n)$ be a Cauchy sequence in $(C[a, b], d_\\infty)$.</p><p>Given $\\varepsilon > 0$, there exists $K \\in \\mathbb{N}$ such that for all $m, n \\ge K$: $$d_\\infty(f_m, f_n) = \\sup_{x \\in [a, b]} |f_m(x) - f_n(x)| < \\varepsilon$$ For any fixed point $x_0 \\in [a, b]$, $|f_m(x_0) - f_n(x_0)| \\le d_\\infty(f_m, f_n) < \\varepsilon$.</p><p>Thus, for each $x_0$, $(f_n(x_0))$ is a Cauchy sequence of real numbers. Since $\\mathbb{R}$ is complete, the limit exists: $$f(x_0) := \\lim_{n\\to\\infty} f_n(x_0)$$ This defines a function $f: [a, b] \\to \\mathbb{R}$.</p><p><b>2. Uniform Convergence to $f$:</b> In the inequality $|f_m(x) - f_n(x)| < \\varepsilon$ (valid for all $x \\in [a, b]$ and $m, n \\ge K$), hold $n$ fixed and take the limit as $m \\to \\infty$:</p><p>$$|f(x) - f_n(x)| = \\lim_{m\\to\\infty} |f_m(x) - f_n(x)| \\le \\varepsilon \\quad \\forall x \\in [a, b], \\; \\forall n \\ge K$$</p><p>Taking the supremum over all $x \\in [a, b]$: $$d_\\infty(f, f_n) = \\sup_{x \\in [a, b]} |f(x) - f_n(x)| \\le \\varepsilon < 2\\varepsilon \\quad \\forall n \\ge K$$ This proves that $f_n \\to f$ uniformly on $[a, b]$.</p><p><b>3. Continuity of the Limit Function $f$:</b> Each $f_n$ is continuous on $[a, b]$ and $f_n \\rightrightarrows f$ uniformly on $[a, b]$. By the Uniform Limit Theorem (Theorem 8.2.2), the uniform limit of continuous functions is continuous. Hence $f \\in C[a, b]$.</p><p>Since $d_\\infty(f_n, f) \\to 0$ and $f \\in C[a, b]$, the Cauchy sequence converges to an element within the space. Thus $(C[a, b], d_\\infty)$ is complete.</p>",
  "trap": "Completeness fails under the $L^1$ metric $d_1(f, g) = \\int_a^b |f - g|$; Cauchy sequences under $d_1$ can converge to discontinuous step functions, which is why $d_\\infty$ is required for $C[a, b]$."
},
{
  "id": "w.11.4.03",
  "course": "ra1",
  "module": "ra1.m5",
  "sec": "11.4",
  "marks": 5,
  "title": "Incompleteness of the Rational Line and Closed Subspaces",
  "source": "Bartle & Sherbert 4e §11.4 Ex 8",
  "prompt": "(a) Construct an explicit sequence of rational numbers $(q_n)$ that is a Cauchy sequence in $(\\mathbb{Q}, |\\cdot|)$, but does not converge to any limit in $\\mathbb{Q}$. Conclude that $(\\mathbb{Q}, |\\cdot|)$ is incomplete.<br>(b) Let $(X, d)$ be a complete metric space and $Y \\subseteq X$. Prove that $(Y, d)$ is complete if and only if $Y$ is a closed subset of $X$.",
  "tests": [
    "c.11.4.2",
    "c.2.3.6"
  ],
  "approach": "<p>Use Newton-Raphson approximations of $\\sqrt{2}$ for (a). For (b), use the characterization of closed sets as containing all limits of convergent sequences.</p>",
  "solution": "<p><b>(a) Incompleteness of $(\\mathbb{Q}, |\\cdot|)$:</b> Define the sequence $(q_n)$ by the Babylonian recursion for $\\sqrt{2}$:</p><p>$$q_1 = 1, \\qquad q_{n+1} = \\frac{1}{2}\\left(q_n + \\frac{2}{q_n}\\right)$$</p><p>1. By induction, each $q_n$ is a positive rational number: $q_1 = 1 \\in \\mathbb{Q}$, and if $q_n \\in \\mathbb{Q}$, then $q_{n+1}$ is formed by field operations, so $q_{n+1} \\in \\mathbb{Q}$.</p><p>2. In $(\\mathbb{R}, |\\cdot|)$, $(q_n)$ converges to $\\sqrt{2}$. Since every convergent sequence in $\\mathbb{R}$ is Cauchy, $(q_n)$ is a Cauchy sequence.</p><p>3. However, $\\sqrt{2} \\notin \\mathbb{Q}$ (Theorem 2.1.4). Since limits in metric spaces are unique, $(q_n)$ cannot converge to any rational number.</p><p>Therefore, $(q_n)$ is a Cauchy sequence in $(\\mathbb{Q}, |\\cdot|)$ that has NO limit in $\\mathbb{Q}$. Thus $(\\mathbb{Q}, |\\cdot|)$ is an incomplete metric space.</p><p><b>(b) Subspace Completeness $\\iff$ Closed Subset:</b></p><p>($\\implies$) Suppose $(Y, d)$ is complete. We show $Y$ is closed in $X$.</p><p>Let $(y_n)$ be a sequence in $Y$ that converges to some $x \\in X$. Since $(y_n)$ converges in $X$, it is a Cauchy sequence in $X$, and since all terms lie in $Y$, it is a Cauchy sequence in $(Y, d)$.</p><p>Since $(Y, d)$ is complete, $(y_n)$ must converge to some limit $y \\in Y$. By uniqueness of limits in $X$, $x = y \\in Y$. Thus $Y$ contains all its limit points, so $Y$ is closed in $X$.</p><p>($\\impliedby$) Conversely, suppose $Y$ is a closed subset of the complete metric space $(X, d)$. Let $(y_n)$ be an arbitrary Cauchy sequence in $(Y, d)$.</p><p>Then $(y_n)$ is also a Cauchy sequence in $(X, d)$. Since $(X, d)$ is complete, there exists $x \\in X$ such that $y_n \\to x$.</p><p>Since $y_n \\in Y$ for all $n$ and $Y$ is closed in $X$, the limit point $x$ must belong to $Y$.</p><p>Thus $(y_n)$ converges to a point in $Y$, proving that $(Y, d)$ is complete.</p>",
  "trap": "A subspace inherits the metric, but inherits completeness IF AND ONLY IF it is closed; open intervals like $(0, 1) \\subset \\mathbb{R}$ are incomplete because $1/n$ escapes to the missing boundary point 0."
}
);

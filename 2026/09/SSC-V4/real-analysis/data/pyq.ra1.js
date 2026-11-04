/* ══════════════════════════════════════════════════════════════════════════
   LEVEL 4 · IIT JAM past papers — Real Analysis I

   Every question on an IIT JAM Mathematics (MA) paper whose content belongs to
   RA1: sets and countability, the completeness of ℝ, sequences, and
   limits of functions (Bartle §1.1–4.3).

   A course reaches LEVEL 4 when every question here is worked through. Progress
   is stored against 'p:<id>', so the ids are permanent — see HOOK_agy.md rule 1
   and "Level 4 — the JAM past papers".

   Source papers: real-analysis/sources/exams/jam/, with sources/exams/jam/index.md
   recording where each year came from. 2012–2026 are the official IIT
   archive; 2007–2011 are scans from a faculty mirror at IIT Hyderabad.

   Official answer keys exist only for 2017 and 2026; every other year's
   `answer` is a worked answer, not a published key.
   ══════════════════════════════════════════════════════════════════════════ */

PYQ.push(
{
  "id": "p.jam.2026.01",
  "course": "ra1",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 1,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.4",
  "tests": [
    "c.3.4.5",
    "c.3.1.10"
  ],
  "title": "Oscillating sequence versus a scaled e-limit",
  "type": "MCQ",
  "prompt": "<p>For each positive integer $n$, let $x_n = 1 - (-1)^n + \\dfrac{1}{n}$ and $y_n = \\left(1+\\dfrac{1}{2n}\\right)^{3n}$.</p><p>Which ONE of the following statements about the sequences $(x_n)$ and $(y_n)$ is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$(x_n)$ and $(y_n)$ are convergent."
    },
    {
      "k": "B",
      "t": "$(x_n)$ is not convergent and $(y_n)$ is not convergent."
    },
    {
      "k": "C",
      "t": "$(x_n)$ is convergent and $(y_n)$ is not convergent."
    },
    {
      "k": "D",
      "t": "$(x_n)$ is not convergent and $(y_n)$ is convergent."
    }
  ],
  "answer": "D",
  "solution": "<p>Split $x_n$ by parity of $n$. If $n$ is even, $(-1)^n = 1$, so $x_n = 1-1+\\dfrac1n = \\dfrac1n \\to 0$. If $n$ is odd, $(-1)^n=-1$, so $x_n = 1+1+\\dfrac1n = 2+\\dfrac1n \\to 2$.</p><p>So $(x_n)$ has two subsequences converging to different limits ($0$ and $2$), hence $(x_n)$ does not converge (Divergence Criterion).</p><p>For $(y_n)$, write $y_n = \\left[\\left(1+\\dfrac{1}{2n}\\right)^{2n}\\right]^{3/2}$. Since $\\left(1+\\dfrac{1}{2n}\\right)^{2n} \\to e$ (the standard limit $(1+c/n)^n \\to e^c$ with $c=1$ after the substitution $m=2n$), we get $y_n \\to e^{3/2}$, so $(y_n)$ converges.</p><p>Hence $(x_n)$ is not convergent and $(y_n)$ is convergent &mdash; option (D).</p>",
  "tested": "<p>Divergence via two subsequential limits, and the standard sequence limit $(1+c/n)^n \\to e^c$ under a change of index.</p>",
  "trap": "Only checking even n (getting x_n -> 0) and concluding convergence, without also checking odd n; or plugging c=3 directly into (1+1/(2n))^{3n} without correctly matching the exponent 2n to the denominator 2n first."
},

{
  "id": "p.jam.2026.02",
  "course": "ra1",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 2,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.1",
  "tests": [
    "c.3.1.3"
  ],
  "title": "Negating the $\\varepsilon$-$N$ statement \"$x_n \\to 1$\"",
  "type": "MCQ",
  "prompt": "<p>For each positive integer $n$, define $x_n = (-1)^n$.</p><p>Which ONE of the following statements about the sequence $(x_n)$ is FALSE?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exists $\\varepsilon > 0$ such that $|x_n - 1| < \\varepsilon$ for all positive integers $n$."
    },
    {
      "k": "B",
      "t": "There exists $\\varepsilon > 0$ such that for all $M > 0$ there exists a positive integer $N > M$ for which $|x_N - 1| \\ge \\varepsilon$."
    },
    {
      "k": "C",
      "t": "For all $\\varepsilon > 0$ and $M > 0$ there exists a positive integer $N$ such that $N > M$ and $|x_N - 1| < \\varepsilon$."
    },
    {
      "k": "D",
      "t": "For all $\\varepsilon > 0$ and $M > 0$ there exists a positive integer $N$ such that $N > M$ and $|x_N - 1| \\ge \\varepsilon$."
    }
  ],
  "answer": "D",
  "solution": "<p>Since $x_n = (-1)^n$ takes only the values $\\pm 1$, we always have $|x_n - 1| \\le 2$.</p><p><b>(A)</b> Taking $\\varepsilon = 3$ gives $|x_n-1|\\le 2 < 3$ for all $n$ &mdash; TRUE.</p><p><b>(B)</b> This is exactly the standard negation of \"$x_n \\to 1$\": with $\\varepsilon = 1$, at every odd $N$, $|x_N-1| = |-1-1| = 2 \\ge 1$, so such $N>M$ always exist &mdash; TRUE (and correctly reflects that $x_n \\not\\to 1$).</p><p><b>(C)</b> Along the even integers $x_N = 1$, so $|x_N-1|=0<\\varepsilon$ for any $\\varepsilon>0$, and even $N>M$ can always be found &mdash; TRUE.</p><p><b>(D)</b> This claims that for <i>every</i> $\\varepsilon>0$ (in particular $\\varepsilon = 3$), infinitely many $N$ satisfy $|x_N-1|\\ge 3$. But $|x_N-1|\\le 2 < 3$ always, so no such $N$ exists for $\\varepsilon=3$. Statement (D) is FALSE.</p>",
  "tested": "<p>Correctly forming and evaluating the logical negation of the $\\varepsilon$-$N$ definition of convergence to a specific limit.</p>",
  "trap": "Treating \"(D) looks like the textbook negation of convergence\" as automatically true without checking it must hold for every epsilon, including large ones where the bounded sequence can never stray that far from 1."
},

{
  "id": "p.jam.2026.32",
  "course": "ra1",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 32,
  "marks": 2,
  "neg": 0,
  "sec": "3.4",
  "tests": [
    "c.3.4.8",
    "c.3.4.1"
  ],
  "title": "Monotone sequences, Bolzano-Weierstrass, and subsequences",
  "type": "MSQ",
  "prompt": "<p>Which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exists a monotone sequence that does not converge but has a convergent subsequence."
    },
    {
      "k": "B",
      "t": "There exists a sequence that has a bounded subsequence but does not have any convergent subsequence."
    },
    {
      "k": "C",
      "t": "There exists a sequence $(x_n)$ such that given any positive integer $m$, $(x_n)$ has a subsequence converging to $m$."
    },
    {
      "k": "D",
      "t": "There exists a sequence $(x_n)$ such that $(|x_{n+1}-x_n|)$ converges to $0$ but $(x_n)$ does not converge."
    }
  ],
  "answer": [
    "C",
    "D"
  ],
  "solution": "<p><b>(A)</b> A monotone sequence either converges or diverges properly to $+\\infty$ or $-\\infty$; if it diverges properly, every subsequence is also monotone in the same direction and diverges properly, so it cannot have a convergent subsequence. So no such monotone sequence exists. FALSE.</p><p><b>(B)</b> A bounded subsequence is itself a bounded sequence, and by the Bolzano&ndash;Weierstrass Theorem every bounded sequence has a convergent subsequence; a subsequence of a subsequence of $(x_n)$ is still a subsequence of $(x_n)$. So a bounded subsequence always yields a convergent subsequence of the original sequence -- the described sequence cannot exist. FALSE.</p><p><b>(C)</b> Enumerate all positive integers infinitely often in one sequence, e.g. $1,1,2,1,2,3,1,2,3,4,\\dots$ (each block $1,\\dots,k$ repeated for increasing $k$); for every $m$, the constant value $m$ appears infinitely often, giving a (constant) subsequence converging to $m$. TRUE.</p><p><b>(D)</b> Take $x_n=\\sqrt n$. Then $|x_{n+1}-x_n| = \\sqrt{n+1}-\\sqrt n = \\dfrac{1}{\\sqrt{n+1}+\\sqrt n}\\to 0$, but $x_n=\\sqrt n \\to \\infty$, so $(x_n)$ does not converge. TRUE.</p>",
  "tested": "<p>The Bolzano&ndash;Weierstrass Theorem (rules out B), the dichotomy for monotone sequences (rules out A), and explicit constructions for the two true statements.</p>",
  "trap": "Believing a \"bounded subsequence\" could somehow fail to produce a convergent one -- Bolzano-Weierstrass applies to any bounded sequence, including a bounded subsequence of a larger, possibly unbounded, sequence."
},

{
  "id": "p.jam.2026.43",
  "course": "ra1",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 43,
  "marks": 1,
  "neg": 0,
  "sec": "3.2",
  "tests": [
    "c.3.2.7"
  ],
  "title": "Squeezing a sum of $n$ terms",
  "type": "NAT",
  "prompt": "<p>$\\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{n^2+1}{\\sqrt{n^6+1}}+\\cdots+\\frac{n^2+n}{\\sqrt{n^6+n}}\\right) = $ ______ (rounded off to one decimal place).</p>",
  "answer": {
    "value": 1,
    "tol": 0.05,
    "dp": 1
  },
  "solution": "<p>Let $S_n = \\displaystyle\\sum_{i=1}^n \\frac{n^2+i}{\\sqrt{n^6+i}}$. For each $i=1,\\dots,n$, replacing the denominator $\\sqrt{n^6+i}$ by its largest value $\\sqrt{n^6+n}$ gives a lower bound, and by its smallest value $\\sqrt{n^6+1}$ gives an upper bound:</p><p>$$\\frac{1}{\\sqrt{n^6+n}}\\sum_{i=1}^n (n^2+i) \\ \\le\\ S_n \\ \\le\\ \\frac{1}{\\sqrt{n^6+1}}\\sum_{i=1}^n (n^2+i).$$</p><p>Now $\\displaystyle\\sum_{i=1}^n(n^2+i) = n\\cdot n^2 + \\frac{n(n+1)}{2} = n^3+\\frac{n^2+n}{2}$.</p><p>Dividing by $\\sqrt{n^6+n}\\sim n^3$ and by $\\sqrt{n^6+1}\\sim n^3$, both bounds tend to $\\displaystyle\\lim_{n\\to\\infty}\\frac{n^3+\\frac{n^2+n}{2}}{n^3} = 1$. By the Squeeze Theorem, $S_n \\to 1$.</p>",
  "tested": "<p>The Squeeze Theorem applied to a sum whose number of terms itself grows with $n$, bounding the whole sum between two explicit closed forms rather than analysing individual terms.</p>",
  "trap": "Reasoning term-by-term (\"each of the n terms tends to 0, so the sum tends to 0\") -- invalid here since the number of terms also grows with n; the sum must be bounded as a whole, not term-by-term."
},

{
  "id": "p.jam.2025.18",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 18,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.3"
  ],
  "title": "Divergence of two series via the n-th term test",
  "type": "MCQ",
  "prompt": "<p>For $n \\in \\mathbb{N}$, define $x_n$ and $y_n$ by</p>\n$$x_n = (-1)^n \\cos\\frac{1}{n} \\qquad \\text{and} \\qquad y_n = \\sum_{k=1}^{n} \\frac{1}{n+k}.$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\sum_{n=1}^{\\infty} x_n$ converges, and $\\sum_{n=1}^{\\infty} y_n$ does NOT converge"
    },
    {
      "k": "B",
      "t": "$\\sum_{n=1}^{\\infty} x_n$ does NOT converge, and $\\sum_{n=1}^{\\infty} y_n$ converges"
    },
    {
      "k": "C",
      "t": "$\\sum_{n=1}^{\\infty} x_n$ converges, and $\\sum_{n=1}^{\\infty} y_n$ converges"
    },
    {
      "k": "D",
      "t": "$\\sum_{n=1}^{\\infty} x_n$ does NOT converge, and $\\sum_{n=1}^{\\infty} y_n$ does NOT converge"
    }
  ],
  "answer": "D",
  "solution": "<p>Since $\\cos(1/n) \\to \\cos 0 = 1$, the terms $x_n = (-1)^n\\cos(1/n)$ do not tend to $0$ (they stay close to $\\pm 1$ for large $n$). By the $n$-th term test, $\\sum x_n$ diverges.</p>\n<p>For $y_n$: each of the $n$ terms $\\dfrac{1}{n+k}$ (for $k=1,\\dots,n$) satisfies $\\dfrac{1}{2n} \\le \\dfrac{1}{n+k} \\le \\dfrac{1}{n+1}$, so summing over $k$,</p>\n$$\\frac{n}{2n} \\le y_n \\le \\frac{n}{n+1}, \\quad\\text{i.e.}\\quad \\frac12 \\le y_n < 1 \\text{ for every } n.$$\n<p>So $y_n$ never tends to $0$ either (its terms are bounded away from $0$), and by the $n$-th term test $\\sum y_n$ also diverges.</p>\n<p>Hence neither series converges: option (D).</p>",
  "tested": "<p>The $n$-th term test for divergence — a necessary but not sufficient condition — applied to two sequences that individually behave very differently (one oscillates near $\\pm1$, the other converges to $\\ln 2$).</p>",
  "trap": "Confusing \"the sequence (y_n) converges\" (true, to ln 2) with \"the series sum y_n converges\" (false) — a nonzero-limit sequence always gives a divergent series."
},

{
  "id": "p.jam.2025.19",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 19,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.3",
  "tests": [
    "c.3.3.1",
    "c.3.3.2"
  ],
  "title": "Monotone convergence for a recursively defined sequence",
  "type": "MCQ",
  "prompt": "<p>Let $x_1 = \\dfrac{5}{2}$. For $n \\in \\mathbb{N}$, define</p>\n$$x_{n+1} = \\frac{1}{5}(x_n^2 + 6).$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$(x_n)$ is an increasing sequence, and $(x_n)$ is NOT a bounded sequence"
    },
    {
      "k": "B",
      "t": "$(x_n)$ is NOT an increasing sequence, and $(x_n)$ is NOT a bounded sequence"
    },
    {
      "k": "C",
      "t": "$(x_n)$ is NOT a decreasing sequence, and $(x_n)$ is a bounded sequence"
    },
    {
      "k": "D",
      "t": "$(x_n)$ is a decreasing sequence, and $(x_n)$ is a bounded sequence"
    }
  ],
  "answer": "D",
  "solution": "<p>The fixed points of $x = \\dfrac{1}{5}(x^2+6)$ satisfy $x^2 - 5x + 6 = 0$, i.e. $x = 2$ or $x = 3$.</p>\n<p><b>Claim:</b> $2 < x_n < 3$ for every $n$. This holds for $n=1$ since $x_1 = 2.5$. If $2 < x_n < 3$, then $x_{n+1} - 2 = \\dfrac{x_n^2-4}{5} = \\dfrac{(x_n-2)(x_n+2)}{5} > 0$, and since $x_n < 3$, $x_{n+1} = \\dfrac{x_n^2+6}{5} < \\dfrac{9+6}{5} = 3$. So by induction $2 < x_n < 3$ for all $n$.</p>\n<p>Also, $x_{n+1} - x_n = \\dfrac{x_n^2 - 5x_n + 6}{5} = \\dfrac{(x_n-2)(x_n-3)}{5} < 0$ whenever $2<x_n<3$, so $(x_n)$ is strictly decreasing.</p>\n<p>Thus $(x_n)$ is a decreasing sequence that is also bounded (between $2$ and $3$): option (D). (By the Monotone Convergence Theorem it converges, in fact to $2$.)</p>",
  "tested": "<p>The Monotone Convergence Theorem: establishing monotonicity and boundedness together (via induction using the fixed points) to conclude convergence, without needing to find the limit first.</p>",
  "trap": "Assuming the sequence increases toward the larger fixed point 3 because x1=2.5 is \"close to\" it — computing x2 = 2.45 < x1 immediately shows the sequence is decreasing, not increasing."
},

{
  "id": "p.jam.2025.20",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 20,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.5",
  "tests": [
    "c.3.5.8"
  ],
  "title": "A contractive continued-fraction-like sequence",
  "type": "MCQ",
  "prompt": "<p>Let $x_1 = 2$ and $x_{n+1} = 2 + \\dfrac{1}{2x_n}$ for all $n \\in \\mathbb{N}$.</p>\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$x_{n+1} \\ge \\dfrac{4}{x_n}$ for all $n \\in \\mathbb{N}$, and $(x_n)$ is a Cauchy sequence"
    },
    {
      "k": "B",
      "t": "$x_{n+1} < \\dfrac{4}{x_n}$ for some $n \\in \\mathbb{N}$, and $(x_n)$ is a Cauchy sequence"
    },
    {
      "k": "C",
      "t": "$x_{n+1} \\ge \\dfrac{4}{x_n}$ for all $n \\in \\mathbb{N}$, and $(x_n)$ is NOT a Cauchy sequence"
    },
    {
      "k": "D",
      "t": "$x_{n+1} < \\dfrac{4}{x_n}$ for some $n \\in \\mathbb{N}$, and $(x_n)$ is NOT a Cauchy sequence"
    }
  ],
  "answer": "A",
  "solution": "<p>Since $x_{n+1} = 2 + \\dfrac{1}{2x_n} > 2$ whenever $x_n>0$, and $x_1=2$, we get $x_n \\ge 2$ for every $n$. Then $2x_n + \\tfrac12 \\ge 4 + \\tfrac12 > 4$, i.e.</p>\n$$x_{n+1} = 2 + \\frac{1}{2x_n} = \\frac{2x_n+\\tfrac12}{x_n} \\ge \\frac{4}{x_n} \\quad \\text{for all } n.$$\n<p>For the Cauchy property, consider $g(t) = 2 + \\dfrac{1}{2t}$, so $x_{n+1}=g(x_n)$. For $t \\ge 2$, $|g'(t)| = \\dfrac{1}{2t^2} \\le \\dfrac{1}{8} < 1$, so by the Mean Value Theorem</p>\n$$|x_{n+1}-x_n| = |g(x_n)-g(x_{n-1})| \\le \\frac18 |x_n - x_{n-1}|.$$\n<p>This makes $(x_n)$ a contractive sequence, and every contractive sequence is Cauchy.</p>\n<p>Hence option (A).</p>",
  "tested": "<p>Recognising a recursively-defined sequence as contractive and applying the theorem that contractive sequences are Cauchy (and hence convergent).</p>",
  "trap": "Trying to verify the Cauchy condition directly from its epsilon-N definition instead of using the contraction estimate, which is far shorter here."
},

{
  "id": "p.jam.2025.21",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.4",
  "tests": [
    "c.3.4.5",
    "c.3.1.10"
  ],
  "title": "Subsequences of an unbounded sequence versus a convergent one",
  "type": "MCQ",
  "prompt": "<p>For $n \\in \\mathbb{N}$, define $x_n$ and $y_n$ by</p>\n$$x_n = (-1)^n \\frac{3^n}{n^3} \\qquad \\text{and} \\qquad y_n = \\left(4^n + (-1)^n 3^n\\right)^{1/n}.$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$(x_n)$ has a convergent subsequence, and NO subsequence of $(y_n)$ is convergent"
    },
    {
      "k": "B",
      "t": "NO subsequence of $(x_n)$ is convergent, and $(y_n)$ has a convergent subsequence"
    },
    {
      "k": "C",
      "t": "$(x_n)$ has a convergent subsequence, and $(y_n)$ has a convergent subsequence"
    },
    {
      "k": "D",
      "t": "NO subsequence of $(x_n)$ is convergent, and NO subsequence of $(y_n)$ is convergent"
    }
  ],
  "answer": "B",
  "solution": "<p>Since the exponential $3^n$ eventually dominates the polynomial $n^3$, $|x_n| = \\dfrac{3^n}{n^3} \\to \\infty$. So $(x_n)$ is unbounded, and every subsequence of $(x_n)$ is also unbounded (its absolute values still $\\to \\infty$), hence has no convergent (finite) sub-subsequence. So NO subsequence of $(x_n)$ converges.</p>\n<p>For $y_n$: write</p>\n$$y_n = \\left(4^n\\left(1+(-1)^n(3/4)^n\\right)\\right)^{1/n} = 4\\left(1+(-1)^n(3/4)^n\\right)^{1/n}.$$\n<p>Since $(3/4)^n \\to 0$ and $t^{1/n}\\to 1$ for any fixed $t>0$, we get $y_n \\to 4$. A convergent sequence trivially has a convergent subsequence (itself).</p>\n<p>Hence option (B).</p>",
  "tested": "<p>The Divergence Criterion: an unbounded sequence (hence properly divergent, dominated by an exponential term) has no convergent subsequence at all, in contrast with extracting the dominant term inside an $n$-th root.</p>",
  "trap": "Focusing on the oscillating sign (-1)^n and thinking that alone prevents subsequential convergence for x_n — it is really the unbounded magnitude 3^n/n^3, not the sign, that rules out every subsequence."
},

{
  "id": "p.jam.2025.26",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 26,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "A telescoping sum for an arithmetic sequence",
  "type": "MCQ",
  "prompt": "<p>Let $x_1 > 0$. For $n \\in \\mathbb{N}$, define $x_{n+1} = x_n + 4$. If</p>\n$$\\lim_{n \\to \\infty} \\left(\\frac{1}{x_2 x_3} + \\frac{1}{x_3 x_4} + \\cdots + \\frac{1}{x_{n+1}x_{n+2}}\\right) = \\frac{1}{24},$$\n<p>then the value of $x_1$ is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$1$"
    },
    {
      "k": "B",
      "t": "$2$"
    },
    {
      "k": "C",
      "t": "$3$"
    },
    {
      "k": "D",
      "t": "$8$"
    }
  ],
  "answer": "B",
  "solution": "<p>Since $x_{n+1}=x_n+4$, the sequence $(x_n)$ is arithmetic with common difference $4$, so for each $n$,</p>\n$$\\frac{1}{x_{n+1}x_{n+2}} = \\frac14\\left(\\frac{1}{x_{n+1}} - \\frac{1}{x_{n+2}}\\right).$$\n<p>The given sum telescopes:</p>\n$$\\sum_{n=1}^{N}\\frac{1}{x_{n+1}x_{n+2}} = \\frac14\\left(\\frac{1}{x_2} - \\frac{1}{x_{N+2}}\\right) \\xrightarrow[N\\to\\infty]{} \\frac{1}{4x_2},$$\n<p>since $x_{N+2} \\to \\infty$. Setting $\\dfrac{1}{4x_2} = \\dfrac{1}{24}$ gives $x_2 = 6$, so $x_1 = x_2 - 4 = 2$.</p>",
  "tested": "<p>Telescoping series: rewriting each term of a series as a difference of consecutive reciprocals so the partial sums collapse.</p>",
  "trap": "Missing that the sum starts at 1/(x_2 x_3), not 1/(x_1 x_2) — this shifts the telescoped surviving term from 1/x_1 to 1/x_2."
},

{
  "id": "p.jam.2025.53",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 53,
  "marks": 2,
  "neg": 0,
  "sec": "4.2",
  "tests": [
    "c.4.2.4",
    "c.4.2.8"
  ],
  "title": "Finding k from a limit built out of sin(t)/t",
  "type": "NAT",
  "prompt": "<p>Let $f(x) = 2x - \\sin x$, for all $x \\in \\mathbb{R}$. Let $k \\in \\mathbb{N}$ be such that</p>\n$$\\lim_{x \\to 0} \\left(\\frac{1}{x}\\sum_{i=1}^{k} i^2 f\\left(\\frac{x}{i}\\right)\\right) = 45.$$\n<p>Then, the value of $k$ is equal to ______________.</p>",
  "answer": {
    "value": 9,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>For each fixed $i$,</p>\n$$\\frac{i^2 f(x/i)}{x} = \\frac{i^2\\left(2x/i - \\sin(x/i)\\right)}{x} = 2i - i^2\\cdot\\frac{\\sin(x/i)}{x}.$$\n<p>Writing $t = x/i$, $\\dfrac{\\sin(x/i)}{x} = \\dfrac{1}{i}\\cdot\\dfrac{\\sin t}{t} \\to \\dfrac1i \\cdot 1 = \\dfrac1i$ as $x \\to 0$ (using the standard limit $\\sin t / t \\to 1$). So each term tends to</p>\n$$2i - i^2\\cdot\\frac1i = 2i - i = i.$$\n<p>Summing over $i=1,\\dots,k$, the whole limit equals $\\displaystyle\\sum_{i=1}^{k} i = \\frac{k(k+1)}{2}$. Setting $\\dfrac{k(k+1)}{2}=45$ gives $k(k+1)=90=9\\times 10$, so $k=9$.</p>",
  "tested": "<p>The standard limit $\\sin t / t \\to 1$ as $t \\to 0$, applied term by term inside a finite sum via the substitution $t=x/i$.</p>",
  "trap": "Trying to swap the limit and the sum before simplifying each term — each term must first be rewritten with t=x/i so that sin(x/i)/x is recognisable as (1/i) times the standard form sin(t)/t."
},

{
  "id": "p.jam.2025.54",
  "course": "ra1",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 54,
  "marks": 2,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "Summing a series by differentiating the geometric series",
  "type": "NAT",
  "prompt": "<p>The value of the infinite series</p>\n$$\\sum_{n=1}^{\\infty} n\\left(\\frac{3}{4}\\right)^{2(n-1)}$$\n<p>is equal to _______________ (rounded off to two decimal places)</p>",
  "answer": {
    "value": 5.22,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Note $\\left(\\dfrac34\\right)^{2(n-1)} = \\left(\\left(\\dfrac34\\right)^2\\right)^{n-1} = \\left(\\dfrac{9}{16}\\right)^{n-1}$, so the series is $\\displaystyle\\sum_{n=1}^{\\infty} n\\,r^{n-1}$ with $r = \\dfrac{9}{16}$.</p>\n<p>Differentiating the geometric series $\\displaystyle\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}$ term by term (valid for $|r|<1$) gives</p>\n$$\\sum_{n=1}^{\\infty} n\\,r^{n-1} = \\frac{1}{(1-r)^2}.$$\n<p>With $r=\\tfrac{9}{16}$, $1-r = \\tfrac{7}{16}$, so the sum is $\\left(\\dfrac{16}{7}\\right)^2 = \\dfrac{256}{49} \\approx 5.22$.</p>",
  "tested": "<p>Differentiating the geometric series term by term to obtain the closed form for $\\sum n\\,r^{n-1}$.</p>",
  "trap": "Misreading the exponent — (3/4)^{2(n-1)} equals ((3/4)^2)^{n-1} = (9/16)^{n-1}, not (3/4)^{n-1}; using the wrong ratio gives a different (incorrect) sum."
},

{
  "id": "p.jam.2024.39",
  "course": "ra1",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 39,
  "marks": 2,
  "neg": 0,
  "sec": "3.3",
  "tests": [
    "c.3.3.2"
  ],
  "title": "Convergence range of a quadratic recursive sequence",
  "type": "MSQ",
  "prompt": "<p>For $0<\\alpha<4$, define the sequence $\\{x_n\\}_{n=1}^\\infty$ of real numbers as follows:</p>\n$$x_1=\\alpha \\qquad\\text{and}\\qquad x_{n+1}+2=-x_n(x_n-4) \\quad\\text{for } n\\in\\mathbb{N}.$$\n<p>Which of the following is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\{x_n\\}_{n=1}^\\infty$ converges for at least three distinct values of $\\alpha\\in(0,1)$"
    },
    {
      "k": "B",
      "t": "$\\{x_n\\}_{n=1}^\\infty$ converges for at least three distinct values of $\\alpha\\in(1,2)$"
    },
    {
      "k": "C",
      "t": "$\\{x_n\\}_{n=1}^\\infty$ converges for at least three distinct values of $\\alpha\\in(2,3)$"
    },
    {
      "k": "D",
      "t": "$\\{x_n\\}_{n=1}^\\infty$ converges for at least three distinct values of $\\alpha\\in(3,4)$"
    }
  ],
  "answer": [
    "B",
    "C"
  ],
  "solution": "<p>The recursion is $x_{n+1}=g(x_n)$ with $g(x)=-x^2+4x-2=-(x-2)^2+2$. Substitute $z_n=x_n-2$: then $z_{n+1}=g(z_n+2)-2=-(z_n)^2$, i.e. $z_{n+1}=-z_n^2$.</p>\n<p>Since $z_1=\\alpha-2\\in(-2,2)$, we get $z_2=-z_1^2\\in(-4,0]$. For $n\\ge2$, $z_n\\le0$; writing $w_n=-z_n\\ge0$ gives $w_{n+1}=w_n^2$ for $n\\ge2$, so $w_n=w_2^{2^{n-2}}$.</p>\n<p>This repeated-squaring sequence converges (to $0$) exactly when $w_2\\le1$, i.e. $w_2=z_1^2=(\\alpha-2)^2\\le 1$, i.e. $|\\alpha-2|\\le1$, i.e. $\\alpha\\in[1,3]$. (At $\\alpha=1,3$ exactly, $w_2=1$ and the sequence is eventually constant at the fixed point $x=1$; for $\\alpha\\in(1,3)$, $w_n\\to0$ so $x_n\\to2$. For $\\alpha\\notin[1,3]$, $w_2>1$ and repeated squaring makes $w_n\\to\\infty$, so $x_n\\to-\\infty$: divergence.)</p>\n<p>So the sequence converges for every $\\alpha\\in[1,3]$ and diverges for every $\\alpha$ outside this interval. The open interval $(1,2)$ and $(2,3)$ each lie entirely inside $[1,3]$ (infinitely many convergent $\\alpha$, certainly $\\ge3$), while $(0,1)$ and $(3,4)$ lie entirely outside $[1,3]$ (zero convergent $\\alpha$ in each). Correct: B, C.</p>",
  "tested": "Reducing a recursive sequence to a repeated-squaring form via a fixed-point shift, then using the elementary fact that $w^{2^k}\\to0,1,\\infty$ according as $w<1,=1,>1$.",
  "trap": "Trying to analyse convergence directly on the original quadratic recursion (via fixed points $x=1,2$ and their derivatives) without the shift $z=x-2$ makes the basin of convergence far harder to pin down exactly."
},

{
  "id": "p.jam.2024.40",
  "course": "ra1",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 40,
  "marks": 2,
  "neg": 0,
  "sec": "2.4",
  "tests": [
    "c.2.4.8"
  ],
  "title": "Density and closedness of Z + Z-sqrt2",
  "type": "MSQ",
  "prompt": "<p>Consider $$G=\\{m+n\\sqrt2 : m,n\\in\\mathbb{Z}\\}$$ as a subgroup of the additive group $\\mathbb{R}$. Which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$G$ is a cyclic subgroup of $\\mathbb{R}$ under addition"
    },
    {
      "k": "B",
      "t": "$G\\cap I$ is non-empty for every non-empty open interval $I\\subseteq\\mathbb{R}$"
    },
    {
      "k": "C",
      "t": "$G$ is a closed subset of $\\mathbb{R}$"
    },
    {
      "k": "D",
      "t": "$G$ is isomorphic to the group $\\mathbb{Z}\\times\\mathbb{Z}$, where the group operation in $\\mathbb{Z}\\times\\mathbb{Z}$ is defined by $(m_1,n_1)+(m_2,n_2)=(m_1+m_2,n_1+n_2)$"
    }
  ],
  "answer": [
    "B",
    "D"
  ],
  "solution": "<p><b>(D) TRUE:</b> the map $(m,n)\\mapsto m+n\\sqrt2$ is a group homomorphism from $(\\mathbb{Z}\\times\\mathbb{Z},+)$ onto $G$, and it is injective because $\\sqrt2$ is irrational: if $m+n\\sqrt2=0$ with $m,n\\in\\mathbb{Z}$ and $n\\ne0$, then $\\sqrt2=-m/n\\in\\mathbb{Q}$, a contradiction; so $m=n=0$. Hence $G\\cong\\mathbb{Z}\\times\\mathbb{Z}$.</p>\n<p><b>(A) FALSE:</b> $\\mathbb{Z}\\times\\mathbb{Z}$ is not a cyclic group (no single element generates it), so neither is $G$.</p>\n<p><b>(B) TRUE:</b> a subgroup of $(\\mathbb{R},+)$ is either cyclic (of the form $c\\mathbb{Z}$, hence discrete) or dense in $\\mathbb{R}$. Since $G$ is not cyclic (by the argument above), it must be dense in $\\mathbb{R}$, i.e. $G\\cap I\\ne\\emptyset$ for every non-empty open interval $I$.</p>\n<p><b>(C) FALSE:</b> a dense proper subset of $\\mathbb{R}$ can never be closed (its closure would have to be all of $\\mathbb{R}$, but $G$ is countable and $G\\ne\\mathbb{R}$).</p>\n<p>Correct answers: B, D.</p>",
  "tested": "The dichotomy that every subgroup of $(\\mathbb{R},+)$ is either discrete (cyclic) or dense, generalising the density of $\\mathbb{Q}$ in $\\mathbb{R}$.",
  "trap": "Trying to directly exhibit points of $G$ near an arbitrary target instead of invoking the cyclic-or-dense dichotomy makes (B) needlessly hard to prove rigorously."
},

{
  "id": "p.jam.2024.47",
  "course": "ra1",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 47,
  "marks": 1,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.1",
    "c.3.3.2"
  ],
  "title": "A telescoping sum from cyclically averaged sequences",
  "type": "NAT",
  "prompt": "<p>Let $a_1=1$, $b_1=2$ and $c_1=3$. Consider the convergent sequences $\\{a_n\\}_{n=1}^\\infty$, $\\{b_n\\}_{n=1}^\\infty$ and $\\{c_n\\}_{n=1}^\\infty$ defined as follows:</p>\n$$a_{n+1}=\\frac{a_n+b_n}{2}, \\qquad b_{n+1}=\\frac{b_n+c_n}{2} \\qquad\\text{and}\\qquad c_{n+1}=\\frac{c_n+a_n}{2} \\quad\\text{for } n\\ge1.$$\n<p>Then,</p>\n$$\\sum_{n=1}^\\infty b_nc_n(a_{n+1}-a_n) + \\sum_{n=1}^\\infty (b_{n+1}c_{n+1}-b_nc_n)a_{n+1}$$\n<p>equals ___________ (rounded off to two decimal places)</p>",
  "answer": {
    "value": 2,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p><b>Telescoping:</b> for each $n$, the $n$-th combined term is</p>\n$$b_nc_n(a_{n+1}-a_n)+(b_{n+1}c_{n+1}-b_nc_n)a_{n+1} = b_nc_na_{n+1}-b_nc_na_n+b_{n+1}c_{n+1}a_{n+1}-b_nc_na_{n+1}$$\n$$= b_{n+1}c_{n+1}a_{n+1} - a_nb_nc_n = P_{n+1}-P_n,$$\n<p>where $P_n=a_nb_nc_n$. So the whole sum telescopes to $\\lim_{N\\to\\infty}P_{N+1}-P_1$.</p>\n<p><b>Finding the limit $P_\\infty$:</b> adding the three recursions gives $a_{n+1}+b_{n+1}+c_{n+1}=a_n+b_n+c_n$, so $a_n+b_n+c_n\\equiv a_1+b_1+c_1=6$ for all $n$. Also, each new term is the average of two previous terms, so if $m_n=\\min(a_n,b_n,c_n)$ and $M_n=\\max(a_n,b_n,c_n)$, then $m_n\\le a_{n+1},b_{n+1},c_{n+1}\\le M_n$: $m_n$ is non-decreasing and $M_n$ is non-increasing, and (being bounded monotone sequences) both converge, with the spread $M_n-m_n\\to0$ under this cyclic-averaging process. Hence $a_n,b_n,c_n$ all converge to the same limit $L$, and since their sum is always $6$, $L=6/3=2$.</p>\n<p>So $P_{N+1}=a_{N+1}b_{N+1}c_{N+1}\\to 2\\cdot2\\cdot2=8$, and $P_1=1\\cdot2\\cdot3=6$. The sum equals $8-6=2$.</p>",
  "tested": "Recognising an Abel-summation-style telescoping identity in a product of three sequences, combined with the Monotone Convergence Theorem to pin down the common limit.",
  "trap": "Trying to compute the two sums separately term by term instead of noticing they combine into a telescoping difference $P_{n+1}-P_n$ makes the problem intractable."
},

{
  "id": "p.jam.2024.59",
  "course": "ra1",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 59,
  "marks": 2,
  "neg": 0,
  "sec": "3.3",
  "tests": [
    "c.3.3.6"
  ],
  "title": "A binomial-sum limit that reduces to e",
  "type": "NAT",
  "prompt": "<p>For $n\\in\\mathbb{N}$, let</p>\n$$a_n=\\frac{1}{n^{n-1}}\\sum_{k=0}^n \\frac{n!}{k!(n-k)!}\\cdot\\frac{n^k}{k+1}$$\n<p>and $\\beta=\\lim_{n\\to\\infty} a_n$. Then, the value of $\\log\\beta$ equals ___________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 1,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Use $\\dfrac{1}{k+1}=\\displaystyle\\int_0^1 x^k\\,dx$:</p>\n$$\\sum_{k=0}^n \\binom nk n^k\\cdot\\frac{1}{k+1} = \\int_0^1 \\sum_{k=0}^n \\binom nk (nx)^k\\,dx = \\int_0^1 (1+nx)^n\\,dx = \\left[\\frac{(1+nx)^{n+1}}{n(n+1)}\\right]_0^1 = \\frac{(n+1)^{n+1}-1}{n(n+1)}.$$\n<p>So</p>\n$$a_n = \\frac{1}{n^{n-1}}\\cdot\\frac{(n+1)^{n+1}-1}{n(n+1)} = \\frac{(n+1)^{n+1}-1}{n^n(n+1)}.$$\n<p>As $n\\to\\infty$: $$\\frac{(n+1)^{n+1}}{n^n(n+1)}=\\frac{(n+1)^n}{n^n}=\\left(1+\\frac1n\\right)^n\\to e,$$ and the $-1$ term contributes $\\dfrac{1}{n^n(n+1)}\\to0$. So $\\beta=\\lim a_n=e$, and $\\log\\beta=\\log e=1$.</p>",
  "tested": "Turning a binomial sum with a $1/(k+1)$ factor into an integral via $\\int_0^1 x^k dx$, then extracting the standard limit $(1+1/n)^n\\to e$.",
  "trap": "Missing the integral trick and trying to bound the sum term-by-term makes the exact closed form (and hence the exact limit $e$) very hard to see."
},

{
  "id": "p.jam.2023.09",
  "course": "ra1",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 9,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.6",
  "tests": [
    "c.3.3.6",
    "c.3.6.1"
  ],
  "title": "Convergence of $(1+1/n)^n$ against unboundedness of $n\\cos(n!\\pi/2^{10})$",
  "type": "MCQ",
  "prompt": "<p>Let $a_n = \\left(1+\\dfrac{1}{n}\\right)^n$ and $b_n = n\\cos\\!\\left(\\dfrac{n!\\,\\pi}{2^{10}}\\right)$ for $n\\in\\mathbb{N}$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$(a_n)$ is convergent and $(b_n)$ is bounded"
    },
    {
      "k": "B",
      "t": "$(a_n)$ is NOT convergent and $(b_n)$ is bounded"
    },
    {
      "k": "C",
      "t": "$(a_n)$ is convergent and $(b_n)$ is unbounded"
    },
    {
      "k": "D",
      "t": "$(a_n)$ is NOT convergent and $(b_n)$ is unbounded"
    }
  ],
  "answer": "C",
  "solution": "<p><b>$(a_n)$:</b> $a_n=(1+1/n)^n$ is the classical monotone-increasing, bounded-above sequence whose limit defines the number $e$ (Monotone Convergence Theorem). So $(a_n)$ is convergent.</p>\n<p><b>$(b_n)$:</b> We only need to show $|b_n|=n\\left|\\cos\\!\\left(\\dfrac{n!\\pi}{2^{10}}\\right)\\right|$ is unbounded. Note $2^{10}=1024$ and $12! = 479001600 = 1024\\times 467775$, so $1024 \\mid 12!$. For every $n\\ge 12$, $n!$ is an integer multiple of $12!$, hence $1024\\mid n!$ too, so $\\dfrac{n!}{2^{10}}$ is an integer, say $k$. Then $\\cos\\!\\left(\\dfrac{n!\\pi}{2^{10}}\\right)=\\cos(k\\pi)=(-1)^k=\\pm 1$.</p>\n<p>Therefore $|b_n| = n\\cdot 1 = n$ for all $n\\ge 12$, so $|b_n|\\to\\infty$: $(b_n)$ is unbounded.</p>\n<p>Hence $(a_n)$ convergent and $(b_n)$ unbounded &mdash; option (C).</p>",
  "tested": "The Monotone Convergence Theorem (via the standard limit defining $e$) alongside recognising that a sequence with $|b_n|\\to\\infty$ along a subsequence (here eventually all $n$) cannot be bounded.",
  "trap": "Assuming $\\cos(\\cdot)$ keeps $b_n$ small just because cosine is bounded between $-1$ and $1$ — the growing factor $n$ in front is what makes $b_n$ unbounded once the cosine stabilises at $\\pm1$ for all large $n$."
},

{
  "id": "p.jam.2023.10",
  "course": "ra1",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 10,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.4",
  "tests": [
    "c.3.4.5",
    "c.3.2.7"
  ],
  "title": "A $\\pm1$-valued sequence indexed by primality and its quotient by $n$",
  "type": "MCQ",
  "prompt": "<p>Let $(a_n)$ be a sequence of real numbers defined by</p>\n$$a_n = \\begin{cases} 1 & \\text{if } n \\text{ is prime} \\\\ -1 & \\text{if } n \\text{ is not prime.} \\end{cases}$$\n<p>Let $b_n = \\dfrac{a_n}{n}$ for $n\\in\\mathbb{N}$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "both $(a_n)$ and $(b_n)$ are convergent"
    },
    {
      "k": "B",
      "t": "$(a_n)$ is convergent but $(b_n)$ is NOT convergent"
    },
    {
      "k": "C",
      "t": "$(a_n)$ is NOT convergent but $(b_n)$ is convergent"
    },
    {
      "k": "D",
      "t": "both $(a_n)$ and $(b_n)$ are NOT convergent"
    }
  ],
  "answer": "C",
  "solution": "<p><b>$(a_n)$:</b> There are infinitely many primes, so $a_n=1$ for infinitely many $n$, giving a subsequence converging to $1$. There are also infinitely many non-primes (e.g. all even numbers $\\ge 4$, and $n=1$), so $a_n=-1$ for infinitely many $n$, giving a subsequence converging to $-1$. Since $(a_n)$ has two subsequences converging to different limits, $(a_n)$ is NOT convergent (Divergence Criterion).</p>\n<p><b>$(b_n)$:</b> Since $|a_n|=1$ for every $n$, $|b_n| = \\dfrac{1}{n} \\to 0$. By the Squeeze Theorem, $b_n \\to 0$, so $(b_n)$ IS convergent.</p>\n<p>Hence option (C).</p>",
  "tested": "The Divergence Criterion (two subsequential limits disagree $\\Rightarrow$ divergence) together with the Squeeze Theorem applied to $|b_n|\\le 1/n$.",
  "trap": "Thinking that because $a_n$ oscillates and is \"used\" to build $b_n$, $(b_n)$ must inherit non-convergence — the factor $1/n\\to 0$ kills the oscillation entirely."
},

{
  "id": "p.jam.2023.21",
  "course": "ra1",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.5",
  "tests": [
    "c.3.5.5"
  ],
  "title": "Cauchy sequences from summable versus non-summable consecutive differences",
  "type": "MCQ",
  "prompt": "<p>Let $(a_n)$ and $(b_n)$ be sequences of real numbers such that</p>\n$$|a_n - a_{n+1}| = \\frac{1}{2^n} \\quad \\text{and} \\quad |b_n - b_{n+1}| = \\frac{1}{\\sqrt{n}} \\quad \\text{for } n\\in\\mathbb{N}.$$\n<p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "both $(a_n)$ and $(b_n)$ are Cauchy sequences"
    },
    {
      "k": "B",
      "t": "$(a_n)$ is a Cauchy sequence but $(b_n)$ need NOT be a Cauchy sequence"
    },
    {
      "k": "C",
      "t": "$(a_n)$ need NOT be a Cauchy sequence but $(b_n)$ is a Cauchy sequence"
    },
    {
      "k": "D",
      "t": "both $(a_n)$ and $(b_n)$ need NOT be Cauchy sequences"
    }
  ],
  "answer": "B",
  "solution": "<p><b>$(a_n)$:</b> For $m>n$, the triangle inequality gives $|a_n-a_m| \\le \\displaystyle\\sum_{k=n}^{m-1}|a_k-a_{k+1}| = \\sum_{k=n}^{m-1}\\frac{1}{2^k} < \\sum_{k=n}^{\\infty}\\frac{1}{2^k} = \\frac{1}{2^{n-1}}.$</p>\n<p>This bound is independent of $m$ and $\\to 0$ as $n\\to\\infty$, so given $\\varepsilon>0$ choose $N$ with $1/2^{N-1}<\\varepsilon$; then $|a_n-a_m|<\\varepsilon$ for all $m>n\\ge N$. So $(a_n)$ IS Cauchy (this uses that $\\sum 1/2^n$, a convergent geometric series, controls the tail).</p>\n<p><b>$(b_n)$:</b> Here $\\sum 1/\\sqrt{n}$ is a divergent $p$-series ($p=1/2\\le 1$), so the same bounding technique fails to give a uniform tail bound. Indeed, take the concrete example $b_n = -\\displaystyle\\sum_{k=1}^{n-1}\\frac{1}{\\sqrt{k}}$ (with $b_1=0$), which satisfies $|b_n-b_{n+1}|=1/\\sqrt{n}$ but $b_n\\to -\\infty$ (properly divergent, hence unbounded), so $(b_n)$ is NOT Cauchy. So $(b_n)$ need not be Cauchy.</p>\n<p>Hence option (B).</p>",
  "tested": "The Cauchy Criterion: a sequence is Cauchy iff $\\sum|a_n-a_{n+1}|$-type tail estimates vanish, which holds when the differences form a convergent (here geometric) series but fails when they form a divergent ($p\\le 1$) series.",
  "trap": "Assuming \"the terms get closer together\" (differences $\\to 0$) is enough for a Cauchy sequence — $|b_n-b_{n+1}|\\to 0$ too, yet $(b_n)$ can still diverge to $-\\infty$ because the differences are not summable."
},

{
  "id": "p.jam.2023.49",
  "course": "ra1",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 49,
  "marks": 1,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "A telescoping series",
  "type": "NAT",
  "prompt": "<p>The sum of the series $\\displaystyle\\sum_{n=1}^\\infty \\frac{2n+1}{(n^2+1)(n^2+2n+2)}$ is equal to _____ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>Let $c_n = n^2+1$. Note $c_{n+1} = (n+1)^2+1 = n^2+2n+2$, exactly the second factor in the denominator, and</p>\n$$c_{n+1}-c_n = (n^2+2n+2)-(n^2+1) = 2n+1,$$\n<p>exactly the numerator. So the general term telescopes:</p>\n$$\\frac{2n+1}{(n^2+1)(n^2+2n+2)} = \\frac{c_{n+1}-c_n}{c_n c_{n+1}} = \\frac{1}{c_n}-\\frac{1}{c_{n+1}}.$$\n<p>Summing from $n=1$ to $N$:</p>\n$$\\sum_{n=1}^N \\left(\\frac1{c_n}-\\frac1{c_{n+1}}\\right) = \\frac{1}{c_1} - \\frac{1}{c_{N+1}} = \\frac{1}{2} - \\frac{1}{(N+1)^2+1}.$$\n<p>Letting $N\\to\\infty$, the second term $\\to 0$, so the sum of the series is $\\dfrac12 = 0.50$.</p>",
  "tested": "Recognising and summing a telescoping series, the same technique behind the standard telescoping-series examples for infinite series.",
  "trap": "Trying to attack this with a convergence test (comparison/ratio) to only determine convergence, missing that the numerator is engineered to be exactly $c_{n+1}-c_n$, which gives the exact sum directly via telescoping."
},

{
  "id": "p.jam.2023.50",
  "course": "ra1",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 50,
  "marks": 1,
  "neg": 0,
  "sec": "3.2",
  "tests": [
    "c.3.2.7",
    "c.3.1.10"
  ],
  "title": "The $n$-th root of a sum of geometric-type terms",
  "type": "NAT",
  "prompt": "<p>The value of $\\displaystyle\\lim_{n\\to\\infty}\\left(1+\\frac{1}{2^n}+\\frac{1}{3^n}+\\cdots+\\frac{1}{(2023)^n}\\right)^{1/n}$ is equal to _____ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 1,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>Let $S_n = 1 + \\dfrac{1}{2^n} + \\dfrac{1}{3^n} + \\cdots + \\dfrac{1}{2023^n} = \\displaystyle\\sum_{k=1}^{2023}\\left(\\frac1k\\right)^n$, a sum of $2023$ nonnegative terms with $\\frac11=1$ being the largest base.</p>\n<p>Since every term is $\\le 1^n=1$, and the term for $k=1$ equals $1$ exactly,</p>\n$$1 \\le S_n \\le 2023.$$\n<p>Taking $n$-th roots (all quantities positive):</p>\n$$1 \\le S_n^{1/n} \\le (2023)^{1/n}.$$\n<p>As $n\\to\\infty$, $(2023)^{1/n}\\to 1$ (a standard sequence limit: $c^{1/n}\\to1$ for any fixed $c>0$). By the Squeeze Theorem, $S_n^{1/n}\\to 1$.</p>\n<p>So the answer is $1.00$.</p>",
  "tested": "The general principle $\\left(\\sum_{k} x_k^n\\right)^{1/n} \\to \\max_k x_k$ for finitely many nonnegative $x_k$, proved here via the Squeeze Theorem and the standard limit $c^{1/n}\\to 1$.",
  "trap": "Expecting the answer to depend on $2023$ (the largest denominator) — it is actually the smallest denominator (giving the largest term, $\\frac11=1$) that dominates the sum and determines the limit."
},

{
  "id": "p.jam.2022.06",
  "course": "ra1",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 6,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.3",
  "tests": [
    "c.3.3.2"
  ],
  "title": "AM–GM iterative sequences and their common limit",
  "type": "MCQ",
  "prompt": "<p>Let $(x_n)$ and $(y_n)$ be sequences of real numbers defined by</p><p>$$x_1=1,\\quad y_1=\\frac{1}{2},\\quad x_{n+1}=\\frac{x_n+y_n}{2},\\quad\\text{and}\\quad y_{n+1}=\\sqrt{x_n y_n}\\ \\ \\text{for all } n\\in\\mathbb{N}.$$</p><p>Then which one of the following is true?</p>",
  "options": [
    {
      "k": "A",
      "t": "$(x_n)$ is convergent, but $(y_n)$ is not convergent."
    },
    {
      "k": "B",
      "t": "$(x_n)$ is not convergent, but $(y_n)$ is convergent."
    },
    {
      "k": "C",
      "t": "Both $(x_n)$ and $(y_n)$ are convergent and $\\displaystyle\\lim_{n\\to\\infty}x_n>\\lim_{n\\to\\infty}y_n$."
    },
    {
      "k": "D",
      "t": "Both $(x_n)$ and $(y_n)$ are convergent and $\\displaystyle\\lim_{n\\to\\infty}x_n=\\lim_{n\\to\\infty}y_n$."
    }
  ],
  "answer": "D",
  "solution": "<p>Since $x_1=1>y_1=\\tfrac12>0$, induction shows $x_n\\ge y_n>0$ for every $n$: if $x_n\\ge y_n$, then by AM&ndash;GM, $x_{n+1}=\\dfrac{x_n+y_n}{2}\\ge\\sqrt{x_ny_n}=y_{n+1}$.</p><p>Also $x_{n+1}=\\dfrac{x_n+y_n}{2}\\le x_n$ (the average of $x_n$ with a smaller number is at most $x_n$), so $(x_n)$ is decreasing; and $y_{n+1}=\\sqrt{x_ny_n}\\ge\\sqrt{y_n\\cdot y_n}=y_n$, so $(y_n)$ is increasing. Since $(x_n)$ is decreasing and bounded below by $y_1$, and $(y_n)$ is increasing and bounded above by $x_1$, the Monotone Convergence Theorem gives that both converge, say $x_n\\to L$ and $y_n\\to M$ with $L\\ge M$.</p><p>Now bound how fast the gap closes: since $\\sqrt{x_n}\\ge\\sqrt{y_n}>0$,</p><p>$$0\\le x_{n+1}-y_{n+1}=\\frac{x_n+y_n}{2}-\\sqrt{x_ny_n}=\\frac{(\\sqrt{x_n}-\\sqrt{y_n})^2}{2}\\le \\frac{(\\sqrt{x_n}-\\sqrt{y_n})(\\sqrt{x_n}+\\sqrt{y_n})}{2}=\\frac{x_n-y_n}{2}.$$</p><p>So $x_n-y_n\\le (x_1-y_1)/2^{n-1}\\to 0$, forcing $L=M$. Both sequences converge to the same limit: option (D).</p>",
  "tested": "<p>Monotone Convergence Theorem applied to a pair of interlocked monotone, bounded sequences (an arithmetic&ndash;geometric mean type iteration), plus a squeeze argument to show the two limits coincide.</p>",
  "trap": "Showing both sequences converge (via MCT) but stopping there and picking (C) by intuition, instead of proving the gap x_n - y_n actually shrinks to 0."
},

{
  "id": "p.jam.2022.44",
  "course": "ra1",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 44,
  "marks": 1,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "A telescoping series sum",
  "type": "NAT",
  "prompt": "<p>The sum of the series</p><p>$$\\sum_{n=1}^{\\infty}\\frac{1}{(4n-3)(4n+1)}$$</p><p>is equal to _________. (Rounded off to two decimal places)</p>",
  "answer": {
    "value": 0.25,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Partial fractions: $$\\frac{1}{(4n-3)(4n+1)}=\\frac14\\left(\\frac{1}{4n-3}-\\frac{1}{4n+1}\\right).$$</p><p>So the $N$-th partial sum telescopes: each $\\frac{1}{4n+1}$ cancels the $\\frac{1}{4(n+1)-3}$ term of the next summand, leaving</p><p>$$\\sum_{n=1}^{N}\\frac{1}{(4n-3)(4n+1)}=\\frac14\\left(1-\\frac{1}{4N+1}\\right).$$</p><p>Letting $N\\to\\infty$, $\\frac{1}{4N+1}\\to0$, so the sum is $\\dfrac14(1-0)=0.25$.</p>",
  "tested": "<p>Telescoping series after a partial-fraction decomposition, the introductory example type of §3.7.</p>",
  "trap": "Forgetting the factor of 1/4 pulled out of the partial fractions, which would give 1 instead of 0.25."
},

{
  "id": "p.jam.2021.07",
  "course": "ra1",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 7,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.7",
  "tests": [
    "c.3.7.4",
    "s.quantifier"
  ],
  "title": "Negating a Cauchy-criterion-shaped statement",
  "type": "MCQ",
  "prompt": "<p>For every $n\\in\\mathbb{N}$, let $f_n:\\mathbb{R}\\to\\mathbb{R}$ be a function. From the given choices, pick the statement that is the negation of</p><p>\"For every $x\\in\\mathbb{R}$ and for every real number $\\varepsilon>0$, there exists an integer $N>0$ such that $\\sum_{i=1}^p |f_{N+i}(x)| < \\varepsilon$ for every integer $p>0$.\"</p>",
  "options": [
    {
      "k": "A",
      "t": "For every $x\\in\\mathbb{R}$ and for every real number $\\varepsilon>0$, there does not exist any integer $N>0$ such that $\\sum_{i=1}^p |f_{N+i}(x)| < \\varepsilon$ for every integer $p>0$."
    },
    {
      "k": "B",
      "t": "For every $x\\in\\mathbb{R}$ and for every real number $\\varepsilon>0$, there exists an integer $N>0$ such that $\\sum_{i=1}^p |f_{N+i}(x)| \\ge \\varepsilon$ for some integer $p>0$."
    },
    {
      "k": "C",
      "t": "There exists $x\\in\\mathbb{R}$ and there exists a real number $\\varepsilon>0$ such that for every integer $N>0$, there exists an integer $p>0$ for which the inequality $\\sum_{i=1}^p |f_{N+i}(x)| \\ge \\varepsilon$ holds."
    },
    {
      "k": "D",
      "t": "There exists $x\\in\\mathbb{R}$ and there exists a real number $\\varepsilon>0$ such that for every integer $N>0$ and for every integer $p>0$ the inequality $\\sum_{i=1}^p |f_{N+i}(x)| \\ge \\varepsilon$ holds."
    }
  ],
  "answer": "C",
  "solution": "<p>The statement has the quantifier shape $\\forall x\\, \\forall \\varepsilon>0\\, \\exists N\\, \\forall p\\, [\\,\\Sigma < \\varepsilon\\,]$, exactly the pattern of the Cauchy criterion for a series ($\\forall x$, the tail sums $\\sum_{i=1}^p|f_{N+i}(x)|$ must eventually be small). To negate, every quantifier flips and the innermost inequality reverses ($<$ becomes $\\ge$):</p><p>$$\\exists x\\, \\exists \\varepsilon>0\\, \\forall N\\, \\exists p\\, \\Big[\\sum_{i=1}^p |f_{N+i}(x)| \\ge \\varepsilon\\Big].$$</p><p>This is exactly option (C). Options (A) and (B) only alter the innermost clause and leave the leading \"for every $x$, for every $\\varepsilon$\" untouched, which is wrong — negating $\\forall x\\,\\forall\\varepsilon\\,(\\cdots)$ must produce $\\exists x\\,\\exists\\varepsilon\\,(\\cdots)$. Option (D) over-negates by also flipping the $\\exists p$ into $\\forall p$, which the negation does not require.</p>",
  "tested": "Correctly negating a nested \\forall\\forall\\exists\\forall statement — the same logical shape as the Cauchy Criterion for series (c.3.7.4).",
  "trap": "Negating only the innermost clause and forgetting that every universal quantifier in front must flip to existential (and vice versa)."
},

{
  "id": "p.jam.2021.16",
  "course": "ra1",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 16,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "Telescoping product of (1 - 1/k²)",
  "type": "MCQ",
  "prompt": "<p>Define</p><p>$$S = \\lim_{n\\to\\infty}\\Big(1-\\frac{1}{2^2}\\Big)\\Big(1-\\frac{1}{3^2}\\Big)\\cdots\\Big(1-\\frac{1}{n^2}\\Big).$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$S = 1/2$."
    },
    {
      "k": "B",
      "t": "$S = 1/4$."
    },
    {
      "k": "C",
      "t": "$S = 1$."
    },
    {
      "k": "D",
      "t": "$S = 3/4$."
    }
  ],
  "answer": "A",
  "solution": "<p>Factor each term: $1-\\dfrac{1}{k^2} = \\dfrac{(k-1)(k+1)}{k^2}$. So the product from $k=2$ to $n$ is</p><p>$$\\prod_{k=2}^{n}\\frac{k-1}{k}\\ \\cdot\\ \\prod_{k=2}^{n}\\frac{k+1}{k}.$$</p><p>The first product telescopes: $\\dfrac{1}{2}\\cdot\\dfrac{2}{3}\\cdots\\dfrac{n-1}{n} = \\dfrac{1}{n}$. The second telescopes too: $\\dfrac{3}{2}\\cdot\\dfrac{4}{3}\\cdots\\dfrac{n+1}{n} = \\dfrac{n+1}{2}$. Multiplying,</p><p>$$\\prod_{k=2}^n\\Big(1-\\frac{1}{k^2}\\Big) = \\frac{1}{n}\\cdot\\frac{n+1}{2} = \\frac{n+1}{2n} \\ \\xrightarrow[n\\to\\infty]{}\\ \\frac12.$$</p><p>So $S=1/2$.</p>",
  "tested": "Telescoping a finite product by factoring 1-1/k^2 — the multiplicative analogue of a telescoping series (c.3.7.2)."
},

{
  "id": "p.jam.2021.31",
  "course": "ra1",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "4.3",
  "tests": [
    "c.4.3.8",
    "c.2.3.2"
  ],
  "title": "The Legendre–Fenchel transform requires superlinear growth",
  "type": "MSQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function with the property that for every $y\\in\\mathbb{R}$, the value of the expression</p><p>$$\\sup_{x\\in\\mathbb{R}} \\big[xy - f(x)\\big]$$</p><p>is finite. Define $g(y) = \\sup_{x\\in\\mathbb{R}}[xy-f(x)]$ for $y\\in\\mathbb{R}$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$g$ is even if $f$ is even."
    },
    {
      "k": "B",
      "t": "$f$ must satisfy $\\displaystyle\\lim_{|x|\\to\\infty} \\frac{f(x)}{|x|} = +\\infty$."
    },
    {
      "k": "C",
      "t": "$g$ is odd if $f$ is even."
    },
    {
      "k": "D",
      "t": "$f$ must satisfy $\\displaystyle\\lim_{|x|\\to\\infty} \\frac{f(x)}{|x|} = -\\infty$."
    }
  ],
  "answer": [
    "A",
    "B"
  ],
  "solution": "<p><b>(B)</b>: if $f(x)/|x|$ did <i>not</i> tend to $+\\infty$, there would be a number $M$ and a sequence $x_k\\to\\infty$ (or $x_k\\to-\\infty$) with $f(x_k) \\le M|x_k|$. Taking $y=M+1$ (matching the sign of $x_k$), $x_ky - f(x_k) \\ge |x_k|(M+1) - M|x_k| = |x_k| \\to \\infty$, so $\\sup_x[xy-f(x)] = +\\infty$ for that $y$ — contradicting finiteness. So the hypothesis forces $\\lim_{|x|\\to\\infty} f(x)/|x| = +\\infty$: (B) is true, and (D), its opposite, is false.</p><p><b>(A) and (C)</b>: suppose $f$ is even. Substituting $x\\mapsto -x$ (which just re-ranges over all of $\\mathbb{R}$),</p><p>$$g(-y) = \\sup_x[x(-y)-f(x)] = \\sup_x[(-x)(-y) - f(-x)] = \\sup_x[xy - f(x)] = g(y),$$</p><p>using $f(-x)=f(x)$. So $g(-y)=g(y)$: $g$ is <b>even</b>, confirming (A) and refuting (C) (a genuinely even function cannot also be odd unless it is identically zero). E.g. for $f(x)=x^2/2$, $g(y)=y^2/2$, which is even but certainly not odd.</p>",
  "tested": "The Legendre-Fenchel transform requires superlinear growth to be everywhere finite, and inherits evenness from f — consequences of the defining property of supremum (c.2.3.2) and limits at infinity (c.4.3.8)."
},

{
  "id": "p.jam.2021.42",
  "course": "ra1",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 42,
  "marks": 1,
  "neg": 0,
  "sec": "3.2",
  "tests": [
    "c.3.1.10",
    "c.3.2.7"
  ],
  "title": "Limit of the n-th root of a sum of exponentials",
  "type": "NAT",
  "prompt": "<p>The value of</p><p>$$\\lim_{n\\to\\infty} \\big(3^n+5^n+7^n\\big)^{1/n}$$</p><p>is ____.</p>",
  "answer": {
    "value": 7,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>For $n\\ge1$, $7^n \\le 3^n+5^n+7^n \\le 3\\cdot 7^n$, so</p><p>$$7 \\le (3^n+5^n+7^n)^{1/n} \\le 7\\cdot 3^{1/n}.$$</p><p>As $n\\to\\infty$, $3^{1/n}\\to 1$, so by the Squeeze Theorem the limit equals $7$.</p>",
  "tested": "The Squeeze Theorem for sequences (c.3.2.7), applied via the standard \"the largest term dominates\" trick for n-th roots of sums."
},

{
  "id": "p.jam.2021.50",
  "course": "ra1",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 50,
  "marks": 1,
  "neg": 0,
  "sec": "3.1",
  "tests": [
    "c.3.1.10"
  ],
  "title": "An infinite product of nested cosines",
  "type": "NAT",
  "prompt": "<p>The value of</p><p>$$\\frac{\\pi}{2}\\lim_{n\\to\\infty}\\cos\\Big(\\frac{\\pi}{4}\\Big)\\cos\\Big(\\frac{\\pi}{8}\\Big)\\cdots\\cos\\Big(\\frac{\\pi}{2^{n+1}}\\Big)$$</p><p>is ____.</p>",
  "answer": {
    "value": 1,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Use the identity $\\sin\\theta = 2^N\\sin(\\theta/2^N)\\prod_{k=1}^N \\cos(\\theta/2^k)$, obtained by repeatedly applying $\\sin\\theta = 2\\sin(\\theta/2)\\cos(\\theta/2)$. Take $\\theta=\\pi/2$:</p><p>$$\\prod_{k=1}^N \\cos\\Big(\\frac{\\pi}{2^{k+1}}\\Big) = \\frac{\\sin(\\pi/2)}{2^N \\sin\\!\\big(\\pi/2^{N+1}\\big)} = \\frac{1}{2^N\\sin(\\pi/2^{N+1})}.$$</p><p>The left side, reindexed, is exactly $\\cos(\\pi/4)\\cos(\\pi/8)\\cdots\\cos(\\pi/2^{N+1})$. As $N\\to\\infty$, $\\sin(\\pi/2^{N+1}) \\sim \\pi/2^{N+1}$, so</p><p>$$2^N\\sin\\!\\Big(\\frac{\\pi}{2^{N+1}}\\Big) \\to 2^N\\cdot\\frac{\\pi}{2^{N+1}} = \\frac{\\pi}{2}.$$</p><p>So the infinite product tends to $\\dfrac{1}{\\pi/2} = \\dfrac{2}{\\pi}$, and multiplying by the prefactor $\\pi/2$ gives</p><p>$$\\frac{\\pi}{2}\\cdot\\frac{2}{\\pi} = 1.$$</p>",
  "tested": "The classical telescoping-cosine identity for sin\\theta as an infinite product, combined with the small-angle limit sin x ~ x (Standard Sequence Limits, c.3.1.10)."
},

{
  "id": "p.jam.2021.55",
  "course": "ra1",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 55,
  "marks": 2,
  "neg": 0,
  "sec": "3.6",
  "tests": [
    "c.3.6.1",
    "c.3.4.8"
  ],
  "title": "Limit points of a Cesàro mean of a properly divergent sequence",
  "type": "NAT",
  "prompt": "<p>Define the sequence</p><p>$$s_n = \\begin{cases} \\dfrac{1}{2^n}\\displaystyle\\sum_{j=0}^{n-2} 2^{2j} & \\text{if } n>0 \\text{ is even}, \\\\[10pt] \\dfrac{1}{2^n}\\displaystyle\\sum_{j=0}^{n-1} 2^{2j} & \\text{if } n>0 \\text{ is odd}. \\end{cases}$$</p><p>Define $\\sigma_m = \\dfrac1m\\displaystyle\\sum_{n=1}^m s_n$. The number of limit points of the sequence $\\{\\sigma_m\\}$ is ____.</p>",
  "answer": {
    "value": 0,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Sum the geometric series $\\sum_{j=0}^{N} 4^j = \\dfrac{4^{N+1}-1}{3}$ in each branch.</p><p>For even $n$ (so $N=n-2$): $s_n = \\dfrac{4^{n-1}-1}{3\\cdot 2^n} = \\dfrac{2^{n-2} - 2^{-n}}{3}$.</p><p>For odd $n$ (so $N=n-1$): $s_n = \\dfrac{4^{n}-1}{3\\cdot 2^n} = \\dfrac{2^{n} - 2^{-n}}{3}$.</p><p>Either way, $s_n$ grows like a constant multiple of $2^n$, so $s_n\\to\\infty$: the sequence $\\{s_n\\}$ is <b>unbounded</b>. Since $s_n$ grows geometrically, the partial sums $\\sum_{n=1}^m s_n$ are dominated by the last term $s_m$, so $\\sum_{n=1}^m s_n = \\Theta(2^m)$, and therefore</p><p>$$\\sigma_m = \\frac1m\\sum_{n=1}^m s_n = \\Theta\\!\\Big(\\frac{2^m}{m}\\Big) \\to \\infty.$$</p><p>A sequence that diverges to $+\\infty$ has no bounded subsequence, and only bounded sequences are guaranteed a convergent subsequence (Bolzano&ndash;Weierstrass). Here $\\{\\sigma_m\\}$ is unbounded and eventually increasing without oscillation, so it has <b>no convergent subsequence at all</b>. The number of (finite) limit points is $0$.</p>",
  "tested": "Recognising a properly divergent sequence (c.3.6.1) has zero limit points, since a convergent subsequence would have to be bounded (Bolzano-Weierstrass, c.3.4.8).",
  "trap": "Assuming a sequence defined by a parity-dependent formula must oscillate between two limit points; here both branches actually blow up, so the Cesàro average diverges instead of settling into finitely many limit points."
},

{
  "id": "p.jam.2020.01",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 1,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.3",
  "tests": [
    "c.3.3.1",
    "c.3.2.7"
  ],
  "title": "A non-monotonic sequence convergent to 1",
  "type": "MCQ",
  "prompt": "<p>Let $s_n = 1 + \\dfrac{(-1)^n}{n}$, $n \\in \\mathbb{N}$. Then the sequence $\\{s_n\\}$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "monotonically increasing and is convergent to $1$"
    },
    {
      "k": "B",
      "t": "monotonically decreasing and is convergent to $1$"
    },
    {
      "k": "C",
      "t": "neither monotonically increasing nor monotonically decreasing but is convergent to $1$"
    },
    {
      "k": "D",
      "t": "divergent"
    }
  ],
  "answer": "C",
  "solution": "<p>Compute the first few terms: $s_1 = 1-1=0$, $s_2 = 1+\\tfrac12 = 1.5$, $s_3 = 1-\\tfrac13 \\approx 0.667$, $s_4 = 1+\\tfrac14 = 1.25$, $s_5 \\approx 0.8$. The terms jump above and below $1$, so $\\{s_n\\}$ is not monotone (it neither increases nor decreases at every step).</p>\n<p>For convergence: $\\left|\\dfrac{(-1)^n}{n}\\right| = \\dfrac1n \\to 0$, so by the Squeeze Theorem $\\dfrac{(-1)^n}{n}\\to 0$, hence $s_n \\to 1+0 = 1$.</p>\n<p>So $\\{s_n\\}$ is convergent to $1$ but not monotone: answer (C).</p>",
  "tested": "Recognising that a sequence can converge without being eventually monotone, and using the Squeeze Theorem on $(-1)^n/n$.",
  "trap": "Treating 1/n's monotone decrease as the whole story and forgetting the alternating sign flips the direction of s_n from one term to the next."
},

{
  "id": "p.jam.2020.03",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 3,
  "marks": 1,
  "neg": -0.33,
  "sec": "4.3",
  "tests": [
    "c.4.3.8",
    "c.4.3.1"
  ],
  "title": "Spot the false limit statement",
  "type": "MCQ",
  "prompt": "<p>Which of the following is FALSE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\lim_{x\\to\\infty} \\frac{x}{e^x} = 0$"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\lim_{x\\to 0^+} \\frac{1}{xe^{1/x}} = 0$"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\lim_{x\\to 0^+} \\frac{\\sin x}{1+2x} = 0$"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\lim_{x\\to 0^+} \\frac{\\cos x}{1+2x} = 0$"
    }
  ],
  "answer": "D",
  "solution": "<p><b>(A)</b> $x/e^x\\to 0$ as $x\\to\\infty$ since the exponential dominates any polynomial. True.</p>\n<p><b>(B)</b> Put $t=1/x\\to\\infty$ as $x\\to 0^+$: $xe^{1/x} = e^t/t \\to \\infty$, so $1/(xe^{1/x})\\to 0$. True.</p>\n<p><b>(C)</b> Both numerator and denominator are continuous at $x=0$ with denominator nonzero there, so direct substitution gives $\\sin(0)/(1+0)=0$. True.</p>\n<p><b>(D)</b> Again direct substitution applies: $\\cos(0)/(1+0) = 1/1 = 1 \\ne 0$. So this limit equals $1$, not $0$ — the statement is FALSE.</p>",
  "tested": "Recognising which limits are genuinely indeterminate versus which can be evaluated by direct substitution using continuity.",
  "trap": "Assuming every option in the list must be an indeterminate 0/0 or ∞/∞ form like the others, and guessing 0 for (D) without actually substituting x=0."
},

{
  "id": "p.jam.2020.11",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 11,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.2",
  "tests": [
    "c.3.2.7"
  ],
  "title": "When the ratio a_{n+1}/a_n tends to l<1",
  "type": "MCQ",
  "prompt": "<p>Let $\\{a_n\\}$ be a sequence of positive real numbers. Suppose that $l = \\displaystyle\\lim_{n\\to\\infty} \\frac{a_{n+1}}{a_n}$. Which of the following is true?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $l=1$, then $\\displaystyle\\lim_{n\\to\\infty} a_n = 1$"
    },
    {
      "k": "B",
      "t": "If $l=1$, then $\\displaystyle\\lim_{n\\to\\infty} a_n = 0$"
    },
    {
      "k": "C",
      "t": "If $l<1$, then $\\displaystyle\\lim_{n\\to\\infty} a_n = 1$"
    },
    {
      "k": "D",
      "t": "If $l<1$, then $\\displaystyle\\lim_{n\\to\\infty} a_n = 0$"
    }
  ],
  "answer": "D",
  "solution": "<p>(A) and (B) fail for $a_n=n$: $a_{n+1}/a_n\\to 1$ but $a_n\\to\\infty$ (neither $1$ nor $0$), so $l=1$ forces nothing definite.</p>\n<p>For $l<1$: pick $r$ with $l<r<1$. Since $a_{n+1}/a_n\\to l<r$, there is $N$ with $a_{n+1} < r\\,a_n$ for all $n\\ge N$. Iterating, $0 < a_{N+k} < r^k a_N$ for $k\\ge 0$. Since $r^k\\to 0$ as $k\\to\\infty$, the Squeeze Theorem gives $a_{N+k}\\to 0$, i.e. $a_n\\to 0$.</p>\n<p>So (D) is true and (C) is false (a sequence with ratio limit $<1$ cannot converge to $1\\ne 0$).</p>",
  "tested": "The \"ratio test for sequences\": if consecutive terms shrink by a factor eventually below some r<1, the sequence is squeezed to 0 by a geometric sequence.",
  "trap": "Assuming l=1 pins down a unique limit (candidates A, B) — the ratio tending to 1 is compatible with a_n diverging, converging to any positive number, or converging to 0."
},

{
  "id": "p.jam.2020.12",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 12,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.3",
  "tests": [
    "c.3.3.2"
  ],
  "title": "Monotonicity and limit of a recursively defined sequence",
  "type": "MCQ",
  "prompt": "<p>Define $s_1 = \\alpha > 0$ and $s_{n+1} = \\sqrt{\\dfrac{1+s_n^2}{1+\\alpha}}$, $n\\ge 1$. Which of the following is true?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $s_n^2 < \\dfrac1\\alpha$, then $\\{s_n\\}$ is monotonically increasing and $\\displaystyle\\lim_{n\\to\\infty} s_n = \\dfrac{1}{\\sqrt\\alpha}$"
    },
    {
      "k": "B",
      "t": "If $s_n^2 < \\dfrac1\\alpha$, then $\\{s_n\\}$ is monotonically decreasing and $\\displaystyle\\lim_{n\\to\\infty} s_n = \\dfrac1\\alpha$"
    },
    {
      "k": "C",
      "t": "If $s_n^2 > \\dfrac1\\alpha$, then $\\{s_n\\}$ is monotonically increasing and $\\displaystyle\\lim_{n\\to\\infty} s_n = \\dfrac{1}{\\sqrt\\alpha}$"
    },
    {
      "k": "D",
      "t": "If $s_n^2 > \\dfrac1\\alpha$, then $\\{s_n\\}$ is monotonically decreasing and $\\displaystyle\\lim_{n\\to\\infty} s_n = \\dfrac1\\alpha$"
    }
  ],
  "answer": "A",
  "solution": "<p>From the recursion, $s_{n+1}^2 - s_n^2 = \\dfrac{1+s_n^2}{1+\\alpha} - s_n^2 = \\dfrac{1-\\alpha s_n^2}{1+\\alpha}$, which has the sign of $\\dfrac1\\alpha - s_n^2$.</p>\n<p>So if $s_n^2 < \\dfrac1\\alpha$, then $s_{n+1}^2 > s_n^2$, i.e. $s_{n+1}>s_n$ (increasing). Also, $s_{n+1}^2 < \\dfrac1\\alpha \\iff \\dfrac{1+s_n^2}{1+\\alpha} < \\dfrac1\\alpha \\iff \\alpha + \\alpha s_n^2 < 1+\\alpha \\iff s_n^2 < \\dfrac1\\alpha$, which holds by hypothesis. By induction $s_n^2 < 1/\\alpha$ for every $n$, so $\\{s_n\\}$ is increasing and bounded above by $1/\\sqrt\\alpha$.</p>\n<p>By the Monotone Convergence Theorem $s_n \\to L$ for some $L$, and taking limits in the recursion, $L^2(1+\\alpha) = 1+L^2$, so $L^2 = 1/\\alpha$, giving $L = 1/\\sqrt\\alpha$ (as $L>0$).</p>",
  "tested": "Establishing monotonicity from the sign of $s_{n+1}^2-s_n^2$, boundedness by induction, and applying the Monotone Convergence Theorem to identify the limit as the fixed point of the recursion.",
  "trap": "Finding the fixed point $1/\\sqrt\\alpha$ correctly but not verifying which side of it (s_n²<1/α or >1/α) actually makes the sequence increasing versus decreasing."
},

{
  "id": "p.jam.2020.13",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 13,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.1"
  ],
  "title": "Sum of a shifted 3-term running-sum series",
  "type": "MCQ",
  "prompt": "<p>Suppose that $S$ is the sum of a convergent series $\\displaystyle\\sum_{n=1}^{\\infty} a_n$. Define $t_n = a_n + a_{n+1} + a_{n+2}$. Then the series $\\displaystyle\\sum_{n=1}^{\\infty} t_n$</p>",
  "options": [
    {
      "k": "A",
      "t": "diverges"
    },
    {
      "k": "B",
      "t": "converges to $3S - a_1 - a_2$"
    },
    {
      "k": "C",
      "t": "converges to $3S - a_1 - 2a_2$"
    },
    {
      "k": "D",
      "t": "converges to $3S - 2a_1 - a_2$"
    }
  ],
  "answer": "D",
  "solution": "<p>Let $S_N = \\sum_{k=1}^N a_k$. Then $\\sum_{n=1}^{N} t_n = \\sum_{n=1}^N a_n + \\sum_{n=1}^N a_{n+1} + \\sum_{n=1}^N a_{n+2} = S_N + (S_{N+1}-a_1) + (S_{N+2}-a_1-a_2)$.</p>\n<p>As $N\\to\\infty$, $S_N, S_{N+1}, S_{N+2}$ all $\\to S$, so the sum tends to $S + (S-a_1) + (S-a_1-a_2) = 3S - 2a_1 - a_2$.</p>",
  "tested": "Writing a shifted series as differences of the tail of the original partial sums, using that all shifted partial sums converge to the same limit S.",
  "trap": "Miscounting how many times a_1 and a_2 are \"missing\" from the three shifted copies of the partial sum — a_1 is missing from two of the three shifts, a_2 from only one."
},

{
  "id": "p.jam.2020.41",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 41,
  "marks": 1,
  "neg": 0,
  "sec": "3.1",
  "tests": [
    "c.3.1.10"
  ],
  "title": "Limit of e^(1 − n^(1/n))",
  "type": "NAT",
  "prompt": "<p>Let $x_n = n^{1/n}$ and $y_n = e^{1-x_n}$, $n\\in\\mathbb{N}$. Then the value of $\\displaystyle\\lim_{n\\to\\infty} y_n$ is ____.</p>",
  "answer": {
    "value": 1,
    "tol": 0.01
  },
  "solution": "<p>It is a standard sequence limit that $x_n = n^{1/n} \\to 1$ as $n\\to\\infty$. So $1-x_n \\to 0$, and since $t\\mapsto e^t$ is continuous, $y_n = e^{1-x_n} \\to e^0 = 1$.</p>",
  "tested": "The standard limit n^(1/n)→1, combined with continuity of the exponential function to pass the limit inside.",
  "trap": "Forgetting that n^(1/n)→1 (not 0 or ∞) and instead guessing the exponent 1−x_n blows up."
},

{
  "id": "p.jam.2020.44",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 44,
  "marks": 1,
  "neg": 0,
  "sec": "4.1",
  "tests": [
    "c.4.1.4"
  ],
  "title": "Largest delta for an epsilon=1 condition on 1/x over a discrete set",
  "type": "NAT",
  "prompt": "<p>Let $S = \\left\\{\\dfrac1n : n\\in\\mathbb{N}\\right\\}$ and $f:S\\to\\mathbb{R}$ be defined by $f(x)=\\dfrac1x$. Then</p>\n<p>$$\\max\\left\\{\\delta : \\left|x-\\frac13\\right|<\\delta \\implies \\left|f(x)-f\\!\\left(\\frac13\\right)\\right|<1\\right\\}$$</p>\n<p>is ____. (rounded off to two decimal places)</p>",
  "answer": {
    "value": 0.08,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Here $x$ ranges only over $S=\\{1,\\tfrac12,\\tfrac13,\\tfrac14,\\tfrac15,\\dots\\}$, and $f(1/3)=3$. The requirement $|f(x)-3|<1$ means $2<1/x<4$, i.e. $\\tfrac14 < x < \\tfrac12$.</p>\n<p>Among the points of $S$, only $x=\\tfrac13$ lies strictly between $\\tfrac14$ and $\\tfrac12$ (since $\\tfrac12$ and $\\tfrac14$ themselves are excluded by strict inequality, and no other $1/n$ falls in that open range). So we need $\\delta$ small enough that the interval $\\left(\\tfrac13-\\delta,\\tfrac13+\\delta\\right)$ catches no point of $S$ other than $\\tfrac13$ itself.</p>\n<p>The nearest other points of $S$ to $\\tfrac13$ are $\\tfrac14$ (distance $\\tfrac1{12}$) and $\\tfrac12$ (distance $\\tfrac16$); the nearer one is $\\tfrac14$. So the largest usable $\\delta$ is $\\dfrac1{12} \\approx 0.0833$, since for any $\\delta>\\tfrac1{12}$ the point $x=\\tfrac14$ would be included, but $|f(1/4)-f(1/3)| = |4-3| = 1$, which is not $<1$.</p>\n<p>Rounded to two decimal places: $\\delta = 0.08$.</p>",
  "tested": "Directly computing the largest δ for a fixed ε in the ε-δ definition, on a domain of isolated points where only the nearest neighbouring point matters.",
  "trap": "Treating S as if it were a full interval near 1/3 and solving 1/4<x<1/2 as the answer's width, instead of realising δ is capped by the distance to the *nearest other point of S* (here 1/4, not 1/2)."
},

{
  "id": "p.jam.2020.51",
  "course": "ra1",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 51,
  "marks": 2,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "Telescoping sum of 1/(n(n²−1))",
  "type": "NAT",
  "prompt": "<p>The sum of the series $\\dfrac{1}{2(2^2-1)} + \\dfrac{1}{3(3^2-1)} + \\dfrac{1}{4(4^2-1)} + \\cdots$ is ____.</p>",
  "answer": {
    "value": 0.25,
    "tol": 0.01
  },
  "solution": "<p>The general term is $\\dfrac{1}{n(n^2-1)} = \\dfrac{1}{(n-1)n(n+1)}$ for $n\\ge2$. Using the identity $\\dfrac{1}{(n-1)n(n+1)} = \\dfrac12\\left[\\dfrac{1}{(n-1)n} - \\dfrac{1}{n(n+1)}\\right]$, the sum telescopes:</p>\n<p>$$\\sum_{n=2}^{N} \\frac{1}{(n-1)n(n+1)} = \\frac12\\left[\\frac{1}{1\\cdot2} - \\frac{1}{N(N+1)}\\right] \\to \\frac12\\cdot\\frac12 = \\frac14 \\text{ as } N\\to\\infty.$$</p>\n<p>So the sum is $\\dfrac14 = 0.25$.</p>",
  "tested": "Recognising a series term as a telescoping difference via partial fractions, then evaluating the limit of the telescoped partial sum.",
  "trap": "Using the wrong partial-fraction split (e.g. splitting into three separate fractions 1/(n-1), 1/n, 1/(n+1) without the correct coefficients) and losing the telescoping cancellation."
},

{
  "id": "p.jam.2019.05",
  "course": "ra1",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 5,
  "marks": 2,
  "neg": -0.66,
  "sec": "4.1",
  "tests": [
    "c.4.1.1",
    "c.3.4.8"
  ],
  "title": "Limit points of a strictly increasing divergent set",
  "type": "MCQ",
  "prompt": "<p>Let $S$ be the set of all limit points of the set $\\left\\{\\dfrac{n}{\\sqrt2}+\\dfrac{\\sqrt2}{n}: n\\in\\mathbb{N}\\right\\}$. Let $\\mathbb{Q}_+$ be the set of all positive rational numbers. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\mathbb{Q}_+\\subseteq S$"
    },
    {
      "k": "B",
      "t": "$S\\subseteq \\mathbb{Q}_+$"
    },
    {
      "k": "C",
      "t": "$S\\cap(\\mathbb{R}\\setminus\\mathbb{Q}_+)\\ne\\emptyset$"
    },
    {
      "k": "D",
      "t": "$S\\cap\\mathbb{Q}_+\\ne\\emptyset$"
    }
  ],
  "answer": "B",
  "solution": "<p>Let $x_n=\\dfrac{n}{\\sqrt2}+\\dfrac{\\sqrt2}{n}$. Consecutive differences: $x_{n+1}-x_n=\\dfrac{1}{\\sqrt2}-\\sqrt2\\left(\\dfrac1n-\\dfrac1{n+1}\\right)=\\dfrac{1}{\\sqrt2}-\\dfrac{\\sqrt2}{n(n+1)}\\to \\dfrac{1}{\\sqrt2}>0$.</p>\n<p>Checking small $n$: $x_1=x_2=\\dfrac{3}{\\sqrt2}$, and for $n\\ge2$ the sequence is strictly increasing (since $x_{n+1}-x_n>0$ once $\\sqrt2/(n(n+1))<1/\\sqrt2$, true for $n\\ge2$), diverging to $+\\infty$, with gaps bounded below eventually by a positive number. So no real number is a limit point of this set &mdash; every term is isolated. Hence $S=\\emptyset$.</p>\n<p>The empty set is (vacuously) a subset of every set, so $S\\subseteq\\mathbb{Q}_+$ is TRUE (option B). Options (A), (C), (D) all assert $S$ is nonempty or intersects some set nontrivially, which is false since $S=\\emptyset$.</p>",
  "tested": "Recognising a cluster point of a set requires the set to actually accumulate somewhere; a strictly increasing sequence diverging to infinity with gaps bounded away from $0$ has no cluster points at all.",
  "trap": "Assuming a set built from a convergent-looking expression must have limit points; here the $n/\\sqrt2$ term dominates and pushes everything to infinity, leaving $S$ empty, and forgetting the empty set is a subset of everything."
},

{
  "id": "p.jam.2019.28",
  "course": "ra1",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 28,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.3",
    "c.3.7.5"
  ],
  "title": "A ratio condition that forces convergence of a positive series",
  "type": "MCQ",
  "prompt": "<p>Let $\\{a_n\\}$ be a sequence of positive real numbers. The series $\\sum_{n=1}^{\\infty}a_n$ converges if the series</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}a_n^2$ converges"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{a_n}{2^n}$ converges"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{a_{n+1}}{a_n}$ converges"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{a_n}{a_{n+1}}$ converges"
    }
  ],
  "answer": "C",
  "solution": "<p>(A) is false: $a_n=1/n$ gives $\\sum a_n^2=\\sum 1/n^2$ convergent, but $\\sum a_n$ (harmonic) diverges.</p>\n<p>(B) is false: $a_n=n$ gives $\\sum a_n/2^n=\\sum n/2^n$ convergent, but $\\sum a_n=\\sum n$ diverges.</p>\n<p>(C) is TRUE: if $\\sum a_{n+1}/a_n$ converges, its general term must tend to $0$ (nth-Term Test), so $a_{n+1}/a_n<\\tfrac12$ for all $n\\ge N$ for some $N$. Then for $n>N$, $a_n<a_N\\left(\\tfrac12\\right)^{n-N}$, so $\\{a_n\\}$ is eventually dominated by a convergent geometric series, and $\\sum a_n$ converges by comparison.</p>\n<p>(D) is false: $a_n=(n!)^2$ gives $\\dfrac{a_n}{a_{n+1}}=\\dfrac{1}{(n+1)^2}$, so $\\sum a_n/a_{n+1}=\\sum 1/(n+1)^2$ converges, yet $\\sum a_n=\\sum (n!)^2$ diverges (terms $\\to\\infty$).</p>",
  "tested": "Combining the nth-Term Test (general term of a convergent series must vanish) with comparison to a geometric series to certify convergence of the original series.",
  "trap": "Confusing the direction of the ratio: $a_{n+1}/a_n\\to0$ forces $a_n$ to decay geometrically (guaranteeing convergence), while $a_n/a_{n+1}\\to0$ forces $a_n$ to grow, which is consistent with divergence, not convergence."
},

{
  "id": "p.jam.2019.30",
  "course": "ra1",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 30,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.5",
    "c.3.3.1"
  ],
  "title": "Estimating the sum of a series built from a nonlinear recursive sequence",
  "type": "MCQ",
  "prompt": "<p>Let $\\{a_n\\}$ be a sequence of positive real numbers such that</p>\n$$a_1=1,\\quad a_{n+1}^2-2a_na_{n+1}-a_n=0 \\text{ for all } n\\ge1.$$\n<p>Then the sum of the series $\\displaystyle\\sum_{n=1}^{\\infty}\\frac{a_n}{3^n}$ lies in the interval</p>",
  "options": [
    {
      "k": "A",
      "t": "$(1,2]$"
    },
    {
      "k": "B",
      "t": "$(2,3]$"
    },
    {
      "k": "C",
      "t": "$(3,4]$"
    },
    {
      "k": "D",
      "t": "$(4,5]$"
    }
  ],
  "answer": "A",
  "solution": "<p>Completing the square in the recursion: $a_{n+1}^2-2a_na_{n+1}+a_n^2=a_n^2+a_n$, i.e. $(a_{n+1}-a_n)^2=a_n(a_n+1)$. Since $a_n>0$ and the sequence is increasing, take the positive root: $a_{n+1}=a_n+\\sqrt{a_n(a_n+1)}$.</p>\n<p>Starting from $a_1=1$: $a_2=1+\\sqrt2\\approx2.414$, $a_3\\approx5.285$, $a_4\\approx11.049$, $a_5\\approx22.587$, $a_6\\approx45.668$, and so on, with the ratio $a_{n+1}/a_n$ decreasing towards $2$ (for large $a_n$, $\\sqrt{a_n(a_n+1)}\\approx a_n$, so $a_{n+1}\\approx 2a_n$).</p>\n<p>Computing $a_n/3^n$ for $n=1,\\dots,10$ and summing gives approximately $1.19$, and the remaining tail (where the term ratio approaches $2/3$) contributes roughly another $0.025$, for a total of about $1.22$. This lies in $(1,2]$, option (A).</p>",
  "tested": "Estimating the sum of a series with no closed form by pinning down the asymptotic growth rate of the underlying sequence ($a_n\\sim C\\cdot2^n$) and bounding the resulting geometric-like tail.",
  "trap": "Taking the negative root when solving the quadratic for $a_{n+1}$ (which would give a non-positive or decreasing sequence, contradicting positivity), or assuming a closed form must exist instead of estimating growth."
},

{
  "id": "p.jam.2019.36",
  "course": "ra1",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 36,
  "marks": 2,
  "neg": 0,
  "sec": "3.4",
  "tests": [
    "c.3.4.1"
  ],
  "title": "Two constant subsequences of a period-6 max(sin,cos) sequence",
  "type": "MSQ",
  "prompt": "<p>Let $\\{a_n\\}$ be the sequence given by</p>\n$$a_n=\\max\\left\\{\\sin\\left(\\frac{n\\pi}{3}\\right),\\cos\\left(\\frac{n\\pi}{3}\\right)\\right\\},\\quad n\\ge1.$$\n<p>Then which of the following statements is/are TRUE about the subsequences $\\{a_{6n-1}\\}$ and $\\{a_{6n+4}\\}$?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both the subsequences are convergent"
    },
    {
      "k": "B",
      "t": "Only one of the subsequences is convergent"
    },
    {
      "k": "C",
      "t": "$\\{a_{6n-1}\\}$ converges to $-\\dfrac12$"
    },
    {
      "k": "D",
      "t": "$\\{a_{6n+4}\\}$ converges to $\\dfrac12$"
    }
  ],
  "answer": [
    "A"
  ],
  "solution": "<p>$n\\pi/3$ has period $6$ in $n$, so $\\{a_n\\}$ is periodic with period $6$. Computing one period:</p>\n<p>$a_1=\\sin60^\\circ=\\tfrac{\\sqrt3}2$, $a_2=\\sin120^\\circ=\\tfrac{\\sqrt3}2$, $a_3=\\max(0,-1)=0$, $a_4=\\max(-\\tfrac{\\sqrt3}2,-\\tfrac12)=-\\tfrac12$, $a_5=\\max(-\\tfrac{\\sqrt3}2,\\tfrac12)=\\tfrac12$, $a_6=\\max(0,1)=1$.</p>\n<p>The index $6n-1\\equiv5\\pmod6$ for every $n\\ge1$, so $a_{6n-1}=a_5=\\tfrac12$ for all $n$: a constant sequence, trivially convergent to $\\tfrac12$.</p>\n<p>The index $6n+4\\equiv4\\pmod6$ for every $n\\ge1$, so $a_{6n+4}=a_4=-\\tfrac12$ for all $n$: constant, convergent to $-\\tfrac12$.</p>\n<p>Both subsequences are (trivially) convergent, so (A) is TRUE. (B) is false. (C) claims $\\{a_{6n-1}\\}\\to-\\tfrac12$, but it actually converges to $+\\tfrac12$: false. (D) claims $\\{a_{6n+4}\\}\\to\\tfrac12$, but it actually converges to $-\\tfrac12$: false.</p>",
  "tested": "Recognising that a periodic sequence evaluated along an arithmetic-progression index that hits a fixed residue class becomes eventually constant, hence trivially convergent.",
  "trap": "Options (C) and (D) swap the correct limiting values &mdash; a deliberate sign trap once you have correctly identified $a_4=-1/2$ and $a_5=1/2$."
},

{
  "id": "p.jam.2019.40",
  "course": "ra1",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 40,
  "marks": 2,
  "neg": 0,
  "sec": "3.6",
  "tests": [
    "c.3.6.3",
    "c.3.2.3"
  ],
  "title": "A telescoping product and proper divergence of a_(n+1) = a_n + a_n^2",
  "type": "MSQ",
  "prompt": "<p>Let $\\{a_n\\}$ be the sequence of real numbers such that</p>\n$$a_1=1 \\text{ and } a_{n+1}=a_n+a_n^2 \\text{ for all } n\\ge1.$$\n<p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$a_4=a_1(1+a_1)(1+a_2)(1+a_3)$"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\lim_{n\\to\\infty}\\frac1{a_n}=0$"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\lim_{n\\to\\infty}\\frac1{a_n}=1$"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\lim_{n\\to\\infty}a_n=0$"
    }
  ],
  "answer": [
    "A",
    "B"
  ],
  "solution": "<p>The recursion factors as $a_{n+1}=a_n(1+a_n)$. Unrolling: $a_2=a_1(1+a_1)$, $a_3=a_2(1+a_2)=a_1(1+a_1)(1+a_2)$, and $a_4=a_3(1+a_3)=a_1(1+a_1)(1+a_2)(1+a_3)$. So (A) is TRUE (a telescoping product identity, provable by induction).</p>\n<p>Since $a_n>0$ for all $n$ (starting positive and the recursion preserves positivity), $a_{n+1}-a_n=a_n^2>0$, so $\\{a_n\\}$ is strictly increasing. If it converged to a finite limit $L$, then $L=L+L^2$ forces $L=0$ &mdash; impossible since the sequence is increasing from $a_1=1$. So $\\{a_n\\}$ is properly divergent to $+\\infty$.</p>\n<p>Hence $\\lim 1/a_n=0$: (B) TRUE, (C) FALSE. And $\\lim a_n=+\\infty\\ne0$: (D) FALSE.</p>",
  "tested": "Recognising a telescoping product from a factored recursion, and using the Monotone/Proper Divergence criterion (an increasing sequence with no valid finite fixed point diverges to infinity) to evaluate the limits.",
  "trap": "Assuming an increasing sequence bounded below by $1$ could still converge to some positive limit; solving the fixed-point equation $L=L+L^2$ forces $L=0$, which is inconsistent with an increasing sequence starting above $0$, so it must escape to infinity instead."
},

{
  "id": "p.jam.2019.52",
  "course": "ra1",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 52,
  "marks": 2,
  "neg": 0,
  "sec": "2.3",
  "tests": [
    "c.2.3.2",
    "c.3.1.10"
  ],
  "title": "Greatest lower bound of (e^n + 2^n)^(1/n)",
  "type": "NAT",
  "prompt": "<p>The greatest lower bound of the set</p>\n$$\\left\\{(e^n+2^n)^{1/n}: n\\in\\mathbb{N}\\right\\},$$\n<p>(round off to 2 decimal places) is ______________</p>",
  "answer": {
    "value": 2.72,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>Write $a_n=(e^n+2^n)^{1/n}=e\\left(1+\\left(\\dfrac2e\\right)^n\\right)^{1/n}$. Since $2/e<1$, $(2/e)^n\\to0$, so $a_n\\to e\\cdot1=e$ as $n\\to\\infty$.</p>\n<p>Also, since $2^n>0$, $a_n=(e^n+2^n)^{1/n}>(e^n)^{1/n}=e$ for every $n$, so $e$ is a lower bound for the set.</p>\n<p>Since $a_n\\to e$, for any $\\varepsilon>0$ some $a_n<e+\\varepsilon$, so no number larger than $e$ can be a lower bound. Hence the greatest lower bound is exactly $e\\approx2.71828$, which rounds to $2.72$.</p>",
  "tested": "The $\\varepsilon$-characterisation of the infimum: $e$ is a lower bound because every term strictly exceeds it, and it is the greatest such bound because the sequence approaches $e$ arbitrarily closely.",
  "trap": "Assuming the infimum must be attained at some finite $n$ (a minimum); here the infimum $e$ is only a limit, never actually reached by any term of the sequence."
},

{
  "id": "p.jam.2018.02",
  "course": "ra1",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 2,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.5",
  "tests": [
    "c.3.5.8"
  ],
  "title": "Limit of the ratio of consecutive Fibonacci-type terms",
  "type": "MCQ",
  "prompt": "<p>Let $a_n = \\dfrac{b_{n+1}}{b_n}$, where $b_1=1$, $b_2=1$ and $b_{n+2}=b_{n+1}+b_n$, $n\\in\\mathbb{N}$. Then $\\lim\\limits_{n\\to\\infty} a_n$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{1-\\sqrt5}{2}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{1-\\sqrt3}{2}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{1+\\sqrt3}{2}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{1+\\sqrt5}{2}$"
    }
  ],
  "answer": "D",
  "approach": "<p>Divide the recursion $b_{n+2}=b_{n+1}+b_n$ by $b_{n+1}$ to get a relation between $a_{n+1}$ and $a_n$, then assume the limit exists and solve the resulting fixed-point equation.</p>",
  "solution": "<p>Dividing $b_{n+2}=b_{n+1}+b_n$ by $b_{n+1}$ gives</p><p>$$a_{n+1} = \\frac{b_{n+2}}{b_{n+1}} = 1 + \\frac{b_n}{b_{n+1}} = 1 + \\frac{1}{a_n}.$$</p><p>Since $b_1=b_2=1$, the $b_n$ are the Fibonacci numbers, all positive, so $a_n>0$ for every $n$. One can check that consecutive pairs $(a_n,a_{n+2})$ get closer together geometrically (the map $x\\mapsto 1+1/x$ is a contraction on $[1,2]$, since $|f'(x)|=1/x^2\\le 1$ there with strict inequality once $x>1$), so $\\{a_n\\}$ is a contractive sequence and hence converges to some $L>0$.</p><p>Taking the limit of $a_{n+1}=1+\\dfrac{1}{a_n}$ gives $L = 1+\\dfrac{1}{L}$, i.e. $L^2-L-1=0$, so $L=\\dfrac{1\\pm\\sqrt5}{2}$. Since every $a_n>0$, we must have $L>0$, which forces $L=\\dfrac{1+\\sqrt5}{2}$ (the golden ratio). Answer: (D).</p>",
  "tested": "Convergence of a recursively defined sequence via the contractive-sequence idea, followed by solving the fixed-point equation for the limit.",
  "trap": "Solving L^2-L-1=0 and forgetting to discard the negative root (1-sqrt5)/2, which cannot be the limit of a sequence of positive terms."
},

{
  "id": "p.jam.2018.10",
  "course": "ra1",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 10,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.5",
  "tests": [
    "c.3.5.5",
    "c.3.3.6"
  ],
  "title": "A Cauchy sequence of rationals with no rational limit",
  "type": "MCQ",
  "prompt": "<p>Let $s_n = 1+\\dfrac{1}{1!}+\\dfrac{1}{2!}+\\cdots+\\dfrac{1}{n!}$ for $n\\in\\mathbb{N}$. Then which one of the following is TRUE for the sequence $\\{s_n\\}_{n=1}^{\\infty}$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\{s_n\\}_{n=1}^{\\infty}$ converges in $\\mathbb{Q}$"
    },
    {
      "k": "B",
      "t": "$\\{s_n\\}_{n=1}^{\\infty}$ is a Cauchy sequence but does not converge in $\\mathbb{Q}$"
    },
    {
      "k": "C",
      "t": "the subsequence $\\{s_{k^n}\\}_{n=1}^{\\infty}$ is convergent in $\\mathbb{R}$ only when $k$ is an even natural number"
    },
    {
      "k": "D",
      "t": "$\\{s_n\\}_{n=1}^{\\infty}$ is not a Cauchy sequence"
    }
  ],
  "answer": "B",
  "solution": "<p>The sequence $s_n$ is increasing and bounded above (by comparison with a geometric series, $s_n < 1+\\sum_{k=1}^\\infty 1/2^{k-1}=3$), so by the Monotone Convergence Theorem it converges in $\\mathbb{R}$; its limit is, by definition, $e$. A sequence that converges in $\\mathbb{R}$ is automatically a Cauchy sequence (Cauchy Convergence Criterion), so $\\{s_n\\}$ is Cauchy.</p><p>But $e$ is irrational, so the limit does not belong to $\\mathbb{Q}$: even though every $s_n\\in\\mathbb{Q}$ and the sequence is Cauchy, it has no limit inside $\\mathbb{Q}$ (this is exactly the sense in which $\\mathbb{Q}$ is not complete). So (B) is TRUE, and (A) is false. Since $\\{s_n\\}$ converges in $\\mathbb{R}$ it is certainly Cauchy, so (D) is false. Also (C) is nonsense here since $\\{s_n\\}$ converges (in $\\mathbb{R}$) regardless of any subsequence choice, so every subsequence including $s_{k^n}$ converges to $e$ for any fixed $k$, not \"only for even $k$\".</p>",
  "tested": "The Cauchy Convergence Criterion and the fact that being Cauchy is a property of the sequence in a metric space, while having a limit *inside* that space depends on completeness — here it illustrates that $\\mathbb{Q}$ is not complete.",
  "trap": "Assuming \"Cauchy\" and \"convergent\" are interchangeable — they coincide only in a complete space such as $\\mathbb{R}$, not in $\\mathbb{Q}$."
},

{
  "id": "p.jam.2018.11",
  "course": "ra1",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 11,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.4",
  "tests": [
    "c.3.4.10",
    "c.3.4.11"
  ],
  "title": "Sup/inf versus liminf/limsup of a two-case sequence",
  "type": "MCQ",
  "prompt": "<p>Let</p><p>$$a_n = \\begin{cases} 2 + \\dfrac{(-1)^{\\frac{n-1}{2}}}{n}, & n \\text{ is odd} \\\\ 1+\\dfrac{1}{2^n}, & n \\text{ is even}\\end{cases}, \\qquad n\\in\\mathbb{N}.$$</p><p>Then which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\sup\\{a_n \\mid n\\in\\mathbb{N}\\}=3$ and $\\inf\\{a_n \\mid n\\in\\mathbb{N}\\}=1$"
    },
    {
      "k": "B",
      "t": "$\\liminf(a_n) = \\limsup(a_n) = \\dfrac32$"
    },
    {
      "k": "C",
      "t": "$\\sup\\{a_n \\mid n\\in\\mathbb{N}\\}=2$ and $\\inf\\{a_n \\mid n\\in\\mathbb{N}\\}=1$"
    },
    {
      "k": "D",
      "t": "$\\liminf(a_n) = 1$ and $\\limsup(a_n) = 3$"
    }
  ],
  "answer": "A",
  "approach": "<p>Split the sequence into three pieces you can track separately: the single term $n=1$, the rest of the odd terms, and the even terms; find where each piece accumulates.</p>",
  "solution": "<p><b>Odd terms:</b> $a_1 = 2+1=3$ (since $(1-1)/2=0$, $(-1)^0=1$). For odd $n\\ge3$, $(n-1)/2$ alternates parity, so $a_3=2-\\tfrac13=\\tfrac53$, $a_5=2+\\tfrac15$, $a_7=2-\\tfrac17$, $a_9=2+\\tfrac19,\\dots$: two interleaved subsequences, one decreasing to $2$ from above ($2+\\tfrac1n$) and one increasing to $2$ from below ($2-\\tfrac1n$, starting at $\\tfrac53$ when $n=3$). So apart from the single outlier $a_1=3$, all other odd terms lie in $[\\tfrac53,2+\\tfrac15]$ and the odd terms accumulate only at $2$.</p><p><b>Even terms:</b> $a_2=1.25, a_4=1.0625,\\dots \\to 1$, always strictly greater than $1$, decreasing.</p><p><b>Sup/inf:</b> The largest value ever attained is $a_1=3$ (every other term is at most $2.2$), so $\\sup\\{a_n\\}=3$. The values get arbitrarily close to $1$ (even terms) but never below it, and no term is $<1$, so $\\inf\\{a_n\\}=1$. This proves (A) and rules out (C).</p><p><b>Liminf/limsup:</b> these ignore the single non-recurring term $a_1$ and describe the tail behaviour: the even subsequence accumulates at $1$ and the odd subsequence (for $n\\ge3$) accumulates only at $2$; these are the only two subsequential limits. So $\\liminf a_n = 1$ and $\\limsup a_n = 2$ — NOT $3$ or $3/2$. This rules out (B) and (D). Answer: (A).</p>",
  "tested": "The difference between $\\sup/\\inf$ of the set of values of a sequence (which can be dictated by a single \"outlier\" term) and $\\limsup/\\liminf$ (which only reflect the eventual, tail behaviour of the sequence).",
  "trap": "Treating $a_1=3$ as if it also determined the limsup — a single early term never affects $\\liminf$/$\\limsup$, only $\\sup$/$\\inf$."
},

{
  "id": "p.jam.2018.51",
  "course": "ra1",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 51,
  "marks": 2,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.1"
  ],
  "title": "Cesàro mean of the partial sums of sum (-1)^(k-1)",
  "type": "NAT",
  "prompt": "<p>Let $a_k=(-1)^{k-1}$, $s_n=a_1+a_2+\\cdots+a_n$ and $\\sigma_n=(s_1+s_2+\\cdots+s_n)/n$, where $k,n\\in\\mathbb{N}$. Then $\\lim\\limits_{n\\to\\infty}\\sigma_n$ is _____ (correct up to one decimal place).</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.05,
    "dp": 1
  },
  "solution": "<p>Since $a_k=(-1)^{k-1}$ is $1,-1,1,-1,\\dots$, the partial sums are $s_1=1,s_2=0,s_3=1,s_4=0,\\dots$: $s_n=1$ if $n$ is odd and $s_n=0$ if $n$ is even. So $s_1+s_2+\\cdots+s_n$ equals the number of odd indices up to $n$, i.e. $\\lceil n/2\\rceil$.</p><p>Hence $\\sigma_n = \\dfrac{\\lceil n/2\\rceil}{n}$, and as $n\\to\\infty$, $\\dfrac{\\lceil n/2\\rceil}{n}\\to\\dfrac12$. So $\\lim_{n\\to\\infty}\\sigma_n = 0.5$.</p>",
  "tested": "Cesàro summation: even though $s_n$ itself oscillates between $0$ and $1$ and has no limit, the sequence of running averages $\\sigma_n$ of $s_n$ does converge.",
  "trap": "Confusing this with $\\lim s_n$ (which does not exist, since $s_n$ oscillates) — the question asks for the limit of the running average of the $s_n$, a genuinely different and convergent sequence."
},

{
  "id": "p.jam.2017.08",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 8,
  "marks": 1,
  "neg": -0.33,
  "sec": "4.3",
  "tests": [
    "c.4.3.1"
  ],
  "title": "One-sided limits of a piecewise oscillating function",
  "type": "MCQ",
  "prompt": "<p>Let $$f(x)=\\frac{x+|x|(1+x)}{x}\\sin\\left(\\frac1x\\right), \\qquad x\\ne0.$$ Write $L=\\lim_{x\\to0^-}f(x)$ and $R=\\lim_{x\\to0^+}f(x)$. Then which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$L$ exists but $R$ does not exist"
    },
    {
      "k": "B",
      "t": "$L$ does not exist but $R$ exists"
    },
    {
      "k": "C",
      "t": "Both $L$ and $R$ exist"
    },
    {
      "k": "D",
      "t": "Neither $L$ nor $R$ exists"
    }
  ],
  "answer": "A",
  "solution": "<p>For $x<0$, $|x|=-x$, so the numerator is $x-x(1+x)=-x^2$, giving $$f(x)=\\frac{-x^2}{x}\\sin\\left(\\frac1x\\right)=-x\\sin\\left(\\frac1x\\right).$$ Since $-x\\to0$ and $\\left|\\sin(1/x)\\right|\\le1$, the Squeeze Theorem gives $L=\\lim_{x\\to0^-}f(x)=0$, so $L$ exists.</p><p>For $x>0$, $|x|=x$, so the numerator is $x+x(1+x)=2x+x^2$, giving $$f(x)=\\frac{2x+x^2}{x}\\sin\\left(\\frac1x\\right)=(2+x)\\sin\\left(\\frac1x\\right).$$ As $x\\to0^+$, $(2+x)\\to2\\ne0$ while $\\sin(1/x)$ oscillates between $-1$ and $1$ without settling, so $R$ does not exist (Divergence Criterion). Hence (A).</p>",
  "tested": "<p>Using the Squeeze Theorem when the oscillating factor is damped by a vanishing prefactor, versus the Divergence Criterion when the prefactor tends to a nonzero constant.</p>",
  "trap": "Treating both one-sided pieces the same way instead of noticing the coefficient of $\\sin(1/x)$ vanishes on one side (−x) but not the other (2+x)."
},

{
  "id": "p.jam.2017.25",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 25,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "Telescoping arctangent series",
  "type": "MCQ",
  "prompt": "<p>$$\\sum_{n=1}^\\infty \\tan^{-1}\\frac{2}{n^2} = $$</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{\\pi}{4}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{\\pi}{2}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{3\\pi}{4}$"
    },
    {
      "k": "D",
      "t": "$\\pi$"
    }
  ],
  "answer": "C",
  "solution": "<p>Using $\\dfrac{2}{n^2}=\\dfrac{(n+1)-(n-1)}{1+(n+1)(n-1)}$ and the subtraction formula for $\\tan^{-1}$, $$\\tan^{-1}\\frac2{n^2}=\\tan^{-1}(n+1)-\\tan^{-1}(n-1).$$</p><p>So the $N$-th partial sum telescopes: $$S_N=\\sum_{n=1}^N\\left[\\tan^{-1}(n+1)-\\tan^{-1}(n-1)\\right]=\\tan^{-1}(N+1)+\\tan^{-1}(N)-\\tan^{-1}(1)-\\tan^{-1}(0).$$</p><p>Letting $N\\to\\infty$: $\\tan^{-1}(N+1),\\tan^{-1}(N)\\to\\frac\\pi2$, and $\\tan^{-1}(1)=\\frac\\pi4$, $\\tan^{-1}(0)=0$. So the sum is $\\frac\\pi2+\\frac\\pi2-\\frac\\pi4-0=\\frac{3\\pi}{4}$.</p>",
  "tested": "<p>Recognising a series as telescoping once the general term is rewritten as a difference of consecutive terms of a known sequence.</p>"
},

{
  "id": "p.jam.2017.26",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 26,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.3",
  "tests": [
    "c.3.3.2"
  ],
  "title": "The arithmetic-geometric mean sequences",
  "type": "MCQ",
  "prompt": "<p>Let $0<a_1<b_1$. For $n\\ge1$, define $$a_{n+1}=\\sqrt{a_nb_n} \\quad\\text{and}\\quad b_{n+1}=\\frac{a_n+b_n}{2}.$$ Then which one of the following is NOT TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both $\\{a_n\\}$ and $\\{b_n\\}$ converge, but the limits are not equal"
    },
    {
      "k": "B",
      "t": "Both $\\{a_n\\}$ and $\\{b_n\\}$ converge and the limits are equal"
    },
    {
      "k": "C",
      "t": "$\\{b_n\\}$ is a decreasing sequence"
    },
    {
      "k": "D",
      "t": "$\\{a_n\\}$ is an increasing sequence"
    }
  ],
  "answer": "A",
  "solution": "<p>By AM–GM, $a_n\\le b_n$ for all $n$, hence $a_{n+1}=\\sqrt{a_nb_n}\\ge a_n$ (so $\\{a_n\\}$ is increasing, confirming D) and $b_{n+1}=\\frac{a_n+b_n}{2}\\le b_n$ (so $\\{b_n\\}$ is decreasing, confirming C).</p><p>Since $a_1\\le a_n\\le b_n\\le b_1$ for all $n$, both sequences are monotone and bounded, so by the Monotone Convergence Theorem both converge, say to $L_a$ and $L_b$. Taking $n\\to\\infty$ in $b_{n+1}=\\frac{a_n+b_n}2$ gives $L_b=\\frac{L_a+L_b}2$, so $L_a=L_b$ — the two limits are always equal (this is the arithmetic-geometric mean of $a_1,b_1$). So (B) is TRUE and (A) is NOT true — (A) is the answer.</p>",
  "tested": "<p>The Monotone Convergence Theorem applied to a pair of interlocking monotone, bounded sequences (the classical AGM construction).</p>",
  "trap": "Assuming that because a_n and b_n start unequal and are defined by different formulas, their limits must stay unequal — the algebraic relation forces them together."
},

{
  "id": "p.jam.2017.27",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 27,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.2",
  "tests": [
    "c.3.2.3"
  ],
  "title": "Limit of a telescoping radical sum",
  "type": "MCQ",
  "prompt": "<p>$$\\lim_{n\\to\\infty} \\frac{1}{\\sqrt n}\\left(\\frac{1}{\\sqrt3+\\sqrt6}+\\frac{1}{\\sqrt6+\\sqrt9}+\\cdots+\\frac{1}{\\sqrt{3n}+\\sqrt{3n+3}}\\right) = $$</p>",
  "options": [
    {
      "k": "A",
      "t": "$1+\\sqrt3$"
    },
    {
      "k": "B",
      "t": "$\\sqrt3$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{1}{\\sqrt3}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{1}{1+\\sqrt3}$"
    }
  ],
  "answer": "C",
  "solution": "<p>Rationalise each term: $$\\frac{1}{\\sqrt{3k}+\\sqrt{3k+3}}=\\frac{\\sqrt{3k+3}-\\sqrt{3k}}{(3k+3)-3k}=\\frac{\\sqrt{3k+3}-\\sqrt{3k}}{3}.$$</p><p>Summing $k=1$ to $n$ telescopes: $$\\sum_{k=1}^n \\frac{1}{\\sqrt{3k}+\\sqrt{3k+3}}=\\frac{\\sqrt{3n+3}-\\sqrt3}{3}.$$</p><p>So the whole expression is $$\\frac{1}{\\sqrt n}\\cdot\\frac{\\sqrt{3n+3}-\\sqrt3}{3}=\\frac{1}{3}\\left(\\sqrt{3+\\tfrac3n}-\\frac{\\sqrt3}{\\sqrt n}\\right)\\longrightarrow \\frac{\\sqrt3}{3}=\\frac{1}{\\sqrt3}.$$</p>",
  "tested": "<p>Rationalising a sum of radical reciprocals to expose a telescoping pattern, then using the algebra of limits for sequences.</p>"
},

{
  "id": "p.jam.2017.28",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 28,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.4",
  "tests": [
    "c.3.4.8"
  ],
  "title": "Convergent subsequences: true and false claims",
  "type": "MCQ",
  "prompt": "<p>Which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "Every sequence that has a convergent subsequence is a Cauchy sequence"
    },
    {
      "k": "B",
      "t": "Every sequence that has a convergent subsequence is a bounded sequence"
    },
    {
      "k": "C",
      "t": "The sequence $\\{\\sin n\\}$ has a convergent subsequence"
    },
    {
      "k": "D",
      "t": "The sequence $\\{n\\cos(1/n)\\}$ has a convergent subsequence"
    }
  ],
  "answer": "C",
  "solution": "<p>(A) is false: e.g. $x_n=1,2,1,3,1,4,\\ldots$ (alternating $1$ with $n$) has the constant subsequence $1,1,1,\\ldots$ converging to $1$, but $\\{x_n\\}$ is not Cauchy (it is not even bounded).</p><p>(B) is false by the same example: a convergent subsequence exists, but the full sequence is unbounded.</p><p>(D) is false: $n\\cos(1/n)\\to\\infty$ as $n\\to\\infty$ (since $\\cos(1/n)\\to1$), so the sequence is properly divergent and every subsequence also diverges to $\\infty$ — none can converge.</p><p>(C) is TRUE: $\\{\\sin n\\}$ is bounded (all terms lie in $[-1,1]$), so by the Bolzano–Weierstrass Theorem it has a convergent subsequence.</p>",
  "tested": "<p>The Bolzano–Weierstrass Theorem (bounded $\\Rightarrow$ has a convergent subsequence) versus the false converse-type claims about Cauchy and boundedness.</p>",
  "trap": "Confusing \"has a convergent subsequence\" with \"is Cauchy\" or \"is bounded\" — boundedness is what GIVES a convergent subsequence, not what a convergent subsequence guarantees about the whole sequence."
},

{
  "id": "p.jam.2017.36",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 36,
  "marks": 2,
  "neg": 0,
  "sec": "3.3",
  "tests": [
    "c.3.3.2",
    "c.3.1.3"
  ],
  "title": "Monotone convergence for a cubic recursion",
  "type": "MSQ",
  "prompt": "<p>Let $\\{x_n\\}$ be a real sequence such that $7x_{n+1}=x_n^3+6$ for $n\\ge1$. Then which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $x_1=\\dfrac12$, then $\\{x_n\\}$ converges to $1$"
    },
    {
      "k": "B",
      "t": "If $x_1=\\dfrac12$, then $\\{x_n\\}$ converges to $2$"
    },
    {
      "k": "C",
      "t": "If $x_1=\\dfrac32$, then $\\{x_n\\}$ converges to $1$"
    },
    {
      "k": "D",
      "t": "If $x_1=\\dfrac32$, then $\\{x_n\\}$ converges to $-3$"
    }
  ],
  "answer": [
    "A",
    "C"
  ],
  "solution": "<p>The fixed points of $x=\\frac{x^3+6}{7}$ solve $x^3-7x+6=0$, i.e. $(x-1)(x+3)(x-2)=0$, giving fixed points $-3,1,2$.</p><p>The step size satisfies $$x_{n+1}-x_n=\\frac{x_n^3-7x_n+6}{7}=\\frac{(x_n-1)(x_n+3)(x_n-2)}{7}.$$</p><p><b>$x_1=\\tfrac12$:</b> for $x_n\\in(0,1)$ this product is $(-)(+)(-)=+$, so $\\{x_n\\}$ is increasing; and if $x_n<1$ then $x_n^3<1$ so $x_{n+1}=\\frac{x_n^3+6}7<1$, keeping it bounded above by $1$. By the Monotone Convergence Theorem it converges to a fixed point in $(0,1]$, which must be $1$. So (A) TRUE, (B) FALSE.</p><p><b>$x_1=\\tfrac32$:</b> for $x_n\\in(1,2)$ the product is $(+)(+)(-)=-$, so $\\{x_n\\}$ is decreasing; and if $x_n>1$ then $x_{n+1}-1=\\frac{x_n^3-1}7>0$, so it stays above $1$, bounded below. It converges to a fixed point in $[1,\\tfrac32)$, which must be $1$. So (C) TRUE, (D) FALSE.</p>",
  "tested": "<p>Analysing a recursively defined sequence by locating fixed points and checking monotonicity + boundedness to invoke the Monotone Convergence Theorem.</p>",
  "trap": "Assuming the sequence must converge to the nearest fixed point without actually checking the sign of x_{n+1}-x_n on the relevant range."
},

{
  "id": "p.jam.2017.37",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 37,
  "marks": 2,
  "neg": 0,
  "sec": "2.4",
  "tests": [
    "c.2.4.8",
    "c.4.1.1"
  ],
  "title": "Rationals in (0,1): closed, open, and limit points",
  "type": "MSQ",
  "prompt": "<p>Let $S$ be the set of all rational numbers in $(0,1)$. Then which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$S$ is a closed subset of $\\mathbb{R}$"
    },
    {
      "k": "B",
      "t": "$S$ is not a closed subset of $\\mathbb{R}$"
    },
    {
      "k": "C",
      "t": "$S$ is an open subset of $\\mathbb{R}$"
    },
    {
      "k": "D",
      "t": "Every $x\\in(0,1)\\setminus S$ is a limit point (cluster point) of $S$"
    }
  ],
  "answer": [
    "B",
    "D"
  ],
  "solution": "<p>By the Density Theorem, $\\mathbb{Q}$ is dense in $\\mathbb{R}$: every real number is a cluster point of $\\mathbb{Q}$, hence of $S$ for every point of $(0,1)$.</p><p><b>(D)</b>: every $x\\in(0,1)\\setminus S$ is irrational, and by density every neighbourhood of $x$ contains rationals of $(0,1)$ other than $x$ itself, so $x$ is a cluster point of $S$. TRUE.</p><p><b>(A)/(B)</b>: a closed set contains all of its cluster points. Since $S$'s cluster points include every irrational in $(0,1)$ (by (D)) and the endpoints $0,1$, none of which lie in $S$, $S$ is not closed. So (B) TRUE, (A) FALSE.</p><p><b>(C)</b>: every neighbourhood of a rational number also contains irrational numbers (density of the irrationals), so no neighbourhood of a point of $S$ lies entirely inside $S$; $S$ is not open. FALSE.</p>",
  "tested": "<p>The density of $\\mathbb{Q}$ (and of the irrationals) in $\\mathbb{R}$, applied to decide which points are cluster points of the rationals.</p>",
  "trap": "Assuming a set that \"isn't open\" must be closed — S is neither, which is exactly what makes (A) and (C) both false."
},

{
  "id": "p.jam.2017.49",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 49,
  "marks": 1,
  "neg": 0,
  "sec": "4.2",
  "tests": [
    "c.4.2.7"
  ],
  "title": "Limit of a sum of floor functions",
  "type": "NAT",
  "prompt": "<p>For $x>0$, let $\\lfloor x\\rfloor$ denote the greatest integer less than or equal to $x$. Then $$\\lim_{x\\to0^+} x\\left(\\left\\lfloor\\frac1x\\right\\rfloor+\\left\\lfloor\\frac2x\\right\\rfloor+\\cdots+\\left\\lfloor\\frac{10}x\\right\\rfloor\\right) = $$</p>",
  "answer": {
    "value": 55,
    "tol": 0.1,
    "dp": 0
  },
  "solution": "<p>For each $k=1,\\ldots,10$, $$\\frac{k}{x}-1<\\left\\lfloor\\frac kx\\right\\rfloor\\le\\frac kx.$$ Summing over $k$ and multiplying by $x>0$: $$x\\sum_{k=1}^{10}\\frac kx - 10x < x\\sum_{k=1}^{10}\\left\\lfloor\\frac kx\\right\\rfloor \\le x\\sum_{k=1}^{10}\\frac kx,$$ i.e. $$55-10x < x\\sum_{k=1}^{10}\\left\\lfloor\\frac kx\\right\\rfloor \\le 55.$$</p><p>As $x\\to0^+$, both bounds tend to $55$, so by the Squeeze Theorem the limit is $55$.</p>",
  "tested": "<p>The Squeeze Theorem for limits of functions, using the standard bound $t-1<\\lfloor t\\rfloor\\le t$.</p>"
},

{
  "id": "p.jam.2017.55",
  "course": "ra1",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 55,
  "marks": 2,
  "neg": 0,
  "sec": "3.1",
  "tests": [
    "c.3.1.10",
    "c.4.1.8"
  ],
  "title": "A sequence limit via a vanishing-argument substitution",
  "type": "NAT",
  "prompt": "<p>Let $a_n=\\sqrt n$, $n\\ge1$, and let $s_n=a_1+a_2+\\cdots+a_n$. Then $$\\lim_{n\\to\\infty}\\left(\\frac{a_n/s_n}{-\\ln(1-a_n/s_n)}\\right) = $$</p>",
  "answer": {
    "value": 1,
    "tol": 0.1,
    "dp": 0
  },
  "solution": "<p>Since $s_n=\\sum_{k=1}^n\\sqrt k \\sim \\int_0^n\\sqrt t\\,dt=\\tfrac23n^{3/2}$ for large $n$, we get $$x_n:=\\frac{a_n}{s_n}=\\frac{\\sqrt n}{s_n}\\sim\\frac{\\sqrt n}{\\tfrac23n^{3/2}}=\\frac{3}{2n}\\longrightarrow0.$$</p><p>For $y\\to0$, $-\\ln(1-y)=y+\\tfrac{y^2}2+\\cdots$, so $\\dfrac{y}{-\\ln(1-y)}\\to1$. Since $x_n\\to0$, the Sequential Criterion for limits of functions gives $$\\lim_{n\\to\\infty}\\frac{x_n}{-\\ln(1-x_n)}=\\lim_{y\\to0}\\frac{y}{-\\ln(1-y)}=1.$$</p>",
  "tested": "<p>Composing a sequence limit (x_n → 0) with a function limit (y/(−ln(1−y)) → 1 as y → 0) via the Sequential Criterion for Limits.</p>",
  "trap": "Trying to compute the ratio's limit by plugging in the asymptotic form of x_n directly into -ln(1-x_n) without first recognising the standard small-argument limit y/(-ln(1-y)) → 1."
},

{
  "id": "p.jam.2016.01",
  "course": "ra1",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 1,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.5",
  "tests": [
    "c.3.5.5",
    "c.3.7.2"
  ],
  "title": "Cauchy sequence via a telescoping bound",
  "type": "MCQ",
  "prompt": "<p>Let $\\{s_n\\}$ be the sequence of real numbers given by</p><p>$$s_n=\\dfrac{\\sin\\frac{\\pi}{2}}{1\\cdot 2}+\\dfrac{\\sin\\frac{\\pi}{2^2}}{2\\cdot 3}+\\cdots+\\dfrac{\\sin\\frac{\\pi}{2^n}}{n\\cdot(n+1)}.$$</p><p>Then $\\{s_n\\}$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "a divergent sequence"
    },
    {
      "k": "B",
      "t": "an oscillatory sequence"
    },
    {
      "k": "C",
      "t": "not a Cauchy sequence"
    },
    {
      "k": "D",
      "t": "a Cauchy sequence"
    }
  ],
  "answer": "D",
  "solution": "<p>For $n>m$,</p><p>$$|s_n-s_m|=\\left|\\sum_{k=m+1}^n \\frac{\\sin\\frac{\\pi}{2^k}}{k(k+1)}\\right|\\le \\sum_{k=m+1}^n \\frac{1}{k(k+1)}=\\sum_{k=m+1}^n\\left(\\frac{1}{k}-\\frac{1}{k+1}\\right)=\\frac{1}{m+1}-\\frac{1}{n+1}<\\frac{1}{m+1}.$$</p><p>Since $\\frac{1}{m+1}\\to0$ as $m\\to\\infty$, given any $\\varepsilon>0$ there is $K$ such that $m,n\\ge K$ forces $|s_n-s_m|<\\varepsilon$. Hence $\\{s_n\\}$ is a Cauchy sequence (and therefore convergent). The correct option is (D).</p>",
  "tested": "<p>The Cauchy Criterion for sequences, verified by dominating the tail sum with a telescoping series.</p>",
  "trap": "Assuming the oscillating sin factor makes the sequence oscillate or diverge, without noticing the terms are dominated in absolute value by the telescoping series 1/(k(k+1)), which forces the tail differences to vanish."
},

{
  "id": "p.jam.2016.12",
  "course": "ra1",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 12,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.3",
  "tests": [
    "c.3.3.1",
    "c.1.2.1"
  ],
  "title": "Bounding a recursively defined sequence",
  "type": "MCQ",
  "prompt": "<p>Let $\\{a_n\\}$ be a sequence of positive real numbers satisfying</p><p>$$\\frac{4}{a_{n+1}}=\\frac{3}{a_n}+\\frac{a_n^3}{81},\\qquad n\\ge1,\\ a_1=1.$$</p><p>Then all the terms of the sequence lie in</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\left[\\dfrac12,\\dfrac32\\right]$"
    },
    {
      "k": "B",
      "t": "$[0,\\,1]$"
    },
    {
      "k": "C",
      "t": "$[1,\\,2]$"
    },
    {
      "k": "D",
      "t": "$[1,\\,3]$"
    }
  ],
  "answer": "D",
  "approach": "<p>Solve the recurrence explicitly for $a_{n+1}$ as a function of $a_n$, then study that function's monotonicity on candidate intervals rather than working with the implicit equation directly.</p>",
  "solution": "<p>Solving for $a_{n+1}$ gives $a_{n+1}=f(a_n)$ where</p><p>$$f(x)=\\frac{4}{\\frac{3}{x}+\\frac{x^3}{81}}=\\frac{324x}{243+x^4}.$$</p><p>Since $f'(x)=\\dfrac{324(243-3x^4)}{(243+x^4)^2}$, $f$ is strictly increasing on $[0,3]$ (as $243-3x^4>0$ for $x<3$) and $f(3)=\\dfrac{324\\cdot3}{243+81}=3$, so $3$ is a fixed point. Also $f(1)=\\dfrac{324}{244}\\approx1.328\\in[1,3]$.</p><p>Because $f$ is increasing on $[1,3]$ with $f(1)\\in[1,3]$ and $f(3)=3$, $f$ maps $[1,3]$ into itself: for $x\\in[1,3]$, $f(1)\\le f(x)\\le f(3)=3$, i.e. $f(x)\\in[1.328,3]\\subset[1,3]$. Since $a_1=1\\in[1,3]$, induction gives $a_n\\in[1,3]$ for every $n$. The correct option is (D).</p>",
  "tested": "<p>Using monotonicity of the recurrence's iteration map together with induction to trap a sequence inside an invariant interval.</p>",
  "trap": "Trying to prove monotonicity or boundedness of {a_n} directly from the implicit relation, instead of solving for the explicit iteration function f(x) = 324x/(243+x^4) and checking it maps [1,3] into itself."
},

{
  "id": "p.jam.2016.31",
  "course": "ra1",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "3.3",
  "tests": [
    "c.3.3.2",
    "c.3.3.1"
  ],
  "title": "Monotone convergence of a quadratic recurrence",
  "type": "MSQ",
  "prompt": "<p>Let $\\{s_n\\}$ be a sequence of positive real numbers satisfying</p><p>$$2s_{n+1}=s_n^2+\\frac34,\\qquad n\\ge1.$$</p><p>If $\\alpha$ and $\\beta$ are the roots of the equation $x^2-2x+\\dfrac34=0$ and $\\alpha<s_1<\\beta$, then which of the following statement(s) is(are) TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\{s_n\\}$ is monotonically decreasing"
    },
    {
      "k": "B",
      "t": "$\\{s_n\\}$ is monotonically increasing"
    },
    {
      "k": "C",
      "t": "$\\lim_{n\\to\\infty}s_n=\\alpha$"
    },
    {
      "k": "D",
      "t": "$\\lim_{n\\to\\infty}s_n=\\beta$"
    }
  ],
  "answer": [
    "A",
    "C"
  ],
  "approach": "<p>Rewrite the recurrence as $s_{n+1}=g(s_n)$ and factor $g(x)-x$ using the two given roots; the sign of $g(x)-x$ on $(\\alpha,\\beta)$ tells you the direction of monotonicity immediately.</p>",
  "solution": "<p>Solving $x^2-2x+\\dfrac34=0$ gives $x=\\dfrac{2\\pm1}{2}$, so $\\alpha=\\dfrac12$, $\\beta=\\dfrac32$. Write $s_{n+1}=g(s_n)$ where $g(x)=\\dfrac{x^2+\\frac34}{2}$. Then</p><p>$$g(x)-x=\\frac{x^2-2x+\\frac34}{2}=\\frac{(x-\\alpha)(x-\\beta)}{2}.$$</p><p>For $x\\in(\\alpha,\\beta)=(\\tfrac12,\\tfrac32)$, $(x-\\alpha)>0$ and $(x-\\beta)<0$, so $g(x)-x<0$, i.e. $g(x)<x$.</p><p>Since $g$ is increasing on $(0,\\infty)$ (as $g'(x)=x>0$) with $g(\\tfrac12)=\\tfrac12$ and $g(\\tfrac32)=\\tfrac32$, $g$ maps $(\\alpha,\\beta)$ into itself. So if $s_1\\in(\\alpha,\\beta)$, every $s_n\\in(\\alpha,\\beta)$, and $s_{n+1}=g(s_n)<s_n$: the sequence is monotonically decreasing and bounded below by $\\alpha$. By the Monotone Convergence Theorem it converges to a fixed point of $g$ in $[\\alpha,\\beta]$; since it is strictly decreasing from inside $(\\alpha,\\beta)$, the limit must be the lower fixed point $\\alpha$, not $\\beta$. So (A) and (C) are TRUE.</p>",
  "tested": "<p>The Monotone Convergence Theorem, applied by factoring the recurrence map's fixed-point equation through the two given roots.</p>",
  "trap": "Assuming a bounded monotone sequence converges to the nearer or the larger root without checking the direction of monotonicity -- here the sequence decreases, so it must settle on the smaller root alpha, never beta."
},

{
  "id": "p.jam.2016.41",
  "course": "ra1",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 41,
  "marks": 1,
  "neg": 0,
  "sec": "2.3",
  "tests": [
    "c.2.3.2",
    "c.3.4.10"
  ],
  "title": "Least upper bound of an oscillating sequence",
  "type": "NAT",
  "prompt": "<p>Let $\\{s_n\\}$ be a sequence of real numbers given by</p><p>$$s_n=2^{(-1)^n}\\left(1-\\frac1n\\right)\\sin\\frac{n\\pi}{2},\\qquad n\\in\\mathbb{N}.$$</p><p>Then the least upper bound of the sequence $\\{s_n\\}$ is ____________</p>",
  "answer": {
    "value": 0.5,
    "tol": 0,
    "dp": 1
  },
  "solution": "<p>$\\sin(n\\pi/2)$ is $0$ for every even $n$, and alternates $+1,-1,+1,-1,\\dots$ for $n=1,3,5,7,\\dots$ (i.e. $+1$ when $n\\equiv1\\pmod4$, $-1$ when $n\\equiv3\\pmod4$). For odd $n$, $2^{(-1)^n}=2^{-1}=\\dfrac12$.</p><p>So: $s_n=0$ for even $n$; $s_n=\\dfrac12\\left(1-\\dfrac1n\\right)$ for $n\\equiv1\\pmod4$; $s_n=-\\dfrac12\\left(1-\\dfrac1n\\right)$ for $n\\equiv3\\pmod4$.</p><p>The positive branch $\\dfrac12\\left(1-\\dfrac1n\\right)$ increases toward $\\dfrac12$ as $n\\to\\infty$ along $n\\equiv1\\pmod4$, but never reaches it (since $1-1/n<1$ for every finite $n$). Every other term of the sequence is $\\le0$. So $\\dfrac12$ is an upper bound, and it is the least one, since terms of the positive branch get arbitrarily close to it. The least upper bound is $0.5$.</p>",
  "tested": "<p>Computing the supremum of a sequence as a least upper bound that need not be attained, by isolating the subsequence responsible for it.</p>",
  "trap": "Reporting the sup as an attained maximum: no term of the sequence ever equals 1/2 exactly, since 1-1/n<1 for every finite n; the subsequence along n = 4k+1 only approaches 1/2 in the limit."
},

{
  "id": "p.jam.2016.42",
  "course": "ra1",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 42,
  "marks": 1,
  "neg": 0,
  "sec": "3.1",
  "tests": [
    "c.3.1.10"
  ],
  "title": "Limit of a geometric mean",
  "type": "NAT",
  "prompt": "<p>Let $\\{s_k\\}$ be a sequence of real numbers, where</p><p>$$s_k=k^{\\alpha/k},\\qquad k\\ge1,\\ \\alpha>0.$$</p><p>Then</p><p>$$\\lim_{n\\to\\infty}\\left(s_1s_2\\cdots s_n\\right)^{1/n}$$</p><p>is ____________</p>",
  "answer": {
    "value": 1,
    "tol": 0,
    "dp": 1
  },
  "solution": "<p>Let $P_n=(s_1s_2\\cdots s_n)^{1/n}$. Taking logarithms,</p><p>$$\\ln P_n=\\frac1n\\sum_{k=1}^n\\frac{\\alpha\\ln k}{k}.$$</p><p>Since $\\displaystyle\\sum_{k=1}^n\\frac{\\ln k}{k}\\sim\\frac{(\\ln n)^2}{2}$ for large $n$ (comparing with $\\int\\frac{\\ln x}{x}\\,dx=\\frac{(\\ln x)^2}{2}$), we get</p><p>$$\\ln P_n\\sim\\frac{\\alpha(\\ln n)^2}{2n}\\to0\\quad\\text{as }n\\to\\infty,$$</p><p>because $(\\ln n)^2$ grows far slower than $n$. Hence $P_n\\to e^0=1$. (Equivalently: $s_k=k^{\\alpha/k}\\to1$ as $k\\to\\infty$, and the geometric mean of a sequence converging to a positive limit converges to that same limit.) The answer is $1$.</p>",
  "tested": "<p>Evaluating a geometric-mean limit by taking logarithms and estimating the resulting Cesàro-type average.</p>",
  "trap": "Trying to find a closed form for the product s_1 s_2 ... s_n; the intended route is to take logarithms and bound the average, since (ln n)^2/n -> 0 for every fixed alpha>0, regardless of its value."
},

{
  "id": "p.jam.2016.51",
  "course": "ra1",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 51,
  "marks": 2,
  "neg": 0,
  "sec": "3.2",
  "tests": [
    "c.3.2.3"
  ],
  "title": "Evaluating a limit of the indeterminate form $\\infty^0$",
  "type": "NAT",
  "prompt": "<p>The value of</p><p>$$\\lim_{n\\to\\infty}\\left(8n-\\frac1n\\right)^{\\frac{(-1)^n}{n^2}}$$</p><p>is equal to ____________</p>",
  "answer": {
    "value": 1,
    "tol": 0,
    "dp": 1
  },
  "solution": "<p>Let $L_n=\\left(8n-\\dfrac1n\\right)^{\\frac{(-1)^n}{n^2}}$. Taking logarithms,</p><p>$$\\ln L_n=\\frac{(-1)^n}{n^2}\\ln\\!\\left(8n-\\frac1n\\right).$$</p><p>As $n\\to\\infty$, $\\ln\\!\\left(8n-\\dfrac1n\\right)\\sim\\ln(8n)=\\ln8+\\ln n$, so</p><p>$$\\ln L_n\\sim\\frac{(-1)^n(\\ln8+\\ln n)}{n^2}\\to0,$$</p><p>since $\\dfrac{\\ln n}{n^2}\\to0$ and the bounded factor $(-1)^n$ does not affect this. Hence $L_n\\to e^0=1$.</p>",
  "tested": "<p>Resolving the indeterminate form $\\infty^0$ by taking logarithms and estimating the resulting product of a vanishing factor with a slowly growing logarithm.</p>",
  "trap": "Treating (-1)^n as forcing the limit to oscillate between two values -- it only alternates the sign of a quantity that already tends to 0, so it has no effect on the final limit."
},

{
  "id": "p.jam.2015.05",
  "course": "ra1",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 5,
  "marks": 1,
  "neg": -0.33,
  "sec": "3.3",
  "tests": [
    "c.3.3.2",
    "c.3.1.3"
  ],
  "title": "Limit of a recursively defined convergent sequence",
  "type": "MCQ",
  "prompt": "<p>Let $\\{x_n\\}$ be a convergent sequence of real numbers. If $x_1 > \\pi + \\sqrt{2}$ and $x_{n+1} = \\pi + \\sqrt{x_n - \\pi}$ for $n \\ge 1$, then which one of the following is the limit of this sequence?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\pi + 1$"
    },
    {
      "k": "B",
      "t": "$\\pi + \\sqrt{2}$"
    },
    {
      "k": "C",
      "t": "$\\pi$"
    },
    {
      "k": "D",
      "t": "$\\pi + \\sqrt{\\pi}$"
    }
  ],
  "answer": "A",
  "solution": "<p>Since the square root forces $x_n \\ge \\pi$ for $n \\ge 1$, put $a_n = x_n - \\pi \\ge 0$. The recursion becomes $a_{n+1} = \\sqrt{a_n}$, with $a_1 = x_1 - \\pi > \\sqrt{2} > 1$.</p>\n<p>If $a_n > 1$ then $a_{n+1} = \\sqrt{a_n} < a_n$ (because $\\sqrt{t} < t$ for $t>1$) and $a_{n+1} = \\sqrt{a_n} > 1$ as well. So by induction $\\{a_n\\}$ is strictly decreasing and bounded below by $1$; by the Monotone Convergence Theorem it converges to some $L \\ge 1$.</p>\n<p>Taking limits in $a_{n+1} = \\sqrt{a_n}$ gives $L = \\sqrt{L}$, i.e. $L^2 = L$, so $L = 0$ or $L = 1$. Since $L \\ge 1$, we must have $L = 1$. Hence $x_n = \\pi + a_n \\to \\pi + 1$.</p>",
  "tested": "Solving a recursively defined sequence by first proving convergence via the Monotone Convergence Theorem, then passing to the limit in the recursion.",
  "trap": "Squaring L = pi + sqrt(L-pi) gives two algebraic roots, L = pi and L = pi+1; picking the one that is NOT consistent with the sequence being decreasing and bounded below by pi+1 (here L = pi) gives the wrong option C."
},

{
  "id": "p.jam.2015.20",
  "course": "ra1",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 20,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.4",
  "tests": [
    "c.3.4.8"
  ],
  "title": "Bolzano–Weierstrass for a bounded nested set",
  "type": "MCQ",
  "prompt": "<p>Let $S = \\displaystyle\\bigcap_{n=1}^{\\infty}\\left(\\left[0,\\frac{1}{2n+1}\\right]\\cup\\left[\\frac{1}{2n},1\\right]\\right)$. Which one of the following statements is FALSE?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exist sequences $\\{a_n\\}$ and $\\{b_n\\}$ in $[0,1]$ such that $S = [0,1]\\setminus\\bigcup_{n=1}^\\infty (a_n,b_n)$"
    },
    {
      "k": "B",
      "t": "$[0,1]\\setminus S$ is an open set"
    },
    {
      "k": "C",
      "t": "If $A$ is an infinite subset of $S$, then $A$ has a limit point"
    },
    {
      "k": "D",
      "t": "There exists an infinite subset of $S$ having no limit points"
    }
  ],
  "answer": "D",
  "solution": "<p>For each $n$, the set $A_n = [0,\\tfrac1{2n+1}]\\cup[\\tfrac1{2n},1]$ is $[0,1]$ with the open \"gap\" $\\left(\\tfrac1{2n+1},\\tfrac1{2n}\\right)$ removed. These gaps, for $n=1,2,3,\\dots$, are pairwise disjoint and accumulate only at $0$. Hence</p>\n$$S = \\bigcap_{n=1}^\\infty A_n = [0,1]\\setminus\\bigcup_{n=1}^\\infty\\left(\\frac1{2n+1},\\frac1{2n}\\right),$$\n<p>which is exactly the form in (A) with $a_n=\\tfrac1{2n+1},\\,b_n=\\tfrac1{2n}$ — so (A) is TRUE.</p>\n<p>$S$ is the complement in $[0,1]$ of a union of open intervals, so $S$ is closed in $[0,1]$, i.e. $[0,1]\\setminus S$ is open — (B) is TRUE.</p>\n<p>$S$ is a bounded subset of $\\mathbb{R}$ (it lies in $[0,1]$). By the Bolzano–Weierstrass theorem, every infinite bounded subset of $\\mathbb{R}$ has a limit point. Hence any infinite subset $A$ of $S$ is itself bounded (being a subset of $[0,1]$) and infinite, so $A$ must have a limit point — (C) is TRUE.</p>\n<p>Statement (D) directly contradicts (C): since every infinite subset of the bounded set $S$ has a limit point, no infinite subset of $S$ can fail to have one. So (D) is FALSE — this is the answer.</p>",
  "tested": "The Bolzano–Weierstrass theorem (every bounded infinite subset of R has a limit point), applied without needing to fully characterize S.",
  "trap": "Spending time trying to explicitly list the points of S instead of noticing that S is simply bounded, which alone is enough to settle (C) as true and (D) as false via Bolzano–Weierstrass."
},

{
  "id": "p.jam.2015.23",
  "course": "ra1",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 23,
  "marks": 2,
  "neg": -0.66,
  "sec": "3.3",
  "tests": [
    "c.3.3.2",
    "c.3.1.3"
  ],
  "title": "Cosine collapses an oscillating sequence into convergence",
  "type": "MCQ",
  "prompt": "<p>The sequence $\\left\\{\\cos\\!\\left(\\dfrac12\\tan^{-1}\\!\\left(\\left(-\\dfrac n2\\right)^{n}\\right)\\right)\\right\\}$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "monotone and convergent"
    },
    {
      "k": "B",
      "t": "monotone but not convergent"
    },
    {
      "k": "C",
      "t": "convergent but not monotone"
    },
    {
      "k": "D",
      "t": "neither monotone nor convergent"
    }
  ],
  "answer": "A",
  "solution": "<p>Let $b_n = \\left(-\\tfrac n2\\right)^n$. For even $n$, $b_n = \\left(\\tfrac n2\\right)^n \\to +\\infty$, so $\\tan^{-1}(b_n)\\to \\tfrac\\pi2$. For odd $n$, $b_n = -\\left(\\tfrac n2\\right)^n \\to -\\infty$, so $\\tan^{-1}(b_n)\\to -\\tfrac\\pi2$.</p>\n<p>Thus $\\tfrac12\\tan^{-1}(b_n)$ approaches $\\tfrac\\pi4$ along even $n$ and $-\\tfrac\\pi4$ along odd $n$. Since $\\cos$ is an even, continuous function, $\\cos(\\pm\\tfrac\\pi4) = \\tfrac{\\sqrt2}{2}$ for *both* subsequences, so the whole sequence converges to $\\tfrac{\\sqrt2}{2}$, despite $b_n$ itself oscillating in sign.</p>\n<p>Numerically the terms are approximately $0.973,\\,0.924,\\,0.800,\\,0.729,\\,0.711,\\,0.708,\\dots$, decreasing steadily toward $\\tfrac{\\sqrt2}{2}\\approx0.707$: the sequence is (eventually, and in fact throughout) monotone decreasing as well as convergent.</p>",
  "tested": "Recognizing that composing an oscillating, sign-alternating sequence with an even function (cosine) can collapse two divergent-looking subsequential trends into one common limit.",
  "trap": "Assuming the sign oscillation of $(-n/2)^n$ must force the whole sequence to be non-monotone or divergent, without noticing that the outer function cos is even, so the \"two oscillating limits\" +pi/4 and -pi/4 actually agree after taking cosine."
},

{
  "id": "p.jam.2015.33",
  "course": "ra1",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 33,
  "marks": 2,
  "neg": 0,
  "sec": "3.5",
  "tests": [
    "c.3.5.5",
    "c.3.5.1"
  ],
  "title": "Which decay conditions on consecutive terms force convergence",
  "type": "MSQ",
  "prompt": "<p>Which of the following conditions implies (imply) the convergence of a sequence $\\{x_n\\}$ of real numbers?</p>",
  "options": [
    {
      "k": "A",
      "t": "Given $\\varepsilon>0$ there exists an $n_0\\in\\mathbb{N}$ such that for all $n\\ge n_0$, $|x_{n+1}-x_n|<\\varepsilon$"
    },
    {
      "k": "B",
      "t": "Given $\\varepsilon>0$ there exists an $n_0\\in\\mathbb{N}$ such that for all $n\\ge n_0$, $\\dfrac{1}{(n+1)^2}|x_{n+1}-x_n|<\\varepsilon$"
    },
    {
      "k": "C",
      "t": "Given $\\varepsilon>0$ there exists an $n_0\\in\\mathbb{N}$ such that for all $n\\ge n_0$, $(n+1)^2|x_{n+1}-x_n|<\\varepsilon$"
    },
    {
      "k": "D",
      "t": "Given $\\varepsilon>0$ there exists an $n_0\\in\\mathbb{N}$ such that for all $m,n$ with $m>n\\ge n_0$, $|x_m-x_n|<\\varepsilon$"
    }
  ],
  "answer": [
    "C",
    "D"
  ],
  "solution": "<p>(A) only says consecutive terms get close; this is not enough. Example: $x_n=\\sqrt n$ satisfies $|x_{n+1}-x_n|=\\sqrt{n+1}-\\sqrt n = \\dfrac{1}{\\sqrt{n+1}+\\sqrt n}\\to 0$, yet $x_n\\to\\infty$. So (A) does NOT imply convergence.</p>\n<p>(B) is an even weaker requirement than (A) (dividing by $(n+1)^2$ before comparing to $\\varepsilon$ only makes the condition easier to satisfy for large $n$), so the same counterexample $x_n=\\sqrt n$ defeats it. (B) does NOT imply convergence.</p>\n<p>(C) says $|x_{n+1}-x_n| < \\varepsilon/(n+1)^2$ eventually. Taking $\\varepsilon=1$, there is $n_0$ with $|x_{n+1}-x_n| < 1/(n+1)^2$ for $n\\ge n_0$. Since $\\sum 1/(n+1)^2$ converges, for $m>n\\ge n_0$,</p>\n$$|x_m - x_n| \\le \\sum_{k=n}^{m-1}|x_{k+1}-x_k| < \\sum_{k=n}^{\\infty}\\frac1{(k+1)^2} \\to 0 \\text{ as } n\\to\\infty,$$\n<p>so $\\{x_n\\}$ is Cauchy, hence convergent (by the Cauchy Criterion, since $\\mathbb{R}$ is complete). (C) DOES imply convergence.</p>\n<p>(D) is exactly the statement that $\\{x_n\\}$ is a Cauchy sequence, which is equivalent to convergence in $\\mathbb{R}$. (D) DOES imply convergence.</p>",
  "tested": "The Cauchy Criterion for sequences, and the classic trap that \"consecutive terms getting close\" is strictly weaker than being Cauchy.",
  "trap": "Believing $|x_{n+1}-x_n|\\to 0$ (condition A) is enough for convergence — the standard counterexample $x_n=\\sqrt n$ has vanishing consecutive differences yet diverges to infinity.",
  "provenance": "JAM 2015 MA, Section B question 3. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.39",
  "course": "ra1",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 39,
  "marks": 2,
  "neg": 0,
  "sec": "2.3",
  "tests": [
    "c.2.3.2",
    "c.2.3.1"
  ],
  "title": "Sup/inf inequalities for pointwise-related function ranges",
  "type": "MSQ",
  "prompt": "<p>Let $f,g:[0,1]\\to[0,1]$ be functions. Let $R(f)$ and $R(g)$ be the ranges of $f$ and $g$, respectively. Which of the following statements is (are) true?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $f(x)\\le g(x)$ for all $x\\in[0,1]$, then $\\sup R(f) \\le \\inf R(g)$"
    },
    {
      "k": "B",
      "t": "If $f(x)\\le g(x)$ for some $x\\in[0,1]$, then $\\inf R(f) \\le \\sup R(g)$"
    },
    {
      "k": "C",
      "t": "If $f(x)\\le g(y)$ for some $x,y\\in[0,1]$, then $\\inf R(f) \\le \\sup R(g)$"
    },
    {
      "k": "D",
      "t": "If $f(x)\\le g(y)$ for all $x,y\\in[0,1]$, then $\\sup R(f) \\le \\inf R(g)$"
    }
  ],
  "answer": [
    "B",
    "C",
    "D"
  ],
  "solution": "<p><b>(A)</b> Pointwise domination $f\\le g$ does not compare $\\sup R(f)$ with $\\inf R(g)$. Counterexample: $f(x)=g(x)=x$; then $f\\le g$ trivially, but $\\sup R(f)=1$ and $\\inf R(g)=0$, so $\\sup R(f)\\le \\inf R(g)$ is FALSE.</p>\n<p><b>(B)</b> There is some $x_0$ with $f(x_0)\\le g(x_0)$. Then $\\inf R(f) \\le f(x_0) \\le g(x_0) \\le \\sup R(g)$. TRUE, and always true regardless of $f,g$.</p>\n<p><b>(C)</b> There are $x,y$ with $f(x)\\le g(y)$. Then $\\inf R(f)\\le f(x) \\le g(y) \\le \\sup R(g)$, the same chain as in (B) but with possibly different points. TRUE.</p>\n<p><b>(D)</b> Here $f(x)\\le g(y)$ for *every* pair $x,y$. Fix $y$ and take the supremum over $x$: $\\sup R(f) \\le g(y)$ for every $y$. Now take the infimum over $y$: $\\sup R(f) \\le \\inf R(g)$. TRUE.</p>",
  "tested": "Elementary sup/inf manipulations, and the crucial difference between \"for all\" and \"for some\" hypotheses, and between same-point and different-point comparisons.",
  "trap": "Confusing (A) (pointwise domination at matching inputs) with (D) (domination across every pair of inputs) — only the much stronger hypothesis in (D) forces sup R(f) <= inf R(g).",
  "provenance": "JAM 2015 MA, Section B question 9. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.53",
  "course": "ra1",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 53,
  "marks": 2,
  "neg": 0,
  "sec": "3.7",
  "tests": [
    "c.3.7.2"
  ],
  "title": "A telescoping series limit",
  "type": "NAT",
  "prompt": "<p>The limit</p>\n$$\\lim_{n\\to\\infty}\\sum_{k=2}^{n} \\frac{1}{k^3-k}$$\n<p>is equal to ______________</p>",
  "answer": {
    "value": 0.25,
    "tol": 0.001,
    "dp": 2
  },
  "solution": "<p>Factor $k^3-k = (k-1)k(k+1)$. The partial-fraction identity</p>\n$$\\frac{1}{(k-1)k(k+1)} = \\frac12\\left[\\frac{1}{(k-1)k} - \\frac{1}{k(k+1)}\\right]$$\n<p>can be checked directly (the right side has common numerator $(k+1)-(k-1)=2$ over $(k-1)k(k+1)$, matching the left side after the factor of $\\tfrac12$). This makes the sum telescope:</p>\n$$\\sum_{k=2}^{n}\\frac{1}{k^3-k} = \\frac12\\sum_{k=2}^{n}\\left[\\frac{1}{(k-1)k}-\\frac{1}{k(k+1)}\\right] = \\frac12\\left[\\frac{1}{1\\cdot2} - \\frac{1}{n(n+1)}\\right].$$\n<p>As $n\\to\\infty$, $\\dfrac{1}{n(n+1)}\\to 0$, so the sum tends to $\\dfrac12\\cdot\\dfrac12 = \\dfrac14 = 0.25$.</p>",
  "tested": "Recognizing and evaluating a telescoping series, a standard technique for the sum of an infinite series (Bartle Chapter 3.7).",
  "trap": "Splitting into three separate partial fractions A/(k-1) + B/k + C/(k+1) and mismanaging the signs, instead of using the cleaner two-term telescoping identity, which makes cancellation obvious.",
  "provenance": "JAM 2015 MA, Section C question 13. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
}
);

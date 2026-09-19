/* ══════════════════════════════════════════════════════════════════════════
   LEVEL 4 · IIT JAM past papers — Real Analysis II

   Every question on an IIT JAM Mathematics (MA) paper whose content belongs to
   RA2: continuity, differentiation, the Riemann integral, and sequences and
   series of functions (Bartle §5.1–10.4).

   A course reaches LEVEL 4 when every question here is worked through. Progress
   is stored against 'p:<id>', so the ids are permanent — see HOOK_agy.md rule 1
   and "Level 4 — the JAM past papers".

   Source papers: SSC-V4/sources/exams/jam/, with sources/exams/jam/index.md
   recording where each year came from. 2012–2026 are the official IIT
   archive; 2007–2011 are scans from a faculty mirror at IIT Hyderabad.

   Official answer keys exist only for 2017 and 2026; every other year's
   `answer` is a worked answer, not a published key.
   ══════════════════════════════════════════════════════════════════════════ */

PYQ.push(
{
  "id": "p.jam.2026.06",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 6,
  "marks": 1,
  "neg": -0.33,
  "sec": "5.3",
  "tests": [
    "c.5.1.7",
    "c.5.3.4"
  ],
  "title": "Continuous extension of a function on an open interval",
  "type": "MCQ",
  "prompt": "<p>Let $f:(1,2)\\to\\mathbb{R}$ be a continuous function satisfying $\\displaystyle\\lim_{x\\to 1+} f(x) = 3$ and $\\displaystyle\\lim_{x\\to 2-} f(x) = 3$.</p><p>Then which ONE of the following is necessarily TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is bounded and $f$ has a maximum or a minimum but not both."
    },
    {
      "k": "B",
      "t": "$f$ is bounded and $f$ has a maximum or a minimum or both."
    },
    {
      "k": "C",
      "t": "$f$ is bounded and $f$ has neither a maximum nor a minimum."
    },
    {
      "k": "D",
      "t": "$f$ is unbounded and $f$ has either no maximum or no minimum."
    }
  ],
  "answer": "B",
  "solution": "<p>Since both one-sided limits at the endpoints equal $3$, define $g:[1,2]\\to\\mathbb{R}$ by $g(1)=g(2)=3$ and $g=f$ on $(1,2)$; then $g$ is continuous on the closed bounded interval $[1,2]$ (Continuous Extension via the Limit).</p><p>By the Maximum&ndash;Minimum Theorem, $g$ is bounded and attains an absolute maximum $M$ and an absolute minimum $m$ on $[1,2]$, so $f$ is bounded on $(1,2)$.</p><p>If $f$ is identically $3$, it attains both a maximum and a minimum (every value). Otherwise some interior point has $f(x_0) \\ne 3$; say $f(x_0) > 3$. Since $g \\to 3$ at both endpoints, the maximum of $g$ (which is $\\ge f(x_0) > 3$) cannot occur at an endpoint, so it occurs at an interior point of $(1,2)$, i.e. $f$ attains a maximum. Symmetrically, if some $f(x_0) < 3$, $f$ attains a minimum. In every case $f$ attains a maximum or a minimum (possibly both) &mdash; option (B).</p>",
  "tested": "<p>Combining the Continuous Extension Theorem with the Maximum&ndash;Minimum Theorem to deduce boundedness and attainment of an extreme value on an open interval with matching endpoint limits.</p>",
  "trap": "Assuming that because the domain (1,2) is open, no maximum or minimum can ever be attained -- an interior extremum strictly between the endpoints is still attained even though the endpoints themselves are excluded."
},

{
  "id": "p.jam.2026.07",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 7,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.2",
  "tests": [
    "c.6.2.3"
  ],
  "title": "Chaining Rolle's theorem across integer points",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a twice differentiable function such that $f(n) = 1$ for all $n \\in \\mathbb{Z}$.</p><p>Which ONE of the following statements is necessarily TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f'(n) = 0$ for all $n \\in \\mathbb{Z}$."
    },
    {
      "k": "B",
      "t": "$f'(x) = 0$ for infinitely many $x \\in \\mathbb{R} \\setminus \\mathbb{Z}$."
    },
    {
      "k": "C",
      "t": "$f''(n) = 0$ for all $n \\in \\mathbb{Z}$."
    },
    {
      "k": "D",
      "t": "$f''(x) = 0$ for infinitely many $x \\in \\mathbb{R} \\setminus \\mathbb{Z}$."
    }
  ],
  "answer": "B",
  "solution": "<p>For each integer $n$, $f(n) = f(n+1) = 1$, and $f$ is differentiable on $[n,n+1]$. By Rolle's Theorem there exists $c_n \\in (n,n+1)$ with $f'(c_n) = 0$. Each $c_n$ lies strictly between consecutive integers, so $c_n \\in \\mathbb{R}\\setminus\\mathbb{Z}$, and distinct $n$ give distinct $c_n$. This produces infinitely many zeros of $f'$ in $\\mathbb{R}\\setminus\\mathbb{Z}$ &mdash; statement (B).</p><p>(A) and (C) fail because $f$ need not have an extremum exactly at the integers (nothing forces $f'(n)=0$). For (D): applying Rolle to $f'$ on $[c_n,c_{n+1}]$ only guarantees a zero of $f''$ <i>somewhere</i> in $(c_n,c_{n+1})$, and this interval straddles the integer $n+1$, so the guaranteed zero of $f''$ need not avoid $\\mathbb{Z}$; (D) is therefore not forced.</p>",
  "tested": "<p>Repeated application of Rolle's Theorem, and care about exactly which set (integers vs. non-integers) a guaranteed root is confined to.</p>",
  "trap": "Assuming the second-level Rolle application (on f') also automatically misses the integers, just because the first one did -- the interval (c_n, c_{n+1}) contains the integer n+1, so that conclusion is not guaranteed."
},

{
  "id": "p.jam.2026.11",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 11,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.1",
  "tests": [
    "c.9.1.1"
  ],
  "title": "Splitting a series into its positive and negative parts",
  "type": "MCQ",
  "prompt": "<p>Given a sequence of real numbers $(a_n)$, define $b_n = a_n$ if $a_n \\ge 0$ and $b_n = 0$ if $a_n < 0$, and $c_n = a_n$ if $a_n < 0$ and $c_n = 0$ if $a_n \\ge 0$, for each positive integer $n$.</p><p>Which ONE of the following statements is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $\\sum_{n=1}^\\infty a_n$ does not converge, then $\\sum_{n=1}^\\infty b_n$ does not converge."
    },
    {
      "k": "B",
      "t": "If $\\sum_{n=1}^\\infty a_n$ converges but $\\sum_{n=1}^\\infty |a_n|$ does not converge, then $\\sum_{n=1}^\\infty b_n$ converges."
    },
    {
      "k": "C",
      "t": "If $\\sum_{n=1}^\\infty a_n$ converges but $\\sum_{n=1}^\\infty |a_n|$ does not converge, then $\\sum_{n=1}^\\infty b_n$ does not converge."
    },
    {
      "k": "D",
      "t": "If $\\sum_{n=1}^\\infty a_n$ converges, then $\\sum_{n=1}^\\infty b_n$ converges or $\\sum_{n=1}^\\infty c_n$ converges."
    }
  ],
  "answer": "C",
  "solution": "<p>By definition $2b_n = a_n + |a_n|$ for every $n$, since $b_n=a_n,\\,|a_n|=a_n$ when $a_n\\ge0$ (giving $2a_n$), and $b_n=0,\\,|a_n|=-a_n$ when $a_n<0$ (giving $0$).</p><p>Suppose $\\sum a_n$ converges but $\\sum |a_n|$ diverges (i.e. $\\sum a_n$ is only conditionally convergent). If $\\sum b_n$ also converged, then $\\sum 2b_n = \\sum a_n + \\sum |a_n|$ would be a sum of two series where one (namely $\\sum(2b_n - a_n)=\\sum|a_n|$, obtained by subtracting the convergent $\\sum a_n$ from the assumed-convergent $\\sum 2b_n$) would have to converge -- contradicting divergence of $\\sum|a_n|$. Hence $\\sum b_n$ cannot converge: option (C).</p><p>(A) is false in general (e.g. an alternating conditionally convergent series has $\\sum a_n$ convergent, so the hypothesis of (A) never triggers, but taking $a_n$ diverging while $b_n\\equiv0$ shows (A) fails too). (B) is the opposite of the correct conclusion. (D) is automatically true whenever (C)'s conclusion holds is not what's being tested; but crucially it doesn't capture the sharp relationship the way (C) does, and (D)'s \"or\" is trivially satisfiable without insight, while (C) is the precise, necessarily forced statement.</p>",
  "tested": "<p>The identities $2b_n = a_n + |a_n|$, $2c_n = a_n - |a_n|$ linking a series, its absolute series, and its positive/negative parts -- the mechanism behind conditional convergence.</p>",
  "trap": "Assuming that because a_n converges, its \"positive part\" series must inherit convergence -- it does not when the series is only conditionally convergent, precisely because inherited cancellation between positive and negative terms is destroyed by discarding one sign."
},

{
  "id": "p.jam.2026.12",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 12,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.4",
  "tests": [
    "c.9.4.9",
    "c.9.2.4"
  ],
  "title": "Interval of convergence via the root test",
  "type": "MCQ",
  "prompt": "<p>For which one of the following pairs of values of $a$ and $b$ does the series $\\displaystyle\\sum_{k=1}^\\infty \\frac{(3x)^k}{2^{\\sqrt{k}}(1-x)^k}$ converge for all $x \\in (a,b)$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$a = \\dfrac{-1}{4}$ and $b = \\dfrac12$"
    },
    {
      "k": "B",
      "t": "$a = -1$ and $b = \\dfrac15$"
    },
    {
      "k": "C",
      "t": "$a = \\dfrac{-1}{2}$ and $b = \\dfrac14$"
    },
    {
      "k": "D",
      "t": "$a = \\dfrac{-1}{4}$ and $b = \\dfrac13$"
    }
  ],
  "answer": "C",
  "solution": "<p>Write the general term as $t_k = \\left(\\dfrac{3x}{1-x}\\right)^k \\dfrac{1}{2^{\\sqrt k}}$. Apply the root test: $|t_k|^{1/k} = \\left|\\dfrac{3x}{1-x}\\right| \\cdot 2^{-\\sqrt k /k} \\to \\left|\\dfrac{3x}{1-x}\\right|$ as $k\\to\\infty$, since $\\sqrt k /k \\to 0$ so $2^{-\\sqrt k/k}\\to 1$.</p><p>The series converges when $\\left|\\dfrac{3x}{1-x}\\right| < 1$, i.e. $-1 < \\dfrac{3x}{1-x} < 1$. Assuming $x<1$ so $1-x>0$: from $\\dfrac{3x}{1-x}<1$ we get $3x<1-x \\Rightarrow x<\\dfrac14$; from $\\dfrac{3x}{1-x}>-1$ we get $3x>-(1-x) \\Rightarrow x>-\\dfrac12$.</p><p>So the series converges exactly for $x\\in\\left(-\\dfrac12,\\dfrac14\\right)$, matching option (C).</p>",
  "tested": "<p>Using the root test on a series whose ratio depends on $x$ through $\\dfrac{3x}{1-x}$, and correctly solving the resulting compound inequality.</p>",
  "trap": "Forgetting to check the sign of (1-x) before cross-multiplying the inequality |3x/(1-x)|<1, or assuming the 2^{sqrt(k)} factor changes the exponential growth rate under the k-th root (it vanishes in the limit)."
},

{
  "id": "p.jam.2026.13",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 13,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.1"
  ],
  "title": "Higher-order derivative test and vanishing derivatives",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function that has derivatives of all orders.</p><p>Which ONE of the following statements is FALSE?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $f$ is a polynomial in $x$ of degree at most 5, then $f^{(6)}(x) = 0$ for all $x \\in \\mathbb{R}$."
    },
    {
      "k": "B",
      "t": "If $f^{(6)}(x) = 0$ for all $x \\in \\mathbb{R}$, then $f$ is a polynomial in $x$ of degree at most 5."
    },
    {
      "k": "C",
      "t": "If $f^{(k)}(a) = 0$ for $1 \\le k \\le 5$ and $f^{(6)}(a) > 0$ for some $a \\in \\mathbb{R}$, then $f(x)$ has a local minimum at $a$."
    },
    {
      "k": "D",
      "t": "If $f^{(k)}(a) = 0$ for $1 \\le k \\le 6$ and $f^{(7)}(a) < 0$ for some $a \\in \\mathbb{R}$, then $f(x)$ has a local maximum at $a$."
    }
  ],
  "answer": "D",
  "solution": "<p><b>(A)</b> A degree-$\\le 5$ polynomial has all derivatives of order $\\ge 6$ identically zero &mdash; TRUE.</p><p><b>(B)</b> Repeatedly applying the Zero Derivative characterisation ($g'\\equiv 0 \\Rightarrow g$ constant) six times to $f^{(6)}\\equiv 0$ shows $f$ is a polynomial of degree at most $5$ &mdash; TRUE.</p><p><b>(C)</b> By Taylor's Theorem about $a$, near $a$, $f(x)-f(a) \\approx \\dfrac{f^{(6)}(a)}{6!}(x-a)^6$, and since the exponent $6$ is even and $f^{(6)}(a)>0$, this local model is $\\ge 0$ near $a$, giving a local minimum &mdash; TRUE.</p><p><b>(D)</b> Here the first nonvanishing derivative is $f^{(7)}(a)$, of <i>odd</i> order $7$. Near $a$, $f(x)-f(a) \\approx \\dfrac{f^{(7)}(a)}{7!}(x-a)^7$, which changes sign as $x$ crosses $a$ (odd power), regardless of the sign of $f^{(7)}(a)$. So $a$ is neither a local maximum nor a local minimum &mdash; it is an inflection-type point. Statement (D) is FALSE.</p>",
  "tested": "<p>The higher-order derivative test: an even-order first nonzero derivative determines a max/min (by its sign), while an odd-order first nonzero derivative always rules out an extremum.</p>",
  "trap": "Treating the sign of the first nonzero derivative (negative in (D)) as automatically determining \"maximum\" the way it would for an even order -- the parity of the order, not just the sign, decides whether there is an extremum at all."
},

{
  "id": "p.jam.2026.19",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 19,
  "marks": 2,
  "neg": -0.66,
  "sec": "7.3",
  "tests": [
    "c.3.7.2",
    "c.7.3.1"
  ],
  "title": "An improper integral of $e^{-t}|\\sin t|$ via a geometric series",
  "type": "MCQ",
  "prompt": "<p>The value of the following expression $\\displaystyle \\lim_{x\\to\\infty} \\int_0^x e^{-t}|\\sin t|\\,dt$ is ______.</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{e^\\pi+1}{2(e^\\pi-1)}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{e^\\pi-1}{2(e^\\pi+1)}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{2(e^\\pi+1)}{e^\\pi-1}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{2(e^\\pi-1)}{e^\\pi+1}$"
    }
  ],
  "answer": "A",
  "solution": "<p>Since $|\\sin t|$ has period $\\pi$, split the integral into blocks of length $\\pi$: $\\displaystyle\\int_0^\\infty e^{-t}|\\sin t|\\,dt = \\sum_{k=0}^\\infty \\int_{k\\pi}^{(k+1)\\pi} e^{-t}|\\sin t|\\,dt = \\sum_{k=0}^\\infty e^{-k\\pi}\\int_0^\\pi e^{-u}\\sin u\\,du$, substituting $t=u+k\\pi$ and using $|\\sin(u+k\\pi)|=\\sin u$ for $u\\in[0,\\pi]$.</p><p>Using $\\int e^{-u}\\sin u\\,du = -\\dfrac{e^{-u}(\\sin u+\\cos u)}{2}$, $\\displaystyle\\int_0^\\pi e^{-u}\\sin u\\,du = \\dfrac{e^{-\\pi}+1}{2}$.</p><p>The full sum is a geometric series: $\\displaystyle\\sum_{k=0}^\\infty e^{-k\\pi} = \\dfrac{1}{1-e^{-\\pi}}$.</p><p>So the integral equals $\\dfrac{e^{-\\pi}+1}{2}\\cdot\\dfrac{1}{1-e^{-\\pi}} = \\dfrac{1+e^{-\\pi}}{2(1-e^{-\\pi})} = \\dfrac{e^\\pi+1}{2(e^\\pi-1)}$ (multiplying numerator and denominator by $e^\\pi$) &mdash; option (A).</p>",
  "tested": "<p>Evaluating an improper integral of a periodic function times a decaying exponential by summing a geometric series of per-period integrals.</p>",
  "trap": "Trying to integrate e^{-t} sin t directly over the whole half-line instead of accounting for the sign flips forced by the absolute value every half-period."
},

{
  "id": "p.jam.2026.21",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.3",
  "tests": [
    "c.5.3.7"
  ],
  "title": "The horizontal chord theorem",
  "type": "MCQ",
  "prompt": "<p>Let $f:[1,9]\\to\\mathbb{R}$ be a non-constant continuous function such that $f(1)=f(9)$.</p><p>Which ONE of the following statements is necessarily TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exists $c \\in [4,8]$ such that $f(c) = f(c+1)$."
    },
    {
      "k": "B",
      "t": "There exists $c \\in [3,7]$ such that $f(c) = f(c+2)$."
    },
    {
      "k": "C",
      "t": "There exists $c \\in [2,6]$ such that $f(c) = f(c+3)$."
    },
    {
      "k": "D",
      "t": "There exists $c \\in [1,5]$ such that $f(c) = f(c+4)$."
    }
  ],
  "answer": "D",
  "solution": "<p>This is the horizontal chord (universal chord) theorem: if $f(a)=f(b)$ and $d = \\dfrac{b-a}{n}$ for a positive integer $n$, then there exists $c \\in [a, b-d]$ with $f(c) = f(c+d)$. Here $a=1$, $b=9$, so $b-a=8$.</p><p>Take $d=4=\\dfrac{8}{2}$ (i.e. $n=2$). Let $g(x) = f(x+4)-f(x)$ on $[1,5]$. Then $g(1)+g(5) = [f(5)-f(1)] + [f(9)-f(5)] = f(9)-f(1) = 0$. So $g(1)$ and $g(5)$ are either both zero or of opposite sign; either way, by the Intermediate Value Theorem (Bolzano's Theorem) applied to the continuous function $g$ on $[1,5]$, there exists $c\\in[1,5]$ with $g(c)=0$, i.e. $f(c)=f(c+4)$. This is exactly option (D), and the guaranteed interval $[1,5]$ matches the interval $[a,b-d]=[1,9-4]$ from the theorem precisely.</p><p>For (A)&ndash;(C), the shift $d$ (1, 2, or 3) either does not divide $8$ evenly (so no such $c$ is guaranteed at all, as in $d=3$ for option C), or the theorem only guarantees the point $c$ somewhere in a <i>larger</i> interval than the one stated (e.g. for $d=1$, the guaranteed interval is $[1,8]$, not the narrower $[4,8]$ in option A), so those specific restricted statements are not forced to hold.</p>",
  "tested": "<p>The horizontal chord theorem: constructing $g(x)=f(x+d)-f(x)$ and using a telescoping sum plus the Intermediate Value Theorem, and matching the guaranteed search interval exactly.</p>",
  "trap": "Picking any shift d that divides b-a evenly and assuming any restricted sub-interval works -- the theorem only promises a root somewhere in the full interval [a, b-d]; a narrower interval in an option is not automatically covered."
},

{
  "id": "p.jam.2026.29",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 29,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.3.3.2",
    "c.9.2.1"
  ],
  "title": "Euler's constant sequence and a comparison test for an integral",
  "type": "MCQ",
  "prompt": "<p>For each positive integer $n$, let $x_n = 1+\\dfrac12+\\cdots+\\dfrac1n-\\log_e n$ and $y_n = \\displaystyle\\int_1^n \\frac{\\cos t}{t^2}\\,dt$.</p><p>Which ONE of the following statements about the sequences $(x_n)$ and $(y_n)$ is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$(x_n)$ and $(y_n)$ are convergent."
    },
    {
      "k": "B",
      "t": "$(x_n)$ is convergent and $(y_n)$ is not convergent."
    },
    {
      "k": "C",
      "t": "$(x_n)$ is not convergent and $(y_n)$ is convergent."
    },
    {
      "k": "D",
      "t": "$(x_n)$ is not convergent and $(y_n)$ is not convergent."
    }
  ],
  "answer": "A",
  "solution": "<p>$(x_n)$ is the classical sequence whose limit is the Euler&ndash;Mascheroni constant $\\gamma$: it is decreasing (each step $x_{n+1}-x_n = \\dfrac{1}{n+1}-\\log_e\\dfrac{n+1}{n} < 0$ since $\\log_e(1+1/n) > 1/(n+1)$) and bounded below by $0$, so by the Monotone Convergence Theorem $(x_n)$ converges.</p><p>For $(y_n)$, let $z_n = \\displaystyle\\int_1^n \\left|\\frac{\\cos t}{t^2}\\right|dt \\le \\int_1^n \\frac{1}{t^2}dt = 1-\\frac1n$, so $(z_n)$ is increasing and bounded above, hence convergent; this shows $\\int_1^\\infty \\left|\\dfrac{\\cos t}{t^2}\\right|dt$ converges (comparison with the convergent $\\int 1/t^2$), which forces $y_n$ itself to converge (an absolutely convergent improper integral converges).</p><p>So both $(x_n)$ and $(y_n)$ converge &mdash; option (A).</p>",
  "tested": "<p>The Monotone Convergence Theorem applied to the Euler&ndash;Mascheroni sequence, and a comparison-test argument (analogous to series comparison) showing an improper integral converges absolutely.</p>",
  "trap": "Trying to compute the exact limiting values of x_n or y_n (they are gamma and a non-elementary constant) instead of just establishing convergence via monotonicity and comparison bounds."
},

{
  "id": "p.jam.2026.31",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.8"
  ],
  "title": "Spotting local minima at $x=0$ directly from the definition",
  "type": "MSQ",
  "prompt": "<p>Which of the following functions $f:\\mathbb{R}\\to\\mathbb{R}$ has/have a local minimum at $x=0$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(x) = \\sin|x|$"
    },
    {
      "k": "B",
      "t": "$f(x) = \\sin x + \\dfrac{x^3}{6}$"
    },
    {
      "k": "C",
      "t": "$f(x) = x^4+x^2+3$"
    },
    {
      "k": "D",
      "t": "$f(x) = \\min\\{x-[x],\\ 1-x+[x]\\}$"
    }
  ],
  "answer": [
    "A",
    "C",
    "D"
  ],
  "solution": "<p><b>(A)</b> $f(0)=0$, and for small $|x|$, $\\sin|x| \\ge 0 = f(0)$ (since $|x|$ is a small nonnegative number). So $f(x)\\ge f(0)$ near $0$ &mdash; local minimum. TRUE.</p><p><b>(B)</b> Expanding, $\\sin x = x - \\dfrac{x^3}{6}+O(x^5)$, so $f(x) = x - \\dfrac{x^3}{6}+\\dfrac{x^3}{6}+O(x^5) = x+O(x^5)$. Near $0$, $f(x)\\approx x$, which is positive for $x>0$ and negative for $x<0$ &mdash; $f$ is (locally) increasing through $0$, not an extremum. FALSE.</p><p><b>(C)</b> $x^4\\ge0$ and $x^2\\ge0$ with equality only at $x=0$, so $f(x)\\ge 3=f(0)$ for all $x$, with strict inequality away from $0$ &mdash; local (indeed global) minimum. TRUE.</p><p><b>(D)</b> For $x$ slightly positive, $[x]=0$, so the two candidates are $x$ and $1-x$; for small $x>0$, $\\min(x,1-x)=x$. For $x$ slightly negative, $[x]=-1$, so the candidates are $x+1$ and $-x$; for small $|x|$, $\\min(x+1,-x)=-x$. So near $0$, $f(x)=|x|\\ge 0=f(0)$ &mdash; local minimum. TRUE.</p>",
  "tested": "<p>Directly comparing $f(x)$ to $f(0)$ near $0$, including via Taylor expansion (B) and case analysis with the floor function (D), rather than relying only on a smooth derivative test.</p>",
  "trap": "Assuming (B) has an extremum at 0 just because it looks built from sin and a cubic correction -- the leading linear term x survives after the cancellation, so f is actually monotonic near 0, not extremal."
},

{
  "id": "p.jam.2026.33",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 33,
  "marks": 2,
  "neg": 0,
  "sec": "6.1",
  "tests": [
    "c.6.1.1"
  ],
  "title": "Differentiability at a single point for four functions",
  "type": "MSQ",
  "prompt": "<p>Which of the following functions is/are differentiable at $x=1$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(x) = |x-1|^3$"
    },
    {
      "k": "B",
      "t": "$f(x) = |x^2-1|$"
    },
    {
      "k": "C",
      "t": "$f(x) = \\begin{cases} x^2 e^{-x^2}, & |x|\\le 1 \\\\ e^{-1}, & |x|>1 \\end{cases}$"
    },
    {
      "k": "D",
      "t": "$f(x) = [x]$"
    }
  ],
  "answer": [
    "A",
    "C"
  ],
  "solution": "<p><b>(A)</b> Let $u=x-1$. For $u\\ge0$, $f=u^3$ with derivative $3u^2\\to0$ as $u\\to0^+$; for $u<0$, $f=-u^3$ with derivative $-3u^2\\to0$ as $u\\to0^-$. Both one-sided derivatives equal $0$ and $f$ is continuous at $u=0$, so $f$ is differentiable at $x=1$ with $f'(1)=0$. TRUE.</p><p><b>(B)</b> Near $x=1$, $x^2-1$ changes sign, so $|x^2-1|$ has a genuine corner (V-shape) at $x=1$: for $x$ slightly less than $1$, $x^2-1<0$ so $f=1-x^2$ with derivative $\\to -2$; for $x$ slightly more than $1$, $f=x^2-1$ with derivative $\\to 2$. The one-sided derivatives disagree, so $f$ is not differentiable at $x=1$. FALSE.</p><p><b>(C)</b> At $x=1$ the two pieces agree ($1^2e^{-1}=e^{-1}$), so $f$ is continuous there. The derivative of $x^2e^{-x^2}$ is $2xe^{-x^2}-2x^3e^{-x^2}=2xe^{-x^2}(1-x^2)$, which at $x=1$ equals $0$; the derivative of the constant piece $e^{-1}$ is also $0$. Both one-sided derivatives equal $0$, so $f$ is differentiable at $x=1$. TRUE.</p><p><b>(D)</b> The floor function jumps from $0$ to $1$ at $x=1$, so it is not even continuous there, hence not differentiable. FALSE.</p>",
  "tested": "<p>Matching one-sided derivatives (and continuity) at a junction point, including for functions built from $|\\cdot|$ raised to an odd power that is high enough to smooth out the corner.</p>",
  "trap": "Assuming any expression involving |...| is automatically non-differentiable at the corner point -- |x-1|^3 is actually differentiable there because the cube kills the usual V-shaped kink."
},

{
  "id": "p.jam.2026.34",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 34,
  "marks": 2,
  "neg": 0,
  "sec": "5.1",
  "tests": [
    "c.5.1.3",
    "c.7.1.4"
  ],
  "title": "A Dirichlet-type function: continuity and non-integrability",
  "type": "MSQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be the function given by $f(x) = \\begin{cases}\\cos x, & x\\in\\mathbb{Q} \\\\ 0, & x\\notin\\mathbb{Q}\\end{cases}$.</p><p>Which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(x)$ is continuous at $0$."
    },
    {
      "k": "B",
      "t": "$f(x)$ is continuous at $\\dfrac{\\pi}{2}$."
    },
    {
      "k": "C",
      "t": "$f(x)$ is Riemann integrable on $[0,1]$ and $\\int_0^1 f(x)\\,dx = \\sin 1$."
    },
    {
      "k": "D",
      "t": "$f(x)$ is Riemann integrable on $[0,1]$ and $\\int_0^1 f(x)\\,dx = 0$."
    }
  ],
  "answer": [
    "B"
  ],
  "solution": "<p>Here $f(0)=\\cos 0=1$ (since $0\\in\\mathbb{Q}$). Take a sequence of irrationals $\\to 0$: $f=0$ along it, but $f(0)=1\\ne 0$, so by the Sequential Criterion for Continuity, $f$ is NOT continuous at $0$. (A) FALSE.</p><p>At $x=\\pi/2$ (irrational), $f(\\pi/2)=0$. Along rationals $q_n\\to\\pi/2$, $f(q_n)=\\cos q_n \\to \\cos(\\pi/2)=0$; along irrationals, $f=0\\to0$ trivially. Both types of sequences give the limit $0=f(\\pi/2)$, so $f$ IS continuous at $\\pi/2$. (B) TRUE.</p><p>On $[0,1]$, $\\cos x$ ranges over $(\\cos 1, 1] \\subset (0,1]$, so $\\cos x \\ne 0$ at every point of $[0,1]$. This means at every point $x_0\\in[0,1]$, the rational branch gives values near $\\cos x_0 \\ne 0$ while the irrational branch gives $0$ -- so $f$ is discontinuous at <i>every</i> point of $[0,1]$. A bounded function that is discontinuous everywhere on an interval fails the Riemann integrability criterion (the set of discontinuities is not of measure zero), so $f$ is NOT Riemann integrable on $[0,1]$. (C) and (D) are both FALSE.</p>",
  "tested": "<p>The Sequential Criterion for Continuity applied along two different types of sequences, and recognising when a Dirichlet-type function fails Lebesgue's Riemann-integrability criterion because it is discontinuous everywhere.</p>",
  "trap": "Checking continuity using only rational-sequence approach (which would wrongly suggest f behaves like cos x everywhere) and forgetting the irrational branch must give the same limit; or assuming integrability just because the rational branch (cos x) is itself continuous and integrable."
},

{
  "id": "p.jam.2026.41",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 41,
  "marks": 1,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence with an $(n!)^2/(2n)!$ coefficient",
  "type": "NAT",
  "prompt": "<p>The radius of convergence of the series $\\displaystyle\\sum_{n=1}^\\infty \\frac{(n!)^2}{(2n)!}(\\log_e n)^{-1}x^n$ is ______ (rounded off to one decimal place).</p>",
  "answer": {
    "value": 4,
    "tol": 0.05,
    "dp": 1
  },
  "solution": "<p>Let $a_n = \\dfrac{(n!)^2}{(2n)!}\\cdot\\dfrac{1}{\\log_e n}$. By the ratio test, the radius of convergence is $R=\\displaystyle\\lim_{n\\to\\infty}\\left|\\frac{a_n}{a_{n+1}}\\right|$.</p><p>$\\dfrac{a_{n+1}}{a_n} = \\dfrac{((n+1)!)^2}{(2n+2)!}\\cdot\\dfrac{(2n)!}{(n!)^2}\\cdot\\dfrac{\\log_e n}{\\log_e(n+1)} = \\dfrac{(n+1)^2}{(2n+2)(2n+1)}\\cdot\\dfrac{\\log_e n}{\\log_e(n+1)}$.</p><p>As $n\\to\\infty$, $\\dfrac{(n+1)^2}{(2n+2)(2n+1)} \\to \\dfrac14$ (matching leading powers of $n$), and $\\dfrac{\\log_e n}{\\log_e(n+1)}\\to 1$. So $\\dfrac{a_{n+1}}{a_n}\\to\\dfrac14$, giving $R = \\dfrac{1}{1/4} = 4$.</p>",
  "tested": "<p>The ratio test for radius of convergence, recognising that a slowly varying logarithmic factor does not affect the exponential-type ratio limit.</p>",
  "trap": "Getting distracted by the (log n)^{-1} factor and thinking it changes the radius -- its ratio tends to 1 and drops out."
},

{
  "id": "p.jam.2026.42",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 42,
  "marks": 1,
  "neg": 0,
  "sec": "8.2",
  "tests": [
    "c.8.2.4",
    "c.9.4.9"
  ],
  "title": "Term-by-term integration of a power series for $2^x$",
  "type": "NAT",
  "prompt": "<p>$\\displaystyle\\int_0^1 \\left(\\sum_{k=1}^\\infty \\frac{(\\log_e 2)^k x^{k-1}}{(k-1)!}\\right)dx = $ ______ (rounded off to one decimal place).</p>",
  "answer": {
    "value": 1,
    "tol": 0.05,
    "dp": 1
  },
  "solution": "<p>Re-index with $j=k-1\\ge0$: $\\displaystyle\\sum_{k=1}^\\infty \\frac{(\\log_e 2)^k x^{k-1}}{(k-1)!} = \\log_e 2 \\sum_{j=0}^\\infty \\frac{(\\log_e 2)^j x^j}{j!} = \\log_e 2 \\cdot e^{x\\log_e 2} = \\log_e 2 \\cdot 2^x$.</p><p>This power series converges uniformly on $[0,1]$ (it is the exponential series, uniformly convergent on any bounded interval), so term-by-term integration is valid: $\\displaystyle\\int_0^1 \\log_e 2 \\cdot 2^x\\,dx = \\left[2^x\\right]_0^1 = 2-1 = 1$.</p>",
  "tested": "<p>Recognising a power series as the Maclaurin series of $2^x$ (after re-indexing) and integrating term-by-term via uniform convergence.</p>",
  "trap": "Trying to integrate the series term-by-term first and re-summing afterward, rather than first collapsing it to the closed form log(2)*2^x -- inviting index-shift errors in the process."
},

{
  "id": "p.jam.2026.44",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 44,
  "marks": 1,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.2"
  ],
  "title": "A three-term limit resolved by Maclaurin expansions",
  "type": "NAT",
  "prompt": "<p>$\\displaystyle\\lim_{x\\to0}\\left(\\frac{1}{x}-\\frac{1}{\\sin x}+e^{\\frac{1-\\cos x}{x}}\\right) = $ ______ (rounded off to one decimal place).</p>",
  "answer": {
    "value": 1,
    "tol": 0.05,
    "dp": 1
  },
  "solution": "<p>Write $\\dfrac1x-\\dfrac1{\\sin x} = \\dfrac{\\sin x - x}{x\\sin x}$. Using $\\sin x = x-\\dfrac{x^3}{6}+O(x^5)$, the numerator $\\sin x - x = -\\dfrac{x^3}{6}+O(x^5)$, and the denominator $x\\sin x = x^2+O(x^4)$. So $\\dfrac{\\sin x-x}{x\\sin x} = -\\dfrac{x}{6}+O(x^3) \\to 0$ as $x\\to0$.</p><p>For the exponential term, $1-\\cos x = \\dfrac{x^2}{2}+O(x^4)$, so $\\dfrac{1-\\cos x}{x} = \\dfrac{x}{2}+O(x^3) \\to 0$, hence $e^{\\frac{1-\\cos x}{x}} \\to e^0 = 1$.</p><p>Adding, the limit is $0+1=1$.</p>",
  "tested": "<p>Resolving a limit built from several 0/0-type pieces by expanding each with its Maclaurin series separately, rather than treating the whole expression as one indeterminate form.</p>",
  "trap": "Trying to apply L'Hospital's Rule to the entire three-term expression at once (it is not a single 0/0 or infinity/infinity form) instead of expanding 1/x - 1/sin x and the exponent of the exponential term separately."
},

{
  "id": "p.jam.2026.48",
  "course": "ra2",
  "exam": "JAM",
  "year": 2026,
  "paper": "MA",
  "qno": 48,
  "marks": 1,
  "neg": 0,
  "sec": "7.2",
  "tests": [
    "c.7.2.5",
    "c.7.3.1"
  ],
  "title": "Integrating $|x-1|-x[x]$ over $[0,3]$",
  "type": "NAT",
  "prompt": "<p>$\\displaystyle\\int_0^3 \\big(|x-1|-x[x]\\big)\\,dx = $ ______ (rounded off to one decimal place).</p>",
  "answer": {
    "value": -4,
    "tol": 0.05,
    "dp": 1
  },
  "solution": "<p><b>Part 1:</b> $\\displaystyle\\int_0^3|x-1|\\,dx = \\int_0^1(1-x)\\,dx+\\int_1^3(x-1)\\,dx = \\left[x-\\frac{x^2}{2}\\right]_0^1 + \\left[\\frac{(x-1)^2}{2}\\right]_1^3 = 0.5 + 2 = 2.5$.</p><p><b>Part 2:</b> On $[0,3]$, the step function $[x]$ equals $0$ on $[0,1)$, $1$ on $[1,2)$, and $2$ on $[2,3)$ (the single point $x=3$ contributes nothing to the integral). Using additivity of the integral over subintervals: $$\\int_0^3 x[x]\\,dx = \\int_0^1 x\\cdot0\\,dx + \\int_1^2 x\\cdot1\\,dx + \\int_2^3 x\\cdot2\\,dx = 0 + \\left[\\frac{x^2}{2}\\right]_1^2 + 2\\left[\\frac{x^2}{2}\\right]_2^3 = 1.5 + 5 = 6.5.$$</p><p>So the required integral is $2.5 - 6.5 = -4.0$.</p>",
  "tested": "<p>Splitting an integral of a piecewise/step-function integrand at all its breakpoints and using additivity of the Riemann integral over subintervals.</p>",
  "trap": "Using only the single breakpoint x=1 (from |x-1|) for the whole integrand, and forgetting that [x] introduces its own breakpoints at every integer (x=1 and x=2) which must also be accounted for when splitting the x[x] part."
},

{
  "id": "p.jam.2025.01",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 1,
  "marks": 1,
  "neg": -0.33,
  "sec": "8.4",
  "tests": [
    "c.8.4.1"
  ],
  "title": "Series sum via the Maclaurin expansion of cosine",
  "type": "MCQ",
  "prompt": "<p>The sum of the infinite series</p>\n$$\\sum_{n=1}^{\\infty} (-1)^{n+1} \\frac{\\pi^{2n+1}}{2^{2n+1}(2n)!}$$\n<p>is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$-\\pi$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{\\pi}{4}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{\\pi}{2}$"
    },
    {
      "k": "D",
      "t": "$-\\dfrac{\\pi}{4}$"
    }
  ],
  "answer": "C",
  "solution": "<p>Write $2^{2n+1}=2\\cdot 4^n$ and $\\pi^{2n+1}=\\pi\\cdot(\\pi^2/4)^n$, so with $x=\\pi/2$ (so $x^2=\\pi^2/4$) the general term becomes</p>\n$$(-1)^{n+1}\\frac{\\pi^{2n+1}}{2^{2n+1}(2n)!} = \\frac{\\pi}{2}\\cdot(-1)^{n+1}\\frac{x^{2n}}{(2n)!}.$$\n<p>Recall the Maclaurin expansion $\\cos x = \\sum_{n=0}^{\\infty} (-1)^n \\dfrac{x^{2n}}{(2n)!}$, so</p>\n$$\\sum_{n=1}^{\\infty} (-1)^n\\frac{x^{2n}}{(2n)!} = \\cos x - 1 \\quad\\Longrightarrow\\quad \\sum_{n=1}^{\\infty} (-1)^{n+1}\\frac{x^{2n}}{(2n)!} = 1-\\cos x.$$\n<p>Hence the given sum equals $\\dfrac{\\pi}{2}(1-\\cos(\\pi/2)) = \\dfrac{\\pi}{2}(1-0) = \\dfrac{\\pi}{2}$.</p>",
  "tested": "<p>Recognising a numerical series as the Maclaurin series of $\\cos x$ evaluated at $x=\\pi/2$, after factoring out the correct power of $2$ and $\\pi$.</p>",
  "trap": "Forgetting the overall factor of pi/2 pulled out of the sum, or misindexing the series so an extra n=0 term (equal to 1) is accidentally included or excluded."
},

{
  "id": "p.jam.2025.03",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 3,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.1",
  "tests": [
    "c.6.1.1"
  ],
  "title": "Differentiability at 0 via the difference quotient",
  "type": "MCQ",
  "prompt": "<p>Let $f, g : \\mathbb{R} \\to \\mathbb{R}$ be two functions defined by</p>\n$$f(x) = \\begin{cases} x\\,|x|\\,\\left|\\sin\\dfrac{1}{x}\\right| & \\text{if } x \\ne 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}$$\n<p>and</p>\n$$g(x) = \\begin{cases} x^2\\sin\\dfrac{1}{x} + x\\cos\\dfrac{1}{x} & \\text{if } x \\ne 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is differentiable at $x=0$, and $g$ is NOT differentiable at $x=0$"
    },
    {
      "k": "B",
      "t": "$f$ is NOT differentiable at $x=0$, and $g$ is differentiable at $x=0$"
    },
    {
      "k": "C",
      "t": "$f$ is differentiable at $x=0$, and $g$ is differentiable at $x=0$"
    },
    {
      "k": "D",
      "t": "$f$ is NOT differentiable at $x=0$, and $g$ is NOT differentiable at $x=0$"
    }
  ],
  "answer": "A",
  "solution": "<p>For $f$: for $x\\ne 0$,</p>\n$$\\left|\\frac{f(x)-f(0)}{x-0}\\right| = \\left|\\frac{x|x|\\,|\\sin(1/x)|}{x}\\right| = |x|\\,\\left|\\sin\\frac{1}{x}\\right| \\le |x| \\to 0 \\text{ as } x \\to 0.$$\n<p>By the Squeeze Theorem, this difference quotient $\\to 0$, so $f$ is differentiable at $0$ with $f'(0)=0$.</p>\n<p>For $g$: for $x \\ne 0$,</p>\n$$\\frac{g(x)-g(0)}{x-0} = x\\sin\\frac{1}{x} + \\cos\\frac{1}{x}.$$\n<p>As $x \\to 0$, $x\\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $1$ and has no limit. So the difference quotient has no limit, and $g$ is NOT differentiable at $0$.</p>\n<p>Hence option (A).</p>",
  "tested": "<p>The derivative as the limit of a difference quotient; using the Squeeze Theorem to force a limit of $0$, versus recognising an oscillating quantity that has no limit at all.</p>",
  "trap": "Concluding g is differentiable because both pieces of it individually look \"small\" — the term cos(1/x) never vanishes and never settles down, so the quotient itself has no limit."
},

{
  "id": "p.jam.2025.04",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 4,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.1",
  "tests": [
    "c.5.1.1",
    "c.5.1.8"
  ],
  "title": "Continuity at 0 of oscillating functions",
  "type": "MCQ",
  "prompt": "<p>Let $f, g : \\mathbb{R} \\to \\mathbb{R}$ be two functions defined by</p>\n$$f(x) = \\begin{cases} |x|^{1/8}\\left|\\sin\\dfrac{1}{x}\\right|\\cos x & \\text{if } x \\ne 0 \\\\ 0 & \\text{if } x = 0 \\end{cases}$$\n<p>and</p>\n$$g(x) = \\begin{cases} e^{x}\\cos\\dfrac{1}{x} & \\text{if } x \\ne 0 \\\\ 1 & \\text{if } x = 0 \\end{cases}$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is continuous at $x=0$, and $g$ is NOT continuous at $x=0$"
    },
    {
      "k": "B",
      "t": "$f$ is NOT continuous at $x=0$, and $g$ is continuous at $x=0$"
    },
    {
      "k": "C",
      "t": "$f$ is continuous at $x=0$, and $g$ is continuous at $x=0$"
    },
    {
      "k": "D",
      "t": "$f$ is NOT continuous at $x=0$, and $g$ is NOT continuous at $x=0$"
    }
  ],
  "answer": "A",
  "solution": "<p>For $f$: since $\\left|\\sin(1/x)\\right|\\le 1$ and $|\\cos x|\\le 1$,</p>\n$$|f(x)| \\le |x|^{1/8} \\to 0 \\text{ as } x \\to 0,$$\n<p>so $f(x) \\to 0 = f(0)$, and $f$ is continuous at $0$.</p>\n<p>For $g$: as $x \\to 0$, $e^x \\to 1$, but $\\cos(1/x)$ oscillates and has no limit, so $g(x)=e^x\\cos(1/x)$ has no limit as $x\\to 0$ (it does not even stay bounded away from oscillation). Since $\\lim_{x\\to 0} g(x)$ does not exist, $g$ is NOT continuous at $0$ (regardless of the assigned value $g(0)=1$).</p>\n<p>Hence option (A).</p>",
  "tested": "<p>Bounding an oscillating factor by $1$ to squeeze a limit to $0$, versus recognising that $\\cos(1/x)$ multiplied by a factor tending to a nonzero constant still has no limit.</p>",
  "trap": "Treating \"cos(1/x) is bounded\" as if it were \"cos(1/x) converges\" — boundedness alone never gives continuity; the oscillation must actually be killed by a vanishing factor, as it is for f but not for g."
},

{
  "id": "p.jam.2025.17",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 17,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.1",
    "c.6.2.8"
  ],
  "title": "Counting local minima via strict convexity",
  "type": "MCQ",
  "prompt": "<p>Let $f(x) = 10x^2 + e^x - \\sin(2x) - \\cos x$, $x \\in \\mathbb{R}$. The number of points at which the function $f$ has a local minimum is</p>",
  "options": [
    {
      "k": "A",
      "t": "$0$"
    },
    {
      "k": "B",
      "t": "$1$"
    },
    {
      "k": "C",
      "t": "$2$"
    },
    {
      "k": "D",
      "t": "greater than or equal to $3$"
    }
  ],
  "answer": "B",
  "approach": "<p>Instead of solving $f'(x)=0$ directly, check the sign of $f''(x)$ — if it never vanishes, $f'$ is strictly monotone and can have at most one zero.</p>",
  "solution": "<p>We have $f'(x) = 20x + e^x - 2\\cos(2x) + \\sin x$ and $f''(x) = 20 + e^x + 4\\sin(2x) + \\cos x$.</p>\n<p>Since $|4\\sin(2x)+\\cos x| \\le 5$ and $e^x>0$ for every $x$, we get $f''(x) \\ge 20 - 5 + e^x > 15 > 0$ for all $x \\in \\mathbb{R}$. So $f$ is strictly convex everywhere, i.e. $f'$ is strictly increasing on $\\mathbb{R}$.</p>\n<p>As $x \\to -\\infty$, $f'(x) \\to -\\infty$ (the term $20x$ dominates), and as $x \\to \\infty$, $f'(x) \\to \\infty$ (the term $e^x$ eventually dominates). Since $f'$ is continuous and strictly increasing from $-\\infty$ to $\\infty$, it has exactly one zero, say $x_0$, by the Intermediate Value Theorem. Because $f'$ changes from negative to positive at $x_0$ (strict increase) and $f''>0$ there, $x_0$ is a strict local (in fact global) minimum, and it is the only critical point.</p>\n<p>So the number of local minima is $1$.</p>",
  "tested": "<p>The Interior Extremum Theorem / first-derivative test for locating relative extrema, combined with strict convexity to guarantee the critical point is unique.</p>",
  "trap": "Trying to solve f'(x)=0 explicitly — it has no closed form. The intended route is to show f'' is always positive, forcing f' to be strictly monotone."
},

{
  "id": "p.jam.2025.25",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 25,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.4"
  ],
  "title": "Series convergence via the Ratio Test with a variable ratio",
  "type": "MCQ",
  "prompt": "<p>Let $x_1 = 1$. For $n \\in \\mathbb{N}$, define</p>\n$$x_{n+1} = \\left(\\frac{1}{2} + \\frac{\\sin^2 n}{n}\\right) x_n.$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\sum_{n=1}^{\\infty} x_n$ converges"
    },
    {
      "k": "B",
      "t": "$\\sum_{n=1}^{\\infty} x_n$ does NOT converge"
    },
    {
      "k": "C",
      "t": "$\\sum_{n=1}^{\\infty} x_n^2$ does NOT converge"
    },
    {
      "k": "D",
      "t": "$\\sum_{n=1}^{\\infty} x_n x_{n+1}$ does NOT converge"
    }
  ],
  "answer": "A",
  "solution": "<p>All $x_n>0$ (an easy induction), and</p>\n$$\\frac{x_{n+1}}{x_n} = \\frac12 + \\frac{\\sin^2 n}{n} \\le \\frac12 + \\frac1n \\longrightarrow \\frac12 \\quad \\text{as } n \\to \\infty.$$\n<p>Since $\\lim \\dfrac{x_{n+1}}{x_n} = \\dfrac12 < 1$, the Ratio Test shows $\\sum x_n$ converges (absolutely, since terms are positive) — option (A) is true and (B) is false.</p>\n<p>Because $\\sum x_n$ converges, $x_n \\to 0$, and in fact $x_n$ is eventually dominated by a geometric sequence with ratio close to $\\tfrac12$; then $x_n^2$ and $x_nx_{n+1}$ are each eventually bounded by a geometric sequence with ratio close to $\\tfrac14$, so $\\sum x_n^2$ and $\\sum x_n x_{n+1}$ both converge too — ruling out (C) and (D).</p>",
  "tested": "<p>The Ratio Test for series of positive terms, applied when the ratio of consecutive terms is not constant but has a limit strictly less than $1$.</p>",
  "trap": "Worrying that the oscillating term sin^2(n)/n prevents a clean ratio test — it only contributes a piece that vanishes in the limit, so the limiting ratio is still exactly 1/2."
},

{
  "id": "p.jam.2025.29",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 29,
  "marks": 2,
  "neg": -0.66,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "A Volterra integral equation solved via the Fundamental Theorem",
  "type": "MCQ",
  "prompt": "<p>Let $\\varphi : [0, \\infty) \\to \\mathbb{R}$ be the continuous function satisfying</p>\n$$\\varphi(x) = \\left(\\int_0^x \\varphi(t)\\,dt\\right) + \\sin x, \\qquad \\text{for all } x \\in [0, \\infty).$$\n<p>Then, the value of $\\displaystyle\\lim_{x \\to \\pi/2} \\left(2\\varphi(x) - e^x\\right)$ is equal to</p>",
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
      "t": "$4$"
    }
  ],
  "answer": "A",
  "solution": "<p>Differentiating both sides using the Fundamental Theorem of Calculus (Second Form),</p>\n$$\\varphi'(x) = \\varphi(x) + \\cos x,$$\n<p>a linear first-order ODE $\\varphi' - \\varphi = \\cos x$. Using the integrating factor $e^{-x}$,</p>\n$$\\left(e^{-x}\\varphi(x)\\right)' = e^{-x}\\cos x \\quad\\Longrightarrow\\quad e^{-x}\\varphi(x) = \\frac{e^{-x}(\\sin x - \\cos x)}{2} + C.$$\n<p>So $\\varphi(x) = \\dfrac{\\sin x - \\cos x}{2} + Ce^x$. Putting $x=0$ into the original equation gives $\\varphi(0)=0$; substituting, $\\dfrac{-1}{2}+C=0$, so $C=\\dfrac12$, and</p>\n$$\\varphi(x) = \\frac{1}{2}\\left(e^x + \\sin x - \\cos x\\right).$$\n<p>At $x=\\pi/2$: $\\varphi(\\pi/2) = \\dfrac12\\left(e^{\\pi/2}+1-0\\right)$, so $2\\varphi(\\pi/2) - e^{\\pi/2} = \\left(e^{\\pi/2}+1\\right) - e^{\\pi/2} = 1$.</p>",
  "tested": "<p>Using the Fundamental Theorem of Calculus (differentiating an integral with variable upper limit) to convert an integral equation into a solvable first-order ODE.</p>",
  "trap": "Forgetting to plug x=0 back into the original integral equation to pin down phi(0)=0 — without this, the constant of integration cannot be determined."
},

{
  "id": "p.jam.2025.30",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 30,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.7",
    "c.5.3.7"
  ],
  "title": "Counting roots of an even transcendental equation",
  "type": "MCQ",
  "prompt": "<p>The number of elements in the set</p>\n$$\\{x \\in \\mathbb{R} : 8x^2 + x^4 + x^8 = \\cos x\\}$$\n<p>is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$0$"
    },
    {
      "k": "B",
      "t": "$1$"
    },
    {
      "k": "C",
      "t": "$2$"
    },
    {
      "k": "D",
      "t": "greater than or equal to $3$"
    }
  ],
  "answer": "C",
  "approach": "<p>Study $h(x) = 8x^2+x^4+x^8-\\cos x$: it is even, so count the roots on $(0,\\infty)$ and double (checking $x=0$ separately).</p>",
  "solution": "<p>Let $h(x) = 8x^2+x^4+x^8-\\cos x$. All of $x^2,x^4,x^8,\\cos x$ are even functions, so $h$ is even: $h(-x)=h(x)$.</p>\n<p>$h(0) = 0 - 1 = -1 < 0$, and as $x \\to \\pm\\infty$, $h(x) \\to \\infty$ since $x^8$ dominates while $\\cos x$ stays bounded. By the Intermediate Value Theorem, $h$ has at least one root in $(0,\\infty)$, and by evenness at least one (mirror-image) root in $(-\\infty,0)$.</p>\n<p>For $x>0$, $h'(x) = 16x+4x^3+8x^7+\\sin x$. Since $16x>0$ dominates the bounded term $\\sin x \\ge -1$ for every $x>0$ (checking directly: for $0<x<\\pi$, $\\sin x \\ge 0$ so $h'(x)>0$; for $x\\ge\\pi$, $16x \\ge 16\\pi > 1 \\ge |\\sin x|$ so $h'(x)>0$), $h$ is strictly increasing on $(0,\\infty)$. So $h$ has exactly one positive root.</p>\n<p>By evenness, $h$ has exactly one negative root as well, and $h(0)=-1\\ne 0$. Total number of solutions: $2$.</p>",
  "tested": "<p>Combining the Intermediate Value Theorem (to guarantee existence of a root) with monotonicity from the sign of the derivative (to guarantee uniqueness on each side), using evenness to halve the work.</p>",
  "trap": "Forgetting to check x=0 separately (it is not a root here), or overlooking that evenness turns a single positive root into two total real solutions."
},

{
  "id": "p.jam.2025.36",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 36,
  "marks": 2,
  "neg": 0,
  "sec": "9.2",
  "tests": [
    "c.9.2.4",
    "c.3.2.7",
    "c.3.7.3"
  ],
  "title": "Squeeze theorem and the Root Test for a sum-defined sequence",
  "type": "MSQ",
  "prompt": "<p>For $n \\in \\mathbb{N}$, let</p>\n$$x_n = \\sum_{k=1}^{n} \\frac{k}{n^2+k}.$$\n<p>Then, which of the following is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "The sequence $(x_n)$ converges"
    },
    {
      "k": "B",
      "t": "The series $\\sum_{n=1}^{\\infty} x_n$ converges"
    },
    {
      "k": "C",
      "t": "The series $\\sum_{n=1}^{\\infty} x_n$ does NOT converge"
    },
    {
      "k": "D",
      "t": "The series $\\sum_{n=1}^{\\infty} x_n^n$ converges"
    }
  ],
  "answer": [
    "A",
    "C",
    "D"
  ],
  "solution": "<p>For $1 \\le k \\le n$, $n^2+1 \\le n^2+k \\le n^2+n$, so</p>\n$$\\frac{n(n+1)/2}{n^2+n} \\le x_n \\le \\frac{n(n+1)/2}{n^2+1}, \\quad\\text{i.e.}\\quad \\frac12 \\le x_n \\le \\frac{n(n+1)/2}{n^2+1} \\to \\frac12.$$\n<p>By the Squeeze Theorem, $x_n \\to \\tfrac12$: (A) is TRUE.</p>\n<p>Since $x_n \\to \\tfrac12 \\ne 0$, the terms of $\\sum x_n$ do not tend to $0$, so by the $n$-th term test $\\sum x_n$ diverges: (B) is FALSE and (C) is TRUE.</p>\n<p>For (D): $\\left(x_n^n\\right)^{1/n} = x_n \\to \\tfrac12 < 1$, so by the Root Test $\\sum x_n^n$ converges (absolutely, since $x_n>0$): (D) is TRUE.</p>",
  "tested": "<p>The Squeeze Theorem for a sequence defined by a sum with a variable number of terms, the $n$-th term test for divergence, and the Root Test.</p>",
  "trap": "Assuming that because (x_n) converges to a limit, the series sum x_n must also converge — a sequence converging to a nonzero limit always yields a divergent series."
},

{
  "id": "p.jam.2025.37",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 37,
  "marks": 2,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.1",
    "c.6.2.4"
  ],
  "title": "Bounding derivatives with the Mean Value and Taylor theorems",
  "type": "MSQ",
  "prompt": "<p>Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a twice differentiable function such that</p>\n$$f(0)=0, \\quad f'(0)=2, \\quad \\text{and} \\quad f(1)=-3.$$\n<p>Then, which of the following is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$|f'(x)| \\le 2$ for all $x \\in [0,1]$"
    },
    {
      "k": "B",
      "t": "$|f'(x_1)| > 2$ for some $x_1 \\in [0,1]$"
    },
    {
      "k": "C",
      "t": "$|f''(x)| < 10$ for all $x \\in [0,1]$"
    },
    {
      "k": "D",
      "t": "$|f''(x_2)| \\ge 10$ for some $x_2 \\in [0,1]$"
    }
  ],
  "answer": [
    "B",
    "D"
  ],
  "solution": "<p>By the Mean Value Theorem on $[0,1]$, there is $\\xi \\in (0,1)$ with</p>\n$$f'(\\xi) = \\frac{f(1)-f(0)}{1-0} = -3, \\quad\\text{so } |f'(\\xi)| = 3 > 2.$$\n<p>This shows (B) is TRUE and (A) (claiming $|f'|\\le 2$ everywhere on $[0,1]$) is FALSE.</p>\n<p>By Taylor's Theorem with Lagrange remainder about $0$ (degree $1$), there is $c \\in (0,1)$ with</p>\n$$f(1) = f(0) + f'(0)\\cdot 1 + \\frac{f''(c)}{2}\\cdot 1^2 \\quad\\Longrightarrow\\quad -3 = 0 + 2 + \\frac{f''(c)}{2} \\quad\\Longrightarrow\\quad f''(c) = -10.$$\n<p>So $|f''(c)| = 10$ for this particular $c \\in (0,1) \\subseteq [0,1]$. This confirms (D) is TRUE and shows (C) (claiming $|f''|<10$ everywhere) is FALSE, since at $c$ the value is exactly $10$, not less than $10$.</p>",
  "tested": "<p>The Mean Value Theorem and Taylor's Theorem with Lagrange remainder, used to certify the existence of a specific point where a derivative bound is attained.</p>",
  "trap": "Reading (C) casually and thinking a bound of exactly 10 still satisfies \"< 10\" — the MVT/Taylor point gives |f''(c)|=10 exactly, which falsifies the strict inequality \"for all x\" while confirming \"for some x, >= 10\"."
},

{
  "id": "p.jam.2025.38",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 38,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.3",
    "c.6.2.4"
  ],
  "title": "Chaining the Mean Value Theorem and Rolle's Theorem",
  "type": "MSQ",
  "prompt": "<p>Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a twice differentiable function such that</p>\n$$f(0)=4, \\quad f(1)=-2, \\quad f(2)=8, \\quad \\text{and} \\quad f(3)=2.$$\n<p>Then, which of the following is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$|f'(x)| < 5$ for all $x \\in [0,1]$"
    },
    {
      "k": "B",
      "t": "$|f'(x_1)| \\ge 5$ for some $x_1 \\in [0,1]$"
    },
    {
      "k": "C",
      "t": "$f'(x_2) = 0$ for some $x_2 \\in [0,3]$"
    },
    {
      "k": "D",
      "t": "$f''(x_3) = 0$ for some $x_3 \\in [0,3]$"
    }
  ],
  "answer": [
    "B",
    "C",
    "D"
  ],
  "approach": "<p>Apply the MVT on each of the three unit sub-intervals to get three specific values of f', then look for a sign change (Rolle for f itself, via IVT on f') and a repeated value (Rolle applied to f').</p>",
  "solution": "<p>By the MVT on $[0,1]$: some $c_1 \\in (0,1)$ has $f'(c_1) = f(1)-f(0) = -6$, so $|f'(c_1)|=6 \\ge 5$: (B) TRUE, (A) FALSE.</p>\n<p>By the MVT on $[1,2]$: some $c_2 \\in (1,2)$ has $f'(c_2) = f(2)-f(1) = 10$.</p>\n<p>By the MVT on $[2,3]$: some $c_3 \\in (2,3)$ has $f'(c_3) = f(3)-f(2) = -6$.</p>\n<p>Since $f'$ is continuous, $f'(c_1)=-6<0$ and $f'(c_2)=10>0$ with $c_1<c_2$, the Intermediate Value Theorem gives some $x_2 \\in (c_1,c_2) \\subseteq [0,3]$ with $f'(x_2)=0$: (C) TRUE.</p>\n<p>Also, $f'(c_1) = f'(c_3) = -6$, and $f'$ is differentiable (since $f$ is twice differentiable) on $[c_1,c_3]$. By Rolle's Theorem applied to $f'$, there is $x_3 \\in (c_1,c_3) \\subseteq [0,3]$ with $(f')'(x_3) = f''(x_3) = 0$: (D) TRUE.</p>",
  "tested": "<p>Repeated application of the Mean Value Theorem to produce concrete values of $f'$, then Rolle's Theorem applied to $f'$ itself (rather than to $f$) to locate a zero of $f''$.</p>",
  "trap": "Missing that f'(c_1) and f'(c_3) come out equal (both -6) — that repeated value is exactly what is needed to invoke Rolle's theorem on f' and conclude f''=0 somewhere."
},

{
  "id": "p.jam.2025.41",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 41,
  "marks": 1,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence via the Cauchy–Hadamard formula",
  "type": "NAT",
  "prompt": "<p>The radius of convergence of the power series</p>\n$$\\sum_{n=1}^{\\infty} \\frac{\\left(x+\\tfrac14\\right)^n}{(-2)^n\\,n^2}$$\n<p>about $x = -\\dfrac14$, is equal to _______________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 2,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Write the series as $\\sum_{n=1}^{\\infty} a_n \\left(x+\\tfrac14\\right)^n$ with $a_n = \\dfrac{1}{(-2)^n n^2}$. Then</p>\n$$|a_n|^{1/n} = \\left(\\frac{1}{2^n n^2}\\right)^{1/n} = \\frac{1}{2}\\cdot n^{-2/n} = \\frac{1}{2}\\cdot\\left(n^{1/n}\\right)^{-2} \\longrightarrow \\frac{1}{2}\\cdot 1 = \\frac12,$$\n<p>since $n^{1/n} \\to 1$. By the Cauchy–Hadamard formula, the radius of convergence is</p>\n$$R = \\frac{1}{\\limsup |a_n|^{1/n}} = \\frac{1}{1/2} = 2.$$",
  "tested": "<p>The Cauchy–Hadamard formula for the radius of convergence of a power series, together with the standard limit $n^{1/n}\\to 1$.</p>",
  "trap": "The series is already written in powers of (x + 1/4), so \"about x = -1/4\" is exactly the given center — no re-centering or shifting is needed."
},

{
  "id": "p.jam.2025.42",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 42,
  "marks": 1,
  "neg": 0,
  "sec": "6.3",
  "tests": [
    "c.6.3.3"
  ],
  "title": "A sequence limit via standard 0/0 forms",
  "type": "NAT",
  "prompt": "<p>The value of</p>\n$$\\lim_{n \\to \\infty} 8n\\left(e^{1/(2n)}-1\\right)\\left(\\sin\\frac{1}{2n} + \\left|\\cos\\frac{1}{2n}\\right|\\right)$$\n<p>is equal to _________________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 4,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Let $h = \\dfrac{1}{2n} \\to 0$ as $n \\to \\infty$, so $8n = \\dfrac{4}{h}$. Then</p>\n$$8n\\left(e^{h}-1\\right) = 4\\cdot\\frac{e^{h}-1}{h} \\longrightarrow 4 \\cdot 1 = 4,$$\n<p>using the standard limit $\\displaystyle\\lim_{h\\to 0}\\frac{e^h-1}{h}=1$. Also,</p>\n$$\\sin h + |\\cos h| \\longrightarrow 0 + 1 = 1 \\quad \\text{as } h \\to 0.$$\n<p>So the overall limit is $4 \\cdot 1 = 4$.</p>",
  "tested": "<p>The standard limit $(e^h-1)/h \\to 1$ as $h \\to 0$ (equivalent to $\\frac{d}{dh}e^h$ at $h=0$), applied to a sequence limit via the substitution $h=1/(2n)$.</p>",
  "trap": "Forgetting to rewrite 8n as 4/h before letting h -> 0 — that rewriting is what turns the expression into the recognisable standard limit form."
},

{
  "id": "p.jam.2025.43",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 43,
  "marks": 1,
  "neg": 0,
  "sec": "6.3",
  "tests": [
    "c.6.3.3"
  ],
  "title": "Extracting a constant from a 0/0 limit",
  "type": "NAT",
  "prompt": "<p>Let $\\alpha$ be the real number such that</p>\n$$\\lim_{x \\to 0} \\frac{(1-\\cos x)\\left(2^{2+x}-4\\right)}{x^3} = \\alpha \\ln 2.$$\n<p>Then, the value of $\\alpha$ is equal to _____________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 2,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>As $x \\to 0$: $1-\\cos x \\sim \\dfrac{x^2}{2}$, and $2^{2+x}-4 = 4\\left(2^x-1\\right) \\sim 4x\\ln 2$ (using $a^x - 1 \\sim x\\ln a$ as $x \\to 0$).</p>\n<p>So the numerator behaves like $\\dfrac{x^2}{2}\\cdot 4x\\ln 2 = 2x^3 \\ln 2$, and</p>\n$$\\lim_{x\\to 0} \\frac{(1-\\cos x)(2^{2+x}-4)}{x^3} = 2\\ln 2.$$\n<p>Comparing with $\\alpha \\ln 2$, we get $\\alpha = 2$.</p>",
  "tested": "<p>First-order (Taylor / L'Hospital-equivalent) approximations of $1-\\cos x$ and $a^x-1$ near $0$, combined to evaluate a $0/0$ limit.</p>",
  "trap": "Differentiating 2^{2+x} as if it behaved like a polynomial when applying L'Hospital directly — its derivative is 2^{2+x} ln 2, not 2^{2+x}, and dropping the ln 2 factor changes the answer."
},

{
  "id": "p.jam.2025.51",
  "course": "ra2",
  "exam": "JAM",
  "year": 2025,
  "paper": "MA",
  "qno": 51,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.1",
    "c.7.3.5"
  ],
  "title": "Recognising an exact derivative inside an integral",
  "type": "NAT",
  "prompt": "<p>Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a continuous function satisfying</p>\n$$\\int_0^{\\pi/4} \\left(\\sin(x)\\,f(x) + \\cos(x)\\int_0^x f(t)\\,dt\\right) dx = \\sqrt{2}.$$\n<p>Then, the value of $\\displaystyle\\int_0^{\\pi/4} f(x)\\,dx$ is equal to _________________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 2,
    "tol": 0.01,
    "dp": 2
  },
  "approach": "<p>Let $F(x)=\\int_0^x f(t)\\,dt$ and look for a product-rule pattern: does the integrand equal $\\dfrac{d}{dx}[\\sin(x)F(x)]$?</p>",
  "solution": "<p>Let $F(x) = \\int_0^x f(t)\\,dt$, so $F'(x)=f(x)$ and $F(0)=0$ (Fundamental Theorem of Calculus). Then</p>\n$$\\frac{d}{dx}\\left[\\sin(x)F(x)\\right] = \\cos(x)F(x) + \\sin(x)F'(x) = \\cos(x)F(x) + \\sin(x)f(x),$$\n<p>which is exactly the given integrand. So</p>\n$$\\int_0^{\\pi/4}\\frac{d}{dx}\\left[\\sin(x)F(x)\\right]dx = \\Big[\\sin(x)F(x)\\Big]_0^{\\pi/4} = \\sin\\frac{\\pi}{4}\\,F\\!\\left(\\frac{\\pi}{4}\\right) - 0 = \\frac{\\sqrt2}{2}F\\!\\left(\\frac{\\pi}{4}\\right).$$\n<p>Setting this equal to $\\sqrt2$ gives $F(\\pi/4) = 2$. But $F(\\pi/4) = \\int_0^{\\pi/4} f(x)\\,dx$ is exactly the required quantity, so the answer is $2$.</p>",
  "tested": "<p>Recognising a product-rule pattern hidden inside an integral (an FTC-based shortcut) rather than attempting to solve for f explicitly.</p>",
  "trap": "Trying to determine f(x) itself, which is not uniquely pinned down by the single given equation — the trick is that the requested quantity F(pi/4) falls out directly without ever knowing f."
},

{
  "id": "p.jam.2024.14",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 14,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.9.2.4"
  ],
  "title": "Convergence of two number series",
  "type": "MCQ",
  "prompt": "<p>For $n\\in\\mathbb{N}$, let</p>\n$$a_n=\\frac{1}{(3n+2)(3n+4)} \\qquad\\text{and}\\qquad b_n=\\frac{n^3+\\cos(3^n)}{3^n+n^3}.$$\n<p>Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\sum a_n$ is convergent but $\\sum b_n$ is divergent"
    },
    {
      "k": "B",
      "t": "$\\sum a_n$ is divergent but $\\sum b_n$ is convergent"
    },
    {
      "k": "C",
      "t": "Both $\\sum a_n$ and $\\sum b_n$ are divergent"
    },
    {
      "k": "D",
      "t": "Both $\\sum a_n$ and $\\sum b_n$ are convergent"
    }
  ],
  "answer": "D",
  "solution": "<p>For $a_n$: $a_n=\\dfrac{1}{(3n+2)(3n+4)}\\sim\\dfrac{1}{9n^2}$ as $n\\to\\infty$, and $\\sum 1/n^2$ converges (p-series, $p=2$), so by the limit comparison test $\\sum a_n$ converges.</p>\n<p>For $b_n$: since $-1\\le\\cos(3^n)\\le 1$, the numerator $n^3+\\cos(3^n)$ lies between $n^3-1$ and $n^3+1$, so $0\\le b_n\\le \\dfrac{n^3+1}{3^n+n^3}\\le\\dfrac{n^3+1}{3^n}$. The series $\\sum \\dfrac{n^3+1}{3^n}$ converges by the ratio test (ratio $\\to 1/3<1$), so by comparison $\\sum b_n$ converges.</p>\n<p>Both series converge, so (D) is correct.</p>",
  "tested": "Limit comparison against a $p$-series and the ratio test for a series with an exponentially decaying, polynomially-perturbed term.",
  "trap": "Misreading cos(3^n) as cos(3n) does not change the conclusion here since the cosine term is bounded either way, but the exponent 3^n in the denominator (not 3n) is essential for b_n to be summable at all."
},

{
  "id": "p.jam.2024.19",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 19,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.1",
  "tests": [
    "c.5.1.4"
  ],
  "title": "Counting discontinuities of a folded sine function",
  "type": "MCQ",
  "prompt": "<p>For $x\\in\\mathbb{R}$, let $\\lfloor x\\rfloor$ denote the greatest integer less than or equal to $x$. For $x,y\\in\\mathbb{R}$, define</p>\n$$\\min\\{x,y\\}=\\begin{cases} x & \\text{if } x\\le y,\\\\ y & \\text{otherwise.}\\end{cases}$$\n<p>Let $f:[-2\\pi,2\\pi]\\to\\mathbb{R}$ be defined by $f(x)=\\sin(\\min\\{x,\\,x-\\lfloor x\\rfloor\\})$ for $x\\in[-2\\pi,2\\pi]$. Consider the set $S=\\{x\\in[-2\\pi,2\\pi]: f \\text{ is discontinuous at } x\\}$. Which one of the following statements is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$S$ has 13 elements"
    },
    {
      "k": "B",
      "t": "$S$ has 7 elements"
    },
    {
      "k": "C",
      "t": "$S$ is an infinite set"
    },
    {
      "k": "D",
      "t": "$S$ has 6 elements"
    }
  ],
  "answer": "D",
  "solution": "<p>Write $\\{x\\}=x-\\lfloor x\\rfloor\\in[0,1)$ for the fractional part.</p>\n<p><b>If $x<0$:</b> $\\lfloor x\\rfloor\\le -1<0$, so $\\{x\\}\\ge 0>x$, hence $\\min\\{x,\\{x\\}\\}=x$ and $f(x)=\\sin x$ throughout $[-2\\pi,0)$ — continuous, no jumps.</p>\n<p><b>If $x\\ge 1$:</b> $\\lfloor x\\rfloor\\ge 1>0$ so $\\{x\\}<x$, hence $\\min\\{x,\\{x\\}\\}=\\{x\\}$ and on each interval $[n,n+1)$ ($n\\ge1$ integer) $f(x)=\\sin(x-n)$.</p>\n<p><b>If $x\\in[0,1)$:</b> $\\{x\\}=x$ so $f(x)=\\sin x$, matching the boundary at $x=0$ continuously.</p>\n<p>Now examine each integer $n=1,2,\\dots,6$ (note $2\\pi\\approx6.283$, so these are the only integers in $[1,2\\pi)$). At $x=n$: $\\{n\\}=0<n$, so $f(n)=\\sin 0=0$. The right-hand limit as $x\\to n^+$ (branch $\\sin(x-n)$) is also $0$. But the left-hand limit as $x\\to n^-$ uses the branch on $[n-1,n)$, namely $\\sin(x-(n-1))\\to\\sin(1)\\approx0.841\\ne 0$. So $f$ jumps at every integer $n=1,\\dots,6$, giving exactly 6 points of discontinuity, and nowhere else. Hence $|S|=6$, answer (D).</p>",
  "tested": "Locating jump discontinuities by comparing one-sided limits to the function value (discontinuity criterion).",
  "trap": "Forgetting that for negative x the min is always x itself (so no folding/jumps occur there) leads to overcounting discontinuities."
},

{
  "id": "p.jam.2024.20",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 20,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1"
  ],
  "title": "Comparing two Bertrand-type series",
  "type": "MCQ",
  "prompt": "<p>Define the sequences $\\{a_n\\}_{n=3}^\\infty$ and $\\{b_n\\}_{n=3}^\\infty$ as</p>\n$$a_n=(\\log n+\\log\\log n)^{\\log n} \\qquad\\text{and}\\qquad b_n=n^{\\left(1+\\frac{1}{\\log n}\\right)}.$$\n<p>Which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\sum \\dfrac{1}{a_n}$ is convergent but $\\sum \\dfrac{1}{b_n}$ is divergent"
    },
    {
      "k": "B",
      "t": "$\\sum \\dfrac{1}{a_n}$ is divergent but $\\sum \\dfrac{1}{b_n}$ is convergent"
    },
    {
      "k": "C",
      "t": "Both $\\sum \\dfrac{1}{a_n}$ and $\\sum \\dfrac{1}{b_n}$ are divergent"
    },
    {
      "k": "D",
      "t": "Both $\\sum \\dfrac{1}{a_n}$ and $\\sum \\dfrac{1}{b_n}$ are convergent"
    }
  ],
  "answer": "A",
  "solution": "<p><b>Simplify $b_n$:</b> $b_n=n^{1+1/\\log n}=n\\cdot n^{1/\\log n}=n\\cdot e^{(\\log n)\\cdot(1/\\log n)}=n\\cdot e$. So $b_n=en$, giving $\\sum 1/b_n=\\tfrac1e\\sum 1/n$, the harmonic series, which diverges.</p>\n<p><b>Estimate $a_n$:</b> $\\log a_n=(\\log n)\\log(\\log n+\\log\\log n)$. Since $\\log\\log n\\to\\infty$ but is dominated by $\\log n$ inside the outer log, $\\log(\\log n+\\log\\log n)\\sim\\log(\\log n)=\\log\\log n$. So $\\log a_n\\sim(\\log n)(\\log\\log n)$, which exceeds $p\\log n$ for any fixed $p$ once $n$ is large (since $\\log\\log n\\to\\infty$). Hence $a_n$ eventually exceeds $n^p$ for every fixed $p$, so $1/a_n$ eventually decays faster than $1/n^2$, and by comparison with the convergent $p$-series $\\sum 1/n^2$, $\\sum 1/a_n$ converges.</p>\n<p>So $\\sum 1/a_n$ converges and $\\sum 1/b_n$ diverges — answer (A).</p>",
  "tested": "Simplifying an exponent using $n^{1/\\log n}=e$, and comparing growth rates using logarithms to apply the comparison test.",
  "trap": "Missing that $n^{1/\\log n}$ is the constant $e$ (not something growing with $n$) makes $b_n$ look far more complicated than it is."
},

{
  "id": "p.jam.2024.21",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.4"
  ],
  "title": "Ratio/root-test thresholds for two parametrised series",
  "type": "MCQ",
  "prompt": "<p>For $p,q,r\\in\\mathbb{R}$, $r\\ne 0$ and $n\\in\\mathbb{N}$, let</p>\n$$a_n=p^n\\,n^q\\left(\\frac{n}{n+2}\\right)^{n^2} \\qquad\\text{and}\\qquad b_n=\\frac{n^n}{n!\\,r^n}\\sqrt{\\frac{n+2}{n}}.$$\n<p>Then, which one of the following statements is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $1<p<e^2$ and $q>1$, then $\\sum a_n$ is convergent"
    },
    {
      "k": "B",
      "t": "If $e^2<p<e^4$ and $q>1$, then $\\sum a_n$ is convergent"
    },
    {
      "k": "C",
      "t": "If $1<r<e$, then $\\sum b_n$ is convergent"
    },
    {
      "k": "D",
      "t": "If $\\dfrac{1}{e}<r<1$, then $\\sum b_n$ is convergent"
    }
  ],
  "answer": "A",
  "solution": "<p><b>Estimate $\\left(\\frac{n}{n+2}\\right)^{n^2}$:</b> writing $\\ln\\left(1-\\frac{2}{n+2}\\right)\\approx -\\frac{2}{n+2}-\\frac{2}{(n+2)^2}+\\cdots$, one gets $n^2\\ln\\left(\\frac{n}{n+2}\\right)\\to -2n+2+o(1)$, so $\\left(\\frac{n}{n+2}\\right)^{n^2}\\sim e^2\\,e^{-2n}$. Hence $a_n\\sim e^2\\,n^q\\,(p/e^2)^n$.</p>\n<p>The polynomial factor $n^q$ never affects geometric-type convergence, so $\\sum a_n$ converges iff $p<e^2$ (ratio test on the dominant exponential part) and diverges if $p>e^2$. So (A) [$p<e^2$] is TRUE and (B) [$p>e^2$] is FALSE.</p>\n<p><b>Estimate $b_n$:</b> by Stirling, $n!\\sim\\sqrt{2\\pi n}\\,(n/e)^n$, so $n^n/n!\\sim e^n/\\sqrt{2\\pi n}$, giving $b_n\\sim (e/r)^n/\\sqrt{2\\pi n}$ (the square-root factor $\\to 1$). This converges iff $e/r<1$, i.e. $r>e$. Both (C) ($1<r<e$, so $e/r>1$) and (D) ($1/e<r<1$, so $e/r>e>1$) make the series diverge, so both are FALSE.</p>\n<p>Correct answer: (A).</p>",
  "tested": "Root/ratio-test analysis of a $1^\\infty$-type sequence raised to $n^2$, and a Stirling-based estimate for a series involving $n^n/n!$.",
  "trap": "Treating the polynomial factor $n^q$ as if it could change whether the series converges — once the base exponential ratio is $<1$, no polynomial factor prevents convergence."
},

{
  "id": "p.jam.2024.24",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 24,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.2",
  "tests": [
    "c.5.2.6"
  ],
  "title": "Composition can repair discontinuities",
  "type": "MCQ",
  "prompt": "<p>Consider the following two statements.</p>\n<p>P: There exist functions $f:\\mathbb{R}\\to\\mathbb{R}$, $g:\\mathbb{R}\\to\\mathbb{R}$ such that $f$ is continuous at $x=1$ and $g$ is discontinuous at $x=1$ but $g\\circ f$ is continuous at $x=1$.</p>\n<p>Q: There exist functions $f:\\mathbb{R}\\to\\mathbb{R}$, $g:\\mathbb{R}\\to\\mathbb{R}$ such that both $f$ and $g$ are discontinuous at $x=1$ but $g\\circ f$ is continuous at $x=1$.</p>\n<p>Which one of the following holds?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both P and Q are true"
    },
    {
      "k": "B",
      "t": "Both P and Q are false"
    },
    {
      "k": "C",
      "t": "P is true but Q is false"
    },
    {
      "k": "D",
      "t": "P is false but Q is true"
    }
  ],
  "answer": "A",
  "solution": "<p><b>P is true:</b> let $f(x)=1$ for all $x$ (constant, so continuous everywhere including at $1$) and let $g$ be any function discontinuous at $1$. Then $g\\circ f(x)=g(1)$ for every $x$ — a constant function, which is continuous everywhere.</p>\n<p><b>Q is true:</b> define $f(x)=0$ for $x\\ne 1$, $f(1)=1$ (discontinuous at $1$: the limit is $0\\ne f(1)=1$). Define $g(0)=0$, $g(1)=0$, and $g(y)=1$ for every $y\\notin\\{0,1\\}$ (discontinuous at $1$: the limit as $y\\to1$ is $1\\ne g(1)=0$). Then for $x\\ne1$, $f(x)=0$ so $g(f(x))=g(0)=0$; and at $x=1$, $f(1)=1$ so $g(f(1))=g(1)=0$. So $g\\circ f\\equiv 0$, the constant zero function — continuous at $1$ (indeed everywhere), even though both $f$ and $g$ are discontinuous there.</p>\n<p>Both P and Q are true — answer (A).</p>",
  "tested": "Understanding that the continuity-of-composition theorem is one-directional: a discontinuous outer or inner function does not force the composite to be discontinuous.",
  "trap": "Assuming that discontinuity of f or g at a point must transfer to $g\\circ f$; the composition theorem only guarantees continuity is preserved, not that discontinuity is."
},

{
  "id": "p.jam.2024.25",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 25,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.8"
  ],
  "title": "Counting local extrema of a rational function",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by $$f(x)=\\frac{(x^2+1)^2}{x^4+x^2+1}\\quad\\text{for } x\\in\\mathbb{R}.$$ Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ has exactly two points of local maxima and exactly three points of local minima"
    },
    {
      "k": "B",
      "t": "$f$ has exactly three points of local maxima and exactly two points of local minima"
    },
    {
      "k": "C",
      "t": "$f$ has exactly one point of local maximum and exactly two points of local minima"
    },
    {
      "k": "D",
      "t": "$f$ has exactly two points of local maxima and exactly one point of local minimum"
    }
  ],
  "answer": "D",
  "solution": "<p>Since $(x^2+1)^2=x^4+2x^2+1=(x^4+x^2+1)+x^2$, we get $f(x)=1+\\dfrac{x^2}{x^4+x^2+1}=1+g(x)$ where $g(x)=\\dfrac{x^2}{x^4+x^2+1}$ is even.</p>\n<p>Put $t=x^2\\ge0$: $g=\\dfrac{t}{t^2+t+1}$, so $\\dfrac{dg}{dt}=\\dfrac{(t^2+t+1)-t(2t+1)}{(t^2+t+1)^2}=\\dfrac{1-t^2}{(t^2+t+1)^2}$, which is zero at $t=1$ and is a maximum there (positive for $t<1$, negative for $t>1$); $g(1)=1/3$.</p>\n<p>Differentiating in $x$: $\\dfrac{dg}{dx}=\\dfrac{dg}{dt}\\cdot 2x=\\dfrac{(1-x^4)}{(x^4+x^2+1)^2}\\cdot 2x$, which vanishes exactly at $x=-1,0,1$. Near $x=0$ the sign of $dg/dx$ is negative for $x<0$ and positive for $x>0$ (since $1-x^4>0$ there), so $x=0$ is a local minimum. At $x=\\pm1$, $g$ (as a function of $t=x^2$) is at its peak $t=1$, giving local maxima at $x=-1$ and $x=1$, each with $f(\\pm1)=1+1/3=4/3$.</p>\n<p>So $f$ has exactly two local maxima ($x=\\pm1$) and exactly one local minimum ($x=0$) — answer (D).</p>",
  "tested": "Locating and classifying critical points via the first-derivative test after algebraically simplifying the function.",
  "trap": "Trying to differentiate the original quotient directly without simplifying $(x^2+1)^2-(x^4+x^2+1)=x^2$ first makes the critical-point equation far messier and error-prone."
},

{
  "id": "p.jam.2024.28",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 28,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.2"
  ],
  "title": "A 1^infinity limit from a regular polygon",
  "type": "MCQ",
  "prompt": "<p>For $n\\ge 3$, let a regular $n$-sided polygon $P_n$ be circumscribed by a circle of radius $R_n$ and let $r_n$ be the radius of the circle inscribed in $P_n$. Then</p>\n$$\\lim_{n\\to\\infty}\\left(\\frac{R_n}{r_n}\\right)^{n^2}$$\n<p>equals</p>",
  "options": [
    {
      "k": "A",
      "t": "$e^{(\\pi^2)}$"
    },
    {
      "k": "B",
      "t": "$e^{\\left(\\frac{\\pi^2}{2}\\right)}$"
    },
    {
      "k": "C",
      "t": "$e^{\\left(\\frac{\\pi^2}{3}\\right)}$"
    },
    {
      "k": "D",
      "t": "$e^{(2\\pi^2)}$"
    }
  ],
  "answer": "B",
  "solution": "<p>For a regular $n$-gon, $r_n=R_n\\cos(\\pi/n)$, so $R_n/r_n=\\sec(\\pi/n)$.</p>\n<p>We need $\\lim_{n\\to\\infty}\\left[\\sec(\\pi/n)\\right]^{n^2}=\\exp\\left(\\lim_{n\\to\\infty}-n^2\\ln\\cos(\\pi/n)\\right)$.</p>\n<p>Using the Taylor (Maclaurin) expansion $\\ln\\cos\\theta=-\\dfrac{\\theta^2}{2}-\\dfrac{\\theta^4}{12}-\\cdots$ with $\\theta=\\pi/n$:</p>\n$$-n^2\\ln\\cos(\\pi/n)=n^2\\left(\\frac{\\pi^2}{2n^2}+\\frac{\\pi^4}{12n^4}+\\cdots\\right)=\\frac{\\pi^2}{2}+\\frac{\\pi^4}{12n^2}+\\cdots \\longrightarrow \\frac{\\pi^2}{2}.$$\n<p>So the limit is $e^{\\pi^2/2}$ — answer (B).</p>",
  "tested": "Resolving a $1^\\infty$-type limit by Taylor-expanding cosine to enough terms to isolate the finite limiting exponent.",
  "trap": "Stopping the Taylor expansion at only the $\\theta^2$ term is fine here since the $\\theta^4$ term vanishes in the limit, but using $\\cos\\theta\\approx 1-\\theta^2/2$ without justifying that higher terms vanish is not fully rigorous."
},

{
  "id": "p.jam.2024.29",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 29,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.3"
  ],
  "title": "Rolle's theorem applied twice",
  "type": "MCQ",
  "prompt": "<p>Let $L_1$ denote the line $y=3x+2$ and $L_2$ denote the line $y=4x+3$. Suppose that $f:\\mathbb{R}\\to\\mathbb{R}$ is a four times continuously differentiable function such that the line $L_1$ intersects the curve $y=f(x)$ at exactly three distinct points and the line $L_2$ intersects the curve $y=f(x)$ at exactly four distinct points. Then, which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{df}{dx}$ does not attain the value $3$ on $\\mathbb{R}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{d^2f}{dx^2}$ vanishes at most once on $\\mathbb{R}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{d^3f}{dx^3}$ vanishes at least once on $\\mathbb{R}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{df}{dx}$ does not attain the value $\\dfrac{7}{2}$ on $\\mathbb{R}$"
    }
  ],
  "answer": "C",
  "solution": "<p>Let $h_1(x)=f(x)-(3x+2)$; it has exactly $3$ zeros, so by Rolle's theorem $h_1'(x)=f'(x)-3$ has at least $2$ zeros — so $f'=3$ is attained at least twice (ruling out (A)).</p>\n<p>Let $h_2(x)=f(x)-(4x+3)$; it has exactly $4$ zeros, so $h_2'(x)=f'(x)-4$ has at least $3$ zeros: call them $x_1<x_2<x_3$.</p>\n<p>Applying Rolle's theorem to $f'-4$ on $[x_1,x_2]$ and on $[x_2,x_3]$ gives two distinct points $z_1<z_2$ with $f''(z_1)=f''(z_2)=0$ — so $f''$ vanishes at least twice (ruling out (B)).</p>\n<p>Now apply Rolle's theorem once more to $f''$ on $[z_1,z_2]$: since $f''(z_1)=f''(z_2)=0$ and $f''$ is differentiable (as $f$ is four times continuously differentiable), there exists $w\\in(z_1,z_2)$ with $f'''(w)=0$. So $f'''$ vanishes at least once on $\\mathbb{R}$ — (C) is TRUE.</p>",
  "tested": "Chaining Rolle's theorem three times: from zeros of $f-\\ell(x)$ to zeros of $f'$, then to zeros of $f''$, then to a zero of $f'''$.",
  "trap": "Stopping after one application of Rolle's theorem (getting only that $f''$ has a zero) and missing that the problem needs a second application to reach $f'''$."
},

{
  "id": "p.jam.2024.31",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "9.1",
  "tests": [
    "c.9.1.1"
  ],
  "title": "Does convergence of a series pass to its powers?",
  "type": "MSQ",
  "prompt": "<p>Let $\\{a_n\\}_{n=1}^\\infty$ be a sequence of real numbers. Then, which of the following statements is/are always TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "If $\\sum a_n$ converges absolutely, then $\\sum a_n^2$ converges absolutely"
    },
    {
      "k": "B",
      "t": "If $\\sum a_n$ converges absolutely, then $\\sum a_n^3$ converges absolutely"
    },
    {
      "k": "C",
      "t": "If $\\sum a_n$ converges, then $\\sum a_n^2$ converges"
    },
    {
      "k": "D",
      "t": "If $\\sum a_n$ converges, then $\\sum a_n^3$ converges"
    }
  ],
  "answer": [
    "A",
    "B"
  ],
  "solution": "<p><b>(A), (B) TRUE:</b> if $\\sum |a_n|$ converges, then $a_n\\to 0$, so $|a_n|<1$ eventually. Then eventually $|a_n|^2\\le|a_n|$ and $|a_n|^3\\le|a_n|$, so $\\sum|a_n|^2$ and $\\sum|a_n|^3$ converge by comparison with the convergent series $\\sum|a_n|$.</p>\n<p><b>(C) FALSE:</b> take $a_n=(-1)^n/\\sqrt n$. Then $\\sum a_n$ converges by the alternating series test, but $a_n^2=1/n$ and $\\sum 1/n$ (the harmonic series) diverges.</p>\n<p><b>(D) FALSE:</b> a counterexample can be built in blocks. In block $k$, place one term $+k^{-1/3}$ followed by $k^2$ terms each equal to $-k^{-7/3}$. Each block sums to $k^{-1/3}-k^2\\cdot k^{-7/3}=k^{-1/3}-k^{-1/3}=0$, and the maximum partial-sum deviation within block $k$ is $k^{-1/3}\\to 0$, so $\\sum a_n$ converges (to $0$). But cubing: the spike contributes $(k^{-1/3})^3=1/k$ to $\\sum a_n^3$, and $\\sum 1/k$ diverges, while the small terms contribute only an absolutely convergent amount ($k^2$ terms of size $k^{-7}$ each). So $\\sum a_n^3$ diverges.</p>\n<p>Correct answers: A, B.</p>",
  "tested": "The role of absolute vs conditional convergence: absolute convergence is needed before raising terms to a power preserves summability.",
  "trap": "Believing that since cubing preserves sign (unlike squaring), option D \"should\" behave like A/B — conditional convergence from delicate cancellation can be destroyed by cubing just as it can by squaring."
},

{
  "id": "p.jam.2024.32",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 32,
  "marks": 2,
  "neg": 0,
  "sec": "9.2",
  "tests": [
    "c.9.2.1"
  ],
  "title": "Small-term series via asymptotic comparison",
  "type": "MSQ",
  "prompt": "<p>Which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty n\\log\\left(1+\\frac{1}{n^3}\\right)$ is convergent"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty \\left(1-\\cos\\left(\\frac1n\\right)\\right)\\log n$ is convergent"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty n^2\\log\\left(1+\\frac{1}{n^3}\\right)$ is convergent"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty \\left(1-\\cos\\left(\\frac{1}{\\sqrt n}\\right)\\right)\\log n$ is convergent"
    }
  ],
  "answer": [
    "A",
    "B"
  ],
  "solution": "<p><b>(A):</b> $\\log(1+1/n^3)\\le 1/n^3$, so the term is $\\le 1/n^2$; convergent by comparison with $\\sum 1/n^2$.</p>\n<p><b>(B):</b> $1-\\cos(1/n)\\sim \\dfrac{1}{2n^2}$, so the term $\\sim\\dfrac{\\log n}{2n^2}$. Since $\\log n$ grows slower than any positive power of $n$, $\\sum \\log n/n^2$ converges (compare with $\\sum 1/n^{1.5}$, say).</p>\n<p><b>(C):</b> $n^2\\log(1+1/n^3)\\sim n^2\\cdot\\dfrac{1}{n^3}=\\dfrac1n$, so the series behaves like the divergent harmonic series — divergent.</p>\n<p><b>(D):</b> $1-\\cos(1/\\sqrt n)\\sim \\dfrac{1}{2n}$, so the term $\\sim\\dfrac{\\log n}{2n}$, and $\\sum \\log n/n$ diverges (its partial sums grow like $(\\log n)^2$).</p>\n<p>TRUE: A, B.</p>",
  "tested": "Using small-angle/small-argument asymptotics ($\\log(1+x)\\sim x$, $1-\\cos x\\sim x^2/2$) followed by limit comparison.",
  "trap": "Forgetting the extra factor of $n$ or $n^2$ out front when estimating the order of the term — the difference between $n\\log(1+1/n^3)$ and $n^2\\log(1+1/n^3)$ is exactly what separates convergence from divergence."
},

{
  "id": "p.jam.2024.34",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 34,
  "marks": 2,
  "neg": 0,
  "sec": "5.3",
  "tests": [
    "c.5.3.7"
  ],
  "title": "A continuous interpolation of the smallest-prime-factor function",
  "type": "MSQ",
  "prompt": "<p>Let $f:(1,\\infty)\\to(0,\\infty)$ be a continuous function such that for every $n\\in\\mathbb{N}$, $f(n)$ is the smallest prime factor of $n$. Then, which of the following options is/are CORRECT?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\lim_{x\\to\\infty} f(x)$ exists"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\lim_{x\\to\\infty} f(x)$ does not exist"
    },
    {
      "k": "C",
      "t": "The set of solutions to the equation $f(x)=2024$ is finite"
    },
    {
      "k": "D",
      "t": "The set of solutions to the equation $f(x)=2024$ is infinite"
    }
  ],
  "answer": [
    "B",
    "D"
  ],
  "solution": "<p>For every power of $2$, $f(2^k)=2$ (the smallest prime factor of $2^k$ is $2$), while for a prime $p$, $f(p)=p\\to\\infty$ as $p$ ranges over the (infinitely many) primes. Since $f$ keeps returning to $2$ along one sequence while blowing up along another, $\\lim_{x\\to\\infty}f(x)$ cannot exist — (B) TRUE, (A) FALSE.</p>\n<p>For any prime $p>2024$, $f(p)=p>2024$, while at the next even integer $p+1$, $f(p+1)=2<2024$ (the smallest prime factor of an even number is $2$). Since $f$ is continuous on $[p,p+1]$ and takes a value $>2024$ at one end and $<2024$ at the other, by the Intermediate Value Theorem $f$ must equal $2024$ somewhere in $(p,p+1)$. As there are infinitely many primes $p>2024$, this produces infinitely many solutions to $f(x)=2024$ — (D) TRUE, (C) FALSE.</p>\n<p>Correct answers: B, D.</p>",
  "tested": "Using the Intermediate Value Theorem to guarantee infinitely many roots of $f(x)=c$ from oscillating boundary values at consecutive integers.",
  "trap": "Assuming that since $2024$ is not itself a prime (hence never actually a \"smallest prime factor\" at an integer), the equation $f(x)=2024$ has no solutions at all — the IVT guarantees solutions strictly between integers."
},

{
  "id": "p.jam.2024.38",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 38,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.3"
  ],
  "title": "Interlacing zeros of two power series (Bessel-type)",
  "type": "MSQ",
  "prompt": "<p>Define $f:\\mathbb{R}\\to\\mathbb{R}$ and $g:\\mathbb{R}\\to\\mathbb{R}$ as follows</p>\n$$f(x)=\\sum_{m=0}^\\infty \\frac{(-1)^m x^{2m}}{2^{2m}(m!)^2} \\qquad\\text{and}\\qquad g(x)=\\frac{x}{2}\\sum_{m=0}^\\infty \\frac{(-1)^m x^{2m}}{2^{2m}(m+1)!\\,m!} \\quad\\text{for } x\\in\\mathbb{R}.$$\n<p>Let $x_1,x_2,x_3,x_4\\in\\mathbb{R}$ be such that $0<x_1<x_2$, $0<x_3<x_4$,</p>\n$$f(x_1)=f(x_2)=0, \\quad f(x)\\ne 0 \\text{ when } x_1<x<x_2,$$\n$$g(x_3)=g(x_4)=0 \\quad\\text{and}\\quad g(x)\\ne 0 \\text{ when } x_3<x<x_4.$$\n<p>Then, which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "The function $f$ does not vanish anywhere in the interval $(x_3,x_4)$"
    },
    {
      "k": "B",
      "t": "The function $f$ vanishes exactly once in the interval $(x_3,x_4)$"
    },
    {
      "k": "C",
      "t": "The function $g$ does not vanish anywhere in the interval $(x_1,x_2)$"
    },
    {
      "k": "D",
      "t": "The function $g$ vanishes exactly once in the interval $(x_1,x_2)$"
    }
  ],
  "answer": [
    "B",
    "D"
  ],
  "solution": "<p>Term-by-term differentiation shows $f'(x)=-g(x)$ (differentiating the series for $f$ and matching it to the series for $g$). Since $f(x_1)=f(x_2)=0$ with $x_1<x_2$ consecutive zeros of $f$, Rolle's theorem applied to $f$ on $[x_1,x_2]$ gives a point $c\\in(x_1,x_2)$ with $f'(c)=0$, i.e. $g(c)=0$: so $g$ has at least one zero in $(x_1,x_2)$, ruling out (C).</p>\n<p>These functions are the classical Bessel functions $f=J_0$, $g=J_1$ (their defining power series), and it is a standard fact about Bessel functions that the positive zeros of $J_0$ and $J_1$ strictly interlace: exactly one zero of $J_1$ lies between consecutive zeros of $J_0$, and exactly one zero of $J_0$ lies between consecutive zeros of $J_1$. Applying this: $g=J_1$ vanishes exactly once in $(x_1,x_2)$ (consecutive zeros of $f=J_0$), giving (D) TRUE, and $f=J_0$ vanishes exactly once in $(x_3,x_4)$ (consecutive zeros of $g=J_1$), giving (B) TRUE and (A) FALSE.</p>",
  "tested": "Applying Rolle's theorem to a function and its derivative to locate a zero, in the setting of the classical Bessel-function zero-interlacing theorem.",
  "trap": "Rolle's theorem alone only guarantees \"at least one\" zero in the open interval; concluding \"exactly one\" additionally relies on the (nontrivial) interlacing property of these particular functions, which is the part worth flagging as beyond a first Rolle's-theorem argument."
},

{
  "id": "p.jam.2024.52",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 52,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.1"
  ],
  "title": "Log-growth comparison of a limit involving an oscillating integral",
  "type": "NAT",
  "prompt": "<p>The value of</p>\n$$\\lim_{t\\to\\infty}\\left(\\left(\\log\\left(t^2+\\frac{1}{t^2}\\right)\\right)^{-1}\\int_1^{\\pi t}\\frac{\\sin^2 5x}{x}\\,dx\\right)$$\n<p>equals ___________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 0.25,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Use $\\sin^2(5x)=\\dfrac{1-\\cos(10x)}{2}$:</p>\n$$\\int_1^{\\pi t}\\frac{\\sin^2 5x}{x}\\,dx=\\frac12\\int_1^{\\pi t}\\frac{dx}{x}-\\frac12\\int_1^{\\pi t}\\frac{\\cos(10x)}{x}\\,dx = \\frac12\\ln(\\pi t) - \\frac12 I(t),$$\n<p>where $I(t)=\\int_1^{\\pi t}\\frac{\\cos(10x)}{x}\\,dx$. By Dirichlet's test (the oscillating $\\cos(10x)$ has bounded antiderivative, and $1/x\\downarrow0$), $I(t)$ converges to a finite limit as $t\\to\\infty$; it contributes only a bounded $O(1)$ term.</p>\n<p>So the numerator is $\\frac12\\ln t + O(1)$. The denominator is $\\log(t^2+1/t^2)=\\log\\left(t^2(1+1/t^4)\\right)=2\\ln t+o(1)$.</p>\n<p>Dividing numerator and denominator by $\\ln t$ and letting $t\\to\\infty$, the bounded terms vanish, leaving</p>\n$$\\lim_{t\\to\\infty}\\frac{\\tfrac12\\ln t+O(1)}{2\\ln t+o(1)}=\\frac{1/2}{2}=\\frac14=0.25.$$",
  "tested": "Comparing the logarithmic growth rate of a numerator (built from an oscillating-but-bounded integral plus a $\\ln$ term) against a $\\ln$-growth denominator.",
  "trap": "Trying to apply L'Hospital's rule directly in $t$ is tempting since both sides diverge, but differentiating the integral produces an oscillating $\\sin^2(5\\pi t)/t$ term with no limit — the decomposition into $\\ln(\\pi t)$ plus a bounded oscillatory piece is the reliable route."
},

{
  "id": "p.jam.2024.55",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 55,
  "marks": 2,
  "neg": 0,
  "sec": "7.1",
  "tests": [
    "c.7.1.1"
  ],
  "title": "A sum that is secretly a Riemann sum",
  "type": "NAT",
  "prompt": "<p>For $n\\in\\mathbb{N}$, if</p>\n$$a_n=\\frac{1}{n^3+1}+\\frac{2^2}{n^3+2}+\\cdots+\\frac{n^2}{n^3+n}$$\n<p>then the sequence $\\{a_n\\}_{n=1}^\\infty$ converges to ____________ (rounded off to two decimal places)</p>",
  "answer": {
    "value": 0.33,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Write $a_n=\\displaystyle\\sum_{k=1}^n \\frac{k^2}{n^3+k}$. For $1\\le k\\le n$, $\\dfrac{k}{n^3}\\le\\dfrac{1}{n^2}\\to0$ uniformly in $k$, so</p>\n$$\\frac{k^2}{n^3+k}=\\frac{k^2}{n^3}\\cdot\\frac{1}{1+k/n^3} = \\frac{k^2}{n^3}\\left(1-\\frac{k}{n^3}+O\\!\\left(\\frac{1}{n^4}\\right)\\right).$$\n<p>Summing, the correction terms contribute at most $\\displaystyle\\sum_{k=1}^n \\frac{k^3}{n^6}\\le \\frac{n\\cdot n^3}{n^6}=\\frac1{n^2}\\to0$, so</p>\n$$a_n = \\sum_{k=1}^n\\frac{k^2}{n^3}+o(1) = \\frac1n\\sum_{k=1}^n\\left(\\frac{k}{n}\\right)^2 + o(1) \\longrightarrow \\int_0^1 x^2\\,dx = \\frac13.$$\n<p>So $a_n\\to 1/3\\approx 0.33$.</p>",
  "tested": "Recognising a sum as a Riemann sum for $\\int_0^1 x^2\\,dx$ after controlling the perturbation term.",
  "trap": "Only approximating $\\dfrac{k^2}{n^3+k}\\approx\\dfrac{k^2}{n^3}$ without checking that the correction terms vanish in the limit — here they do, but that needs a short justification, not just a hand-wave."
},

{
  "id": "p.jam.2024.56",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 56,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.8",
    "c.5.3.7"
  ],
  "title": "Counting roots of a cubic at three levels",
  "type": "NAT",
  "prompt": "<p>Consider the function $f:\\mathbb{R}\\to\\mathbb{R}$ given by $f(x)=x^3-4x^2+4x-6$. For $c\\in\\mathbb{R}$, let</p>\n$$S(c)=\\{x\\in\\mathbb{R} : f(x)=c\\}$$\n<p>and $|S(c)|$ denote the number of elements in $S(c)$. Then, the value of</p>\n$$|S(-7)|+|S(-5)|+|S(3)|$$\n<p>equals _________</p>",
  "answer": {
    "value": 5,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>$f'(x)=3x^2-8x+4=(3x-2)(x-2)$, so the critical points are $x=2/3$ and $x=2$.</p>\n<p>$f(2/3)=\\dfrac{8}{27}-\\dfrac{16}{9}+\\dfrac{8}{3}-6=\\dfrac{8-48+72-162}{27}=-\\dfrac{130}{27}\\approx-4.81$ (local maximum, since $f'$ changes from $+$ to $-$ there).</p>\n<p>$f(2)=8-16+8-6=-6$ (local minimum).</p>\n<p>Since $f$ is a cubic with positive leading coefficient, increasing to the local max at $x=2/3$ ($\\approx-4.81$), decreasing to the local min at $x=2$ ($=-6$), then increasing to $+\\infty$: $f(x)=c$ has $3$ real solutions when the local min value $<c<$ the local max value, i.e. $-6<c<-4.81$, and exactly $1$ real solution when $c<-6$ or $c>-4.81$.</p>\n<p>$c=-7<-6$: $|S(-7)|=1$.<br>$c=-5$: since $-6<-5<-4.81$, $|S(-5)|=3$.<br>$c=3>-4.81$: $|S(3)|=1$.</p>\n<p>Sum $=1+3+1=5$.</p>",
  "tested": "Using local extrema of a cubic (first-derivative test) together with the shape of the graph to count solutions of $f(x)=c$ for different $c$ — an application of the Intermediate Value Theorem on each monotone piece.",
  "trap": "Miscomparing $-5$ against the local extreme values: since $-4.81$ is a negative number, $-5$ (being more negative) is actually *below* it, i.e. $-5\\in(-6,-4.81)$, which is easy to get backwards when comparing negative numbers."
},

{
  "id": "p.jam.2024.60",
  "course": "ra2",
  "exam": "JAM",
  "year": 2024,
  "paper": "MA",
  "qno": 60,
  "marks": 2,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.2"
  ],
  "title": "Taylor coefficient of (arcsin x)^2",
  "type": "NAT",
  "prompt": "<p>Define the function $f:(-1,1)\\to\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$ by $$f(x)=\\sin^{-1}x.$$ Let $a_6$ denote the coefficient of $x^6$ in the Taylor series of $(f(x))^2$ about $x=0$. Then, the value of $9a_6$ equals ____________ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 1.6,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>The Maclaurin series of $(\\arcsin x)^2$ is the classical expansion</p>\n$$(\\arcsin x)^2 = \\frac12\\sum_{n=1}^\\infty \\frac{(2x)^{2n}}{n^2\\binom{2n}{n}} = x^2+\\frac{x^4}{3}+\\frac{8x^6}{45}+\\cdots$$\n<p>(check: the $n=1$ term gives $\\tfrac12\\cdot\\tfrac{4x^2}{1\\cdot2}=x^2$; the $n=2$ term gives $\\tfrac12\\cdot\\tfrac{16x^4}{4\\cdot6}=\\tfrac{x^4}{3}$; the $n=3$ term gives $\\tfrac12\\cdot\\tfrac{64x^6}{9\\cdot20}=\\tfrac{8x^6}{45}$).</p>\n<p>So $a_6=\\dfrac{8}{45}$, and $9a_6=9\\cdot\\dfrac{8}{45}=\\dfrac{72}{45}=\\dfrac{8}{5}=1.6$.</p>",
  "tested": "Recalling or deriving the Maclaurin series for $(\\arcsin x)^2$ and reading off a specific coefficient.",
  "trap": "Confusing the series for $(\\arcsin x)^2$ with the series for $\\arcsin x$ itself (whose $x^6$ coefficient, $3/40$ shifted, is a different number entirely) — the question asks about the square."
},

{
  "id": "p.jam.2023.06",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 6,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.3",
  "tests": [
    "c.6.3.3",
    "c.7.3.5"
  ],
  "title": "L'Hospital's rule on a ratio of variable-limit integrals",
  "type": "MCQ",
  "prompt": "<p>The limit</p>\n$$\\lim_{a\\to 0} \\frac{\\displaystyle\\int_0^a \\sin(x^2)\\,dx}{\\displaystyle\\int_0^a (\\ln(x+1))^2\\,dx}$$\n<p>is</p>",
  "options": [
    {
      "k": "A",
      "t": "$0$"
    },
    {
      "k": "B",
      "t": "$1$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{\\pi}{e}$"
    },
    {
      "k": "D",
      "t": "non-existent"
    }
  ],
  "answer": "B",
  "solution": "<p>Write $N(a)=\\displaystyle\\int_0^a \\sin(x^2)\\,dx$ and $D(a)=\\displaystyle\\int_0^a (\\ln(x+1))^2\\,dx$. As $a\\to 0$, both $N(a)\\to 0$ and $D(a)\\to 0$, so the quotient is a $0/0$ form and L'Hospital's Rule applies.</p>\n<p>By the Fundamental Theorem of Calculus (differentiation of an integral with variable upper limit), $N'(a)=\\sin(a^2)$ and $D'(a)=(\\ln(a+1))^2$. Hence</p>\n$$\\lim_{a\\to 0}\\frac{N(a)}{D(a)} = \\lim_{a\\to 0}\\frac{\\sin(a^2)}{(\\ln(1+a))^2}.$$\n<p>Using the standard small-argument behaviour $\\sin(a^2)\\sim a^2$ and $\\ln(1+a)\\sim a$ (so $(\\ln(1+a))^2 \\sim a^2$) as $a\\to 0$, the ratio tends to $\\dfrac{a^2}{a^2}\\to 1$.</p>\n<p>So the limit equals $1$. Option (A) would result from ignoring that both integrands are equivalent to the same order near $0$; option (C) has no basis; option (D) is wrong because both derivatives are continuous and the denominator's derivative is nonzero for small $a\\ne 0$, so L'Hospital is validly applicable and gives a finite limit.</p>",
  "tested": "L'Hospital's Rule for $0/0$ forms, combined with the Fundamental Theorem of Calculus (Second Form) to differentiate a variable-limit integral before applying it.",
  "trap": "Trying to evaluate the two integrals in closed form (they have no elementary antiderivative) instead of differentiating under the integral sign via FTC and then applying L'Hospital directly to the derivatives."
},

{
  "id": "p.jam.2023.11",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 11,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.9.2.6"
  ],
  "title": "Comparison test on $\\sum \\sin(1/n^3)$ versus $\\sum \\sin(1/n)$",
  "type": "MCQ",
  "prompt": "<p>Let $a_n = \\sin\\!\\left(\\dfrac{1}{n^3}\\right)$ and $b_n = \\sin\\!\\left(\\dfrac{1}{n}\\right)$ for $n\\in\\mathbb{N}$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "both $\\displaystyle\\sum_{n=1}^\\infty a_n$ and $\\displaystyle\\sum_{n=1}^\\infty b_n$ are convergent"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty a_n$ is convergent but $\\displaystyle\\sum_{n=1}^\\infty b_n$ is NOT convergent"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty a_n$ is NOT convergent but $\\displaystyle\\sum_{n=1}^\\infty b_n$ is convergent"
    },
    {
      "k": "D",
      "t": "both $\\displaystyle\\sum_{n=1}^\\infty a_n$ and $\\displaystyle\\sum_{n=1}^\\infty b_n$ are NOT convergent"
    }
  ],
  "answer": "B",
  "solution": "<p>For small positive $\\theta$, $\\sin\\theta \\sim \\theta$, i.e. $\\lim_{\\theta\\to 0}\\dfrac{\\sin\\theta}{\\theta}=1$, and $\\sin\\theta>0$ for $\\theta\\in(0,\\pi)$.</p>\n<p><b>$a_n$:</b> $\\displaystyle\\lim_{n\\to\\infty}\\frac{a_n}{1/n^3} = \\lim_{n\\to\\infty}\\frac{\\sin(1/n^3)}{1/n^3}=1$, a finite nonzero limit. Since $\\sum \\dfrac{1}{n^3}$ is a convergent $p$-series ($p=3>1$), the Limit Comparison Test gives $\\sum a_n$ convergent.</p>\n<p><b>$b_n$:</b> Similarly $\\displaystyle\\lim_{n\\to\\infty}\\frac{b_n}{1/n} = 1$. Since $\\sum \\dfrac{1}{n}$ is the divergent harmonic series, the Limit Comparison Test gives $\\sum b_n$ NOT convergent.</p>\n<p>Hence option (B).</p>",
  "tested": "The Limit Comparison Test, using $\\sin\\theta\\sim\\theta$ to compare against the $p$-series $1/n^3$ (convergent) and $1/n$ (divergent).",
  "trap": "Treating $\\sin(1/n)$ as \"small so it should converge\" without comparing it to the correct benchmark series — it is asymptotically the harmonic series, which diverges."
},

{
  "id": "p.jam.2023.19",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 19,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.3.7.6"
  ],
  "title": "Sequence of running averages of $1/k^2$ versus its series",
  "type": "MCQ",
  "prompt": "<p>Let $a_n = \\dfrac{1+2^{-2}+\\cdots+n^{-2}}{n}$ for $n\\in\\mathbb{N}$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "both the sequence $(a_n)$ and the series $\\displaystyle\\sum_{n=1}^\\infty a_n$ are convergent"
    },
    {
      "k": "B",
      "t": "the sequence $(a_n)$ is convergent but the series $\\displaystyle\\sum_{n=1}^\\infty a_n$ is NOT convergent"
    },
    {
      "k": "C",
      "t": "both the sequence $(a_n)$ and the series $\\displaystyle\\sum_{n=1}^\\infty a_n$ are NOT convergent"
    },
    {
      "k": "D",
      "t": "the sequence $(a_n)$ is NOT convergent but the series $\\displaystyle\\sum_{n=1}^\\infty a_n$ is convergent"
    }
  ],
  "answer": "B",
  "solution": "<p>Let $S_n = \\displaystyle\\sum_{k=1}^n \\frac{1}{k^2}$, so $a_n=S_n/n$. Since $\\sum 1/k^2$ is a convergent $p$-series ($p=2$), $(S_n)$ is an increasing sequence converging to a finite limit $L=\\pi^2/6$.</p>\n<p><b>Sequence $(a_n)$:</b> Since $S_n\\to L$ (bounded), $a_n = S_n/n \\to L\\cdot 0 = 0$. So $(a_n)$ IS convergent (to $0$).</p>\n<p><b>Series $\\sum a_n$:</b> Since $S_n \\ge S_1 = 1$ for all $n$, we have $a_n = S_n/n \\ge 1/n$ for every $n$. Since $\\sum 1/n$ (harmonic series) diverges, the Comparison Test gives $\\sum a_n$ NOT convergent.</p>\n<p>Hence option (B): the sequence converges but the series does not.</p>",
  "tested": "Distinguishing sequence convergence from series convergence — here $a_n\\to 0$, yet $a_n$ decays only like a constant times $1/n$, which is exactly the borderline harmonic rate, so the series still diverges.",
  "trap": "Concluding the series converges merely because the terms $a_n\\to 0$ — the $n$-th Term Test only rules out convergence when terms do NOT go to $0$; it never certifies convergence."
},

{
  "id": "p.jam.2023.20",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 20,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Where a power series must converge, given convergence at one point",
  "type": "MCQ",
  "prompt": "<p>Let $(a_n)$ be a sequence of real numbers such that the series $\\displaystyle\\sum_{n=0}^\\infty a_n(x-2)^n$ converges at $x=-5$. Then this series also converges at</p>",
  "options": [
    {
      "k": "A",
      "t": "$x=9$"
    },
    {
      "k": "B",
      "t": "$x=12$"
    },
    {
      "k": "C",
      "t": "$x=5$"
    },
    {
      "k": "D",
      "t": "$x=-6$"
    }
  ],
  "answer": "C",
  "solution": "<p>The series is centred at $c=2$. It converges at $x_0=-5$, a distance $|x_0-c| = |-5-2| = 7$ from the centre. By the basic theory of power series (Cauchy&ndash;Hadamard / Abel), if a power series converges at some point $x_0$, it converges absolutely at every point $x$ with $|x-c| < |x_0-c|$; that is, the radius of convergence $R$ satisfies $R \\ge 7$.</p>\n<p>Now check distances from the centre $c=2$ for each option:</p>\n<ul>\n<li>$x=9$: distance $=7$ (on the boundary — not guaranteed).</li>\n<li>$x=12$: distance $=10 > 7$ (outside the guaranteed disk — not guaranteed).</li>\n<li>$x=5$: distance $=3 < 7$ (strictly inside — guaranteed convergent).</li>\n<li>$x=-6$: distance $=8 > 7$ (outside the guaranteed disk — not guaranteed).</li>\n</ul>\n<p>Only $x=5$ is guaranteed to converge. Answer (C).</p>",
  "tested": "The radius-of-convergence property of power series: convergence at one point guarantees convergence everywhere strictly closer to the centre.",
  "trap": "Picking $x=9$ because it is \"symmetric\" to $x=-5$ about the centre — the theorem only guarantees convergence strictly inside the radius, not exactly on the boundary at the same distance."
},

{
  "id": "p.jam.2023.24",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 24,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.2"
  ],
  "title": "Symmetry of a power series from an integral formula for its coefficients",
  "type": "MCQ",
  "prompt": "<p>Suppose $f:(-1,1)\\to\\mathbb{R}$ is an infinitely differentiable function such that the series $\\displaystyle\\sum_{j=0}^\\infty a_j\\frac{x^j}{j!}$ converges to $f(x)$ for each $x\\in(-1,1)$, where</p>\n$$a_j = \\int_0^{\\pi/2} \\theta^j \\cos^j(\\tan\\theta)\\,d\\theta + \\int_{\\pi/2}^{\\pi} (\\theta-\\pi)^j \\cos^j(\\tan\\theta)\\,d\\theta$$\n<p>for $j\\ge 0$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(x)=0$ for all $x\\in(-1,1)$"
    },
    {
      "k": "B",
      "t": "$f$ is a non-constant even function on $(-1,1)$"
    },
    {
      "k": "C",
      "t": "$f$ is a non-constant odd function on $(-1,1)$"
    },
    {
      "k": "D",
      "t": "$f$ is NEITHER an odd function NOR an even function on $(-1,1)$"
    }
  ],
  "answer": "B",
  "solution": "<p>In the second integral substitute $\\varphi = \\pi-\\theta$ (so $\\theta=\\pi-\\varphi$, $d\\theta=-d\\varphi$; as $\\theta$ runs from $\\pi/2$ to $\\pi$, $\\varphi$ runs from $\\pi/2$ to $0$). Then $\\theta-\\pi=-\\varphi$, and $\\tan\\theta = \\tan(\\pi-\\varphi) = -\\tan\\varphi$, so $\\cos(\\tan\\theta)=\\cos(-\\tan\\varphi)=\\cos(\\tan\\varphi)$ (cosine is even). Hence</p>\n$$\\int_{\\pi/2}^{\\pi}(\\theta-\\pi)^j\\cos^j(\\tan\\theta)\\,d\\theta = \\int_0^{\\pi/2}(-\\varphi)^j\\cos^j(\\tan\\varphi)\\,d\\varphi = (-1)^j\\int_0^{\\pi/2}\\varphi^j\\cos^j(\\tan\\varphi)\\,d\\varphi.$$\n<p>So $a_j = \\left[1+(-1)^j\\right]\\displaystyle\\int_0^{\\pi/2}\\theta^j\\cos^j(\\tan\\theta)\\,d\\theta$. For $j$ odd this bracket is $0$, so $a_j=0$ for all odd $j$. For $j$ even, $a_j = 2\\displaystyle\\int_0^{\\pi/2}\\theta^j\\cos^j(\\tan\\theta)\\,d\\theta$.</p>\n<p>In particular $a_0 = 2\\int_0^{\\pi/2}d\\theta = \\pi \\ne 0$ and $a_2 = 2\\int_0^{\\pi/2}\\theta^2\\cos^2(\\tan\\theta)\\,d\\theta>0$ (a positive integrand), so $f$ has at least two nonzero even-order coefficients.</p>\n<p>Since only even powers of $x$ appear in the series for $f$, $f$ is an even function; since more than one coefficient ($a_0$ and $a_2$) is nonzero, $f$ is not constant. Answer (B).</p>",
  "tested": "Uniqueness of a power series representation of an infinitely differentiable function (the $a_j$ here play the role of $f^{(j)}(0)$ in the Maclaurin expansion), combined with a symmetry substitution to show all odd-order coefficients vanish.",
  "trap": "Assuming $f\\equiv 0$ because the two integrals \"look like they might cancel\" — they only cancel the odd-$j$ terms, not $a_0$ itself, so $f$ is a genuine non-constant even function, not the zero function."
},

{
  "id": "p.jam.2023.25",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 25,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.1"
  ],
  "title": "Comparing $\\cos x$ with its second-order Taylor polynomial",
  "type": "MCQ",
  "prompt": "<p>Let $f(x)=\\cos(x)$ and $g(x) = 1-\\dfrac{x^2}{2}$ for $x\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(x)\\ge g(x)$ for all $x\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$"
    },
    {
      "k": "B",
      "t": "$f(x)\\le g(x)$ for all $x\\in\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$"
    },
    {
      "k": "C",
      "t": "$f(x)-g(x)$ changes sign exactly once on $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$"
    },
    {
      "k": "D",
      "t": "$f(x)-g(x)$ changes sign more than once on $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$"
    }
  ],
  "answer": "A",
  "solution": "<p>$g$ is exactly the second-order Maclaurin (Taylor) polynomial of $\\cos x$ about $0$: $g(x) = f(0)+f'(0)x+\\dfrac{f''(0)}{2!}x^2$ since $f(0)=1$, $f'(0)=-\\sin(0)=0$, $f''(0)=-\\cos(0)=-1$.</p>\n<p>By Taylor's Theorem with Lagrange remainder (order $2$, using $f'''(x)=\\sin x$):</p>\n$$f(x)-g(x) = \\frac{f'''(c)}{3!}x^3 = \\frac{\\sin(c)}{6}x^3$$\n<p>for some $c$ strictly between $0$ and $x$.</p>\n<p><b>Case $x>0$:</b> then $c\\in(0,x)\\subset(0,\\pi/2)$, so $\\sin(c)>0$; and $x^3>0$. So $f(x)-g(x)>0$.</p>\n<p><b>Case $x<0$:</b> then $c\\in(x,0)\\subset(-\\pi/2,0)$, so $\\sin(c)<0$; and $x^3<0$. The product of two negatives is positive, so $f(x)-g(x)>0$ again.</p>\n<p><b>Case $x=0$:</b> $f(0)-g(0)=0$.</p>\n<p>So $f(x)\\ge g(x)$ throughout $\\left(-\\dfrac{\\pi}{2},\\dfrac{\\pi}{2}\\right)$, with equality only at $x=0$. Answer (A).</p>",
  "tested": "Taylor's Theorem with Lagrange remainder, used to control the sign of $f(x)-g(x)$ rather than just estimate its size.",
  "trap": "Only checking the sign of the remainder for $x>0$ and assuming it flips for $x<0$ because $x^3$ changes sign — the sign of $\\sin(c)$ also flips there, so the two sign changes cancel and $f-g$ stays $\\ge 0$ throughout."
},

{
  "id": "p.jam.2023.28",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 28,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.4",
    "c.6.2.7"
  ],
  "title": "Sign of a strictly concave function vanishing at both endpoints",
  "type": "MCQ",
  "prompt": "<p>Let $y:\\mathbb{R}\\to\\mathbb{R}$ be a twice differentiable function such that $y''$ is continuous on $[0,1]$ and $y(0)=y(1)=0$. Suppose $y''(x)+x^2 < 0$ for all $x\\in[0,1]$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$y(x)>0$ for all $x\\in(0,1)$"
    },
    {
      "k": "B",
      "t": "$y(x)<0$ for all $x\\in(0,1)$"
    },
    {
      "k": "C",
      "t": "$y(x)=0$ has exactly one solution in $(0,1)$"
    },
    {
      "k": "D",
      "t": "$y(x)=0$ has more than one solution in $(0,1)$"
    }
  ],
  "answer": "A",
  "solution": "<p>Since $y''(x) < -x^2 \\le 0$ for all $x\\in[0,1]$, we have $y''(x)<0$ everywhere on $[0,1]$ (strictly), so $y'$ is strictly decreasing on $[0,1]$ (Monotonicity Criterion for Differentiable Functions).</p>\n<p>Suppose, for contradiction, that $y(x_0)\\le 0$ for some $x_0\\in(0,1)$. Apply the Mean Value Theorem on $[0,x_0]$: there is $c_1\\in(0,x_0)$ with $y'(c_1)=\\dfrac{y(x_0)-y(0)}{x_0-0}=\\dfrac{y(x_0)}{x_0}\\le 0$. Apply the MVT on $[x_0,1]$: there is $c_2\\in(x_0,1)$ with $y'(c_2)=\\dfrac{y(1)-y(x_0)}{1-x_0}=\\dfrac{-y(x_0)}{1-x_0}\\ge 0$.</p>\n<p>Since $c_1<x_0<c_2$ and $y'$ is strictly decreasing, we must have $y'(c_1)>y'(c_2)$. But we derived $y'(c_1)\\le 0 \\le y'(c_2)$, i.e. $y'(c_1)\\le y'(c_2)$ &mdash; a contradiction unless $y(x_0)=0$ forces $y'(c_1)=y'(c_2)=0$, which is impossible for a strictly decreasing function at two distinct points $c_1<c_2$.</p>\n<p>So no $x_0\\in(0,1)$ can satisfy $y(x_0)\\le 0$; hence $y(x)>0$ throughout $(0,1)$. Answer (A).</p>",
  "tested": "Combining the Mean Value Theorem (applied on two subintervals) with strict monotonicity of the derivative (itself a consequence of $y''<0$) to pin down the sign of $y$ between two zeros.",
  "trap": "Concluding only that $y$ is concave and \"therefore non-negative\" without the MVT argument to rule out $y(x_0)=0$ at some interior point — concavity alone only gives $y\\ge 0$ on the chord, not strict positivity, which needs the strict inequality $y''<-x^2$."
},

{
  "id": "p.jam.2023.30",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 30,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.3"
  ],
  "title": "Bounding the zeros of $f'$ via Rolle's Theorem",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be an infinitely differentiable function such that $f''$ has exactly two distinct zeroes. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f'$ has at most 3 distinct zeroes"
    },
    {
      "k": "B",
      "t": "$f'$ has at least 1 zero"
    },
    {
      "k": "C",
      "t": "$f$ has at most 3 distinct zeroes"
    },
    {
      "k": "D",
      "t": "$f$ has at least 2 distinct zeroes"
    }
  ],
  "answer": "A",
  "solution": "<p>By Rolle's Theorem, between any two consecutive distinct zeroes of $f'$ there lies at least one zero of $f''$. So if $f'$ had $k$ distinct zeroes, $f''$ would have at least $k-1$ distinct zeroes.</p>\n<p>Here $f''$ has exactly $2$ zeroes. If $f'$ had $4$ or more distinct zeroes, $f''$ would need at least $3$ zeroes, contradicting that $f''$ has exactly $2$. So $f'$ has at most $3$ distinct zeroes. Answer (A).</p>\n<p>(B) fails in general &mdash; $f'$ could have zero zeroes (e.g. $f'$ never vanishes while $f''$ still has two zeroes). (C) and (D) are not forced: the same Rolle argument only bounds $f$'s zeroes by (zeroes of $f'$)$+1\\le 4$, not $3$, and nothing forces $f$ to have any zero at all.</p>",
  "tested": "Rolle's Theorem used in the counting direction: bounding how many zeroes a derivative can have from the zero-count of the next derivative.",
  "trap": "Applying the same Rolle bound to $f$ itself and getting confused about the \"+1 per differentiation\" pattern — the correct chain gives $f''\\!:2 \\Rightarrow f'\\!:\\le 3 \\Rightarrow f\\!:\\le 4$, so \"$f$ has at most 3 zeroes\" (option C) is a common but incorrect off-by-one answer."
},

{
  "id": "p.jam.2023.34",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 34,
  "marks": 2,
  "neg": 0,
  "sec": "6.1",
  "tests": [
    "c.6.1.1",
    "c.6.2.4"
  ],
  "title": "Consequences of a linear bound on the derivative near $0$",
  "type": "MSQ",
  "prompt": "<p>Let $f:(-1,1)\\to\\mathbb{R}$ be a differentiable function satisfying $f(0)=0$. Suppose there exists an $M>0$ such that $|f'(x)|\\le M|x|$ for all $x\\in(-1,1)$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f\\,\\prime$ is continuous at $x=0$"
    },
    {
      "k": "B",
      "t": "$f\\,\\prime$ is differentiable at $x=0$"
    },
    {
      "k": "C",
      "t": "$ff\\,\\prime$ is differentiable at $x=0$"
    },
    {
      "k": "D",
      "t": "$(f\\,\\prime)^2$ is differentiable at $x=0$"
    }
  ],
  "answer": [
    "A",
    "C",
    "D"
  ],
  "solution": "<p><b>Step 0 &mdash; $f'(0)=0$:</b> By the Mean Value Theorem, for $x\\ne 0$ there is $c$ between $0$ and $x$ with $\\dfrac{f(x)-f(0)}{x} = f'(c)$, so $\\left|\\dfrac{f(x)}{x}\\right| = |f'(c)| \\le M|c| \\le M|x| \\to 0$ as $x\\to 0$. So $f'(0) = \\lim_{x\\to0}\\dfrac{f(x)-f(0)}{x} = 0$.</p>\n<p><b>(A) $f'$ continuous at $0$:</b> From $|f'(x)|\\le M|x|\\to 0$ as $x\\to 0$, we get $\\lim_{x\\to0}f'(x)=0=f'(0)$. So $f'$ IS continuous at $0$. TRUE.</p>\n<p><b>(B) $f'$ differentiable at $0$:</b> This needs $\\lim_{x\\to0}\\dfrac{f'(x)-f'(0)}{x}=\\lim_{x\\to0}\\dfrac{f'(x)}{x}$ to exist. The hypothesis only bounds $|f'(x)/x|\\le M$; it does not force convergence. Counterexample: let $g(x)=x\\sin(1/x)$ for $x\\ne0$, $g(0)=0$ (continuous, hence $g=f'$ for $f(x)=\\int_0^x g$, a valid choice satisfying all hypotheses with $M=1$ since $|g(x)|\\le|x|$). Then $g(x)/x=\\sin(1/x)$ has no limit at $0$, so $f'=g$ is NOT differentiable at $0$. FALSE in general.</p>\n<p><b>(C) $ff'$ differentiable at $0$:</b> Let $h=ff'$, $h(0)=f(0)f'(0)=0$. Then $\\dfrac{h(x)}{x} = \\dfrac{f(x)}{x}\\cdot f'(x)$. As $x\\to 0$, $\\dfrac{f(x)}{x}\\to f'(0)=0$ and $f'(x)\\to 0$ (bounded, in fact $\\to0$), so the product $\\to 0$. Hence $h'(0)=0$ exists always. TRUE.</p>\n<p><b>(D) $(f')^2$ differentiable at $0$:</b> Let $k=(f')^2$, $k(0)=0$. Then $\\left|\\dfrac{k(x)}{x}\\right| = \\dfrac{(f'(x))^2}{|x|} \\le \\dfrac{M^2x^2}{|x|} = M^2|x| \\to 0$. So $k'(0)=0$ exists always. TRUE.</p>\n<p>Answer: A, C, D.</p>",
  "tested": "A layered squeeze/MVT argument: first pin down $f'(0)=0$ via MVT, then use the given linear bound to control $f'$ near $0$, and finally combine it with $f(x)/x\\to f'(0)$ to test differentiability of products/powers of $f'$.",
  "trap": "Assuming (A) forces (B) — continuity of $f'$ at a point never implies differentiability of $f'$ there; the $x\\sin(1/x)$-type counterexample is exactly the standard tool for breaking that implication."
},

{
  "id": "p.jam.2023.35",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 35,
  "marks": 2,
  "neg": 0,
  "sec": "7.2",
  "tests": [
    "c.7.2.7",
    "c.7.1.4"
  ],
  "title": "Riemann integrability of four functions on $[0,1]$",
  "type": "MSQ",
  "prompt": "<p>Which of the following functions is/are Riemann integrable on $[0,1]$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(x) = \\displaystyle\\int_0^x \\left|\\dfrac{1}{2}-t\\right|dt$"
    },
    {
      "k": "B",
      "t": "$f(x) = \\begin{cases} x\\sin(1/x) & \\text{if } x\\ne 0 \\\\ 0 & \\text{if } x=0 \\end{cases}$"
    },
    {
      "k": "C",
      "t": "$f(x) = \\begin{cases} 1 & \\text{if } x\\in \\mathbb{Q}\\cap[0,1] \\\\ -1 & \\text{otherwise} \\end{cases}$"
    },
    {
      "k": "D",
      "t": "$f(x) = \\begin{cases} x & \\text{if } x\\in[0,1) \\\\ 0 & \\text{if } x=1 \\end{cases}$"
    }
  ],
  "answer": [
    "A",
    "B",
    "D"
  ],
  "solution": "<p><b>(A):</b> $f(x)=\\displaystyle\\int_0^x\\left|\\tfrac12-t\\right|dt$ is an antiderivative of a continuous (piecewise linear) function, hence $f$ itself is a continuous, piecewise-quadratic function on $[0,1]$. Continuous functions are Riemann integrable. TRUE.</p>\n<p><b>(B):</b> $f(x)=x\\sin(1/x)$ for $x\\ne0$, $f(0)=0$. Since $|x\\sin(1/x)|\\le|x|\\to0=f(0)$ as $x\\to0$, $f$ is continuous on all of $[0,1]$ (the potential discontinuity at $0$ is removed). A continuous function on $[0,1]$ is Riemann integrable. TRUE.</p>\n<p><b>(C):</b> $f(x)=1$ on rationals, $-1$ on irrationals &mdash; this is (a rescaled) Dirichlet function. On every subinterval, the supremum is $1$ and infimum is $-1$ regardless of how fine the partition, so the upper integral is $1$ and the lower integral is $-1$; they never agree, so $f$ is NOT Riemann integrable. FALSE.</p>\n<p><b>(D):</b> $f(x)=x$ on $[0,1)$, $f(1)=0$ &mdash; this differs from the continuous function $x\\mapsto x$ at only the single point $x=1$. A bounded function with only one (or finitely many) discontinuities is Riemann integrable. TRUE.</p>\n<p>Answer: A, B, D.</p>",
  "tested": "The criterion that continuous functions (and functions continuous except at finitely many points) are Riemann integrable, contrasted with the Dirichlet-type function, the standard example of a bounded function that is NOT Riemann integrable.",
  "trap": "Flagging (D) as non-integrable just because it is \"discontinuous\" &mdash; a single jump discontinuity does not prevent Riemann integrability; only densely-occurring discontinuities (as in option C) do."
},

{
  "id": "p.jam.2023.40",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 40,
  "marks": 2,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9",
    "c.9.2.1"
  ],
  "title": "Radii of convergence and endpoint behaviour of two power series",
  "type": "MSQ",
  "prompt": "<p>Let $R_1$ and $R_2$ be the radii of convergence of the power series $\\displaystyle\\sum_{n=1}^\\infty (-1)^n x^{n-1}$ and $\\displaystyle\\sum_{n=1}^\\infty (-1)^n \\dfrac{x^{n+1}}{n(n+1)}$, respectively. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$R_1 = R_2$"
    },
    {
      "k": "B",
      "t": "$R_2 > 1$"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty (-1)^n x^{n-1}$ converges for all $x\\in[-1,1]$"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\sum_{n=1}^\\infty (-1)^n \\dfrac{x^{n+1}}{n(n+1)}$ converges for all $x\\in[-1,1]$"
    }
  ],
  "answer": [
    "A",
    "D"
  ],
  "solution": "<p><b>Radii:</b> The first series has coefficients $\\pm1$ (bounded, not tending to $0$), giving radius $R_1=1$ by the Cauchy&ndash;Hadamard formula (root/ratio test). Dividing coefficients by the polynomial factor $n(n+1)$ in the second series does not change the radius of convergence (polynomial factors don't affect $\\limsup|a_n|^{1/n}$), so $R_2=1$ too. Hence $R_1=R_2=1$: (A) TRUE, (B) FALSE ($R_2=1$, not $>1$).</p>\n<p><b>(C):</b> At $x=1$: $\\displaystyle\\sum_{n=1}^\\infty(-1)^n\\cdot 1 = -1+1-1+\\cdots$, whose terms do not tend to $0$ in absolute value being constantly $1$ in magnitude but the series itself has terms $(-1)^n\\not\\to 0$... more precisely the terms are $(-1)^n$, which do not converge to $0$, so by the $n$-th Term Test the series diverges at $x=1$. So (C) is FALSE (fails at the endpoint $x=1$, hence not for all of $[-1,1]$).</p>\n<p><b>(D):</b> At $x=\\pm1$: $\\displaystyle\\sum_{n=1}^\\infty (-1)^n\\dfrac{(\\pm1)^{n+1}}{n(n+1)}$ has terms bounded in absolute value by $\\dfrac{1}{n(n+1)}$, and $\\displaystyle\\sum \\dfrac{1}{n(n+1)}$ converges (telescoping/comparison to $p=2$), so the series converges absolutely at both endpoints by the Comparison Test. Combined with absolute convergence for $|x|<1$ (inside the radius), the series converges for all $x\\in[-1,1]$. TRUE.</p>\n<p>Answer: A, D.</p>",
  "tested": "The Cauchy&ndash;Hadamard radius-of-convergence formula (insensitive to polynomial coefficient factors) together with endpoint testing via the $n$-th Term Test and the Comparison Test.",
  "trap": "Assuming both series behave identically at the endpoints just because $R_1=R_2$ — equal radii say nothing about boundary behaviour, which must be checked separately term by term."
},

{
  "id": "p.jam.2023.44",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 44,
  "marks": 1,
  "neg": 0,
  "sec": "8.2",
  "tests": [
    "c.8.2.4"
  ],
  "title": "Limit of $n\\int_0^1 \\frac{x^n}{x+1}\\,dx$",
  "type": "NAT",
  "prompt": "<p>The value of $\\displaystyle\\lim_{n\\to\\infty}\\left(n\\int_0^1 \\frac{x^n}{x+1}\\,dx\\right)$ is equal to _____ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>This is an instance of the standard fact: for $f$ continuous on $[0,1]$, $\\displaystyle\\lim_{n\\to\\infty} n\\int_0^1 x^n f(x)\\,dx = f(1)$, because $nx^n$ concentrates its mass near $x=1$ as $n\\to\\infty$ (note $n\\int_0^1 x^n\\,dx = \\dfrac{n}{n+1}\\to 1$, so $nx^n\\,dx$ behaves like an approximate point mass at $1$).</p>\n<p>Here $f(x)=\\dfrac{1}{x+1}$ is continuous on $[0,1]$, so</p>\n$$\\lim_{n\\to\\infty} n\\int_0^1 \\frac{x^n}{x+1}\\,dx = f(1) = \\frac{1}{1+1} = \\frac{1}{2}.$$\n<p><b>Sketch of the concentration argument:</b> for any $\\delta\\in(0,1)$, split $\\int_0^1 = \\int_0^{1-\\delta}+\\int_{1-\\delta}^1$. On $[0,1-\\delta]$, $x^n\\le(1-\\delta)^n\\to0$ exponentially, so $n\\int_0^{1-\\delta}\\frac{x^n}{x+1}dx \\to 0$. On $[1-\\delta,1]$, $f(x)=\\frac{1}{x+1}$ is within $\\varepsilon$ of $f(1)=\\frac12$ (by continuity), and $n\\int_{1-\\delta}^1 x^n\\,dx \\to 1$, giving the contribution $\\approx f(1)\\cdot 1$. Letting $\\delta\\to0$ confirms the limit is $f(1)=\\tfrac12$.</p>\n<p>So the answer is $0.50$.</p>",
  "tested": "The behaviour of $\\int_0^1 x^n f(x)\\,dx$ as $n\\to\\infty$ — a pointwise (non-uniform) limit of the integrand concentrating near the right endpoint, requiring a direct tail-splitting estimate rather than a naive interchange of limit and integral.",
  "trap": "Naively interchanging the limit and the integral by noting $nx^n\\to 0$ pointwise for each fixed $x\\in[0,1)$ and concluding the whole limit is $0$ — the factor $n$ in front prevents a clean interchange since the convergence of $x^n\\to0$ is not uniform near $x=1$."
},

{
  "id": "p.jam.2023.47",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 47,
  "marks": 1,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.4",
    "c.6.4.1"
  ],
  "title": "The Mean Value Theorem constant $\\theta(h)\\to 1/2$",
  "type": "NAT",
  "prompt": "<p>Let $f(x)=\\sqrt[3]{x}$ for $x\\in(0,\\infty)$, and $\\theta(h)$ be a function such that</p>\n$$f(3+h)-f(3) = hf'(3+\\theta(h)h)$$\n<p>for all $h\\in(-1,1)$. Then $\\displaystyle\\lim_{h\\to 0}\\theta(h)$ is equal to _____ (rounded off to two decimal places).</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>Expand both sides in powers of $h$ using Taylor's Theorem, assuming $f''$ is continuous and $f''(3)\\ne0$ (true here since $f(x)=x^{1/3}$ is smooth and nonzero-curvature away from $0$).</p>\n<p><b>Left side (Taylor expansion of $f$ about $3$):</b></p>\n$$f(3+h) = f(3) + hf'(3) + \\frac{h^2}{2}f''(3) + O(h^3) \\implies f(3+h)-f(3) = hf'(3)+\\frac{h^2}{2}f''(3)+O(h^3).$$\n<p><b>Right side (Taylor expansion of $f'$ about $3$):</b></p>\n$$hf'(3+\\theta h) = h\\left[f'(3) + \\theta h f''(3) + O(h^2)\\right] = hf'(3) + \\theta h^2 f''(3) + O(h^3).$$\n<p>Equating the two expressions and cancelling the common $hf'(3)$ term:</p>\n$$\\frac{h^2}{2}f''(3) + O(h^3) = \\theta(h) h^2 f''(3) + O(h^3) \\implies \\theta(h) = \\frac{1}{2} + O(h).$$\n<p>Since $f''(x) = -\\dfrac{2}{9}x^{-5/3}$, $f''(3) = -\\dfrac{2}{9}\\cdot 3^{-5/3} \\ne 0$, so dividing by $f''(3)$ above is valid, and letting $h\\to0$ gives $\\displaystyle\\lim_{h\\to0}\\theta(h) = \\frac12 = 0.50$.</p>",
  "tested": "The classical result that the \"MVT point\" $\\theta(h)$ in $f(a+h)-f(a)=hf'(a+\\theta h)$ tends to $\\tfrac12$ as $h\\to0$, provided $f''$ is continuous and nonzero at $a$ — derived by comparing second-order Taylor expansions of $f$ and of $f'$.",
  "trap": "Assuming $\\theta(h)$ must simplify algebraically for the cube-root function without expanding to second order — the limit $\\tfrac12$ is a general phenomenon (tied to the quadratic Taylor term), not a special feature of $x^{1/3}$."
},

{
  "id": "p.jam.2023.60",
  "course": "ra2",
  "exam": "JAM",
  "year": 2023,
  "paper": "MA",
  "qno": 60,
  "marks": 2,
  "neg": 0,
  "sec": "6.1",
  "tests": [
    "c.6.1.7"
  ],
  "title": "Derivative of an inverse function from power series coefficients",
  "type": "NAT",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a bijective function such that for all $x\\in\\mathbb{R}$, $f(x) = \\displaystyle\\sum_{n=1}^\\infty a_n x^n$ and $f^{-1}(x) = \\displaystyle\\sum_{n=1}^\\infty b_n x^n$, where $f^{-1}$ is the inverse function of $f$. If $a_1=2$ and $a_2=4$, then $b_1$ is equal to _____.</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Since $f(x)=\\displaystyle\\sum_{n\\ge1}a_nx^n$ has no constant term, $f(0)=0$. Differentiating term by term, $f'(x) = a_1 + 2a_2x+\\cdots$, so $f'(0)=a_1=2$.</p>\n<p>Similarly $g:=f^{-1}$ has $g(x)=\\displaystyle\\sum_{n\\ge1}b_nx^n$, so $g(0)=0=f(0)$ (consistent, since $g$ inverts $f$ and $f(0)=0$), and $g'(0) = b_1$.</p>\n<p>By the Inverse Function derivative theorem, since $f'(0)=a_1=2\\ne0$, $g=f^{-1}$ is differentiable at $f(0)=0$ with</p>\n$$g'(f(0)) = \\frac{1}{f'(0)} \\implies g'(0) = \\frac{1}{a_1} = \\frac12.$$\n<p>So $b_1 = g'(0) = \\dfrac12 = 0.50$. (Note that $a_2=4$ never enters this computation &mdash; it would only be needed to find $b_2$.)</p>",
  "tested": "The Derivative of Inverse Functions theorem, $(f^{-1})'(f(a)) = 1/f'(a)$, applied at $a=0$ where the power series coefficients directly give $f'(0)=a_1$ and $(f^{-1})'(0)=b_1$.",
  "trap": "Trying to use $a_2=4$ (e.g. via a full power-series inversion formula) to find $b_1$ — $b_1$ depends only on $a_1$; $a_2$ is a distractor that would only matter for computing $b_2$."
},

{
  "id": "p.jam.2022.05",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 5,
  "marks": 1,
  "neg": -0.33,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence of a lacunary power series",
  "type": "MCQ",
  "prompt": "<p>The radius of convergence of the power series</p><p>$$\\sum_{n=1}^{\\infty} \\left(\\frac{n^3}{4^n}\\right) x^{5n}$$</p><p>is</p>",
  "options": [
    {
      "k": "A",
      "t": "$4$"
    },
    {
      "k": "B",
      "t": "$\\sqrt[5]{4}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{1}{4}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{1}{\\sqrt[5]{4}}$"
    }
  ],
  "answer": "B",
  "solution": "<p>Write $y=x^5$, so the series becomes $\\displaystyle\\sum_{n=1}^\\infty \\frac{n^3}{4^n}y^n$, a power series in $y$ with coefficients $a_n=n^3/4^n$.</p><p>By the Cauchy&ndash;Hadamard formula, the radius of convergence in $y$ is</p><p>$$R_y=\\frac{1}{\\displaystyle\\limsup_{n\\to\\infty}|a_n|^{1/n}}=\\frac{1}{\\displaystyle\\lim_{n\\to\\infty}\\frac{n^{3/n}}{4}}=\\frac{1}{1/4}=4,$$</p><p>since $n^{3/n}\\to 1$. The series in $y$ converges for $|y|<4$, i.e. $|x|^5<4$, i.e. $|x|<4^{1/5}=\\sqrt[5]{4}$. So the radius of convergence in $x$ is $\\sqrt[5]{4}$.</p><p>(A) confuses the radius in $y$ with the radius in $x$. (C) inverts the exponent. (D) inverts the correct answer.</p>",
  "tested": "<p>Computing the radius of convergence of a power series with a substituted variable, using the Cauchy&ndash;Hadamard theorem.</p>",
  "trap": "Forgetting to convert the radius of convergence in y = x^5 back to a radius in x by taking a fifth root, or taking the reciprocal by mistake."
},

{
  "id": "p.jam.2022.07",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 7,
  "marks": 1,
  "neg": -0.33,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.9.2.6"
  ],
  "title": "Comparison and limit comparison tests for two series",
  "type": "MCQ",
  "prompt": "<p>Suppose</p><p>$$a_n=\\frac{3^n+3}{5^n-5} \\quad\\text{and}\\quad b_n=\\frac{1}{(1+n^2)^{1/4}}\\quad\\text{for } n=2,3,4,\\dots.$$</p><p>Then which one of the following is true?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both $\\sum_{n=2}^{\\infty} a_n$ and $\\sum_{n=2}^{\\infty} b_n$ are convergent."
    },
    {
      "k": "B",
      "t": "Both $\\sum_{n=2}^{\\infty} a_n$ and $\\sum_{n=2}^{\\infty} b_n$ are divergent."
    },
    {
      "k": "C",
      "t": "$\\sum_{n=2}^{\\infty} a_n$ is convergent and $\\sum_{n=2}^{\\infty} b_n$ is divergent."
    },
    {
      "k": "D",
      "t": "$\\sum_{n=2}^{\\infty} a_n$ is divergent and $\\sum_{n=2}^{\\infty} b_n$ is convergent."
    }
  ],
  "answer": "C",
  "solution": "<p><b>Series $\\sum a_n$:</b> for large $n$, $3^n+3\\le 2\\cdot3^n$ and $5^n-5\\ge\\tfrac12\\cdot5^n$, so $$0<a_n\\le \\frac{2\\cdot3^n}{\\tfrac12\\cdot5^n}=4\\left(\\frac{3}{5}\\right)^n.$$ Since $\\sum(3/5)^n$ is a convergent geometric series, the Comparison Test shows $\\sum a_n$ converges.</p><p><b>Series $\\sum b_n$:</b> as $n\\to\\infty$, $(1+n^2)^{1/4}\\sim n^{1/2}$, so $b_n\\sim n^{-1/2}$. Precisely, $$\\lim_{n\\to\\infty}\\frac{b_n}{n^{-1/2}}=\\lim_{n\\to\\infty}\\left(\\frac{n^2}{1+n^2}\\right)^{1/4}=1,$$ a finite nonzero limit, so by the Limit Comparison Test $\\sum b_n$ behaves like $\\sum n^{-1/2}$, a divergent $p$-series ($p=\\tfrac12\\le1$). Hence $\\sum b_n$ diverges.</p><p>So $\\sum a_n$ converges and $\\sum b_n$ diverges: option (C).</p>",
  "tested": "<p>Comparison Test against a geometric series and Limit Comparison Test against a $p$-series with $p<1$.</p>",
  "trap": "Comparing b_n to 1/n^2 (misreading the outer 1/4 power) instead of recognising (1+n^2)^(1/4) ~ n^(1/2), which would wrongly suggest convergence."
},

{
  "id": "p.jam.2022.08",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 8,
  "marks": 1,
  "neg": -0.33,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.9.2.6"
  ],
  "title": "Convergence of a two-parameter series",
  "type": "MCQ",
  "prompt": "<p>Consider the series</p><p>$$\\sum_{n=1}^{\\infty}\\frac{1}{n^{m}\\left(1+\\dfrac{1}{n^{p}}\\right)}$$</p><p>where $m$ and $p$ are real numbers.</p><p>Under which of the following conditions does the above series converge?</p>",
  "options": [
    {
      "k": "A",
      "t": "$m>1$."
    },
    {
      "k": "B",
      "t": "$0<m<1$ and $p>1$."
    },
    {
      "k": "C",
      "t": "$0<m\\le1$ and $0\\le p\\le1$."
    },
    {
      "k": "D",
      "t": "$m=1$ and $p>1$."
    }
  ],
  "answer": "A",
  "solution": "<p>Write the general term as $t_n=\\dfrac{1}{n^m(1+n^{-p})}$.</p><p><b>If $p\\ge0$:</b> $n^{-p}$ tends to a finite limit, so $t_n\\sim C\\,n^{-m}$ for a constant $C>0$; by the Limit Comparison Test with the $p$-series $\\sum n^{-m}$, $\\sum t_n$ converges iff $m>1$.</p><p><b>If $p<0$:</b> $n^{-p}=n^{|p|}\\to\\infty$, so $1+n^{-p}\\sim n^{|p|}$ and $t_n\\sim n^{-(m+|p|)}$; the series converges iff $m+|p|>1$, i.e. $m-p>1$. Since $p<0$, this condition is automatically satisfied whenever $m>1$ (it is even weaker than $m>1$).</p><p>So in every case, $m>1$ is enough to force convergence, regardless of the sign of $p$: option (A).</p><p>Checking the others: they all describe $m\\le1$ together with $p\\ge0$, in which $t_n\\sim Cn^{-m}$ with $m\\le1$ &mdash; the series actually <em>diverges</em> there. For instance (D), $m=1,p>1$, gives $t_n\\sim 1/n$, the harmonic series.</p>",
  "tested": "<p>$p$-series and Limit Comparison Test, applied carefully to both signs of the parameter $p$.</p>",
  "trap": "Assuming p>1 is needed for convergence, by mistaking the role of p — once p is nonnegative it only rescales the leading n^{-m} behaviour by a constant, it does not change whether the series converges."
},

{
  "id": "p.jam.2022.12",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 12,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.1",
  "tests": [
    "c.9.1.5",
    "c.9.1.1"
  ],
  "title": "Rearrangement of the alternating harmonic series",
  "type": "MCQ",
  "prompt": "<p>Let $T$ denote the sum of the convergent series</p><p>$$1-\\frac12+\\frac13-\\frac14+\\frac15-\\frac16+\\cdots+\\frac{(-1)^{n+1}}{n}+\\cdots$$</p><p>and let $S$ denote the sum of the convergent series</p><p>$$1-\\frac12-\\frac14+\\frac13-\\frac16-\\frac18+\\frac15-\\frac{1}{10}-\\frac{1}{12}+\\cdots=\\sum_{n=1}^{\\infty}a_n,$$</p><p>where</p><p>$$a_{3m-2}=\\frac{1}{2m-1},\\quad a_{3m-1}=\\frac{-1}{4m-2},\\quad\\text{and}\\quad a_{3m}=\\frac{-1}{4m}\\ \\text{ for } m\\in\\mathbb{N}.$$</p><p>Then which one of the following is true?</p>",
  "options": [
    {
      "k": "A",
      "t": "$T=S$ and $S\\ne0$."
    },
    {
      "k": "B",
      "t": "$2T=S$ and $S\\ne0$."
    },
    {
      "k": "C",
      "t": "$T=2S$ and $S\\ne0$."
    },
    {
      "k": "D",
      "t": "$T=S=0$."
    }
  ],
  "answer": "C",
  "solution": "<p>$T$ is the alternating harmonic series, so $T=\\ln2$.</p><p>Group the terms of $S$ in threes, using $a_{3m-2}+a_{3m-1}+a_{3m}$:</p><p>$$\\frac{1}{2m-1}-\\frac{1}{4m-2}-\\frac{1}{4m}=\\frac{1}{2m-1}-\\frac{1}{2(2m-1)}-\\frac{1}{4m}=\\frac{1}{2(2m-1)}-\\frac{1}{4m}=\\frac12\\left(\\frac{1}{2m-1}-\\frac{1}{2m}\\right).$$</p><p>Summing over $m=1,2,3,\\dots$,</p><p>$$S=\\frac12\\sum_{m=1}^{\\infty}\\left(\\frac{1}{2m-1}-\\frac{1}{2m}\\right)=\\frac12\\left(1-\\frac12+\\frac13-\\frac14+\\cdots\\right)=\\frac12T.$$</p><p>So $T=2S$, and since $T=\\ln2\\ne0$, also $S=\\tfrac12\\ln2\\ne0$: option (C). This is a classical illustration that rearranging a conditionally convergent series (here, two negative terms for every positive term) changes its sum.</p>",
  "tested": "<p>Riemann's Rearrangement Theorem &mdash; a conditionally convergent series can be rearranged to converge to a different sum, illustrated by a \"1 positive : 2 negative\" rearrangement of the alternating harmonic series.</p>",
  "trap": "Assuming a rearrangement of a convergent series must keep the same sum — true only for absolutely convergent series; the alternating harmonic series is merely conditionally convergent."
},

{
  "id": "p.jam.2022.13",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 13,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Monotonicity from a second-order differential relation",
  "type": "MCQ",
  "prompt": "<p>Let $u:\\mathbb{R}\\to\\mathbb{R}$ be a twice continuously differentiable function such that $u(0)>0$ and $u'(0)>0$. Suppose $u$ satisfies</p><p>$$u''(x)=\\frac{u(x)}{1+x^2}\\quad\\text{for all } x\\in\\mathbb{R}.$$</p><p>Consider the following two statements:</p><p>I. The function $uu'$ is monotonically increasing on $[0,\\infty)$.<br>II. The function $u$ is monotonically increasing on $[0,\\infty)$.</p><p>Then which one of the following is correct?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both I and II are false."
    },
    {
      "k": "B",
      "t": "Both I and II are true."
    },
    {
      "k": "C",
      "t": "I is false, but II is true."
    },
    {
      "k": "D",
      "t": "I is true, but II is false."
    }
  ],
  "answer": "B",
  "approach": "<p>Compute the derivative of $uu'$ directly using the given relation for $u''$, then see what a sign-definite derivative forces on $u'$ itself.</p>",
  "solution": "<p><b>Statement I.</b> Let $\\varphi=uu'$. Then $$\\varphi'=(u')^2+uu''=(u')^2+\\frac{u^2}{1+x^2}\\ge0\\quad\\text{for all } x,$$ a sum of two squares (the second over a positive quantity). By the Monotonicity Criterion for differentiable functions, $\\varphi'\\ge0$ on $[0,\\infty)$ means $\\varphi=uu'$ is monotonically increasing there. So I is true.</p><p><b>Statement II.</b> Since $\\varphi=uu'$ is increasing on $[0,\\infty)$ and $\\varphi(0)=u(0)u'(0)>0$, we get $u(x)u'(x)\\ge u(0)u'(0)>0$ for every $x\\ge0$. In particular, $u'(x)\\ne0$ for any $x\\ge0$ (otherwise the product would vanish). Since $u'$ is continuous with $u'(0)>0$, the Intermediate Value Theorem forbids $u'$ from ever turning negative without passing through $0$ &mdash; so $u'(x)>0$ for all $x\\ge0$. Hence $u$ is monotonically increasing on $[0,\\infty)$: II is true.</p><p>Both I and II are true: option (B).</p>",
  "tested": "<p>Using a sign-definite derivative (expressed as a sum of squares) together with the Intermediate Value Theorem to upgrade \"the product stays positive\" into \"each factor keeps a fixed sign\".</p>",
  "trap": "Concluding uu' is nondecreasing and stopping, without using u(0)u'(0)>0 with the IVT to actually pin down the sign of u' for statement II."
},

{
  "id": "p.jam.2022.14",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 14,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.6"
  ],
  "title": "A vanishing factor times a convergent series",
  "type": "MCQ",
  "prompt": "<p>The value of the limit</p><p>$$\\lim_{n\\to\\infty}\\sum_{k=2}^{n}\\frac{\\sqrt{n+1}-\\sqrt{n}}{k(\\ln k)^2}$$</p><p>is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\infty$"
    },
    {
      "k": "B",
      "t": "$1$"
    },
    {
      "k": "C",
      "t": "$e$"
    },
    {
      "k": "D",
      "t": "$0$"
    }
  ],
  "answer": "D",
  "solution": "<p>The numerator $\\sqrt{n+1}-\\sqrt{n}$ does not depend on the summation index $k$, so it factors out:</p><p>$$\\sum_{k=2}^{n}\\frac{\\sqrt{n+1}-\\sqrt{n}}{k(\\ln k)^2}=\\big(\\sqrt{n+1}-\\sqrt{n}\\big)\\sum_{k=2}^{n}\\frac{1}{k(\\ln k)^2}.$$</p><p>The series $\\displaystyle\\sum_{k=2}^{\\infty}\\frac{1}{k(\\ln k)^2}$ converges: by the Integral Test, $$\\int_2^{\\infty}\\frac{dx}{x(\\ln x)^2}=\\left[\\frac{-1}{\\ln x}\\right]_2^{\\infty}=\\frac{1}{\\ln 2}<\\infty.$$ So the partial sums $S_n=\\sum_{k=2}^n \\frac{1}{k(\\ln k)^2}$ converge to a finite number $S$ as $n\\to\\infty$.</p><p>Also $\\sqrt{n+1}-\\sqrt{n}=\\dfrac{1}{\\sqrt{n+1}+\\sqrt{n}}\\to0$ as $n\\to\\infty$.</p><p>Hence the whole expression is (a factor $\\to0$) times (a factor $\\to S$, finite), so the limit is $0\\cdot S=0$: option (D).</p>",
  "tested": "<p>Recognising $\\sum 1/(k(\\ln k)^2)$ as convergent via the Integral Test, then combining a convergent partial sum with a vanishing factor.</p>",
  "trap": "Misreading √(n+1)-√n as if it depended on the summation index k (i.e. as √(k+1)-√k), which turns this into an unrelated telescoping-type question."
},

{
  "id": "p.jam.2022.21",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.1",
    "c.6.2.7"
  ],
  "title": "Local behaviour of a solution via Taylor expansion",
  "type": "MCQ",
  "prompt": "<p>On the open interval $(-c,c)$, where $c$ is a positive real number, $y(x)$ is an infinitely differentiable solution of the differential equation</p><p>$$\\frac{dy}{dx}=y^2-1+\\cos x,$$</p><p>with the initial condition $y(0)=0$. Then which one of the following is correct?</p>",
  "options": [
    {
      "k": "A",
      "t": "$y(x)$ has a local maximum at the origin."
    },
    {
      "k": "B",
      "t": "$y(x)$ has a local minimum at the origin."
    },
    {
      "k": "C",
      "t": "$y(x)$ is strictly increasing on the open interval $(-\\delta,\\delta)$ for some positive real number $\\delta$."
    },
    {
      "k": "D",
      "t": "$y(x)$ is strictly decreasing on the open interval $(-\\delta,\\delta)$ for some positive real number $\\delta$."
    }
  ],
  "answer": "D",
  "approach": "<p>The behaviour of $y$ near $0$ is governed by the sign of $y'$ near $0$, not directly by $y$ itself, so find the Taylor expansion of $y'(x)=y(x)^2-1+\\cos x$ at $x=0$ by repeated differentiation.</p>",
  "solution": "<p>Let $f(x)=y'(x)=y(x)^2-1+\\cos x$. At $x=0$: $y(0)=0$, so $f(0)=0-1+1=0$, i.e. $y'(0)=0$.</p><p>Differentiate again: $y''=2yy'-\\sin x$, so $y''(0)=2(0)(0)-0=0$.</p><p>Differentiate once more: $y'''=2(y')^2+2yy''-\\cos x$, so $y'''(0)=2(0)^2+2(0)(0)-1=-1\\ne0$.</p><p>Since $y'(0)=y''(0)=0$ and $y'''(0)=-1$, Taylor's Theorem gives, for $x$ near $0$,</p><p>$$y'(x)=y'(0)+y''(0)x+\\frac{y'''(0)}{2!}x^2+o(x^2)=-\\frac{x^2}{2}+o(x^2).$$</p><p>So $y'(x)<0$ for all $x\\ne0$ sufficiently close to $0$ (with $y'(0)=0$ only at the single point $x=0$). A differentiable function whose derivative is negative except at one isolated point is still strictly decreasing there, so $y$ is strictly decreasing on some $(-\\delta,\\delta)$: option (D).</p><p>Since $y$ is strictly decreasing through $y(0)=0$, it takes positive values for $x<0$ and negative values for $x>0$ near the origin, so $0$ is neither a local maximum nor a local minimum, ruling out (A) and (B); and it certainly is not increasing, ruling out (C).</p>",
  "tested": "<p>Using Taylor's Theorem to find the first nonvanishing derivative at a critical point, then applying the strict monotonicity criterion for differentiable functions.</p>",
  "trap": "Stopping at y'(0)=0 and y''(0)=0 and guessing the answer, instead of computing y'''(0) to actually determine the sign of y' near 0."
},

{
  "id": "p.jam.2022.27",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 27,
  "marks": 2,
  "neg": -0.66,
  "sec": "10.3",
  "tests": [
    "c.10.3.1"
  ],
  "title": "Improper integral of a difference of Gaussians",
  "type": "MCQ",
  "prompt": "<p>Let $a,b$ be positive real numbers such that $a<b$. Given that</p><p>$$\\lim_{N\\to\\infty}\\int_0^N e^{-t^2}\\,dt=\\frac{\\sqrt{\\pi}}{2},$$</p><p>the value of</p><p>$$\\lim_{N\\to\\infty}\\int_0^N \\frac{1}{t^2}\\left(e^{-at^2}-e^{-bt^2}\\right)dt$$</p><p>is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\sqrt{\\pi}(\\sqrt{a}-\\sqrt{b})$."
    },
    {
      "k": "B",
      "t": "$\\sqrt{\\pi}(\\sqrt{a}+\\sqrt{b})$."
    },
    {
      "k": "C",
      "t": "$-\\sqrt{\\pi}(\\sqrt{a}+\\sqrt{b})$."
    },
    {
      "k": "D",
      "t": "$\\sqrt{\\pi}(\\sqrt{b}-\\sqrt{a})$."
    }
  ],
  "answer": "D",
  "solution": "<p>For fixed $t\\ne0$, note that $\\dfrac{\\partial}{\\partial s}\\!\\left(-\\dfrac{e^{-st^2}}{t^2}\\right)=e^{-st^2}$, so</p><p>$$\\int_a^b e^{-st^2}\\,ds=\\left[-\\frac{e^{-st^2}}{t^2}\\right]_{s=a}^{s=b}=\\frac{e^{-at^2}-e^{-bt^2}}{t^2}.$$</p><p>Hence, swapping the order of the (nonnegative) integral over $t\\in(0,\\infty)$ with the integral over $s\\in[a,b]$,</p><p>$$\\int_0^{\\infty}\\frac{e^{-at^2}-e^{-bt^2}}{t^2}\\,dt=\\int_a^b\\left(\\int_0^{\\infty}e^{-st^2}\\,dt\\right)ds.$$</p><p>Substituting $u=\\sqrt{s}\\,t$ in the inner integral, $\\displaystyle\\int_0^\\infty e^{-st^2}dt=\\frac{1}{\\sqrt{s}}\\int_0^\\infty e^{-u^2}du=\\frac{1}{\\sqrt s}\\cdot\\frac{\\sqrt\\pi}{2}$.</p><p>So the integral becomes $$\\int_a^b \\frac{\\sqrt\\pi}{2\\sqrt s}\\,ds=\\frac{\\sqrt\\pi}{2}\\Big[2\\sqrt{s}\\Big]_a^b=\\sqrt\\pi\\left(\\sqrt b-\\sqrt a\\right),$$ matching option (D).</p>",
  "tested": "<p>Writing a difference of two Gaussian-type integrands as an integral over a parameter (a Frullani-type trick), swapping the order of integration, and using the given Gaussian integral value.</p>",
  "trap": "Sign errors when swapping the order of integration, or dropping the 1/√s Jacobian factor that comes from the substitution u = √s·t."
},

{
  "id": "p.jam.2022.28",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 28,
  "marks": 2,
  "neg": -0.66,
  "sec": "8.2",
  "tests": [
    "c.8.2.3"
  ],
  "title": "Evaluating a power series sum by term-by-term differentiation",
  "type": "MCQ",
  "prompt": "<p>For $-1\\le x\\le 1$, if $f(x)$ is the sum of the convergent power series</p><p>$$x+\\frac{x^2}{2^2}+\\frac{x^3}{3^2}+\\cdots+\\frac{x^n}{n^2}+\\cdots$$</p><p>then $f\\!\\left(\\dfrac12\\right)$ is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\int_0^{1/2}\\frac{\\ln(1-t)}{t}\\,dt$."
    },
    {
      "k": "B",
      "t": "$\\displaystyle-\\int_0^{1/2}\\frac{\\ln(1-t)}{t}\\,dt$."
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\int_0^{1/2}t\\ln(1+t)\\,dt$."
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\int_0^{1/2}t\\ln(1-t)\\,dt$."
    }
  ],
  "answer": "B",
  "solution": "<p>$f(x)=\\displaystyle\\sum_{n=1}^\\infty \\frac{x^n}{n^2}$ has radius of convergence $1$, so on $(-1,1)$ it may be differentiated term by term:</p><p>$$f'(x)=\\sum_{n=1}^{\\infty}\\frac{x^{n-1}}{n}=\\frac{1}{x}\\sum_{n=1}^{\\infty}\\frac{x^n}{n}=\\frac{-\\ln(1-x)}{x}\\quad(0<|x|<1).$$</p><p>Since $f(0)=0$, the Fundamental Theorem of Calculus gives</p><p>$$f\\!\\left(\\frac12\\right)=\\int_0^{1/2}f'(t)\\,dt=-\\int_0^{1/2}\\frac{\\ln(1-t)}{t}\\,dt,$$</p><p>which is option (B).</p>",
  "tested": "<p>Differentiating a power series term by term (interchange of limit and derivative) to recover a closed form, then recovering the original function via the FTC.</p>",
  "trap": "Sign slip: forgetting the minus sign in Σx^n/n = -ln(1-x), which would swap options (A) and (B)."
},

{
  "id": "p.jam.2022.41",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 41,
  "marks": 1,
  "neg": 0,
  "sec": "7.1",
  "tests": [
    "c.7.1.1"
  ],
  "title": "A limit combining two Riemann sums",
  "type": "NAT",
  "prompt": "<p>The value of the limit</p><p>$$\\lim_{n\\to\\infty}\\left(\\frac{1^4+2^4+\\cdots+n^4}{n^5}+\\frac{1}{\\sqrt n}\\left(\\frac{1}{\\sqrt{n+1}}+\\frac{1}{\\sqrt{n+2}}+\\cdots+\\frac{1}{\\sqrt{4n}}\\right)\\right)$$</p><p>is equal to _________. (Rounded off to two decimal places)</p>",
  "answer": {
    "value": 2.2,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p><b>First term.</b> Writing $\\dfrac{1^4+2^4+\\cdots+n^4}{n^5}=\\dfrac1n\\displaystyle\\sum_{k=1}^n\\left(\\frac kn\\right)^4$, this is a Riemann sum for $f(x)=x^4$ on $[0,1]$, so as $n\\to\\infty$ it converges to $$\\int_0^1 x^4\\,dx=\\frac15.$$</p><p><b>Second term.</b> Write $$\\frac{1}{\\sqrt n}\\sum_{k=1}^{3n}\\frac{1}{\\sqrt{n+k}}=\\sum_{k=1}^{3n}\\frac{1}{n}\\cdot\\frac{1}{\\sqrt{1+k/n}}.$$ As $n\\to\\infty$, $1+k/n$ ranges over $(1,4]$ in steps of $1/n$, so this is a Riemann sum for $g(t)=1/\\sqrt t$ on $[1,4]$, converging to $$\\int_1^4 \\frac{dt}{\\sqrt t}=\\Big[2\\sqrt t\\Big]_1^4=4-2=2.$$</p><p>Adding the two limits: $\\dfrac15+2=2.2$.</p>",
  "tested": "<p>Recognising two expressions as Riemann sums (for $x^4$ on $[0,1]$ and for $1/\\sqrt t$ on $[1,4]$) and evaluating them as definite integrals.</p>",
  "trap": "Missing that the second sum runs from k=n+1 to 4n (3n terms starting just past n), which fixes the interval of integration as [1,4] rather than [0,3] or [0,4]."
},

{
  "id": "p.jam.2022.54",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 54,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.8"
  ],
  "title": "A piecewise integral solved by a symmetry substitution",
  "type": "NAT",
  "prompt": "<p>Let $f:[0,\\pi]\\to\\mathbb{R}$ be the function defined by</p><p>$$f(x)=\\begin{cases}(x-\\pi)e^{\\sin x} & \\text{if } 0\\le x\\le \\dfrac{\\pi}{2},\\\\[4pt] xe^{\\sin x}+\\dfrac{4}{\\pi} & \\text{if } \\dfrac{\\pi}{2}<x\\le \\pi.\\end{cases}$$</p><p>Then the value of $$\\int_0^{\\pi}f(x)\\,dx$$ is equal to _________. (Rounded off to two decimal places)</p>",
  "answer": {
    "value": 2,
    "tol": 0.01,
    "dp": 2
  },
  "approach": "<p>The piece $xe^{\\sin x}$ has no elementary antiderivative, so integrate directly only where necessary — look for a substitution that makes the two pieces cancel instead.</p>",
  "solution": "<p>Split the integral at $\\pi/2$: $$\\int_0^{\\pi}f=\\int_0^{\\pi/2}(x-\\pi)e^{\\sin x}\\,dx+\\int_{\\pi/2}^{\\pi}\\left(xe^{\\sin x}+\\frac4\\pi\\right)dx.$$</p><p>In the first integral substitute $u=\\pi-x$ (so $x=\\pi-u$, $dx=-du$; as $x:0\\to\\pi/2$, $u:\\pi\\to\\pi/2$). Since $\\sin(\\pi-u)=\\sin u$ and $x-\\pi=-u$,</p><p>$$\\int_0^{\\pi/2}(x-\\pi)e^{\\sin x}\\,dx=\\int_{\\pi}^{\\pi/2}(-u)e^{\\sin u}(-du)=\\int_{\\pi}^{\\pi/2}ue^{\\sin u}\\,du=-\\int_{\\pi/2}^{\\pi}ue^{\\sin u}\\,du.$$</p><p>Adding this to the second integral, the $\\int u e^{\\sin u}\\,du$ pieces cancel exactly, leaving</p><p>$$\\int_0^{\\pi}f(x)\\,dx=\\int_{\\pi/2}^{\\pi}\\frac{4}{\\pi}\\,dx=\\frac4\\pi\\left(\\pi-\\frac\\pi2\\right)=\\frac4\\pi\\cdot\\frac\\pi2=2.$$</p>",
  "tested": "<p>Using the substitution $x\\to\\pi-x$ to exploit $\\sin(\\pi-x)=\\sin x$ and collapse a piecewise integral, instead of integrating $xe^{\\sin x}$ directly (which has no elementary antiderivative).</p>",
  "trap": "Trying to find an antiderivative of x·e^{sin x} directly instead of spotting the π−x symmetry that cancels the non-elementary pieces."
},

{
  "id": "p.jam.2022.55",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 55,
  "marks": 2,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence of an interlaced power series",
  "type": "NAT",
  "prompt": "<p>Let $r$ be the radius of convergence of the power series</p><p>$$\\frac13+\\frac{x}{5}+\\frac{x^2}{3^2}+\\frac{x^3}{5^2}+\\frac{x^4}{3^3}+\\frac{x^5}{5^3}+\\frac{x^6}{3^4}+\\frac{x^7}{5^4}+\\cdots.$$</p><p>Then the value of $r^2$ is equal to _________. (Rounded off to two decimal places)</p>",
  "answer": {
    "value": 3,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>The coefficients alternate between powers of $1/3$ and $1/5$: $$a_{2k}=\\frac{1}{3^{k+1}},\\qquad a_{2k+1}=\\frac{1}{5^{k+1}}\\qquad(k=0,1,2,\\dots).$$</p><p>The ratio test does not directly apply here, since $a_{n+1}/a_n$ does not settle to a single limit as $n$ alternates between even and odd. Instead use the Cauchy&ndash;Hadamard formula with $\\limsup$:</p><p>$$|a_{2k}|^{1/(2k)}=3^{-\\frac{k+1}{2k}}\\to3^{-1/2},\\qquad |a_{2k+1}|^{1/(2k+1)}=5^{-\\frac{k+1}{2k+1}}\\to5^{-1/2}.$$</p><p>So $\\limsup_n|a_n|^{1/n}=\\max\\!\\left(3^{-1/2},5^{-1/2}\\right)=3^{-1/2}$ (since $3^{-1/2}\\approx0.577>5^{-1/2}\\approx0.447$, so the even-indexed subsequence dominates the limsup).</p><p>Hence $r=\\dfrac{1}{\\limsup|a_n|^{1/n}}=\\sqrt3$, so $r^2=3$.</p>",
  "tested": "<p>The Cauchy&ndash;Hadamard theorem via limsup, essential when an interlaced power series makes the ordinary ratio test inapplicable.</p>",
  "trap": "Applying the ratio test naively to consecutive terms, or using the smaller of the two subsequence limits (1/√5) instead of the limsup (the larger one, 1/√3)."
},

{
  "id": "p.jam.2022.59",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 59,
  "marks": 2,
  "neg": 0,
  "sec": "6.3",
  "tests": [
    "c.6.3.2"
  ],
  "title": "A limit resolved by the Mean Value Theorem for e^t",
  "type": "NAT",
  "prompt": "<p>Let $f:(-1,1)\\to\\mathbb{R}$ and $g:(-1,1)\\to\\mathbb{R}$ be thrice continuously differentiable functions such that $f(x)\\ne g(x)$ for every nonzero $x\\in(-1,1)$. Suppose</p><p>$$f(0)=\\ln 2,\\quad f'(0)=\\pi,\\quad f''(0)=\\pi^2,\\quad\\text{and}\\quad f'''(0)=\\pi^9$$</p><p>and</p><p>$$g(0)=\\ln 2,\\quad g'(0)=\\pi,\\quad g''(0)=\\pi^2,\\quad\\text{and}\\quad g'''(0)=\\pi^3.$$</p><p>Then the value of the limit</p><p>$$\\lim_{x\\to 0}\\frac{e^{f(x)}-e^{g(x)}}{f(x)-g(x)}$$</p><p>is equal to _________. (Rounded off to two decimal places)</p>",
  "answer": {
    "value": 2,
    "tol": 0.01,
    "dp": 2
  },
  "approach": "<p>Rather than expanding both sides in a full Taylor series, apply the Mean Value Theorem to $\\varphi(t)=e^t$ on the interval between $f(x)$ and $g(x)$.</p>",
  "solution": "<p>Since $f(0)=g(0)=\\ln2$ and $f,g$ are continuous, $f(x)\\to\\ln2$ and $g(x)\\to\\ln2$ as $x\\to0$; by hypothesis $f(x)\\ne g(x)$ for $x\\ne0$ near $0$, so the ratio is well defined there.</p><p>Apply the Mean Value Theorem to $\\varphi(t)=e^t$ between $f(x)$ and $g(x)$: there is $\\xi(x)$ strictly between $f(x)$ and $g(x)$ such that</p><p>$$e^{f(x)}-e^{g(x)}=e^{\\xi(x)}\\big(f(x)-g(x)\\big)\\ \\Longrightarrow\\ \\frac{e^{f(x)}-e^{g(x)}}{f(x)-g(x)}=e^{\\xi(x)}.$$</p><p>As $x\\to0$, both $f(x)\\to\\ln2$ and $g(x)\\to\\ln2$, so $\\xi(x)$, squeezed between them, also $\\to\\ln2$. By continuity of $e^t$,</p><p>$$\\lim_{x\\to0}e^{\\xi(x)}=e^{\\ln2}=2.$$</p><p>(A direct Taylor expansion confirms the same value: writing $f(x)-g(x)\\sim\\tfrac{\\pi^9-\\pi^3}{6}x^3$ and $e^{f(x)}-e^{g(x)}\\sim 2\\cdot\\tfrac{\\pi^9-\\pi^3}{6}x^3$ near $0$, the ratio still tends to $2$. The given third derivatives only guarantee $f(x)\\ne g(x)$ near $0$; they do not otherwise affect the value of the limit.)</p>",
  "tested": "<p>Applying the Mean Value Theorem to the exponential function itself, rather than L'Hospital's Rule, to evaluate a $0/0$-type limit whose functions are known only through their derivatives at a point.</p>",
  "trap": "Assuming the answer must depend on the given third derivatives (π^9 vs π^3), since they are the only place f and g differ — they turn out to be a red herring for the value of the limit."
},

{
  "id": "p.jam.2022.60",
  "course": "ra2",
  "exam": "JAM",
  "year": 2022,
  "paper": "MA",
  "qno": 60,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Recovering f and g from integral identities via the FTC",
  "type": "NAT",
  "prompt": "<p>If $f:[0,\\infty)\\to\\mathbb{R}$ and $g:[0,\\infty)\\to[0,\\infty)$ are continuous functions such that</p><p>$$\\int_0^{x^3+x^2}f(t)\\,dt=x^2\\quad\\text{and}\\quad \\int_0^{g(x)}t^2\\,dt=9(x+1)^3\\quad\\text{for all } x\\in[0,\\infty),$$</p><p>then the value of</p><p>$$f(2)+g(2)+16\\,f(12)$$</p><p>is equal to _________. (Rounded off to two decimal places)</p>",
  "answer": {
    "value": 13.4,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p><b>Finding f.</b> Differentiate $\\displaystyle\\int_0^{x^3+x^2}f(t)\\,dt=x^2$ with respect to $x$ using the Fundamental Theorem of Calculus (Second Form) together with the Chain Rule:</p><p>$$f(x^3+x^2)\\cdot(3x^2+2x)=2x\\ \\Longrightarrow\\ f(x^3+x^2)=\\frac{2x}{3x^2+2x}=\\frac{2}{3x+2}\\quad(x\\ne0).$$</p><p>For $f(2)$: solve $x^3+x^2=2$; $x=1$ works, so $$f(2)=\\frac{2}{3(1)+2}=\\frac25=0.4.$$</p><p>For $f(12)$: solve $x^3+x^2=12$; $x=2$ works, so $$f(12)=\\frac{2}{3(2)+2}=\\frac28=0.25.$$</p><p><b>Finding g.</b> From $\\displaystyle\\int_0^{g(x)}t^2\\,dt=\\frac{g(x)^3}{3}=9(x+1)^3$, we get $g(x)^3=27(x+1)^3$, so, taking the positive cube root (as $g\\ge0$), $$g(x)=3(x+1)\\ \\Longrightarrow\\ g(2)=3(3)=9.$$</p><p>Hence $$f(2)+g(2)+16f(12)=0.4+9+16(0.25)=0.4+9+4=13.4.$$</p>",
  "tested": "<p>The Fundamental Theorem of Calculus (differentiating an integral with a variable, differentiable upper limit) combined with the Chain Rule to recover the integrand pointwise.</p>",
  "trap": "Differentiating ∫₀^{x³+x²} f(t)dt as if the upper limit were just x (dropping the chain-rule factor 3x²+2x), or picking the wrong root x when solving x³+x² = 2 or = 12."
},

{
  "id": "p.jam.2021.03",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 3,
  "marks": 1,
  "neg": -0.33,
  "sec": "5.3",
  "tests": [
    "c.5.3.7"
  ],
  "title": "Periodic continuous function and the shift by π",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a continuous function satisfying $f(x) = f(x+1)$ for all $x\\in\\mathbb{R}$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is not necessarily bounded above."
    },
    {
      "k": "B",
      "t": "there exists a unique $x_0\\in\\mathbb{R}$ such that $f(x_0+\\pi)=f(x_0)$."
    },
    {
      "k": "C",
      "t": "there is no $x_0\\in\\mathbb{R}$ such that $f(x_0+\\pi)=f(x_0)$."
    },
    {
      "k": "D",
      "t": "there exist infinitely many $x_0\\in\\mathbb{R}$ such that $f(x_0+\\pi)=f(x_0)$."
    }
  ],
  "answer": "D",
  "solution": "<p>Define $g(x) = f(x+\\pi) - f(x)$. Since $f$ has period $1$, the average of $g$ over one period is</p><p>$$\\int_0^1 g(x)\\,dx = \\int_0^1 f(x+\\pi)\\,dx - \\int_0^1 f(x)\\,dx = \\int_\\pi^{\\pi+1} f(x)\\,dx - \\int_0^1 f(x)\\,dx = 0,$$</p><p>because $f$ periodic with period $1$ gives the same integral over any interval of length $1$. So $g$ is continuous, periodic with period $1$, and has average value $0$ over a period. If $g$ never vanished it would keep one sign throughout $[0,1]$, forcing a nonzero average — contradiction. Hence by the <b>Intermediate Value Theorem</b>, $g(x_0)=0$ for some $x_0$, i.e. $f(x_0+\\pi)=f(x_0)$.</p><p>Periodicity finishes the job: for any integer $n$, $g(x_0+n) = f(x_0+n+\\pi) - f(x_0+n) = f(x_0+\\pi) - f(x_0) = 0$ (using $f(x+n)=f(x)$ repeatedly). So $x_0+n$ is also a root of $g$ for every integer $n$ — there are infinitely many solutions, not just one. This rules out (B) and (C), and gives (D).</p><p>(A) is false too: a continuous function with $f(x)=f(x+1)$ for all $x$ is completely determined by its (bounded, by the Maximum&ndash;Minimum Theorem) values on the compact interval $[0,1]$, hence bounded on all of $\\mathbb{R}$.</p>",
  "tested": "Bolzano's IVT applied to an auxiliary periodic function built from the given identity, then propagated by periodicity.",
  "trap": "Finding one solution and stopping at \"unique\" (B) without noticing that periodicity of f forces every translate x0+n to also be a solution."
},

{
  "id": "p.jam.2021.04",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 4,
  "marks": 1,
  "neg": -0.33,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "A vanishing scaled integral forces f identically zero",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a continuous function such that for all $x\\in\\mathbb{R}$,</p><p>$$\\int_0^1 f(xt)\\,dt = 0. \\qquad (*)$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ must be identically $0$ on the whole of $\\mathbb{R}$."
    },
    {
      "k": "B",
      "t": "there is an $f$ satisfying $(*)$ that is identically $0$ on $(0,1)$ but not identically $0$ on the whole of $\\mathbb{R}$."
    },
    {
      "k": "C",
      "t": "there is an $f$ satisfying $(*)$ that takes both positive and negative values."
    },
    {
      "k": "D",
      "t": "there is an $f$ satisfying $(*)$ that is $0$ at infinitely many points, but is not identically zero."
    }
  ],
  "answer": "A",
  "solution": "<p>Fix $x\\ne 0$ and substitute $u=xt$ (so $du = x\\,dt$):</p><p>$$\\int_0^1 f(xt)\\,dt = \\frac{1}{x}\\int_0^x f(u)\\,du.$$</p><p>The hypothesis says this is $0$ for every $x\\ne 0$, so $\\int_0^x f(u)\\,du = 0$ for every $x\\ne 0$ (and trivially for $x=0$). Let $F(x) = \\int_0^x f(u)\\,du$; then $F\\equiv 0$ on $\\mathbb{R}$. Since $f$ is continuous, $F$ is differentiable with $F'(x) = f(x)$ (Fundamental Theorem of Calculus, second form). Differentiating the identity $F\\equiv 0$ gives $f(x) = F'(x) = 0$ for every $x$. So $f$ is forced to be identically $0$ — option (A). This immediately rules out (B), (C) and (D), each of which requires $(*)$ to be satisfiable by a non-zero $f$.</p>",
  "tested": "The Fundamental Theorem of Calculus (differentiating a parametrised integral that vanishes identically forces the integrand to vanish).",
  "trap": "Treating (*) as one equation at one value of x, rather than a family of constraints (one for every x) that pins F(x)=\\int_0^x f down to the zero function everywhere."
},

{
  "id": "p.jam.2021.15",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 15,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.1",
  "tests": [
    "c.9.1.5"
  ],
  "title": "No permutation of ℕ can make Σ f(n)/n² converge",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{N}\\to\\mathbb{N}$ be a bijective map such that</p><p>$$\\sum_{n=1}^\\infty \\frac{f(n)}{n^2} < +\\infty.$$</p><p>The number of such bijective maps is</p>",
  "options": [
    {
      "k": "A",
      "t": "exactly one."
    },
    {
      "k": "B",
      "t": "zero."
    },
    {
      "k": "C",
      "t": "finite but more than one."
    },
    {
      "k": "D",
      "t": "infinite."
    }
  ],
  "answer": "B",
  "solution": "<p>We show <b>no</b> bijection $f:\\mathbb{N}\\to\\mathbb{N}$ can make this series converge.</p><p>For any $N$, the numbers $f(1),f(2),\\dots,f(N)$ are $N$ <i>distinct</i> positive integers, so their sum is at least the sum of the $N$ smallest positive integers:</p><p>$$S_N := \\sum_{n=1}^N f(n) \\ \\ge\\ 1+2+\\cdots+N = \\frac{N(N+1)}{2}.$$</p><p>Apply summation by parts to $\\sum f(n)/n^2$ with weights $w_n = 1/n^2$ (decreasing to $0$). Writing $w_N - w_{N+1} = \\dfrac{1}{N^2}-\\dfrac{1}{(N+1)^2} = \\dfrac{2N+1}{N^2(N+1)^2}$, Abel's identity gives, for any $M$,</p><p>$$\\sum_{n=1}^{M} \\frac{f(n)}{n^2} = \\sum_{N=1}^{M-1} S_N\\,(w_N-w_{N+1}) + S_M w_M \\ \\ge\\ \\sum_{N=1}^{M-1} \\frac{N(N+1)}{2}\\cdot\\frac{2N+1}{N^2(N+1)^2}.$$</p><p>Each term on the right equals $\\dfrac{2N+1}{2N(N+1)} \\sim \\dfrac{1}{N}$ for large $N$, and $\\sum 1/N$ diverges. So the partial sums $\\sum_{n=1}^M f(n)/n^2$ are bounded below by (essentially) a divergent harmonic-type sum, hence they diverge to $+\\infty$ as $M\\to\\infty$ — <i>for every</i> bijection $f$. So the hypothesis $\\sum f(n)/n^2 <\\infty$ can never be met: the number of such maps is $0$.</p>",
  "tested": "A rearrangement-type fact: permuting the natural numbers can never make \\sum f(n)/n^2 converge, because any N distinct positive integers already sum to at least N(N+1)/2 (c.9.1.5).",
  "trap": "Assuming that \"shuffling\" the numerator can defeat the 1/n^2 decay; the pigeonhole bound on sums of distinct integers rules this out for every permutation, not just the identity."
},

{
  "id": "p.jam.2021.17",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 17,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.1"
  ],
  "title": "MVT point always the midpoint forces a quadratic",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be an infinitely differentiable function such that for all $a,b\\in\\mathbb{R}$ with $a<b$,</p><p>$$\\frac{f(b)-f(a)}{b-a} = f'\\Big(\\frac{a+b}{2}\\Big).$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ must be a polynomial of degree less than or equal to $2$."
    },
    {
      "k": "B",
      "t": "$f$ must be a polynomial of degree greater than $2$."
    },
    {
      "k": "C",
      "t": "$f$ is not a polynomial."
    },
    {
      "k": "D",
      "t": "$f$ must be a linear polynomial."
    }
  ],
  "answer": "A",
  "solution": "<p>Fix $a$ and write $b=a+2t$ ($t\\ne 0$, extending by symmetry to negative $t$ as well). Expand both sides as a Taylor series in $t$ about $a$ (valid since $f$ is infinitely differentiable):</p><p>$$\\frac{f(a+2t)-f(a)}{2t} = f'(a) + f''(a)\\,t + \\frac{2}{3}f'''(a)\\,t^2 + \\frac{1}{3}f''''(a)\\,t^3+\\cdots$$</p><p>$$f'(a+t) = f'(a) + f''(a)\\,t + \\frac{1}{2}f'''(a)\\,t^2 + \\frac{1}{6}f''''(a)\\,t^3 + \\cdots$$</p><p>These two power series in $t$ must agree for all small $t$, so their coefficients match term by term. The $t^0$ and $t^1$ coefficients already agree automatically. Comparing $t^2$: $\\frac23 f'''(a) = \\frac12 f'''(a)$, forcing $f'''(a)=0$. Comparing $t^3$ then forces $f''''(a)=0$, and inductively every derivative of order $\\ge 3$ vanishes at $a$. Since $a$ was arbitrary, $f'''\\equiv 0$ on $\\mathbb{R}$, so $f$ is a polynomial of degree at most $2$.</p><p>(Sanity check: for $f(x)=x^3$, $\\frac{b^3-a^3}{b-a}=a^2+ab+b^2$ while $f'\\big(\\frac{a+b}{2}\\big)=\\frac34(a+b)^2$; their difference is $\\frac14(a-b)^2\\ne 0$, so cubics genuinely fail, confirming the degree cannot exceed $2$.)</p>",
  "tested": "Taylor expansion forcing all derivatives of order at least 3 to vanish — an application of Taylor's Theorem (c.6.4.1).",
  "trap": "Assuming \"the MVT point is always the midpoint\" is a mild condition; it is in fact so restrictive it pins f down to a quadratic."
},

{
  "id": "p.jam.2021.18",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 18,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.1",
  "tests": [
    "c.5.1.6h"
  ],
  "title": "An inverted Thomae function and strict local minima",
  "type": "MCQ",
  "prompt": "<p>Consider the function</p><p>$$f(x) = \\begin{cases} 1 & \\text{if } x\\in (\\mathbb{R}\\setminus\\mathbb{Q})\\cup\\{0\\}, \\\\[4pt] 1-\\dfrac1p & \\text{if } x=\\dfrac{n}{p},\\ n\\in\\mathbb{Z}\\setminus\\{0\\},\\ p\\in\\mathbb{N},\\ \\gcd(n,p)=1. \\end{cases}$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "all $x\\in\\mathbb{Q}\\setminus\\{0\\}$ are strict local minima for $f$."
    },
    {
      "k": "B",
      "t": "$f$ is continuous at all $x\\in\\mathbb{Q}$."
    },
    {
      "k": "C",
      "t": "$f$ is not continuous at all $x\\in\\mathbb{R}\\setminus\\mathbb{Q}$."
    },
    {
      "k": "D",
      "t": "$f$ is not continuous at $x=0$."
    }
  ],
  "answer": "A",
  "solution": "<p>This is a variant of Thomae's function. For any fixed bound $P$, only finitely many rationals with denominator $\\le P$ lie in a bounded neighbourhood of any point, so as $x\\to y$ through rationals $n/p$, the denominator $p\\to\\infty$ necessarily, and $f(x)=1-\\frac1p \\to 1$; also $f(x)=1$ for irrational $x$ near $y$. Hence</p><p>$$\\lim_{x\\to y} f(x) = 1 \\quad \\text{for every } y\\in\\mathbb{R}\\ (\\text{rational or irrational}).$$</p><p>At an irrational $y$ (or $y=0$), $f(y)=1$ too, so $f$ is <b>continuous</b> there — this already rules out (C) and (D) (both false).</p><p>At a rational $y=n/p\\ne 0$, $f(y) = 1-\\frac1p < 1 = \\lim_{x\\to y}f(x)$, so $f$ is discontinuous at every nonzero rational: (B) is false. Moreover, since $f(x)\\to 1$ as $x\\to y$, for $\\varepsilon = \\frac{1}{2p}$ there is a punctured neighbourhood of $y$ on which $f(x) > 1-\\frac{1}{2p} > 1-\\frac1p = f(y)$. So every point of that punctured neighbourhood has a strictly larger $f$-value than $f(y)$: $y$ is a <b>strict local minimum</b>. This holds for every nonzero rational $y$, giving (A).</p>",
  "tested": "Thomae's Function Is Continuous Exactly at the Irrationals (c.5.1.6h), used here in an inverted form.",
  "trap": "Confusing this with ordinary Thomae's function (continuous at irrationals, discontinuous at rationals) and missing that the roles combine here to make every rational a strict local minimum, not merely a discontinuity."
},

{
  "id": "p.jam.2021.21",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Gronwall-type bound from an integral inequality",
  "type": "MCQ",
  "prompt": "<p>Let $f:[0,1]\\to[0,\\infty)$ be a continuous function such that</p><p>$$\\big(f(t)\\big)^2 < 1 + 2\\int_0^t f(s)\\,ds, \\quad \\text{for all } t\\in[0,1].$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$f(t) < 1+t$ for all $t\\in[0,1]$."
    },
    {
      "k": "B",
      "t": "$f(t) > 1+t$ for all $t\\in[0,1]$."
    },
    {
      "k": "C",
      "t": "$f(t) = 1+t$ for all $t\\in[0,1]$."
    },
    {
      "k": "D",
      "t": "$f(t) < 1+\\dfrac{t}{2}$ for all $t\\in[0,1]$."
    }
  ],
  "answer": "A",
  "solution": "<p>Let $F(t) = 1+2\\int_0^t f(s)\\,ds$, so $F(0)=1$ and, by the Fundamental Theorem of Calculus, $F'(t)=2f(t)$. The hypothesis is $f(t)^2 < F(t)$, and since $f\\ge 0$, $f(t) < \\sqrt{F(t)}$. Hence</p><p>$$F'(t) = 2f(t) < 2\\sqrt{F(t)}.$$</p><p>Let $H(t)=\\sqrt{F(t)}$ (well-defined since $F(t)\\ge 1>0$). Then $H'(t) = \\dfrac{F'(t)}{2\\sqrt{F(t)}} < 1$. Since $H(0)=1$, integrating $H'<1$ over $[0,t]$ gives $H(t) - H(0) < t$, i.e. $\\sqrt{F(t)} < 1+t$. Combined with $f(t)<\\sqrt{F(t)}$,</p><p>$$f(t) < 1+t \\quad \\text{for all } t\\in[0,1].$$</p><p>This is (A). The bound $1+t$ is essentially sharp: equality in the original inequality would force $f(t)=1+t$ exactly, so no tighter linear bound like $1+t/2$ (option D) can hold in general.</p>",
  "tested": "A Gronwall-type comparison: bounding an integral inequality by comparing to the ODE F'=2\\sqrt F, using the FTC (c.7.3.5) to differentiate the integral.",
  "trap": "Option (D) is the tempting over-claim: the Gronwall argument gives the sharp bound $1+t$ and nothing better, so halving it is not justified by the hypothesis.",
  "provenance": "JAM 2021 MA Q21. Option (D) reads $1+t/2$ on the printed page; some text extractions of this PDF render it as $1+2t$. Transcribed from the page image."
},

{
  "id": "p.jam.2021.26",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 26,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.3",
  "tests": [
    "c.5.3.9",
    "c.5.3.10"
  ],
  "title": "Fixed-point set of an idempotent continuous map",
  "type": "MCQ",
  "prompt": "<p>Let $f:[0,1]\\to[0,1]$ be a non-constant continuous function such that $f\\circ f = f$. Define</p><p>$$E_f = \\{x\\in[0,1] : f(x)=x\\}.$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$E_f$ is neither open nor closed."
    },
    {
      "k": "B",
      "t": "$E_f$ is an interval."
    },
    {
      "k": "C",
      "t": "$E_f$ is empty."
    },
    {
      "k": "D",
      "t": "$E_f$ need not be an interval."
    }
  ],
  "answer": "B",
  "solution": "<p>Claim: $E_f$ equals the <b>range</b> of $f$. Indeed, if $y=f(x)$ for some $x$, then $f(y)=f(f(x))=f(x)=y$, so $y\\in E_f$; conversely if $x\\in E_f$ then $x=f(x)$ is obviously in the range. So $E_f = f([0,1])$.</p><p>Since $f$ is continuous on the compact interval $[0,1]$, its image $f([0,1])$ is a closed, bounded interval (Continuous Image of a Closed Bounded Interval, and Preservation of Intervals). Because $f$ is non-constant, this interval has more than one point. So $E_f$ is always a genuine (closed) interval — option (B). This rules out (A) (it is closed), (C) (it is nonempty, since the range of $f$ is nonempty), and (D) (it is always an interval, not just \"sometimes\").</p>",
  "tested": "Preservation of Intervals / Continuous Image of a Closed Bounded Interval (c.5.3.9, c.5.3.10), applied after recognising E_f as the range of f.",
  "trap": "Trying to analyze E_f directly as a fixed-point set instead of first noticing E_f = f([0,1]), which turns this into a one-line consequence of continuity on a compact interval."
},

{
  "id": "p.jam.2021.30",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 30,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1"
  ],
  "title": "Comparing two near-harmonic series",
  "type": "MCQ",
  "prompt": "<p>Consider the two series</p><p>$$\\text{I.}\\ \\ \\sum_{n=1}^{\\infty} \\frac{1}{n^{1+(1/n)}} \\qquad \\text{and} \\qquad \\text{II.}\\ \\ \\sum_{n=1}^{\\infty} \\frac{1}{n^{2-n^{1/n}}}.$$</p><p>Which one of the following holds?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both I and II converge."
    },
    {
      "k": "B",
      "t": "Both I and II diverge."
    },
    {
      "k": "C",
      "t": "I converges and II diverges."
    },
    {
      "k": "D",
      "t": "I diverges and II converges."
    }
  ],
  "answer": "B",
  "solution": "<p><b>Series I.</b> Write $\\dfrac{1}{n^{1+1/n}} = \\dfrac1n\\cdot n^{-1/n}$. Since $n^{-1/n}\\to 1$ as $n\\to\\infty$, the limit comparison test with $\\sum \\frac1n$ gives $\\displaystyle\\lim_{n\\to\\infty} \\frac{1/n^{1+1/n}}{1/n} = \\lim_{n\\to\\infty} n^{-1/n} = 1 \\in (0,\\infty)$. Since $\\sum 1/n$ diverges, Series I diverges too.</p><p><b>Series II.</b> Here $n^{1/n} > 1$ strictly for every $n\\ge 2$ (and $n^{1/n}\\to 1$ as $n\\to\\infty$), so the exponent $2-n^{1/n} < 1$ for every $n\\ge 2$. Hence $\\dfrac{1}{n^{2-n^{1/n}}} > \\dfrac1n$ for every $n\\ge 2$ (a smaller exponent on $n>1$ gives a larger power). By direct comparison with the divergent harmonic series $\\sum 1/n$, Series II also diverges.</p><p>So both I and II diverge — option (B).</p>",
  "tested": "Limit comparison and direct comparison against the harmonic series, using n^{1/n}\\to1 (c.9.2.1).",
  "trap": "Seeing an exponent that \"looks bigger than 1\" (as in n^{1+1/n}) and assuming convergence without checking that the exponent's excess over 1 shrinks too fast (like 1/n) to help."
},

{
  "id": "p.jam.2021.32",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 32,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.7",
    "c.5.3.7"
  ],
  "title": "Counting real roots of a high-degree polynomial",
  "type": "MSQ",
  "prompt": "<p>Consider the equation</p><p>$$x^{2021}+x^{2020}+\\cdots+x-1=0.$$</p><p>Then</p>",
  "options": [
    {
      "k": "A",
      "t": "all real roots are positive."
    },
    {
      "k": "B",
      "t": "exactly one real root is positive."
    },
    {
      "k": "C",
      "t": "exactly one real root is negative."
    },
    {
      "k": "D",
      "t": "no real root is positive."
    }
  ],
  "answer": [
    "A",
    "B"
  ],
  "solution": "<p>Let $P(x)=x^{2021}+x^{2020}+\\cdots+x-1 = -1+\\sum_{k=1}^{2021}x^k$.</p><p><b>On $[0,\\infty)$:</b> $P'(x) = 1+2x+3x^2+\\cdots+2021x^{2020} > 0$ for $x\\ge 0$ (a sum of positive terms), so $P$ is strictly increasing there. Since $P(0)=-1<0$ and $P(x)\\to\\infty$ as $x\\to\\infty$, the Intermediate Value Theorem together with strict monotonicity gives exactly <b>one</b> root in $(0,\\infty)$ — confirming (B).</p><p><b>On $(-\\infty,0]$:</b> using the closed form $\\sum_{k=1}^{2021}x^k = \\dfrac{x-x^{2022}}{1-x}$ for $x\\ne 1$: for $x\\in[-1,0)$ the numerator $x-x^{2022}<0$ (since $x<0\\le x^{2022}$) and the denominator $1-x>0$, so the sum is negative and $P(x) = -1+(\\text{negative}) < -1 < 0$. For $x<-1$, the odd power $x^{2021}$ is a large negative number that dominates the sum, and the same closed form again gives a large negative sum, so $P(x)<0$. At $x=0$, $P(0)=-1<0$. Hence $P(x)<0$ for <i>every</i> $x\\le 0$: there are <b>no</b> non-positive real roots.</p><p>So the equation has exactly one real root in total, and it is positive. This makes (A) true (the only real root there is happens to be positive) and (B) true, while (C) and (D) are false.</p>",
  "tested": "Sign analysis via the derivative and the Intermediate Value Theorem: strict monotonicity plus a sign change pins down the exact number and location of real roots (c.6.2.7, c.5.3.7).",
  "trap": "Assuming a degree-2021 polynomial must have several real roots, without checking that the derivative is strictly positive throughout the region where roots could occur."
},

{
  "id": "p.jam.2021.35",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 35,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.7",
    "c.6.1.1"
  ],
  "title": "Positive derivative at a point vs. increasing on an interval",
  "type": "MSQ",
  "prompt": "<p>Let $f:(a,b)\\to\\mathbb{R}$ be a differentiable function on $(a,b)$. Which of the following statements is/are true?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f'>0$ in $(a,b)$ implies that $f$ is increasing in $(a,b)$."
    },
    {
      "k": "B",
      "t": "$f$ is increasing in $(a,b)$ implies that $f'>0$ in $(a,b)$."
    },
    {
      "k": "C",
      "t": "If $f'(x_0)>0$ for some $x_0\\in(a,b)$, then there exists a $\\delta>0$ such that $f(x)>f(x_0)$ for all $x\\in(x_0,x_0+\\delta)$."
    },
    {
      "k": "D",
      "t": "If $f'(x_0)>0$ for some $x_0\\in(a,b)$, then $f$ is increasing in a neighbourhood of $x_0$."
    }
  ],
  "answer": [
    "A",
    "C"
  ],
  "solution": "<p><b>(A) True.</b> This is the Monotonicity Criterion for differentiable functions: if $f'>0$ throughout $(a,b)$, then for any $x_1<x_2$ in $(a,b)$, the Mean Value Theorem gives $f(x_2)-f(x_1) = f'(c)(x_2-x_1) > 0$ for some $c\\in(x_1,x_2)$, so $f$ is strictly increasing.</p><p><b>(B) False.</b> $f(x)=x^3$ is strictly increasing on any interval containing $0$, yet $f'(0)=0$, not $>0$.</p><p><b>(C) True.</b> By definition of the derivative, $\\displaystyle\\lim_{h\\to0^+} \\frac{f(x_0+h)-f(x_0)}{h} = f'(x_0) > 0$. Since the limit is positive, the difference quotient itself must be positive for all sufficiently small $h>0$, i.e. $f(x_0+h) > f(x_0)$ for $h\\in(0,\\delta)$, for some $\\delta>0$.</p><p><b>(D) False.</b> A positive derivative <i>at one point</i> does not force monotonicity <i>near</i> that point unless $f'$ is continuous there. The classic counterexample is $f(x) = \\tfrac{x}{2} + x^2\\sin\\!\\big(\\tfrac1x\\big)$ (with $f(0)=0$): here $f'(0)=\\tfrac12>0$, but $f'(x) = \\tfrac12 + 2x\\sin(1/x) - \\cos(1/x)$ oscillates in sign infinitely often as $x\\to0$, so $f$ is not monotonic on any neighbourhood of $0$.</p><p>So the true statements are (A) and (C).</p>",
  "tested": "Distinguishing \"positive derivative at a point\" (c.6.1.1) from \"increasing on a whole interval\" (needs the Mean Value Theorem / Monotonicity Criterion, c.6.2.7) — the classic point-vs-neighbourhood trap.",
  "trap": "Believing f'(x0)>0 implies f is increasing near x0 (option D) — true only when f' is also continuous at x0; false in general."
},

{
  "id": "p.jam.2021.53",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 53,
  "marks": 2,
  "neg": 0,
  "sec": "5.3",
  "tests": [
    "c.5.3.10",
    "c.2.4.9"
  ],
  "title": "A rational/irrational shift condition with no continuous solution",
  "type": "NAT",
  "prompt": "<p>Consider those continuous functions $f:\\mathbb{R}\\to\\mathbb{R}$ that have the property that given any $x\\in\\mathbb{R}$,</p><p>$$f(x)\\in\\mathbb{Q} \\text{ if and only if } f(x+1)\\in\\mathbb{R}\\setminus\\mathbb{Q}.$$</p><p>The number of such functions is ____.</p>",
  "answer": {
    "value": 0,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Suppose such an $f$ exists. Define $g(x) = f(x) - f(x+1)$, which is continuous. By hypothesis, exactly one of $f(x),f(x+1)$ is rational and the other irrational at every $x$; a rational minus an irrational (in either order) is always irrational, so $g(x)$ is irrational for <i>every</i> $x\\in\\mathbb{R}$.</p><p>But $g$ is continuous and $\\mathbb{R}$ is an interval, so by the Preservation of Intervals property, $g(\\mathbb{R})$ is itself an interval. If $g(\\mathbb{R})$ contained two distinct values it would contain an entire nondegenerate interval between them — and every nondegenerate interval contains a rational number (density of $\\mathbb{Q}$), contradicting \"$g(x)$ irrational for every $x$\". So $g$ must be <b>constant</b>: $g\\equiv c$ for some fixed irrational $c$, i.e. $f(x+1) = f(x) - c$ for all $x$.</p><p>Now, whenever $f(x)\\in\\mathbb{Q}$, $f(x+1)=f(x)-c\\notin\\mathbb{Q}$ automatically (consistent with the hypothesis). But the <i>converse</i> direction also demands that whenever $f(x)\\notin\\mathbb{Q}$, $f(x+1)=f(x)-c \\in \\mathbb{Q}$, i.e. $f(x) \\in \\mathbb{Q}+c$. So every value of $f$ must lie in $\\mathbb{Q}\\cup(\\mathbb{Q}+c)$ — a <b>countable</b> set. But if $f$ is non-constant its range is a nondegenerate interval, which is uncountable — contradiction. And if $f$ is constant, $f(x)$ and $f(x+1)$ are equal, so they can never have opposite rationality — also a contradiction.</p><p>Either way we reach a contradiction, so <b>no</b> such function exists: the answer is $0$.</p>",
  "tested": "Preservation of Intervals (continuous image of ℝ is an interval, c.5.3.10) combined with the density of ℚ in every interval (c.2.4.9) to force a continuous function into a countable set to be constant.",
  "trap": "Only checking the \"rational implies irrational\" direction of the biconditional and missing that the converse direction, combined with continuity, forces the whole range into a countable set — impossible for a non-constant continuous function."
},

{
  "id": "p.jam.2021.54",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 54,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.8",
    "c.5.6.5"
  ],
  "title": "Young's inequality for a function and its inverse",
  "type": "NAT",
  "prompt": "<p>The largest positive number $a$ such that</p><p>$$\\int_0^5 f(x)\\,dx + \\int_0^3 f^{-1}(x)\\,dx \\ge a$$</p><p>for every strictly increasing surjective continuous function $f:[0,\\infty)\\to[0,\\infty)$ is ____.</p>",
  "answer": {
    "value": 15,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Since $f:[0,\\infty)\\to[0,\\infty)$ is a strictly increasing continuous surjection, $f(0)=0$ and $f$ has a continuous, strictly increasing inverse $f^{-1}$ (Continuous Inverse Theorem). For any $A,B>0$, the areas under $y=f(x)$ from $0$ to $A$ and under $y=f^{-1}(x)$ from $0$ to $B$ together always cover the rectangle $[0,A]\\times[0,B]$ — this is Young's inequality for inverse functions:</p><p>$$\\int_0^A f(x)\\,dx + \\int_0^B f^{-1}(x)\\,dx \\ \\ge\\ AB,$$</p><p>with equality exactly when $f(A)=B$ (the graph of $f$ passes through the corner $(A,B)$, splitting the rectangle exactly along the curve).</p><p>Here $A=5,B=3$, so the sum is always $\\ge 15$. Equality is attained, e.g., by the linear map $f(x) = \\tfrac35 x$ (strictly increasing, continuous, surjective onto $[0,\\infty)$, and $f(5)=3$): direct computation gives $\\int_0^5 \\tfrac35x\\,dx + \\int_0^3 \\tfrac53 x\\,dx = \\tfrac{15}{2}+\\tfrac{15}{2}=15$. So $15$ is the greatest lower bound that works for every valid $f$, and it is attained: the largest such $a$ is $15$.</p>",
  "tested": "Young's inequality for a strictly increasing continuous bijection and its inverse, via integration by substitution / the geometric area interpretation of the Riemann integral (c.7.3.8, c.5.6.5)."
},

{
  "id": "p.jam.2021.57",
  "course": "ra2",
  "exam": "JAM",
  "year": 2021,
  "paper": "MA",
  "qno": 57,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.17"
  ],
  "title": "A highly oscillatory integral tends to zero",
  "type": "NAT",
  "prompt": "<p>The value of</p><p>$$\\lim_{n\\to\\infty} \\int_0^1 e^{x^2}\\sin(nx)\\,dx$$</p><p>is ____.</p>",
  "answer": {
    "value": 0,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Integrate by parts with $u=e^{x^2}$, $dv=\\sin(nx)\\,dx$ (so $du=2xe^{x^2}dx$, $v=-\\tfrac1n\\cos(nx)$):</p><p>$$\\int_0^1 e^{x^2}\\sin(nx)\\,dx = \\Big[-\\frac{e^{x^2}\\cos(nx)}{n}\\Big]_0^1 + \\frac{1}{n}\\int_0^1 2x\\,e^{x^2}\\cos(nx)\\,dx.$$</p><p>The boundary term is $O(1/n)$ (bounded numerator, denominator $n$), and the remaining integral is bounded (since $2xe^{x^2}$ is continuous, hence bounded, on $[0,1]$), so the whole right-hand side is $O(1/n) \\to 0$ as $n\\to\\infty$. Hence the limit is $0$.</p>",
  "tested": "An elementary, Riemann-integral version of the Riemann-Lebesgue phenomenon: integrating against a highly oscillatory sin(nx) drives the integral to 0, proved via Integration by Parts (c.7.3.17)."
},

{
  "id": "p.jam.2020.02",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 2,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Injectivity of a cubic on given intervals",
  "type": "MCQ",
  "prompt": "<p>Let $f(x) = 2x^3 - 9x^2 + 7$. Which of the following is true?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is one-one in the interval $[-1,1]$"
    },
    {
      "k": "B",
      "t": "$f$ is one-one in the interval $[2,4]$"
    },
    {
      "k": "C",
      "t": "$f$ is NOT one-one in the interval $[-4,0]$"
    },
    {
      "k": "D",
      "t": "$f$ is NOT one-one in the interval $[0,4]$"
    }
  ],
  "answer": "D",
  "solution": "<p>$f'(x) = 6x^2-18x = 6x(x-3)$, so $f'(x)>0$ on $(-\\infty,0)$, $f'(x)<0$ on $(0,3)$, and $f'(x)>0$ on $(3,\\infty)$. So $f$ increases up to $x=0$ (local max), decreases to $x=3$ (local min), then increases again.</p>\n<p>Key values: $f(-1)=-4$, $f(0)=7$, $f(1)=0$, $f(2)=-13$, $f(3)=-20$, $f(4)=-9$.</p>\n<p><b>(A)</b> $[-1,1]$ straddles the local max at $0$. Since $f$ rises from $-4$ to $7$ on $[-1,0]$, it hits every value in $[-4,7]$, including $f(1)=0$, at some point in $(-1,0)$. So $f$ is not one-one here — (A) false.</p>\n<p><b>(B)</b> $[2,4]$ straddles the local min at $3$. On $[2,3]$, $f$ falls from $-13$ to $-20$ (range $[-20,-13]$); on $[3,4]$, $f$ rises from $-20$ to $-9$ (range $[-20,-9]\\supseteq[-20,-13]$). So some value is hit twice — (B) false.</p>\n<p><b>(C)</b> On $[-4,0]$, $f'(x)=6x(x-3)\\ge 0$ throughout (product of two non-positive factors), with equality only at the single point $x=0$; so $f$ is strictly increasing on $[-4,0]$ and hence one-one. So (C), which claims $f$ is NOT one-one, is false.</p>\n<p><b>(D)</b> $[0,4]$ straddles the local min at $3$: $f$ falls from $7$ to $-20$ on $[0,3]$ (range $[-20,7]$), then rises from $-20$ to $-9$ on $[3,4]$ (range $[-20,-9]$). Since $[-20,-9]\\subset[-20,7]$, every value in $(-20,-9)$ is attained on both branches, e.g. some $x_1\\in(0,3)$ and $x_2\\in(3,4)$ with $f(x_1)=f(x_2)$. So $f$ is NOT one-one on $[0,4]$ — (D) is true.</p>",
  "tested": "Using the sign of $f'$ to locate intervals of strict monotonicity, and recognising that a local extremum inside an interval typically destroys injectivity there.",
  "trap": "Checking only the sign of $f'$ at the endpoints of an interval instead of over the whole interval, and missing that straddling a local extremum usually forces a repeated value."
},

{
  "id": "p.jam.2020.09",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 9,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence via the root test",
  "type": "MCQ",
  "prompt": "<p>The radius of convergence of the power series</p>\n<p>$$\\sum_{n=1}^{\\infty} \\left(\\frac{n+2}{n}\\right)^{n^2} x^n$$</p>\n<p>is</p>",
  "options": [
    {
      "k": "A",
      "t": "$e^2$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{1}{\\sqrt{e}}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{1}{e}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{1}{e^2}$"
    }
  ],
  "answer": "D",
  "solution": "<p>Here $a_n = \\left(1+\\dfrac{2}{n}\\right)^{n^2}$. By the Cauchy–Hadamard formula, $\\dfrac{1}{R} = \\lim_{n\\to\\infty} |a_n|^{1/n} = \\lim_{n\\to\\infty}\\left(1+\\dfrac{2}{n}\\right)^{n}$.</p>\n<p>Since $\\left(1+\\dfrac{2}{n}\\right)^n \\to e^2$, we get $1/R = e^2$, so $R = \\dfrac{1}{e^2}$.</p>",
  "tested": "The Cauchy–Hadamard formula for the radius of convergence, combined with the standard limit $(1+k/n)^n\\to e^k$.",
  "trap": "Applying the root test to $a_n$ but forgetting to take the n-th root of the exponent n² correctly, e.g. stopping at $(1+2/n)^{n^2/n}=(1+2/n)^n$ without recognising this already IS the needed limit e²."
},

{
  "id": "p.jam.2020.14",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 14,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.1",
  "tests": [
    "c.6.1.1"
  ],
  "title": "Second derivative of a piecewise quadratic/cubic junction",
  "type": "MCQ",
  "prompt": "<p>Let $a \\in \\mathbb{R}$. If</p>\n<p>$$f(x) = \\begin{cases} (x+a)^2, & x \\le 0 \\\\ (x+a)^3, & x > 0 \\end{cases}$$</p>\n<p>then</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{d^2f}{dx^2}$ does not exist at $x=0$ for any value of $a$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{d^2f}{dx^2}$ exists at $x=0$ for exactly one value of $a$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{d^2f}{dx^2}$ exists at $x=0$ for exactly two values of $a$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{d^2f}{dx^2}$ exists at $x=0$ for infinitely many values of $a$"
    }
  ],
  "answer": "A",
  "solution": "<p><b>Continuity at 0</b> is necessary first: $f(0)=a^2$ from the left piece, and the right piece approaches $a^3$ as $x\\to 0^+$. Continuity forces $a^2=a^3$, i.e. $a=0$ or $a=1$. For every other $a$, $f$ is not even continuous at $0$, so $f''(0)$ certainly fails to exist.</p>\n<p><b>Case $a=0$:</b> $f(x)=x^2$ ($x\\le0$), $f(x)=x^3$ ($x>0$). Left derivative at $0$: $\\lim_{x\\to0^-} x^2/x = 0$; right derivative: $\\lim_{x\\to0^+} x^3/x = 0$. So $f'(0)=0$ and $f'(x)=2x$ ($x\\le 0$), $f'(x)=3x^2$ ($x>0$). Now for $f''(0)$: left limit $\\lim_{x\\to0^-}\\frac{2x-0}{x}=2$, right limit $\\lim_{x\\to0^+}\\frac{3x^2-0}{x}=0$. These disagree ($2\\ne 0$), so $f''(0)$ does not exist.</p>\n<p><b>Case $a=1$:</b> $f(x)=(x+1)^2$ ($x\\le0$), $f(x)=(x+1)^3$ ($x>0$), both equal $1$ at $x=0$. Left derivative: $\\lim_{x\\to0^-}\\frac{(x+1)^2-1}{x}=\\lim_{x\\to0^-}(x+2)=2$. Right derivative: $\\lim_{x\\to0^+}\\frac{(x+1)^3-1}{x}=\\lim_{x\\to0^+}(x^2+3x+3)=3$. Since $2\\ne3$, $f$ is not even differentiable at $0$, so $f''(0)$ cannot exist either.</p>\n<p>So for every value of $a$ — including the only two candidates that pass continuity — $f''(0)$ fails to exist. Answer: (A).</p>",
  "tested": "Checking continuity as a prerequisite for differentiability, then computing one-sided derivatives (and one-sided second derivatives) directly from the difference quotient for a piecewise-defined function.",
  "trap": "Stopping after finding a=0 and a=1 make f continuous and assuming that's enough for f''(0) to exist — continuity, differentiability, and twice-differentiability must each be checked separately, and here neither candidate survives to the second derivative."
},

{
  "id": "p.jam.2020.28",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 28,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.5",
    "c.7.3.1"
  ],
  "title": "Pinning down f from a derivative-forcing inequality",
  "type": "MCQ",
  "prompt": "<p>Let $f:[0,1]\\to\\mathbb{R}$ be a continuous function such that $f\\left(\\dfrac12\\right) = -\\dfrac12$ and</p>\n<p>$$|f(x)-f(y)-(x-y)| \\le \\sin\\!\\left(|x-y|^2\\right)$$</p>\n<p>for all $x,y \\in [0,1]$. Then $\\displaystyle\\int_0^1 f(x)\\,dx$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "$-\\dfrac12$"
    },
    {
      "k": "B",
      "t": "$-\\dfrac14$"
    },
    {
      "k": "C",
      "t": "$\\dfrac14$"
    },
    {
      "k": "D",
      "t": "$\\dfrac12$"
    }
  ],
  "answer": "A",
  "approach": "<p>Treat the inequality as an \"error bound\" on the difference quotient of $f$: let $x\\to y$ and see what derivative it forces.</p>",
  "solution": "<p>Fix $y$ and divide the inequality by $|x-y|$ (for $x\\ne y$): $\\left|\\dfrac{f(x)-f(y)}{x-y} - 1\\right| \\le \\dfrac{\\sin(|x-y|^2)}{|x-y|}$.</p>\n<p>As $x\\to y$, writing $t=|x-y|\\to 0$, the right side $\\dfrac{\\sin(t^2)}{t}\\to 0$ (since $\\sin(t^2)\\sim t^2$ for small $t$). So $\\dfrac{f(x)-f(y)}{x-y}\\to 1$, i.e. $f$ is differentiable at every $y\\in[0,1]$ with $f'(y)=1$.</p>\n<p>Since $f'\\equiv 1$ on $[0,1]$, the Zero Derivative Characterization applied to $f(x)-x$ gives $f(x)=x+C$ for a constant $C$. Using $f(1/2)=-1/2$: $1/2+C=-1/2 \\Rightarrow C=-1$, so $f(x)=x-1$.</p>\n<p>$$\\int_0^1 f(x)\\,dx = \\int_0^1 (x-1)\\,dx = \\left[\\frac{x^2}{2}-x\\right]_0^1 = \\frac12 - 1 = -\\frac12.$$</p>",
  "tested": "Recovering f'(y)=1 everywhere from a difference-quotient bound (a disguised ε-δ derivative computation), then using the Fundamental Theorem / Zero Derivative Characterization to pin down f exactly before integrating.",
  "trap": "Trying to use the inequality directly as an integral bound instead of first extracting the exact derivative of f — without identifying f(x)=x-1 explicitly, the integral cannot be pinned to a single number."
},

{
  "id": "p.jam.2020.31",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "5.3",
  "tests": [
    "c.5.3.7"
  ],
  "title": "Fixed points of a 3-cycle continuous map",
  "type": "MSQ",
  "prompt": "<p>Let $a,b,c\\in\\mathbb{R}$ such that $a<b<c$. Which of the following is/are true for any continuous function $f:\\mathbb{R}\\to\\mathbb{R}$ satisfying $f(a)=b$, $f(b)=c$ and $f(c)=a$?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exists $\\alpha\\in(a,c)$ such that $f(\\alpha)=\\alpha$"
    },
    {
      "k": "B",
      "t": "There exists $\\beta\\in(a,b)$ such that $f(\\beta)=\\beta$"
    },
    {
      "k": "C",
      "t": "There exists $\\gamma\\in(a,b)$ such that $(f\\circ f)(\\gamma)=\\gamma$"
    },
    {
      "k": "D",
      "t": "There exists $\\delta\\in(a,c)$ such that $(f\\circ f\\circ f)(\\delta)=\\delta$"
    }
  ],
  "answer": [
    "A",
    "C",
    "D"
  ],
  "solution": "<p><b>(A)</b> Let $g(x)=f(x)-x$. Then $g(a)=b-a>0$ and $g(c)=a-c<0$. Since $g$ is continuous, by the Intermediate Value Theorem there is $\\alpha\\in(a,c)$ with $g(\\alpha)=0$, i.e. $f(\\alpha)=\\alpha$. True.</p>\n<p><b>(B)</b> On $[a,b]$: $g(a)=f(a)-a=b-a>0$ and $g(b)=f(b)-b=c-b>0$ — both endpoint values are positive, so the IVT gives no root, and in general there need not be one. Counterexample: with $a=0,b=1,c=2$, take $f(x)=x+1$ on $[0,1]$ (so $f(x)-x\\equiv 1>0$, never zero) and $f(x)=4-2x$ on $[1,2]$ — continuous, matches $f(0)=1,f(1)=2,f(2)=0$, and has no fixed point in $(0,1)$. False in general.</p>\n<p><b>(C)</b> Let $h(x)=f(f(x))-x$ on $[a,b]$. Then $h(a)=f(f(a))-a=f(b)-a=c-a>0$, and $h(b)=f(f(b))-b=f(c)-b=a-b<0$. Since $h$ is continuous (composition of continuous functions), IVT gives $\\gamma\\in(a,b)$ with $h(\\gamma)=0$. True.</p>\n<p><b>(D)</b> Directly, $(f\\circ f\\circ f)(b) = f(f(f(b))) = f(f(c)) = f(a) = b$. So $\\delta=b$ works, and $b\\in(a,c)$ since $a<b<c$. True.</p>",
  "tested": "Building auxiliary functions g(x)=f(x)-x and h(x)=f(f(x))-x and applying the Intermediate Value Theorem, versus spotting an exact fixed point directly from the cyclic data.",
  "trap": "Assuming symmetry between (A)/(C)/(D) forces (B) to also be true by \"the same kind of argument\" — (B)'s endpoint values have the same sign, so IVT gives no guarantee, and it genuinely can fail."
},

{
  "id": "p.jam.2020.32",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 32,
  "marks": 2,
  "neg": 0,
  "sec": "9.1",
  "tests": [
    "c.9.1.1",
    "c.9.3.2"
  ],
  "title": "Absolute vs conditional convergence of two alternating series",
  "type": "MSQ",
  "prompt": "<p>If $s_n = \\dfrac{(-1)^n}{2n+3}$ and $t_n = \\dfrac{(-1)^n}{4n-1}$, $n=0,1,2,\\dots$, then</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\sum_{n=0}^{\\infty} s_n$ is absolutely convergent"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\sum_{n=0}^{\\infty} t_n$ is absolutely convergent"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\sum_{n=0}^{\\infty} s_n$ is conditionally convergent"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\sum_{n=0}^{\\infty} t_n$ is conditionally convergent"
    }
  ],
  "answer": [
    "C",
    "D"
  ],
  "solution": "<p><b>$s_n$:</b> $|s_n| = \\dfrac{1}{2n+3}$, and $\\sum \\dfrac{1}{2n+3}$ diverges by comparison with the harmonic series, so $\\sum s_n$ is not absolutely convergent — (A) false. But $|s_n|$ decreases monotonically to $0$ and the signs alternate, so by the Alternating Series Test $\\sum s_n$ converges. Hence it converges conditionally — (C) true.</p>\n<p><b>$t_n$:</b> $|t_n| = \\dfrac{1}{|4n-1|}\\sim \\dfrac{1}{4n}$ for large $n$, and $\\sum \\dfrac{1}{4n-1}$ (for $n\\ge1$) diverges by comparison with the harmonic series, so $\\sum t_n$ is not absolutely convergent — (B) false. For $n\\ge1$, the denominator $4n-1>0$, so the signs strictly alternate with $|t_n|\\downarrow 0$; by the Alternating Series Test the tail $\\sum_{n\\ge1} t_n$ converges, and adding the single finite term $t_0=-1$ does not change convergence. So $\\sum t_n$ converges, and conditionally — (D) true.</p>",
  "tested": "Distinguishing absolute from conditional convergence: comparison with the (divergent) harmonic series for the absolute-value series, and the Alternating Series Test for the signed series.",
  "trap": "At n=0, t_0 = 1/(4·0-1) = -1, so the very first two terms of {t_n} are both negative — it is easy to think the alternating pattern is broken and dismiss the Alternating Series Test, when in fact it applies cleanly to the tail from n=1 onward."
},

{
  "id": "p.jam.2020.33",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 33,
  "marks": 2,
  "neg": 0,
  "sec": "5.3",
  "tests": [
    "c.5.3.9",
    "c.5.3.10"
  ],
  "title": "Continuous maps between an open and a closed interval",
  "type": "MSQ",
  "prompt": "<p>Let $a,b\\in\\mathbb{R}$, $a<b$. Which of the following statement(s) is/are true?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exists a continuous function $f:[a,b]\\to(a,b)$ such that $f$ is one-one"
    },
    {
      "k": "B",
      "t": "There exists a continuous function $f:[a,b]\\to(a,b)$ such that $f$ is onto"
    },
    {
      "k": "C",
      "t": "There exists a continuous function $f:(a,b)\\to[a,b]$ such that $f$ is one-one"
    },
    {
      "k": "D",
      "t": "There exists a continuous function $f:(a,b)\\to[a,b]$ such that $f$ is onto"
    }
  ],
  "answer": [
    "A",
    "C",
    "D"
  ],
  "solution": "<p><b>(A)</b> True: an affine contraction such as $f(x) = a+\\dfrac{b-a}{4}+\\dfrac{x-a}{2}$ maps $[a,b]$ strictly increasingly into a closed sub-interval of $(a,b)$; it is continuous, injective, and its range lies inside $(a,b)$.</p>\n<p><b>(B)</b> False: $[a,b]$ is compact, and the continuous image of a compact set is compact (Bartle's \"Continuous Image of a Closed Bounded Interval\"), hence closed and bounded. But $(a,b)$ is not closed, so $f([a,b])$ can never equal $(a,b)$.</p>\n<p><b>(C)</b> True: the identity map $f(x)=x$ on $(a,b)$ is continuous and injective, and its range $(a,b)\\subset[a,b]$, so it is a valid map $(a,b)\\to[a,b]$.</p>\n<p><b>(D)</b> True: take $f(x) = \\dfrac{a+b}{2} + \\dfrac{b-a}{2}\\sin\\!\\left(\\dfrac{1}{x-a}\\right)$ for $x\\in(a,b)$. As $x\\to a^+$, the argument $1/(x-a)\\to\\infty$, so $\\sin(1/(x-a))$ sweeps through every value in $[-1,1]$ infinitely often (by the IVT applied on each period); hence $f$ attains every value in $[a,b]$, including the endpoints $a$ and $b$. So $f$ is onto, and it is continuous on the open interval $(a,b)$.</p>",
  "tested": "Compactness is preserved by continuous maps (ruling out B), while injective or surjective maps in the \"safe\" direction (compact domain into open codomain injectively, or open domain onto closed codomain via oscillation) are genuinely constructible.",
  "trap": "Assuming that because the domain (a,b) in (D) is not compact, its continuous image also cannot be compact/closed — compactness of the image is about what the function does, not just the domain, and an oscillating function can still sweep out a full closed interval."
},

{
  "id": "p.jam.2020.37",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 37,
  "marks": 2,
  "neg": 0,
  "sec": "7.1",
  "tests": [
    "c.7.1.1",
    "c.3.2.3"
  ],
  "title": "A triangular-sum limit compared with a Riemann-sum limit",
  "type": "MSQ",
  "prompt": "<p>Let $a = \\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{1}{n^2}+\\frac{2}{n^2}+\\cdots+\\frac{n-1}{n^2}\\right)$ and $b = \\displaystyle\\lim_{n\\to\\infty}\\left(\\frac{1}{n+1}+\\frac{1}{n+2}+\\cdots+\\frac{1}{n+n}\\right)$. Which of the following is/are true?</p>",
  "options": [
    {
      "k": "A",
      "t": "$a > b$"
    },
    {
      "k": "B",
      "t": "$a < b$"
    },
    {
      "k": "C",
      "t": "$ab = \\ln\\sqrt{2}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{a}{b} = \\ln\\sqrt{2}$"
    }
  ],
  "answer": [
    "B",
    "C"
  ],
  "approach": "<p>Recognise a as a limit of an arithmetic-sum-over-n² sequence, and b as a Riemann sum in disguise, before comparing/combining them.</p>",
  "solution": "<p><b>Finding $a$:</b> $a = \\displaystyle\\lim_{n\\to\\infty} \\frac{1+2+\\cdots+(n-1)}{n^2} = \\lim_{n\\to\\infty} \\frac{(n-1)n/2}{n^2} = \\lim_{n\\to\\infty} \\frac{n-1}{2n} = \\frac12$.</p>\n<p><b>Finding $b$:</b> $b = \\displaystyle\\lim_{n\\to\\infty} \\sum_{k=1}^{n} \\frac{1}{n+k} = \\lim_{n\\to\\infty} \\frac{1}{n}\\sum_{k=1}^n \\frac{1}{1+k/n}$, which is the right-endpoint Riemann sum of $g(x)=\\dfrac{1}{1+x}$ on $[0,1]$. So $b = \\displaystyle\\int_0^1 \\frac{dx}{1+x} = \\ln 2$.</p>\n<p>Now compare: $a = 0.5 < \\ln 2 \\approx 0.693 = b$, so (A) is false and (B) is true.</p>\n<p>$ab = \\dfrac12\\ln 2 = \\ln(2^{1/2}) = \\ln\\sqrt2$, matching (C) exactly.</p>\n<p>$\\dfrac{a}{b} = \\dfrac{1/2}{\\ln 2} = \\dfrac{1}{2\\ln 2} \\approx 0.721$, which is not $\\ln\\sqrt2 \\approx 0.347$, so (D) is false.</p>",
  "tested": "Evaluating an elementary sequence limit alongside recognising a sum as a Riemann sum that converges to a definite integral, then combining the two exact values algebraically.",
  "trap": "Treating b as a series and trying to sum 1/(n+k) term by term instead of recognising the whole expression as a Riemann sum for ∫₀¹ dx/(1+x); also mixing up ab with a/b when checking (C) vs (D)."
},

{
  "id": "p.jam.2020.39",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 39,
  "marks": 2,
  "neg": 0,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.9.2.4"
  ],
  "title": "Bounded derivatives at a point and the resulting Taylor coefficients",
  "type": "MSQ",
  "prompt": "<p>Let $f$ be a real valued function of a real variable, such that $|f^{(n)}(0)| \\le K$ for all $n\\in\\mathbb{N}$, where $K>0$. Which of the following is/are true?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\left|\\dfrac{f^{(n)}(0)}{n!}\\right|^{1/n} \\to 0$ as $n\\to\\infty$"
    },
    {
      "k": "B",
      "t": "$\\left|\\dfrac{f^{(n)}(0)}{n!}\\right|^{1/n} \\to \\infty$ as $n\\to\\infty$"
    },
    {
      "k": "C",
      "t": "$f^{(n)}(x)$ exists for all $x\\in\\mathbb{R}$ and for all $n\\in\\mathbb{N}$"
    },
    {
      "k": "D",
      "t": "The series $\\displaystyle\\sum_{n=1}^{\\infty} \\dfrac{f^{(n)}(0)}{(n-1)!}$ is absolutely convergent"
    }
  ],
  "answer": [
    "A",
    "D"
  ],
  "solution": "<p><b>(A), (B):</b> From $|f^{(n)}(0)|\\le K$, $\\left|\\dfrac{f^{(n)}(0)}{n!}\\right|^{1/n} \\le \\left(\\dfrac{K}{n!}\\right)^{1/n}$. Since $(n!)^{1/n}\\to\\infty$ (by Stirling's approximation, or since $n! \\ge (n/e)^n$ eventually), the right side $\\to 0$. By the Squeeze Theorem the left side $\\to 0$ as well. So (A) is true and (B) is false.</p>\n<p><b>(C)</b> False: knowing that all derivatives at the single point $x=0$ are bounded says nothing about whether $f$ is even differentiable, let alone infinitely differentiable, at any other point of $\\mathbb{R}$.</p>\n<p><b>(D)</b> $\\left|\\dfrac{f^{(n)}(0)}{(n-1)!}\\right| \\le \\dfrac{K}{(n-1)!}$, and $\\displaystyle\\sum_{n=1}^{\\infty} \\frac{K}{(n-1)!} = K\\sum_{m=0}^{\\infty}\\frac{1}{m!} = Ke$, which converges. By the Comparison Test, the given series converges absolutely. True.</p>",
  "tested": "Using the Comparison Test against the exponential series and a factorial-growth bound to control the size of Taylor coefficients — both hallmarks of tests for absolute convergence.",
  "trap": "Assuming boundedness of derivatives at one point extends to global differentiability of f (option C) — the hypothesis only pins down values at x=0, not behaviour elsewhere."
},

{
  "id": "p.jam.2020.52",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 52,
  "marks": 2,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9",
    "c.3.7.2"
  ],
  "title": "Coefficient of x⁴ in a rational function's power series",
  "type": "NAT",
  "prompt": "<p>Consider the expansion of the function $f(x) = \\dfrac{3}{(1-x)(1+2x)}$ in powers of $x$, valid in $|x|<\\dfrac12$. Then the coefficient of $x^4$ is ____.</p>",
  "answer": {
    "value": 33,
    "tol": 0.01
  },
  "solution": "<p>Partial fractions: $\\dfrac{3}{(1-x)(1+2x)} = \\dfrac{A}{1-x} + \\dfrac{B}{1+2x}$. Setting $x=1$: $3 = 3A \\Rightarrow A=1$. Setting $x=-\\tfrac12$: $3 = \\tfrac32 B \\Rightarrow B=2$.</p>\n<p>So $f(x) = \\dfrac{1}{1-x} + \\dfrac{2}{1+2x} = \\displaystyle\\sum_{n=0}^{\\infty} x^n + 2\\sum_{n=0}^{\\infty}(-2x)^n = \\sum_{n=0}^{\\infty}\\left[1+2(-2)^n\\right]x^n$, valid for $|x|<\\tfrac12$.</p>\n<p>Coefficient of $x^4$: $1 + 2(-2)^4 = 1+2(16) = 1+32 = 33$.</p>",
  "tested": "Decomposing a rational function into partial fractions and reading off Maclaurin coefficients from the two resulting geometric series.",
  "trap": "Forgetting the factor of 2 in front of (-2x)ⁿ from the coefficient B=2, or mishandling the sign when expanding 1/(1+2x) as a geometric series with common ratio −2x."
},

{
  "id": "p.jam.2020.54",
  "course": "ra2",
  "exam": "JAM",
  "year": 2020,
  "paper": "MA",
  "qno": 54,
  "marks": 2,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.1",
    "c.6.4.2"
  ],
  "title": "Alpha from a truncated Taylor expansion condition",
  "type": "NAT",
  "prompt": "<p>Let $f(x) = \\sqrt{x} + \\alpha x$, $x>0$, and</p>\n<p>$$g(x) = a_0 + a_1(x-1) + a_2(x-1)^2$$</p>\n<p>be the sum of the first three terms of the Taylor series of $f(x)$ around $x=1$. If $g(3)=3$, then $\\alpha$ is ____.</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.01
  },
  "solution": "<p>$f(x) = x^{1/2}+\\alpha x$, so $f(1) = 1+\\alpha$; $f'(x) = \\tfrac12 x^{-1/2}+\\alpha$, so $f'(1) = \\tfrac12+\\alpha$; $f''(x) = -\\tfrac14 x^{-3/2}$, so $f''(1) = -\\tfrac14$.</p>\n<p>Then $a_0=f(1)=1+\\alpha$, $a_1=f'(1)=\\tfrac12+\\alpha$, $a_2=\\dfrac{f''(1)}{2}=-\\tfrac18$.</p>\n<p>$$g(3) = a_0 + 2a_1 + 4a_2 = (1+\\alpha) + 2\\left(\\tfrac12+\\alpha\\right) + 4\\left(-\\tfrac18\\right) = (1+\\alpha)+(1+2\\alpha)-\\tfrac12 = \\tfrac32+3\\alpha.$$</p>\n<p>Setting $g(3)=3$: $\\tfrac32+3\\alpha = 3 \\Rightarrow \\alpha = \\tfrac12 = 0.5$.</p>",
  "tested": "Computing Taylor coefficients a₀, a₁, a₂ = f(1), f'(1), f''(1)/2! directly, then substituting into the quadratic Taylor polynomial at a specified point.",
  "trap": "Forgetting the 1/2! factor in a₂ = f''(1)/2, which silently doubles that term's contribution to g(3)."
},

{
  "id": "p.jam.2019.01",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 1,
  "marks": 1,
  "neg": -0.33,
  "sec": "9.2",
  "tests": [
    "c.9.2.4"
  ],
  "title": "Convergence of a log-weighted alternating series and its positive-term twin",
  "type": "MCQ",
  "prompt": "<p>Let $a_1=b_1=0$, and for each $n\\ge 2$, let $a_n$ and $b_n$ be real numbers given by</p>\n$$a_n=\\sum_{m=2}^{n}\\frac{(-1)^m m}{(\\log(m))^m} \\quad\\text{and}\\quad b_n=\\sum_{m=2}^{n}\\frac{1}{(\\log(m))^m}.$$\n<p>Then which one of the following is TRUE about the sequences $\\{a_n\\}$ and $\\{b_n\\}$?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both $\\{a_n\\}$ and $\\{b_n\\}$ are divergent"
    },
    {
      "k": "B",
      "t": "$\\{a_n\\}$ is convergent and $\\{b_n\\}$ is divergent"
    },
    {
      "k": "C",
      "t": "$\\{a_n\\}$ is divergent and $\\{b_n\\}$ is convergent"
    },
    {
      "k": "D",
      "t": "Both $\\{a_n\\}$ and $\\{b_n\\}$ are convergent"
    }
  ],
  "answer": "D",
  "solution": "<p>$\\{a_n\\}$ and $\\{b_n\\}$ are the sequences of partial sums of $\\sum \\frac{(-1)^m m}{(\\log m)^m}$ and $\\sum \\frac{1}{(\\log m)^m}$, so the question is really about convergence of these two series.</p>\n<p>Apply the Root Test to the term magnitudes. For $b_n$: $\\left(\\frac{1}{(\\log m)^m}\\right)^{1/m}=\\frac{1}{\\log m}\\to 0$ as $m\\to\\infty$ (since $\\log m\\to\\infty$ regardless of the base). Since the limit is $0<1$, $\\sum \\frac{1}{(\\log m)^m}$ converges, so $\\{b_n\\}$ converges.</p>\n<p>For $a_n$, take absolute values: $\\left(\\frac{m}{(\\log m)^m}\\right)^{1/m}=\\frac{m^{1/m}}{\\log m}\\to \\frac{1}{\\infty}=0$ (since $m^{1/m}\\to 1$ and $\\log m\\to\\infty$). So $\\sum \\left|\\frac{(-1)^m m}{(\\log m)^m}\\right|$ also converges by the Root Test, hence $\\sum \\frac{(-1)^m m}{(\\log m)^m}$ converges absolutely, so $\\{a_n\\}$ converges too.</p>\n<p>Both sequences converge, so the answer is (D).</p>",
  "tested": "The Root Test: any polynomial factor like $m$ or $m^{1/m}$ is irrelevant once the base $\\log m\\to\\infty$, so both series converge absolutely no matter how small $\\log m$ is for the first few terms.",
  "trap": "Being distracted by the fact that log base 10 of m is less than 1 for m from 2 to 9, making the early terms look huge; only the tail behaviour as m to infinity decides convergence."
},

{
  "id": "p.jam.2019.04",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 4,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence transferred through a sandwiched coefficient inequality",
  "type": "MCQ",
  "prompt": "<p>Let $\\{a_n\\}_{n=0}^{\\infty}$ and $\\{b_n\\}_{n=0}^{\\infty}$ be sequences of positive real numbers such that $na_n<b_n<n^2a_n$ for all $n\\ge 2$. If the radius of convergence of the power series $\\sum_{n=0}^{\\infty}a_nx^n$ is $4$, then the power series $\\sum_{n=0}^{\\infty}b_nx^n$</p>",
  "options": [
    {
      "k": "A",
      "t": "converges for all $x$ with $|x|<2$"
    },
    {
      "k": "B",
      "t": "converges for all $x$ with $|x|>2$"
    },
    {
      "k": "C",
      "t": "does not converge for any $x$ with $|x|>2$"
    },
    {
      "k": "D",
      "t": "does not converge for any $x$ with $|x|<2$"
    }
  ],
  "answer": "A",
  "solution": "<p>By Cauchy&ndash;Hadamard, $\\limsup a_n^{1/n}=1/4$. Since $n^{1/n}\\to 1$ and $n^{2/n}\\to 1$, and $a_n>0$, multiplying a sequence converging to $1$ by a sequence with a given limsup does not change that limsup:</p>\n$$\\limsup (na_n)^{1/n}=\\limsup (n^2a_n)^{1/n}=\\limsup a_n^{1/n}=\\tfrac14.$$\n<p>Since $na_n<b_n<n^2a_n$, squeezing gives $\\limsup b_n^{1/n}=\\tfrac14$ as well, so $\\sum b_nx^n$ also has radius of convergence $4$: it converges for all $|x|<4$.</p>\n<p>Among the printed options only (A) is actually true (it converges for all $|x|<2$, a weaker but correct consequence of radius $4$); (B) and (D) are false since e.g. $x=3.5$ with $|x|>2$ converges while (D) forbids convergence for $|x|<2$, contradicting (A); (C) is false since $2<|x|<4$ converges.</p>",
  "tested": "Using $\\limsup(x_ny_n)=c\\cdot\\limsup y_n$ when $x_n\\to c>0$ and $y_n\\ge 0$, to carry the Cauchy&ndash;Hadamard radius through an inequality between coefficient sequences.",
  "trap": "Concluding only the printed weaker bound $|x|<2$ is the whole truth; the actual radius of $\\sum b_nx^n$ is exactly $4$, but among the four choices only the safe statement (A) is unconditionally true."
},

{
  "id": "p.jam.2019.13",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 13,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.3",
  "tests": [
    "c.5.3.10",
    "c.5.3.2"
  ],
  "title": "Connectedness and boundedness of a continuous image of an open interval",
  "type": "MCQ",
  "prompt": "<p>The set $\\left\\{\\dfrac{x}{1+x}: -1<x<1\\right\\}$, as a subset of $\\mathbb{R}$, is</p>",
  "options": [
    {
      "k": "A",
      "t": "connected and compact"
    },
    {
      "k": "B",
      "t": "connected but not compact"
    },
    {
      "k": "C",
      "t": "not connected but compact"
    },
    {
      "k": "D",
      "t": "neither connected nor compact"
    }
  ],
  "answer": "B",
  "solution": "<p>Let $f(x)=\\dfrac{x}{1+x}$ on $(-1,1)$. Since $1+x>0$ there, $f$ is continuous, and $f'(x)=\\dfrac{1}{(1+x)^2}>0$, so $f$ is strictly increasing.</p>\n<p>As $x\\to -1^+$, $f(x)\\to-\\infty$; as $x\\to 1^-$, $f(x)\\to \\tfrac12$. By the Preservation of Intervals Theorem, the continuous image of the interval $(-1,1)$ is itself an interval, namely $(-\\infty,\\tfrac12)$ &mdash; connected but unbounded.</p>\n<p>The Boundedness Theorem, which would guarantee a bounded image, requires the domain to be a <b>closed and bounded</b> interval; here $(-1,1)$ is neither closed nor (needed) since one endpoint is not attained, so the image is allowed to be unbounded, and indeed is. An unbounded set cannot be compact.</p>\n<p>So the set is connected but not compact: answer (B).</p>",
  "tested": "Why the hypotheses of the Boundedness Theorem (a closed bounded domain) matter: dropping closedness lets the continuous image escape to infinity even though the function itself stays nicely behaved.",
  "trap": "Assuming any continuous image of a bounded interval is bounded &mdash; that conclusion needs the domain to be closed too, and $(-1,1)$ is open."
},

{
  "id": "p.jam.2019.15",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 15,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Closed form of an alternating n-squared power series",
  "type": "MCQ",
  "prompt": "<p>For $-1<x<1$, the sum of the power series $1+\\sum_{n=2}^{\\infty}(-1)^{n-1}n^2x^{n-1}$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{1-x}{(1+x)^3}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{1+x^2}{(1+x)^4}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{1-x}{(1+x)^2}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{1+x^2}{(1+x)^3}$"
    }
  ],
  "answer": "A",
  "solution": "<p>The $n=1$ term of $f(x)=\\sum_{n=1}^{\\infty}(-1)^{n-1}n^2x^{n-1}$ is $1$, so the given series is exactly $f(x)$.</p>\n<p>Use the standard identity (from differentiating the geometric series twice): for $|y|<1$,</p>\n$$\\sum_{n=1}^{\\infty} n^2y^{n-1}=\\frac{1+y}{(1-y)^3}.$$\n<p>Substitute $y=-x$ (so $(-x)^{n-1}=(-1)^{n-1}x^{n-1}$):</p>\n$$f(x)=\\sum_{n=1}^{\\infty} n^2(-x)^{n-1}=\\frac{1+(-x)}{(1-(-x))^3}=\\frac{1-x}{(1+x)^3}.$$\n<p>This matches option (A).</p>",
  "tested": "Deriving and re-using the standard power series $\\sum n^2y^{n-1}=(1+y)/(1-y)^3$ by substitution, valid termwise inside the radius of convergence.",
  "trap": "Sign errors when substituting $y=-x$, or forgetting that the leading \"$1+$\" in the prompt is just the $n=1$ term already included in the sum starting at $n=1$."
},

{
  "id": "p.jam.2019.16",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 16,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.3",
  "tests": [
    "c.6.3.4",
    "c.4.3.8"
  ],
  "title": "Growth rate of (ln x)^2 at infinity and its forward difference",
  "type": "MCQ",
  "prompt": "<p>Let $f(x)=(\\ln x)^2$, $x>0$. Then</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\lim_{x\\to\\infty}\\frac{f(x)}{x}$ does not exist"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\lim_{x\\to\\infty} f'(x)=2$"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\lim_{x\\to\\infty}\\big(f(x+1)-f(x)\\big)=0$"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\lim_{x\\to\\infty}\\big(f(x+1)-f(x)\\big)$ does not exist"
    }
  ],
  "answer": "C",
  "solution": "<p>(A): $\\dfrac{(\\ln x)^2}{x}\\to 0$ by two applications of L'Hospital's Rule ($\\infty/\\infty$ form), since polynomials dominate any power of $\\ln x$. So the limit exists and (A) is false.</p>\n<p>(B): $f'(x)=\\dfrac{2\\ln x}{x}\\to 0$ (again $\\ln x$ is dominated by $x$), not $2$. So (B) is false.</p>\n<p>(C): $f(x+1)-f(x)=(\\ln(x+1))^2-(\\ln x)^2=\\ln\\!\\left(1+\\tfrac1x\\right)\\cdot\\ln\\big(x(x+1)\\big)$.</p>\n<p>As $x\\to\\infty$: $\\ln(1+1/x)\\sim \\dfrac1x$ and $\\ln(x(x+1))\\sim 2\\ln x$, so the product behaves like $\\dfrac{2\\ln x}{x}\\to 0$. So the limit is $0$: (C) is TRUE.</p>\n<p>(D) contradicts (C) and is false.</p>",
  "tested": "Using L'Hospital's Rule to compare growth rates of $\\ln x$ against polynomials, and resolving a $0\\cdot\\infty$ indeterminate form by estimating each factor's order of magnitude.",
  "trap": "Assuming the $0\\cdot\\infty$ form in (C) automatically diverges or is indeterminate without an actual estimate &mdash; here the $1/x$ factor wins decisively over the $\\ln x$ growth."
},

{
  "id": "p.jam.2019.17",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 17,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Bounding f(1) from the differential inequality f' > f",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a differentiable function such that $f'(x)>f(x)$ for all $x\\in\\mathbb{R}$, and $f(0)=1$. Then $f(1)$ lies in the interval</p>",
  "options": [
    {
      "k": "A",
      "t": "$(0,e^{-1})$"
    },
    {
      "k": "B",
      "t": "$(e^{-1},\\sqrt e)$"
    },
    {
      "k": "C",
      "t": "$(\\sqrt e, e)$"
    },
    {
      "k": "D",
      "t": "$(e,\\infty)$"
    }
  ],
  "answer": "D",
  "solution": "<p>Define $g(x)=f(x)e^{-x}$. Then $g'(x)=\\big(f'(x)-f(x)\\big)e^{-x}>0$ for all $x$ (since $f'(x)>f(x)$ and $e^{-x}>0$), so $g$ is strictly increasing on $\\mathbb{R}$.</p>\n<p>Hence $g(1)>g(0)$, i.e. $f(1)e^{-1}>f(0)e^0=1$, so $f(1)>e$. Thus $f(1)\\in(e,\\infty)$: option (D).</p>",
  "tested": "Converting a differential inequality $f'>f$ into strict monotonicity of the auxiliary function $f(x)e^{-x}$, then applying the Monotonicity Criterion.",
  "trap": "Trying to integrate the inequality directly or assuming $f(x)=e^x$ is forced; the inequality only forces $f$ to grow strictly faster than $e^x$, giving a one-sided bound."
},

{
  "id": "p.jam.2019.18",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 18,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.8",
    "c.6.2.1"
  ],
  "title": "Value of k giving a cubic three distinct real roots",
  "type": "MCQ",
  "prompt": "<p>For which one of the following values of $k$, the equation</p>\n$$2x^3+3x^2-12x-k=0$$\n<p>has three distinct real roots?</p>",
  "options": [
    {
      "k": "A",
      "t": "16"
    },
    {
      "k": "B",
      "t": "20"
    },
    {
      "k": "C",
      "t": "26"
    },
    {
      "k": "D",
      "t": "31"
    }
  ],
  "answer": "A",
  "solution": "<p>Let $g(x)=2x^3+3x^2-12x$; the equation is $g(x)=k$. Then $g'(x)=6x^2+6x-12=6(x+2)(x-1)$, with critical points $x=-2,1$.</p>\n<p>$g'$ is positive for $x<-2$, negative on $(-2,1)$, positive for $x>1$, so $x=-2$ is a local maximum and $x=1$ a local minimum: $g(-2)=-16+12+24=20$ and $g(1)=2+3-12=-7$.</p>\n<p>The horizontal line $y=k$ meets the graph of $g$ in three distinct points exactly when $k$ is strictly between the local minimum and local maximum: $-7<k<20$. Among the choices, only $k=16$ satisfies this.</p>",
  "tested": "Using Fermat's theorem (interior extremum) and the First Derivative Test to locate a cubic's local max/min, then counting real roots by comparing a horizontal line to those extreme values.",
  "trap": "Using $k=20$ (the local max value itself), which gives a repeated root at $x=-2$ together with one other root &mdash; only two distinct roots, not three."
},

{
  "id": "p.jam.2019.19",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 19,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1"
  ],
  "title": "Spotting the divergent series among four small-angle series",
  "type": "MCQ",
  "prompt": "<p>Which one of the following series is divergent?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac1n\\sin^2\\frac1n$"
    },
    {
      "k": "B",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac1n\\log n$"
    },
    {
      "k": "C",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac{1}{n^2}\\sin\\frac1n$"
    },
    {
      "k": "D",
      "t": "$\\displaystyle\\sum_{n=1}^{\\infty}\\frac1n\\tan\\frac1n$"
    }
  ],
  "answer": "B",
  "solution": "<p>Use $\\sin(1/n)\\sim 1/n$ and $\\tan(1/n)\\sim 1/n$ as $n\\to\\infty$.</p>\n<p>(A): $\\dfrac1n\\sin^2\\dfrac1n \\sim \\dfrac1n\\cdot\\dfrac1{n^2}=\\dfrac1{n^3}$, a convergent $p$-series ($p=3$).</p>\n<p>(C): $\\dfrac1{n^2}\\sin\\dfrac1n\\sim\\dfrac1{n^2}\\cdot\\dfrac1n=\\dfrac1{n^3}$, convergent.</p>\n<p>(D): $\\dfrac1n\\tan\\dfrac1n\\sim\\dfrac1n\\cdot\\dfrac1n=\\dfrac1{n^2}$, convergent ($p=2$).</p>\n<p>(B): $\\dfrac{\\log n}{n}>\\dfrac1n$ for $n\\ge 3$ (in fact $\\log n\\to\\infty$), and $\\sum \\frac1n$ already diverges, so by the Comparison Test $\\sum \\dfrac{\\log n}{n}$ diverges.</p>\n<p>So the divergent one is (B).</p>",
  "tested": "Using small-angle equivalences ($\\sin\\theta\\sim\\theta$, $\\tan\\theta\\sim\\theta$) together with the Comparison/Limit Comparison Test to classify series by their effective power of $1/n$.",
  "trap": "Not noticing that (A), (C), (D) all secretly decay like $1/n^2$ or $1/n^3$ once the small-angle factor is accounted for, while (B) decays slower than $1/n$ and so is the only one to diverge."
},

{
  "id": "p.jam.2019.37",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 37,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.3",
    "c.5.3.7",
    "c.6.1.5"
  ],
  "title": "Differentiability, Rolle's theorem, and a fixed point for a composed function",
  "type": "MSQ",
  "prompt": "<p>Let</p>\n$$f(x)=\\cos(|\\pi-x|)+(x-\\pi)\\sin|x| \\quad\\text{and}\\quad g(x)=x^2 \\text{ for } x\\in\\mathbb{R}.$$\n<p>If $h(x)=f(g(x))$, then</p>",
  "options": [
    {
      "k": "A",
      "t": "$h$ is not differentiable at $x=0$"
    },
    {
      "k": "B",
      "t": "$h'(\\sqrt\\pi)=0$"
    },
    {
      "k": "C",
      "t": "$h''(x)=0$ has a solution in $(-\\pi,\\pi)$"
    },
    {
      "k": "D",
      "t": "there exists $x_0\\in(-\\pi,\\pi)$ such that $h(x_0)=x_0$"
    }
  ],
  "answer": [
    "B",
    "C",
    "D"
  ],
  "solution": "<p>Since $\\cos$ is even, $\\cos(|y|)=\\cos(y)$ for every real $y$, so $\\cos(|\\pi-x^2|)=\\cos(\\pi-x^2)=-\\cos(x^2)$. Also $|x^2|=x^2$. So</p>\n$$h(x)=f(x^2)=-\\cos(x^2)+(x^2-\\pi)\\sin(x^2).$$\n<p>This is a composition of smooth (infinitely differentiable) functions, so $h$ is differentiable everywhere, including at $x=0$. So (A) is FALSE.</p>\n<p>Differentiating: $h'(x)=4x\\sin(x^2)+2x(x^2-\\pi)\\cos(x^2)$. At $x=\\sqrt\\pi$: $x^2=\\pi$, so $\\sin(\\pi)=0$ and $(x^2-\\pi)=0$, giving $h'(\\sqrt\\pi)=0$. So (B) is TRUE.</p>\n<p>Also $h'(0)=0$ directly. Since $h'(0)=h'(\\sqrt\\pi)=0$ and $h'$ is differentiable on $[0,\\sqrt\\pi]$, Rolle's Theorem gives some $c\\in(0,\\sqrt\\pi)\\subset(-\\pi,\\pi)$ with $h''(c)=0$. So (C) is TRUE.</p>\n<p>For (D), let $\\varphi(x)=h(x)-x$. Compute $h(\\sqrt\\pi)=-\\cos(\\pi)+(\\pi-\\pi)\\sin(\\pi)=1$, so $\\varphi(\\sqrt\\pi)=1-\\sqrt\\pi\\approx-0.77<0$. Also $h(3)=-\\cos(9)+(9-\\pi)\\sin(9)\\approx0.911+5.858\\times0.412\\approx3.33$, so $\\varphi(3)=3.33-3\\approx0.33>0$, and both $\\sqrt\\pi\\approx1.77$ and $3$ lie in $(-\\pi,\\pi)$ since $\\pi\\approx3.1416$. By the Intermediate Value Theorem, $\\varphi$ has a zero in $(\\sqrt\\pi,3)\\subset(-\\pi,\\pi)$, i.e. $h(x_0)=x_0$ for some such $x_0$. So (D) is TRUE.</p>",
  "tested": "Using $\\cos(|y|)=\\cos y$ to simplify an absolute value inside a composition, then applying the Chain Rule, Rolle's Theorem (for a zero of the second derivative), and the Intermediate Value Theorem (for a fixed point).",
  "trap": "Assuming the absolute values in the original $f$ force a differentiability failure in $h$; because $g(x)=x^2\\ge0$ always, both absolute values simplify away smoothly, and (A) is a trap that looks plausible but is false."
},

{
  "id": "p.jam.2019.38",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 38,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Monotonicity and sign of a sine-power composite",
  "type": "MSQ",
  "prompt": "<p>Let $f:\\left(0,\\dfrac\\pi2\\right)\\to\\mathbb{R}$ be given by</p>\n$$f(x)=(\\sin x)^{\\pi}-\\pi\\sin x+\\pi.$$\n<p>Then which of the following statements is/are TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is an increasing function"
    },
    {
      "k": "B",
      "t": "$f$ is a decreasing function"
    },
    {
      "k": "C",
      "t": "$f(x)>0$ for all $x\\in\\left(0,\\dfrac\\pi2\\right)$"
    },
    {
      "k": "D",
      "t": "$f(x)<0$ for some $x\\in\\left(0,\\dfrac\\pi2\\right)$"
    }
  ],
  "answer": [
    "B",
    "C"
  ],
  "solution": "<p>Let $t=\\sin x\\in(0,1)$ for $x\\in(0,\\pi/2)$, and $\\varphi(t)=t^\\pi-\\pi t+\\pi$, so $f(x)=\\varphi(\\sin x)$.</p>\n<p>$\\varphi'(t)=\\pi t^{\\pi-1}-\\pi=\\pi(t^{\\pi-1}-1)$. Since $\\pi-1>0$ and $0<t<1$, we have $t^{\\pi-1}<1$, so $\\varphi'(t)<0$ throughout $(0,1)$: $\\varphi$ is strictly decreasing.</p>\n<p>Then $f'(x)=\\varphi'(\\sin x)\\cos x$. On $(0,\\pi/2)$, $\\cos x>0$ and $\\varphi'(\\sin x)<0$, so $f'(x)<0$: $f$ is decreasing. (B) TRUE, (A) FALSE.</p>\n<p>Since $\\varphi$ is strictly decreasing on $(0,1)$ with $\\varphi(1)=1^\\pi-\\pi+\\pi=1$, for every $t\\in(0,1)$, $\\varphi(t)>\\varphi(1)=1>0$. So $f(x)=\\varphi(\\sin x)>1>0$ for all $x\\in(0,\\pi/2)$. (C) TRUE, (D) FALSE.</p>",
  "tested": "Composing a decreasing outer function $\\varphi$ with the increasing inner function $\\sin x$ and correctly tracking the sign via the Chain Rule; using monotonicity to pin down a strict sign bound.",
  "trap": "Assuming $f$ must be increasing because $\\sin x$ is increasing on $(0,\\pi/2)$ &mdash; the outer function $\\varphi$ is what actually controls the monotonicity here, and it is decreasing."
},

{
  "id": "p.jam.2019.45",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 45,
  "marks": 1,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.2",
    "c.6.4.1"
  ],
  "title": "First-order Taylor coefficient of a removable-singularity quotient",
  "type": "NAT",
  "prompt": "<p>The coefficient of $\\left(x-\\dfrac\\pi2\\right)$ in the Taylor series expansion of the function</p>\n$$f(x)=\\begin{cases}\\dfrac{4(1-\\sin x)}{2x-\\pi}, & x\\ne\\dfrac\\pi2\\\\[4pt] 0, & x=\\dfrac\\pi2\\end{cases}$$\n<p>about $x=\\dfrac\\pi2$, is ____________</p>",
  "answer": {
    "value": 1,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Let $h=x-\\dfrac\\pi2$, so $x=\\dfrac\\pi2+h$ and $\\sin x=\\sin\\!\\left(\\dfrac\\pi2+h\\right)=\\cos h$.</p>\n<p>Using the Maclaurin series $1-\\cos h=\\dfrac{h^2}2-\\dfrac{h^4}{24}+\\cdots$:</p>\n$$4(1-\\sin x)=4(1-\\cos h)=2h^2-\\frac{h^4}{6}+\\cdots,\\qquad 2x-\\pi=2h.$$\n<p>So for $h\\ne0$,</p>\n$$f(x)=\\frac{2h^2-\\frac{h^4}6+\\cdots}{2h}=h-\\frac{h^3}{12}+\\cdots,$$\n<p>which already is the Taylor series of $f$ in powers of $h=x-\\pi/2$ (and its constant term is $0$, matching the given value $f(\\pi/2)=0$, confirming $f$ is smooth there). The coefficient of $h^1=(x-\\pi/2)^1$ is $1$.</p>",
  "tested": "Extracting a Taylor coefficient at a removable singularity by expanding the numerator's own Maclaurin series directly (here via $1-\\cos h$), rather than blindly differentiating the quotient.",
  "trap": "Trying to apply the quotient rule directly at $x=\\pi/2$, which produces a $0/0$ form for the derivative itself; expanding the numerator in powers of $h$ first sidesteps this entirely."
},

{
  "id": "p.jam.2019.46",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 46,
  "marks": 1,
  "neg": 0,
  "sec": "5.3",
  "tests": [
    "c.5.3.4"
  ],
  "title": "Max minus min of a symmetric cube-root rational function on [0,1]",
  "type": "NAT",
  "prompt": "<p>Let $f:[0,1]\\to\\mathbb{R}$ be given by</p>\n$$f(x)=\\frac{\\left(1+x^{1/3}\\right)^3+\\left(1-x^{1/3}\\right)^3}{8(1+x)}.$$\n<p>Then</p>\n$$\\max\\{f(x): x\\in[0,1]\\}-\\min\\{f(x): x\\in[0,1]\\}$$\n<p>is ___________</p>",
  "answer": {
    "value": 0.25,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>With $t=x^{1/3}$, use $(1+t)^3+(1-t)^3=2+6t^2$. Since $t^2=x^{2/3}$,</p>\n$$f(x)=\\frac{2+6x^{2/3}}{8(1+x)}=\\frac{1+3x^{2/3}}{4(1+x)}.$$\n<p>$f$ is continuous on the closed bounded interval $[0,1]$, so by the Maximum&ndash;Minimum Theorem it attains both a max and a min. Checking the derivative's numerator shows the only critical point in $[0,1]$ solves $x^{1/3}=1$, i.e. $x=1$ (a boundary point), and numerically $f$ increases steadily from $f(0)=\\tfrac14$ to $f(1)=\\tfrac12$ (e.g. $f(0.1)\\approx0.374$, $f(0.5)\\approx0.482$, $f(0.9)\\approx0.500$).</p>\n<p>So the minimum is $f(0)=\\dfrac{1+0}{4(1)}=\\dfrac14$ and the maximum is $f(1)=\\dfrac{1+3}{4(2)}=\\dfrac12$. The difference is $\\dfrac12-\\dfrac14=\\dfrac14=0.25$.</p>",
  "tested": "Applying the Maximum–Minimum (Extreme Value) Theorem to a continuous function on a closed bounded interval, after algebraically simplifying a cube-root expression via the sum-of-cubes identity.",
  "trap": "Differentiating the cube-root expression directly and being misled by the singular $x^{-1/3}$ factor at $x=0$; expanding $(1\\pm t)^3$ first removes the fractional powers from the numerator entirely."
},

{
  "id": "p.jam.2019.47",
  "course": "ra2",
  "exam": "JAM",
  "year": 2019,
  "paper": "MA",
  "qno": 47,
  "marks": 1,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Differentiating a variable-limits integral via the Fundamental Theorem",
  "type": "NAT",
  "prompt": "<p>If</p>\n$$g(x)=\\int_{x(x-2)}^{4x-5} f(t)\\,dt,\\quad\\text{where } f(x)=\\sqrt{1+3x^4} \\text{ for } x\\in\\mathbb{R},$$\n<p>then $g'(1)=$ _______</p>",
  "answer": {
    "value": 8,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>By the Fundamental Theorem of Calculus (Second Form) combined with the Chain Rule, for $g(x)=\\int_{v(x)}^{u(x)}f(t)\\,dt$ with $u(x)=4x-5$ and $v(x)=x(x-2)=x^2-2x$:</p>\n$$g'(x)=f(u(x))\\,u'(x)-f(v(x))\\,v'(x),\\qquad u'(x)=4,\\ v'(x)=2x-2.$$\n<p>At $x=1$: $u(1)=4-5=-1$, $v(1)=1(1-2)=-1$ (the two limits coincide, consistent with $g(1)=0$). Also $v'(1)=2(1)-2=0$.</p>\n<p>$f(-1)=\\sqrt{1+3(-1)^4}=\\sqrt{1+3}=2$.</p>\n$$g'(1)=f(-1)\\cdot4-f(-1)\\cdot0=2\\times4-0=8.$$",
  "tested": "The Leibniz rule for differentiating an integral with variable upper and lower limits, derived from the Fundamental Theorem of Calculus and the Chain Rule.",
  "trap": "Forgetting the chain-rule factor $v'(x)$ on the lower limit, or evaluating $f$ at $x=1$ itself instead of at the limit values $u(1)$ and $v(1)$ (which happen to coincide here)."
},

{
  "id": "p.jam.2018.12",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 12,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.1",
    "c.9.2.6",
    "c.9.3.2"
  ],
  "title": "Parameters for which a mixed geometric/Bertrand series fails to converge",
  "type": "MCQ",
  "prompt": "<p>Let $a,b,c\\in\\mathbb{R}$. Which of the following values of $a,b,c$ do NOT result in the convergence of the series</p><p>$$\\sum_{n=3}^{\\infty} \\dfrac{a^n}{n^b(\\log_e n)^c} \\ ?$$</p>",
  "options": [
    {
      "k": "A",
      "t": "$|a|<1,\\ b\\in\\mathbb{R},\\ c\\in\\mathbb{R}$"
    },
    {
      "k": "B",
      "t": "$a=1,\\ b>1,\\ c\\in\\mathbb{R}$"
    },
    {
      "k": "C",
      "t": "$a=1,\\ b\\ge0,\\ c<1$"
    },
    {
      "k": "D",
      "t": "$a=-1,\\ b\\ge0,\\ c>0$"
    }
  ],
  "answer": "C",
  "solution": "<p><b>(A)</b> $|a|<1$: $|a|^n$ decays geometrically, which dominates the polynomial/log factor $n^b(\\log n)^c$ for any real $b,c$ (compare with a slightly larger ratio $r$, $|a|<r<1$). So the series converges absolutely — this combination converges.</p><p><b>(B)</b> $a=1,\\ b>1$: since $n^b$ with $b>1$ already forces convergence of $\\sum 1/n^b$ by the $p$-series/integral test, and $(\\log n)^c$ only introduces a slowly varying factor that cannot change convergence when $b>1$ (choose $b'$ with $1<b'<b$; eventually $n^b(\\log n)^c > n^{b'}$). So this converges too.</p><p><b>(C)</b> $a=1,\\ b\\ge0,\\ c<1$: For $b<1$, $\\sum 1/(n^b(\\log n)^c)$ diverges by comparison with $\\sum 1/n$ (since $n^b(\\log n)^c = o(n)$). For $b=1$, the series $\\sum \\dfrac{1}{n(\\log n)^c}$ diverges whenever $c\\le 1$ by the Cauchy Integral Test ($\\int \\frac{dx}{x(\\log x)^c}$ diverges for $c\\le1$). So for every $b\\in[0,1]$ and $c<1$ the series diverges — this combination does NOT converge.</p><p><b>(D)</b> $a=-1,\\ b\\ge0,\\ c>0$: the terms $\\dfrac{(-1)^n}{n^b(\\log n)^c}$ decrease in absolute value to $0$ (since $b\\ge0,c>0$ make the denominator eventually increasing to $\\infty$), so the Alternating Series Test guarantees convergence (conditional, if not absolute). So this converges.</p><p>Only (C) fails to converge. Answer: (C).</p>",
  "tested": "Combining the comparison/integral test (including the borderline \"Bertrand series\" $\\sum 1/(n(\\log n)^c)$) with the Alternating Series Test, across the different regimes of $|a|$.",
  "trap": "Thinking $b\\ge0$ is \"close enough\" to $b>1$ for convergence when $a=1$ — the entire range $0\\le b\\le1$ (with $c<1$) actually diverges; only $b>1$ (or $b=1,c>1$) converges."
},

{
  "id": "p.jam.2018.13",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 13,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.1",
  "tests": [
    "c.9.1.1",
    "c.8.3.1"
  ],
  "title": "Summing an alternating factorial series by splitting into e^{-1} pieces",
  "type": "MCQ",
  "prompt": "<p>Let $a_n = n+\\dfrac{1}{n}$, $n\\in\\mathbb{N}$. Then the sum of the series $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^{n+1}\\dfrac{a_{n+1}}{n!}$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "$e^{-1}-1$"
    },
    {
      "k": "B",
      "t": "$e^{-1}$"
    },
    {
      "k": "C",
      "t": "$1-e^{-1}$"
    },
    {
      "k": "D",
      "t": "$1+e^{-1}$"
    }
  ],
  "answer": "D",
  "approach": "<p>Write $a_{n+1}=(n+1)+\\dfrac{1}{n+1}$, split the series into two pieces, and re-index each piece so it becomes a (shifted) copy of $\\sum (-1)^k/k! = e^{-1}$.</p>",
  "solution": "<p>Since $a_{n+1}=(n+1)+\\dfrac{1}{n+1}$ and, for $n\\ge1$, $\\dfrac{n+1}{n!}=\\dfrac{n}{n!}+\\dfrac{1}{n!}=\\dfrac{1}{(n-1)!}+\\dfrac{1}{n!}$, the series splits as</p><p>$$S=\\underbrace{\\sum_{n=1}^\\infty(-1)^{n+1}\\left[\\frac{1}{(n-1)!}+\\frac{1}{n!}\\right]}_{S_1}+\\underbrace{\\sum_{n=1}^\\infty(-1)^{n+1}\\frac{1}{(n+1)!}}_{S_2}.$$</p><p>For $S_1$: re-indexing $k=n-1\\ (\\ge0)$ in the first part gives $\\sum_{k=0}^\\infty(-1)^{k}/k!=e^{-1}$, and the second part is $-\\sum_{n=1}^\\infty(-1)^n/n!=-(e^{-1}-1)=1-e^{-1}$. So $S_1=e^{-1}+(1-e^{-1})=1$.</p><p>For $S_2$: re-indexing $k=n+1\\ (\\ge2)$ gives $\\sum_{k=2}^\\infty(-1)^k/k!=e^{-1}-\\left(\\tfrac{1}{0!}-\\tfrac{1}{1!}\\right)=e^{-1}-1+1=e^{-1}$.</p><p>Hence $S=S_1+S_2=1+e^{-1}$. Answer: (D).</p>",
  "tested": "Manipulating an absolutely convergent series (justifying term rearrangement/splitting) by recognising pieces of the exponential series $e^{x}=\\sum x^n/n!$ at $x=-1$.",
  "trap": "Losing track of the index shift when writing $n/n!=1/(n-1)!$ or re-indexing $k=n+1$ — an off-by-one error silently drops or duplicates the $k=0$ or $k=1$ term of the $e^{-1}$ series."
},

{
  "id": "p.jam.2018.14",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 14,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.1",
  "tests": [
    "c.9.1.1",
    "c.9.3.2"
  ],
  "title": "The Cauchy product of a conditionally convergent series can diverge",
  "type": "MCQ",
  "prompt": "<p>Let $a_n = \\dfrac{(-1)^n}{\\sqrt{1+n}}$ and let $c_n = \\displaystyle\\sum_{k=0}^{n} a_{n-k}a_k$, where $n\\in\\mathbb{N}\\cup\\{0\\}$. Then which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both $\\sum_{n=0}^\\infty a_n$ and $\\sum_{n=1}^\\infty c_n$ are convergent"
    },
    {
      "k": "B",
      "t": "$\\sum_{n=0}^\\infty a_n$ is convergent but $\\sum_{n=1}^\\infty c_n$ is not convergent"
    },
    {
      "k": "C",
      "t": "$\\sum_{n=1}^\\infty c_n$ is convergent but $\\sum_{n=0}^\\infty a_n$ is not convergent"
    },
    {
      "k": "D",
      "t": "Neither $\\sum_{n=0}^\\infty a_n$ nor $\\sum_{n=1}^\\infty c_n$ is convergent"
    }
  ],
  "answer": "B",
  "solution": "<p>The terms $\\left|a_n\\right|=1/\\sqrt{1+n}$ decrease monotonically to $0$, so by the Alternating Series Test $\\sum a_n$ converges (only conditionally, since $\\sum 1/\\sqrt{1+n}$ diverges).</p><p>Now consider $c_n = \\sum_{k=0}^n a_{n-k}a_k = (-1)^n\\sum_{k=0}^n \\dfrac{1}{\\sqrt{(n-k+1)(k+1)}}$. By AM–GM, $(n-k+1)(k+1)\\le\\left(\\dfrac{n+2}{2}\\right)^2$ for every $k=0,\\dots,n$, so each of the $(n+1)$ terms in the sum is at least $\\dfrac{2}{n+2}$. Hence</p><p>$$|c_n| \\ge (n+1)\\cdot\\frac{2}{n+2} \\longrightarrow 2 \\ne 0.$$</p><p>Since $c_n$ does not tend to $0$, the series $\\sum c_n$ diverges by the $n$-th Term Test. So $\\sum a_n$ converges but $\\sum c_n$ (their Cauchy product) does not. Answer: (B).</p>",
  "tested": "This is the classical example (due to Cauchy) showing that the Cauchy product of two convergent series can fail to converge when the convergence is only conditional, not absolute.",
  "trap": "Assuming that because $\\sum a_n$ converges, its Cauchy product with itself must too — that guarantee (Mertens' theorem) needs at least one of the two series to converge absolutely, which fails here."
},

{
  "id": "p.jam.2018.15",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 15,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.2",
  "tests": [
    "c.6.2.7",
    "c.6.1.5"
  ],
  "title": "Sign of an integral built from increasing-decreasing compositions",
  "type": "MCQ",
  "prompt": "<p>Suppose that $f,g:\\mathbb{R}\\to\\mathbb{R}$ are differentiable functions such that $f$ is strictly increasing and $g$ is strictly decreasing. Define $p(x)=f(g(x))$ and $q(x)=g(f(x))$, $\\forall x\\in\\mathbb{R}$. Then, for $t>0$, the sign of</p><p>$$\\int_0^t p'(x)\\,\\bigl(q'(x)-3\\bigr)\\,dx$$</p><p>is</p>",
  "options": [
    {
      "k": "A",
      "t": "positive"
    },
    {
      "k": "B",
      "t": "negative"
    },
    {
      "k": "C",
      "t": "dependent on $t$"
    },
    {
      "k": "D",
      "t": "dependent on $f$ and $g$"
    }
  ],
  "answer": "A",
  "solution": "<p>By the chain rule, $p'(x)=f'(g(x))\\,g'(x)$. Since $f$ is strictly increasing, $f'\\ge0$ (and $>0$ generically); since $g$ is strictly decreasing, $g'\\le0$. So $p'(x)\\le 0$ everywhere — indeed $p=f\\circ g$ is a composition of increasing $\\circ$ decreasing, hence strictly decreasing, so $p'(x)<0$.</p><p>Similarly $q'(x) = g'(f(x))\\,f'(x)$ is a product of a non-positive and a non-negative factor, so $q'(x)\\le 0 < 3$, giving $q'(x)-3 < 0$ for every $x$.</p><p>Hence the integrand $p'(x)\\bigl(q'(x)-3\\bigr)$ is a product of two negative quantities, so it is positive at every point. Integrating a (strictly) positive function over $[0,t]$ with $t>0$ gives a positive number, regardless of which particular $f,g,t$ are chosen. Answer: (A).</p>",
  "tested": "Using the chain rule to determine the sign of the derivative of a composition of a strictly increasing and a strictly decreasing function, then using linearity/monotonicity of the integral (a nonnegative — here strictly positive — integrand has a nonnegative integral).",
  "trap": "Trying to compute $p(x)$ and $q(x)$ explicitly (impossible, since $f,g$ are arbitrary) instead of noticing the sign of the integrand is forced regardless of which $f,g$ are chosen."
},

{
  "id": "p.jam.2018.16",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 16,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.1",
  "tests": [
    "c.5.1.8",
    "c.4.1.10"
  ],
  "title": "Which limit/continuity claim about x^3 sin(1/x) is FALSE",
  "type": "MCQ",
  "prompt": "<p>For $x\\in\\mathbb{R}$, let $f(x) = \\begin{cases} x^3\\sin\\left(\\dfrac1x\\right), & x\\ne 0 \\\\ 0, & x=0\\end{cases}$. Then which one of the following is FALSE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\lim\\limits_{x\\to0}\\dfrac{f(x)}{x}=0$"
    },
    {
      "k": "B",
      "t": "$\\lim\\limits_{x\\to0}\\dfrac{f(x)}{x^2}=0$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{f(x)}{x^2}$ has infinitely many maxima and minima on the interval $(0,1)$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{f(x)}{x^4}$ is continuous at $x=0$ but not differentiable at $x=0$"
    }
  ],
  "answer": "D",
  "solution": "<p><b>(A)</b> $\\dfrac{f(x)}{x}=x^2\\sin(1/x)$ for $x\\ne0$, and $|x^2\\sin(1/x)|\\le x^2\\to0$, so by the Squeeze Theorem the limit is $0$. TRUE.</p><p><b>(B)</b> $\\dfrac{f(x)}{x^2}=x\\sin(1/x)$, and $|x\\sin(1/x)|\\le|x|\\to0$, so again by the Squeeze Theorem the limit is $0$. TRUE.</p><p><b>(C)</b> Let $g(x)=x\\sin(1/x)$ on $(0,1)$. Then $g'(x)=\\sin(1/x)-\\tfrac1x\\cos(1/x)$, which oscillates infinitely often as $x\\to0^+$ (its zero set accumulates at $0$), producing infinitely many critical points and hence infinitely many local maxima and minima on $(0,1)$. TRUE.</p><p><b>(D)</b> $\\dfrac{f(x)}{x^4}=\\dfrac{\\sin(1/x)}{x}$ for $x\\ne0$. As $x\\to0$, $\\sin(1/x)$ oscillates between $-1$ and $1$ while $1/x\\to\\infty$, so $\\dfrac{\\sin(1/x)}{x}$ is unbounded and has no limit at $0$ — it cannot be made continuous at $0$ by any choice of value there. So the claim that it \"is continuous at $x=0$\" is FALSE. Answer: (D).</p>",
  "tested": "Repeated use of the Squeeze Theorem for functions to force oscillating-times-vanishing expressions to $0$, contrasted with a genuinely unbounded oscillation ($\\sin(1/x)/x$) that has no limit at all.",
  "trap": "Assuming dividing by higher and higher powers of $x$ keeps \"curing\" the singularity at $0$ the way it did for $f(x)/x$ and $f(x)/x^2$ — dividing by $x^4$ actually goes too far and destroys the limit entirely."
},

{
  "id": "p.jam.2018.29",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 29,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.1",
  "tests": [
    "c.5.1.1",
    "c.5.1.4"
  ],
  "title": "Oscillation of a function over a shrinking family of intervals",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function and let $J$ be a bounded open interval in $\\mathbb{R}$. Define</p><p>$$W(f,J) = \\sup\\{f(x)\\mid x\\in J\\} - \\inf\\{f(x)\\mid x\\in J\\}.$$</p><p>Which one of the following is FALSE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$W(f,J_1)\\le W(f,J_2)$ if $J_1\\subset J_2$"
    },
    {
      "k": "B",
      "t": "If $f$ is a bounded function on $J$ and $J\\supset J_1\\supset J_2\\supset\\cdots\\supset J_n\\supset\\cdots$ are such that the length of the interval $J_n$ tends to $0$ as $n\\to\\infty$, then $\\lim\\limits_{n\\to\\infty}W(f,J_n)=0$"
    },
    {
      "k": "C",
      "t": "If $f$ is discontinuous at a point $a\\in J$, then $W(f,J)\\ne0$"
    },
    {
      "k": "D",
      "t": "If $f$ is continuous at a point $a\\in J$, then for any given $\\epsilon>0$ there exists an interval $I\\subset J$ such that $W(f,I)<\\epsilon$"
    }
  ],
  "answer": "B",
  "solution": "<p>$W(f,J)$ is the \"oscillation\" of $f$ on $J$.</p><p><b>(A)</b> A smaller interval has a smaller-or-equal sup and a larger-or-equal inf, so its oscillation cannot exceed that of a larger interval. TRUE.</p><p><b>(D)</b> This is exactly the definition of continuity restated via oscillation: continuity at $a$ means that for every $\\epsilon>0$ some neighbourhood $I$ of $a$ has $\\sup_I f-\\inf_I f<\\epsilon$. TRUE.</p><p><b>(C)</b> is the contrapositive-type statement matching (D): discontinuity at $a\\in J$ forces the oscillation on $J$ (which contains $a$) to stay bounded away from $0$. TRUE.</p><p><b>(B)</b> is the FALSE one: the statement claims that for *any* bounded $f$, shrinking the interval's *length* to $0$ forces the oscillation to $0$ — but this ignores where the shrinking intervals are converging to. If the nested intervals shrink down to a point $c$ at which $f$ is discontinuous (e.g. $f$ a step function jumping at $c$), the oscillation $W(f,J_n)$ stays at least as large as the jump, no matter how small $J_n$ becomes. So length $\\to0$ alone is not enough; continuity at the limiting point is what is really needed (as (C) and (D) correctly state). Answer: (B).</p>",
  "tested": "The characterisation of continuity/discontinuity at a point via the oscillation $\\sup f-\\inf f$ on shrinking neighbourhoods.",
  "trap": "Believing \"interval length $\\to0$\" by itself is enough to force oscillation to $0$ for *any* bounded function — it only works if $f$ is continuous at the point the intervals are shrinking to."
},

{
  "id": "p.jam.2018.31",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Injectivity intervals of f(x) = x + 1/x^3",
  "type": "MSQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\setminus\\{0\\}\\to\\mathbb{R}$ be defined by $f(x)=x+\\dfrac{1}{x^3}$. On which of the following interval(s) is $f$ one-one?</p>",
  "options": [
    {
      "k": "A",
      "t": "$(-\\infty,-1)$"
    },
    {
      "k": "B",
      "t": "$(0,1)$"
    },
    {
      "k": "C",
      "t": "$(0,2)$"
    },
    {
      "k": "D",
      "t": "$(0,\\infty)$"
    }
  ],
  "answer": [
    "B"
  ],
  "solution": "<p>$f'(x) = 1-\\dfrac{3}{x^4}$. Setting $f'(x)=0$ gives $x^4=3$, i.e. $x=\\pm3^{1/4}\\approx\\pm1.316$. Since $f'(x)<0$ for $|x|<3^{1/4}$ and $f'(x)>0$ for $|x|>3^{1/4}$ (on each side of $0$), $f$ is strictly monotonic — hence one-one — precisely on each of the four intervals $(-\\infty,-3^{1/4})$, $(-3^{1/4},0)$, $(0,3^{1/4})$, $(3^{1/4},\\infty)$, but not on any interval that straddles $\\pm3^{1/4}$.</p><p><b>(A)</b> $(-\\infty,-1)$ contains $-3^{1/4}\\approx-1.316$ (since $-1.316<-1$), so $f$ is not monotonic — and not one-one — on all of it. FALSE.</p><p><b>(B)</b> $(0,1)\\subset(0,3^{1/4})$ since $1<1.316$, so $f$ is strictly decreasing (hence one-one) throughout $(0,1)$. TRUE.</p><p><b>(C)</b> $(0,2)$ contains the critical point $3^{1/4}\\approx1.316$, where $f$ switches from decreasing to increasing, so it is not one-one on all of $(0,2)$. FALSE.</p><p><b>(D)</b> $(0,\\infty)$ certainly contains the critical point too. FALSE.</p><p>Answer: (B) only.</p>",
  "tested": "Using the sign of $f'$ to locate maximal intervals of strict monotonicity (hence injectivity), and recognising that an interval containing a critical point need not be an interval of injectivity.",
  "trap": "Picking $(0,2)$ or $(-\\infty,-1)$ because they look like \"natural\" intervals — both actually straddle the critical point $x=3^{1/4}\\approx1.316$ (or $-1.316$), where $f$ turns around."
},

{
  "id": "p.jam.2018.43",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 43,
  "marks": 1,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9",
    "c.3.7.2"
  ],
  "title": "A power series that telescopes to a constant function",
  "type": "NAT",
  "prompt": "<p>Let $f(x) = \\displaystyle\\sum_{n=0}^{\\infty}(-1)^n\\,x\\,(x-1)^n$ for $0<x<2$. Then the value of $f\\!\\left(\\dfrac{\\pi}{4}\\right)$ is _____</p>",
  "answer": {
    "value": 1,
    "tol": 0,
    "dp": 0
  },
  "approach": "<p>Factor out the $x$ and recognise the remaining sum as a geometric series in $-(x-1)$; identify exactly when it converges.</p>",
  "solution": "<p>$f(x) = x\\displaystyle\\sum_{n=0}^\\infty\\bigl(-(x-1)\\bigr)^n = x\\displaystyle\\sum_{n=0}^\\infty(1-x)^n$, a geometric series with ratio $r=1-x$. This converges exactly when $|1-x|<1$, i.e. $0<x<2$ — precisely the given domain. Its sum is</p><p>$$f(x) = x\\cdot\\frac{1}{1-(1-x)} = \\frac{x}{x} = 1 \\qquad \\text{for every } x\\in(0,2).$$</p><p>So $f$ is identically $1$ throughout its domain of convergence, and in particular $f(\\pi/4)=1$ (since $0<\\pi/4<2$).</p>",
  "tested": "Recognising and summing a geometric power series, and matching its interval of convergence $|x-1|<1$ to the stated domain $0<x<2$.",
  "trap": "Trying to substitute $x=\\pi/4$ term-by-term and estimate a numeric series, instead of noticing the whole series collapses algebraically to the constant function $1$ on its entire domain — the specific value $\\pi/4$ is a red herring."
},

{
  "id": "p.jam.2018.46",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 46,
  "marks": 1,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Recovering f from an integral equation via the Fundamental Theorem",
  "type": "NAT",
  "prompt": "<p>Let $f:[0,\\infty)\\to[0,\\infty)$ be continuous on $[0,\\infty)$ and differentiable on $(0,\\infty)$. If $f(x) = \\displaystyle\\int_0^x \\sqrt{f(t)}\\,dt$, then $f(6) =$ _____</p>",
  "answer": {
    "value": 9,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>By the second form of the Fundamental Theorem of Calculus (differentiating a variable-upper-limit integral), $f'(x) = \\sqrt{f(x)}$ for $x>0$, and putting $x=0$ in the defining equation gives $f(0)=0$.</p><p>Looking for the non-trivial solution branch (the identically-zero function also technically satisfies the equation, but does not match $f(6)$ being asked for meaningfully): for $f(x)>0$, separate variables,</p><p>$$\\frac{df}{\\sqrt{f}} = dx \\ \\Longrightarrow\\ 2\\sqrt{f(x)} = x + C.$$</p><p>Since $\\sqrt{f(0)}=0$, $C=0$, so $\\sqrt{f(x)}=x/2$, i.e. $f(x)=\\dfrac{x^2}{4}$. Then $f(6) = \\dfrac{36}{4} = 9$.</p>",
  "tested": "The second form of the Fundamental Theorem of Calculus, turning an integral equation into an initial value problem, then solving the resulting separable ODE.",
  "trap": "Forgetting to pin down the integration constant using the initial condition $f(0)=0$ (rather than assuming it is automatically $0$), and overlooking that $y'=\\sqrt y,\\,y(0)=0$ also admits the trivial solution $f\\equiv0$ — the problem's intent is the non-trivial branch."
},

{
  "id": "p.jam.2018.47",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 47,
  "marks": 1,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence from an interleaved even/odd coefficient sequence",
  "type": "NAT",
  "prompt": "<p>Let $a_n = \\dfrac{1+(-1)^n}{2^n}+\\dfrac{1+(-1)^{n-1}}{3^n}$. Then the radius of convergence of the power series $\\displaystyle\\sum_{n=1}^{\\infty}a_n x^n$ about $x=0$ is _____</p>",
  "answer": {
    "value": 2,
    "tol": 0,
    "dp": 0
  },
  "approach": "<p>Evaluate $a_n$ separately for even and odd $n$ (one of the two numerators vanishes each time), then apply the Cauchy–Hadamard formula using $\\limsup|a_n|^{1/n}$ rather than a term-to-term ratio.</p>",
  "solution": "<p>For $n$ even: $1+(-1)^n=2$ and $1+(-1)^{n-1}=0$, so $a_n = \\dfrac{2}{2^n}=\\dfrac{1}{2^{n-1}}$.</p><p>For $n$ odd: $1+(-1)^n=0$ and $1+(-1)^{n-1}=2$, so $a_n=\\dfrac{2}{3^n}$.</p><p>Then $|a_n|^{1/n}\\to\\dfrac12$ along even $n$ (from $\\left(2^{-(n-1)}\\right)^{1/n}\\to \\tfrac12$) and $|a_n|^{1/n}\\to\\dfrac13$ along odd $n$. So $\\limsup_n|a_n|^{1/n} = \\dfrac12$ (the larger of the two subsequential limits), and by the Cauchy–Hadamard Theorem the radius of convergence is</p><p>$$R = \\frac{1}{\\limsup|a_n|^{1/n}} = \\frac{1}{1/2}=2.$$</p>",
  "tested": "The Cauchy–Hadamard (root test) formula for radius of convergence, needed here because the coefficient sequence interleaves two different geometric decay rates rather than following one clean formula.",
  "trap": "Applying the ratio test $a_{n+1}/a_n$ directly — because the sequence alternates between two different formulas, this ratio oscillates and has no single limit, so the root-test/limsup approach is required instead."
},

{
  "id": "p.jam.2018.50",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 50,
  "marks": 1,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.2"
  ],
  "title": "Coefficient of x^4 in the Maclaurin series of e^{sin x}",
  "type": "NAT",
  "prompt": "<p>The coefficient of $x^4$ in the power series expansion of $e^{\\sin x}$ about $x=0$ is _____ (correct up to three decimal places).</p>",
  "answer": {
    "value": -0.125,
    "tol": 0.001,
    "dp": 3
  },
  "approach": "<p>Substitute the Maclaurin series of $\\sin x$ into $e^u=\\sum u^k/k!$ and collect all contributions to $x^4$, remembering that $\\sin x$, and every odd power of it, is an odd function.</p>",
  "solution": "<p>$\\sin x = x-\\dfrac{x^3}{6}+O(x^5)$. Since $\\sin x$ is an odd function, so are $\\sin x$ and $\\sin^3x$ — they contribute no $x^4$ term at all.</p><p>$\\sin^2x = \\left(x-\\dfrac{x^3}{6}\\right)^2+O(x^6) = x^2-\\dfrac{x^4}{3}+O(x^6)$, so its $x^4$ coefficient is $-\\dfrac13$.</p><p>$\\sin^4x = x^4+O(x^6)$, so its $x^4$ coefficient is $1$.</p><p>Now $e^{\\sin x} = 1+\\sin x+\\dfrac{\\sin^2x}{2!}+\\dfrac{\\sin^3x}{3!}+\\dfrac{\\sin^4x}{4!}+\\cdots$, so the coefficient of $x^4$ is</p><p>$$0+\\frac{-1/3}{2}+0+\\frac{1}{24} = -\\frac16+\\frac{1}{24} = -\\frac{4}{24}+\\frac{1}{24}=-\\frac{3}{24}=-\\frac18=-0.125.$$</p>",
  "tested": "Composing Maclaurin series (substituting the series for $\\sin x$ into the exponential series and collecting like powers), using parity (odd/even) to skip vanishing terms quickly.",
  "trap": "Including a nonexistent $x^4$ contribution from $\\sin x$ or $\\sin^3x$ — both are odd functions and cannot contribute to an even power; only the $\\sin^2x/2!$ and $\\sin^4x/4!$ terms matter here."
},

{
  "id": "p.jam.2018.52",
  "course": "ra2",
  "exam": "JAM",
  "year": 2018,
  "paper": "MA",
  "qno": 52,
  "marks": 2,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.1",
    "c.6.4.2"
  ],
  "title": "An exponential-type limit via second-order Taylor expansion",
  "type": "NAT",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be such that $f''$ is continuous on $\\mathbb{R}$ and $f(0)=1$, $f'(0)=0$ and $f''(0)=-1$. Then $\\lim\\limits_{x\\to\\infty}\\left(f\\!\\left(\\sqrt{\\dfrac{2}{x}}\\right)\\right)^{x}$ is _____ (correct up to three decimal places).</p>",
  "answer": {
    "value": 0.368,
    "tol": 0.005,
    "dp": 3
  },
  "approach": "<p>Set $t=\\sqrt{2/x}\\to0$ as $x\\to\\infty$, expand $f(t)$ to second order about $0$ using Taylor's theorem, then use the standard $(1+c/x)^x\\to e^c$ limit.</p>",
  "solution": "<p>Let $t=\\sqrt{2/x}$, so $t\\to0^+$ as $x\\to\\infty$ and $t^2=2/x$. By Taylor's theorem (with the continuity of $f''$ giving the Peano/Lagrange remainder $o(t^2)$),</p><p>$$f(t) = f(0)+f'(0)\\,t+\\frac{f''(0)}{2}t^2+o(t^2) = 1+0-\\frac12t^2+o(t^2) = 1-\\frac{1}{x}+o\\!\\left(\\frac1x\\right).$$</p><p>So $f(t)^x = \\left(1-\\dfrac1x+o(1/x)\\right)^{x}\\to e^{-1}$ as $x\\to\\infty$ (the standard limit $\\left(1+\\tfrac{c}{x}+o(1/x)\\right)^x\\to e^c$, here with $c=-1$). Numerically, $e^{-1}\\approx0.368$.</p>",
  "tested": "Using Taylor's theorem to get a precise first-order approximation of $f(t)$ as $t\\to0$, then converting a \"$1^\\infty$\"-type limit into $e^{c}$ via the exponent $x=2/t^2$.",
  "trap": "Using only $f(0)=1$ and $f'(0)=0$ (which alone would suggest $f(t)\\to1$, leaving an apparently indeterminate but \"trivial-looking\" $1^\\infty$ form) — the answer is entirely carried by the second-order term $f''(0)$, so dropping it loses the exponent."
},

{
  "id": "p.jam.2017.02",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 2,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Extrema of a function with increasing derivative",
  "type": "MCQ",
  "prompt": "<p>Let $\\varphi:\\mathbb{R}\\to\\mathbb{R}$ be a differentiable function such that $\\varphi'$ is strictly increasing with $\\varphi'(1)=0$. Let $\\alpha$ and $\\beta$ denote the minimum and maximum values of $\\varphi(x)$ on the interval $[2,3]$, respectively. Then which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\beta=\\varphi(3)$"
    },
    {
      "k": "B",
      "t": "$\\alpha=\\varphi(2.5)$"
    },
    {
      "k": "C",
      "t": "$\\beta=\\varphi(2.5)$"
    },
    {
      "k": "D",
      "t": "$\\alpha=\\varphi(3)$"
    }
  ],
  "answer": "A",
  "solution": "<p>Since $\\varphi'$ is strictly increasing and $\\varphi'(1)=0$, for every $x>1$ we have $\\varphi'(x)>\\varphi'(1)=0$. In particular $\\varphi'(x)>0$ for all $x\\in[2,3]$ (as $2>1$), so $\\varphi$ is strictly increasing on $[2,3]$.</p><p>A strictly increasing function on a closed interval attains its minimum at the left endpoint and its maximum at the right endpoint. Hence $\\alpha=\\varphi(2)$ and $\\beta=\\varphi(3)$, so (A) is TRUE. Options (B) and (C) would require the extremum at the midpoint $2.5$, which only happens for a non-monotone function; (D) swaps $\\alpha$ and $\\beta$.</p>",
  "tested": "<p>A strictly increasing derivative that vanishes at a point forces positivity (hence monotonicity) beyond that point — a direct use of the Monotonicity Criterion for differentiable functions.</p>",
  "trap": "Assuming the extremum could occur in the interior of [2,3] instead of checking the sign of φ' there."
},

{
  "id": "p.jam.2017.04",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 4,
  "marks": 1,
  "neg": -0.33,
  "sec": "7.1",
  "tests": [
    "c.7.1.1"
  ],
  "title": "Evaluating a limit as a Riemann sum",
  "type": "MCQ",
  "prompt": "<p>$$\\lim_{n\\to\\infty} \\frac{\\pi}{n}\\sum_{k=1}^n \\sin\\left(\\frac{\\pi}{2}+\\frac{5\\pi}{2}\\cdot\\frac{k}{n}\\right) = $$</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{2\\pi}{5}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{5}{2}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{2}{5}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{5\\pi}{2}$"
    }
  ],
  "answer": "C",
  "solution": "<p>Recognise the sum as the Riemann sum, with tags $x_k=k/n$ and mesh $1/n$, for $f(x)=\\pi\\sin\\!\\left(\\frac{\\pi}{2}+\\frac{5\\pi}{2}x\\right)$ on $[0,1]$. So the limit equals $$\\int_0^1 \\pi\\sin\\!\\left(\\frac{\\pi}{2}+\\frac{5\\pi}{2}x\\right)dx.$$</p><p>With antiderivative $-\\frac{2}{5}\\cos\\!\\left(\\frac{\\pi}{2}+\\frac{5\\pi}{2}x\\right)$, evaluating from $0$ to $1$ gives $$-\\frac{2}{5}\\Big[\\cos(3\\pi)-\\cos(\\tfrac{\\pi}{2})\\Big]=-\\frac{2}{5}[-1-0]=\\frac{2}{5}.$$</p>",
  "tested": "<p>Recognising a sum of the form $\\frac{1}{n}\\sum f(x_k)$ as a Riemann sum that converges to $\\int_0^1 f$.</p>",
  "trap": "Trying to compute the finite trigonometric sum directly with a sum-to-product identity instead of recognising the Riemann sum."
},

{
  "id": "p.jam.2017.07",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 7,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.1",
  "tests": [
    "c.6.1.3"
  ],
  "title": "Derivative of a 2x2 determinant of functions",
  "type": "MCQ",
  "prompt": "<p>Let $f_1(x), f_2(x), g_1(x), g_2(x)$ be differentiable functions on $\\mathbb{R}$. Let $$F(x) = \\begin{vmatrix} f_1(x) & f_2(x) \\\\ g_1(x) & g_2(x) \\end{vmatrix}$$ be the determinant of the matrix $\\begin{pmatrix} f_1(x) & f_2(x) \\\\ g_1(x) & g_2(x) \\end{pmatrix}$. Then $F'(x)$ is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\begin{vmatrix} f_1'(x) & f_2'(x) \\\\ g_1(x) & g_2(x) \\end{vmatrix} + \\begin{vmatrix} f_1(x) & g_1'(x) \\\\ f_2'(x) & g_2(x) \\end{vmatrix}$"
    },
    {
      "k": "B",
      "t": "$\\begin{vmatrix} f_1'(x) & f_2'(x) \\\\ g_1(x) & g_2(x) \\end{vmatrix} + \\begin{vmatrix} f_1(x) & g_1'(x) \\\\ f_2(x) & g_2'(x) \\end{vmatrix}$"
    },
    {
      "k": "C",
      "t": "$\\begin{vmatrix} f_1'(x) & f_2'(x) \\\\ g_1(x) & g_2(x) \\end{vmatrix} - \\begin{vmatrix} f_1(x) & g_1'(x) \\\\ f_2(x) & g_2'(x) \\end{vmatrix}$"
    },
    {
      "k": "D",
      "t": "$\\begin{vmatrix} f_1'(x) & f_2'(x) \\\\ g_1'(x) & g_2'(x) \\end{vmatrix}$"
    }
  ],
  "answer": "B",
  "solution": "<p>$F(x)=f_1g_2-f_2g_1$. By the product rule, $$F'(x)=f_1'g_2+f_1g_2'-f_2'g_1-f_2g_1'=(f_1'g_2-f_2'g_1)+(f_1g_2'-f_2g_1').$$</p><p>The first bracket is exactly $\\begin{vmatrix}f_1'&f_2'\\\\ g_1&g_2\\end{vmatrix}$. The second, $f_1g_2'-g_1'f_2$, equals $\\begin{vmatrix}f_1&g_1'\\\\ f_2&g_2'\\end{vmatrix}$. So $F'(x)$ is the sum in (B). Option (A) instead differentiates $g_2$ in the first determinant's second column while leaving $f_2$ undifferentiated elsewhere, which double-counts one term and misses another; (C) has the wrong sign on the second term; (D) differentiates every entry, which is not the product-rule expansion of a determinant.</p>",
  "tested": "<p>Differentiating a determinant of functions is really an application of the product rule to $f_1g_2-f_2g_1$, split back into determinant form.</p>",
  "trap": "Differentiating every entry of the matrix at once, as if F' were the determinant of the entrywise derivative — that is option (D), and it is wrong."
},

{
  "id": "p.jam.2017.09",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 9,
  "marks": 1,
  "neg": -0.33,
  "sec": "7.3",
  "tests": [
    "c.7.3.17"
  ],
  "title": "Improper Gaussian-type integral by parts",
  "type": "MCQ",
  "prompt": "<p>If $\\displaystyle\\lim_{T\\to\\infty}\\int_0^T e^{-x^2}dx=\\frac{\\sqrt\\pi}{2}$, then $$\\lim_{T\\to\\infty}\\int_0^T x^2e^{-x^2}dx = $$</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{\\sqrt\\pi}{4}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{\\sqrt\\pi}{2}$"
    },
    {
      "k": "C",
      "t": "$\\sqrt{2\\pi}$"
    },
    {
      "k": "D",
      "t": "$2\\sqrt\\pi$"
    }
  ],
  "answer": "A",
  "solution": "<p>Integrate by parts with $u=x$, $dv=xe^{-x^2}dx$, so $v=-\\tfrac12e^{-x^2}$: $$\\int_0^T x^2e^{-x^2}dx=\\left[-\\frac{x}{2}e^{-x^2}\\right]_0^T+\\frac12\\int_0^T e^{-x^2}dx.$$</p><p>As $T\\to\\infty$, $Te^{-T^2}\\to0$, so the boundary term vanishes and the limit equals $$\\frac12\\cdot\\frac{\\sqrt\\pi}{2}=\\frac{\\sqrt\\pi}{4}.$$</p>",
  "tested": "<p>Integration by parts applied to an improper (infinite-limit) Riemann integral, using a given value of the Gaussian integral.</p>"
},

{
  "id": "p.jam.2017.10",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 10,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.2",
  "tests": [
    "c.6.2.3"
  ],
  "title": "Fitting Rolle's theorem to a piecewise function",
  "type": "MCQ",
  "prompt": "<p>If $$f(x)=\\begin{cases}1+x & \\text{if } x<0\\\\ (1-x)(px+q) & \\text{if } x\\ge0\\end{cases}$$ satisfies the assumptions of Rolle's theorem on the interval $[-1,1]$, then the ordered pair $(p,q)$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "$(2,-1)$"
    },
    {
      "k": "B",
      "t": "$(-2,-1)$"
    },
    {
      "k": "C",
      "t": "$(-2,1)$"
    },
    {
      "k": "D",
      "t": "$(2,1)$"
    }
  ],
  "answer": "D",
  "solution": "<p>$f(-1)=1+(-1)=0$ and $f(1)=(1-1)(p+q)=0$ automatically, so $f(-1)=f(1)$ for any $p,q$.</p><p><b>Continuity at 0:</b> the left limit is $1+0=1$; the right value is $(1-0)(q)=q$. So we need $q=1$.</p><p><b>Differentiability at 0:</b> the left derivative of $1+x$ is $1$. The right derivative of $(1-x)(px+q)$ is $-(px+q)+(1-x)p$, which at $x=0$ equals $-q+p$. Matching to the left derivative: $p-q=1$. With $q=1$ this gives $p=2$.</p><p>Hence $(p,q)=(2,1)$, option (D).</p>",
  "tested": "<p>Rolle's theorem requires continuity on $[-1,1]$, differentiability on $(-1,1)$, and equal endpoint values — here the endpoint condition is automatic, so the real content is matching the one-sided derivatives at the join point.</p>",
  "trap": "Forgetting to also check f(-1)=f(1) (it happens to hold automatically here, but a solver who assumes it must be imposed can go looking for a second, spurious equation)."
},

{
  "id": "p.jam.2017.19",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 19,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.1",
  "tests": [
    "c.6.1.1"
  ],
  "title": "Hölder condition forces a zero derivative",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a differentiable function such that $f(2)=2$ and $$|f(x)-f(y)|\\le5\\left(|x-y|\\right)^{3/2}$$ for all $x,y\\in\\mathbb{R}$. Let $g(x)=x^3f(x)$. Then $g'(2)=$</p>",
  "options": [
    {
      "k": "A",
      "t": "$5$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{15}{2}$"
    },
    {
      "k": "C",
      "t": "$12$"
    },
    {
      "k": "D",
      "t": "$24$"
    }
  ],
  "answer": "D",
  "solution": "<p>Fix $x$. For $y\\ne x$, the given inequality gives $$\\left|\\frac{f(y)-f(x)}{y-x}\\right|\\le5|y-x|^{1/2}\\to0 \\text{ as } y\\to x.$$ By the Squeeze Theorem this forces $f'(x)=0$ for every $x\\in\\mathbb{R}$, so $f$ is constant, and since $f(2)=2$ we get $f(x)\\equiv2$.</p><p>By the product rule, $g'(x)=3x^2f(x)+x^3f'(x)=3x^2f(x)$ (since $f'\\equiv0$). At $x=2$: $g'(2)=3(4)(2)=24$.</p>",
  "tested": "<p>The definition of the derivative combined with the Squeeze Theorem: a Hölder condition with exponent $>1$ forces the derivative to vanish everywhere.</p>",
  "trap": "Forgetting the $x^3f'(x)$ term entirely and just computing $3x^2f(x)$ without first justifying that $f'\\equiv0$ — the justification is the actual point of the question."
},

{
  "id": "p.jam.2017.20",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 20,
  "marks": 2,
  "neg": -0.66,
  "sec": "7.3",
  "tests": [
    "c.7.3.4",
    "c.5.3.7"
  ],
  "title": "Mean value property vs a false averaging claim",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to[0,\\infty)$ be a continuous function. Then which one of the following is NOT TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "There exists $x\\in\\mathbb{R}$ such that $f(x)=\\dfrac{f(0)+f(1)}{2}$"
    },
    {
      "k": "B",
      "t": "There exists $x\\in\\mathbb{R}$ such that $f(x)=\\sqrt{f(-1)f(1)}$"
    },
    {
      "k": "C",
      "t": "There exists $x\\in\\mathbb{R}$ such that $f(x)=\\displaystyle\\int_{-1}^1 f(t)\\,dt$"
    },
    {
      "k": "D",
      "t": "There exists $x\\in\\mathbb{R}$ such that $f(x)=\\displaystyle\\int_0^1 f(t)\\,dt$"
    }
  ],
  "answer": "C",
  "solution": "<p>(A): $\\frac{f(0)+f(1)}{2}$ lies between $f(0)$ and $f(1)$, so by the Intermediate Value Theorem on $[0,1]$ some $x$ attains it. TRUE.</p><p>(B): since $f\\ge0$, the geometric mean $\\sqrt{f(-1)f(1)}$ always lies between $\\min(f(-1),f(1))$ and $\\max(f(-1),f(1))$ (AM–GM), so IVT on $[-1,1]$ gives such an $x$. TRUE.</p><p>(D): $\\int_0^1 f(t)dt$ is exactly the average of $f$ over an interval of length $1$, so it lies between the min and max of $f$ on $[0,1]$; the First Mean Value Theorem for Integrals gives $x\\in[0,1]$ with $f(x)=\\int_0^1 f$. TRUE.</p><p>(C): $\\int_{-1}^1 f(t)dt$ is $2\\times$ the average of $f$ on $[-1,1]$ (the interval has length $2$), so it need not lie between the min and max of $f$ anywhere. Counterexample: take $f\\equiv1$ on all of $\\mathbb{R}$. Then $\\int_{-1}^1 f\\,dt=2$, but $f(x)=1$ for every $x$, so $f(x)=2$ is never attained. Hence (C) is NOT always true.</p>",
  "tested": "<p>The First Mean Value Theorem for Integrals only guarantees the average value (integral divided by interval length) is attained — (C) omits that division, breaking the guarantee.</p>",
  "trap": "Assuming any integral of a nonnegative continuous function must be \"between\" its endpoint values, without noticing the missing 1/(length) factor in option (C)."
},

{
  "id": "p.jam.2017.21",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.4",
  "tests": [
    "c.9.4.9",
    "c.9.2.6"
  ],
  "title": "Interval of convergence of a shifted power series",
  "type": "MCQ",
  "prompt": "<p>The interval of convergence of the power series $$\\sum_{n=1}^\\infty \\frac{1}{(-3)^{n+2}}\\cdot\\frac{(4x-12)^n}{n^2+1}$$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{10}{4}\\le x<\\dfrac{14}{4}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{9}{4}\\le x<\\dfrac{15}{4}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{10}{4}\\le x\\le\\dfrac{14}{4}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{9}{4}\\le x\\le\\dfrac{15}{4}$"
    }
  ],
  "answer": "D",
  "solution": "<p>Write $(-3)^{n+2}=9(-3)^n$ and set $s=\\dfrac{4x-12}{-3}=-\\dfrac{4(x-3)}{3}$. The series becomes $$\\frac19\\sum_{n=1}^\\infty \\frac{s^n}{n^2+1}.$$</p><p>By the Ratio (or Root) Test, $\\sum s^n/(n^2+1)$ has radius of convergence $1$ in $s$ (since $1/(n^2+1)\\to1$ under the $n$-th root/ratio). At $|s|=1$ the series $\\sum 1/(n^2+1)$ converges absolutely (compare with the $p$-series $1/n^2$), so both endpoints $s=\\pm1$ are included.</p><p>So the series converges exactly for $|s|\\le1$, i.e. $\\left|\\dfrac{4(x-3)}{3}\\right|\\le1 \\iff |x-3|\\le\\dfrac34 \\iff \\dfrac94\\le x\\le\\dfrac{15}{4}$, matching (D).</p>",
  "tested": "<p>Finding a radius of convergence for a shifted/rescaled power series and then testing both endpoints separately via comparison with a convergent $p$-series.</p>",
  "trap": "Forgetting to substitute and rescale before applying the ratio test, or forgetting to check the endpoints (the difference between the four options is entirely about whether the endpoints are included, and where the interval is centred)."
},

{
  "id": "p.jam.2017.45",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 45,
  "marks": 1,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.1"
  ],
  "title": "Evaluating a Beta-type integral",
  "type": "NAT",
  "prompt": "<p>$$\\left(\\int_0^1 x^4(1-x)^5\\,dx\\right)^{-1} = $$</p>",
  "answer": {
    "value": 1260,
    "tol": 0.1,
    "dp": 0
  },
  "solution": "<p>Expand $(1-x)^5=\\sum_{k=0}^5\\binom5k(-x)^k$ and integrate term by term, or use the Beta integral $\\int_0^1 x^{m}(1-x)^n dx=\\dfrac{m!\\,n!}{(m+n+1)!}$ with $m=4,n=5$: $$\\int_0^1 x^4(1-x)^5dx=\\frac{4!\\,5!}{10!}=\\frac{24\\cdot120}{3628800}=\\frac{2880}{3628800}=\\frac1{1260}.$$</p><p>So the reciprocal is $1260$.</p>",
  "tested": "<p>Evaluating a definite integral of a polynomial via the Beta-function identity for $\\int_0^1 x^m(1-x)^n dx$.</p>"
},

{
  "id": "p.jam.2017.47",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 47,
  "marks": 1,
  "neg": 0,
  "sec": "8.4",
  "tests": [
    "c.8.4.1"
  ],
  "title": "Summing a series via sin x's power series",
  "type": "NAT",
  "prompt": "<p>$$\\frac{1}{2\\pi}\\left(\\frac{\\pi^3}{1!\\,3}-\\frac{\\pi^5}{3!\\,5}+\\frac{\\pi^7}{5!\\,7}-\\cdots+\\frac{(-1)^{n-1}\\pi^{2n+1}}{(2n-1)!(2n+1)}+\\cdots\\right) = $$</p>",
  "answer": {
    "value": 0.5,
    "tol": 0.01,
    "dp": 2
  },
  "solution": "<p>Let $$g(x)=\\sum_{n=1}^\\infty \\frac{(-1)^{n-1}x^{2n+1}}{(2n-1)!(2n+1)}.$$ Differentiating term by term (valid inside the radius of convergence, which is infinite here), $$g'(x)=\\sum_{n=1}^\\infty\\frac{(-1)^{n-1}x^{2n}}{(2n-1)!}=x\\sum_{n=1}^\\infty\\frac{(-1)^{n-1}x^{2n-1}}{(2n-1)!}=x\\sin x,$$ using the power series for $\\sin x$. Since $g(0)=0$, $$g(x)=\\int_0^x t\\sin t\\,dt=\\big[\\sin t - t\\cos t\\big]_0^x=\\sin x-x\\cos x.$$</p><p>At $x=\\pi$: $g(\\pi)=\\sin\\pi-\\pi\\cos\\pi=0-\\pi(-1)=\\pi$. The given sum is exactly $g(\\pi)$, so the answer is $$\\frac{1}{2\\pi}\\cdot\\pi=\\frac12.$$</p>",
  "tested": "<p>Term-by-term differentiation/integration of a power series to recover a closed form, using the Maclaurin series of $\\sin x$.</p>",
  "trap": "Trying to recognise the series as a standard Taylor series directly, rather than differentiating it first to reduce it to the known series for sin x."
},

{
  "id": "p.jam.2017.53",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 53,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.1"
  ],
  "title": "A critical-point identity for a trigonometric ratio",
  "type": "NAT",
  "prompt": "<p>Let $$f(x)=\\frac{\\sin(\\pi x)}{\\pi\\sin x}, \\qquad x\\in(0,\\pi),$$ and let $x_0\\in(0,\\pi)$ be such that $f'(x_0)=0$. Then $$\\big(f(x_0)\\big)^2\\left(1+(\\pi^2-1)\\sin^2x_0\\right) = $$</p>",
  "answer": {
    "value": 1,
    "tol": 0.1,
    "dp": 0
  },
  "solution": "<p>Take the logarithmic derivative: $$\\frac{f'(x)}{f(x)}=\\pi\\cot(\\pi x)-\\cot(x).$$ Setting $f'(x_0)=0$ (with $f(x_0)\\ne0$) gives $$\\pi\\cot(\\pi x_0)=\\cot(x_0) \\iff \\pi\\cos(\\pi x_0)\\sin x_0=\\cos x_0\\sin(\\pi x_0).$$</p><p>Write $s=\\sin x_0,\\ c=\\cos x_0,\\ A=\\sin(\\pi x_0),\\ C=\\cos(\\pi x_0)$. The relation is $\\pi Cs=cA$, i.e. $C=\\dfrac{cA}{\\pi s}$. Substituting into $C^2+A^2=1$: $$\\frac{c^2A^2}{\\pi^2s^2}+A^2=1 \\implies A^2=\\frac{\\pi^2s^2}{\\pi^2s^2+c^2}.$$</p><p>Then $$\\big(f(x_0)\\big)^2=\\frac{A^2}{\\pi^2s^2}=\\frac{1}{\\pi^2s^2+c^2}=\\frac{1}{1+(\\pi^2-1)s^2}$$ (using $c^2=1-s^2$). Hence $$\\big(f(x_0)\\big)^2\\left(1+(\\pi^2-1)\\sin^2x_0\\right)=1.$$</p>",
  "tested": "<p>Fermat's theorem (derivative zero at an interior critical point) turned into an algebraic relation via the logarithmic derivative, then combined with the Pythagorean identity.</p>",
  "trap": "Trying to solve for the exact value of x0 numerically instead of eliminating it algebraically using sin²+cos²=1 — the expression is a hidden identity, constant for every valid critical point."
},

{
  "id": "p.jam.2017.57",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 57,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Tangents of a given slope to an integral-defined curve",
  "type": "NAT",
  "prompt": "<p>For $x>1$, let $$f(x)=\\int_1^x\\left(\\sqrt{\\log t}-\\frac12\\log\\sqrt t\\right)dt.$$ The number of tangents to the curve $y=f(x)$ parallel to the line $x+y=0$ is</p>",
  "answer": {
    "value": 1,
    "tol": 0.1,
    "dp": 0
  },
  "solution": "<p>Here $\\log$ denotes the natural logarithm. By the Fundamental Theorem of Calculus (differentiation of an integral with variable upper limit), $$f'(x)=\\sqrt{\\log x}-\\frac12\\log\\sqrt x=\\sqrt{\\ln x}-\\frac14\\ln x.$$</p><p>A tangent is parallel to $x+y=0$ (slope $-1$) exactly when $f'(x)=-1$. Put $u=\\ln x>0$ (since $x>1$) and $t=\\sqrt u\\ge0$: $$\\sqrt u-\\frac u4=-1 \\iff t-\\frac{t^2}4=-1 \\iff t^2-4t-4=0 \\iff t=2\\pm2\\sqrt2.$$</p><p>Only $t=2+2\\sqrt2>0$ is admissible (the other root is negative), giving a unique $u=t^2$ and hence a unique $x=e^u>1$. So there is exactly $1$ such tangent.</p>",
  "tested": "<p>The second form of the Fundamental Theorem of Calculus (differentiating a variable-upper-limit integral) combined with solving f'(x) = −1 for admissible x.</p>",
  "trap": "Forgetting the domain restriction t=√u ≥ 0 and counting both roots of the resulting quadratic in t."
},

{
  "id": "p.jam.2017.59",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 59,
  "marks": 2,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence of a lacunary series",
  "type": "NAT",
  "prompt": "<p>The radius of convergence of the power series $$\\sum_{n=0}^\\infty n!\\,x^{n^2}$$ is</p>",
  "answer": {
    "value": 1,
    "tol": 0.1,
    "dp": 0
  },
  "solution": "<p>Only the terms with exponent $m=n^2$ are nonzero, with coefficient $a_{n^2}=n!$. By the Cauchy–Hadamard formula, the radius of convergence is $$R=\\frac{1}{\\limsup_{m\\to\\infty}|a_m|^{1/m}}=\\frac{1}{\\limsup_{n\\to\\infty}(n!)^{1/n^2}}.$$</p><p>Since $\\ln(n!)\\sim n\\ln n$ (Stirling), $$\\frac{\\ln(n!)}{n^2}\\sim\\frac{n\\ln n}{n^2}=\\frac{\\ln n}{n}\\to0,$$ so $(n!)^{1/n^2}=e^{\\ln(n!)/n^2}\\to e^0=1$. Hence $R=1/1=1$.</p>",
  "tested": "<p>The Cauchy–Hadamard Theorem applied to a lacunary (gap) series, using Stirling-type growth of $n!$ to evaluate the limsup.</p>",
  "trap": "Applying the ratio test naively term-by-term as if the series had every power of x (it only has the perfect-square powers), which requires working with the coefficient sequence indexed by n instead of by the exponent m directly, or vice versa without care."
},

{
  "id": "p.jam.2017.60",
  "course": "ra2",
  "exam": "JAM",
  "year": 2017,
  "paper": "MA",
  "qno": 60,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Differentiating a variable-limits integral",
  "type": "NAT",
  "prompt": "<p>If $$y(x)=\\int_{\\sqrt x}^x \\frac{e^t}{t}\\,dt, \\qquad x>0,$$ then $y'(1) = $</p>",
  "answer": {
    "value": 1.3591,
    "tol": 0.02,
    "dp": 2
  },
  "solution": "<p>Write $y(x)=\\int_1^x\\frac{e^t}t dt-\\int_1^{\\sqrt x}\\frac{e^t}t dt$. By the Fundamental Theorem of Calculus (second form) and the Chain Rule, $$y'(x)=\\frac{e^x}{x}-\\frac{e^{\\sqrt x}}{\\sqrt x}\\cdot\\frac{1}{2\\sqrt x}=\\frac{e^x}{x}-\\frac{e^{\\sqrt x}}{2x}.$$</p><p>At $x=1$: $$y'(1)=e-\\frac{e}{2}=\\frac{e}{2}\\approx1.359.$$</p>",
  "tested": "<p>Differentiating an integral with both limits depending on x — split into two variable-upper-limit integrals and apply the Fundamental Theorem of Calculus with the Chain Rule to each.</p>",
  "trap": "Differentiating only the upper limit and forgetting the lower limit √x also depends on x (and needs its own chain-rule factor and a sign flip)."
},

{
  "id": "p.jam.2016.03",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 3,
  "marks": 1,
  "neg": -0.33,
  "sec": "7.3",
  "tests": [
    "c.7.3.8"
  ],
  "title": "Substitution symmetry in a definite integral",
  "type": "MCQ",
  "prompt": "<p>Let $f:[-1,1]\\to\\mathbb{R}$ be a continuous function. Then the integral</p><p>$$\\int_0^{\\pi} x\\,f(\\sin x)\\,dx$$</p><p>is equivalent to</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac{\\pi}{2}\\displaystyle\\int_0^{\\pi} f(\\sin x)\\,dx$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{\\pi}{2}\\displaystyle\\int_0^{\\pi} f(\\cos x)\\,dx$"
    },
    {
      "k": "C",
      "t": "$\\pi\\displaystyle\\int_0^{\\pi} f(\\cos x)\\,dx$"
    },
    {
      "k": "D",
      "t": "$\\pi\\displaystyle\\int_0^{\\pi} f(\\sin x)\\,dx$"
    }
  ],
  "answer": "A",
  "solution": "<p>Let $I=\\displaystyle\\int_0^\\pi x f(\\sin x)\\,dx$. Substitute $x=\\pi-u$, so $dx=-du$; as $x$ runs from $0$ to $\\pi$, $u$ runs from $\\pi$ to $0$, and $\\sin(\\pi-u)=\\sin u$. Then</p><p>$$I=\\int_{\\pi}^{0}(\\pi-u)f(\\sin u)(-du)=\\int_0^\\pi(\\pi-u)f(\\sin u)\\,du=\\pi\\int_0^\\pi f(\\sin u)\\,du-I.$$</p><p>So $2I=\\pi\\displaystyle\\int_0^\\pi f(\\sin u)\\,du$, giving $I=\\dfrac{\\pi}{2}\\displaystyle\\int_0^\\pi f(\\sin x)\\,dx$. The correct option is (A).</p>",
  "tested": "<p>Integration by substitution for the Riemann integral, exploiting the symmetry $\\sin(\\pi-x)=\\sin x$.</p>",
  "trap": "Forgetting to reverse the limits of integration when substituting x = pi - u (the resulting sign flip is exactly what allows I to be isolated algebraically); dropping it produces the wrong constant in front of the integral."
},

{
  "id": "p.jam.2016.11",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 11,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.4",
    "c.3.7.3"
  ],
  "title": "Comparing the convergence of two series",
  "type": "MCQ",
  "prompt": "<p>Let $S$ be the series</p><p>$$S=\\sum_{k=1}^{\\infty}\\frac{1}{(2k-1)\\,2^{(2k-1)}}$$</p><p>and $T$ be the series</p><p>$$T=\\sum_{k=2}^{\\infty}\\left(\\frac{3k-4}{3k+2}\\right)^{\\frac{k+1}{3}}$$</p><p>of real numbers. Then which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "Both the series $S$ and $T$ are convergent"
    },
    {
      "k": "B",
      "t": "$S$ is convergent and $T$ is divergent"
    },
    {
      "k": "C",
      "t": "$S$ is divergent and $T$ is convergent"
    },
    {
      "k": "D",
      "t": "Both the series $S$ and $T$ are divergent"
    }
  ],
  "answer": "B",
  "solution": "<p><b>Series $S$:</b> with $a_k=\\dfrac{1}{(2k-1)2^{2k-1}}$,</p><p>$$\\frac{a_{k+1}}{a_k}=\\frac{2k-1}{2k+1}\\cdot\\frac{1}{4}\\to\\frac{1}{4}<1,$$</p><p>so by the Ratio Test $S$ converges (absolutely).</p><p><b>Series $T$:</b> write the general term as $T_k=\\left(1-\\dfrac{6}{3k+2}\\right)^{\\frac{k+1}{3}}$. Then</p><p>$$\\ln T_k=\\frac{k+1}{3}\\ln\\!\\left(1-\\frac{6}{3k+2}\\right)\\sim\\frac{k}{3}\\cdot\\left(-\\frac{6}{3k}\\right)=-\\frac{2}{3}\\quad\\text{as }k\\to\\infty,$$</p><p>so $T_k\\to e^{-2/3}\\ne0$. Since the terms of $T$ do not tend to $0$, $T$ diverges by the $n$-th Term Test. The correct option is (B).</p>",
  "tested": "<p>The Ratio Test for absolute convergence of a series, and the $n$-th Term (divergence) Test applied to a term with a $\\left(1+\\tfrac{c}{k}\\right)^{k}$-type limit.</p>",
  "trap": "Seeing that the base of T_k tends to 1 and concluding the terms tend to 1 as well -- the exponent (k+1)/3 grows without bound at the same time, so the limit is the nontrivial constant e^(-2/3), not 1 and not 0."
},

{
  "id": "p.jam.2016.24",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 24,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.3",
  "tests": [
    "c.9.3.2"
  ],
  "title": "Sum of an alternating series by partial fractions",
  "type": "MCQ",
  "prompt": "<p>The sum of the series</p><p>$$\\sum_{n=2}^{\\infty}\\frac{(-1)^n}{n^2+n-2}$$</p><p>is</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\dfrac13\\ln2-\\dfrac{5}{18}$"
    },
    {
      "k": "B",
      "t": "$\\dfrac13\\ln2-\\dfrac56$"
    },
    {
      "k": "C",
      "t": "$\\dfrac23\\ln2-\\dfrac{5}{18}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac23\\ln2-\\dfrac56$"
    }
  ],
  "answer": "C",
  "solution": "<p>Factor $n^2+n-2=(n-1)(n+2)$, and split by partial fractions:</p><p>$$\\frac{1}{(n-1)(n+2)}=\\frac13\\left(\\frac{1}{n-1}-\\frac{1}{n+2}\\right).$$</p><p>So the sum equals $\\dfrac13(A-B)$ where</p><p>$$A=\\sum_{n=2}^{\\infty}\\frac{(-1)^n}{n-1},\\qquad B=\\sum_{n=2}^{\\infty}\\frac{(-1)^n}{n+2}.$$</p><p>Put $m=n-1$ in $A$: $(-1)^n=(-1)^{m+1}$, so $A=\\displaystyle\\sum_{m=1}^{\\infty}\\frac{(-1)^{m+1}}{m}=\\ln2$.</p><p>Put $k=n+2$ in $B$: $(-1)^n=(-1)^{k}$ (since $k-2$ and $k$ have the same parity), so $B=\\displaystyle\\sum_{k=4}^{\\infty}\\frac{(-1)^{k}}{k}$. Since $\\displaystyle\\sum_{k=1}^{\\infty}\\frac{(-1)^k}{k}=-\\ln2$,</p><p>$$B=-\\ln2-\\left(-1+\\frac12-\\frac13\\right)=-\\ln2+\\frac56.$$</p><p>Hence $A-B=\\ln2-\\left(-\\ln2+\\dfrac56\\right)=2\\ln2-\\dfrac56$, and the sum is $\\dfrac13(A-B)=\\dfrac{2}{3}\\ln2-\\dfrac{5}{18}$. The correct option is (C).</p>",
  "tested": "<p>Re-indexing shifted copies of the alternating harmonic series $\\sum(-1)^{n+1}/n=\\ln2$ after a partial-fraction decomposition.</p>",
  "trap": "Shifting the index in the second piece (k=n+2) but forgetting that (-1)^n = (-1)^(k-2) = (-1)^k only because k-2 and k share parity -- an off-by-one shift instead would silently flip this sign and change the final answer."
},

{
  "id": "p.jam.2016.25",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 25,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.3",
  "tests": [
    "c.5.3.4"
  ],
  "title": "Maximum and minimum of a sum of reciprocal functions",
  "type": "MCQ",
  "prompt": "<p>Let $f(x)=\\dfrac{1}{1+|x|}+\\dfrac{1}{1+|x-1|}$ for all $x\\in[-1,1]$. Then which one of the following is TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "Maximum value of $f(x)$ is $\\dfrac32$"
    },
    {
      "k": "B",
      "t": "Minimum value of $f(x)$ is $\\dfrac13$"
    },
    {
      "k": "C",
      "t": "Maximum of $f(x)$ occurs at $x=\\dfrac12$"
    },
    {
      "k": "D",
      "t": "Minimum of $f(x)$ occurs at $x=1$"
    }
  ],
  "answer": "A",
  "solution": "<p>Split $[-1,1]$ at the two kinks $x=0,1$.</p><p><b>On $[-1,0]$:</b> $f(x)=\\dfrac{1}{1-x}+\\dfrac{1}{2-x}$, so $f'(x)=\\dfrac{1}{(1-x)^2}+\\dfrac{1}{(2-x)^2}>0$: $f$ is strictly increasing, from $f(-1)=\\dfrac12+\\dfrac13=\\dfrac56$ up to $f(0)=1+\\dfrac12=\\dfrac32$.</p><p><b>On $[0,1]$:</b> $f(x)=\\dfrac{1}{1+x}+\\dfrac{1}{2-x}$, so $f'(x)=-\\dfrac{1}{(1+x)^2}+\\dfrac{1}{(2-x)^2}$, which vanishes when $(2-x)^2=(1+x)^2$, i.e. at $x=\\dfrac12$ (a minimum, since $f$ decreases from $f(0)=\\dfrac32$ to $f(\\tfrac12)=\\dfrac23+\\dfrac23=\\dfrac43$ and then increases back up to $f(1)=\\dfrac32$).</p><p>So on $[-1,1]$, $f$ attains its minimum $\\dfrac56$ at $x=-1$ and its maximum $\\dfrac32$ at both $x=0$ and $x=1$. Only (A) is TRUE.</p>",
  "tested": "<p>Locating the extrema of a piecewise-smooth continuous function on a closed interval by examining the sign of the derivative on each smooth piece.</p>",
  "trap": "Assuming the symmetric-looking formula peaks or dips at the midpoint x=1/2 -- that point is only a local minimum on [0,1]; the true maxima sit at the two kinks x=0 and x=1, and the true minimum sits at the left endpoint x=-1."
},

{
  "id": "p.jam.2016.30",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 30,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.1",
  "tests": [
    "c.6.1.1",
    "c.5.1.1"
  ],
  "title": "Continuity and differentiability of an oscillating function at the origin",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined as</p><p>$$f(x)=\\begin{cases}x\\left(1+x^{\\alpha}\\sin(\\ln x^2)\\right) & \\text{if } x\\ne0\\\\ 0 & \\text{if } x=0.\\end{cases}$$</p><p>Then, at $x=0$, the function $f$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "continuous and differentiable when $\\alpha=0$"
    },
    {
      "k": "B",
      "t": "continuous and differentiable when $\\alpha>0$"
    },
    {
      "k": "C",
      "t": "continuous and differentiable when $-1<\\alpha<0$"
    },
    {
      "k": "D",
      "t": "continuous and differentiable when $\\alpha<-1$"
    }
  ],
  "answer": "B",
  "solution": "<p>Write $f(x)=x+x^{1+\\alpha}\\sin(\\ln x^2)$ (reading $x^{\\alpha}$ as $|x|^{\\alpha}$ so the expression makes sense for $x<0$ too). Since $|\\sin(\\ln x^2)|\\le1$:</p><p><b>Continuity:</b> $|f(x)|\\le|x|+|x|^{1+\\alpha}$. This $\\to0$ as $x\\to0$ exactly when $1+\\alpha>0$, i.e. $\\alpha>-1$ (for $\\alpha=-1$ the second term is a bounded oscillation, $\\sin(\\ln x^2)$, that does not converge as $x\\to0$; for $\\alpha<-1$ it blows up). So $f$ is continuous at $0$ for every $\\alpha>-1$, which already includes options (A), (B) and (C).</p><p><b>Differentiability:</b></p><p>$$f'(0)=\\lim_{x\\to0}\\frac{f(x)-f(0)}{x-0}=\\lim_{x\\to0}\\left[1+|x|^{\\alpha}\\sin(\\ln x^2)\\right].$$</p><p>This limit exists iff $|x|^{\\alpha}\\sin(\\ln x^2)\\to0$. Since $\\sin(\\ln x^2)$ oscillates between $-1$ and $1$ without settling as $x\\to0$ (because $\\ln x^2\\to-\\infty$), the product tends to $0$ only when $|x|^{\\alpha}\\to0$, i.e. $\\alpha>0$. For $\\alpha=0$ the term is exactly $\\sin(\\ln x^2)$, which oscillates forever and has no limit; for $\\alpha<0$, $|x|^{\\alpha}\\to\\infty$ and the product is unbounded. So $f$ is differentiable at $0$ exactly when $\\alpha>0$. The correct option is (B).</p>",
  "tested": "<p>Differentiability at a point via the difference quotient, using boundedness (but non-convergence) of a $\\sin(\\ln x^2)$ oscillation.</p>",
  "trap": "Confusing continuity (which already holds whenever alpha>-1) with differentiability (which needs the strictly stronger alpha>0): the difference quotient reintroduces the bounded-but-non-convergent factor sin(ln x^2), and only a positive power of x can damp it to 0. Note: the literal expression x^alpha is undefined for x<0 unless read as |x|^alpha -- almost certainly why IIT later declared this question invalid (Marks To All) rather than any flaw in the alpha>0 conclusion itself."
},

{
  "id": "p.jam.2016.37",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 37,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.7",
    "c.5.3.7"
  ],
  "title": "Uniqueness of a root via strict monotonicity",
  "type": "MSQ",
  "prompt": "<p>Let $P(x)=\\left(\\dfrac{5}{13}\\right)^{x}+\\left(\\dfrac{12}{13}\\right)^{x}-1$ for all $x\\in\\mathbb{R}$. Then which of the following statement(s) is(are) TRUE?</p>",
  "options": [
    {
      "k": "A",
      "t": "The equation $P(x)=0$ has exactly one solution in $\\mathbb{R}$"
    },
    {
      "k": "B",
      "t": "$P(x)$ is strictly increasing for all $x\\in\\mathbb{R}$"
    },
    {
      "k": "C",
      "t": "The equation $P(x)=0$ has exactly two solutions in $\\mathbb{R}$"
    },
    {
      "k": "D",
      "t": "$P(x)$ is strictly decreasing for all $x\\in\\mathbb{R}$"
    }
  ],
  "answer": [
    "A",
    "D"
  ],
  "solution": "<p>Since $0<\\dfrac{5}{13}<1$ and $0<\\dfrac{12}{13}<1$, both $\\left(\\dfrac{5}{13}\\right)^x$ and $\\left(\\dfrac{12}{13}\\right)^x$ are strictly decreasing functions of $x$ (their derivatives, $a^x\\ln a$ with $\\ln a<0$, are negative everywhere). So $P$, being a sum of two strictly decreasing functions, is strictly decreasing on $\\mathbb{R}$: (D) is TRUE and (B) is FALSE.</p><p>Because $5^2+12^2=13^2$, at $x=2$: $P(2)=\\left(\\dfrac{5}{13}\\right)^2+\\left(\\dfrac{12}{13}\\right)^2-1=\\dfrac{25+144}{169}-1=0$. Since $P$ is strictly decreasing, it is injective, so $x=2$ is its only zero: (A) is TRUE and (C) is FALSE.</p>",
  "tested": "<p>Strict monotonicity of a sum of decreasing exponential functions used to guarantee uniqueness of a root, combined with existence via direct evaluation.</p>",
  "trap": "Trying to solve P(x)=0 algebraically instead of recognizing the 5-12-13 Pythagorean triple, which makes x=2 an immediate solution; then forgetting that strict monotonicity (not just the Intermediate Value Theorem) is what rules out any second solution."
},

{
  "id": "p.jam.2016.46",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 46,
  "marks": 1,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.1"
  ],
  "title": "Taylor's theorem with Lagrange remainder",
  "type": "NAT",
  "prompt": "<p>If $f:(-1,\\infty)\\to\\mathbb{R}$ defined by $f(x)=\\dfrac{x}{1+x}$ is expressed as</p><p>$$f(x)=\\frac23+\\frac19(x-2)+\\frac{c(x-2)^2}{(1+\\xi)^3},$$</p><p>where $\\xi$ lies between $2$ and $x$, then the value of $c$ is ____________</p>",
  "answer": {
    "value": -1,
    "tol": 0,
    "dp": 1
  },
  "solution": "<p>Write $f(x)=\\dfrac{x}{1+x}=1-\\dfrac{1}{1+x}$. Then $f'(x)=\\dfrac{1}{(1+x)^2}$ and $f''(x)=-\\dfrac{2}{(1+x)^3}$.</p><p>Check: $f(2)=\\dfrac23$ and $f'(2)=\\dfrac19$, matching the given constant and linear terms -- so the given expansion is the first-order Taylor expansion of $f$ about $x=2$ with the Lagrange remainder $\\dfrac{f''(\\xi)}{2!}(x-2)^2$.</p><p>So $\\dfrac{c}{(1+\\xi)^3}=\\dfrac{f''(\\xi)}{2!}=\\dfrac{-2/(1+\\xi)^3}{2}=\\dfrac{-1}{(1+\\xi)^3}$, giving $c=-1$.</p>",
  "tested": "<p>Taylor's Theorem with the Lagrange form of the remainder, matched term-by-term against a given expansion.</p>",
  "trap": "Forgetting the 1/2! factor when matching the given remainder to f''(xi)(x-2)^2 -- omitting it would produce c=-2 instead of the correct c=-1."
},

{
  "id": "p.jam.2016.48",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 48,
  "marks": 1,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence of a power series in $(x+2)^2$",
  "type": "NAT",
  "prompt": "<p>The radius of convergence of the power series</p><p>$$\\sum_{n=1}^{\\infty}\\frac{(-4)^n}{n(n+1)}(x+2)^{2n}$$</p><p>is ____________</p>",
  "answer": {
    "value": 0.5,
    "tol": 0,
    "dp": 1
  },
  "solution": "<p>Let $y=(x+2)^2$, so the series becomes $\\displaystyle\\sum_{n=1}^\\infty\\frac{(-4)^n}{n(n+1)}y^n$. With $a_n=\\dfrac{(-4)^n}{n(n+1)}$,</p><p>$$\\left|\\frac{a_{n+1}}{a_n}\\right|=4\\cdot\\frac{n(n+1)}{(n+1)(n+2)}=\\frac{4n}{n+2}\\to4.$$</p><p>By the Ratio Test, the series in $y$ converges when $|y|<\\dfrac14$, i.e. $(x+2)^2<\\dfrac14$, i.e. $|x+2|<\\dfrac12$. So the radius of convergence (in $x$) is $\\dfrac12$.</p>",
  "tested": "<p>The Ratio Test / Cauchy–Hadamard approach to radius of convergence, applied after substituting for the even power $(x+2)^2$.</p>",
  "trap": "Stopping after finding the radius 1/4 in the auxiliary variable y=(x+2)^2 and reporting that as the answer -- it is the radius for y, not for x; converting back via |x+2|<1/2 halves it."
},

{
  "id": "p.jam.2016.49",
  "course": "ra2",
  "exam": "JAM",
  "year": 2016,
  "paper": "MA",
  "qno": 49,
  "marks": 1,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.5"
  ],
  "title": "Recovering f from an integral equation via the Fundamental Theorem of Calculus",
  "type": "NAT",
  "prompt": "<p>Let $f:(0,\\infty)\\to\\mathbb{R}$ be a continuous function such that</p><p>$$\\int_0^x f(t)\\,dt=-2+\\frac{x^2}{2}+4x\\sin2x+2\\cos2x.$$</p><p>Then the value of $\\dfrac{1}{\\pi}f\\!\\left(\\dfrac{\\pi}{4}\\right)$ is ____________</p>",
  "answer": {
    "value": 0.25,
    "tol": 0,
    "dp": 2
  },
  "solution": "<p>By the Fundamental Theorem of Calculus, differentiating both sides with respect to $x$ gives $f(x)$ directly:</p><p>$$f(x)=\\frac{d}{dx}\\left[-2+\\frac{x^2}{2}+4x\\sin2x+2\\cos2x\\right]=x+4\\sin2x+8x\\cos2x-4\\sin2x=x(1+8\\cos2x).$$</p><p>At $x=\\dfrac{\\pi}{4}$: $\\cos\\!\\left(2\\cdot\\dfrac{\\pi}{4}\\right)=\\cos\\dfrac{\\pi}{2}=0$, so $f\\!\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{\\pi}{4}(1+0)=\\dfrac{\\pi}{4}$. Hence $\\dfrac{1}{\\pi}f\\!\\left(\\dfrac{\\pi}{4}\\right)=\\dfrac{1}{\\pi}\\cdot\\dfrac{\\pi}{4}=\\dfrac14=0.25$.</p>",
  "tested": "<p>The second form of the Fundamental Theorem of Calculus: differentiating $\\int_0^x f(t)\\,dt$ recovers $f(x)$ directly.</p>",
  "trap": "Trying to solve for f by guessing a closed form that integrates to the right-hand side, instead of simply differentiating both sides -- a direct one-line application of the Fundamental Theorem of Calculus."
},

{
  "id": "p.jam.2015.07",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 7,
  "marks": 1,
  "neg": -0.33,
  "sec": "6.2",
  "tests": [
    "c.6.2.4"
  ],
  "title": "Growth forced by a bounded-below derivative",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a differentiable function with $f(0)=0$. If for all $x\\in\\mathbb{R}$, $1 < f'(x) < 2$, then which one of the following statements is true on $(0,\\infty)$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$f$ is unbounded"
    },
    {
      "k": "B",
      "t": "$f$ is increasing and bounded"
    },
    {
      "k": "C",
      "t": "$f$ has at least one zero"
    },
    {
      "k": "D",
      "t": "$f$ is periodic"
    }
  ],
  "answer": "A",
  "solution": "<p>Fix $x>0$. By the Mean Value Theorem applied to $f$ on $[0,x]$, there is $c\\in(0,x)$ with</p>\n$$f(x) - f(0) = f'(c)\\,x.$$\n<p>Since $f(0)=0$ and $f'(c) > 1$, this gives $f(x) > x$ for every $x>0$. As $x\\to\\infty$, $f(x) > x \\to \\infty$, so $f$ is unbounded on $(0,\\infty)$ — statement (A).</p>\n<p>This also rules out (B) (unbounded, not bounded) and (D) (an unbounded function cannot be periodic unless constant). For (C): since $f'(x) > 1 > 0$ everywhere, $f$ is strictly increasing, and $f(x) > x > 0$ for $x>0$, so $f$ has no zero on $(0,\\infty)$.</p>",
  "tested": "The Mean Value Theorem used to convert a pointwise derivative bound into a global growth estimate.",
  "trap": "Thinking that a bounded derivative (f'(x) < 2) must force a bounded function; only the derivative is bounded, and the *lower* bound f'(x) > 1 is what actually forces f to grow without bound."
},

{
  "id": "p.jam.2015.17",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 17,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.3",
  "tests": [
    "c.6.3.3",
    "c.7.3.5"
  ],
  "title": "L'Hospital's Rule on an integral with variable limits",
  "type": "MCQ",
  "prompt": "<p>The limit</p>\n$$\\lim_{x\\to 0^+} \\frac{1}{\\sin^2 x}\\int_{x/2}^{x} \\sin^{-1} t \\, dt$$\n<p>is equal to</p>",
  "options": [
    {
      "k": "A",
      "t": "$0$"
    },
    {
      "k": "B",
      "t": "$\\dfrac{1}{8}$"
    },
    {
      "k": "C",
      "t": "$\\dfrac{1}{4}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{3}{8}$"
    }
  ],
  "answer": "D",
  "solution": "<p>Let $F(x) = \\int_{x/2}^x \\sin^{-1}t\\,dt$. As $x\\to 0^+$, $F(x)\\to 0$ and $\\sin^2 x \\to 0$, a $\\tfrac00$ form, so L'Hospital's Rule applies.</p>\n<p>By the Fundamental Theorem of Calculus (with the chain rule on the lower limit),</p>\n$$F'(x) = \\sin^{-1}(x) - \\frac12\\sin^{-1}\\!\\left(\\frac x2\\right), \\qquad \\frac{d}{dx}\\sin^2 x = \\sin 2x.$$\n<p>So the limit equals</p>\n$$\\lim_{x\\to0^+} \\frac{\\sin^{-1}x - \\tfrac12\\sin^{-1}(x/2)}{\\sin 2x}.$$\n<p>Using $\\sin^{-1}u \\sim u$ and $\\sin 2x \\sim 2x$ as the argument $\\to 0$, the numerator behaves like $x - \\tfrac12\\cdot\\tfrac x2 = \\tfrac{3x}{4}$ and the denominator like $2x$, giving</p>\n$$\\lim_{x\\to0^+}\\frac{3x/4}{2x} = \\frac38.$$",
  "tested": "Differentiating a variable-limits integral (FTC + chain rule) and then applying L'Hospital's Rule / small-argument approximations.",
  "trap": "Forgetting the factor of 1/2 from the chain rule when differentiating the lower limit x/2, which silently changes 3/4 into 1 in the numerator and flips the answer to 1/4."
},

{
  "id": "p.jam.2015.21",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 21,
  "marks": 2,
  "neg": -0.66,
  "sec": "5.3",
  "tests": [
    "c.5.3.2"
  ],
  "title": "The image of [0,1] under a continuous function is bounded",
  "type": "MCQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a strictly increasing continuous function. If $\\{a_n\\}$ is a sequence in $[0,1]$, then the sequence $\\{f(a_n)\\}$ is</p>",
  "options": [
    {
      "k": "A",
      "t": "increasing"
    },
    {
      "k": "B",
      "t": "bounded"
    },
    {
      "k": "C",
      "t": "convergent"
    },
    {
      "k": "D",
      "t": "not necessarily bounded"
    }
  ],
  "answer": "B",
  "solution": "<p>$f$ is continuous on the closed bounded interval $[0,1]$, so by the Boundedness Theorem $f$ is bounded on $[0,1]$; in fact, since $f$ is increasing, $f([0,1])\\subseteq[f(0),f(1)]$. Since each $a_n\\in[0,1]$, every term $f(a_n)$ lies in the bounded set $[f(0),f(1)]$, so $\\{f(a_n)\\}$ is bounded regardless of how $\\{a_n\\}$ behaves.</p>\n<p>The sequence $\\{a_n\\}$ itself need not be monotonic or convergent (e.g. $a_n$ could alternate between $0$ and $1$), so $\\{f(a_n)\\}$ need not be increasing or convergent — this rules out (A) and (C). And (D) is directly false by the boundedness argument above.</p>",
  "tested": "The Boundedness Theorem: a continuous function on a closed bounded interval is bounded.",
  "trap": "Assuming a strictly increasing f must \"improve\" the behaviour of the sequence into something monotone or convergent — the only property guaranteed by compactness of [0,1] is boundedness."
},

{
  "id": "p.jam.2015.22",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 22,
  "marks": 2,
  "neg": -0.66,
  "sec": "9.2",
  "tests": [
    "c.9.2.4"
  ],
  "title": "Ratio test on a factorial-over-power series",
  "type": "MCQ",
  "prompt": "<p>Which one of the following statements is true for the series $\\displaystyle\\sum_{n=1}^{\\infty}(-1)^n \\frac{(2n)!}{n^{2n}}$?</p>",
  "options": [
    {
      "k": "A",
      "t": "The series converges conditionally but not absolutely"
    },
    {
      "k": "B",
      "t": "The series converges absolutely"
    },
    {
      "k": "C",
      "t": "The sequence of partial sums of the series is bounded but not convergent"
    },
    {
      "k": "D",
      "t": "The sequence of partial sums of the series is unbounded"
    }
  ],
  "answer": "B",
  "solution": "<p>Let $a_n = \\dfrac{(2n)!}{n^{2n}} > 0$ and apply the Ratio Test:</p>\n$$\\frac{a_{n+1}}{a_n} = \\frac{(2n+2)!}{(n+1)^{2n+2}}\\cdot\\frac{n^{2n}}{(2n)!} = (2n+1)(2n+2)\\cdot\\frac{n^{2n}}{(n+1)^{2n+2}} = \\frac{(2n+1)(2n+2)}{(n+1)^2}\\cdot\\left(\\frac{n}{n+1}\\right)^{2n}.$$\n<p>As $n\\to\\infty$, $\\dfrac{(2n+1)(2n+2)}{(n+1)^2}\\to 4$ and $\\left(\\dfrac{n}{n+1}\\right)^{2n} = \\left(1+\\dfrac1n\\right)^{-2n}\\to e^{-2}$. So</p>\n$$\\lim_{n\\to\\infty}\\frac{a_{n+1}}{a_n} = \\frac{4}{e^2} \\approx 0.541 < 1.$$\n<p>By the Ratio Test, $\\sum a_n$ converges, i.e. $\\sum(-1)^n a_n$ converges absolutely.</p>",
  "tested": "The Ratio (D'Alembert) Test for absolute convergence, requiring the standard limit $(1+1/n)^n \\to e$.",
  "trap": "Stopping after noticing $(2n)!$ grows very fast and wrongly guessing divergence, without noticing $n^{2n}$ in the denominator grows even faster and actually forces the ratio below 1."
},

{
  "id": "p.jam.2015.27",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 27,
  "marks": 2,
  "neg": -0.66,
  "sec": "6.4",
  "tests": [
    "c.6.4.1",
    "c.6.2.8"
  ],
  "title": "Local extremum of $x^n\\sin x$ at the origin",
  "type": "MCQ",
  "prompt": "<p>For $n \\ge 2$, let $f_n:\\mathbb{R}\\to\\mathbb{R}$ be given by $f_n(x) = x^n \\sin x$. Then at $x=0$, $f_n$ has a</p>",
  "options": [
    {
      "k": "A",
      "t": "local maximum if $n$ is even"
    },
    {
      "k": "B",
      "t": "local maximum if $n$ is odd"
    },
    {
      "k": "C",
      "t": "local minimum if $n$ is even"
    },
    {
      "k": "D",
      "t": "local minimum if $n$ is odd"
    }
  ],
  "answer": "D",
  "solution": "<p>Near $x=0$, write $\\sin x = x\\,g(x)$ where $g(x) = \\dfrac{\\sin x}{x}\\to 1 > 0$ as $x\\to 0$ (and $g$ stays positive in a neighbourhood of $0$). Then</p>\n$$f_n(x) = x^n\\cdot x\\,g(x) = x^{n+1}g(x),$$\n<p>so, near $0$, the sign of $f_n(x)$ matches the sign of $x^{n+1}$ (since $g(x)>0$ there).</p>\n<p>If $n$ is odd, $n+1$ is even, so $x^{n+1}\\ge 0$ for all $x$ near $0$, with equality only at $x=0$. Hence $f_n(x) \\ge f_n(0) = 0$ near $0$, giving a local minimum at $x=0$ — statement (D).</p>\n<p>(If $n$ is even, $n+1$ is odd, so $x^{n+1}$ changes sign across $0$ and $f_n$ has neither a local max nor a local min there — which is why (A) and (C) are false.)</p>",
  "tested": "Determining a local extremum from the parity of the first nonvanishing term in the local expansion of f, rather than from the sign of f'.",
  "trap": "Applying the first-derivative test literally: $f_n'(0)=0$ for every $n\\ge2$, which gives no information by itself. What actually decides min/max/neither is the parity of the exponent of the first nonzero term (here $x^{n+1}$), not the vanishing derivative."
},

{
  "id": "p.jam.2015.31",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 31,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.1"
  ],
  "title": "Locating where a variable-limit integral equals 1",
  "type": "MSQ",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be a function defined by $f(x) = \\displaystyle\\int_{-5}^{x}(t-1)^3\\,dt$.</p>\n<p>In which of the following interval(s) does $f$ take the value $1$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$[-6,0]$"
    },
    {
      "k": "B",
      "t": "$[-2,4]$"
    },
    {
      "k": "C",
      "t": "$[2,8]$"
    },
    {
      "k": "D",
      "t": "$[6,12]$"
    }
  ],
  "answer": [
    "A",
    "C",
    "D"
  ],
  "solution": "<p>By the Fundamental Theorem of Calculus,</p>\n$$f(x) = \\left[\\frac{(t-1)^4}{4}\\right]_{-5}^{x} = \\frac{(x-1)^4}{4} - \\frac{(-6)^4}{4} = \\frac{(x-1)^4}{4} - 324.$$\n<p>Setting $f(x)=1$: $(x-1)^4 = 1300$, so $x - 1 = \\pm\\sqrt[4]{1300} \\approx \\pm 6.005$, giving $x \\approx -5.005$ or $x \\approx 7.005$.</p>\n<p>These are the only two real solutions, since $f'(x) = (x-1)^3 < 0$ for $x<1$ and $>0$ for $x>1$, so $f$ decreases from $f(-5)=0$ to a minimum $f(1)=-324$ and then increases to $+\\infty$; the value $1$ is crossed exactly once on the decreasing part (at $x\\approx-5.005$) and once on the increasing part (at $x\\approx7.005$).</p>\n<p>Checking each interval: $[-6,0]$ contains $-5.005$ (A true); $[-2,4]$ contains neither root (B false); $[2,8]$ contains $7.005$ (C true); $[6,12]$ contains $7.005$ (D true).</p>",
  "tested": "Evaluating a Riemann integral with a variable upper limit via the Fundamental Theorem of Calculus, then locating roots of the resulting function.",
  "trap": "Forgetting the constant $-324$ coming from the fixed lower limit $t=-5$; solving the naive equation $(x-1)^4/4 = 1$ instead would misplace both roots and give the wrong intervals.",
  "provenance": "JAM 2015 MA, Section B question 1. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.37",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 37,
  "marks": 2,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.4",
    "c.6.4.1"
  ],
  "title": "Proving calculus inequalities via monotonicity and Taylor remainder",
  "type": "MSQ",
  "prompt": "<p>Which of the following statements is (are) true on the interval $\\left(0,\\dfrac\\pi2\\right)$?</p>",
  "options": [
    {
      "k": "A",
      "t": "$\\cos x < \\cos(\\sin x)$"
    },
    {
      "k": "B",
      "t": "$\\tan x < x$"
    },
    {
      "k": "C",
      "t": "$\\sqrt{1+x} < 1 + \\dfrac x2 - \\dfrac{x^2}{8}$"
    },
    {
      "k": "D",
      "t": "$\\dfrac{1-x^2}{2} < \\ln(2+x)$"
    }
  ],
  "answer": [
    "A",
    "D"
  ],
  "solution": "<p><b>(A)</b> On $(0,\\pi/2)$, $0 < \\sin x < x$ (a standard inequality). Since $\\cos$ is strictly decreasing on $(0,\\pi)$, $\\sin x < x$ gives $\\cos(\\sin x) > \\cos x$. TRUE.</p>\n<p><b>(B)</b> Let $h(x)=\\tan x - x$. Then $h(0)=0$ and $h'(x)=\\sec^2x - 1 > 0$ for $x\\in(0,\\pi/2)$, so $h$ is strictly increasing there, giving $h(x) > 0$, i.e. $\\tan x > x$. The stated inequality $\\tan x < x$ is FALSE.</p>\n<p><b>(C)</b> By Taylor's theorem with the Lagrange remainder, for some $c\\in(0,x)$,</p>\n$$\\sqrt{1+x} = 1 + \\frac x2 - \\frac{x^2}{8} + \\frac{3}{48}(1+c)^{-5/2}x^3,$$\n<p>and the remainder term is positive for $x>0$. So $\\sqrt{1+x} > 1+\\tfrac x2-\\tfrac{x^2}8$, the reverse of what is claimed. (Numerically at $x=1$: $\\sqrt2\\approx1.414 > 1.375 = 1+0.5-0.125$.) FALSE.</p>\n<p><b>(D)</b> Let $h(x) = \\ln(2+x) - \\dfrac{1-x^2}{2}$. Then $h(0) = \\ln 2 - \\tfrac12 \\approx 0.193 > 0$, and $h'(x) = \\dfrac{1}{2+x} + x > 0$ for $x>0$, so $h$ is increasing on $(0,\\pi/2)$ starting from a positive value; hence $h(x) > 0$ throughout. TRUE.</p>",
  "tested": "Proving standard calculus inequalities using monotonicity (derivative sign) and Taylor's theorem with the Lagrange remainder, rather than plugging in numbers.",
  "trap": "Trusting the truncated Taylor polynomial $1+x/2-x^2/8$ as an upper bound for $\\sqrt{1+x}$ without checking the sign of the next (cubic) remainder term — here it is actually a lower bound.",
  "provenance": "JAM 2015 MA, Section B question 7. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.46",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 46,
  "marks": 1,
  "neg": 0,
  "sec": "9.4",
  "tests": [
    "c.9.4.9"
  ],
  "title": "Radius of convergence of a power series in $x^2$",
  "type": "NAT",
  "prompt": "<p>If the power series</p>\n$$\\sum_{n=0}^{\\infty} \\frac{n!}{n^n} x^{2n}$$\n<p>converges for $|x| < c$ and diverges for $|x| > c$, then the value of $c$, correct upto three decimal places, is ______________</p>",
  "answer": {
    "value": 1.649,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "<p>Write the series as $\\sum_{n} a_n u^n$ with $u = x^2$ and $a_n = \\dfrac{n!}{n^n}$. By the Ratio Test,</p>\n$$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}}\\cdot\\frac{n^n}{n!} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n = \\left(1+\\frac1n\\right)^{-n} \\to \\frac1e.$$\n<p>So the series in $u$ converges for $|u| < e$ and diverges for $|u|>e$, i.e. it converges in $x$ for $x^2 < e$, i.e. $|x| < \\sqrt e$.</p>\n<p>Hence $c = \\sqrt{e} \\approx 1.6487$, i.e. $1.649$ to three decimal places.</p>",
  "tested": "Radius of convergence via the Ratio Test / Cauchy–Hadamard theorem, applied to a series that only has even powers of $x$.",
  "trap": "Applying the ratio test directly to consecutive powers of x while treating the series as having every power of x present — since only even powers appear, the radius in x is the square root of the radius found for u = x^2, not the same number.",
  "provenance": "JAM 2015 MA, Section C question 6. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.49",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 49,
  "marks": 1,
  "neg": 0,
  "sec": "5.1",
  "tests": [
    "c.5.1.3",
    "c.5.1.6g"
  ],
  "title": "Continuity points of a rational/irrational split function",
  "type": "NAT",
  "prompt": "<p>Let $f:\\mathbb{R}\\to\\mathbb{R}$ be defined by</p>\n$$f(x) = \\begin{cases} x^6 - 1, & x\\in\\mathbb{Q} \\\\ 1 - x^6, & x\\notin\\mathbb{Q} \\end{cases}$$\n<p>The number of points at which $f$ is continuous, is ______________</p>",
  "answer": {
    "value": 2,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Both $\\mathbb{Q}$ and $\\mathbb{R}\\setminus\\mathbb{Q}$ are dense in $\\mathbb{R}$, so for $f$ to be continuous at a point $c$, sequences of rationals and of irrationals converging to $c$ must give the same limiting value. Since $x^6-1$ and $1-x^6$ are both continuous functions of $x$, this requires</p>\n$$c^6 - 1 = 1 - c^6 \\;\\Longrightarrow\\; c^6 = 1 \\;\\Longrightarrow\\; c = \\pm 1.$$\n<p>Conversely, at $c=1$ and $c=-1$ both branches equal $0$ and are continuous there, so along ANY sequence $x_n\\to c$ (mixing rationals and irrationals), $f(x_n)\\to 0 = f(c)$: $f$ genuinely is continuous at $c=\\pm1$.</p>\n<p>At every other point the two branches disagree, so $f$ is discontinuous there. Hence $f$ is continuous at exactly $2$ points.</p>",
  "tested": "A Dirichlet/Thomae-style continuity argument for a function defined differently on rationals and irrationals, using density of both sets.",
  "trap": "Only checking $x^6=1$ over the reals and reporting $x=1$ alone, forgetting that $x=-1$ also satisfies $(-1)^6=1$ and is an equally valid point of continuity.",
  "provenance": "JAM 2015 MA, Section C question 9. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.50",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 50,
  "marks": 1,
  "neg": 0,
  "sec": "6.2",
  "tests": [
    "c.6.2.7"
  ],
  "title": "Counting solutions from sign changes of the derivative",
  "type": "NAT",
  "prompt": "<p>Let $f:(0,1)\\to\\mathbb{R}$ be a continuously differentiable function such that $f'$ has finitely many zeros in $(0,1)$ and $f'$ changes sign at exactly two of these points. Then for any $y\\in\\mathbb{R}$, the maximum number of solutions to $f(x)=y$ in $(0,1)$ is ______________</p>",
  "answer": {
    "value": 3,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>The sign changes of $f'$ are exactly the points where $f$ turns from increasing to decreasing or vice versa. With exactly two sign changes, $(0,1)$ splits into exactly three maximal subintervals on each of which $f'$ keeps a constant sign, hence $f$ is strictly monotonic on each of these three pieces (by the Monotonicity Criterion for differentiable functions).</p>\n<p>Any other zeros of $f'$ (the ones where the sign does not change, like $f'$ touching $0$ momentarily) do not break monotonicity on their piece, so they do not create extra monotonic pieces.</p>\n<p>A strictly monotonic function is injective, so on each of the $3$ monotonic pieces the equation $f(x)=y$ has at most one solution. Hence $f(x)=y$ has at most $3$ solutions in $(0,1)$ in total, and this bound is attained (e.g. an up-down-up shaped $f$ with two turning points, for a $y$-value crossed by all three pieces).</p>",
  "tested": "The Monotonicity Criterion for differentiable functions, and how sign changes of f' partition the domain into monotonic pieces.",
  "trap": "Counting every zero of f' as if it could produce an extra solution — only the sign-changing (turning-point) zeros break monotonicity; a zero where f' touches 0 without changing sign (as for f(x)=x^3 at 0) does not split off a new monotonic piece.",
  "provenance": "JAM 2015 MA, Section C question 10. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.56",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 56,
  "marks": 2,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.1"
  ],
  "title": "A Taylor coefficient via product-to-sum simplification",
  "type": "NAT",
  "prompt": "<p>The coefficient of $\\left(x-\\dfrac\\pi4\\right)^3$ in the Taylor series expansion of the function</p>\n$$f(x) = 3\\sin x \\cos\\!\\left(x+\\frac\\pi4\\right), \\qquad x\\in\\mathbb{R}$$\n<p>about the point $\\dfrac\\pi4$, correct upto three decimal places, is ______________</p>",
  "answer": {
    "value": 1.414,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "<p>Let $t = x - \\dfrac\\pi4$. Then</p>\n$$f = 3\\sin\\!\\left(\\frac\\pi4+t\\right)\\cos\\!\\left(\\frac\\pi2+t\\right) = -3\\sin\\!\\left(\\frac\\pi4+t\\right)\\sin t,$$\n<p>using $\\cos(\\tfrac\\pi2+t) = -\\sin t$. Expanding $\\sin(\\tfrac\\pi4+t) = \\tfrac{\\sqrt2}{2}(\\cos t + \\sin t)$,</p>\n$$f = -\\frac{3\\sqrt2}{2}(\\cos t+\\sin t)\\sin t = -\\frac{3\\sqrt2}{2}\\left(\\sin t\\cos t + \\sin^2t\\right) = -\\frac{3\\sqrt2}{4}\\Big[1+\\sin 2t-\\cos 2t\\Big],$$\n<p>using $\\sin t\\cos t = \\tfrac12\\sin2t$ and $\\sin^2t = \\tfrac12(1-\\cos2t)$.</p>\n<p>Now $\\sin 2t = 2t - \\dfrac{(2t)^3}{6}+\\cdots = 2t - \\dfrac43 t^3 + \\cdots$ and $\\cos 2t = 1 - 2t^2 + \\cdots$ (no odd powers), so</p>\n$$1+\\sin2t-\\cos2t = 2t + 2t^2 - \\frac43 t^3 + \\cdots.$$\n<p>Hence the $t^3$-coefficient of $f$ is</p>\n$$-\\frac{3\\sqrt2}{4}\\cdot\\left(-\\frac43\\right) = \\sqrt2 \\approx 1.414.$$",
  "tested": "Building a Taylor series through algebraic (product-to-sum) simplification instead of repeated differentiation.",
  "trap": "Differentiating $f$ three times directly using the product and chain rules (very error-prone here) instead of first simplifying $3\\sin x\\cos(x+\\pi/4)$ algebraically about the expansion point.",
  "provenance": "JAM 2015 MA, Section C question 16. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.57",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 57,
  "marks": 2,
  "neg": 0,
  "sec": "6.4",
  "tests": [
    "c.6.4.2"
  ],
  "title": "Term-by-term integration of a Maclaurin series",
  "type": "NAT",
  "prompt": "<p>If $\\displaystyle\\int_0^x \\left(e^{-t^2}+\\cos t\\right)dt$ has the power series expansion $\\displaystyle\\sum_{n=1}^{\\infty} a_n x^n$, then $a_5$, correct upto three decimal places, is equal to ______________</p>",
  "answer": {
    "value": 0.108,
    "tol": 0.002,
    "dp": 3
  },
  "solution": "<p>Using the Maclaurin series $e^{-t^2} = \\displaystyle\\sum_{k=0}^\\infty \\dfrac{(-1)^k t^{2k}}{k!}$ and $\\cos t = \\displaystyle\\sum_{k=0}^\\infty \\dfrac{(-1)^k t^{2k}}{(2k)!}$, the coefficient of $t^4$ in $e^{-t^2}+\\cos t$ is</p>\n$$\\frac{1}{2!} + \\frac{1}{4!} = \\frac12+\\frac1{24} = \\frac{13}{24}.$$\n<p>Integrating term by term from $0$ to $x$ (valid since the series converges uniformly on compact intervals), the term $\\tfrac{13}{24}t^4$ contributes $\\tfrac{13}{24}\\cdot\\tfrac{x^5}{5} = \\tfrac{13}{120}x^5$ to the integral. So</p>\n$$a_5 = \\frac{13}{120} \\approx 0.1083,$$\n<p>i.e. $0.108$ to three decimal places.</p>",
  "tested": "Term-by-term integration of a power series, combined with the Maclaurin series of $e^{-t^2}$ and $\\cos t$.",
  "trap": "Forgetting the extra factor of 1/5 that appears when integrating $t^4$ to get $x^5/5$, or computing the coefficient of $t^5$ in the integrand instead of the coefficient of $x^5$ in the integral.",
  "provenance": "JAM 2015 MA, Section C question 17. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.58",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 58,
  "marks": 2,
  "neg": 0,
  "sec": "7.3",
  "tests": [
    "c.7.3.1"
  ],
  "title": "Arc length reducing to a simple Riemann integral",
  "type": "NAT",
  "prompt": "<p>Let $\\ell$ be the length of the portion of the curve $x=x(y)$ between the lines $y=1$ and $y=3$, where $x(y)$ satisfies</p>\n$$\\frac{dx}{dy} = \\frac{\\sqrt{1+y^2+y^4}}{y}, \\qquad x(1)=0.$$\n<p>The value of $\\ell$, correct upto three decimal places, is ______________</p>",
  "answer": {
    "value": 5.099,
    "tol": 0.005,
    "dp": 3
  },
  "solution": "<p>The arc-length formula gives</p>\n$$\\ell = \\int_1^3 \\sqrt{1+\\left(\\frac{dx}{dy}\\right)^2}\\,dy = \\int_1^3 \\sqrt{1+\\frac{1+y^2+y^4}{y^2}}\\,dy = \\int_1^3 \\sqrt{\\frac{y^4+2y^2+1}{y^2}}\\,dy.$$\n<p>Since $y^4+2y^2+1 = (y^2+1)^2$, and $y>0$ on $[1,3]$,</p>\n$$\\ell = \\int_1^3 \\frac{y^2+1}{y}\\,dy = \\int_1^3\\left(y+\\frac1y\\right)dy = \\left[\\frac{y^2}{2}+\\ln y\\right]_1^3 = \\left(\\frac92+\\ln3\\right)-\\frac12 = 4+\\ln3 \\approx 5.0986.$$\n<p>So $\\ell \\approx 5.099$. (Note the condition $x(1)=0$ is never actually needed — only the derivative expression matters for arc length.)</p>",
  "tested": "Evaluating a definite integral via the Fundamental Theorem of Calculus, after recognizing a perfect square hiding under a radical.",
  "trap": "Missing that $y^4+2y^2+1$ is the perfect square $(y^2+1)^2$ and instead trying to solve the differential equation for x(y) explicitly, which is unnecessary and far harder.",
  "provenance": "JAM 2015 MA, Section C question 18. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
},

{
  "id": "p.jam.2015.59",
  "course": "ra2",
  "exam": "JAM",
  "year": 2015,
  "paper": "MA",
  "qno": 59,
  "marks": 2,
  "neg": 0,
  "sec": "6.3",
  "tests": [
    "c.6.3.3",
    "c.6.4.2"
  ],
  "title": "A cubic-order limit resolved by expanding $\\tan^{-1}x$",
  "type": "NAT",
  "prompt": "<p>The limit</p>\n$$\\lim_{x\\to 0^+} \\frac{9}{x}\\left(\\frac{1}{\\tan^{-1}x} - \\frac1x\\right)$$\n<p>is equal to ______________</p>",
  "answer": {
    "value": 3,
    "tol": 0,
    "dp": 0
  },
  "solution": "<p>Combine the fraction inside the bracket:</p>\n$$\\frac{9}{x}\\left(\\frac1{\\tan^{-1}x}-\\frac1x\\right) = \\frac{9}{x}\\cdot\\frac{x-\\tan^{-1}x}{x\\,\\tan^{-1}x} = \\frac{9(x-\\tan^{-1}x)}{x^2\\tan^{-1}x}.$$\n<p>Using $\\tan^{-1}x = x - \\dfrac{x^3}{3} + O(x^5)$, the numerator $x - \\tan^{-1}x = \\dfrac{x^3}{3} + O(x^5)$, while the denominator $x^2\\tan^{-1}x = x^2\\big(x+O(x^3)\\big) = x^3 + O(x^5)$. So</p>\n$$\\frac{9(x-\\tan^{-1}x)}{x^2\\tan^{-1}x} \\to 9\\cdot\\frac{x^3/3}{x^3} = 9\\cdot\\frac13 = 3$$\n<p>as $x\\to 0^+$.</p>",
  "tested": "Using the cubic-order Taylor expansion of $\\tan^{-1}x$ to resolve a limit whose leading (linear) terms cancel exactly.",
  "trap": "Expanding $\\tan^{-1}x \\approx x$ only to first order, which makes the numerator vanish identically and hides the true governing $x^3$ term — the cubic correction is essential here.",
  "provenance": "JAM 2015 MA, Section C question 19. The paper numbers its three sections separately; qno here is the continuous 1–60 ordinal the app needs for a unique id."
}
);

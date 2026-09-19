/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module 5 (Extension): Infinite Series (Chapter 9)
   Sections: 9.1 (Absolute Convergence), 9.2 (Tests for Absolute Convergence),
             9.3 (Tests for Nonabsolute Convergence), 9.4 (Series of Functions)
   Diagrams: c.9.1.5, c.9.2.6, c.9.3.2, c.9.4.6, c.9.4.9
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.9.1.1', bartle: '9.1.1', sec: '9.1', kind: 'definition', tier: 'ext',
    title: 'Absolute vs Conditional Convergence',
    oneLine: 'Absolute convergence means the series converges even if you strip away all minus signs.',
    statement: `Let $\\sum_{n=1}^\\infty x_n$ be an infinite series.
      <p>(a) The series <b>converges absolutely</b> if the series of absolute values $\\sum_{n=1}^\\infty |x_n|$ converges.</p>
      <p>(b) If $\\sum_{n=1}^\\infty x_n$ converges, but $\\sum_{n=1}^\\infty |x_n|$ diverges, the series is said to <b>converge conditionally</b> (non-absolutely).</p>
      <p><b>Absolute Convergence Theorem:</b> If $\\sum |x_n|$ converges, then $\\sum x_n$ converges. (Absolute convergence implies convergence!)</p>`,
    intuition: `<p>Think of positive and negative terms as money:</p>
      <p>• <b>Absolute convergence:</b> Even if all expenses were treated as earnings ($|x_n|$), your total transactions are still finite. The series converges purely on the sheer speed with which the numbers shrink.</p>
      <p>• <b>Conditional convergence:</b> The numbers shrink too slowly on their own (like $1/n$), but because positive and negative terms cancel each other out ($1 - 1/2 + 1/3 - 1/4 + \\cdots = \\ln 2$), the alternating tug-of-war manages to settle down. This balance is fragile: if you mess with the order of terms, the sum can change!</p>`,
    needs: ['c.3.7.1', 'c.2.2.1'],
    traps: [
      `The Alternating Harmonic Series $\\sum \\frac{(-1)^{n+1}}{n}$ is the textbook example of a CONDITIONALLY convergent series: it converges to $\\ln 2$, but its absolute series $\\sum 1/n$ diverges!`,
      `Absolute convergence guarantees you can rearrange terms in ANY order without changing the sum. Conditional convergence destroys this property (Riemann Rearrangement Theorem)!`
    ],
    proof: {
      idea: 'By the triangle inequality, $|s_m - s_n| = |\\sum_{k=n+1}^m x_k| \\le \\sum_{k=n+1}^m |x_k|$. If $\\sum |x_k|$ converges, its partial sums form a Cauchy sequence, so partial sums of $\\sum x_k$ are also Cauchy and hence converge.',
      why: 'The Cauchy Criterion for Series (3.7.2) transforms convergence into a tail bound.',
      rungs: [
        {
          why: 'Let $\\varepsilon > 0$. Since $\\sum |x_n|$ converges, the Cauchy Criterion for series implies there exists $K \\in \\mathbb{N}$ such that for all $m > n \\ge K$:',
          m: '$$\\sum_{k=n+1}^m |x_k| < \\varepsilon$$',
          meaning: 'What this really means: The tail of the absolute series can be made as tiny as we wish past index K.'
        },
        {
          why: 'By the generalized Triangle Inequality for absolute values:',
          m: '$$\\left| \\sum_{k=n+1}^m x_k \\right| \\le \\sum_{k=n+1}^m |x_k|$$',
          meaning: 'What this really means: The magnitude of a sum of numbers is always bounded above by the sum of their individual magnitudes.'
        },
        {
          why: 'Combining the two inequalities for any $m > n \\ge K$:',
          m: '$$|s_m - s_n| = \\left| \\sum_{k=n+1}^m x_k \\right| \\le \\sum_{k=n+1}^m |x_k| < \\varepsilon$$',
          meaning: 'What this really means: Any two partial sums far out in the series differ by less than epsilon.'
        },
        {
          why: 'This proves the sequence of partial sums $(s_n)$ is a Cauchy sequence in $\\mathbb{R}$.',
          m: '$$(s_n) \\text{ is Cauchy in } \\mathbb{R} \\implies \\lim_{n \\to \\infty} s_n \\text{ exists}$$',
          meaning: 'What this really means: By the completeness of the real numbers, every Cauchy sequence converges to a finite real limit.'
        }
      ],
      ends: 'Therefore $\\sum x_n$ converges. Absolute convergence implies convergence.'
    },
    cards: [
      { q: 'What is the definition of a conditionally convergent series?', a: 'A series $\\sum x_n$ that converges, but whose series of absolute values $\\sum |x_n|$ diverges.', kind: 'state' },
      { q: 'Does convergence of $\\sum |x_n|$ imply convergence of $\\sum x_n$?', a: 'Yes! Absolute convergence always implies convergence.', kind: 'recall' }
    ]
  },

  {
    id: 'c.9.1.5', bartle: '9.1.5', sec: '9.1', kind: 'theorem', tier: 'ext',
    title: 'Riemann’s Rearrangement Theorem',
    oneLine: 'A conditionally convergent series can be rearranged to sum to ANY real number you desire, or even to diverge to ±∞!',
    statement: `Let $\\sum_{n=1}^\\infty x_n$ be a <b>conditionally convergent</b> series.
      <p>For any real number $C \\in \\mathbb{R}$, there exists a <b>rearrangement</b> of the terms of the series that converges to exactly $C$.</p>
      <p>Furthermore, the terms can also be rearranged to diverge to $+\\infty$, to $-\\infty$, or to oscillate between any desired bounds!</p>`,
    intuition: `<p>In finite arithmetic, $2 + 3 = 3 + 2$. Order doesn't matter (addition is commutative). But for infinite conditionally convergent series, COMMUTATIVITY COMPLETELY BREAKS DOWN!</p>
      <p>Because the positive terms sum to $+\\infty$ and the negative terms sum to $-\\infty$:</p>
      <p>1. Want the total to equal $100$? Add positive terms until you just exceed $100$.</p>
      <p>2. Then add negative terms until you just drop below $100$.</p>
      <p>3. Repeat forever! Because the individual terms shrink to $0$, your oscillations around $100$ get tighter and tighter, locking the sum onto $100$!</p>
      <p>If the series converges ABSOLUTELY, this insanity cannot happen: every rearrangement gives the identical sum.</p>`,
    needs: ['c.9.1.1', 'c.3.7.3'],
    traps: [
      `Thinking all infinite series can be rearranged freely. ONLY absolutely convergent series are safe to rearrange! Conditionally convergent series can be manipulated to equal whatever you want.`,
      `In university exams: "Can $\\sum \\frac{(-1)^{n+1}}{n}$ be rearranged to equal $\\pi$?" YES, by Riemann's Rearrangement Theorem!`
    ],
    cards: [
      { q: 'State Riemann’s Rearrangement Theorem.', a: 'The terms of any conditionally convergent series can be rearranged to sum to any real number $C$, or to diverge to $\\pm\\infty$.', kind: 'state' },
      { q: 'What happens to the sum of an absolutely convergent series when its terms are rearranged?', a: 'The sum remains completely unchanged for any rearrangement.', kind: 'recall' }
    ]
  },

  {
    id: 'c.9.2.1', bartle: '9.2.1', sec: '9.2', kind: 'theorem', tier: 'ext',
    title: 'Comparison and Limit Comparison Tests',
    oneLine: 'If a positive series is trapped under a convergent series, it converges. If larger than a divergent series, it diverges.',
    statement: `Let $(x_n)$ and $(y_n)$ be sequences of real numbers with $0 \\le x_n \\le y_n$ for all $n \\ge K$.
      <p>(a) If $\\sum y_n$ converges, then $\\sum x_n$ <b>converges</b>.</p>
      <p>(b) If $\\sum x_n$ diverges, then $\\sum y_n$ <b>diverges</b>.</p>
      <p><b>Limit Comparison Test (LCT):</b> If $x_n > 0$ and $y_n > 0$, and $L = \\lim_{n\\to\\infty} \\frac{x_n}{y_n}$ exists with $0 < L < \\infty$, then:</p>
      <p>Either both $\\sum x_n$ and $\\sum y_n$ converge, or both diverge together.</p>`,
    intuition: `<p>In exams, testing series by definition is slow. The comparison tests let you compare your messy series against a clean standard benchmark (like $p$-series $\\sum 1/n^p$ or geometric series $\\sum r^n$).</p>
      <p>In the Limit Comparison Test, if $\\frac{x_n}{y_n} \\to L > 0$, it means for large $n$, $x_n \\approx L \\cdot y_n$. They grow at the exact same rate! So they share the exact same fate.</p>`,
    needs: ['c.3.7.1'],
    traps: [
      `If $x_n \\le y_n$ and $\\sum x_n$ converges, that tells you NOTHING about $\\sum y_n$! Being larger than a finite number doesn't stop you from being infinite.`,
      `If the ratio $\\lim \\frac{x_n}{y_n} = 0$ or $\\infty$, the test is inconclusive unless you check the direction carefully.`
    ],
    proof: {
      idea: 'Since $\\lim (x_n / y_n) = L > 0$, choosing $\\varepsilon = L/2$ traps the ratio in $(L/2, 3L/2)$. Hence $(L/2) y_n < x_n < (3L/2) y_n$. Ordinary comparison with $(3L/2) y_n$ and $(L/2) y_n$ proves both converge or both diverge.',
      why: 'Definition of sequence limit applied to the ratio isolates bounding constants.',
      rungs: [
        {
          why: 'Let $\\varepsilon = \\frac{L}{2} > 0$. Since $\\lim_{n \\to \\infty} \\frac{x_n}{y_n} = L$, there exists $K \\in \\mathbb{N}$ such that for all $n \\ge K$:',
          m: '$$\\left| \\frac{x_n}{y_n} - L \\right| < \\frac{L}{2}$$',
          meaning: 'What this really means: Past index K, the ratio x_n / y_n never strays by more than L/2 away from L.'
        },
        {
          why: 'Unwrapping the absolute value inequality gives bounds on both sides:',
          m: '$$-\\frac{L}{2} < \\frac{x_n}{y_n} - L < \\frac{L}{2} \\implies \\frac{L}{2} < \\frac{x_n}{y_n} < \\frac{3L}{2}$$',
          meaning: 'What this really means: The ratio is strictly trapped between two positive constants.'
        },
        {
          why: 'Multiply through by $y_n > 0$ for all $n \\ge K$:',
          m: '$$\\left(\\frac{L}{2}\\right) y_n < x_n < \\left(\\frac{3L}{2}\\right) y_n$$',
          meaning: 'What this really means: Each term x_n is strictly sandwiched by constant multiples of y_n.'
        },
        {
          why: 'By the Direct Comparison Test: if $\\sum y_n$ converges, then $\\sum (3L/2) y_n$ converges, which forces $\\sum x_n$ to converge.',
          m: '$$\\sum y_n < \\infty \\implies \\sum x_n \\le \\frac{3L}{2} \\sum y_n < \\infty$$',
          meaning: 'What this really means: If y_n converges, its upper multiple caps x_n, forcing x_n to converge.'
        },
        {
          why: 'Conversely, if $\\sum y_n$ diverges, then $\\sum (L/2) y_n = \\infty$, forcing $\\sum x_n = \\infty$.',
          m: '$$\\sum y_n = \\infty \\implies \\sum x_n \\ge \\frac{L}{2} \\sum y_n = \\infty$$',
          meaning: 'What this really means: If y_n diverges, its lower multiple pushes x_n to infinity as well.'
        }
      ],
      ends: 'Thus $\\sum x_n$ and $\\sum y_n$ either both converge or both diverge together.'
    },
    cards: [
      { q: 'State the Limit Comparison Test for positive series.', a: 'If $x_n, y_n > 0$ and $\\lim \\dfrac{x_n}{y_n} = L \\in (0, \\infty)$, then either both series converge or both diverge.', kind: 'state' },
      { q: 'Does $\\sum \\dfrac{1}{n^2 + 5}$ converge?', a: 'Yes, by comparison with the convergent $p$-series $\\sum 1/n^2$ since $\\dfrac{1}{n^2+5} < \\dfrac{1}{n^2}$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.9.2.4', bartle: '9.2.4', sec: '9.2', kind: 'theorem', tier: 'ext',
    title: 'The Ratio and Root Tests (D’Alembert and Cauchy)',
    oneLine: 'Ratio test compares consecutive terms; Root test takes the n-th root. Both look for an effective growth rate r < 1.',
    statement: `Let $\\sum x_n$ be a series with non-zero terms.
      <p>(a) <b>Ratio Test (D’Alembert):</b> Let $r = \\lim_{n\\to\\infty} \\left| \\frac{x_{n+1}}{x_n} \\right|$.
      <br>• If $r < 1$, the series converges absolutely.
      <br>• If $r > 1$ (or $+\\infty$), the series diverges.
      <br>• If $r = 1$, the test is <b>inconclusive</b>.</p>
      <p>(b) <b>Root Test (Cauchy):</b> Let $\\rho = \\lim_{n\\to\\infty} |x_n|^{1/n}$.
      <br>• If $\\rho < 1$, the series converges absolutely.
      <br>• If $\\rho > 1$, the series diverges.
      <br>• If $\\rho = 1$, the test is <b>inconclusive</b>.</p>`,
    intuition: `<p>Both tests compare your series to an invisible geometric series $\\sum r^n$:</p>
      <p>• If consecutive terms shrink by a factor strictly less than $1$ ($r < 1$), the terms decay exponentially, guaranteeing convergence!</p>
      <p>• <b>When to use Ratio Test:</b> Whenever factorials ($n!$) or powers ($a^n$) appear!</p>
      <p>• <b>When to use Root Test:</b> Whenever the entire term is raised to power $n$ (like $(n/(2n+1))^n$)!</p>
      <p>• <b>When both FAIL ($r = 1$):</b> For any polynomial or rational function like $\\sum 1/n$ or $\\sum 1/n^2$. Both give $r = 1$, so you MUST use the Integral or Comparison Test instead!</p>`,
    needs: ['c.9.1.1', 'c.3.7.1'],
    traps: [
      `Never conclude convergence or divergence when $r = 1$! For $\\sum 1/n$, $r = 1$ (diverges); for $\\sum 1/n^2$, $r = 1$ (converges). The test tells you zero information when $r = 1$.`,
      `The Root Test is strictly stronger than the Ratio Test: whenever the Ratio Test works, the Root Test works and gives the same limit, but the Root Test can work even when the Ratio limit oscillates.`
    ],
    proof: {
      idea: 'If $r = \\lim |x_{n+1}/x_n| < 1$, choose $c$ with $r < c < 1$. For large $n$, $|x_{n+1}| \\le c |x_n|$. By induction, $|x_n| \\le |x_K| c^{n-K}$. Direct comparison with the convergent geometric series $\\sum c^n$ yields absolute convergence.',
      why: 'Upper bounding by a strictly decaying geometric series with common ratio $c < 1$.',
      rungs: [
        {
          why: 'Assume $r = \\lim_{n\\to\\infty} \\left| \\frac{x_{n+1}}{x_n} \\right| < 1$. Choose a constant $c$ strictly between $r$ and $1$, so $r < c < 1$.',
          m: '$$r < c < 1, \\quad \\varepsilon = c - r > 0$$',
          meaning: 'What this really means: We insert a fixed geometric target c between the limit ratio r and the danger boundary 1.'
        },
        {
          why: 'By definition of limit, there exists $K \\in \\mathbb{N}$ such that for all $n \\ge K$:',
          m: '$$\\left| \\frac{x_{n+1}}{x_n} \\right| < c \\implies |x_{n+1}| < c |x_n|$$',
          meaning: 'What this really means: Past index K, every subsequent term is smaller than the previous by at least the fraction c.'
        },
        {
          why: 'Applying this inequality repeatedly by induction for all $n \\ge K$:',
          m: '$$|x_n| \\le |x_K| c^{n - K} = \\left( \\frac{|x_K|}{c^K} \\right) c^n$$',
          meaning: 'What this really means: Cascading the step-down ratio traps each term under a constant times c^n.'
        },
        {
          why: 'Since $0 < c < 1$, the geometric series $\\sum_{n=K}^\\infty c^n$ converges to $\\frac{c^K}{1 - c} < \\infty$.',
          m: '$$\\sum_{n=K}^\\infty c^n = \\frac{c^K}{1 - c} < \\infty$$',
          meaning: 'What this really means: Standard geometric series with ratio less than 1 always sum to a finite number.'
        },
        {
          why: 'By the Direct Comparison Test, the series $\\sum_{n=K}^\\infty |x_n|$ converges, so $\\sum_{n=1}^\\infty x_n$ converges absolutely.',
          m: '$$\\sum_{n=1}^\\infty |x_n| \\le \\sum_{n=1}^{K-1} |x_n| + \\frac{|x_K|}{c^K} \\sum_{n=K}^\\infty c^n < \\infty$$',
          meaning: 'What this really means: Finite starting terms plus a finite geometric tail equals total absolute convergence.'
        }
      ],
      ends: 'Therefore $\\sum x_n$ converges absolutely whenever $r < 1$.'
    },
    cards: [
      { q: 'When is the Ratio Test inconclusive?', a: 'When $\\lim \\left|\\dfrac{x_{n+1}}{x_n}\\right| = 1$.', kind: 'recall' },
      { q: 'Test $\\sum_{n=1}^\\infty \\dfrac{2^n}{n!}$ for convergence.', a: 'Ratio test: $\\dfrac{x_{n+1}}{x_n} = \\dfrac{2^{n+1}}{(n+1)!} \\cdot \\dfrac{n!}{2^n} = \\dfrac{2}{n+1} \\to 0 < 1$. Converges absolutely!', kind: 'apply' }
    ]
  },

  {
    id: 'c.9.2.6', bartle: '9.2.6', sec: '9.2', kind: 'theorem', tier: 'ext',
    title: 'The Integral Test and the p-Series',
    oneLine: 'A positive decreasing series converges if and only if the improper integral under its curve is finite.',
    statement: `Let $f: [1, \\infty) \\to \\mathbb{R}$ be a continuous, positive, and <b>decreasing</b> function such that $f(n) = x_n$ for all $n \\in \\mathbb{N}$.
      <p>Then the series $\\sum_{n=1}^\\infty x_n$ converges if and only if the improper integral converges:
      $$\\sum_{n=1}^\\infty x_n < \\infty \\iff \\int_1^\\infty f(t) \\, dt < \\infty$$</p>
      <p><b>The $p$-Series Theorem:</b> The series $\\sum_{n=1}^\\infty \\frac{1}{n^p}$ converges if $p > 1$, and diverges if $p \\le 1$.</p>`,
    intuition: `<p>Draw the graph of $f(t)$. Place rectangles of width $1$ under the curve (lower sum) and over the curve (upper sum):</p>
      $$\\int_1^{n+1} f(t)\\,dt \\le \\sum_{k=1}^n x_k \\le x_1 + \\int_1^n f(t)\\,dt$$
      <p>The sum and the improper integral sandwich each other tightly! Therefore, the series and the integral must either stand together or fall together.</p>
      <p>This immediately solves the benchmark $p$-series: $\\int_1^\\infty \\frac{1}{t^p}\\,dt = \\left[ \\frac{t^{1-p}}{1-p} \\right]_1^\\infty$, which is finite exactly when $p > 1$!</p>`,
    needs: ['c.7.1.1', 'c.3.7.1'],
    traps: [
      `The function $f(t)$ MUST be DECREASING! If $f$ is not decreasing, the rectangle bounds fail.`,
      `The sum of the series does NOT equal the value of the integral! The test tells you WHETHER it converges, not what it converges to.`
    ],
    proof: {
      idea: 'Because $f$ is decreasing on $[k, k+1]$, $f(k+1) \\le f(t) \\le f(k)$. Integrating over $[k, k+1]$ gives $x_{k+1} \\le \\int_k^{k+1} f(t)dt \\le x_k$. Summing from $k=1$ to $n$ traps the partial sums between integrals.',
      why: 'Decreasing monotonicity sandwiches the integral between inscribed and circumscribed rectangles.',
      rungs: [
        {
          why: 'Since $f$ is decreasing on $[k, k+1]$ and $f(k) = x_k$, we have for all $t \\in [k, k+1]$:',
          m: '$$x_{k+1} = f(k+1) \\le f(t) \\le f(k) = x_k$$',
          meaning: 'What this really means: Because the function steadily drops, its values on the unit step are trapped between its endpoints.'
        },
        {
          why: 'Integrate the inequality over the interval $[k, k+1]$ of length $1$:',
          m: '$$x_{k+1} \\le \\int_k^{k+1} f(t) \\, dt \\le x_k$$',
          meaning: 'What this really means: The exact area under the curve is sandwiched between the lower right box and upper left box.'
        },
        {
          why: 'Summing from $k=1$ to $n$, the integrals concatenate into $\\int_1^{n+1} f(t) \\, dt$:',
          m: '$$\\sum_{k=1}^n x_{k+1} = s_{n+1} - x_1 \\le \\int_1^{n+1} f(t) \\, dt \\le \\sum_{k=1}^n x_k = s_n$$',
          meaning: 'What this really means: Stacking the unit strips from 1 to n adds up to the continuous integral over [1, n+1].'
        },
        {
          why: 'Rearranging the two sides gives the fundamental sandwich inequality for all $n$:',
          m: '$$\\int_1^{n+1} f(t) \\, dt \\le s_n \\le x_1 + \\int_1^n f(t) \\, dt$$',
          meaning: 'What this really means: The partial sum is bounded below and above by the improper integral.'
        },
        {
          why: 'Since $x_n > 0$ and $f(t) > 0$, $(s_n)$ and $\\int_1^n f$ are both monotone increasing, so $(s_n)$ is bounded if and only if the improper integral is bounded.',
          m: '$$\\lim_{n\\to\\infty} s_n < \\infty \\iff \\lim_{n\\to\\infty} \\int_1^n f(t) \\, dt < \\infty$$',
          meaning: 'What this really means: Both sequences grow monotonically, so either both hit a finite ceiling or both fly off to infinity.'
        }
      ],
      ends: 'Therefore $\\sum x_n$ converges if and only if $\\int_1^\\infty f(t)\\,dt < \\infty$.'
    },
    cards: [
      { q: 'For what values of $p$ does the $p$-series $\\sum_{n=1}^\\infty \\dfrac{1}{n^p}$ converge?', a: '$p > 1$. (Diverges for $p \\le 1$).', kind: 'state' },
      { q: 'Use the Integral Test to determine if $\\sum_{n=2}^\\infty \\dfrac{1}{n \\ln n}$ converges.', a: '$\\int_2^\\infty \\dfrac{1}{t \\ln t}\\,dt = [\\ln(\\ln t)]_2^\\infty = \\infty$. Diverges!', kind: 'apply' }
    ]
  },

  {
    id: 'c.9.3.2', bartle: '9.3.2', sec: '9.3', kind: 'theorem', tier: 'ext',
    title: 'The Alternating Series Test (Leibniz’s Rule)',
    oneLine: 'If positive terms steadily shrink down to zero in an alternating series, convergence is 100% guaranteed.',
    statement: `Let $(z_n)$ be a sequence of positive numbers that is:
      <p>(1) <b>Monotone decreasing:</b> $z_{n+1} \\le z_n$ for all $n$, and</p>
      <p>(2) <b>Tends to zero:</b> $\\lim_{n\\to\\infty} z_n = 0$.</p>
      <p>Then the alternating series $\\sum_{n=1}^\\infty (-1)^{n+1} z_n = z_1 - z_2 + z_3 - z_4 + \\cdots$ <b>converges</b>.</p>
      <p><b>Alternating Series Error Bound:</b> The error after $k$ terms is strictly smaller than the very next term:
      $$|s - s_k| \\le z_{k+1}$$</p>`,
    intuition: `<p>Picture a frog jumping on a number line:</p>
      <p>• It jumps right by $z_1$.</p>
      <p>• Then it jumps left by a smaller distance $z_2$ (landing to the right of $0$).</p>
      <p>• Then right by an even smaller $z_3$, then left by $z_4$, and so on.</p>
      <p>The even partial sums $s_2, s_4, s_6, \\ldots$ are increasing; the odd partial sums $s_1, s_3, s_5, \\ldots$ are decreasing. They trap the true sum $s$ in between! Since the jump size $z_n \\to 0$, the trap snaps shut on a single real number.</p>`,
    needs: ['c.3.3.2', 'c.3.7.1'],
    traps: [
      `Both conditions are mandatory! If terms are not decreasing, the series can diverge even if terms go to zero.`,
      `The error bound $|s - s_k| \\le z_{k+1}$ is amazing for exams: you can approximate the sum to within $0.01$ just by finding when the next term drops below $0.01$!`
    ],
    proof: {
      idea: 'Even partial sums $s_{2n}$ are increasing and bounded above by $s_1$; odd partial sums $s_{2n+1}$ are decreasing and bounded below by $s_2$. Both converge to limits $s_{even}$ and $s_{odd}$. Since $s_{2n+1} - s_{2n} = z_{2n+1} \\to 0$, the limits coincide.',
      why: 'Monotone Convergence Theorem applied separately to even and odd subsequences.',
      rungs: [
        {
          why: 'Consider the even partial sums $s_{2n} = (z_1 - z_2) + (z_3 - z_4) + \\dots + (z_{2n-1} - z_{2n})$. Since $z_k \\ge z_{k+1}$, each parenthesized pair is non-negative:',
          m: '$$s_{2n+2} - s_{2n} = z_{2n+1} - z_{2n+2} \\ge 0 \\implies (s_{2n}) \\text{ is monotone increasing}$$',
          meaning: 'What this really means: Every new step of two jumps adds a positive net balance, so the even points march steadily rightward.'
        },
        {
          why: 'Rewrite $s_{2n} = z_1 - (z_2 - z_3) - \\dots - (z_{2n-2} - z_{2n-1}) - z_{2n}$. Since all subtracted terms are non-negative, $s_{2n} \\le z_1$ for all $n$.',
          m: '$$s_{2n} \\le z_1 \\quad \\forall n \\in \\mathbb{N}$$',
          meaning: 'What this really means: The even sums can never exceed the very first term z_1, giving a hard upper ceiling.'
        },
        {
          why: 'By the Monotone Convergence Theorem (3.3.2), the bounded increasing sequence $(s_{2n})$ converges to a limit $s \\in \\mathbb{R}$:',
          m: '$$\\lim_{n \\to \\infty} s_{2n} = s$$',
          meaning: 'What this really means: An increasing sequence blocked by an upper ceiling is guaranteed to hit a finite limit.'
        },
        {
          why: 'The odd partial sums satisfy $s_{2n+1} = s_{2n} + z_{2n+1}$. Taking the limit as $n \\to \\infty$, since $\\lim z_n = 0$:',
          m: '$$\\lim_{n \\to \\infty} s_{2n+1} = \\lim_{n \\to \\infty} s_{2n} + \\lim_{n \\to \\infty} z_{2n+1} = s + 0 = s$$',
          meaning: 'What this really means: The gap between odd and even steps vanishes, pulling the odd sums to the exact same limit.'
        },
        {
          why: 'Since both even and odd subsequences converge to $s$, the full sequence $(s_n)$ converges to $s$, with $s_{2n} \\le s \\le s_{2n+1}$, yielding $|s - s_k| \\le z_{k+1}$.',
          m: '$$\\lim_{n \\to \\infty} s_n = s, \\quad |s - s_k| \\le z_{k+1}$$',
          meaning: 'What this really means: The true sum is trapped between consecutive terms, bounding the error by the size of the next jump.'
        }
      ],
      ends: 'Therefore the alternating series converges, and its error after $k$ terms is at most $z_{k+1}$.'
    },
    cards: [
      { q: 'State the two conditions of Leibniz’s Alternating Series Test.', a: '(1) $z_{n+1} \\le z_n$ (terms are monotonically decreasing); (2) $\\lim z_n = 0$.', kind: 'state' },
      { q: 'What is the maximum error when approximating the sum of an alternating series by its $k$-th partial sum $s_k$?', a: 'At most the magnitude of the next term: $|s - s_k| \\le z_{k+1}$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.9.4.6', bartle: '9.4.6', sec: '9.4', kind: 'theorem', tier: 'ext',
    title: 'The Weierstrass M-Test for Series of Functions',
    oneLine: 'If a series of functions is bounded term-by-term by a convergent series of numbers, it converges uniformly.',
    statement: `Let $(f_n)$ be a sequence of functions defined on $A \\subseteq \\mathbb{R}$.
      <p>Suppose there exists a sequence of positive numbers $(M_n)$ such that:
      $$|f_n(x)| \\le M_n \\quad \\text{for all } x \\in A \\text{ and all } n \\in \\mathbb{N}$$
      If the number series $\\sum_{n=1}^\\infty M_n$ <b>converges</b>, then:</p>
      <p>The series of functions $\\sum_{n=1}^\\infty f_n(x)$ <b>converges uniformly and absolutely</b> on $A$.</p>`,
    intuition: `<p>This is the workhorse of university analysis exams for proving uniform convergence of series!</p>
      <p>Proving uniform convergence directly with $\\varepsilon$ is tedious. The Weierstrass $M$-test lets you eliminate the variable $x$ entirely: just replace $f_n(x)$ with its worst-case maximum ceiling $M_n$. If the sum of those ceilings $\\sum M_n$ converges, the function series $\\sum f_n(x)$ is automatically crushed into uniform convergence!</p>
      <p><b>Example:</b> $\\sum_{n=1}^\\infty \\frac{\\cos(nx)}{n^2}$. Since $|\\cos(nx)| \\le 1$, we have $|f_n(x)| \\le 1/n^2 = M_n$. Since $\\sum 1/n^2$ converges, the series converges uniformly on all of $\\mathbb{R}$!</p>`,
    needs: ['c.8.1.1', 'c.9.1.1', 'c.9.2.1'],
    traps: [
      `The constants $M_n$ MUST be independent of $x$ (pure numbers, not functions of $x$)!`,
      `The converse of the $M$-test is FALSE: a series can converge uniformly even if the $M$-test fails (e.g. alternating series where cancellation drives uniform convergence).`
    ],
    proof: {
      idea: 'For any $x \\in A$, $|\\sum_{k=n+1}^m f_k(x)| \\le \\sum_{k=n+1}^m |f_k(x)| \\le \\sum_{k=n+1}^m M_k$. By Cauchy criterion for series of numbers, the tail $\\sum_{k=n+1}^m M_k < \\varepsilon$ independent of $x$. Hence $(s_n(x))$ is uniformly Cauchy, proving uniform convergence.',
      why: 'Cauchy Criterion for Uniform Convergence (8.1.10) applied to partial sums.',
      rungs: [
        {
          why: 'Let $\\varepsilon > 0$. Since $\\sum_{n=1}^\\infty M_n$ converges, the Cauchy Criterion for number series guarantees there exists $K \\in \\mathbb{N}$ such that for all $m > n \\ge K$:',
          m: '$$\\sum_{k=n+1}^m M_k < \\varepsilon$$',
          meaning: 'What this really means: The tail of the bounding positive number series can be made smaller than epsilon.'
        },
        {
          why: 'Let $s_n(x) = \\sum_{k=1}^n f_k(x)$ be the $n$-th partial sum. For any $x \\in A$ and $m > n \\ge K$, apply triangle inequality and the hypothesis $|f_k(x)| \\le M_k$:',
          m: '$$|s_m(x) - s_n(x)| = \\left| \\sum_{k=n+1}^m f_k(x) \\right| \\le \\sum_{k=n+1}^m |f_k(x)| \\le \\sum_{k=n+1}^m M_k$$',
          meaning: 'What this really means: The difference between two partial sums at any point x is capped by the sum of the constant bounds M_k.'
        },
        {
          why: 'Combining the bounds gives for all $x \\in A$ and all $m > n \\ge K$:',
          m: '$$|s_m(x) - s_n(x)| < \\varepsilon \\quad \\forall x \\in A$$',
          meaning: 'What this really means: The index K works universally for every single point x across the entire domain A.'
        },
        {
          why: 'By the Cauchy Criterion for Uniform Convergence (Theorem 8.1.10), the sequence of partial sums $(s_n)$ converges uniformly on $A$.',
          m: '$$s_n \\rightrightarrows s \\text{ on } A$$',
          meaning: 'What this really means: The function series satisfies the uniform Cauchy test, guaranteeing uniform convergence.'
        }
      ],
      ends: 'Therefore $\\sum_{n=1}^\\infty f_n(x)$ converges uniformly and absolutely on $A$.'
    },
    cards: [
      { q: 'State the Weierstrass M-Test.', a: 'If $|f_n(x)| \\le M_n$ for all $x \\in A$ and $\\sum M_n < \\infty$, then $\\sum f_n$ converges uniformly and absolutely on $A$.', kind: 'state' },
      { q: 'Prove that $\\sum_{n=1}^\\infty \\dfrac{\\sin(n^2 x)}{n^3}$ converges uniformly on $\\mathbb{R}$.', a: 'Since $|\\sin(n^2 x)| \\le 1$, $|f_n(x)| \\le 1/n^3$. Since $\\sum 1/n^3$ converges ($p=3>1$), uniform convergence holds by Weierstrass M-test.', kind: 'apply' }
    ]
  },

  {
    id: 'c.9.4.9', bartle: '9.4.9', sec: '9.4', kind: 'theorem', tier: 'ext',
    title: 'Radius of Convergence and the Cauchy–Hadamard Theorem',
    oneLine: 'Every power series has a magic radius R: absolutely convergent inside |x - x_0| < R, divergent outside.',
    statement: `For any power series $\\sum_{n=0}^\\infty a_n (x - x_0)^n$, define $\\rho = \\limsup_{n\\to\\infty} |a_n|^{1/n}$.
      <p>The <b>radius of convergence</b> $R$ is given by the <b>Cauchy–Hadamard formula</b>:
      $$R = \\begin{cases} 1/\\rho & \\text{if } 0 < \\rho < \\infty \\\\ \\infty & \\text{if } \\rho = 0 \\\\ 0 & \\text{if } \\rho = \\infty \\end{cases}$$
      (Alternatively, using the Ratio Test: $R = \\lim_{n\\to\\infty} \\left| \\frac{a_n}{a_{n+1}} \\right|$ whenever this limit exists).</p>
      <p>Then:
      <br>• The series converges absolutely for all $|x - x_0| < R$.
      <br>• The series diverges for all $|x - x_0| > R$.
      <br>• The series converges uniformly on any closed subinterval $[x_0 - r, x_0 + r]$ with $r < R$.</p>`,
    intuition: `<p>Every power series has an "island of safety" of radius $R$ centered at $x_0$:</p>
      <p>• Inside the open circle $(x_0 - R, x_0 + R)$, the terms decay geometrically, so the series converges smoothly and can be differentiated term-by-term.</p>
      <p>• Outside the circle, the terms blow up and the series diverges.</p>
      <p>• Right on the boundary endpoints $x = x_0 \\pm R$, anything can happen! You must test each endpoint individually by plugging in $x_0 + R$ and $x_0 - R$.</p>`,
    needs: ['c.9.4.6', 'c.9.2.4'],
    traps: [
      `At the boundary points $x = x_0 \\pm R$, the theorem gives NO information! One endpoint might converge while the other diverges (e.g. $\\sum x^n/n$ has $R = 1$, converges at $-1$, diverges at $+1$).`,
      `For the ratio formula: notice it is $a_n / a_{n+1}$ (reciprocal of standard ratio test), because $R = 1/L$.`
    ],
    proof: {
      idea: 'Apply the Root Test to the positive number series $\\sum |a_n| |x - x_0|^n$. The $n$-th root limit is $|x - x_0| \\limsup |a_n|^{1/n} = |x - x_0| \\rho$. If $|x - x_0| < 1/\\rho$, this limit is $< 1$, so the series converges absolutely. If $|x - x_0| > 1/\\rho$, the terms do not tend to zero, so it diverges.',
      why: 'Cauchy Root Test (9.2.4) applied to power terms.',
      rungs: [
        {
          why: 'Fix $x \\in \\mathbb{R}$, and consider the series of absolute terms $\\sum_{n=0}^\\infty |a_n| |x - x_0|^n$. Apply Cauchy’s Root Test by examining:',
          m: '$$\\limsup_{n\\to\\infty} \\left( |a_n| |x - x_0|^n \\right)^{1/n} = |x - x_0| \\limsup_{n\\to\\infty} |a_n|^{1/n} = |x - x_0| \\rho$$',
          meaning: 'What this really means: Factoring out the distance |x - x_0| leaves exactly the limsup factor rho from the coefficients.'
        },
        {
          why: 'Case 1 ($|x - x_0| < 1/\\rho$): Then $|x - x_0| \\rho < 1$. By the Cauchy Root Test (9.2.4(b)), the series converges absolutely.',
          m: '$$|x - x_0| < R = \\frac{1}{\\rho} \\implies |x - x_0| \\rho < 1 \\implies \\sum a_n(x - x_0)^n \\text{ converges absolutely}$$',
          meaning: 'What this really means: When inside the radius R, the effective ratio is strictly less than 1, forcing absolute convergence.'
        },
        {
          why: 'Case 2 ($|x - x_0| > 1/\\rho$): Then $|x - x_0| \\rho > 1$. There exists a subsequence where $|a_n|^{1/n} |x - x_0| > 1$, so $|a_n(x - x_0)^n| > 1$ infinitely often.',
          m: '$$a_n(x - x_0)^n \\not\\to 0 \\implies \\sum a_n(x - x_0)^n \\text{ diverges}$$',
          meaning: 'What this really means: When outside the radius R, the terms cannot even decay to 0, completely blowing up.'
        },
        {
          why: 'Case 3 (Uniform convergence on compact subintervals): For any $r < R$, let $M_n = |a_n| r^n$. Since $\\sum M_n$ converges, Weierstrass M-Test gives uniform convergence on $[x_0 - r, x_0 + r]$.',
          m: '$$|x - x_0| \\le r < R \\implies |a_n(x - x_0)^n| \\le |a_n| r^n \\implies \\sum a_n(x - x_0)^n \\text{ converges uniformly}$$',
          meaning: 'What this really means: Any sub-interval safely inside the radius is bounded by a convergent geometric ceiling.'
        }
      ],
      ends: 'Therefore $R = 1/\\rho$ is the exact radius of convergence.'
    },
    cards: [
      { q: 'State the Cauchy–Hadamard formula for the radius of convergence $R$.', a: '$R = 1/\\rho$, where $\\rho = \\limsup_{n\\to\\infty} |a_n|^{1/n}$.', kind: 'state' },
      { q: 'What is the radius of convergence of $\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}$?', a: '$R = \\infty$; the series converges for all real numbers.', kind: 'apply' },
      { q: 'What happens at the boundary points $|x - x_0| = R$?', a: 'The series may converge or diverge; each endpoint must be tested individually.', kind: 'recall' }
    ]
  }
);

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
    cards: [
      { q: 'State the Cauchy–Hadamard formula for the radius of convergence $R$.', a: '$R = 1/\\rho$, where $\\rho = \\limsup_{n\\to\\infty} |a_n|^{1/n}$.', kind: 'state' },
      { q: 'What is the radius of convergence of $\\sum_{n=0}^\\infty \\dfrac{x^n}{n!}$?', a: '$R = \\infty$; the series converges for all real numbers.', kind: 'apply' },
      { q: 'What happens at the boundary points $|x - x_0| = R$?', a: 'The series may converge or diverge; each endpoint must be tested individually.', kind: 'recall' }
    ]
  }
);

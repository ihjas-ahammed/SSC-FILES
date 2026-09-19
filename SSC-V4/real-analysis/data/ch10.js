/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module 6 (Extension): The Generalized Riemann Integral (Chapter 10)
   Sections: 10.1 (Riemann Completeness & Gauges), 10.2 (Improper & Lebesgue Integrals),
             10.3 (Infinite Intervals), 10.4 (Convergence Theorems)
   The Henstock–Kurzweil Gauge Integral: Every derivative is integrable!
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.10.1.1', bartle: '10.1.1', sec: '10.1', kind: 'definition', tier: 'ext',
    title: 'Gauges and δ-Fine Partitions',
    oneLine: 'A gauge assigns a custom tolerance δ(t) > 0 to each point; a partition is δ-fine if each subinterval fits inside its tag’s gauge.',
    statement: `Let $I = [a, b]$ be a compact interval.
      <p>(a) A <b>gauge</b> on $I$ is a strictly positive function $\\delta: I \\to (0, \\infty)$.</p>
      <p>(b) If $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ is a tagged partition of $I$, we say $\\dot{\\mathcal{P}}$ is <b>$\\delta$-fine</b> if for every $i = 1, \\dots, n$:
      $$[x_{i-1}, x_i] \\subseteq [t_i - \\delta(t_i), \\, t_i + \\delta(t_i)]$$
      that is, $|x - t_i| \\le \\delta(t_i)$ for all $x \\in [x_{i-1}, x_i]$.</p>`,
    intuition: `<p>In standard Riemann integration, the partition mesh $\\|P\\| < \\delta$ is <i>rigid and uniform</i>: the same step size $\\delta$ is forced across the entire interval, even where the function is wild!</p>
      <p>A <b>gauge</b> is dynamic and adaptive: where the function fluctuates violently (like near $x = 0$ for $\\sin(1/x)$), you assign a tiny gauge $\\delta(t) = 10^{-6}$; where the function is flat and gentle, you assign a generous gauge $\\delta(t) = 0.5$.</p>
      <p>This simple flexibility completely revolutionises integration theory!</p>`,
    needs: ['c.7.1.1'],
    traps: [
      `A constant gauge $\\delta(t) = \\delta_0$ reproduces classical Riemann partitions, but the power comes when $\\delta(t)$ varies with $t$.`,
      `The tag $t_i$ must belong to the subinterval $[x_{i-1}, x_i]$, and the entire interval must be swallowed by $(t_i - \\delta(t_i), t_i + \\delta(t_i))$.`
    ],
    cards: [
      { q: 'What is a gauge on an interval $I$?', a: 'Any strictly positive function $\\delta: I \\to (0, \\infty)$.', kind: 'state' },
      { q: 'When is a tagged partition $\\dot{\\mathcal{P}}$ said to be $\\delta$-fine?', a: 'When $[x_{i-1}, x_i] \\subseteq [t_i - \\delta(t_i), t_i + \\delta(t_i)]$ for every subinterval.', kind: 'recall' }
    ]
  },

  {
    id: 'c.10.1.2', bartle: '10.1.2', sec: '10.1', kind: 'theorem', tier: 'ext',
    title: 'Cousin’s Lemma (Existence of δ-Fine Partitions)',
    oneLine: 'For ANY gauge δ(t) > 0 on [a, b], however tiny, there ALWAYS exists a δ-fine tagged partition.',
    statement: `Let $I = [a, b]$ be a closed bounded interval, and let $\\delta: I \\to (0, \\infty)$ be an arbitrary gauge on $I$.
      <p>Then there exists at least one tagged partition $\\dot{\\mathcal{P}}$ of $I$ that is <b>$\\delta$-fine</b>.</p>`,
    intuition: `<p>You might worry: if someone gives you an evil gauge that assigns $\\delta(t) = 10^{-100}$ on rationals and $10^{-50}$ on irrationals, can you still slice $[a, b]$ into finitely many pieces that satisfy it?</p>
      <p><b>Cousin's Lemma says YES, ALWAYS!</b> Because $[a, b]$ is compact (finite length, closed), you can never get trapped in an infinite sub-division. This guarantees the Henstock–Kurzweil integral is never an empty theory.</p>`,
    needs: ['c.10.1.1', 'c.2.5.3'],
    traps: [
      `Cousin's Lemma requires $[a, b]$ to be closed and bounded; on $(a, b)$ or unbounded intervals, a gauge may fail to admit a finite partition.`
    ],
    proof: {
      idea: 'Bisection argument: If $[a, b]$ had no $\\delta$-fine partition, bisect into two halves; at least one half fails. Repeating constructs nested intervals shrinking to a point $z$, where a single tag $[z-\\delta(z), z+\\delta(z)]$ covers the subinterval, a contradiction.',
      why: 'Nested Intervals Property (2.5.3) produces a single contradiction point $z$.',
      rungs: [
        {
          why: 'Assume for contradiction that $[a, b]$ does NOT admit a $\\delta$-fine tagged partition. Let $I_1 = [a, b]$.',
          m: '$$I_1 = [a, b] \\text{ has no } \\delta\\text{-fine partition}$$',
          meaning: 'What this really means: Assume the worst case — that the interval cannot be sliced into finitely many pieces satisfying the gauge.'
        },
        {
          why: 'Bisect $I_1$ into left and right halves $I_1\'$ and $I_1\'\'$. If both had $\\delta$-fine partitions, their union would form a $\\delta$-fine partition of $I_1$, contradiction. So at least one half $I_2$ has no $\\delta$-fine partition.',
          m: '$$I_2 \\subset I_1, \\quad \\text{length}(I_2) = \\frac{b-a}{2}, \\quad I_2 \\text{ has no } \\delta\\text{-fine partition}$$',
          meaning: 'What this really means: Cutting in half forces at least one half to inherit the failure, halving the domain size.'
        },
        {
          why: 'Inductively, this generates nested closed bounded intervals $I_1 \\supset I_2 \\supset \\dots \\supset I_n$ with length $(b-a)/2^{n-1}$, none admitting a $\\delta$-fine partition.',
          m: '$$\\bigcap_{n=1}^\\infty I_n = \\{z\\} \\quad \\text{for some } z \\in [a, b]$$',
          meaning: 'What this really means: Repeated bisection traps the entire problem around a single fatal destination point $z$.'
        },
        {
          why: 'Since $\\delta(z) > 0$, choose $k$ large enough so that $\\text{length}(I_k) = \\frac{b-a}{2^{k-1}} < \\delta(z)$.',
          m: '$$\\text{length}(I_k) < \\delta(z) \\implies I_k \\subseteq [z - \\delta(z), \\, z + \\delta(z)]$$',
          meaning: 'What this really means: When the interval shrinks smaller than the gauge at $z$, the single tag $z$ easily swallows the entire interval.'
        },
        {
          why: 'Then the single tagged interval $(I_k, z)$ IS a $\\delta$-fine partition of $I_k$! This contradicts that $I_k$ had no $\\delta$-fine partition.',
          m: '$$\\{(I_k, z)\\} \\text{ is } \\delta\\text{-fine for } I_k \\implies\\Leftarrow$$',
          meaning: 'What this really means: We just built a valid partition of the troublesome interval with one piece, breaking the assumption completely.'
        }
      ],
      ends: 'Contradiction! Therefore every gauge $\\delta > 0$ admits a $\\delta$-fine tagged partition.'
    },
    cards: [
      { q: 'State Cousin’s Lemma.', a: 'Every gauge $\\delta: [a, b] \\to (0, \\infty)$ admits at least one $\\delta$-fine tagged partition of $[a, b]$.', kind: 'state' },
      { q: 'What topological property of $[a, b]$ powers Cousin’s Lemma?', a: 'The compactness of $[a, b]$ (via the Nested Intervals Property / Bolzano–Weierstrass).', kind: 'recall' }
    ]
  },

  {
    id: 'c.10.1.5', bartle: '10.1.5', sec: '10.1', kind: 'definition', tier: 'ext',
    title: 'The Henstock–Kurzweil (Generalized Riemann) Integral',
    oneLine: 'A function is HK-integrable if Riemann sums converge to L as the partition becomes δ-fine for an adaptive gauge δ.',
    statement: `A function $f: [a, b] \\to \\mathbb{R}$ is said to be <b>generalized Riemann integrable</b> (or Henstock–Kurzweil integrable, denoted $f \\in \\mathcal{HK}[a, b]$) with integral $L \\in \\mathbb{R}$ if:
      <p>For every $\\varepsilon > 0$, there exists a <b>gauge</b> $\\delta_\\varepsilon: [a, b] \\to (0, \\infty)$ such that for <b>every</b> $\\delta_\\varepsilon$-fine tagged partition $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$ of $[a, b]$:
      $$\\left| \\sum_{i=1}^n f(t_i)(x_i - x_{i-1}) - L \\right| < \\varepsilon$$</p>
      <p>We write $\\int_a^b f = L$. The value $L$ is uniquely determined.</p>`,
    intuition: `<p>Look at the definition: it looks <i>identical</i> to Riemann's original 1854 definition!</p>
      <p>The ONLY difference is one word: instead of requiring a constant number $\\delta > 0$, we allow a function $\\delta(t) > 0$.</p>
      <p>This single tweak fixes EVERYTHING wrong with the Riemann integral:
      <br>1. Dirichlet's function (0 on irrationals, 1 on rationals) IS integrable!
      <br>2. Improper integrals need no special limit definitions!
      <br>3. <b>Every derivative is integrable</b>, restoring the Fundamental Theorem of Calculus to perfection!</p>`,
    needs: ['c.10.1.1', 'c.10.1.2'],
    traps: [
      `Every Riemann integrable function is HK-integrable, and their integrals agree. But the HK-integral integrates vastly more functions!`,
      `Do not confuse $\\delta_\\varepsilon$ with a constant: it is a gauge function whose value can change at every point $t$.`
    ],
    cards: [
      { q: 'State the definition of the Henstock–Kurzweil integral.', a: '$f \\in \\mathcal{HK}[a, b]$ with integral $L$ if for each $\\varepsilon > 0$, $\\exists$ gauge $\\delta$ such that $|S(f, \\dot{\\mathcal{P}}) - L| < \\varepsilon$ for all $\\delta$-fine $\\dot{\\mathcal{P}}$.', kind: 'state' },
      { q: 'Is every Riemann integrable function HK-integrable?', a: 'Yes! A constant gauge $\\delta(t) = \\delta_0$ shows $\\mathcal{R}[a, b] \\subset \\mathcal{HK}[a, b]$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.10.2.1', bartle: '10.2.1', sec: '10.2', kind: 'theorem', tier: 'ext',
    title: 'The Fundamental Theorem of Calculus (Complete Form)',
    oneLine: 'If F is differentiable EVERYWHERE on [a, b], then F’ is HK-integrable and its integral is exactly F(b) - F(a) — no continuity of F’ required!',
    statement: `Let $F: [a, b] \\to \\mathbb{R}$ be differentiable at <b>every</b> point of $[a, b]$, and let $f(x) := F'(x)$.
      <p>Then $f$ is generalized Riemann integrable on $[a, b]$, and:
      $$\\int_a^b f(x) \\, dx = \\int_a^b F'(x) \\, dx = F(b) - F(a)$$</p>`,
    intuition: `<p>In standard Riemann integration, the Fundamental Theorem of Calculus requires an embarrassing assumption: you must assume $F'(x)$ is <i>continuous</i> or bounded!</p>
      <p>If $F(x) = x^2 \\sin(1/x^2)$, its derivative $F'(x) = 2x\\sin(1/x^2) - \\frac{2}{x}\\cos(1/x^2)$ is unbounded near $0$, so Riemann's integral CANNOT integrate it! Lebesgue's integral CANNOT integrate it either (because it is not absolutely integrable)!</p>
      <p><b>The HK integral is the ONLY integral that integrates EVERY derivative!</b> It completely restores calculus to its natural, dream state: differentiation and integration are perfect inverses.</p>`,
    needs: ['c.10.1.5', 'c.6.1.1'],
    traps: [
      `In Riemann analysis, $F'(x)$ can fail to be integrable; in HK analysis, differentiation NEVER escapes integrability.`,
      `$F$ must be differentiable at every point; if $F$ has even a single jump discontinuity, the theorem does not apply.`
    ],
    proof: {
      idea: 'At each tag t, differentiability means $|F(x) - F(t) - F\'(t)(x-t)| \\le \\varepsilon|x-t|$. Setting gauge $\\delta(t)$ to make this hold, telescoping sum $\\sum (F(x_i) - F(x_{i-1})) = F(b) - F(a)$ traps the Riemann sum within $\\varepsilon(b-a)$.',
      why: 'Differentiability definition provides the local gauge directly.',
      rungs: [
        {
          why: 'Let $\\varepsilon > 0$. By differentiability of $F$ at each $t \\in [a, b]$, there exists $\\delta(t) > 0$ such that $|x - t| \\le \\delta(t) \\implies |F(x) - F(t) - F\'(t)(x - t)| \\le \\varepsilon |x - t|$.',
          m: '$$|F(x) - F(t) - f(t)(x - t)| \\le \\varepsilon |x - t| \\quad \\text{for } |x - t| \\le \\delta(t)$$',
          meaning: 'What this really means: Differentiability gives each point its own personal radius where the tangent line approximates the function to within epsilon error.'
        },
        {
          why: 'This defines a gauge $\\delta: [a, b] \\to (0, \\infty)$. By Cousin’s Lemma, there exists a $\\delta$-fine tagged partition $\\dot{\\mathcal{P}} = \\{([x_{i-1}, x_i], t_i)\\}_{i=1}^n$.',
          m: '$$[x_{i-1}, x_i] \\subseteq [t_i - \\delta(t_i), \\, t_i + \\delta(t_i)] \\quad \\forall i$$',
          meaning: 'What this really means: Cousin’s lemma guarantees we can tile the whole interval using pieces that each lie inside their tag’s accurate tangent zone.'
        },
        {
          why: 'On each subinterval $[x_{i-1}, x_i]$, since both $x_{i-1}$ and $x_i$ lie in the $\\delta(t_i)$-neighborhood of $t_i$, triangle inequality gives $|F(x_i) - F(x_{i-1}) - f(t_i)(x_i - x_{i-1})| \\le \\varepsilon(x_i - x_{i-1})$.',
          m: '$$|F(x_i) - F(x_{i-1}) - f(t_i)(x_i - x_{i-1})| \\le \\varepsilon (x_i - x_{i-1})$$',
          meaning: 'What this really means: The true change of the function over each piece differs from the Riemann rectangle by at most epsilon times the piece width.'
        },
        {
          why: 'Sum over all $i=1, \\dots, n$. The terms $F(x_i) - F(x_{i-1})$ telescope to $F(b) - F(a)$!',
          m: '$$\\sum_{i=1}^n [F(x_i) - F(x_{i-1})] = F(b) - F(a)$$',
          meaning: 'What this really means: Adding up the function changes collapses in a beautiful telescope from the start point to the end point.'
        },
        {
          why: 'Summing the error bounds: $|F(b) - F(a) - \\sum_{i=1}^n f(t_i)(x_i - x_{i-1})| \\le \\varepsilon \\sum (x_i - x_{i-1}) = \\varepsilon (b - a)$.',
          m: '$$\\left| \\sum_{i=1}^n f(t_i)(x_i - x_{i-1}) - (F(b) - F(a)) \\right| \\le \\varepsilon (b - a)$$',
          meaning: 'What this really means: The entire Riemann sum is trapped within epsilon*(b-a) of F(b)-F(a), proving integrability directly.'
        }
      ],
      ends: 'Since $\\varepsilon > 0$ is arbitrary, $f = F\' \\in \\mathcal{HK}[a, b]$ and $\\int_a^b f = F(b) - F(a)$.'
    },
    cards: [
      { q: 'Why is the HK Fundamental Theorem of Calculus stronger than the Riemann FTC?', a: 'It does not require $F\'$ to be continuous or bounded: ANY derivative is HK-integrable.', kind: 'recall' },
      { q: 'What is the value of $\\int_a^b F\'(x)\\,dx$ in the HK theory?', a: '$F(b) - F(a)$ unconditionally.', kind: 'state' }
    ]
  },

  {
    id: 'c.10.2.5', bartle: '10.2.5', sec: '10.2', kind: 'theorem', tier: 'ext',
    title: 'Equivalence with Improper Riemann Integrals (Hake’s Theorem)',
    oneLine: 'Every convergent improper Riemann integral is ALREADY an ordinary HK integral — no limit of integrals needed!',
    statement: `Let $f: [a, b] \\to \\mathbb{R}$.
      <p>If $f$ is Riemann integrable on $[a, c]$ for every $c \\in (a, b)$, and the improper limit exists:
      $$\\lim_{c \\to b^-} \\int_a^c f(x) \\, dx = A \\in \\mathbb{R}$$
      then $f$ is generalized Riemann integrable on $[a, b]$, and $\\int_a^b f = A$.</p>`,
    intuition: `<p>In freshman calculus, when an integrand blows up at an endpoint (like $1/\\sqrt{x}$ on $[0, 1]$), teachers say: <i>"You cannot integrate this directly! You must take $\\lim_{c\\to 0^+} \\int_c^1 1/\\sqrt{x}$."</i></p>
      <p>In Henstock–Kurzweil theory, this distinction is obsolete: $1/\\sqrt{x}$ is a genuine, bona fide integrable function on $[0, 1]$, and its integral is $2$ without any limits required!</p>`,
    needs: ['c.10.1.5'],
    traps: [
      `Improper Riemann integrals were invented as an artificial fix for Riemann's rigid mesh; the gauge integral absorbs them naturally.`
    ],
    cards: [
      { q: 'Does the HK integral distinguish between proper and improper integrals?', a: 'No, every convergent improper Riemann integral is an ordinary HK integral.', kind: 'recall' }
    ]
  },

  {
    id: 'c.10.3.1', bartle: '10.3.1', sec: '10.3', kind: 'theorem', tier: 'ext',
    title: 'The Gauge Integral on Unbounded Intervals [a, ∞)',
    oneLine: 'Gauges naturally extend to rays [a, ∞) by assigning a neighborhood of infinity (M, ∞), uniting improper integrals into a single theory.',
    statement: `Let $f: [a, \\infty) \\to \\mathbb{R}$. We compactify the ray by adjoining the point at infinity: $[a, \\infty)^* = [a, \\infty) \\cup \\{\\infty\\}$.
      <p>(a) A <b>gauge</b> on $[a, \\infty)^*$ consists of a positive function $\\delta(t) > 0$ for each $t \\in [a, \\infty)$, along with a number $M > a$ defining a neighborhood $(M, \\infty]$ for the tag $\\infty$.</p>
      <p>(b) A partition of $[a, \\infty)$ is <b>$\\delta$-fine</b> if its compact subintervals $[x_{i-1}, x_i]$ are $\\delta(t_i)$-fine and its trailing ray $[x_n, \\infty)$ satisfies $x_n > M$ tagged with $\\infty$ (with convention $f(\\infty)(x - x_n) = 0$).</p>
      <p><b>Hake’s Theorem for Rays:</b> $f \\in \\mathcal{HK}[a, \\infty)$ if and only if $f \\in \\mathcal{HK}[a, c]$ for every $c > a$ and the limit $\\lim_{c \\to \\infty} \\int_a^c f$ exists in $\\mathbb{R}$.</p>`,
    intuition: `<p>In freshman calculus, integrating to infinity was always an outside limit: $\\int_a^\\infty f = \\lim_{c \\to \\infty} \\int_a^c f$.</p>
      <p>In HK theory, infinity is brought inside the room: we simply tag the final interval with $\\infty$ and assign a threshold $M$ large enough that the tail has negligible contribution.</p>
      <p>This resolves famous test cases: $\\int_0^\\infty \\frac{\\sin x}{x} \\, dx = \\frac{\\pi}{2}$ is a true HK integral, even though it is <b>NOT Lebesgue integrable</b> (since $|\\sin x|/x$ integrates to $\\infty$).</p>`,
    needs: ['c.10.1.5', 'c.10.2.5'],
    traps: [
      `The conditionally convergent integral $\\int_0^\\infty \\frac{\\sin x}{x}\\,dx = \\frac{\\pi}{2}$ is HK-integrable, but fails Lebesgue integrability because Lebesgue requires absolute integrability!`,
      `The tag for the unbounded subinterval $[x_n, \\infty)$ is the point at infinity itself.`
    ],
    cards: [
      { q: 'State Hake’s Theorem for infinite intervals $[a, \\infty)$.', a: '$f \\in \\mathcal{HK}[a, \\infty)$ iff $f \\in \\mathcal{HK}[a, c]$ for all $c > a$ and $\\lim_{c\\to\\infty} \\int_a^c f$ exists.', kind: 'state' },
      { q: 'Is $\\int_0^\\infty \\dfrac{\\sin x}{x}\\,dx$ Lebesgue integrable or HK-integrable?', a: 'It is HK-integrable (and improper Riemann integrable), but NOT Lebesgue integrable because it fails absolute integrability.', kind: 'recall' }
    ]
  },

  {
    id: 'c.10.4.1', bartle: '10.4.1', sec: '10.4', kind: 'theorem', tier: 'ext',
    title: 'Monotone and Dominated Convergence for the Gauge Integral',
    oneLine: 'The gauge integral satisfies the full Monotone and Dominated Convergence Theorems, matching Lebesgue integration.',
    statement: `Let $(f_n)$ be a sequence of HK-integrable functions on $[a, b]$ converging pointwise to $f$.
      <p>(a) <b>Monotone Convergence Theorem:</b> If $f_n(x) \\le f_{n+1}(x)$ for all $n$ and $\\lim_{n\\to\\infty} \\int_a^b f_n < \\infty$, then $f \\in \\mathcal{HK}[a, b]$ and:
      $$\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx$$</p>
      <p>(b) <b>Dominated Convergence Theorem:</b> If $|f_n(x)| \\le g(x)$ for all $n$, where $g \\in \\mathcal{HK}[a, b]$, then $f \\in \\mathcal{HK}[a, b]$ and $\\lim_{n\\to\\infty} \\int_a^b f_n = \\int_a^b f$.</p>`,
    intuition: `<p>Recall that Riemann's integral completely fails under monotone limits (Dirichlet's function is the pointwise limit of Riemann integrable step functions, but is not Riemann integrable!).</p>
      <p>The Henstock–Kurzweil integral achieves the exact same powerful convergence theorems as the celebrated Lebesgue integral, while remaining defined purely through high-school Riemann sums!</p>`,
    needs: ['c.10.1.5', 'c.8.2.4'],
    traps: [
      `Riemann integrals do NOT satisfy the Monotone Convergence Theorem; the gauge integral and Lebesgue integral do.`
    ],
    cards: [
      { q: 'State the Monotone Convergence Theorem for the gauge integral.', a: 'If $f_n \\uparrow f$ pointwise and $\\lim \\int_a^b f_n < \\infty$, then $f \\in \\mathcal{HK}[a, b]$ and $\\int_a^b f = \\lim \\int_a^b f_n$.', kind: 'state' }
    ]
  }
);

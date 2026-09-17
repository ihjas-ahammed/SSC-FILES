/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module 3: The Riemann Integral (Chapter 7)
   Sections: 7.1 (Riemann Integral), 7.2 (Integrable Functions),
             7.3 (Fundamental Theorem), 7.4 (Darboux Integral), 7.5 (Approx)
   Diagrams: c.7.1.1, c.7.2.9, c.7.3.1, c.7.3.5, c.7.3.8,
             c.7.3.12, c.7.3.17, c.7.4.1, c.7.4.8
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.7.1.1', bartle: '7.1.1', sec: '7.1', kind: 'definition', tier: 'core',
    title: 'Tagged Partitions and the Riemann Sum',
    oneLine: 'Chop the interval into thin slices, erect a rectangle on each slice at sample tag t_i, and sum their areas.',
    statement: `Let $I = [a, b]$ be a closed bounded interval.
      <p>(a) A <b>partition</b> $\\mathcal{P}$ of $I$ is a finite ordered set of points:
      $$\\mathcal{P} = \\{x_0, x_1, \\ldots, x_n\\} \\quad \\text{with} \\quad a = x_0 < x_1 < \\cdots < x_n = b$$
      The <b>mesh</b> (norm) of $\\mathcal{P}$ is the length of the widest subinterval:
      $$\\|\\mathcal{P}\\| = \\max_{1 \\le i \\le n} (x_i - x_{i-1})$$</p>
      <p>(b) A <b>tagged partition</b> $\\dot{\\mathcal{P}}$ chooses a sample tag $t_i \\in [x_{i-1}, x_i]$ in each slice.</p>
      <p>(c) The <b>Riemann sum</b> of $f: [a, b] \\to \\mathbb{R}$ corresponding to $\\dot{\\mathcal{P}}$ is:
      $$S(f; \\dot{\\mathcal{P}}) = \\sum_{i=1}^n f(t_i)(x_i - x_{i-1})$$</p>
      <p>(d) $f$ is <b>Riemann integrable</b> on $[a, b]$, written $f \\in \\mathcal{R}[a, b]$, with integral $L = \\int_a^b f$, if for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that for <b>every</b> tagged partition $\\dot{\\mathcal{P}}$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$:
      $$|S(f; \\dot{\\mathcal{P}}) - L| < \\varepsilon$$</p>`,
    intuition: `<p>In Class 12, integration was introduced as "the area under a curve". But how do you calculate the area of an irregular shape? You slice it into vertical rectangles!</p>
      <p>Each rectangle has width $\\Delta x_i = (x_i - x_{i-1})$ and height sampled at $t_i$. If the total sum of these rectangle areas converges to the exact same value $L$ no matter how you choose the sample tags $t_i$ as long as the slices are thinner than $\\delta$, that limit is the <b>Riemann Integral</b>!</p>`,
    needs: ['c.4.1.4', 'c.2.2.1'],
    traps: [
      `A Riemann integrable function on $[a, b]$ MUST be bounded! If $f$ is unbounded, you can pick tags $t_i$ where $f(t_i)$ is arbitrarily large, blowing up the sum.`,
      `The tag $t_i$ can be ANY point inside $[x_{i-1}, x_i]$ (left end, right end, midpoint, or an irrational). The definition requires convergence for ALL choices of tags.`
    ],
    cards: [
      { q: 'What is the mesh (norm) $\\|\\mathcal{P}\\|$ of a partition?', a: 'The length of the largest subinterval: $\\|\\mathcal{P}\\| = \\max_i (x_i - x_{i-1})$.', kind: 'state' },
      { q: 'What is the formula for the Riemann sum $S(f; \\dot{\\mathcal{P}})$?', a: '$S(f; \\dot{\\mathcal{P}}) = \\sum_{i=1}^n f(t_i)(x_i - x_{i-1})$.', kind: 'state' },
      { q: 'Can an unbounded function on $[a, b]$ be Riemann integrable?', a: 'No. Every Riemann integrable function must be bounded on $[a, b]$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.1.2', bartle: '7.1.2', sec: '7.1', kind: 'theorem', tier: 'core',
    title: 'Uniqueness of the Riemann Integral',
    oneLine: 'If a function is Riemann integrable, its integral value is uniquely determined.',
    statement: `If $f \\in \\mathcal{R}[a, b]$, then the value of the integral $\\int_a^b f$ is <b>uniquely determined</b>.`,
    intuition: `<p>Could a function have two different integral values, say $L_1 = 5$ and $L_2 = 6$? No!</p>
      <p>If two different limits existed, for sufficiently fine partitions, the Riemann sum $S(f; \\dot{\\mathcal{P}})$ would have to be within $\\varepsilon$ of $L_1$ and simultaneously within $\\varepsilon$ of $L_2$. By the Triangle Inequality, $|L_1 - L_2| \\le |L_1 - S| + |S - L_2| < 2\\varepsilon$. Since $\\varepsilon$ is arbitrary, $L_1 = L_2$.</p>`,
    needs: ['c.7.1.1', 'c.2.1.9'],
    traps: [
      `Do not forget that this relies on Theorem 2.1.9 (if $0 \\le |L_1 - L_2| < \\varepsilon$ for all $\\varepsilon > 0$, then $L_1 = L_2$).`
    ],
    proof: {
      idea: 'Assume two limits $L_1$ and $L_2$ exist, pick a tagged partition finer than both $\\delta_1$ and $\\delta_2$, and apply the Triangle Inequality.',
      why: 'Both $|S - L_1| < \\varepsilon/2$ and $|S - L_2| < \\varepsilon/2$ hold for the same partition, trapping $|L_1 - L_2| < \\varepsilon$.',
      rungs: [
        { why: 'Suppose $L_1$ and $L_2$ both satisfy the definition of the integral for $f$. Given $\\varepsilon > 0$, choose $\\delta_1, \\delta_2 > 0$ for $\\varepsilon/2$.', m: '\\|\\dot{\\mathcal{P}}\\| < \\delta_1 \\implies |S(f; \\dot{\\mathcal{P}}) - L_1| < \\frac{\\varepsilon}{2}, \\quad \\|\\dot{\\mathcal{P}}\\| < \\delta_2 \\implies |S(f; \\dot{\\mathcal{P}}) - L_2| < \\frac{\\varepsilon}{2}' },
        { why: 'Set $\\delta = \\min\\{\\delta_1, \\delta_2\\} > 0$ and choose any tagged partition $\\dot{\\mathcal{P}}$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$.', m: '\\|\\dot{\\mathcal{P}}\\| < \\delta \\implies |S(f; \\dot{\\mathcal{P}}) - L_1| < \\frac{\\varepsilon}{2} \\quad \\text{and} \\quad |S(f; \\dot{\\mathcal{P}}) - L_2| < \\frac{\\varepsilon}{2}' },
        { why: 'Apply the Triangle Inequality to $|L_1 - L_2|$.', m: '|L_1 - L_2| = |(L_1 - S(f; \\dot{\\mathcal{P}})) + (S(f; \\dot{\\mathcal{P}}) - L_2)| \\le |S(f; \\dot{\\mathcal{P}}) - L_1| + |S(f; \\dot{\\mathcal{P}}) - L_2|' },
        { why: 'Sum the tolerances: $\\varepsilon/2 + \\varepsilon/2 = \\varepsilon$.', m: '|L_1 - L_2| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon' },
        { why: 'Since $\\varepsilon > 0$ is arbitrary, by Theorem 2.1.9, $|L_1 - L_2| = 0$.', m: 'L_1 = L_2' }
      ],
      ends: 'Therefore, the Riemann integral of $f$ is unique.'
    },
    cards: [
      { q: 'State the Uniqueness Theorem for the Riemann integral.', a: 'If $f \\in \\mathcal{R}[a, b]$, the value of $\\int_a^b f$ is uniquely determined.', kind: 'state' },
      { q: 'How does the proof of uniqueness bound $|L_1 - L_2|$?', a: 'By adding and subtracting $S(f; \\dot{\\mathcal{P}})$ and applying the Triangle Inequality: $|L_1 - L_2| < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.1.4', bartle: '7.1.4', sec: '7.1', kind: 'example', tier: 'core',
    title: 'Non-integrability of the Dirichlet Function',
    oneLine: 'The Dirichlet function swings violently between 0 and 1 in every subinterval, failing to integrate.',
    statement: `The <b>Dirichlet function</b> $f: [0, 1] \\to \\mathbb{R}$, defined by:
      $$f(x) = \\begin{cases} 1 & \\text{if } x \\in \\mathbb{Q} \\\\ 0 & \\text{if } x \\notin \\mathbb{Q} \\end{cases}$$
      is <b>not Riemann integrable</b> on $[0, 1]$ ($f \\notin \\mathcal{R}[0, 1]$).`,
    intuition: `<p>In every interval, no matter how tiny ($[x_{i-1}, x_i]$ of width $10^{-100}$), the Density of Rationals (2.4.8) and Density of Irrationals (2.4.9) guarantee there are both rationals and irrationals inside!</p>
      <p>• If you choose all rational tags $t_i$, every $f(t_i) = 1$, so the Riemann sum is $\\sum 1 \\cdot \\Delta x_i = 1$.</p>
      <p>• If you choose all irrational tags $t_i$, every $f(t_i) = 0$, so the Riemann sum is $0$.</p>
      <p>Because the sum swings between $0$ and $1$ for arbitrarily fine partitions, it can never settle onto any single limit $L$.</p>`,
    needs: ['c.7.1.1', 'c.2.4.8', 'c.2.4.9'],
    traps: [
      `Dirichlet’s function is bounded ($0 \\le f(x) \\le 1$), yet it is not integrable! Boundedness is necessary, but NOT sufficient for integrability.`,
      `Do not confuse Dirichlet's function with Thomae's popcorn function: Thomae's function IS Riemann integrable (its integral is $0$), because its discontinuities form a set of measure zero.`
    ],
    proof: {
      idea: 'Show that for any $\\delta > 0$, tagged partitions with rational tags give sum 1, while tagged partitions with irrational tags give sum 0.',
      why: 'No number $L$ can satisfy $|1 - L| < 1/2$ and $|0 - L| < 1/2$ simultaneously.',
      rungs: [
        { why: 'Suppose for contradiction that $f \\in \\mathcal{R}[0, 1]$ with integral $L$. Set $\\varepsilon_0 = 1/2$.', m: '\\exists \\delta > 0 : \\|\\dot{\\mathcal{P}}\\| < \\delta \\implies |S(f; \\dot{\\mathcal{P}}) - L| < \\frac{1}{2}' },
        { why: 'Let $\\mathcal{P}$ be any partition of $[0, 1]$ with $\\|\\mathcal{P}\\| < \\delta$. By density of $\\mathbb{Q}$ (2.4.8), choose rational tags $t_i \\in \\mathbb{Q} \\cap [x_{i-1}, x_i]$ for all $i$.', m: 'S(f; \\dot{\\mathcal{P}}_{\\text{rat}}) = \\sum_{i=1}^n 1 \\cdot (x_i - x_{i-1}) = 1' },
        { why: 'By density of irrationals (2.4.9), choose irrational tags $s_i \\notin \\mathbb{Q} \\cap [x_{i-1}, x_i]$ for all $i$.', m: 'S(f; \\dot{\\mathcal{P}}_{\\text{irrat}}) = \\sum_{i=1}^n 0 \\cdot (x_i - x_{i-1}) = 0' },
        { why: 'Both tagged partitions have norm $< \\delta$, so both sums must be within $1/2$ of $L$.', m: '|1 - L| < \\frac{1}{2} \\quad \\text{and} \\quad |0 - L| < \\frac{1}{2}' },
        { why: 'Apply the Triangle Inequality: $1 = |1 - 0| \\le |1 - L| + |L - 0| < 1/2 + 1/2 = 1$, yielding $1 < 1$.', m: '1 < 1 \\implies\\Leftarrow' }
      ],
      ends: 'Contradiction! Therefore, the Dirichlet function is not Riemann integrable on $[0, 1]$.'
    },
    cards: [
      { q: 'Why is Dirichlet’s function not Riemann integrable on $[0, 1]$?', a: 'Because rational tags yield Riemann sum $1$ while irrational tags yield sum $0$ for arbitrarily fine partitions; the limit does not exist.', kind: 'state' },
      { q: 'Is boundedness of a function on $[a, b]$ sufficient to guarantee Riemann integrability?', a: 'No. Dirichlet’s function is bounded between $0$ and $1$, but is not Riemann integrable.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.1.5', bartle: '7.1.5', sec: '7.1', kind: 'theorem', tier: 'core',
    title: 'Linearity and Monotonicity of the Riemann Integral',
    oneLine: 'Integration is linear: integral of af + bg is a int f + b int g; if f <= g, then int f <= int g.',
    statement: `Let $f, g \\in \\mathcal{R}[a, b]$ and let $\\alpha, \\beta \\in \\mathbb{R}$. Then:
      <p>(a) <b>Linearity:</b> $(\\alpha f + \\beta g) \\in \\mathcal{R}[a, b]$, and:
      $$\\int_a^b (\\alpha f + \\beta g) = \\alpha \\int_a^b f + \\beta \\int_a^b g$$</p>
      <p>(b) <b>Positivity:</b> If $f(x) \\ge 0$ for all $x \\in [a, b]$, then $\\int_a^b f \\ge 0$.</p>
      <p>(c) <b>Monotonicity:</b> If $f(x) \\le g(x)$ for all $x \\in [a, b]$, then $\\int_a^b f \\le \\int_a^b g$.</p>`,
    intuition: `<p>In Class 12 calculus, we split integrals without thinking: $\\int (2x + 3\\sin x) = 2\\int x + 3\\int \\sin x$. In Real Analysis, this linearity comes directly from the algebraic properties of Riemann sums:</p>
      $$S(\\alpha f + \\beta g; \\dot{\\mathcal{P}}) = \\alpha S(f; \\dot{\\mathcal{P}}) + \\beta S(g; \\dot{\\mathcal{P}})$$
      <p>Because each Riemann sum is a linear combination of heights, taking limits preserves linearity perfectly! Likewise, if every rectangle of $f$ is shorter than the corresponding rectangle of $g$, the total sum is smaller.</p>`,
    needs: ['c.7.1.1', 'c.7.1.2'],
    traps: [
      `$\\int (fg) \\ne (\\int f)(\\int g)$! Integration does NOT distribute across products!`,
      `Strict inequality $f(x) < g(x)$ does NOT imply $\\int f < \\int g$ in general unless $f, g$ are continuous or differ significantly (though on intervals with $f < g$ continuous, $\\int f < \\int g$ holds).`
    ],
    proof: {
      idea: 'Write the Riemann sum for $\\alpha f + \\beta g$, decompose it linearly, and use the triangle inequality against $\\alpha \\int f + \\beta \\int g$.',
      why: 'Riemann sums are finite sums, which are strictly linear.',
      rungs: [
        { why: 'For any tagged partition $\\dot{\\mathcal{P}}$, write the Riemann sum of $\\alpha f + \\beta g$.', m: 'S(\\alpha f + \\beta g; \\dot{\\mathcal{P}}) = \\sum_{i=1}^n [\\alpha f(t_i) + \\beta g(t_i)](x_i - x_{i-1}) = \\alpha S(f; \\dot{\\mathcal{P}}) + \\beta S(g; \\dot{\\mathcal{P}})' },
        { why: 'Let $L_1 = \\int_a^b f$ and $L_2 = \\int_a^b g$. Given $\\varepsilon > 0$, choose $\\delta > 0$ such that for $\\|\\dot{\\mathcal{P}}\\| < \\delta$, $|S(f) - L_1| < \\frac{\\varepsilon}{2(|\\alpha| + 1)}$ and $|S(g) - L_2| < \\frac{\\varepsilon}{2(|\\beta| + 1)}$.', m: '|S(f) - L_1| < \\frac{\\varepsilon}{2(|\\alpha|+1)}, \\quad |S(g) - L_2| < \\frac{\\varepsilon}{2(|\\beta|+1)}' },
        { why: 'Combine the terms using the Triangle Inequality.', m: '|S(\\alpha f + \\beta g) - (\\alpha L_1 + \\beta L_2)| \\le |\\alpha| |S(f) - L_1| + |\\beta| |S(g) - L_2| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon' },
        { why: 'For monotonicity: if $f \\le g$, every term $f(t_i)(x_i - x_{i-1}) \\le g(t_i)(x_i - x_{i-1})$, so $S(f) \\le S(g)$. Taking limits preserves inequalities.', m: 'S(f; \\dot{\\mathcal{P}}) \\le S(g; \\dot{\\mathcal{P}}) \\implies \\int_a^b f \\le \\int_a^b g' }
      ],
      ends: 'Linearity and monotonicity of the Riemann integral are established.'
    },
    cards: [
      { q: 'State the linearity property of the Riemann integral.', a: '$\\int_a^b (\\alpha f + \\beta g) = \\alpha \\int_a^b f + \\beta \\int_a^b g$ for all $\\alpha, \\beta \\in \\mathbb{R}$ and $f, g \\in \\mathcal{R}[a, b]$.', kind: 'state' },
      { q: 'If $f(x) \\ge 0$ on $[a, b]$, what does monotonicity imply about $\\int_a^b f$?', a: '$\\int_a^b f \\ge 0$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.1.6', bartle: '7.1.6', sec: '7.1', kind: 'theorem', tier: 'core',
    title: 'Boundedness of Riemann Integrable Functions',
    oneLine: 'If a function is Riemann integrable on [a, b], it must be bounded on [a, b].',
    statement: `If $f: [a, b] \\to \\mathbb{R}$ is <b>Riemann integrable</b> on $[a, b]$, then $f$ is <b>bounded</b> on $[a, b]$.`,
    intuition: `<p>Why can't you Riemann integrate an unbounded function like $f(x) = 1/x$ on $(0, 1]$?</p>
      <p>Because in the Riemann sum $S(f; \\dot{\\mathcal{P}}) = \\sum f(t_i) \\Delta x_i$, you are free to pick the tag $t_i$ ANYWHERE in the slice. If $f$ is unbounded on some slice, you can choose $t_k$ where $f(t_k) = 10^{50}$, blowing the Riemann sum to infinity!</p>
      <p>The definition of integrability demands that ALL Riemann sums land within $\\varepsilon$ of $L$. A single unbounded slice shatters that requirement instantly.</p>`,
    needs: ['c.7.1.1', 'c.2.2.1'],
    traps: [
      `Do not confuse Riemann integrability with IMPROPER integrals: $\\int_0^1 \\frac{1}{\\sqrt{x}} dx = 2$ exists as an improper limit of integrals, but $1/\\sqrt{x}$ is NOT Riemann integrable on $[0, 1]$ in the proper sense!`,
      `Boundedness is a NECESSARY condition, not sufficient (e.g. Dirichlet function is bounded but not integrable).`
    ],
    proof: {
      idea: 'Assume $f$ is unbounded. Pick $\\delta > 0$ for $\\varepsilon = 1$. In any partition of norm $< \\delta$, some subinterval has unbounded $f$; choose a tag $t_k$ so large that $|S(f)| > |L| + 1$, yielding a contradiction.',
      why: 'If $f$ is unbounded on a subinterval $I_k$, the term $f(t_k)\\Delta x_k$ can be made larger than all other terms combined.',
      rungs: [
        { why: 'Suppose $f \\in \\mathcal{R}[a, b]$ with integral $L$. Choose $\\delta > 0$ such that for every tagged partition $\\dot{\\mathcal{P}}$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$, $|S(f; \\dot{\\mathcal{P}}) - L| < 1$.', m: '|S(f; \\dot{\\mathcal{P}})| < |L| + 1' },
        { why: 'Let $\\mathcal{P} = \\{x_0, \\ldots, x_n\\}$ be an untagged partition with $\\|\\mathcal{P}\\| < \\delta$. If $f$ were bounded on every subinterval $I_i = [x_{i-1}, x_i]$, $f$ would be bounded on $[a, b]$. Thus $f$ is unbounded on at least one subinterval $I_k$.', m: '\\exists k \\in \\{1, \\ldots, n\\} : \\sup_{x \\in I_k} |f(x)| = \\infty' },
        { why: 'Fix arbitrary tags $t_i$ for all other subintervals $i \\ne k$. Let $S^* = \\sum_{i \\ne k} f(t_i)(x_i - x_{i-1})$.', m: 'S(f; \\dot{\\mathcal{P}}) = S^* + f(t_k)(x_k - x_{k-1})' },
        { why: 'Since $f$ is unbounded on $I_k$, choose $t_k \\in I_k$ such that $|f(t_k)| > \\frac{|L| + 1 + |S^*|}{x_k - x_{k-1}}$.', m: '|f(t_k)|(x_k - x_{k-1}) > |L| + 1 + |S^*|' },
        { why: 'By the reverse triangle inequality, $|S(f; \\dot{\\mathcal{P}})| \\ge |f(t_k)|(x_k - x_{k-1}) - |S^*| > |L| + 1$, contradicting the bound from step 1.', m: '|S(f; \\dot{\\mathcal{P}})| > |L| + 1 \\implies\\Leftarrow' }
      ],
      ends: 'Contradiction! Therefore, every Riemann integrable function must be bounded.'
    },
    cards: [
      { q: 'Is every Riemann integrable function on $[a, b]$ necessarily bounded?', a: 'Yes. If $f$ were unbounded, tags could be chosen to make Riemann sums arbitrarily large, contradicting convergence.', kind: 'state' },
      { q: 'Is $f(x) = 1/x$ for $x \\in (0, 1]$ with $f(0) = 0$ Riemann integrable on $[0, 1]$?', a: 'No, because $f$ is unbounded on $[0, 1]$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.2.1', bartle: '7.2.1', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'The Cauchy Criterion for Riemann Integrability',
    oneLine: 'f is integrable iff two arbitrary tagged partitions of small mesh produce Riemann sums arbitrarily close together.',
    statement: `A function $f: [a, b] \\to \\mathbb{R}$ is <b>Riemann integrable</b> ($f \\in \\mathcal{R}[a, b]$) if and only if:
      <p>For every $\\varepsilon > 0$, there exists $\\eta_\\varepsilon > 0$ such that for any two tagged partitions $\\dot{\\mathcal{P}}$ and $\\dot{\\mathcal{Q}}$ of $[a, b]$ with $\\|\\dot{\\mathcal{P}}\\| < \\eta_\\varepsilon$ and $\\|\\dot{\\mathcal{Q}}\\| < \\eta_\\varepsilon$:
      $$\\left| S(f; \\dot{\\mathcal{P}}) - S(f; \\dot{\\mathcal{Q}}) \\right| < \\varepsilon$$</p>`,
    intuition: `<p>Just like the Cauchy Criterion for sequences (3.5.5) freed us from having to guess the limit $x$, the Cauchy Criterion for integrals frees us from having to guess the value of $\\int_a^b f$!</p>
      <p>To prove $f$ is integrable, you don't need to know the answer. You only need to prove that any two independent Riemann approximations agree with each other to within $\\varepsilon$ once the slices are fine enough.</p>`,
    needs: ['c.7.1.1', 'c.3.5.5'],
    traps: [
      `The partitions $\\dot{\\mathcal{P}}$ and $\\dot{\\mathcal{Q}}$ can have completely DIFFERENT partition points and completely DIFFERENT tags! They only need to satisfy mesh $< \\eta_\\varepsilon$.`,
      `This is the primary theoretical engine used to prove the Squeeze Theorem (7.2.3) and the Additivity Theorem (7.2.9).`
    ],
    proof: {
      idea: '(=>) If integral $L$ exists, use triangle inequality with $L$ in the middle. (<=) Construct a sequence of partitions with mesh -> 0; their Riemann sums form a Cauchy sequence of real numbers, which converges to $L$.',
      why: 'Completeness of $\\mathbb{R}$ (Theorem 3.5.5) guarantees that a Cauchy sequence of Riemann sums has a real limit $L$.',
      rungs: [
        { why: '(=>) Assume $f \\in \\mathcal{R}[a, b]$ with integral $L$. Choose $\\delta > 0$ for $\\varepsilon/2$. For $\\|\\dot{\\mathcal{P}}\\|, \\|\\dot{\\mathcal{Q}}\\| < \\delta$, both $|S(f; \\dot{\\mathcal{P}}) - L| < \\varepsilon/2$ and $|S(f; \\dot{\\mathcal{Q}}) - L| < \\varepsilon/2$.', m: '|S(f; \\dot{\\mathcal{P}}) - S(f; \\dot{\\mathcal{Q}})| \\le |S(f; \\dot{\\mathcal{P}}) - L| + |L - S(f; \\dot{\\mathcal{Q}})| < \\frac{\\varepsilon}{2} + \\frac{\\varepsilon}{2} = \\varepsilon' },
        { why: '(<=) Assume the Cauchy condition. For each $n \\in \\mathbb{N}$, choose $\\delta_n > 0$ corresponding to $\\varepsilon = 1/n$, with $\\delta_{n+1} \\le \\delta_n$.', m: '\\|\\dot{\\mathcal{P}}\\|, \\|\\dot{\\mathcal{Q}}\\| < \\delta_n \\implies |S(f; \\dot{\\mathcal{P}}) - S(f; \\dot{\\mathcal{Q}})| < \\frac{1}{n}' },
        { why: 'Choose a sequence of tagged partitions $\\dot{\\mathcal{P}}_n$ with $\\|\\dot{\\mathcal{P}}_n\\| < \\delta_n$. For $m > n$, both norms are $< \\delta_n$.', m: '|S(f; \\dot{\\mathcal{P}}_n) - S(f; \\dot{\\mathcal{P}}_m)| < \\frac{1}{n} \\quad \\forall m > n' },
        { why: 'Thus $(S(f; \\dot{\\mathcal{P}}_n))$ is a Cauchy sequence of real numbers. By completeness of $\\mathbb{R}$ (3.5.5), it converges to some limit $L \\in \\mathbb{R}$.', m: 'L = \\lim_{n\\to\\infty} S(f; \\dot{\\mathcal{P}}_n)' },
        { why: 'For any tagged partition $\\dot{\\mathcal{Q}}$ with $\\|\\dot{\\mathcal{Q}}\\| < \\delta_K$ (where $1/K < \\varepsilon/2$), $|S(f; \\dot{\\mathcal{Q}}) - L| \\le |S(f; \\dot{\\mathcal{Q}}) - S(f; \\dot{\\mathcal{P}}_K)| + |S(f; \\dot{\\mathcal{P}}_K) - L| < \\varepsilon$.', m: '|S(f; \\dot{\\mathcal{Q}}) - L| < \\varepsilon' }
      ],
      ends: 'Hence $f \\in \\mathcal{R}[a, b]$ with integral $L$, proving the Cauchy Criterion.'
    },
    cards: [
      { q: 'State the Cauchy Criterion for Riemann integrability.', a: '$f \\in \\mathcal{R}[a, b]$ iff $\\forall \\varepsilon > 0$, $\\exists \\eta > 0$ such that $\\|\\dot{\\mathcal{P}}\\|, \\|\\dot{\\mathcal{Q}}\\| < \\eta \\implies |S(f; \\dot{\\mathcal{P}}) - S(f; \\dot{\\mathcal{Q}})| < \\varepsilon$.', kind: 'state' },
      { q: 'What is the main theoretical benefit of the Cauchy Criterion for integrability?', a: 'It allows proving integrability without needing to know or guess the value of the integral beforehand.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.2.3', bartle: '7.2.3', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'The Squeeze Theorem for Riemann Integrability',
    oneLine: 'If f is bracketed between two integrable functions whose integrals are within ε, then f is integrable.',
    statement: `Let $f: [a, b] \\to \\mathbb{R}$. Then $f \\in \\mathcal{R}[a, b]$ if and only if:
      <p>For every $\\varepsilon > 0$, there exist functions $\\alpha_\\varepsilon, \\omega_\\varepsilon \\in \\mathcal{R}[a, b]$ such that:
      $$\\alpha_\\varepsilon(x) \\le f(x) \\le \\omega_\\varepsilon(x) \\quad \\text{for all } x \\in [a, b]$$
      and:
      $$\\int_a^b (\\omega_\\varepsilon - \\alpha_\\varepsilon) < \\varepsilon$$</p>`,
    intuition: `<p>This is the workhorse of integration theory! Proving integrability directly from definition is painful because tags are arbitrary.</p>
      <p>The Squeeze Theorem says: trap $f$ between a "floor" $\\alpha_\\varepsilon$ and a "ceiling" $\\omega_\\varepsilon$ (like step functions). If the area between the ceiling and floor can be made smaller than $\\varepsilon$, then $f$ is dragged into integrability automatically!</p>`,
    needs: ['c.7.2.1', 'c.7.1.5'],
    traps: [
      `Both bounding functions $\\alpha_\\varepsilon$ and $\\omega_\\varepsilon$ MUST themselves be Riemann integrable!`,
      `The condition is if and only if: if $f$ is integrable, you can trivially choose $\\alpha_\\varepsilon = \\omega_\\varepsilon = f$.`
    ],
    proof: {
      idea: '(=>) Trivial: take $\\alpha_\\varepsilon = \\omega_\\varepsilon = f$. (<=) Use the Cauchy Criterion (7.2.1) by bounding the gap between two Riemann sums of $f$ by the integrals of $\\omega_\\varepsilon$ and $\\alpha_\\varepsilon$.',
      why: 'Riemann sums of $f$ are trapped between Riemann sums of $\\alpha_\\varepsilon$ and $\\omega_\\varepsilon$.',
      rungs: [
        { why: '(=>) If $f \\in \\mathcal{R}[a, b]$, choose $\\alpha_\\varepsilon = \\omega_\\varepsilon = f$. Then $\\int_a^b (\\omega_\\varepsilon - \\alpha_\\varepsilon) = 0 < \\varepsilon$.', m: '\\alpha_\\varepsilon = \\omega_\\varepsilon = f' },
        { why: '(<=) Let $\\varepsilon > 0$. Since $\\alpha_\\varepsilon, \\omega_\\varepsilon \\in \\mathcal{R}[a, b]$, choose $\\delta > 0$ such that for $\\|\\dot{\\mathcal{P}}\\| < \\delta$, $|S(\\alpha_\\varepsilon; \\dot{\\mathcal{P}}) - \\int \\alpha_\\varepsilon| < \\varepsilon$ and $|S(\\omega_\\varepsilon; \\dot{\\mathcal{P}}) - \\int \\omega_\\varepsilon| < \\varepsilon$.', m: '\\int_a^b \\alpha_\\varepsilon - \\varepsilon < S(\\alpha_\\varepsilon; \\dot{\\mathcal{P}}) \\le S(f; \\dot{\\mathcal{P}}) \\le S(\\omega_\\varepsilon; \\dot{\\mathcal{P}}) < \\int_a^b \\omega_\\varepsilon + \\varepsilon' },
        { why: 'For any two tagged partitions $\\dot{\\mathcal{P}}, \\dot{\\mathcal{Q}}$ with norm $< \\delta$, both $S(f; \\dot{\\mathcal{P}})$ and $S(f; \\dot{\\mathcal{Q}})$ lie in $(\\int \\alpha_\\varepsilon - \\varepsilon, \\int \\omega_\\varepsilon + \\varepsilon)$.', m: '|S(f; \\dot{\\mathcal{P}}) - S(f; \\dot{\\mathcal{Q}})| < \\int_a^b \\omega_\\varepsilon - \\int_a^b \\alpha_\\varepsilon + 2\\varepsilon' },
        { why: 'Substitute the hypothesis $\\int_a^b (\\omega_\\varepsilon - \\alpha_\\varepsilon) < \\varepsilon$.', m: '|S(f; \\dot{\\mathcal{P}}) - S(f; \\dot{\\mathcal{Q}})| < \\varepsilon + 2\\varepsilon = 3\\varepsilon' },
        { why: 'By the Cauchy Criterion (7.2.1), $f \\in \\mathcal{R}[a, b]$.', m: 'f \\in \\mathcal{R}[a, b]' }
      ],
      ends: 'The Squeeze Theorem for Riemann integrability is established.'
    },
    cards: [
      { q: 'State the Squeeze Theorem for Riemann Integrability.', a: '$f \\in \\mathcal{R}[a, b]$ iff $\\forall \\varepsilon > 0$, $\\exists \\alpha_\\varepsilon, \\omega_\\varepsilon \\in \\mathcal{R}[a, b]$ with $\\alpha_\\varepsilon \\le f \\le \\omega_\\varepsilon$ and $\\int_a^b (\\omega_\\varepsilon - \\alpha_\\varepsilon) < \\varepsilon$.', kind: 'state' },
      { q: 'Which criterion is used to prove the Squeeze Theorem?', a: 'The Cauchy Criterion for Riemann Integrability (7.2.1).', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.2.5', bartle: '7.2.5', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Integrability of Step Functions',
    oneLine: 'Step functions are piecewise constant and are always Riemann integrable; their integral is the sum of subinterval areas.',
    statement: `If $\\varphi: [a, b] \\to \\mathbb{R}$ is a <b>step function</b>, then $\\varphi \\in \\mathcal{R}[a, b]$.
      <p>If $\\varphi(x) = c_i$ on subintervals $J_i = (x_{i-1}, x_i)$ for a partition $a = x_0 < x_1 < \\cdots < x_n = b$, then:
      $$\\int_a^b \\varphi = \\sum_{i=1}^n c_i (x_i - x_{i-1})$$</p>`,
    intuition: `<p>A step function looks like a staircase: flat horizontal treads with jump drops at the edges. Since each step is just a flat constant rectangle, its exact area is simply $\\text{height} \\times \\text{width} = c_i (x_i - x_{i-1})$.</p>
      <p>Because any step function is a finite linear combination of indicator functions of intervals, linearity of the integral guarantees integrability.</p>`,
    needs: ['c.7.1.5'],
    traps: [
      `A step function only assumes a FINITE number of distinct values, each on a subinterval. An infinite staircase (like $[1/x]$ near $0$) is NOT a step function on $[0, 1]$.`,
      `Values at the boundary points $x_i$ do not affect the value of the integral (by Theorem 7.1.3).`
    ],
    proof: {
      idea: 'Express $\\varphi$ as a linear combination of elementary step functions (indicators of intervals), and apply linearity of the integral.',
      why: 'The indicator of an interval $[c, d]$ has integral $d - c$; finite sums of integrable functions are integrable.',
      rungs: [
        { why: 'Let $J$ be any subinterval of $[a, b]$ with endpoints $c < d$. Let $\\varphi_J$ be the indicator function: $\\varphi_J(x) = 1$ on $J$ and $0$ elsewhere.', m: '\\varphi_J(x) = \\begin{cases} 1 & x \\in J \\\\ 0 & x \\notin J \\end{cases}' },
        { why: 'For any tagged partition $\\dot{\\mathcal{P}}$ with mesh $\\|\\dot{\\mathcal{P}}\\| < \\delta$, Riemann sums $S(\\varphi_J; \\dot{\\mathcal{P}})$ differ from $d - c$ by at most $2\\|\\dot{\\mathcal{P}}\\| < 2\\delta$.', m: '|S(\\varphi_J; \\dot{\\mathcal{P}}) - (d - c)| \\le 2\\delta < \\varepsilon \\implies \\int_a^b \\varphi_J = d - c' },
        { why: 'Every step function $\\varphi$ is a finite linear combination of elementary step functions: $\\varphi = \\sum_{j=1}^m k_j \\varphi_{J_j}$.', m: '\\varphi = \\sum_{j=1}^m k_j \\varphi_{J_j}' },
        { why: 'Apply Linearity of the Integral (Theorem 7.1.5) to the finite sum.', m: '\\int_a^b \\varphi = \\sum_{j=1}^m k_j \\int_a^b \\varphi_{J_j} = \\sum_{j=1}^m k_j (d_j - c_j)' }
      ],
      ends: 'Step functions are Riemann integrable and their integrals equal the sum of step rectangular areas.'
    },
    cards: [
      { q: 'Is every step function on $[a, b]$ Riemann integrable?', a: 'Yes, every step function on $[a, b]$ is Riemann integrable.', kind: 'state' },
      { q: 'How is the integral of a step function calculated?', a: 'As the sum of the areas of the individual constant steps: $\\sum c_i (x_i - x_{i-1})$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.2.7', bartle: '7.2.7', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Integrability of Continuous Functions',
    oneLine: 'Every continuous function on a closed bounded interval is Riemann integrable.',
    statement: `If $f: [a, b] \\to \\mathbb{R}$ is <b>continuous</b> on $[a, b]$, then $f \\in \\mathcal{R}[a, b]$.`,
    intuition: `<p>This is the cornerstone theorem of elementary calculus! Why is EVERY continuous function integrable?</p>
      <p>By the Uniform Continuity Theorem (5.4.3), on a closed bounded interval $[a, b]$, $f$ cannot have wild local spikes. If you slice the interval finely enough (mesh $< \\delta$), the gap between the maximum and minimum values in every single slice is less than $\\varepsilon / (b - a)$.</p>
      <p>Building floor and ceiling step functions from these min/max values sandwiches $f$ tightly, satisfying the Squeeze Theorem!</p>`,
    needs: ['c.5.4.3', 'c.5.3.4', 'c.7.2.3'],
    traps: [
      `Continuity on an OPEN interval $(a, b)$ does NOT guarantee integrability (e.g. $1/x$ on $(0, 1)$ is continuous but unbounded and not integrable). The interval MUST be closed and bounded $[a, b]$.`
    ],
    proof: {
      idea: 'Use Uniform Continuity (5.4.3) to make $M_i - m_i < \\varepsilon/(b - a)$ on every subinterval, then apply the Squeeze Theorem with min/max step functions.',
      why: 'Uniform continuity ensures that one single $\\delta$ controls oscillation across all slices simultaneously.',
      rungs: [
        { why: 'By Theorem 5.4.3, $f$ is uniformly continuous on $[a, b]$. Given $\\varepsilon > 0$, choose $\\delta > 0$ such that $|u - v| < \\delta \\implies |f(u) - f(v)| < \\frac{\\varepsilon}{b - a}$.', m: '|u - v| < \\delta \\implies |f(u) - f(v)| < \\frac{\\varepsilon}{b - a}' },
        { why: 'Let $\\mathcal{P} = \\{x_0, \\ldots, x_n\\}$ be a partition with mesh $\\|\\mathcal{P}\\| < \\delta$. By the Maximum-Minimum Theorem (5.3.4), $f$ attains a min $f(u_i)$ and max $f(v_i)$ on each $I_i$.', m: 'm_i = f(u_i), \\quad M_i = f(v_i) \\quad \\text{with } u_i, v_i \\in I_i' },
        { why: 'Since $|u_i - v_i| \\le \\|\\mathcal{P}\\| < \\delta$, the oscillation satisfies $M_i - m_i < \\frac{\\varepsilon}{b - a}$ for all $i$.', m: 'M_i - m_i < \\frac{\\varepsilon}{b - a} \\quad \\forall i = 1, \\ldots, n' },
        { why: 'Define step functions $\\alpha_\\varepsilon(x) = m_i$ and $\\omega_\\varepsilon(x) = M_i$ on each $(x_{i-1}, x_i)$. Then $\\alpha_\\varepsilon \\le f \\le \\omega_\\varepsilon$.', m: '\\int_a^b (\\omega_\\varepsilon - \\alpha_\\varepsilon) = \\sum_{i=1}^n (M_i - m_i)(x_i - x_{i-1}) < \\frac{\\varepsilon}{b - a} \\sum_{i=1}^n (x_i - x_{i-1}) = \\varepsilon' },
        { why: 'By the Squeeze Theorem (7.2.3), $f$ is Riemann integrable.', m: 'f \\in \\mathcal{R}[a, b]' }
      ],
      ends: 'Every continuous function on $[a, b]$ is Riemann integrable.'
    },
    cards: [
      { q: 'State the theorem on the integrability of continuous functions.', a: 'If $f$ is continuous on a closed bounded interval $[a, b]$, then $f \\in \\mathcal{R}[a, b]$.', kind: 'state' },
      { q: 'Which theorem on continuity is the crucial engine in proving continuous functions are Riemann integrable?', a: 'The Uniform Continuity Theorem (5.4.3).', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.2.8', bartle: '7.2.8', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Integrability of Monotone Functions',
    oneLine: 'Every monotone function on [a, b] is Riemann integrable, even with countably many jump discontinuities.',
    statement: `If $f: [a, b] \\to \\mathbb{R}$ is <b>monotone</b> (increasing or decreasing) on $[a, b]$, then $f \\in \\mathcal{R}[a, b]$.`,
    intuition: `<p>Monotone functions do not have to be continuous! They can have infinitely many jump discontinuities (like a staircase of infinitely many steps).</p>
      <p>Yet they are ALWAYS Riemann integrable! Why? Because on each subinterval, the minimum is at the left end and maximum is at the right end. When you sum $(M_i - m_i) \\Delta x$, the terms <b>telescope</b>: the total height difference is just $f(b) - f(a)$!</p>
      <p>Multiplying by mesh $(b - a)/n$ crushes the gap to zero as $n \\to \\infty$.</p>`,
    needs: ['c.7.2.3'],
    traps: [
      `A monotone function can be discontinuous at countably many points! Monotonicity does NOT require continuity to guarantee integrability.`,
      `If $f(b) = f(a)$, $f$ is constant, so its integrability is trivial.`
    ],
    proof: {
      idea: 'Partition $[a, b]$ into $n$ equal subintervals; telescoping sums bound the difference between upper and lower step functions by $\\frac{b-a}{n}(f(b) - f(a))$.',
      why: 'For an increasing function on $[x_{i-1}, x_i]$, $m_i = f(x_{i-1})$ and $M_i = f(x_i)$, causing all intermediate terms to cancel in the sum.',
      rungs: [
        { why: 'Assume $f$ is increasing on $[a, b]$. Divide $[a, b]$ into $n$ equal subintervals of length $h = (b - a)/n$.', m: 'x_i - x_{i-1} = \\frac{b - a}{n} \\quad \\forall i = 1, \\ldots, n' },
        { why: 'On $I_i = [x_{i-1}, x_i]$, the infimum is $f(x_{i-1})$ and supremum is $f(x_i)$. Define step functions $\\alpha_n(x) = f(x_{i-1})$ and $\\omega_n(x) = f(x_i)$.', m: '\\alpha_n(x) \\le f(x) \\le \\omega_n(x)' },
        { why: 'Integrate $\\omega_n - \\alpha_n$: factor out the common width $(b - a)/n$.', m: '\\int_a^b (\\omega_n - \\alpha_n) = \\frac{b - a}{n} \\sum_{i=1}^n [f(x_i) - f(x_{i-1})]' },
        { why: 'The sum telescopes completely: all intermediate terms cancel!', m: '\\sum_{i=1}^n [f(x_i) - f(x_{i-1})] = f(x_n) - f(x_0) = f(b) - f(a)' },
        { why: 'Given $\\varepsilon > 0$, choose $n > \\frac{(b - a)(f(b) - f(a))}{\\varepsilon}$. Then $\\int_a^b (\\omega_n - \\alpha_n) < \\varepsilon$, and the Squeeze Theorem (7.2.3) applies.', m: '\\int_a^b (\\omega_n - \\alpha_n) = \\frac{(b - a)(f(b) - f(a))}{n} < \\varepsilon' }
      ],
      ends: 'Every monotone function on $[a, b]$ is Riemann integrable.'
    },
    cards: [
      { q: 'Can a function with infinitely many jump discontinuities be Riemann integrable?', a: 'Yes. Any monotone function (even with countably many discontinuities) is Riemann integrable.', kind: 'apply' },
      { q: 'What algebraic mechanism makes the Squeeze Theorem error shrink for monotone functions?', a: 'The telescoping sum $\\sum_{i=1}^n (f(x_i) - f(x_{i-1})) = f(b) - f(a)$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.2.9', bartle: '7.2.9', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Additivity of the Integral over Subintervals',
    oneLine: 'The area from a to b equals the area from a to c plus the area from c to b.',
    statement: `Let $f: [a, b] \\to \\mathbb{R}$ and let $c \\in (a, b)$.
      <p>Then $f \\in \\mathcal{R}[a, b]$ if and only if $f \\in \\mathcal{R}[a, c]$ and $f \\in \\mathcal{R}[c, b]$. In this case:
      $$\\int_a^b f = \\int_a^c f + \\int_c^b f$$</p>`,
    intuition: `<p>Geometrically, slicing a region into two side-by-side plots at $x = c$ doesn't change the total area. The area from $a$ to $c$ and the area from $c$ to $b$ add up seamlessly to the area from $a$ to $b$.</p>
      <p>This allows us to integrate piecewise functions by integrating each continuous piece separately and adding the results together!</p>`,
    needs: ['c.7.1.1', 'c.7.2.1'],
    traps: [
      `Forgetting that the additivity formula also works when $c$ is outside $[a, b]$, provided we adopt the standard convention $\\int_b^a f = -\\int_a^b f$ and $\\int_a^a f = 0$.`
    ],
    proof: {
      idea: 'If $c$ is a partition point, the Riemann sum splits exactly $S(f; \\dot{\\mathcal{P}}) = S_1 + S_2$. If $c$ falls inside a subinterval, the discrepancy is bounded by $2M \\|\\dot{\\mathcal{P}}\\| \\to 0$.',
      why: 'Riemann sums over the union differ from the sum of Riemann sums over the pieces by at most the tag contribution of the single slice containing $c$.',
      rungs: [
        { why: 'Let $L_1 = \\int_a^c f$ and $L_2 = \\int_c^b f$. Let $M$ be a bound for $|f|$ on $[a, b]$. Given $\\varepsilon > 0$, choose $\\delta > 0$ with $\\delta < \\frac{\\varepsilon}{6M}$ such that subinterval sums are within $\\varepsilon/3$ of $L_1, L_2$.', m: '\\|\\dot{\\mathcal{P}}_1\\| < \\delta \\implies |S(f_1) - L_1| < \\frac{\\varepsilon}{3}, \\quad \\|\\dot{\\mathcal{P}}_2\\| < \\delta \\implies |S(f_2) - L_2| < \\frac{\\varepsilon}{3}' },
        { why: 'Let $\\dot{\\mathcal{P}}$ be a tagged partition of $[a, b]$ with $\\|\\dot{\\mathcal{P}}\\| < \\delta$. If $c$ is a partition point, $\\dot{\\mathcal{P}}$ splits into $\\dot{\\mathcal{P}}_1$ and $\\dot{\\mathcal{P}}_2$, and $S(f; \\dot{\\mathcal{P}}) = S(f_1; \\dot{\\mathcal{P}}_1) + S(f_2; \\dot{\\mathcal{P}}_2)$.', m: '|S(f; \\dot{\\mathcal{P}}) - (L_1 + L_2)| \\le |S(f_1) - L_1| + |S(f_2) - L_2| < \\frac{2\\varepsilon}{3} < \\varepsilon' },
        { why: 'If $c$ is inside a subinterval $(x_{k-1}, x_k)$, insert $c$ with tag $c$ into both $[x_{k-1}, c]$ and $[c, x_k]$ to form partitions $\\dot{\\mathcal{Q}}_1, \\dot{\\mathcal{Q}}_2$.', m: '|S(f; \\dot{\\mathcal{P}}) - S(f_1; \\dot{\\mathcal{Q}}_1) - S(f_2; \\dot{\\mathcal{Q}}_2)| = |f(t_k) - f(c)|(x_k - x_{k-1}) \\le 2M \\|\\dot{\\mathcal{P}}\\| < \\frac{\\varepsilon}{3}' },
        { why: 'Combine the triangle inequality terms: $\\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$.', m: '|S(f; \\dot{\\mathcal{P}}) - (L_1 + L_2)| < \\varepsilon' }
      ],
      ends: 'Therefore $f \\in \\mathcal{R}[a, b]$ and $\\int_a^b f = \\int_a^c f + \\int_c^b f$.'
    },
    cards: [
      { q: 'State the interval additivity property of the Riemann integral.', a: '$\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c$ between $a$ and $b$.', kind: 'state' },
      { q: 'What is the convention for $\\int_b^a f$ when $a < b$?', a: '$\\int_b^a f = -\\int_a^b f$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.2.10', bartle: '7.2.10', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Integrability of Absolute Value and Triangle Inequality for Integrals',
    oneLine: 'If f is integrable, then |f| is integrable and |∫ f| <= ∫ |f|.',
    statement: `If $f \\in \\mathcal{R}[a, b]$, then the absolute value function $|f|$ belongs to $\\mathcal{R}[a, b]$, and:
      $$\\left| \\int_a^b f(x) \\, dx \\right| \\le \\int_a^b |f(x)| \\, dx$$`,
    intuition: `<p>This is the continuous version of the Triangle Inequality $|a + b| \\le |a| + |b|$!</p>
      <p>When you integrate $f$, positive and negative regions cancel out (like waves destructive interference), reducing the total net area. But when you integrate $|f|$, all areas are made strictly positive, so the total area can only stay the same or grow larger!</p>`,
    needs: ['c.7.1.1', 'c.7.2.3', 'c.2.2.1'],
    traps: [
      `The converse is FALSE! Just because $|f|$ is integrable does NOT mean $f$ is integrable!`,
      `Classic Counterexample: $f(x) = 1$ for $x \\in \\mathbb{Q}$ and $-1$ for $x \\notin \\mathbb{Q}$. Then $|f(x)| = 1$ constantly (which is integrable with integral $b - a$), but $f$ is Dirichlet-like and NOT integrable!`
    ],
    proof: {
      idea: 'Use the reverse triangle inequality ||f(u)| - |f(v)|| <= |f(u) - f(v)| to bound the oscillation of |f| by that of f, then apply the Squeeze Theorem.',
      why: 'Taking absolute values can only decrease or preserve distances, never increase them.',
      rungs: [
        { why: 'By the reverse triangle inequality (2.2.1), for any $u, v \\in [a, b]$, $||f(u)| - |f(v)|| \\le |f(u) - f(v)|$.', m: '||f(u)| - |f(v)|| \\le |f(u) - f(v)|' },
        { why: 'Taking supremum over subinterval $I_i$, the oscillation of $|f|$ is bounded by the oscillation of $f$:', m: 'M_i(|f|) - m_i(|f|) \\le M_i(f) - m_i(f)' },
        { why: 'Multiply by subinterval widths: $U(|f|, \\mathcal{P}) - L(|f|, \\mathcal{P}) \\le U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < \\varepsilon$. By the Squeeze Theorem (7.2.3), $|f| \\in \\mathcal{R}[a, b]$.', m: '|f| \\in \\mathcal{R}[a, b]' },
        { why: 'Since $-|f(x)| \\le f(x) \\le |f(x)|$, apply Monotonicity of Integrals (Theorem 7.1.5).', m: '-\\int_a^b |f| \\le \\int_a^b f \\le \\int_a^b |f|' },
        { why: 'Translate this double inequality into absolute value notation.', m: '\\left| \\int_a^b f \\right| \\le \\int_a^b |f|' }
      ],
      ends: 'Therefore $|f| \\in \\mathcal{R}[a, b]$ and $|\\int_a^b f| \\le \\int_a^b |f|$.'
    },
    cards: [
      { q: 'State the Triangle Inequality for integrals.', a: '$\\left|\\int_a^b f\\right| \\le \\int_a^b |f|$.', kind: 'state' },
      { q: 'Does $|f| \\in \\mathcal{R}[a, b]$ imply $f \\in \\mathcal{R}[a, b]$?', a: 'No! If $f(x) = 1$ on rationals and $-1$ on irrationals, $|f| = 1$ is integrable, but $f$ is not.', kind: 'trap' }
    ]
  },

  {
    id: 'c.7.3.1', bartle: '7.3.1', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Fundamental Theorem of Calculus (First Form: Evaluation of Integrals)',
    oneLine: 'If f has an antiderivative F on [a, b], the integral of f is simply F(b) - F(a).',
    statement: `Suppose there is a finite set $E \\subset [a, b]$ and functions $f, F: [a, b] \\to \\mathbb{R}$ such that:
      <p>(a) $F$ is <b>continuous</b> on $[a, b]$,</p>
      <p>(b) $F'(x) = f(x)$ for all $x \\in [a, b] \\setminus E$,</p>
      <p>(c) $f \\in \\mathcal{R}[a, b]$.</p>
      <p>Then:
      $$\\int_a^b f(x) \\, dx = F(b) - F(a)$$</p>`,
    intuition: `<p>This is the famous Newton-Leibniz formula that every Class 12 student uses daily: $\\int_a^b f = [F(x)]_a^b = F(b) - F(a)$.</p>
      <p>Instead of struggling with thousands of tiny Riemann rectangles and taking limits of sums, you simply look for an antiderivative $F$ whose derivative gives $f$, and subtract the endpoint values! It links the accumulation of rate of change back to the net change of the function.</p>`,
    needs: ['c.7.1.1', 'c.6.2.4'],
    traps: [
      `$F'(x) = f(x)$ must hold for ALL points except at most a finite set. If $F$ is discontinuous inside $[a, b]$, you cannot blindly apply the formula (e.g. $\\int_{-1}^1 \\frac{1}{x^2}\\,dx \\ne [-1/x]_{-1}^1 = -2$, which is nonsense!).`,
      `$f$ must be Riemann integrable on $[a, b]$.`
    ],
    proof: {
      idea: 'Apply Lagrange MVT on each subinterval $[x_{i-1}, x_i]$ to write $F(x_i) - F(x_{i-1}) = F\'(u_i)(x_i - x_{i-1}) = f(u_i)(x_i - x_{i-1})$, turning $F(b) - F(a)$ into a Riemann sum.',
      why: 'Telescoping sum of $F$ differences equals an exact Riemann sum of $f$ for suitable tags $u_i$.',
      rungs: [
        { why: 'Assume $E = \\emptyset$. Let $\\varepsilon > 0$. Since $f \\in \\mathcal{R}[a, b]$, choose $\\delta > 0$ such that $\\|\\dot{\\mathcal{P}}\\| < \\delta \\implies |S(f; \\dot{\\mathcal{P}}) - \\int_a^b f| < \\varepsilon$.', m: '|S(f; \\dot{\\mathcal{P}}) - \\int_a^b f| < \\varepsilon' },
        { why: 'Let $\\mathcal{P} = \\{x_0, \\ldots, x_n\\}$ have mesh $< \\delta$. By Lagrange MVT (6.2.4), on each $[x_{i-1}, x_i]$, there exists $u_i \\in (x_{i-1}, x_i)$ with $F(x_i) - F(x_{i-1}) = F\'(u_i)(x_i - x_{i-1})$.', m: 'F(x_i) - F(x_{i-1}) = f(u_i)(x_i - x_{i-1})' },
        { why: 'Sum over all subintervals: the left side telescopes to $F(b) - F(a)$.', m: 'F(b) - F(a) = \\sum_{i=1}^n [F(x_i) - F(x_{i-1})] = \\sum_{i=1}^n f(u_i)(x_i - x_{i-1})' },
        { why: 'Notice that $\\sum f(u_i)(x_i - x_{i-1})$ is precisely the Riemann sum $S(f; \\dot{\\mathcal{P}}_u)$ with tags $u_i$.', m: 'F(b) - F(a) = S(f; \\dot{\\mathcal{P}}_u)' },
        { why: 'Since $\\|\\dot{\\mathcal{P}}_u\\| < \\delta$, substitute into the integrability bound: $|F(b) - F(a) - \\int_a^b f| < \\varepsilon$. Since $\\varepsilon > 0$ is arbitrary, equality holds.', m: '\\int_a^b f = F(b) - F(a)' }
      ],
      ends: 'The First Form of the Fundamental Theorem of Calculus is proved.'
    },
    cards: [
      { q: 'State the Fundamental Theorem of Calculus (First Form).', a: 'If $F$ is continuous on $[a, b]$, $F\'(x) = f(x)$ except on a finite set, and $f \\in \\mathcal{R}[a, b]$, then $\\int_a^b f = F(b) - F(a)$.', kind: 'state' },
      { q: 'Why does $\\int_{-1}^1 \\dfrac{1}{x} dx = [\\ln|x|]_{-1}^1 = 0$ fail?', a: 'Because $1/x$ is unbounded at $0$ and not Riemann integrable on $[-1, 1]$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.3.4', bartle: '7.3.4', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'First Mean Value Theorem for Integrals',
    oneLine: 'The average height of a continuous curve is attained at some point c in [a, b]: int_a^b f = f(c)(b - a).',
    statement: `If $f: [a, b] \\to \\mathbb{R}$ is <b>continuous</b> on $[a, b]$, then there exists at least one point $c \\in [a, b]$ such that:
      $$\\int_a^b f(x) \\, dx = f(c)(b - a) \\quad \\iff \\quad f(c) = \\frac{1}{b - a} \\int_a^b f(x) \\, dx$$`,
    intuition: `<p>Think of the area under the curve $\\int_a^b f$ as melted wax in a rectangular box of width $b - a$. If the wax levels out flat, its height is the <b>average value</b> $\\frac{1}{b - a}\\int_a^b f$.</p>
      <p>Because $f$ is continuous, by Bolzano's Intermediate Value Theorem, the curve cannot jump across this average height without passing through it! So the curve must intersect its average height at some point $c$.</p>`,
    needs: ['c.7.2.7', 'c.5.3.7', 'c.5.3.4'],
    traps: [
      `Continuity of $f$ is ESSENTIAL! If $f$ is a step function jumping from $0$ to $2$, the average height is $1$, but $f(x)$ may never equal $1$ anywhere.`,
      `Do not confuse this with Lagrange MVT for derivatives: this is MVT for INTEGRALS.`
    ],
    proof: {
      idea: 'Trap the integral between $m(b - a)$ and $M(b - a)$ using min/max, then apply Bolzano’s Intermediate Value Theorem (5.3.7).',
      why: 'Continuous functions on $[a, b]$ achieve all intermediate values between their minimum $m$ and maximum $M$.',
      rungs: [
        { why: 'By the Maximum-Minimum Theorem (5.3.4), $f$ attains an absolute minimum $m$ and maximum $M$ on $[a, b]$.', m: 'm \\le f(x) \\le M \\quad \\forall x \\in [a, b]' },
        { why: 'Apply Monotonicity of Integrals (Theorem 7.1.5).', m: 'm(b - a) \\le \\int_a^b f(x)\\,dx \\le M(b - a)' },
        { why: 'Divide by $(b - a) > 0$.', m: 'm \\le \\frac{1}{b - a} \\int_a^b f(x)\\,dx \\le M' },
        { why: 'The number $k = \\frac{1}{b - a} \\int_a^b f$ lies in $[m, M]$. By Bolzano’s Intermediate Value Theorem (5.3.7), $f$ attains $k$ at some $c \\in [a, b]$.', m: '\\exists c \\in [a, b] : f(c) = \\frac{1}{b - a} \\int_a^b f(x)\\,dx' }
      ],
      ends: 'Therefore $\\int_a^b f = f(c)(b - a)$ for some $c \\in [a, b]$.'
    },
    cards: [
      { q: 'State the First Mean Value Theorem for Integrals.', a: 'If $f$ is continuous on $[a, b]$, $\\exists c \\in [a, b]$ such that $\\int_a^b f = f(c)(b - a)$.', kind: 'state' },
      { q: 'What two theorems are combined in the proof of the First MVT for Integrals?', a: 'The Maximum-Minimum Theorem (5.3.4) and Bolzano’s Intermediate Value Theorem (5.3.7).', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.3.5', bartle: '7.3.5', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Fundamental Theorem of Calculus (Second Form: Differentiation of an Integral)',
    oneLine: 'The derivative of an accumulation function F(x) = int_a^x f at a continuity point is f(x).',
    statement: `Let $f \\in \\mathcal{R}[a, b]$, and define the area accumulator function $F: [a, b] \\to \\mathbb{R}$ by:
      $$F(x) = \\int_a^x f(t) \\, dt \\quad \\text{for } x \\in [a, b]$$
      <p>(a) $F$ is continuous on $[a, b]$ (in fact, Lipschitz continuous).</p>
      <p>(b) If $f$ is <b>continuous at a point $c \\in [a, b]$</b>, then $F$ is <b>differentiable at $c$</b>, and:
      $$F'(c) = f(c) \\quad \\iff \\quad \\frac{d}{dx} \\left[ \\int_a^x f(t) \\, dt \\right]_{x = c} = f(c)$$</p>`,
    intuition: `<p>Differentiation and integration are exact inverse operations! When you integrate $f$ to create $F(x)$, you are tracking accumulated area.</p>
      <p>If you ask: "at what rate is this area growing right now at $x = c$?", the answer is simply the height of the curve $f(c)$! Water pouring into a tank: the rate at which total water volume increases ($F'(c)$) is exactly the rate at which water is currently flowing from the tap ($f(c)$).</p>`,
    needs: ['c.7.1.1', 'c.6.1.1', 'c.5.1.1'],
    traps: [
      `Thinking $F$ is differentiable everywhere: $F'(c) = f(c)$ is only guaranteed where $f$ is CONTINUOUS! If $f$ has a jump at $c$, $F$ has a corner and is not differentiable there.`,
      `Leibniz’s Rule: $\\frac{d}{dx} \\int_{u(x)}^{v(x)} f(t)\\,dt = f(v(x))v'(x) - f(u(x))u'(x)$. Don't forget the Chain Rule on endpoints!`
    ],
    proof: {
      idea: 'Compute the difference quotient $(F(c+h) - F(c))/h = \\frac{1}{h}\\int_c^{c+h} f(t)\\,dt$ and use continuity of $f$ at $c$.',
      why: 'Because $f(t) \\approx f(c)$ on a tiny interval $[c, c+h]$, the integral is approximately $f(c)h$, so dividing by $h$ leaves $f(c)$.',
      rungs: [
        { why: 'Write the difference quotient for $F$ at $c$ for $h \\ne 0$. By additivity (7.2.9), $F(c+h) - F(c) = \\int_c^{c+h} f(t)\\,dt$.', m: '\\frac{F(c+h) - F(c)}{h} = \\frac{1}{h} \\int_c^{c+h} f(t)\\,dt' },
        { why: 'Since $\\frac{1}{h}\\int_c^{c+h} f(c)\\,dt = f(c) \\cdot \\frac{h}{h} = f(c)$, subtract $f(c)$ inside the integral.', m: '\\frac{F(c+h) - F(c)}{h} - f(c) = \\frac{1}{h} \\int_c^{c+h} [f(t) - f(c)]\\,dt' },
        { why: 'Since $f$ is continuous at $c$, given $\\varepsilon > 0$, $\\exists \\delta > 0$ such that $|t - c| < \\delta \\implies |f(t) - f(c)| < \\varepsilon$.', m: '|t - c| < \\delta \\implies |f(t) - f(c)| < \\varepsilon' },
        { why: 'For $0 < |h| < \\delta$, apply the integral triangle inequality (7.2.10).', m: '\\left| \\frac{F(c+h) - F(c)}{h} - f(c) \\right| \\le \\frac{1}{|h|} \\int_c^{c+h} |f(t) - f(c)|\\,dt < \\frac{1}{|h|} \\cdot \\varepsilon |h| = \\varepsilon' }
      ],
      ends: 'Taking $h \\to 0$ yields $F\'(c) = f(c)$.'
    },
    cards: [
      { q: 'State the Fundamental Theorem of Calculus (Second Form).', a: 'If $f \\in \\mathcal{R}[a, b]$ and $f$ is continuous at $c$, then $F(x) = \\int_a^x f$ is differentiable at $c$ with $F\'(c) = f(c)$.', kind: 'state' },
      { q: 'Compute $\\dfrac{d}{dx} \\int_1^x \\sqrt{1 + t^4} \\, dt$.', a: '$\\sqrt{1 + x^4}$, by FTC Form 2 since $\\sqrt{1 + t^4}$ is continuous.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.3.8', bartle: '7.3.8', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Integration by Substitution (Change of Variables)',
    oneLine: 'Chain rule in reverse: substitute u = φ(t) and du = φ\'(t) dt with updated limits.',
    statement: `Let $J = [\\alpha, \\beta]$ and let $\\varphi: J \\to \\mathbb{R}$ have a continuous derivative $\\varphi'$ on $J$.
      <p>Let $I = \\varphi(J)$, and let $f: I \\to \\mathbb{R}$ be continuous on $I$. Then:
      $$\\int_\\alpha^\\beta f(\\varphi(t)) \\varphi'(t) \\, dt = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(u) \\, du$$</p>`,
    intuition: `<p>In Class 12, $u$-substitution is second nature: set $u = \\varphi(t)$, replace $dt$ with $du / \\varphi'(t)$, and change the limits from $\\alpha, \\beta$ to $\\varphi(\\alpha), \\varphi(\\beta)$.</p>
      <p>In Real Analysis, this is simply the Chain Rule integrated using FTC: if $F$ is an antiderivative of $f$, then the composite function $H(t) = F(\\varphi(t))$ has derivative $H'(t) = f(\\varphi(t))\\varphi'(t)$ by the Chain Rule!</p>`,
    needs: ['c.7.3.1', 'c.6.1.5'],
    traps: [
      `Forgetting to change the integration limits when substituting: the new limits MUST be $\\varphi(\\alpha)$ and $\\varphi(\\beta)$!`,
      `$\\varphi$ must have a continuous derivative $\\varphi'$ on the entire interval.`
    ],
    proof: {
      idea: 'Let $F(u) = \\int_{\\varphi(\\alpha)}^u f(x)\\,dx$. Define $H(t) = F(\\varphi(t))$ and differentiate using the Chain Rule.',
      why: 'Chain rule $(F \\circ \\varphi)\' = (F\' \\circ \\varphi) \\cdot \\varphi\' = (f \\circ \\varphi) \\cdot \\varphi\'$, so integrating $H\'$ by FTC evaluates both sides.',
      rungs: [
        { why: 'Define $F(u) = \\int_{\\varphi(\\alpha)}^u f(x)\\,dx$ for $u \\in I$. Since $f$ is continuous, by FTC Form 2 (7.3.5), $F\'(u) = f(u)$.', m: 'F\'(u) = f(u) \\quad \\forall u \\in I' },
        { why: 'Define the composite function $H(t) = F(\\varphi(t))$ on $J = [\\alpha, \\beta]$.', m: 'H(t) = (F \\circ \\varphi)(t)' },
        { why: 'By the Chain Rule (6.1.5), $H$ is differentiable on $J$ with $H\'(t) = F\'(\\varphi(t))\\varphi\'(t) = f(\\varphi(t))\\varphi\'(t)$.', m: 'H\'(t) = f(\\varphi(t)) \\varphi\'(t)' },
        { why: 'Since $H\'$ is continuous, apply FTC Form 1 (7.3.1) to $H$ on $[\\alpha, \\beta]$.', m: '\\int_\\alpha^\\beta f(\\varphi(t)) \\varphi\'(t) \\, dt = H(\\beta) - H(\\alpha)' },
        { why: 'Evaluate $H(\\beta) - H(\\alpha) = F(\\varphi(\\beta)) - F(\\varphi(\\alpha)) = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(u)\\,du - 0$.', m: '\\int_\\alpha^\\beta f(\\varphi(t))\\varphi\'(t)\\,dt = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(u)\\,du' }
      ],
      ends: 'The Change of Variables formula is established.'
    },
    cards: [
      { q: 'State the Integration by Substitution formula.', a: '$\\int_\\alpha^\\beta f(\\varphi(t))\\varphi\'(t)\\,dt = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(u)\\,du$.', kind: 'state' },
      { q: 'Which differentiation theorem underlies Integration by Substitution?', a: 'The Chain Rule.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.3.12', bartle: '7.3.12', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Lebesgue’s Integrability Criterion',
    oneLine: 'A bounded function is Riemann integrable if and only if its discontinuities form a set of measure zero.',
    statement: `A bounded function $f: [a, b] \\to \\mathbb{R}$ is <b>Riemann integrable</b> on $[a, b]$ if and only if its set of discontinuities $D$ has <b>measure zero</b>:
      $$f \\in \\mathcal{R}[a, b] \\iff \\mu(D) = 0$$
      <p>A set $Z \\subset \\mathbb{R}$ has <b>measure zero</b> if for every $\\varepsilon > 0$, $Z$ can be covered by a countable collection of open intervals $\\{I_k\\}_{k=1}^\\infty$ whose total length is less than $\\varepsilon$:
      $$\\sum_{k=1}^\\infty |I_k| < \\varepsilon$$</p>`,
    intuition: `<p>This is the ultimate answer in real analysis to: <i>"Exactly which functions can be Riemann integrated?"</i></p>
      <p>• Every finite set has measure zero.</p>
      <p>• Every countable set (like $\\mathbb{Q}$) has measure zero!</p>
      <p>• Therefore, Thomae's Popcorn function (discontinuous at all rationals, continuous at all irrationals) IS Riemann integrable, because its discontinuities $\\mathbb{Q}$ have measure zero!</p>
      <p>• But Dirichlet's function is discontinuous everywhere (discontinuity set is all of $[0, 1]$, measure $1 > 0$), so it fails.</p>`,
    needs: ['c.7.1.1', 'c.1.3.1'],
    traps: [
      `Thinking a function with infinitely many discontinuities cannot be Riemann integrable. False! As long as the discontinuities form a set of measure zero (e.g. countable points), it is integrable.`,
      `Remember that measure zero sets do not have to be countable: the Cantor set is uncountable, yet it has measure zero!`
    ],
    proof: {
      idea: 'For $\\varepsilon > 0$, cover the discontinuities with open intervals of total length $< \\varepsilon$, and use uniform continuity on the compact remainder to squeeze upper and lower sums.',
      why: 'Oscillation is large only on a set of small total width, so its contribution to $U(f) - L(f)$ is negligible.',
      rungs: [
        { why: 'Let $D_\\alpha = \\{x \\in [a, b] : \\omega_f(x) \\ge \\alpha\\}$ be the points where oscillation of $f$ is at least $\\alpha > 0$. $D = \\bigcup_{k=1}^\\infty D_{1/k}$.', m: 'D = \\bigcup_{k=1}^\\infty D_{1/k}' },
        { why: 'If $\\mu(D) = 0$, then each $D_\\alpha$ has measure zero and is compact, so it can be covered by finitely many open intervals of total length $< \\varepsilon/(4M)$.', m: '\\sum |J_k| < \\frac{\\varepsilon}{4M}' },
        { why: 'Outside this cover, $f$ has oscillation $< \\varepsilon/(2(b - a))$ on the compact remainder, which can be covered by subintervals where $M_i - m_i < \\varepsilon/(2(b - a))$.', m: '\\sum_{\\text{good}} (M_i - m_i) \\Delta x_i < \\frac{\\varepsilon}{2(b - a)}(b - a) = \\frac{\\varepsilon}{2}' },
        { why: 'On the bad subintervals covering $D_\\alpha$, $M_i - m_i \\le 2M$, so their sum is bounded by $2M \\sum |J_k| < 2M \\cdot \\frac{\\varepsilon}{4M} = \\frac{\\varepsilon}{2}$.', m: '\\sum_{\\text{bad}} (M_i - m_i) \\Delta x_i < \\frac{\\varepsilon}{2}' },
        { why: 'Total gap $U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < \\varepsilon/2 + \\varepsilon/2 = \\varepsilon$. By Darboux Criterion (7.4.8), $f \\in \\mathcal{R}[a, b]$.', m: 'U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < \\varepsilon \\implies f \\in \\mathcal{R}[a, b]' }
      ],
      ends: 'Lebesgue’s Integrability Criterion is established.'
    },
    cards: [
      { q: 'State Lebesgue’s Integrability Criterion.', a: 'A bounded function on $[a, b]$ is Riemann integrable iff its discontinuity set has measure zero.', kind: 'state' },
      { q: 'Why is Thomae’s function Riemann integrable on $[0, 1]$?', a: 'Because it is discontinuous only at $\\mathbb{Q} \\cap [0, 1]$, which is countable and therefore has measure zero.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.3.17', bartle: '7.3.17', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Integration by Parts',
    oneLine: 'Product rule in reverse: ∫ u dv = uv - ∫ v du.',
    statement: `Let $f, g: [a, b] \\to \\mathbb{R}$ be continuously differentiable on $[a, b]$. Then:
      $$\\int_a^b f(x) g'(x) \\, dx = [f(b)g(b) - f(a)g(a)] - \\int_a^b f'(x) g(x) \\, dx$$`,
    intuition: `<p>In Class 12, everyone remembers the ILATE rule for Integration by Parts: $\\int u\\,dv = uv - \\int v\\,du$.</p>
      <p>In Real Analysis, this is simply the Product Rule $(fg)' = f'g + fg'$ integrated across $[a, b]$ using the Fundamental Theorem of Calculus!</p>`,
    needs: ['c.7.3.1', 'c.6.1.3'],
    traps: [
      `Forgetting the boundary bracket $[f(x)g(x)]_a^b$: you must evaluate $f(b)g(b) - f(a)g(a)$!`,
      `Both $f$ and $g$ must have integrable derivatives on $[a, b]$.`
    ],
    proof: {
      idea: 'Integrate the Product Rule $(fg)\' = f\'g + fg\'$ over $[a, b]$ and apply FTC Form 1.',
      why: 'FTC turns $\\int (fg)\'$ into $f(b)g(b) - f(a)g(a)$, leaving the two product terms.',
      rungs: [
        { why: 'By the Product Rule (6.1.3), $(fg)\'(x) = f\'(x)g(x) + f(x)g\'(x)$ for all $x \\in [a, b]$.', m: '(fg)\'(x) = f\'(x)g(x) + f(x)g\'(x)' },
        { why: 'Since $f, g, f\', g\'$ are continuous, the products $f\'g$ and $fg\'$ are Riemann integrable on $[a, b]$.', m: '(fg)\' \\in \\mathcal{R}[a, b]' },
        { why: 'Integrate both sides over $[a, b]$ using Linearity of Integrals (7.1.5).', m: '\\int_a^b (fg)\'(x)\\,dx = \\int_a^b f\'(x)g(x)\\,dx + \\int_a^b f(x)g\'(x)\\,dx' },
        { why: 'Apply FTC Form 1 (7.3.1) to the left side: $\\int_a^b (fg)\' = f(b)g(b) - f(a)g(a)$.', m: 'f(b)g(b) - f(a)g(a) = \\int_a^b f\'(x)g(x)\\,dx + \\int_a^b f(x)g\'(x)\\,dx' },
        { why: 'Rearrange to isolate $\\int_a^b f(x)g\'(x)\\,dx$.', m: '\\int_a^b f(x)g\'(x)\\,dx = [f(b)g(b) - f(a)g(a)] - \\int_a^b f\'(x)g(x)\\,dx' }
      ],
      ends: 'The Integration by Parts formula is rigorously proved.'
    },
    cards: [
      { q: 'State the Integration by Parts formula for definite integrals.', a: '$\\int_a^b f g\' = [fg]_a^b - \\int_a^b f\' g$.', kind: 'state' },
      { q: 'Which differentiation rule is the foundation of Integration by Parts?', a: 'The Product Rule: $(fg)\' = f\'g + fg\'.$', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.3.18', bartle: '7.3.18', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Taylor’s Theorem with Integral Remainder',
    oneLine: 'Taylor remainder expressed directly as an integral: R_n(x) = (1/n!) int_{x_0}^x (x - t)^n f^{(n+1)}(t) dt.',
    statement: `Let $f, f', \\ldots, f^{(n+1)}$ be continuous on an interval $I$ containing $x_0$.
      <p>Then for any $x \\in I$:
      $$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + R_n(x)$$
      where the remainder is given by the <b>integral formula</b>:
      $$R_n(x) = \\frac{1}{n!} \\int_{x_0}^x (x - t)^n f^{(n+1)}(t) \\, dt$$</p>`,
    intuition: `<p>In Chapter 6, Lagrange remainder $R_n = \\frac{f^{(n+1)}(c)}{(n+1)!}(x - x_0)^{n+1}$ gave an unknown intermediate point $c$.</p>
      <p>The Integral Remainder is much superior: it is an EXACT, explicit integral! You can bound it, differentiate it, or integrate it directly without worrying about where $c$ hides.</p>
      <p>The proof is pure mathematical poetry: just apply <b>Integration by Parts repeatedly</b> starting from FTC $f(x) - f(x_0) = \\int_{x_0}^x f'(t) dt$!</p>`,
    needs: ['c.7.3.17', 'c.7.3.5', 'c.6.4.1'],
    traps: [
      `Notice the variable inside the integral is $t$, while $x$ is treated as a constant parameter! The factor is $(x - t)^n$, NOT $(t - x_0)^n$.`
    ],
    proof: {
      idea: 'Start with $f(x) - f(x_0) = \\int_{x_0}^x f\'(t)\\,dt$ and integrate by parts repeatedly with $u = f^{(k)}(t)$ and $dv = -(x - t)^{k-1} dt$.',
      why: 'Each integration by parts produces the next Taylor term $\\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$ from the boundary evaluation.',
      rungs: [
        { why: 'By FTC Form 2 (7.3.5), write $f(x) - f(x_0) = \\int_{x_0}^x f\'(t)\\,dt$.', m: 'f(x) = f(x_0) + \\int_{x_0}^x f\'(t)\\,dt' },
        { why: 'Apply Integration by Parts (7.3.17) with $u = f\'(t)$ and $v = -(x - t)$. Note $v\' = 1$.', m: '\\int_{x_0}^x f\'(t)\\,dt = [-f\'(t)(x - t)]_{x_0}^x - \\int_{x_0}^x f\'\'(t)(-(x - t))\\,dt = f\'(x_0)(x - x_0) + \\int_{x_0}^x (x - t)f\'\'(t)\\,dt' },
        { why: 'This proves the formula for $n = 1$: $f(x) = f(x_0) + f\'(x_0)(x - x_0) + \\int_{x_0}^x (x - t)f\'\'(t)\\,dt$.', m: 'f(x) = P_1(x) + R_1(x)' },
        { why: 'Integrate by parts again with $u = f\'\'(t)$ and $v = -\\frac{(x - t)^2}{2}$. The boundary term produces $\\frac{f\'\'(x_0)}{2!}(x - x_0)^2$.', m: '\\int_{x_0}^x (x - t)f\'\'(t)\\,dt = \\left[ -\\frac{(x - t)^2}{2} f\'\'(t) \\right]_{x_0}^x + \\int_{x_0}^x \\frac{(x - t)^2}{2} f\'\'\'(t)\\,dt = \\frac{f\'\'(x_0)}{2!}(x - x_0)^2 + R_2(x)' },
        { why: 'By induction on $n$, continuing $n$ times produces the full polynomial $P_n(x)$ and integral remainder.', m: 'R_n(x) = \\frac{1}{n!} \\int_{x_0}^x (x - t)^n f^{(n+1)}(t) \\, dt' }
      ],
      ends: 'Taylor’s Theorem with Integral Remainder is proved.'
    },
    cards: [
      { q: 'State the formula for the integral remainder in Taylor’s Theorem.', a: '$R_n(x) = \\dfrac{1}{n!} \\int_{x_0}^x (x - t)^n f^{(n+1)}(t) \\, dt$.', kind: 'state' },
      { q: 'What technique is used to prove Taylor’s Theorem with Integral Remainder?', a: 'Repeated Integration by Parts.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.4.1', bartle: '7.4.1', sec: '7.4', kind: 'definition', tier: 'ext',
    title: 'Darboux Upper and Lower Sums',
    oneLine: 'Upper sum uses the ceiling (supremum) on each slice; lower sum uses the floor (infimum).',
    statement: `Let $f: [a, b] \\to \\mathbb{R}$ be bounded, and let $\\mathcal{P} = \\{x_0, x_1, \\ldots, x_n\\}$ be a partition of $[a, b]$.
      <p>For each subinterval $I_i = [x_{i-1}, x_i]$, define $M_i = \\sup_{x \\in I_i} f(x)$ and $m_i = \\inf_{x \\in I_i} f(x)$.</p>
      <p>The <b>Lower Darboux Sum</b> is $L(f, \\mathcal{P}) = \\sum_{i=1}^n m_i (x_i - x_{i-1})$.</p>
      <p>The <b>Upper Darboux Sum</b> is $U(f, \\mathcal{P}) = \\sum_{i=1}^n M_i (x_i - x_{i-1})$.</p>
      <p>Always: $L(f, \\mathcal{P}) \\le S(f; \\dot{\\mathcal{P}}) \\le U(f, \\mathcal{P})$ for any choice of tags.</p>`,
    intuition: `<p>Gaston Darboux made Riemann's theory much cleaner: instead of worrying about arbitrary sample tags $t_i$, he constructed two absolute boundaries:</p>
      <p>1. <b>Lower sum $L(f, \\mathcal{P})$:</b> Build rectangles using the lowest possible floor $m_i$ in each slice. This is guaranteed to UNDERESTIMATE the true area.</p>
      <p>2. <b>Upper sum $U(f, \\mathcal{P})$:</b> Build rectangles using the highest possible ceiling $M_i$ in each slice. This is guaranteed to OVERESTIMATE the true area.</p>
      <p>As you add more partition points (refining the partition), lower sums climb up and upper sums climb down, squeezing the true area in between!</p>`,
    needs: ['c.2.3.2', 'c.7.1.1'],
    traps: [
      `For ANY two partitions $\\mathcal{P}_1$ and $\\mathcal{P}_2$, $L(f, \\mathcal{P}_1) \\le U(f, \\mathcal{P}_2)$. A lower sum can NEVER exceed an upper sum, even if they use completely different partitions!`,
      `Refining a partition (adding points) always increases or maintains lower sums and decreases or maintains upper sums.`
    ],
    cards: [
      { q: 'Define the Upper Darboux sum $U(f, \\mathcal{P})$.', a: '$U(f, \\mathcal{P}) = \\sum_{i=1}^n M_i (x_i - x_{i-1})$, where $M_i = \\sup_{I_i} f$.', kind: 'state' },
      { q: 'If partition $\\mathcal{P}^*$ refines $\\mathcal{P}$ by adding more points, how do $L(f, \\mathcal{P})$ and $U(f, \\mathcal{P})$ change?', a: '$L(f, \\mathcal{P}^*) \\ge L(f, \\mathcal{P})$ and $U(f, \\mathcal{P}^*) \\le U(f, \\mathcal{P})$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.4.8', bartle: '7.4.8', sec: '7.4', kind: 'theorem', tier: 'ext',
    title: 'Darboux Integrability Criterion',
    oneLine: 'f is integrable iff the gap between upper and lower sums can be made smaller than any ε.',
    statement: `A bounded function $f: [a, b] \\to \\mathbb{R}$ is <b>Riemann integrable</b> if and only if for every $\\varepsilon > 0$, there exists a partition $\\mathcal{P}_\\varepsilon$ of $[a, b]$ such that:
      $$U(f, \\mathcal{P}_\\varepsilon) - L(f, \\mathcal{P}_\\varepsilon) < \\varepsilon$$`,
    intuition: `<p>This is the most practical working definition of integrability used in real analysis proofs. You don't have to guess the integral value $L$ beforehand!</p>
      <p>All you need to show is that the total "slop" or error between the ceiling rectangles and the floor rectangles can be squished below $\\varepsilon$. When this gap closes, the upper integral $\\overline{\\int} f = \\inf U(f, \\mathcal{P})$ and the lower integral $\\underline{\\int} f = \\sup L(f, \\mathcal{P})$ meet at a single shared number: the integral!</p>`,
    needs: ['c.7.4.1'],
    traps: [
      `Do not forget that both Darboux integrability and Riemann integrability are 100% mathematically equivalent: $f \\in \\mathcal{R}[a, b] \\iff \\overline{\\int} f = \\underline{\\int} f$.`,
      `For Dirichlet's function on $[0, 1]$, $U(f, \\mathcal{P}) = 1$ and $L(f, \\mathcal{P}) = 0$ for EVERY partition, so $U - L = 1$ can never be less than $\\varepsilon = 0.5$. Hence it fails Darboux's criterion.`
    ],
    proof: {
      idea: 'Show that upper and lower Darboux sums can be approximated arbitrarily closely by Riemann sums using tags near the infima and suprema.',
      why: 'Because $m_i = \\inf f$ and $M_i = \\sup f$, tags can be picked so that $S(f)$ is within $\\varepsilon$ of $L(f)$ and $U(f)$.',
      rungs: [
        { why: '(=>) Let $f \\in \\mathcal{R}[a, b]$ with integral $I$. Given $\\varepsilon > 0$, choose $\\delta > 0$ such that for any tagged partition with mesh $< \\delta$, $|S(f) - I| < \\varepsilon/4$.', m: 'I - \\frac{\\varepsilon}{4} < S(f; \\dot{\\mathcal{P}}) < I + \\frac{\\varepsilon}{4}' },
        { why: 'For any fixed partition $\\mathcal{P}$ of mesh $< \\delta$, choose tags $t_i$ such that $f(t_i) > M_i - \\frac{\\varepsilon}{4(b-a)}$ and $s_i$ such that $f(s_i) < m_i + \\frac{\\varepsilon}{4(b-a)}$.', m: 'U(f, \\mathcal{P}) - \\frac{\\varepsilon}{4} < S(f; \\dot{\\mathcal{P}}_t) \\quad \\text{and} \\quad S(f; \\dot{\\mathcal{P}}_s) < L(f, \\mathcal{P}) + \\frac{\\varepsilon}{4}' },
        { why: 'Subtract the inequalities: $U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < S(f; \\dot{\\mathcal{P}}_t) - S(f; \\dot{\\mathcal{P}}_s) + \\varepsilon/2 < \\varepsilon/4 + \\varepsilon/4 + \\varepsilon/2 = \\varepsilon$.', m: 'U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < \\varepsilon' },
        { why: '(<=) Conversely, if $U(f, \\mathcal{P}_\\varepsilon) - L(f, \\mathcal{P}_\\varepsilon) < \\varepsilon$, then since $\\underline{\\int} f \\ge L(f, \\mathcal{P})$ and $\\overline{\\int} f \\le U(f, \\mathcal{P})$, $0 \\le \\overline{\\int} f - \\underline{\\int} f < \\varepsilon$.', m: '\\overline{\\int}_a^b f = \\underline{\\int}_a^b f = \\int_a^b f' }
      ],
      ends: 'Darboux integrability is completely equivalent to Riemann integrability.'
    },
    cards: [
      { q: 'State the Darboux Integrability Criterion.', a: '$f \\in \\mathcal{R}[a, b]$ iff for every $\\varepsilon > 0$, $\\exists \\mathcal{P}$ such that $U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < \\varepsilon$.', kind: 'state' },
      { q: 'What are the upper and lower integrals $\\overline{\\int}_a^b f$ and $\\underline{\\int}_a^b f$?', a: '$\\overline{\\int} f = \\inf_{\\mathcal{P}} U(f, \\mathcal{P})$ and $\\underline{\\int} f = \\sup_{\\mathcal{P}} L(f, \\mathcal{P})$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.5.1', bartle: '7.5.1', sec: '7.5', kind: 'technique', tier: 'ext',
    title: 'Approximate Integration: Trapezoidal and Simpson’s Rules',
    oneLine: 'Approximate hard integrals using trapezoids or parabolic arches with precise error bounds.',
    statement: `Let $f$ be continuous on $[a, b]$ and partition $[a, b]$ into $n$ equal subintervals of width $h = (b - a)/n$.
      <p>(a) <b>The Trapezoidal Rule $T_n(f)$:</b>
      $$T_n(f) = \\frac{h}{2} \\left[ f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n) \\right]$$
      If $f''$ is continuous on $[a, b]$, the error is bounded by:
      $$\\left| \\int_a^b f - T_n(f) \\right| \\le \\frac{(b - a) h^2}{12} \\|f''\\|_{[a, b]}$$</p>
      <p>(b) <b>Simpson’s Rule $S_n(f)$</b> (for even $n$):
      $$S_n(f) = \\frac{h}{3} \\left[ f(x_0) + 4f(x_1) + 2f(x_2) + 4f(x_3) + \\cdots + 4f(x_{n-1}) + f(x_n) \\right]$$
      If $f^{(4)}$ is continuous on $[a, b]$, the error is bounded by:
      $$\\left| \\int_a^b f - S_n(f) \\right| \\le \\frac{(b - a) h^4}{180} \\|f^{(4)}\\|_{[a, b]}$$</p>`,
    intuition: `<p>In real-world applications (and numerical computing), many functions cannot be integrated analytically (e.g. $\\int e^{-x^2} dx$). Numerical quadrature gives guaranteed approximations:</p>
      <p>• <b>Trapezoidal Rule:</b> Connects consecutive points with straight lines (trapezoids). The error shrinks as $h^2 = 1/n^2$.</p>
      <p>• <b>Simpson’s Rule:</b> Connects groups of three points with parabolas (quadratic polynomials). Because parabolas cancel symmetric errors, Simpson's rule is exact not only for cubics but has an error that drops as $h^4 = 1/n^4$ — doubling the slices cuts error by $16$ times!</p>`,
    needs: ['c.7.1.1', 'c.6.4.1'],
    traps: [
      `Notice the coefficients in Simpson's Rule: $1, 4, 2, 4, 2, \\dots, 4, 1$. The ends are $1$, odd-indexed inner terms are $4$, and even-indexed inner terms are $2$.`,
      `Simpson's Rule requires an EVEN number of intervals $n$ (so an odd number of sample points $n+1$).`
    ],
    cards: [
      { q: 'What is the order of accuracy of the Trapezoidal Rule and Simpson’s Rule?', a: 'Trapezoidal Rule error is $O(h^2)$; Simpson’s Rule error is $O(h^4)$.', kind: 'recall' },
      { q: 'Why is Simpson’s Rule exact for all cubic polynomials $ax^3 + bx^2 + cx + d$ even though it uses parabolas?', a: 'Because the error depends on the 4th derivative $f^{(4)}$, which is identically zero for any polynomial of degree $\\le 3$.', kind: 'apply' }
    ]
  }
);

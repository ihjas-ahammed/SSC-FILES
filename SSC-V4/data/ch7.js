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
    id: 'c.7.2.1', bartle: '7.2.1', sec: '7.2', kind: 'theorem', tier: 'core',
    title: 'Integrability of Continuous and Monotone Functions',
    oneLine: 'Every continuous function and every monotone function on [a, b] is Riemann integrable.',
    statement: `(a) If $f: [a, b] \\to \\mathbb{R}$ is <b>continuous</b> on $[a, b]$, then $f \\in \\mathcal{R}[a, b]$.
      <p>(b) If $f: [a, b] \\to \\mathbb{R}$ is <b>monotone</b> (increasing or decreasing) on $[a, b]$, then $f \\in \\mathcal{R}[a, b]$.</p>`,
    intuition: `<p>These two big classes cover virtually every function you met in school!</p>
      <p>• <b>Why continuous functions are integrable:</b> By the Uniform Continuity Theorem (5.4.3), on a closed bounded interval, $f$ cannot fluctuate wildly. In any thin slice, the top and bottom of the function are within $\\varepsilon$ of each other, so the area error shrinks to zero.</p>
      <p>• <b>Why monotone functions are integrable:</b> Monotone functions might have jumps, but all the rectangles' error gaps telescope and cancel out, bounded by $(f(b) - f(a)) \\|\\mathcal{P}\\| \\to 0$!</p>`,
    needs: ['c.7.1.1', 'c.5.4.3'],
    traps: [
      `A monotone function does NOT have to be continuous to be integrable! It can have countably many jump discontinuities (like a staircase) and still be 100% Riemann integrable.`,
      `The Dirichlet function $f(x) = 1$ for $x \\in \\mathbb{Q}$ and $0$ for $x \\notin \\mathbb{Q}$ is NOT integrable because every slice contains both rationals and irrationals, so the sum swings between $0$ and $b - a$.`
    ],
    cards: [
      { q: 'Name two major classes of functions that are guaranteed to be Riemann integrable on $[a, b]$.', a: '(1) Continuous functions on $[a, b]$; (2) Monotone functions on $[a, b]$.', kind: 'recall' },
      { q: 'Is the Dirichlet function Riemann integrable on $[0, 1]$?', a: 'No, because lower sums are always $0$ and upper sums are always $1$; they never meet.', kind: 'apply' }
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
    needs: ['c.7.1.1'],
    traps: [
      `Forgetting that the additivity formula also works when $c$ is outside $[a, b]$, provided we adopt the standard convention $\\int_b^a f = -\\int_a^b f$ and $\\int_a^a f = 0$.`
    ],
    cards: [
      { q: 'State the interval additivity property of the Riemann integral.', a: '$\\int_a^b f = \\int_a^c f + \\int_c^b f$ for any $c$ between $a$ and $b$.', kind: 'state' },
      { q: 'What is the convention for $\\int_b^a f$ when $a < b$?', a: '$\\int_b^a f = -\\int_a^b f$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.3.1', bartle: '7.3.1', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Fundamental Theorem of Calculus (Form 1: Differentiation of an Integral)',
    oneLine: 'Accumulating area under a continuous curve produces an antiderivative whose derivative is the original curve.',
    statement: `Let $f \\in \\mathcal{R}[a, b]$, and define the area accumulator function $F: [a, b] \\to \\mathbb{R}$ by:
      $$F(x) = \\int_a^x f(t) \\, dt \\quad \\text{for } x \\in [a, b]$$
      <p>(a) $F$ is <b>continuous</b> on $[a, b]$ (in fact, it is Lipschitz continuous).</p>
      <p>(b) If $f$ is <b>continuous at a point $c \\in [a, b]$</b>, then $F$ is <b>differentiable at $c$</b>, and:
      $$F'(c) = f(c) \\quad \\iff \\quad \\frac{d}{dx} \\left[ \\int_a^x f(t) \\, dt \\right]_{x = c} = f(c)$$</p>`,
    intuition: `<p>Differentiation and integration are exact inverse operations! When you integrate $f$ to create $F(x)$, you are tracking the accumulated area. If you then ask: "at what rate is this area growing right now at $x = c$?", the answer is simply the height of the curve $f(c)$!</p>
      <p>Think of water pouring into a tank: the rate at which total water volume increases ($F'(c)$) is exactly the rate at which water is currently flowing from the tap ($f(c)$).</p>`,
    needs: ['c.7.1.1', 'c.6.1.1', 'c.5.1.1'],
    traps: [
      `Thinking $F$ is always differentiable everywhere: $F'(c) = f(c)$ is only guaranteed at points where $f$ is CONTINUOUS! If $f$ has a jump at $c$, $F$ has a sharp corner at $c$ and is not differentiable there.`,
      `Using Leibniz's rule on $\\frac{d}{dx} \\int_{u(x)}^{v(x)} f(t)\\,dt$: remember to apply the Chain Rule to endpoints: $f(v(x))v'(x) - f(u(x))u'(x)$!`
    ],
    proof: {
      idea: `Compute the difference quotient $\\frac{F(c+h) - F(c)}{h} = \\frac{1}{h}\\int_c^{c+h} f(t)\\,dt$ and use continuity of $f$ at $c$.`,
      why: `Because $f(t) \\approx f(c)$ on a tiny interval $[c, c+h]$, the integral is approximately $f(c) \\cdot h$, so dividing by $h$ leaves $f(c)$.`,
      rungs: [
        { why: 'Write the difference quotient for $F$ at $c$.', m: '\\frac{F(c+h) - F(c)}{h} = \\frac{1}{h}\\int_c^{c+h} f(t)\\,dt' },
        { why: 'Subtract $f(c) = \\frac{1}{h}\\int_c^{c+h} f(c)\\,dt$ from both sides.', m: '\\frac{F(c+h) - F(c)}{h} - f(c) = \\frac{1}{h}\\int_c^{c+h} (f(t) - f(c))\\,dt' },
        { why: 'Since $f$ is continuous at $c$, for $|t - c| < \\delta$, $|f(t) - f(c)| < \\varepsilon$.', m: '\\left| \\frac{F(c+h) - F(c)}{h} - f(c) \\right| \\le \\frac{1}{|h|} \\cdot \\varepsilon |h| = \\varepsilon' }
      ],
      ends: 'Taking $h \\to 0$ gives $F\'(c) = f(c)$.'
    },
    cards: [
      { q: 'State Form 1 of the Fundamental Theorem of Calculus.', a: 'If $f \\in \\mathcal{R}[a, b]$ and $f$ is continuous at $c$, then $F(x) = \\int_a^x f$ satisfies $F\'(c) = f(c)$.', kind: 'state' },
      { q: 'What is $\\dfrac{d}{dx} \\int_0^x \\sin(t^2) \\, dt$?', a: '$\\sin(x^2)$, directly by FTC Form 1 since $\\sin(t^2)$ is continuous.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.3.5', bartle: '7.3.5', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Fundamental Theorem of Calculus (Form 2: Evaluation of Integrals)',
    oneLine: 'To evaluate an integral, find any antiderivative F and compute F(b) - F(a).',
    statement: `Let $f \\in \\mathcal{R}[a, b]$. If there exists a differentiable function $F: [a, b] \\to \\mathbb{R}$ such that $F'(x) = f(x)$ for all $x \\in [a, b]$, then:
      $$\\int_a^b f(x) \\, dx = F(b) - F(a)$$`,
    intuition: `<p>This is the famous Newton-Leibniz formula that every Class 12 student uses daily: $\\int_a^b f = [F(x)]_a^b = F(b) - F(a)$.</p>
      <p>Instead of struggling with thousands of tiny Riemann rectangles and taking limits of sums, you simply look for an antiderivative $F$ whose derivative gives $f$, and subtract the endpoint values! It links the accumulation of rate of change back to the net change of the function.</p>`,
    needs: ['c.7.1.1', 'c.6.2.4'],
    traps: [
      `$F'(x) = f(x)$ must hold for ALL points in $[a, b]$. If the antiderivative has a discontinuity or undefined derivative inside $[a, b]$, you cannot blindly apply the formula (e.g. $\\int_{-1}^1 \\frac{1}{x^2}\\,dx \\ne [-1/x]_{-1}^1 = -2$, which is nonsense since $1/x^2 > 0$!).`
    ],
    cards: [
      { q: 'State Form 2 of the Fundamental Theorem of Calculus.', a: 'If $f \\in \\mathcal{R}[a, b]$ and $F\' = f$ on $[a, b]$, then $\\int_a^b f = F(b) - F(a)$.', kind: 'state' },
      { q: 'Why is $\\int_{-1}^1 \\frac{1}{x} \\, dx = [\\ln|x|]_{-1}^1 = 0$ invalid?', a: 'Because $1/x$ is unbounded at $x = 0$ and not Riemann integrable on $[-1, 1]$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.7.3.8', bartle: '7.3.8', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Integration by Substitution (Change of Variables)',
    oneLine: 'Chain rule in reverse: substitute u = φ(t) and du = φ\'(t) dt with updated limits.',
    statement: `Let $J = [\\alpha, \\beta]$ and let $\\varphi: J \\to \\mathbb{R}$ have a continuous derivative on $J$. Let $I = \\varphi(J)$, and let $f: I \\to \\mathbb{R}$ be continuous on $I$. Then:
      $$\\int_\\alpha^\\beta f(\\varphi(t)) \\varphi'(t) \\, dt = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(u) \\, du$$`,
    intuition: `<p>In Class 12, $u$-substitution is standard practice: set $u = \\varphi(t)$, replace $dt$ with $du / \\varphi'(t)$, and change the limits from $\\alpha, \\beta$ to $\\varphi(\\alpha), \\varphi(\\beta)$.</p>
      <p>In Real Analysis, this is simply the Chain Rule integrated using FTC Form 2: if $F$ is an antiderivative of $f$, then $(F \\circ \\varphi)'(t) = f(\\varphi(t)) \\varphi'(t)$.</p>`,
    needs: ['c.7.3.5', 'c.6.1.5'],
    traps: [
      `Forgetting to change the integration limits when substituting: the new limits MUST be $\\varphi(\\alpha)$ and $\\varphi(\\beta)$!`,
      `$\\varphi$ must have a continuous derivative $\\varphi'$ on the entire interval.`
    ],
    cards: [
      { q: 'State the Integration by Substitution formula.', a: '$\\int_\\alpha^\\beta f(\\varphi(t))\\varphi\'(t)\\,dt = \\int_{\\varphi(\\alpha)}^{\\varphi(\\beta)} f(u)\\,du$.', kind: 'state' },
      { q: 'Which differentiation rule corresponds to Integration by Substitution?', a: 'The Chain Rule.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.3.12', bartle: '7.3.12', sec: '7.3', kind: 'theorem', tier: 'core',
    title: 'Lebesgue’s Integrability Criterion',
    oneLine: 'A bounded function is Riemann integrable if and only if its discontinuities form a set of measure zero.',
    statement: `A bounded function $f: [a, b] \\to \\mathbb{R}$ is <b>Riemann integrable</b> on $[a, b]$ if and only if its set of discontinuities $D$ has <b>measure zero</b>:
      $$f \\in \\mathcal{R}[a, b] \\iff \\mu(D) = 0$$
      <p>A set $Z \\subset \\mathbb{R}$ has <b>measure zero</b> if for every $\\varepsilon > 0$, $Z$ can be covered by a countable collection of open intervals whose total length is less than $\\varepsilon$.</p>`,
    intuition: `<p>This is the ultimate answer to: <i>"Exactly which functions can be Riemann integrated?"</i></p>
      <p>• Every finite set has measure zero.</p>
      <p>• Every countable set (like $\\mathbb{Q}$) has measure zero!</p>
      <p>• Therefore, Thomae's Popcorn function (discontinuous at all rationals, continuous at all irrationals) IS Riemann integrable, because its discontinuities $\\mathbb{Q}$ have measure zero!</p>
      <p>• But Dirichlet's function is discontinuous everywhere (its discontinuity set is all of $\\mathbb{R}$), which has measure $> 0$, so it fails.</p>`,
    needs: ['c.7.1.1', 'c.1.3.1'],
    traps: [
      `Thinking a function with infinitely many discontinuities cannot be Riemann integrable. False! As long as the discontinuities form a set of measure zero (e.g. countable points), it is integrable.`,
      `Remember that measure zero sets do not have to be countable: the Cantor set is uncountable, yet it has measure zero!`
    ],
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
    needs: ['c.7.3.5', 'c.6.1.1'],
    traps: [
      `Forgetting the boundary bracket $[f(x)g(x)]_a^b$: you must evaluate $f(b)g(b) - f(a)g(a)$!`,
      `Both $f$ and $g$ must have integrable derivatives on $[a, b]$.`
    ],
    cards: [
      { q: 'State the Integration by Parts formula for definite integrals.', a: '$\\int_a^b f g\' = [fg]_a^b - \\int_a^b f\' g$.', kind: 'state' },
      { q: 'Which differentiation rule is the foundation of Integration by Parts?', a: 'The Product Rule: $(fg)\' = f\'g + fg\'.$', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.4.1', bartle: '7.4.1', sec: '7.4', kind: 'definition', tier: 'core',
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
    id: 'c.7.4.8', bartle: '7.4.8', sec: '7.4', kind: 'theorem', tier: 'core',
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
    cards: [
      { q: 'State the Darboux Integrability Criterion.', a: '$f \\in \\mathcal{R}[a, b]$ iff for every $\\varepsilon > 0$, $\\exists \\mathcal{P}$ such that $U(f, \\mathcal{P}) - L(f, \\mathcal{P}) < \\varepsilon$.', kind: 'state' },
      { q: 'What are the upper and lower integrals $\\overline{\\int}_a^b f$ and $\\underline{\\int}_a^b f$?', a: '$\\overline{\\int} f = \\inf_{\\mathcal{P}} U(f, \\mathcal{P})$ and $\\underline{\\int} f = \\sup_{\\mathcal{P}} L(f, \\mathcal{P})$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.7.5.1', bartle: '7.5.1', sec: '7.5', kind: 'technique', tier: 'core',
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

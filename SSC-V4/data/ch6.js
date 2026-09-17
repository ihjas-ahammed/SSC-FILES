/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module 2: Differentiation (Chapter 6)
   Sections: 6.1 (The Derivative), 6.2 (Mean Value Theorem),
             6.3 (L'Hospital's Rules), 6.4 (Taylor's Theorem)
   Diagrams: c.6.1.1, c.6.1.5, c.6.2.1, c.6.2.3, c.6.2.4,
             c.6.2.12, c.6.3.2, c.6.3.3, c.6.4.1
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.6.1.1', bartle: '6.1.1', sec: '6.1', kind: 'definition', tier: 'core',
    title: 'The Derivative as a Tangent Limit',
    oneLine: 'The derivative is the exact instantaneous slope of the curve at a single point.',
    statement: `Let $I \\subseteq \\mathbb{R}$ be an interval, $f: I \\to \\mathbb{R}$, and $c \\in I$.
      <p>A real number $L$ is the <b>derivative</b> of $f$ at $c$ if for every $\\varepsilon > 0$, there exists $\\delta > 0$ such that whenever $x \\in I$ and $0 < |x - c| < \\delta$, then:
      $$\\left| \\frac{f(x) - f(c)}{x - c} - L \\right| < \\varepsilon$$</p>
      <p>In this case, $f$ is <b>differentiable</b> at $c$, and we write $f'(c) = L$, or:
      $$f'(c) = \\lim_{x\\to c} \\frac{f(x) - f(c)}{x - c} = \\lim_{h\\to 0} \\frac{f(c + h) - f(c)}{h}$$</p>`,
    intuition: `<p>In Class 12, you calculated slopes of secant lines between two points $(c, f(c))$ and $(x, f(x))$ using $\\frac{\\Delta y}{\\Delta x} = \\frac{f(x) - f(c)}{x - c}$.</p>
      <p>In Real Analysis, as the second point $x$ slides closer and closer to $c$, the secant line rotates. The derivative $f'(c)$ is the slope of the limiting tangent line! Differentiability means the curve looks completely straight and smooth when zoomed in under a microscope.</p>`,
    needs: ['c.4.1.4', 'c.5.1.1'],
    traps: [
      `A function can be continuous but NOT differentiable! The classic example is $f(x) = |x|$ at $x = 0$: left-hand slope is $-1$, right-hand slope is $+1$. The corner is too sharp to have a single tangent line.`,
      `The point $c$ must be a cluster point of the domain, which is why we usually define derivatives on intervals.`
    ],
    cards: [
      { q: 'State the limit definition of the derivative $f\'(c)$.', a: '$f\'(c) = \\lim_{x\\to c} \\dfrac{f(x) - f(c)}{x - c}$, provided the limit exists.', kind: 'state' },
      { q: 'Why does $f(x) = |x|$ fail to be differentiable at $x = 0$?', a: 'Because the left-hand limit of the difference quotient is $-1$ while the right-hand limit is $+1$; the two-sided limit does not exist.', kind: 'apply' }
    ]
  },

  {
    id: 'c.6.1.2', bartle: '6.1.2', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Differentiability Implies Continuity',
    oneLine: 'If a curve is smooth enough to have a tangent line, it cannot have a jump or tear.',
    statement: `If $f: I \\to \\mathbb{R}$ has a derivative at $c \\in I$, then $f$ is <b>continuous</b> at $c$.`,
    intuition: `<p>Differentiability is much stronger than continuity. To have a tangent slope, the function values must first connect smoothly without tearing:</p>
      $$f(x) - f(c) = \\left( \\frac{f(x) - f(c)}{x - c} \\right) (x - c)$$
      <p>As $x \\to c$, the first term approaches the finite number $f'(c)$, and the second term $(x - c)$ goes to $0$. Their product is $f'(c) \\cdot 0 = 0$, which proves $f(x) \\to f(c)$!</p>
      <p><b>EXAM WARNING:</b> The converse is FALSE! Continuity does NOT imply differentiability ($f(x) = |x|$ at $0$, or Weierstrass's monster function which is continuous everywhere but differentiable nowhere!).</p>`,
    needs: ['c.6.1.1', 'c.5.1.1'],
    traps: [
      `Writing that continuity implies differentiability. Continuous functions can have sharp spikes, cusps, or wild oscillations ($x \\sin(1/x)$ at $0$).`,
      `Forgetting that the proof relies on writing $f(x) - f(c) = \\frac{f(x)-f(c)}{x-c} \\cdot (x-c)$.`
    ],
    proof: {
      idea: `Multiply and divide by $(x - c)$ and take the limit using the product rule for limits.`,
      why: `Because $f'(c)$ is a finite number, multiplying it by $(x - c) \\to 0$ forces $f(x) - f(c) \\to 0$.`,
      rungs: [
        { why: 'For $x \\ne c$, factor the change in $f$.', m: 'f(x) - f(c) = \\left( \\frac{f(x) - f(c)}{x - c} \\right)(x - c)' },
        { why: 'Take the limit as $x \\to c$ of both sides.', m: '\\lim_{x\\to c}(f(x) - f(c)) = \\lim_{x\\to c}\\left(\\frac{f(x) - f(c)}{x - c}\\right) \\cdot \\lim_{x\\to c}(x - c)' },
        { why: 'Evaluate the limits: the difference quotient is $f\'(c)$, and $(x - c) \\to 0$.', m: '\\lim_{x\\to c}(f(x) - f(c)) = f\'(c) \\cdot 0 = 0' },
        { why: 'Conclude that the limit of $f(x)$ equals $f(c)$.', m: '\\lim_{x\\to c} f(x) = f(c)' }
      ],
      ends: 'Therefore, $f$ is continuous at $c$.'
    },
    cards: [
      { q: 'Does continuity at $c$ imply differentiability at $c$?', a: 'No. $f(x) = |x|$ is continuous at $0$ but not differentiable at $0$.', kind: 'trap' },
      { q: 'How is $\\lim_{x\\to c} (f(x) - f(c)) = 0$ derived if $f\'(c)$ exists?', a: 'Write $f(x) - f(c) = \\dfrac{f(x)-f(c)}{x-c}(x-c) \\to f\'(c) \\cdot 0 = 0$.', kind: 'recall' },
      { q: 'State the relationship between differentiability and continuity at a point.', a: 'If $f$ is differentiable at $c$, then $f$ is continuous at $c$. (The converse is false.)', kind: 'state' }
    ]
  },

  {
    id: 'c.6.1.5', bartle: '6.1.5', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Carathéodory’s Theorem and the Chain Rule',
    oneLine: 'A clean formulation of derivatives that makes proving the Chain Rule effortless by avoiding division by zero.',
    statement: `Let $f: I \\to \\mathbb{R}$ and $c \\in I$. Then $f$ is differentiable at $c$ if and only if there exists a function $\\varphi: I \\to \\mathbb{R}$ that is <b>continuous at $c$</b> and satisfies:
      $$f(x) - f(c) = \\varphi(x)(x - c) \\quad \\text{for all } x \\in I$$
      In this case, $\\varphi(c) = f'(c)$.
      <p><b>The Chain Rule:</b> If $g$ is differentiable at $c$ and $f$ is differentiable at $g(c)$, then $(f \\circ g)'(c) = f'(g(c)) \\cdot g'(c)$.</p>`,
    intuition: `<p>Why did Carathéodory invent this? In high school, when trying to prove the Chain Rule $\\frac{dy}{dx} = \\frac{dy}{du} \\cdot \\frac{du}{dx}$, you run into a huge headache: what if $u(x) - u(c) = 0$ for points nearby? You would be dividing by zero!</p>
      <p>Carathéodory cleans this up: instead of dividing by $(x - c)$, he writes $f(x) - f(c) = \\varphi(x)(x - c)$ with a continuous slope function $\\varphi$. No division by zero ever occurs! The Chain Rule then follows in two lines of algebra.</p>`,
    needs: ['c.6.1.1', 'c.5.1.1'],
    traps: [
      `Trying to prove the Chain Rule by writing $\\frac{f(g(x)) - f(g(c))}{g(x) - g(c)} \\cdot \\frac{g(x) - g(c)}{x - c}$ without checking if $g(x) - g(c) = 0$. That division is illegal if $g$ is constant or oscillates! Carathéodory is the rigorous fix.`,
      `Remember that $\\varphi(c)$ is not zero — it is the exact derivative $f'(c)$.`
    ],
    proof: {
      idea: 'Define $\\varphi(x) = \\frac{f(x) - f(c)}{x - c}$ for $x \\ne c$ and $\\varphi(c) = f\'(c)$. Continuity of $\\varphi$ at $c$ is equivalent to differentiability of $f$ at $c$.',
      why: 'Writing $f(x) - f(c) = \\varphi(x)(x - c)$ avoids division by zero entirely when substituting $g(x)$ in the Chain Rule.',
      rungs: [
        { why: 'Define $\\varphi(x) = (f(x) - f(c))/(x - c)$ for $x \\ne c$, and $\\varphi(c) = f\'(c)$.', m: 'f(x) - f(c) = \\varphi(x)(x - c) \\quad \\forall x \\in I' },
        { why: 'By definition, differentiability of $f$ at $c$ holds iff $\\lim_{x\\to c} \\varphi(x) = f\'(c) = \\varphi(c)$, which is continuity of $\\varphi$ at $c$.', m: '\\lim_{x\\to c} \\varphi(x) = f\'(c) = \\varphi(c)' },
        { why: 'For the Chain Rule with $g$ differentiable at $c$, write $g(x) - g(c) = \\psi(x)(x - c)$ with $\\psi$ continuous at $c$ and $\\psi(c) = g\'(c)$.', m: 'g(x) - g(c) = \\psi(x)(x - c)' },
        { why: 'Substitute $g(x)$ into $f$: $f(g(x)) - f(g(c)) = \\varphi(g(x))(g(x) - g(c)) = \\varphi(g(x))\\psi(x)(x - c)$.', m: '\\frac{(f\\circ g)(x) - (f\\circ g)(c)}{x - c} = \\varphi(g(x))\\psi(x)' },
        { why: 'Take the limit as $x \\to c$: since $g$ is continuous at $c$, $\\varphi(g(x)) \\to \\varphi(g(c)) = f\'(g(c))$ and $\\psi(x) \\to g\'(c)$.', m: '(f\\circ g)\'(c) = f\'(g(c))g\'(c)' }
      ],
      ends: 'Carathéodory\\\'s Theorem is established, rigorously proving the Chain Rule without division by zero.'
    },
    cards: [
      { q: 'State Carathéodory’s characterisation of differentiability.', a: '$f$ is differentiable at $c$ iff $\\exists$ continuous $\\varphi$ at $c$ such that $f(x) - f(c) = \\varphi(x)(x - c)$, with $\\varphi(c) = f\'(c)$.', kind: 'state' },
      { q: 'What trap in the high school proof of the Chain Rule does Carathéodory’s Theorem fix?', a: 'It avoids dividing by $g(x) - g(c)$, which could be zero even when $x \\ne c$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.2.1', bartle: '6.2.1', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Interior Extremum Theorem (Fermat’s Theorem)',
    oneLine: 'At the peak or valley inside an interval, the tangent line must be horizontal (slope = 0).',
    statement: `Let $I$ be an interval, and let $c$ be an <b>interior point</b> of $I$ at which $f: I \\to \\mathbb{R}$ has a relative extremum (maximum or minimum).
      <p>If $f$ is differentiable at $c$, then:
      $$f'(c) = 0$$</p>`,
    intuition: `<p>Think of throwing a cricket ball straight up into the air. At the highest point of its trajectory, for one split second, its vertical velocity is exactly zero before it falls back down!</p>
      <p>• If $f'(c) > 0$, the function is strictly climbing, so $c$ couldn't be a maximum (points to the right are higher).</p>
      <p>• If $f'(c) < 0$, the function is strictly falling, so points to the left were higher.</p>
      <p>• Therefore, the only way $c$ can be a peak is if $f'(c) = 0$!</p>`,
    needs: ['c.6.1.1'],
    traps: [
      `The point $c$ MUST be an INTERIOR point! If $c$ is an endpoint of $[a, b]$, the derivative does NOT have to be zero (e.g. $f(x) = x$ on $[0, 1]$ has maximum at $1$, but $f'(1) = 1 \\ne 0$).`,
      `The converse is FALSE: $f'(c) = 0$ does NOT guarantee an extremum! For $f(x) = x^3$ at $0$, $f'(0) = 0$, but $0$ is an inflection point, not a max or min.`
    ],
    proof: {
      idea: 'Examine the signs of the left-hand and right-hand difference quotients at the interior extremum.',
      why: 'At an interior maximum, secant slopes from the left are $\\ge 0$ while secant slopes from the right are $\\le 0$; differentiability forces both limits to be equal.',
      rungs: [
        { why: 'Assume $f$ has a relative maximum at interior point $c$. Then $f(x) \\le f(c)$ for all $x \\in (c - \\delta, c + \\delta) \\subseteq I$.', m: 'f(x) - f(c) \\le 0 \\quad \\forall x \\in (c - \\delta, c + \\delta)' },
        { why: 'For $x \\in (c - \\delta, c)$, $x - c < 0$, so the difference quotient is $\\ge 0$.', m: '\\frac{f(x) - f(c)}{x - c} \\ge 0 \\implies f\'(c) = \\lim_{x\\to c^-} \\frac{f(x) - f(c)}{x - c} \\ge 0' },
        { why: 'For $x \\in (c, c + \\delta)$, $x - c > 0$, so the difference quotient is $\\le 0$.', m: '\\frac{f(x) - f(c)}{x - c} \\le 0 \\implies f\'(c) = \\lim_{x\\to c^+} \\frac{f(x) - f(c)}{x - c} \\le 0' },
        { why: 'Since $f$ is differentiable at $c$, both one-sided limits are equal to $f\'(c)$, forcing $0 \\le f\'(c) \\le 0$.', m: 'f\'(c) = 0' }
      ],
      ends: 'An identical argument with reversed signs applies to a relative minimum, concluding $f\'(c) = 0$.'
    },
    cards: [
      { q: 'State the Interior Extremum Theorem (Fermat).', a: 'If $f$ has a relative extremum at an interior point $c$ and $f\'(c)$ exists, then $f\'(c) = 0$.', kind: 'state' },
      { q: 'Does $f\'(c) = 0$ imply $c$ is a relative maximum or minimum?', a: 'No. For $f(x) = x^3$, $f\'(0) = 0$, but $x = 0$ is not a relative extremum.', kind: 'apply' }
    ]
  },

  {
    id: 'c.6.2.3', bartle: '6.2.3', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Rolle’s Theorem',
    oneLine: 'If a smooth curve starts and ends at the same height, it must level off flat somewhere in between.',
    statement: `Let $f$ be continuous on the closed bounded interval $[a, b]$ and differentiable on the open interval $(a, b)$.
      <p>If $f(a) = f(b)$, then there exists at least one point $c \\in (a, b)$ such that:
      $$f'(c) = 0$$</p>`,
    intuition: `<p>If you leave your house in the morning and return to the exact same house in the evening ($f(a) = f(b)$):</p>
      <p>Either you sat on the couch all day (constant function, where $f'(c) = 0$ everywhere), or you went somewhere. If you went somewhere, you reached a maximum distance before turning back! At that turnaround point $c$, your velocity was zero ($f'(c) = 0$).</p>
      <p>The proof combines the Maximum-Minimum Theorem (5.3.4 guarantees a peak exists) and Fermat's Theorem (6.2.1 proves the slope at that peak is 0).</p>`,
    needs: ['c.5.3.4', 'c.6.2.1'],
    traps: [
      `All three conditions are strictly required: (1) continuous on $[a, b]$, (2) differentiable on $(a, b)$, (3) $f(a) = f(b)$. If any one fails, the theorem fails!`,
      `Counterexample when differentiability fails: $f(x) = |x|$ on $[-1, 1]$. Here $f(-1) = f(1) = 1$, but $f'(c)$ is never $0$ because the corner at $0$ is not differentiable.`
    ],
    proof: {
      idea: 'Apply the Maximum-Minimum Theorem (5.3.4) and Fermat\\\'s Interior Extremum Theorem (6.2.1).',
      why: 'If $f$ is constant, $f\' = 0$ everywhere; if $f$ is not constant, it attains an absolute maximum or minimum at an interior point $c \\in (a, b)$.',
      rungs: [
        { why: 'By the Maximum-Minimum Theorem (5.3.4), $f$ attains an absolute maximum $M$ and minimum $m$ on $[a, b]$.', m: '\\exists x_1, x_2 \\in [a, b] : f(x_1) = m,\\, f(x_2) = M' },
        { why: 'If $m = M$, then $f$ is constant on $[a, b]$, so $f\'(x) = 0$ for all $x \\in (a, b)$ and any interior point $c$ works.', m: 'm = M \\implies f(x) = f(a) \\implies f\'(c) = 0' },
        { why: 'If $m < M$, then since $f(a) = f(b)$, at least one of $m$ or $M$ must be attained at an interior point $c \\in (a, b)$.', m: 'c \\in (a, b) \\quad \\text{with } f(c) = M \\text{ (or } m\\text{)}' },
        { why: 'Since $c$ is an interior extremum and $f$ is differentiable on $(a, b)$, Fermat\\\'s Theorem (6.2.1) ensures $f\'(c) = 0$.', m: 'f\'(c) = 0' }
      ],
      ends: 'In all cases, there exists at least one $c \\in (a, b)$ where $f\'(c) = 0$.'
    },
    cards: [
      { q: 'State the three hypotheses of Rolle’s Theorem.', a: '(1) $f$ continuous on $[a, b]$; (2) $f$ differentiable on $(a, b)$; (3) $f(a) = f(b)$.', kind: 'state' },
      { q: 'What does Rolle’s Theorem conclude?', a: 'There exists at least one $c \\in (a, b)$ such that $f\'(c) = 0$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.2.4', bartle: '6.2.4', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Lagrange’s Mean Value Theorem (MVT)',
    figs: ['fig.mvt'],
    oneLine: 'Average speed equals instantaneous speed at some moment during the journey.',
    statement: `Let $f$ be continuous on the closed bounded interval $[a, b]$ and differentiable on the open interval $(a, b)$.
      <p>Then there exists at least one point $c \\in (a, b)$ such that:
      $$f(b) - f(a) = f'(c)(b - a) \\quad \\iff \\quad f'(c) = \\frac{f(b) - f(a)}{b - a}$$</p>`,
    intuition: `<p>If you drive from Ernakulam to Thrissur ($80$ km) in exactly $1$ hour, your average speed was $80$ km/h. The Mean Value Theorem guarantees that at some instant during that drive, your speedometer pointed at EXACTLY $80$ km/h!</p>
      <p>Geometrically, the slope of the secant chord connecting endpoints $(a, f(a))$ and $(b, f(b))$ is parallel to the tangent line at some point $c$ in between.</p>
      <p><b>Why it is so powerful:</b> MVT connects the global change of a function $f(b) - f(a)$ over an entire interval to a local derivative $f'(c)$ at a single point!</p>`,
    needs: ['c.6.2.3'],
    traps: [
      `MVT requires continuity on the CLOSED interval $[a, b]$. If $f$ is discontinuous even at one endpoint, MVT can fail!`,
      `MVT gives existence of $c$, but does not give a formula to calculate $c$. In proofs, you rarely need the exact value of $c$, only that $a < c < b$.`
    ],
    proof: {
      idea: `Subtract the secant line from $f(x)$ to construct an auxiliary function $h(x)$ that satisfies Rolle's Theorem.`,
      why: `Because $h(a) = 0$ and $h(b) = 0$, Rolle's Theorem applied to $h$ immediately gives $h'(c) = 0$.`,
      rungs: [
        { why: 'Define the auxiliary function measuring vertical distance to the chord.', m: 'h(x) = f(x) - f(a) - \\frac{f(b) - f(a)}{b - a}(x - a)' },
        { why: 'Evaluate $h$ at the endpoints $a$ and $b$.', m: 'h(a) = 0 \\quad \\text{and} \\quad h(b) = 0' },
        { why: 'Apply Rolle’s Theorem to $h$ on $[a, b]$ to find $c \\in (a, b)$.', m: 'h\'(c) = 0' },
        { why: 'Differentiate $h(x)$ and set equal to $0$.', m: 'f\'(c) - \\frac{f(b) - f(a)}{b - a} = 0 \\implies f\'(c) = \\frac{f(b) - f(a)}{b - a}' }
      ],
      ends: 'Therefore, $f(b) - f(a) = f\'(c)(b - a)$ is established.'
    },
    cards: [
      { q: 'State Lagrange’s Mean Value Theorem.', a: 'If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then $\\exists c \\in (a, b)$ with $f(b) - f(a) = f\'(c)(b - a)$.', kind: 'state' },
      { q: 'If $f\'(x) = 0$ for all $x \\in (a, b)$, what does MVT prove about $f$?', a: '$f$ is a constant function on $(a, b)$, because $f(x_1) - f(x_2) = f\'(c)(x_1 - x_2) = 0$.', kind: 'apply' },
      { q: 'If $f\'(x) > 0$ for all $x \\in (a, b)$, what does MVT imply?', a: '$f$ is strictly increasing on $(a, b)$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.2.12', bartle: '6.2.12', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Darboux’s Theorem (Intermediate Value Property of Derivatives)',
    oneLine: 'Derivatives do not need to be continuous, but they can NEVER skip an intermediate value.',
    statement: `Let $I$ be an interval and let $f: I \\to \\mathbb{R}$ be differentiable on $I$.
      <p>If $a, b \\in I$ with $a < b$, and if $k$ is any real number strictly between $f'(a)$ and $f'(b)$, then there exists at least one point $c \\in (a, b)$ such that:
      $$f'(c) = k$$</p>`,
    intuition: `<p>This is a shocking theorem in real analysis! We know from Bolzano's Theorem (5.3.7) that continuous functions have the intermediate value property.</p>
      <p>Darboux's Theorem says that <b>EVERY derivative function $f'$ satisfies the intermediate value property, even if $f'$ is NOT continuous!</b></p>
      <p>This means a derivative can NEVER have a jump discontinuity (step jump). If a function jumps from $2$ to $5$ without taking values in between, it CANNOT be the derivative of any function!</p>`,
    needs: ['c.6.2.1', 'c.5.3.4'],
    proof: {
      idea: 'Construct an auxiliary function $g(x) = f(x) - kx$ and show its absolute minimum on $[a, b]$ must occur at an interior point.',
      why: 'Because $g\'(a) < 0$ and $g\'(b) > 0$, the minimum cannot occur at either endpoint, so Fermat\'s Theorem (6.2.1) forces $g\'(c) = 0$.',
      rungs: [
        { why: 'Assume without loss of generality $f\'(a) < k < f\'(b)$ and construct an auxiliary function.', m: 'g(x) = f(x) - kx \\quad \\text{for } x \\in [a, b]' },
        { why: '$g$ is continuous on $[a, b]$ because $f$ is differentiable (hence continuous). By the Maximum-Minimum Theorem (5.3.4), $g$ attains an absolute minimum at some point $c \\in [a, b]$.', m: 'g(c) = \\min_{x \\in [a, b]} g(x)' },
        { why: 'Evaluate the derivative of $g$ at the endpoints.', m: 'g\'(a) = f\'(a) - k < 0 \\quad \\text{and} \\quad g\'(b) = f\'(b) - k > 0' },
        { why: 'Since $g\'(a) < 0$, $g(x) < g(a)$ for $x > a$ near $a$, so $c \\ne a$. Similarly, since $g\'(b) > 0$, $g(x) < g(b)$ for $x < b$ near $b$, so $c \\ne b$.', m: 'c \\in (a, b)' },
        { why: 'Since $c$ is an interior extremum and $g$ is differentiable at $c$, Fermat\'s Theorem (6.2.1) applies.', m: 'g\'(c) = 0 \\iff f\'(c) - k = 0 \\implies f\'(c) = k' }
      ],
      ends: 'Thus, every value $k$ strictly between $f\'(a)$ and $f\'(b)$ is attained as $f\'(c)$ for some interior point $c \\in (a, b)$.'
    },
    traps: [
      `Thinking Darboux requires $f'$ to be continuous. No! It assumes ONLY that $f$ is differentiable; $f'$ can be discontinuous and still obeys Darboux.`,
      `Therefore, the signum function $\\operatorname{sgn}(x)$ can NEVER be a derivative, because it jumps from $-1$ to $+1$ without hitting $0$.`
    ],
    cards: [
      { q: 'State Darboux’s Theorem for derivatives.', a: 'If $f$ is differentiable on $[a, b]$ and $k$ lies between $f\'(a)$ and $f\'(b)$, then $\\exists c \\in (a, b)$ with $f\'(c) = k$.', kind: 'state' },
      { q: 'Can a derivative $f\'(x)$ have a jump discontinuity?', a: 'No, because Darboux’s theorem requires it to attain all intermediate values.', kind: 'apply' }
    ]
  },

  {
    id: 'c.6.3.2', bartle: '6.3.2', sec: '6.3', kind: 'theorem', tier: 'core',
    title: 'Cauchy’s Mean Value Theorem',
    oneLine: 'A generalised Mean Value Theorem comparing two curves simultaneously without dividing by zero.',
    statement: `Let $f$ and $g$ be continuous on $[a, b]$ and differentiable on $(a, b)$, and suppose $g'(x) \\ne 0$ for all $x \\in (a, b)$.
      <p>Then there exists at least one point $c \\in (a, b)$ such that:
      $$\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(c)}{g'(c)}$$</p>`,
    intuition: `<p>Standard Lagrange MVT compares $f(x)$ against the simple straight line $g(x) = x$. Cauchy's MVT generalises this to compare ANY two functions $f$ and $g$ simultaneously!</p>
      <p>Notice that the denominator $g(b) - g(a) \\ne 0$ by Rolle's theorem (since $g' \\ne 0$). This theorem is the mathematical engine that proves L'Hospital's Rules!</p>`,
    needs: ['c.6.2.4', 'c.6.2.3'],
    proof: {
      idea: 'Construct an auxiliary function $h(x) = [f(b) - f(a)]g(x) - [g(b) - g(a)]f(x)$ that satisfies the conditions of Rolle\'s Theorem.',
      why: 'Because $h(a) = h(b)$, Rolle\'s Theorem guarantees $h\'(c) = 0$, giving the simultaneous proportionality ratio.',
      rungs: [
        { why: 'First verify $g(b) - g(a) \\ne 0$. If $g(b) = g(a)$, Rolle\'s theorem would imply $g\'(\\xi) = 0$ for some $\\xi \\in (a, b)$, contradicting $g\' \\ne 0$. Now define the auxiliary function $h$ on $[a, b]$.', m: 'h(x) = [f(b) - f(a)] g(x) - [g(b) - g(a)] f(x)' },
        { why: '$h$ is continuous on $[a, b]$ and differentiable on $(a, b)$ as a linear combination of $f$ and $g$.', m: 'h\'(x) = [f(b) - f(a)] g\'(x) - [g(b) - g(a)] f\'(x)' },
        { why: 'Evaluate $h$ at the endpoints $a$ and $b$.', m: 'h(a) = f(b)g(a) - g(b)f(a) = h(b)' },
        { why: 'Apply Rolle\'s Theorem (6.2.3) to $h$ on $[a, b]$, guaranteeing a point $c \\in (a, b)$ with $h\'(c) = 0$.', m: '[f(b) - f(a)] g\'(c) - [g(b) - g(a)] f\'(c) = 0' },
        { why: 'Divide by $[g(b) - g(a)] g\'(c)$, valid since both factors are non-zero.', m: '\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f\'(c)}{g\'(c)}' }
      ],
      ends: 'This establishes Cauchy\'s generalised Mean Value Theorem.'
    },
    traps: [
      `You CANNOT prove this by applying Lagrange MVT to $f$ and $g$ separately! That would give $\\frac{f'(c_1)}{g'(c_2)}$ with two DIFFERENT points $c_1 \\ne c_2$. Cauchy's theorem guarantees ONE single point $c$ that works for both simultaneously!`,
      `Remember that $g'(x) \\ne 0$ on the open interval is required to prevent $g(b) = g(a)$.`
    ],
    cards: [
      { q: 'State Cauchy’s Mean Value Theorem.', a: 'If $f, g$ continuous on $[a, b]$, differentiable on $(a, b)$, and $g\' \\ne 0$, then $\\exists c \\in (a, b)$ with $\\dfrac{f(b)-f(a)}{g(b)-g(a)} = \\dfrac{f\'(c)}{g\'(c)}$.', kind: 'state' },
      { q: 'Why can’t we just apply Lagrange MVT to $f$ and $g$ separately?', a: 'Because that would yield two potentially different points $c_1$ and $c_2$, whereas Cauchy’s MVT provides a single common point $c$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.3.3', bartle: '6.3.3', sec: '6.3', kind: 'theorem', tier: 'core',
    title: 'L’Hospital’s Rules',
    oneLine: 'When both numerator and denominator vanish (0/0) or blow up (∞/∞), the ratio of their derivatives tells the true story.',
    statement: `Let $-\\infty \\le a < b \\le +\\infty$, and let $f, g$ be differentiable on $(a, b)$ such that $g'(x) \\ne 0$ for all $x \\in (a, b)$.
      <p>Suppose that <b>either</b> $\\lim_{x\\to a^+} f(x) = 0$ and $\\lim_{x\\to a^+} g(x) = 0$ (Form $0/0$),<br>
      <b>or</b> $\\lim_{x\\to a^+} g(x) = \\pm\\infty$ (Form $\\infty/\\infty$).</p>
      <p>If $\\lim_{x\\to a^+} \\frac{f'(x)}{g'(x)} = L \\in \\mathbb{R} \\cup \\{\\pm\\infty\\}$, then:
      $$\\lim_{x\\to a^+} \\frac{f(x)}{g(x)} = L$$</p>`,
    intuition: `<p>In Class 12, everyone loves applying L'Hospital's Rule: when faced with $0/0$, differentiate the top and differentiate the bottom. But in Real Analysis, we prove WHY it works using Cauchy's MVT!</p>
      <p>Near the limit point, $\\frac{f(x)}{g(x)} = \\frac{f(x) - f(a)}{g(x) - g(a)} = \\frac{f'(c_x)}{g'(c_x)}$ for some point $c_x$ between $a$ and $x$. As $x \\to a$, $c_x$ is squeezed to $a$, forcing the ratio to $L$.</p>`,
    needs: ['c.6.3.2', 'c.4.1.4'],
    proof: {
      idea: 'Extend $f$ and $g$ continuously to the limit point $a$ and apply Cauchy\'s Mean Value Theorem on $[a, x]$.',
      why: 'Cauchy MVT turns the ratio $\\frac{f(x)}{g(x)}$ into $\\frac{f\'(c_x)}{g\'(c_x)}$ where $a < c_x < x$; squeezing $x \\to a^+$ forces $c_x \\to a^+$.',
      rungs: [
        { why: 'For the $0/0$ form at $a^+$, extend $f$ and $g$ to $[a, b)$ by defining $f(a) = 0$ and $g(a) = 0$. Then $f$ and $g$ are continuous on $[a, x]$ for every $x \\in (a, b)$.', m: 'f(a) = \\lim_{t \\to a^+} f(t) = 0, \\quad g(a) = \\lim_{t \\to a^+} g(t) = 0' },
        { why: 'Apply Cauchy\'s Mean Value Theorem (6.3.2) to $f$ and $g$ on the interval $[a, x]$. There exists $c_x \\in (a, x)$ such that:', m: '\\frac{f(x) - f(a)}{g(x) - g(a)} = \\frac{f\'(c_x)}{g\'(c_x)}' },
        { why: 'Substitute $f(a) = 0$ and $g(a) = 0$ into the expression.', m: '\\frac{f(x)}{g(x)} = \\frac{f\'(c_x)}{g\'(c_x)} \\quad \\text{where } a < c_x < x' },
        { why: 'As $x \\to a^+$, the squeeze $a < c_x < x$ forces $c_x \\to a^+$. By the composition of limits:', m: '\\lim_{x \\to a^+} \\frac{f(x)}{g(x)} = \\lim_{c_x \\to a^+} \\frac{f\'(c_x)}{g\'(c_x)} = L' }
      ],
      ends: 'The indeterminate form $\\infty/\\infty$ reduces similarly via Cauchy MVT on subintervals $[x, y]$, establishing L\'Hospital\'s Rule.'
    },
    traps: [
      `THE COMMON MISTAKE: Differentiating $\\frac{f}{g}$ using the Quotient Rule $\\frac{f'g - fg'}{g^2}$! In L'Hospital's Rule, you differentiate numerator and denominator SEPARATELY: $\\frac{f'(x)}{g'(x)}$.`,
      `Applying L'Hospital when the limit is NOT indeterminate! If $\\lim f = 3$ and $\\lim g = 2$, the limit is simply $3/2$. Differentiating would give a completely wrong answer.`
    ],
    cards: [
      { q: 'What two indeterminate forms are directly handled by L’Hospital’s Rule?', a: '$0/0$ and $\\infty/\\infty$.', kind: 'recall' },
      { q: 'What theorem is used to prove L’Hospital’s Rule rigorously?', a: 'Cauchy’s Mean Value Theorem.', kind: 'recall' },
      { q: 'What is $\\lim_{x\\to 0} \\dfrac{\\sin x}{x}$ by L’Hospital’s Rule?', a: '$\\lim_{x\\to 0} \\dfrac{\\cos x}{1} = \\dfrac{1}{1} = 1$.', kind: 'apply' },
      { q: 'State L’Hospital’s Rule for the indeterminate form $0/0$.', a: 'If $\\lim_{x\\to a^+} f(x) = 0$, $\\lim_{x\\to a^+} g(x) = 0$, $g\'(x) \\ne 0$, and $\\lim_{x\\to a^+} \\dfrac{f\'(x)}{g\'(x)} = L$, then $\\lim_{x\\to a^+} \\dfrac{f(x)}{g(x)} = L$.', kind: 'state' }
    ]
  },

  {
    id: 'c.6.4.1', bartle: '6.4.1', sec: '6.4', kind: 'theorem', tier: 'core',
    title: 'Taylor’s Theorem with Lagrange Remainder',
    oneLine: 'Approximate any smooth function with a polynomial; the remainder error is controlled by the (n+1)-th derivative.',
    statement: `Let $n \\in \\mathbb{N}$, let $I = [a, b]$, and let $f: I \\to \\mathbb{R}$ be such that $f, f', \\ldots, f^{(n)}$ are continuous on $I$ and $f^{(n+1)}$ exists on $(a, b)$.
      <p>If $x_0 \\in I$, then for any $x \\in I$, there exists a point $c$ strictly between $x$ and $x_0$ such that:
      $$f(x) = P_n(x) + R_n(x)$$
      where $P_n(x)$ is the <b>$n$-th Taylor polynomial</b>:
      $$P_n(x) = f(x_0) + f'(x_0)(x - x_0) + \\frac{f''(x_0)}{2!}(x - x_0)^2 + \\cdots + \\frac{f^{(n)}(x_0)}{n!}(x - x_0)^n$$
      and $R_n(x)$ is the <b>Lagrange form of the remainder</b>:
      $$R_n(x) = \\frac{f^{(n+1)}(c)}{(n + 1)!}(x - x_0)^{n+1}$$</p>`,
    intuition: `<p>Taylor's theorem is the ultimate upgrade to the Mean Value Theorem! When $n = 0$, it gives $f(x) = f(x_0) + f'(c)(x - x_0)$, which is exactly Lagrange MVT!</p>
      <p>By including higher derivatives, you bend the approximating polynomial to match the curve's curvature ($f''$), its rate of curvature ($f'''$), etc. The remainder $R_n(x)$ gives you an exact formula for the approximation error.</p>`,
    needs: ['c.6.2.4'],
    proof: {
      idea: 'Define the remainder constant $M$ such that $f(x) = P_n(x) + M(x - x_0)^{n+1}$ and apply Rolle\'s Theorem to an auxiliary function $F(t)$.',
      why: 'Varying the base point $t$ causes the sum in $F\'(t)$ to telescope, isolating the $(n+1)$-th derivative at $c$.',
      rungs: [
        { why: 'Fix $x, x_0 \\in I$ with $x \\ne x_0$. Define the constant $M$ such that $f(x) = P_n(x) + M(x - x_0)^{n+1}$.', m: 'M = \\frac{f(x) - P_n(x)}{(x - x_0)^{n+1}}' },
        { why: 'Define an auxiliary function $F$ on the interval between $x_0$ and $x$ by varying the base point $t$:', m: 'F(t) = f(x) - \\sum_{k=0}^{n} \\frac{f^{(k)}(t)}{k!}(x - t)^k - M(x - t)^{n+1}' },
        { why: 'Observe that $F(x) = 0$, and by choice of $M$, $F(x_0) = 0$. Since $f^{(n+1)}$ exists, $F$ is differentiable.', m: 'F(x_0) = F(x) = 0' },
        { why: 'Differentiate $F(t)$ with respect to $t$. By the product rule, the sum telescopes and successive terms cancel pairwise.', m: 'F\'(t) = -\\frac{(x - t)^n}{n!} f^{(n+1)}(t) + (n+1)M(x - t)^n = (x - t)^n \\left[ (n+1)M - \\frac{f^{(n+1)}(t)}{n!} \\right]' },
        { why: 'Apply Rolle\'s Theorem (6.2.3) to $F$ on $[x_0, x]$. There exists $c$ strictly between $x_0$ and $x$ such that $F\'(c) = 0$. Since $c \\ne x$, $(x - c)^n \\ne 0$.', m: '(n+1)M - \\frac{f^{(n+1)}(c)}{n!} = 0 \\implies M = \\frac{f^{(n+1)}(c)}{(n+1)!}' }
      ],
      ends: 'Substituting $M$ yields the Lagrange form of the remainder $R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x - x_0)^{n+1}$.'
    },
    traps: [
      `Thinking the point $c$ in the remainder is fixed. $c$ depends on both $x$ and $n$, but it is guaranteed to lie strictly between $x_0$ and $x$.`,
      `Forgetting the factorial $(n+1)!$ in the denominator of the remainder term.`
    ],
    cards: [
      { q: 'What does Taylor’s Theorem reduce to when $n = 0$?', a: 'Lagrange’s Mean Value Theorem: $f(x) = f(x_0) + f\'(c)(x - x_0)$.', kind: 'recall' },
      { q: 'State the Lagrange form of the remainder $R_n(x)$ in Taylor’s Theorem.', a: '$R_n(x) = \\dfrac{f^{(n+1)}(c)}{(n + 1)!}(x - x_0)^{n+1}$ for some $c$ between $x_0$ and $x$.', kind: 'state' }
    ]
  }
);

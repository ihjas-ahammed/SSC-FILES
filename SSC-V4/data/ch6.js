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
    id: 'c.6.1.3', bartle: '6.1.3', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Algebraic Properties of Derivatives: Sum, Product, and Quotient Rules',
    oneLine: 'Derivatives are linear, obey the product rule (fg)\' = f\'g + fg\', and quotient rule (f/g)\' = (f\'g - fg\')/g^2.',
    statement: `Let $I \\subseteq \\mathbb{R}$ be an interval, $c \\in I$, and let $f, g: I \\to \\mathbb{R}$ be differentiable at $c$. Then:
      <p>(a) If $\\alpha \\in \\mathbb{R}$, the function $\\alpha f$ is differentiable at $c$, and $(\\alpha f)'(c) = \\alpha f'(c)$.</p>
      <p>(b) The function $f + g$ is differentiable at $c$, and $(f + g)'(c) = f'(c) + g'(c)$.</p>
      <p>(c) <b>Product Rule:</b> The function $fg$ is differentiable at $c$, and:
      $$(fg)'(c) = f'(c)g(c) + f(c)g'(c)$$</p>
      <p>(d) <b>Quotient Rule:</b> If $g(c) \\ne 0$, the function $f/g$ is differentiable at $c$, and:
      $$\\left(\\frac{f}{g}\\right)'(c) = \\frac{f'(c)g(c) - f(c)g'(c)}{(g(c))^2}$$</p>`,
    intuition: `<p>In Class 12, we memorized the UV rule $(uv)' = u'v + uv'$ and the quotient rule. In Real Analysis, we see the clever trick behind them: <b>add and subtract an intermediate cross-term</b>!</p>
      <p>For $f(x)g(x) - f(c)g(c)$, inserting $-f(c)g(x) + f(c)g(x)$ splits the difference into two terms: one isolating the change in $f$, and the other isolating the change in $g$. Since $g$ is continuous at $c$ (Theorem 6.1.2), $g(x) \\to g(c)$, giving the exact product formula cleanly!</p>`,
    needs: ['c.6.1.1', 'c.6.1.2', 'c.4.2.4'],
    traps: [
      `$(fg)'(c) \\ne f'(c)g'(c)$! Derivatives do NOT distribute across products.`,
      `For the Quotient Rule, $g(c)$ must be non-zero; since $g$ is continuous at $c$, $g(x) \\ne 0$ in a small neighborhood, making $f/g$ well-defined.`
    ],
    proof: {
      idea: 'Insert the cross-term $f(c)g(x)$ into the difference quotient of $fg$, and use the continuity of $g$ at $c$.',
      why: 'Adding and subtracting the cross-term isolates $(f(x)-f(c))/(x-c)$ and $(g(x)-g(c))/(x-c)$ as separate factors.',
      rungs: [
        { why: 'Write the difference quotient for $p = fg$ at $c$.', m: '\\frac{p(x) - p(c)}{x - c} = \\frac{f(x)g(x) - f(c)g(c)}{x - c}' },
        { why: 'Add and subtract $f(c)g(x)$ in the numerator.', m: '\\frac{f(x)g(x) - f(c)g(x) + f(c)g(x) - f(c)g(c)}{x - c} = \\frac{f(x) - f(c)}{x - c} g(x) + f(c) \\frac{g(x) - g(c)}{x - c}' },
        { why: 'Since $g$ is differentiable at $c$, Theorem 6.1.2 gives $\\lim_{x\\to c} g(x) = g(c)$.', m: '\\lim_{x\\to c} g(x) = g(c)' },
        { why: 'Apply the limit laws for sums and products.', m: 'p\'(c) = \\lim_{x\\to c}\\left(\\frac{f(x) - f(c)}{x - c}\\right) \\lim_{x\\to c} g(x) + f(c) \\lim_{x\\to c}\\left(\\frac{g(x) - g(c)}{x - c}\\right) = f\'(c)g(c) + f(c)g\'(c)' },
        { why: 'For $q = f/g$, write $(f(x)/g(x) - f(c)/g(c))/(x - c) = \\frac{1}{g(x)g(c)} [\\frac{f(x)-f(c)}{x-c}g(c) - f(c)\\frac{g(x)-g(c)}{x-c}]$.', m: 'q\'(c) = \\frac{f\'(c)g(c) - f(c)g\'(c)}{(g(c))^2}' }
      ],
      ends: 'Both the Product and Quotient Rules are established rigorously.'
    },
    cards: [
      { q: 'State the Product Rule for derivatives.', a: '$(fg)\'(c) = f\'(c)g(c) + f(c)g\'(c)$.', kind: 'state' },
      { q: 'State the Quotient Rule for derivatives.', a: '$\\left(\\dfrac{f}{g}\\right)\'(c) = \\dfrac{f\'(c)g(c) - f(c)g\'(c)}{(g(c))^2}$, provided $g(c) \\ne 0$.', kind: 'state' },
      { q: 'What property of $g$ ensures $\\lim_{x\\to c} g(x) = g(c)$ in the proof of the Product Rule?', a: 'Differentiability of $g$ at $c$ implies continuity of $g$ at $c$ (Theorem 6.1.2).', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.1.4', bartle: '6.1.4', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Derivative of Monomials and Polynomials',
    oneLine: 'The derivative of x^n is n x^{n-1} for all integers n, proven by induction and the quotient rule.',
    statement: `Let $n \\in \\mathbb{Z}$ and let $f_n(x) = x^n$ (with domain $\\mathbb{R}$ if $n \\ge 0$, and $\\mathbb{R} \\setminus \\{0\\}$ if $n < 0$).
      <p>(a) For all $n \\in \\mathbb{N}$, $f_n'(x) = n x^{n-1}$ for all $x \\in \\mathbb{R}$.</p>
      <p>(b) For $n = 0$, $f_0(x) = 1$ is constant and $f_0'(x) = 0$.</p>
      <p>(c) For negative integers $m = -n$ ($n \\in \\mathbb{N}$), $f_m'(x) = m x^{m-1}$ for all $x \\ne 0$.</p>
      <p>(d) Any polynomial $P(x) = \\sum_{k=0}^n a_k x^k$ is differentiable on $\\mathbb{R}$ with $P'(x) = \\sum_{k=1}^n k a_k x^{k-1}$.</p>`,
    intuition: `<p>The power rule $\\frac{d}{dx} x^n = n x^{n-1}$ is the first calculus formula we ever learned. In Real Analysis, we establish it by mathematical induction:</p>
      <p>• Base case: $x^1$ has derivative $1 = 1 \\cdot x^0$.</p>
      <p>• Step: $x^{k+1} = x \\cdot x^k$. By the Product Rule, $(x^{k+1})' = 1 \\cdot x^k + x \\cdot (k x^{k-1}) = (k+1) x^k$. Dominoes fall for all positive integers!</p>
      <p>• Negative integers follow instantly by writing $x^{-n} = 1/x^n$ and applying the Quotient Rule.</p>`,
    needs: ['c.6.1.3', 'c.1.2.1'],
    traps: [
      `For negative exponents like $x^{-1}$, the derivative $-x^{-2}$ is NOT defined at $x = 0$!`,
      `The power rule for irrational powers $x^\\alpha$ requires the exponential and logarithm functions ($x^\\alpha = e^{\\alpha \\ln x}$) and is proved later.`
    ],
    proof: {
      idea: 'Base step $n=1$ directly from difference quotient; apply induction using the Product Rule, then extend to negative integers via the Quotient Rule.',
      why: 'Every positive power factors as $x \\cdot x^k$, matching the inductive step of the Product Rule.',
      rungs: [
        { why: 'Verify base step $n=1$: $(x)\' = \\lim_{h\\to 0} \\frac{(x+h) - x}{h} = 1 = 1 \\cdot x^0$.', m: '\\frac{d}{dx}(x) = 1 \\cdot x^0' },
        { why: 'Inductive hypothesis: assume $(x^k)\' = k x^{k-1}$ for $k \\in \\mathbb{N}$.', m: '(x^k)\' = k x^{k-1}' },
        { why: 'Write $x^{k+1} = x \\cdot x^k$ and apply the Product Rule (6.1.3).', m: '(x^{k+1})\' = (x)\' x^k + x (x^k)\' = 1 \\cdot x^k + x \\cdot (k x^{k-1}) = (k+1) x^k' },
        { why: 'By the Principle of Induction (1.2.1), $(x^n)\' = n x^{n-1}$ for all $n \\in \\mathbb{N}$.', m: '\\forall n \\in \\mathbb{N}, \\quad (x^n)\' = n x^{n-1}' },
        { why: 'For $m = -n$ with $n \\in \\mathbb{N}$ and $x \\ne 0$, apply Quotient Rule to $1/x^n$.', m: '(x^{-n})\' = \\frac{0 \\cdot x^n - 1 \\cdot (n x^{n-1})}{(x^n)^2} = -n x^{-n-1} = m x^{m-1}' }
      ],
      ends: 'The power rule holds for all integers $n \\in \\mathbb{Z}$. Linearity extends it to all polynomials.'
    },
    cards: [
      { q: 'State the power rule for the derivative of $x^n$ where $n \\in \\mathbb{Z}$.', a: '$\\dfrac{d}{dx} x^n = n x^{n-1}$ (for $x \\ne 0$ if $n \\le 0$).', kind: 'state' },
      { q: 'How is $(x^{k+1})\' = (k+1)x^k$ derived in the inductive step of the power rule?', a: 'Write $x^{k+1} = x \\cdot x^k$ and apply the Product Rule: $(x)\' x^k + x (x^k)\' = x^k + kx^k = (k+1)x^k$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.1.5', bartle: '6.1.5', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Carathéodory’s Theorem and the Chain Rule',
    oneLine: 'A clean formulation of derivatives that makes proving the Chain Rule effortless by avoiding division by zero.',
    statement: `Let $f: I \\to \\mathbb{R}$ and $c \\in I$. Then $f$ is differentiable at $c$ if and only if there exists a function $\\varphi: I \\to \\mathbb{R}$ that is <b>continuous at $c$</b> and satisfies:
      $$f(x) - f(c) = \\varphi(x)(x - c) \\quad \\text{for all } x \\in I$$
      In this case, $\\varphi(c) = f'(c)$.
      <p><b>The Chain Rule:</b> If $g: I \\to \\mathbb{R}$ is differentiable at $c$ and $f: J \\to \\mathbb{R}$ is differentiable at $g(c)$ (where $g(I) \\subseteq J$), then $(f \\circ g)'(c) = f'(g(c)) \\cdot g'(c)$.</p>`,
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
    id: 'c.6.1.7', bartle: '6.1.8', sec: '6.1', kind: 'theorem', tier: 'core',
    title: 'Derivative of Inverse Functions',
    oneLine: 'The derivative of the inverse is the reciprocal of the derivative: (f^{-1})\'(y) = 1 / f\'(x).',
    statement: `Let $I$ be an interval and let $f: I \\to \\mathbb{R}$ be strictly monotone and continuous on $I$.
      <p>Let $J = f(I)$ and let $g: J \\to \\mathbb{R}$ be the strictly monotone, continuous inverse function of $f$.</p>
      <p>If $f$ is differentiable at $c \\in I$ and $f'(c) \\ne 0$, then $g$ is differentiable at $d = f(c)$ and:
      $$g'(d) = \\frac{1}{f'(c)} = \\frac{1}{f'(g(d))}$$</p>`,
    intuition: `<p>Geometrically, the graph of the inverse function $g = f^{-1}$ is obtained by reflecting the graph of $f$ across the diagonal line $y = x$.</p>
      <p>A tangent line with slope $m = \\Delta y / \\Delta x$ reflects into a tangent line with slope $1/m = \\Delta x / \\Delta y$! The slope inverts! As long as the tangent line is not horizontal ($f'(c) \\ne 0$), the reflected tangent line is not vertical, giving a finite derivative $g'(d) = 1/f'(c)$.</p>`,
    needs: ['c.6.1.5', 'c.5.6.5'],
    traps: [
      `The condition $f'(c) \\ne 0$ is strictly required! If $f'(c) = 0$, the inverse function has a vertical tangent line at $d = f(c)$ and is NOT differentiable (e.g. $f(x) = x^3$ has $f'(0) = 0$, and its inverse $g(y) = y^{1/3}$ has infinite slope at $y = 0$).`,
      `Remember that the derivative on the right side is evaluated at $c = g(d)$, NOT at $d$!`
    ],
    proof: {
      idea: 'Apply Carathéodory’s Theorem to $f$ at $c$, invert the relation, and deduce that the inverted slope function is continuous at $d$.',
      why: 'Carathéodory avoids assuming differentiability of $g$ in advance and provides the derivative directly from continuity.',
      rungs: [
        { why: 'By Carathéodory (6.1.5), $\\exists \\varphi$ continuous at $c$ with $f(x) - f(c) = \\varphi(x)(x - c)$ and $\\varphi(c) = f\'(c) \\ne 0$.', m: 'f(x) - f(c) = \\varphi(x)(x - c), \\quad \\varphi(c) = f\'(c) \\ne 0' },
        { why: 'Since $\\varphi(c) \\ne 0$ and $\\varphi$ is continuous at $c$, $\\varphi(x) \\ne 0$ on a neighborhood $V$ of $c$.', m: '\\exists V = (c - \\delta, c + \\delta) : \\varphi(x) \\ne 0 \\quad \\forall x \\in V' },
        { why: 'For $y \\in f(V)$, let $x = g(y)$ and $d = f(c)$. Substitute into Carathéodory\'s relation.', m: 'y - d = f(g(y)) - f(c) = \\varphi(g(y)) [g(y) - g(d)]' },
        { why: 'Divide by $\\varphi(g(y))$: $g(y) - g(d) = \\frac{1}{\\varphi(g(y))} (y - d)$.', m: 'g(y) - g(d) = \\psi(y)(y - d) \\quad \\text{where } \\psi(y) = \\frac{1}{\\varphi(g(y))}' },
        { why: 'By Theorem 5.6.5, $g$ is continuous at $d$, so $\\lim_{y\\to d} g(y) = c$. Therefore $\\psi$ is continuous at $d$ with $\\psi(d) = 1/\\varphi(c) = 1/f\'(c)$.', m: 'g\'(d) = \\psi(d) = \\frac{1}{f\'(c)}' }
      ],
      ends: 'By Carathéodory’s Theorem, $g$ is differentiable at $d$ with derivative $1/f\'(c)$.'
    },
    cards: [
      { q: 'State the formula for the derivative of an inverse function $g = f^{-1}$ at $d = f(c)$.', a: '$g\'(d) = \\dfrac{1}{f\'(c)} = \\dfrac{1}{f\'(g(d))}$, provided $f\'(c) \\ne 0$.', kind: 'state' },
      { q: 'Why is $g(y) = y^{1/3}$ not differentiable at $y = 0$?', a: 'Because it is the inverse of $f(x) = x^3$, which has $f\'(0) = 0$; reciprocal of zero is undefined (vertical tangent).', kind: 'apply' }
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
    id: 'c.6.2.2', bartle: '6.2.2', sec: '6.2', kind: 'corollary', tier: 'core',
    title: 'Critical Points and Location of Extrema',
    oneLine: 'Interior extrema can only occur where the derivative vanishes or fails to exist.',
    statement: `Let $f: I \\to \\mathbb{R}$ be continuous on an interval $I$, and suppose $f$ has a relative extremum at an interior point $c \\in I$.
      <p>Then either:
      <br>(1) $f'(c) = 0$, or
      <br>(2) $f'(c)$ does not exist.</p>
      <p>Points satisfying (1) or (2) are called <b>critical points</b> of $f$ in $I$.</p>`,
    intuition: `<p>This is the theoretical justification for the optimization algorithm we all use: to find peaks and valleys of $f$, you never need to check all infinitely many points!</p>
      <p>You only need to hunt for points where $f'(c) = 0$ (smooth hilltops) or points where the derivative blows up or fails (sharp spikes like $|x|$ at $0$). Every single relative extremum is trapped in this tiny list of candidates.</p>`,
    needs: ['c.6.2.1'],
    traps: [
      `A point where $f'(c)$ does not exist can definitely be a maximum or minimum! For $f(x) = |x|$ at $0$, the minimum is at $0$ even though $f'(0)$ does not exist.`,
      `Endpoints of closed intervals must be checked separately; Fermat’s condition applies only to interior points.`
    ],
    proof: {
      idea: 'Direct consequence of Fermat’s Interior Extremum Theorem (6.2.1): if the derivative exists, it must vanish.',
      why: 'By trichotomy, either $f\'(c)$ does not exist, or it exists and Fermat\'s theorem forces it to be zero.',
      rungs: [
        { why: 'Let $c$ be an interior point where $f$ attains a relative extremum.', m: 'c \\in \\operatorname{int}(I) \\quad \\text{is a relative extremum}' },
        { why: 'Case 1: If $f$ is not differentiable at $c$, then $c$ satisfies condition (2).', m: 'f\'(c) \\text{ does not exist}' },
        { why: 'Case 2: If $f$ is differentiable at $c$, apply Fermat’s Interior Extremum Theorem (6.2.1).', m: 'f\'(c) = 0' }
      ],
      ends: 'Therefore, every interior extremum is either a zero of the derivative or a point where the derivative fails to exist.'
    },
    cards: [
      { q: 'What is a critical point of a function $f$ on an open interval?', a: 'A point $c$ where $f\'(c) = 0$ or where $f\'(c)$ does not exist.', kind: 'state' },
      { q: 'Can an interior extremum occur at a point where $f$ is not differentiable?', a: 'Yes. $f(x) = |x|$ has an interior minimum at $x = 0$ where $f\'(0)$ does not exist.', kind: 'apply' }
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
    id: 'c.6.2.5', bartle: '6.2.5', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Zero Derivative Characterization and Constant Difference',
    oneLine: 'f is constant if and only if f\' = 0; two functions differ by a constant if and only if they share identical derivatives.',
    statement: `Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.
      <p>(a) If $f'(x) = 0$ for all $x \\in (a, b)$, then $f$ is <b>constant</b> on $[a, b]$.</p>
      <p>(b) (Corollary 6.2.6) If $f'(x) = g'(x)$ for all $x \\in (a, b)$, then there exists a constant $C$ such that:
      $$f(x) = g(x) + C \\quad \\text{for all } x \\in [a, b]$$</p>`,
    intuition: `<p>In Class 12, we learned that $\\frac{d}{dx}(\\text{constant}) = 0$. But how do you prove the reverse: that ZERO slope forces the function to be flat everywhere?</p>
      <p>Lagrange’s MVT provides the proof! Pick ANY two points $x_1 < x_2$. The change is $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Since $f'(c) = 0$, the change is identically $0$! The function cannot budge an inch.</p>`,
    needs: ['c.6.2.4'],
    traps: [
      `The interval MUST be connected! If the domain is disjoint like $(0, 1) \\cup (2, 3)$, $f'$ can be $0$ everywhere while $f$ takes different values on the two pieces ($f(x) = 1$ on the first, $f(x) = 5$ on the second).`,
      `Remember $f$ must be continuous at the endpoints to conclude constancy on the closed interval $[a, b]$.`
    ],
    proof: {
      idea: 'Apply Lagrange’s MVT to $f$ on $[a, x]$ for every $x \\in (a, b]$.',
      why: 'Because $f\'(c) = 0$ at all points, $f(x) - f(a) = f\'(c)(x - a) = 0$, forcing $f(x) = f(a)$.',
      rungs: [
        { why: 'Let $x \\in (a, b]$. Apply MVT (6.2.4) to $f$ on the subinterval $[a, x]$.', m: '\\exists c \\in (a, x) : f(x) - f(a) = f\'(c)(x - a)' },
        { why: 'By hypothesis, $f\'(c) = 0$ since $c \\in (a, b)$.', m: 'f(x) - f(a) = 0 \\cdot (x - a) = 0' },
        { why: 'Conclude $f(x) = f(a)$ for all $x \\in [a, b]$.', m: 'f(x) = f(a) = \\text{constant} \\quad \\forall x \\in [a, b]' },
        { why: 'For (b), define $h(x) = f(x) - g(x)$. Then $h\'(x) = f\'(x) - g\'(x) = 0$.', m: 'h\'(x) = 0 \\implies h(x) = C \\implies f(x) = g(x) + C' }
      ],
      ends: 'Both the Zero Derivative Theorem and the Constant Difference Corollary are established.'
    },
    cards: [
      { q: 'If $f\'(x) = 0$ on an interval $I$, what is the conclusion about $f$?', a: '$f$ is constant on $I$.', kind: 'state' },
      { q: 'Why does $f\'(x) = 0$ fail to imply $f$ is constant on $D = (0, 1) \\cup (2, 3)$?', a: 'Because $D$ is not an interval; $f$ can take different constant values on disconnected components.', kind: 'trap' },
      { q: 'If $f\'(x) = g\'(x)$ on $[a, b]$, what is the relationship between $f$ and $g$?', a: '$f(x) = g(x) + C$ for some real constant $C$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.2.7', bartle: '6.2.7', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Monotonicity Criteria for Differentiable Functions',
    oneLine: 'Nonnegative derivative means increasing, positive derivative means strictly increasing.',
    statement: `Let $f$ be continuous on $[a, b]$ and differentiable on $(a, b)$.
      <p>(a) $f$ is <b>increasing</b> on $[a, b]$ if and only if $f'(x) \\ge 0$ for all $x \\in (a, b)$.</p>
      <p>(b) $f$ is <b>decreasing</b> on $[a, b]$ if and only if $f'(x) \\le 0$ for all $x \\in (a, b)$.</p>
      <p>(c) If $f'(x) > 0$ for all $x \\in (a, b)$, then $f$ is <b>strictly increasing</b> on $[a, b]$.</p>
      <p>(d) If $f'(x) < 0$ for all $x \\in (a, b)$, then $f$ is <b>strictly decreasing</b> on $[a, b]$.</p>`,
    intuition: `<p>In Class 12 calculus, you used $f'(x) > 0$ to test if a curve is increasing. In Real Analysis, MVT turns this from a visual intuition into a rigorous proof:</p>
      <p>For any two points $x_1 < x_2$, the change is $f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$. Because $x_2 - x_1 > 0$, the sign of $f(x_2) - f(x_1)$ is IDENTICAL to the sign of $f'(c)$!</p>`,
    needs: ['c.6.2.4'],
    traps: [
      `The converse of (c) is FALSE! A function can be strictly increasing even if its derivative touches zero at some points (e.g. $f(x) = x^3$ is strictly increasing on $\\mathbb{R}$, but $f'(0) = 0$).`,
      `Strictly increasing does NOT require $f'(x) > 0$ at every single point — isolated zeros of $f'$ do not destroy strict monotonicity.`
    ],
    proof: {
      idea: 'Apply Lagrange’s MVT on arbitrary pairs $x_1 < x_2$ inside $[a, b]$.',
      why: 'MVT reduces the difference $f(x_2) - f(x_1)$ directly to $f\'(c)(x_2 - x_1)$.',
      rungs: [
        { why: 'Let $x_1, x_2 \\in [a, b]$ with $x_1 < x_2$. Apply MVT (6.2.4) to $f$ on $[x_1, x_2]$.', m: '\\exists c \\in (x_1, x_2) : f(x_2) - f(x_1) = f\'(c)(x_2 - x_1)' },
        { why: 'Since $x_2 - x_1 > 0$, if $f\'(c) \\ge 0$, then $f(x_2) - f(x_1) \\ge 0$, so $f(x_1) \\le f(x_2)$.', m: 'f\' \\ge 0 \\implies f(x_1) \\le f(x_2)' },
        { why: 'If $f\'(c) > 0$, then $f(x_2) - f(x_1) > 0$, so $f(x_1) < f(x_2)$ (strictly increasing).', m: 'f\' > 0 \\implies f(x_1) < f(x_2)' },
        { why: 'Conversely, if $f$ is increasing, for any $x \\ne c$, $(f(x) - f(c))/(x - c) \\ge 0$.', m: 'f\'(c) = \\lim_{x\\to c} \\frac{f(x) - f(c)}{x - c} \\ge 0' }
      ],
      ends: 'The Monotonicity Criteria are completely proved in both directions.'
    },
    cards: [
      { q: 'State the condition for a differentiable function $f$ to be increasing on $[a, b]$.', a: '$f\'(x) \\ge 0$ for all $x \\in (a, b)$.', kind: 'state' },
      { q: 'If $f$ is strictly increasing on $\\mathbb{R}$, must $f\'(x) > 0$ everywhere?', a: 'No. $f(x) = x^3$ is strictly increasing, yet $f\'(0) = 0$.', kind: 'trap' }
    ]
  },

  {
    id: 'c.6.2.8', bartle: '6.2.8', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'First Derivative Test for Relative Extrema',
    oneLine: 'Slope switching from positive to negative signals a peak; negative to positive signals a valley.',
    statement: `Let $f$ be continuous on an interval $I$, and let $c \\in I$ be an interior point. Suppose $f$ is differentiable on $(c - \\delta, c + \\delta) \\setminus \\{c\\}$ for some $\\delta > 0$.
      <p>(a) If $f'(x) \\ge 0$ for all $x \\in (c - \\delta, c)$ and $f'(x) \\le 0$ for all $x \\in (c, c + \\delta)$, then $f$ has a <b>relative maximum</b> at $c$.</p>
      <p>(b) If $f'(x) \\le 0$ for all $x \\in (c - \\delta, c)$ and $f'(x) \\ge 0$ for all $x \\in (c, c + \\delta)$, then $f$ has a <b>relative minimum</b> at $c$.</p>`,
    intuition: `<p>Think of climbing a hill: on the way up, the slope is positive ($f' > 0$). Once you crest the peak and start heading down, the slope turns negative ($f' < 0$).</p>
      <p>By the Monotonicity Criteria, $f$ is increasing to the left of $c$ and decreasing to the right of $c$. Therefore, $f(c)$ is higher than all nearby values — a relative maximum!</p>
      <p>Notice $f$ does NOT even need to be differentiable at $c$ itself (e.g. $f(x) = -|x|$ at $0$).</p>`,
    needs: ['c.6.2.7'],
    traps: [
      `If $f'(x)$ keeps the same sign on both sides of $c$ (e.g. $f(x) = x^3$, where $f'(x) > 0$ for $x < 0$ and $x > 0$), $c$ is NOT an extremum!`,
      `Remember $f$ MUST be continuous at $c$; a jump discontinuity at $c$ breaks the test.`
    ],
    proof: {
      idea: 'Apply MVT on $[x, c]$ for $x < c$ and on $[c, x]$ for $x > c$.',
      why: 'The signs of the derivative on each side guarantee $f(x) \\le f(c)$ for all nearby $x$.',
      rungs: [
        { why: 'Let $x \\in (c - \\delta, c)$. Apply MVT (6.2.4) on $[x, c]$: $f(c) - f(x) = f\'(z_1)(c - x)$ for some $z_1 \\in (x, c)$.', m: 'f(c) - f(x) = f\'(z_1)(c - x)' },
        { why: 'Since $f\'(z_1) \\ge 0$ and $c - x > 0$, $f(c) - f(x) \\ge 0 \\implies f(x) \\le f(c)$.', m: 'f(x) \\le f(c) \\quad \\forall x \\in (c - \\delta, c)' },
        { why: 'Let $x \\in (c, c + \\delta)$. Apply MVT on $[c, x]$: $f(x) - f(c) = f\'(z_2)(x - c)$ for some $z_2 \\in (c, x)$.', m: 'f(x) - f(c) = f\'(z_2)(x - c)' },
        { why: 'Since $f\'(z_2) \\le 0$ and $x - c > 0$, $f(x) - f(c) \\le 0 \\implies f(x) \\le f(c)$.', m: 'f(x) \\le f(c) \\quad \\forall x \\in (c, c + \\delta)' }
      ],
      ends: 'Therefore $f(x) \\le f(c)$ for all $x \\in (c - \\delta, c + \\delta)$, proving $c$ is a relative maximum.'
    },
    cards: [
      { q: 'State the First Derivative Test for a relative maximum.', a: 'If $f$ is continuous at $c$, $f\'(x) \\ge 0$ for $x < c$, and $f\'(x) \\le 0$ for $x > c$ nearby, then $c$ is a relative maximum.', kind: 'state' },
      { q: 'Does the First Derivative Test require $f$ to be differentiable at the critical point $c$ itself?', a: 'No, $f$ only needs to be continuous at $c$ and differentiable in punctured neighborhoods around $c$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.2.9', bartle: '6.2.9', sec: '6.2', kind: 'theorem', tier: 'core',
    title: 'Mean Value Inequality: Bounded Derivatives Imply Lipschitz Continuity',
    oneLine: 'If |f\'(x)| <= M everywhere, then |f(x) - f(y)| <= M|x - y|; bounded derivative implies Lipschitz continuity.',
    statement: `Let $f$ be differentiable on an interval $I$. If there exists a constant $M > 0$ such that $|f'(x)| \\le M$ for all $x \\in I$, then:
      $$|f(x) - f(y)| \\le M |x - y| \\quad \\text{for all } x, y \\in I$$
      Consequently, $f$ is <b>Lipschitz continuous</b> on $I$, which implies that $f$ is <b>uniformly continuous</b> on $I$.`,
    intuition: `<p>Think of $M$ as a universal speed limit. If your car can never exceed $M$ km/h ($|f'(x)| \\le M$), then the physical distance between your positions at any two times $x$ and $y$ can never exceed $M \\cdot |x - y|$.</p>
      <p>This is one of the easiest ways to prove uniform continuity in university exams: just differentiate $f(x)$! If $|f'(x)|$ is bounded by a constant, $f$ is immediately Lipschitz, which guarantees uniform continuity with zero $\\varepsilon$-$\\delta$ pain.</p>`,
    needs: ['c.6.2.4', 'c.5.4.5'],
    traps: [
      `The interval $I$ must be convex/connected (an actual interval) so that the line segment between $x$ and $y$ stays inside the domain.`,
      `$f(x) = \\sqrt{x}$ on $[0, 1]$ is uniformly continuous, but its derivative $1/(2\\sqrt{x})$ is UNBOUNDED near $0$. Bounded derivative is sufficient for uniform continuity, but not necessary!`
    ],
    proof: {
      idea: 'Apply Lagrange MVT between $x$ and $y$ and take absolute values.',
      why: 'MVT equates the secant slope $|(f(x)-f(y))/(x-y)|$ to $|f\'(c)| \\le M$.',
      rungs: [
        { why: 'Let $x, y \\in I$ with $x \\ne y$. Apply MVT (6.2.4) to $f$ on the interval between $x$ and $y$.', m: '\\exists c \\text{ between } x \\text{ and } y : f(x) - f(y) = f\'(c)(x - y)' },
        { why: 'Take the absolute value of both sides.', m: '|f(x) - f(y)| = |f\'(c)| |x - y|' },
        { why: 'Apply the hypothesis $|f\'(c)| \\le M$.', m: '|f(x) - f(y)| \\le M |x - y|' },
        { why: 'By Theorem 5.4.5, any function satisfying $|f(x)-f(y)| \\le M|x-y|$ is Lipschitz, hence uniformly continuous.', m: 'f \\text{ is Lipschitz continuous on } I' }
      ],
      ends: 'The Mean Value Inequality is proved: a bounded derivative guarantees Lipschitz continuity.'
    },
    cards: [
      { q: 'State the Mean Value Inequality for a function with bounded derivative.', a: 'If $|f\'(x)| \\le M$ on $I$, then $|f(x) - f(y)| \\le M |x - y|$ for all $x, y \\in I$.', kind: 'state' },
      { q: 'Is $f(x) = \\sin x$ Lipschitz continuous on $\\mathbb{R}$?', a: 'Yes, because $|f\'(x)| = |\\cos x| \\le 1$ for all $x \\in \\mathbb{R}$, so $|\\sin x - \\sin y| \\le |x - y|$.', kind: 'apply' }
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
    title: 'L’Hospital’s Rule (0/0 Indeterminate Form)',
    oneLine: 'When both numerator and denominator vanish to 0, the limit of their ratio equals the limit of the ratio of their derivatives.',
    statement: `Let $-\\infty \\le a < b \\le +\\infty$, and let $f, g$ be differentiable on $(a, b)$ such that $g'(x) \\ne 0$ for all $x \\in (a, b)$.
      <p>Suppose that:
      $$\\lim_{x\\to a^+} f(x) = 0 \\quad \\text{and} \\quad \\lim_{x\\to a^+} g(x) = 0$$
      If $\\lim_{x\\to a^+} \\frac{f'(x)}{g'(x)} = L \\in \\mathbb{R} \\cup \\{\\pm\\infty\\}$, then:
      $$\\lim_{x\\to a^+} \\frac{f(x)}{g(x)} = L$$</p>`,
    intuition: `<p>In Class 12, everyone loves applying L'Hospital's Rule: when faced with $0/0$, differentiate the top and differentiate the bottom. But in Real Analysis, we prove WHY it works using Cauchy's MVT!</p>
      <p>By defining $f(a) = 0$ and $g(a) = 0$, the ratio $\\frac{f(x)}{g(x)} = \\frac{f(x) - f(a)}{g(x) - g(a)}$ is transformed by Cauchy MVT into $\\frac{f'(c_x)}{g'(c_x)}$ for some $c_x \\in (a, x)$. As $x \\to a^+$, $c_x \\to a^+$, locking the ratio onto $L$!</p>`,
    needs: ['c.6.3.2', 'c.4.1.4'],
    proof: {
      idea: 'Extend $f$ and $g$ continuously to $a$ by setting $f(a) = 0, g(a) = 0$, and apply Cauchy\'s MVT on $[a, x]$.',
      why: 'Cauchy MVT translates $(f(x)-0)/(g(x)-0)$ into $f\'(c_x)/g\'(c_x)$ with $a < c_x < x$; squeezing $x \\to a^+$ forces $c_x \\to a^+$.',
      rungs: [
        { why: 'Extend $f$ and $g$ to $[a, b)$ by defining $f(a) = 0$ and $g(a) = 0$. Both are continuous on $[a, x]$ for $x \\in (a, b)$.', m: 'f(a) := 0, \\quad g(a) := 0' },
        { why: 'Apply Cauchy\'s Mean Value Theorem (6.3.2) to $f$ and $g$ on $[a, x]$.', m: '\\exists c_x \\in (a, x) : \\frac{f(x) - f(a)}{g(x) - g(a)} = \\frac{f\'(c_x)}{g\'(c_x)}' },
        { why: 'Substitute $f(a) = 0$ and $g(a) = 0$.', m: '\\frac{f(x)}{g(x)} = \\frac{f\'(c_x)}{g\'(c_x)} \\quad \\text{with } a < c_x < x' },
        { why: 'As $x \\to a^+$, the squeeze $a < c_x < x$ forces $c_x \\to a^+$.', m: '\\lim_{x\\to a^+} \\frac{f(x)}{g(x)} = \\lim_{c_x\\to a^+} \\frac{f\'(c_x)}{g\'(c_x)} = L' }
      ],
      ends: 'The $0/0$ form of L’Hospital’s Rule is rigorously established.'
    },
    traps: [
      `Differentiating $\\frac{f}{g}$ using the Quotient Rule instead of differentiating numerator and denominator separately!`,
      `Applying L'Hospital when the limit is NOT indeterminate ($0/0$ or $\\infty/\\infty$).`
    ],
    cards: [
      { q: 'State L’Hospital’s Rule for the indeterminate form $0/0$.', a: 'If $\\lim f = 0$, $\\lim g = 0$, $g\' \\ne 0$, and $\\lim f\'/g\' = L$, then $\\lim f/g = L$.', kind: 'state' },
      { q: 'What fundamental theorem is the engine behind L’Hospital’s Rule?', a: 'Cauchy’s Mean Value Theorem.', kind: 'recall' }
    ]
  },

  {
    id: 'c.6.3.4', bartle: '6.3.5', sec: '6.3', kind: 'theorem', tier: 'core',
    title: 'L’Hospital’s Rule (∞/∞ Indeterminate Form)',
    oneLine: 'When the denominator diverges to infinity, the limit of the ratio equals the limit of the ratio of derivatives.',
    statement: `Let $-\\infty \\le a < b \\le +\\infty$, and let $f, g$ be differentiable on $(a, b)$ with $g'(x) \\ne 0$ for all $x \\in (a, b)$.
      <p>Suppose that:
      $$\\lim_{x\\to a^+} g(x) = \\pm\\infty$$
      If $\\lim_{x\\to a^+} \\frac{f'(x)}{g'(x)} = L \\in \\mathbb{R}$, then:
      $$\\lim_{x\\to a^+} \\frac{f(x)}{g(x)} = L$$</p>`,
    intuition: `<p>The $\\infty/\\infty$ form is even more powerful than $0/0$: you don't even need $f(x) \\to \\infty$! As long as the denominator $g(x)$ explodes to $\\pm\\infty$, the derivative ratio determines the limit.</p>
      <p>The proof fixes an intermediate point $y$ and applies Cauchy MVT on $[x, y]$. As $x \\to a^+$, the $g(y)/g(x)$ term is crushed to zero because $g(x) \\to \\infty$, isolating the derivative slope $f'/g'$!</p>`,
    needs: ['c.6.3.2', 'c.4.3.3'],
    traps: [
      `Assuming $f(x)$ must also tend to $\\infty$. The theorem holds whenever $\\lim g(x) = \\pm\\infty$, regardless of whether $f$ converges or diverges!`,
      `If the derivative ratio oscillates without settling (e.g. $(x + \\sin x)/x$ as $x \\to \\infty$), L'Hospital is inconclusive, but the original limit may still exist.`
    ],
    proof: {
      idea: 'Apply Cauchy MVT on $[x, y]$ for a fixed $y$, then send $x \\to a^+$ to let the $g(x) \\to \\infty$ term dominate.',
      why: 'Because $g(x) \\to \\infty$, dividing by $g(x)$ eliminates the endpoint evaluation at $y$.',
      rungs: [
        { why: 'Given $\\varepsilon > 0$, choose $y \\in (a, b)$ such that $|f\'(c)/g\'(c) - L| < \\varepsilon/2$ for all $c \\in (a, y)$.', m: 'a < x < y \\implies \\exists c \\in (x, y) : \\left| \\frac{f\'(c)}{g\'(c)} - L \\right| < \\frac{\\varepsilon}{2}' },
        { why: 'Apply Cauchy MVT (6.3.2) on $[x, y]$.', m: '\\frac{f(x) - f(y)}{g(x) - g(y)} = \\frac{f\'(c)}{g\'(c)}' },
        { why: 'Multiply by $\\frac{g(x) - g(y)}{g(x)}$ and rewrite $\\frac{f(x)}{g(x)}$.', m: '\\frac{f(x)}{g(x)} = \\frac{f\'(c)}{g\'(c)} \\left(1 - \\frac{g(y)}{g(x)}\\right) + \\frac{f(y)}{g(x)}' },
        { why: 'Since $y$ is fixed and $g(x) \\to \\infty$ as $x \\to a^+$, the terms $g(y)/g(x) \\to 0$ and $f(y)/g(x) \\to 0$.', m: '\\lim_{x\\to a^+} \\frac{f(x)}{g(x)} = \\lim_{c\\to a^+} \\frac{f\'(c)}{g\'(c)} = L' }
      ],
      ends: 'The $\\infty/\\infty$ form of L’Hospital’s Rule is established.'
    },
    cards: [
      { q: 'State L’Hospital’s Rule for the indeterminate form $\\infty/\\infty$.', a: 'If $\\lim g(x) = \\pm\\infty$, $g\' \\ne 0$, and $\\lim f\'/g\' = L$, then $\\lim f/g = L$.', kind: 'state' },
      { q: 'Compute $\\lim_{x\\to\\infty} \\dfrac{\\ln x}{x}$ using L’Hospital’s Rule.', a: 'Form $\\infty/\\infty$: $\\lim_{x\\to\\infty} \\dfrac{1/x}{1} = 0$.', kind: 'apply' }
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
  },

  {
    id: 'c.6.4.2', bartle: '6.4.2', sec: '6.4', kind: 'theorem', tier: 'core',
    title: 'Taylor Remainder Estimates and Maclaurin Expansions',
    oneLine: 'If the (n+1)-th derivative is bounded, the remainder vanishes as n -> infinity, generating exact power series for e^x, sin x, cos x.',
    statement: `Let $f$ have derivatives of all orders on an interval $I$ containing $x_0$.
      <p>If there exists $M > 0$ such that $|f^{(n+1)}(t)| \\le M$ for all $t$ between $x_0$ and $x$, then:
      $$|R_n(x)| \\le \\frac{M}{(n + 1)!} |x - x_0|^{n+1}$$</p>
      <p>Since $\\lim_{n\\to\\infty} \\frac{|x - x_0|^{n+1}}{(n + 1)!} = 0$, the Taylor series converges to $f(x)$:
      $$f(x) = \\sum_{k=0}^\\infty \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$</p>
      <p><b>Standard Maclaurin Expansions ($x_0 = 0$):</b>
      <br>• $e^x = \\sum_{k=0}^\\infty \\frac{x^k}{k!} = 1 + x + \\frac{x^2}{2!} + \\cdots$ (for all $x \\in \\mathbb{R}$)
      <br>• $\\sin x = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k+1}}{(2k + 1)!} = x - \\frac{x^3}{6} + \\cdots$ (for all $x \\in \\mathbb{R}$)
      <br>• $\\cos x = \\sum_{k=0}^\\infty \\frac{(-1)^k x^{2k}}{(2k)!} = 1 - \\frac{x^2}{2} + \\cdots$ (for all $x \\in \\mathbb{R}$)</p>`,
    intuition: `<p>How does your scientific calculator know $\\sin(0.3)$ to $10$ decimal places in a microsecond? It doesn't draw triangles — it computes the polynomial $P_n(x)$!</p>
      <p>Because the derivatives of $\\sin x$ and $\\cos x$ are bounded by $M = 1$ everywhere, the error $|R_n(x)| \\le \\frac{|x|^{n+1}}{(n+1)!}$ collapses to zero with blinding speed. Taking just 4 terms of the Taylor polynomial gives accuracy to 8 decimal places!</p>`,
    needs: ['c.6.4.1', 'c.3.2.10'],
    traps: [
      `A function can have derivatives of all orders, yet its Taylor series fails to converge to $f(x)$! The classic monster is Cauchy's function $f(x) = e^{-1/x^2}$ ($f(0)=0$): all derivatives at $0$ are $0$, so its Taylor series is $0 + 0 + \\cdots = 0 \\ne f(x)$!`,
      `Always check that the remainder $R_n(x) \\to 0$ to guarantee that the series converges to the original function.`
    ],
    proof: {
      idea: 'Bound the Lagrange remainder using $|f^{(n+1)}(c)| \\le M$ and apply the sequence limit property $\\lim \\frac{a^n}{n!} = 0$.',
      why: 'Factorials grow faster than any geometric power $a^n$, crushing the remainder to 0 for all real $x$.',
      rungs: [
        { why: 'From Taylor’s Theorem (6.4.1), write the Lagrange remainder on $[x_0, x]$.', m: 'R_n(x) = \\frac{f^{(n+1)}(c)}{(n + 1)!}(x - x_0)^{n+1} \\quad \\text{for some } c \\text{ between } x_0, x' },
        { why: 'Take absolute values and substitute the upper bound $|f^{(n+1)}(c)| \\le M$.', m: '|R_n(x)| \\le \\frac{M}{(n + 1)!} |x - x_0|^{n+1}' },
        { why: 'By the Ratio Test for sequences (Theorem 3.2.11), for any fixed real number $A = |x - x_0|$, $\\lim_{n\\to\\infty} \\frac{A^{n+1}}{(n+1)!} = 0$.', m: '\\lim_{n\\to\\infty} \\frac{|x - x_0|^{n+1}}{(n + 1)!} = 0' },
        { why: 'Apply the Squeeze Theorem for sequences (3.2.7) to conclude $\\lim_{n\\to\\infty} R_n(x) = 0$.', m: '\\lim_{n\\to\\infty} R_n(x) = 0 \\implies f(x) = \\lim_{n\\to\\infty} P_n(x)' }
      ],
      ends: 'The Taylor series converges to $f(x)$ whenever derivatives are uniformly bounded on the interval.'
    },
    cards: [
      { q: 'What is the upper bound on the Taylor remainder $|R_n(x)|$ when $|f^{(n+1)}(t)| \\le M$?', a: '$|R_n(x)| \\le \\dfrac{M}{(n + 1)!} |x - x_0|^{n+1}$.', kind: 'state' },
      { q: 'Why do the Maclaurin series for $\\sin x$ and $\\cos x$ converge for ALL real numbers?', a: 'Because all derivatives of $\\sin x$ and $\\cos x$ are bounded by $M = 1$, and $\\lim_{n\\to\\infty} \\dfrac{|x|^{n+1}}{(n+1)!} = 0$ for every $x \\in \\mathbb{R}$.', kind: 'recall' },
      { q: 'Give an example of an infinitely differentiable function whose Maclaurin series does not represent the function away from 0.', a: 'Cauchy’s function $f(x) = e^{-1/x^2}$ for $x \\ne 0$, $f(0) = 0$, whose derivatives at $0$ are all $0$.', kind: 'apply' }
    ]
  }
);

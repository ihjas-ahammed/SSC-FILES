/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module 4: Sequences and Series of Functions (Chapter 8)
   Sections: 8.1 (Pointwise & Uniform Convergence), 8.2 (Interchange of Limits),
             8.3 (Exponential & Logarithmic), 8.4 (Trigonometric Functions)
   Diagrams: c.8.1.1, c.8.1.3, c.8.2.2, c.8.2.4
   ══════════════════════════════════════════════════════════════════════════ */

CONCEPTS.push(
  {
    id: 'c.8.1.1', bartle: '8.1.1', sec: '8.1', kind: 'definition', tier: 'core',
    title: 'Pointwise vs Uniform Convergence',
    oneLine: 'Pointwise convergence is evaluated point-by-point; uniform convergence hugs the entire curve simultaneously inside an ε-tube.',
    statement: `Let $(f_n)$ be a sequence of functions defined on $A \\subseteq \\mathbb{R}$, and let $f: A \\to \\mathbb{R}$.
      <p>(a) $(f_n)$ converges <b>pointwise</b> to $f$ on $A$ if for each $x \\in A$ and each $\\varepsilon > 0$, there exists $K(\\varepsilon, x) \\in \\mathbb{N}$ such that:
      $$n \\ge K(\\varepsilon, x) \\implies |f_n(x) - f(x)| < \\varepsilon$$</p>
      <p>(b) $(f_n)$ converges <b>uniformly</b> to $f$ on $A$ if for each $\\varepsilon > 0$, there exists a single $K(\\varepsilon) \\in \\mathbb{N}$ (independent of $x$) such that for <b>all $x \\in A$ simultaneously</b>:
      $$n \\ge K(\\varepsilon) \\implies |f_n(x) - f(x)| < \\varepsilon$$</p>`,
    intuition: `<p>This is the most important distinction in all of advanced calculus! Think of training a classroom of students:</p>
      <p>• <b>Pointwise:</b> Every student eventually understands the topic, but at completely different speeds. Student A needs $5$ days, Student B needs $20$ days, and as you check students closer to the back of the room, they need infinitely many days ($K$ depends on $x$).</p>
      <p>• <b>Uniform:</b> The entire classroom reaches mastery simultaneously! One deadline $K$ works for all students across the entire set ($K$ depends ONLY on $\\varepsilon$, not on $x$).</p>
      <p><b>The Classic Indian Exam Counterexample:</b> $f_n(x) = x^n$ on $[0, 1]$. For $x < 1$, $x^n \\to 0$. But at $x = 1$, $1^n \\to 1$. Every single $f_n$ is continuous, but the pointwise limit jumps from $0$ to $1$ at the boundary! Pointwise convergence CANNOT preserve continuity, but uniform convergence GUARANTEES it!</p>`,
    needs: ['c.3.1.3', 'c.5.1.1'],
    traps: [
      `Confusing the order of quantifiers: Pointwise is $\\forall x \\, \\forall \\varepsilon \\, \\exists K$. Uniform is $\\forall \\varepsilon \\, \\exists K \\, \\forall x$. The position of $\\exists K$ changes everything!`,
      `Assuming pointwise limit of continuous functions is always continuous. The counterexample $x^n$ on $[0, 1]$ is tested in almost every semester exam.`
    ],
    cards: [
      { q: 'What is the crucial difference between pointwise and uniform convergence?', a: 'In pointwise convergence, $K$ can depend on both $\\varepsilon$ and $x$; in uniform convergence, one single $K$ works for all $x \\in A$ simultaneously.', kind: 'state' },
      { q: 'What is the pointwise limit of $f_n(x) = x^n$ on $[0, 1]$?', a: '$f(x) = 0$ for $x \\in [0, 1)$, and $f(1) = 1$. The limit is discontinuous!', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.1.3', bartle: '8.1.3', sec: '8.1', kind: 'theorem', tier: 'core',
    title: 'The Uniform Norm (Sup-Norm Criterion)',
    oneLine: 'Uniform convergence means the maximum vertical gap between fn and f collapses to zero.',
    statement: `Let $f_n, f: A \\to \\mathbb{R}$ be bounded functions. The <b>uniform norm</b> (sup-norm) on $A$ is:
      $$\\|f_n - f\\|_A = \\sup_{x \\in A} |f_n(x) - f(x)|$$
      <p><b>The Criterion:</b> $(f_n)$ converges uniformly to $f$ on $A$ if and only if:
      $$\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$$</p>`,
    intuition: `<p>Geometrically, imagine drawing an "$\\varepsilon$-ribbon" or tube of width $\\pm\\varepsilon$ around the target graph $f(x)$.</p>
      <p>Uniform convergence means that after step $K$, the entire graph of $f_n(x)$ is sucked completely inside this tube from left to right across the entire domain!</p>
      <p>To test uniform convergence in exam questions: find the maximum gap using Class 12 calculus (set derivative to zero!), and check if that maximum peak vanishes as $n \\to \\infty$.</p>`,
    needs: ['c.8.1.1', 'c.2.3.2'],
    traps: [
      `If the peak error stays bounded away from $0$ (even if the peak slides to the boundary, like in $x^n$), uniform convergence fails!`,
      `Make sure to take the supremum over the specified domain: $x/n$ converges uniformly on $[0, 10]$, but NOT on all of $\\mathbb{R}$.`
    ],
    cards: [
      { q: 'Define the uniform norm $\\|g\\|_A$ of a function $g$ on $A$.', a: '$\\|g\\|_A = \\sup_{x \\in A} |g(x)|$.', kind: 'state' },
      { q: 'How is the sup-norm used to test uniform convergence?', a: '$f_n \\to f$ uniformly on $A$ iff $\\lim_{n\\to\\infty} \\|f_n - f\\|_A = 0$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.8.2.2', bartle: '8.2.2', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'The Uniform Limit Theorem (Preservation of Continuity)',
    oneLine: 'The uniform limit of continuous functions is always continuous. No jumps allowed.',
    statement: `Let $(f_n)$ be a sequence of functions defined on $A \\subseteq \\mathbb{R}$ that converges <b>uniformly</b> on $A$ to a function $f$.
      <p>If each $f_n$ is <b>continuous at a point $c \\in A$</b>, then the limit function $f$ is also <b>continuous at $c$</b>.</p>
      <p>In particular, if each $f_n$ is continuous on all of $A$, then $f$ is continuous on all of $A$.</p>`,
    intuition: `<p>This is the big prize of uniform convergence! The proof is the famous <b>"$\\varepsilon/3$ argument"</b>:</p>
      $$|f(x) - f(c)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(c)| + |f_n(c) - f(c)|$$
      <p>1. The first term is $< \\varepsilon/3$ because $f_n$ is uniformly close to $f$.</p>
      <p>2. The second term is $< \\varepsilon/3$ because $f_n$ itself is continuous.</p>
      <p>3. The third term is $< \\varepsilon/3$ because $f_n(c)$ is close to $f(c)$.</p>
      <p>Adding them gives $|f(x) - f(c)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon$!</p>`,
    needs: ['c.8.1.1', 'c.5.1.1', 'c.2.2.1'],
    traps: [
      `If the limit function $f$ is discontinuous, the convergence CANNOT be uniform! This is the quickest way to disprove uniform convergence in exams: check if the limit has a jump; if yes, uniform convergence is instantly ruled out!`,
      `Remember the converse is not true in general without extra conditions (like Dini's Theorem).`
    ],
    proof: {
      idea: `Use the triangle inequality to split $|f(x) - f(c)|$ into three terms of size $\\varepsilon/3$.`,
      why: `Uniform convergence controls the gap between $f$ and $f_n$ everywhere; continuity of $f_n$ controls the local gap between $f_n(x)$ and $f_n(c)$.`,
      rungs: [
        { why: 'Split the total change using the triangle inequality with an intermediate $f_n$.', m: '|f(x) - f(c)| \\le |f(x) - f_n(x)| + |f_n(x) - f_n(c)| + |f_n(c) - f(c)|' },
        { why: 'Choose $N$ such that for all $n \\ge N$ and all $t \\in A$, $|f_n(t) - f(t)| < \\varepsilon/3$.', m: '|f(x) - f_N(x)| < \\varepsilon/3 \\quad \\text{and} \\quad |f_N(c) - f(c)| < \\varepsilon/3' },
        { why: 'Since $f_N$ is continuous at $c$, choose $\\delta > 0$ such that $|x - c| < \\delta \\implies |f_N(x) - f_N(c)| < \\varepsilon/3$.', m: '|f_N(x) - f_N(c)| < \\varepsilon/3' },
        { why: 'Combine all three $\\varepsilon/3$ bounds.', m: '|f(x) - f(c)| < \\varepsilon/3 + \\varepsilon/3 + \\varepsilon/3 = \\varepsilon' }
      ],
      ends: 'Therefore, $f$ is continuous at $c$.'
    },
    cards: [
      { q: 'State the Uniform Limit Theorem.', a: 'If $(f_n)$ is a sequence of continuous functions converging uniformly to $f$ on $A$, then $f$ is continuous on $A$.', kind: 'state' },
      { q: 'If $f_n(x) = x^n$ on $[0, 1]$, why does the Uniform Limit Theorem prove $f_n$ does NOT converge uniformly?', a: 'Because each $f_n$ is continuous, but the limit function is discontinuous at $x = 1$.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.2.4', bartle: '8.2.4', sec: '8.2', kind: 'theorem', tier: 'core',
    title: 'Interchange of Limit and Integral',
    oneLine: 'Under uniform convergence, the limit of the integrals equals the integral of the limit.',
    statement: `Let $(f_n)$ be a sequence of functions in $\\mathcal{R}[a, b]$ that converges <b>uniformly</b> on $[a, b]$ to $f$.
      <p>Then $f \\in \\mathcal{R}[a, b]$, and:
      $$\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b \\left( \\lim_{n\\to\\infty} f_n(x) \\right) dx = \\int_a^b f(x) \\, dx$$</p>`,
    intuition: `<p>In pure calculus, swapping limits is dangerous: $\\lim \\int \\ne \\int \\lim$ in general! Look at this famous counterexample:</p>
      <p>Consider a tall narrow spike function $f_n(x)$ on $[0, 1]$ of height $n$ and width $1/n$. At every fixed point $x > 0$, $f_n(x) \\to 0$, so the pointwise limit is $0$, whose integral is $0$. But the area under the spike is $\\int_0^1 f_n = 1$ for every $n$! So $\\lim \\int = 1 \\ne 0 = \\int \\lim$.</p>
      <p>Uniform convergence prevents these rogue spikes from shooting off to infinity by locking the entire function inside a flat envelope, making the limit swap 100% legal!</p>`,
    needs: ['c.8.1.1', 'c.7.1.1'],
    traps: [
      `Assuming you can always interchange limit and integral without checking uniform convergence. The moving spike counterexample is a classic exam favorite!`,
      `For differentiation, even uniform convergence of $f_n$ is not enough! You need uniform convergence of the DERIVATIVES $f_n'$ to interchange $\\frac{d}{dx}$ and $\\lim$.`
    ],
    cards: [
      { q: 'Under what condition is $\\lim_{n\\to\\infty} \\int_a^b f_n = \\int_a^b \\lim_{n\\to\\infty} f_n$ guaranteed?', a: 'When $f_n \\in \\mathcal{R}[a, b]$ and $(f_n)$ converges uniformly to $f$ on $[a, b]$.', kind: 'state' },
      { q: 'Give an example where pointwise limit holds but $\\lim \\int f_n \\ne \\int \\lim f_n$.', a: 'A sequence of spikes $f_n$ on $[0, 1]$ with area $\\int f_n = 1$ but $f_n(x) \\to 0$ pointwise.', kind: 'apply' }
    ]
  },

  {
    id: 'c.8.3.1', bartle: '8.3.1', sec: '8.3', kind: 'definition', tier: 'ext',
    title: 'The Exponential Function via Power Series',
    oneLine: 'e^x is defined as the infinite series 1 + x + x^2/2! + x^3/3! + ... converging everywhere.',
    statement: `The <b>exponential function</b> $E: \\mathbb{R} \\to \\mathbb{R}$ is defined for all $x \\in \\mathbb{R}$ by:
      $$E(x) = e^x = \\sum_{n=0}^\\infty \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$
      <p>The series converges absolutely and uniformly on any bounded interval $[-A, A]$.</p>
      <p><b>Key Properties:</b>
      (1) $E(x + y) = E(x)E(y)$ for all $x, y \\in \\mathbb{R}$.<br>
      (2) $E'(x) = E(x)$ and $E(0) = 1$.<br>
      (3) $E(x) > 0$ for all $x \\in \\mathbb{R}$.</p>`,
    intuition: `<p>In school, you defined $e^x$ by raising $2.718...$ to the power $x$. But what does $e^{\\sqrt{2}}$ mean? You cannot multiply $e$ by itself $\\sqrt{2}$ times!</p>
      <p>In Real Analysis, we turn this around: we define $e^x$ directly through its power series. Because $n!$ grows faster than any polynomial, this series converges for EVERY real number on Earth! Its derivative is itself ($E'(x) = E(x)$), making it the natural foundation for all differential equations.</p>`,
    needs: ['c.3.7.1', 'c.6.1.1'],
    traps: [
      `$e^x$ is strictly positive everywhere: $e^x > 0$ for all $x \\in \\mathbb{R}$. It never touches $0$ and never turns negative!`,
      `The natural logarithm $\\ln x$ is defined as the unique inverse function of $E(x)$ for $x > 0$, so $\\ln(e^x) = x$ and $\\frac{d}{dx}\\ln x = \\frac{1}{x}$.`
    ],
    cards: [
      { q: 'State the power series definition of $e^x$.', a: '$e^x = \\sum_{n=0}^\\infty \\dfrac{x^n}{n!} = 1 + x + \\dfrac{x^2}{2!} + \\cdots$', kind: 'state' },
      { q: 'What is the unique differential equation satisfied by $f(x) = e^x$ with $f(0) = 1$?', a: '$f\'(x) = f(x)$ and $f(0) = 1$.', kind: 'recall' }
    ]
  },

  {
    id: 'c.8.4.1', bartle: '8.4.1', sec: '8.4', kind: 'definition', tier: 'ext',
    title: 'The Trigonometric Functions Sine and Cosine via Power Series',
    oneLine: 'sin(x) and cos(x) defined rigorously as alternating power series of odd and even powers.',
    statement: `For all $x \\in \\mathbb{R}$, the <b>sine</b> and <b>cosine</b> functions are defined by:
      $$\\sin x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n+1}}{(2n + 1)!} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$
      $$\\cos x = \\sum_{n=0}^\\infty \\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$
      <p>Both series converge absolutely for all $x \\in \\mathbb{R}$.</p>
      <p><b>Core Identities:</b>
      (1) $\\frac{d}{dx}(\\sin x) = \\cos x$ and $\\frac{d}{dx}(\\cos x) = -\\sin x$.<br>
      (2) $\\cos^2 x + \\sin^2 x = 1$ for all $x \\in \\mathbb{R}$.</p>`,
    intuition: `<p>In high school, $\\sin x$ and $\\cos x$ were defined using right-angled triangles ($\text{opposite} / \text{hypotenuse}$). But triangles only make sense for angles between $0^\\circ$ and $90^\\circ$!</p>
      <p>In Real Analysis, we define $\\sin x$ and $\\cos x$ purely analytically using power series. No geometry or triangles needed! The Pythagorean identity $\\cos^2 x + \\sin^2 x = 1$ is proven by differentiating: $\\frac{d}{dx}(\\cos^2 x + \\sin^2 x) = 2\\cos(-\\sin) + 2\\sin(\\cos) = 0$, so the sum is constant and equals $1$ at $x = 0$!</p>`,
    needs: ['c.8.3.1', 'c.6.1.1'],
    traps: [
      `$\\sin x$ is an ODD function (contains only odd powers of $x$: $x^1, x^3, x^5$), so $\\sin(-x) = -\\sin x$.`,
      `$\\cos x$ is an EVEN function (contains only even powers: $x^0, x^2, x^4$), so $\\cos(-x) = \\cos x$.`
    ],
    cards: [
      { q: 'State the power series expansion of $\\sin x$.', a: '$\\sin x = \\sum_{n=0}^\\infty \\dfrac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \\dfrac{x^3}{6} + \\dfrac{x^5}{120} - \\cdots$', kind: 'state' },
      { q: 'How is $\\cos^2 x + \\sin^2 x = 1$ proven using calculus?', a: 'Differentiate $g(x) = \\cos^2 x + \\sin^2 x$ to get $g\'(x) = 0$; since $g(0) = 1$, $g(x) = 1$ constantly.', kind: 'recall' }
    ]
  }
);

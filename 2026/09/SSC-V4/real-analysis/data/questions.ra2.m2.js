/* ══════════════════════════════════════════════════════════════════════════
   Real Analysis II · Module II — Differentiation (Bartle Ch 6: 6.1 - 6.4)
   Total Questions: 23
   ══════════════════════════════════════════════════════════════════════════ */

QUESTIONS.push(
{
  "id": "q.ra2.m2.01",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.1",
  "marks": 5,
  "title": "Differentiability of x\u00b2 sin(1/x)",
  "source": "Bartle & Sherbert 4e \u00a76.1 Ex 4",
  "prompt": "Let $f(x) := x^2 \\sin(1/x)$ for $x \\ne 0$ and $f(0) := 0$.<br>(a) Prove that $f$ is differentiable at $x = 0$ and find $f'(0)$.<br>(b) Show that $f'$ is NOT continuous at $x = 0$.",
  "tests": [
    "c.6.1.2"
  ],
  "approach": "<p>At $x = 0$, evaluate the derivative directly from the limit definition of the difference quotient. Away from $0$, apply standard product and chain rules.</p>",
  "solution": "<p><b>(a)</b> By definition of derivative at $0$:</p><p>$$f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x \\to 0} \\frac{x^2 \\sin(1/x)}{x} = \\lim_{x \\to 0} x \\sin(1/x)$$</p><p>Since $|x \\sin(1/x)| \\le |x| \\to 0$, the Squeeze Theorem implies $f'(0) = 0$.</p><p><b>(b)</b> For $x \\ne 0$, differentiating using product and chain rules gives:</p><p>$$f'(x) = 2x \\sin(1/x) - \\cos(1/x)$$</p><p>As $x \\to 0$, $2x \\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $1$ and has no limit. Therefore $\\lim_{x \\to 0} f'(x)$ does not exist, so $f'$ is discontinuous at $0$.</p>",
  "trap": "Do not attempt to compute $f'(0)$ by differentiating $2x\\sin(1/x) - \\cos(1/x)$ and plugging in $x=0$, as that formula is valid only for $x \\ne 0$."
},
{
  "id": "q.ra2.m2.02",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.1",
  "marks": 5,
  "title": "Carath\u00e9odory's Theorem and the Chain Rule",
  "source": "Bartle & Sherbert 4e \u00a76.1 Ex 8 & Thm 6.1.5",
  "prompt": "State Carath\u00e9odory's Theorem for differentiability and use it to prove the Chain Rule for $(g \\circ f)'(c)$.",
  "tests": [
    "c.6.1.5"
  ],
  "approach": "<p>Carath\u00e9odory replaces the difference quotient with a continuous function $\\varphi$ satisfying $f(x) - f(c) = \\varphi(x)(x - c)$ with $\\varphi(c) = f'(c)$.</p>",
  "solution": "<p><b>Carath\u00e9odory's Theorem:</b> $f$ is differentiable at $c$ iff there exists a function $\\varphi$ continuous at $c$ such that $f(x) - f(c) = \\varphi(x)(x - c)$ for all $x$. In this case, $\\varphi(c) = f'(c)$.</p><p><b>Proof of Chain Rule:</b> Let $d = f(c)$. Since $g$ is differentiable at $d$, there is $\\psi$ continuous at $d$ with $g(y) - g(d) = \\psi(y)(y - d)$ and $\\psi(d) = g'(d)$.</p><p>Substitute $y = f(x)$ and $d = f(c)$:</p><p>$$g(f(x)) - g(f(c)) = \\psi(f(x))[f(x) - f(c)] = \\psi(f(x)) \\varphi(x) (x - c)$$</p><p>Define $h(x) = \\psi(f(x))\\varphi(x)$. Since $f$ is continuous at $c$, $\\psi(f(x)) \\to \\psi(f(c)) = g'(f(c))$, and $\\varphi(x) \\to f'(c)$. Thus $h$ is continuous at $c$ with $h(c) = g'(f(c))f'(c)$. By Carath\u00e9odory's Theorem, $(g \\circ f)'(c) = g'(f(c))f'(c)$.</p>",
  "trap": "The classic difference quotient proof fails when $f(x) = f(c)$ near $c$; Carath\u00e9odory's formulation completely eliminates division by zero."
},
{
  "id": "q.ra2.m2.03",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.1",
  "marks": 5,
  "title": "Derivative from First Principles: x\u00b3 and \u221ax",
  "source": "Bartle & Sherbert 4e \u00a76.1 Ex 1",
  "prompt": "Use the definition of derivative to find $f'(x)$ for:<br>(a) $f(x) := x^3$ for $x \\in \\mathbb{R}$;<br>(b) $g(x) := \\sqrt{x}$ for $x > 0$.",
  "tests": [
    "c.6.1.1"
  ],
  "approach": "<p>Set up difference quotient $\\frac{f(x) - f(c)}{x - c}$ and factor or rationalize the numerator.</p>",
  "solution": "<p><b>(a) $f(x) = x^3$:</b> For any $c \\in \\mathbb{R}$:</p><p>$$\\lim_{x\\to c} \\frac{x^3 - c^3}{x - c} = \\lim_{x\\to c} \\frac{(x - c)(x^2 + xc + c^2)}{x - c} = \\lim_{x\\to c} (x^2 + xc + c^2) = c^2 + c^2 + c^2 = 3c^2$$</p><p>Thus $f'(c) = 3c^2$ for all $c \\in \\mathbb{R}$.</p><p><b>(b) $g(x) = \\sqrt{x}$ for $c > 0$:</b> Rationalizing the numerator:</p><p>$$\\lim_{x\\to c} \\frac{\\sqrt{x} - \\sqrt{c}}{x - c} = \\lim_{x\\to c} \\frac{(\\sqrt{x} - \\sqrt{c})(\\sqrt{x} + \\sqrt{c})}{(x - c)(\\sqrt{x} + \\sqrt{c})} = \\lim_{x\\to c} \\frac{x - c}{(x - c)(\\sqrt{x} + \\sqrt{c})} = \\lim_{x\\to c} \\frac{1}{\\sqrt{x} + \\sqrt{c}} = \\frac{1}{2\\sqrt{c}}$$</p><p>Thus $g'(c) = \\frac{1}{2\\sqrt{c}}$ for all $c > 0$.</p>",
  "trap": "At $c = 0$, the difference quotient $\\frac{\\sqrt{x}}{x} = \\frac{1}{\\sqrt{x}} \\to \\infty$, so $\\sqrt{x}$ is not differentiable at $0$."
},
{
  "id": "q.ra2.m2.04",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.1",
  "marks": 5,
  "title": "Non-Differentiability of x^(1/3) at 0",
  "source": "Bartle & Sherbert 4e \u00a76.1 Ex 2",
  "prompt": "Show that the function $f(x) := x^{1/3}$ is continuous on $\\mathbb{R}$ but is NOT differentiable at $x = 0$.",
  "tests": [
    "c.6.1.1",
    "c.6.1.2"
  ],
  "approach": "<p>Evaluate the difference quotient $\\frac{f(x) - f(0)}{x - 0} = \\frac{x^{1/3}}{x} = \\frac{1}{x^{2/3}}$ as $x \\to 0$.</p>",
  "solution": "<p><b>Continuity:</b> $f(x) = x^{1/3}$ is the inverse of the strictly increasing continuous function $y \\mapsto y^3$. By the Continuous Inverse Theorem, $f$ is continuous on all of $\\mathbb{R}$.</p><p><b>Differentiability at 0:</b> Set up the difference quotient at $c = 0$:</p><p>$$\\frac{f(x) - f(0)}{x - 0} = \\frac{x^{1/3} - 0}{x} = \\frac{1}{x^{2/3}}$$</p><p>As $x \\to 0$, $x^{2/3} > 0$ and $x^{2/3} \\to 0$. Therefore:</p><p>$$\\lim_{x\\to 0} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x\\to 0} \\frac{1}{x^{2/3}} = +\\infty$$</p><p>Since the limit is not a finite real number, $f'(0)$ does not exist. Hence $f$ has a vertical tangent at $x = 0$ and is not differentiable at $0$.</p>",
  "trap": "A vertical tangent means the geometric tangent line exists, but the function is NOT differentiable because the derivative must be a finite real number."
},
{
  "id": "q.ra2.m2.05",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.1",
  "marks": 5,
  "title": "Differentiability of Dirichlet-Type Function at a Single Point",
  "source": "Bartle & Sherbert 4e \u00a76.1 Ex 4",
  "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) := x^2$ for $x \\in \\mathbb{Q}$ and $f(x) := 0$ for $x \\notin \\mathbb{Q}$. Prove that $f$ is differentiable at $x = 0$ and find $f'(0)$.",
  "tests": [
    "c.6.1.1"
  ],
  "approach": "<p>Compute the difference quotient at $0$ and apply the Squeeze Theorem.</p>",
  "solution": "<p>At $c = 0$, $f(0) = 0^2 = 0$. The difference quotient for $x \\ne 0$ is:</p><p>$$\\frac{f(x) - f(0)}{x - 0} = \\frac{f(x)}{x} = \\begin{cases} \\frac{x^2}{x} = x & x \\in \\mathbb{Q} \\\\ \\frac{0}{x} = 0 & x \\notin \\mathbb{Q} \\end{cases}$$</p><p>For all $x \\ne 0$, we have:</p><p>$$0 \\le \\left| \\frac{f(x) - f(0)}{x - 0} \\right| \\le |x|$$</p><p>As $x \\to 0$, $|x| \\to 0$. By the Squeeze Theorem:</p><p>$$f'(0) = \\lim_{x\\to 0} \\frac{f(x) - f(0)}{x - 0} = 0$$</p><p>Hence $f$ is differentiable at $x = 0$ with $f'(0) = 0$.</p>",
  "trap": "This function is discontinuous at EVERY non-zero real number, yet it is differentiable at $x = 0$!"
},
{
  "id": "q.ra2.m2.06",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.1",
  "marks": 5,
  "title": "Differentiability Implies Continuity",
  "source": "Bartle & Sherbert 4e \u00a76.1 Thm 6.1.2",
  "prompt": "State and prove Theorem 6.1.2: If $f: I \\to \\mathbb{R}$ is differentiable at $c \\in I$, then $f$ is continuous at $c$. Give a counterexample showing the converse is false.",
  "tests": [
    "c.6.1.2"
  ],
  "approach": "<p>Write $f(x) - f(c) = \\frac{f(x) - f(c)}{x - c}(x - c)$ and take limits as $x \\to c$. Use $f(x) = |x|$ at $0$ as counterexample.</p>",
  "solution": "<p><b>Theorem:</b> If $f: I \\to \\mathbb{R}$ is differentiable at $c \\in I$, then $f$ is continuous at $c$.</p><p><b>Proof:</b> For all $x \\in I$ with $x \\ne c$, write:</p><p>$$f(x) - f(c) = \\left( \\frac{f(x) - f(c)}{x - c} \\right) (x - c)$$</p><p>Taking limits as $x \\to c$, and using the product rule for limits:</p><p>$$\\lim_{x\\to c} (f(x) - f(c)) = \\left( \\lim_{x\\to c} \\frac{f(x) - f(c)}{x - c} \\right) \\left( \\lim_{x\\to c} (x - c) \\right) = f'(c) \\cdot 0 = 0$$</p><p>Hence $\\lim_{x\\to c} f(x) = f(c)$, which proves $f$ is continuous at $c$.</p><p><b>Converse Fails:</b> Let $f(x) = |x|$ at $c = 0$. $f$ is continuous everywhere on $\\mathbb{R}$. However, the difference quotient from the right is $\\lim_{x\\to 0^+} \\frac{x}{x} = 1$, while from the left it is $\\lim_{x\\to 0^-} \\frac{-x}{x} = -1$. Since the one-sided limits differ, $f'(0)$ does not exist.</p>",
  "trap": "Do not divide by zero; the algebraic identity $f(x) - f(c) = \\frac{f(x)-f(c)}{x-c}(x-c)$ is valid for all $x \\ne c$."
},
{
  "id": "q.ra2.m2.07",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.2",
  "marks": 5,
  "title": "Rolle's Theorem and the Mean Value Theorem",
  "source": "Bartle & Sherbert 4e \u00a76.2 Ex 3 & Thm 6.2.4",
  "prompt": "State Lagrange's Mean Value Theorem and use it to prove that for all $x > 0$, $\\frac{x}{1+x} < \\ln(1+x) < x$.",
  "tests": [
    "c.6.2.3",
    "c.6.2.4"
  ],
  "approach": "<p>Apply the Mean Value Theorem to $f(t) = \\ln(1+t)$ on the interval $[0, x]$.</p>",
  "solution": "<p><b>Lagrange's MVT:</b> If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ such that $f(b) - f(a) = f'(c)(b - a)$.</p><p>Let $f(t) = \\ln(1+t)$ on $[0, x]$ with $x > 0$. $f$ is continuous on $[0, x]$ and differentiable on $(0, x)$ with $f'(t) = \\frac{1}{1+t}$.</p><p>By MVT, there exists $c \\in (0, x)$ such that:</p><p>$$\\ln(1+x) - \\ln(1) = f'(c)(x - 0) = \\frac{x}{1+c}$$</p><p>Since $0 < c < x$, we have $1 < 1 + c < 1 + x$, which gives $\\frac{1}{1+x} < \\frac{1}{1+c} < 1$.</p><p>Multiplying by $x > 0$ yields $\\frac{x}{1+x} < \\frac{x}{1+c} = \\ln(1+x) < x$.</p>",
  "trap": "Ensure $c \\in (0, x)$ is strictly between $0$ and $x$ so that the inequalities are strict."
},
{
  "id": "q.ra2.m2.08",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.2",
  "marks": 5,
  "title": "Constant Difference and Zero Derivative",
  "source": "Bartle & Sherbert 4e \u00a76.2 Ex 6 & Thm 6.2.5",
  "prompt": "Prove that if $f: (a, b) \\to \\mathbb{R}$ is differentiable and $f'(x) = 0$ for all $x \\in (a, b)$, then $f$ is a constant function.",
  "tests": [
    "c.6.2.5"
  ],
  "approach": "<p>Fix a point $x_0 \\in (a, b)$ and apply MVT to an arbitrary point $x \\in (a, b)$.</p>",
  "solution": "<p>Fix $x_0 \\in (a, b)$ and let $x \\in (a, b)$ be arbitrary with $x \\ne x_0$.</p><p>Since $f$ is differentiable on $(a, b)$, it is continuous on $[x_0, x]$ (or $[x, x_0]$) and differentiable on $(x_0, x)$.</p><p>By the Mean Value Theorem, there exists $c$ between $x_0$ and $x$ such that:</p><p>$$f(x) - f(x_0) = f'(c)(x - x_0)$$</p><p>By hypothesis, $f'(c) = 0$. Hence $f(x) - f(x_0) = 0 \\implies f(x) = f(x_0)$.</p><p>Since $x$ was arbitrary, $f(x) = f(x_0)$ for all $x \\in (a, b)$, so $f$ is constant.</p>",
  "trap": "The domain MUST be an interval! If the domain is disconnected (e.g. $(0, 1) \\cup (2, 3)$), $f'(x) = 0$ only implies $f$ is locally constant on each piece."
},
{
  "id": "q.ra2.m2.09",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.2",
  "marks": 5,
  "title": "Rolle's Theorem and Root Isolation for Polynomials",
  "source": "Bartle & Sherbert 4e \u00a76.2 Ex 4",
  "prompt": "Prove that between any two real roots of a differentiable function $f$, there is at least one real root of its derivative $f'$. Conclude that the polynomial $P(x) = x^3 - 3x + b$ can have at most one real root in $[-1, 1]$ for any real constant $b$.",
  "tests": [
    "c.6.2.3"
  ],
  "approach": "<p>Apply Rolle's Theorem between roots $r_1 < r_2$. For $P(x)$, examine $P'(x) = 3(x^2 - 1)$ on $[-1, 1]$.</p>",
  "solution": "<p><b>1. Root Isolation via Rolle's:</b> Suppose $f(r_1) = f(r_2) = 0$ with $r_1 < r_2$. Since $f$ is differentiable, it is continuous on $[r_1, r_2]$ and differentiable on $(r_1, r_2)$. By Rolle's Theorem, there exists $c \\in (r_1, r_2)$ such that $f'(c) = 0$.</p><p><b>2. Application to $P(x) = x^3 - 3x + b$:</b> Differentiating gives $P'(x) = 3x^2 - 3 = 3(x^2 - 1)$.</p><p>For $x \\in (-1, 1)$, $x^2 < 1$, so $P'(x) = 3(x^2 - 1) < 0$.</p><p>Thus $P'(x)$ has NO roots in $(-1, 1)$.</p><p>If $P(x)$ had two or more distinct roots in $[-1, 1]$, say $r_1 < r_2$, then by Rolle's Theorem $P'$ would have a root in $(r_1, r_2) \\subseteq (-1, 1)$.</p><p>Since $P'(x) < 0$ on $(-1, 1)$, this is impossible. Thus $P(x)$ can have at most one real root in $[-1, 1]$.</p>",
  "trap": "Rolle's Theorem requires $f'(c) = 0$ in the OPEN interval $(r_1, r_2)$."
},
{
  "id": "q.ra2.m2.10",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.2",
  "marks": 5,
  "title": "Strict Monotonicity Criterion via Derivative",
  "source": "Bartle & Sherbert 4e \u00a76.2 Thm 6.2.7",
  "prompt": "Let $f: I \\to \\mathbb{R}$ be differentiable on an interval $I$. Prove that if $f'(x) > 0$ for all $x \\in I$, then $f$ is strictly increasing on $I$. Show by example that the converse is false.",
  "tests": [
    "c.6.2.7"
  ],
  "approach": "<p>Let $x_1 < x_2 \\in I$. Apply MVT on $[x_1, x_2]$: $f(x_2) - f(x_1) = f'(c)(x_2 - x_1) > 0$. Use $f(x) = x^3$ for the converse.</p>",
  "solution": "<p><b>Proof:</b> Let $x_1, x_2 \\in I$ with $x_1 < x_2$.</p><p>By the Mean Value Theorem applied to $f$ on $[x_1, x_2]$, there exists $c \\in (x_1, x_2)$ such that:</p><p>$$f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$$</p><p>By hypothesis, $f'(c) > 0$. Since $x_2 - x_1 > 0$, the product $f'(c)(x_2 - x_1) > 0$.</p><p>Therefore $f(x_2) - f(x_1) > 0 \\implies f(x_1) < f(x_2)$.</p><p>Since $x_1 < x_2$ were arbitrary, $f$ is strictly increasing on $I$.</p><p><b>Converse Fails:</b> Consider $f(x) = x^3$ on $\\mathbb{R}$. For $x_1 < x_2$, $x_1^3 < x_2^3$, so $f$ is strictly increasing on $\\mathbb{R}$. However, $f'(x) = 3x^2$, which gives $f'(0) = 0$. Thus $f'$ is NOT strictly positive at every point.</p>",
  "trap": "A strictly increasing function may have isolated points where the derivative vanishes (e.g. $x^3$ at $0$)."
},
{
  "id": "q.ra2.m2.11",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.2",
  "marks": 5,
  "title": "Interior Extremum Theorem (Fermat's Theorem)",
  "source": "Bartle & Sherbert 4e \u00a76.2 Thm 6.2.1",
  "prompt": "State and prove the Interior Extremum Theorem: If $c$ is an interior point of $I$, $f$ has a relative extremum at $c$, and $f'(c)$ exists, then $f'(c) = 0$.",
  "tests": [
    "c.6.2.1"
  ],
  "approach": "<p>Examine the sign of the difference quotient $\\frac{f(x) - f(c)}{x - c}$ from the left ($x < c$) and from the right ($x > c$).</p>",
  "solution": "<p><b>Theorem:</b> Let $c$ be an interior point of an interval $I$ at which $f: I \\to \\mathbb{R}$ has a relative extremum. If $f'(c)$ exists, then $f'(c) = 0$.</p><p><b>Proof:</b> Assume without loss of generality that $f$ has a relative maximum at $c$.</p><p>Then there exists a neighborhood $V_\\delta(c) \\subseteq I$ such that $f(x) \\le f(c)$ for all $x \\in V_\\delta(c)$. That is, $f(x) - f(c) \\le 0$.</p><p><b>Right-hand difference quotient:</b> For $c < x < c + \\delta$, $x - c > 0$, so:</p><p>$$\\frac{f(x) - f(c)}{x - c} \\le 0 \\implies f'(c) = \\lim_{x\\to c^+} \\frac{f(x) - f(c)}{x - c} \\le 0$$</p><p><b>Left-hand difference quotient:</b> For $c - \\delta < x < c$, $x - c < 0$, so:</p><p>$$\\frac{f(x) - f(c)}{x - c} \\ge 0 \\implies f'(c) = \\lim_{x\\to c^-} \\frac{f(x) - f(c)}{x - c} \\ge 0$$</p><p>Since $f'(c) \\le 0$ and $f'(c) \\ge 0$, we must have $f'(c) = 0$.</p>",
  "trap": "The point $c$ MUST be an interior point; at an endpoint, the derivative need not be zero (e.g. $f(x) = x$ on $[0, 1]$ has minimum at $0$ where $f'(0) = 1 \\ne 0$)."
},
{
  "id": "q.ra2.m2.12",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.2",
  "marks": 5,
  "title": "Darboux's Intermediate Value Theorem for Derivatives",
  "source": "Bartle & Sherbert 4e \u00a76.2 Thm 6.2.12",
  "prompt": "State and prove Darboux's Theorem: If $f$ is differentiable on $[a, b]$ and $k$ is a number strictly between $f'(a)$ and $f'(b)$, then there exists $c \\in (a, b)$ such that $f'(c) = k$.",
  "tests": [
    "c.6.2.12"
  ],
  "approach": "<p>Consider the auxiliary function $g(x) = f(x) - kx$, show its minimum cannot occur at the endpoints $a$ or $b$, and apply the Interior Extremum Theorem.</p>",
  "solution": "<p><b>Theorem:</b> Let $I = [a, b]$ and let $f: I \\to \\mathbb{R}$ be differentiable on $I$. If $k$ satisfies $f'(a) < k < f'(b)$ (or $f'(a) > k > f'(b)$), then there exists $c \\in (a, b)$ such that $f'(c) = k$.</p><p><b>Proof:</b> Assume $f'(a) < k < f'(b)$. Define $g(x) := f(x) - kx$ on $[a, b]$.</p><p>Since $f$ is differentiable, $f$ is continuous, so $g$ is continuous on the compact interval $[a, b]$. By the Maximum-Minimum Theorem, $g$ attains its absolute minimum at some point $c \\in [a, b]$.</p><p>We show that $c$ cannot be an endpoint:</p><p>At $x = a$: $g'(a) = f'(a) - k < 0$. Since $g'(a) < 0$, for $x > a$ sufficiently close to $a$, $g(x) < g(a)$. Thus $a$ is not the minimum point.</p><p>At $x = b$: $g'(b) = f'(b) - k > 0$. Since $g'(b) > 0$, for $x < b$ sufficiently close to $b$, $g(x) < g(b)$. Thus $b$ is not the minimum point.</p><p>Therefore, the minimum point $c$ must lie in the open interval $(a, b)$.</p><p>By the Interior Extremum Theorem (Theorem 6.2.1), $g'(c) = 0$.</p><p>Since $g'(c) = f'(c) - k = 0$, we have $f'(c) = k$.</p>",
  "trap": "Derivatives have the Intermediate Value Property even when $f'$ is NOT continuous! A derivative can NEVER have a jump discontinuity."
},
{
  "id": "q.ra2.m2.13",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.3",
  "marks": 5,
  "title": "L'Hospital's Rule for Indeterminate Forms 0/0",
  "source": "Bartle & Sherbert 4e \u00a76.3 Ex 1 & Thm 6.3.3",
  "prompt": "Evaluate $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ by justifying each application of L'Hospital's Rule.",
  "tests": [
    "c.6.3.3"
  ],
  "approach": "<p>Verify the form is $0/0$ at each step before differentiating numerator and denominator.</p>",
  "solution": "<p><b>Step 1:</b> As $x \\to 0$, $x - \\sin x \\to 0$ and $x^3 \\to 0$. This is of indeterminate form $\\frac{0}{0}$. Differentiating top and bottom:</p><p>$$\\lim_{x\\to 0} \\frac{x - \\sin x}{x^3} = \\lim_{x\\to 0} \\frac{1 - \\cos x}{3x^2}$$</p><p><b>Step 2:</b> As $x \\to 0$, $1 - \\cos x \\to 0$ and $3x^2 \\to 0$ (still $\\frac{0}{0}$). Applying L'Hospital's rule again:</p><p>$$= \\lim_{x\\to 0} \\frac{\\sin x}{6x}$$</p><p><b>Step 3:</b> Since $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$, we get $\\frac{1}{6} \\cdot 1 = \\frac{1}{6}$.</p>",
  "trap": "Blindly differentiating when the limit is NOT an indeterminate form yields completely wrong answers."
},
{
  "id": "q.ra2.m2.14",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.3",
  "marks": 5,
  "title": "Cauchy's Mean Value Theorem",
  "source": "Bartle & Sherbert 4e \u00a76.3 Thm 6.3.2",
  "prompt": "State and prove Cauchy's Mean Value Theorem (the Generalized Mean Value Theorem). Explain its geometric interpretation in terms of parametric curves.",
  "tests": [
    "c.6.3.2"
  ],
  "approach": "<p>Define $h(x) = [g(b) - g(a)]f(x) - [f(b) - f(a)]g(x)$ and apply Rolle's Theorem.</p>",
  "solution": "<p><b>Statement:</b> Let $f, g: [a, b] \\to \\mathbb{R}$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there exists $c \\in (a, b)$ such that:</p><p>$$[f(b) - f(a)] g'(c) = [g(b) - g(a)] f'(c)$$</p><p>If $g'(x) \\ne 0$ for all $x \\in (a, b)$, this can be written as $\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(c)}{g'(c)}$.</p><p><b>Proof:</b> Define the auxiliary function $h(x) := [g(b) - g(a)]f(x) - [f(b) - f(a)]g(x)$ on $[a, b]$.</p><p>$h$ is continuous on $[a, b]$ and differentiable on $(a, b)$. Evaluate $h$ at endpoints:</p><p>$$h(a) = g(b)f(a) - g(a)f(a) - f(b)g(a) + f(a)g(a) = g(b)f(a) - f(b)g(a)$$</p><p>$$h(b) = g(b)f(b) - g(a)f(b) - f(b)g(b) + f(a)g(b) = g(b)f(a) - f(b)g(a)$$</p><p>Since $h(a) = h(b)$, Rolle's Theorem guarantees there exists $c \\in (a, b)$ such that $h'(c) = 0$.</p><p>Since $h'(c) = [g(b) - g(a)]f'(c) - [f(b) - f(a)]g'(c) = 0$, the result follows.</p><p><b>Geometric Interpretation:</b> For a plane curve parametrized by $(g(t), f(t))$, the chord connecting $(g(a), f(a))$ and $(g(b), f(b))$ has slope $\\frac{f(b)-f(a)}{g(b)-g(a)}$. The theorem asserts that there is a point $c$ where the tangent vector $(g'(c), f'(c))$ is parallel to the chord.</p>",
  "trap": "Do not apply standard MVT separately to $f$ and $g$; that would produce two different intermediate points $c_1$ and $c_2$, whereas Cauchy's MVT produces a SINGLE common point $c$."
},
{
  "id": "q.ra2.m2.15",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.3",
  "marks": 5,
  "title": "L'Hospital's Rule for Infinity / Infinity Forms",
  "source": "Bartle & Sherbert 4e \u00a76.3 Ex 2 & Thm 6.3.5",
  "prompt": "State L'Hospital's Rule for the indeterminate form $\\infty/\\infty$ as $x \\to \\infty$. Use it to evaluate $\\lim_{x\\to\\infty} \\frac{\\ln x}{x^\\alpha}$ for any $\\alpha > 0$.",
  "tests": [
    "c.6.3.3"
  ],
  "approach": "<p>Verify that both numerator and denominator diverge to $\\infty$, then differentiate.</p>",
  "solution": "<p><b>Statement:</b> Suppose $f, g$ are differentiable on $(a, \\infty)$ with $g'(x) \\ne 0$, and $\\lim_{x\\to\\infty} g(x) = \\infty$. If $\\lim_{x\\to\\infty} \\frac{f'(x)}{g'(x)} = L \\in \\mathbb{R}$, then $\\lim_{x\\to\\infty} \\frac{f(x)}{g(x)} = L$.</p><p><b>Application:</b> For $\\lim_{x\\to\\infty} \\frac{\\ln x}{x^\\alpha}$ with $\\alpha > 0$:</p><p>As $x \\to \\infty$, $\\ln x \\to \\infty$ and $x^\\alpha \\to \\infty$. Differentiating top and bottom:</p><p>$$\\lim_{x\\to\\infty} \\frac{(\\ln x)'}{(x^\\alpha)'} = \\lim_{x\\to\\infty} \\frac{1/x}{\\alpha x^{\\alpha - 1}} = \\lim_{x\\to\\infty} \\frac{1}{\\alpha x^\\alpha}$$</p><p>Since $\\alpha > 0$, as $x \\to \\infty$, $x^\\alpha \\to \\infty$, so $\\frac{1}{\\alpha x^\\alpha} \\to 0$.</p><p>By L'Hospital's Rule, $\\lim_{x\\to\\infty} \\frac{\\ln x}{x^\\alpha} = 0$.</p>",
  "trap": "This result proves that logarithmic growth is slower than any positive power of $x$, no matter how small $\\alpha$ is."
},
{
  "id": "q.ra2.m2.16",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.3",
  "marks": 5,
  "title": "Indeterminate Exponential Form 0\u2070",
  "source": "Bartle & Sherbert 4e \u00a76.3 Ex 4 & 5",
  "prompt": "Evaluate $\\lim_{x \\to 0^+} x^x$ by converting the expression into an indeterminate form and justifying all steps.",
  "tests": [
    "c.6.3.3"
  ],
  "approach": "<p>Let $y = x^x$. Take natural logarithm $\\ln y = x \\ln x = \\frac{\\ln x}{1/x}$, apply L'Hospital's Rule, and exponentiate.</p>",
  "solution": "<p>Let $y = x^x$ for $x > 0$. Taking logarithms: $\\ln y = \\ln(x^x) = x \\ln x$.</p><p>Rewrite as a quotient of form $\\frac{-\\infty}{\\infty}$:</p><p>$$\\lim_{x\\to 0^+} x \\ln x = \\lim_{x\\to 0^+} \\frac{\\ln x}{1/x}$$</p><p>Since this is of indeterminate form $\\infty/\\infty$, apply L'Hospital's Rule:</p><p>$$\\lim_{x\\to 0^+} \\frac{(\\ln x)'}{(1/x)'} = \\lim_{x\\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x\\to 0^+} (-x) = 0$$</p><p>Since $\\ln y \\to 0$ as $x \\to 0^+$, and the exponential function $t \\mapsto e^t$ is continuous at $t = 0$:</p><p>$$\\lim_{x\\to 0^+} x^x = \\lim_{x\\to 0^+} e^{\\ln y} = e^{\\lim_{x\\to 0^+} \\ln y} = e^0 = 1$$</p>",
  "trap": "Do not forget to exponentiate at the end; $0$ is the limit of the logarithm, not the original limit."
},
{
  "id": "q.ra2.m2.17",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.3",
  "marks": 5,
  "title": "Failure of L'Hospital's Rule without Limit of Derivative Ratio",
  "source": "Bartle & Sherbert 4e \u00a76.3 Ex 7",
  "prompt": "Let $f(x) := x + \\sin x \\cos x$ and $g(x) := e^{\\sin x}(x + \\sin x \\cos x)$ or consider $f(x) = x^2 \\sin(1/x)$ and $g(x) = x$. Show that $\\lim_{x\\to 0} \\frac{f(x)}{g(x)} = 0$ exists, but $\\lim_{x\\to 0} \\frac{f'(x)}{g'(x)}$ does NOT exist. What does this demonstrate about L'Hospital's Rule?",
  "tests": [
    "c.6.3.3",
    "c.6.3.4"
  ],
  "approach": "<p>Compute $\\lim f(x)/g(x)$ directly using Squeeze Theorem, then show that $f'(x)/g'(x)$ oscillates without limit as $x \\to 0$.</p>",
  "solution": "<p>Let $f(x) = x^2 \\sin(1/x)$ for $x \\ne 0$ and $g(x) = x$.</p><p><b>1. Direct Evaluation:</b> For $x \\ne 0$, $\\frac{f(x)}{g(x)} = \\frac{x^2 \\sin(1/x)}{x} = x \\sin(1/x)$.</p><p>Since $|x \\sin(1/x)| \\le |x| \\to 0$ as $x \\to 0$, the Squeeze Theorem gives:</p><p>$$\\lim_{x\\to 0} \\frac{f(x)}{g(x)} = 0$$</p><p><b>2. Ratio of Derivatives:</b> Differentiating:</p><p>$$f'(x) = 2x \\sin(1/x) - \\cos(1/x) \\quad \\text{and} \\quad g'(x) = 1$$</p><p>Thus $\\frac{f'(x)}{g'(x)} = 2x \\sin(1/x) - \\cos(1/x)$.</p><p>As $x \\to 0$, $2x \\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $1$ without converging to any limit.</p><p>Hence $\\lim_{x\\to 0} \\frac{f'(x)}{g'(x)}$ does not exist.</p><p><b>Conclusion:</b> L'Hospital's Rule states that if $\\lim \\frac{f'}{g'}$ exists, then $\\lim \\frac{f}{g}$ exists and equals it. It is a ONE-WAY implication: the failure of $\\lim \\frac{f'}{g'}$ to exist does NOT imply that $\\lim \\frac{f}{g}$ does not exist!</p>",
  "trap": "L'Hospital's Rule is a sufficient condition, not a necessary condition."
},
{
  "id": "q.ra2.m2.18",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.4",
  "marks": 5,
  "title": "Taylor's Theorem with Lagrange Remainder and Irrationality of e",
  "source": "Bartle & Sherbert 4e \u00a76.4 Ex 3 & Thm 6.4.1",
  "prompt": "State Taylor's Theorem with Lagrange remainder. Use it for $f(x) = e^x$ at $x_0 = 0$ to approximate $e$ to within $10^{-4}$ and prove that $e$ is irrational.",
  "tests": [
    "c.6.4.1",
    "c.6.4.2"
  ],
  "approach": "<p>Expand $e^x = \\sum_{k=0}^n \\frac{x^k}{k!} + R_n(x)$ with remainder $R_n(1) = \\frac{e^c}{(n+1)!}$ for $c \\in (0, 1)$.</p>",
  "solution": "<p><b>Taylor's Theorem:</b> If $f, f', \\dots, f^{(n)}$ are continuous on $[a, b]$ and $f^{(n+1)}$ exists on $(a, b)$, then for $x_0, x \\in [a, b]$ there exists $c$ strictly between $x_0$ and $x$ such that:</p><p>$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + R_n(x), \\quad R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x - x_0)^{n+1}$$</p><p><b>Approximating $e$:</b> For $f(x) = e^x$, $x_0 = 0$, $x = 1$:</p><p>$$e = \\sum_{k=0}^n \\frac{1}{k!} + \\frac{e^c}{(n+1)!}, \\quad 0 < c < 1$$</p><p>Since $c < 1$, $e^c < e < 3$, so $R_n(1) < \\frac{3}{(n+1)!}$. For $n = 7$, $8! = 40320$, so $R_7 < 3/40320 \\approx 7.4 \\times 10^{-5} < 10^{-4}$.</p><p><b>Irrationality:</b> If $e = p/q$, choose $n > q$. Multiply by $n!$: $n! e$ is an integer, $n! \\sum_{k=0}^n 1/k!$ is an integer, so the remainder $\\frac{e^c}{n+1}$ must be an integer. But $0 < \\frac{e^c}{n+1} < \\frac{3}{n+1} < 1$ for $n \\ge 3$. An integer in $(0, 1)$ is impossible! Hence $e$ is irrational.</p>",
  "trap": "Remember that $c$ depends on $n$ and lies strictly inside $(0, 1)$."
},
{
  "id": "q.ra2.m2.19",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.4",
  "marks": 5,
  "title": "Maclaurin Remainder for the Sine Function",
  "source": "Bartle & Sherbert 4e \u00a76.4 Ex 4",
  "prompt": "Find the Maclaurin expansion of $f(x) = \\sin x$ with Lagrange remainder, and prove that the Taylor series converges to $\\sin x$ for all $x \\in \\mathbb{R}$.",
  "tests": [
    "c.6.4.1"
  ],
  "approach": "<p>Bound the $(2n+1)$-th derivative by $1$, giving $|R_{2n}(x)| \\le \\frac{|x|^{2n+1}}{(2n+1)!} \\to 0$.</p>",
  "solution": "<p>The derivatives of $f(x) = \\sin x$ at $x_0 = 0$ follow the cyclic pattern: $f(0) = 0$, $f'(0) = 1$, $f''(0) = 0$, $f'''(0) = -1$, and so on.</p><p>The Taylor polynomial of degree $2n$ at $0$ is:</p><p>$$P_{2n}(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots + (-1)^{n-1} \\frac{x^{2n-1}}{(2n-1)!}$$</p><p>By Taylor's Theorem with Lagrange remainder, for any $x \\in \\mathbb{R}$ there exists $c$ between $0$ and $x$ such that:</p><p>$$R_{2n}(x) = \\frac{f^{(2n+1)}(c)}{(2n+1)!} x^{2n+1}$$</p><p>Since every derivative of $\\sin x$ is $\\pm\\cos x$ or $\\pm\\sin x$, we have $|f^{(2n+1)}(c)| \\le 1$ for all $c$.</p><p>Therefore, for all $x \\in \\mathbb{R}$:</p><p>$$|R_{2n}(x)| \\le \\frac{|x|^{2n+1}}{(2n+1)!}$$</p><p>For any fixed $x \\in \\mathbb{R}$, by ratio test for sequences, $\\lim_{n\\to\\infty} \\frac{|x|^{2n+1}}{(2n+1)!} = 0$.</p><p>Hence $\\lim_{n\\to\\infty} R_{2n}(x) = 0$, proving that $\\sin x = \\sum_{k=0}^\\infty (-1)^k \\frac{x^{2k+1}}{(2k+1)!}$ for all $x \\in \\mathbb{R}$.</p>",
  "trap": "Uniform convergence requires checking bounds on compact subsets, but pointwise convergence holds everywhere on $\\mathbb{R}$."
},
{
  "id": "q.ra2.m2.20",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.4",
  "marks": 5,
  "title": "Taylor Approximation of \u221a(1+x) and Error Bound",
  "source": "Bartle & Sherbert 4e \u00a76.4 Ex 4 & 5",
  "prompt": "Show that for $x > 0$, $1 + \\frac{1}{2}x - \\frac{1}{8}x^2 < \\sqrt{1+x} < 1 + \\frac{1}{2}x$. Use this to approximate $\\sqrt{1.2}$ and state the maximum possible error.",
  "tests": [
    "c.6.4.1",
    "c.6.4.2"
  ],
  "approach": "<p>Apply Taylor's Theorem to $f(t) = \\sqrt{1+t}$ at $t = 0$ with $n = 1$ and $n = 2$.</p>",
  "solution": "<p>Let $f(t) = (1+t)^{1/2}$. Then $f'(t) = \\frac{1}{2}(1+t)^{-1/2}$ and $f''(t) = -\\frac{1}{4}(1+t)^{-3/2}$.</p><p><b>Degree 1 Taylor:</b> $f(x) = f(0) + f'(0)x + \\frac{f''(c_1)}{2!}x^2 = 1 + \\frac{1}{2}x - \\frac{1}{8(1+c_1)^{3/2}} x^2$ for $c_1 \\in (0, x)$.</p><p>Since $c_1 > 0$, the remainder is strictly negative, so $\\sqrt{1+x} < 1 + \\frac{1}{2}x$.</p><p><b>Degree 2 Taylor:</b> $f'''(t) = \\frac{3}{8}(1+t)^{-5/2} > 0$.</p><p>$$f(x) = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{f'''(c_2)}{3!}x^3 = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{1}{16(1+c_2)^{5/2}} x^3$$</p><p>Since $c_2 > 0$, the remainder is positive, giving $1 + \\frac{1}{2}x - \\frac{1}{8}x^2 < \\sqrt{1+x}$.</p><p><b>Approximating $\\sqrt{1.2}$ ($x = 0.2$):</b></p><p>Lower bound: $1 + \\frac{1}{2}(0.2) - \\frac{1}{8}(0.04) = 1 + 0.1 - 0.005 = 1.095$.</p><p>Upper bound: $1 + \\frac{1}{2}(0.2) = 1.1$.</p><p>Taking the midpoint $1.0975$, the maximum error is at most $\\frac{1.1 - 1.095}{2} = 0.0025$.</p>",
  "trap": "Alternating Taylor series give upper and lower bounds whose difference directly bounds the approximation error."
},
{
  "id": "q.ra2.m2.21",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.4",
  "marks": 5,
  "title": "Characterization of Convex Functions via Second Derivative",
  "source": "Bartle & Sherbert 4e \u00a76.4 Thm 6.4.7",
  "prompt": "State the definition of a convex function on an open interval $I$. Prove that if $f: I \\to \\mathbb{R}$ has a second derivative on $I$, then $f$ is convex on $I$ if and only if $f''(x) \\ge 0$ for all $x \\in I$.",
  "tests": [
    "c.6.4.1"
  ],
  "approach": "<p>A differentiable function is convex iff $f(x) \\ge f(c) + f'(c)(x - c)$ (tangent lines lie below the graph); use Taylor's theorem with remainder of order 2.</p>",
  "solution": "<p><b>Definition:</b> $f: I \\to \\mathbb{R}$ is convex if for all $x_1, x_2 \\in I$ and $t \\in [0, 1]$:</p><p>$$f(t x_1 + (1 - t) x_2) \\le t f(x_1) + (1 - t) f(x_2)$$</p><p><b>(=>) Assume $f''(x) \\ge 0$ for all $x \\in I$:</b> Let $x, c \\in I$. By Taylor's Theorem with $n = 1$:</p><p>$$f(x) = f(c) + f'(c)(x - c) + \\frac{f''(\\xi)}{2}(x - c)^2$$</p><p>for some $\\xi$ between $c$ and $x$. Since $f''(\\xi) \\ge 0$ and $(x - c)^2 \\ge 0$, the remainder is $\\ge 0$.</p><p>Therefore $f(x) \\ge f(c) + f'(c)(x - c)$ for all $x, c \\in I$.</p><p>Let $x_1 < x_2$ and $x_0 = t x_1 + (1 - t) x_2$. Applying the inequality at $c = x_0$ for $x = x_1$ and $x = x_2$:</p><p>$$f(x_1) \\ge f(x_0) + f'(x_0)(x_1 - x_0)$$</p><p>$$f(x_2) \\ge f(x_0) + f'(x_0)(x_2 - x_0)$$</p><p>Multiplying by $t$ and $1 - t$ and adding gives $t f(x_1) + (1 - t) f(x_2) \\ge f(x_0) + f'(x_0)(0) = f(x_0)$, which proves convexity.</p><p><b>(<=) Assume $f$ is convex:</b> Then $f'$ is increasing on $I$. Therefore $f''(x) = \\lim_{h\\to 0} \\frac{f'(x+h) - f'(x)}{h} \\ge 0$.</p>",
  "trap": "Tangents lie below the graph of a convex function; secant lines lie above the graph."
},
{
  "id": "q.ra2.m2.22",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.4",
  "marks": 5,
  "title": "Smooth Non-Analytic Function: e^(-1/x\u00b2)",
  "source": "Bartle & Sherbert 4e \u00a76.4 Ex 12",
  "prompt": "Define $f(x) := e^{-1/x^2}$ for $x \\ne 0$ and $f(0) := 0$.<br>(a) Prove that $f^{(n)}(0) = 0$ for all $n \\in \\mathbb{N}$.<br>(b) Conclude that the Maclaurin series of $f$ converges everywhere on $\\mathbb{R}$, but equals $f(x)$ ONLY at $x = 0$.",
  "tests": [
    "c.6.4.1",
    "c.6.4.2"
  ],
  "approach": "<p>Use induction to show $f^{(n)}(x) = P_n(1/x) e^{-1/x^2}$ for $x \\ne 0$, and use $\\lim_{t\\to\\infty} t^k e^{-t^2} = 0$.</p>",
  "solution": "<p><b>(a)</b> For $x \\ne 0$, $f'(x) = \\frac{2}{x^3} e^{-1/x^2}$. By induction, for every $n \\in \\mathbb{N}$, $f^{(n)}(x) = P_n(1/x) e^{-1/x^2}$ where $P_n$ is a polynomial.</p><p>At $x = 0$, for $n = 1$:</p><p>$$f'(0) = \\lim_{x\\to 0} \\frac{f(x) - 0}{x} = \\lim_{x\\to 0} \\frac{1}{x} e^{-1/x^2}$$</p><p>Let $t = 1/x$. As $x \\to 0$, $t \\to \\pm\\infty$. Then $\\lim_{t\\to\\pm\\infty} t e^{-t^2} = 0$ by L'Hospital's Rule. Thus $f'(0) = 0$.</p><p>By induction, assuming $f^{(k)}(0) = 0$, the difference quotient for $f^{(k+1)}(0)$ is:</p><p>$$\\lim_{x\\to 0} \\frac{f^{(k)}(x) - 0}{x} = \\lim_{x\\to 0} \\frac{P_k(1/x)}{x} e^{-1/x^2} = \\lim_{t\\to\\pm\\infty} t P_k(t) e^{-t^2} = 0$$</p><p>Thus $f^{(n)}(0) = 0$ for all $n \\in \\mathbb{N}$.</p><p><b>(b)</b> The Maclaurin series of $f$ is:</p><p>$$\\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = \\sum_{n=0}^\\infty 0 \\cdot x^n = 0$$</p><p>This power series converges everywhere on $\\mathbb{R}$ to the identically zero function.</p><p>However, for any $x \\ne 0$, $f(x) = e^{-1/x^2} > 0 \\ne 0$.</p><p>Therefore, the Maclaurin series represents $f(x)$ ONLY at the single point $x = 0$.</p>",
  "trap": "Smooth ($C^\\infty$) does NOT imply analytic! A function can have all derivatives at a point vanish without being identically zero."
},
{
  "id": "q.ra2.m2.23",
  "course": "ra2",
  "module": "ra2.m2",
  "sec": "6.4",
  "marks": 5,
  "title": "Cauchy Form of the Remainder",
  "source": "Bartle & Sherbert 4e \u00a76.4 Thm 6.4.2 & Ex 7",
  "prompt": "State the Cauchy Form of the Remainder in Taylor's Theorem. Explain why the Cauchy form is often preferred over the Lagrange form when expanding functions like $\\ln(1+x)$ or $(1+x)^m$ near the boundary of convergence.",
  "tests": [
    "c.6.4.1"
  ],
  "approach": "<p>State Cauchy's form $R_n(x) = \\frac{f^{(n+1)}(c)}{n!} (x - c)^n (x - x_0)$. Explain that the factor $(x - c)^n$ decays much faster when $c$ is near $x_0$.</p>",
  "solution": "<p><b>Cauchy Form of the Remainder:</b> Under the hypotheses of Taylor's Theorem, there exists $c$ strictly between $x_0$ and $x$ such that:</p><p>$$R_n(x) = \\frac{f^{(n+1)}(c)}{n!} (x - c)^n (x - x_0)$$</p><p>Setting $c = x_0 + \\theta (x - x_0)$ with $0 < \\theta < 1$, this can be written as:</p><p>$$R_n(x) = \\frac{f^{(n+1)}(x_0 + \\theta(x - x_0))}{n!} (1 - \\theta)^n (x - x_0)^{n+1}$$</p><p><b>Why Cauchy Form is Preferred:</b> In the binomial series $(1+x)^m$ for $-1 < x < 0$ or the logarithmic series $\\ln(1+x)$, the factor $(1+c)^{-(n+1)}$ in the Lagrange remainder blows up as $c \\to -1^+$, making it impossible to prove $R_n(x) \\to 0$.</p><p>In contrast, the Cauchy form contains the term $\\left(\\frac{1-\\theta}{1+\\theta x}\\right)^n$. Since $-1 < x < 0$, $0 < \\frac{1-\\theta}{1+\\theta x} < 1$, which decays exponentially to $0$ as $n \\to \\infty$, successfully proving convergence of the series on $(-1, 0)$.</p>",
  "trap": "Lagrange form divides by $(n+1)!$ with $(x-x_0)^{n+1}$; Cauchy form divides by $n!$ with $(x-c)^n(x-x_0)$."
}
);

#!/usr/bin/env python3
"""
Generates:
  - data/questions.ra2.m2.js (Differentiation: 6.1 - 6.4)
  - data/questions.ra2.m3.js (Riemann Integral: 7.1 - 7.5)
  - data/questions.ra2.m4.js (Sequences/Series of Functions & Series: 8.1 - 8.4, 9.1 - 9.4)
  - data/questions.rae.js    (Entrance Topics: E1 - E7)
"""

import json

# ══════════════════════════════════════════════════════════════════════════════
# RA2 MODULE II: DIFFERENTIATION (Ch 6)
# ══════════════════════════════════════════════════════════════════════════════
ra2_m2_questions = [
  {
    "id": "q.ra2.m2.01", "course": "ra2", "module": "ra2.m2", "sec": "6.1", "marks": 5,
    "title": "Differentiability of x² sin(1/x)",
    "source": "Bartle & Sherbert 4e §6.1 Ex 4",
    "prompt": "Let $f(x) := x^2 \\sin(1/x)$ for $x \\ne 0$ and $f(0) := 0$.<br>(a) Prove that $f$ is differentiable at $x = 0$ and find $f'(0)$.<br>(b) Show that $f'$ is NOT continuous at $x = 0$.",
    "tests": ["c.6.1.2"],
    "approach": "<p>At $x = 0$, evaluate the derivative directly from the limit definition of the difference quotient. Away from $0$, apply standard product and chain rules.</p>",
    "solution": "<p><b>(a)</b> By definition of derivative at $0$:</p><p>$$f'(0) = \\lim_{x \\to 0} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x \\to 0} \\frac{x^2 \\sin(1/x)}{x} = \\lim_{x \\to 0} x \\sin(1/x)$$</p><p>Since $|x \\sin(1/x)| \\le |x| \\to 0$, the Squeeze Theorem implies $f'(0) = 0$.</p><p><b>(b)</b> For $x \\ne 0$, differentiating using product and chain rules gives:</p><p>$$f'(x) = 2x \\sin(1/x) - \\cos(1/x)$$</p><p>As $x \\to 0$, $2x \\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $1$ and has no limit. Therefore $\\lim_{x \\to 0} f'(x)$ does not exist, so $f'$ is discontinuous at $0$.</p>",
    "trap": "Do not attempt to compute $f'(0)$ by differentiating $2x\\sin(1/x) - \\cos(1/x)$ and plugging in $x=0$, as that formula is valid only for $x \\ne 0$."
  },
  {
    "id": "q.ra2.m2.02", "course": "ra2", "module": "ra2.m2", "sec": "6.1", "marks": 5,
    "title": "Carathéodory's Theorem and the Chain Rule",
    "source": "Bartle & Sherbert 4e §6.1 Ex 8",
    "prompt": "State Carathéodory's Theorem for differentiability and use it to prove the Chain Rule for $(g \\circ f)'(c)$.",
    "tests": ["c.6.1.5"],
    "approach": "<p>Carathéodory replaces the troublesome difference quotient with a continuous auxiliary function $\\varphi$ satisfying $f(x) - f(c) = \\varphi(x)(x - c)$ with $\\varphi(c) = f'(c)$.</p>",
    "solution": "<p><b>Carathéodory's Theorem:</b> $f$ is differentiable at $c$ iff there exists a function $\\varphi$ continuous at $c$ such that $f(x) - f(c) = \\varphi(x)(x - c)$ for all $x$. In this case, $\\varphi(c) = f'(c)$.</p><p><b>Proof of Chain Rule:</b> Let $d = f(c)$. Since $g$ is differentiable at $d$, there is $\\psi$ continuous at $d$ with $g(y) - g(d) = \\psi(y)(y - d)$ and $\\psi(d) = g'(d)$.</p><p>Substitute $y = f(x)$ and $d = f(c)$:</p><p>$$g(f(x)) - g(f(c)) = \\psi(f(x))[f(x) - f(c)] = \\psi(f(x)) \\varphi(x) (x - c)$$</p><p>Define $h(x) = \\psi(f(x))\\varphi(x)$. Since $f$ is continuous at $c$, $\\psi(f(x)) \\to \\psi(f(c)) = g'(f(c))$, and $\\varphi(x) \\to f'(c)$. Thus $h$ is continuous at $c$ with $h(c) = g'(f(c))f'(c)$. By Carathéodory's Theorem, $(g \\circ f)'(c) = g'(f(c))f'(c)$.</p>",
    "trap": "The classic difference quotient proof fails when $f(x) = f(c)$ for points arbitrarily close to $c$; Carathéodory's formulation completely eliminates division by zero."
  },
  {
    "id": "q.ra2.m2.03", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Rolle's Theorem and the Mean Value Theorem",
    "source": "Bartle & Sherbert 4e §6.2 Ex 3",
    "prompt": "State Lagrange's Mean Value Theorem and use it to prove that for all $x > 0$, $\\frac{x}{1+x} < \\ln(1+x) < x$.",
    "tests": ["c.6.2.3", "c.6.2.4"],
    "approach": "<p>Apply the Mean Value Theorem to $f(t) = \\ln(1+t)$ on the interval $[0, x]$.</p>",
    "solution": "<p><b>Lagrange's MVT:</b> If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ such that $f(b) - f(a) = f'(c)(b - a)$.</p><p>Let $f(t) = \\ln(1+t)$ on $[0, x]$ with $x > 0$. $f$ is continuous on $[0, x]$ and differentiable on $(0, x)$ with $f'(t) = \\frac{1}{1+t}$.</p><p>By MVT, there exists $c \\in (0, x)$ such that:</p><p>$$\\ln(1+x) - \\ln(1) = f'(c)(x - 0) = \\frac{x}{1+c}$$</p><p>Since $0 < c < x$, we have $1 < 1 + c < 1 + x$, which gives $\\frac{1}{1+x} < \\frac{1}{1+c} < 1$.</p><p>Multiplying by $x > 0$ yields $\\frac{x}{1+x} < \\frac{x}{1+c} = \\ln(1+x) < x$.</p>",
    "trap": "Ensure $c \\in (0, x)$ is strictly between $0$ and $x$ so that the inequalities are strict."
  },
  {
    "id": "q.ra2.m2.04", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Constant Difference and Zero Derivative",
    "source": "Bartle & Sherbert 4e §6.2 Ex 6",
    "prompt": "Prove that if $f: (a, b) \\to \\mathbb{R}$ is differentiable and $f'(x) = 0$ for all $x \\in (a, b)$, then $f$ is a constant function.",
    "tests": ["c.6.2.5"],
    "approach": "<p>Fix a point $x_0 \\in (a, b)$ and apply MVT to an arbitrary point $x \\in (a, b)$.</p>",
    "solution": "<p>Fix $x_0 \\in (a, b)$ and let $x \\in (a, b)$ be arbitrary with $x \\ne x_0$.</p><p>Since $f$ is differentiable on $(a, b)$, it is continuous on $[x_0, x]$ (or $[x, x_0]$) and differentiable on $(x_0, x)$.</p><p>By the Mean Value Theorem, there exists $c$ between $x_0$ and $x$ such that:</p><p>$$f(x) - f(x_0) = f'(c)(x - x_0)$$</p><p>By hypothesis, $f'(c) = 0$. Hence $f(x) - f(x_0) = 0 \\implies f(x) = f(x_0)$.</p><p>Since $x$ was arbitrary, $f(x) = f(x_0)$ for all $x \\in (a, b)$, so $f$ is constant.</p>",
    "trap": "The domain MUST be an interval! If the domain is disconnected (e.g. $(0, 1) \\cup (2, 3)$), $f'(x) = 0$ only implies $f$ is locally constant on each piece, not globally constant."
  },
  {
    "id": "q.ra2.m2.05", "course": "ra2", "module": "ra2.m2", "sec": "6.3", "marks": 5,
    "title": "L'Hospital's Rule for Indeterminate Forms",
    "source": "Bartle & Sherbert 4e §6.3 Ex 1",
    "prompt": "Evaluate $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ by justifying each application of L'Hospital's Rule.",
    "tests": ["c.6.3.3"],
    "approach": "<p>Verify the form is $0/0$ at each step before differentiating numerator and denominator.</p>",
    "solution": "<p><b>Step 1:</b> As $x \\to 0$, $x - \\sin x \\to 0$ and $x^3 \\to 0$. This is of indeterminate form $\\frac{0}{0}$. Differentiating top and bottom:</p><p>$$\\lim_{x\\to 0} \\frac{x - \\sin x}{x^3} = \\lim_{x\\to 0} \\frac{1 - \\cos x}{3x^2}$$</p><p><b>Step 2:</b> As $x \\to 0$, $1 - \\cos x \\to 0$ and $3x^2 \\to 0$ (still $\\frac{0}{0}$). Applying L'Hospital's rule again:</p><p>$$= \\lim_{x\\to 0} \\frac{\\sin x}{6x}$$</p><p><b>Step 3:</b> Since $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$, we get $\\frac{1}{6} \\cdot 1 = \\frac{1}{6}$.</p>",
    "trap": "Blindly differentiating when the limit is NOT an indeterminate form yields completely wrong answers."
  },
  {
    "id": "q.ra2.m2.06", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Taylor's Theorem with Lagrange Remainder",
    "source": "Bartle & Sherbert 4e §6.4 Ex 3",
    "prompt": "Use Taylor's Theorem for $f(x) = e^x$ at $x_0 = 0$ to approximate $e$ to within $10^{-4}$ and prove that $e$ is irrational.",
    "tests": ["c.6.4.1", "c.6.4.2"],
    "approach": "<p>Expand $e^x = \\sum_{k=0}^n \\frac{x^k}{k!} + R_n(x)$ with Lagrange remainder $R_n(1) = \\frac{e^c}{(n+1)!}$ for some $c \\in (0, 1)$.</p>",
    "solution": "<p>Taylor's formula for $f(x) = e^x$ at $x_0 = 0$ with $x = 1$ gives:</p><p>$$e = 1 + 1 + \\frac{1}{2!} + \\frac{1}{3!} + \\dots + \\frac{1}{n!} + \\frac{e^c}{(n+1)!}, \\quad 0 < c < 1$$</p><p>Since $c < 1$, $e^c < e < 3$, so the remainder is bounded by $0 < R_n(1) < \\frac{3}{(n+1)!}$.</p><p>For $n = 7$, $(n+1)! = 8! = 40320$, so $R_7 < 3/40320 \\approx 7.4 \\times 10^{-5} < 10^{-4}$.</p><p><b>Irrationality of $e$:</b> Suppose $e = p/q$ for $p, q \\in \\mathbb{N}$. Choose $n > q$. Multiply the Taylor expansion by $n!$:</p><p>$$n! e = n! \\left( \\sum_{k=0}^n \\frac{1}{k!} \\right) + \\frac{n! e^c}{(n+1)!}$$</p><p>The left side $n!(p/q)$ is an integer since $n > q$. The sum $n! \\sum_{k=0}^n \\frac{1}{k!}$ is also an integer. Thus the remainder term $\\frac{e^c}{n+1}$ must be an integer. But $0 < \\frac{e^c}{n+1} < \\frac{3}{n+1} < 1$ for $n \\ge 3$. An integer strictly between $0$ and $1$ is impossible! Hence $e$ is irrational.</p>",
    "trap": "Remember that $c$ depends on $n$ and lies strictly inside $(0, 1)$."
  }
]

# ══════════════════════════════════════════════════════════════════════════════
# RA2 MODULE III: THE RIEMANN INTEGRAL (Ch 7)
# ══════════════════════════════════════════════════════════════════════════════
ra2_m3_questions = [
  {
    "id": "q.ra2.m3.01", "course": "ra2", "module": "ra2.m3", "sec": "7.1", "marks": 5,
    "title": "Non-Integrability of Dirichlet's Function",
    "source": "Bartle & Sherbert 4e §7.1 Ex 2",
    "prompt": "Let $f(x) := 1$ if $x \\in \\mathbb{Q} \\cap [0, 1]$ and $f(x) := 0$ if $x \\notin \\mathbb{Q} \\cap [0, 1]$. Prove using Darboux sums that $f$ is not Riemann integrable on $[0, 1]$.",
    "tests": ["c.7.1.4", "c.7.4.8"],
    "approach": "<p>Compute the upper sum $U(f, P)$ and lower sum $L(f, P)$ for an arbitrary partition $P$.</p>",
    "solution": "<p>Let $P = \\{x_0, x_1, \\dots, x_n\\}$ be an arbitrary partition of $[0, 1]$.</p><p>In each subinterval $[x_{i-1}, x_i]$, by density of $\\mathbb{Q}$, there exists a rational number, so $M_i = \\sup_{x \\in [x_{i-1}, x_i]} f(x) = 1$.</p><p>By density of the irrationals, there exists an irrational number, so $m_i = \\inf_{x \\in [x_{i-1}, x_i]} f(x) = 0$.</p><p>Thus for every partition $P$:</p><p>$$U(f, P) = \\sum_{i=1}^n M_i \\Delta x_i = \\sum_{i=1}^n 1 \\cdot \\Delta x_i = 1$$</p><p>$$L(f, P) = \\sum_{i=1}^n m_i \\Delta x_i = \\sum_{i=1}^n 0 \\cdot \\Delta x_i = 0$$</p><p>Therefore the upper integral is $U(f) = \\inf_P U(f, P) = 1$ while the lower integral is $L(f) = \\sup_P L(f, P) = 0$. Since $U(f) \\ne L(f)$, $f$ is not Riemann integrable on $[0, 1]$.</p>",
    "trap": "Tag choices in Riemann sums can produce either 0 or 1 depending on whether tags are rational or irrational, showing the Riemann sum limit does not exist."
  },
  {
    "id": "q.ra2.m3.02", "course": "ra2", "module": "ra2.m3", "sec": "7.2", "marks": 5,
    "title": "Integrability of Continuous Functions",
    "source": "Bartle & Sherbert 4e §7.2 Ex 4",
    "prompt": "Prove that if $f: [a, b] \\to \\mathbb{R}$ is continuous on $[a, b]$, then $f$ is Riemann integrable on $[a, b]$.",
    "tests": ["c.7.2.7", "c.5.4.3"],
    "approach": "<p>Use the fact that continuous functions on compact intervals are uniformly continuous to bound $U(f, P) - L(f, P) < \\varepsilon$.</p>",
    "solution": "<p>Let $\\varepsilon > 0$. By the Uniform Continuity Theorem (Heine-Cantor), $f$ is uniformly continuous on $[a, b]$.</p><p>Choose $\\delta > 0$ such that $|x - y| < \\delta \\implies |f(x) - f(y)| < \\frac{\\varepsilon}{b - a}$.</p><p>Let $P = \\{x_0, x_1, \\dots, x_n\\}$ be a partition with mesh $\\|P\\| < \\delta$.</p><p>On each $[x_{i-1}, x_i]$, by the Extreme Value Theorem, $f$ attains its supremum at some $u_i$ and its infimum at some $v_i$. Since $|u_i - v_i| \\le \\Delta x_i < \\delta$, we have:</p><p>$$M_i - m_i = f(u_i) - f(v_i) < \\frac{\\varepsilon}{b - a}$$</p><p>Now compute the Darboux gap:</p><p>$$U(f, P) - L(f, P) = \\sum_{i=1}^n (M_i - m_i) \\Delta x_i < \\frac{\\varepsilon}{b - a} \\sum_{i=1}^n \\Delta x_i = \\frac{\\varepsilon}{b - a} (b - a) = \\varepsilon$$</p><p>By the Cauchy/Darboux Integrability Criterion, $f$ is Riemann integrable on $[a, b]$.</p>",
    "trap": "Ordinary continuity at each point is NOT enough because $\\delta$ would depend on $x$; uniform continuity is crucial to get a single $\\delta$ for the entire interval."
  },
  {
    "id": "q.ra2.m3.03", "course": "ra2", "module": "ra2.m3", "sec": "7.3", "marks": 5,
    "title": "Fundamental Theorem of Calculus (Differentiation Form)",
    "source": "Bartle & Sherbert 4e §7.3 Ex 2",
    "prompt": "Let $f: [a, b] \\to \\mathbb{R}$ be continuous, and define $F(x) := \\int_a^x f(t) \\, dt$. Prove that $F$ is differentiable on $[a, b]$ and $F'(x) = f(x)$ for all $x \\in [a, b]$.",
    "tests": ["c.7.3.5"],
    "approach": "<p>Examine the difference quotient $\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt$ and use continuity of $f$ at $x$.</p>",
    "solution": "<p>Fix $x \\in [a, b]$ and let $h \\ne 0$ with $x + h \\in [a, b]$. Using additivity of integrals:</p><p>$$\\frac{F(x+h) - F(x)}{h} = \\frac{1}{h} \\left( \\int_a^{x+h} f(t) dt - \\int_a^x f(t) dt \\right) = \\frac{1}{h} \\int_x^{x+h} f(t) \\, dt$$</p><p>Note that $f(x) = \\frac{1}{h} \\int_x^{x+h} f(x) \\, dt$. Subtracting gives:</p><p>$$\\left| \\frac{F(x+h) - F(x)}{h} - f(x) \\right| = \\left| \\frac{1}{h} \\int_x^{x+h} (f(t) - f(x)) \\, dt \\right| \\le \\frac{1}{|h|} \\left| \\int_x^{x+h} |f(t) - f(x)| \\, dt \\right|$$</p><p>Let $\\varepsilon > 0$. By continuity of $f$ at $x$, choose $\\delta > 0$ such that $|t - x| < \\delta \\implies |f(t) - f(x)| < \\varepsilon$.</p><p>For $0 < |h| < \\delta$, every $t$ in the integration interval satisfies $|t - x| \\le |h| < \\delta$, so:</p><p>$$\\left| \\frac{F(x+h) - F(x)}{h} - f(x) \\right| \\le \\frac{1}{|h|} \\cdot \\varepsilon |h| = \\varepsilon$$</p><p>Hence $\\lim_{h\\to 0} \\frac{F(x+h) - F(x)}{h} = f(x)$, establishing $F'(x) = f(x)$.</p>",
    "trap": "If $f$ is not continuous at $c$, $F$ may not be differentiable at $c$ (e.g. step functions integrate to corner/kink points)."
  },
  {
    "id": "q.ra2.m3.04", "course": "ra2", "module": "ra2.m3", "sec": "7.3", "marks": 5,
    "title": "Leibniz Integral Rule via Chain Rule",
    "source": "Bartle & Sherbert 4e §7.3 Ex 6",
    "prompt": "Let $g(x) := \\int_0^{x^2} \\sqrt{1 + t^3} \\, dt$. Find $g'(x)$ and justify your steps.",
    "tests": ["c.7.3.5", "c.6.1.5"],
    "approach": "<p>Write $g(x) = F(u(x))$ where $u(x) = x^2$ and $F(u) = \\int_0^u \\sqrt{1+t^3} dt$, then apply the Chain Rule.</p>",
    "solution": "<p>Let $f(t) = \\sqrt{1+t^3}$, which is continuous on $[0, \\infty)$.</p><p>Define $F(u) = \\int_0^u f(t) dt$. By the Fundamental Theorem of Calculus (Second Form), $F'(u) = f(u) = \\sqrt{1 + u^3}$.</p><p>Let $u(x) = x^2$, which is differentiable with $u'(x) = 2x$.</p><p>Since $g(x) = F(u(x))$, the Chain Rule yields:</p><p>$$g'(x) = F'(u(x)) \\cdot u'(x) = \\sqrt{1 + (x^2)^3} \\cdot 2x = 2x \\sqrt{1 + x^6}$$</p>",
    "trap": "Do not forget to multiply by the inner derivative $u'(x) = 2x$!"
  }
]

# ══════════════════════════════════════════════════════════════════════════════
# RA2 MODULE IV & EXTENSION: SEQUENCES OF FUNCTIONS & SERIES (Ch 8 & 9)
# ══════════════════════════════════════════════════════════════════════════════
ra2_m4_questions = [
  {
    "id": "q.ra2.m4.01", "course": "ra2", "module": "ra2.m4", "sec": "8.1", "marks": 5,
    "title": "Non-Uniform Convergence of xⁿ on [0, 1]",
    "source": "Bartle & Sherbert 4e §8.1 Ex 2",
    "prompt": "Let $f_n(x) := x^n$ for $x \\in [0, 1]$.<br>(a) Find the pointwise limit function $f(x) = \\lim_{n\\to\\infty} f_n(x)$.<br>(b) Prove that the convergence is NOT uniform on $[0, 1]$.<br>(c) Show that the convergence IS uniform on $[0, a]$ for any $0 < a < 1$.",
    "tests": ["c.8.1.3", "c.8.1.5", "c.8.2.2"],
    "approach": "<p>Examine the continuity of the limit function and compute the uniform norm $\\|f_n - f\\|_\\infty$.</p>",
    "solution": "<p><b>(a)</b> For $x \\in [0, 1)$, $x^n \\to 0$. For $x = 1$, $1^n = 1 \\to 1$. Thus $f(x) = 0$ for $x \\in [0, 1)$ and $f(1) = 1$.</p><p><b>(b) Method 1 (Uniform Limit Theorem):</b> Each $f_n(x) = x^n$ is continuous on $[0, 1]$, but the limit function $f$ is discontinuous at $x = 1$. By the Uniform Limit Theorem, $f_n$ cannot converge uniformly on $[0, 1]$.</p><p><b>Method 2 (Sup-norm):</b> $\\|f_n - f\\|_\\infty = \\sup_{x \\in [0, 1)} x^n = 1 \\not\\to 0$.</p><p><b>(c)</b> On $[0, a]$ where $0 < a < 1$, $f(x) = 0$, so $\\|f_n - f\\|_{[0, a]} = \\sup_{x \\in [0, a]} x^n = a^n$. Since $a < 1$, $a^n \\to 0$ as $n \\to \\infty$. Hence $f_n \\to 0$ uniformly on $[0, a]$.</p>",
    "trap": "A sequence of continuous functions can converge pointwise to a discontinuous function, which immediately disproves uniform convergence."
  },
  {
    "id": "q.ra2.m4.02", "course": "ra2", "module": "ra2.m4", "sec": "8.2", "marks": 5,
    "title": "Interchange of Limit and Integral",
    "source": "Bartle & Sherbert 4e §8.2 Ex 3",
    "prompt": "Prove that if $(f_n)$ is a sequence of continuous functions converging uniformly to $f$ on $[a, b]$, then $\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx$.",
    "tests": ["c.8.2.4"],
    "approach": "<p>Estimate $\\left| \\int_a^b f_n - \\int_a^b f \\right| \\le \\int_a^b |f_n - f| \\le (b - a) \\|f_n - f\\|_\\infty$.</p>",
    "solution": "<p>By the Uniform Limit Theorem, the uniform limit $f$ is continuous on $[a, b]$, hence Riemann integrable.</p><p>Using linearity and the Triangle Inequality for integrals:</p><p>$$\\left| \\int_a^b f_n(x) \\, dx - \\int_a^b f(x) \\, dx \\right| = \\left| \\int_a^b (f_n(x) - f(x)) \\, dx \\right| \\le \\int_a^b |f_n(x) - f(x)| \\, dx$$</p><p>Since $f_n \\to f$ uniformly on $[a, b]$, let $\\varepsilon > 0$ and choose $K$ such that for all $n \\ge K$ and all $x \\in [a, b]$:</p><p>$$|f_n(x) - f(x)| < \\frac{\\varepsilon}{b - a}$$</p><p>Then for all $n \\ge K$:</p><p>$$\\left| \\int_a^b f_n(x) \\, dx - \\int_a^b f(x) \\, dx \\right| \\le \\int_a^b \\frac{\\varepsilon}{b - a} \\, dx = \\varepsilon$$</p><p>Hence $\\lim_{n\\to\\infty} \\int_a^b f_n(x) \\, dx = \\int_a^b f(x) \\, dx$.</p>",
    "trap": "Pointwise convergence is NOT enough! For example, $f_n(x) = 2n^2 x e^{-n^2 x^2}$ on $[0, 1]$ converges pointwise to $0$, but $\\int_0^1 f_n = 1 - e^{-n^2} \\to 1 \\ne 0$."
  },
  {
    "id": "q.ra2.m4.03", "course": "ra2", "module": "ra2.m5", "sec": "9.2", "marks": 5,
    "title": "Ratio and Root Tests for Series",
    "source": "Bartle & Sherbert 4e §9.2 Ex 2",
    "prompt": "Determine the convergence or divergence of: (a) $\\sum_{n=1}^\\infty \\frac{n!}{n^n}$; (b) $\\sum_{n=1}^\\infty \\left(1 - \\frac{1}{n}\\right)^{n^2}$.",
    "tests": ["c.3.7.4"],
    "approach": "<p>Apply the Ratio Test to (a) and the Root Test to (b).</p>",
    "solution": "<p><b>(a)</b> Let $x_n = \\frac{n!}{n^n}$. Compute the ratio:</p><p>$$\\frac{x_{n+1}}{x_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\frac{(n+1) n^n}{(n+1)(n+1)^n} = \\left( \\frac{n}{n+1} \\right)^n = \\frac{1}{\\left(1 + \\frac{1}{n}\\right)^n}$$</p><p>Taking the limit as $n \\to \\infty$, $\\lim \\frac{x_{n+1}}{x_n} = \\frac{1}{e} < 1$. By the Ratio Test, the series converges.</p><p><b>(b)</b> Let $x_n = \\left(1 - \\frac{1}{n}\\right)^{n^2}$. Apply the Root Test:</p><p>$$\\sqrt[n]{x_n} = \\left(1 - \\frac{1}{n}\\right)^n$$</p><p>As $n \\to \\infty$, $\\lim \\sqrt[n]{x_n} = e^{-1} = \\frac{1}{e} < 1$. By the Root Test, the series converges.</p>",
    "trap": "Remember that if the limit of the ratio or root is 1, the test is inconclusive."
  },
  {
    "id": "q.ra2.m4.04", "course": "ra2", "module": "ra2.m5", "sec": "9.4", "marks": 5,
    "title": "Weierstrass M-Test for Series of Functions",
    "source": "Bartle & Sherbert 4e §9.4 Ex 1",
    "prompt": "State the Weierstrass M-Test and prove that $\\sum_{n=1}^\\infty \\frac{\\cos(n x)}{n^2}$ converges uniformly on $\\mathbb{R}$ to a continuous function.",
    "tests": ["c.8.2.2"],
    "approach": "<p>Bound the terms independently of $x$ and compare with the convergent $p$-series $\\sum 1/n^2$.</p>",
    "solution": "<p><b>Weierstrass M-Test:</b> If $|f_n(x)| \\le M_n$ for all $x \\in A$ and $\\sum_{n=1}^\\infty M_n$ converges, then $\\sum_{n=1}^\\infty f_n(x)$ converges uniformly and absolutely on $A$.</p><p>For $f_n(x) = \\frac{\\cos(n x)}{n^2}$ on $\\mathbb{R}$, we have $|\\cos(n x)| \\le 1$, so:</p><p>$$|f_n(x)| \\le \\frac{1}{n^2} =: M_n \\quad \\text{for all } x \\in \\mathbb{R}$$</p><p>The series $\\sum_{n=1}^\\infty M_n = \\sum_{n=1}^\\infty \\frac{1}{n^2}$ converges ($p$-series with $p = 2 > 1$).</p><p>By the Weierstrass M-Test, $\\sum_{n=1}^\\infty \\frac{\\cos(n x)}{n^2}$ converges uniformly on $\\mathbb{R}$.</p><p>Since each term $\\frac{\\cos(n x)}{n^2}$ is continuous on $\\mathbb{R}$, the uniform limit function is continuous on $\\mathbb{R}$ by the Uniform Limit Theorem.</p>",
    "trap": "The bounds $M_n$ must be constants that do not depend on $x$."
  }
]

# ══════════════════════════════════════════════════════════════════════════════
# ENTRANCE (RAE): E1 - E7
# ══════════════════════════════════════════════════════════════════════════════
rae_questions = [
  {
    "id": "q.rae.e1.01", "course": "rae", "module": "rae.t1", "sec": "E1", "marks": 5,
    "title": "Metric Space Axioms and Discrete Metric",
    "source": "GATE MA 2021 / Rudin Ch. 2",
    "prompt": "Let $X$ be any non-empty set. Define $d(x, y) := 0$ if $x = y$ and $d(x, y) := 1$ if $x \\ne y$ (the discrete metric).<br>(a) Verify that $d$ satisfies all three metric axioms.<br>(b) Prove that in this metric space, EVERY subset $E \\subseteq X$ is both open and closed.",
    "tests": ["c.e1.1", "c.e1.2", "c.e1.3"],
    "approach": "<p>Check positivity, symmetry, and triangle inequality. For open/closed, inspect open balls with radius $1/2$.</p>",
    "solution": "<p><b>(a) Axioms:</b></p><p>1. Positivity: $d(x, y) \\in \\{0, 1\\} \\ge 0$, and $d(x, y) = 0 \\iff x = y$ by definition.</p><p>2. Symmetry: $x = y \\iff y = x$, so $d(x, y) = d(y, x)$.</p><p>3. Triangle Inequality: If $x = z$, $0 = d(x, z) \\le d(x, y) + d(y, z)$ is trivial. If $x \\ne z$, $d(x, z) = 1$. Then $y$ cannot equal both $x$ and $z$, so at least one of $d(x, y)$ or $d(y, z)$ is $1$. Hence $d(x, y) + d(y, z) \\ge 1 = d(x, z)$.</p><p><b>(b) Clopen Subsets:</b> For any point $x \\in X$, the open ball of radius $1/2$ is $B(x, 1/2) = \\{y \\in X : d(y, x) < 1/2\\} = \\{x\\}$. Since singletons are open balls, every singleton $\\{x\\}$ is an open set!</p><p>Any subset $E \\subseteq X$ is the union of its singletons: $E = \\bigcup_{x \\in E} \\{x\\}$. An arbitrary union of open sets is open, so $E$ is open. Its complement $X \\setminus E$ is likewise open, which proves $E$ is also closed.</p>",
    "trap": "In general metric spaces, sets are rarely clopen, but the discrete metric makes every subset clopen."
  },
  {
    "id": "q.rae.e2.01", "course": "rae", "module": "rae.t2", "sec": "E2", "marks": 5,
    "title": "Banach Fixed-Point Application to ODEs",
    "source": "GATE MA 2022 / JAM MA",
    "prompt": "Consider the integral operator $T: C[0, 1] \\to C[0, 1]$ defined by $(Tf)(x) = 1 + \\int_0^x f(t) \\, dt$.<br>Prove that $T$ is a contraction on $(C[0, 1/2], d_\\infty)$ and find its unique fixed point.",
    "tests": ["c.e2.2"],
    "approach": "<p>Compute $d_\\infty(Tf, Tg) = \\sup |Tf(x) - Tg(x)|$ and solve the differential equation $f'(x) = f(x)$ with $f(0) = 1$.</p>",
    "solution": "<p>For $f, g \\in C[0, 1/2]$ and $x \\in [0, 1/2]$:</p><p>$$|(Tf)(x) - (Tg)(x)| = \\left| \\int_0^x (f(t) - g(t)) \\, dt \\right| \\le \\int_0^x |f(t) - g(t)| \\, dt \\le x \\, d_\\infty(f, g) \\le \\frac{1}{2} d_\\infty(f, g)$$</p><p>Taking the supremum over $x \\in [0, 1/2]$ gives $d_\\infty(Tf, Tg) \\le \\frac{1}{2} d_\\infty(f, g)$.</p><p>Since $k = 1/2 < 1$ and $C[0, 1/2]$ is complete under $d_\\infty$, the Banach Contraction Mapping Principle guarantees a unique fixed point $f^* \\in C[0, 1/2]$ with $Tf^* = f^*$.</p><p>To find $f^*$: $f(x) = 1 + \\int_0^x f(t) dt \\implies f'(x) = f(x)$ with $f(0) = 1$. The unique solution is $f^*(x) = e^x$.</p>",
    "trap": "The domain $[0, 1/2]$ ensures $k = 1/2 < 1$. On $[0, 1]$, $T$ is not a strict contraction under standard $d_\\infty$ without using an equivalent weighted Bielecki norm."
  },
  {
    "id": "q.rae.e3.01", "course": "rae", "module": "rae.t3", "sec": "E3", "marks": 5,
    "title": "Failure of Heine–Borel in Infinite Dimensions",
    "source": "GATE MA 2023 / Rudin Ch. 2",
    "prompt": "Consider the sequence space $\\ell^2 = \\{ (x_n) : \\sum_{n=1}^\\infty x_n^2 < \\infty \\}$ with standard metric $d(x, y) = \\sqrt{\\sum (x_n - y_n)^2}$.<br>Let $e_k = (0, \\dots, 1, 0, \\dots)$ be the $k$-th standard basis vector.<br>(a) Show that the set $S = \\{e_k : k \\in \\mathbb{N}\\}$ is closed and bounded.<br>(b) Prove that $S$ is NOT compact.",
    "tests": ["c.e3.1", "c.e3.2"],
    "approach": "<p>Compute the distance $d(e_j, e_k)$ for $j \\ne k$ and show no convergent subsequence can exist.</p>",
    "solution": "<p><b>(a) Bounded and Closed:</b> For each $k$, $d(e_k, 0) = \\|e_k\\|_2 = 1$, so $S$ is bounded by $1$. For any $j \\ne k$, $d(e_j, e_k) = \\sqrt{1^2 + (-1)^2} = \\sqrt{2}$. Since all points in $S$ are separated by $\\sqrt{2}$, every point is isolated and $S$ has no limit points, making $S$ closed.</p><p><b>(b) Not Compact:</b> The sequence $(e_k)_{k=1}^\\infty$ in $S$ satisfies $d(e_j, e_k) = \\sqrt{2}$ for all $j \\ne k$. Therefore no subsequence of $(e_k)$ can ever be a Cauchy sequence, so no subsequence can converge.</p><p>By the Sequential Characterization of Compactness, $S$ is NOT compact.</p>",
    "trap": "Heine-Borel (closed + bounded = compact) holds ONLY in finite-dimensional Euclidean spaces $\\mathbb{R}^n$!"
  },
  {
    "id": "q.rae.e4.01", "course": "rae", "module": "rae.t4", "sec": "E4", "marks": 5,
    "title": "Arzelà–Ascoli Theorem Verification",
    "source": "GATE MA 2020 / Carothers Ch. 10",
    "prompt": "Let $\\mathcal{F} = \\{ f_n(x) = \\sin(n x) : n \\in \\mathbb{N} \\}$ on $[0, \\pi]$.<br>(a) Show that $\\mathcal{F}$ is uniformly bounded.<br>(b) Prove that $\\mathcal{F}$ is NOT equicontinuous on $[0, \\pi]$.<br>(c) Conclude why no subsequence of $(f_n)$ can converge uniformly on $[0, \\pi]$.",
    "tests": ["c.e4.1", "c.e4.2", "c.e4.3"],
    "approach": "<p>Compute $|f_n(x)| \\le 1$ for boundedness. To disprove equicontinuity, evaluate $f_n(\\pi/(2n)) - f_n(0)$ as $n \\to \\infty$.</p>",
    "solution": "<p><b>(a) Uniformly Bounded:</b> For all $n$ and all $x \\in [0, \\pi]$, $|f_n(x)| = |\\sin(nx)| \\le 1$. Hence $\\mathcal{F}$ is uniformly bounded with $M = 1$.</p><p><b>(b) Not Equicontinuous:</b> Consider $x_n = \\frac{\\pi}{2n}$ and $y_n = 0$. As $n \\to \\infty$, $|x_n - y_n| = \\frac{\\pi}{2n} \\to 0$. However:</p><p>$$|f_n(x_n) - f_n(y_n)| = |\\sin(\\pi/2) - \\sin(0)| = |1 - 0| = 1$$</p><p>For $\\varepsilon = 1/2$, no matter how small $\\delta > 0$ is chosen, choosing $n > \\frac{\\pi}{2\\delta}$ gives $|x_n - 0| < \\delta$ but $|f_n(x_n) - f_n(0)| = 1 \\not< 1/2$. Hence $\\mathcal{F}$ is not equicontinuous at $0$.</p><p><b>(c) No Uniformly Convergent Subsequence:</b> By the Arzelà–Ascoli Theorem, a bounded family in $C[0, \\pi]$ has a uniformly convergent subsequence if and only if it is equicontinuous. Since $\\mathcal{F}$ is not equicontinuous, it is not relatively compact.</p>",
    "trap": "Equicontinuity requires ONE $\\delta$ to work for ALL $n$ simultaneously; here the frequency $n$ causes slopes to explode without bound."
  },
  {
    "id": "q.rae.e5.01", "course": "rae", "module": "rae.t5", "sec": "E5", "marks": 5,
    "title": "Inverse Function Theorem on Polar Coordinates",
    "source": "GATE MA 2022 / Rudin Ch. 9",
    "prompt": "Let $f: \\mathbb{R}^2 \\to \\mathbb{R}^2$ be the polar-to-Cartesian map $f(r, \\theta) = (r \\cos\\theta, r \\sin\\theta)$.<br>(a) Compute the Jacobian matrix $J_f(r, \\theta)$ and its determinant.<br>(b) At which points $(r, \\theta)$ does the Inverse Function Theorem guarantee a local $C^1$ inverse?",
    "tests": ["c.e5.1", "c.e5.2"],
    "approach": "<p>Calculate the partial derivatives matrix and check where $\\det J_f(r, \\theta) \\ne 0$.</p>",
    "solution": "<p><b>(a) Jacobian:</b> Let $u(r, \\theta) = r\\cos\\theta$ and $v(r, \\theta) = r\\sin\\theta$.</p><p>$$J_f(r, \\theta) = \\begin{bmatrix} \\frac{\\partial u}{\\partial r} & \\frac{\\partial u}{\\partial \\theta} \\\\ \\frac{\\partial v}{\\partial r} & \\frac{\\partial v}{\\partial \\theta} \\end{bmatrix} = \\begin{bmatrix} \\cos\\theta & -r\\sin\\theta \\\\ \\sin\\theta & r\\cos\\theta \\end{bmatrix}$$</p><p>The Jacobian determinant is:</p><p>$$\\det J_f(r, \\theta) = (\\cos\\theta)(r\\cos\\theta) - (-r\\sin\\theta)(\\sin\\theta) = r\\cos^2\\theta + r\\sin^2\\theta = r$$</p><p><b>(b) Invertibility:</b> The Inverse Function Theorem guarantees a local $C^1$ inverse at every point where $\\det J_f(r, \\theta) \\ne 0$, which is precisely all points with $r \\ne 0$ (everywhere except the origin).</p>",
    "trap": "Even though $\\det J_f \\ne 0$ for all $r > 0$, $f$ is NOT globally invertible on $(0, \\infty) \\times \\mathbb{R}$ because $\\theta$ is periodic with period $2\\pi$."
  },
  {
    "id": "q.rae.e6.01", "course": "rae", "module": "rae.t6", "sec": "E6", "marks": 5,
    "title": "Outer Measure of the Cantor Set",
    "source": "GATE MA 2021 / Royden Ch. 2",
    "prompt": "Prove that the Cantor ternary set $C \\subset [0, 1]$ is uncountable, closed, and has Lebesgue measure zero.",
    "tests": ["c.e6.1", "c.e6.2"],
    "approach": "<p>At each step $n$, compute the total length of the remaining $2^n$ intervals of length $(1/3)^n$.</p>",
    "solution": "<p><b>Closed:</b> $C = \\bigcap_{n=1}^\\infty C_n$ where each $C_n$ is a finite union of closed intervals. The intersection of closed sets is closed.</p><p><b>Measure Zero:</b> $C_n$ consists of $2^n$ disjoint closed intervals each of length $(1/3)^n$. Since $C \\subseteq C_n$ for every $n$, monotonicity of outer measure gives:</p><p>$$m^*(C) \\le m^*(C_n) = 2^n \\cdot \\left(\\frac{1}{3}\\right)^n = \\left(\\frac{2}{3}\\right)^n$$</p><p>Since this holds for every $n \\in \\mathbb{N}$ and $(2/3)^n \\to 0$ as $n \\to \\infty$, we have $m^*(C) = 0$. Since $m^*(C) = 0$, $C$ is measurable with $m(C) = 0$.</p><p><b>Uncountable:</b> Points in $C$ correspond bijectively to ternary expansions containing only $0$s and $2$s, which maps surjectively onto the binary expansions of $[0, 1]$. Hence $|C| = |\\mathbb{R}| = \\mathfrak{c}$.</p>",
    "trap": "A set having measure zero does NOT mean it is countable! The Cantor set is an uncountable null set."
  },
  {
    "id": "q.rae.e7.01", "course": "rae", "module": "rae.t7", "sec": "E7", "marks": 5,
    "title": "Dominated Convergence Theorem Application",
    "source": "GATE MA 2023 / Royden Ch. 4",
    "prompt": "Evaluate $\\lim_{n \\to \\infty} \\int_0^1 \\frac{n \\sin(x/n)}{1 + x^2} \\, dx$ and justify the limit-integral interchange using the Dominated Convergence Theorem.",
    "tests": ["c.e7.4"],
    "approach": "<p>Find the pointwise limit $f(x)$ using $\\lim_{n\\to\\infty} n \\sin(x/n) = x$ and bound the integrand by an integrable function $g(x)$.</p>",
    "solution": "<p>Let $f_n(x) = \\frac{n \\sin(x/n)}{1 + x^2}$ on $[0, 1]$.</p><p><b>1. Pointwise Limit:</b> For any $x \\in [0, 1]$, write $n \\sin(x/n) = x \\cdot \\frac{\\sin(x/n)}{x/n} \\to x \\cdot 1 = x$ as $n \\to \\infty$.</p><p>Hence the pointwise limit is $f(x) = \\frac{x}{1 + x^2}$.</p><p><b>2. Domination:</b> Since $|\\sin u| \\le |u|$ for all $u \\ge 0$, we have $n \\sin(x/n) \\le n(x/n) = x \\le 1$ for all $x \\in [0, 1]$.</p><p>Thus $|f_n(x)| \\le \\frac{x}{1 + x^2} \\le 1 =: g(x)$ for all $n$ and all $x \\in [0, 1]$.</p><p>Since $g(x) = 1$ is integrable on $[0, 1]$ ($\\int_0^1 1 dx = 1 < \\infty$), the hypotheses of the Dominated Convergence Theorem are satisfied.</p><p><b>3. Evaluation:</b></p><p>$$\\lim_{n\\to\\infty} \\int_0^1 f_n(x) \\, dx = \\int_0^1 \\lim_{n\\to\\infty} f_n(x) \\, dx = \\int_0^1 \\frac{x}{1 + x^2} \\, dx = \\left[ \\frac{1}{2} \\ln(1 + x^2) \\right]_0^1 = \\frac{1}{2} \\ln 2$$</p>",
    "trap": "Always explicitly state and check the integrability of the dominator $g(x)$."
  }
]

# Write data/questions.ra2.m2.js
with open("data/questions.ra2.m2.js", "w") as f:
    f.write("/* Real Analysis II · Module II — Differentiation (Bartle Ch 6) */\nQUESTIONS.push(\n")
    for i, q in enumerate(ra2_m2_questions):
        sep = "," if i < len(ra2_m2_questions) - 1 else ""
        f.write(json.dumps(q, indent=2) + sep + "\n")
    f.write(");\n")

# Write data/questions.ra2.m3.js
with open("data/questions.ra2.m3.js", "w") as f:
    f.write("/* Real Analysis II · Module III — The Riemann Integral (Bartle Ch 7) */\nQUESTIONS.push(\n")
    for i, q in enumerate(ra2_m3_questions):
        sep = "," if i < len(ra2_m3_questions) - 1 else ""
        f.write(json.dumps(q, indent=2) + sep + "\n")
    f.write(");\n")

# Write data/questions.ra2.m4.js
with open("data/questions.ra2.m4.js", "w") as f:
    f.write("/* Real Analysis II · Module IV & Extension — Sequences/Series of Functions (Bartle Ch 8 & 9) */\nQUESTIONS.push(\n")
    for i, q in enumerate(ra2_m4_questions):
        sep = "," if i < len(ra2_m4_questions) - 1 else ""
        f.write(json.dumps(q, indent=2) + sep + "\n")
    f.write(");\n")

# Write data/questions.rae.js
with open("data/questions.rae.js", "w") as f:
    f.write("/* Real Analysis for Entrance · Level 3 Written Exercises (Modules E1 - E7) */\nQUESTIONS.push(\n")
    for i, q in enumerate(rae_questions):
        sep = "," if i < len(rae_questions) - 1 else ""
        f.write(json.dumps(q, indent=2) + sep + "\n")
    f.write(");\n")

print("Successfully authored all written question files for RA2 and Entrance!")

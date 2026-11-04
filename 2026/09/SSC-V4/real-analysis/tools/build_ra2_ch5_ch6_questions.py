#!/usr/bin/env python3
"""
tools/build_ra2_ch5_ch6_questions.py
Constructs comprehensive Level 3 Bartle written questions for:
  - data/questions.ra2.m1.js (Continuous Functions, Ch 5: 5.1 to 5.6) - 38 questions
  - data/questions.ra2.m2.js (Differentiation, Ch 6: 6.1 to 6.4) - 23 questions
"""

import json

# ══════════════════════════════════════════════════════════════════════════════
# MODULE 1: CONTINUOUS FUNCTIONS (Ch 5: 5.1 to 5.6)
# ══════════════════════════════════════════════════════════════════════════════

ra2_m1_questions = [
  # --- 5.1: CONTINUOUS FUNCTIONS ---
  {
    "id": "q.ra2.m1.01", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 2,
    "title": "ε–δ Definition of Continuity",
    "source": "Bartle & Sherbert 4e §5.1 Def 5.1.1",
    "prompt": "State the $\\varepsilon$–$\\delta$ definition of continuity of a function $f:A\\to\\mathbb{R}$ at a point $c\\in A$, where $A\\subseteq\\mathbb{R}$.",
    "tests": ["c.5.1.1"],
    "approach": "<p>Reproduce Definition 5.1.1 exactly with the quantifiers in correct order ($\\forall\\varepsilon > 0$, $\\exists\\delta > 0$, $\\forall x \\in A$).</p>",
    "solution": "<p>Let $A \\subseteq \\mathbb{R}$, $f: A \\to \\mathbb{R}$, and $c \\in A$. We say $f$ is <b>continuous at $c$</b> if for every $\\varepsilon > 0$ there exists $\\delta > 0$ such that whenever $x \\in A$ and $|x - c| < \\delta$, it follows that:</p><p>$$|f(x) - f(c)| < \\varepsilon$$</p><p>If $f$ is continuous at every point of $A$, we say $f$ is continuous on $A$.</p>",
    "trap": "Do not omit that $x$ must lie in the domain $A$; $\\delta$ depends on both $\\varepsilon$ and the base point $c$."
  },
  {
    "id": "q.ra2.m1.02", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 5,
    "title": "Continuity from the Definition",
    "source": "Bartle & Sherbert 4e §5.1 Ex 1 & 2",
    "prompt": "Using the $\\varepsilon$–$\\delta$ definition directly (no sequential criterion), prove:<br>(a) $f(x) := x^2$ is continuous at an arbitrary point $c \\in \\mathbb{R}$;<br>(b) $g(x) := 1/x$ is continuous on $[a, \\infty)$ for fixed $a > 0$.",
    "tests": ["c.5.1.1"],
    "approach": "<p>Factor $|f(x)-f(c)|$ as $|x+c||x-c|$, bound the coefficient using a preliminary restriction $|x-c| < 1$, then choose $\\delta$.</p>",
    "solution": "<p><b>(a) $f(x) = x^2$ at $c$:</b> Let $\\varepsilon > 0$. Write $|x^2 - c^2| = |x + c| |x - c|$. Restrict $|x - c| < 1$; then $|x| < |c| + 1$, so $|x + c| \\le |x| + |c| < 2|c| + 1$. Thus for $|x - c| < 1$, $|x^2 - c^2| < (2|c| + 1)|x - c|$. Choose $\\delta := \\min\\{1, \\varepsilon / (2|c| + 1)\\}$. Then $|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$.</p><p><b>(b) $g(x) = 1/x$ on $[a, \\infty)$:</b> $|1/x - 1/c| = \\frac{|x - c|}{xc}$. Since $x, c \\ge a > 0$, $xc \\ge a^2$, giving $|1/x - 1/c| \\le \\frac{|x - c|}{a^2}$. Given $\\varepsilon > 0$, choose $\\delta := a^2 \\varepsilon$. Then $|x - c| < \\delta \\implies |g(x) - g(c)| < \\varepsilon$.</p>",
    "trap": "In (a), omitting the preliminary restriction leaves $|x+c|$ unbounded; in (b), the bound requires $x \\ge a > 0$ away from 0."
  },
  {
    "id": "q.ra2.m1.03", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 2,
    "title": "Sequential and Discontinuity Criteria",
    "source": "Bartle & Sherbert 4e §5.1 Thm 5.1.3 & 5.1.4",
    "prompt": "State (a) the Sequential Criterion for continuity and (b) the Discontinuity Criterion.",
    "tests": ["c.5.1.3", "c.5.1.4"],
    "approach": "<p>State both results. The Discontinuity Criterion is the contrapositive of the Sequential Criterion.</p>",
    "solution": "<p><b>(a) Sequential Criterion:</b> $f: A \\to \\mathbb{R}$ is continuous at $c \\in A$ if and only if for every sequence $(x_n)$ in $A$ converging to $c$, the sequence $(f(x_n))$ converges to $f(c)$.</p><p><b>(b) Discontinuity Criterion:</b> $f$ is discontinuous at $c \\in A$ if and only if there exists a sequence $(x_n)$ in $A$ with $x_n \\to c$ such that $(f(x_n))$ does not converge to $f(c)$ (either it diverges, or converges to $L \\ne f(c)$).</p>",
    "trap": "The image sequence need not converge to a wrong number; oscillating without limit is also a valid failure."
  },
  {
    "id": "q.ra2.m1.04", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 5,
    "title": "Discontinuity of the Signum Function",
    "source": "Bartle & Sherbert 4e §5.1 Ex 4",
    "prompt": "Define $\\operatorname{sgn}(x) := 1$ for $x > 0$, $\\operatorname{sgn}(0) := 0$, and $\\operatorname{sgn}(x) := -1$ for $x < 0$. Use the Sequential Criterion to prove $\\operatorname{sgn}$ is discontinuous at $x = 0$.",
    "tests": ["c.5.1.4"],
    "approach": "<p>Construct a sequence $x_n \\to 0$ whose image values do not converge to $\\operatorname{sgn}(0) = 0$.</p>",
    "solution": "<p>Consider the sequence $x_n := 1/n$ for $n \\in \\mathbb{N}$. Clearly $x_n \\to 0$. For every $n$, $x_n > 0$, so $\\operatorname{sgn}(x_n) = 1$. Thus $\\lim_{n\\to\\infty} \\operatorname{sgn}(x_n) = 1$.</p><p>However, $\\operatorname{sgn}(0) = 0 \\ne 1$. Since $(x_n)$ converges to $0$ but $(\\operatorname{sgn}(x_n))$ converges to $1 \\ne \\operatorname{sgn}(0)$, the Discontinuity Criterion implies $\\operatorname{sgn}$ is discontinuous at $0$.</p>",
    "trap": "Using one-sided limits without invoking a sequence directly when the question asks for the Sequential Criterion."
  },
  {
    "id": "q.ra2.m1.05", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 5,
    "title": "Discontinuity of sin(1/x) at the Origin",
    "source": "Bartle & Sherbert 4e §5.1 Ex 5",
    "prompt": "Let $f(x) := \\sin(1/x)$ for $x \\ne 0$ and $f(0) := 0$. Use the Sequential Criterion to prove that $f$ is discontinuous at $x = 0$.",
    "tests": ["c.5.1.4"],
    "approach": "<p>Construct two sequences $x_n \\to 0$ and $y_n \\to 0$ along which $\\sin(1/x)$ evaluates to two distinct constant values.</p>",
    "solution": "<p>Define $x_n := \\frac{1}{2n\\pi}$ and $y_n := \\frac{1}{2n\\pi + \\pi/2}$ for $n \\in \\mathbb{N}$.</p><p>As $n \\to \\infty$, both $x_n \\to 0$ and $y_n \\to 0$. Evaluating $f$ along these sequences:</p><p>$$f(x_n) = \\sin(2n\\pi) = 0 \\implies f(x_n) \\to 0$$</p><p>$$f(y_n) = \\sin(2n\\pi + \\pi/2) = 1 \\implies f(y_n) \\to 1$$</p><p>Since $x_n \\to 0$ and $y_n \\to 0$ but $f(x_n) \\to 0 \\ne 1 \\leftarrow f(y_n)$, $\\lim_{x\\to 0} f(x)$ does not exist. Hence $f$ is discontinuous at $0$.</p>",
    "trap": "Do not confuse $\\sin(1/x)$ with $x \\sin(1/x)$; the latter has factor $x$ that squeezes it to $0$ and makes it continuous."
  },
  {
    "id": "q.ra2.m1.06", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 5,
    "title": "Continuous Gluing Lemma (Pasting Lemma)",
    "source": "Bartle & Sherbert 4e §5.1 Ex 3",
    "prompt": "Let $a < b < c$. Suppose $f$ is continuous on $[a, b]$, $g$ is continuous on $[b, c]$, and $f(b) = g(b)$. Define $h:[a, c] \\to \\mathbb{R}$ by $h(x) := f(x)$ for $x \\in [a, b]$ and $h(x) := g(x)$ for $x \\in [b, c]$. Prove that $h$ is continuous on $[a, c]$.",
    "tests": ["c.5.1.1", "c.5.1.2"],
    "approach": "<p>Check continuity separately for $x \\in [a, b)$, $x \\in (b, c]$, and at the seam point $x = b$ using left and right limits.</p>",
    "solution": "<p>For $x_0 \\in [a, b)$, $h$ agrees with $f$ on a neighborhood of $x_0$, so $h$ is continuous at $x_0$. Similarly for $x_0 \\in (b, c]$, $h$ agrees with $g$, so $h$ is continuous at $x_0$.</p><p>It remains to verify continuity at $x = b$. Let $\\varepsilon > 0$.</p><p>Since $f$ is continuous at $b$, there is $\\delta_1 > 0$ such that $x \\in [a, b]$ and $|x - b| < \\delta_1 \\implies |f(x) - f(b)| < \\varepsilon$.</p><p>Since $g$ is continuous at $b$, there is $\\delta_2 > 0$ such that $x \\in [b, c]$ and $|x - b| < \\delta_2 \\implies |g(x) - g(b)| < \\varepsilon$.</p><p>Let $\\delta = \\min\\{\\delta_1, \\delta_2\\}$. If $x \\in [a, c]$ satisfies $|x - b| < \\delta$, then either $x \\in [a, b]$ (giving $|h(x) - h(b)| = |f(x) - f(b)| < \\varepsilon$) or $x \\in [b, c]$ (giving $|h(x) - h(b)| = |g(x) - g(b)| < \\varepsilon$).</p><p>Thus $h$ is continuous at $b$, and therefore continuous on all of $[a, c]$.</p>",
    "trap": "The condition $f(b) = g(b)$ is indispensable; without it $h$ has a jump discontinuity at $b$."
  },
  {
    "id": "q.ra2.m1.07", "course": "ra2", "module": "ra2.m1", "sec": "5.1", "marks": 5,
    "title": "Density of Rationals and Vanishing Continuous Function",
    "source": "Bartle & Sherbert 4e §5.1 Ex 12",
    "prompt": "Suppose $f: \\mathbb{R} \\to \\mathbb{R}$ is continuous on $\\mathbb{R}$ and $f(r) = 0$ for every rational number $r \\in \\mathbb{Q}$. Prove that $f(x) = 0$ for all $x \\in \\mathbb{R}$.",
    "tests": ["c.5.1.3"],
    "approach": "<p>For an arbitrary real number $x$, invoke the density of $\\mathbb{Q}$ in $\\mathbb{R}$ to produce a sequence of rationals converging to $x$, then apply the Sequential Criterion.</p>",
    "solution": "<p>Let $x \\in \\mathbb{R}$ be arbitrary.</p><p>By the Density Theorem for $\\mathbb{Q}$ in $\\mathbb{R}$ (Theorem 2.4.8), for every $n \\in \\mathbb{N}$ there exists a rational number $r_n \\in \\mathbb{Q}$ such that $x < r_n < x + 1/n$.</p><p>Then the sequence $(r_n)$ lies in $\\mathbb{Q}$ and satisfies $\\lim_{n\\to\\infty} r_n = x$.</p><p>Since $f$ is continuous at $x$, the Sequential Criterion implies:</p><p>$$f(x) = \\lim_{n\\to\\infty} f(r_n)$$</p><p>By hypothesis, $f(r) = 0$ for all $r \\in \\mathbb{Q}$, so $f(r_n) = 0$ for every $n$. Therefore $f(x) = \\lim_{n\\to\\infty} 0 = 0$.</p><p>Since $x$ was arbitrary, $f(x) = 0$ for all $x \\in \\mathbb{R}$.</p>",
    "trap": "Continuity is essential; Dirichlet's function vanishes on the irrationals but is 1 on rationals without being identically zero."
  },

  # --- 5.2: COMBINATIONS OF CONTINUOUS FUNCTIONS ---
  {
    "id": "q.ra2.m1.08", "course": "ra2", "module": "ra2.m1", "sec": "5.2", "marks": 5,
    "title": "Algebra of Continuous Functions",
    "source": "Bartle & Sherbert 4e §5.2 Thm 5.2.1",
    "prompt": "Let $A \\subseteq \\mathbb{R}$ and let $f, g: A \\to \\mathbb{R}$ be continuous at $c \\in A$. Prove directly from the definition (or sequential criterion) that the product function $fg$ is continuous at $c$.",
    "tests": ["c.5.2.1"],
    "approach": "<p>Use the sequential criterion or add and subtract $f(c)g(x)$ in $|f(x)g(x) - f(c)g(c)|$.</p>",
    "solution": "<p>Let $(x_n)$ be any sequence in $A$ such that $\\lim x_n = c$.</p><p>Since $f$ and $g$ are continuous at $c$, by the Sequential Criterion (Theorem 5.1.3):</p><p>$$\\lim f(x_n) = f(c) \\quad \\text{and} \\quad \\lim g(x_n) = g(c)$$</p><p>By the Product Rule for limits of sequences (Theorem 3.2.3):</p><p>$$\\lim (fg)(x_n) = \\lim [f(x_n) g(x_n)] = (\\lim f(x_n))(\\lim g(x_n)) = f(c) g(c) = (fg)(c)$$</p><p>Since $(x_n)$ was an arbitrary sequence in $A$ converging to $c$, the Sequential Criterion guarantees that $fg$ is continuous at $c$.</p>",
    "trap": "When using $\\varepsilon$-$\\delta$ directly, remember that $f$ is locally bounded near $c$; you cannot assume $f(x)$ is bounded without proving it on a neighborhood."
  },
  {
    "id": "q.ra2.m1.09", "course": "ra2", "module": "ra2.m1", "sec": "5.2", "marks": 5,
    "title": "Continuity of Powers fⁿ",
    "source": "Bartle & Sherbert 4e §5.2 Ex 2",
    "prompt": "Show by mathematical induction that if $f: A \\to \\mathbb{R}$ is continuous on $A \\subseteq \\mathbb{R}$, then for every $n \\in \\mathbb{N}$, the function $f^n$ defined by $f^n(x) := (f(x))^n$ is continuous on $A$.",
    "tests": ["c.5.2.1", "c.5.2.2"],
    "approach": "<p>Use mathematical induction on $n$, applying the Product Theorem for continuous functions at the inductive step.</p>",
    "solution": "<p>Let $P(n)$ be the statement that $f^n$ is continuous on $A$.</p><p><b>Base Step ($n = 1$):</b> $f^1 = f$ is continuous on $A$ by assumption. So $P(1)$ holds.</p><p><b>Inductive Step:</b> Assume $P(k)$ is true for some $k \\ge 1$, so $f^k$ is continuous on $A$.</p><p>We can write $f^{k+1}(x) = f^k(x) \\cdot f(x)$, so $f^{k+1} = f^k \\cdot f$.</p><p>By Theorem 5.2.1(b), the product of two continuous functions is continuous. Since $f^k$ (by inductive hypothesis) and $f$ are continuous on $A$, their product $f^{k+1}$ is continuous on $A$. Thus $P(k+1)$ holds.</p><p>By the Principle of Mathematical Induction, $f^n$ is continuous on $A$ for all $n \\in \\mathbb{N}$.</p>",
    "trap": "Remember to state both base case and inductive step with the theorem being applied."
  },
  {
    "id": "q.ra2.m1.10", "course": "ra2", "module": "ra2.m1", "sec": "5.2", "marks": 5,
    "title": "Combinations of Discontinuous Functions",
    "source": "Bartle & Sherbert 4e §5.2 Ex 3",
    "prompt": "Give an example of functions $f$ and $g$ that are both discontinuous at a point $c \\in \\mathbb{R}$, but such that:<br>(a) The sum $f + g$ is continuous at $c$;<br>(b) The product $fg$ is continuous at $c$.",
    "tests": ["c.5.2.1"],
    "approach": "<p>Use step functions or Dirichlet-type functions whose jumps or oscillations cancel each other out.</p>",
    "solution": "<p><b>(a) Sum $f + g$ continuous:</b> Let $c = 0$. Define $f(x) := 1$ for $x \\ge 0$ and $f(x) := -1$ for $x < 0$. Define $g(x) := -f(x)$. Both $f$ and $g$ have jump discontinuities of size 2 at $x = 0$.</p><p>However, $(f + g)(x) = f(x) + (-f(x)) = 0$ for all $x \\in \\mathbb{R}$, which is a constant function and therefore continuous at $0$.</p><p><b>(b) Product $fg$ continuous:</b> Using the same functions: $(fg)(x) = f(x) \\cdot (-f(x)) = - (f(x))^2 = -1$ for all $x \\in \\mathbb{R}$ (since $1^2 = 1$ and $(-1)^2 = 1$). This is identically the constant function $-1$, which is continuous at $0$.</p>",
    "trap": "Discontinuity is not preserved under algebraic operations; sum and product can easily cancel out discontinuities."
  },
  {
    "id": "q.ra2.m1.11", "course": "ra2", "module": "ra2.m1", "sec": "5.2", "marks": 5,
    "title": "Composition of Continuous Functions",
    "source": "Bartle & Sherbert 4e §5.2 Thm 5.2.6 & 5.2.7",
    "prompt": "State and prove the theorem on the composition of continuous functions: if $f: A \\to \\mathbb{R}$ is continuous at $c \\in A$ and $g: B \\to \\mathbb{R}$ with $f(A) \\subseteq B$ is continuous at $f(c)$, then $g \\circ f$ is continuous at $c$.",
    "tests": ["c.5.2.7"],
    "approach": "<p>Apply the Sequential Criterion: an input sequence $x_n \\to c$ produces $y_n = f(x_n) \\to f(c)$, which produces $g(y_n) \\to g(f(c))$.</p>",
    "solution": "<p><b>Statement:</b> Let $A, B \\subseteq \\mathbb{R}$, let $f: A \\to \\mathbb{R}$ with $f(A) \\subseteq B$, and let $g: B \\to \\mathbb{R}$. If $f$ is continuous at $c \\in A$ and $g$ is continuous at $d = f(c) \\in B$, then the composite function $g \\circ f$ is continuous at $c$.</p><p><b>Proof:</b> Let $(x_n)$ be any sequence in $A$ such that $\\lim x_n = c$.</p><p>Since $f$ is continuous at $c$, by the Sequential Criterion (Theorem 5.1.3), $\\lim f(x_n) = f(c) = d$.</p><p>Now let $y_n = f(x_n)$. Then $(y_n)$ is a sequence in $B$ converging to $d$. Since $g$ is continuous at $d$, the Sequential Criterion implies:</p><p>$$\\lim g(y_n) = g(d) = g(f(c))$$</p><p>That is, $\\lim (g \\circ f)(x_n) = (g \\circ f)(c)$.</p><p>Since $(x_n)$ was arbitrary in $A$ converging to $c$, $g \\circ f$ is continuous at $c$.</p>",
    "trap": "Do not confuse continuity of composition with limits of composition: $\\lim_{x\\to c} g(f(x)) = g(\\lim f(x))$ requires $g$ to be continuous at the limit point, not just having a limit."
  },
  {
    "id": "q.ra2.m1.12", "course": "ra2", "module": "ra2.m1", "sec": "5.2", "marks": 5,
    "title": "Sign Preservation Theorem",
    "source": "Bartle & Sherbert 4e §5.2 Thm 5.2.4 & Ex 7",
    "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be continuous at $c$ and suppose $f(c) > 0$. Prove that there exists a neighborhood $V_\\delta(c) = (c - \\delta, c + \\delta)$ such that for all $x \\in V_\\delta(c)$, $f(x) > 0$.",
    "tests": ["c.5.2.4"],
    "approach": "<p>Use the $\\varepsilon$-$\\delta$ definition of continuity with $\\varepsilon = f(c)/2 > 0$.</p>",
    "solution": "<p>Since $f(c) > 0$, we can choose $\\varepsilon := \\frac{1}{2} f(c) > 0$.</p><p>By continuity of $f$ at $c$, there exists $\\delta > 0$ such that for all $x \\in \\mathbb{R}$:</p><p>$$|x - c| < \\delta \\implies |f(x) - f(c)| < \\varepsilon$$</p><p>Expanding the absolute value inequality:</p><p>$$-\\varepsilon < f(x) - f(c) < \\varepsilon \\implies f(c) - \\varepsilon < f(x) < f(c) + \\varepsilon$$</p><p>Substituting $\\varepsilon = \\frac{1}{2} f(c)$ into the lower bound:</p><p>$$f(x) > f(c) - \\frac{1}{2} f(c) = \\frac{1}{2} f(c) > 0$$</p><p>Thus, for all $x \\in V_\\delta(c) = (c - \\delta, c + \\delta)$, we have $f(x) > \\frac{1}{2}f(c) > 0$.</p>",
    "trap": "If $f(c) \\ge 0$, you cannot conclude $f(x) \\ge 0$ on a neighborhood (e.g. $f(x) = x$ at $c = 0$ is negative for $x < 0$)."
  },
  {
    "id": "q.ra2.m1.13", "course": "ra2", "module": "ra2.m1", "sec": "5.2", "marks": 5,
    "title": "Continuity of Maximum and Minimum of Two Functions",
    "source": "Bartle & Sherbert 4e §5.2 Ex 13",
    "prompt": "Let $f, g: A \\to \\mathbb{R}$ be continuous on $A$. Define $h(x) := \\max\\{f(x), g(x)\\}$ and $k(x) := \\min\\{f(x), g(x)\\}$.<br>(a) Prove the algebraic identities: $\\max\\{u, v\\} = \\frac{u+v+|u-v|}{2}$ and $\\min\\{u, v\\} = \\frac{u+v-|u-v|}{2}$.<br>(b) Conclude that $h$ and $k$ are continuous on $A$.",
    "tests": ["c.5.2.8ab", "c.5.2.8c"],
    "approach": "<p>Verify the identity by testing cases $u \\ge v$ and $u < v$, then apply continuity of sum, difference, absolute value, and scalar multiple.</p>",
    "solution": "<p><b>(a) Algebraic Identities:</b></p><p>If $u \\ge v$, then $|u - v| = u - v$, so $\\frac{u + v + (u - v)}{2} = \\frac{2u}{2} = u = \\max\\{u, v\\}$, and $\\frac{u + v - (u - v)}{2} = \\frac{2v}{2} = v = \\min\\{u, v\\}$.</p><p>If $u < v$, then $|u - v| = -(u - v) = v - u$, so $\\frac{u + v + (v - u)}{2} = \\frac{2v}{2} = v = \\max\\{u, v\\}$, and $\\frac{u + v - (v - u)}{2} = \\frac{2u}{2} = u = \\min\\{u, v\\}$.</p><p>Thus the identities hold in all cases.</p><p><b>(b) Continuity:</b> Using the identity:</p><p>$$h(x) = \\max\\{f(x), g(x)\\} = \\frac{1}{2}(f(x) + g(x)) + \\frac{1}{2}|f(x) - g(x)|$$</p><p>Since $f$ and $g$ are continuous, $f + g$ and $f - g$ are continuous (Theorem 5.2.1). Since $t \\mapsto |t|$ is continuous, the composite $|f - g|$ is continuous (Theorem 5.2.6). Therefore $h$ is a linear combination of continuous functions, so $h$ is continuous. The exact same argument applies to $k(x)$.</p>",
    "trap": "Do not attempt piecewise $\\varepsilon$-$\\delta$ case analysis where $f(x) \\ge g(x)$; the algebraic identity gives an immediate, foolproof 1-line proof."
  },

  # --- 5.3: CONTINUOUS FUNCTIONS ON INTERVALS ---
  {
    "id": "q.ra2.m1.14", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Boundedness Theorem and Its Hypotheses",
    "source": "Bartle & Sherbert 4e §5.3 Thm 5.3.2",
    "prompt": "State the Boundedness Theorem for continuous functions on closed bounded intervals. Give counterexamples showing that the conclusion fails if: (a) the interval is bounded but not closed; (b) the interval is closed but not bounded.",
    "tests": ["c.5.3.1", "c.5.3.2"],
    "approach": "<p>State Theorem 5.3.2. For (a) use an interval like $(0, 1)$ with an asymptote; for (b) use $[0, \\infty)$ with an unbounded function.</p>",
    "solution": "<p><b>Boundedness Theorem:</b> Let $I = [a, b]$ be a closed bounded interval and let $f: I \\to \\mathbb{R}$ be continuous on $I$. Then $f$ is bounded on $I$ (i.e. there exists $M > 0$ such that $|f(x)| \\le M$ for all $x \\in I$).</p><p><b>(a) Not closed:</b> Let $I = (0, 1]$ (bounded, not closed) and $f(x) = 1/x$. $f$ is continuous on $(0, 1]$, but $\\lim_{x\\to 0^+} f(x) = \\infty$, so $f$ is not bounded.</p><p><b>(b) Not bounded:</b> Let $I = [0, \\infty)$ (closed, not bounded) and $f(x) = x$. $f$ is continuous on $[0, \\infty)$, but as $x \\to \\infty$, $f(x) \\to \\infty$, so $f$ is unbounded.</p>",
    "trap": "Both conditions (closed AND bounded) are necessary; compactness is what prevents the function values from escaping to infinity."
  },
  {
    "id": "q.ra2.m1.15", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Maximum–Minimum Theorem (Weierstrass Extreme Value Theorem)",
    "source": "Bartle & Sherbert 4e §5.3 Thm 5.3.4",
    "prompt": "State the Maximum–Minimum Theorem for continuous functions on $[a, b]$ and give the proof that $f$ attains its supremum.",
    "tests": ["c.5.3.3", "c.5.3.4"],
    "approach": "<p>Let $s = \\sup f(I)$. Construct a sequence $x_n$ such that $f(x_n) \\to s$, extract a convergent subsequence by Bolzano-Weierstrass, and evaluate by continuity.</p>",
    "solution": "<p><b>Maximum–Minimum Theorem:</b> Let $I = [a, b]$ and $f: I \\to \\mathbb{R}$ be continuous. Then $f$ attains its absolute maximum and absolute minimum on $I$; that is, there exist $x_*, x^* \\in I$ such that $f(x_*) \\le f(x) \\le f(x^*)$ for all $x \\in I$.</p><p><b>Proof for Supremum:</b> By the Boundedness Theorem, the image set $f(I)$ is bounded above. Let $s := \\sup f(I) = \\sup\\{f(x) : x \\in I\\}$.</p><p>For each $n \\in \\mathbb{N}$, $s - 1/n$ is not an upper bound, so there exists $x_n \\in I$ such that $s - 1/n < f(x_n) \\le s$.</p><p>By the Squeeze Theorem, $\\lim_{n\\to\\infty} f(x_n) = s$.</p><p>Since $I = [a, b]$ is bounded, $(x_n)$ is bounded. By the Bolzano–Weierstrass Theorem (Theorem 3.4.8), there is a subsequence $(x_{n_k})$ that converges to some point $x^* \\in \\mathbb{R}$.</p><p>Since $I$ is closed, $x^* \\in I$. Since $f$ is continuous at $x^*$, $f(x^*) = \\lim_{k\\to\\infty} f(x_{n_k}) = s$.</p><p>Hence $f(x^*) = \\sup f(I)$, showing $f$ attains its supremum at $x^* \\in I$.</p>",
    "trap": "A bounded set of values always has a supremum, but attaining the supremum inside the domain requires compactness of the domain."
  },
  {
    "id": "q.ra2.m1.16", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Bolzano's Intermediate Value Theorem and Bisection Method",
    "source": "Bartle & Sherbert 4e §5.3 Thm 5.3.5 & 5.3.6",
    "prompt": "State Bolzano's Intermediate Value Theorem. Outline the Bisection Algorithm used in its constructive proof and specify the error estimate after $n$ iterations.",
    "tests": ["c.5.3.5", "c.5.3.6"],
    "approach": "<p>State the theorem: $f(a) < 0 < f(b) \\implies \\exists c, f(c) = 0$. Describe nested intervals $[a_n, b_n]$ with midpoint testing and length $(b-a)/2^{n-1}$.</p>",
    "solution": "<p><b>Bolzano's Root Theorem:</b> Let $I = [a, b]$ and $f: I \\to \\mathbb{R}$ be continuous with $f(a) < 0 < f(b)$ (or $f(a) > 0 > f(b)$). Then there exists $c \\in (a, b)$ such that $f(c) = 0$.</p><p><b>Bisection Algorithm:</b> Set $I_1 = [a_1, b_1] = [a, b]$. Compute midpoint $m_1 = (a_1 + b_1)/2$. If $f(m_1) = 0$, $c = m_1$. If $f(a_1)f(m_1) < 0$, set $I_2 = [a_1, m_1]$; otherwise set $I_2 = [m_1, b_1]$.</p><p>Inductively, this constructs nested closed bounded intervals $I_1 \\supset I_2 \\supset \\dots \\supset I_n = [a_n, b_n]$ with length $b_n - a_n = \\frac{b - a}{2^{n-1}}$ and $f(a_n) < 0 < f(b_n)$.</p><p>By the Nested Intervals Property (Theorem 2.5.3), there is a unique point $c \\in \\bigcap_{n=1}^\\infty I_n$.</p><p>By continuity, $f(c) = \\lim f(a_n) \\le 0$ and $f(c) = \\lim f(b_n) \\ge 0$, forcing $f(c) = 0$.</p><p><b>Error Estimate:</b> The midpoint $m_n$ approximates the root $c$ with error bound $|m_n - c| \\le \\frac{b - a}{2^n}$.</p>",
    "trap": "Bisection converges linearly: each step halves the bracket and adds approximately 0.301 decimal digits of accuracy."
  },
  {
    "id": "q.ra2.m1.17", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Existence of Fixed Point for Cosine",
    "source": "Bartle & Sherbert 4e §5.3 Ex 5",
    "prompt": "Use the Intermediate Value Theorem to prove that the equation $x = \\cos x$ has at least one real solution in the interval $[0, \\pi/2]$.",
    "tests": ["c.5.3.5", "c.5.3.7"],
    "approach": "<p>Formulate the auxiliary function $f(x) = x - \\cos x$ and evaluate its signs at the endpoints $0$ and $\\pi/2$.</p>",
    "solution": "<p>Consider the function $f(x) := x - \\cos x$ on the interval $[0, \\pi/2]$.</p><p>Since $x$ and $\\cos x$ are continuous everywhere, $f$ is continuous on $[0, \\pi/2]$.</p><p>Evaluate $f$ at the endpoints:</p><p>$$f(0) = 0 - \\cos(0) = 0 - 1 = -1 < 0$$</p><p>$$f(\\pi/2) = \\frac{\\pi}{2} - \\cos(\\pi/2) = \\frac{\\pi}{2} - 0 = \\frac{\\pi}{2} > 0$$</p><p>Since $f$ is continuous on $[0, \\pi/2]$ and changes sign ($f(0) < 0 < f(\\pi/2)$), Bolzano's Intermediate Value Theorem guarantees the existence of some $c \\in (0, \\pi/2)$ such that $f(c) = 0$.</p><p>That is, $c - \\cos c = 0 \\implies c = \\cos c$. Thus $x = \\cos x$ has a solution in $(0, \\pi/2)$.</p>",
    "trap": "Always define the auxiliary function $f(x) = x - \\cos x$ to convert an equation $g(x) = h(x)$ into a root-finding problem $f(x) = 0$."
  },
  {
    "id": "q.ra2.m1.18", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Odd-Degree Polynomial Has a Real Root",
    "source": "Bartle & Sherbert 4e §5.3 Thm 5.3.7",
    "prompt": "Prove that every polynomial of odd degree with real coefficients has at least one real root.",
    "tests": ["c.5.3.7"],
    "approach": "<p>Divide by the highest power $x^n$ to show the leading term dominates for large $|x|$, then apply the IVT.</p>",
    "solution": "<p>Let $P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0$ with $a_n \\ne 0$ and $n$ odd. Without loss of generality, assume $a_n > 0$.</p><p>Factor out $x^n$:</p><p>$$P(x) = x^n \\left( a_n + \\frac{a_{n-1}}{x} + \\dots + \\frac{a_0}{x^n} \\right)$$</p><p>As $x \\to \\pm\\infty$, each term $a_k / x^{n-k} \\to 0$, so the bracket approaches $a_n > 0$.</p><p>Since $n$ is odd, $x^n \\to +\\infty$ as $x \\to +\\infty$, and $x^n \\to -\\infty$ as $x \\to -\\infty$.</p><p>Therefore $\\lim_{x\\to +\\infty} P(x) = +\\infty$ and $\\lim_{x\\to -\\infty} P(x) = -\\infty$.</p><p>Consequently, there exist numbers $a < 0 < b$ such that $P(a) < 0$ and $P(b) > 0$.</p><p>Since every polynomial is continuous on $[a, b]$, the Intermediate Value Theorem guarantees there exists $c \\in (a, b)$ such that $P(c) = 0$.</p>",
    "trap": "The result is false for even degrees (e.g. $x^2 + 1 = 0$ has no real roots); oddness of $n$ is essential for $x^n$ to have opposite signs at $\\pm\\infty$."
  },
  {
    "id": "q.ra2.m1.19", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Preservation of Intervals (Image of an Interval)",
    "source": "Bartle & Sherbert 4e §5.3 Thm 5.3.9 & 5.3.10",
    "prompt": "State and prove the Preservation of Intervals Theorem: If $I \\subseteq \\mathbb{R}$ is an interval and $f: I \\to \\mathbb{R}$ is continuous on $I$, then the image set $f(I)$ is an interval.",
    "tests": ["c.5.3.5"],
    "approach": "<p>Use the interval characterization property (Theorem 2.5.1): a set $S \\subseteq \\mathbb{R}$ is an interval iff whenever $y_1 < y_2 \\in S$, $[y_1, y_2] \\subseteq S$.</p>",
    "solution": "<p><b>Theorem:</b> If $I$ is an interval and $f: I \\to \\mathbb{R}$ is continuous, then $f(I)$ is an interval.</p><p><b>Proof:</b> By Theorem 2.5.1, a subset $S \\subseteq \\mathbb{R}$ is an interval if and only if for all $y_1, y_2 \\in S$ with $y_1 < y_2$, any $k$ satisfying $y_1 < k < y_2$ belongs to $S$.</p><p>Let $y_1, y_2 \\in f(I)$ with $y_1 < y_2$, and let $k$ be any real number such that $y_1 < k < y_2$.</p><p>Since $y_1, y_2 \\in f(I)$, there exist points $x_1, x_2 \\in I$ such that $f(x_1) = y_1$ and $f(x_2) = y_2$.</p><p>Since $I$ is an interval, the closed interval between $x_1$ and $x_2$ (denoted $J = [\\min(x_1, x_2), \\max(x_1, x_2)]$) is contained in $I$.</p><p>Since $f$ is continuous on $J$ and $k$ lies strictly between $f(x_1)$ and $f(x_2)$, Bolzano's Intermediate Value Theorem guarantees there exists $c \\in J \\subseteq I$ such that $f(c) = k$.</p><p>Thus $k = f(c) \\in f(I)$. Hence $[y_1, y_2] \\subseteq f(I)$, proving that $f(I)$ is an interval.</p>",
    "trap": "The image of an open interval under a continuous function need not be open (e.g. $f(x) = x^2$ on $(-1, 1)$ has image $[0, 1)$); but it is always an interval."
  },
  {
    "id": "q.ra2.m1.20", "course": "ra2", "module": "ra2.m1", "sec": "5.3", "marks": 5,
    "title": "Continuous Image of a Compact Interval is Compact",
    "source": "Bartle & Sherbert 4e §5.3 Thm 5.3.10",
    "prompt": "Prove that if $I = [a, b]$ is a closed bounded interval and $f: I \\to \\mathbb{R}$ is continuous, then the image $f(I)$ is a closed bounded interval $[m, M]$, where $m = \\inf f(I)$ and $M = \\sup f(I)$.",
    "tests": ["c.5.3.4", "c.5.3.5"],
    "approach": "<p>Combine the Maximum-Minimum Theorem (which shows $m$ and $M$ exist and are attained) with the Preservation of Intervals Theorem (which shows all intermediate values are attained).</p>",
    "solution": "<p>By the Maximum–Minimum Theorem (Theorem 5.3.4), $f$ attains both an absolute minimum $m = \\inf f(I)$ and an absolute maximum $M = \\sup f(I)$ on $I$. That is, there exist $x_*, x^* \\in I$ such that $f(x_*) = m$ and $f(x^*) = M$.</p><p>Clearly, every value $f(x)$ for $x \\in I$ satisfies $m \\le f(x) \\le M$, so $f(I) \\subseteq [m, M]$.</p><p>Conversely, let $y \\in [m, M]$. If $y = m$ or $y = M$, $y \\in f(I)$. If $m < y < M$, then $y$ lies strictly between $f(x_*)$ and $f(x^*)$.</p><p>By the Intermediate Value Theorem, there exists $c$ between $x_*$ and $x^*$ such that $f(c) = y$. Since $I$ is an interval, $c \\in I$, so $y \\in f(I)$.</p><p>Hence $[m, M] \\subseteq f(I)$, which establishes $f(I) = [m, M]$.</p>",
    "trap": "This is the 1D version of the topological theorem that the continuous image of a compact set is compact."
  },

  # --- 5.4: UNIFORM CONTINUITY ---
  {
    "id": "q.ra2.m1.21", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 2,
    "title": "Definition of Uniform Continuity",
    "source": "Bartle & Sherbert 4e §5.4 Def 5.4.1",
    "prompt": "State the definition of uniform continuity of a function $f: A \\to \\mathbb{R}$ on a set $A \\subseteq \\mathbb{R}$. Explain how it differs fundamentally from ordinary continuity on $A$.",
    "tests": ["c.5.4.1"],
    "approach": "<p>State Definition 5.4.1. Contrast the order of quantifiers: for uniform continuity, $\\delta$ depends ONLY on $\\varepsilon$, not on the point $x$.</p>",
    "solution": "<p><b>Definition:</b> Let $A \\subseteq \\mathbb{R}$ and $f: A \\to \\mathbb{R}$. We say $f$ is <b>uniformly continuous on $A$</b> if for every $\\varepsilon > 0$ there exists $\\delta > 0$ such that whenever $x, u \\in A$ and $|x - u| < \\delta$, it follows that:</p><p>$$|f(x) - f(u)| < \\varepsilon$$</p><p><b>Fundamental Difference:</b> In ordinary continuity, the point $c$ is fixed FIRST, so $\\delta = \\delta(\\varepsilon, c)$ depends on both $\\varepsilon$ and $c$. In uniform continuity, $\\delta = \\delta(\\varepsilon)$ is chosen BEFORE the points, providing a single universal window size that works simultaneously across the entire domain $A$.</p>",
    "trap": "Reversing quantifiers is the most common student error: $\\forall\\varepsilon>0, \\exists\\delta>0, \\forall x, u$ vs $\\forall c, \\forall\\varepsilon, \\exists\\delta$."
  },
  {
    "id": "q.ra2.m1.22", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 5,
    "title": "Proving Uniform Continuity Directly",
    "source": "Bartle & Sherbert 4e §5.4 Ex 1",
    "prompt": "Prove directly from the $\\varepsilon$–$\\delta$ definition that $f(x) := \\frac{1}{x}$ is uniformly continuous on $[a, \\infty)$ for any fixed $a > 0$.",
    "tests": ["c.5.4.1"],
    "approach": "<p>Estimate $|1/x - 1/u| = \\frac{|x - u|}{xu} \\le \\frac{|x - u|}{a^2}$, then choose $\\delta = a^2\\varepsilon$ independent of $x$ and $u$.</p>",
    "solution": "<p>Let $a > 0$ be fixed, and let $\\varepsilon > 0$. For any $x, u \\in [a, \\infty)$:</p><p>$$\\left| \\frac{1}{x} - \\frac{1}{u} \\right| = \\frac{|u - x|}{xu} = \\frac{|x - u|}{xu}$$</p><p>Since $x \\ge a$ and $u \\ge a$, the product satisfies $xu \\ge a^2 > 0$. Therefore:</p><p>$$\\left| \\frac{1}{x} - \\frac{1}{u} \\right| \\le \\frac{|x - u|}{a^2}$$</p><p>Choose $\\delta := a^2 \\varepsilon > 0$. Then $\\delta$ depends only on $\\varepsilon$ and the domain constant $a$, but NOT on $x$ or $u$.</p><p>Whenever $x, u \\in [a, \\infty)$ satisfy $|x - u| < \\delta$, we have:</p><p>$$\\left| \\frac{1}{x} - \\frac{1}{u} \\right| \\le \\frac{|x - u|}{a^2} < \\frac{\\delta}{a^2} = \\frac{a^2 \\varepsilon}{a^2} = \\varepsilon$$</p><p>Hence $f(x) = 1/x$ is uniformly continuous on $[a, \\infty)$.</p>",
    "trap": "On $(0, \\infty)$, no positive lower bound $a$ exists, and uniform continuity fails."
  },
  {
    "id": "q.ra2.m1.23", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 5,
    "title": "Non-Uniform Continuity Criterion",
    "source": "Bartle & Sherbert 4e §5.4 Thm 5.4.2",
    "prompt": "State the Non-Uniform Continuity Criterion. Use it to prove that $f(x) := x^2$ is NOT uniformly continuous on $\\mathbb{R}$.",
    "tests": ["c.5.4.2"],
    "approach": "<p>Negate the definition of uniform continuity to get witness sequences $(x_n), (u_n)$ with $|x_n - u_n| \\to 0$ but $|f(x_n) - f(u_n)| \\ge \\varepsilon_0$.</p>",
    "solution": "<p><b>Criterion:</b> $f: A \\to \\mathbb{R}$ is not uniformly continuous on $A$ if and only if there exists $\\varepsilon_0 > 0$ and two sequences $(x_n)$ and $(u_n)$ in $A$ such that $\\lim_{n\\to\\infty} |x_n - u_n| = 0$, but $|f(x_n) - f(u_n)| \\ge \\varepsilon_0$ for all $n \\in \\mathbb{N}$.</p><p><b>Proof for $f(x) = x^2$ on $\\mathbb{R}$:</b> Let $\\varepsilon_0 = 1$.</p><p>Define $x_n := n + \\frac{1}{n}$ and $u_n := n$ for $n \\in \\mathbb{N}$.</p><p>The distance between the sequence points is:</p><p>$$|x_n - u_n| = \\left| n + \\frac{1}{n} - n \\right| = \\frac{1}{n} \\to 0 \\quad \\text{as } n \\to \\infty$$</p><p>Now evaluate the difference in function values:</p><p>$$|f(x_n) - f(u_n)| = |(n + 1/n)^2 - n^2| = |n^2 + 2 + 1/n^2 - n^2| = 2 + \\frac{1}{n^2} > 2 > 1 = \\varepsilon_0$$</p><p>Since $|x_n - u_n| \\to 0$ while $|f(x_n) - f(u_n)| > 1$ for all $n$, $f(x) = x^2$ is not uniformly continuous on $\\mathbb{R}$.</p>",
    "trap": "Even though $x^2$ is continuous everywhere on $\\mathbb{R}$, its slope $2x$ grows without bound, destroying uniform continuity."
  },
  {
    "id": "q.ra2.m1.24", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 5,
    "title": "Lipschitz Condition Implies Uniform Continuity",
    "source": "Bartle & Sherbert 4e §5.4 Thm 5.4.5",
    "prompt": "Define what it means for a function $f: A \\to \\mathbb{R}$ to be Lipschitz. Prove that every Lipschitz function is uniformly continuous.",
    "tests": ["c.5.4.4", "c.5.4.5"],
    "approach": "<p>Given $|f(x) - f(u)| \\le K|x - u|$, choose $\\delta = \\varepsilon / K$.</p>",
    "solution": "<p><b>Definition:</b> A function $f: A \\to \\mathbb{R}$ is said to be <b>Lipschitz</b> (or satisfy a Lipschitz condition) if there exists a constant $K > 0$ such that for all $x, u \\in A$:</p><p>$$|f(x) - f(u)| \\le K |x - u|$$</p><p>The constant $K$ is called a Lipschitz constant for $f$.</p><p><b>Proof:</b> Let $\\varepsilon > 0$. Choose $\\delta := \\frac{\\varepsilon}{K} > 0$.</p><p>Whenever $x, u \\in A$ satisfy $|x - u| < \\delta$, the Lipschitz condition yields:</p><p>$$|f(x) - f(u)| \\le K |x - u| < K \\delta = K \\left( \\frac{\\varepsilon}{K} \\right) = \\varepsilon$$</p><p>Since $\\delta$ depends only on $\\varepsilon$ (and the constant $K$), $f$ is uniformly continuous on $A$.</p>",
    "trap": "The converse is FALSE: $f(x) = \\sqrt{x}$ on $[0, 1]$ is uniformly continuous but NOT Lipschitz."
  },
  {
    "id": "q.ra2.m1.25", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 5,
    "title": "Uniformly Continuous but Not Lipschitz Function",
    "source": "Bartle & Sherbert 4e §5.4 Ex 6",
    "prompt": "Show that $f(x) := \\sqrt{x}$ is uniformly continuous on $[0, 1]$, but does NOT satisfy a Lipschitz condition on $[0, 1]$.",
    "tests": ["c.5.4.5", "c.5.4.6"],
    "approach": "<p>Uniform continuity follows from Heine-Cantor (continuous on compact $[0, 1]$). Non-Lipschitz follows by evaluating difference quotient at $u = 0$.</p>",
    "solution": "<p><b>1. Uniform Continuity:</b> $f(x) = \\sqrt{x}$ is continuous on the closed bounded interval $[0, 1]$. By the Uniform Continuity Theorem (Heine-Cantor), any continuous function on a compact interval is uniformly continuous. Hence $f$ is uniformly continuous on $[0, 1]$.</p><p><b>2. Not Lipschitz:</b> Suppose $f$ were Lipschitz on $[0, 1]$. Then there would exist a constant $K > 0$ such that for all $x, u \\in [0, 1]$:</p><p>$$|\\sqrt{x} - \\sqrt{u}| \\le K |x - u|$$</p><p>Set $u = 0$ with $x \\in (0, 1]$:</p><p>$$\\sqrt{x} \\le K x \\implies \\frac{\\sqrt{x}}{x} = \\frac{1}{\\sqrt{x}} \\le K$$</p><p>However, as $x \\to 0^+$, $\\frac{1}{\\sqrt{x}} \\to \\infty$. No fixed constant $K$ can bound $1/\\sqrt{x}$ for all $x \\in (0, 1]$.</p><p>This contradiction shows that $f$ does not satisfy a Lipschitz condition on $[0, 1]$.</p>",
    "trap": "The infinite slope (vertical tangent) at $x = 0$ prevents $f$ from being Lipschitz, but does not prevent uniform continuity."
  },
  {
    "id": "q.ra2.m1.26", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 5,
    "title": "Uniform Continuity Theorem (Heine–Cantor Theorem)",
    "source": "Bartle & Sherbert 4e §5.4 Thm 5.4.3",
    "prompt": "State and prove the Uniform Continuity Theorem (Heine–Cantor): Let $I = [a, b]$ be a closed bounded interval and let $f: I \\to \\mathbb{R}$ be continuous on $I$. Then $f$ is uniformly continuous on $I$.",
    "tests": ["c.5.4.2", "c.5.4.3"],
    "approach": "<p>Proof by contradiction using the Non-Uniform Continuity Criterion and Bolzano-Weierstrass.</p>",
    "solution": "<p><b>Statement:</b> Let $I = [a, b]$ and let $f: I \\to \\mathbb{R}$ be continuous. Then $f$ is uniformly continuous on $I$.</p><p><b>Proof:</b> Assume for contradiction that $f$ is NOT uniformly continuous on $I$.</p><p>By the Non-Uniform Continuity Criterion (Theorem 5.4.2), there exists $\\varepsilon_0 > 0$ and two sequences $(x_n), (u_n)$ in $I$ such that:</p><p>$$|x_n - u_n| < 1/n \\quad \\text{and} \\quad |f(x_n) - f(u_n)| \\ge \\varepsilon_0 \\quad \\text{for all } n \\in \\mathbb{N}$$</p><p>Since $I = [a, b]$ is bounded, $(x_n)$ is bounded. By Bolzano–Weierstrass (Theorem 3.4.8), there is a subsequence $(x_{n_k})$ converging to some $z \\in \\mathbb{R}$.</p><p>Since $I$ is closed, $z \\in I$. Since $|x_{n_k} - u_{n_k}| < 1/n_k \\to 0$, the corresponding subsequence $(u_{n_k})$ also converges to $z$.</p><p>Since $f$ is continuous at $z$, the Sequential Criterion implies:</p><p>$$\\lim_{k\\to\\infty} f(x_{n_k}) = f(z) \\quad \\text{and} \\quad \\lim_{k\\to\\infty} f(u_{n_k}) = f(z)$$</p><p>Therefore $\\lim_{k\\to\\infty} [f(x_{n_k}) - f(u_{n_k})] = f(z) - f(z) = 0$.</p><p>But by hypothesis $|f(x_{n_k}) - f(u_{n_k})| \\ge \\varepsilon_0 > 0$ for all $k$, which implies the limit must be $\\ge \\varepsilon_0 > 0$.</p><p>This contradiction proves that $f$ must be uniformly continuous on $I$.</p>",
    "trap": "This theorem fails if the interval is not closed (e.g. $(0, 1)$ for $1/x$) or not bounded (e.g. $\\mathbb{R}$ for $x^2$)."
  },
  {
    "id": "q.ra2.m1.27", "course": "ra2", "module": "ra2.m1", "sec": "5.4", "marks": 5,
    "title": "Continuous Extension Theorem",
    "source": "Bartle & Sherbert 4e §5.4 Thm 5.4.8",
    "prompt": "State the Continuous Extension Theorem. Use it to determine whether $f(x) := \\frac{\\sin x}{x}$ is uniformly continuous on $(0, 1)$.",
    "tests": ["c.5.4.7", "c.5.4.8"],
    "approach": "<p>A function on $(a, b)$ is uniformly continuous iff it can be continuously extended to $[a, b]$, which holds iff both finite one-sided limits exist.</p>",
    "solution": "<p><b>Continuous Extension Theorem:</b> A function $f$ is uniformly continuous on $(a, b)$ if and only if it can be extended to a continuous function $\\widetilde{f}$ on the closed interval $[a, b]$. This is equivalent to saying that both one-sided limits $\\lim_{x\\to a^+} f(x)$ and $\\lim_{x\\to b^-} f(x)$ exist in $\\mathbb{R}$.</p><p><b>Application to $f(x) = \\frac{\\sin x}{x}$ on $(0, 1)$:</b></p><p>Check the limit at the left endpoint $x = 0$:</p><p>$$\\lim_{x\\to 0^+} \\frac{\\sin x}{x} = 1 \\in \\mathbb{R}$$</p><p>Check the limit at the right endpoint $x = 1$:</p><p>$$\\lim_{x\\to 1^-} \\frac{\\sin x}{x} = \\sin 1 \\in \\mathbb{R}$$</p><p>Both one-sided limits exist and are finite real numbers. Therefore, defining:</p><p>$$\\widetilde{f}(x) = \\begin{cases} 1 & x = 0 \\\\ \\frac{\\sin x}{x} & 0 < x < 1 \\\\ \\sin 1 & x = 1 \\end{cases}$$</p><p>gives a continuous extension of $f$ to the compact interval $[0, 1]$.</p><p>By the Continuous Extension Theorem, $f(x) = \\frac{\\sin x}{x}$ is uniformly continuous on $(0, 1)$.</p>",
    "trap": "For $g(x) = \\sin(1/x)$ on $(0, 1)$, $\\lim_{x\\to 0^+} \\sin(1/x)$ does not exist, so it CANNOT be continuously extended and is NOT uniformly continuous."
  },

  # --- 5.5: CONTINUOUS FUNCTIONS ON INTERVALS / PRESERVATION OF INTERVALS ---
  {
    "id": "q.ra2.m1.28", "course": "ra2", "module": "ra2.m1", "sec": "5.5", "marks": 5,
    "title": "Strictly Monotone Functions and Interval Images",
    "source": "Bartle & Sherbert 4e §5.5 Ex 2 & Thm 5.5.3",
    "prompt": "Let $I \\subseteq \\mathbb{R}$ be an interval and let $f: I \\to \\mathbb{R}$ be strictly monotone. Prove that $f$ is continuous on $I$ if and only if the image $J := f(I)$ is an interval.",
    "tests": ["c.5.5.1", "c.5.5.2"],
    "approach": "<p>Forward: Preservation of Intervals. Backward: If $f$ had a jump discontinuity, $f(I)$ would omit an entire open interval, contradicting that $f(I)$ is an interval.</p>",
    "solution": "<p><b>(=>)</b> If $f$ is continuous on the interval $I$, then by the Preservation of Intervals Theorem (Theorem 5.3.9), $f(I)$ is an interval.</p><p><b>(<=)</b> Conversely, assume $f$ is strictly increasing on $I$ and $J = f(I)$ is an interval. We must show $f$ is continuous at every $c \\in I$.</p><p>Suppose for contradiction that $f$ is discontinuous at some $c \\in I$. Since $f$ is monotone, its only possible discontinuities are jump discontinuities.</p><p>Then the left limit $f(c^-) = \\sup\\{f(x) : x < c\\}$ and right limit $f(c^+) = \\inf\\{f(x) : x > c\\}$ exist with $f(c^-) < f(c^+)$.</p><p>Thus the open interval $(f(c^-), f(c^+))$ (except possibly the single point $f(c)$) contains no values of $f(I)$.</p><p>However, there are points in $f(I)$ strictly below $f(c^-)$ (for $x < c$) and strictly above $f(c^+)$ (for $x > c$). If an interval contains two points, it must contain all points between them.</p><p>Hence $f(I)$ cannot be an interval, which contradicts the hypothesis.</p><p>Therefore $f$ must be continuous at every point of $I$.</p>",
    "trap": "Monotonicity is crucial here: without monotonicity, a function can have an interval image while being wildly discontinuous (e.g. Conway base 13 function)."
  },
  {
    "id": "q.ra2.m1.29", "course": "ra2", "module": "ra2.m1", "sec": "5.5", "marks": 5,
    "title": "Brouwer Fixed Point Theorem in One Dimension",
    "source": "Bartle & Sherbert 4e §5.5 Ex 4",
    "prompt": "Let $I = [0, 1]$ and suppose $f: I \\to I$ is continuous. Prove that $f$ has a fixed point; that is, there exists $c \\in [0, 1]$ such that $f(c) = c$.",
    "tests": ["c.5.5.1", "c.5.5.3"],
    "approach": "<p>Define $g(x) = f(x) - x$ and check signs at $0$ and $1$.</p>",
    "solution": "<p>Define the auxiliary function $g(x) := f(x) - x$ for $x \\in [0, 1]$.</p><p>Since $f$ and $x$ are continuous on $[0, 1]$, $g$ is continuous on $[0, 1]$.</p><p>Evaluate $g$ at the endpoints:</p><p>At $x = 0$: since $f(I) \\subseteq [0, 1]$, $f(0) \\ge 0$, so $g(0) = f(0) - 0 = f(0) \\ge 0$.</p><p>At $x = 1$: since $f(I) \\subseteq [0, 1]$, $f(1) \\le 1$, so $g(1) = f(1) - 1 \\le 0$.</p><p>If $g(0) = 0$, then $c = 0$ is a fixed point. If $g(1) = 0$, then $c = 1$ is a fixed point.</p><p>If $g(0) > 0$ and $g(1) < 0$, then $g$ is continuous on $[0, 1]$ and changes sign. By Bolzano's Intermediate Value Theorem, there exists $c \\in (0, 1)$ such that $g(c) = 0$.</p><p>Then $f(c) - c = 0 \\implies f(c) = c$.</p><p>In all cases, there exists $c \\in [0, 1]$ such that $f(c) = c$.</p>",
    "trap": "The domain and codomain must both be $[0, 1]$; for $f: (0, 1) \\to (0, 1)$ defined by $f(x) = x/2$, there is no fixed point in $(0, 1)$ since the only solution is $x=0 \\notin (0, 1)$."
  },
  {
    "id": "q.ra2.m1.30", "course": "ra2", "module": "ra2.m1", "sec": "5.5", "marks": 5,
    "title": "Topological Characterization of Intermediate Value Property",
    "source": "Bartle & Sherbert 4e §5.5 Ex 6 & 8",
    "prompt": "Show that there does NOT exist a continuous bijection $f: [0, 1) \\to (0, 1)$.",
    "tests": ["c.5.5.4", "c.5.5.5"],
    "approach": "<p>Consider the removal of the point $0$ from the domain and analyze connectedness of the remaining sets.</p>",
    "solution": "<p>Suppose for contradiction that there exists a continuous bijection $f: [0, 1) \\to (0, 1)$.</p><p>A continuous injective function on an interval must be strictly monotone. Therefore $f$ is either strictly increasing or strictly decreasing.</p><p><b>Case 1: $f$ is strictly increasing.</b> Then for all $x \\in (0, 1)$, $f(0) < f(x)$. This means $f(0)$ is a strict lower bound for $f((0, 1))$.</p><p>Since $f$ is surjective onto $(0, 1)$, $f(0)$ must be the absolute minimum of $(0, 1)$, which means $f(0) = 0$. But $0 \\notin (0, 1)$, a contradiction!</p><p><b>Case 2: $f$ is strictly decreasing.</b> Then for all $x \\in (0, 1)$, $f(0) > f(x)$. Then $f(0)$ is the absolute maximum of $(0, 1)$, so $f(0) = 1$. But $1 \\notin (0, 1)$, another contradiction!</p><p>Alternatively, removing $0$ leaves $[0, 1) \\setminus \\{0\\} = (0, 1)$, which is connected. But removing $f(0) \\in (0, 1)$ from $(0, 1)$ disconnects $(0, 1)$ into two disjoint non-empty open sets $(0, f(0)) \\cup (f(0), 1)$. A continuous bijection cannot map a connected set onto a disconnected set.</p><p>Hence no such continuous bijection exists.</p>",
    "trap": "Continuous bijections preserve topological properties like connectedness and compactness; cutting a point reveals the topological mismatch."
  },
  {
    "id": "q.ra2.m1.31", "course": "ra2", "module": "ra2.m1", "sec": "5.5", "marks": 5,
    "title": "Continuous Injective Map on an Interval is Strictly Monotone",
    "source": "Bartle & Sherbert 4e §5.5 Thm 5.5.4",
    "prompt": "Prove that if $I \\subseteq \\mathbb{R}$ is an interval and $f: I \\to \\mathbb{R}$ is continuous and injective (one-to-one), then $f$ must be strictly monotone.",
    "tests": ["c.5.5.2", "c.5.5.4"],
    "approach": "<p>Proof by contradiction: if $f$ were not strictly monotone, there would exist three points $x_1 < x_2 < x_3$ where monotonicity fails; apply IVT to produce two points with the same image value.</p>",
    "solution": "<p>Let $x_1 < x_2 < x_3$ be three points in $I$. Since $f$ is injective, $f(x_1)$, $f(x_2)$, and $f(x_3)$ are all distinct.</p><p>Assume for contradiction that $f$ is neither strictly increasing nor strictly decreasing. Then $f(x_2)$ cannot lie between $f(x_1)$ and $f(x_3)$.</p><p>Therefore, either $f(x_2) > \\max\\{f(x_1), f(x_3)\\}$ or $f(x_2) < \\min\\{f(x_1), f(x_3)\\}$.</p><p>Assume $f(x_2) > \\max\\{f(x_1), f(x_3)\\}$ (the other case is identical).</p><p>Choose a number $k$ such that $\\max\\{f(x_1), f(x_3)\\} < k < f(x_2)$.</p><p>Since $f$ is continuous on $[x_1, x_2]$ and $f(x_1) < k < f(x_2)$, by the Intermediate Value Theorem there exists $c_1 \\in (x_1, x_2)$ such that $f(c_1) = k$.</p><p>Similarly, since $f$ is continuous on $[x_2, x_3]$ and $f(x_3) < k < f(x_2)$, by the IVT there exists $c_2 \\in (x_2, x_3)$ such that $f(c_2) = k$.</p><p>Since $c_1 < x_2 < c_2$, we have $c_1 \\ne c_2$, but $f(c_1) = k = f(c_2)$.</p><p>This contradicts injectivity of $f$! Hence $f$ must be strictly monotone on $I$.</p>",
    "trap": "This theorem holds ONLY on intervals; on disconnected sets like $[0, 1] \\cup [2, 3]$, continuous injections need not be monotone."
  },

  # --- 5.6: MONOTONE AND INVERSE FUNCTIONS ---
  {
    "id": "q.ra2.m1.32", "course": "ra2", "module": "ra2.m1", "sec": "5.6", "marks": 5,
    "title": "Existence of One-Sided Limits for Monotone Functions",
    "source": "Bartle & Sherbert 4e §5.6 Thm 5.6.1",
    "prompt": "Let $I \\subseteq \\mathbb{R}$ be an interval and let $f: I \\to \\mathbb{R}$ be increasing on $I$. Prove that at every interior point $c \\in I$, the one-sided limits $\\lim_{x\\to c^-} f(x)$ and $\\lim_{x\\to c^+} f(x)$ exist and satisfy $\\lim_{x\\to c^-} f(x) \\le f(c) \\le \\lim_{x\\to c^+} f(x)$.",
    "tests": ["c.5.6.1", "c.5.6.2"],
    "approach": "<p>Show that the set $\{f(x) : x < c\}$ is non-empty and bounded above by $f(c)$, then show its supremum is the left-hand limit.</p>",
    "solution": "<p>Let $c$ be an interior point of $I$. Consider the set $S_- := \\{f(x) : x \\in I, x < c\\}$.</p><p>Since $c$ is an interior point, there exist points $x \\in I$ with $x < c$, so $S_-$ is non-empty.</p><p>Since $f$ is increasing, for every $x < c$ we have $f(x) \\le f(c)$. Thus $S_-$ is bounded above by $f(c)$.</p><p>By the Supremum Property of $\\mathbb{R}$, $L := \\sup S_-$ exists and satisfies $L \\le f(c)$.</p><p>We claim $\\lim_{x\\to c^-} f(x) = L$. Let $\\varepsilon > 0$. Since $L = \\sup S_-$, $L - \\varepsilon$ is not an upper bound, so there exists $x_0 < c$ such that $L - \\varepsilon < f(x_0) \\le L$.</p><p>Let $\\delta = c - x_0 > 0$. If $c - \\delta < x < c$, then $x_0 < x < c$, so $L - \\varepsilon < f(x_0) \\le f(x) \\le L < L + \\varepsilon$.</p><p>Hence $|f(x) - L| < \\varepsilon$, which proves $\\lim_{x\\to c^-} f(x) = L = \\sup\\{f(x) : x < c\\} \\le f(c)$.</p><p>An entirely symmetric argument shows $\\lim_{x\\to c^+} f(x) = \\inf\\{f(x) : x > c\\} \\ge f(c)$.</p>",
    "trap": "Monotone functions CANNOT have oscillatory discontinuities (like $\\sin(1/x)$); their only discontinuities are jump discontinuities."
  },
  {
    "id": "q.ra2.m1.33", "course": "ra2", "module": "ra2.m1", "sec": "5.6", "marks": 5,
    "title": "Countability of Discontinuities of a Monotone Function",
    "source": "Bartle & Sherbert 4e §5.6 Thm 5.6.4",
    "prompt": "Prove that a monotone function $f: [a, b] \\to \\mathbb{R}$ can have at most a countable number of points of discontinuity.",
    "tests": ["c.5.6.3"],
    "approach": "<p>Associate to each jump discontinuity $c$ a non-empty open interval $(f(c^-), f(c^+))$, choose a rational number inside it, and show the map is injective into $\\mathbb{Q}$.</p>",
    "solution": "<p>Let $f$ be increasing on $[a, b]$. A point $c \\in (a, b)$ is a point of discontinuity of $f$ if and only if its jump $J_f(c) := f(c^+) - f(c^-) > 0$.</p><p>For each discontinuity $c$, define the open interval $I_c := (f(c^-), f(c^+))$.</p><p>Since $J_f(c) > 0$, each $I_c$ is a non-empty open interval.</p><p>If $c_1 < c_2$ are two distinct points of discontinuity, then for any $x$ with $c_1 < x < c_2$ we have $f(c_1^+) \\le f(x) \\le f(c_2^-)$.</p><p>Therefore the open intervals $I_{c_1}$ and $I_{c_2}$ are completely disjoint: $I_{c_1} \\cap I_{c_2} = \\emptyset$.</p><p>By the Density of Rationals (Theorem 2.4.8), each interval $I_c$ contains at least one rational number $q_c \\in \\mathbb{Q}$.</p><p>Since the intervals are pairwise disjoint, the assignment $c \\mapsto q_c$ is an injective (one-to-one) function from the set of discontinuities $D$ into the countable set $\\mathbb{Q}$.</p><p>Since $\\mathbb{Q}$ is countable, the set of discontinuities $D$ must be at most countable.</p>",
    "trap": "The sum of the jumps is bounded by $f(b) - f(a)$; this implies at most finitely many jumps can exceed any threshold $1/n$."
  },
  {
    "id": "q.ra2.m1.34", "course": "ra2", "module": "ra2.m1", "sec": "5.6", "marks": 5,
    "title": "Continuous Inverse Theorem",
    "source": "Bartle & Sherbert 4e §5.6 Thm 5.6.5",
    "prompt": "State and prove the Continuous Inverse Theorem: Let $I \\subseteq \\mathbb{R}$ be an interval and let $f: I \\to \\mathbb{R}$ be strictly increasing and continuous on $I$. Then the inverse function $g = f^{-1}$ exists, is strictly increasing, and is continuous on $J = f(I)$.",
    "tests": ["c.5.6.4", "c.5.6.5"],
    "approach": "<p>Strict monotonicity implies injectivity, so $g$ exists. Show $g$ is strictly increasing. Since $g(J) = I$ is an interval, apply the theorem that a strictly monotone function with interval image is continuous.</p>",
    "solution": "<p><b>1. Existence and Monotonicity of $g$:</b> Since $f$ is strictly increasing, $f$ is injective. Thus the inverse function $g := f^{-1}: J \\to I$ exists where $J = f(I)$.</p><p>Let $y_1, y_2 \\in J$ with $y_1 < y_2$, and let $x_1 = g(y_1)$, $x_2 = g(y_2)$. If $x_1 \\ge x_2$, then because $f$ is increasing, $f(x_1) \\ge f(x_2) \\implies y_1 \\ge y_2$, contradiction! Hence $x_1 < x_2$, which proves $g$ is strictly increasing on $J$.</p><p><b>2. Continuity of $g$:</b> By the Preservation of Intervals Theorem (Theorem 5.3.9), since $I$ is an interval and $f$ is continuous, $J = f(I)$ is an interval.</p><p>Now consider the function $g: J \\to \\mathbb{R}$. We know $g$ is strictly increasing on the interval $J$, and its image $g(J) = I$ is an interval.</p><p>By Theorem 5.6.3 (strictly monotone function whose image is an interval is continuous), $g$ must be continuous on $J$.</p><p>Therefore the inverse function $g = f^{-1}$ is continuous and strictly increasing on $J$.</p>",
    "trap": "Proving continuity of $g$ directly from $\\varepsilon$-$\\delta$ is cumbersome; using the characterization via interval image makes the proof elegant and immediate."
  },
  {
    "id": "q.ra2.m1.35", "course": "ra2", "module": "ra2.m1", "sec": "5.6", "marks": 5,
    "title": "The nth Root Function and Inverse Continuity",
    "source": "Bartle & Sherbert 4e §5.6 Ex 8 & Thm 5.6.6",
    "prompt": "Let $n \\in \\mathbb{N}$ and let $f(x) := x^n$ on $I = [0, \\infty)$. Prove that $f$ has a continuous, strictly increasing inverse function $g(y) = y^{1/n}$ on $[0, \\infty)$.",
    "tests": ["c.5.6.5", "c.5.6.6"],
    "approach": "<p>Verify that $x^n$ is strictly increasing, continuous, and has range $[0, \\infty)$, then apply the Continuous Inverse Theorem.</p>",
    "solution": "<p><b>1. Strict Monotonicity:</b> For $0 \\le x_1 < x_2$, factoring gives $x_2^n - x_1^n = (x_2 - x_1)(x_2^{n-1} + x_2^{n-2}x_1 + \\dots + x_1^{n-1}) > 0$. Thus $f(x) = x^n$ is strictly increasing on $[0, \\infty)$.</p><p><b>2. Continuity and Image:</b> Since $x^n$ is a polynomial, it is continuous on $[0, \\infty)$.</p><p>We have $f(0) = 0$ and $\\lim_{x\\to\\infty} x^n = \\infty$. By the Intermediate Value Theorem, for any $y \\ge 0$, there exists $x \\ge 0$ such that $x^n = y$. Thus $f([0, \\infty)) = [0, \\infty)$.</p><p><b>3. Applying the Continuous Inverse Theorem:</b> By Theorem 5.6.5, the inverse function $g(y) = y^{1/n}$ exists, is strictly increasing, and is continuous on $[0, \\infty)$.</p>",
    "trap": "For odd $n$, the root function extends to all of $\\mathbb{R}$; for even $n$, the domain must be restricted to $[0, \\infty)$ to preserve injectivity."
  },
  {
    "id": "q.ra2.m1.36", "course": "ra2", "module": "ra2.m1", "sec": "5.6", "marks": 5,
    "title": "Product of Monotone Functions: Counterexample and Positive Theorem",
    "source": "Bartle & Sherbert 4e §5.6 Ex 3 & 4",
    "prompt": "(a) Show that $f(x) := x$ and $g(x) := x - 1$ are strictly increasing on $[0, 1]$, but their product $fg$ is NOT increasing on $[0, 1]$.<br>(b) Prove that if $f$ and $g$ are both positive and increasing on an interval $I$, then their product $fg$ IS increasing on $I$.",
    "tests": ["c.5.6.1"],
    "approach": "<p>For (a), compute $(fg)(x) = x^2 - x$ and check its derivative or values. For (b), expand $(fg)(y) - (fg)(x) = f(y)(g(y) - g(x)) + g(x)(f(y) - f(x))$.</p>",
    "solution": "<p><b>(a) Counterexample:</b> Let $f(x) = x$ and $g(x) = x - 1$ on $[0, 1]$. Both functions have derivative $1 > 0$, so both are strictly increasing.</p><p>However, $(fg)(x) = x(x - 1) = x^2 - x$. Evaluating at $0, 1/2, 1$:</p><p>$$(fg)(0) = 0, \\quad (fg)(1/2) = -1/4, \\quad (fg)(1) = 0$$</p><p>Since $0 < 1/2$ but $(fg)(0) = 0 > -1/4 = (fg)(1/2)$, the product $fg$ is NOT increasing on $[0, 1]$.</p><p><b>(b) Positive Theorem:</b> Let $f, g > 0$ be increasing on $I$. Let $x < y \\in I$.</p><p>Write the difference:</p><p>$$(fg)(y) - (fg)(x) = f(y)g(y) - f(x)g(x) = f(y)(g(y) - g(x)) + g(x)(f(y) - f(x))$$</p><p>Since $g$ is increasing and $x < y$, $g(y) - g(x) \\ge 0$. Since $f$ is positive, $f(y) > 0$. Thus $f(y)(g(y) - g(x)) \\ge 0$.</p><p>Since $f$ is increasing, $f(y) - f(x) \\ge 0$. Since $g$ is positive, $g(x) > 0$. Thus $g(x)(f(y) - f(x)) \\ge 0$.</p><p>Adding these non-negative quantities yields $(fg)(y) - (fg)(x) \\ge 0 \\implies (fg)(y) \\ge (fg)(x)$.</p><p>Hence $fg$ is increasing on $I$.</p>",
    "trap": "The product of increasing functions is increasing ONLY when the functions are non-negative; negative signs flip inequalities."
  }
]

# ══════════════════════════════════════════════════════════════════════════════
# MODULE 2: DIFFERENTIATION (Ch 6: 6.1 to 6.4)
# ══════════════════════════════════════════════════════════════════════════════

ra2_m2_questions = [
  # --- 6.1: THE DERIVATIVE ---
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
    "source": "Bartle & Sherbert 4e §6.1 Ex 8 & Thm 6.1.5",
    "prompt": "State Carathéodory's Theorem for differentiability and use it to prove the Chain Rule for $(g \\circ f)'(c)$.",
    "tests": ["c.6.1.5"],
    "approach": "<p>Carathéodory replaces the difference quotient with a continuous function $\\varphi$ satisfying $f(x) - f(c) = \\varphi(x)(x - c)$ with $\\varphi(c) = f'(c)$.</p>",
    "solution": "<p><b>Carathéodory's Theorem:</b> $f$ is differentiable at $c$ iff there exists a function $\\varphi$ continuous at $c$ such that $f(x) - f(c) = \\varphi(x)(x - c)$ for all $x$. In this case, $\\varphi(c) = f'(c)$.</p><p><b>Proof of Chain Rule:</b> Let $d = f(c)$. Since $g$ is differentiable at $d$, there is $\\psi$ continuous at $d$ with $g(y) - g(d) = \\psi(y)(y - d)$ and $\\psi(d) = g'(d)$.</p><p>Substitute $y = f(x)$ and $d = f(c)$:</p><p>$$g(f(x)) - g(f(c)) = \\psi(f(x))[f(x) - f(c)] = \\psi(f(x)) \\varphi(x) (x - c)$$</p><p>Define $h(x) = \\psi(f(x))\\varphi(x)$. Since $f$ is continuous at $c$, $\\psi(f(x)) \\to \\psi(f(c)) = g'(f(c))$, and $\\varphi(x) \\to f'(c)$. Thus $h$ is continuous at $c$ with $h(c) = g'(f(c))f'(c)$. By Carathéodory's Theorem, $(g \\circ f)'(c) = g'(f(c))f'(c)$.</p>",
    "trap": "The classic difference quotient proof fails when $f(x) = f(c)$ near $c$; Carathéodory's formulation completely eliminates division by zero."
  },
  {
    "id": "q.ra2.m2.03", "course": "ra2", "module": "ra2.m2", "sec": "6.1", "marks": 5,
    "title": "Derivative from First Principles: x³ and √x",
    "source": "Bartle & Sherbert 4e §6.1 Ex 1",
    "prompt": "Use the definition of derivative to find $f'(x)$ for:<br>(a) $f(x) := x^3$ for $x \\in \\mathbb{R}$;<br>(b) $g(x) := \\sqrt{x}$ for $x > 0$.",
    "tests": ["c.6.1.1"],
    "approach": "<p>Set up difference quotient $\\frac{f(x) - f(c)}{x - c}$ and factor or rationalize the numerator.</p>",
    "solution": "<p><b>(a) $f(x) = x^3$:</b> For any $c \\in \\mathbb{R}$:</p><p>$$\\lim_{x\\to c} \\frac{x^3 - c^3}{x - c} = \\lim_{x\\to c} \\frac{(x - c)(x^2 + xc + c^2)}{x - c} = \\lim_{x\\to c} (x^2 + xc + c^2) = c^2 + c^2 + c^2 = 3c^2$$</p><p>Thus $f'(c) = 3c^2$ for all $c \\in \\mathbb{R}$.</p><p><b>(b) $g(x) = \\sqrt{x}$ for $c > 0$:</b> Rationalizing the numerator:</p><p>$$\\lim_{x\\to c} \\frac{\\sqrt{x} - \\sqrt{c}}{x - c} = \\lim_{x\\to c} \\frac{(\\sqrt{x} - \\sqrt{c})(\\sqrt{x} + \\sqrt{c})}{(x - c)(\\sqrt{x} + \\sqrt{c})} = \\lim_{x\\to c} \\frac{x - c}{(x - c)(\\sqrt{x} + \\sqrt{c})} = \\lim_{x\\to c} \\frac{1}{\\sqrt{x} + \\sqrt{c}} = \\frac{1}{2\\sqrt{c}}$$</p><p>Thus $g'(c) = \\frac{1}{2\\sqrt{c}}$ for all $c > 0$.</p>",
    "trap": "At $c = 0$, the difference quotient $\\frac{\\sqrt{x}}{x} = \\frac{1}{\\sqrt{x}} \\to \\infty$, so $\\sqrt{x}$ is not differentiable at $0$."
  },
  {
    "id": "q.ra2.m2.04", "course": "ra2", "module": "ra2.m2", "sec": "6.1", "marks": 5,
    "title": "Non-Differentiability of x^(1/3) at 0",
    "source": "Bartle & Sherbert 4e §6.1 Ex 2",
    "prompt": "Show that the function $f(x) := x^{1/3}$ is continuous on $\\mathbb{R}$ but is NOT differentiable at $x = 0$.",
    "tests": ["c.6.1.1", "c.6.1.2"],
    "approach": "<p>Evaluate the difference quotient $\\frac{f(x) - f(0)}{x - 0} = \\frac{x^{1/3}}{x} = \\frac{1}{x^{2/3}}$ as $x \\to 0$.</p>",
    "solution": "<p><b>Continuity:</b> $f(x) = x^{1/3}$ is the inverse of the strictly increasing continuous function $y \\mapsto y^3$. By the Continuous Inverse Theorem, $f$ is continuous on all of $\\mathbb{R}$.</p><p><b>Differentiability at 0:</b> Set up the difference quotient at $c = 0$:</p><p>$$\\frac{f(x) - f(0)}{x - 0} = \\frac{x^{1/3} - 0}{x} = \\frac{1}{x^{2/3}}$$</p><p>As $x \\to 0$, $x^{2/3} > 0$ and $x^{2/3} \\to 0$. Therefore:</p><p>$$\\lim_{x\\to 0} \\frac{f(x) - f(0)}{x - 0} = \\lim_{x\\to 0} \\frac{1}{x^{2/3}} = +\\infty$$</p><p>Since the limit is not a finite real number, $f'(0)$ does not exist. Hence $f$ has a vertical tangent at $x = 0$ and is not differentiable at $0$.</p>",
    "trap": "A vertical tangent means the geometric tangent line exists, but the function is NOT differentiable because the derivative must be a finite real number."
  },
  {
    "id": "q.ra2.m2.05", "course": "ra2", "module": "ra2.m2", "sec": "6.1", "marks": 5,
    "title": "Differentiability of Dirichlet-Type Function at a Single Point",
    "source": "Bartle & Sherbert 4e §6.1 Ex 4",
    "prompt": "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) := x^2$ for $x \\in \\mathbb{Q}$ and $f(x) := 0$ for $x \\notin \\mathbb{Q}$. Prove that $f$ is differentiable at $x = 0$ and find $f'(0)$.",
    "tests": ["c.6.1.1"],
    "approach": "<p>Compute the difference quotient at $0$ and apply the Squeeze Theorem.</p>",
    "solution": "<p>At $c = 0$, $f(0) = 0^2 = 0$. The difference quotient for $x \\ne 0$ is:</p><p>$$\\frac{f(x) - f(0)}{x - 0} = \\frac{f(x)}{x} = \\begin{cases} \\frac{x^2}{x} = x & x \\in \\mathbb{Q} \\\\ \\frac{0}{x} = 0 & x \\notin \\mathbb{Q} \\end{cases}$$</p><p>For all $x \\ne 0$, we have:</p><p>$$0 \\le \\left| \\frac{f(x) - f(0)}{x - 0} \\right| \\le |x|$$</p><p>As $x \\to 0$, $|x| \\to 0$. By the Squeeze Theorem:</p><p>$$f'(0) = \\lim_{x\\to 0} \\frac{f(x) - f(0)}{x - 0} = 0$$</p><p>Hence $f$ is differentiable at $x = 0$ with $f'(0) = 0$.</p>",
    "trap": "This function is discontinuous at EVERY non-zero real number, yet it is differentiable at $x = 0$!"
  },
  {
    "id": "q.ra2.m2.06", "course": "ra2", "module": "ra2.m2", "sec": "6.1", "marks": 5,
    "title": "Differentiability Implies Continuity",
    "source": "Bartle & Sherbert 4e §6.1 Thm 6.1.2",
    "prompt": "State and prove Theorem 6.1.2: If $f: I \\to \\mathbb{R}$ is differentiable at $c \\in I$, then $f$ is continuous at $c$. Give a counterexample showing the converse is false.",
    "tests": ["c.6.1.2"],
    "approach": "<p>Write $f(x) - f(c) = \\frac{f(x) - f(c)}{x - c}(x - c)$ and take limits as $x \\to c$. Use $f(x) = |x|$ at $0$ as counterexample.</p>",
    "solution": "<p><b>Theorem:</b> If $f: I \\to \\mathbb{R}$ is differentiable at $c \\in I$, then $f$ is continuous at $c$.</p><p><b>Proof:</b> For all $x \\in I$ with $x \\ne c$, write:</p><p>$$f(x) - f(c) = \\left( \\frac{f(x) - f(c)}{x - c} \\right) (x - c)$$</p><p>Taking limits as $x \\to c$, and using the product rule for limits:</p><p>$$\\lim_{x\\to c} (f(x) - f(c)) = \\left( \\lim_{x\\to c} \\frac{f(x) - f(c)}{x - c} \\right) \\left( \\lim_{x\\to c} (x - c) \\right) = f'(c) \\cdot 0 = 0$$</p><p>Hence $\\lim_{x\\to c} f(x) = f(c)$, which proves $f$ is continuous at $c$.</p><p><b>Converse Fails:</b> Let $f(x) = |x|$ at $c = 0$. $f$ is continuous everywhere on $\\mathbb{R}$. However, the difference quotient from the right is $\\lim_{x\\to 0^+} \\frac{x}{x} = 1$, while from the left it is $\\lim_{x\\to 0^-} \\frac{-x}{x} = -1$. Since the one-sided limits differ, $f'(0)$ does not exist.</p>",
    "trap": "Do not divide by zero; the algebraic identity $f(x) - f(c) = \\frac{f(x)-f(c)}{x-c}(x-c)$ is valid for all $x \\ne c$."
  },

  # --- 6.2: THE MEAN VALUE THEOREM ---
  {
    "id": "q.ra2.m2.07", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Rolle's Theorem and the Mean Value Theorem",
    "source": "Bartle & Sherbert 4e §6.2 Ex 3 & Thm 6.2.4",
    "prompt": "State Lagrange's Mean Value Theorem and use it to prove that for all $x > 0$, $\\frac{x}{1+x} < \\ln(1+x) < x$.",
    "tests": ["c.6.2.3", "c.6.2.4"],
    "approach": "<p>Apply the Mean Value Theorem to $f(t) = \\ln(1+t)$ on the interval $[0, x]$.</p>",
    "solution": "<p><b>Lagrange's MVT:</b> If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ such that $f(b) - f(a) = f'(c)(b - a)$.</p><p>Let $f(t) = \\ln(1+t)$ on $[0, x]$ with $x > 0$. $f$ is continuous on $[0, x]$ and differentiable on $(0, x)$ with $f'(t) = \\frac{1}{1+t}$.</p><p>By MVT, there exists $c \\in (0, x)$ such that:</p><p>$$\\ln(1+x) - \\ln(1) = f'(c)(x - 0) = \\frac{x}{1+c}$$</p><p>Since $0 < c < x$, we have $1 < 1 + c < 1 + x$, which gives $\\frac{1}{1+x} < \\frac{1}{1+c} < 1$.</p><p>Multiplying by $x > 0$ yields $\\frac{x}{1+x} < \\frac{x}{1+c} = \\ln(1+x) < x$.</p>",
    "trap": "Ensure $c \\in (0, x)$ is strictly between $0$ and $x$ so that the inequalities are strict."
  },
  {
    "id": "q.ra2.m2.08", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Constant Difference and Zero Derivative",
    "source": "Bartle & Sherbert 4e §6.2 Ex 6 & Thm 6.2.5",
    "prompt": "Prove that if $f: (a, b) \\to \\mathbb{R}$ is differentiable and $f'(x) = 0$ for all $x \\in (a, b)$, then $f$ is a constant function.",
    "tests": ["c.6.2.5"],
    "approach": "<p>Fix a point $x_0 \\in (a, b)$ and apply MVT to an arbitrary point $x \\in (a, b)$.</p>",
    "solution": "<p>Fix $x_0 \\in (a, b)$ and let $x \\in (a, b)$ be arbitrary with $x \\ne x_0$.</p><p>Since $f$ is differentiable on $(a, b)$, it is continuous on $[x_0, x]$ (or $[x, x_0]$) and differentiable on $(x_0, x)$.</p><p>By the Mean Value Theorem, there exists $c$ between $x_0$ and $x$ such that:</p><p>$$f(x) - f(x_0) = f'(c)(x - x_0)$$</p><p>By hypothesis, $f'(c) = 0$. Hence $f(x) - f(x_0) = 0 \\implies f(x) = f(x_0)$.</p><p>Since $x$ was arbitrary, $f(x) = f(x_0)$ for all $x \\in (a, b)$, so $f$ is constant.</p>",
    "trap": "The domain MUST be an interval! If the domain is disconnected (e.g. $(0, 1) \\cup (2, 3)$), $f'(x) = 0$ only implies $f$ is locally constant on each piece."
  },
  {
    "id": "q.ra2.m2.09", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Rolle's Theorem and Root Isolation for Polynomials",
    "source": "Bartle & Sherbert 4e §6.2 Ex 4",
    "prompt": "Prove that between any two real roots of a differentiable function $f$, there is at least one real root of its derivative $f'$. Conclude that the polynomial $P(x) = x^3 - 3x + b$ can have at most one real root in $[-1, 1]$ for any real constant $b$.",
    "tests": ["c.6.2.3"],
    "approach": "<p>Apply Rolle's Theorem between roots $r_1 < r_2$. For $P(x)$, examine $P'(x) = 3(x^2 - 1)$ on $[-1, 1]$.</p>",
    "solution": "<p><b>1. Root Isolation via Rolle's:</b> Suppose $f(r_1) = f(r_2) = 0$ with $r_1 < r_2$. Since $f$ is differentiable, it is continuous on $[r_1, r_2]$ and differentiable on $(r_1, r_2)$. By Rolle's Theorem, there exists $c \\in (r_1, r_2)$ such that $f'(c) = 0$.</p><p><b>2. Application to $P(x) = x^3 - 3x + b$:</b> Differentiating gives $P'(x) = 3x^2 - 3 = 3(x^2 - 1)$.</p><p>For $x \\in (-1, 1)$, $x^2 < 1$, so $P'(x) = 3(x^2 - 1) < 0$.</p><p>Thus $P'(x)$ has NO roots in $(-1, 1)$.</p><p>If $P(x)$ had two or more distinct roots in $[-1, 1]$, say $r_1 < r_2$, then by Rolle's Theorem $P'$ would have a root in $(r_1, r_2) \\subseteq (-1, 1)$.</p><p>Since $P'(x) < 0$ on $(-1, 1)$, this is impossible. Thus $P(x)$ can have at most one real root in $[-1, 1]$.</p>",
    "trap": "Rolle's Theorem requires $f'(c) = 0$ in the OPEN interval $(r_1, r_2)$."
  },
  {
    "id": "q.ra2.m2.10", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Strict Monotonicity Criterion via Derivative",
    "source": "Bartle & Sherbert 4e §6.2 Thm 6.2.7",
    "prompt": "Let $f: I \\to \\mathbb{R}$ be differentiable on an interval $I$. Prove that if $f'(x) > 0$ for all $x \\in I$, then $f$ is strictly increasing on $I$. Show by example that the converse is false.",
    "tests": ["c.6.2.7"],
    "approach": "<p>Let $x_1 < x_2 \\in I$. Apply MVT on $[x_1, x_2]$: $f(x_2) - f(x_1) = f'(c)(x_2 - x_1) > 0$. Use $f(x) = x^3$ for the converse.</p>",
    "solution": "<p><b>Proof:</b> Let $x_1, x_2 \\in I$ with $x_1 < x_2$.</p><p>By the Mean Value Theorem applied to $f$ on $[x_1, x_2]$, there exists $c \\in (x_1, x_2)$ such that:</p><p>$$f(x_2) - f(x_1) = f'(c)(x_2 - x_1)$$</p><p>By hypothesis, $f'(c) > 0$. Since $x_2 - x_1 > 0$, the product $f'(c)(x_2 - x_1) > 0$.</p><p>Therefore $f(x_2) - f(x_1) > 0 \\implies f(x_1) < f(x_2)$.</p><p>Since $x_1 < x_2$ were arbitrary, $f$ is strictly increasing on $I$.</p><p><b>Converse Fails:</b> Consider $f(x) = x^3$ on $\\mathbb{R}$. For $x_1 < x_2$, $x_1^3 < x_2^3$, so $f$ is strictly increasing on $\\mathbb{R}$. However, $f'(x) = 3x^2$, which gives $f'(0) = 0$. Thus $f'$ is NOT strictly positive at every point.</p>",
    "trap": "A strictly increasing function may have isolated points where the derivative vanishes (e.g. $x^3$ at $0$)."
  },
  {
    "id": "q.ra2.m2.11", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Interior Extremum Theorem (Fermat's Theorem)",
    "source": "Bartle & Sherbert 4e §6.2 Thm 6.2.1",
    "prompt": "State and prove the Interior Extremum Theorem: If $c$ is an interior point of $I$, $f$ has a relative extremum at $c$, and $f'(c)$ exists, then $f'(c) = 0$.",
    "tests": ["c.6.2.1"],
    "approach": "<p>Examine the sign of the difference quotient $\\frac{f(x) - f(c)}{x - c}$ from the left ($x < c$) and from the right ($x > c$).</p>",
    "solution": "<p><b>Theorem:</b> Let $c$ be an interior point of an interval $I$ at which $f: I \\to \\mathbb{R}$ has a relative extremum. If $f'(c)$ exists, then $f'(c) = 0$.</p><p><b>Proof:</b> Assume without loss of generality that $f$ has a relative maximum at $c$.</p><p>Then there exists a neighborhood $V_\\delta(c) \\subseteq I$ such that $f(x) \\le f(c)$ for all $x \\in V_\\delta(c)$. That is, $f(x) - f(c) \\le 0$.</p><p><b>Right-hand difference quotient:</b> For $c < x < c + \\delta$, $x - c > 0$, so:</p><p>$$\\frac{f(x) - f(c)}{x - c} \\le 0 \\implies f'(c) = \\lim_{x\\to c^+} \\frac{f(x) - f(c)}{x - c} \\le 0$$</p><p><b>Left-hand difference quotient:</b> For $c - \\delta < x < c$, $x - c < 0$, so:</p><p>$$\\frac{f(x) - f(c)}{x - c} \\ge 0 \\implies f'(c) = \\lim_{x\\to c^-} \\frac{f(x) - f(c)}{x - c} \\ge 0$$</p><p>Since $f'(c) \\le 0$ and $f'(c) \\ge 0$, we must have $f'(c) = 0$.</p>",
    "trap": "The point $c$ MUST be an interior point; at an endpoint, the derivative need not be zero (e.g. $f(x) = x$ on $[0, 1]$ has minimum at $0$ where $f'(0) = 1 \\ne 0$)."
  },
  {
    "id": "q.ra2.m2.12", "course": "ra2", "module": "ra2.m2", "sec": "6.2", "marks": 5,
    "title": "Darboux's Intermediate Value Theorem for Derivatives",
    "source": "Bartle & Sherbert 4e §6.2 Thm 6.2.12",
    "prompt": "State and prove Darboux's Theorem: If $f$ is differentiable on $[a, b]$ and $k$ is a number strictly between $f'(a)$ and $f'(b)$, then there exists $c \\in (a, b)$ such that $f'(c) = k$.",
    "tests": ["c.6.2.12"],
    "approach": "<p>Consider the auxiliary function $g(x) = f(x) - kx$, show its minimum cannot occur at the endpoints $a$ or $b$, and apply the Interior Extremum Theorem.</p>",
    "solution": "<p><b>Theorem:</b> Let $I = [a, b]$ and let $f: I \\to \\mathbb{R}$ be differentiable on $I$. If $k$ satisfies $f'(a) < k < f'(b)$ (or $f'(a) > k > f'(b)$), then there exists $c \\in (a, b)$ such that $f'(c) = k$.</p><p><b>Proof:</b> Assume $f'(a) < k < f'(b)$. Define $g(x) := f(x) - kx$ on $[a, b]$.</p><p>Since $f$ is differentiable, $f$ is continuous, so $g$ is continuous on the compact interval $[a, b]$. By the Maximum-Minimum Theorem, $g$ attains its absolute minimum at some point $c \\in [a, b]$.</p><p>We show that $c$ cannot be an endpoint:</p><p>At $x = a$: $g'(a) = f'(a) - k < 0$. Since $g'(a) < 0$, for $x > a$ sufficiently close to $a$, $g(x) < g(a)$. Thus $a$ is not the minimum point.</p><p>At $x = b$: $g'(b) = f'(b) - k > 0$. Since $g'(b) > 0$, for $x < b$ sufficiently close to $b$, $g(x) < g(b)$. Thus $b$ is not the minimum point.</p><p>Therefore, the minimum point $c$ must lie in the open interval $(a, b)$.</p><p>By the Interior Extremum Theorem (Theorem 6.2.1), $g'(c) = 0$.</p><p>Since $g'(c) = f'(c) - k = 0$, we have $f'(c) = k$.</p>",
    "trap": "Derivatives have the Intermediate Value Property even when $f'$ is NOT continuous! A derivative can NEVER have a jump discontinuity."
  },

  # --- 6.3: L'HOSPITAL'S RULES ---
  {
    "id": "q.ra2.m2.13", "course": "ra2", "module": "ra2.m2", "sec": "6.3", "marks": 5,
    "title": "L'Hospital's Rule for Indeterminate Forms 0/0",
    "source": "Bartle & Sherbert 4e §6.3 Ex 1 & Thm 6.3.3",
    "prompt": "Evaluate $\\lim_{x \\to 0} \\frac{x - \\sin x}{x^3}$ by justifying each application of L'Hospital's Rule.",
    "tests": ["c.6.3.3"],
    "approach": "<p>Verify the form is $0/0$ at each step before differentiating numerator and denominator.</p>",
    "solution": "<p><b>Step 1:</b> As $x \\to 0$, $x - \\sin x \\to 0$ and $x^3 \\to 0$. This is of indeterminate form $\\frac{0}{0}$. Differentiating top and bottom:</p><p>$$\\lim_{x\\to 0} \\frac{x - \\sin x}{x^3} = \\lim_{x\\to 0} \\frac{1 - \\cos x}{3x^2}$$</p><p><b>Step 2:</b> As $x \\to 0$, $1 - \\cos x \\to 0$ and $3x^2 \\to 0$ (still $\\frac{0}{0}$). Applying L'Hospital's rule again:</p><p>$$= \\lim_{x\\to 0} \\frac{\\sin x}{6x}$$</p><p><b>Step 3:</b> Since $\\lim_{x\\to 0} \\frac{\\sin x}{x} = 1$, we get $\\frac{1}{6} \\cdot 1 = \\frac{1}{6}$.</p>",
    "trap": "Blindly differentiating when the limit is NOT an indeterminate form yields completely wrong answers."
  },
  {
    "id": "q.ra2.m2.14", "course": "ra2", "module": "ra2.m2", "sec": "6.3", "marks": 5,
    "title": "Cauchy's Mean Value Theorem",
    "source": "Bartle & Sherbert 4e §6.3 Thm 6.3.2",
    "prompt": "State and prove Cauchy's Mean Value Theorem (the Generalized Mean Value Theorem). Explain its geometric interpretation in terms of parametric curves.",
    "tests": ["c.6.3.2"],
    "approach": "<p>Define $h(x) = [g(b) - g(a)]f(x) - [f(b) - f(a)]g(x)$ and apply Rolle's Theorem.</p>",
    "solution": "<p><b>Statement:</b> Let $f, g: [a, b] \\to \\mathbb{R}$ be continuous on $[a, b]$ and differentiable on $(a, b)$. Then there exists $c \\in (a, b)$ such that:</p><p>$$[f(b) - f(a)] g'(c) = [g(b) - g(a)] f'(c)$$</p><p>If $g'(x) \\ne 0$ for all $x \\in (a, b)$, this can be written as $\\frac{f(b) - f(a)}{g(b) - g(a)} = \\frac{f'(c)}{g'(c)}$.</p><p><b>Proof:</b> Define the auxiliary function $h(x) := [g(b) - g(a)]f(x) - [f(b) - f(a)]g(x)$ on $[a, b]$.</p><p>$h$ is continuous on $[a, b]$ and differentiable on $(a, b)$. Evaluate $h$ at endpoints:</p><p>$$h(a) = g(b)f(a) - g(a)f(a) - f(b)g(a) + f(a)g(a) = g(b)f(a) - f(b)g(a)$$</p><p>$$h(b) = g(b)f(b) - g(a)f(b) - f(b)g(b) + f(a)g(b) = g(b)f(a) - f(b)g(a)$$</p><p>Since $h(a) = h(b)$, Rolle's Theorem guarantees there exists $c \\in (a, b)$ such that $h'(c) = 0$.</p><p>Since $h'(c) = [g(b) - g(a)]f'(c) - [f(b) - f(a)]g'(c) = 0$, the result follows.</p><p><b>Geometric Interpretation:</b> For a plane curve parametrized by $(g(t), f(t))$, the chord connecting $(g(a), f(a))$ and $(g(b), f(b))$ has slope $\\frac{f(b)-f(a)}{g(b)-g(a)}$. The theorem asserts that there is a point $c$ where the tangent vector $(g'(c), f'(c))$ is parallel to the chord.</p>",
    "trap": "Do not apply standard MVT separately to $f$ and $g$; that would produce two different intermediate points $c_1$ and $c_2$, whereas Cauchy's MVT produces a SINGLE common point $c$."
  },
  {
    "id": "q.ra2.m2.15", "course": "ra2", "module": "ra2.m2", "sec": "6.3", "marks": 5,
    "title": "L'Hospital's Rule for Infinity / Infinity Forms",
    "source": "Bartle & Sherbert 4e §6.3 Ex 2 & Thm 6.3.5",
    "prompt": "State L'Hospital's Rule for the indeterminate form $\\infty/\\infty$ as $x \\to \\infty$. Use it to evaluate $\\lim_{x\\to\\infty} \\frac{\\ln x}{x^\\alpha}$ for any $\\alpha > 0$.",
    "tests": ["c.6.3.3"],
    "approach": "<p>Verify that both numerator and denominator diverge to $\\infty$, then differentiate.</p>",
    "solution": "<p><b>Statement:</b> Suppose $f, g$ are differentiable on $(a, \\infty)$ with $g'(x) \\ne 0$, and $\\lim_{x\\to\\infty} g(x) = \\infty$. If $\\lim_{x\\to\\infty} \\frac{f'(x)}{g'(x)} = L \\in \\mathbb{R}$, then $\\lim_{x\\to\\infty} \\frac{f(x)}{g(x)} = L$.</p><p><b>Application:</b> For $\\lim_{x\\to\\infty} \\frac{\\ln x}{x^\\alpha}$ with $\\alpha > 0$:</p><p>As $x \\to \\infty$, $\\ln x \\to \\infty$ and $x^\\alpha \\to \\infty$. Differentiating top and bottom:</p><p>$$\\lim_{x\\to\\infty} \\frac{(\\ln x)'}{(x^\\alpha)'} = \\lim_{x\\to\\infty} \\frac{1/x}{\\alpha x^{\\alpha - 1}} = \\lim_{x\\to\\infty} \\frac{1}{\\alpha x^\\alpha}$$</p><p>Since $\\alpha > 0$, as $x \\to \\infty$, $x^\\alpha \\to \\infty$, so $\\frac{1}{\\alpha x^\\alpha} \\to 0$.</p><p>By L'Hospital's Rule, $\\lim_{x\\to\\infty} \\frac{\\ln x}{x^\\alpha} = 0$.</p>",
    "trap": "This result proves that logarithmic growth is slower than any positive power of $x$, no matter how small $\\alpha$ is."
  },
  {
    "id": "q.ra2.m2.16", "course": "ra2", "module": "ra2.m2", "sec": "6.3", "marks": 5,
    "title": "Indeterminate Exponential Form 0⁰",
    "source": "Bartle & Sherbert 4e §6.3 Ex 4 & 5",
    "prompt": "Evaluate $\\lim_{x \\to 0^+} x^x$ by converting the expression into an indeterminate form and justifying all steps.",
    "tests": ["c.6.3.3"],
    "approach": "<p>Let $y = x^x$. Take natural logarithm $\\ln y = x \\ln x = \\frac{\\ln x}{1/x}$, apply L'Hospital's Rule, and exponentiate.</p>",
    "solution": "<p>Let $y = x^x$ for $x > 0$. Taking logarithms: $\\ln y = \\ln(x^x) = x \\ln x$.</p><p>Rewrite as a quotient of form $\\frac{-\\infty}{\\infty}$:</p><p>$$\\lim_{x\\to 0^+} x \\ln x = \\lim_{x\\to 0^+} \\frac{\\ln x}{1/x}$$</p><p>Since this is of indeterminate form $\\infty/\\infty$, apply L'Hospital's Rule:</p><p>$$\\lim_{x\\to 0^+} \\frac{(\\ln x)'}{(1/x)'} = \\lim_{x\\to 0^+} \\frac{1/x}{-1/x^2} = \\lim_{x\\to 0^+} (-x) = 0$$</p><p>Since $\\ln y \\to 0$ as $x \\to 0^+$, and the exponential function $t \\mapsto e^t$ is continuous at $t = 0$:</p><p>$$\\lim_{x\\to 0^+} x^x = \\lim_{x\\to 0^+} e^{\\ln y} = e^{\\lim_{x\\to 0^+} \\ln y} = e^0 = 1$$</p>",
    "trap": "Do not forget to exponentiate at the end; $0$ is the limit of the logarithm, not the original limit."
  },
  {
    "id": "q.ra2.m2.17", "course": "ra2", "module": "ra2.m2", "sec": "6.3", "marks": 5,
    "title": "Failure of L'Hospital's Rule without Limit of Derivative Ratio",
    "source": "Bartle & Sherbert 4e §6.3 Ex 7",
    "prompt": "Let $f(x) := x + \\sin x \\cos x$ and $g(x) := e^{\\sin x}(x + \\sin x \\cos x)$ or consider $f(x) = x^2 \\sin(1/x)$ and $g(x) = x$. Show that $\\lim_{x\\to 0} \\frac{f(x)}{g(x)} = 0$ exists, but $\\lim_{x\\to 0} \\frac{f'(x)}{g'(x)}$ does NOT exist. What does this demonstrate about L'Hospital's Rule?",
    "tests": ["c.6.3.3", "c.6.3.4"],
    "approach": "<p>Compute $\\lim f(x)/g(x)$ directly using Squeeze Theorem, then show that $f'(x)/g'(x)$ oscillates without limit as $x \\to 0$.</p>",
    "solution": "<p>Let $f(x) = x^2 \\sin(1/x)$ for $x \\ne 0$ and $g(x) = x$.</p><p><b>1. Direct Evaluation:</b> For $x \\ne 0$, $\\frac{f(x)}{g(x)} = \\frac{x^2 \\sin(1/x)}{x} = x \\sin(1/x)$.</p><p>Since $|x \\sin(1/x)| \\le |x| \\to 0$ as $x \\to 0$, the Squeeze Theorem gives:</p><p>$$\\lim_{x\\to 0} \\frac{f(x)}{g(x)} = 0$$</p><p><b>2. Ratio of Derivatives:</b> Differentiating:</p><p>$$f'(x) = 2x \\sin(1/x) - \\cos(1/x) \\quad \\text{and} \\quad g'(x) = 1$$</p><p>Thus $\\frac{f'(x)}{g'(x)} = 2x \\sin(1/x) - \\cos(1/x)$.</p><p>As $x \\to 0$, $2x \\sin(1/x) \\to 0$, but $\\cos(1/x)$ oscillates between $-1$ and $1$ without converging to any limit.</p><p>Hence $\\lim_{x\\to 0} \\frac{f'(x)}{g'(x)}$ does not exist.</p><p><b>Conclusion:</b> L'Hospital's Rule states that if $\\lim \\frac{f'}{g'}$ exists, then $\\lim \\frac{f}{g}$ exists and equals it. It is a ONE-WAY implication: the failure of $\\lim \\frac{f'}{g'}$ to exist does NOT imply that $\\lim \\frac{f}{g}$ does not exist!</p>",
    "trap": "L'Hospital's Rule is a sufficient condition, not a necessary condition."
  },

  # --- 6.4: TAYLOR'S THEOREM ---
  {
    "id": "q.ra2.m2.18", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Taylor's Theorem with Lagrange Remainder and Irrationality of e",
    "source": "Bartle & Sherbert 4e §6.4 Ex 3 & Thm 6.4.1",
    "prompt": "State Taylor's Theorem with Lagrange remainder. Use it for $f(x) = e^x$ at $x_0 = 0$ to approximate $e$ to within $10^{-4}$ and prove that $e$ is irrational.",
    "tests": ["c.6.4.1", "c.6.4.2"],
    "approach": "<p>Expand $e^x = \\sum_{k=0}^n \\frac{x^k}{k!} + R_n(x)$ with remainder $R_n(1) = \\frac{e^c}{(n+1)!}$ for $c \\in (0, 1)$.</p>",
    "solution": "<p><b>Taylor's Theorem:</b> If $f, f', \\dots, f^{(n)}$ are continuous on $[a, b]$ and $f^{(n+1)}$ exists on $(a, b)$, then for $x_0, x \\in [a, b]$ there exists $c$ strictly between $x_0$ and $x$ such that:</p><p>$$f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(x_0)}{k!}(x - x_0)^k + R_n(x), \\quad R_n(x) = \\frac{f^{(n+1)}(c)}{(n+1)!}(x - x_0)^{n+1}$$</p><p><b>Approximating $e$:</b> For $f(x) = e^x$, $x_0 = 0$, $x = 1$:</p><p>$$e = \\sum_{k=0}^n \\frac{1}{k!} + \\frac{e^c}{(n+1)!}, \\quad 0 < c < 1$$</p><p>Since $c < 1$, $e^c < e < 3$, so $R_n(1) < \\frac{3}{(n+1)!}$. For $n = 7$, $8! = 40320$, so $R_7 < 3/40320 \\approx 7.4 \\times 10^{-5} < 10^{-4}$.</p><p><b>Irrationality:</b> If $e = p/q$, choose $n > q$. Multiply by $n!$: $n! e$ is an integer, $n! \\sum_{k=0}^n 1/k!$ is an integer, so the remainder $\\frac{e^c}{n+1}$ must be an integer. But $0 < \\frac{e^c}{n+1} < \\frac{3}{n+1} < 1$ for $n \\ge 3$. An integer in $(0, 1)$ is impossible! Hence $e$ is irrational.</p>",
    "trap": "Remember that $c$ depends on $n$ and lies strictly inside $(0, 1)$."
  },
  {
    "id": "q.ra2.m2.19", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Maclaurin Remainder for the Sine Function",
    "source": "Bartle & Sherbert 4e §6.4 Ex 4",
    "prompt": "Find the Maclaurin expansion of $f(x) = \\sin x$ with Lagrange remainder, and prove that the Taylor series converges to $\\sin x$ for all $x \\in \\mathbb{R}$.",
    "tests": ["c.6.4.1"],
    "approach": "<p>Bound the $(2n+1)$-th derivative by $1$, giving $|R_{2n}(x)| \\le \\frac{|x|^{2n+1}}{(2n+1)!} \\to 0$.</p>",
    "solution": "<p>The derivatives of $f(x) = \\sin x$ at $x_0 = 0$ follow the cyclic pattern: $f(0) = 0$, $f'(0) = 1$, $f''(0) = 0$, $f'''(0) = -1$, and so on.</p><p>The Taylor polynomial of degree $2n$ at $0$ is:</p><p>$$P_{2n}(x) = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\dots + (-1)^{n-1} \\frac{x^{2n-1}}{(2n-1)!}$$</p><p>By Taylor's Theorem with Lagrange remainder, for any $x \\in \\mathbb{R}$ there exists $c$ between $0$ and $x$ such that:</p><p>$$R_{2n}(x) = \\frac{f^{(2n+1)}(c)}{(2n+1)!} x^{2n+1}$$</p><p>Since every derivative of $\\sin x$ is $\\pm\\cos x$ or $\\pm\\sin x$, we have $|f^{(2n+1)}(c)| \\le 1$ for all $c$.</p><p>Therefore, for all $x \\in \\mathbb{R}$:</p><p>$$|R_{2n}(x)| \\le \\frac{|x|^{2n+1}}{(2n+1)!}$$</p><p>For any fixed $x \\in \\mathbb{R}$, by ratio test for sequences, $\\lim_{n\\to\\infty} \\frac{|x|^{2n+1}}{(2n+1)!} = 0$.</p><p>Hence $\\lim_{n\\to\\infty} R_{2n}(x) = 0$, proving that $\\sin x = \\sum_{k=0}^\\infty (-1)^k \\frac{x^{2k+1}}{(2k+1)!}$ for all $x \\in \\mathbb{R}$.</p>",
    "trap": "Uniform convergence requires checking bounds on compact subsets, but pointwise convergence holds everywhere on $\\mathbb{R}$."
  },
  {
    "id": "q.ra2.m2.20", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Taylor Approximation of √(1+x) and Error Bound",
    "source": "Bartle & Sherbert 4e §6.4 Ex 4 & 5",
    "prompt": "Show that for $x > 0$, $1 + \\frac{1}{2}x - \\frac{1}{8}x^2 < \\sqrt{1+x} < 1 + \\frac{1}{2}x$. Use this to approximate $\\sqrt{1.2}$ and state the maximum possible error.",
    "tests": ["c.6.4.1", "c.6.4.2"],
    "approach": "<p>Apply Taylor's Theorem to $f(t) = \\sqrt{1+t}$ at $t = 0$ with $n = 1$ and $n = 2$.</p>",
    "solution": "<p>Let $f(t) = (1+t)^{1/2}$. Then $f'(t) = \\frac{1}{2}(1+t)^{-1/2}$ and $f''(t) = -\\frac{1}{4}(1+t)^{-3/2}$.</p><p><b>Degree 1 Taylor:</b> $f(x) = f(0) + f'(0)x + \\frac{f''(c_1)}{2!}x^2 = 1 + \\frac{1}{2}x - \\frac{1}{8(1+c_1)^{3/2}} x^2$ for $c_1 \\in (0, x)$.</p><p>Since $c_1 > 0$, the remainder is strictly negative, so $\\sqrt{1+x} < 1 + \\frac{1}{2}x$.</p><p><b>Degree 2 Taylor:</b> $f'''(t) = \\frac{3}{8}(1+t)^{-5/2} > 0$.</p><p>$$f(x) = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{f'''(c_2)}{3!}x^3 = 1 + \\frac{1}{2}x - \\frac{1}{8}x^2 + \\frac{1}{16(1+c_2)^{5/2}} x^3$$</p><p>Since $c_2 > 0$, the remainder is positive, giving $1 + \\frac{1}{2}x - \\frac{1}{8}x^2 < \\sqrt{1+x}$.</p><p><b>Approximating $\\sqrt{1.2}$ ($x = 0.2$):</b></p><p>Lower bound: $1 + \\frac{1}{2}(0.2) - \\frac{1}{8}(0.04) = 1 + 0.1 - 0.005 = 1.095$.</p><p>Upper bound: $1 + \\frac{1}{2}(0.2) = 1.1$.</p><p>Taking the midpoint $1.0975$, the maximum error is at most $\\frac{1.1 - 1.095}{2} = 0.0025$.</p>",
    "trap": "Alternating Taylor series give upper and lower bounds whose difference directly bounds the approximation error."
  },
  {
    "id": "q.ra2.m2.21", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Characterization of Convex Functions via Second Derivative",
    "source": "Bartle & Sherbert 4e §6.4 Thm 6.4.7",
    "prompt": "State the definition of a convex function on an open interval $I$. Prove that if $f: I \\to \\mathbb{R}$ has a second derivative on $I$, then $f$ is convex on $I$ if and only if $f''(x) \\ge 0$ for all $x \\in I$.",
    "tests": ["c.6.4.1"],
    "approach": "<p>A differentiable function is convex iff $f(x) \\ge f(c) + f'(c)(x - c)$ (tangent lines lie below the graph); use Taylor's theorem with remainder of order 2.</p>",
    "solution": "<p><b>Definition:</b> $f: I \\to \\mathbb{R}$ is convex if for all $x_1, x_2 \\in I$ and $t \\in [0, 1]$:</p><p>$$f(t x_1 + (1 - t) x_2) \\le t f(x_1) + (1 - t) f(x_2)$$</p><p><b>(=>) Assume $f''(x) \\ge 0$ for all $x \\in I$:</b> Let $x, c \\in I$. By Taylor's Theorem with $n = 1$:</p><p>$$f(x) = f(c) + f'(c)(x - c) + \\frac{f''(\\xi)}{2}(x - c)^2$$</p><p>for some $\\xi$ between $c$ and $x$. Since $f''(\\xi) \\ge 0$ and $(x - c)^2 \\ge 0$, the remainder is $\\ge 0$.</p><p>Therefore $f(x) \\ge f(c) + f'(c)(x - c)$ for all $x, c \\in I$.</p><p>Let $x_1 < x_2$ and $x_0 = t x_1 + (1 - t) x_2$. Applying the inequality at $c = x_0$ for $x = x_1$ and $x = x_2$:</p><p>$$f(x_1) \\ge f(x_0) + f'(x_0)(x_1 - x_0)$$</p><p>$$f(x_2) \\ge f(x_0) + f'(x_0)(x_2 - x_0)$$</p><p>Multiplying by $t$ and $1 - t$ and adding gives $t f(x_1) + (1 - t) f(x_2) \\ge f(x_0) + f'(x_0)(0) = f(x_0)$, which proves convexity.</p><p><b>(<=) Assume $f$ is convex:</b> Then $f'$ is increasing on $I$. Therefore $f''(x) = \\lim_{h\\to 0} \\frac{f'(x+h) - f'(x)}{h} \\ge 0$.</p>",
    "trap": "Tangents lie below the graph of a convex function; secant lines lie above the graph."
  },
  {
    "id": "q.ra2.m2.22", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Smooth Non-Analytic Function: e^(-1/x²)",
    "source": "Bartle & Sherbert 4e §6.4 Ex 12",
    "prompt": "Define $f(x) := e^{-1/x^2}$ for $x \\ne 0$ and $f(0) := 0$.<br>(a) Prove that $f^{(n)}(0) = 0$ for all $n \\in \\mathbb{N}$.<br>(b) Conclude that the Maclaurin series of $f$ converges everywhere on $\\mathbb{R}$, but equals $f(x)$ ONLY at $x = 0$.",
    "tests": ["c.6.4.1", "c.6.4.2"],
    "approach": "<p>Use induction to show $f^{(n)}(x) = P_n(1/x) e^{-1/x^2}$ for $x \\ne 0$, and use $\\lim_{t\\to\\infty} t^k e^{-t^2} = 0$.</p>",
    "solution": "<p><b>(a)</b> For $x \\ne 0$, $f'(x) = \\frac{2}{x^3} e^{-1/x^2}$. By induction, for every $n \\in \\mathbb{N}$, $f^{(n)}(x) = P_n(1/x) e^{-1/x^2}$ where $P_n$ is a polynomial.</p><p>At $x = 0$, for $n = 1$:</p><p>$$f'(0) = \\lim_{x\\to 0} \\frac{f(x) - 0}{x} = \\lim_{x\\to 0} \\frac{1}{x} e^{-1/x^2}$$</p><p>Let $t = 1/x$. As $x \\to 0$, $t \\to \\pm\\infty$. Then $\\lim_{t\\to\\pm\\infty} t e^{-t^2} = 0$ by L'Hospital's Rule. Thus $f'(0) = 0$.</p><p>By induction, assuming $f^{(k)}(0) = 0$, the difference quotient for $f^{(k+1)}(0)$ is:</p><p>$$\\lim_{x\\to 0} \\frac{f^{(k)}(x) - 0}{x} = \\lim_{x\\to 0} \\frac{P_k(1/x)}{x} e^{-1/x^2} = \\lim_{t\\to\\pm\\infty} t P_k(t) e^{-t^2} = 0$$</p><p>Thus $f^{(n)}(0) = 0$ for all $n \\in \\mathbb{N}$.</p><p><b>(b)</b> The Maclaurin series of $f$ is:</p><p>$$\\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!} x^n = \\sum_{n=0}^\\infty 0 \\cdot x^n = 0$$</p><p>This power series converges everywhere on $\\mathbb{R}$ to the identically zero function.</p><p>However, for any $x \\ne 0$, $f(x) = e^{-1/x^2} > 0 \\ne 0$.</p><p>Therefore, the Maclaurin series represents $f(x)$ ONLY at the single point $x = 0$.</p>",
    "trap": "Smooth ($C^\\infty$) does NOT imply analytic! A function can have all derivatives at a point vanish without being identically zero."
  },
  {
    "id": "q.ra2.m2.23", "course": "ra2", "module": "ra2.m2", "sec": "6.4", "marks": 5,
    "title": "Cauchy Form of the Remainder",
    "source": "Bartle & Sherbert 4e §6.4 Thm 6.4.2 & Ex 7",
    "prompt": "State the Cauchy Form of the Remainder in Taylor's Theorem. Explain why the Cauchy form is often preferred over the Lagrange form when expanding functions like $\\ln(1+x)$ or $(1+x)^m$ near the boundary of convergence.",
    "tests": ["c.6.4.1"],
    "approach": "<p>State Cauchy's form $R_n(x) = \\frac{f^{(n+1)}(c)}{n!} (x - c)^n (x - x_0)$. Explain that the factor $(x - c)^n$ decays much faster when $c$ is near $x_0$.</p>",
    "solution": "<p><b>Cauchy Form of the Remainder:</b> Under the hypotheses of Taylor's Theorem, there exists $c$ strictly between $x_0$ and $x$ such that:</p><p>$$R_n(x) = \\frac{f^{(n+1)}(c)}{n!} (x - c)^n (x - x_0)$$</p><p>Setting $c = x_0 + \\theta (x - x_0)$ with $0 < \\theta < 1$, this can be written as:</p><p>$$R_n(x) = \\frac{f^{(n+1)}(x_0 + \\theta(x - x_0))}{n!} (1 - \\theta)^n (x - x_0)^{n+1}$$</p><p><b>Why Cauchy Form is Preferred:</b> In the binomial series $(1+x)^m$ for $-1 < x < 0$ or the logarithmic series $\\ln(1+x)$, the factor $(1+c)^{-(n+1)}$ in the Lagrange remainder blows up as $c \\to -1^+$, making it impossible to prove $R_n(x) \\to 0$.</p><p>In contrast, the Cauchy form contains the term $\\left(\\frac{1-\\theta}{1+\\theta x}\\right)^n$. Since $-1 < x < 0$, $0 < \\frac{1-\\theta}{1+\\theta x} < 1$, which decays exponentially to $0$ as $n \\to \\infty$, successfully proving convergence of the series on $(-1, 0)$.</p>",
    "trap": "Lagrange form divides by $(n+1)!$ with $(x-x_0)^{n+1}$; Cauchy form divides by $n!$ with $(x-c)^n(x-x_0)$."
  }
]

# ══════════════════════════════════════════════════════════════════════════════
# WRITE DATA FILES
# ══════════════════════════════════════════════════════════════════════════════

# Write data/questions.ra2.m1.js
with open("data/questions.ra2.m1.js", "w") as f:
    f.write("/* ══════════════════════════════════════════════════════════════════════════\n")
    f.write("   Real Analysis II · Module I — Continuous Functions (Bartle Ch 5: 5.1 - 5.6)\n")
    f.write(f"   Total Questions: {len(ra2_m1_questions)}\n")
    f.write("   ══════════════════════════════════════════════════════════════════════════ */\n\n")
    f.write("QUESTIONS.push(\n")
    for i, q in enumerate(ra2_m1_questions):
        sep = "," if i < len(ra2_m1_questions) - 1 else ""
        f.write(json.dumps(q, indent=2) + sep + "\n")
    f.write(");\n")

# Write data/questions.ra2.m2.js
with open("data/questions.ra2.m2.js", "w") as f:
    f.write("/* ══════════════════════════════════════════════════════════════════════════\n")
    f.write("   Real Analysis II · Module II — Differentiation (Bartle Ch 6: 6.1 - 6.4)\n")
    f.write(f"   Total Questions: {len(ra2_m2_questions)}\n")
    f.write("   ══════════════════════════════════════════════════════════════════════════ */\n\n")
    f.write("QUESTIONS.push(\n")
    for i, q in enumerate(ra2_m2_questions):
        sep = "," if i < len(ra2_m2_questions) - 1 else ""
        f.write(json.dumps(q, indent=2) + sep + "\n")
    f.write(");\n")

print(f"Successfully generated {len(ra2_m1_questions)} questions in data/questions.ra2.m1.js")
print(f"Successfully generated {len(ra2_m2_questions)} questions in data/questions.ra2.m2.js")

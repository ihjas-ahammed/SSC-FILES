import { Unit } from '../types';

export const UNIT_4_2_1: Unit = {
  id: "unit-4-2-1",
  title: "Limit Theorems",
  description: "Algebraic limit laws, Squeeze Theorem, and Local Properties",
  color: "duo-red",
  lessons: [
    {
      id: "les-4-2-1-d1", title: "Definition 4.2.1: Local Boundedness", description: "Bounded on a neighborhood", icon: "Box",
      slides: [
        { id: "s0", type: "theory", title: "Bounded on a Neighborhood", content: "**Definition 4.2.1:** Let $A \\subseteq \\mathbb{R}$, let $f: A \\to \\mathbb{R}$, and let $c \\in \\mathbb{R}$ be a cluster point of $A$. \n\nWe say that $f$ is **bounded on a neighborhood** of $c$ if there exists a $\\delta$-neighborhood $V_\\delta(c)$ of $c$ and a constant $M > 0$ such that we have $|f(x)| \\le M$ for all $x \\in A \\cap V_\\delta(c)$." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "Can a function be bounded on a small neighborhood of $c$, but be completely unbounded on the rest of its domain?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Local boundedness only cares about a tiny region around c. Outside of that, the function could go to infinity (like 1/x away from x=1)." }, { id: "B", text: "No", isCorrect: false, explanation: "Global bounds are not required for local bounds." }] },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "To prove local boundedness, we must find a constant $M >$ ___.", blankAnswer: "0" }
      ]
    },
    {
      id: "les-4-2-1-t2", title: "Theorem 4.2.2: Limits Imply Boundedness", description: "If a limit exists, it can't blow up locally", icon: "Anchor",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.2.2", content: "**Theorem 4.2.2:** If $A \\subseteq \\mathbb{R}$ and $f: A \\to \\mathbb{R}$ has a limit at $c \\in \\mathbb{R}$, then $f$ is bounded on some neighborhood of $c$.\n\n*Intuition:* If a function is approaching a finite target $L$, it cannot be shooting off to infinity in the immediate vicinity of that target." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "Does this theorem guarantee that $f(c)$ itself is less than the bound $M$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "The function might not even be defined at c. The limit only constrains points near c." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Limits ignore the value exactly at c." }] },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Find the bound $M$.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x\\to c} f(x) = L$. By definition, for $\\epsilon = 1$, there exists a $\\delta > 0$ such that if $0 < |x - c| < \\delta$, then $|f(x) - L| < 1$." },
            { prompt: "By the Triangle Inequality, what is an upper bound for $|f(x)|$ in this neighborhood?", options: [{ id: "A", text: "$|L| + 1$", isCorrect: true, explanation: "$|f(x)| - |L| \\le |f(x) - L| < 1$, so $|f(x)| < |L| + 1$." }, { id: "B", text: "1", isCorrect: false, explanation: "The distance to L is bounded by 1, not the function's absolute value." }], stepText: "We have $|f(x)| < |L| + 1$." },
            { stepText: "If $c \\notin A$, we simply set $M = |L| + 1$." },
            { stepText: "If $c \\in A$, we must also consider the value $f(c)$ itself. So we set $M = \\max(|f(c)|, |L| + 1)$." },
            { stepText: "Now, for all $x \\in A \\cap V_\\delta(c)$, we have $|f(x)| \\le M$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-1-d3", title: "Definition 4.2.3: Algebra of Functions", description: "Combining functions", icon: "Layers",
      slides: [
        { id: "s0", type: "theory", title: "Definition 4.2.3: Operations on Functions", content: "Let $A \\subseteq \\mathbb{R}$ and let $f$ and $g$ be functions defined on $A$ to $\\mathbb{R}$. We define the **sum**, **difference**, and **product** point-wise:\n\n- $(f + g)(x) := f(x) + g(x)$\n- $(f - g)(x) := f(x) - g(x)$\n- $(fg)(x) := f(x)g(x)$\n- $(bf)(x) := b f(x)$ for a scalar $b \\in \\mathbb{R}$.\n\nIf $h(x) \\neq 0$ for all $x \\in A$, we define the **quotient**:\n- $(f/h)(x) := f(x) / h(x)$." },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "If $f$ is defined on $A$ and $g$ is defined on $B$, what is the natural domain of $(f+g)$?", options: [{ id: "A", text: "$A \\cap B$", isCorrect: true, explanation: "Both functions must be evaluated at x, so x must be in both domains." }, { id: "B", text: "$A \\cup B$", isCorrect: false, explanation: "If x is in A but not B, g(x) is undefined." }] }
      ]
    },
    {
      id: "les-4-2-1-t4", title: "Theorem 4.2.4: Algebraic Limit Theorems", description: "Limits respect algebraic operations", icon: "Calculator",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.2.4", content: "**Theorem 4.2.4:** Let $A \\subseteq \\mathbb{R}$, let $f, g: A \\to \\mathbb{R}$, and let $c \\in \\mathbb{R}$ be a cluster point of $A$. \nIf $\\lim f = L$ and $\\lim g = M$, then:\n\n- $\\lim (f+g) = L + M$\n- $\\lim (f-g) = L - M$\n- $\\lim (fg) = LM$\n- $\\lim (bf) = bL$\n\nIf $h(x) \\neq 0$ for all $x \\in A$, and if $\\lim h = H \\neq 0$, then:\n- $\\lim (f/h) = L/H$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Product Rule", content: "**Goal: Prove $\\lim (fg) = LM$ using the Sequential Criterion.**", interactiveSteps: [
            { stepText: "We use the Sequential Criterion (Theorem 4.1.8). Let $(x_n)$ be any sequence in $A$ such that $x_n \\neq c$ and $x_n \\to c$." },
            { stepText: "By the Sequential Criterion for $f$ and $g$, we know that $f(x_n) \\to L$ and $g(x_n) \\to M$." },
            { prompt: "Now consider the sequence for the product: $(fg)(x_n)$. By Definition 4.2.3, what does this equal?", options: [{ id: "A", text: "$f(x_n)g(x_n)$", isCorrect: true, explanation: "Point-wise definition of the product." }, { id: "B", text: "$f(g(x_n))$", isCorrect: false, explanation: "That would be composition." }], stepText: "It equals $f(x_n)g(x_n)$." },
            { stepText: "By the Algebraic Limit Theorem for sequences (Theorem 3.2.3), the limit of a product of sequences is the product of their limits." },
            { stepText: "Thus, $\\lim(f(x_n)g(x_n)) = \\lim(f(x_n)) \\lim(g(x_n)) = LM$." },
            { stepText: "Since this holds for every valid sequence $(x_n)$, the function limit $\\lim_{x\\to c} (fg)(x) = LM$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Application", content: "If $\\lim_{x\\to 2} f(x) = 3$ and $\\lim_{x\\to 2} g(x) = -1$, evaluate $\\lim_{x\\to 2} [f(x)^2 + 4g(x)]$.", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-4-2-1-t6", title: "Theorem 4.2.6: Order Preservation", description: "Limits preserve non-strict inequalities", icon: "AlignEndHorizontal",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.2.6: Bounds are Preserved", content: "**Theorem 4.2.6:** Let $A \\subseteq \\mathbb{R}$, let $f: A \\to \\mathbb{R}$, and let $c \\in \\mathbb{R}$ be a cluster point of $A$. \n\nIf $a \\le f(x) \\le b$ for all $x \\in A, x \\neq c$, and if $\\lim_{x\\to c} f$ exists, then:\n$$a \\le \\lim_{x\\to c} f \\le b$$\n\n*Warning:* Strict inequalities are NOT preserved. If $f(x) > 0$, its limit can be exactly $0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the sequential criterion.**", interactiveSteps: [
            { stepText: "Let $L = \\lim_{x\\to c} f(x)$." },
            { prompt: "Let $(x_n)$ be a sequence converging to $c$ ($x_n \\neq c$). By the Sequential Criterion, what does $f(x_n)$ converge to?", options: [{ id: "A", text: "$L$", isCorrect: true, explanation: "The sequence of function outputs converges to the function's limit." }, { id: "B", text: "$c$", isCorrect: false, explanation: "The inputs converge to c, the outputs converge to L." }], stepText: "We have $\\lim f(x_n) = L$." },
            { stepText: "We are given that $a \\le f(x) \\le b$ for all $x \\neq c$. Thus, for our sequence, $a \\le f(x_n) \\le b$ for all $n$." },
            { stepText: "By Theorem 3.2.6 (Bounds for Sequences), if a sequence is bounded by $a$ and $b$, its limit is bounded by $a$ and $b$." },
            { stepText: "Therefore, $a \\le L \\le b$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-1-t7", title: "Theorem 4.2.7: Squeeze Theorem", description: "The Sandwich Theorem for functions", icon: "Minimize2",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.2.7: Squeeze Theorem", content: "**Theorem 4.2.7:** Let $A \\subseteq \\mathbb{R}$, let $f, g, h: A \\to \\mathbb{R}$, and let $c \\in \\mathbb{R}$ be a cluster point of $A$. \n\nIf $f(x) \\le g(x) \\le h(x)$ for all $x \\in A, x \\neq c$, and if:\n$$\\lim_{x\\to c} f = L = \\lim_{x\\to c} h$$\nthen $\\lim_{x\\to c} g = L$.\n\nThis is identical in spirit to the sequence version and is incredibly useful for oscillating functions." },
        { id: "s1", type: "example_q", title: "Classic Example", content: "Show that $\\lim_{x\\to 0} x \\sin(1/x) = 0$." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Squeeze the function.**", interactiveSteps: [
            { stepText: "We know that for all $z$, $-1 \\le \\sin(z) \\le 1$. Let $z = 1/x$ for $x \\neq 0$." },
            { prompt: "To bound $x \\sin(1/x)$, we multiply the inequality by $|x|$. What are the bounds?", options: [{ id: "A", text: "$-|x| \\le x \\sin(1/x) \\le |x|$", isCorrect: true, explanation: "Multiplying by a positive value |x| preserves the inequalities." }, { id: "B", text: "$-x \\le x \\sin(1/x) \\le x$", isCorrect: false, explanation: "If x is negative, multiplying by x would flip the inequalities, making it messy." }], stepText: "We have $-|x| \\le x \\sin(1/x) \\le |x|$." },
            { stepText: "We know $\\lim_{x\\to 0} -|x| = 0$ and $\\lim_{x\\to 0} |x| = 0$." },
            { stepText: "By the Squeeze Theorem, $\\lim_{x\\to 0} x \\sin(1/x) = 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-2-1-t9", title: "Theorem 4.2.9: Sign Preservation", description: "A positive limit implies positive values nearby", icon: "Activity",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.2.9", content: "**Theorem 4.2.9:** Let $A \\subseteq \\mathbb{R}$, let $f: A \\to \\mathbb{R}$ and let $c \\in \\mathbb{R}$ be a cluster point of $A$. \n\nIf $\\lim_{x\\to c} f > 0$, then there exists a neighborhood $V_\\delta(c)$ of $c$ such that $f(x) > 0$ for all $x \\in A \\cap V_\\delta(c), x \\neq c$.\n\n*Meaning:* If a function is heading towards a strictly positive number, it must eventually become strictly positive itself before it arrives." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Trap the function above 0 using a specific epsilon.**", interactiveSteps: [
            { stepText: "Let $L = \\lim_{x\\to c} f$. We are given that $L > 0$." },
            { prompt: "To guarantee $f(x) > 0$, what should we choose for $\\epsilon$?", options: [{ id: "A", text: "$\\epsilon = \\frac{1}{2}L$", isCorrect: true, explanation: "Then the lower bound of the interval is $L - L/2 = L/2 > 0$." }, { id: "B", text: "$\\epsilon = 2L$", isCorrect: false, explanation: "Then the lower bound is $L - 2L = -L$, which is negative." }], stepText: "Choose $\\epsilon = \\frac{1}{2}L$. Since $L > 0$, $\\epsilon > 0$." },
            { stepText: "By the definition of limits, there exists a $\\delta > 0$ such that if $0 < |x-c| < \\delta$, then $|f(x) - L| < \\frac{1}{2}L$." },
            { stepText: "Unfolding the absolute value gives $-\\frac{1}{2}L < f(x) - L < \\frac{1}{2}L$." },
            { stepText: "Adding $L$ to all sides gives $\\frac{1}{2}L < f(x) < \\frac{3}{2}L$." },
            { stepText: "Since $\\frac{1}{2}L > 0$, we have $f(x) > 0$ for all $x$ in the deleted $\\delta$-neighborhood. Goal reached!" }
        ]}
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_4_1_3: Unit = {
  id: "unit-4-1-3",
  title: "Divergence Exercises",
  description: "Exercises 9-17: Limits at Boundary Points",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-3-ex9", title: "Exercise 9: Calculating Limits", description: "Evaluating rational limits", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Use either the $\\epsilon-\\delta$ definition or the Sequential Criterion to establish:\n(a) $\\lim_{x\\to 2} \\frac{1}{1-x} = -1$\n(b) $\\lim_{x\\to 1} \\frac{x}{1+x} = \\frac{1}{2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Sequential Criterion.**", interactiveSteps: [
            { stepText: "Let $(x_n)$ be any sequence converging to 2 with $x_n \\neq 2$." },
            { prompt: "By the algebraic limit theorems for sequences, what is $\\lim(1 - x_n)$?", options: [{ id: "A", text: "$1 - 2 = -1$", isCorrect: true, explanation: "The limit of a difference is the difference of limits." }, { id: "B", text: "0", isCorrect: false, explanation: "x_n goes to 2, not 1." }], stepText: "The sequence in the denominator converges to -1." },
            { stepText: "Since the denominator limit is non-zero, the quotient limit is $1 / (-1) = -1$." },
            { stepText: "Because this holds for *every* sequence converging to 2, the function limit is -1." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Sequential Criterion.**", interactiveSteps: [
            { stepText: "Let $(x_n)$ be any sequence converging to 1." },
            { stepText: "The numerator sequence converges to 1." },
            { stepText: "The denominator sequence $(1 + x_n)$ converges to $1 + 1 = 2$." },
            { stepText: "Since $2 \\neq 0$, the quotient rule for sequences applies. The limit is $1 / 2$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex9b", title: "Exercise 9: More Calculations", description: "Evaluating piecewise and factored limits", icon: "Scissors",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9 (c & d)", content: "Establish the following limits:\n(c) $\\lim_{x\\to 0} \\frac{x^2}{|x|} = 0$\n(d) $\\lim_{x\\to 1} \\frac{x^2-x+1}{x+1} = \\frac{1}{2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (c)", content: "**Goal: Simplify the expression.**", interactiveSteps: [
            { stepText: "Notice that $|x|^2 = x^2$ for all real numbers." },
            { prompt: "So for $x \\neq 0$, how can we rewrite $\\frac{x^2}{|x|}$?", options: [{ id: "A", text: "$|x|$", isCorrect: true, explanation: "$\\frac{|x|^2}{|x|} = |x|$." }, { id: "B", text: "$x$", isCorrect: false, explanation: "If x is negative, the original expression is still positive." }], stepText: "The function simplifies exactly to $|x|$ for $x \\neq 0$." },
            { stepText: "We know $\\lim_{x\\to 0} |x| = 0$ (easy to prove with $\\delta = \\epsilon$). Thus the limit is 0." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (d)", content: "**Goal: Direct substitution.**", interactiveSteps: [
            { stepText: "The function is $f(x) = \\frac{x^2-x+1}{x+1}$." },
            { stepText: "Using the sequential criterion, if $x_n \\to 1$, the numerator goes to $1^2 - 1 + 1 = 1$." },
            { stepText: "The denominator goes to $1 + 1 = 2$." },
            { stepText: "By the quotient rule, the limit is $1/2$." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex10", title: "Exercise 10: Definition Practice", description: "Finding deltas for specific points", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Use the $\\epsilon-\\delta$ definition of limit to show that:\n(a) $\\lim_{x\\to 2} (x^2+4x) = 12$\n(b) $\\lim_{x\\to -1} \\frac{x+5}{2x+3} = 4$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Bound the quadratic error.**", interactiveSteps: [
            { stepText: "We want $|(x^2+4x) - 12| < \\epsilon$. Factor it: $|x^2+4x-12| = |x-2||x+6|$." },
            { stepText: "Assume $|x-2| < 1$, so $1 < x < 3$." },
            { prompt: "What is an upper bound for $|x+6|$ in this interval?", options: [{ id: "A", text: "9", isCorrect: true, explanation: "Since x < 3, x+6 < 9." }, { id: "B", text: "7", isCorrect: false, explanation: "That's the lower bound." }], stepText: "The term is bounded by 9." },
            { stepText: "So $|x^2+4x-12| < 9|x-2|$." },
            { stepText: "Choose $\\delta = \\min(1, \\epsilon/9)$. Then the limit is proven." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Bound the rational error.**", interactiveSteps: [
            { stepText: "We want $|\\frac{x+5}{2x+3} - 4| < \\epsilon$. Simplify: $|\\frac{x+5 - 4(2x+3)}{2x+3}| = |\\frac{-7x-7}{2x+3}| = 7\\frac{|x+1|}{|2x+3|}$." },
            { stepText: "We need a lower bound for the denominator. Assume $|x - (-1)| < 1/4$. Then $-1.25 < x < -0.75$." },
            { stepText: "Then $2x+3$ is between $0.5$ and $1.5$. The absolute value is strictly $> 0.5$." },
            { stepText: "Thus $1/|2x+3| < 1/0.5 = 2$." },
            { stepText: "The total error is bounded by $7 \\times 2 \\times |x+1| = 14|x+1|$. Choose $\\delta = \\min(1/4, \\epsilon/14)$." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex11", title: "Exercise 11: More Definition Practice", description: "More rational limit proofs", icon: "Divide",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Use the definition of limit to prove the following.\n(a) $\\lim_{x\\to 3} \\frac{2x+3}{4x-9} = 3$\n(b) $\\lim_{x\\to 6} \\frac{x^2-3x}{x+3} = 2$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Find delta.**", interactiveSteps: [
            { stepText: "$|\\frac{2x+3}{4x-9} - 3| = |\\frac{2x+3-12x+27}{4x-9}| = |\\frac{-10x+30}{4x-9}| = 10\\frac{|x-3|}{|4x-9|}$." },
            { prompt: "Assume $|x-3| < 1$, so $2 < x < 4$. What is a lower bound for $|4x-9|$?", options: [{ id: "A", text: "No positive lower bound, it crosses 0", isCorrect: true, explanation: "If x=2.25, 4x-9 = 0. The interval is too large!" }, { id: "B", text: "1", isCorrect: false, explanation: "It hits 0." }], stepText: "The interval $(2, 4)$ contains $9/4 = 2.25$ where the denominator is 0. We must pick a tighter preliminary bound." },
            { stepText: "Assume $|x-3| < 1/2$. Then $2.5 < x < 3.5$. Then $4x-9$ is between $1$ and $5$. So $|4x-9| > 1$." },
            { stepText: "Thus the error is $< 10|x-3| / 1 = 10|x-3|$. Choose $\\delta = \\min(1/2, \\epsilon/10)$." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex12", title: "Exercise 12: Non-existent Limits", description: "Using sequences to show limits fail", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Show that the following limits do not exist.\n(a) $\\lim_{x\\to 0} \\frac{1}{x^2} \\ (x>0)$\n(b) $\\lim_{x\\to 0} \\frac{1}{\\sqrt{x}} \\ (x>0)$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Divergence", content: "**Goal: Find a sequence that blows up.**", interactiveSteps: [
            { stepText: "Let's use the Sequential Divergence Criterion (Theorem 4.1.9)." },
            { prompt: "What sequence $(x_n) \to 0$ makes $f(x_n) = 1/x_n^2$ diverge?", options: [{ id: "A", text: "$x_n = 1/n$", isCorrect: true, explanation: "Then f(x_n) = n^2, which goes to infinity." }, { id: "B", text: "$x_n = 1$", isCorrect: false, explanation: "This sequence doesn't converge to 0." }], stepText: "Let $x_n = 1/n$. Clearly $x_n \to 0$." },
            { stepText: "For part (a), $f(x_n) = 1/(1/n)^2 = n^2$. Since $(n^2)$ is unbounded, it does not converge in $\\mathbb{R}$." },
            { stepText: "For part (b), let $x_n = 1/n$. Then $f(x_n) = 1/\\sqrt{1/n} = \\sqrt{n}$. This sequence is also unbounded and thus diverges." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex12b", title: "Exercise 12: Oscillating Limits", description: "Signum and sine of 1/x", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12 (c & d)", content: "Show that the following limits do not exist.\n(c) $\\lim_{x\\to 0} (x + \\text{sgn}(x))$\n(d) $\\lim_{x\\to 0} \\sin(1/x^2)$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (c)", content: "**Goal: Find two sequences with different limits.**", interactiveSteps: [
            { stepText: "Let $f(x) = x + \\text{sgn}(x)$." },
            { prompt: "If $x_n = 1/n$, what does $f(x_n)$ converge to?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "1/n + 1 approaches 1." }, { id: "B", text: "0", isCorrect: false, explanation: "sgn(1/n) = 1." }], stepText: "With $x_n = 1/n$, $f(x_n) = 1/n + 1 \to 1$." },
            { stepText: "If we choose $y_n = -1/n$, then $y_n \to 0$. $f(y_n) = -1/n - 1 \to -1$." },
            { stepText: "Since the sequences have different limits, the function limit does not exist." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (d)", content: "**Goal: Oscillate $\\sin(1/x^2)$.**", interactiveSteps: [
            { stepText: "We want $1/x_n^2 = n\\pi \implies x_n = 1/\\sqrt{n\\pi}$. Here $f(x_n) = \\sin(n\\pi) = 0 \to 0$." },
            { stepText: "We want $1/y_n^2 = \\pi/2 + 2n\\pi \implies y_n = 1/\\sqrt{\\pi/2 + 2n\\pi}$. Here $f(y_n) = \\sin(\\pi/2 + 2n\\pi) = 1 \to 1$." },
            { stepText: "Different subsequential limits mean no global limit exists." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex13", title: "Exercise 13: Scaling the Domain", description: "If f(x) -> L, then f(ax) -> L", icon: "Expand",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Suppose the function $f: \\mathbb{R} \\to \\mathbb{R}$ has limit $L$ at $0$, and let $a > 0$. \nIf $g: \\mathbb{R} \\to \\mathbb{R}$ is defined by $g(x) := f(ax)$, show that $\\lim_{x\\to 0} g(x) = L$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use sequential criterion.**", interactiveSteps: [
            { stepText: "Let $(x_n)$ be any sequence converging to $0$ with $x_n \\neq 0$." },
            { prompt: "Consider the sequence $(ax_n)$. What does it converge to?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "a * 0 = 0." }, { id: "B", text: "a", isCorrect: false, explanation: "x_n is going to 0." }], stepText: "By algebraic limit theorems for sequences, $(ax_n) \to a \\cdot 0 = 0$." },
            { stepText: "Also, since $a > 0$ and $x_n \\neq 0$, we have $ax_n \\neq 0$." },
            { stepText: "Since $f$ has limit $L$ at 0, and $(ax_n)$ is a valid sequence approaching 0, the sequential criterion says $f(ax_n) \to L$." },
            { stepText: "Since $g(x_n) = f(ax_n)$, we have $g(x_n) \to L$. This holds for all sequences, so $\\lim_{x\\to 0} g(x) = L$." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex14", title: "Exercise 14: Limit of a Square", description: "Information loss when squaring", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Let $c \\in \\mathbb{R}$ and let $f$ be such that $\\lim_{x\\to c} (f(x))^2 = L$.\n(a) Show that if $L=0$, then $\\lim_{x\\to c} f(x) = 0$.\n(b) Show by example that if $L \\neq 0$, then $f$ may not have a limit at $c$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Squeeze theorem on absolute values.**", interactiveSteps: [
            { stepText: "We are given $(f(x))^2 \to 0$. We want to show $f(x) \to 0$." },
            { prompt: "From Exercise 4.1.3, this is equivalent to showing what?", options: [{ id: "A", text: "$|f(x)| \to 0$", isCorrect: true, explanation: "Limits to 0 are equivalent for f and |f|." }, { id: "B", text: "$f(x)^2 \to 0$", isCorrect: false, explanation: "We already know that." }], stepText: "We need to show $|f(x)| \to 0$." },
            { stepText: "Notice that $|f(x)| = \\sqrt{(f(x))^2}$." },
            { stepText: "By the sequence theorems (limit of square root), if a positive sequence goes to 0, its square root goes to 0." },
            { stepText: "Applying the sequential criterion, $\\lim |f(x)| = \\sqrt{0} = 0$. Thus $f(x) \to 0$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Find a counterexample.**", interactiveSteps: [
            { stepText: "We need a function whose square is well-behaved, but the function itself jumps around." },
            { prompt: "What is a simple function that jumps between positive and negative values?", options: [{ id: "A", text: "$f(x) = \\text{sgn}(x)$", isCorrect: true, explanation: "sgn(x) is 1 for x>0, -1 for x<0. Its square is always 1." }, { id: "B", text: "$f(x) = x$", isCorrect: false, explanation: "x doesn't jump, it's continuous." }], stepText: "Let $f(x) = \\text{sgn}(x)$." },
            { stepText: "For $x \\neq 0$, $(f(x))^2 = (\\pm 1)^2 = 1$. Thus $\\lim_{x\\to 0} (f(x))^2 = 1$. Here $L=1 \\neq 0$." },
            { stepText: "But as shown before, $\\lim_{x\\to 0} \\text{sgn}(x)$ does not exist! Counterexample found." }
        ]}
      ]
    },
    {
      id: "les-4-1-3-ex15", title: "Exercise 15: Thomae-like Function", description: "x if rational, 0 if irrational", icon: "Grid3X3",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Let $f: \\mathbb{R} \\to \\mathbb{R}$ be defined by $f(x) := x$ if $x \\in \\mathbb{Q}$, and $f(x) = 0$ if $x \\notin \\mathbb{Q}$.\n(a) Show that $f$ has a limit at $x=0$.\n(b) Use a sequential argument to show that if $c \\neq 0$, $f$ does not have a limit at $c$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Squeeze the function.**", interactiveSteps: [
            { stepText: "Notice that for any $x$, $f(x)$ is either $x$ or $0$." },
            { prompt: "Because of this, what bounds can we put on the absolute value $|f(x)|$?", options: [{ id: "A", text: "$0 \\le |f(x)| \\le |x|$", isCorrect: true, explanation: "Since it takes the value 0 or x, its magnitude never exceeds |x|." }, { id: "B", text: "$|f(x)| = |x|$", isCorrect: false, explanation: "Not true for irrationals." }], stepText: "We have $0 \\le |f(x)| \\le |x|$." },
            { stepText: "Since $\\lim_{x\\to 0} 0 = 0$ and $\\lim_{x\\to 0} |x| = 0$, the Squeeze Theorem applies." },
            { stepText: "Therefore, $\\lim_{x\\to 0} |f(x)| = 0$, which implies $\\lim_{x\\to 0} f(x) = 0$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Density Theorem.**", interactiveSteps: [
            { stepText: "Let $c \\neq 0$. By the Density Theorem, there exists a sequence of rationals $(r_n) \to c$." },
            { stepText: "For this sequence, $f(r_n) = r_n \to c$." },
            { stepText: "Also by the Density Theorem, there exists a sequence of irrationals $(i_n) \to c$." },
            { stepText: "For this sequence, $f(i_n) = 0 \to 0$." },
            { stepText: "Since $c \\neq 0$, the two sequences yield different limits. Thus the function limit does not exist." }
        ]}
      ]
    }
  ]
};
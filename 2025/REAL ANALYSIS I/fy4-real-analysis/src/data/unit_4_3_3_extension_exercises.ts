import { Unit } from '../types';

export const UNIT_4_3_3: Unit = {
  id: "unit-4-3-3",
  title: "Extension Exercises",
  description: "Exercises 1-13: One-Sided and Infinite Limits",
  color: "duo-red",
  lessons: [
    {
      id: "les-4-3-3-ex1", title: "Exercise 1: Right-Hand Sequential Criterion", description: "Proving Theorem 4.3.2", icon: "ListOrdered",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Prove Theorem 4.3.2: $\\lim_{x \\to c^+} f(x) = L$ if and only if for every sequence $(x_n)$ converging to $c$ with $x_n > c$, the sequence $(f(x_n))$ converges to $L$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume the limit is L, prove the sequence converges.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x \\to c^+} f(x) = L$. Let $\\epsilon > 0$." },
            { stepText: "By definition, there exists $\\delta > 0$ such that $0 < x - c < \\delta \\implies |f(x) - L| < \\epsilon$." },
            { prompt: "Let $(x_n)$ be a sequence such that $x_n \\to c$ and $x_n > c$. What happens for large $n$?", options: [{ id: "A", text: "$0 < x_n - c < \\delta$", isCorrect: true, explanation: "Since $x_n \\to c$ and $x_n > c$, it eventually enters the right-hand $\\delta$-neighborhood." }, { id: "B", text: "$0 < |x_n - c| < \\epsilon$", isCorrect: false, explanation: "The sequence controls the inputs, which must satisfy the $\\delta$ bound." }], stepText: "There exists $K$ such that for $n \\ge K$, $0 < x_n - c < \\delta$." },
            { stepText: "Therefore, for $n \\ge K$, we have $|f(x_n) - L| < \\epsilon$." },
            { stepText: "This means $\\lim f(x_n) = L$. The backward direction follows by a similar contrapositive argument as in Theorem 4.1.8. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex2", title: "Exercise 2: One-Sided Existence", description: "A function with only one limit", icon: "SplitSquareHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Give an example of a function that has a right-hand limit but not a left-hand limit at a point." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct a piecewise function.**", interactiveSteps: [
            { stepText: "We need a function that behaves nicely on the right side of $0$, but oscillates wildly on the left side." },
            { prompt: "Which of the following piecewise functions works?", options: [{ id: "A", text: "$f(x) = x$ for $x > 0$, $f(x) = \\sin(1/x)$ for $x < 0$", isCorrect: true, explanation: "As $x \\to 0^+$, limit is 0. As $x \\to 0^-$, it oscillates and diverges." }, { id: "B", text: "$f(x) = \\text{sgn}(x)$", isCorrect: false, explanation: "sgn(x) has both a left and right limit, they just don't match." }], stepText: "Let $f(x) = x$ for $x > 0$, and $f(x) = \\sin(1/x)$ for $x < 0$." },
            { stepText: "From the right, $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^+} x = 0$." },
            { stepText: "From the left, $\\lim_{x \\to 0^-} f(x) = \\lim_{x \\to 0^-} \\sin(1/x)$, which does not exist." }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex3", title: "Exercise 3: Infinite Limit at Zero", description: "Proving a function blows up", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Let $f(x) := |x|^{-1/2}$ for $x \\neq 0$. Show that $\\lim_{x \\to 0^+} f(x) = \\lim_{x \\to 0^-} f(x) = +\\infty$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Find $\\delta$ for any given $\\alpha$.**", interactiveSteps: [
            { stepText: "Let $\\alpha > 0$ be given. We want $f(x) > \\alpha$." },
            { stepText: "This means $|x|^{-1/2} > \\alpha$." },
            { prompt: "Solve this inequality for $|x|$.", options: [{ id: "A", text: "$|x| < 1/\\alpha^2$", isCorrect: true, explanation: "Square both sides: $|x|^{-1} > \\alpha^2$. Take reciprocal: $|x| < 1/\\alpha^2$." }, { id: "B", text: "$|x| > 1/\\alpha^2$", isCorrect: false, explanation: "Taking the reciprocal flips the inequality sign." }], stepText: "We need $|x| < 1/\\alpha^2$." },
            { stepText: "Choose $\\delta = 1/\\alpha^2$. Then if $0 < x < \\delta$ (right limit) or $-\\delta < x < 0$ (left limit), we have $|x| < \\delta$." },
            { stepText: "This guarantees $f(x) > \\alpha$ in both cases. Thus both one-sided limits are $+\\infty$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex4", title: "Exercise 4: Infinity and Zero", description: "Relating f -> infinity to 1/f -> 0", icon: "ArrowDownUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Let $c \\in \\mathbb{R}$ and let $f$ be defined for $x \\in (c, \\infty)$ and $f(x) > 0$. \nShow that $\\lim_{x \\to c^+} f = \\infty$ if and only if $\\lim_{x \\to c^+} 1/f = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume $f \\to \\infty$, prove $1/f \\to 0$.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x \\to c^+} f = \\infty$. We want to show that for any $\\epsilon > 0$, $1/f(x) < \\epsilon$." },
            { prompt: "To use the definition of infinite limits, what target $\\alpha$ should we give to $f$?", options: [{ id: "A", text: "$\\alpha = 1/\\epsilon$", isCorrect: true, explanation: "If $f(x) > 1/\\epsilon$, then $1/f(x) < \\epsilon$." }, { id: "B", text: "$\\alpha = \\epsilon$", isCorrect: false, explanation: "This would mean $1/f(x) < 1/\\epsilon$, which doesn't prove the limit is 0." }], stepText: "Let $\\alpha = 1/\\epsilon$. Since $f \\to \\infty$, there is a $\\delta > 0$ such that $0 < x - c < \\delta \\implies f(x) > 1/\\epsilon$." },
            { stepText: "Since $f(x) > 0$, taking the reciprocal gives $1/f(x) < \\epsilon$. Thus $\\lim 1/f = 0$." }
        ]},
        { id: "s2", type: "proof", title: "Interactive Proof: Backward Direction", content: "**Goal: Assume $1/f \\to 0$, prove $f \\to \\infty$.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x \\to c^+} 1/f = 0$. Let $\\alpha > 0$ be given." },
            { stepText: "Choose $\\epsilon = 1/\\alpha$. There is a $\\delta > 0$ such that $0 < x - c < \\delta \\implies 1/f(x) < 1/\\alpha$." },
            { stepText: "Taking reciprocals (since all terms are positive) yields $f(x) > \\alpha$." },
            { stepText: "This proves $f \to \\infty$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex5", title: "Exercise 5: Evaluating Extensions", description: "Calculating limits at boundaries and infinity", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Evaluate the following limits, or show they do not exist:\n(a) $\\lim_{x \\to 1^+} \\frac{x}{x-1}$\n(b) $\\lim_{x \\to 1^-} \\frac{x}{x-1}$\n(c) $\\lim_{x \\to \\infty} \\frac{\\sqrt{x}-x}{\\sqrt{x}+x}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Parts (a) & (b)", content: "**Goal: Analyze the signs near 1.**", interactiveSteps: [
            { stepText: "For $\\frac{x}{x-1}$, as $x \\to 1$, the numerator approaches $1$." },
            { prompt: "As $x \\to 1^+$ (meaning $x > 1$), what does the denominator $x-1$ approach?", options: [{ id: "A", text: "$0$ from the positive side ($0^+$)", isCorrect: true, explanation: "If $x>1$, then $x-1 > 0$." }, { id: "B", text: "$0$ from the negative side ($0^-$)", isCorrect: false, explanation: "That would happen if $x<1$." }], stepText: "Since numerator is positive and denominator approaches $0^+$, the quotient grows to $+\\infty$. So (a) is $\\infty$." },
            { stepText: "As $x \\to 1^-$, $x-1 < 0$. The quotient is a positive over a tiny negative, yielding $-\\infty$. So (b) is $-\\infty$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (c)", content: "**Goal: Evaluate at infinity.**", interactiveSteps: [
            { stepText: "For $\\lim_{x \\to \\infty} \\frac{\\sqrt{x}-x}{\\sqrt{x}+x}$, divide the numerator and denominator by the highest power, $x$." },
            { stepText: "This yields $\\frac{x^{-1/2} - 1}{x^{-1/2} + 1}$." },
            { stepText: "As $x \\to \\infty$, $x^{-1/2} = 1/\\sqrt{x} \\to 0$." },
            { stepText: "The expression becomes $\\frac{0 - 1}{0 + 1} = -1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex6", title: "Exercise 6: Sequential Criterion for Infinity", description: "Proving Theorem 4.3.11", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Prove Theorem 4.3.11: $\\lim_{x \\to \\infty} f(x) = L$ if and only if for every sequence $(x_n)$ with $x_n \\to \\infty$, the sequence $(f(x_n))$ converges to $L$." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward", content: "**Goal: Translate definitions.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x \\to \\infty} f = L$. Let $(x_n)$ be a sequence such that $x_n \\to \\infty$." },
            { stepText: "Given $\\epsilon > 0$, there exists $K$ such that $x > K \\implies |f(x) - L| < \\epsilon$." },
            { prompt: "Since $x_n \\to \\infty$, what must happen eventually?", options: [{ id: "A", text: "There exists $N$ such that $n \\ge N \\implies x_n > K$", isCorrect: true, explanation: "Definition of infinite sequence limit." }, { id: "B", text: "There exists $N$ such that $n \\ge N \\implies x_n < \\epsilon$", isCorrect: false, explanation: "The sequence goes to infinity." }], stepText: "There exists $N$ such that for $n \\ge N$, $x_n > K$." },
            { stepText: "For these $n$, we have $x_n > K$, so $|f(x_n) - L| < \\epsilon$. Thus $f(x_n) \\to L$." }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex7", title: "Exercise 7: Order Preservation at Infinity", description: "Inequalities hold in the limit", icon: "AlignEndHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Suppose $f, g$ have limits in $\\mathbb{R}$ as $x \\to \\infty$, and $f(x) \\le g(x)$ for all $x \\in (a, \\infty)$. \nProve that $\\lim_{x \\to \\infty} f \\le \\lim_{x \\to \\infty} g$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the sequential criterion to transfer the problem to sequences.**", interactiveSteps: [
            { stepText: "Let $(x_n)$ be a sequence in $(a, \\infty)$ such that $x_n \\to \\infty$ (e.g., $x_n = a + n$)." },
            { prompt: "By the sequential criterion (Theorem 4.3.11), what do the sequences $(f(x_n))$ and $(g(x_n))$ converge to?", options: [{ id: "A", text: "$\\lim_{x \\to \\infty} f$ and $\\lim_{x \\to \\infty} g$", isCorrect: true, explanation: "They converge to the respective function limits." }, { id: "B", text: "They diverge.", isCorrect: false, explanation: "We are given that the function limits exist." }], stepText: "They converge to $L_f = \\lim_{x\\to\\infty} f$ and $L_g = \\lim_{x\\to\\infty} g$." },
            { stepText: "Since $f(x) \\le g(x)$ everywhere in the interval, we have $f(x_n) \\le g(x_n)$ for all $n$." },
            { stepText: "By Theorem 3.2.6 (Order Preservation for Sequences), $L_f \\le L_g$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex8", title: "Exercise 8: Inverting the Domain", description: "Limit at infinity equals right limit of 1/x at 0", icon: "RefreshCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Let $f$ be defined on $(0, \\infty)$. \nProve that $\\lim_{x \\to \\infty} f(x) = L$ if and only if $\\lim_{x \\to 0^+} f(1/x) = L$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Substitute variables carefully.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x \\to \\infty} f(x) = L$. For any $\\epsilon > 0$, there exists $K > 0$ such that $x > K \\implies |f(x) - L| < \\epsilon$." },
            { prompt: "Let $t = 1/x$. If $x > K > 0$, what inequality describes $t$?", options: [{ id: "A", text: "$0 < t < 1/K$", isCorrect: true, explanation: "Taking the reciprocal of positive numbers reverses the inequality." }, { id: "B", text: "$t > 1/K$", isCorrect: false, explanation: "Inequality must flip." }], stepText: "We have $0 < t < 1/K$." },
            { stepText: "Let $\\delta = 1/K$. Then $0 < t - 0 < \\delta \\implies 1/t > K$." },
            { stepText: "This implies $|f(1/t) - L| < \\epsilon$. This exactly means $\\lim_{t \\to 0^+} f(1/t) = L$." },
            { stepText: "The reverse logic holds identically by setting $K = 1/\\delta$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex9", title: "Exercise 9: Fast Decay", description: "If x f(x) has a limit, f(x) goes to 0", icon: "ArrowDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Show that if $f: (a, \\infty) \\to \\mathbb{R}$ is such that $\\lim_{x \\to \\infty} x f(x) = L$ where $L \\in \\mathbb{R}$, then $\\lim_{x \\to \\infty} f(x) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use algebraic limit theorems.**", interactiveSteps: [
            { stepText: "We are given that $g(x) = x f(x)$ has limit $L$." },
            { prompt: "How can we express $f(x)$ using $g(x)$ and $x$?", options: [{ id: "A", text: "$f(x) = \\frac{g(x)}{x}$", isCorrect: true, explanation: "Simply divide by x." }, { id: "B", text: "$f(x) = g(x) \\cdot x$", isCorrect: false, explanation: "That would be $x^2 f(x)$." }], stepText: "We can write $f(x) = g(x) \\cdot \\frac{1}{x}$." },
            { stepText: "We know $\\lim_{x\\to\\infty} g(x) = L$ and $\\lim_{x\\to\\infty} \\frac{1}{x} = 0$." },
            { stepText: "By the Product Rule for limits at infinity, $\\lim f(x) = L \\cdot 0 = 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex10", title: "Exercise 10: Infinite Sequential Criterion", description: "Proving Theorem 4.3.14", icon: "ChevronsUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Prove Theorem 4.3.14: $\\lim_{x \\to \\infty} f(x) = \\infty$ if and only if for every sequence $x_n \\to \\infty$, we have $f(x_n) \\to \\infty$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Translate bounds.**", interactiveSteps: [
            { stepText: "Forward: Assume $\\lim_{x \\to \\infty} f(x) = \\infty$. Given $\\alpha \\in \\mathbb{R}$, there exists $K$ such that $x > K \\implies f(x) > \\alpha$." },
            { stepText: "Let $x_n \\to \\infty$. Then there is an $N$ such that $n \\ge N \\implies x_n > K$." },
            { stepText: "For these $n$, $f(x_n) > \\alpha$. Thus $f(x_n) \\to \\infty$." },
            { prompt: "Backward (Contrapositive): If $\\lim f \\neq \\infty$, what exists?", options: [{ id: "A", text: "An $\\alpha$ where for any $K$, we can find $x > K$ with $f(x) \\le \\alpha$.", isCorrect: true, explanation: "Negation of the infinite limit definition." }, { id: "B", text: "An $\\alpha$ where $f(x) > \\alpha$ everywhere.", isCorrect: false, explanation: "That would mean it DOES go to infinity." }], stepText: "There exists $\\alpha$ such that for any $n \\in \\mathbb{N}$, there is $x_n > n$ with $f(x_n) \\le \\alpha$." },
            { stepText: "The sequence $(x_n) \\to \\infty$, but $(f(x_n))$ never passes $\\alpha$, so it doesn't go to $\\infty$. This proves the equivalence!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex11", title: "Exercise 11: Product of Finite and Infinite Limit", description: "L * infinity = infinity", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Suppose $\\lim_{x \\to c} f(x) = L$ where $L > 0$, and $\\lim_{x \\to c} g(x) = \\infty$. Show that $\\lim_{x \\to c} f(x)g(x) = \\infty$.\nIf $L=0$, show by example that this may fail." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bound f away from 0.**", interactiveSteps: [
            { stepText: "Since $\\lim f = L > 0$, there exists a neighborhood around $c$ where $f(x) > L/2$." },
            { stepText: "Let $\\alpha > 0$ be our target for the product. We need $f(x)g(x) > \\alpha$." },
            { prompt: "Since $f(x) > L/2$, what condition on $g(x)$ will guarantee the product is $> \\alpha$?", options: [{ id: "A", text: "$g(x) > 2\\alpha / L$", isCorrect: true, explanation: "Then $f(x)g(x) > (L/2) (2\\alpha/L) = \\alpha$." }, { id: "B", text: "$g(x) > \\alpha$", isCorrect: false, explanation: "If f(x) is a small fraction, alpha might not be reached." }], stepText: "We need $g(x) > 2\\alpha / L$." },
            { stepText: "Since $\\lim g = \\infty$, there is a neighborhood where this holds. In the intersection of these neighborhoods, $f(x)g(x) > \\alpha$." }
        ]},
        { id: "s2", type: "solution", title: "Counterexample for L=0", content: "**Goal: Find functions where f->0 and g->infinity.**", interactiveSteps: [
            { stepText: "Let $c = 0$, $f(x) = x^2$ and $g(x) = 1/x^2$." },
            { stepText: "Here, $f \to 0$ and $g \to \infty$ as $x \to 0$." },
            { stepText: "However, $f(x)g(x) = x^2 (1/x^2) = 1$. The limit is 1, not $\\infty$!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex12", title: "Exercise 12: Infinite Differences and Quotients", description: "Why infinity minus infinity is undefined", icon: "MinusSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Find functions $f, g$ on $(0, \\infty)$ such that $\\lim_{x \\to \\infty} f = \\infty$ and $\\lim_{x \\to \\infty} g = \\infty$, but $\\lim_{x \\to \\infty} (f-g) = 0$.\nCan you find such functions where $\\lim_{x \\to \\infty} f/g = 0$?" },
        { id: "s1", type: "solution", title: "Interactive Solution: Difference", content: "**Goal: Find functions that grow together.**", interactiveSteps: [
            { stepText: "We need $f$ and $g$ to go to infinity, but their difference to shrink." },
            { prompt: "Which pair works?", options: [{ id: "A", text: "$f(x) = x + 1/x$, $g(x) = x$", isCorrect: true, explanation: "Both go to infinity, difference is 1/x which goes to 0." }, { id: "B", text: "$f(x) = x^2$, $g(x) = x$", isCorrect: false, explanation: "Difference is $x^2-x \\to \\infty$." }], stepText: "Let $f(x) = x + 1/x$ and $g(x) = x$." },
            { stepText: "$\\lim(f-g) = \\lim(1/x) = 0$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Quotient", content: "**Goal: Find functions where $g$ outgrows $f$.**", interactiveSteps: [
            { stepText: "We need $f, g \to \\infty$ but $f/g \to 0$." },
            { stepText: "Let $f(x) = x$ and $g(x) = x^2$. Both go to infinity." },
            { stepText: "Their quotient is $f/g = x/x^2 = 1/x$, which converges to $0$ as $x \to \\infty$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-3-ex13", title: "Exercise 13: Composition at Infinity", description: "If g -> infinity and f(y) -> L", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Let $f, g$ be defined on $(a, \\infty)$. Suppose $\\lim_{x \\to \\infty} f = L$ and $\\lim_{x \\to \\infty} g = \\infty$. \nProve that $\\lim_{x \\to \\infty} f \\circ g = L$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Chain the limit definitions.**", interactiveSteps: [
            { stepText: "Let $\\epsilon > 0$. Since $\\lim_{y \\to \\infty} f(y) = L$, there exists $K_f$ such that $y > K_f \\implies |f(y) - L| < \\epsilon$." },
            { prompt: "Since $\\lim_{x \\to \\infty} g(x) = \\infty$, we can force $g(x)$ to be larger than ANY number. What number should we use as the target?", options: [{ id: "A", text: "$K_f$", isCorrect: true, explanation: "We want the output of g to trigger the epsilon condition for f." }, { id: "B", text: "$\\epsilon$", isCorrect: false, explanation: "g goes to infinity, not epsilon." }], stepText: "There exists $K_g$ such that $x > K_g \\implies g(x) > K_f$." },
            { stepText: "Therefore, if $x > K_g$, we have $y = g(x) > K_f$." },
            { stepText: "By the first statement, this implies $|f(g(x)) - L| < \\epsilon$." },
            { stepText: "This exactly proves $\\lim_{x \\to \\infty} f(g(x)) = L$. Goal reached!" }
        ]}
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_4_3_1: Unit = {
  id: "unit-4-3-1",
  title: "Extensions Theory",
  description: "One-Sided Limits and Infinite Limits at a Point",
  color: "duo-red",
  lessons: [
    {
      id: "les-4-3-1-d1", title: "Definition 4.3.1: One-Sided Limits", description: "Approaching from the left or right", icon: "ArrowRightLeft",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a function suddenly jumps at $x=0$, can we still meaningfully talk about what it approaches if we only look at positive numbers?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "By restricting our view to one side, we can define a 'one-sided limit'." }, { id: "B", text: "No", isCorrect: false, explanation: "The standard limit doesn't exist, but one-sided limits can." }] },
        { id: "s1", type: "theory", title: "Definition 4.3.1: One-Sided Limits", content: "**Right-hand limit:** Let $c$ be a cluster point of $A \\cap (c, \\infty)$. We write $\\lim_{x \\to c^+} f(x) = L$ if given $\\epsilon > 0$, there exists $\\delta > 0$ such that for all $x \\in A$ with $0 < x - c < \\delta$, then $|f(x) - L| < \\epsilon$.\n\n**Left-hand limit:** Let $c$ be a cluster point of $A \\cap (-\\infty, c)$. We write $\\lim_{x \\to c^-} f(x) = L$ if given $\\epsilon > 0$, there exists $\\delta > 0$ such that for all $x \\in A$ with $0 < c - x < \\delta$, then $|f(x) - L| < \\epsilon$.\n\n*Notice that we drop the absolute values around $x-c$ because the sign is determined by the side!*" },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "For a right-hand limit, we only consider points $x$ that are strictly ___ than $c$.", blankAnswer: "greater" }
      ]
    },
    {
      id: "les-4-3-1-t2", title: "Theorem 4.3.2: Sequential Criterion", description: "One-sided limits via sequences", icon: "ListOrdered",
      slides: [
        { id: "s0", type: "theory", title: "Sequential Criterion for One-Sided Limits", content: "**Theorem 4.3.2:** $\\lim_{x \\to c^+} f(x) = L$ if and only if for *every* sequence $(x_n)$ that converges to $c$ such that $x_n \\in A$ and **$x_n > c$** for all $n \\in \\mathbb{N}$, the sequence $(f(x_n))$ converges to $L$.\n\nA perfectly symmetric theorem holds for the left-hand limit, requiring $x_n < c$.\n\nThis gives us the ability to use all our sequence theorems (like divergence by finding two conflicting sequences) specifically on one side of a point." }
      ]
    },
    {
      id: "les-4-3-1-t3", title: "Theorem 4.3.3: Two-Sided Equivalence", description: "The bridge between one-sided and standard limits", icon: "Merge",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If the limit from the left is 5, and the limit from the right is 5, what is the standard two-sided limit?", options: [{ id: "A", text: "5", isCorrect: true, explanation: "If both sides agree, the standard limit exists and matches." }, { id: "B", text: "It might not exist", isCorrect: false, explanation: "They perfectly constrain the neighborhood." }] },
        { id: "s1", type: "theory", title: "Theorem 4.3.3", content: "**Theorem 4.3.3:** Let $c$ be a cluster point of both $A \\cap (c, \\infty)$ and $A \\cap (-\\infty, c)$. Then $\\lim_{x \\to c} f = L$ if and only if:\n\n$$\\lim_{x \\to c^+} f = L \\quad \\text{and} \\quad \\lim_{x \\to c^-} f = L$$\n\nIf the two one-sided limits exist but evaluate to different numbers, the standard two-sided limit DOES NOT exist." }
      ]
    },
    {
      id: "les-4-3-1-e4", title: "Examples 4.3.4: Jumps and Exponentials", description: "sgn(x) and e^(1/x)", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Example: The Signum Function", content: "Consider the signum function $\\text{sgn}(x)$ at $c = 0$.\nSince $\\text{sgn}(x) = 1$ for all $x > 0$, the right-hand limit $\\lim_{x \\to 0^+} \\text{sgn}(x) = 1$.\nSince $\\text{sgn}(x) = -1$ for all $x < 0$, the left-hand limit $\\lim_{x \\to 0^-} \\text{sgn}(x) = -1$.\nBecause $1 \\neq -1$, the two-sided limit $\\lim_{x \\to 0} \\text{sgn}(x)$ does not exist." },
        { id: "s1", type: "example_q", title: "Example: e^(1/x)", content: "Let $g(x) = e^{1/x}$ for $x \\neq 0$.\nAs $x \\to 0^-$, the exponent $1/x \\to -\\infty$. Thus $e^{1/x} \\to 0$. So $\\lim_{x \\to 0^-} e^{1/x} = 0$.\n\nHowever, as $x \\to 0^+$, the exponent $1/x \\to \\infty$. Thus $e^{1/x}$ grows without bound. The right hand limit does not exist in $\\mathbb{R}$." },
        { id: "s2", type: "numerical", title: "Limit Evaluation", content: "Evaluate $\\lim_{x \\to 0^-} \\frac{1}{e^{1/x} + 1}$. (Remember $e^{1/x} \\to 0$ from the left)", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-4-3-1-d5", title: "Definition 4.3.5: Infinite Limits", description: "When functions blow up", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If we say a limit 'equals' $\\infty$, does that mean $\\infty$ is a real number?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "It is just a convenient notation to describe a specific type of divergence (growing without bound)." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Infinity is not in the set of real numbers." }] },
        { id: "s1", type: "theory", title: "Definition 4.3.5: Infinite Limits", content: "Let $c$ be a cluster point of $A$. \n\nWe say $f$ **tends to $\\infty$** as $x \\to c$, and write $\\lim_{x \\to c} f = \\infty$, if for every $\\alpha \\in \\mathbb{R}$, there exists $\\delta > 0$ such that for all $x \\in A$ with $0 < |x - c| < \\delta$, then $f(x) > \\alpha$.\n\nWe write $\\lim_{x \\to c} f = -\\infty$ if for every $\\beta \\in \\mathbb{R}$, there exists $\\delta > 0$ such that ... $f(x) < \\beta$." },
        { id: "s2", type: "example_q", title: "Example: 1/x^2", content: "Prove $\\lim_{x \\to 0} \\frac{1}{x^2} = \\infty$.\nGiven any $\\alpha > 0$, let $\\delta = \\frac{1}{\\sqrt{\\alpha}}$. \nIf $0 < |x| < \\delta$, then $x^2 < \\delta^2 = \\frac{1}{\\alpha}$. \nTaking reciprocals, $\\frac{1}{x^2} > \\alpha$. Thus the limit is $\\infty$." }
      ]
    },
    {
      id: "les-4-3-1-t7", title: "Theorem 4.3.7: Squeeze for Infinity", description: "Pushing functions to infinity", icon: "ChevronsUp",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.3.7: Squeeze Theorem Analogue", content: "**Theorem:** Let $f(x) \\le g(x)$ for all $x \\in A, x \\neq c$.\n\n(a) If $\\lim_{x \\to c} f = \\infty$, then $\\lim_{x \\to c} g = \\infty$.\n(b) If $\\lim_{x \\to c} g = -\\infty$, then $\\lim_{x \\to c} f = -\\infty$.\n\n*Intuition:* If the 'smaller' function blows up to positive infinity, it acts as a bulldozer, pushing the 'larger' function up to positive infinity as well." },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Show $g(x) > \\alpha$ for any $\\alpha$.**", interactiveSteps: [
            { stepText: "Let $\\alpha \\in \\mathbb{R}$ be given. We know $\\lim f = \\infty$." },
            { prompt: "By definition of infinite limit for $f$, what exists?", options: [{ id: "A", text: "A $\\delta > 0$ such that $0 < |x-c| < \\delta \\implies f(x) > \\alpha$", isCorrect: true, explanation: "Standard definition." }, { id: "B", text: "An $M$ such that $f(x) < M$", isCorrect: false, explanation: "It's unbounded, so no such M exists." }], stepText: "There exists $\\delta > 0$ such that $0 < |x-c| < \\delta \\implies f(x) > \\alpha$." },
            { stepText: "We are given that $f(x) \\le g(x)$ for all $x \\neq c$." },
            { stepText: "Therefore, in that same $\\delta$-neighborhood, $\\alpha < f(x) \\le g(x)$, meaning $g(x) > \\alpha$." },
            { stepText: "Since $\\alpha$ was arbitrary, $\\lim g = \\infty$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-3-1-d8", title: "Definition 4.3.8: One-Sided Infinite Limits", description: "Vertical Asymptotes", icon: "ArrowUpRight",
      slides: [
        { id: "s0", type: "theory", title: "One-Sided Infinite Limits", content: "We can combine one-sided limits and infinite limits to perfectly describe vertical asymptotes.\n\n$\\lim_{x \\to c^+} f = \\infty$ means: for every $\\alpha \\in \\mathbb{R}$, there exists $\\delta > 0$ such that $0 < x - c < \\delta \\implies f(x) > \\alpha$.\n\nFor example, $g(x) = 1/x$. \nAs $x \\to 0^+$, $1/x > 0$ and grows unbounded, so $\\lim_{x \\to 0^+} 1/x = \\infty$.\nAs $x \\to 0^-$, $1/x < 0$ and grows negatively, so $\\lim_{x \\to 0^-} 1/x = -\\infty$." },
        { id: "s1", type: "fill_in_blank", title: "Concept Check", content: "If a function approaches $\\infty$ from the left and $-\\infty$ from the right, the two-sided limit does not ___.", blankAnswer: "exist" }
      ]
    }
  ]
};
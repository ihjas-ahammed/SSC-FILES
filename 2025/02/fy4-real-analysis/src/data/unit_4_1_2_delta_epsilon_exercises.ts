import { Unit } from '../types';

export const UNIT_4_1_2: Unit = {
  id: "unit-4-1-2",
  title: "Delta-Epsilon Exercises",
  description: "Exercises 1-8: Linear and Quadratic Limits",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-2-ex1", title: "Exercise 1: Bounding x^2 - 1", description: "Finding delta for a specific epsilon", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Determine a condition on $|x - 1|$ that will assure that:\n(a) $|x^2 - 1| < 1/2$\n(b) $|x^2 - 1| < 1/10^{-3}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Factor and bound the coefficient.**", interactiveSteps: [
            { stepText: "We want to bound $|x^2 - 1| = |x - 1||x + 1|$." },
            { stepText: "First, let's establish a preliminary bound. Assume $|x - 1| < 1$. Then $-1 < x - 1 < 1$, which means $0 < x < 2$." },
            { prompt: "If $0 < x < 2$, what is an upper bound for $|x + 1|$?", options: [{ id: "A", text: "3", isCorrect: true, explanation: "If x < 2, then x + 1 < 3. Since x > 0, |x+1| < 3." }, { id: "B", text: "2", isCorrect: false, explanation: "x itself is bounded by 2, but we need x+1." }], stepText: "Thus, $|x + 1| < 3$." },
            { stepText: "Now, $|x^2 - 1| = |x - 1||x + 1| < 3|x - 1|$." },
            { stepText: "We want this to be $< 1/2$. So we need $3|x - 1| < 1/2$, which means $|x - 1| < 1/6$." },
            { stepText: "To ensure both our preliminary bound ($<1$) and our final bound ($<1/6$) hold, we take the minimum: $\\delta = \\min(1, 1/6) = 1/6$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Apply the same logic for a generic epsilon.**", interactiveSteps: [
            { stepText: "Using the same preliminary bound, if $|x - 1| < 1$, then $|x^2 - 1| < 3|x - 1|$." },
            { prompt: "If we want $|x^2 - 1| < \\epsilon$, what should we bound $|x - 1|$ by?", options: [{ id: "A", text: "$\\epsilon/3$", isCorrect: true, explanation: "Then 3|x-1| < 3(e/3) = e." }, { id: "B", text: "$3\\epsilon$", isCorrect: false, explanation: "That would make the error larger." }], stepText: "We need $|x - 1| < \\epsilon / 3$." },
            { stepText: "For (b), $\\epsilon = 10^{-3}$. We need $|x - 1| < 10^{-3} / 3$." },
            { stepText: "Thus, the condition is $|x - 1| < \\min(1, 10^{-3}/3) = 10^{-3}/3$." }
        ]}
      ]
    },
    {
      id: "les-4-1-2-ex2", title: "Exercise 2: Bounding square roots", description: "Finding delta for root functions", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Determine a condition on $|x - 4|$ that will assure that:\n(a) $|\\sqrt{x} - 2| < 1/2$\n(b) $|\\sqrt{x} - 2| < 10^{-2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use the conjugate trick.**", interactiveSteps: [
            { stepText: "We want to bound $|\\sqrt{x} - 2|$. Multiply and divide by the conjugate: $\\sqrt{x} + 2$." },
            { prompt: "What does $|\\sqrt{x} - 2|$ become?", options: [{ id: "A", text: "$\\frac{|x - 4|}{\\sqrt{x} + 2}$", isCorrect: true, explanation: "The difference of squares yields x - 4 on top." }, { id: "B", text: "$|x - 4|(\\sqrt{x} + 2)$", isCorrect: false, explanation: "The conjugate goes in the denominator." }], stepText: "It becomes $\\frac{|x - 4|}{\\sqrt{x} + 2}$." },
            { stepText: "Since $\\sqrt{x} \\ge 0$, the denominator $\\sqrt{x} + 2 \\ge 2$." },
            { stepText: "Therefore, $\\frac{1}{\\sqrt{x} + 2} \\le \\frac{1}{2}$. This means $|\\sqrt{x} - 2| \\le \\frac{1}{2} |x - 4|$." },
            { stepText: "For part (a), we want this $< 1/2$. So $\\frac{1}{2}|x - 4| < 1/2 \\implies |x - 4| < 1$." },
            { stepText: "For part (b), we want this $< 10^{-2}$. So $\\frac{1}{2}|x - 4| < 10^{-2} \\implies |x - 4| < 2 \\times 10^{-2}$." }
        ]}
      ]
    },
    {
      id: "les-4-1-2-ex3", title: "Exercise 3: Distance Limit", description: "Equivalence of f(x) -> L and |f(x) - L| -> 0", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Let $c$ be a cluster point of $A \\subseteq \\mathbb{R}$ and let $f: A \\to \\mathbb{R}$. \nProve that $\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to c} |f(x) - L| = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Compare the definitions.**", interactiveSteps: [
            { stepText: "Let's write out the definition for $\\lim_{x\\to c} f(x) = L$. For any $\\epsilon > 0$, there exists $\\delta > 0$ such that if $0 < |x - c| < \\delta$, then $|f(x) - L| < \\epsilon$." },
            { stepText: "Now, let's write out the definition for $\\lim_{x\\to c} |f(x) - L| = 0$." },
            { prompt: "Let $g(x) = |f(x) - L|$. What is the condition for $\\lim g(x) = 0$?", options: [{ id: "A", text: "$||f(x) - L| - 0| < \\epsilon$", isCorrect: true, explanation: "Substitute g(x) and L=0 into the standard definition." }, { id: "B", text: "$|f(x) - L| = 0$", isCorrect: false, explanation: "Limits are about being < epsilon, not exactly 0." }], stepText: "It requires $||f(x) - L| - 0| < \\epsilon$." },
            { stepText: "But $||f(x) - L| - 0|$ is exactly $|f(x) - L|$." },
            { stepText: "Since the two inequality conditions ($|f(x) - L| < \\epsilon$) are algebraically identical, the statements are perfectly equivalent. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-2-ex4", title: "Exercise 4: Shifting the Limit", description: "Evaluating limits at 0 instead of c", icon: "MoveHorizontal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Let $f: \\mathbb{R} \\to \\mathbb{R}$ and let $c \\in \\mathbb{R}$. Show that $\\lim_{x\\to c} f(x) = L$ if and only if $\\lim_{x\\to 0} f(x+c) = L$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Change of variables.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x\\to c} f(x) = L$. Then for any $\\epsilon > 0$, there is a $\\delta > 0$ such that $0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$." },
            { stepText: "We want to prove a limit as a variable approaches 0. Let's introduce a new variable $h$." },
            { prompt: "To make $h \\to 0$ equivalent to $x \\to c$, how should we define $h$?", options: [{ id: "A", text: "$h = x - c$", isCorrect: true, explanation: "If x approaches c, then x-c approaches 0." }, { id: "B", text: "$h = x + c$", isCorrect: false, explanation: "If x approaches c, x+c approaches 2c." }], stepText: "Let $h = x - c$. Note that $x = h + c$." },
            { stepText: "Substitute this into our delta condition: $0 < |h| < \\delta$." },
            { stepText: "Substitute this into our epsilon condition: $|f(h + c) - L| < \\epsilon$." },
            { stepText: "This is exactly the definition of $\\lim_{h\\to 0} f(h+c) = L$. The reverse direction works exactly the same by substituting $x = h+c$ backwards. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-2-ex5", title: "Exercise 5: Squeezing a Quadratic", description: "Proving x^2 -> c^2 on an interval", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Let $I := (0, a)$ where $a > 0$, and let $g(x) := x^2$ for $x \\in I$. For any points $x, c \\in I$, show that $|g(x) - c^2| \\le 2a|x-c|$. \nUse this to prove $\\lim_{x\\to c} x^2 = c^2$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Factor and bound.**", interactiveSteps: [
            { stepText: "We have $|g(x) - c^2| = |x^2 - c^2| = |x - c||x + c|$." },
            { prompt: "Since both $x$ and $c$ belong to the interval $(0, a)$, what is an upper bound for $|x + c|$?", options: [{ id: "A", text: "$2a$", isCorrect: true, explanation: "Since x < a and c < a, x+c < 2a." }, { id: "B", text: "$a^2$", isCorrect: false, explanation: "We are adding, not multiplying." }], stepText: "Since $x, c \\in (0, a)$, $|x + c| = x + c < a + a = 2a$." },
            { stepText: "Therefore, $|x^2 - c^2| \\le 2a|x - c|$." },
            { stepText: "To prove the limit, let $\\epsilon > 0$." },
            { stepText: "We need $|x^2 - c^2| < \\epsilon$. Based on our bound, it suffices to make $2a|x - c| < \\epsilon$." },
            { stepText: "Thus, choosing $\\delta = \\epsilon / (2a)$ guarantees that if $0 < |x - c| < \\delta$, then $|x^2 - c^2| < 2a(\\epsilon/2a) = \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-2-ex6", title: "Exercise 6: Lipschitz Condition", description: "Bounded slope implies limit", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Let $I$ be an interval in $\\mathbb{R}$, let $f: I \\to \\mathbb{R}$, and let $c \\in I$. Suppose there exist constants $K$ and $L$ such that $|f(x) - L| \\le K|x-c|$ for $x \\in I$. \nShow that $\\lim_{x\\to c} f(x) = L$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Generalize the previous exercise.**", interactiveSteps: [
            { stepText: "We are given the condition $|f(x) - L| \\le K|x-c|$." },
            { stepText: "Let $\\epsilon > 0$ be given. We need to find a $\\delta > 0$ such that $|x-c| < \\delta \\implies |f(x) - L| < \\epsilon$." },
            { prompt: "Based on the inequality, what is a natural choice for $\\delta$?", options: [{ id: "A", text: "$\\delta = \\epsilon / K$", isCorrect: true, explanation: "Then K|x-c| < K(e/K) = e." }, { id: "B", text: "$\\delta = K \\epsilon$", isCorrect: false, explanation: "That would yield an upper bound of K^2 epsilon." }], stepText: "Choose $\\delta = \\epsilon / K$." },
            { stepText: "If $0 < |x - c| < \\delta$, then $|f(x) - L| \\le K|x - c| < K(\\epsilon/K) = \\epsilon$." },
            { stepText: "This completely satisfies the limit definition. Goal reached!" }
        ]},
        { id: "s2", type: "theory", title: "Lipschitz Continuity", content: "A function satisfying $|f(x) - f(c)| \le K|x - c|$ is said to be **Lipschitz continuous** at $c$.\n\nAs this exercise shows, a Lipschitz condition provides an immediate, linear $\\delta$ bound ($\\delta = \\epsilon/K$), making limit proofs trivial." }
      ]
    },
    {
      id: "les-4-1-2-ex7", title: "Exercise 7: Limit of Cubes", description: "Proving x^3 -> c^3", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Show that $\\lim_{x\\to c} x^3 = c^3$ for any $c \\in \\mathbb{R}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Factor the difference of cubes and bound it.**", interactiveSteps: [
            { stepText: "We want to bound $|x^3 - c^3|$. Factor it: $|x - c| |x^2 + cx + c^2|$." },
            { stepText: "We need a preliminary bound to control the quadratic term. Let's assume $|x - c| < 1$." },
            { prompt: "If $|x - c| < 1$, what is an upper bound on $|x|$?", options: [{ id: "A", text: "$|c| + 1$", isCorrect: true, explanation: "By the Triangle Inequality, |x| - |c| <= |x-c| < 1." }, { id: "B", text: "$|c|$", isCorrect: false, explanation: "x could be slightly larger than c." }], stepText: "We have $|x| < |c| + 1$." },
            { stepText: "Now bound the quadratic term: $|x^2 + cx + c^2| \\le |x|^2 + |c||x| + |c|^2$." },
            { stepText: "Substitute the bound for $|x|$: $\\le (|c|+1)^2 + |c|(|c|+1) + |c|^2$. Let's call this entire constant $M$." },
            { stepText: "So $|x^3 - c^3| \\le M|x - c|$. By choosing $\\delta = \\min(1, \\epsilon/M)$, we ensure $|x^3 - c^3| < \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-2-ex8", title: "Exercise 8: Limit of Square Root", description: "Proving root x -> root c", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Show that $\\lim_{x\\to c} \\sqrt{x} = \\sqrt{c}$ for any $c > 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the conjugate trick generally.**", interactiveSteps: [
            { stepText: "We want to bound $|\\sqrt{x} - \\sqrt{c}|$. Multiply by the conjugate $\\sqrt{x} + \\sqrt{c}$ over itself." },
            { stepText: "This gives $\\frac{|x - c|}{\\sqrt{x} + \\sqrt{c}}$." },
            { prompt: "Since $x > 0$ and $c > 0$, what is a safe lower bound for the denominator $\\sqrt{x} + \\sqrt{c}$?", options: [{ id: "A", text: "$\\sqrt{c}$", isCorrect: true, explanation: "Since $\\sqrt{x} > 0$, the sum is strictly greater than $\\sqrt{c}$." }, { id: "B", text: "$0$", isCorrect: false, explanation: "0 is a lower bound, but dividing by 0 doesn't help us find an upper bound for the fraction." }], stepText: "The denominator is strictly greater than $\\sqrt{c}$." },
            { stepText: "Therefore, the fraction is bounded above by $\\frac{|x - c|}{\\sqrt{c}}$." },
            { stepText: "We want this $< \\epsilon$, so we need $|x - c| < \\epsilon \\sqrt{c}$." },
            { stepText: "By choosing $\\delta = \\epsilon \\sqrt{c}$, we guarantee the condition holds. Goal reached!" }
        ]}
      ]
    }
  ]
};
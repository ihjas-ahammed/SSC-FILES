import { Unit } from '../types';

export const UNIT_3_2_3: Unit = {
  id: "unit-3-2-3",
  title: "Computation Exercises",
  description: "Exercises 1-12: Applying Limit Laws",
  color: "duo-red",
  lessons: [
    {
      id: "les-3-2-3-ex1", title: "Exercise 1: Basic Formulas", description: "Establish convergence or divergence", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "Establish convergence or divergence for:\n(a) $x_n = \\frac{n}{n+1}$\n(b) $x_n = \\frac{(-1)^n n}{n+1}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Divide by n.**", interactiveSteps: [
            { stepText: "Divide numerator and denominator by $n$: $\\frac{1}{1 + 1/n}$." },
            { prompt: "As $n \\to \\infty$, $1/n \\to 0$. What is the limit?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "1/(1+0) = 1." }, { id: "B", text: "0", isCorrect: false, explanation: "Numerator is 1." }], stepText: "Limit is 1. Convergent." },
            { stepText: "Part (b): The terms are $(-1)^n \\frac{n}{n+1}$. The absolute values go to 1." },
            { stepText: "The terms alternate near 1 and -1. Thus it diverges (two subsequential limits)." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex2", title: "Exercise 2: Divergent Combinations", description: "Sum and product of divergent sequences", icon: "Shuffle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "Give an example of two divergent sequences $X, Y$ such that:\n(a) $X + Y$ converges\n(b) $XY$ converges" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Cancel the divergence.**", interactiveSteps: [
            { stepText: "(a) Let $X = (n)$ and $Y = (-n)$. Both diverge." },
            { prompt: "What is $X + Y$?", options: [{ id: "A", text: "(0)", isCorrect: true, explanation: "n + (-n) = 0." }, { id: "B", text: "(2n)", isCorrect: false, explanation: "Addition." }], stepText: "Sum is (0), which converges to 0." },
            { stepText: "(b) Let $X = ((-1)^n)$ and $Y = ((-1)^n)$. Both oscillate." },
            { stepText: "Product $XY = ((-1)^{2n}) = (1)$, which converges to 1." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex3", title: "Exercise 3: Dependent Convergence", description: "If X and X+Y converge, does Y?", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "Show that if $X$ and $X+Y$ are convergent, then $Y$ is convergent." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Isolate Y algebraically.**", interactiveSteps: [
            { stepText: "We can write $Y = (X + Y) - X$." },
            { prompt: "Use Theorem 3.2.3(a). Since $(X+Y)$ and $X$ converge...", options: [{ id: "A", text: "Their difference converges", isCorrect: true, explanation: "Algebraic limit theorem." }, { id: "B", text: "Their product diverges", isCorrect: false, explanation: "No." }], stepText: "Thus $Y$ converges." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex4", title: "Exercise 4: Non-zero Limit", description: "If X converges to non-zero and XY converges...", icon: "Divide",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "Show that if $X$ converges to $x \\ne 0$ and $XY$ converges, then $Y$ converges." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Isolate Y.**", interactiveSteps: [
            { stepText: "Write $Y = (XY)/X$." },
            { prompt: "Can we use the quotient rule?", options: [{ id: "A", text: "Yes, because limit of X is non-zero", isCorrect: true, explanation: "Division is safe if denominator limit is non-zero." }, { id: "B", text: "No, X might have zero terms", isCorrect: false, explanation: "If limit is non-zero, terms are eventually non-zero. Tail converges." }], stepText: "By quotient theorem (applied to tail if needed), $Y$ converges." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex5", title: "Exercise 5: Power Sequence", description: "Show 2^n diverges", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Show that sequence $(2^n)$ is not convergent." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show unbounded.**", interactiveSteps: [
            { stepText: "Assume it converges. Then it must be bounded (Theorem 3.2.2)." },
            { prompt: "But $2^n > n$ for all $n$ (Bernoulli). Is $(n)$ bounded?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Archimedean property." }, { id: "B", text: "Yes", isCorrect: false, explanation: "False." }], stepText: "Since $(n)$ is unbounded, $(2^n)$ is unbounded. Thus divergent. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex6", title: "Exercise 6: Specific Limits", description: "Calculate limits using theorems", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Find the limits of:\n(a) $(2 + 1/n)^2$\n(b) $\\frac{(-1)^n}{n+2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply theorems.**", interactiveSteps: [
            { stepText: "(a) $\\lim(2 + 1/n) = 2 + 0 = 2$. By product rule, $\\lim((2+1/n)^2) = 2^2 = 4$." },
            { stepText: "(b) $|\\frac{(-1)^n}{n+2}| = \\frac{1}{n+2} < \\frac{1}{n}$. Since $1/n \\to 0$, absolute value $\\to 0$. Thus sequence $\\to 0$." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex7", title: "Exercise 7: Bounded x Null", description: "Product of bounded and zero-convergent", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "If $(b_n)$ is bounded and $\\lim(a_n) = 0$, show $\\lim(a_n b_n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bound the product.**", interactiveSteps: [
            { stepText: "Since $(b_n)$ is bounded, $|b_n| \\le M$ for all $n$." },
            { stepText: "Then $|a_n b_n - 0| = |a_n||b_n| \\le M|a_n|$." },
            { prompt: "Since $a_n \\to 0$, $M|a_n| \\to 0$. Use Theorem 3.1.10.", options: [{ id: "A", text: "Limit is 0", isCorrect: true, explanation: "Comparison." }, { id: "B", text: "Limit is M", isCorrect: false, explanation: "M is a constant bound." }], stepText: "Thus $a_n b_n \\to 0$." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex8", title: "Exercise 8: Variable Exponent", description: "Limit of (1 + 1/n)^n approx", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Explain why we cannot use limit laws directly on $((1+1/n)^n)$." },
        { id: "s1", type: "theory", title: "Variable Number of Factors", content: "We know $\\lim(A_1 A_2 \\dots A_k) = \\lim A_1 \\dots \\lim A_k$ for a **fixed** $k$.\n\nIn $(1+1/n)^n$, the number of factors $n$ grows to infinity. We cannot say the limit is $(1)(1)\\dots(1) = 1$. The small excesses accumulate." }
      ]
    },
    {
      id: "les-3-2-3-ex9", title: "Exercise 9: Root Conjugate", description: "Limit of sqrt(n+1) - sqrt(n)", icon: "Minus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $y_n = \\sqrt{n+1} - \\sqrt{n}$. Show that $(\\sqrt{n} y_n)$ converges." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Simplify term.**", interactiveSteps: [
            { stepText: "$y_n = \\frac{1}{\\sqrt{n+1} + \\sqrt{n}}$." },
            { stepText: "Then $\\sqrt{n} y_n = \\frac{\\sqrt{n}}{\\sqrt{n+1} + \\sqrt{n}} = \\frac{1}{\\sqrt{1+1/n} + 1}$." },
            { prompt: "Take limit.", options: [{ id: "A", text: "1/2", isCorrect: true, explanation: "1 / (1 + 1)." }, { id: "B", text: "0", isCorrect: false, explanation: "Denominator is approx 2." }], stepText: "Limit is 1/2." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex10", title: "Exercise 10: Difference of Roots", description: "Limits of sqrt(n^2+n) - n", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Find limit of $\\sqrt{n^2+n} - n$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Conjugate.**", interactiveSteps: [
            { stepText: "Multiply by $\\frac{\\sqrt{n^2+n}+n}{\\sqrt{n^2+n}+n}$." },
            { stepText: "Numerator: $(n^2+n) - n^2 = n$." },
            { stepText: "Denominator: $\\sqrt{n^2(1+1/n)} + n = n\\sqrt{1+1/n} + n = n(\\sqrt{1+1/n} + 1)$." },
            { stepText: "Fraction: $\\frac{n}{n(\\sqrt{1+1/n} + 1)} = \\frac{1}{\\sqrt{1+1/n} + 1}$." },
            { stepText: "Limit is $1/(1+1) = 1/2$." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex11", title: "Exercise 11: Complex Exponents", description: "Limit of (n+1)^(1/ln(n+1))", icon: "Code",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Find $\\lim (3^n)^{1/2n}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Simplify exponents.**", interactiveSteps: [
            { stepText: "$(3^n)^{1/2n} = 3^{n/2n} = 3^{1/2}$." },
            { stepText: "This is a constant sequence $\\sqrt{3}$." },
            { stepText: "Limit is $\\sqrt{3}$." }
        ]}
      ]
    },
    {
      id: "les-3-2-3-ex12", title: "Exercise 12: Ratio Limit", description: "Sum of powers", icon: "Percent",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "If $0 < a < b$, determine $\\lim \\frac{a^{n+1} + b^{n+1}}{a^n + b^n}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Divide by dominant term.**", interactiveSteps: [
            { stepText: "Since $b > a$, $b^n$ dominates. Divide top and bottom by $b^n$." },
            { stepText: "$\\frac{a(a/b)^n + b}{(a/b)^n + 1}$." },
            { prompt: "Since $0 < a/b < 1$, what is $\\lim(a/b)^n$?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "Geometric decay." }, { id: "B", text: "1", isCorrect: false, explanation: "No." }], stepText: "Expression goes to $\\frac{a(0) + b}{0 + 1} = b$. Limit is $b$." }
        ]}
      ]
    }
  ]
};
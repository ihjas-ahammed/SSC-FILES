import { Unit } from '../types';

export const UNIT_3_1_4: Unit = {
  id: "unit-3-1-4",
  title: "Proof Exercises",
  description: "Exercises 10-18: Rigorous Convergence Proofs",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-4-ex10", title: "Exercise 10: Tail Positivity", description: "If limit > 0, terms eventually > 0", icon: "Check",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Prove that if $\\lim(x_n) = x$ and $x > 0$, then there exists a natural number $M$ such that $x_n > 0$ for all $n \\ge M$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Pick a specific epsilon.**", interactiveSteps: [
            { stepText: "We know terms get arbitrarily close to $x$. We want to force them to be positive." },
            { prompt: "Choose $\\epsilon$ based on $x$ to keep the neighborhood entirely positive.", options: [{ id: "A", text: "$\\epsilon = x/2$", isCorrect: true, explanation: "Or just x. Anything <= x works to keep the lower bound > 0 (or >= 0)." }, { id: "B", text: "$\\epsilon = 2x$", isCorrect: false, explanation: "x - 2x = -x, which includes negatives." }], stepText: "Let $\\epsilon = x/2 > 0$." },
            { stepText: "There exists $M$ such that for $n \\ge M$, $|x_n - x| < x/2$." },
            { stepText: "This implies $x - x/2 < x_n < x + x/2$. Thus $x_n > x/2 > 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex11", title: "Exercise 11: Difference of Reciprocals", description: "Showing 1/n - 1/(n+1) → 0", icon: "Minus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Show that $\\lim(\\frac{1}{n} - \\frac{1}{n+1}) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Simplify and bound.**", interactiveSteps: [
            { stepText: "Simplify the expression: $\\frac{1}{n} - \\frac{1}{n+1} = \\frac{n+1 - n}{n(n+1)} = \\frac{1}{n(n+1)}$." },
            { prompt: "Bound this term.", options: [{ id: "A", text: "$< 1/n^2$", isCorrect: true, explanation: "Actually $< 1/n$ is simpler and sufficient." }, { id: "B", text: "$< 1/n$", isCorrect: true, explanation: "$n(n+1) > n$, so fraction < 1/n." }], stepText: "Since $0 < \\frac{1}{n(n+1)} < \\frac{1}{n}$ and $1/n \\to 0$, the limit is 0 by Squeeze Theorem (or direct definition). Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex12", title: "Exercise 12: Root Difference", description: "Rationalizing sqrt(n^2+1) - n", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Show that $\\lim(\\sqrt{n^2+1} - n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Multiply by conjugate.**", interactiveSteps: [
            { stepText: "Multiply by $\\frac{\\sqrt{n^2+1} + n}{\\sqrt{n^2+1} + n}$." },
            { stepText: "Numerator becomes $(n^2+1) - n^2 = 1$." },
            { stepText: "Denominator is $\\sqrt{n^2+1} + n > n + n = 2n$." },
            { stepText: "So term is $< 1/(2n)$. Since $1/(2n) \\to 0$, the limit is 0." }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex13", title: "Exercise 13: Powers of 1/3", description: "Showing 1/3^n → 0", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Show that $\\lim(1/3^n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use 3^n > n.**", interactiveSteps: [
            { stepText: "We know $3^n > n$ for all $n$ (Bernoulli or Induction)." },
            { prompt: "Thus $1/3^n$ is less than...", options: [{ id: "A", text: "$1/n$", isCorrect: true, explanation: "Reciprocal reverses inequality." }, { id: "B", text: "$n$", isCorrect: false, explanation: "Incorrect." }], stepText: "$0 < 1/3^n < 1/n$. Since $1/n \\to 0$, limit is 0." }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex14", title: "Exercise 14: Limit of nb^n", description: "Polynomial vs Exponential", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Let $0 < b < 1$. Show that $\\lim(nb^n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use Binomial Theorem on $1/b$.**", interactiveSteps: [
            { stepText: "Let $b = 1/(1+a)$ with $a > 0$." },
            { stepText: "$1/b^n = (1+a)^n = 1 + na + \\frac{n(n-1)}{2}a^2 + \\dots > \\frac{n(n-1)}{2}a^2$ (for $n \\ge 2$)." },
            { stepText: "So $b^n < \\frac{2}{n(n-1)a^2}$." },
            { stepText: "Thus $nb^n < \\frac{2n}{n(n-1)a^2} = \\frac{2}{(n-1)a^2}$." },
            { stepText: "As $n \\to \\infty$, RHS $\\to 0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex15", title: "Exercise 15: Root of 2n", description: "Limit of (2n)^(1/n)", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Show that $\\lim((2n)^{1/n}) = 1$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use properties of nth roots.**", interactiveSteps: [
            { stepText: "Rewrite $(2n)^{1/n} = 2^{1/n} n^{1/n}$." },
            { prompt: "We know $\\lim(c^{1/n}) = 1$ and $\\lim(n^{1/n}) = 1$.", options: [{ id: "A", text: "Product of limits is limit of product", isCorrect: true, explanation: "If A -> 1 and B -> 1, AB -> 1." }, { id: "B", text: "Sum of limits", isCorrect: false, explanation: "We are multiplying." }], stepText: "Thus limit is $1 \\cdot 1 = 1$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex16", title: "Exercise 16: Factorial vs Square", description: "n^2/n! → 0", icon: "BarChart",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Show that $\\lim(n^2/n!) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Simplify terms.**", interactiveSteps: [
            { stepText: "For $n \\ge 3$, $n! = n(n-1)(n-2)\\dots$" },
            { stepText: "$\\frac{n^2}{n!} = \\frac{n}{n!} \\cdot n = \\frac{1}{(n-1)!} \\cdot n$ - this approach is messy. Let's expand $n!$." },
            { stepText: "$\\frac{n^2}{n(n-1)(n-2)\\dots} = \\frac{n}{(n-1)(n-2)\\dots} = \\frac{1}{(1-1/n)(n-2)\\dots}$." },
            { stepText: "Better: For $n \\ge 4$, $n! > n^3$. So $n^2/n! < 1/n$. Limit is 0." }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex17", title: "Exercise 17: Factorial vs 2^n", description: "2^n/n! → 0", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "Show that $\\lim(2^n/n!) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bounding the tail.**", interactiveSteps: [
            { stepText: "Let $x_n = 2^n/n!$. Then $x_{n+1}/x_n = 2/(n+1)$." },
            { prompt: "For $n \ge 2$, $x_{n+1}/x_n \le 2/3$. This makes it...", options: [{ id: "A", text: "Contractive / Geometric", isCorrect: true, explanation: "Terms shrink by factor 2/3." }, { id: "B", text: "Constant", isCorrect: false, explanation: "No." }], stepText: "Since terms shrink geometrically, limit is 0." }
        ]}
      ]
    },
    {
      id: "les-3-1-4-ex18", title: "Exercise 18: Limit Squeeze", description: "If limit > 0, bound terms away from 0", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "If $\\lim(x_n) = x > 0$, show there exists $K$ such that for $n \\ge K$, $\\frac{1}{2}x < x_n < 2x$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Choose epsilon.**", interactiveSteps: [
            { stepText: "Let $\\epsilon = x/2$." },
            { stepText: "Then $x - x/2 < x_n < x + x/2$ for large $n$." },
            { prompt: "Simplify.", options: [{ id: "A", text: "$x/2 < x_n < 3x/2$", isCorrect: true, explanation: "This satisfies the condition since 3x/2 < 2x." }, { id: "B", text: "$0 < x_n < x$", isCorrect: false, explanation: "No." }], stepText: "Since $3x/2 < 2x$, the condition holds. Goal reached!" }
        ]}
      ]
    }
  ]
};
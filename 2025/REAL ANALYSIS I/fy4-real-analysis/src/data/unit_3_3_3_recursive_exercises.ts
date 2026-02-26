import { Unit } from '../types';

export const UNIT_3_3_3: Unit = {
  id: "unit-3-3-3",
  title: "Recursive Exercises",
  description: "Exercises 9-16: Limits of Recursive Definitions",
  color: "duo-green",
  lessons: [
    {
      id: "les-3-3-3-ex9", title: "Exercise 9: Sup Limit", description: "Increasing sequence in a set", icon: "ArrowUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Let $A$ be infinite subset of $\\mathbb{R}$ bounded above. Let $u = \\sup A$. Show there exists increasing sequence in $A$ converging to $u$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Construct sequence.**", interactiveSteps: [
            { stepText: "Pick $x_1 \\in A$. Pick $x_2 \\in A$ such that $\\max(x_1, u-1/2) < x_2 \\le u$." },
            { stepText: "Inductively pick $x_n$ such that $\\max(x_{n-1}, u - 1/n) < x_n \\le u$." },
            { stepText: "This ensures increasing and converges to $u$." }
        ]}
      ]
    },
    {
      id: "les-3-3-3-ex10", title: "Exercise 10: Sum Convergence", description: "1/(n+1) + ... + 1/2n", icon: "Plus",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "Let $y_n = \\frac{1}{n+1} + \\dots + \\frac{1}{2n}$. Show convergent." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Increasing & Bounded.**", interactiveSteps: [
            { stepText: "$y_{n+1} - y_n = \\frac{1}{2n+1} + \\frac{1}{2n+2} - \\frac{1}{n+1} = \\frac{1}{2n+1} - \\frac{1}{2n+2} > 0$." },
            { stepText: "Bounded above by $n \\cdot \\frac{1}{n+1} < 1$. Converges." }
        ]}
      ]
    },
    {
      id: "les-3-3-3-ex11", title: "Exercise 11: Sum of Squares Reciprocal", description: "Sum 1/k^2", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "Let $x_n = \\sum_{k=1}^n 1/k^2$. Show convergence." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use comparison.**", interactiveSteps: [
            { stepText: "$1/k^2 < 1/(k(k-1)) = 1/(k-1) - 1/k$ for $k \\ge 2$." },
            { stepText: "Sum telescopes to $1 + (1 - 1/n) < 2$. Bounded and increasing." }
        ]}
      ]
    },
    {
      id: "les-3-3-3-ex12", title: "Exercise 12: Specific Limits", description: "Powers and sums", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "Find limits of $(1+1/n)^{n+1}$ etc." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use e.**", interactiveSteps: [
            { stepText: "$(1+1/n)^{n+1} = (1+1/n)^n (1+1/n) \\to e \\cdot 1 = e$." }
        ]}
      ]
    },
    {
      id: "les-3-3-3-ex13", title: "Exercise 13: Calculation", description: "Sqrt(2) calculation", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "Calculate $\\sqrt{2}$ using Example 3.3.5." },
        { id: "s1", type: "numerical", title: "Result", content: "After 4 iterations from $s_1=2$, what is the first decimal digit?", numericAnswer: 4, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-3-3-ex14", title: "Exercise 14: Calculation", description: "Sqrt(5)", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Calculate $\\sqrt{5}$." }
      ]
    },
    {
      id: "les-3-3-3-ex15", title: "Exercise 15: Euler Number", description: "Computing e_n", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Compute terms of $e_n$ for n=2, 4, 8." }
      ]
    },
    {
      id: "les-3-3-3-ex16", title: "Exercise 16: Calculator", description: "Large n for e", icon: "Monitor",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Compute e for n=1000." }
      ]
    }
  ]
};
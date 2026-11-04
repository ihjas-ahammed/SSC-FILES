import { Unit } from '../types';

export const UNIT_3_1_3: Unit = {
  id: "unit-3-1-3",
  title: "Limit Exercises",
  description: "Exercises 1-9: Finding Formulae and Limits",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-3-ex1", title: "Exercise 1: Sequence Terms", description: "Writing out terms", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "The sequence $(x_n)$ is defined by the following formulas. Write the first five terms in each case:\n(a) $x_n := 1 + (-1)^n$\n(b) $x_n := (-1)^n / n$\n(c) $x_n := \\frac{1}{n(n+1)}$\n(d) $x_n := \\frac{1}{n^2 + 2}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Compute values for n=1 to 5.**", interactiveSteps: [
            { stepText: "$x_1 = 1 + (-1)^1 = 1 - 1 = 0$." },
            { prompt: "What is $x_2$?", options: [{ id: "A", text: "2", isCorrect: true, explanation: "$1 + (-1)^2 = 1 + 1 = 2$." }, { id: "B", text: "0", isCorrect: false, explanation: "Even power of -1 is 1." }], stepText: "So the sequence starts $0, 2, 0, 2, 0$." },
            { stepText: "Part (b): $x_1 = -1/1 = -1$. $x_2 = 1/2$. $x_3 = -1/3$. Sequence: $-1, 1/2, -1/3, 1/4, -1/5$." },
            { stepText: "Part (c): $x_1 = 1/(1\\cdot 2) = 1/2$. $x_2 = 1/(2\\cdot 3) = 1/6$. Sequence: $1/2, 1/6, 1/12, 1/20, 1/30$." },
            { stepText: "Part (d): $x_1 = 1/(1+2) = 1/3$. $x_2 = 1/(4+2) = 1/6$. Sequence: $1/3, 1/6, 1/11, 1/18, 1/27$." }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex2", title: "Exercise 2: Pattern Recognition", description: "Finding the formula", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "The first few terms of a sequence $(x_n)$ are given below. Assume the pattern persists. Give a formula for the $n$-th term.\n(a) $5, 7, 9, 11, \\dots$\n(b) $1/2, -1/4, 1/8, -1/16, \\dots$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Identify arithmetic/geometric progression.**", interactiveSteps: [
            { stepText: "The difference between consecutive terms is $7-5=2$, $9-7=2$. This is an arithmetic sequence." },
            { prompt: "The formula is of the form $an + b$. Since the step is 2, $a=2$. What is $b$ if $x_1 = 5$?", options: [{ id: "A", text: "3", isCorrect: true, explanation: "$2(1) + 3 = 5$." }, { id: "B", text: "5", isCorrect: false, explanation: "$2(1) + 5 = 7$." }], stepText: "So $x_n = 2n + 3$." },
            { stepText: "Part (b): The signs alternate, so we need $(-1)^{n+1}$ (since first term is positive). The denominators are powers of 2." },
            { stepText: "Thus $x_n = \\frac{(-1)^{n+1}}{2^n}$." }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex3", title: "Exercise 3: Inductive Definitions", description: "Computing recursive terms", icon: "RefreshCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "List the first five terms of the following inductively defined sequences:\n(a) $x_1 := 1, \\quad x_{n+1} := 3x_n + 1$\n(b) $y_1 := 2, \\quad y_{n+1} := \\frac{1}{2}(y_n + 2/y_n)$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part (a)", content: "**Goal: Apply the rule iteratively.**", interactiveSteps: [
            { stepText: "$x_1 = 1$." },
            { stepText: "$x_2 = 3(1) + 1 = 4$." },
            { prompt: "What is $x_3$?", options: [{ id: "A", text: "13", isCorrect: true, explanation: "$3(4) + 1 = 13$." }, { id: "B", text: "12", isCorrect: false, explanation: "Don't forget +1." }], stepText: "$x_3 = 13$." },
            { stepText: "$x_4 = 3(13) + 1 = 40$." },
            { stepText: "$x_5 = 3(40) + 1 = 121$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part (b)", content: "**Goal: Compute approximate roots.**", interactiveSteps: [
            { stepText: "$y_1 = 2$." },
            { stepText: "$y_2 = 0.5(2 + 2/2) = 0.5(3) = 1.5$." },
            { stepText: "$y_3 = 0.5(1.5 + 2/1.5) = 0.5(1.5 + 1.333) \\approx 1.4167$." },
            { stepText: "Notice these values are rapidly approaching $\\sqrt{2} \\approx 1.414$." }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex4", title: "Exercise 4: Limit of b/n", description: "Proving b/n goes to 0", icon: "ArrowDown",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "For any $b \\in \\mathbb{R}$, prove that $\\lim(b/n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Find $K$ for $\\epsilon$.**", interactiveSteps: [
            { stepText: "We want $|b/n - 0| < \\epsilon$, which is $|b|/n < \\epsilon$." },
            { prompt: "If $b=0$, is it true?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "The sequence is constant 0." }, { id: "B", text: "No", isCorrect: false, explanation: "0 < epsilon is true." }], stepText: "If $b \\ne 0$, we need $n > |b|/\\epsilon$." },
            { stepText: "By the Archimedean Property, choose $K > |b|/\\epsilon$. Then for $n \\ge K$, $|b/n| < \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex5", title: "Exercise 5: Algebraic Limits", description: "Using definitions for rational limits", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "Use the definition of limit to establish:\n(a) $\\lim \\frac{n}{n^2+1} = 0$\n(b) $\\lim \\frac{2n}{n+1} = 2$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (b)", content: "**Goal: Bound $|x_n - 2|$.**", interactiveSteps: [
            { stepText: "$|\\frac{2n}{n+1} - 2| = |\\frac{2n - 2(n+1)}{n+1}| = |\\frac{2n - 2n - 2}{n+1}| = |\\frac{-2}{n+1}| = \\frac{2}{n+1}$." },
            { prompt: "We want $\\frac{2}{n+1} < \\epsilon$. What condition on $n$ works?", options: [{ id: "A", text: "$n > 2/\\epsilon - 1$", isCorrect: true, explanation: "Rearranging the inequality." }, { id: "B", text: "$n > \\epsilon/2$", isCorrect: false, explanation: "Check algebra." }], stepText: "Or simpler: $\\frac{2}{n+1} < \\frac{2}{n}$. We want $\\frac{2}{n} < \\epsilon$, so $n > 2/\\epsilon$." },
            { stepText: "Let $K > 2/\\epsilon$. Then for $n \\ge K$, $|x_n - 2| < \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex6", title: "Exercise 6: More Limits", description: "Establishing limits for various forms", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "Show that:\n(a) $\\lim \\frac{1}{\\sqrt{n+7}} = 0$\n(b) $\\lim \\frac{2n}{n+2} = 2$" },
        { id: "s1", type: "proof", title: "Interactive Proof: Part (a)", content: "**Goal: Bound the term.**", interactiveSteps: [
            { stepText: "$|\\frac{1}{\\sqrt{n+7}} - 0| = \\frac{1}{\\sqrt{n+7}}$." },
            { stepText: "Note that $\\sqrt{n+7} > \\sqrt{n}$. So $\\frac{1}{\\sqrt{n+7}} < \\frac{1}{\\sqrt{n}}$." },
            { prompt: "To get $\\frac{1}{\\sqrt{n}} < \\epsilon$, what must $n$ be?", options: [{ id: "A", text: "$n > 1/\\epsilon^2$", isCorrect: true, explanation: "Square both sides." }, { id: "B", text: "$n > 1/\\epsilon$", isCorrect: false, explanation: "Forgot square root." }], stepText: "Let $K > 1/\\epsilon^2$. Then for $n \\ge K$, the limit holds." }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex7", title: "Exercise 7: Logarithmic Limit", description: "Using ln(n+1)", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "Let $x_n := 1/\\ln(n+1)$ for $n \\in \\mathbb{N}$. Show $\\lim(x_n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use properties of ln.**", interactiveSteps: [
            { stepText: "We want $1/\\ln(n+1) < \\epsilon$, or $\\ln(n+1) > 1/\\epsilon$." },
            { prompt: "Exponentiate both sides. What is the condition on $n$?", options: [{ id: "A", text: "$n+1 > e^{1/\\epsilon}$", isCorrect: true, explanation: "Exponential is increasing." }, { id: "B", text: "$n > 1/\\epsilon$", isCorrect: false, explanation: "ln(x) grows much slower than x." }], stepText: "We need $n > e^{1/\\epsilon} - 1$." },
            { stepText: "This establishes existence of $K$." }
        ]},
        { id: "s2", type: "numerical", title: "Find K", content: "If $\\epsilon = 0.5$ (so $1/\\epsilon = 2$), roughly what is $K$? ($e^2 \\approx 7.39$)", numericAnswer: 7, numericTolerance: 1 }
      ]
    },
    {
      id: "les-3-1-3-ex8", title: "Exercise 8: Limit of Absolute Values", description: "Relation between lim xn and lim |xn|", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "Prove that $\\lim(x_n) = 0$ if and only if $\\lim(|x_n|) = 0$. \nGive an example to show that convergence of $(|x_n|)$ does not imply convergence of $(x_n)$ generally." },
        { id: "s1", type: "proof", title: "Interactive Proof: Equivalence to 0", content: "**Goal: Compare definitions.**", interactiveSteps: [
            { stepText: "Definition of $\\lim(x_n)=0$: $\\forall \\epsilon > 0, \\exists K, |x_n - 0| < \\epsilon$." },
            { stepText: "Definition of $\\lim(|x_n|)=0$: $\\forall \\epsilon > 0, \\exists K, ||x_n| - 0| < \\epsilon$." },
            { prompt: "Are $|x_n|$ and $||x_n||$ the same?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Absolute value is non-negative." }, { id: "B", text: "No", isCorrect: false, explanation: "Check properties." }], stepText: "Since $||x_n|| = |x_n|$, the conditions are identical." },
            { stepText: "Counterexample for general limit: Let $x_n = (-1)^n$. Then $|x_n| = 1 \\to 1$. But $x_n$ diverges." }
        ]}
      ]
    },
    {
      id: "les-3-1-3-ex9", title: "Exercise 9: Square Root Limit", description: "Limit of sqrt(xn)", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "Show that if $x_n \\ge 0$ for all $n$ and $\\lim(x_n) = 0$, then $\\lim(\\sqrt{x_n}) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Relate epsilons.**", interactiveSteps: [
            { stepText: "We want $|\\sqrt{x_n} - 0| < \\epsilon$, i.e., $\\sqrt{x_n} < \\epsilon$." },
            { prompt: "Square both sides. What condition on $x_n$ do we need?", options: [{ id: "A", text: "$x_n < \\epsilon^2$", isCorrect: true, explanation: "Squaring preserves inequality for non-negatives." }, { id: "B", text: "$x_n < \\epsilon$", isCorrect: false, explanation: "Only if epsilon=1." }], stepText: "We need $x_n < \\epsilon^2$." },
            { stepText: "Since $x_n \\to 0$, for any $\\delta > 0$ (let $\\delta = \\epsilon^2$), there exists $K$ such that $x_n < \\delta$. This proves it." }
        ]}
      ]
    }
  ]
};
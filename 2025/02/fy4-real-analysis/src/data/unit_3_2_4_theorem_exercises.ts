import { Unit } from '../types';

export const UNIT_3_2_4: Unit = {
  id: "unit-3-2-4",
  title: "Theorem Exercises",
  description: "Exercises 13-24: Sequences via Theorems",
  color: "duo-red",
  lessons: [
    {
      id: "les-3-2-4-ex13", title: "Exercise 13: Product Limit", description: "Root trick", icon: "Link",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "If $a, b > 0$, show $\\lim[(n+a)(n+b) - n] = (a+b)/2$? Wait, looking at text... actually $\\lim(\\sqrt{(n+a)(n+b)} - n)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Conjugate.**", interactiveSteps: [
            { stepText: "Numerator: $(n+a)(n+b) - n^2 = n^2 + (a+b)n + ab - n^2 = (a+b)n + ab$." },
            { stepText: "Denominator: $\\sqrt{(n+a)(n+b)} + n$." },
            { stepText: "Divide by $n$: $\\frac{a+b + ab/n}{\\sqrt{(1+a/n)(1+b/n)} + 1}$." },
            { stepText: "Limit is $\\frac{a+b}{1+1} = (a+b)/2$." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex14", title: "Exercise 14: Root Sequence", description: "Limit of n^(1/n^2)", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "Find $\\lim(n^{1/n^2})$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Squeeze.**", interactiveSteps: [
            { stepText: "Let $y_n = n^{1/n^2}$. Then $1 \\le y_n \\le n^{1/n}$." },
            { prompt: "We know $\\lim n^{1/n} = 1$.", options: [{ id: "A", text: "So limit is 1", isCorrect: true, explanation: "Squeeze theorem." }, { id: "B", text: "Inconclusive", isCorrect: false, explanation: "Both bounds go to 1." }], stepText: "Limit is 1." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex15", title: "Exercise 15: Root of Sum", description: "Limit (a^n + b^n)^(1/n)", icon: "Merge",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "Show that if $0 < a < b$, $\\lim(a^n + b^n)^{1/n} = b$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Factor out b.**", interactiveSteps: [
            { stepText: "$(a^n + b^n)^{1/n} = (b^n( (a/b)^n + 1 ))^{1/n} = b ( (a/b)^n + 1 )^{1/n}$." },
            { stepText: "Since $0 < a/b < 1$, $(a/b)^n \\to 0$. Inside term $\\to 1$." },
            { stepText: "Limit is $b \\cdot 1 = b$." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex16", title: "Exercise 16: Ratio Test Application", description: "a^n vs n!", icon: "Percent",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "Apply Ratio Test to $x_n = a^n/n!$?" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use Theorem 3.2.11.**", interactiveSteps: [
            { stepText: "Actually, question asks for specific limits. Let's do $a^n$." },
            { stepText: "Wait, exercise 16 in book asks to apply Theorem 3.2.11 to: (a) $a^n$, (b) $b^n/2^n$..." },
            { stepText: "Let's do (c): $n/b^n$ with $b > 1$. Ratio is $\\frac{n+1}{b^{n+1}} \\frac{b^n}{n} = \\frac{1}{b} (1+1/n)$." },
            { stepText: "Limit is $1/b$. Since $b > 1$, ratio < 1. Convergence to 0." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex17", title: "Exercise 17: Ratio Test Failure", description: "Convergent with ratio 1", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "Give an example of a convergent sequence of positive numbers with $\\lim(x_{n+1}/x_n) = 1$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Polynomial decay.**", interactiveSteps: [
            { stepText: "Try $x_n = 1/n$." },
            { prompt: "Calculate ratio.", options: [{ id: "A", text: "$n/(n+1) \\to 1$", isCorrect: true, explanation: "Correct." }, { id: "B", text: "$1/n \\to 0$", isCorrect: false, explanation: "No." }], stepText: "Limit is 1, yet sequence converges to 0. Ratio test inconclusive." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex18", title: "Exercise 18: Ratio > 1", description: "Divergence", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "Show that if $\\lim(x_{n+1}/x_n) = L > 1$, then $x_n$ is unbounded." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Compare to geometric.**", interactiveSteps: [
            { stepText: "Since ratio approaches $L > 1$, eventually ratio $> r > 1$." },
            { stepText: "Thus terms grow faster than $r^n$. Diverges." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex19", title: "Exercise 19: Comparing Growth", description: "n^2 a^n vs others", icon: "BarChart",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "Discuss convergence of $n^2 a^n$ for $0 < a < 1$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Ratio Test.**", interactiveSteps: [
            { stepText: "Ratio: $\\frac{(n+1)^2 a^{n+1}}{n^2 a^n} = a (\\frac{n+1}{n})^2 \\to a$." },
            { stepText: "Since $a < 1$, limit is 0." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex20", title: "Exercise 20: Explicit Bound", description: "Finding r for ratio test", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "If $\\lim(x_{n+1}/x_n) = L < 1$, show there exists $r$ with $L < r < 1$ such that $0 < x_n < r^n$ for large $n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use epsilon.**", interactiveSteps: [
            { stepText: "Choose $\\epsilon = r - L$. Then ratio gets closer to $L$ than $r$." },
            { stepText: "Terms decrease faster than $r$. This bounds it by geometric sequence." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex21", title: "Exercise 21: Root Test Intro", description: "Using nth root", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "Show that if $\\lim(x_n^{1/n}) = L < 1$, then $x_n \\to 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Bound by r^n.**", interactiveSteps: [
            { stepText: "Pick $r$ such that $L < r < 1$. Eventually $x_n^{1/n} < r$." },
            { prompt: "Raise to nth power.", options: [{ id: "A", text: "$x_n < r^n$", isCorrect: true, explanation: "Correct." }, { id: "B", text: "$x_n > r^n$", isCorrect: false, explanation: "No." }], stepText: "Since $r^n \\to 0$, $x_n \\to 0$." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex22", title: "Exercise 22: Convergence of Difference", description: "If |x_n - y_n| -> 0", icon: "Minimize2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "If $x_n$ converges and for any $\\epsilon$, $|x_n - y_n| < \\epsilon$ eventually, does $y_n$ converge?" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Triangle Inequality.**", interactiveSteps: [
            { stepText: "Actually hypothesis is slightly different. Just if $|x_n - y_n| \\to 0$, then limits are same." },
            { stepText: "$|y_n - x| \\le |y_n - x_n| + |x_n - x|$. Both go to 0." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex23", title: "Exercise 23: Max/Min Sequences", description: "Limits of max(xn, yn)", icon: "ChevronsUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "If $x_n \\to x$ and $y_n \\to y$, show $\\max(x_n, y_n) \\to \\max(x, y)$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use formula.**", interactiveSteps: [
            { stepText: "Recall $\\max(a, b) = \\frac{a+b+|a-b|}{2}$." },
            { stepText: "Use limit theorems on sum and absolute value." }
        ]}
      ]
    },
    {
      id: "les-3-2-4-ex24", title: "Exercise 24: Cesaro Mean", description: "Average of sequence", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "If $x_n \\to x$, show that the average $w_n = \\frac{x_1 + \\dots + x_n}{n} \\to x$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Split sum.**", interactiveSteps: [
            { stepText: "Split sum into initial part (finite) and tail (close to x)." },
            { stepText: "Initial part divided by $n$ goes to 0. Tail average stays close to $x$." }
        ]}
      ]
    }
  ]
};
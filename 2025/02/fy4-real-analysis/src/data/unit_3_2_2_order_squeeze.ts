import { Unit } from '../types';

export const UNIT_3_2_2: Unit = {
  id: "unit-3-2-2",
  title: "Order & Squeeze",
  description: "Inequalities and Limits",
  color: "duo-red",
  lessons: [
    {
      id: "les-3-2-2-t4", title: "Theorem 3.2.4: Non-negative Limits", description: "Limits preserve sign", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "theory", title: "Non-negative Limits", content: "**Theorem 3.2.4:** If $(x_n)$ converges to $x$ and $x_n \\ge 0$ for all $n$, then $x \\ge 0$.\n\n*Note:* Strict inequality is NOT preserved. If $x_n > 0$, the limit can be 0 (e.g., $1/n$). But it cannot be negative." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Proof by contradiction.**", interactiveSteps: [
            { stepText: "Assume $x < 0$. Let $\\epsilon = -x/2 > 0$ (or just $\\epsilon = -x$)." },
            { prompt: "Since $x_n \\to x$, for large $n$, $x_n$ is in $(x-\\epsilon, x+\\epsilon)$. If $\\epsilon = -x$, what is $x+\\epsilon$?", options: [{ id: "A", text: "0", isCorrect: true, explanation: "$x + (-x) = 0$." }, { id: "B", text: "x", isCorrect: false, explanation: "No." }], stepText: "This implies $x_n < 0$. Contradiction to $x_n \\ge 0$. Thus $x \\ge 0$." }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Extension", content: "If $x_n \\le y_n$, then $\\lim x_n \\le \\lim$ ___.", blankAnswer: "y_n" }
      ]
    },
    {
      id: "les-3-2-2-t6", title: "Theorem 3.2.6: Bounds", description: "Limits stay in closed intervals", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 3.2.6", content: "**Theorem:** If $a \\le x_n \\le b$ for all $n$, then $a \\le \\lim(x_n) \\le b$.\n\nThis follows directly from the comparison theorem applied to constant sequences." }
      ]
    },
    {
      id: "les-3-2-2-t7", title: "Theorem 3.2.7: Squeeze Theorem", description: "The Sandwich Theorem", icon: "Minimize2",
      slides: [
        { id: "s0", type: "theory", title: "The Squeeze Theorem", content: "**Theorem 3.2.7:** Suppose $x_n \\le y_n \\le z_n$ for all $n$, and $\\lim(x_n) = \\lim(z_n) = L$. Then $\\lim(y_n) = L$.\n\nThis is essential for finding limits of oscillating or complex sequences by bounding them with simpler ones." },
        { id: "s1", type: "interactive_canvas", title: "Visualizing Squeeze", content: "Notice how the blue sequence is forced to converge to L because the red and green sequences pinch it.", interactiveCanvasId: "squeeze-theorem-canvas" },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "For the Squeeze Theorem to work, the upper and lower bounds must converge to the ___ limit.", blankAnswer: "same" }
      ]
    },
    {
      id: "les-3-2-2-e8", title: "Example 3.2.8: Divergence", description: "Oscillating sequences", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Divergence of (-1)^n", content: "Show that $X = ((-1)^n)$ is divergent." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Contradiction.**", interactiveSteps: [
            { stepText: "Assume $\\lim X = a$. Let $\\epsilon = 1$." },
            { prompt: "There exists $K$. For $n \\ge K$, $|(-1)^n - a| < 1$.", options: [{ id: "A", text: "True", isCorrect: true, explanation: "Definition of convergence." }, { id: "B", text: "False", isCorrect: false, explanation: "Assumption." }], stepText: "If $n$ is even, $|1 - a| < 1 \\implies 0 < a < 2$. If $n$ is odd, $|-1 - a| < 1 \\implies -2 < a < 0$." },
            { stepText: "No number $a$ can be both positive and negative. Contradiction!" }
        ]}
      ]
    },
    {
      id: "les-3-2-2-t9", title: "Theorem 3.2.9: Absolute Value", description: "|xn| convergence", icon: "ArrowLeftRight",
      slides: [
        { id: "s0", type: "theory", title: "Absolute Convergence", content: "**Theorem 3.2.9:** If $\\lim(x_n) = x$, then $\\lim(|x_n|) = |x|$.\n\n*Proof:* Use Reverse Triangle Inequality: $||x_n| - |x|| \\le |x_n - x|$." },
        { id: "s1", type: "quiz", title: "Converse?", content: "If $\\lim(|x_n|) = |x|$, does $\\lim(x_n) = x$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Example: (-1)^n -> |1|, but sequence diverges." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Only true if limit is 0." }] }
      ]
    },
    {
      id: "les-3-2-2-t11", title: "Theorem 3.2.11: Ratio Test", description: "Testing for null sequences", icon: "Percent",
      slides: [
        { id: "s0", type: "theory", title: "Ratio Test for Sequences", content: "**Theorem 3.2.11:** Let $(x_n)$ be a sequence of positive numbers such that $L = \\lim(x_{n+1}/x_n)$ exists. If $L < 1$, then $\\lim(x_n) = 0$.\n\n*Intuition:* Eventually, the sequence behaves like a geometric sequence with ratio $L < 1$, which decays to 0." },
        { id: "s1", type: "fill_in_blank", title: "Boundary Case", content: "The Ratio Test is inconclusive if $L = $ ___.", blankAnswer: "1" }
      ]
    },
    {
      id: "les-3-2-2-ex7", title: "Example: Ratio Test", description: "n/2^n convergence", icon: "TrendingDown",
      slides: [
        { id: "s0", type: "example_q", title: "Ratio Test Application", content: "Show that $\\lim(n/2^n) = 0$ using the Ratio Test." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute L.**", interactiveSteps: [
            { stepText: "$x_n = n/2^n$. Compute $x_{n+1}/x_n$." },
            { stepText: "$\\frac{n+1}{2^{n+1}} \\cdot \\frac{2^n}{n} = \\frac{n+1}{n} \\cdot \\frac{1}{2} = (1 + 1/n) \\cdot 1/2$." },
            { prompt: "What is the limit as $n \\to \\infty$?", options: [{ id: "A", text: "1/2", isCorrect: true, explanation: "1*1/2 = 0.5." }, { id: "B", text: "1", isCorrect: false, explanation: "1/2 factor remains." }], stepText: "Since $L = 1/2 < 1$, the limit is 0. Goal reached!" }
        ]}
      ]
    }
  ]
};
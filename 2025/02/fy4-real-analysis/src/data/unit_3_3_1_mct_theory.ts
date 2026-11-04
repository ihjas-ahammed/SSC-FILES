import { Unit } from '../types';

export const UNIT_3_3_1: Unit = {
  id: "unit-3-3-1",
  title: "MCT Theory",
  description: "Monotone Convergence Theorem and Applications",
  color: "duo-green",
  lessons: [
    {
      id: "les-3-3-1-d1", title: "Definition 3.3.1: Monotone Sequences", description: "Increasing and Decreasing", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a sequence never goes down, but sometimes stays flat, is it increasing?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Increasing includes non-decreasing ($x_{n+1} \\ge x_n$)." }, { id: "B", text: "No", isCorrect: false, explanation: "Strictly increasing is different." }] },
        { id: "s1", type: "theory", title: "Definition 3.3.1: Monotone", content: "**Definition:** A sequence $(x_n)$ is **increasing** if $x_1 \\le x_2 \\le \\dots \\le x_n \\le x_{n+1} \\le \\dots$.\n\nIt is **decreasing** if $x_1 \\ge x_2 \\ge \\dots \\ge x_n \\ge x_{n+1} \\ge \\dots$.\n\nA sequence is **monotone** if it is either increasing or decreasing." },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "A sequence that is strictly increasing is also ___.", blankAnswer: "monotone" }
      ]
    },
    {
      id: "les-3-3-1-t2", title: "Theorem 3.3.2: Monotone Convergence Theorem", description: "The most powerful convergence tool", icon: "Target",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If you keep walking uphill but there is a ceiling you cannot pass, what must happen?", options: [{ id: "A", text: "You must converge to a height below or at the ceiling.", isCorrect: true, explanation: "You can't go up forever without passing the bound." }, { id: "B", text: "You will eventually go down.", isCorrect: false, explanation: "Monotone increasing means never down." }] },
        { id: "s1", type: "theory", title: "Monotone Convergence Theorem (MCT)", content: "**Theorem 3.3.2:** A monotone sequence of real numbers is convergent if and only if it is bounded.\n\n*Specifically:*\n- If $(x_n)$ is increasing and bounded above, $\\lim(x_n) = \\sup\\{x_n\\}$.\n- If $(x_n)$ is decreasing and bounded below, $\\lim(x_n) = \\inf\\{x_n\\}$." },
        { id: "s2", type: "interactive_canvas", title: "MCT Visualized", content: "Toggle between bounded and unbounded monotone sequences to see why the bound forces convergence.", interactiveCanvasId: "monotone-convergence-canvas" },
        { id: "s3", type: "proof", title: "Interactive Proof: Increasing Case", content: "**Goal: Show limit is sup S.**", interactiveSteps: [
            { stepText: "Let $S = \\{x_n : n \\in \\mathbb{N}\\}$. Since bounded, let $x^* = \\sup S$." },
            { stepText: "Let $\\epsilon > 0$. Since $x^* - \\epsilon$ is not an upper bound, there exists $x_K$ such that $x^* - \\epsilon < x_K$." },
            { prompt: "Since sequence is increasing, for all $n \\ge K$, what is true?", options: [{ id: "A", text: "$x_n \\ge x_K$", isCorrect: true, explanation: "Terms only get larger." }, { id: "B", text: "$x_n \\le x_K$", isCorrect: false, explanation: "That's decreasing." }], stepText: "So $x^* - \\epsilon < x_K \\le x_n \\le x^* < x^* + \\epsilon$." },
            { stepText: "Thus $|x_n - x^*| < \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-3-1-e3", title: "Example 3.3.3: Divergence of Harmonic Series", description: "Proving unboundedness", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Harmonic Series", content: "Let $h_n = 1 + 1/2 + \\dots + 1/n$. Show it diverges." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show unbounded.**", interactiveSteps: [
            { stepText: "Sequence is clearly increasing." },
            { stepText: "Group terms: $1 + 1/2 + (1/3+1/4) + (1/5+\\dots+1/8) + \\dots$" },
            { prompt: "Each group $(1/2^{k-1}+1 \\dots 1/2^k)$ sums to at least...", options: [{ id: "A", text: "1/2", isCorrect: true, explanation: "Example: 1/3+1/4 > 1/4+1/4 = 1/2." }, { id: "B", text: "1", isCorrect: false, explanation: "No." }], stepText: "Since we can add infinitely many 1/2s, the sum is unbounded. By MCT, it diverges." }
        ]}
      ]
    },
    {
      id: "les-3-3-1-e4", title: "Example 3.3.4: Recursive Sequences", description: "Limit of y_n+1 = 1/4(2y_n + 3)", icon: "RefreshCw",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3.3.4", content: "Let $y_1 = 1, y_{n+1} = \\frac{1}{4}(2y_n + 3)$. Show convergence." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show monotone and bounded.**", interactiveSteps: [
            { stepText: "Calculate first terms: $1, 1.25, 1.375...$ Seems increasing." },
            { stepText: "Induction: if $y_k < y_{k+1}$, then $2y_k+3 < 2y_{k+1}+3$, so $y_{k+1} < y_{k+2}$. Increasing." },
            { stepText: "Bounded above by 2? If $y_k < 2$, then $y_{k+1} = 1/4(2y_k+3) < 1/4(4+3) < 2$. Bounded." },
            { stepText: "Limit $y = 1/4(2y+3) \\implies 4y = 2y+3 \\implies 2y=3 \\implies y=3/2$." }
        ]}
      ]
    },
    {
      id: "les-3-3-1-e5", title: "Example 3.3.5: Square Roots", description: "Computing sqrt(a)", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Babylonian Method", content: "Sequence $s_{n+1} = \\frac{1}{2}(s_n + a/s_n)$ converges to $\\sqrt{a}$." },
        { id: "s1", type: "theory", title: "Properties", content: "1. $s_n^2 \\ge a$ for $n \\ge 2$ (by AM-GM inequality on $s_n$ and $a/s_n$).\n2. Sequence is decreasing for $n \\ge 2$." },
        { id: "s2", type: "numerical", title: "Calculate", content: "Estimate $\\sqrt{2}$ starting with $s_1=2$. What is $s_2$?", numericAnswer: 1.5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-3-1-e6", title: "Example 3.3.6: Euler's Number", description: "e as limit of (1+1/n)^n", icon: "Zap",
      slides: [
        { id: "s0", type: "theory", title: "Defining e", content: "The sequence $e_n = (1 + 1/n)^n$ is increasing and bounded above (by 3).\n\nThus it converges to a number we call $e \\approx 2.718$." }
      ]
    }
  ]
};
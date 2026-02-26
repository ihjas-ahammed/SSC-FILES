import { Unit } from '../types';

export const UNIT_3_1_2: Unit = {
  id: "unit-3-1-2",
  title: "Convergence Examples",
  description: "Proving Convergence and Divergence",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-2-e6", title: "Examples 3.1.6: Basic Limits", description: "Proving 1/n → 0 and constants", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example: 1/n", content: "Prove that $\\lim(1/n) = 0$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Find $K$ for any $\\epsilon > 0$.**", interactiveSteps: [
            { stepText: "We want $|1/n - 0| < \\epsilon$, which simplifies to $1/n < \\epsilon$." },
            { prompt: "How do we find $n$ satisfying this?", options: [{ id: "A", text: "Archimedean Property", isCorrect: true, explanation: "There exists an integer $K > 1/\\epsilon$." }, { id: "B", text: "Triangle Inequality", isCorrect: false, explanation: "Not needed here." }], stepText: "Choose $K > 1/\\epsilon$. Then for any $n \\ge K$, $1/n \\le 1/K < \\epsilon$. Thus $1/n \\to 0$. Goal reached!" }
        ]},
        { id: "s2", type: "numerical", title: "Practice", content: "If $\\epsilon = 0.01$, what is the smallest integer $K$ such that $1/n < \\epsilon$ for all $n \\ge K$?", numericAnswer: 101, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-1-2-e7", title: "Example 3.1.7: Divergence", description: "Sequence 0, 2, 0, 2...", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Divergence Example", content: "Show that the sequence $X = (0, 2, 0, 2, \\dots)$ does not converge to 0." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find an $\\epsilon$ where the game fails.**", interactiveSteps: [
            { stepText: "If limit was 0, then for any $\\epsilon$, terms must eventually stay within $(-\\epsilon, \\epsilon)$." },
            { prompt: "Pick $\\epsilon = 1$. Are all terms eventually within $(-1, 1)$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "The term 2 appears infinitely often and $|2-0| = 2 \\ge 1$." }, { id: "B", text: "Yes", isCorrect: false, explanation: "2 is not less than 1." }], stepText: "Since the subsequence of 2s never stays within distance 1 of 0, it cannot converge to 0. (In fact, it doesn't converge to anything!)." }
        ]}
      ]
    },
    {
      id: "les-3-1-2-d8", title: "Definition 3.1.8: Tails", description: "The end of the sequence", icon: "Scissors",
      slides: [
        { id: "s0", type: "theory", title: "Tails of Sequences", content: "**Definition:** The $m$-tail of a sequence $X = (x_1, x_2, \\dots)$ is the sequence starting from the $(m+1)$-th term:\n$$X_m = (x_{m+1}, x_{m+2}, \\dots)$$\n\nExample: If $X = (2, 4, 6, 8, \\dots)$, the 1-tail is $(4, 6, 8, \\dots)$." },
        { id: "s1", type: "numerical", title: "Identify Tail", content: "If $X = (1, 3, 5, 7, 9, \\dots)$, what is the first term of the 2-tail?", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-1-2-t9", title: "Theorem 3.1.9: Tail Convergence", description: "Tails behave like the sequence", icon: "Link",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 3.1.9", content: "**Theorem:** A sequence $X$ converges if and only if any $m$-tail $X_m$ converges. Furthermore, $\\lim X_m = \\lim X$.\n\nThis confirms our intuition that the beginning of a sequence (finite number of terms) is irrelevant to its convergence behavior." },
        { id: "s1", type: "fill_in_blank", title: "Concept Check", content: "The convergence of a sequence depends only on its ___ behavior.", blankAnswer: "ultimate" } // or tail/asymptotic
      ]
    },
    {
      id: "les-3-1-2-t10", title: "Theorem 3.1.10: Domination", description: "Proving convergence by comparison", icon: "ArrowDown",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 3.1.10", content: "**Theorem:** Let $(a_n)$ be a sequence of positive numbers with $\\lim(a_n) = 0$. If for some constant $C > 0$ and some $m \\in \\mathbb{N}$, we have\n$$|x_n - x| \\le C a_n \\quad \\text{for all } n \\ge m$$\nthen $\\lim(x_n) = x$.\n\n*This is extremely useful! We don't need to find $K(\\epsilon)$ perfectly; we just need to bound the error by a known convergent sequence.*" },
        { id: "s1", type: "example_q", title: "Application", content: "If $|x_n - 3| < 5/n$, does $x_n \\to 3$?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Since $1/n \\to 0$, $5/n \\to 0$, so the distance goes to 0." }, { id: "B", text: "No", isCorrect: false, explanation: "It fits the theorem with $C=5, a_n=1/n$." }] } // Used quiz format here for example_q type
      ]
    },
    {
      id: "les-3-1-2-e11", title: "Example 3.1.11: More Limits", description: "Powers and Roots", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Powers of b < 1", content: "Prove $\\lim(b^n) = 0$ if $0 < b < 1$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use Bernoulli's Inequality.**", interactiveSteps: [
            { stepText: "Write $b = 1/(1+a)$ where $a > 0$." },
            { stepText: "Then $b^n = 1/(1+a)^n$." },
            { prompt: "By Bernoulli's Inequality $(1+a)^n \\ge 1+na$. What does this imply for $b^n$?", options: [{ id: "A", text: "$b^n \\le 1/(1+na)$", isCorrect: true, explanation: "Taking reciprocals reverses inequality." }, { id: "B", text: "$b^n \\ge 1+na$", isCorrect: false, explanation: "Incorrect." }], stepText: "So $0 < b^n \\le 1/(1+na) < 1/(na)$." },
            { stepText: "Since $1/n \\to 0$, by Theorem 3.1.10 (with $C=1/a$), $b^n \\to 0$. Goal reached!" }
        ]}
      ]
    }
  ]
};
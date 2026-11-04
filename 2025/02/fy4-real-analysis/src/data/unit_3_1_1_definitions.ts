import { Unit } from '../types';

export const UNIT_3_1_1: Unit = {
  id: "unit-3-1-1",
  title: "Definitions",
  description: "Defining Sequences and their Limits",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-1-d1", title: "Definition 3.1.1: What is a Sequence?", description: "Sequences as functions from N", icon: "List",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is the order of numbers important in a sequence?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Unlike sets, sequences $(1, 2)$ and $(2, 1)$ are different." }, { id: "B", text: "No", isCorrect: false, explanation: "Sets are unordered; sequences are ordered." }] },
        { id: "s1", type: "theory", title: "Definition 3.1.1", content: "**Definition:** A **sequence** of real numbers is a function $X : \\mathbb{N} \\to \\mathbb{R}$.\n\nInstead of writing $X(n)$, we usually write $x_n$ to denote the $n$-th term. We denote the sequence by $X$, $(x_n)$, or $(x_n : n \\in \\mathbb{N})$.\n\n*Note:* The set of values $\\{x_n : n \\in \\mathbb{N}\\}$ is just the range of the sequence, losing the ordering information." },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "A sequence is formally defined as a function whose domain is the set of ___ numbers.", blankAnswer: "natural" }
      ]
    },
    {
      id: "les-3-1-1-e1", title: "Example 3.1.2: Common Sequences", description: "Constant, Recursive, and Fibonacci", icon: "Repeat",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If $x_{n+1}$ depends on $x_n$, what kind of definition is this?", options: [{ id: "A", text: "Inductive (Recursive)", isCorrect: true, explanation: "Defining the next term based on previous ones." }, { id: "B", text: "Explicit", isCorrect: false, explanation: "Explicit would be $x_n = f(n)$." }] },
        { id: "s1", type: "theory", title: "Types of Definitions", content: "**Explicit:** $x_n = 1/2^n$ gives $(1/2, 1/4, 1/8, \\dots)$.\n\n**Recursive (Inductive):** $x_1 = 2, x_{n+1} = x_n + 2$ gives $(2, 4, 6, \\dots)$.\n\n**Fibonacci:** $f_1=1, f_2=1, f_{n+1} = f_{n-1} + f_n$ gives $(1, 1, 2, 3, 5, \\dots)$." },
        { id: "s2", type: "numerical", title: "Fibonacci Calculation", content: "What is the 6th term of the Fibonacci sequence $(1, 1, 2, 3, 5, \\dots)$?", numericAnswer: 8, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-1-1-d2", title: "Definition 3.1.3: Limit of a Sequence", description: "The Epsilon-K Definition", icon: "Target",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "What does it mean for $x_n$ to get 'arbitrarily close' to $x$?", options: [{ id: "A", text: "Distance is less than any $\\epsilon > 0$", isCorrect: true, explanation: "No matter how small $\\epsilon$ is, the terms eventually stay within that distance." }, { id: "B", text: "Distance becomes exactly 0", isCorrect: false, explanation: "Terms don't have to equal the limit, just get close." }] },
        { id: "s1", type: "theory", title: "Definition 3.1.3: Limit", content: "A sequence $X = (x_n)$ **converges** to $x \\in \\mathbb{R}$ if for every $\\epsilon > 0$, there exists a natural number $K(\\epsilon)$ such that for all $n \\ge K(\\epsilon)$:\n$$|x_n - x| < \\epsilon$$\n\nWe write $\\lim(x_n) = x$ or $x_n \\to x$. If a sequence has a limit, it is **convergent**. Otherwise, it is **divergent**." },
        { id: "s2", type: "interactive_canvas", title: "The K(ε) Game", content: "Change $\\epsilon$ and see how the cutoff point $K$ moves further to the right. To win the game (prove convergence), you must always be able to find a $K$ that keeps all subsequent points in the blue band.", interactiveCanvasId: "sequence-convergence-canvas" },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "If a sequence does not have a limit, it is said to be ___.", blankAnswer: "divergent" }
      ]
    },
    {
      id: "les-3-1-1-t4", title: "Theorem 3.1.4: Uniqueness of Limits", description: "Can a sequence go to two places?", icon: "GitMerge",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Can a sequence converge to both 0 and 1?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "If it gets close to 0, it must eventually stay far from 1." }, { id: "B", text: "Yes", isCorrect: false, explanation: "A sequence can only have one limit." }] },
        { id: "s1", type: "theory", title: "Theorem 3.1.4: Uniqueness", content: "**Theorem:** A sequence in $\\mathbb{R}$ can have at most one limit.\n\n*Proof Idea:* Assume $x'$ and $x''$ are limits. By the triangle inequality, $|x' - x''| \\le |x' - x_n| + |x_n - x''|$. For large $n$, both terms on the right can be made smaller than any $\\epsilon$, implying $|x' - x''| = 0$." },
        { id: "s2", type: "proof", title: "Interactive Proof: Uniqueness", content: "**Goal: Show $x' = x''$.**", interactiveSteps: [
            { stepText: "Assume $x_n \\to x'$ and $x_n \to x''$. Let $\\epsilon > 0$." },
            { stepText: "There exists $K_1$ such that for $n \\ge K_1$, $|x_n - x'| < \\epsilon/2$." },
            { stepText: "There exists $K_2$ such that for $n \\ge K_2$, $|x_n - x''| < \\epsilon/2$." },
            { prompt: "Let $K = \\max(K_1, K_2)$. For $n \\ge K$, what bound holds for $|x' - x''|$?", options: [{ id: "A", text: "$< \\epsilon$", isCorrect: true, explanation: "$|x' - x''| \\le |x' - x_n| + |x_n - x''| < \\epsilon/2 + \\epsilon/2 = \\epsilon$." }, { id: "B", text: "$> \\epsilon$", isCorrect: false, explanation: "Triangle inequality gives sum of bounds." }], stepText: "Thus $|x' - x''| < \\epsilon$. Since $\\epsilon$ is arbitrary, $|x' - x''| = 0$, so $x' = x''$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-1-1-t5", title: "Theorem 3.1.5: Neighborhoods", description: "Topological definition of limit", icon: "Map",
      slides: [
        { id: "s0", type: "theory", title: "Limit via Neighborhoods", content: "**Theorem 3.1.5:** $X = (x_n)$ converges to $x$ if and only if for every $\\epsilon$-neighborhood $V_\\epsilon(x)$, all but a finite number of terms of $X$ belong to $V_\\epsilon(x)$.\n\nThis highlights that the \"tail\" of the sequence is what matters. The finite set of points outside the neighborhood are simply $x_1, x_2, \\dots, x_{K-1}$." },
        { id: "s1", type: "fill_in_blank", title: "Concept Check", content: "The definition implies that outside any $\\epsilon$-neighborhood of the limit, there are only a ___ number of terms.", blankAnswer: "finite" }
      ]
    }
  ]
};
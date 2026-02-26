import { Unit } from '../types';

export const UNIT_3_4_1: Unit = {
  id: "unit-3-4-1",
  title: "BW Theory",
  description: "Subsequences and the Bolzano-Weierstrass Theorem",
  color: "duo-orange", // Reusing orange for 'yellow' as requested in prompt duo-yellow maps to orange usually or add yellow
  lessons: [
    {
      id: "les-3-4-1-d1", title: "Definition 3.4.1: Subsequences", description: "Selecting terms", icon: "Filter",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If you delete the first 100 terms of a sequence, is the result a subsequence?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "It's a specific type called a tail." }, { id: "B", text: "No", isCorrect: false, explanation: "We kept the relative order." }] },
        { id: "s1", type: "theory", title: "Definition 3.4.1", content: "**Definition:** Let $X = (x_n)$ be a sequence. A **subsequence** $X' = (x_{n_k})$ is defined by a strictly increasing sequence of natural numbers $n_1 < n_2 < \\dots < n_k < \\dots$.\n\n*Idea:* We pick terms from $X$ while keeping their original order." },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Subsequences", content: "See how selecting specific indices (like even numbers) creates a new sequence that may converge even if the original doesn't.", interactiveCanvasId: "subsequence-canvas" },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "For a subsequence, the indices must be strictly ___.", blankAnswer: "increasing" }
      ]
    },
    {
      id: "les-3-4-1-t2", title: "Theorem 3.4.2: Inheritance", description: "If parent converges, child converges", icon: "GitBranch",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If $x_n \\to L$, where do the even terms $x_{2n}$ go?", options: [{ id: "A", text: "To L", isCorrect: true, explanation: "They are part of the original sequence." }, { id: "B", text: "Nowhere", isCorrect: false, explanation: "All subsequences inherit the limit." }] },
        { id: "s1", type: "theory", title: "Theorem 3.4.2", content: "**Theorem:** If a sequence $X = (x_n)$ converges to $x$, then any subsequence $X' = (x_{n_k})$ also converges to $x$.\n\n*Proof Idea:* Since $n_k \\ge k$, if $k$ is large, $n_k$ is large. If the tail of $X$ is in the $\\epsilon$-neighborhood, the tail of $X'$ is too." }
      ]
    },
    {
      id: "les-3-4-1-e3", title: "Example 3.4.3: Applications", description: "Proving divergence via subsequences", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Divergence Test", content: "Show $X = ((-1)^n)$ diverges using subsequences." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Find conflicting limits.**", interactiveSteps: [
            { stepText: "Subsequence of even terms: $x_{2k} = (-1)^{2k} = 1 \\to 1$." },
            { stepText: "Subsequence of odd terms: $x_{2k-1} = (-1)^{2k-1} = -1 \\to -1$." },
            { prompt: "Since $1 \\ne -1$, what can we conclude?", options: [{ id: "A", text: "X diverges", isCorrect: true, explanation: "A convergent sequence can have only one limit for all subsequences." }, { id: "B", text: "X converges to 0", isCorrect: false, explanation: "No." }], stepText: "The sequence diverges." }
        ]}
      ]
    },
    {
      id: "les-3-4-1-t4", title: "Theorem 3.4.4: Divergence Criteria", description: "Formalizing divergence", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "theory", title: "Divergence Criteria", content: "**Theorem 3.4.4:** A sequence $X$ diverges if and only if:\n(i) It has two convergent subsequences with different limits.\nOR\n(ii) It is unbounded." }
      ]
    },
    {
      id: "les-3-4-1-t5", title: "Theorem 3.4.7: Monotone Subsequence", description: "Every sequence has a monotone subsequence", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "theory", title: "Monotone Subsequence Theorem", content: "**Theorem 3.4.7:** If $X = (x_n)$ is a sequence of real numbers, then there is a subsequence of $X$ that is monotone.\n\n*Proof Concept:* Concept of a \"peak\" (a term larger than all future terms). If infinitely many peaks, they form a decreasing subsequence. If finitely many, we can find an increasing subsequence after the last peak." }
      ]
    },
    {
      id: "les-3-4-1-t7", title: "Theorem 3.4.8: Bolzano-Weierstrass", description: "The Big Theorem", icon: "Globe",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a sequence is bounded but bounces around forever, does it settle down somewhere?", options: [{ id: "A", text: "Yes, at least partially.", isCorrect: true, explanation: "Some subsequence must converge." }, { id: "B", text: "No, it never stops moving.", isCorrect: false, explanation: "BW Theorem says otherwise." }] },
        { id: "s1", type: "theory", title: "Bolzano-Weierstrass Theorem", content: "**Theorem 3.4.8:** A bounded sequence of real numbers has a convergent subsequence.\n\n*Proof:* Let $X$ be bounded. By Monotone Subsequence Theorem, it has a monotone subsequence $X'$. Since $X$ is bounded, $X'$ is bounded. By MCT, $X'$ converges." },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "The Bolzano-Weierstrass Theorem guarantees a ___ subsequence for any bounded sequence.", blankAnswer: "convergent" }
      ]
    },
    {
      id: "les-3-4-1-t8", title: "Limit Superior/Inferior", description: "The bounds of oscillation", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Limit Sup & Inf", content: "For a bounded sequence $(x_n)$:\n- $\\limsup x_n$ is the largest subsequential limit.\n- $\\liminf x_n$ is the smallest subsequential limit.\n\nIf they are equal, the sequence converges." }
      ]
    }
  ]
};
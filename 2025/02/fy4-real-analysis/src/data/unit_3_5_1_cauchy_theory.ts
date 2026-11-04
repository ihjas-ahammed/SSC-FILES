import { Unit } from '../types';

export const UNIT_3_5_1: Unit = {
  id: "unit-3-5-1",
  title: "Cauchy Theory",
  description: "Convergence without knowing the limit",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-5-1-d1", title: "Definition 3.5.1: Cauchy Sequence", description: "Terms getting closer to each other", icon: "Minimize2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a group of people are all walking towards the same destination, do they necessarily get closer to *each other*?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "If everyone is near the destination, they must be near each other." }, { id: "B", text: "No", isCorrect: false, explanation: "By Triangle Inequality, they must be close." }] },
        { id: "s1", type: "theory", title: "Definition 3.5.1", content: "**Definition:** A sequence $X = (x_n)$ is a **Cauchy sequence** if for every $\\epsilon > 0$, there exists a natural number $H(\\epsilon)$ such that for all $n, m \\ge H(\\epsilon)$:\n$$|x_n - x_m| < \\epsilon$$\n\n*Key Idea:* We don't need to know the limit $x$. We just check if the terms bunch up together." },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Cauchy", content: "Adjust epsilon to see how the tail of a Cauchy sequence gets squeezed into a narrower and narrower band, forcing terms to be close to each other.", interactiveCanvasId: "cauchy-sequence-canvas" },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "In a Cauchy sequence, the distance between ___ terms $x_n$ and $x_m$ eventually becomes arbitrarily small.", blankAnswer: "any" } // or arbitrary/two
      ]
    },
    {
      id: "les-3-5-1-e2", title: "Examples 3.5.2: Cauchy vs Not", description: "1/n vs (-1)^n", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Is 1/n Cauchy?", content: "Prove $(1/n)$ is Cauchy." },
        { id: "s1", type: "proof", title: "Interactive Proof: 1/n", content: "**Goal: Bound difference.**", interactiveSteps: [
            { stepText: "Let $\\epsilon > 0$. We want $|1/n - 1/m| < \\epsilon$." },
            { prompt: "Use Triangle Inequality on $|1/n - 1/m|$.", options: [{ id: "A", text: "$|1/n| + |1/m|$", isCorrect: true, explanation: "Simple upper bound." }, { id: "B", text: "$|1/n - 0|$", isCorrect: false, explanation: "Only bounds one term." }], stepText: "$|1/n - 1/m| \\le 1/n + 1/m$." },
            { stepText: "If $n, m > H$, then $1/n < 1/H$ and $1/m < 1/H$. Sum $< 2/H$." },
            { stepText: "Choose $H > 2/\\epsilon$. Then sum $< \\epsilon$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-3-5-1-l3", title: "Lemma 3.5.3: Convergent ⇒ Cauchy", description: "Easy direction", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "theory", title: "Convergent implies Cauchy", content: "**Lemma:** If a sequence converges, it is a Cauchy sequence.\n\n*Proof:* If $x_n \\to x$ and $x_m \\to x$, then they must be close to each other. $|x_n - x_m| \\le |x_n - x| + |x - x_m| < \\epsilon/2 + \\epsilon/2 = \\epsilon$." }
      ]
    },
    {
      id: "les-3-5-1-l4", title: "Lemma 3.5.4: Cauchy ⇒ Bounded", description: "Cauchy sequences don't explode", icon: "Box",
      slides: [
        { id: "s0", type: "theory", title: "Boundedness", content: "**Lemma:** A Cauchy sequence is bounded.\n\n*Proof:* Let $\\epsilon = 1$. There is $H$ such that for $n \\ge H$, $|x_n - x_H| < 1$, so $|x_n| < |x_H| + 1$. The sequence is bounded by $\\max\\{|x_1|, \\dots, |x_{H-1}|, |x_H|+1\\}$." }
      ]
    },
    {
      id: "les-3-5-1-t5", title: "Theorem 3.5.5: Cauchy Criterion", description: "The Main Theorem", icon: "Award",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a sequence in $\\mathbb{R}$ is Cauchy, does it HAVE to converge?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Because R is complete." }, { id: "B", text: "No", isCorrect: false, explanation: "In Q (rationals), no. But in R, yes." }] },
        { id: "s1", type: "theory", title: "Cauchy Convergence Criterion", content: "**Theorem 3.5.5:** A sequence of real numbers is convergent if and only if it is a Cauchy sequence.\n\n*Proof:* Cauchy $\\implies$ Bounded $\\implies$ Bolzano-Weierstrass (subsequence converges) $\\implies$ Whole sequence converges to that limit (because terms are bunched together)." },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "The Cauchy Criterion allows us to prove convergence without knowing the ___.", blankAnswer: "limit" }
      ]
    },
    {
      id: "les-3-5-1-e6", title: "Example 3.5.6: Contractive Sequences", description: "Sequences with shrinking steps", icon: "ChevronsRight",
      slides: [
        { id: "s0", type: "theory", title: "Contractive Sequences", content: "A sequence is **contractive** if $|x_{n+2} - x_{n+1}| \\le C |x_{n+1} - x_n|$ for some $0 < C < 1$.\n\n*Property:* Every contractive sequence is Cauchy (and thus converges)." }
      ]
    },
    {
      id: "les-3-5-1-d7", title: "Definition 3.5.7: Contractive", description: "Formal definition", icon: "Minimize",
      slides: [
        { id: "s0", type: "example_q", title: "Identify Contractive", content: "Is $x_{n+2} = \\frac{1}{2} x_{n+1} + \\frac{1}{2} x_n$ contractive? Note difference is $|x_{n+2} - x_{n+1}| = \\frac{1}{2}|x_n - x_{n+1}|$." },
        { id: "s1", type: "solution", title: "Check", content: "Yes, $C=1/2 < 1$. It is contractive." }
      ]
    },
    {
      id: "les-3-5-1-t8", title: "Theorem 3.5.8: Contractive Convergence", description: "Proof of convergence", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 3.5.8", content: "**Theorem:** Every contractive sequence is Cauchy.\n\n*Proof:* Use geometric series. The distance $|x_n - x_m|$ is bounded by a geometric sum $\\sum C^k$, which converges." }
      ]
    }
  ]
};
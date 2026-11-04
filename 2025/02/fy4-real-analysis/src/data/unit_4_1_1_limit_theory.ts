import { Unit } from '../types';

export const UNIT_4_1_1: Unit = {
  id: "unit-4-1-1",
  title: "The Limit Theory",
  description: "Cluster Points and the Epsilon-Delta Definition",
  color: "duo-green",
  lessons: [
    {
      id: "les-4-1-1-d1", title: "Definition 4.1.1: Cluster Points", description: "Points where elements bunch together", icon: "Target",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "To study the limit of a function at a point $c$, do we need the function to actually be defined exactly at $c$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "Limits are about what happens *near* c, regardless of what happens exactly *at* c." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would be a requirement for continuity, not limits." }] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If a set $A$ consists only of isolated integers like $\{1, 2, 3\}$, does it have any cluster points?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "You can put a small neighborhood (like radius 0.5) around any number that contains no other points from A." }, { id: "B", text: "Yes", isCorrect: false, explanation: "No points are infinitely close together." }] },
        { id: "s2", type: "theory", title: "Definition 4.1.1: Cluster Point", content: "Let $A \\subseteq \\mathbb{R}$. A point $c \\in \\mathbb{R}$ is a **cluster point** of $A$ if for every $\\delta > 0$ there exists at least one point $x \\in A, x \\neq c$ such that $|x - c| < \\delta$.\n\nIn other words, every $\\delta$-neighborhood $V_\\delta(c)$ contains at least one point of $A$ distinct from $c$. \n\n*Note:* The point $c$ itself may or may not belong to the set $A$. It doesn't matter." },
        { id: "s3", type: "interactive_canvas", title: "Visualizing Cluster Points", content: "See how the point 0 is a cluster point for the sequence $\{1/n\}$ because it always catches points in its net, but 1.5 catches nothing if the net is small.", interactiveCanvasId: "cluster-point-canvas" },
        { id: "s4", type: "fill_in_blank", title: "Concept Check", content: "A finite set has exactly ___ cluster points.", blankAnswer: "0" } // zero / zero
      ]
    },
    {
      id: "les-4-1-1-t2", title: "Theorem 4.1.2: Cluster Point Theorem", description: "Linking cluster points to sequences", icon: "Link",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.1.2", content: "**Theorem:** A number $c \\in \\mathbb{R}$ is a cluster point of a subset $A$ of $\\mathbb{R}$ if and only if there exists a sequence $(a_n)$ in $A$ such that $\\lim(a_n) = c$ and $a_n \\neq c$ for all $n \\in \\mathbb{N}$.\n\nThis theorem provides a bridge between the topology of sets (neighborhoods) and the sequences we studied in Chapter 3." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Construct the sequence $(a_n)$.**", interactiveSteps: [
            { stepText: "Assume $c$ is a cluster point of $A$. This means every neighborhood contains a point of $A$ different from $c$." },
            { prompt: "To construct a sequence converging to $c$, what sequence of shrinking neighborhoods should we use?", options: [{ id: "A", text: "$V_{1/n}(c)$", isCorrect: true, explanation: "The radius $1/n$ shrinks to 0 as $n \\to \\infty$." }, { id: "B", text: "$V_1(c)$", isCorrect: false, explanation: "This neighborhood doesn't shrink." }], stepText: "Let's use the neighborhoods $V_{1/n}(c)$ for $n \in \mathbb{N}$." },
            { stepText: "For each $n$, the definition of a cluster point guarantees we can pick an $a_n \\in A$ such that $a_n \\neq c$ and $|a_n - c| < 1/n$." },
            { stepText: "Since $1/n \\to 0$, it follows immediately that the sequence $(a_n)$ converges to $c$. The reverse direction is similar. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-1-d4", title: "Definition 4.1.4: Limit of a Function", description: "The Epsilon-Delta Definition", icon: "Crosshair",
      slides: [
        { id: "s0", type: "theory", title: "Definition 4.1.4: Limit of a Function", content: "Let $A \\subseteq \\mathbb{R}$, and let $c$ be a cluster point of $A$. For a function $f : A \\to \\mathbb{R}$, a real number $L$ is said to be a **limit** of $f$ at $c$ if, given any $\\epsilon > 0$, there exists a $\\delta > 0$ such that if $x \\in A$ and $0 < |x - c| < \\delta$, then\n\n$$|f(x) - L| < \\epsilon$$\n\nWe write $\\lim_{x \\to c} f(x) = L$." },
        { id: "s1", type: "interactive_canvas", title: "The Epsilon-Delta Game", content: "To prove a limit exists, Player B gives an epsilon target (the blue vertical bounds). Player A must find a delta (the green horizontal bounds) such that the curve NEVER escapes through the top or bottom of the box.", interactiveCanvasId: "epsilon-delta-canvas" },
        { id: "s2", type: "quiz", title: "Conceptual Check", content: "In the inequality $0 < |x - c| < \\delta$, what does the $0 <$ part enforce?", options: [{ id: "A", text: "It prevents $x$ from equalling $c$.", isCorrect: true, explanation: "The limit only cares about points strictly *around* c, not at c itself." }, { id: "B", text: "It forces $x$ to be positive.", isCorrect: false, explanation: "No, $|x-c|$ is always non-negative." }] },
        { id: "s3", type: "fill_in_blank", title: "Terminology", content: "If the limit of $f$ at $c$ does not exist, we say that $f$ ___ at $c$.", blankAnswer: "diverges" }
      ]
    },
    {
      id: "les-4-1-1-t5", title: "Theorem 4.1.5: Uniqueness", description: "Functions can only approach one limit", icon: "Fingerprint",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.1.5", content: "**Theorem:** If $f : A \\to \\mathbb{R}$ and if $c$ is a cluster point of $A$, then $f$ can have only one limit at $c$.\n\nJust like sequences, functions cannot split their allegiance and converge to two different values at the same point." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that two limits $L$ and $L'$ must be equal.**", interactiveSteps: [
            { stepText: "Assume $f$ has limits $L$ and $L'$. For any $\\epsilon > 0$, there exists $\\delta_1$ for $L$ and $\\delta_2$ for $L'$." },
            { prompt: "To ensure both conditions hold simultaneously, what $\\delta$ should we pick?", options: [{ id: "A", text: "$\\delta = \\min(\\delta_1, \\delta_2)$", isCorrect: true, explanation: "The smaller neighborhood guarantees both conditions are met." }, { id: "B", text: "$\\delta = \\delta_1 + \\delta_2$", isCorrect: false, explanation: "This would be larger, breaking the guarantees." }], stepText: "Let $\\delta = \\min(\\delta_1, \\delta_2)$." },
            { stepText: "Since $c$ is a cluster point, there is an $x$ such that $0 < |x - c| < \\delta$. For this $x$, both $|f(x) - L| < \\epsilon/2$ and $|f(x) - L'| < \\epsilon/2$ hold." },
            { stepText: "By the Triangle Inequality, $|L - L'| \\le |L - f(x)| + |f(x) - L'| < \\epsilon/2 + \\epsilon/2 = \\epsilon$." },
            { stepText: "Since $\\epsilon$ is arbitrarily small, the distance $|L - L'|$ must be $0$, so $L = L'$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-4-1-1-t6", title: "Theorem 4.1.6: Neighborhoods", description: "Rephrasing limits geometrically", icon: "Maximize",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.1.6: Neighborhood Formulation", content: "**Theorem:** $\\lim_{x \\to c} f(x) = L$ if and only if:\n\nGiven any $\\epsilon$-neighborhood $V_\\epsilon(L)$ of $L$, there exists a $\\delta$-neighborhood $V_\\delta(c)$ of $c$ such that if $x \\neq c$ is any point in $V_\\delta(c) \\cap A$, then $f(x)$ belongs to $V_\\epsilon(L)$.\n\nThis is purely a translation of the absolute value inequalities into set notation." }
      ]
    },
    {
      id: "les-4-1-1-t8", title: "Theorem 4.1.8: Sequential Criterion", description: "Linking function limits to sequence limits", icon: "ListOrdered",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.1.8: Sequential Criterion", content: "**Theorem:** $\\lim_{x \\to c} f(x) = L$ if and only if:\nFor every sequence $(x_n)$ in $A$ that converges to $c$ such that $x_n \\neq c$ for all $n$, the sequence $(f(x_n))$ converges to $L$.\n\nThis is one of the most important theorems! It lets us use all our sequence theorems (like Squeeze Theorem, algebraic limits) directly on functions." },
        { id: "s1", type: "proof", title: "Interactive Proof: Forward Direction", content: "**Goal: Assume limit is L, prove sequence converges to L.**", interactiveSteps: [
            { stepText: "Assume $\\lim_{x \\to c} f(x) = L$. Let $(x_n)$ be a sequence converging to $c$ with $x_n \\neq c$." },
            { stepText: "Let $\\epsilon > 0$ be given. Because the function limit is $L$, there exists a $\\delta > 0$ such that $0 < |x - c| < \\delta \\implies |f(x) - L| < \\epsilon$." },
            { prompt: "Since $(x_n) \\to c$, what happens for large $n$?", options: [{ id: "A", text: "$|x_n - c| < \\delta$", isCorrect: true, explanation: "By the definition of sequence convergence, applied to the value $\\delta$." }, { id: "B", text: "$|x_n - c| < \\epsilon$", isCorrect: false, explanation: "We must use delta to trigger the function's epsilon condition." }], stepText: "There exists a $K$ such that for $n \\ge K$, $|x_n - c| < \\delta$." },
            { stepText: "For these $n \\ge K$, we have $0 < |x_n - c| < \\delta$ (since $x_n \\neq c$). Thus $|f(x_n) - L| < \\epsilon$." },
            { stepText: "This matches the definition of $\\lim(f(x_n)) = L$. Forward direction proved!" }
        ]}
      ]
    },
    {
      id: "les-4-1-1-t9", title: "Theorem 4.1.9: Divergence Criteria", description: "How to prove a limit does not exist", icon: "Shuffle",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 4.1.9: Divergence Criteria", content: "**Theorem:** A function $f$ does NOT have a limit $L$ at $c$ if and only if there exists a sequence $(x_n)$ converging to $c$ (with $x_n \\neq c$) but the sequence $(f(x_n))$ does NOT converge to $L$.\n\n*Powerful Corollary:* If you can find TWO sequences $(x_n)$ and $(y_n)$ that both converge to $c$, but their function outputs $f(x_n)$ and $f(y_n)$ converge to *different* limits, then the function has NO limit at $c$." },
        { id: "s1", type: "example_q", title: "Example: Oscillating Function", content: "Show that $\\lim_{x \\to 0} \\sin(1/x)$ does not exist." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Find two sequences converging to 0 that produce different outputs.**", interactiveSteps: [
            { stepText: "We know $\\sin(z)$ cycles between -1, 0, and 1. We want $1/x$ to hit these peak values." },
            { prompt: "To make $\\sin(1/x_n) = 0$, what should $1/x_n$ equal?", options: [{ id: "A", text: "$n\\pi$", isCorrect: true, explanation: "Sine is 0 at integer multiples of pi." }, { id: "B", text: "$\\pi/2 + n\\pi$", isCorrect: false, explanation: "Sine is 1 or -1 there." }], stepText: "Let $1/x_n = n\\pi$, so $x_n = \\frac{1}{n\\pi}$. Clearly $x_n \\to 0$, and $f(x_n) = \\sin(n\\pi) = 0 \\to 0$." },
            { stepText: "Now, to make $\\sin(1/y_n) = 1$, we need $1/y_n = \\frac{\\pi}{2} + 2n\\pi$." },
            { stepText: "So let $y_n = \\frac{1}{\\pi/2 + 2n\\pi}$. As $n \\to \\infty$, $y_n \\to 0$. And $f(y_n) = 1 \\to 1$." },
            { stepText: "Since the two sequences $(x_n)$ and $(y_n)$ both go to 0, but $f(x_n) \to 0$ and $f(y_n) \to 1$, the limit does not exist. Goal reached!" }
        ]}
      ]
    }
  ]
};
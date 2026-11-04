import { Unit } from '../types';

export const UNIT_2_4_1: Unit = {
  id: "unit-2-4-1",
  title: "Archimedean & Density",
  description: "Understanding the scale and density of real numbers",
  color: "duo-gray",
  lessons: [
    {
      id: "les-2-4-1-t1", title: "Theorem 2.4.3: Archimedean Property", description: "No upper bound for N", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "theory", title: "The Archimedean Property", content: "**Theorem 2.4.3:** If $x \\in \\mathbb{R}$, then there exists $n_x \\in \\mathbb{N}$ such that $x \\le n_x$.\n\nIn plain English: The set of natural numbers $\\mathbb{N}$ is not bounded above in $\\mathbb{R}$. No matter how large a real number $x$ you pick, there is always a natural number larger than it." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "Does the Archimedean Property imply that infinity is a real number?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "It simply says the real numbers are finite but unbounded." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Infinity is not in R." }] },
        { id: "s2", type: "quiz", title: "Implication", content: "If $\\mathbb{N}$ were bounded above, what would exist by the Completeness Property?", options: [{ id: "A", text: "A supremum $u = \\sup \\mathbb{N}$", isCorrect: true, explanation: "Bounded nonempty sets in R have a supremum." }, { id: "B", text: "A maximum integer", isCorrect: false, explanation: "Supremum doesn't have to be in the set (though for N it implies a contradiction)." }] },
        { id: "s3", type: "proof", title: "Interactive Proof: Archimedean Property", content: "**Goal: Prove $\\mathbb{N}$ is not bounded above.**", interactiveSteps: [
            { stepText: "Assume for contradiction that $\\mathbb{N}$ *is* bounded above." },
            { stepText: "By the Completeness Property, the nonempty set $\\mathbb{N}$ must have a supremum $u \in \\mathbb{R}$." },
            { prompt: "Since $u$ is the *least* upper bound, is $u - 1$ an upper bound?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "u-1 < u, so it cannot be an upper bound." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would contradict u being the least." }], stepText: "Therefore, there exists some $m \in \\mathbb{N}$ such that $u - 1 < m$." },
            { stepText: "Rearranging, we get $u < m + 1$." },
            { stepText: "Since $m \in \\mathbb{N}$, $m + 1 \in \\mathbb{N}$. But $m + 1 > u$, which contradicts $u$ being an upper bound for $\\mathbb{N}$! Thus, $\\mathbb{N}$ is unbounded. Goal reached!" }
        ]},
        { id: "s4", type: "numerical", title: "Find the Integer", content: "If $x = 100.5$, what is the smallest integer $n_x$ such that $n_x \ge x$?", numericAnswer: 101, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-4-1-c1", title: "Corollary 2.4.4: Infimum of {1/n}", description: "Reciprocals approach zero", icon: "Minimize2",
      slides: [
        { id: "s0", type: "theory", title: "Infimum of Reciprocals", content: "**Corollary 2.4.4:** If $S := \\{1/n : n \\in \\mathbb{N}\\}$, then $\\inf S = 0$.\n\nWhile $1/n$ never actually equals 0, the greatest lower bound of the set of all such fractions is exactly 0. This relies on the Archimedean Property." },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "Is 0 an element of the set $S = \\{1/n\\}$?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "1/n is never 0 for any finite n." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Reciprocals of integers are non-zero." }] },
        { id: "s2", type: "proof", title: "Interactive Proof: $\\inf S = 0$", content: "**Goal: Show 0 is the greatest lower bound.**", interactiveSteps: [
            { stepText: "Clearly $S$ is bounded below by $0$ since $1/n > 0$. Let $w = \\inf S$. So $w \ge 0$." },
            { stepText: "For any $\\varepsilon > 0$, the Archimedean Property ensures there exists $n \in \\mathbb{N}$ such that $1/\\varepsilon < n$." },
            { prompt: "Rearrange $1/\\varepsilon < n$. What does this imply about $1/n$?", options: [{ id: "A", text: "$1/n < \\varepsilon$", isCorrect: true, explanation: "Take reciprocals reverses the inequality." }, { id: "B", text: "$1/n > \\varepsilon$", isCorrect: false, explanation: "Incorrect algebra." }], stepText: "We have $1/n < \\varepsilon$." },
            { stepText: "Thus, we have $0 \le w \le 1/n < \\varepsilon$. So $0 \le w < \\varepsilon$." },
            { stepText: "Since $w$ is smaller than ANY positive $\\varepsilon$, by Theorem 2.1.9, $w$ must be $0$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-4-1-c2", title: "Corollary 2.4.5: Small Reciprocals", description: "Finding 1/n smaller than t", icon: "Target",
      slides: [
        { id: "s0", type: "theory", title: "Corollary 2.4.5", content: "**Corollary 2.4.5:** If $t > 0$, there exists $n_t \\in \\mathbb{N}$ such that $0 < 1/n_t < t$.\n\nThis is a direct application of the fact that $\\inf \\{1/n\\} = 0$. If $t > 0$, then $t$ is *not* a lower bound, so there must be an element $1/n$ smaller than it." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "This corollary is essentially saying we can find a reciprocal of an integer...", options: [{ id: "A", text: "Arbitrarily close to zero", isCorrect: true, explanation: "Smaller than any positive t." }, { id: "B", text: "Equal to zero", isCorrect: false, explanation: "Never equal." }] },
        { id: "s2", type: "numerical", title: "Find n", content: "If $t = 0.005$, what is the smallest integer $n$ such that $1/n < t$? ($1/n < 1/200$)", numericAnswer: 201, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-4-1-c3", title: "Corollary 2.4.6: Integer Sandwich", description: "Sandwiching y between n-1 and n", icon: "Layers",
      slides: [
        { id: "s0", type: "theory", title: "Corollary 2.4.6", content: "**Corollary 2.4.6:** If $y > 0$, there exists a unique $n_y \\in \\mathbb{N}$ such that $n_y - 1 \\le y < n_y$.\n\nThis basically says any positive real number lies in a specific interval of length 1 bounded by integers (e.g., $\\pi$ is in $(3, 4]$ or $[3, 4)$ depending on strictness). More precisely, it finds the 'ceiling' of $y$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Construct the set of integers larger than y.**", interactiveSteps: [
            { stepText: "Let $E_y = \\{m \\in \\mathbb{N} : y < m\\}$. By the Archimedean Property, $E_y$ is not empty." },
            { prompt: "By the Well-Ordering Property, what does $E_y$ possess?", options: [{ id: "A", text: "A least element", isCorrect: true, explanation: "Every nonempty subset of N has a least element." }, { id: "B", text: "A greatest element", isCorrect: false, explanation: "The set goes to infinity." }], stepText: "Let $n_y$ be the least element of $E_y$. Thus $y < n_y$." },
            { stepText: "Since $n_y$ is the *least* integer greater than $y$, the integer before it, $n_y - 1$, is NOT in $E_y$." },
            { stepText: "If $n_y - 1$ is not in $E_y$, it means it is not strictly greater than $y$. So $n_y - 1 \\le y$." },
            { stepText: "Combining these, $n_y - 1 \\le y < n_y$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-4-1-t2", title: "Theorem 2.4.8: Density of Rationals", description: "Q is dense in R", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "The Density Theorem", content: "**Theorem 2.4.8 (Density of $\\mathbb{Q}$):** If $x$ and $y$ are any real numbers with $x < y$, then there exists a rational number $r \\in \\mathbb{Q}$ such that $x < r < y$.\n\nThis means between *any* two real numbers, no matter how close, there is a fraction." },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "Are there holes in the rational number line?", options: [{ id: "A", text: "Yes, the irrationals", isCorrect: true, explanation: "Even though rationals are dense, they don't cover the line continuously (e.g. sqrt(2) is missing)." }, { id: "B", text: "No, it's continuous", isCorrect: false, explanation: "R is continuous (complete), Q is not." }] },
        { id: "s2", type: "proof", title: "Interactive Proof: Density", content: "**Goal: Find integers $m, n$ such that $x < m/n < y$.**", interactiveSteps: [
            { stepText: "Assume $x > 0$ (general case follows). We want $nx < m < ny$, or $m$ between $nx$ and $ny$." },
            { prompt: "To fit an integer $m$ between $nx$ and $ny$, we need the gap $ny - nx$ to be larger than what?", options: [{ id: "A", text: "1", isCorrect: true, explanation: "If the gap is > 1, there must be an integer inside." }, { id: "B", text: "0.1", isCorrect: false, explanation: "Gap must be at least 1 to guarantee capturing an integer." }], stepText: "We need $n(y - x) > 1$. By the Archimedean Property, choose $n$ such that $1/n < y - x$, or $n > 1/(y-x)$." },
            { stepText: "With this $n$, we apply Corollary 2.4.6 to $nx$: there exists $m$ such that $m - 1 \\le nx < m$. Thus $m > nx$." },
            { stepText: "Also $m \\le nx + 1$. Since $nx + 1 < ny$ (because $1 < n(y-x)$), we have $m < ny$." },
            { stepText: "So $nx < m < ny$. Dividing by $n$ gives $x < m/n < y$. Let $r = m/n$. Goal reached!" }
        ]}
      ]
    },
    {
      id: "les-2-4-1-c4", title: "Corollary 2.4.9: Density of Irrationals", description: "Irrationals are everywhere too", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Density of Irrational Numbers", content: "**Corollary 2.4.9:** If $x$ and $y$ are real numbers with $x < y$, then there exists an irrational number $z$ such that $x < z < y$.\n\nIn fact, there are infinitely many rationals and infinitely many irrationals between any two distinct real numbers." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use $\\sqrt{2}$ to shift the rationals.**", interactiveSteps: [
            { stepText: "Consider the real numbers $x / \\sqrt{2}$ and $y / \\sqrt{2}$. Since $x < y$, we have $x / \\sqrt{2} < y / \\sqrt{2}$." },
            { prompt: "By the Density of Rationals, what exists between these two numbers?", options: [{ id: "A", text: "A rational number $r \neq 0$", isCorrect: true, explanation: "Between any two distinct reals lies a rational." }, { id: "B", text: "An integer", isCorrect: false, explanation: "Not necessarily." }], stepText: "There exists $r \in \\mathbb{Q}, r \neq 0$ such that $x / \\sqrt{2} < r < y / \\sqrt{2}$." },
            { stepText: "Multiply by $\\sqrt{2}$: $x < r\\sqrt{2} < y$." },
            { stepText: "Let $z = r\\sqrt{2}$. Since $r$ is rational and $\\sqrt{2}$ is irrational, their product $z$ is irrational. Thus $x < z < y$. Goal reached!" }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "The set of irrational numbers is ___ in $\\mathbb{R}$.", blankAnswer: "dense" }
      ]
    }
  ]
};
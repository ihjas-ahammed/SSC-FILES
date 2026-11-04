import { Unit } from '../types';

export const UNIT_3_2_1: Unit = {
  id: "unit-3-2-1",
  title: "Algebraic Laws",
  description: "Boundedness and Algebraic properties of limits",
  color: "duo-red",
  lessons: [
    {
      id: "les-3-2-1-d1", title: "Definition 3.2.1: Bounded Sequence", description: "Containing a sequence in a box", icon: "Box",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a sequence never goes above 10 or below -10, is it bounded?", options: [{ id: "A", text: "Yes", isCorrect: true, explanation: "Bounded means contained within a finite interval." }, { id: "B", text: "No", isCorrect: false, explanation: "It is bounded by M=10." }] },
        { id: "s1", type: "theory", title: "Definition 3.2.1", content: "**Definition:** A sequence $X = (x_n)$ is **bounded** if there exists a real number $M > 0$ such that $|x_n| \\le M$ for all $n \\in \\mathbb{N}$.\n\nThis means the set of values $\\{x_n\\}$ is a bounded subset of $\\mathbb{R}$." },
        { id: "s2", type: "numerical", title: "Find M", content: "For the sequence $x_n = (-1)^n$, what is the smallest valid integer bound $M$?", numericAnswer: 1, numericTolerance: 0 },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "If a sequence is not bounded, it is called ___.", blankAnswer: "unbounded" }
      ]
    },
    {
      id: "les-3-2-1-t2", title: "Theorem 3.2.2: Convergence ⇒ Boundedness", description: "Why convergent sequences can't run away", icon: "Anchor",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "If a sequence gets closer and closer to a single number $x$, can it shoot off to infinity?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "It's tethered to the limit." }, { id: "B", text: "Yes", isCorrect: false, explanation: "That would be divergence." }] },
        { id: "s1", type: "theory", title: "Theorem 3.2.2", content: "**Theorem:** A convergent sequence of real numbers is bounded.\n\n*Intuition:* The tail is trapped near the limit. The finite number of terms before the tail are just a finite set, which is always bounded." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Find a bound M.**", interactiveSteps: [
            { stepText: "Let $x_n \\to x$. Choose $\\epsilon = 1$." },
            { stepText: "There exists $K$ such that for $n \\ge K$, $|x_n - x| < 1$." },
            { prompt: "Using Triangle Inequality, what is $|x_n|$ bounded by for $n \\ge K$?", options: [{ id: "A", text: "$|x| + 1$", isCorrect: true, explanation: "$|x_n| = |x_n - x + x| \\le |x_n - x| + |x| < 1 + |x|$." }, { id: "B", text: "1", isCorrect: false, explanation: "Only the distance is < 1." }], stepText: "So terms in the tail are bounded by $|x| + 1$." },
            { stepText: "Let $M = \\sup\\{|x_1|, |x_2|, \\dots, |x_{K-1}|, |x| + 1\\}$. This $M$ bounds the entire sequence." }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Contrapositive", content: "If a sequence is unbounded, then it must be ___.", blankAnswer: "divergent" }
      ]
    },
    {
      id: "les-3-2-1-t3a", title: "Theorem 3.2.3(a): Sums & Products", description: "Algebra of limits", icon: "Calculator",
      slides: [
        { id: "s0", type: "theory", title: "Algebraic Limit Theorems", content: "**Theorem 3.2.3(a):** Let $X=(x_n)$ and $Y=(y_n)$ converge to $x$ and $y$. Then:\n\n1. $\\lim(X + Y) = x + y$\n2. $\\lim(X - Y) = x - y$\n3. $\\lim(X \\cdot Y) = xy$\n4. $\\lim(cX) = cx$ (for any $c \\in \\mathbb{R}$)" },
        { id: "s1", type: "proof", title: "Interactive Proof: Sum", content: "**Goal: Prove $\\lim(x_n + y_n) = x + y$.**", interactiveSteps: [
            { stepText: "We need $|(x_n + y_n) - (x + y)| < \\epsilon$." },
            { prompt: "Regroup the terms to use known limits.", options: [{ id: "A", text: "$|(x_n - x) + (y_n - y)|$", isCorrect: true, explanation: "Group x terms and y terms." }, { id: "B", text: "$|x_n y_n - xy|$", isCorrect: false, explanation: "That's for products." }], stepText: "Use Triangle Inequality: $\\le |x_n - x| + |y_n - y|$." },
            { stepText: "Choose $K$ such that $|x_n - x| < \\epsilon/2$ and $|y_n - y| < \\epsilon/2$. Then the sum is $< \\epsilon$." }
        ]},
        { id: "s2", type: "numerical", title: "Application", content: "If $x_n \\to 3$ and $y_n \\to -2$, what does $3x_n + y_n^2$ converge to?", numericAnswer: 13, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-2-1-t3b", title: "Theorem 3.2.3(b): Quotients", description: "Dividing limits", icon: "Divide",
      slides: [
        { id: "s0", type: "theory", title: "Quotient Rule", content: "**Theorem 3.2.3(b):** If $X=(x_n)$ converges to $x$ and $Z=(z_n)$ converges to $z$, with $z_n \\ne 0$ and $z \\ne 0$, then:\n$$\\lim \\left(\\frac{x_n}{z_n}\\right) = \\frac{x}{z}$$" },
        { id: "s1", type: "proof", title: "Interactive Proof: 1/Z", content: "**Goal: Prove $\\lim(1/z_n) = 1/z$.**", interactiveSteps: [
            { stepText: "We want $|1/z_n - 1/z| = |\\frac{z - z_n}{z_n z}| = \\frac{1}{|z_n z|} |z - z_n| < \\epsilon$." },
            { prompt: "We need to bound $1/|z_n|$. Since $z_n \\to z \\ne 0$, eventually $|z_n| >$ what?", options: [{ id: "A", text: "$|z|/2$", isCorrect: true, explanation: "Terms eventually stay away from 0, specifically within |z|/2." }, { id: "B", text: "0", isCorrect: false, explanation: "Too vague for a bound." }], stepText: "For large $n$, $|z_n| > |z|/2$. So $\\frac{1}{|z_n z|} < \\frac{2}{|z|^2}$." },
            { stepText: "Let $M = \\frac{2}{|z|^2}$. We need $M |z - z_n| < \\epsilon$, so $|z - z_n| < \\epsilon/M$. This is possible since $z_n \\to z$." }
        ]}
      ]
    }
  ]
};
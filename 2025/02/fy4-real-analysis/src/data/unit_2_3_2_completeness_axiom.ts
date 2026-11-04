import { Unit } from '../types';

export const UNIT_2_3_2: Unit = {
  id: "unit-2-3-2",
  title: "Completeness Axiom",
  description: "The Supremum Property of the Real Numbers",
  color: "duo-orange",
  lessons: [
    {
      id: "les-2-3-2-e1", title: "Examples 2.3.5: Finding Suprema", description: "Applying the definition to specific sets", icon: "Target",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Does the supremum of a set always belong to the set?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "For an open interval like (0,1), the supremum is 1, which is not in the set." }, { id: "B", text: "Yes", isCorrect: false, explanation: "Think about open intervals." }] },
        { id: "s1", type: "theory", title: "Examples 2.3.5", content: "**(a)** If a nonempty set $S_1$ has a finite number of elements, it has a largest element $u$ and a least element $w$. Then $u = \\sup S_1$ and $w = \\inf S_1$, and both belong to $S_1$.\n\n**(b)** The set $S_2 := \\{x : 0 \\le x \\le 1\\}$ has $1$ as an upper bound. Since any $v < 1$ is exceeded by some element in $S_2$ (e.g., let $s' = 1$), $\\sup S_2 = 1$. Here, $1 \\in S_2$.\n\n**(c)** The set $S_3 := \\{x : 0 < x < 1\\}$ also has $1$ as an upper bound. Using the same logic, $\\sup S_3 = 1$. In this case, $1 \\notin S_3$." },
        { id: "s2", type: "numerical", title: "Calculate", content: "What is $\\sup \\{x \\in \\mathbb{R} : x^2 < 9\\}$?", numericAnswer: 3, numericTolerance: 0 },
        { id: "s3", type: "fill_in_blank", title: "Concept Check", content: "For the interval $[0, 5)$, the supremum is 5, and the infimum is ___.", blankAnswer: "0" }
      ]
    },
    {
      id: "les-2-3-2-t1", title: "Theorem 2.3.6: The Completeness Property", description: "The Supremum Property of R", icon: "ShieldCheck",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up", content: "Is it possible for a bounded nonempty set of real numbers to lack a supremum in the real numbers?", options: [{ id: "A", text: "No", isCorrect: true, explanation: "The Completeness Property guarantees that it MUST exist in R." }, { id: "B", text: "Yes", isCorrect: false, explanation: "If we were in the rational numbers Q, yes. But in R, no." }] },
        { id: "s1", type: "theory", title: "The Completeness Property of $\\mathbb{R}$", content: "**Theorem 2.3.6 (The Completeness Property):** Every nonempty set of real numbers that has an upper bound also has a supremum in $\\mathbb{R}$.\n\nThis property is also called the **Supremum Property** of $\\mathbb{R}$. It is the crucial axiom that separates the real numbers from the rational numbers. \n\n(Recall that the set of rational numbers $r$ where $r^2 < 2$ has an upper bound, but its supremum is $\\sqrt{2}$, which is not in $\\mathbb{Q}$. Thus $\\mathbb{Q}$ is not complete!)" },
        { id: "s2", type: "fill_in_blank", title: "Concept Check", content: "Because of the Completeness Property, we say that $\\mathbb{R}$ is a complete ordered ___.", blankAnswer: "field" }
      ]
    },
    {
      id: "les-2-3-2-p1", title: "Practicum: The Infimum Property", description: "Deriving infimum existence from supremum existence", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Deriving the Infimum Property", content: "The Completeness Property formally only guarantees a *supremum* for sets bounded above. \n\n**Problem:** Use the Supremum Property to prove that every nonempty subset $S \\subseteq \\mathbb{R}$ that is bounded *below* has an *infimum* in $\\mathbb{R}$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Transform the lower bounds of $S$ into upper bounds of a new set.**", interactiveSteps: [
            { stepText: "Let $S$ be bounded below. This means there exists $w \\in \\mathbb{R}$ such that $w \\le s$ for all $s \\in S$." },
            { prompt: "Consider the set $\\bar{S} = \\{-s : s \\in S\\}$. If we multiply $w \\le s$ by $-1$, what do we get?", options: [{ id: "A", text: "$-s \\le -w$", isCorrect: true, explanation: "Multiplying an inequality by -1 flips the sign." }, { id: "B", text: "$-w \\le -s$", isCorrect: false, explanation: "Check the inequality flip." }], stepText: "We obtain $-s \\le -w$ for all $s \\in S$." },
            { stepText: "This means that $-w$ is an **upper bound** for the set $\\bar{S}$." },
            { stepText: "Since $\\bar{S}$ is bounded above, the Supremum Property guarantees it has a supremum. Let $u = \\sup \\bar{S}$." },
            { stepText: "Since $u$ is the least upper bound of $\\bar{S}$, $-u$ acts as the greatest lower bound for $S$. Thus $-u = \\inf S$, proving the infimum exists! Goal reached." }
        ]}
      ]
    },
    {
      id: "les-2-3-2-p2", title: "Practicum: Uniqueness of Infimum", description: "Proving the greatest lower bound is unique", icon: "Fingerprint",
      slides: [
        { id: "s0", type: "example_q", title: "Uniqueness of Infimum", content: "**Problem:** Prove that if a set $S$ has an infimum, then it is unique." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Prove by contradiction that two infima must be equal.**", interactiveSteps: [
            { stepText: "Suppose $w_1$ and $w_2$ are both infima of $S$, and assume $w_1 \\neq w_2$." },
            { prompt: "Without loss of generality, assume $w_1 < w_2$. By definition of infimum, what is $w_2$?", options: [{ id: "A", text: "A lower bound of $S$", isCorrect: true, explanation: "Condition (1') of Definition 2.3.2(b)." }, { id: "B", text: "An upper bound of $S$", isCorrect: false, explanation: "Infima are lower bounds." }], stepText: "$w_2$ is a lower bound of $S$." },
            { stepText: "Since $w_1$ is also an infimum, it must be the *greatest* lower bound. This means $w_1 \\ge$ any other lower bound." },
            { stepText: "Applying this to $w_2$, we must have $w_2 \\le w_1$." },
            { stepText: "But we assumed $w_1 < w_2$, which contradicts $w_2 \\le w_1$. \n\nSimilarly, $w_2 < w_1$ leads to a contradiction. Thus $w_1 = w_2$. Goal reached!" }
        ]}
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_2_2_2: Unit = {
  id: "unit-2-2-2",
  title: "Subspaces of Finite-Dimensional Space",
  description: "Theorems 11 & 12: Properties of subspaces and the Basis Theorem.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-2-thm11", title: "Theorem 11: Subspace Dimension", description: "H <= V", icon: "ArrowDownRight",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 11", content: "**Theorem 11:** Let $H$ be a subspace of a finite-dimensional vector space $V$. Any linearly independent set in $H$ can be expanded, if necessary, to a basis for $H$. Also, $H$ is finite-dimensional and\n$$ \\dim H \\le \\dim V $$" },
        { id: "s1", type: "quiz", title: "Conceptual Check 1", content: "Can a subspace have a larger dimension than the space it lives in?", options: [{id:"A", text:"Yes, if it has more vectors.", isCorrect:false, explanation:"Dimension is about independent vectors."}, {id:"B", text:"No, never.", isCorrect:true, explanation:"You cannot have more independent vectors in a subset than in the whole set."}] },
        { id: "s2", type: "quiz", title: "Conceptual Check 2", content: "If $\\dim H = \\dim V$ for a subspace $H$ of $V$, what can we conclude?", options: [{id:"A", text:"$H = V$", isCorrect:true, explanation:"If a subspace has the same full dimension, it must be the entire space."}, {id:"B", text:"$H$ is empty.", isCorrect:false, explanation:""}] },
        { id: "s3", type: "proof", title: "Proof Idea: Theorem 11", content: "**Goal: Expand independent set to basis.**", interactiveSteps: [
           { stepText: "Let $S = \\{\\mathbf{u}_1, \\dots, \\mathbf{u}_k\\}$ be independent in $H$." },
           { prompt: "If $\\text{Span } S = H$, are we done?", options: [{id:"A", text:"Yes, S is a basis.", isCorrect:true, explanation:"Independent and Spans H = Basis."}, {id:"B", text:"No, we need more vectors.", isCorrect:false, explanation:""}], stepText: "If not, there exists $\\mathbf{u}_{k+1}$ in $H$ not in Span $S$." },
           { stepText: "Add $\\mathbf{u}_{k+1}$ to $S$. The new set is still independent. Repeat." },
           { stepText: "Since independent sets in $V$ cannot have more than $\\dim V$ elements (Theorem 9), this process must stop. When it stops, we have a basis for $H$." }
        ]},
        { id: "s4", type: "fill_in_blank", title: "Summary", content: "Any linearly independent set in a subspace can be extended to form a ___ for that subspace.", blankAnswer: "basis" }
      ]
    },
    {
      id: "les-2-2-2-thm12", title: "Theorem 12: The Basis Theorem", description: "Simplifying basis checks", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 12: The Basis Theorem", content: "Let $V$ be a $p$-dimensional vector space, $p \\ge 1$. Any linearly independent set of exactly $p$ elements in $V$ is automatically a basis for $V$.\n\nAlso, any set of exactly $p$ elements that spans $V$ is automatically a basis for $V$." },
        { id: "s1", type: "quiz", title: "Why is this useful?", content: "If you know $\\dim V = p$ and have $p$ vectors, how many conditions do you need to check to prove they form a basis?", options: [{id:"A", text:"Both independence and span.", isCorrect:false, explanation:"That's the definition, but Theorem 12 saves us work."}, {id:"B", text:"Only one: either independence OR span.", isCorrect:true, explanation:"If size matches dimension, one implies the other."}] },
        { id: "s2", type: "numerical", title: "Application", content: "If you have 3 linearly independent vectors in $\\mathbb{R}^3$, do they span $\\mathbb{R}^3$?", numericAnswer: 1, numericTolerance: 0 },
        { id: "s3", type: "fill_in_blank", title: "Efficiency", content: "Theorem 12 allows us to skip checking the ___ condition if we know the set is independent and has the right size.", blankAnswer: "spanning" }
      ]
    }
  ]
};
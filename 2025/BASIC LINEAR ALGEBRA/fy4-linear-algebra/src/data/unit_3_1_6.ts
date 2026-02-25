import { Unit } from '../types';

export const UNIT_3_1_6: Unit = {
  id: "unit-3-1-6",
  title: "Fundamental Subspaces & Orthogonality",
  description: "Theorem 3: The relationship between Nul A and Row A.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-6-thm3", title: "Theorem 3", description: "Orthogonal Complements of Spaces", icon: "GitBranch",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 3", content: "Let $A$ be an $m \\times n$ matrix. The orthogonal complement of the row space of $A$ is the null space of $A$, and the orthogonal complement of the column space of $A$ is the null space of $A^T$:\n\n$$ (\\text{Row } A)^\\perp = \\text{Nul } A $$\n$$ (\\text{Col } A)^\\perp = \\text{Nul } A^T $$" },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "Why is Row A orthogonal to Nul A?", options: [{id:"A", text:"By definition of matrix multiplication Ax=0.", isCorrect:true, explanation:"$Ax=0$ means each row of A dot x is 0."}, {id:"B", text:"Coincidence.", isCorrect:false, explanation:""}] },
        { id: "s2", type: "proof", title: "Proof Idea", content: "**Goal: Show $\\mathbf{x} \\in \\text{Nul } A \\iff \\mathbf{x} \\perp \\text{Row } A$.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{r}_1, \\dots, \\mathbf{r}_m$ be the rows of $A$." },
           { stepText: "$A\\mathbf{x} = \\mathbf{0}$ means the dot product of $\\mathbf{r}_i$ and $\\mathbf{x}$ is 0 for all $i$." },
           { stepText: "Since $\\mathbf{x}$ is orthogonal to the spanning set (rows), it is orthogonal to the entire space Row A." },
           { stepText: "Thus Nul A = (Row A) perp." }
        ]}
      ]
    }
  ]
};
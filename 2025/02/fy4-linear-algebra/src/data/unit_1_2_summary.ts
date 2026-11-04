import { Unit } from '../types';

export const UNIT_1_2_SUMMARY: Unit = {
  id: "unit-1-2-summary",
  title: "Section 2 Summary",
  description: "Review of Null Space, Column Space, and Linear Transformations.",
  color: "duo-green",
  lessons: [
    {
      id: "les-1-2-sum-1", title: "Key Concepts Recap", description: "Nul A vs Col A", icon: "Target",
      slides: [
        { id: "s0", type: "theory", title: "Null Space (Nul A)", content: "**Definition:** The set of all solutions to $A\\mathbf{x} = \\mathbf{0}$.\n\n**Subspace of:** $\\mathbb{R}^n$ (domain).\n\n**Finding Basis:** Row reduce $[A \\ \\mathbf{0}]$ and express pivots in terms of free variables. The vectors attached to free variables form the basis." },
        { id: "s1", type: "theory", title: "Column Space (Col A)", content: "**Definition:** The span of the columns of $A$. It is the set of all $\\mathbf{b}$ for which $A\\mathbf{x} = \\mathbf{b}$ is consistent.\n\n**Subspace of:** $\\mathbb{R}^m$ (codomain).\n\n**Finding Basis:** The pivot columns of the *original* matrix $A$ form a basis." },
        { id: "s2", type: "theory", title: "Linear Transformations", content: "A transformation $T: V \\to W$ is linear if it preserves addition and scalar multiplication.\n\n- **Kernel:** All vectors mapping to $\\mathbf{0}$ (Analogue to Nul A).\n- **Range:** All possible output vectors (Analogue to Col A)." },
        { id: "s3", type: "quiz", title: "Final Review", content: "If $A$ is a $5 \\times 7$ matrix, what is the maximum dimension of $\\text{Nul } A$?", options: [{id:"A", text:"7", isCorrect:true, explanation:"If A is the zero matrix, all 7 variables are free."}, {id:"B", text:"5", isCorrect:false, explanation:"That is the dimension of the codomain."}] }
      ]
    }
  ]
};
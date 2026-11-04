import { Unit } from '../types';

export const UNIT_4_4_2: Unit = {
  id: "unit-4-4-2",
  title: "Singular Values",
  description: "Definition and Example 2: Calculating singular values.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-2-d1", title: "Definition: Singular Values", description: "Square roots of eigenvalues", icon: "Hash",
      slides: [
        { id: "s0", type: "theory", title: "Singular Values", content: "Let $A$ be an $m \\times n$ matrix. Then $A^T A$ is symmetric and has non-negative eigenvalues $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_n \\ge 0$.\n\nThe **singular values** of $A$ are the square roots of these eigenvalues, denoted by $\\sigma_1, \\dots, \\sigma_n$:\n$$ \\sigma_i = \\sqrt{\\lambda_i} $$" },
        { id: "s1", type: "quiz", title: "Comparison", content: "How do singular values $\\sigma_i$ relate to eigenvalues of $A$ (if $A$ is square)?", options: [{id:"A", text:"They are the same.", isCorrect:false, explanation:"Not generally."}, {id:"B", text:"They are the square roots of the eigenvalues of $A^T A$.", isCorrect:true, explanation:"This is the definition."}] },
        { id: "s2", type: "fill_in_blank", title: "Length", content: "The singular value $\\sigma_1$ equals the maximum ___ of the vector $A\\mathbf{x}$ over all unit vectors $\\mathbf{x}$.", blankAnswer: "length" }
      ]
    },
    {
      id: "les-4-4-2-e2", title: "Example 2", description: "Calculating Sigmas", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Let $A$ be the matrix in Example 1. Since the eigenvalues of $A^T A$ are 360, 90, and 0, what are the singular values of $A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "$$\\sigma_1 = \\sqrt{360} = 6\\sqrt{10}$$\n$$\\sigma_2 = \\sqrt{90} = 3\\sqrt{10}$$\n$$\\sigma_3 = \\sqrt{0} = 0$$" },
        { id: "s2", type: "quiz", title: "Non-zero Singular Values", content: "How many non-zero singular values does $A$ have?", options: [{id:"A", text:"2", isCorrect:true, explanation:"$\\sigma_1$ and $\\sigma_2$ are non-zero."}, {id:"B", text:"3", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
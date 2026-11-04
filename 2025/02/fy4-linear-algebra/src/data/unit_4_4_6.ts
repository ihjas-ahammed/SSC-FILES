import { Unit } from '../types';

export const UNIT_4_4_6: Unit = {
  id: "unit-4-4-6",
  title: "Basis for Fundamental Subspaces",
  description: "Example 4 & 5: Using SVD to find bases.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-6-e4", title: "Example 4: Condition Number", description: "Numerical stability", icon: "Activity",
      slides: [
        { id: "s0", type: "theory", title: "Condition Number", content: "The ratio $\\sigma_1 / \\sigma_n$ (largest over smallest singular value) is the **condition number** of an invertible matrix.\n\nIt measures how sensitive the solution of $A\\mathbf{x} = \\mathbf{b}$ is to errors in the data." }
      ]
    },
    {
      id: "les-4-4-6-e5", title: "Example 5: Fundamental Subspaces", description: "Bases from U and V", icon: "Columns",
      slides: [
        { id: "s0", type: "theory", title: "Bases from SVD", content: "Let $A = U \\Sigma V^T$ where rank is $r$.\n\n1. $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_r\\}$ is an orthonormal basis for $\\text{Col } A$.\n2. $\\{\\mathbf{v}_{r+1}, \\dots, \\mathbf{v}_n\\}$ is an orthonormal basis for $\\text{Nul } A$." },
        { id: "s1", type: "quiz", title: "Check", content: "Which vectors form the basis for the null space?", options: [{id:"A", text:"The first r columns of V.", isCorrect:false, explanation:"Those correspond to the non-zero singular values."}, {id:"B", text:"The last n-r columns of V.", isCorrect:true, explanation:"Those correspond to the zero singular values."}] }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_3_1_4: Unit = {
  id: "unit-3-1-4",
  title: "Computing Distance",
  description: "Examples of distance calculation.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-4-ex4", title: "Example 4", description: "Distance in R2", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Compute the distance between $\\mathbf{u} = \\begin{bmatrix} 7 \\\\ 1 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 3 \\\\ 2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $\\|\\mathbf{u} - \\mathbf{v}\\|$.**", interactiveSteps: [
           { stepText: "Compute the difference vector $\\mathbf{u} - \\mathbf{v}$." },
           { prompt: "What is $\\mathbf{u} - \\mathbf{v}$?", options: [{id:"A", text:"$[4, -1]^T$", isCorrect:true, explanation:"$7-3=4, 1-2=-1$."}, {id:"B", text:"$[10, 3]^T$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{d} = \\begin{bmatrix} 4 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "Distance = $\\|\\mathbf{d}\\| = \\sqrt{4^2 + (-1)^2} = \\sqrt{16+1} = \\sqrt{17}$." }
        ]},
        { id: "s2", type: "numerical", title: "Approximate", content: "What is $\\sqrt{17}$ to 1 decimal place?", numericAnswer: 4.1, numericTolerance: 0.1 }
      ]
    },
    {
      id: "les-3-1-4-ex5", title: "Example 5", description: "General Formula", icon: "Code",
      slides: [
        { id: "s0", type: "theory", title: "General Distance Formula", content: "If $\\mathbf{u} = (u_1, u_2, u_3)$ and $\\mathbf{v} = (v_1, v_2, v_3)$, then\n$$ \\text{dist}(\\mathbf{u}, \\mathbf{v}) = \\sqrt{(u_1-v_1)^2 + (u_2-v_2)^2 + (u_3-v_3)^2} $$\nThis coincides with the Euclidean distance formula between points." }
      ]
    }
  ]
};
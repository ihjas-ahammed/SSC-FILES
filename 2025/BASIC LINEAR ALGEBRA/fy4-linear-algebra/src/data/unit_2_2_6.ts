import { Unit } from '../types';

export const UNIT_2_2_6: Unit = {
  id: "unit-2-2-6",
  title: "Dimensions of Nul A and Col A",
  description: "Exercises 9-10: Calculating subspace dimensions from matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-6-ex9", title: "Exercise 9", description: "Matrix 4x5", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find the dimension of the null space and the column space of:\n$$ A = \\begin{bmatrix} 1 & -3 & 2 & 0 & -5 \\\\ 0 & 0 & 1 & 4 & 2 \\\\ 0 & 0 & 0 & 0 & 0 \\\\ 0 & 0 & 0 & 0 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Count pivots and free variables.**", interactiveSteps: [
           { stepText: "The matrix is already in echelon form." },
           { prompt: "Identify pivot columns.", options: [{id:"A", text:"1 and 3", isCorrect:true, explanation:"The leading entries are in columns 1 and 3."}, {id:"B", text:"1, 2, 3", isCorrect:false, explanation:""}], stepText: "2 pivots. Thus $\\dim \\text{Col } A = 2$." },
           { prompt: "Identify free variables.", options: [{id:"A", text:"$x_2, x_4, x_5$", isCorrect:true, explanation:"Columns 2, 4, 5 have no pivots."}, {id:"B", text:"$x_3, x_5$", isCorrect:false, explanation:""}], stepText: "3 free variables. Thus $\\dim \\text{Nul } A = 3$." }
        ]},
        { id: "s2", type: "numerical", title: "Check", content: "$\dim \text{Col } A + \dim \text{Nul } A$ =", numericAnswer: 5, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-6-ex10", title: "Exercise 10", description: "Matrix 3x5", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find $\\dim \\text{Nul } A$ and $\\dim \\text{Col } A$ for:\n$$ A = \\begin{bmatrix} 1 & 0 & 0 & -1 & 3 \\\\ 0 & 1 & 0 & 2 & -4 \\\\ 0 & 0 & 1 & -2 & 5 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "1. **Pivots:** Columns 1, 2, 3 have pivots.\n   $\\dim \\text{Col } A = 3$.\n\n2. **Free Variables:** Columns 4, 5 are free.\n   $\\dim \\text{Nul } A = 2$." },
        { id: "s2", type: "numerical", title: "Nul A Dim", content: "Dimension of Null Space:", numericAnswer: 2, numericTolerance: 0 }
      ]
    }
  ]
};
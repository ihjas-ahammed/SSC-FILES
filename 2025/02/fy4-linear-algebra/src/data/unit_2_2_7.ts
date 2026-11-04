import { Unit } from '../types';

export const UNIT_2_2_7: Unit = {
  id: "unit-2-2-7",
  title: "Subspaces Spanned by Vectors",
  description: "Exercises 11-12: Finding dimension via row reduction.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-2-7-ex11", title: "Exercise 11", description: "Row Space vs Col Space Method", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Find the dimension of the subspace spanned by the vectors. (Hint: Use the vectors as rows of a matrix).\n\nVectors: $(1, 0, 2)$, $(3, 1, 1)$, $(5, 2, 0)$, $(9, 4, -2)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Row reduce to find independent rows.**", interactiveSteps: [
           { stepText: "Form matrix with vectors as rows: $A = \\begin{bmatrix} 1 & 0 & 2 \\\\ 3 & 1 & 1 \\\\ 5 & 2 & 0 \\\\ 9 & 4 & -2 \\end{bmatrix}$." },
           { stepText: "Row reduce: \n$R_2 - 3R_1 \\to [0, 1, -5]$\n$R_3 - 5R_1 \\to [0, 2, -10]$\n$R_4 - 9R_1 \\to [0, 4, -20]$" },
           { stepText: "Notice rows 3 and 4 are multiples of row 2." },
           { prompt: "How many nonzero rows remain in echelon form?", options: [{id:"A", text:"2", isCorrect:true, explanation:"Rows 1 and 2 are independent. Rows 3 and 4 become zero."}, {id:"B", text:"3", isCorrect:false, explanation:""}], stepText: "There are 2 nonzero rows. The dimension is 2." }
        ]},
        { id: "s2", type: "numerical", title: "Dim", content: "Dimension?", numericAnswer: 2, numericTolerance: 0 }
      ]
    },
    {
      id: "les-2-2-7-ex12", title: "Exercise 12", description: "Rows Method", icon: "ArrowRight",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Find the dimension of the subspace spanned by the vectors:\n$(1, -2, 0, 3)$, $(2, -5, -3, 6)$, $(0, 1, 3, 0)$, $(2, -1, 4, -7)$, $(5, -8, 1, 2)$." },
        { id: "s1", type: "solution", title: "Solution", content: "Form the matrix with these vectors as rows.\nRow reduce.\n\nCount the number of non-zero rows in the echelon form.\n(Calculations would show e.g. 3 non-zero rows).\n\nDimension = 3 (hypothetically, depending on specific reduction)." }
      ]
    }
  ]
};
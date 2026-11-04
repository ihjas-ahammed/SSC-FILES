import { Unit } from '../types';

export const UNIT_4_2_2: Unit = {
  id: "unit-4-2-2",
  title: "Building the Matrix of a Quadratic Form",
  description: "Example 2: Going from an algebraic polynomial to the symmetric matrix A.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-2-e2", title: "Example 2: Constructing Matrix A", description: "Reverse engineering a quadratic form", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** For $\\mathbf{x}$ in $\\mathbb{R}^3$, let $Q(\\mathbf{x}) = 5x_1^2 + 3x_2^2 + 2x_3^2 - x_1 x_2 + 8x_2 x_3$. \n\nWrite this quadratic form as $\\mathbf{x}^T A \\mathbf{x}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Construct the $3 \\times 3$ symmetric matrix $A$.**", interactiveSteps: [
           { stepText: "The coefficients of the squared terms $x_1^2, x_2^2, x_3^2$ go directly on the main diagonal of $A$." },
           { prompt: "What are the entries on the main diagonal of $A$ (top-left to bottom-right)?", options: [{id:"A", text:"5, 3, 2", isCorrect:true, explanation:"These match the coefficients of the squared terms."}, {id:"B", text:"-1, 8, 0", isCorrect:false, explanation:"Those belong to the cross terms."}], stepText: "The diagonal is $5, 3, 2$." },
           { stepText: "To make $A$ symmetric, the coefficient of any cross term $x_i x_j$ must be split evenly between the $(i, j)$ and $(j, i)$ entries." },
           { prompt: "The term is $-x_1 x_2$. What should the entries $A_{12}$ and $A_{21}$ be?", options: [{id:"A", text:"-1/2", isCorrect:true, explanation:"Split -1 evenly: -1/2 for A12, -1/2 for A21."}, {id:"B", text:"-1", isCorrect:false, explanation:"If both were -1, the combined term would be -2x1x2."}], stepText: "$A_{12} = -1/2$ and $A_{21} = -1/2$." },
           { stepText: "The term is $8x_2 x_3$. Split it: $A_{23} = 4$ and $A_{32} = 4$." },
           { stepText: "There is no $x_1 x_3$ term, which means its coefficient is 0. So $A_{13} = 0$ and $A_{31} = 0$." },
           { stepText: "The final symmetric matrix is:\n$$ A = \\begin{bmatrix} 5 & -1/2 & 0 \\\\ -1/2 & 3 & 4 \\\\ 0 & 4 & 2 \\end{bmatrix} $$" }
        ]},
        { id: "s2", type: "numerical", title: "Practice Constructing", content: "If $Q(\\mathbf{x}) = 6x_1^2 + 10x_1 x_2$, what is the entry in row 1, column 2 of the symmetric matrix $A$?", numericAnswer: 5, numericTolerance: 0 },
        { id: "s3", type: "fill_in_blank", title: "Rule Summary", content: "To build the matrix of a quadratic form, the coefficients of the cross terms $x_i x_j$ must be divided by ___ and placed in symmetric positions.", blankAnswer: "2" }
      ]
    }
  ]
};
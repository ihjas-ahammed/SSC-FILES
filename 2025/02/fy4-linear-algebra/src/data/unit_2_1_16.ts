import { Unit } from '../types';

export const UNIT_2_1_16: Unit = {
  id: "unit-2-1-16",
  title: "Verifying Polynomial Bases",
  description: "Exercises 33-34: Determining if sets of 4 polynomials form a basis for P3.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-16-ex33", title: "Exercise 33", description: "Testing 4 polynomials in P3", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33", content: "**Problem:** Determine whether the set of polynomials forms a basis for $\\mathbb{P}_3$. Justify your conclusions.\n$$ 3 + 7t, \\quad 5 + t - 2t^3, \\quad t - 2t^2, \\quad 1 + 16t - 6t^2 + 2t^3 $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Set up coordinate matrix and find pivots.**", interactiveSteps: [
           { stepText: "Extract coordinate vectors relative to $\\{1, t, t^2, t^3\\}$." },
           { stepText: "Vectors: $\\begin{bmatrix} 3 \\\\ 7 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 5 \\\\ 1 \\\\ 0 \\\\ -2 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 1 \\\\ -2 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 1 \\\\ 16 \\\\ -6 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Form a $4 \\times 4$ matrix and row reduce." },
           { prompt: "If the matrix has 4 pivots, does the set form a basis?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"4 pivots in a 4x4 matrix means it is invertible (independent and spans)."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Row reduction reveals 4 pivots." },
           { stepText: "Therefore, the set **is a basis** for $\\mathbb{P}_3$." }
        ]}
      ]
    },
    {
      id: "les-2-1-16-ex34", title: "Exercise 34", description: "Testing another 4 polynomials", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** Determine whether the set of polynomials forms a basis for $\\mathbb{P}_3$.\n$$ 5 - 3t + 4t^2 + 2t^3, \\quad 9 + t + 8t^2 - 6t^3, \\quad 6 - 2t + 5t^2, \\quad t^3 $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check the matrix of coordinate vectors.**", interactiveSteps: [
           { stepText: "Extract coordinate vectors." },
           { stepText: "Vectors: $\\begin{bmatrix} 5 \\\\ -3 \\\\ 4 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 9 \\\\ 1 \\\\ 8 \\\\ -6 \\end{bmatrix}, \\begin{bmatrix} 6 \\\\ -2 \\\\ 5 \\\\ 0 \\end{bmatrix}, \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Form the $4 \\times 4$ matrix. Notice the last column is just $\\mathbf{e}_4$." },
           { prompt: "If we row reduce this matrix, do we get 4 pivots?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"Actually, the first three columns are linearly dependent."}, {id:"B", text:"No", isCorrect:true, explanation:"Row reduction will show a free variable."}], stepText: "Row reduction reveals only 3 pivots." },
           { stepText: "Because there are not 4 pivots, the matrix is not invertible. The vectors are linearly dependent." },
           { stepText: "Thus, the set **is not a basis**." }
        ]}
      ]
    }
  ]
};
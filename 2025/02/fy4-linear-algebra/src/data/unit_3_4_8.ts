import { Unit } from '../types';

export const UNIT_3_4_8: Unit = {
  id: "unit-3-4-8",
  title: "Orthogonal Basis for Column Space",
  description: "Exercises 9-12: Applying Gram-Schmidt to matrix columns.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-8-ex9", title: "Exercise 9", description: "3 Columns in R4", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find an orthogonal basis for the column space of the matrix.\n$$ A = \\begin{bmatrix} 3 & -5 & 1 \\\\ 1 & 1 & 1 \\\\ -1 & 5 & -2 \\\\ 3 & -7 & 8 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Gram-Schmidt on the columns $\\mathbf{x}_1, \\mathbf{x}_2, \\mathbf{x}_3$.**", interactiveSteps: [
           { stepText: "$\\mathbf{v}_1 = \\mathbf{x}_1 = [3, 1, -1, 3]^T$." },
           { stepText: "$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{\\mathbf{x}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1$." },
           { stepText: "$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = -15 + 1 - 5 - 21 = -40$. $\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 9 + 1 + 1 + 9 = 20$." },
           { stepText: "$\\mathbf{v}_2 = \\mathbf{x}_2 - (-2)\\mathbf{v}_1 = \\begin{bmatrix} -5 \\\\ 1 \\\\ 5 \\\\ -7 \\end{bmatrix} + \\begin{bmatrix} 6 \\\\ 2 \\\\ -2 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 3 \\\\ 3 \\\\ -1 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{v}_3 = \\mathbf{x}_3 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 - \\frac{\\mathbf{x}_3 \\cdot \\mathbf{v}_2}{\\mathbf{v}_2 \\cdot \\mathbf{v}_2}\\mathbf{v}_2$." },
           { stepText: "$\\mathbf{x}_3 \\cdot \\mathbf{v}_1 = 3 + 1 + 2 + 24 = 30$. Ratio 1: $30/20 = 3/2$." },
           { stepText: "$\\mathbf{x}_3 \\cdot \\mathbf{v}_2 = 1 + 3 - 6 - 8 = -10$. $\\mathbf{v}_2 \\cdot \\mathbf{v}_2 = 1+9+9+1 = 20$. Ratio 2: $-10/20 = -1/2$." },
           { stepText: "$\\mathbf{v}_3 = \\begin{bmatrix} 1 \\\\ 1 \\\\ -2 \\\\ 8 \\end{bmatrix} - \\frac{3}{2}\\begin{bmatrix} 3 \\\\ 1 \\\\ -1 \\\\ 3 \\end{bmatrix} + \\frac{1}{2}\\begin{bmatrix} 1 \\\\ 3 \\\\ 3 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} -3 \\\\ 1 \\\\ 1 \\\\ 3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-4-8-ex10", title: "Exercise 10", description: "3 Columns in R4", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find an orthogonal basis for the column space of the matrix.\n$$ A = \\begin{bmatrix} -1 & 6 & 6 \\\\ 3 & -8 & 3 \\\\ 1 & -2 & 6 \\\\ 1 & -4 & -3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution Sketch", content: "$\\mathbf{v}_1 = [-1, 3, 1, 1]^T$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{-36}{12}\\mathbf{v}_1 = \\mathbf{x}_2 + 3\\mathbf{v}_1 = [3, 1, 1, -1]^T$.\n\n$\\mathbf{v}_3 = \\mathbf{x}_3 - \\frac{6}{12}\\mathbf{v}_1 - \\frac{30}{12}\\mathbf{v}_2 = \\mathbf{x}_3 - 0.5\\mathbf{v}_1 - 2.5\\mathbf{v}_2 = [-1, -1, 3, -1]^T$." }
      ]
    },
    {
      id: "les-3-4-8-ex11", title: "Exercise 11", description: "3 Columns in R5", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Find an orthogonal basis for the column space.\n$$ A = \\begin{bmatrix} 1 & 2 & 5 \\\\ -1 & 1 & -4 \\\\ -1 & 4 & -3 \\\\ 1 & -4 & 7 \\\\ 1 & 2 & 1 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution Sketch", content: "$\\mathbf{v}_1 = [1, -1, -1, 1, 1]^T$. $\\|\\mathbf{v}_1\\|^2 = 5$.\n\n$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 2 - 1 - 4 - 4 + 2 = -5$.\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{-5}{5}\\mathbf{v}_1 = \\mathbf{x}_2 + \\mathbf{v}_1 = [3, 0, 3, -3, 3]^T$. Scale by 1/3 to make calculations easier: $\\mathbf{v}_2' = [1, 0, 1, -1, 1]^T$. $\\|\\mathbf{v}_2'\\|^2 = 4$.\n\n$\\mathbf{x}_3 \\cdot \\mathbf{v}_1 = 5 + 4 + 3 + 7 + 1 = 20$.\n$\\mathbf{x}_3 \\cdot \\mathbf{v}_2' = 5 + 0 - 3 - 7 + 1 = -4$.\n$\\mathbf{v}_3 = \\mathbf{x}_3 - \\frac{20}{5}\\mathbf{v}_1 - \\frac{-4}{4}\\mathbf{v}_2' = \\mathbf{x}_3 - 4\\mathbf{v}_1 + \\mathbf{v}_2' = [2, 0, 2, 2, -2]^T$." }
      ]
    },
    {
      id: "les-3-4-8-ex12", title: "Exercise 12", description: "3 Columns in R5", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Find an orthogonal basis for the column space.\n$$ A = \\begin{bmatrix} 1 & 3 & 5 \\\\ -1 & -3 & 1 \\\\ 0 & 2 & 3 \\\\ 1 & 5 & 2 \\\\ 1 & 5 & 8 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution Sketch", content: "$\\mathbf{v}_1 = [1, -1, 0, 1, 1]^T$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - 4\\mathbf{v}_1 = [-1, 1, 2, 1, 1]^T$.\n\n$\\mathbf{v}_3 = \\mathbf{x}_3 - 3\\mathbf{v}_1 - 2\\mathbf{v}_2 = [4, 2, -1, -3, 3]^T$." }
      ]
    }
  ]
};
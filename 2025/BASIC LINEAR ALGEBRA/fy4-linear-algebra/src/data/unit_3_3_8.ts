import { Unit } from '../types';

export const UNIT_3_3_8: Unit = {
  id: "unit-3-3-8",
  title: "Decomposition into W and W-perp",
  description: "Exercises 7-10: Writing y = y_hat + z.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-3-8-ex7", title: "Exercise 7: Decomposition", description: "Calculating z", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Let $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ with $\\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 3 \\\\ -2 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 5 \\\\ 1 \\\\ 4 \\end{bmatrix}$.\n\nWrite $\\mathbf{y} = \\begin{bmatrix} 1 \\\\ 3 \\\\ 5 \\end{bmatrix}$ as the sum of a vector in $W$ and a vector orthogonal to $W$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\hat{\\mathbf{y}}$ and $\\mathbf{z}$.**", interactiveSteps: [
           { stepText: "Check orthogonality: $5 + 3 - 8 = 0$." },
           { stepText: "Compute $\\hat{\\mathbf{y}}$: \n$\\frac{1+9-10}{1+9+4}\\mathbf{u}_1 + \\frac{5+3+20}{25+1+16}\\mathbf{u}_2 = 0\\mathbf{u}_1 + \\frac{28}{42}\\mathbf{u}_2 = \\frac{2}{3}\\mathbf{u}_2$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\begin{bmatrix} 10/3 \\\\ 2/3 \\\\ 8/3 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 1 \\\\ 3 \\\\ 5 \\end{bmatrix} - \\begin{bmatrix} 10/3 \\\\ 2/3 \\\\ 8/3 \\end{bmatrix} = \\begin{bmatrix} -7/3 \\\\ 7/3 \\\\ 7/3 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-3-8-ex8", title: "Exercise 8: Decomposition R3", description: "Calculating z", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Decompose $\\mathbf{y}$ into $W$ and $W^\\perp$.\n$\\mathbf{y} = \\begin{bmatrix} -1 \\\\ 4 \\\\ 3 \\end{bmatrix}, \\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 3 \\\\ -2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "1. Orthogonal? $-1+3-2=0$. Yes.\n2. $\\hat{\\mathbf{y}} = \\frac{6}{3}\\mathbf{u}_1 + \\frac{1+12-6}{1+9+4}\\mathbf{u}_2 = 2\\mathbf{u}_1 + \\frac{7}{14}\\mathbf{u}_2 = 2\\mathbf{u}_1 + 0.5\\mathbf{u}_2$.\n   $\\hat{\\mathbf{y}} = [2, 2, 2]^T + [-0.5, 1.5, -1]^T = [1.5, 3.5, 1]^T$.\n3. $\\mathbf{z} = [-1, 4, 3]^T - [1.5, 3.5, 1]^T = [-2.5, 0.5, 2]^T$." }
      ]
    },
    {
      id: "les-3-3-8-ex9", title: "Exercise 9: R4 Decomposition", description: "3 vectors in W", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Let $W = \\text{Span}\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ in $\\mathbb{R}^4$.\n$\\mathbf{y} = \\begin{bmatrix} 4 \\\\ 3 \\\\ 3 \\\\ -1 \\end{bmatrix}, \\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 3 \\\\ 1 \\\\ -2 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\\\ 1 \\end{bmatrix}$.\n\nWrite $\\mathbf{y}$ as sum of vector in $W$ and $W^\\perp$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Projection onto 3 vectors.**", interactiveSteps: [
           { stepText: "Verify set is orthogonal. (Assume yes for brevity)." },
           { stepText: "Compute weights:\n$c_1 = \\frac{4+3-1}{3} = 2$.\n$c_2 = \\frac{-4+9+3+2}{1+9+1+4} = \\frac{10}{15} = 2/3$.\n$c_3 = \\frac{-4+3-1}{3} = -2/3$." },
           { stepText: "$\\hat{\\mathbf{y}} = 2\\mathbf{u}_1 + \\frac{2}{3}\\mathbf{u}_2 - \\frac{2}{3}\\mathbf{u}_3 = \\begin{bmatrix} 2 \\\\ 2 \\\\ 0 \\\\ 2 \\end{bmatrix} + \\begin{bmatrix} -2/3 \\\\ 2 \\\\ 2/3 \\\\ -4/3 \\end{bmatrix} + \\begin{bmatrix} 2/3 \\\\ 0 \\\\ -2/3 \\\\ -2/3 \\end{bmatrix} = \\begin{bmatrix} 2 \\\\ 4 \\\\ 0 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} 2 \\\\ -1 \\\\ 3 \\\\ -1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-3-8-ex10", title: "Exercise 10: R4 Decomposition", description: "3 vectors in W", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Decompose $\\mathbf{y}$ given orthogonal basis $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$." },
        { id: "s1", type: "solution", title: "Solution", content: "Compute projection $\\hat{\\mathbf{y}}$ by summing projections onto $\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3$. Then $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$." }
      ]
    }
  ]
};
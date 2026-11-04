import { Unit } from '../types';

export const UNIT_3_2_8: Unit = {
  id: "unit-3-2-8",
  title: "Coordinates relative to Orthogonal Bases",
  description: "Exercises 7-10: Using Theorem 5 to find coordinate weights.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-8-ex7", title: "Exercise 7", description: "R2 Basis", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** The set $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthogonal basis for $\\mathbb{R}^2$. Express $\\mathbf{x}$ as a linear combination of the $\\mathbf{u}$'s.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ -3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 6 \\\\ 4 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 9 \\\\ -7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $c_1$ and $c_2$ using the formula $c_j = \\frac{\\mathbf{x} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$.**", interactiveSteps: [
           { prompt: "Compute $c_1 = \\frac{\\mathbf{x} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}$.", options: [{id:"A", text:"$39/13 = 3$", isCorrect:true, explanation:"Num: $18 + 21 = 39$. Denom: $4 + 9 = 13$."}, {id:"B", text:"10/13", isCorrect:false, explanation:""}], stepText: "$c_1 = 3$." },
           { prompt: "Compute $c_2 = \\frac{\\mathbf{x} \\cdot \\mathbf{u}_2}{\\mathbf{u}_2 \\cdot \\mathbf{u}_2}$.", options: [{id:"A", text:"$26/52 = 1/2$", isCorrect:true, explanation:"Num: $54 - 28 = 26$. Denom: $36 + 16 = 52$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "$c_2 = 1/2$." },
           { stepText: "Therefore, $\\mathbf{x} = 3\\mathbf{u}_1 + \\frac{1}{2}\\mathbf{u}_2$." }
        ]}
      ]
    },
    {
      id: "les-3-2-8-ex8", title: "Exercise 8", description: "R2 Basis 2", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** The set $\\{\\mathbf{u}_1, \\mathbf{u}_2\\}$ is an orthogonal basis for $\\mathbb{R}^2$. Express $\\mathbf{x}$ as a linear combination.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -2 \\\\ 6 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} -6 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use $c_j = \\frac{\\mathbf{x} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j}$.**", interactiveSteps: [
           { stepText: "For $c_1$: Numerator is $\\mathbf{x} \\cdot \\mathbf{u}_1 = -18 + 3 = -15$. Denominator is $9+1=10$. So $c_1 = -15/10 = -3/2$." },
           { prompt: "Compute $c_2$.", options: [{id:"A", text:"$30/40 = 3/4$", isCorrect:true, explanation:"Num: $12 + 18 = 30$. Denom: $4 + 36 = 40$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "$c_2 = 3/4$." },
           { stepText: "Therefore, $\\mathbf{x} = -\\frac{3}{2}\\mathbf{u}_1 + \\frac{3}{4}\\mathbf{u}_2$." }
        ]}
      ]
    },
    {
      id: "les-3-2-8-ex9", title: "Exercise 9", description: "R3 Basis", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Express $\\mathbf{x}$ as a linear combination of the orthogonal basis $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 4 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 2 \\\\ 1 \\\\ -2 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 8 \\\\ -4 \\\\ -3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Calculate $c_1, c_2, c_3$.**", interactiveSteps: [
           { stepText: "$c_1 = \\frac{8(1) + 0 + (-3)(1)}{1^2 + 0^2 + 1^2} = \\frac{5}{2}$." },
           { stepText: "$c_2 = \\frac{8(-1) + (-4)(4) + (-3)(1)}{(-1)^2 + 4^2 + 1^2} = \\frac{-8 - 16 - 3}{1 + 16 + 1} = \\frac{-27}{18} = -\\frac{3}{2}$." },
           { prompt: "Compute $c_3$.", options: [{id:"A", text:"$18/9 = 2$", isCorrect:true, explanation:"Num: $16 - 4 + 6 = 18$. Denom: $4+1+4 = 9$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "$c_3 = 2$." },
           { stepText: "$\\mathbf{x} = \\frac{5}{2}\\mathbf{u}_1 - \\frac{3}{2}\\mathbf{u}_2 + 2\\mathbf{u}_3$." }
        ]}
      ]
    },
    {
      id: "les-3-2-8-ex10", title: "Exercise 10", description: "R3 Basis 2", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Express $\\mathbf{x}$ as a linear combination of the orthogonal basis $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ -3 \\\\ 0 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 2 \\\\ 2 \\\\ -1 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 4 \\end{bmatrix}, \\mathbf{x} = \\begin{bmatrix} 5 \\\\ -3 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$c_1 = \\frac{15 + 9 + 0}{9 + 9 + 0} = \\frac{24}{18} = \\frac{4}{3}$.\n\n$c_2 = \\frac{10 - 6 - 1}{4 + 4 + 1} = \\frac{3}{9} = \\frac{1}{3}$.\n\n$c_3 = \\frac{5 - 3 + 4}{1 + 1 + 16} = \\frac{6}{18} = \\frac{1}{3}$.\n\n$\\mathbf{x} = \\frac{4}{3}\\mathbf{u}_1 + \\frac{1}{3}\\mathbf{u}_2 + \\frac{1}{3}\\mathbf{u}_3$." }
      ]
    }
  ]
};
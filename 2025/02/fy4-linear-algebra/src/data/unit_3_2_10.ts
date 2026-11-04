import { Unit } from '../types';

export const UNIT_3_2_10: Unit = {
  id: "unit-3-2-10",
  title: "Distance to a Subspace",
  description: "Exercises 15-16: Finding the geometric distance from a point to a line.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-10-ex15", title: "Exercise 15", description: "Distance to L", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} 3 \\\\ 1 \\end{bmatrix}$ and $\\mathbf{u} = \\begin{bmatrix} 8 \\\\ 6 \\end{bmatrix}$. Compute the distance from $\\mathbf{y}$ to the line through $\\mathbf{u}$ and the origin." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\|\\mathbf{y} - \\hat{\\mathbf{y}}\\|$, which is $\\|\\mathbf{z}\\|$.**", interactiveSteps: [
           { stepText: "First, compute $\\hat{\\mathbf{y}}$. $\\mathbf{y} \\cdot \\mathbf{u} = 24 + 6 = 30$. $\\mathbf{u} \\cdot \\mathbf{u} = 64 + 36 = 100$." },
           { stepText: "$\\hat{\\mathbf{y}} = \\frac{30}{100} \\begin{bmatrix} 8 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} 2.4 \\\\ 1.8 \\end{bmatrix}$." },
           { prompt: "Compute the orthogonal component $\\mathbf{z}$.", options: [{id:"A", text:"$\\mathbf{z} = \\begin{bmatrix} 0.6 \\\\ -0.8 \\end{bmatrix}$", isCorrect:true, explanation:"$3 - 2.4 = 0.6$, $1 - 1.8 = -0.8$."}, {id:"B", text:"$\\mathbf{z} = \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{z} = \\begin{bmatrix} 0.6 \\\\ -0.8 \\end{bmatrix}$." },
           { stepText: "Distance = $\\|\\mathbf{z}\\| = \\sqrt{0.6^2 + (-0.8)^2} = \\sqrt{0.36 + 0.64} = \\sqrt{1}$." }
        ]},
        { id: "s2", type: "numerical", title: "Final Distance", content: "What is the distance?", numericAnswer: 1, numericTolerance: 0 }
      ]
    },
    {
      id: "les-3-2-10-ex16", title: "Exercise 16", description: "Distance to L 2", icon: "Ruler",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Let $\\mathbf{y} = \\begin{bmatrix} -3 \\\\ 9 \\end{bmatrix}$ and $\\mathbf{u} = \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$. Compute the distance from $\\mathbf{y}$ to the line through $\\mathbf{u}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{y} \\cdot \\mathbf{u} = -3 + 18 = 15$.\n$\\mathbf{u} \\cdot \\mathbf{u} = 1 + 4 = 5$.\n\n$\\hat{\\mathbf{y}} = \\frac{15}{5} \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = 3 \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix}$.\n\n$\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}} = \\begin{bmatrix} -3 \\\\ 9 \\end{bmatrix} - \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix} = \\begin{bmatrix} -6 \\\\ 3 \\end{bmatrix}$.\n\nDistance = $\\|\\mathbf{z}\\| = \\sqrt{(-6)^2 + 3^2} = \\sqrt{36 + 9} = \\sqrt{45} = 3\\sqrt{5}$." }
      ]
    }
  ]
};
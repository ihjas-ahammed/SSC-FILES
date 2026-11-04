import { Unit } from '../types';

export const UNIT_3_1_10: Unit = {
  id: "unit-3-1-10",
  title: "Distance Computations",
  description: "Exercises 13-14: Finding distance between vectors.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-10-ex13", title: "Exercise 13", description: "Distance in R2", icon: "Map",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Find the distance between $\\mathbf{x} = \\begin{bmatrix} 10 \\\\ -3 \\end{bmatrix}$ and $\\mathbf{y} = \\begin{bmatrix} -1 \\\\ -5 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: $\\|\\mathbf{x} - \\mathbf{y}\\|$.**", interactiveSteps: [
           { prompt: "Compute $\\mathbf{x} - \\mathbf{y}$.", options: [{id:"A", text:"$[11, 2]^T$", isCorrect:true, explanation:"$10 - (-1) = 11$, $-3 - (-5) = 2$."}, {id:"B", text:"$[9, -8]^T$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x} - \\mathbf{y} = \\begin{bmatrix} 11 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Length squared = $11^2 + 2^2 = 121 + 4 = 125$." },
           { stepText: "Distance = $\\sqrt{125} = 5\\sqrt{5}$." }
        ]},
        { id: "s2", type: "numerical", title: "Approximation", content: "What is the approximate distance?", numericAnswer: 11.18, numericTolerance: 0.1 }
      ]
    },
    {
      id: "les-3-1-10-ex14", title: "Exercise 14", description: "Distance in R3", icon: "Map",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Find the distance between $\\mathbf{u} = \\begin{bmatrix} 0 \\\\ -5 \\\\ 2 \\end{bmatrix}$ and $\\mathbf{z} = \\begin{bmatrix} -4 \\\\ -1 \\\\ 8 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "Difference vector $\\mathbf{u} - \\mathbf{z} = \\begin{bmatrix} 4 \\\\ -4 \\\\ -6 \\end{bmatrix}$.\n\nDistance$^2 = 4^2 + (-4)^2 + (-6)^2 = 16 + 16 + 36 = 68$.\n\nDistance = $\\sqrt{68} = 2\\sqrt{17}$." }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_3_1_11: Unit = {
  id: "unit-3-1-11",
  title: "Checking Orthogonality",
  description: "Exercises 15-18: Verifying if dot product is zero.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-11-ex15", title: "Exercise 15", description: "R2 Vectors", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Determine if the pair of vectors is orthogonal.\n$\\mathbf{a} = \\begin{bmatrix} 8 \\\\ -5 \\end{bmatrix}, \\mathbf{b} = \\begin{bmatrix} -2 \\\\ -3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Evaluate $\\mathbf{a} \\cdot \\mathbf{b}$.**", interactiveSteps: [
           { prompt: "What is the dot product?", options: [{id:"A", text:"-1", isCorrect:true, explanation:"$8(-2) + (-5)(-3) = -16 + 15 = -1$."}, {id:"B", text:"0", isCorrect:false, explanation:""}], stepText: "The dot product is -1." },
           { stepText: "Since the dot product is not 0, they are **not orthogonal**." }
        ]}
      ]
    },
    {
      id: "les-3-1-11-ex16", title: "Exercise 16", description: "R3 Vectors", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Determine if the pair of vectors is orthogonal.\n$\\mathbf{u} = \\begin{bmatrix} 12 \\\\ 3 \\\\ -5 \\end{bmatrix}, \\mathbf{v} = \\begin{bmatrix} 2 \\\\ -3 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{u} \\cdot \\mathbf{v} = 12(2) + 3(-3) + (-5)(3) = 24 - 9 - 15 = 0$.\n\nYes, they are **orthogonal**." }
      ]
    },
    {
      id: "les-3-1-11-ex17", title: "Exercise 17", description: "R4 Vectors", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Determine if the pair of vectors is orthogonal.\n$\\mathbf{u} = \\begin{bmatrix} 3 \\\\ 2 \\\\ -5 \\\\ 0 \\end{bmatrix}, \\mathbf{v} = \\begin{bmatrix} -4 \\\\ 1 \\\\ -2 \\\\ 6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{u} \\cdot \\mathbf{v} = 3(-4) + 2(1) + (-5)(-2) + 0(6) = -12 + 2 + 10 + 0 = 0$.\n\nYes, they are **orthogonal**." }
      ]
    },
    {
      id: "les-3-1-11-ex18", title: "Exercise 18", description: "R4 Vectors 2", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Determine if the pair of vectors is orthogonal.\n$\\mathbf{y} = \\begin{bmatrix} -3 \\\\ 7 \\\\ 4 \\\\ 0 \\end{bmatrix}, \\mathbf{z} = \\begin{bmatrix} 1 \\\\ -8 \\\\ 15 \\\\ -7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{y} \\cdot \\mathbf{z} = -3(1) + 7(-8) + 4(15) + 0(-7) = -3 - 56 + 60 = 1$.\n\nSince $1 \\neq 0$, they are **not orthogonal**." },
        { id: "s2", type: "numerical", title: "Value", content: "Dot product value?", numericAnswer: 1, numericTolerance: 0 }
      ]
    }
  ]
};
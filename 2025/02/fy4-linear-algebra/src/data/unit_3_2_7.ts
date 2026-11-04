import { Unit } from '../types';

export const UNIT_3_2_7: Unit = {
  id: "unit-3-2-7",
  title: "Checking Orthogonal Sets",
  description: "Exercises 1-6: Determining whether given sets of vectors are orthogonal.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-7-ex1", title: "Exercise 1", description: "3 vectors in R3", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Determine whether the set of vectors is orthogonal.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} -1 \\\\ 4 \\\\ -3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 5 \\\\ 2 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 3 \\\\ -4 \\\\ -7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check all distinct pairs for a zero dot product.**", interactiveSteps: [
           { prompt: "Compute $\\mathbf{u}_1 \\cdot \\mathbf{u}_2$.", options: [{id:"A", text:"0", isCorrect:true, explanation:"$-5 + 8 - 3 = 0$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$." },
           { prompt: "Compute $\\mathbf{u}_1 \\cdot \\mathbf{u}_3$.", options: [{id:"A", text:"0", isCorrect:false, explanation:"$-3 - 16 + 21 = 2 \\neq 0$."}, {id:"B", text:"2", isCorrect:true, explanation:"$-3 - 16 + 21 = 2$."}], stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 2$." },
           { stepText: "Since $\\mathbf{u}_1 \\cdot \\mathbf{u}_3 \\neq 0$, the set is **not orthogonal**." }
        ]}
      ]
    },
    {
      id: "les-3-2-7-ex2", title: "Exercise 2", description: "Another 3 vectors", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Determine whether the set of vectors is orthogonal.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} -5 \\\\ -2 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test the pairs.**", interactiveSteps: [
           { stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 1(0) + (-2)(1) + 1(2) = 0 - 2 + 2 = 0$." },
           { stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 1(-5) + (-2)(-2) + 1(1) = -5 + 4 + 1 = 0$." },
           { prompt: "Compute $\\mathbf{u}_2 \\cdot \\mathbf{u}_3$.", options: [{id:"A", text:"0", isCorrect:true, explanation:"$0(-5) + 1(-2) + 2(1) = -2 + 2 = 0$."}, {id:"B", text:"4", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = 0$." },
           { stepText: "All pairs are orthogonal. The set **is orthogonal**." }
        ]}
      ]
    },
    {
      id: "les-3-2-7-ex3", title: "Exercise 3", description: "R3 vectors", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Determine whether the set of vectors is orthogonal.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ -7 \\\\ -1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -6 \\\\ -3 \\\\ 9 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 3 \\\\ 1 \\\\ -1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = -12 + 21 - 9 = 0$.\n$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 6 - 7 + 1 = 0$.\n$\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -18 - 3 - 9 = -30 \\neq 0$.\n\nBecause $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 \\neq 0$, the set is **not orthogonal**." }
      ]
    },
    {
      id: "les-3-2-7-ex4", title: "Exercise 4", description: "The zero vector anomaly", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Determine whether the set of vectors is orthogonal.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 2 \\\\ -5 \\\\ -3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 0 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 4 \\\\ -2 \\\\ 6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test all pairs.**", interactiveSteps: [
           { stepText: "Notice that $\\mathbf{u}_2 = \\mathbf{0}$. The zero vector is orthogonal to every vector in $\\mathbb{R}^n$." },
           { stepText: "So $\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = 0$ and $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = 0$." },
           { prompt: "Now check $\\mathbf{u}_1 \\cdot \\mathbf{u}_3$.", options: [{id:"A", text:"0", isCorrect:true, explanation:"$8 + 10 - 18 = 0$."}, {id:"B", text:"18", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 0$." },
           { stepText: "Since all pairs are orthogonal, the set **is an orthogonal set**." }
        ]},
        { id: "s2", type: "quiz", title: "Linear Independence", content: "Is this set linearly independent?", options: [{id:"A", text:"Yes, because it is orthogonal.", isCorrect:false, explanation:"Theorem 4 requires the vectors to be NONZERO."}, {id:"B", text:"No, because it contains the zero vector.", isCorrect:true, explanation:"Any set containing the zero vector is linearly dependent."}] }
      ]
    },
    {
      id: "les-3-2-7-ex5", title: "Exercise 5", description: "R4 Vectors", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Determine whether the set of vectors is orthogonal.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ -2 \\\\ 1 \\\\ 3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 3 \\\\ -3 \\\\ 4 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 3 \\\\ 8 \\\\ 7 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = -3 - 6 - 3 + 12 = 0$.\n$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 9 - 16 + 7 + 0 = 0$.\n$\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -3 + 24 - 21 + 0 = 0$.\n\nAll pairs are orthogonal. The set **is orthogonal**." }
      ]
    },
    {
      id: "les-3-2-7-ex6", title: "Exercise 6", description: "R4 Vectors 2", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Determine whether the set of vectors is orthogonal.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 5 \\\\ -4 \\\\ 0 \\\\ 3 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -4 \\\\ 1 \\\\ -3 \\\\ 8 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} 3 \\\\ 3 \\\\ 5 \\\\ -1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = -20 - 4 + 0 + 24 = 0$.\n$\\mathbf{u}_1 \\cdot \\mathbf{u}_3 = 15 - 12 + 0 - 3 = 0$.\n$\\mathbf{u}_2 \\cdot \\mathbf{u}_3 = -12 + 3 - 15 - 8 = -32 \\neq 0$.\n\nBecause $\\mathbf{u}_2 \\cdot \\mathbf{u}_3 \\neq 0$, the set is **not orthogonal**." }
      ]
    }
  ]
};
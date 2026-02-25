import { Unit } from '../types';

export const UNIT_3_4_7: Unit = {
  id: "unit-3-4-7",
  title: "Gram-Schmidt Practice",
  description: "Exercises 1-8: Applying the Gram-Schmidt process to generate orthogonal bases.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-7-ex1", title: "Exercise 1", description: "Orthogonalizing 2 vectors in R3", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Use the Gram-Schmidt process to produce an orthogonal basis for $W = \\text{Span}\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$.\n\n$\\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} 8 \\\\ 5 \\\\ -6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $\\mathbf{v}_1$ and $\\mathbf{v}_2$.**", interactiveSteps: [
           { stepText: "Set $\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix}$." },
           { prompt: "Compute $\\mathbf{x}_2 \\cdot \\mathbf{v}_1$.", options: [{id:"A", text:"30", isCorrect:true, explanation:"$24 + 0 + 6 = 30$."}, {id:"B", text:"18", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 30$." },
           { stepText: "$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 9 + 0 + 1 = 10$." },
           { stepText: "$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{30}{10}\\mathbf{v}_1 = \\begin{bmatrix} 8 \\\\ 5 \\\\ -6 \\end{bmatrix} - 3\\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix} = \\begin{bmatrix} 8-9 \\\\ 5-0 \\\\ -6+3 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 5 \\\\ -3 \\end{bmatrix}$." },
           { stepText: "Orthogonal basis: $\\left\\{ \\begin{bmatrix} 3 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\begin{bmatrix} -1 \\\\ 5 \\\\ -3 \\end{bmatrix} \\right\\}$." }
        ]}
      ]
    },
    {
      id: "les-3-4-7-ex2", title: "Exercise 2", description: "Orthogonalizing 2 vectors in R3", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Use Gram-Schmidt on $\\{\\mathbf{x}_1, \\mathbf{x}_2\\}$.\n\n$\\mathbf{x}_1 = \\begin{bmatrix} 0 \\\\ 4 \\\\ 2 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} 5 \\\\ 6 \\\\ -7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $\\mathbf{v}_1$ and $\\mathbf{v}_2$.**", interactiveSteps: [
           { stepText: "$\\mathbf{v}_1 = \\mathbf{x}_1 = \\begin{bmatrix} 0 \\\\ 4 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 0 + 24 - 14 = 10$." },
           { stepText: "$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 0 + 16 + 4 = 20$." },
           { stepText: "$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{10}{20}\\mathbf{v}_1 = \\begin{bmatrix} 5 \\\\ 6 \\\\ -7 \\end{bmatrix} - \\begin{bmatrix} 0 \\\\ 2 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 4 \\\\ -8 \\end{bmatrix}$." },
           { stepText: "Basis: $\\left\\{ \\begin{bmatrix} 0 \\\\ 4 \\\\ 2 \\end{bmatrix}, \\begin{bmatrix} 5 \\\\ 4 \\\\ -8 \\end{bmatrix} \\right\\}$." }
        ]}
      ]
    },
    {
      id: "les-3-4-7-ex3", title: "Exercise 3", description: "Orthogonalizing in R3", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Gram-Schmidt on:\n$\\mathbf{x}_1 = \\begin{bmatrix} 2 \\\\ -5 \\\\ 1 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} 4 \\\\ -1 \\\\ 2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{v}_1 = \\mathbf{x}_1$.\n\n$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 8 + 5 + 2 = 15$.\n$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 4 + 25 + 1 = 30$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{15}{30}\\mathbf{v}_1 = \\begin{bmatrix} 4 \\\\ -1 \\\\ 2 \\end{bmatrix} - \\begin{bmatrix} 1 \\\\ -2.5 \\\\ 0.5 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 1.5 \\\\ 1.5 \\end{bmatrix}$." },
        { id: "s2", type: "theory", title: "Scaling", content: "To avoid fractions, we can multiply $\\mathbf{v}_2$ by 2 to get a nicer orthogonal basis vector: $\\mathbf{v}_2' = \\begin{bmatrix} 6 \\\\ 3 \\\\ 3 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-4-7-ex4", title: "Exercise 4", description: "Orthogonalizing in R3", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Gram-Schmidt on:\n$\\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ -4 \\\\ 5 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} -3 \\\\ 14 \\\\ -7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{v}_1 = \\mathbf{x}_1$.\n\n$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = -9 - 56 - 35 = -100$.\n$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 9 + 16 + 25 = 50$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{-100}{50}\\mathbf{v}_1 = \\mathbf{x}_2 + 2\\mathbf{v}_1 = \\begin{bmatrix} -3 \\\\ 14 \\\\ -7 \\end{bmatrix} + \\begin{bmatrix} 6 \\\\ -8 \\\\ 10 \\end{bmatrix} = \\begin{bmatrix} 3 \\\\ 6 \\\\ 3 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-4-7-ex5", title: "Exercise 5", description: "Orthogonalizing 2 vectors in R4", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Gram-Schmidt on:\n$\\mathbf{x}_1 = \\begin{bmatrix} 1 \\\\ -4 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} 7 \\\\ -7 \\\\ -4 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{v}_1 = \\mathbf{x}_1$.\n\n$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = 7 + 28 + 0 + 1 = 36$.\n$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 1 + 16 + 0 + 1 = 18$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{36}{18}\\mathbf{v}_1 = \\mathbf{x}_2 - 2\\mathbf{v}_1 = \\begin{bmatrix} 7 \\\\ -7 \\\\ -4 \\\\ 1 \\end{bmatrix} - \\begin{bmatrix} 2 \\\\ -8 \\\\ 0 \\\\ 2 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 1 \\\\ -4 \\\\ -1 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-4-7-ex6", title: "Exercise 6", description: "Orthogonalizing 2 vectors in R4", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Gram-Schmidt on:\n$\\mathbf{x}_1 = \\begin{bmatrix} 3 \\\\ -1 \\\\ 2 \\\\ -1 \\end{bmatrix}, \\mathbf{x}_2 = \\begin{bmatrix} -5 \\\\ 9 \\\\ -9 \\\\ 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "$\\mathbf{v}_1 = \\mathbf{x}_1$.\n\n$\\mathbf{x}_2 \\cdot \\mathbf{v}_1 = -15 - 9 - 18 - 3 = -45$.\n$\\mathbf{v}_1 \\cdot \\mathbf{v}_1 = 9 + 1 + 4 + 1 = 15$.\n\n$\\mathbf{v}_2 = \\mathbf{x}_2 - \\frac{-45}{15}\\mathbf{v}_1 = \\mathbf{x}_2 + 3\\mathbf{v}_1 = \\begin{bmatrix} -5 \\\\ 9 \\\\ -9 \\\\ 3 \\end{bmatrix} + \\begin{bmatrix} 9 \\\\ -3 \\\\ 6 \\\\ -3 \\end{bmatrix} = \\begin{bmatrix} 4 \\\\ 6 \\\\ -3 \\\\ 0 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-4-7-ex7", title: "Exercise 7", description: "Orthonormal basis from Ex 3", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Find an orthonormal basis of the subspace spanned by the vectors in Exercise 3." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Normalize the orthogonal basis.**", interactiveSteps: [
           { stepText: "Orthogonal basis from Ex 3: $\\mathbf{v}_1 = \\begin{bmatrix} 2 \\\\ -5 \\\\ 1 \\end{bmatrix}$, $\\mathbf{v}_2' = \\begin{bmatrix} 6 \\\\ 3 \\\\ 3 \\end{bmatrix}$ (using the scaled version for simplicity)." },
           { prompt: "Calculate $\\|\\mathbf{v}_1\\|$.", options: [{id:"A", text:"$\\sqrt{30}$", isCorrect:true, explanation:""}, {id:"B", text:"30", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 = \\frac{1}{\\sqrt{30}}\\begin{bmatrix} 2 \\\\ -5 \\\\ 1 \\end{bmatrix}$." },
           { prompt: "Calculate $\\|\\mathbf{v}_2'\\|$.", options: [{id:"A", text:"$\\sqrt{54} = 3\\sqrt{6}$", isCorrect:true, explanation:"$36 + 9 + 9 = 54$."}, {id:"B", text:"54", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_2 = \\frac{1}{3\\sqrt{6}}\\begin{bmatrix} 6 \\\\ 3 \\\\ 3 \\end{bmatrix} = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} 2 \\\\ 1 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-4-7-ex8", title: "Exercise 8", description: "Orthonormal basis from Ex 4", icon: "Crosshair",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Find an orthonormal basis of the subspace spanned by the vectors in Exercise 4." },
        { id: "s1", type: "solution", title: "Solution", content: "Orthogonal basis from Ex 4: $\\mathbf{v}_1 = \\begin{bmatrix} 3 \\\\ -4 \\\\ 5 \\end{bmatrix}$, $\\mathbf{v}_2 = \\begin{bmatrix} 3 \\\\ 6 \\\\ 3 \\end{bmatrix}$.\n\n$\\|\\mathbf{v}_1\\| = \\sqrt{9 + 16 + 25} = \\sqrt{50} = 5\\sqrt{2}$.\n$\\mathbf{u}_1 = \\frac{1}{5\\sqrt{2}}\\begin{bmatrix} 3 \\\\ -4 \\\\ 5 \\end{bmatrix}$.\n\n$\\|\\mathbf{v}_2\\| = \\sqrt{9 + 36 + 9} = \\sqrt{54} = 3\\sqrt{6}$.\n$\\mathbf{u}_2 = \\frac{1}{3\\sqrt{6}}\\begin{bmatrix} 3 \\\\ 6 \\\\ 3 \\end{bmatrix} = \\frac{1}{\\sqrt{6}}\\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\end{bmatrix}$." }
      ]
    }
  ]
};
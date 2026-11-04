import { Unit } from '../types';

export const UNIT_4_4_9: Unit = {
  id: "unit-4-4-9",
  title: "Finding Singular Values",
  description: "Exercises 1-4: Calculating singular values from matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-9-ex1", title: "Exercise 1: 2x2 Matrix", description: "Singular values of a triangular matrix", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 1", content: "**Problem:** Find the singular values of the matrix:\n$$ A = \\begin{bmatrix} 1 & 0 \\\\ 0 & -3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute eigenvalues of $A^T A$.**", interactiveSteps: [
           { stepText: "First, compute $A^T A$. Since $A$ is diagonal, $A^T = A$." },
           { prompt: "What is $A^T A$?", options: [{id:"A", text:"$\\begin{bmatrix} 1 & 0 \\\\ 0 & 9 \\end{bmatrix}$", isCorrect:true, explanation:"Square the diagonal entries: $1^2=1, (-3)^2=9$."}, {id:"B", text:"$\\begin{bmatrix} 1 & 0 \\\\ 0 & -3 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$A^T A = \\begin{bmatrix} 1 & 0 \\\\ 0 & 9 \\end{bmatrix}$." },
           { stepText: "The eigenvalues of a diagonal matrix are its diagonal entries: $\\lambda_1 = 9, \\lambda_2 = 1$ (ordered)." },
           { stepText: "The singular values are the square roots: $\\sigma_1 = \\sqrt{9} = 3$ and $\\sigma_2 = \\sqrt{1} = 1$." }
        ]}
      ]
    },
    {
      id: "les-4-4-9-ex2", title: "Exercise 2: 2x2 Matrix", description: "Singular values", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 2", content: "**Problem:** Find the singular values of:\n$$ A = \\begin{bmatrix} -5 & 0 \\\\ 0 & 0 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "$A^T A = \\begin{bmatrix} 25 & 0 \\\\ 0 & 0 \\end{bmatrix}$.\n\nEigenvalues: $25, 0$.\n\nSingular values: $\\sigma_1 = 5, \\sigma_2 = 0$." }
      ]
    },
    {
      id: "les-4-4-9-ex3", title: "Exercise 3: 2x2 Matrix", description: "Singular values", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 3", content: "**Problem:** Find the singular values of:\n$$ A = \\begin{bmatrix} \\sqrt{6} & 1 \\\\ 0 & \\sqrt{6} \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $A^T A$.**", interactiveSteps: [
           { stepText: "$A^T = \\begin{bmatrix} \\sqrt{6} & 0 \\\\ 1 & \\sqrt{6} \\end{bmatrix}$." },
           { stepText: "$A^T A = \\begin{bmatrix} \\sqrt{6} & 0 \\\\ 1 & \\sqrt{6} \\end{bmatrix} \\begin{bmatrix} \\sqrt{6} & 1 \\\\ 0 & \\sqrt{6} \\end{bmatrix} = \\begin{bmatrix} 6 & \\sqrt{6} \\\\ \\sqrt{6} & 1+6 \\end{bmatrix} = \\begin{bmatrix} 6 & \\sqrt{6} \\\\ \\sqrt{6} & 7 \\end{bmatrix}$." },
           { stepText: "Characteristic eq: $(6-\\lambda)(7-\\lambda) - 6 = 0 \\implies \\lambda^2 - 13\\lambda + 42 - 6 = 0 \\implies \\lambda^2 - 13\\lambda + 36 = 0$." },
           { prompt: "Solve for $\\lambda$.", options: [{id:"A", text:"9, 4", isCorrect:true, explanation:"$(\\lambda-9)(\\lambda-4)=0$."}, {id:"B", text:"6, 7", isCorrect:false, explanation:""}], stepText: "Eigenvalues: 9, 4." },
           { stepText: "Singular values: $\\sigma_1 = 3, \\sigma_2 = 2$." }
        ]}
      ]
    },
    {
      id: "les-4-4-9-ex4", title: "Exercise 4: 2x2 Matrix", description: "Singular values", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 4", content: "**Problem:** Find the singular values of:\n$$ A = \\begin{bmatrix} \\sqrt{3} & 2 \\\\ 0 & \\sqrt{3} \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "$A^T A = \\begin{bmatrix} 3 & 2\\sqrt{3} \\\\ 2\\sqrt{3} & 7 \\end{bmatrix}$.\n\nChar eq: $(3-\\lambda)(7-\\lambda) - 12 = \\lambda^2 - 10\\lambda + 21 - 12 = \\lambda^2 - 10\\lambda + 9 = 0$.\n\n$(\\lambda-9)(\\lambda-1) = 0 \\implies \\lambda = 9, 1$.\n\nSingular values: $\\sigma_1 = 3, \\sigma_2 = 1$." }
      ]
    }
  ]
};
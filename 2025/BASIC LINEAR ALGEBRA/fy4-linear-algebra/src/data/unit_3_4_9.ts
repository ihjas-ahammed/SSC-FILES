import { Unit } from '../types';

export const UNIT_3_4_9: Unit = {
  id: "unit-3-4-9",
  title: "QR Factorization Computation",
  description: "Exercises 13-16: Finding the matrices Q and R.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-9-ex13", title: "Exercise 13", description: "Finding R for 4x2 matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** The columns of $Q$ were obtained by applying the Gram-Schmidt process to the columns of $A$. Find an upper triangular matrix $R$ such that $A = QR$.\n\n$A = \\begin{bmatrix} 5 & 9 \\\\ 1 & 7 \\\\ -3 & -5 \\\\ 1 & 5 \\end{bmatrix}, \\quad Q = \\begin{bmatrix} 5/6 & -1/6 \\\\ 1/6 & 5/6 \\\\ -3/6 & 1/6 \\\\ 1/6 & 3/6 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $R = Q^T A$.**", interactiveSteps: [
           { stepText: "Because $Q$ has orthonormal columns, $Q^T Q = I$. Multiplying $A=QR$ by $Q^T$ gives $Q^T A = Q^T Q R = R$." },
           { prompt: "What is the size of $R$?", options: [{id:"A", text:"$2 \\times 2$", isCorrect:true, explanation:"$Q^T$ is $2 \\times 4$ and $A$ is $4 \\times 2$."}, {id:"B", text:"$4 \\times 2$", isCorrect:false, explanation:""}], stepText: "So we need to compute the $2 \\times 2$ matrix $Q^T A$." },
           { stepText: "$r_{11} = \\mathbf{q}_1 \\cdot \\mathbf{a}_1 = (25 + 1 + 9 + 1)/6 = 36/6 = 6$." },
           { stepText: "$r_{12} = \\mathbf{q}_1 \\cdot \\mathbf{a}_2 = (45 + 7 + 15 + 5)/6 = 72/6 = 12$." },
           { stepText: "$r_{21} = \\mathbf{q}_2 \\cdot \\mathbf{a}_1 = (-5 + 1 + 3 + 1)/6 = 0$. (Expected for upper triangular!)" },
           { stepText: "$r_{22} = \\mathbf{q}_2 \\cdot \\mathbf{a}_2 = (-9 + 35 - 5 + 15)/6 = 36/6 = 6$." },
           { stepText: "Thus, $R = \\begin{bmatrix} 6 & 12 \\\\ 0 & 6 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-3-4-9-ex14", title: "Exercise 14", description: "Finding R for another 4x2", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Find $R$ such that $A=QR$.\n\n$A = \\begin{bmatrix} -2 & 3 \\\\ 5 & 7 \\\\ 2 & -2 \\\\ 4 & 6 \\end{bmatrix}, \\quad Q = \\begin{bmatrix} -2/7 & 5/7 \\\\ 5/7 & 2/7 \\\\ 2/7 & -4/7 \\\\ 4/7 & 2/7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Compute $R = Q^T A$.\n\n$r_{11} = (4 + 25 + 4 + 16)/7 = 49/7 = 7$.\n$r_{12} = (-6 + 35 - 4 + 24)/7 = 49/7 = 7$.\n$r_{21} = 0$.\n$r_{22} = (15 + 14 + 8 + 12)/7 = 49/7 = 7$.\n\n$R = \\begin{bmatrix} 7 & 7 \\\\ 0 & 7 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-4-9-ex15", title: "Exercise 15", description: "Full QR Factorization", icon: "Terminal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Find a QR factorization of the matrix in Exercise 11." },
        { id: "s1", type: "solution", title: "Solution", content: "From Ex 11, the orthogonal basis is:\n$\\mathbf{v}_1 = [1, -1, -1, 1, 1]^T$, length $\\sqrt{5}$.\n$\\mathbf{v}_2' = [1, 0, 1, -1, 1]^T$, length 2.\n$\\mathbf{v}_3 = [2, 0, 2, 2, -2]^T$, length $4$.\n\nNormalize these to get $Q$:\n$Q = \\begin{bmatrix} 1/\\sqrt{5} & 1/2 & 1/2 \\\\ -1/\\sqrt{5} & 0 & 0 \\\\ -1/\\sqrt{5} & 1/2 & 1/2 \\\\ 1/\\sqrt{5} & -1/2 & 1/2 \\\\ 1/\\sqrt{5} & 1/2 & -1/2 \\end{bmatrix}$.\n\nCompute $R = Q^T A$:\n$R = \\begin{bmatrix} \\sqrt{5} & -\\sqrt{5} & 4\\sqrt{5} \\\\ 0 & 2 & -2 \\\\ 0 & 0 & 4 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-3-4-9-ex16", title: "Exercise 16", description: "Full QR Factorization 2", icon: "Terminal",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Find a QR factorization of the matrix in Exercise 12." },
        { id: "s1", type: "solution", title: "Solution", content: "Normalize the basis from Ex 12 to get $Q$.\nThen compute $R = Q^T A$.\n\n(Computations follow the exact same pattern: $R$ will have non-zero elements on and above the diagonal, zeros below)." }
      ]
    }
  ]
};
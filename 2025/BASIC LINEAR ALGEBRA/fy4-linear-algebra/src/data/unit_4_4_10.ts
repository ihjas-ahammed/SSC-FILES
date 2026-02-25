import { Unit } from '../types';

export const UNIT_4_4_10: Unit = {
  id: "unit-4-4-10",
  title: "Constructing SVDs",
  description: "Exercises 5-14: Finding SVD factorizations.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-10-ex5", title: "Exercise 5", description: "SVD of 2x2 Matrix", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 5", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} -3 & 0 \\\\ 0 & 0 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $U, \\Sigma, V$.**", interactiveSteps: [
           { stepText: "$A^T A = \\begin{bmatrix} 9 & 0 \\\\ 0 & 0 \\end{bmatrix}$. Eigenvalues: 9, 0. Singular values: 3, 0." },
           { stepText: "$\\Sigma = \\begin{bmatrix} 3 & 0 \\\\ 0 & 0 \\end{bmatrix}$." },
           { stepText: "Unit eigenvectors of $A^T A$ (for $V$): $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$. So $V = I$." },
           { stepText: "Find $U$: $\\mathbf{u}_1 = \\frac{1}{\\sigma_1} A \\mathbf{v}_1 = \\frac{1}{3} \\begin{bmatrix} -3 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} -1 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Extend to basis for $\\mathbb{R}^2$: $\\mathbf{u}_2 = \\begin{bmatrix} 0 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "$A = \\begin{bmatrix} -1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\begin{bmatrix} 3 & 0 \\\\ 0 & 0 \\end{bmatrix} \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}^T$." }
        ]}
      ]
    },
    {
      id: "les-4-4-10-ex6", title: "Exercise 6", description: "SVD of 2x2 Matrix", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 6", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} -2 & 0 \\\\ 0 & -1 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "Singular values are 2 and 1.\n$\\Sigma = \\begin{bmatrix} 2 & 0 \\\\ 0 & 1 \\end{bmatrix}$.\n\n$V = I$ (eigenvectors of diagonal matrix).\n\n$\\mathbf{u}_1 = \\frac{1}{2} A \\mathbf{e}_1 = [-1, 0]^T$.\n$\\mathbf{u}_2 = \\frac{1}{1} A \\mathbf{e}_2 = [0, -1]^T$.\n\n$U = \\begin{bmatrix} -1 & 0 \\\\ 0 & -1 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-4-10-ex7", title: "Exercise 7", description: "SVD of 2x2 Symmetric", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} 2 & -1 \\\\ 2 & 2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $A^T A$.**", interactiveSteps: [
           { stepText: "$A^T A = \\begin{bmatrix} 2 & 2 \\\\ -1 & 2 \\end{bmatrix} \\begin{bmatrix} 2 & -1 \\\\ 2 & 2 \\end{bmatrix} = \\begin{bmatrix} 8 & 2 \\\\ 2 & 5 \\end{bmatrix}$." },
           { stepText: "Char eq: $(8-\\lambda)(5-\\lambda) - 4 = \\lambda^2 - 13\\lambda + 36 = 0 \\implies \\lambda = 9, 4$." },
           { stepText: "$\sigma_1 = 3, \sigma_2 = 2$." },
           { stepText: "Eigenvectors of $A^T A$: For $\\lambda=9$, $\\mathbf{v}_1 = \\frac{1}{\\sqrt{5}} [2, 1]^T$. For $\\lambda=4$, $\\mathbf{v}_2 = \\frac{1}{\\sqrt{5}} [-1, 2]^T$." },
           { stepText: "Calculate $\\mathbf{u}_1 = \\frac{1}{3} A \\mathbf{v}_1 = \\frac{1}{3\\sqrt{5}} \\begin{bmatrix} 3 \\\\ 6 \\end{bmatrix} = \\frac{1}{\\sqrt{5}} \\begin{bmatrix} 1 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Calculate $\\mathbf{u}_2 = \\frac{1}{2} A \\mathbf{v}_2 = \\frac{1}{2\\sqrt{5}} \\begin{bmatrix} -4 \\\\ 2 \\end{bmatrix} = \\frac{1}{\\sqrt{5}} \\begin{bmatrix} -2 \\\\ 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-4-10-ex8", title: "Exercise 8", description: "SVD of 2x2", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} 2 & 3 \\\\ 0 & 2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A^T A = \\begin{bmatrix} 4 & 6 \\\\ 6 & 13 \\end{bmatrix}$. Eigenvalues: 16, 1.\n$\\sigma_1 = 4, \\sigma_2 = 1$.\n\n$V$: $\\mathbf{v}_1 = \\frac{1}{\\sqrt{5}}[1, 2]^T, \\mathbf{v}_2 = \\frac{1}{\\sqrt{5}}[-2, 1]^T$.\n\n$U$: $\\mathbf{u}_1 = [2/\\sqrt{5}, 1/\\sqrt{5}]^T, \\mathbf{u}_2 = [-1/\\sqrt{5}, 2/\\sqrt{5}]^T$." }
      ]
    },
    {
      id: "les-4-4-10-ex9", title: "Exercise 9", description: "SVD of 2x3 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} 7 & 1 \\\\ 0 & 0 \\\\ 5 & 5 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Handle different dimensions.**", interactiveSteps: [
           { stepText: "$A$ is $3 \\times 2$. $A^T A$ is $2 \\times 2$: $\\begin{bmatrix} 74 & 32 \\\\ 32 & 26 \\end{bmatrix}$." },
           { stepText: "Eigenvalues of $A^T A$: 90, 10. $\\sigma_1 = \\sqrt{90} = 3\\sqrt{10}, \\sigma_2 = \\sqrt{10}$." },
           { stepText: "$V$ eigenvectors: $\\mathbf{v}_1 = \\frac{1}{\\sqrt{5}}[2, 1]^T, \\mathbf{v}_2 = \\frac{1}{\\sqrt{5}}[-1, 2]^T$." },
           { stepText: "Compute $\\mathbf{u}_1 = \\frac{1}{3\\sqrt{10}} A \\mathbf{v}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 0 \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "Compute $\\mathbf{u}_2 = \\frac{1}{\\sqrt{10}} A \\mathbf{v}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 0 \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "Extend $U$ to $3 \\times 3$: $\\mathbf{u}_3 = [0, 1, 0]^T$ (orthogonal to others)." },
           { stepText: "$\\Sigma$ is $3 \\times 2$: $\\begin{bmatrix} 3\\sqrt{10} & 0 \\\\ 0 & \\sqrt{10} \\\\ 0 & 0 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-4-10-ex10", title: "Exercise 10", description: "SVD of 3x2 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} 4 & -2 \\\\ 2 & -1 \\\\ 0 & 0 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A^T A = \\begin{bmatrix} 20 & -10 \\\\ -10 & 5 \\end{bmatrix}$.\nEigenvalues: 25, 0.\n$\\sigma_1 = 5, \\sigma_2 = 0$.\n\n$V = \\frac{1}{\\sqrt{5}} \\begin{bmatrix} 2 & 1 \\\\ -1 & 2 \\end{bmatrix}$.\n\n$\\mathbf{u}_1 = \\frac{1}{5} A \\mathbf{v}_1 = \\frac{1}{5\\sqrt{5}} \\begin{bmatrix} 10 \\\\ 5 \\\\ 0 \\end{bmatrix} = \\begin{bmatrix} 2/\\sqrt{5} \\\\ 1/\\sqrt{5} \\\\ 0 \\end{bmatrix}$.\n\nExtend U: $\\mathbf{u}_2 = [-1/\\sqrt{5}, 2/\\sqrt{5}, 0]^T, \\mathbf{u}_3 = [0, 0, 1]^T$.\n\n$\\Sigma = \\begin{bmatrix} 5 & 0 \\\\ 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-4-10-ex11", title: "Exercise 11", description: "SVD of 2x3 Rank 2", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} -3 & 1 \\\\ 6 & -2 \\\\ 6 & -2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A^T A = \\begin{bmatrix} 81 & -27 \\\\ -27 & 9 \\end{bmatrix}$. Eigenvalues: 90, 0.\n$\\sigma_1 = \\sqrt{90} = 3\\sqrt{10}$.\n\n$V$: $\\mathbf{v}_1 = \\frac{1}{\\sqrt{10}} [3, -1]^T, \\mathbf{v}_2 = \\frac{1}{\\sqrt{10}} [1, 3]^T$.\n\n$U$: $\\mathbf{u}_1 = \\frac{1}{3\\sqrt{10}} A \\mathbf{v}_1 = \\frac{1}{3} [-1, 2, 2]^T$." }
      ]
    },
    {
      id: "les-4-4-10-ex12", title: "Exercise 12", description: "SVD of 2x2 Rank 1", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Find an SVD of $A = \\begin{bmatrix} 1 & 1 \\\\ 0 & 1 \\\\ -1 & 1 \\end{bmatrix}$. Note this is 3x2." },
        { id: "s1", type: "solution", title: "Solution", content: "$A^T A = \\begin{bmatrix} 2 & 0 \\\\ 0 & 3 \\end{bmatrix}$. Eigenvalues: 3, 2.\n$\\sigma_1 = \\sqrt{3}, \\sigma_2 = \\sqrt{2}$.\n\n$V = I_2$ (swapped columns to order eigenvalues: $\\mathbf{v}_1=[0,1]^T, \\mathbf{v}_2=[1,0]^T$).\n\n$U$: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{3}} A \\mathbf{v}_1 = \\frac{1}{\\sqrt{3}}[1, 1, 1]^T$.\n$\\mathbf{u}_2 = \\frac{1}{\\sqrt{2}} A \\mathbf{v}_2 = \\frac{1}{\\sqrt{2}}[1, 0, -1]^T$." }
      ]
    },
    {
      id: "les-4-4-10-ex13", title: "Exercise 13", description: "Find SVD from A^T", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Find the SVD of $A = \\begin{bmatrix} 3 & 2 & 2 \\\\ 2 & 3 & -2 \\end{bmatrix}$. [Hint: Work with $A^T$]." },
        { id: "s1", type: "solution", title: "Strategy", content: "Since $A$ has more columns than rows, $A A^T$ ($2 \\times 2$) is smaller than $A^T A$ ($3 \\times 3$).\n\n1. Find SVD of $A^T = U \\Sigma V^T$.\n2. Then $A = (A^T)^T = (U \\Sigma V^T)^T = V \\Sigma^T U^T$.\n3. The roles of U and V are swapped!" }
      ]
    },
    {
      id: "les-4-4-10-ex14", title: "Exercise 14", description: "Unit Vector Max Length", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** In Exercise 7 ($A = \\begin{bmatrix} 2 & -1 \\\\ 2 & 2 \\end{bmatrix}$), find a unit vector $\\mathbf{x}$ at which $A\\mathbf{x}$ has maximum length." },
        { id: "s1", type: "solution", title: "Solution", content: "The maximum length is achieved at the unit eigenvector $\\mathbf{v}_1$ corresponding to the largest eigenvalue of $A^T A$.\n\nFrom Ex 7, $\\mathbf{v}_1 = \\frac{1}{\\sqrt{5}} \\begin{bmatrix} 2 \\\\ 1 \\end{bmatrix}$." }
      ]
    }
  ]
};
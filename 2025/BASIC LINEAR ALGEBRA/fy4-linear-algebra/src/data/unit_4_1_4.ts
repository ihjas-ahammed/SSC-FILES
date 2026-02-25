import { Unit } from '../types';

export const UNIT_4_1_4: Unit = {
  id: "unit-4-1-4",
  title: "Spectral Decomposition & Practice",
  description: "Example 4 and Practice Problems 1 & 2.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-4-e4", title: "Spectral Decomposition", description: "Breaking A into rank 1 pieces", icon: "Split",
      slides: [
        { id: "s0", type: "theory", title: "Spectral Decomposition", content: "Suppose $A = P D P^{-1}$, where $P = [\\mathbf{u}_1 \\ \\dots \\ \\mathbf{u}_n]$ has orthonormal columns and $D = \\text{diag}(\\lambda_1, \\dots, \\lambda_n)$. Since $P^{-1} = P^T$, we can expand the matrix product:\n\n$$ A = P D P^T = [\\mathbf{u}_1 \\ \\dots \\ \\mathbf{u}_n] \\begin{bmatrix} \\lambda_1 & & 0 \\\\ & \\ddots & \\\\ 0 & & \\lambda_n \\end{bmatrix} \\begin{bmatrix} \\mathbf{u}_1^T \\\\ \\vdots \\\\ \\mathbf{u}_n^T \\end{bmatrix} $$\n\n$$ A = \\lambda_1 \\mathbf{u}_1 \\mathbf{u}_1^T + \\lambda_2 \\mathbf{u}_2 \\mathbf{u}_2^T + \\dots + \\lambda_n \\mathbf{u}_n \\mathbf{u}_n^T $$\n\nThis representation is called a **spectral decomposition** of $A$." },
        { id: "s1", type: "theory", title: "Projection Matrices", content: "Each term $\\lambda_j \\mathbf{u}_j \\mathbf{u}_j^T$ in the spectral decomposition is an $n \\times n$ matrix of rank 1.\n\nFurthermore, the matrix $\\mathbf{u}_j \\mathbf{u}_j^T$ is a **projection matrix**: for any $\\mathbf{x}$, the vector $(\\mathbf{u}_j \\mathbf{u}_j^T)\\mathbf{x}$ is exactly the orthogonal projection of $\\mathbf{x}$ onto the 1D subspace spanned by $\\mathbf{u}_j$." },
        { id: "s2", type: "example_q", title: "Example 4", content: "**Problem:** Construct a spectral decomposition of the matrix $A = \\begin{bmatrix} 7 & 2 \\\\ 2 & 4 \\end{bmatrix}$, which has the orthogonal diagonalization:\n\n$P = \\begin{bmatrix} 2/\\sqrt{5} & -1/\\sqrt{5} \\\\ 1/\\sqrt{5} & 2/\\sqrt{5} \\end{bmatrix}, \\quad D = \\begin{bmatrix} 8 & 0 \\\\ 0 & 3 \\end{bmatrix}$" },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $8\\mathbf{u}_1\\mathbf{u}_1^T + 3\\mathbf{u}_2\\mathbf{u}_2^T$.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{u}_1 = \\begin{bmatrix} 2/\\sqrt{5} \\\\ 1/\\sqrt{5} \\end{bmatrix}$." },
           { prompt: "Compute the outer product $\\mathbf{u}_1 \\mathbf{u}_1^T$.", options: [{id:"A", text:"$\\begin{bmatrix} 4/5 & 2/5 \\\\ 2/5 & 1/5 \\end{bmatrix}$", isCorrect:true, explanation:"Column vector times row vector."}, {id:"B", text:"$\\begin{bmatrix} 4/5 & 0 \\\\ 0 & 1/5 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{u}_1 \\mathbf{u}_1^T = \\begin{bmatrix} 4/5 & 2/5 \\\\ 2/5 & 1/5 \\end{bmatrix}$." },
           { stepText: "Similarly, $\\mathbf{u}_2 \\mathbf{u}_2^T = \\begin{bmatrix} -1/\\sqrt{5} \\\\ 2/\\sqrt{5} \\end{bmatrix} \\begin{bmatrix} -1/\\sqrt{5} & 2/\\sqrt{5} \\end{bmatrix} = \\begin{bmatrix} 1/5 & -2/5 \\\\ -2/5 & 4/5 \\end{bmatrix}$." },
           { stepText: "The spectral decomposition is:\n$A = 8 \\begin{bmatrix} 4/5 & 2/5 \\\\ 2/5 & 1/5 \\end{bmatrix} + 3 \\begin{bmatrix} 1/5 & -2/5 \\\\ -2/5 & 4/5 \\end{bmatrix}$." },
           { stepText: "Evaluating the right side yields $\\begin{bmatrix} 32/5 + 3/5 & 16/5 - 6/5 \\\\ 16/5 - 6/5 & 8/5 + 12/5 \\end{bmatrix} = \\begin{bmatrix} 35/5 & 10/5 \\\\ 10/5 & 20/5 \\end{bmatrix} = \\begin{bmatrix} 7 & 2 \\\\ 2 & 4 \\end{bmatrix} = A$. It works!" }
        ]}
      ]
    },
    {
      id: "les-4-1-4-p1", title: "Practice Problem 1", description: "Powers of symmetric matrices", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 1", content: "**Problem:** Show that if $A$ is a symmetric matrix, then $A^2$ is also a symmetric matrix." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that $(A^2)^T = A^2$.**", interactiveSteps: [
           { stepText: "We start by evaluating the transpose of $A^2$: $(A^2)^T = (AA)^T$." },
           { prompt: "How does the transpose operation distribute over matrix multiplication?", options: [{id:"A", text:"$(AA)^T = A^T A^T$", isCorrect:true, explanation:"The order reverses, but since both are A, it remains A^T A^T."}, {id:"B", text:"$(AA)^T = A A^T$", isCorrect:false, explanation:""}], stepText: "$(AA)^T = A^T A^T$." },
           { stepText: "By hypothesis, $A$ is symmetric, which means $A^T = A$." },
           { stepText: "Substitute $A$ for $A^T$ in our equation: $A^T A^T = A A = A^2$." },
           { stepText: "Since $(A^2)^T = A^2$, the matrix $A^2$ is symmetric. Q.E.D." }
        ]}
      ]
    },
    {
      id: "les-4-1-4-p2", title: "Practice Problem 2", description: "Diagonalizing A^2", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Practice Problem 2", content: "**Problem:** Show that if $A$ is orthogonally diagonalizable, then so is $A^2$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the relevant theorems.**", interactiveSteps: [
           { stepText: "If $A$ is orthogonally diagonalizable, what does Theorem 2 tell us about $A$?" },
           { prompt: "It tells us that $A$ is...", options: [{id:"A", text:"Symmetric", isCorrect:true, explanation:"Theorem 2 states: Orthogonally diagonalizable if and only if symmetric."}, {id:"B", text:"Invertible", isCorrect:false, explanation:""}], stepText: "$A$ is symmetric." },
           { stepText: "By the result of Practice Problem 1, since $A$ is symmetric, we know that $A^2$ is also symmetric." },
           { stepText: "By Theorem 2 again, since $A^2$ is symmetric, it must be orthogonally diagonalizable. Q.E.D." },
           { stepText: "*Alternative approach:* $A^2 = (PDP^T)(PDP^T) = PD(P^TP)DP^T$. Since $P$ is orthogonal, $P^TP=I$, so $A^2 = P D I D P^T = P D^2 P^T$. Since $P$ is orthogonal and $D^2$ is diagonal, this is an orthogonal diagonalization of $A^2$." }
        ]}
      ]
    }
  ]
};
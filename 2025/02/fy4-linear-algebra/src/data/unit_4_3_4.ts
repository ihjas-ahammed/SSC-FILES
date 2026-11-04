import { Unit } from '../types';

export const UNIT_4_3_4: Unit = {
  id: "unit-4-3-4",
  title: "Orthogonal Constraints in Practice",
  description: "Examples 4 & 5: Applying Theorem 7 to find the second largest eigenvalue.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-4-e4", title: "Example 4: Diagonal Constraint", description: "Applying Theorem 7", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Find the maximum value of $9x_1^2 + 4x_2^2 + 3x_3^2$ subject to the constraints $\\mathbf{x}^T\\mathbf{x} = 1$ and $\\mathbf{x}^T\\mathbf{u}_1 = 0$, where $\\mathbf{u}_1 = (1, 0, 0)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Apply the orthogonal constraint.**", interactiveSteps: [
           { stepText: "The matrix is diagonal with eigenvalues 9, 4, 3. The greatest is 9, with eigenvector $\\mathbf{u}_1 = (1,0,0)$." },
           { prompt: "The constraint $\\mathbf{x}^T\\mathbf{u}_1 = 0$ means $x_1(1) + x_2(0) + x_3(0) = 0$. What does this force?", options: [{id:"A", text:"$x_1 = 0$", isCorrect:true, explanation:"The first coordinate must be zero."}, {id:"B", text:"$x_2 = 0$", isCorrect:false, explanation:""}], stepText: "It forces $x_1 = 0$." },
           { stepText: "Substitute $x_1 = 0$ into the quadratic form: $9(0)^2 + 4x_2^2 + 3x_3^2 = 4x_2^2 + 3x_3^2$." },
           { stepText: "Now maximize $4x_2^2 + 3x_3^2$ subject to $x_2^2 + x_3^2 = 1$." },
           { stepText: "By the same logic as Example 1, the maximum is 4, attained when $x_2=1, x_3=0$." },
           { stepText: "This perfectly matches Theorem 7: The max is the second eigenvalue (4), attained at its eigenvector $(0,1,0)$." }
        ]}
      ]
    },
    {
      id: "les-4-3-4-e5", title: "Example 5: Full Matrix Constraint", description: "Applying Theorem 7 generally", icon: "Target",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "**Problem:** Let $A = \\begin{bmatrix} 3 & 2 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 1 & 4 \\end{bmatrix}$ be the matrix in Example 3 and let $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\end{bmatrix}$.\n\nFind the maximum value of $\\mathbf{x}^T A \\mathbf{x}$ subject to the conditions $\\mathbf{x}^T\\mathbf{x} = 1$ and $\\mathbf{x}^T\\mathbf{u}_1 = 0$." },
        { id: "s1", type: "solution", title: "Solution", content: "From Example 3, we know the eigenvalues of $A$ are $\\lambda_1 = 6, \\lambda_2 = 3, \\lambda_3 = 1$.\n\nThe vector $\\mathbf{u}_1$ is the unit eigenvector for the largest eigenvalue $\\lambda_1 = 6$.\n\nBy Theorem 7, adding the constraint $\\mathbf{x}^T\\mathbf{u}_1 = 0$ means the maximum value drops to the *second greatest eigenvalue*, which is $\\lambda_2 = 3$.\n\nTo find where it is attained, we solve $(A - 3I)\\mathbf{x} = \\mathbf{0}$ to find the unit eigenvector $\\mathbf{u}_2 = \\begin{bmatrix} 1/\\sqrt{6} \\\\ 1/\\sqrt{6} \\\\ -2/\\sqrt{6} \\end{bmatrix}$." },
        { id: "s2", type: "numerical", title: "Verification", content: "What is $\\mathbf{u}_1 \\cdot \\mathbf{u}_2$?", numericAnswer: 0, numericTolerance: 0 }
      ]
    }
  ]
};
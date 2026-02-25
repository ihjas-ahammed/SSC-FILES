import { Unit } from '../types';

export const UNIT_4_1_8: Unit = {
  id: "unit-4-1-8",
  title: "Verifying Eigenvectors First",
  description: "Exercises 23-24: Check given eigenvectors before diagonalizing.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-8-ex23", title: "Exercise 23", description: "Verify and diagonalize", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Let $A = \\begin{bmatrix} 3 & 1 & 1 \\\\ 1 & 3 & 1 \\\\ 1 & 1 & 3 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$.\n\nVerify that $5$ is an eigenvalue of $A$ and $\\mathbf{v}$ is an eigenvector. Then orthogonally diagonalize $A$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Verify, then find the rest.**", interactiveSteps: [
           { stepText: "Compute $A\\mathbf{v}$: $\\begin{bmatrix} 3 & 1 & 1 \\\\ 1 & 3 & 1 \\\\ 1 & 1 & 3 \\end{bmatrix} \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix} = \\begin{bmatrix} 5 \\\\ 5 \\\\ 5 \\end{bmatrix} = 5\\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$." },
           { prompt: "Does this confirm $\\lambda=5$ is an eigenvalue?", options: [{id:"A", text:"Yes, since $A\\mathbf{v} = 5\\mathbf{v}$.", isCorrect:true, explanation:""}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Verification complete." },
           { stepText: "To diagonalize, we need the other eigenvalues. Trace = 9. Since $\\lambda_1=5$, $\\lambda_2+\\lambda_3 = 4$. Notice columns are highly symmetric. If we subtract row 1 from row 2 and 3, we see $\\lambda=2$ is an eigenvalue with multiplicity 2." },
           { stepText: "For $\\lambda=2$, $A-2I = \\begin{bmatrix} 1 & 1 & 1 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{bmatrix}$. The null space is $x_1+x_2+x_3=0$." },
           { stepText: "Pick two orthogonal vectors in this plane, e.g., $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{v}_3 = \\begin{bmatrix} -1 \\\\ -1 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Normalize $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ to construct $P$." }
        ]}
      ]
    },
    {
      id: "les-4-1-8-ex24", title: "Exercise 24", description: "Verify 2 vectors", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Let $A = \\begin{bmatrix} 5 & -4 & -2 \\\\ -4 & 5 & 2 \\\\ -2 & 2 & 2 \\end{bmatrix}$, $\\mathbf{v}_1 = \\begin{bmatrix} -2 \\\\ 2 \\\\ 1 \\end{bmatrix}$, $\\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$.\n\nVerify that $\\mathbf{v}_1$ and $\\mathbf{v}_2$ are eigenvectors of $A$. Then orthogonally diagonalize $A$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $A\\mathbf{v}_1$ and $A\\mathbf{v}_2$.**", interactiveSteps: [
           { stepText: "Compute $A\\mathbf{v}_1$: $\\begin{bmatrix} -10 - 8 - 2 \\\\ 8 + 10 + 2 \\\\ 4 + 4 + 2 \\end{bmatrix} = \\begin{bmatrix} -20 \\\\ 20 \\\\ 10 \\end{bmatrix} = 10\\begin{bmatrix} -2 \\\\ 2 \\\\ 1 \\end{bmatrix}$. So $\\lambda_1 = 10$." },
           { stepText: "Compute $A\\mathbf{v}_2$: $\\begin{bmatrix} 5 - 4 + 0 \\\\ -4 + 5 + 0 \\\\ -2 + 2 + 0 \\end{bmatrix} = \\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix} = 1\\begin{bmatrix} 1 \\\\ 1 \\\\ 0 \\end{bmatrix}$. So $\\lambda_2 = 1$." },
           { stepText: "To find $\\mathbf{v}_3$, we need a vector orthogonal to both $\\mathbf{v}_1$ and $\\mathbf{v}_2$. \nUsing cross product (in R3) or solving a system: $[-2, 2, 1] \\cdot \\mathbf{x} = 0$ and $[1, 1, 0] \\cdot \\mathbf{x} = 0$." },
           { stepText: "From the second, $x_1 = -x_2$. Substitute into first: $2x_2 + 2x_2 + x_3 = 0 \\implies x_3 = -4x_2$.\nLet $x_2=1$, then $\\mathbf{v}_3 = \\begin{bmatrix} -1 \\\\ 1 \\\\ -4 \\end{bmatrix}$." },
           { stepText: "Compute $A\\mathbf{v}_3$ to find $\\lambda_3$. It is $1\\mathbf{v}_3$, so $\\lambda_3=1$." },
           { stepText: "Normalize $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$ to form $P$. $D = \\text{diag}(10, 1, 1)$." }
        ]}
      ]
    }
  ]
};
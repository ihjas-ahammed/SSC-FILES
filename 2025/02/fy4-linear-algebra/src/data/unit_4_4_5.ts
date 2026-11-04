import { Unit } from '../types';

export const UNIT_4_4_5: Unit = {
  id: "unit-4-4-5",
  title: "Constructing the SVD",
  description: "Example 3: Step-by-step construction.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-4-5-e3", title: "Example 3: SVD Construction", description: "Calculating U, Sigma, V", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Construct a singular value decomposition of $A = \\begin{bmatrix} 1 & -1 \\\\ -2 & 2 \\\\ 2 & -2 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Step 1: Eigenvalues of A^T A", content: "Compute $A^T A = \\begin{bmatrix} 9 & -9 \\\\ -9 & 9 \\end{bmatrix}$.\nEigenvalues are $\\lambda_1 = 18, \\lambda_2 = 0$.\nSingular values: $\\sigma_1 = \\sqrt{18} = 3\\sqrt{2}, \\sigma_2 = 0$." },
        { id: "s2", type: "solution", title: "Step 2: V Matrix", content: "Unit eigenvectors of $A^T A$:\nFor $\\lambda=18$: $\\mathbf{v}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ -1/\\sqrt{2} \\end{bmatrix}$.\nFor $\\lambda=0$: $\\mathbf{v}_2 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$.\nSo $V = [\\mathbf{v}_1 \\ \\mathbf{v}_2]$." },
        { id: "s3", type: "solution", title: "Step 3: U Matrix (First r columns)", content: "We need $\\mathbf{u}_1 = \\frac{1}{\\sigma_1} A \\mathbf{v}_1$.\n$A \\mathbf{v}_1 = \\begin{bmatrix} 2/\\sqrt{2} \\\\ -4/\\sqrt{2} \\\\ 4/\\sqrt{2} \\end{bmatrix}$.\n$\\mathbf{u}_1 = \\frac{1}{3\\sqrt{2}} \\begin{bmatrix} \\sqrt{2} \\\\ -2\\sqrt{2} \\\\ 2\\sqrt{2} \\end{bmatrix} = \\begin{bmatrix} 1/3 \\\\ -2/3 \\\\ 2/3 \\end{bmatrix}$." },
        { id: "s4", type: "solution", title: "Step 4: Extend U", content: "Since $A$ is $3 \\times 2$, $U$ must be $3 \\times 3$. We need $\\mathbf{u}_2, \\mathbf{u}_3$ to complete the orthonormal basis.\nFind vectors orthogonal to $\\mathbf{u}_1$, e.g., $\\mathbf{u}_2 = [2/3, 1/3, 0]^T$ (normalized? need to check) and $\\mathbf{u}_3$ via Gram-Schmidt.\nThen $A = U \\Sigma V^T$." }
      ]
    }
  ]
};
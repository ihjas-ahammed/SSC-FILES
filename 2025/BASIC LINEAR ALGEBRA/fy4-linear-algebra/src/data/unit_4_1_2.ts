import { Unit } from '../types';

export const UNIT_4_1_2: Unit = {
  id: "unit-4-1-2",
  title: "Orthogonal Diagonalization",
  description: "Theorem 2 and Example 3: Orthogonally diagonalizing matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-2-d2-t2", title: "Orthogonal Diagonalization Definition & Theorem 2", description: "A special type of diagonalization.", icon: "Repeat",
      slides: [
        { id: "s0", type: "theory", title: "Definition", content: "An $n \\times n$ matrix $A$ is said to be **orthogonally diagonalizable** if there are an orthogonal matrix $P$ (with $P^{-1} = P^T$) and a diagonal matrix $D$ such that\n$$ A = P D P^T = P D P^{-1} $$\nSuch a diagonalization requires $n$ linearly independent and orthonormal eigenvectors." },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up", content: "If a matrix can be written as $A = P D P^T$, what is the transpose of $A$, $A^T$?", options: [{id:"A", text:"$(P D P^T)^T = (P^T)^T D^T P^T = P D P^T = A$", isCorrect:true, explanation:"Because D is diagonal, D^T = D. So A^T = A. This implies A MUST be symmetric!"}, {id:"B", text:"$P^T D P$", isCorrect:false, explanation:"Remember to reverse the order of multiplication when taking the transpose of a product."}] },
        { id: "s2", type: "theory", title: "Theorem 2", content: "**Theorem 2:** An $n \\times n$ matrix $A$ is orthogonally diagonalizable if and only if $A$ is a symmetric matrix.\n\nThis is a remarkably powerful result: symmetric matrices are the *only* matrices that can be orthogonally diagonalized, and *every single* symmetric matrix can be." },
        { id: "s3", type: "fill_in_blank", title: "Summary", content: "If a matrix is orthogonally diagonalizable, it is mathematically guaranteed to be a ___ matrix.", blankAnswer: "symmetric" }
      ]
    },
    {
      id: "les-4-1-2-e3", title: "Example 3: Repeated Eigenvalues", description: "Dealing with multiplicities", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Orthogonally diagonalize the matrix $A = \\begin{bmatrix} 3 & -2 & 4 \\\\ -2 & 6 & 2 \\\\ 4 & 2 & 3 \\end{bmatrix}$, whose characteristic equation is $0 = -(\\lambda - 7)^2(\\lambda + 2)$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find an orthonormal basis of eigenvectors.**", interactiveSteps: [
           { stepText: "Eigenvalues are $\\lambda = 7$ (multiplicity 2) and $\\lambda = -2$." },
           { stepText: "For $\\lambda = 7$, solving $(A - 7I)\\mathbf{x} = \\mathbf{0}$ yields two basis vectors: $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$ and $\\mathbf{v}_2 = \\begin{bmatrix} -1/2 \\\\ 1 \\\\ 0 \\end{bmatrix}$." },
           { prompt: "Are $\\mathbf{v}_1$ and $\\mathbf{v}_2$ orthogonal?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:""}, {id:"B", text:"No", isCorrect:true, explanation:"Their dot product is -1/2, not 0."}], stepText: "They are not orthogonal! Theorem 1 only guarantees orthogonality for eigenvectors from *different* eigenspaces. Since these share $\\lambda=7$, they aren't guaranteed to be orthogonal." },
           { stepText: "To fix this, we apply the Gram-Schmidt process to $\\mathbf{v}_1, \\mathbf{v}_2$ to create an orthogonal basis for this 2D eigenspace:\n$\\mathbf{z}_1 = \\mathbf{v}_1$\n$\\mathbf{z}_2 = \\mathbf{v}_2 - \\frac{\\mathbf{v}_2 \\cdot \\mathbf{v}_1}{\\mathbf{v}_1 \\cdot \\mathbf{v}_1}\\mathbf{v}_1 = \\begin{bmatrix} -1/4 \\\\ 1 \\\\ 1/4 \\end{bmatrix}$." },
           { stepText: "Now normalize them: $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 0 \\\\ 1/\\sqrt{2} \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{18} \\\\ 4/\\sqrt{18} \\\\ 1/\\sqrt{18} \\end{bmatrix}$." },
           { stepText: "For $\\lambda = -2$, we find basis $\\mathbf{v}_3 = \\begin{bmatrix} -1 \\\\ -1/2 \\\\ 1 \\end{bmatrix}$. Normalizing gives $\\mathbf{u}_3 = \\begin{bmatrix} -2/3 \\\\ -1/3 \\\\ 2/3 \\end{bmatrix}$." },
           { stepText: "By Theorem 1, $\\mathbf{u}_3$ is automatically orthogonal to $\\mathbf{u}_1$ and $\\mathbf{u}_2$. Thus $\\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ forms an orthonormal basis for $\\mathbb{R}^3$." },
           { stepText: "Finally, $P = [\\mathbf{u}_1 \\ \\mathbf{u}_2 \\ \\mathbf{u}_3]$ and $D = \\text{diag}(7, 7, -2)$. $A = PDP^T$." }
        ]},
        { id: "s2", type: "quiz", title: "Gram-Schmidt usage", content: "Why did we need to use the Gram-Schmidt process in this example?", options: [{id:"A", text:"To make eigenvectors from different eigenspaces orthogonal.", isCorrect:false, explanation:"Theorem 1 already handles that for us."}, {id:"B", text:"To make the two eigenvectors from the SAME repeated eigenspace orthogonal.", isCorrect:true, explanation:"Repeated eigenvalues produce multidimensional eigenspaces where the basis vectors aren't automatically orthogonal."}] }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_4_1_9: Unit = {
  id: "unit-4-1-9",
  title: "Conceptual True/False",
  description: "Exercises 25-26: Test your understanding of Theorems 1, 2, and 3.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-9-ex25", title: "Exercise 25: True/False", description: "Part 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "An $n \\times n$ matrix that is orthogonally diagonalizable must be symmetric.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is Theorem 2. If $A = P D P^T$, then $A^T = (P D P^T)^T = P D P^T = A$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $A^T = A$ and if vectors $\\mathbf{u}$ and $\\mathbf{v}$ satisfy $A\\mathbf{u} = 3\\mathbf{u}$ and $A\\mathbf{v} = 4\\mathbf{v}$, then $\\mathbf{u} \\cdot \\mathbf{v} = 0$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Theorem 1: Eigenvectors from different eigenspaces (3 and 4) of a symmetric matrix are orthogonal."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "An $n \\times n$ symmetric matrix has $n$ distinct real eigenvalues.", options: [{id:"A", text:"True", isCorrect:false, explanation:"It has n real eigenvalues COUNTING multiplicities. They don't have to be distinct (e.g. Identity matrix)."}, {id:"B", text:"False", isCorrect:true, explanation:"Eigenvalues can be repeated."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "For a nonzero $\\mathbf{v}$ in $\\mathbb{R}^n$, the matrix $\\mathbf{v}\\mathbf{v}^T$ is called a projection matrix.", options: [{id:"A", text:"True", isCorrect:false, explanation:"It is only a projection matrix if v is a UNIT vector. Otherwise it must be normalized: vv^T / (v^T v)."}, {id:"B", text:"False", isCorrect:true, explanation:"v must be a unit vector for this to be a true projection matrix onto Span{v}."}] }
      ]
    },
    {
      id: "les-4-1-9-ex26", title: "Exercise 26: True/False", description: "Part 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "Every symmetric matrix is orthogonally diagonalizable.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the other half of Theorem 2."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "If $B = P D P^T$, where $P^T = P^{-1}$ and $D$ is a diagonal matrix, then $B$ is a symmetric matrix.", options: [{id:"A", text:"True", isCorrect:true, explanation:"$B^T = (P D P^T)^T = P D^T P^T = P D P^T = B$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "An orthogonal matrix is orthogonally diagonalizable.", options: [{id:"A", text:"True", isCorrect:false, explanation:"An orthogonal matrix (U^T U = I) is not necessarily symmetric. Example: a 90 degree rotation matrix."}, {id:"B", text:"False", isCorrect:true, explanation:"Only SYMMETRIC matrices are orthogonally diagonalizable."}] },
        { id: "s3", type: "quiz", title: "Question D", content: "The dimension of an eigenspace of a symmetric matrix equals the multiplicity of the corresponding eigenvalue.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is Property (b) of the Spectral Theorem (Theorem 3)."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_3_4_5: Unit = {
  id: "unit-3-4-5",
  title: "QR Factorization",
  description: "Theorem 12 and Example 4: A = QR decomposition.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-5-thm12", title: "Theorem 12: QR Factorization", description: "Matrix Factorization", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 12", content: "If $A$ is an $m \\times n$ matrix with linearly independent columns, then $A$ can be factored as\n$$ A = Q R $$\nwhere $Q$ is an $m \\times n$ matrix whose columns form an orthonormal basis for $\\text{Col } A$, and $R$ is an $n \\times n$ upper triangular invertible matrix with positive entries on its diagonal." },
        { id: "s1", type: "quiz", title: "Matrix Q", content: "What property do the columns of $Q$ have?", options: [{id:"A", text:"They are orthogonal but not unit length.", isCorrect:false, explanation:"That would just be an orthogonal basis."}, {id:"B", text:"They are orthonormal.", isCorrect:true, explanation:"$Q^T Q = I$."}] },
        { id: "s2", type: "quiz", title: "Matrix R", content: "Why is $R$ upper triangular?", options: [{id:"A", text:"Because of the Gram-Schmidt construction.", isCorrect:true, explanation:"Each column $\\mathbf{x}_k$ depends only on $\\mathbf{v}_1, \\dots, \\mathbf{v}_k$, which means only the first $k$ columns of $Q$ are involved."}, {id:"B", text:"Coincidence.", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-4-5-ex4", title: "Example 4: Calculating QR", description: "Finding R", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 4", content: "**Problem:** Find the QR factorization of $A = \\begin{bmatrix} 1 & 0 & 0 \\\\ 1 & 1 & 0 \\\\ 1 & 1 & 1 \\\\ 1 & 1 & 1 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Get Q from Gram-Schmidt, then R.**", interactiveSteps: [
           { stepText: "The columns of $A$ are the vectors from Example 2! We already found the orthogonal basis $\\{\\mathbf{v}_1, \\mathbf{v}_2', \\mathbf{v}_3\\}$." },
           { stepText: "Normalize them to get $Q$:\n$\\mathbf{u}_1 = \\frac{1}{2}[1,1,1,1]^T$\n$\\mathbf{u}_2 = \\frac{1}{\\sqrt{12}}[-3,1,1,1]^T$\n$\\mathbf{u}_3 = \\frac{1}{\\sqrt{6}}[0,-2,1,1]^T$" },
           { stepText: "$Q = [\\mathbf{u}_1 \\ \\mathbf{u}_2 \\ \\mathbf{u}_3]$." },
           { prompt: "How do we find $R$? Recall $A = QR$ and $Q^T Q = I$.", options: [{id:"A", text:"$R = Q^T A$", isCorrect:true, explanation:"Multiply $A=QR$ by $Q^T$ on the left."}, {id:"B", text:"$R = A Q^T$", isCorrect:false, explanation:""}], stepText: "Compute $R = Q^T A$. The entries will be the dot products of columns of Q with columns of A." },
           { stepText: "First col of R: $\\mathbf{u}_1 \\cdot \\mathbf{x}_1 = 2$. (Others 0).\nSecond col: $\\mathbf{u}_1 \\cdot \\mathbf{x}_2 = 3/2$, $\\mathbf{u}_2 \\cdot \\mathbf{x}_2 = 3/\\sqrt{12}$." },
           { stepText: "And so on. $R$ will be upper triangular." }
        ]}
      ]
    }
  ]
};
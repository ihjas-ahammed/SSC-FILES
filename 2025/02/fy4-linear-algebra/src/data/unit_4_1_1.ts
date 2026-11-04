import { Unit } from '../types';

export const UNIT_4_1_1: Unit = {
  id: "unit-4-1-1",
  title: "Symmetric Matrices",
  description: "Definitions, Examples 1 & 2, and Theorem 1.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-1-d1", title: "Definition of a Symmetric Matrix", description: "What makes a matrix symmetric?", icon: "Grid",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "What is the transpose of a matrix?", options: [{id:"A", text:"Swapping its rows and columns.", isCorrect:true, explanation:""}, {id:"B", text:"Inverting the matrix.", isCorrect:false, explanation:""}] },
        { id: "s1", type: "theory", title: "Definition: Symmetric Matrix", content: "A **symmetric matrix** is a matrix $A$ such that $A^T = A$.\n\nSuch a matrix is necessarily square ($n \\times n$). Its main diagonal entries are arbitrary, but its other entries occur in pairs—on opposite sides of the main diagonal." },
        { id: "s2", type: "quiz", title: "Conceptual Check", content: "If $A$ is symmetric, what is the mathematical relationship between entry $A_{ij}$ and $A_{ji}$?", options: [{id:"A", text:"$A_{ij} = A_{ji}$", isCorrect:true, explanation:"Entries mirrored across the main diagonal are identical."}, {id:"B", text:"$A_{ij} = -A_{ji}$", isCorrect:false, explanation:"That defines a skew-symmetric matrix."}] },
        { id: "s3", type: "numerical", title: "Missing Entry", content: "If $A = \\begin{bmatrix} 2 & x \\\\ 3 & 5 \\end{bmatrix}$ is a symmetric matrix, what is the value of $x$?", numericAnswer: 3, numericTolerance: 0 }
      ]
    },
    {
      id: "les-4-1-1-e1", title: "Example 1: Identifying Symmetric Matrices", description: "Recognizing symmetry", icon: "Eye",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Which of the following matrices are symmetric?\n\n$A = \\begin{bmatrix} 1 & 0 \\\\ 0 & -3 \\end{bmatrix}$, $B = \\begin{bmatrix} 0 & -1 & 0 \\\\ -1 & 5 & 8 \\\\ 0 & 8 & -7 \\end{bmatrix}$, $C = \\begin{bmatrix} a & b & c \\\\ b & d & e \\\\ c & e & f \\end{bmatrix}$, \n$D = \\begin{bmatrix} 1 & -3 \\\\ 3 & 0 \\end{bmatrix}$, $E = \\begin{bmatrix} 1 & -4 & 0 \\\\ -6 & 1 & -4 \\\\ 0 & -6 & 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check if $M^T = M$ for each matrix.**", interactiveSteps: [
           { stepText: "Matrix $A$: Diagonal matrices are always symmetric since $A_{12} = A_{21} = 0$. Yes, $A$ is symmetric." },
           { stepText: "Matrix $B$: $B_{12} = B_{21} = -1$, $B_{13} = B_{31} = 0$, $B_{23} = B_{32} = 8$. Yes, $B$ is symmetric." },
           { stepText: "Matrix $C$: Contains generic symbols, but $C_{ij} = C_{ji}$ for all $i,j$. Yes, $C$ is symmetric." },
           { prompt: "Is matrix $D$ symmetric?", options: [{id:"A", text:"No", isCorrect:true, explanation:"$D_{12} = -3$, but $D_{21} = 3$. They are not equal."}, {id:"B", text:"Yes", isCorrect:false, explanation:""}], stepText: "Matrix $D$ is not symmetric." },
           { stepText: "Matrix $E$: $E_{12} = -4$ but $E_{21} = -6$. Not symmetric." }
        ]}
      ]
    },
    {
      id: "les-4-1-1-e2", title: "Example 2: Diagonalizing a Symmetric Matrix", description: "Finding orthonormal eigenvectors", icon: "Zap",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** If possible, diagonalize the symmetric matrix $A = \\begin{bmatrix} 6 & -2 & -1 \\\\ -2 & 6 & -1 \\\\ -1 & -1 & 5 \\end{bmatrix}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $P$ and $D$ such that $A = PDP^{-1}$.**", interactiveSteps: [
           { stepText: "The characteristic equation of $A$ is $0 = -\\lambda^3 + 17\\lambda^2 - 90\\lambda + 144 = -(\\lambda - 8)(\\lambda - 6)(\\lambda - 3)$." },
           { stepText: "Eigenvalues are $\\lambda = 8, 6, 3$." },
           { stepText: "Basis for $\\lambda = 8$: $\\mathbf{v}_1 = \\begin{bmatrix} -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$." },
           { stepText: "Basis for $\\lambda = 6$: $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ -1 \\\\ 2 \\end{bmatrix}$." },
           { stepText: "Basis for $\\lambda = 3$: $\\mathbf{v}_3 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$." },
           { prompt: "Check the dot products of these eigenvectors. What is $\\mathbf{v}_1 \\cdot \\mathbf{v}_2$?", options: [{id:"A", text:"0", isCorrect:true, explanation:"$(-1)(-1) + (1)(-1) + (0)(2) = 1 - 1 + 0 = 0$."}, {id:"B", text:"2", isCorrect:false, explanation:""}], stepText: "Notice that $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$ forms an orthogonal set! This happens beautifully for symmetric matrices." },
           { stepText: "We can normalize them to create an *orthonormal* basis: $\\mathbf{u}_1 = \\frac{1}{\\sqrt{2}}\\mathbf{v}_1$, $\\mathbf{u}_2 = \\frac{1}{\\sqrt{6}}\\mathbf{v}_2$, $\\mathbf{u}_3 = \\frac{1}{\\sqrt{3}}\\mathbf{v}_3$." },
           { stepText: "Let $P = [\\mathbf{u}_1 \\ \\mathbf{u}_2 \\ \\mathbf{u}_3]$ and $D = \\text{diag}(8, 6, 3)$. Then $A = PDP^{-1}$." }
        ]},
        { id: "s2", type: "quiz", title: "Property of P", content: "Since $P$ has orthonormal columns and is a square matrix, what special property does its inverse have?", options: [{id:"A", text:"$P^{-1} = P^T$", isCorrect:true, explanation:"P is an orthogonal matrix, so we can write $A = P D P^T$."}, {id:"B", text:"$P^{-1} = P$", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-4-1-1-t1", title: "Theorem 1: Orthogonal Eigenvectors", description: "Why were they orthogonal?", icon: "Shield",
      slides: [
        { id: "s0", type: "quiz", title: "Observation", content: "In Example 2, the eigenvectors for the three different eigenvalues turned out to be exactly orthogonal to each other. Was this a coincidence?", options: [{id:"A", text:"Yes, we just got lucky.", isCorrect:false, explanation:"In mathematics, structural coincidences like this usually point to a deeper theorem."}, {id:"B", text:"No, it is a guaranteed property of symmetric matrices.", isCorrect:true, explanation:"Theorem 1 guarantees this behavior."}] },
        { id: "s1", type: "theory", title: "Theorem 1", content: "**Theorem 1:** If $A$ is a symmetric matrix, then any two eigenvectors from different eigenspaces are orthogonal." },
        { id: "s2", type: "proof", title: "Interactive Proof", content: "**Goal: Show $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$ given $A\\mathbf{v}_1 = \\lambda_1\\mathbf{v}_1$ and $A\\mathbf{v}_2 = \\lambda_2\\mathbf{v}_2$ with $\\lambda_1 \\neq \\lambda_2$.**", interactiveSteps: [
           { stepText: "Start by computing $\\lambda_1 (\\mathbf{v}_1 \\cdot \\mathbf{v}_2)$." },
           { prompt: "Rewrite this using matrix transpose notation.", options: [{id:"A", text:"$(\\lambda_1 \\mathbf{v}_1)^T \\mathbf{v}_2$", isCorrect:true, explanation:"Dot product $u \\cdot v = u^T v$."}, {id:"B", text:"$\\lambda_1 (\\mathbf{v}_1 \\mathbf{v}_2)$", isCorrect:false, explanation:""}], stepText: "It equals $(\\lambda_1 \\mathbf{v}_1)^T \\mathbf{v}_2 = (A \\mathbf{v}_1)^T \\mathbf{v}_2$." },
           { stepText: "Expand the transpose: $(A \\mathbf{v}_1)^T \\mathbf{v}_2 = \\mathbf{v}_1^T A^T \\mathbf{v}_2$." },
           { prompt: "Since $A$ is a symmetric matrix, what can we substitute for $A^T$?", options: [{id:"A", text:"$A$", isCorrect:true, explanation:"By definition of symmetric, $A^T = A$."}, {id:"B", text:"$A^{-1}$", isCorrect:false, explanation:""}], stepText: "We substitute $A$ to get $\\mathbf{v}_1^T (A \\mathbf{v}_2)$." },
           { stepText: "Now substitute $A \\mathbf{v}_2 = \\lambda_2 \\mathbf{v}_2$: \n$\\mathbf{v}_1^T (\\lambda_2 \\mathbf{v}_2) = \\lambda_2 (\\mathbf{v}_1^T \\mathbf{v}_2) = \\lambda_2 (\\mathbf{v}_1 \\cdot \\mathbf{v}_2)$." },
           { stepText: "So we have proven that $\\lambda_1 (\\mathbf{v}_1 \\cdot \\mathbf{v}_2) = \\lambda_2 (\\mathbf{v}_1 \\cdot \\mathbf{v}_2)$. This implies $(\\lambda_1 - \\lambda_2)(\\mathbf{v}_1 \\cdot \\mathbf{v}_2) = 0$." },
           { stepText: "Since we assumed $\\lambda_1 \\neq \\lambda_2$, their difference is not zero. We must divide by it to conclude $\\mathbf{v}_1 \\cdot \\mathbf{v}_2 = 0$. The vectors are orthogonal!" }
        ]},
        { id: "s3", type: "fill_in_blank", title: "Proof Core", content: "The proof of Theorem 1 heavily relies on moving the matrix across the dot product, which is only possible because $A^T = $ ___.", blankAnswer: "A" }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_4_1_10: Unit = {
  id: "unit-4-1-10",
  title: "Advanced Proofs & Spectral Decomposition",
  description: "Exercises 27-40: Algebraic properties of symmetric matrices and spectral decomposition.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-10-ex27", title: "Exercise 27", description: "Symmetry of matrix products", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Suppose $A$ is a symmetric $n \\times n$ matrix and $B$ is any $n \\times m$ matrix. Show that $B^T A B$ is symmetric." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that $(B^T A B)^T = B^T A B$.**", interactiveSteps: [
           { stepText: "Take the transpose of the entire expression: $(B^T A B)^T$." },
           { prompt: "How does the transpose apply to a product of three matrices $(XYZ)^T$?", options: [{id:"A", text:"$Z^T Y^T X^T$", isCorrect:true, explanation:"The order of all matrices is reversed."}, {id:"B", text:"$X^T Y^T Z^T$", isCorrect:false, explanation:""}], stepText: "Reverse the order: $B^T A^T (B^T)^T$." },
           { stepText: "Simplify $(B^T)^T$ to $B$. The expression becomes $B^T A^T B$." },
           { stepText: "Since $A$ is symmetric, we substitute $A^T = A$." },
           { stepText: "This leaves us with $B^T A B$. Since taking the transpose returned the original matrix, it is symmetric." }
        ]}
      ]
    },
    {
      id: "les-4-1-10-ex28", title: "Exercise 28", description: "Moving A across the dot product", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Show that if $A$ is an $n \\times n$ symmetric matrix, then $(A\\mathbf{x}) \\cdot \\mathbf{y} = \\mathbf{x} \\cdot (A\\mathbf{y})$ for all $\\mathbf{x}, \\mathbf{y}$ in $\\mathbb{R}^n$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Convert dot products to matrix multiplication.**", interactiveSteps: [
           { stepText: "Write the dot product $(A\\mathbf{x}) \\cdot \\mathbf{y}$ as a matrix multiplication." },
           { prompt: "What is the equivalent expression?", options: [{id:"A", text:"$(A\\mathbf{x})^T \\mathbf{y}$", isCorrect:true, explanation:"Dot product $u \\cdot v = u^T v$."}, {id:"B", text:"$\\mathbf{x}^T A \\mathbf{y}$", isCorrect:false, explanation:"That is the next step."}], stepText: "It equals $(A\\mathbf{x})^T \\mathbf{y}$." },
           { stepText: "Expand the transpose: $\\mathbf{x}^T A^T \\mathbf{y}$." },
           { stepText: "Since $A$ is symmetric, $A^T = A$. This becomes $\\mathbf{x}^T A \\mathbf{y}$." },
           { stepText: "Regroup the terms: $\\mathbf{x}^T (A\\mathbf{y})$." },
           { stepText: "Convert back to a dot product: $\\mathbf{x} \\cdot (A\\mathbf{y})$. Q.E.D." }
        ]}
      ]
    },
    {
      id: "les-4-1-10-ex29", title: "Exercise 29", description: "Inverses of symmetric matrices", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 29", content: "**Problem:** Suppose $A$ is invertible and orthogonally diagonalizable. Explain why $A^{-1}$ is also orthogonally diagonalizable." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Find the diagonalization of $A^{-1}$.**", interactiveSteps: [
           { stepText: "Since $A$ is orthogonally diagonalizable, $A = P D P^T$ where $P$ is orthogonal and $D$ is diagonal." },
           { prompt: "Take the inverse of both sides. What is $(P D P^T)^{-1}$?", options: [{id:"A", text:"$(P^T)^{-1} D^{-1} P^{-1}$", isCorrect:true, explanation:"Reverse order and invert each."}, {id:"B", text:"$P^{-1} D^{-1} (P^T)^{-1}$", isCorrect:false, explanation:""}], stepText: "$A^{-1} = (P^T)^{-1} D^{-1} P^{-1}$." },
           { stepText: "Since $P$ is orthogonal, $P^{-1} = P^T$ and $(P^T)^{-1} = (P^{-1})^{-1} = P$." },
           { stepText: "Substitute these in: $A^{-1} = P D^{-1} P^T$." },
           { stepText: "Since $D^{-1}$ is just a diagonal matrix (with $1/\\lambda_i$ on the diagonal), this is exactly an orthogonal diagonalization for $A^{-1}$." }
        ]}
      ]
    },
    {
      id: "les-4-1-10-ex30", title: "Exercise 30", description: "Commuting symmetric matrices", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 30", content: "**Problem:** Suppose $A$ and $B$ are both orthogonally diagonalizable and $AB = BA$. Explain why $AB$ is also orthogonally diagonalizable." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $AB$ is symmetric.**", interactiveSteps: [
           { stepText: "If $A$ and $B$ are orthogonally diagonalizable, Theorem 2 tells us they are both symmetric: $A^T = A$ and $B^T = B$." },
           { prompt: "We want to show $AB$ is symmetric. Start by taking its transpose: $(AB)^T$. What does this equal?", options: [{id:"A", text:"$B^T A^T$", isCorrect:true, explanation:""}, {id:"B", text:"$A^T B^T$", isCorrect:false, explanation:""}], stepText: "$(AB)^T = B^T A^T$." },
           { stepText: "Substitute the symmetry properties: $B^T A^T = B A$." },
           { stepText: "We are given that $AB = BA$. Therefore, $B A = AB$." },
           { stepText: "Stringing it all together: $(AB)^T = AB$. Thus, $AB$ is symmetric." },
           { stepText: "By Theorem 2, any symmetric matrix is orthogonally diagonalizable. Q.E.D." }
        ]}
      ]
    },
    {
      id: "les-4-1-10-ex31", title: "Exercise 31", description: "Diagonal multiplicity", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 31", content: "**Problem:** Let $A = PDP^{-1}$, where $P$ is orthogonal and $D$ is diagonal, and let $\\lambda$ be an eigenvalue of $A$ of multiplicity $k$. Then $\\lambda$ appears $k$ times on the diagonal of $D$. Explain why the dimension of the eigenspace for $\\lambda$ is $k$." },
        { id: "s1", type: "solution", title: "Solution", content: "Since $P$ is orthogonal, $A$ is orthogonally diagonalizable. By Theorem 2, $A$ is a symmetric matrix.\n\nThe Spectral Theorem (Theorem 3b) states that for a symmetric matrix, the dimension of the eigenspace for each eigenvalue $\\lambda$ exactly equals the multiplicity of $\\lambda$ as a root of the characteristic equation (which is $k$).\n\nTherefore, the eigenspace dimension is $k$." }
      ]
    },
    {
      id: "les-4-1-10-ex32", title: "Exercise 32", description: "Upper triangular symmetric matrix", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 32", content: "**Problem:** Suppose $A = PRP^{-1}$, where $P$ is orthogonal and $R$ is upper triangular. Show that if $A$ is symmetric, then $R$ is symmetric and hence is actually a diagonal matrix." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $R^T = R$.**", interactiveSteps: [
           { stepText: "We are given $A = PRP^{-1}$ and $P$ is orthogonal ($P^{-1} = P^T$). So $A = P R P^T$." },
           { stepText: "Take the transpose of $A$: $A^T = (P R P^T)^T = (P^T)^T R^T P^T = P R^T P^T$." },
           { prompt: "Since $A$ is symmetric, $A^T = A$. Equate the two expressions.", options: [{id:"A", text:"$P R^T P^T = P R P^T$", isCorrect:true, explanation:""}, {id:"B", text:"$R^T = R P$", isCorrect:false, explanation:""}], stepText: "$P R^T P^T = P R P^T$." },
           { stepText: "Multiply on the left by $P^{-1}$ (or $P^T$) and on the right by $(P^T)^{-1}$ (or $P$). This isolates the middle terms." },
           { stepText: "We get $R^T = R$. So $R$ is symmetric." },
           { stepText: "An upper triangular matrix that is symmetric must have zeros above the diagonal to match the zeros below the diagonal. Thus, $R$ is a diagonal matrix." }
        ]}
      ]
    },
    {
      id: "les-4-1-10-ex33", title: "Exercise 33", description: "Spectral Decomposition Ex 2", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 33", content: "**Problem:** Construct a spectral decomposition of $A$ from Example 2:\n$A = \\begin{bmatrix} 6 & -2 & -1 \\\\ -2 & 6 & -1 \\\\ -1 & -1 & 5 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: $A = 8\\mathbf{u}_1\\mathbf{u}_1^T + 6\\mathbf{u}_2\\mathbf{u}_2^T + 3\\mathbf{u}_3\\mathbf{u}_3^T$.**", interactiveSteps: [
           { stepText: "Recall eigenvectors from Ex 2:\n$\\mathbf{u}_1 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\\\ 0 \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{6} \\\\ -1/\\sqrt{6} \\\\ 2/\\sqrt{6} \\end{bmatrix}$, $\\mathbf{u}_3 = \\begin{bmatrix} 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\end{bmatrix}$." },
           { stepText: "Compute $\\mathbf{u}_1\\mathbf{u}_1^T = \\begin{bmatrix} 1/2 & -1/2 & 0 \\\\ -1/2 & 1/2 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$." },
           { stepText: "Compute $\\mathbf{u}_2\\mathbf{u}_2^T = \\begin{bmatrix} 1/6 & 1/6 & -2/6 \\\\ 1/6 & 1/6 & -2/6 \\\\ -2/6 & -2/6 & 4/6 \\end{bmatrix}$." },
           { stepText: "Compute $\\mathbf{u}_3\\mathbf{u}_3^T = \\begin{bmatrix} 1/3 & 1/3 & 1/3 \\\\ 1/3 & 1/3 & 1/3 \\\\ 1/3 & 1/3 & 1/3 \\end{bmatrix}$." },
           { stepText: "Spectral decomposition is $8(\\mathbf{u}_1\\mathbf{u}_1^T) + 6(\\mathbf{u}_2\\mathbf{u}_2^T) + 3(\\mathbf{u}_3\\mathbf{u}_3^T)$." }
        ]}
      ]
    },
    {
      id: "les-4-1-10-ex34", title: "Exercise 34", description: "Spectral Decomposition Ex 3", icon: "Split",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 34", content: "**Problem:** Construct a spectral decomposition of $A$ from Example 3:\n$A = \\begin{bmatrix} 3 & -2 & 4 \\\\ -2 & 6 & 2 \\\\ 4 & 2 & 3 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Solution", content: "Recall eigenvectors from Ex 3:\n$\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 0 \\\\ 1/\\sqrt{2} \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{18} \\\\ 4/\\sqrt{18} \\\\ 1/\\sqrt{18} \\end{bmatrix}$, $\\mathbf{u}_3 = \\begin{bmatrix} -2/3 \\\\ -1/3 \\\\ 2/3 \\end{bmatrix}$.\n\nThe eigenvalues are 7, 7, and -2.\n\nThe decomposition is $7(\\mathbf{u}_1\\mathbf{u}_1^T) + 7(\\mathbf{u}_2\\mathbf{u}_2^T) - 2(\\mathbf{u}_3\\mathbf{u}_3^T)$." }
      ]
    },
    {
      id: "les-4-1-10-ex35", title: "Exercise 35", description: "Projection Matrix Properties", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 35", content: "**Problem:** Let $\\mathbf{u}$ be a unit vector in $\\mathbb{R}^n$, and let $B = \\mathbf{u}\\mathbf{u}^T$.\n\na. Show that $B$ is a symmetric matrix and $B^2 = B$.\nb. Show that $\\mathbf{u}$ is an eigenvector of $B$. What is the corresponding eigenvalue?" },
        { id: "s1", type: "proof", title: "Part A", content: "Symmetry: $B^T = (\\mathbf{u}\\mathbf{u}^T)^T = (\\mathbf{u}^T)^T \\mathbf{u}^T = \\mathbf{u}\\mathbf{u}^T = B$.\n\nIdempotence: $B^2 = (\\mathbf{u}\\mathbf{u}^T)(\\mathbf{u}\\mathbf{u}^T) = \\mathbf{u}(\\mathbf{u}^T \\mathbf{u})\\mathbf{u}^T$.\nSince $\\mathbf{u}$ is a unit vector, the inner product $\\mathbf{u}^T \\mathbf{u} = 1$.\nThus $B^2 = \\mathbf{u}(1)\\mathbf{u}^T = \\mathbf{u}\\mathbf{u}^T = B$." },
        { id: "s2", type: "proof", title: "Part B", content: "Eigenvector check: $B\\mathbf{u} = (\\mathbf{u}\\mathbf{u}^T)\\mathbf{u} = \\mathbf{u}(\\mathbf{u}^T \\mathbf{u}) = \\mathbf{u}(1) = 1\\mathbf{u}$.\n\nThus, $\\mathbf{u}$ is an eigenvector of $B$ with eigenvalue $\\lambda = 1$." }
      ]
    },
    {
      id: "les-4-1-10-ex36", title: "Exercise 36", description: "Orthogonal Projection Matrix", icon: "ArrowDownCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 36", content: "**Problem:** Let $B$ be an $n \\times n$ symmetric matrix such that $B^2 = B$. Such a matrix is called a projection matrix. \nGiven any $\\mathbf{y}$ in $\\mathbb{R}^n$, let $\\hat{\\mathbf{y}} = B\\mathbf{y}$ and $\\mathbf{z} = \\mathbf{y} - \\hat{\\mathbf{y}}$.\n\na. Show that $\\mathbf{z}$ is orthogonal to $\\hat{\\mathbf{y}}$.\nb. Let $W$ be the column space of $B$. Show that $\\mathbf{y}$ is the sum of a vector in $W$ and a vector in $W^\\perp$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Compute $\\hat{\\mathbf{y}} \\cdot \\mathbf{z}$.**", interactiveSteps: [
           { stepText: "$\\hat{\\mathbf{y}} \\cdot \\mathbf{z} = \\hat{\\mathbf{y}}^T \\mathbf{z} = (B\\mathbf{y})^T (\\mathbf{y} - B\\mathbf{y})$." },
           { stepText: "Distribute the transpose: $\\mathbf{y}^T B^T (\\mathbf{y} - B\\mathbf{y})$." },
           { prompt: "Since $B$ is symmetric, what is $B^T$?", options: [{id:"A", text:"$B$", isCorrect:true, explanation:""}, {id:"B", text:"$I$", isCorrect:false, explanation:""}], stepText: "Substitute $B^T = B$: $\\mathbf{y}^T B (\\mathbf{y} - B\\mathbf{y})$." },
           { stepText: "Distribute $B$: $\\mathbf{y}^T (B\\mathbf{y} - B^2\\mathbf{y})$." },
           { stepText: "Since $B^2 = B$, this becomes $\\mathbf{y}^T (B\\mathbf{y} - B\\mathbf{y}) = \\mathbf{y}^T (\\mathbf{0}) = 0$." },
           { stepText: "Thus, $\\mathbf{z}$ is orthogonal to $\\hat{\\mathbf{y}}$. Part A proven." }
        ]},
        { id: "s2", type: "proof", title: "Part B", content: "We have $\\mathbf{y} = \\hat{\\mathbf{y}} + \\mathbf{z}$.\n$\\hat{\\mathbf{y}} = B\\mathbf{y}$, so it is a linear combination of the columns of $B$. Thus $\\hat{\\mathbf{y}} \\in W$.\n\nTo show $\\mathbf{z} \\in W^\\perp$, we must show $\\mathbf{z}$ is orthogonal to every vector in $W$. Any vector in $W$ is of the form $B\\mathbf{x}$.\n$\\mathbf{z} \\cdot (B\\mathbf{x}) = \\mathbf{z}^T B\\mathbf{x} = (\\mathbf{y} - B\\mathbf{y})^T B\\mathbf{x} = (\\mathbf{y}^T - \\mathbf{y}^T B^T) B\\mathbf{x}$.\nUsing $B^T=B$, this is $\\mathbf{y}^T B\\mathbf{x} - \\mathbf{y}^T B^2\\mathbf{x}$.\nSince $B^2=B$, it equals $\\mathbf{y}^T B\\mathbf{x} - \\mathbf{y}^T B\\mathbf{x} = 0$.\n\nThus $\\mathbf{z} \\in W^\\perp$." }
      ]
    },
    {
      id: "les-4-1-10-ex37-40", title: "Computer Exercises 37-40", description: "Matrix programs", icon: "Cpu",
      slides: [
        { id: "s0", type: "theory", title: "Exercises 37-40", content: "These exercises involve using a computer program (like MATLAB) to orthogonally diagonalize large matrices (e.g., $4 \\times 4$ and $5 \\times 5$). \n\nThe process is identical to what we've done:\n1. Find roots of the characteristic equation.\n2. Find basis for each null space $(A-\\lambda I)$.\n3. Apply Gram-Schmidt if multiplicity > 1.\n4. Normalize all vectors to form $P$.\n5. Form $D$ with eigenvalues." }
      ]
    }
  ]
};
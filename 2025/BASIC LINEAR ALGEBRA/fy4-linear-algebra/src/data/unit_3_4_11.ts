import { Unit } from '../types';

export const UNIT_3_4_11: Unit = {
  id: "unit-3-4-11",
  title: "Advanced QR and Gram-Schmidt",
  description: "Exercises 19-26: Proofs and applications of QR factorization.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-4-11-ex19", title: "Exercise 19", description: "Invertibility of R", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Suppose $A = QR$, where $Q$ is $m \\times n$ and $R$ is $n \\times n$. Show that if the columns of $A$ are linearly independent, then $R$ must be invertible.\n\n[Hint: Study the equation $R\\mathbf{x} = \\mathbf{0}$ and use the fact that $A = QR$.]" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show that $R\\mathbf{x} = \\mathbf{0}$ has only the trivial solution.**", interactiveSteps: [
           { stepText: "Suppose $R\\mathbf{x} = \\mathbf{0}$ for some $\\mathbf{x}$." },
           { prompt: "Multiply both sides by $Q$. What do you get?", options: [{id:"A", text:"$QR\\mathbf{x} = \\mathbf{0}$", isCorrect:true, explanation:"$Q\\mathbf{0} = \\mathbf{0}$."}, {id:"B", text:"$A\\mathbf{x} = R$", isCorrect:false, explanation:""}], stepText: "We get $QR\\mathbf{x} = \\mathbf{0}$." },
           { stepText: "Since $A = QR$, this means $A\\mathbf{x} = \\mathbf{0}$." },
           { stepText: "But the columns of $A$ are linearly independent! This implies that $A\\mathbf{x} = \\mathbf{0}$ has only the trivial solution $\\mathbf{x} = \\mathbf{0}$." },
           { stepText: "Thus, $R\\mathbf{x} = \\mathbf{0}$ implies $\\mathbf{x} = \\mathbf{0}$. Since $R$ is a square matrix, having only the trivial solution means $R$ is invertible." }
        ]}
      ]
    },
    {
      id: "les-3-4-11-ex20", title: "Exercise 20", description: "Column Space of Q", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Suppose $A = QR$, where $R$ is an invertible matrix. Show that $A$ and $Q$ have the same column space." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Show $\\text{Col } A \\subseteq \\text{Col } Q$ and $\\text{Col } Q \\subseteq \\text{Col } A$.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{y} \\in \\text{Col } A$. Then $\\mathbf{y} = A\\mathbf{x}$ for some $\\mathbf{x}$." },
           { stepText: "Since $A = QR$, $\\mathbf{y} = Q(R\\mathbf{x})$. This shows $\\mathbf{y}$ is a linear combination of the columns of $Q$ (with weights given by vector $R\\mathbf{x}$). Thus $\\text{Col } A \\subseteq \\text{Col } Q$." },
           { stepText: "Now let $\\mathbf{y} \\in \\text{Col } Q$. Then $\\mathbf{y} = Q\\mathbf{x}$ for some $\\mathbf{x}$." },
           { prompt: "Since $R$ is invertible, we can write $Q = A R^{-1}$. Substitute this into the equation.", options: [{id:"A", text:"$\\mathbf{y} = A(R^{-1}\\mathbf{x})$", isCorrect:true, explanation:""}, {id:"B", text:"$\\mathbf{y} = R(A^{-1}\\mathbf{x})$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} = A(R^{-1}\\mathbf{x})$." },
           { stepText: "This shows $\\mathbf{y}$ is a linear combination of the columns of $A$. Thus $\\text{Col } Q \\subseteq \\text{Col } A$." },
           { stepText: "Therefore, $\\text{Col } A = \\text{Col } Q$." }
        ]}
      ]
    },
    {
      id: "les-3-4-11-ex21", title: "Exercise 21", description: "Full QR Factorization", icon: "Grid",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 21 (Theory)", content: "Given $A = QR$ as in Theorem 12, describe how to find an orthogonal $m \\times m$ matrix $Q_1$ and an invertible $n \\times n$ upper triangular matrix $R$ such that\n$$ A = Q_1 \\begin{bmatrix} R \\\\ 0 \\end{bmatrix} $$\n(The MATLAB `qr` command supplies this \"full\" QR factorization)." },
        { id: "s1", type: "solution", title: "Explanation", content: "$Q$ is $m \\times n$. Its columns form an orthonormal basis for $\\text{Col } A$. Extend this basis to an orthonormal basis for all of $\\mathbb{R}^m$ by adding $m-n$ orthogonal unit vectors. Let $Q_1$ be the $m \\times m$ matrix of these vectors.\n\n$Q_1 = [Q \\ \\ Q_2]$.\n\nThen $Q_1 \\begin{bmatrix} R \\\\ 0 \\end{bmatrix} = [Q \\ \\ Q_2] \\begin{bmatrix} R \\\\ 0 \\end{bmatrix} = QR + Q_2 0 = QR = A$." }
      ]
    },
    {
      id: "les-3-4-11-ex22", title: "Exercise 22", description: "Projection is Linear", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** Let $\\mathbf{u}_1, \\dots, \\mathbf{u}_p$ be an orthogonal basis for a subspace $W$ of $\\mathbb{R}^n$, and let $T: \\mathbb{R}^n \\to \\mathbb{R}^n$ be defined by $T(\\mathbf{x}) = \\text{proj}_W \\mathbf{x}$. Show that $T$ is a linear transformation." },
        { id: "s1", type: "solution", title: "Solution", content: "We know $T(\\mathbf{x}) = \\sum \\frac{\\mathbf{x} \\cdot \\mathbf{u}_i}{\\mathbf{u}_i \\cdot \\mathbf{u}_i} \\mathbf{u}_i$.\n\n1. Additivity: $T(\\mathbf{x}+\\mathbf{y})$ involves $(\\mathbf{x}+\\mathbf{y}) \\cdot \\mathbf{u}_i = \\mathbf{x} \\cdot \\mathbf{u}_i + \\mathbf{y} \\cdot \\mathbf{u}_i$. Distributing the sum splits the projection into $T(\\mathbf{x}) + T(\\mathbf{y})$.\n2. Scalar multiplication: $T(c\\mathbf{x})$ involves $(c\\mathbf{x}) \\cdot \\mathbf{u}_i = c(\\mathbf{x} \\cdot \\mathbf{u}_i)$. The scalar $c$ factors out of the entire sum, giving $cT(\\mathbf{x})$.\n\nThus, $T$ is linear." }
      ]
    },
    {
      id: "les-3-4-11-ex23", title: "Exercise 23", description: "Partitioned QR", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Suppose $A=QR$ is a QR factorization of an $m \\times n$ matrix $A$. Partition $A$ as $[A_1 \\ A_2]$, where $A_1$ has $p$ columns. Show how to obtain a QR factorization of $A_1$." },
        { id: "s1", type: "solution", title: "Solution", content: "Partition $Q = [Q_1 \\ Q_2]$ where $Q_1$ has $p$ columns, and $R = \\begin{bmatrix} R_{11} & R_{12} \\\\ 0 & R_{22} \\end{bmatrix}$ where $R_{11}$ is $p \\times p$.\n\nThen $A = QR = [Q_1 \\ Q_2] \\begin{bmatrix} R_{11} & R_{12} \\\\ 0 & R_{22} \\end{bmatrix} = [Q_1 R_{11} \\ \\ Q_1 R_{12} + Q_2 R_{22}]$.\n\nSo $A_1 = Q_1 R_{11}$. Since $Q_1$ has orthonormal columns and $R_{11}$ is upper triangular with positive diagonals, this is a valid QR factorization for $A_1$." }
      ]
    },
    {
      id: "les-3-4-11-ex24", title: "Exercise 24", description: "Computer Algorithm 1", icon: "Cpu",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "Apply the Gram-Schmidt process to produce an orthogonal basis for the column space of the matrix:\n$$ A = \\begin{bmatrix} -10 & 13 & 7 & -11 \\\\ 2 & 1 & -5 & 3 \\\\ -6 & 3 & 13 & -3 \\\\ 16 & -16 & -2 & 5 \\\\ 2 & 1 & -5 & -7 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Note", content: "This is a large computation intended for a matrix program like MATLAB. The steps are identical to previous examples: $\\mathbf{v}_1 = \\mathbf{x}_1$, $\\mathbf{v}_2 = \\mathbf{x}_2 - \\text{proj}_{v1}\\mathbf{x}_2$, etc." }
      ]
    },
    {
      id: "les-3-4-11-ex25", title: "Exercise 25", description: "Computer Algorithm 2", icon: "Cpu",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "Use the method in this section to produce a QR factorization of the matrix in Exercise 24." },
        { id: "s1", type: "solution", title: "Note", content: "Normalize the orthogonal basis vectors found in Exercise 24 to form $Q$. Then compute $R = Q^T A$." }
      ]
    },
    {
      id: "les-3-4-11-ex26", title: "Exercise 26", description: "Modified Gram-Schmidt", icon: "Settings",
      slides: [
        { id: "s0", type: "theory", title: "Exercise 26 (Theory)", content: "For a matrix program, the Gram-Schmidt process works better with orthonormal vectors to reduce roundoff error. \n\nLet $\\mathbf{x}_1, \\dots, \\mathbf{x}_p$ be columns. Let $Q_k$ be the matrix whose columns form an orthonormal basis for the subspace $W_k$ spanned by the first $k$ columns of $A$.\n\nThe projection of $\\mathbf{x}_{k+1}$ onto $W_k$ is $Q_k Q_k^T \\mathbf{x}_{k+1}$.\nSo $\\mathbf{v}_{k+1} = \\mathbf{x}_{k+1} - Q_k(Q_k^T \\mathbf{x}_{k+1})$.\n\nNormalize $\\mathbf{v}_{k+1}$ to get $\\mathbf{u}_{k+1}$. The new $Q_{k+1}$ is $[Q_k \\ \\mathbf{u}_{k+1}]$." }
      ]
    }
  ]
};
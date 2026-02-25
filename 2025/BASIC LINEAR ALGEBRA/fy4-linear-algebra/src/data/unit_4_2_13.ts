import { Unit } from '../types';

export const UNIT_4_2_13: Unit = {
  id: "unit-4-2-13",
  title: "Advanced Algebraic Properties",
  description: "Exercises 23-28: Determinants, traces, and definiteness proofs.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-13-ex23", title: "Exercise 23", description: "Determinant and Trace relation", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** If $\\lambda_1$ and $\\lambda_2$ are the eigenvalues of a $2 \\times 2$ matrix $A$, then the characteristic polynomial can be written as $(\\lambda - \\lambda_1)(\\lambda - \\lambda_2)$. \n\nUse this to show that $\\lambda_1 + \\lambda_2 = a + d$ (the trace of A) and $\\lambda_1 \\lambda_2 = \\det A$." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Expand both forms of the polynomial.**", interactiveSteps: [
           { stepText: "Form 1: $\\det(A - \\lambda I) = \\det \\begin{bmatrix} a-\\lambda & b \\\\ c & d-\\lambda \\end{bmatrix} = (a-\\lambda)(d-\\lambda) - bc$." },
           { stepText: "Expand: $\\lambda^2 - (a+d)\\lambda + ad - bc$." },
           { stepText: "Note that $ad-bc = \\det A$." },
           { prompt: "Now expand Form 2: $(\\lambda - \\lambda_1)(\\lambda - \\lambda_2)$.", options: [{id:"A", text:"$\\lambda^2 - (\\lambda_1+\\lambda_2)\\lambda + \\lambda_1\\lambda_2$", isCorrect:true, explanation:""}, {id:"B", text:"$\\lambda^2 + \\lambda_1\\lambda_2$", isCorrect:false, explanation:""}], stepText: "Form 2: $\\lambda^2 - (\\lambda_1+\\lambda_2)\\lambda + \\lambda_1\\lambda_2$." },
           { stepText: "Since these polynomials must be identical, their coefficients must match." },
           { stepText: "Matching the $\\lambda$ coefficient: $-(a+d) = -(\\lambda_1+\\lambda_2) \\implies \\lambda_1+\\lambda_2 = a+d$." },
           { stepText: "Matching the constant term: $ad-bc = \\lambda_1\\lambda_2 \\implies \\det A = \\lambda_1\\lambda_2$. Q.E.D." }
        ]}
      ]
    },
    {
      id: "les-4-2-13-ex24", title: "Exercise 24", description: "2x2 Definiteness Test", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Let $A = \\begin{bmatrix} a & b \\\\ b & d \\end{bmatrix}$ be a symmetric $2 \\times 2$ matrix. Verify the following statements using the result from Ex 23:\n\na. $Q$ is positive definite if $\\det A > 0$ and $a > 0$.\nb. $Q$ is negative definite if $\\det A > 0$ and $a < 0$.\nc. $Q$ is indefinite if $\\det A < 0$." },
        { id: "s1", type: "solution", title: "Proof of (c)", content: "**Indefinite (c):**\nIf $\\det A < 0$, then $\\lambda_1 \\lambda_2 < 0$. \nThe product of two numbers is negative if and only if one is positive and the other is negative.\nThus $A$ has both positive and negative eigenvalues, meaning $Q$ is indefinite." },
        { id: "s2", type: "solution", title: "Proof of (a)", content: "**Positive Definite (a):**\nIf $\\det A > 0$, then $\\lambda_1 \\lambda_2 > 0$. Both eigenvalues must have the same sign (both + or both -).\nSince $A$ is symmetric, $\\det A = ad - b^2 > 0$. This forces $ad > b^2 \\ge 0$, so $a$ and $d$ must have the same sign.\nIf $a > 0$, then $d > 0$, so Trace $= a+d > 0$.\nSince $\\lambda_1 + \\lambda_2 = \\text{Trace} > 0$, and they have the same sign, they must both be positive.\nThus $Q$ is positive definite." }
      ]
    },
    {
      id: "les-4-2-13-ex25", title: "Exercise 25", description: "B^T B is positive semidefinite", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 25", content: "**Problem:** Show that if $B$ is $m \\times n$, then $B^T B$ is positive semidefinite; and if $B$ is $n \\times n$ and invertible, then $B^T B$ is positive definite." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Evaluate $\\mathbf{x}^T (B^T B) \\mathbf{x}$.**", interactiveSteps: [
           { stepText: "Let $Q(\\mathbf{x}) = \\mathbf{x}^T (B^T B) \\mathbf{x}$." },
           { prompt: "How can we regroup this using matrix multiplication properties?", options: [{id:"A", text:"$(B\\mathbf{x})^T (B\\mathbf{x})$", isCorrect:true, explanation:"$\\mathbf{x}^T B^T = (B\\mathbf{x})^T$."}, {id:"B", text:"$B^T (\\mathbf{x}^T B \\mathbf{x})$", isCorrect:false, explanation:""}], stepText: "We have $(B\\mathbf{x})^T (B\\mathbf{x})$." },
           { stepText: "This is exactly the dot product of $B\\mathbf{x}$ with itself, which is $\\|B\\mathbf{x}\\|^2$." },
           { stepText: "Since the squared length of any vector is always $\\ge 0$, $\\|B\\mathbf{x}\\|^2 \\ge 0$ for all $\\mathbf{x}$. Thus $B^T B$ is positive semidefinite." },
           { stepText: "If $B$ is invertible, then $B\\mathbf{x} = \\mathbf{0}$ only when $\\mathbf{x} = \\mathbf{0}$. Therefore $\\|B\\mathbf{x}\\|^2 > 0$ strictly for all $\\mathbf{x} \\neq \\mathbf{0}$. Thus $B^T B$ is positive definite." }
        ]}
      ]
    },
    {
      id: "les-4-2-13-ex26", title: "Exercise 26", description: "Cholesky Factorization Preview", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 26", content: "**Problem:** Show that if an $n \\times n$ matrix $A$ is positive definite, then there exists a positive definite matrix $B$ such that $A = B^T B$." },
        { id: "s1", type: "solution", title: "Proof Sketch", content: "Since $A$ is positive definite, it is symmetric and all its eigenvalues $\\lambda_i$ are strictly positive.\n\nWe can orthogonally diagonalize $A = P D P^T$.\n\nLet $C$ be a diagonal matrix whose entries are $\\sqrt{\\lambda_i}$. Then $C$ is also positive definite, symmetric, and $C^2 = D$.\n\nThen $A = P C^2 P^T = P C C P^T$. \nSince $C$ is diagonal, $C = C^T$. Also $P^T$ is the transpose of $P$.\nSo $A = (P C)^T (C P^T) = (C P^T)^T (C P^T)$.\nLet $B = C P^T$. Then $A = B^T B$. \n(With some more work, one can show $B$ can be made positive definite)." }
      ]
    },
    {
      id: "les-4-2-13-ex27", title: "Exercise 27", description: "Sum of positive definite matrices", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Let $A$ and $B$ be symmetric $n \\times n$ matrices whose eigenvalues are all positive. Show that the eigenvalues of $A + B$ are all positive." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use the definition of positive definite quadratic forms.**", interactiveSteps: [
           { stepText: "Since $A$ and $B$ have positive eigenvalues, Theorem 5 says their quadratic forms are positive definite. That is, $\\mathbf{x}^T A \\mathbf{x} > 0$ and $\\mathbf{x}^T B \\mathbf{x} > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$." },
           { prompt: "We want to evaluate the form for $A+B$. What is $\\mathbf{x}^T (A+B) \\mathbf{x}$?", options: [{id:"A", text:"$\\mathbf{x}^T A \\mathbf{x} + \\mathbf{x}^T B \\mathbf{x}$", isCorrect:true, explanation:"Distribute the x vectors."}, {id:"B", text:"$\\mathbf{x}^T A B \\mathbf{x}$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{x}^T (A+B) \\mathbf{x} = \\mathbf{x}^T A \\mathbf{x} + \\mathbf{x}^T B \\mathbf{x}$." },
           { stepText: "Since both terms on the right are strictly positive for $\\mathbf{x} \\neq \\mathbf{0}$, their sum must be strictly positive." },
           { stepText: "Thus, the quadratic form for $A+B$ is positive definite. By Theorem 5 again, all eigenvalues of $A+B$ must be positive." }
        ]}
      ]
    },
    {
      id: "les-4-2-13-ex28", title: "Exercise 28", description: "Inverse of positive definite matrix", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Let $A$ be an $n \\times n$ invertible symmetric matrix. Show that if the quadratic form $\\mathbf{x}^T A \\mathbf{x}$ is positive definite, then so is the quadratic form $\\mathbf{x}^T A^{-1} \\mathbf{x}$." },
        { id: "s1", type: "solution", title: "Solution", content: "By Theorem 5, $\\mathbf{x}^T A \\mathbf{x}$ is positive definite if and only if all eigenvalues of $A$ are positive.\n\nFrom Chapter 5, if $\\lambda$ is an eigenvalue of $A$, then $1/\\lambda$ is an eigenvalue of $A^{-1}$.\n\nIf all $\\lambda > 0$, then all $1/\\lambda > 0$. \n\nSince all eigenvalues of $A^{-1}$ are positive, the quadratic form $\\mathbf{x}^T A^{-1} \\mathbf{x}$ is positive definite." }
      ]
    }
  ]
};
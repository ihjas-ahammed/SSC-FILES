import { Unit } from '../types';

export const UNIT_4_2_6: Unit = {
  id: "unit-4-2-6",
  title: "Classifying Quadratic Forms",
  description: "Definition 2, Theorem 5, and Example 6 on Positive Definiteness.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-6-d2", title: "Definition: Definiteness", description: "Positive, Negative, Indefinite", icon: "TrendingUp",
      slides: [
        { id: "s0", type: "theory", title: "Classifying Quadratic Forms", content: "A quadratic form $Q$ is:\n\na. **positive definite** if $Q(\\mathbf{x}) > 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$,\nb. **negative definite** if $Q(\\mathbf{x}) < 0$ for all $\\mathbf{x} \\neq \\mathbf{0}$,\nc. **indefinite** if $Q(\\mathbf{x})$ assumes both positive and negative values." },
        { id: "s1", type: "theory", title: "Semidefinite", content: "Also, $Q$ is said to be **positive semidefinite** if $Q(\\mathbf{x}) \\ge 0$ for all $\\mathbf{x}$, and to be **negative semidefinite** if $Q(\\mathbf{x}) \\le 0$ for all $\\mathbf{x}$.\n\n(Every positive definite form is also positive semidefinite, but not vice versa)." },
        { id: "s2", type: "quiz", title: "Concept Check", content: "What is the geometric shape of the graph $z = Q(\\mathbf{x})$ if $Q$ is positive definite on $\\mathbb{R}^2$?", options: [{id:"A", text:"A bowl opening upwards.", isCorrect:true, explanation:"Since the value is always positive for non-zero x, it curves upwards from the origin."}, {id:"B", text:"A saddle shape.", isCorrect:false, explanation:"A saddle implies it goes up in one direction and down in another, which is 'indefinite'."}] }
      ]
    },
    {
      id: "les-4-2-6-t5", title: "Theorem 5: Eigenvalue Test", description: "Connecting eigenvalues to definiteness", icon: "ShieldCheck",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 5", content: "**Theorem 5: Quadratic Forms and Eigenvalues**\n\nLet $A$ be an $n \\times n$ symmetric matrix. Then a quadratic form $\\mathbf{x}^T A \\mathbf{x}$ is:\n\na. positive definite if and only if the eigenvalues of $A$ are **all positive**,\nb. negative definite if and only if the eigenvalues of $A$ are **all negative**, or\nc. indefinite if and only if $A$ has **both positive and negative** eigenvalues." },
        { id: "s1", type: "proof", title: "Proof Sketch", content: "By the Principal Axes Theorem, there exists an orthogonal change of variable $\\mathbf{x} = P\\mathbf{y}$ such that\n$$ Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x} = \\mathbf{y}^T D \\mathbf{y} = \\lambda_1 y_1^2 + \\lambda_2 y_2^2 + \\dots + \\lambda_n y_n^2 $$\n\nSince $y_i^2$ are always positive (or zero), the sign of the entire sum is completely dictated by the signs of the eigenvalues $\\lambda_i$.\nIf all $\\lambda_i > 0$, the sum is strictly $> 0$ for $\\mathbf{y} \\neq \\mathbf{0}$. If mixed, you can choose $\\mathbf{y}$ to make it positive or negative.", interactiveSteps: [] },
        { id: "s2", type: "quiz", title: "Semidefinite Test", content: "Based on Theorem 5, what must be true about the eigenvalues for a matrix to be positive *semidefinite*?", options: [{id:"A", text:"All eigenvalues must be $\\ge 0$.", isCorrect:true, explanation:"Zero eigenvalues allow the quadratic form to equal zero even when x is not zero."}, {id:"B", text:"All eigenvalues must be positive.", isCorrect:false, explanation:"That restricts it to positive definite."}] }
      ]
    },
    {
      id: "les-4-2-6-e6", title: "Example 6: Classification", description: "Testing a 3x3 matrix", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Problem:** Is $Q(\\mathbf{x}) = 3x_1^2 + 2x_2^2 + x_3^2 + 4x_1 x_2 + 4x_2 x_3$ positive definite?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Examine the matrix of the form and its eigenvalues.**", interactiveSteps: [
           { stepText: "Because of all the plus signs, this form \"looks\" positive definite. Let's check." },
           { stepText: "The symmetric matrix for this form is $A = \\begin{bmatrix} 3 & 2 & 0 \\\\ 2 & 2 & 2 \\\\ 0 & 2 & 1 \\end{bmatrix}$." },
           { stepText: "Calculating the eigenvalues of $A$ yields $5, 2,$ and $-1$." },
           { prompt: "Based on these eigenvalues, what is the classification of $Q$?", options: [{id:"A", text:"Indefinite", isCorrect:true, explanation:"It has both positive (5, 2) and negative (-1) eigenvalues."}, {id:"B", text:"Positive definite", isCorrect:false, explanation:"There is a negative eigenvalue."}], stepText: "Since there is a negative eigenvalue, $Q$ is an **indefinite** quadratic form, not positive definite." }
        ]},
        { id: "s2", type: "numerical", title: "Trace check", content: "What is the sum of the eigenvalues (which equals the trace of the matrix)?", numericAnswer: 6, numericTolerance: 0 }
      ]
    }
  ]
};
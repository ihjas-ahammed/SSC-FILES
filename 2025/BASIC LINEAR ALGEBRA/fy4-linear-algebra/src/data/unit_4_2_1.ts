import { Unit } from '../types';

export const UNIT_4_2_1: Unit = {
  id: "unit-4-2-1",
  title: "Definition of Quadratic Forms",
  description: "Defining a quadratic form and expanding it into algebraic expressions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-1-d1", title: "Definition 1: Quadratic Forms", description: "What is a quadratic form?", icon: "FunctionSquare",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Recall the dot product $\\mathbf{x} \\cdot \\mathbf{x}$. What kind of algebraic expression does it produce in $\\mathbb{R}^n$?", options: [{id:"A", text:"A sum of squares: $x_1^2 + x_2^2 + \\dots + x_n^2$", isCorrect:true, explanation:"This is a simple quadratic expression!"}, {id:"B", text:"A linear sum: $x_1 + x_2 + \\dots + x_n$", isCorrect:false, explanation:"The dot product multiplies corresponding terms."}] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If we insert a matrix $A$ in the middle, computing $\\mathbf{x}^T A \\mathbf{x}$, what type of result will we get?", options: [{id:"A", text:"A vector", isCorrect:false, explanation:"$\\mathbf{x}^T$ is $1 \\times n$, $A$ is $n \\times n$, and $\\mathbf{x}$ is $n \\times 1$. The result is $1 \\times 1$."}, {id:"B", text:"A single scalar value", isCorrect:true, explanation:"The product of these three matrices yields a $1 \\times 1$ matrix, which is a scalar."}] },
        { id: "s2", type: "theory", title: "Definition: Quadratic Form", content: "A **quadratic form** on $\\mathbb{R}^n$ is a function $Q$ defined on $\\mathbb{R}^n$ whose value at a vector $\\mathbf{x}$ can be computed by an expression of the form:\n\n$$ Q(\\mathbf{x}) = \\mathbf{x}^T A \\mathbf{x} $$\n\nwhere $A$ is an $n \\times n$ **symmetric matrix**. The matrix $A$ is called the **matrix of the quadratic form**.\n\nThe simplest example is when $A=I$, yielding $Q(\\mathbf{x}) = \\mathbf{x}^T I \\mathbf{x} = \\|\\mathbf{x}\\|^2$." },
        { id: "s3", type: "numerical", title: "Check Dimensions", content: "If $\\mathbf{x}$ is in $\\mathbb{R}^4$, how many rows does the matrix $A$ of the quadratic form have?", numericAnswer: 4, numericTolerance: 0 },
        { id: "s4", type: "fill_in_blank", title: "Key Requirement", content: "By definition, the matrix $A$ that defines a quadratic form must always be a ___ matrix.", blankAnswer: "symmetric" }
      ]
    },
    {
      id: "les-4-2-1-e1", title: "Example 1: Expanding x^T A x", description: "Computing the polynomial form", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Let $\\mathbf{x} = \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$. Compute $\\mathbf{x}^T A \\mathbf{x}$ for the following matrices:\n\na. $A = \\begin{bmatrix} 4 & 0 \\\\ 0 & 3 \\end{bmatrix}$\nb. $A = \\begin{bmatrix} 3 & -2 \\\\ -2 & 7 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution: Part A", content: "**Goal: Compute $[x_1 \\ x_2] \\begin{bmatrix} 4 & 0 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix}$.**", interactiveSteps: [
           { stepText: "First, multiply the matrix $A$ by $\\mathbf{x}$: $\\begin{bmatrix} 4 & 0 \\\\ 0 & 3 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 4x_1 \\\\ 3x_2 \\end{bmatrix}$." },
           { prompt: "Now compute the dot product $\\mathbf{x}^T (A\\mathbf{x})$. What is the result?", options: [{id:"A", text:"$4x_1^2 + 3x_2^2$", isCorrect:true, explanation:"$[x_1, x_2] \\cdot [4x_1, 3x_2]^T = x_1(4x_1) + x_2(3x_2)$."}, {id:"B", text:"$4x_1 + 3x_2$", isCorrect:false, explanation:""}], stepText: "Result for (a): $4x_1^2 + 3x_2^2$." }
        ]},
        { id: "s2", type: "solution", title: "Interactive Solution: Part B", content: "**Goal: Expand with cross-terms.**", interactiveSteps: [
           { stepText: "First, compute $A\\mathbf{x}$: $\\begin{bmatrix} 3 & -2 \\\\ -2 & 7 \\end{bmatrix} \\begin{bmatrix} x_1 \\\\ x_2 \\end{bmatrix} = \\begin{bmatrix} 3x_1 - 2x_2 \\\\ -2x_1 + 7x_2 \\end{bmatrix}$." },
           { stepText: "Now compute $\\mathbf{x}^T (A\\mathbf{x}) = x_1(3x_1 - 2x_2) + x_2(-2x_1 + 7x_2)$." },
           { prompt: "Distribute and combine like terms. What is the final coefficient of the $x_1 x_2$ term?", options: [{id:"A", text:"-4", isCorrect:true, explanation:"$-2x_1 x_2 - 2x_2 x_1 = -4x_1 x_2$."}, {id:"B", text:"-2", isCorrect:false, explanation:""}], stepText: "Result for (b): $3x_1^2 - 4x_1 x_2 + 7x_2^2$." }
        ]},
        { id: "s3", type: "theory", title: "Observation", content: "Notice that the off-diagonal entries in $A$ combine to form the cross-product term. \nIn general, for a symmetric $2 \\times 2$ matrix $A$, the term $x_1 x_2$ has a coefficient of exactly **$2 \\times A_{12}$**.\n\nThe presence of $-4x_1 x_2$ in (b) is directly due to the $-2$ entries off the diagonal." }
      ]
    }
  ]
};
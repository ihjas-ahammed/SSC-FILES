import { Unit } from '../types';

export const UNIT_4_3_9: Unit = {
  id: "unit-4-3-9",
  title: "Theory and Proofs",
  description: "Exercises 12-17: Proving bounds and properties.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-9-ex12", title: "Exercise 12", description: "Bounding eigenvalues", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Let $\\lambda$ be any eigenvalue of a symmetric matrix $A$. Justify the statement that $m \\le \\lambda \\le M$, where $m$ and $M$ are the min and max of $Q(\\mathbf{x})$ on the unit sphere." },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Use definition of eigenvalue.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{u}$ be a unit eigenvector for $\\lambda$. So $A\\mathbf{u} = \\lambda\\mathbf{u}$ and $\\|\\mathbf{u}\\|=1$." },
           { prompt: "What is the value of the quadratic form $Q(\\mathbf{u})$?", options: [{id:"A", text:"$\\lambda$", isCorrect:true, explanation:"$\\mathbf{u}^T A \\mathbf{u} = \\mathbf{u}^T (\\lambda \\mathbf{u}) = \\lambda \\mathbf{u}^T \\mathbf{u} = \\lambda(1)$."}, {id:"B", text:"$\\lambda^2$", isCorrect:false, explanation:""}], stepText: "$Q(\\mathbf{u}) = \\lambda$." },
           { stepText: "Since $m$ is the minimum of $Q$ over all unit vectors and $M$ is the maximum, and $\\mathbf{u}$ is a unit vector, we must have $m \\le Q(\\mathbf{u}) \\le M$." },
           { stepText: "Thus $m \\le \\lambda \\le M$." }
        ]}
      ]
    },
    {
      id: "les-4-3-9-ex13", title: "Exercise 13", description: "Bounded Form", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Let $A$ be an $n \\times n$ symmetric matrix. Let $M$ and $m$ be the max and min eigenvalues. Show that for *any* $\\mathbf{x} \\neq \\mathbf{0}$:\n$$ m \\|\\mathbf{x}\\|^2 \\le \\mathbf{x}^T A \\mathbf{x} \\le M \\|\\mathbf{x}\\|^2 $$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Scale to unit vector.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{u} = \\frac{\\mathbf{x}}{\\|\\mathbf{x}\\|}$. Then $\\mathbf{u}$ is a unit vector." },
           { stepText: "By Theorem 6, $m \\le \\mathbf{u}^T A \\mathbf{u} \\le M$." },
           { prompt: "Substitute $\\mathbf{u} = \\mathbf{x}/\\|\\mathbf{x}\\|$ into the inequality. What is the middle term?", options: [{id:"A", text:"$\\frac{\\mathbf{x}^T A \\mathbf{x}}{\\|\\mathbf{x}\\|^2}$", isCorrect:true, explanation:"The scalar $1/\\|\\mathbf{x}\\|$ is pulled out twice (once from transpose, once from vector)."}, {id:"B", text:"$\\frac{\\mathbf{x}^T A \\mathbf{x}}{\\|\\mathbf{x}\\|}$", isCorrect:false, explanation:""}], stepText: "$m \\le \\frac{\\mathbf{x}^T A \\mathbf{x}}{\\|\\mathbf{x}\\|^2} \\le M$." },
           { stepText: "Multiply through by $\\|\\mathbf{x}\\|^2$ (which is positive) to get the result." }
        ]}
      ]
    },
    {
      id: "les-4-3-9-ex14", title: "Exercise 14", description: "Applying Ex 13", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Given that the eigenvalues of $A$ are 9 and 4, find the max value of $\\mathbf{x}^T A \\mathbf{x}$ if $\\|\\mathbf{x}\\| = 2$." },
        { id: "s1", type: "solution", title: "Solution", content: "Using the inequality from Ex 13: $\\mathbf{x}^T A \\mathbf{x} \\le M \\|\\mathbf{x}\\|^2$.\n\nHere $M = 9$ and $\\|\\mathbf{x}\\|^2 = 2^2 = 4$.\n\nMax value = $9(4) = 36$." }
      ]
    },
    {
      id: "les-4-3-9-ex15", title: "Exercise 15", description: "Applying Ex 13", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Given eigenvalues 9 and 4, what is the max value of $\\mathbf{x}^T A \\mathbf{x}$ if $x_1^2 + x_2^2 = 1$?" },
        { id: "s1", type: "solution", title: "Solution", content: "This is just the standard problem with unit vector constraint.\n\nMax value = $M = 9$." }
      ]
    },
    {
      id: "les-4-3-9-ex16", title: "Exercise 16", description: "General Eigenvalues", icon: "List",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** If $A$ has eigenvalues $5, 2, -1$, find the max value of $\\mathbf{x}^T A \\mathbf{x}$ for $\\|\\mathbf{x}\\|=1$." },
        { id: "s1", type: "solution", title: "Solution", content: "Max eigenvalue = 5.\n\nMax value = 5." }
      ]
    },
    {
      id: "les-4-3-9-ex17", title: "Exercise 17", description: "General Eigenvalues with constraint", icon: "Filter",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** If eigenvalues are $5, 2, -1$ and we constrain $\\mathbf{x}$ to be orthogonal to the eigenvector of 5, what is the max value?" },
        { id: "s1", type: "solution", title: "Solution", content: "By Theorem 7, it is the second largest eigenvalue.\n\nMax value = 2." }
      ]
    }
  ]
};
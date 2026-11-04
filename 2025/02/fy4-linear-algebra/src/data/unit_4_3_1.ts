import { Unit } from '../types';

export const UNIT_4_3_1: Unit = {
  id: "unit-4-3-1",
  title: "Constrained Optimization Introduction",
  description: "Example 1: Finding maximum and minimum values of a quadratic form.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-1-e1", title: "Example 1", description: "Finding max/min on the unit sphere", icon: "Target",
      slides: [
        { id: "s0", type: "theory", title: "Constrained Optimization", content: "In many applications (like engineering, statistics, and physics), we need to find the maximum or minimum value of a quadratic form $Q(\\mathbf{x})$ for $\\mathbf{x}$ in some specified set.\n\nTypically, the problem is arranged so that $\\mathbf{x}$ varies over the set of all **unit vectors**. This is an elegant *constrained optimization problem*.\n\nThe requirement that $\\mathbf{x}$ be a unit vector can be stated as:\n$$ \\|\\mathbf{x}\\| = 1, \\quad \\|\\mathbf{x}\\|^2 = 1, \\quad \\mathbf{x}^T\\mathbf{x} = 1 $$\nor\n$$ x_1^2 + x_2^2 + \\dots + x_n^2 = 1 $$" },
        { id: "s1", type: "example_q", title: "Example 1", content: "**Problem:** Find the maximum and minimum values of $Q(\\mathbf{x}) = 9x_1^2 + 4x_2^2 + 3x_3^2$ subject to the constraint $\\mathbf{x}^T\\mathbf{x} = 1$." },
        { id: "s2", type: "solution", title: "Interactive Solution", content: "**Goal: Bound the function from above and below.**", interactiveSteps: [
           { stepText: "Since $x_1^2, x_2^2$, and $x_3^2$ are non-negative, note that:\n$4x_2^2 \\le 9x_2^2$ and $3x_3^2 \\le 9x_3^2$." },
           { prompt: "Substitute these bounds into $Q(\\mathbf{x})$. What does $Q(\\mathbf{x})$ become less than or equal to?", options: [{id:"A", text:"$9x_1^2 + 9x_2^2 + 9x_3^2$", isCorrect:true, explanation:""}, {id:"B", text:"$9x_1^2 + 4x_2^2 + 3x_3^2$", isCorrect:false, explanation:""}], stepText: "$Q(\\mathbf{x}) \\le 9x_1^2 + 9x_2^2 + 9x_3^2 = 9(x_1^2 + x_2^2 + x_3^2)$." },
           { stepText: "Because of the constraint $\\mathbf{x}^T\\mathbf{x} = 1$, we know $x_1^2 + x_2^2 + x_3^2 = 1$." },
           { stepText: "Therefore, $Q(\\mathbf{x}) \\le 9(1) = 9$. The maximum value cannot exceed 9." },
           { prompt: "Can we find a specific vector $\\mathbf{x}$ that makes $Q(\\mathbf{x}) = 9$ exactly?", options: [{id:"A", text:"$\\mathbf{x} = (1, 0, 0)$", isCorrect:true, explanation:"$9(1)^2 + 4(0)^2 + 3(0)^2 = 9$."}, {id:"B", text:"$\\mathbf{x} = (0, 1, 0)$", isCorrect:false, explanation:""}], stepText: "By setting $x_1 = 1, x_2 = 0, x_3 = 0$, we get $Q(\\mathbf{x}) = 9$. Thus the maximum is exactly 9." },
           { stepText: "By similar logic, $Q(\\mathbf{x}) \\ge 3x_1^2 + 3x_2^2 + 3x_3^2 = 3(1) = 3$. Setting $\\mathbf{x} = (0, 0, 1)$ gives exactly 3. Thus the minimum is 3." }
        ]},
        { id: "s3", type: "quiz", title: "Connection to Matrices", content: "What are the numbers 9, 4, and 3 in relation to the matrix $A$ of this quadratic form?", options: [{id:"A", text:"They are the eigenvalues of A.", isCorrect:true, explanation:"Since there are no cross-terms, A is diagonal: diag(9, 4, 3). The entries on the diagonal are the eigenvalues!"}, {id:"B", text:"They are just random constants.", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
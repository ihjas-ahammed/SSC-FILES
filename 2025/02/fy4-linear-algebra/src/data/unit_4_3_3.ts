import { Unit } from '../types';

export const UNIT_4_3_3: Unit = {
  id: "unit-4-3-3",
  title: "Finding the Maximum",
  description: "Example 3 and Theorem 7: Applying Theorem 6 to a full matrix and introducing orthogonal constraints.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-3-e3", title: "Example 3: Applying Theorem 6", description: "Finding max for a 3x3 matrix", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 3", content: "**Problem:** Let $A = \\begin{bmatrix} 3 & 2 & 1 \\\\ 2 & 3 & 1 \\\\ 1 & 1 & 4 \\end{bmatrix}$.\n\nFind the maximum value of the quadratic form $\\mathbf{x}^T A \\mathbf{x}$ subject to the constraint $\\mathbf{x}^T\\mathbf{x} = 1$, and find a unit vector at which this maximum value is attained." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the largest eigenvalue and its eigenvector.**", interactiveSteps: [
           { stepText: "By Theorem 6, the maximum value is the greatest eigenvalue of $A$." },
           { stepText: "The characteristic equation is $0 = -\\lambda^3 + 10\\lambda^2 - 27\\lambda + 18 = -(\\lambda-6)(\\lambda-3)(\\lambda-1)$." },
           { prompt: "What is the maximum value?", options: [{id:"A", text:"6", isCorrect:true, explanation:"6 is the largest root."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "The maximum value is 6." },
           { stepText: "The maximum is attained at a unit eigenvector corresponding to $\\lambda = 6$." },
           { stepText: "Solve $(A - 6I)\\mathbf{x} = \\mathbf{0}$ to find an eigenvector. $A - 6I = \\begin{bmatrix} -3 & 2 & 1 \\\\ 2 & -3 & 1 \\\\ 1 & 1 & -2 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 0 \\end{bmatrix}$." },
           { prompt: "What is a basis vector for this eigenspace?", options: [{id:"A", text:"$[1, 1, 1]^T$", isCorrect:true, explanation:"$x_1=x_3, x_2=x_3$. Let $x_3=1$."}, {id:"B", text:"$[-1, 1, 0]^T$", isCorrect:false, explanation:""}], stepText: "An eigenvector is $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Normalize it to get the unit vector: $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-3-3-t7", title: "Theorem 7: Second Largest", description: "Adding an orthogonal constraint", icon: "Shield",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 7", content: "Let $A$, $\\lambda_1$, and $\\mathbf{u}_1$ be as in Theorem 6. Then the maximum value of $\\mathbf{x}^T A \\mathbf{x}$ subject to the constraints\n$$ \\mathbf{x}^T\\mathbf{x} = 1, \\quad \\mathbf{x}^T\\mathbf{u}_1 = 0 $$\nis the **second greatest eigenvalue**, $\\lambda_2$, and this maximum is attained when $\\mathbf{x}$ is an eigenvector $\\mathbf{u}_2$ corresponding to $\\lambda_2$." },
        { id: "s1", type: "quiz", title: "Geometric Meaning", content: "What does the constraint $\\mathbf{x}^T\\mathbf{u}_1 = 0$ mean geometrically?", options: [{id:"A", text:"x must be orthogonal to the first eigenvector u1.", isCorrect:true, explanation:"It forces the search for the next maximum into a subspace perpendicular to the first principal axis."}, {id:"B", text:"x must be the zero vector.", isCorrect:false, explanation:""}] }
      ]
    }
  ]
};
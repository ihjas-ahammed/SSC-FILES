import { Unit } from '../types';

export const UNIT_4_3_5: Unit = {
  id: "unit-4-3-5",
  title: "Theorem 8 and Applications",
  description: "Theorem 8 and Example 6: Generalizing constraints and a real-world optimization problem.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-3-5-t8", title: "Theorem 8: General Constraints", description: "Continuing down the eigenvalues", icon: "Layers",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 8", content: "Let $A$ be a symmetric $n \\times n$ matrix with an orthogonal diagonalization $A = P D P^{-1}$, where the entries on the diagonal of $D$ are arranged so that $\\lambda_1 \\ge \\lambda_2 \\ge \\dots \\ge \\lambda_n$ and where the columns of $P$ are corresponding unit eigenvectors $\\mathbf{u}_1, \\dots, \\mathbf{u}_n$.\n\nThen for $k = 2, \\dots, n$, the maximum value of $\\mathbf{x}^T A \\mathbf{x}$ subject to the constraints\n$$ \\mathbf{x}^T\\mathbf{x} = 1, \\quad \\mathbf{x}^T\\mathbf{u}_1 = 0, \\dots, \\mathbf{x}^T\\mathbf{u}_{k-1} = 0 $$\nis the eigenvalue $\\lambda_k$, and this maximum is attained at $\\mathbf{x} = \\mathbf{u}_k$." },
        { id: "s1", type: "quiz", title: "Understanding the pattern", content: "If you want to find the 4th largest eigenvalue's value, how many orthogonality constraints must you impose?", options: [{id:"A", text:"3", isCorrect:true, explanation:"You must be orthogonal to u1, u2, and u3."}, {id:"B", text:"4", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-4-3-5-e6", title: "Example 6: Resource Allocation", description: "An applied optimization problem", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Problem:** A county government must decide how to allocate its resources between road repair ($x$) and park recreation ($y$). They must satisfy a constraint $4x^2 + 9y^2 \\le 36$.\n\nEconomists measure the 'utility' of the allocation using the function $q(x,y) = xy$. Find the public works schedule that maximizes utility $q$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Transform into a standard quadratic form problem.**", interactiveSteps: [
           { stepText: "The constraint is $4x^2 + 9y^2 = 36$. Divide by 36: $(x/3)^2 + (y/2)^2 = 1$." },
           { prompt: "What change of variable makes this look like $x_1^2 + x_2^2 = 1$?", options: [{id:"A", text:"$x_1 = x/3, x_2 = y/2$", isCorrect:true, explanation:"Then $x = 3x_1$ and $y = 2x_2$."}, {id:"B", text:"$x_1 = 4x, x_2 = 9y$", isCorrect:false, explanation:""}], stepText: "Let $x_1 = x/3$ and $x_2 = y/2$." },
           { stepText: "Substitute into utility: $q(x,y) = (3x_1)(2x_2) = 6x_1 x_2$. This is our quadratic form $Q(\\mathbf{x})$!" },
           { stepText: "The matrix for $6x_1 x_2$ is $A = \\begin{bmatrix} 0 & 3 \\\\ 3 & 0 \\end{bmatrix}$." },
           { prompt: "What are the eigenvalues of $A$?", options: [{id:"A", text:"$\\pm 3$", isCorrect:true, explanation:"Characteristic equation is $\\lambda^2 - 9 = 0$."}, {id:"B", text:"0, 3", isCorrect:false, explanation:""}], stepText: "Eigenvalues are $3$ and $-3$." },
           { stepText: "By Theorem 6, max utility is $\\lambda_1 = 3$. It occurs at unit eigenvector for $\\lambda=3$, which is $\\mathbf{x} = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "Convert back to original variables: $x = 3(1/\\sqrt{2}) \\approx 2.1$, $y = 2(1/\\sqrt{2}) \\approx 1.4$." }
        ]}
      ]
    }
  ]
};
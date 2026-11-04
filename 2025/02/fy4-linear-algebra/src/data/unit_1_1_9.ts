import { Unit } from '../types';

export const UNIT_1_1_9: Unit = {
  id: "unit-1-1-9",
  title: "Matrix Subspaces",
  description: "Exercises 21-22: Vector spaces of matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-1-9-ex21", title: "Exercise 21: Upper Triangular", description: "Matrices with zeros", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** Determine if the set $H$ of all matrices of the form $\\begin{bmatrix} a & b \\\\ 0 & d \\end{bmatrix}$ is a subspace of $M_{2 \\times 2}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check closure.**", interactiveSteps: [
           { stepText: "Zero vector: Let $a=b=d=0$. $\\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix}$ fits the form. $\\mathbf{0} \\in H$." },
           { prompt: "Addition: $\\begin{bmatrix} a & b \\\\ 0 & d \\end{bmatrix} + \\begin{bmatrix} x & y \\\\ 0 & z \\end{bmatrix} = ?$", options: [{id:"A", text:"$\\begin{bmatrix} a+x & b+y \\\\ 0 & d+z \\end{bmatrix}$", isCorrect:true, explanation:"The zero in the bottom-left is preserved: $0+0=0$."}, {id:"B", text:"$\\begin{bmatrix} a+x & b+y \\\\ 1 & d+z \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "The sum preserves the zero entry. It is in $H$." },
           { stepText: "Scalar mult: $c \\begin{bmatrix} a & b \\\\ 0 & d \\end{bmatrix} = \\begin{bmatrix} ca & cb \\\\ 0 & cd \\end{bmatrix}$. The zero is preserved." },
           { stepText: "Since all properties hold, $H$ is a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-1-9-ex22", title: "Exercise 22: Matrix Equations", description: "FA = 0", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** Let $F$ be a fixed $3 \\times 2$ matrix, and let $H$ be the set of all matrices $A$ in $M_{2 \\times 4}$ with the property $FA = 0$ (the zero matrix in $M_{3 \\times 4}$). Determine if $H$ is a subspace of $M_{2 \\times 4}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Use matrix algebra properties.**", interactiveSteps: [
           { stepText: "1. Zero vector: Let $O$ be the $2 \\times 4$ zero matrix. Does $FO = 0$?" },
           { prompt: "Result:", options: [{id:"A", text:"Yes, matrix times zero matrix is zero.", isCorrect:true, explanation:"$F \\cdot O_{2\\times4} = O_{3\\times4}$."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "$\mathbf{0} \\in H$." },
           { stepText: "2. Addition: Let $A, B \\in H$. So $FA=0$ and $FB=0$. We check $A+B$." },
           { prompt: "Compute $F(A+B)$ using distributive property.", options: [{id:"A", text:"$FA + FB = 0 + 0 = 0$", isCorrect:true, explanation:"Distributive law holds for matrices."}, {id:"B", text:"$FA + B$", isCorrect:false, explanation:""}], stepText: "$F(A+B) = 0$, so $A+B \\in H$." },
           { stepText: "3. Scalar mult: $F(cA) = c(FA) = c(0) = 0$. So $cA \\in H$." },
           { stepText: "Conclusion: $H$ is a subspace." }
        ]},
        { id: "s2", type: "theory", title: "Connection", content: "This is analogous to the **Null Space** of a matrix, but here the \"unknowns\" are entire matrices $A$ rather than column vectors $\\mathbf{x}$." }
      ]
    }
  ]
};
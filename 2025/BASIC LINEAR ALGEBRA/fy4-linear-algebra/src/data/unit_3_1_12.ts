import { Unit } from '../types';

export const UNIT_3_1_12: Unit = {
  id: "unit-3-1-12",
  title: "Theoretical Properties of Inner Products",
  description: "Exercises 19-24: True/False and algebraic proofs.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-1-12-ex19", title: "Exercise 19: True/False", description: "Conceptual logic 1", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "$\\mathbf{v} \\cdot \\mathbf{v} = \\|\\mathbf{v}\\|^2$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the definition of the squared length."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "For any scalar $c$, $\\mathbf{u} \\cdot (c\\mathbf{v}) = c(\\mathbf{u} \\cdot \\mathbf{v})$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Scalars can be factored out of either side of a dot product (Theorem 1)."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If the distance from $\\mathbf{u}$ to $\\mathbf{v}$ equals the distance from $\\mathbf{u}$ to $-\\mathbf{v}$, then $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal.", options: [{id:"A", text:"True", isCorrect:true, explanation:"$\\|u-v\\|^2 = \\|u+v\\|^2 \\implies -2u\\cdot v = 2u\\cdot v \\implies u\\cdot v = 0$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "For a square matrix $A$, vectors in $\\text{Col } A$ are orthogonal to vectors in $\\text{Nul } A$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"No, Row A is orthogonal to Nul A."}, {id:"B", text:"False", isCorrect:true, explanation:"Theorem 3 connects Nul A to Row A, not Col A."}] },
        { id: "s4", type: "quiz", title: "Question E", content: "If vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_p$ span a subspace $W$ and if $\\mathbf{x}$ is orthogonal to each $\\mathbf{v}_j$, then $\\mathbf{x}$ is in $W^\\perp$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Being orthogonal to a spanning set means being orthogonal to the entire space."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-1-12-ex20", title: "Exercise 20: True/False", description: "Conceptual logic 2", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "quiz", title: "Question A", content: "$\\mathbf{u} \\cdot \\mathbf{v} - \\mathbf{v} \\cdot \\mathbf{u} = 0$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Because dot product is commutative, they are equal."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s1", type: "quiz", title: "Question B", content: "For any scalar $c$, $\\|c\\mathbf{v}\\| = c\\|\\mathbf{v}\\|$.", options: [{id:"A", text:"True", isCorrect:false, explanation:"What if c is negative?"}, {id:"B", text:"False", isCorrect:true, explanation:"The correct statement is $\\|c\\mathbf{v}\\| = |c| \\|\\mathbf{v}\\|$."}] },
        { id: "s2", type: "quiz", title: "Question C", content: "If $\\mathbf{x}$ is orthogonal to every vector in a subspace $W$, then $\\mathbf{x}$ is in $W^\\perp$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is exactly the definition of $W^\\perp$."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s3", type: "quiz", title: "Question D", content: "If $\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 = \\|\\mathbf{u}+\\mathbf{v}\\|^2$, then $\\mathbf{u}$ and $\\mathbf{v}$ are orthogonal.", options: [{id:"A", text:"True", isCorrect:true, explanation:"This is the Pythagorean Theorem (Theorem 2)."}, {id:"B", text:"False", isCorrect:false, explanation:""}] },
        { id: "s4", type: "quiz", title: "Question E", content: "For an $m \\times n$ matrix $A$, vectors in the null space of $A$ are orthogonal to vectors in the row space of $A$.", options: [{id:"A", text:"True", isCorrect:true, explanation:"Theorem 3: Nul A = (Row A) perp."}, {id:"B", text:"False", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-1-12-ex21", title: "Exercise 21", description: "Transpose proof of commutativity", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** Use the transpose definition of the inner product to verify that $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{v} \\cdot \\mathbf{u}$." },
        { id: "s1", type: "proof", title: "Proof", content: "The inner product is defined as $\\mathbf{u} \\cdot \\mathbf{v} = \\mathbf{u}^T \\mathbf{v}$.\n\nSince $\\mathbf{u}^T \\mathbf{v}$ is a $1 \\times 1$ matrix (a scalar), it equals its own transpose.\n$$ \\mathbf{u}^T \\mathbf{v} = (\\mathbf{u}^T \\mathbf{v})^T $$\nBy the property of transposes $(AB)^T = B^T A^T$, we get:\n$$ (\\mathbf{u}^T \\mathbf{v})^T = \\mathbf{v}^T (\\mathbf{u}^T)^T = \\mathbf{v}^T \\mathbf{u} $$\nAnd $\\mathbf{v}^T \\mathbf{u}$ is exactly the definition of $\\mathbf{v} \\cdot \\mathbf{u}$.", interactiveSteps: [] }
      ]
    },
    {
      id: "les-3-1-12-ex22", title: "Exercise 22", description: "Positivity proof", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** Let $\\mathbf{u} = (u_1, u_2, u_3)$. Explain why $\\mathbf{u} \\cdot \\mathbf{u} \\ge 0$. When is $\\mathbf{u} \\cdot \\mathbf{u} = 0$?" },
        { id: "s1", type: "solution", title: "Explanation", content: "$\\mathbf{u} \\cdot \\mathbf{u} = u_1^2 + u_2^2 + u_3^2$.\n\nSince the square of any real number is non-negative, the sum of non-negative numbers is $\\ge 0$.\n\nThe sum is exactly zero if and only if every term is zero: $u_1=0$, $u_2=0$, and $u_3=0$. This means $\\mathbf{u} = \\mathbf{0}$." }
      ]
    },
    {
      id: "les-3-1-12-ex23", title: "Exercise 23", description: "Cauchy-Schwarz preview", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 23", content: "**Problem:** Let $\\mathbf{u} = \\begin{bmatrix} 2 \\\\ -5 \\\\ -1 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} -7 \\\\ -4 \\\\ 6 \\end{bmatrix}$. Compute and compare $\\mathbf{u} \\cdot \\mathbf{v}$, $\\|\\mathbf{u}\\|^2$, $\\|\\mathbf{v}\\|^2$, and $\\|\\mathbf{u}+\\mathbf{v}\\|^2$." },
        { id: "s1", type: "solution", title: "Calculations", content: "$\\mathbf{u} \\cdot \\mathbf{v} = 2(-7) + (-5)(-4) + (-1)(6) = -14 + 20 - 6 = 0$.\n\n$\\|\\mathbf{u}\\|^2 = 4 + 25 + 1 = 30$.\n$\\|\\mathbf{v}\\|^2 = 49 + 16 + 36 = 101$.\n\n$\\mathbf{u}+\\mathbf{v} = \\begin{bmatrix} -5 \\\\ -9 \\\\ 5 \\end{bmatrix}$.\n$\\|\\mathbf{u}+\\mathbf{v}\\|^2 = 25 + 81 + 25 = 131$." },
        { id: "s2", type: "quiz", title: "Observation", content: "What relationship do you observe among these values?", options: [{id:"A", text:"$\\|u+v\\|^2 = \\|u\\|^2 + \\|v\\|^2$", isCorrect:true, explanation:"131 = 30 + 101. This perfectly verifies the Pythagorean theorem since $u \\cdot v = 0$!"}, {id:"B", text:"They are completely unrelated.", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-1-12-ex24", title: "Exercise 24", description: "Parallelogram Law", icon: "Shield",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 24", content: "**Problem:** Verify the *parallelogram law* for vectors $\\mathbf{u}$ and $\\mathbf{v}$ in $\\mathbb{R}^n$:\n$$ \\|\\mathbf{u}+\\mathbf{v}\\|^2 + \\|\\mathbf{u}-\\mathbf{v}\\|^2 = 2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2 $$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Expand the left side using dot products.**", interactiveSteps: [
           { stepText: "$\\|\\mathbf{u}+\\mathbf{v}\\|^2 = (\\mathbf{u}+\\mathbf{v}) \\cdot (\\mathbf{u}+\\mathbf{v}) = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 + 2\\mathbf{u}\\cdot\\mathbf{v}$." },
           { prompt: "What is $\\|\\mathbf{u}-\\mathbf{v}\\|^2$ expanded?", options: [{id:"A", text:"$\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - 2\\mathbf{u}\\cdot\\mathbf{v}$", isCorrect:true, explanation:"$(u-v)\\cdot(u-v) = u\\cdot u - u\\cdot v - v\\cdot u + v\\cdot v$."}, {id:"B", text:"$\\|\\mathbf{u}\\|^2 - \\|\\mathbf{v}\\|^2$", isCorrect:false, explanation:""}], stepText: "$\\|\\mathbf{u}-\\mathbf{v}\\|^2 = \\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - 2\\mathbf{u}\\cdot\\mathbf{v}$." },
           { stepText: "Add the two expansions together:\n$(\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 + 2\\mathbf{u}\\cdot\\mathbf{v}) + (\\|\\mathbf{u}\\|^2 + \\|\\mathbf{v}\\|^2 - 2\\mathbf{u}\\cdot\\mathbf{v})$." },
           { stepText: "The $2\\mathbf{u}\\cdot\\mathbf{v}$ terms cancel out, leaving $2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2$. Q.E.D." }
        ]}
      ]
    }
  ]
};
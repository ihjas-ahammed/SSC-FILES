import { Unit } from '../types';

export const UNIT_3_2_2: Unit = {
  id: "unit-3-2-2",
  title: "Orthogonal Bases",
  description: "Definition 2, Theorem 5, and Example 2.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-3-2-2-d2", title: "Definition 2: Orthogonal Basis", description: "Bases made of orthogonal sets", icon: "Flag",
      slides: [
        { id: "s0", type: "theory", title: "Orthogonal Basis", content: "An **orthogonal basis** for a subspace $W$ of $\\mathbb{R}^n$ is a basis for $W$ that is also an orthogonal set.\n\nBecause of Theorem 4, any orthogonal set of non-zero vectors is automatically a basis for the subspace it spans!" },
        { id: "s1", type: "quiz", title: "Conceptual Check", content: "Is the standard basis $\\{\\mathbf{e}_1, \\mathbf{e}_2, \\mathbf{e}_3\\}$ an orthogonal basis for $\\mathbb{R}^3$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"The standard axes are mutually perpendicular, so their dot products are 0."}, {id:"B", text:"No", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-3-2-2-t5", title: "Theorem 5: Orthogonal Coordinates", description: "Finding weights easily", icon: "Target",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 5", content: "Let $\\{\\mathbf{u}_1, \\dots, \\mathbf{u}_p\\}$ be an orthogonal basis for a subspace $W$ of $\\mathbb{R}^n$. For each $\\mathbf{y}$ in $W$, the weights in the linear combination\n$$ \\mathbf{y} = c_1\\mathbf{u}_1 + \\dots + c_p\\mathbf{u}_p $$\nare given by the formula:\n$$ c_j = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_j}{\\mathbf{u}_j \\cdot \\mathbf{u}_j} \\quad (j = 1, \\dots, p) $$" },
        { id: "s1", type: "proof", title: "Interactive Proof", content: "**Goal: Isolate $c_1$.**", interactiveSteps: [
           { stepText: "Start with $\\mathbf{y} = c_1\\mathbf{u}_1 + c_2\\mathbf{u}_2 + \\dots + c_p\\mathbf{u}_p$." },
           { prompt: "To find $c_1$, dot both sides with which vector?", options: [{id:"A", text:"$\\mathbf{u}_1$", isCorrect:true, explanation:"Dotting with $u_1$ will eliminate all other terms."}, {id:"B", text:"$\\mathbf{y}$", isCorrect:false, explanation:""}], stepText: "Compute $\\mathbf{y} \\cdot \\mathbf{u}_1 = (c_1\\mathbf{u}_1 + \\dots + c_p\\mathbf{u}_p) \\cdot \\mathbf{u}_1$." },
           { stepText: "Because the basis is orthogonal, $\\mathbf{u}_k \\cdot \\mathbf{u}_1 = 0$ for all $k \\neq 1$." },
           { stepText: "The equation simplifies to $\\mathbf{y} \\cdot \\mathbf{u}_1 = c_1(\\mathbf{u}_1 \\cdot \\mathbf{u}_1)$." },
           { stepText: "Divide by $(\\mathbf{u}_1 \\cdot \\mathbf{u}_1)$ to get $c_1 = \\frac{\\mathbf{y} \\cdot \\mathbf{u}_1}{\\mathbf{u}_1 \\cdot \\mathbf{u}_1}$. This works for any $j$. Goal reached!" }
        ]},
        { id: "s2", type: "fill_in_blank", title: "Advantage", content: "With an orthogonal basis, we can find the coordinate weights $c_j$ directly without having to row reduce a ___.", blankAnswer: "matrix" }
      ]
    },
    {
      id: "les-3-2-2-e2", title: "Example 2", description: "Applying Theorem 5", icon: "Calculator",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** The set $S = \\{\\mathbf{u}_1, \\mathbf{u}_2, \\mathbf{u}_3\\}$ from Example 1 is an orthogonal basis for $\\mathbb{R}^3$. Express the vector $\\mathbf{y} = \\begin{bmatrix} 6 \\\\ 1 \\\\ -8 \\end{bmatrix}$ as a linear combination of the vectors in $S$.\n\n$\\mathbf{u}_1 = \\begin{bmatrix} 3 \\\\ 1 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_2 = \\begin{bmatrix} -1 \\\\ 2 \\\\ 1 \\end{bmatrix}, \\mathbf{u}_3 = \\begin{bmatrix} -1/2 \\\\ -2 \\\\ 7/2 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Compute $c_1, c_2, c_3$ using Theorem 5.**", interactiveSteps: [
           { stepText: "First, compute the dot products of $\\mathbf{y}$ with each basis vector." },
           { prompt: "Compute $\\mathbf{y} \\cdot \\mathbf{u}_1$.", options: [{id:"A", text:"11", isCorrect:true, explanation:"$18 + 1 - 8 = 11$."}, {id:"B", text:"25", isCorrect:false, explanation:""}], stepText: "$\\mathbf{y} \\cdot \\mathbf{u}_1 = 11$." },
           { stepText: "$\\mathbf{y} \\cdot \\mathbf{u}_2 = 6(-1) + 1(2) + (-8)(1) = -6 + 2 - 8 = -12$.\n$\\mathbf{y} \\cdot \\mathbf{u}_3 = 6(-1/2) + 1(-2) + (-8)(7/2) = -3 - 2 - 28 = -33$." },
           { stepText: "Now compute the self dot products: $\\mathbf{u}_1 \\cdot \\mathbf{u}_1 = 11$, $\\mathbf{u}_2 \\cdot \\mathbf{u}_2 = 6$, $\\mathbf{u}_3 \\cdot \\mathbf{u}_3 = 33/2$." },
           { stepText: "Calculate weights: $c_1 = \\frac{11}{11} = 1$, $c_2 = \\frac{-12}{6} = -2$, $c_3 = \\frac{-33}{33/2} = -2$." },
           { stepText: "Result: $\\mathbf{y} = 1\\mathbf{u}_1 - 2\\mathbf{u}_2 - 2\\mathbf{u}_3$." }
        ]},
        { id: "s2", type: "numerical", title: "Coordinate Vector", content: "What is the second component of the coordinate vector $[\\mathbf{y}]_S$?", numericAnswer: -2, numericTolerance: 0 }
      ]
    }
  ]
};
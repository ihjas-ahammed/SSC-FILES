import { Unit } from '../types';

export const UNIT_1_2_1: Unit = {
  id: "unit-1-2-1",
  title: "The Null Space",
  description: "Definition, examples, and why it is a subspace.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-1-nul-def", title: "Definition of Nul A", description: "Solving Ax = 0", icon: "Minimize2",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If $A$ is an $m \\times n$ matrix, the equation $A\\mathbf{x} = \\mathbf{0}$ involves vectors $\\mathbf{x}$ from which space?", options: [{id:"A", text:"$\\mathbb{R}^n$", isCorrect:true, explanation:"A has n columns, so x must have n entries to multiply."}, {id:"B", text:"$\\mathbb{R}^m$", isCorrect:false, explanation:"The result Ax is in Rm, but x is in Rn."}] },
        { id: "s1", type: "theory", title: "Definition 1: Null Space", content: "The **null space** of an $m \\times n$ matrix $A$, written as $\\text{Nul } A$, is the set of all solutions to the homogeneous equation $A\\mathbf{x} = \\mathbf{0}$.\n\nIn set notation:\n$$ \\text{Nul } A = \\{ \\mathbf{x} : \\mathbf{x} \\text{ is in } \\mathbb{R}^n \\text{ and } A\\mathbf{x} = \\mathbf{0} \\} $$" },
        { id: "s2", type: "interactive_canvas", title: "Visualizing Null Space", content: "The Null Space consists of all vectors in the domain that get \"crushed\" to the zero vector in the codomain.", interactiveCanvasId: "null-space-mapping-interactive" }
      ]
    },
    {
      id: "les-1-2-1-ex1", title: "Example 1: Checking Solutions", description: "Is u in Nul A?", icon: "CheckSquare",
      slides: [
        { id: "s0", type: "example_q", title: "Example 1", content: "**Problem:** Let $A = \\begin{bmatrix} 1 & -3 & -2 \\\\ -5 & 9 & 1 \\end{bmatrix}$ and let $\\mathbf{u} = \\begin{bmatrix} 5 \\\\ 3 \\\\ -2 \\end{bmatrix}$. \n\nDetermine if $\\mathbf{u}$ belongs to the null space of $A$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test if $A\\mathbf{u} = \\mathbf{0}$.**", interactiveSteps: [
           { stepText: "Compute the product $A\\mathbf{u}$." },
           { prompt: "Calculate the first entry: $1(5) + (-3)(3) + (-2)(-2)$.", options: [{id:"A", text:"$0$", isCorrect:true, explanation:"$5 - 9 + 4 = 0$."}, {id:"B", text:"$1$", isCorrect:false, explanation:""}], stepText: "First entry is 0." },
           { prompt: "Calculate the second entry: $-5(5) + 9(3) + 1(-2)$.", options: [{id:"A", text:"$-25 + 27 - 2 = 0$", isCorrect:true, explanation:"Correct."}, {id:"B", text:"$-2$", isCorrect:false, explanation:""}], stepText: "Second entry is 0." },
           { stepText: "Since $A\\mathbf{u} = \\begin{bmatrix} 0 \\\\ 0 \\end{bmatrix} = \\mathbf{0}$, $\\mathbf{u}$ is in $\\text{Nul } A$." }
        ]}
      ]
    },
    {
      id: "les-1-2-1-thm2", title: "Theorem 2: Subspace Property", description: "Nul A is a Subspace", icon: "BookOpen",
      slides: [
        { id: "s0", type: "theory", title: "Theorem 2", content: "The null space of an $m \\times n$ matrix $A$ is a subspace of $\\mathbb{R}^n$.\n\nEquivalently, the set of all solutions to a system $A\\mathbf{x} = \\mathbf{0}$ of $m$ homogeneous linear equations in $n$ unknowns is a subspace of $\\mathbb{R}^n$." },
        { id: "s1", type: "proof", title: "Interactive Proof of Theorem 2", content: "**Goal: Verify the 3 subspace properties for Nul A.**", interactiveSteps: [
           { stepText: "1. Zero Vector: Is $\\mathbf{0}$ in Nul A? Yes, because $A\\mathbf{0} = \\mathbf{0}$ for any linear mapping." },
           { prompt: "2. Closure under Addition: Suppose $\\mathbf{u}, \\mathbf{v} \\in \\text{Nul } A$. What is $A(\\mathbf{u} + \\mathbf{v})$?", options: [{id:"A", text:"$A\\mathbf{u} + A\\mathbf{v} = \\mathbf{0} + \\mathbf{0} = \\mathbf{0}$", isCorrect:true, explanation:"Linearity of matrix multiplication."}, {id:"B", text:"$A\\mathbf{u} A\\mathbf{v}$", isCorrect:false, explanation:""}], stepText: "So $\\mathbf{u} + \\mathbf{v}$ is in Nul A." },
           { prompt: "3. Closure under Scalar Mult: What is $A(c\\mathbf{u})$?", options: [{id:"A", text:"$c(A\\mathbf{u}) = c(\\mathbf{0}) = \\mathbf{0}$", isCorrect:true, explanation:"Scalars can be pulled out."}, {id:"B", text:"$c + A\\mathbf{u}$", isCorrect:false, explanation:""}], stepText: "So $c\\mathbf{u}$ is in Nul A. Thus, Nul A is a subspace." }
        ]}
      ]
    },
    {
      id: "les-1-2-1-ex2", title: "Example 2: Implicit Subspaces", description: "Defining subspaces by equations", icon: "Filter",
      slides: [
        { id: "s0", type: "example_q", title: "Example 2", content: "**Problem:** Let $H$ be the set of all vectors in $\\mathbb{R}^4$ whose coordinates $a, b, c, d$ satisfy the equations $a - 2b + 5c = d$ and $c - a = b$. \n\nShow that $H$ is a subspace of $\\mathbb{R}^4$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Rewrite as a homogeneous system $A\\mathbf{x}=\\mathbf{0}$.**", interactiveSteps: [
           { stepText: "Rearrange the equations to have 0 on the right side." },
           { prompt: "Rearrange $a - 2b + 5c = d$.", options: [{id:"A", text:"$a - 2b + 5c - d = 0$", isCorrect:true, explanation:""}, {id:"B", text:"$a - 2b + 5c + d = 0$", isCorrect:false, explanation:"Subtract d from both sides."}], stepText: "Eq 1: $a - 2b + 5c - d = 0$." },
           { prompt: "Rearrange $c - a = b$.", options: [{id:"A", text:"$-a - b + c = 0$", isCorrect:true, explanation:"Subtract b from LHS."}, {id:"B", text:"$a - b + c = 0$", isCorrect:false, explanation:"Check the signs."}], stepText: "Eq 2: $-a - b + c + 0d = 0$." },
           { stepText: "This is a system $A\\mathbf{x} = \\mathbf{0}$ where $\\mathbf{x} = [a, b, c, d]^T$. Thus $H$ is $\\text{Nul } A$." },
           { stepText: "By Theorem 2, any null space is a subspace. So $H$ is a subspace of $\\mathbb{R}^4$." }
        ]}
      ]
    }
  ]
};
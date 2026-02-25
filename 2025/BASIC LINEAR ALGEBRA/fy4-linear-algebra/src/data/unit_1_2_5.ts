import { Unit } from '../types';

export const UNIT_1_2_5: Unit = {
  id: "unit-1-2-5",
  title: "Kernel and Range",
  description: "Table 1, Linear Transformations, and Calculus Examples.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-5-tab1", title: "Contrast: Nul A vs Col A", description: "Table 1 Summary", icon: "Columns",
      slides: [
        { id: "s0", type: "theory", title: "Table 1: Contrast Between Nul A and Col A", content: "For an $m \\times n$ matrix $A$:\n\n| Feature | $\\text{Nul } A$ | $\\text{Col } A$ |\n| :--- | :--- | :--- |\n| **Subspace of** | $\\mathbb{R}^n$ | $\\mathbb{R}^m$ |\n| **Definition** | Implicit: $\\{ \\mathbf{x} : A\\mathbf{x} = \\mathbf{0} \\}$ | Explicit: Span of columns |\n| **Finding vectors** | Difficult (solve equations) | Easy (pick a column) |\n| **Testing vector v** | Check if $A\\mathbf{v} = \\mathbf{0}$ | Check if $A\\mathbf{x} = \\mathbf{v}$ is consistent |\n| **Zero Vector** | Contains $\\mathbf{0} \\in \\mathbb{R}^n$ | Contains $\\mathbf{0} \\in \\mathbb{R}^m$ |" },
        { id: "s1", type: "quiz", title: "Quick Check", content: "Which space is 'easier' to find a nonzero vector in?", options: [{id:"A", text:"Nul A", isCorrect:false, explanation:"Requires solving a system."}, {id:"B", text:"Col A", isCorrect:true, explanation:"Just pick any column of A (if not zero)!"}] }
      ]
    },
    {
      id: "les-1-2-5-def3", title: "Definition 3: Linear Transformations", description: "Kernel and Range", icon: "Share2",
      slides: [
        { id: "s0", type: "theory", title: "Definition 3", content: "A **linear transformation** $T$ from a vector space $V$ into a vector space $W$ is a rule that assigns to each $\\mathbf{x}$ in $V$ a unique vector $T(\\mathbf{x})$ in $W$, such that:\n\n1. $T(\\mathbf{u} + \\mathbf{v}) = T(\\mathbf{u}) + T(\\mathbf{v})$\n2. $T(c\\mathbf{u}) = cT(\\mathbf{u})$\n\nThe **kernel** (or null space) of $T$ is the set of all $\\mathbf{u}$ in $V$ such that $T(\\mathbf{u}) = \\mathbf{0}$.\nThe **range** of $T$ is the set of all vectors in $W$ of the form $T(\\mathbf{x})$.", interactiveCanvasId: "kernel-range-interactive" },
        { id: "s1", type: "theory", title: "Connections", content: "If $T(\\mathbf{x}) = A\\mathbf{x}$:\n- The **kernel** of $T$ is exactly $\\text{Nul } A$.\n- The **range** of $T$ is exactly $\\text{Col } A$.\n\nThe kernel is a subspace of $V$. The range is a subspace of $W$." }
      ]
    },
    {
      id: "les-1-2-5-ex8-9", title: "Calculus Examples", description: "Differentiation as a Transformation", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Example 8: Differentiation", content: "Let $V$ be the space of all real-valued differentiable functions on $[a, b]$, and let $W$ be the space of all continuous functions.\n\nDefine $D: V \\to W$ by $D(f) = f'$.\n\nWhat is the kernel of $D$?" },
        { id: "s1", type: "solution", title: "Solution", content: "The kernel is the set of all functions $f$ such that $D(f) = 0$, i.e., $f'(t) = 0$ for all $t$.\n\nFrom calculus, functions with zero derivative are **constant functions**.\n\nSo, Kernel $D$ is the subspace of all constant functions." },
        { id: "s2", type: "example_q", title: "Example 9: Differential Equations", content: "The differential equation $y'' + \\omega^2 y = 0$ can be viewed as the kernel of a linear transformation $T(y) = y'' + \\omega^2 y$.\n\nThe kernel is the set of solutions to the homogeneous equation, which we know spans a vector space (Exercise 19 in 4.1)." }
      ]
    }
  ]
};
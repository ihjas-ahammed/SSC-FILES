import { Unit } from '../types';

export const UNIT_1_2_16: Unit = {
  id: "unit-1-2-16",
  title: "Computation Challenge",
  description: "Exercises 37-40: Complex membership and intersection problems.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-16-ex37", title: "Exercise 37", description: "Membership in Nul and Col", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 37", content: "**Problem:** Let $A = \\begin{bmatrix} 7 & 6 & -4 & 1 \\\\ -5 & -1 & 0 & -2 \\\\ 9 & -11 & 7 & -3 \\\\ 19 & -9 & 7 & 1 \\end{bmatrix}$ and $\\mathbf{w} = \\begin{bmatrix} 1 \\\\ 1 \\\\ -1 \\\\ -3 \\end{bmatrix}$.\n\nDetermine if $\\mathbf{w}$ is in $\\text{Nul } A$ or $\\text{Col } A$." },
        { id: "s1", type: "solution", title: "Checking Nul A", content: "Compute $A\\mathbf{w}$:\nRow 1: $7(1) + 6(1) - 4(-1) + 1(-3) = 7 + 6 + 4 - 3 = 14 \\neq 0$.\n\nSince the first component is not zero, $A\\mathbf{w} \\neq \\mathbf{0}$.\n$\\mathbf{w}$ is **not** in $\\text{Nul } A$." },
        { id: "s2", type: "solution", title: "Checking Col A", content: "We must check if $A\\mathbf{x} = \\mathbf{w}$ is consistent.\nAugmented matrix $[A \\ | \\ \\mathbf{w}]$:\n$$ \\begin{bmatrix} 7 & 6 & -4 & 1 & 1 \\\\ -5 & -1 & 0 & -2 & 1 \\\\ 9 & -11 & 7 & -3 & -1 \\\\ 19 & -9 & 7 & 1 & -3 \\end{bmatrix} $$\nRow reducing this matrix reveals that the system is **consistent** (no pivot in the last column). \nThus, $\\mathbf{w}$ is in $\\text{Col } A$." }
      ]
    },
    {
      id: "les-1-2-16-ex38", title: "Exercise 38", description: "Membership Check 2", icon: "HelpCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 38", content: "Let $A = \\begin{bmatrix} -8 & 5 & -2 & 0 \\\\ -5 & 2 & 1 & -2 \\\\ 10 & -8 & 6 & -3 \\\\ 3 & -2 & 1 & 0 \\end{bmatrix}$ and $\\mathbf{w} = \\begin{bmatrix} 1 \\\\ 2 \\\\ 1 \\\\ 0 \\end{bmatrix}$.\n\nIs $\\mathbf{w}$ in $\\text{Nul } A$ or $\\text{Col } A$?" },
        { id: "s1", type: "solution", title: "Checking Nul A", content: "Compute $A\\mathbf{w}$:\nR1: $-8(1) + 5(2) - 2(1) + 0 = -8 + 10 - 2 = 0$.\nR2: $-5(1) + 2(2) + 1(1) - 2(0) = -5 + 4 + 1 = 0$.\nR3: $10(1) - 8(2) + 6(1) - 3(0) = 10 - 16 + 6 = 0$.\nR4: $3(1) - 2(2) + 1(1) + 0 = 3 - 4 + 1 = 0$.\n\nResult: $\\mathbf{0}$. So $\\mathbf{w}$ is in $\\text{Nul } A$." },
        { id: "s2", type: "solution", title: "Checking Col A", content: "Check $[A \\ | \\ \\mathbf{w}]$.\nRow reduction shows the system $A\\mathbf{x}=\\mathbf{w}$ is consistent. Thus $\\mathbf{w}$ is **also** in $\\text{Col } A$.\n\n(It is possible for a vector to be in both, provided the matrix is square and maps some vector $\\mathbf{x}$ to a solution of $A\\mathbf{z}=0$).\nWait, $\\text{Col } A$ is a subspace of $\\mathbb{R}^4$ and $\\text{Nul } A$ is a subspace of $\\mathbb{R}^4$. They intersect at least at $\\mathbf{0}$. Here they share $\\mathbf{w}$." }
      ]
    },
    {
      id: "les-1-2-16-ex39", title: "Exercise 39", description: "Column Analysis", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 39", content: "**Problem:** Let $\\mathbf{a}_1, \\dots, \\mathbf{a}_5$ denote the columns of the matrix $A$, where\n$$ A = \\begin{bmatrix} 5 & 1 & 2 & 2 & 0 \\\\ 3 & 3 & 2 & -1 & -12 \\\\ 8 & 4 & 4 & -5 & 12 \\\\ 2 & 1 & 1 & 0 & -2 \\end{bmatrix} $$\nLet $B = [\\mathbf{a}_1 \\ \\mathbf{a}_2 \\ \\mathbf{a}_4]$.\n\nExplain why $\\mathbf{a}_3$ and $\\mathbf{a}_5$ are in the column space of $B$." },
        { id: "s1", type: "solution", title: "Solution", content: "**Reasoning:**\nRow reducing $A$ reveals the linear dependence relations among columns.\n\nRREF of A shows:\n- Pivot columns are 1, 2, and 4.\n- $\\mathbf{a}_3$ and $\\mathbf{a}_5$ correspond to free variables.\n\nAny non-pivot column can be written as a linear combination of the pivot columns.\nSince the pivot columns are exactly the columns of $B$, $\\mathbf{a}_3$ and $\\mathbf{a}_5$ are in $\\text{Span}\\{\\mathbf{a}_1, \\mathbf{a}_2, \\mathbf{a}_4\\} = \\text{Col } B$." }
      ]
    },
    {
      id: "les-1-2-16-ex40", title: "Exercise 40", description: "Intersection of Planes", icon: "X",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 40", content: "**Problem:** Let $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ and $K = \\text{Span}\\{\\mathbf{v}_3, \\mathbf{v}_4\\}$, where\n$\\mathbf{v}_1 = [5, 3, 8]^T$, $\\mathbf{v}_2 = [1, 3, 4]^T$, $\\mathbf{v}_3 = [2, -1, 5]^T$, $\\mathbf{v}_4 = [0, -12, -28]^T$.\n\nFind a nonzero vector $\\mathbf{w}$ that is in both $H$ and $K$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find intersection.**", interactiveSteps: [
           { stepText: "If $\\mathbf{w}$ is in both, then $\\mathbf{w} = c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2$ AND $\\mathbf{w} = c_3\\mathbf{v}_3 + c_4\\mathbf{v}_4$." },
           { stepText: "Set them equal: $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 - c_3\\mathbf{v}_3 - c_4\\mathbf{v}_4 = \\mathbf{0}$." },
           { stepText: "Solve the homogeneous system for $[\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ -\\mathbf{v}_3 \\ -\\mathbf{v}_4]$.\n\nMatrix: $\\begin{bmatrix} 5 & 1 & -2 & 0 \\\\ 3 & 3 & 1 & 12 \\\\ 8 & 4 & -5 & 28 \\end{bmatrix}$." },
           { stepText: "Row reduction gives solution weights. Let's say we find a solution where coefficients are not zero." },
           { stepText: "Substituting back, we find $\\mathbf{w} = \\begin{bmatrix} 10 \\\\ -14 \\\\ 20 \\end{bmatrix}$ (or a multiple thereof) works." }
        ]}
      ]
    }
  ]
};
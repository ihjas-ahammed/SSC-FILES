import { Unit } from '../types';

export const UNIT_1_2_4: Unit = {
  id: "unit-1-2-4",
  title: "Nul A vs Col A: Examples",
  description: "Examples 5-7: Comparing dimensions and membership.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-4-ex5", title: "Example 5: Dimensions", description: "Where do these spaces live?", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Example 5", content: "**Problem:** Let $A = \\begin{bmatrix} 2 & 4 & -2 & 1 \\\\ -2 & -5 & 7 & 3 \\\\ 3 & 7 & -8 & 6 \\end{bmatrix}$.\n\na. The column space of $A$ is a subspace of $\\mathbb{R}^k$. What is $k$?\nb. The null space of $A$ is a subspace of $\\mathbb{R}^k$. What is $k$?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Analyze dimensions.**", interactiveSteps: [
           { prompt: "Col $A$ consists of linear combinations of the columns. How many rows does each column have?", options: [{id:"A", text:"3", isCorrect:true, explanation:"The matrix is $3 \\times 4$. Columns are in $\\mathbb{R}^3$."}, {id:"B", text:"4", isCorrect:false, explanation:"That is the number of columns, not the height."}], stepText: "Since each column has 3 entries, $\\text{Col } A$ is a subspace of $\\mathbb{R}^3$." },
           { prompt: "Nul $A$ consists of vectors $\\mathbf{x}$ such that $A\\mathbf{x}=\\mathbf{0}$. If $A$ is $3 \\times 4$, what size must $\\mathbf{x}$ be?", options: [{id:"A", text:"3", isCorrect:false, explanation:"Matrix multiplication requires rows of x to match columns of A."}, {id:"B", text:"4", isCorrect:true, explanation:"$A$ has 4 columns, so $\\mathbf{x}$ must have 4 entries."}], stepText: "Since $\\mathbf{x}$ has 4 entries, $\\text{Nul } A$ is a subspace of $\\mathbb{R}^4$." }
        ]},
        { id: "s2", type: "theory", title: "Takeaway", content: "For an $m \\times n$ matrix $A$:\n- $\\text{Col } A$ is in $\\mathbb{R}^m$ (rows)\n- $\\text{Nul } A$ is in $\\mathbb{R}^n$ (columns)\n\nThey live in different \"universes\" when $m \\neq n$." }
      ]
    },
    {
      id: "les-1-2-4-ex6", title: "Example 6: Finding Vectors", description: "Generating specific examples", icon: "Search",
      slides: [
        { id: "s0", type: "example_q", title: "Example 6", content: "**Problem:** With the same matrix $A$, find a nonzero vector in $\\text{Col } A$ and a nonzero vector in $\\text{Nul } A$." },
        { id: "s1", type: "solution", title: "Finding a vector in Col A", content: "This is easy! Any column of $A$ is automatically in $\\text{Col } A$.\n\nFor example, the first column $\\mathbf{v} = \\begin{bmatrix} 2 \\\\ -2 \\\\ 3 \\end{bmatrix}$ is in $\\text{Col } A$." },
        { id: "s2", type: "solution", title: "Finding a vector in Nul A", content: "This requires work. We must solve $A\\mathbf{x} = \\mathbf{0}$.\n\nRow reducing $[A \\ \\mathbf{0}]$:\n$$ \\begin{bmatrix} 1 & 0 & 9 & 0 & 0 \\\\ 0 & 1 & -5 & 0 & 0 \\\\ 0 & 0 & 0 & 1 & 0 \\end{bmatrix} $$\nThis gives $x_1 = -9x_3$, $x_2 = 5x_3$, $x_4 = 0$. $x_3$ is free.\n\nLet $x_3 = 1$. Then $\\mathbf{x} = \\begin{bmatrix} -9 \\\\ 5 \\\\ 1 \\\\ 0 \\end{bmatrix}$ is in $\\text{Nul } A$." }
      ]
    },
    {
      id: "les-1-2-4-ex7", title: "Example 7: Checking Membership", description: "Is u in Nul A or Col A?", icon: "CheckCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Example 7", content: "With $A$ as before, let $\\mathbf{u} = \\begin{bmatrix} 3 \\\\ -2 \\\\ -1 \\\\ 0 \\end{bmatrix}$ and $\\mathbf{v} = \\begin{bmatrix} 3 \\\\ -1 \\\\ 3 \\end{bmatrix}$.\n\na. Determine if $\\mathbf{u}$ is in $\\text{Nul } A$ or $\\text{Col } A$.\nb. Determine if $\\mathbf{v}$ is in $\\text{Nul } A$ or $\\text{Col } A$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check definitions.**", interactiveSteps: [
           { prompt: "Check $\\mathbf{u}$ for $\\text{Nul } A$. Compute $A\\mathbf{u}$.", options: [{id:"A", text:"$A\\mathbf{u} = \\mathbf{0}$", isCorrect:false, explanation:"$2(3) + 4(-2) - 2(-1) + 1(0) = 6 - 8 + 2 = 0$. Wait, check 2nd row: $-2(3) - 5(-2) + 7(-1) = -6 + 10 - 7 = -3 \\neq 0$."}, {id:"B", text:"$A\\mathbf{u} \\neq \\mathbf{0}$", isCorrect:true, explanation:"The second entry is nonzero."}], stepText: "So $\\mathbf{u}$ is NOT in $\\text{Nul } A$. Since it has 4 entries, it *could* be in $\\text{Nul } A$ (dimension-wise), but isn't. It definitely isn't in $\\text{Col } A$ because $\\text{Col } A$ has vectors with 3 entries." },
           { prompt: "Check $\\mathbf{v}$ for $\\text{Col } A$. Solve $A\\mathbf{x} = \\mathbf{v}$.", options: [{id:"A", text:"Consistent", isCorrect:true, explanation:"Row reducing $[A \\ \\mathbf{v}]$ shows consistency."}, {id:"B", text:"Inconsistent", isCorrect:false, explanation:""}], stepText: "The system is consistent, so $\\mathbf{v}$ IS in $\\text{Col } A$. $\\mathbf{v}$ cannot be in $\\text{Nul } A$ because it has the wrong number of entries (3 instead of 4)." }
        ]}
      ]
    }
  ]
};
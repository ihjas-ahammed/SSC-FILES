import { Unit } from '../types';

export const UNIT_2_1_11: Unit = {
  id: "unit-2-1-11",
  title: "Theoretical Properties of Bases",
  description: "Exercises 17-22: Linear combinations and coordinate matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-2-1-11-ex17", title: "Exercise 17", description: "Non-unique representations", icon: "AlertTriangle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** The vectors $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ -3 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 2 \\\\ -8 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} -3 \\\\ 7 \\end{bmatrix}$ span $\\mathbb{R}^2$ but do not form a basis. \n\nFind two different ways to express $\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$ as a linear combination of $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Solve $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 = \\mathbf{x}$ with a free variable.**", interactiveSteps: [
           { stepText: "Augmented matrix: $\\begin{bmatrix} 1 & 2 & -3 & 1 \\\\ -3 & -8 & 7 & 1 \\end{bmatrix}$." },
           { stepText: "Row reduce: $R_2 + 3R_1 \\implies \\begin{bmatrix} 1 & 2 & -3 & 1 \\\\ 0 & -2 & -2 & 4 \\end{bmatrix}$." },
           { stepText: "Divide $R_2$ by $-2$: $\\begin{bmatrix} 1 & 2 & -3 & 1 \\\\ 0 & 1 & 1 & -2 \\end{bmatrix}$." },
           { stepText: "Back substitute: $c_1 + 2(-2 - c_3) - 3c_3 = 1 \\implies c_1 - 4 - 5c_3 = 1 \\implies c_1 = 5 + 5c_3$." },
           { prompt: "To find *two* ways, pick two different values for $c_3$. If $c_3=0$, what are $c_1, c_2$?", options: [{id:"A", text:"$c_1=5, c_2=-2$", isCorrect:true, explanation:""}, {id:"B", text:"$c_1=1, c_2=1$", isCorrect:false, explanation:""}], stepText: "Way 1: $5\\mathbf{v}_1 - 2\\mathbf{v}_2 + 0\\mathbf{v}_3$." },
           { stepText: "If $c_3 = -1$, then $c_2 = -2 - (-1) = -1$, and $c_1 = 5 - 5 = 0$." },
           { stepText: "Way 2: $0\\mathbf{v}_1 - 1\\mathbf{v}_2 - 1\\mathbf{v}_3$. This demonstrates that redundant vectors destroy uniqueness!" }
        ]}
      ]
    },
    {
      id: "les-2-1-11-ex18", title: "Exercise 18", description: "Coordinates of basis vectors", icon: "Hash",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Let $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ be a basis for a vector space $V$. Explain why the $\\mathcal{B}$-coordinate vectors of $\\mathbf{b}_1, \\dots, \\mathbf{b}_n$ are the columns $\\mathbf{e}_1, \\dots, \\mathbf{e}_n$ of the $n \\times n$ identity matrix." },
        { id: "s1", type: "solution", title: "Solution", content: "To find the coordinates of $\\mathbf{b}_1$, we must write it as a linear combination of the basis vectors:\n$$ \\mathbf{b}_1 = 1\\mathbf{b}_1 + 0\\mathbf{b}_2 + \\dots + 0\\mathbf{b}_n $$\nThe weights are exactly the entries of the coordinate vector. Thus, $[\\mathbf{b}_1]_\\mathcal{B} = \\begin{bmatrix} 1 \\\\ 0 \\\\ \\vdots \\\\ 0 \\end{bmatrix} = \\mathbf{e}_1$.\n\nIn general, $\\mathbf{b}_i = 0\\mathbf{b}_1 + \\dots + 1\\mathbf{b}_i + \\dots + 0\\mathbf{b}_n$, making its coordinate vector $\\mathbf{e}_i$." }
      ]
    },
    {
      id: "les-2-1-11-ex19", title: "Exercise 19", description: "Unique representations imply basis", icon: "Anchor",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Let $S$ be a finite set in a vector space $V$ with the property that *every* $\\mathbf{x}$ in $V$ has a unique representation as a linear combination of elements of $S$. \n\nShow that $S$ is a basis of $V$." },
        { id: "s1", type: "solution", title: "Solution", content: "1. Because *every* $\\mathbf{x}$ in $V$ has a representation, $S$ spans $V$.\n\n2. We must show $S$ is linearly independent. Consider the zero vector $\\mathbf{0}$. We know that $0\\mathbf{v}_1 + \\dots + 0\\mathbf{v}_p = \\mathbf{0}$ is one representation (the trivial one).\n\nSince the problem states every vector has a **unique** representation, the zero vector can *only* be formed by this trivial combination. By definition, this means $S$ is linearly independent.\n\nSince $S$ spans $V$ and is independent, it is a basis." }
      ]
    },
    {
      id: "les-2-1-11-ex20", title: "Exercise 20", description: "Dependence implies non-unique", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Suppose $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_4\\}$ is a linearly dependent spanning set for a vector space $V$. Show that each $\\mathbf{w}$ in $V$ can be expressed in more than one way as a linear combination of $\\mathbf{v}_1, \\dots, \\mathbf{v}_4$." },
        { id: "s1", type: "solution", title: "Interactive Proof", content: "**Goal: Construct two different representations.**", interactiveSteps: [
           { stepText: "Since the set spans $V$, any $\\mathbf{w}$ can be written as $\\mathbf{w} = k_1\\mathbf{v}_1 + \\dots + k_4\\mathbf{v}_4$." },
           { prompt: "What does linearly dependent mean?", options: [{id:"A", text:"There exist weights $c_i$, not all zero, such that $c_1\\mathbf{v}_1 + \\dots + c_4\\mathbf{v}_4 = \\mathbf{0}$.", isCorrect:true, explanation:""}, {id:"B", text:"All vectors are zero.", isCorrect:false, explanation:""}], stepText: "Let $c_1\\mathbf{v}_1 + \\dots + c_4\\mathbf{v}_4 = \\mathbf{0}$ be a non-trivial relation." },
           { stepText: "Add this representation of $\\mathbf{0}$ to our equation for $\\mathbf{w}$:\n$\\mathbf{w} = \\mathbf{w} + \\mathbf{0} = (k_1\\mathbf{v}_1 + \\dots + k_4\\mathbf{v}_4) + (c_1\\mathbf{v}_1 + \\dots + c_4\\mathbf{v}_4)$." },
           { stepText: "Grouping terms yields: $\\mathbf{w} = (k_1+c_1)\\mathbf{v}_1 + \\dots + (k_4+c_4)\\mathbf{v}_4$." },
           { stepText: "Since at least one $c_i \\neq 0$, the new weights $(k_i+c_i)$ are not identical to the old weights $k_i$. Thus, we have found a *second*, different representation for $\\mathbf{w}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-11-ex21", title: "Exercise 21", description: "Matrix of the Coordinate Mapping R2", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** Let $\\mathcal{B} = \\left\\{ \\begin{bmatrix} 1 \\\\ -4 \\end{bmatrix}, \\begin{bmatrix} -2 \\\\ 9 \\end{bmatrix} \\right\\}$. \n\nSince the coordinate mapping determined by $\\mathcal{B}$ is a linear transformation from $\\mathbb{R}^2$ into $\\mathbb{R}^2$, this mapping must be implemented by some $2 \\times 2$ matrix $A$. Find it." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find a matrix $A$ such that $A\\mathbf{x} = [\\mathbf{x}]_\\mathcal{B}$.**", interactiveSteps: [
           { stepText: "We know that $\\mathbf{x} = P_\\mathcal{B} [\\mathbf{x}]_\\mathcal{B}$." },
           { prompt: "How do we isolate $[\\mathbf{x}]_\\mathcal{B}$?", options: [{id:"A", text:"Multiply by $P_\\mathcal{B}^{-1}$", isCorrect:true, explanation:"$[\\mathbf{x}]_\\mathcal{B} = P_\\mathcal{B}^{-1} \\mathbf{x}$."}, {id:"B", text:"Multiply by $P_\\mathcal{B}$", isCorrect:false, explanation:""}], stepText: "The matrix $A$ that implements the mapping $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$ is precisely $P_\\mathcal{B}^{-1}$." },
           { stepText: "$P_\\mathcal{B} = \\begin{bmatrix} 1 & -2 \\\\ -4 & 9 \\end{bmatrix}$. Det = $(1)(9) - (-2)(-4) = 9 - 8 = 1$." },
           { stepText: "$A = P_\\mathcal{B}^{-1} = \\frac{1}{1} \\begin{bmatrix} 9 & 2 \\\\ 4 & 1 \\end{bmatrix} = \\begin{bmatrix} 9 & 2 \\\\ 4 & 1 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-2-1-11-ex22", title: "Exercise 22", description: "General Matrix of Coordinate Mapping", icon: "Share2",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** Let $\\mathcal{B} = \\{\\mathbf{b}_1, \\dots, \\mathbf{b}_n\\}$ be a basis for $\\mathbb{R}^n$. Produce a description of an $n \\times n$ matrix $A$ that implements the coordinate mapping $\\mathbf{x} \\mapsto [\\mathbf{x}]_\\mathcal{B}$." },
        { id: "s1", type: "solution", title: "Solution", content: "As derived in Exercise 21, the equation linking a vector to its coordinates is $\\mathbf{x} = P_\\mathcal{B}[\\mathbf{x}]_\\mathcal{B}$, where $P_\\mathcal{B} = [\\mathbf{b}_1 \\ \\dots \\ \\mathbf{b}_n]$.\n\nSince $\\mathcal{B}$ is a basis, $P_\\mathcal{B}$ is invertible. Left-multiplying by its inverse gives:\n$$ [\\mathbf{x}]_\\mathcal{B} = P_\\mathcal{B}^{-1} \\mathbf{x} $$\n\nThus, the matrix $A$ that implements the coordinate mapping is $P_\\mathcal{B}^{-1}$." }
      ]
    }
  ]
};
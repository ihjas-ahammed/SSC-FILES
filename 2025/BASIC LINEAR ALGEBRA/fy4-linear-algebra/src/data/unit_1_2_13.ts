import { Unit } from '../types';

export const UNIT_1_2_13: Unit = {
  id: "unit-1-2-13",
  title: "Matrix Dimensions Logic",
  description: "Exercises 27-28: Relating m, n to subspace dimensions.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-2-13-ex27", title: "Exercise 27", description: "10x12 Matrix Analysis", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 27", content: "**Problem:** Suppose $A$ is a $10 \\times 12$ matrix.\n\n1. If $\\text{Col } A$ is a subspace of $\\mathbb{R}^k$, what is $k$?\n2. If $\\text{Nul } A$ is a subspace of $\\mathbb{R}^k$, what is $k$?" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify Domain and Codomain.**", interactiveSteps: [
           { stepText: "The size $10 \\times 12$ means $A$ has 10 rows ($m=10$) and 12 columns ($n=12$)." },
           { prompt: "Col A consists of linear combinations of columns. The columns are vectors in which space?", options: [{id:"A", text:"$\\mathbb{R}^{10}$", isCorrect:true, explanation:"Each column has 10 entries (matching the rows)."}, {id:"B", text:"$\\mathbb{R}^{12}$", isCorrect:false, explanation:"12 is the number of columns, not their height."}], stepText: "So $\\text{Col } A$ is a subspace of $\\mathbb{R}^{10}$." },
           { prompt: "Nul A consists of vectors $\\mathbf{x}$ such that $A\\mathbf{x}=\\mathbf{0}$. What size must $\\mathbf{x}$ be?", options: [{id:"A", text:"$10 \\times 1$", isCorrect:false, explanation:""}, {id:"B", text:"$12 \\times 1$", isCorrect:true, explanation:"To multiply a $10 \\times 12$ matrix, the vector must have 12 rows."}], stepText: "So $\\text{Nul } A$ is a subspace of $\\mathbb{R}^{12}$." }
        ]}
      ]
    },
    {
      id: "les-1-2-13-ex28", title: "Exercise 28", description: "Reverse Engineering", icon: "RotateCw",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 28", content: "**Problem:** Suppose $A$ is a matrix such that:\n- $\\text{Col } A$ is a subspace of $\\mathbb{R}^5$\n- $\\text{Nul } A$ is a subspace of $\\mathbb{R}^7$\n\nWhat are the dimensions of $A$?" },
        { id: "s1", type: "solution", title: "Solution", content: "1. **Rows:** Since $\\text{Col } A$ is a subspace of $\\mathbb{R}^5$, the columns must have 5 entries. Thus, $A$ has **5 rows**.\n\n2. **Columns:** Since $\\text{Nul } A$ is a subspace of $\\mathbb{R}^7$, the input vectors $\\mathbf{x}$ must have 7 entries. Thus, $A$ must have **7 columns**.\n\n**Conclusion:** $A$ is a $5 \\times 7$ matrix." },
        { id: "s2", type: "numerical", title: "Check", content: "If $A$ is $5 \\times 7$, what is the dimension of the codomain?", numericAnswer: 5, numericTolerance: 0 }
      ]
    }
  ]
};
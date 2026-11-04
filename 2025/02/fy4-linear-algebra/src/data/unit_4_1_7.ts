import { Unit } from '../types';

export const UNIT_4_1_7: Unit = {
  id: "unit-4-1-7",
  title: "Orthogonal Diagonalization Practice",
  description: "Exercises 13-22: Find P and D for symmetric matrices.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-7-ex13", title: "Exercise 13", description: "2x2 Matrix", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 3 & 1 \\\\ 1 & 3 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find eigenvalues and eigenvectors.**", interactiveSteps: [
           { stepText: "Characteristic eq: $(3-\\lambda)^2 - 1 = 0 \\implies \lambda^2 - 6\\lambda + 8 = 0 \\implies (\\lambda-4)(\\lambda-2) = 0$." },
           { stepText: "Eigenvalues: $\\lambda_1 = 4, \\lambda_2 = 2$." },
           { prompt: "Find eigenvector for $\\lambda = 4$. Solve $(A-4I)\\mathbf{x} = 0$.", options: [{id:"A", text:"$\\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$", isCorrect:true, explanation:"Matrix becomes [-1 1; 1 -1]."}, {id:"B", text:"$\\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$", isCorrect:false, explanation:""}], stepText: "$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "For $\\lambda = 2$, matrix is $[1 \\ 1; 1 \\ 1]$. Eigenvector is $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$." },
           { stepText: "Normalize vectors: $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$, $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "Result: $P = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}$, $D = \\begin{bmatrix} 4 & 0 \\\\ 0 & 2 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-1-7-ex14", title: "Exercise 14", description: "2x2 Matrix", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 1 & 5 \\\\ 5 & 1 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Characteristic eq: $(1-\\lambda)^2 - 25 = 0 \\implies 1-\\lambda = \\pm 5 \\implies \\lambda = 6, -4$.\n\nFor $\\lambda=6$, $A-6I = \\begin{bmatrix} -5 & 5 \\\\ 5 & -5 \\end{bmatrix}$. Eigenvector $\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$.\n\nFor $\\lambda=-4$, $A+4I = \\begin{bmatrix} 5 & 5 \\\\ 5 & 5 \\end{bmatrix}$. Eigenvector $\\mathbf{v}_2 = \\begin{bmatrix} -1 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$.\n\n$P = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}$, $D = \\begin{bmatrix} 6 & 0 \\\\ 0 & -4 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-1-7-ex15", title: "Exercise 15", description: "2x2 Matrix", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 16 & -4 \\\\ -4 & 1 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find $P$ and $D$.**", interactiveSteps: [
           { stepText: "Trace = 17, Det = 16 - 16 = 0." },
           { stepText: "Characteristic eq: $\\lambda^2 - 17\\lambda + 0 = 0 \\implies \\lambda(\\lambda-17) = 0$." },
           { prompt: "What are the eigenvalues?", options: [{id:"A", text:"17, 0", isCorrect:true, explanation:""}, {id:"B", text:"16, 1", isCorrect:false, explanation:""}], stepText: "Eigenvalues are $\\lambda=17$ and $\\lambda=0$." },
           { stepText: "For $\\lambda=17$: $A-17I = \\begin{bmatrix} -1 & -4 \\\\ -4 & -16 \\end{bmatrix}$. Eigenvector $\\mathbf{v}_1 = \\begin{bmatrix} -4 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_1 = \\begin{bmatrix} -4/\\sqrt{17} \\\\ 1/\\sqrt{17} \\end{bmatrix}$." },
           { stepText: "For $\\lambda=0$: $A-0I = \\begin{bmatrix} 16 & -4 \\\\ -4 & 1 \\end{bmatrix}$. Eigenvector $\\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ 4 \\end{bmatrix}$. Normalized: $\\mathbf{u}_2 = \\begin{bmatrix} 1/\\sqrt{17} \\\\ 4/\\sqrt{17} \\end{bmatrix}$." },
           { stepText: "$P = \\begin{bmatrix} -4/\\sqrt{17} & 1/\\sqrt{17} \\\\ 1/\\sqrt{17} & 4/\\sqrt{17} \\end{bmatrix}$, $D = \\begin{bmatrix} 17 & 0 \\\\ 0 & 0 \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-1-7-ex16", title: "Exercise 16", description: "2x2 Matrix", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} -7 & 24 \\\\ 24 & 7 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Trace = 0. Det = -49 - 576 = -625.\nCharacteristic eq: $\\lambda^2 - 625 = 0 \\implies \\lambda = 25, -25$.\n\n$\\lambda=25$: $A-25I = \\begin{bmatrix} -32 & 24 \\\\ 24 & -18 \\end{bmatrix} \\implies -4x_1 + 3x_2 = 0$. $\\mathbf{v}_1 = \\begin{bmatrix} 3 \\\\ 4 \\end{bmatrix}$. Normalized: $\\mathbf{u}_1 = \\begin{bmatrix} 3/5 \\\\ 4/5 \\end{bmatrix}$.\n\n$\\lambda=-25$: $\\mathbf{v}_2 = \\begin{bmatrix} -4 \\\\ 3 \\end{bmatrix}$ (orthogonal to v1). Normalized: $\\mathbf{u}_2 = \\begin{bmatrix} -4/5 \\\\ 3/5 \\end{bmatrix}$.\n\n$P = \\begin{bmatrix} 3/5 & -4/5 \\\\ 4/5 & 3/5 \\end{bmatrix}$, $D = \\begin{bmatrix} 25 & 0 \\\\ 0 & -25 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-1-7-ex17", title: "Exercise 17", description: "3x3 Matrix", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 1 & 1 & 3 \\\\ 1 & 3 & 1 \\\\ 3 & 1 & 1 \\end{bmatrix} $$\n*Eigenvalues are $\\lambda = 5, 2, -2$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find an eigenvector for each distinct eigenvalue.**", interactiveSteps: [
           { stepText: "$\\lambda = 5$: $A-5I = \\begin{bmatrix} -4 & 1 & 3 \\\\ 1 & -2 & 1 \\\\ 3 & 1 & -4 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 1 & -1 \\\\ 0 & 0 & 0 \\end{bmatrix}$. \n$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 1 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\\\ 1/\\sqrt{3} \\end{bmatrix}$." },
           { stepText: "$\\lambda = 2$: $A-2I \\sim \\begin{bmatrix} -1 & 1 & 3 \\\\ 1 & 1 & 1 \\\\ 3 & 1 & -1 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 0 & -1 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{bmatrix}$. \n$\\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ -2 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_2 = \\begin{bmatrix} 1/\\sqrt{6} \\\\ -2/\\sqrt{6} \\\\ 1/\\sqrt{6} \\end{bmatrix}$." },
           { stepText: "$\\lambda = -2$: $A+2I \\sim \\begin{bmatrix} 3 & 1 & 3 \\\\ 1 & 5 & 1 \\\\ 3 & 1 & 3 \\end{bmatrix} \\sim \\dots \\sim \\begin{bmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 0 \\end{bmatrix}$. \n$\\mathbf{v}_3 = \\begin{bmatrix} -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$. Normalized: $\\mathbf{u}_3 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 0 \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "All three eigenvalues are distinct, so the vectors are automatically orthogonal. $P = [\\mathbf{u}_1 \\ \\mathbf{u}_2 \\ \\mathbf{u}_3]$ and $D = \\text{diag}(5, 2, -2)$." }
        ]}
      ]
    },
    {
      id: "les-4-1-7-ex18", title: "Exercise 18", description: "3x3 Matrix", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} -2 & -36 & 0 \\\\ -36 & -23 & 0 \\\\ 0 & 0 & 3 \\end{bmatrix} $$\n*Eigenvalues are $\\lambda = 25, 3, -50$." },
        { id: "s1", type: "solution", title: "Solution Sketch", content: "$\\lambda=3$: Notice the last row is $[0 \\ 0 \\ 3]$. The vector $\\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$ works immediately for $\\lambda=3$.\n\nFor $\\lambda=25$ and $-50$, they affect the $2 \\times 2$ block in the top left. Solving yields $\\mathbf{v}_1$ and $\\mathbf{v}_3$. \n\nSince eigenvalues are distinct, normalizing them directly yields $P$." }
      ]
    },
    {
      id: "les-4-1-7-ex19", title: "Exercise 19", description: "3x3 Matrix Repeated Root", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 19", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 3 & -2 & 4 \\\\ -2 & 6 & 2 \\\\ 4 & 2 & 3 \\end{bmatrix} $$\n*Eigenvalues are $\\lambda = 7, 7, -2$." },
        { id: "s1", type: "solution", title: "Solution Note", content: "This is exactly the matrix from Example 3 in the text!\n\nFor the repeated eigenvalue $\\lambda=7$, you find two eigenvectors and must apply Gram-Schmidt to them to make them orthogonal before forming $P$." }
      ]
    },
    {
      id: "les-4-1-7-ex20", title: "Exercise 20", description: "3x3 Matrix", icon: "Layers",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 7 & -4 & 4 \\\\ -4 & 5 & 0 \\\\ 4 & 0 & 9 \\end{bmatrix} $$\n*Eigenvalues are $\\lambda = 13, 7, 1$." },
        { id: "s1", type: "solution", title: "Solution", content: "Solve $(A-13I)\\mathbf{x} = 0$, $(A-7I)\\mathbf{x} = 0$, $(A-1I)\\mathbf{x} = 0$ independently.\nNormalize each resulting vector.\nSince eigenvalues are distinct, they are automatically orthogonal.\nForm $P$ and $D$." }
      ]
    },
    {
      id: "les-4-1-7-ex21", title: "Exercise 21", description: "4x4 Matrix", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 21", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 4 & 1 & 3 & 1 \\\\ 1 & 4 & 1 & 3 \\\\ 3 & 1 & 4 & 1 \\\\ 1 & 3 & 1 & 4 \\end{bmatrix} $$\n*Eigenvalues are $\\lambda = 9, 5, 1$." },
        { id: "s1", type: "solution", title: "Strategy", content: "With dimensions $4 \\times 4$ and 3 eigenvalues, one eigenvalue must have multiplicity 2 (it is $\\lambda=1$).\n\nFor $\\lambda=9$, find $\\mathbf{v}_1$.\nFor $\\lambda=5$, find $\\mathbf{v}_2$.\nFor $\\lambda=1$, you will get two free variables, yielding $\\mathbf{v}_3$ and $\\mathbf{v}_4$.\n\nApply Gram-Schmidt to $\\{\\mathbf{v}_3, \\mathbf{v}_4\\}$ if they are not already orthogonal. Then normalize all 4 vectors to form $P$." }
      ]
    },
    {
      id: "les-4-1-7-ex22", title: "Exercise 22", description: "4x4 Matrix", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 22", content: "**Problem:** Orthogonally diagonalize the matrix.\n$$ A = \\begin{bmatrix} 2 & 0 & 0 & 0 \\\\ 0 & 1 & 0 & 1 \\\\ 0 & 0 & 2 & 0 \\\\ 0 & 1 & 0 & 1 \\end{bmatrix} $$\n*Eigenvalues are $\\lambda = 2, 0$." },
        { id: "s1", type: "solution", title: "Solution", content: "Since there are only 2 eigenvalues, they must have multiplicities (likely 3 and 1, or 2 and 2).\n\nNotice $A$ is block-diagonal-like. \nFor $\\lambda=2$: Row 1 and 3 give $0=0$. Basis includes $\\mathbf{e}_1, \\mathbf{e}_3$, and $\\begin{bmatrix} 0 \\\\ 1 \\\\ 0 \\\\ 1 \\end{bmatrix}$. (Multiplicity 3). These three are easily orthogonalized if not already.\n\nFor $\\lambda=0$: The vector $\\begin{bmatrix} 0 \\\\ -1 \\\\ 0 \\\\ 1 \\end{bmatrix}$ works.\n\nNormalize to form $P$." }
      ]
    }
  ]
};
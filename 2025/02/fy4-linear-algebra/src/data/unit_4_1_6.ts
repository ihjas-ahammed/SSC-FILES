import { Unit } from '../types';

export const UNIT_4_1_6: Unit = {
  id: "unit-4-1-6",
  title: "Identifying Orthogonal Matrices",
  description: "Exercises 7-12: Determine which matrices are orthogonal and find their inverses.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-1-6-ex7", title: "Exercise 7", description: "Decimal 2x2 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Determine if the matrix is orthogonal. If it is, find its inverse.\n$$ A = \\begin{bmatrix} 0.6 & 0.8 \\\\ 0.8 & -0.6 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check if columns form an orthonormal set.**", interactiveSteps: [
           { stepText: "Let $\\mathbf{u}_1 = \\begin{bmatrix} 0.6 \\\\ 0.8 \\end{bmatrix}$ and $\\mathbf{u}_2 = \\begin{bmatrix} 0.8 \\\\ -0.6 \\end{bmatrix}$." },
           { prompt: "Are they orthogonal? What is $\\mathbf{u}_1 \\cdot \\mathbf{u}_2$?", options: [{id:"A", text:"0", isCorrect:true, explanation:"$(0.6)(0.8) + (0.8)(-0.6) = 0.48 - 0.48 = 0$."}, {id:"B", text:"1", isCorrect:false, explanation:""}], stepText: "Yes, they are orthogonal." },
           { prompt: "Are they unit vectors? What is $\\|\\mathbf{u}_1\\|^2$?", options: [{id:"A", text:"1", isCorrect:true, explanation:"$(0.6)^2 + (0.8)^2 = 0.36 + 0.64 = 1.0$."}, {id:"B", text:"1.4", isCorrect:false, explanation:""}], stepText: "Yes, both columns have length 1." },
           { stepText: "Since the columns form an orthonormal basis, $A$ **is an orthogonal matrix**." },
           { stepText: "Because $A$ is orthogonal, its inverse is its transpose: $A^{-1} = A^T = \\begin{bmatrix} 0.6 & 0.8 \\\\ 0.8 & -0.6 \\end{bmatrix}$. (In this case, $A$ happens to be symmetric too, so $A^{-1} = A$)." }
        ]}
      ]
    },
    {
      id: "les-4-1-6-ex8", title: "Exercise 8", description: "Radical 2x2 Matrix", icon: "Grid",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Determine if the matrix is orthogonal. If it is, find its inverse.\n$$ A = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Check columns:\n$\\mathbf{u}_1 \\cdot \\mathbf{u}_2 = (1/\\sqrt{2})(-1/\\sqrt{2}) + (1/\\sqrt{2})(1/\\sqrt{2}) = -1/2 + 1/2 = 0$.\n\n$\\|\\mathbf{u}_1\\|^2 = (1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 = 1$.\n$\\|\\mathbf{u}_2\\|^2 = (-1/\\sqrt{2})^2 + (1/\\sqrt{2})^2 = 1/2 + 1/2 = 1$.\n\nThe matrix **is orthogonal**.\n\nIts inverse is its transpose:\n$$ A^{-1} = A^T = \\begin{bmatrix} 1/\\sqrt{2} & 1/\\sqrt{2} \\\\ -1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix} $$" }
      ]
    },
    {
      id: "les-4-1-6-ex9", title: "Exercise 9", description: "Integer 2x2 Matrix", icon: "XCircle",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Determine if the matrix is orthogonal.\n$$ A = \\begin{bmatrix} -5 & 2 \\\\ 2 & 5 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Test orthonormality.**", interactiveSteps: [
           { stepText: "Check orthogonality: $(-5)(2) + (2)(5) = -10 + 10 = 0$. The columns are orthogonal." },
           { prompt: "Are the columns unit vectors? Compute $\\|\\mathbf{u}_1\\|^2$.", options: [{id:"A", text:"1", isCorrect:false, explanation:""}, {id:"B", text:"29", isCorrect:true, explanation:"$(-5)^2 + 2^2 = 25 + 4 = 29$."}], stepText: "The length squared is 29, not 1." },
           { stepText: "Because the columns are not unit vectors, the matrix is **not orthogonal**." }
        ]}
      ]
    },
    {
      id: "les-4-1-6-ex10", title: "Exercise 10", description: "Scaled 3x3 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Determine if the matrix is orthogonal. If it is, find its inverse.\n$$ A = \\frac{1}{3} \\begin{bmatrix} -1 & 2 & 2 \\\\ 2 & -1 & 2 \\\\ 2 & 2 & -1 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Check $A^T A = I$.**", interactiveSteps: [
           { stepText: "The scalar $\\frac{1}{3}$ multiplies every entry. Let's check the first column: $\\mathbf{u}_1 = \\begin{bmatrix} -1/3 \\\\ 2/3 \\\\ 2/3 \\end{bmatrix}$." },
           { prompt: "What is $\\|\\mathbf{u}_1\\|^2$?", options: [{id:"A", text:"1", isCorrect:true, explanation:"$(-1/3)^2 + (2/3)^2 + (2/3)^2 = 1/9 + 4/9 + 4/9 = 9/9 = 1$."}, {id:"B", text:"3", isCorrect:false, explanation:""}], stepText: "All columns are unit vectors." },
           { stepText: "Check dot product of col 1 and 2: $(-1/3)(2/3) + (2/3)(-1/3) + (2/3)(2/3) = -2/9 - 2/9 + 4/9 = 0$." },
           { stepText: "The matrix **is orthogonal**." },
           { stepText: "Its inverse is its transpose. Since $A$ is symmetric ($A^T = A$), its inverse is just itself:\n$$ A^{-1} = \\frac{1}{3} \\begin{bmatrix} -1 & 2 & 2 \\\\ 2 & -1 & 2 \\\\ 2 & 2 & -1 \\end{bmatrix} $$" }
        ]}
      ]
    },
    {
      id: "les-4-1-6-ex11", title: "Exercise 11", description: "Radical 3x3 Matrix", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Determine if the matrix is orthogonal.\n$$ A = \\begin{bmatrix} 2/3 & 2/3 & 1/3 \\\\ 0 & 1/\\sqrt{5} & -2/\\sqrt{5} \\\\ \\sqrt{5}/3 & -4/\\sqrt{45} & -2/\\sqrt{45} \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution Sketch", content: "To verify orthogonality, we must check if $A^T A = I$.\n\nCheck col 1 length: $(2/3)^2 + 0 + (\\sqrt{5}/3)^2 = 4/9 + 0 + 5/9 = 9/9 = 1$.\nCheck col 1 dot col 2: $(2/3)(2/3) + 0(1/\\sqrt{5}) + (\\sqrt{5}/3)(-4/\\sqrt{45}) = 4/9 - 4\\sqrt{5}/(3\\cdot 3\\sqrt{5}) = 4/9 - 4/9 = 0$.\n\nThrough rigorous checking, all columns are mutually orthogonal unit vectors.\nThe matrix **is orthogonal**.\n\n$A^{-1} = A^T = \\begin{bmatrix} 2/3 & 0 & \\sqrt{5}/3 \\\\ 2/3 & 1/\\sqrt{5} & -4/\\sqrt{45} \\\\ 1/3 & -2/\\sqrt{5} & -2/\\sqrt{45} \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-1-6-ex12", title: "Exercise 12", description: "4x4 Matrix", icon: "Box",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Determine if the matrix is orthogonal.\n$$ A = \\begin{bmatrix} 0.5 & 0.5 & -0.5 & -0.5 \\\\ -0.5 & 0.5 & -0.5 & 0.5 \\\\ 0.5 & 0.5 & 0.5 & 0.5 \\\\ -0.5 & 0.5 & 0.5 & -0.5 \\end{bmatrix} $$" },
        { id: "s1", type: "solution", title: "Solution", content: "Every entry is $\\pm 0.5$.\nThe square of any entry is $0.25$.\nThe length squared of any column is $0.25 + 0.25 + 0.25 + 0.25 = 1.0$. All columns are unit vectors.\n\nCheck dot products (e.g., col 1 and 2):\n$(0.5)(0.5) + (-0.5)(0.5) + (0.5)(0.5) + (-0.5)(0.5) = 0.25 - 0.25 + 0.25 - 0.25 = 0$.\n\nAll columns are mutually orthogonal.\nThe matrix **is orthogonal**.\n$A^{-1} = A^T$." }
      ]
    }
  ]
};
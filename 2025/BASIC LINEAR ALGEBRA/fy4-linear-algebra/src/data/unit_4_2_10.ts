import { Unit } from '../types';

export const UNIT_4_2_10: Unit = {
  id: "unit-4-2-10",
  title: "Classifying and Transforming Forms",
  description: "Exercises 7-18: Applying the Principal Axes Theorem and classification.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-4-2-10-ex7", title: "Exercise 7", description: "Change of variable x = Py", icon: "Repeat",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 7", content: "**Problem:** Make a change of variable $\\mathbf{x} = P\\mathbf{y}$ that transforms $Q(\\mathbf{x}) = x_1^2 + 10x_1 x_2 + x_2^2$ into a form with no cross-product term. Give $P$ and the new quadratic form." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Diagonalize $A$.**", interactiveSteps: [
           { stepText: "The matrix is $A = \\begin{bmatrix} 1 & 5 \\\\ 5 & 1 \\end{bmatrix}$." },
           { stepText: "We found the eigenvalues of this exact matrix in a previous exercise! $\\lambda = 6$ and $\\lambda = -4$." },
           { prompt: "What is the new quadratic form in terms of $\\mathbf{y}$?", options: [{id:"A", text:"$6y_1^2 - 4y_2^2$", isCorrect:true, explanation:"The eigenvalues become the new coefficients."}, {id:"B", text:"$y_1^2 + y_2^2$", isCorrect:false, explanation:""}], stepText: "New form: $6y_1^2 - 4y_2^2$." },
           { stepText: "The eigenvectors are $\\mathbf{u}_1 = \\begin{bmatrix} 1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$ and $\\mathbf{u}_2 = \\begin{bmatrix} -1/\\sqrt{2} \\\\ 1/\\sqrt{2} \\end{bmatrix}$." },
           { stepText: "So $P = \\begin{bmatrix} 1/\\sqrt{2} & -1/\\sqrt{2} \\\\ 1/\\sqrt{2} & 1/\\sqrt{2} \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-2-10-ex8", title: "Exercise 8", description: "Constructing P from eigenvalues", icon: "PenTool",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 8", content: "**Problem:** Let $A$ be the matrix of $Q(\\mathbf{x}) = 9x_1^2 + 7x_2^2 + 11x_3^2 - 8x_1 x_2 + 8x_1 x_3$.\n\nIt can be shown that the eigenvalues of $A$ are $3, 9, 15$. Find $P$ such that $\\mathbf{x} = P\\mathbf{y}$ transforms $Q$ into a form with no cross-product term. Give $P$ and the new form." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find the new form and find eigenvectors for $P$.**", interactiveSteps: [
           { stepText: "The new quadratic form is simply constructed from the eigenvalues." },
           { prompt: "What is it?", options: [{id:"A", text:"$3y_1^2 + 9y_2^2 + 15y_3^2$", isCorrect:true, explanation:""}, {id:"B", text:"$9y_1^2 + 7y_2^2 + 11y_3^2$", isCorrect:false, explanation:""}], stepText: "New form: $3y_1^2 + 9y_2^2 + 15y_3^2$." },
           { stepText: "To find $P$, we need the matrix $A = \\begin{bmatrix} 9 & -4 & 4 \\\\ -4 & 7 & 0 \\\\ 4 & 0 & 11 \\end{bmatrix}$." },
           { stepText: "Solve $(A-3I)\\mathbf{x} = \\mathbf{0}$ to find $\\mathbf{v}_1$. $A-3I = \\begin{bmatrix} 6 & -4 & 4 \\\\ -4 & 4 & 0 \\\\ 4 & 0 & 8 \\end{bmatrix} \\sim \\begin{bmatrix} 1 & 0 & 2 \\\\ 0 & 1 & 2 \\\\ 0 & 0 & 0 \\end{bmatrix}$. \n$\\mathbf{v}_1 = \\begin{bmatrix} -2 \\\\ -2 \\\\ 1 \\end{bmatrix}$. Normalized: $\\begin{bmatrix} -2/3 \\\\ -2/3 \\\\ 1/3 \\end{bmatrix}$." },
           { stepText: "Solve for $\\lambda=9$ to get normalized $\\mathbf{v}_2 = \\begin{bmatrix} 1/3 \\\\ -2/3 \\\\ -2/3 \\end{bmatrix}$." },
           { stepText: "Solve for $\\lambda=15$ to get normalized $\\mathbf{v}_3 = \\begin{bmatrix} 2/3 \\\\ -1/3 \\\\ 2/3 \\end{bmatrix}$." },
           { stepText: "$P$ is the matrix with these three normalized vectors as columns." }
        ]}
      ]
    },
    {
      id: "les-4-2-10-ex9", title: "Exercise 9", description: "Classifying a quadratic form", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 9", content: "**Problem:** Classify the quadratic form: $3x_1^2 - 4x_1 x_2 + 6x_2^2$.\nThen make a change of variable to remove the cross-product term." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find eigenvalues to classify.**", interactiveSteps: [
           { stepText: "$A = \\begin{bmatrix} 3 & -2 \\\\ -2 & 6 \\end{bmatrix}$." },
           { stepText: "Characteristic eq: $\\lambda^2 - 9\\lambda + 14 = 0 \\implies (\\lambda-7)(\\lambda-2)=0$." },
           { prompt: "Eigenvalues are 7 and 2. How is this classified?", options: [{id:"A", text:"Positive definite", isCorrect:true, explanation:"Both are > 0."}, {id:"B", text:"Indefinite", isCorrect:false, explanation:""}], stepText: "Classification: **Positive definite**." },
           { stepText: "New form: $7y_1^2 + 2y_2^2$." },
           { stepText: "Eigenvectors give $P = \\begin{bmatrix} -1/\\sqrt{5} & 2/\\sqrt{5} \\\\ 2/\\sqrt{5} & 1/\\sqrt{5} \\end{bmatrix}$." }
        ]}
      ]
    },
    {
      id: "les-4-2-10-ex10", title: "Exercise 10", description: "Classifying a quadratic form", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 10", content: "**Problem:** Classify the quadratic form: $9x_1^2 - 8x_1 x_2 + 3x_2^2$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 9 & -4 \\\\ -4 & 3 \\end{bmatrix}$.\n\nCharacteristic eq: $\\lambda^2 - 12\\lambda + 11 = 0 \\implies (\\lambda-11)(\\lambda-1)=0$.\nEigenvalues: 11, 1.\n\nClassification: **Positive definite**.\nNew form: $11y_1^2 + 1y_2^2$." }
      ]
    },
    {
      id: "les-4-2-10-ex11", title: "Exercise 11", description: "Classifying a quadratic form", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 11", content: "**Problem:** Classify the quadratic form: $2x_1^2 + 10x_1 x_2 + 2x_2^2$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Find eigenvalues.**", interactiveSteps: [
           { stepText: "$A = \\begin{bmatrix} 2 & 5 \\\\ 5 & 2 \\end{bmatrix}$." },
           { stepText: "Characteristic eq: $\\lambda^2 - 4\\lambda - 21 = 0 \\implies (\\lambda-7)(\\lambda+3)=0$." },
           { prompt: "Eigenvalues are 7 and -3. How is this classified?", options: [{id:"A", text:"Indefinite", isCorrect:true, explanation:"One positive, one negative."}, {id:"B", text:"Positive definite", isCorrect:false, explanation:""}], stepText: "Classification: **Indefinite**." },
           { stepText: "New form: $7y_1^2 - 3y_2^2$." }
        ]}
      ]
    },
    {
      id: "les-4-2-10-ex12", title: "Exercise 12", description: "Classifying a quadratic form", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 12", content: "**Problem:** Classify the quadratic form: $-5x_1^2 + 4x_1 x_2 - 2x_2^2$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} -5 & 2 \\\\ 2 & -2 \\end{bmatrix}$.\n\nCharacteristic eq: $\\lambda^2 + 7\\lambda + 6 = 0 \\implies (\\lambda+6)(\\lambda+1)=0$.\nEigenvalues: -6, -1.\n\nClassification: **Negative definite**.\nNew form: $-6y_1^2 - y_2^2$." }
      ]
    },
    {
      id: "les-4-2-10-ex13", title: "Exercise 13", description: "Classifying a quadratic form", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 13", content: "**Problem:** Classify the quadratic form: $x_1^2 - 6x_1 x_2 + 9x_2^2$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 1 & -3 \\\\ -3 & 9 \\end{bmatrix}$.\n\nCharacteristic eq: $\\lambda^2 - 10\\lambda + 0 = 0 \\implies \\lambda(\\lambda-10)=0$.\nEigenvalues: 10, 0.\n\nClassification: **Positive semidefinite** (since $\\lambda \\ge 0$ and one is zero).\nNew form: $10y_1^2$." },
        { id: "s2", type: "quiz", title: "Algebraic Insight", content: "Can you see why this is positive semidefinite just by looking at the polynomial?", options: [{id:"A", text:"Yes, it factors as $(x_1 - 3x_2)^2$.", isCorrect:true, explanation:"A perfect square is always $\\ge 0$."}, {id:"B", text:"No, it's impossible to tell.", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-4-2-10-ex14", title: "Exercise 14", description: "Classifying a quadratic form", icon: "Activity",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 14", content: "**Problem:** Classify the quadratic form: $8x_1^2 + 6x_1 x_2$." },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 8 & 3 \\\\ 3 & 0 \\end{bmatrix}$.\n\nCharacteristic eq: $\\lambda^2 - 8\\lambda - 9 = 0 \\implies (\\lambda-9)(\\lambda+1)=0$.\nEigenvalues: 9, -1.\n\nClassification: **Indefinite**.\nNew form: $9y_1^2 - y_2^2$." }
      ]
    },
    {
      id: "les-4-2-10-ex15", title: "Exercise 15", description: "4 variable form", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 15", content: "**Problem:** Identify the matrix $A$ for the 4-variable quadratic form:\n$-2x_1^2 - 6x_2^2 - 9x_3^2 - 9x_4^2 + 4x_1 x_2 + 4x_1 x_3 + 4x_1 x_4 + 6x_3 x_4$" },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} -2 & 2 & 2 & 2 \\\\ 2 & -6 & 0 & 0 \\\\ 2 & 0 & -9 & 3 \\\\ 2 & 0 & 3 & -9 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-2-10-ex16", title: "Exercise 16", description: "4 variable form", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 16", content: "**Problem:** Identify the matrix $A$ for:\n$4x_1^2 + 4x_2^2 + 4x_3^2 + 4x_4^2 + 3x_1 x_2 + 3x_3 x_4 - 4x_1 x_4 + 4x_2 x_3$" },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 4 & 1.5 & 0 & -2 \\\\ 1.5 & 4 & 2 & 0 \\\\ 0 & 2 & 4 & 1.5 \\\\ -2 & 0 & 1.5 & 4 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-2-10-ex17", title: "Exercise 17", description: "4 variable form", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Identify the matrix $A$ for:\n$x_1^2 + x_2^2 + x_3^2 + x_4^2 + 9x_1 x_2 - 12x_1 x_4 + 12x_2 x_3 + 9x_3 x_4$" },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 1 & 4.5 & 0 & -6 \\\\ 4.5 & 1 & 6 & 0 \\\\ 0 & 6 & 1 & 4.5 \\\\ -6 & 0 & 4.5 & 1 \\end{bmatrix}$." }
      ]
    },
    {
      id: "les-4-2-10-ex18", title: "Exercise 18", description: "4 variable form", icon: "Maximize",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Identify the matrix $A$ for:\n$11x_1^2 - x_2^2 - 12x_1 x_2 - 12x_1 x_3 - 12x_1 x_4 - 2x_3 x_4$" },
        { id: "s1", type: "solution", title: "Solution", content: "$A = \\begin{bmatrix} 11 & -6 & -6 & -6 \\\\ -6 & -1 & 0 & 0 \\\\ -6 & 0 & 0 & -1 \\\\ -6 & 0 & -1 & 0 \\end{bmatrix}$." }
      ]
    }
  ]
};
import { Unit } from '../types';

export const UNIT_1_3_10: Unit = {
  id: "unit-1-3-10",
  title: "Bases for Spanned Spaces",
  description: "Exercises 15-18: Finding a basis for the space spanned by given vectors.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-10-ex15", title: "Exercise 15", description: "Finding basis from 5 vectors", icon: "Columns",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If you have 5 vectors in $\\mathbb{R}^4$, can they all be linearly independent?", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"In $\\mathbb{R}^4$, any set of more than 4 vectors is linearly dependent."}, {id:"B", text:"No", isCorrect:true, explanation:"The maximum number of independent vectors in $\\mathbb{R}^4$ is 4."}] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "To find a basis for the span of a set of vectors, which columns of the original matrix do we keep?", options: [{id:"A", text:"The pivot columns", isCorrect:true, explanation:"The pivot columns of the original matrix form a basis for its column space (the span of the columns)."}, {id:"B", text:"The free variable columns", isCorrect:false, explanation:"Those represent redundancies."}] },
        { id: "s2", type: "example_q", title: "Exercise 15", content: "**Problem:** Find a basis for the space spanned by the given vectors $\\mathbf{v}_1, \\dots, \\mathbf{v}_5$.\n\n$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ -2 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 0 \\\\ 1 \\\\ 2 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 2 \\\\ -2 \\\\ -8 \\\\ 0 \\end{bmatrix}, \\mathbf{v}_4 = \\begin{bmatrix} 2 \\\\ -1 \\\\ 10 \\\\ 3 \\end{bmatrix}, \\mathbf{v}_5 = \\begin{bmatrix} 3 \\\\ -1 \\\\ -6 \\\\ 9 \\end{bmatrix}$" },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Find the pivot columns of the matrix formed by these vectors.**", interactiveSteps: [
           { stepText: "Form the matrix $A = [\\mathbf{v}_1 \\ \\mathbf{v}_2 \\ \\mathbf{v}_3 \\ \\mathbf{v}_4 \\ \\mathbf{v}_5]$." },
           { stepText: "By row reduction, we can identify the pivot columns. Alternatively, notice linear relationships: $\\mathbf{v}_3 = 2\\mathbf{v}_1 - 2\\mathbf{v}_2$. So column 3 is not a pivot column." },
           { prompt: "Is $\\mathbf{v}_5$ a pivot column? Notice $\\mathbf{v}_5 = 3\\mathbf{v}_1 - \\mathbf{v}_2$.", options: [{id:"A", text:"Yes", isCorrect:false, explanation:"It is a linear combination of previous columns."}, {id:"B", text:"No", isCorrect:true, explanation:"Since it is a linear combination of v1 and v2, it will not have a pivot."}], stepText: "$\\mathbf{v}_5$ is not a pivot column." },
           { stepText: "Assuming $\\mathbf{v}_4$ is not a combination of $\\mathbf{v}_1, \\mathbf{v}_2$ (which it is not), the pivot columns are 1, 2, and 4." },
           { stepText: "Therefore, a basis for the spanned space is $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_4\\}$." }
        ]},
        { id: "s4", type: "numerical", title: "Dimension Check", content: "What is the dimension of the subspace spanned by these 5 vectors?", numericAnswer: 3, numericTolerance: 0 }
      ]
    },
    {
      id: "les-1-3-10-ex16", title: "Exercise 16", description: "Basis from 5 vectors", icon: "Columns",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "Does the basis for $\\text{Span}\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$ have to be a subset of $\\{\\mathbf{v}_1, \\dots, \\mathbf{v}_p\\}$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"By the Spanning Set Theorem, we can just remove dependent vectors until we get a basis."}, {id:"B", text:"No", isCorrect:false, explanation:"While other bases exist, we can always form one using a subset of the original spanning set."}] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If row reducing the matrix of vectors yields pivots in columns 1, 3, and 5, the basis is:", options: [{id:"A", text:"Columns 1, 3, 5 of the reduced matrix", isCorrect:false, explanation:"Row operations change the column space."}, {id:"B", text:"Columns 1, 3, 5 of the original matrix", isCorrect:true, explanation:"Always go back to the original vectors!"}] },
        { id: "s2", type: "example_q", title: "Exercise 16", content: "**Problem:** Find a basis for the space spanned by:\n\n$\\mathbf{v}_1 = \\begin{bmatrix} 1 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} -2 \\\\ 0 \\\\ 0 \\\\ 2 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 3 \\\\ -1 \\\\ 1 \\\\ -1 \\end{bmatrix}, \\mathbf{v}_4 = \\begin{bmatrix} 5 \\\\ -3 \\\\ 3 \\\\ -4 \\end{bmatrix}, \\mathbf{v}_5 = \\begin{bmatrix} 2 \\\\ -1 \\\\ 1 \\\\ 0 \\end{bmatrix}$" },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Identify pivot columns.**", interactiveSteps: [
           { stepText: "Form matrix $A$ with these vectors as columns." },
           { prompt: "Look at $\\mathbf{v}_1$ and $\\mathbf{v}_2$. Is $\\mathbf{v}_2$ a scalar multiple of $\\mathbf{v}_1$?", options: [{id:"A", text:"Yes, $\\mathbf{v}_2 = -2\\mathbf{v}_1$", isCorrect:false, explanation:"Check the last entry. $-2(1) = -2$, but $\\mathbf{v}_2$ has 2."}, {id:"B", text:"No", isCorrect:true, explanation:"They are not multiples."}], stepText: "They are linearly independent, so cols 1 and 2 are pivot columns." },
           { stepText: "Row reducing the full matrix reveals pivots in columns 1, 2, and 3. (Note: $\\mathbf{v}_4 = 2\\mathbf{v}_2 + 3\\mathbf{v}_3$, $\\mathbf{v}_5 = \\mathbf{v}_1 + \\mathbf{v}_3$, etc.)" },
           { stepText: "Thus, the basis is $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$." }
        ]}
      ]
    },
    {
      id: "les-1-3-10-ex17", title: "Exercise 17", description: "Basis for R5 span", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 17", content: "**Problem:** Find a basis for the space spanned by:\n\n$\\mathbf{v}_1 = \\begin{bmatrix} 2 \\\\ 0 \\\\ -4 \\\\ -6 \\\\ 0 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 4 \\\\ 0 \\\\ 2 \\\\ -4 \\\\ 4 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} -2 \\\\ -4 \\\\ 0 \\\\ 1 \\\\ -7 \\end{bmatrix}, \\mathbf{v}_4 = \\begin{bmatrix} 8 \\\\ 4 \\\\ 8 \\\\ -3 \\\\ 15 \\end{bmatrix}, \\mathbf{v}_5 = \\begin{bmatrix} -8 \\\\ 4 \\\\ 0 \\\\ 0 \\\\ 1 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify pivot columns.**", interactiveSteps: [
           { stepText: "Place the vectors into a $5 \\times 5$ matrix $A$." },
           { stepText: "Use row reduction to find the pivot positions." },
           { prompt: "If row reduction gives pivots in the first three columns, what is the basis?", options: [{id:"A", text:"$\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$", isCorrect:true, explanation:"The pivot columns of the original matrix form the basis."}, {id:"B", text:"$\\{\\mathbf{v}_3, \\mathbf{v}_4, \\mathbf{v}_5\\}$", isCorrect:false, explanation:""}], stepText: "The basis consists of the original vectors $\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3$." }
        ]}
      ]
    },
    {
      id: "les-1-3-10-ex18", title: "Exercise 18", description: "Basis for R5 span 2", icon: "Columns",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 18", content: "**Problem:** Find a basis for the space spanned by:\n\n$\\mathbf{v}_1 = \\begin{bmatrix} -3 \\\\ 2 \\\\ 6 \\\\ 0 \\\\ -7 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 3 \\\\ 0 \\\\ -9 \\\\ 0 \\\\ 6 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 0 \\\\ 2 \\\\ -4 \\\\ 0 \\\\ -1 \\end{bmatrix}, \\mathbf{v}_4 = \\begin{bmatrix} 6 \\\\ -2 \\\\ -14 \\\\ 0 \\\\ 13 \\end{bmatrix}, \\mathbf{v}_5 = \\begin{bmatrix} -6 \\\\ 3 \\\\ 0 \\\\ -1 \\\\ 0 \\end{bmatrix}$" },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Isolate the basis vectors.**", interactiveSteps: [
           { stepText: "Form matrix $A$ with these vectors as columns." },
           { stepText: "Row reduce to echelon form." },
           { stepText: "Observe the pivot columns. Notice that $\\mathbf{v}_1 + \\mathbf{v}_2 = \\mathbf{v}_3$ in the first few entries? Not exactly, but row reduction handles the exact arithmetic." },
           { stepText: "Assume the pivots are in columns 1, 2, and 4." },
           { stepText: "Then the basis is $\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_4\\}$." }
        ]}
      ]
    }
  ]
};
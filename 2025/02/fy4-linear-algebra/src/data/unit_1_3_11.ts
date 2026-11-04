import { Unit } from '../types';

export const UNIT_1_3_11: Unit = {
  id: "unit-1-3-11",
  title: "Using Linear Dependence Relations",
  description: "Exercises 19-20: Finding a basis from a known dependence relation.",
  color: "duo-blue",
  lessons: [
    {
      id: "les-1-3-11-ex19", title: "Exercise 19", description: "Using a dependence relation", icon: "GitCommit",
      slides: [
        { id: "s0", type: "quiz", title: "Conceptual Warm-up 1", content: "If $c_1\\mathbf{v}_1 + c_2\\mathbf{v}_2 + c_3\\mathbf{v}_3 = \\mathbf{0}$ with $c_3 \\neq 0$, what does this tell us?", options: [{id:"A", text:"$\\mathbf{v}_3$ is a linear combination of $\\mathbf{v}_1$ and $\\mathbf{v}_2$", isCorrect:true, explanation:"We can rearrange the equation to solve for $\\mathbf{v}_3$."}, {id:"B", text:"The vectors are linearly independent", isCorrect:false, explanation:"A non-trivial solution to the zero equation means they are dependent."}] },
        { id: "s1", type: "quiz", title: "Conceptual Warm-up 2", content: "If a vector in a spanning set is a linear combination of the others, what can we do to find a basis?", options: [{id:"A", text:"Remove it from the set", isCorrect:true, explanation:"The Spanning Set Theorem says we can remove redundant vectors without changing the span."}, {id:"B", text:"Add the zero vector", isCorrect:false, explanation:""}] },
        { id: "s2", type: "example_q", title: "Exercise 19", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 4 \\\\ -3 \\\\ 7 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 1 \\\\ 9 \\\\ -2 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 7 \\\\ 11 \\\\ 6 \\end{bmatrix}$, and let $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$. \n\nIt can be verified that $4\\mathbf{v}_1 + 5\\mathbf{v}_2 - 3\\mathbf{v}_3 = \\mathbf{0}$. Use this information to find a basis for $H$. There is more than one answer." },
        { id: "s3", type: "solution", title: "Interactive Solution", content: "**Goal: Use the dependence relation to reduce the spanning set.**", interactiveSteps: [
           { stepText: "The equation $4\\mathbf{v}_1 + 5\\mathbf{v}_2 - 3\\mathbf{v}_3 = \\mathbf{0}$ is a linear dependence relation." },
           { prompt: "Solve this equation for $\\mathbf{v}_3$.", options: [{id:"A", text:"$\\mathbf{v}_3 = \\frac{4}{3}\\mathbf{v}_1 + \\frac{5}{3}\\mathbf{v}_2$", isCorrect:true, explanation:"Move $3\\mathbf{v}_3$ to the right and divide by 3."}, {id:"B", text:"$\\mathbf{v}_3 = 4\\mathbf{v}_1 + 5\\mathbf{v}_2$", isCorrect:false, explanation:"Don't forget the coefficient 3."}], stepText: "Since $\\mathbf{v}_3$ is a linear combination of $\\mathbf{v}_1$ and $\\mathbf{v}_2$, the Spanning Set Theorem says we can remove it." },
           { stepText: "The set $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ still spans $H$." },
           { prompt: "Are $\\mathbf{v}_1$ and $\\mathbf{v}_2$ linearly independent?", options: [{id:"A", text:"Yes, they are not multiples of each other.", isCorrect:true, explanation:"Just looking at the first entries: $4/1 \\neq -3/9$."}, {id:"B", text:"No", isCorrect:false, explanation:""}], stepText: "Since they are independent and span $H$, $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is a basis for $H$." }
        ]},
        { id: "s4", type: "quiz", title: "Alternative Bases", content: "Could $\\{\\mathbf{v}_2, \\mathbf{v}_3\\}$ also be a basis for $H$?", options: [{id:"A", text:"Yes", isCorrect:true, explanation:"We could have solved the dependence relation for $\\mathbf{v}_1$ instead, and removed it."}, {id:"B", text:"No", isCorrect:false, explanation:""}] }
      ]
    },
    {
      id: "les-1-3-11-ex20", title: "Exercise 20", description: "Finding basis from dependence relation", icon: "GitCommit",
      slides: [
        { id: "s0", type: "example_q", title: "Exercise 20", content: "**Problem:** Let $\\mathbf{v}_1 = \\begin{bmatrix} 3 \\\\ 4 \\\\ -2 \\\\ -5 \\end{bmatrix}, \\mathbf{v}_2 = \\begin{bmatrix} 4 \\\\ 3 \\\\ 2 \\\\ 4 \\end{bmatrix}, \\mathbf{v}_3 = \\begin{bmatrix} 2 \\\\ 5 \\\\ -6 \\\\ -14 \\end{bmatrix}$. \n\nIt can be verified that $2\\mathbf{v}_1 - \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$. Use this information to find a basis for $H = \\text{Span}\\{\\mathbf{v}_1, \\mathbf{v}_2, \\mathbf{v}_3\\}$." },
        { id: "s1", type: "solution", title: "Interactive Solution", content: "**Goal: Identify the redundant vector.**", interactiveSteps: [
           { stepText: "From the relation $2\\mathbf{v}_1 - \\mathbf{v}_2 - \\mathbf{v}_3 = \\mathbf{0}$, we can see the vectors are linearly dependent." },
           { prompt: "Which vector can be removed to form a basis?", options: [{id:"A", text:"Any of them", isCorrect:true, explanation:"Since all coefficients (2, -1, -1) are non-zero, any vector can be written as a combination of the other two."}, {id:"B", text:"Only $\\mathbf{v}_3$", isCorrect:false, explanation:"We can solve for $\\mathbf{v}_1$ or $\\mathbf{v}_2$ as well."}], stepText: "Let's remove $\\mathbf{v}_3$ (since $\\mathbf{v}_3 = 2\\mathbf{v}_1 - \\mathbf{v}_2$)." },
           { stepText: "The remaining set is $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$." },
           { stepText: "Since $\\mathbf{v}_1$ and $\\mathbf{v}_2$ are clearly not scalar multiples of each other, they are linearly independent." },
           { stepText: "Thus, $\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$ is a basis for $H$." }
        ]},
        { id: "s2", type: "numerical", title: "Dimension", content: "What is the dimension of the subspace $H$?", numericAnswer: 2, numericTolerance: 0 }
      ]
    }
  ]
};